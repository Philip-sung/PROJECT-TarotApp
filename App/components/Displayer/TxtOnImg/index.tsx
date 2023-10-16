//External Imports
import { View, Text, ImageBackground, ImageSourcePropType } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

//Local Imports
import type { ListStyleLoaderProps } from "../../../navigation/StackRoute/RootRoute";

function TxtOnImg(props: {title:String, author?:String, content:String, image: ImageSourcePropType}): JSX.Element {

    type ListStyleLoaderNavigationProp = ListStyleLoaderProps['navigation']
    const navigation = useNavigation<ListStyleLoaderNavigationProp>();

    return(
        <View style={{width: '48%', height: 200, borderRadius: 10, margin: 3}} onTouchEnd={() => {navigation.navigate('ListStyleLoader')}}>
            <ImageBackground source={props.image} style={{width:'100%', height:'100%'}} imageStyle={{borderRadius:10}} resizeMode='cover'>
                <View style={{width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.5)', borderRadius: 10, justifyContent:'flex-end'}}>
                    <View style={{flexDirection:'row', margin: 5}}>
                        <MaterialCommunityIcons name="shield-star-outline" color={'#ff0'} size={15} /><Text style={{color: '#fff'}}>{props.author}</Text>
                    </View>
                    <Text style={{fontSize: 20, margin: 5, fontWeight:'600', color: '#fff'}}>{props.title}</Text>
                    <Text style={{fontSize: 12, margin: 5, fontWeight:'600', color: '#fff'}}>{props.content}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export { TxtOnImg };