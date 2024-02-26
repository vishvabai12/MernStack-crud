const User = require('../models/user');


exports.createUser = async (req, res) => {
    try {
      console.log('Request Body:', req.body);
      const user = await User.create(req.body);
      console.log('User created:', user);
      res.status(201).json({ user });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(400).json({ message: error.message });
    }
  };


  exports.loginUser = async (req, res) => {
    const { username, password } = req.query;
    console.log("username :", username, "Password:", password );
  
    try {
        // Find user by username
        const user = await User.findOne({ username });
  
        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
  
        // Check if passwords match
        if (password !== user.password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
  
        // If username and password match, return user details
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

  
  



exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
