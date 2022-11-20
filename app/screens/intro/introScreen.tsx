import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, SafeAreaView } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import BusquedaIcon from "@/icons/BusquedaIcon"
import InterfazIcon from "@/icons/InterfazIcon"
import TeamIcon from "@/icons/TeamIcon"
// import { useStores } from "@/models"
import tw from "@/utils/tailwind"
import AppIntroSlider from "react-native-app-intro-slider"
import { dlog } from "@/utils/functions"

interface IntroScreenProps extends AppStackScreenProps<"Intro"> {}

const slides = [
  {
    key: 1,
    title: "Busca oportunidades",
    text: "Busca las oportunidades que \n necesitas",
    image: () => <BusquedaIcon />,
  },
  {
    key: 2,
    title: "Conéctate",
    text: "Conéctate con el trabajo que \nsiempre has deseado",
    image: () => <TeamIcon />,
  },
  {
    key: 3,
    title: "Especialízate",
    text: "Especialízate para el trabajo\nque quieres",
    image: () => <InterfazIcon />,
  },
]

export const IntroScreen: FC<IntroScreenProps> = observer(function IntroScreen(_props) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const { navigation } = _props

  const renderItem = ({ item }) => {
    return (
      <View style={tw`items-center justify-between flex-1`}>
        <View>
          <Text style={tw`mt-20 text-4xl font-black text-center text-primary-500`}>
            {item.title}
          </Text>
          <Text style={tw`mt-10 text-base font-semibold text-center text-black`}>{item.text}</Text>
        </View>
        <View style={tw`flex-1 mt-10`}>{item.image()}</View>
      </View>
    )
  }

  const renderNextButton = () => {
    return (
      <View>
        <Text style={tw`text-sm text-black`}>Siguiente</Text>
      </View>
    )
  }

  const renderPrevButton = () => {
    return (
      <View>
        <Text style={tw`text-sm text-black`}>Anterior</Text>
      </View>
    )
  }

  const renderDoneButton = () => {
    return (
      <View style={tw`px-8 py-1 border rounded-lg bg-primary-500`}>
        <Text style={tw`text-sm text-white`}>Iniciar</Text>
      </View>
    )
  }

  const onDone = () => {
    navigation.navigate("Login")
  }
  return (
    <SafeAreaView style={tw`flex-1 p-2 bg-white`}>
      <AppIntroSlider
        showSkipButton
        showDoneButton
        renderItem={renderItem}
        data={slides}
        showPrevButton={true}
        renderPrevButton={renderPrevButton}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        onSkip={() => {
          dlog("skip")
        }}
        onDone={() => onDone()}
        activeDotStyle={tw`bg-primary-500`}
        onSlideChange={(index) => {
          if (index === slides.length - 1) {
            dlog(index)
          }
        }}
      />
    </SafeAreaView>
  )
})
