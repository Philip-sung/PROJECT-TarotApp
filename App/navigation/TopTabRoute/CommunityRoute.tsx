//External Imports
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';

//Local Imports
import { CommunityScreen } from '../../screens';

const Tabs = createMaterialTopTabNavigator();

function CommunityRoute(): JSX.Element {
  return (
    <Tabs.Navigator screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
        tabBarItemStyle: {  },
        tabBarStyle: { height: 110, marginBottom:-110, paddingTop:70, backgroundColor: 'rgba(0,0,0,0)'},
        tabBarActiveTintColor: '#c01718',
        tabBarInactiveTintColor: '#ccc',
        tabBarIndicatorStyle: { backgroundColor:'#c01718', width: 80, left: ((Dimensions.get('window').width / 2 - 80) / 2) },
        swipeEnabled: false
    }}>
      <Tabs.Screen name="Feed" component={CommunityScreen.FeedTab} />
      <Tabs.Screen name="MySpace" component={CommunityScreen.MySpaceTab} />
    </Tabs.Navigator>
  );
}

export { CommunityRoute };