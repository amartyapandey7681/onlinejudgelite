const express           = require('express');
const router            = express.Router();
const mainControllers   = require('../controllers/main-controllers');

router.post("/test",mainControllers.testFunction);

router.post("/getAllQuestions",mainControllers.getAllQuestions);
router.post("/addQuestions",mainControllers.addQuestion);
router.post("/getAllResults",mainControllers.getAllResults);
router.post("/submitSolution",mainControllers.submitSolution);
router.post("/currentSubmitted",mainControllers.currentSubmitted);
router.post("/addUser",mainControllers.addUser);

module.exports = router;