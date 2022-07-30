const { availability } = require('/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/server/database/db.js');


checkname = () => {
	name = document.querySelector('#username').value;
	result = document.querySelector('#namevalid');
	if(name.length < 3){
		result.innerText =`${name} is too short`
		result.style.color='darkred'
	}else{
		if(availability){
			result.innerText =`${name} is avalilable`
			result.style.color='darkgreen'
		}else{
			result.innerText =`${name} is unavalilable`
			result.style.color='turquoise'
		}
	
	}
}
checkpasscode = () => {
	passcode = document.querySelector('#passcode').value;
	result = document.querySelector('#passcodevalid');
	const button = document.querySelector('.signUp');
	if(passcode.length < 7){
		result.innerText =`passcode is short`
		button.disabled = true;
		result.style.color='darkred'
	}else{
		result.innerText =` Strong passcode`
		result.style.color='darkgreen'
		button.disabled = false;
	}
}

