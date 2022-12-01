import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Image, Pressable } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import Input from "@/components/input/input"
import Button from "@/components/custom-button/custom-button"
import { dlog } from "@/utils/functions"
import Feather from "@expo/vector-icons/Feather"

interface TestScreenProps extends AppStackScreenProps<"Test"> {}

export const TestScreen: FC<TestScreenProps> = observer(function TestScreen(_props) {
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
        <Text style={tw`text-lg font-black text-primary-500 text-center flex-1`}>Test</Text>
      </View>
      <View style={tw`px-4 mt-3`}>
        <Text style={tw`text-base text-gray-500 text-justify`}>
          *Con esta información serán más efectivas las oportunidades que tenemos para ofrecerte y
          serás priorizado en las ofertas de elección
        </Text>
        <Input
          autoCapitalize="none"
          placeholder="Buscar Test"
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
      </View>
      <View style={tw`px-4`}>
        <View
          style={tw`border p-2 flex-row items-center justify-between rounded-xl border-gray-200`}
        >
          <View style={tw`w-20 h-20 items-center justify-center  bg-gray-100 rounded-xl`}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1200px-Platzi.jpg",
              }}
              resizeMode="contain"
              style={tw`w-full h-full`}
            />
          </View>
          <View style={tw`flex-1 ml-4`}>
            <Text style={tw`text-sm font-bold text-black`}>Test de personalidad</Text>
            <Text style={tw`text-sm text-gray-500 mt-2`}>
              Realice este test gratuito para{"\n"}saber más sobre sí mísmo y sus{"\n"}puntos
              fuertes.
            </Text>
          </View>
        </View>
        <View
          style={tw`border p-2 flex-row items-center justify-between rounded-xl border-gray-200 mt-3`}
        >
          <View style={tw`w-20 h-20 items-center justify-center  bg-gray-100 rounded-xl`}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1200px-Platzi.jpg",
              }}
              resizeMode="contain"
              style={tw`w-full h-full`}
            />
          </View>
          <View style={tw`flex-1 ml-4`}>
            <Text style={tw`text-sm font-bold text-black`}>Test de sector</Text>
            <Text style={tw`text-sm text-gray-500 mt-2`}>
              Realice este test gratuito para{"\n"}saber más sobre sí mísmo y sus{"\n"}puntos
              fuertes.
            </Text>
          </View>
        </View>
        <View
          style={tw`border p-2 flex-row items-center justify-between rounded-xl border-gray-200 mt-3`}
        >
          <View style={tw`w-20 h-20 items-center justify-center  bg-gray-100 rounded-xl`}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1200px-Platzi.jpg",
              }}
              resizeMode="contain"
              style={tw`w-full h-full`}
            />
          </View>
          <View style={tw`flex-1 ml-4`}>
            <Text style={tw`text-sm font-bold text-black`}>Habilidades profesionales</Text>
            <Text style={tw`text-sm text-gray-500 mt-2`}>
              Realice este test gratuito para{"\n"}saber más sobre sí mísmo y sus{"\n"}puntos
              fuertes.
            </Text>
          </View>
        </View>
        <View
          style={tw`border p-2 flex-row items-center justify-between rounded-xl border-gray-200 mt-3`}
        >
          <View style={tw`w-20 h-20 items-center justify-center  bg-gray-100 rounded-xl`}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1200px-Platzi.jpg",
              }}
              resizeMode="contain"
              style={tw`w-full h-full`}
            />
          </View>
          <View style={tw`flex-1 ml-4`}>
            <Text style={tw`text-sm font-bold text-black`}>Habilidades sociales</Text>
            <Text style={tw`text-sm text-gray-500 mt-2`}>
              Realice este test gratuito para{"\n"}saber más sobre sí mísmo y sus{"\n"}puntos
              fuertes.
            </Text>
          </View>
        </View>
        <View
          style={tw`border p-2 flex-row items-center justify-between rounded-xl border-gray-200 mt-3`}
        >
          <View style={tw`w-20 h-20 items-center justify-center  bg-gray-100 rounded-xl`}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1200px-Platzi.jpg",
              }}
              resizeMode="contain"
              style={tw`w-full h-full`}
            />
          </View>
          <View style={tw`flex-1 ml-4`}>
            <Text style={tw`text-sm font-bold text-black`}>Test de lenguaje</Text>
            <Text style={tw`text-sm text-gray-500 mt-2`}>
              Realice este test gratuito para{"\n"}saber más sobre sí mísmo y sus{"\n"}puntos
              fuertes.
            </Text>
          </View>
        </View>
      </View>
      <View style={tw`mt-5 px-4`}>
        <Text style={tw`text-lg font-bold text-black`}>Preguntas motivacionales</Text>
        <Text style={tw`text-base text-gray-500 mt-5`}>
          ¿Qué te motiva aplicar a una oportunidad?
        </Text>
        <Input
          autoCapitalize="none"
          placeholder="Respuesta"
          contenStyle={tw`px-3`}
          containerStyle={tw`mt-5 w-full`}
          value={value}
          onChangeText={(e) => setValue(e)}
        />
        <Text style={tw`text-base text-gray-500 mt-2`}>¿Cuál es el trabajo de tus sueños?</Text>
        <Input
          autoCapitalize="none"
          placeholder="Respuesta"
          contenStyle={tw`px-3`}
          containerStyle={tw`mt-5 w-full`}
          value={value}
          onChangeText={(e) => setValue(e)}
        />
      </View>
      <View style={tw`px-6 mb-5`}>
        <Button variant="primary" title="Guardar" styleContainer="mt-5" />
      </View>
    </Screen>
  )
})
