package com.unicom.tancms.pojo;

import java.io.Serializable;

public class CompetitionTable implements Serializable{
    private String cpaId;

    private String cpaExclude;

    private String cpaName;

    private String cpaPlanId;

    private String cpaKeywords;

    private String cpaUsePlan;

    private String isDelete;

    private String cpaReportId;

    public String getCpaId() {
        return cpaId;
    }

    public void setCpaId(String cpaId) {
        this.cpaId = cpaId == null ? null : cpaId.trim();
    }

    public String getCpaExclude() {
        return cpaExclude;
    }

    public void setCpaExclude(String cpaExclude) {
        this.cpaExclude = cpaExclude == null ? null : cpaExclude.trim();
    }

    public String getCpaName() {
        return cpaName;
    }

    public void setCpaName(String cpaName) {
        this.cpaName = cpaName == null ? null : cpaName.trim();
    }

    public String getCpaPlanId() {
        return cpaPlanId;
    }

    public void setCpaPlanId(String cpaPlanId) {
        this.cpaPlanId = cpaPlanId == null ? null : cpaPlanId.trim();
    }

    public String getCpaKeywords() {
        return cpaKeywords;
    }

    public void setCpaKeywords(String cpaKeywords) {
        this.cpaKeywords = cpaKeywords == null ? null : cpaKeywords.trim();
    }

    public String getCpaUsePlan() {
        return cpaUsePlan;
    }

    public void setCpaUsePlan(String cpaUsePlan) {
        this.cpaUsePlan = cpaUsePlan == null ? null : cpaUsePlan.trim();
    }

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete == null ? null : isDelete.trim();
    }

    public String getCpaReportId() {
        return cpaReportId;
    }

    public void setCpaReportId(String cpaReportId) {
        this.cpaReportId = cpaReportId == null ? null : cpaReportId.trim();
    }
}