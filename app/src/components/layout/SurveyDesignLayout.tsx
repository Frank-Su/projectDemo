/**
 * Author: Frank
 * Date: 2020/06/10
 */
import React, { useState } from "react";
import { Row, Col } from "antd";
import style from "../../style/componentStyle/layoutStyle/surveyDesignLayout.scss";

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
interface SurveyDesignProps {
    menuBar?: JSX.Element;
    menuItem?: JSX.Element;
    LayOutClick: Function;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

const SurveyDesignLayout = (props: SurveyDesignProps) => {
    /* <------------------------------------ ****  HOOK START **** ------------------------------------ */
    const [sideBarWidth, setSideBarWidth] = useState(34);
    const [trageResize, setTrageResizd] = useState(false);
    /* <------------------------------------ ****  HOOK  END **** ------------------------------------ */

    /* <------------------------------------ ****  FUNCTION START **** ------------------------------------ */
    /**
     * this function will allowed to resize when click in the resize zone
     * @param {event} e html event props
     */
    const handleResizeOnMouseDown = (e) => {
        setTrageResizd(true);
    };

    /**
     * this function will get the resize width when mouse move
     * this function will also define the maxmum width when resize
     * @param {event} e html event props
     */
    const handleResizeOnMouseMove = (e) => {
        if (trageResize) {
            if (e.clientX > window.screen.width / 2) {
                setSideBarWidth(window.screen.width / 20 - 6);
            } else if (e.clientX < 300) {
                setSideBarWidth(24);
            } else {
                setSideBarWidth(e.clientX / 10 - 6);
            }
        }
    };

    /**
     * this function will stop resize when mouse up
     */
    const handleResizeOnMouseUp = () => {
        setTrageResizd(false);
    };
    /* <------------------------------------ ****  FUNCTION END **** ------------------------------------ */

    /* <------------------------------------ **** RENDER START **** ------------------------------------ */
    return (
        <Row
            className={style.ekasSurveyDesignLayoutContainer}
            onMouseMove={(e) => handleResizeOnMouseMove(e)}
            onMouseUp={handleResizeOnMouseUp}
            onClick={() => props.LayOutClick()}
        >
            <Col
                className={style.ekasSurveyDesignLayoutMenu}
                id="ekasSurveyMenuBar"
                style={{ width: `${sideBarWidth}rem`, overflow: "scroll" }}
            >
                {props.menuBar}
            </Col>
            <Col
                className={style.ekasSurveyDesignLayout_HandleResizable}
                onMouseDown={(e) => handleResizeOnMouseDown(e)}
            >
                <div className={style.ekasSurveyDesignLayout_HandleResizableDot_wrapper}>
                    <div className={style.ekasSurveyDesignLayout_HandleResizableDot} />
                    <div className={style.ekasSurveyDesignLayout_HandleResizableDot} />
                    <div className={style.ekasSurveyDesignLayout_HandleResizableDot} />
                </div>
            </Col>
            <Col
                className={style.ekasSurveyDesignLayoutWrapper}
                style={{ width: `calc(100vw - ${sideBarWidth + 10}rem)` }}
            >
                {/* <------------------------------------ **** RENDER QUESTION ITEM START **** ------------------------------------ */}
                {props.menuItem}
                {/* <------------------------------------ **** RENDER QUESTION ITEM END **** ------------------------------------ */}
            </Col>
        </Row>
    );
    /* <------------------------------------ **** RENDER END **** ------------------------------------ */
};

export default SurveyDesignLayout;
