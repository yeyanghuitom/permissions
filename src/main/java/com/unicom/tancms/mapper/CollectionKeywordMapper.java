package com.unicom.tancms.mapper;

import com.unicom.tancms.pojo.ActionLog;
import com.unicom.tancms.pojo.ActionLogExample;
import com.unicom.tancms.pojo.CollectionKeyword;
import com.unicom.tancms.pojo.CollectionKeywordExample;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface CollectionKeywordMapper {
    int countByExample(CollectionKeywordExample example);

    int deleteByExample(CollectionKeywordExample example);

    int deleteByPrimaryKey(String keywordCoding);

    int insert(CollectionKeyword record);

    int insertSelective(CollectionKeyword record);

    List<CollectionKeyword> selectByExampleWithBLOBs(CollectionKeywordExample example);

    List<CollectionKeyword> selectByExample(CollectionKeywordExample example);

    CollectionKeyword selectByPrimaryKey(String keywordCoding);

    int updateByExampleSelective(@Param("record") CollectionKeyword record, @Param("example") CollectionKeywordExample example);

    int updateByExampleWithBLOBs(@Param("record") CollectionKeyword record, @Param("example") CollectionKeywordExample example);

    int updateByExample(@Param("record") CollectionKeyword record, @Param("example") CollectionKeywordExample example);

    int updateByPrimaryKeySelective(CollectionKeyword record);

    int updateByPrimaryKeyWithBLOBs(CollectionKeyword record);

    int updateByPrimaryKey(CollectionKeyword record);
}