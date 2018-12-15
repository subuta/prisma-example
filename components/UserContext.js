import React from 'react'
import { Component, createContext } from 'react'
import { GraphQLClient } from 'graphql-request'

const Context = createContext({})
const { Consumer, Provider } = Context

const GET_USERS_QUERY = `
  query ($name: String) {
    users(where: {
    	name_contains: $name
  	}) {
      id
      name
    }
  }
`

const ENDPOINT = 'http://localhost:4466'

const graphQlClient = new GraphQLClient(ENDPOINT, {
  headers: {
  },
})

class UserProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: [],
      search: this.handleSearch
    }
  }

  componentDidMount () {
    this.handleSearch('')
  }

  handleSearch = (name = '') => {
    graphQlClient.request(GET_USERS_QUERY, { name })
      .then(data => this.setState(data))
  }

  render () {
    return (
      <Provider
        value={this.state}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {
  Context,
  Consumer as UserConsumer,
  UserProvider
}

export default Context
