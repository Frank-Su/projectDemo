/**
 * Author: Andy
 * Date: 11/06/2020
 */
import React, { useState } from 'react';
import styles from '../../style/componentStyle/sdComponentStyle/table.scss';
import QuestionTitle from '../sdComponents/reusable/QuestionTitle';
import QuestionCategory from '../sdComponents/reusable/QuestionCategory';
import Edit from '../sdComponents/reusable/Edit';
import Script from '../sdComponents/reusable/Script';
import DisplayLogic from '../sdComponents/reusable/DisplayLogic';
import TagContent from '../sdComponents/reusable/TagContent';
import QuestionText from '../sdComponents/reusable/QuestionText';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import * as actionFactory from '../../store/surveyReducer/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestionCircle,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';

/**
 * @param label label which is used to get data from redux
 */
interface TableProps {
  label: string;
}
const Table = (props: TableProps) => {
  /* <--------------------------- * STATE START * --------------------------- */
  const newState = useSelector(
    (state: RootState) => state.surveyReducer.questionData[props.label]
  );
  const dispatch = useDispatch();
  /* --------------------------- * STATE END * --------------------------- */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  /**
   * Dispatch new title to redux
   * @param newTitle new title
   */
  const handleModifyTitle = (newTitle: string): void => {
    dispatch(actionFactory.modifyTitleAction(props.label, newTitle));
  };

  /**
   * Dispatch new text to redux
   * @param newText new text
   */
  const handleModifyText = (newText: string): void => {
    dispatch(actionFactory.modifyTextAction(props.label, newText));
  };

  /**
   * Dispatch when label changes.
   * @param newLabel new label
   */
  const handleModifyLabelEvent = (newLabel: string): void => {
    dispatch(actionFactory.modifyLabelAction(props.label, newLabel));
  };
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const QuestionList = () => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const [show, setShow] = useState<boolean>(false);
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    return (
      <div>
        <div className={styles.ekasTableAnswerTitle}>Answer</div>
        <div className={styles.ekasTableAnswerWrapper}>
          <p className={styles.ekasTableAnswerText}>Schema</p>
          <div className={styles.ekasTableAnswerSelectWrapper}>
            <input
              className={styles.ekasTableAnswerInput}
              placeholder={'Please select'}
            ></input>
            <div
              className={styles.ekasTableAnswerIcon}
              onClick={() => setShow(!show)}
            >
              <FontAwesomeIcon
                icon={faSortDown}
                style={{
                  transform: show ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </div>
            <div
              className={styles.ekasTableAnswerList}
              style={{
                opacity: show ? 1 : 0,
                visibility: show ? 'visible' : 'hidden',
              }}
            >
              list here
            </div>
          </div>
        </div>
      </div>
    );
  };
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
    <div>
      <div className={styles.ekasTableWrapper}>
        <div className={styles.ekasTableCheckboxWrapper}>
          <div className={styles.ekasTableCheckbox}>
            <input id="0" type="checkbox" />
            <label htmlFor={'0'}>Required question</label>
          </div>
          <div className={styles.ekasTableCheckbox}>
            <input id="1" type="checkbox" />
            <label htmlFor={'1'}>Use images in answers</label>
          </div>
        </div>
        <div className={styles.ekasTableTable}>
          <table>
            <thead>
              <tr>
                <td className={styles.ekasTableTableTitle}>
                  <span>Type</span>
                </td>
                <td className={styles.ekasTableTableTitle}>
                  <span>Answer list sorting</span>
                  <div className={styles.ekasTableTableIcon}>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </div>
                </td>
                <td className={styles.ekasTableTableTitleShort}>
                  <span>Columns</span>
                  <div className={styles.ekasTableTableIcon}>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </div>
                </td>
                <td className={styles.ekasTableTableTitleShort}>
                  <span>Rows</span>
                  <div className={styles.ekasTableTableIcon}>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.ekasTableTableItemWrapper}>
                  <select className={styles.ekasTableTableSelect}>
                    {typeList.map((item) => (
                      <option key={`text${item}`}>{item}</option>
                    ))}
                  </select>
                </td>
                <td className={styles.ekasTableTableItemWrapper}>
                  <select className={styles.ekasTableTableSelect}>
                    {answerList.map((item) => (
                      <option key={`text${item}`}>{item}</option>
                    ))}
                  </select>
                </td>
                <td className={styles.ekasTableTableItemWrapper}>
                  <input className={styles.ekasTableInput} />
                </td>
                <td className={styles.ekasTableTableItemWrapper}>
                  <input className={styles.ekasTableInput} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <QuestionText
        showInst={true}
        title={newState.data.title}
        text={newState.data.text}
        handleModifyText={handleModifyText}
        handleModifyTitle={handleModifyTitle}
      />
      <QuestionList />
    </div>
  );
  // content of each tag
  const editContent: any = (
    <Edit
      label={props.label}
      questionBox={questionBox}
      showList={false}
      showText={false}
    />
  );
  const displayLogicContent: any = <DisplayLogic />;
  const scriptContent: any = <Script />;
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  return (
    <div>
      <QuestionTitle
        labelIcon={'table'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'TABLE'}
        defaultItemCategory={0}
        showAppearance={true}
        appearanceCategory={'table'}
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
export default Table;
