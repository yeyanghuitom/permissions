package com.unicom.tools;

import java.io.Serializable;
import java.util.List;

public class PageResult implements Serializable{

	public PageResult(long total, List rows) {
		super();
		this.total = total;
		this.rows = rows;
	}
	private long total;
	private List rows;
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public List getRows() {
		return rows;
	}
	public void setRows(List rows) {
		this.rows = rows;
	}
}
