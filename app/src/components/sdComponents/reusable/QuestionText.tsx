/**
 * Author: Andy
 * Date: 09/06/2020
 */

import React, { useState } from 'react';
import styles from '../../../style/componentStyle/sdComponentStyle/reusableStyle/questionText.scss';

/**
 * @param title title data
 * @param text text data
 * @function handleModifyTitle modify title
 * @function handleModifyText modify text in textarea
 * @param showInst display instruction or not
 */
interface QuestionTextProps {
  title: string;
  text: string;
  handleModifyTitle: Function;
  handleModifyText: Function;
  showInst: boolean;
}
const QuestionText = (props: QuestionTextProps) => {
  /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);
  /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  /**
   * Handle title change event.
   * @param e event target
   */
  const handleTitleChange = (e: any): void => {
    setTitle(e.target.value);
  };

  /**
   * Handle text change event.
   * @param e event target
   */
  const handleTextChange = (e: any): void => {
    setText(e.target.value);
  };
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div className={styles.ekasQTextWrapper}>
      <div>
        <span>Title</span>
        <input
          value={title}
          onChange={(e) => handleTitleChange(e)}
          onBlur={() => props.handleModifyTitle(title)}
          className={styles.ekasQTextTextInputSmall}
        />
      </div>
      <div>
        <span>Text</span>
        <textarea
          value={text}
          onChange={(e) => handleTextChange(e)}
          onBlur={() => props.handleModifyText(text)}
          className={styles.ekasQTextTextInputLarge}
          style={{ resize: 'none' }}
        />
      </div>
      {props.showInst ? (
        <div>
          <span>Instructions</span>
          <input className={styles.ekasQTextTextInputSmall} />
        </div>
      ) : null}
    </div>
  );
};

export default QuestionText;
