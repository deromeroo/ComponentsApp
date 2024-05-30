
import { Modal, Platform, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { useState } from "react"
import { Button } from "../../components/ui/Button"

export const ModalScreen = () => {

    const [showModal, setShowModal] = useState(false)


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
                backgroundColor: 'rgba(0,0,0,0.1)'
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
