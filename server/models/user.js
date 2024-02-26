const mongoose = require('mongoose');

// Define the schema for your user collection
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
 

  // organization: {
  //   type: String,
  //   required: true
  // }
});


// Export the model associated with the 'Details' collection in the 'Emloyee' database
module.exports = mongoose.model('User', userSchema, 'Details');
