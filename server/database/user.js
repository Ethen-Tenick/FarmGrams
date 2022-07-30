const mongoose = require('/data/data/com.termux/files/usr/lib/node_modules/mongoose');

//the parameters that can be passed to the specified collection


const postInfoSchema = new mongoose.Schema({
	caption : String,
	updatedAt : Date,
	createdAt : Date,
	content : String
});
const postSchema = new mongoose.Schema({
	post :{
		name : String,
		info : postInfoSchema
	}
});
const otherSchema = new mongoose.Schema({
	name : String,
	followers:Number,
	following:Number,
	subscribers:Number,
	subscribing:Number,
});
const userSchema = new mongoose.Schema({
	name : String,
	passcode : String,
	updatedAt : Date,
	createdAt : Date,
	followers:otherSchema,
	following:otherSchema,
	subscribers:otherSchema,
	subscribing:otherSchema,
	settings:String,
	posts:postSchema
});


//below is the collection to be made in the mongodb database and the specified schema it is to have

const User = mongoose.model('User',userSchema)
const Post = mongoose.model('Post',postSchema)
const Other = mongoose.model('Other',otherSchema)

module.exports = { User, Post, Other }; 

