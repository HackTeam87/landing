var currentSlide = 3,
	slideCount = 3,
 	slideElems = $('.slide'),
 	totalSlideCount = slideElems.length,
 	slideWidthPercent = (1 / slideCount).toFixed(4),
 	slideWidthPercentFormatted = slideWidthPercent * 100,
 	slideWrapper = $('.slide-wrapper'),
	slideToggler = $('.slide-toggler'),
 	leftButton = $('.slide-left'),
 	rightButton = $('.slide-right');

 	slideElems.width((100 / totalSlideCount ) + '%');
 	slideElemWidth = $(slideElems[0]).width();

 	function getCurrentToggler(index) {
 		return [].filter.call(slideToggler, function (item) {
			return $(item).data('toggler-index') === index;
		}).shift();
	};

	function getCurrentSlide(index) {
        return [].filter.call(slideElems, function (item) {
            return $(item).data('slide-index') === index;
        }).shift();
    }

 	function slideToLeft() {
 		if (currentSlide === totalSlideCount) return;
		currentSlide++;
		var currentToggler = getCurrentToggler(currentSlide),
            currentSlideIndex = getCurrentSlide(currentSlide);
		slideToggler.removeClass('active-toggler');
		$(currentToggler).addClass('active-toggler');
        slideElems.removeClass('active-slide');
        $(currentSlideIndex).addClass('active-slide');
 		slideWrapper.stop(false, true).animate({'marginLeft': '-=' + slideWidthPercentFormatted + '%'});
 	}

 	function slideToRight() {
 		if (currentSlide === 1) return;
		currentSlide--;
		var currentToggler = getCurrentToggler(currentSlide),
            currentSlideIndex = getCurrentSlide(currentSlide);
		slideToggler.removeClass('active-toggler');
		$(currentToggler).addClass('active-toggler');
        slideElems.removeClass('active-slide');
        $(currentSlideIndex).addClass('active-slide');
 		slideWrapper.stop(false, true).animate({'marginLeft': '+=' + slideWidthPercentFormatted + '%'});
 	}

 	leftButton.click(slideToLeft);
 	rightButton.click(slideToRight);

	slideToggler.click(function () {
		var index = $(this).data('toggler-index'),
			diff = index - currentSlide;
		if (!diff) return;
		if (diff > 0) slideWrapper.stop(false, true).animate({'marginLeft': '-=' + diff * slideWidthPercentFormatted + '%'});
		if (diff < 0) slideWrapper.stop(false, true).animate({'marginLeft': '+=' + -diff * slideWidthPercentFormatted + '%'});
		currentSlide = index;
        var currentSlideIndex = getCurrentSlide(currentSlide);
        slideToggler.removeClass('active-toggler');
		$(this).addClass('active-toggler');
        slideElems.removeClass('active-slide');
        setTimeout(function() {
            $(currentSlideIndex).addClass('active-slide');
        },300);
	});












