const mongoose = require('/data/data/com.termux/files/usr/lib/node_modules/mongoose');
const DB = require('./.env');
const User = require('./user.js');


/////////////THE DATABASE INITIALIZATION ///////////////

const start = async () => {
	try{
	await mongoose.connect(DB);
	console.log('connection successful')
	}catch(err){
		console.log(err);
	}
};	
start();

/////////////// END OF INITIALIZATION /////////////////

//below is to create a new user and save to mongodb

async function run() {

	// const = await User.find({name : 'Mansoor'})
	//
	// above finds user with name of mansoor from db
	
	// const = await User.findById('34jkdfjkfsewi')
	//
	// it will bring user with that id 
	//
	// User.deleteOne({name : 'ethen'}) --will delete a user
	

	try{
		const user = await User.create({
			name : 'Ethen',
			age : 20,
			skill : 'basketball',
			email : 'ETHEN@gmail.com',
			hobbies : ['fishing', 'swimming', 'racing'],
			address:{
				street : 'Kalifornia',
				city : 'Nairobi',
				ip :'121.234.5454.23.2'
			}
		});

		//	user.name = 'Jack'; // to update the user name and remember to save

		//	await user.save(); this is also anotherway
		console.log(user);
	}catch(e){
		console.log(e.message);
	};
};
run();
