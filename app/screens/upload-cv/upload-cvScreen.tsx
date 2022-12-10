import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Pressable } from "react-native"
import { AppStackScreenProps, goBack } from "@/navigators"
import { Screen } from "@/components"
import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import * as DocumentPicker from "expo-document-picker"
import { uploadCvData } from "@/services/api/user-api"
import Feather from "@expo/vector-icons/Feather"
import Octicons from "@expo/vector-icons/Octicons"
import AntDesign from "@expo/vector-icons/AntDesign"
import Spinner from "react-native-loading-spinner-overlay/lib"

interface UploadCvScreenProps extends AppStackScreenProps<"UploadCv"> {}

interface typeFile {
  name: string
  size: number
  uri: string
  type: string
}

export const UploadCvScreen: FC<UploadCvScreenProps> = observer(function UploadCvScreen(_props) {
  const [doc, setDoc] = useState<typeFile>(null)
  // Pull in one of our MST stores
  const { userStore, authStore } = useStores()
  const { setUploadCv } = userStore
  const { id } = authStore
  const [selected, setSelected] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  // Pull in navigation via hook
  const { navigation } = _props

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true,
      })
      const { type } = result
      if (type !== "cancel") {
        const { mimeType, name, size, uri } = result
        console.log(result)
        const fileToUpload = {
          name,
          size,
          uri,
          type: mimeType,
        }
        await postDocument(fileToUpload)
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  const postDocument = async (fileToUpload: any) => {
    try {
      setLoading(true)

      const data: uploadCvData = {
        name: fileToUpload.name,
        size: fileToUpload.size,
        type: fileToUpload.type,
        uri: fileToUpload.uri,
        user: id,
      }
      await setUploadCv(data)
      setDoc(fileToUpload)
    } catch (error) {
      setError(true)
      console.log("error", error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Screen preset="auto" safeAreaEdges={["bottom", "top"]} backgroundColor={colors.background}>
      <Spinner visible={loading} />
      <View style={tw`relative items-center mb-15`}>
        <View style={tw`h-40 rounded-b-[35px] bg-primary-500 w-full self-center`}>
          <View style={tw`flex-row items-center justify-between p-6`}>
            <Pressable onPress={() => goBack()}>
              <Feather name="arrow-left" size={30} color={colors.palette.primary100} />
            </Pressable>
            <Text style={tw`flex-1 mr-2 text-lg font-black text-center text-white`}>
              Subir hoja de vida
            </Text>
          </View>
        </View>
        <View style={tw`absolute top-30`}>
          <Pressable
            onPress={() => {
              setSelected(true)
              setError(false)
              pickDocument()
            }}
          >
            <View
              style={tw`px-4 py-4 ${
                selected ? "bg-white shadow-lg" : "bg-[#f9f9f9] border border-gray-300 "
              }   w-80 rounded-xl `}
            >
              <Text style={tw`mb-2 text-base text-primary-500`}>Hoja de vida</Text>
              <Text style={tw`text-base font-black text-primary-500`}>PDF del LinkendIn</Text>
              <View style={tw`flex-row items-center justify-between mt-3`}>
                <Text style={tw`text-base text-black`}>
                  Si no sabes como hacerlo, mira el {"\n"}
                  <Text style={tw`font-bold text-primary-500`}>siguiente video</Text>
                </Text>
                <Octicons name="upload" size={30} color={colors.palette.secondary500} />
              </View>
              {error === true ? (
                <Text style={tw`mt-3 text-base text-red-500`}>Error al subir el documento</Text>
              ) : null}
              {doc !== null ? (
                <Pressable
                  onPress={() => {
                    setDoc(null)
                  }}
                >
                  <View
                    style={tw`flex-row items-center px-2 py-1 bg-[#e5dcf7] w-50 rounded-lg mt-2`}
                  >
                    <AntDesign name="close" size={20} color={colors.palette.secondary500} />
                    <Text style={tw`ml-4 text-base text-primary-500`}>PDF Doc..</Text>
                  </View>
                </Pressable>
              ) : null}
            </View>
          </Pressable>
        </View>
      </View>

      <View style={tw`items-center mt-25`}>
        <View style={tw`px-4 py-4 bg-[#f9f9f9] border border-gray-300 shadow-sm w-80 rounded-xl `}>
          <Text style={tw`mb-2 text-base text-primary-500`}>Hoja de vida</Text>
          <Text style={tw`text-base font-black text-primary-500`}>General</Text>
          <View style={tw`flex-row items-center justify-between mt-3`}>
            <Text style={tw`text-base text-black`}>PDF de tu hoja de vida general.</Text>
            <Octicons name="upload" size={30} color={colors.palette.secondary500} />
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate("UploadCvForm")}>
          <View
            style={tw`px-4 py-4 mt-3 bg-[#f9f9f9] border border-gray-300 shadow-sm w-80 rounded-xl `}
          >
            <View style={tw`flex-row items-center justify-between mt-3`}>
              <Text style={tw`text-base text-black`}>
                Si no tienes Hoja de vida, puedes{"\n"}
                llenar el <Text style={tw`font-bold text-primary-500`}>siguiente formulario</Text>
              </Text>
              <Octicons name="pencil" size={30} color={colors.palette.secondary500} />
            </View>
          </View>
        </Pressable>
      </View>
    </Screen>
  )
})
