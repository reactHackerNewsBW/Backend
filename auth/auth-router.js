const router = require('express').Router();

const users = require('./auth-model');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;


  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  users.register(user)
    .then(saved => {
      res.status(200).json(saved)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.post('/login', (req, res) => {
  // implement login
  let {username, password} = req.body;
  users.findBy({ username })
  .first()
  .then(user => {
  
    if (user && bcrypt.compareSync(password, user.password)){
      const token = getJwtToken(user.username)
      res.status(200).json({ message: `Welcome ${user.username}`, token })
    }
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

function getJwtToken(username) {
  const payload = {
    username
  }
  const secret = process.env.JWT_SECRET || 'is it secret, is it safe?'
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, secret, options)
};


module.exports = router;

//done