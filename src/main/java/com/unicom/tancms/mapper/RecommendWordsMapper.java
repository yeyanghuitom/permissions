package com.unicom.tancms.mapper;

import com.unicom.tancms.pojo.RecommendWords;
import com.unicom.tancms.pojo.RecommendWordsExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface RecommendWordsMapper {
    int countByExample(RecommendWordsExample example);

    int deleteByExample(RecommendWordsExample example);

    int deleteByPrimaryKey(String wordsClassId);

    int insert(RecommendWords record);

    int insertSelective(RecommendWords record);

    List<RecommendWords> selectByExampleWithBLOBs(RecommendWordsExample example);

    List<RecommendWords> selectByExample(RecommendWordsExample example);

    RecommendWords selectByPrimaryKey(String wordsClassId);

    int updateByExampleSelective(@Param("record") RecommendWords record, @Param("example") RecommendWordsExample example);

    int updateByExampleWithBLOBs(@Param("record") RecommendWords record, @Param("example") RecommendWordsExample example);

    int updateByExample(@Param("record") RecommendWords record, @Param("example") RecommendWordsExample example);

    int updateByPrimaryKeySelective(RecommendWords record);

    int updateByPrimaryKeyWithBLOBs(RecommendWords record);

    int updateByPrimaryKey(RecommendWords record);
}