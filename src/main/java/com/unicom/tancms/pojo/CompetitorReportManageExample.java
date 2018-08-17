package com.unicom.tancms.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CompetitorReportManageExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public CompetitorReportManageExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andCpaReportIdIsNull() {
            addCriterion("CPA_REPORT_ID is null");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdIsNotNull() {
            addCriterion("CPA_REPORT_ID is not null");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdEqualTo(String value) {
            addCriterion("CPA_REPORT_ID =", value, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdNotEqualTo(String value) {
            addCriterion("CPA_REPORT_ID <>", value, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdGreaterThan(String value) {
            addCriterion("CPA_REPORT_ID >", value, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_REPORT_ID >=", value, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdLessThan(String value) {
            addCriterion("CPA_REPORT_ID <", value, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdLessThanOrEqualTo(String value) {
            addCriterion("CPA_REPORT_ID <=", value, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdLike(String value) {
            addCriterion("CPA_REPORT_ID like", value, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdNotLike(String value) {
            addCriterion("CPA_REPORT_ID not like", value, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdIn(List<String> values) {
            addCriterion("CPA_REPORT_ID in", values, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdNotIn(List<String> values) {
            addCriterion("CPA_REPORT_ID not in", values, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdBetween(String value1, String value2) {
            addCriterion("CPA_REPORT_ID between", value1, value2, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaReportIdNotBetween(String value1, String value2) {
            addCriterion("CPA_REPORT_ID not between", value1, value2, "cpaReportId");
            return (Criteria) this;
        }

        public Criteria andCpaNumberIsNull() {
            addCriterion("CPA_NUMBER is null");
            return (Criteria) this;
        }

        public Criteria andCpaNumberIsNotNull() {
            addCriterion("CPA_NUMBER is not null");
            return (Criteria) this;
        }

        public Criteria andCpaNumberEqualTo(Integer value) {
            addCriterion("CPA_NUMBER =", value, "cpaNumber");
            return (Criteria) this;
        }

        public Criteria andCpaNumberNotEqualTo(Integer value) {
            addCriterion("CPA_NUMBER <>", value, "cpaNumber");
            return (Criteria) this;
        }

        public Criteria andCpaNumberGreaterThan(Integer value) {
            addCriterion("CPA_NUMBER >", value, "cpaNumber");
            return (Criteria) this;
        }

        public Criteria andCpaNumberGreaterThanOrEqualTo(Integer value) {
            addCriterion("CPA_NUMBER >=", value, "cpaNumber");
            return (Criteria) this;
        }

        public Criteria andCpaNumberLessThan(Integer value) {
            addCriterion("CPA_NUMBER <", value, "cpaNumber");
            return (Criteria) this;
        }

        public Criteria andCpaNumberLessThanOrEqualTo(Integer value) {
            addCriterion("CPA_NUMBER <=", value, "cpaNumber");
            return (Criteria) this;
        }

        public Criteria andCpaNumberIn(List<Integer> values) {
            addCriterion("CPA_NUMBER in", values, "cpaNumber");
            return (Criteria) this;
        }

        public Criteria andCpaNumberNotIn(List<Integer> values) {
            addCriterion("CPA_NUMBER not in", values, "cpaNumber");
            return (Criteria) this;
        }

        public Criteria andCpaNumberBetween(Integer value1, Integer value2) {
            addCriterion("CPA_NUMBER between", value1, value2, "cpaNumber");
            return (Criteria) this;
        }

        public Criteria andCpaNumberNotBetween(Integer value1, Integer value2) {
            addCriterion("CPA_NUMBER not between", value1, value2, "cpaNumber");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameIsNull() {
            addCriterion("CPA_REPORT_NAME is null");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameIsNotNull() {
            addCriterion("CPA_REPORT_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameEqualTo(String value) {
            addCriterion("CPA_REPORT_NAME =", value, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameNotEqualTo(String value) {
            addCriterion("CPA_REPORT_NAME <>", value, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameGreaterThan(String value) {
            addCriterion("CPA_REPORT_NAME >", value, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_REPORT_NAME >=", value, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameLessThan(String value) {
            addCriterion("CPA_REPORT_NAME <", value, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameLessThanOrEqualTo(String value) {
            addCriterion("CPA_REPORT_NAME <=", value, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameLike(String value) {
            addCriterion("CPA_REPORT_NAME like", value, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameNotLike(String value) {
            addCriterion("CPA_REPORT_NAME not like", value, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameIn(List<String> values) {
            addCriterion("CPA_REPORT_NAME in", values, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameNotIn(List<String> values) {
            addCriterion("CPA_REPORT_NAME not in", values, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameBetween(String value1, String value2) {
            addCriterion("CPA_REPORT_NAME between", value1, value2, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaReportNameNotBetween(String value1, String value2) {
            addCriterion("CPA_REPORT_NAME not between", value1, value2, "cpaReportName");
            return (Criteria) this;
        }

        public Criteria andCpaNumIsNull() {
            addCriterion("CPA_NUM is null");
            return (Criteria) this;
        }

        public Criteria andCpaNumIsNotNull() {
            addCriterion("CPA_NUM is not null");
            return (Criteria) this;
        }

        public Criteria andCpaNumEqualTo(Integer value) {
            addCriterion("CPA_NUM =", value, "cpaNum");
            return (Criteria) this;
        }

        public Criteria andCpaNumNotEqualTo(Integer value) {
            addCriterion("CPA_NUM <>", value, "cpaNum");
            return (Criteria) this;
        }

        public Criteria andCpaNumGreaterThan(Integer value) {
            addCriterion("CPA_NUM >", value, "cpaNum");
            return (Criteria) this;
        }

        public Criteria andCpaNumGreaterThanOrEqualTo(Integer value) {
            addCriterion("CPA_NUM >=", value, "cpaNum");
            return (Criteria) this;
        }

        public Criteria andCpaNumLessThan(Integer value) {
            addCriterion("CPA_NUM <", value, "cpaNum");
            return (Criteria) this;
        }

        public Criteria andCpaNumLessThanOrEqualTo(Integer value) {
            addCriterion("CPA_NUM <=", value, "cpaNum");
            return (Criteria) this;
        }

        public Criteria andCpaNumIn(List<Integer> values) {
            addCriterion("CPA_NUM in", values, "cpaNum");
            return (Criteria) this;
        }

        public Criteria andCpaNumNotIn(List<Integer> values) {
            addCriterion("CPA_NUM not in", values, "cpaNum");
            return (Criteria) this;
        }

        public Criteria andCpaNumBetween(Integer value1, Integer value2) {
            addCriterion("CPA_NUM between", value1, value2, "cpaNum");
            return (Criteria) this;
        }

        public Criteria andCpaNumNotBetween(Integer value1, Integer value2) {
            addCriterion("CPA_NUM not between", value1, value2, "cpaNum");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeIsNull() {
            addCriterion("CPA_CREATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeIsNotNull() {
            addCriterion("CPA_CREATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeEqualTo(Date value) {
            addCriterion("CPA_CREATE_TIME =", value, "cpaCreateTime");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeNotEqualTo(Date value) {
            addCriterion("CPA_CREATE_TIME <>", value, "cpaCreateTime");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeGreaterThan(Date value) {
            addCriterion("CPA_CREATE_TIME >", value, "cpaCreateTime");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CPA_CREATE_TIME >=", value, "cpaCreateTime");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeLessThan(Date value) {
            addCriterion("CPA_CREATE_TIME <", value, "cpaCreateTime");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeLessThanOrEqualTo(Date value) {
            addCriterion("CPA_CREATE_TIME <=", value, "cpaCreateTime");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeIn(List<Date> values) {
            addCriterion("CPA_CREATE_TIME in", values, "cpaCreateTime");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeNotIn(List<Date> values) {
            addCriterion("CPA_CREATE_TIME not in", values, "cpaCreateTime");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeBetween(Date value1, Date value2) {
            addCriterion("CPA_CREATE_TIME between", value1, value2, "cpaCreateTime");
            return (Criteria) this;
        }

        public Criteria andCpaCreateTimeNotBetween(Date value1, Date value2) {
            addCriterion("CPA_CREATE_TIME not between", value1, value2, "cpaCreateTime");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeIsNull() {
            addCriterion("CPA_FINISH_TIME is null");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeIsNotNull() {
            addCriterion("CPA_FINISH_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeEqualTo(Date value) {
            addCriterion("CPA_FINISH_TIME =", value, "cpaFinishTime");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeNotEqualTo(Date value) {
            addCriterion("CPA_FINISH_TIME <>", value, "cpaFinishTime");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeGreaterThan(Date value) {
            addCriterion("CPA_FINISH_TIME >", value, "cpaFinishTime");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CPA_FINISH_TIME >=", value, "cpaFinishTime");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeLessThan(Date value) {
            addCriterion("CPA_FINISH_TIME <", value, "cpaFinishTime");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeLessThanOrEqualTo(Date value) {
            addCriterion("CPA_FINISH_TIME <=", value, "cpaFinishTime");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeIn(List<Date> values) {
            addCriterion("CPA_FINISH_TIME in", values, "cpaFinishTime");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeNotIn(List<Date> values) {
            addCriterion("CPA_FINISH_TIME not in", values, "cpaFinishTime");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeBetween(Date value1, Date value2) {
            addCriterion("CPA_FINISH_TIME between", value1, value2, "cpaFinishTime");
            return (Criteria) this;
        }

        public Criteria andCpaFinishTimeNotBetween(Date value1, Date value2) {
            addCriterion("CPA_FINISH_TIME not between", value1, value2, "cpaFinishTime");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusIsNull() {
            addCriterion("CPA_ANALYZ_STATUS is null");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusIsNotNull() {
            addCriterion("CPA_ANALYZ_STATUS is not null");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusEqualTo(String value) {
            addCriterion("CPA_ANALYZ_STATUS =", value, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusNotEqualTo(String value) {
            addCriterion("CPA_ANALYZ_STATUS <>", value, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusGreaterThan(String value) {
            addCriterion("CPA_ANALYZ_STATUS >", value, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_ANALYZ_STATUS >=", value, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusLessThan(String value) {
            addCriterion("CPA_ANALYZ_STATUS <", value, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusLessThanOrEqualTo(String value) {
            addCriterion("CPA_ANALYZ_STATUS <=", value, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusLike(String value) {
            addCriterion("CPA_ANALYZ_STATUS like", value, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusNotLike(String value) {
            addCriterion("CPA_ANALYZ_STATUS not like", value, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusIn(List<String> values) {
            addCriterion("CPA_ANALYZ_STATUS in", values, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusNotIn(List<String> values) {
            addCriterion("CPA_ANALYZ_STATUS not in", values, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusBetween(String value1, String value2) {
            addCriterion("CPA_ANALYZ_STATUS between", value1, value2, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaAnalyzStatusNotBetween(String value1, String value2) {
            addCriterion("CPA_ANALYZ_STATUS not between", value1, value2, "cpaAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeIsNull() {
            addCriterion("CPA_START_TIME is null");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeIsNotNull() {
            addCriterion("CPA_START_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeEqualTo(Date value) {
            addCriterion("CPA_START_TIME =", value, "cpaStartTime");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeNotEqualTo(Date value) {
            addCriterion("CPA_START_TIME <>", value, "cpaStartTime");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeGreaterThan(Date value) {
            addCriterion("CPA_START_TIME >", value, "cpaStartTime");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CPA_START_TIME >=", value, "cpaStartTime");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeLessThan(Date value) {
            addCriterion("CPA_START_TIME <", value, "cpaStartTime");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeLessThanOrEqualTo(Date value) {
            addCriterion("CPA_START_TIME <=", value, "cpaStartTime");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeIn(List<Date> values) {
            addCriterion("CPA_START_TIME in", values, "cpaStartTime");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeNotIn(List<Date> values) {
            addCriterion("CPA_START_TIME not in", values, "cpaStartTime");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeBetween(Date value1, Date value2) {
            addCriterion("CPA_START_TIME between", value1, value2, "cpaStartTime");
            return (Criteria) this;
        }

        public Criteria andCpaStartTimeNotBetween(Date value1, Date value2) {
            addCriterion("CPA_START_TIME not between", value1, value2, "cpaStartTime");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeIsNull() {
            addCriterion("CPA_END_TIME is null");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeIsNotNull() {
            addCriterion("CPA_END_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeEqualTo(Date value) {
            addCriterion("CPA_END_TIME =", value, "cpaEndTime");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeNotEqualTo(Date value) {
            addCriterion("CPA_END_TIME <>", value, "cpaEndTime");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeGreaterThan(Date value) {
            addCriterion("CPA_END_TIME >", value, "cpaEndTime");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CPA_END_TIME >=", value, "cpaEndTime");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeLessThan(Date value) {
            addCriterion("CPA_END_TIME <", value, "cpaEndTime");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeLessThanOrEqualTo(Date value) {
            addCriterion("CPA_END_TIME <=", value, "cpaEndTime");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeIn(List<Date> values) {
            addCriterion("CPA_END_TIME in", values, "cpaEndTime");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeNotIn(List<Date> values) {
            addCriterion("CPA_END_TIME not in", values, "cpaEndTime");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeBetween(Date value1, Date value2) {
            addCriterion("CPA_END_TIME between", value1, value2, "cpaEndTime");
            return (Criteria) this;
        }

        public Criteria andCpaEndTimeNotBetween(Date value1, Date value2) {
            addCriterion("CPA_END_TIME not between", value1, value2, "cpaEndTime");
            return (Criteria) this;
        }

        public Criteria andIsUseIsNull() {
            addCriterion("IS_USE is null");
            return (Criteria) this;
        }

        public Criteria andIsUseIsNotNull() {
            addCriterion("IS_USE is not null");
            return (Criteria) this;
        }

        public Criteria andIsUseEqualTo(String value) {
            addCriterion("IS_USE =", value, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseNotEqualTo(String value) {
            addCriterion("IS_USE <>", value, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseGreaterThan(String value) {
            addCriterion("IS_USE >", value, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseGreaterThanOrEqualTo(String value) {
            addCriterion("IS_USE >=", value, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseLessThan(String value) {
            addCriterion("IS_USE <", value, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseLessThanOrEqualTo(String value) {
            addCriterion("IS_USE <=", value, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseLike(String value) {
            addCriterion("IS_USE like", value, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseNotLike(String value) {
            addCriterion("IS_USE not like", value, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseIn(List<String> values) {
            addCriterion("IS_USE in", values, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseNotIn(List<String> values) {
            addCriterion("IS_USE not in", values, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseBetween(String value1, String value2) {
            addCriterion("IS_USE between", value1, value2, "isUse");
            return (Criteria) this;
        }

        public Criteria andIsUseNotBetween(String value1, String value2) {
            addCriterion("IS_USE not between", value1, value2, "isUse");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserIsNull() {
            addCriterion("CPA_CREATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserIsNotNull() {
            addCriterion("CPA_CREATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserEqualTo(String value) {
            addCriterion("CPA_CREATE_USER =", value, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserNotEqualTo(String value) {
            addCriterion("CPA_CREATE_USER <>", value, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserGreaterThan(String value) {
            addCriterion("CPA_CREATE_USER >", value, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_CREATE_USER >=", value, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserLessThan(String value) {
            addCriterion("CPA_CREATE_USER <", value, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserLessThanOrEqualTo(String value) {
            addCriterion("CPA_CREATE_USER <=", value, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserLike(String value) {
            addCriterion("CPA_CREATE_USER like", value, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserNotLike(String value) {
            addCriterion("CPA_CREATE_USER not like", value, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserIn(List<String> values) {
            addCriterion("CPA_CREATE_USER in", values, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserNotIn(List<String> values) {
            addCriterion("CPA_CREATE_USER not in", values, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserBetween(String value1, String value2) {
            addCriterion("CPA_CREATE_USER between", value1, value2, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaCreateUserNotBetween(String value1, String value2) {
            addCriterion("CPA_CREATE_USER not between", value1, value2, "cpaCreateUser");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordIsNull() {
            addCriterion("CPA_PATH_WORD is null");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordIsNotNull() {
            addCriterion("CPA_PATH_WORD is not null");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordEqualTo(String value) {
            addCriterion("CPA_PATH_WORD =", value, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordNotEqualTo(String value) {
            addCriterion("CPA_PATH_WORD <>", value, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordGreaterThan(String value) {
            addCriterion("CPA_PATH_WORD >", value, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_PATH_WORD >=", value, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordLessThan(String value) {
            addCriterion("CPA_PATH_WORD <", value, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordLessThanOrEqualTo(String value) {
            addCriterion("CPA_PATH_WORD <=", value, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordLike(String value) {
            addCriterion("CPA_PATH_WORD like", value, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordNotLike(String value) {
            addCriterion("CPA_PATH_WORD not like", value, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordIn(List<String> values) {
            addCriterion("CPA_PATH_WORD in", values, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordNotIn(List<String> values) {
            addCriterion("CPA_PATH_WORD not in", values, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordBetween(String value1, String value2) {
            addCriterion("CPA_PATH_WORD between", value1, value2, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathWordNotBetween(String value1, String value2) {
            addCriterion("CPA_PATH_WORD not between", value1, value2, "cpaPathWord");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfIsNull() {
            addCriterion("CPA_PATH_PDF is null");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfIsNotNull() {
            addCriterion("CPA_PATH_PDF is not null");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfEqualTo(String value) {
            addCriterion("CPA_PATH_PDF =", value, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfNotEqualTo(String value) {
            addCriterion("CPA_PATH_PDF <>", value, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfGreaterThan(String value) {
            addCriterion("CPA_PATH_PDF >", value, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_PATH_PDF >=", value, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfLessThan(String value) {
            addCriterion("CPA_PATH_PDF <", value, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfLessThanOrEqualTo(String value) {
            addCriterion("CPA_PATH_PDF <=", value, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfLike(String value) {
            addCriterion("CPA_PATH_PDF like", value, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfNotLike(String value) {
            addCriterion("CPA_PATH_PDF not like", value, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfIn(List<String> values) {
            addCriterion("CPA_PATH_PDF in", values, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfNotIn(List<String> values) {
            addCriterion("CPA_PATH_PDF not in", values, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfBetween(String value1, String value2) {
            addCriterion("CPA_PATH_PDF between", value1, value2, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaPathPdfNotBetween(String value1, String value2) {
            addCriterion("CPA_PATH_PDF not between", value1, value2, "cpaPathPdf");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserIsNull() {
            addCriterion("CPA_UPDATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserIsNotNull() {
            addCriterion("CPA_UPDATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserEqualTo(String value) {
            addCriterion("CPA_UPDATE_USER =", value, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserNotEqualTo(String value) {
            addCriterion("CPA_UPDATE_USER <>", value, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserGreaterThan(String value) {
            addCriterion("CPA_UPDATE_USER >", value, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_UPDATE_USER >=", value, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserLessThan(String value) {
            addCriterion("CPA_UPDATE_USER <", value, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserLessThanOrEqualTo(String value) {
            addCriterion("CPA_UPDATE_USER <=", value, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserLike(String value) {
            addCriterion("CPA_UPDATE_USER like", value, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserNotLike(String value) {
            addCriterion("CPA_UPDATE_USER not like", value, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserIn(List<String> values) {
            addCriterion("CPA_UPDATE_USER in", values, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserNotIn(List<String> values) {
            addCriterion("CPA_UPDATE_USER not in", values, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserBetween(String value1, String value2) {
            addCriterion("CPA_UPDATE_USER between", value1, value2, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateUserNotBetween(String value1, String value2) {
            addCriterion("CPA_UPDATE_USER not between", value1, value2, "cpaUpdateUser");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeIsNull() {
            addCriterion("CPA_UPDATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeIsNotNull() {
            addCriterion("CPA_UPDATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeEqualTo(Date value) {
            addCriterion("CPA_UPDATE_TIME =", value, "cpaUpdateTime");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeNotEqualTo(Date value) {
            addCriterion("CPA_UPDATE_TIME <>", value, "cpaUpdateTime");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeGreaterThan(Date value) {
            addCriterion("CPA_UPDATE_TIME >", value, "cpaUpdateTime");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CPA_UPDATE_TIME >=", value, "cpaUpdateTime");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeLessThan(Date value) {
            addCriterion("CPA_UPDATE_TIME <", value, "cpaUpdateTime");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeLessThanOrEqualTo(Date value) {
            addCriterion("CPA_UPDATE_TIME <=", value, "cpaUpdateTime");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeIn(List<Date> values) {
            addCriterion("CPA_UPDATE_TIME in", values, "cpaUpdateTime");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeNotIn(List<Date> values) {
            addCriterion("CPA_UPDATE_TIME not in", values, "cpaUpdateTime");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeBetween(Date value1, Date value2) {
            addCriterion("CPA_UPDATE_TIME between", value1, value2, "cpaUpdateTime");
            return (Criteria) this;
        }

        public Criteria andCpaUpdateTimeNotBetween(Date value1, Date value2) {
            addCriterion("CPA_UPDATE_TIME not between", value1, value2, "cpaUpdateTime");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}