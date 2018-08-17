package com.unicom.tools;

import org.csource.common.MyException;
import org.csource.common.NameValuePair;
import org.csource.fastdfs.*;
import org.springframework.util.ClassUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;

/**
 * FastDFS处理工具
 *
 * @author wh
 * @version 1.0
 */
public class FastDFSClientUtil {
	public static TrackerClient tracker = null;
	public static TrackerServer trackerServer = null;
	public static StorageServer storageServer = null;
	public static StorageClient client = null;
	static {
		// Initialize Fast DFS Client configurations
		try {
			// dfs配置信息初始化
            String configFileName="/usr/local/cemjar/fdfs_client.conf";
			if (DeploymentConfig.fastdfsaConfig=="1"){
                String classPath = ClassUtils.getDefaultClassLoader().getResource("").getPath();
                configFileName = classPath.substring(1,classPath.length()) + "fdfs_client_ceshi.conf";
			}
			System.out.println(configFileName);
			try {
				ClientGlobal.init(configFileName);
			} catch (Exception e) {
				e.printStackTrace();
			}
			// 建立连接
			tracker = new TrackerClient();
			trackerServer = tracker.getConnection();
			String group_name = "group1";
			storageServer = tracker.getStoreStorage(trackerServer, group_name);
			client = new StorageClient(trackerServer, storageServer);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * Author wh
	 *
	 * @param file
	 *            本地目标文件
	 * @param uploadFileName
	 *            远程目的文件
	 * @param fileLength
	 *            文件长度
	 * @return 文件拆分片断
	 * @throws IOException
	 */
	public static String[] uploadFile(File file, String uploadFileName,
			long fileLength) throws IOException {
		byte[] fileBuff = getFileBuffer(new FileInputStream(file), fileLength);
		String[] files = new String[10];
		String fileExtName = "";
		if (uploadFileName.contains(".")) {
			fileExtName = uploadFileName.substring(uploadFileName
					.lastIndexOf(".") + 1);

		} else {
			System.out
					.println("Fail to upload file, because the format of filename is illegal.");
			return null;
		}
		// 设置元信息
		NameValuePair[] metaList = new NameValuePair[3];
		metaList[0] = new NameValuePair("fileName", uploadFileName);
		metaList[1] = new NameValuePair("fileExtName", fileExtName);
		metaList[2] = new NameValuePair("fileLength", String
				.valueOf(fileLength));

		// 上传文件
		try {
			StorageClient client = new StorageClient(trackerServer, storageServer);
            String[] filesUpload = client.upload_file(fileBuff, fileExtName,
					metaList);
			String temp = trackerServer.getInetSocketAddress().getHostName();

			for (int i = 0; i < filesUpload.length; i++) {
				files[i] = filesUpload[i];

			}
			files[2] = temp;// 获取的主机名域名
		} catch (Exception e) {
		    e.printStackTrace();
			System.out.println("Upload file \"" + uploadFileName + "\"fails");
		}
		System.out.println(files + "上传返回的路径");
		trackerServer.close();
		return files;
	}

	/**
	 * Author wh
	 *
	 * @param groupName
	 *            特定组
	 * @param remoteFileName
	 *            远程文件名称
	 * @return 文件信息
	 * @throws MyException
	 * @throws IOException
	 */
	public static FileInfo getFile(String groupName, String remoteFileName)
			throws IOException, MyException {
		return client.get_file_info(groupName, remoteFileName);
	}
	/**
	 * Author wh
	 *
	 * @param groupName
	 *            特定组
	 * @param remoteFileName
	 *            远程文件名称
	 * @throws MyException
	 * @throws IOException
	 */
	public static int deleteFile(String groupName, String remoteFileName)
			throws IOException, MyException {
		int delete_file = client.delete_file(groupName, remoteFileName);
		System.out.println( delete_file==0 ? "删除成功！" : "删除失败："+delete_file);
		return delete_file;
	}

	/**
	 * Author wh
	 *
	 * @param groupName
	 *            特定组
	 * @return 存储服务结果组
	 * @throws IOException
	 */
	public static StorageServer[] getStoreStorages(String groupName)
			throws IOException {
		return tracker.getStoreStorages(trackerServer, groupName);
	}

	/**
	 * Author wh
	 *
	 * @param groupName
	 *            特定组
	 * @param remoteFileName
	 *            dfs文件完整名称
	 * @return 服务信息
	 * @throws IOException
	 */
	public static ServerInfo[] getFetchStorages(String groupName,
			String remoteFileName) throws IOException {
		return tracker.getFetchStorages(trackerServer, groupName,
				remoteFileName);
	}

	/**
	 * Author wh
	 *
	 * @param inStream
	 *            输入流
	 * @param fileLength
	 *            文件长度
	 * @return 文件字节数组
	 * @throws IOException
	 */
	private static byte[] getFileBuffer(InputStream inStream, long fileLength)
			throws IOException {

		byte[] buffer = new byte[256 * 1024];
		byte[] fileBuffer = new byte[(int) fileLength];

		int count = 0;
		int length = 0;

		while ((length = inStream.read(buffer)) != -1) {
			for (int i = 0; i < length; ++i) {
				fileBuffer[count + i] = buffer[i];
			}
			count += length;
		}
		return fileBuffer;
	}

	/**
	 * 主函数测试
	 *
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		File file = new File("C:/Users/pc/Desktop/1.jpg");
		// 返回储存路径:group1 M00/00/00/wKhuW1Vmj6KAZ09pAAC9przUxEk788.jpg
		String[] files = null;
		try {
			files = uploadFile(file, "铭华.jpg", file.length());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(Arrays.asList(files));
//		[group1, M00/00/00/CkAIKlq8pUeAUNK8AAHUPEeFcF0668.jpg, 10.64.8.42, null, null, null, null, null, null, null]

	}


}
