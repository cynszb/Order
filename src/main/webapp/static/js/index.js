$(function() {
	$(".hideMenu").on('click', function() {
		var Left = $(".layui-layout-admin .layui-side");
		var Content = $(".layui-body");
		var Footer = $(".footer");
		if (Left.position().left == 0) {
			Left.css("left", "-200px")
			Content.css("left", "0")
			Footer.css("left", "0")
		} else {
			Left.css("left", "0")
			Content.css("left", "200px")
			Footer.css("left", "200px")
		}
	});
	$(document).on(
			'click',
			'.skin',
			function() {
				$(this).children(".skin_icon").css("display", "inline-block");
				$(this).siblings(".skin").children(".skin_icon").css("display",
						"none");
				$("#" + this.id).addClass("selected").siblings().removeClass(
						"selected");
				$('#skinCss').attr("href", "css/" + (this.id) + ".css");
			});
	// 下拉菜单
	$(document).on('click', '.btn-screen', function() {
		var next = $(".esh-table-filter");
		if (next.is(":hidden")) {
			next.slideDown();
		} else {
			next.slideUp();
		}
	});
	// 下拉菜单
	$(document).on('click', '.slide-list', function() {
		var children = $(this).children(".slide-box");
		if (children.is(":hidden")) {
			children.fadeIn(0.5);
		} else {
			children.fadeOut(0.5);
		}
	});
	// 可编辑下拉菜单
	$(document).on('click', '.slide-list1 > div > s', function() {
		var children = $(this).parent(".menuval").next(".slide-box");
		if (children.is(":hidden")) {
			children.fadeIn(0.5);
		} else {
			children.fadeOut(0.5);
		}
	});
	// 点击空白关闭下拉菜单等
	$(document.body).click(function(e) {
		$(".slide-box").fadeOut(0.5);
		/*
		 * var drag = $(".tree-click").next(".tree-hide"), dragel =
		 * $(".tree-click").next(".tree-hide")[0], target = e.target; if (dragel
		 * !== target && !$.contains(dragel, target)) { drag.fadeOut(0.5);; }
		 */
	});
	// 下拉菜单赋值
	$(document).on(
			'click',
			'.slide-box li',
			function() {
				var ThisText = $(this).text();
				$(this).parent(".slide-box").prev(".menuval").children(
						".select-text").text(ThisText)
				$(this).parent(".slide-box").prev(".menuval").children(
						".select-text").attr("value", $(this).val())
				$(this).parent(".slide-box").prev(".menuval").children(
						".compile-input").val(ThisText)
			})
	// 可编辑下拉菜单
	$(document).on('click', '.tree-click', function() {
		var children = $(this).next(".tree-hide");
		if (children.is(":hidden")) {
			children.fadeIn(0.5);
		} else {
			children.fadeOut(0.5);
		}
	});
	// 表单全选
	layui.use([ 'form' ], function() {
		var form = layui.form, layer = layui.layer;
		form.on('checkbox(allChoose)', function(data) {
			var child = $(data.elem).parents('table').find(
					'tbody input[type="checkbox"]');
			child.each(function(index, item) {
				item.checked = data.elem.checked;
			});
			form.render('checkbox');
		});
	});
	// 分页
	layui.use([ 'laypage', 'layer' ], function() {
		var laypage = layui.laypage, layer = layui.layer;
		// 总页数低于页码总数
		laypage.render({
			elem : 'demo',
			count : 50
		// 数据总数
		});
	});
});
/**
 * 节目编排页面计算显示高度
 */
function heightSize() {
	var hp = $(".programLeft").height();
	var hpr = $(".programRight").height();
	if (hp > hpr) {
		$(".programRight").height(hp);
	} else {
		$(".programLeft").height(hpr);
	}
}


//2018.1.10 设置播放刻度函数
$("body").on("click",".allCheck,.playScale>li",function(){
	var checkInput=$(this).find("input[type='checkbox']");
		if(checkInput.is(":checked")){
			$(this).parents(".play_li").addClass("choose_li");
		}else{
			$(this).parents(".play_li").removeClass("choose_li");
		}
});
$("body").on("click",".point-time",function(){
	var checkInput=$(this).parents(".allCheck").find("input[type='checkbox']");
	var otherInput=$(this).parents(".play_li").children(".playScale").find("input[type='checkbox']");
	if(checkInput.is(":checked")){
		otherInput.prop("checked",true);
		$(this).parents(".play_li").addClass("choose_li");
	}else{
		otherInput.prop("checked",false);
		$(this).parents(".play_li").removeClass("choose_li");
	}
});


var a=true;
$("body").on("click",".morescale",function(){
	if(a){
		$(this).prev(".playScale").children("li").each(function(i){
			if(i>3){
				$(this).slideDown();
			}
		})
		a=false;
	}else{
		$(this).prev(".playScale").children("li").each(function(i){
			if(i>3){
				$(this).slideUp();
			}
		})
		a=true;
	}
});
$("body").on("click",".scale_total",function(){
	if($(this).next().is(":hidden")){
		$(this).next().fadeIn();
	}else{
		$(this).next().fadeOut();
	}
})
$("body").on("click",".scale-close",function(){
	if($(this).parent(".scaleShow").is(":hidden")){
		$(this).parent(".scaleShow").fadeIn();
	}else{
		$(this).parent(".scaleShow").fadeOut();
		}
})

