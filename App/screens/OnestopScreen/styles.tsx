import { StyleSheet } from "react-native"
import { globalColor } from "../../styles"

const onestopStyle = StyleSheet.create({
    title: {
        fontSize:16,
        fontWeight:'700',
        color:globalColor.basicFont,
    },
    subtitle: {
        textAlign:'center',
        verticalAlign:'middle',
        fontSize:15,
        fontWeight:'700',
        color:globalColor.invertedFont, 
    },
    content: {
        textAlign:'center',
        verticalAlign:'middle',
        fontSize:10,
        fontWeight:'400',
        color:globalColor.invertedFont, 
    },

    CollectionTitle: {
        fontSize:19,
        fontWeight:'700',
        color:globalColor.basicFont,
    },
    todaysCollectionImageFrame: {
        width:'100%',
        height: 250,
        backgroundColor: '#000',
        borderRadius:10,
    },
    todaysCollectionTextFrame: {
        paddingVertical: 5,
        width:'100%',
        height:'auto',
        backgroundColor:globalColor.transparentBlack,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },

    newProgramImageFrame: {
        width:'100%',
        height: 130,
        backgroundColor: '#000',
        borderTopLeftRadius:10, 
        borderTopRightRadius: 10
    },
    newProgramTextFrame: {
        paddingVertical: 10,
        width:'100%',
        height:70,
        backgroundColor:globalColor.transparentBlack,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },

    newItemFrame: {
        width:130, 
        height: 170,
        borderRadius:10, 
        marginRight:10
    },
    itemCategoryFrameLeft: {
        width:'49%',
        height: 70,
        borderRadius:10,
        marginRight:'2%',
        marginBottom:5,
    },
    itemCategoryFrameRight: {
        width:'49%',
        height: 70,
        borderRadius:10,
        marginRight:0,
        marginBottom:5,
    }
})

export { onestopStyle };