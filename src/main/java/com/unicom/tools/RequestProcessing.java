package com.unicom.tools;

import javax.servlet.http.HttpServletRequest;

/**
 * @Introduce
 * @Author 陈亚乐
 * @Data 2018-2-9  10:51
 */
public class RequestProcessing {
    public static String request(HttpServletRequest request,String param){
        String a=request.getParameter(param).trim()==null?"":request.getParameter(param).trim();
        return a;
    }
}
