const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Organization', organizationSchema);