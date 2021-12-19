// Custom JS
document.addEventListener('DOMContentLoaded', () => {

	$('.enter-main button.btn').on('click', function() {
		var $this = $(this);
		 $this.addClass('loading');
		setTimeout(function () {
			 $this.removeClass('loading');
		}, 2000)
	});

	$('body').on('click', '.password-control', function(e){
		if ($('.password input').attr('type') == 'password'){
			$(this).addClass('view');
			$(this).closest('.password').find('input').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$(this).closest('.password').find('input').attr('type', 'password');
		}
		return false;
	});

})
