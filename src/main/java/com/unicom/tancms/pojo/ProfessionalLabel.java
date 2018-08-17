package com.unicom.tancms.pojo;

import java.io.Serializable;
import java.util.Date;

public class ProfessionalLabel implements Serializable{
    private String label1Id;

    private String label1Name;

    private String label2Id;

    private String label2Name;

    private String label2Words;

    private String label2UpdateUser;

    private Date label2UpdateTime;

    public String getLabel1Id() {
        return label1Id;
    }

    public void setLabel1Id(String label1Id) {
        this.label1Id = label1Id == null ? null : label1Id.trim();
    }

    public String getLabel1Name() {
        return label1Name;
    }

    public void setLabel1Name(String label1Name) {
        this.label1Name = label1Name == null ? null : label1Name.trim();
    }

    public String getLabel2Id() {
        return label2Id;
    }

    public void setLabel2Id(String label2Id) {
        this.label2Id = label2Id == null ? null : label2Id.trim();
    }

    public String getLabel2Name() {
        return label2Name;
    }

    public void setLabel2Name(String label2Name) {
        this.label2Name = label2Name == null ? null : label2Name.trim();
    }

    public String getLabel2Words() {
        return label2Words;
    }

    public void setLabel2Words(String label2Words) {
        this.label2Words = label2Words == null ? null : label2Words.trim();
    }

    public String getLabel2UpdateUser() {
        return label2UpdateUser;
    }

    public void setLabel2UpdateUser(String label2UpdateUser) {
        this.label2UpdateUser = label2UpdateUser == null ? null : label2UpdateUser.trim();
    }

    public Date getLabel2UpdateTime() {
        return label2UpdateTime;
    }

    public void setLabel2UpdateTime(Date label2UpdateTime) {
        this.label2UpdateTime = label2UpdateTime;
    }
}