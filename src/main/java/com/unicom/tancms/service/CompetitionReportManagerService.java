package com.unicom.tancms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.druid.util.StringUtils;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.unicom.tancms.dao.CompetitionReportManagerDao;
import com.unicom.tancms.pojo.CompetitorReportManage;
import com.unicom.tancms.pojo.CompetitorReportManageExample;
import com.unicom.tancms.pojo.CompetitorReportManageExample.Criteria;
import com.unicom.tools.PageResult;
import com.unicom.tools.UUIDGenerator;

@Service
public class CompetitionReportManagerService {
	
	@Autowired
	private CompetitionReportManagerDao competitionReportManagerDao;
	
	public PageResult findCompetitionReportManagerAll(CompetitorReportManage competitorReportManage, int page,
			int rows) {
		PageHelper.startPage(page, rows);

		CompetitorReportManageExample example = new CompetitorReportManageExample();
		example.setOrderByClause("CLASS_UPDATE_TIME desc");
		Criteria criteria = example.createCriteria();

		if (competitorReportManage != null) {
			if (!StringUtils.isEmpty(competitorReportManage.getCpaReportName())) {
				criteria.andCpaReportNameLike("%" + competitorReportManage.getCpaReportName() + "%");
			}
			
				criteria.andCpaCreateTimeBetween(competitorReportManage.getCpaStartTime(), competitorReportManage.getCpaEndTime());
			
			if(!StringUtils.isEmpty(competitorReportManage.getCpaAnalyzStatus())){
				criteria.andCpaAnalyzStatusEqualTo(competitorReportManage.getCpaAnalyzStatus());
			}

		}
		criteria.andIsUseEqualTo("1");

		Page<CompetitorReportManage> pages = (Page<CompetitorReportManage>) competitionReportManagerDao.selectByExample(example);
		return new PageResult(pages.getTotal(), pages.getResult());
	}

	public void saveCompetitionReportManager(CompetitorReportManage competitorReportManage) {
		competitorReportManage.setCpaReportId(UUIDGenerator.getUUID());
		competitionReportManagerDao.saveCompetitionReportManager(competitorReportManage);
	}

	public void deleteCompetitionReportManagerById(String cpaReportId) {
		CompetitorReportManage reportManage = competitionReportManagerDao.findCompetitorReportManageById(cpaReportId);
		reportManage.setIsUse("0");
		competitionReportManagerDao.updateCompetitionReportManager(reportManage);
	}

	public void updateCompetitionReportManager(CompetitorReportManage competitorReportManage) {
		competitionReportManagerDao.updateCompetitionReportManager(competitorReportManage);
	}

	public CompetitorReportManage findCompetitorReportManageById(String cpaReportId) {
		
		return competitionReportManagerDao.findCompetitorReportManageById(cpaReportId);
	}

}
