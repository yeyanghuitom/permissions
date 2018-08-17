package com.unicom.tancms.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.unicom.tancms.pojo.MonitoringScheme;
import com.unicom.tancms.pojo.MonitoringSchemeExample;
@Mapper
public interface MonitoringSchemeMapper {
    int countByExample(MonitoringSchemeExample example);

    int deleteByExample(MonitoringSchemeExample example);

    int deleteByPrimaryKey(String planId);

    int insert(MonitoringScheme record);

    int insertSelective(MonitoringScheme record);

    List<MonitoringScheme> selectByExample(MonitoringSchemeExample example);

    MonitoringScheme selectByPrimaryKey(String planId);

    int updateByExampleSelective(@Param("record") MonitoringScheme record, @Param("example") MonitoringSchemeExample example);

    int updateByExample(@Param("record") MonitoringScheme record, @Param("example") MonitoringSchemeExample example);

    int updateByPrimaryKeySelective(MonitoringScheme record);

    int updateByPrimaryKey(MonitoringScheme record);
}