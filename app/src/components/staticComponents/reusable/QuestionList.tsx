/**
 * Author: Andy
 * Date: 09/06/2020
 */

import React, { useState } from 'react';
import styles from '../../../style/componentStyle/sdComponentStyle/reusableStyle/questionList.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortDown,
  faArrowsAlt,
  faTrash,
  faCopy,
  faQuestionCircle,
  faToggleOff,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons';

/**
 * @param data array of data need to display
 * @param reusableList reusable list
 * @param listLabel name of list
 * @function handleAddItem add an item to the list
 * @function handleModifyItem modify an item in the list
 * @function handleDeleteItem delete an item from the list
 * @function handleAddReusableList add a reusable list to the list
 * @function handleModifyReusableList modify a reusbale item in the list
 */
interface QuestionListProps {
  data: Array<{ code: string; answer: string }>;
  reusableList: Array<{ listId: string; listName: string }>;
  listLabel: string;
  handleAddItem: Function;
  handleModifyItem: Function;
  handleDeleteItem: Function;
  handleAddReusableList: Function;
  handleModifyReusableList: Function;
}
const QuestionList = (props: QuestionListProps) => {
  /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
  const [switchOn, setSwitchOn] = useState<boolean>(true);
  const [showReusableList, setShowReusableList] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [curIndex, setCurIndex] = useState<number>(-1);
  /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const reusableList: Array<{
    listId: string;
    listName: string;
  }> = props.reusableList;
  const data: Array<{ code: string; answer: string }> = props.data;
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  /**
   * Hide and display reusableList.
   */
  const handleShowReusableListEvent = () => {
    setShowReusableList(!showReusableList);
  };

  /**
   * handle event when user change code of item
   * @param e event target
   */
  const handleCodeChangeEvent = (e: any) => {
    setCode(e.target.value);
  };

  /**
   * handle event when user change code of item
   * @param e event target
   */
  const handleCodeOnclickEvent = (code: string, index: number) => {
    setCode(code);
    setCurIndex(index);
  };

  /**
   * handle event when user change code of item
   * @param e event target
   */
  const handleCodeOnblurEvent = (e: any) => {
    props.handleModifyItem(e.target.id, e.target.value);
    setCode('');
    setCurIndex(-1);
  };
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div>
      <div className={styles.ekasQListAnswers}>
        <div>
          <span>{props.listLabel} items</span>
          <div className={styles.ekasQListAnswersIcon}>
            <FontAwesomeIcon icon={faCopy} />
          </div>
          <div className={styles.ekasQListAnswersIcon}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
        </div>
        <div>
          <div
            className={
              switchOn
                ? styles.ekasQListAnswersSwitchOn
                : styles.ekasQListAnswersSwitchOff
            }
            onClick={() => setSwitchOn(!switchOn)}
          >
            <FontAwesomeIcon icon={switchOn ? faToggleOn : faToggleOff} />
          </div>
          <span>Show codes</span>
          <select>
            <option>Actions</option>
          </select>
        </div>
      </div>
      <table className={styles.ekasQListListWrapper}>
        <thead>
          <tr>
            <td style={{ width: '3rem' }}></td>
            <td style={{ width: '3rem' }}></td>
            <td>
              code
              <div className={styles.ekasQListListIcon}>
                <FontAwesomeIcon icon={faCopy} />
              </div>
            </td>
            <td>
              {props.listLabel} labels
              <div className={styles.ekasQListListIcon}>
                <FontAwesomeIcon icon={faCopy} />
              </div>
            </td>
            <td className={styles.ekasQListListCheckbox}>Lock position</td>
          </tr>
        </thead>
        <tbody>
          {/*---- map items in the list----*/}
          {data.map((item, index) => {
            // if code equals '-1' mean this item is a resuable list
            if (item.code == '-1') {
              // return resuable list style item
              return (
                <tr key={`tr${index}`} className={styles.ekasQListListItem}>
                  <td>
                    <div className={styles.ekasQListListIcon}>
                      <FontAwesomeIcon
                        id={`DELETE,${index}`}
                        onClick={() => props.handleDeleteItem(index)}
                        icon={faTrash}
                      />
                    </div>
                  </td>
                  <td>
                    <div className={styles.ekasQListListIcon}>
                      <FontAwesomeIcon icon={faArrowsAlt} />
                    </div>
                  </td>
                  <td colSpan={2}>
                    <select
                      className={styles.ekasQListListSelect}
                      id={`CODE,${index}`}
                    >
                      <option>{item.answer}</option>
                    </select>
                  </td>
                  <td className={styles.ekasQListListCheckbox}>
                    <span>Go to list</span>
                  </td>
                </tr>
              );
            } else {
              // return normal list style item
              return (
                <tr key={`tr${index}`} className={styles.ekasQListListItem}>
                  <td>
                    <div className={styles.ekasQListListIcon}>
                      <FontAwesomeIcon
                        id={`DELETE,${index}`}
                        onClick={() => props.handleDeleteItem(index)}
                        icon={faTrash}
                      />
                    </div>
                  </td>
                  <td>
                    <div className={styles.ekasQListListIcon}>
                      <FontAwesomeIcon icon={faArrowsAlt} />
                    </div>
                  </td>
                  <td>
                    <input
                      id={`CODE,${index}`}
                      value={index === curIndex ? code : item.code}
                      onClick={() => handleCodeOnclickEvent(item.code, index)}
                      onChange={(e) => handleCodeChangeEvent(e)}
                      onBlur={(e) => handleCodeOnblurEvent(e)}
                    />
                  </td>
                  <td>
                    <input
                      id={`ANSWER,${index}`}
                      onBlur={(e) =>
                        props.handleModifyItem(e.target.id, e.target.value)
                      }
                      defaultValue={item.answer}
                    />
                  </td>

                  <td className={styles.ekasQListListCheckbox}>
                    <input type="checkbox" />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className={styles.ekasQListButtonWrapper}>
        <div className={styles.ekasQListButtonLong}>
          <span
            className={styles.ekasQListButtonText}
            onClick={() => props.handleAddItem()}
          >
            Add one
          </span>
          <div
            className={styles.ekasQListButtonIcon}
            onClick={handleShowReusableListEvent}
          >
            <FontAwesomeIcon icon={faSortDown} />
            <div
              className={styles.ekasQListButtonReusablelist}
              onClick={() => {}}
              style={{
                opacity: showReusableList ? 1 : 0,
                visibility: showReusableList ? 'visible' : 'hidden',
              }}
            >
              Add a reusable list
            </div>
          </div>
        </div>
        <div className={styles.ekasQListButtonLong}>
          <span className={styles.ekasQListButtonText}>Add before</span>
          <div className={styles.ekasQListButtonIcon}>
            <FontAwesomeIcon icon={faSortDown} />
          </div>
        </div>
        <div className={styles.ekasQListButtonSmall}>
          <span className={styles.ekasQListButtonText}>Add many...</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
