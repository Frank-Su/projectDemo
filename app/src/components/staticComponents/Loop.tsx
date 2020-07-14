/**
 * Author: Andy
 * Date: 15/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/loop.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import TagContent from './reusable/TagContent';
import QuestionText from './reusable/QuestionText';
import QuestionList from './reusable/QuestionList';

/**
 * @param label label of Loop
 */
interface LoopProps {
  label: string;
}
const Loop = (props: LoopProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasLoopIcon}>
      <FontAwesomeIcon icon={faSyncAlt} />
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
      <div className={styles.ekasLoopItem}>
        <span>Item:</span>
        <span>Loop</span>
      </div>
      <TagContent
        editContent={<div></div>}
        secondContent={null}
        secondLabel={'Script'}
      />
      <QuestionText
        showText={true}
        showTitle={false}
        text={''}
        title={''}
        handleModifyText={() => {}}
        handleModifyTitle={() => {}}
      />
      <QuestionList
        data={[]}
        reusableList={[]}
        listLabel={'Iteration'}
        handleAddItem={() => {}}
        handleAddReusableList={() => {}}
        handleDeleteItem={() => {}}
        handleModifyItem={() => {}}
        handleModifyReusableList={() => {}}
      />
    </div>
  );
};
export default Loop;
