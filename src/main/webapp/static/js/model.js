
var id;
//皮肤管理
function DermaManagement(){
	layer.open({
	type: 1,
	title: "皮肤设置",
	btn: ['确认', '取消'],
	area: ['400px', '300px'],
	yes: function(index) {
		var s_icon=$(".skin-body").find(".skin_icon");
        for(var i=0;i<s_icon.length;i++){
        	if($(s_icon[i]).is(":hidden")){
        		continue;
        	}else{
        		var skin_box=$(s_icon[i]).parent(".skin");
        		id=$(s_icon[i]).parent(".skin").attr("id");
        		skin_box.addClass("selected").siblings().removeClass("selected");
				$('#skinCss').attr("href","css/"+ (skin_box.attr("id")) +".css");
				break;
        	}
        }
        layer.close(index);
    },
    btn2: function(){ 
	   var a= $('#skinCss').attr("href","css/"+ window.skin_box +".css");
	} ,
	content: '<div class="model-body skin-body">'
	+'<div class="skin" id="skin02"><span>默认</span><i class="skin_icon"></i></div>'
	+'<div class="skin" id="skin"><span>蓝色</span><i class="skin_icon"></i></div>'
	+'<div class="skin" id="skin01"><span>黄色</span><i class="skin_icon"></i></div>'
	+'</div>',
	skin: setTimeout("onloadSkin()",50)
  });
}
function onloadSkin(){
	var h=$("#skinCss").attr("href");
	var hName=h.match(/css\/(\S*).css/);
	$("#"+hName[1]).children(".skin_icon").show();
	$("#"+hName[1]).siblings().children(".skin_icon").hide();
	var s_icon=$(".skin-body").find(".skin_icon");
        for(var i=0;i<s_icon.length;i++){
        	if($(s_icon[i]).is(":hidden")){
        		continue;
        	}else{
				window.skin_box=$(s_icon[i]).parent(".skin").attr("id");
        	}
        }
}
//弹框模板
function ModelList(){
	layer.open({
	type: 1,
	title: "列表",
	btn: ['确认', '取消'],
	area: ['400px', '500px'],
	yes: function(index) {
		//事件
        layer.close(index);
    },
    no: function() {
        
    },
	content: '\<\div class="model-body">'
	+'\<\div class="form-margin">\<\label class="control-label">入库批次\<\/label>\<\div class="form-input-max"><div class="slide-list slide-list-form"><div class="menuval"><span class="select-text">请选择批次</span><s></s></div><ul class="slide-box hide"><li>批次1</li><li>批次2</li><li>批次3</li></ul></div>\<\/div>\<\div class="clear">\<\/div>\<\/div>'
	+'\<\div class="form-margin">\<\label class="control-label">菜单名称\<\/label>\<\div class="form-input-max">\<input class="form-input" type="text" placeholder="菜单路径为2-10个字符"\/>\<\/div>\<\div class="clear">\<\/div>\<\/div>'
	+'\<\div class="form-margin">\<\label class="control-label">入库批次\<\/label>\<\div class="form-input-max"><div class="slide-list1 slide-list-form"><div class="menuval"><input class="compile-input" type="text" placeholder="请选择批次"/><s></s></div><ul class="slide-box hide"><li>批次1</li><li>批次2</li><li>批次3</li></ul></div>\<\/div>\<\div class="clear">\<\/div>\<\/div>'
	+'\<\div class="form-margin">\<\label class="control-label">排序\<\/label>\<\div class="form-input-max">\<input class="form-input" type="text" placeholder="请填写排序"\/>\<\/div>\<\div class="clear">\<\/div>\<\/div>'
	+'\<\div class="form-margin">\<\label class="control-label">排序\<\/label>\<\div class="form-input-max">\<span>男<\/span>\<input class="input-radio" name="radio" type="radio"\/><span>女<\/span>\<input class="input-radio" name="radio" type="radio"\/>\<\/div>\<\div class="clear">\<\/div>\<\/div>'
	+'\<\div class="form-margin">\<\label class="control-label">菜单样式\<\/label>\<\div class="form-input-max">\<input class="form-input" type="text" placeholder="请填写菜单样式"\/>\<\/div>\<\div class="clear">\<\/div>\<\/div>'
	+'<div class="form-margin"><label class="control-label">备注</label><div class="form-input-max"><textarea class="form-input" name="text" rows="5" cols="20" placeholder="备注为1-50个字符">456465465</textarea></div><div class="clear"></div></div>'
	+'\<\/div>'
  	});
}
//弹框模板2
function ModelList1(){
	layer.open({
	type: 1,
	title: "列表",
	btn: ['确认', '取消'],
	area: ['400px', '400px'],
	yes: function(index) {
		//事件
        layer.close(index);
    },
    no: function() {
        
    },
	content: '\<\div class="model-body">'
	+'<div class="form-margin"><label class="control-label">入库批次</label><div class="form-input-max"><select class="two-select" name="province" id="province"><option value="">请选择内容</option></select></div><div class="clear"></div></div>'
	+'<div class="form-margin"><label class="control-label">入库批次</label><div class="form-input-max"><select class="two-select" name="city" id="city"><option value="">请选择内容</option></select></div><div class="clear"></div></div>'
	+'\<\/div>'
  	});
//	var city_json='{"内容1":["啊啊啊啊啊啊","哈哈哈哈哈哈"],"内容2":["哦哦哦哦哦哦","嗯嗯嗯嗯嗯嗯"]}';
//  var city_obj=eval('('+city_json+')');
//      for (var key in city_obj)
//      {
//          $("#province").append("<option value='"+key+"'>"+key+"</option>");
//      }
//      $("#province").change(function(){
//          var now_province=$(this).val();
//          $("#city").html('<option value="">请选择城市</option>');
//          for(var k in city_obj[now_province])
//          {
//              var now_city=city_obj[now_province][k];
//              $("#city").append('<option value="'+now_city+'">'+now_city+'</option>');
//          }
//      });
}
//弹框模板3
function ModelList2(){
	layer.open({
	type: 1,
	title: "列表",
	btn: ['确认', '取消'],
	area: ['400px', '400px'],
	yes: function(index) {
		//事件
        layer.close(index);
    },
    no: function() {
        
    },
	content: '\<\div class="model-body">'
	+'<div class="form-margin"><label class="control-label">入库批次</label><div class="form-input-max"><select class="two-select" name="province" id="province"><option value="">请选择内容</option></select></div><div class="clear"></div></div>'
	+'<div class="form-margin"><label class="control-label">入库批次</label><div class="form-input-max"><input type="text" class="ab-input" placeholder="请填内容"/><select class="two-select" name="city" id="city"><option value="">请选择内容</option></select></div><div class="clear"></div></div>'
	+'\<\/div>'
  	});
}
//多选框弹框
function CheckBox(){
	layer.open({
	type: 1,
	title: "列表",
	btn: ['确认', '取消'],
	area: ['400px', '500px'],
	yes: function(index) {
		//事件
        layer.close(index);
    },
    no: function() {
        
    },
	content: '\<\div class="model-body">'
	+'<div class="one-f">'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>人员</label>'
	+'</div>'
	+'</div>'
	+'<div class="one-f-children">'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>李磊</label>'
	+'</div>'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>李磊</label>'
	+'</div>'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>李磊</label>'
	+'</div>'
	+'</div>'
	+'<div class="one-f">'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>部门</label>'
	+'</div>'
	+'</div>'
	+'<div class="one-f-children">'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>研发部</label>'
	+'</div>'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>研发部</label>'
	+'</div>'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>研发部</label>'
	+'</div>'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>研发部</label>'
	+'</div>'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>研发部</label>'
	+'</div>'
	+'<div class="chek-box">'
	+'<input type="checkbox" name="checkbox" id="allcheck"/>'
	+'<label>研发部</label>'
	+'</div>'
	+'</div>'
	+'\<\/div>'
  	});
}
//二级页面
function IfRmove(){
	layer.open({
	type: 2,
	title:"这里",
	shade: [0],
	area: ['100%', '100%'],
	anim: 1,
	yes: function(index) {
		//事件
        layer.close(index);
    },
	content: ['new-tables.html'],
	
  	});
  	setTimeout(function(){
        layui.layer.tips('点击此处返回列表', '.layui-layer-setwin .layui-layer-close', {
            tips: 3
        });
    },500)
}