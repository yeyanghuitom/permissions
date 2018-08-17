package com.unicom.tancms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unicom.tancms.dao.CompetitionReportManagerDao;
import com.unicom.tancms.dao.CompetitionTableDao;
import com.unicom.tancms.pojo.CompetitionTable;
import com.unicom.tancms.pojo.CompetitionTableExample;
import com.unicom.tools.UUIDGenerator;

@Service
public class CompetitionTableService {
	
	@Autowired
	private CompetitionTableDao competitionTableDao;
	
	public List<CompetitionTable> findCompetitionTableById(String cpaReportId) {
		CompetitionTableExample example = new CompetitionTableExample();
		example.createCriteria().andCpaReportIdEqualTo(cpaReportId);
		example.createCriteria().andIsDeleteEqualTo("1");
		return competitionTableDao.findCompetitionTableById(example);
		
	}

	public void deleteCompetitionTableServiceById(String cpaReportId) {
		CompetitionTableExample example = new CompetitionTableExample();
		example.createCriteria().andCpaReportIdEqualTo(cpaReportId);
		List<CompetitionTable> tableList = competitionTableDao.findCompetitionTableById(example);
		for (CompetitionTable competitionTable : tableList) {
			competitionTable.setIsDelete("0");
			competitionTableDao.updateCompetitionTable(competitionTable);
		}
	}

	public void saveCompetitionTable(List<CompetitionTable> competitionTableList) {
		for (CompetitionTable competitionTable : competitionTableList) {
			if(null == competitionTable.getCpaId()){
				competitionTable.setCpaId(UUIDGenerator.getUUID());
			}
			competitionTableDao.saveCompetitionTable(competitionTable);
		}
	}

	

	
}
