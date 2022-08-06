const { User, Post, Other } = require('../../server/database/user.js');
  
const alldocs = async () => {
	// await User.deleteMany();
	const alldocs = await User.find({});
	for(let person of alldocs){
		//console.log(person);
	}
}
alldocs();
  
