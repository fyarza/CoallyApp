import React, { FC, useRef } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Pressable, TextInput } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen } from "@/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "@/models"
import Feather from "@expo/vector-icons/Feather"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import { Formik } from "formik"
import * as Yup from "yup"
import Input from "@/components/input/input"
import AntDesign from "@expo/vector-icons/AntDesign"
import Button from "@/components/custom-button/custom-button"

interface UploadCvFormScreenProps extends AppStackScreenProps<"UploadCvForm"> {}

export const UploadCvFormScreen: FC<UploadCvFormScreenProps> = observer(function UploadCvFormScreen(
  _props,
) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const { navigation } = _props

  const refLastName = useRef<TextInput>(null)
  const refLocation = useRef<TextInput>(null)
  const refEmail = useRef<TextInput>(null)
  const refActualProfession = useRef<TextInput>(null)
  const refUrl = useRef<TextInput>(null)

  const initialValues = {
    name: "",
    lastName: "",
    location: "",
    email: "",
    actualProfession: "",
    urlLinkedin: "",
    idioma: "",
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Es requerido"),
    lastName: Yup.string().required("Es requerido"),
    location: Yup.string().required("Es requerido"),
    email: Yup.string().email("Correo invalido").required("Es requerido"),
    actualProfession: Yup.string().required("Es requerido"),
    urlLinkedin: Yup.string().url("Url invalida").required("Es requerido"),
  })

  const onSubmit = (values: any, actions: any) => {
    console.log(values)
  }
  return (
    <Screen preset="auto" safeAreaEdges={["top", "bottom"]} backgroundColor={colors.background}>
      <View style={tw`flex-row items-center justify-between p-6`}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color={colors.palette.secondary500} />
        </Pressable>
        <Text style={tw`flex-1 text-lg font-black text-center text-primary-500`}>
          Formulario Hoja de vida
        </Text>
      </View>
      <View style={tw`px-4`}>
        <Text style={tw`text-sm text-gray-500`}>* El asterisco indica que es obligatorio</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <View style={tw`mt-5`}>
              <Input
                label="Nombre*"
                keyboardType="default"
                autoCapitalize="none"
                placeholder="Nombre"
                contenStyle={tw`px-3`}
                containerStyle={tw`w-full`}
                value={formik.values.name}
                onChangeText={formik.handleChange("name")}
                error={"name" in formik.errors ? formik.errors.name : ""}
                returnKeyType="next"
                onSubmitEditing={() => {
                  refLastName?.current?.focus()
                }}
              />
              <Input
                ref={refLastName}
                label="Apellidos*"
                keyboardType="default"
                autoCapitalize="none"
                placeholder="Apellidos"
                contenStyle={tw`px-3`}
                containerStyle={tw`w-full`}
                value={formik.values.lastName}
                onChangeText={formik.handleChange("lastName")}
                error={"lastName" in formik.errors ? formik.errors.lastName : ""}
                returnKeyType="next"
                onSubmitEditing={() => {
                  refLocation?.current?.focus()
                }}
              />
              <Input
                ref={refLocation}
                label="Ubicación*"
                keyboardType="default"
                autoCapitalize="none"
                placeholder="Ubicación"
                contenStyle={tw`px-3`}
                containerStyle={tw`w-full`}
                value={formik.values.location}
                onChangeText={formik.handleChange("location")}
                error={"location" in formik.errors ? formik.errors.location : ""}
                returnKeyType="next"
                onSubmitEditing={() => {
                  refEmail?.current?.focus()
                }}
              />
              <Input
                ref={refEmail}
                label="Email*"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Email"
                contenStyle={tw`px-3`}
                containerStyle={tw`w-full`}
                value={formik.values.email}
                onChangeText={formik.handleChange("email")}
                error={"email" in formik.errors ? formik.errors.email : ""}
                returnKeyType="next"
                onSubmitEditing={() => {
                  refActualProfession?.current?.focus()
                }}
              />
              <Input
                ref={refActualProfession}
                label="Profesión Actual*"
                keyboardType="default"
                autoCapitalize="none"
                placeholder="Profesión Actual"
                contenStyle={tw`px-3`}
                containerStyle={tw`w-full`}
                value={formik.values.actualProfession}
                onChangeText={formik.handleChange("actualProfession")}
                error={"actualProfession" in formik.errors ? formik.errors.actualProfession : ""}
                returnKeyType="next"
                onSubmitEditing={() => {
                  refUrl?.current?.focus()
                }}
              />
              <Input
                ref={refUrl}
                label="URL de LinkedIn*"
                keyboardType="default"
                autoCapitalize="none"
                placeholder="URL de LinkedIn"
                contenStyle={tw`px-3`}
                containerStyle={tw`w-full`}
                value={formik.values.urlLinkedin}
                onChangeText={formik.handleChange("urlLinkedin")}
                error={"urlLinkedin" in formik.errors ? formik.errors.urlLinkedin : ""}
                returnKeyType="next"
                onSubmitEditing={() => {
                  console.log("next")
                }}
              />
              <View style={tw`mb-6`}>
                <Text style={tw`mb-1 text-sm text-primary-500`}>Agregar idioma</Text>
                <Input
                  keyboardType="default"
                  autoCapitalize="none"
                  contenStyle={tw`px-3`}
                  containerStyle={tw`w-full`}
                  value={formik.values.idioma}
                  onChangeText={formik.handleChange("idioma")}
                  error={"idioma" in formik.errors ? formik.errors.idioma : ""}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    console.log("next")
                  }}
                />
                <View style={tw`flex-row items-center mt--2`}>
                  <Text style={tw`mr-4 text-sm text-primary-500`}>Añadir</Text>
                  <AntDesign name="pluscircleo" size={20} color={colors.palette.secondary500} />
                </View>
              </View>
              <View style={tw`mb-6`}>
                <Text style={tw`mb-1 text-sm text-primary-500`}>Agregar experiencia</Text>
                <Input
                  keyboardType="default"
                  autoCapitalize="none"
                  contenStyle={tw`px-3`}
                  containerStyle={tw`w-full`}
                  value={formik.values.idioma}
                  onChangeText={formik.handleChange("idioma")}
                  error={"idioma" in formik.errors ? formik.errors.idioma : ""}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    console.log("next")
                  }}
                />
                <View style={tw`flex-row items-center mt--2`}>
                  <Text style={tw`mr-4 text-sm text-primary-500`}>Añadir</Text>
                  <AntDesign name="pluscircleo" size={20} color={colors.palette.secondary500} />
                </View>
              </View>
              <View style={tw`px-12 my-4`}>
                <Button
                  variant="primary"
                  title="Guardar"
                  onPress={formik.handleSubmit}
                  loading={formik.isSubmitting}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  )
})
