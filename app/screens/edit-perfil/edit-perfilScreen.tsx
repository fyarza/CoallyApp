/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, TextInput, Pressable, ImageBackground } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import Input from "@/components/input/input"
import AntDesign from "@expo/vector-icons/AntDesign"
import Feather from "@expo/vector-icons/Feather"
import ModalPickerPhoto from "./Modal/ModalPickerPhoto"

interface EditPerfilScreenProps extends AppStackScreenProps<"EditPerfil"> {}

export const EditPerfilScreen: FC<EditPerfilScreenProps> = observer(function EditPerfilScreen(
  _props,
) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const { navigation } = _props
  const [showModalPhoto, setshowModalPhoto] = useState(false)
  return (
    <Screen preset="auto" safeAreaEdges={["bottom", "top"]} backgroundColor={colors.background}>
      <View style={tw`h-40 rounded-b-[55px] bg-primary-500 w-full self-center`}>
        <View style={tw`flex-row items-center justify-between px-8 mt-10`}>
          <Pressable onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={30} color={colors.palette.primary100} />
          </Pressable>
          <Text style={tw`text-lg font-black text-white flex-1 text-center mr-6`}>
            Editar Perfil
          </Text>
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
            style={tw`border-2 border-orange-500 w-27 h-27 rounded-full absolute top-4 left-36 justify-end items-end`}
          >
            <Pressable onPress={() => setshowModalPhoto(true)}>
              <View style={tw`bg-orange-500 rounded-full items-center justify-center w-10 h-10`}>
                <Feather name="camera" size={20} color="#ffff" />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={tw`mt-15 px-6`}>
        <Text style={tw`text-sm text-gray-500 text-center`}>
          ¡Estás a solo unos pasos de tener un perfil genial!
        </Text>
        <View style={tw`mt-5`}>
          <Input label="Nombre*" containerStyle={tw`w-full`} />
          <Input label="Apellidos*" containerStyle={tw`w-full`} />
          <View>
            <Text style={tw`text-sm text-gray-500 mb-1`}>Acerca de ti*</Text>
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholderTextColor="#a6a6a6"
              style={[{ textAlignVertical: "top" }, tw`p-2 text-base border border-gray-200 h-51`]}
            />
            <Text style={tw`text-xs text-gray-500`}>Máximo de carácteres (500/320)</Text>
          </View>
          <View>
            <View style={tw`mt-5`}>
              <Text style={tw`text-sm text-gray-500 mb-1`}>Agrega tu educación*</Text>
              <TextInput
                multiline={true}
                numberOfLines={10}
                placeholderTextColor="#a6a6a6"
                style={[
                  { textAlignVertical: "top" },
                  tw`p-2 h-51 text-base border border-gray-200`,
                ]}
              />
              <Text style={tw`text-xs text-gray-500`}>Máximo de carácteres (500/320)</Text>
            </View>
            <View>
              <View style={tw`flex-row items-center  my-3`}>
                <Text style={tw`text-base text-primary-500 mr-2`}>Remover</Text>
                <Feather name="minus-circle" color={colors.palette.secondary500} size={25} />
              </View>
              <Input containerStyle={tw`w-full`} />
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-base text-primary-500 mr-2`}>Añadir</Text>
                <Feather name="plus-circle" color={colors.palette.secondary500} size={25} />
              </View>
            </View>
            <View style={tw`items-end mt-2`}>
              <Pressable onPress={() => console.log("hello word")}>
                <View
                  style={tw`bg-primary-500 py-2 w-35  items-center justify-center rounded-lg shadow-sm`}
                >
                  <Text style={tw`text-white text-base`}>Guardar</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View>
            <View style={tw`mt-5`}>
              <Text style={tw`text-sm text-gray-500 mb-1`}>Agrega tu experiencia*</Text>
              <TextInput
                multiline={true}
                numberOfLines={10}
                placeholderTextColor="#a6a6a6"
                style={[
                  { textAlignVertical: "top" },
                  tw`p-2 h-51 text-base border border-gray-200`,
                ]}
              />
              <Text style={tw`text-xs text-gray-500`}>Máximo de carácteres (500/320)</Text>
            </View>
            <View>
              <View style={tw`flex-row items-center  my-3`}>
                <Text style={tw`text-base text-primary-500 mr-2`}>Remover</Text>
                <Feather name="minus-circle" color={colors.palette.secondary500} size={25} />
              </View>
              <Input containerStyle={tw`w-full`} />
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-base text-primary-500 mr-2`}>Añadir</Text>
                <Feather name="plus-circle" color={colors.palette.secondary500} size={25} />
              </View>
            </View>
            <View style={tw`items-end mt-2`}>
              <Pressable onPress={() => console.log("hello word")}>
                <View
                  style={tw`bg-primary-500 py-2 w-35  items-center justify-center rounded-lg shadow-sm`}
                >
                  <Text style={tw`text-white text-base`}>Guardar</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <ModalPickerPhoto open={showModalPhoto} onClose={() => setshowModalPhoto(false)} />
    </Screen>
  )
})
