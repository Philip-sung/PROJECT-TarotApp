//External Imports
import { Group, vec } from "@shopify/react-native-skia";

//Local Imports
import { STATIC_ICON } from "../../assets";

function AlignZodiac(props: {size: number}): JSX.Element {
    const size : number = props.size;
    const r: number = props.size * 0.45 - 10;
    const xOrigin:number = size/2;
    const yOrigin:number = size/2;
  
    const iconScaleByDeviceScreenSize = 1;
    const iconRotateAngle : number = 90;
    const DUODECIMAL_DEGREE: number = 30 * Math.PI / 180;
    const transform = [ { translateX: xOrigin + r }, { translateY: yOrigin } ];
  
    return(
      <Group transform={[{ rotate: 0 * DUODECIMAL_DEGREE}]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[{ rotate: -0.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.ARIES(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>
        
        <Group transform={[{ rotate: -1.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.TAURUS(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>

        <Group transform={[{ rotate: -2.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.GEMINI(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>

        <Group transform={[{ rotate: -3.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.CANCER(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>

        <Group transform={[{ rotate: -4.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.LEO(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>

        <Group transform={[{ rotate: -5.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.VIRGO(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>

        <Group transform={[{ rotate: -6.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.LIBRA(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>

        <Group transform={[{ rotate: -7.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.SCORPIO(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>

        <Group transform={[{ rotate: -8.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.SAGITTARIUS(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>

        <Group transform={[{ rotate: -9.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.CAPRICORN(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>

        <Group transform={[{ rotate: -10.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.AQUARIUS(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>

        <Group transform={[{ rotate: -11.5 * DUODECIMAL_DEGREE }, ...transform]} origin={vec(xOrigin,yOrigin)}>
          {STATIC_ICON.PISCES(iconScaleByDeviceScreenSize, iconRotateAngle)}
        </Group>
      </Group>
    )
  }

  export { AlignZodiac };