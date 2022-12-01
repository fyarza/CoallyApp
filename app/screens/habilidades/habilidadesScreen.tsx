import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, FlatList, Pressable } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import Button from "@/components/custom-button/custom-button"
import { dlog } from "@/utils/functions"
import Input from "@/components/input/input"
import Feather from "@expo/vector-icons/Feather"

const data = [
  {
    id: 1,
    title: "Actitud Positiva",
  },
  {
    id: 2,
    title: "Responsabilidad",
  },
  {
    id: 3,
    title: "Trabajo en equipo",
  },
]
interface HabilidadesScreenProps extends AppStackScreenProps<"Habilidades"> {}

export const HabilidadesScreen: FC<HabilidadesScreenProps> = observer(function HabilidadesScreen(
  _props,
) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const { navigation } = _props
  const [value, setValue] = useState("")
  return (
    <Screen preset="auto" safeAreaEdges={["top", "bottom"]} backgroundColor={colors.background}>
      <View style={tw`p-6 flex-row items-center justify-between`}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color={colors.palette.secondary500} />
        </Pressable>
        <Text style={tw`text-lg font-black text-primary-500 text-center flex-1`}>Habilidades</Text>
      </View>
      <View style={tw`px-4 mt-3`}>
        <Text style={tw`text-base text-black font-bold`}>¿Qué características te definen más?</Text>
        <Input
          autoCapitalize="none"
          placeholder="Buscar habilidades"
          contenStyle={tw`px-3`}
          containerStyle={tw`mt-5 w-full`}
          value={value}
          onChangeText={(e) => setValue(e)}
          LeftIconComponent={<Feather name="search" color="#c4c4c4" size={20} />}
          returnKeyType="google"
          onSubmitEditing={() => {
            dlog("search")
          }}
        />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={tw`py-2 px-4 rounded-xl bg-violet-300 mr-2`}>
                <Pressable style={tw`flex-row items-center`}>
                  <Feather name="x" size={20} color="#55506e" />
                  <Text style={tw`text-sm text-violet-700 font-semibold ml-2`}>{item.title}</Text>
                </Pressable>
              </View>
            )
          }}
        />
      </View>
      <View style={tw`flex-row items-center flex-wrap mt-5 px-4`}>
        <View style={tw`bg-gray-300 py-4 rounded-full items-center justify-center px-4 mr-5 mt-5`}>
          <Text style={tw`text-gray-500 text-sm font-bold`}>Actitud positiva</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Agilidad y ejecución</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Autonomía</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Empatía</Text>
        </View>
        <View style={tw`bg-gray-300 py-4 rounded-full items-center justify-center px-4 mr-5 mt-5`}>
          <Text style={tw`text-gray-500 text-sm font-bold`}>Estratega</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Flexibilidad</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Gestión de proyectos</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Liderazgo</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Networking</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Profesionalismo</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Resilencia</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Respeto</Text>
        </View>
        <View
          style={tw`bg-white border border-gray-300 py-4 rounded-full items-center justify-center px-4 mr-3 mt-3`}
        >
          <Text style={tw`text-gray-500 text-sm font-bold`}>Confianza</Text>
        </View>
        <View style={tw`bg-gray-300 py-4 rounded-full items-center justify-center px-4 mr-5 mt-5`}>
          <Text style={tw`text-gray-500 text-sm font-bold`}>Trabajo en equipo</Text>
        </View>
      </View>
      <View style={tw`px-6 mt-5`}>
        <Button variant="primary" title="Guardar" styleContainer="mt-5" />
      </View>
    </Screen>
  )
})
