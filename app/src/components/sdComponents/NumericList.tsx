/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React from 'react';

import stylesNList from '../../style/componentStyle/sdComponentStyle/numericList.scss';
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
interface NumericListProps {
  label: string;
}
const NumericList = (props: NumericListProps) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  const newState = useSelector(
    (state: RootState) => state.surveyReducer.questionData[props.label]
  );
  const dispatch = useDispatch();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const questionBox: any = (
    <div className={stylesNList.ekasNumericlistEditPart1}>
      <div className={stylesNList.ekasNumericlistCheckbox}>
        <div className={stylesNList.ekasNumericlistCheckbox1}>
          <input type="checkbox" />
          <label>Required question</label>
        </div>
        <div className={stylesNList.ekasNumericlistCheckbox1}>
          <input type="checkbox" />
          <label>Input assistance</label>
          <div className={stylesNList.ekasNumericlistTablePart2Icon}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
        </div>
      </div>
      <div className={stylesNList.ekasNumericlistTable}>
        <table className={stylesNList.ekasNumericlistTable}>
          <thead>
            <tr>
              <td className={stylesNList.ekasNumericlistTableTitle}>
                <span>Type</span>
              </td>
              <td className={stylesNList.ekasNumericlistTableTitle}>
                <span>Answer list sorting</span>
                <div className={stylesNList.ekasNumericlistTablePart2Icon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
              <td className={stylesNList.ekasNumericlistTableTitle3}>
                <span>Input box size</span>
                <div className={stylesNList.ekasNumericlistTablePart2Icon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={stylesNList.ekasNumericlistTableSelectWrapper}>
                <select className={stylesNList.ekasNumericlistTableSelect1}>
                  <option>Normal</option>
                </select>
              </td>
              <td className={stylesNList.ekasNumericlistTableSelectWrapper}>
                <select className={stylesNList.ekasNumericlistTableSelect1}>
                  <option>In order</option>
                </select>
              </td>
              <td className={stylesNList.ekasNumericlistTableSelectWrapper}>
                <span className={stylesNList.ekasNumericlistTableSpan}>
                  Rows
                </span>
                <input className={stylesNList.ekasNumericlistTableInput} />
                <span
                  className={stylesNList.ekasNumericlistTableSpan}
                  style={{ marginLeft: '1rem' }}
                >
                  Width
                </span>
                <input className={stylesNList.ekasNumericlistTableInput} />
              </td>

              <td></td>
            </tr>
            <tr>
              <td className={stylesNList.ekasNumericlistTableTitleWrapper}>
                Numeric format
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={4}>
                <span className={stylesNList.ekasNumericlistTableSpan2}>
                  Total digits
                </span>
                <div className={stylesNList.ekasNumericlistTablePart2Icon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <input
                  className={stylesNList.ekasNumericlistTableInput2}
                  defaultValue={'2'}
                />
                <span className={stylesNList.ekasNumericlistTableSpan2}>
                  Decimals
                </span>
                <div className={stylesNList.ekasNumericlistTablePart2Icon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <input
                  className={stylesNList.ekasNumericlistTableInput2}
                  defaultValue={'0'}
                />
                <span className={stylesNList.ekasNumericlistTableSpan2}>
                  Lower limit
                </span>
                <select className={stylesNList.ekasNumericlistTableSelect}>
                  <option>{'>='}</option>
                  <option>{'>'}</option>
                </select>
                <input className={stylesNList.ekasNumericlistTableInput2} />
                <span className={stylesNList.ekasNumericlistTableSpan2}>
                  Upper limit
                </span>
                <select className={stylesNList.ekasNumericlistTableSelect}>
                  <option>{'<='}</option>
                  <option>{'<'}</option>
                </select>
                <input className={stylesNList.ekasNumericlistTableInput2} />
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
        labelIcon={'numericList'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'SMTRN'}
        defaultItemCategory={4}
        showAppearance={true}
        appearanceCategory={'numericList'}
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
export default NumericList;
