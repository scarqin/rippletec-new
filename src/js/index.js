$(function() {
	function initEvent(btnElem, FunNext) {
		var posStart = 0;
		var posEnd = 0
		btnElem.on("touchstart", function(event) {
			event.preventDefault(); //阻止浏览器默认行为
			posStart = 0;
			posStart = event.targetTouches[0].pageY; //获取起点坐标
		});
		btnElem.on("touchend", function(event) {
			event.preventDefault();
			posEnd = 0;
			posEnd = event.changedTouches[0].pageY;
			if (posStart - posEnd > 20) {
				FunNext();
			};
		});
	};
	initEvent($('.page1'), page1);
	initEvent($('.page2'), page2);
	initEvent($('.page3'), page3);
	initEvent($('.page4'), page4);

	$('.title-header').addClass('header-out');
	$(".letter-box").addClass('letter-in');

	function page1() {
		$(".earth").addClass('earth-out');
		$(".letter-box").addClass('letter-out');
		setTimeout(function() {
			$('.page1').addClass('slow-out');
			$('.page1').addClass('hidden');
		}, 300);
		setTimeout(function() {
			$('.page2').removeClass('hidden');
			$('.page2').addClass('slow-show');
		}, 300);
	};

	function page2() {
		setTimeout(function() {
			$('.page3').addClass('slow-show')
			$('.page3').removeClass('hidden');
			$('.page2').addClass('slow-out');
		}, 200);
		setTimeout(function() {
			$('.page2').addClass('hidden');
		}, 300);

	};

	function page3() {
		setTimeout(function() {
			$('.page4').addClass('slow-show')
			$('.page4').removeClass('hidden');
			$('.page3').addClass('slow-out');
		}, 200);
		setTimeout(function() {
			$('.page3').addClass('hidden');
		}, 300);
	};

	function page4() {
		setTimeout(function() {
			$('.page1').addClass('slow-show')
			$('.page1').removeClass('hidden');
			$('.page4').addClass('slow-out');
		}, 200);
		setTimeout(function() {
			$('.page4').addClass('hidden');
		}, 300);
	};

	function TextShow(obj, show) {
		obj.on('touchend', function() {
			$('.hidden-page').removeClass('hidden slow-2-out');
			show.addClass('slow-2-show');
			show.addClass('show');
		})
	}
	TextShow($('.written-examination'), $('.planet4'));
	TextShow($('.interview'), $('.planet3'));
	TextShow($('.test'), $('.planet2'));
	TextShow($('.ripple-world'), $('.planet1'));
	TextShow($('.rocket-box'), $('.rocket'));
	TextShow($('.pic-android'), $('.android'));
	TextShow($('.pic-ios'), $('.ios'));
	TextShow($('.pic-web'), $('.web'));
	TextShow($('.pic-design'), $('.design'));
	TextShow($('.pic-backstage'), $('.backstage'));

	$(".hidden-page").on("touchend", function() {
		$('.hidden-page').addClass('slow-2-out');
		setTimeout(function() {
			$('.hidden-page').addClass('hidden');
			$('.page-3-box').removeClass('show');
			$('.page-4-box').removeClass('show');
		}, 500);

	})

	$(".sign").on("touchend", function() {
		location.href = "http://www.rippletec.net/bm2016/"
	})
})