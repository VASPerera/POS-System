const express = require("express");
const customerController = require("../controller/CustomerController");

const verifyUser = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post('/create',customerController.create);
router.get('/find-by-id/:id',customerController.findById);
router.delete('/delete-by-id/:id',customerController.deleteById);
router.put('/update/:id',customerController.update);
router.get('/find-all',customerController.findALL);
router.get('/find-all-count',customerController.findALLCount);

module.exports = router;