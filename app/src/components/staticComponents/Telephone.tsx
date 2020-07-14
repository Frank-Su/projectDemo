/**
 * Author: Andy
 * Date: 16/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/telephony.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import QuestionText from './reusable/QuestionText';

/**
 * @param label label of Telephony
 */
interface TelephonyProps {
  label: string;
}
const Telephony = (props: TelephonyProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasTelephonyIcon}>
      <FontAwesomeIcon icon={faPhoneAlt} />
    </div>
  );
  const telephoneList: Array<string> = ['Please select...'];
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  const handleLabelChange = (): void => {};
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div>
      <QuestionTitle
        label={props.label}
        iconBox={iconBox}
        readOnly={false}
        showCogIcon={false}
        showCopyIcon={true}
        showEyeIcon={false}
        showTrashIcon={true}
        handleLabelChangeEvent={handleLabelChange}
      />
      <div className={styles.ekasTelephonyItem}>
        <span>Item:</span>
        <span>Telephony</span>
        <span className={styles.ekasTelephonyItemSpan}>Command type:</span>
        <select className={styles.ekasTelephonyItemSelect}>
          <option>Dial</option>
        </select>
      </div>
      <div className={styles.ekasTelephonyWrapper}>
        <table style={{ display: 'inline-block' }}>
          <thead>
            <tr>
              <td className={styles.ekasTelephonyWrapperTdNormal}>
                <span>Telephone variable</span>
                <div className={styles.ekasTelephonyTitleIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.ekasTelephonyWrapperTdNormal}>
                <select>
                  {telephoneList.map((item, index) => (
                    <option key={`item,${index}`}>{item}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <QuestionText
        showText={true}
        showTitle={false}
        text={''}
        title={''}
        handleModifyText={() => {}}
        handleModifyTitle={() => {}}
      />
    </div>
  );
};
export default Telephony;
