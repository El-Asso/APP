const fetchAPI = async (url, method = "GET", param) => {
    let option = {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }
    if (method === "POST") {
        option.body = JSON.stringify(param)
    }
    try {
        let response = await fetch(url, option);
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

const sortAssociations = async () => {
    let url = GLOBAL.api + GLOBAL.uri.associations;
    return await fetchAPI(url).then(res => res.data)
}
const sortEvets = async () => {
    
}
// pour Abdullah
const LoginUser = async (username="", password="") => {
    let url = GLOBAL.api + GLOBAL.uri.login;
    let method = "POST";
    let option = { username: username, password: password}
    return await fetchAPI(url,method,option).then(res => res.data)
}
const RegistrationUser = async (Obj) => {
    console.log("API:RegistrationUser", Obj)
    if( Obj.SIRET !== "" && Obj.EMAIL !== "" && Obj.PASSWORD !== [] && Obj.PASSWORD[0] === Obj.PASSWORD[1]  ){
        let url = GLOBAL.api + GLOBAL.uri.login;
        let method = "POST";
        let option = { siret: Obj.SIRET, email: Obj.EMAIL, password: Obj.PASSWORD}
        return await fetchAPI(url,method,option).then(res => res.data)
    }else{
        return " Password is not equal";
    }
}
// pour Sam
const LoginAssociation = async (username="", password="") => {
    let url = GLOBAL.api + GLOBAL.uri.login;
    let method = "POST";
    let option = { username: username, password: password}
    return await fetchAPI(url,method,option).then(res => res.data)
}
const RegistrationAssociation = async (Obj) => {
    console.log("API:RegistrationAssociation", Obj)
    if( Obj.SIRET !== "" && Obj.EMAIL !== "" && Obj.PASSWORD !== [] && Obj.PASSWORD[0] === Obj.PASSWORD[1]  ){
        let url = GLOBAL.api + GLOBAL.uri.login;
        let method = "POST";

        let option = { siret: Obj.SIRET, email: Obj.EMAIL, password: Obj.PASSWORD}
        return await fetchAPI(url,method,option).then(res => res.data)
    }else{
        return " Password is not equal";
    }
}
/////////////////////////////////////////////////////////////////
module.exports = { LoginUser, RegistrationUser, LoginAssociation, RegistrationAssociation, sortAssociations, fetchAPI };
/////////////////////////////////////////////////////////////////
const GLOBAL = {
    api: "localhost:3001",
    dev: "https://eaefae91ee1b.ngrok.io",
    uri: {
        registration: "/registration",
        associations: "/associations",
        login: "/login",
    }
}