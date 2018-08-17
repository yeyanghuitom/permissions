package com.unicom.permissions.test;


import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.unicom.tancms.pojo.User;
@RestController
public class LoginControllerCeShi {
	
	@RequestMapping(value = "/greeting")
	public ModelAndView test(ModelAndView mv) {
	    mv.setViewName("/greeting");
	    mv.addObject("title","欢迎使用Thymeleaf!");
	    return mv;
	}
	
	@RequestMapping("/ceshi")
	public User getUser(){
		User user = new User();
		user.setUserName("123");
		user.setPassword("1232244");
		user.setCreateTime(new Date());
		return user;
	}
	
}
