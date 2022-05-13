import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
import {splashColor} from '../../constants/colors'
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:splashColor,
        justifyContent:'center',
        alignItems:'center'
    },
})