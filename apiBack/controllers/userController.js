const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secretKey = 'rL#1ZnKw$*8vT2&@Gq$y9uU#P6pXcJhL';

const userController = {
    create: async (req, res) => {
        try {
            const user = {
                email: req.body.email,
                password: req.body.password
            };
            const response = await User.create(user);

            // Após criar o usuário, gere um token JWT
            const token = jwt.sign({ userId: response._id }, secretKey, { expiresIn: '1h' });

            res.status(201).json({ response, token, msg: "User criado" });
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const user = await User.find();
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req,res)=>{
        try {
            const id = req.params.id
            const user = await User.findById(id);
            if(!user){
                res.status(404).json({msg:"User not found"})
                return;
            }
            res.json(user);
            
        } catch (error) {
            console.log(error)
        }
    },
    delete: async(req,res)=>{
        try {
            const id = req.params.id    
            const user = await User.findById(id);
            if(!user){
                res.status(404).json({msg:"User not found"});
                return;
            }
            const deletedUser = await User.findByIdAndDelete(id);
            res.status(200).json({deletedUser,msg:"User deleted"});

        } catch (error) {
            console.log(error)
        }
     },
    update: async(req,res)=>{
        try {
            const id = req.params.id    
            
            const user = {
                email:req.body.email,
                password:req.body.password
            };
            
            const updatedUser = await User.findByIdAndUpdate(id, user);
            res.status(200).json({user,msg:"User Updated"})
            
        } catch (error) {
            console.log(error)
        }
    },
    authenticate: async (req, res) => {
        const { email, password } = req.body;

        // Verifique as credenciais do usuário
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ msg: "Credenciais inválidas" });
        }

        // Se as credenciais são válidas, gere um token JWT
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

        res.json({ token, msg: "Autenticado com sucesso" });
    }
};

module.exports = userController;