package com.unicom.tancms.pojo;

import java.io.Serializable;
import java.util.Date;

public class MarketingEffectAssess implements Serializable{
    private String mesActivityId;

    private String mesActivityName;

    private Date mesCreateTime;

    private String mesKeywords;

    private String mesExclude;

    private Date mesFinishTime;

    private String mesAnalyzStatus;

    private Date mesStartTime;

    private Date mesEndTime;

    private String isDelete;

    private String mesCreateUser;

    private String mesPathWord;

    private String mesPathPdf;

    private Date mesUpdateTime;

    private String mesUpdateUser;

    public String getMesActivityId() {
        return mesActivityId;
    }

    public void setMesActivityId(String mesActivityId) {
        this.mesActivityId = mesActivityId == null ? null : mesActivityId.trim();
    }

    public String getMesActivityName() {
        return mesActivityName;
    }

    public void setMesActivityName(String mesActivityName) {
        this.mesActivityName = mesActivityName == null ? null : mesActivityName.trim();
    }

    public Date getMesCreateTime() {
        return mesCreateTime;
    }

    public void setMesCreateTime(Date mesCreateTime) {
        this.mesCreateTime = mesCreateTime;
    }

    public String getMesKeywords() {
        return mesKeywords;
    }

    public void setMesKeywords(String mesKeywords) {
        this.mesKeywords = mesKeywords == null ? null : mesKeywords.trim();
    }

    public String getMesExclude() {
        return mesExclude;
    }

    public void setMesExclude(String mesExclude) {
        this.mesExclude = mesExclude == null ? null : mesExclude.trim();
    }

    public Date getMesFinishTime() {
        return mesFinishTime;
    }

    public void setMesFinishTime(Date mesFinishTime) {
        this.mesFinishTime = mesFinishTime;
    }

    public String getMesAnalyzStatus() {
        return mesAnalyzStatus;
    }

    public void setMesAnalyzStatus(String mesAnalyzStatus) {
        this.mesAnalyzStatus = mesAnalyzStatus == null ? null : mesAnalyzStatus.trim();
    }

    public Date getMesStartTime() {
        return mesStartTime;
    }

    public void setMesStartTime(Date mesStartTime) {
        this.mesStartTime = mesStartTime;
    }

    public Date getMesEndTime() {
        return mesEndTime;
    }

    public void setMesEndTime(Date mesEndTime) {
        this.mesEndTime = mesEndTime;
    }

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete == null ? null : isDelete.trim();
    }

    public String getMesCreateUser() {
        return mesCreateUser;
    }

    public void setMesCreateUser(String mesCreateUser) {
        this.mesCreateUser = mesCreateUser == null ? null : mesCreateUser.trim();
    }

    public String getMesPathWord() {
        return mesPathWord;
    }

    public void setMesPathWord(String mesPathWord) {
        this.mesPathWord = mesPathWord == null ? null : mesPathWord.trim();
    }

    public String getMesPathPdf() {
        return mesPathPdf;
    }

    public void setMesPathPdf(String mesPathPdf) {
        this.mesPathPdf = mesPathPdf == null ? null : mesPathPdf.trim();
    }

    public Date getMesUpdateTime() {
        return mesUpdateTime;
    }

    public void setMesUpdateTime(Date mesUpdateTime) {
        this.mesUpdateTime = mesUpdateTime;
    }

    public String getMesUpdateUser() {
        return mesUpdateUser;
    }

    public void setMesUpdateUser(String mesUpdateUser) {
        this.mesUpdateUser = mesUpdateUser == null ? null : mesUpdateUser.trim();
    }
}