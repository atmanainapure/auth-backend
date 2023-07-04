
// This is a copy of mongoose. model's model () but we need to make it available to other

const mongoose = require('mongoose');

const NotesSchema= new Schema({
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