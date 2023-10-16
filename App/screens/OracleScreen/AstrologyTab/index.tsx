//External Imports
import { View } from 'react-native';

//Local Imports
import { Horoscope } from '../../../components/Horoscope';
import { HoroscopeUserInfo } from './HoroscopeUserInfo';
import { globalStyle } from '../../../styles';

function AstrologyTab(): JSX.Element {
    return(
        <View style={globalStyle.outerViewWithTab}>
            <Horoscope />
            <HoroscopeUserInfo />
        </View>
    )
}

export { AstrologyTab };