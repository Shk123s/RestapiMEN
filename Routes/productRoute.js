const express = require('express');
const router = express.Router();

const {AllProduct,AddProduct,GetProductbyId,UpdateProduct,deleteProduct} = require("../controllers/crudProductCont");

router.get('/',AllProduct);
router.post('/',AddProduct )
router.get('/:id',GetProductbyId);
router.patch('/:id',UpdateProduct);
router.delete('/:id',deleteProduct);
module.exports = router
