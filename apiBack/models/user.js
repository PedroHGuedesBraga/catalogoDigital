const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
{timestamps:true}
);
userSchema.pre('save', function(next){
    //verificar se o registro é novo ou se houve modificação no password
    if(this.isNew || this.isModified('password')){
    bcrypt.hash(this.password, 10,
    (err, hashedPassword) => {
    if(err)
    next(err)
    else{
    this.password = hashedPassword;
    next();
    }
    }
    )
    }
    });

const User = mongoose.model("User",userSchema);

module.exports = User;