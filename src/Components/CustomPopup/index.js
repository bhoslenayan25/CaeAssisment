import React from 'react';
import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native';
import { colorCode, screens } from '../../Utilities/AppConstants'
import { goBack, navigateToScreen } from '../../Utilities/Utility'
import style from './style';
export default CustomPopup = props => {

    return (
        <View style={style.container}>
            <Pressable onPress={() => goBack()} style={style.outPopup}></Pressable>
            <View style={style.view}>
                <TouchableOpacity onPress={() => goBack()} style={style.closeView}>
                    <Image
                        source={require('../../Assets/close.png')}
                        style={style.closeIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                {props.children}
            </View>
        </View>
    );
}
