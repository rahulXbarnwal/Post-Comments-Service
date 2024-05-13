import jwt from "jsonwebtoken";

// verify Token
export const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid!");
        return;
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
    return;
  }
};
