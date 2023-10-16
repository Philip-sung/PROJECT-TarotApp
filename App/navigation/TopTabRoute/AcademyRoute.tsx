//External Imports
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';

//Local Imports
import { AcademyScreen } from '../../screens';

const Tabs = createMaterialTopTabNavigator();

function AcademyRoute(): JSX.Element {
  return (
    <Tabs.Navigator screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
        tabBarItemStyle: {  },
        tabBarStyle: { height: 110, marginBottom:-110, paddingTop:70, backgroundColor: 'rgba(0,0,0,0)'},
        tabBarActiveTintColor: '#c01718',
        tabBarInactiveTintColor: '#ccc',
        tabBarIndicatorStyle: { backgroundColor:'#c01718', width: 80, left: ((Dimensions.get('window').width / 3 - 80) / 2) },
        swipeEnabled: false
    }}>
      <Tabs.Screen name="Lecture" component={AcademyScreen.Lecture} />
      <Tabs.Screen name="Article" component={AcademyScreen.Article} />
      <Tabs.Screen name="My Academy" component={AcademyScreen.MyAcademy} />
    </Tabs.Navigator>
  );
}

export { AcademyRoute };