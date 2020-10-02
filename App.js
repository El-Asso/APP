import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeRouter, Route, Link ,Switch} from "react-router-native";

import User from './component/user/User';
import Account from './component/user/Account';
import Carte from './component/user/Carte';
import Event from './component/user/Event';
import Asso from './component/user/Asso';


import Login from './component/admin/Login'

class App extends React.Component {
  render(){
    return (
      <NativeRouter>
        <View >
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Chope ton asso', style: { color: '#fff' }  }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <Link to="/">
            <Text>Login</Text>
          </Link>
          <Link to="/Account">
            <Text>Account</Text>
          </Link>
          <Link to="/Carte">
            <Text>Carte</Text>
          </Link>
          <Link to="/Event">
            <Text>Event</Text>
          </Link>
          <Link to="/Asso">
            <Text>Asso</Text>
          </Link>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/Account"><Account/></Route>
            <Route exact path="/Carte"><Carte/></Route>
            <Route exact path="/Event"><Event/></Route>
            <Route exact path="/Asso"><Asso/></Route>
          </Switch>
        </View>  
      </NativeRouter>   
    );
  }
}

const style = StyleSheet.create({
  container:{
    backgroundColor:'#646EC2'
  }
})

export default App;