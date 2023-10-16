//External Imports
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';

//Local Imports
import { HomeScreen, OnestopScreen } from '../../screens';
import { OracleRoute } from '../TopTabRoute/OracleRoute';
import { AcademyRoute } from '../TopTabRoute/AcademyRoute';
import { CommunityRoute } from '../TopTabRoute/CommunityRoute';

//Static Imports
import { CONSTANTS_DIMENSTION } from '../../util';

const Tab = createMaterialBottomTabNavigator();

function AppLayoutRoute(): JSX.Element {

    const theme = useTheme();
    theme.colors.secondaryContainer = "transparent"

    return (
        <Tab.Navigator initialRouteName='Home' activeColor='#c01718' inactiveColor='#999999' barStyle={{height: CONSTANTS_DIMENSTION.bottomBarHeight, marginTop:-CONSTANTS_DIMENSTION.bottomBarHeight, backgroundColor: 'rgba(255,255,255,0)'}}>
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color={color} size={28} style={{bottom:0}} />)}} />
            <Tab.Screen name="Onestop" component={OnestopScreen} options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="hand-pointing-up" color={color} size={30} style={{bottom:4}} />)}} />
            <Tab.Screen name="Oracle" component={OracleRoute} options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="crystal-ball" color={color} size={28} style={{bottom:2}} />)}} />
            <Tab.Screen name="Academy" component={AcademyRoute} options={{tabBarIcon: ({ color }) => ( <FontAwesome5 name="school" color={color} size={22} style={{bottom:0}} />)}} />
            <Tab.Screen name="Community" component={CommunityRoute} options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="account-group" color={color} size={32} style={{bottom:3}} />)}} />
        </Tab.Navigator>
    );
}

export { AppLayoutRoute };