var swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	spaceBetween: 5,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

$('.tab-item').on('click', function() {
	var _index = $(this).index();
	$(this).addClass('active').siblings(".tab-item").removeClass('active');
});

getClass();
getBooks();
getSchool();


function getClass() {
	var tmpl = $.templates("#J_tpl_class");
	$.ajax({
		url: api + 'ykGoods/list',
		type: 'POST',
		data: {
			type:1,
			pid:''
		},
		dataType: 'JSON',
		success: function(res) {
			if (res.code == 0) {
				var data = res.rows.splice(0,3);
				var html = tmpl.render(data);
				$("#html_class").html(html);
			}
		}
	});
}

function getBooks() {
	var tmpl = $.templates("#J_tpl_books");
	$.ajax({
		url: api + 'ykGoods/list',
		type: 'POST',
		data: {
			type:3,
			pid:''
		},
		dataType: 'JSON',
		success: function(res) {
			var data = res.rows.splice(0,8);
			var html = tmpl.render(data);
			$("#html_books").html(html);
		}
	});
}

function getSchool() {
	var tmpl = $.templates("#J_tpl_school");
	$.ajax({
		url: api + 'ykSchoolCooperation/list',
		type: 'POST',
		data: {},
		dataType: 'JSON',
		success: function(res) {
			if (res.code == 0) {
				var data = res.rows;
				var html = tmpl.render(data);
				$("#html_school").html(html);
			}
		}
	});
}
