package com.order.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.order.mapper.OrderMapper;
import com.order.model.Order;
import com.order.model.Page;
import com.order.service.OrderService;

@Service("orderService")
public class OrderServiceImpl implements OrderService {

	@Resource
	private OrderMapper orderMapper;
	
	public List<Order> queryOrder(Order order,Page page) {
		if (page.needQueryPading()) {
			page.setTotalRecord(orderMapper.countOrder(order));
		}
		order.setBeginRow(page.getFilterRecord());
		order.setPageSize(page.getPageCount());		
		return orderMapper.queryOrder(order);
	
	}

	public void insertOrder(Order order) {
		orderMapper.insertOrder(order);		
	}

}
