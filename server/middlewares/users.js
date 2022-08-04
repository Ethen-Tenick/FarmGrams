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


const PersonDetails = async (username) => {

	//await User.deleteMany();
	
	if(username.length > 2){

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
			name:username,
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
	}	

}

const populateAll = async (property,identifier) => {

	await User.find({property:identifier}).populate('followers');
	await User.find({property:identifier}).populate('following');
	await User.find({property:identifier}).populate('subscribers');
	await User.find({property:identifier}).populate('subscribing');
	await User.find({property:identifier}).populate('posts');

}


const getUsers = async (username) => {

	populateAll('name',"'Tenick'");
	const followingObject = await User.find({name : username}).select('following');
	const followersObject = await User.find({name : username}).select('followers');
	const subscribingObject = await User.find({name : username}).select('subscribing');
	const subscribersObject = await User.find({name : username}).select('subscribers');
	const postsObject = await User.find({name : username}).select('posts');


/// To get the User Id and Chosen Category of User ///
	
	var { _id, following } = followingObject[0];
	var { _id, followers } = followersObject[0];
	var { _id, subscribers } = subscribersObject[0];
	var { _id, subscribing } = subscribingObject[0];
	var { _id, posts} = postsObject[0];


//////  Get the Ids of the items in Category  ///////
	
	const listCount = async (category) => {
		if(category.length < 1){
			console.log(`Chosen  Category is Empty`);
		}
		for(var i = 0;i < category.length; i++){
			console.log(category[i]);
		}
	};

	///////////////////////////////////////
	const searchId = async (category,model) => {
		let number = 0;

		for(var i = 0;i < category.length; i++){
			number += 1;
			var item = await model.find({ _id : category[i]});

//// get specific fields of the specified object ////
			
			for(var i = 0;i < item.length;i++){
				item.map(one => {
					console.log(one.caption);
				});
			}

		}
		console.log(`${username} has ${number} items in this category`);

	}
	//listCount(posts); // category
	//searchId(posts, Post);  //model group

}
getUsers('Tenick');


//// remove yourself as sub from others account /////


const unsubscribe = async (theiraccount,myname) => {

	const followingObject = await User.find({name : theiraccount}).select('following');
	const followersObject = await User.find({name : theiraccount}).select('followers');
	const subscribingObject = await User.find({name : theiraccount}).select('subscribing');
	const subscribersObject = await User.find({name : theiraccount}).select('subscribers');
	const postsObject = await User.find({name : theiraccount}).select('posts');

	var { _id, following } = followingObject[0];
	var { _id, followers } = followersObject[0];
	var { _id, subscribers } = subscribersObject[0];
	var { _id, subscribing } = subscribingObject[0];
	var { _id, posts} = postsObject[0];

	const lookAccount = await OtherUser.find({name : myname});
	const personLooked = lookAccount[0];

	const checkProbability = async (category) => {
		if(category.length < 1){
			console.log(`${theiraccount} has no sub `);
		}
		for(var i = 0;i < category.length; i++){

			let foundAccount = await OtherUser.find({ _id : category[i] });
			let personFound = foundAccount[0];

			if(personFound !== undefined){ 

				if (personFound.name == personLooked.name){
				console.log(personLooked);
				await OtherUser.deleteOne({ name : personFound.name });
				console.log(`${myname} removed from ${theiraccount}'s sub`);
			}else{
				console.log(`${myname} is not a sub or is not Found `);
			}}
		}
	}
	checkProbability(subscribers);
}
unsubscribe('Ethen','Richie');


module.exports = {createUser,logUser};
