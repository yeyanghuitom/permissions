package com.unicom.tancms.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ProfessionalLabelExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public ProfessionalLabelExample() {
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

        public Criteria andLabel1IdIsNull() {
            addCriterion("LABEL1_ID is null");
            return (Criteria) this;
        }

        public Criteria andLabel1IdIsNotNull() {
            addCriterion("LABEL1_ID is not null");
            return (Criteria) this;
        }

        public Criteria andLabel1IdEqualTo(String value) {
            addCriterion("LABEL1_ID =", value, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdNotEqualTo(String value) {
            addCriterion("LABEL1_ID <>", value, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdGreaterThan(String value) {
            addCriterion("LABEL1_ID >", value, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdGreaterThanOrEqualTo(String value) {
            addCriterion("LABEL1_ID >=", value, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdLessThan(String value) {
            addCriterion("LABEL1_ID <", value, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdLessThanOrEqualTo(String value) {
            addCriterion("LABEL1_ID <=", value, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdLike(String value) {
            addCriterion("LABEL1_ID like", value, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdNotLike(String value) {
            addCriterion("LABEL1_ID not like", value, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdIn(List<String> values) {
            addCriterion("LABEL1_ID in", values, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdNotIn(List<String> values) {
            addCriterion("LABEL1_ID not in", values, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdBetween(String value1, String value2) {
            addCriterion("LABEL1_ID between", value1, value2, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1IdNotBetween(String value1, String value2) {
            addCriterion("LABEL1_ID not between", value1, value2, "label1Id");
            return (Criteria) this;
        }

        public Criteria andLabel1NameIsNull() {
            addCriterion("LABEL1_NAME is null");
            return (Criteria) this;
        }

        public Criteria andLabel1NameIsNotNull() {
            addCriterion("LABEL1_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andLabel1NameEqualTo(String value) {
            addCriterion("LABEL1_NAME =", value, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameNotEqualTo(String value) {
            addCriterion("LABEL1_NAME <>", value, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameGreaterThan(String value) {
            addCriterion("LABEL1_NAME >", value, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameGreaterThanOrEqualTo(String value) {
            addCriterion("LABEL1_NAME >=", value, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameLessThan(String value) {
            addCriterion("LABEL1_NAME <", value, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameLessThanOrEqualTo(String value) {
            addCriterion("LABEL1_NAME <=", value, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameLike(String value) {
            addCriterion("LABEL1_NAME like", value, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameNotLike(String value) {
            addCriterion("LABEL1_NAME not like", value, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameIn(List<String> values) {
            addCriterion("LABEL1_NAME in", values, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameNotIn(List<String> values) {
            addCriterion("LABEL1_NAME not in", values, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameBetween(String value1, String value2) {
            addCriterion("LABEL1_NAME between", value1, value2, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel1NameNotBetween(String value1, String value2) {
            addCriterion("LABEL1_NAME not between", value1, value2, "label1Name");
            return (Criteria) this;
        }

        public Criteria andLabel2IdIsNull() {
            addCriterion("LABEL2_ID is null");
            return (Criteria) this;
        }

        public Criteria andLabel2IdIsNotNull() {
            addCriterion("LABEL2_ID is not null");
            return (Criteria) this;
        }

        public Criteria andLabel2IdEqualTo(String value) {
            addCriterion("LABEL2_ID =", value, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdNotEqualTo(String value) {
            addCriterion("LABEL2_ID <>", value, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdGreaterThan(String value) {
            addCriterion("LABEL2_ID >", value, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdGreaterThanOrEqualTo(String value) {
            addCriterion("LABEL2_ID >=", value, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdLessThan(String value) {
            addCriterion("LABEL2_ID <", value, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdLessThanOrEqualTo(String value) {
            addCriterion("LABEL2_ID <=", value, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdLike(String value) {
            addCriterion("LABEL2_ID like", value, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdNotLike(String value) {
            addCriterion("LABEL2_ID not like", value, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdIn(List<String> values) {
            addCriterion("LABEL2_ID in", values, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdNotIn(List<String> values) {
            addCriterion("LABEL2_ID not in", values, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdBetween(String value1, String value2) {
            addCriterion("LABEL2_ID between", value1, value2, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2IdNotBetween(String value1, String value2) {
            addCriterion("LABEL2_ID not between", value1, value2, "label2Id");
            return (Criteria) this;
        }

        public Criteria andLabel2NameIsNull() {
            addCriterion("LABEL2_NAME is null");
            return (Criteria) this;
        }

        public Criteria andLabel2NameIsNotNull() {
            addCriterion("LABEL2_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andLabel2NameEqualTo(String value) {
            addCriterion("LABEL2_NAME =", value, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameNotEqualTo(String value) {
            addCriterion("LABEL2_NAME <>", value, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameGreaterThan(String value) {
            addCriterion("LABEL2_NAME >", value, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameGreaterThanOrEqualTo(String value) {
            addCriterion("LABEL2_NAME >=", value, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameLessThan(String value) {
            addCriterion("LABEL2_NAME <", value, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameLessThanOrEqualTo(String value) {
            addCriterion("LABEL2_NAME <=", value, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameLike(String value) {
            addCriterion("LABEL2_NAME like", value, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameNotLike(String value) {
            addCriterion("LABEL2_NAME not like", value, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameIn(List<String> values) {
            addCriterion("LABEL2_NAME in", values, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameNotIn(List<String> values) {
            addCriterion("LABEL2_NAME not in", values, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameBetween(String value1, String value2) {
            addCriterion("LABEL2_NAME between", value1, value2, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2NameNotBetween(String value1, String value2) {
            addCriterion("LABEL2_NAME not between", value1, value2, "label2Name");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsIsNull() {
            addCriterion("LABEL2_WORDS is null");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsIsNotNull() {
            addCriterion("LABEL2_WORDS is not null");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsEqualTo(String value) {
            addCriterion("LABEL2_WORDS =", value, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsNotEqualTo(String value) {
            addCriterion("LABEL2_WORDS <>", value, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsGreaterThan(String value) {
            addCriterion("LABEL2_WORDS >", value, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsGreaterThanOrEqualTo(String value) {
            addCriterion("LABEL2_WORDS >=", value, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsLessThan(String value) {
            addCriterion("LABEL2_WORDS <", value, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsLessThanOrEqualTo(String value) {
            addCriterion("LABEL2_WORDS <=", value, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsLike(String value) {
            addCriterion("LABEL2_WORDS like", value, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsNotLike(String value) {
            addCriterion("LABEL2_WORDS not like", value, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsIn(List<String> values) {
            addCriterion("LABEL2_WORDS in", values, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsNotIn(List<String> values) {
            addCriterion("LABEL2_WORDS not in", values, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsBetween(String value1, String value2) {
            addCriterion("LABEL2_WORDS between", value1, value2, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2WordsNotBetween(String value1, String value2) {
            addCriterion("LABEL2_WORDS not between", value1, value2, "label2Words");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserIsNull() {
            addCriterion("LABEL2_UPDATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserIsNotNull() {
            addCriterion("LABEL2_UPDATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserEqualTo(String value) {
            addCriterion("LABEL2_UPDATE_USER =", value, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserNotEqualTo(String value) {
            addCriterion("LABEL2_UPDATE_USER <>", value, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserGreaterThan(String value) {
            addCriterion("LABEL2_UPDATE_USER >", value, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserGreaterThanOrEqualTo(String value) {
            addCriterion("LABEL2_UPDATE_USER >=", value, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserLessThan(String value) {
            addCriterion("LABEL2_UPDATE_USER <", value, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserLessThanOrEqualTo(String value) {
            addCriterion("LABEL2_UPDATE_USER <=", value, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserLike(String value) {
            addCriterion("LABEL2_UPDATE_USER like", value, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserNotLike(String value) {
            addCriterion("LABEL2_UPDATE_USER not like", value, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserIn(List<String> values) {
            addCriterion("LABEL2_UPDATE_USER in", values, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserNotIn(List<String> values) {
            addCriterion("LABEL2_UPDATE_USER not in", values, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserBetween(String value1, String value2) {
            addCriterion("LABEL2_UPDATE_USER between", value1, value2, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateUserNotBetween(String value1, String value2) {
            addCriterion("LABEL2_UPDATE_USER not between", value1, value2, "label2UpdateUser");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeIsNull() {
            addCriterion("LABEL2_UPDATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeIsNotNull() {
            addCriterion("LABEL2_UPDATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeEqualTo(Date value) {
            addCriterion("LABEL2_UPDATE_TIME =", value, "label2UpdateTime");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeNotEqualTo(Date value) {
            addCriterion("LABEL2_UPDATE_TIME <>", value, "label2UpdateTime");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeGreaterThan(Date value) {
            addCriterion("LABEL2_UPDATE_TIME >", value, "label2UpdateTime");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("LABEL2_UPDATE_TIME >=", value, "label2UpdateTime");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeLessThan(Date value) {
            addCriterion("LABEL2_UPDATE_TIME <", value, "label2UpdateTime");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeLessThanOrEqualTo(Date value) {
            addCriterion("LABEL2_UPDATE_TIME <=", value, "label2UpdateTime");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeIn(List<Date> values) {
            addCriterion("LABEL2_UPDATE_TIME in", values, "label2UpdateTime");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeNotIn(List<Date> values) {
            addCriterion("LABEL2_UPDATE_TIME not in", values, "label2UpdateTime");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeBetween(Date value1, Date value2) {
            addCriterion("LABEL2_UPDATE_TIME between", value1, value2, "label2UpdateTime");
            return (Criteria) this;
        }

        public Criteria andLabel2UpdateTimeNotBetween(Date value1, Date value2) {
            addCriterion("LABEL2_UPDATE_TIME not between", value1, value2, "label2UpdateTime");
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