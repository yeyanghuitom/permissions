package com.unicom.tancms.pojo;

import java.io.Serializable;
import java.util.Date;

public class NewFound implements Serializable{
    private String wordsClassId;

    private String wordsClassName;

    private Date createTime;

    private String createUser;

    private Date updateTime;

    private String updateUser;

    private String newWords;

    public String getWordsClassId() {
        return wordsClassId;
    }

    public void setWordsClassId(String wordsClassId) {
        this.wordsClassId = wordsClassId == null ? null : wordsClassId.trim();
    }

    public String getWordsClassName() {
        return wordsClassName;
    }

    public void setWordsClassName(String wordsClassName) {
        this.wordsClassName = wordsClassName == null ? null : wordsClassName.trim();
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

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser == null ? null : updateUser.trim();
    }

    public String getNewWords() {
        return newWords;
    }

    public void setNewWords(String newWords) {
        this.newWords = newWords == null ? null : newWords.trim();
    }
}