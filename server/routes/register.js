const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');

const router = express.Router();

const {createUser,logUser} = require('/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/server/middlewares/users.js');

const pages = '/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/client/register'

const { availability } = require('/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/server/database/db.js');

router.use(express.urlencoded({ extended: false}));


router.use(express.static(pages));

router.route('/').
	post(createUser,(req,res) => {
			res.redirect('/');
	});


module.exports = router; 
