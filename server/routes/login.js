const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');

const router = express.Router();

const {createUser,logUser} = require('/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/server/middlewares/users.js');

const page = '/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/client/login'


router.use(express.urlencoded({ extended: false}));

router.use(express.static(page));

router.route('/').
	post(logUser,(req,res) => {
		res.status(200);
	});

module.exports = router; 
