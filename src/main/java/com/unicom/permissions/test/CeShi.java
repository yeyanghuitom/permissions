package com.unicom.permissions.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CeShi {
	
	@RequestMapping("/index1")
	public String ceshi(){
		return "yqrcjc";
	}
}
