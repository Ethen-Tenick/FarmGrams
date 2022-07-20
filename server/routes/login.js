const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');

const router = express.Router();

router.use(express.urlencoded({ extended: false}));
const page = '/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/client/login'


router.use(express.static(page));

router.route('/').
	post((req,res) => {
		console.log(req.body)
		res.redirect('/');
	});


module.exports = router;
