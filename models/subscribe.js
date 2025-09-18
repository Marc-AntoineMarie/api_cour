const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
    
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    notification: {
        type: Boolean,
        default: false,
    },
    
}, {timestamps: true});

module.exports = mongoose.model("Subscribe", subscribeSchema);
