
const router = require("express").Router();
const { createProduct, getProducts, getProduct, getProductsByQuery, getProductsUnitStatus, getProductsOutOfStock, getProductsMinQuantity, getProductsNameAndQuantity }=require("../controllers/product")


router.get("/allproductNameAndQuantity", getProductsNameAndQuantity);
router.get("/:quantity", getProductsMinQuantity);
router.get("/outofstock", getProductsOutOfStock);
router.get("/:unit/:status", getProductsUnitStatus);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/:id/:status", getProductsByQuery);


router.post('/product', createProduct)

module.exports = router;