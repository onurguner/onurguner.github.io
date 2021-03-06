$(document).ready(function() {
	/* Scroll hire me button to contact page */
//	$('.hire-me').click(function() {
//		$('html, body').animate({
//				scrollTop: $($(this).attr('href')).offset().top
//		}, 500);
//		return false;
//	});
	
	/* Sticky menu */
	$(".navbar").sticky({
		topSpacing: 0
	});


	/* Scroll spy and scroll filter */
	$('#main-menu').onePageNav({
		currentClass: "active",
		changeHash: false,
		scrollThreshold: 0.5,
		scrollSpeed: 750,
		filter: "",
		easing: "swing"
	});
	
	/* Charts*/
//	$('.chart').easyPieChart({
//		barColor: '#3498db',
//		size: '120',
//		easing: 'easeOutBounce',
//		onStep: function(from, to, percent) {
//			$(this.el).find('.percent').text(Math.round(percent));
//		}
//	});
	
	$('.chart').waypoint(function() {
		$('.chart').easyPieChart({
			barColor: '#3498db',
			size: '120',
			easing: 'easeOutBounce',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}, {
		offset: 'bottom-in-view'
	});
	
	/* VEGAS Home Slider */
	$('#page-welcome').vegas({
		slides: [
			{ src: 'img/01.jpg' },
			{ src: 'img/02.jpg' },
			{ src: 'img/03.jpg' }
		],
    overlay: true
	});

	$("#vegas-next").click(function() {
			$('#page-welcome').vegas('next');
	});
	$("#vegas-prev").click(function() {
		 $('#page-welcome').vegas('previous');
	});
	
});