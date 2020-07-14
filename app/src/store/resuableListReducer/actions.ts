import * as types from './types';

const handleReorderResuableList = (
  value: Array<{ listId: string; listName: string }>
) => ({
  type: types.REORDER_RESURABLE_LIST,
  value,
});

const handleAddResuableList = (value: {
  [key: string]: {
    listId: string;
    listName: string;
    count: number;
    list: Array<{ code: string; label: string }>;
  };
}) => ({
  type: types.ADD_REUSABLE_LIST,
  value,
});

const handleAddItemToResuableList = (
  label: string,
  value: {
    listId: string;
    listName: string;
    count: number;
    list: Array<{ code: string; label: string }>;
  }
) => ({
  type: types.ADD_ITEM_INTO_RESURABLE_LIST,
  label,
  value,
});

const handleAddResuableListToResuableList = (
  label: string,
  value: {
    listId: string;
    listName: string;
    count: number;
    list: Array<{ code: string; label: string }>;
  }
) => ({
  type: types.ADD_REUSABLE_LIST_TO_RESUABLE_LIST,
  label,
  value,
});

const handleRemoveItemFromResuableList = (
  label: string,
  value: {
    listId: string;
    listName: string;
    count: number;
    list: Array<{ code: string; label: string }>;
  }
) => ({
  type: types.REMOVE_ITEM_FROM_RESURABLE_LIST,
  label,
  value,
});

const handleModifyItem = (
  label: string,
  value: {
    listId: string;
    listName: string;
    count: number;
    list: Array<{ code: string; label: string }>;
  }
) => ({
  type: types.MODIFY_ITEM_IN_RESURABLE_LIST,
  label,
  value,
});

const handleModifyTitle = (
  label: string,
  value: {
    listId: string;
    listName: string;
    count: number;
    list: Array<{ code: string; label: string }>;
  }
) => ({
  type: types.MODIFY_TITLE_OF_ITEM,
  label,
  value,
});

const handleDeleteListFromData = (value: {
  [key: string]: {
    listId: string;
    listName: string;
    count: number;
    list: Array<{ code: string; label: string }>;
  };
}) => ({
  type: types.DELETE_LIST_FROM_DATA,
  value,
});
const handleDeleteListFromOrder = (
  value: Array<{ listId: string; listName: string }>
) => ({
  type: types.DELETE_LIST_FROM_ORDER,
  value,
});

const handleSetDisplayId = (value: string) => ({
  type: types.SET_DISPLAY_ID,
  value,
});

const handleSetCount = (value: string) => ({
  type: types.SET_REUSABLE_LIST_COUNT,
  value,
});

export {
  handleReorderResuableList,
  handleAddResuableList,
  handleAddItemToResuableList,
  handleAddResuableListToResuableList,
  handleRemoveItemFromResuableList,
  handleModifyItem,
  handleModifyTitle,
  handleDeleteListFromData,
  handleDeleteListFromOrder,
  handleSetDisplayId,
  handleSetCount,
};
