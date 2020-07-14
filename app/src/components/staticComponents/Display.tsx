/**
 * Author: Andy
 * Date: 16/06/2020
 */
import React from 'react';
import styles from '../../style/componentStyle/staticComponentStyle/display.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faComments,
  faInfoCircle,
  faCalendarDay,
  faDotCircle,
  faHashtag,
  faImage,
  faMapMarkerAlt,
  faSitemap,
  faCheckSquare,
  faTrophy,
  faBarcode,
  faLayerGroup,
  faBorderAll,
  faThLarge,
  faBorderNone,
  faFolder,
  faSyncAlt,
  faChevronCircleDown,
  faPhoneAlt,
  faExclamationTriangle,
  faNetworkWired,
  faFileAlt,
  faEnvelope,
  faScroll,
  faCube,
  faChartLine,
  faToiletPaper,
  faCubes,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

interface DisplayProps {
  setTypeCallback: Function;
  setCloseEvent: Function;
}

const Display = (props: DisplayProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const row1: Array<{ icon: string; text: string }> = [
    { icon: 'TT', text: 'Text' },
    { icon: 'TB', text: 'Table lookup/Hierarchy' },
    { icon: 'GD', text: 'Grid' },
    { icon: 'GEO', text: 'Geolocation' },
  ];
  const row2: Array<{ icon: string; text: string }> = [
    { icon: 'TTL', text: 'Text List' },
    { icon: 'MC', text: 'Multi choice' },
    { icon: 'GDM', text: 'Multi choice grid' },
  ];
  const row3: Array<{ icon: string; text: string }> = [
    { icon: 'INFO', text: 'Informational text' },
    { icon: 'NC', text: 'Numeric' },
    { icon: 'GD3D', text: '3D Grid' },
  ];
  const row4: Array<{ icon: string; text: string }> = [
    { icon: 'DATE', text: 'Date' },
    { icon: 'NCL', text: 'Numeric list' },
    { icon: 'IMG', text: 'Image upload' },
  ];
  const row5: Array<{ icon: string; text: string }> = [
    { icon: 'SC', text: 'Single choice' },
    { icon: 'RK', text: 'Ranking' },
    { icon: 'QR', text: 'Barcode/QR code' },
  ];

  const iconList = {
    TT: faComment,
    TTL: faComments,
    INFO: faInfoCircle,
    DATE: faCalendarDay,
    SC: faDotCircle,
    TB: faSitemap,
    MC: faCheckSquare,
    NC: faHashtag,
    // need to be replaced
    NCL: faLayerGroup,
    RK: faTrophy,
    // need to be replaced
    GD: faBorderAll,
    // need to be replaced
    GDM: faThLarge,
    // need to be replaced
    GD3D: faBorderNone,
    IMG: faImage,
    QR: faBarcode,
    GEO: faMapMarkerAlt,
  };
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  return (
    <div>
      <p className={styles.ekasP}>Add item</p>
      <table className={styles.ekasTable}>
        <tbody>
          <tr>
            {row1.map((item, index) => (
              <td
                className={styles.ekasItemWrapper}
                onClick={() => props.setTypeCallback(item.icon)}
                key={`${item.text},${index}`}
              >
                <div className={styles.ekasItemContent}>
                  <FontAwesomeIcon icon={iconList[item.icon]} />
                  <span>{item.text}</span>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            {row2.map((item, index) => (
              <td
                onClick={() => props.setTypeCallback(item.icon)}
                className={styles.ekasItemWrapper}
                key={`${item.text},${index}`}
              >
                <div className={styles.ekasItemContent}>
                  <FontAwesomeIcon icon={iconList[item.icon]} />
                  <span>{item.text}</span>
                </div>
              </td>
            ))}
            <td></td>
          </tr>
          <tr>
            {row3.map((item, index) => (
              <td
                onClick={() => props.setTypeCallback(item.icon)}
                className={styles.ekasItemWrapper}
                key={`${item.text},${index}`}
              >
                <div className={styles.ekasItemContent}>
                  <FontAwesomeIcon icon={iconList[item.icon]} />
                  <span>{item.text}</span>
                </div>
              </td>
            ))}
            <td></td>
          </tr>
          <tr>
            {row4.map((item, index) => (
              <td
                onClick={() => props.setTypeCallback(item.icon)}
                className={styles.ekasItemWrapper}
                key={`${item.text},${index}`}
              >
                <div className={styles.ekasItemContent}>
                  <FontAwesomeIcon icon={iconList[item.icon]} />
                  <span>{item.text}</span>
                </div>
              </td>
            ))}
            <td></td>
          </tr>
          <tr>
            {row5.map((item, index) => (
              <td
                onClick={() => props.setTypeCallback(item.icon)}
                className={styles.ekasItemWrapper}
                key={`${item.text},${index}`}
              >
                <div className={styles.ekasItemContent}>
                  <FontAwesomeIcon icon={iconList[item.icon]} />
                  <span>{item.text}</span>
                </div>
              </td>
            ))}
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className={styles.ekasDivider}>
        <span>Nodes</span>
      </div>
      <table className={styles.ekasTable}>
        <tbody>
          <tr>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('FD')}
            >
              <div className={styles.ekasItemFolder}>
                <FontAwesomeIcon icon={faFolder} />
                <span>Folder</span>
              </div>
            </td>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('LP')}
            >
              <div className={styles.ekasItemLoop}>
                <FontAwesomeIcon icon={faSyncAlt} />
                <span>Loop</span>
              </div>
            </td>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('DT')}
            >
              <div className={styles.ekasItemDirective}>
                <FontAwesomeIcon icon={faChevronCircleDown} />
                <span>Directive</span>
              </div>
            </td>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('TEL')}
            >
              <div className={styles.ekasItemTelephony}>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>Telephony</span>
              </div>
            </td>
          </tr>

          <tr>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('PG')}
            >
              <div className={styles.ekasItemPage}>
                <FontAwesomeIcon icon={faFileAlt} />
                <span>Page</span>
              </div>
            </td>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('CD')}
            >
              <div className={styles.ekasItemCondition}>
                <FontAwesomeIcon icon={faNetworkWired} />
                <span>Condition</span>
              </div>
            </td>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('SP')}
            >
              <div className={styles.ekasItemStop}>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <span>Stop</span>
              </div>
            </td>
            <td></td>
          </tr>

          <tr>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('BK')}
            >
              <div className={styles.ekasItemBlock}>
                <FontAwesomeIcon icon={faCube} />
                <span>Block</span>
              </div>
            </td>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('SCP')}
            >
              <div className={styles.ekasItemScript}>
                <FontAwesomeIcon icon={faScroll} />
                <span>Script</span>
              </div>
            </td>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('EM')}
            >
              <div className={styles.ekasItemEmail}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Email</span>
              </div>
            </td>
            <td></td>
          </tr>

          <tr>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('BKC')}
            >
              <div className={styles.ekasItemBlock}>
                <FontAwesomeIcon icon={faCubes} />
                <span>Block to call</span>
              </div>
            </td>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('PGB')}
            >
              <div className={styles.ekasItemPageBreak}>
                <FontAwesomeIcon icon={faToiletPaper} />
                <span>Page break</span>
              </div>
            </td>
            <td
              className={styles.ekasItemWrapper}
              onClick={() => props.setTypeCallback('CT')}
            >
              <div className={styles.ekasItemChart}>
                <FontAwesomeIcon icon={faChartLine} />
                <span>Chart</span>
              </div>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className={styles.ekasFoot}>
        <input type="checkbox" id={'1'} />
        <label htmlFor={'1'}>Add another</label>
        <div className={styles.ekasQIcon}>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
        <button
          onClick={() => props.setCloseEvent()}
          className={styles.ekasCloseBtn}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};
export default Display;
