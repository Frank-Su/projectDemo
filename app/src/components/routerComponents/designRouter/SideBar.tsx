/**
 * Author: Frank
 * Date: 2020/06/09
 */
import React, { useState } from 'react';
import { Row } from 'antd';
import { Link } from 'react-router-dom';
import style from '../../../style/componentStyle/routerComponentStyle/designRouter/sideBar.scss';

/* <------------------------------------ **** font import START **** ------------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faList,
  faBorderAll,
  faChartPie,
  faPalette,
  faTools,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';
/* <------------------------------------ **** font import END **** ------------------------------------ */

const SideBar = () => {
  /* <------------------------------------ **** define hook START **** ------------------------------------ */
  const [subMenuStatus, setSubMenuStatus] = useState(true);
  /* <------------------------------------ **** define hook END **** ------------------------------------ */

  /* <------------------------------------ **** defind state START **** ------------------------------------ */
  const iconList: Array<{ item: string; icon: any; link: string }> = [
    { item: 'survey', icon: faFileAlt, link: '/designServey' },
    { item: 'resuableList', icon: faList, link: '/resuableList' },
    { item: 'callBlocks', icon: faBorderAll, link: '' },
    { item: 'quotas', icon: faChartPie, link: '' },
    { item: 'look&feel', icon: faPalette, link: '' },
    { item: 'settings', icon: faTools, link: '' },
  ];
  /* <------------------------------------ **** defind state END **** ------------------------------------ */

  /* <------------------------------------ **** defind function START **** ------------------------------------ */
  /**
   * This is the handle toggle sub menu function
   * @param {}
   */
  const handleToggleSubMenu = () => {
    let status = subMenuStatus;
    if (status) {
      status = false;
    } else {
      status = true;
    }
    setSubMenuStatus(status);
  };
  /* <------------------------------------ **** defind function END **** ------------------------------------ */
  return (
    <Row className={style.ekasSurveySideBarWrapper}>
      <div className={style.ekasSurveySideBarMenu}>
        {/* <------------------------------------ **** map icon list START **** ------------------------------------ */}
        {/* this function will map all the icon in the list */}
        {iconList.map((item) => {
          if (item.item === 'look&feel') {
            return (
              <div key={item.item}>
                <div className={style.ekasSurveySideBarIconDivide} />
                <Link to={item.link}>
                  <div className={style.ekasSurveySideBarIconWrapper}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={style.ekasSurveySideBarIcon}
                    />
                  </div>
                </Link>
              </div>
            );
          } else {
            return (
              <Link to={item.link} key={item.item}>
                <div className={style.ekasSurveySideBarIconWrapper}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={style.ekasSurveySideBarIcon}
                  />
                </div>
              </Link>
            );
          }
        })}
        {/* <------------------------------------ **** map icon list END **** ------------------------------------ */}
        <div
          className={style.ekasSurveySideBarMenuSwitch}
          onClick={handleToggleSubMenu}
        >
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className={style.ekasSurveySideBarIcon}
            style={{
              transform: subMenuStatus
                ? 'rotate3d(0, 1, 0, 180deg)'
                : 'rotate3d(0, 1, 0, 360deg)',
            }}
          />
        </div>
      </div>
    </Row>
  );
};

export default SideBar;
