const express = require('express');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config();

// const authRoutes = require('./routes/authRoutes');
require('./middlewares/authMiddleware');

const app = express();

app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
