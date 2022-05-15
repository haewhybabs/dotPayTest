import React from 'react'
import { View,StyleSheet} from 'react-native';
import { pageBackground } from '../../constants/colors';
import { screenHeight, screenWidth } from '../../constants/dimensions';
import Texts from '../Texts';
export default function index() {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Texts style={styles.textStyle}>Golden Globe Award</Texts>
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        height:screenHeight(12),
        backgroundColor:pageBackground,
        shadowColor: "#EBEBEB",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 2,
    },
    headerWrapper:{
        paddingTop:screenHeight(7),
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        fontSize:15
    }
})