package com.unicom.tancms.mapper;

import com.unicom.tancms.pojo.UnifiedCoding;
import com.unicom.tancms.pojo.UnifiedCodingExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface UnifiedCodingMapper {
    int countByExample(UnifiedCodingExample example);

    int deleteByExample(UnifiedCodingExample example);

    int insert(UnifiedCoding record);

    int insertSelective(UnifiedCoding record);

    List<UnifiedCoding> selectByExample(UnifiedCodingExample example);

    int updateByExampleSelective(@Param("record") UnifiedCoding record, @Param("example") UnifiedCodingExample example);

    int updateByExample(@Param("record") UnifiedCoding record, @Param("example") UnifiedCodingExample example);
}