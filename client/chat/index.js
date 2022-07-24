
let see = false;

showMenu = () => {
	show = document.querySelector('.invisible-nav-bar');

	see = !see;

	if(see){
		show.style.visibility = 'visible';
	}else{
		show.style.visibility = 'hidden';
	}

}

sendMessage = () => {
	message = document.querySelector('.enter-textarea').value;
	random = document.querySeloctor('.user-text');
	random.innerHTML = message;

	newdiv = document.createElement('div');	
	newp = document.createElement('p');	
	newimg = document.createElement('img');	

	newimg.src='./assets/group.jpg'
	newdiv.className='user-message';
	newp.className='user-text';

	newp.innerHTML = message;

	newdiv.appendChild(newimg,newp);
}
