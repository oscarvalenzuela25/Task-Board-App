import { Route, Switch } from 'wouter';
import HomeRoutes from './HomeRoutes';

const Router = () => {
  return (
    <Switch>
      <HomeRoutes />

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  );
};

export default Router;
