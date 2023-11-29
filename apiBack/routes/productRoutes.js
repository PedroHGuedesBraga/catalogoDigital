const router = require("express").Router()


const productController = require("../controllers/productController");
const authenticateUserJWT = require('../middleware/authMid');

router.route("/product").post(authenticateUserJWT,(req,res)=>productController.create(req,res));
router.route("/product").get((req,res)=>productController.getAll(req,res));
router.route("/product/:id").get((req,res)=>productController.get(req,res));
router.route("/product/:id").delete(authenticateUserJWT,(req,res)=>productController.delete(req,res));
router.route("/product/:id").put(authenticateUserJWT,(req,res)=>productController.update(req,res));




module.exports = router;