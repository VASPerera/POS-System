const express = require("express");
const productController = require("../controller/ProductController");

const verifyUser = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post('/create',productController.create);
router.get('/find-by-id/:id',productController.findById);
router.delete('/delete-by-id/:id',productController.deleteById);
router.put('/update/:id',productController.update);
router.get('/find-all',productController.findALL);
router.get('/find-all-min',productController.findALLMin);

module.exports = router;