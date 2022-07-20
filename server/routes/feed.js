const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');
const router = express.Router();

// module imports neccessary for
const top_20 = require('./top-20.js');

//end of module needed


router.route('/')
.get((req,res) => {
    res.status(200).send('this is the news page'); 
});

router.use('/top20',top_20);

module.exports = router;
