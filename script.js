
	
window.addEventListener('scroll', reveal);

function reveal(){

	var reveals = document.querySelectorAll('.reveal');

	for(var i = 0; i < reveals.length; i++){

		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if (revealtop < windowheight - revealpoint){

			reveals[i].classList.add('active');
		}else{

			reveals[i].classList.remove('active');
		}
	}
}

//MenuOpenonClick

	
	var menu = document.querySelector('.menu');
	var menuBtn = document.querySelector('.MenuBtn');
	var menuStatus = 1;

	function openMenu(){
		if (menuStatus == 1){

			menu.classList.add('opened');
			menuStatus = 2;

		} else if (menuStatus == 2){
			
			menu.classList.remove('opened');
			menuStatus = 1;
		}
	}

	menuBtn.addEventListener("click", () => {
		openMenu();
	});

