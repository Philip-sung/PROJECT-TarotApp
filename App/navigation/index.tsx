//External Imports
import { NavigationContainer } from "@react-navigation/native";

//Local Imports
import { RootRoute } from "./StackRoute/RootRoute";

function Routes(): JSX.Element {
    return(
        <NavigationContainer>
            <RootRoute />
        </NavigationContainer>
    )
}

export { Routes };