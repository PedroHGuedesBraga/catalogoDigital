const router = require("express").Router()

const userController = require("../controllers/userController");
const authenticateUserJWT = require('../middleware/authMid');

router.route("/user").post(authenticateUserJWT,(req,res)=>userController.create(req,res));
router.route("/user").get(authenticateUserJWT,(req,res)=> userController.getAll(req,res));
router.route("/user/:id").get(authenticateUserJWT,(req,res)=>userController.get(req,res));
router.route("/user/:id").delete(authenticateUserJWT,(req,res)=>userController.delete(req,res));
router.route("/user/:id").put(authenticateUserJWT,(req,res)=>userController.update(req,res));
router.route("/auth/login").post((req, res) => userController.authenticate(req, res));





module.exports = router;