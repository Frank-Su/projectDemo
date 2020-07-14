/**
 * Author: Andy
 * Date: 10/06/2020
 */
import * as types from '../../store/surveyReducer/types';

const addItemToListAction = (
  label: string,
  value: { data: Array<{ code: string; answer: string }>; count: number }
) => ({
  type: types.ADD_ITEM_TO_LIST,
  label: label,
  value,
});
const deleteItemFromListAction = (
  label: string,
  value: Array<{ code: string; answer: string }>
) => ({
  type: types.DELETE_ITEM_FROM_LIST,
  label,
  value,
});
const ModifyCodeOfItemAction = (
  label: string,
  value: Array<{ code: string; answer: string }>
) => ({
  type: types.MODIFY_CODE_OF_ITEM,
  label,
  value,
});
const ModifyAnswerOfItemAction = (
  label: string,
  value: Array<{ code: string; answer: string }>
) => ({
  type: types.MODIFY_ANSWER_OF_ITEM,
  label,
  value,
});
const addReusableTolistAction = (
  label: string,
  value: Array<{ code: string; answer: string }>
) => ({
  type: types.ADD_REUSABLELIST_TO_LIST,
  label,
  value,
});
const modifyTitleAction = (label: string, value: string) => ({
  type: types.MODIFY_TITLE,
  label,
  value,
});
const modifyTextAction = (label: string, value: string) => ({
  type: types.MODIFY_TEXT,
  label,
  value,
});
const modifyLabelAction = (label: string, value: string) => ({
  type: types.MODIFY_LABEL,
  label,
  value,
});

const handleReorderQuestionOrder = (value: any) => ({
  type: types.HANDLE_REORDER_QUESTION_ORDER,
  value,
});

const handleAddNewItemIntoData = (value: any) => ({
  type: types.ADD_NEW_ITEM_INTO_QDATA,
  value,
});

const handleSetDisplayItem = (value: {
  label: string;
  type: string;
  id: string;
  pid: string | null;
}) => ({
  type: types.SET_DISPLAY_ITEM,
  value,
});

const deleteItemFromData = (value: any) => ({
  type: types.DELETE_ITEM_FROM_DATA,
  value,
});
const deleteItemFromOrder = (value: any) => ({
  type: types.DELETE_ITEM_FROM_ORDER,
  value,
});

const setInsertInfo = (value: any) => ({
  type: types.SET_INSERT_INFO,
  value,
});

const setCount = (value: any) => ({
  type: types.SET_COUNT,
  value,
});
// action factory
export {
  addItemToListAction,
  deleteItemFromListAction,
  ModifyCodeOfItemAction,
  ModifyAnswerOfItemAction,
  addReusableTolistAction,
  modifyTitleAction,
  modifyTextAction,
  modifyLabelAction,
  handleReorderQuestionOrder,
  handleAddNewItemIntoData,
  handleSetDisplayItem,
  deleteItemFromData,
  deleteItemFromOrder,
  setInsertInfo,
  setCount,
};
