const mongoose = require('/data/data/com.termux/files/usr/lib/node_modules/mongoose');

const { schema } = mongoose; 

//the parameters that can be passed to the specified collection


const postInfoSchema = new mongoose.Schema({
	caption : String,
	updatedAt : Date,
	createdAt :{
		type:Date,
		immutable:true
	},
	content : String
});

const postSchema = new mongoose.Schema({
	name : String,
	info:[{ type:Schema.Types.ObjectId, ref:'PostInfo'}]
});
const otherUserSchema = new mongoose.Schema({
	name : String,
	createdAt :{
		type:Date,
		immutable:true
	},
	followers:[{ type:Schema.Types.ObjectId, ref:'User'}],
	following:[{type:Schema.Types.ObjectId, ref:'User'}],
	subscribers:[{type:Schema.Types.ObjectId, ref:'User'}],
	subscribing:[{type:Schema.Types.ObjectId, ref:'User'}],
	posts:[{type:Schema.Types.ObjectId, ref:'Post'}],
});
const userSchema = new mongoose.Schema({
	_id: Schema.Types.ObjectId,
	name : String,
	passcode : String,
	updatedAt : Date,
	createdAt :{
		type:Date,
		immutable:true
	},
	followers:[{ type:Schema.Types.ObjectId, ref:'OtherUser'}],
	following:[{type:Schema.Types.ObjectId, ref:'OtherUser'}],
	subscribers:[{type:Schema.Types.ObjectId, ref:'OtherUser'}],
	subscribing:[{type:Schema.Types.ObjectId, ref:'OtherUser'}],
	settings:String,
	posts:[{type:Schema.Types.ObjectId, ref:'Post'}],
});



//below is the collection to be made in the mongodb database and the specified schema it is to have

const User = mongoose.model('User',userSchema);
const Post = mongoose.model('Post',postSchema);
const OtherUser = mongoose.model('OtherUser',otherUserSchema);
const PostInfo = mongoose.model('PostInfo',postInfoSchema);

module.exports = { User, Post, OtherUser, PostInfo }; 

