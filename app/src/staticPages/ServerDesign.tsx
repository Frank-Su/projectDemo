/**
 * Author: Frank
 * Date: 2020/06/10
 */
import React, { useState } from "react";
import SurveyDesignLayout from "../components/layout/SurveyDesignLayout";
import * as components from "../components/sdComponents/index";
import * as staticComponents from "../components/staticComponents/index";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/rootReducer";
import Display from "../components/staticComponents/Display";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faComment,
    faComments,
    faInfoCircle,
    faCalendarDay,
    faDotCircle,
    faSitemap,
    faCheckSquare,
    faHashtag,
    faLayerGroup,
    faTrophy,
    faBorderAll,
    faThLarge,
    faBorderNone,
    faImage,
    faBarcode,
    faMapMarkerAlt,
    faCube,
    faCubes,
    faChartLine,
    faNetworkWired,
    faChevronCircleDown,
    faEnvelope,
    faFolder,
    faSyncAlt,
    faFileAlt,
    faToiletPaper,
    faScroll,
    faExclamationTriangle,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import style from "../style/staticPageStyle/surveyDesign.scss";
import * as actions from "../store/surveyReducer/actions";
const ServerDesign = () => {
    /* <------------------------------------ **** CONSTANTS START **** ------------------------------------ */
    // list of label box
    const labelBox = {
        BK: <FontAwesomeIcon icon={faCube} className={style.ekasBlockIcon} />,
        BKC: <FontAwesomeIcon icon={faCubes} className={style.ekasBlockIcon} />,
        CT: <FontAwesomeIcon icon={faChartLine} className={style.ekasCTIcon} />,
        CD: <FontAwesomeIcon icon={faNetworkWired} className={style.ekasCDIcon} />,
        DT: <FontAwesomeIcon icon={faChevronCircleDown} className={style.ekasDTIcon} />,
        EM: <FontAwesomeIcon icon={faEnvelope} className={style.ekasEMIcon} />,
        FD: <FontAwesomeIcon icon={faFolder} className={style.ekasFDIcon} />,
        LP: <FontAwesomeIcon icon={faSyncAlt} className={style.ekasLPIcon} />,
        PG: <FontAwesomeIcon icon={faFileAlt} className={style.ekasPGIcon} />,
        PGB: <FontAwesomeIcon icon={faToiletPaper} className={style.ekasPGBIcon} />,
        SCP: <FontAwesomeIcon icon={faScroll} className={style.ekasSCPIcon} />,
        SP: <FontAwesomeIcon icon={faExclamationTriangle} className={style.ekasSPIcon} />,
        TEL: <FontAwesomeIcon icon={faPhoneAlt} className={style.ekasTELIcon} />,
    };

    // list of label icon
    const labelList = {
        TT: faComment,
        TTL: faComments,
        INFO: faInfoCircle,
        DATE: faCalendarDay,
        SC: faDotCircle,
        TB: faSitemap,
        MC: faCheckSquare,
        NC: faHashtag,
        NCL: faLayerGroup,
        RK: faTrophy,
        GD: faBorderAll,
        GDM: faThLarge,
        GD3D: faBorderNone,
        IMG: faImage,
        QR: faBarcode,
        GEO: faMapMarkerAlt,
    };
    /* <------------------------------------ **** CONSTANTS END **** ------------------------------------ */

    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    const dispatch = useDispatch();
    const questionOrder: any = useSelector((state: RootState) => state.surveyReducer.questionOrder);
    const questionData: any = useSelector((state: RootState) => state.surveyReducer.questionData);
    const displayItem: {
        label: string;
        type: string;
        id: string;
        pid: string | null;
    } = useSelector((state: RootState) => state.surveyReducer.displayItem);
    const insertInfo: {
        pid: string | null;
        id: string;
    } = useSelector((state: RootState) => state.surveyReducer.insertInfo);
    const count: number = useSelector((state: RootState) => state.surveyReducer.count);
    let dragItem: any;
    /* <------------------------------------ **** STATE END **** ------------------------------------ */

    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const [add, setAdd] = useState<boolean>(false);
    const [addAfter, setAddAfter] = useState<boolean>(true);
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /**
     * this function will prevend default function
     * @param {Event} e event
     */
    const handleDragAreaOver = (e: any) => {
        e.preventDefault();
    };

    /**
     * when start drag the item, add new style to the drag item and store the index
     * @param {any} item drag item data
     * @param {index} index drag item index in current arr
     * @param {Event} e event
     */

    const handleItemDragStart = (item: any, index: number, e: any) => {
        const getDragItem: HTMLElement | null = document.getElementById(`${item.id}survey_design_drag_item_Wrapper`);
        getDragItem?.classList.add(style.ekasSurveyDesignItem_DragStart);
        e.stopPropagation();
        dragItem = item;
    };

    /**
     * this function will remove the nested select item style according to the ID
     * @param {item} select item
     */

    const removeNewStyleToSameLevelArea = (item: any) => {
        const getSameLeveDropArea: HTMLElement | null = document.getElementById(
            `${item.id}survey_design_drop_same_level_area`,
        );
        getSameLeveDropArea?.classList.remove(style.ekasSurveyDesignItem_SameLevelDropArea);
    };
    /**
     * this function will change the drop area style when drag item enter the same level drop area
     * @param {string}item the drop area data
     */
    const handleDragEnterSameLevelArea = (item: any) => {
        console.log("drag enter");
        const getSameLeveDropArea: HTMLElement | null = document.getElementById(
            `${item.id}survey_design_drop_same_level_area`,
        );
        getSameLeveDropArea?.classList.add(style.ekasSurveyDesignItem_SameLevelDropArea);
    };
    /**
     * this function will change the drop area style when drag item Leave the same level drop area
     * @param {string}item the drop area data
     */
    const handleDragLeaveSameLevelArea = (item: any) => {
        console.log("drag leave");
        removeNewStyleToSameLevelArea(item);
    };

    /**
     * this function will remove all the style according to the id
     * @param {any}item the selected item data
     */
    const removeNewStyleToNestedLevelArea = (item: any) => {
        const getNestedLeveDropArea: HTMLElement | null = document.getElementById(
            `${item.id}survey_design_drop_Nested_level_area`,
        );
        getNestedLeveDropArea?.classList.remove(style.ekasSurveyDesignItem_NestedLevelDropArea);
        const getNestedLeveDropAreaHight: HTMLElement | null = document.getElementById(
            `${item.id}survey_design_drop_same_level_area`,
        );
        getNestedLeveDropAreaHight?.classList.remove(style.ekasSurveyDesignItem_WrapperHight);
    };

    /**
     * this function will change the drop area style when drag item enter the nested level drop area
     * @param {string}item the drop area data
     */
    const handleDragEnterNestedLevelArea = (item: any) => {
        const getNestedLeveDropArea: HTMLElement | null = document.getElementById(
            `${item.id}survey_design_drop_Nested_level_area`,
        );
        getNestedLeveDropArea?.classList.add(style.ekasSurveyDesignItem_NestedLevelDropArea);
        const getNestedLeveDropAreaHight: HTMLElement | null = document.getElementById(
            `${item.id}survey_design_drop_same_level_area`,
        );
        getNestedLeveDropAreaHight?.classList.add(style.ekasSurveyDesignItem_WrapperHight);
    };

    /**
     * this function will remove all the style for drop areq when leave the nested drop area
     * @param {}
     */
    const handleDragLeaveNestedLevelArea = (item: any) => {
        removeNewStyleToNestedLevelArea(item);
    };
    // when item drop in the same level drop area
    // 1. delete the drag item when drop
    const getFilterArr = (data: any, deleteId: any) => {
        return data.filter(function (item: any) {
            if (item.children.length > 0) {
                item.children = getFilterArr(item.children, deleteId);
            }
            return item.id !== deleteId;
        });
    };
    // 2. when item drop in the same level drop area, add the drag item into the same level
    /**
     *
     * this function will help to reorder the target arr after drop into the same level
     * @param {any} data the data arr need to be reorder
     * @param {number} targetFatherId the target father's id
     * @param {number} targetItem the target item
     * @param {number} addItem which item you need to add into the target id's children
     *
     */

    const addItemInSameLevel = (data: any, targetFatherId: number, targetItem: any, addItem: any) => {
        const newData = (data: any) => {
            let newAddItem = { ...addItem, pid: targetFatherId };
            if (targetFatherId === null) {
                let temData = data;
                let index = data.indexOf(targetItem);
                temData.splice(index + 1, 0, newAddItem);
                return temData;
            } else {
                return data.map((item: any) => {
                    if (item.id === targetFatherId) {
                        let tempChildren = item.children;
                        let index = item.children.indexOf(targetItem);
                        tempChildren.splice(index + 1, 0, newAddItem);
                        return {
                            ...item,
                            children: [...tempChildren],
                        };
                    } else if (item.children.length !== 0) {
                        return { ...item, children: [...newData(item.children)] };
                    } else {
                        return item;
                    }
                });
            }
        };
        return newData(data);
    };

    // 3 when item drop into the nested drop area
    /**
     * this function will help to reorder the target arr after drop into the nested level
     * @param {any} data the data arr need to be reorder
     * @param {number} targetFatherId the target father's id
     * @param {number} targetItem the target item
     * @param {number} addItem which item you need to add into the target id's children
     */
    const addItemInNestedLevel = (data: any, targetFatherId: number, addItem: any) => {
        const newData = (data: any) => {
            let newAddItem = { ...addItem, pid: targetFatherId };
            return data.map((item: any) => {
                if (item.id === targetFatherId) {
                    let tempChildren = item.children;
                    tempChildren.unshift(newAddItem);
                    return {
                        ...item,
                        children: [...tempChildren],
                    };
                } else if (item.children.length !== 0) {
                    return { ...item, children: [...newData(item.children)] };
                } else {
                    return item;
                }
            });
        };
        return newData(data);
    };

    // when item drop in the drop area
    const handleDropInDropArea = (item: any, nested: boolean) => {
        console.log("drop item");
        let newData = [...questionOrder];
        // when item drop in to the same level of the target item
        if (!nested) {
            // 1. delete the drag item when drop
            newData = getFilterArr(newData, dragItem.id);
            // 2. add the delete item to the drop area
            newData = addItemInSameLevel(newData, item.pid, item, dragItem);
        } else {
            if (item.id !== dragItem.id) {
                // 1. delete the drag item when drop
                newData = getFilterArr(newData, dragItem.id);
                // 2. add the delete item to the drop area
                newData = addItemInNestedLevel(newData, item.id, dragItem);
            }
        }
        dispatch(actions.handleReorderQuestionOrder(newData));
        removeNewStyleToSameLevelArea(item);
        removeNewStyleToNestedLevelArea(item);
    };

    /**
     * this function will show the drag item when stop drag
     * @param {any}item the drag item id
     */
    const handleDragEnd = (item: any) => {
        const getDragItem: HTMLElement | null = document.getElementById(`${item.id}survey_design_drag_item_Wrapper`);
        getDragItem?.classList.remove(style.ekasSurveyDesignItem_DragStart);
    };

    // get label(id in questionOrder) needs to render
    const handleSetRenderLabel = (label: string, type: string, pid: string, id: string) => {
        dispatch(actions.handleSetDisplayItem({ label, type, id, pid }));
        dispatch(actions.setInsertInfo({ pid, id }));
    };
    // this function will map all the drag list
    const handleDataMap = (data: any) => {
        return data.map((item: any, index: any) => {
            return (
                <div key={item.id} id={`${item.id}survey_design_drag_item_Wrapper`}>
                    <div
                        className={style.ekasSurveyDesignSideBarItem}
                        draggable={true}
                        onClick={() => handleSetRenderLabel(item.id, item.type, item.pid, item.id)}
                        onDragStart={(e) => handleItemDragStart(item, index, e)}
                        onDragEnd={() => handleDragEnd(item)}
                    >
                        <div className={style.ekasSurveyDesignCheckBoxWrapper}>
                            <div className={style.ekasSurveyDesignCheckBox}></div>
                        </div>
                        {labelList[item.type] == undefined ? (
                            labelBox[item.type]
                        ) : (
                            <FontAwesomeIcon icon={labelList[item.type]} className={style.ekasSurveyDesignItemIcon} />
                        )}

                        {questionData[item.id].label}
                        <div className={style.ekasSurveyDesignSettingWrapper}>
                            <div className={style.ekasSurveyDesignSettingDot} />
                            <div className={style.ekasSurveyDesignSettingDot} />
                            <div className={style.ekasSurveyDesignSettingDot} />
                        </div>
                    </div>
                    <div
                        className={style.ekasSurveyDesignDragArea}
                        onDragOver={(e) => handleDragAreaOver(e)}
                        id={`${item.id}survey_design_drop_same_level_area`}
                    >
                        <div
                            className={style.ekasSurveyDesignSameLevelArea}
                            onDrop={() => handleDropInDropArea(item, false)}
                            onDragEnter={() => handleDragEnterSameLevelArea(item)}
                            onDragLeave={() => handleDragLeaveSameLevelArea(item)}
                        />
                        <div
                            className={style.ekasSurveyDesignNestedLevelArea}
                            onDrop={() => handleDropInDropArea(item, true)}
                            onDragEnter={() => handleDragEnterNestedLevelArea(item)}
                            onDragLeave={() => handleDragLeaveNestedLevelArea(item)}
                            id={`${item.id}survey_design_drop_Nested_level_area`}
                        />
                    </div>
                    <div className={style.ekasSurveyDesignSideBarItemWrapper} style={{ paddingLeft: "3rem" }}>
                        {handleDataMap(item.children)}
                    </div>
                </div>
            );
        });
    };

    /**
     * According to the label and type, render conresponding component.
     * @param label label of component needs to render
     * @param type type of component needs to render
     */
    const getComponentByLabelAndType = (label: string, type: string) => {
        switch (type) {
            // survey design component
            case "SC":
                return <components.SingleChoice key={`${label},${type}`} label={label} />;
            case "QR":
                return <components.Barcode key={`${label},${type}`} label={label} />;
            case "DATE":
                return <components.Date key={`${label},${type}`} label={label} />;
            case "GEO":
                return <components.Geolocation key={`${label},${type}`} label={label} />;
            case "GD":
                return <components.Grid key={`${label},${type}`} label={label} />;
            case "GD3D":
                return <components.Grid3D key={`${label},${type}`} label={label} />;
            case "GDM":
                return <components.GridMulti key={`${label},${type}`} label={label} />;
            case "IMG":
                return <components.Image key={`${label},${type}`} label={label} />;
            case "INFO":
                return <components.Information key={`${label},${type}`} label={label} />;
            case "MC":
                return <components.MultiChoice key={`${label},${type}`} label={label} />;
            case "NC":
                return <components.Numeric key={`${label},${type}`} label={label} />;
            case "NCL":
                return <components.NumericList key={`${label},${type}`} label={label} />;
            case "RK":
                return <components.Ranking key={`${label},${type}`} label={label} />;
            case "TB":
                return <components.Table key={`${label},${type}`} label={label} />;
            case "TT":
                return <components.Text key={`${label},${type}`} label={label} />;
            case "TTL":
                return <components.TextList key={`${label},${type}`} label={label} />;

            // static components
            case "BK":
                return <staticComponents.Block key={`${label},${type}`} label={label} />;
            case "BKC":
                return <staticComponents.BlockToCall key={`${label},${type}`} label={label} />;
            case "CT":
                return <staticComponents.Chart key={`${label},${type}`} label={label} />;
            case "CD":
                return <staticComponents.Condition key={`${label},${type}`} label={label} />;
            case "DT":
                return <staticComponents.Directive key={`${label},${type}`} label={label} />;
            case "EM":
                return <staticComponents.Email key={`${label},${type}`} label={label} />;
            case "FD":
                return <staticComponents.Folder key={`${label},${type}`} label={label} />;
            case "LP":
                return <staticComponents.Loop key={`${label},${type}`} label={label} />;
            case "PG":
                return <staticComponents.Page key={`${label},${type}`} label={label} />;
            case "PGB":
                return <staticComponents.PageBreak key={`${label},${type}`} label={label} />;
            case "SCP":
                return <staticComponents.Script key={`${label},${type}`} label={label} />;
            case "SP":
                return <staticComponents.Stop key={`${label},${type}`} label={label} />;
            case "TEL":
                return <staticComponents.Telephone key={`${label},${type}`} label={label} />;
        }
    };

    /**
     * Start add a new item after current item event.
     */
    const handleAddAfter = () => {
        if (insertInfo.pid == "-1") {
            alert("please select the item to insert the new item");
            return;
        }
        setAdd(true);
        setAddAfter(true);
    };

    /**
     * Start add a new item before current item event.
     */
    const handleAddBefore = () => {
        if (insertInfo.pid == "-1") {
            alert("please select the item to insert the new item");
            return;
        }
        setAdd(true);
        setAddAfter(false);
    };

    /**
     * Place the new item into questionOrder at the right place.
     * @param newOrderItem new item needs to place in the correct position in the questionOrder
     * @param curLoop current list wait for iterating
     * @param find mark if pid is found
     */
    const handleInsertItem = (newOrderItem: any, curLoop: any, find: boolean) => {
        if (find) {
            // find is true means the item can be found in this loop
            for (let i = 0; i < curLoop.length; i++) {
                if (curLoop[i].id == insertInfo.id) {
                    const returnLoop = [...curLoop];
                    addAfter ? returnLoop.splice(i + 1, 0, newOrderItem) : returnLoop.splice(i, 0, newOrderItem);
                    return returnLoop;
                }
            }
        } else {
            const tempLoop = [...curLoop];
            // if pid of insertInfo is equal to current item id, means the insertInfo id can
            // be found in the children of current item
            for (let i = 0; i < curLoop.length; i++) {
                curLoop[i].id == insertInfo.pid
                    ? (tempLoop[i].children = handleInsertItem(newOrderItem, curLoop[i].children, true))
                    : (tempLoop[i].children = handleInsertItem(newOrderItem, curLoop[i].children, false));
            }
            return tempLoop;
        }
    };

    /**
     * Create a new item according to its type and update new questionData and questionOrder
     * @param type type of new item
     */
    const handleGetAddComponentType = (type: string) => {
        // init new item inforamtion needs to be put into questionData
        const newItem = {
            type,
            label: `Q${count}`,
            data: {
                title: "",
                text: "",
                answer: {
                    count: -1,
                    reusableList: [],
                    data: [],
                },
            },
        };
        // dispatch new item into redux
        dispatch(
            actions.handleAddNewItemIntoData({
                ...questionData,
                [`q${count}`]: newItem,
            }),
        );
        // update global count(count determines the next label )
        dispatch(actions.setCount(count + 1));

        // set hide display component and render the new item
        setAdd(false);
        dispatch(
            actions.handleSetDisplayItem({
                label: `q${count}`,
                type,
                id: `q${count}`,
                pid: insertInfo.pid,
            }),
        );

        // init new item inforamtion needs to be put into questionOrder
        const newOrderItem = {
            id: `q${count}`,
            pid: insertInfo.pid,
            label: `Q${count}`,
            type,
            active: false,
            children: [],
        };

        // if newOrderItem.pid is null mean it dont need to go throught the iterating
        if (newOrderItem.pid == null) {
            const newOrder = [...questionOrder];
            for (let i = 0; i < questionOrder.length; i++) {
                if (questionOrder[i].id == insertInfo.id) {
                    if (addAfter) {
                        newOrder.splice(i + 1, 0, newOrderItem);
                        dispatch(actions.handleReorderQuestionOrder(newOrder));
                    } else {
                        newOrder.splice(i, 0, newOrderItem);
                        dispatch(actions.handleReorderQuestionOrder(newOrder));
                    }
                }
            }
        } else {
            // start iterating and get new questionOrder
            const newOrder = handleInsertItem(newOrderItem, questionOrder, false);
            dispatch(actions.handleReorderQuestionOrder(newOrder));
        }

        // reset the insertInfo, pid:'-1' means need to select a item to addafter or addbefore
        dispatch(actions.setInsertInfo({ pid: "-1", id: "" }));
    };

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
    const menuBar: JSX.Element = (
        <div>
            <div className={style.ekasSurveyDesignSideBarTitle}>
                <span>Resuable Lists</span>
            </div>
            <div className={style.ekasSurveyDesignSideBarItemWrapper}>{handleDataMap(questionOrder)}</div>
        </div>
    );

    const menuItem: JSX.Element = (
        <div>
            {/* <------------------------------------ **** ADD NEW ITEM BUTTON START **** ------------------------------------ */}
            {add ? null : (
                <div className={style.ekasSurveyDesignBtnWrapper}>
                    <button className={style.ekasSurveyDesignAddBtn} onClick={handleAddBefore}>
                        <FontAwesomeIcon icon={faPlus} className={style.ekasSurveyDesignSideBarIcon} />
                        before
                    </button>
                    <button className={style.ekasSurveyDesignAddBtn} onClick={handleAddAfter}>
                        <FontAwesomeIcon icon={faPlus} className={style.ekasSurveyDesignSideBarIcon} />
                        after
                    </button>
                </div>
            )}

            {/* <------------------------------------ **** ADD NEW ITEM BUTTON END **** ------------------------------------ */}
            <div className={style.ekasSurveyDesignItemWrapper}>
                {add ? (
                    <Display
                        setTypeCallback={handleGetAddComponentType}
                        setCloseEvent={() => {
                            setAdd(false);
                            actions.setInsertInfo({ pid: "-1", id: "" });
                        }}
                    />
                ) : displayItem.label != "-1" ? (
                    getComponentByLabelAndType(displayItem.label, displayItem.type)
                ) : null}
            </div>
        </div>
    );
    /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */
    /* <------------------------------------ **** RENDER START **** ------------------------------------ */
    return <SurveyDesignLayout menuBar={menuBar} menuItem={menuItem} LayOutClick={() => {}} />;
    /* <------------------------------------ **** RENDER END **** ------------------------------------ */
};

export default ServerDesign;
