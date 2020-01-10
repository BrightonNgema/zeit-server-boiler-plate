const jwt = require("jsonwebtoken");
const moment = require("moment");
var mongoose = require('mongoose');

const createToken = (newUser, secret) => {
  const { _id, cellnumber, deviceId } = newUser;
  const expiresIn = "365d";
  const token = jwt.sign({ _id, cellnumber, deviceId }, secret, { expiresIn });

  return { token };
};


function getUnique(arr, comp) {

  const unique = arr
    .map(e => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

  return unique;
}

module.exports = resolvers = {
  Query: {
    getAllBlogs: async (root, args, { Blog, currentUser }) => {
      const allBlogs = await Blog.find().sort({ createdDate: 'desc' });
      return allBlogs;
    },
    getBlog: async (root, {slug}, { Blog, currentUser }) => {
      const blog = await Blog.findOne({ slug: slug });
      return blog;
    },
    getSimilarBlogs: async (root, { input }, { Blog, currentUser }) => {
      const blog = await Blog.find({ topic: input.topic, _id: { $ne: input.id}  });
      return blog;
    },
    getBlogTopics: async (root, args, { Blog, currentUser }) => {
      const allBlogs = await Blog.find();
      return getUnique(allBlogs, 'topic');
    },

    searchBlogs: async (root, { searchTerm }, { Recipe }) => {
      if (searchTerm) {
        const searchResults = await Blog.find({
          $text: { $search: searchTerm }
        }, {
          score: { $meta: "textScore" }
        }).sort({
          score: { $meta: "textScore" }
        });

        return searchResults;
      } else {
        const recipes = await Blog.find().sort({ createdDate: 'desc' })
        return recipes
      }
    }
  },
  Mutation: {
    createBlog: async (root, { input }, { Blog }) => {
      const blogExists = await Blog.findOne({
        title: input.title,
        slug: input.slug
      });

      if (blogExists) throw Error("Blog already Exists");
      const newBlog = await new Blog({
        ...input,
        topic:input.topic.toLowerCase()
      }).save();

      return newBlog;
    },
    
  }
};
