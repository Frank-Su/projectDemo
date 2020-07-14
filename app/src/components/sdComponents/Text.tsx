/**
 * Author: Andy
 * Date: 11/06/2020
 */
import React from 'react';
import styles from '../../style/componentStyle/sdComponentStyle/text.scss';
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
interface TextProps {
  label: string;
}
const Text = (props: TextProps) => {
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
  const resizableList: Array<string> = [
    'Off',
    'Auto and manual',
    'Auto',
    'Manual',
  ];
  const questionBox: any = (
    <div className={styles.ekasTextWrapper}>
      <div className={styles.ekasTextCheckbox}>
        <input id="0" type="checkbox" />
        <label htmlFor={'0'}>Required question</label>
      </div>
      <div className={styles.ekasTextTable}>
        <table>
          <thead>
            <tr>
              <td className={styles.ekasTextTableTitle}>
                <span>Type</span>
              </td>
              <td className={styles.ekasTextTableTitle}>
                <span>Resizable mode</span>
              </td>
              <td colSpan={2} className={styles.ekasTextTableTitleLong}>
                <span>Input box size</span>
                <div className={styles.ekasTextTableIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.ekasTextTableItemWrapper}>
                <select className={styles.ekasTextTableSelect}>
                  {typeList.map((item) => (
                    <option key={`text${item}`}>{item}</option>
                  ))}
                </select>
              </td>
              <td className={styles.ekasTextTableItemWrapper}>
                <select className={styles.ekasTextTableSelect}>
                  {resizableList.map((item) => (
                    <option key={`text${item}`}>{item}</option>
                  ))}
                </select>
              </td>
              <td className={styles.ekasTextTableItemWrapper}>
                <span>Rows</span>
                <input className={styles.ekasTextInput} />
              </td>
              <td className={styles.ekasTextTableItemWrapper}>
                <span>Width</span>
                <input className={styles.ekasTextInput} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  const editContent: any = (
    <Edit
      label={props.label}
      questionBox={questionBox}
      showList={false}
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
        labelIcon={'text'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'TDN'}
        defaultItemCategory={0}
        showAppearance={true}
        appearanceCategory={'text'}
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
export default Text;
