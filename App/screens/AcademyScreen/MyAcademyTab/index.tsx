import { View, ScrollView, Text } from 'react-native';

//Local Imports
import { PathWorkingTree } from '../../../components/PathWorkingTree';
import { WeeklyTable } from '../../../components/WeeklyTable';
import { globalStyle } from '../../../styles';

function MyAcademyTab(): JSX.Element {

    return(
        <View style={globalStyle.outerViewWithTab}>
            <ScrollView>
                <View style={{width:'100%', alignItems:'center', marginBottom:15}}>
                    <PathWorkingTree />
                </View>
                <View style={{width:'100%', height:200, marginBottom: 80}}>
                    <Text style={{color:'#000', width:'100%', textAlign:'center', margin:10, fontSize:20, fontWeight:'700'}}>My Schedule</Text>
                    <WeeklyTable />
                </View>
            </ScrollView>
        </View>
    );
}

export { MyAcademyTab };