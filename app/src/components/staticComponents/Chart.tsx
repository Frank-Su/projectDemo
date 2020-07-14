/**
 * Author: Andy
 * Date: 16/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/chart.scss';
import TagContent from '../sdComponents/reusable/TagContent';
import QuestionText from './reusable/QuestionText';
import DisplayLogic from '../sdComponents/reusable/DisplayLogic';
import Script from '../staticComponents/reusable/Script';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
/**
 * @param label label of Chart
 */
interface ChartProps {
  label: string;
}
const Chart = (props: ChartProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasChartIcon}>
      <FontAwesomeIcon icon={faChartLine} />
    </div>
  );
  const engineList: Array<string> = ['HTML generated', 'Google charts'];
  const typeList: Array<string> = ['Horizontal bar chart'];
  const sourceList: Array<string> = [''];
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  const handleLabelChange = (): void => {};
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div>
      <QuestionTitle
        label={props.label}
        iconBox={iconBox}
        readOnly={false}
        showCogIcon={true}
        showCopyIcon={true}
        showEyeIcon={true}
        showTrashIcon={true}
        handleLabelChangeEvent={handleLabelChange}
      />
      <div className={styles.ekasChartItem}>
        <span>Item:</span>
        <span>Chart</span>
      </div>
      <TagContent
        editContent={
          <div>
            <div className={styles.ekasChartWrapper}>
              <table style={{ display: 'inline-block' }}>
                <thead>
                  <tr>
                    <td className={styles.ekasChartWrapperTdNormal}>
                      <span>Chart engine</span>
                    </td>
                    <td className={styles.ekasChartWrapperTdNormal}>
                      <span>Chart type</span>
                    </td>
                    <td className={styles.ekasChartWrapperTdNormal}>
                      <span>Chart source</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.ekasChartWrapperTdNormal}>
                      <select>
                        {engineList.map((item, index) => (
                          <option key={`item,${index}`}>{item}</option>
                        ))}
                      </select>
                    </td>
                    <td className={styles.ekasChartWrapperTdNormal}>
                      <select>
                        {typeList.map((item, index) => (
                          <option key={`item,${index}`}>{item}</option>
                        ))}
                      </select>
                    </td>
                    <td className={styles.ekasChartWrapperTdNormal}>
                      <select>
                        {sourceList.map((item, index) => (
                          <option key={`item,${index}`}>{item}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.ekasChartCheckbox}>
                <input type="checkbox" id={'1'} />
                <label htmlFor={'1'}>Use question text</label>
              </div>
            </div>
            <QuestionText
              showText={true}
              showTitle={true}
              text={''}
              title={''}
              handleModifyText={() => {}}
              handleModifyTitle={() => {}}
            />
          </div>
        }
        displayLogicContent={<DisplayLogic />}
        scriptContent={<Script />}
      />
    </div>
  );
};
export default Chart;
