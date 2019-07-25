import * as React from "react"
import { observer, inject } from "mobx-react"
import { ViewStyle, View } from "react-native"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { GoogleSignin, GoogleSigninButton, statusCodes } from "react-native-google-signin"
import { RootStore } from "../../models/root-store";

export interface StartPageScreenProps extends NavigationScreenProps<{}> {
  rootStore?: RootStore
}

export interface StartPageScreenState {
  isUserLoggedIn: boolean
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.mayaBlue
}

@inject("rootStore")
@observer
export class StartPageScreen extends React.Component<StartPageScreenProps, StartPageScreenState> {
  state: StartPageScreenState = {
    isUserLoggedIn: false
  }
  
  private get store(): RootStore {
    return this.props.rootStore!
  }
  
  componentDidMount() {
    if (!this.store.prideUser) {
      GoogleSignin.configure()
    } else {
      this.props.navigation.navigate("homePage")
    }
  }

  render () {
    return (
      <Screen style={ROOT} preset="fixed">
        <View style={{ height: "100%" }}>
          <GoogleSigninButton
            style={{ width: 230, height: 48, left: "20%", top: "50%" }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
            disabled={this.state.isUserLoggedIn}
          />
        </View>
      </Screen>
    )
  }

  private signIn = async() => {
    try {
      await GoogleSignin.hasPlayServices()
      const user = (await GoogleSignin.signIn()).user
      const tokens = await GoogleSignin.getTokens()
      const prideUser = this.store.setPrideUser({
        email: user.email,
        id: user.id,
        inTheClosed: false,
        name: user.name,
        photo: user.photo,
        score: 0,
        prideTrust: 0,
        bio: ""
      });
      prideUser.setAccessToken(tokens.accessToken);
    } catch (error) {
      console.log(error)
      switch (error.code) {
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // If google service is not available, whatever
          break
        case statusCodes.SIGN_IN_CANCELLED:
          // User cancelled login, nothing to do
          break
        case statusCodes.SIGN_IN_REQUIRED:
          // Called getTokens wtihout signing in
          break
      }
    } finally {
      if (this.store.prideUser) {
        this.setState({isUserLoggedIn: true})
        this.props.navigation.navigate("homePage")
      }
    }
  }
}
