/**
 * Author: Frank
 * Date: 2020/06/10
 */
import React, { useState } from 'react';
import SurveyDesignLayout from '../components/layout/SurveyDesignLayout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import style from '../style/staticPageStyle/resuableList.scss';
import * as actions from '../store/resuableListReducer/actions';
import ResuableListComponent from '../components/staticComponents/ReusableList';

const ResuableList = () => {
  /* <------------------------------------ **** HOOK START **** ------------------------------------ */
  // this hook will store id of the click item
  const [clickItemId, setClickItemId] = useState('');
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  /* <------------------------------------ **** HOOK END **** ------------------------------------ */
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  // define dispatch
  const dispatch = useDispatch();
  const resuableListData: {
    [key: string]: {
      listId: string;
      listName: string;
      count: number;
      list: Array<{ code: string; label: string }>;
    };
  } = useSelector(
    (state: RootState) => state.resuableListReducer.resuableListData
  );

  // get the resuable list order data from the redux
  const resuableListOrder: Array<{
    listId: string;
    listName: string;
  }> = useSelector(
    (state: RootState) => state.resuableListReducer.resuableListOrder
  );
  const displayId: string = useSelector(
    (state: RootState) => state.resuableListReducer.displayListId
  );
  const count: string = useSelector(
    (state: RootState) => state.resuableListReducer.count
  );

  // when drag start record the item index
  let dragItemIndex: number = 0;
  // when drag start record the drag item data
  let dragItem: any = {};
  // when click the item the drop area index
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */

  /**
   * this function will hidden the drag element when drag start
   * @param {string}listId the drag item id
   */
  const handleDragStart = (listId: string, index: number, item: object) => {
    const getDragItem: HTMLElement | null = document.getElementById(
      `${listId}resuable_List_drag_item_Wrapper`
    );
    getDragItem?.classList.add(style.ekasResuableListItem_DragStart);
    // renew the drag item index
    dragItemIndex = index;
    dragItem = item;
  };

  /**
   * this function will change the drop area style when drag item enter the drop area
   * @param {string}listId the drop area id
   */
  const handleDragEnter = (listId: string) => {
    const getDropArea: HTMLElement | null = document.getElementById(
      `${listId}resuable_List_drop_area`
    );
    getDropArea?.classList.add(style.ekasResuableListItem_enterDropArea);
  };

  /**
   * this function will change the drop area style when drag item leave the drop area
   * @param {string}listId the drop area id
   */
  const handleDragLeave = (listId: string) => {
    const getDropArea: any = document.getElementById(
      `${listId}resuable_List_drop_area`
    );
    getDropArea?.classList.remove(style.ekasResuableListItem_enterDropArea);
  };

  /**
   * this function will prevent default event happend
   * @param {e} e event
   */
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  /**
   * this function will reorder the list order when drop the item
   * @param {string}listId the drop area id
   */
  const handleDropItem = (listId: string, index: number, item: any) => {
    const getDropArea: any = document.getElementById(
      `${listId}resuable_List_drop_area`
    );
    getDropArea?.classList.remove(style.ekasResuableListItem_enterDropArea);

    // generate the new list order
    if (dragItemIndex !== index) {
      //1. delete the drag item
      const newList = resuableListOrder.filter((item) => item !== dragItem);
      //2. find the drop area index
      const dropAreaIndex = newList.indexOf(item);
      //3. put the drag item after it
      newList.splice(dropAreaIndex + 1, 0, dragItem);
      // store list in the reducer
      dispatch(actions.handleReorderResuableList(newList));
    }
  };
  /**
   * this function will show the drag item when stop drag
   * @param {string}listId the drag item id
   */
  const handleDragEnd = (listId: string) => {
    const getDragItem: HTMLElement | null = document.getElementById(
      `${listId}resuable_List_drag_item_Wrapper`
    );
    getDragItem?.classList.remove(style.ekasResuableListItem_DragStart);
  };

  /**
   * this function will change the drag item style when clicked
   * @param {number}index the click item index
   */
  const handleDragItemClicked = (e: any, index: number, listId: string) => {
    dispatch(actions.handleSetDisplayId(listId));
    // stop porpogation of the layout click event
    e.stopPropagation();
    // store the select item index
    setSelectedItemIndex(index);
    // store the select item dom id
    // 1. remove the previous clicked item style
    if (clickItemId !== '') {
      const getPreviousClickItemDom: HTMLElement | null = document.getElementById(
        clickItemId
      );
      getPreviousClickItemDom?.classList.remove(
        style.ekasResuableListItem_select
      );
    }
    //2. add style to clicked item
    const getCurrentClickItemDom: HTMLElement | null = document.getElementById(
      `${listId}resuable_List_drag_item_Wrapper`
    );
    getCurrentClickItemDom?.classList.add(style.ekasResuableListItem_select);
    //3.update store data
    setClickItemId(`${listId}resuable_List_drag_item_Wrapper`);
  };

  /**
   * this function will add a new resuable list after select item
   * @param {number} index the index of the select item
   */
  const handleAddListBefore = (index: number) => {
    // add the new Item before select item
    if (index === -1) {
      alert('please select the list to insert the new list');
    } else {
      const newList = [...resuableListOrder];
      const newItem = {
        listId: `list${count}`,
        listName: `LIST NAME ${count}`,
      };
      newList.splice(index, 0, newItem);
      dispatch(actions.handleReorderResuableList(newList));

      const newItemDate = {
        listId: `list${count}`,
        listName: `LIST NAME ${count}`,
        count: 0,
        list: [],
      };
      dispatch(
        actions.handleAddResuableList({
          ...resuableListData,
          [`list${count}`]: newItemDate,
        })
      );
      dispatch(actions.handleSetCount(count + 1));
    }
    // reset the select item index
    setSelectedItemIndex(-1);
  };

  /**
   * this function will add a new resuable list after select item
   * @param {number} index the index of the select item
   */
  const handleAddListAfter = (index: number) => {
    // add the new Item before select item
    if (index === -1) {
      alert('please select the list to insert the new list');
    } else {
      const newList = [...resuableListOrder];
      const newItem = {
        listId: `list${count}`,
        listName: `LIST NAME ${count}`,
      };
      newList.splice(index + 1, 0, newItem);
      dispatch(actions.handleReorderResuableList(newList));

      const newItemDate = {
        listId: `list${count}`,
        listName: `LIST NAME ${count}`,
        count: 0,
        list: [],
      };
      dispatch(
        actions.handleAddResuableList({
          ...resuableListData,
          [`list${count}`]: newItemDate,
        })
      );
    }
    dispatch(actions.handleSetCount(count + 1));
    // reset the select item index
    setSelectedItemIndex(-1);
  };

  /**
   * this function will remove all the clicked style when click the layout area
   */
  const handleClickLayoutArea = () => {
    //1. remove all the clicked list item style and reset all the style to the initial style
    if (clickItemId !== '') {
      const getPreviousClickItemDom: HTMLElement | null = document.getElementById(
        clickItemId
      );
      getPreviousClickItemDom?.classList.remove(
        style.ekasResuableListItem_select
      );
      setClickItemId('');
      setSelectedItemIndex(-1);
    }
  };

  /**
   * Return an new ResuableListComponent with specific id
   * @param id id of the reusablelist needs to be rendered
   */
  const getRenderReusableList = (id: string) => {
    return id == '-1' ? null : <ResuableListComponent label={id} />;
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */

  const menuBar: JSX.Element = (
    <div>
      <div className={style.ekasResuableListBarTitle}>
        <span>Resuable Lists</span>
      </div>
      {/* <------------------------------------ **** ITEM MAP AND DRAG START **** ------------------------------------ */}
      {resuableListOrder.map((item, index) => {
        return (
          <div key={item.listId}>
            <div
              className={style.ekasResuableListItem}
              id={`${item.listId}resuable_List_drag_item_Wrapper`}
              draggable={true}
              onDragStart={(e) => {
                handleDragStart(item.listId, index, item);
              }}
              onDragEnd={() => {
                handleDragEnd(item.listId);
              }}
              onClick={(e) => {
                handleDragItemClicked(e, index, item.listId);
              }}
            >
              <div className={style.ekasResuableListItemCheckBoxWrapper}>
                <div className={style.ekasResuableListItemCheckBox}></div>
              </div>
              <FontAwesomeIcon
                icon={faList}
                className={style.ekasResuableListItemIcon}
              />
              {console.log('sss', item.listId)}
              {resuableListData[item.listId].listName}
              <div className={style.ekasResuableListSettingWrapper}>
                <div className={style.ekasResuableListSettingDot} />
                <div className={style.ekasResuableListSettingDot} />
                <div className={style.ekasResuableListSettingDot} />
              </div>
            </div>
            <div
              onDragEnter={() => handleDragEnter(item.listId)}
              onDragLeave={() => handleDragLeave(item.listId)}
              onDragOver={(e) => handleDragOver(e)}
              onDrop={() => {
                handleDropItem(item.listId, index, item);
              }}
              className={style.ekasResuableListDropArea}
              id={`${item.listId}resuable_List_drop_area`}
            ></div>
          </div>
        );
      })}
      {/* <------------------------------------ **** ITEM MAP AND DRAG END **** ------------------------------------ */}
    </div>
  );
  const menuItem: JSX.Element = (
    <div>
      {/* <------------------------------------ **** ADD NEW ITEM BUTTON START **** ------------------------------------ */}
      <div className={style.ekasResuableMenuBtnWrapper}>
        <button
          className={style.ekasResuableMenuAddBtn}
          onClick={() => {
            handleAddListBefore(selectedItemIndex);
          }}
        >
          <FontAwesomeIcon
            icon={faPlus}
            className={style.ekasResuableMenuSideBarIcon}
          />
          before
        </button>
        <button
          className={style.ekasResuableMenuAddBtn}
          onClick={() => handleAddListAfter(selectedItemIndex)}
        >
          <FontAwesomeIcon
            icon={faPlus}
            className={style.ekasResuableMenuSideBarIcon}
          />
          after
        </button>
      </div>
      {/* <------------------------------------ **** ADD NEW ITEM BUTTON END **** ------------------------------------ */}
      <div className={style.ekasResuableMenuItemWrapper}>
        {console.log(resuableListOrder)}
        {getRenderReusableList(displayId)}
      </div>
    </div>
  );
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** RENDER START **** ------------------------------------ */
  return (
    <SurveyDesignLayout
      menuBar={menuBar}
      menuItem={menuItem}
      LayOutClick={() => {
        handleClickLayoutArea();
      }}
    />
  );
  /* <------------------------------------ **** RENDER END **** ------------------------------------ */
};

export default ResuableList;
