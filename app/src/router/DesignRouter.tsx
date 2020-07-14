/**
 * Author: Frank
 * Date: 2020/06/09
 */
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Row, Col } from 'antd';
import style from '../style/routerStyle/designRouter.scss';

/* <------------------------------------ **** componet import START **** ------------------------------------ */
import SideBar from '../components/routerComponents/designRouter/SideBar';
import ServerDesign from '../staticPages/ServerDesign';
import ResuableList from '../staticPages/ResuableList';
/* <------------------------------------ **** componet import END **** ------------------------------------ */
const TestRouter = () => {
  return (
    <Fragment>
      <SideBar />
      <Switch>
        <Route path="/designServey" component={ServerDesign} />
        <Route path="/resuableList" component={ResuableList} />
      </Switch>
    </Fragment>
  );
};

export default TestRouter;
