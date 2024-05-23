
import { Animated, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useAnimation } from "../../hooks/useAnimation"

export const Animation101Screen = () => {

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
    <View style={styles.container}>
        <Animated.View style={[
            styles.purpleBox,
            {
              opacity: animatedOpacity,
              transform: [{
                translateY: animatedTopPosition
              }]
            }
        ]} />

        <Pressable onPress={ () => onPressFadeIn() } style={{ marginTop: 10 }}>
            <Text style={styles.text}>FadeIn</Text>
        </Pressable>

        <Pressable onPress={ () => fadeOut({}) } style={{ marginTop: 10 }}>
            <Text style={styles.text}>FadeOut</Text>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    },
    text: {
      color: colors.primary
    }
})
