package com.unicom.tancms.mapper;

import com.unicom.tancms.pojo.CompetitionTable;
import com.unicom.tancms.pojo.CompetitionTableExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface CompetitionTableMapper {
    int countByExample(CompetitionTableExample example);

    int deleteByExample(CompetitionTableExample example);

    int deleteByPrimaryKey(String cpaId);

    int insert(CompetitionTable record);

    int insertSelective(CompetitionTable record);

    List<CompetitionTable> selectByExample(CompetitionTableExample example);

    CompetitionTable selectByPrimaryKey(String cpaId);

    int updateByExampleSelective(@Param("record") CompetitionTable record, @Param("example") CompetitionTableExample example);

    int updateByExample(@Param("record") CompetitionTable record, @Param("example") CompetitionTableExample example);

    int updateByPrimaryKeySelective(CompetitionTable record);

    int updateByPrimaryKey(CompetitionTable record);
}