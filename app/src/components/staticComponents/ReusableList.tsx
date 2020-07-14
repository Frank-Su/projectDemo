/**
 * Author: Andy
 * Date: 17/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable//ReusableTitle';
import QuestionList from './reusable/ReusableList';
import styles from '../../style/componentStyle/staticComponentStyle/reusableList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import * as actionFactory from '../../store/resuableListReducer/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

/**
 * @param label text content of label
 */
interface ReusableListProps {
  label: string;
}
const ReusableList = (props: ReusableListProps) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  const listData = useSelector(
    (state: RootState) => state.resuableListReducer.resuableListData
  );
  const newState = listData[props.label];
  const dispatch = useDispatch();

  const listOrder = useSelector(
    (state: RootState) => state.resuableListReducer.resuableListOrder
  );
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasRLIcon}>
      <FontAwesomeIcon icon={faList} />
    </div>
  );
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  /**
   * Add an item into the resuable list
   */
  const handleAddItem = () => {
    const { list, count } = newState;
    const newList = [...list];
    const newCount = count + 1;
    newList.push({ code: `${newCount}`, label: '' });
    dispatch(
      actionFactory.handleAddItemToResuableList(props.label, {
        ...newState,
        list: newList,
        count: newCount,
      })
    );
  };

  /**
   * Add resuable list into the resuable list
   */
  const handleAddReusableListToResuableList = () => {
    const { list } = newState;
    const newList = [...list];
    newList.push({ code: '-1', label: listOrder[0].listName });
    dispatch(
      actionFactory.handleAddResuableListToResuableList(props.label, {
        ...newState,
        list: newList,
      })
    );
  };

  /**
   * Delete an item from the reusable list.
   * @param index index of item needs to be deleted
   */
  const handleDeleteItem = (index: number) => {
    const { list } = newState;
    const newList = [...list];
    newList.splice(index, 1);
    dispatch(
      actionFactory.handleAddResuableListToResuableList(props.label, {
        ...newState,
        list: newList,
      })
    );
  };

  /**
   * Modify values in item (code and label)
   * @param id id of item needs to be modified
   * @param value new input value
   */
  const handleModifyItem = (id: string, value: string) => {
    const [tagName, index] = id.split(',');
    const { list } = newState;
    const newList = [...list];
    switch (tagName) {
      case 'CODE':
        newList[parseInt(index)].code = value;
        dispatch(
          actionFactory.handleModifyItem(props.label, {
            ...newState,
            list: newList,
          })
        );
        break;
      case 'LABEL':
        newList[parseInt(index)].label = value;
        dispatch(
          actionFactory.handleModifyItem(props.label, {
            ...newState,
            list: newList,
          })
        );
        break;
    }
  };

  /**
   * Modify the label of list.
   * @param newLabel new label of the list
   */
  const handleModifyLabel = (newLabel: string) => {
    dispatch(
      actionFactory.handleAddResuableListToResuableList(props.label, {
        ...newState,
        listName: newLabel,
      })
    );
  };

  /**
   * Delete a list from the database.
   */
  const handleDeleteReusableList = () => {
    const newData = { ...listData };
    const newOrder = [...listOrder];
    let targetIndex: number = -1;
    listOrder.map((item, index) => {
      if (item.listId == props.label) {
        targetIndex = index;
      }
    });
    if (targetIndex !== -1) {
      newOrder.splice(targetIndex, 1);
    }
    delete newData[props.label];
    dispatch(
      actionFactory.handleSetDisplayId(
        newOrder.length > 0 ? newOrder[0].listId : '-1'
      )
    );
    dispatch(actionFactory.handleDeleteListFromData(newData));
    dispatch(actionFactory.handleDeleteListFromOrder(newOrder));
  };
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */
  return (
    <div>
      {console.log(props.label)}
      <QuestionTitle
        label={newState.listName}
        iconBox={iconBox}
        readOnly={false}
        showEyeIcon={false}
        showCogIcon={true}
        showCopyIcon={true}
        showTrashIcon={true}
        handleLabelChangeEvent={handleModifyLabel}
        handleDeleteEvent={handleDeleteReusableList}
      />
      <div className={styles.ekasRULTagsWrapper}>
        <span className={styles.ekasRULTagsSpanSelected}>Edit</span>
      </div>
      <div style={{ height: '2rem' }}></div>
      <QuestionList
        data={newState.list}
        reusableList={[]}
        listLabel={'Reusable list'}
        handleAddItem={handleAddItem}
        handleAddReusableList={handleAddReusableListToResuableList}
        handleDeleteItem={handleDeleteItem}
        handleModifyItem={handleModifyItem}
        handleModifyReusableList={() => {}}
      />
    </div>
  );
};
export default ReusableList;
