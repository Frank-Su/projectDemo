/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React from 'react';
import stylesMulti from '../../style/componentStyle/sdComponentStyle/multiChoice.scss';
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
interface MultiChoiceProps {
  label: string;
}
const MultiChoice = (props: MultiChoiceProps) => {
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
  const questionBox: any = (
    <div className={stylesMulti.ekasMultichoiceEditPart1}>
      <div className={stylesMulti.ekasMultichoiceCheckbox}>
        <div className={stylesMulti.ekasMultichoiceCheckbox1}>
          <input id={'0'} type="checkbox" />
          <label htmlFor={'0'}>Required question</label>
        </div>
        <div className={stylesMulti.ekasMultichoiceCheckbox1}>
          <input id={'1'} type="checkbox" />
          <label htmlFor={'1'}>Capture order</label>
          <div className={stylesMulti.ekasMultichoiceTablePart2Icon}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
        </div>
        <div className={stylesMulti.ekasMultichoiceCheckbox1}>
          <input id={'2'} type="checkbox" />
          <label htmlFor={'2'}>Use images in answers</label>
        </div>
      </div>
      <div className={stylesMulti.ekasMultichoiceTable}>
        <table className={stylesMulti.ekasMultichoiceTable}>
          <thead>
            <tr>
              <td className={stylesMulti.ekasMultichoiceTableTitle}>
                <span>Type</span>
              </td>
              <td className={stylesMulti.ekasMultichoiceTableTitle}>
                <span>Answer list sorting</span>
                <div className={stylesMulti.ekasMultichoiceTablePart2Icon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
              <td className={stylesMulti.ekasMultichoiceTableTitle}>
                <span>Number of answers</span>
              </td>
              <td className={stylesMulti.ekasMultichoiceTableTitle2}></td>
              <td className={stylesMulti.ekasMultichoiceTableTitle2}></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={stylesMulti.ekasMultichoiceTableSelectWrapper}>
                <select className={stylesMulti.ekasMultichoiceTableSelect1}>
                  {typeList.map((item) => (
                    <option key={`text${item}`}>{item}</option>
                  ))}
                </select>
              </td>
              <td className={stylesMulti.ekasMultichoiceTableSelectWrapper}>
                <select className={stylesMulti.ekasMultichoiceTableSelect1}>
                  {answerList.map((item) => (
                    <option key={`text${item}`}>{item}</option>
                  ))}
                </select>
              </td>
              <td className={stylesMulti.ekasMultichoiceTableSelectWrapper}>
                <select className={stylesMulti.ekasMultichoiceTableSelect1}>
                  <option>Min/max count</option>
                  <option>Equal to</option>
                </select>
              </td>
              <td className={stylesMulti.ekasMultichoiceTableSelectWrapper}>
                <input
                  className={stylesMulti.ekasMultichoiceTableInput}
                  placeholder={'Min'}
                />
              </td>
              <td className={stylesMulti.ekasMultichoiceTableSelectWrapper}>
                <input
                  className={stylesMulti.ekasMultichoiceTableInput}
                  placeholder={'Max'}
                />
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
        labelIcon={'multiChoice'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'SMTRN'}
        defaultItemCategory={1}
        showAppearance={true}
        appearanceCategory={'multiChoice'}
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
export default MultiChoice;
