package com.unicom.permissions.test;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

public class HttpTest {
	public static void main(String[] args) throws Exception {
	    //登录
//		String url=  "http://localhost:8080/permissions/login";
        //获取权限
//        String url=  "http://localhost:8080/permissions/main/permissions";
        //获取权限
//		String url=  "http://localhost:8080/permissions/api/getApiResourcesAll";
		String url=  "http://localhost:8080/permissions/users/usersBindOrAPI";
//        String url=  "http://localhost:8080/permissions/roles/getOneRolesAllResources";
// 			getOneRolesAllResources   rolesBindResources

		// 创建默认的httpClient实例
		HttpClient httpclient = new DefaultHttpClient();
		// 创建post请求
		HttpPost post = new HttpPost(url);
		// 创建参数队列
		List<NameValuePair> params = new ArrayList<NameValuePair>();
        //登录
//		params.add(new BasicNameValuePair("userName", "jiale"));
//		params.add(new BasicNameValuePair("password", "111111"));
        //获取权限
//      params.add(new BasicNameValuePair("paramOfAll", "{\"USER_ROLE_ID\":\"admin\"}"));/*{"USER_ID":"Y"}*/
//		params.add(new BasicNameValuePair("paramOfDate", "{\"startTime\":\"2018-02-08\",\"endTime\":\"2018-02-29\"}"));
//		params.add(new BasicNameValuePair("RESOURCE_ID", "123"));
		//params.add(new BasicNameValuePair("RESOURCE_ID", "123"));
//		params.add(new BasicNameValuePair("userName", "admin"));
//		params.add(new BasicNameValuePair("password", "admin"));
		params.add(new BasicNameValuePair("USER_ID", "admin"));
		params.add(new BasicNameValuePair("API_RESOURCE_IDS", "123456789"));

//		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
/*		params.add(new BasicNameValuePair("API_RESOURCE_ID", "Z03"));
		params.add(new BasicNameValuePair("CREATE_DATE", "2018-03-13"));*/




		UrlEncodedFormEntity uefEntity;
		try {
			uefEntity = new UrlEncodedFormEntity(params, "UTF-8");
			post.setEntity(uefEntity);
			System.out.println("接口传参:"+params);
			System.out.println("接口地址:"+ post.getURI());
			HttpResponse response = httpclient.execute(post);
			HttpEntity entity = response.getEntity();
			String reString = EntityUtils.toString(entity, "UTF-8");
			System.out.println("接口返回值:"+reString);
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			// 关闭连接,释放资源
			httpclient.getConnectionManager().shutdown();
		}
	}
}
