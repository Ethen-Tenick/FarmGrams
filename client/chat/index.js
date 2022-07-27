
let see = false;

showMenu = () => {
	const show = document.querySelector('.invisible-nav-bar');

	see = !see;

	if(see){
		show.style.visibility = 'visible';
	}else{
		show.style.visibility = 'hidden';
	}

}

sendMessage = () => {
	var message = document.querySelector('.enter-textarea').value;
	var newdiv = document.createElement('div');	
	var newp = document.createElement('p');	
	var newimg = document.createElement('img');	

	var textnode = document.createTextNode(message);

	newdiv.className='user-message';
	newp.className='user-text';

	newp.appendChild(textnode);
	newdiv.appendChild(newp);

	document.querySelector('.enter-textarea').value = '';
}


