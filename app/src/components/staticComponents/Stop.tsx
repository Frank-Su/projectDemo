/**
 * Author: Andy
 * Date: 16/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/stop.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import TagContent from './reusable/TagContent';
import QuestionText from './reusable/QuestionText';

/**
 * @param label label of Stop
 */
interface StopProps {
  label: string;
}
const Stop = (props: StopProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasStopIcon}>
      <FontAwesomeIcon icon={faExclamationTriangle} />
    </div>
  );
  const themeList: Array<string> = [
    '',
    'Main theme',
    'Main theme - Accessiable',
    'Main theme - with title',
  ];
  const statusList: Array<string> = [
    'Complete',
    'Screened',
    'Quota full',
    'No change',
  ];
  const editContent = () => {
    return (
      <div className={styles.ekasStopWrapper}>
        <div className={styles.ekasStopCheckbox}>
          <input type="checkbox" id={'1'} />
          <label htmlFor={'1'}>Exclude translation</label>
          <div className={styles.ekasStopTitleIcon}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
        </div>
        <table style={{ display: 'inline-block' }}>
          <thead>
            <tr>
              <td className={styles.ekasStopWrapperTdNormal}>
                <span>Interview status after stop</span>
              </td>
              <td className={styles.ekasStopWrapperTdNormal}>
                <span>Theme</span>
                <div className={styles.ekasStopTitleIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
              <td className={styles.ekasStopWrapperTdNormal}>
                <span>Extended status</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.ekasStopWrapperTdNormal}>
                <select>
                  {statusList.map((item, index) => (
                    <option key={`item,${index}`}>{item}</option>
                  ))}
                </select>
              </td>
              <td className={styles.ekasStopWrapperTdNormal}>
                <select>
                  {themeList.map((item, index) => (
                    <option key={`item,${index}`}>{item}</option>
                  ))}
                </select>
              </td>

              <td className={styles.ekasStopWrapperTdNormal}>
                <input className={styles.ekasStopWrapperTdLong} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  const handleLabelChange = (): void => {};
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div>
      <QuestionTitle
        label={'Stop survey'}
        iconBox={iconBox}
        readOnly={true}
        showCogIcon={false}
        showCopyIcon={true}
        showEyeIcon={false}
        showTrashIcon={true}
        handleLabelChangeEvent={handleLabelChange}
      />
      <TagContent
        editContent={editContent}
        secondContent={null}
        secondLabel={''}
      />
      <QuestionText
        showText={true}
        showTitle={true}
        text={''}
        title={''}
        handleModifyText={() => {}}
        handleModifyTitle={() => {}}
      />
    </div>
  );
};
export default Stop;
