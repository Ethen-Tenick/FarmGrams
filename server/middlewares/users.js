const { User, Post, Other } = require('/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/server/database/user.js');


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
				passcode:userpasscode
				});

			console.log(user);
			console.log('Success User Made');
			res.redirect('/login')
		}

	}catch(e){
		console.log(e);
		next();
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

module.exports = {createUser,logUser};
