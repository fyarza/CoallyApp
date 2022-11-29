import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Pressable } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { PinCode, Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "@/models"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import LogoCoally from "@/icons/LogoCoally"
import Button from "@/components/custom-button/custom-button"
import Toast from "react-native-toast-message"
import { dlog } from "@/utils/functions"
import { sendOtpData, verifyOtpData } from "@/services/api/auth-api"

interface PasswordCodeScreenProps extends AppStackScreenProps<"PasswordCode"> {}

export const PasswordCodeScreen: FC<PasswordCodeScreenProps> = observer(function PasswordCodeScreen(
  _props,
) {
  // Pull in one of our MST stores
  const { authStore } = useStores()
  const { sendOtpEmail, verifyOtpEmail } = authStore
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false)

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const { navigation, route } = _props
  const params = route.params || {
    email: "",
  }

  const sendOtp = async (resend = false) => {
    try {
      const data: sendOtpData = {
        email: params.email,
      }
      const res = await sendOtpEmail(data)
      if (resend) {
        Toast.show({
          type: "success",
          text1: "Código reenviado..",
        })
      }
      dlog("respuesta", res)
    } catch (error) {
      __DEV__ && console.log(error)
      Toast.show({
        type: "error",
        text1: error?.data?.message || JSON.stringify(error),
      })
    }
  }
  useEffect(() => {
    // sendOtp()
  }, [])

  const verifyOTP = async () => {
    try {
      if (value === "" || value.length < 6) {
        Toast.show({
          type: "error",
          text1: "El Código es requerido",
        })
        return
      }
      const data: verifyOtpData = {
        otp: value,
        email: params.email,
      }
      setLoading(true)
      const res = await verifyOtpEmail(data)
      dlog("respuesta", res)
    } catch (error) {
      __DEV__ && console.log(error)
      Toast.show({
        type: "error",
        text1: error?.data?.message || JSON.stringify(error),
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Screen preset="auto" safeAreaEdges={["bottom"]} backgroundColor={colors.background}>
      <View style={tw`h-60 rounded-b-[55px] bg-primary-500 w-full self-center`}>
        <View style={tw`flex-row items-center justify-end px-6 mt-15`}>
          <Text style={tw`mr-2 text-lg font-black text-white`}>SP</Text>
          <Text style={tw`text-lg text-gray-100`}>EN</Text>
        </View>
        <View style={tw`items-center`}>
          <LogoCoally />
        </View>
      </View>
      <View style={tw`mt-10`}>
        <Text style={tw`text-base font-black text-center text-black`}>Confirmar Código</Text>
        <Text style={tw`mt-3 text-base text-center text-gray-500`}>
          Hemos enviado un código de {"\n"}verificación al correo {params.email}
          {"\n"}Por Favor, escribalo.
        </Text>
        <View style={tw`px-6 mt-10`}>
          <PinCode
            value={value}
            setValue={setValue}
            cellCount={6}
            cellStyle={tw`items-center justify-center w-12 h-12 border border-gray-200`}
          />
          <Button
            variant="primary"
            title="Continuar"
            styleContainer="mt-5"
            onPress={verifyOTP}
            loading={loading}
          />
        </View>
        <View style={tw`h-0.3 w-full bg-gray-300 mt-10`} />
        <View style={tw`flex-row items-center justify-center mt-10`}>
          <Pressable onPress={() => sendOtp(true)}>
            <Text style={tw`text-base font-bold text-primary-500`}>Reenviar código</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  )
})
