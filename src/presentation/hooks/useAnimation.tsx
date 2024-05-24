import { useRef } from "react"
import { Animated, Easing, PanResponder } from "react-native"

export const useAnimation = () => {

    const animatedOpacity = useRef( new Animated.Value(0) ).current
    const animatedTopPosition = useRef( new Animated.Value(0) ).current
    const pan = useRef(new Animated.ValueXY()).current;
  
    const fadeIn = ({ duration = 300, toValue = 1, callback = () => {} }) => {
      Animated.timing( animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true
      }).start( callback )  
    }

    const fadeOut = ({ duration = 300, toValue = 0, callback = () => {} }) => {
      Animated.timing( animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true
      }).start( callback )
    }

    const startMovingTopPosition = ({
        initialPosition = 0,
        toValue = 0,
        duration = 700,
        easing = Easing.bounce,
        callback = () => {}
    }) => {

        animatedTopPosition.setValue( initialPosition )
        Animated.timing( animatedTopPosition, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
            easing: easing
        }).start( callback )
    }

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x,
          dy: pan.y
        }
      ],{ useNativeDriver: false }),
      onPanResponderRelease: () => {
        Animated.spring(
          pan,
          {
            toValue: {x:0, y:0}, useNativeDriver: false
          }
        ).start()
      }
    })
  
  return {
    // Properties
    animatedOpacity,
    animatedTopPosition,
    pan,
    panResponder,

    //Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition
  }
}
