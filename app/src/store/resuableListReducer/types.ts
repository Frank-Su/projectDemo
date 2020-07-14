// Describing the shape of the system's slice of state
export interface ResuableListReducer {
  displayListId: string;
  count: number;
  resuableListData: {
    [key: string]: {
      listId: string;
      listName: string;
      count: number;
      list: Array<{ code: string; label: string }>;
    };
  };
  resuableListOrder: Array<{ listId: string; listName: string }>;
}

// Describing the different ACTION NAMES available
const REORDER_RESURABLE_LIST: string = 'REORDER_RESURABLE_LIST';
const ADD_REUSABLE_LIST: string = 'ADD_REUSABLE_LIST';
const ADD_REUSABLE_LIST_TO_RESUABLE_LIST: string =
  'ADD_REUSABLE_LIST_TO_RESUABLE_LIST';
const ADD_ITEM_INTO_RESURABLE_LIST: string = 'ADD_ITEM_INTO_RESURABLE_LIST';
const DELETE_ITEM_INTO_RESURABLE_LIST: string =
  'DELETE_ITEM_INTO_RESURABLE_LIST';
const REMOVE_ITEM_FROM_RESURABLE_LIST: string =
  'REMOVE_ITEM_FROM_RESURABLE_LIST';

const MODIFY_ITEM_IN_RESURABLE_LIST: string = 'MODIFY_ITEM_IN_RESURABLE_LIST';
const MODIFY_TITLE_OF_ITEM: string = 'MODIFY_TITLE_OF_ITEM';

const DELETE_LIST_FROM_DATA: string = 'DELETE_LIST_FROM_DATA';
const DELETE_LIST_FROM_ORDER: string = 'DELETE_LIST_FROM_ORDER';

const SET_DISPLAY_ID: string = 'SET_DISPLAY_ID';
const SET_REUSABLE_LIST_COUNT: string = 'SET_REUSABLE_LIST_COUNT';
export {
  REORDER_RESURABLE_LIST,
  ADD_ITEM_INTO_RESURABLE_LIST,
  DELETE_ITEM_INTO_RESURABLE_LIST,
  REMOVE_ITEM_FROM_RESURABLE_LIST,
  ADD_REUSABLE_LIST,
  ADD_REUSABLE_LIST_TO_RESUABLE_LIST,
  MODIFY_ITEM_IN_RESURABLE_LIST,
  MODIFY_TITLE_OF_ITEM,
  DELETE_LIST_FROM_DATA,
  DELETE_LIST_FROM_ORDER,
  SET_DISPLAY_ID,
  SET_REUSABLE_LIST_COUNT,
};
