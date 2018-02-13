import db from './../models';

const userController = {};

userController.post = (req,res) => {
    const {username, password} = req.body;
    console.log(req.body);
    //pulls from our request body.

    //TODO: Validation
    //user cursor, we can create a new instance of this model
    const user = new db.User({
        username,
        password
    });

    
    //tries to save it.
    user.save().then((newUser)=>{
        res.status(200).json({      //if it does it does this
            success:true,
            data: newUser,
        });
    }).catch((err)=>{       //throws err if not 
        res.status(500).json ({
            message: err,
        });
    });
}
    userController.getAll = (req,res)=>{
        db.User.find({})//populate function uses the reference
            //creator in order to populate further information such as the usernamer etc
            .then((User) => {
            return res.status(200).json({
                success:true,
                data:User
            });
        }).catch((err) => {
            return res.status(500).json({
                message: err
            });
        });
    }
    
export default userController;

