const log = require("debug")("fruits:models:User")
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
log("User model created");

module.exports = User;