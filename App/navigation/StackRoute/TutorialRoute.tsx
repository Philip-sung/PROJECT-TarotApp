//External Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Local Imports
import { TutorialScreen } from '../../screens';

const Stack = createNativeStackNavigator();

function TutorialRoute(): JSX.Element {

    return (
        <Stack.Navigator initialRouteName='TutorialIntro'>
            <Stack.Screen name="TutorialIntro" component={TutorialScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

export { TutorialRoute };