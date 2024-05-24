import { CustomView } from "../../components/ui/CustomView"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export const SwitchScreen = () => {

  const { top } = useSafeAreaInsets()

  return (
    <CustomView style={{ marginTop: top + 10, paddingHorizontal: 10}}>

    </CustomView>
  )
}
