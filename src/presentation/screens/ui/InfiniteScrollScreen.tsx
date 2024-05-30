
import { useState } from "react"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { FlatList, Text } from "react-native"
import { colors } from "../../../config/theme/theme"

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5])

    const loadMore = () => {
        const newArray = Array.from( {length: 5}, (_, i) => numbers.length + i )
        setNumbers([...numbers, ...newArray])
    }

  return (
    <CustomView margin>
        <Title text="Infinite Scroll" safe/>

        <FlatList 
            data={ numbers }
            onEndReached={ loadMore }
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={ 0.6 }
            keyExtractor={ (item) => item.toString() }

            renderItem={ ({ item }) => 
            <Text 
                style={{
                    height: 300,
                    backgroundColor: colors.primary,
                    color: 'white',
                    marginVertical: 10,
                    borderRadius: 5
                }}>
            {item}</Text>}
        />
    </CustomView>
  )
}
