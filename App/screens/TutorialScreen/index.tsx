import { View, Text, Button, Alert } from 'react-native';

function TutorialScreen(): JSX.Element {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Tutorial Screen
            </Text>
            <Button
                title="Login!"
                onPress={() => {Alert.alert("Waiting for Implementation"); console.log("Tutorial Screen");}}
            />
        </View>
    );
}

export { TutorialScreen };