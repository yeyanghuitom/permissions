package com.unicom.tancms.pojo;

import java.io.Serializable;
import java.util.Date;

public class MonitoringScheme implements Serializable{
    private String planId;

    private String planName;

    private String planKeywords;

    private String planExclude;

    private Date cpaCreateTime;

    private String planCreateUser;

    private Date planUpdateTime;

    private String planUpdateUser;

    private String planClassId;

    private String status;

    public String getPlanId() {
        return planId;
    }

    public void setPlanId(String planId) {
        this.planId = planId == null ? null : planId.trim();
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName == null ? null : planName.trim();
    }

    public String getPlanKeywords() {
        return planKeywords;
    }

    public void setPlanKeywords(String planKeywords) {
        this.planKeywords = planKeywords == null ? null : planKeywords.trim();
    }

    public String getPlanExclude() {
        return planExclude;
    }

    public void setPlanExclude(String planExclude) {
        this.planExclude = planExclude == null ? null : planExclude.trim();
    }

    public Date getCpaCreateTime() {
        return cpaCreateTime;
    }

    public void setCpaCreateTime(Date cpaCreateTime) {
        this.cpaCreateTime = cpaCreateTime;
    }

    public String getPlanCreateUser() {
        return planCreateUser;
    }

    public void setPlanCreateUser(String planCreateUser) {
        this.planCreateUser = planCreateUser == null ? null : planCreateUser.trim();
    }

    public Date getPlanUpdateTime() {
        return planUpdateTime;
    }

    public void setPlanUpdateTime(Date planUpdateTime) {
        this.planUpdateTime = planUpdateTime;
    }

    public String getPlanUpdateUser() {
        return planUpdateUser;
    }

    public void setPlanUpdateUser(String planUpdateUser) {
        this.planUpdateUser = planUpdateUser == null ? null : planUpdateUser.trim();
    }

    public String getPlanClassId() {
        return planClassId;
    }

    public void setPlanClassId(String planClassId) {
        this.planClassId = planClassId == null ? null : planClassId.trim();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }
}