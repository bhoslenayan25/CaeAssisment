import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import CustomPopup from "../../../../Components/CustomPopup";
import { colorCode } from '../../../../Utilities/AppConstants';
import { log } from '../../../../Utilities/Utility';
import style from './style';

export default Details = (props) => {

    let item = props.route.params
    log('Details', item)
    return (
        <CustomPopup>
            <View style={style.container}>
                {
                    Object.keys(item).map((key, num) => {
                        return (
                            <View style={style.view} key={num}>
                                <View style={style.item}>
                                    <Text>{key}</Text>
                                </View>
                                <View style={style.item}>
                                    <Text>{item[key]}</Text>
                                </View>
                            </View>
                        )
                    })
                }

            </View>
        </CustomPopup>
    )
}