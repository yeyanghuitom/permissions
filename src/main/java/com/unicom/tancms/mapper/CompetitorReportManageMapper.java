package com.unicom.tancms.mapper;

import com.unicom.tancms.pojo.CompetitorReportManage;
import com.unicom.tancms.pojo.CompetitorReportManageExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface CompetitorReportManageMapper {
    int countByExample(CompetitorReportManageExample example);

    int deleteByExample(CompetitorReportManageExample example);

    int deleteByPrimaryKey(String cpaReportId);

    int insert(CompetitorReportManage record);

    int insertSelective(CompetitorReportManage record);

    List<CompetitorReportManage> selectByExample(CompetitorReportManageExample example);

    CompetitorReportManage selectByPrimaryKey(String cpaReportId);

    int updateByExampleSelective(@Param("record") CompetitorReportManage record, @Param("example") CompetitorReportManageExample example);

    int updateByExample(@Param("record") CompetitorReportManage record, @Param("example") CompetitorReportManageExample example);

    int updateByPrimaryKeySelective(CompetitorReportManage record);

    int updateByPrimaryKey(CompetitorReportManage record);
}