const router = require('express').Router();
const {  User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
	try {
		res.render('homepage', { loggedIn: req.session.loggedIn })
	} catch (err) {
		res.status(500).json(err);
	}
});

// router.get('/', async (req, res) => {
// 	try {
// 		res.render('homepage')
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });


router.get('/login', (req, res) => {
	// If the user is already logged in, redirect the request to another route
	if (req.session.logged_in) {
		res.redirect('/profile');
		return;
	}
// Otherwise, render the 'login' template
	res.render('login');
});

module.exports = router;
