package com.unicom.tancms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unicom.tancms.dao.MonitoringSchemeDao;
import com.unicom.tancms.pojo.MonitoringScheme;
import com.unicom.tancms.pojo.MonitoringSchemeExample;
import com.unicom.tools.UUIDGenerator;
@Service
public class MonitorSchemeService {
	
	@Autowired
	private MonitoringSchemeDao monitoringSchemeDao;
	
	public List<MonitoringScheme> findMonitorSchemeAll(String id) {
		MonitoringSchemeExample example = new MonitoringSchemeExample();
		example.createCriteria().andPlanClassIdEqualTo(id);
		example.createCriteria().andStatusEqualTo("1");
		example.setOrderByClause("CLASS_UPDATE_TIME desc");
		return monitoringSchemeDao.findMonitorScheme(example);
	}

	public List<MonitoringScheme> findMonitorSchemeByName(String planName) {
		MonitoringSchemeExample example = new MonitoringSchemeExample();
		example.createCriteria().andPlanNameLike("%" + planName + "%");
		example.createCriteria().andStatusEqualTo("1");
		return monitoringSchemeDao.findMonitorScheme(example);
	}

	public void saveMonitorScheme(MonitoringScheme monitorScheme) {
		monitorScheme.setPlanId(UUIDGenerator.getUUID());
		monitoringSchemeDao.saveMonitorScheme(monitorScheme);
	}

	public void deleteMonitorScheme(MonitoringScheme monitorScheme) {
		monitorScheme.setStatus("0");
		monitoringSchemeDao.deleteMonitorScheme(monitorScheme);
	}

	public void updateMonitorScheme(MonitoringScheme monitorScheme) {
		monitoringSchemeDao.updateMonitorScheme(monitorScheme);
	}

	public MonitoringScheme findMonitorSchemeById(String planId) {
		return monitoringSchemeDao.findfindMonitorSchemeById(planId);
	}

	public void deleteMonitorSchemeById(String planClassId) {
		MonitoringSchemeExample example = new MonitoringSchemeExample();
		example.createCriteria().andPlanClassIdEqualTo(planClassId);
		List<MonitoringScheme> lists = monitoringSchemeDao.findMonitorScheme(example);
		for (MonitoringScheme monitoringScheme : lists) {
			monitoringScheme.setStatus("0");
			monitoringSchemeDao.updateMonitorScheme(monitoringScheme);
		}
	}

}
