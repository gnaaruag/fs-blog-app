const Blog = require('../models/blog');
const Reaction = require('../models/reactions');


const admin = async (req,res) => {
    const allBlogs = await Blog.find().sort({_id:-1});
    // console.log(allBlogs);
    var send = []

    for (const element of allBlogs) {
        const post = await Reaction.findOne( { bid: element.bid } ).exec();

        var y = 0;
        var z = 0;
        if (post) {
            var y = post.like.length;
        var z = post.comment.length;
        }
        
        var x =  {
            bid: element.bid,
            title: element.title,
            image: element.image,
            content: element.content,
            tags: element.tags,
            likes: y,
            comments: z,
        }
        console.log('xval' +x);
        send.push(x);
    }

    console.log(send);
    res.render('admindash', { send });
};

const read = async (req,res) => {
    req.session.isAuth = true;
    const allBlogs = await Blog.find().sort({_id:-1});
    var send2 = []

    for (const element of allBlogs) {
        const post = await Reaction.findOne( { bid: element.bid } ).exec();
        var y = 0;
        var z = 0;
        if (post) {
            var y = post.like.length;
        var z = post.comment.length;
        }
        console.log('len'+y);
        var x =  {
            bid: element.bid,
            title: element.title,
            image: element.image,
            content: element.content,
            tags: element.tags,
            likes: y,
            comments: z,
        }
        console.log('xval' +x);
        send2.push(x);
    }

    const send = {name: req.session.username, send2};

    res.render('frontpage', { send });
}

const filter = async (req,res) => {
    const allBlogs = await Blog.find().sort({_id:-1});
    var send2 = []

    for (const element of allBlogs) {
        const post = await Reaction.findOne( { bid: element.bid } ).exec();
        const arr = element.tags.split(', ');
        const target = req.body.theme;
        for (ele of arr) {
            if (arr.includes(target)) {
                var y = post.like.length;
                var z = post.comment.length;
                var x =  {
                bid: element.bid,
                title: element.title,
                image: element.image,
                content: element.content,
                tags: element.tags,
                likes: y,
                comments: z,
            }
            send2.push(x);
            break;
            }
        }
        
    }

    const send = {name: req.session.username, send2};

    res.render('frontpage', { send });
};

 

module.exports = {admin, read, filter};