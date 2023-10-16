//External Imports
import { View, Text, ScrollView } from "react-native";

//Local Imports
import { ImgLink } from "../../../components/Displayer/ImgLink";

//FORTEST Imports
import A from '../../../assets/samples/ICECRYSTAL.png'
import { globalStyle } from "../../../styles";

function MySpaceTab(): JSX.Element {
    return(
        <View style={globalStyle.outerViewWithTab}>
            <View id="MyInfo" style={{width:'100%', height:'25%', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>

                <View style={{backgroundColor:'#799',marginLeft:20, width:80, height:80, borderRadius:40}}>

                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column', justifyContent:'flex-end', alignItems:'center', marginRight:30}}>
                        <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>13</Text>
                        <Text style={{fontSize:14, fontWeight:'400', color:'#888'}}>팔로우</Text>
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'flex-end', alignItems:'center', marginRight:30}}>
                        <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>8</Text>
                        <Text style={{fontSize:14, fontWeight:'400', color:'#888'}}>팔로잉</Text>
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'flex-end', alignItems:'center', marginRight:30}}>
                        <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>12</Text>
                        <Text style={{fontSize:14, fontWeight:'400', color:'#888'}}>기록</Text>
                    </View>
                </View>
            </View>

            <View id="Records" style={{width:'100%', height:'75%'}}>
                <ScrollView style={{width:'100%', height:'100%'}}>
                    <View style={{width:'100%', height:'auto', flexDirection:'row', flexWrap:'wrap'}}>
                        <ImgLink image={A} />
                        <ImgLink image={A} />
                        <ImgLink image={A} />
                        <ImgLink image={A} />
                        <ImgLink image={A} />
                        <ImgLink image={A} />
                        <ImgLink image={A} />
                        <ImgLink image={A} />
                        <ImgLink image={A} />
                        <ImgLink image={A} />
                        <ImgLink image={A} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export { MySpaceTab };