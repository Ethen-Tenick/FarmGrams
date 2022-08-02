const { allDocs, deletePost } = require('/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/server/database/db.js');

const div = document.querySelector('.right-side-follow');
div.innerHTML = '<h2>Hello function</h2>'

const getname = () => {

		let nameplace = document.querySelector('.accountname');
		nameplace.innerText = 'Whats it to yah';
		allDocs();
}
