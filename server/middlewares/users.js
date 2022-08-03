const mongoose = require('/data/data/com.termux/files/usr/lib/node_modules/mongoose');
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
				followers:[],
				following:[],
				subscribers:[],
				subscribing:[],
				settings:[],
				posts:[],

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


const PersonDetails = async (username,accountname) => {
	//await User.deleteMany();
	
	if((username.length > 2) && (accountname.length > 2)){
		const post = await Post.create({
			_id : new mongoose.Types.ObjectId(),
			name : 'PAPA',
			caption : 'this the first db',
			updatedAt :new Date(),
			createAt : new Date(),
			content : 'This is the main content'
		});
		const uncle = await OtherUser.create({
			_id : new mongoose.Types.ObjectId(),
			name:'Lebron',
			createdAt:new Date(),
			updated:new Date(),
			followers:[],
			following:[],
			subscribers:[],
			subscribing:[],
			posts:[post._id],
		});
		const friend = await OtherUser.create({
			_id : new mongoose.Types.ObjectId(),
			name:'Richie',
			createdAt:new Date(),
			updated:new Date(),
			followers:[],
			following:[],
			subscribers:[],
			subscribing:[],
			posts:[post._id],
		});
		const person = await User.create({
			_id : new mongoose.Types.ObjectId(),
			name:'Tenick',
			passcode:'34343123',
			createdAt:new Date(),
			updatedAt:new Date(),
			followers:[friend._id,friend._id],
			following:[friend._id],
			subscribers:[friend._id],
			subscribing:[friend._id],
			posts:[post._id],
		});


	}else{
		console.log('The username input is too short');
		console.log('The accountname input is too short');
	}	

}

const populateAll = async (property,identifier) => {

	await User.find({property:identifier}).populate('followers');
	await User.find({property:identifier}).populate('following');
	await User.find({property:identifier}).populate('subscribers');
	await User.find({property:identifier}).populate('subscribing');
	await User.find({property:identifier}).populate('posts');

}


const getUsers = async () => {
	populateAll('name','Tenick');
	const data = await User.find({name : 'Tenick'});
	console.log(data);

	const getPost = async (data) => {
		await data.map(post => {
		});
	}
}

getUsers();




module.exports = {createUser,logUser};
