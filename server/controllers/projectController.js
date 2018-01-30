import db from './../models';
const projectController = {};

//this is going to be a post, because we're creating a post.
projectController.post= (req,res) => {
    const {
        title,
        text,
        link,
        userId //token
    } = req.body;
//validation is required, either text or link not both. 
    const project = new db.Project({
        //es 25 shorthand, we don;t need to add the property namne with it
        title,
        text,
        link,
        _creator: userId,       //since the property name is difeferent we need to specificy the 
                                ///parameter name.
    });
    project.save().then((newProject)=>{
        return res.status(200).json({
            success:true,
            data: newProject
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err
        });
    })
};
//TODO: ACTIONS & TEAM MEMBERS. Each user must belong to a team. The users within that
//team can then be assigned to an action within a project involving that team.
projectController.getAll = (req,res)=>{
    db.Project.find({}).populate({ //populate function uses the reference
        //creator in order to populate further information such as the usernamer etc
        path: '_creator',
        //the -_id removes the id field from the postman api pull 
    select: 'username createdAt -_id'}).populate({  //you can chain these functions
        //populates must be a path & select combo. 
        path: '_comments', //we only need the text here as the middleware
        //we implemented automatically extracts the _user from the id 
        select: 'text',
        match: {'isDeleted': false}}).then((projects) => {
        return res.status(200).json({
            success:true,
            data:projects
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err
        });
    })
}
export default projectController;