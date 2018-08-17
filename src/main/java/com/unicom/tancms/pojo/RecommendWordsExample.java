package com.unicom.tancms.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class RecommendWordsExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public RecommendWordsExample() {
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

        public Criteria andWordsClassIdIsNull() {
            addCriterion("WORDS_CLASS_ID is null");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdIsNotNull() {
            addCriterion("WORDS_CLASS_ID is not null");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdEqualTo(String value) {
            addCriterion("WORDS_CLASS_ID =", value, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdNotEqualTo(String value) {
            addCriterion("WORDS_CLASS_ID <>", value, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdGreaterThan(String value) {
            addCriterion("WORDS_CLASS_ID >", value, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdGreaterThanOrEqualTo(String value) {
            addCriterion("WORDS_CLASS_ID >=", value, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdLessThan(String value) {
            addCriterion("WORDS_CLASS_ID <", value, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdLessThanOrEqualTo(String value) {
            addCriterion("WORDS_CLASS_ID <=", value, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdLike(String value) {
            addCriterion("WORDS_CLASS_ID like", value, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdNotLike(String value) {
            addCriterion("WORDS_CLASS_ID not like", value, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdIn(List<String> values) {
            addCriterion("WORDS_CLASS_ID in", values, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdNotIn(List<String> values) {
            addCriterion("WORDS_CLASS_ID not in", values, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdBetween(String value1, String value2) {
            addCriterion("WORDS_CLASS_ID between", value1, value2, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassIdNotBetween(String value1, String value2) {
            addCriterion("WORDS_CLASS_ID not between", value1, value2, "wordsClassId");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameIsNull() {
            addCriterion("WORDS_CLASS_NAME is null");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameIsNotNull() {
            addCriterion("WORDS_CLASS_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameEqualTo(String value) {
            addCriterion("WORDS_CLASS_NAME =", value, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameNotEqualTo(String value) {
            addCriterion("WORDS_CLASS_NAME <>", value, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameGreaterThan(String value) {
            addCriterion("WORDS_CLASS_NAME >", value, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameGreaterThanOrEqualTo(String value) {
            addCriterion("WORDS_CLASS_NAME >=", value, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameLessThan(String value) {
            addCriterion("WORDS_CLASS_NAME <", value, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameLessThanOrEqualTo(String value) {
            addCriterion("WORDS_CLASS_NAME <=", value, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameLike(String value) {
            addCriterion("WORDS_CLASS_NAME like", value, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameNotLike(String value) {
            addCriterion("WORDS_CLASS_NAME not like", value, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameIn(List<String> values) {
            addCriterion("WORDS_CLASS_NAME in", values, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameNotIn(List<String> values) {
            addCriterion("WORDS_CLASS_NAME not in", values, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameBetween(String value1, String value2) {
            addCriterion("WORDS_CLASS_NAME between", value1, value2, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andWordsClassNameNotBetween(String value1, String value2) {
            addCriterion("WORDS_CLASS_NAME not between", value1, value2, "wordsClassName");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNull() {
            addCriterion("CREATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNotNull() {
            addCriterion("CREATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeEqualTo(Date value) {
            addCriterion("CREATE_TIME =", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotEqualTo(Date value) {
            addCriterion("CREATE_TIME <>", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThan(Date value) {
            addCriterion("CREATE_TIME >", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("CREATE_TIME >=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThan(Date value) {
            addCriterion("CREATE_TIME <", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThanOrEqualTo(Date value) {
            addCriterion("CREATE_TIME <=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIn(List<Date> values) {
            addCriterion("CREATE_TIME in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotIn(List<Date> values) {
            addCriterion("CREATE_TIME not in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeBetween(Date value1, Date value2) {
            addCriterion("CREATE_TIME between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotBetween(Date value1, Date value2) {
            addCriterion("CREATE_TIME not between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateUserIsNull() {
            addCriterion("CREATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andCreateUserIsNotNull() {
            addCriterion("CREATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andCreateUserEqualTo(String value) {
            addCriterion("CREATE_USER =", value, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserNotEqualTo(String value) {
            addCriterion("CREATE_USER <>", value, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserGreaterThan(String value) {
            addCriterion("CREATE_USER >", value, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserGreaterThanOrEqualTo(String value) {
            addCriterion("CREATE_USER >=", value, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserLessThan(String value) {
            addCriterion("CREATE_USER <", value, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserLessThanOrEqualTo(String value) {
            addCriterion("CREATE_USER <=", value, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserLike(String value) {
            addCriterion("CREATE_USER like", value, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserNotLike(String value) {
            addCriterion("CREATE_USER not like", value, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserIn(List<String> values) {
            addCriterion("CREATE_USER in", values, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserNotIn(List<String> values) {
            addCriterion("CREATE_USER not in", values, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserBetween(String value1, String value2) {
            addCriterion("CREATE_USER between", value1, value2, "createUser");
            return (Criteria) this;
        }

        public Criteria andCreateUserNotBetween(String value1, String value2) {
            addCriterion("CREATE_USER not between", value1, value2, "createUser");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIsNull() {
            addCriterion("UPDATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIsNotNull() {
            addCriterion("UPDATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeEqualTo(Date value) {
            addCriterion("UPDATE_TIME =", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotEqualTo(Date value) {
            addCriterion("UPDATE_TIME <>", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeGreaterThan(Date value) {
            addCriterion("UPDATE_TIME >", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("UPDATE_TIME >=", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeLessThan(Date value) {
            addCriterion("UPDATE_TIME <", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeLessThanOrEqualTo(Date value) {
            addCriterion("UPDATE_TIME <=", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIn(List<Date> values) {
            addCriterion("UPDATE_TIME in", values, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotIn(List<Date> values) {
            addCriterion("UPDATE_TIME not in", values, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeBetween(Date value1, Date value2) {
            addCriterion("UPDATE_TIME between", value1, value2, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotBetween(Date value1, Date value2) {
            addCriterion("UPDATE_TIME not between", value1, value2, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateUserIsNull() {
            addCriterion("UPDATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andUpdateUserIsNotNull() {
            addCriterion("UPDATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andUpdateUserEqualTo(String value) {
            addCriterion("UPDATE_USER =", value, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserNotEqualTo(String value) {
            addCriterion("UPDATE_USER <>", value, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserGreaterThan(String value) {
            addCriterion("UPDATE_USER >", value, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserGreaterThanOrEqualTo(String value) {
            addCriterion("UPDATE_USER >=", value, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserLessThan(String value) {
            addCriterion("UPDATE_USER <", value, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserLessThanOrEqualTo(String value) {
            addCriterion("UPDATE_USER <=", value, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserLike(String value) {
            addCriterion("UPDATE_USER like", value, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserNotLike(String value) {
            addCriterion("UPDATE_USER not like", value, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserIn(List<String> values) {
            addCriterion("UPDATE_USER in", values, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserNotIn(List<String> values) {
            addCriterion("UPDATE_USER not in", values, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserBetween(String value1, String value2) {
            addCriterion("UPDATE_USER between", value1, value2, "updateUser");
            return (Criteria) this;
        }

        public Criteria andUpdateUserNotBetween(String value1, String value2) {
            addCriterion("UPDATE_USER not between", value1, value2, "updateUser");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateIsNull() {
            addCriterion("RECOMMAND_START_DATE is null");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateIsNotNull() {
            addCriterion("RECOMMAND_START_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateEqualTo(Date value) {
            addCriterion("RECOMMAND_START_DATE =", value, "recommandStartDate");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateNotEqualTo(Date value) {
            addCriterion("RECOMMAND_START_DATE <>", value, "recommandStartDate");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateGreaterThan(Date value) {
            addCriterion("RECOMMAND_START_DATE >", value, "recommandStartDate");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateGreaterThanOrEqualTo(Date value) {
            addCriterion("RECOMMAND_START_DATE >=", value, "recommandStartDate");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateLessThan(Date value) {
            addCriterion("RECOMMAND_START_DATE <", value, "recommandStartDate");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateLessThanOrEqualTo(Date value) {
            addCriterion("RECOMMAND_START_DATE <=", value, "recommandStartDate");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateIn(List<Date> values) {
            addCriterion("RECOMMAND_START_DATE in", values, "recommandStartDate");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateNotIn(List<Date> values) {
            addCriterion("RECOMMAND_START_DATE not in", values, "recommandStartDate");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateBetween(Date value1, Date value2) {
            addCriterion("RECOMMAND_START_DATE between", value1, value2, "recommandStartDate");
            return (Criteria) this;
        }

        public Criteria andRecommandStartDateNotBetween(Date value1, Date value2) {
            addCriterion("RECOMMAND_START_DATE not between", value1, value2, "recommandStartDate");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateIsNull() {
            addCriterion("RECOMMAND_END_DATE is null");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateIsNotNull() {
            addCriterion("RECOMMAND_END_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateEqualTo(Date value) {
            addCriterion("RECOMMAND_END_DATE =", value, "recommandEndDate");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateNotEqualTo(Date value) {
            addCriterion("RECOMMAND_END_DATE <>", value, "recommandEndDate");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateGreaterThan(Date value) {
            addCriterion("RECOMMAND_END_DATE >", value, "recommandEndDate");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateGreaterThanOrEqualTo(Date value) {
            addCriterion("RECOMMAND_END_DATE >=", value, "recommandEndDate");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateLessThan(Date value) {
            addCriterion("RECOMMAND_END_DATE <", value, "recommandEndDate");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateLessThanOrEqualTo(Date value) {
            addCriterion("RECOMMAND_END_DATE <=", value, "recommandEndDate");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateIn(List<Date> values) {
            addCriterion("RECOMMAND_END_DATE in", values, "recommandEndDate");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateNotIn(List<Date> values) {
            addCriterion("RECOMMAND_END_DATE not in", values, "recommandEndDate");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateBetween(Date value1, Date value2) {
            addCriterion("RECOMMAND_END_DATE between", value1, value2, "recommandEndDate");
            return (Criteria) this;
        }

        public Criteria andRecommandEndDateNotBetween(Date value1, Date value2) {
            addCriterion("RECOMMAND_END_DATE not between", value1, value2, "recommandEndDate");
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