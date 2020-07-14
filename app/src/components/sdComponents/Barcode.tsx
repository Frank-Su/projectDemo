/**
 * Author: Andy
 * Date: 11/06/2020
 */
import React from 'react';

import styles from '../../style/componentStyle/sdComponentStyle/barcode.scss';
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
interface BarcodeProps {
  label: string;
}
const Barcode = (props: BarcodeProps) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  const newState = useSelector(
    (state: RootState) => state.surveyReducer.questionData[props.label]
  );
  const dispatch = useDispatch();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const questionBox: any = (
    <div className={styles.ekasBarcodeWrapper}>
      <div className={styles.ekasBarcodeCheckbox}>
        <input id="0" type="checkbox" />
        <label htmlFor={'0'}>Required question</label>
      </div>
      <div className={styles.ekasBarcodeTable}>
        <table>
          <thead>
            <tr>
              <td colSpan={2} className={styles.ekasBarcodeTableTitleLong}>
                <span>Input box size</span>
                <div className={styles.ekasBarcodeTableIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.ekasBarcodeTableItemWrapper}>
                <span>Rows</span>
                <input className={styles.ekasBarcodeInput} />
              </td>
              <td className={styles.ekasBarcodeTableItemWrapper}>
                <span>Width</span>
                <input className={styles.ekasBarcodeInput} />
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
        labelIcon={'barcode'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'BARCODE'}
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
export default Barcode;
