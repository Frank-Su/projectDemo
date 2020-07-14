/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React from 'react';
import styles from '../../style/componentStyle/ovComponentStyle/statusCard.scss';

/**
 * @param data array of Data
 */
interface StatusCardProps {
  data?: Array<any>;
}

const StatusCard = (props: StatusCardProps) => {
  //init params need to be used
  const testData: Array<any> = props.data
    ? props.data
    : [
        { name: 'ID', content: 'p836240944396' },
        { name: 'Company', content: 'Ekas' },
        { name: 'Created', content: 'Sol, Julie May 4, 2020 5:47 PM' },
        { name: 'Modified', content: 'May 21, 2020 5:17 PM' },
        { name: 'Last launch', content: '-' },
      ];

  // list of names of each part
  const keywords = ['Online', 'CATI', 'CAPI', 'QUANT'];

  return (
    <div className={styles.ekasStatuscardContainer}>
      {/*----------------- START: left part of status card -----------------*/}
      <div className={styles.ekasStatuscardLeft}>
        <ul>
          <li>
            <span>ID</span>
          </li>
          <li>
            <span>Company</span>
          </li>
          <li>
            <span>Created</span>
          </li>
          <li>
            <span>Modified</span>
          </li>
          <li>
            <span>Last launch</span>
          </li>
        </ul>
        <ul>
          {testData.map((item, index) => (
            <li
              key={index}
              className={styles.ekasStatuscardLeftContent}
              style={{ marginLeft: '3rem' }}
            >
              {item.content}
            </li>
          ))}
        </ul>
      </div>
      {/*----------------- END: left part of status card -----------------*/}

      {/*----------------- START: mid part of status card -----------------*/}
      <div className={styles.ekasStatuscardMid}>
        <div className={styles.ekasStatuscardMidTitle}>
          <span>Description</span>
          <div>
            <div className={styles.ekasStatuscardMidButtonWrapper}>
              <input
                id="switch"
                className={styles.ekasStatuscardMidButtonInput}
                type="checkbox"
              />
              <label
                htmlFor="switch"
                className={styles.ekasStatuscardMidButtonLabel}
              />
            </div>
            <span className={styles.ekasStatuscardMidButtonText}>
              Show HTML source
            </span>
          </div>
        </div>
        <div className={styles.ekasStatuscardMidTextarea}>
          n=300 GPs National rep sample
        </div>
      </div>
      {/*----------------- END: mid part of status card -----------------*/}

      {/*----------------- START: right part of status card -----------------*/}
      <div className={styles.ekasStatuscardRight}>
        <p>Keywords</p>
        <div className={styles.ekasStatuscardRightKeywordsContainer}>
          {keywords.map((item, index) => (
            <span
              key={index}
              className={styles.ekasStatuscardRightKeywordsText}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      {/*----------------- END: right part of status card -----------------*/}
    </div>
  );
};
export default StatusCard;
