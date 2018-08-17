package com.unicom;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.HttpMessageConverter;

import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;



//import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@MapperScan("com.unicom.*")//扫描该包下的class 主要是mybatis的持久化类
//@EnableDiscoveryClient
public class PermissionsApplication extends SpringBootServletInitializer {

   @Override
   protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
	   return builder.sources(PermissionsApplication.class);
   }
   
   @Bean
   public HttpMessageConverters fastJsonHttpMessageConverters(){
	   //定义一个converter转换消息的对象
	   FastJsonHttpMessageConverter fastConverter = new FastJsonHttpMessageConverter();
	   //添加fastjson的配置信息，比如是否格式化返回的信息
	   FastJsonConfig fastJsonConfig = new FastJsonConfig();
	   fastJsonConfig.setSerializerFeatures(SerializerFeature.PrettyFormat);
	   //在converter中添加配置信息
	   fastConverter.setFastJsonConfig(fastJsonConfig);
	   HttpMessageConverter<?> converter = fastConverter;
	   return new HttpMessageConverters(converter);
	   
   }
   
	public static void main(String[] args) {
		SpringApplication.run(PermissionsApplication.class, args);
	}
	

}
