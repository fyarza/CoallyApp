import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, TouchableNativeFeedback, Pressable } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import Button from "@/components/custom-button/custom-button"
import Feather from "@expo/vector-icons/Feather"
import AntDesign from "@expo/vector-icons/AntDesign"

interface IdiomasScreenProps extends AppStackScreenProps<"Idiomas"> {}

export const IdiomasScreen: FC<IdiomasScreenProps> = observer(function IdiomasScreen(_props) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const { navigation } = _props
  const [check, setCheck] = useState(false)
  return (
    <Screen preset="auto" safeAreaEdges={["top", "bottom"]} backgroundColor={colors.background}>
      <View style={tw`p-6 flex-row items-center justify-between`}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color={colors.palette.secondary500} />
        </Pressable>
        <Text style={tw`text-lg font-black text-primary-500 text-center flex-1`}>Idiomas</Text>
      </View>
      <View style={tw`px-4 mt-3`}>
        <Text style={tw`text-base text-black font-bold`}>¿Qué idioma sabes?</Text>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Portugués</Text>
        </View>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Italiano</Text>
        </View>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Alemán</Text>
        </View>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Ruso</Text>
        </View>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Chino</Text>
        </View>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Japonés</Text>
        </View>
      </View>
      <View style={tw`px-4 mt-10`}>
        <Text style={tw`text-base text-black font-bold`}>¿Cuál es tu nivel?</Text>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Basico</Text>
        </View>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Limitado</Text>
        </View>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Profesional básico</Text>
        </View>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Profesional fluido</Text>
        </View>
        <View style={tw`bg-white shadow-sm py-4 px-3 flex-row items-center mt-2 rounded-lg`}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#fff", true)}
            onPress={() => setCheck(!check)}
          >
            {check ? (
              <AntDesign name="checkcircle" size={20} color={colors.palette.primary500} />
            ) : (
              <View style={tw`w-5 h-5 border border-gray-300 rounded-full`} />
            )}
          </TouchableNativeFeedback>
          <Text style={tw`ml-4 text-base text-gray-500`}>Nativo o biligüe</Text>
        </View>
      </View>

      <View style={tw`px-6 my-5`}>
        <Button variant="primary" title="Guardar" styleContainer="mt-5" />
      </View>
    </Screen>
  )
})
