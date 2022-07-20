const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');
const router = express.Router();
// the direction of the routes
const login = require('./login.js');
const register = require('./register.js');
const profile = require('./self-profile.js');

//end of the direction to the routes

router.route('/').
	get((req,res) => {
		res.status(200).send('this is the sitepage');
	});

//if user is logged in then continue to the homepage
//and have passed in the name of the user in the url
router.use('/login', login);

router.use('/register', register);

//the logic to see if the name is in the database should be done here

router.use('/:name', profile);


module.exports = router;
