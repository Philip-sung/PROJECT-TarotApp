import { Alert, Text, View } from "react-native";

function HoroscopeUserInfo():JSX.Element {
    return(
        <View style={{width:'100%', marginTop: 15, marginBottom: 25, height: 100, padding:10 , borderColor:'#c01718', borderWidth:1, borderRadius:5}} 
            onTouchStart={() => {Alert.alert("Import User or Set Time")}}>
            <Text style={{color:'#000', fontWeight:"700"}}>Philip Sung</Text>
            <Text style={{color:'#000'}}>1996 . 01 . 07 22:25 (GMT 09:00)</Text>
            <Text style={{color:'#000'}}>USA, Illinois, Chicago, 41°44'58"W 87°44'58"N </Text>
            <Text style={{color:'#000'}}>Whole Sign House</Text>
        </View>
    )
}

export { HoroscopeUserInfo };