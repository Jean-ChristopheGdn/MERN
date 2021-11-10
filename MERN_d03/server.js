let express = require("express");
let app = express();
let port = 4242;
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/mern-pool', 
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log('Connection succesful!'))

.catch(err => 
    {
        console.log(`Connection failed:  ${err.message}`);
    });
    

    const{User} = require('./Model/user')
    
    app.post('/api/user/signup', (req, res)=> 
    {
        const user = new User
        ({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }).save((err, response)=>
        {
            if(err) res.status(400).send(err)
            res.status(200).send(response)
        })
    })


    app.post('/api/user/signin', (req, res)=> 
    {
        User.findOne({'email': req.body.email}, (err, user)=>
        {
            if(!user) res.json({message: 'user not found'})
            user.comparePassword(req.body.password, (err, isMatch)=>
            {
                if(err)throw err;
                if(!Match)return res.status(400).json
                ({
                    message:'Mauvais password'
                })
                res.status(200).send('vous etes connecter')
            })
        })
    });

app.listen(port, () => 
{
 console.log("Server lancer en port " + port);
});