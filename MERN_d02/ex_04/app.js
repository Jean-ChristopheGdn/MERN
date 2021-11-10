const mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1:27017/mern-pool', 
{
 useUnifiedTopology: true,
 useNewUrlParser: true,
 useCreateIndex: true
})
 .then(() => console.log('Connection succesful!'))
 
 .catch(err => 
{
 console.log(`Connection failed: ${err.message}`);
});
