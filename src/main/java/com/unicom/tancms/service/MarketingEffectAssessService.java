package com.unicom.tancms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.druid.util.StringUtils;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.unicom.tancms.dao.MarketingEffectAssessDao;
import com.unicom.tancms.pojo.CompetitorReportManage;
import com.unicom.tancms.pojo.CompetitorReportManageExample;
import com.unicom.tancms.pojo.MarketingEffectAssess;
import com.unicom.tancms.pojo.MarketingEffectAssessExample;
import com.unicom.tancms.pojo.MarketingEffectAssessExample.Criteria;
import com.unicom.tancms.pojo.MonitoringScheme;
import com.unicom.tools.PageResult;

@Service
public class MarketingEffectAssessService {
	
	@Autowired
	private MarketingEffectAssessDao marketingEffectAssessDao;

	public PageResult findMarketingEffectAssessAll(MarketingEffectAssess marketingEffectAssess, int page, int rows) {
		PageHelper.startPage(page, rows);

		MarketingEffectAssessExample example = new MarketingEffectAssessExample();
		example.setOrderByClause("MES_CREATE_TIME desc");
		Criteria criteria = example.createCriteria();

		if (marketingEffectAssess != null) {
			if (!StringUtils.isEmpty(marketingEffectAssess.getMesActivityName())) {
				criteria.andMesActivityNameLike("%" + marketingEffectAssess.getMesActivityName() + "%");
			}
			
				criteria.andMesCreateTimeBetween(marketingEffectAssess.getMesStartTime(), marketingEffectAssess.getMesEndTime());
			
			if(!StringUtils.isEmpty(marketingEffectAssess.getMesAnalyzStatus())){
				criteria.andMesAnalyzStatusEqualTo(marketingEffectAssess.getMesAnalyzStatus());
			}

		}
		criteria.andIsDeleteEqualTo("1");

		Page<MarketingEffectAssess> pages = (Page<MarketingEffectAssess>) marketingEffectAssessDao.selectByExample(example);
		return new PageResult(pages.getTotal(), pages.getResult());
	}

	public void deleteMarketingEffectAssessById(String mesActivityId) {
		MarketingEffectAssess marketingEffectAssess = marketingEffectAssessDao.findMarketingEffectAssessById(mesActivityId);
		marketingEffectAssess.setIsDelete("0");
		marketingEffectAssessDao.updateMarketingEffectAssessManager(marketingEffectAssess);
	}

	public void saveMarketingEffectAssessManager(MarketingEffectAssess marketingEffectAssess) {
		marketingEffectAssessDao.saveMarketingEffectAssessManager(marketingEffectAssess);
	}

	public void updateMarketingEffectAssessManager(MarketingEffectAssess marketingEffectAssess) {
		marketingEffectAssessDao.updateMarketingEffectAssessManager(marketingEffectAssess);
	}

	public MarketingEffectAssess findMarketingEffectAssessById(String mesActivityId) {
		return marketingEffectAssessDao.findMarketingEffectAssessById(mesActivityId);
	}
	
	
}
