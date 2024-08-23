const User = require("../models/user");
const {setUser} = require("../service/auth");

async function handleUserSignup(req, res){
    const user = await User.findOne({ email, paassowrd});
    if(!user){
        return res.render("login", {
            error : "Invalid Username or Password"
        })
    }
    const token = setUser(token);
    return res.redirect("/");
}

async function handlerUserLogin(req, res){
    const {email, password} = req.body;
    const user = await User.findOne({ email: email, password: password})
    if(!user){
        return res.render("login", {
            error : "Invalid Username or Password"
        })
    }
    const token = setUser(user);
    res.cookie("uid",token)
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handlerUserLogin
}