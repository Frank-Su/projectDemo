// Describing the shape of the system's slice of state
export interface SurveyReducer {
    displayItem: {
        label: string;
        type: string;
        id: string;
        pid: string | null;
    };
    insertInfo: {
        pid: string | null;
        id: string;
    };
    count: number;
    questionData: {
        [key: string]: {
            type: string;
            label: string;
            data: {
                title: string;
                text: string;
                answer: {
                    count: number;
                    reusableList: Array<{
                        listId: string;
                        listName: string;
                    }>;
                    data: Array<{
                        code: string;
                        answer: string;
                    }>;
                };
            };
        };
    };
    questionOrder: Array<{
        id: string;
        type: string;
        pid: number | null;
        active: boolean;
        label: string;
        children: Array<{}>;
    }>;
}

// Describing the different ACTION NAMES available
const ADD_ITEM_TO_LIST: string = "ADD_ITEM_TO_LIST";
const DELETE_ITEM_FROM_LIST: string = "DELETE_ITEM_FROM_LIST";
const MODIFY_CODE_OF_ITEM: string = "MODIFY_CODE_OF_ITEM";
const MODIFY_ANSWER_OF_ITEM: string = "MODIFY_ANSWER_OF_ITEM";
const ADD_REUSABLELIST_TO_LIST: string = "ADD_REUSABLELIST_TO_LIST";
const MODIFY_REUSABLELIST_OF_ITEM: string = "MODIFY_REUSABLELIST_OF_ITEM";
const MODIFY_TITLE: string = "MODIFY_TITLE";
const MODIFY_TEXT: string = "MODIFY_TEXT";
const MODIFY_LABEL: string = "MODIFY_LABEL";
const HANDLE_REORDER_QUESTION_ORDER: string = "HANDLE_REORDER_QUESTION_ORDER";
const ADD_NEW_ITEM_INTO_QDATA: string = "ADD_NEW_ITEM_INTO_QDATA";
const SET_DISPLAY_ITEM: string = "SET_DISPLAY_ITEM";
const DELETE_ITEM_FROM_DATA: string = "DELETE_ITEM_FROM_DATA";
const DELETE_ITEM_FROM_ORDER: string = "DELETE_ITEM_FROM_ORDER";
const SET_INSERT_INFO: string = "SET_INSERT_INFO";
const SET_COUNT: string = "SET_COUNT";

export {
    ADD_ITEM_TO_LIST,
    DELETE_ITEM_FROM_LIST,
    MODIFY_CODE_OF_ITEM,
    MODIFY_ANSWER_OF_ITEM,
    ADD_REUSABLELIST_TO_LIST,
    MODIFY_REUSABLELIST_OF_ITEM,
    MODIFY_TITLE,
    MODIFY_TEXT,
    MODIFY_LABEL,
    HANDLE_REORDER_QUESTION_ORDER,
    ADD_NEW_ITEM_INTO_QDATA,
    SET_DISPLAY_ITEM,
    DELETE_ITEM_FROM_DATA,
    DELETE_ITEM_FROM_ORDER,
    SET_INSERT_INFO,
    SET_COUNT,
};
