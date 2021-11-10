const mongoose = require('mongoose');

const userSchema = mongoose.Schema
({
    name:
    {
        type:String,
        require:true,
        minlength:5,
        maxlength:20
    },
    email:
    {
        type:String,
        require:true,
        unique: 1,
        trim: true
    },
    password:
    {
        type:String,
        require:true,
        minlength:6   
    },
    Role:
    {
        type:Boolean,
        require:true,    
    }
})

const bcrypt = require('bcrypt')
let salt = 10;

userSchema.pre('save', function(err, salt)
{
    var user = this;  //
    if(user.isModified('password'))
    {
        bcrypt.genSalt(Salt, function(err, hash)
        {
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash)
            {
                if(err) return next(err);
                user.password = hash;
                next();
            })
            
        })
    }
    else
    {
        next()
    }
    
})

userSchema.methods.comparePassword = function(candidatePassword, checkpassword)
{
    bcrypt.compare(candidatePassword, this.password,function(err, isMatch)
    {
        if(err) return checkpassword(err)
        checkpassword(null, isMatch)
    })
}

const User =mongoose.model('User', userSchema);
module.exports ={ User }

