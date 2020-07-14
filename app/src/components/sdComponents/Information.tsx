/**
 * Author: Andy
 * Information: 11/06/2020
 */
import React from 'react';

import QuestionTitle from '../sdComponents/reusable/QuestionTitle';
import QuestionCategory from '../sdComponents/reusable/QuestionCategory';
import QuestionText from '../sdComponents/reusable/QuestionText';
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
interface InformationProps {
  label: string;
}
const Information = (props: InformationProps) => {
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
      <QuestionText
        showInst={true}
        title={newState.data.title}
        text={newState.data.text}
        handleModifyText={handleModifyText}
        handleModifyTitle={handleModifyTitle}
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
        labelIcon={'information'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'INFO'}
        defaultItemCategory={0}
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
export default Information;
