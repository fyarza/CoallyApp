import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const TrashIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M19 6H5M14 5h-4M6 10v11h12V10" stroke="#E71C00" strokeLinecap="round" />
  </Svg>
)

export default TrashIcon
