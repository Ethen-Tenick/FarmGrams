const { logpasscode,userpresent } = require('/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/server/database/db.js');

checkuser = () => {
	if(userpresent == false){
		const message = document.querySelector('#namevalid');
		message.innerText = 'no such user';
	}
}

checkpasscode = () => {
	if(logpasscode == false){
		const message = document.querySelector('#passwordvalid');
		message.innerText = 'password is wrong';
	}
}
