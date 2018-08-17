package com.unicom.tools;

import java.util.HashMap;
import java.util.Map;

public class MapGetKeyAndValue {
    public static Map insertSql( Map<Object, Object> map){
        StringBuffer sb=new StringBuffer();
        StringBuffer sb1=new StringBuffer();
        for (Map.Entry<Object, Object> entry : map.entrySet()) {
            sb.append(entry.getKey()+",");
            sb1.append("'"+entry.getValue()+"',");
        }
        Map map1=new HashMap();
        map1.put("SB",sb.substring(0,sb.toString().length()-1));
        map1.put("SB1",sb1.substring(0,sb1.toString().length()-1).replace("'now()'","now()"));
        return map1;
    }
    public static String updateSql( Map<Object, Object> map){
        StringBuffer sb=new StringBuffer();
        for (Map.Entry<Object, Object> entry : map.entrySet()) {
            sb.append(" "+entry.getKey()+"='"+entry.getValue()+"' ,");
        }
        return sb.toString().substring(0,sb.toString().length()-1).replace("'now()'","now()");
    }
    public static String queryParam( Map<Object, Object> map){
        StringBuffer sb=new StringBuffer();
        for (Map.Entry<Object, Object> entry : map.entrySet()) {
            sb.append(" INSTR(T."+entry.getKey()+",'"+entry.getValue()+"')>0 AND");
        }
        return sb.toString().substring(0,sb.toString().length()-3);
    }
}
