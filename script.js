function toggleOverlay() {
	document.getElementById("hamburgerToggle").checked = false;
}

document.getElementById("aboutMe").addEventListener("click", toggleOverlay);
document.getElementById("projects").addEventListener("click", toggleOverlay);
document.getElementById("contactMe").addEventListener("click", toggleOverlay);


//typewriter stuff
var l = [
"Software Dev",
"Fullstack Dev",
"Database Dev",
"Graphic Design",
"Abhigyan Kishor"
];

var i = 0;
var j = 0;
var target = document.getElementById("target");
var speed = 140;
var toggle = 0;

function word() {

	if (i == l[j].length - 1) {
		speed = 5000;
	}
	if (i >= l[j].length && toggle == 0) {
	// j++;
		if (j == 4) {
	  		clearInterval(timerId);
		}
	toggle = 1;
	}

	if (i == 0 && toggle == 1) {
		toggle = 0;
		speed = 140;
		j++;
	}
	if (toggle == 1) {
		let str = target.innerHTML;
		str = str.slice(0, -1);
		target.innerHTML = str;
		i--;
		speed = 20;
	}

	if (j > 4) {
		clearInterval(timerId);
	}

	if (i < l[j].length && toggle != 1) {
		target.innerHTML += l[j][i];
		i++;
	}

	let timerId = setTimeout(word, speed);
}

word();

//end of typewriter stuff		  

//start of resizeAndMove


window.onscroll = function resizeAndMove(){
	
	var winScroll = document.documentElement.scrollTop;
	var height = document.documentElement.clientHeight;
	var top = height*0.45;
	var scrolled = (winScroll / height) * 100;
	// console.log(scrolled)

	if (scrolled <= 100) {
		var fontSize = 100 - 0.7*scrolled;
		var targetTop = top - top*scrolled*0.01 - 60*scrolled*0.01;
		// console.log(targetTop);
		target.style.top = targetTop.toString() + "px";
		target.style.fontSize = fontSize.toString() + "px";
		target.style
	}

	

}