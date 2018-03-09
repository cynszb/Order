package com.order.model;

import java.io.Serializable;

public class Page implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer curPage;
	private Integer maxPage;
	private int totalRecord;
	private int pageCount;
	private int filterRecord;
	private boolean needPading;

	public Page() {
		this.curPage = Integer.valueOf(1);
		this.pageCount = 10;
		this.needPading = true;
	}

	public Integer getCurPage() {
		return this.curPage;
	}

	public void setCurPage(Integer curPage) {
		if (curPage.intValue() < 1) {
			this.curPage = Integer.valueOf(1);
		} else if ((this.maxPage != null) && (this.maxPage.intValue() < curPage.intValue())) {
			this.curPage = this.maxPage;
		} else {
			this.curPage = curPage;
		}
		if (this.maxPage != null) {
			this.filterRecord = ((this.curPage.intValue() - 1) * this.pageCount);
		}
	}

	public Integer getMaxPage() {
		return this.maxPage;
	}

	public void setMaxPage(Integer maxPage) {
		if (maxPage.intValue() > 0) {
			this.maxPage = maxPage;
		} else {
			this.maxPage = Integer.valueOf(1);
		}
		if (this.curPage != null) {
			this.filterRecord = ((this.curPage.intValue() - 1) * this.pageCount);
		}
		this.needPading = false;
	}

	public Integer getTotalRecord() {
		return Integer.valueOf(this.totalRecord);
	}

	public void setTotalRecord(Integer totalRecord) {
		this.totalRecord = totalRecord.intValue();
		setMaxPage(Integer.valueOf((totalRecord.intValue() - 1) / this.pageCount + 1));
		if ((this.curPage != null) && (this.maxPage != null)) {
			this.filterRecord = ((this.curPage.intValue() - 1) * this.pageCount);
		}
	}

	public Integer getPageCount() {
		return Integer.valueOf(this.pageCount);
	}

	public void setPageCount(Integer pageCount) {
		this.pageCount = pageCount.intValue();
	}

	public Integer getFilterRecord() {
		return Integer.valueOf(this.filterRecord);
	}

	public void setNeedPading(boolean needPading) {
		this.needPading = needPading;
	}

	public boolean needQueryPading() {
		return this.needPading;
	}
}
