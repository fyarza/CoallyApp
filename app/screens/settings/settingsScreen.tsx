import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Pressable } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Feather from "@expo/vector-icons/Feather"

interface SettingsScreenProps extends AppStackScreenProps<"Settings"> {}

export const SettingsScreen: FC<SettingsScreenProps> = observer(function SettingsScreen(_props) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const { navigation } = _props
  const [cuenta, setCuenta] = useState("")
  return (
    <Screen preset="auto" safeAreaEdges={["top", "bottom"]} backgroundColor={colors.background}>
      <View style={tw`p-6 flex-row items-center justify-between`}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color={colors.palette.secondary500} />
        </Pressable>
        <Text style={tw`text-lg font-black text-primary-500 text-center flex-1`}>
          Configuración
        </Text>
      </View>
      <View style={tw`px-4 mt-3`}>
        <Text style={tw`text-base text-black font-bold mb-5`}>Cuenta</Text>
        <View style={tw`px-4`}>
          <Pressable onPress={() => console.log("hello word")}>
            <View style={tw`flex-row items-center justify-between py-4`}>
              <Text style={tw`text-sm text-black`}>Preferencias de la cuenta</Text>
              <FontAwesome name="angle-down" size={25} color="#000000" />
            </View>
          </Pressable>
          <View style={tw`w-full h-0.3 bg-gray-300`} />
          <Pressable onPress={() => console.log("hello word")}>
            <View style={tw`flex-row items-center justify-between py-4`}>
              <Text style={tw`text-sm text-black`}>Inisio de sesión y seguridad</Text>
              <FontAwesome name="angle-down" size={25} color="#000000" />
            </View>
          </Pressable>
          <View style={tw`w-full h-0.3 bg-gray-300`} />
          <Pressable onPress={() => console.log("hello word")}>
            <View style={tw`flex-row items-center justify-between py-4`}>
              <Text style={tw`text-sm text-black`}>Visibilidad</Text>
              <FontAwesome name="angle-down" size={25} color="#000000" />
            </View>
          </Pressable>
          <View style={tw`w-full h-0.3 bg-gray-300`} />
          <Pressable onPress={() => console.log("hello word")}>
            <View style={tw`flex-row items-center justify-between py-4`}>
              <Text style={tw`text-sm text-black`}>Comunicaciones</Text>
              <FontAwesome name="angle-down" size={25} color="#000000" />
            </View>
          </Pressable>
          <View style={tw`w-full h-0.3 bg-gray-300`} />
        </View>
      </View>
      <View style={tw`px-4 mt-10`}>
        <Text style={tw`text-base text-black font-bold mb-5`}>Sobre Coally</Text>
        <View style={tw`px-4`}>
          <Pressable onPress={() => console.log("hello word")}>
            <View style={tw`flex-row items-center justify-between py-4`}>
              <Text style={tw`text-sm text-black`}>Contáctenos</Text>
              <FontAwesome name="angle-down" size={25} color="#000000" />
            </View>
          </Pressable>
          <View style={tw`w-full h-0.3 bg-gray-300`} />
          <Pressable onPress={() => console.log("hello word")}>
            <View style={tw`flex-row items-center justify-between py-4`}>
              <Text style={tw`text-sm text-black`}>Preguntas frecuentes</Text>
              <FontAwesome name="angle-down" size={25} color="#000000" />
            </View>
          </Pressable>
          <View style={tw`w-full h-0.3 bg-gray-300`} />
          <Pressable onPress={() => console.log("hello word")}>
            <View style={tw`flex-row items-center justify-between py-4`}>
              <Text style={tw`text-sm text-black`}>Política de privacidad</Text>
              <FontAwesome name="angle-down" size={25} color="#000000" />
            </View>
          </Pressable>
          <View style={tw`w-full h-0.3 bg-gray-300`} />
          <Pressable onPress={() => console.log("hello word")}>
            <View style={tw`flex-row items-center justify-between py-4`}>
              <Text style={tw`text-sm text-black`}>Términos y condiciones</Text>
              <FontAwesome name="angle-down" size={25} color="#000000" />
            </View>
          </Pressable>
          <View style={tw`w-full h-0.3 bg-gray-300`} />
          <Pressable onPress={() => console.log("hello word")}>
            <View style={tw`flex-row items-center justify-between py-4`}>
              <Text style={tw`text-sm text-black`}>Soporte Coally</Text>
              <FontAwesome name="angle-down" size={25} color="#000000" />
            </View>
          </Pressable>
          <View style={tw`w-full h-0.3 bg-gray-300`} />
        </View>
      </View>
    </Screen>
  )
})
