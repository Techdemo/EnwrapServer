const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

exports.create = async (req, res, next) => {
  const { 
    username, 
    password,
    name,
    lastname,
  } = req.body;

  if(!password || !username || !name || !lastname ) {
    return res.status(400).json({
      resolved: "failure",
      message: "fields can not be empty",
    })
  } try { 
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      name: req.body.name,
      lastname: req.body.lastname
    });

    const savedUser = await user.save();

    res.json(savedUser);
  } catch(err) {
    res.status(400).json({ msg: err.message })
  }
}

exports.list = async (req, res, next) => {
  User.find()
  .then((users) => {
    res.status(200).json({
      resolved: "success",
      data: {
        users: users,
      },
    });
  })
  .catch((err) => {
    res.stats(500).json({
      resolved: "failure",
      message: "Some error occurred while retrieving Users.",
      error: err,
    });
  })
}

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!password || !username) {
    return res.status(400).json({
      resolved: "failure",
      message: "fields can not be empty"
    });
  }

  try { 
    //check for existing user
    const user = await User.findOne({ username })
    if (!user) return res.status(400).json({ msg: "User does not exist"});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('invalid credentials');

    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: 3600 });
    if (!token) throw Error('Could not sign the token');

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
      }
    })
  } catch(err) {
    res.status(400).json({ msg: err.message })
  }
}