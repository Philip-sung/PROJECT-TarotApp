//External Imports
import { Dimensions } from "react-native";


const CONSTANTS_DIMENSTION = {
    windowHeight: Dimensions.get("window").height,
    windowWidth: Dimensions.get("window").width,
    windowBottom: Dimensions.get("window").height - 70,
    screenHeight: Dimensions.get("screen").height,
    screenWidth: Dimensions.get("screen").width,
    screenBottom: Dimensions.get("screen").height - 70,
    bottomBarHeight: 70,
}

export { CONSTANTS_DIMENSTION };