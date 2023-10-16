//External Imports
import { View, Text, ScrollView, Alert, Pressable } from "react-native";
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal'

//Local Imports
import { myAcademyIcon } from "../../assets/icon/myAcademy";
import { pathWorkingTreeStyle } from "./styles";
import { SelectSubjectScreen } from "../../screens/SelectSubjectScreen";

function PathWorkingTree(): JSX.Element {

    const [subjectModalVisible, setSubjectModalVisible] = useState(false);

    let currentSubject: string = "FORTEST Subject";
    let lv5_graduated: string = "_White";
    let lv4_graduated: string = "_White";
    let lv3_graduated: string = "_Red";
    let lv2_graduated: string = "_Red";
    let lv1_graduated: string = "_Red";
    
    return(
        <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}>

            <SubjectModal isModalVisible={subjectModalVisible} setModalVisiblity={setSubjectModalVisible} />

            <Text style={pathWorkingTreeStyle.subjectTitle} onPress={() => {setSubjectModalVisible(true)}}>{currentSubject}  ▾</Text>
            <View id="OnEachSubject" style={pathWorkingTreeStyle.subjectBoundBox}>
                <View id="MyLevel" style={{width:'40%'}}>
                    <View style={pathWorkingTreeStyle.classUnconquered}>
                        <Text style={pathWorkingTreeStyle.classLevelText}>LV.5 </Text>
                        {myAcademyIcon[currentSubject + lv5_graduated]}
                        <Text style={pathWorkingTreeStyle.classNameText}>Control</Text>
                    </View>
                    <View style={pathWorkingTreeStyle.classUnconquered}>
                        <Text style={pathWorkingTreeStyle.classLevelText}>LV.4 </Text>
                        {myAcademyIcon[currentSubject + lv4_graduated]}
                        <Text style={pathWorkingTreeStyle.classNameText}>Asana</Text>
                    </View>
                    <View style={pathWorkingTreeStyle.classConquered}>
                        <Text style={pathWorkingTreeStyle.classLevelText}>LV.3 </Text>
                        {myAcademyIcon[currentSubject + lv3_graduated]}
                        <Text style={pathWorkingTreeStyle.classNameText}>Prana</Text>
                    </View>
                    <View style={pathWorkingTreeStyle.classConquered}>
                        <Text style={pathWorkingTreeStyle.classLevelText}>LV.2 </Text>
                        {myAcademyIcon[currentSubject + lv2_graduated]}
                        <Text style={pathWorkingTreeStyle.classNameText}>Nadi</Text>
                    </View>
                    <View style={pathWorkingTreeStyle.classConquered}>
                        <Text style={pathWorkingTreeStyle.classLevelText}>LV.1 </Text>
                        {myAcademyIcon[currentSubject + lv1_graduated]}
                        <Text style={pathWorkingTreeStyle.classNameText}>Pillar</Text>
                    </View>
                </View>
                
                <View id="History" style={{width:'60%', height:'100%', borderLeftWidth:1, paddingLeft:10, borderLeftColor:'rgba(0,0,0,.2)'}} >
                    <Text style={{fontWeight:'600', marginBottom:5, color:'#c01718'}} >History</Text>
                    <ScrollView style={{width:'100%', height:100}}>
                        <View style={{height: 'auto', width:'100%'}}>
                            <View style={{flexDirection:'row'}}>
                                <MaterialCommunityIcons name="license" color={'#c01718'} size={13} style={{margin: 2}} />
                                <Text style={pathWorkingTreeStyle.historyContentText}>2023.08 TESTRAW</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <MaterialCommunityIcons name="license" color={'#c01718'} size={13} style={{margin: 2}} />
                                <Text style={pathWorkingTreeStyle.historyContentText}>2023.08 TESTRAW</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <MaterialCommunityIcons name="license" color={'#c01718'} size={13} style={{margin: 2}} />
                                <Text style={pathWorkingTreeStyle.historyContentText}>2023.08 TESTRAW</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <MaterialCommunityIcons name="license" color={'#c01718'} size={13} style={{margin: 2}} />
                                <Text style={pathWorkingTreeStyle.historyContentText}>2023.08 TESTRAW</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <MaterialCommunityIcons name="license" color={'#c01718'} size={13} style={{margin: 2}} />
                                <Text style={pathWorkingTreeStyle.historyContentText}>2023.08 TESTRAW</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
  }

  function SubjectModal(props: {isModalVisible: boolean, setModalVisiblity: Function}): JSX.Element {
    let visiblility: boolean = props.isModalVisible;
    const setVisibility: Function = props.setModalVisiblity;

    function ToggleVisibility() {
        setVisibility(!visiblility)
    }

    return(
        <Modal isVisible={visiblility} animationIn="slideInUp">
            <SelectSubjectScreen onTouch={ToggleVisibility} />
        </Modal>
    )
  }

  export { PathWorkingTree };