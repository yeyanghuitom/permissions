package com.unicom.tancms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class LoginControllerCeshiYYH {
	
	@RequestMapping("/ceshihtml1")
	public String loginceshi1(){
		return "yqrcjc";
	}
	
	@RequestMapping("/ceshihtml2")
	public String loginceshi2(){
		return "jpdbfx";
	}
	
	@RequestMapping("/ceshihtml3")
	public String loginceshi3(){
		return "yxxgpg";
	}
	
	
	
}
