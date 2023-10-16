//External Imports
import { View, Text, ScrollView, ImageBackground, Image, Alert } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RenderHTML, { defaultSystemFonts } from "react-native-render-html";

//Local Imports
import type { PostReadProps } from "../../navigation/StackRoute/RootRoute";
import { CONSTANTS_DIMENSTION } from "../../util";

//Static Imports
import { globalFilter, globalAlign, globalStyle } from "../../styles";

//FORTEST Imports
import image from "../../assets/samples/Betti.png"
import image2 from "../../assets/samples/Daleth.jpg"

function PostReadScreen({ route, navigation }: PostReadProps): JSX.Element {

    const param = route.params;

    const { title, content, fontFamily } = GetPostContent()
    const systemFonts = [...defaultSystemFonts, fontFamily];

    return(
        <View>
            <ScrollView style={{height:'100%', backgroundColor:'#ddd'}}>
                <View style={{height:'auto'}}>
                    <View id="title">
                        <ImageBackground source={image} style={{width:'auto', height:150}}>
                            <View style={{...globalFilter.darken, ...globalAlign.fill_contentCenter}}>
                                <Text style={{color:'white', fontSize:25, fontWeight:'500', textAlign:'center'}}>{title}</Text>
                                <Text style={{color:'white', fontSize:11}}>{param?.postId}</Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View id='postAction' style={{flexDirection:'row', width:'100%', height:50, backgroundColor:'#fff', borderRadius:10, marginTop:7, padding:10, justifyContent:'space-around'}}>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} onTouchEnd={() => {Alert.alert('Like')}}>
                            <MaterialCommunityIcons name="heart" color={'#c01718'} size={15} /><Text style={{color: '#c01718'}} >Like</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} onTouchEnd={() => {Alert.alert('Save')}}>
                            <MaterialCommunityIcons name="star" color={'#ccc'} size={15} /><Text style={{color: '#ccc'}}>Save</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} onTouchEnd={() => {Alert.alert('View')}}>
                            <MaterialCommunityIcons name="comment-outline" color={'#ccc'} size={15} /><Text style={{color: '#ccc'}}>Comment</Text>
                        </View>
                    </View>

                    <View id='displayContent' style={globalAlign.fill_contentTopLeft}>
                        <View style={{width:'100%', backgroundColor:'#fff', borderRadius:10, marginTop:7, padding:10}}>
                        {
                            content.map((data, index)=>{
                                if(typeof(data) === 'string'){
                                    return(
                                        <View key={index}>
                                            <RenderHTML source={{html: data}} contentWidth={ CONSTANTS_DIMENSTION.screenWidth } tagsStyles={{ p: { fontFamily: fontFamily, }}} systemFonts={systemFonts} />
                                        </View>
                                    )
                                
                                }
                                else if(typeof(data) === 'number'){
                                    return(
                                        <Image key={index} style={{width:'100%', height:300, marginVertical:10
                                        }} source={data} />
                                    )
                                }
                            })
                        }
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

function GetPostContent() {
    console.log('Pass Sample Data');

    return(
        {
            title: '「 Item A : Title 」',
            content: [
                '<p style="color:#000000">Humbly represent Ink for permanent pencil <strong><span style="color:#c01718">「LAMI Edition : 200ml」</span></strong> : Color black / red</p>', 
                image, 
                '<p style="color:#000000;">Game Item Dagger <strong><i>"Damascus Dagger"</strong></i>for Warrior from Persia, Meiester <strong>Johnson</strong>created this item</p>', 
                image2,
                '<p style="color:#000000">Humbly represent Ink for permanent pencil <strong><span style="color:#c01718">「LAMI Edition : 200ml」</span></strong> : Color black / red</p>', 
                image, 
                '<p style="color:#000000;">Game Item Dagger <strong><i>"Damascus Dagger"</strong></i>for Warrior from Persia, Meiester <strong>Johnson</strong>created this item</p>',  
                image2,
            ],
            fontFamily: 'TwCenMT'
        }
    )
}

export { PostReadScreen };