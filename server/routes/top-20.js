const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');
const router = express.Router();

// module imports neccessary for
const farms = require('./farms.js');
const tools = require('./tools.js');
const crops = require('./crops.js');
const livestock = require('./livestock.js');

//end of module needed


router.route('/')
.get((req,res) => {
    console.log(req.params);
    res.status(200).send('welcome to the top 20');
});

router.use('/farms',farms);
router.use('/tools',tools);
router.use('/crops',crops);
router.use('/livestock',livestock);

module.exports = router;
