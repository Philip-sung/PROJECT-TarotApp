//External Imports
import { View, ScrollView } from 'react-native';

//Local Imports
import { DisplayerContainer } from '../../../components/Displayer/DisplayerContainer';

//FORTEST Imports
import Tea from '../../../assets/samples/Tea.jpeg'
import B from '../../../assets/samples/Alchemy.jpeg'
import C from '../../../assets/samples/Flower.jpeg'
import D from '../../../assets/samples/Papyrus.png'
import { globalStyle } from '../../../styles';

const articleTabFORTESTData = [
    {image: Tea, author:"User1", title: "Test Subject", content: 'Curabitur hendrerit lobortis elit eget placerat.'},
    {image: B, author: "User2", title: 'Test Subject', content: 'Curabitur hendrerit lobortis elit eget placerat.'},
    {image: D, author: "User3", title: 'Test Subject', content: 'Curabitur hendrerit lobortis elit eget placerat.'},
    {image: C, author: "User4", title: 'Test Subject', content: 'Curabitur hendrerit lobortis elit eget placerat.'},
    {image: C, author: "User5", title: 'Test Subject', content: 'Curabitur hendrerit lobortis elit eget placerat.'}
]

function ArticleTab(): JSX.Element {

    return(
        <View style={globalStyle.outerViewWithTab}>
            <ScrollView style={{width:'100%'}}>
            <View style={{width: '100%', flexDirection:'row', flexWrap:'wrap', alignItems: 'flex-start', justifyContent: 'space-between'}}>

                <DisplayerContainer type={'TxtOnImg'} data={articleTabFORTESTData} />
            </View>
            </ScrollView>
        </View>
    );
}

export { ArticleTab };