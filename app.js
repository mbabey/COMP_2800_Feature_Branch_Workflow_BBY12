const contentText = document.querySelector('.content');

document.addEventListenter('DOMContentLoaded', function(){
	contentText.innerHTML = "This is the content";
}, false);