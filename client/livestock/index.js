let hiddenStatus = false;

const showMenu = () => {
	const hiddenElement = document.querySelector('.hidden-menu');
	hiddenStatus = !hiddenStatus;

	if(hiddenStatus){	
		hiddenElement.style.visibility = 'visible';
	}else{
		hiddenElement.style.visibility = 'hidden';
	}
}

const likeBtn = () => {
	const likeCount = document.querySelector('#like-count').innerText;
	likeCount = likeCount += 1;
}
const dislikeBtn = () => {
	const dislikeCount = document.querySelector('#dislike-count').innerText;
	dislikeCount = dislikeCount += 1;
}
const shareBtn = () => {
	const shareCount = document.querySelector('#share-count').innerText;
	shareCount = shareCount += 1;
}
const commentBtn = () => {
	const commentCount= document.querySelector('comment-count').innerText;
	commentCount = commentCount += 1;
}

