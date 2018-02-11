import React, { Component } from 'react'
import Header from './components/Header'
import MessageList from './components/MessageList'
import MessageBox from './components/MessageBox'
import firebase from 'firebase'
import config from './firebase.env'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    firebase.initializeApp(config)
  }

  render() {
    return (
      <div className="App">
        <Header title="Hello! Welcome to React." />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
