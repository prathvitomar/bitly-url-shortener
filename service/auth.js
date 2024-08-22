const jwt = require('jwt');
const secret = "prathvi@123$";

function setUser(user){
    return jwt.set({
        _id : user._id,
        email : user.email,
        role : user.role
    }, secret);
}

function getUser(token){
    if(!token) return null;
    return jwt.verify(token, secret);
}

module.exports = {
    setUser,
    getUser
}