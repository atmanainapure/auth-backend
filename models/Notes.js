
// This is a copy of mongoose. model's model () but we need to make it available to other

const mongoose = require('mongoose');

const NotesSchema= new mongoose.Schema({
    //like this we can create a relationship between the user and the notes.
    // like a foreign key in sql
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' // this is the name of the model we want to refer to 
    },
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    tag:{
        type: String
    }, 
    date:{
        type: Date,
        default: Date.now
    }
  });
  module.exports = mongoose.model('Notes', NotesSchema);