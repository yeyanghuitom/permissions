package com.unicom.tancms.pojo;

import java.util.ArrayList;
import java.util.List;

public class CompetitionTableExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public CompetitionTableExample() {
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

        public Criteria andCpaIdIsNull() {
            addCriterion("CPA_ID is null");
            return (Criteria) this;
        }

        public Criteria andCpaIdIsNotNull() {
            addCriterion("CPA_ID is not null");
            return (Criteria) this;
        }

        public Criteria andCpaIdEqualTo(String value) {
            addCriterion("CPA_ID =", value, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdNotEqualTo(String value) {
            addCriterion("CPA_ID <>", value, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdGreaterThan(String value) {
            addCriterion("CPA_ID >", value, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_ID >=", value, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdLessThan(String value) {
            addCriterion("CPA_ID <", value, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdLessThanOrEqualTo(String value) {
            addCriterion("CPA_ID <=", value, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdLike(String value) {
            addCriterion("CPA_ID like", value, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdNotLike(String value) {
            addCriterion("CPA_ID not like", value, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdIn(List<String> values) {
            addCriterion("CPA_ID in", values, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdNotIn(List<String> values) {
            addCriterion("CPA_ID not in", values, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdBetween(String value1, String value2) {
            addCriterion("CPA_ID between", value1, value2, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaIdNotBetween(String value1, String value2) {
            addCriterion("CPA_ID not between", value1, value2, "cpaId");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeIsNull() {
            addCriterion("CPA_EXCLUDE is null");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeIsNotNull() {
            addCriterion("CPA_EXCLUDE is not null");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeEqualTo(String value) {
            addCriterion("CPA_EXCLUDE =", value, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeNotEqualTo(String value) {
            addCriterion("CPA_EXCLUDE <>", value, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeGreaterThan(String value) {
            addCriterion("CPA_EXCLUDE >", value, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_EXCLUDE >=", value, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeLessThan(String value) {
            addCriterion("CPA_EXCLUDE <", value, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeLessThanOrEqualTo(String value) {
            addCriterion("CPA_EXCLUDE <=", value, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeLike(String value) {
            addCriterion("CPA_EXCLUDE like", value, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeNotLike(String value) {
            addCriterion("CPA_EXCLUDE not like", value, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeIn(List<String> values) {
            addCriterion("CPA_EXCLUDE in", values, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeNotIn(List<String> values) {
            addCriterion("CPA_EXCLUDE not in", values, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeBetween(String value1, String value2) {
            addCriterion("CPA_EXCLUDE between", value1, value2, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaExcludeNotBetween(String value1, String value2) {
            addCriterion("CPA_EXCLUDE not between", value1, value2, "cpaExclude");
            return (Criteria) this;
        }

        public Criteria andCpaNameIsNull() {
            addCriterion("CPA_NAME is null");
            return (Criteria) this;
        }

        public Criteria andCpaNameIsNotNull() {
            addCriterion("CPA_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andCpaNameEqualTo(String value) {
            addCriterion("CPA_NAME =", value, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameNotEqualTo(String value) {
            addCriterion("CPA_NAME <>", value, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameGreaterThan(String value) {
            addCriterion("CPA_NAME >", value, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_NAME >=", value, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameLessThan(String value) {
            addCriterion("CPA_NAME <", value, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameLessThanOrEqualTo(String value) {
            addCriterion("CPA_NAME <=", value, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameLike(String value) {
            addCriterion("CPA_NAME like", value, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameNotLike(String value) {
            addCriterion("CPA_NAME not like", value, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameIn(List<String> values) {
            addCriterion("CPA_NAME in", values, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameNotIn(List<String> values) {
            addCriterion("CPA_NAME not in", values, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameBetween(String value1, String value2) {
            addCriterion("CPA_NAME between", value1, value2, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaNameNotBetween(String value1, String value2) {
            addCriterion("CPA_NAME not between", value1, value2, "cpaName");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdIsNull() {
            addCriterion("CPA_PLAN_ID is null");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdIsNotNull() {
            addCriterion("CPA_PLAN_ID is not null");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdEqualTo(String value) {
            addCriterion("CPA_PLAN_ID =", value, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdNotEqualTo(String value) {
            addCriterion("CPA_PLAN_ID <>", value, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdGreaterThan(String value) {
            addCriterion("CPA_PLAN_ID >", value, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_PLAN_ID >=", value, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdLessThan(String value) {
            addCriterion("CPA_PLAN_ID <", value, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdLessThanOrEqualTo(String value) {
            addCriterion("CPA_PLAN_ID <=", value, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdLike(String value) {
            addCriterion("CPA_PLAN_ID like", value, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdNotLike(String value) {
            addCriterion("CPA_PLAN_ID not like", value, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdIn(List<String> values) {
            addCriterion("CPA_PLAN_ID in", values, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdNotIn(List<String> values) {
            addCriterion("CPA_PLAN_ID not in", values, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdBetween(String value1, String value2) {
            addCriterion("CPA_PLAN_ID between", value1, value2, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaPlanIdNotBetween(String value1, String value2) {
            addCriterion("CPA_PLAN_ID not between", value1, value2, "cpaPlanId");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsIsNull() {
            addCriterion("CPA_KEYWORDS is null");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsIsNotNull() {
            addCriterion("CPA_KEYWORDS is not null");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsEqualTo(String value) {
            addCriterion("CPA_KEYWORDS =", value, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsNotEqualTo(String value) {
            addCriterion("CPA_KEYWORDS <>", value, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsGreaterThan(String value) {
            addCriterion("CPA_KEYWORDS >", value, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_KEYWORDS >=", value, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsLessThan(String value) {
            addCriterion("CPA_KEYWORDS <", value, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsLessThanOrEqualTo(String value) {
            addCriterion("CPA_KEYWORDS <=", value, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsLike(String value) {
            addCriterion("CPA_KEYWORDS like", value, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsNotLike(String value) {
            addCriterion("CPA_KEYWORDS not like", value, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsIn(List<String> values) {
            addCriterion("CPA_KEYWORDS in", values, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsNotIn(List<String> values) {
            addCriterion("CPA_KEYWORDS not in", values, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsBetween(String value1, String value2) {
            addCriterion("CPA_KEYWORDS between", value1, value2, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaKeywordsNotBetween(String value1, String value2) {
            addCriterion("CPA_KEYWORDS not between", value1, value2, "cpaKeywords");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanIsNull() {
            addCriterion("CPA_USE_PLAN is null");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanIsNotNull() {
            addCriterion("CPA_USE_PLAN is not null");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanEqualTo(String value) {
            addCriterion("CPA_USE_PLAN =", value, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanNotEqualTo(String value) {
            addCriterion("CPA_USE_PLAN <>", value, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanGreaterThan(String value) {
            addCriterion("CPA_USE_PLAN >", value, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanGreaterThanOrEqualTo(String value) {
            addCriterion("CPA_USE_PLAN >=", value, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanLessThan(String value) {
            addCriterion("CPA_USE_PLAN <", value, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanLessThanOrEqualTo(String value) {
            addCriterion("CPA_USE_PLAN <=", value, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanLike(String value) {
            addCriterion("CPA_USE_PLAN like", value, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanNotLike(String value) {
            addCriterion("CPA_USE_PLAN not like", value, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanIn(List<String> values) {
            addCriterion("CPA_USE_PLAN in", values, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanNotIn(List<String> values) {
            addCriterion("CPA_USE_PLAN not in", values, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanBetween(String value1, String value2) {
            addCriterion("CPA_USE_PLAN between", value1, value2, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andCpaUsePlanNotBetween(String value1, String value2) {
            addCriterion("CPA_USE_PLAN not between", value1, value2, "cpaUsePlan");
            return (Criteria) this;
        }

        public Criteria andIsDeleteIsNull() {
            addCriterion("IS_DELETE is null");
            return (Criteria) this;
        }

        public Criteria andIsDeleteIsNotNull() {
            addCriterion("IS_DELETE is not null");
            return (Criteria) this;
        }

        public Criteria andIsDeleteEqualTo(String value) {
            addCriterion("IS_DELETE =", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteNotEqualTo(String value) {
            addCriterion("IS_DELETE <>", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteGreaterThan(String value) {
            addCriterion("IS_DELETE >", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteGreaterThanOrEqualTo(String value) {
            addCriterion("IS_DELETE >=", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteLessThan(String value) {
            addCriterion("IS_DELETE <", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteLessThanOrEqualTo(String value) {
            addCriterion("IS_DELETE <=", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteLike(String value) {
            addCriterion("IS_DELETE like", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteNotLike(String value) {
            addCriterion("IS_DELETE not like", value, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteIn(List<String> values) {
            addCriterion("IS_DELETE in", values, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteNotIn(List<String> values) {
            addCriterion("IS_DELETE not in", values, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteBetween(String value1, String value2) {
            addCriterion("IS_DELETE between", value1, value2, "isDelete");
            return (Criteria) this;
        }

        public Criteria andIsDeleteNotBetween(String value1, String value2) {
            addCriterion("IS_DELETE not between", value1, value2, "isDelete");
            return (Criteria) this;
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