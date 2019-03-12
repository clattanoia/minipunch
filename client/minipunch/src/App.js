import React, { Component } from 'react'
import './App.scss'
// import axios from './util/api'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_USER = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      name
      sex
      age
    }
  }
`

const variables = { id: '5c812e8b386ad706fd6fc19f' }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  async componentDidMount() {
    // try {
    //   const {
    //     data: { user }
    //   } = await axios({
    //     url: '/graphql',
    //     method: 'post',
    //     data: {
    //       operationName: 'getUser',
    //       query: 'query getUser($id: ID!) { user(id: $id) { id name sex age } }',
    //       variables: { id: '5c812e8b386ad706fd6fc19f' }
    //     }
    //   })
    //   this.setState({
    //     name: user.name
    //   })
    // } catch (error) {
    //   console.error(error)
    // }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">{this.state.name}</h1> */}

          <Query query={GET_USER} variables={variables}>
            {({ loading, error, data: { user } }) => {
              if (loading) return 'Loading...'
              if (error) return `Error! ${error.message}`
              return <h1 className="App-title">{user.name}</h1>
            }}
          </Query>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
