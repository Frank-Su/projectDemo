/**
 * Author: Andy
 * Date: 15/06/2020
 */

import React, { useState } from 'react';
import styles from '../../../style/componentStyle/sdComponentStyle/reusableStyle/questionText.scss';

/**
 * @param title title data
 * @param text text data
 * @function handleModifyTitle modify title
 * @function handleModifyText modify text in textarea
 * @param showText display text or not
 * @param showTitle display title or not
 */
interface QuestionTextProps {
  title: string;
  text: string;
  handleModifyTitle: Function;
  handleModifyText: Function;
  showText: boolean;
  showTitle: boolean;
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
      {props.showTitle ? (
        <div>
          <span>Title</span>
          <input
            placeholder={'Please enter title here...'}
            value={title}
            onChange={(e) => handleTitleChange(e)}
            onBlur={() => props.handleModifyTitle(title)}
            className={styles.ekasQTextTextInputSmall}
          />
        </div>
      ) : null}
      {props.showText ? (
        <div>
          <span>Text</span>
          <textarea
            placeholder={'Please enter text here...'}
            value={text}
            onChange={(e) => handleTextChange(e)}
            onBlur={() => props.handleModifyText(text)}
            className={styles.ekasQTextTextInputLarge}
            style={{ resize: 'none' }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default QuestionText;
