const userModel = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function addUser(data) {

    const salt = await bcrypt.genSalt(10);
    const pwd = await bcrypt.hash(data.password, salt);
    const newUser = new userModel({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        profession: data.profession,
        password: pwd
    });

    return await newUser.save()
}

async function allUsers() {
    const showUsers = await userModel.find({});
    return showUsers;

}

async function filterUsers(id) {
    const user = await userModel.findOne({ _id: id })
    return user;
}

async function deleteUser(id) {
    const deletedUser = await userModel.deleteOne({ _id: id });
    return deletedUser;
}

async function updateUser(id, user) {
    const updatedUser = await userModel.updateOne({ _id: id }, user);
    return updatedUser;
}

/*async function filterUsers(userName) {
    const user= await modelUser.findOne({userName:userName})
    return user;
} */

async function loginUser(userLogin) {
    const loginofUser = await modelUser.findOne({ userName: userLogin.userName })
    if (loginofUser) {

        if (bcrypt.compare(userLogin.password, loginofUser.password)) {
            const user = ({ 
                email: loginofUser.email,
                firstName: loginofUser.firstName,
                lastName: loginofUser.lastName,
                profession: loginofUser.profession,
            
             });
            const token = jwt.sign({ user }, process.env.SECRET_KEY, {
                //expiresIn: '1m'
            });
            return { token: token }
        }
    }
    else { return false }

    //console.log(loginofUser);
    //return loginofUser;
}


function secureToken(req, res, next) {
    let bearerToken = req.headers['authorization']
    if (typeof bearerToken !== 'undefined') {
        const bearer = bearerToken.split(' ');
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else {
        res.sendStatus(403);
    }
}


module.exports = { secureToken,filterUsers, addUser, allUsers, deleteUser, updateUser, loginUser, }