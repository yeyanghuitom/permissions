package com.unicom.tancms.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.unicom.tancms.mapper.CompetitionTableMapper;
import com.unicom.tancms.pojo.CompetitionTable;
import com.unicom.tancms.pojo.CompetitionTableExample;

@Repository
public class CompetitionTableDao {
	
	@Autowired
	private CompetitionTableMapper mapper;

	public List<CompetitionTable> findCompetitionTableById(CompetitionTableExample example) {
		return mapper.selectByExample(example);
	}


	public void updateCompetitionTable(CompetitionTable competitionTable) {
		mapper.updateByPrimaryKey(competitionTable);
	}


	public void saveCompetitionTable(CompetitionTable competitionTable) {
		mapper.insert(competitionTable);		
	}
}
