package com.order.service;

import java.util.List;

import com.order.model.Order;
import com.order.model.Page;

public interface OrderService {
	List<Order> queryOrder(Order order,Page page);
	
	void insertOrder(Order order);
}
