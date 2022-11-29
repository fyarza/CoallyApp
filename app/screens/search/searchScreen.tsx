import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Pressable } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen } from "@/components"
// import { useStores } from "@/models"
import Feather from "@expo/vector-icons/Feather"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import { SearchInput } from "@/components/search-input/search-input"
import ListSearch from "./List"

interface SearchScreenProps extends AppStackScreenProps<"Search"> {}

export const SearchScreen: FC<SearchScreenProps> = observer(function SearchScreen(_props) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const [value, setValue] = useState("")
  const { navigation } = _props
  return (
    <Screen preset="fixed" safeAreaEdges={["top", "bottom"]} backgroundColor={colors.background}>
      <View style={tw`flex-row items-center justify-between p-6`}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color={colors.palette.secondary500} />
        </Pressable>
        <Text style={tw`flex-1 text-lg font-black text-center text-primary-500`}>Buscar</Text>
      </View>

      <SearchInput value={value} setValue={setValue} />

      <View style={tw`px-3 mt-5 mb-60`}>
        <ListSearch />
      </View>
    </Screen>
  )
})
