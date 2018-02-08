import db from './../models';
const cardController = {};



//this is going to be a card
cardController.post= (req,res) => {
    const {
        title,
        description,
        board,
        deadline,
        userId, //token
        owner,
        project,
        comments,
    } = req.body;
//validation is required, either text or link not both. 
    const card = new db.Card({
        //es 25 shorthand, we don;t need to add the property namne with it
        title,
        description,
        board,
        deadline,
        _project: project,
        _owner: owner,
        _comments: comments,
        _creator: userId,       //since the property name is difeferent we need to specificy the 
                                ///parameter name.
    });
    card.save().then((newCard)=>{
        return res.status(200).json({
            success:true,
            data: newCard
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err
        });
    })
};
//TODO: ACTIONS & TEAM MEMBERS. Each user must belong to a team. The users within that
//team can then be assigned to an action within a project involving that team.


cardController.getAll = (req,res)=>{
    db.Card.find({}).populate({ //populate function uses the reference
        //creator in order to populate further information such as the usernamer etc
       // path: '_creator',
        //the -_id removes the id field from the postman api pull 
        //select: 'username createdAt -_id'}).populate({  //you can chain these functions
        //populates must be a path & select combo. 
        /*path: '_comments', //we only need the text here as the middleware
        //we implemented automatically extracts the _user from the id 
        select: 'text',*/
        /*path: '_comments',
        select: 'text userId createdAt -_id'}).populate({  //you can chain these functions*/
    
        path: '_owner',
        select: 'username -_id',

            // select: 'username -_id', //gets the username and deletes the ID
        match: {'isDeleted': false}}).then((cards) => {
        return res.status(200).json({
            success:true,
            data:cards
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err
        });
    })
}
export default cardController;