/**
 * Author: Andy
 * Grid: 11/06/2020
 */
import React from 'react';

import styles from '../../style/componentStyle/sdComponentStyle/grid.scss';
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

/**
 * @param label label which is used to get data from redux
 */
interface GridProps {
  label: string;
}
const Grid = (props: GridProps) => {
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
      <div className={styles.ekasGridWrapper}>
        <div className={styles.ekasGridCheckboxWrapper}>
          <div className={styles.ekasGridCheckbox}>
            <input id="0" type="checkbox" />
            <label htmlFor={'0'}>Required question</label>
          </div>
          <div className={styles.ekasGridCheckbox}>
            <input id="1" type="checkbox" />
            <label htmlFor={'1'}>Use images in answers</label>
          </div>
        </div>
        <div className={styles.ekasGridTable}>
          <table>
            <thead>
              <tr>
                <td className={styles.ekasGridTableTitle}>
                  <span>Type</span>
                </td>
                <td className={styles.ekasGridTableTitle}>
                  <span>Prompt list sorting</span>
                </td>
                <td className={styles.ekasGridTableTitle}>
                  <span>Prompt group sorting</span>
                </td>
                <td className={styles.ekasGridTableTitle}>
                  <span>Scale sort</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.ekasGridTableItemWrapper}>
                  <select className={styles.ekasGridTableSelect}>
                    <option>Normal</option>
                  </select>
                </td>
                <td className={styles.ekasGridTableItemWrapper}>
                  <select className={styles.ekasGridTableSelect}>
                    <option>In order</option>
                  </select>
                </td>
                <td className={styles.ekasGridTableItemWrapper}>
                  <select className={styles.ekasGridTableSelect}>
                    <option>In order</option>
                  </select>
                </td>
                <td className={styles.ekasGridTableItemWrapper}>
                  <select className={styles.ekasGridTableSelect}>
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
        listLabel={'Prompts'}
        handleAddItem={() => {}}
        handleDeleteItem={() => {}}
        handleModifyItem={() => {}}
        handleAddReusableList={() => {}}
        handleModifyReusableList={() => {}}
      />
      <div style={{ height: '2rem', width: '1rem' }}></div>
      <QuestionList
        data={newState.data.answer.data}
        listLabel={'Scale'}
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
        labelIcon={'grid'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'GRID'}
        defaultItemCategory={0}
        showAppearance={true}
        appearanceCategory={'grid'}
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
export default Grid;
