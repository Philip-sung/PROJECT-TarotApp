//External Imports
import { SkPoint, vec, Group, Line, rotate, Circle } from "@shopify/react-native-skia";

function BackgroundHoroscope(props: {size: number}): JSX.Element {
    const size : number = props.size;
    const r: number = props.size * 0.45;
    const xOrigin:number = size/2;
    const yOrigin:number = size/2;
    const origin:SkPoint = vec(xOrigin, yOrigin);
    const lineStart:SkPoint = vec(xOrigin + r/2.5, yOrigin);
    const lineEnd:SkPoint = vec(xOrigin + r-25, yOrigin);
    const outerLineStart:SkPoint = vec(xOrigin + r-20, yOrigin);
    const outerLineEnd:SkPoint = vec(xOrigin + r, yOrigin);
    const angle: number = 30 * Math.PI/180;
    const strokeThin: number = 0.4;
    const strokeMiddle: number = 1;
    const strokeBold: number = 1.25;
    const eachDegree: number[] = [];
    const unitDegree: number = Math.PI/180;
    for(let i = 0; i < 360; i++){
      eachDegree.push(i);
    }
    
    return(
      <Group style="stroke">
        <Line p1={rotate(lineStart,origin,angle * 0)} p2={rotate(lineEnd,origin,angle * 0)} color="dark" style="stroke" strokeWidth={strokeBold} />
        <Line p1={rotate(lineStart,origin,angle * 1)} p2={rotate(lineEnd,origin,angle * 1)} color="dark" style="stroke" strokeWidth={strokeThin} />
        <Line p1={rotate(lineStart,origin,angle * 2)} p2={rotate(lineEnd,origin,angle * 2)} color="dark" style="stroke" strokeWidth={strokeThin} />
        <Line p1={rotate(lineStart,origin,angle * 3)} p2={rotate(lineEnd,origin,angle * 3)} color="dark" style="stroke" strokeWidth={strokeBold} />
        <Line p1={rotate(lineStart,origin,angle * 4)} p2={rotate(lineEnd,origin,angle * 4)} color="dark" style="stroke" strokeWidth={strokeThin} />
        <Line p1={rotate(lineStart,origin,angle * 5)} p2={rotate(lineEnd,origin,angle * 5)} color="dark" style="stroke" strokeWidth={strokeThin} />
        <Line p1={rotate(lineStart,origin,angle * 6)} p2={rotate(lineEnd,origin,angle * 6)} color="dark" style="stroke" strokeWidth={strokeBold} />
        <Line p1={rotate(lineStart,origin,angle * 7)} p2={rotate(lineEnd,origin,angle * 7)} color="dark" style="stroke" strokeWidth={strokeThin} />
        <Line p1={rotate(lineStart,origin,angle * 8)} p2={rotate(lineEnd,origin,angle * 8)} color="dark" style="stroke" strokeWidth={strokeThin} />
        <Line p1={rotate(lineStart,origin,angle * 9)} p2={rotate(lineEnd,origin,angle * 9)} color="dark" style="stroke" strokeWidth={strokeBold} />
        <Line p1={rotate(lineStart,origin,angle * 10)} p2={rotate(lineEnd,origin,angle * 10)} color="dark" style="stroke" strokeWidth={strokeThin} />
        <Line p1={rotate(lineStart,origin,angle * 11)} p2={rotate(lineEnd,origin,angle * 11)} color="dark" style="stroke" strokeWidth={strokeThin} />
  
        <Line p1={rotate(outerLineStart,origin,angle * 0)} p2={rotate(vec(xOrigin + r + 10, yOrigin),origin,angle * 0)} color="dark" style="stroke" strokeWidth={strokeBold} />
        <Line p1={rotate(outerLineStart,origin,angle * 1)} p2={rotate(outerLineEnd,origin,angle * 1)} color="dark" style="stroke" strokeWidth={strokeMiddle} />
        <Line p1={rotate(outerLineStart,origin,angle * 2)} p2={rotate(outerLineEnd,origin,angle * 2)} color="dark" style="stroke" strokeWidth={strokeMiddle} />
        <Line p1={rotate(outerLineStart,origin,angle * 3)} p2={rotate(vec(xOrigin + r + 10, yOrigin),origin,angle * 3)} color="dark" style="stroke" strokeWidth={strokeBold} />
        <Line p1={rotate(outerLineStart,origin,angle * 4)} p2={rotate(outerLineEnd,origin,angle * 4)} color="dark" style="stroke" strokeWidth={strokeMiddle} />
        <Line p1={rotate(outerLineStart,origin,angle * 5)} p2={rotate(outerLineEnd,origin,angle * 5)} color="dark" style="stroke" strokeWidth={strokeMiddle} />
        <Line p1={rotate(outerLineStart,origin,angle * 6)} p2={rotate(vec(xOrigin + r + 10, yOrigin),origin,angle * 6)} color="dark" style="stroke" strokeWidth={strokeBold} />
        <Line p1={rotate(outerLineStart,origin,angle * 7)} p2={rotate(outerLineEnd,origin,angle * 7)} color="dark" style="stroke" strokeWidth={strokeMiddle} />
        <Line p1={rotate(outerLineStart,origin,angle * 8)} p2={rotate(outerLineEnd,origin,angle * 8)} color="dark" style="stroke" strokeWidth={strokeMiddle} />
        <Line p1={rotate(outerLineStart,origin,angle * 9)} p2={rotate(vec(xOrigin + r + 10, yOrigin),origin,angle * 9)} color="dark" style="stroke" strokeWidth={strokeBold} />
        <Line p1={rotate(outerLineStart,origin,angle * 10)} p2={rotate(outerLineEnd,origin,angle * 10)} color="dark" style="stroke" strokeWidth={strokeMiddle} />
        <Line p1={rotate(outerLineStart,origin,angle * 11)} p2={rotate(outerLineEnd,origin,angle * 11)} color="dark" style="stroke" strokeWidth={strokeMiddle} />
  
        {eachDegree.map((degree, index) => (<Line key={index} p1={rotate(vec(xOrigin+r-28, yOrigin),origin,unitDegree * degree)} p2={rotate(vec(xOrigin+r-26, yOrigin),origin,unitDegree * degree)} color="dark" style="stroke" strokeWidth={strokeThin} />))}
        <Circle cx={xOrigin} cy={yOrigin} r={r} color="black" strokeWidth={strokeMiddle} />
        <Circle cx={xOrigin} cy={yOrigin} r={r-20} color="black" strokeWidth={strokeMiddle} />
        <Circle cx={xOrigin} cy={yOrigin} r={r-25} color="black" strokeWidth={strokeThin} />
        <Circle cx={xOrigin} cy={yOrigin} r={r/2.5} color="black" strokeWidth={strokeBold} />
      </Group>
    )
  }

  export { BackgroundHoroscope };