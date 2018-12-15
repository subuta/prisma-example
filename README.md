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

```
# Start Playground
npm run playground
```

#### Get users

```graphql
{
  users {
    id
    name
  }
}
```

#### Filter users by name

```graphql
query ($name: String) {
  users(where: {
    name_contains: $name
  }) {
    id
    name
  }
}
```

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

#### Multiple mutation

```graphql
mutation {
  firstUser: createUser(data: {
    name: "Taro Yamada"
  }) {
    name
  }
  
  secondUser: createUser(data: {
    name: "Jiro Yamada"
  }) {
    name
  }
  
  thirdUser: createUser(data: {
    name: "Saburo Suzuki"
  }) {
    name
  }
}
```

#### Find user by id

```graphql
{
  user(where: {
    id: "cjpnvbg55000c0828qmcz21iz"
  }) {
    id
    name
  }
}
```

#### Update user

```graphql
mutation {
  updateUser(data: {
    name: "Saburo Yamada"
  }, where: {
    id: "cjpp8qljt00110828hwv6bert"
  }) {
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
