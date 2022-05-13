import { View, Image,StatusBar } from 'react-native'
import React from 'react'
import styles from './styles'
import { splashColor } from '../../constants/colors';
export default function Splash({navigation}) {
    const [mainSplash, setMainSplash] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setMainSplash(true);
        }, 3000);
        if(mainSplash){
            navigation.navigate('AppStack');
        }
    }, [mainSplash]);
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={splashColor} barStyle="light-content" />
        <Image 
            source = {require('../../assets/images/dotPay.png')}                         
            style={styles.logoCover}      
        />
    </View>
  )
}