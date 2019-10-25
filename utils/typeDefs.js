module.exports = typeDefs = `
####################### Inputs ##############################

input UserInput{
  name:String
  surname:String
  email:String
  cellnumber:String
}

####################### Types ##############################

type Token {
    token: String!
}

type User{
   _id: ID
  name:String
  surname:String
  email:String
  cellnumber:String
}


####################### Queries ##############################
  # The "Query" type is the root of all GraphQL queries.
    type Query {
        users:[User]
    }

####################### Mutations ##############################
  # (A "Mutation" type will be covered later on.)
    type Mutation {
        signup(input:UserInput) : User
    }

`;
