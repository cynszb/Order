var ctx = document.getElementById("ctx").value;
//初始化
var curPage; // 第几页
var pageCount; // 每页长度
var loadLength;// 当前页面条数
var maxPage; // 最大页数
var layer;
var laypage;


$(function() {
	screset();
	layui.use('table', function() {
		table = layui.table;
		// 去第一页加载系统角色默认
		toload();
	});
});


//校验相关
//Validform对象
var varifyObj;

/**
* 初始化校验资源
* 
* @param {Object}
*            pageObj 普通页面对象
*/
function varify(pageObj) {
	varifyObj = pageObj.Validform({
		tiptype : function(msg, o, cssctl) {
			if (!o.obj.is('form')) {
				var objtip = o.obj.siblings('.Validform_checktip');
				cssctl(objtip, o.type);
				objtip.text(msg);
			}
		}
	});
}

/**
 * 重置/清空筛选条件
 */
function screset() {
	$("#number").val("");
	$("#phone").val("");
	$("#startdate1").val("");
	$("#enddate1").val("");
	
	layui.use([ 'form' ], function() {
		var form = layui.form
		form.render()
	});
}

/**
 * 查询/重新从第 1页开始展示表格
 */
function query() {

	curPage = 1; // 重新从第 1 页开始
	// 取查询筛选条件,这里使用模糊查询
	var number=$("#number").val().trim(); // 编号
	var phone = $("#phone").val().trim(); // 手机号
	// 这里以搜索为例
	tableIns.reload({
		where : { // 设定异步数据接口的额外参数
			number : number,
			phone : phone,
			beginTime:$("#startdate1").val(),
			endTime:$("#enddate1").val()			
		},
		page : {
			curr : curPage
		// 重新从第 curr 页开始
		}
	});
}



/**
 * 填充列表数据
 */
function toload() {
	var number=$("#number").val().trim(); // 编号
	var phone = $("#phone").val().trim(); // 手机号
	// 所获得的 tableIns 即为当前容器的实例
	tableIns = table.render({
		elem : '#table',
		id : 'datatable',
		skin : 'line', // 行边框风格
		even : true, // 开启隔行背景
		cellMinWidth : 80, // 全局定义常规单元格的最小宽度,layui 2.2.1 新增
		loading : true, // 是否显示加载条(默认:true).如果设置
		// false,则在切换分页时,不会出现加载条.该参数只适用于url参数开启的方式
		page : true, // 开启分页
		limit : 10, // 每页显示的条数(默认:10).值务必对应 limits 参数的选项.优先级低于 page参数中的 limit参数.
		limits : [ 10, 15, 20, 30, 40, 50 ], // 每页条数的选择项,默认:[10,20,30,40,50,60,70,80,90].优先级低于page参数中的
		// limits参数.
		url : ctx + '/order/queryOrder', // 数据接口
		where : {
	/*		type : scType,// 角色类型(字典表)
			state : scState,// 状态(1:启用;2:禁用)
			name : scName*/
			number: number,
			phone:phone,
			beginTime:$("#startdate1").val(),
			endTime:$("#enddate1").val()	
		// 名称
		}, // 接口的其它参数
		request : {
			pageName : 'curPage', // 页码的参数名称,默认:page
			limitName : 'pageCount' // 每页数据量的参数名,默认:limit
		}, // 用于对分页请求的参数:page,limit重新设定名称
		response : {
			statusName : 'code', // 数据状态的字段名称,默认:code
			statusCode : '00', // 成功的状态码,默认:0
			msgName : 'msg', // 状态信息的字段名称,默认:msg
			countName : 'rcount', // 数据总数的字段名称,默认:count
			dataName : 'list' // 数据列表的字段名称,默认:data
		}, // 用于对返回的数据格式的自定义
		cols : [ [ // 表头
		
		{field : 'number',title : '编号',width : '15%'},
		{field : 'phone',title : '手机号',width : '30%'}, 
		{field : 'count',title : '次数',width : '15%'},
		{field : 'createTime',title : '日期'}
		//{title : '操作'} 
			] ],
		done : function(res, curr, count) {
			/*$("[data-title='操作']").children().each(function() {
				if ($(this).text() == '1') {
					$(this).text("启用")
				} else if ($(this).text() == '2') {
					$(this).text("禁用")
				}
			});*/
			// 当前页
			curPage = curr;
		}
	});
}


/**
 * 弹出添加对话框
 */
function showAdd() {
	var title = '添加订单';
	// 开始
	var html = "<div class='model-body layui-form'  lay-filter='test1' id='entire_add'>";

	// 名称
	html += "<div class='layui-form-item'>";
	html += "<label class='layui-form-label'>编号</label>";
	html += "<div  class='layui-input-block'>";
	//
	html += "<input   type='text' class='layui-input' placeholder='请输入1-4位整数' id='number_add' value='' ";
	html += "datatype='n1-4' nullmsg='编号不能为空' errormsg='最多4位整数' sucmsg='' />";
	//
	html += "<div class='Validform_checktip'></div>";
	html += "</div>";
	html += "</div>";
	
	// 手机号
	html += "<div class='layui-form-item'>";
	html += "<label class='layui-form-label'>手机号</label>";
	html += "<div  class='layui-input-block'>";
	//
	html += "<input   type='text' class='layui-input' placeholder='请输入手机号' id='phone_add' value='' ";
	html += "datatype='m' nullmsg='手机号不能为空' errormsg='请输入正确的手机号' sucmsg='' />";
	//
	html += "<div class='Validform_checktip'></div>";
	html += "</div>";
	html += "</div>";


	// 结束
	html += '</div>';

	layer.open({
		type : 1,
		anim : 1,
		title : title,
		closeBtn : 2,
		scrollbar : true,
		maxWidth : '90%',
		maxHeight : '95%',
		btn : [ '提交', '取消' ],
		area : [ '500px', '300px' ],
		content : html,
		btn1 : function(index) {
			if (!varifyObj.check(false)) { // 前台数据校验
				return;
			}
			insert(index);
		},
		btn2 : function(index) {
			layer.close(index);
		}
	});

	var form = layui.form;
	form.render();
	// 取当前用户权限
	// 校验数据
	varify($('#entire_add'));
}


/**
 * 提交方法到后台
 */
function insert(index) {
	
	var number = $("#number_add").val().trim();

	var phone = $("#phone_add").val().trim();
	
	
	// AJAX异步提交数据
	$.ajax({
		url : ctx + '/order/insert',
		data : {
			number : number,
			phone : phone
		},
		type : 'post',
		async : false,
		dataType : "json", // 预期返回结果数据格式
		success : function(data) {
			if (data.code == "00") { // 插入数据成功
				layer.close(index);
				curPage = 1; // 重新从第 1 页开始
				query(); // 表格重载
				layer.msg('提交成功!', {
					icon : 1,
					// anim : 6,
					time : 1000
				// 1秒关闭(如果不配置,默认是3秒)
				});
			} else if (data.code == "06") {// 未登录或失效
				layer.close(index);
				layer.open({
					title : '提示',
					btn : [ '确定' ],
					btn1 : function(index) {
						if (window.top == window.self) {
							window.location.href = data.url;
						} else {
							window.top.location.href = data.url;
						}
					},
					content : data.msg
				});
			} else {
				layer.msg(data.msg, {
					icon : 2,
					// anim : 6,
					time : 1000
				// 1秒关闭(如果不配置,默认是3秒)
				});
			}
		},
		error : function() {
			layer.msg('网络异常,请稍后再试!', {
				icon : 2,
				// anim : 6,
				time : 1000
			// 1秒关闭(如果不配置,默认是3秒)
			});
		}
	});
}

