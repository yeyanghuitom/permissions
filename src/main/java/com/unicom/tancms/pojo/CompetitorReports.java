package com.unicom.tancms.pojo;

import java.io.Serializable;
import java.util.List;

public class CompetitorReports implements Serializable{
	
	private CompetitorReportManage competitorReportManage;
	
	private List<CompetitionTable> competitionTableList;

	public CompetitorReportManage getCompetitorReportManage() {
		return competitorReportManage;
	}

	public void setCompetitorReportManage(CompetitorReportManage competitorReportManage) {
		this.competitorReportManage = competitorReportManage;
	}

	public List<CompetitionTable> getCompetitionTableList() {
		return competitionTableList;
	}

	public void setCompetitionTableList(List<CompetitionTable> competitionTableList) {
		this.competitionTableList = competitionTableList;
	}
}
