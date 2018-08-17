package com.unicom.tancms.mapper;

import com.unicom.tancms.pojo.MonitoringSchemeClassify;
import com.unicom.tancms.pojo.MonitoringSchemeClassifyExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface MonitoringSchemeClassifyMapper {
    int countByExample(MonitoringSchemeClassifyExample example);

    int deleteByExample(MonitoringSchemeClassifyExample example);

    int deleteByPrimaryKey(String planClassId);

    int insert(MonitoringSchemeClassify record);

    int insertSelective(MonitoringSchemeClassify record);

    List<MonitoringSchemeClassify> selectByExample(MonitoringSchemeClassifyExample example);

    MonitoringSchemeClassify selectByPrimaryKey(String planClassId);

    int updateByExampleSelective(@Param("record") MonitoringSchemeClassify record, @Param("example") MonitoringSchemeClassifyExample example);

    int updateByExample(@Param("record") MonitoringSchemeClassify record, @Param("example") MonitoringSchemeClassifyExample example);

    int updateByPrimaryKeySelective(MonitoringSchemeClassify record);

    int updateByPrimaryKey(MonitoringSchemeClassify record);
}