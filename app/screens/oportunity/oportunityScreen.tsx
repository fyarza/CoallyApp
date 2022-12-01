import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Image, ImageBackground, Pressable } from "react-native"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import { TabScreenProps } from "@/navigators/TabNavigator"
import Feather from "@expo/vector-icons/Feather"
import Ionicons from "@expo/vector-icons/Ionicons"
import Input from "@/components/input/input"
import { dlog } from "@/utils/functions"
import SearchIcon from "@/icons/SearchIcon"
import FilterIcon from "@/icons/FilterIcon"
interface OportunityScreenProps extends TabScreenProps<"Oportunity"> {}

export const OportunityScreen: FC<OportunityScreenProps> = observer(function OportunityScreen(
  _props,
) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const { navigation } = _props
  const [tab, setTab] = useState(1)
  const [value, setValue] = useState("")

  return (
    <Screen preset="scroll" safeAreaEdges={["top", "bottom"]} backgroundColor={colors.background}>
      <View style={tw`h-40 rounded-b-[55px] bg-primary-500 w-full self-center`}>
        <View style={tw`p-6 flex-row items-center justify-between`}>
          <Text style={tw`text-lg font-black text-white text-center flex-1`}>Oportunidades</Text>
        </View>

        <View style={tw`items-center relative`}>
          <View style={tw`flex-row items-center absolute top-12`}>
            <View
              style={tw`bg-primary-500 w-25 h-25 rounded-xl  items-center justify-center mr-2 shadow-lg`}
            >
              <Text style={tw`text-4xl font-black text-secondary-500`}>2</Text>
              <Text style={tw`text-base font-bold text-white`}>Total</Text>
            </View>
            <View
              style={tw`bg-white w-25 h-25 rounded-xl  items-center justify-center mr-2 shadow-lg`}
            >
              <Text style={tw`text-4xl font-black text-black`}>0</Text>
              <Text style={tw`text-base font-bold text-primary-500`}>Iniciados</Text>
            </View>
            <View style={tw`bg-white w-25 h-25 rounded-xl  items-center justify-center shadow-lg`}>
              <Text style={tw`text-4xl font-black text-black`}>2</Text>
              <Text style={tw`text-base font-bold text-primary-500`}>Finalizados</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`mt-25 px-6`}>
        <View style={tw`flex-row items-center justify-between`}>
          <Pressable
            style={tw`w-30 ${tab === 1 ? "border-b border-primary-500" : ""}`}
            onPress={() => setTab(1)}
          >
            <Text
              style={tw`text-base text-center ${
                tab === 1 ? "text-primary-500 font-black" : "text-gray-300"
              }`}
            >
              En espera
            </Text>
          </Pressable>
          <Pressable
            style={tw`w-30 ${tab === 2 ? "border-b border-primary-500" : ""} `}
            onPress={() => setTab(2)}
          >
            <Text
              style={tw`text-base text-center ${
                tab === 2 ? "text-primary-500 font-black" : "text-gray-300"
              }`}
            >
              Iniciadas
            </Text>
          </Pressable>
          <Pressable
            style={tw`w-30 ${tab === 3 ? "border-b border-primary-500" : ""}`}
            onPress={() => setTab(3)}
          >
            <Text
              style={tw`text-base text-center ${
                tab === 3 ? "text-primary-500 font-black" : "text-gray-300"
              }`}
            >
              Finalizadas
            </Text>
          </Pressable>
          <View style={tw`flex-1`} />
        </View>
        <View style={tw`h-0.3 w-full bg-gray-300`} />
        <View style={tw`mb-5`}>
          {tab === 1 && (
            <View style={tw`mt-10`}>
              <View
                style={tw`flex-row items-center justify-between rounded-xl shadow-lg bg-white overflow-hidden`}
              >
                <ImageBackground
                  source={{
                    uri: "data:image/jpeg;base64,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",
                  }}
                  resizeMode="cover"
                  style={tw`w-25 h-25`}
                />
                <View style={tw`flex-1 ml-5 py-2 `}>
                  <Text style={tw`text-primary-500 font-bold text-sm`}>
                    Oportunidad Key Account
                  </Text>
                  <Text style={tw`text-primary-500 text-sm font-bold`}>Manager</Text>
                  <Text style={tw`text-gray-500 text-sm`}>Nombrede la empresa</Text>
                  <Text style={tw`text-sm font-bold text-yellow-500`}>En espera de entrevista</Text>
                </View>
              </View>
              <View
                style={tw`flex-row items-center justify-between rounded-xl shadow-lg bg-white overflow-hidden mt-5`}
              >
                <Image
                  source={{
                    uri: "https://blog.architizer.com/wp-content/uploads/Lenovo_Yoga_Hero.jpg",
                  }}
                  resizeMode="cover"
                  style={tw`w-25 h-25`}
                />
                <View style={tw`flex-1 ml-5 py-2 `}>
                  <Text style={tw`text-primary-500 font-bold text-sm`}>
                    Oportunidad Key Account
                  </Text>
                  <Text style={tw`text-primary-500 text-sm font-bold`}>Manager</Text>
                  <Text style={tw`text-gray-500 text-sm`}>Nombrede la empresa</Text>
                  <Text style={tw`text-sm font-bold text-yellow-500`}>En espera de entrevista</Text>
                </View>
              </View>
            </View>
          )}
          {tab === 2 && (
            <View style={tw`mt-10`}>
              <View
                style={tw`flex-row items-center justify-between rounded-xl shadow-lg bg-white overflow-hidden`}
              >
                <ImageBackground
                  source={{
                    uri: "data:image/jpeg;base64,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",
                  }}
                  resizeMode="cover"
                  style={tw`w-25 h-25`}
                />
                <View style={tw`flex-1 ml-5 py-2 `}>
                  <Text style={tw`text-primary-500 font-bold text-sm`}>
                    Oportunidad Key Account
                  </Text>
                  <Text style={tw`text-primary-500 text-sm font-bold`}>Manager</Text>
                  <Text style={tw`text-gray-500 text-sm`}>Nombrede la empresa</Text>
                  <Text style={tw`text-sm font-bold text-orange-500`}>Continuar...</Text>
                </View>
              </View>
              <View
                style={tw`flex-row items-center justify-between rounded-xl shadow-lg bg-white overflow-hidden mt-5`}
              >
                <Image
                  source={{
                    uri: "https://blog.architizer.com/wp-content/uploads/Lenovo_Yoga_Hero.jpg",
                  }}
                  resizeMode="cover"
                  style={tw`w-25 h-25`}
                />
                <View style={tw`flex-1 ml-5 py-2 `}>
                  <Text style={tw`text-primary-500 font-bold text-sm`}>
                    Oportunidad Key Account
                  </Text>
                  <Text style={tw`text-primary-500 text-sm font-bold`}>Manager</Text>
                  <Text style={tw`text-gray-500 text-sm`}>Nombrede la empresa</Text>
                  <Text style={tw`text-sm font-bold text-orange-500`}>Continuar...</Text>
                </View>
              </View>
            </View>
          )}
          {tab === 3 && (
            <View style={tw`mt-10`}>
              <View
                style={tw`flex-row items-center justify-between rounded-xl shadow-lg bg-white overflow-hidden`}
              >
                <ImageBackground
                  source={{
                    uri: "data:image/jpeg;base64,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",
                  }}
                  resizeMode="cover"
                  style={tw`w-25 h-25`}
                />
                <View style={tw`flex-1 ml-5 py-2 `}>
                  <Text style={tw`text-primary-500 font-bold text-sm`}>
                    Oportunidad Key Account
                  </Text>
                  <Text style={tw`text-primary-500 text-sm font-bold`}>Manager</Text>
                  <Text style={tw`text-gray-500 text-sm`}>Nombrede la empresa</Text>
                  <Text style={tw`text-sm font-bold text-green-500`}>Conpletada</Text>
                </View>
              </View>
              <View
                style={tw`flex-row items-center justify-between rounded-xl shadow-lg bg-white overflow-hidden mt-5`}
              >
                <Image
                  source={{
                    uri: "https://blog.architizer.com/wp-content/uploads/Lenovo_Yoga_Hero.jpg",
                  }}
                  resizeMode="cover"
                  style={tw`w-25 h-25`}
                />
                <View style={tw`flex-1 ml-5 py-2 `}>
                  <Text style={tw`text-primary-500 font-bold text-sm`}>
                    Oportunidad Key Account
                  </Text>
                  <Text style={tw`text-primary-500 text-sm font-bold`}>Manager</Text>
                  <Text style={tw`text-gray-500 text-sm`}>Nombrede la empresa</Text>
                  <Text style={tw`text-sm font-bold text-green-500`}>Completada</Text>
                </View>
              </View>
            </View>
          )}
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate("Search")}>
            <View style={tw`flex-row self-center items-center my-4 `}>
              <View
                style={tw`h-10 px-2 rounded-lg border border-[#c5c5c5] w-[85%] flex-row items-center justify-between`}
              >
                <SearchIcon />
                <Text style={tw`text-base text-[#c5c5c5] flex-1 ml-2`}>Buscar oportunidades</Text>
              </View>
              <View
                style={tw`h-10 ml-2 w-10 rounded-lg  border border-[#c5c5c5] items-center justify-center`}
              >
                <FilterIcon />
              </View>
            </View>
          </Pressable>
          <View style={tw`flex-row items-center mt-1`}>
            <Text style={tw`text-sm text-gray-500`}>Resultados:</Text>
            <Text style={tw`text-sm text-black ml-1`}>050</Text>
          </View>
          <View>
            <View style={tw`flex-row items-center justify-between my-5`}>
              <View style={tw`border border-gray-200 overflow-hidden w-15 h-15 rounded-xl`}>
                <Image
                  source={{
                    uri: "https://concepto.de/wp-content/uploads/2020/02/valle-cabuerniga-carmona-cantabria-espan%CC%83a-e1582219640252.jpg",
                  }}
                  resizeMode="contain"
                  style={tw`w-20 h-20`}
                />
              </View>
              <View style={tw`flex-1  ml-4`}>
                <Text style={tw`text-black font-bold text-sm`}>Key Account Manager</Text>
                <Text style={tw`text-blue-500 font-bold text-sm`}>$ 6.500.000</Text>
                <Text style={tw`text-gray-500 text-sm`}>Hace 1 hora</Text>
              </View>
            </View>
            <View style={tw`h-0.3 w-full bg-gray-300`} />
            <View style={tw`flex-row items-center justify-between my-5`}>
              <View style={tw`border border-gray-200 overflow-hidden w-15 h-15 rounded-xl`}>
                <Image
                  source={{
                    uri: "https://concepto.de/wp-content/uploads/2020/02/valle-cabuerniga-carmona-cantabria-espan%CC%83a-e1582219640252.jpg",
                  }}
                  resizeMode="contain"
                  style={tw`w-20 h-20`}
                />
              </View>
              <View style={tw`flex-1  ml-4`}>
                <Text style={tw`text-black font-bold text-sm`}>Key Account Manager</Text>
                <Text style={tw`text-blue-500 font-bold text-sm`}>$ 6.500.000</Text>
                <Text style={tw`text-gray-500 text-sm`}>Hace 1 hora</Text>
              </View>
            </View>
            <View style={tw`h-0.3 w-full bg-gray-300`} />
            <Text style={tw`text-base text-gray-500 my-5 text-center`}>Ver más</Text>
          </View>
        </View>
      </View>
    </Screen>
  )
})
