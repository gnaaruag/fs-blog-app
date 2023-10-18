const Blog = require('../models/blog');
const idGen = require('../public/js/generatebid.js');


const create = (req, res) => {
    res.render('newblog');
}

const post = async (req,res) => {
    console.log(req.body)
    res.redirect('/admin-dashboard');
    var idInst = "";

    while (true) {
        idInst = idGen(8);
        const data = await Blog.findOne({ bid: idInst });
        if (!data) {
            break;
        }
    }

    console.log(idInst);
    const data = Blog({
        bid: idInst,
        title: req.body.title,
        image: req.body.link,
        content: req.body.content,
        tags: req.body.tags,
    });

    await data.save()
        .then(() => {
            console.log('data saved');
        })
        .catch((error) => {
            console.log(error);
        })


};

module.exports = {create, post};

