const { request } = require('graphql-request')

const query = `
{
  users {
    id
    name
  }
}
`

const variables = {}

request('http://localhost:4466', query, variables)
  .then(data => console.log(data))