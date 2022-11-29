import * as React from "react"
import { Modal, Pressable, View, Text } from "react-native"
import { ItemType } from "../search-input/search-input"
import tw from "@/utils/tailwind"

export interface FilterProps {
  open: boolean
  onClose: () => void
  onSelected: (e: number) => void
  data: ItemType[]
}

export const Filter: React.FC<FilterProps> = ({ open, onClose, onSelected, data }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={open} onRequestClose={() => onClose()}>
      <View style={tw`items-center justify-end flex-1 bg-blacktransparent-500 `}>
        <Pressable style={tw`absolute inset-0`} onPress={() => onClose()} />
        <View style={tw`w-full p-4 bg-white rounded-xl h-3/4`}>
          {data.map((item) => (
            <View key={item.id}>
              <Pressable
                onPress={() => {
                  onSelected(item.id)
                  onClose()
                }}
              >
                <View style={tw`${item.selected ? "bg-primary-500" : ""} py-2 px-2 my-2`}>
                  <Text style={tw`${item.selected ? "text-white" : "text-gray-500"} text-sm `}>
                    {item.title}
                  </Text>
                </View>
              </Pressable>
              <View style={tw`w-full h-0.3 bg-gray-300`} />
            </View>
          ))}
        </View>
      </View>
    </Modal>
  )
}
