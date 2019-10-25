const jwt = require("jsonwebtoken");
const moment = require("moment");
const createToken = (newUser, secret) => {
  const { _id, cellnumber, deviceId } = newUser;
  const expiresIn = "365d";
  const token = jwt.sign({ _id, cellnumber, deviceId }, secret, { expiresIn });

  return { token };
};

module.exports = resolvers = {
  Query: {
    users: async (root, args, { User, currentUser }) => {
      const allUsers = await User.find().sort({ createdDate: "asc" });
      return allUsers;
    },
  },
  Mutation: {
    signup: async (root, { input }, { User }) => {
      const userExists = await User.findOne({
        cellnumber: input.cellnumber,
        email: input.email
      });

      if (userExists) throw Error("User already Registered");
      const newUser = await new User({
        ...input
      }).save();

      return newUser;
    }
  }
};
