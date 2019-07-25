import * as React from "react"
import { ViewStyle, View } from "react-native"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { PrideFooter, TabKeys } from "../../components/pride-footer";
import { TabConfig } from "react-native-material-bottom-navigation";
import { ScrollEventList, EventType } from "../../components/scroll-event-list";
import { Divider } from "react-native-elements";

export interface HomePageScreenProps extends NavigationScreenProps<{}> {
}

export interface HomePageScreenState {
  currentTab: TabKeys
}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1
}

export class HomePageScreen extends React.Component<HomePageScreenProps, HomePageScreenState> {
  state: HomePageScreenState = {
    currentTab: TabKeys.home
  }

  private onFooterTabPress = (currentTab: TabConfig, oldTab: TabConfig) => {
    switch (currentTab.key) {
      case TabKeys.home:
        this.setState({currentTab: TabKeys.home})
        break
      case TabKeys.profile:
        this.setState({currentTab: TabKeys.profile})
        break
      default:
        break
    }
  }

  render () {
    return (
      <Screen style={ROOT} preset="fixed">
        <View style={{flex: 1}}>
          <ScrollEventList
            style={{flex: 1}}
            title={"Events attending"}
            events={[
              {
                title: "Basketball match for Tamine",
                date: "Sat, July 29th",
                hostName: "Tamine Mokdissi",
                neighborhood: "Next to tamine's house",
                type: EventType.basketball
              },
              {
                title: "Basketball match for Tamine",
                date: "Sat, July 29th",
                hostName: "Tamine Mokdissi",
                neighborhood: "Next to tamine's house",
                type: EventType.football
              },
              {
                title: "Basketball match for Tamine",
                date: "Sat, July 29th",
                hostName: "Tamine Mokdissi",
                neighborhood: "Next to tamine's house",
                type: EventType.basketball
              },
            ]}/>
          <Divider/>
          <ScrollEventList
            style={{flex: 1.5}}
            title={"Upcoming events"}
            events={[
              {
                title: "Basketball match for Tamine",
                date: "Sat, July 29th",
                hostName: "Tamine Mokdissi",
                neighborhood: "Next to tamine's house",
                type: EventType.basketball
              },
              {
                title: "Basketball match for Tamine",
                date: "Sat, July 29th",
                hostName: "Tamine Mokdissi",
                neighborhood: "Next to tamine's house",
                type: EventType.football
              },
              {
                title: "Basketball match for Tamine",
                date: "Sat, July 29th",
                hostName: "Tamine Mokdissi",
                neighborhood: "Next to tamine's house",
                type: EventType.basketball
              },
            ]}/>
          </View>
        <PrideFooter activeTab={this.state.currentTab} onTabPress={this.onFooterTabPress}></PrideFooter>
      </Screen>
    )
  }
}
