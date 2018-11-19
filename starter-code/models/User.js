const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Boss', 'Developer', 'TA'],
    default: 'TA',
    required: true
  }
});


const User = mongoose.model("User", userSchema);
module.exports = User;