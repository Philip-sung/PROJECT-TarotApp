//External Imports
import { View, Text, Image, Button, Pressable } from 'react-native';

//Local Imports
import { TarotDeck } from '../../../components/TarotDeck';

function TarotTab(): JSX.Element {
    return(
        <View style={{ flex: 1,flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
            <TarotDeck />
        </View>
    )
}

export { TarotTab };