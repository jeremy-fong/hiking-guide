require('dotenv').config();
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

router.get('/favTrails', withAuth, async (req, res) => {
	try {
		const trailsDataRaw = await FavTrails.findAll({
		});;
		const trailsData = trailsDataRaw.map(post => post.get({plain: true}))
		res.render('favTrails', { trailsData, logged_in: req.session.logged_in })
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/trails', withAuth, async (req, res) => {
	try {
		const trailsData = trails.data
		// console.log(trailsData)
		res.render('trails', {trailsData, logged_in: req.session.logged_in })
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/location', async (req, res) => {
	console.log(req.body.longitude, req.body.latitude)
	console.log(process.env.TRAILAPIKEY)
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': `${process.env.TRAILAPIKEY}`,
			'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
		}
	};
	console.log(options);
	fetch(`https://trailapi-trailapi.p.rapidapi.com/activity/?lat=${req.body.latitude}&limit=10&lon=${req.body.longitude}&radius=25&q-activities_activity_type_name_eq=hiking`, options)
		.then(response => response.json())
		.then(response => console.log('fetch',response))
		.catch(err => console.error(err));
	// try {
	// 	const trailsData = trails.data
	// 	console.log(trailsData)
	// 	res.render('trails', {trailsData, logged_in: req.session.logged_in })
	// } catch (err) {
	// 	res.status(500).json(err);
	// }
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
