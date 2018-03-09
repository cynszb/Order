<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<link rel="stylesheet" type="text/css"
	href="${ctx}/static/css/stream-v1.css" />
<link rel="stylesheet" href="${ctx}/static/layui/css/layui.css" />
<link rel="stylesheet"
	href="${ctx}/static/layui/css/modules/layer/default/layer.css" />
<link rel="stylesheet" href="${ctx}/static/css/iframe.css" />
<link rel="stylesheet" href="${ctx}/static/css/MinAndMax.css" />
<body class="childrenBody">
	<input type="hidden" id="ctx" name="ctx" value="${ctx}" />
	<!--按钮-->
	<div class="form-icon layui-btn-group">
		<button class="layui-btn btn-screen">筛选</button>
		<button class="layui-btn" onclick="showAdd()">添加</button>
	</div>
	<!--筛选-->
	<div class="esh-table-filter">
		<ul class="esh-region-color">
			<!--第一行-->
			<li class="esh-filter-item">
				<div class="slide-list-box">
					<span>编号:</span> <input type="text" class="search_input lf"
						placeholder="请输入内容" id="number" />
					<div class="clear"></div>
				</div>

				<div class="slide-list-box">
					<span>手机号:</span> <input type="text" class="search_input lf"
						placeholder="请输入内容" id="phone" />
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</li>



			<!--第二行-->
			<li class="esh-filter-item">
				<div class="slide-list-box">
					<span>日期:</span>
					<ul class="rq-box">
						<li class="wipper"><input type="text" id="startdate1"
							class="Wdate search_text" placeholder="开始时间"
							onfocus="var enddate1 = $dp.$('enddate1'); WdatePicker({ onpicked: function () { enddate1.focus(); }, isShowClear: true, readOnly: true, maxDate: '#F{$dp.$D(\'enddate1\')}' })" />
						</li>
						<li class="lf">至</li>
						<li class="wipper"><input type="text" id="enddate1"
							class="Wdate search_text" placeholder="截止时间"
							onfocus="WdatePicker({ isShowClear: true, readOnly: true, minDate: '#F{$dp.$D(\'startdate1\')}' })" />
						</li>
					</ul>
					<div class="clear"></div>
				</div> <input id="auditType" value="${auditType}" type="hidden" />
				<button class="layui-btn layui-btn-small margin8"
					onclick="query()">查询</button>
				<button class="layui-btn layui-btn-small margin8"
					onclick="screset()">重置</button>
				<div class="clear"></div>
			</li>
		</ul>
	</div>
	<div class="layui-form" lay-filter="test1">
		<table class="layui-table" id="table"></table>
	</div>
	<!-- 分页插件 -->
	<!-- <div id="paging"></div> -->
	<script type="text/javascript"
		src="${ctx}/static/js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="${ctx}/static/layui/layui.js"></script>
	<script type="text/javascript"
		src="${ctx}/static/layui/lay/modules/form.js"></script>
	<script type="text/javascript"
		src="${ctx}/static/layui/lay/modules/laypage.js"></script>
	<script type="text/javascript"
		src="${ctx}/static/layui/lay/modules/layer.js"></script>
	<script type="text/javascript" src="${ctx}/static/js/index.js"></script>
	<script type="text/javascript" src="${ctx}/static/js/include.js"></script>
	<script type="text/javascript" src="${ctx}/static/js/order.js"></script>
	<script language="javascript" type="text/javascript"
		src="${ctx}/static/datepicker/WdatePicker.js"></script>
	<script type='text/javascript'
	src="${ctx}/static/js/Validform_v5.3.2_min.js"></script>
</body>
</html>