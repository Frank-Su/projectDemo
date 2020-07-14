/**
 * Author: Andy
 * Date: 15/06/2020
 */
import React, { useState } from 'react';
import styles from '../../../style/componentStyle/staticComponentStyle/reusable/questionTitle.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faCog,
  faEye,
  faTrash,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import * as actionFactory from '../../../store/surveyReducer/actions';

/**
 * @param label label of question
 * @param iconBox html content of icon
 * @param readOnly can modify label or not
 * @param showEyeIcon show eye icon or not
 * @param showCogIcon show config icon or not
 * @param showCopyIcon show copy icon or not
 * @param showTrashIcon show trash icon or not
 * @function handleLabelChangeEvent change the label of the question
 */
interface QuestionTitleProps {
  label: string;
  iconBox: any;
  readOnly: boolean;
  showEyeIcon: boolean;
  showCogIcon: boolean;
  showCopyIcon: boolean;
  showTrashIcon: boolean;
  handleLabelChangeEvent: Function;
}
const QuestionTitle = (props: QuestionTitleProps) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  const questionData = useSelector(
    (state: RootState) => state.surveyReducer.questionData
  );
  const questionOrder = useSelector(
    (state: RootState) => state.surveyReducer.questionOrder
  );
  const displayItem = useSelector(
    (state: RootState) => state.surveyReducer.displayItem
  );
  const dispatch = useDispatch();

  // list stores all id of lists need to be deleted from quesitonData
  let delList: Array<string> = [];
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

  /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
  const [modifyLabel, setModifyLabel] = useState<boolean>(false);
  /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const label: string = props.label;
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  /**
   * Iterating the list and deleting a specific item in the list then return a new list
   * @param order current list need to iterate
   * @param find if id can be found in this list, will be true otherwise will be false
   */
  const getNewOrder = (order: any, find: boolean) => {
    if (find) {
      // to get the index of item need to be deleted in the list and then return
      // a new list after deleting it
      let targetIndex = -1;
      order.map((item, index) => {
        if (item.id == displayItem.id) {
          targetIndex = index;
        }
      });
      const returnOrder = [...order];
      returnOrder.splice(targetIndex, 1);
      return returnOrder;
    } else {
      // if pid of item need to be deleted equals to the current item id, then set find flag
      // to be true which mean the item need to be deleted can
      // be found in the children of current item
      const returnOrder = [...order];
      for (let i = 0; i < order.length; i++) {
        order[i].id == displayItem.pid
          ? (returnOrder[i].children = getNewOrder(order[i].children, true))
          : (returnOrder[i].children = getNewOrder(order[i].children, false));
      }
      return returnOrder;
    }
  };

  /**
   * Start to push all item id in this list in to delList.
   * @param list current list during the iterating
   */
  const startPush = (list: any) => {
    list.map((item, index) => {
      delList.push(item.id);
      startPush(item.children);
    });
  };

  /**
   * Find the specific item need to be deleted and then start to
   * push all item id in its children list into deList.
   * @param order current orderList during the iterating
   */
  const getChildren = (order: any) => {
    order.map((item, index) => {
      if (item.id == displayItem.id) {
        delList.push(item.id);
        startPush(item.children);
      } else {
        getChildren(item.children);
      }
    });
  };

  /**
   * Delete a item from the database.
   */
  const handleDeleteReusableList = () => {
    const newData = { ...questionData };

    // get all item id need to be deleted(the item itself and its children)
    getChildren(questionOrder);

    // find the item need to be deleted if its pid is null, which means don't need to
    // go througth the iterating
    if (displayItem.pid == null) {
      let targetIndex = -1;
      questionOrder.map((item, index) => {
        if (item.id == displayItem.id) {
          targetIndex = index;
        }
      });
      const newOrder = [...questionOrder];
      // get the new order after deleting
      newOrder.splice(targetIndex, 1);
      // dispatch the new order into redux
      dispatch(actionFactory.deleteItemFromOrder(newOrder));
      // dispatch the information of item need to render into redux
      dispatch(
        newOrder.length > 0
          ? actionFactory.handleSetDisplayItem({
              label: newOrder[0].id,
              type: newOrder[0].type,
              id: newOrder[0].id,
              pid: newOrder[0].pid,
            })
          : actionFactory.handleSetDisplayItem({
              label: '-1',
              type: '-1',
              id: '-1',
              pid: null,
            })
      );
      // reset the insertInfo into redux, pid:'-1' means need to select on item to addafter or addbefore
      dispatch(actionFactory.setInsertInfo({ pid: '-1', id: '' }));
    } else {
      // pid is not null needs to go throught the iterating
      const newOrder = getNewOrder(questionOrder, false);
      dispatch(actionFactory.deleteItemFromOrder(newOrder));
      dispatch(
        newOrder.length > 0
          ? actionFactory.handleSetDisplayItem({
              label: newOrder[0].id,
              type: newOrder[0].type,
              id: newOrder[0].id,
              pid: newOrder[0].pid,
            })
          : actionFactory.handleSetDisplayItem({
              label: '-1',
              type: '-1',
              id: '-1',
              pid: null,
            })
      );
      dispatch(actionFactory.setInsertInfo({ pid: '-1', id: '' }));
    }

    // Deleting all item in questionData by its id stored in delList
    delList.map((item) => delete newData[item]);

    // dipatch need questionData into redux
    dispatch(actionFactory.deleteItemFromData(newData));
  };
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */
  return (
    <div className={styles.ekasQTitleWrapper}>
      {/* --------------------- START: left part of title --------------------- */}
      {props.readOnly ? (
        <div className={styles.ekasQTitleLeftPart}>
          {props.iconBox}
          <div className={styles.ekasQTitleLeftPartInput}>
            <span>{label}</span>
          </div>
        </div>
      ) : (
        <div className={styles.ekasQTitleLeftPart}>
          {props.iconBox}

          <div className={styles.ekasQTitleLeftPartInput}>
            {modifyLabel ? (
              <input
                defaultValue={label}
                autoFocus
                onBlur={(e) => {
                  setModifyLabel(false);
                  props.handleLabelChangeEvent(e.target.value);
                }}
              />
            ) : (
              <span onClick={() => setModifyLabel(true)}>{label}</span>
            )}
          </div>
          <div
            className={styles.ekasQTitleLeftPartEditicon}
            onClick={() => setModifyLabel(true)}
          >
            <FontAwesomeIcon icon={faPen} />
          </div>
        </div>
      )}
      {/* --------------------- END: left part of title --------------------- */}

      {/* --------------------- START: right part of title --------------------- */}
      <div className={styles.ekasQTitleRightPart}>
        {props.showEyeIcon ? (
          <div className={styles.ekasQTitleLeftPartEditicon}>
            <FontAwesomeIcon icon={faEye} />
          </div>
        ) : null}
        {props.showCogIcon ? (
          <div className={styles.ekasQTitleLeftPartEditicon}>
            <FontAwesomeIcon icon={faCog} />
          </div>
        ) : null}
        {props.showCopyIcon ? (
          <div className={styles.ekasQTitleLeftPartEditicon}>
            <FontAwesomeIcon icon={faCopy} />
          </div>
        ) : null}
        {props.showTrashIcon ? (
          <div
            className={styles.ekasQTitleLeftPartEditicon}
            onClick={() => handleDeleteReusableList()}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        ) : null}
      </div>
      {/* --------------------- END: left part of title --------------------- */}
    </div>
  );
};
export default QuestionTitle;
