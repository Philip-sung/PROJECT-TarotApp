import { StyleSheet } from "react-native";
import { globalColor } from "../../styles";

const pathWorkingTreeStyle = StyleSheet.create({
    subjectTitle: {margin:10, fontSize:20, fontWeight:'700', color:'#c01718'},
    subjectBoundBox: {flexDirection:'row', width:'100%', borderWidth:2, borderRadius: 20, borderColor:'#c01718', padding: 10},
    classConquered: {flexDirection: 'row', marginBottom: 10},
    classUnconquered: {flexDirection: 'row', marginBottom: 10, opacity:0.5},
    classLevelText: {margin:6, fontSize:9, fontWeight:'700', color:'#000'},
    classNameText: {margin:4, fontSize:14, fontWeight:'700', color:'#000'},

    historyContentText: {fontSize:12, marginBottom:6, color:globalColor.basicFont},

})

export { pathWorkingTreeStyle };