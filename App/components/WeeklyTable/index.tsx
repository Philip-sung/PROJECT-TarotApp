//External Imports
import { Text, View } from "react-native";

//Local Imports
import { myAcademyIcon } from "../../assets/icon/myAcademy";

function WeeklyTable(): JSX.Element {
    return(
        <View style={{width:'100%', height:'100%', flexDirection:'column'}}>
            <View style={{margin:1, width:'100%', height:'30%', flexDirection:'row', backgroundColor:'#464', borderRadius:10, marginBottom:3}}>
                <Text style={{color:'#fff', paddingLeft:10, paddingTop: 3, fontWeight:'700'}}>Notice</Text>
            </View>
            <View style={{margin:1, width:'100%', height:'10%', flexDirection:'row'}}>
                <View style={{margin: 2, backgroundColor:'#ccc',width:'13%', height:'100%', alignItems:'center',justifyContent:'center', borderRadius:4}}><Text style={{fontSize:10}}>MON</Text></View>
                <View style={{margin: 2, backgroundColor:'#ccc',width:'13%', height:'100%', alignItems:'center',justifyContent:'center', borderRadius:4}}><Text style={{fontSize:10}}>TUE</Text></View>
                <View style={{margin: 2, backgroundColor:'#ccc',width:'13%', height:'100%', alignItems:'center',justifyContent:'center', borderRadius:4}}><Text style={{fontSize:10}}>WED</Text></View>
                <View style={{margin: 2, backgroundColor:'#ccc',width:'13%', height:'100%', alignItems:'center',justifyContent:'center', borderRadius:4}}><Text style={{fontSize:10}}>THU</Text></View>
                <View style={{margin: 2, backgroundColor:'#ccc',width:'13%', height:'100%', alignItems:'center',justifyContent:'center', borderRadius:4}}><Text style={{fontSize:10}}>FRI</Text></View>
                <View style={{margin: 2, backgroundColor:'#224c98',width:'13%', height:'100%', alignItems:'center',justifyContent:'center', borderRadius:4}}><Text style={{fontSize:10, color:'#fff'}}>SAT</Text></View>
                <View style={{margin: 2, backgroundColor:'#c01718',width:'13%', height:'100%', alignItems:'center',justifyContent:'center', borderRadius:4}}><Text style={{fontSize:10, color:'#fff'}}>SUN</Text></View>
            </View>
            <View style={{margin:1, width:'100%', height:'30%', flexDirection:'row'}}>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4, alignItems:'center', justifyContent:'center'}}><Text style={{textAlign:'right', width:'100%', fontSize:10, color:'#000'}}>17</Text>{myAcademyIcon['YogaPractice_Red']}{myAcademyIcon['Alchemia_Red']}</View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4, alignItems:'center', justifyContent:'center'}}><Text style={{textAlign:'right', width:'100%', fontSize:10, color:'#000'}}>18</Text>{myAcademyIcon['YogaPractice_Red']}{myAcademyIcon['Alchemia_Red']}</View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4, alignItems:'center', justifyContent:'center'}}><Text style={{textAlign:'right', width:'100%', fontSize:10, color:'#000'}}>19</Text>{myAcademyIcon['YogaTheory_Red']}{myAcademyIcon['Mythology_Red']}</View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>20</Text></View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>21</Text></View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>22</Text></View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>23</Text></View>
            </View>
            <View style={{margin:1, width:'100%', height:'30%', flexDirection:'row'}}>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>24</Text></View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>25</Text></View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>26</Text></View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>27</Text></View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>28</Text></View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>29</Text></View>
                <View style={{margin: 2, backgroundColor:'#fff',width:'13%', height:'100%', padding:3, borderColor:'#bbb',  borderWidth:1,  borderRadius:4}}><Text style={{textAlign:'right', fontSize:10, color:'#000'}}>30</Text></View>
            </View>
        </View>
    )
}

export { WeeklyTable };