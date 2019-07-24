import * as React from "react"
import { observer, inject } from "mobx-react"
import { ViewStyle, View } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { RootStore } from "../../models/root-store";
import { Icon, Input, CheckBox } from "react-native-elements"
import { translate } from "../../i18n";

export interface UserDetailsScreenProps extends NavigationScreenProps<{}> {
  rootStore?: RootStore // it must be an optional because injection will occur at run-time
}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  alignContent: "center",
}

const DETAILS: ViewStyle = {
  backgroundColor: color.primary,
  alignItems: "flex-start",
}

@inject("rootStore")
@observer
export class UserDetailsScreen extends React.Component<UserDetailsScreenProps, {}> {

  private get store(): RootStore {
    return this.props.rootStore!
  }
        
  render () {
    return (
      <Screen style={ROOT} preset="scroll">
        <View>
          <Text preset="header" tx="userDetailsScreen.helloMessage" txOptions={this.store.prideUser} />
        </View>
        <Text preset="bold" tx="userDetailsScreen.basicProfile" />
        <View style={DETAILS} >
          <Input 
            placeholder={translate("userDetailsScreen.name")}
            value={this.store.prideUser.name}
            onChangeText={(text) => this.store.prideUser.setName(text)}
            leftIcon={
            <Icon
              name='home'/>
            } 
          />
          <Input 
            placeholder={translate("userDetailsScreen.address")}
            value={this.store.prideUser.address}
            onChangeText={(text) => this.store.prideUser.setAddress(text)}
            leftIcon={
            <Icon
              name='home'/>
            } 
          />
          <Input 
            placeholder={translate("userDetailsScreen.bio")}
            value={this.store.prideUser.bio}
            onChangeText={(text) => this.store.prideUser.setBio(text)}
            leftIcon={
            <Icon
              name='home'/>
            } 
          />        
          <Text preset="bold" tx="userDetailsScreen.privateInformation" />
          <Input 
            placeholder={translate("userDetailsScreen.email")}
            value={this.store.prideUser.email}
            onChangeText={(text) => this.store.prideUser.setEmail(text)}
            leftIcon={
            <Icon
              name='home'/>
            } 
          />
          <Input 
            placeholder={translate("userDetailsScreen.phoneNumber")}
            value={this.store.prideUser.phoneNumber}
            onChangeText={(text) => this.store.prideUser.setAddress(text)}
            leftIcon={
            <Icon
              name='home'/>
            } 
          />
          <Input 
            placeholder={translate("userDetailsScreen.gender")}
            value={this.store.prideUser.gender}
            onChangeText={(text) => this.store.prideUser.setGender(text)}
            leftIcon={
            <Icon
              name='home'/>
            } 
          />
          <Text preset="bold" tx="userDetailsScreen.privacySecurity" />
          <CheckBox 
            checked={this.store.prideUser.inTheCloset} 
            onPress={() => this.store.prideUser.setInTheCloset(!this.store.prideUser.inTheCloset)}
          />
          <Text preset="secondary" tx="userDetailsScreen.privacyModeInfo" />
        </View>
      </Screen>
    )
  }
}
