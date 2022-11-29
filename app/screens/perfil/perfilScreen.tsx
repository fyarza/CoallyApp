import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, Text } from "react-native"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import { TabScreenProps } from "@/navigators/TabNavigator"

interface PerfilScreenProps extends TabScreenProps<"Perfil"> {}

export const PerfilScreen: FC<PerfilScreenProps> = observer(function PerfilScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen preset="scroll" safeAreaEdges={["top", "bottom"]} backgroundColor={colors.background}>
      <View>
        <Text>perfil</Text>
      </View>
    </Screen>
  )
})
