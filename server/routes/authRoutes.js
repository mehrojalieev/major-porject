const express = require('express');
const passport = require('passport');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// Register and login routes
router.post('/register', register);
router.post('/login', login);

// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  res.redirect('/'); // Redirect after successful login
});

module.exports = router;
