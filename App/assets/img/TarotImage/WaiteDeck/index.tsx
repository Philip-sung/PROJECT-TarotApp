//External Imports
import { Image } from 'react-native';

//Static Imports
import { CardStyle } from './styles';
import card_01 from './01TheFool.png';
import card_02 from './02TheMaigician.png'

const WAITE_DECK = {
    card_01: <Image source={card_01} style={CardStyle.smallCard} />,
    card_02: <Image source={card_02} style={CardStyle.smallCard} />
}

export { WAITE_DECK }