package com.unicom.tancms.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.unicom.tancms.mapper.MarketingEffectAssessMapper;
import com.unicom.tancms.pojo.MarketingEffectAssess;
import com.unicom.tancms.pojo.MarketingEffectAssessExample;
import com.unicom.tancms.pojo.MonitoringScheme;

@Repository
public class MarketingEffectAssessDao {
	
	@Autowired
	private MarketingEffectAssessMapper mapper;
	
	public List<MarketingEffectAssess> selectByExample(MarketingEffectAssessExample example) {
		return mapper.selectByExample(example);
	}

	public MarketingEffectAssess findMarketingEffectAssessById(String mesActivityId) {
		return mapper.selectByPrimaryKey(mesActivityId);
	}

	public void updateMarketingEffectAssessManager(MarketingEffectAssess marketingEffectAssess) {
		mapper.updateByPrimaryKey(marketingEffectAssess);
	}

	public void saveMarketingEffectAssessManager(MarketingEffectAssess marketingEffectAssess) {
		mapper.insert(marketingEffectAssess);
	}

	
}
