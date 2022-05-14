import { StyleSheet} from 'react-native';
import {textColor} from '../../constants/colors';
const stylesByPlatform = Platform.select({
    ios: { fontFamily: 'Roboto' },
    android: { },
})
export default StyleSheet.create({
    text: {
        ...stylesByPlatform,
        color:textColor
    },
})