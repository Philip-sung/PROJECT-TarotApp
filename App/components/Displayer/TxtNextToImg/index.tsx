//External Imports
import { ImageSourcePropType, Text } from "react-native";
import { Image, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import type { PostReadProps } from "../../../navigation/StackRoute/RootRoute";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function TxtNextToImg(props: {title:String, content:String, image: ImageSourcePropType}): JSX.Element {
    type PostReadNavigationProp = PostReadProps['navigation']
    const navigation = useNavigation<PostReadNavigationProp>();
    
    return(
        <View style={{width: '100%', height:100, flexDirection:'row', margin:5, marginBottom:15}} onTouchEnd={() => {navigation.navigate('PostRead', {postId: "POSTCODE123"})}}>
            <View style={{marginRight: 2,backgroundColor:'red', flex:0.3, borderRadius: 10}}>
                <Image source={props.image} style={{width:'100%', height:'100%', borderRadius: 10}} resizeMode='cover' />
            </View>
            <View style={{backgroundColor:'rgba(0,0,0,0)', flex:0.7, borderRadius: 10}}>
                <View style={{height: 85, overflow: 'hidden'}}>
                    <Text style={{margin: 3, color: '#000', fontSize: 16, fontWeight: '700'}}>{props.title}</Text>
                    <Text style={{margin: 3, color: '#000'}}>{props.content}</Text>
                </View>
                <View style={{borderTopColor: '#ccc', borderTopWidth:1, flexDirection:'row', justifyContent:'flex-end'}}>
                    <MaterialCommunityIcons name="cards-heart" color={'#fc6c85'} size={14} style={{margin: 0}} /><Text style={{fontSize: 12, marginRight: 20, color:'#000'}}>Like</Text>
                    <MaterialCommunityIcons name="account" color={'#668'} size={16} style={{margin: 0}} /><Text style={{fontSize: 12, marginRight: 20, color:'#000'}}>View</Text>
                    <MaterialCommunityIcons name="comment-outline" color={'#668'} size={13} style={{marginTop: 2}} /><Text style={{fontSize: 12, marginRight: 20, color:'#000'}}>Comment</Text>
                </View>
            </View>
        </View>
    )
}

export { TxtNextToImg };