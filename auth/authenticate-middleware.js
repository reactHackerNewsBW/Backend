module.exports = (req, res, next) => {
    res.status(401).json({ you: 'shall not pass!' });
  };
  
  //done