package com.unicom.tancms.mapper;

import com.unicom.tancms.pojo.ActionLog;
import com.unicom.tancms.pojo.ActionLogExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface ActionLogMapper {
    int countByExample(ActionLogExample example);

    int deleteByExample(ActionLogExample example);

    int deleteByPrimaryKey(Long logId);

    int insert(ActionLog record);

    int insertSelective(ActionLog record);

    List<ActionLog> selectByExample(ActionLogExample example);

    ActionLog selectByPrimaryKey(Long logId);

    int updateByExampleSelective(@Param("record") ActionLog record, @Param("example") ActionLogExample example);

    int updateByExample(@Param("record") ActionLog record, @Param("example") ActionLogExample example);

    int updateByPrimaryKeySelective(ActionLog record);

    int updateByPrimaryKey(ActionLog record);
}