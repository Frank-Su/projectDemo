/**
 * Author: Andy
 * Date: 09/06/2020
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import QuestionText from './QuestionText';
import QuestionList from './QuestionList';
import * as actionFactory from '../../../store/surveyReducer/actions';
import { RootState } from '../../../store/rootReducer';

/**
 * @param label label of current question
 * @param questionBox html of part1 section of edit component
 * @param showText display QuestionText component or not
 * @param showTList display QuestionList component or not
 */
interface EditProps {
  label: string;
  questionBox: any;
  showText: boolean;
  showList: boolean;
}

const Edit = (props: EditProps) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  const dispatch = useDispatch();
  const newState = useSelector(
    (state: RootState) => state.surveyReducer.questionData[props.label]
  );
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const questionBox = props.questionBox;
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  /**
   * Modify title
   * @param newTitle new title
   */
  const handleModifyTitleEvent = (newTitle: string): void => {
    dispatch(actionFactory.modifyTitleAction(props.label, newTitle));
  };

  /**
   * Modify text
   * @param newText new text
   */
  const handleModifyTextEvent = (newText: string): void => {
    dispatch(actionFactory.modifyTextAction(props.label, newText));
  };

  /**
   * Add one item to the list at a time.
   */
  const handleAddOneEvent = (): void => {
    const { data } = newState;
    const { answer } = data;
    const { data: answerArray, count, reusableList } = answer;
    const newCount = count + 1;
    answerArray.push({ code: `${newCount}`, answer: '' });
    dispatch(
      actionFactory.addItemToListAction(props.label, {
        data: answerArray,
        count: newCount,
      })
    );
  };

  /**
   * Delete item in list
   * @param index index of item need to be deleted
   */
  const handleDeleteListItemEvent = (index: number): void => {
    const { data } = newState;
    const { answer } = data;
    const { data: answerArray } = answer;
    answerArray.splice(index, 1);
    dispatch(actionFactory.deleteItemFromListAction(props.label, answerArray));
  };

  /**
   * Modify item in list
   * @param id id of item
   * @param value value of item
   */
  const handleModifyListItemEvent = (id: string, value: string): void => {
    const [tagName, index] = id.split(',');
    const { data } = newState;
    const { answer } = data;
    const { data: answerArray } = answer;
    switch (tagName) {
      case 'CODE':
        answerArray[parseInt(index)].code = value;
        dispatch(
          actionFactory.ModifyCodeOfItemAction(props.label, answerArray)
        );
        break;
      case 'ANSWER':
        answerArray[parseInt(index)].answer = value;
        dispatch(
          actionFactory.ModifyAnswerOfItemAction(props.label, answerArray)
        );
        break;
    }
  };

  /**
   * Add a resuable item to list.
   */
  const handleAddReusableListEvent = (listName: string): void => {
    const { data } = newState;
    const { answer } = data;
    const { data: answerArray } = answer;
    answerArray.push({ code: '-1', answer: listName });
    dispatch(actionFactory.addReusableTolistAction(props.label, answerArray));
  };
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div>
      {questionBox}
      {props.showText ? (
        <QuestionText
          title={newState.data.title}
          text={newState.data.text}
          handleModifyTitle={handleModifyTitleEvent}
          handleModifyText={handleModifyTextEvent}
          showInst={true}
        />
      ) : null}
      {props.showList ? (
        <QuestionList
          data={newState.data.answer.data}
          listLabel={'Answer'}
          handleAddItem={handleAddOneEvent}
          handleDeleteItem={handleDeleteListItemEvent}
          handleModifyItem={handleModifyListItemEvent}
          handleAddReusableList={handleAddReusableListEvent}
          handleModifyReusableList={() => console.log('modifyReusablelist')}
        />
      ) : null}
    </div>
  );
};
export default Edit;
