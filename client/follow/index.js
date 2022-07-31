const { allDocs, deletePost } = require('/data/data/com.termux/files/home/storage/dcim/Portfolio/farmGram/server/database/db.js');


const getname = async () => {
		let nameplace = document.querySelector('#accountname').value;
		nameplace.innerText = 'Whats in init -y';
		await allDocs();
}
