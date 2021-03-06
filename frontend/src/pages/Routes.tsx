import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Box } from "@material-ui/core";
import { Header } from "features";
import { routes } from "constants/routes";
import { Breadcrumbs } from "components";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Box mb={2}>
        <Header />
      </Box>
      <Box mb={4}>
        <Breadcrumbs
          items={[
            { label: "Каталог", link: "/catalog" },
            // { label: "DNS", link: "/catalog" },
          ]}
        />
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(({ name, exact, path, component: Component }) => (
            <Route key={name} exact={exact} path={path}>
              <Component />
            </Route>
          ))}
          {/* <Redirect to="/catalog" /> */}
          <Route path="/" render={() => <Redirect to="/catalog" />} />
        </Switch>
      </Suspense>
    </Router>
  );
};
