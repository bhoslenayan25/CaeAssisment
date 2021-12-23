import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    stack: {
        flex: 1,
        shadowColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        borderRadius: 50,
        elevation: 5,
        // overflow: 'scroll',
        // borderWidth: 1,
    },
    avatar: {
        borderRadius: 60,
        marginBottom: 16,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
    },
});