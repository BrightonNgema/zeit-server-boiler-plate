const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    blogImage: {
        type: String,
        // required: true
    },
    topic: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: new Date().toLocaleString()
    }
});

module.exports = mongoose.model("Blog", BlogSchema);
