import * as React from "react"
import { View, ViewStyle, Text, StyleSheet } from "react-native"
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field"

export interface PinCodeProps {
  /**
   * An optional style override useful for padding & margin.
   */
  cellCount?: number
  value: string
  setValue: (e: string) => void
  rootStyle?: ViewStyle
  cellStyle?: ViewStyle
  textStyle?: ViewStyle
  focusStyle?: ViewStyle
}

/**
 * Describe your component here
 */
export const PinCode: React.FC<PinCodeProps> = ({
  cellCount = 6,
  value = "",
  setValue = (e) => console.log(e),
  rootStyle,
  cellStyle,
  textStyle,
  focusStyle,
}) => {
  const ref = useBlurOnFulfill({ value, cellCount })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  return (
    <CodeField
      ref={ref}
      {...props}
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={setValue}
      cellCount={cellCount}
      rootStyle={rootStyle}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <View key={index} style={[cellStyle, isFocused && styles.focusCell]}>
          <Text
            style={[styles.cell, isFocused && styles.focusCell, textStyle, isFocused && focusStyle]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  cell: {
    fontSize: 24,
    height: 40,
    lineHeight: 38,
    textAlign: "center",
    width: 40,
  },
  // eslint-disable-next-line react-native/no-color-literals
  focusCell: {
    borderColor: "#000",
  },
})
