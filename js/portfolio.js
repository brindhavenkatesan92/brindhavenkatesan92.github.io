document.addEventListener('DOMContentLoaded', function(){
	var navigatr = document.querySelector('.portfolio #navigator');
	var links = navigatr.querySelectorAll('.nav-item a');
	var lastActive = navigatr.querySelector('.nav-item.active ');
	links.forEach(function( link ){
		link.addEventListener('click', function( eventObj ){
			eventObj.preventDefault();
			var id = link.getAttribute('href').replace(/^#/g,'');
			navigatorHt = navigatr.clientHeight;
			var offsetTop = document.getElementById(id).offsetTop - navigatorHt + 10;
			$('body').animate({
				scrollTop: offsetTop
			},300, function(){
				lastActive && lastActive.classList.remove('active');
				link.classList.add('active');
				lastActive = link;
			});
		});
	});
	$('[data-toggle=tooltip]').tooltip();
	var downarrow = document.querySelector('.fa.uparrow');
	downarrow.addEventListener('click', function(){
		$('body').animate({
				scrollTop: 0
		},400);
	},300);
	var alternavbar = function(){
		var scrollTop =  window.scrollY;
		if( scrollTop > 50 ){
			navigatr.classList.remove('transparent');
			$(downarrow).fadeIn();
		}else{
			navigatr.classList.add('transparent');
			$(downarrow).fadeOut();
		}
	}
	alternavbar();
	window.addEventListener('scroll', alternavbar);
});