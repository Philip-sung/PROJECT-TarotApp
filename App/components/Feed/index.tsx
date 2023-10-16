//External Imports
import { View, Text, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Local Imports
import { CONSTANTS_DIMENSTION } from "../../util";

// Imports
import FeedImg from '../../assets/samples/ICECRYSTAL.png'


const TextAlt = {
    subject: "TestSubject",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices vel nisi ut tristique."
}


function Feed(): JSX.Element {
    return(
        <View style={{marginVertical:10, width:"100%", height:(CONSTANTS_DIMENSTION.windowHeight - CONSTANTS_DIMENSTION.bottomBarHeight - 130), backgroundColor:'#fff', borderRadius: 10, paddingVertical: 4}}>
            <View style={{marginHorizontal: 10, height:'10%',flexDirection:'row', padding:0, alignItems:'center', justifyContent:'space-between'}}>
                <Text style={{fontSize:16, fontWeight:'700', color:'#000'}}>{TextAlt.subject}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:12, fontWeight:'400', color:'#000'}}>Kim Pelius</Text>
                    <View style={{marginLeft:5, width: 25, height: 25, backgroundColor:'#936', borderRadius:15}}></View>
                </View>
            </View>
            <View style={{height:'70%'}}>
                <Image source={FeedImg} style={{width:'100%', height:'100%'}} resizeMode='cover'/>
            </View>
            <View style={{height:'20%', margin: 10}}>
                <View style={{marginBottom:7, flexDirection:'row', height:'20%', justifyContent:'flex-start'}}>
                    <MaterialCommunityIcons name="comment-outline" color={'#888'} size={20} style={{marginLeft: 0}} /><Text style={{color:'#555'}}>7</Text>
                    <MaterialCommunityIcons name="account" color={'#888'} size={20} style={{marginLeft: 15}} /><Text style={{color:'#555'}}>218</Text>
                    <MaterialCommunityIcons name="cards-heart" color={'#f33'} size={20} style={{marginLeft: 15}} /><Text style={{color:'#555'}}>16</Text>
                    <MaterialCommunityIcons name="share" color={'#888'} size={20} style={{marginLeft: 15}} /><Text style={{color:'#555'}}>5</Text>
                </View>
                <Text style={{color:'#222'}}>{TextAlt.content}</Text>
            </View>
        </View>
    )
}

function FeedContainer(props : {children: React.ReactNode;}): JSX.Element {
    return(
        <View style={{width: '100%', alignItems:'center'}}>
            {props.children}
        </View>
    )
}

export { Feed, FeedContainer };