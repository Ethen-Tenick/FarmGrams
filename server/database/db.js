const mongoose = require('/data/data/com.termux/files/usr/lib/node_modules/mongoose');
const DB = require('./.env');
const { User, Post, OtherUser} = require('./user.js');
const start = async () => {
	try{
	await mongoose.connect(DB);
	console.log('connection successful')
	}catch(err){
		console.log(err);
	}
};	
start();

const deletePost = async (user,item) => {
	const userProfile = User.find({name:user});
	const userPosts = userProfile.posts.deletOne({name : item});;

}
const allDocs = async () => {
	// await User.deleteMany();
	const alldocs = await User.find({});
	for(let person of alldocs){
		console.log(person);
	}
}

module.exports = {
	allDocs,
	deletePost
}

