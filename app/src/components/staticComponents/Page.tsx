/**
 * Author: Andy
 * Date: 15/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/page.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * @param label label of Page
 */
interface PageProps {
  label: string;
}
const Page = (props: PageProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasPageIcon}>
      <FontAwesomeIcon icon={faFileAlt} />
    </div>
  );
  const orderList: Array<string> = ['In order', 'Randomized', 'Rotated'];
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
        label={props.label}
        iconBox={iconBox}
        readOnly={false}
        showCogIcon={false}
        showCopyIcon={true}
        showEyeIcon={true}
        showTrashIcon={true}
        handleLabelChangeEvent={handleLabelChange}
      />
      <div className={styles.ekasPageWrapper}>
        <div className={styles.ekasPageSection1}>
          <table>
            <thead>
              <tr>
                <td className={styles.ekasPageWrapperTdNormal}>
                  <span>Order</span>
                  <div className={styles.ekasPageTitleIcon}>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </div>
                </td>
                <td className={styles.ekasPageWrapperTdNormal}>
                  <span>Theme</span>
                </td>
                <td className={styles.ekasPageWrapperTdNormal}>
                  <span>Page layout</span>
                </td>
                <td className={styles.ekasPageWrapperTdLong}>
                  <span>Auto-Submit</span>
                  <div className={styles.ekasPageTitleIcon}>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </div>
                </td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.ekasPageWrapperTdNormal}>
                  <select>
                    {orderList.map((item, index) => (
                      <option key={`item,${index}`}>{item}</option>
                    ))}
                  </select>
                </td>
                <td className={styles.ekasPageWrapperTdNormal}>
                  <select>
                    {themeList.map((item, index) => (
                      <option key={`item,${index}`}>{item}</option>
                    ))}
                  </select>
                </td>
                <td className={styles.ekasPageWrapperTdNormal}>
                  <select>
                    <option></option>
                  </select>
                </td>
                <td className={styles.ekasPageWrapperTdLong}>
                  <span>After</span>
                  <input />
                  <span>second(s)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.ekasPageSection2}>
          <span>Title</span>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
};
export default Page;
