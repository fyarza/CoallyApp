import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ElipseIcon = (props: SvgProps) => (
  <Svg width={45} height={44} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M40 0c0 21.54-17.909 39-40 39" stroke="#681B01" strokeWidth={10} />
  </Svg>
)

export default ElipseIcon
