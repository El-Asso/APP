const HOST ="10.252.112.178";

const GLOBAL = {
    associations: `http://${HOST}:3001/associations`,
    registration: `http://${HOST}:3001/registration`,
    login: `http://${HOST}:3001/login`,

}
/////////////////////////////////////////////////////////////////
const fetchAPI = async (url, method = "GET", param = {}) => {
    try {
        let response;
        if (method === "POST" && param !== {}) {
            let option = {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            }
            response = await fetch(url, option);
        } else {
            response = await fetch(url);
        }
        return await response.json();
    } catch (error) {
         console.error(error)
        return error;
    }

};

const sortAssociations = async () => {
    let url = GLOBAL.associations;
        return await fetchAPI(url).then(res => res)
}
const sortAssociation = async (id) => {
    let url = `${GLOBAL.associations}/${id}`;
        return await fetchAPI(url).then(res => res)
}
const sortEvets = async () => {

}
// pour Abdullah
const LoginUser = async (username = "", password = "") => {
    let url = GLOBAL.login+"/user";
    let method = "POST";
    let option = { username: username, password: password }
    return await fetchAPI(url, method, option).then(res => res)
}
const RegistrationUser = async (Obj) => {
    console.log("API:RegistrationUser", Obj)
    if (Obj.USERNAME !== "" && Obj.EMAIL !== "" && Obj.PASSWORD !== [] && Obj.PASSWORD[0] === Obj.PASSWORD[1]) {
        let url = GLOBAL.registration+"/user";
        let method = "POST";
        let option = { username: Obj.USERNAME, email: Obj.EMAIL, password: Obj.PASSWORD }
        return await fetchAPI(url, method, option).then(res => res)
    } else {
        return {error:"Corrigez les données"};
    }
}
// pour Sam
const LoginAssociation = async (username = "", password = "") => {
    let url = GLOBAL.login;
    let method = "POST";
    let option = { username: username, password: password }
    return await fetchAPI(url, method, option).then(res => res.data)
}
const RegistrationAssociation = async (Obj) => {
    console.log("API:RegistrationAssociation", Obj)
    if (Obj.SIRET !== "" && Obj.EMAIL !== "" && Obj.PASSWORD !== [] && Obj.PASSWORD[0] === Obj.PASSWORD[1]) {
        let url = GLOBAL.registration;
        let method = "POST";

        let option = { siret: Obj.SIRET, email: Obj.EMAIL, password: Obj.PASSWORD }
        return await fetchAPI(url, method, option).then(res => res.data)
    } else {
        return " Password is not equal";
    }
}

/////////////////////////////////////////////////////////////////
module.exports = {
    LoginUser,
    RegistrationUser,
    LoginAssociation,
    RegistrationAssociation,
    sortAssociations,
    sortAssociation,
    fetchAPI
};
