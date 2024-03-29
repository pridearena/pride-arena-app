import * as React from "react"
import { View } from "react-native"
import BottomNavigation, { TabConfig, FullTab } from "react-native-material-bottom-navigation"
import { Icon, Divider } from "react-native-elements"
import { color } from "../../theme";

export enum TabKeys {
  profile = "profile",
  home = "home"
}

export interface PrideFooterProps {
  activeTab: TabKeys
  onTabPress: (newTab: TabConfig, oldTab: TabConfig) => void
}

interface TabProps extends TabConfig {
  label: string,
  iconName: string
}

function renderTab({tab, isActive}: {tab: TabProps, isActive: boolean}) {
  return (
    <FullTab
      key={tab.key}
      isActive={isActive}
      label={tab.label}
      labelStyle={{color: "black"}}
      renderIcon={() => {
        return <Icon name={tab.iconName}/>
      }}
    />
  )
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function PrideFooter(props: PrideFooterProps) {
  const tabs: TabProps[] = [
    {
      key: TabKeys.home,
      label: "Home",
      iconName: "home",
      barColor: color.palette.white
    },
    {
      key: TabKeys.profile,
      label: "Profile",
      iconName: "tag-faces",
      barColor: color.palette.white
    }
  ]

  return (
    <View>
      <Divider/>
      <BottomNavigation
        tabs={tabs}
        activeTab={props.activeTab}
        onTabPress={props.onTabPress}
        renderTab={renderTab}
      />
    </View>
  )
}
