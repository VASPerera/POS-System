const express = require("express");
const orderController = require("../controller/OrderController");

const verifyUser = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post('/create',orderController.create);
router.get('/find-by-id', verifyUser,orderController.findById);
router.delete('/delete-by-id',verifyUser,orderController.deleteById);
router.put('/update',verifyUser,orderController.update);
router.get('/find-all',verifyUser,orderController.findALL);
router.get('/find-all-count',orderController.findALLCount);
router.get('/find-all-income',orderController.findALLIncome);

module.exports = router;