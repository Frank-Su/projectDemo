/**
 * Author: Andy
 * Date: 10/06/2020
 */

import React, { useState } from 'react';
import styles from '../../../style/componentStyle/sdComponentStyle/singleChoice.scss';

/**
 * @param editContent edit component
 * @param displayLogicContent displayLogic component
 * @param scriptContent script component
 */
interface TagContentProps {
  editContent: any;
  displayLogicContent: any;
  scriptContent: any;
}
const TagContent = (props: TagContentProps) => {
  /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
  const [tagContent, setTagContent] = useState<any>(props.editContent);
  const [selectedTag, setSelectedTag] = useState<string>('edit');
  /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

  return (
    <div>
      <div className={styles.ekasSinglechoiceTagsWrapper}>
        <span
          className={
            selectedTag == 'edit'
              ? styles.ekasSinglechoiceTagsSpanSelected
              : styles.ekasSinglechoiceTagsSpanNormal
          }
          onClick={() => {
            setTagContent(props.editContent);
            setSelectedTag('edit');
          }}
        >
          Edit
        </span>
        <span
          className={
            selectedTag == 'display'
              ? styles.ekasSinglechoiceTagsSpanSelected
              : styles.ekasSinglechoiceTagsSpanNormal
          }
          onClick={() => {
            setTagContent(props.displayLogicContent);
            setSelectedTag('display');
          }}
        >
          Display logic
        </span>
        <span
          className={
            selectedTag == 'script'
              ? styles.ekasSinglechoiceTagsSpanSelected
              : styles.ekasSinglechoiceTagsSpanNormal
          }
          onClick={() => {
            setTagContent(props.scriptContent);
            setSelectedTag('script');
          }}
        >
          Script
        </span>
      </div>
      <div>{tagContent}</div>
    </div>
  );
};
export default TagContent;
