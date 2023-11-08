const router = require("express").Router()

const userRouter = require('./userRoutes')

router.use("/",userRouter);

const productRouter = require("./productRoutes")
router.use("/",productRouter);

module.exports = router;