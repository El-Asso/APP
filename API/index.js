const API = require("./API")
const LocalStorage = require("./LocalStorage")

module.exports = {
    getAsyncStorage: LocalStorage.getAsyncStorage,
    setAsyncStorage: LocalStorage.setAsyncStorage,
    putAsyncStorage: LocalStorage.putAsyncStorage,
    deleteAsyncStorage: LocalStorage.deleteAsyncStorage,
    LoginUser: API.LoginUser, 
    RegistrationUser: API.RegistrationUser, 
    LoginAssociation: API.LoginAssociation, 
    RegistrationAssociation: API.RegistrationAssociation,
    sortAssociations: API.sortAssociations,
    fetchAPI: API.fetchAPI,
}