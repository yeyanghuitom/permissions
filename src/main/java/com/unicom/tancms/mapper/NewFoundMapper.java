package com.unicom.tancms.mapper;

import com.unicom.tancms.pojo.NewFound;
import com.unicom.tancms.pojo.NewFoundExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface NewFoundMapper {
    int countByExample(NewFoundExample example);

    int deleteByExample(NewFoundExample example);

    int deleteByPrimaryKey(String wordsClassId);

    int insert(NewFound record);

    int insertSelective(NewFound record);

    List<NewFound> selectByExampleWithBLOBs(NewFoundExample example);

    List<NewFound> selectByExample(NewFoundExample example);

    NewFound selectByPrimaryKey(String wordsClassId);

    int updateByExampleSelective(@Param("record") NewFound record, @Param("example") NewFoundExample example);

    int updateByExampleWithBLOBs(@Param("record") NewFound record, @Param("example") NewFoundExample example);

    int updateByExample(@Param("record") NewFound record, @Param("example") NewFoundExample example);

    int updateByPrimaryKeySelective(NewFound record);

    int updateByPrimaryKeyWithBLOBs(NewFound record);

    int updateByPrimaryKey(NewFound record);
}