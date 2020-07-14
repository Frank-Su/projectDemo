/**
 * Author: Frank
 * Date: 2020/06/09
 */
import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    // HashRouter,
} from "react-router-dom";

/* <------------------------------------ **** component import START **** ------------------------------------ */
import OverView from "../staticPages/OverView";
import SurveyHeader from "../components/routerComponents/SurveyHeader";
/* <------------------------------------ **** component import END **** ------------------------------------ */

/* <------------------------------------ **** router import START **** ------------------------------------ */
import DesignRouter from "./DesignRouter";
/* <------------------------------------ **** router import END **** ------------------------------------ */

import Test from "./test";
const SurveyDesignRouter = () => {
    return (
        <Router>
            <Test></Test>

            <SurveyHeader />
            <Switch>
                <Route path="/" exact component={OverView} />
                <DesignRouter />
            </Switch>
        </Router>
    );
};

export default SurveyDesignRouter;
