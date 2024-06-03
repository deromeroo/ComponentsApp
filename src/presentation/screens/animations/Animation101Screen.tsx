
import { Animated, Pressable, StyleSheet, Text, View } from "react-native"
import { useAnimation } from "../../hooks/useAnimation"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { CustomView } from "../../components/ui/CustomView"

export const Animation101Screen = () => {

  const {colors} = useContext(ThemeContext)

  const {
    animatedOpacity,
    animatedTopPosition,

    fadeIn,
    fadeOut,
    startMovingTopPosition
  } = useAnimation()

  const onPressFadeIn = () => {
    fadeIn({})
    startMovingTopPosition({
      initialPosition: -100,
    })
  }

  return (
    <CustomView style={styles.container}>
        <Animated.View style={[
            styles.purpleBox,
            {
              backgroundColor: colors.primary,
              opacity: animatedOpacity,
              transform: [{
                translateY: animatedTopPosition
              }]
            }
        ]} />

        <Pressable onPress={ () => onPressFadeIn() } style={{ marginTop: 10 }}>
            <Text style={{color: colors.text}}>FadeIn</Text>
        </Pressable>

        <Pressable onPress={ () => fadeOut({}) } style={{ marginTop: 10 }}>
            <Text style={{color: colors.text}}>FadeOut</Text>
        </Pressable>
    </CustomView>
  )
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150,
    }
})
