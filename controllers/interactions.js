const Reaction = require('../models/reactions');

const handleLike = async (req,res) => {
    
    const post = await Reaction.findOne( { bid: req.params.bid } );

    if (!post) {
        const newReaction = new Reaction({
            bid: req.params.bid,
            like: [{ name: req.session.username }],
          });
      
          await newReaction.save();
    }
    else {
        const hasUserLiked = post.like.some((like) => like.name === req.session.username);


        if (!hasUserLiked) {
        post.like.push({ name: req.session.username });
        await post.save();
        }
        else {
            post.like.remove({ name: req.session.username});
            await post.save();
        }
    }
    res.redirect('/view/' + req.params.bid);
}

const handleComment = async (req,res) => {
    const post = await Reaction.findOne( { bid: req.params.bid } );

    if (!post) {
        const newReaction = new Reaction({
            bid: req.params.bid,
            comment: [{ name: req.session.username, comm: req.body.comment }],
          });
      
          await newReaction.save();
    }
    else {
        post.comment.push({ name: req.session.username, comm: req.body.comment });
        await post.save();
        
    }
    res.redirect('/view/' + req.params.bid);

};

module.exports = {handleLike, handleComment};