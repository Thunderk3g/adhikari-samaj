const jwt = require("jsonwebtoken");

CheckToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.secret, (err,user) => {
        console.log(err);

        if (err) return res.sendStatus(403);

        req.user = user;

        next();
  })
}

const authCheck = {

    CheckToken
  
  };
  
  
  module.exports = authCheck;