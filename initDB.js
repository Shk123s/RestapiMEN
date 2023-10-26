const mongoose = require('mongoose');

module.exports = ()=>{  
// mongodb+srv://shaqeebData:<password>@cluster0.kyx4iij.mongodb.net/
// b5USGE0NfPlaO1TG
// { dbName:"shaqeebdata",
// user:"shaqeebdata",
// pass:"b5USGE0NfPlaO1TG"}
//will check this optional parameters wala
mongoose.connect('mongodb+srv://shaqeebData:b5USGE0NfPlaO1TG@cluster0.kyx4iij.mongodb.net/shaqeebData',
{
  useNewUrlParser:true,
  useUnifiedTopology:true})
.then(()=>{
    console.log("mongodb connected....");
}).catch((error)=>{
  console.log(error.message);
})
}