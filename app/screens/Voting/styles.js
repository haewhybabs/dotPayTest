import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
import {buttonBorder, categoryHeader, nomineeBorder, nomineeCard, pageBackground, splashColor, submitButton} from '../../constants/colors'
import { height, width } from '../../constants/dimensions';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:pageBackground,
    },
    categoryContainer:{
        height:40,
        backgroundColor:categoryHeader,
        justifyContent:'center',
        paddingLeft:10,
        marginTop:20

    },
    categoryText:{
        fontSize:15
    },
    cardWrapper:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        margin:10
    },
    card:{
        backgroundColor:nomineeCard,
        width:(width/2)-15,
        height:130,
        borderColor:nomineeBorder,
        borderWidth:1,
        marginTop:20,
        alignItems:'center'
    },
    nomineeText:{
        paddingTop:10,
        fontSize:10,
        textAlign:'center'
    },
    nomineeImage:{
        height:50,
        width:50,
        borderRadius:50/2,
        marginTop:5,
    },
    button:{
        height:25,
        borderWidth:1,
        borderRadius:4,
        borderColor:buttonBorder,
        marginTop:-10
    },
    submitButton:{
        height:50,
        backgroundColor:submitButton
    },
    successModal:{
        height:100,
        width:100,
        alignSelf:'center',
        marginTop:30
    },
    successText:{
        textAlign:'center',
        marginTop:20,
        fontSize:18
    }
})