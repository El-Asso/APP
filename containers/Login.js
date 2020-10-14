import React from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import StyledGlobal from '../global.conf'
import { LoginUser } from "../API/index"

class Login extends React.Component {
    constructor(state) {
        super(state)
        this.state = {
            LOGIN:false,
            USERNAME: "artur",
            PASSWORD: "artur2020",
            message: "",
            BUTTON: "LOG IN",
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
    handlerPassword(text) {
        console.log("PASSWORD : ", text)
        // set state username
        this.setState({ PASSWORD: text })
    }
    handlerSabmit() {
        this.setState({
            BUTTON: "Login ..."
        })
        console.log("SUBMIT : ", this.state)
        LoginUser(this.state.USERNAME, this.state.PASSWORD)
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
                console.log("LoginUser:then", res)
                if (res.error !== undefined) {
                    style.borderColor = "#ff0000";
                    this.setState({
                        message: res.error,
                        BUTTON: "LOG IN"
                    })
                }
                if( res.success === true){
                    this.setState({
                        LOGIN: true
                    })
                }

                // console.log("LoginUser:STYLE", style)



            }).catch(res => {
                console.log("LoginUser:catch", res)

            }).finally(() => {
                console.log("LoginUser:finally")
                if(this.state.LOGIN === true){
                    this.props.fPage("associations")
                }
            })
        return
    }


    render() {
        return (
            <>
                <TextInput
                    style={this.state.STYLE}
                    placeholder="USERNAME"
                    value={"artur"}
                    placeholderTextColor="#fff"
                    onChangeText={USERNAME => this.setState({ USERNAME })}
                />
                <TextInput
                    style={this.state.STYLE}
                    secureTextEntry={true}
                    placeholder="PASSWORD"
                    value={"artur"}
                    placeholderTextColor="#fff"
                    onChangeText={PASSWORD => this.setState({ PASSWORD })}
                />
                <Text>{this.state.message}</Text>
                <Button
                    title={this.state.BUTTON}
                    style={{
                        height: 40,
                        borderColor: '#fff',
                        borderWidth: 3,
                        borderRadius: 12,
                        backgroundColor: "#fff",
                        width: StyledGlobal.Resize.width / 2,
                    }}
                    color="#fff"
                    onPress={() => this.handlerSabmit()}
                />
            </>
        );
    }
}


class MainLogin extends React.Component {
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

                    <Login fPage={this.props.fPage}/>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: StyledGlobal.Resize.width / 2,
                            marginVertical: 20,
                        }}
                    />
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
                        color="#fff"
                        onPress={() => this.handlerPage("signup")}
                    />
                </View>
            </>
        )
    }
}



export default MainLogin;