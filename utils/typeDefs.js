module.exports = typeDefs = `
####################### Inputs ##############################

input BlogInput{
 title:String
  blogImage:String
  topic:String
  slug:String
  author:String
  blog:String
}

input SimilarInput{
  id: ID
 topic:String
}

####################### Types ##############################

type Token {
    token: String!
}

type Blog{
   _id: ID
  title:String
  blogImage:String
  topic:String
  slug:String
  author:String
  createdDate:String
  blog:String

}

type Topic{
  topic:String
}

####################### Queries ##############################
  # The "Query" type is the root of all GraphQL queries.
    type Query {
        getAllBlogs:[Blog]
        getBlogTopics:[Topic]
        getBlog(slug: String):Blog
        getSimilarBlogs(input:SimilarInput):[Blog]
        searchBlogs(searchTerm: String):[Blog]
    }

####################### Mutations ##############################
  # (A "Mutation" type will be covered later on.)
    type Mutation {
        createBlog(input:BlogInput) : Blog
    }

`;
