package com.unicom.tools;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CreateTaskToJson {
    public static List<Object> createTaskToJson(List<Map> listCenter){
        Map<String,Object> map2 = new HashMap<>();
        List<Object> allList = new ArrayList<>();
        List<Object> tbodylist = new ArrayList<>();
        for (int i = 0; i < listCenter.size(); i++) {
            Map<String,Object> tbody = new HashMap<>();
            tbody.put("examinationType",listCenter.get(i).get("BIND_TYPE"));
            tbody.put("QUESTION_ID",listCenter.get(i).get("QUESTION_ID"));/*问卷ID*/
            tbody.put("jidu",listCenter.get(i).get("YEAR_Q"));//季度
            tbody.put("statec","false");//判断input状态
            tbody.put("uploadDataCount",listCenter.get(i).get("uploadDataCount"));
            tbody.put("planAssignedCount","");
            Map<String,Object> evaluation = new HashMap<>();
            evaluation.put("derogatory","贬损");
            evaluation.put("neutral","中立");
            evaluation.put("recommend","推荐");
            tbody.put("evaluation",evaluation);
            Map<String,Object> Count = new HashMap<>();
            Count.put("derogatory",listCenter.get(i).get("derogatory"));
            Count.put("neutral",listCenter.get(i).get("neutral"));
            Count.put("recommend",listCenter.get(i).get("recommend"));
            tbody.put("Count",Count);
            Map<String,Object> samplingInspect = new HashMap<>();
            samplingInspect.put("derogatory","");
            samplingInspect.put("neutral","");
            samplingInspect.put("recommend","");
            tbody.put("samplingInspect",samplingInspect);
            Map<String,Object> mutualInspect = new HashMap<>();
            mutualInspect.put("derogatory","");
            mutualInspect.put("neutral","");
            mutualInspect.put("recommend","");
            tbody.put("mutualInspect",mutualInspect);
            Map<String,Object> selfInspect = new HashMap<>();
            selfInspect.put("derogatory","");
            selfInspect.put("neutral","");
            selfInspect.put("recommend","");
            tbody.put("selfInspect",selfInspect);
            Map<String,Object> nowCount = new HashMap<>();
            nowCount.put("derogatory","");
            nowCount.put("neutral","");
            nowCount.put("recommend","");
            tbody.put("nowCount",nowCount);
            Map<String,Object> arrears = new HashMap<>();
            arrears.put("derogatory","100");
            arrears.put("neutral","100");
            arrears.put("recommend","100");
            tbody.put("arrears",arrears);
            Map<String,Object> rolltypesubtotal = new HashMap<>();
            rolltypesubtotal.put("sampling","");
            rolltypesubtotal.put("absolute","");
            rolltypesubtotal.put("selfinspection","");
            rolltypesubtotal.put("nowCount","");
            rolltypesubtotal.put("arrears","");
            tbody.put("rolltypesubtotal",rolltypesubtotal);
            tbodylist.add(tbody);
        }
        map2.put("tbody",tbodylist);

        allList.add(map2);
        return allList;
    }

    public static List<Object> createTaskSelfToJson(List<Map> listCenter,List<Map> cityun){
        Map<String,Object> map2 = new HashMap<>();
        List<Object> allList = new ArrayList<>();
        List<Object> tbodylist = new ArrayList<>();
        for (int i = 0; i < listCenter.size(); i++) {
            Map<String,Object> tbody = new HashMap<>();
            tbody.put("examinationType",listCenter.get(i).get("BIND_TYPE"));
            tbody.put("QUESTION_ID",listCenter.get(i).get("QUESTION_ID"));/*问卷ID*/
            tbody.put("jidu",listCenter.get(i).get("YEAR_Q"));//季度
            String a = "";
            for(int j=0;j<cityun.size();j++){
                if(cityun.get(j).get("BIND_TYPE").toString().equals(listCenter.get(i).get("BIND_TYPE").toString())){
                    a= cityun.get(j).get("SUM").toString();

                }
            }
            tbody.put("finshTaskNum",a);
            tbody.put("statec","false");//判断input状态
            tbody.put("uploadDataCount",listCenter.get(i).get("uploadDataCount"));
            tbody.put("planAssignedCount","");
            Map<String,Object> evaluation = new HashMap<>();
            evaluation.put("derogatory","贬损");
            evaluation.put("neutral","中立");
            evaluation.put("recommend","推荐");
            tbody.put("evaluation",evaluation);
            Map<String,Object> Count = new HashMap<>();/*nps量*/
            Count.put("derogatory",listCenter.get(i).get("derogatory"));
            Count.put("neutral",listCenter.get(i).get("neutral"));
            Count.put("recommend",listCenter.get(i).get("recommend"));
            tbody.put("Count",Count);
            Map<String,Object> selfInspect = new HashMap<>();/*自检*/
            selfInspect.put("derogatory","");
            selfInspect.put("neutral","");
            selfInspect.put("recommend","");
            tbody.put("selfInspect",selfInspect);
            Map<String,Object> nowCount = new HashMap<>();/*小计*/
            nowCount.put("derogatory","");
            nowCount.put("neutral","");
            nowCount.put("recommend","");
            tbody.put("nowCount",nowCount);
            Map<String,Object> rolltypesubtotal = new HashMap<>();/*当前卷型小计*/
            rolltypesubtotal.put("selfinspection","");
            rolltypesubtotal.put("nowCount","");
            rolltypesubtotal.put("arrears","");
            tbody.put("rolltypesubtotal",rolltypesubtotal);
            tbodylist.add(tbody);
        }
        map2.put("tbody",tbodylist);
        allList.add(map2);
        return allList;
    }
}
