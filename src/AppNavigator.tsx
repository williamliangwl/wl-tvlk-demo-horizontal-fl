import { createStackNavigator } from "react-navigation-stack";
import DynamicHorizontalFlatList from './DynamicHorizontalFlatList';
import { routeKeys } from "./constants";
import { NavigationStackRouterConfig } from "react-navigation";
import ScrollableTabViewSample from "./ScrollableTabViewSample";
import Home from "./Home";

const options: NavigationStackRouterConfig = {
  initialRouteKey: routeKeys.ScrollableTabViewSample
}

const AppNavigator = createStackNavigator({
  [routeKeys.Home]: { screen: Home },
  [routeKeys.ScrollableTabViewSample]: {screen: ScrollableTabViewSample},
  [routeKeys.DynamicHorizontalFlatList] : {screen: DynamicHorizontalFlatList},
}, options);

export {AppNavigator};