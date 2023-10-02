const user=require('../users')
const bcrypt = require('bcrypt')


const welc = (req,res)=>{
    res.send('welc')
}

// Route to render the login form
 const home = (req, res) => {
    res.render('pages/login')
};


// Route to handle form submission
const register= async(req, res) => {
    const {fullName,email,password}= req.body;

    const hashPassword = await bcrypt.hash(password,10)
    const data= await user.create({fullName,email,'password':hashPassword})

    // return res.send(data)
    // const password = req.body.password;
    if (data) {
        res.send('created successfully');
    } else {
        res.send('Invalid credentials. Please try again.');
    }
}

// app.get((err,data)=>{
//     if (err){
//         console.log(err);
//         res.send();
//     }
//     else{res.end(data)}
// })

module.exports = {
    home,
    register,
    welc
}