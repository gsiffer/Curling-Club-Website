
(function(d){
	
	// d = document
	
	const $nav = d.querySelector('nav');
	const $img = d.querySelector('.btn_menu');
	
	$img.addEventListener('click', function(){
		
		$nav.classList.toggle('show');
		
	});
	
	
})(document);

gsap.to(".spinning", {
	duration: 1.5,
	scaleX: 0,
	transformOrigin: "50% 50%",
	repeat: -1,
	yoyo: true
});

