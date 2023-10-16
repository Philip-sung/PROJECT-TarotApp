//External Imports
import { Group, RoundedRect, rrect, rect, Canvas, useTouchHandler, TouchType, useImage, Image } from "@shopify/react-native-skia"
import { Animated } from "react-native";
import { useRef } from "react";
import { useSetRecoilState } from "recoil";

//Static Imports
import { STATIC_SVG } from "../../assets/svg";
import { tarotSelected } from "../../recoil";

//FORTEST Imports
import card_back_classic_01 from "../../assets/img/TarotImage/CardBack_Classic_01.png"
import card_back_classic_02 from "../../assets/img/TarotImage/CardBack_Classic_03.png"

type TarotType = {
  imageHeight: number,
  imageWidth:number,
}

const CurrentTarot : TarotType = {
  imageWidth: 70,
  imageHeight: 112,
}

function TarotCard(props: {cardNum: number, touchAction: 'draw' | 'flip', tarotNum?: number}): JSX.Element {

  const AnimatedCanvas=Animated.createAnimatedComponent(Canvas);
  let isSelected = false;
  let onTouchFunction;

  const SPREAD_DISTANCE = 35;
  const CARD_MARGIN = 3;
  const CARD_BORDERRADIUS = 5;
  const imageFrame = rrect(rect(CARD_MARGIN,CARD_MARGIN,CurrentTarot.imageWidth,CurrentTarot.imageHeight), CARD_BORDERRADIUS, CARD_BORDERRADIUS);

  const cardBack = STATIC_SVG.OIP_LOGO;
  const cardBack_01 = useImage(card_back_classic_01)
  const cardBack_02 = useImage(card_back_classic_02)
  const cardNum : number = props.cardNum;
  const tarotNum : number = (props.tarotNum !== undefined) ? props.tarotNum : 0;
  const cardTopPosition = 0;
  const cardFlip = 0;

  const setSelectedCardNum = useSetRecoilState(tarotSelected);
  const drawAnim = useRef(new Animated.Value(cardTopPosition)).current;
  const flipAnim = useRef(new Animated.Value(cardFlip)).current;

  const DrawOut = () => {
    Animated.timing(drawAnim, {
      toValue: cardTopPosition - 100,
      duration: 900,
      useNativeDriver: false,
    }).start()
  }
  const MixIn = () => {
    Animated.timing(drawAnim, {
      toValue: cardTopPosition,
      duration: 900,
      useNativeDriver: false,
    }).start()
  }

  const FlipOut = () => {
    Animated.timing(flipAnim, {
      toValue: cardFlip + 1,
      duration: 400,
      useNativeDriver: false,
    }).start()
  }
  const FlipIn = () => {
    Animated.timing(flipAnim, {
      toValue: cardFlip,
      duration: 400,
      useNativeDriver: false,
    }).start()
  }

  const touchDrawHandler = useTouchHandler({
    onEnd(touchInfo) {
      if (touchInfo.type === TouchType.End) {
        console.log(`Tarot ${cardNum} Selected`);
        isSelected = !isSelected;
        
        if(isSelected){
          DrawOut();
          setSelectedCardNum((oldVal: number) => oldVal+1);
        }
        else if(!isSelected){
          MixIn();
          setSelectedCardNum((oldVal: number) => oldVal-1);
        }
      }
      else if (touchInfo.type === TouchType.Cancelled) {
        false;
      }
    },
  })

  const touchFlipHandler = useTouchHandler({
    onStart(touchInfo) {
      if (touchInfo.type === TouchType.Start) {
          isSelected = !isSelected;
          
          if(isSelected){
            FlipOut();
          }
          else if(!isSelected){
            FlipIn();
          }
      }
    }
  })

  if (props.touchAction === 'draw') {
    onTouchFunction = touchDrawHandler;
  }
  else if (props.touchAction === 'flip') {
    onTouchFunction = touchFlipHandler;
  }

  return(
    <AnimatedCanvas 
      onTouch={onTouchFunction} 
      style={{ 
        position:'absolute', 
        top:drawAnim, 
        transform: 
          [{rotateY: flipAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '180deg'],
            })}
          ], 
        left:SPREAD_DISTANCE * cardNum, 
        width: CurrentTarot.imageWidth + 6, 
        height: CurrentTarot.imageHeight + 6, 
        backgroundColor:"rgba(0,0,0,0)", 
        display: 'flex', 
        alignItems:'center', 
        justifyContent:'center',
        backfaceVisibility:'hidden'
      }}
    >
      <Group blendMode={"dstOver"} >
        <Group clip={imageFrame}>
          <Image image={cardBack_02} fit="cover" x={0} y={0} width={78} height={118} />
        </Group>
        <RoundedRect x={0} y={0} width={CurrentTarot.imageWidth + CARD_MARGIN*2} height={CurrentTarot.imageHeight + CARD_MARGIN*2} r={10} color="#fff" />
        <RoundedRect style={"stroke"} x={0} y={0} width={CurrentTarot.imageWidth + CARD_MARGIN*2} height={CurrentTarot.imageHeight + CARD_MARGIN*2} r={CARD_BORDERRADIUS * 2} color="#fff" strokeWidth={0} />
      </Group>
    </AnimatedCanvas>
  )
}

export { TarotCard };