//External Imports
import { View, Text, ScrollView, ImageBackground, Image, ImageSourcePropType } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Local Imports
import { globalAlign, globalFilter, globalStyle } from '../../styles';
import { onestopStyle } from './styles';
import { NavigationBox } from '../../components/Units';

//Static Imports
import { CATEGORY_IMAGE } from '../../assets/img/CategoryImage';

//FORTEST Imports
import A from '../../assets/samples/Betti.png';
import B from '../../assets/samples/isidis.jpg';
import C from '../../assets/samples/enochian.jpg';
import D from '../../assets/samples/Daleth.jpg';
import E from '../../assets/samples/sigil.jpg';
import F from '../../assets/samples/TodaysCollection.png'


const FORTESTDATA = {
    todaysCollectionTitle: 'MyTestCollection',
    todaysCollectionContent: 'Suspendisse blandit enim congue augue porta, id vulputate nunc volutpat.',
    programTitle: 'MyTestProgram',
    programContent: `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus pretium lorem eget tempus fermentum.`,
}


function OnestopScreen(): JSX.Element {

    return(
        <View style={globalStyle.outerViewNoTab}>
            <ScrollView style={{width:'100%'}}>

                <TodaysCollectionContainer />
                <NewProgramContainer />
                <NewItemContainer />    
                <ItemCategoryContainer />

            </ScrollView>
        </View>
    );
}

function TodaysCollectionContainer(): JSX.Element {

    return(
        <View>

            <TodaysCollection 
                image={F} 
                title={FORTESTDATA.todaysCollectionTitle}
                content={FORTESTDATA.todaysCollectionContent}
            />

        </View>
    )
}

function TodaysCollection(props: {image: ImageSourcePropType, title:string, content:string}): JSX.Element {
    return(
        <View style={{width:'100%',height:'auto', marginBottom:25}}>
            <View style={onestopStyle.todaysCollectionImageFrame}>
                <NavigationBox context='ListStyleLoader'>
                    <ImageBackground source={props.image} style={globalAlign.fill_contentBottomLeft} imageStyle={{borderRadius:10}} resizeMode='cover'>
                        <View style={onestopStyle.todaysCollectionTextFrame} >
                            <Text style={{marginBottom:5, ...onestopStyle.subtitle}}>{props.title}</Text>
                            <Text style={{marginBottom:3, ...onestopStyle.content}}>{props.content}</Text>
                        </View>
                    </ImageBackground>
                </NavigationBox>
            </View>
        </View>
    )
}

function NewProgramContainer(): JSX.Element {

    return(
        <View>
            <View style={{flexDirection:'row'}}>
                <Text style={onestopStyle.title}>
                    NEW PROGRAM
                </Text>
                <MaterialCommunityIcons name="circle-medium" color={'#c01718'} size={12} />
            </View>

            <NewProgram 
                image={E} 
                overlayText='M Y   M O T T O' 
                title={FORTESTDATA.programTitle} 
                content={FORTESTDATA.programContent}
            />

        </View>
    )
}

function NewProgram(props: {image: ImageSourcePropType, overlayText?:string, title:string, content:string}): JSX.Element {
    return(
        <View style={{width:'100%', height:200, marginTop:5}}>
            <NavigationBox context='PostRead'>
                <View style={onestopStyle.newProgramImageFrame}>
                    <ImageBackground source={props.image} style={globalAlign.fill_contentCenter} imageStyle={{borderTopLeftRadius:10, borderTopRightRadius: 10}} resizeMode='cover'>
                        <Text style={{fontSize: 24, fontWeight:'900', color:'rgba(255,255,255,0.8)'}}>{props.overlayText}</Text>
                    </ImageBackground>
                </View>
                <View style={onestopStyle.newProgramTextFrame} >
                    <Text style={{marginBottom:5, ...onestopStyle.subtitle}}>{props.title}</Text>
                    <Text style={onestopStyle.content}>{props.content}</Text>
                </View>
            </NavigationBox>
        </View>
    )
}

function NewItemContainer(): JSX.Element {
    return(
        <View>
            <View style={{flexDirection:'row', marginTop: 20}}>
                <Text style={onestopStyle.title}>
                    NEW ITEM
                </Text>
                <MaterialCommunityIcons name="circle-medium" color={'#c01718'} size={12} />
            </View>
            
            <ScrollView horizontal={true} style={{width:'100%', marginTop:5}}>
                <NewItem image={A} productName='Item A : Ink' tag='tagTopBlack' />
                <NewItem image={B} productName='Item B : Flower' tag='tagTopWhite' />
                <NewItem image={C} productName='Item C : Bracelet' tag='tagTopWhite' />
                <NewItem image={D} productName='Item D : Dagger' tag='tagBottomRed' />
            </ScrollView>
        </View>
    )
}

function NewItem(props: {
        image:ImageSourcePropType, 
        productName:string, 
        tag:'tagTopBlack' | 'tagTopWhite' | 'tagTopRed' | 'tagBottomBlack' | 'tagBottomWhite' | 'tagBottomRed'
    }): JSX.Element {

    const tagBlack = {width:'auto', backgroundColor:'rgba(0,0,0,0.5)', padding: 2, margin: 10, right:-13, color:'#fff', fontSize:10};
    const tagWhite = {width:'auto', backgroundColor:'rgba(200,200,200,0.7)', padding: 2, margin: 10, right:-13, color:'#000', fontSize:10};
    const tagRed = {width:'auto', backgroundColor:'rgba(200,0,0,0.7)', padding: 2, margin: 10, right:-13, color:'#fff', fontSize:10};
    
    let tagStyle: object = {};
    let tagLocation: object = {};
    
    if(props.tag === 'tagTopBlack') { tagStyle = tagBlack; tagLocation = globalAlign.fill_contentTopRight; }
    else if(props.tag === 'tagTopWhite') { tagStyle = tagWhite; tagLocation = globalAlign.fill_contentTopRight; }
    else if(props.tag === 'tagTopRed') { tagStyle = tagRed; tagLocation = globalAlign.fill_contentTopRight; }
    else if(props.tag === 'tagBottomBlack') { tagStyle = tagBlack; tagLocation = globalAlign.fill_contentBottomRight; }
    else if(props.tag === 'tagBottomWhite') { tagStyle = tagWhite; tagLocation = globalAlign.fill_contentBottomRight; }
    else if(props.tag === 'tagBottomRed') { tagStyle = tagRed; tagLocation = globalAlign.fill_contentBottomRight; }

    return(
        <View style={onestopStyle.newItemFrame}>
            <NavigationBox context='PostRead'>
                <ImageBackground source={props.image} style={tagLocation} imageStyle={{borderRadius:10}} resizeMode='cover'>
                    <Text style={tagStyle}>{props.productName}</Text>
                </ImageBackground>
            </NavigationBox>
        </View>
    )
}

function ItemCategoryContainer(): JSX.Element {
    return(
        <View style={{marginTop: 20}}>
            <Text style={onestopStyle.title}>
                CATEGORY
            </Text>

            <View style={{flexWrap:'wrap', flexDirection:'row', width:'100%', marginTop:5}}>
                <ItemCategory index={1} image={CATEGORY_IMAGE.Love} nameKorean='카테고리 A' nameEnglish='Category A' />
                <ItemCategory index={2} image={CATEGORY_IMAGE.Concentration} nameKorean='카테고리 B' nameEnglish='Category B' />
                <ItemCategory index={3} image={CATEGORY_IMAGE.Relax} nameKorean='카테고리 C' nameEnglish='Category C' />
                <ItemCategory index={4} image={CATEGORY_IMAGE.Wealth} nameKorean='카테고리 D' nameEnglish='Category D' />
                <ItemCategory index={5} image={CATEGORY_IMAGE.Vanishing} nameKorean='카테고리 E' nameEnglish='Category E' />
                <ItemCategory index={6} image={CATEGORY_IMAGE.Materialize} nameKorean='카테고리 F' nameEnglish='Category F' />
                <ItemCategory index={7} image={CATEGORY_IMAGE.Meditation} nameKorean='카테고리 G' nameEnglish='Category G' />
                <ItemCategory index={8} image={CATEGORY_IMAGE.Offering} nameKorean='카테고리 H' nameEnglish='Category H' />
            </View>
        </View>
    )
}

function ItemCategory(props: {index: number, image:ImageSourcePropType, nameKorean:string, nameEnglish:string}): JSX.Element {
    let categoryLocation: object = (props.index % 2 === 0) ? onestopStyle.itemCategoryFrameRight : onestopStyle.itemCategoryFrameLeft;
    if(props.index % 2 === 0){}

    return(
        <View style={categoryLocation}>
            <NavigationBox context='ListStyleLoader'>
            <ImageBackground source={props.image} style={{width:'100%', height:'100%'}} imageStyle={{borderRadius:10}} resizeMode='cover'>
                <View style={{...globalStyle.RoundedBorderSmall, ...globalAlign.fill_contentCenter, ...globalFilter.darken}}>
                    <Text style={onestopStyle.subtitle}>{props.nameKorean}</Text>
                    <Text style={onestopStyle.content}>{props.nameEnglish}</Text>
                </View>
            </ImageBackground>
            </NavigationBox>
        </View>
    )
}

export { OnestopScreen };