import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native"
import React, { useState } from "react"
import { SwipeListView } from "react-native-swipe-list-view"
import tw from "@/utils/tailwind"
import TrashIcon from "@/icons/TrashIcon"
import { observer } from "mobx-react-lite"
import { useStores } from "@/models"
import { dlog } from "@/utils/functions"
import { colors } from "@/theme"
import TimeAgo from "react-native-timeago"
import moment from "moment"
const esLocale = require("moment/locale/es")
moment.updateLocale("es", esLocale)
interface Props {
  value: string
  page: number
  setPage: (e: number) => void
}

const ListSearch: React.FC<Props> = observer(({ value, page, setPage }) => {
  const { projectsStore } = useStores()
  const { ProjectsList, getProjects } = projectsStore
  const [refresh, setRefresh] = useState(false)

  const [loading, setLoading] = useState(false)

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

  const renderItem = ({ item }) => (
    <>
      <View style={tw`h-0.3 w-full`} />
      <View style={tw`flex-row items-start justify-between px-2 py-4 bg-[#F9F9F9] `}>
        <View style={tw`overflow-hidden rounded-xl`}>
          <ImageBackground
            source={{
              uri: item.imageUrl,
            }}
            style={tw`w-12 h-12`}
          />
        </View>
        <View style={tw`flex-1 ml-4`}>
          <Text style={tw`text-base font-black text-[#393939]`}>{item.NombreOportunidad}</Text>
          <Text style={tw`text-base font-black text-[#0B27E6]`}>{item.presupuesto}</Text>

          <Text style={tw`text-sm text-gray-400 capitalize `}>
            <TimeAgo time={item.fecha_inicio} />
          </Text>
          <View style={tw`h-0.3 w-full bg-gray-300 mt-5`} />
        </View>
      </View>
    </>
  )

  const renderHiddenItem = (data, rowMap) => (
    <View style={tw`flex-1`}>
      <Text>{""}</Text>
      <TouchableOpacity
        style={tw`absolute top-1 bottom-0 right-0 items-center justify-center bg-[#ffe1dd] w-25`}
        onPress={() => console.log(rowMap, data.item.key)}
      >
        <TrashIcon />
        <Text style={tw`text-[#E71C00]`}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  )

  const updatedList = async (pagina: number, updatePage: boolean) => {
    setLoading(true)
    try {
      const data = {
        skip: pagina,
        limit: 20,
      }
      await getProjects(value !== "" ? { ...data, key: value } : data)
      if (updatePage) setPage(page + 1)
    } catch (error) {
      dlog(error)
    } finally {
      setLoading(false)
    }
  }

  const onRefresh = async () => {
    try {
      setRefresh(true)
      await updatedList(0, false)
    } catch (error) {
      dlog(error)
    } finally {
      setPage(0)
      setRefresh(false)
    }
  }

  const handleMore = () => {
    updatedList(page, true)
  }

  const renderFooter = () => <FooterList loading={loading} />

  return (
    <SwipeListView
      data={ProjectsList}
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
      ListFooterComponent={renderFooter}
      refreshControl={
        <RefreshControl
          progressViewOffset={10}
          colors={["#9Bd35A", "#689F38"]}
          refreshing={refresh}
          onRefresh={() => onRefresh()}
        />
      }
      maxToRenderPerBatch={7}
      onEndReached={handleMore}
      onEndReachedThreshold={1}
    />
  )
})

interface FooterListProps {
  loading: boolean
}
const FooterList: React.FC<FooterListProps> = ({ loading }) => {
  return (
    <View>
      <ActivityIndicator animating={loading} size="large" color={colors.palette.primary500} />
    </View>
  )
}

export default ListSearch
