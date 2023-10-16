//External Imports
import { Animated, View } from "react-native";
import { useRef } from "react";
import { useNavigation } from '@react-navigation/native';

//Static Imports
import { PostReadProps } from '../../navigation/StackRoute/RootRoute';
import { ListStyleLoaderProps } from "../../navigation/StackRoute/RootRoute";
import { EquinoxProps } from "../../navigation/StackRoute/RootRoute";
import { TarotResultProps } from "../../navigation/StackRoute/RootRoute";

function BlinkingComponent({children}:any) : JSX.Element {

    const interval: number = 1000;
    const opacityAnim = useRef(new Animated.Value(1)).current;
    const FadeOut = () => {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: interval,
        useNativeDriver: true,
      }).start()
    }
    const FadeIn = () => {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: interval,
        useNativeDriver: true,
      }).start()
    }

    setInterval(() =>{FadeOut();setTimeout(()=>{FadeIn();}, interval)}, interval * 2)

    return(
        <Animated.View style={{opacity: opacityAnim}}>
            {children}
        </Animated.View>
    )
}

function FadeinComponent({children}:any) : JSX.Element {

  const interval: number = 1000;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const FadeOut = () => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: interval,
      useNativeDriver: true,
    }).start()
  }
  const FadeIn = () => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: interval,
      useNativeDriver: true,
    }).start()
  }

  FadeIn();

  return(
      <Animated.View style={{opacity: opacityAnim}}>
          {children}
      </Animated.View>
  )
}

function NavigationBox(props: {children: any, context: string}) {


  if(props.context === 'PostRead'){
    type PostReadNavigationProp = PostReadProps['navigation']
    const navigation = useNavigation<PostReadNavigationProp>()
    return(
        <View style={{width:'100%', height:'100%'}} onTouchEnd={() => {navigation.navigate('PostRead',{postId: 'From Home'})}}>
            {props.children}
        </View>
    )
  }
  else if(props.context === 'ListStyleLoader'){
    type ListStyleNavigationProp = ListStyleLoaderProps['navigation']
    const navigation = useNavigation<ListStyleNavigationProp>()
    return(
        <View style={{width:'100%', height:'100%'}} onTouchEnd={() => {navigation.navigate('ListStyleLoader')}}>
            {props.children}
        </View>
    )
  }
  else if(props.context === 'Equinox'){
    type EquinoxNavigationProp = EquinoxProps['navigation']
    const navigation = useNavigation<EquinoxNavigationProp>()
    return(
      <View style={{width:'100%', height:'100%'}} onTouchEnd={() => {navigation.navigate('Equinox')}}>
          {props.children}
      </View>
      )
  }
  else if(props.context === 'TarotResult'){
    type TarotResultNavigationProp = TarotResultProps['navigation']
    const navigation = useNavigation<TarotResultNavigationProp>()
    return(
      <View style={{width:'100%', height:'100%'}} onTouchEnd={() => {navigation.navigate('TarotResult')}}>
          {props.children}
      </View>
      )

  }
}

export { BlinkingComponent, NavigationBox, FadeinComponent };