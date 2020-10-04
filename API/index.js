const API = require("./API")
const LocalStorage = require("./LocalStorage")

module.exports = {
    getAsyncStorage : LocalStorage.getAsyncStorage,
    setAsyncStorage : LocalStorage.setAsyncStorage,
    putAsyncStorage : LocalStorage.putAsyncStorage,
    deleteAsyncStorage : LocalStorage.deleteAsyncStorage,
    sortAssociations : API.sortAssociations,
    fetchAPI : API.fetchAPI,
}