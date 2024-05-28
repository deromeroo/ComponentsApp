import { Text, TextInput } from 'react-native'
import { Card } from '../../components/ui/Card'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { useState } from 'react'
import { View } from 'react-native'

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })


  return (
    <CustomView margin >
        <Title 
            text='Text Inputs' safe
        />

        <Card>
            <TextInput 
                style={ globalStyles.input }
                placeholder='Full Name'
                autoCapitalize='words'
                autoCorrect={ false }
                onChangeText={ value => setForm({...form, name: value}) }
            />

            <TextInput 
                style={ globalStyles.input }
                placeholder='Email'
                autoCapitalize='none'
                autoCorrect={ false }
                keyboardType='email-address'
                onChangeText={ value => setForm({...form, email: value}) }
            />

            <TextInput 
                style={ globalStyles.input }
                placeholder='Phone'
                autoCapitalize='none'
                autoCorrect={ false }
                keyboardType='phone-pad'
                onChangeText={ value => setForm({...form, phone: value}) }
            />
        </Card>

        <View style={{ height: 10 }} />

        <Card>
            <Text>{ JSON.stringify( form, null, 2) }</Text>
        </Card>
    </CustomView>
  )
}