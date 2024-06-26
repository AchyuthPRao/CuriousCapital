const {user,blogs} = require('../../database/schema');
const getUserById = async (req,res)=>{
  try{
   let searchedUser = await user.findOne({username:req.params.username});
   searchedUser.blogs = await blogs.find({account : searchedUser._id}).sort({createdAt : -1});
   if(searchedUser == null) 
   return res.status(404).json({msg:'user not found'})

   res.status(200).json(searchedUser);
   
   } 
   catch(err){
     return res.status(404).json({msg:'user not found'})  
   } 
 }



module.exports = {getUserById}


