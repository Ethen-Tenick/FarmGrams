

const showimg = () => {
	const image= document.querySelector('.hidden-images')
	const video = document.querySelector('.hidden-videos')
	const fav = document.querySelector('.hidden-favorites')
	const bookmk = document.querySelector('.hidden-bookmarks')
	const saved = document.querySelector('.hidden-saved')

	image.style.display='block';
	fav.style.display='none';
	bookmk.style.display='none';
	saved.style.display='none';
	video.style.display='none';
}
const showvideo = () => {
	const image= document.querySelector('.hidden-images')
	const video = document.querySelector('.hidden-videos')
	const fav = document.querySelector('.hidden-favorites')
	const bookmk = document.querySelector('.hidden-bookmarks')
	const saved = document.querySelector('.hidden-saved')
	
	video.style.display='block';
	fav.style.display='none';
	bookmk.style.display='none';
	saved.style.display='none';
	image.style.display='none';

}
const showfav = () => {
	const image= document.querySelector('.hidden-images')
	const video = document.querySelector('.hidden-videos')
	const fav = document.querySelector('.hidden-favorites')
	const bookmk = document.querySelector('.hidden-bookmarks')
	const saved = document.querySelector('.hidden-saved')

	fav.style.display='block';
	image.style.display='none';
	bookmk.style.display='none';
	saved.style.display='none';
	video.style.display='none';

}
const showbookmk = () => {
	const image= document.querySelector('.hidden-images')
	const video = document.querySelector('.hidden-videos')
	const fav = document.querySelector('.hidden-favorites')
	const bookmk = document.querySelector('.hidden-bookmarks')
	const saved = document.querySelector('.hidden-saved')

	bookmk.style.display='block';
	fav.style.display='none';
	image.style.display='none';
	saved.style.display='none';
	video.style.display='none';

}
const showsaved = () => {
	const image= document.querySelector('.hidden-images')
	const video = document.querySelector('.hidden-videos')
	const fav = document.querySelector('.hidden-favorites')
	const bookmk = document.querySelector('.hidden-bookmarks')
	const saved = document.querySelector('.hidden-saved')

	saved.style.display='block';
	fav.style.display='none';
	bookmk.style.display='none';
	image.style.display='none';
	video.style.display='none';

}

/// delete user from db ////

const deletepost = () => {

};

