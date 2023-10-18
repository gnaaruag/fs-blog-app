const Blog = require("../models/blog.js");
const Reaction = require('../models/reactions.js')

const requestUpdate = async (req,res) => {
    // console.log(req.params.bid);
    const data = await Blog.findOne({ bid: req.params.bid });
    
    const send = {
        bid: req.params.bid,
        title: data.title,
        image: data.image,
        content: data.content,
        tags: data.tags,
    }
    console.log(send);

    res.render('updatepost', { send });
};

const handleUpdate = async (req, res) => {
    console.log(req.body)
    const data = {
        bid: req.params.bid,
        title: req.body.title,
        image: req.body.link,
        content: req.body.content,
        tags: req.body.tags,
    };
    const {title, link, tags, content} = req.body;
    const bid = req.params.bid;

    const doc = await Blog.findOneAndUpdate( { bid: req.params.bid }, data )
    
    res.redirect('/admin-dashboard');
}

const deletePost = async (req,res) => {
    await Blog.deleteOne({ bid: req.params.bid });
    res.redirect('/admin-dashboard');

};

const viewPost = async (req,res) => {
    // console.log(req.params.bid);
    const react = await Reaction.findOne( { bid: req.params.bid } ).sort({_id:-1});
    // console.log(react);
    var yn = false;

    var com = [];
    var nc = 0;

    // console.log(react.comment);
    if (!react) {
        yn = false;
        
    }
    else {
        var com = react.comment;
            var nc = react.comment.length;
        react.like.forEach(element => {
            console.log(req.session.username)
            if (element.name === req.session.username) {
                yn = true;
            }
        });
    }

    
      
      
      
    const data = await Blog.findOne({ bid: req.params.bid });
    // console.log(data);

    const send = {
        isLiked: yn,
        bid: req.params.bid,
        title: data.title,
        image: data.image,
        content: data.content.split('\n'),
        tags: data.tags.split(','),
        comments: com,
        noCom: nc,
    }
    console.log(send);
    res.render('viewpost', { send });

};


module.exports = { requestUpdate, handleUpdate, deletePost, viewPost};
