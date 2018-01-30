import db from './../models';

const commentController = {};

commentController.post = (req,res) => {
    const {text, userId, postId} = req.body;
    console.log(req.body);
    //pulls from our request body.

    //Validation
    //user cursor, we can create a new instance of this model
    const comment = new db.Comment({
        text,
        _creator: userId,
        _post: postId
    });
    //tries to save it.
    comment.save().then((newComment)=>{
    db.Post.findByIdAndUpdate(postId,
        { $push: {'_comments': newComment._id} }
        ).then((exisitingPost) => {
        res.status(200).json({
            success: true,
            data: true,
            data: newComment,
            exisitingPost,
        });
    }).catch((err)=>{       //throws err if it's a javaScript error & database errors.
        res.status(500).json ({
            message: err.toString()
        });
    });
}).catch((err) => {
    res.status(500).json({
        message:err.toString(),
    });
});
}
export default commentController;

