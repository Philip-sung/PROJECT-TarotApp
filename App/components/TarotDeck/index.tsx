//External Imports
import { ScrollView, Text, View,Alert } from "react-native";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import Modal from 'react-native-modal'

//Local Imports
import { TarotCard } from "./TarotCard";
import { BlinkingComponent, FadeinComponent, NavigationBox } from "../Units";
import { selectednum } from "../../recoil";
import { SpreadScreen } from "../../screens/OracleScreen/TarotTab/SpreadScreen";

//Static Imports
import { CONSTANTS_DIMENSTION } from "../../util";
import { globalColor } from "../../styles";

function TarotDeck(): JSX.Element {

  return (
    <View style={{alignItems:'baseline'}}>
      <View style={{backgroundColor:globalColor.tarotTheme, width:CONSTANTS_DIMENSTION.screenWidth, height:CONSTANTS_DIMENSTION.screenHeight, alignItems:'center'}}>
        <View style={{position:'absolute', top: CONSTANTS_DIMENSTION.windowBottom - 350, opacity: 1}}>
          <BlinkingComponent>
            <Text style={{color:'white'}}>Please Draw Cards</Text>
          </BlinkingComponent>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{top: CONSTANTS_DIMENSTION.screenBottom - 240, width:910, justifyContent:'flex-end'}}>
            <TarotCard touchAction={'draw'} cardNum={1} />
            <TarotCard touchAction={'draw'} cardNum={2} />
            <TarotCard touchAction={'draw'} cardNum={3} />
            <TarotCard touchAction={'draw'} cardNum={4} />
            <TarotCard touchAction={'draw'} cardNum={5} />
            <TarotCard touchAction={'draw'} cardNum={6} />
            <TarotCard touchAction={'draw'} cardNum={7} />
            <TarotCard touchAction={'draw'} cardNum={8} />
            <TarotCard touchAction={'draw'} cardNum={9} />
            <TarotCard touchAction={'draw'} cardNum={10} />
            <TarotCard touchAction={'draw'} cardNum={11} />
            <TarotCard touchAction={'draw'} cardNum={12} />
            <TarotCard touchAction={'draw'} cardNum={13} />
            <TarotCard touchAction={'draw'} cardNum={14} />
            <TarotCard touchAction={'draw'} cardNum={15} />
            <TarotCard touchAction={'draw'} cardNum={16} />
            <TarotCard touchAction={'draw'} cardNum={17} />
            <TarotCard touchAction={'draw'} cardNum={18} />
            <TarotCard touchAction={'draw'} cardNum={19} />
            <TarotCard touchAction={'draw'} cardNum={20} />
            <TarotCard touchAction={'draw'} cardNum={21} />
            <TarotCard touchAction={'draw'} cardNum={22} />
          </View>
        </ScrollView>
        <NextButton />
        <View style={{position:'absolute', top: CONSTANTS_DIMENSTION.windowBottom-20, opacity: 1}}>
          <BlinkingComponent>
            <Text style={{color:'white'}}>{`≪   Swipe   ≫`}</Text>
          </BlinkingComponent>
        </View>
      </View>
    </View>
  );
};

function NextButton(){
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);

  const num = useRecoilValue(selectednum)
  if(num > 5){
    return(
      <View style={{height:40, width:200, backgroundColor:'#c01718', bottom:500, borderRadius:100}}>
        <View style={{alignItems:'center', justifyContent:'center', height:'100%'}} onTouchEnd={() => {Alert.alert("선택하신 카드가 너무 많습니다.")}}>
          <Text style={{fontWeight:'700', color:'#fff'}}>
            {`        ${num} Card Tarot      →`}
          </Text>
        </View>
      </View>
    )
  }
  else if(num > 0){
    return(
      <FadeinComponent>
        <View style={{height:40, width:200, backgroundColor:'#c01718', bottom:500, borderRadius:100}}>
          <SubjectModal isModalVisible={subjectModalVisible} setModalVisiblity={setSubjectModalVisible} />
          <View style={{alignItems:'center', justifyContent:'center', height:'100%'}} onTouchEnd={() => {setSubjectModalVisible(true)}}>
            <Text style={{fontWeight:'700', color:'#fff'}}>
              {`        ${num} Card Tarot      →`}
            </Text>
          </View>
        </View>
      </FadeinComponent>
    )
  }
  else {
    return(<></>)
  }
}

function SubjectModal(props: {isModalVisible: boolean, setModalVisiblity: Function}): JSX.Element {
  let visiblility: boolean = props.isModalVisible;
  const setVisibility: Function = props.setModalVisiblity;

  function ToggleVisibility() {
      setVisibility(!visiblility)
  }

  return(
      <Modal isVisible={visiblility} animationIn="fadeIn" animationInTiming={2000} animationOut="fadeOut" animationOutTiming={2000} style={{
        top: 0,
        left: 0,
        right: 0,
        padding: 0,
        margin: 0,
        marginHorizontal: 0,
        justifyContent: 'flex-end'}}>
          <SpreadScreen onTouch={ToggleVisibility} />
      </Modal>
  )
}

export { TarotDeck };