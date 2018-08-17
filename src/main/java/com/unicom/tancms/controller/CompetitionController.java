package com.unicom.tancms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unicom.tancms.pojo.CompetitionTable;
import com.unicom.tancms.pojo.CompetitorReportManage;
import com.unicom.tancms.pojo.CompetitorReports;
import com.unicom.tancms.pojo.Result;
import com.unicom.tancms.service.CompetitionReportManagerService;
import com.unicom.tancms.service.CompetitionTableService;
import com.unicom.tools.PageResult;
/***
 * 竞品
 * @author Tom-Ye
 *
 */
@RestController
@RequestMapping("/competition")
public class CompetitionController {
	
	@Autowired
	private CompetitionReportManagerService competitionReportManagerService;

	@Autowired
	private CompetitionTableService competitionTableService;
	
	/**
	 * 分页显示竞品报告（有条件加条件，默认全部显示）
	 * */
	@RequestMapping("/findCompetitionReportManagerAll")		   
	public PageResult findCompetitionReportManagerAll(@RequestBody CompetitorReportManage competitorReportManage, int page, int rows){
		return competitionReportManagerService.findCompetitionReportManagerAll(competitorReportManage,page,rows);
		
	}
	
	/**
	 * 添加竞品报告
	 * */
	@RequestMapping("/saveCompetitionReportManager")
	public Result saveCompetitionReportManager(@RequestBody CompetitorReports competitorReports){
		try{
			
			competitionReportManagerService.saveCompetitionReportManager(competitorReports.getCompetitorReportManage());
			competitionTableService.saveCompetitionTable(competitorReports.getCompetitionTableList());
			return new Result(true,"添加成功!");
		}catch(Exception e){
			e.printStackTrace();
			return new Result(false,"添加失败!");
		}
	}
	
	/**
	 * 删除竞品报告
	 * */
	@RequestMapping("/deleteCompetitionReportManagerById")
	public Result deleteCompetitionReportManagerById(String cpaReportId){
		try{
			competitionReportManagerService.deleteCompetitionReportManagerById(cpaReportId);
			competitionTableService.deleteCompetitionTableServiceById(cpaReportId);
			return new Result(true,"删除成功!");
		}catch(Exception e){	
			e.printStackTrace();
			return new Result(false,"删除失败!");
		}
	}
	
	/**
	 * 修改竞品报告
	 * */
	@RequestMapping("/updateCompetitorReportManage")
	public Result updateCompetitionReportManager(@RequestBody CompetitorReports competitorReports){
		try{
			competitionReportManagerService.updateCompetitionReportManager(competitorReports.getCompetitorReportManage());
			competitionTableService.saveCompetitionTable(competitorReports.getCompetitionTableList());
			return new Result(true,"修改成功!");
		}catch(Exception e){
			e.printStackTrace();
			return new Result(false,"修改失败!");
		}
	}
	
	/**
	 * 根据ID查询竞品报告和竞品表
	 * */
	@RequestMapping("/findCompetitorReportManageById")
	public CompetitorReports findCompetitorReportManageById(String cpaReportId){
		CompetitorReportManage competitorReportManage = competitionReportManagerService.findCompetitorReportManageById(cpaReportId);
		List<CompetitionTable> lists = competitionTableService.findCompetitionTableById(cpaReportId);
		CompetitorReports competitorReports = new CompetitorReports();
		competitorReports.setCompetitorReportManage(competitorReportManage);
		competitorReports.setCompetitionTableList(lists);
		return competitorReports;
	}
	
}
