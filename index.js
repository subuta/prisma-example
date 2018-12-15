import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { UserProvider } from './components/UserContext'

const app = (
  <UserProvider>
    <App />
  </UserProvider>
)

ReactDOM.render(app, document.querySelector('#app'))
