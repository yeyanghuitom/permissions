package com.unicom.tancms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unicom.tancms.dao.MonitorClassifyServiceDao;
import com.unicom.tancms.pojo.MonitoringSchemeClassify;
import com.unicom.tancms.pojo.MonitoringSchemeClassifyExample;
import com.unicom.tools.UUIDGenerator;
@Service
public class MonitorClassifyService {
	
	@Autowired
	private MonitorClassifyServiceDao monitorClassifyServiceDao;
	
	public List<MonitoringSchemeClassify> findMonitorClassifyServiceAll() {
		MonitoringSchemeClassifyExample example = new MonitoringSchemeClassifyExample();
		example.createCriteria().andStatusEqualTo("1");
		example.setOrderByClause("CLASS_UPDATE_TIME desc");
		return monitorClassifyServiceDao.findMonitorClassifyServiceAll(example);
	}

	public void saveMonitorClassify(MonitoringSchemeClassify monitoringSchemeClassify) {
		monitoringSchemeClassify.setPlanClassId(UUIDGenerator.getUUID());
		monitorClassifyServiceDao.saveMonitorClassify(monitoringSchemeClassify);
	}

	public void updateMonitorClassify(MonitoringSchemeClassify monitoringSchemeClassify) {
		monitorClassifyServiceDao.updateMonitorClassify(monitoringSchemeClassify);
	}

	public void deleteMonitorClassify(String planClassId) {
		MonitoringSchemeClassify monitoringSchemeClassify = monitorClassifyServiceDao.findMonitorClassifyService(planClassId);
		monitoringSchemeClassify.setStatus("0");
		monitorClassifyServiceDao.updateMonitorClassify(monitoringSchemeClassify);
	}

}
