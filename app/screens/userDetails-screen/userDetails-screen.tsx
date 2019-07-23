import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"

export class Person {
  public firstName: string;
  public lastName: string;
  constructor(public _firstName: string, _lastName: string){
    this.firstName = _firstName;
    this.lastName = _lastName;
  }
}

export interface UserDetailsScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

// @inject("mobxstuff")
@observer
export class UserDetailsScreen extends React.Component<UserDetailsScreenProps, {}> {
  person: Person;
  render () {
    this.person = new Person("Oren", "Shir");
    const p = this.person;
    
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" tx="userDetailsScreen.header" />
        <Text preset="default" tx="userDetailsScreen.helloMessage" txOptions={p} />
      </Screen>
    )
  }
}
