import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const BellIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      clipRule="evenodd"
      d="M12 3a6 6 0 0 1 6 6v5c0 3 2 4 2 4H4s2-1 2-4V9a6 6 0 0 1 6-6Z"
      stroke="#202256"
      strokeLinejoin="round"
    />
    <Path d="M10 18a2 2 0 1 0 4 0" stroke="#202256" />
  </Svg>
)

export default BellIcon
