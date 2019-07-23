import { createStackNavigator } from "react-navigation"
import { PrimaryNavigator } from "./primary-navigator"
import { StartPageScreen } from "../screens/start-page-screen";

export const RootNavigator = createStackNavigator(
  {
    primaryStack: { screen: PrimaryNavigator },
    startPage: { screen: StartPageScreen },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
    initialRouteName: "startPage",
  },
)
