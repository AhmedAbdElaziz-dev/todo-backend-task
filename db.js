var mongoose = require('mongoose');
const uri=process.env.DataBase_Connection
mongoose.connect(uri, {useNewUrlParser: true}).then(()=>{
    console.log("connect to mongoDB successfully")
})
.catch((error)=>{
    console.error(error);
});




