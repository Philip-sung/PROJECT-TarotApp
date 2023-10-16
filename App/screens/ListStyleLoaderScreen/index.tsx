import { View, ScrollView, Text, ImageBackground } from 'react-native';

//Local Imports
import { globalAlign, globalFilter, globalStyle } from '../../styles';
import { listStyleLoaderStyle } from './styles';

//FORTEST Imports
import SampleImage from "../../assets/img/OIP-01.jpg"
import A from "../../assets/samples/Sea.jpeg"
import B from "../../assets/samples/IENER.png"
import C from "../../assets/samples/Tea.jpeg"
import { DisplayerContainer } from '../../components/Displayer/DisplayerContainer';


const LectureTabFORTESTData = [
    {title: '「 myTest : A 」', content: '`Lorem ipsum dolor sit amet,\n consectetur adipiscing elitet magna varius\n tincidunt eu velit ut finibus. Pellente`', image:C},
    {title: '「 myTestProcess : B 」', content: '`Lorem ipsum dolor sit amet,\n consectetur adipiscing elitet magna varius\n tincidunt eu velit ut finibus. Pellente`', image:A},
    {title: '「 TestSubject C 」', content: '`Lorem ipsum dolor sit amet,\n consectetur adipiscing elitet magna varius\n tincidunt eu velit ut finibus. Pellente`', image:B},
    {title: '「 ImTesting D 」', content: '`Lorem ipsum dolor sit amet,\n consectetur adipiscing elitet magna varius\n tincidunt eu velit ut finibus. Pellente`', image:C},
    {title: '「 myTestProcess : E 」', content: '`Lorem ipsum dolor sit amet,\n consectetur adipiscing elitet magna varius\n tincidunt eu velit ut finibus. Pellente`', image:A},
    {title: '「 myTest : F 」', content: '`Lorem ipsum dolor sit amet,\n consectetur adipiscing elitet magna varius\n tincidunt eu velit ut finibus. Pellente`', image:B}
]


function ListStyleLoaderScreen(): JSX.Element {

    return(
        <View style={{...globalStyle.outerViewNoMarginNoBottomMargin, width:'100%'}}>
            <ScrollView style={{width:'100%'}}>

                <View style={{marginBottom: 15, width: '100%'}}>
                    <ImageBackground source={SampleImage} style={{width:'100%', height:130, borderRadius: 10}} resizeMode='cover'>
                        <View style={{...globalAlign.fill_contentCenter, ...globalFilter.darken}}>
                            <Text style={listStyleLoaderStyle.headerTitle}>Prepared Articles (of User)</Text>
                            <Text style={listStyleLoaderStyle.headerContent}>Article wrote by authorized instructor</Text>
                        </View>
                    </ImageBackground>
                </View>

                <DisplayerContainer type={'TxtNextToImg'} data={LectureTabFORTESTData} />
            </ScrollView>
        </View>
    );
}

export { ListStyleLoaderScreen };