const express = require('/data/data/com.termux/files/usr/lib/node_modules/express');

const page = '/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/client/subscribe'

const router = express.Router();

router.use(express.static(page));

router.route('/').
    get((req,res) => {
        res.status(200);
    });


module.exports = router




