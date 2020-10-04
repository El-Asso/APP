const AsyncStorage = require("react-native").AsyncStorage;

const getAsyncStorage = async (key) => {
    console.log("AsyncStorage:getAsyncStorage", key)
    /**
     * @param key => KEY Coocki
     */
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // code
        }
        return { key: key, value }
    } catch (error) {
        console.log("AsyncStorage:getAsyncStorage Error")
        console.log(error)
        return false
    }
};

const setAsyncStorage = async (coocki) => {
    console.log("AsyncStorage:setAsyncStorage", coocki)
    /**
     * @param coocki => { key : Stirng, value : FullType} Coocki
     */
    try {
        await AsyncStorage.setItem(
            coocki.key,
            coocki.value
        );
        return true
    } catch (error) {
        console.log("AsyncStorage:setAsyncStorage Error")
        console.log(error)
        return false
    }
};

const putAsyncStorage = async (coocki) => {
    console.log("AsyncStorage:putAsyncStorage", coocki)
    /**
     * @param coocki => { key : Stirng, value : FullType} Coocki
     */
    try {
        await AsyncStorage.setItem(
            coocki.key,
            coocki.value
        );
        return await getAsyncStorage(coocki.key)
    } catch (error) {
        console.log("AsyncStorage:putAsyncStorage Error")
        console.log(error)
        return false
    }
};

const deleteAsyncStorage = async (key) => {
    console.log("AsyncStorage:deleteAsyncStorage", key)
    /**
    * @param key => KEY Coocki
    */
    try {
        const value = await AsyncStorage.removeItem(key);
        console.log(value)
        return true
    } catch (error) {
        console.log("AsyncStorage:deleteAsyncStorage Error")
        console.log(error)
        return false
    }
};


module.exports = { getAsyncStorage, setAsyncStorage, putAsyncStorage, deleteAsyncStorage }