/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React from 'react';
import styles from '../../style/componentStyle/sdComponentStyle/singleChoice.scss';
import QuestionTitle from '../sdComponents/reusable/QuestionTitle';
import QuestionCategory from '../sdComponents/reusable/QuestionCategory';
import Edit from '../sdComponents/reusable/Edit';
import Script from '../sdComponents/reusable/Script';
import DisplayLogic from '../sdComponents/reusable/DisplayLogic';
import TagContent from '../sdComponents/reusable/TagContent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import * as actionFactory from '../../store/surveyReducer/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * @param label label which is used to get data from redux
 */
interface SingleChoiceProps {
  label: string;
}
const SingleChoice = (props: SingleChoiceProps) => {
  /* <--------------------------- * STATE START * --------------------------- */

  const newState = useSelector(
    (state: RootState) => state.surveyReducer.questionData[props.label]
  );

  const dispatch = useDispatch();
  /* --------------------------- * STATE END * --------------------------- */

  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const typeList: Array<string> = [
    'Normal',
    'Hidden',
    'Background',
    'Recoded',
    'Panel variable(hidden)',
    'Panel variable(visible)',
  ];
  const answerList: Array<string> = [
    'In order',
    'Randomized',
    'Rotated',
    'Flipped',
    'Alphabetically sorted',
  ];
  const questionBox: any = (
    <div className={styles.ekasSinglechoiceEditSection1Wrapper}>
      <div className={styles.ekasSinglechoiceEditSection1Checkbox}>
        <div className={styles.ekasSinglechoiceCheckbox1}>
          <input type="checkbox" id="1" />
          <label htmlFor="1">Required question</label>
        </div>
        <div className={styles.ekasSinglechoiceCheckbox1}>
          <input type="checkbox" id="2" />
          <label htmlFor="2">Use images in answers</label>
        </div>
      </div>
      <div className={styles.ekasSinglechoiceEditSection1Type}>
        <div>
          <span>Type</span>
        </div>
        <select className={styles.ekasSinglechoiceEditSection1TypeSelect}>
          {typeList.map((item) => (
            <option key={`text${item}`}>{item}</option>
          ))}
        </select>
      </div>
      <div className={styles.ekasSinglechoiceEditSection1Answer}>
        <div>
          <span>Answer list sorting</span>
          <FontAwesomeIcon
            className={styles.ekasSinglechoiceEditSection1Icon}
            icon={faQuestionCircle}
          />
        </div>
        <select className={styles.ekasSinglechoiceEditSection1TypeSelect}>
          {answerList.map((item) => (
            <option key={`text${item}`}>{item}</option>
          ))}
        </select>
      </div>
      <div className={styles.ekasSinglechoiceEditSection1Columns}>
        <div>
          <span>Columns</span>
          <FontAwesomeIcon
            className={styles.ekasSinglechoiceEditSection1Icon}
            icon={faQuestionCircle}
          />
        </div>
        <input />
      </div>
      <div className={styles.ekasSinglechoiceEditSection1Rows}>
        <div>
          <span>Rows</span>
          <FontAwesomeIcon
            className={styles.ekasSinglechoiceEditSection1Icon}
            icon={faQuestionCircle}
          />
        </div>
        <input />
      </div>
    </div>
  );
  const editContent: any = (
    <Edit
      label={props.label}
      questionBox={questionBox}
      showList={true}
      showText={true}
    />
  );
  const displayLogicContent: any = <DisplayLogic />;
  const scriptContent: any = <Script />;
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  /**
   * Dispatch when label changes.
   * @param newLabel new label
   */
  const handleModifyLabelEvent = (newLabel: string): void => {
    dispatch(actionFactory.modifyLabelAction(props.label, newLabel));
  };
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div>
      <QuestionTitle
        labelIcon={'singleChoice'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'SMTRN'}
        defaultItemCategory={0}
        showAppearance={true}
        appearanceCategory={'singleChoice'}
        defaultAppearanceCategory={0}
      />
      <TagContent
        editContent={editContent}
        displayLogicContent={displayLogicContent}
        scriptContent={scriptContent}
      />
    </div>
  );
};
export default SingleChoice;
