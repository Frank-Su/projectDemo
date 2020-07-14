/**
 * Author: Andy
 * Date: 10/06/2020
 */
import React from 'react';

import stylesRank from '../../style/componentStyle/sdComponentStyle/ranking.scss';
import QuestionTitle from '../sdComponents/reusable/QuestionTitle';
import QuestionCategory from '../sdComponents/reusable/QuestionCategory';
import Edit from '../sdComponents/reusable/Edit';
import Script from '../sdComponents/reusable/Script';
import DisplayLogic from '../sdComponents/reusable/DisplayLogic';
import TagContent from '../sdComponents/reusable/TagContent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import * as actionFactory from '../../store/surveyReducer/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * @param label label which is used to get data from redux
 */
interface RankingProps {
  label: string;
}
const Ranking = (props: RankingProps) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  const newState = useSelector(
    (state: RootState) => state.surveyReducer.questionData[props.label]
  );
  const dispatch = useDispatch();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */

  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const questionBox: any = (
    <div className={stylesRank.ekasRankingEditPart1}>
      <div className={stylesRank.ekasRankingCheckbox}>
        <input type="checkbox" />
        <label>Required question</label>
      </div>
      <div className={stylesRank.ekasRankingTable}>
        <table className={stylesRank.ekasRankingTable}>
          <thead>
            <tr>
              <td className={stylesRank.ekasRankingTableTitle}>
                <span>Type</span>
              </td>
              <td className={stylesRank.ekasRankingTableTitle}>
                <span>Answer list sorting</span>
                <div className={stylesRank.ekasRankingTablePart2Icon}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
              </td>
              <td className={stylesRank.ekasRankingTableTitle}>
                <span>Number of answers</span>
              </td>
              <td className={stylesRank.ekasRankingTableTitle2}></td>
              <td className={stylesRank.ekasRankingTableTitle2}></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={stylesRank.ekasRankingTableSelectWrapper}>
                <select className={stylesRank.ekasRankingTableSelect1}>
                  <option>Normal</option>
                </select>
              </td>
              <td className={stylesRank.ekasRankingTableSelectWrapper}>
                <select className={stylesRank.ekasRankingTableSelect1}>
                  <option>In order</option>
                </select>
              </td>
              <td className={stylesRank.ekasRankingTableSelectWrapper}>
                <select className={stylesRank.ekasRankingTableSelect1}>
                  <option>Min/max count</option>
                </select>
              </td>
              <td className={stylesRank.ekasRankingTableSelectWrapper}>
                <input
                  className={stylesRank.ekasRankingTableInput}
                  placeholder={'Min'}
                />
              </td>
              <td className={stylesRank.ekasRankingTableSelectWrapper}>
                <input
                  className={stylesRank.ekasRankingTableInput}
                  placeholder={'Max'}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  const editContent: any = (
    <Edit
      label={props.label}
      questionBox={questionBox}
      showList={true}
      showText={true}
    />
  );
  const displayLogicContent: any = <DisplayLogic />;
  const scriptContent: any = <Script />;
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  /* <------------------------------------ **** FUNCTIONS START **** ------------------------------------ */
  /**
   * Dispatch when label changes.
   * @param newLabel new label
   */
  const handleModifyLabelEvent = (newLabel: string): void => {
    dispatch(actionFactory.modifyLabelAction(props.label, newLabel));
  };
  /* <------------------------------------ **** FUNCTIONS END **** ------------------------------------ */

  return (
    <div>
      <QuestionTitle
        labelIcon={'ranking'}
        label={newState.label}
        handleLabelChangeEvent={handleModifyLabelEvent}
      />
      <QuestionCategory
        itemCategory={'SMTRN'}
        defaultItemCategory={3}
        showAppearance={true}
        appearanceCategory={'ranking'}
        defaultAppearanceCategory={0}
      />

      <TagContent
        editContent={editContent}
        displayLogicContent={displayLogicContent}
        scriptContent={scriptContent}
      />
    </div>
  );
};
export default Ranking;
