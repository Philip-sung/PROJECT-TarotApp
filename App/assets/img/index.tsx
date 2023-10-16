//External Imports
import { Image,Dimensions } from 'react-native';

//Static Imports
import OIPLOGOTRANSPARENT from './OIP_Logo_230309.png';
import { WAITE_DECK } from './TarotImage/WaiteDeck';
import { CATEGORY_IMAGE } from './CategoryImage';

//Test
import TEST_MAIN_IMAGE  from './TestMainImage.png';

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

const STATIC_IMAGE = {
    OIP_LOGO_RED_TRANSPARENT: <Image source={OIPLOGOTRANSPARENT} style={{width: 120, height: 30, alignSelf:'center', marginTop:30 }} />,
    WAITE_DECK: WAITE_DECK,
    CATEGORY_IMAGE:CATEGORY_IMAGE,

    MAIN_IMAGE: <Image source={TEST_MAIN_IMAGE} style={{width: windowWidth, height:windowHeight * 8 / 11, resizeMode:'cover'}} />,
}

export { STATIC_IMAGE }