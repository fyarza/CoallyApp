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
import AntDesign from "@expo/vector-icons/AntDesign"
import Button from "@/components/custom-button/custom-button"
import { observer } from "mobx-react-lite"
import { dlog } from "@/utils/functions"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const { navigation } = _props
  const [isVisible, setIsVisible] = useState(false)
  const refPassword = useRef<TextInput>(null)
  const [check, setCheck] = useState(false)
  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Correo Invalido").required("Es requerido"),
    password: Yup.string().required("Es requerido"),
  })

  const onSubmit = (values: any, actions: any) => {
    setTimeout(() => {
      console.log("hola mundo")
      actions.setSubmitting(false)
    }, 3000)
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
        <Text style={tw`text-base font-black text-center text-black`}>Iniciar Sesión</Text>
        <View style={tw`px-6 mt-10`}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <>
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
                    console.log("sent")
                  }}
                />

                <View style={tw`flex-row items-center justify-between mb-10`}>
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
                    <Text style={tw`ml-1 text-sm text-gray-500`}>Recordarme</Text>
                  </View>
                  <Pressable onPress={() => dlog("fotgot")}>
                    <Text style={tw`text-sm font-semibold text-primary-500`}>
                      ¿Olvidaste la contraseña?
                    </Text>
                  </Pressable>
                </View>
                <Button
                  variant="primary"
                  title="Iniciar sesión"
                  styleContainer="mt-5"
                  onPress={formik.handleSubmit}
                  loading={formik.isSubmitting}
                />
              </>
            )}
          </Formik>
        </View>
        <View style={tw`h-0.3 w-full bg-gray-300 mt-10`} />
        <View style={tw`flex-row items-center justify-center mt-10`}>
          <Text style={tw`mr-2 text-sm text-gray-500`}>¿Es la primera vez que usas Coally?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={tw`text-base font-bold text-primary-500`}>Regístrate</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  )
})
