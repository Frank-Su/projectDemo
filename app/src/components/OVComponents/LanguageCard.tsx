/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React, { useState } from "react";

import stylesOV from "../../style/componentStyle/ovComponentStyle/reusable/overviewCard.scss";
import stylesLC from "../../style/componentStyle/ovComponentStyle/languageCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

/**
 * @param width width of language card
 * @param titleHeight height of title of language card
 * @param contentHeight height of content of language card
 */
interface LanguageCardProps {
    width?: string;
    titleHeight?: string;
    contentHeight?: string;
}

const LanguageCard = (props: LanguageCardProps) => {
    // init params need to be used
    const width = props.width ? props.width : "100%";
    const titleHeight = props.titleHeight ? props.titleHeight : "5rem";

    // init states need to be used
    const [show, setShow] = useState<boolean>(true);
    const [contentHeight, setContentHeight] = useState<string>("10rem");
    const [list, setList] = useState<Array<any>>([]);

    /**
     * hide and diplay language card
     */
    const handleTitleButtonOnclick = () => setShow(!show);

    /**
     * add and remove items in list
     */
    const handleAddAndRemoveButtonOnclick = () => alert("not implement yet");

    return (
        <div className={stylesOV.ekasOverviewcardWapper} style={{ width: width }}>
            {/*----------------- START: title part of language card -----------------*/}
            <div className={stylesOV.ekasOverviewcardTitleWapper} style={{ height: titleHeight }}>
                <div
                    className={stylesOV.ekasOverviewcardTitleText}
                    style={{ height: titleHeight, lineHeight: titleHeight }}
                >
                    Languages
                    <span className={stylesLC.ekasLanguagecardTitleTextAddition}>{`(${list.length})`}</span>
                </div>
                <div>
                    <span
                        onClick={handleAddAndRemoveButtonOnclick}
                        className={stylesLC.ekasLanguagecardTitleButtonAddition}
                    >
                        Add / remove
                    </span>
                    <div
                        className={stylesOV.ekasOverviewcardTitleButton}
                        style={{ width: "4rem", height: "4rem", lineHeight: "4rem" }}
                        onClick={handleTitleButtonOnclick}
                    >
                        <FontAwesomeIcon
                            className={stylesOV.ekasOverviewcardTitleButtonIcon}
                            icon={faAngleUp}
                            style={{
                                transform: `rotate(${show ? "0" : "180"}deg)`,
                                fontSize: "1.5rem",
                            }}
                        />
                    </div>
                </div>
            </div>
            {/*----------------- END: title part of language card -----------------*/}

            {/*----------------- START: content part of language card -----------------*/}
            <div
                className={stylesOV.ekasOverviewcardContentWapper}
                style={{
                    height: contentHeight,
                    marginTop: show ? "0rem" : `-${contentHeight}`,
                }}
            >
                <div>
                    {/*----------------- START: list title part of language card -----------------*/}
                    <div className={stylesLC.ekasLanguagecardListTitle}>
                        <span className={stylesLC.ekasLanguagecardListLanguage}> Language </span>
                        <span className={stylesLC.ekasLanguagecardListTitle}> Title </span>
                        <span className={stylesLC.ekasLanguagecardListHelplink}> End link </span>
                        <span className={stylesLC.ekasLanguagecardListHelplink}> Help link </span>
                        <span className={stylesLC.ekasLanguagecardListHelptext}> Help text </span>
                    </div>
                    {/*----------------- END: list title part of language card -----------------*/}

                    {/*----------------- START: list content part of language card -----------------*/}
                    <div className={stylesLC.ekasLanguagecardListTitle}>
                        <input
                            type="text"
                            defaultValue={"language"}
                            className={stylesLC.ekasLanguagecardListLanguageInput}
                        />
                        <input className={stylesLC.ekasLanguagecardListTitleInput} defaultValue={"Title"} />
                        <input className={stylesLC.ekasLanguagecardListEndlinkInput} placeholder={"enter URL..."} />
                        <input className={stylesLC.ekasLanguagecardListHelplinkInput} placeholder={"enter URL..."} />
                        <input
                            className={stylesLC.ekasLanguagecardListHelptextInput}
                            placeholder={"enter help link text..."}
                        />
                    </div>
                    {/*----------------- END: list content part of language card -----------------*/}
                </div>
            </div>
            {/*----------------- END: content part of language card -----------------*/}
        </div>
    );
};

export default LanguageCard;
