const mongoose = require("mongoose");

const mediasSchema = new mongoose.Schema({

    video: {
        type: String,
    },

    image: {
        type: String,
    },

}, {timestamps: true});

module.exports = mongoose.model("Medias", mediasSchema);