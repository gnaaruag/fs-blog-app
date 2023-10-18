const User = require("../models/user");
const bcrypt = require('bcrypt');


const signup = (req, res) => {
    res.render('signup');
}

const login = (req, res) => {
    res.render('login');
}

const onboardUser = async (req,res) => {
    console.log(req.body);
    const hashed = await bcrypt.hash(req.body.password, 10);

    console.log(hashed);

    const data = User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: hashed,
    });

    await data.save()
        .then(() => {
            console.log("Data saved");
        })
        .catch((error) => {
            console.log("Error:", error);
        });

    res.redirect('login');
};

const verifyLogin = async (req,res) => {
    console.log(req.session.id)
    console.log(req.body);
    const mail = req.body.email;
    const password = req.body.password;
    try {
      const data = await User.findOne({ email: mail });
      if (!data) {
        res.redirect('/login')
      }
      console.log(data);
      if ((await bcrypt.compare(password, data.password))) {
            req.session.isAuth = true;
            if (mail == 'admin@blog.com') {
                res.redirect('/admin-dashboard');
            }
            else {
                req.session.username = data.name;
                // console.log(req.session.username);
                res.redirect('/read');
            }
        } 
        else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        res.send('error');
    }
};

module.exports = {signup, login, onboardUser, verifyLogin}
