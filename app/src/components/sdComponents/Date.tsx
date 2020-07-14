/**
 * Author: Andy
 * Date: 11/06/2020
 */
import React from 'react';

import styles from '../../style/componentStyle/sdComponentStyle/Date.scss';
import QuestionTitle from '../sdComponents/reusable/QuestionTitle';
import QuestionCategory from '../sdComponents/reusable/QuestionCategory';
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
interface DateProps {
  label: string;
}
const Date = (props: DateProps) => {
  /* <--------------------------- * STATE START * --------------------------- */
  const newState = useSelector(
    (state: RootState) => state.surveyReducer.questionData[props.label]
  );
  const dispatch = useDispatch();
  /* --------------------------- * STATE END * --------------------------- */

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
    <div className={styles.ekasDateWrapper}>
      <div className={styles.ekasDateCheckbox}>
        <input id="0" type="checkbox" />
        <label htmlFor={'0'}>Required question</label>
      </div>
      <div className={styles.ekasDateTable}>
        <table>
          <thead>
            <tr>
              <td className={styles.ekasDateTableTitle}>
                <span>Type</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.ekasDateTableItemWrapper}>
                <select className={styles.ekasDateTableSelect}>
                  {typeList.map((item) => (
                    <option key={`text${item}`}>{item}</option>
                  ))}
                </select>
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
        labelIcon={'date'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'TDN'}
        defaultItemCategory={1}
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
export default Date;
