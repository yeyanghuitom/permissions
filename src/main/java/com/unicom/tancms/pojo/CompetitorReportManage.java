package com.unicom.tancms.pojo;

import java.io.Serializable;
import java.util.Date;

public class CompetitorReportManage implements Serializable{
    private String cpaReportId;

    private Integer cpaNumber;

    private String cpaReportName;

    private Integer cpaNum;

    private Date cpaCreateTime;

    private Date cpaFinishTime;

    private String cpaAnalyzStatus;

    private Date cpaStartTime;

    private Date cpaEndTime;

    private String isUse;

    private String cpaCreateUser;

    private String cpaPathWord;

    private String cpaPathPdf;

    private String cpaUpdateUser;

    private Date cpaUpdateTime;

    public String getCpaReportId() {
        return cpaReportId;
    }

    public void setCpaReportId(String cpaReportId) {
        this.cpaReportId = cpaReportId == null ? null : cpaReportId.trim();
    }

    public Integer getCpaNumber() {
        return cpaNumber;
    }

    public void setCpaNumber(Integer cpaNumber) {
        this.cpaNumber = cpaNumber;
    }

    public String getCpaReportName() {
        return cpaReportName;
    }

    public void setCpaReportName(String cpaReportName) {
        this.cpaReportName = cpaReportName == null ? null : cpaReportName.trim();
    }

    public Integer getCpaNum() {
        return cpaNum;
    }

    public void setCpaNum(Integer cpaNum) {
        this.cpaNum = cpaNum;
    }

    public Date getCpaCreateTime() {
        return cpaCreateTime;
    }

    public void setCpaCreateTime(Date cpaCreateTime) {
        this.cpaCreateTime = cpaCreateTime;
    }

    public Date getCpaFinishTime() {
        return cpaFinishTime;
    }

    public void setCpaFinishTime(Date cpaFinishTime) {
        this.cpaFinishTime = cpaFinishTime;
    }

    public String getCpaAnalyzStatus() {
        return cpaAnalyzStatus;
    }

    public void setCpaAnalyzStatus(String cpaAnalyzStatus) {
        this.cpaAnalyzStatus = cpaAnalyzStatus == null ? null : cpaAnalyzStatus.trim();
    }

    public Date getCpaStartTime() {
        return cpaStartTime;
    }

    public void setCpaStartTime(Date cpaStartTime) {
        this.cpaStartTime = cpaStartTime;
    }

    public Date getCpaEndTime() {
        return cpaEndTime;
    }

    public void setCpaEndTime(Date cpaEndTime) {
        this.cpaEndTime = cpaEndTime;
    }

    public String getIsUse() {
        return isUse;
    }

    public void setIsUse(String isUse) {
        this.isUse = isUse == null ? null : isUse.trim();
    }

    public String getCpaCreateUser() {
        return cpaCreateUser;
    }

    public void setCpaCreateUser(String cpaCreateUser) {
        this.cpaCreateUser = cpaCreateUser == null ? null : cpaCreateUser.trim();
    }

    public String getCpaPathWord() {
        return cpaPathWord;
    }

    public void setCpaPathWord(String cpaPathWord) {
        this.cpaPathWord = cpaPathWord == null ? null : cpaPathWord.trim();
    }

    public String getCpaPathPdf() {
        return cpaPathPdf;
    }

    public void setCpaPathPdf(String cpaPathPdf) {
        this.cpaPathPdf = cpaPathPdf == null ? null : cpaPathPdf.trim();
    }

    public String getCpaUpdateUser() {
        return cpaUpdateUser;
    }

    public void setCpaUpdateUser(String cpaUpdateUser) {
        this.cpaUpdateUser = cpaUpdateUser == null ? null : cpaUpdateUser.trim();
    }

    public Date getCpaUpdateTime() {
        return cpaUpdateTime;
    }

    public void setCpaUpdateTime(Date cpaUpdateTime) {
        this.cpaUpdateTime = cpaUpdateTime;
    }
}