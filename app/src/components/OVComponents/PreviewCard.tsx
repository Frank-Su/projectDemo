/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React from 'react';
import styles from '../../style/componentStyle/ovComponentStyle/previewCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const PreviewCard = () => {
  return (
    <div className={styles.eaksPreviewcardContainer}>
      <div className={styles.eaksPreviewcardExternalTestWrapper}>
        <span>External Test</span>
        <FontAwesomeIcon
          className={styles.eaksPreviewcardExternalTestIcon}
          icon={faQuestionCircle}
        />
      </div>
      <div className={styles.eaksPreviewcardButton}>Generate links</div>
    </div>
  );
};
export default PreviewCard;
