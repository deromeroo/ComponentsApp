
import { Title } from '../../components/ui/Title'
import { ScrollView } from 'react-native-gesture-handler'
import { RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useContext, useState } from 'react'
import { globalStyles } from '../../../config/theme/theme'
import { ThemeContext } from '../../context/ThemeContext'

export default function PullToRefreshScreen() {

    const [isRefreshing, setIsRefreshing] = useState(false)
    const {colors} = useContext(ThemeContext)
    const { top } = useSafeAreaInsets()

    const onRefresh = () => {
        setIsRefreshing( true )

        setTimeout(() => {
            setIsRefreshing( false )
        }, 3000);
    }

  return (
    <ScrollView
        refreshControl={ <RefreshControl 
            refreshing={ isRefreshing }
            progressViewOffset={ top }
            colors={[colors.primary, 'red', 'orange']}
            onRefresh={ onRefresh }
            // progressBackgroundColor={colors.cardBackground}
        />}

        style={[globalStyles.mainContainer, globalStyles.globalMargin, {backgroundColor: colors.background}]}
    >

        <Title 
            text='Pull To Refresh'
            safe
        />

    </ScrollView>
  )
}