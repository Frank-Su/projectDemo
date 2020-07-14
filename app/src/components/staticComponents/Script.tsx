/**
 * Author: Andy
 * Date: 15/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/script.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * @param label label of Script
 */
interface ScriptProps {
  label: string;
}
const Script = (props: ScriptProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasScriptIcon}>
      <FontAwesomeIcon icon={faScroll} />
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
      <div className={styles.ekasScriptWrapper}>
        <textarea></textarea>
      </div>
    </div>
  );
};
export default Script;
