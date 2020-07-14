/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React, { useState } from 'react';

import styles from '../../../style/componentStyle/ovComponentStyle/reusable/overviewCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

/**
 * @param width width of overview card
 * @param titleHeight heigth of title of overview card
 * @param contentHeight heigth of content of overview card
 * @param title name of overview card
 * @param titleTextAddition addition html object at the left of title
 * @param titleButtonAddition addition html object at the right of title
 * @param content html object of content
 */
interface OverviewCardProps {
  width?: string;
  titleHeight?: string;
  contentHeight?: string;
  title?: string;
  titleTextAddition?: any;
  titleButtonAddition?: any;
  content?: any;
}

const OverviewCard = (props: OverviewCardProps) => {
  // init params need to be used
  const title = props.title ? props.title : 'Title';
  const width = props.width ? props.width : '100%';
  const titleHeight = props.titleHeight ? props.titleHeight : '5rem';
  const contentHeight = props.contentHeight ? props.contentHeight : '0rem';
  const titleTextAddition = props.titleTextAddition ? (
    props.titleTextAddition
  ) : (
    <div></div>
  );
  const titleButtonAddition = props.titleButtonAddition ? (
    props.titleButtonAddition
  ) : (
    <div></div>
  );
  const content = props.content ? props.content : <div></div>;

  // init states need to be used
  const [show, setShow] = useState<boolean>(true);

  /**
   * hide and display card
   */
  const handleTitleButtonOnclick = () => setShow(!show);

  return (
    <div className={styles.ekasOverviewcardWapper} style={{ width: width }}>
      {/*----------------- START: title part of overview card -----------------*/}
      <div
        className={styles.ekasOverviewcardTitleWapper}
        style={{ height: titleHeight }}
      >
        <div
          className={styles.ekasOverviewcardTitleText}
          style={{ height: titleHeight, lineHeight: titleHeight }}
        >
          {title}
          {titleTextAddition}
        </div>
        <div>
          {titleButtonAddition}
          <div
            className={styles.ekasOverviewcardTitleButton}
            style={{ width: '4rem', height: '4rem', lineHeight: '4rem' }}
            onClick={handleTitleButtonOnclick}
          >
            <FontAwesomeIcon
              className={styles.ekasOverviewcardTitleButtonIcon}
              icon={faAngleUp}
              style={{
                transform: `rotate(${show ? '0' : '180'}deg)`,
                fontSize: '1.5rem',
              }}
            />
          </div>
        </div>
      </div>
      {/*----------------- END: title part of overview card -----------------*/}

      {/*----------------- START: content part of overview card -----------------*/}
      <div
        className={styles.ekasOverviewcardContentWapper}
        style={{
          height: contentHeight,
          marginTop: show ? '0rem' : `-${contentHeight}`,
        }}
      >
        {content}
      </div>
      {/*----------------- END: content part of overview card -----------------*/}
    </div>
  );
};
export default OverviewCard;
