const authService = require("../services/auth.service");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const result = await authService.signup({ name, email, password });

    return res.status(201).json({
      message: "Signup successful",
      user: result.user,
      token: result.token,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login({ email, password });

    return res.status(200).json({
      message: "Login successful",
      user: result.user,
      token: result.token,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.logout = async (req, res) => {
  return res.status(200).json({
    message: "Logout successful",
  });
};
