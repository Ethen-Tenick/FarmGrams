const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');

const router = express.Router();

const page = '/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/client/sitepage'

const login = require('./login.js');

const register = require('./register.js');
const profile = require('./self-profile.js');
const news = require('./news.js');
const explore = require('./explore.js');
const top20 = require('./top-20.js');
const search = require('./search.js');


router.use(express.static(page));

router.route('/').
	get((req,res) => {
		res.status(200);
	});

//if user is logged in then continue to the homepage
//and have passed in the name of the user in the url

router.use('/login', login);
router.use('/register', register);
router.use('/news',news);
router.use('/search',search);
router.use('/explore',explore);
router.use('/top20',top20);

//the logic to see if the name is in the database should be done here

router.use('/:name', profile);


module.exports = router;
