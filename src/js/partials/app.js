$(document).ready(function() {
	// Dropdown button
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

});