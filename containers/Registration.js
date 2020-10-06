import React from 'react';
import { View, Text } from 'react-native'
import { Avatar, Input, ButtonGroup, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyledGlobal from '../global.conf'
import { RegistrationUser, RegistrationAssociation } from "../API/index"

class User extends React.Component {
    componentDidMount() {
        console.log("componentDidMount:User", true)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate:User")
    }
    render() {
        return (
            <>
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="usename"
                />
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="email"
                />
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="password"
                />
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="password"
                />
                <Button
                    type="outline"
                    title="NEXT  "
                    iconRight
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="black"
                        />
                    }
                />
            </>
        );
    }
}
class Association extends React.Component {
    constructor(state) {
        super(state)
        this.state = {
            SIRET: "",
            EMAIL: "",
            PASSWORD: [
                "", ""
            ],
        }
    }
    componentDidMount() {
        console.log("componentDidMount:Association", true)
    }
    componentDidUpdate() {
        // console.log("componentDidUpdate:Association",this.state)
    }
    setSIRET(SIRET) {
        console.log("setSIRET:Association", SIRET)
        this.setState({
            SIRET
        })
    }
    setEmail(EMAIL) {
        console.log("setEmail:Association", EMAIL)
        this.setState({
            EMAIL
        })
    }
    setPasswords(password, index) {
        console.log("setPasswords:Association", password, index)
        let PasswordState = this.state.PASSWORD;
        PasswordState[index] = password
        this.setState({
            PASSWORD: PasswordState
        })
    }
    subitForm() {
        // console.log("subitForm:Association", this.state)
        RegistrationAssociation(this.state).then(res => console.log(res)
        )
    }
    render() {
        return (
            <>

                <Input
                    style={{ textAlign: "center" }}
                    placeholder="Code SIRET"
                    onChangeText={text => this.setSIRET(text)}
                />
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="email"
                    onChangeText={text => this.setEmail(text)}
                />
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="password"
                    onChangeText={text => this.setPasswords(text, 0)}
                />
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="password"
                    onChangeText={text => this.setPasswords(text, 1)}
                />
                <Button
                    type="outline"
                    title="NEXT  "
                    iconRight
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="black"
                        />
                    }
                    onPress={() => this.subitForm()}
                />
            </>
        );
    }
}

class Main extends React.Component {
    constructor(state) {
        super(state)
        this.state = {
            inPage: 0,
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(inPage) {
        this.setState({ inPage })
    }
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

    render() {
        return (
            <>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={this.state.inPage}
                    buttons={["USER", "ASSOCIATION"]}
                    containerStyle={{ height: 30 }}
                />
                <View style={[StyledGlobal.container, StyledGlobal.registration]}>
                    <Text style={{ fontWeight: "bold", fontSize: 35 }}> Registration </Text>

                    {this.state.inPage === 0 ? <User /> : null}
                    {this.state.inPage === 1 ? <Association /> : null}
                </View>
            </>
        )
    }
}



export default Main;