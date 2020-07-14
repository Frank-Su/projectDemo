/**
 * Author: Andy
 * Date: 15/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/BlockToCall.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * @param label label of BlockToCall
 */
interface BlockToCallProps {
  label: string;
}
const BlockToCall = (props: BlockToCallProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasBlockToCallIcon}>
      <FontAwesomeIcon icon={faCubes} />
    </div>
  );
  const blockList: Array<string> = [
    'Please select...',
    'SurveySummary',
    'Source',
    'Referral',
    'EKAS PayPage QUANT',
    'Complete',
    'Screened',
    'QuotaFail',
    'EKAS Functions',
    'Start block',
    'End block',
    'Capture email',
    'Capture Fax',
    'toPanel',
    'Capture Mobile',
    'UpdateProfile',
    'OpenLink',
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
      <div className={styles.ekasBlockToCallWrapper}>
        <div className={styles.ekasBlockToCallSection1}>
          <table>
            <thead>
              <tr>
                <td className={styles.ekasBlockToCallWrapperTdNormal}>
                  <span>Block to call</span>
                  <div className={styles.ekasBlockToCallTitleIcon}>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.ekasBlockToCallWrapperTdNormal}>
                  <select>
                    {blockList.map((item, index) => (
                      <option key={`item,${index}`}>{item}</option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default BlockToCall;
