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

$('#html_newsType').on('click', '.tab-item', function() {
	$(this).addClass('active').siblings(".tab-item").removeClass('active');
	var id = $(this).attr("data-id");
	getNewsList_first(id)
	getNewsList(id);
});

getNewsList_first(1)
getClass_remen();
// getClass();
getBooks();
getSchool();
getNewsType();
getNewsList(1);

function getNewsList_first(id) {
	var tmpl = $.templates("#J_tpl_newsDesc_first");
	$.ajax({
		// url: api + 'ykInformation/list',
		url: api + 'ykInformation/toutiao',
		type: 'POST',
		data: {
			// 'zixuntype': id
		},
		dataType: 'JSON',
		success: function(res) {
			if (res.code == 0) {
				// 第一条
				var data = res.toutiao[0];
				var createtime=data.createtime.split(' ')[0];
				var month=createtime.substr(5,7);
				var year=createtime.substr(0,4);
				console.log(month);
				console.log(year);
				console.log(createtime);
				var html = tmpl.render(data);
				$("#html_newsDesc_first").html(html);
				$('.firstMonth').html(month);
				$('.firstYear').html(year);
				//第二条
				var data = res.toutiao[1];
				var title2=data.title;
				var desc2=data.content;
				var createtime2=data.createtime.split(' ')[0];
				var month2=createtime2.substr(5,7);
				var year2=createtime2.substr(0,4);
				$('.title2').html(title2);
				$('.desc2').html(desc2);
				$('.month2').html(month2);
				$('.year2').html(year2);	
				//第3条
				var data = res.toutiao[2];
				var title3=data.title;
				var desc3=data.content;
				var createtime3=data.createtime.split(' ')[0];
				var month3=createtime3.substr(5,7);
				var year3=createtime3.substr(0,4);
				$('.title3').html(title3);
				$('.desc3').html(desc3);
				$('.month3').html(month3);
				$('.year3').html(year3);
			}
		}
	});
}

function getNewsList(id) {
	var tmpl = $.templates("#J_tpl_newsDesc");
	$.ajax({
		url: api + 'ykInformation/list',
		type: 'POST',
		data: {
			// 'zixuntype': id
		},
		dataType: 'JSON',
		success: function(res) {
			if (res.code == 0) {
				var data = res.toutiao;
				var html = tmpl.render(data);
				$("#html_newsDesc").html(html);
			}
		}
	});
}

function getNewsType() {
	var tmpl = $.templates("#J_tpl_newsType");
	$.ajax({
		url: api + 'ykInformationType/list',
		type: 'POST',
		data: {},
		dataType: 'JSON',
		success: function(res) {
			if (res.code == 0) {
				var data = res.rows;
				var html = tmpl.render(data);
				$("#html_newsType").html(html);
			}
		}
	});
}

function getClass_remen() {
	var tmpl = $.templates("#J_tpl_class");
	$.ajax({
		url: api + 'ykGoods/remen',
		type: 'POST',
		data: {
			free:1
		},
		dataType: 'JSON',
		success: function(res) {
			if (res.code == 0) {
				var data = res.rows.splice(0, 3);
				var html = tmpl.render(data);
				$("#html_class").html(html);
			}
		}
	});
}
function getClass() {
	var tmpl = $.templates("#J_tpl_class");
	$.ajax({
		url: api + 'ykGoods/list',
		type: 'POST',
		data: {
			type: 1,
			pid: ''
		},
		dataType: 'JSON',
		success: function(res) {
			if (res.code == 0) {
				var data = res.rows.splice(0, 3);
				var html = tmpl.render(data);
				$("#html_class").html(html);
			}
		}
	});
}

function getBooks() {
	var tmpl = $.templates("#J_tpl_books");
	$.ajax({
		url: api + 'ykGoods/tuijian',
		type: 'POST',
		data: {
			type: 3
		},
		dataType: 'JSON',
		success: function(res) {
			var data = res.rows.splice(0, 8);
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
