import { StyleSheet } from "react-native";
import { buttonBackground,white } from "../../constants/colors";
export default StyleSheet.create({
    defaultButton:{
        borderRadius: 7,
        backgroundColor:buttonBackground,
        height: 30,
        width:'100%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    defaultButtonText:{
        fontSize:14
    },
    activityIndicatorWrapper:{
        paddingLeft:10
    },
    buttonWrapper:{
        width:'100%',
        padding:20
    },
    borderButtonCover:{
        borderWidth:0.5,
        borderColor:buttonBackground,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        width:150,height:30,
        alignSelf:'center'
    }
});