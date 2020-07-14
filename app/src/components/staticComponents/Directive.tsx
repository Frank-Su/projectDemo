/**
 * Author: Andy
 * Date: 16/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/directive.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

/**
 * @param label label of Directive
 */
interface DirectiveProps {
  label: string;
}
const Directive = (props: DirectiveProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasDirectiveIcon}>
      <FontAwesomeIcon icon={faChevronCircleDown} />
    </div>
  );
  const themeList: Array<string> = [
    '',
    'Main theme',
    'Main theme - Accessiable',
    'Main theme - with title',
  ];
  const direcitveList: Array<string> = [
    'One question per page',
    'Progress bar begin',
    'Progress bar end',
    'Forward navigation only',
    'Survey defined navigation',
  ];
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  const handleLabelChange = (): void => {};
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div>
      <QuestionTitle
        label={'One question per page'}
        iconBox={iconBox}
        readOnly={true}
        showCogIcon={false}
        showCopyIcon={true}
        showEyeIcon={false}
        showTrashIcon={true}
        handleLabelChangeEvent={handleLabelChange}
      />
      <div className={styles.ekasDirectiveItem}>
        <span>Item:</span>
        <select className={styles.ekasDirectiveItemSelect}>
          <option>Page break</option>
          <option>Directive</option>
        </select>
      </div>
      <div className={styles.ekasDirectiveWrapper}>
        <table>
          <thead>
            <tr>
              <td className={styles.ekasDirectiveWrapperTdNormal}>
                <span>Directive type</span>
              </td>
              <td className={styles.ekasDirectiveWrapperTdNormal}>
                <span>Theme</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.ekasDirectiveWrapperTdNormal}>
                <select>
                  {direcitveList.map((item, index) => (
                    <option key={`item,${index}`}>{item}</option>
                  ))}
                </select>
              </td>
              <td className={styles.ekasDirectiveWrapperTdNormal}>
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
export default Directive;
