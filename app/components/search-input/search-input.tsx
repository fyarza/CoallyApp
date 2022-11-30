import tw from "@/utils/tailwind"
import * as React from "react"
import { FlatList, Pressable, Text, View } from "react-native"
import Feather from "@expo/vector-icons/Feather"
import Ionicons from "@expo/vector-icons/Ionicons"
import Input from "../input/input"
import { Filter } from "../filter/filter"

export interface SearchInputProps {
  value: string
  setValue: (e: string) => void
  onSearch?: () => void
}

export interface ItemType {
  id: number
  title: string
  selected: boolean
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, setValue, onSearch }) => {
  const [showModalFilter, setShowModalFilter] = React.useState(false)
  const ref = React.useRef(null)

  const [data, setData] = React.useState<ItemType[]>([
    {
      id: 1,
      title: "Por Compañias",
      selected: false,
    },
    {
      id: 2,
      title: "Por Experiencia en Coally",
      selected: false,
    },
    {
      id: 3,
      title: "Por Fecha de publicación",
      selected: false,
    },
    {
      id: 4,
      title: "Por Futuro de carrera",
      selected: false,
    },
    {
      id: 5,
      title: "Por Habilidades",
      selected: false,
    },
    {
      id: 6,
      title: "Por Motivación",
      selected: false,
    },
    {
      id: 7,
      title: "Por Salario",
      selected: false,
    },
    {
      id: 8,
      title: "Por Tipo de contrato",
      selected: false,
    },
    {
      id: 9,
      title: "Ordenar de la A-Z",
      selected: false,
    },
    {
      id: 10,
      title: "Ordenar de la Z-A",
      selected: false,
    },
  ])
  const onSelected = (e: number) => {
    setData(
      data.map((item) => {
        if (item.id === e) {
          return {
            ...item,
            selected: !item.selected,
          }
        }
        return item
      }),
    )
  }
  return (
    <View style={tw`px-6`}>
      <View style={tw`flex-row items-start`}>
        <Input
          ref={ref}
          autoFocus={true}
          autoCapitalize="none"
          placeholder="Buscar oportunidades"
          contenStyle={tw`px-1`}
          containerStyle={tw`flex-1`}
          value={value}
          onChangeText={(e) => setValue(e)}
          LeftIconComponent={<Feather name="search" color="#c4c4c4" size={20} />}
          returnKeyType="search"
          onSubmitEditing={() => {
            if (onSearch) onSearch()
          }}
        />
        <Pressable onPress={() => setShowModalFilter(true)}>
          <View
            style={tw`${
              showModalFilter ? "bg-primary-500" : ""
            } border w-10 h-10 border-gray-300 rounded-md items-center justify-center ml-2`}
          >
            <Ionicons
              name="ios-options-outline"
              size={25}
              color={showModalFilter ? "white" : "#c4c4c4"}
            />
          </View>
        </Pressable>
      </View>
      <View style={tw`mb-5`}>
        <View style={tw`flex-row`}>
          <Text style={tw`text-xs text-gray-500`}>Resultados</Text>
          <Text style={tw`ml-2 text-xs text-black`}>000</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            if (item.selected) {
              return (
                <View style={tw`px-4 py-2 mt-5 mr-2 rounded-xl bg-[#E5DCF7]`}>
                  <Pressable style={tw`flex-row items-center`} onPress={() => onSelected(item.id)}>
                    <Feather name="x" size={20} color="#202256" />
                    <Text style={tw`ml-2 text-sm  text-[#202256]`}>{item.title}</Text>
                  </Pressable>
                </View>
              )
            }
            return null
          }}
        />
      </View>
      <Filter
        open={showModalFilter}
        onClose={() => setShowModalFilter(false)}
        onSelected={(e) => onSelected(e)}
        data={data}
      />
    </View>
  )
}
