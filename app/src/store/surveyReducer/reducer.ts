import * as types from './types';

const initialState: types.SurveyReducer = {
  displayItem: {
    label: 'q0',
    type: 'SC',
    id: 'q0',
    pid: null,
  },
  insertInfo: {
    pid: '-1',
    id: '',
  },
  count: 4,
  questionData: {
    q0: {
      type: 'SC',
      label: 'Q0',
      data: {
        title: 'IM TITLE',
        text: 'This is a single choice component',
        answer: {
          count: 0,
          reusableList: [{ listId: 'list01', listName: 'LIST NAME 1' }],
          data: [{ code: '0', answer: 'apple' }],
        },
      },
    },
    q1: {
      type: 'MC',
      label: 'Q1',
      data: {
        title: 'IM TITLE',
        text: 'This is a multi-choice component',
        answer: {
          count: 1,
          reusableList: [{ listId: 'list01', listName: 'LIST NAME 1' }],
          data: [
            { code: '0', answer: 'Apple' },
            { code: '1', answer: 'Peach' },
          ],
        },
      },
    },
    q2: {
      type: 'SC',
      label: 'Q2',
      data: {
        title: 'AGE RANGE',
        text: 'Students in school',
        answer: {
          count: 0,
          reusableList: [{ listId: 'list01', listName: 'LIST NAME 1' }],
          data: [{ code: '0', answer: '14-16' }],
        },
      },
    },
    q3: {
      type: 'NL',
      label: 'Q3',
      data: {
        title: 'GOOGLE MAP',
        text: 'Please describe positions',
        answer: {
          count: 0,
          reusableList: [{ listId: 'list01', listName: 'LIST NAME 1' }],
          data: [{ code: '0', answer: 'NSW' }],
        },
      },
    },
  },
  questionOrder: [
    {
      id: 'q0',
      pid: null,
      label: 'Q0',
      type: 'SC',
      active: false,
      children: [
        {
          id: 'q1',
          pid: 'q0',
          label: 'Q1',
          type: 'MC',
          active: false,
          children: [],
        },
        {
          id: 'q2',
          pid: 'q0',
          label: 'Q2',
          type: 'SC',
          active: false,
          children: [
            {
              id: 'q3',
              pid: 'q2',
              label: 'Q3',
              type: 'TB',
              active: false,
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MODIFY_LABEL: {
      return {
        ...state,
        questionData: {
          ...state.questionData,
          [action.label]: {
            ...state.questionData[action.label],
            label: action.value,
          },
        },
      };
    }
    case types.MODIFY_TITLE: {
      return {
        ...state,
        questionData: {
          ...state.questionData,
          [action.label]: {
            ...state.questionData[action.label],
            data: {
              ...state.questionData[action.label].data,
              title: action.value,
            },
          },
        },
      };
    }
    case types.MODIFY_TEXT: {
      return {
        ...state,
        questionData: {
          ...state.questionData,
          [action.label]: {
            ...state.questionData[action.label],
            data: {
              ...state.questionData[action.label].data,
              text: action.value,
            },
          },
        },
      };
    }
    case types.ADD_ITEM_TO_LIST: {
      return {
        ...state,
        questionData: {
          ...state.questionData,
          [action.label]: {
            ...state.questionData[action.label],
            data: {
              ...state.questionData[action.label].data,
              answer: {
                ...state.questionData[action.label].data.answer,
                data: action.value.data,
                count: action.value.count,
              },
            },
          },
        },
      };
    }
    case types.DELETE_ITEM_FROM_LIST: {
      return {
        ...state,
        questionData: {
          ...state.questionData,
          [action.label]: {
            ...state.questionData[action.label],
            data: {
              ...state.questionData[action.label].data,
              answer: {
                ...state.questionData[action.label].data.answer,
                data: action.value,
              },
            },
          },
        },
      };
    }
    case types.MODIFY_ANSWER_OF_ITEM: {
      return {
        ...state,
        questionData: {
          ...state.questionData,
          [action.label]: {
            ...state.questionData[action.label],
            data: {
              ...state.questionData[action.label].data,
              answer: {
                ...state.questionData[action.label].data.answer,
                data: action.value,
              },
            },
          },
        },
      };
    }
    case types.MODIFY_CODE_OF_ITEM: {
      return {
        ...state,
        questionData: {
          ...state.questionData,
          [action.label]: {
            ...state.questionData[action.label],
            data: {
              ...state.questionData[action.label].data,
              answer: {
                ...state.questionData[action.label].data.answer,
                data: action.value,
              },
            },
          },
        },
      };
    }
    case types.ADD_REUSABLELIST_TO_LIST: {
      return {
        ...state,
        questionData: {
          ...state.questionData,
          [action.label]: {
            ...state.questionData[action.label],
            data: {
              ...state.questionData[action.label].data,
              answer: {
                ...state.questionData[action.label].data.answer,
                data: action.value,
              },
            },
          },
        },
      };
    }
    case types.HANDLE_REORDER_QUESTION_ORDER: {
      return {
        ...state,
        questionOrder: action.value,
      };
    }
    case types.ADD_NEW_ITEM_INTO_QDATA: {
      return {
        ...state,
        questionData: action.value,
      };
    }
    case types.SET_DISPLAY_ITEM: {
      return {
        ...state,
        displayItem: action.value,
      };
    }
    case types.DELETE_ITEM_FROM_DATA: {
      return {
        ...state,
        questionData: action.value,
      };
    }
    case types.DELETE_ITEM_FROM_ORDER: {
      return {
        ...state,
        questionOrder: action.value,
      };
    }
    case types.SET_INSERT_INFO: {
      return {
        ...state,
        insertInfo: action.value,
      };
    }
    case types.SET_COUNT: {
      return {
        ...state,
        count: action.value,
      };
    }
    default:
      return state;
  }
};
