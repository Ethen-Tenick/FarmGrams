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

		const newMember = await User.find({name:username});
		console.log(newMember);

	}else{
		console.log('The username input is too short');
	}	

}
//PersonDetails('Ethen');

////// Global access objects and categories ////////

const mainFunctionContainer = async (username) => {

	const followingObject = await User.find({name : username}).select('following');
	const followersObject = await User.find({name : username}).select('followers');
	const subscribingObject = await User.find({name : username}).select('subscribing');
	const subscribersObject = await User.find({name : username}).select('subscribers');
	const postsObject = await User.find({name : username}).select('posts');

	/// To get the User Id and Chosen Category of User //

	var { _id, following } = followingObject[0];
	var { _id, followers } = followersObject[0];
	var { _id, subscribers } = subscribersObject[0];
	var { _id, subscribing } = subscribingObject[0];
	var { _id, posts} = postsObject[0];

	////// End of the global constants //////////


	const populateCategory = async (property,identifier,category) => {
		await User.find({property:identifier}).populate(category);
	};
	populateCategory('name','Ethen','following');
	populateCategory('name','Ethen','followers');


	// get the maincontainer user information //
	
	const listCategoryId = async (category) => {
		if(category.length < 1){
			console.log(`Chosen  Category is Empty`);
		}else{
			for(let person of category){
				// find id of those in  selected field //
				// below find user in specific model doesn't work
				const userFound = await OtherUser.find({ _id : person});
				console.log(person);
			}
		}
	};
	//listCategoryId(followers);


	//remove yourself as sub from others account
	const unsubscribe = async (account,undoAccount,categoryParameter) => {

		// the categoryParameter does not work //

		const searchAccountObject = await User.find({name : account}).select(categoryParameter);
		const AccountObject = searchAccountObject[0];
		const AccountId = AccountObject._id;
		const AccountCategory = AccountObject.followers;
		console.log(`This is the AccountCategory ${AccountCategory[0]}`);
		const searchUndoObject = await OtherUser.find({ name  : undoAccount });
		const UndoObjectId = searchUndoObject[0]._id;
		console.log(`This is the UndoObjectId ${UndoObjectId}`);

		console.log(`This is account for ${AccountCategory}`);

		if(AccountCategory < 1){
			console.log(`${account} is null`)
		}else{
			console.log(`${account} has subs`);

			for(let eachSubObject of AccountCategory){
					if(eachSubObject == UndoObjectId){
						console.log('found the match');
						console.log(eachSubObject);
						await OtherUser.deleteOne({ name : personFound.name });
						console.log(`${undoAccount} removed from ${account}'s sub`);
						break;
					}
					console.log(`${undoAccount} is not a sub`);
				}
		}}
		//unsubscribe('Ethen','Richie','followers');
};
mainFunctionContainer('Ethen');

module.exports = {
	createUser,
	logUser
};
