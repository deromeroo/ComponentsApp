import { KeyboardAvoidingView, Platform, Text, TextInput } from 'react-native'
import { Card } from '../../components/ui/Card'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { useContext, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ThemeContext } from '../../context/ThemeContext'

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const {colors} = useContext(ThemeContext)


  return (
    <KeyboardAvoidingView
        behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
    >
        <ScrollView>
            <CustomView margin >
                <Title 
                    text='Text Inputs' safe
                />

                <Card>
                    <TextInput 
                        style={ globalStyles.input }
                        placeholder='Full Name'
                        placeholderTextColor={ '#bcbcbc'}
                        autoCapitalize='words'
                        autoCorrect={ false }
                        onChangeText={ value => setForm({...form, name: value}) }
                    />

                    <TextInput 
                        style={ globalStyles.input }
                        placeholder='Email'
                        placeholderTextColor={ '#bcbcbc'}
                        autoCapitalize='none'
                        autoCorrect={ false }
                        keyboardType='email-address'
                        onChangeText={ value => setForm({...form, email: value}) }
                    />

                    <TextInput 
                        style={ globalStyles.input }
                        placeholder='Phone'
                        placeholderTextColor={ '#bcbcbc'}
                        autoCapitalize='none'
                        autoCorrect={ false }
                        keyboardType='phone-pad'
                        onChangeText={ value => setForm({...form, phone: value}) }
                    />
                </Card>

                <View style={{ height: 10 }} />

                <Card>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                    <Text style={{ color: colors.text }}>{ JSON.stringify( form, null, 2) }</Text>
                </Card>
            </CustomView>

            <View style={{ height: 20, backgroundColor: colors.background }} />
        </ScrollView>
    </KeyboardAvoidingView>
  )
}