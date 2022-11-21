import tw from "@/utils/tailwind"
import * as React from "react"
import { Text, View, ViewStyle } from "react-native"
import Dropdown from "react-native-picker-select"
import { FormikErrors } from "formik"

export interface items {
  label: string
  value: string
}

export interface SelectProps {
  placeholder?: string
  onValueChange: (e: any) => void
  items: items[]
  inputStyleAndroid?: ViewStyle
  inputStyleIOS?: ViewStyle
  styleContainer?: ViewStyle
  error?: boolean | string | string[] | FormikErrors<any>[] | FormikErrors<any>
}

export const Select: React.FC<SelectProps> = ({
  placeholder,
  onValueChange,
  items,
  inputStyleAndroid,
  inputStyleIOS,
  styleContainer,
  error,
}) => {
  return (
    <View>
      <Dropdown
        placeholder={{ label: placeholder, value: "" }}
        onValueChange={onValueChange}
        items={items}
        style={{
          inputIOS: tw.style(
            `text-base text-gray-500 bg-white`,
            error && "text-red-500",
            inputStyleIOS,
          ),
          inputAndroid: tw.style(
            `text-xs text-gray-500 bg-white`,
            error && "text-red-500",
            inputStyleAndroid,
          ),
          viewContainer: tw.style(
            `border border-gray-200`,
            error && "border-red-500",
            styleContainer,
          ),
        }}
      />
      <Text style={tw`mb-2 ml-2 text-red-600`}>{typeof error === "string" && `${error}`}</Text>
    </View>
  )
}
