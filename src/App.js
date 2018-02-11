import React, { Component } from 'react'
import Header from './components/Header';
import MessageList from './components/MessageList'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hello! Welcome to React." />
        <MessageList />
      </div>
    )
  }
}

export default App
