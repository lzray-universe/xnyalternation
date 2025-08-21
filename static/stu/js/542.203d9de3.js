"use strict";
(self["webpackChunkstu_project"] = self["webpackChunkstu_project"] || []).push([[542], {
    75535: function(t, e, a) {
        a.r(e),
        a.d(e, {
            default: function() {
                return g
            }
        });
        var s = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "quesContent",
                class: {
                    active: t.data.id === t.selectId,
                    important: 1 === t.data.pointSwitch || 1 === t.data.mustHandleSwitch
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [t.selectId !== t.data.id || 1 != t.courseInfo.mappingStatus && 0 !== t.contentType ? t._e() : a("ul", [2 === t.contentType ? [0 == t.data.childList.length ? a("li", [a("a-dropdown", {
                attrs: {
                    trigger: ["click"]
                },
                scopedSlots: t._u([{
                    key: "overlay",
                    fn: function() {
                        return [a("a-menu", {
                            on: {
                                click: t.ErrorMenuClick
                            }
                        }, t._l(t.errorOption, (function(e) {
                            return a("a-menu-item", {
                                key: e.value,
                                style: {
                                    background: t.ErrorContent.filter((function(e) {
                                        return e.questionId == t.data.id
                                    }
                                    )).length > 0 && t.ErrorContent.filter((function(e) {
                                        return e.questionId == t.data.id
                                    }
                                    ))[0].wrongCause == e.value ? e.bg : "#fff",
                                    color: t.ErrorContent.filter((function(e) {
                                        return e.questionId == t.data.id
                                    }
                                    )).length > 0 && t.ErrorContent.filter((function(e) {
                                        return e.questionId == t.data.id
                                    }
                                    ))[0].wrongCause == e.value ? "#fff" : "#000"
                                }
                            }, [t._v(" " + t._s(e.label) + " ")])
                        }
                        )), 1)]
                    },
                    proxy: !0
                }], null, !1, 4013395535),
                model: {
                    value: t.errorvisible,
                    callback: function(e) {
                        t.errorvisible = e
                    },
                    expression: "errorvisible"
                }
            }, [a("a-button", {
                staticClass: "ant-btn ant-btn-sm ant-btn-block",
                attrs: {
                    size: "small"
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        function(t) {
                            return t.preventDefault()
                        }
                        .apply(null, arguments)
                    }
                }
            }, [t._v(" 错因 ")])], 1)], 1) : a("li", [a("a-dropdown", {
                attrs: {
                    trigger: ["click"]
                },
                scopedSlots: t._u([{
                    key: "overlay",
                    fn: function() {
                        return [a("a-menu", {
                            on: {
                                click: t.ErrorMenuClick
                            }
                        }, [[2, 3].includes(t.data.questionType) ? a("a-sub-menu", {
                            key: t.data.id,
                            attrs: {
                                title: "题号" + t.data.childList[0].questionNumber + "-" + t.data.childList[t.data.childList.length - 1].questionNumber
                            }
                        }, t._l(t.errorOption, (function(e) {
                            return a("a-menu-item", {
                                key: e.value,
                                style: {
                                    background: t.ErrorContent.filter((function(e) {
                                        return e.questionId == t.data.id
                                    }
                                    )).length > 0 && t.ErrorContent.filter((function(e) {
                                        return e.questionId == t.data.id
                                    }
                                    ))[0].wrongCause == e.value ? e.bg : "#fff",
                                    color: t.ErrorContent.filter((function(e) {
                                        return e.questionId == t.data.id
                                    }
                                    )).length > 0 && t.ErrorContent.filter((function(e) {
                                        return e.questionId == t.data.id
                                    }
                                    ))[0].wrongCause == e.value ? "#fff" : "#000"
                                }
                            }, [t._v(" " + t._s(e.label) + " ")])
                        }
                        )), 1) : t._e(), t._l(t.data.childList, (function(e) {
                            return a("a-sub-menu", {
                                key: e.id,
                                attrs: {
                                    title: "题号" + e.questionNumber
                                }
                            }, t._l(t.errorOption, (function(s) {
                                return a("a-menu-item", {
                                    key: s.value,
                                    style: {
                                        background: t.ErrorContent.filter((function(t) {
                                            return t.questionId == e.id
                                        }
                                        )).length > 0 && t.ErrorContent.filter((function(t) {
                                            return t.questionId == e.id
                                        }
                                        ))[0].wrongCause == s.value ? s.bg : "#fff",
                                        color: t.ErrorContent.filter((function(t) {
                                            return t.questionId == e.id
                                        }
                                        )).length > 0 && t.ErrorContent.filter((function(t) {
                                            return t.questionId == e.id
                                        }
                                        ))[0].wrongCause == s.value ? "#fff" : "#000"
                                    }
                                }, [t._v(" " + t._s(s.label) + " ")])
                            }
                            )), 1)
                        }
                        ))], 2)]
                    },
                    proxy: !0
                }], null, !1, 509355498),
                model: {
                    value: t.errorvisible,
                    callback: function(e) {
                        t.errorvisible = e
                    },
                    expression: "errorvisible"
                }
            }, [a("a-button", {
                staticClass: "ant-btn ant-btn-sm ant-btn-block",
                attrs: {
                    size: "small"
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        function(t) {
                            return t.preventDefault()
                        }
                        .apply(null, arguments)
                    }
                }
            }, [t._v(" 错因 ")])], 1)], 1)] : t._e(), a("li", [a("a-button", {
                attrs: {
                    block: "",
                    size: "small",
                    type: t.isshowCollect ? "primary" : ""
                },
                on: {
                    click: t.showCollect
                }
            }, [t._v("收藏")])], 1), a("li", [a("a-button", {
                attrs: {
                    type: t.isshowDiscussArea ? "primary" : "",
                    block: "",
                    size: "small"
                },
                on: {
                    click: t.showDiscussArea
                }
            }, [t._v(" 提问 ")])], 1)], 2), 0 === t.contentType ? a("div", {
                staticClass: "textContent",
                on: {
                    click: function(e) {
                        return t.changeSelectId(t.data, 0)
                    }
                }
            }, [0 !== t.data.titleLevel ? a("a-icon", {
                attrs: {
                    type: t.data.titleLevelCaret && 1 === t.data.titleLevelCaret ? "caret-down" : "caret-right"
                }
            }) : t._e(), a("div", {
                staticStyle: {
                    width: "100%"
                },
                domProps: {
                    innerHTML: t._s(t.replaceImg(t.data.textContent))
                }
            })], 1) : t._e(), 1 === t.contentType ? a("div", {
                staticClass: "file",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.changeSelectId(t.data, 0)
                    }
                }
            }, [a("div", {
                staticClass: "fileContent",
                on: {
                    click: t.viewFiles
                }
            }, [a("a-icon", {
                style: {
                    fontSize: "32px",
                    color: t.getIconColor(t.data.attachmentExtraName),
                    marginRight: "10px"
                },
                attrs: {
                    type: t.getFileIcon(t.data.attachmentExtraName)
                }
            }), ".mp3" === t.data.attachmentExtraName ? a("span", [t._v(" " + t._s(t.data.attachmentName))]) : a("span", {
                on: {
                    click: t.viewFile
                }
            }, [t._v(" " + t._s(t.data.attachmentName))]), ".mp3" === t.data.attachmentExtraName ? a("audio", {
                attrs: {
                    controls: "controls",
                    loop: "loop",
                    controlslist: "nodownload",
                    src: "/exam/" + (t.deDes ? t.deDes(t.data.attachmentLinkAddress) : t.data.attachmentLinkAddress).replace(/^\\/+/, "")
                }
            }) : t._e()], 1), a("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 == t.data.downloadSwitch,
                    expression: "data.downloadSwitch == 1"
                }],
                staticClass: "donw",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.DownLoadFile(t.data)
                    }
                }
            }, [a("a-icon", {
                attrs: {
                    type: "download"
                }
            })], 1)]) : t._e(), 2 === t.contentType ? a("div", {
                staticClass: "itemContent",
                on: {
                    click: function(e) {
                        return t.changeSelectId(t.data, 0)
                    }
                }
            }, [a("div", {
                staticClass: "tagBox",
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [0 == t.data.childList.length ? [a("a-tag", {
                attrs: {
                    color: "#636f9f"
                }
            }, [t._v("题号：" + t._s(t.data.questionNumber))])] : [a("a-tag", {
                attrs: {
                    color: "#636f9f"
                }
            }, [t._v("题号：" + t._s(t.data.childList[0].questionNumber))]), a("span", {
                staticClass: "mr-5"
            }, [t._v("-")]), a("a-tag", {
                attrs: {
                    color: "#636f9f"
                }
            }, [t._v("题号：" + t._s(t.data.childList[t.data.childList.length - 1].questionNumber))])], a("a-tag", [t._v("分数：" + t._s(t.data.questionScore))]), 1 === t.data.mustDoSwitch ? a("a-tag", {
                attrs: {
                    color: "#FF9933"
                }
            }, [t._v("必做")]) : t._e(), 1 === t.data.selfReadOverSwitch ? a("a-tag", {
                attrs: {
                    color: "#FF9933"
                }
            }, [t._v("自阅")]) : t._e(), t.thisItemAnswer.length > 0 && (!t.thisItemAnswer[0].isDraft || t.alreadyAnswer[0] && 1 === t.alreadyAnswer[0].abandonTag) && t.getIsEntire() ? [0 == t.data.childList.length && t.data.difficultyLevel > 0 ? a("span", {
                staticClass: "b",
                style: {
                    color: 3 == t.data.difficultyLevel ? "#A0CF12" : 2 == t.data.difficultyLevel ? "#F78D43" : "#FB5050",
                    "font-size": "12px"
                }
            }, [t._v(t._s(3 == t.data.difficultyLevel ? "基础" : 2 == t.data.difficultyLevel ? "中等" : "困难"))]) : [t.IsSetDifficultyLevel(t.data.childList) ? a("a-dropdown", {
                attrs: {
                    trigger: ["click"]
                },
                scopedSlots: t._u([{
                    key: "overlay",
                    fn: function() {
                        return [a("a-menu", [t._l(t.data.childList, (function(e) {
                            return [e.difficultyLevel > 0 ? a("a-menu-item", {
                                key: e.id
                            }, [a("span", {
                                staticClass: "b",
                                style: {
                                    color: 3 == e.difficultyLevel ? "#A0CF12" : 2 == e.difficultyLevel ? "#F78D43" : "#FB5050",
                                    "font-size": "12px"
                                }
                            }, [a("span", {
                                staticStyle: {
                                    color: "#333"
                                }
                            }, [t._v("题号" + t._s(e.questionNumber) + ": ")]), t._v(t._s(3 == e.difficultyLevel ? "基础" : 2 == e.difficultyLevel ? "中等" : "困难"))])]) : t._e()]
                        }
                        ))], 2)]
                    },
                    proxy: !0
                }], null, !1, 2198109675)
            }, [a("a-button", {
                staticStyle: {
                    background: "#FFF",
                    color: "#278af4",
                    "font-size": "12px",
                    border: "0px",
                    height: "20px",
                    "margin-top": "2px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    click: function(t) {
                        return t.preventDefault()
                    }
                }
            }, [t._v(" 试题难度 "), a("a-icon", {
                attrs: {
                    type: "caret-down"
                }
            })], 1)], 1) : t._e()]] : t._e(), 1 === t.data.groupTag ? a("a-tag", {
                attrs: {
                    color: "#FF9933"
                }
            }, [a("span", {
                staticClass: "iconfont lx-guanlian",
                staticStyle: {
                    color: "#fff"
                }
            })]) : t._e(), t.data.attachmentEntityList ? [t._l(t.data.attachmentEntityList.filter((function(t) {
                return 1 === t.attachmentMappingType
            }
            )), (function(e) {
                return [2 === e.attachmentType ? a("a-icon", {
                    key: e.id,
                    style: {
                        fontSize: "18px",
                        color: "#FF5B5B"
                    },
                    attrs: {
                        type: "file-pdf"
                    },
                    on: {
                        click: function(a) {
                            return t.viewFile(1, e)
                        }
                    }
                }) : t._e(), 3 === e.attachmentType ? a("img", {
                    key: e.id,
                    staticStyle: {
                        width: "18px",
                        cursor: "pointer"
                    },
                    attrs: {
                        src: t.playid == e.id ? t.imgsrc2 : t.imgsrc1
                    },
                    on: {
                        click: function(a) {
                            return a.stopPropagation(),
                            t.PlayAudio(e, t.index)
                        }
                    }
                }) : t._e(), 4 === e.attachmentType ? a("a-icon", {
                    key: e.id,
                    style: {
                        fontSize: "18px",
                        color: "#00D870"
                    },
                    attrs: {
                        type: "play-square"
                    },
                    on: {
                        click: function(a) {
                            return t.viewFile(1, e)
                        }
                    }
                }) : t._e()]
            }
            ))] : t._e()], 2), a("div", {
                staticClass: "txt",
                domProps: {
                    innerHTML: t._s(t.replaceImg(t.data.questionStem))
                }
            })]) : t._e(), [0, 1].includes(t.data.questionType) && t.thisItemAnswer.length > 0 && !t.thisItemAnswer[0].isDraft && t.getIsEntire() ? a("div", {
                staticClass: "alreadyAnswer"
            }, [0 == t.data.childList.length ? a("div", [a("span", {
                staticClass: "answer error-box"
            }, [t._v(t._s(t.getQuestionsAnswer(null)) + " "), "" != t.getQuestionErrorContent(t.data.id) ? a("span", {
                class: ["badge-box", "badge" + t.getQuestionErrorContent(t.data.id)]
            }, [t._v(t._s(t.getQuestionErrorContent(t.data.id)))]) : t._e()]), t.getQuestionsJudgeTag(t.data, 0) ? a("a-icon", {
                staticClass: "icon error",
                attrs: {
                    type: "close"
                }
            }) : t._e(), t.getQuestionsJudgeTag(t.data, 1) ? a("a-icon", {
                staticClass: "icon true",
                attrs: {
                    type: "check"
                }
            }) : t._e(), t.getQuestionsJudgeTag(t.data, 2) ? a("i", {
                staticClass: "icon iconfont lx-partially-line partRight",
                staticStyle: {
                    "font-size": "26px"
                }
            }) : t._e()], 1) : a("div", t._l(t.data.childList, (function(e) {
                return a("div", {
                    key: e.id,
                    staticStyle: {
                        margin: "10px 0"
                    }
                }, [a("span", {
                    staticClass: "th-btn mr-5"
                }, [t._v("题号：" + t._s(e.questionNumber))]), a("span", {
                    staticClass: "answer error-box"
                }, [t._v(" " + t._s(t.getQuestionsAnswer(e)) + " "), "" != t.getQuestionErrorContent(e.id) ? a("span", {
                    class: ["badge-box", "badge" + t.getQuestionErrorContent(e.id)]
                }, [t._v(t._s(t.getQuestionErrorContent(e.id)))]) : t._e()]), t.getQuestionsJudgeTag(e, 0) ? a("a-icon", {
                    staticClass: "icon error",
                    attrs: {
                        type: "close"
                    }
                }) : t._e(), t.getQuestionsJudgeTag(e, 1) ? a("a-icon", {
                    staticClass: "icon true",
                    attrs: {
                        type: "check"
                    }
                }) : t._e(), t.getQuestionsJudgeTag(e, 2) ? a("i", {
                    staticClass: "icon iconfont lx-partially-line partRight",
                    staticStyle: {
                        "font-size": "26px"
                    }
                }) : t._e()], 1)
            }
            )), 0)]) : a("div", [[0, 1].includes(t.data.questionType) ? [t._l(t.answerData, (function(e, s) {
                return a("div", {
                    key: s,
                    staticClass: "myAnswer"
                }, [a("div", {
                    style: {
                        display: "flex",
                        "padding-top": t.data.id === t.selectId || t.showAnswerCard ? "7px" : "0px"
                    }
                }, [0 == t.courseInfo.mappingStatus && t.data.childList.length > 0 ? a("span", [t.data.childList.length > 0 && (!t.getOptionStatus() && ![0, 1].includes(t.data.questionType) || 0 != t.courseInfo.mappingStatus || t.selectId != t.data.id) && !t.showAnswerCard && t.getBtnStatus1() ? a("span", {
                    staticClass: "th-btn",
                    staticStyle: {
                        height: "35px",
                        "margin-top": "3px",
                        "margin-right": "5px",
                        display: "block"
                    }
                }, [t._v(" 题号：" + t._s(t.data.childList[s].questionNumber) + " ")]) : t._e()]) : t._e(), 1 == t.courseInfo.mappingStatus && t.data.childList.length > 0 ? a("span", [(t.getOptionStatus() || [0, 1].includes(t.data.questionType)) && "" == t.GetStudentAnswer(e) && (t.selectId == t.data.id || t.showAnswerCard) || !(t.data.childList.length > 0) || t.getQuesItem(e.id) && t.getQuesItem(e.id).isDraft && (t.selectId == t.data.id || t.showAnswerCard) ? t._e() : a("span", {
                    staticClass: "th-btn",
                    staticStyle: {
                        height: "35px",
                        "margin-top": "3px",
                        "margin-right": "5px",
                        display: "block"
                    }
                }, [t._v(" 题号：" + t._s(t.data.childList[s].questionNumber) + " ")])]) : t._e(), t.getBtnStatus(e) ? t._e() : a("div", {
                    staticClass: "alreadyAnswer"
                }, [a("span", {
                    staticClass: "answer"
                }, [t._v("未作答")])]), t.getBtnStatus1() || t.data.id === t.selectId || t.showAnswerCard || 1 == t.courseInfo.mappingStatus? a("div", {
                    staticClass: "result"
                }, [t._v(" " + t._s(t.GetStudentAnswer(e)) + " ")]) : t._e()]), t.data.id === t.selectId && /*t.getOptionStatus()*/ true || [0, 1].includes(t.data.questionType) && t.showAnswerCard ? a("a-space", {
                    attrs: {
                        size: 10
                    }
                }, [/*t.getQuestionsIsDraft(e)*/ true ? [t.answerData.length > 1 && t.data.childList.length > 0 ? a("span", {
                    staticClass: "th-btn"
                }, [t._v("题号：" + t._s(t.data.childList[s].questionNumber))]) : t._e(), t._l(e.items, (function(i) {
                    return a("a-button", {
                        key: i,
                        staticStyle: {
                            width: "65px"
                        },
                        attrs: {
                            type: t.GetStudentAnswer(e).indexOf(i) >= 0 ? "primary" : ""
                        },
                        on: {
                            click: function(a) {
                                return t.changeAnswer(s, i, e)
                            }
                        }
                    }, [t._v(" " + t._s(i) + " ")])
                }
                ))] : t._e(), 1 === t.courseInfo.mappingStatus && t.getBtnStatus(e) && 1 == t.data.chooseZoneCounts && t.getQuestionsIsDraft(e) || true ? a("a-button", {
                    attrs: {
                        // disabled: t.giveUpStatus,
                        type: "danger"
                    },
                    on: {
                        click: function(e) {
                            return t.giveUpStuAnaswer("", 0, 1, t.data)
                        }
                    }
                }, [t._v(" 放弃补交看答案 ")]) : t._e()], 2) : t._e()], 1)
            }
            )), a("div", {
                staticStyle: {
                    "margin-top": "10px"
                }
            }, [1 === t.courseInfo.mappingStatus && t.getOptionStatus() && !t.isAll && (t.data.id === t.selectId || t.showAnswerCard) && t.data.chooseZoneCounts > 1 && [0, 1].includes(t.data.questionType)? a("a-button", {
                attrs: {
                    type: "danger",
                    // disabled: t.giveUpStatus
                },
                on: {
                    click: function(e) {
                        return t.giveUpStuAnaswer("", 0, 1, t.data)
                    }
                }
            }, [t._v("放弃补交看答案")]) : t._e()], 1)] : t._e()], 2), [2, 3].includes(t.data.questionType) && t.thisItemAnswer.length > 0 && !t.thisItemAnswer[0].isDraft ? [a("div", {
                staticClass: "result2"
            }, [0 === t.subjectiveQuesData.length ? a("div", {
                staticClass: "imgBox error-box",
                class: {
                    errorBorder: 0 === t.getJudgeTag() || t.getQuestionsIsAbandonTag(t.data),
                    trueBorder: 1 === t.getJudgeTag(),
                    partRightBorder: 2 === t.getJudgeTag()
                }
            }, [t.getQuestionsIsAbandonTag(t.data) ? a("span", {
                staticClass: "font-source",
                staticStyle: {
                    color: "#f00"
                }
            }, [t._v("0"), a("span", {
                staticStyle: {
                    "font-size": "20px"
                }
            }, [t._v("分")])]) : a("span", [t._v("未作答")]), -1 != t.getJudgeTag() ? a("i", {
                staticClass: "iconfont lx-wrong"
            }) : t._e(), "" != t.getQuestionErrorContent(t.data.id) ? a("span", {
                class: ["badge-box", "badge" + t.getQuestionErrorContent(t.data.id)]
            }, [t._v(t._s(t.getQuestionErrorContent(t.data.id)))]) : t._e()]) : t._e(), t._l(t.subjectiveQuesData.filter((function(t) {
                return 5 === t.questionAttachmentType
            }
            )), (function(e, s) {
                return a("div", {
                    key: e.id,
                    staticClass: "imgBox error-box 11",
                    class: {
                        errorBorder: 0 === t.getJudgeTag(),
                        trueBorder: 1 === t.getJudgeTag(),
                        partRightBorder: 2 === t.getJudgeTag()
                    },
                    on: {
                        click: function(e) {
                            return t.previewImg(s, t.subjectiveQuesData)
                        }
                    }
                }, [a("div", {
                    staticClass: "bg",
                    style: {
                        backgroundImage: "url(/exam" + t.subjectiveQuesData.filter((function(t) {
                            return 4 === t.questionAttachmentType
                        }
                        )).slice(0, 1)[0].attachmentLinkAddress + ")"
                    }
                }, [t.isReview() && t.getJudgeTag() >= 0 ? a("span", {
                    staticClass: "font-source",
                    style: {
                        color: 0 == t.getTotalSource() ? "#f00" : t.getTotalSource() == t.data.questionScore ? "#00d86f" : "#ff9300"
                    }
                }, [t._v(t._s(t.getTotalSource())), a("span", {
                    staticStyle: {
                        "font-size": "20px"
                    }
                }, [t._v("分")])]) : t._e(), a("img", {
                    attrs: {
                        src: "/exam" + e.attachmentLinkAddress
                    }
                })]), "" != t.getQuestionErrorContent(t.data.id) ? a("span", {
                    class: ["badge-box", "badge" + t.getQuestionErrorContent(t.data.id)]
                }, [t._v(t._s(t.getQuestionErrorContent(t.data.id)))]) : t._e()])
            }
            )), t.courseShareList.length > 0 ? t._l(t.courseShareList, (function(e) {
                return a("div", {
                    key: e.stuId,
                    staticClass: "share-box"
                }, [t._l(e.readAttachmentList.filter((function(t) {
                    return 5 === t.attachmentType
                }
                )), (function(s, i) {
                    return a("div", {
                        key: s.id,
                        staticClass: "imgBox error-box",
                        class: {
                            errorBorder: 0 === e.judgeTag && 1 == e.readOverTag,
                            trueBorder: 1 === e.judgeTag && 1 == e.readOverTag,
                            partRightBorder: 2 === e.judgeTag && 1 == e.readOverTag
                        },
                        on: {
                            click: function(a) {
                                return t.previewImg(i, e.readAttachmentList, 0, e)
                            }
                        }
                    }, [a("div", {
                        staticClass: "bg",
                        style: {
                            backgroundImage: "url(/exam" + e.stuAttachmentList.filter((function(t) {
                                return 5 === t.attachmentType
                            }
                            )).slice(0, 1)[0].attachmentLinkAddress + ")"
                        }
                    }, [a("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == e.readOverTag,
                            expression: "share.readOverTag == 1"
                        }],
                        staticClass: "font-source",
                        style: {
                            color: 0 == e.studentScore ? "#f00" : e.studentScore == e.questionScore ? "#00d86f" : "#ff9300"
                        }
                    }, [t._v(t._s(e.studentScore)), a("span", {
                        staticStyle: {
                            "font-size": "20px"
                        }
                    }, [t._v("分")])]), a("img", {
                        attrs: {
                            src: "/exam" + s.attachmentLinkAddress
                        }
                    })]), "" != t.getQuestionErrorContent(t.data.id) ? a("span", {
                        class: ["badge-box", "badge" + t.getQuestionErrorContent(e.questionId)]
                    }, [t._v(t._s(t.getQuestionErrorContent(e.questionId)))]) : t._e()])
                }
                )), a("div", {
                    staticClass: "name"
                }, [a("a-icon", {
                    attrs: {
                        type: "share-alt"
                    }
                }), t._v(" "), a("span", [t._v(t._s(e.stuName))])], 1)], 2)
            }
            )) : t._e(),a("a-space", {
                staticStyle: {
                    display: "flex"
                },
                attrs: {
                    size: 10
                }
            }, [ [a("div", {
                staticClass: "paizhao-btn"
            }, [a("a-button", {
                staticStyle: {
                    "min-width": "100px"
                },
                attrs: {
                    icon: "camera",
                    type: "primary"
                }
            }, [t._v(" 拍照作答 ")]), 0 == t.photoType ? a("input", {
                ref: "fileUpload",
                staticClass: "input-file",
                attrs: {
                    type: "file",
                    accept: "image/*",
                    multiple: "multiple"
                },
                on: {
                    change: function(e) {
                        return t.EditImg(e)
                    }
                }
            }) : t._e(), 1 == t.photoType ? a("input", {
                ref: "fileUpload",
                staticClass: "input-file",
                attrs: {
                    type: "file",
                    accept: "image/*",
                    capture: "camera"
                },
                on: {
                    change: function(e) {
                        return t.EditImg(e)
                    }
                }
            }) : t._e(), 2 == t.photoType ? a("input", {
                ref: "fileUpload",
                staticClass: "input-file",
                attrs: {
                    type: "file",
                    accept: "image/*"
                },
                on: {
                    change: function(e) {
                        return t.EditImg(e)
                    }
                }
            }) : t._e()], 1), a("a-button", {
                staticStyle: {
                    "min-width": "100px"
                },
                attrs: {
                    icon: "edit"
                },
                on: {
                    click: t.openWriteModal
                }
            }, [t._v("手写作答")]), 1 === t.courseInfo.mappingStatus && t.getOptionStatus() || true ? a("a-button", {
                staticStyle: {
                    "min-width": "100px"
                },
                attrs: {
                    type: "danger",
                    // disabled: t.giveUpStatus
                },
                on: {
                    click: function(e) {
                        return t.giveUpStuAnaswer("", 0, 1, t.data)
                    }
                }
            }, [t._v(" 放弃补交看答案 ")]) : t._e()]], 2)], 2)] : [[2, 3].includes(t.data.questionType) && (t.data.id === t.selectId || t.showAnswerCard || 1 == t.courseInfo.mappingStatus) || t.subjectiveQuesData.length > 0   ? a("div", {
                staticClass: "myAnswer"
            }, [t.data.id === t.selectId || t.subjectiveQuesData.length > 0 || t.showAnswerCard || 1 == t.courseInfo.mappingStatus && [2, 3].includes(t.data.questionType)   ? [a("div", {
                staticClass: "result2"
            }, [t._l(t.getAlreadyAnswerReadOverTag() ? t.subjectiveQuesData.filter((function(t) {
                return 4 === t.questionAttachmentType && 0 == t.extraTag
            }
            )) : t.subjectiveQuesData.filter((function(t) {
                return 4 === t.questionAttachmentType
            }
            )), (function(e) {
                return a("div", {
                    key: e.id,
                    staticClass: "imgBox",
                    class: {
                        errorBorder: t.getAlreadyAnswerReadOverTag()
                    }
                }, [t.getAlreadyAnswerReadOverTag() ? t._e() : a("a-icon", {
                    staticClass: "deleteICon",
                    attrs: {
                        type: "close-circle"
                    },
                    on: {
                        click: function(a) {
                            return a.stopPropagation(),
                            t.deleteAnswer(e)
                        }
                    }
                }), t.getAlreadyAnswerReadOverTag() ? a("span", {
                    staticClass: "font-source",
                    staticStyle: {
                        color: "#f00"
                    }
                }, [t._v("0"), a("span", {
                    staticStyle: {
                        "font-size": "20px"
                    }
                }, [t._v("分")])]) : t._e(), t.getAlreadyAnswerReadOverTag()   ? a("img", {
                    attrs: {
                        src: "/exam" + e.attachmentLinkAddress
                    },
                    on: {
                        click: function(e) {
                            return t.previewImg(0, t.subjectiveQuesData)
                        }
                    }
                }) : a("img", {
                    directives: [{
                        name: "viewer",
                        rawName: "v-viewer"
                    }],
                    attrs: {
                        src: "/exam" + e.attachmentLinkAddress
                    }
                }),], 1)
            }
            )), 0 === t.subjectiveQuesData.filter((function(t) {
                return 5 === t.questionAttachmentType
            }
            )).length || t.uploadStatus   ? a("div", {
                staticClass: "imgBox"
            }, [t._v(" " + t._s(t.uploadStatus ? "上传中..." : "图片") + " ")]) : t._e()], 2), t.data.id === t.selectId && t.getOptionStatus() || [2, 3].includes(t.data.questionType) && t.showAnswerCard? a("a-space", {
                staticStyle: {
                    display: "flex"
                },
                attrs: {
                    size: 10
                }
            }, [ [a("div", {
                staticClass: "paizhao-btn"
            }, [a("a-button", {
                staticStyle: {
                    "min-width": "100px"
                },
                attrs: {
                    icon: "camera",
                    type: "primary"
                }
            }, [t._v(" 拍照作答 ")]), 0 == t.photoType ? a("input", {
                ref: "fileUpload",
                staticClass: "input-file",
                attrs: {
                    type: "file",
                    accept: "image/*",
                    multiple: "multiple"
                },
                on: {
                    change: function(e) {
                        return t.EditImg(e)
                    }
                }
            }) : t._e(), 1 == t.photoType ? a("input", {
                ref: "fileUpload",
                staticClass: "input-file",
                attrs: {
                    type: "file",
                    accept: "image/*",
                    capture: "camera"
                },
                on: {
                    change: function(e) {
                        return t.EditImg(e)
                    }
                }
            }) : t._e(), 2 == t.photoType ? a("input", {
                ref: "fileUpload",
                staticClass: "input-file",
                attrs: {
                    type: "file",
                    accept: "image/*"
                },
                on: {
                    change: function(e) {
                        return t.EditImg(e)
                    }
                }
            }) : t._e()], 1), a("a-button", {
                staticStyle: {
                    "min-width": "100px"
                },
                attrs: {
                    icon: "edit"
                },
                on: {
                    click: t.openWriteModal
                }
            }, [t._v("手写作答")]), 1 === t.courseInfo.mappingStatus && t.getOptionStatus() || true ? a("a-button", {
                staticStyle: {
                    "min-width": "100px"
                },
                attrs: {
                    type: "danger",
                    // disabled: t.giveUpStatus
                },
                on: {
                    click: function(e) {
                        return t.giveUpStuAnaswer("", 0, 1, t.data)
                    }
                }
            }, [t._v(" 放弃补交看答案 ")]) : t._e()]], 2) : t._e()] : t._e()], 2) : t._e()], a("div", {}, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.data.asked || null != t.data.askShareDTOList && t.data.askShareDTOList.length > 0,
                    expression: "\n        data.asked ||\n        (data.askShareDTOList != null && data.askShareDTOList.length > 0)\n      "
                }],
                staticClass: "btn-area"
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.data.asked,
                    expression: "data.asked"
                }],
                class: ["btn", t.data.read || t.data.replayRedTag ? "btn2" : "btn1"],
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.showDiscussArea()
                    }
                }
            }, [a("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.data.replayRedTag,
                    expression: "data.replayRedTag"
                }],
                staticClass: "speck"
            }), t._v(" " + t._s(t.data.read || t.data.replayRedTag ? "!" : "?") + " 我的提问 ")]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: null != t.data.askShareDTOList && t.data.askShareDTOList.length > 0,
                    expression: "\n          data.askShareDTOList != null && data.askShareDTOList.length > 0\n        "
                }]
            }, t._l(t.data.askShareDTOList, (function(e) {
                return a("div", {
                    key: e.id,
                    staticClass: "btn btn2",
                    on: {
                        click: function(a) {
                            return a.stopPropagation(),
                            t.shareWindos(e)
                        }
                    }
                }, [a("a-icon", {
                    attrs: {
                        type: "share-alt"
                    }
                }), t._v(" " + t._s(e.studentName) + " ")], 1)
            }
            )), 0)])]), t.selectId === t.data.id && t.thisItemAnswer.length > 0 && ((!t.thisItemAnswer[0].isDraft || t.alreadyAnswer[0] && 1 === t.alreadyAnswer[0].abandonTag) && t.getIsEntire() || t.getAlreadyAnswerReadOverTag()) ? [a("div", {
                staticClass: "mt-20"
            }, [a("div", {
                staticClass: "c-24469F"
            }, [t._v("【答案】")]), a("div", {
                staticClass: "questionAnswer",
                domProps: {
                    innerHTML: t._s(t.replaceImg(t.data.answer))
                }
            }), a("div", {
                staticClass: "c-24469F"
            }, [t._v("【解析】")]), a("div", {
                staticClass: "questionAnalysis",
                domProps: {
                    innerHTML: t._s(t.replaceImg(t.data.questionAnalysis))
                }
            }), a("div", {
                staticClass: "c-24469F"
            }, [t._v("【追加解析】")]), a("div", {
                staticClass: "questionAnalysis",
                domProps: {
                    innerHTML: t._s(t.replaceImg(t.data.addToQuestionAnalysis))
                }
            }), t.data.attachmentEntityList && 0 != this.courseInfo.mappingStatus ? a("div", {
                staticClass: "annex"
            }, [a("div", {
                staticClass: "c-24469F"
            }, [t._v("【附件】")]), a("div", {
                staticClass: "annexBox"
            }, [a("a-space", {
                attrs: {
                    size: 10
                }
            }, t._l(t.data.attachmentEntityList.filter((function(t) {
                return 1 !== t.attachmentMappingType
            }
            )), (function(e) {
                return a("div", {
                    key: e.id,
                    staticClass: "fileItem",
                    on: {
                        click: function(a) {
                            return t.viewFile(1, e)
                        }
                    }
                }, [a("div", {
                    staticClass: "iconBox"
                }, [a("a-icon", {
                    style: {
                        fontSize: "32px",
                        color: t.getIconColor(e.attachmentExtraName),
                        marginRight: "10px"
                    },
                    attrs: {
                        type: t.getFileIcon(e.attachmentExtraName)
                    }
                })], 1), a("div", {
                    staticClass: "annexfileName"
                }, [t._v(" " + t._s(e.attachmentName) + " ")])])
            }
            )), 0)], 1)]) : t._e(), a("div", {
                staticClass: "courseTag"
            }, t._l(t.data.kls, (function(e) {
                return a("div", {
                    key: e.id,
                    staticClass: "c-24469F"
                }, [t._v(" 【" + t._s(0 === e.libType ? "素养" : 1 === e.libType ? "能力" : "知识点") + "】"), a("div", {
                    staticClass: "ml-20",
                    staticStyle: {
                        color: "#7983F0"
                    }
                }, [t._v(t._s(e.libNumber) + t._s(e.libName))])])
            }
            )), 0)])] : t._e(), 1 === t.data.questionTalkingSwitch ? a("a-button", {
                staticStyle: {
                    width: "130px",
                    "margin-top": "10px"
                },
                attrs: {
                    type: "primary",
                    ghost: "",
                    size: "small"
                }
            }, [t._v(" 讨论区 ")]) : t._e(), a("a-modal", {
                attrs: {
                    width: 870,
                    title: "文件预览1",
                    footer: null
                },
                on: {
                    cancel: function(e) {
                        return t.ChoseShowWin()
                    }
                },
                model: {
                    value: t.visible,
                    callback: function(e) {
                        t.visible = e
                    },
                    expression: "visible"
                }
            }, [".pdf" == t.data.attachmentExtraName || ".doc" == t.data.attachmentExtraName || ".docx" == t.data.attachmentExtraName || ".ppt" == t.data.attachmentExtraName || ".pptx" == t.data.attachmentExtraName ? a("iframe", {
                staticStyle: {
                    height: "500px",
                    "overflow-y": "auto"
                },
                attrs: {
                    src: "/exam/pdf/web/viewer.html?file=/exam/" + (t.deDes ? t.deDes(t.videoFile) : t.videoFile).replace(/^\\/+/, ""),
                    width: "100%",
                    frameborder: "0"
                }
            }) : ".mp3" == t.data.attachmentExtraName ? a("iframe", {
                staticStyle: {
                    height: "500px",
                    "overflow-y": "auto"
                },
                attrs: {
                    src: "/exam/" + (t.deDes ? t.deDes(t.videoFile) : t.videoFile).replace(/^\\/+/, ""),
                    width: "100%",
                    frameborder: "0"
                }
            }) : ".mp4" == t.data.attachmentExtraName || ".aiv" == t.data.attachmentExtraName ? a("div", [a("video", {
                ref: "myVideo",
                staticStyle: {
                    height: "500px",
                    "overflow-y": "auto"
                },
                attrs: {
                    id: "video",
                    controls: "controls",
                    controlslist: "nodownload",
                    loop: "loop",
                    src: "/exam/" + (t.deDes ? t.deDes(t.videoFile) : t.videoFile).replace(/^\\/+/, ""),
                    width: "100%"
                }
            }), "pad" == t.source ? a("div", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    id: "components-dropdown-demo-placement"
                }
            }, [a("a-dropdown", {
                attrs: {
                    placement: t.topLeft
                }
            }, [a("a-button", [t._v("播放倍速")]), a("a-menu", {
                attrs: {
                    slot: "overlay"
                },
                slot: "overlay"
            }, [a("a-menu-item", {
                on: {
                    click: function(e) {
                        return t.playbackRate(.75)
                    }
                }
            }, [t._v(" × 0.75 ")]), a("a-menu-item", {
                on: {
                    click: function(e) {
                        return t.playbackRate(1)
                    }
                }
            }, [t._v(" × 1 ")]), a("a-menu-item", {
                on: {
                    click: function(e) {
                        return t.playbackRate(1.5)
                    }
                }
            }, [t._v(" × 1.5 ")]), a("a-menu-item", {
                on: {
                    click: function(e) {
                        return t.playbackRate(2)
                    }
                }
            }, [t._v(" × 2 ")])], 1)], 1)], 1) : t._e()]) : [t._v("暂时无法预览")]], 2), t.showHandleWrite ? a("div", {
                staticClass: "write"
            }, [a("div", {
                staticClass: "canvasAnswer"
            }, [t.showHandleWrite ? a("Canvas", {
                ref: "answerCanvas",
                staticClass: "answerCanvas",
                on: {
                    canvasUpload: t.canvasUpload
                }
            }) : t._e()], 1), a("div", {
                staticClass: "box",
                staticStyle: {
                    "line-height": "50px",
                    "border-top": "1px solid #dbdbdb"
                }
            }, [a("div", {
                staticClass: "flex ml-15"
            }, [a("a-button", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    type: t.showHandleStem ? "primary" : ""
                },
                on: {
                    click: t.showHandleStemOpt
                }
            }, [t._v("查看题干")])], 1), a("div", {
                staticClass: "flex txt-r"
            }, [a("a-button", {
                staticStyle: {
                    "margin-right": "20px"
                },
                on: {
                    click: function(e) {
                        t.showHandleWrite = !1
                    }
                }
            }, [t._v("取消")]), a("a-button", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    type: "primary"
                },
                on: {
                    click: t.saveCanvas
                }
            }, [t._v(" 确定 ")])], 1)])]) : t._e()], 2)
        }
          , i = []
          , n = a(31783)
          , r = a.n(n)
          , o = a(1496)
          , l = a(68354)
          , d = a(34665)
          , c = {
            name: "Question",
            props: {
                selectId: [String, Number],
                contentType: [Number],
                alreadyAnswer: [Array],
                showAnswerCard: [Boolean],
                data: {
                    type: Object,
                    required: !0
                },
                index: [Number],
                isAll: [Boolean],
                ErrorContent: [Array],
                courseShareList: [Array]
            },
            components: {
                Canvas: ()=>a.e(617).then(a.bind(a, 78617))
            },
            data() {
                return {
                    imgsrc1: a(51793),
                    imgsrc2: a(33101),
                    showHandleWrite: !1,
                    showHandleStem: !1,
                    option: "",
                    optionList: [{
                        label: "A",
                        value: "A"
                    }, {
                        label: "B",
                        value: "B"
                    }, {
                        label: "C",
                        value: "C"
                    }, {
                        label: "D",
                        value: "D"
                    }],
                    errorvisible: !1,
                    errorOption: [{
                        label: "6.没看懂题",
                        value: 6,
                        bg: "#1F1F1F"
                    }, {
                        label: "5.没有思路",
                        value: 5,
                        bg: "#8726FE"
                    }, {
                        label: "4.知识概念",
                        value: 4,
                        bg: "#FF0000"
                    }, {
                        label: "3.过程错误",
                        value: 3,
                        bg: "#D71278"
                    }, {
                        label: "2.结果错误",
                        value: 2,
                        bg: "#FF9933"
                    }, {
                        label: "1.粗心大意",
                        value: 1,
                        bg: "#2EDC72"
                    }],
                    visible: !1,
                    answerData: [],
                    myAnswer: [],
                    giveUpStatus: !1,
                    isEditImg: !1,
                    fileName: "",
                    videoFile: "",
                    CurrPlayAudio: {},
                    audio: null,
                    playAudio: {
                        src: "",
                        play: !1
                    },
                    imgStatus: -1,
                    isshowDiscussArea: !1,
                    isshowCollect: !1,
                    source: "pc",
                    playid: -1,
                    isUpload: !1,
                    uploadStatus: !1,
                    photoType: 0
                }
            },
            computed: {
                ...(0,
                d.rn)({
                    courseInfo: t=>t.c.courseInfo,
                    courseId: t=>t.c.courseId,
                    courseContentData: t=>t.c.courseContentData
                }),
                answerItems() {
                    return Array.from(new Array(this.data.answerCard.split(",").length), ((t,e)=>String.fromCharCode(65 + e)))
                },
                thisItemAnswer() {
                    return this.alreadyAnswer.filter((t=>t.questionId === this.data.id))
                },
                subjectiveQuesData() {
                    return this.thisItemAnswer.length > 0 && null !== this.thisItemAnswer[0].attachments && this.thisItemAnswer[0].attachments.length > 0 ? this.thisItemAnswer[0].attachments : []
                },
                i() {
                    return this.courseContentData.findIndex((t=>t.content.id === this.data.id))
                }
            },
            mounted() {
                const t = this;
                t.photoType = window.$config.photoType,
                t.source = sessionStorage.getItem("source"),
                t.setAnswerData(),
                t.$bus.on("setAnswerData", (e=>{
                    setTimeout((()=>{
                        t.answerData = [],
                        t.setAnswerData()
                    }
                    ), 700)
                }
                ))
            },
            beforeDestroy() {},
            methods: {
                ...(0,
                d.OI)("c", ["setCourseContentId"]),
                getFileIcon(t) {
                    return (0,
                    l.MR)(t)
                },
                getIconColor(t) {
                    return (0,
                    l.Nt)(t)
                },
                getAlreadyAnswerReadOverTag() {
                    let t = this
                      , e = t.data
                      , a = t.alreadyAnswer;
                    return null != a && 0 != a.length && (0 != a.filter((t=>t.questionId == e.id)).length && (0 != a.filter((t=>t.questionId == e.id && !t.isDraft)).length && 1 == a.filter((t=>t.questionId == e.id && !t.isDraft))[0].readOverTag))
                },
                setAnswerData() {
                    const t = this;
                    if ([0, 1].includes(t.data.questionType)) {
                        let e = (0,
                        l.$L)(t.data.childList);
                        for (let a = 0; a < (e ? null == t.data.chooseZoneCounts ? 1 : t.data.chooseZoneCounts : t.data.childList.length); a++)
                            t.answerData.push({
                                id: e ? t.data.id : t.data.childList[a].id,
                                items: t.answerItems,
                                answerArr: []
                            })
                    }
                    [0, 1].includes(t.data.questionType) && t.alreadyAnswer.length > 0 && t.alreadyAnswer.map((e=>{
                        if (e.questionId === t.data.id && null !== e.studentAnswer)
                            if (0 === t.data.questionType) {
                                if (null === e.studentAnswer)
                                    return void (t.answerData[0].answerArr = []);
                                t.answerData[0].answerArr = [e.studentAnswer]
                            } else if (1 === t.data.questionType) {
                                if (null === e.studentAnswer)
                                    return void (t.answerData[0].answerArr = []);
                                e.studentAnswer.length > 1 ? t.answerData[0].answerArr = e.studentAnswer.split(",") : t.answerData[0].answerArr = [e.studentAnswer]
                            }
                    }
                    ))
                },
                GetStudentAnswer(t) {
                    let e = this.alreadyAnswer.filter((e=>e.questionId === t.id))
                      , a = 0 == e.length ? "" : e[0].studentAnswer;
                    return null == a ? "" : a
                },
                getQuesItem(t) {
                    let e = this.alreadyAnswer.filter((e=>e.questionId === t));
                    return 0 == e.length ? null : e[0]
                },
                getQuestionsIsDraft(t) {
                    let e = this.alreadyAnswer.filter((e=>e.questionId === t.id));
                    return 0 == e.length || e[0].isDraft
                },
                getQuestionsIsAbandonTag(t) {
                    let e = this.alreadyAnswer.filter((e=>e.questionId === t.id));
                    return 0 != e.length && 1 == e[0].abandonTag
                },
                getIsEntire() {
                    let t = this
                      , e = this.alreadyAnswer.filter((e=>e.questionId === t.data.id))
                      , a = !0;
                    if (0 == e.length)
                        a = !1;
                    else if (1 == e[0].abandonTag)
                        a = !0;
                    else {
                        let e = this.alreadyAnswer.filter((e=>e.firstQuestionId === t.data.id && e.firstQuestionId != e.questionId && !e.isDraft));
                        a = e.length == (null == t.data.childList ? 0 : t.data.childList.length)
                    }
                    return a
                },
                getBtnStatus(t) {
                    let e = this.alreadyAnswer.filter((e=>e.questionId === t.id))
                      , a = 0 == e.length || 1 != e[0].abandonTag;
                    return a
                },
                getBtnStatus1() {
                    let t = 0 == this.data.childList.length ? this.alreadyAnswer.filter((t=>t.questionId === this.data.id)) : this.alreadyAnswer.filter((t=>t.firstQuestionId === this.data.id));
                    return t.length > 0
                },
                getQuestionsAnswer(t) {
                    if (null == t) {
                        let t = this.alreadyAnswer.filter((t=>t.questionId === this.data.id))
                          , e = 0 == t.length ? "" : t[0].studentAnswer;
                        return "" == e || null == e ? "未作答" : e
                    }
                    let e = this.alreadyAnswer.filter((e=>e.questionId === t.id))
                      , a = 0 == e.length ? "" : e[0].studentAnswer;
                    return "" == a || null == a ? "未作答" : a
                },
                getQuestionsJudgeTag(t, e) {
                    let a = this.alreadyAnswer.filter((e=>e.questionId === t.id))
                      , s = 0 == a.length ? "" : a[0].judgeTag;
                    return s == e
                },
                getOptionStatus() {
                    let t = this;
                    if (0 == t.alreadyAnswer.length)
                        return !0;
                    let e = t.alreadyAnswer.filter((e=>e.firstQuestionId == t.data.id && !e.isDraft));
                    if (0 == e.length)
                        return !0;
                    let a = 0;
                    return e.forEach((t=>{
                        a += t.abandonTag
                    }
                    )),
                    0 == a
                },
                getJudgeTag() {
                    let t = this
                      , e = this.alreadyAnswer.filter((e=>(e.firstQuestionId == t.data.id && e.firstQuestionId == e.questionId || null == e.firstQuestionId && e.questionId == t.data.id) && 1 == e.readOverTag));
                    return 0 == e.length ? -1 : 1 == e[0].abandonTag ? 0 : 0 == e[0].readOverTag ? -1 : e[0].judgeTag
                },
                isReview() {
                    let t = this
                      , e = t.data.childList.length > 0
                      , a = 0;
                    if (e) {
                        let e = t.alreadyAnswer.filter((e=>e.questionId === t.data.id));
                        a += e[0].readOverTag,
                        t.data.childList.forEach((e=>{
                            let s = t.alreadyAnswer.filter((t=>t.questionId === e.id));
                            s.length > 0 && null != s[0].judgeTag && (a += s[0].readOverTag)
                        }
                        ))
                    } else {
                        let e = t.alreadyAnswer.filter((e=>e.questionId === t.data.id));
                        a = e[0].readOverTag
                    }
                    return a > 0
                },
                getTotalSource() {
                    let t = this
                      , e = t.data.childList.length > 0;
                    if (!e) {
                        let e = t.alreadyAnswer.filter((e=>e.questionId === t.data.id))
                          , a = sessionStorage.getItem("Score-" + t.data.id);
                        return (0,
                        l.lF)(a) ? e[0].studentScore : a
                    }
                    let a = sessionStorage.getItem("totalSource-" + t.data.id);
                    if ((0,
                    l.lF)(a)) {
                        let e = 0;
                        t.data.childList.forEach((a=>{
                            let s = t.alreadyAnswer.filter((t=>t.questionId === a.id));
                            s.length > 0 && null != s[0].judgeTag && (e += s[0].studentScore)
                        }
                        )),
                        a = e
                    }
                    return a
                },
                viewFile(t, e) {
                    if (this.visible = !0,
                    "undefined" != typeof e)
                        return this.data.attachmentExtraName = e.attachmentExtraName,
                        ".mp3" === this.data.attachmentExtraName || this.data.attachmentExtraName,
                        void (this.videoFile = e.attachmentLinkAddress);
                    this.$nextTick((()=>{
                        ".mp3" === this.data.attachmentExtraName && (this.$refs.myAudio.src = `/exam${this.data.attachmentLinkAddress}`)
                    }
                    )),
                    this.videoFile = this.data.attachmentLinkAddress
                },
                bodyCloseMenus(t) {
                    let e = this;
                    "" !== e.selectId && (e.$emit("update:selectId", ""),
                    this.setCourseContentId(""))
                },
                changeSelectId({id: t}, e) {
                    t == this.selectId && 1 == e || (0 === this.contentType && 1 === this.data.titleLevel && this.bb(this.data.titleLevelCaret),
                    this.$emit("update:selectId", this.selectId === t ? "" : t),
                    this.setCourseContentId(this.selectId === t ? "" : t))
                },
                changeAnswer(t, e, a) {
                    const s = this;
                    if (0 === s.data.questionType) {
                        if (s.answerData[t].answerArr.includes(e))
                            return s.answerData[t].answerArr = [],
                            void s.stuAnaswer(s.answerData[t].answerArr, 1 === s.courseInfo.mappingStatus ? 1 : 0, 0, 0 == s.data.childList.length ? s.data.id : s.data.childList[t].id);
                        s.answerData[t].answerArr = [e],
                        s.stuAnaswer(s.answerData[t].answerArr, 1 === s.courseInfo.mappingStatus ? 1 : 0, 0, 0 == s.data.childList.length ? s.data.id : s.data.childList[t].id)
                    } else
                        s.answerData[t].answerArr.includes(e) ? (s.answerData[t].answerArr = this.answerData[t].answerArr.filter((t=>t !== e)),
                        s.stuAnaswer(s.answerData[t].answerArr, 1 === s.courseInfo.mappingStatus ? 1 : 0, 0, 0 == s.data.childList.length ? s.data.id : s.data.childList[t].id)) : (s.answerData[t].answerArr.push(e),
                        s.answerData[t].answerArr = this.answerData[t].answerArr.sort(),
                        s.stuAnaswer(s.answerData[t].answerArr, 1 === s.courseInfo.mappingStatus ? 1 : 0, 0, 0 == s.data.childList.length ? s.data.id : s.data.childList[t].id))
                },
                stuAnaswer(t, e=0, a=0, s="") {
                    (0,
                    o.EP)({
                        courseId: this.data.courseId,
                        questionId: "" == s ? this.data.id : s,
                        studentAnswer: t.toString(),
                        resubmitTag: e,
                        abandonTag: a
                    }).then((()=>{
                        this.$emit("getAlreadyAnswer", this.data.courseId),
                        this.giveUpStatus = !1
                    }
                    ))
                },
                giveUpStuAnaswer(t, e=0, a=1, s) {
                    let i = this;
                    i.giveUpStatus || (i.giveUpStatus = !0,
                    (0,
                    o.EP)({
                        courseId: i.data.courseId,
                        questionId: i.data.id,
                        studentAnswer: t.toString(),
                        resubmitTag: e,
                        abandonTag: a
                    }).then((()=>{
                        i.$parent.submitCourseAgainData(),
                        setTimeout((()=>{
                            i.giveUpStatus = !1,
                            i.changeSelectId(s, 1)
                        }
                        ), 200)
                    }
                    )))
                },
                uploadFile() {
                    let t = this;
                    this.uploadStatus ? this.$message.warning("图片正在上传中...") : this.subjectiveQuesData.filter((t=>3 === t.questionAttachmentType)).length >= 5 ? this.$error({
                        title: "错误",
                        content: "只能添加三张图片，请删除后再添加！"
                    }) : (0,
                    o.O2)(t.data.courseId).then((e=>{
                        const a = e.extra
                          , s = a.find((e=>e.questionId == t.data.id));
                        if (null != s) {
                            let e = s.attachments;
                            if (e.filter((t=>5 == t.questionAttachmentType && 0 == t.extraTag)).length >= 3)
                                return void t.$message.warning("只能添加三张图片，请刷新页面删除后再添加！");
                            t.$refs.fileUpload.click()
                        } else
                            t.$refs.fileUpload.click()
                    }
                    ))
                },
                deleteAnswer(t) {
                    let e = this;
                    this.$confirm({
                        title: "确认删除这个作答吗？",
                        onOk() {
                            (0,
                            o.nz)(e.data.courseId, e.data.id, t.id).then((()=>{
                                e.$emit("getAlreadyAnswer", e.data.courseId),
                                e.$message.success("已删除")
                            }
                            ))
                        },
                        onCancel() {
                            console.log("Cancel")
                        }
                    })
                },
                EditImg(t) {
                    let e = this;
                    if (this.uploadStatus)
                        return void this.$message.warning("图片正在上传中...");
                    if (this.subjectiveQuesData.filter((t=>5 === t.questionAttachmentType)).length >= 3)
                        return void this.$error({
                            title: "错误",
                            content: "只能添加三张图片，请删除后再添加！"
                        });
                    (0,
                    o.O2)(e.data.courseId).then((t=>{
                        const a = t.extra
                          , s = a.find((t=>t.questionId == e.data.id));
                        if (null != s) {
                            let t = s.attachments;
                            if (t.filter((t=>5 == t.questionAttachmentType && 0 == t.extraTag)).length >= 3)
                                return e.$message.warning("只能添加三张图片，请刷新页面删除后再添加！"),
                                void (e.$refs.fileUpload.value = "")
                        }
                    }
                    ));
                    let a = t.target.files[0];
                    a && (e.fileName = a.name,
                    (0,
                    l.GP)(a).then((t=>{
                        e.$parent.showimg(t, e.index)
                    }
                    )))
                },
                IsUploadImg(t) {
                    this.uploadStatus = t
                },
                CropperFinish(t, e) {
                    let a = this;
                    try {
                        (0,
                        o.w1)(a.data.courseId, a.data.id, e.id).then((()=>{
                            a.$refs.fileUpload.value = "",
                            a.myAnswer.push(t),
                            a.$emit("getAlreadyAnswer", a.data.courseId),
                            a.IsUploadImg(!1)
                        }
                        ))
                    } catch (s) {
                        console.log(s)
                    }
                },
                closeCropper() {
                    try {
                        this.$refs.fileUpload.value = "",
                        this.isEditImg = !1
                    } catch {
                        this.isEditImg = !1
                    }
                },
                openWriteModal() {
                    let t = this;
                    this.myAnswer.length >= 3 ? this.$error({
                        title: "错误",
                        content: "只能添加三张图片，请删除后再添加！"
                    }) : t.subjectiveQuesData.filter((t=>5 === t.questionAttachmentType)).length >= 3 ? t.$message.warning("只能添加三张图片，请删除后再添加！") : t.showHandleWrite = !0
                },
                canvasUpload(t) {
                    let e = this;
                    new (r())(t,{
                        quality: 1,
                        success(a) {
                            let s = (0,
                            l.hl)(a, (new Date).getTime() + ".jpg");
                            (0,
                            o.ws)({
                                uploadFile: s
                            }).then((a=>{
                                a.extra && (0,
                                o.w1)(e.data.courseId, e.data.id, a.extra.id).then((a=>{
                                    e.isUpload = !1,
                                    e.myAnswer.push(t),
                                    e.showHandleWrite = !1,
                                    e.$refs.answerCanvas.clearCanvas(),
                                    e.$emit("getAlreadyAnswer", e.data.courseId)
                                }
                                ))
                            }
                            )).catch((()=>{
                                this.showHandleWrite = !1
                            }
                            ))
                        },
                        error(t) {
                            console.log(t.message)
                        }
                    })
                },
                showHandleStemOpt() {
                    let t = this;
                    t.showHandleStem = !t.showHandleStem,
                    t.$refs.answerCanvas.showSubject(t.showHandleStem, t.data)
                },
                saveCanvas() {
                    let t = this;
                    t.$refs.answerCanvas.optionContent().then((e=>{
                        e.isContent ? t.isUpload ? t.$message.warning("图片正在上传中") : t.subjectiveQuesData.filter((t=>5 === t.questionAttachmentType)).length >= 3 ? this.$error({
                            title: "错误",
                            content: "只能添加三张图片，请删除后再添加！"
                        }) : (t.isUpload = !0,
                        t.$refs.answerCanvas.save((e=>t.canvasUpload(e)))) : t.$message.warning("没有书写笔迹")
                    }
                    ))
                },
                viewFiles() {
                    (0,
                    o.Bn)(this.courseId, this.data.id).then((t=>{}
                    ))
                },
                showDiscussArea() {
                    let t = this;
                    t.IsShowDiscussArea(!0),
                    t.$parent.getAudioList(),
                    t.data.read = !!t.data.replayRedTag || t.data.read,
                    t.data.replayRedTag = !1,
                    t.$parent.showIndexDiscussArea(t.data, t.contentType, t.alreadyAnswer, t.index)
                },
                IsShowDiscussArea(t) {
                    this.isshowDiscussArea = t
                },
                showCollect() {
                    let t = this;
                    t.IsShowCollect(!0),
                    t.$parent.showCollectLayer(t.data, t.contentType, t.alreadyAnswer, t.index)
                },
                ErrorMenuClick(t) {
                    let e = this
                      , a = 0 == e.data.childList.length ? e.data.id : t.keyPath[1]
                      , s = 0
                      , i = e.ErrorContent.filter(((t,e)=>{
                        if (t.questionId == a)
                            return s = e,
                            t
                    }
                    ));
                    i.length > 0 ? i[0].wrongCause == t.keyPath[0] ? (0,
                    o.zr)(i[0].id).then((t=>{
                        t.extra && e.ErrorContent.splice(s, 1)
                    }
                    )) : (0,
                    o.qn)({
                        id: i[0].id,
                        courseId: e.data.courseId,
                        questionId: a,
                        studentId: JSON.parse(sessionStorage.getItem("course_userInfo")).userId,
                        wrongCause: t.keyPath[0]
                    }).then((t=>{
                        e.ErrorContent.splice(s, 1),
                        e.ErrorContent.push(t.extra)
                    }
                    )) : (0,
                    o.qn)({
                        id: 0,
                        courseId: e.data.courseId,
                        questionId: a,
                        studentId: JSON.parse(sessionStorage.getItem("course_userInfo")).userId,
                        wrongCause: t.keyPath[0]
                    }).then((t=>{
                        e.ErrorContent.push(t.extra)
                    }
                    ))
                },
                getQuestionErrorContent(t) {
                    let e = this
                      , a = e.ErrorContent.filter((e=>e.questionId == t));
                    return a.length > 0 ? a[0].wrongCause : ""
                },
                IsShowCollect(t) {
                    this.isshowCollect = t
                },
                ChoseShowWin() {
                    this.videoFile = ""
                },
                playbackRate(t) {
                    let e = document.getElementById("video");
                    e.playbackRate = t
                },
                shareWindos(t) {
                    let e = this;
                    e.$parent.shareWindos(t)
                },
                PausePlay() {
                    this.playid = -1
                },
                PlayAudio(t, e) {
                    this.$parent.PlayAudio(t, e)
                },
                setPlayid(t) {
                    this.playid = t
                },
                previewImg(t, e, a, s) {
                    let i = this
                      , n = "undefined" == typeof s ? null : s;
                    i.$parent.OneselfReviewWindows(t, e, i.data, i.alreadyAnswer, i.index, a, n, i.ErrorContent)
                },
                setImgStatus(t) {
                    let e = this
                      , a = e.alreadyAnswer.filter((t=>t.questionId == e.data.id));
                    a.length > 0 && (a[0].judgeTag = 0 == t ? 1 : -1 == t ? 2 : 0,
                    a[0].readOverTag = 1),
                    e.getTotalSource()
                },
                DownLoadFile(t) {
                    a=window.location
                    let fileName=t.attachmentName;
                    let ePath=(t.deDes?t.deDes(t.attachmentLinkAddress):t.attachmentLinkAddress).replace(/^\\/+/,"");
                    let url="/exam/"+ePath;
                    let size  = t.attachmentSize;
                    console.log(encodeURIComponent(fileName))
                    window.open(size<6000000?(a.protocol + "//" + a.host+"/downloadFile?url="+encodeURIComponent(url)+"&name="+encodeURIComponent(encodeURIComponent(fileName))):url)
                    // fetch(, {
                    //         method: 'POST', // 指定为 POST 请求
                    //         headers: {
                    //             'Content-Type': 'application/json' // 指定请求体为 JSON
                    //         },
                    //         body: JSON.stringify(data) // 将数据转换为 JSON 字符串
                    //     })
                    //     .then(response => {
                    //         if (!response.ok) {
                    //             throw new Error('Network response was not ok');
                    //         }
                    //     })
                    //     .catch(error => {
                    //         console.error('Request failed:', error);
                    //     });
                },
                IsSendNewMsg(t) {
                    this.data.replayRedTag = !1,
                    this.data.asked = !!t || this.data.asked,
                    this.data.read = !t
                },
                bb(t) {
                    let e = this.courseContentData.slice(this.i + 1).findIndex((t=>1 === t.content.titleLevel))
                      , a = [];
                    a = -1 === e ? this.courseContentData.slice(this.i + 1).map((t=>t.content.id)) : this.courseContentData.slice(this.i + 1).slice(0, e).map((t=>t.content.id));
                    let s = this.courseContentData.findIndex((t=>t.content.id === this.data.id));
                    1 === t ? (this.$store.commit("c/addTitleIds", a),
                    this.courseContentData[s].content.titleLevelCaret = 0,
                    this.$store.commit("c/setCourseContent", this.courseContentData)) : (this.$store.commit("c/removeTitleIds", a),
                    this.courseContentData[s].content.titleLevelCaret = 1,
                    this.$store.commit("c/setCourseContent", this.courseContentData))
                },
                replaceImg(t) {
                    return null == t || "" == t ? "" : t.replace(/<img/g, "<img style='max-width:100%'")
                },
                IsSetDifficultyLevel(t) {
                    if (0 == t.length)
                        return !1;
                    let e = 0;
                    return t.forEach((t=>{
                        e += t.difficultyLevel
                    }
                    )),
                    e > 0
                }
            }
        }
          , u = c
          , A = a(70713)
          , h = (0,
        A.Z)(u, s, i, !1, null, "707ca358", null)
          , g = h.exports
    },
    51793: function(t) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAHlGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZmFjLCAyMDIxLzExLzE3LTE3OjIzOjE5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDctMDZUMTk6MzE6MjErMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA3LTA2VDE5OjQyOjUxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA3LTA2VDE5OjQyOjUxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkRpc3BsYXkiIHBob3Rvc2hvcDpIaXN0b3J5PSIyMDIyLTA3LTA2VDE5OjI0OjM5KzA4OjAwJiN4OTvmlofku7Yg5pyq5qCH6aKYLTEg5bey5omT5byAJiN4QTsyMDIyLTA3LTA2VDE5OjM1OjMzKzA4OjAwJiN4OTvmlofku7YgX+acquagh+mimC0xNTg1NjRFMDJFRDEyQzk4MjFFQTlDQjNBRENDRTM3RjkucHNiIOW3suWtmOWCqCYjeEE7MjAyMi0wNy0wNlQxOTozODo0NyswODowMCYjeDk75paH5Lu2IOivremfsy3pnZkucG5nIOW3suWtmOWCqCYjeEE7MjAyMi0wNy0wNlQxOTo0Mjo1MSswODowMCYjeDk75paH5Lu2IOivremfsy3pnZkucG5nIOW3suWtmOWCqCYjeEE7IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVmYzExNWNhLWNjZTYtNDEzYy04MTE4LTFmNjViMWZiMmIyNCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk5ZjkwNWI0LWY0MTktMTc0My05NjczLWQyYTJiNjZkYjdkNCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjIyMzAyMTk3LTE2NGYtNDFhNS05NTk4LWM5MmY5MjA0MjZkMiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjIzMDIxOTctMTY0Zi00MWE1LTk1OTgtYzkyZjkyMDQyNmQyIiBzdEV2dDp3aGVuPSIyMDIyLTA3LTA2VDE5OjMxOjIxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuMSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmMxMTVjYS1jY2U2LTQxM2MtODExOC0xZjY1YjFmYjJiMjQiIHN0RXZ0OndoZW49IjIwMjItMDctMDZUMTk6NDI6NTErMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy4xIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpWuUFUAAAOFSURBVGiB1dlPjF5TGMfxj5lRhhKCdpoubESVooI0khK1tBSkhCYTov4tSiIRiVhUrLqQSIhIJCTaLspCwrb+JGxIBZGwoDFVjVZD6bTVqdfizKSvO8+5505473vnl9zFPPf87vt877nnnue5o9fryR0t6Bo8jdEmg8MchwiwCnvRw8tNDF0CuAxTs8nPHS8sFoBrsa+S/NwxuVCAkUFlWaMRLMmcewVXL+hqQ3qE1uBX8SzswXjTXIe5iDfgeAZi62IAgM0ZgL+ktdJ5ANiRgdi1WABWYH8G4rZhAVxV/fGCHswAvDMMgCulHfYkNjb0jOPLAGAaq9sEWI1v+xI4idsbejcGAD1sawtgHb4PEjgszUpJS/Fz4P8GY20AbA1+fO74FGc3uMa2wHtK2vhaeYQmpccmgniygX8NZgLvc20BwBMZgB9xUcF7pn+vobnjA4y0+RrdlYHY0sD7VuD7CSuiHAdVjT4jPUpV3dHA+1kQW4ZLo8GDAvgOO4P4WiwveD+W7nq/xvxHgOW4FTfJ1/JVvRHEzsP6gm8KR4L4ymhwE4CH8AV24xN8JIGU9FUmkRsLviMZ38XR4BLAJryKib7YOrwvNeV1OiwVaVVNBLF+ncDRIH5+NLgEsCUTv0CamTrN4I8gfm7B97cEUVX46JYArqg5V5oBOCOINXk/N/aVAH6pOXeo4D0LFwbx3wu+UXHZcTwaXALYXnNuR8E7IX5zTBV841JhV9Vv4ejCTnyO9D7v3xVPSOVCSXeKd+MNBd9K/Bn4Ho9yHCtcbBr34HVcP/v3bqn5KOnRIHYQnxd8l4sX+r5w9IBqoVvEd//dBt5nA98xrG2rFlqqr4uqqLRu4IYgtl+qZudrADPwmvju75HK5TqNm//Rt4f3crn+nwBLpLWS68qaVKLrM97Ngwa4GR/WJL9dvDlV9WbgPWa2Eh0kwAM1yX+NSxpcY5m0yUX9tEEDEPfDBzQrOci3ok+1BQD3Od2U79XscwqpVD4QJH9QXxndVk88ibdlOqiMng+S7+Gl/kFtNvUL0XVS/V9N/qi+z4pdBRiTurzo7s/bDLsI8GIm+UPSZ/dOAzyWSb6H+yNDlwDukv6NFCW/U2bT6wLAKO6W+t4o+R+kfjtUFwBWSV+bo+SnpTdSVl0AGMG95s/AjNTB1aoLAHPa5PSOfQoPNzF1CYD0j70pPNLUEOX4D6iZZ0OHW6EAAAAAAElFTkSuQmCC"
    },
    33101: function(t) {
        t.exports = "data:image/gif;base64,R0lGODlhMAAwAPehAAQEBB8fH9jY2I6Ojp6entXV1ejo6MbGxuDg4Pn5+QkJCQMDA19fX3l5edHR0SYmJggICBgYGDU1Nfv7+wUFBfPz8/b29r6+vldXV6GhodbW1mRkZPz8/DAwMEtLSzExMQYGBjg4OCgoKKenpx0dHebm5lNTUw4ODgEBAZCQkF1dXYaGhtPT07i4uBcXFzc3N/39/b29vXJycnx8fJmZmY2NjXNzc87Ozr+/v7m5ufX19QICAvr6+unp6RUVFaurqxAQEBwcHD09PXd3d/Hx8RoaGrW1tVVVVdDQ0FRUVCEhIREREcHBwcjIyAcHB4+PjwoKCkFBQdTU1KOjozQ0NGFhYT4+Ppubm01NTfj4+FlZWcLCwuvr6+rq6ry8vCsrK/f395iYmIGBgZycnK2traysrOzs7Kampg0NDVJSUiMjI9nZ2Wtra25ubtvb25eXlw8PD1hYWO/v7y8vL6+vryAgIKWlpTk5OVpaWnt7e4qKihsbGxISEsPDw2ZmZoeHh+3t7U5OToKCgmxsbGVlZT8/PxkZGcfHx+Tk5KioqC4uLhMTE4CAgCIiIqKiohQUFMvLyykpKc/Pz35+fqqqqkpKSmlpaQsLCy0tLZaWllFRUZOTk6mpqW9vb9LS0pSUlAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTQ4QjIyQTJGNTQ0MTFFQzgyMDhFMTFDRkExNjQ4RjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ4QjIyQTNGNTQ0MTFFQzgyMDhFMTFDRkExNjQ4RjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NDhCMjJBMEY1NDQxMUVDODIwOEUxMUNGQTE2NDhGOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NDhCMjJBMUY1NDQxMUVDODIwOEUxMUNGQTE2NDhGOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUyAKEALAAAAAAwADAAAAh+AEMJHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXHnRAI4DCVbSiAAK1IsDKTPU3AlEAMoPO3fKQKkgaE0PKAMYBcUAZYOlLVDqwLATxICVOVakcMCyq9evYMOKHUu2rNmzaNOqXcu2rcCAACH5BAUyAKEALBEACgAMABwAAAinAEMJDCUlxsCDAgsEADACoUAND0CBAmAEYRMlEiUuKXBwRsaMIcAcJADgI6gaCAeYJGEGoQmTTxCuofBRiEMVH9EYQOjFZBmEPU58HIJwgoiPDBxK+JjEIZWPRxBmUfNxA0IEED6KQfjD5AWEUT76IHKQiUksByss/Xjm4AaTHXgITFDFJCgyArdYsatl4Bi7X7qMLCnRhQCHUxaACsDRYSgCaRA4DAgAIfkEBTIAoQAsGwAAABAAMAAACP8AQwkM5eAPh4EIEwoIAMpSwodugoCa2ODhQCR7JmokYDHUDR8aJzrx1JEFn5CgOljoeMEJyhkdQ4VBSQFJzDgoTcQsYQhljJhXUGqKaQFTSAUaYo5AaSNmhQghI02IaSPkDhYxWSwIySgmjwchC8GIiSdkkRIxB4QEcCgmJBQhE8U0ACdkDaIkQlbsCENESDYxQ80JSSiwopB+YnIAq7GN0yIhJ8VEdCnkppgXUNKJKSgkBEkxA4VsBKijBYkaK8XsgzJMTBWeEXTscSJkiLQo9XTk4iLkIy4d86Ac1PEGlJBQkj6ccIdpx04oF6F9+AklKEcWKVFAieEhB05wQ9YekfNQwA6UCm5YhGEnPKgFPwJn2LrjTWCBV4JkChwQADs="
    }
}]);
