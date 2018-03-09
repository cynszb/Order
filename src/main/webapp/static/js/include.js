var validObj;
/**
 * 分页公用类
 * @param total
 * @param pageCount
 * @param callBack
 * @returns
 */
function initPage(total, pageCount1,callBack) {
	//渲染分页插件,调用分页
	laypage.render({
		elem: 'paging',//容器:值支持id名,原生dom对象,jquery对象
		count: total, //数据总数
		limit: pageCount1, //连续出现的页码个数
		groups: 5, //连续出现的页码个数
		curr: num, //当前页,
		layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],//布局
		jump: function(obj, first) {
			num = obj.curr;
			pageCount = obj.limit;
			//首次不执行
			if(!first) {
				callBack();
			}
		}
	});
}

/**
 * table复选框初始化
 */
function initCheckbox(data) {
	// 初始化复选框
	layui.use([ 'form' ], function(data) {
		var form = layui.form, layer = layui.layer;
		var child = $(data.elem).parents('table').find(
				'tbody input[type="checkbox"]');
		child.each(function(index, item) {
			item.checked = data.elem.checked;
		});
		form.render('checkbox');
	});
}
/**
 * 弹出层公用组件
 * 
 * @param title
 * @param content
 * @param btn
 * @param width
 * @param height
 * @param callBack
 * @returns
 */
function showDiv(title,content,btn,width,height,callBack){
	layer.open({
	type: 1,
	title: title,
	btn: btn,
	area: [width, height],
	btn1: function(index) {
		if(callBack) {
			if(validObj!=null){
				if(!validObj.check(false)){
					return;
				}
				var flag = $("#checktip")[0].innerHTML;
				if(flag != '正在检测信息…' && flag != "OK"){
					return;
				}
			}
			callBack(index);
			layer.close(index);
		} else {
			layer.close(index);
		}
    },
    btn2: function(index) {
    	layer.close(index);
    },
	content: content
  	});
	//initVaildObj($('#addRole'));
}

function showDiv1(title,content,btn,width,height,callBack){
	layer.open({
	type: 1,
	title: title,
	btn: btn,
	area: [width, height],
	btn1: function(index) {
		if(callBack) {
			if(validObj!=null){
				if(!validObj.check(false)){
					return;
				}
				var flag = $("#checktip")[0].innerHTML;
				if(flag != '正在检测信息…' && flag != "OK"){
					return;
				}
			}
			callBack(index);
			//layer.close(index);
		} else {
			layer.close(index);
		}
    },
    btn2: function(index) {
    	layer.close(index);
    },
	content: content
  	});
	//initVaildObj($('#addRole'));
}
/**
 * 初始化校验
 * 
 * @param obj 对象
 * @returns
 */
function initVaildObj(obj) {
	if(obj==null){
		validObj=null;
	}else{		
		validObj = obj.Validform({
			tiptype: function(msg, o, cssctl) {
				if(!o.obj.is('form')) {
					var objtip = o.obj.siblings('.Validform_checktip');
					cssctl(objtip, o.type);
					objtip.text(msg);
				}
			}
		});
	}
}

/**
 * 验证重名
 * @param ele 要绑定规则的表单元素
 * @param datatype 验证类型
 * @param ajaxurl 验证URL
 * @param nullmsg 为空时的提示信息
 * @param errormsg 未通过验证时的提示信息
 */
function checkRe(ele, datatype, ajaxurl, nullmsg, errormsg) {
	validObj.addRule([ {
		ele : ele,
		datatype : datatype,
		ajaxurl : ajaxurl,
		nullmsg : nullmsg,
		errormsg : errormsg
	} ]);
}

function validName(){
	var flag = false;
	for(var i=0; i<$(".Validform_checktip").length; i++){
		if ($(".Validform_checktip")[i].innerText != 'OK') {
			flag = false;
			break;
		}
		flag = true;
	}
	return flag;
}