import * as React from "react"
import { ActivityIndicator, Text, TouchableNativeFeedback, View } from "react-native"
import tw from "@/utils/tailwind"

export interface CustomButtonProps {
  onPress?: () => void
  title?: string
  variant: "primary" | "secondary"
  children?: React.ReactNode | string
  styleContainer?: string
  backgroundColorRiple?: string
  loading?: boolean
  disabled?: boolean
}

const Button: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  variant,
  children,
  styleContainer = "",
  backgroundColorRiple = "#f3f3f3",
  loading,
  disabled,
}) => {
  return (
    <TouchableNativeFeedback
      disabled={loading || disabled}
      background={TouchableNativeFeedback.Ripple(backgroundColorRiple, false)}
      onPress={onPress}
    >
      <View
        style={tw`items-center justify-center w-full  py-2 rounded-lg  ${
          variant === "primary" ? "bg-primary-500" : "bg-[#CBCBCB]"
        } ${styleContainer}  ${disabled ? "bg-gray-300" : ""}`}
      >
        {!children && (
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-base  text-white ${loading ? "mr-2" : ""}`}>{title}</Text>
            {loading && (
              <ActivityIndicator size="small" color={variant === "primary" ? "#fff" : "#0000ff"} />
            )}
          </View>
        )}
        {children}
      </View>
    </TouchableNativeFeedback>
  )
}

Button.defaultProps = {
  backgroundColorRiple: "#f3f3f3",
  loading: false,
  disabled: false,
  title: "Login",
}

export default Button
