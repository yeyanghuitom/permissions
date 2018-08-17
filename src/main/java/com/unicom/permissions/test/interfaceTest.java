package com.unicom.permissions.test;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIUtils;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicHeader;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;




public class interfaceTest {
    public static void main (String [] args) throws NoSuchAlgorithmException, KeyManagementException, UnsupportedEncodingException, URISyntaxException{
        DefaultHttpClient httpclient = new DefaultHttpClient();
        long timeBegin = new Date().getTime();
        URI uri = URIUtils.createURI("http", "127.0.0.1", 8080,
                "/permissions/main/login", null, null);
        String json="{\"userName\":\"jiale\",\"password\":\"111111\"}";
        HttpPost httpPost = new HttpPost(uri);
        httpPost.setHeader("Content-Type", "application/json");
        StringEntity se = new StringEntity(json);
        se.setContentType("text/json");
        se.setContentEncoding(new BasicHeader(HTTP.CONTENT_TYPE, "application/json"));

        httpPost.setEntity(se);
        HttpResponse response = null;
        try {
            response = httpclient.execute(httpPost);
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        HttpEntity entity = response.getEntity();
        String msgStr = "";
        if (entity != null) {
            try {
                msgStr = EntityUtils.toString(entity, "UTF-8");
                System.out.println(msgStr);
            } catch (IOException e) {
            }
            String result = "";
            if (msgStr.contains("error")) {
            }
        }
        long timeEnd = new Date().getTime();
        System.out.println("接口调用时间："+(timeEnd-timeBegin)+"ms");

    }
}
