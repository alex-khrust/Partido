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

	// Превью изображения после загрузки для input file
	if ($('#imgInp').length) {
		imgInp.onchange = evt => {
			const [file] = imgInp.files
			if (file) {
				output.src = URL.createObjectURL(file)
			}
		};
	};


	//POPUP open/close
	$(".open-popup").on("click", function (e) {
		e.preventDefault();
		var dataPopup = $('.' + $(this).attr("data-popup"));
		$(".popup").removeClass("open");
		$(dataPopup).addClass("open");
		$("body").addClass("locked");
	});
	// Скрытие popup по клику за его пределами 
	$(document).mouseup(function (e) {
		var popup = $(".popup__box");
		if (!popup.is(e.target) && popup.has(e.target).length === 0) {
			$("body").removeClass("locked");
			$(".popup").removeClass("open");
		}
	});


	// Добавление имени выбранного участника в поле поиска при создании комнаты
	$('.member-check').on('click', function(){
		if ($(this).find('input:checkbox').is(':checked')){
			let text =	$(this).find('.member__name').text();
			$('.search label').append(text + ',\n');
		} else {
			// $('.search input').(text);
		}
	});

	// Tabs с запоминанием выбранного таба в localStorage
	(function($) {
		$(function() {
	 
			$('.feed__box').each(function(i) {
				var storage = localStorage.getItem('tab' + i);
				if (storage) {
					$(this).find('li').removeClass('active').eq(storage).addClass('active')
					.closest('.home').find('.feed__box').removeClass('active').eq(storage).addClass('active');
				}
			});
	 
			$('ul.tabs__list').on('click', 'li:not(.active)', function() {
				$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.home').find('.home__main .feed__box').removeClass('active').eq($(this).index()).addClass('active');
				var ulIndex = $('.feed__box').index($(this).parents('.feed__box'));
				localStorage.removeItem('tab' + ulIndex);
				localStorage.setItem('tab' + ulIndex, $(this).index());
			});
	 
		});
	})($);



	// searching-results
	$(".search").on("click", function (e) {
		e.preventDefault();
		// var dataPopup = $('.' + $(this).attr("data-popup"));
		$('.home__main .feed__box').removeClass('active');
		$(".searching-results").removeClass("active").addClass("active");
		$("body").addClass("locked");
	});


	// Уменьшение header при скролле
	const $header = $("header")
	let prevScroll
	let lastShowPos

	$('main').on("scroll", function() {
		const scrolled = $('main').scrollTop()

		if (scrolled > 10 && scrolled > prevScroll) {
			$header.addClass("short")
			lastShowPos = scrolled
		} else if (scrolled <= Math.max(lastShowPos - 250, 0)) {
			$header.removeClass("short")
		}
		prevScroll = scrolled
	})

	
	// Высота страницы по высоте экрана
	let	windowHeight = $(window).innerHeight();
	let	headerHeight = $('.home header, .room-page header').height();

	$('body').css({'height': windowHeight});
	
	// Высота страницы по высоте экрана при resize
	$(window).resize(function () {
		let	windowHeight = $(window).innerHeight();
		let	headerHeight = $('.home header, .room-page header').height();

		$('body').css('height', windowHeight);
	});
	
	// =======
})
