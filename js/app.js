// Custom JS
document.addEventListener('DOMContentLoaded', () => {
	// Анимация спинера загрузки кнопок авторизации
	$('.enter__main button.btn').on('click', function() {
		let $this = $(this);
		 $this.addClass('loading');
		setTimeout(function () {
			 $this.removeClass('loading');
		}, 2000)
	});

	// Показать/скрыть пароль в input password
	$('.password').on('click', '.password-control', function(){
		let $inputPswrd = $(this).closest('.password').find('input')
		if ($inputPswrd.attr('type') == 'password'){
			$(this).addClass('view');
			$inputPswrd.attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$inputPswrd.attr('type', 'password');
		}
		return false;
	});

	// 

})
