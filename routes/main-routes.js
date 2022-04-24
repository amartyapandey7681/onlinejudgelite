const express           = require('express');
const router            = express.Router();
const mainControllers   = require('../controllers/main-controllers');

router.post("/test",mainControllers.testFunction);


module.exports = router;