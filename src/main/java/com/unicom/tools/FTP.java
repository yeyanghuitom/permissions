package com.unicom.tools;

import sun.net.ftp.FtpClient;
import sun.net.ftp.FtpProtocolException;
import java.io.*;
import java.net.InetSocketAddress;
import java.net.SocketAddress;
import java.util.ArrayList;
import java.util.List;

/**
 * 
 * @author yangm 2015-01-13
 * 
 */

public class FTP {

	private FtpClient ftpClient = null;
	private boolean rs = false;

	private String sUser = "";
	private String localfilename;
	private String remotefilename;
	private String sPassword = "";

	// 连接服务器

	public FTP(String ip, int port, String userName, String password) {
		this.sUser = userName;
		this.sPassword = password;
		try {
			ftpClient = FtpClient.create();
			SocketAddress sServer = new InetSocketAddress(ip, port);
			ftpClient.connect(sServer);
			ftpClient.login(sUser, sPassword.toCharArray());
            ftpClient.setBinaryType();
		} catch (Exception ex) {
			// TODO Auto-generated catch block
			ex.printStackTrace();
			throw new RuntimeException(ex);
		}
	}

	/**
	 * @return Returns the sPassword.
	 */
	public String getSPassword() {
		return sPassword;
	}

	// /**
	// * @return Returns the sServer.
	// */
	// public SocketAddress getSServer() {
	// return sServer;
	// }

	/**
	 * @return Returns the sUser.
	 */
	public String getSUser() {
		return sUser;
	}

	public boolean hasConnected() {
		return rs;
	}

	/**
	 * 文件夹上传，指定源文件夹
	 *
	 * @throws IOException
	 */
	public void uploadFolder(String strFoldName) throws IOException {
		File f = new File(strFoldName);
		if (!f.exists()) {
			return;
		}
		File subFile[] = f.listFiles();
		for (int i = 0; i < subFile.length; i++) {
			uploadFile(subFile[i].getName(), subFile[i].toString());
		}

	}

	/**
	 * 文件夹上传，指定源文件夹，指定目标文件夹
	 * 
	 * @param strSrcFileName
	 * @param strObjFileName
	 * @throws IOException
	 */
	// public void uploadFolder(String strFoldName, String uploadFoldName)
	// throws IOException {
	//
	// File f = new File(strFoldName);
	// if (!f.exists()) {
	// return;
	// }
	// File subFile[] = f.listFiles();
	// for (int i = 0; i < subFile.length; i++) {
	// String FileName = "";
	// FileName = subFile[i].getName();
	// uploadFile(subFile[i], uploadFoldName + "\\" + FileName);
	// }
	// }
	/**
	 * * 上传文件 * @param localFile 本地文件
	 * 
	 * @param remoteFile
	 *            远程文件 * @author wdd * @date 2014-9-1
	 */
	public boolean upload(String localFile, String remoteFile) {
		this.localfilename = localFile;
		this.remotefilename = remoteFile;
		OutputStream os = null;
		FileInputStream is = null;
		try { // 将远程文件加入输出流中

			os = ftpClient.putFileStream(this.remotefilename);
			// 获取本地文件的输入流
			File file_in = new File(this.localfilename);
			is = new FileInputStream(file_in); // 创建一个缓冲区
			byte[] bytes = new byte[1024];
			int c;
			while ((c = is.read(bytes)) != -1) {
				os.write(bytes, 0, c);
			}
			//System.out.println("upload success");
			return true;
		} catch (Exception ex) {
			ex.printStackTrace();
			throw new RuntimeException(ex);
		} finally {
			try {
				if (is != null) {
					is.close();
				}
			} catch (IOException e) {
				is = null;
				e.printStackTrace();
			}
			try {
				if (os != null) {
					os.close();
				}
			} catch (IOException e) {
				os = null;
				e.printStackTrace();
			}

		}
	}

	/**
	 * 将单个File文件上传，指定上传文件，指定目标路径
	 * @param fScrFile  远程路径
	 * @param strObjFileName 本地路径
	 * @throws IOException
     * @return boolean
	 */
	public  boolean uploadFile(String fScrFile, String strObjFileName)
			throws IOException {
		OutputStream os = null;
		FileInputStream is = null;
		try {
			System.out.println("FTP生成文件========"+strObjFileName);
			os = ftpClient.putFileStream(strObjFileName);
			is = new FileInputStream(fScrFile);
			byte[] bytes = new byte[1024];
			int c;
			while ((c = is.read(bytes)) != -1) {
				os.write(bytes, 0, c);
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			try {
				if (is != null) {
					is.close();
				}
			} catch (IOException e) {
				is = null;
				e.printStackTrace();
			}
			try {
				if (os != null) {
					os.close();
				}
			} catch (IOException e) {
				os = null;
				e.printStackTrace();
			}
		}
		// log(" [" + strObjFileName + "] File has been uploaded\r");
	}

	/**
	 * 获得服务目录中所有文件名称，指定服务器目录
	 * 
	 * @param uploadFoldName
	 * @return
	 * @throws Exception
	 */
	public List<String> getFileNameList(String uploadFoldName) throws Exception {

		DataInputStream dis = null;
		List<String> list = new ArrayList();
		try {
			dis = new DataInputStream(

			ftpClient.nameList(uploadFoldName));//获取列表中一个目录（或者仅仅是对一个给定的文件，它是不是特别有用的名称）文件名
			String filename = "";

			while ((filename = dis.readLine()) != null) {
				list.add(filename);
			}
		} catch (Exception e) {
			System.out.println("there is no files!");
			e.printStackTrace();
		} finally {
			
			dis.close();
		}

		return list;
	}

	public boolean removeFile(String fileStr) {

		try {
			ftpClient.deleteFile(fileStr);
			return true;
		} catch (FtpProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
	}

	public boolean moveFileOnFTP(String FilePath, String FileName) {
		boolean rs = false;
		if (!rs) {
			rs = false;
			try {
				ftpClient.deleteFile(FilePath + FileName);
				rs = true;
			} catch (FtpProtocolException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return rs;
	}
	
	public boolean moveFileOnFTP(String FilePath, String FileName,String null1) {
		return true;
	}

	// 下载文件
    /**
     *@Introduce
     *@Author 陈亚乐
     *@Data 2018-3-31 13:01
     *@param   strFoldName 本地路径
     *@param   strFileName 本地文件名
     *@param   objFoldName 远程路径
     *@param   objFileName 远程文件名
     */
	public int downloadFile(String strFoldName, String strFileName,
			String objFoldName, String objFileName) {
		InputStream ftpIn = null;
		FileOutputStream ftpOut = null;
		int flag =1;
		try {
			ftpIn = ftpClient.getFileStream(objFoldName + objFileName);// fileName为FTP服务器上要下载的文件�?
			byte[] buf = new byte[2048];
			int bufsize = 0;
//			ftpOut = new FileOutputStream(strFoldName + "/" + strFileName); // 存放在本地硬盘的物理位置
			//System.out.println(strFoldName + strFileName);
			//File file = new File(strFoldName + strFileName);
			ftpOut = new FileOutputStream(strFoldName + strFileName);
			//System.out.println(ftpOut);
			while ((bufsize = ftpIn.read(buf, 0, buf.length)) != -1) {
				ftpOut.write(buf, 0, bufsize);
			}
			flag = 0;
		} catch (Exception e) {
			flag =1;
			System.out.println("strFileName: "+strFileName+" 下载失败"+e.getMessage());
		} finally {
			if (ftpIn != null) {
				try {
					ftpIn.close();
				} catch (IOException e) {
					System.out.println("InputStream------close异常"+e.getMessage());
				}
			}
			if (ftpOut != null) {
				try {
					ftpOut.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					System.out.println("FileOutputStream------close异常"+e.getMessage());
				}
			}
		}
		return flag;
	}

	public void closeConnect() {
		try {
			ftpClient.close();
		} catch (IOException e) {

			e.printStackTrace();
		}
	}

	public boolean rename(String srcPath, String srcFileName, String objPath,
			String objFileName) throws FtpProtocolException {

		boolean rs = false;

		try {
			ftpClient.rename(srcPath + srcFileName, objPath + objFileName);
			rs = true;
		} catch (IOException e) {

			e.printStackTrace();
		}

		return rs;
	}

	public boolean chmod(String srcPath, String srcFileName, String chmodStr) {
		boolean rs = true;
		if (chmodStr != null && !chmodStr.equals("")) {
			chmodStr = "774";
		}

		try {
			ftpClient.siteCmd("chmod " + chmodStr + "  " + srcPath
					+ srcFileName + "\r\n");
			rs = true;
		} catch (Exception e) {

			e.printStackTrace();
		}

		return rs;
	}

	public boolean mkdir(String foldName) throws FtpProtocolException,
			IOException {
		try {
			ftpClient.changeDirectory(foldName);
			rs = false;
		} catch (IOException e) {
			ftpClient.siteCmd("MKD  " + foldName + "\r\n");
			rs = true;
		}
		return rs;
	}

	public boolean createDir(String foldName) {
		try {
			ftpClient.makeDirectory(foldName);
			rs = true;
		} catch (FtpProtocolException e) {
			// TODO Auto-generated catch block
			rs = false;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			rs = false;
		}
		return rs;

	}

	public static void main(String ag[]) {
		String ftpWorkPath = "/home/app_user/";
		FTP f = new FTP("10.64.8.42", 21, "ftpUser", "abc@123");
		try {
            boolean b = f.uploadFile("C:/Users/pc/Desktop/json.txt", ftpWorkPath + "json.txt");
            System.out.println(b);
            int i = f.downloadFile("C:/Users/pc/Desktop/", "j1111.txt", ftpWorkPath, "json.txt");
            System.out.println(i);
        } catch (Exception e) {
			e.printStackTrace();
		}
		//f.moveFileOnFTP(ftpWorkPath, "test.rmvb", ftpBackupPath);
		//f.createDir("/home/appuser/test/");

		f.closeConnect();
	}
}
