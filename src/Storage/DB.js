import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data))
    } catch (err) {
        throw err
    }
}

export const getData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null && typeof data != 'undefined') {
            return data;
        }
    } catch (err) {
        throw err;
    }
    return null;
}

export const deleteData = async (keys) => {
    try {
        for (var i = 0; i < keys.length; i++) {
            await AsyncStorage.removeItem(keys[i]);
        }
    } catch (err) {
        throw err
    }
}
