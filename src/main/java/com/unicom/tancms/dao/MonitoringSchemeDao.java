package com.unicom.tancms.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.unicom.tancms.mapper.MonitoringSchemeMapper;
import com.unicom.tancms.pojo.MonitoringScheme;
import com.unicom.tancms.pojo.MonitoringSchemeExample;
@Repository
public class MonitoringSchemeDao {
	
	@Autowired
	private MonitoringSchemeMapper mapper;
	
	public List<MonitoringScheme> findMonitorScheme(MonitoringSchemeExample example) {
		return mapper.selectByExample(example);
	}

	public void saveMonitorScheme(MonitoringScheme monitorScheme) {
		mapper.insert(monitorScheme);
	}

	public void deleteMonitorScheme(MonitoringScheme monitorScheme) {
		mapper.updateByPrimaryKey(monitorScheme);
	}

	public void updateMonitorScheme(MonitoringScheme monitorScheme) {
		mapper.updateByPrimaryKey(monitorScheme);
	}

	public MonitoringScheme findfindMonitorSchemeById(String planId) {
		return mapper.selectByPrimaryKey(planId);
	}

	
	

}
