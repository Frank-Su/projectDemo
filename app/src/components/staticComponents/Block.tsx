/**
 * Author: Andy
 * Date: 15/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/block.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * @param label label of Block
 */
interface BlockProps {
  label: string;
}
const Block = (props: BlockProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasBlockIcon}>
      <FontAwesomeIcon icon={faCube} />
    </div>
  );
  const orderList: Array<string> = ['In order', 'Randomized', 'Rotated'];
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
      <div className={styles.ekasBlockWrapper}>
        <div className={styles.ekasBlockSection1}>
          <table>
            <thead>
              <tr>
                <td className={styles.ekasBlockWrapperTdNormal}>
                  <span>Order</span>
                  <div className={styles.ekasBlockTitleIcon}>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.ekasBlockWrapperTdNormal}>
                  <select>
                    {orderList.map((item, index) => (
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
export default Block;
