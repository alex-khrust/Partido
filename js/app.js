// Custom JS
document.addEventListener('DOMContentLoaded', () => {
	
	$('.enter__main button.btn').on('click', function() {
		var $this = $(this);
		 $this.addClass('loading');
		setTimeout(function () {
			 $this.removeClass('loading');
		}, 2000)
	});

})
