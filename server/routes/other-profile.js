const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');
const router = express.Router();

// module imports required
const followers = require('./followers.js');
const following = require('./following.js');
const subscriber = require('./subscriber.js');

//end of module imports

router.route('/')
.get((req,res) => {
    console.log(req.params);
    res.status(200).send('this is other users profile area ');
});


router.use('/followers',followers);

router.use('/following',following);

router.use('/subscriber',subscriber);



module.exports = router;

