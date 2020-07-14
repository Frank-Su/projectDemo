/**
 * Author: Andy
 * Date: 15/06/2020
 */
import React from 'react';
import QuestionTitle from './reusable/QuestionTitle';
import styles from '../../style/componentStyle/staticComponentStyle/condition.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNetworkWired,
  faQuestionCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import TagContent from './reusable/TagContent';

/**
 * @param label label of Condition
 */
interface ConditionProps {
  label: string;
}
const Condition = (props: ConditionProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const iconBox: any = (
    <div className={styles.ekasConditionIcon}>
      <FontAwesomeIcon icon={faNetworkWired} />
    </div>
  );
  const BranchesList: Array<string> = ['If... Then', 'If... Then... else'];

  const EditContent = () => {
    return (
      <div className={styles.ekasConditionWrapper}>
        <table>
          <thead>
            <tr>
              <td className={styles.ekasConditionWrapperTdNormal}>
                <span>Branches</span>
                <div className={styles.ekasConditionTitleIcon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.ekasConditionWrapperTdNormal}>
                <select>
                  {BranchesList.map((item, index) => (
                    <option key={`item,${index}`}>{item}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  const expressionContent: any = (
    <div>
      <EditContent />
      <div className={styles.ekasConditionSection2}>
        <div className={styles.ekasConditionSection2Wrapper}>
          <div className={styles.ekasConditionSection2Part1Wrapper}>
            <div className={styles.ekasConditionSection2Icon}>
              <FontAwesomeIcon icon={faExclamationCircle} />
            </div>
            <span>
              Why start from scratch? Use condition builder to generate an
              expression you can edit.
            </span>
            <span className={styles.ekasConditionSection2Part1Link}>
              Open condition builder
            </span>
          </div>
          <div>
            <textarea
              className={styles.ekasConditionSection2Part2TextArea}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
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
        showEyeIcon={false}
        showTrashIcon={true}
        handleLabelChangeEvent={handleLabelChange}
      />
      <TagContent
        editContent={<EditContent />}
        secondContent={expressionContent}
        secondLabel={'Expression'}
      />
    </div>
  );
};
export default Condition;
