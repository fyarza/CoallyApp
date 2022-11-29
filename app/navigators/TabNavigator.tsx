import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import Feather from "@expo/vector-icons/Feather"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import EvilIcons from "@expo/vector-icons/EvilIcons"
import { colors } from "@/theme"
import { spacing } from "@/theme/spacing"
import { HomeScreen } from "@/screens/home/homeScreen"
import { OportunityScreen } from "@/screens/oportunity/oportunityScreen"
import { TrainingScreen } from "@/screens/training/trainingScreen"
import { PerfilScreen } from "@/screens/perfil/perfilScreen"

export type TabParamList = {
  Home: undefined
  Oportunity: undefined
  Training: undefined
  Perfil: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<TabParamList>()

export function TabNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.palette.secondary500,
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather name="home" color={focused ? colors.palette.secondary500 : "gray"} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Oportunity"
        component={OportunityScreen}
        options={{
          tabBarLabel: "Oportunidad",
          tabBarIcon: ({ focused }) => (
            <Feather name="book" color={focused ? colors.palette.secondary500 : "gray"} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={TrainingScreen}
        options={{
          tabBarLabel: "Formación",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="laptop"
              color={focused ? colors.palette.secondary500 : "gray"}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused }) => (
            <EvilIcons
              name="user"
              color={focused ? colors.palette.secondary500 : "gray"}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  lineHeight: 16,
  flex: 1,
}
