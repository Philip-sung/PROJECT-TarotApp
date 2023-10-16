import { View, Alert, ImageBackground, ImageSourcePropType } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ImgLink(props: {image: ImageSourcePropType}): JSX.Element {

    return(
        <View style={{width: '31%', height: 120, borderRadius: 10, margin: 3}} onTouchEnd={() => {Alert.alert("to Feed")}}>
            <ImageBackground source={props.image} style={{width:'100%', height:'100%'}} imageStyle={{borderRadius:10}} resizeMode='cover'>

            </ImageBackground>
        </View>
    )
}

export { ImgLink };