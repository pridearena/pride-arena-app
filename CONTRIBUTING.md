# Machine set up #

We use [Ignite CLI](https://github.com/infinitered/ignite) for development.

To enable Ignite it is a requirement to have installed React Native CLI.
From [this page](https://facebook.github.io/react-native/docs/getting-started.html#content), select your development plataform and follow instructions for CLI instalation and mobile development configuration. Remember that iOS development, your only option is macOS.

Then, for Ignite CLI instalation, you can choose `npm` or `yarn`.

## npm

```
npm install -g ignite-cli
```

## yarn

```
yarn global add ignite-cli
```

# Generate a screen

Ignite has generators for screen. To generate a screen to start working on it, simple run:

```
ignite generate screen <screen-name>
```

Screens components will be added at `app/screens/<screen-name>`.

The command will also update `app/navigation/root-navigator.js` to include your experience as a possible route.

# Navigate to screen

In case your screen needs to navigate user to another screen, the following line does the work.

```
this.props.navigation.navigate("<screen-name-at-root-navigator")
```

Ignite already sets up property `navigation` for every screen, so always assume this property will be passed.

# Running application on Android

You must have followed everything on [Machine set up section](#machine-set-up) to enable android emulator.

I have used [Android Emulator Launcher by 343max](https://marketplace.visualstudio.com/items?itemName=343max.android-emulator-launcher), but there is also [Android iOS Emulator by Diemas Michiels](https://marketplace.visualstudio.com/items?itemName=DiemasMichiels.emulate) to launch android emulator from VSCode. But feel free to choose whichever tool works for you.

Once the emulator is launched, simply run
```
react-native run-android
```

# Working with Mobx-state-tree stores & models

## Inject Store to react component
To enable enable a React component to have access to mobx-state-tree, it has to have annotation `@inject(<store-name-here>)` its class definition. For example:

```typescript
@inject("rootStore")
export class ExampleScreen extend React.component<ExampleScreenProps, ExampleScreenState> {
  ...
}
```

## Update component whenever store updates

Normally, you also want to update your component everytime the store changes. To do this, just add `@observer` on top of `@inject`.

**Important: Inject has to be the last annotation from top to bottom**.

## Enable type assertion and easy access

Because `@injection` is a dependency injection to component object, the only way to access it is through named property `this.props["rootStore"]`. To override it, we can declare its existance at component props interface.

```typescript
export interface ExampleScreenProps extends NavigationScreenProps<{}> {
  rootStore?: RootStore // it must be an optional because injection will occur at run-time
}
```

Because it is optional, when accessing it, Typescript intellisense might complain and it will have a long access name. You can create a support function inside the component like this:

```typescript
private get store(): RootStore {
  return this.props.rootStore!
}
```

# Built-in stateless components

[React Native Elements](https://react-native-training.github.io/react-native-elements/docs/overview.html) are included on this project. Please try to work with these components before building your own.

If their components aren't powerfull enough for your needs, just create a stateless component at `app/components/<component-name>` folder.