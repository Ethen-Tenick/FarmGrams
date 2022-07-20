let username = false;
let passcode = false;


checkname = () => {
	name = document.querySelector('#username').value;
	result = document.querySelector('#namevalid');
	if(name.length < 5){
		result.innerText =`${name} is not valid`
		result.style.color='darkred'
	}else{
		result.innerText =`${name} is avalilable`
		result.style.color='darkgreen'
		username = true;
	}
}
checkpasscode = () => {
	passcode = document.querySelector('#passcode').value;
	result = document.querySelector('#passcodevalid');
	const button = document.querySelector('.signUp');
	if(passcode.length < 7){
		result.innerText =`${passcode} is not valid`
		button.disabled = true;
		result.style.color='darkred'
	}else{
		result.innerText =`${passcode} is avalilable`
		result.style.color='darkgreen'
		button.disabled = false;
		passcode = true;
	}
}

