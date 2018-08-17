package com.unicom.tools;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @ ：
 * @autor ：白永伟
 * @date : 2018/3/14 19:32
 */
public class TokenUtil {
    private static String userId;
    private static final String Encrypkey="cf410f84904a44cc8a7f48fc4134e8f9";

    public static String getTokenUserId(HttpServletRequest request) throws Exception{
        Map map=getTokenMap(request);
        return (String) map.get("D");
    }
    public static Map getTokenMap(HttpServletRequest request) throws Exception{
        String WebToken=getToken(request);
        String tokenvalue= EncrypDES3.decryptThreeDESECB(WebToken,Encrypkey);
        Map webMap= JsonUtil.parserToMap(tokenvalue);
        return webMap;
    }
    public static Map getTokenvalueMap(HttpServletRequest request)throws Exception{
        String WebToken=getToken(request);
        LinkedHashMap<String ,String> token_partkeys=new LinkedHashMap<String ,String>();
        token_partkeys.put(WebToken,WebToken);
        return JsonUtil.parserToMap(JedisPoolUtil.getDateString(token_partkeys));
    }
    public static String getToken(HttpServletRequest request) throws Exception{
        String WebToken=null;
        Cookie[] cookies=request.getCookies();//"WebToken"
        forCookie:
        for(Cookie cookie : cookies){
            if(cookie.getName().equals("WebToken")){
                WebToken=cookie.getValue();
                break forCookie;
            }
        }
        return WebToken;
    }

    public static String getEncrypkey(){
        return Encrypkey;
    }


}
