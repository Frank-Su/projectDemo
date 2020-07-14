/**
 * Author: Andy
 * Date: 09/06/2020
 */
import React from 'react';
import styles from '../../../style/componentStyle/sdComponentStyle/reusableStyle/questionCategory.scss';

/**
 * @param itemCategory name of itemCategory
 * @param defaultItemCategory index of itemCategory
 * @param showAppearance display appearance select component or not
 * @param appearanceCategory name of appearanceCategory
 * @param defaultAppearanceCategory index of appearanceCategory
 */
interface QuestionCategoryProps {
  itemCategory: string;
  defaultItemCategory: number;
  showAppearance: boolean;
  appearanceCategory: string;
  defaultAppearanceCategory: number;
}

const QuestionCategory = (props: QuestionCategoryProps) => {
  /* <------------------------------------ **** PARAMETERS START **** ------------------------------------ */
  const item = {
    TDN: ['Text', 'Date', 'Numeric'],
    SMTRN: [
      'Single choice',
      'Multi choice',
      'Text list',
      'Ranking',
      'Numeric list',
    ],
    TABLE: ['Table lookup/Hierarchy'],
    INFO: ['Informational text'],
    GRID: ['Grid'],
    GRIDMULTI: ['Multi choice grid'],
    GRID3D: ['3D Grid'],
    IMAGE: ['image upload'],
    BARCODE: ['Barcode/QR code'],
    GEOLOCATION: ['Geolocation'],
  };
  const appearance = {
    text: ['Text field', 'Paragraph', 'Essay'],
    singleChoice: [
      'Radio buttons',
      'Answer buttons',
      'Drop down',
      'Slider',
      'Horizontal rating scale',
      'Star rating',
      'Grid bars',
      'Searchable single',
      'Boolean',
    ],
    multiChoice: ['Check boxes', 'Answer buttons', 'Searchable multi'],
    ranking: ['Rank by click', 'Rank by numbers', 'Rank by drag drop'],
    numericList: ['Input fields', 'Auto sum', 'Percent % (total)'],
    table: [
      'Table lookup - Radio buttons',
      'Table lookup - Answer buttons',
      'Table lookup - Drop down',
      'Hierarchy - Drill down',
      'Hierarchy - Drop down',
    ],
    grid: [
      'Rating grid - Radio buttons',
      'Rating grid - Answer buttons',
      'Rating grid - Drop down',
      'Rating list - Grid bars',
      'Rating list - Star rating',
      'Rating list - Slider',
      'Rating list - Horizontal scale',
      'Ranking grid - Card sort',
      'Ranking grid - Drop down',
      'Ranking grid - Radio buttons',
      'Card sort',
      'Accordion',
      'Carousel',
      'Carousel - Star rating',
      'Carousel - Grid bars',
      'Carousel - Horizontal scale',
    ],
    gridMulti: ['Check boxes', 'Answer buttons', 'Carousel'],
    grid3D: ['Input fields', 'Answer buttons', 'Best-Worst comparison'],
  };
  /* <------------------------------------ **** PARAMETERS END **** ------------------------------------ */

  return (
    <div className={styles.ekasQCategoryWrapper}>
      <div className={styles.ekasQCategoryItem}>
        <span>Item:</span>
        <select defaultValue={props.defaultItemCategory}>
          {item[props.itemCategory].map((item: string, index: number) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {props.showAppearance ? (
        <div className={styles.ekasQCategoryAppearance}>
          <span>Appearance:</span>
          <select defaultValue={props.defaultAppearanceCategory}>
            {appearance[props.appearanceCategory].map(
              (item: string, index: number) => (
                <option key={index} value={index}>
                  {item}
                </option>
              )
            )}
          </select>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionCategory;
