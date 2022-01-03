// Custom JS
document.addEventListener('DOMContentLoaded', () => {

	// Анимация спинера загрузки кнопок авторизации
	$('.sign-up .enter__main button.btn').on('click', function() {
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

	//Рандомные цвета для .member__foto
	var randomBgClass = $(".member__foto");
	$(randomBgClass).each(function(index){
	var randomColor = '#'+ ('EFA535' + Math.floor(index*189898978).toString(16)).slice(-6);
		$(this).css('background', randomColor);
	});

	//

})
