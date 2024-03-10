const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

// to add a new user
const addUser = async (req, res) => {
    console.log(req.body);
    const user = await User.create(req.body);
   if(user){
    res.send(user)
   }else{
    res.send("Error")
   }
}


// to Login 
const login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({email});
    console.log(user);
    if(user && user.password === password){
        const token = jwt.sign({user}, 'webpaint');
        // console.log("token=>" , user,token);
        res.status(200).send(token)
    }else{
        res.status(400).send("Check your id and password");
    }
}

// to Get All Users
const getAllUsers = async (req, res) => {
    const users = await User.find();
    if(users){
        res.send(users)
    }else{
        res.send("No users found");
    }
    
}

// to Delete a User 

const deleteUser = async (req, res) => {
    console.log(req.body);
    const { email } = req.body;
    const user = await User.findOneAndDelete({email});
    if(user){
        res.status(200).send(user);
    }else{
        res.send("Error")
    }
};






module.exports = {addUser,getAllUsers,login, deleteUser};