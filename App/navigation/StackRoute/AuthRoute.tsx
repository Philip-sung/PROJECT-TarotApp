//External Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Local Imports
import { AuthScreen } from '../../screens';

const Stack = createNativeStackNavigator();

function AuthRoute(): JSX.Element {

    return (
        <Stack.Navigator initialRouteName='Auth'>
            <Stack.Screen name="Auth" component={AuthScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

export { AuthRoute };