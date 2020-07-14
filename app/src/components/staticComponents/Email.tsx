/**
 * Author: Andy
 * Date: 16/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/email.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

/**
 * @param label label of Email
 */
interface EmailProps {
  label: string;
}
const Email = (props: EmailProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasEmailIcon}>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
  const themeList: Array<string> = [
    '',
    'Main theme',
    'Main theme - Accessiable',
    'Main theme - with title',
  ];
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
      <div className={styles.ekasEmailItem}>
        <span>Item:</span>
        <span>Email</span>
        <div className={styles.ekasEmailTitleIcon}>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
      </div>
      <div className={styles.ekasEmailWrapper}>
        <div style={{ flex: '1' }}>
          <span className={styles.ekasEmailTitle}>Email address</span>
          <table>
            <tbody>
              <tr>
                <td className={styles.ekasEmailTableTag}>
                  <span>To</span>
                </td>
                <td>
                  <input className={styles.ekasEmailTableInput} />
                </td>
              </tr>
              <tr>
                <td className={styles.ekasEmailTableTag}>
                  <span>From</span>
                </td>
                <td>
                  <input className={styles.ekasEmailTableInput} />
                </td>
              </tr>
              <tr>
                <td className={styles.ekasEmailTableTag}>
                  <span>Cc</span>
                </td>
                <td>
                  <input className={styles.ekasEmailTableInput} />
                </td>
              </tr>
              <tr>
                <td className={styles.ekasEmailTableTag}>
                  <span>Bcc</span>
                </td>
                <td>
                  <input className={styles.ekasEmailTableInput} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.ekasEmailPart2} style={{ flex: '1' }}>
          <input type="checkbox" id={'1'} />
          <label className={styles.ekasEmailLabel} htmlFor={'1'}>
            Disable email when moving back in a survey
          </label>
          <div className={styles.ekasEmailPart2Icon}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.ekasEmailPart3Title}>
          <span>Format:</span>
          <input type="checkbox" id={'2'} />
          <label className={styles.ekasEmailLabel} htmlFor={'2'}>
            HTML
          </label>
          <input type="checkbox" id={'3'} />
          <label className={styles.ekasEmailLabel} htmlFor={'3'}>
            Plain text
          </label>
        </div>
      </div>
      <div className={styles.ekasEmailTextWrapper}>
        <div>
          <span>Subject</span>
          <input className={styles.ekasEmailTextTextInputSmall} />
        </div>
        <div>
          <span>HTML body</span>
          <textarea
            className={styles.ekasEmailTextTextInputLarge}
            style={{ resize: 'none' }}
          />
        </div>
        <div>
          <span>Plain text body</span>
          <textarea
            className={styles.ekasEmailTextTextInputLarge}
            style={{ resize: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};
export default Email;
