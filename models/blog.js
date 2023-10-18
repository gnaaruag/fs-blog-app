const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
    {
        bid: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },

        // image url can be stored, user can store the image on a site like imgur
        image: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },

        tags: {
            type: String,
            required: true,
        }


    }
);

const Blog = mongoose.model('Blog',blogPostSchema);

module.exports = Blog;