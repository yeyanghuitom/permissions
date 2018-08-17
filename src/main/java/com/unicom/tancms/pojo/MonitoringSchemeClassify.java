package com.unicom.tancms.pojo;

import java.io.Serializable;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

public class MonitoringSchemeClassify implements Serializable{
    private String planClassId;

    private String planClassName;

    private String classCreateUser;
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date classCreateTime;

    private String classUpdateUser;
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date classUpdateTime;

    private String status;

    public String getPlanClassId() {
        return planClassId;
    }

    public void setPlanClassId(String planClassId) {
        this.planClassId = planClassId == null ? null : planClassId.trim();
    }

    public String getPlanClassName() {
        return planClassName;
    }

    public void setPlanClassName(String planClassName) {
        this.planClassName = planClassName == null ? null : planClassName.trim();
    }

    public String getClassCreateUser() {
        return classCreateUser;
    }

    public void setClassCreateUser(String classCreateUser) {
        this.classCreateUser = classCreateUser == null ? null : classCreateUser.trim();
    }

    public Date getClassCreateTime() {
        return classCreateTime;
    }

    public void setClassCreateTime(Date classCreateTime) {
        this.classCreateTime = classCreateTime;
    }

    public String getClassUpdateUser() {
        return classUpdateUser;
    }

    public void setClassUpdateUser(String classUpdateUser) {
        this.classUpdateUser = classUpdateUser == null ? null : classUpdateUser.trim();
    }

    public Date getClassUpdateTime() {
        return classUpdateTime;
    }

    public void setClassUpdateTime(Date classUpdateTime) {
        this.classUpdateTime = classUpdateTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }
}