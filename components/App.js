import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import { UserConsumer } from './UserContext'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchText: ''
    }
  }

  setSearchText = (searchText) => {
    this.setState({ searchText })
  }

  render (props) {
    const {
      searchText
    } = this.state

    const {
      setSearchText
    } = this

    return (
      <UserConsumer>
        {({ users, search }) => {
          return (
            <div>
              <h1>List of users</h1>

              <input type="text"
                     onChange={e => setSearchText(e.target.value)}
                     onKeyDown={(e) => {
                       if (e.key === 'Enter') search(searchText)
                     }}
                     value={searchText}
              />

              <button
                onClick={() => search(searchText)}
              >
                Search !
              </button>

              <ul>
                {users.map((user) => {
                  return (
                    <li key={user.id}>{user.name}</li>
                  )
                })}
              </ul>
            </div>
          )
        }}
      </UserConsumer>
    )
  }
}

export default hot(module)(App)
