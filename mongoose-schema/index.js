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
    

    // creating a user
     const harish = await User.create({
        name: "harish",
        age: 22,
        address: "1/91/1, East street"
     })

    // find a user

    const user = await User.findOne({
        name: "harish"
    })


    // update user
    const updatedUser = await User.findOneAndUpdate({
        name: "harish"
    }, {
        age: 23
    })

    console.log(updatedUser);

    // delete a user
    const deletedUser = await User.deleteOne({
        name: "harish"
    })

    console.log(deletedUser)

})();
