import tw from "@/utils/tailwind"
import * as React from "react"
import { Pressable, Text, View } from "react-native"
import Input from "../input/input"
import AntDesign from "@expo/vector-icons/AntDesign"
import EvilIcons from "@expo/vector-icons/EvilIcons"
import { colors } from "@/theme"

export interface InputTagsProps {
  onChangeTags: (tags: string[]) => void
  label?: string
}
const InputTags: React.FC<InputTagsProps> = ({ onChangeTags, label }) => {
  const [value, setValue] = React.useState("")
  const [tags, setTags] = React.useState([])
  const onSetTags = () => {
    if (value.trim() !== "") {
      setTags([...tags, value])
      setValue("")
      onChangeTags([...tags, value])
    }
  }
  const onDeleteTag = (tag: string) => {
    const index = tags.findIndex((i) => i === tag)
    if (index !== -1) {
      const updatedTags = tags
      updatedTags.splice(index, 1)
      setTags(updatedTags)
      onChangeTags(updatedTags)
    }
  }
  return (
    <View style={tw`mb-6`}>
      {label && <Text style={tw`mb-1 text-sm text-primary-500`}>{label}</Text>}
      <Input
        autoCapitalize="none"
        contenStyle={tw`px-3`}
        containerStyle={tw`w-full`}
        value={value}
        onChangeText={(e) => setValue(e)}
        returnKeyType="join"
        onSubmitEditing={() => {
          onSetTags()
        }}
      />
      <View style={tw`flex-row flex-wrap items-center mt--4`}>
        {tags.map((tag, index) => (
          <Pressable key={index} onPress={() => onDeleteTag(tag)}>
            <View style={tw`flex-row items-center p-1 mt-2 mr-2 bg-gray-200 rounded-full`}>
              <Text style={tw`mr-2 text-xs text-black`}>{tag}</Text>
              <EvilIcons name="close-o" size={15} color="red" />
            </View>
          </Pressable>
        ))}
      </View>
      <Pressable onPress={() => onSetTags()}>
        <View style={tw`flex-row items-center mt-5`}>
          <Text style={tw`mr-4 text-sm text-primary-500`}>Añadir</Text>
          <AntDesign name="pluscircleo" size={20} color={colors.palette.secondary500} />
        </View>
      </Pressable>
    </View>
  )
}

export { InputTags }
