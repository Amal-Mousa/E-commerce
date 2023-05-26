const { verifyToken, CustomError } = require('../utils');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new CustomError(401, 'UnAuthenticated');
  } else {
    verifyToken(token)
      .then((decoded) => {
        req.user = decoded;
        next();
      }).catch(() => {
        res.clearCookie('token').json({
          message: 'UnAuthorized',
        });
      });
  }
};

module.exports = { checkAuth };
