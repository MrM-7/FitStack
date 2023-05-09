import User from '../model/userModel.js'

// login user
const loginUser = async (req, res) => {
    res.json({msg: 'login user'})
}


// signup user
const signupUser = async (req, res) => {
    res.json({msg: 'signup user'})
}


export {
    loginUser,
    signupUser
}