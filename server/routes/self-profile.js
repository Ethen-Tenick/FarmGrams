const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');
const router = express.Router();

// module imports required
const explore = require('./explore.js');
const news = require('./feed.js');
const search = require('./search.js');
const followers = require('./followers.js');
const following = require('./following.js');
const settings = require('./settings.js');
const subscriber = require('./subscriber.js');
const dms = require('./dms.js');

//end of module imports

router.route('/')
.get((req,res) => {
	console.log(req.params);
	res.status(200).send('this is the homepage of the profile name');
});


router.use('/explore',explore);

router.use('/news',news);

router.use('/search',search);

router.use('/followers',followers);

router.use('/following',following);

router.use('/settings',settings);

router.use('/subscriber',subscriber);

router.use('/dms',dms);



module.exports = router;
