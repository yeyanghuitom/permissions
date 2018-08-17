package com.unicom.tancms.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MarketingEffectAssessExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public MarketingEffectAssessExample() {
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

        public Criteria andMesActivityIdIsNull() {
            addCriterion("MES_ACTIVITY_ID is null");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdIsNotNull() {
            addCriterion("MES_ACTIVITY_ID is not null");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdEqualTo(String value) {
            addCriterion("MES_ACTIVITY_ID =", value, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdNotEqualTo(String value) {
            addCriterion("MES_ACTIVITY_ID <>", value, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdGreaterThan(String value) {
            addCriterion("MES_ACTIVITY_ID >", value, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdGreaterThanOrEqualTo(String value) {
            addCriterion("MES_ACTIVITY_ID >=", value, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdLessThan(String value) {
            addCriterion("MES_ACTIVITY_ID <", value, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdLessThanOrEqualTo(String value) {
            addCriterion("MES_ACTIVITY_ID <=", value, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdLike(String value) {
            addCriterion("MES_ACTIVITY_ID like", value, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdNotLike(String value) {
            addCriterion("MES_ACTIVITY_ID not like", value, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdIn(List<String> values) {
            addCriterion("MES_ACTIVITY_ID in", values, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdNotIn(List<String> values) {
            addCriterion("MES_ACTIVITY_ID not in", values, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdBetween(String value1, String value2) {
            addCriterion("MES_ACTIVITY_ID between", value1, value2, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityIdNotBetween(String value1, String value2) {
            addCriterion("MES_ACTIVITY_ID not between", value1, value2, "mesActivityId");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameIsNull() {
            addCriterion("MES_ACTIVITY_NAME is null");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameIsNotNull() {
            addCriterion("MES_ACTIVITY_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameEqualTo(String value) {
            addCriterion("MES_ACTIVITY_NAME =", value, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameNotEqualTo(String value) {
            addCriterion("MES_ACTIVITY_NAME <>", value, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameGreaterThan(String value) {
            addCriterion("MES_ACTIVITY_NAME >", value, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameGreaterThanOrEqualTo(String value) {
            addCriterion("MES_ACTIVITY_NAME >=", value, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameLessThan(String value) {
            addCriterion("MES_ACTIVITY_NAME <", value, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameLessThanOrEqualTo(String value) {
            addCriterion("MES_ACTIVITY_NAME <=", value, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameLike(String value) {
            addCriterion("MES_ACTIVITY_NAME like", value, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameNotLike(String value) {
            addCriterion("MES_ACTIVITY_NAME not like", value, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameIn(List<String> values) {
            addCriterion("MES_ACTIVITY_NAME in", values, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameNotIn(List<String> values) {
            addCriterion("MES_ACTIVITY_NAME not in", values, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameBetween(String value1, String value2) {
            addCriterion("MES_ACTIVITY_NAME between", value1, value2, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesActivityNameNotBetween(String value1, String value2) {
            addCriterion("MES_ACTIVITY_NAME not between", value1, value2, "mesActivityName");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeIsNull() {
            addCriterion("MES_CREATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeIsNotNull() {
            addCriterion("MES_CREATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeEqualTo(Date value) {
            addCriterion("MES_CREATE_TIME =", value, "mesCreateTime");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeNotEqualTo(Date value) {
            addCriterion("MES_CREATE_TIME <>", value, "mesCreateTime");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeGreaterThan(Date value) {
            addCriterion("MES_CREATE_TIME >", value, "mesCreateTime");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("MES_CREATE_TIME >=", value, "mesCreateTime");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeLessThan(Date value) {
            addCriterion("MES_CREATE_TIME <", value, "mesCreateTime");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeLessThanOrEqualTo(Date value) {
            addCriterion("MES_CREATE_TIME <=", value, "mesCreateTime");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeIn(List<Date> values) {
            addCriterion("MES_CREATE_TIME in", values, "mesCreateTime");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeNotIn(List<Date> values) {
            addCriterion("MES_CREATE_TIME not in", values, "mesCreateTime");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeBetween(Date value1, Date value2) {
            addCriterion("MES_CREATE_TIME between", value1, value2, "mesCreateTime");
            return (Criteria) this;
        }

        public Criteria andMesCreateTimeNotBetween(Date value1, Date value2) {
            addCriterion("MES_CREATE_TIME not between", value1, value2, "mesCreateTime");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsIsNull() {
            addCriterion("MES_KEYWORDS is null");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsIsNotNull() {
            addCriterion("MES_KEYWORDS is not null");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsEqualTo(String value) {
            addCriterion("MES_KEYWORDS =", value, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsNotEqualTo(String value) {
            addCriterion("MES_KEYWORDS <>", value, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsGreaterThan(String value) {
            addCriterion("MES_KEYWORDS >", value, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsGreaterThanOrEqualTo(String value) {
            addCriterion("MES_KEYWORDS >=", value, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsLessThan(String value) {
            addCriterion("MES_KEYWORDS <", value, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsLessThanOrEqualTo(String value) {
            addCriterion("MES_KEYWORDS <=", value, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsLike(String value) {
            addCriterion("MES_KEYWORDS like", value, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsNotLike(String value) {
            addCriterion("MES_KEYWORDS not like", value, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsIn(List<String> values) {
            addCriterion("MES_KEYWORDS in", values, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsNotIn(List<String> values) {
            addCriterion("MES_KEYWORDS not in", values, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsBetween(String value1, String value2) {
            addCriterion("MES_KEYWORDS between", value1, value2, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesKeywordsNotBetween(String value1, String value2) {
            addCriterion("MES_KEYWORDS not between", value1, value2, "mesKeywords");
            return (Criteria) this;
        }

        public Criteria andMesExcludeIsNull() {
            addCriterion("MES_EXCLUDE is null");
            return (Criteria) this;
        }

        public Criteria andMesExcludeIsNotNull() {
            addCriterion("MES_EXCLUDE is not null");
            return (Criteria) this;
        }

        public Criteria andMesExcludeEqualTo(String value) {
            addCriterion("MES_EXCLUDE =", value, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeNotEqualTo(String value) {
            addCriterion("MES_EXCLUDE <>", value, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeGreaterThan(String value) {
            addCriterion("MES_EXCLUDE >", value, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeGreaterThanOrEqualTo(String value) {
            addCriterion("MES_EXCLUDE >=", value, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeLessThan(String value) {
            addCriterion("MES_EXCLUDE <", value, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeLessThanOrEqualTo(String value) {
            addCriterion("MES_EXCLUDE <=", value, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeLike(String value) {
            addCriterion("MES_EXCLUDE like", value, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeNotLike(String value) {
            addCriterion("MES_EXCLUDE not like", value, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeIn(List<String> values) {
            addCriterion("MES_EXCLUDE in", values, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeNotIn(List<String> values) {
            addCriterion("MES_EXCLUDE not in", values, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeBetween(String value1, String value2) {
            addCriterion("MES_EXCLUDE between", value1, value2, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesExcludeNotBetween(String value1, String value2) {
            addCriterion("MES_EXCLUDE not between", value1, value2, "mesExclude");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeIsNull() {
            addCriterion("MES_FINISH_TIME is null");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeIsNotNull() {
            addCriterion("MES_FINISH_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeEqualTo(Date value) {
            addCriterion("MES_FINISH_TIME =", value, "mesFinishTime");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeNotEqualTo(Date value) {
            addCriterion("MES_FINISH_TIME <>", value, "mesFinishTime");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeGreaterThan(Date value) {
            addCriterion("MES_FINISH_TIME >", value, "mesFinishTime");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("MES_FINISH_TIME >=", value, "mesFinishTime");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeLessThan(Date value) {
            addCriterion("MES_FINISH_TIME <", value, "mesFinishTime");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeLessThanOrEqualTo(Date value) {
            addCriterion("MES_FINISH_TIME <=", value, "mesFinishTime");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeIn(List<Date> values) {
            addCriterion("MES_FINISH_TIME in", values, "mesFinishTime");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeNotIn(List<Date> values) {
            addCriterion("MES_FINISH_TIME not in", values, "mesFinishTime");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeBetween(Date value1, Date value2) {
            addCriterion("MES_FINISH_TIME between", value1, value2, "mesFinishTime");
            return (Criteria) this;
        }

        public Criteria andMesFinishTimeNotBetween(Date value1, Date value2) {
            addCriterion("MES_FINISH_TIME not between", value1, value2, "mesFinishTime");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusIsNull() {
            addCriterion("MES_ANALYZ_STATUS is null");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusIsNotNull() {
            addCriterion("MES_ANALYZ_STATUS is not null");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusEqualTo(String value) {
            addCriterion("MES_ANALYZ_STATUS =", value, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusNotEqualTo(String value) {
            addCriterion("MES_ANALYZ_STATUS <>", value, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusGreaterThan(String value) {
            addCriterion("MES_ANALYZ_STATUS >", value, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusGreaterThanOrEqualTo(String value) {
            addCriterion("MES_ANALYZ_STATUS >=", value, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusLessThan(String value) {
            addCriterion("MES_ANALYZ_STATUS <", value, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusLessThanOrEqualTo(String value) {
            addCriterion("MES_ANALYZ_STATUS <=", value, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusLike(String value) {
            addCriterion("MES_ANALYZ_STATUS like", value, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusNotLike(String value) {
            addCriterion("MES_ANALYZ_STATUS not like", value, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusIn(List<String> values) {
            addCriterion("MES_ANALYZ_STATUS in", values, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusNotIn(List<String> values) {
            addCriterion("MES_ANALYZ_STATUS not in", values, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusBetween(String value1, String value2) {
            addCriterion("MES_ANALYZ_STATUS between", value1, value2, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesAnalyzStatusNotBetween(String value1, String value2) {
            addCriterion("MES_ANALYZ_STATUS not between", value1, value2, "mesAnalyzStatus");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeIsNull() {
            addCriterion("MES_START_TIME is null");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeIsNotNull() {
            addCriterion("MES_START_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeEqualTo(Date value) {
            addCriterion("MES_START_TIME =", value, "mesStartTime");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeNotEqualTo(Date value) {
            addCriterion("MES_START_TIME <>", value, "mesStartTime");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeGreaterThan(Date value) {
            addCriterion("MES_START_TIME >", value, "mesStartTime");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("MES_START_TIME >=", value, "mesStartTime");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeLessThan(Date value) {
            addCriterion("MES_START_TIME <", value, "mesStartTime");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeLessThanOrEqualTo(Date value) {
            addCriterion("MES_START_TIME <=", value, "mesStartTime");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeIn(List<Date> values) {
            addCriterion("MES_START_TIME in", values, "mesStartTime");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeNotIn(List<Date> values) {
            addCriterion("MES_START_TIME not in", values, "mesStartTime");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeBetween(Date value1, Date value2) {
            addCriterion("MES_START_TIME between", value1, value2, "mesStartTime");
            return (Criteria) this;
        }

        public Criteria andMesStartTimeNotBetween(Date value1, Date value2) {
            addCriterion("MES_START_TIME not between", value1, value2, "mesStartTime");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeIsNull() {
            addCriterion("MES_END_TIME is null");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeIsNotNull() {
            addCriterion("MES_END_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeEqualTo(Date value) {
            addCriterion("MES_END_TIME =", value, "mesEndTime");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeNotEqualTo(Date value) {
            addCriterion("MES_END_TIME <>", value, "mesEndTime");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeGreaterThan(Date value) {
            addCriterion("MES_END_TIME >", value, "mesEndTime");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("MES_END_TIME >=", value, "mesEndTime");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeLessThan(Date value) {
            addCriterion("MES_END_TIME <", value, "mesEndTime");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeLessThanOrEqualTo(Date value) {
            addCriterion("MES_END_TIME <=", value, "mesEndTime");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeIn(List<Date> values) {
            addCriterion("MES_END_TIME in", values, "mesEndTime");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeNotIn(List<Date> values) {
            addCriterion("MES_END_TIME not in", values, "mesEndTime");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeBetween(Date value1, Date value2) {
            addCriterion("MES_END_TIME between", value1, value2, "mesEndTime");
            return (Criteria) this;
        }

        public Criteria andMesEndTimeNotBetween(Date value1, Date value2) {
            addCriterion("MES_END_TIME not between", value1, value2, "mesEndTime");
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

        public Criteria andMesCreateUserIsNull() {
            addCriterion("MES_CREATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserIsNotNull() {
            addCriterion("MES_CREATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserEqualTo(String value) {
            addCriterion("MES_CREATE_USER =", value, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserNotEqualTo(String value) {
            addCriterion("MES_CREATE_USER <>", value, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserGreaterThan(String value) {
            addCriterion("MES_CREATE_USER >", value, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserGreaterThanOrEqualTo(String value) {
            addCriterion("MES_CREATE_USER >=", value, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserLessThan(String value) {
            addCriterion("MES_CREATE_USER <", value, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserLessThanOrEqualTo(String value) {
            addCriterion("MES_CREATE_USER <=", value, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserLike(String value) {
            addCriterion("MES_CREATE_USER like", value, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserNotLike(String value) {
            addCriterion("MES_CREATE_USER not like", value, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserIn(List<String> values) {
            addCriterion("MES_CREATE_USER in", values, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserNotIn(List<String> values) {
            addCriterion("MES_CREATE_USER not in", values, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserBetween(String value1, String value2) {
            addCriterion("MES_CREATE_USER between", value1, value2, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesCreateUserNotBetween(String value1, String value2) {
            addCriterion("MES_CREATE_USER not between", value1, value2, "mesCreateUser");
            return (Criteria) this;
        }

        public Criteria andMesPathWordIsNull() {
            addCriterion("MES_PATH_WORD is null");
            return (Criteria) this;
        }

        public Criteria andMesPathWordIsNotNull() {
            addCriterion("MES_PATH_WORD is not null");
            return (Criteria) this;
        }

        public Criteria andMesPathWordEqualTo(String value) {
            addCriterion("MES_PATH_WORD =", value, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordNotEqualTo(String value) {
            addCriterion("MES_PATH_WORD <>", value, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordGreaterThan(String value) {
            addCriterion("MES_PATH_WORD >", value, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordGreaterThanOrEqualTo(String value) {
            addCriterion("MES_PATH_WORD >=", value, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordLessThan(String value) {
            addCriterion("MES_PATH_WORD <", value, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordLessThanOrEqualTo(String value) {
            addCriterion("MES_PATH_WORD <=", value, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordLike(String value) {
            addCriterion("MES_PATH_WORD like", value, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordNotLike(String value) {
            addCriterion("MES_PATH_WORD not like", value, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordIn(List<String> values) {
            addCriterion("MES_PATH_WORD in", values, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordNotIn(List<String> values) {
            addCriterion("MES_PATH_WORD not in", values, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordBetween(String value1, String value2) {
            addCriterion("MES_PATH_WORD between", value1, value2, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathWordNotBetween(String value1, String value2) {
            addCriterion("MES_PATH_WORD not between", value1, value2, "mesPathWord");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfIsNull() {
            addCriterion("MES_PATH_PDF is null");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfIsNotNull() {
            addCriterion("MES_PATH_PDF is not null");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfEqualTo(String value) {
            addCriterion("MES_PATH_PDF =", value, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfNotEqualTo(String value) {
            addCriterion("MES_PATH_PDF <>", value, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfGreaterThan(String value) {
            addCriterion("MES_PATH_PDF >", value, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfGreaterThanOrEqualTo(String value) {
            addCriterion("MES_PATH_PDF >=", value, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfLessThan(String value) {
            addCriterion("MES_PATH_PDF <", value, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfLessThanOrEqualTo(String value) {
            addCriterion("MES_PATH_PDF <=", value, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfLike(String value) {
            addCriterion("MES_PATH_PDF like", value, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfNotLike(String value) {
            addCriterion("MES_PATH_PDF not like", value, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfIn(List<String> values) {
            addCriterion("MES_PATH_PDF in", values, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfNotIn(List<String> values) {
            addCriterion("MES_PATH_PDF not in", values, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfBetween(String value1, String value2) {
            addCriterion("MES_PATH_PDF between", value1, value2, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesPathPdfNotBetween(String value1, String value2) {
            addCriterion("MES_PATH_PDF not between", value1, value2, "mesPathPdf");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeIsNull() {
            addCriterion("MES_UPDATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeIsNotNull() {
            addCriterion("MES_UPDATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeEqualTo(Date value) {
            addCriterion("MES_UPDATE_TIME =", value, "mesUpdateTime");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeNotEqualTo(Date value) {
            addCriterion("MES_UPDATE_TIME <>", value, "mesUpdateTime");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeGreaterThan(Date value) {
            addCriterion("MES_UPDATE_TIME >", value, "mesUpdateTime");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("MES_UPDATE_TIME >=", value, "mesUpdateTime");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeLessThan(Date value) {
            addCriterion("MES_UPDATE_TIME <", value, "mesUpdateTime");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeLessThanOrEqualTo(Date value) {
            addCriterion("MES_UPDATE_TIME <=", value, "mesUpdateTime");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeIn(List<Date> values) {
            addCriterion("MES_UPDATE_TIME in", values, "mesUpdateTime");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeNotIn(List<Date> values) {
            addCriterion("MES_UPDATE_TIME not in", values, "mesUpdateTime");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeBetween(Date value1, Date value2) {
            addCriterion("MES_UPDATE_TIME between", value1, value2, "mesUpdateTime");
            return (Criteria) this;
        }

        public Criteria andMesUpdateTimeNotBetween(Date value1, Date value2) {
            addCriterion("MES_UPDATE_TIME not between", value1, value2, "mesUpdateTime");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserIsNull() {
            addCriterion("MES_UPDATE_USER is null");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserIsNotNull() {
            addCriterion("MES_UPDATE_USER is not null");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserEqualTo(String value) {
            addCriterion("MES_UPDATE_USER =", value, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserNotEqualTo(String value) {
            addCriterion("MES_UPDATE_USER <>", value, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserGreaterThan(String value) {
            addCriterion("MES_UPDATE_USER >", value, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserGreaterThanOrEqualTo(String value) {
            addCriterion("MES_UPDATE_USER >=", value, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserLessThan(String value) {
            addCriterion("MES_UPDATE_USER <", value, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserLessThanOrEqualTo(String value) {
            addCriterion("MES_UPDATE_USER <=", value, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserLike(String value) {
            addCriterion("MES_UPDATE_USER like", value, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserNotLike(String value) {
            addCriterion("MES_UPDATE_USER not like", value, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserIn(List<String> values) {
            addCriterion("MES_UPDATE_USER in", values, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserNotIn(List<String> values) {
            addCriterion("MES_UPDATE_USER not in", values, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserBetween(String value1, String value2) {
            addCriterion("MES_UPDATE_USER between", value1, value2, "mesUpdateUser");
            return (Criteria) this;
        }

        public Criteria andMesUpdateUserNotBetween(String value1, String value2) {
            addCriterion("MES_UPDATE_USER not between", value1, value2, "mesUpdateUser");
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