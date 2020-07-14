/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React, { useState } from 'react';
import styles from '../../style/componentStyle/ovComponentStyle/settingsCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const SettingsCard = () => {
  // init states need to be used
  const [web, setWeb] = useState<boolean>(true);
  const [capi, setCapi] = useState<boolean>(false);
  const [cati, setCati] = useState<boolean>(true);

  // array of content of right part of options
  const optionsRight: Array<string> = [
    "Include 'Black' button",
    'Include progress bar',
    'One question per page',
  ];

  /**
   * handle web button click event
   */
  const handleWebOnclick = () => setWeb(!web);
  /**
   * handle capi button click event
   */
  const handleCapiOnclick = () => setCapi(!capi);
  /**
   * handle cati button click event
   */
  const handleCatiOnclick = () => setCati(!cati);

  return (
    <div className={styles.ekasSettingscardContainer}>
      {/*----------------- START: left part of settings card -----------------*/}
      <div className={styles.ekasSettingscardLeft}>
        {/*----------------- START: mode part -----------------*/}
        <p className={styles.ekasSettingscardTitle}>Mode</p>
        <div
          className={
            web
              ? styles.ekasSettingscardLeftImgButtonSelected
              : styles.ekasSettingscardLeftImgButtonNormal
          }
          onClick={handleWebOnclick}
        >
          <FontAwesomeIcon
            className={
              web
                ? styles.ekasSettingscardLeftImgButtonIconSelected
                : styles.ekasSettingscardLeftImgButtonIconNormal
            }
            icon={faDesktop}
          />
          <p
            className={
              web
                ? styles.ekasSettingscardLeftImgButtonNameSelected
                : styles.ekasSettingscardLeftImgButtonNameNormal
            }
          >
            Web
          </p>
        </div>
        <div
          className={
            capi
              ? styles.ekasSettingscardLeftImgButtonSelected
              : styles.ekasSettingscardLeftImgButtonNormal
          }
          onClick={handleCapiOnclick}
        >
          <FontAwesomeIcon
            className={
              capi
                ? styles.ekasSettingscardLeftImgButtonIconSelected
                : styles.ekasSettingscardLeftImgButtonIconNormal
            }
            icon={faTabletAlt}
          />
          <p
            className={
              capi
                ? styles.ekasSettingscardLeftImgButtonNameSelected
                : styles.ekasSettingscardLeftImgButtonNameNormal
            }
          >
            CAPI
          </p>
        </div>
        <div
          className={
            cati
              ? styles.ekasSettingscardLeftImgButtonSelected
              : styles.ekasSettingscardLeftImgButtonNormal
          }
          onClick={handleCatiOnclick}
        >
          <FontAwesomeIcon
            className={
              cati
                ? styles.ekasSettingscardLeftImgButtonIconSelected
                : styles.ekasSettingscardLeftImgButtonIconNormal
            }
            icon={faPhoneAlt}
          />
          <p
            className={
              cati
                ? styles.ekasSettingscardLeftImgButtonNameSelected
                : styles.ekasSettingscardLeftImgButtonNameNormal
            }
          >
            CATI
          </p>
        </div>
        {/*----------------- END: mode part -----------------*/}

        {/*----------------- START: layout part -----------------*/}
        <div>
          <p className={styles.ekasSettingscardTitle}>Layout</p>
        </div>
        {/*----------------- END: layout part -----------------*/}
      </div>
      {/*----------------- END: left part of settings card -----------------*/}

      {/*----------------- START: right part of settings card -----------------*/}
      <div className={styles.ekasSettingscardRight}>
        {/*----------------- START: right part of options -----------------*/}
        <div className={styles.ekasSettingscardRightRight}>
          <p className={styles.ekasSettingscardTitle}>Options</p>
          {optionsRight.map((item, index) => {
            return (
              <div className={styles.ekasSettingscardRightOptions} key={index}>
                <input id={`${index}`} type="checkbox" />
                <label htmlFor={`${index}`}>{item}</label>
              </div>
            );
          })}
          <div className={styles.ekasSettingscardRightOptions}>
            <input id="r1" type="checkbox" />
            <label htmlFor="r1">Auto next</label>
            <FontAwesomeIcon
              className={styles.ekasSettingscardRightOptionsIcon}
              icon={faQuestionCircle}
            />
          </div>
        </div>
        {/*----------------- END: right part of options -----------------*/}

        {/*----------------- START: left part of options -----------------*/}
        <div className={styles.ekasSettingscardRightLeft}>
          <div className={styles.ekasSettingscardRightOptions}>
            <input id="l1" type="checkbox" />
            <label htmlFor="l1">
              Answers are required for Singles/Opentexts/Numerics/Grids
            </label>
          </div>
          <div className={styles.ekasSettingscardRightOptions}>
            <input id="l2" type="checkbox" />
            <label htmlFor="l2">
              Allow recipient to change their original answers
            </label>
          </div>
          <div className={styles.ekasSettingscardRightOptionsL3}>
            <input id="l3" type="checkbox" />
            <label htmlFor="l3">
              Allow recipient to re-enter a completed interview
            </label>
          </div>
          <div className={styles.ekasSettingscardRightOptions}>
            <input id="l4" type="checkbox" />
            <label htmlFor="l4">
              When re-entering, continue from last answered question
            </label>
          </div>
        </div>
        {/*----------------- END: left part of options -----------------*/}
      </div>
      {/*----------------- END: right part of settings card -----------------*/}
    </div>
  );
};
export default SettingsCard;
