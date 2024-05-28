import prompt from "react-native-prompt-android"

interface Options {
    title: string
    subTitle?: string
    buttons: PromptButtons[]
    promptType?: "plain-text" | "secure-text"
    placeholder?: string
    defaultValue?: string
}

interface PromptButtons {
    text: string
    onPress: () => void
    style?: "cancel" | "default" | "destructive"
}

export const showPromt = ({ 
    title, 
    subTitle,
    buttons,
    promptType = 'plain-text',
    placeholder,
    defaultValue
}: Options) => {

    prompt(
        title,
        subTitle,
        buttons,
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeholder
        }
    )

    //! Navite Code
    // Alert.prompt(
    //     'Email',
    //     'Add your email',
    //     (value:string) => console.log(value),
    //     'secure-text',
    //     'Default Value',
    //     'number-pad'
    // )
}