import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Pressable } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen } from "@/components"
import { useStores } from "@/models"
import Feather from "@expo/vector-icons/Feather"
import { colors } from "@/theme"
import tw from "@/utils/tailwind"
import { SearchInput } from "@/components/search-input/search-input"
import ListSearch from "./List"
import _ from "lodash"
import { dlog } from "@/utils/functions"

interface SearchScreenProps extends AppStackScreenProps<"Search"> {}

export const SearchScreen: FC<SearchScreenProps> = observer(function SearchScreen(_props) {
  // Pull in one of our MST stores
  const { projectsStore } = useStores()
  const { getProjects } = projectsStore
  const [value, setValue] = useState("")
  const [page, setPage] = useState(0)
  const { navigation } = _props

  const onSearch = async () => {
    try {
      await getProjects({
        skip: 0,
        limit: 20,
        key: value,
      })
    } catch (error) {
      dlog(error)
    } finally {
      setPage(0)
    }
  }

  return (
    <Screen preset="fixed" safeAreaEdges={["top", "bottom"]} backgroundColor={colors.background}>
      <View>
        <View style={tw`flex-row items-center justify-between p-6`}>
          <Pressable onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={30} color={colors.palette.secondary500} />
          </Pressable>
          <Text style={tw`flex-1 text-lg font-black text-center text-primary-500`}>Buscar</Text>
        </View>

        <SearchInput value={value} setValue={setValue} onSearch={onSearch} />
      </View>

      {value.trim() === "" ? (
        <View style={tw`px-6`}>
          <View style={tw`h-0.3 w-full bg-gray-300`} />
          <Text style={tw`my-2 text-base text-gray-500`}>Prueba con</Text>
          <Pressable>
            <View style={tw`flex-row items-center my-2`}>
              <Feather name="search" size={25} color="#c5c5c5" />
              <Text style={tw`ml-3 text-base text-gray-500`}>Diseño gráfico</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={tw`flex-row items-center my-2`}>
              <Feather name="search" size={25} color="#c5c5c5" />
              <Text style={tw`ml-3 text-base text-gray-500`}>Marketing</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={tw`flex-row items-center my-2`}>
              <Feather name="search" size={25} color="#c5c5c5" />
              <Text style={tw`ml-3 text-base text-gray-500`}>Desarrollo Web</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={tw`flex-row items-center my-2`}>
              <Feather name="search" size={25} color="#c5c5c5" />
              <Text style={tw`ml-3 text-base text-gray-500`}>Diseñador gráfico Junior</Text>
            </View>
          </Pressable>
        </View>
      ) : (
        <View style={tw`flex-1 px-2`}>
          <ListSearch value={value} page={page} setPage={setPage} />
        </View>
      )}
    </Screen>
  )
})
