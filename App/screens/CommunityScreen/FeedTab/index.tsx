import { View, ScrollView } from 'react-native';
import { Feed, FeedContainer } from '../../../components/Feed';
import { globalStyle } from '../../../styles';

function FeedTab(): JSX.Element {

    return(
        <View style={globalStyle.outerViewWithTab}>
            <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center'}}>
                <FeedContainer>
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                </FeedContainer>
            </ScrollView>
        </View>
    );
}

export { FeedTab };