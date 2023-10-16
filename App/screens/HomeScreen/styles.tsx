import { StyleSheet } from 'react-native'
import { globalColor, globalFilter } from '../../styles'

const homeScreenStyle = StyleSheet.create({
    equinoxButton: {marginTop: 10, marginBottom: -20, width:'90%', height: 60, padding:10 ,backgroundColor:'#c01718', borderColor:'#c01718', borderRadius:500},
    equinoxButtonTitle: {color:'#fff', fontWeight:"700", textAlign:'center', fontSize:14},
    equinoxButtonContent: {marginTop:3, paddingHorizontal:25, color:'#fff', fontSize:12, textAlign:'center',lineHeight:20},

    newContainer: {width:'95%', height:'auto', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'},
    newsSubjectFrame: {width:'100%', height:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0)'},
    newsSubjectText: {textAlign:'center', justifyContent:'flex-end', color:globalColor.invertedFont, fontWeight:"700", fontSize: 23},
    newsTextFrame: {...globalFilter.darkenLight ,...{width:'100%', height:'100%', justifyContent:'center'}},
    newsTitleText: {textAlign:'center', justifyContent:'flex-end', color:globalColor.invertedFont, fontWeight:"700", fontSize: 17},
    newsContentText: {textAlign:'center', justifyContent:'flex-end', color:globalColor.invertedFont, fontWeight:"400", fontSize: 13},
})

export { homeScreenStyle };