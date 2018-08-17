package com.unicom.tancms.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MonitoringSchemeClassifyExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public MonitoringSchemeClassifyExample() {
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

        public Criteria andPlanClassNameIsNull() {
            addCriterion("PLAN_CLASS_NAME is null");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameIsNotNull() {
            addCriterion("PLAN_CLASS_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameEqualTo(String value) {
            addCriterion("PLAN_CLASS_NAME =", value, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameNotEqualTo(String value) {
            addCriterion("PLAN_CLASS_NAME <>", value, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameGreaterThan(String value) {
            addCriterion("PLAN_CLASS_NAME >", value, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameGreaterThanOrEqualTo(String value) {
            addCriterion("PLAN_CLASS_NAME >=", value, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameLessThan(String value) {
            addCriterion("PLAN_CLASS_NAME <", value, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameLessThanOrEqualTo(String value) {
            addCriterion("PLAN_CLASS_NAME <=", value, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameLike(String value) {
            addCriterion("PLAN_CLASS_NAME like", value, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameNotLike(String value) {
            addCriterion("PLAN_CLASS_NAME not like", value, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameIn(List<String> values) {
            addCriterion("PLAN_CLASS_NAME in", values, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameNotIn(List<String> values) {
            addCriterion("PLAN_CLASS_NAME not in", values, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameBetween(String value1, String value2) {
            addCriterion("PLAN_CLASS_NAME between", value1, value2, "planClassName");
            return (Criteria) this;
        }

        public Criteria andPlanClassNameNotBetween(String value1, String value2) {
            addCriterion("PLAN_CLASS_NAME not between", value1, value2, "planClassName");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserIsNull() {
            addCriterion("CLASS_CREATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserIsNotNull() {
            addCriterion("CLASS_CREATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserEqualTo(String value) {
            addCriterion("CLASS_CREATE_USER =", value, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserNotEqualTo(String value) {
            addCriterion("CLASS_CREATE_USER <>", value, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserGreaterThan(String value) {
            addCriterion("CLASS_CREATE_USER >", value, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserGreaterThanOrEqualTo(String value) {
            addCriterion("CLASS_CREATE_USER >=", value, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserLessThan(String value) {
            addCriterion("CLASS_CREATE_USER <", value, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserLessThanOrEqualTo(String value) {
            addCriterion("CLASS_CREATE_USER <=", value, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserLike(String value) {
            addCriterion("CLASS_CREATE_USER like", value, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserNotLike(String value) {
            addCriterion("CLASS_CREATE_USER not like", value, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserIn(List<String> values) {
            addCriterion("CLASS_CREATE_USER in", values, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserNotIn(List<String> values) {
            addCriterion("CLASS_CREATE_USER not in", values, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserBetween(String value1, String value2) {
            addCriterion("CLASS_CREATE_USER between", value1, value2, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateUserNotBetween(String value1, String value2) {
            addCriterion("CLASS_CREATE_USER not between", value1, value2, "classCreateUser");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeIsNull() {
            addCriterion("CLASS_CREATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeIsNotNull() {
            addCriterion("CLASS_CREATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeEqualTo(Date value) {
            addCriterion("CLASS_CREATE_TIME =", value, "classCreateTime");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeNotEqualTo(Date value) {
            addCriterion("CLASS_CREATE_TIME <>", value, "classCreateTime");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeGreaterThan(Date value) {
            addCriterion("CLASS_CREATE_TIME >", value, "classCreateTime");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CLASS_CREATE_TIME >=", value, "classCreateTime");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeLessThan(Date value) {
            addCriterion("CLASS_CREATE_TIME <", value, "classCreateTime");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeLessThanOrEqualTo(Date value) {
            addCriterion("CLASS_CREATE_TIME <=", value, "classCreateTime");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeIn(List<Date> values) {
            addCriterion("CLASS_CREATE_TIME in", values, "classCreateTime");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeNotIn(List<Date> values) {
            addCriterion("CLASS_CREATE_TIME not in", values, "classCreateTime");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeBetween(Date value1, Date value2) {
            addCriterion("CLASS_CREATE_TIME between", value1, value2, "classCreateTime");
            return (Criteria) this;
        }

        public Criteria andClassCreateTimeNotBetween(Date value1, Date value2) {
            addCriterion("CLASS_CREATE_TIME not between", value1, value2, "classCreateTime");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserIsNull() {
            addCriterion("CLASS_UPDATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserIsNotNull() {
            addCriterion("CLASS_UPDATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserEqualTo(String value) {
            addCriterion("CLASS_UPDATE_USER =", value, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserNotEqualTo(String value) {
            addCriterion("CLASS_UPDATE_USER <>", value, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserGreaterThan(String value) {
            addCriterion("CLASS_UPDATE_USER >", value, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserGreaterThanOrEqualTo(String value) {
            addCriterion("CLASS_UPDATE_USER >=", value, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserLessThan(String value) {
            addCriterion("CLASS_UPDATE_USER <", value, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserLessThanOrEqualTo(String value) {
            addCriterion("CLASS_UPDATE_USER <=", value, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserLike(String value) {
            addCriterion("CLASS_UPDATE_USER like", value, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserNotLike(String value) {
            addCriterion("CLASS_UPDATE_USER not like", value, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserIn(List<String> values) {
            addCriterion("CLASS_UPDATE_USER in", values, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserNotIn(List<String> values) {
            addCriterion("CLASS_UPDATE_USER not in", values, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserBetween(String value1, String value2) {
            addCriterion("CLASS_UPDATE_USER between", value1, value2, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateUserNotBetween(String value1, String value2) {
            addCriterion("CLASS_UPDATE_USER not between", value1, value2, "classUpdateUser");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeIsNull() {
            addCriterion("CLASS_UPDATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeIsNotNull() {
            addCriterion("CLASS_UPDATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeEqualTo(Date value) {
            addCriterion("CLASS_UPDATE_TIME =", value, "classUpdateTime");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeNotEqualTo(Date value) {
            addCriterion("CLASS_UPDATE_TIME <>", value, "classUpdateTime");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeGreaterThan(Date value) {
            addCriterion("CLASS_UPDATE_TIME >", value, "classUpdateTime");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CLASS_UPDATE_TIME >=", value, "classUpdateTime");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeLessThan(Date value) {
            addCriterion("CLASS_UPDATE_TIME <", value, "classUpdateTime");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeLessThanOrEqualTo(Date value) {
            addCriterion("CLASS_UPDATE_TIME <=", value, "classUpdateTime");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeIn(List<Date> values) {
            addCriterion("CLASS_UPDATE_TIME in", values, "classUpdateTime");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeNotIn(List<Date> values) {
            addCriterion("CLASS_UPDATE_TIME not in", values, "classUpdateTime");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeBetween(Date value1, Date value2) {
            addCriterion("CLASS_UPDATE_TIME between", value1, value2, "classUpdateTime");
            return (Criteria) this;
        }

        public Criteria andClassUpdateTimeNotBetween(Date value1, Date value2) {
            addCriterion("CLASS_UPDATE_TIME not between", value1, value2, "classUpdateTime");
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