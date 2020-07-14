/**
 * Author: Andy
 * GridMulti: 11/06/2020
 */
import React from 'react';

import styles from '../../style/componentStyle/sdComponentStyle/gridMulti.scss';
import QuestionTitle from '../sdComponents/reusable/QuestionTitle';
import QuestionCategory from '../sdComponents/reusable/QuestionCategory';
import QuestionText from '../sdComponents/reusable/QuestionText';
import QuestionList from '../sdComponents/reusable/QuestionList';
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
interface GridMultiProps {
  label: string;
}
const GridMulti = (props: GridMultiProps) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  const newState = useSelector(
    (state: RootState) => state.surveyReducer.questionData[props.label]
  );
  const dispatch = useDispatch();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

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
  const questionBox: any = (
    <div>
      <div className={styles.ekasGridMultiWrapper}>
        <div className={styles.ekasGridMultiCheckboxWrapper}>
          <div className={styles.ekasGridMultiCheckbox}>
            <input id="0" type="checkbox" />
            <label htmlFor={'0'}>Required question</label>
          </div>
          <div className={styles.ekasGridMultiCheckbox}>
            <input id="1" type="checkbox" />
            <label htmlFor={'1'}>Use images in answers</label>
          </div>
        </div>
        <div className={styles.ekasGridMultiTable}>
          <table>
            <thead>
              <tr>
                <td className={styles.ekasGridMultiTableTitle}>
                  <span>Answer list sorting</span>
                  <div className={styles.ekasGridMultiTableIcon}>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </div>
                </td>
                <td className={styles.ekasGridMultiTableTitle}>
                  <span>Question sorting</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.ekasGridMultiTableItemWrapper}>
                  <select className={styles.ekasGridMultiTableSelect}>
                    <option>In order</option>
                  </select>
                </td>
                <td className={styles.ekasGridMultiTableItemWrapper}>
                  <select className={styles.ekasGridMultiTableSelect}>
                    <option>In order</option>
                  </select>
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
      <QuestionList
        data={newState.data.answer.data}
        listLabel={'Question'}
        handleAddItem={() => {}}
        handleDeleteItem={() => {}}
        handleModifyItem={() => {}}
        handleAddReusableList={() => {}}
        handleModifyReusableList={() => {}}
      />
      <div style={{ height: '2rem', width: '1rem' }}></div>
      <QuestionList
        data={newState.data.answer.data}
        listLabel={'Answer'}
        handleAddItem={() => {}}
        handleDeleteItem={() => {}}
        handleModifyItem={() => {}}
        handleAddReusableList={() => {}}
        handleModifyReusableList={() => {}}
      />
    </div>
  );
  // content of each tag
  const editContent: any = (
    <Edit
      label={''}
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
        labelIcon={'gridMulti'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'GRIDMULTI'}
        defaultItemCategory={0}
        showAppearance={true}
        appearanceCategory={'gridMulti'}
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
export default GridMulti;
