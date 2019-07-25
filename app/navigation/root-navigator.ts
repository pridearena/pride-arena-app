import { createStackNavigator } from "react-navigation"
import { StartPageScreen } from "../screens/start-page-screen";
import { HomePageScreen } from "../screens/dump-page-screen";
import { UserDetailsScreen } from "../screens/userDetails-screen";

export const RootNavigator = createStackNavigator(
  {
    startPage: { screen: StartPageScreen },
    homePage: { screen: HomePageScreen },
    userDetailsPage: { screen: UserDetailsScreen },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
    initialRouteName: "startPage",
  },
)
