import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, Text } from "react-native"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import { TabScreenProps } from "@/navigators/TabNavigator"

interface HomeScreenProps extends TabScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen preset="scroll" safeAreaEdges={["top", "bottom"]} backgroundColor={colors.background}>
      <View>
        <Text>home</Text>
      </View>
    </Screen>
  )
})
