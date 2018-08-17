package com.unicom.tancms.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.unicom.tancms.mapper.MonitoringSchemeClassifyMapper;
import com.unicom.tancms.pojo.MonitoringSchemeClassify;
import com.unicom.tancms.pojo.MonitoringSchemeClassifyExample;
@Repository
public class MonitorClassifyServiceDao {
	
	@Autowired
	private MonitoringSchemeClassifyMapper mapper;
	
	public List<MonitoringSchemeClassify> findMonitorClassifyServiceAll(MonitoringSchemeClassifyExample example) {
		return mapper.selectByExample(example);
	}

	public void saveMonitorClassify(MonitoringSchemeClassify monitoringSchemeClassify) {
		mapper.insert(monitoringSchemeClassify);
	}

	public void updateMonitorClassify(MonitoringSchemeClassify monitoringSchemeClassify) {
		mapper.updateByPrimaryKey(monitoringSchemeClassify);
	}

	public void deleteMonitorClassify(String planClassId) {
		mapper.deleteByPrimaryKey(planClassId);		
	}

	public MonitoringSchemeClassify findMonitorClassifyService(String planClassId) {
		return mapper.selectByPrimaryKey(planClassId);
	}

}
