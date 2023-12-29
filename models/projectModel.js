const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imageSchema = new Schema({
    url: String,
    fileName: String
})

imageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_100');
})
const projectsSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: [imageSchema],
});

module.exports = mongoose.model('Project', projectsSchema);