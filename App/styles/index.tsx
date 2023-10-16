import { StyleSheet } from "react-native"

const staticStyle = StyleSheet.create({
    smallIcon: {
        width:15,
        height:15,
        marginRight: -20,
    }
})

const globalStyle = StyleSheet.create({
    outerViewNoMargin: {
        width:'95%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingBottom:70
    },
    outerViewNoTab: {
        paddingTop:85,
        width:'95%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingBottom:70
    },
    outerViewWithTab: {
        paddingTop:120,
        width:'95%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingBottom:70
    },
    outerViewNoMarginNoBottomMargin: {
        width:'95%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'flex-start',
    },

    innerViewWrap: {
        width: '100%',
        flexDirection:'row', flexWrap:'wrap', alignItems: 'flex-start', justifyContent: 'space-between'
    },

    RoundedBorderSmall:{
        borderRadius:10
    }
})

const globalColor = {
    basicFont: '#000',
    invertedFont: '#fff',
    tarotTheme: '#003063',
    transparentBlack:'rgba(0,0,0,0.6)',
}

const globalAlign = StyleSheet.create({
    fill_contentCenter: {
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    fill_contentTopRight: {
        width:'100%',
        height:'100%',
        justifyContent:'flex-start',
        alignItems:'flex-end',
    },
    fill_contentTopLeft: {
        width:'100%',
        height:'100%',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    fill_contentBottomRight: {
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    fill_contentBottomLeft: {
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
        alignItems:'flex-start',
    }
})

const globalFilter = StyleSheet.create({
    darken:{ backgroundColor:'rgba(0,0,0,0.5)' },
    darkenLight:{ backgroundColor:'rgba(0,0,0,0.4)' }
})

export { globalStyle, globalColor, globalAlign, globalFilter, staticStyle };