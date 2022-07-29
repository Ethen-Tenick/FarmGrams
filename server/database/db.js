const mongoose = require('/data/data/com.termux/files/usr/lib/node_modules/mongoose');
const DB = require('./.env');
const User = require('./user.js');

let exist = false;
let loged = false;
let logpasscode = false;
let availability = false;
let userpresent = false;

const start = async () => {
	try{
	await mongoose.connect(DB);
	console.log('connection successful')
	}catch(err){
		console.log(err);
	}
};	
start();



async function logInUser(user,passcode) {
	try{
		const file = await User.find({name : user});

		if(file.length > 0){
			exitst = true;
			for(var i = 0;i < file.length; i++){	
				let person = file[i];
				console.log(person);
				userpresent = true;

				if(person.passcode == passcode){
					loged = true;
					logpasscode = true;
					console.log(`Welcome back ${person.name}`);
					break;
				}else{
					console.log(`wrong passcode for ${person.name}`);
				};
			}
		}else{
			console.log(`${user} not Found`);
		}

	}catch(e){
		console.log(e.message);
	}
}


async function makeUser(newuser,userpasscode) {
	try{
		const username = await User.find({name : newuser});

		if(username.length > 0){
			console.log('Name not Availabily');

		}else{
			availability = true;
			const user = await User.create({
				name : newuser,
				passcode:userpasscode
				});

			console.log(user);
			console.log('Success User Made');
		}

	}catch(e){

		console.log(e.message);
	}

};


module.exports = { 
	makeUser,
	logInUser,
	logpasscode,
	exist,
	loged,
	availability,
	userpresent
};

