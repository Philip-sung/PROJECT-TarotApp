//External Imports
import { View, Text, TouchableOpacity, Alert, Image, Animated } from "react-native";
import { useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

//Local Imports
import { globalColor } from "../../../styles";
import { TarotCard } from "../../../components/TarotDeck/TarotCard";
import { tarotFliped, tarotSelected } from "../../../recoil";

//Static Imports
import image1 from '../../../assets/img/TarotImage/WaiteDeck/01TheFool.png'
import image2 from '../../../assets/img/TarotImage/WaiteDeck/02TheMaigician.png'
import image3 from '../../../assets/img/TarotImage/WaiteDeck/03TheEmpress.png'
import { FadeinComponent } from "../../../components/Units";

function SpreadScreen(props: {onTouch: Function}):JSX.Element {
    let selectedCardCount = useRecoilValue(tarotSelected);
    let setFlipedCard = useSetRecoilState(tarotFliped);
    let randomCardNumList = [];
    
    for(let i = 0; i < selectedCardCount; i++){
        randomCardNumList.push(Math.floor(Math.random() * (78 - 1) + 1))
    }
    console.log(randomCardNumList)

    //TEST
    const isFliped = [0,0,0,0,0]
    //TEST
    
    
    //<TarotCard cardNum={0} ... 아래에 <DisplayTarot tarotNum={} />
    return(
        <View style={{width:'100%', height:'100%', backgroundColor:globalColor.tarotTheme, alignItems:'center'}}>
            <View style={{flexWrap:'wrap',flexDirection:'row', alignItems:'center', justifyContent:'center', height:"auto"}}>
                {randomCardNumList.map((cardNum, index) =>(
                    <View key={index} style={{margin:15, width:76, height:118, alignItems:'center', justifyContent:'center'}} 
                        onTouchStart={() => {
                            if(isFliped[index] == 0){
                                isFliped[index] = 1
                            }
                            else if (isFliped[index] == 1){
                                isFliped[index] = 0
                            }
                            console.log(isFliped)
                            const updator = [...isFliped]
                            setFlipedCard(updator)
                            }}>
                        <FlipCard cardNum={index} index={index} />
                        <TarotCard cardNum={0} touchAction={'flip'} tarotNum={cardNum} />
                    </View>
                ))}
            </View>

            <TouchableOpacity 
                style={{
                    position:'absolute', 
                    top:600,
                    width:200,
                    height:40,
                    borderRadius:30,
                    backgroundColor:'#c01718',
                    alignItems:'center',
                    justifyContent:'center'
                }} 
                onPress={() => {props.onTouch(); setFlipedCard([0,0,0,0,0])}}
            >
                <Text>CLOSE</Text>
            </TouchableOpacity>
        </View>
    )
}

function FlipCard(props : {cardNum:number, index:number}) {
    let isFliped = useRecoilValue(tarotFliped);
    const cardNum = props.cardNum;
    const cardDeck = [image1, image2, image3]

    let cardFlip = 0;
    const flipAnim = useRef(new Animated.Value(cardFlip)).current;

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

    if(isFliped[props.index] == 0){
        FlipIn()
    }
    else if(isFliped[props.index] == 1){
        FlipOut()
    }

    return(
        <Animated.View
            style={{width:76, 
                height:118, 
                transform: [{
                    rotateY: flipAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['90deg', '360deg']
                    })
                }],
                backfaceVisibility:'hidden', 
            }} 
            onTouchStart={() => {FlipIn(); Alert.alert("HES")}}
        >
            <Image source={cardDeck[cardNum]} style={{width:'100%', height:'100%'}} />
        </Animated.View>

    )
}

export { SpreadScreen };