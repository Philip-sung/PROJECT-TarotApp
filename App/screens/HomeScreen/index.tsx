//External Imports
import { View, Text, Button, Alert, ScrollView, ImageBackground, ImageSourcePropType } from 'react-native';

//Local Import 
import { STATIC_IMAGE } from '../../assets';
import { BlinkingComponent } from '../../components/Units';
import { homeScreenStyle } from './styles';
import { globalStyle } from '../../styles';
import { NavigationBox } from '../../components/Units';
import defaultImage from '../../assets/samples/OIPLOGO.png';

//FORTEST Imports
import SeeWhite from '../../assets/samples/SeeWhite.png';
import DbMKima from '../../assets/samples/DBMKIMA.png';
import MAATGT from '../../assets/samples/2023MG.png';
import OIPLOGO from '../../assets/samples/OIPLOGO.png';
import PANICAUT from '../../assets/samples/PANICAUT.png';
import ICECRYSTAL from '../../assets/samples/ICECRYSTAL.png';
import IENER from '../../assets/samples/IENER.png';
import { CONSTANTS_DIMENSTION } from '../../util';


const FORTESTData = [
    { type:'subject', image:defaultImage, title: "Test Subject", content:'' },
    { type:'horizontalHalf', image:SeeWhite, title: "myTestA", content:'Lorem Ipsum' },
    { type:'quarter', image:ICECRYSTAL, title: "Test Sample", content:'consectetur adipiscing elit' },
    { type:'quarter', image:DbMKima, title: "mySeries", content:'Aenean venenatis' },

    { type:'subject', image:defaultImage, title: "Test Subject 2", content:'' },
    { type:'twoThird', image:MAATGT, title: "RISING", content:'Morbi ultrices vel' },
    { type:'twoThirdVertical', divideFrom: 'third', image:OIPLOGO, title: "Cafe", content:'CAFE OPEN', secondImage:IENER, secondTitle:'GoodText', secondContent:'MyContent' },
    { type:'twoThirdHorizontal', image:PANICAUT, title: "PANICAUT MARITIME", content:'Morbi ultrices vel' },
    { type:'oneThird', image:SeeWhite, title: "augue porta", content:'"Cafe Test"' },
    
    { type:'subject', image:defaultImage, title: "What's Next?", content:'' },
    { type:'verticalHalf', image:SeeWhite, title: "augue porta", content:'Sed dignissim felis eget' },
    { type:'verticalHalf', divideFrom:'half', image:MAATGT, title: "RISING", content:'id vulputate nunc volutpat.\nmauris et magna', secondImage:ICECRYSTAL, secondTitle:'ICE CRYSTAL', secondContent:'MyTestData'  },
    { type:'oneThird', image:OIPLOGO, title: "GoodText", content:'Books' },
    { type:'oneThird', image:DbMKima, title: "Pellentesque habitant", content:'Scholar' },
    { type:'oneThird', image:PANICAUT, title: "PANICAUT", content:'Sold Out' },
]

function HomeScreen(): JSX.Element {

    return(
        <View style={{backgroundColor:'#222', paddingBottom: CONSTANTS_DIMENSTION.bottomBarHeight}}>
            <ScrollView contentContainerStyle={{...globalStyle.outerViewNoMarginNoBottomMargin, width:'100%'}} >

                {STATIC_IMAGE.MAIN_IMAGE}
                

                <View id='EquinoxButton' style={homeScreenStyle.equinoxButton}>
                    <NavigationBox context="Equinox">
                        <Text style={homeScreenStyle.equinoxButtonTitle}>「 Main Page Event 」</Text>
                        <BlinkingComponent>
                            <Text style={homeScreenStyle.equinoxButtonContent}>Enter to event page</Text>
                        </BlinkingComponent>
                    </NavigationBox>
                </View>
                <Text id='FORTEST001' style={{color:'#c01718', marginBottom:10, fontSize: 50}}>. . .</Text>

                <View id='NewsContainer' style={homeScreenStyle.newContainer}>
                    {FORTESTData.map(({type, image, title, content, divideFrom, secondImage, secondTitle, secondContent}, index) => (
                        <NewsFrame key={index} type={type} image={image} title={title} content={content} divideFrom={divideFrom} 
                        secondImage={secondImage || defaultImage} secondTitle={secondTitle} secondContent={secondContent} />
                        )
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

function NewsFrame(props: {image: ImageSourcePropType, type: string, title: string, content: string,
        divideFrom?: string, secondImage?: ImageSourcePropType, secondTitle?: string, secondContent?: string}): JSX.Element {

    let divideSelector: string | undefined = props.divideFrom;
    let box: JSX.Element = <></>;

    let typeSelector: string = props.type;
    let type:object = {};

    const simpleBox: JSX.Element = (
        <ImageBackground source={props.image} resizeMode='cover' style={{width: '100%', height: '100%'}}>
            <NavigationBox context={'PostRead'}>
                <View style={homeScreenStyle.newsTextFrame}>
                    <Text style={homeScreenStyle.newsTitleText}>{props.title}</Text>
                    <Text style={homeScreenStyle.newsContentText}>{props.content}</Text>
                </View>
            </NavigationBox>
        </ImageBackground>
    )
    const dividedHalfBox: JSX.Element = (
        <View style={{width:'100%', height:'100%', flexDirection: 'column', justifyContent:'space-between'}}>
            <View style={{width:'100%', height:'49%'}}>
                <ImageBackground source={props.image} resizeMode='cover' style={{width: '100%', height: '100%'}}>
                    <NavigationBox context={'PostRead'}>
                        <View style={homeScreenStyle.newsTextFrame}>
                            <Text style={homeScreenStyle.newsTitleText}>{props.title}</Text>
                            <Text style={homeScreenStyle.newsContentText}>{props.content}</Text>
                        </View>
                    </NavigationBox>
                </ImageBackground>
            </View>
            <View style={{width:'100%', height:'49%'}}>
                <ImageBackground source={props.secondImage || defaultImage} resizeMode='cover' style={{width: '100%', height: '100%'}}>
                    <NavigationBox context={'PostRead'}>
                        <View style={homeScreenStyle.newsTextFrame}>
                            <Text style={homeScreenStyle.newsTitleText}>{props.secondTitle}</Text>
                            <Text style={homeScreenStyle.newsContentText}>{props.secondContent}</Text>
                        </View>
                    </NavigationBox>
                </ImageBackground>
            </View>
        </View>
    )
    const dividedThirdBox: JSX.Element = (
        <View style={{width:'100%', height:'100%', flexDirection: 'column', justifyContent:'space-between'}}>
            <View style={{width:'100%', height:'48.5%'}}>
                <ImageBackground source={props.image} resizeMode='cover' style={{width: '100%', height: '100%'}}>
                    <NavigationBox context={'PostRead'}>
                        <View style={homeScreenStyle.newsTextFrame}>
                            <Text style={homeScreenStyle.newsTitleText}>{props.title}</Text>
                            <Text style={homeScreenStyle.newsContentText}>{props.content}</Text>
                        </View>
                    </NavigationBox>
                </ImageBackground>
            </View>
            <View style={{width:'100%', height:'48.5%'}}>
                <ImageBackground source={props.secondImage || defaultImage} resizeMode='cover' style={{width: '100%', height: '100%'}}>
                    <NavigationBox context={'PostRead'}>
                        <View style={homeScreenStyle.newsTextFrame}>
                            <Text style={homeScreenStyle.newsTitleText}>{props.secondTitle}</Text>
                            <Text style={homeScreenStyle.newsContentText}>{props.secondContent}</Text>
                        </View>
                    </NavigationBox>
                </ImageBackground>
            </View>
        </View>
    )
    const subjectBox: JSX.Element = (
        <View style={homeScreenStyle.newsSubjectFrame}>
            <View style={{marginRight:15, height:1, width:75, borderColor:'#aaa', borderStyle:'solid', borderTopWidth:.5}} />
            <Text style={homeScreenStyle.newsSubjectText}>{props.title}</Text>
            <View style={{marginLeft:15, height:1, width:75, borderColor:'#aaa', borderStyle:'solid', borderTopWidth:.5}} />
        </View>
    )

    const full = {width: '100%', aspectRatio: 1, marginBottom: '2%' }
    const horizontalHalf = {width: '100%', aspectRatio: 2, marginBottom: '2%' }
    const verticalHalf = {width: '49%', aspectRatio:49/100, marginBottom: '2%' }
    const quarter = {width: '49%', aspectRatio: 1, marginBottom: '2%' }
    const twoThird = {width: '66%', aspectRatio:1, marginBottom: '2%' }
    const oneThird = {width: '32%', aspectRatio:1, marginBottom: '2%' }
    const twoThirdHorizontal = {width: '66%', aspectRatio:66/32, marginBottom: '2%' }
    const twoThirdVertical = {width: '32%', aspectRatio:32/66, marginBottom: '2%' }
    const subject = {width: '100%', height: 80, marginBottom: '2%' }

    if(divideSelector === undefined) {box = simpleBox}
    else if(divideSelector === 'half') {box = dividedHalfBox}
    else if(divideSelector === 'third') {box = dividedThirdBox}
    else {box = simpleBox}

    if(typeSelector === 'full'){ type = full }
    else if(typeSelector === 'quarter'){ type = quarter }
    else if (typeSelector === 'horizontalHalf'){ type = horizontalHalf  }
    else if (typeSelector === 'verticalHalf'){ type = verticalHalf }
    else if (typeSelector === 'twoThird'){ type = twoThird }
    else if (typeSelector === 'oneThird'){ type = oneThird }
    else if (typeSelector === 'twoThirdHorizontal'){ type = twoThirdHorizontal }
    else if (typeSelector === 'twoThirdVertical'){ type = twoThirdVertical }
    else if (typeSelector === 'subject'){ type = subject, box = subjectBox }

    return(
        <View style={type} >
            {box}
        </View>
    )
}

export { HomeScreen };