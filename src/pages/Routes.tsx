import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Box } from "@material-ui/core";
import { Header } from "features";
import { routes } from "constants/routes";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Box mb={2}>
        <Header />
      </Box>
      <Switch>
        {routes.map(({ name, exact, path, component: Component }) => (
          <Route key={name} exact={exact} path={path}>
            <Component />
          </Route>
        ))}
        <Route path="/" render={() => <Redirect to="/catalog"/>}/>
      </Switch>
    </Router>
  );
};
