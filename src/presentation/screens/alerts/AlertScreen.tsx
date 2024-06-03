import { Alert, View } from "react-native"
import { Button } from "../../components/ui/Button"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { showPromt } from "../../../config/adapters/prompt.adapter"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const AlertScreen = () => {

    const { isDark } = useContext(ThemeContext)

    const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
        {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], { userInterfaceStyle: isDark ? 'dark' : 'light'});
    
    const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
        {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
        },
        {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], { userInterfaceStyle: isDark ? 'dark' : 'light'});


    const onShowPrompt = () => {
        showPromt({
            title: 'Show Prompt',
            subTitle: 'Ipsum in quis et amet esse ad reprehenderit.',
            buttons: [
                {text: 'Ok', onPress: () => console.log('Ok')}
            ],
            placeholder: 'Holddd'
        })
    }

  return (
    <CustomView margin>
        <Title safe text="Alerts" />

        <Button 
            text="Alert - 2 Btn"
            onPress={ createTwoButtonAlert }
        />

        <View style={{ marginVertical: 10}} />

        <Button 
            text="Alert - 3 Btn"
            onPress={ createThreeButtonAlert }
        />

        <View style={{ marginVertical: 10}} />

        <Button 
            text="Prompt - Input"
            onPress={ onShowPrompt }
        />

    </CustomView>
  )
}
