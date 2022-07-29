const mongoose = require('/data/data/com.termux/files/usr/lib/node_modules/mongoose');

//the parameters that can be passed to the specified collection


const userSchema = new mongoose.Schema({
	name : String,
	passcode : String,
	updatedAt : Date,
	createdAt : Date
});


//below is the collection to be made in the mongodb database and the specified schema it is to have

const user = mongoose.model('user',userSchema)

module.exports = user; 
