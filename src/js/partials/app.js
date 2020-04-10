$(document).ready(function() {
	/**
	 * Dropdown button
	 */
	$('.menu-btn').on('click', function() {
		var $this = $(this);
		$this.toggleClass('close');
		$this.next().toggleClass('show');
	});

	$('.slide-down').on('click', function(e) {
		e.preventDefault();
		var href = this.getAttribute('href');
		$(href).animatescroll();
	});

	/**
	 * Sliders
	 */
	$('.homepage .section-sixth .slider').slick({
		dots: true,
		initialSlide: 1,
		arrows: false,
		draggable: false,
		slidesToShow: 2,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
    ]
	});
});