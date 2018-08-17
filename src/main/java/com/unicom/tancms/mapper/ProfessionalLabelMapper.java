package com.unicom.tancms.mapper;

import com.unicom.tancms.pojo.ProfessionalLabel;
import com.unicom.tancms.pojo.ProfessionalLabelExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface ProfessionalLabelMapper {
    int countByExample(ProfessionalLabelExample example);

    int deleteByExample(ProfessionalLabelExample example);

    int deleteByPrimaryKey(String label1Id);

    int insert(ProfessionalLabel record);

    int insertSelective(ProfessionalLabel record);

    List<ProfessionalLabel> selectByExample(ProfessionalLabelExample example);

    ProfessionalLabel selectByPrimaryKey(String label1Id);

    int updateByExampleSelective(@Param("record") ProfessionalLabel record, @Param("example") ProfessionalLabelExample example);

    int updateByExample(@Param("record") ProfessionalLabel record, @Param("example") ProfessionalLabelExample example);

    int updateByPrimaryKeySelective(ProfessionalLabel record);

    int updateByPrimaryKey(ProfessionalLabel record);
}