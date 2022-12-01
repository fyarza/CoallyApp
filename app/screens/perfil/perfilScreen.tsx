import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Pressable, ImageBackground } from "react-native"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import { TabScreenProps } from "@/navigators/TabNavigator"
import Feather from "@expo/vector-icons/Feather"
import Octicons from "@expo/vector-icons/Octicons"
import Ionicons from "@expo/vector-icons/Ionicons"

interface PerfilScreenProps extends TabScreenProps<"Perfil"> {}

export const PerfilScreen: FC<PerfilScreenProps> = observer(function PerfilScreen(_props) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const { navigation } = _props
  const [tab, setTab] = useState(1)
  return (
    <Screen
      preset="auto"
      safeAreaEdges={["bottom", "top"]}
      backgroundColor={colors.background}
      statusBarStyle="dark"
    >
      <View style={tw`h-40 rounded-b-[55px] bg-primary-500 w-full self-center`}>
        <View style={tw`flex-row items-center justify-between px-8 mt-15`}>
          <Pressable onPress={() => navigation.navigate("EditPerfil")}>
            <Octicons name="pencil" color="#ffff" size={20} />
          </Pressable>
          <Text style={tw`mr-2 text-lg font-black text-white`}>Perfil</Text>
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Feather name="settings" color="#ffff" size={20} />
          </Pressable>
        </View>

        <View style={tw`items-center relative`}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            }}
            resizeMode="cover"
            style={tw`absolute p-1 overflow-hidden rounded-full shadow-md w-25 h-25 top-5 left-37`}
          />
          <View
            style={tw`border-2 border-orange-500 w-27 h-27 rounded-full absolute top-4 left-36`}
          />
        </View>
      </View>
      <View style={tw`mt-15 px-6`}>
        <Text style={tw`text-base font-black text-center text-black`}>Camila García</Text>
        <Text style={tw`text-base text-gray-500 text-center font-bold`}>
          Administrador de Empresas
        </Text>
        <Text style={tw`text-base text-gray-500 text-justify mt-8`}>
          Administrador de Empresas titulado de la Universidad de Cartagena, con énfasis en Negocios
          Internacionales. Con conocimientos en marketing, ventas, finanzas y costos. Poseo
          facilidad para trabajar en diferentes equipos y adquiero los retos con competencia
        </Text>
        <View style={tw`flex-row items-center justify-between mt-10`}>
          <Text style={tw`text-black text-2xl font-black`}>Idiomas</Text>
          <Pressable onPress={() => navigation.navigate("Idiomas")}>
            <Text style={tw`text-gray-500 text-base font-bold`}>Agregar</Text>
          </Pressable>
        </View>
        <View style={tw`flex-row items-center mt-5`}>
          <View style={tw`shadow-sm w-12 h-12 rounded-full overflow-hidden mr-2`}>
            <ImageBackground
              source={{
                uri: "https://i.pinimg.com/originals/ec/85/70/ec8570cb9447aad9e208faa059707933.gif",
              }}
              resizeMode="cover"
              style={tw`w-full h-full`}
            />
          </View>
          <View style={tw`shadow-sm w-12 h-12 rounded-full overflow-hidden mr-2`}>
            <ImageBackground
              source={{
                uri: "https://i.pinimg.com/originals/a1/cd/5c/a1cd5cd5968acba7749062391adc528c.png",
              }}
              resizeMode="cover"
              style={tw`w-full h-full`}
            />
          </View>
          <View style={tw`shadow-sm w-12 h-12 rounded-full overflow-hidden mr-2`}>
            <ImageBackground
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/270px-Flag_of_France.svg.png",
              }}
              resizeMode="cover"
              style={tw`w-full h-full`}
            />
          </View>
        </View>
        <View style={tw`flex-row items-center justify-between mt-10`}>
          <Text style={tw`text-black text-2xl font-black`}>Habilidades</Text>
          <Pressable onPress={() => navigation.navigate("Habilidades")}>
            <Text style={tw`text-gray-500 text-base font-bold`}>Agregar</Text>
          </Pressable>
        </View>
        <View style={tw`flex-row items-center flex-wrap`}>
          <View
            style={tw`bg-primary-500 items-center justify-center rounded-full px-4 py-3 mr-5 mt-5`}
          >
            <Text style={tw`text-sm text-white font-bold`}>Actitud positiva</Text>
          </View>
          <View style={tw`bg-orange-500 items-center justify-center rounded-full px-4 py-3 mr-5`}>
            <Text style={tw`text-sm text-white font-bold`}>Actitud positiva</Text>
          </View>
          <View style={tw`bg-orange-700 items-center justify-center rounded-full px-4 py-3 mr-5`}>
            <Text style={tw`text-sm text-white font-bold`}>Estrategia</Text>
          </View>
          <View style={tw`bg-purple-700 items-center justify-center rounded-full px-4 py-3 mr-5`}>
            <Text style={tw`text-sm text-white font-bold`}>Trabajo en equipo</Text>
          </View>
        </View>
        <View style={tw`flex-row items-center justify-between mt-10`}>
          <Pressable
            style={tw`${tab === 1 ? "border-b border-primary-500" : ""}`}
            onPress={() => setTab(1)}
          >
            <Text
              style={tw`text-base ${tab === 1 ? "text-primary-500 font-black" : "text-gray-300"}`}
            >
              Educación
            </Text>
          </Pressable>
          <Pressable
            style={tw` ${tab === 2 ? "border-b border-primary-500" : ""} ml-10`}
            onPress={() => setTab(2)}
          >
            <Text
              style={tw`text-base ${tab === 2 ? "text-primary-500 font-black" : "text-gray-300"}`}
            >
              Experiencia
            </Text>
          </Pressable>
          <View style={tw`flex-1`} />
        </View>
        <View style={tw`h-0.3 w-full bg-gray-300`} />
        <View style={tw``}>
          {tab === 1 ? (
            <View style={tw`mt-10`}>
              <Text style={tw`text-base font-bold text-gray-500 mb-5`}>
                Ingeniero en sistemas y telecomunicaciones
              </Text>
              <Text style={tw`text-base text-gray-500 text-justify`}>
                Administrador de Empresas titulado de la Universidad de Cartagena, con énfasis en
                Negocios Internacionales. Con Conocimientos en marketing, ventas, finanzas y costos.
              </Text>
            </View>
          ) : (
            <View>
              <View style={tw`py-5 px-2`}>
                <Text style={tw`text-base font-bold text-primary-500`}>Company 1</Text>
                <Text style={tw`text-base text-gray-500`}>
                  Ingeniero de sistemas y telecomunicaciones
                </Text>
                <Text style={tw`text-base text-gray-500`}>Fecha 0-0</Text>
              </View>
              <View style={tw`h-0.3 w-full bg-gray-300`} />
              <View style={tw`py-5 px-2`}>
                <Text style={tw`text-base font-bold text-primary-500`}>Company 2</Text>
                <Text style={tw`text-base text-gray-500`}>
                  Cargo 1: Ingeniero de sistemas y telecomunicaciones
                </Text>
                <Text style={tw`text-base text-gray-500 mt-3`}>
                  Cargo 2: Ingeniero de sistemas y telecomunicaciones
                </Text>
                <Text style={tw`text-base text-gray-500`}>Fecha 0-0</Text>
              </View>
              <View style={tw`h-0.3 w-full bg-gray-300`} />
              <View style={tw`py-5 px-2`}>
                <Text style={tw`text-base font-bold text-primary-500`}>Company 3</Text>
                <Text style={tw`text-base text-gray-500`}>
                  Ingeniero de sistemas y telecomunicaciones
                </Text>
                <Text style={tw`text-base text-gray-500`}>Fecha 0-0</Text>
              </View>
              <View style={tw`h-0.3 w-full bg-gray-300`} />
            </View>
          )}
        </View>
        <View style={tw`mt-10 bg-white shadow-xl mb-10 p-4`}>
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-xl font-black text-black mr-2`}>Test</Text>
              <Ionicons name="warning-outline" color="#c4c4c4" size={20} />
            </View>
            <Feather name="arrow-right" color="#000" size={20} />
          </View>
          <View style={tw`flex-row items-center justify-between mt-5`}>
            <Pressable onPress={() => console.log("Test")}>
              <View
                style={tw`bg-violet-300 py-4 w-35  items-center justify-center rounded-full shadow-sm`}
              >
                <Text style={tw`text-white text-base font-bold`}>Personalidad</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => console.log("hello word")}>
              <View
                style={tw`bg-orange-300 py-4 w-35  items-center justify-center rounded-full shadow-sm`}
              >
                <Text style={tw`text-white text-base font-bold`}>Sector</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Screen>
  )
})
