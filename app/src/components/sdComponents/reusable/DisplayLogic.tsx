/**
 * Author: Andy
 * Date: 09/06/2020
 */
import React, { useState } from 'react';
import styles from '../../../style/componentStyle/sdComponentStyle/reusableStyle/displayLogic.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

interface DisplayLogicProps {}
const DisplayLogic = (props: DisplayLogicProps) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  const [show, setShow] = useState<boolean>(false);
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  /**
   * Add a condition
   */
  const handleAddConditionEvent = () => {};
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div>
      <div className={styles.ekasDisplayNotification}>
        <div className={styles.ekasDisplayNotificationIcon}>
          <FontAwesomeIcon icon={faExclamationCircle} />
        </div>
        <span>
          Press add condition to define the logic for when this question should
          be displayed.
        </span>
      </div>
      <div onClick={handleAddConditionEvent} className={styles.ekasDisplayAdd}>
        Add condition
      </div>
      <div
        style={{
          opacity: show ? 1 : 0,
          visibility: show ? 'visible' : 'hidden',
        }}
      >
        <div>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default DisplayLogic;
