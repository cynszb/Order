package com.order.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.order.model.Order;

@Component("orderMapper")
public interface OrderMapper {    
	public List<Order> queryOrder(Order order);
	
	public Integer countOrder(Order order);
	
	public void insertOrder(Order order);
}