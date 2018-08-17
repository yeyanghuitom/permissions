package com.unicom.tancms.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.unicom.tancms.pojo.MonitoringScheme;
import com.unicom.tancms.pojo.MonitoringSchemeClassify;
import com.unicom.tancms.pojo.Result;
import com.unicom.tancms.service.MonitorClassifyService;
import com.unicom.tancms.service.MonitorSchemeService;
/***
 * 方案
 * @author Tom-Ye
 *
 */
@RestController
@RequestMapping("/monitor")
public class MonitorController {
	
	@Autowired
	private MonitorClassifyService monitorClassifyService;
	
	@Autowired
	private MonitorSchemeService monitoringSchemeService;
	
	/**
	 * 返回所有分类信息按照时间倒序排列
	 * */
	@RequestMapping("/findMonitorClassifyAll")
	public List<MonitoringSchemeClassify> findMonitorClassifyServiceAll(){
		 List<MonitoringSchemeClassify> monAll = monitorClassifyService.findMonitorClassifyServiceAll();
		 return monAll;
		
	}
	
	/**
	 * 根据分类ID返回下属方案信息按照时间倒序排列
	 * */
	@RequestMapping("/findMonitorSchemeByID/{planClassId}")
	public List<MonitoringScheme> findMonitorSchemeById(@PathVariable("planClassId") String id){
		return monitoringSchemeService.findMonitorSchemeAll(id);
		
	}
	
	/**
	 * 根据用户输入的值模糊查询符合条件的方案
	 * */
	@RequestMapping("/findMonitorSchemeByName/{planName}")
	public List<MonitoringScheme> findMonitorSchemeByName(@PathVariable("planName") String planName,Model mv){
	    List<MonitoringScheme> monList = monitoringSchemeService.findMonitorSchemeByName(planName);
	    return monList;
	}
	
	/**
	 * 新增方案分类
	 * */
	@RequestMapping("/saveMonitorClassify")
	public Result saveMonitorClassify(@RequestBody MonitoringSchemeClassify monitoringSchemeClassify){
		try{
			monitorClassifyService.saveMonitorClassify(monitoringSchemeClassify);
			return new Result(true,"保存成功!");
		}catch(Exception e){
			e.printStackTrace();
			return new Result(false,"保存失败!");
		}
	}
	
	/**
	 * 修改方案分类
	 * */
	@RequestMapping("/updateMonitorClassify")
	public Result updateMonitorClassify(@RequestBody MonitoringSchemeClassify monitoringSchemeClassify){
		try{
			monitorClassifyService.updateMonitorClassify(monitoringSchemeClassify);
			return new Result(true,"修改成功!");
		}catch(Exception e){
			e.printStackTrace();
			return new Result(false,"修改失败!");
		}
	}
	
	/**
	 * 删除方案分类
	 * */
	@RequestMapping("/deleteMonitorClassify")
	public Result deleteMonitorClassify(String planClassId){
		try{
			monitorClassifyService.deleteMonitorClassify(planClassId);
			monitoringSchemeService.deleteMonitorSchemeById(planClassId);
			return new Result(true,"删除成功!");
		}catch(Exception e){
			e.printStackTrace();
			return new Result(false,"删除失败!");
		}
	}
	
	/**
	 * 新增方案
	 * */
	@RequestMapping("/saveMonitorScheme")
	public Result saveMonitorScheme(@RequestBody MonitoringScheme monitorScheme){
		try{
			monitoringSchemeService.saveMonitorScheme(monitorScheme);
			return new Result(true,"保存成功!");
		}catch(Exception e){
			e.printStackTrace();
			return new Result(false,"保存失败!");
		}
	}
	
	/**
	 * 删除方案planId
	 * */
	@RequestMapping("/deleteMonitorScheme")
	public Result deleteMonitorScheme(@RequestBody MonitoringScheme monitorScheme){
		try{
			monitoringSchemeService.deleteMonitorScheme(monitorScheme);
			return new Result(true,"删除成功!");
		}catch(Exception e){
			e.printStackTrace();
			return new Result(false,"删除失败!");
		}
	}
	
	/**
	 * 修改方案
	 * */
	@RequestMapping("/updateMonitorScheme")
	public Result updateMonitorScheme(@RequestBody MonitoringScheme monitorScheme){
		try{
			monitoringSchemeService.updateMonitorScheme(monitorScheme);
			return new Result(true,"修改成功!");
		}catch(Exception e){
			e.printStackTrace();
			return new Result(false,"修改失败!");
		}
	}
	
	/**
	 * 根据ID查找方案
	 * */
	@RequestMapping("/findMonitorSchemeById/{planId}")
	public MonitoringScheme findMonitorSchemeById(@PathVariable("planId") String planId,Model mv){
	    MonitoringScheme monitor = monitoringSchemeService.findMonitorSchemeById(planId);
	    return monitor;
	}
	
}
