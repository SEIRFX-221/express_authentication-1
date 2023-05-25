const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Database
const { user } = require('../models');