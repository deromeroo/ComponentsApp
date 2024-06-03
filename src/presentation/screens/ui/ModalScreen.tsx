
import { Modal, Platform, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { useContext, useState } from "react"
import { Button } from "../../components/ui/Button"
import { ThemeContext } from "../../context/ThemeContext"

export const ModalScreen = () => {

    const [showModal, setShowModal] = useState(false)
    const {colors} = useContext(ThemeContext)
  

  return (
    <CustomView margin>
        <Title text="Modal" safe />

        <Button 
            text="Open Modal"
            onPress={ () => setShowModal( true ) }
        />

        <Modal 
            visible={ showModal }
            animationType="slide"
        >
            <View style={{
                flex: 1,
                backgroundColor: colors.cardBackground
            }}>
                <View style={{paddingHorizontal: 10}}>
                    <Title text="Modal Content" safe/>
                </View>

                <View style={{ flex: 1 }} />

                <Button 
                    text="Close Modal"
                    onPress={ () => setShowModal(false) }
                    style={{
                        height: Platform.OS === 'android' ? 40 : 60,
                        borderRadius: 0
                    }}
                />
            </View>
        </Modal>
    </CustomView>
  )
}
