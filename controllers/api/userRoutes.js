const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new user
router.post('/register', async (req, res) => {
  try {
    const UserData = await User.create({
      username: req.body.username,
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });
    // console.log(UserData);

    // Set up sessions with the 'loggedIn' variable
    req.session.save(() => {
      // Set the 'loggedIn' session variable to 'true'
      req.session.logged_in = true
    
      res.status(200).json(UserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const UserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!UserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await UserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      // Once the user successfully logs in, set up sessions with the 'loggedIn' variable
      req.session.logged_in = true;
      res
        .status(200)
        .json({ user: UserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, the session is destroyed
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
