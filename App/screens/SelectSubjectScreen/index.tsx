//External Imports
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyle } from "../../styles";

function SelectSubjectScreen(props: {onTouch: Function}): JSX.Element {


    return(
        <View style={{width:'100%', height:'100%', backgroundColor:'#fff'}}>
            <Text>Components Comes in here</Text>

            <TouchableOpacity style={{width:100, height:100, backgroundColor:'#000'}} onPress={() => {props.onTouch();}}><Text>CLOSE</Text></TouchableOpacity>
        </View>
    )
}

export { SelectSubjectScreen }