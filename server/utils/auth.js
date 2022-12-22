const jwt = require('jsonwebtoken');


module.exports = {
  signToken: function({ username, email, password }) {
    const payload = { username, email, password };

    return jwt.sign({ data: payload }, process.env.SECRET, { maxAge: process.env.EXPIRATION  });
  },
  authMiddleware: function({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
  
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    if (!token) {
      return req;
    }
  
    try {
      const { data } = jwt.verify(token, process.env.SECRET, { expiresIn: process.env.EXPIRATION  });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
  
    return req;
  }
};
