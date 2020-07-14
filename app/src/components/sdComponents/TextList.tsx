/**
 * Author: Andy
 * Date: 11/06/2020
 */
import React from 'react';
import styles from '../../style/componentStyle/sdComponentStyle/textList.scss';
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
interface TextListProps {
  label: string;
}
const TextList = (props: TextListProps) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  const newState = useSelector(
    (state: RootState) => state.surveyReducer.questionData[props.label]
  );
  const dispatch = useDispatch();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

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
  const resizableList: Array<string> = [
    'Off',
    'Auto and manual',
    'Auto',
    'Manual',
  ];
  const questionBox: any = (
    <div className={styles.ekasTextListWrapper}>
      <div className={styles.ekasTextListCheckbox}>
        <input id="0" type="checkbox" />
        <label htmlFor={'0'}>Required question</label>
      </div>
      <div className={styles.ekasTextListTable}>
        <table>
          <thead>
            <tr>
              <td className={styles.ekasTextListTableTitle}>
                <span>Type</span>
              </td>
              <td className={styles.ekasTextListTableTitle}>
                <span>Answer list sorting</span>
                <div className={styles.ekasTextListTableIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
              <td className={styles.ekasTextListTableTitle}>
                <span>Resizable mode</span>
              </td>
              <td colSpan={2} className={styles.ekasTextListTableTitle}>
                <span>Input box size</span>
                <div className={styles.ekasTextListTableIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.ekasTextListTableItemWrapper}>
                <select className={styles.ekasTextListTableSelect}>
                  {typeList.map((item) => (
                    <option key={`text${item}`}>{item}</option>
                  ))}
                </select>
              </td>
              <td className={styles.ekasTextListTableItemWrapper}>
                <select className={styles.ekasTextListTableSelect}>
                  {answerList.map((item) => (
                    <option key={`text${item}`}>{item}</option>
                  ))}
                </select>
              </td>
              <td className={styles.ekasTextListTableItemWrapper}>
                <select className={styles.ekasTextListTableSelect}>
                  {resizableList.map((item) => (
                    <option key={`text${item}`}>{item}</option>
                  ))}
                </select>
              </td>
              <td className={styles.ekasTextListTableItemWrapper}>
                <span>Rows</span>
                <input className={styles.ekasTextListInput} />
              </td>
              <td className={styles.ekasTextListTableItemWrapper}>
                <span>Width</span>
                <input className={styles.ekasTextListInput} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  // content of each tag
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
        labelIcon={'textList'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'SMTRN'}
        defaultItemCategory={2}
        showAppearance={false}
        appearanceCategory={''}
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
export default TextList;
