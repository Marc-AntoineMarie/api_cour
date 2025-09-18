const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    medias_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medias",
        required: true,
    },

    commentary: {
        type: String,
        required: true,
    },

    like: {
        type: Number,
        required: true,
        default: 0,
    },

    vue: {
        type: Number,
        required: true,
        default: 0,
    },

}, {timestamps: true});

module.exports = mongoose.model("Post", postSchema);


