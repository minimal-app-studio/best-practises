const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb+srv://parthipan:ydxfhD4Qbs5vh3J4@cluster0.2xmch.mongodb.net/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String
  });

const User = new mongoose.model('User', userSchema);

(async function init(){
    await main();
    console.log("after connecting mongoose");
    

     const harish = new User({
        name: "harish",
        age: 22,
        address: "1/91/1, East street"
     })

     console.log(harish);
})();
