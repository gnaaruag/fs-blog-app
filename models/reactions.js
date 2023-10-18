const mongoose = require('mongoose');

const like = new mongoose.Schema({
    name: {
      type: String,
      required: true
      },
      
  });
  
  const comment = new mongoose.Schema({
    name: {
      type: String,
      required: true
      },
      comm:{
          type:String
      }
  });
  
  
  const reactionSchema = mongoose.Schema({
  
      bid: {
          type: String,
          require:true
      },
      like: [like],
  
      comment: [comment],
  
          
  })
  

const Reaction = mongoose.model('Reaction',reactionSchema);

module.exports = Reaction;