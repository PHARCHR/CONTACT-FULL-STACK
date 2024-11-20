const jwt = require("jsonwebtoken");
const BadRequest = require("../error/BadRequest");
const authentication = (req, res, next) => {
  // const { jwt: token } = req.cookies;
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).send('Authorization token required');
  }
  const token = authHeader.split(' ')[1]; 

 
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
  } catch (error) {
    console.log("yo,your token")
    throw new BadRequest("YOUR ARE NOT AUTHORIZED");
    
  }

  next();
};
module.exports = authentication;
