import React from 'react';
import { View, Text, TextInput } from 'react-native'
import { Avatar, Input, ButtonGroup, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyledGlobal from '../global.conf'
import { RegistrationUser, RegistrationAssociation } from "../API/index"

class User extends React.Component {
    constructor(state) {
        super(state)
        this.state = {
            USERNAME: "artur",
            message: "",
            EMAIL: "artur.shodaton.fr@gmail.com",
            PASSWORD: ["artur2020", "artur2020"],
            STYLE: {
                marginVertical: StyledGlobal.TextInputLR.marginVertical,
                textAlign: StyledGlobal.TextInputLR.textAlign,
                height: StyledGlobal.TextInputLR.height,
                color: StyledGlobal.TextInputLR.color,
                borderWidth: StyledGlobal.TextInputLR.borderWidth,
                borderRadius: StyledGlobal.TextInputLR.borderRadius,
                fontWeight: StyledGlobal.TextInputLR.fontWeight,
                width: StyledGlobal.TextInputLR.width,
                borderColor: "#fff",
            }
        }
        this.handlerUsername = this.handlerUsername.bind(this)
        this.handlerPassword = this.handlerPassword.bind(this)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate : ", this.state)
    }

    handlerUsername(text) {
        console.log("USERNAME : ", text)
        // set state username
        this.setState({
            USERNAME: text
        })
    }
    handlerPassword(text, index) {
        let password = this.state.PASSWORD;
        password[index] = text;
        console.log("PASSWORD : ", text)
        // set state username
        this.setState({ PASSWORD: password })
    }
    handlerSabmit() {
        console.log("SUBMIT : ", this.state)
        RegistrationUser({USERNAME:this.state.USERNAME,EMAIL:this.state.EMAIL,PASSWORD:this.state.PASSWORD})
            .then(res => {
                let style = {
                    marginVertical: StyledGlobal.TextInputLR.marginVertical,
                    textAlign: StyledGlobal.TextInputLR.textAlign,
                    height: StyledGlobal.TextInputLR.height,
                    color: StyledGlobal.TextInputLR.color,
                    borderWidth: StyledGlobal.TextInputLR.borderWidth,
                    borderRadius: StyledGlobal.TextInputLR.borderRadius,
                    fontWeight: StyledGlobal.TextInputLR.fontWeight,
                    width: StyledGlobal.TextInputLR.width,
                    borderColor: "#fff",
                };
                console.log("RegistrationUser:then", res)
                if (res.error !== undefined) {
                    style.borderColor = "#ff0000";
                    this.setState({
                        message: res.error
                    })
                }

                // console.log("RegistrationUser:STYLE", style)
                this.setState({
                    STYLE: style
                })


            }).catch(res => {
                console.log("RegistrationUser:catch", res)

            }).finally(() => {
                console.log("RegistrationUser:finally")
                this.props.fPage("login")
            })
            
    }

    render() {
        return (
            <>
                <TextInput
                    style={this.state.STYLE}
                    placeholder="USERNAME"
                    placeholderTextColor="#fff"                    
                    onChangeText={USERNAME => this.setState({ USERNAME })}
                    value="artur"
                />
                <TextInput
                    style={this.state.STYLE}
                    placeholder="EMAIL"
                    placeholderTextColor="#fff"                    
                    onChangeText={EMAIL => this.setState({ EMAIL })}
                    value="artur.shodaton.fr@gmail.com"
                />
                <TextInput
                    style={this.state.STYLE}
                    secureTextEntry={true}
                    placeholder="PASSWORD"
                    placeholderTextColor="#fff"                    
                    onChangeText={PASSWORD => this.setState({ PASSWORD })}
                    value="artur2020"
                />
                <TextInput
                    style={this.state.STYLE}
                    secureTextEntry={true}
                    placeholder="PASSWORD"
                    placeholderTextColor="#fff"                    
                    onChangeText={PASSWORD => this.setState({ PASSWORD })}
                    value="artur2020"
                />

                <Text>{this.state.message}</Text>
                <Button
                    title="ENREGISTREMENT"
                    style={{
                        height: 40,
                        borderColor: '#fff',
                        borderWidth: 3,
                        borderRadius: 12,
                        backgroundColor: "#fff",
                        width: StyledGlobal.Resize.width / 2,
                    }}
                    onPress={() => this.handlerSabmit()}
                />
            </>
        );
    }
}


class Main extends React.Component {

    componentDidMount() {
        console.log("componentDidMount::Main")
    }
    componenteUserButton() {
        return (<Button
            title="USER"
            type="outline"
        />)
    }
    componenteAssociationButton() {
        return (<Button
            title="ASSOCIATION"
            type="outline"
        />)
    }
    handlerPage(tag) {
        this.props.fPage(tag)
    }
    render() {
        return (
            <>

                <View style={[StyledGlobal.container, StyledGlobal.registration]}>
                    <Icon
                        name="user-circle-o"
                        size={100}
                        color="white"
                    />

                    <User fPage={this.props.fPage}/>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: StyledGlobal.Resize.width / 2,
                            marginVertical: 20,
                        }}
                    />
                    <Button
                        title="LOG IN"
                        style={{
                            height: 40,
                            borderColor: '#fff',
                            borderWidth: 3,
                            borderRadius: 12,
                            backgroundColor: "#fff",
                            width: StyledGlobal.Resize.width / 2,
                        }}
                        onPress={() => this.handlerPage("login")}
                    />
                </View>
            </>
        )
    }
}



export default Main;