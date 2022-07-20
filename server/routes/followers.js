const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');
const router = express.Router();

router.route('/').
	get((req,res) => {
		res.status(200).send('you are followed by this people');
	});


module.exports = router;
