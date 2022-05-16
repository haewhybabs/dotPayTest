import React from 'react'
import { View,StyleSheet,StatusBar} from 'react-native';
import { pageBackground } from '../../constants/colors';
import { ios } from '../../constants/device';
import { screenHeight, screenWidth } from '../../constants/dimensions';
import Texts from '../Texts';
export default function index() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={pageBackground} barStyle="dark-content" />
            <View style={styles.headerWrapper}>
                <Texts style={styles.textStyle}>GOLDEN GLOBE AWARD</Texts>
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        height:ios?screenHeight(12):screenHeight(4),
        backgroundColor:pageBackground,
        shadowColor: "#EBEBEB",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 2,
    },
    headerWrapper:{
        paddingTop:ios?screenHeight(7):null,
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        justifyContent:'center',
    },
    textStyle:{
        fontSize:17,
    }
})