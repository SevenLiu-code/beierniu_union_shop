function break_url(){
 if (document.referrer === '') {
	 $('a.link_referrer').attr('href', '');
 }
}
var area1;//定义选择城市变量

function select_city(){
	 if ( $('#manage_addr').length > 0 ) {
			area1 = new LArea();
			 area1.init({
			 'trigger': '#manage_addr', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
			 'valueTo': '#value1', //选择完毕后id属性输出到该位置
			 'keys': {
				 id: 'id',
				 name: 'name'
			 }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
			 'type': 1, //数据源类型
			 'data': LAreaData //数据源
		 });
	 } else return;
 };

// 字母定位函数
function brank_letter() {
		var $aside_letter = $('aside.aside_letter');
		if ($aside_letter.length>0) {
				$('aside.aside_letter li.letter_item').on('touchstart', function(e){
					var $letter_item_index = $(this).index();//当前字母的序号，与dl列表对应
					var dl_offsetTop = $('dl.filter_details_kind').eq($letter_item_index).offset().top;
					console.log( dl_offsetTop );
					$(window).scrollTop(dl_offsetTop); //滚动条高度设置为对应dl列表距文档顶部高度
					if (e.type == 'touchstart') e.preventDefault();
				})
			}else { return; }
	};

function buySellEnvent(){
		var h = 0;
		$('div.form_inner_con div.form_box').css({"display": "none"}).eq(0).css({"display": "block"});
		h = $('div.form_inner_con div.form_box').eq(0).height();
		$('div.form_inner_con').height(h);
		$('ul.buy_sell_tit>li>a').mouseover(function(){
				if ($(this).hasClass("current")) {
					return false;
				}else {
					$(this).parents('ul.buy_sell_tit').find('a.current').removeClass('current');
					$(this).addClass('current');
					$('div.form_inner_con div.form_box').css({"display": "none"}).eq($(this).parent().index()).css({"display": "block"});
					 h = $('div.form_inner_con div.form_box').eq($(this).parent().index()).height();
					$('div.form_inner_con').height(h);
				};
		})
	};
//模拟iOS时间选择
function ios_time(){
	if ( $('#picktime').length>0 ) {//如果有#picktime DOM，执行
		var calendar = new LCalendar();
    	calendar.init({
        'trigger': '#picktime', //标签id
        'type': 'ym', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1980-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1)
    	});
	}
}

//首页模块定高
function home_moudle_height() {
	if( $('.home_four_moudle').length > 0 ){
		var home_foot_btn_height = $('.home_foot_btn').height();
		var body_height = $(window).height();
		var mouldle_height =  body_height - $('.home_four_moudle').offset().top - home_foot_btn_height;
		$('.home_four_moudle_item').height( mouldle_height / 2 );
	}
}

$(function(){

	(function(){
			if ( $('.swiper-home-slide').length > 0 ) {
				var swiper_home_slide = new Swiper( '.swiper-home-slide', {
						loop: true,
						autoplay: 5000,
						pagination: '.swiper-pagination'
				});
			}
			if ($('.swiper-details').length > 0 ) {
				var details_img_slide = new Swiper( '.swiper-details', {
						loop: true,
						autoplay: 5000,
						pagination: '.swiper-pagination'
				});
			}
	})()

	buySellEnvent();
	brank_letter();
	ios_time();
	select_city();
	home_moudle_height();
})
