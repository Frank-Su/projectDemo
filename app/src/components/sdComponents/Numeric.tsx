/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React from 'react';
import stylesNum from '../../style/componentStyle/sdComponentStyle/numeric.scss';
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
interface NumericProps {
  label: string;
}
const Numeric = (props: NumericProps) => {
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
  const questionBox: any = (
    <div className={stylesNum.ekasNumericWrapper}>
      <div className={stylesNum.ekasNumericCheckbox}>
        <div className={stylesNum.ekasNumericCheckbox1}>
          <input id={'0'} type="checkbox" />
          <label htmlFor={'0'}>Required question</label>
        </div>
        <div className={stylesNum.ekasNumericCheckbox1}>
          <input id={'1'} type="checkbox" />
          <label htmlFor={'1'}>Input assistance</label>
          <div className={stylesNum.ekasNumericTablePart2Icon}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
        </div>
      </div>
      <div className={stylesNum.ekasNumericTable}>
        <table className={stylesNum.ekasNumericTablet}>
          <thead>
            <tr>
              <td className={stylesNum.ekasNumericTableTitle}>
                <span>Type</span>
              </td>
              <td className={stylesNum.ekasNumericTableTitle}>
                <span>Input box size</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={stylesNum.ekasNumericTableSelectWrapper}>
                <select className={stylesNum.ekasNumericTableSelect1}>
                  {typeList.map((item) => (
                    <option key={`text${item}`}>{item}</option>
                  ))}
                </select>
              </td>
              <td className={stylesNum.ekasNumericTableSelectWrapper}>
                <span className={stylesNum.ekasNumericTableSpan}>Width</span>
                <input className={stylesNum.ekasNumericTableInput} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td className={stylesNum.ekasNumericTableSelectWrapper}>
                <span className={stylesNum.ekasNumericTableTitleMid}>
                  Numeric format
                </span>
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={3}>
                <span className={stylesNum.ekasNumericTableSpan2}>
                  Total digits
                </span>
                <div className={stylesNum.ekasNumericTablePart2Icon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <input
                  className={stylesNum.ekasNumericTableInput2}
                  defaultValue={'2'}
                />
                <span className={stylesNum.ekasNumericTableSpan2}>
                  Decimals
                </span>
                <div className={stylesNum.ekasNumericTablePart2Icon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <input
                  className={stylesNum.ekasNumericTableInput2}
                  defaultValue={'0'}
                />
                <span className={stylesNum.ekasNumericTableSpan2}>
                  Lower limit
                </span>
                <select className={stylesNum.ekasNumericTableSelect}>
                  <option>{'>='}</option>
                  <option>{'>'}</option>
                </select>
                <input className={stylesNum.ekasNumericTableInput2} />
                <span className={stylesNum.ekasNumericTableSpan2}>
                  Upper limit
                </span>
                <select className={stylesNum.ekasNumericTableSelect}>
                  <option>{'<='}</option>
                  <option>{'<'}</option>
                </select>
                <input className={stylesNum.ekasNumericTableInput2} />
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
        labelIcon={'numeric'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'TDN'}
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
export default Numeric;
