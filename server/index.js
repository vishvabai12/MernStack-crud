const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require("cors")
const bodyParser =require ("body-parser")

const organizationRoutes = require('./routes/organizationRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://Vetrikodi:vishva1705@vetrikodi.duvuxkj.mongodb.net/test?retryWrites=true&w=majority';
//const SECRET_KEY = process.env.SECRET_KEY || 'yoursecretkey';

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));
app.use(passport.initialize());
app.use(cors());

// Routes
app.use('/organizations', organizationRoutes);
app.use('/users', userRoutes);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));



  // Start the server
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });