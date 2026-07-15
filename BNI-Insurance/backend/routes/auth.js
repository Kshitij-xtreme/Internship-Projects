const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Admin credentials are stored in .env (see README for default values)
// In production, replace this with a proper hashed-password database table.
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@bniservices.in';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@123';

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign(
      { email, role: 'admin' },
      process.env.JWT_SECRET || 'bni_super_secret_change_this_in_production',
      { expiresIn: '8h' }
    );
    return res.json({ success: true, token, message: 'Login successful' });
  }

  return res.status(401).json({ success: false, message: 'Invalid email or password' });
});

module.exports = router;
