//External Imports
import { Text, Alert, Linking, Pressable, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerToggleButton } from '@react-navigation/drawer';

//Local Imports
import { AppLayoutRoute } from '../BottomTabRoute/AppLayoutRoute';

//Static Imports
import { STATIC_IMAGE, STATIC_ICON } from '../../assets';

const Drawer = createDrawerNavigator();

function PlatformRoutes(): JSX.Element {

    return (
        <Drawer.Navigator 
            initialRouteName='Home' 
            screenOptions={{ 
                //*Note(FORIMPLENTATION) : DrawerToggleButtonDesign Modification
                headerBackground: () => {return(STATIC_IMAGE.OIP_LOGO_RED_TRANSPARENT)},
                headerShown: true,
                headerTitleStyle: {opacity: 0},
                headerTintColor: '#c01718',
                drawerActiveBackgroundColor: 'rgba(128,128,128,0.0)',
                drawerActiveTintColor:'#000000',
                //*Note(FORCLEANUP) : All Header Styles
                headerStyle:{height: 0},
            }}
            drawerContent={(props) => {
                return(
                    <DrawerContentScrollView contentContainerStyle={{flex: 1, justifyContent:'space-between', marginBottom:10, marginTop:10}}>
                        <Pressable style={{flex:0.8 , backgroundColor:'#555', justifyContent:'center', alignItems:'center'}} onPress={()=>{Alert.alert("Link To MyPage")}}><Text style={{color:'#fff'}}>Render UserInfo Componenet Here</Text></Pressable>
                        <DrawerItemList {...props} />
                        <DrawerItem label="Configuration" onPress={() => props.navigation.navigate('Tutorial')} />
                        <DrawerItem icon={() => STATIC_ICON.EXTERNAL_LINK } label="Google" onPress={() => Linking.openURL('https:/google.com')} />
                        <DrawerItem icon={() => STATIC_ICON.EXTERNAL_LINK } label="Naver" onPress={() => Linking.openURL('https://naver.com/')}/>
                        <DrawerItem icon={() => STATIC_ICON.EXTERNAL_LINK } label="Daum" onPress={() => Linking.openURL('https://daum.net')}/>
                        <DrawerItem label="Login" onPress={() => props.navigation.navigate('Authorization')} style={{bottom: 0, backgroundColor: '#c01718'}} labelStyle={{color: '#ffffff', textAlign:'center'}}/>
                    </DrawerContentScrollView>
                )
            }}
        >
            <Drawer.Screen name={'OIPAPP'} component={AppLayoutRoute} />
        </Drawer.Navigator>
    );
}

export { PlatformRoutes };