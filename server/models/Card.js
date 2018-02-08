import mongoose from 'mongoose';
//defines everything that goes inside a collection
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
//at some point I will do this

//first instance of our schema, this is for the cards..
const cardSchema = new Schema({
   text: {type: String, required: true},
   owner: {type: Boolean, default: true},  
   deadline: {type: Date, required: true},
   createdAt: {type: Date, default: Date.now},
   _creator: {type: Schema.ObjectId, ref: 'User'}, //references to the user
   _post: {type: Schema.ObjectId, ref: 'Post'},  //references the post.
   _comments: [ {type: Schema.ObjectId, ref: 'Comment'} ] 
});

const autoPopulateCreator = function(next) {
    this.populate ({
        path: '_creator',
        select: 'username createdAt -_id'
    });
next(); 
};

//autopopulates when this is mentioned, this works similiar to a 'didSet' in Swift. This ties the 
//meta data such as the creator username, and time to a comment automatically when the comment
//is generated. 
cardSchema.pre('find', autoPopulateCreator)
//searches for the user within the comment, and automatically populates the username and created at 
const Card = mongoose.model('Card', cardSchema);
export default Card;


