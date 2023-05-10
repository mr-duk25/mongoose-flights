var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');


// GET request to /flights
router.get('/', ticketsCtrl.index);



module.exports = router;