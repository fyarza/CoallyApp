import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M14.412 14.412 20 20" stroke="#C5C5C5" strokeLinecap="round" />
    <Path clipRule="evenodd" d="M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="#C5C5C5" />
  </Svg>
)

export default SearchIcon
