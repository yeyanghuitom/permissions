package com.unicom.tools;


import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * @命名 ：
 * @作者 ：白永伟
 * @时间 : 2018/2/28 19:54
 */
public class JsonUtil {

    public static List<Map> parserToList(String json) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(json, List.class);
    }
    public static Map parserToMap(String json) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(json, Map.class);
    }
    public static String mapToJson(Map map) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(map);
    }
    public static String listToJson(List list) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(list);
    }
}
