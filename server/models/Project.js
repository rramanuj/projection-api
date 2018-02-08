import mongoose from 'mongoose';
//defines everything that goes inside a collection
const { Schema } = mongoose;
mongoose.Promise = global.Promise;


//first instance of our schema, this is for the user accounts.
const projectSchema = new Schema({
   title: {type: String, required: true},
   team: {type: Schema.ObjectId, ref: 'Team'},
   link: String,
   text: String,
   isDeleted: {type: Boolean, default: false},
   createdAt: {type: Date, default: Date.now},  //
   _creator: {type: Schema.ObjectId, ref: 'User'}, //references to the user
   //array to hold all the comments pertaining to a specific post
});


const Project = mongoose.model('Project', projectSchema);
export default Project;


