
const Users = require("./auth.model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const register = async (req, res,next) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  try {
    const saved = await Users.create(user);
    res.status(201).json(saved);
  } catch(e) {
      next({status:500, message:"Couldnt register user, "+e.message})
  }
};

const login = async (req, res,next) => {
  let { username, password } = req.body;
  try {
    const user = await Users.findBy({ username }).first()

    if (user && bcrypt.compareSync(password, user.password)) {
      const {id} = user;
      const token = getToken({username})
      res.status(200).json({
        id,
        token,
      });
    } 
    else res.status(401).json({ message: "Invalid Credentials" });
    
  } catch(e) {
    next({status:500,message:"Login failed, "+e.message})
  }


};
function getToken(username) {
  const payload = {
    username
  }
  const secret = process.env.JWT_SECRET
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, secret, options)
};
module.exports = {
    login,
    register
}