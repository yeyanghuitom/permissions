package com.unicom.tancms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unicom.tancms.pojo.CompetitorReportManage;
import com.unicom.tancms.pojo.CompetitorReports;
import com.unicom.tancms.pojo.MarketingEffectAssess;
import com.unicom.tancms.pojo.MonitoringScheme;
import com.unicom.tancms.pojo.Result;
import com.unicom.tancms.service.MarketingEffectAssessService;
import com.unicom.tools.PageResult;
/***
 * 营销报告
 * @author Tom-Ye
 *
 */
@RestController
@RequestMapping("/marketing")
public class MarketingController {
	
	@Autowired
	private MarketingEffectAssessService marketingEffectAssessService;
	
	
	/**
	 * 分页查询全部营销报告（默认无条件，有条件加条件）
	 * */
	@RequestMapping("/findMarketingEffectAssessAll")		   
	public PageResult findMarketingEffectAssessAll(@RequestBody MarketingEffectAssess marketingEffectAssess, int page, int rows){
		return marketingEffectAssessService.findMarketingEffectAssessAll(marketingEffectAssess,page,rows);
		
	}
	
	/**
	 * 删除营销报告
	 * */
	@RequestMapping("/deleteMarketingEffectAssessById")
	public Result deleteMarketingEffectAssessById(String mesActivityId){
		try{
			marketingEffectAssessService.deleteMarketingEffectAssessById(mesActivityId);
			return new Result(true,"删除成功!");
		}catch(Exception e){	
			e.printStackTrace();
			return new Result(false,"删除失败!");
		}
	}
	
	
	/**
	 * 添加营销报告
	 * */
	@RequestMapping("/saveCompetitionReportManager")
	public Result saveMarketingEffectAssess(@RequestBody MarketingEffectAssess marketingEffectAssess){
		try{
			
			marketingEffectAssessService.saveMarketingEffectAssessManager(marketingEffectAssess);
			return new Result(true,"添加成功!");
		}catch(Exception e){
			e.printStackTrace();
			return new Result(false,"添加失败!");
		}
	}
	
	/**
	 * 修改营销报告
	 * */
	@RequestMapping("/updateCompetitorReportManage")
	public Result updateMarketingEffectAssess(@RequestBody MarketingEffectAssess marketingEffectAssess){
		try{
			marketingEffectAssessService.updateMarketingEffectAssessManager(marketingEffectAssess);
			return new Result(true,"修改成功!");
		}catch(Exception e){
			e.printStackTrace();
			return new Result(false,"修改失败!");
		}
	}
	
	/**
	 * 根据ID查找报告
	 * */
	@RequestMapping("/findMonitorSchemeById/{mesActivityId}")
	public MarketingEffectAssess findMarketingEffectAssessById(@PathVariable("planId") String mesActivityId){
		MarketingEffectAssess marketingEffectAssess = marketingEffectAssessService.findMarketingEffectAssessById(mesActivityId);
	    return marketingEffectAssess;
	}
}
