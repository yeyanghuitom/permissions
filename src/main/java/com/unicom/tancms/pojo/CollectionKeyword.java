package com.unicom.tancms.pojo;

import java.io.Serializable;
import java.util.Date;

public class CollectionKeyword implements Serializable{
    private String keywordCoding;

    private String operatorType;

    private Date updateTime;

    private Date createTime;

    private String createUser;

    private String updateUser;

    private String acqKeywords;

    public String getKeywordCoding() {
        return keywordCoding;
    }

    public void setKeywordCoding(String keywordCoding) {
        this.keywordCoding = keywordCoding == null ? null : keywordCoding.trim();
    }

    public String getOperatorType() {
        return operatorType;
    }

    public void setOperatorType(String operatorType) {
        this.operatorType = operatorType == null ? null : operatorType.trim();
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser == null ? null : createUser.trim();
    }

    public String getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser == null ? null : updateUser.trim();
    }

    public String getAcqKeywords() {
        return acqKeywords;
    }

    public void setAcqKeywords(String acqKeywords) {
        this.acqKeywords = acqKeywords == null ? null : acqKeywords.trim();
    }
}