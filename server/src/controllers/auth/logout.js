const logoutController = (req, res) => {
  const { token } = req.cookies;
  console.log(token);

  if (!token) {
    res.status(401).json({
      data: {
        message: 'UnAuthenticated',
      },
    });
  } else {
    res.clearCookie('token').status(200).json({
      data: {
        message: 'User Logged Out Successfully',
      },
    });
  }
};

module.exports = { logoutController };
