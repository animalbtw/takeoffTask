import * as React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../utils/routes";
import {LOGIN_ROUTE} from "../utils/constants";
import {connect} from "react-redux";

const AppRouter = ({user}) => {
  return (
    <Switch>
      {
        user.isLogin && authRoutes.map(({path, component}, index) => (
          <Route
            path={path}
            component={component}
            exact
            key={index}
          />
        ))
      }
      {
        publicRoutes.map(({path, component}, index) => (
          <Route
            path={path}
            component={component}
            exact
            key={index}
          />
        ))
      }
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(AppRouter);
