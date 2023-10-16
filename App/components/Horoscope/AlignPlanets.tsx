//External Imports
import { Group, vec, Circle, Line } from "@shopify/react-native-skia";

//Local Imports
import { STATIC_ICON } from "../../assets";

function AlignPlanets(props: {size: number}): JSX.Element {
    const size : number = props.size;
    const r: number = props.size * 0.45 - 40;
    const xOrigin:number = size/2;
    const yOrigin:number = size/2;
    const RAD_TO_DEG: number = Math.PI / 180;
  
    const iconScaleByDeviceScreenSize = 1;
    const indicatorLineStroke: number = 1;
    const indicatorCircleSize: number = 1.5;
  
    let lunaAngle : number = 90;
    let mercuryAngle : number = 125;
    let venusAngle : number = 231;
    let solAngle : number = 52;
    let marsAngle : number = 116;
    let jupiterAngle : number = 199;
    let saturnAngle : number = 235
    let northNodeAngle : number = 284;
    let southNodeAngle : number = 313;
    let fortunaAngle : number = 5;
  
    return(
    <Group transform={[{ rotate: 0 * RAD_TO_DEG}]} origin={vec(xOrigin,yOrigin)}>
  
      <Group transform={[{ rotate: lunaAngle * RAD_TO_DEG }]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[ { translateX: xOrigin + r }, { translateY: yOrigin } ]}>
          {STATIC_ICON.LUNA(iconScaleByDeviceScreenSize, -lunaAngle)}
        </Group>
        <Circle r={indicatorCircleSize} cx={xOrigin + (size * 0.45) / 2.5} cy={yOrigin} color={'black'} />
        <Line p1={vec(xOrigin + size * 0.45 - 25,yOrigin)} p2={vec(xOrigin + size * 0.45 - 30,yOrigin)} color={'dark'} style="stroke" strokeWidth={indicatorLineStroke} />
      </Group>
  
      <Group transform={[{ rotate: mercuryAngle * RAD_TO_DEG }]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[ { translateX: xOrigin + r }, { translateY: yOrigin } ]}>
        {STATIC_ICON.MERCURY(iconScaleByDeviceScreenSize, -mercuryAngle)}
        </Group>
        <Circle r={indicatorCircleSize} cx={xOrigin + (size * 0.45) / 2.5} cy={yOrigin} color={'black'} />
        <Line p1={vec(xOrigin + size * 0.45 - 25,yOrigin)} p2={vec(xOrigin + size * 0.45 - 30,yOrigin)} color={'dark'} style="stroke" strokeWidth={indicatorLineStroke} />
      </Group>
  
      <Group transform={[{ rotate: venusAngle * RAD_TO_DEG }]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[ { translateX: xOrigin + r }, { translateY: yOrigin } ]}>
        {STATIC_ICON.VENUS(iconScaleByDeviceScreenSize, -venusAngle)}
        </Group>
        <Circle r={indicatorCircleSize} cx={xOrigin + (size * 0.45) / 2.5} cy={yOrigin} color={'black'} />
        <Line p1={vec(xOrigin + size * 0.45 - 25,yOrigin)} p2={vec(xOrigin + size * 0.45 - 30,yOrigin)} color={'dark'} style="stroke" strokeWidth={indicatorLineStroke} />
      </Group>
  
      <Group transform={[{ rotate: solAngle * RAD_TO_DEG }]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[ { translateX: xOrigin + r }, { translateY: yOrigin } ]}>
        {STATIC_ICON.SOL(iconScaleByDeviceScreenSize, -solAngle)}
        </Group>
        <Circle r={indicatorCircleSize} cx={xOrigin + (size * 0.45) / 2.5} cy={yOrigin} color={'black'} />
        <Line p1={vec(xOrigin + size * 0.45 - 25,yOrigin)} p2={vec(xOrigin + size * 0.45 - 30,yOrigin)} color={'dark'} style="stroke" strokeWidth={indicatorLineStroke} />
      </Group>
  
      <Group transform={[{ rotate: marsAngle * RAD_TO_DEG }]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[ { translateX: xOrigin + r }, { translateY: yOrigin } ]}>
        {STATIC_ICON.MARS(iconScaleByDeviceScreenSize, -marsAngle)}
        </Group>
        <Circle r={indicatorCircleSize} cx={xOrigin + (size * 0.45) / 2.5} cy={yOrigin} color={'black'} />
        <Line p1={vec(xOrigin + size * 0.45 - 25,yOrigin)} p2={vec(xOrigin + size * 0.45 - 30,yOrigin)} color={'dark'} style="stroke" strokeWidth={indicatorLineStroke} />
      </Group>
  
      <Group transform={[{ rotate: jupiterAngle * RAD_TO_DEG }]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[ { translateX: xOrigin + r }, { translateY: yOrigin } ]}>
        {STATIC_ICON.JUPITER(iconScaleByDeviceScreenSize, -jupiterAngle)}
        </Group>
        <Circle r={indicatorCircleSize} cx={xOrigin + (size * 0.45) / 2.5} cy={yOrigin} color={'black'} />
        <Line p1={vec(xOrigin + size * 0.45 - 25,yOrigin)} p2={vec(xOrigin + size * 0.45 - 30,yOrigin)} color={'dark'} style="stroke" strokeWidth={indicatorLineStroke} />
      </Group>
  
      <Group transform={[{ rotate: saturnAngle * RAD_TO_DEG }]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[ { translateX: xOrigin + r }, { translateY: yOrigin } ]}>
        {STATIC_ICON.SATURN(iconScaleByDeviceScreenSize, -saturnAngle)}
        </Group>
        <Circle r={indicatorCircleSize} cx={xOrigin + (size * 0.45) / 2.5} cy={yOrigin} color={'black'} />
        <Line p1={vec(xOrigin + size * 0.45 - 25,yOrigin)} p2={vec(xOrigin + size * 0.45 - 30,yOrigin)} color={'dark'} style="stroke" strokeWidth={indicatorLineStroke} />
      </Group>
  
      <Group transform={[{ rotate: northNodeAngle * RAD_TO_DEG }]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[ { translateX: xOrigin + r }, { translateY: yOrigin } ]}>
        {STATIC_ICON.SOUTHNODE(iconScaleByDeviceScreenSize, -northNodeAngle)}
        </Group>
        <Circle r={indicatorCircleSize} cx={xOrigin + (size * 0.45) / 2.5} cy={yOrigin} color={'black'} />
        <Line p1={vec(xOrigin + size * 0.45 - 25,yOrigin)} p2={vec(xOrigin + size * 0.45 - 30,yOrigin)} color={'dark'} style="stroke" strokeWidth={indicatorLineStroke} />
      </Group>
  
      <Group transform={[{ rotate: southNodeAngle * RAD_TO_DEG }]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[ { translateX: xOrigin + r }, { translateY: yOrigin } ]}>
        {STATIC_ICON.NORTHNODE(iconScaleByDeviceScreenSize, -southNodeAngle)}
        </Group>
        <Circle r={indicatorCircleSize} cx={xOrigin + (size * 0.45) / 2.5} cy={yOrigin} color={'black'} />
        <Line p1={vec(xOrigin + size * 0.45 - 25,yOrigin)} p2={vec(xOrigin + size * 0.45 - 30,yOrigin)} color={'dark'} style="stroke" strokeWidth={indicatorLineStroke} />
      </Group>
  
      <Group transform={[{ rotate: fortunaAngle * RAD_TO_DEG }]} origin={vec(xOrigin,yOrigin)}>
        <Group transform={[ { translateX: xOrigin + r }, { translateY: yOrigin } ]}>
        {STATIC_ICON.FORTUNA(iconScaleByDeviceScreenSize, -fortunaAngle)}
        </Group>
        <Circle r={indicatorCircleSize} cx={xOrigin + (size * 0.45) / 2.5} cy={yOrigin} color={'black'} />
        <Line p1={vec(xOrigin + size * 0.45 - 25,yOrigin)} p2={vec(xOrigin + size * 0.45 - 30,yOrigin)} color={'dark'} style="stroke" strokeWidth={indicatorLineStroke} />
      </Group>
      
    </Group>
    )
  }
  
  export { AlignPlanets };