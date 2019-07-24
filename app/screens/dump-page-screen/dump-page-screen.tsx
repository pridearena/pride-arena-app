import * as React from "react"
import { ViewStyle, View, ScrollView } from "react-native"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { PrideFooter, TabKeys } from "../../components/pride-footer";
import { Text } from "react-native-elements";
import { TabConfig } from "react-native-material-bottom-navigation";

export interface DumpPageScreenProps extends NavigationScreenProps<{}> {
}

export interface DumpPageScreenState {
  currentTab: TabKeys
}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1
}

export class DumpPageScreen extends React.Component<DumpPageScreenProps, DumpPageScreenState> {
  state: DumpPageScreenState = {
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
          <ScrollView style={{flex: 1}}>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
            <Text h1>AA</Text>
          </ScrollView>
          <PrideFooter activeTab={this.state.currentTab} onTabPress={this.onFooterTabPress}></PrideFooter>
        </View>
      </Screen>
    )
  }
}
