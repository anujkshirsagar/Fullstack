const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
  try {
    const username = req.headers.username;
    const password = req.headers.password;

    const admin = await Admin.findOne({ username, password });

    if (admin) {
      next(); // move to the next middleware or route
    } else {
      res.status(403).json({ msg: "Admin doesn't exist" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
}

module.exports = adminMiddleware;
