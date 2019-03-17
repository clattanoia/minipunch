import React, { Component } from 'react'
import { Input, InputNumber, Button } from 'antd'
import { Query, Mutation } from 'react-apollo'

import { GET_USER } from './graphql/Query/user'
import { UPDATE_USER } from './graphql/Mutation/user'

import './App.scss'

class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', age: '', sex: '' }
  }

  onChange = (value, type) => {
    this.setState({ [type]: value })
  }

  onClick = async (mutate, refetch) => {
    try {
      await mutate()
      await refetch()
      this.setState({ name: '', age: '', sex: '' })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { name, age, sex } = this.state
    const { id, refetch } = this.props
    return (
      <Mutation mutation={UPDATE_USER} variables={{ id, name, age, sex }}>
        {(mutate, { loading, error }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return (
            <>
              <Input
                className="App-input"
                placeholder="please enter name"
                value={this.state.name}
                onChange={(e) => this.onChange(e.target.value, 'name')}
              />
              <InputNumber
                className="App-input"
                placeholder="please enter age"
                min={0}
                max={100}
                value={this.state.age}
                onChange={(value) => this.onChange(value, 'age')}
              />
              <Input
                className="App-input"
                placeholder="please enter sex"
                value={this.state.sex}
                onChange={(e) => this.onChange(e.target.value, 'sex')}
              />
              <Button type="primary" onClick={() => this.onClick(mutate, refetch)}>
                修改
              </Button>
            </>
          )
        }}
      </Mutation>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { id: '5c812e8b386ad706fd6fc19f' }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Query query={GET_USER} variables={{ id: this.state.id }}>
            {({ loading, error, data: { user }, refetch }) => {
              if (loading) return 'Loading...'
              if (error) return `Error! ${error.message}`
              return (
                <>
                  <h1 className="App-title">
                    from mongodb: <span>{user.name}，</span>
                    <span>{user.age}，</span>
                    <span>{user.sex}，</span>
                  </h1>
                  <FormComponent id={this.state.id} refetch={refetch} />
                </>
              )
            }}
          </Query>
        </header>
      </div>
    )
  }
}

export default App
