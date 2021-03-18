$.fn.setCursorPosition = function (pos) {
	if ($(this).get(0).setSelectionRange) {
		$(this).get(0).setSelectionRange(pos, pos);
	} else if ($(this).get(0).createTextRange) {
		var range = $(this).get(0).createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
};

$(function () {
	// Получить элемент, к которому необходимо добавить маску
	$(".action-application__input").click(function () {
		$(this).setCursorPosition(5);
	})
		.mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
});

$('.header__burger').click(function () {
	$('.header__burger,.menu__list').toggleClass('active');
	$('body').toggleClass('lock');
});

$(window).scroll(function () {
	var height = $(window).scrollTop();
	/*Если сделали скролл на 100px задаём новый класс для header*/
	if (height > 50) {
		$('.header').addClass('_bg');
	}
	else {
		/*Если меньше 100px удаляем класс для header*/
		$('.header').removeClass('_bg');
	}
});
