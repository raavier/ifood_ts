import React from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom";
import InitialScreen from "../containers/InitialScreen";
import { LoginScreen } from "../containers/LoginScreen";
import RestaurantDetails from "../containers/RestaurantDetails";
import { RestaurantFeed } from "../containers/restaurantFeed";


export const routes: Record<string, string> = {
    initialScreen: "/",
    loginScreen: "/login",
    restaurantFeed: "/feed",
    restaurantDetail:"/restaurant"
}


function Router(): JSX.Element {
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path={routes.initialScreen} component={InitialScreen} />
          <Route exact path={routes.loginScreen} component={LoginScreen} />
          <Route exact path={routes.restaurantFeed} component={RestaurantFeed} />
          <Route exact path={routes.restaurantDetail} component={RestaurantDetails} />
        </Switch>
      </BrowserRouter>
    );
  }

  export default Router;
