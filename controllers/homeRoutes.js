const router = require('express').Router();
const {  User, FavTrails } = require('../models');
const withAuth = require('../utils/auth');
const trails = require('../db/trails.json');

router.get('/', async (req, res) => {
	try {
		res.render('homepage', { logged_in: req.session.logged_in })
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/aboutUs', async (req, res) => {
	try {
		res.render('aboutUs', { logged_in: req.session.logged_in })
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/favTrails', async (req, res) => {
	try {
		const trailsDataRaw = await FavTrails.findAll({
		});;
		const trailsData = trailsDataRaw.map(post => post.get({plain: true}))
		console.log(trailsData)
		res.render('favTrails', { trailsData, logged_in: req.session.logged_in })
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/trails', async (req, res) => {
	try {
		const trailsData = trails.data
		// console.log(trailsData)
		res.render('trails', {trailsData, logged_in: req.session.logged_in })
	} catch (err) {
		res.status(500).json(err);
	}
});


router.get('/login', (req, res) => {
	// If the user is already logged in, redirect the request to another route
	if (req.session.logged_in) {
		res.redirect('/');
		return;
	}
// Otherwise, render the 'login' template
	res.render('login');
});

module.exports = router;
