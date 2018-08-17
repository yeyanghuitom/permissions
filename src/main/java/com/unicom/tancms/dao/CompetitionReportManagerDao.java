package com.unicom.tancms.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.github.pagehelper.Page;
import com.unicom.tancms.mapper.CompetitorReportManageMapper;
import com.unicom.tancms.mapper.MonitoringSchemeClassifyMapper;
import com.unicom.tancms.pojo.CompetitorReportManage;
import com.unicom.tancms.pojo.CompetitorReportManageExample;

@Repository
public class CompetitionReportManagerDao {
	
	@Autowired
	private CompetitorReportManageMapper mapper;

	public  List<CompetitorReportManage> selectByExample(CompetitorReportManageExample example) {
		return mapper.selectByExample(example);
	}

	public void saveCompetitionReportManager(CompetitorReportManage competitorReportManage) {
		mapper.insert(competitorReportManage);
	}

	public void deleteCompetitionReportManagerById(String cpaReportId) {
		mapper.deleteByPrimaryKey(cpaReportId);
	}

	public void updateCompetitionReportManager(CompetitorReportManage competitorReportManage) {
		mapper.updateByExample(competitorReportManage, null);
	}

	public CompetitorReportManage findCompetitorReportManageById(String cpaReportId) {
		return mapper.selectByPrimaryKey(cpaReportId);
	}
	
	
}
