//External Imports
import React from "react";
import { Alert } from "react-native";
import { Canvas, Group, useTouchHandler } from "@shopify/react-native-skia";

//Local Imports
import { BackgroundHoroscope } from "./CreateBackgroundHoroscope";
import { AlignPlanets } from "./AlignPlanets";
import { AlignZodiac } from "./AlignZodiac";

function Horoscope(): JSX.Element {
  //accept some kind of Time as its input parameter and fully render the complete horoscope

  const windowSize: number = 350;

  const touchHandler = useTouchHandler({
    onStart: () => { 
      Alert.alert("Astrology")
    }
  })
  
  return (
    <Canvas onTouch={touchHandler} style={{ width: windowSize, height: windowSize, backgroundColor:"rgba(0,0,0,0)", display: 'flex', alignItems:'center', justifyContent:'center' }}>
      <Group blendMode={"dstOver"} >
        <AlignPlanets size={windowSize} />
        <AlignZodiac size={windowSize} />
        <BackgroundHoroscope size={windowSize} />
      </Group>
    </Canvas>
  );
};

export { Horoscope };