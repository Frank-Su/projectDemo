import * as actions from './types';

const initialState: actions.ResuableListReducer = {
  displayListId: 'list1',
  count: 4,
  resuableListData: {
    list1: {
      listId: 'list1',
      listName: 'LIST NAME 1',
      count: 3,
      list: [
        { code: '1', label: 'label1' },
        { code: '2', label: 'label2' },
        { code: '3', label: 'label3' },
      ],
    },
    list2: {
      listId: 'list2',
      listName: 'LIST NAME 2',
      count: 1,
      list: [{ code: '1', label: 'label1' }],
    },
    list3: {
      listId: 'list3',
      listName: 'LIST NAME 3',
      count: 1,
      list: [{ code: '1', label: 'label1' }],
    },
  },
  resuableListOrder: [
    { listId: 'list1', listName: 'LIST NAME 1' },
    { listId: 'list2', listName: 'LIST NAME 2' },
    { listId: 'list3', listName: 'LIST NAME 3' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REORDER_RESURABLE_LIST:
      return {
        ...state,
        resuableListOrder: action.value,
      };
    case actions.ADD_REUSABLE_LIST:
      return {
        ...state,
        resuableListData: action.value,
      };
    case actions.ADD_ITEM_INTO_RESURABLE_LIST:
      return {
        ...state,
        resuableListData: {
          ...state.resuableListData,
          [action.label]: action.value,
        },
      };
    case actions.ADD_REUSABLE_LIST_TO_RESUABLE_LIST:
      return {
        ...state,
        resuableListData: {
          ...state.resuableListData,
          [action.label]: action.value,
        },
      };
    case actions.MODIFY_ITEM_IN_RESURABLE_LIST:
      return {
        ...state,
        resuableListData: {
          ...state.resuableListData,
          [action.label]: action.value,
        },
      };
    case actions.MODIFY_TITLE_OF_ITEM:
      return {
        ...state,
        resuableListData: {
          ...state.resuableListData,
          [action.label]: action.value,
        },
      };
    case actions.DELETE_LIST_FROM_DATA:
      return {
        ...state,
        resuableListData: action.value,
      };
    case actions.DELETE_LIST_FROM_ORDER:
      return {
        ...state,
        resuableListOrder: action.value,
      };
    case actions.SET_DISPLAY_ID:
      return {
        ...state,
        displayListId: action.value,
      };
    case actions.SET_REUSABLE_LIST_COUNT:
      return {
        ...state,
        count: action.value,
      };
    default:
      return state;
  }
};
