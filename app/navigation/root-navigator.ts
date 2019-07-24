import { createStackNavigator } from "react-navigation"
import { PrimaryNavigator } from "./primary-navigator"
import { StartPageScreen } from "../screens/start-page-screen";
import { DumpPageScreen } from "../screens/dump-page-screen";
import { UserDetailsScreen } from "../screens/userDetails-screen";

export const RootNavigator = createStackNavigator(
  {
    primaryStack: { screen: PrimaryNavigator },
    startPage: { screen: StartPageScreen },
    dumpPage: { screen: DumpPageScreen },
    userDetailsPage: { screen: UserDetailsScreen },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
    initialRouteName: "startPage",
  },
)
