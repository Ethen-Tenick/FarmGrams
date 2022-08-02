const { User, Post, OtherUser } = require('/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/server/database/user.js');


const createUser = async (req,res) => {
	try{
		const newuser = req.body.username;
		const newpasscode = req.body.passcode;

		const username = await User.find({name : newuser});

		if(username.length > 0){
			console.log('Name not Availabily');
			res.redirect('/register');
		}else{
			const user = await User.create({
				name : newuser,
				passcode:newpasscode,
				updatedAt:new Date(),
				createdAt:new Date(),
				followers:{
					name:'',
					followers:0,
					following:0,
					subscribers:0,
					subscribing:0,
				},
				following:{
					name:'',
					followers:0,
					following:0,
					subscribers:0,
					subscribing:0,
				},
				subscribers:{
					name:'',
					followers:0,
					following:0,
					subscribers:0,
					subscribing:0,
				},
				subscribing:{
					name:'',
					followers:0,
					following:0,
					subscribers:0,
					subscribing:0,
				},
				settings:'',
				posts:{
					caption:'nothing at all',
					updatedAt:new Date(),
					createdAt:new Date(),
				}
				
				});

			console.log(user);
			console.log('Success User Made');
			res.redirect('/login')
		}

	}catch(e){
		console.log(e);
	}
}
const logUser = async (req,res) => {
	try{
		const user = req.body.user;
		const passcode = req.body.passcode;
		
		const file = await User.find({name : user});
		if(file.length > 0){
			for(var i = 0;i < file.length; i++){	
				let person = file[i];
				console.log(person);

				if(person.passcode == passcode){
					console.log(`Welcome back ${person.name}`);
					res.redirect('/');
					break;
				}else{
					res.redirect('/login');
					console.log(`wrong passcode for ${person.name}`);
				};
			}
		}else{
			console.log(`${user} not Found`);
			res.redirect('/register');
		}

	}catch(e){
		console.log(e);
		next();
	}
}


const follow = async (username,accountname) => {
	//await User.deleteMany();
	const me = await User.find({name:username}).select('followers');
	console.log(me);
}
follow('Ethen','Tenick');






module.exports = {createUser,logUser};
