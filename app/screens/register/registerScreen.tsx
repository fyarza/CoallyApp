import { AppStackScreenProps } from "@/navigators"
import React, { FC, useRef, useState } from "react"
import { View, Text, TextInput, TouchableNativeFeedback, Pressable } from "react-native"
import tw from "@/utils/tailwind"
import { Screen } from "@/components/Screen"
import { colors } from "@/theme"
import LogoCoally from "@/icons/LogoCoally"
import { Formik } from "formik"
import * as Yup from "yup"
import Input from "@/components/input/input"
import Feather from "@expo/vector-icons/Feather"
import Button from "@/components/custom-button/custom-button"
import AntDesign from "@expo/vector-icons/AntDesign"
import { observer } from "mobx-react-lite"
import { Select } from "@/components"
import { useStores } from "@/models"
import { registerData } from "@/services/api/auth-api"
import Toast from "react-native-toast-message"

interface RegisterScreenProps extends AppStackScreenProps<"Register"> {}

export const RegisterScreen: FC<RegisterScreenProps> = observer(function RegisterScreen(_props) {
  // Pull in one of our MST stores
  const { authStore } = useStores()
  const { signUp } = authStore
  const { navigation } = _props

  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const refPassword = useRef<TextInput>(null)
  const refPasswordConfirm = useRef<TextInput>(null)
  const [check, setCheck] = useState(false)
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Correo Invalido").required("Es requerido"),
    password: Yup.string().required("Es requerido").min(6, "Minimo 6 caracteres"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Es requerido"),
    userType: Yup.string().required("Es requerido"),
  })

  const onSubmit = async (values: any, actions: any) => {
    const data: registerData = {
      email: values.email,
      password: values.password,
      username: values.userType,
    }
    try {
      const result = await signUp(data)
      console.log("resultado", result)
      actions.setSubmitting(false)
    } catch (error) {
      Toast.show({
        type: "error",
        text1: error?.data?.message || JSON.stringify(error),
      })
      console.log("error", error)
    }
  }
  return (
    <Screen
      preset="auto"
      safeAreaEdges={["bottom"]}
      backgroundColor={colors.background}
      statusBarStyle="light"
    >
      <View style={tw`h-60 rounded-b-[55px] bg-primary-500 w-full self-center`}>
        <View style={tw`flex-row items-center justify-end px-6 mt-15`}>
          <Text style={tw`mr-2 text-lg font-black text-white`}>SP</Text>
          <Text style={tw`text-lg text-gray-100`}>EN</Text>
        </View>
        <View style={tw`items-center`}>
          <LogoCoally />
        </View>
      </View>
      <View style={tw`mt-6`}>
        <Text style={tw`text-base font-black text-center text-black`}>Regístrate</Text>
        <View style={tw`px-6 mt-10`}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <>
                <Select
                  items={[
                    { label: "Empresa", value: "EMP" },
                    { label: "Profesional", value: "PROF" },
                  ]}
                  placeholder="seleccione.."
                  onValueChange={(e) => {
                    formik.setFieldValue("userType", e)
                  }}
                  error={"userType" in formik.errors ? formik.errors.userType : ""}
                />
                <Input
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="Correo electrónico"
                  contenStyle={tw`px-3`}
                  containerStyle={tw`w-full`}
                  value={formik.values.email}
                  onChangeText={formik.handleChange("email")}
                  error={"email" in formik.errors ? formik.errors.email : ""}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    refPassword?.current?.focus()
                  }}
                />

                <Input
                  ref={refPassword}
                  secureTextEntry={!isVisible}
                  placeholder="Contraseña"
                  contenStyle={tw`px-3`}
                  containerStyle={tw`w-full`}
                  value={formik.values.password}
                  onChangeText={formik.handleChange("password")}
                  error={"password" in formik.errors ? formik.errors.password : ""}
                  RightIconComponent={
                    <Feather
                      name={isVisible ? "eye-off" : "eye"}
                      size={24}
                      onPress={() => {
                        setIsVisible(!isVisible)
                      }}
                    />
                  }
                  returnKeyType="send"
                  onSubmitEditing={() => {
                    refPasswordConfirm?.current?.focus()
                  }}
                />
                <Input
                  ref={refPasswordConfirm}
                  secureTextEntry={!isVisible2}
                  placeholder="Confirmar Contraseña"
                  contenStyle={tw`px-3`}
                  containerStyle={tw`w-full`}
                  value={formik.values.confirmPassword}
                  onChangeText={formik.handleChange("confirmPassword")}
                  error={"confirmPassword" in formik.errors ? formik.errors.confirmPassword : ""}
                  RightIconComponent={
                    <Feather
                      name={isVisible2 ? "eye-off" : "eye"}
                      size={24}
                      onPress={() => {
                        setIsVisible2(!isVisible2)
                      }}
                    />
                  }
                  returnKeyType="send"
                  onSubmitEditing={() => {
                    console.log("sent")
                  }}
                />
                <View style={tw`flex-row items-center justify-between mb-8`}>
                  <View style={tw`flex-row items-center`}>
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
                    <Text style={tw`ml-2 text-sm text-gray-500`}>
                      Acepto términos y condiciones
                    </Text>
                  </View>
                </View>
                <Button
                  variant="primary"
                  title="Regístrar"
                  onPress={formik.handleSubmit}
                  loading={formik.isSubmitting}
                />
              </>
            )}
          </Formik>
        </View>
        <View style={tw`h-0.3 w-full bg-gray-300 mt-6`} />
        <View style={tw`flex-row items-center justify-center mt-5`}>
          <Text style={tw`mr-2 text-sm text-gray-500`}>Si ya tienes cuenta,</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={tw`text-base font-bold text-primary-500`}>inicia sesión</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  )
})
