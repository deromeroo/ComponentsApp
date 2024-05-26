import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { CustomView } from "../../components/ui/CustomView"
import { Card } from "../../components/ui/Card";
import { CustomSwitch } from "../../components/ui/CustomSwitch";
import { Separator } from "../../components/ui/Separator";

export const SwitchScreen = () => {

  const { top } = useSafeAreaInsets()

  const [ state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })


  return (
    <CustomView style={{ marginTop: top + 10, paddingHorizontal: 10}}>
      <Card>
        <CustomSwitch 
          isOn={ state.isActive }
          onChange={ (value) => setState({...state, isActive: value}) }
          text="On?"
        />

        <Separator />

        <CustomSwitch 
          isOn={ state.isHungry }
          onChange={ (value) => setState({...state, isHungry: value}) }
          text="Hungry?"
        />

        <Separator />

        <CustomSwitch 
          isOn={ state.isHappy }
          onChange={ (value) => setState({...state, isHappy: value}) }
          text="Happy?"
        />
      </Card>
    </CustomView>
  )
}
