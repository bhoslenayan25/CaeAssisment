import React, { useEffect } from 'react';

import { View, Text } from 'react-native';
import { screens } from '../../Navigation/Constants';
import { navigateToScreen } from '../../Utilities/Utility';

import styles from './style';
const Splash = () => {

    useEffect(()=>{
        setTimeout(async () => {
            navigateToScreen(screens.ROSTER)
        }, 3000)
    })

    return (
        <View style={styles.container}>
            <Text>Welcome to CAE Assignment</Text>
        </View>
    );

}

export default Splash