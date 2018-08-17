package com.unicom.tancms.mapper;

import com.unicom.tancms.pojo.ActionLog;
import com.unicom.tancms.pojo.ActionLogExample;
import com.unicom.tancms.pojo.MarketingEffectAssess;
import com.unicom.tancms.pojo.MarketingEffectAssessExample;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface MarketingEffectAssessMapper {
    int countByExample(MarketingEffectAssessExample example);

    int deleteByExample(MarketingEffectAssessExample example);

    int deleteByPrimaryKey(String mesActivityId);

    int insert(MarketingEffectAssess record);

    int insertSelective(MarketingEffectAssess record);

    List<MarketingEffectAssess> selectByExample(MarketingEffectAssessExample example);

    MarketingEffectAssess selectByPrimaryKey(String mesActivityId);

    int updateByExampleSelective(@Param("record") MarketingEffectAssess record, @Param("example") MarketingEffectAssessExample example);

    int updateByExample(@Param("record") MarketingEffectAssess record, @Param("example") MarketingEffectAssessExample example);

    int updateByPrimaryKeySelective(MarketingEffectAssess record);

    int updateByPrimaryKey(MarketingEffectAssess record);
}