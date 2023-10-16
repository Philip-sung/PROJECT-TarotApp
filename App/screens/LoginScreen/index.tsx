import { View, Text, Button, Alert } from 'react-native';

function AuthScreen(): JSX.Element {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Auth Screen
            </Text>
            <Button
                title="Login!"
                onPress={() => {Alert.alert("Waiting for Implementation"); console.log("Login Screen");}}
            />
        </View>
    );
}

export { AuthScreen };