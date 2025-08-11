"use strict";
(self["webpackChunkstu_project"] = self["webpackChunkstu_project"] || []).push([[775], {
    14775: function(e, t, s) {
        s.r(t),
        s.d(t, {
            default: function() {
                return g
            }
        });
        var a = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "box or-box"
            }, [s("div", {
                staticClass: "right-box"
            }, [s("div", {
                staticClass: "title txt-c"
            }, [s("div", {
                staticClass: "left"
            }, [s("span", {
                staticClass: "ml-5"
            }, [e._v(e._s(null == e.shareItem ? e.studentname : 1 == e.shareItem.anonymity ? "匿名" : e.studentname) + ": ")]), e._l(e.itemList, (function(t, a) {
                return s("span", {
                    key: a,
                    on: {
                        click: function(s) {
                            return s.stopPropagation(),
                            e.tabQue(a, t)
                        }
                    }
                }, [s("span", {
                    class: ["item-que", e.itemIndex === a ? "active" : "", 1 == t.extraTag ? "item-que-1" : ""],
                    style: {
                        color: e.itemIndex === a ? 1 == t.extraTag ? "#324297" : 0 == t.extraTag || null == t.extraTag ? "" : "#fff" : ""
                    }
                }, [e._v(" " + e._s(1 == t.extraTag ? "追" : "答案") + e._s(0 == t.extraTag || null == t.extraTag ? a + 1 : a - e.itemList.filter((function(e) {
                    return 0 == e.extraTag || null == e.extraTag
                }
                )).length + 1))]), 1 == t.extraTag && null == e.shareItem ? s("span", {
                    staticStyle: {
                        color: "#Fff"
                    },
                    on: {
                        click: function(s) {
                            return s.stopPropagation(),
                            e.DeleteAnnex(a, t)
                        }
                    }
                }, [s("a-icon", {
                    staticStyle: {
                        "font-size": "18px",
                        "margin-left": "5px",
                        position: "relative",
                        top: "2px"
                    },
                    attrs: {
                        type: "close-circle"
                    }
                })], 1) : e._e()])
            }
            )), null == e.shareItem && e.itemList.filter((function(e) {
                return 1 == e.extraTag
            }
            )).length < 3 ? s("span", {
                staticClass: "item-que active",
                on: {
                    click: e.uploadFile
                }
            }, [s("a-icon", {
                attrs: {
                    type: "plus"
                }
            }), e._v(" " + e._s(e.isUpload ? "上传中..." : "追加图片"))], 1) : e._e()], 2), s("div", {
                staticClass: "right",
                on: {
                    click: e.close
                }
            }, [s("a-icon", {
                attrs: {
                    type: "close-circle"
                }
            }), e._v(" 关闭 ")], 1)]), s("div", {
                staticClass: "board-box"
            }, ["" != e.BoardImg ? s("Board", {
                ref: "board",
                attrs: {
                    reviewImg: e.BoardImg,
                    stuImg: null == e.shareItem ? e.originalitemList[e.itemIndex].attachmentLinkAddress : e.shareItem.stuAttachmentList[e.itemIndex].attachmentLinkAddress,
                    dd: e.dd
                },
                on: {
                    setHandwriting: e.isHandwriting
                }
            }) : e._e()], 1)]), s("div", {
                staticClass: "left-box"
            }, [s("div", {
                staticClass: "title"
            }, [e._v("批阅打分")]), s("div", {
                staticClass: "content-box"
            }, ["1" == e.selfReadOverSwitch ? s("div", {
                staticClass: "item-box"
            }, e._l(e.grade, (function(t, a) {
                return s("div", {
                    key: t.id,
                    class: ["item", 0 == t.id ? "red" : 1 == t.id ? "yellow" : "green", 1 == e.gradeindex && 0 == t.id ? "red-active" : 1 == e.gradeindex && 1 == t.id ? "yellow-active" : 0 == e.gradeindex && 2 == t.id ? "green-active" : ""],
                    on: {
                        click: function(s) {
                            return e.setGrade(0 == e.data.selfReadOverSwitch ? -1 : a, t, !0)
                        }
                    }
                }, [s("span", {
                    class: ["iconfont", t.class]
                })])
            }
            )), 0) : e._e(), "1" == e.selfReadOverSwitch ? s("div", {
                staticClass: "score-box"
            }, [e.isOneToMore ? e._l(e.oneTomoreData, (function(t, a) {
                return s("div", {
                    key: t.questionId,
                    staticClass: "question-block"
                }, [s("div", {
                    staticClass: "question-title"
                }, ["" != e.getQuestionErrorContent(t.questionId) ? s("span", {
                    class: ["badge-box", "badge" + e.getQuestionErrorContent(t.questionId)]
                }, [e._v(e._s(e.getQuestionErrorContent(t.questionId)))]) : e._e(), e._v(" 题号：" + e._s(t.questionNumber) + " (" + e._s(t.questionScore) + "分)")]), e._l(t.sourcegrain, (function(r, i) {
                    return s("div", {
                        key: i,
                        class: ["item", -1 == t.studentScore ? "" : t.scoreIndex >= 0 ? t.scoreIndex == r.index && 0 == t.scoreIndex ? "active-red" : t.scoreIndex == t.sourcegrain.length - 1 ? t.scoreIndex == r.index ? "active-green" : "" : t.scoreIndex == r.index ? "active-yellow" : "" : ""],
                        on: {
                            click: function(s) {
                                return e.setOneToMoreScore(a, i, t, !0)
                            }
                        }
                    }, [e._v(" " + e._s(r.source) + "分 ")])
                }
                ))], 2)
            }
            )) : [null == e.shareItem || null != e.shareItem && 1 == e.originalitemList[e.itemIndex].readOverTag ? e._l(e.score, (function(t, a) {
                return s("div", {
                    key: a,
                    class: ["item", e.scoreindex == a ? 0 == e.scoreindex ? "active-red" : e.scoreindex == e.score.length - 1 ? "active-green" : "active-yellow" : ""],
                    on: {
                        click: function(t) {
                            return e.setScore(0 == e.data.selfReadOverSwitch ? -1 : a, !0)
                        }
                    }
                }, [e._v(" " + e._s(t) + "分 ")])
            }
            )) : e._e()]], 2) : s("div", {
                staticClass: "score-box"
            }, [e.isOneToMore ? e.getReadOverTagStatus() ? e._l(e.oneTomoreData, (function(t) {
                return s("div", {
                    key: t.questionId
                }, [s("div", {
                    staticClass: "question-title"
                }, ["" != e.getQuestionErrorContent(t.questionId) ? s("span", {
                    class: ["badge-box", "badge" + e.getQuestionErrorContent(t.questionId)]
                }, [e._v(e._s(e.getQuestionErrorContent(t.questionId)))]) : e._e(), e._v(" 题号：" + e._s(t.questionNumber) + "(" + e._s(t.questionScore) + "分)")]), e._l(t.sourcegrain, (function(a, r) {
                    return s("div", {
                        key: r,
                        class: ["item-2", -1 == t.studentScore ? "" : 0 == a.source ? "active-red" : a.source == t.questionScore ? "active-green" : "active-yellow"],
                        on: {
                            click: function(t) {
                                return e.setScore(0 == e.data.selfReadOverSwitch ? -1 : r, !0)
                            }
                        }
                    }, [e._v(" " + e._s(a.source) + "分 ")])
                }
                ))], 2)
            }
            )) : e._e() : [null == e.shareItem || null != e.shareItem && 1 == e.shareItem.readOverTag ? e._l(e.score, (function(t, a) {
                return s("div", {
                    key: a,
                    class: ["item-1", 0 == t ? "active-red" : t == e.data.questionScore ? "active-green" : "active-yellow"],
                    on: {
                        click: function(t) {
                            return e.setScore(0 == e.data.selfReadOverSwitch ? -1 : a, !0)
                        }
                    }
                }, [e._v(" " + e._s(t) + "分 ")])
            }
            )) : e._e()]], 2), s("div", {
                class: ["btn", null == e.openAnswer ? "" : 0 == e.openAnswer ? "btn1" : ""],
                on: {
                    click: e.LookAnswer
                }
            }, [e._v("查看答案")]), s("div", {
                class: ["btn", "" == e.replaceImg(e.getTeacherReadOverContent()) ? "btn1" : ""],
                on: {
                    click: e.LookComments
                }
            }, [e._v(" 查看批注 ")])])]), s("a-modal", {
                attrs: {
                    title: "查看答案",
                    visible: e.modalvisible,
                    footer: null,
                    width: "90%"
                },
                on: {
                    cancel: function(t) {
                        e.modalvisible = !1
                    }
                }
            }, [s("div", {
                staticClass: "c-24469f"
            }, [e._v("【答案】")]), s("p", {
                staticClass: "pl-10",
                domProps: {
                    innerHTML: e._s(e.replaceImg(e.data.answer))
                }
            }), s("div", {
                staticClass: "c-24469f"
            }, [e._v("【解析】")]), s("p", {
                staticClass: "pl-10",
                domProps: {
                    innerHTML: e._s(e.replaceImg(e.data.questionAnalysis))
                }
            }), s("div", {
                staticClass: "c-24469f"
            }, [e._v("【追加解析】")]), s("p", {
                staticClass: "pl-10",
                domProps: {
                    innerHTML: e._s(e.replaceImg(e.data.addToQuestionAnalysis))
                }
            })]), s("a-modal", {
                attrs: {
                    title: "查看批注",
                    visible: e.commentsvisible,
                    footer: null,
                    width: "90%"
                },
                on: {
                    cancel: function(t) {
                        e.commentsvisible = !1
                    }
                }
            }, [s("p", {
                domProps: {
                    innerHTML: e._s(e.replaceImg(e.getTeacherReadOverContent()))
                }
            })]), s("input", {
                ref: "fileUpload",
                staticStyle: {
                    display: "none"
                },
                attrs: {
                    type: "file",
                    accept: "image/*",
                    capture: "camera"
                },
                on: {
                    change: function(t) {
                        return e.UpLoadImg(t)
                    }
                }
            }), s("CropperAppendBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isEditImg,
                    expression: "isEditImg"
                }],
                ref: "cropper"
            })], 1)
        }
          , r = []
          , i = s(1496)
          , o = s(52650)
          , n = s(68354)
          , d = {
            components: {
                Board: () => s.e(186).then(s.bind(s, 10186)),
                CropperAppendBox: () => Promise.all([s.e(996), s.e(472)]).then(s.bind(s, 28472))
            },
            data() {
                return {
                    studentname: "",
                    gradeindex: -1,
                    grade: [{
                        id: 2,
                        class: "lx-right-line"
                    }, {
                        id: 0,
                        class: "lx-wrong-line"
                    }],
                    modalvisible: !1,
                    commentsvisible: !1,
                    scoreindex: -1,
                    score: [],
                    itemIndex: 0,
                    queIndex: -1,
                    itemList: [],
                    originalitemList: [],
                    BoardImg: "",
                    data: {},
                    isHandwriting: !1,
                    HandwritingImg: [],
                    answer: [],
                    selfReadOverSwitch: sessionStorage.getItem("selfReadOverSwitch"),
                    issave: !1,
                    origin: 0,
                    openAnswer: null,
                    orType: 0,
                    flagid: 0,
                    isOneToMore: !1,
                    oneTomoreData: [],
                    oneTomoreDataString: "",
                    subQuestionId: "",
                    totalSource: -1,
                    shareItem: null,
                    IsClick: !1,
                    isUpload: !1,
                    extraTag: 0,
                    isEditImg: !1,
                    ErrorContent: null,
                    dd: {}
                }
            },
            mounted() {
                this.studentname = JSON.parse(sessionStorage.getItem("course_userInfo")).userName
            },
            methods: {
                SetORData(e, t, s, a, r, i, o, d, l, c, u) {
                    let g = this;
                    g.data = s,
                    g.answer = a,
                    g.itemIndex = e,
                    g.queIndex = r,
                    g.origin = i,
                    g.orType = d,
                    g.originalitemList = t,
                    g.openAnswer = "undefined" == typeof o ? null : o,
                    g.studentname = null == c ? JSON.parse(sessionStorage.getItem("course_userInfo")).userName : c.stuName,
                    g.shareItem = c,
                    g.isOneToMore = g.data.childList.length > 0,
                    g.extraTag = 0,
                    g.ErrorContent = u,
                    g.selfReadOverSwitch = l;
                    g.score = [],
                    g.flagid = null == c ? s.id : c.stuId;
                    let m = "undefined" == typeof l ? g.data.selfReadOverSwitch : l;
                    sessionStorage.setItem("selfReadOverSwitch", m),
                    g.selfReadOverSwitch = m;
                    let f = -1
                      , I = -1
                      , h = sessionStorage.getItem("setTeacher");
                    if (0 == i && g.answer.length > 0) {
                        let e = sessionStorage.getItem("Score-" + g.flagid);
                        f = (0,
                        n.lF)(e) ? g.getstudentScore() : e
                    }
                    if (null != c && (f = c.studentScore),
                    (0,
                    n.lF)(sessionStorage.getItem("Score-" + g.flagid)) || (f = sessionStorage.getItem("Score-" + g.flagid)),
                    g.IsClick = f >= 0,
                    g.totalSource = f,
                    1 == g.data.selfReadOverSwitch && null == c) {
                        let e = null == h ? 1 : "003" == JSON.parse(h).subjectCode ? .5 : 1;
                        for (let t = 0; t <= s.questionScore / e; t++) {
                            let s = t * e;
                            g.score.push(s),
                            s == f && (I = t)
                        }
                    } else
                        -1 == f ? g.score = [] : g.score.push(f);
                    0 == g.data.selfReadOverSwitch || null != c ? g.grade = [] : g.grade = [{
                        id: 2,
                        class: "lx-right-line"
                    }, {
                        id: 0,
                        class: "lx-wrong-line"
                    }],
                    g.setScore(I, !1);
                    let p = [];
                    if (1) {
                        for (let e = 0; e < t.length; e++)
                            (0 == i && 5 == t[e].questionAttachmentType || (1 == i || 0 == l) && 5 === t[e].attachmentType) && p.push(t[e]);
                        sessionStorage.setItem("ItemImg-" + g.flagid, JSON.stringify(p))
                    } else
                        p = JSON.parse(sessionStorage.getItem("ItemImg-" + g.flagid));
                    if (g.itemList = p,
                    p.length > 0 && g.setBoardImg(p[e].attachmentLinkAddress),
                    g.isOneToMore) {
                        let e = [];
                        if (g.answer.forEach((t => {
                            g.data.childList.forEach((s => {
                                t.questionId == s.id && e.push({
                                    questionId: s.id,
                                    questionNumber: s.questionNumber,
                                    studentScore: 1 == t.readOverTag ? t.studentScore : -1,
                                    questionScore: s.questionScore,
                                    scoreIndex: -1,
                                    sourcegrain: []
                                })
                            }
                            ))
                        }
                        )),
                        e.length > 0) {
                            let t = null == h ? 1 : "003" == JSON.parse(h).subjectCode ? .5 : 1;
                            e.forEach((e => {
                                if (null == c)
                                    if (1 == g.data.selfReadOverSwitch)
                                        for (let s = 0; s <= e.questionScore / t; s++) {
                                            let a = s * t;
                                            e.sourcegrain.push({
                                                index: s,
                                                source: a
                                            })
                                        }
                                    else
                                        -1 == e.studentScore ? e.sourcegrain = [] : e.sourcegrain.push({
                                            index: 0,
                                            source: e.studentScore
                                        });
                                else
                                    e.sourcegrain.push({
                                        index: 0,
                                        source: g.ErgodicShare(e)
                                    })
                            }
                            ))
                        }
                        g.oneTomoreData = g.getScoreIndex(e.sort(( (e, t) => e.questionNumber - t.questionNumber)))
                    }
                },
                getstudentScore() {
                    let e = this
                      , t = -1;
                    return e.answer.forEach((s => {
                        s.questionId == e.data.id && (t = null != s.studentScore && 0 != s.readOverTag ? s.studentScore : -1)
                    }
                    )),
                    t
                },
                ErgodicShare(e) {
                    let t = this
                      , s = 0
                      , a = t.shareItem.childList;
                    return a.length > 0 && a.forEach((t => {
                        t.questionId == e.questionId && (s = t.studentScore)
                    }
                    )),
                    s
                },
                getReadOverTagStatus() {
                    let e = this
                      , t = e.answer.filter((t => t.firstQuestionId === e.data.id));
                    return 0 != t.length && 1 == t[0].readOverTag
                },
                setGrade(e, t, s) {
                    let a = this;
                    a.IsClick = s;
                    let r = sessionStorage.getItem("selfReadOverSwitch");
                    if (0 != r || !s) {
                        if (-1 == e)
                            return a.gradeindex = -1,
                            void (a.scoreindex = -1);
                        a.gradeindex = e,
                        0 == e ? a.scoreindex = a.score.length - 1 : 1 == e && (a.scoreindex = 0),
                        a.isOneToMore ? a.submitOneToMoreData() : 1 == a.data.selfReadOverSwitch && (sessionStorage.setItem("Score-" + a.flagid, a.score[a.scoreindex]),
                        a.Readover(a.data.id, a.score[a.scoreindex], 1 == a.gradeindex ? 0 : -1 == a.gradeindex ? 2 : 1))
                    }
                },
                setScore(e, t) {
                    let s = this;
                    s.IsClick = t;
                    let a = sessionStorage.getItem("selfReadOverSwitch");
                    if (0 != a || !t) {
                        if (-1 == e)
                            return s.gradeindex = -1,
                            void (s.scoreindex = -1);
                        s.scoreindex = e,
                        0 == e ? s.gradeindex = 1 : e == s.score.length - 1 || 999 == e ? s.gradeindex = 0 : s.gradeindex = -1,
                        1 != s.data.selfReadOverSwitch || s.isOneToMore || (sessionStorage.setItem("Score-" + s.flagid, s.score[e]),
                        s.IsClick = s.score[e] >= 0,
                        s.Readover(s.data.id, s.score[s.scoreindex], 1 == s.gradeindex ? 0 : -1 == s.gradeindex ? 2 : 1))
                    }
                },
                setOneToMoreScore(e, t, s, a) {
                    let r = this;
                    r.IsClick = a,
                    r.oneTomoreData[e].scoreIndex = t,
                    r.oneTomoreData[e].studentScore = r.oneTomoreData[e].sourcegrain[t].source;
                    let i = 0;
                    r.oneTomoreData.forEach((e => {
                        i += e.studentScore
                    }
                    )),
                    r.totalSource = i;
                    let o = sessionStorage.getItem("Score-More-" + r.flagid);
                    if (!(0,
                    n.lF)(o)) {
                        let s = JSON.parse(o);
                        s[e].source = r.oneTomoreData[e].sourcegrain[t].source,
                        sessionStorage.setItem("Score-More-" + r.flagid, JSON.stringify(s))
                    }
                    r.oneTomoreDataString = JSON.stringify(r.oneTomoreData),
                    r.setScore(0 == r.totalSource ? 0 : r.totalSource == r.data.questionScore ? 999 : -1, a)
                },
                setOneToMoreScoreTag() {
                    let e = this
                      , t = [];
                    e.oneTomoreData.forEach((e => {
                        t.push({
                            questionId: e.questionId,
                            source: e.studentScore
                        })
                    }
                    )),
                    sessionStorage.setItem("Score-More-" + e.flagid, JSON.stringify(t))
                },
                submitOneToMoreData() {
                    let e = this
                      , t = []
                      , s = 0;
                    e.oneTomoreData.map(( (a, r) => {
                        e.gradeindex >= 0 && (a.scoreIndex = 0 == e.gradeindex ? a.sourcegrain.length - 1 : 0);
                        let i = a.sourcegrain[a.scoreIndex].source;
                        s += i;
                        let o = {
                            questionId: a.questionId,
                            studentId: JSON.parse(sessionStorage.getItem("course_userInfo")).userId,
                            studentScore: i,
                            readOverTag: e.IsClick ? 1 : 0,
                            judgeTag: a.questionScore == i ? 1 : 0 == i ? 0 : 2
                        };
                        0 == e.orType ? o.courseId = e.data.courseId : o.paperId = e.data.paperId,
                        t.push(o),
                        a.studentScore = i,
                        e.setOneToMoreScoreTag()
                    }
                    )),
                    e.totalSource = s,
                    e.setOneToMoreScoreReadover(s, t)
                },
                setOneToMoreScoreReadover(e, t) {
                    let s = this;
                    if (e < 0)
                        return;
                    let a = {
                        judgeTag: 0 == e ? 0 : e == s.data.questionScore ? 1 : 2,
                        questionId: s.data.id,
                        studentId: JSON.parse(sessionStorage.getItem("course_userInfo")).userId,
                        studentScore: e,
                        teacherReadOverContent: s.getTeacherReadOverContent(),
                        readOverTag: s.IsClick ? 1 : 0,
                        answer: s.data.answer,
                        readAttachmentList: s.data.readAttachmentList
                    };
                    0 == s.orType ? a.courseId = s.data.courseId : a.paperId = s.data.paperId,
                    t.unshift(a),
                    s.isHandwriting ? s.stuReadover(t) : (0,
                    i.CP)(t, s.orType).then((e => {
                        s.isHandwriting = !1,
                        s.HandwritingImg = []
                    }
                    ))
                },
                getScoreIndex(e) {
                    let t = this
                      , s = sessionStorage.getItem("Score-More-" + t.flagid)
                      , a = 0;
                    if ((0,
                    n.lF)(s))
                        return e.forEach((e => {
                            let s = t.answer.filter((t => t.questionId == e.questionId));
                            if (a += e.studentScore,
                            t.answer.length > 0)
                                for (let t = 0; t < e.sourcegrain.length; t++)
                                    if (s[0].studentScore == e.sourcegrain[t].source) {
                                        e.scoreIndex = t;
                                        break
                                    }
                        }
                        )),
                        t.totalSource = a,
                        t.setScore(0 == t.totalSource ? 0 : t.totalSource == t.data.questionScore ? 999 : -1, !1),
                        e;
                    let r = JSON.parse(s);
                    return e.forEach(( (e, t) => {
                        let s = r.filter((t => t.questionId == e.questionId));
                        if (r.length > 0)
                            for (let r = 0; r < e.sourcegrain.length; r++)
                                if (s[0].source == e.sourcegrain[r].source) {
                                    e.scoreIndex = r,
                                    e.studentScore = s[0].source,
                                    a += e.sourcegrain[r].source;
                                    break
                                }
                    }
                    )),
                    t.totalSource = a,
                    t.setScore(0 == t.totalSource ? 0 : t.totalSource == t.data.questionScore ? 999 : -1, !1),
                    e
                },
                tabQue(e, t) {
                    let s = this;
                    -1 != e && s.itemIndex != e && (s.isHandwriting ? s.$message.warning("笔记还未保存，请先保存") : (s.itemIndex = e,
                    s.extraTag = t.extraTag,
                    s.setBoardImg(t.attachmentLinkAddress)))
                },
                Readover(e, t, s) {
                    let a = this;
                    if (1 != a.data.selfReadOverSwitch)
                        return;
                    a.dd = {
                        questionId: e,
                        source: t,
                        judgeTag: s
                    };
                    let r = "undefined" == typeof t ? a.totalSource : t;
                    if (r < 0)
                        return;
                    let o = {
                        courseId: a.data.courseId,
                        judgeTag: "undefined" == typeof s ? 1 == a.gradeindex ? 0 : -1 == a.gradeindex ? 2 : 1 : s,
                        questionId: "undefined" == typeof e ? a.data.id : e,
                        studentId: JSON.parse(sessionStorage.getItem("course_userInfo")).userId,
                        studentScore: r,
                        teacherReadOverContent: a.getTeacherReadOverContent(),
                        readOverTag: a.IsClick || r >= 0 ? 1 : 0,
                        answer: a.data.answer,
                        readAttachmentList: a.data.readAttachmentList
                    };
                    0 == a.orType ? o.courseId = a.data.courseId : o.paperId = a.data.paperId;
                    let n = [];
                    n.push(o),
                    a.isHandwriting ? a.stuReadover(n) : (0,
                    i.CP)(n, a.orType).then((e => {
                        a.isHandwriting = !1,
                        a.HandwritingImg = []
                    }
                    ))
                },
                stuReadover(e) {
                    let t = this;
                    t.issave ? t.$message.warning("图像正在保存") : (t.issave = !0,
                    t.$message.info("图像保存中..."),
                    t.$refs.board.save((s => {
                        console.log(s),
                        (0,
                        i.ws)({
                            uploadFile: s
                        }).then((s => {
                            if (0 == s.code) {
                                s.extra.extraTag = t.extraTag,
                                t.itemList[t.itemIndex] = s.extra,
                                t.isHandwriting = !1,
                                t.issave = !1,
                                t.setBoardImg(s.extra.attachmentLinkAddress),
                                e[0].readAttachmentList = t.itemList;
                                let a = 0;
                                if (t.isOneToMore)
                                    t.oneTomoreData.forEach((e => {
                                        a += e.studentScore
                                    }
                                    ));
                                else {
                                    let e = sessionStorage.getItem("Score-" + t.data.id)
                                      , s = t.answer.filter((e => e.questionId == t.data.id));
                                    a = (0,
                                    n.lF)(e) ? 0 == s.length ? -1 : s[0].studentScore : e
                                }
                                e[0].studentScore = a,
                                sessionStorage.setItem("ItemImg-" + t.flagid, JSON.stringify(t.itemList)),
                                (0,
                                i.CP)(e, t.orType).then((e => {
                                    t.$message.success("图像上传成功")
                                }
                                ))
                            }
                        }
                        ))
                    }
                    )))
                },
                setBoardImg(e) {
                    let t = this;
                    t.BoardImg = "",
                    setTimeout(( () => {
                        t.BoardImg = "/exam" + e
                    }
                    ), 50)
                },
                setHandwriting(e) {
                    this.isHandwriting = e
                },
                LookAnswer() {
                    0 != this.openAnswer ? this.modalvisible = !0 : this.$message.warning("教师还未公共成绩，无法查看答案")
                },
                LookComments() {
                    let e = this;
                    "" != e.replaceImg(e.getTeacherReadOverContent()) ? e.commentsvisible = !0 : e.$message.warning("老师未对该题做批注")
                },
                close() {
                    let e = this;
                    e.isOneToMore && 1 == e.selfReadOverSwitch && (e.IsClick && e.submitOneToMoreData(),
                    sessionStorage.setItem("totalSource-" + e.data.id, e.totalSource));
                    let t = e.isOneToMore ? 0 == e.totalSource ? 1 : e.totalSource == e.data.questionScore ? 0 : -1 : e.gradeindex;
                    e.data = {},
                    e.setBoardImg(""),
                    e.answer = [],
                    e.$parent.CloseOneselfReviewWindows(e.queIndex, t, e.score[e.scoreindex], e.IsClick),
                    e.itemList = []
                },
                getTeacherReadOverContent() {
                    let e = this
                      , t = "";
                    return e.answer.forEach((s => {
                        s.questionId != e.data.id || s.firstQuestionId != e.data.id && null != s.firstQuestionId || (t = s.teacherReadOverContent)
                    }
                    )),
                    t
                },
                replaceImg(e) {
                    return null == e || "" == e ? "" : e.replace(/<img/g, "<img style='max-width:100%'")
                },
                uploadFile() {
                    if (this.isUpload)
                        return void this.$message.warning("图片上传中...");
                    let e = this;
                    0 == this.orType ? (0,
                    i.O2)(e.data.courseId).then((t => {
                        const s = t.extra
                          , a = s.find((t => t.questionId == e.data.id));
                        if (null != a) {
                            let t = a.attachments;
                            if (t.filter((e => 5 == e.questionAttachmentType && 1 == e.extraTag)).length >= 3)
                                return void e.$message.warning("只能添加三张图片，请刷新页面删除后再添加！");
                            this.$refs.fileUpload.click()
                        } else
                            this.$refs.fileUpload.click()
                    }
                    )) : (0,
                    o.O2)(e.data.paperId).then((t => {
                        const s = t.extra
                          , a = s.find((t => t.questionId == e.data.id));
                        if (null != a) {
                            let t = a.attachments;
                            if (t.filter((e => 5 == e.questionAttachmentType && 1 == e.extraTag)).length >= 3)
                                return void e.$message.warning("只能添加三张图片，请刷新页面删除后再添加！");
                            this.$refs.fileUpload.click()
                        } else
                            this.$refs.fileUpload.click()
                    }
                    ))
                },
                UpLoadImg(e) {
                    let t = this
                      , s = e.target.files[0];
                    s && (0,
                    n.GP)(s).then((e => {
                        t.isEditImg = !0,
                        t.$refs.cropper.init(e, 0)
                    }
                    ))
                },
                CropperFinish(e) {
                    let t = this;
                    t.isUpload = !0;
                    let s = (0,
                    n.Ll)(e, (0,
                    n.wY)() + ".jpg");
                    t.closeCropper();
                    let a = new Image;
                    function r(e) {
                        (0,
                        i.ws)({
                            uploadFile: e
                        }).then((e => {
                            t.isUpload = !1,
                            0 == e.code ? 0 == t.orType ? (0,
                            i.KJ)(t.data.courseId, t.data.id, e.extra.id).then((s => {
                                if (e.extra.extraTag = 1,
                                0 == s.code) {
                                    t.itemList.push(e.extra),
                                    t.$parent.getAlreadyAnswer(t.data.courseId, (e => {
                                        let s = e.filter((e => e.questionId == t.data.id));
                                        t.originalitemList = s[0].attachments
                                    }
                                    ));
                                    let s = t.itemList.length - 1;
                                    t.tabQue(s, t.itemList[s])
                                }
                            }
                            )) : (0,
                            o.KJ)(t.data.paperId, t.data.id, e.extra.id).then((s => {
                                if (e.extra.extraTag = 1,
                                0 == s.code) {
                                    t.itemList.push(e.extra),
                                    t.$parent.getStuAnaswerInfo(t.data.paperId, (e => {
                                        let s = e.filter((e => e.questionId == t.data.id));
                                        t.originalitemList = s[0].attachments
                                    }
                                    ));
                                    let s = t.itemList.length - 1;
                                    t.tabQue(s, t.itemList[s])
                                }
                            }
                            )) : t.$message.error(e.message)
                        }
                        ))
                    }
                    a.src = e,
                    a.onload = function() {
                        s.size / 1024 > 500 ? (0,
                        n.sU)(s, Math.floor(a.width * Math.sqrt(500 / (s.size / 1024)))).then((e => {
                            r((0,
                            n.hl)(e, (0,
                            n.wY)() + ".jpg"))
                        }
                        )) : r(s)
                    }
                },
                closeCropper() {
                    this.$refs.fileUpload.value = "",
                    this.isEditImg = !1
                },
                DeleteAnnex(e, t) {
                    let s = this;
                    s.$confirm({
                        title: "确定要删除这张图吗？",
                        onOk() {
                            if (0 == s.orType) {
                                let a = s.itemList[e]
                                  , r = s.originalitemList[e];
                                a.id == r.id ? (0,
                                i.fi)(s.data.courseId, s.data.id, t.id).then((t => {
                                    0 == t.code && (s.itemList.splice(e, 1),
                                    s.$parent.getAlreadyAnswer(s.data.courseId, (e => {
                                        let t = e.filter((e => e.questionId == s.data.id))[0];
                                        s.originalitemList = t.attachments,
                                        s.tabQue(0, s.itemList[0])
                                    }
                                    )))
                                }
                                )) : (0,
                                i.fi)(s.data.courseId, s.data.id, a.id).then((t => {
                                    0 == t.code && (0,
                                    i.fi)(s.data.courseId, s.data.id, r.id).then((t => {
                                        0 == t.code && (s.itemList.splice(e, 1),
                                        s.$parent.getAlreadyAnswer(s.data.courseId, (e => {
                                            let t = e.filter((e => e.questionId == s.data.id))[0];
                                            s.originalitemList = t.attachments,
                                            s.tabQue(0, s.itemList[0])
                                        }
                                        )))
                                    }
                                    ))
                                }
                                ))
                            } else {
                                let a = s.itemList[e]
                                  , r = s.originalitemList[e];
                                a.id == r.id ? (0,
                                o.fi)(s.data.paperId, s.data.id, t.id).then((t => {
                                    0 == t.code && (s.itemList.splice(e, 1),
                                    s.$parent.getStuAnaswerInfo(s.data.paperId, (e => {
                                        let t = e.filter((e => e.questionId == s.data.id))[0];
                                        s.originalitemList = t.attachments,
                                        s.tabQue(0, s.itemList[0])
                                    }
                                    )))
                                }
                                )) : (0,
                                o.fi)(s.data.paperId, s.data.id, a.id).then((t => {
                                    0 == t.code && (0,
                                    o.fi)(s.data.paperId, s.data.id, r.id).then((t => {
                                        0 == t.code && (s.itemList.splice(e, 1),
                                        s.$parent.getStuAnaswerInfo(s.data.paperId, (e => {
                                            let t = e.filter((e => e.questionId == s.data.id))[0];
                                            s.originalitemList = t.attachments,
                                            s.tabQue(0, s.itemList[0])
                                        }
                                        )))
                                    }
                                    ))
                                }
                                ))
                            }
                        },
                        onCancel() {
                            console.log("Cancel")
                        }
                    })
                },
                getQuestionErrorContent(e) {
                    let t = this
                      , s = t.ErrorContent.filter((t => t.questionId == e));
                    return s.length > 0 ? s[0].wrongCause : ""
                }
            }
        }
          , l = d
          , c = s(70713)
          , u = (0,
        c.Z)(l, a, r, !1, null, "134810bb", null)
          , g = u.exports
    }
}]);
