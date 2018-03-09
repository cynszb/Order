package com.order.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONObject;
import com.order.model.BaseConstants;
import com.order.model.Order;
import com.order.model.Page;
import com.order.service.OrderService;

@Controller
@RequestMapping("/order")
public class OrderController {
	@Resource
	private OrderService orderService;
	
	/**
	 * 跳转到订单页面
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */

	@RequestMapping(value = "/loadOrder", method = { RequestMethod.POST, RequestMethod.GET })
	public ModelAndView loadOrder(HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("order");
		//mv.addObject("auditType", 1);		
		return mv;
	}	
	
	/**
	 * 查询订单列表
	 * @param request
	 * @param response
	 * @param psas
	 * @param page
	 * @throws Exception
	 */

	@RequestMapping(value = "/queryOrder", method = { RequestMethod.POST, RequestMethod.GET })
	public void queryPsas(HttpServletRequest request, HttpServletResponse response, Order order,Page page) throws Exception {
		List<Order> list = null;
		JSONObject jsonObject = new JSONObject();
		String msg = "";
		String code="";
		try {
			list = this.orderService.queryOrder(order,page);
			if (list.size() > 0) {
				code=BaseConstants.SCUUESS;
				msg = "查询成功";
			} else {
				code=BaseConstants.NULL;
				msg = "空数据";
			}
		} catch (Exception e) {
			e.printStackTrace();	
			code=BaseConstants.FAIL;
			msg = "查询数据失败";
		}
		jsonObject.put("code", code);
		jsonObject.put("msg", msg);
		jsonObject.put("list", list);
		jsonObject.put("rcount", page.getTotalRecord());		
		//responseSendMsg(response, jsonObject.toString());
		response.getWriter().print(jsonObject.toString());
	}
	
	/**
	 * @Desc 添加数据
	 * @param request
	 * @param response
	 * @param role
	 * @throws Exception
	 *             void
	 */
	@RequestMapping(value = "/insert", method = { RequestMethod.POST, RequestMethod.GET })
	public void insert(HttpServletRequest request, HttpServletResponse response, Order order) throws Exception {
		JSONObject jsonObject = new JSONObject();		
		String code = "";
		String msg = "";	
		try {			
			orderService.insertOrder(order);
			code = BaseConstants.SCUUESS;
		} catch (Exception e) {
			e.printStackTrace();
			code = BaseConstants.FAIL;
			msg = "添加数据失败";
		}
		jsonObject.put("code", code);
		jsonObject.put("msg", msg);
		response.getWriter().print(jsonObject.toString());
	}
	
}
