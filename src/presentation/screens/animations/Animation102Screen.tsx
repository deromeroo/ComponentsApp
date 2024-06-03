
import { Animated, StyleSheet, Text, View } from "react-native"
import { useAnimation } from "../../hooks/useAnimation"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Animation102Screen = () => {

    const {pan, panResponder} = useAnimation()
    const { colors } = useContext(ThemeContext)

    return (
        <View style={[styles.container, {backgroundColor: colors.background }]}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[pan.getLayout(), styles.box, {backgroundColor: colors.primary}]}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      box: {
        width: 80,
        height: 80,
        borderRadius: 4,
      },
})
