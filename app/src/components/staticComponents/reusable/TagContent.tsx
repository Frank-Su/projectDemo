/**
 * Author: Andy
 * Date: 15/06/2020
 */

import React, { useState } from 'react';
import styles from '../../../style/componentStyle/sdComponentStyle/singleChoice.scss';

/**
 * @param editContent edit component
 * @param secondLabel second label of second content
 * @param secondContent second content
 */
interface TagContentProps {
  editContent: any;
  secondLabel: string;
  secondContent: any;
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
        {props.secondLabel !== '' ? (
          <span
            className={
              selectedTag == 'second'
                ? styles.ekasSinglechoiceTagsSpanSelected
                : styles.ekasSinglechoiceTagsSpanNormal
            }
            onClick={() => {
              setTagContent(props.secondContent);
              setSelectedTag('second');
            }}
          >
            {props.secondLabel}
          </span>
        ) : null}
      </div>
      <div>{tagContent}</div>
    </div>
  );
};
export default TagContent;
