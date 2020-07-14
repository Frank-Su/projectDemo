/**
 * Author: Andy
 * Date: 15/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/pageBreak.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToiletPaper } from '@fortawesome/free-solid-svg-icons';

/**
 * @param label label of PageBreak
 */
interface PageBreakProps {
  label: string;
}
const PageBreak = (props: PageBreakProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasPageBreakIcon}>
      <FontAwesomeIcon icon={faToiletPaper} />
    </div>
  );
  const themeList: Array<string> = [
    '',
    'Main theme',
    'Main theme - Accessiable',
    'Main theme - with title',
  ];
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  const handleLabelChange = (): void => {};
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div>
      <QuestionTitle
        label={'Break page'}
        iconBox={iconBox}
        readOnly={false}
        showCogIcon={false}
        showCopyIcon={true}
        showEyeIcon={false}
        showTrashIcon={true}
        handleLabelChangeEvent={handleLabelChange}
      />
      <div className={styles.ekasPageBreakItem}>
        <span>Item:</span>
        <select className={styles.ekasPageBreakItemSelect}>
          <option>Page break</option>
          <option>Directive</option>
        </select>
      </div>
      <div className={styles.ekasPageBreakWrapper}>
        <table>
          <thead>
            <tr>
              <td className={styles.ekasPageBreakWrapperTdNormal}>
                <span>Theme</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.ekasPageBreakWrapperTdNormal}>
                <select>
                  {themeList.map((item, index) => (
                    <option key={`item,${index}`}>{item}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PageBreak;
