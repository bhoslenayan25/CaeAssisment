import { StyleSheet } from 'react-native';
import { colorCode } from '../../Utilities/AppConstants';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'space-evenly',
        padding: 10,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    innerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        color: colorCode.WHITE,
        textAlign: 'center',
        marginTop: -30
    }
});