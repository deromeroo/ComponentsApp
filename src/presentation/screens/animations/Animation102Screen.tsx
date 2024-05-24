
import { Animated, StyleSheet, Text, View } from "react-native"
import { useAnimation } from "../../hooks/useAnimation"
import { colors } from "../../../config/theme/theme";

export const Animation102Screen = () => {

    const {pan, panResponder} = useAnimation()

    return (
        <View style={styles.container}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[pan.getLayout(), styles.box]}
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
        backgroundColor: colors.primary,
        width: 80,
        height: 80,
        borderRadius: 4,
      },
})
