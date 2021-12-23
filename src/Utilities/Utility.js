import NetInfo from '@react-native-community/netinfo';
import moment from "moment";
import {navigationRef} from '../Navigation/RootNavigator'

export const log = (TAG, message) => {
    if (__DEV__) {
        console.log(TAG, message);
    }
}

export const networkAvailable = () => new Promise((resolve, reject) =>
    NetInfo.fetch().then(state => state.isConnected ? resolve(true) : resolve(false)))

export const getCurrentDate = (dateFormat) => {
    return moment(new Date()).format(dateFormat)
}

export const navigateToScreen = (screenName, props = {}) => {
    console.log("navigate to", screenName)
    navigationRef.current?.navigate(screenName, props)
};

export const goBack = () => {
    navigationRef.current?.goBack()
}

export const showProgressDilaog = (message) => {
    navigateToScreen('ProgressDialog', { message })
}

export const hideProgressDilaog = () => {
    goBack()
}

export const formatDate = (date, fromFormat, toFormat) => {
    return moment(moment(date, fromFormat)).format(toFormat)
}