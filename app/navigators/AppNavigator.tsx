/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { RegisterScreen } from "@/screens/register/registerScreen"
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams, // @demo remove-current-line
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { useStores } from "../models" // @demo remove-current-line
import {
  IntroScreen,
  LoginScreen,
  PasswordCodeScreen,
  SearchScreen,
  UploadCvFormScreen,
  UploadCvScreen, // @demo remove-current-line
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import Toast from "react-native-toast-message"
import { TabParamList, TabNavigator } from "./TabNavigator"
import { IdiomasScreen } from "@/screens/idiomas/idiomasScreen"
import { HabilidadesScreen } from "@/screens/habilidades/habilidadesScreen"
import { EditPerfilScreen } from "@/screens/edit-perfil/edit-perfilScreen"
import { SettingsScreen } from "@/screens/settings/settingsScreen"
import { TestScreen } from "@/screens/test/testScreen"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Intro: undefined
  Welcome: undefined
  Login: undefined // @demo remove-current-line
  Register: undefined
  PasswordCode: undefined
  Search: undefined
  Idiomas: undefined
  Habilidades: undefined
  EditPerfil: undefined
  Settings: undefined
  Test: undefined
  UploadCv: undefined
  UploadCvForm: undefined
  Dashboard: NavigatorScreenParams<TabParamList> // @demo remove-current-line
  // 🔥 Your screens go here
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // @demo remove-block-start
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  // @demo remove-block-end
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAuthenticated ? "Dashboard" : "Intro"} // @demo remove-current-line
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Dashboard" component={TabNavigator} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Idiomas" component={IdiomasScreen} />
          <Stack.Screen name="Habilidades" component={HabilidadesScreen} />
          <Stack.Screen name="EditPerfil" component={EditPerfilScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Test" component={TestScreen} />
          <Stack.Screen name="UploadCv" component={UploadCvScreen} />
          <Stack.Screen name="UploadCvForm" component={UploadCvFormScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="PasswordCode" component={PasswordCodeScreen} />
        </>
      )}
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        {...props}
      >
        <AppStack />
      </NavigationContainer>
      <Toast position="bottom" bottomOffset={50} visibilityTime={3000} />
    </>
  )
})
