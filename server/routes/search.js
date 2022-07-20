const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');
const router = express.Router();

router.route('/').
	get((req,res) => {
		res.status(200).send('this in search area');
	});


router.route('/:user').
	get((req,res) => {
		console.log(req.params);
		res.status(200).send(`The user ${req.params.user} is found `);
	});


module.exports = router;
