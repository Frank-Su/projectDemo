/**
 * Author: Frank
 * Date: 2020/06/09
 */
import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import style from '../../style/componentStyle/routerComponentStyle/surveyHeader.scss';

const SurveyHeader = () => {
  return (
    <Row className={style.ekasSurveyHeaderWrapper}>
      <Col lg={11}>
        <Link to="/">
          <div className={style.ekasSurveyHeaderItem}>Overview</div>
        </Link>
        <Link to="/designServey">
          <div className={style.ekasSurveyHeaderItem}>Design</div>
        </Link>
        <div className={style.ekasSurveyHeaderItem}>Deployment</div>
        <div className={style.ekasSurveyHeaderItem}>Permissions</div>
      </Col>

      <Col lg={13} className={style.ekasSurveyHeaderSetting}>
        <div className={style.ekasSurveyHeaderSettingItem}>
          EXPLORT SURVEY DEFINATION
        </div>
        <div className={style.ekasSurveyHeaderSettingItem}>DUPLICATE</div>
        <div className={style.ekasSurveyHeaderSettingItemDelete}>DELETE</div>
        <div className={style.ekasSurveyHeaderSettingItemDesign}>DESIGN</div>
      </Col>
    </Row>
  );
};

export default SurveyHeader;
