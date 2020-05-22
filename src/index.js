
let img = document.querySelectorAll('.slide');
	let current = 0;
	function slider() {
		for (var i = 0; i < img.length; i++) {
			img[i].classList.add('active'); 

		}
		img[current].classList.remove('active');
	}
	slider();
	document.querySelector('#next').addEventListener('click', function() {
		if (current + 1 == img.length) {
			current = 0;
		}
		else {
			current++;
		}
		slider();
	});
	document.querySelector('#prev').addEventListener('click', function() {
		if (current - 1 == -1) {
			current = img.length - 1;
		}
		else {
			current--;
		}
		slider();
	});
