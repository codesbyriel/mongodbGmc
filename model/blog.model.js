const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        require:true,
        type: String
    },
    content: {
        require:true,
        type: String
    },
    author:{
        type: String,
        default: "Gabriel"
    },
    tags:{
        require: true,
        type: [String]
    },
    comments:{
        type: Array,
        require: true
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    likes: {
         type: Number,
         default: 0
    },
})

const blogModel = mongoose.model('Blogs', blogSchema)


module.exports = {
    blogModel
} 