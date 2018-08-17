package com.unicom.tancms.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MonitoringSchemeExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public MonitoringSchemeExample() {
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

        public Criteria andPlanIdIsNull() {
            addCriterion("PLAN_ID is null");
            return (Criteria) this;
        }

        public Criteria andPlanIdIsNotNull() {
            addCriterion("PLAN_ID is not null");
            return (Criteria) this;
        }

        public Criteria andPlanIdEqualTo(String value) {
            addCriterion("PLAN_ID =", value, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdNotEqualTo(String value) {
            addCriterion("PLAN_ID <>", value, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdGreaterThan(String value) {
            addCriterion("PLAN_ID >", value, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdGreaterThanOrEqualTo(String value) {
            addCriterion("PLAN_ID >=", value, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdLessThan(String value) {
            addCriterion("PLAN_ID <", value, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdLessThanOrEqualTo(String value) {
            addCriterion("PLAN_ID <=", value, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdLike(String value) {
            addCriterion("PLAN_ID like", value, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdNotLike(String value) {
            addCriterion("PLAN_ID not like", value, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdIn(List<String> values) {
            addCriterion("PLAN_ID in", values, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdNotIn(List<String> values) {
            addCriterion("PLAN_ID not in", values, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdBetween(String value1, String value2) {
            addCriterion("PLAN_ID between", value1, value2, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanIdNotBetween(String value1, String value2) {
            addCriterion("PLAN_ID not between", value1, value2, "planId");
            return (Criteria) this;
        }

        public Criteria andPlanNameIsNull() {
            addCriterion("PLAN_NAME is null");
            return (Criteria) this;
        }

        public Criteria andPlanNameIsNotNull() {
            addCriterion("PLAN_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andPlanNameEqualTo(String value) {
            addCriterion("PLAN_NAME =", value, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameNotEqualTo(String value) {
            addCriterion("PLAN_NAME <>", value, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameGreaterThan(String value) {
            addCriterion("PLAN_NAME >", value, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameGreaterThanOrEqualTo(String value) {
            addCriterion("PLAN_NAME >=", value, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameLessThan(String value) {
            addCriterion("PLAN_NAME <", value, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameLessThanOrEqualTo(String value) {
            addCriterion("PLAN_NAME <=", value, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameLike(String value) {
            addCriterion("PLAN_NAME like", value, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameNotLike(String value) {
            addCriterion("PLAN_NAME not like", value, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameIn(List<String> values) {
            addCriterion("PLAN_NAME in", values, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameNotIn(List<String> values) {
            addCriterion("PLAN_NAME not in", values, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameBetween(String value1, String value2) {
            addCriterion("PLAN_NAME between", value1, value2, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanNameNotBetween(String value1, String value2) {
            addCriterion("PLAN_NAME not between", value1, value2, "planName");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsIsNull() {
            addCriterion("PLAN_KEYWORDS is null");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsIsNotNull() {
            addCriterion("PLAN_KEYWORDS is not null");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsEqualTo(String value) {
            addCriterion("PLAN_KEYWORDS =", value, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsNotEqualTo(String value) {
            addCriterion("PLAN_KEYWORDS <>", value, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsGreaterThan(String value) {
            addCriterion("PLAN_KEYWORDS >", value, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsGreaterThanOrEqualTo(String value) {
            addCriterion("PLAN_KEYWORDS >=", value, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsLessThan(String value) {
            addCriterion("PLAN_KEYWORDS <", value, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsLessThanOrEqualTo(String value) {
            addCriterion("PLAN_KEYWORDS <=", value, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsLike(String value) {
            addCriterion("PLAN_KEYWORDS like", value, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsNotLike(String value) {
            addCriterion("PLAN_KEYWORDS not like", value, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsIn(List<String> values) {
            addCriterion("PLAN_KEYWORDS in", values, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsNotIn(List<String> values) {
            addCriterion("PLAN_KEYWORDS not in", values, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsBetween(String value1, String value2) {
            addCriterion("PLAN_KEYWORDS between", value1, value2, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanKeywordsNotBetween(String value1, String value2) {
            addCriterion("PLAN_KEYWORDS not between", value1, value2, "planKeywords");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeIsNull() {
            addCriterion("PLAN_EXCLUDE is null");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeIsNotNull() {
            addCriterion("PLAN_EXCLUDE is not null");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeEqualTo(String value) {
            addCriterion("PLAN_EXCLUDE =", value, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeNotEqualTo(String value) {
            addCriterion("PLAN_EXCLUDE <>", value, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeGreaterThan(String value) {
            addCriterion("PLAN_EXCLUDE >", value, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeGreaterThanOrEqualTo(String value) {
            addCriterion("PLAN_EXCLUDE >=", value, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeLessThan(String value) {
            addCriterion("PLAN_EXCLUDE <", value, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeLessThanOrEqualTo(String value) {
            addCriterion("PLAN_EXCLUDE <=", value, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeLike(String value) {
            addCriterion("PLAN_EXCLUDE like", value, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeNotLike(String value) {
            addCriterion("PLAN_EXCLUDE not like", value, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeIn(List<String> values) {
            addCriterion("PLAN_EXCLUDE in", values, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeNotIn(List<String> values) {
            addCriterion("PLAN_EXCLUDE not in", values, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeBetween(String value1, String value2) {
            addCriterion("PLAN_EXCLUDE between", value1, value2, "planExclude");
            return (Criteria) this;
        }

        public Criteria andPlanExcludeNotBetween(String value1, String value2) {
            addCriterion("PLAN_EXCLUDE not between", value1, value2, "planExclude");
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

        public Criteria andPlanCreateUserIsNull() {
            addCriterion("PLAN_CREATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserIsNotNull() {
            addCriterion("PLAN_CREATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserEqualTo(String value) {
            addCriterion("PLAN_CREATE_USER =", value, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserNotEqualTo(String value) {
            addCriterion("PLAN_CREATE_USER <>", value, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserGreaterThan(String value) {
            addCriterion("PLAN_CREATE_USER >", value, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserGreaterThanOrEqualTo(String value) {
            addCriterion("PLAN_CREATE_USER >=", value, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserLessThan(String value) {
            addCriterion("PLAN_CREATE_USER <", value, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserLessThanOrEqualTo(String value) {
            addCriterion("PLAN_CREATE_USER <=", value, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserLike(String value) {
            addCriterion("PLAN_CREATE_USER like", value, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserNotLike(String value) {
            addCriterion("PLAN_CREATE_USER not like", value, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserIn(List<String> values) {
            addCriterion("PLAN_CREATE_USER in", values, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserNotIn(List<String> values) {
            addCriterion("PLAN_CREATE_USER not in", values, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserBetween(String value1, String value2) {
            addCriterion("PLAN_CREATE_USER between", value1, value2, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanCreateUserNotBetween(String value1, String value2) {
            addCriterion("PLAN_CREATE_USER not between", value1, value2, "planCreateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeIsNull() {
            addCriterion("PLAN_UPDATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeIsNotNull() {
            addCriterion("PLAN_UPDATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeEqualTo(Date value) {
            addCriterion("PLAN_UPDATE_TIME =", value, "planUpdateTime");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeNotEqualTo(Date value) {
            addCriterion("PLAN_UPDATE_TIME <>", value, "planUpdateTime");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeGreaterThan(Date value) {
            addCriterion("PLAN_UPDATE_TIME >", value, "planUpdateTime");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("PLAN_UPDATE_TIME >=", value, "planUpdateTime");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeLessThan(Date value) {
            addCriterion("PLAN_UPDATE_TIME <", value, "planUpdateTime");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeLessThanOrEqualTo(Date value) {
            addCriterion("PLAN_UPDATE_TIME <=", value, "planUpdateTime");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeIn(List<Date> values) {
            addCriterion("PLAN_UPDATE_TIME in", values, "planUpdateTime");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeNotIn(List<Date> values) {
            addCriterion("PLAN_UPDATE_TIME not in", values, "planUpdateTime");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeBetween(Date value1, Date value2) {
            addCriterion("PLAN_UPDATE_TIME between", value1, value2, "planUpdateTime");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateTimeNotBetween(Date value1, Date value2) {
            addCriterion("PLAN_UPDATE_TIME not between", value1, value2, "planUpdateTime");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserIsNull() {
            addCriterion("PLAN_UPDATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserIsNotNull() {
            addCriterion("PLAN_UPDATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserEqualTo(String value) {
            addCriterion("PLAN_UPDATE_USER =", value, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserNotEqualTo(String value) {
            addCriterion("PLAN_UPDATE_USER <>", value, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserGreaterThan(String value) {
            addCriterion("PLAN_UPDATE_USER >", value, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserGreaterThanOrEqualTo(String value) {
            addCriterion("PLAN_UPDATE_USER >=", value, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserLessThan(String value) {
            addCriterion("PLAN_UPDATE_USER <", value, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserLessThanOrEqualTo(String value) {
            addCriterion("PLAN_UPDATE_USER <=", value, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserLike(String value) {
            addCriterion("PLAN_UPDATE_USER like", value, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserNotLike(String value) {
            addCriterion("PLAN_UPDATE_USER not like", value, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserIn(List<String> values) {
            addCriterion("PLAN_UPDATE_USER in", values, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserNotIn(List<String> values) {
            addCriterion("PLAN_UPDATE_USER not in", values, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserBetween(String value1, String value2) {
            addCriterion("PLAN_UPDATE_USER between", value1, value2, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanUpdateUserNotBetween(String value1, String value2) {
            addCriterion("PLAN_UPDATE_USER not between", value1, value2, "planUpdateUser");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdIsNull() {
            addCriterion("PLAN_CLASS_ID is null");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdIsNotNull() {
            addCriterion("PLAN_CLASS_ID is not null");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdEqualTo(String value) {
            addCriterion("PLAN_CLASS_ID =", value, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdNotEqualTo(String value) {
            addCriterion("PLAN_CLASS_ID <>", value, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdGreaterThan(String value) {
            addCriterion("PLAN_CLASS_ID >", value, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdGreaterThanOrEqualTo(String value) {
            addCriterion("PLAN_CLASS_ID >=", value, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdLessThan(String value) {
            addCriterion("PLAN_CLASS_ID <", value, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdLessThanOrEqualTo(String value) {
            addCriterion("PLAN_CLASS_ID <=", value, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdLike(String value) {
            addCriterion("PLAN_CLASS_ID like", value, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdNotLike(String value) {
            addCriterion("PLAN_CLASS_ID not like", value, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdIn(List<String> values) {
            addCriterion("PLAN_CLASS_ID in", values, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdNotIn(List<String> values) {
            addCriterion("PLAN_CLASS_ID not in", values, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdBetween(String value1, String value2) {
            addCriterion("PLAN_CLASS_ID between", value1, value2, "planClassId");
            return (Criteria) this;
        }

        public Criteria andPlanClassIdNotBetween(String value1, String value2) {
            addCriterion("PLAN_CLASS_ID not between", value1, value2, "planClassId");
            return (Criteria) this;
        }

        public Criteria andStatusIsNull() {
            addCriterion("STATUS is null");
            return (Criteria) this;
        }

        public Criteria andStatusIsNotNull() {
            addCriterion("STATUS is not null");
            return (Criteria) this;
        }

        public Criteria andStatusEqualTo(String value) {
            addCriterion("STATUS =", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotEqualTo(String value) {
            addCriterion("STATUS <>", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThan(String value) {
            addCriterion("STATUS >", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThanOrEqualTo(String value) {
            addCriterion("STATUS >=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThan(String value) {
            addCriterion("STATUS <", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThanOrEqualTo(String value) {
            addCriterion("STATUS <=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLike(String value) {
            addCriterion("STATUS like", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotLike(String value) {
            addCriterion("STATUS not like", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusIn(List<String> values) {
            addCriterion("STATUS in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotIn(List<String> values) {
            addCriterion("STATUS not in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusBetween(String value1, String value2) {
            addCriterion("STATUS between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotBetween(String value1, String value2) {
            addCriterion("STATUS not between", value1, value2, "status");
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