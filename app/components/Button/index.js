import React from 'react'
import { View,TouchableOpacity,ActivityIndicator } from 'react-native'
import styles from './styles';
import Texts from '../Texts';
import { white } from '../../constants/colors';
export default function index({title,style,onPress,disabled,loading,textStyle}) {
    const renderButtonContent = ()=>{
        return(
            <>
                <Texts style={{...styles.defaultButtonText,...textStyle}}>{title}</Texts>
                {
                    loading&&((
                        <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator color={white} />
                        </View>
                    ))
                }
            </>
        )
    }
    return (
        <View style={styles.buttonWrapper}>
        {
            disabled?
            <View style={{...styles.defaultButton,...style,opacity: 0.6}} onPress={onPress}>
                {renderButtonContent()}
            </View>
            :
            <TouchableOpacity style={{...styles.defaultButton,...style}} onPress={onPress}>
                {renderButtonContent()}
            </TouchableOpacity>

        }
        </View>
    )
}