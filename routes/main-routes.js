const express           = require('express');
const router            = express.Router();
const mainControllers   = require('../controllers/main-controllers');

router.post("/test",mainControllers.testFunction);

router.post("/getAllQuestions",mainControllers.getAllQuestions);
router.post("/addQuestions",mainControllers.addQuestion);


module.exports = router;