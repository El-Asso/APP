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
const LoginUser = async () => {
    
}
const RegistrationUser = async () => {
    
}
// pour Sam
const LoginAssociation = async () => {
    
}
const RegistrationAssociation = async () => {
    
}
/////////////////////////////////////////////////////////////////
module.exports = { sortAssociations, fetchAPI };
/////////////////////////////////////////////////////////////////
const GLOBAL = {
    api: "localhost:3001",
    dev: "https://72a571050f59.ngrok.io",
    uri: {
        registration: "/registration",
        associations: "/associations",
        login: "/login",
    }
}