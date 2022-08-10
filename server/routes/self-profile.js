const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');
const router = express.Router();

const page = '/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/client/profile'

// module imports required
const follow = require('./follow.js');
const settings = require('./settings.js');
const subscribe = require('./subscribe.js');
const dms = require('./dms.js');

//end of module imports

router.use(express.static(page));

router.route('/').
	get((req,res) => {
		res.status(200);
});


router.use('/follow',follow);
router.use('/settings',settings);
router.use('/subscribe',subscribe);
router.use('/dms',dms);


module.exports = router;
