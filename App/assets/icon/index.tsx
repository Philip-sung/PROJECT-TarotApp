//External Imports
import { Image } from 'react-native';

//Local Imports
import { staticStyle } from '../../styles';
import { ARIES, TAURUS, GEMINI, CANCER, LEO, VIRGO, LIBRA, SCORPIO, SAGITTARIUS, CAPRICORN, AQUARIUS, PISCES, SATURN, JUPITER, MARS, SOL, VENUS, MERCURY, LUNA, SOUTHNODE, NORTHNODE, FORTUNA } from './astrology';

//Static Imports
import ICON_EXTERNAL_LINK from './icon_external_link.png';

const STATIC_ICON = {
    EXTERNAL_LINK: <Image source={ICON_EXTERNAL_LINK} style={staticStyle.smallIcon} />,
    
    ARIES: ARIES,
    TAURUS: TAURUS,
    GEMINI: GEMINI,
    CANCER: CANCER,
    LEO: LEO,
    VIRGO: VIRGO,
    LIBRA: LIBRA,
    SCORPIO: SCORPIO,
    SAGITTARIUS: SAGITTARIUS,
    CAPRICORN: CAPRICORN,
    AQUARIUS: AQUARIUS,
    PISCES: PISCES,

    SATURN: SATURN,
    JUPITER: JUPITER,
    MARS: MARS,
    SOL: SOL,
    VENUS: VENUS,
    MERCURY: MERCURY,
    LUNA: LUNA,
    SOUTHNODE: SOUTHNODE,
    NORTHNODE: NORTHNODE,
    FORTUNA: FORTUNA  
};

export { STATIC_ICON }