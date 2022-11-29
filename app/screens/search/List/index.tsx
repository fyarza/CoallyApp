import { View, Text, ImageBackground, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { SwipeListView } from "react-native-swipe-list-view"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import tw from "@/utils/tailwind"

interface Props {}

const ListSearch: React.FC<Props> = () => {
  const [listData, setListData] = useState([
    ...Array(10)
      .fill("")
      .map((_, j) => ({
        key: `${j}`,
        text: `item #${j}`,
      })),
  ])
  const renderEmptyList = () => (
    <View>
      <Text>Vacio</Text>
    </View>
  )

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow()
    }
  }

  const deleteRow = (rowMap: any, rowKey: any) => {
    closeRow(rowMap, rowKey)
    const newData = [...listData]
    const prevIndex = listData.findIndex((item) => item.key === rowKey)
    newData.splice(prevIndex, 1)
    setListData(newData)
  }

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey)
  }

  const renderItem = () => (
    <>
      <View style={tw`h-0.3 w-full`} />
      <View style={tw`flex-row items-start justify-between px-2 py-4 bg-[#F5F5F5] `}>
        <View style={tw`overflow-hidden rounded-xl`}>
          <ImageBackground
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLWcAsGLdmwkQiL5l8fztvLxf_B6hrzf22UGr1BRX&s",
            }}
            style={tw`w-12 h-12`}
          />
        </View>
        <View style={tw`flex-1 ml-4`}>
          <Text style={tw`text-base font-black text-gray-700`}>UX Designer</Text>
          <Text style={tw`text-base font-bold text-blue-700`}>$5.500.000</Text>
          <Text style={tw`text-sm text-gray-400`}>Hace 1 hora</Text>
          <View style={tw`h-0.3 w-full bg-gray-300 mt-5`} />
        </View>
      </View>
    </>
  )

  const renderHiddenItem = (data, rowMap) => (
    <View style={tw`flex-1`}>
      <Text>{""}</Text>
      <TouchableOpacity
        style={[
          tw`absolute top-1 bottom-0 right-0 items-center justify-center bg-[#ffe1dd] w-35`,
          // eslint-disable-next-line react-native/no-inline-styles
          { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
        ]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <MaterialIcons name="delete-outline" size={30} color="#c35649" />
        <Text style={tw`text-[#c35649]`}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SwipeListView
      data={listData}
      contentContainerStyle={tw`pb-25`}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={0}
      rightOpenValue={-100}
      previewRowKey={"0"}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onRowDidOpen={onRowDidOpen}
      ListEmptyComponent={renderEmptyList}
    />
  )
}

export default ListSearch
