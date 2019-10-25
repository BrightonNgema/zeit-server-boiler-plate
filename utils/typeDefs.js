const { gql } = require("apollo-server");

module.exports = typeDefs = `
####################### Inputs ##############################

input UserInput{
  name:String
  surname:String
  age:String
  email:String
  cellnumber:String
  city:String
  hospital:String
  health_condition:String
  primary_emergency:String
  secondary_emergency:String
}

####################### Types ##############################

type Token {
    token: String!
}

type User{
   _id: ID
  name:String
  surname:String
  age:String
  email:String
  cellnumber:String
  city:String
  hospital:String
  health_condition:String
  primary_emergency:String
  secondary_emergency:String
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
