# prisma-example
Example prisma app 

## Getting started

SEE: https://www.prisma.io/docs/1.22/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/


### Setup server(DB & Prisma as a GraphQL Server)

```
# Install prisma
npm i prisma -g

# Start DB(Postgres)
docker-compose up

# Initialize prisma
prisma init --endpoint http://localhost:4466

# Deploy prisma
prisma deploy
```

### Testing GraphQL

#### Create user

```graphql
mutation {
  createUser(data: {
    name: "Taro Yamada"
  }) {
    name
  }
}
```

#### Get users

```
`{
  users {
    id
    name
  }
}`
```

#### Find user by id

```
{
  user(where: {
    id: "cjpnvbg55000c0828qmcz21iz"
  }) {
    id
    name
  }
}
```

### Setup client

```
# Install project dependencies
npm i

# Start webpack-dev-server(via Poi)
npm run serve

# Open app
open http://localhost:4000
```