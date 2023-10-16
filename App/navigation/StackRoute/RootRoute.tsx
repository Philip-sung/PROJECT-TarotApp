//External Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

//Local Imports
import { PlatformRoutes } from '../DrawerRoute/PlatformRoute';
import { TutorialRoute } from './TutorialRoute';
import { AuthRoute } from './AuthRoute';
import { PostReadScreen } from '../../screens/PostReadScreen';
import { ListStyleLoaderScreen } from '../../screens/ListStyleLoaderScreen';
import { EquinoxScreen } from '../../screens/EquinoxScreen';
import { TarotResultScreen } from '../../screens/OracleScreen/TarotTab/TarotResultScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type PostReadProps = NativeStackScreenProps<RootStackParamList, 'PostRead'>
export type ListStyleLoaderProps = NativeStackScreenProps<RootStackParamList, 'ListStyleLoader'>
export type EquinoxProps = NativeStackScreenProps<RootStackParamList, 'Equinox'>
export type TarotResultProps = NativeStackScreenProps<RootStackParamList, 'TarotResult'>

export type RootStackParamList = {
    Platform: undefined,
    Tutorial: undefined,
    Authorization: undefined,
    PostRead: { postId: string } | undefined,
    PostWrite: undefined,
    AlbumStyleLoader: undefined,
    ListStyleLoader: undefined,
    Equinox: undefined,
    TarotResult: undefined,
}

function RootRoute(): JSX.Element {

    return (
        <Stack.Navigator initialRouteName='Platform' screenOptions={{animation:'slide_from_right'}}  >
            <Stack.Screen name="Platform" component={PlatformRoutes} options={{headerShown: false}} />
            <Stack.Screen name="Tutorial" component={TutorialRoute} />
            <Stack.Screen name="Authorization" component={AuthRoute} />
            <Stack.Screen name="PostRead" component={PostReadScreen} />
            <Stack.Screen name="ListStyleLoader" component={ListStyleLoaderScreen} />
            <Stack.Screen name="Equinox" component={EquinoxScreen} options={{ headerShown:false }} />
            <Stack.Screen name="TarotResult" component={TarotResultScreen} />
        </Stack.Navigator>
    );
}

export { RootRoute };