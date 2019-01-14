import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from './util/api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }

  async componentDidMount() {
    try {
      const res = await axios({
        url: '/getTitle',
        method: 'get'
      })
      this.setState({
        title: res.title
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
