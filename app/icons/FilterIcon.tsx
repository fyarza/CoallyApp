import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const FilterIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={9} cy={6} r={2} stroke="#C5C5C5" />
    <Path d="M4 6h3M11 6h9" stroke="#C5C5C5" strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx={9} cy={18} r={2} stroke="#C5C5C5" />
    <Path d="M4 18h3M11 18h9" stroke="#C5C5C5" strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx={15} cy={12} r={2} stroke="#C5C5C5" />
    <Path d="M4 12h9M17 12h3" stroke="#C5C5C5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
)

export default FilterIcon
