import db from './../models';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');

const userController = {};

function jstSignUser(user){
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret)
}

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
          res.status(400).send ({
           error: err,
        });
    });
},
/*userController.authenticate = async function login(req,res) {
    try {

        const {username, password} = req.body;
        await db.User.findOne({
            where: {
                username: username,
            
            }
        })
       
        if (!user){
            return res.status(403).send({
                error: 'The username was wrong'
            })
        }
       const isPassValid = bcrypt.compare(password, user.password, function (err, result) {
        if (!isPassValid) {
            return res.status(403).send({
                error: 'The password was wrong'
            })
        } else {
            return res.status(403).send({
                error: 'i love you.'
            })
        }
      })
    } catch (err) {
        res.status(400).send({
            error: err
        })

    };
}*/
userController.authenticate = function (req,res) {
    const {username, password} = req.body;
  db.User.findOne({ username: username })
    .exec(function (err, user) {
      if (err) {
        return 
            res.status(400).send({
                error: "FUCK YOU"
        })
      } else if (!user) {
        res.status(400).send({
            error: "NO USER"
    })
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
            res.status(200).send({
                error: "LOVE YOU"
        });
        } else {
            res.status(400).send({
                error: ":9 YOU"
        });
        }
      })
    });
},
/*userController.login = (req,res)=>{
    const {username,password} = req.body;
   const x = await new Promise(resolve => setTimeout(resolve, 5000));

    x = db.User.findOne({
        where: {
            username: username
        }})
        .then((User) => {
            const isPasswordValid = password === l.password
            if (!isPasswordValid){
                    return res.status(403).send({
                     error: 'The login information was incorrect'
                 })
            }
        }).catch((err) => {
        return res.status(500).json({
            message: "ee"
        });
    });
},

/*userController.login = (req,res)=>{
   // try{
    console.log(req.body);
        const user = new db.User({
            username,
            password
        });

        const {username,password} = req.body;
        db.User.findOne({
            where: {
                username: username
            }.then((User) => {
                return res.status(200).json({
                    success:true,
                    data:User
                });
        })
      /*  if (!user){
           return res.status(403).send({
            error: 'The login information was incorrect'
        })
    }
    const isPasswordValid = password === user.password
    if (!isPasswordValid){
            return res.status(403).send({
             error: 'Th3e login information was incorrect'
         })
    }
    const userJSON = user.toJSON;
    res.send({
        user: userJSON
    }) 
/*}catch (err) {
    res.status(500).send({
        error: 'An error has occured trying to log in.' //So the user knwos it's not their fault
    })*/

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
    };
  /*  async function login (){
        try{
            const {username,password} = req.body;
            const user = await User.findOne({
                where: {
                    username: username
                }
            })
            if (!user){
                return res.status(403).send({
                error: 'The login information was incorrect'
            })
        }
        const isPasswordValid = password === user.password
        if (!isPasswordValid){
                return res.status(403).send({
                    error: 'Th3e login information was incorrect'
                })
        }
        const userJSON = user.toJSON;
        res.send({
            user: userJSON
        })} catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in.' //So the user knwos it's not their fault
            })}
    
    }*/
export default userController;

