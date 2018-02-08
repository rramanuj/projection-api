import db from './../models';

const teamController = {};

teamController.post = (req,res) => {
    const {name,userId,projectId} = req.body;
    console.log(req.body);
    //pulls from our request body.


    
    //Validation
    //user cursor, we can create a new instance of this model
    const team = new db.Team({
        name: name,
        _creator: userId,
        _project: projectId
    });
    //tries to save it.
    team.save().then((newTeam)=>{
        res.status(200).json({
            success: true,
            data: newTeam
        });
    }).catch((err)=>{       //throws err if not 
        res.status(500).json ({
            message: err,
        });
    });
}

teamController.addMember = (req,res) => {  
    const {userId,teamId} = req.body;
    console.log(req.body);
    //pulls from our request body.

    //Validation
    //user cursor, we can create a new instance of this model
    
    //update
    db.Team.findByIdAndUpdate(teamId,
        { $push: {'_members': userId} }
        ).then((newUser) => {
        res.status(200).json({
            success: true,
            data: true,
            data: newUser,
        });
    //tries to save it.
   /* team.save().then((newTeam)=>{
        res.status(200).json({
            success: true,
            data: newTeam
        });*/
    }).catch((err)=>{       //throws err if not 
        res.status(500).json ({
            message: err,
        });
    });
}

teamController.getAll = (req,res)=>{
    db.Team.find({}).populate({ //populate function uses the reference
        //creator in order to populate further information such as the usernamer etc
        path: '_creator',
        //the -_id removes the id field from the postman api pull 
        select: 'username createdAt -_id'}).populate({  //you can chain these functions
        //populates must be a path & select combo. 
        path: '_project', //we only need the text here as the middleware
        //we implemented automatically extracts the _user from the id 
        select: 'title',
        match: {'isDeleted': false}}).then((teams) => {
        return res.status(200).json({
            success:true,
            data:teams
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err
        });
    })
}
export default teamController;

