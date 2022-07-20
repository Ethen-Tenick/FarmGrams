const mongoose = require('/data/data/com.termux/files/usr/lib/node_modules/mongoose');

//the parameters that can be passed to the specified collection

const addressSchema = new mongoose.Schema({
	street :String,
	city : String,
	country : String,
	ip : String
});

const userSchema = new mongoose.Schema({
	name : String,
	age : Number,
	skill : String
	updatedAt : Date,
	createdAt : Date,
	hobbies : [String],
	address : addressSchema,
});


//below is the collection to be made in the mongodb database and the specified schema it is to have

mongoose.model('user',userSchema)

module.exports = mongoose.model('user',userSchema);
