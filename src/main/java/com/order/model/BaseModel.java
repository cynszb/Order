package com.order.model;

import java.io.Serializable;

public class BaseModel implements Serializable {
	private Integer beginRow;
	private Integer pageSize;
	private Integer flagPage;
	private String beginTime;
	private String endTime;
	private String createTime;
	/*private Long createBy;
	private String updateTime;
	private Long updateBy;
	private Integer valid;
	private Long version;*/
	

	public Integer getBeginRow() {
		return this.beginRow;
	}

	public void setBeginRow(Integer beginRow) {
		this.beginRow = beginRow;
	}

	public Integer getPageSize() {
		return this.pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public Integer getFlagPage() {
		return this.flagPage;
	}

	public void setFlagPage(Integer flagPage) {
		this.flagPage = flagPage;
	}	

	public String getBeginTime() {
		return this.beginTime;
	}

	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}

	public String getEndTime() {
		return this.endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	
	
}
