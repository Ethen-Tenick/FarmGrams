const { makeUser,logInUser } = require('/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/server/database/db.js');

const createUser = async (req,res,next) => {
	
	try{
		const newuser = req.body.username;
		const newpasscode = req.body.passcode;
		makeUser(newuser,newpasscode);

		next();
	}catch(e){
		console.log(e);
		next();
	}
}
const logUser = async (req,res,next) => {
	try{
		const user = req.body.user;
		const passcode = req.body.passcode;
		logInUser(user,passcode);

		next();
	}catch(e){
		console.log(e);
		next();
	}
}


module.exports = {createUser,logUser};
