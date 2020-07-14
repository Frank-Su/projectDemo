/**
 * Author: Andy
 * Grid3D: 11/06/2020
 */
import React from 'react';

import styles from '../../style/componentStyle/sdComponentStyle/grid3D.scss';
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
interface Grid3DProps {
  label: string;
}
const Grid3D = (props: Grid3DProps) => {
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
      <div className={styles.ekasGrid3DWrapper}>
        <div className={styles.ekasGrid3DCheckboxWrapper}>
          <div className={styles.ekasGrid3DCheckbox}>
            <input id="0" type="checkbox" />
            <label htmlFor={'0'}>Required question</label>
          </div>
          <div className={styles.ekasGrid3DCheckbox}>
            <input id="1" type="checkbox" />
            <label htmlFor={'1'}>Use images in answers</label>
          </div>
        </div>
        <div className={styles.ekasGrid3DTable}>
          <table>
            <thead>
              <tr>
                <td className={styles.ekasGrid3DTableTitle}>
                  <span>Prompt list sorting</span>
                </td>
                <td className={styles.ekasGrid3DTableTitle}>
                  <span>Prompt group sorting</span>
                </td>
                <td className={styles.ekasGrid3DTableTitle}>
                  <span>Column sort</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.ekasGrid3DTableItemWrapper}>
                  <select className={styles.ekasGrid3DTableSelect}>
                    <option>In order</option>
                  </select>
                </td>
                <td className={styles.ekasGrid3DTableItemWrapper}>
                  <select className={styles.ekasGrid3DTableSelect}>
                    <option>In order</option>
                  </select>
                </td>
                <td className={styles.ekasGrid3DTableItemWrapper}>
                  <select className={styles.ekasGrid3DTableSelect}>
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
        labelIcon={'grid3D'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'GRID3D'}
        defaultItemCategory={0}
        showAppearance={true}
        appearanceCategory={'grid3D'}
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
export default Grid3D;
