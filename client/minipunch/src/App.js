import React, { Component } from 'react'
import { Input } from 'antd'
import { Query, Mutation } from 'react-apollo'

import { GET_USER } from './graphql/Query/user'
import { UPDATE_USER } from './graphql/Mutation/user'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { id: '5c812e8b386ad706fd6fc19f', name: '' }
  }

  onChange = (name) => {
    this.setState({ name })
  }

  onPressEnter = async (mutate, refetch) => {
    try {
      await mutate()
      await refetch()
      this.setState({ name: '' })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { id, name } = this.state
    const updateUser = {
      id,
      name,
      age: 18,
      sex: '女'
    }
    return (
      <div className="App">
        <header className="App-header">
          <Query query={GET_USER} variables={{ id: this.state.id }}>
            {({ loading, error, data: { user }, refetch }) => {
              if (loading) return 'Loading...'
              if (error) return `Error! ${error.message}`
              return (
                <>
                  <h1 className="App-title">来自数据库：{user.name}</h1>
                  <Mutation mutation={UPDATE_USER} variables={updateUser}>
                    {(mutate, { loading, error }) => {
                      if (loading) return 'Loading...'
                      if (error) return `Error! ${error.message}`
                      return (
                        <Input
                          placeholder="输入姓名"
                          value={this.state.name}
                          onChange={(e) => this.onChange(e.target.value)}
                          onPressEnter={() => this.onPressEnter(mutate, refetch)}
                        />
                      )
                    }}
                  </Mutation>
                </>
              )
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
