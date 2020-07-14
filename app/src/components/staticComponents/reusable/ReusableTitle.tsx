/**
 * Author: Andy
 * Date: 15/06/2020
 */
import React, { useState } from 'react';
import styles from '../../../style/componentStyle/staticComponentStyle/reusable/questionTitle.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faCog,
  faEye,
  faTrash,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import * as actionFactory from '../../../store/resuableListReducer/actions';

/**
 * @param label label of question
 * @param iconBox html content of icon
 * @param readOnly can modify label or not
 * @param showEyeIcon show eye icon or not
 * @param showCogIcon show config icon or not
 * @param showCopyIcon show copy icon or not
 * @param showTrashIcon show trash icon or not
 * @function handleLabelChangeEvent change the label of the question
 */
interface QuestionTitleProps {
  label: string;
  iconBox: any;
  readOnly: boolean;
  showEyeIcon: boolean;
  showCogIcon: boolean;
  showCopyIcon: boolean;
  showTrashIcon: boolean;
  handleLabelChangeEvent: Function;
  handleDeleteEvent: Function;
}
const QuestionTitle = (props: QuestionTitleProps) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  const questionData = useSelector(
    (state: RootState) => state.surveyReducer.questionData
  );
  const questionOrder = useSelector(
    (state: RootState) => state.surveyReducer.questionOrder
  );
  const displayItem = useSelector(
    (state: RootState) => state.surveyReducer.displayItem
  );
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

  /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
  const [modifyLabel, setModifyLabel] = useState<boolean>(false);
  /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const label: string = props.label;

  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */
  return (
    <div className={styles.ekasQTitleWrapper}>
      {/* --------------------- START: left part of title --------------------- */}
      {props.readOnly ? (
        <div className={styles.ekasQTitleLeftPart}>
          {props.iconBox}
          <div className={styles.ekasQTitleLeftPartInput}>
            <span>{label}</span>
          </div>
        </div>
      ) : (
        <div className={styles.ekasQTitleLeftPart}>
          {props.iconBox}

          <div className={styles.ekasQTitleLeftPartInput}>
            {modifyLabel ? (
              <input
                defaultValue={label}
                autoFocus
                onBlur={(e) => {
                  setModifyLabel(false);
                  props.handleLabelChangeEvent(e.target.value);
                }}
              />
            ) : (
              <span onClick={() => setModifyLabel(true)}>{label}</span>
            )}
          </div>
          <div
            className={styles.ekasQTitleLeftPartEditicon}
            onClick={() => setModifyLabel(true)}
          >
            <FontAwesomeIcon icon={faPen} />
          </div>
        </div>
      )}
      {/* --------------------- END: left part of title --------------------- */}

      {/* --------------------- START: right part of title --------------------- */}
      <div className={styles.ekasQTitleRightPart}>
        {props.showEyeIcon ? (
          <div className={styles.ekasQTitleLeftPartEditicon}>
            <FontAwesomeIcon icon={faEye} />
          </div>
        ) : null}
        {props.showCogIcon ? (
          <div className={styles.ekasQTitleLeftPartEditicon}>
            <FontAwesomeIcon icon={faCog} />
          </div>
        ) : null}
        {props.showCopyIcon ? (
          <div className={styles.ekasQTitleLeftPartEditicon}>
            <FontAwesomeIcon icon={faCopy} />
          </div>
        ) : null}
        {props.showTrashIcon ? (
          <div
            className={styles.ekasQTitleLeftPartEditicon}
            onClick={() => props.handleDeleteEvent()}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        ) : null}
      </div>
      {/* --------------------- END: left part of title --------------------- */}
    </div>
  );
};
export default QuestionTitle;
