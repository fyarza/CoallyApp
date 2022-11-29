import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text } from "react-native"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import { TabScreenProps } from "@/navigators/TabNavigator"
import Feather from "@expo/vector-icons/Feather"
import Octicons from "@expo/vector-icons/Octicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { SearchInput } from "@/components/search-input/search-input"

interface HomeScreenProps extends TabScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const [value, setValue] = useState("")

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen preset="auto" safeAreaEdges={["top", "bottom"]} backgroundColor={colors.background}>
      <View style={tw`p-6 flex-row items-center justify-between`}>
        <Text style={tw`text-3xl font-black text-black`}>¡Bienvenido!</Text>
        <Feather name="bell" size={30} color={colors.palette.secondary500} />
      </View>
      <SearchInput value={value} setValue={setValue} />
      <View style={tw`items-center`}>
        {/* <BusquedaIcon /> */}
        <Text style={tw`text-gray-500 text-base`}>Aún no has buscado ninguna oportunidad</Text>
      </View>
      <View style={tw`mt-5 px-6`}>
        <Text style={tw`text-3xl font-black text-black`}>Para Ti!</Text>
        <View style={tw`flex-row justify-between mt-5 pb-10`}>
          <View>
            <View style={tw`w-40 h-35 shadow-lg bg-white px-4 pt-4  rounded-lg `}>
              <Text style={tw`text-base text-primary-500`}>¡Necesario!</Text>
              <Text style={tw`text-lg font-black text-primary-500 mt-2`}>
                Sube tu hoja{"\n"}
                de vida
              </Text>
              <View style={tw`items-end `}>
                <Octicons name="upload" size={25} color={colors.palette.secondary500} />
              </View>
            </View>
            <View style={tw`w-40 h-45 shadow-lg bg-[#8875d1] px-4 pt-4 mt-4  rounded-lg `}>
              <View style={tw`flex-row items-center`}>
                <Feather name="alert-triangle" size={20} color="#fff" />
                <Text style={tw`text-base text-white ml-2`}>¡Importante!</Text>
              </View>
              <Text style={tw`text-lg font-black text-white mt-2`}>
                Realiza los test{"\n"}y las preguntas{"\n"}
                motivacionales
              </Text>
              <View style={tw`items-end mt-3`}>
                <Feather name="thumbs-up" size={25} color="#fff" />
              </View>
            </View>
            <View style={tw`w-40 h-26 shadow-lg bg-[#f0702f] px-4 pt-2 mt-4  rounded-lg `}>
              <Text style={tw`text-lg font-black text-white mt-2`}>
                ¡Fórmate con{"\n"}
                nosotros!
              </Text>
              <View style={tw`items-end `}>
                <FontAwesome name="laptop" size={25} color="#fff" />
              </View>
            </View>
          </View>
          <View style={tw``}>
            <View style={tw`w-40 px-4 py-3 ml-2 rounded-lg bg-[#f0702f] shadow-lg`}>
              <View
                style={tw`w-20 h-20 self-end  items-center justify-center rounded-full bg-[#fd974d]`}
              >
                <View style={tw`w-17 h-17 items-center justify-center rounded-full bg-[#f0702f]`}>
                  <Text style={tw`text-white text-lg font-black`}>25%</Text>
                </View>
              </View>
              <Text style={tw`text-white text-lg`}>
                No{"\n"}
                conocemos{"\n"}
                mucho de ti.{"\n"}
                <Text style={tw`font-black`}>
                  Completa la{"\n"}
                  información.
                </Text>
              </Text>
              <View style={tw`items-end`}>
                <FontAwesome name="angle-right" size={25} color="#fff" />
              </View>
            </View>
            <View style={tw`w-40 h-41 shadow-lg bg-white px-4 pt-4 mt-5  rounded-lg `}>
              <Text style={tw`text-base text-primary-500`}>Aplicación</Text>
              <Text style={tw`text-lg font-black text-primary-500 mt-2`}>
                ¿Cómo se{"\n"}
                usa la{"\n"}
                plataforma?
              </Text>
              <View style={tw`items-end`}>
                <Feather name="play-circle" size={25} color="#f0702f" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  )
})
