import React from 'react';
import { NativeRouter, Switch, Route } from "react-router-native"
import Associations from "./containers/Associations"
import Association from "./containers/Association"
import Registration from "./containers/Registration"
import Login from "./containers/Login"
import styles from './global.conf';

class App extends React.Component {
  constructor(state) {
    super(state)
    this.state = {
      iPage: "login",
      AboutByID: "",
      historyPage: []
    }
    this.handlerPage = this.handlerPage.bind(this)
  }

  componentDidUpdate() {
    console.log("APP", this.state)
  }

  handlerPage(tag, ID = null) {
    console.log("handlerPage", tag)
    let historyPage = this.state.historyPage
    historyPage.reverse().push(tag)
    historyPage.reverse()
    this.setState({
      iPage: tag,
      historyPage,
    })
    if (ID !== null) {
      this.setState({
        AboutByID: ID
      })
    }
  }

  render() {
    return (
      <>
        {(this.state.iPage === "login" ?
          <Login fPage={this.handlerPage} />
          : null
        )}
        {(this.state.iPage === "signup" ?
          <Registration fPage={this.handlerPage} />
          : null
        )}
        {(this.state.iPage === "associations" ?
          <Associations fPage={this.handlerPage} />
          : null
        )}
        {(this.state.iPage === "association" ?
          <Association fPage={this.handlerPage} ID={this.state.AboutByID} />
          : null
        )}
        {(this.state.iPage === "event" ?
          <Associations fPage={this.handlerPage} ID={this.state.AboutByID} />
          : null
        )}
      </>
    );
  }
}

export default App;