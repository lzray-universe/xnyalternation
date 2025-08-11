(self["webpackChunkstu_project"] = self["webpackChunkstu_project"] || []).push([[449], {
    23549: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            default: function() {
                return y
            }
        });
        var a = function() {
            console.trace();
            var e = this
              , t = this
              , a = t.$createElement
              , s = t._self._c || a;
            return s("div", {
                staticClass: "container content"
            }, ["" === t.teacherid ? s("div", {
                staticStyle: {
                    display: "flex",
                    "justify-content": "space-around",
                    "align-items": "center",
                    height: "calc(100vh - 150px)"
                }
            }, [s("a-empty")], 1) : [0 != t.teacherid ? s("div", {
                staticClass: "content"
            }, [s("keep-alive", [s("Tab", {
                attrs: {
                    teacherid: t.teacherid,
                    lookbacktime: t.lookbacktime,
                    types: t.type
                }
            })], 1), s("div", {
                ref: "container",
                staticClass: "content-box auto mt-10",
                on: {
                    scroll: t.handleScroll
                }
            }, [0 == t.type || 2 == t.type ? [s("ul", {
                staticClass: "ul-box box"
            }, [s("li", {
                staticClass: "l1 txt-c ml-20"
            }, [t._v("学科")]), s("li", {
                staticClass: "l3 txt-c"
            }, [t._v(t._s(2 == t.type ? "每日错题" : "错题总数"))]), s("li", {
                staticClass: "l3 txt-c"
            }, [t._v("待重做错题")]), t._m(0)]), t.wrongQuestionData ? s("div", [s("div", {
                staticClass: "box ul-box b-r-10",
                style: {
                    "background-color": t.SetColor(t.courseItem.subjectName)
                }
            }, [s("div", {
                staticClass: "l1 txt-c ml-20"
            }, [t._v(t._s(t.courseItem.subjectName))]), s("div", {
                staticClass: "l3 txt-c"
            }, [t._v(t._s(t.wrongQuestionData.totalCount))]), s("div", {
                staticClass: "l3 txt-c"
            }, [t._v(t._s(t.wrongQuestionData.reformedCount))]), s("div", {
                staticClass: "flex txt-c box"
            }, [s("div", {
                staticClass: "flex"
            }, [t._v(t._s(t.wrongQuestionData.highCount))]), s("div", {
                staticClass: "flex"
            }, [t._v(t._s(t.wrongQuestionData.middleCount))]), s("div", {
                staticClass: "flex"
            }, [t._v(t._s(t.wrongQuestionData.lowCount))])])])]) : t._e()] : t._e(), 1 == t.type ? [t._m(1), t.knowledgeLibData ? s("div", [s("div", {
                staticClass: "box ul-box b-r-10",
                style: {
                    "background-color": t.SetColor(t.courseItem.subjectName)
                }
            }, [s("div", {
                staticClass: "l1 txt-c ml-20"
            }, [t._v(t._s(t.courseItem.subjectName))]), s("div", {
                staticClass: "l3 txt-c"
            }, [t._v(t._s(t.knowledgeLibData.noMasterCount) + "/" + t._s(t.knowledgeLibData.totalCount))]), s("div", {
                staticClass: "l3 txt-c"
            }, [t._v(t._s(t.knowledgeLibData.reformedCount))]), s("div", {
                staticClass: "flex txt-c box"
            }, [s("div", {
                staticClass: "flex"
            }, [t._v(t._s(t.knowledgeLibData.highCount))]), s("div", {
                staticClass: "flex"
            }, [t._v(t._s(t.knowledgeLibData.middleCount))]), s("div", {
                staticClass: "flex"
            }, [t._v(t._s(t.knowledgeLibData.lowCount))])])])]) : t._e()] : t._e(), 0 == t.type ? [s("div", {
                staticClass: "table"
            }, [s("a-affix", {
                attrs: {
                    "offset-top": 0,
                    target: function() {
                        return e.$refs.container
                    }
                }
            }, [s("div", {
                staticClass: "th box"
            }, [s("div", {
                staticClass: "td flex txt-c r1 l1 t1 pos-r",
                staticStyle: {
                    "border-radius": "5px 0 0 0"
                }
            }, [s("a", {
                staticClass: "ant-dropdown-link",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.searchWin.apply(null, arguments)
                    }
                }
            }, [t._v(" 错题来源 "), s("a", {
                staticStyle: {
                    position: "relative",
                    top: "3px"
                }
            }, [s("svg", {
                staticClass: "icon",
                attrs: {
                    t: "1716516857800",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "8708",
                    width: "16",
                    height: "16"
                }
            }, [s("path", {
                attrs: {
                    d: "M904.0704 94.144c-8.576-12.928-21.312-30.144-38.4-30.144H38.7904c-12.8 0-29.888 17.28-34.112 30.144-8.576 12.928-4.288 34.496 4.224 47.36L298.8864 464.64v357.504c0 12.928 8.448 30.144 25.536 34.496l217.344 99.072c4.288 4.288 12.8 4.288 17.088 4.288 8.512 0 17.024 0 21.312-4.288 12.8-8.64 21.312-17.28 21.312-34.496l12.8-460.928 281.28-323.072c12.8-8.576 12.8-25.856 8.576-43.072zM520.3264 860.864l-136.32-64.576V494.784h149.12l-12.8 366.08z m34.112-456.576c-4.224 0-4.224 4.352-8.512 4.352H362.6944L132.5504 150.144h643.648L554.5024 404.288z",
                    fill: "#24469F",
                    "p-id": "8709"
                }
            }), s("path", {
                attrs: {
                    d: "M1023.3664 708.352c0-17.408-17.024-34.816-34.048-34.816h-272.832c-17.024 0-34.112 17.408-34.112 34.816v17.408c0 17.408 17.088 34.816 34.112 34.816h272.832c17.024 0 34.048-17.408 34.048-34.816v-17.408zM1023.3664 534.272c0-17.408-17.024-34.816-34.048-34.816h-272.832c-17.024 0-34.112 17.408-34.112 34.816v17.408c0 17.408 17.088 34.816 34.112 34.816h272.832c17.024 0 34.048-17.408 34.048-34.816v-17.408zM1023.3664 882.368c0-17.408-17.024-34.816-34.048-34.816h-272.832c-17.024 0-34.112 17.408-34.112 34.816v17.408c0 17.408 17.088 34.816 34.112 34.816h272.832c17.024 0 34.048-17.408 34.048-34.816v-17.408z",
                    fill: "#24469F",
                    "p-id": "8710"
                }
            })])])])]), s("div", {
                staticClass: "td w-70 txt-c r1 t1"
            }, [s("dropDown", {
                attrs: {
                    title: "题型",
                    type: "tixing",
                    columns: [{
                        value: 0,
                        name: "单选"
                    }, {
                        value: 1,
                        name: "不定项"
                    }, {
                        value: 2,
                        name: "填空"
                    }, {
                        value: 3,
                        name: "简答"
                    }]
                }
            })], 1), s("div", {
                staticClass: "td w-80 txt-c r1 t1"
            }, [s("a-dropdown", [s("a", {
                staticClass: "ant-dropdown-link"
            }, [t._v(" 难度系数 "), s("a-icon", {
                attrs: {
                    type: "caret-down"
                }
            })], 1), s("a-menu", {
                attrs: {
                    slot: "overlay"
                },
                on: {
                    click: t.setSort
                },
                slot: "overlay"
            }, t._l(t.orderOption, (function(e) {
                return s("a-menu-item", {
                    key: e.value,
                    style: {
                        background: t.key.xishu == e.value ? "#a8d5ff" : ""
                    }
                }, [t._v(t._s(e.name))])
            }
            )), 1)], 1)], 1), s("div", {
                staticClass: "td w-60 txt-c r1 t1"
            }, [s("dropDown", {
                attrs: {
                    title: "难度",
                    type: "nandu",
                    columns: t.difficultyLevel
                }
            })], 1), s("div", {
                staticClass: "td w-60 txt-c r1 t1"
            }, [s("dropDown", {
                attrs: {
                    title: "错因",
                    type: "cuoyin",
                    columns: t.errorOption
                }
            })], 1), s("div", {
                staticClass: "td w-60 txt-c r1 t1"
            }, [s("a-dropdown", [s("a", {
                staticClass: "ant-dropdown-link",
                on: {
                    click: function(e) {
                        return e.preventDefault()
                    }
                }
            }, [t._v(" 距今 "), s("a-icon", {
                attrs: {
                    type: "caret-down"
                }
            })], 1), s("a-menu", {
                attrs: {
                    slot: "overlay"
                },
                on: {
                    click: t.setDaySort
                },
                slot: "overlay"
            }, t._l(t.orderOption, (function(e) {
                return s("a-menu-item", {
                    key: e.value,
                    style: {
                        background: t.key.jujin == e.value ? "#a8d5ff" : ""
                    }
                }, [t._v(t._s(e.name))])
            }
            )), 1)], 1)], 1), s("div", {
                staticClass: "td w-80 txt-c r1 t1"
            }, [s("dropDown", {
                attrs: {
                    title: "重做价值",
                    type: "jiazhi",
                    columns: [{
                        value: 0,
                        name: "高"
                    }, {
                        value: 1,
                        name: "中"
                    }, {
                        value: 2,
                        name: "一般"
                    }]
                }
            })], 1), s("div", {
                staticClass: "td w-80 txt-c r1 t1",
                staticStyle: {
                    "border-radius": "0 5px 0 0"
                }
            }, [s("dropDown", {
                attrs: {
                    title: "重做结果",
                    type: "jieguo",
                    columns: [{
                        value: 0,
                        name: "未重做"
                    }, {
                        value: 1,
                        name: "重做全对"
                    }, {
                        value: 2,
                        name: "重做半对"
                    }, {
                        value: 3,
                        name: "重做错误"
                    }]
                }
            })], 1)])]), t.dataList.length > 0 ? s("div", {}, [t._l(t.dataList, (function(e, a) {
                return s("div", {
                    key: a,
                    on: {
                        click: function(i) {
                            return t.selectQuestions(e, a)
                        }
                    }
                }, [s("div", {
                    staticClass: "tr box",
                    class: [e.questionId == t.currQuestionsID ? "tr-active" : ""]
                }, [s("div", {
                    staticClass: "td flex t1 r1 l1",
                    class: [t.dataList.length - 1 == a ? "b1" : "", e.questionId == t.currQuestionsID ? "c-fff" : 0 == e.dataType ? "c-orange" : "c-blue"],
                    staticStyle: {
                        overflow: "hidden"
                    }
                }, [s("span", {
                    staticClass: "ml-5"
                }, [t._v(t._s(e.dataName))])]), s("div", {
                    staticClass: "td w-70 txt-c t1 r1",
                    class: [1 == e.mustDoSwitch ? "c-orange" : "", t.dataList.length - 1 == a ? "b1" : ""]
                }, [1 == e.selfReadOverSwitch ? s("a-icon", {
                    staticClass: "icon true c-orange",
                    attrs: {
                        type: "check"
                    }
                }) : t._e(), t._v(" " + t._s(t.questionType(e.questionType)) + " ")], 1), s("div", {
                    staticClass: "td w-80 txt-c t1 r1",
                    class: t.dataList.length - 1 == a ? "b1" : ""
                }, [t._v(" " + t._s((e.totalScoring / 100).toFixed(1)) + " ")]), s("div", {
                    staticClass: "td w-60 txt-c t1 r1",
                    class: t.dataList.length - 1 == a ? "b1" : "",
                    style: {
                        color: 3 == e.difficultyLevel ? "#A0CF12" : 2 == e.difficultyLevel ? "#F78D43" : 1 == e.difficultyLevel ? "#FB5050" : ""
                    }
                }, [t._v(" " + t._s(0 == e.difficultyLevel ? "--" : 1 == e.difficultyLevel ? "困难" : 2 == e.difficultyLevel ? "中等" : "基础") + " ")]), s("div", {
                    staticClass: "td w-60 txt-c t1 r1",
                    class: t.dataList.length - 1 == a ? "b1" : ""
                }, ["" != e.wrongCause && null != e.wrongCause ? s("div", {
                    staticClass: "point",
                    style: {
                        "background-color": t.getWrongCauseBg(e.wrongCause)
                    }
                }, [t._v(t._s(e.wrongCause))]) : t._e()]), s("div", {
                    staticClass: "td w-60 txt-c t1 r1",
                    class: t.dataList.length - 1 == a ? "b1" : ""
                }, [t._v(t._s(t.Day(e.publishTime)))]), s("div", {
                    staticClass: "td w-80 txt-c t1 r1",
                    class: t.dataList.length - 1 == a ? "b1" : ""
                }, [e.zhdf >= 14 && e.zhdf <= 22 ? s("img", {
                    staticClass: "img-icon1",
                    staticStyle: {
                        "margin-top": "-4px"
                    },
                    attrs: {
                        src: i(86050)
                    }
                }) : t._e(), e.zhdf > 6 && e.zhdf < 14 ? s("img", {
                    staticClass: "img-icon1",
                    staticStyle: {
                        "margin-top": "-4px"
                    },
                    attrs: {
                        src: i(60790)
                    }
                }) : t._e(), e.zhdf >= 0 && e.zhdf <= 6 ? s("img", {
                    staticClass: "img-icon1",
                    staticStyle: {
                        "margin-top": "-4px"
                    },
                    attrs: {
                        src: i(49589)
                    }
                }) : t._e()]), s("div", {
                    staticClass: "td w-80 txt-c t1 r1",
                    class: t.dataList.length - 1 == a ? "b1" : ""
                }, [s("a-dropdown", {
                    scopedSlots: t._u([{
                        key: "overlay",
                        fn: function() {
                            return [s("a-menu", [s("a-menu-item", {
                                key: "1",
                                on: {
                                    click: function(i) {
                                        return t.handleMenuClick(e, 1)
                                    }
                                }
                            }, [t._v("全对")]), s("a-menu-item", {
                                key: "2",
                                on: {
                                    click: function(i) {
                                        return t.handleMenuClick(e, 2)
                                    }
                                }
                            }, [t._v("半对")]), s("a-menu-item", {
                                key: "3",
                                on: {
                                    click: function(i) {
                                        return t.handleMenuClick(e, 3)
                                    }
                                }
                            }, [t._v("错误")])], 1)]
                        },
                        proxy: !0
                    }], null, !0)
                }, [s("a-button", {
                    staticStyle: {
                        "font-size": "12px",
                        position: "relative",
                        top: "-3px"
                    },
                    style: {
                        background: 1 == e.reformType ? "#00AF66" : 2 == e.reformType ? "#FEC900" : 3 == e.reformType ? "#FF433E" : "",
                        color: e.reformType > 0 ? "#fff" : ""
                    },
                    attrs: {
                        size: "small"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }
                }, [t._v(t._s(null == e.reformTime ? "错题重做" : t.formatDate(e.reformTime)))])], 1)], 1)]), e.questionId == t.currQuestionsID ? s("div", {
                    on: {
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }
                }, [s("Questions", {
                    ref: "question",
                    refInFor: !0,
                    attrs: {
                        data: t.currQuestions,
                        index: a,
                        selectId: t.selectId,
                        type: t.type || 0,
                        subid: t.subid
                    },
                    on: {
                        "update:selectId": function(e) {
                            t.selectId = e
                        },
                        "update:select-id": function(e) {
                            t.selectId = e
                        }
                    }
                })], 1) : t._e()])
            }
            )), t.isLoading ? s("div", {
                staticClass: "loanding txt-c c-999"
            }, [s("img", {
                attrs: {
                    src: i(51865)
                }
            }), t._v(" 加载中...")]) : t._e()], 2) : s("a-empty", {
                staticStyle: {
                    "margin-top": "100px"
                },
                attrs: {
                    description: "暂无相关数据"
                }
            })], 1)] : t._e(), 1 == t.type ? [s("div", {
                staticClass: "table"
            }, [s("a-affix", {
                attrs: {
                    "offset-top": 0,
                    target: function() {
                        return e.$refs.container
                    }
                }
            }, [s("div", {
                staticClass: "th box"
            }, [s("div", {
                staticClass: "td flex txt-c r1 l1 t1 pos-r",
                staticStyle: {
                    "border-radius": "5px 0 0 0"
                }
            }, [s("a", {
                staticClass: "ant-dropdown-link",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.searchWin.apply(null, arguments)
                    }
                }
            }, [t._v(" 知识模块 "), s("a", {
                staticStyle: {
                    position: "relative",
                    top: "3px"
                }
            }, [s("svg", {
                staticClass: "icon",
                attrs: {
                    t: "1716516857800",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "8708",
                    width: "16",
                    height: "16"
                }
            }, [s("path", {
                attrs: {
                    d: "M904.0704 94.144c-8.576-12.928-21.312-30.144-38.4-30.144H38.7904c-12.8 0-29.888 17.28-34.112 30.144-8.576 12.928-4.288 34.496 4.224 47.36L298.8864 464.64v357.504c0 12.928 8.448 30.144 25.536 34.496l217.344 99.072c4.288 4.288 12.8 4.288 17.088 4.288 8.512 0 17.024 0 21.312-4.288 12.8-8.64 21.312-17.28 21.312-34.496l12.8-460.928 281.28-323.072c12.8-8.576 12.8-25.856 8.576-43.072zM520.3264 860.864l-136.32-64.576V494.784h149.12l-12.8 366.08z m34.112-456.576c-4.224 0-4.224 4.352-8.512 4.352H362.6944L132.5504 150.144h643.648L554.5024 404.288z",
                    fill: "#24469F",
                    "p-id": "8709"
                }
            }), s("path", {
                attrs: {
                    d: "M1023.3664 708.352c0-17.408-17.024-34.816-34.048-34.816h-272.832c-17.024 0-34.112 17.408-34.112 34.816v17.408c0 17.408 17.088 34.816 34.112 34.816h272.832c17.024 0 34.048-17.408 34.048-34.816v-17.408zM1023.3664 534.272c0-17.408-17.024-34.816-34.048-34.816h-272.832c-17.024 0-34.112 17.408-34.112 34.816v17.408c0 17.408 17.088 34.816 34.112 34.816h272.832c17.024 0 34.048-17.408 34.048-34.816v-17.408zM1023.3664 882.368c0-17.408-17.024-34.816-34.048-34.816h-272.832c-17.024 0-34.112 17.408-34.112 34.816v17.408c0 17.408 17.088 34.816 34.112 34.816h272.832c17.024 0 34.048-17.408 34.048-34.816v-17.408z",
                    fill: "#24469F",
                    "p-id": "8710"
                }
            })])])])]), s("div", {
                staticClass: "td w-80 txt-c r1 t1"
            }, [s("a-dropdown", {
                scopedSlots: t._u([{
                    key: "overlay",
                    fn: function() {
                        return [s("a-menu", {
                            on: {
                                click: t.seChengduSort
                            }
                        }, t._l(t.orderOption, (function(e) {
                            return s("a-menu-item", {
                                key: e.value,
                                style: {
                                    background: t.key.cd == e.value ? "#a8d5ff" : ""
                                }
                            }, [t._v(t._s(e.name))])
                        }
                        )), 1)]
                    },
                    proxy: !0
                }], null, !1, 1382570529)
            }, [s("a", {
                staticClass: "ant-dropdown-link"
            }, [t._v(" 掌握程度 "), s("a-icon", {
                attrs: {
                    type: "caret-down"
                }
            })], 1)])], 1), s("div", {
                staticClass: "td w-70 txt-c r1 t1"
            }, [s("a-dropdown", [s("a", {
                staticClass: "ant-dropdown-link"
            }, [t._v(" 考查数 "), s("a-icon", {
                attrs: {
                    type: "caret-down"
                }
            })], 1), s("a-menu", {
                attrs: {
                    slot: "overlay"
                },
                on: {
                    click: t.seKaocaSort
                },
                slot: "overlay"
            }, t._l(t.orderOption, (function(e) {
                return s("a-menu-item", {
                    key: e.value,
                    style: {
                        background: t.key.kaoca == e.value ? "#a8d5ff" : ""
                    }
                }, [t._v(t._s(e.name))])
            }
            )), 1)], 1)], 1), s("div", {
                staticClass: "td w-70 txt-c r1 t1"
            }, [s("a-dropdown", [s("a", {
                staticClass: "ant-dropdown-link",
                on: {
                    click: function(e) {
                        return e.preventDefault()
                    }
                }
            }, [t._v(" 错题数 "), s("a-icon", {
                attrs: {
                    type: "caret-down"
                }
            })], 1), s("a-menu", {
                attrs: {
                    slot: "overlay"
                },
                on: {
                    click: t.seCuotiSort
                },
                slot: "overlay"
            }, t._l(t.orderOption, (function(e) {
                return s("a-menu-item", {
                    key: e.value,
                    style: {
                        background: t.key.cuoti == e.value ? "#a8d5ff" : ""
                    }
                }, [t._v(t._s(e.name))])
            }
            )), 1)], 1)], 1), s("div", {
                staticClass: "td w-80 txt-c r1 t1"
            }, [s("a-dropdown", [s("a", {
                staticClass: "ant-dropdown-link",
                on: {
                    click: function(e) {
                        return e.preventDefault()
                    }
                }
            }, [t._v(" 错题比例 "), s("a-icon", {
                attrs: {
                    type: "caret-down"
                }
            })], 1), s("a-menu", {
                attrs: {
                    slot: "overlay"
                },
                on: {
                    click: t.seBiliSort
                },
                slot: "overlay"
            }, t._l(t.orderOption, (function(e) {
                return s("a-menu-item", {
                    key: e.value,
                    style: {
                        background: t.key.bili == e.value ? "#a8d5ff" : ""
                    }
                }, [t._v(t._s(e.name))])
            }
            )), 1)], 1)], 1), s("div", {
                staticClass: "td w-80 txt-c r1 t1"
            }, [s("dropDown", {
                attrs: {
                    title: "修正效率",
                    type: "xiaolv",
                    columns: [{
                        value: 0,
                        name: "事半功倍"
                    }, {
                        value: 1,
                        name: "等值"
                    }, {
                        value: 2,
                        name: "事倍功半"
                    }]
                }
            })], 1), s("div", {
                staticClass: "td w-90 txt-c r1 t1",
                staticStyle: {
                    "border-radius": "0 5px 0 0"
                }
            }, [s("dropDown", {
                attrs: {
                    title: "自我修正",
                    type: "xiuzheng",
                    columns: [{
                        value: 0,
                        name: "未修正"
                    }, {
                        value: 1,
                        name: "全部通过"
                    }, {
                        value: 2,
                        name: "部分通过"
                    }, {
                        value: 3,
                        name: "未通过"
                    }]
                }
            })], 1)])]), t.knowledgeLibList.length > 0 ? s("div", {}, t._l(t.knowledgeLibList, (function(e, a) {
                return s("div", {
                    key: e.libId,
                    on: {
                        click: function(i) {
                            return t.selectLibQuestions(e)
                        }
                    }
                }, [s("div", {
                    staticClass: "tr box",
                    class: [e.libId == t.currlibId ? "tr-active" : ""]
                }, [s("div", {
                    staticClass: "td flex t1 r1 l1",
                    class: t.knowledgeLibList.length - 1 == a ? "b1" : "",
                    staticStyle: {
                        overflow: "hidden"
                    }
                }, [s("span", {
                    staticClass: "ml-5",
                    class: [e.libId == t.currlibId ? "c-fff" : 0 == e.libType ? "c-green" : 1 == e.libType ? "c-blue" : "c-orange"]
                }, [t._v(" 【" + t._s(0 === e.libType ? "素" : 1 === e.libType ? "能" : "知") + "】")]), t._v(t._s(e.libNumber) + t._s(e.libName) + " ")]), s("div", {
                    staticClass: "td w-80 txt-c t1 r1",
                    class: t.knowledgeLibList.length - 1 == a ? "b1" : ""
                }, [t._v(" " + t._s(e.scoringRate) + " ")]), s("div", {
                    staticClass: "td w-70 txt-c t1 r1",
                    class: t.knowledgeLibList.length - 1 == a ? "b1" : ""
                }, [t._v(" " + t._s(e.questionAllCount) + " ")]), s("div", {
                    staticClass: "td w-70 txt-c t1 r1",
                    class: t.knowledgeLibList.length - 1 == a ? "b1" : ""
                }, [t._v(" " + t._s(e.errorQuestionCount) + " ")]), s("div", {
                    staticClass: "td w-80 txt-c t1 r1",
                    class: t.knowledgeLibList.length - 1 == a ? "b1" : ""
                }, [t._v(" " + t._s(e.errorProportionRate) + " ")]), s("div", {
                    staticClass: "td w-80 txt-c t1 r1",
                    class: t.knowledgeLibList.length - 1 == a ? "b1" : ""
                }, [0 == e.correctRateType ? s("span", [s("img", {
                    staticClass: "shiban",
                    attrs: {
                        src: i(18250)
                    }
                })]) : t._e(), 1 == e.correctRateType ? s("span", [s("img", {
                    staticClass: "dengzhi",
                    attrs: {
                        src: i(42298)
                    }
                })]) : t._e(), 2 == e.correctRateType ? s("span", [s("img", {
                    staticClass: "shibei",
                    attrs: {
                        src: i(66148)
                    }
                })]) : t._e()]), s("div", {
                    staticClass: "td w-90 txt-c t1 r1",
                    class: t.knowledgeLibList.length - 1 == a ? "b1" : ""
                }, [s("a-dropdown", {
                    scopedSlots: t._u([{
                        key: "overlay",
                        fn: function() {
                            return [s("a-menu", [s("a-menu-item", {
                                key: "1",
                                on: {
                                    click: function(i) {
                                        return t.handleMenuLibClick(e, 1)
                                    }
                                }
                            }, [t._v("全部通过")]), s("a-menu-item", {
                                key: "2",
                                on: {
                                    click: function(i) {
                                        return t.handleMenuLibClick(e, 2)
                                    }
                                }
                            }, [t._v("部分通过")]), s("a-menu-item", {
                                key: "3",
                                on: {
                                    click: function(i) {
                                        return t.handleMenuLibClick(e, 3)
                                    }
                                }
                            }, [t._v("未通过")])], 1)]
                        },
                        proxy: !0
                    }], null, !0)
                }, [s("a-button", {
                    staticStyle: {
                        "font-size": "12px",
                        position: "relative",
                        top: "-3px"
                    },
                    style: {
                        background: 1 == e.reformType ? "#00AF66" : 2 == e.reformType ? "#FEC900" : 3 == e.reformType ? "#FF433E" : "",
                        color: e.reformType > 0 ? "#fff" : ""
                    },
                    attrs: {
                        size: "small"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }
                }, [t._v(t._s(null == e.reformTime ? "自我修正" : t.formatDate(e.reformTime) + "(" + e.reformCount + ")"))])], 1)], 1)]), e.libId == t.currlibId ? s("div", t._l(t.libDataList, (function(e, i) {
                    return s("div", {
                        key: e.id,
                        on: {
                            click: function(e) {
                                e.stopPropagation()
                            }
                        }
                    }, [s("Questions", {
                        ref: "libquestion",
                        refInFor: !0,
                        attrs: {
                            data: e,
                            index: i,
                            selectId: t.selectId,
                            type: t.type,
                            subid: t.subid
                        },
                        on: {
                            "update:selectId": function(e) {
                                t.selectId = e
                            },
                            "update:select-id": function(e) {
                                t.selectId = e
                            }
                        }
                    })], 1)
                }
                )), 0) : t._e()])
            }
            )), 0) : s("a-empty", {
                staticStyle: {
                    "margin-top": "100px"
                },
                attrs: {
                    description: "暂无相关数据"
                }
            })], 1)] : t._e(), 2 == t.type ? [t.dataList.length > 0 ? s("div", t._l(t.dataList, (function(e, i) {
                return s("div", {
                    key: e.id,
                    on: {
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }
                }, [s("Questions", {
                    ref: "question",
                    refInFor: !0,
                    attrs: {
                        data: e,
                        index: i,
                        selectId: t.selectId,
                        type: t.type || 0,
                        subid: t.subid
                    },
                    on: {
                        "update:selectId": function(e) {
                            t.selectId = e
                        },
                        "update:select-id": function(e) {
                            t.selectId = e
                        }
                    }
                })], 1)
            }
            )), 0) : s("a-empty", {
                staticStyle: {
                    "margin-top": "100px"
                },
                attrs: {
                    description: "指定日期下暂无错题数据"
                }
            })] : t._e(), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.scrollTop >= 500,
                    expression: "scrollTop>=500"
                }],
                staticClass: "back-top pos-f",
                on: {
                    click: t.BackTop
                }
            }, [s("img", {
                attrs: {
                    src: i(12814),
                    alt: "backTop"
                }
            })])], 2)], 1) : s("div", {
                staticClass: "content"
            }, [s("div", {
                staticClass: "top mt-10 box"
            }, [s("div", {
                staticClass: "left"
            }, [s("a-button", {
                attrs: {
                    type: 2 == t.type ? "primary" : ""
                },
                on: {
                    click: function(e) {
                        return t.overView(2)
                    }
                }
            }, [t._v(" 每日最佳回顾 ")]), s("a-button", {
                staticClass: "ml-10",
                attrs: {
                    type: 0 == t.type ? "primary" : ""
                },
                on: {
                    click: function(e) {
                        return t.overView(0)
                    }
                }
            }, [t._v(" 错题 ")]), s("a-button", {
                staticClass: "ml-10",
                attrs: {
                    type: 1 == t.type ? "primary" : ""
                },
                on: {
                    click: function(e) {
                        return t.overView(1)
                    }
                }
            }, [t._v(" 知识模块 ")])], 1), 0 == t.type || 2 == t.type ? [t._m(2)] : t._e(), 1 == t.type ? [t._m(3)] : t._e()], 2), s("div", {
                staticClass: "content-box mt-10"
            }, [0 == t.type || 2 == t.type ? s("ul", {
                staticClass: "ul-box box"
            }, [s("li", {
                staticClass: "l1 txt-c ml-20"
            }, [t._v("学科")]), s("li", {
                staticClass: "l3 txt-c"
            }, [t._v("错题总数")]), s("li", {
                staticClass: "l3 txt-c"
            }, [t._v("待重做错题")]), t._m(4)]) : t._e(), 1 == t.type ? s("ul", {
                staticClass: "ul-box box"
            }, [s("li", {
                staticClass: "l1 txt-c ml-20"
            }, [t._v("学科")]), s("li", {
                staticClass: "l3 txt-c"
            }, [t._v("未掌握/知识模块")]), s("li", {
                staticClass: "l3 txt-c"
            }, [t._v("已修正次数")]), t._m(5)]) : t._e(), t._l(t.courseArr, (function(e) {
                return s("div", {
                    key: e.id,
                    on: {
                        click: function(i) {
                            return t.clickTeacher(e)
                        }
                    }
                }, [e.teacherid == t.teacherid && e.courseid == t.courseid || t.showAll ? s("div", {
                    staticClass: "box ul-box b-r-10",
                    style: {
                        background: t.SetColor(e.subjectName)
                    }
                }, [s("div", {
                    staticClass: "l1 txt-l ml-20"
                }, [t._v(t._s(e.subjectName) + "(" + t._s(e.userName) + ")")]), s("div", {
                    staticClass: "l3 txt-c"
                }, [t._v(t._s(1 == t.type ? e.noMasterCount + "/" : "") + t._s(e.totalCount))]), s("div", {
                    staticClass: "l3 txt-c"
                }, [t._v(t._s(e.reformedCount))]), s("div", {
                    staticClass: "flex txt-c box"
                }, [s("div", {
                    staticClass: "flex"
                }, [t._v(t._s(e.highCount))]), s("div", {
                    staticClass: "flex"
                }, [t._v(t._s(e.middleCount))]), s("div", {
                    staticClass: "flex"
                }, [t._v(t._s(e.lowCount))])])]) : t._e()])
            }
            )), 2 == t.type && 0 == t.courseArr.length ? [s("a-empty", {
                staticStyle: {
                    "margin-top": "150px"
                },
                attrs: {
                    description: "暂无相关回顾数据"
                }
            })] : t._e()], 2)])], t.loading ? s("Load") : t._e(), s("CollectLayer", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isCollect,
                    expression: "isCollect"
                }],
                ref: "collect",
                attrs: {
                    AskCourseId: t.dataId,
                    AskQuestionId: t.currQuestionsID,
                    contentType: t.contentType
                }
            }), s("DiscussArea", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDiscussArea,
                    expression: "isDiscussArea"
                }],
                ref: "discuss",
                attrs: {
                    AskCourseId: t.dataId,
                    AskQuestionId: t.currQuestionsID,
                    contentType: t.contentType
                }
            }), s("a-modal", {
                staticClass: "t50",
                attrs: {
                    width: 500,
                    title: "错题来源",
                    footer: null,
                    bodyStyle: {
                        "padding-bottom": "10px",
                        top: "50px"
                    },
                    "confirm-loading": !0
                },
                on: {
                    cancel: t.onCancel
                },
                model: {
                    value: t.visible,
                    callback: function(e) {
                        t.visible = e
                    },
                    expression: "visible"
                }
            }, [s("div", {
                staticClass: "box"
            }, [s("div", {
                staticClass: "w-120 h-l-30"
            }, [t._v("来源类型: ")]), s("div", {
                staticClass: "flex mt-5"
            }, [s("a-radio-group", {
                on: {
                    change: t.onDataTypeChange
                },
                model: {
                    value: t.DataTypeValue,
                    callback: function(e) {
                        t.DataTypeValue = e
                    },
                    expression: "DataTypeValue"
                }
            }, [s("a-radio", {
                attrs: {
                    value: -1
                }
            }, [t._v(" 全部 ")]), s("a-radio", {
                attrs: {
                    value: 0
                }
            }, [t._v(" 课程 ")]), s("a-radio", {
                attrs: {
                    value: 1
                }
            }, [t._v(" 考试 ")])], 1)], 1)]), s("div", {
                staticClass: "box mt-10"
            }, [s("div", {
                staticClass: "w-120 h-l-30"
            }, [t._v("选择起止日期: ")]), s("div", {
                staticClass: "flex pos-r"
            }, [s("a-range-picker", {
                attrs: {
                    inputReadOnly: "",
                    format: "YYYY/MM/DD",
                    allowClear: "",
                    disabledDate: t.disabledDate
                },
                on: {
                    change: t.onSearch
                },
                model: {
                    value: t.ChooseDate,
                    callback: function(e) {
                        t.ChooseDate = e
                    },
                    expression: "ChooseDate"
                }
            }), s("a-icon", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ChooseDate.length > 0,
                    expression: "ChooseDate.length > 0"
                }],
                staticClass: "pos-a close-circle",
                attrs: {
                    type: "close-circle",
                    theme: "filled"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.ChooseDate.length = 0,
                        t.onSearch()
                    }
                }
            })], 1)]), s("div", {
                staticClass: "box mt-10"
            }, [s("div", {
                staticClass: "w-120 h-l-30"
            }, [t._v("课程或考试名称: ")]), s("div", {
                staticClass: "flex"
            }, [s("a-input-search", {
                attrs: {
                    placeholder: "请输入课程或考试名称",
                    "enter-button": ""
                },
                on: {
                    search: t.onSearch
                },
                model: {
                    value: t.keyvalue,
                    callback: function(e) {
                        t.keyvalue = e
                    },
                    expression: "keyvalue"
                }
            })], 1)]), s("div", {
                staticClass: "box h-380 mt-10"
            }, [s("div", {
                staticClass: "s-box pos-r"
            }, [t.GroupData.length > 0 ? [s("a-checkbox-group", {
                on: {
                    change: t.onChange
                },
                model: {
                    value: t.ChooseDataValue,
                    callback: function(e) {
                        t.ChooseDataValue = e
                    },
                    expression: "ChooseDataValue"
                }
            }, t._l(t.GroupData, (function(e, i) {
                return s("a-row", {
                    key: i
                }, [s("div", {
                    staticClass: "line"
                }, [s("a-checkbox", {
                    attrs: {
                        value: e.dataId
                    }
                }, [t._v(t._s(e.dataName))])], 1)])
            }
            )), 1)] : s("a-empty", {
                staticStyle: {
                    "margin-top": "50px"
                },
                attrs: {
                    description: -1 == t.DataTypeValue ? "请选择课程或考试" : 1 == t.DataTypeValue ? "暂无课程数据" : "暂无考试数据"
                }
            })], 2)]), s("div", {
                staticClass: "foot-box box"
            }, [s("div", {
                staticClass: "flex "
            }, [s("div", {
                staticClass: "mt-15"
            }, [s("a-checkbox", {
                attrs: {
                    checked: t.checkAll,
                    indeterminate: t.indeterminate
                },
                on: {
                    change: t.onCheckAllChange
                }
            }, [t._v(" 全选 ")])], 1)]), s("div", {
                staticClass: "flex txt-r"
            }, [s("a-button", {
                staticClass: "mt-8 mr-10",
                on: {
                    click: t.onCancel
                }
            }, [t._v("取消")]), s("a-button", {
                staticClass: "mt-8",
                attrs: {
                    type: "primary",
                    disabled: 0 == t.ChooseDataValue.length
                },
                on: {
                    click: t.finishChoose
                }
            }, [t._v(" 确定 ")])], 1)])]), s("a-modal", {
                staticClass: "t50",
                attrs: {
                    width: 500,
                    title: "知识模块来源",
                    footer: null,
                    bodyStyle: {
                        "padding-bottom": "10px",
                        top: "50px"
                    }
                },
                on: {
                    cancel: t.onCancel
                },
                model: {
                    value: t.visibleLib,
                    callback: function(e) {
                        t.visibleLib = e
                    },
                    expression: "visibleLib"
                }
            }, [s("div", {
                staticClass: "box"
            }, [s("div", {
                staticClass: "w-120 h-l-30"
            }, [t._v("来源类型: ")]), s("div", {
                staticClass: "flex mt-5"
            }, [s("a-radio-group", {
                on: {
                    change: t.onDataLibTypeChange
                },
                model: {
                    value: t.DataTypeValue,
                    callback: function(e) {
                        t.DataTypeValue = e
                    },
                    expression: "DataTypeValue"
                }
            }, [s("a-radio", {
                attrs: {
                    value: -1
                }
            }, [t._v(" 全部 ")]), s("a-radio", {
                attrs: {
                    value: 0
                }
            }, [t._v(" 素养 ")]), s("a-radio", {
                attrs: {
                    value: 1
                }
            }, [t._v(" 能力 ")]), s("a-radio", {
                attrs: {
                    value: 2
                }
            }, [t._v(" 知识点 ")])], 1)], 1)]), s("div", {
                staticClass: "box mt-10"
            }, [s("div", {
                staticClass: "w-120 h-l-30"
            }, [t._v("知识模块名称: ")]), s("div", {
                staticClass: "flex"
            }, [s("a-input-search", {
                attrs: {
                    placeholder: "请输入知识模块名称",
                    "enter-button": ""
                },
                on: {
                    search: t.onSearch
                },
                model: {
                    value: t.keyvalue,
                    callback: function(e) {
                        t.keyvalue = e
                    },
                    expression: "keyvalue"
                }
            })], 1)]), s("div", {
                staticClass: "box h-380 mt-10"
            }, [s("div", {
                staticClass: "s-box pos-r"
            }, [s("a-checkbox-group", {
                on: {
                    change: t.onChange
                },
                model: {
                    value: t.ChooseDataValue,
                    callback: function(e) {
                        t.ChooseDataValue = e
                    },
                    expression: "ChooseDataValue"
                }
            }, t._l(t.knowledgeLibListGroup, (function(e, i) {
                return s("a-row", {
                    key: i
                }, [s("div", {
                    staticClass: "line"
                }, [s("a-checkbox", {
                    attrs: {
                        value: e.libId
                    }
                }, [-1 == t.DataTypeValue ? s("span", [t._v("【" + t._s(0 == e.libType ? "素养" : 1 == e.libType ? "能力" : "知识点") + "】")]) : t._e(), t._v(t._s(e.libName))])], 1)])
            }
            )), 1)], 1)]), s("div", {
                staticClass: "foot-box box"
            }, [s("div", {
                staticClass: "flex "
            }, [s("div", {
                staticClass: "mt-15"
            }, [s("a-checkbox", {
                attrs: {
                    checked: t.checkAll,
                    indeterminate: t.indeterminate
                },
                on: {
                    change: t.onCheckAllChange
                }
            }, [t._v(" 全选 ")])], 1)]), s("div", {
                staticClass: "flex txt-r"
            }, [s("a-button", {
                staticClass: "mt-8 mr-10",
                on: {
                    click: t.onCancel
                }
            }, [t._v("取消")]), s("a-button", {
                staticClass: "mt-8",
                attrs: {
                    type: "primary",
                    disabled: 0 == t.ChooseDataValue.length
                },
                on: {
                    click: t.finishChoose
                }
            }, [t._v(" 确定 ")])], 1)])])], 2)
        }
          , s = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("li", {
                staticClass: "flex txt-c box"
            }, [a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "img-icon",
                attrs: {
                    src: i(86050)
                }
            })]), a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "img-icon1",
                attrs: {
                    src: i(60790)
                }
            })]), a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "img-icon1",
                attrs: {
                    src: i(49589)
                }
            })])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("ul", {
                staticClass: "ul-box box"
            }, [a("li", {
                staticClass: "l1 txt-c ml-20"
            }, [e._v("学科")]), a("li", {
                staticClass: "l3 txt-c"
            }, [e._v("未掌握/知识模块")]), a("li", {
                staticClass: "l3 txt-c"
            }, [e._v("已修正次数")]), a("li", {
                staticClass: "flex txt-c box"
            }, [a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "shiban",
                attrs: {
                    src: i(18250)
                }
            })]), a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "dengzhi",
                attrs: {
                    src: i(42298)
                }
            })]), a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "shibei",
                attrs: {
                    src: i(66148)
                }
            })])])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "right flex txt-r"
            }, [e._v(" 重做价值: "), a("span", [a("img", {
                attrs: {
                    src: i(86050)
                }
            }), e._v(" 高 ")]), a("span", [a("img", {
                attrs: {
                    src: i(60790)
                }
            }), e._v(" 中 ")]), a("span", [a("img", {
                attrs: {
                    src: i(49589)
                }
            }), e._v(" 一般 ")])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "right flex txt-r",
                staticStyle: {
                    position: "relative"
                }
            }, [e._v(" 修正效率: "), a("span", [a("img", {
                staticClass: "shiban",
                attrs: {
                    src: i(18250)
                }
            }), e._v(" 事半功倍 ")]), a("span", [a("img", {
                staticClass: "dengzhi",
                attrs: {
                    src: i(42298)
                }
            }), e._v(" 等值 ")]), a("span", [a("img", {
                staticClass: "shibei",
                attrs: {
                    src: i(66148)
                }
            }), e._v(" 事倍功半 ")])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("li", {
                staticClass: "flex txt-c box"
            }, [a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "img-icon",
                attrs: {
                    src: i(86050)
                }
            })]), a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "img-icon1",
                attrs: {
                    src: i(60790)
                }
            })]), a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "img-icon1",
                attrs: {
                    src: i(49589)
                }
            })])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("li", {
                staticClass: "flex txt-c box"
            }, [a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "shiban",
                attrs: {
                    src: i(18250)
                }
            })]), a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "dengzhi",
                attrs: {
                    src: i(42298)
                }
            })]), a("div", {
                staticClass: "flex"
            }, [a("img", {
                staticClass: "shibei",
                attrs: {
                    src: i(66148)
                }
            })])])
        }
        ]
          , n = i(56203)
          , r = i(68354)
          , o = i(1496)
          , l = i(79801)
          , d = i.n(l)
          , u = i(92746)
          , c = i.n(u)
          , p = i(63517)
          , h = i.n(p)
          , f = {
            name: "AI",
            components: {
                Tab: ()=>i.e(885).then(i.bind(i, 32885)),
                wQuestions: ()=>i.e(173).then(i.bind(i, 18173)),
                Questions: ()=>i.e(520).then(i.bind(i, 520)),
                Load: ()=>i.e(97).then(i.bind(i, 43286)),
                CollectLayer: ()=>i.e(179).then(i.bind(i, 43179)),
                DiscussArea: ()=>Promise.all([i.e(580), i.e(879)]).then(i.bind(i, 19580)),
                dropDown: ()=>i.e(75).then(i.bind(i, 16075))
            },
            data() {
                return {
                    currQuestionsID: 0,
                    currQuestions: null,
                    visible: !1,
                    visibleLib: !1,
                    index: -1,
                    loading: !1,
                    type: 2,
                    teacherid: "",
                    courseid: "",
                    showAll: !0,
                    courseArr: [],
                    errorOption: [{
                        name: "没看懂题",
                        value: 6,
                        bg: "#1F1F1F"
                    }, {
                        name: "没有思路",
                        value: 5,
                        bg: "#8726FE"
                    }, {
                        name: "知识概念",
                        value: 4,
                        bg: "#FF0000"
                    }, {
                        name: "过程错误",
                        value: 3,
                        bg: "#D71278"
                    }, {
                        name: "结果错误",
                        value: 2,
                        bg: "#FF9933"
                    }, {
                        name: "粗心大意",
                        value: 1,
                        bg: "#2EDC72"
                    }],
                    difficultyLevel: [{
                        value: 3,
                        name: "基础"
                    }, {
                        value: 2,
                        name: "中等"
                    }, {
                        value: 1,
                        name: "困难"
                    }],
                    orderOption: [{
                        value: -1,
                        name: "默认"
                    }, {
                        value: 0,
                        name: "升序"
                    }, {
                        value: 1,
                        name: "降序"
                    }],
                    dataList: [],
                    originalData: [],
                    tempOriginalData: [],
                    subid: "",
                    courseItem: {},
                    isCollect: !1,
                    dataId: 0,
                    contentType: 0,
                    isDiscussArea: !1,
                    audio: null,
                    playAudio: {
                        src: "",
                        play: !1,
                        index: -1
                    },
                    playid: -1,
                    originalGroupData: {},
                    GroupData: [],
                    ChooseDate: [],
                    DataTypeValue: -1,
                    keyvalue: "",
                    ChooseDataValue: [],
                    indeterminate: !1,
                    checkAll: !1,
                    key: {
                        tixing: [],
                        nandu: [],
                        cuoyin: [],
                        jiazhi: [],
                        jieguo: [],
                        xishu: -1,
                        jujin: -1,
                        xiuzheng: [],
                        xiaolv: [],
                        cd: -1,
                        kaoca: -1,
                        cuoti: -1,
                        bili: -1
                    },
                    currlibId: 0,
                    knowledgeLibData: null,
                    knowledgeLibList: [],
                    originalknowledgeLibList: [],
                    knowledgeLibListGroup: [],
                    libDataList: [],
                    selectId: 0,
                    DataLibTypeValue: -1,
                    lookbacktime: 0,
                    confirmLoading: !1,
                    isLoading: !1,
                    totalPage: 1,
                    pageNum: 100,
                    currPage: 1,
                    scrollTop: 0
                }
            },
            watch: {
                "$route.query.tid": {
                    immediate: !0,
                    handler(e) {
                        e != this.teacherid && "undefined" != typeof e && (this.teacherid = void 0 != e && "" != e ? e : "",
                        this.type = "undefined" == typeof this.$route.query.t ? 2 : parseInt(this.$route.query.t),
                        this.lookbacktime = null == localStorage.getItem("lookbacktime-" + this.teacherid) ? 15 : localStorage.getItem("lookbacktime-" + this.teacherid),
                        e > 0 ? (this.wrongQuestionData = null,
                        this.knowledgeLibData = null,
                        this.GroupData = [],
                        this.ChooseDataValue = [],
                        this.ChooseDate = [],
                        this.indeterminate = !1,
                        this.checkAll = !1,
                        this.DataTypeValue = -1,
                        this.courseItem = JSON.parse(sessionStorage.getItem("AiItem-" + e)),
                        this.currQuestionsID = 0,
                        this.currQuestions = null,
                        this.key = {
                            tixing: [],
                            nandu: [],
                            cuoyin: [],
                            jiazhi: [],
                            jieguo: [],
                            xishu: -1,
                            jujin: -1,
                            xiuzheng: [],
                            xiaolv: [],
                            cd: -1,
                            kaoca: -1,
                            cuoti: -1,
                            bili: -1
                        },
                        this.knowledgeLibList = [],
                        this.dataList = [],
                        this.originalknowledgeLibList = [],
                        (0,
                        r.rZ)(["knowledgeLibData", "wrongQuestionData0", "wrongQuestionData2"]),
                        this.$nextTick((()=>{
                            this.getAudioList(),
                            1 == this.type ? this.GetKnowledgeLib() : this.GetWwrongQuestion()
                        }
                        ))) : this.overView(2))
                    }
                },
                "$route.query.subid": {
                    immediate: !0,
                    handler(e) {
                        this.subid = void 0 != e && "" != e ? e : ""
                    }
                }
            },
            created() {},
            methods: {
                handleScroll(e) {
                    const t = this
                      , i = e.target;
                    if (t.scrollTop = i.scrollTop,
                    0 == i.scrollTop && (console.log("滚动到顶了"),
                    t.isLoading = !1,
                    t.currPage = 1,
                    t.dataList = [],
                    t.dataPaging(t.screenData())),
                    Math.round(i.scrollHeight) - Math.round(i.scrollTop) == Math.round(i.clientHeight)) {
                        if (t.currPage >= t.totalPage)
                            return;
                        t.isLoading = !0,
                        t.currPage++,
                        t.dataPaging(t.screenData())
                    }
                },
                BackTop() {
                    let e = this
                      , t = setInterval((()=>{
                        var i = e.scrollTop
                          , a = Math.floor(-i / 5);
                        e.$refs.container.scrollTop = i + a,
                        0 == i && (clearInterval(t),
                        e.makeData())
                    }
                    ), 50)
                },
                overView(e) {
                    let t = this;
                    t.loading = !0,
                    t.courseArr.length = 0,
                    t.type = e,
                    0 == e && n.ai.overView().then((e=>{
                        0 == e.code && (t.courseArr = e.extra,
                        t.loading = !1)
                    }
                    )),
                    1 == e && n.ai.overViewLib().then((e=>{
                        0 == e.code && (t.courseArr = e.extra,
                        t.loading = !1)
                    }
                    )),
                    2 == e && c().getItem("aiTeacher").then((e=>{
                        e.map((e=>{
                            e.lookBackTime = parseInt(null == localStorage.getItem("lookbacktime-" + e.id) ? 15 : localStorage.getItem("lookbacktime-" + e.id))
                        }
                        )),
                        n.ai.overViewLookBack(e).then((e=>{
                            t.courseArr = e.extra.filter((e=>e.totalCount > 0)),
                            t.loading = !1
                        }
                        ))
                    }
                    ))
                },
                tab(e) {
                    let t = this;
                    t.type = e,
                    t.$forceUpdate(),
                    t.currQuestionsID = 0,
                    t.selectId = 0,
                    t.tempOriginalData = [],
                    t.dataList = [],
                    t.key = {
                        tixing: [],
                        nandu: [],
                        cuoyin: [],
                        jiazhi: [],
                        jieguo: []
                    },
                    t.getAudioList(),
                    t.GetWwrongQuestion()
                },
                getAudioList() {
                    let e = document.getElementsByTagName("audio");
                    this.$nextTick((()=>{
                        for (let t = 0; t < e.length; t++)
                            e[t].pause()
                    }
                    ))
                },
                GetWwrongQuestion() {
                    let e = this;
                    function t() {
                        e.dataList = [],
                        n.ai.getWrongQuestion(e.teacherid, 0 == e.type ? 0 : e.lookbacktime).then((t=>{
                            e.loading = !1,
                            t.code > 0 ? e.$message.error(t.message) : (c().setItem("wrongQuestionData" + e.type, t.extra),
                            e.wrongQuestionData = t.extra,
                            e.originalData = t.extra.wrongQuestionList,
                            e.$nextTick((()=>{
                                e.loading = !1,
                                e.currPage = 1,
                                e.dataPaging(e.screenData())
                            }
                            )))
                        }
                        ))
                    }
                    (0,
                    r.xb)(e.teacherid) || ((0,
                    r.rZ)(["tempOriginalData"]),
                    e.currlibId = 0,
                    e.loading = !0,
                    c().getItem("wrongQuestionData" + e.type).then((i=>{
                        if (null == i)
                            t();
                        else {
                            let t = i;
                            e.wrongQuestionData = t,
                            e.originalData = t.wrongQuestionList,
                            e.$nextTick((()=>{
                                e.loading = !1,
                                e.currPage = 1,
                                e.dataPaging(e.screenData())
                            }
                            )),
                            n.ai.stopRequest().then((()=>{}
                            ))
                        }
                    }
                    )))
                },
                dataPaging(e) {
                    let t = this;
                    t.totalPage = Math.ceil(t.originalData.length / t.pageNum);
                    const i = (t.currPage - 1) * t.pageNum
                      , a = t.currPage * t.pageNum;
                    t.dataList = [...t.dataList, ...e.slice(i, a)],
                    t.isLoading = !1
                },
                makeData() {
                    this.currPage = 1,
                    this.dataList = [],
                    this.dataPaging(this.screenData())
                },
                handleChangeDay(e) {
                    let t = this;
                    t.lookbacktime = e,
                    localStorage.setItem("lookbacktime-" + t.teacherid, t.lookbacktime),
                    n.ai.lookbacktime({
                        id: JSON.parse(sessionStorage.getItem("course_userInfo")).userId,
                        lookBackTime: e
                    }).then((e=>{
                        (0,
                        r.rZ)(["wrongQuestionData2"]),
                        t.GetWwrongQuestion()
                    }
                    ))
                },
                chooseWrongQuestion() {
                    let e = this;
                    e.dataList = -1 == e.DataTypeValue ? e.originalData.filter((t=>e.ChooseDataValue.includes(t.dataId))) : e.originalData.filter((t=>e.ChooseDataValue.includes(t.dataId) && t.dataType == e.DataTypeValue)),
                    e.tempOriginalData = e.dataList,
                    c().setItem("tempOriginalData" + e.type, e.tempOriginalData),
                    e.ChooseDataValue = [],
                    e.DataTypeValue = -1,
                    e.keyvalue = "",
                    e.makeData()
                },
                questionType(e) {
                    let t = "";
                    switch (e) {
                    case 0:
                        t = "单选";
                        break;
                    case 1:
                        t = "不定项";
                        break;
                    case 2:
                        t = "填空";
                        break;
                    case 3:
                        t = "简答";
                        break
                    }
                    return t
                },
                getQuestionsType(e) {
                    this.key.tixing = e,
                    this.makeData()
                },
                setSort({key: e}) {
                    let t = this;
                    t.key.xishu = e,
                    t.currQuestionsID = 0,
                    -1 == e ? c().getItem("wrongQuestionData" + t.type).then((async e=>{
                        t.originalData = e.wrongQuestionList,
                        t.tempOriginalData = 0 == t.tempOriginalData.length ? [] : await c().getItem("tempOriginalData" + t.type),
                        t.makeData()
                    }
                    )) : (t.currPage = 1,
                    t.dataList = [],
                    t.dataPaging(t.screenData().sort(((t,i)=>0 == e ? t.totalScoring - i.totalScoring : i.totalScoring - t.totalScoring))))
                },
                getDifficultyLevel(e) {
                    this.key.nandu = e,
                    this.makeData()
                },
                getErrorRason(e) {
                    this.key.cuoyin = e,
                    this.makeData()
                },
                setDaySort({key: e}) {
                    let t = this;
                    t.key.jujin = e,
                    t.currQuestionsID = 0,
                    -1 == e ? c().getItem("wrongQuestionData" + t.type).then((async e=>{
                        t.originalData = e.wrongQuestionList,
                        t.tempOriginalData = 0 == t.tempOriginalData.length ? [] : await c().getItem("tempOriginalData" + t.type),
                        t.makeData()
                    }
                    )) : (t.currPage = 1,
                    t.dataList = [],
                    t.dataPaging(t.screenData().sort(((t,i)=>0 == e ? new Date(i.publishTime) - new Date(t.publishTime) : new Date(t.publishTime) - new Date(i.publishTime)))))
                },
                getZhdf(e) {
                    this.key.jiazhi = e,
                    this.makeData()
                },
                getJieGuo(e) {
                    this.key.jieguo = e,
                    this.makeData()
                },
                screenData() {
                    let e = this
                      , t = []
                      , i = 0 == e.tempOriginalData.length ? e.originalData : e.tempOriginalData;
                    if (t = i,
                    e.key.tixing.length > 0 && (t = t.filter((t=>e.key.tixing.includes(t.questionType)))),
                    e.key.nandu.length > 0 && (t = t.filter((t=>e.key.nandu.includes(t.difficultyLevel)))),
                    e.key.cuoyin.length > 0 && (t = t.filter((t=>e.key.cuoyin.includes(t.wrongCause)))),
                    e.key.jiazhi.length > 0) {
                        let i = [];
                        t.map((t=>{
                            (e.key.jiazhi.includes(0) && t.zhdf >= 14 && t.zhdf <= 22 || e.key.jiazhi.includes(1) && t.zhdf > 6 && t.zhdf < 14 || e.key.jiazhi.includes(2) && t.zhdf >= 0 && t.zhdf <= 6) && i.push(t)
                        }
                        )),
                        t = i
                    }
                    return e.key.jieguo.length > 0 && (t = t.filter((t=>e.key.jieguo.includes(t.reformType)))),
                    t
                },
                searchWin() {
                    let e = this;
                    1 == e.type ? (e.visibleLib = !0,
                    e.knowledgeLibListGroup = e.originalknowledgeLibList) : (e.visible = !0,
                    n.ai.getCourseAndPaper(e.teacherid, 0 == e.type ? 0 : e.lookbacktime).then((t=>{
                        e.originalGroupData = t.extra,
                        e.GroupData = e.returnGroupData(),
                        e.onSearch()
                    }
                    )))
                },
                onDataTypeChange() {
                    let e = this;
                    e.GroupData = e.returnGroupData(),
                    e.indeterminate = !1,
                    e.checkAll = !1,
                    e.onSearch()
                },
                onSearch() {
                    let e = this;
                    0 == e.type ? (e.GroupData = e.returnGroupData(),
                    e.GroupData = 0 == e.ChooseDate.length ? e.GroupData : e.GroupData.filter((function(t) {
                        return new Date(t.publishTime) >= new Date((0,
                        r.p6)(e.ChooseDate[0]) + " 00:00:00") && new Date(t.publishTime) <= new Date((0,
                        r.p6)(e.ChooseDate[1]) + " 23:59:59")
                    }
                    )),
                    e.GroupData = e.GroupData.filter((function(t) {
                        return "" == e.keyvalue ? t.dataId > 0 : t.dataName.indexOf(e.keyvalue) >= 0
                    }
                    ))) : (e.knowledgeLibListGroup = e.knowledgeLibList,
                    e.knowledgeLibListGroup = e.getDataLibTypeList(),
                    e.knowledgeLibListGroup = e.knowledgeLibListGroup.filter((function(t) {
                        return "" == e.keyvalue ? t.libId > 0 : t.libName.indexOf(e.keyvalue) >= 0
                    }
                    )))
                },
                returnGroupData() {
                    let e = this;
                    return 0 == e.DataTypeValue ? e.originalGroupData.courseList : 1 == e.DataTypeValue ? e.originalGroupData.paperList : -1 == e.DataTypeValue ? e.originalGroupData.courseList.concat(e.originalGroupData.paperList) : void 0
                },
                disabledDate(e) {
                    return e && e > d()().endOf("day")
                },
                onChange(e) {
                    0 == this.type ? (this.indeterminate = !!e.length && e.length < this.GroupData.length,
                    this.checkAll = e.length === this.GroupData.length) : (this.indeterminate = !!e.length && e.length < this.knowledgeLibListGroup.length,
                    this.checkAll = e.length === this.knowledgeLibListGroup.length)
                },
                onCheckAllChange() {
                    let e = this;
                    e.checkAll ? (e.checkAll = !1,
                    e.indeterminate = !1,
                    e.ChooseDate = [],
                    e.ChooseDataValue = []) : (0 == e.type ? e.GroupData.map((t=>{
                        e.ChooseDataValue.push(t.dataId)
                    }
                    )) : e.knowledgeLibListGroup.map((t=>{
                        e.ChooseDataValue.push(t.libId)
                    }
                    )),
                    e.indeterminate = !1,
                    e.checkAll = !0)
                },
                onCancel() {
                    this.DataTypeValue = -1,
                    this.GroupData = [],
                    this.ChooseDataValue = [],
                    this.checkAll = !1,
                    this.indeterminate = !1,
                    1 == this.type ? (this.visibleLib = !1,
                    this.knowledgeLibListGroup = []) : (this.visible = !1,
                    this.ChooseDate = [])
                },
                finishChoose() {
                    let e = this;
                    e.confirmLoading = !0,
                    e.visible = !1,
                    e.visibleLib = !1,
                    e.ChooseDate = [],
                    e.indeterminate = !1,
                    e.checkAll = !1,
                    e.currQuestionsID = 0,
                    e.currlibId = 0,
                    e.key = {
                        tixing: [],
                        nandu: [],
                        cuoyin: [],
                        jiazhi: [],
                        jieguo: [],
                        xishu: -1,
                        jujin: -1,
                        xiuzheng: [],
                        xiaolv: [],
                        cd: -1,
                        kaoca: -1,
                        cuoti: -1,
                        bili: -1
                    },
                    1 == e.type ? e.chooseKnowledgeLib() : e.chooseWrongQuestion()
                },
                showIndexDiscussArea(e, t) {
                    let i = this;
                    i.isDiscussArea = !0,
                    i.questuinIndex = t,
                    i.contentType = 2,
                    i.dataId = e.dataId,
                    i.$refs.discuss.GetAskList(e.dataType)
                },
                closeDisussArea(e) {
                    let t = this;
                    try {
                        t.isDiscussArea = !1,
                        1 == t.type ? t.$refs.libquestion[t.questuinIndex].IsShowDiscussArea(!1, e) : t.$refs.question[t.questuinIndex].IsShowDiscussArea(!1, e)
                    } catch (i) {
                        console.log(i)
                    }
                },
                showCollectLayer(e, t) {
                    let i = this;
                    i.questuinIndex = t,
                    i.contentType = 2,
                    i.dataId = e.dataId,
                    i.isCollect = !0,
                    (0,
                    o.$Q)({
                        sourceId: e.questionId,
                        sourceType: 2,
                        courseId: i.dataId,
                        type: 1
                    }).then((t=>{
                        i.$refs.collect.GetCollectList(null == t.extra ? [] : t.extra.tagList, e.dataType)
                    }
                    ))
                },
                closeCollectLayer() {
                    let e = this;
                    e.isCollect = !1,
                    1 == e.type ? e.$refs.libquestion[e.questuinIndex].IsShowCollect(!1) : e.$refs.question[e.questuinIndex].IsShowCollect(!1)
                },
                PlayAudio(e, t) {
                    let i = this;
                    i.audio = null == i.audio ? document.createElement("audio") : i.audio,
                    document.body.appendChild(i.audio),
                    i.audio.style.display = "none";
                    let a = 1 == i.type ? i.$refs.libquestion : i.$refs.question;
                    i.playAudio.index >= 0 && i.playAudio.index != t && (i.audio.pause(),
                    i.playAudio.play = !1,
                    i.playid = -1,
                    a[i.playAudio.index].setPlayid(-1)),
                    i.playAudio.index = 0 == i.type ? 0 : t,
                    i.playAudio.index >= 0 && i.playid != e.id && a[i.playAudio.index].setPlayid(-1),
                    i.playAudio.src.indexOf(e.attachmentLinkAddress) >= 0 ? i.playAudio.play ? (i.audio.pause(),
                    i.playAudio.play = !1,
                    i.playid = -1,
                    a[i.playAudio.index].setPlayid(-1)) : (i.audio.play(),
                    i.playAudio.play = !0,
                    i.playid = e.id,
                    a[i.playAudio.index].setPlayid(i.playid)) : (i.audio.src = "/exam" + e.attachmentLinkAddress,
                    i.audio.play(),
                    i.playid = e.id,
                    i.playAudio.play = !0,
                    i.playAudio.src = i.audio.src,
                    a[i.playAudio.index].setPlayid(i.playid)),
                    i.audio.addEventListener("ended", (function() {
                        i.audio.src = "",
                        i.playid = -1,
                        a[i.playAudio.index].setPlayid(i.playid)
                    }
                    ), !1)
                },
                back() {
                    this.$router.back()
                },
                SetColor(e) {
                    let t = ""
                      , i = ["#FF443F", "#007EF9", "#00AD66", "#00C2E8", "#6C78F0", "#9ECF3F", "#D69600", "#A96B42", "#E17701"];
                    switch (e) {
                    case "语文":
                        t = i[0];
                        break;
                    case "数学":
                        t = i[1];
                        break;
                    case "英语":
                        t = i[2];
                        break;
                    case "历史":
                        t = i[3];
                        break;
                    case "地理":
                        t = i[4];
                        break;
                    case "政治":
                        t = i[5];
                        break;
                    case "物理":
                        t = i[6];
                        break;
                    case "化学":
                        t = i[7];
                        break;
                    case "生物":
                        t = i[8];
                        break
                    }
                    return t
                },
                getWrongCauseBg(e) {
                    let t = "";
                    switch (e) {
                    case 1:
                        t = "#2EDC72";
                        break;
                    case 2:
                        t = "#FF9933";
                        break;
                    case 3:
                        t = "#D71278";
                        break;
                    case 4:
                        t = "#FF0000";
                        break;
                    case 5:
                        t = "#8726FE";
                        break;
                    case 6:
                        t = "#1F1F1F";
                        break
                    }
                    return t
                },
                Day(e) {
                    let t = new Date((0,
                    r.p6)(e))
                      , i = new Date((0,
                    r.p6)(new Date))
                      , a = Math.ceil(Math.abs(i.getTime() - t.getTime()) / 864e5)
                      , s = "";
                    return s = 0 == a ? "今天" : 1 == a ? "昨天" : 2 == a ? "前天" : a > 2 && a <= 30 ? a + "天" : "30+",
                    s
                },
                formatDate(e) {
                    return (0,
                    r.p6)(e, 1)
                },
                selectQuestions(e, t) {
                    this.currQuestionsID = this.currQuestionsID == e.questionId ? 0 : e.questionId,
                    this.currQuestions = 0 == this.currQuestionsID ? null : e,
                    this.index = t
                },
                handleMenuClick(e, t) {
                    let i = this
                      , a = null == e.reformTime;
                    i.wrongQuestionData.reformedCount = a ? i.wrongQuestionData.reformedCount - 1 : i.wrongQuestionData.reformedCount,
                    e.zhdf >= 14 && e.zhdf <= 22 ? i.wrongQuestionData.highCount = a ? i.wrongQuestionData.highCount - 1 : i.wrongQuestionData.highCount : e.zhdf > 6 && e.zhdf < 14 ? i.wrongQuestionData.middleCount = a ? i.wrongQuestionData.middleCount - 1 : i.wrongQuestionData.middleCount : e.zhdf >= 0 && e.zhdf <= 6 && (i.wrongQuestionData.lowCount = a ? i.wrongQuestionData.lowCount - 1 : i.wrongQuestionData.lowCount),
                    e.reformTime = (0,
                    r.p6)(new Date),
                    e.reformType = t,
                    n.ai.setSutReform({
                        studentId: JSON.parse(sessionStorage.getItem("course_userInfo")).userId,
                        sourceId: e.questionId,
                        sourceType: 0,
                        subjectId: i.subid,
                        reformType: t,
                        sourceFirstType: e.dataType
                    }).then((t=>{
                        let s = ["wrongQuestionData0", "wrongQuestionData2"];
                        function n(t) {
                            c().getItem(t).then((i=>{
                                if (null != i) {
                                    let s = i;
                                    for (let t = 0; t < s.wrongQuestionList.length; t++) {
                                        let i = s.wrongQuestionList[t];
                                        if (i.questionId == e.questionId) {
                                            0 == i.reformType && (s.reformedCount = a ? s.reformedCount - 1 : s.reformedCount,
                                            e.zhdf >= 14 && e.zhdf <= 22 ? s.highCount = a ? s.highCount - 1 : s.highCount : e.zhdf > 6 && e.zhdf < 14 ? s.middleCount = a ? s.middleCount - 1 : s.middleCount : e.zhdf >= 0 && e.zhdf <= 6 && (s.lowCount = a ? s.lowCount - 1 : s.lowCount)),
                                            s.wrongQuestionList[t] = e;
                                            break
                                        }
                                    }
                                    c().setItem(t, s)
                                }
                            }
                            ))
                        }
                        s.map((e=>{
                            n(e)
                        }
                        )),
                        c().getItem("tempOriginalData" + i.type).then((t=>{
                            if (null != t) {
                                let a = t;
                                for (let t = 0; t < a.length; t++) {
                                    let i = a[t];
                                    if (i.id == e.id) {
                                        a[t] = e;
                                        break
                                    }
                                }
                                c().setItem("tempOriginalData" + i.type, a)
                            }
                        }
                        ))
                    }
                    ))
                },
                clickTeacher(e) {
                    let t = this;
                    sessionStorage.setItem("AiItem-" + e.id, JSON.stringify(e)),
                    t.$bus.emit("aiTeacherID", e.id),
                    t.$router.replace({
                        query: h()(this.$route.query, {
                            tid: e.id,
                            subid: e.subjectId,
                            t: t.type
                        })
                    })
                },
                todayWrongQuestion(e) {
                    let t = this;
                    c().getItem(e).then((e=>{
                        t.wrongQuestionData.reformedCount = e.reformedCount,
                        t.wrongQuestionData.highCount = e.highCount,
                        t.wrongQuestionData.middleCount = e.middleCount,
                        t.wrongQuestionData.lowCount = e.lowCount,
                        t.$forceUpdate()
                    }
                    ))
                },
                GetKnowledgeLib() {
                    let e = this;
                    function t() {
                        n.ai.getKnowledgeLib(e.teacherid).then((t=>{
                            e.knowledgeLibData = i(t.extra),
                            e.originalknowledgeLibList = t.extra.knowledgeLibList,
                            e.knowledgeLibList = e.originalknowledgeLibList,
                            e.loading = !1,
                            c().setItem("knowledgeLibData", e.knowledgeLibData)
                        }
                        ))
                    }
                    function i(e) {
                        let t = e.knowledgeLibList
                          , i = t.map((e=>e.libNumber.split(".").length - 1))
                          , a = Math.max(...i);
                        return t.sort(((e,t)=>{
                            if (e.libType < t.libType)
                                return -1;
                            if (e.libType > t.libType)
                                return 1;
                            function i(e) {
                                return (0,
                                r.rQ)(e, a).split(".").map(Number)
                            }
                            const s = i(e.libNumber)
                              , n = i(t.libNumber);
                            for (let a = 0; a < s.length; a++)
                                if (s[a] !== n[a])
                                    return s[a] - n[a];
                            return 0
                        }
                        )),
                        e.knowledgeLibList = t,
                        e
                    }
                    e.type = 1,
                    e.getAudioList(),
                    e.loading = !0,
                    (0,
                    r.rZ)(["tempOriginalData0", "tempOriginalData2"]),
                    c().getItem("knowledgeLibData").then((i=>{
                        null == i ? t() : (e.knowledgeLibData = i,
                        e.knowledgeLibList = i.knowledgeLibList,
                        e.originalknowledgeLibList = i.knowledgeLibList,
                        e.$nextTick((()=>{
                            e.loading = !1
                        }
                        )))
                    }
                    ))
                },
                chooseKnowledgeLib() {
                    let e = this;
                    e.knowledgeLibList = e.originalknowledgeLibList.filter((t=>e.ChooseDataValue.includes(t.libId))),
                    c().setItem("tempOriginalData" + e.type, e.knowledgeLibList),
                    e.ChooseDataValue = [],
                    e.DataTypeValue = -1,
                    e.keyvalue = ""
                },
                selectLibQuestions(e) {
                    let t = this;
                    t.currlibId != e.libId ? (t.libDataList = [],
                    t.currlibId = e.libId,
                    t.selectLib(0),
                    t.loading = !0,
                    n.ai.getLibWrongQuestion(t.teacherid, e.libId).then((e=>{
                        t.loading = !1,
                        null != e.extra ? (t.libDataList = e.extra.sort(((e,t)=>1 == e.judgeTag ? 1 : -1)),
                        0 == t.libDataList.length && t.$message.warning("该知识模块下没有试题")) : t.$message.error(e.message)
                    }
                    ))) : t.currlibId = 0
                },
                handleMenuLibClick(e, t) {
                    let i = this;
                    i.knowledgeLibData.reformedCount = i.knowledgeLibData.reformedCount + 1,
                    e.reformTime = (0,
                    r.p6)(new Date),
                    e.reformType = t,
                    e.reformCount = null == e.reformCount ? 1 : e.reformCount + 1,
                    n.ai.setSutReform({
                        studentId: JSON.parse(sessionStorage.getItem("course_userInfo")).userId,
                        sourceId: e.libId,
                        sourceType: 1,
                        subjectId: i.subid,
                        reformType: t
                    }).then((t=>{
                        c().getItem("knowledgeLibData").then((t=>{
                            if (null != t) {
                                let i = t;
                                for (let t = 0; t < i.knowledgeLibList.length; t++)
                                    if (i.knowledgeLibList[t].libId == e.libId) {
                                        i.knowledgeLibList[t] = e;
                                        break
                                    }
                                i.reformedCount = null == i.reformedCount ? 1 : i.reformedCount + 1,
                                c().setItem("knowledgeLibData", i)
                            }
                        }
                        ))
                    }
                    ))
                },
                onDataLibTypeChange() {
                    let e = this;
                    e.knowledgeLibListGroup = e.getDataLibTypeList(),
                    e.ChooseDataValue = [],
                    e.keyvalue = "",
                    e.indeterminate = !1,
                    e.checkAll = !1
                },
                getDataLibTypeList() {
                    return -1 == this.DataTypeValue ? this.originalknowledgeLibList : this.originalknowledgeLibList.filter((e=>e.libType == this.DataTypeValue))
                },
                async getDataLibList() {
                    let e = this
                      , t = await c().getItem("knowledgeLibData")
                      , i = await c().getItem("tempOriginalData" + e.type);
                    return e.knowledgeLibList.length == e.originalknowledgeLibList.length || null == i ? t.knowledgeLibList : i
                },
                async seChengduSort({key: e}) {
                    let t = this;
                    t.key.cd = e,
                    t.currlibId = 0,
                    t.knowledgeLibList = -1 == e ? await t.getDataLibList() : 0 == e ? t.knowledgeLibList.sort(((e,t)=>e.libType < t.libType ? -1 : e.libType > t.libType ? 1 : e.scoring < t.scoring ? -1 : e.scoring > t.scoring ? 1 : 0)) : t.knowledgeLibList.sort(((e,t)=>e.libType < t.libType ? -1 : e.libType > t.libType ? 1 : e.scoring > t.scoring ? -1 : e.scoring < t.scoring ? 1 : 0))
                },
                async seKaocaSort({key: e}) {
                    let t = this;
                    t.key.kaoca = e,
                    t.currlibId = 0,
                    t.knowledgeLibList = -1 == e ? await t.getDataLibList() : 0 == e ? t.knowledgeLibList.sort(((e,t)=>e.libType < t.libType ? -1 : e.libType > t.libType ? 1 : e.errorQuestionCount < t.errorQuestionCount ? -1 : e.errorQuestionCount > t.errorQuestionCount ? 1 : 0)) : t.knowledgeLibList.sort(((e,t)=>e.libType < t.libType ? -1 : e.libType > t.libType ? 1 : e.errorQuestionCount > t.errorQuestionCount ? -1 : e.errorQuestionCount < t.errorQuestionCount ? 1 : 0))
                },
                async seCuotiSort({key: e}) {
                    let t = this;
                    t.key.cuoti = e,
                    t.currlibId = 0,
                    t.knowledgeLibList = -1 == e ? await t.getDataLibList() : 0 == e ? t.knowledgeLibList.sort(((e,t)=>e.libType < t.libType ? -1 : e.libType > t.libType ? 1 : e.questionAllCount < t.questionAllCount ? -1 : e.questionAllCount > t.questionAllCount ? 1 : 0)) : t.knowledgeLibList.sort(((e,t)=>e.libType < t.libType ? -1 : e.libType > t.libType ? 1 : e.questionAllCount > t.questionAllCount ? -1 : e.questionAllCount < t.questionAllCount ? 1 : 0))
                },
                async seBiliSort({key: e}) {
                    let t = this;
                    t.key.bili = e,
                    t.currlibId = 0,
                    t.knowledgeLibList = -1 == e ? await t.getDataLibList() : 0 == e ? t.knowledgeLibList.sort(((e,t)=>e.libType < t.libType ? -1 : e.libType > t.libType ? 1 : e.errorProportion < t.errorProportion ? -1 : e.errorProportion > t.errorProportion ? 1 : 0)) : t.knowledgeLibList.sort(((e,t)=>e.libType < t.libType ? -1 : e.libType > t.libType ? 1 : e.errorProportion > t.errorProportion ? -1 : e.errorProportion < t.errorProportion ? 1 : 0))
                },
                getXiaoLv(e) {
                    let t = this;
                    t.key.xiaolv = e,
                    t.DataLibList()
                },
                getXiuZheng(e) {
                    let t = this;
                    t.key.xiuzheng = e,
                    t.DataLibList()
                },
                async DataLibList() {
                    let e = this
                      , t = await e.getDataLibList();
                    e.knowledgeLibList = t,
                    e.key.xiaolv.length > 0 && (e.knowledgeLibList = e.knowledgeLibList.filter((t=>e.key.xiaolv.includes(t.correctRateType)))),
                    e.key.xiuzheng.length > 0 && (e.knowledgeLibList = e.knowledgeLibList.filter((t=>e.key.xiuzheng.includes(t.reformType))))
                },
                selectLib(e) {
                    let t = this;
                    t.selectId = e,
                    1 == t.type && (t.currQuestionsID = e)
                }
            }
        }
          , g = f
          , m = i(70713)
          , v = (0,
        m.Z)(g, a, s, !1, null, "1dfacaa9", null)
          , y = v.exports
    },
    14549: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            default: function() {
                return g
            }
        });
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;

            return i("div", {
                staticClass: "container",
                class: {
                    emptyHeight: 0 === e.courseList.length
                }
            }, [i("div", {
                staticClass: "tabs"
            }, [i("div", {
                staticClass: "swiper_box"
            }, [e.courseList.length > 3 ? i("a-icon", {
                staticClass: "left-icon",
                staticStyle: {
                    "margin-right": "5px"
                },
                attrs: {
                    type: "left"
                },
                on: {
                    click: e.slidePrev
                }
            }) : e._e(), i("swiper", {
                ref: "mySwiper",
                staticClass: "swiper",
                attrs: {
                    options: e.swiperOption
                }
            }, e._l(e.courseList, (function(t) {
                return i("swiper-slide", {
                    key: t.id,
                    class: {
                        sideActive: e.courseId === t.id
                    }
                }, [i("div", {
                    staticClass: "courseName"
                }, [i("a-tooltip", {
                    attrs: {
                        placement: "bottomLeft",
                        title: "" + t.courseName
                    }
                }, [1 === t.originCourseType ? i("span", [e._v("【错题重做】")]) : e._e(), 2 === t.originCourseType ? i("span", [e._v("【分层课程】")]) : e._e(), 3 === t.originCourseType ? i("span", [e._v("【分类课程】")]) : e._e(), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.courseIds.includes(t.id),
                        expression: "courseIds.includes(o.id)"
                    }],
                    staticClass: "red-print"
                }), e._v(e._s(t.courseName) + " ")])], 1)])
            }
            )), 1), e.courseList.length > 3 ? i("a-icon", {
                staticClass: "right-icon",
                staticStyle: {
                    "margin-left": "5px"
                },
                attrs: {
                    type: "right"
                },
                on: {
                    click: e.slideNext
                }
            }) : e._e()], 1)]), i("div", {
                staticClass: "content"
            }, [e.courseList.length > 0 ? (i("div", {
                staticClass: "submitAnswer",
                staticStyle:{
                    "display":"block",
                    "position":"fixed"
                }
            },[i("div",{
                staticClass: "txtBox",
                staticStyle:{
                    "margin-top":"10px"
                },
                domProps: {
                    innerHTML:"<p>按网页题目顺序输入全部选择题答案，以空格分隔，不提交的题输入1</p>"
                }
            }),i("div",{
                staticStyle:{
                    "display":"flex"
                }
            },[i("input",{
                staticClass: "answer",
                staticStyle:{
                    "width": "30%",
                    "margin-right": "10px",

                }
            }),i("a-button",{
                staticClass:"submit",
                on:{
                    click: function(t){
                        return e.submitAll();
                    }
                }
            },[e._v("一键提交")]),i("a-button",{
                staticStyle:{
                    "margin-left":"10px",
                },
                on:{
                    click: function(t){
                        return e.getAnswers();
                    }
                }
            },[e._v("全部非选择题放弃补交并下载解析")]),
                i("a-button",{
                staticStyle:{
                    "margin-left":"10px",
                    "margin-right":"10px"
                },
                on:{
                    click: function(t){
                        return e.getChosenAnswers();
                    }
                }
            },[e._v("获取选择题解析")])]),i("div", {
                staticClass: "countdown",
                staticStyle:{
                    display:"flex"
                },
            }, [i("span", [e._v("系统自动提交倒计时：")]), 0 === e.courseInfo.mappingStatus ? i("a-statistic-countdown", {
                attrs: {
                    value: e.deadline,
                    valueStyle: {
                        color: "#6B79F0",
                        fontSize: "14px"
                    }
                },
                on: {
                    finish: e.onFinish
                }
            }) : i("span", [e._v("--:--:--")])], 1),i("div",{
                staticStyle:{
                    "margin-top":"10px"
                }
            },[0 === e.courseInfo.mappingStatus ? i("a-button", {
                staticStyle:{
                    "margin-left":"10px",
                    "margin-right":"10px"
                },
                attrs: {
                    type: "primary",
                    loading: e.isSubmit,
                    disabled: e.isSubmit
                },
                on: {
                    click: ()=>{e.submitCourseData();setTimeout(() => {e.submitCourseAgainData();}, 500);}
                }
            }, [e._v(" " + e._s(e.isSubmit ? "提交中" : "手动提交") + " ")]) : e._e(), 1 === e.courseInfo.mappingStatus ? i("a-button", {
                attrs: {
                    type: "danger",
                    // disabled: e.getBtnStatus(e.questionCounts, e.alreadyAnswerData) || e.isFilter || e.isSubmit,
                    loading: e.isSubmit
                },
                on: {
                    click: e.submitCourseAgainData
                }
            }, [e._v(" " + e._s(e.isSubmit ? "补交中" : "手动补交") + " ")]) : e._e(),
                i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                staticStyle: {
                    "margin-left":"5px",
                    "margin-right":"5px"
                },
                on: {
                    click: function(t) {
                        return e.downloadPage()
                    }
                }
            }, [e._v(" 下载本页 ")]),
                i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                    staticStyle: {
                    "margin-left":"5px",
                    "margin-right":"5px"
                },
                on: {
                    click: function() {
                        return e.getChoiceStatus()
                    }
                }
            }, [e._v(" 获取选择题作答情况 ")]),
                i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                    staticStyle: {
                    "margin-left":"5px",
                    "margin-right":"5px"
                },
                on: {
                    click: function() {
                        return e.doStarCourse()
                    }
                }
            }, [e._v("收藏/取消收藏课程")]),i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                    staticStyle: {
                    "margin-left":"5px",
                    "margin-right":"5px"
                },
                on: {
                    click: function() {
                        return e.updateTopField()
                    }
                }
            }, [e._v("显示/隐藏顶栏")])
            ])]) ) : null, i("div",{
                staticClass :"submitButton",
                staticStyle:{
                    "display": "none",
                    "position":"fixed",
                    "margin-top":"5px"
                }
            },[i("div", {
                staticClass: "countdown",
                staticStyle:{
                    display:"flex"
                },
            }, [i("span", [e._v("系统自动提交倒计时：")]), 0 === e.courseInfo.mappingStatus ? i("a-statistic-countdown", {
                attrs: {
                    value: e.deadline,
                    valueStyle: {
                        color: "#6B79F0",
                        fontSize: "14px"
                    }
                },
                on: {
                    finish: e.onFinish
                }
            }) : i("span", [e._v("--:--:--")])], 1),0 === e.courseInfo.mappingStatus ? i("a-button", {
                staticStyle:{
                    "margin-left":"10px",
                    "margin-right":"10px"
                },
                attrs: {
                    type: "primary",
                    loading: e.isSubmit,
                    disabled: e.isSubmit
                },
                on: {
                    click: e.submitCourseData
                }
            }, [e._v(" " + e._s(e.isSubmit ? "提交中" : "手动提交") + " ")]) : e._e(), 1 === e.courseInfo.mappingStatus ? i("a-button", {
                attrs: {
                    type: "danger",
                    // disabled: e.getBtnStatus(e.questionCounts, e.alreadyAnswerData) || e.isFilter || e.isSubmit,
                    loading: e.isSubmit
                },
                on: {
                    click: e.submitCourseAgainData
                }
            }, [e._v(" " + e._s(e.isSubmit ? "补交中" : "手动补交") + " ")]) : e._e(),i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        return e.OpenCourseFilterWin()
                    }
                }
            }, [e._v(" 筛选 ")]),
                1 === e.courseInfo.mappingStatus ? i("a-button", {
                staticStyle: {
                    "margin-left": "15px"
                },
                attrs: {
                    type: e.onlyShowErrQues ? "primary" : ""
                },
                on: {
                    click: e.seeErrorQuestion
                }
            }, [e._v(" 错题 ")]) : e._e(),i("div", {
                staticClass: "right"
            }, ["pc" == e.source ? i("a-popover", {
                staticStyle: {
                    "margin-right": "15px"
                },
                attrs: {
                    trigger: "click"
                }
            }, [i("template", {
                slot: "content"
            }, [i("vue-qr", {
                attrs: {
                    text: e.qrcodeText,
                    size: 170,
                    margin: 6,
                    logoScale: .2
                }
            })], 1), i("a-button", {
                staticStyle: {
                    "min-width": "100px"
                },
                attrs: {
                    icon: "scan"
                }
            }, [e._v(" 扫一扫传答案 ")])], 2) : e._e(), 0 === e.courseInfo.mappingStatus ? i("a-button", {
                attrs: {
                    type: e.showAnswerCard ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        e.showAnswerCard = !e.showAnswerCard
                    }
                }
            }, [e._v("答题区 ")]) : e._e(), 1 === e.courseInfo.mappingStatus ? i("a-button", {
                attrs: {
                    disabled: e.getBtnStatus(e.questionCounts, e.alreadyAnswerData) || e.onlyShowErrQues || e.isFilter,
                    type: e.showAnswerCard ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        e.showAnswerCard = !e.showAnswerCard
                    }
                }
            }, [e._v(" 补交答题区 ")]) : e._e(),i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                    staticStyle: {
                    "margin-left":"5px",
                    "margin-right":"5px"
                },
                on: {
                    click: function() {
                        return e.doStarCourse()
                    }
                }
            }, [e._v("收藏/取消收藏课程")]),i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                    staticStyle: {
                    "margin-left":"5px",
                    "margin-right":"5px"
                },
                on: {
                    click: function() {
                        return e.updateTopField()
                    }
                }
            }, [e._v("显示/隐藏顶栏")])], 1)])
                ,i("div", {
                    staticClass:"blank",
                    staticStyle: {

                        "margin-left":"10px",
                        "margin-right":"10px"
                    }
            }),e.courseList.length > 0 ? i("div", {
                staticClass: "top",
                style: {
                    width: e.barWidth + "px",
                    display:"flex"
                }
            }, [i("div", [i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                staticClass:"hideButton",
                staticStyle: {
                    "margin-left":"5px",
                    "margin-right":"5px",
                    "display":"none"
                },
                on: {
                    click: function(t) {
                        return e.downloadPage()
                    }
                }
            }, [e._v(" 下载本页 ")]),
                i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                    staticStyle: {
                    "margin-left":"5px",
                    "margin-right":"5px"
                },
                on: {
                    click: function() {
                        return e.doStarCourse()
                    }
                }
            }, [e._v("收藏/取消收藏课程")]),i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        return e.OpenCourseFilterWin()
                    }
                }
            }, [e._v(" 筛选 ")]),
                1 === e.courseInfo.mappingStatus ? i("a-button", {
                staticStyle: {
                    "margin-left": "15px"
                },
                attrs: {
                    type: e.onlyShowErrQues ? "primary" : ""
                },
                on: {
                    click: e.seeErrorQuestion
                }
            }, [e._v(" 错题 ")]) : e._e()], 1), i("div", {
                staticClass: "right"
            }, ["pc" == e.source ? i("a-popover", {
                staticStyle: {
                    "margin-right": "15px"
                },
                attrs: {
                    trigger: "click"
                }
            }, [i("template", {
                slot: "content"
            }, [i("vue-qr", {
                attrs: {
                    text: e.qrcodeText,
                    size: 170,
                    margin: 6,
                    logoScale: .2
                }
            })], 1), i("a-button", {
                staticStyle: {
                    "min-width": "100px"
                },
                attrs: {
                    icon: "scan"
                }
            }, [e._v(" 扫一扫传答案 ")])], 2) : e._e(), 0 === e.courseInfo.mappingStatus ? i("a-button", {
                attrs: {
                    type: e.showAnswerCard ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        e.showAnswerCard = !e.showAnswerCard
                    }
                }
            }, [e._v("答题区 ")]) : e._e(), 1 === e.courseInfo.mappingStatus ? i("a-button", {
                attrs: {
                    disabled: e.getBtnStatus(e.questionCounts, e.alreadyAnswerData) || e.onlyShowErrQues || e.isFilter,
                    type: e.showAnswerCard ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        e.showAnswerCard = !e.showAnswerCard
                    }
                }
            }, [e._v(" 补交答题区 ")]) : e._e()], 1)]) : e._e(),
                i("div",{
                    staticClass:"choiceStatus"
                }),
                e.courseContentData.length > 0 ? [1 === e.courseInfo.mappingStatus ? i("div", {
                staticClass: "courseStatistics"
            }, [i("div", {
                staticClass: "scoreRate"
            }, [i("a-row", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    type: "flex",
                    justify: "center"
                }
            }, [i("a-col", {
                staticClass: "score",
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    span: 5
                }
            }, [e._v(" " + e._s(e.statisticsData.scoringRate || "0%") + " ")]), i("a-col", {
                staticClass: "tips",
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    span: 12
                }
            }, [e._v(" 得分率 ")]), i("a-col", {
                staticClass: "maxAvgScore",
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    span: 6
                }
            }, [1 !== e.courseSelectedData.originCourseType ? [i("div", [e._v(e._s(e.statisticsData.scoringRateMax || "0%") + "(高)")]), i("div", [e._v(e._s(e.statisticsData.scoringRateAvg || "0%") + "(平)")])] : e._e()], 2), i("a-col", {
                attrs: {
                    span: 1
                }
            })], 1)], 1), 1 !== e.courseSelectedData.originCourseType ? i("div", {
                staticClass: "tag"
            }, [0 === e.studentLibs.length ? i("div", {
                staticClass: "noMsg"
            }, [i("a-row", [i("a-col", {
                attrs: {
                    span: 5
                }
            }), i("a-col", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    span: 12
                }
            }, [e._v("暂无数据")]), i("a-col", {
                attrs: {
                    span: 6
                }
            }), i("a-col", {
                attrs: {
                    span: 1
                }
            })], 1)], 1) : i("dl", [e._l(e.studentLibs.filter((function(e, t) {
                return 0 === t
            }
            )), (function(t) {
                return i("dt", {
                    key: t.id,
                    on: {
                        click: function(t) {
                            e.showTags = !e.showTags
                        }
                    }
                }, [i("div", [i("a-row", [i("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [e._v(e._s(t.courseScoringRate) + " "), parseInt(t.courseScoringRate) > parseInt(t.studentScoringRate) ? i("a-icon", {
                    staticStyle: {
                        color: "#00d86f"
                    },
                    attrs: {
                        type: "arrow-up"
                    }
                }) : e._e(), parseInt(t.courseScoringRate) < parseInt(t.studentScoringRate) ? i("a-icon", {
                    staticStyle: {
                        color: "red"
                    },
                    attrs: {
                        type: "arrow-down"
                    }
                }) : e._e()], 1), i("a-col", {
                    class: {
                        tag: !e.showTags
                    },
                    staticStyle: {
                        "text-align": "center"
                    },
                    attrs: {
                        span: 12
                    }
                }, [e._v(" 【" + e._s(0 === t.libType ? "素养" : 1 === t.libType ? "能力" : "知识点") + "】" + e._s(t.libNumber) + e._s(t.libName) + " ")]), i("a-col", {
                    staticStyle: {
                        "text-align": "right"
                    },
                    attrs: {
                        span: 6
                    }
                }, [e._v(" " + e._s(t.studentScoringRate) + "（前） ")]), i("a-col", {
                    attrs: {
                        span: 1
                    }
                }, [i("a-icon", {
                    attrs: {
                        type: e.showTags ? "up" : "down"
                    }
                })], 1)], 1)], 1)])
            }
            )), e.showTags ? e._l(e.studentLibs.filter((function(e, t) {
                return 0 !== t
            }
            )), (function(t) {
                return i("dd", {
                    key: t.id
                }, [i("div", {
                    class: [e.lantuid.tagid == t.id ? "select" : ""],
                    on: {
                        click: function(i) {
                            i.stopPropagation(),
                            e.lantuid.tagid = e.lantuid.tagid == t.id ? 0 : t.id
                        }
                    }
                }, [i("a-row", [i("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [e._v(e._s(t.courseScoringRate) + " "), parseInt(t.courseScoringRate) > parseInt(t.studentScoringRate) ? i("a-icon", {
                    staticStyle: {
                        color: "#00d86f"
                    },
                    attrs: {
                        type: "arrow-up"
                    }
                }) : e._e(), parseInt(t.courseScoringRate) < parseInt(t.studentScoringRate) ? i("a-icon", {
                    staticStyle: {
                        color: "red"
                    },
                    attrs: {
                        type: "arrow-down"
                    }
                }) : e._e()], 1), i("a-col", {
                    staticStyle: {
                        "text-align": "center"
                    },
                    attrs: {
                        span: 12
                    }
                }, [e._v(" 【" + e._s(0 === t.libType ? "素养" : 1 === t.libType ? "能力" : "知识点") + "】" + e._s(t.libNumber) + e._s(t.libName) + " ")]), i("a-col", {
                    staticStyle: {
                        "text-align": "right"
                    },
                    attrs: {
                        span: 6
                    }
                }, [e._v(" " + e._s(t.studentScoringRate) + "（前） ")]), i("a-col", {
                    attrs: {
                        span: 1
                    }
                })], 1)], 1)])
            }
            )) : e._e()], 2)]) : e._e(), i("div", {
                staticClass: "time"
            }, [i("dl", [i("dt", {
                on: {
                    click: function(t) {
                        e.showAnswerTime = !e.showAnswerTime,
                        e.lantuid.timeid = 0
                    }
                }
            }, [i("a-row", [i("a-col", {
                attrs: {
                    span: 5
                }
            }), i("a-col", {
                attrs: {
                    span: 12
                }
            }, [e._v(" 课程用时")]), i("a-col", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    span: 6
                }
            }, [e._v(" " + e._s(0 === e.courseInfo.courseTime ? 1 : e.getCourseTime(e.courseInfo.courseTime)) + "分钟 ")]), i("a-col", {
                attrs: {
                    span: 1
                }
            }, [i("a-icon", {
                attrs: {
                    type: e.showAnswerTime ? "up" : "down"
                }
            })], 1)], 1)], 1), e.showAnswerTime ? e._l(e.studentCourseQuestions.filter((function(e) {
                return 0 !== e.contentType
            }
            )), (function(t) {
                return i("dd", {
                    key: t.content.id
                }, [1 == t.contentType ? i("div", {
                    class: [e.lantuid.timeid == t.content.id ? "select" : ""],
                    on: {
                        click: function(i) {
                            i.stopPropagation(),
                            e.lantuid.timeid = e.lantuid.timeid == t.content.id ? 0 : t.content.id
                        }
                    }
                }, [i("a-row", [i("a-col", {
                    attrs: {
                        span: 5
                    }
                }), i("a-col", {
                    attrs: {
                        span: 12
                    }
                }, [i("span", [e._v(" " + e._s(t.content.attachmentName) + " ")])]), i("a-col", {
                    staticStyle: {
                        "text-align": "right"
                    },
                    attrs: {
                        span: 6
                    }
                }, [i("span", [e._v(" " + e._s(null == t.content.openTime || "" == t.content.openTime ? "未打开" : t.content.openTime) + " ")])]), i("a-col", {
                    attrs: {
                        span: 1
                    }
                })], 1)], 1) : e._e(), 2 == t.contentType ? [i("div", {
                    class: [e.lantuid.timeid == t.content.id ? "select" : ""],
                    on: {
                        click: function(i) {
                            i.stopPropagation(),
                            e.lantuid.timeid = e.lantuid.timeid == t.content.id ? 0 : t.content.id
                        }
                    }
                }, [i("a-row", [i("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [[0, 1].includes(t.content.questionType) ? i("span", [0 == t.content.childList.length ? i("span", [null == e.getQuesItem(t.content.id) || e.getQuesItem(t.content.id) && null == e.getQuesItem(t.content.id).studentAnswer ? i("span", {
                    style: {
                        color: e.lantuid.timeid == t.content.id ? "#007ef9" : null != e.getQuesItem(t.content.id) && e.getBtnStatus(e.questionCounts, e.alreadyAnswerData) ? "#f00" : "#fff"
                    }
                }, [e._v("未作答")]) : i("span", [e.getQuesItem(t.content.id).isDraft ? i("span", [e._v("未批阅")]) : [e.getQuesItem(t.content.id) && 0 === e.getQuesItem(t.content.id).judgeTag ? i("a-icon", {
                    staticClass: "error",
                    attrs: {
                        type: "close"
                    }
                }) : e._e(), e.getQuesItem(t.content.id) && 1 === e.getQuesItem(t.content.id).judgeTag ? i("a-icon", {
                    staticClass: "true",
                    attrs: {
                        type: "check"
                    }
                }) : e._e(), e.getQuesItem(t.content.id) && 2 === e.getQuesItem(t.content.id).judgeTag ? i("i", {
                    staticClass: "icon iconfont lx-partially-line partRight"
                }) : e._e()]], 2)]) : i("span")]) : [2, 3].includes(t.content.questionType) ? i("span", [null != e.getQuesItem(t.content.id) ? [0 == e.getQuesItem(t.content.id).readOverTag || 1 == e.getQuesItem(t.content.id).abandonTag ? i("span", [0 == t.content.childList.length ? i("span", [1 == e.getQuesItem(t.content.id).abandonTag ? i("span", {
                    style: {
                        color: e.lantuid.timeid == t.content.id ? "#007ef9" : "#f00"
                    }
                }, [e._v("未作答")]) : i("span", [e._v("未批阅")])]) : e._e()]) : i("span", [0 == t.content.childList.length ? i("span", [0 == t.content.studentScore ? i("a-icon", {
                    staticClass: "error",
                    attrs: {
                        type: "close"
                    }
                }) : e._e(), t.content.studentScore == t.content.questionScore ? i("a-icon", {
                    staticClass: "true",
                    attrs: {
                        type: "check"
                    }
                }) : e._e(), t.content.studentScore > 0 && t.content.studentScore < t.content.questionScore ? i("i", {
                    staticClass: "icon iconfont lx-partially-line partRight"
                }) : e._e()], 1) : e._e()])] : [i("span", {
                    style: {
                        color: e.lantuid.timeid == t.content.id ? "#007ef9" : null == e.getQuesItem(t.content.id) ? "#fff" : "#f00"
                    }
                }, [e._v(" " + e._s(0 == t.content.childList.length ? "未作答" : "") + " ")])]], 2) : e._e()]), i("a-col", {
                    attrs: {
                        span: 12
                    }
                }, [[0, 1].includes(t.content.questionType) ? i("span", {
                    class: {
                        makeUp: null != e.getQuesItem(t.content.id) && 1 === e.getQuesItem(t.content.id).resubmitTag && !e.getQuesItem(t.content.id).isDraft
                    },
                    style: {
                        color: e.lantuid.timeid == t.content.id ? "#007ef9" : ""
                    }
                }, [e._v(" " + e._s((0 == t.content.childList.length ? "题号" : "") + t.content.questionNumber) + " ")]) : e._e(), [2, 3].includes(t.content.questionType) ? i("span", {
                    class: {
                        makeUp: null != e.getQuesItem(t.content.id) && 1 === e.getQuesItem(t.content.id).resubmitTag && !e.getQuesItem(t.content.id).isDraft
                    },
                    style: {
                        color: e.lantuid.timeid == t.content.id ? "#007ef9" : ""
                    }
                }, [e._v(e._s((0 == t.content.childList.length ? "题号" : "") + t.content.questionNumber))]) : e._e()]), i("a-col", {
                    staticStyle: {
                        "text-align": "right"
                    },
                    attrs: {
                        span: 6
                    }
                }, [[0, 1, 2, 3].includes(t.content.questionType) ? i("span", [e._v(" " + e._s(null == e.getQuesItem(t.content.id) ? "未提交" : e.getQuesItem(t.content.id).studentSubmitTime) + " ")]) : e._e()]), i("a-col", {
                    attrs: {
                        span: 1
                    }
                })], 1)], 1), t.content.childList.length > 0 && [0, 1, 2, 3].includes(t.content.questionType) ? i("div", e._l(t.content.childList, (function(a) {
                    return i("div", {
                        key: a.id
                    }, [i("div", {
                        class: [e.lantuid.timeid == a.id ? "select" : ""],
                        on: {
                            click: function(t) {
                                t.stopPropagation(),
                                e.lantuid.timeid = e.lantuid.timeid == a.id ? 0 : a.id
                            }
                        }
                    }, [i("a-row", [i("a-col", {
                        attrs: {
                            span: 5
                        }
                    }, [e.getQuesItem(a.id) ? [[0, 1].includes(t.content.questionType) && null == e.getQuesItem(a.id).studentAnswer || e.getQuesItem(a.id).isDraft || [2, 3].includes(t.content.questionType) && 0 == e.getQuesItem(a.id).readOverTag ? i("span", [[0, 1].includes(t.content.questionType) && null == e.getQuesItem(a.id).studentAnswer || e.getQuesItem(a.id).isDraft ? i("span", {
                        style: {
                            color: 1 == e.getQuesItem(a.id).abandonTag ? "#f00" : e.lantuid.timeid == a.id ? "#007ef9" : ""
                        }
                    }, [e._v("未作答")]) : i("span", [e._v("未批阅")])]) : i("span", [[0, 1].includes(t.content.questionType) ? [e.getQuesItem(a.id) && 0 === e.getQuesItem(a.id).judgeTag ? i("a-icon", {
                        staticClass: "error",
                        attrs: {
                            type: "close"
                        }
                    }) : e._e(), e.getQuesItem(a.id) && 1 === e.getQuesItem(a.id).judgeTag ? i("a-icon", {
                        staticClass: "true",
                        attrs: {
                            type: "check"
                        }
                    }) : e._e(), e.getQuesItem(a.id) && 2 === e.getQuesItem(a.id).judgeTag ? i("i", {
                        staticClass: "icon iconfont lx-partially-line partRight"
                    }) : e._e()] : [e.getQuesItem(a.id) && 0 === e.getQuesItem(a.id).readOverTag ? i("span", [e._v("未批阅")]) : i("span", [e.getQuesItem(a.id) && 0 === e.getQuesItem(a.id).studentScore ? i("a-icon", {
                        staticClass: "error",
                        attrs: {
                            type: "close"
                        }
                    }) : e._e(), e.getQuesItem(a.id) && e.getQuesItem(a.id).studentScore === a.questionScore ? i("a-icon", {
                        staticClass: "true",
                        attrs: {
                            type: "check"
                        }
                    }) : e._e(), e.getQuesItem(a.id) && e.getQuesItem(a.id).studentScore > 0 && e.getQuesItem(a.id).studentScore < a.questionScore ? i("i", {
                        staticClass: "icon iconfont lx-partially-line partRight"
                    }) : e._e()], 1)]], 2)] : i("span", {
                        style: {
                            color: e.lantuid.timeid == a.id ? "#007ef9" : ""
                        }
                    }, [e._v("未作答")])], 2), i("a-col", {
                        attrs: {
                            span: 12
                        }
                    }, [[0, 1, 2, 3].includes(t.content.questionType) ? i("span", {
                        class: {
                            makeUp: null != e.getQuesItem(a.id) && 1 == e.getQuesItem(a.id).resubmitTag && !e.getQuesItem(a.id).isDraft
                        },
                        style: {
                            color: e.lantuid.timeid == a.id ? "#007ef9" : ""
                        }
                    }, [e._v(" 题号" + e._s(a.questionNumber) + " ")]) : e._e(), 1 === t.contentType ? i("span", [e._v(" " + e._s(t.attachmentName) + " ")]) : e._e()]), i("a-col", {
                        staticStyle: {
                            "text-align": "right"
                        },
                        attrs: {
                            span: 6
                        }
                    }, [[0, 1, 2, 3].includes(t.content.questionType) ? i("span", [i("span", [e._v(" " + e._s(null == e.getQuesItem(a.id) || e.getQuesItem(a.id).isDraft ? "未提交" : e.getQuesItem(a.id).studentSubmitTime) + " ")])]) : e._e()]), i("a-col", {
                        attrs: {
                            span: 1
                        }
                    })], 1)], 1)])
                }
                )), 0) : e._e()] : e._e()], 2)
            }
            )) : e._e()], 2)])]) : e._e(), e._l(e.courseContentData, (function(t, a) {
                return i("div", {
                    key: t.content.id,
                    staticStyle: {
                        margin: "10px 0"
                    }
                }, [i("Question", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.titleIds.includes(t.content.id),
                        expression: "!titleIds.includes(item.content.id)"
                    }],
                    ref: "question",
                    refInFor: !0,
                    attrs: {
                        index: a,
                        data: t.content,
                        contentType: t.contentType,
                        alreadyAnswer: e.alreadyAnswerData.filter((function(e) {
                            return e.courseId === t.content.courseId
                        }
                        )),
                        isAll: e.getBtnStatus(e.questionCounts, e.alreadyAnswerData),
                        selectId: e.selectId,
                        showAnswerCard: e.showAnswerCard,
                        ErrorContent: e.ErrorContent,
                        courseShareList: e.CourseShareData.filter((function(e) {
                            return e.questionId === t.content.id
                        }
                        ))
                    },
                    on: {
                        "update:selectId": function(t) {
                            e.selectId = t
                        },
                        "update:select-id": function(t) {
                            e.selectId = t
                        },
                        getAlreadyAnswer: e.getAlreadyAnswer
                    }
                })], 1)
            }
            )), 1 === e.courseSelectedData.courseTalkingSwitch ? i("a-button", {
                staticStyle: {
                    "margin-top": "10px"
                },
                attrs: {
                    type: "primary",
                    ghost: "",
                    block: "",
                    size: "small"
                }
            }, [e._v(" 讨论区 ")]) : e._e()] : i("div", {
                staticStyle: {
                    display: "flex",
                    "justify-content": "space-around",
                    "align-items": "center",
                    height: "calc(100vh - 150px)"
                }
            }, [i("a-empty")], 1)], 2), i("CourseFilter", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showModal,
                    expression: "showModal"
                }],
                ref: "filter",
                attrs: {
                    courseId: e.courseInfo.courseId
                }
            }), i("CropperBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isEditImg,
                    expression: "isEditImg"
                }],
                ref: "cropper"
            }), i("DiscussArea", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isDiscussArea,
                    expression: "isDiscussArea"
                }],
                ref: "discuss",
                attrs: {
                    AskCourseId: e.AskCourseId,
                    AskQuestionId: e.AskQuestionId,
                    contentType: e.contentType
                }
            }), i("CollectLayer", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isCollect,
                    expression: "isCollect"
                }],
                ref: "collect",
                attrs: {
                    AskCourseId: e.AskCourseId,
                    AskQuestionId: e.AskQuestionId,
                    contentType: e.contentType
                }
            }), i("ShareLayer", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isShareLayer,
                    expression: "isShareLayer"
                }],
                ref: "share",
                attrs: {
                    askShareDTOList: e.askShareDTOList
                }
            }), i("OneselfReview", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isOR,
                    expression: "isOR"
                }],
                ref: "review"
            }), e.spinning ? i("Load") : e._e()], 1)
        }
          , s = []
          , n = i(70614)
          , r = i(34665)
          , o = i(1496)
          , l = i(68354)
          , d = i(29260)
          , u = i.n(d)
          , c = {
            name: "courseView",
            props: ["barWidth"],
            components: {
                swiper: n.swiper,
                swiperSlide: n.swiperSlide,
                Question: ()=>i.e(542).then(i.bind(i, 75535)),
                CropperBox: ()=>Promise.all([i.e(996), i.e(414)]).then(i.bind(i, 4414)),
                DiscussArea: ()=>Promise.all([i.e(580), i.e(879)]).then(i.bind(i, 19580)),
                CollectLayer: ()=>i.e(179).then(i.bind(i, 43179)),
                ShareLayer: ()=>i.e(69).then(i.bind(i, 68069)),
                OneselfReview: ()=>Promise.all([i.e(775), i.e(519)]).then(i.bind(i, 14775)),
                CourseFilter: ()=>i.e(329).then(i.bind(i, 23329)),
                Load: ()=>i.e(97).then(i.bind(i, 43286)),
                VueQr: u()
            },
            data() {
                return {
                    showModal: !1,
                    filter: {
                        courseText: !1,
                        point: !1,
                        word: !1,
                        ppt: !1,
                        pdf: !1,
                        sounds: !1,
                        video: !1,
                        handle: !1,
                        single: !1,
                        multiSelect: !1,
                        filling: !1,
                        shortAnswer: !1,
                        mustDoing: !1
                    },
                    swiperOption: {
                        allowTouchMove: !1,
                        slidesPerView: 3,
                        spaceBetween: 5,
                        on: {
                            tap: ()=>{
                                this.showTags = !1,
                                this.showAnswerTime = !1,
                                this.showAnswerCard = !1,
                                this.isSelect = !1,
                                this.setCourseId(this.courseList[this.swiper.clickedIndex].id),
                                localStorage.setItem("courseName",this.courseList[this.swiper.clickedIndex].courseName);
                                localStorage.setItem("courseId",this.courseList[this.swiper.clickedIndex].id);
                                localStorage.setItem("catalogId",this.courseList[this.swiper.clickedIndex].catalogId);
                                this.getCourseInfoData(this.courseList[this.swiper.clickedIndex].id),
                                this.getCourseContentData(this.courseList[this.swiper.clickedIndex].id),
                                this.onlyShowErrQues = !1;
                                for (let e in this.filter)
                                    this.filter[e] = !1;
                                (0,
                                l.Md)()
                            }
                        }
                    },
                    deadline: 0,
                    selectId: "",
                    onlyShowErrQues: !1,
                    showAnswerCard: !1,
                    alreadyAnswerData: [],
                    statisticsData: [],
                    studentLibs: [],
                    showTags: !1,
                    showAnswerTime: !1,
                    isEditImg: !1,
                    questuinIndex: 0,
                    isDiscussArea: !1,
                    AskCourseId: 0,
                    AskQuestionId: 0,
                    isCollect: !1,
                    contentType: 0,
                    isShareLayer: !1,
                    askShareDTOList: [],
                    isOR: !1,
                    isSubmit: !1,
                    courseIds: [],
                    audio: null,
                    playAudio: {
                        src: "",
                        play: !1,
                        index: -1
                    },
                    playid: -1,
                    timer: null,
                    secondsText: "",
                    surplussecond: 0,
                    lantuid: {
                        timeid: 0,
                        tagid: 0
                    },
                    studentCourseQuestions: [],
                    isSelect: !1,
                    ErrorContent: [],
                    source: "pc",
                    qrcodeText: "",
                    CourseShareData: [],
                    spinning: !1
                }
            },
            computed: {
                swiper() {
                    return this.$refs.mySwiper.swiper
                },
                ...(0,
                r.rn)({
                    courseId: e=>e.c.courseId,
                    courseList: e=>e.c.courseList,
                    courseSelectedData() {
                        return this.courseList.find((e=>e.id === this.courseId)) || {}
                    },
                    courseInfo(e) {
                        return this.GetCourseInfo(e)
                    },
                    courseContentData(e) {
                        return this.showAnswerCard = !1,
                        this.selectId = -1,
                        e.c.courseContentData
                    },
                    titleIds: e=>e.c.titleIds
                }),
                ...(0,
                r.Se)("c", ["courseSelectedData", "courseSelectedItemData"]),
                questionCounts() {
                    return this.courseContentData.filter((e=>2 === e.contentType)).length
                },
                isFilter() {
                    return Object.values(this.filter).some((e=>e))
                }
            },
            watch: {
                "$route.query.catalogId": {
                    immediate: !0,
                    handler(e) {
                        let t = this;
                        t.keyid != e && (t.keyid = e,
                        this.getCourseListData(e).then((e => {
                            // (0,
                            // d.Md)(),
                            t.$bus.emit("CancelSelect", "0"),
                            t.$bus.emit("PausePlay")
                        }
                        )))
                    }
                },
                courseId(e) {
                    "" !== e && (this.deadline = new Date(this.courseSelectedData.courseRecycleTime).getTime(),
                    this.getAlreadyAnswer(this.courseId),
                    (0,
                    o.YL)(this.courseId).then((e=>{
                        this.statisticsData = e.extra,
                        this.showAnswerTime = !1,
                        this.showTags = !1,
                        this.lantuid = {
                            timeid: 0,
                            tagid: 0
                        },
                        this.studentLibs = e.extra.studentLibs.sort(((e,t)=>e.libType !== t.libType ? e.libType - t.libType : e.id - t.id)),
                        this.studentCourseQuestions = e.extra.studentCourseQuestions
                    }
                    )),
                    this.GetCourseShareData())
                }
            },
            mounted() {
                let e = this;
                e.source = sessionStorage.getItem("source");
                let t = localStorage.getItem("reddot");
                setTimeout((function() {
                    e.courseIds = (null == t || "undefined" == typeof t ? [] : JSON.parse(t).courseIds),
                    e.showAnswerTime = !1
                }
                ), 500),
                e.$bus.on("changeReddot", (t=>{
                    e.courseIds = t.courseIds
                }
                )),
                e.$bus.on("CancelSelect", (t=>{
                    e.isSelect = !1
                }
                )),
                e.$bus.on("PausePlay", (t=>{
                    e.getAudioList()
                }
                ))
            },
            methods: {
                ...(0,
                r.OI)("c", ["setCourseId"]),
                ...(0,
                r.nv)("c", ["getCourseInfoData", "getCourseContentData"]),
                IsNullOrEmpty(e) {
                    return (0,
                    l.lF)(e)
                },
                getCourseList(e) {
                    return e
                },
                GetCourseShareData() {
                    let e = this;
                    (0,
                    o.eD)(e.courseId).then((e=>{
                        this.CourseShareData = e.extra
                    }
                    ))
                },
                getCourseListData(t) {
                    let e = window.store;
                    return new Promise((n=>{
                        (0,
                        o.tS)(t).then((t=>{
                            e("setCourseList", t.extra),
                            t.extra.length > 0 ? (localStorage.setItem("courseName",t.extra[0]["courseName"]),localStorage.setItem("courseId",t.extra[0].id),e("setCourseId", t.extra[0].id),
                            (0,
                            o.zf)(t.extra[0].id).then((t=>{
                                e("courseInfo", t.extra)
                            }
                            )),
                            (0,
                            o.lE)(t.extra[0].id).then((t=>{
                                let questions=[];
                                let photoQuestions = [];
                                let answers="";
                                let chosenAnswers="";
                                for(let i of t.extra){
                                    if(i.contentType==2){
                                        if(i.content.chooseZoneCounts>1){
                                            for(let j of i.content.childList){
                                                if(j.answerCard != null) {
                                                    questions.push(j.id);
                                                    chosenAnswers+="<p>题号"+j.questionNumber+j.answer+"</p>"+j.questionAnalysis+"<br>"
                                                }
                                                else {
                                                    photoQuestions.push(j.id);
                                                    answers+="<p>题号"+j.questionNumber+"</p>"+j.answer+j.questionAnalysis+"<br>";
                                                };
                                            }
                                        }else if(i.content.answerCard != null) {
                                            questions.push(i.content.id);
                                            chosenAnswers+="<p>题号"+i.content.questionNumber+i.content.answer+"</p>"+i.content.questionAnalysis+"<br>"
                                        }
                                        else{
                                            photoQuestions.push(i.content.id);
                                            answers+="<p>题号"+i.content.questionNumber+"</p>"+i.content.answer+i.content.questionAnalysis+"<br>"
                                        }
                                    }
                                }
                                document.querySelector('.submitAnswer').style.position = "fixed";
                                document.querySelector('.submitButton').style.display = "none";
                                document.querySelector('.top').style.display = "flex";
                                if(questions.length==0 && photoQuestions.length==0){
                                    let div = document.querySelector('.submitAnswer');
                                    div.style.display = 'none';
                                    div = document.querySelector('.blank');
                                    div.style.display = 'none';
                                    div = document.querySelector('.hideButton')
                                    div.style.display='block'
                                }else{
                                    let div = document.querySelector('.submitAnswer');
                                    div.style.display = 'block';
                                    div = document.querySelector('.blank');
                                    div.style.display = 'block';
                                    div = document.querySelector('.hideButton')
                                    div.style.display='none'
                                }
                                localStorage.setItem("questions",questions);
                                localStorage.removeItem("newQuestions")
                                const div = document.querySelector('.choiceStatus');
                                div.textContent = "";
                                if(questions.length == 0){
                                    document.querySelector('.submit.ant-btn').style.display = 'none';
                                    document.querySelector('.answer').style.display = 'none';
                                    document.querySelector('.txtBox').style.display = 'none';
                                    document.querySelector('.blank').style.height = "120px"
                                }else{
                                    document.querySelector('.submit.ant-btn').style.display = 'block';
                                    let answerInput = document.querySelector('.answer')
                                    answerInput.placeholder="题目数量："+questions.length;
                                    answerInput.value = null;
                                    answerInput.style.display = 'block';
                                    document.querySelector('.txtBox').style.display = 'block';
                                    document.querySelector('.blank').style.height = "160px"
                                }
                                localStorage.setItem("photoQuestions",photoQuestions);
                                localStorage.setItem("answers",answers);
                                localStorage.setItem("chosenAnswers",chosenAnswers);
                                e("setCourseContent", t.extra),
                                e("setTitleIds", t.extra)
                            }
                            ))) : (e("setCourseId", ""),
                            e("courseInfo", []),
                            e("setCourseContent", [])),
                            n(t)
                        }
                        ))
                    }
                    ))
                },
                getQRCode() {
                    let e = this;
                    if ("pc" != e.source)
                        return;
                    if ((0,
                    l.lF)(e.courseId))
                        return;
                    let t = JSON.parse(sessionStorage.getItem("userInfo"));
                    t.id = this.courseId,
                    t.type = "1",
                    t.name = e.courseList.find((t=>t.id == e.courseId)).courseName,
                    t.catalogId = e.courseSelectedData.catalogId;
                    let i = window.location.origin + "/stu/#/mobile?data=" + encodeURI(encodeURI(JSON.stringify(t))) + "&time=" + (new Date).getTime();
                    e.qrcodeText = i
                },
                slidePrev() {
                    this.swiper.isBeginning ? this.$message.warning("已经是第一个课程了！") : (this.selectId = -1,
                    this.showAnswerCard = !1,
                    this.isSelect = !1,
                    this.swiper.slidePrev())
                },
                slideNext() {
                    this.swiper.isEnd ? this.$message.warning("已经是最后一个课程了！") : (this.selectId = -1,
                    this.showAnswerCard = !1,
                    this.isSelect = !1,
                    this.swiper.slideNext())
                },
                getCourseFilter(e, t) {
                    this.isSelect = t,
                    (0,
                    o.mu)(e).then((e=>{
                        this.$store.commit("c/setCourseContent", e.extra),
                        this.$bus.emit("setAnswerData", "1"),
                        this.onlyShowErrQues = !1,
                        this.showModal = !1,
                        this.$store.commit("c/clearTitleIds")
                    }
                    ))
                },
                handleCancel() {
                    this.$store.dispatch("c/getCourseContentData", this.courseId);
                    for (let e in this.filter)
                        this.filter[e] = !1;
                    this.onlyShowErrQues = !1,
                    this.showModal = !1,
                    this.$store.commit("c/clearTitleIds"),
                    this.$bus.emit("setAnswerData", "1")
                },
                onChange(e, t) {
                    this.filter[t] = e.target.checked
                },
                OpenCourseFilterWin() {
                    let e = this;
                    e.showModal = !0,
                    e.$refs.filter.getCourseEntities()
                },
                async submitAll(){
                    let answer = document.querySelector('.answer').value.split(" ");
                    let questions = localStorage.getItem("questions").split(",");
                    let promises = [];
                    let courseId = localStorage.getItem("courseId");
                    let newQuestion = localStorage.getItem("newQuestions")==null?{}:JSON.parse(localStorage.getItem("newQuestions"));

                    if(answer.length!==questions.length) alert("题目数量不对");
                    else{
                        for(let i=0;i<questions.length;i++){
                            if(answer[i]=="1" || newQuestion[questions[i]]==answer[i].toUpperCase().split('').join(',')) continue;
                            let url = '/exam/api/student/course/entity/'+courseId+'/question/'+questions[i];
                            let data = {
                                courseId: courseId,
                                questionId: questions[i],
                                studentAnswer: answer[i].toUpperCase().split('').join(','),
                                resubmitTag: 0,
                                abandonTag: 0
                            }

                            promises.push(fetch(url, {
                                method: 'POST', // 指定请求方法为POST
                                headers: {
                                    'Content-Type': 'application/json' // 告诉服务器请求体是JSON格式
                                },
                                body: JSON.stringify(data) // 将数据对象转换为JSON字符串
                            }).then((response)=>{
                                if(response.status!=200){
                                    setTimeout(null, 1000);
                                    fetch(url, {
                                    method: 'POST', // 指定请求方法为POST
                                    headers: {
                                        'Content-Type': 'application/json' // 告诉服务器请求体是JSON格式
                                    },
                                    body: JSON.stringify(data) // 将数据对象转换为JSON字符串
                                }).then(((response)=>{

                                    if(response.status!=200){
                                        setTimeout(null, 1000);
                                        fetch(url, {
                                        method: 'POST', // 指定请求方法为POST
                                        headers: {
                                            'Content-Type': 'application/json' // 告诉服务器请求体是JSON格式
                                        },
                                        body: JSON.stringify(data) // 将数据对象转换为JSON字符串
                                    }).then(((response)=>{

                                        if(response.status!=200){
                                            alert("题号"+data.questionId+"提交失败。尝试重新提交");
                                        }else {
                                            this.$emit("getAlreadyAnswer", courseId),
                                            this.giveUpStatus = !1;
                                        }

                            }))
                                    }else {
                                        this.$emit("getAlreadyAnswer", courseId),
                                        this.giveUpStatus = !1;
                                    }

                            }))
                                }
                                else {
                                    this.$emit("getAlreadyAnswer", courseId),
                                        this.giveUpStatus = !1;
                                }

                            }))
                        }
                        await Promise.all(promises);
                        let url = "/exam/api/student/course/entity/"+courseId+"/question";
                        let xhr = new XMLHttpRequest();
                        xhr.open('GET', url, false);
                        xhr.send(null);
                        if (xhr.status === 200) {
                            let response = JSON.parse(xhr.responseText);
                            this.alreadyAnswerData = response.extra;
                            const newQuestion = response.extra.reduce((acc, item) => {
                              acc[item.questionId] = item.studentAnswer;
                              return acc;
                          }, {});
                            localStorage.setItem("newQuestions",JSON.stringify(newQuestion))
                        }
                        alert("提交完成，点击手动提交以获取答案");
                    }

                },
                getAnswers(){
                    let questions = new Set(localStorage.getItem("photoQuestions").split(","));
                    let courseId = localStorage.getItem("courseId");
                    const options = {
                                method: 'POST', // 设置请求方法为POST
                                headers: {
                                    'Content-Type': 'application/json' // 设置请求头部，表明发送的内容类型为JSON
                                },
                                body: JSON.stringify({courseId:courseId}) // 将JavaScript对象转换为字符串，作为请求体
                            };
                    fetch("/exam/api/student/course/entity/"+courseId+"/submit",options);
                    fetch("/exam/api/student/course/entity/"+courseId+"/question")
                      .then(response => {
                        return response.json(); // 解析 JSON 数据
                      })
                      .then(data => {
                          let cache = [];
                          for(let i of data.extra){
                            cache.push(i.questionId.toString);
                            if(!(questions.has(i.questionId.toString())) || i.attachments.length>0) continue;
                            let url="/exam/api/student/course/entity/"+courseId+"/question/"+i.questionId;
                            let json = {courseId: courseId, questionId: i.questionId, studentAnswer:"", resubmitTag: 0, abandonTag: 1};
                            const options = {
                                method: 'POST', // 设置请求方法为POST
                                headers: {
                                    'Content-Type': 'application/json' // 设置请求头部，表明发送的内容类型为JSON
                                },
                                body: JSON.stringify(json) // 将JavaScript对象转换为字符串，作为请求体
                            };
                            fetch(url, options);

                            }
                          questions = [...questions].filter(item => !new Set(cache).has(item));
                          for(let i of questions){
                              let url="/exam/api/student/course/entity/"+courseId+"/question/"+i;
                            let json = {courseId: courseId, questionId: i, studentAnswer:"", resubmitTag: 0, abandonTag: 0};
                            const options = {
                                method: 'POST', // 设置请求方法为POST
                                headers: {
                                    'Content-Type': 'application/json' // 设置请求头部，表明发送的内容类型为JSON
                                },
                                body: JSON.stringify(json) // 将JavaScript对象转换为字符串，作为请求体
                            };
                            fetch(url, options);
                          }
                          let options = {
                            method: 'POST', // 设置请求方法为POST
                            headers: {
                                'Content-Type': 'application/json' // 设置请求头部，表明发送的内容类型为JSON
                            },
                            body: JSON.stringify({courseId: courseId, courseBeginTime: "1970-01-01 08:00:00"}) // 将JavaScript对象转换为字符串，作为请求体
                          };

                           let e = this;
                        e.isSubmit = !0,
                        e.showAnswerCard = !1,
                        e.selectId = -1,
                        (0,
                        o.vn)({
                            courseId: e.courseId,
                            courseBeginTime: e.courseSelectedData.createTime
                        }).then((t=>{
                            t.extra && (e.getCourseInfoData(e.courseId),
                            e.getAlreadyAnswer(e.courseId),
                            (0,
                            o.YL)(e.courseId).then((t=>{
                                e.statisticsData = t.extra,
                                e.studentLibs = t.extra.studentLibs
                            }
                            )),
                            e.clearReddot(e.courseId))
                        }
                        ))
                      })
                    window.open("/downloadAnswers?html="+encodeURI(encodeURI(localStorage.getItem("answers").replace(/&nbsp;/g, '')))+"&name="+encodeURI(encodeURI(localStorage.getItem("courseName"))))
                },
                getChosenAnswers(){
                    window.open("/downloadAnswers?html="+encodeURI(encodeURI(localStorage.getItem("chosenAnswers").replace(/&nbsp;/g, '')))+"&name="+encodeURI(encodeURI(localStorage.getItem("courseName"))))
                },
                downloadPage(){
                    window.open("/getWebFile?url="+localStorage.getItem('matchedURL')+"&courseName="+encodeURI(encodeURI(localStorage.getItem("courseName"))),'_blank');
                },
                getChoiceStatus(){
                    let questions=localStorage.getItem("questions").split(",");
                    fetch("/exam/api/student/course/entity/"+localStorage.getItem("courseId")+"/question")
                        .then(response => {
                            return response.json(); // 解析JSON数据并返回另一个Promise
                        })
                        .then(data => {
                            let choiceStatus="";
                            const orderMap = new Map();
                            questions.forEach((id, index) => orderMap.set(parseInt(id), index));

                            // 过滤出存在于ids数组中的对象，并存储它们及其在ids中的索引
                            const filtered = [];
                            data.extra.forEach(obj => {
                                if (orderMap.has(obj.questionId)) {
                                    filtered.push({
                                        index: orderMap.get(obj.questionId),
                                        obj
                                    });
                                }
                            });

                            // 按照原始ids数组的顺序排序
                            filtered.sort((a, b) => a.index - b.index);
                            // 提取排序后的对象数组
                            let questionList = filtered.map(item => item.obj);
                            let cnt = 0;
                            for(let i of questionList){
                                choiceStatus+="题号"+i.questionNumber+":"+(i.studentAnswer==null?"未作答":(i.judgeTag===1?"正确":(i.judgeTag===0?(cnt++,"错误"):(cnt++,"半对"))))+"；";
                            };
                            choiceStatus+="错题数量："+cnt;
                            const div = document.querySelector('.choiceStatus');
                            div.textContent = choiceStatus;
                            alert(choiceStatus);
                        })
                },
                updateTopField(){
                    // 选择class为'submitAnswer'的元素
                        const element = document.querySelector('.submitAnswer');

                        // 获取当前元素的计算样式
                        const style = window.getComputedStyle(element);

                        // 检查position属性是否为'fixed'
                        if (style.display === 'block') {
                            // 如果是'fixed'，则移除这个属性（将其设置为静态定位）
                            element.style.display = 'none';
                            const submitButton = document.querySelector('.submitButton');
                            submitButton.style.display = "flex";
                            const top = document.querySelector('.top');
                            top.style.display = "none";
                            const blankDiv = document.querySelector('.blank');
                            blankDiv.style.height = '35px';
                        } else {
                            // 如果不是'fixed'，则设置为'fixed'
                            element.style.display = 'block';
                            const submitButton = document.querySelector('.submitButton');
                            submitButton.style.display = "none";
                            const top = document.querySelector('.top');
                            top.style.display = "flex";
                            const blankDiv = document.querySelector('.blank');
                            blankDiv.style.height = localStorage.getItem("questions").length==0 ? '120px':'160px';
                        }
                },
                doStarCourse(){
                    let starCourse = (localStorage.getItem("starCourse") == null ? [] : JSON.parse(localStorage.getItem("starCourse")));
                    let name = localStorage.getItem("courseName");
                    const hash = window.location.hash;
                    const [hashPath, hashQuery] = hash.split('?');
                    const hashParams = new URLSearchParams(hashQuery);
                    let id = hashParams.get('catalogId');
                    let courseInfo = {name:name,id:id};
                    if(! starCourse.some(item =>
                          item.name === courseInfo.name && item.id === courseInfo.id
                        )) starCourse.push(courseInfo);
                    else starCourse=starCourse.filter(item => item.name !== courseInfo.name || item.id !== courseInfo.id);
                    localStorage.setItem("starCourse",JSON.stringify(starCourse));
                },
                ChoseCourseFilterWin(e) {
                    this.showModal = !1,
                    0 == e && (this.isSelect = !1,
                    this.handleCancel())
                },
                seeErrorQuestion() {
                    let e = this.alreadyAnswerData.filter((e=>1 != e.judgeTag)).map((e=>e.questionId));
                    if (this.onlyShowErrQues)
                        this.$store.dispatch("c/getCourseContentData", this.courseId),
                        this.onlyShowErrQues = !1;
                    else {
                        for (let e in this.filter)
                            this.filter[e] = !1;
                        this.onlyShowErrQues = !1,
                        this.showModal = !1,
                        this.$store.commit("c/setCourseContent", this.courseContentData.filter((t=>e.includes(t.content.id)))),
                        this.onlyShowErrQues = !0
                    }
                    this.$store.commit("c/clearTitleIds")
                },
                getBtnStatus(e, t) {
                    let i = this;
                    if (0 == t.length)
                        return !1;
                    if (1 == i.courseInfo.mappingStatus) {
                        let e = 0
                          , a = 0;
                        return i.courseContentData.forEach((t=>{
                            "undefined" != typeof t.content.childList && (e += 0 == t.content.childList.length ? 1 : t.content.childList.length)
                        }
                        )),
                        t.forEach((e=>{
                            (e.questionId != e.firstQuestionId && !e.isDraft || 1 == e.readOverTag) && (a += 1)
                        }
                        )),
                        a == e
                    }
                    {
                        let e = 0;
                        return i.courseContentData.forEach((t=>{
                            [0, 1].includes(t.content.questionType) ? e += null == t.content.childList || 0 == t.content.childList.length ? 1 : t.content.childList.length : e += 1
                        }
                        )),
                        e == t.length
                    }
                },
                onFinish() {
                    this.courseInfo.courseId == this.courseId && (this.showAnswerCard = !1,
                    this.isSelect = !1,
                    this.selectId = -1,
                    this.submitCourseData())
                },
                getCourseTime(e) {
                    return 0 == Math.floor(e / 60) ? e % 60 : Math.floor(e / 60) + "小时" + e % 60
                },
                submitCourseData() {
                    let e = this;
                    this.isSubmit && 0 ? this.$message.warning("数据正在提交中") : (e.isSubmit = !0,
                    e.selectId = -1,
                    e.showAnswerCard = !1,
                    e.isSelect = !1,
                    (0,
                    o.pU)({
                        courseId: e.courseId
                    }).then((t=>{
                        0 == t.code ? (e.getCourseInfoData(e.courseId),
                        e.getAlreadyAnswer(e.courseId),
                        (0,
                        o.YL)(e.courseId).then((t=>{
                            e.statisticsData = t.extra,
                            e.studentLibs = t.extra.studentLibs
                        }
                        )),
                        e.clearReddot(e.courseId)) : e.$message.warning(t.message)
                    }
                    )))
                },
                submitCourseAgainData() {
                    let e = this;
                    e.isSubmit && 0 ? e.$message.warning("数据正在提交中") : (e.isSubmit = !0,
                    e.showAnswerCard = !1,
                    e.selectId = -1,
                    (0,
                    o.vn)({
                        courseId: e.courseId,
                        courseBeginTime: e.courseSelectedData.createTime
                    }).then((t=>{
                        t.extra && (e.getCourseInfoData(e.courseId),
                        e.getAlreadyAnswer(e.courseId),
                        (0,
                        o.YL)(e.courseId).then((t=>{
                            e.statisticsData = t.extra,
                            e.studentLibs = t.extra.studentLibs
                        }
                        )),
                        e.clearReddot(e.courseId))
                    }
                    )))
                },
                getAlreadyAnswer(e, t) {
                    let i = this;
                    i.spinning = !0,
                    (0,
                    o.O2)(e).then((e=>{
                        let a = Object.keys(sessionStorage);
                        if (a.length > 0)
                            for (let t = 0; t < a.length; t++)
                                (a[t].indexOf("ItemImg") >= 0 || a[t].indexOf("Score-") >= 0) && sessionStorage.removeItem(a[t]);
                        i.alreadyAnswerData = e.extra,
                        i.isSubmit = !1,
                        "function" == typeof t && t(i.alreadyAnswerData),
                        i.spinning = !1
                    }
                    )),
                    i.getErrorContentList(e)
                },
                getQuesItem(e) {
                    return this.alreadyAnswerData.find((t=>t.questionId == e))
                },
                CropperFinish(e) {
                    let t = this;
                    t.closeCropper();
                    let i = (0,
                    l.Ll)(e, (0,
                    l.wY)() + ".jpg")
                      , a = new Image;
                    function s(i) {
                        t.$refs.question[t.questuinIndex].IsUploadImg(!0),
                        (0,
                        o.ws)({
                            uploadFile: i
                        }).then((i=>{
                            t.$refs.question[t.questuinIndex].CropperFinish(e, i.extra)
                        }
                        ))
                    }
                    a.src = e,
                    a.onload = function() {
                        i.size / 1024 > 500 ? (0,
                        l.sU)(i, Math.floor(a.width * Math.sqrt(500 / (i.size / 1024)))).then((e=>{
                            s((0,
                            l.hl)(e, (0,
                            l.wY)() + ".jpg"))
                        }
                        )) : s(i)
                    }
                },
                showimg(e, t, i) {
                    this.isEditImg = !0,
                    this.questuinIndex = t,
                    this.$refs.cropper.init(e, i)
                },
                closeCropper() {
                    this.$refs.question[this.questuinIndex].closeCropper(),
                    this.isEditImg = !1
                },
                PlayAudio(e, t) {
                    let i = this;
                    i.audio = null == i.audio ? document.createElement("audio") : i.audio,
                    document.body.appendChild(i.audio),
                    i.playAudio.index >= 0 && i.playid != e.id && i.$refs.question[i.playAudio.index].setPlayid(-1),
                    i.audio.style.display = "none",
                    i.playAudio.index = t,
                    i.playAudio.src.indexOf(e.attachmentLinkAddress) >= 0 ? i.playAudio.play ? (i.audio.pause(),
                    i.playAudio.play = !1,
                    i.playid = -1,
                    i.$refs.question[i.playAudio.index].setPlayid(-1)) : (i.audio.play(),
                    i.playAudio.play = !0,
                    i.playid = e.id,
                    i.$refs.question[i.playAudio.index].setPlayid(i.playid)) : (i.audio.src = "/exam" + e.attachmentLinkAddress,
                    i.audio.play(),
                    i.playid = e.id,
                    i.playAudio.play = !0,
                    i.playAudio.src = i.audio.src,
                    i.$refs.question[i.playAudio.index].setPlayid(i.playid)),
                    i.audio.addEventListener("ended", (function() {
                        i.audio.src = "",
                        i.playid = -1,
                        i.$refs.question[i.playAudio.index].setPlayid(i.playid)
                    }
                    ), !1)
                },
                showIndexDiscussArea(e, t, i, a) {
                    let s = this
                      , n = document.getElementsByTagName("audio");
                    for (let r = 0; r < n.length; r++)
                        n[r].pause();
                    return 2 == t && 0 == s.courseInfo.mappingStatus ? (s.$message.warning("课程未提交，不可以进行提问"),
                    void s.$refs.question[a].IsShowDiscussArea(!1)) : 2 == t && 1 == s.courseInfo.mappingStatus && 0 == i.length ? (s.$message.warning("本题未作答，不可以进行提问"),
                    void s.$refs.question[a].IsShowDiscussArea(!1)) : (s.questuinIndex = a,
                    s.contentType = t,
                    s.AskCourseId = s.courseId,
                    s.AskQuestionId = e.id,
                    s.isDiscussArea = !0,
                    void s.$refs.discuss.GetAskList(0))
                },
                GetCourseInfo(e) {
                    let t = this
                      , i = e.c.courseInfo;
                    return (0,
                    o.y$)().then((e=>{
                        localStorage.setItem("reddot", JSON.stringify(e.extra)),
                        t.$bus.emit("changeReddot", e.extra)
                    }
                    )),
                    t.getErrorContentList(e),
                    t.getQRCode(),
                    i
                },
                countdown(e, t) {
                    if (null == t)
                        return;
                    let i = this;
                    e = e.replace(/\-/g, "/"),
                    t = t.replace(/\-/g, "/");
                    var a = new Date(e)
                      , s = new Date(t);
                    i.surplussecond = parseInt((s.getTime() - a.getTime()) / parseInt(1e3)),
                    i.surplussecond <= 0 || (clearInterval(i.timer),
                    i.timer = setInterval((()=>{
                        if (i.surplussecond > 0) {
                            var e = Math.floor(i.surplussecond / 60 / 60 % 24)
                              , t = Math.floor(i.surplussecond / 60 % 60)
                              , a = Math.floor(i.surplussecond % 60);
                            i.secondsText = (0,
                            l.jJ)(e) + ":" + (0,
                            l.jJ)(t) + ":" + (0,
                            l.jJ)(a),
                            i.surplussecond--
                        }
                    }
                    ), 1e3))
                },
                closeDisussArea(e) {
                    let t = this;
                    try {
                        t.courseContentData.map((i=>{
                            i.content.id === t.AskQuestionId && (i.content.asked = !!e || t.data.asked,
                            i.content.read = !e)
                        }
                        )),
                        t.$store.commit("c/setCourseContent", t.courseContentData),
                        t.isDiscussArea = !1,
                        t.$refs.question[t.questuinIndex].IsShowDiscussArea(!1)
                    } catch (i) {
                        t.isDiscussArea = !1,
                        t.$refs.question[t.questuinIndex].IsShowDiscussArea(!1)
                    }
                },
                showCollectLayer(e, t, i, a) {
                    let s = this;
                    return 2 == t && 0 == s.courseInfo.mappingStatus ? (s.$message.warning("课程未提交，不可收藏试题"),
                    void s.$refs.question[a].IsShowCollect(!1)) : 2 == t && 1 == s.courseInfo.mappingStatus && 0 == i.length ? (s.$message.warning("本题未作答，不可以收藏~"),
                    void s.$refs.question[a].IsShowCollect(!1)) : (s.questuinIndex = a,
                    s.contentType = t,
                    s.AskCourseId = s.courseId,
                    s.AskQuestionId = e.id,
                    s.isCollect = !0,
                    void (0,
                    o.$Q)({
                        sourceId: e.id,
                        sourceType: t,
                        courseId: s.courseId,
                        type: 0
                    }).then((e=>{
                        s.$refs.collect.GetCollectList(null == e.extra ? [] : e.extra.tagList, 0)
                    }
                    )))
                },
                closeCollectLayer() {
                    let e = this;
                    e.isCollect = !1,
                    e.$refs.question[e.questuinIndex].IsShowCollect(!1)
                },
                choseShareWin() {
                    this.isShareLayer = !1
                },
                shareWindos(e) {
                    let t = this;
                    t.isShareLayer = !0,
                    t.$refs.share.ShareDTOList(e)
                },
                OneselfReviewWindows(e, t, i, a, s, n, r, o) {
                    let l = this;
                    l.$refs.review.SetORData(e, t, i, a, s, 0, 1, 0, n, r, o),
                    l.isOR = !0
                },
                CloseOneselfReviewWindows(e, t, i, a) {
                    if (this.isOR = !1,
                    !a)
                        return;
                    let s = sessionStorage.getItem("selfReadOverSwitch");
                    1 == s && this.$refs.question[e].setImgStatus(t),
                    setTimeout((()=>{
                        this.getAlreadyAnswer(this.courseId)
                    }
                    ), 500)
                },
                getErrorContentList(e) {
                    if(sessionStorage.getItem("course_userInfo") == null){
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', '/exam/api/user/info', false); // false表示同步请求
                        xhr.send();
                        if (xhr.status === 200) {
                          var data = JSON.parse(xhr.responseText);
                          let info = {
                                "userId": data["extra"]["id"],
                                "userName": data["extra"]["userName"],
                                "mobile": data["extra"]["phoneNumber"],
                                "subjectId": data["extra"]["subjectId"],
                                "sex": data["extra"]["sex"]
                            }
                            sessionStorage.setItem("course_userInfo",JSON.stringify(info));
                        }
                    }
                    let t = this;
                    // (0,
                    // o.vz)({
                    //     studentId: JSON.parse(sessionStorage.getItem("course_userInfo")).userId,
                    //     courseId: e
                    // }).then((e=>{
                    //     t.ErrorContent = e.extra
                    // }
                    // ))
                },
                clearReddot(e) {
                    let t = this
                      , i = t.courseIds.findIndex((t=>t == e));
                    i >= 0 && (t.courseIds.splice(i, 1),
                    (0,
                    o.y$)().then((e=>{
                        localStorage.setItem("reddot", JSON.stringify(e.extra)),
                        t.$bus.emit("changeReddot", e.extra)
                    }
                    )))
                },
                getAudioList() {
                    let e = document.getElementsByTagName("audio");
                    this.$nextTick((()=>{
                        for (let t = 0; t < e.length; t++)
                            e[t].pause()
                    }
                    )),
                    this.playAudio.index >= 0 && this.$refs.question[this.playAudio.index].PausePlay()
                },
                getStudentAnswer(e) {
                    return this.alreadyAnswerData.find((t=>t.questionId == e))
                },
                CourseAllDone() {
                    let e = this;
                    const t = e.courseContentData.filter((e=>2 === e.contentType))
                      , i = e.alreadyAnswerData;
                    let a = !1;
                    if (0 == i.length)
                        return !0;
                    if (0 == t.length)
                        return !1;
                    for (let s = 0; s < t.length; s++) {
                        let e = t[s].content
                          , n = i.find((t=>t.questionId == e.id));
                        if (0 == e.childList.length) {
                            if (null == n) {
                                a = !0;
                                break
                            }
                            if (n.isDraft) {
                                a = !0;
                                break
                            }
                        } else if (e.childList.length == i.filter((t=>t.firstQuestionId == e.id && t.firstQuestionId != t.questionId && !t.isDraft))) {
                            a = !0;
                            break
                        }
                    }
                    return a
                }
            }
        }
          , p = c
          , h = i(70713)
          , f = (0,
        h.Z)(p, a, s, !1, null, "10c82b35", null)
          , g = f.exports
    },
    99204: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            default: function() {
                return g
            }
        });
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "container",
                class: {
                    emptyHeight: 0 === e.paperList.length
                }
            }, [i("div", {
                staticClass: "tabs"
            }, [i("div", {
                staticClass: "swiper_box"
            }, [e.paperList.length > 3 ? i("a-icon", {
                staticClass: "left-icon",
                staticStyle: {
                    "margin-right": "5px"
                },
                attrs: {
                    type: "left"
                },
                on: {
                    click: e.slidePrev
                }
            }) : e._e(), i("swiper", {
                ref: "mySwiper",
                staticClass: "swiper",
                attrs: {
                    options: e.swiperOption
                }
            }, e._l(e.paperList, (function(t) {
                return i("swiper-slide", {
                    key: t.id,
                    class: {
                        sideActive: e.paperId === t.id
                    }
                }, [i("div", {
                    staticClass: "courseName"
                }, [i("a-tooltip", {
                    attrs: {
                        placement: "bottomLeft",
                        title: "" + t.paperName
                    }
                }, [i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.paperIds.includes(t.id),
                        expression: "paperIds.includes(o.id)"
                    }],
                    staticClass: "red-print"
                }), e._v(e._s(t.paperName) + " ")])], 1)])
            }
            )), 1), e.paperList.length > 3 ? i("a-icon", {
                staticClass: "right-icon",
                staticStyle: {
                    "margin-left": "5px"
                },
                attrs: {
                    type: "right"
                },
                on: {
                    click: e.slideNext
                }
            }) : e._e()], 1)]), i("div", {
                staticClass: "content"
            }, [e.paperList.length > 0 ? i("div", [i("div", {
                staticClass: "top",
                style: {
                    width: e.barWidth + "px"
                }
            }, [i("div",{
                staticClass: "txtPaper",
                staticStyle:{
                    "margin-top":"10px",
                },
                domProps: {
                    innerHTML:"<p>按网页题目顺序输入全部选择题答案，以空格分隔，不提交的题输入1</p>"
                }
            }),i("div",{
                staticStyle:{
                    "display":"flex"
                }
            },[i("input",{
                staticClass: "answerPaper",
                staticStyle:{
                    "width": "30%",
                    "margin-right": "10px",
                }
            }),i("a-button",{
                staticClass:"submitPaper",
                on:{
                    click: function(t){
                        return e.submitAll();
                    }
                }
            },[e._v("一键提交")]),i("div", [1 == e.paperCatalogInfo.openScore ? i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        return e.OpenPaperFilterWin()
                    }
                }
            }, [e._v(" 筛选 ")]) : e._e()], 1),
                i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        return e.downloadPage()
                    }
                }
            }, [e._v(" 下载本页 ")]),
                i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        return e.getChoiceStatus()
                    }
                }
            }, [e._v(" 获取选择题作答情况 ")]),
                i("a-button", {
                attrs: {
                    type: e.isSelect ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        return e.getAnswer()
                    }
                }
            }, [e._v(" 下载答案解析 ")])]),i("div",{
                staticStyle:{
                    "display":"flex"
                }
            },[
                i("div", {
                staticClass: "right"
            }, ["pc" == e.source ? i("a-popover", {
                staticStyle: {
                    "margin-right": "15px"
                },
                attrs: {
                    trigger: "click"
                }
            }, [i("template", {
                slot: "content"
            }, [i("vue-qr", {
                attrs: {
                    text: e.qrcodeText,
                    size: 170,
                    margin: 6,
                    logoScale: .2
                }
            })], 1), i("a-button", {
                staticStyle: {
                    "min-width": "100px"
                },
                attrs: {
                    icon: "scan"
                }
            }, [e._v(" 扫一扫传答案 ")])], 2) : e._e(), 0 === e.paperInfo.mappingStatus && e.recoveryTime(e.paperInfo.paperRecycleTime) ? i("a-button", {
                attrs: {
                    type: e.showAnswerCard ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        e.showAnswerCard = !e.showAnswerCard
                    }
                }
            }, [e._v("答题区 ")]) : i("a-button", {
                attrs: {
                    disabled: e.questionCounts === e.alreadyAnswerData.filter((function(e) {
                        return !e.isDraft
                    }
                    )).length || !(1 === e.paperInfo.mappingStatus && e.paperSettingResubmitTime(e.paperInfo.paperSettingResubmitTime)) || e.getBtnStatus(e.alreadyAnswerData),
                    type: e.showAnswerCard ? "primary" : ""
                },
                on: {
                    click: function(t) {
                        e.showAnswerCard = !e.showAnswerCard
                    }
                }
            }, [e._v(" 补交答题区 ")]), i("span", {
                staticStyle: {
                    "margin-left": "10px"
                }
            }, [e._v("系统自动提交倒计时：")]), 0 === e.paperInfo.mappingStatus && e.recoveryTime(e.paperInfo.paperRecycleTime) ? i("span", {
                style: {
                    "color:": "--:--:--" != e.secondsText ? "#558FF2" : "#666"
                }
            }, [e._v(e._s(e.secondsText))]) : 1 === e.paperInfo.mappingStatus && e.paperSettingResubmitTime(e.paperInfo.paperSettingResubmitTime) ?i("span", {
                style: {
                    color: "--:--:--" != e.secondsText ? "#558FF2" : "#999"
                }
            }, [e._v(e._s(e.secondsText))]) : i("span", [e._v("--:--:--")]), 0 === e.paperInfo.mappingStatus && e.recoveryTime(e.paperInfo.paperRecycleTime) ? i("a-button", {
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    loading: e.isSubmit,
                    disabled: e.isSubmit,
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.submitPaperData(0)
                    }
                }
            }, [e._v(" " + e._s(e.isSubmit ? "提交中" : "手动提交") + " ")]) : i("a-button", {
                attrs: {
                    type: "danger",
                    // disabled: e.questionCounts === e.alreadyAnswerData.filter((function(e) {
                    //     return !e.isDraft
                    // }
                    // )).length || !(1 === e.paperInfo.mappingStatus && e.paperSettingResubmitTime(e.paperInfo.paperSettingResubmitTime)) || e.isSubmit || e.getBtnStatus(e.alreadyAnswerData),
                    loading: e.isSubmit
                },
                on: {
                    click: function(t) {
                        return e.submitPaperAgainData(0)
                    }
                }
            }, [e._v(" " + e._s(e.isSubmit ? "补交中" : "手动补交") + " ")])], 1)])]), i("div", {
                staticClass:"blankPaper",
                staticStyle: {
                    height: "130px"
                }
            }), i("div",{
                    staticClass:"choiceStatus"
                }),e.paperContentData.length > 0 ? [1 == e.paperInfo.showPaperTag || 1 === e.paperInfo.mappingStatus && e.paperSettingResubmitTime(e.paperInfo.paperSettingResubmitTime) || 0 === e.paperInfo.mappingStatus && e.recoveryTime(e.paperInfo.paperRecycleTime) ? i("div", [1 == e.paperCatalogInfo.openScore ? i("div", {
                staticClass: "courseStatistics"
            }, [i("div", {
                staticClass: "scoreRate"
            }, [i("div", {
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.showTags1 = !e.showTags1
                    }
                }
            }, [i("a-row", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    type: "flex",
                    justify: "center"
                }
            }, [i("a-col", {
                staticClass: "score",
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    span: 5
                }
            }, [e._v(" " + e._s(e.statisticsData.scoring) + " 分 ")]), i("a-col", {
                staticClass: "tips",
                staticStyle: {
                    "text-align": "center",
                    position: "relative"
                },
                attrs: {
                    span: 12
                }
            }, [e._v(" 总分 "), i("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.statisticsData.paperCommentingTag,
                    expression: "statisticsData.paperCommentingTag"
                }],
                staticClass: "statisticsDataComm",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.paperCommenting(0)
                    }
                }
            }, [e._v("试卷讲评")])]), i("a-col", {
                staticClass: "maxAvgScore",
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    span: 6
                }
            }, [[i("div", [e._v(e._s(e.statisticsData.scoringScoreMax) + "分 (高)")]), i("div", [e._v(e._s(e.statisticsData.scoringScoreAvg) + "分 (平)")])]], 2), i("a-col", {
                staticStyle: {
                    "line-height": "48px"
                },
                attrs: {
                    span: 1
                }
            }, [i("a-icon", {
                staticStyle: {
                    color: "#f00"
                },
                attrs: {
                    type: e.showTags1 ? "up" : "down"
                }
            })], 1)], 1)], 1), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showTags1,
                    expression: "showTags1"
                }]
            }, e._l(e.statisticsData.pointDTOList, (function(t) {
                return i("a-row", {
                    key: t.id,
                    staticStyle: {
                        "text-align": "center"
                    },
                    attrs: {
                        type: "flex",
                        justify: "center"
                    }
                }, [i("div", {
                    class: [e.lantuid.sourceid == t.pointId ? "select-box" : "", "select-w"],
                    on: {
                        click: function(i) {
                            i.stopPropagation(),
                            e.lantuid.sourceid = e.lantuid.sourceid == t.pointId ? 0 : t.pointId
                        }
                    }
                }, [i("a-col", {
                    staticClass: "score",
                    staticStyle: {
                        "text-align": "center"
                    },
                    attrs: {
                        span: 5
                    }
                }, [e._v(" " + e._s(t.stuScoring) + " 分 ")]), i("a-col", {
                    staticClass: "tips tips2",
                    staticStyle: {
                        "text-align": "center"
                    },
                    attrs: {
                        span: 12
                    }
                }, [e._v(" " + e._s(t.pointName) + " "), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.paperCommentingTag,
                        expression: "item.paperCommentingTag"
                    }],
                    staticClass: "statisticsDataComm",
                    on: {
                        click: function(i) {
                            return i.stopPropagation(),
                            e.paperCommenting(t.pointId)
                        }
                    }
                }, [e._v("试卷讲评")])]), i("a-col", {
                    staticClass: "maxAvgScore",
                    staticStyle: {
                        "text-align": "right"
                    },
                    attrs: {
                        span: 7
                    }
                }, [[i("div", [e._v(e._s(t.scoreMax) + "分 (高)")]), i("div", [e._v(e._s(t.scoreAvg) + "分 (平)")])]], 2)], 1)])
            }
            )), 1), i("a-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showTags1,
                    expression: "showTags1"
                }],
                staticStyle: {
                    "text-align": "center",
                    width: "calc(100% - 40px)",
                    "margin-left": "20px"
                },
                attrs: {
                    type: "flex",
                    justify: "center"
                }
            }, [i("a-col", {
                staticClass: "tips1",
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    span: 5
                }
            }, [[i("div", {
                class: [1 == e.lantuid.sourceid ? "select-box select-box-left" : ""]
            }, [e.statisticsData.scoring / e.statisticsData.scoringTotal >= .85 ? i("a-icon", {
                attrs: {
                    type: "check"
                }
            }) : e._e(), i("i", [e._v(" ")])], 1), i("div", {
                class: [2 == e.lantuid.sourceid ? "select-box select-box-left" : ""]
            }, [e.statisticsData.scoring / e.statisticsData.scoringTotal >= .75 && e.statisticsData.scoring / e.statisticsData.scoringTotal < .85 ? i("a-icon", {
                attrs: {
                    type: "check"
                }
            }) : e._e(), i("i", [e._v(" ")])], 1), i("div", {
                class: [3 == e.lantuid.sourceid ? "select-box select-box-left" : ""]
            }, [e.statisticsData.scoring / e.statisticsData.scoringTotal >= .6 && e.statisticsData.scoring / e.statisticsData.scoringTotal < .75 ? i("a-icon", {
                attrs: {
                    type: "check"
                }
            }) : e._e(), i("i", [e._v(" ")])], 1), i("div", {
                class: [4 == e.lantuid.sourceid ? "select-box select-box-left" : ""]
            }, [e.statisticsData.scoring / e.statisticsData.scoringTotal < .6 ? i("a-icon", {
                attrs: {
                    type: "check"
                }
            }) : e._e(), i("i", [e._v(" ")])], 1)]], 2), i("a-col", {
                staticClass: "tips1",
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    span: 12
                }
            }, [[i("div", {
                class: [1 == e.lantuid.sourceid ? "select-box" : ""],
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.lantuid.sourceid = 1 == e.lantuid.sourceid ? 0 : 1
                    }
                }
            }, [e._v("85%以上分数段")]), i("div", {
                class: [2 == e.lantuid.sourceid ? "select-box" : ""],
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.lantuid.sourceid = 2 == e.lantuid.sourceid ? 0 : 2
                    }
                }
            }, [e._v("75%~85%分数段")]), i("div", {
                class: [3 == e.lantuid.sourceid ? "select-box" : ""],
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.lantuid.sourceid = 3 == e.lantuid.sourceid ? 0 : 3
                    }
                }
            }, [e._v("60%~75%分数段")]), i("div", {
                class: [4 == e.lantuid.sourceid ? "select-box" : ""],
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.lantuid.sourceid = 4 == e.lantuid.sourceid ? 0 : 4
                    }
                }
            }, [e._v("60%以下分数段")])]], 2), i("a-col", {
                staticClass: "tips1",
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    span: 7
                }
            }, [[i("div", {
                class: [1 == e.lantuid.sourceid ? "select-box select-box-right" : ""]
            }, [e._v(" " + e._s(e.statisticsData.scoreRangeStudentCountsList[0]) + " 人 ")]), i("div", {
                class: [2 == e.lantuid.sourceid ? "select-box select-box-right" : ""]
            }, [e._v(" " + e._s(e.statisticsData.scoreRangeStudentCountsList[1]) + " 人 ")]), i("div", {
                class: [3 == e.lantuid.sourceid ? "select-box select-box-right" : ""]
            }, [e._v(" " + e._s(e.statisticsData.scoreRangeStudentCountsList[2]) + " 人 ")]), i("div", {
                class: [4 == e.lantuid.sourceid ? "select-box select-box-right" : ""]
            }, [e._v(" " + e._s(e.statisticsData.scoreRangeStudentCountsList[3]) + " 人 ")])]], 2)], 1), i("a-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showTags1,
                    expression: "showTags1"
                }],
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    type: "flex",
                    justify: "center"
                }
            }, [i("div", {
                class: ["select-w", 5 == e.lantuid.sourceid ? "select-box " : ""],
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.lantuid.sourceid = 5 == e.lantuid.sourceid ? 0 : 5
                    }
                }
            }, [i("a-col", {
                staticClass: "tips1",
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    span: 5
                }
            }, [e._v("  ")]), i("a-col", {
                staticClass: "name-box",
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    span: 12
                }
            }, [e._l(e.statisticsData.paperStudentScoreList, (function(t, a) {
                return i("span", {
                    key: t.stuId
                }, [i("span", {
                    style: {
                        color: e.userInfo.userId == t.stuId ? "#3ab54a" : ""
                    }
                }, [e._v(e._s(t.stuName) + "(" + e._s(t.stuScore) + ") "), a < 9 ? i("span", [e._v("、")]) : e._e()])])
            }
            ))], 2), i("a-col", {
                staticClass: "tips1",
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    span: 6
                }
            }), i("a-col", {
                attrs: {
                    span: 1
                }
            })], 1)])], 1), i("div", {
                staticClass: "tag"
            }, [0 === e.statisticsData.studentLibs.length ? i("div", {
                staticClass: "noMsg"
            }, [i("a-row", [i("a-col", {
                attrs: {
                    span: 5
                }
            }), i("a-col", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    span: 12
                }
            }, [e._v("暂无数据")]), i("a-col", {
                attrs: {
                    span: 6
                }
            }), i("a-col", {
                attrs: {
                    span: 1
                }
            })], 1)], 1) : i("dl", [e._l(e.statisticsData.studentLibs.filter((function(e, t) {
                return 0 === t
            }
            )), (function(t) {
                return e.showTags ? e._e() : i("dt", {
                    key: t.id,
                    on: {
                        click: function(t) {
                            e.showTags = !e.showTags
                        }
                    }
                }, [i("a-row", [i("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [e._v(e._s(t.paperScoringRate) + " "), parseInt(t.paperScoringRate) > parseInt(t.studentScoringRate) ? i("a-icon", {
                    staticStyle: {
                        color: "#00d86f"
                    },
                    attrs: {
                        type: "arrow-up"
                    }
                }) : e._e(), parseInt(t.paperScoringRate) < parseInt(t.studentScoringRate) ? i("a-icon", {
                    staticStyle: {
                        color: "red"
                    },
                    attrs: {
                        type: "arrow-down"
                    }
                }) : e._e()], 1), i("a-col", {
                    class: {
                        tag: !e.showTags
                    },
                    style: {
                        "text-align": "center",
                        padding: e.showTags ? "10px 0" : "0px",
                        "margin-top": (e.showTags,
                        "0px"),
                        // padding: "0px"
                    },
                    attrs: {
                        span: 12
                    }
                }, [e._v(" 【" + e._s(0 === t.libType ? "素养" : 1 === t.libType ? "能力" : "知识点") + "】" + e._s(t.libNumber) +e._s(t.libName) + " ")]), i("a-col", {
                    staticStyle: {
                        "text-align": "right"
                    },
                    attrs: {
                        span: 6
                    }
                }, [e._v(" " + e._s(t.studentScoringRate) + "（前） ")]), i("a-col", {
                    attrs: {
                        span: 1
                    }
                }, [i("a-icon", {
                    attrs: {
                        type: e.showTags ? "up" : "down"
                    }
                })], 1)], 1)], 1)
            }
            )), e.showTags ? e._l(e.statisticsData.studentLibs, (function(t, a) {
                return i("dd", {
                    key: t.id
                }, [i("div", {
                    class: [e.lantuid.tagid == t.id ? "select" : ""],
                    on: {
                        click: function(i) {
                            i.stopPropagation(),
                            0 == a ? e.showTags = !e.showTags : e.lantuid.tagid = e.lantuid.tagid == t.id ? 0 : t.id
                        }
                    }
                }, [i("a-row", [i("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [e._v(e._s(t.paperScoringRate) + " "), parseInt(t.paperScoringRate) > parseInt(t.studentScoringRate) ? i("a-icon", {
                    staticStyle: {
                        color: "#00d86f"
                    },
                    attrs: {
                        type: "arrow-up"
                    }
                }) : e._e(), parseInt(t.paperScoringRate) < parseInt(t.studentScoringRate) ? i("a-icon", {
                    staticStyle: {
                        color: "red"
                    },
                    attrs: {
                        type: "arrow-down"
                    }
                }) : e._e()], 1), i("a-col", {
                    staticStyle: {
                        "text-align": "center"
                    },
                    attrs: {
                        span: 12
                    }
                }, [e._v(" 【" + e._s(0 === t.libType ? "素养" : 1 === t.libType ? "能力" : "知识点") + "】" + e._s(t.libNumber) + e._s(t.libName) + " ")]), i("a-col", {
                    staticStyle: {
                        "text-align": "right"
                    },
                    attrs: {
                        span: 6
                    }
                }, [e._v(" " + e._s(t.studentScoringRate) + "（前） ")]), i("a-col", {
                    attrs: {
                        span: 1
                    }
                }, [0 == a ? i("a-icon", {
                    attrs: {
                        type: e.showTags ? "up" : "down"
                    }
                }) : e._e()], 1)], 1)], 1)])
            }
            )) : e._e()], 2)]), i("div", {
                staticClass: "time"
            }, [i("dl", [i("dt", {
                on: {
                    click: function(t) {
                        e.showAnswerTime = !e.showAnswerTime,
                        e.lantuid.timeid = 0
                    }
                }
            }, [i("a-row", [i("a-col", {
                attrs: {
                    span: 5
                }
            }), i("a-col", {
                attrs: {
                    span: 12
                }
            }, [e._v(" 考试用时")]), i("a-col", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    span: 6
                }
            }, [e._v(" " + e._s(e.getPaperTimes(e.statisticsData.paperBeginTime, e.statisticsData.paperEndTime)) + " ")]), i("a-col", {
                attrs: {
                    span: 1
                }
            }, [i("a-icon", {
                attrs: {
                    type: e.showAnswerTime ? "up" : "down"
                }
            })], 1)], 1)], 1), e.showAnswerTime ? e._l(e.statisticsData.studentPaperQuestions, (function(t) {
                return i("dd", {
                    key: t.id
                }, [[i("div", {
                    class: [e.lantuid.timeid == t.id ? "select" : ""],
                    on: {
                        click: function(i) {
                            i.stopPropagation(),
                            e.lantuid.timeid = e.lantuid.timeid == t.id ? 0 : t.id
                        }
                    }
                }, [i("a-row", [i("a-col", {
                    attrs: {
                        span: 5
                    }
                }, [[0, 1].includes(t.questionType) ? i("span", [0 == t.childList.length ? i("span", [null == e.getQuesItem(t.id) || e.getQuesItem(t.id) && null == e.getQuesItem(t.id).studentAnswer ? i("span", {
                    style: {
                        color: null == e.getQuesItem(t.id) ? e.lantuid.timeid == t.id ? "#007ef9" : "#FFF" : "#F00",
                        "font-size": "16px"
                    }
                }, [e._v("未作答")]) : i("span", [e.getQuesItem(t.id) && 0 === e.getQuesItem(t.id).judgeTag ? i("p",{},[e._v( e.getQuesItem(t.id).studentScore+"/"+t.questionScore)]) : e._e(), e.getQuesItem(t.id) && 1 === e.getQuesItem(t.id).judgeTag ? i("a-icon", {
                    staticClass: "true",
                    attrs: {
                        type: "check"
                    }
                }) : e._e(), e.getQuesItem(t.id) && 2 === e.getQuesItem(t.id).judgeTag ? i("p",{},[e._v( e.getQuesItem(t.id).studentScore+"/"+t.questionScore)]) : e._e()], 1)]) : i("span")]) : [2, 3].includes(t.questionType) ? i("span", [null != e.getQuesItem(t.id) ? [0 == e.getQuesItem(t.id).readOverTag || null == e.getQuesItem(t.id).studentSubmitTime ? i("span", [t.firstQuestionId != t.id && null == e.getQuesItem(t.id).studentSubmitTime ? i("span", {
                    style: {
                        color: e.lantuid.timeid == t.id ? "#007ef9" : "#F00"
                    }
                }, [e._v("未作答")]) : t.firstQuestionId != t.id && 0 == e.getQuesItem(t.id).readOverTag ? i("span", [e._v("未批阅")]) : e._e()]) : i("span", [0 == t.studentScore ? i("p",{},[e._v( e.getQuesItem(t.id).studentScore-t.questionScore)]) : e._e(), t.studentScore == t.questionScore ? i("a-icon", {
                    staticClass: "true",
                    attrs: {
                        type: "check"
                    }
                }) : e._e(), t.studentScore > 0 && t.studentScore < t.questionScore ? i("p",{},[e._v( e.getQuesItem(t.id).studentScore-t.questionScore)]) : e._e()], 1)] : [i("span")]], 2) : e._e()]), i("a-col", {
                    attrs: {
                        span: 12
                    }
                }, [[0, 1].includes(t.questionType) ? i("span", {
                    class: {
                        makeUp: e.getQuesItem(t.id) && 1 === e.getQuesItem(t.id).resubmitTag
                    },
                    style: {
                        color: e.lantuid.timeid == t.id ? "#007ef9" : ""
                    }
                }, [e._v(" " + e._s((0 == t.childList.length ? "题号" : "") + t.questionNumber) + " ")]) : e._e(), [2, 3].includes(t.questionType) ? i("span", {
                    class: {
                        makeUp: e.getQuesItem(t.id) && 1 === e.getQuesItem(t.id).resubmitTag
                    },
                    style: {
                        color: e.lantuid.timeid == t.id ? "#007ef9" : ""
                    }
                }, [e._v(e._s((0 == t.childList.length ? "题号" : "") + t.questionNumber))]) : e._e()]), i("a-col", {
                    staticStyle: {
                        "text-align": "right"
                    },
                    attrs: {
                        span: 6
                    }
                }, [[0, 1, 2, 3].includes(t.questionType) ? i("span", [e._v(" " + e._s(null == e.getQuesItem(t.id) || null == e.getQuesItem(t.id).studentSubmitTime ? "未提交" : e.getQuesItem(t.id).studentSubmitTime) + " ")]) : e._e()]), i("a-col", {
                    attrs: {
                        span: 1
                    }
                })], 1)], 1), t.childList.length > 0 && [0, 1, 2, 3].includes(t.questionType) ? i("div", e._l(t.childList, (function(a) {
                    return i("div", {
                        key: a.id
                    }, [i("div", {
                        class: [e.lantuid.timeid == a.id ? "select" : ""],
                        on: {
                            click: function(t) {
                                t.stopPropagation(),
                                e.lantuid.timeid = e.lantuid.timeid == a.id ? 0 : a.id
                            }
                        }
                    }, [i("a-row", [i("a-col", {
                        attrs: {
                            span: 5
                        }
                    }, [e.getQuesItem(a.id) ? [[0, 1].includes(t.questionType) && (null == e.getQuesItem(a.id).studentAnswer || e.getQuesItem(a.id).isDraft) ? i("span", {
                        style: {
                            color: e.lantuid.timeid == a.id ? "#007ef9" : "#F00"
                        }
                    }, [e._v("未作答")]) : ![2, 3].includes(t.questionType) || 0 != e.getQuesItem(t.id).attachments.length && 0 != e.getQuesItem(a.id).readOverTag ? i("span", [[0, 1].includes(t.questionType) ? [e.getQuesItem(a.id) && 0 === e.getQuesItem(a.id).judgeTag ? i("p",{},[e._v( e.getQuesItem(a.id).studentScore+"/"+a.questionScore)]) : e._e(), e.getQuesItem(a.id) && 1 === e.getQuesItem(a.id).judgeTag ? i("a-icon", {
                        staticClass: "true",
                        attrs: {
                            type: "check"
                        }
                    }) : e._e(), e.getQuesItem(a.id) && 2 === e.getQuesItem(a.id).judgeTag ? i("p",{},[e._v( e.getQuesItem(a.id).studentScore+"/"+a.questionScore)]) : e._e()] : [e.getQuesItem(a.id) && 0 === e.getQuesItem(a.id).readOverTag ? i("span", [e._v("未批阅")]) : i("span", [e.getQuesItem(a.id) && 0 === e.getQuesItem(a.id).studentScore ? i("p",{},[e._v( e.getQuesItem(a.id).studentScore+"/"+a.questionScore)]) : e._e(), e.getQuesItem(a.id) && e.getQuesItem(a.id).studentScore === a.questionScore ? i("a-icon", {
                        staticClass: "true",
                        attrs: {
                            type: "check"
                        }
                    }) : e._e(), e.getQuesItem(a.id) && e.getQuesItem(a.id).studentScore > 0 && e.getQuesItem(a.id).studentScore < a.questionScore ? i("p",{},[e._v( e.getQuesItem(a.id).studentScore+"/"+a.questionScore)]) : e._e()], 1)]], 2) : i("span", [0 == e.getQuesItem(t.id).attachments.length ? i("span", {
                        style: {
                            color: e.lantuid.timeid == a.id ? "#007ef9" : "#F00"
                        }
                    }, [e._v("未作答")]) : e.getQuesItem(t.id).attachments.length > 0 && 0 == e.getQuesItem(a.id).readOverTag ? i("span", [e._v("未批阅")]) : e._e()])] : i("span", [e._v("未作答")])], 2), i("a-col", {
                        attrs: {
                            span: 12
                        }
                    }, [[0, 1, 2, 3].includes(t.questionType) ? i("span", {
                        class: {
                            makeUp: e.getQuesItem(a.id) && 1 === e.getQuesItem(a.id).resubmitTag
                        },
                        style: {
                            color: e.lantuid.timeid == a.id ? "#007ef9" : ""
                        }
                    }, [e._v(" 题号" + e._s(a.questionNumber) + " ")]) : e._e(), 1 === t.contentType ? i("span", [e._v(" " + e._s(t.attachmentName) + " ")]) : e._e()]), i("a-col", {
                        staticStyle: {
                            "text-align": "right"
                        },
                        attrs: {
                            span: 6
                        }
                    }, [[0, 1, 2, 3].includes(t.questionType) ? i("span", [i("span", [e._v(" " + e._s(null == a.studentSubmitTime || "" == a.studentSubmitTime ? "未提交" : a.studentSubmitTime) + " ")])]) : e._e()]), i("a-col", {
                        attrs: {
                            span: 1
                        }
                    })], 1)], 1)])
                }
                )), 0) : e._e()]], 2)
            }
            )) : e._e()], 2)])]) : e._e(), e._l(e.paperContentData, (function(t, a) {
                return i("div", {
                    key: t.content.id,
                    staticStyle: {
                        margin: "10px 0"
                    }
                }, [i("Question", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.titleIds.includes(t.content.id),
                        expression: "!titleIds.includes(item.content.id)"
                    }],
                    ref: "question",
                    refInFor: !0,
                    attrs: {
                        index: a,
                        data: t.content,
                        contentType: t.contentType,
                        alreadyAnswer: e.alreadyAnswerData.filter((function(e) {
                            return e.paperId === t.content.paperId
                        }
                        )),
                        selectId: e.selectId,
                        showAnswerCard: e.showAnswerCard,
                        paperCatalogInfo: e.paperCatalogInfo,
                        paperInfo: e.paperInfo,
                        ErrorContent: e.ErrorContent,
                        isEndCountdown: 0 == e.paperInfo.mappingStatus ? 0 == e.deadline : 0 == e.deadline1,
                        surplussecond: e.surplussecond,
                        paperShareList: e.PaperShareData.filter((function(e) {
                            return e.questionId === t.content.id
                        }
                        )),
                        paperStatus: e.questionCounts === e.alreadyAnswerData.filter((function(e) {
                            return !e.isDraft
                        }
                        )).length || !(1 === e.paperInfo.mappingStatus && e.paperSettingResubmitTime(e.paperInfo.paperSettingResubmitTime)) || e.getBtnStatus(e.alreadyAnswerData)
                    },
                    on: {
                        "update:selectId": function(t) {
                            e.selectId = t
                        },
                        "update:select-id": function(t) {
                            e.selectId = t
                        },
                        getStuAnaswerInfo: e.getStuAnaswerInfo
                    }
                })], 1)
            }
            ))], 2) : i("div", {
                staticClass: "content img-box"
            }, [i("div", {
                staticClass: "img-text"
            }, [e._v(e._s(e.text) + " ")])])] : i("div", {
                staticStyle: {
                    display: "flex",
                    "justify-content": "space-around",
                    "align-items": "center",
                    height: "calc(100vh - 150px)"
                }
            }, [i("a-empty")], 1)], 2) : i("div", {
                staticStyle: {
                    display: "flex",
                    "justify-content": "space-around",
                    "align-items": "center",
                    height: "calc(100vh - 150px)"
                }
            }, [i("a-empty")], 1)]), i("CropperBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isEditImg,
                    expression: "isEditImg"
                }],
                ref: "cropper"
            }), i("CollectLayer", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isCollect,
                    expression: "isCollect"
                }],
                ref: "collect",
                attrs: {
                    AskCourseId: e.AskPaperId,
                    AskQuestionId: e.AskQuestionId,
                    contentType: e.contentType
                }
            }), i("DiscussArea", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isDiscussArea,
                    expression: "isDiscussArea"
                }],
                ref: "discuss",
                attrs: {
                    AskCourseId: e.AskPaperId,
                    AskQuestionId: e.AskQuestionId,
                    contentType: e.contentType
                }
            }), i("ShareLayer", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isShareLayer,
                    expression: "isShareLayer"
                }],
                ref: "share",
                attrs: {
                    askShareDTOList: e.askShareDTOList
                }
            }), i("OneselfReview", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isOR,
                    expression: "isOR"
                }],
                ref: "review"
            }), i("CommentBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.comment.isComment,
                    expression: "comment.isComment"
                }],
                ref: "comment"
            }), i("CommentAllBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.comment.isAllComment,
                    expression: "comment.isAllComment"
                }],
                ref: "commentall"
            }), i("PaperFilter", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showModal,
                    expression: "showModal"
                }],
                ref: "filter",
                attrs: {
                    paperId: e.paperInfo.paperId
                }
            }), e.spinning ? i("Load") : e._e()], 1)
        }
          , s = []
          , n = i(70614)
          , r = i(52650)
          , o = i(1496)
          , l = i(68354)
          , d = i(29260)
          , u = i.n(d)
          , c = {
            name: "Exam",
            props: ["barWidth"],
            components: {
                swiper: n.swiper,
                swiperSlide: n.swiperSlide,
                VueQr: u(),
                Question: ()=>i.e(534).then(i.bind(i, 87534)),
                CropperBox: ()=>Promise.all([i.e(996), i.e(414)]).then(i.bind(i, 4414)),
                CollectLayer: ()=>i.e(179).then(i.bind(i, 43179)),
                DiscussArea: ()=>Promise.all([i.e(580), i.e(879)]).then(i.bind(i, 19580)),
                OneselfReview: ()=>Promise.all([i.e(775), i.e(519)]).then(i.bind(i, 14775)),
                ShareLayer: ()=>i.e(69).then(i.bind(i, 68069)),
                CommentBox: ()=>i.e(683).then(i.bind(i, 60683)),
                CommentAllBox: ()=>i.e(265).then(i.bind(i, 75265)),
                PaperFilter: ()=>i.e(166).then(i.bind(i, 56166)),
                Load: ()=>i.e(97).then(i.bind(i, 43286))
            },
            data() {
                if(sessionStorage.getItem("course_userInfo") == null){
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', '/exam/api/user/info', false); // false表示同步请求
                        xhr.send();
                        if (xhr.status === 200) {
                          var data = JSON.parse(xhr.responseText);
                          let info = {
                                "userId": data["extra"]["id"],
                                "userName": data["extra"]["userName"],
                                "mobile": data["extra"]["phoneNumber"],
                                "subjectId": data["extra"]["subjectId"],
                                "sex": data["extra"]["sex"]
                            }
                            sessionStorage.setItem("course_userInfo",JSON.stringify(info));
                        }
                    }
                return {
                    userInfo: JSON.parse(sessionStorage.getItem("course_userInfo")),
                    paperId: 0,
                    paperIds: [],
                    paperList: [],
                    swiperOption: {
                        allowTouchMove: !1,
                        slidesPerView: 3,
                        spaceBetween: 5,
                        on: {
                            tap: ()=>{
                                this.paperId != this.paperList[this.swiper.clickedIndex].id && (this.showTags = !1,
                                this.showTags1 = !1,
                                this.showAnswerTime = !1,
                                this.showAnswerCard = !1,
                                this.selectId = -1,
                                this.surplussecond = 0,
                                (0,
                                r.NZ)(this.catalogId).then((e=>{
                                    if (0 == e.code) {
                                        let t = e.extra;
                                        if (this.paperList = t,
                                        this.paperCatalogInfo = this.paperList[this.swiper.clickedIndex],
                                        this.paperId = this.paperList[this.swiper.clickedIndex].id,
                                        this.selectId = this.paperList[this.swiper.clickedIndex].id,
                                        this.text = "老师正在批阅中，请耐心等待!",
                                        this.getPaperInfo(this.paperList[this.swiper.clickedIndex].id,this.swiper.clickedIndex),
                                        1 == this.paperInfo.mappingStatus && 0 == this.paperCatalogInfo.showPaperTag && !this.paperSettingResubmitTime(this.paperInfo.paperSettingResubmitTime))
                                            return;
                                        this.deadline = null == this.paperList[this.swiper.clickedIndex].paperRecycleTime ? 0 : new Date(this.paperList[this.swiper.clickedIndex].paperRecycleTime.replace(/-/g, "/")).getTime(),
                                        this.getPaperStatistics(this.paperList[this.swiper.clickedIndex].openScore, this.paperList[this.swiper.clickedIndex].id),localStorage.setItem("paperName",this.paperList[this.swiper.clickedIndex]["paperName"]),
                                        (0,
                                        l.Md)()
                                    }
                                }
                                )))
                            }
                        }
                    },
                    deadline: 0,
                    deadline1: 0,
                    selectId: -1,
                    showAnswerCard: !1,
                    showTags: !1,
                    showAnswerTime: !1,
                    paperContentData: [],
                    paperInfo: {},
                    paperCatalogInfo: {},
                    titleIds: [],
                    alreadyAnswerData: [],
                    isEditImg: !1,
                    questuinIndex: 0,
                    isCollect: !1,
                    isDiscussArea: !1,
                    contentType: 0,
                    AskPaperId: 0,
                    AskQuestionId: 0,
                    isSubmit: !1,
                    isOR: !1,
                    isShareLayer: !1,
                    askShareDTOList: [],
                    statisticsData: {},
                    showTags1: !1,
                    audio: null,
                    playAudio: {
                        src: "",
                        play: !1,
                        index: -1
                    },
                    playid: -1,
                    comment: {
                        isComment: !1,
                        isAllComment: !1
                    },
                    timer: null,
                    secondsText: "",
                    surplussecond: 0,
                    lantuid: {
                        timeid: 0,
                        tagid: 0,
                        sourceid: 0,
                        freeid: 0
                    },
                    ErrorContent: [],
                    source: "pc",
                    qrcodeText: "",
                    PaperShareData: [],
                    showModal: !1,
                    isSelect: !1,
                    spinning: !1,
                    catalogId: 0,
                    text: ""
                }
            },
            mounted() {
                let e = this;
                e.$bus.on("setTeacherID", (t=>{
                    sessionStorage.getItem("TeacherID");
                    e.paperList = [],
                    sessionStorage.setItem("TeacherID", t)
                }
                )),
                e.source = sessionStorage.getItem("source");
                let t = localStorage.getItem("paperreddot");
                setTimeout((function() {
                    e.paperIds = null == t || "undefined" == typeof t ? [] : JSON.parse(t).courseIds
                }
                ), 500),
                e.$bus.on("changePaperReddot", (t=>{
                    e.paperIds = t.courseIds
                }
                )),
                e.$bus.on("CancelPaperSelect", (t=>{
                    e.isSelect = !1
                }
                )),
                e.$bus.on("PausePlay", (t=>{
                    e.getAudioList()
                }
                )),
                (0,
                l.Md)()
            },
            watch: {
                "$route.query.catalogId": {
                    immediate: !0,
                    handler(e) {
                        void 0 !== e && "" != e && (this.paperList = [],
                        this.paperInfo = {},
                        this.catalogId = e,
                        this.getPaperList(e))
                    }
                }
            },
            computed: {
                swiper() {
                    return this.$refs.mySwiper.swiper
                },
                questionCounts() {
                    return this.showAnswerTime = !1,
                    this.showTags = !1,
                    this.showTags1 = !1,
                    this.lantuid = {
                        timeid: 0,
                        tagid: 0,
                        sourceid: 0
                    },
                    this.paperContentData.filter((e=>2 === e.contentType)).length
                }
            },
            methods: {
                getQuesItem(e) {
                    let t = this.alreadyAnswerData.find((t=>t.questionId == e));
                    return t
                },
                getBtnStatus(e) {
                    let t = this;
                    if (0 == e.length)
                        return !1;
                    if (1 == t.paperInfo.mappingStatus) {
                        let i = 0
                          , a = 0;
                        return t.paperContentData.forEach((e=>{
                            "undefined" != typeof e.content.childList && (i += 0 == e.content.childList.length ? 1 : e.content.childList.length)
                        }
                        )),
                        e.forEach((e=>{
                            e.questionId == e.firstQuestionId || e.isDraft || (a += 1)
                        }
                        )),
                        a == i
                    }
                },
                getPaperList(e) {
                    let t = this;
                    t.spinning = !0,
                    (0,
                    r.NZ)(e).then((e=>{
                        if(e.extra[0] != undefined) {
                            let nearPaper = (localStorage.getItem("nearPaper") == null ? [] : JSON.parse(localStorage.getItem("nearPaper")));
                            let nearSubject = JSON.parse(localStorage.getItem("nearTestSubject"));
                            let subject = JSON.parse(sessionStorage.getItem("setTeacher")).subjectName
                            let PaperInfo = {"name": subject+"-"+nearSubject[e.extra[0].catalogId], "id": e.extra[0].catalogId};
                            if (!nearPaper.some(item =>
                                item.id === PaperInfo.id
                            )) nearPaper.push(PaperInfo);
                            if (nearPaper.length > 10) nearPaper.shift();
                            localStorage.setItem("nearPaper", JSON.stringify(nearPaper));
                        }

                        0 == e.code && (t.paperList = e.extra,
                        null != t.paperList && t.paperList.length > 0 && (t.deadline = null == t.paperList[0].paperRecycleTime ? 0 : new Date(t.paperList[0].paperRecycleTime.replace(/-/g, "/")).getTime(),
                        t.paperCatalogInfo = t.paperList[0],
                        t.getPaperInfo(t.paperList[0].id,0),
                        t.getPaperStatistics(t.paperList[0].openScore, t.paperList[0].id),
                        localStorage.setItem("paperName",t.paperList[0]["paperName"]),
                        t.text = "老师正在批阅中，请耐心等待!"),
                        t.spinning = !1)
                    }
                    ))
                },
                getPaperInfo(e,index=null) {
                    let t = this;
                    t.showAnswerCard = !1,
                    t.selectId = e,
                    t.paperId = e,
                    localStorage.setItem("paperId",e);
                    t.spinning = !0,
                    t.paperInfo = {},
                    t.paperContentData = [],
                    (0,
                    r.C0)(e).then((i=>{
                        if(index!=null){
                            if(i.extra.mappingStatus!=1){
                                t.paperList[index].openScore = 0;
                                t.paperList[index].openAnswer = 0;
                                document.querySelector('.submitPaper.ant-btn').style.display = 'block';
                                document.querySelector('.answerPaper').style.display = 'block';
                                document.querySelector('.txtPaper').style.display = 'block';
                                document.querySelector('.blankPaper').style.height = "130px"
                            }
                            else{
                                document.querySelector('.submitPaper.ant-btn').style.display = 'none';
                                document.querySelector('.answerPaper').style.display = 'none';
                                document.querySelector('.txtPaper').style.display = 'none';
                                document.querySelector('.blankPaper').style.height = "90px"
                            }
                        }
                        0 == i.code && (t.paperInfo = i.extra,
                        t.deadline1 = null == i.extra.paperSettingResubmitTime ? 0 : t.paperSettingResubmitTime(i.extra.paperSettingResubmitTime) ? new Date(i.extra.paperSettingResubmitTime.replace(/-/g, "/")).getTime() : (new Date).getTime(),
                        t.countdown(t.paperInfo.currTime, 0 == t.paperInfo.mappingStatus ? t.paperInfo.paperRecycleTime : t.paperInfo.paperSettingResubmitTime),
                        t.getStuAnaswerInfo(e)),
                        t.spinning = !1
                    }
                    )),
                    t.GetPaperShareData(e),
                    this.statisticsData=new Proxy(() => null, {
                        get(target, prop, receiver) {
                            if (prop === 'scoreRangeStudentCountsList' || prop==='studentLibs') {
                                // 返回一个包含四个元素的数组
                                return [0,0,0,0]; // 你可以根据需要替换为具体元素
                            }
                            return 0
                        },
                        apply(target, thisArg, argumentsList) {
                            return 0;
                        }
                    }),
                    (0,
                    r.Y_)(e).then((e=>{
                            let questions=[];
                            let answer = "";
                            for(let i of e.extra){
                                if(i.contentType==2){
                                    if(i.content.chooseZoneCounts>1){
                                        for(let j of i.content.childList){
                                            if(j.answerCard != null) {
                                                questions.push(j.id);
                                                answer+=`<p>题号${j.questionNumber}:${j.answer}</p>${j.questionAnalysis}<br><br>`
                                            }else{
                                                answer+=`<p>题号${j.questionNumber}</p>${j.answer}${j.questionAnalysis}<br><br>`
                                            }
                                        }
                                    }else if(i.content.answerCard != null) {
                                        questions.push(i.content.id);
                                        answer+=`<p>题号${i.content.questionNumber}:${i.content.answer}</p>${i.content.questionAnalysis}<br><br>`
                                    }else{
                                    answer+=`<p>题号${i.content.questionNumber}</p>${i.content.answer}${i.content.questionAnalysis}<br><br>`
                                }
                                }
                            }
                            if(questions.length !=0){
                                let answerInput = document.querySelector('.answerPaper')
                                answerInput.placeholder="题目数量："+questions.length;
                                answerInput.value = null
                            }
                            else{
                                document.querySelector('.submitPaper.ant-btn').style.display = 'none';
                                document.querySelector('.answerPaper').style.display = 'none';
                                document.querySelector('.txtPaper').style.display = 'none';
                            }
                            localStorage.setItem("questions",questions);
                            localStorage.removeItem("newQuestions")
                            const div = document.querySelector('.choiceStatus');
                            div.textContent = "";
                            localStorage.setItem("answers",answer)

                            0 == e.code ? t.paperContentData = e.extra : t.$message.error(e.message)
                        }
                    )),
                    (0,
                    o.V9)().then((e=>{
                        localStorage.setItem("paperreddot", JSON.stringify(e.extra)),
                        t.$bus.emit("changePaperReddot", e.extra)
                    }
                    )),
                    t.getErrorContentList(e),
                    t.getQRCode()
                },
                GetPaperShareData(e) {
                    (0,
                    r.r3)(e).then((e=>{
                        this.PaperShareData = e.extra
                    }
                    ))
                },
                getQRCode() {
                    let e = this;
                    "pc" == e.source && ((0,
                    l.lF)(e.paperId) || setTimeout((()=>{
                        let t = JSON.parse(sessionStorage.getItem("userInfo"));
                        t.id = this.paperId,
                        t.type = "2",
                        t.name = e.paperList.find((t=>t.id == e.paperId)).paperName,
                        t.catalogId = e.paperCatalogInfo.catalogId;
                        let i = window.location.origin + "/stu/#/mobile?data=" + encodeURI(encodeURI(JSON.stringify(t))) + "&time=" + (new Date).getTime();

                        e.qrcodeText = i
                    }
                    ), 1e3))
                },
                countdown(e, t) {
                    if (null == e || null == t)
                        return;
                    let i = this;
                    e = e.replace(/\-/g, "/"),
                    t = t.replace(/\-/g, "/");
                    var a,s;
                    a = new Date(e), s = new Date(t),i.surplussecond = parseInt((s.getTime() - a.getTime()) / parseInt(1e3)),
                    i.surplussecond <= 0 || (clearInterval(i.timer),
                    i.timer = setInterval((()=>{
                        if (i.surplussecond > 0) {
                            var e = Math.floor(i.surplussecond / 60 / 60)
                              , m = Math.floor(i.surplussecond / 60 % 60)
                              , a = Math.floor(i.surplussecond % 60);
                            i.secondsText = (0,
                            l.jJ)(e) + ":" + (0,
                            l.jJ)(m) + ":" + (0,
                            l.jJ)(a),
                            i.surplussecond = (s.getTime() - new Date())/1000;
                        } else
                            clearInterval(i.timer),
                            i.secondsText = "--:--:--",
                            0 == i.paperInfo.mappingStatus ? i.onFinish() : i.onFinish1()
                    }
                    ), 1e3))
                },
                getStuAnaswerInfo(e, t) {
                    let i = this;
                    (0,
                    r.O2)(e).then((e=>{
                        let a = Object.keys(sessionStorage);
                        if (a.length > 0)
                            for (let t = 0; t < a.length; t++)
                                (a[t].indexOf("ItemImg") >= 0 || a[t].indexOf("Score-") >= 0) && sessionStorage.removeItem(a[t]);
                        i.alreadyAnswerData = e.extra,
                        i.isSubmit = !1,
                        "function" == typeof t && t(i.alreadyAnswerData)
                    }
                    ))
                },
                getPaperStatistics(e, t) {
                    0 != e && (0,
                    r.Z2)(t).then((e=>{
                        this.statisticsData = e.extra,
                        this.statisticsData.studentLibs = e.extra.studentLibs.sort(((e,t)=>e.libType !== t.libType ? e.libType - t.libType : e.id - t.id))
                    }
                    ))
                },
                getErrorContentList(e) {
                    let t = this;
                    if(sessionStorage.getItem("course_userInfo") == null){
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', '/exam/api/user/info', false); // false表示同步请求
                        xhr.send();
                        if (xhr.status === 200) {
                          var data = JSON.parse(xhr.responseText);
                          let info = {
                                "userId": data["extra"]["id"],
                                "userName": data["extra"]["userName"],
                                "mobile": data["extra"]["phoneNumber"],
                                "subjectId": data["extra"]["subjectId"],
                                "sex": data["extra"]["sex"]
                            }
                            sessionStorage.setItem("course_userInfo",JSON.stringify(info));
                        }
                    }
                    (0,
                    o.vz)({
                        studentId:JSON.parse(sessionStorage.getItem("course_userInfo")).userId,
                        paperId: e
                    }).then((e=>{
                        t.ErrorContent = e.extra
                    }
                    ))
                },
                getPaperTimes(e, t) {
                    let i = Math.abs(new Date(t).getTime() - new Date(e).getTime())
                      , a = parseInt(i % 864e5 / 36e5)
                      , s = parseInt(i % 36e5 / 6e4);
                    return a + "小时" + s + "分钟"
                },
                slidePrev() {
                    this.swiper.isBeginning ? this.$message.warning("已经是第一个考试了！") : (this.showAnswerCard = !1,
                    this.swiper.slidePrev())
                },
                slideNext() {
                    this.swiper.isEnd ? this.$message.warning("已经是最后一个考试了！") : (this.showAnswerCard = !1,
                    this.swiper.slideNext())
                },
                onFinish() {
                    let e = this;
                    e.paperInfo.mappingStatus = 1,
                    e.deadline = 0,
                    e.showAnswerCard = !1,
                    e.selectId = -1,
                    e.surplussecond = 0,
                    setTimeout((()=>{
                        e.paperInfo.showPaperTag
                    }
                    ), 500)
                },
                onFinish1() {
                    console.log("补交时间到，停止答卷");
                    let e = this;
                    e.paperInfo.paperSettingResubmitTime = null,
                    e.deadline1 = 0,
                    setTimeout((()=>{
                        e.paperInfo.showPaperTag
                    }
                    ), 500)
                },
                submitPaperData(e) {
                    this.$createElement;
                    let t = this;
                    function i() {
                        t.isSubmit ? t.$message.warning("数据正在提交中") : (t.isSubmit = !0,
                        t.showAnswerCard = !1,
                        t.selectId = -1,
                        t.surplussecond = 0,
                        (0,
                        r.me)({
                            paperId: t.paperId
                        }).then((e=>{
                            0 == e.code ? t.getPaperInfo(t.paperId) : t.$message.warning(e.message)
                        }
                        )))
                    }
                    0 == e ? this.$confirm({
                        title: "提示",
                        content: e=>e("div", ["提交后本次考试将结束且不可修改，确定要提交本次考试吗？"]),
                        onOk() {
                            t.$nextTick((()=>{
                                i()
                            }
                            ))
                        },
                        class: "test"
                    }) : t.$nextTick((()=>{
                        i()
                    }
                    ))
                },
                submitPaperAgainData(e) {
                    this.$createElement;
                    let t = this;
                    function i() {
                        t.isSubmit ? t.$message.warning("数据正在提交中") : (t.isSubmit = !0,
                        t.showAnswerCard = !1,
                        (0,
                        r.oj)({
                            paperId: t.paperId
                        }).then((e=>{
                            e.extra && t.getPaperInfo(t.paperId)
                        }
                        )))
                    }
                    0 == e ? this.$confirm({
                        title: "提示",
                        content: e=>e("div", ["补交后本次考试将结束且不可修改，确定要提交本次补交信息吗？"]),
                        onOk() {
                            t.$nextTick((()=>{
                                i()
                            }
                            ))
                        },
                        class: "test"
                    }) : t.$nextTick((()=>{
                        i()
                    }
                    ))
                },
                paperSettingResubmitTime(e) {
                    return null != e && this.surplussecond > 0
                },
                recoveryTime(e, t) {
                    return this.surplussecond > 0
                },
                CropperFinish(e) {
                    let t = this;
                    t.closeCropper();
                    let i = (0,
                    l.Ll)(e, (0,
                    l.wY)() + ".jpg")
                      , a = new Image;
                    function s(i) {
                        t.$refs.question[t.questuinIndex].IsUploadImg(!0),
                        (0,
                        o.ws)({
                            uploadFile: i
                        }).then((i=>{
                            t.$refs.question[t.questuinIndex].CropperFinish(e, i.extra),
                            t.$refs.question[t.questuinIndex].IsUploadImg(!1)
                        }
                        ))
                    }
                    a.src = e,
                    a.onload = function() {
                        i.size / 1024 > 500 ? (0,
                        l.sU)(i, Math.floor(a.width * Math.sqrt(500 / (i.size / 1024)))).then((e=>{
                            s((0,
                            l.hl)(e, (0,
                            l.wY)() + ".jpg"))
                        }
                        )) : s(i)
                    }
                },
                showimg(e, t, i) {
                    this.isEditImg = !0,
                    this.questuinIndex = t,
                    this.$refs.cropper.init(e, i)
                },
                closeCropper() {
                    this.$refs.question[this.questuinIndex].closeCropper(),
                    this.isEditImg = !1
                },
                showIndexDiscussArea(e, t, i, a) {
                    let s = this
                      , n = document.getElementsByTagName("audio");
                    for (let r = 0; r < n.length; r++)
                        n[r].pause();
                    s.questuinIndex = a,
                    s.contentType = t,
                    s.AskPaperId = s.paperId,
                    s.AskQuestionId = e.id,
                    s.isDiscussArea = !0,
                    s.$refs.discuss.GetAskList(1)
                },
                closeDisussArea(e) {
                    try {
                        this.paperContentData.map((t=>{
                            t.content.id === this.AskQuestionId && (t.content.asked = !!e || this.data.asked,
                            t.content.read = !e)
                        }
                        )),
                        this.$store.commit("c/setCourseContent", this.paperContentData),
                        this.isDiscussArea = !1,
                        this.$refs.question[this.questuinIndex].IsShowDiscussArea(!1)
                    } catch (t) {
                        this.isDiscussArea = !1,
                        this.$refs.question[this.questuinIndex].IsShowDiscussArea(!1)
                    }
                },
                getAudioList() {
                    let e = document.getElementsByTagName("audio");
                    this.$nextTick((()=>{
                        for (let t = 0; t < e.length; t++)
                            e[t].pause()
                    }
                    )),
                    this.playAudio.index >= 0 && this.$refs.question[this.playAudio.index].PausePlay()
                },
                showCollectLayer(e, t, i, a) {
                    let s = this;
                    s.questuinIndex = a,
                    s.contentType = t,
                    s.AskPaperId = s.paperId,
                    s.AskQuestionId = e.id,
                    s.isCollect = !0,
                    (0,
                    o.$Q)({
                        sourceId: e.id,
                        sourceType: t,
                        courseId: s.paperId,
                        type: 1
                    }).then((e=>{
                        s.$refs.collect.GetCollectList(null == e.extra ? [] : e.extra.tagList, 1)
                    }
                    ))
                },
                closeCollectLayer() {
                    let e = this;
                    e.isCollect = !1,
                    e.$refs.question[e.questuinIndex].IsShowCollect(!1)
                },
                choseShareWin() {
                    this.isShareLayer = !1
                },
                shareWindos(e) {
                    let t = this;
                    t.isShareLayer = !0,
                    t.$refs.share.ShareDTOList(e)
                },
                OneselfReviewWindows(e, t, i, a, s, n, r, o, l) {
                    let d = this;
                    d.$refs.review.SetORData(e, t, i, a, s, 0, n, 1, r, o, l),
                    d.isOR = !0
                },
                CloseOneselfReviewWindows(e, t, i, a) {
                    if (this.isOR = !1,
                    !a)
                        return;
                    let s = sessionStorage.getItem("selfReadOverSwitch");
                    1 == s && this.$refs.question[e].setImgStatus(t),
                    setTimeout((()=>{
                        this.getStuAnaswerInfo(this.paperId)
                    }
                    ), 500)
                },
                PlayAudio(e, t) {
                    let i = this;
                    i.audio = null == i.audio ? document.createElement("audio") : i.audio,
                    document.body.appendChild(i.audio),
                    i.playAudio.index >= 0 && i.playid != e.id && i.$refs.question[i.playAudio.index].setPlayid(-1),
                    i.audio.style.display = "none",
                    i.playAudio.index = t,
                    i.playAudio.src.indexOf(e.attachmentLinkAddress) >= 0 ? i.playAudio.play ? (i.audio.pause(),
                    i.playAudio.play = !1,
                    i.playid = -1,
                    i.$refs.question[i.playAudio.index].setPlayid(-1)) : (i.audio.play(),
                    i.playAudio.play = !0,
                    i.playid = e.id,
                    i.$refs.question[i.playAudio.index].setPlayid(i.playid)) : (i.audio.src = "/exam" + e.attachmentLinkAddress,
                    i.audio.play(),
                    i.playid = e.id,
                    i.playAudio.play = !0,
                    i.playAudio.src = i.audio.src,
                    i.$refs.question[i.playAudio.index].setPlayid(i.playid)),
                    i.audio.addEventListener("ended", (function() {
                        i.audio.src = "",
                        i.playid = -1,
                        i.$refs.question[i.playAudio.index].setPlayid(i.playid)
                    }
                    ), !1)
                },
                paperCommenting(e) {
                    let t = this;
                    t.comment.isAllComment = !0;
                    let i = document.body.clientHeight;
                    t.$refs.commentall.getPaperCommenting(t.paperInfo, e, 0, i)
                },
                showCommentBox(e, t) {
                    let i = this;
                    i.comment.isComment = !0,
                    i.$refs.comment.getPaperCommenting(e, t)
                },
                CloseCommentBox() {
                    this.comment.isComment = !1,
                    this.comment.isAllComment = !1
                },
                back() {
                    this.$router.back()
                },
                getPaperFilter(e, t) {
                    let i = this;
                    i.isSelect = t,
                    i.showModal = !1,
                    (0,
                    r.qk)(e).then((e=>{
                        i.paperContentData = e.extra
                    }
                    ))
                },
                OpenPaperFilterWin() {
                    let e = this;
                    e.showModal = !0,
                    e.$refs.filter.getPaperEntities()
                },
                async submitAll(){
                    let answer = document.querySelector('.answerPaper').value.split(" ");
                    let questions = localStorage.getItem("questions").split(",");
                    let paperId = localStorage.getItem("paperId");
                    let newQuestion = localStorage.getItem("newQuestions")==null?{}:JSON.parse(localStorage.getItem("newQuestions"));
                    let promises = [];
                    if(answer.length!==questions.length) alert("题目数量不对");
                    else{
                        for(let i=0;i<questions.length;i++){
                            if(answer[i]=="1" || newQuestion[questions[i]]==answer[i].toUpperCase().split('').join(',')) continue;
                            let url = '/exam/api/student/paper/entity/'+paperId+'/question/'+questions[i];
                            let data = {
                                paperId: paperId,
                                questionId: questions[i],
                                studentAnswer: answer[i].toUpperCase().split('').join(','),
                                resubmitTag: 0,
                                abandonTag: 0
                            }
                            promises.push(fetch(url, {
                                method: 'POST', // 指定请求方法为POST
                                headers: {
                                    'Content-Type': 'application/json' // 告诉服务器请求体是JSON格式
                                },
                                body: JSON.stringify(data) // 将数据对象转换为JSON字符串
                            }).then((()=>{
                                this.$emit("getStuAnaswerInfo", paperId),
                                this.giveUpStatus = !1
                            })).catch(err=>{
                                    setTimeout(null, 500);
                                    fetch(url, {
                                    method: 'POST', // 指定请求方法为POST
                                    headers: {
                                        'Content-Type': 'application/json' // 告诉服务器请求体是JSON格式
                                    },
                                    body: JSON.stringify(data) // 将数据对象转换为JSON字符串
                                }).then((()=>{
                                this.$emit("getAlreadyAnswer", courseId),
                                this.giveUpStatus = !1;

                            })).catch(err=>{
                                    setTimeout(null, 1000);
                                    fetch(url, {
                                    method: 'POST', // 指定请求方法为POST
                                    headers: {
                                        'Content-Type': 'application/json' // 告诉服务器请求体是JSON格式
                                    },
                                    body: JSON.stringify(data) // 将数据对象转换为JSON字符串
                                }).then((()=>{
                                this.$emit("getAlreadyAnswer", courseId),
                                this.giveUpStatus = !1;

                            })).catch(err=>{
                                    alert("题号"+data.questionId+"提交失败。尝试重新提交")
                                    })
                                    })
                            }))
                        }
                        await Promise.all(promises);
                        let url = "/exam/api/student/paper/entity/" + paperId + "/question";
                                    let xhr = new XMLHttpRequest();
                                    xhr.open('GET', url, false);
                                    xhr.send(null);
                                    if (xhr.status === 200) {
                                        let response = JSON.parse(xhr.responseText);
                                        this.alreadyAnswerData = response.extra;
                                        const newQuestion = response.extra.reduce((acc, item) => {
                                          acc[item.questionId] = item.studentAnswer;
                                          return acc;
                                        }, {});
                                        localStorage.setItem("newQuestions",JSON.stringify(newQuestion))
                                    }

                        alert("提交完成，点击手动提交以获取答案");
                    }
                },
                downloadPage(){
                    window.open("/getWebFile?url="+localStorage.getItem('testMatchedURL')+"&courseName="+encodeURI(encodeURI(localStorage.getItem("paperName"))),'_blank');
                },
                getChoiceStatus(){
                    let questions=localStorage.getItem("questions").split(",");
                    fetch("/exam/api/student/paper/entity/"+localStorage.getItem("paperId")+"/question")
                        .then(response => {
                            return response.json(); // 解析JSON数据并返回另一个Promise
                        })
                        .then(data => {
                            let choiceStatus="";
                            const orderMap = new Map();
                            questions.forEach((id, index) => orderMap.set(parseInt(id), index));

                            // 过滤出存在于ids数组中的对象，并存储它们及其在ids中的索引
                            const filtered = [];
                            data.extra.forEach(obj => {
                                if (orderMap.has(obj.questionId)) {
                                    filtered.push({
                                        index: orderMap.get(obj.questionId),
                                        obj
                                    });
                                }
                            });

                            // 按照原始ids数组的顺序排序
                            filtered.sort((a, b) => a.index - b.index);
                            // 提取排序后的对象数组
                            let questionList = filtered.map(item => item.obj);
                            let cnt = 0;
                            for(let i of questionList){
                                choiceStatus+="题号"+i.questionNumber+":"+(i.studentAnswer==null?"未作答":(i.judgeTag===1?"正确":(i.judgeTag===0?(cnt++,"错误"):(cnt++,"半对"))))+"；";
                            };
                            choiceStatus+="错题数量："+cnt;
                            const div = document.querySelector('.choiceStatus');
                            div.textContent = choiceStatus;
                            alert(choiceStatus);
                        })
                },
                getAnswer(){
                    window.open("/downloadAnswers?html="+encodeURI(encodeURI(localStorage.getItem("answers").replace(/&nbsp;/g, '')))+"&name="+encodeURI(encodeURI(localStorage.getItem("paperName"))))
                },
                ChosePaperFilterWin(e) {
                    this.showModal = !1,
                    0 == e && (this.isSelect = !1,
                    this.getPaperInfo(this.paperId))
                }
            }
        }
          , p = c
          , h = i(70713)
          , f = (0,
        h.Z)(p, a, s, !1, null, "c2fceb9c", null)
          , g = f.exports
    },
    37719: function(e) {
        (function(t, i) {
            e.exports = i()
        }
        )(0, (function() {
            "use strict";
            var e = "undefined" === typeof document ? {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return null
                },
                querySelectorAll: function() {
                    return []
                },
                getElementById: function() {
                    return null
                },
                createEvent: function() {
                    return {
                        initEvent: function() {}
                    }
                },
                createElement: function() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            } : document
              , t = "undefined" === typeof window ? {
                document: e,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {}
            } : window
              , i = function(e) {
                for (var t = this, i = 0; i < e.length; i += 1)
                    t[i] = e[i];
                return t.length = e.length,
                this
            };
            function a(a, s) {
                var n = []
                  , r = 0;
                if (a && !s && a instanceof i)
                    return a;
                if (a)
                    if ("string" === typeof a) {
                        var o, l, d = a.trim();
                        if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                            var u = "div";
                            for (0 === d.indexOf("<li") && (u = "ul"),
                            0 === d.indexOf("<tr") && (u = "tbody"),
                            0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (u = "tr"),
                            0 === d.indexOf("<tbody") && (u = "table"),
                            0 === d.indexOf("<option") && (u = "select"),
                            l = e.createElement(u),
                            l.innerHTML = d,
                            r = 0; r < l.childNodes.length; r += 1)
                                n.push(l.childNodes[r])
                        } else
                            for (o = s || "#" !== a[0] || a.match(/[ .<>:~]/) ? (s || e).querySelectorAll(a.trim()) : [e.getElementById(a.trim().split("#")[1])],
                            r = 0; r < o.length; r += 1)
                                o[r] && n.push(o[r])
                    } else if (a.nodeType || a === t || a === e)
                        n.push(a);
                    else if (a.length > 0 && a[0].nodeType)
                        for (r = 0; r < a.length; r += 1)
                            n.push(a[r]);
                return new i(n)
            }
            function s(e) {
                for (var t = [], i = 0; i < e.length; i += 1)
                    -1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }
            function n(e) {
                if ("undefined" === typeof e)
                    return this;
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var a = 0; a < this.length; a += 1)
                        "undefined" !== typeof this[a] && "undefined" !== typeof this[a].classList && this[a].classList.add(t[i]);
                return this
            }
            function r(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var a = 0; a < this.length; a += 1)
                        "undefined" !== typeof this[a] && "undefined" !== typeof this[a].classList && this[a].classList.remove(t[i]);
                return this
            }
            function o(e) {
                return !!this[0] && this[0].classList.contains(e)
            }
            function l(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var a = 0; a < this.length; a += 1)
                        "undefined" !== typeof this[a] && "undefined" !== typeof this[a].classList && this[a].classList.toggle(t[i]);
                return this
            }
            function d(e, t) {
                var i = arguments;
                if (1 === arguments.length && "string" === typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (var a = 0; a < this.length; a += 1)
                    if (2 === i.length)
                        this[a].setAttribute(e, t);
                    else
                        for (var s in e)
                            this[a][s] = e[s],
                            this[a].setAttribute(s, e[s]);
                return this
            }
            function u(e) {
                for (var t = 0; t < this.length; t += 1)
                    this[t].removeAttribute(e);
                return this
            }
            function c(e, t) {
                var i;
                if ("undefined" !== typeof t) {
                    for (var a = 0; a < this.length; a += 1)
                        i = this[a],
                        i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                        i.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (i = this[0],
                i) {
                    if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                        return i.dom7ElementDataStorage[e];
                    var s = i.getAttribute("data-" + e);
                    return s || void 0
                }
            }
            function p(e) {
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransform = e,
                    i.transform = e
                }
                return this
            }
            function h(e) {
                "string" !== typeof e && (e += "ms");
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransitionDuration = e,
                    i.transitionDuration = e
                }
                return this
            }
            function f() {
                var e, t = [], i = arguments.length;
                while (i--)
                    t[i] = arguments[i];
                var s = t[0]
                  , n = t[1]
                  , r = t[2]
                  , o = t[3];
                function l(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if (i.indexOf(e) < 0 && i.unshift(e),
                        a(t).is(n))
                            r.apply(t, i);
                        else
                            for (var s = a(t).parents(), o = 0; o < s.length; o += 1)
                                a(s[o]).is(n) && r.apply(s[o], i)
                    }
                }
                function d(e) {
                    var t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e),
                    r.apply(this, t)
                }
                "function" === typeof t[1] && (e = t,
                s = e[0],
                r = e[1],
                o = e[2],
                n = void 0),
                o || (o = !1);
                for (var u, c = s.split(" "), p = 0; p < this.length; p += 1) {
                    var h = this[p];
                    if (n)
                        for (u = 0; u < c.length; u += 1) {
                            var f = c[u];
                            h.dom7LiveListeners || (h.dom7LiveListeners = {}),
                            h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []),
                            h.dom7LiveListeners[f].push({
                                listener: r,
                                proxyListener: l
                            }),
                            h.addEventListener(f, l, o)
                        }
                    else
                        for (u = 0; u < c.length; u += 1) {
                            var g = c[u];
                            h.dom7Listeners || (h.dom7Listeners = {}),
                            h.dom7Listeners[g] || (h.dom7Listeners[g] = []),
                            h.dom7Listeners[g].push({
                                listener: r,
                                proxyListener: d
                            }),
                            h.addEventListener(g, d, o)
                        }
                }
                return this
            }
            function g() {
                var e, t = [], i = arguments.length;
                while (i--)
                    t[i] = arguments[i];
                var a = t[0]
                  , s = t[1]
                  , n = t[2]
                  , r = t[3];
                "function" === typeof t[1] && (e = t,
                a = e[0],
                n = e[1],
                r = e[2],
                s = void 0),
                r || (r = !1);
                for (var o = a.split(" "), l = 0; l < o.length; l += 1)
                    for (var d = o[l], u = 0; u < this.length; u += 1) {
                        var c = this[u]
                          , p = void 0;
                        if (!s && c.dom7Listeners ? p = c.dom7Listeners[d] : s && c.dom7LiveListeners && (p = c.dom7LiveListeners[d]),
                        p && p.length)
                            for (var h = p.length - 1; h >= 0; h -= 1) {
                                var f = p[h];
                                n && f.listener === n || n && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === n ? (c.removeEventListener(d, f.proxyListener, r),
                                p.splice(h, 1)) : n || (c.removeEventListener(d, f.proxyListener, r),
                                p.splice(h, 1))
                            }
                    }
                return this
            }
            function m() {
                var i = []
                  , a = arguments.length;
                while (a--)
                    i[a] = arguments[a];
                for (var s = i[0].split(" "), n = i[1], r = 0; r < s.length; r += 1)
                    for (var o = s[r], l = 0; l < this.length; l += 1) {
                        var d = this[l]
                          , u = void 0;
                        try {
                            u = new t.CustomEvent(o,{
                                detail: n,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (c) {
                            u = e.createEvent("Event"),
                            u.initEvent(o, !0, !0),
                            u.detail = n
                        }
                        d.dom7EventData = i.filter((function(e, t) {
                            return t > 0
                        }
                        )),
                        d.dispatchEvent(u),
                        d.dom7EventData = [],
                        delete d.dom7EventData
                    }
                return this
            }
            function v(e) {
                var t, i = ["webkitTransitionEnd", "transitionend"], a = this;
                function s(n) {
                    if (n.target === this)
                        for (e.call(this, n),
                        t = 0; t < i.length; t += 1)
                            a.off(i[t], s)
                }
                if (e)
                    for (t = 0; t < i.length; t += 1)
                        a.on(i[t], s);
                return this
            }
            function y(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            }
            function w(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            }
            function b() {
                if (this.length > 0) {
                    var i = this[0]
                      , a = i.getBoundingClientRect()
                      , s = e.body
                      , n = i.clientTop || s.clientTop || 0
                      , r = i.clientLeft || s.clientLeft || 0
                      , o = i === t ? t.scrollY : i.scrollTop
                      , l = i === t ? t.scrollX : i.scrollLeft;
                    return {
                        top: a.top + o - n,
                        left: a.left + l - r
                    }
                }
                return null
            }
            function x() {
                return this[0] ? t.getComputedStyle(this[0], null) : {}
            }
            function C(e, i) {
                var a;
                if (1 === arguments.length) {
                    if ("string" !== typeof e) {
                        for (a = 0; a < this.length; a += 1)
                            for (var s in e)
                                this[a].style[s] = e[s];
                        return this
                    }
                    if (this[0])
                        return t.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" === typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        this[a].style[e] = i;
                    return this
                }
                return this
            }
            function T(e) {
                if (!e)
                    return this;
                for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t]))
                        return this;
                return this
            }
            function S(e) {
                if ("undefined" === typeof e)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t += 1)
                    this[t].innerHTML = e;
                return this
            }
            function I(e) {
                if ("undefined" === typeof e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1)
                    this[t].textContent = e;
                return this
            }
            function k(s) {
                var n, r, o = this[0];
                if (!o || "undefined" === typeof s)
                    return !1;
                if ("string" === typeof s) {
                    if (o.matches)
                        return o.matches(s);
                    if (o.webkitMatchesSelector)
                        return o.webkitMatchesSelector(s);
                    if (o.msMatchesSelector)
                        return o.msMatchesSelector(s);
                    for (n = a(s),
                    r = 0; r < n.length; r += 1)
                        if (n[r] === o)
                            return !0;
                    return !1
                }
                if (s === e)
                    return o === e;
                if (s === t)
                    return o === t;
                if (s.nodeType || s instanceof i) {
                    for (n = s.nodeType ? [s] : s,
                    r = 0; r < n.length; r += 1)
                        if (n[r] === o)
                            return !0;
                    return !1
                }
                return !1
            }
            function E() {
                var e, t = this[0];
                if (t) {
                    e = 0;
                    while (null !== (t = t.previousSibling))
                        1 === t.nodeType && (e += 1);
                    return e
                }
            }
            function D(e) {
                if ("undefined" === typeof e)
                    return this;
                var t, a = this.length;
                return e > a - 1 ? new i([]) : e < 0 ? (t = a + e,
                new i(t < 0 ? [] : [this[t]])) : new i([this[e]])
            }
            function L() {
                var t, a = [], s = arguments.length;
                while (s--)
                    a[s] = arguments[s];
                for (var n = 0; n < a.length; n += 1) {
                    t = a[n];
                    for (var r = 0; r < this.length; r += 1)
                        if ("string" === typeof t) {
                            var o = e.createElement("div");
                            o.innerHTML = t;
                            while (o.firstChild)
                                this[r].appendChild(o.firstChild)
                        } else if (t instanceof i)
                            for (var l = 0; l < t.length; l += 1)
                                this[r].appendChild(t[l]);
                        else
                            this[r].appendChild(t)
                }
                return this
            }
            function A(t) {
                var a, s;
                for (a = 0; a < this.length; a += 1)
                    if ("string" === typeof t) {
                        var n = e.createElement("div");
                        for (n.innerHTML = t,
                        s = n.childNodes.length - 1; s >= 0; s -= 1)
                            this[a].insertBefore(n.childNodes[s], this[a].childNodes[0])
                    } else if (t instanceof i)
                        for (s = 0; s < t.length; s += 1)
                            this[a].insertBefore(t[s], this[a].childNodes[0]);
                    else
                        this[a].insertBefore(t, this[a].childNodes[0]);
                return this
            }
            function _(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
            }
            function P(e) {
                var t = []
                  , s = this[0];
                if (!s)
                    return new i([]);
                while (s.nextElementSibling) {
                    var n = s.nextElementSibling;
                    e ? a(n).is(e) && t.push(n) : t.push(n),
                    s = n
                }
                return new i(t)
            }
            function M(e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e ? t.previousElementSibling && a(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
                }
                return new i([])
            }
            function O(e) {
                var t = []
                  , s = this[0];
                if (!s)
                    return new i([]);
                while (s.previousElementSibling) {
                    var n = s.previousElementSibling;
                    e ? a(n).is(e) && t.push(n) : t.push(n),
                    s = n
                }
                return new i(t)
            }
            function $(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    null !== this[i].parentNode && (e ? a(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return a(s(t))
            }
            function z(e) {
                for (var t = [], i = 0; i < this.length; i += 1) {
                    var n = this[i].parentNode;
                    while (n)
                        e ? a(n).is(e) && t.push(n) : t.push(n),
                        n = n.parentNode
                }
                return a(s(t))
            }
            function R(e) {
                var t = this;
                return "undefined" === typeof e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)),
                t)
            }
            function B(e) {
                for (var t = [], a = 0; a < this.length; a += 1)
                    for (var s = this[a].querySelectorAll(e), n = 0; n < s.length; n += 1)
                        t.push(s[n]);
                return new i(t)
            }
            function N(e) {
                for (var t = [], n = 0; n < this.length; n += 1)
                    for (var r = this[n].childNodes, o = 0; o < r.length; o += 1)
                        e ? 1 === r[o].nodeType && a(r[o]).is(e) && t.push(r[o]) : 1 === r[o].nodeType && t.push(r[o]);
                return new i(s(t))
            }
            function j() {
                for (var e = 0; e < this.length; e += 1)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
            function q() {
                var e = []
                  , t = arguments.length;
                while (t--)
                    e[t] = arguments[t];
                var i, s, n = this;
                for (i = 0; i < e.length; i += 1) {
                    var r = a(e[i]);
                    for (s = 0; s < r.length; s += 1)
                        n[n.length] = r[s],
                        n.length += 1
                }
                return n
            }
            a.fn = i.prototype,
            a.Class = i,
            a.Dom7 = i;
            var Q = {
                addClass: n,
                removeClass: r,
                hasClass: o,
                toggleClass: l,
                attr: d,
                removeAttr: u,
                data: c,
                transform: p,
                transition: h,
                on: f,
                off: g,
                trigger: m,
                transitionEnd: v,
                outerWidth: y,
                outerHeight: w,
                offset: b,
                css: C,
                each: T,
                html: S,
                text: I,
                is: k,
                index: E,
                eq: D,
                append: L,
                prepend: A,
                next: _,
                nextAll: P,
                prev: M,
                prevAll: O,
                parent: $,
                parents: z,
                closest: R,
                find: B,
                children: N,
                remove: j,
                add: q,
                styles: x
            };
            Object.keys(Q).forEach((function(e) {
                a.fn[e] = a.fn[e] || Q[e]
            }
            ));
            var F = {
                deleteProps: function(e) {
                    var t = e;
                    Object.keys(t).forEach((function(e) {
                        try {
                            t[e] = null
                        } catch (i) {}
                        try {
                            delete t[e]
                        } catch (i) {}
                    }
                    ))
                },
                nextTick: function(e, t) {
                    return void 0 === t && (t = 0),
                    setTimeout(e, t)
                },
                now: function() {
                    return Date.now()
                },
                getTranslate: function(e, i) {
                    var a, s, n;
                    void 0 === i && (i = "x");
                    var r = t.getComputedStyle(e, null);
                    return t.WebKitCSSMatrix ? (s = r.transform || r.webkitTransform,
                    s.split(",").length > 6 && (s = s.split(", ").map((function(e) {
                        return e.replace(",", ".")
                    }
                    )).join(", ")),
                    n = new t.WebKitCSSMatrix("none" === s ? "" : s)) : (n = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                    a = n.toString().split(",")),
                    "x" === i && (s = t.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
                    "y" === i && (s = t.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
                    s || 0
                },
                parseUrlQuery: function(e) {
                    var i, a, s, n, r = {}, o = e || t.location.href;
                    if ("string" === typeof o && o.length)
                        for (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "",
                        a = o.split("&").filter((function(e) {
                            return "" !== e
                        }
                        )),
                        n = a.length,
                        i = 0; i < n; i += 1)
                            s = a[i].replace(/#\S+/g, "").split("="),
                            r[decodeURIComponent(s[0])] = "undefined" === typeof s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                    return r
                },
                isObject: function(e) {
                    return "object" === typeof e && null !== e && e.constructor && e.constructor === Object
                },
                extend: function() {
                    var e = []
                      , t = arguments.length;
                    while (t--)
                        e[t] = arguments[t];
                    for (var i = Object(e[0]), a = 1; a < e.length; a += 1) {
                        var s = e[a];
                        if (void 0 !== s && null !== s)
                            for (var n = Object.keys(Object(s)), r = 0, o = n.length; r < o; r += 1) {
                                var l = n[r]
                                  , d = Object.getOwnPropertyDescriptor(s, l);
                                void 0 !== d && d.enumerable && (F.isObject(i[l]) && F.isObject(s[l]) ? F.extend(i[l], s[l]) : !F.isObject(i[l]) && F.isObject(s[l]) ? (i[l] = {},
                                F.extend(i[l], s[l])) : i[l] = s[l])
                            }
                    }
                    return i
                }
            }
              , G = function() {
                var i = e.createElement("div");
                return {
                    touch: t.Modernizr && !0 === t.Modernizr.touch || function() {
                        return !!(t.navigator.maxTouchPoints > 0 || "ontouchstart"in t || t.DocumentTouch && e instanceof t.DocumentTouch)
                    }(),
                    pointerEvents: !!(t.navigator.pointerEnabled || t.PointerEvent || "maxTouchPoints"in t.navigator && t.navigator.maxTouchPoints > 0),
                    prefixedPointerEvents: !!t.navigator.msPointerEnabled,
                    transition: function() {
                        var e = i.style;
                        return "transition"in e || "webkitTransition"in e || "MozTransition"in e
                    }(),
                    transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || function() {
                        var e = i.style;
                        return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
                    }(),
                    flexbox: function() {
                        for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                            if (t[a]in e)
                                return !0;
                        return !1
                    }(),
                    observer: function() {
                        return "MutationObserver"in t || "WebkitMutationObserver"in t
                    }(),
                    passiveListener: function() {
                        var e = !1;
                        try {
                            var i = Object.defineProperty({}, "passive", {
                                get: function() {
                                    e = !0
                                }
                            });
                            t.addEventListener("testPassiveListener", null, i)
                        } catch (a) {}
                        return e
                    }(),
                    gestures: function() {
                        return "ongesturestart"in t
                    }()
                }
            }()
              , V = function() {
                function e() {
                    var e = t.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }
                return {
                    isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
                    isEdge: !!t.navigator.userAgent.match(/Edge/g),
                    isSafari: e(),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
                }
            }()
              , Y = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e,
                t.eventsListeners = {},
                t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
                    t.on(e, t.params.on[e])
                }
                ))
            }
              , H = {
                components: {
                    configurable: !0
                }
            };
            function U() {
                var e, t, i = this, a = i.$el;
                e = "undefined" !== typeof i.params.width ? i.params.width : a[0].clientWidth,
                t = "undefined" !== typeof i.params.height ? i.params.height : a[0].clientHeight,
                0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(a.css("padding-left"), 10) - parseInt(a.css("padding-right"), 10),
                t = t - parseInt(a.css("padding-top"), 10) - parseInt(a.css("padding-bottom"), 10),
                F.extend(i, {
                    width: e,
                    height: t,
                    size: i.isHorizontal() ? e : t
                }))
            }
            function X() {
                var e = this
                  , i = e.params
                  , a = e.$wrapperEl
                  , s = e.size
                  , n = e.rtlTranslate
                  , r = e.wrongRTL
                  , o = e.virtual && i.virtual.enabled
                  , l = o ? e.virtual.slides.length : e.slides.length
                  , d = a.children("." + e.params.slideClass)
                  , u = o ? e.virtual.slides.length : d.length
                  , c = []
                  , p = []
                  , h = []
                  , f = i.slidesOffsetBefore;
                "function" === typeof f && (f = i.slidesOffsetBefore.call(e));
                var g = i.slidesOffsetAfter;
                "function" === typeof g && (g = i.slidesOffsetAfter.call(e));
                var m = e.snapGrid.length
                  , v = e.snapGrid.length
                  , y = i.spaceBetween
                  , w = -f
                  , b = 0
                  , x = 0;
                if ("undefined" !== typeof s) {
                    var C, T;
                    "string" === typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s),
                    e.virtualSize = -y,
                    n ? d.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : d.css({
                        marginRight: "",
                        marginBottom: ""
                    }),
                    i.slidesPerColumn > 1 && (C = Math.floor(u / i.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn,
                    "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (C = Math.max(C, i.slidesPerView * i.slidesPerColumn)));
                    for (var S, I = i.slidesPerColumn, k = C / I, E = Math.floor(u / i.slidesPerColumn), D = 0; D < u; D += 1) {
                        T = 0;
                        var L = d.eq(D);
                        if (i.slidesPerColumn > 1) {
                            var A = void 0
                              , _ = void 0
                              , P = void 0;
                            if ("column" === i.slidesPerColumnFill || "row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                                if ("column" === i.slidesPerColumnFill)
                                    _ = Math.floor(D / I),
                                    P = D - _ * I,
                                    (_ > E || _ === E && P === I - 1) && (P += 1,
                                    P >= I && (P = 0,
                                    _ += 1));
                                else {
                                    var M = Math.floor(D / i.slidesPerGroup);
                                    P = Math.floor(D / i.slidesPerView) - M * i.slidesPerColumn,
                                    _ = D - P * i.slidesPerView - M * i.slidesPerView
                                }
                                A = _ + P * C / I,
                                L.css({
                                    "-webkit-box-ordinal-group": A,
                                    "-moz-box-ordinal-group": A,
                                    "-ms-flex-order": A,
                                    "-webkit-order": A,
                                    order: A
                                })
                            } else
                                P = Math.floor(D / k),
                                _ = D - P * k;
                            L.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== P && i.spaceBetween && i.spaceBetween + "px").attr("data-swiper-column", _).attr("data-swiper-row", P)
                        }
                        if ("none" !== L.css("display")) {
                            if ("auto" === i.slidesPerView) {
                                var O = t.getComputedStyle(L[0], null)
                                  , $ = L[0].style.transform
                                  , z = L[0].style.webkitTransform;
                                if ($ && (L[0].style.transform = "none"),
                                z && (L[0].style.webkitTransform = "none"),
                                i.roundLengths)
                                    T = e.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);
                                else if (e.isHorizontal()) {
                                    var R = parseFloat(O.getPropertyValue("width"))
                                      , B = parseFloat(O.getPropertyValue("padding-left"))
                                      , N = parseFloat(O.getPropertyValue("padding-right"))
                                      , j = parseFloat(O.getPropertyValue("margin-left"))
                                      , q = parseFloat(O.getPropertyValue("margin-right"))
                                      , Q = O.getPropertyValue("box-sizing");
                                    T = Q && "border-box" === Q && !V.isIE ? R + j + q : R + B + N + j + q
                                } else {
                                    var Y = parseFloat(O.getPropertyValue("height"))
                                      , H = parseFloat(O.getPropertyValue("padding-top"))
                                      , U = parseFloat(O.getPropertyValue("padding-bottom"))
                                      , X = parseFloat(O.getPropertyValue("margin-top"))
                                      , W = parseFloat(O.getPropertyValue("margin-bottom"))
                                      , K = O.getPropertyValue("box-sizing");
                                    T = K && "border-box" === K && !V.isIE ? Y + X + W : Y + H + U + X + W
                                }
                                $ && (L[0].style.transform = $),
                                z && (L[0].style.webkitTransform = z),
                                i.roundLengths && (T = Math.floor(T))
                            } else
                                T = (s - (i.slidesPerView - 1) * y) / i.slidesPerView,
                                i.roundLengths && (T = Math.floor(T)),
                                d[D] && (e.isHorizontal() ? d[D].style.width = T + "px" : d[D].style.height = T + "px");
                            d[D] && (d[D].swiperSlideSize = T),
                            h.push(T),
                            i.centeredSlides ? (w = w + T / 2 + b / 2 + y,
                            0 === b && 0 !== D && (w = w - s / 2 - y),
                            0 === D && (w = w - s / 2 - y),
                            Math.abs(w) < .001 && (w = 0),
                            i.roundLengths && (w = Math.floor(w)),
                            x % i.slidesPerGroup === 0 && c.push(w),
                            p.push(w)) : (i.roundLengths && (w = Math.floor(w)),
                            x % i.slidesPerGroup === 0 && c.push(w),
                            p.push(w),
                            w = w + T + y),
                            e.virtualSize += T + y,
                            b = T,
                            x += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, s) + g,
                    n && r && ("slide" === i.effect || "coverflow" === i.effect) && a.css({
                        width: e.virtualSize + i.spaceBetween + "px"
                    }),
                    G.flexbox && !i.setWrapperSize || (e.isHorizontal() ? a.css({
                        width: e.virtualSize + i.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + i.spaceBetween + "px"
                    })),
                    i.slidesPerColumn > 1 && (e.virtualSize = (T + i.spaceBetween) * C,
                    e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween,
                    e.isHorizontal() ? a.css({
                        width: e.virtualSize + i.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + i.spaceBetween + "px"
                    }),
                    i.centeredSlides)) {
                        S = [];
                        for (var Z = 0; Z < c.length; Z += 1) {
                            var J = c[Z];
                            i.roundLengths && (J = Math.floor(J)),
                            c[Z] < e.virtualSize + c[0] && S.push(J)
                        }
                        c = S
                    }
                    if (!i.centeredSlides) {
                        S = [];
                        for (var ee = 0; ee < c.length; ee += 1) {
                            var te = c[ee];
                            i.roundLengths && (te = Math.floor(te)),
                            c[ee] <= e.virtualSize - s && S.push(te)
                        }
                        c = S,
                        Math.floor(e.virtualSize - s) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - s)
                    }
                    if (0 === c.length && (c = [0]),
                    0 !== i.spaceBetween && (e.isHorizontal() ? n ? d.css({
                        marginLeft: y + "px"
                    }) : d.css({
                        marginRight: y + "px"
                    }) : d.css({
                        marginBottom: y + "px"
                    })),
                    i.centerInsufficientSlides) {
                        var ie = 0;
                        if (h.forEach((function(e) {
                            ie += e + (i.spaceBetween ? i.spaceBetween : 0)
                        }
                        )),
                        ie -= i.spaceBetween,
                        ie < s) {
                            var ae = (s - ie) / 2;
                            c.forEach((function(e, t) {
                                c[t] = e - ae
                            }
                            )),
                            p.forEach((function(e, t) {
                                p[t] = e + ae
                            }
                            ))
                        }
                    }
                    F.extend(e, {
                        slides: d,
                        snapGrid: c,
                        slidesGrid: p,
                        slidesSizesGrid: h
                    }),
                    u !== l && e.emit("slidesLengthChange"),
                    c.length !== m && (e.params.watchOverflow && e.checkOverflow(),
                    e.emit("snapGridLengthChange")),
                    p.length !== v && e.emit("slidesGridLengthChange"),
                    (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            }
            function W(e) {
                var t, i = this, a = [], s = 0;
                if ("number" === typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed),
                "auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                        var n = i.activeIndex + t;
                        if (n > i.slides.length)
                            break;
                        a.push(i.slides.eq(n)[0])
                    }
                else
                    a.push(i.slides.eq(i.activeIndex)[0]);
                for (t = 0; t < a.length; t += 1)
                    if ("undefined" !== typeof a[t]) {
                        var r = a[t].offsetHeight;
                        s = r > s ? r : s
                    }
                s && i.$wrapperEl.css("height", s + "px")
            }
            function K() {
                for (var e = this, t = e.slides, i = 0; i < t.length; i += 1)
                    t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
            }
            function Z(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this
                  , i = t.params
                  , s = t.slides
                  , n = t.rtlTranslate;
                if (0 !== s.length) {
                    "undefined" === typeof s[0].swiperSlideOffset && t.updateSlidesOffset();
                    var r = -e;
                    n && (r = e),
                    s.removeClass(i.slideVisibleClass),
                    t.visibleSlidesIndexes = [],
                    t.visibleSlides = [];
                    for (var o = 0; o < s.length; o += 1) {
                        var l = s[o]
                          , d = (r + (i.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
                        if (i.watchSlidesVisibility) {
                            var u = -(r - l.swiperSlideOffset)
                              , c = u + t.slidesSizesGrid[o]
                              , p = u >= 0 && u < t.size - 1 || c > 1 && c <= t.size || u <= 0 && c >= t.size;
                            p && (t.visibleSlides.push(l),
                            t.visibleSlidesIndexes.push(o),
                            s.eq(o).addClass(i.slideVisibleClass))
                        }
                        l.progress = n ? -d : d
                    }
                    t.visibleSlides = a(t.visibleSlides)
                }
            }
            function J(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this
                  , i = t.params
                  , a = t.maxTranslate() - t.minTranslate()
                  , s = t.progress
                  , n = t.isBeginning
                  , r = t.isEnd
                  , o = n
                  , l = r;
                0 === a ? (s = 0,
                n = !0,
                r = !0) : (s = (e - t.minTranslate()) / a,
                n = s <= 0,
                r = s >= 1),
                F.extend(t, {
                    progress: s,
                    isBeginning: n,
                    isEnd: r
                }),
                (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e),
                n && !o && t.emit("reachBeginning toEdge"),
                r && !l && t.emit("reachEnd toEdge"),
                (o && !n || l && !r) && t.emit("fromEdge"),
                t.emit("progress", s)
            }
            function ee() {
                var e, t = this, i = t.slides, a = t.params, s = t.$wrapperEl, n = t.activeIndex, r = t.realIndex, o = t.virtual && a.virtual.enabled;
                i.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass),
                e = o ? t.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + n + '"]') : i.eq(n),
                e.addClass(a.slideActiveClass),
                a.loop && (e.hasClass(a.slideDuplicateClass) ? s.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass) : s.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));
                var l = e.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
                a.loop && 0 === l.length && (l = i.eq(0),
                l.addClass(a.slideNextClass));
                var d = e.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
                a.loop && 0 === d.length && (d = i.eq(-1),
                d.addClass(a.slidePrevClass)),
                a.loop && (l.hasClass(a.slideDuplicateClass) ? s.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : s.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass),
                d.hasClass(a.slideDuplicateClass) ? s.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : s.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass))
            }
            function te(e) {
                var t, i = this, a = i.rtlTranslate ? i.translate : -i.translate, s = i.slidesGrid, n = i.snapGrid, r = i.params, o = i.activeIndex, l = i.realIndex, d = i.snapIndex, u = e;
                if ("undefined" === typeof u) {
                    for (var c = 0; c < s.length; c += 1)
                        "undefined" !== typeof s[c + 1] ? a >= s[c] && a < s[c + 1] - (s[c + 1] - s[c]) / 2 ? u = c : a >= s[c] && a < s[c + 1] && (u = c + 1) : a >= s[c] && (u = c);
                    r.normalizeSlideIndex && (u < 0 || "undefined" === typeof u) && (u = 0)
                }
                if (t = n.indexOf(a) >= 0 ? n.indexOf(a) : Math.floor(u / r.slidesPerGroup),
                t >= n.length && (t = n.length - 1),
                u !== o) {
                    var p = parseInt(i.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                    F.extend(i, {
                        snapIndex: t,
                        realIndex: p,
                        previousIndex: o,
                        activeIndex: u
                    }),
                    i.emit("activeIndexChange"),
                    i.emit("snapIndexChange"),
                    l !== p && i.emit("realIndexChange"),
                    (i.initialized || i.runCallbacksOnInit) && i.emit("slideChange")
                } else
                    t !== d && (i.snapIndex = t,
                    i.emit("snapIndexChange"))
            }
            function ie(e) {
                var t = this
                  , i = t.params
                  , s = a(e.target).closest("." + i.slideClass)[0]
                  , n = !1;
                if (s)
                    for (var r = 0; r < t.slides.length; r += 1)
                        t.slides[r] === s && (n = !0);
                if (!s || !n)
                    return t.clickedSlide = void 0,
                    void (t.clickedIndex = void 0);
                t.clickedSlide = s,
                t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = a(s).index(),
                i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
            Y.prototype.on = function(e, t, i) {
                var a = this;
                if ("function" !== typeof t)
                    return a;
                var s = i ? "unshift" : "push";
                return e.split(" ").forEach((function(e) {
                    a.eventsListeners[e] || (a.eventsListeners[e] = []),
                    a.eventsListeners[e][s](t)
                }
                )),
                a
            }
            ,
            Y.prototype.once = function(e, t, i) {
                var a = this;
                if ("function" !== typeof t)
                    return a;
                function s() {
                    var i = []
                      , n = arguments.length;
                    while (n--)
                        i[n] = arguments[n];
                    t.apply(a, i),
                    a.off(e, s),
                    s.f7proxy && delete s.f7proxy
                }
                return s.f7proxy = t,
                a.on(e, s, i)
            }
            ,
            Y.prototype.off = function(e, t) {
                var i = this;
                return i.eventsListeners ? (e.split(" ").forEach((function(e) {
                    "undefined" === typeof t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(a, s) {
                        (a === t || a.f7proxy && a.f7proxy === t) && i.eventsListeners[e].splice(s, 1)
                    }
                    ))
                }
                )),
                i) : i
            }
            ,
            Y.prototype.emit = function() {
                var e = []
                  , t = arguments.length;
                while (t--)
                    e[t] = arguments[t];
                var i, a, s, n = this;
                if (!n.eventsListeners)
                    return n;
                "string" === typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
                a = e.slice(1, e.length),
                s = n) : (i = e[0].events,
                a = e[0].data,
                s = e[0].context || n);
                var r = Array.isArray(i) ? i : i.split(" ");
                return r.forEach((function(e) {
                    if (n.eventsListeners && n.eventsListeners[e]) {
                        var t = [];
                        n.eventsListeners[e].forEach((function(e) {
                            t.push(e)
                        }
                        )),
                        t.forEach((function(e) {
                            e.apply(s, a)
                        }
                        ))
                    }
                }
                )),
                n
            }
            ,
            Y.prototype.useModulesParams = function(e) {
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function(i) {
                    var a = t.modules[i];
                    a.params && F.extend(e, a.params)
                }
                ))
            }
            ,
            Y.prototype.useModules = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function(i) {
                    var a = t.modules[i]
                      , s = e[i] || {};
                    a.instance && Object.keys(a.instance).forEach((function(e) {
                        var i = a.instance[e];
                        t[e] = "function" === typeof i ? i.bind(t) : i
                    }
                    )),
                    a.on && t.on && Object.keys(a.on).forEach((function(e) {
                        t.on(e, a.on[e])
                    }
                    )),
                    a.create && a.create.bind(t)(s)
                }
                ))
            }
            ,
            H.components.set = function(e) {
                var t = this;
                t.use && t.use(e)
            }
            ,
            Y.installModule = function(e) {
                var t = []
                  , i = arguments.length - 1;
                while (i-- > 0)
                    t[i] = arguments[i + 1];
                var a = this;
                a.prototype.modules || (a.prototype.modules = {});
                var s = e.name || Object.keys(a.prototype.modules).length + "_" + F.now();
                return a.prototype.modules[s] = e,
                e.proto && Object.keys(e.proto).forEach((function(t) {
                    a.prototype[t] = e.proto[t]
                }
                )),
                e.static && Object.keys(e.static).forEach((function(t) {
                    a[t] = e.static[t]
                }
                )),
                e.install && e.install.apply(a, t),
                a
            }
            ,
            Y.use = function(e) {
                var t = []
                  , i = arguments.length - 1;
                while (i-- > 0)
                    t[i] = arguments[i + 1];
                var a = this;
                return Array.isArray(e) ? (e.forEach((function(e) {
                    return a.installModule(e)
                }
                )),
                a) : a.installModule.apply(a, [e].concat(t))
            }
            ,
            Object.defineProperties(Y, H);
            var ae = {
                updateSize: U,
                updateSlides: X,
                updateAutoHeight: W,
                updateSlidesOffset: K,
                updateSlidesProgress: Z,
                updateProgress: J,
                updateSlidesClasses: ee,
                updateActiveIndex: te,
                updateClickedSlide: ie
            };
            function se(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this
                  , i = t.params
                  , a = t.rtlTranslate
                  , s = t.translate
                  , n = t.$wrapperEl;
                if (i.virtualTranslate)
                    return a ? -s : s;
                var r = F.getTranslate(n[0], e);
                return a && (r = -r),
                r || 0
            }
            function ne(e, t) {
                var i, a = this, s = a.rtlTranslate, n = a.params, r = a.$wrapperEl, o = a.progress, l = 0, d = 0, u = 0;
                a.isHorizontal() ? l = s ? -e : e : d = e,
                n.roundLengths && (l = Math.floor(l),
                d = Math.floor(d)),
                n.virtualTranslate || (G.transforms3d ? r.transform("translate3d(" + l + "px, " + d + "px, " + u + "px)") : r.transform("translate(" + l + "px, " + d + "px)")),
                a.previousTranslate = a.translate,
                a.translate = a.isHorizontal() ? l : d;
                var c = a.maxTranslate() - a.minTranslate();
                i = 0 === c ? 0 : (e - a.minTranslate()) / c,
                i !== o && a.updateProgress(e),
                a.emit("setTranslate", a.translate, t)
            }
            function re() {
                return -this.snapGrid[0]
            }
            function oe() {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
            var le = {
                getTranslate: se,
                setTranslate: ne,
                minTranslate: re,
                maxTranslate: oe
            };
            function de(e, t) {
                var i = this;
                i.$wrapperEl.transition(e),
                i.emit("setTransition", e, t)
            }
            function ue(e, t) {
                void 0 === e && (e = !0);
                var i = this
                  , a = i.activeIndex
                  , s = i.params
                  , n = i.previousIndex;
                s.autoHeight && i.updateAutoHeight();
                var r = t;
                if (r || (r = a > n ? "next" : a < n ? "prev" : "reset"),
                i.emit("transitionStart"),
                e && a !== n) {
                    if ("reset" === r)
                        return void i.emit("slideResetTransitionStart");
                    i.emit("slideChangeTransitionStart"),
                    "next" === r ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                }
            }
            function ce(e, t) {
                void 0 === e && (e = !0);
                var i = this
                  , a = i.activeIndex
                  , s = i.previousIndex;
                i.animating = !1,
                i.setTransition(0);
                var n = t;
                if (n || (n = a > s ? "next" : a < s ? "prev" : "reset"),
                i.emit("transitionEnd"),
                e && a !== s) {
                    if ("reset" === n)
                        return void i.emit("slideResetTransitionEnd");
                    i.emit("slideChangeTransitionEnd"),
                    "next" === n ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                }
            }
            var pe = {
                setTransition: de,
                transitionStart: ue,
                transitionEnd: ce
            };
            function he(e, t, i, a) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
                var s = this
                  , n = e;
                n < 0 && (n = 0);
                var r = s.params
                  , o = s.snapGrid
                  , l = s.slidesGrid
                  , d = s.previousIndex
                  , u = s.activeIndex
                  , c = s.rtlTranslate;
                if (s.animating && r.preventInteractionOnTransition)
                    return !1;
                var p = Math.floor(n / r.slidesPerGroup);
                p >= o.length && (p = o.length - 1),
                (u || r.initialSlide || 0) === (d || 0) && i && s.emit("beforeSlideChangeStart");
                var h, f = -o[p];
                if (s.updateProgress(f),
                r.normalizeSlideIndex)
                    for (var g = 0; g < l.length; g += 1)
                        -Math.floor(100 * f) >= Math.floor(100 * l[g]) && (n = g);
                if (s.initialized && n !== u) {
                    if (!s.allowSlideNext && f < s.translate && f < s.minTranslate())
                        return !1;
                    if (!s.allowSlidePrev && f > s.translate && f > s.maxTranslate() && (u || 0) !== n)
                        return !1
                }
                return h = n > u ? "next" : n < u ? "prev" : "reset",
                c && -f === s.translate || !c && f === s.translate ? (s.updateActiveIndex(n),
                r.autoHeight && s.updateAutoHeight(),
                s.updateSlidesClasses(),
                "slide" !== r.effect && s.setTranslate(f),
                "reset" !== h && (s.transitionStart(i, h),
                s.transitionEnd(i, h)),
                !1) : (0 !== t && G.transition ? (s.setTransition(t),
                s.setTranslate(f),
                s.updateActiveIndex(n),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, a),
                s.transitionStart(i, h),
                s.animating || (s.animating = !0,
                s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                    s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                    s.onSlideToWrapperTransitionEnd = null,
                    delete s.onSlideToWrapperTransitionEnd,
                    s.transitionEnd(i, h))
                }
                ),
                s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0),
                s.setTranslate(f),
                s.updateActiveIndex(n),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, a),
                s.transitionStart(i, h),
                s.transitionEnd(i, h)),
                !0)
            }
            function fe(e, t, i, a) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
                var s = this
                  , n = e;
                return s.params.loop && (n += s.loopedSlides),
                s.slideTo(n, t, i, a)
            }
            function ge(e, t, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var a = this
                  , s = a.params
                  , n = a.animating;
                return s.loop ? !n && (a.loopFix(),
                a._clientLeft = a.$wrapperEl[0].clientLeft,
                a.slideTo(a.activeIndex + s.slidesPerGroup, e, t, i)) : a.slideTo(a.activeIndex + s.slidesPerGroup, e, t, i)
            }
            function me(e, t, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var a = this
                  , s = a.params
                  , n = a.animating
                  , r = a.snapGrid
                  , o = a.slidesGrid
                  , l = a.rtlTranslate;
                if (s.loop) {
                    if (n)
                        return !1;
                    a.loopFix(),
                    a._clientLeft = a.$wrapperEl[0].clientLeft
                }
                var d = l ? a.translate : -a.translate;
                function u(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var c, p = u(d), h = r.map((function(e) {
                    return u(e)
                }
                )), f = (o.map((function(e) {
                    return u(e)
                }
                )),
                r[h.indexOf(p)],
                r[h.indexOf(p) - 1]);
                return "undefined" !== typeof f && (c = o.indexOf(f),
                c < 0 && (c = a.activeIndex - 1)),
                a.slideTo(c, e, t, i)
            }
            function ve(e, t, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var a = this;
                return a.slideTo(a.activeIndex, e, t, i)
            }
            function ye(e, t, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var a = this
                  , s = a.activeIndex
                  , n = Math.floor(s / a.params.slidesPerGroup);
                if (n < a.snapGrid.length - 1) {
                    var r = a.rtlTranslate ? a.translate : -a.translate
                      , o = a.snapGrid[n]
                      , l = a.snapGrid[n + 1];
                    r - o > (l - o) / 2 && (s = a.params.slidesPerGroup)
                }
                return a.slideTo(s, e, t, i)
            }
            function we() {
                var e, t = this, i = t.params, s = t.$wrapperEl, n = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, r = t.clickedIndex;
                if (i.loop) {
                    if (t.animating)
                        return;
                    e = parseInt(a(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                    i.centeredSlides ? r < t.loopedSlides - n / 2 || r > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(),
                    r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                    F.nextTick((function() {
                        t.slideTo(r)
                    }
                    ))) : t.slideTo(r) : r > t.slides.length - n ? (t.loopFix(),
                    r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                    F.nextTick((function() {
                        t.slideTo(r)
                    }
                    ))) : t.slideTo(r)
                } else
                    t.slideTo(r)
            }
            var be = {
                slideTo: he,
                slideToLoop: fe,
                slideNext: ge,
                slidePrev: me,
                slideReset: ve,
                slideToClosest: ye,
                slideToClickedSlide: we
            };
            function xe() {
                var t = this
                  , i = t.params
                  , s = t.$wrapperEl;
                s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var n = s.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var r = i.slidesPerGroup - n.length % i.slidesPerGroup;
                    if (r !== i.slidesPerGroup) {
                        for (var o = 0; o < r; o += 1) {
                            var l = a(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            s.append(l)
                        }
                        n = s.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = n.length),
                t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10),
                t.loopedSlides += i.loopAdditionalSlides,
                t.loopedSlides > n.length && (t.loopedSlides = n.length);
                var d = []
                  , u = [];
                n.each((function(e, i) {
                    var s = a(i);
                    e < t.loopedSlides && u.push(i),
                    e < n.length && e >= n.length - t.loopedSlides && d.push(i),
                    s.attr("data-swiper-slide-index", e)
                }
                ));
                for (var c = 0; c < u.length; c += 1)
                    s.append(a(u[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var p = d.length - 1; p >= 0; p -= 1)
                    s.prepend(a(d[p].cloneNode(!0)).addClass(i.slideDuplicateClass))
            }
            function Ce() {
                var e, t = this, i = t.params, a = t.activeIndex, s = t.slides, n = t.loopedSlides, r = t.allowSlidePrev, o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
                t.allowSlidePrev = !0,
                t.allowSlideNext = !0;
                var u = -l[a]
                  , c = u - t.getTranslate();
                if (a < n) {
                    e = s.length - 3 * n + a,
                    e += n;
                    var p = t.slideTo(e, 0, !1, !0);
                    p && 0 !== c && t.setTranslate((d ? -t.translate : t.translate) - c)
                } else if ("auto" === i.slidesPerView && a >= 2 * n || a >= s.length - n) {
                    e = -s.length + a + n,
                    e += n;
                    var h = t.slideTo(e, 0, !1, !0);
                    h && 0 !== c && t.setTranslate((d ? -t.translate : t.translate) - c)
                }
                t.allowSlidePrev = r,
                t.allowSlideNext = o
            }
            function Te() {
                var e = this
                  , t = e.$wrapperEl
                  , i = e.params
                  , a = e.slides;
                t.children("." + i.slideClass + "." + i.slideDuplicateClass + ",." + i.slideClass + "." + i.slideBlankClass).remove(),
                a.removeAttr("data-swiper-slide-index")
            }
            var Se = {
                loopCreate: xe,
                loopFix: Ce,
                loopDestroy: Te
            };
            function Ie(e) {
                var t = this;
                if (!(G.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked)) {
                    var i = t.el;
                    i.style.cursor = "move",
                    i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                    i.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                    i.style.cursor = e ? "grabbing" : "grab"
                }
            }
            function ke() {
                var e = this;
                G.touch || e.params.watchOverflow && e.isLocked || (e.el.style.cursor = "")
            }
            var Ee = {
                setGrabCursor: Ie,
                unsetGrabCursor: ke
            };
            function De(e) {
                var t = this
                  , i = t.$wrapperEl
                  , a = t.params;
                if (a.loop && t.loopDestroy(),
                "object" === typeof e && "length"in e)
                    for (var s = 0; s < e.length; s += 1)
                        e[s] && i.append(e[s]);
                else
                    i.append(e);
                a.loop && t.loopCreate(),
                a.observer && G.observer || t.update()
            }
            function Le(e) {
                var t = this
                  , i = t.params
                  , a = t.$wrapperEl
                  , s = t.activeIndex;
                i.loop && t.loopDestroy();
                var n = s + 1;
                if ("object" === typeof e && "length"in e) {
                    for (var r = 0; r < e.length; r += 1)
                        e[r] && a.prepend(e[r]);
                    n = s + e.length
                } else
                    a.prepend(e);
                i.loop && t.loopCreate(),
                i.observer && G.observer || t.update(),
                t.slideTo(n, 0, !1)
            }
            function Ae(e, t) {
                var i = this
                  , a = i.$wrapperEl
                  , s = i.params
                  , n = i.activeIndex
                  , r = n;
                s.loop && (r -= i.loopedSlides,
                i.loopDestroy(),
                i.slides = a.children("." + s.slideClass));
                var o = i.slides.length;
                if (e <= 0)
                    i.prependSlide(t);
                else if (e >= o)
                    i.appendSlide(t);
                else {
                    for (var l = r > e ? r + 1 : r, d = [], u = o - 1; u >= e; u -= 1) {
                        var c = i.slides.eq(u);
                        c.remove(),
                        d.unshift(c)
                    }
                    if ("object" === typeof t && "length"in t) {
                        for (var p = 0; p < t.length; p += 1)
                            t[p] && a.append(t[p]);
                        l = r > e ? r + t.length : r
                    } else
                        a.append(t);
                    for (var h = 0; h < d.length; h += 1)
                        a.append(d[h]);
                    s.loop && i.loopCreate(),
                    s.observer && G.observer || i.update(),
                    s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
                }
            }
            function _e(e) {
                var t = this
                  , i = t.params
                  , a = t.$wrapperEl
                  , s = t.activeIndex
                  , n = s;
                i.loop && (n -= t.loopedSlides,
                t.loopDestroy(),
                t.slides = a.children("." + i.slideClass));
                var r, o = n;
                if ("object" === typeof e && "length"in e) {
                    for (var l = 0; l < e.length; l += 1)
                        r = e[l],
                        t.slides[r] && t.slides.eq(r).remove(),
                        r < o && (o -= 1);
                    o = Math.max(o, 0)
                } else
                    r = e,
                    t.slides[r] && t.slides.eq(r).remove(),
                    r < o && (o -= 1),
                    o = Math.max(o, 0);
                i.loop && t.loopCreate(),
                i.observer && G.observer || t.update(),
                i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
            }
            function Pe() {
                for (var e = this, t = [], i = 0; i < e.slides.length; i += 1)
                    t.push(i);
                e.removeSlide(t)
            }
            var Me = {
                appendSlide: De,
                prependSlide: Le,
                addSlide: Ae,
                removeSlide: _e,
                removeAllSlides: Pe
            }
              , Oe = function() {
                var i = t.navigator.userAgent
                  , a = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: t.cordova || t.phonegap,
                    phonegap: t.cordova || t.phonegap
                }
                  , s = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
                  , n = i.match(/(Android);?[\s\/]+([\d.]+)?/)
                  , r = i.match(/(iPad).*OS\s([\d_]+)/)
                  , o = i.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , l = !r && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (s && (a.os = "windows",
                a.osVersion = s[2],
                a.windows = !0),
                n && !s && (a.os = "android",
                a.osVersion = n[2],
                a.android = !0,
                a.androidChrome = i.toLowerCase().indexOf("chrome") >= 0),
                (r || l || o) && (a.os = "ios",
                a.ios = !0),
                l && !o && (a.osVersion = l[2].replace(/_/g, "."),
                a.iphone = !0),
                r && (a.osVersion = r[2].replace(/_/g, "."),
                a.ipad = !0),
                o && (a.osVersion = o[3] ? o[3].replace(/_/g, ".") : null,
                a.iphone = !0),
                a.ios && a.osVersion && i.indexOf("Version/") >= 0 && "10" === a.osVersion.split(".")[0] && (a.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]),
                a.desktop = !(a.os || a.android || a.webView),
                a.webView = (l || r || o) && i.match(/.*AppleWebKit(?!.*Safari)/i),
                a.os && "ios" === a.os) {
                    var d = a.osVersion.split(".")
                      , u = e.querySelector('meta[name="viewport"]');
                    a.minimalUi = !a.webView && (o || l) && (1 * d[0] === 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && u && u.getAttribute("content").indexOf("minimal-ui") >= 0
                }
                return a.pixelRatio = t.devicePixelRatio || 1,
                a
            }();
            function $e(i) {
                var s = this
                  , n = s.touchEventsData
                  , r = s.params
                  , o = s.touches;
                if (!s.animating || !r.preventInteractionOnTransition) {
                    var l = i;
                    if (l.originalEvent && (l = l.originalEvent),
                    n.isTouchEvent = "touchstart" === l.type,
                    (n.isTouchEvent || !("which"in l) || 3 !== l.which) && !(!n.isTouchEvent && "button"in l && l.button > 0) && (!n.isTouched || !n.isMoved))
                        if (r.noSwiping && a(l.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0])
                            s.allowClick = !0;
                        else if (!r.swipeHandler || a(l).closest(r.swipeHandler)[0]) {
                            o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX,
                            o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                            var d = o.currentX
                              , u = o.currentY
                              , c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection
                              , p = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                            if (!c || !(d <= p || d >= t.screen.width - p)) {
                                if (F.extend(n, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }),
                                o.startX = d,
                                o.startY = u,
                                n.touchStartTime = F.now(),
                                s.allowClick = !0,
                                s.updateSize(),
                                s.swipeDirection = void 0,
                                r.threshold > 0 && (n.allowThresholdMove = !1),
                                "touchstart" !== l.type) {
                                    var h = !0;
                                    a(l.target).is(n.formElements) && (h = !1),
                                    e.activeElement && a(e.activeElement).is(n.formElements) && e.activeElement !== l.target && e.activeElement.blur();
                                    var f = h && s.allowTouchMove && r.touchStartPreventDefault;
                                    (r.touchStartForcePreventDefault || f) && l.preventDefault()
                                }
                                s.emit("touchStart", l)
                            }
                        }
                }
            }
            function ze(t) {
                var i = this
                  , s = i.touchEventsData
                  , n = i.params
                  , r = i.touches
                  , o = i.rtlTranslate
                  , l = t;
                if (l.originalEvent && (l = l.originalEvent),
                s.isTouched) {
                    if (!s.isTouchEvent || "mousemove" !== l.type) {
                        var d = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX
                          , u = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                        if (l.preventedByNestedSwiper)
                            return r.startX = d,
                            void (r.startY = u);
                        if (!i.allowTouchMove)
                            return i.allowClick = !1,
                            void (s.isTouched && (F.extend(r, {
                                startX: d,
                                startY: u,
                                currentX: d,
                                currentY: u
                            }),
                            s.touchStartTime = F.now()));
                        if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                            if (i.isVertical()) {
                                if (u < r.startY && i.translate <= i.maxTranslate() || u > r.startY && i.translate >= i.minTranslate())
                                    return s.isTouched = !1,
                                    void (s.isMoved = !1)
                            } else if (d < r.startX && i.translate <= i.maxTranslate() || d > r.startX && i.translate >= i.minTranslate())
                                return;
                        if (s.isTouchEvent && e.activeElement && l.target === e.activeElement && a(l.target).is(s.formElements))
                            return s.isMoved = !0,
                            void (i.allowClick = !1);
                        if (s.allowTouchCallbacks && i.emit("touchMove", l),
                        !(l.targetTouches && l.targetTouches.length > 1)) {
                            r.currentX = d,
                            r.currentY = u;
                            var c = r.currentX - r.startX
                              , p = r.currentY - r.startY;
                            if (!(i.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(p, 2)) < i.params.threshold)) {
                                var h;
                                if ("undefined" === typeof s.isScrolling)
                                    i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : c * c + p * p >= 25 && (h = 180 * Math.atan2(Math.abs(p), Math.abs(c)) / Math.PI,
                                    s.isScrolling = i.isHorizontal() ? h > n.touchAngle : 90 - h > n.touchAngle);
                                if (s.isScrolling && i.emit("touchMoveOpposite", l),
                                "undefined" === typeof s.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (s.startMoving = !0)),
                                s.isScrolling)
                                    s.isTouched = !1;
                                else if (s.startMoving) {
                                    i.allowClick = !1,
                                    l.preventDefault(),
                                    n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
                                    s.isMoved || (n.loop && i.loopFix(),
                                    s.startTranslate = i.getTranslate(),
                                    i.setTransition(0),
                                    i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                    s.allowMomentumBounce = !1,
                                    !n.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0),
                                    i.emit("sliderFirstMove", l)),
                                    i.emit("sliderMove", l),
                                    s.isMoved = !0;
                                    var f = i.isHorizontal() ? c : p;
                                    r.diff = f,
                                    f *= n.touchRatio,
                                    o && (f = -f),
                                    i.swipeDirection = f > 0 ? "prev" : "next",
                                    s.currentTranslate = f + s.startTranslate;
                                    var g = !0
                                      , m = n.resistanceRatio;
                                    if (n.touchReleaseOnEdges && (m = 0),
                                    f > 0 && s.currentTranslate > i.minTranslate() ? (g = !1,
                                    n.resistance && (s.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + s.startTranslate + f, m))) : f < 0 && s.currentTranslate < i.maxTranslate() && (g = !1,
                                    n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - s.startTranslate - f, m))),
                                    g && (l.preventedByNestedSwiper = !0),
                                    !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
                                    !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
                                    n.threshold > 0) {
                                        if (!(Math.abs(f) > n.threshold || s.allowThresholdMove))
                                            return void (s.currentTranslate = s.startTranslate);
                                        if (!s.allowThresholdMove)
                                            return s.allowThresholdMove = !0,
                                            r.startX = r.currentX,
                                            r.startY = r.currentY,
                                            s.currentTranslate = s.startTranslate,
                                            void (r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                    }
                                    n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (i.updateActiveIndex(),
                                    i.updateSlidesClasses()),
                                    n.freeMode && (0 === s.velocities.length && s.velocities.push({
                                        position: r[i.isHorizontal() ? "startX" : "startY"],
                                        time: s.touchStartTime
                                    }),
                                    s.velocities.push({
                                        position: r[i.isHorizontal() ? "currentX" : "currentY"],
                                        time: F.now()
                                    })),
                                    i.updateProgress(s.currentTranslate),
                                    i.setTranslate(s.currentTranslate))
                                }
                            }
                        }
                    }
                } else
                    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", l)
            }
            function Re(e) {
                var t = this
                  , i = t.touchEventsData
                  , a = t.params
                  , s = t.touches
                  , n = t.rtlTranslate
                  , r = t.$wrapperEl
                  , o = t.slidesGrid
                  , l = t.snapGrid
                  , d = e;
                if (d.originalEvent && (d = d.originalEvent),
                i.allowTouchCallbacks && t.emit("touchEnd", d),
                i.allowTouchCallbacks = !1,
                !i.isTouched)
                    return i.isMoved && a.grabCursor && t.setGrabCursor(!1),
                    i.isMoved = !1,
                    void (i.startMoving = !1);
                a.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var u, c = F.now(), p = c - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(d),
                t.emit("tap", d),
                p < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout),
                i.clickTimeout = F.nextTick((function() {
                    t && !t.destroyed && t.emit("click", d)
                }
                ), 300)),
                p < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout),
                t.emit("doubleTap", d))),
                i.lastClickTime = F.now(),
                F.nextTick((function() {
                    t.destroyed || (t.allowClick = !0)
                }
                )),
                !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate)
                    return i.isTouched = !1,
                    i.isMoved = !1,
                    void (i.startMoving = !1);
                if (i.isTouched = !1,
                i.isMoved = !1,
                i.startMoving = !1,
                u = a.followFinger ? n ? t.translate : -t.translate : -i.currentTranslate,
                a.freeMode) {
                    if (u < -t.minTranslate())
                        return void t.slideTo(t.activeIndex);
                    if (u > -t.maxTranslate())
                        return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (a.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var h = i.velocities.pop()
                              , f = i.velocities.pop()
                              , g = h.position - f.position
                              , m = h.time - f.time;
                            t.velocity = g / m,
                            t.velocity /= 2,
                            Math.abs(t.velocity) < a.freeModeMinimumVelocity && (t.velocity = 0),
                            (m > 150 || F.now() - h.time > 300) && (t.velocity = 0)
                        } else
                            t.velocity = 0;
                        t.velocity *= a.freeModeMomentumVelocityRatio,
                        i.velocities.length = 0;
                        var v = 1e3 * a.freeModeMomentumRatio
                          , y = t.velocity * v
                          , w = t.translate + y;
                        n && (w = -w);
                        var b, x, C = !1, T = 20 * Math.abs(t.velocity) * a.freeModeMomentumBounceRatio;
                        if (w < t.maxTranslate())
                            a.freeModeMomentumBounce ? (w + t.maxTranslate() < -T && (w = t.maxTranslate() - T),
                            b = t.maxTranslate(),
                            C = !0,
                            i.allowMomentumBounce = !0) : w = t.maxTranslate(),
                            a.loop && a.centeredSlides && (x = !0);
                        else if (w > t.minTranslate())
                            a.freeModeMomentumBounce ? (w - t.minTranslate() > T && (w = t.minTranslate() + T),
                            b = t.minTranslate(),
                            C = !0,
                            i.allowMomentumBounce = !0) : w = t.minTranslate(),
                            a.loop && a.centeredSlides && (x = !0);
                        else if (a.freeModeSticky) {
                            for (var S, I = 0; I < l.length; I += 1)
                                if (l[I] > -w) {
                                    S = I;
                                    break
                                }
                            w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1],
                            w = -w
                        }
                        if (x && t.once("transitionEnd", (function() {
                            t.loopFix()
                        }
                        )),
                        0 !== t.velocity)
                            v = n ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                        else if (a.freeModeSticky)
                            return void t.slideToClosest();
                        a.freeModeMomentumBounce && C ? (t.updateProgress(b),
                        t.setTransition(v),
                        t.setTranslate(w),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating = !0,
                        r.transitionEnd((function() {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                            t.setTransition(a.speed),
                            t.setTranslate(b),
                            r.transitionEnd((function() {
                                t && !t.destroyed && t.transitionEnd()
                            }
                            )))
                        }
                        ))) : t.velocity ? (t.updateProgress(w),
                        t.setTransition(v),
                        t.setTranslate(w),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating || (t.animating = !0,
                        r.transitionEnd((function() {
                            t && !t.destroyed && t.transitionEnd()
                        }
                        )))) : t.updateProgress(w),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                    } else if (a.freeModeSticky)
                        return void t.slideToClosest();
                    (!a.freeModeMomentum || p >= a.longSwipesMs) && (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses())
                } else {
                    for (var k = 0, E = t.slidesSizesGrid[0], D = 0; D < o.length; D += a.slidesPerGroup)
                        "undefined" !== typeof o[D + a.slidesPerGroup] ? u >= o[D] && u < o[D + a.slidesPerGroup] && (k = D,
                        E = o[D + a.slidesPerGroup] - o[D]) : u >= o[D] && (k = D,
                        E = o[o.length - 1] - o[o.length - 2]);
                    var L = (u - o[k]) / E;
                    if (p > a.longSwipesMs) {
                        if (!a.longSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (L >= a.longSwipesRatio ? t.slideTo(k + a.slidesPerGroup) : t.slideTo(k)),
                        "prev" === t.swipeDirection && (L > 1 - a.longSwipesRatio ? t.slideTo(k + a.slidesPerGroup) : t.slideTo(k))
                    } else {
                        if (!a.shortSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(k + a.slidesPerGroup),
                        "prev" === t.swipeDirection && t.slideTo(k)
                    }
                }
            }
            function Be() {
                var e = this
                  , t = e.params
                  , i = e.el;
                if (!i || 0 !== i.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var a = e.allowSlideNext
                      , s = e.allowSlidePrev
                      , n = e.snapGrid;
                    if (e.allowSlideNext = !0,
                    e.allowSlidePrev = !0,
                    e.updateSize(),
                    e.updateSlides(),
                    t.freeMode) {
                        var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(r),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses(),
                        t.autoHeight && e.updateAutoHeight()
                    } else
                        e.updateSlidesClasses(),
                        ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
                    e.allowSlidePrev = s,
                    e.allowSlideNext = a,
                    e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
                }
            }
            function Ne(e) {
                var t = this;
                t.allowClick || (t.params.preventClicks && e.preventDefault(),
                t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
            }
            function je() {
                var t = this
                  , i = t.params
                  , a = t.touchEvents
                  , s = t.el
                  , n = t.wrapperEl;
                t.onTouchStart = $e.bind(t),
                t.onTouchMove = ze.bind(t),
                t.onTouchEnd = Re.bind(t),
                t.onClick = Ne.bind(t);
                var r = "container" === i.touchEventsTarget ? s : n
                  , o = !!i.nested;
                if (G.touch || !G.pointerEvents && !G.prefixedPointerEvents) {
                    if (G.touch) {
                        var l = !("touchstart" !== a.start || !G.passiveListener || !i.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.addEventListener(a.start, t.onTouchStart, l),
                        r.addEventListener(a.move, t.onTouchMove, G.passiveListener ? {
                            passive: !1,
                            capture: o
                        } : o),
                        r.addEventListener(a.end, t.onTouchEnd, l)
                    }
                    (i.simulateTouch && !Oe.ios && !Oe.android || i.simulateTouch && !G.touch && Oe.ios) && (r.addEventListener("mousedown", t.onTouchStart, !1),
                    e.addEventListener("mousemove", t.onTouchMove, o),
                    e.addEventListener("mouseup", t.onTouchEnd, !1))
                } else
                    r.addEventListener(a.start, t.onTouchStart, !1),
                    e.addEventListener(a.move, t.onTouchMove, o),
                    e.addEventListener(a.end, t.onTouchEnd, !1);
                (i.preventClicks || i.preventClicksPropagation) && r.addEventListener("click", t.onClick, !0),
                t.on(Oe.ios || Oe.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Be, !0)
            }
            function qe() {
                var t = this
                  , i = t.params
                  , a = t.touchEvents
                  , s = t.el
                  , n = t.wrapperEl
                  , r = "container" === i.touchEventsTarget ? s : n
                  , o = !!i.nested;
                if (G.touch || !G.pointerEvents && !G.prefixedPointerEvents) {
                    if (G.touch) {
                        var l = !("onTouchStart" !== a.start || !G.passiveListener || !i.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.removeEventListener(a.start, t.onTouchStart, l),
                        r.removeEventListener(a.move, t.onTouchMove, o),
                        r.removeEventListener(a.end, t.onTouchEnd, l)
                    }
                    (i.simulateTouch && !Oe.ios && !Oe.android || i.simulateTouch && !G.touch && Oe.ios) && (r.removeEventListener("mousedown", t.onTouchStart, !1),
                    e.removeEventListener("mousemove", t.onTouchMove, o),
                    e.removeEventListener("mouseup", t.onTouchEnd, !1))
                } else
                    r.removeEventListener(a.start, t.onTouchStart, !1),
                    e.removeEventListener(a.move, t.onTouchMove, o),
                    e.removeEventListener(a.end, t.onTouchEnd, !1);
                (i.preventClicks || i.preventClicksPropagation) && r.removeEventListener("click", t.onClick, !0),
                t.off(Oe.ios || Oe.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Be)
            }
            var Qe = {
                attachEvents: je,
                detachEvents: qe
            };
            function Fe() {
                var e = this
                  , t = e.activeIndex
                  , i = e.initialized
                  , a = e.loopedSlides;
                void 0 === a && (a = 0);
                var s = e.params
                  , n = s.breakpoints;
                if (n && (!n || 0 !== Object.keys(n).length)) {
                    var r = e.getBreakpoint(n);
                    if (r && e.currentBreakpoint !== r) {
                        var o = r in n ? n[r] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach((function(e) {
                            var t = o[e];
                            "undefined" !== typeof t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }
                        ));
                        var l = o || e.originalParams
                          , d = l.direction && l.direction !== s.direction
                          , u = s.loop && (l.slidesPerView !== s.slidesPerView || d);
                        d && i && e.changeDirection(),
                        F.extend(e.params, l),
                        F.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }),
                        e.currentBreakpoint = r,
                        u && i && (e.loopDestroy(),
                        e.loopCreate(),
                        e.updateSlides(),
                        e.slideTo(t - a + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", l)
                    }
                }
            }
            function Ge(e) {
                var i = this;
                if (e) {
                    var a = !1
                      , s = [];
                    Object.keys(e).forEach((function(e) {
                        s.push(e)
                    }
                    )),
                    s.sort((function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    }
                    ));
                    for (var n = 0; n < s.length; n += 1) {
                        var r = s[n];
                        i.params.breakpointsInverse ? r <= t.innerWidth && (a = r) : r >= t.innerWidth && !a && (a = r)
                    }
                    return a || "max"
                }
            }
            var Ve = {
                setBreakpoint: Fe,
                getBreakpoint: Ge
            };
            function Ye() {
                var e = this
                  , t = e.classNames
                  , i = e.params
                  , a = e.rtl
                  , s = e.$el
                  , n = [];
                n.push("initialized"),
                n.push(i.direction),
                i.freeMode && n.push("free-mode"),
                G.flexbox || n.push("no-flexbox"),
                i.autoHeight && n.push("autoheight"),
                a && n.push("rtl"),
                i.slidesPerColumn > 1 && n.push("multirow"),
                Oe.android && n.push("android"),
                Oe.ios && n.push("ios"),
                (V.isIE || V.isEdge) && (G.pointerEvents || G.prefixedPointerEvents) && n.push("wp8-" + i.direction),
                n.forEach((function(e) {
                    t.push(i.containerModifierClass + e)
                }
                )),
                s.addClass(t.join(" "))
            }
            function He() {
                var e = this
                  , t = e.$el
                  , i = e.classNames;
                t.removeClass(i.join(" "))
            }
            var Ue = {
                addClasses: Ye,
                removeClasses: He
            };
            function Xe(e, i, a, s, n, r) {
                var o;
                function l() {
                    r && r()
                }
                e.complete && n ? l() : i ? (o = new t.Image,
                o.onload = l,
                o.onerror = l,
                s && (o.sizes = s),
                a && (o.srcset = a),
                i && (o.src = i)) : l()
            }
            function We() {
                var e = this;
                function t() {
                    "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var a = e.imagesToLoad[i];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                }
            }
            var Ke = {
                loadImage: Xe,
                preloadImages: We
            };
            function Ze() {
                var e = this
                  , t = e.isLocked;
                e.isLocked = 1 === e.snapGrid.length,
                e.allowSlideNext = !e.isLocked,
                e.allowSlidePrev = !e.isLocked,
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                t && t !== e.isLocked && (e.isEnd = !1,
                e.navigation.update())
            }
            var Je = {
                checkOverflow: Ze
            }
              , et = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsInverse: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            }
              , tt = {
                update: ae,
                translate: le,
                transition: pe,
                slide: be,
                loop: Se,
                grabCursor: Ee,
                manipulation: Me,
                events: Qe,
                breakpoints: Ve,
                checkOverflow: Je,
                classes: Ue,
                images: Ke
            }
              , it = {}
              , at = function(e) {
                function t() {
                    var i, s, n, r = [], o = arguments.length;
                    while (o--)
                        r[o] = arguments[o];
                    1 === r.length && r[0].constructor && r[0].constructor === Object ? n = r[0] : (i = r,
                    s = i[0],
                    n = i[1]),
                    n || (n = {}),
                    n = F.extend({}, n),
                    s && !n.el && (n.el = s),
                    e.call(this, n),
                    Object.keys(tt).forEach((function(e) {
                        Object.keys(tt[e]).forEach((function(i) {
                            t.prototype[i] || (t.prototype[i] = tt[e][i])
                        }
                        ))
                    }
                    ));
                    var l = this;
                    "undefined" === typeof l.modules && (l.modules = {}),
                    Object.keys(l.modules).forEach((function(e) {
                        var t = l.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0]
                              , a = t.params[i];
                            if ("object" !== typeof a || null === a)
                                return;
                            if (!(i in n) || !("enabled"in a))
                                return;
                            !0 === n[i] && (n[i] = {
                                enabled: !0
                            }),
                            "object" !== typeof n[i] || "enabled"in n[i] || (n[i].enabled = !0),
                            n[i] || (n[i] = {
                                enabled: !1
                            })
                        }
                    }
                    ));
                    var d = F.extend({}, et);
                    l.useModulesParams(d),
                    l.params = F.extend({}, d, it, n),
                    l.originalParams = F.extend({}, l.params),
                    l.passedParams = F.extend({}, n),
                    l.$ = a;
                    var u = a(l.params.el);
                    if (s = u[0],
                    s) {
                        if (u.length > 1) {
                            var c = [];
                            return u.each((function(e, i) {
                                var a = F.extend({}, n, {
                                    el: i
                                });
                                c.push(new t(a))
                            }
                            )),
                            c
                        }
                        s.swiper = l,
                        u.data("swiper", l);
                        var p = u.children("." + l.params.wrapperClass);
                        return F.extend(l, {
                            $el: u,
                            el: s,
                            $wrapperEl: p,
                            wrapperEl: p[0],
                            classNames: [],
                            slides: a(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === l.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === l.params.direction
                            },
                            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === u.css("direction"),
                            rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === u.css("direction")),
                            wrongRTL: "-webkit-box" === p.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: l.params.allowSlideNext,
                            allowSlidePrev: l.params.allowSlidePrev,
                            touchEvents: function() {
                                var e = ["touchstart", "touchmove", "touchend"]
                                  , t = ["mousedown", "mousemove", "mouseup"];
                                return G.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : G.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                                l.touchEventsTouch = {
                                    start: e[0],
                                    move: e[1],
                                    end: e[2]
                                },
                                l.touchEventsDesktop = {
                                    start: t[0],
                                    move: t[1],
                                    end: t[2]
                                },
                                G.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop
                            }(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: F.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: l.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }),
                        l.useModules(),
                        l.params.init && l.init(),
                        l
                    }
                }
                e && (t.__proto__ = e),
                t.prototype = Object.create(e && e.prototype),
                t.prototype.constructor = t;
                var i = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return t.prototype.slidesPerViewDynamic = function() {
                    var e = this
                      , t = e.params
                      , i = e.slides
                      , a = e.slidesGrid
                      , s = e.size
                      , n = e.activeIndex
                      , r = 1;
                    if (t.centeredSlides) {
                        for (var o, l = i[n].swiperSlideSize, d = n + 1; d < i.length; d += 1)
                            i[d] && !o && (l += i[d].swiperSlideSize,
                            r += 1,
                            l > s && (o = !0));
                        for (var u = n - 1; u >= 0; u -= 1)
                            i[u] && !o && (l += i[u].swiperSlideSize,
                            r += 1,
                            l > s && (o = !0))
                    } else
                        for (var c = n + 1; c < i.length; c += 1)
                            a[c] - a[n] < s && (r += 1);
                    return r
                }
                ,
                t.prototype.update = function() {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t, i = e.snapGrid, a = e.params;
                        a.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode ? (s(),
                        e.params.autoHeight && e.updateAutoHeight()) : (t = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
                        t || s()),
                        a.watchOverflow && i !== e.snapGrid && e.checkOverflow(),
                        e.emit("update")
                    }
                    function s() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate
                          , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                    }
                }
                ,
                t.prototype.changeDirection = function(e, t) {
                    void 0 === t && (t = !0);
                    var i = this
                      , a = i.params.direction;
                    return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
                    e === a || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass("" + i.params.containerModifierClass + a + " wp8-" + a).addClass("" + i.params.containerModifierClass + e),
                    (V.isIE || V.isEdge) && (G.pointerEvents || G.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e),
                    i.params.direction = e,
                    i.slides.each((function(t, i) {
                        "vertical" === e ? i.style.width = "" : i.style.height = ""
                    }
                    )),
                    i.emit("changeDirection"),
                    t && i.update()),
                    i
                }
                ,
                t.prototype.init = function() {
                    var e = this;
                    e.initialized || (e.emit("beforeInit"),
                    e.params.breakpoints && e.setBreakpoint(),
                    e.addClasses(),
                    e.params.loop && e.loopCreate(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.params.watchOverflow && e.checkOverflow(),
                    e.params.grabCursor && e.setGrabCursor(),
                    e.params.preloadImages && e.preloadImages(),
                    e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                    e.attachEvents(),
                    e.initialized = !0,
                    e.emit("init"))
                }
                ,
                t.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0),
                    void 0 === t && (t = !0);
                    var i = this
                      , a = i.params
                      , s = i.$el
                      , n = i.$wrapperEl
                      , r = i.slides;
                    return "undefined" === typeof i.params || i.destroyed || (i.emit("beforeDestroy"),
                    i.initialized = !1,
                    i.detachEvents(),
                    a.loop && i.loopDestroy(),
                    t && (i.removeClasses(),
                    s.removeAttr("style"),
                    n.removeAttr("style"),
                    r && r.length && r.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
                    i.emit("destroy"),
                    Object.keys(i.eventsListeners).forEach((function(e) {
                        i.off(e)
                    }
                    )),
                    !1 !== e && (i.$el[0].swiper = null,
                    i.$el.data("swiper", null),
                    F.deleteProps(i)),
                    i.destroyed = !0),
                    null
                }
                ,
                t.extendDefaults = function(e) {
                    F.extend(it, e)
                }
                ,
                i.extendedDefaults.get = function() {
                    return it
                }
                ,
                i.defaults.get = function() {
                    return et
                }
                ,
                i.Class.get = function() {
                    return e
                }
                ,
                i.$.get = function() {
                    return a
                }
                ,
                Object.defineProperties(t, i),
                t
            }(Y)
              , st = {
                name: "device",
                proto: {
                    device: Oe
                },
                static: {
                    device: Oe
                }
            }
              , nt = {
                name: "support",
                proto: {
                    support: G
                },
                static: {
                    support: G
                }
            }
              , rt = {
                name: "browser",
                proto: {
                    browser: V
                },
                static: {
                    browser: V
                }
            }
              , ot = {
                name: "resize",
                create: function() {
                    var e = this;
                    F.extend(e, {
                        resize: {
                            resizeHandler: function() {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                                e.emit("resize"))
                            },
                            orientationChangeHandler: function() {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        t.addEventListener("resize", e.resize.resizeHandler),
                        t.addEventListener("orientationchange", e.resize.orientationChangeHandler)
                    },
                    destroy: function() {
                        var e = this;
                        t.removeEventListener("resize", e.resize.resizeHandler),
                        t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                    }
                }
            }
              , lt = {
                func: t.MutationObserver || t.WebkitMutationObserver,
                attach: function(e, i) {
                    void 0 === i && (i = {});
                    var a = this
                      , s = lt.func
                      , n = new s((function(e) {
                        if (1 !== e.length) {
                            var i = function() {
                                a.emit("observerUpdate", e[0])
                            };
                            t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                        } else
                            a.emit("observerUpdate", e[0])
                    }
                    ));
                    n.observe(e, {
                        attributes: "undefined" === typeof i.attributes || i.attributes,
                        childList: "undefined" === typeof i.childList || i.childList,
                        characterData: "undefined" === typeof i.characterData || i.characterData
                    }),
                    a.observer.observers.push(n)
                },
                init: function() {
                    var e = this;
                    if (G.observer && e.params.observer) {
                        if (e.params.observeParents)
                            for (var t = e.$el.parents(), i = 0; i < t.length; i += 1)
                                e.observer.attach(t[i]);
                        e.observer.attach(e.$el[0], {
                            childList: e.params.observeSlideChildren
                        }),
                        e.observer.attach(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function() {
                    var e = this;
                    e.observer.observers.forEach((function(e) {
                        e.disconnect()
                    }
                    )),
                    e.observer.observers = []
                }
            }
              , dt = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        observer: {
                            init: lt.init.bind(e),
                            attach: lt.attach.bind(e),
                            destroy: lt.destroy.bind(e),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.observer.init()
                    },
                    destroy: function() {
                        var e = this;
                        e.observer.destroy()
                    }
                }
            }
              , ut = {
                update: function(e) {
                    var t = this
                      , i = t.params
                      , a = i.slidesPerView
                      , s = i.slidesPerGroup
                      , n = i.centeredSlides
                      , r = t.params.virtual
                      , o = r.addSlidesBefore
                      , l = r.addSlidesAfter
                      , d = t.virtual
                      , u = d.from
                      , c = d.to
                      , p = d.slides
                      , h = d.slidesGrid
                      , f = d.renderSlide
                      , g = d.offset;
                    t.updateActiveIndex();
                    var m, v, y, w = t.activeIndex || 0;
                    m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                    n ? (v = Math.floor(a / 2) + s + o,
                    y = Math.floor(a / 2) + s + l) : (v = a + (s - 1) + o,
                    y = s + l);
                    var b = Math.max((w || 0) - y, 0)
                      , x = Math.min((w || 0) + v, p.length - 1)
                      , C = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
                    function T() {
                        t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses(),
                        t.lazy && t.params.lazy.enabled && t.lazy.load()
                    }
                    if (F.extend(t.virtual, {
                        from: b,
                        to: x,
                        offset: C,
                        slidesGrid: t.slidesGrid
                    }),
                    u === b && c === x && !e)
                        return t.slidesGrid !== h && C !== g && t.slides.css(m, C + "px"),
                        void t.updateProgress();
                    if (t.params.virtual.renderExternal)
                        return t.params.virtual.renderExternal.call(t, {
                            offset: C,
                            from: b,
                            to: x,
                            slides: function() {
                                for (var e = [], t = b; t <= x; t += 1)
                                    e.push(p[t]);
                                return e
                            }()
                        }),
                        void T();
                    var S = []
                      , I = [];
                    if (e)
                        t.$wrapperEl.find("." + t.params.slideClass).remove();
                    else
                        for (var k = u; k <= c; k += 1)
                            (k < b || k > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                    for (var E = 0; E < p.length; E += 1)
                        E >= b && E <= x && ("undefined" === typeof c || e ? I.push(E) : (E > c && I.push(E),
                        E < u && S.push(E)));
                    I.forEach((function(e) {
                        t.$wrapperEl.append(f(p[e], e))
                    }
                    )),
                    S.sort((function(e, t) {
                        return t - e
                    }
                    )).forEach((function(e) {
                        t.$wrapperEl.prepend(f(p[e], e))
                    }
                    )),
                    t.$wrapperEl.children(".swiper-slide").css(m, C + "px"),
                    T()
                },
                renderSlide: function(e, t) {
                    var i = this
                      , s = i.params.virtual;
                    if (s.cache && i.virtual.cache[t])
                        return i.virtual.cache[t];
                    var n = s.renderSlide ? a(s.renderSlide.call(i, e, t)) : a('<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                    return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t),
                    s.cache && (i.virtual.cache[t] = n),
                    n
                },
                appendSlide: function(e) {
                    var t = this;
                    if ("object" === typeof e && "length"in e)
                        for (var i = 0; i < e.length; i += 1)
                            e[i] && t.virtual.slides.push(e[i]);
                    else
                        t.virtual.slides.push(e);
                    t.virtual.update(!0)
                },
                prependSlide: function(e) {
                    var t = this
                      , i = t.activeIndex
                      , a = i + 1
                      , s = 1;
                    if (Array.isArray(e)) {
                        for (var n = 0; n < e.length; n += 1)
                            e[n] && t.virtual.slides.unshift(e[n]);
                        a = i + e.length,
                        s = e.length
                    } else
                        t.virtual.slides.unshift(e);
                    if (t.params.virtual.cache) {
                        var r = t.virtual.cache
                          , o = {};
                        Object.keys(r).forEach((function(e) {
                            o[parseInt(e, 10) + s] = r[e]
                        }
                        )),
                        t.virtual.cache = o
                    }
                    t.virtual.update(!0),
                    t.slideTo(a, 0)
                },
                removeSlide: function(e) {
                    var t = this;
                    if ("undefined" !== typeof e && null !== e) {
                        var i = t.activeIndex;
                        if (Array.isArray(e))
                            for (var a = e.length - 1; a >= 0; a -= 1)
                                t.virtual.slides.splice(e[a], 1),
                                t.params.virtual.cache && delete t.virtual.cache[e[a]],
                                e[a] < i && (i -= 1),
                                i = Math.max(i, 0);
                        else
                            t.virtual.slides.splice(e, 1),
                            t.params.virtual.cache && delete t.virtual.cache[e],
                            e < i && (i -= 1),
                            i = Math.max(i, 0);
                        t.virtual.update(!0),
                        t.slideTo(i, 0)
                    }
                },
                removeAllSlides: function() {
                    var e = this;
                    e.virtual.slides = [],
                    e.params.virtual.cache && (e.virtual.cache = {}),
                    e.virtual.update(!0),
                    e.slideTo(0, 0)
                }
            }
              , ct = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        virtual: {
                            update: ut.update.bind(e),
                            appendSlide: ut.appendSlide.bind(e),
                            prependSlide: ut.prependSlide.bind(e),
                            removeSlide: ut.removeSlide.bind(e),
                            removeAllSlides: ut.removeAllSlides.bind(e),
                            renderSlide: ut.renderSlide.bind(e),
                            slides: e.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if (e.params.virtual.enabled) {
                            e.classNames.push(e.params.containerModifierClass + "virtual");
                            var t = {
                                watchSlidesProgress: !0
                            };
                            F.extend(e.params, t),
                            F.extend(e.originalParams, t),
                            e.params.initialSlide || e.virtual.update()
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        e.params.virtual.enabled && e.virtual.update()
                    }
                }
            }
              , pt = {
                handle: function(i) {
                    var a = this
                      , s = a.rtlTranslate
                      , n = i;
                    n.originalEvent && (n = n.originalEvent);
                    var r = n.keyCode || n.charCode;
                    if (!a.allowSlideNext && (a.isHorizontal() && 39 === r || a.isVertical() && 40 === r || 34 === r))
                        return !1;
                    if (!a.allowSlidePrev && (a.isHorizontal() && 37 === r || a.isVertical() && 38 === r || 33 === r))
                        return !1;
                    if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey) && (!e.activeElement || !e.activeElement.nodeName || "input" !== e.activeElement.nodeName.toLowerCase() && "textarea" !== e.activeElement.nodeName.toLowerCase())) {
                        if (a.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                            var o = !1;
                            if (a.$el.parents("." + a.params.slideClass).length > 0 && 0 === a.$el.parents("." + a.params.slideActiveClass).length)
                                return;
                            var l = t.innerWidth
                              , d = t.innerHeight
                              , u = a.$el.offset();
                            s && (u.left -= a.$el[0].scrollLeft);
                            for (var c = [[u.left, u.top], [u.left + a.width, u.top], [u.left, u.top + a.height], [u.left + a.width, u.top + a.height]], p = 0; p < c.length; p += 1) {
                                var h = c[p];
                                h[0] >= 0 && h[0] <= l && h[1] >= 0 && h[1] <= d && (o = !0)
                            }
                            if (!o)
                                return
                        }
                        a.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                        (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || a.slideNext(),
                        (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || a.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                        34 !== r && 40 !== r || a.slideNext(),
                        33 !== r && 38 !== r || a.slidePrev()),
                        a.emit("keyPress", r)
                    }
                },
                enable: function() {
                    var t = this;
                    t.keyboard.enabled || (a(e).on("keydown", t.keyboard.handle),
                    t.keyboard.enabled = !0)
                },
                disable: function() {
                    var t = this;
                    t.keyboard.enabled && (a(e).off("keydown", t.keyboard.handle),
                    t.keyboard.enabled = !1)
                }
            }
              , ht = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        keyboard: {
                            enabled: !1,
                            enable: pt.enable.bind(e),
                            disable: pt.disable.bind(e),
                            handle: pt.handle.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.keyboard.enabled && e.keyboard.enable()
                    },
                    destroy: function() {
                        var e = this;
                        e.keyboard.enabled && e.keyboard.disable()
                    }
                }
            };
            function ft() {
                var t = "onwheel"
                  , i = t in e;
                if (!i) {
                    var a = e.createElement("div");
                    a.setAttribute(t, "return;"),
                    i = "function" === typeof a[t]
                }
                return !i && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (i = e.implementation.hasFeature("Events.wheel", "3.0")),
                i
            }
            var gt = {
                lastScrollTime: F.now(),
                event: function() {
                    return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : ft() ? "wheel" : "mousewheel"
                }(),
                normalize: function(e) {
                    var t = 10
                      , i = 40
                      , a = 800
                      , s = 0
                      , n = 0
                      , r = 0
                      , o = 0;
                    return "detail"in e && (n = e.detail),
                    "wheelDelta"in e && (n = -e.wheelDelta / 120),
                    "wheelDeltaY"in e && (n = -e.wheelDeltaY / 120),
                    "wheelDeltaX"in e && (s = -e.wheelDeltaX / 120),
                    "axis"in e && e.axis === e.HORIZONTAL_AXIS && (s = n,
                    n = 0),
                    r = s * t,
                    o = n * t,
                    "deltaY"in e && (o = e.deltaY),
                    "deltaX"in e && (r = e.deltaX),
                    (r || o) && e.deltaMode && (1 === e.deltaMode ? (r *= i,
                    o *= i) : (r *= a,
                    o *= a)),
                    r && !s && (s = r < 1 ? -1 : 1),
                    o && !n && (n = o < 1 ? -1 : 1),
                    {
                        spinX: s,
                        spinY: n,
                        pixelX: r,
                        pixelY: o
                    }
                },
                handleMouseEnter: function() {
                    var e = this;
                    e.mouseEntered = !0
                },
                handleMouseLeave: function() {
                    var e = this;
                    e.mouseEntered = !1
                },
                handle: function(e) {
                    var i = e
                      , a = this
                      , s = a.params.mousewheel;
                    if (!a.mouseEntered && !s.releaseOnEdges)
                        return !0;
                    i.originalEvent && (i = i.originalEvent);
                    var n = 0
                      , r = a.rtlTranslate ? -1 : 1
                      , o = gt.normalize(i);
                    if (s.forceToAxis)
                        if (a.isHorizontal()) {
                            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                                return !0;
                            n = o.pixelX * r
                        } else {
                            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                                return !0;
                            n = o.pixelY
                        }
                    else
                        n = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
                    if (0 === n)
                        return !0;
                    if (s.invert && (n = -n),
                    a.params.freeMode) {
                        a.params.loop && a.loopFix();
                        var l = a.getTranslate() + n * s.sensitivity
                          , d = a.isBeginning
                          , u = a.isEnd;
                        if (l >= a.minTranslate() && (l = a.minTranslate()),
                        l <= a.maxTranslate() && (l = a.maxTranslate()),
                        a.setTransition(0),
                        a.setTranslate(l),
                        a.updateProgress(),
                        a.updateActiveIndex(),
                        a.updateSlidesClasses(),
                        (!d && a.isBeginning || !u && a.isEnd) && a.updateSlidesClasses(),
                        a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout),
                        a.mousewheel.timeout = F.nextTick((function() {
                            a.slideToClosest()
                        }
                        ), 300)),
                        a.emit("scroll", i),
                        a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(),
                        l === a.minTranslate() || l === a.maxTranslate())
                            return !0
                    } else {
                        if (F.now() - a.mousewheel.lastScrollTime > 60)
                            if (n < 0)
                                if (a.isEnd && !a.params.loop || a.animating) {
                                    if (s.releaseOnEdges)
                                        return !0
                                } else
                                    a.slideNext(),
                                    a.emit("scroll", i);
                            else if (a.isBeginning && !a.params.loop || a.animating) {
                                if (s.releaseOnEdges)
                                    return !0
                            } else
                                a.slidePrev(),
                                a.emit("scroll", i);
                        a.mousewheel.lastScrollTime = (new t.Date).getTime()
                    }
                    return i.preventDefault ? i.preventDefault() : i.returnValue = !1,
                    !1
                },
                enable: function() {
                    var e = this;
                    if (!gt.event)
                        return !1;
                    if (e.mousewheel.enabled)
                        return !1;
                    var t = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (t = a(e.params.mousewheel.eventsTarged)),
                    t.on("mouseenter", e.mousewheel.handleMouseEnter),
                    t.on("mouseleave", e.mousewheel.handleMouseLeave),
                    t.on(gt.event, e.mousewheel.handle),
                    e.mousewheel.enabled = !0,
                    !0
                },
                disable: function() {
                    var e = this;
                    if (!gt.event)
                        return !1;
                    if (!e.mousewheel.enabled)
                        return !1;
                    var t = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (t = a(e.params.mousewheel.eventsTarged)),
                    t.off(gt.event, e.mousewheel.handle),
                    e.mousewheel.enabled = !1,
                    !0
                }
            }
              , mt = {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: gt.enable.bind(e),
                            disable: gt.disable.bind(e),
                            handle: gt.handle.bind(e),
                            handleMouseEnter: gt.handleMouseEnter.bind(e),
                            handleMouseLeave: gt.handleMouseLeave.bind(e),
                            lastScrollTime: F.now()
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.mousewheel.enabled && e.mousewheel.enable()
                    },
                    destroy: function() {
                        var e = this;
                        e.mousewheel.enabled && e.mousewheel.disable()
                    }
                }
            }
              , vt = {
                update: function() {
                    var e = this
                      , t = e.params.navigation;
                    if (!e.params.loop) {
                        var i = e.navigation
                          , a = i.$nextEl
                          , s = i.$prevEl;
                        s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass),
                        s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                        a && a.length > 0 && (e.isEnd ? a.addClass(t.disabledClass) : a.removeClass(t.disabledClass),
                        a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                    }
                },
                onPrevClick: function(e) {
                    var t = this;
                    e.preventDefault(),
                    t.isBeginning && !t.params.loop || t.slidePrev()
                },
                onNextClick: function(e) {
                    var t = this;
                    e.preventDefault(),
                    t.isEnd && !t.params.loop || t.slideNext()
                },
                init: function() {
                    var e, t, i = this, s = i.params.navigation;
                    (s.nextEl || s.prevEl) && (s.nextEl && (e = a(s.nextEl),
                    i.params.uniqueNavElements && "string" === typeof s.nextEl && e.length > 1 && 1 === i.$el.find(s.nextEl).length && (e = i.$el.find(s.nextEl))),
                    s.prevEl && (t = a(s.prevEl),
                    i.params.uniqueNavElements && "string" === typeof s.prevEl && t.length > 1 && 1 === i.$el.find(s.prevEl).length && (t = i.$el.find(s.prevEl))),
                    e && e.length > 0 && e.on("click", i.navigation.onNextClick),
                    t && t.length > 0 && t.on("click", i.navigation.onPrevClick),
                    F.extend(i.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0]
                    }))
                },
                destroy: function() {
                    var e = this
                      , t = e.navigation
                      , i = t.$nextEl
                      , a = t.$prevEl;
                    i && i.length && (i.off("click", e.navigation.onNextClick),
                    i.removeClass(e.params.navigation.disabledClass)),
                    a && a.length && (a.off("click", e.navigation.onPrevClick),
                    a.removeClass(e.params.navigation.disabledClass))
                }
            }
              , yt = {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        navigation: {
                            init: vt.init.bind(e),
                            update: vt.update.bind(e),
                            destroy: vt.destroy.bind(e),
                            onNextClick: vt.onNextClick.bind(e),
                            onPrevClick: vt.onPrevClick.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.navigation.init(),
                        e.navigation.update()
                    },
                    toEdge: function() {
                        var e = this;
                        e.navigation.update()
                    },
                    fromEdge: function() {
                        var e = this;
                        e.navigation.update()
                    },
                    destroy: function() {
                        var e = this;
                        e.navigation.destroy()
                    },
                    click: function(e) {
                        var t, i = this, s = i.navigation, n = s.$nextEl, r = s.$prevEl;
                        !i.params.navigation.hideOnClick || a(e.target).is(r) || a(e.target).is(n) || (n ? t = n.hasClass(i.params.navigation.hiddenClass) : r && (t = r.hasClass(i.params.navigation.hiddenClass)),
                        !0 === t ? i.emit("navigationShow", i) : i.emit("navigationHide", i),
                        n && n.toggleClass(i.params.navigation.hiddenClass),
                        r && r.toggleClass(i.params.navigation.hiddenClass))
                    }
                }
            }
              , wt = {
                update: function() {
                    var e = this
                      , t = e.rtl
                      , i = e.params.pagination;
                    if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var s, n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, r = e.pagination.$el, o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        if (e.params.loop ? (s = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup),
                        s > n - 1 - 2 * e.loopedSlides && (s -= n - 2 * e.loopedSlides),
                        s > o - 1 && (s -= o),
                        s < 0 && "bullets" !== e.params.paginationType && (s = o + s)) : s = "undefined" !== typeof e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                        "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                            var l, d, u, c = e.pagination.bullets;
                            if (i.dynamicBullets && (e.pagination.bulletSize = c.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                            r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"),
                            i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += s - e.previousIndex,
                            e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                            l = s - e.pagination.dynamicBulletIndex,
                            d = l + (Math.min(c.length, i.dynamicMainBullets) - 1),
                            u = (d + l) / 2),
                            c.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"),
                            r.length > 1)
                                c.each((function(e, t) {
                                    var n = a(t)
                                      , r = n.index();
                                    r === s && n.addClass(i.bulletActiveClass),
                                    i.dynamicBullets && (r >= l && r <= d && n.addClass(i.bulletActiveClass + "-main"),
                                    r === l && n.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                                    r === d && n.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                                }
                                ));
                            else {
                                var p = c.eq(s);
                                if (p.addClass(i.bulletActiveClass),
                                i.dynamicBullets) {
                                    for (var h = c.eq(l), f = c.eq(d), g = l; g <= d; g += 1)
                                        c.eq(g).addClass(i.bulletActiveClass + "-main");
                                    h.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                                    f.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                                }
                            }
                            if (i.dynamicBullets) {
                                var m = Math.min(c.length, i.dynamicMainBullets + 4)
                                  , v = (e.pagination.bulletSize * m - e.pagination.bulletSize) / 2 - u * e.pagination.bulletSize
                                  , y = t ? "right" : "left";
                                c.css(e.isHorizontal() ? y : "top", v + "px")
                            }
                        }
                        if ("fraction" === i.type && (r.find("." + i.currentClass).text(i.formatFractionCurrent(s + 1)),
                        r.find("." + i.totalClass).text(i.formatFractionTotal(o))),
                        "progressbar" === i.type) {
                            var w;
                            w = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                            var b = (s + 1) / o
                              , x = 1
                              , C = 1;
                            "horizontal" === w ? x = b : C = b,
                            r.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + C + ")").transition(e.params.speed)
                        }
                        "custom" === i.type && i.renderCustom ? (r.html(i.renderCustom(e, s + 1, o)),
                        e.emit("paginationRender", e, r[0])) : e.emit("paginationUpdate", e, r[0]),
                        r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
                    }
                },
                render: function() {
                    var e = this
                      , t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                          , a = e.pagination.$el
                          , s = "";
                        if ("bullets" === t.type) {
                            for (var n = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, r = 0; r < n; r += 1)
                                t.renderBullet ? s += t.renderBullet.call(e, r, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                            a.html(s),
                            e.pagination.bullets = a.find("." + t.bulletClass)
                        }
                        "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                        a.html(s)),
                        "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                        a.html(s)),
                        "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                    }
                },
                init: function() {
                    var e = this
                      , t = e.params.pagination;
                    if (t.el) {
                        var i = a(t.el);
                        0 !== i.length && (e.params.uniqueNavElements && "string" === typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)),
                        "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                        i.addClass(t.modifierClass + t.type),
                        "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                        e.pagination.dynamicBulletIndex = 0,
                        t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                        "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                        t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                            t.preventDefault();
                            var i = a(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (i += e.loopedSlides),
                            e.slideTo(i)
                        }
                        )),
                        F.extend(e.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                    }
                },
                destroy: function() {
                    var e = this
                      , t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var i = e.pagination.$el;
                        i.removeClass(t.hiddenClass),
                        i.removeClass(t.modifierClass + t.type),
                        e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                        t.clickable && i.off("click", "." + t.bulletClass)
                    }
                }
            }
              , bt = {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(e) {
                            return e
                        },
                        formatFractionTotal: function(e) {
                            return e
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        pagination: {
                            init: wt.init.bind(e),
                            render: wt.render.bind(e),
                            update: wt.update.bind(e),
                            destroy: wt.destroy.bind(e),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.pagination.init(),
                        e.pagination.render(),
                        e.pagination.update()
                    },
                    activeIndexChange: function() {
                        var e = this;
                        (e.params.loop || "undefined" === typeof e.snapIndex) && e.pagination.update()
                    },
                    snapIndexChange: function() {
                        var e = this;
                        e.params.loop || e.pagination.update()
                    },
                    slidesLengthChange: function() {
                        var e = this;
                        e.params.loop && (e.pagination.render(),
                        e.pagination.update())
                    },
                    snapGridLengthChange: function() {
                        var e = this;
                        e.params.loop || (e.pagination.render(),
                        e.pagination.update())
                    },
                    destroy: function() {
                        var e = this;
                        e.pagination.destroy()
                    },
                    click: function(e) {
                        var t = this;
                        if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !a(e.target).hasClass(t.params.pagination.bulletClass)) {
                            var i = t.pagination.$el.hasClass(t.params.pagination.hiddenClass);
                            !0 === i ? t.emit("paginationShow", t) : t.emit("paginationHide", t),
                            t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                        }
                    }
                }
            }
              , xt = {
                setTranslate: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar
                          , i = e.rtlTranslate
                          , a = e.progress
                          , s = t.dragSize
                          , n = t.trackSize
                          , r = t.$dragEl
                          , o = t.$el
                          , l = e.params.scrollbar
                          , d = s
                          , u = (n - s) * a;
                        i ? (u = -u,
                        u > 0 ? (d = s - u,
                        u = 0) : -u + s > n && (d = n + u)) : u < 0 ? (d = s + u,
                        u = 0) : u + s > n && (d = n - u),
                        e.isHorizontal() ? (G.transforms3d ? r.transform("translate3d(" + u + "px, 0, 0)") : r.transform("translateX(" + u + "px)"),
                        r[0].style.width = d + "px") : (G.transforms3d ? r.transform("translate3d(0px, " + u + "px, 0)") : r.transform("translateY(" + u + "px)"),
                        r[0].style.height = d + "px"),
                        l.hide && (clearTimeout(e.scrollbar.timeout),
                        o[0].style.opacity = 1,
                        e.scrollbar.timeout = setTimeout((function() {
                            o[0].style.opacity = 0,
                            o.transition(400)
                        }
                        ), 1e3))
                    }
                },
                setTransition: function(e) {
                    var t = this;
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                },
                updateSize: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar
                          , i = t.$dragEl
                          , a = t.$el;
                        i[0].style.width = "",
                        i[0].style.height = "";
                        var s, n = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, r = e.size / e.virtualSize, o = r * (n / e.size);
                        s = "auto" === e.params.scrollbar.dragSize ? n * r : parseInt(e.params.scrollbar.dragSize, 10),
                        e.isHorizontal() ? i[0].style.width = s + "px" : i[0].style.height = s + "px",
                        a[0].style.display = r >= 1 ? "none" : "",
                        e.params.scrollbar.hide && (a[0].style.opacity = 0),
                        F.extend(t, {
                            trackSize: n,
                            divider: r,
                            moveDivider: o,
                            dragSize: s
                        }),
                        t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                    }
                },
                getPointerPosition: function(e) {
                    var t = this;
                    return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                },
                setDragPosition: function(e) {
                    var t, i = this, a = i.scrollbar, s = i.rtlTranslate, n = a.$el, r = a.dragSize, o = a.trackSize, l = a.dragStartPos;
                    t = (a.getPointerPosition(e) - n.offset()[i.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (o - r),
                    t = Math.max(Math.min(t, 1), 0),
                    s && (t = 1 - t);
                    var d = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
                    i.updateProgress(d),
                    i.setTranslate(d),
                    i.updateActiveIndex(),
                    i.updateSlidesClasses()
                },
                onDragStart: function(e) {
                    var t = this
                      , i = t.params.scrollbar
                      , a = t.scrollbar
                      , s = t.$wrapperEl
                      , n = a.$el
                      , r = a.$dragEl;
                    t.scrollbar.isTouched = !0,
                    t.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? a.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    r.transition(100),
                    a.setDragPosition(e),
                    clearTimeout(t.scrollbar.dragTimeout),
                    n.transition(0),
                    i.hide && n.css("opacity", 1),
                    t.emit("scrollbarDragStart", e)
                },
                onDragMove: function(e) {
                    var t = this
                      , i = t.scrollbar
                      , a = t.$wrapperEl
                      , s = i.$el
                      , n = i.$dragEl;
                    t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    i.setDragPosition(e),
                    a.transition(0),
                    s.transition(0),
                    n.transition(0),
                    t.emit("scrollbarDragMove", e))
                },
                onDragEnd: function(e) {
                    var t = this
                      , i = t.params.scrollbar
                      , a = t.scrollbar
                      , s = a.$el;
                    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
                    i.hide && (clearTimeout(t.scrollbar.dragTimeout),
                    t.scrollbar.dragTimeout = F.nextTick((function() {
                        s.css("opacity", 0),
                        s.transition(400)
                    }
                    ), 1e3)),
                    t.emit("scrollbarDragEnd", e),
                    i.snapOnRelease && t.slideToClosest())
                },
                enableDraggable: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var i = t.scrollbar
                          , a = t.touchEventsTouch
                          , s = t.touchEventsDesktop
                          , n = t.params
                          , r = i.$el
                          , o = r[0]
                          , l = !(!G.passiveListener || !n.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        }
                          , d = !(!G.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        G.touch ? (o.addEventListener(a.start, t.scrollbar.onDragStart, l),
                        o.addEventListener(a.move, t.scrollbar.onDragMove, l),
                        o.addEventListener(a.end, t.scrollbar.onDragEnd, d)) : (o.addEventListener(s.start, t.scrollbar.onDragStart, l),
                        e.addEventListener(s.move, t.scrollbar.onDragMove, l),
                        e.addEventListener(s.end, t.scrollbar.onDragEnd, d))
                    }
                },
                disableDraggable: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var i = t.scrollbar
                          , a = t.touchEventsTouch
                          , s = t.touchEventsDesktop
                          , n = t.params
                          , r = i.$el
                          , o = r[0]
                          , l = !(!G.passiveListener || !n.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        }
                          , d = !(!G.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        G.touch ? (o.removeEventListener(a.start, t.scrollbar.onDragStart, l),
                        o.removeEventListener(a.move, t.scrollbar.onDragMove, l),
                        o.removeEventListener(a.end, t.scrollbar.onDragEnd, d)) : (o.removeEventListener(s.start, t.scrollbar.onDragStart, l),
                        e.removeEventListener(s.move, t.scrollbar.onDragMove, l),
                        e.removeEventListener(s.end, t.scrollbar.onDragEnd, d))
                    }
                },
                init: function() {
                    var e = this;
                    if (e.params.scrollbar.el) {
                        var t = e.scrollbar
                          , i = e.$el
                          , s = e.params.scrollbar
                          , n = a(s.el);
                        e.params.uniqueNavElements && "string" === typeof s.el && n.length > 1 && 1 === i.find(s.el).length && (n = i.find(s.el));
                        var r = n.find("." + e.params.scrollbar.dragClass);
                        0 === r.length && (r = a('<div class="' + e.params.scrollbar.dragClass + '"></div>'),
                        n.append(r)),
                        F.extend(t, {
                            $el: n,
                            el: n[0],
                            $dragEl: r,
                            dragEl: r[0]
                        }),
                        s.draggable && t.enableDraggable()
                    }
                },
                destroy: function() {
                    var e = this;
                    e.scrollbar.disableDraggable()
                }
            }
              , Ct = {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        scrollbar: {
                            init: xt.init.bind(e),
                            destroy: xt.destroy.bind(e),
                            updateSize: xt.updateSize.bind(e),
                            setTranslate: xt.setTranslate.bind(e),
                            setTransition: xt.setTransition.bind(e),
                            enableDraggable: xt.enableDraggable.bind(e),
                            disableDraggable: xt.disableDraggable.bind(e),
                            setDragPosition: xt.setDragPosition.bind(e),
                            getPointerPosition: xt.getPointerPosition.bind(e),
                            onDragStart: xt.onDragStart.bind(e),
                            onDragMove: xt.onDragMove.bind(e),
                            onDragEnd: xt.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.scrollbar.init(),
                        e.scrollbar.updateSize(),
                        e.scrollbar.setTranslate()
                    },
                    update: function() {
                        var e = this;
                        e.scrollbar.updateSize()
                    },
                    resize: function() {
                        var e = this;
                        e.scrollbar.updateSize()
                    },
                    observerUpdate: function() {
                        var e = this;
                        e.scrollbar.updateSize()
                    },
                    setTranslate: function() {
                        var e = this;
                        e.scrollbar.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        t.scrollbar.setTransition(e)
                    },
                    destroy: function() {
                        var e = this;
                        e.scrollbar.destroy()
                    }
                }
            }
              , Tt = {
                setTransform: function(e, t) {
                    var i = this
                      , s = i.rtl
                      , n = a(e)
                      , r = s ? -1 : 1
                      , o = n.attr("data-swiper-parallax") || "0"
                      , l = n.attr("data-swiper-parallax-x")
                      , d = n.attr("data-swiper-parallax-y")
                      , u = n.attr("data-swiper-parallax-scale")
                      , c = n.attr("data-swiper-parallax-opacity");
                    if (l || d ? (l = l || "0",
                    d = d || "0") : i.isHorizontal() ? (l = o,
                    d = "0") : (d = o,
                    l = "0"),
                    l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t * r + "%" : l * t * r + "px",
                    d = d.indexOf("%") >= 0 ? parseInt(d, 10) * t + "%" : d * t + "px",
                    "undefined" !== typeof c && null !== c) {
                        var p = c - (c - 1) * (1 - Math.abs(t));
                        n[0].style.opacity = p
                    }
                    if ("undefined" === typeof u || null === u)
                        n.transform("translate3d(" + l + ", " + d + ", 0px)");
                    else {
                        var h = u - (u - 1) * (1 - Math.abs(t));
                        n.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")")
                    }
                },
                setTranslate: function() {
                    var e = this
                      , t = e.$el
                      , i = e.slides
                      , s = e.progress
                      , n = e.snapGrid;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                        e.parallax.setTransform(i, s)
                    }
                    )),
                    i.each((function(t, i) {
                        var r = i.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - s * (n.length - 1)),
                        r = Math.min(Math.max(r, -1), 1),
                        a(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                            e.parallax.setTransform(i, r)
                        }
                        ))
                    }
                    ))
                },
                setTransition: function(e) {
                    void 0 === e && (e = this.params.speed);
                    var t = this
                      , i = t.$el;
                    i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                        var s = a(i)
                          , n = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (n = 0),
                        s.transition(n)
                    }
                    ))
                }
            }
              , St = {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        parallax: {
                            setTransform: Tt.setTransform.bind(e),
                            setTranslate: Tt.setTranslate.bind(e),
                            setTransition: Tt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
                        e.originalParams.watchSlidesProgress = !0)
                    },
                    init: function() {
                        var e = this;
                        e.params.parallax.enabled && e.parallax.setTranslate()
                    },
                    setTranslate: function() {
                        var e = this;
                        e.params.parallax.enabled && e.parallax.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        t.params.parallax.enabled && t.parallax.setTransition(e)
                    }
                }
            }
              , It = {
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2)
                        return 1;
                    var t = e.targetTouches[0].pageX
                      , i = e.targetTouches[0].pageY
                      , a = e.targetTouches[1].pageX
                      , s = e.targetTouches[1].pageY
                      , n = Math.sqrt(Math.pow(a - t, 2) + Math.pow(s - i, 2));
                    return n
                },
                onGestureStart: function(e) {
                    var t = this
                      , i = t.params.zoom
                      , s = t.zoom
                      , n = s.gesture;
                    if (s.fakeGestureTouched = !1,
                    s.fakeGestureMoved = !1,
                    !G.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                            return;
                        s.fakeGestureTouched = !0,
                        n.scaleStart = It.getDistanceBetweenTouches(e)
                    }
                    n.$slideEl && n.$slideEl.length || (n.$slideEl = a(e.target).closest(".swiper-slide"),
                    0 === n.$slideEl.length && (n.$slideEl = t.slides.eq(t.activeIndex)),
                    n.$imageEl = n.$slideEl.find("img, svg, canvas"),
                    n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass),
                    n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
                    0 !== n.$imageWrapEl.length) ? (n.$imageEl.transition(0),
                    t.zoom.isScaling = !0) : n.$imageEl = void 0
                },
                onGestureChange: function(e) {
                    var t = this
                      , i = t.params.zoom
                      , a = t.zoom
                      , s = a.gesture;
                    if (!G.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                            return;
                        a.fakeGestureMoved = !0,
                        s.scaleMove = It.getDistanceBetweenTouches(e)
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (G.gestures ? a.scale = e.scale * a.currentScale : a.scale = s.scaleMove / s.scaleStart * a.currentScale,
                    a.scale > s.maxRatio && (a.scale = s.maxRatio - 1 + Math.pow(a.scale - s.maxRatio + 1, .5)),
                    a.scale < i.minRatio && (a.scale = i.minRatio + 1 - Math.pow(i.minRatio - a.scale + 1, .5)),
                    s.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = this
                      , i = t.params.zoom
                      , a = t.zoom
                      , s = a.gesture;
                    if (!G.gestures) {
                        if (!a.fakeGestureTouched || !a.fakeGestureMoved)
                            return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !Oe.android)
                            return;
                        a.fakeGestureTouched = !1,
                        a.fakeGestureMoved = !1
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, s.maxRatio), i.minRatio),
                    s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                    a.currentScale = a.scale,
                    a.isScaling = !1,
                    1 === a.scale && (s.$slideEl = void 0))
                },
                onTouchStart: function(e) {
                    var t = this
                      , i = t.zoom
                      , a = i.gesture
                      , s = i.image;
                    a.$imageEl && 0 !== a.$imageEl.length && (s.isTouched || (Oe.android && e.preventDefault(),
                    s.isTouched = !0,
                    s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function(e) {
                    var t = this
                      , i = t.zoom
                      , a = i.gesture
                      , s = i.image
                      , n = i.velocity;
                    if (a.$imageEl && 0 !== a.$imageEl.length && (t.allowClick = !1,
                    s.isTouched && a.$slideEl)) {
                        s.isMoved || (s.width = a.$imageEl[0].offsetWidth,
                        s.height = a.$imageEl[0].offsetHeight,
                        s.startX = F.getTranslate(a.$imageWrapEl[0], "x") || 0,
                        s.startY = F.getTranslate(a.$imageWrapEl[0], "y") || 0,
                        a.slideWidth = a.$slideEl[0].offsetWidth,
                        a.slideHeight = a.$slideEl[0].offsetHeight,
                        a.$imageWrapEl.transition(0),
                        t.rtl && (s.startX = -s.startX,
                        s.startY = -s.startY));
                        var r = s.width * i.scale
                          , o = s.height * i.scale;
                        if (!(r < a.slideWidth && o < a.slideHeight)) {
                            if (s.minX = Math.min(a.slideWidth / 2 - r / 2, 0),
                            s.maxX = -s.minX,
                            s.minY = Math.min(a.slideHeight / 2 - o / 2, 0),
                            s.maxY = -s.minY,
                            s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                            !s.isMoved && !i.isScaling) {
                                if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                                    return void (s.isTouched = !1);
                                if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                                    return void (s.isTouched = !1)
                            }
                            e.preventDefault(),
                            e.stopPropagation(),
                            s.isMoved = !0,
                            s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                            s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                            s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                            s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                            s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                            s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                            n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x),
                            n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y),
                            n.prevTime || (n.prevTime = Date.now()),
                            n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2,
                            n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2,
                            Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                            Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                            n.prevPositionX = s.touchesCurrent.x,
                            n.prevPositionY = s.touchesCurrent.y,
                            n.prevTime = Date.now(),
                            a.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var e = this
                      , t = e.zoom
                      , i = t.gesture
                      , a = t.image
                      , s = t.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length) {
                        if (!a.isTouched || !a.isMoved)
                            return a.isTouched = !1,
                            void (a.isMoved = !1);
                        a.isTouched = !1,
                        a.isMoved = !1;
                        var n = 300
                          , r = 300
                          , o = s.x * n
                          , l = a.currentX + o
                          , d = s.y * r
                          , u = a.currentY + d;
                        0 !== s.x && (n = Math.abs((l - a.currentX) / s.x)),
                        0 !== s.y && (r = Math.abs((u - a.currentY) / s.y));
                        var c = Math.max(n, r);
                        a.currentX = l,
                        a.currentY = u;
                        var p = a.width * t.scale
                          , h = a.height * t.scale;
                        a.minX = Math.min(i.slideWidth / 2 - p / 2, 0),
                        a.maxX = -a.minX,
                        a.minY = Math.min(i.slideHeight / 2 - h / 2, 0),
                        a.maxY = -a.minY,
                        a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX),
                        a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY),
                        i.$imageWrapEl.transition(c).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var e = this
                      , t = e.zoom
                      , i = t.gesture;
                    i.$slideEl && e.previousIndex !== e.activeIndex && (i.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                    i.$imageWrapEl.transform("translate3d(0,0,0)"),
                    t.scale = 1,
                    t.currentScale = 1,
                    i.$slideEl = void 0,
                    i.$imageEl = void 0,
                    i.$imageWrapEl = void 0)
                },
                toggle: function(e) {
                    var t = this
                      , i = t.zoom;
                    i.scale && 1 !== i.scale ? i.out() : i.in(e)
                },
                in: function(e) {
                    var t, i, s, n, r, o, l, d, u, c, p, h, f, g, m, v, y, w, b = this, x = b.zoom, C = b.params.zoom, T = x.gesture, S = x.image;
                    (T.$slideEl || (T.$slideEl = b.clickedSlide ? a(b.clickedSlide) : b.slides.eq(b.activeIndex),
                    T.$imageEl = T.$slideEl.find("img, svg, canvas"),
                    T.$imageWrapEl = T.$imageEl.parent("." + C.containerClass)),
                    T.$imageEl && 0 !== T.$imageEl.length) && (T.$slideEl.addClass("" + C.zoomedSlideClass),
                    "undefined" === typeof S.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
                    i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = S.touchesStart.x,
                    i = S.touchesStart.y),
                    x.scale = T.$imageWrapEl.attr("data-swiper-zoom") || C.maxRatio,
                    x.currentScale = T.$imageWrapEl.attr("data-swiper-zoom") || C.maxRatio,
                    e ? (y = T.$slideEl[0].offsetWidth,
                    w = T.$slideEl[0].offsetHeight,
                    s = T.$slideEl.offset().left,
                    n = T.$slideEl.offset().top,
                    r = s + y / 2 - t,
                    o = n + w / 2 - i,
                    u = T.$imageEl[0].offsetWidth,
                    c = T.$imageEl[0].offsetHeight,
                    p = u * x.scale,
                    h = c * x.scale,
                    f = Math.min(y / 2 - p / 2, 0),
                    g = Math.min(w / 2 - h / 2, 0),
                    m = -f,
                    v = -g,
                    l = r * x.scale,
                    d = o * x.scale,
                    l < f && (l = f),
                    l > m && (l = m),
                    d < g && (d = g),
                    d > v && (d = v)) : (l = 0,
                    d = 0),
                    T.$imageWrapEl.transition(300).transform("translate3d(" + l + "px, " + d + "px,0)"),
                    T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + x.scale + ")"))
                },
                out: function() {
                    var e = this
                      , t = e.zoom
                      , i = e.params.zoom
                      , s = t.gesture;
                    s.$slideEl || (s.$slideEl = e.clickedSlide ? a(e.clickedSlide) : e.slides.eq(e.activeIndex),
                    s.$imageEl = s.$slideEl.find("img, svg, canvas"),
                    s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)),
                    s.$imageEl && 0 !== s.$imageEl.length && (t.scale = 1,
                    t.currentScale = 1,
                    s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                    s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                    s.$slideEl.removeClass("" + i.zoomedSlideClass),
                    s.$slideEl = void 0)
                },
                enable: function() {
                    var e = this
                      , t = e.zoom;
                    if (!t.enabled) {
                        t.enabled = !0;
                        var i = !("touchstart" !== e.touchEvents.start || !G.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        G.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i),
                        e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i),
                        e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i),
                        e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i),
                        e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)),
                        e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                    }
                },
                disable: function() {
                    var e = this
                      , t = e.zoom;
                    if (t.enabled) {
                        e.zoom.enabled = !1;
                        var i = !("touchstart" !== e.touchEvents.start || !G.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        G.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i),
                        e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i),
                        e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i),
                        e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i),
                        e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)),
                        e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                    }
                }
            }
              , kt = {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function() {
                    var e = this
                      , t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                        t[i] = It[i].bind(e)
                    }
                    )),
                    F.extend(e, {
                        zoom: t
                    });
                    var i = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: function() {
                            return i
                        },
                        set: function(t) {
                            if (i !== t) {
                                var a = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                                  , s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                e.emit("zoomChange", t, a, s)
                            }
                            i = t
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.zoom.enabled && e.zoom.enable()
                    },
                    destroy: function() {
                        var e = this;
                        e.zoom.disable()
                    },
                    touchStart: function(e) {
                        var t = this;
                        t.zoom.enabled && t.zoom.onTouchStart(e)
                    },
                    touchEnd: function(e) {
                        var t = this;
                        t.zoom.enabled && t.zoom.onTouchEnd(e)
                    },
                    doubleTap: function(e) {
                        var t = this;
                        t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                    }
                }
            }
              , Et = {
                loadInSlide: function(e, t) {
                    void 0 === t && (t = !0);
                    var i = this
                      , s = i.params.lazy;
                    if ("undefined" !== typeof e && 0 !== i.slides.length) {
                        var n = i.virtual && i.params.virtual.enabled
                          , r = n ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e)
                          , o = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                        !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (o = o.add(r[0])),
                        0 !== o.length && o.each((function(e, n) {
                            var o = a(n);
                            o.addClass(s.loadingClass);
                            var l = o.attr("data-background")
                              , d = o.attr("data-src")
                              , u = o.attr("data-srcset")
                              , c = o.attr("data-sizes");
                            i.loadImage(o[0], d || l, u, c, !1, (function() {
                                if ("undefined" !== typeof i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                    if (l ? (o.css("background-image", 'url("' + l + '")'),
                                    o.removeAttr("data-background")) : (u && (o.attr("srcset", u),
                                    o.removeAttr("data-srcset")),
                                    c && (o.attr("sizes", c),
                                    o.removeAttr("data-sizes")),
                                    d && (o.attr("src", d),
                                    o.removeAttr("data-src"))),
                                    o.addClass(s.loadedClass).removeClass(s.loadingClass),
                                    r.find("." + s.preloaderClass).remove(),
                                    i.params.loop && t) {
                                        var e = r.attr("data-swiper-slide-index");
                                        if (r.hasClass(i.params.slideDuplicateClass)) {
                                            var a = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(a.index(), !1)
                                        } else {
                                            var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            i.lazy.loadInSlide(n.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", r[0], o[0])
                                }
                            }
                            )),
                            i.emit("lazyImageLoad", r[0], o[0])
                        }
                        ))
                    }
                },
                load: function() {
                    var e = this
                      , t = e.$wrapperEl
                      , i = e.params
                      , s = e.slides
                      , n = e.activeIndex
                      , r = e.virtual && i.virtual.enabled
                      , o = i.lazy
                      , l = i.slidesPerView;
                    function d(e) {
                        if (r) {
                            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                                return !0
                        } else if (s[e])
                            return !0;
                        return !1
                    }
                    function u(e) {
                        return r ? a(e).attr("data-swiper-slide-index") : a(e).index()
                    }
                    if ("auto" === l && (l = 0),
                    e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                    e.params.watchSlidesVisibility)
                        t.children("." + i.slideVisibleClass).each((function(t, i) {
                            var s = r ? a(i).attr("data-swiper-slide-index") : a(i).index();
                            e.lazy.loadInSlide(s)
                        }
                        ));
                    else if (l > 1)
                        for (var c = n; c < n + l; c += 1)
                            d(c) && e.lazy.loadInSlide(c);
                    else
                        e.lazy.loadInSlide(n);
                    if (o.loadPrevNext)
                        if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                            for (var p = o.loadPrevNextAmount, h = l, f = Math.min(n + h + Math.max(p, h), s.length), g = Math.max(n - Math.max(h, p), 0), m = n + l; m < f; m += 1)
                                d(m) && e.lazy.loadInSlide(m);
                            for (var v = g; v < n; v += 1)
                                d(v) && e.lazy.loadInSlide(v)
                        } else {
                            var y = t.children("." + i.slideNextClass);
                            y.length > 0 && e.lazy.loadInSlide(u(y));
                            var w = t.children("." + i.slidePrevClass);
                            w.length > 0 && e.lazy.loadInSlide(u(w))
                        }
                }
            }
              , Dt = {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: Et.load.bind(e),
                            loadInSlide: Et.loadInSlide.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                    },
                    init: function() {
                        var e = this;
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                    },
                    scroll: function() {
                        var e = this;
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                    },
                    resize: function() {
                        var e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    scrollbarDragMove: function() {
                        var e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    transitionStart: function() {
                        var e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                    }
                }
            }
              , Lt = {
                LinearSpline: function(e, t) {
                    var i, a, s = function() {
                        var e, t, i;
                        return function(a, s) {
                            t = -1,
                            e = a.length;
                            while (e - t > 1)
                                i = e + t >> 1,
                                a[i] <= s ? t = i : e = i;
                            return e
                        }
                    }();
                    return this.x = e,
                    this.y = t,
                    this.lastIndex = e.length - 1,
                    this.interpolate = function(e) {
                        return e ? (a = s(this.x, e),
                        i = a - 1,
                        (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0
                    }
                    ,
                    this
                },
                getInterpolateFunction: function(e) {
                    var t = this;
                    t.controller.spline || (t.controller.spline = t.params.loop ? new Lt.LinearSpline(t.slidesGrid,e.slidesGrid) : new Lt.LinearSpline(t.snapGrid,e.snapGrid))
                },
                setTranslate: function(e, t) {
                    var i, a, s = this, n = s.controller.control;
                    function r(e) {
                        var t = s.rtlTranslate ? -s.translate : s.translate;
                        "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e),
                        a = -s.controller.spline.interpolate(-t)),
                        a && "container" !== s.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()),
                        a = (t - s.minTranslate()) * i + e.minTranslate()),
                        s.params.controller.inverse && (a = e.maxTranslate() - a),
                        e.updateProgress(a),
                        e.setTranslate(a, s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                    }
                    if (Array.isArray(n))
                        for (var o = 0; o < n.length; o += 1)
                            n[o] !== t && n[o]instanceof at && r(n[o]);
                    else
                        n instanceof at && t !== n && r(n)
                },
                setTransition: function(e, t) {
                    var i, a = this, s = a.controller.control;
                    function n(t) {
                        t.setTransition(e, a),
                        0 !== e && (t.transitionStart(),
                        t.params.autoHeight && F.nextTick((function() {
                            t.updateAutoHeight()
                        }
                        )),
                        t.$wrapperEl.transitionEnd((function() {
                            s && (t.params.loop && "slide" === a.params.controller.by && t.loopFix(),
                            t.transitionEnd())
                        }
                        )))
                    }
                    if (Array.isArray(s))
                        for (i = 0; i < s.length; i += 1)
                            s[i] !== t && s[i]instanceof at && n(s[i]);
                    else
                        s instanceof at && t !== s && n(s)
                }
            }
              , At = {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        controller: {
                            control: e.params.controller.control,
                            getInterpolateFunction: Lt.getInterpolateFunction.bind(e),
                            setTranslate: Lt.setTranslate.bind(e),
                            setTransition: Lt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    update: function() {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                    },
                    resize: function() {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                    },
                    observerUpdate: function() {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                    },
                    setTranslate: function(e, t) {
                        var i = this;
                        i.controller.control && i.controller.setTranslate(e, t)
                    },
                    setTransition: function(e, t) {
                        var i = this;
                        i.controller.control && i.controller.setTransition(e, t)
                    }
                }
            }
              , _t = {
                makeElFocusable: function(e) {
                    return e.attr("tabIndex", "0"),
                    e
                },
                addElRole: function(e, t) {
                    return e.attr("role", t),
                    e
                },
                addElLabel: function(e, t) {
                    return e.attr("aria-label", t),
                    e
                },
                disableEl: function(e) {
                    return e.attr("aria-disabled", !0),
                    e
                },
                enableEl: function(e) {
                    return e.attr("aria-disabled", !1),
                    e
                },
                onEnterKey: function(e) {
                    var t = this
                      , i = t.params.a11y;
                    if (13 === e.keyCode) {
                        var s = a(e.target);
                        t.navigation && t.navigation.$nextEl && s.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                        t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)),
                        t.navigation && t.navigation.$prevEl && s.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                        t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)),
                        t.pagination && s.is("." + t.params.pagination.bulletClass) && s[0].click()
                    }
                },
                notify: function(e) {
                    var t = this
                      , i = t.a11y.liveRegion;
                    0 !== i.length && (i.html(""),
                    i.html(e))
                },
                updateNavigation: function() {
                    var e = this;
                    if (!e.params.loop) {
                        var t = e.navigation
                          , i = t.$nextEl
                          , a = t.$prevEl;
                        a && a.length > 0 && (e.isBeginning ? e.a11y.disableEl(a) : e.a11y.enableEl(a)),
                        i && i.length > 0 && (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i))
                    }
                },
                updatePagination: function() {
                    var e = this
                      , t = e.params.a11y;
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, s) {
                        var n = a(s);
                        e.a11y.makeElFocusable(n),
                        e.a11y.addElRole(n, "button"),
                        e.a11y.addElLabel(n, t.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
                    }
                    ))
                },
                init: function() {
                    var e = this;
                    e.$el.append(e.a11y.liveRegion);
                    var t, i, a = e.params.a11y;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
                    t && (e.a11y.makeElFocusable(t),
                    e.a11y.addElRole(t, "button"),
                    e.a11y.addElLabel(t, a.nextSlideMessage),
                    t.on("keydown", e.a11y.onEnterKey)),
                    i && (e.a11y.makeElFocusable(i),
                    e.a11y.addElRole(i, "button"),
                    e.a11y.addElLabel(i, a.prevSlideMessage),
                    i.on("keydown", e.a11y.onEnterKey)),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                },
                destroy: function() {
                    var e, t, i = this;
                    i.a11y.liveRegion && i.a11y.liveRegion.length > 0 && i.a11y.liveRegion.remove(),
                    i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl),
                    i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl),
                    e && e.off("keydown", i.a11y.onEnterKey),
                    t && t.off("keydown", i.a11y.onEnterKey),
                    i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
                }
            }
              , Pt = {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        a11y: {
                            liveRegion: a('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }),
                    Object.keys(_t).forEach((function(t) {
                        e.a11y[t] = _t[t].bind(e)
                    }
                    ))
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.a11y.enabled && (e.a11y.init(),
                        e.a11y.updateNavigation())
                    },
                    toEdge: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updateNavigation()
                    },
                    fromEdge: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updateNavigation()
                    },
                    paginationUpdate: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updatePagination()
                    },
                    destroy: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.destroy()
                    }
                }
            }
              , Mt = {
                init: function() {
                    var e = this;
                    if (e.params.history) {
                        if (!t.history || !t.history.pushState)
                            return e.params.history.enabled = !1,
                            void (e.params.hashNavigation.enabled = !0);
                        var i = e.history;
                        i.initialized = !0,
                        i.paths = Mt.getPathValues(),
                        (i.paths.key || i.paths.value) && (i.scrollToSlide(0, i.paths.value, e.params.runCallbacksOnInit),
                        e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
                    }
                },
                destroy: function() {
                    var e = this;
                    e.params.history.replaceState || t.removeEventListener("popstate", e.history.setHistoryPopState)
                },
                setHistoryPopState: function() {
                    var e = this;
                    e.history.paths = Mt.getPathValues(),
                    e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = t.location.pathname.slice(1).split("/").filter((function(e) {
                        return "" !== e
                    }
                    ))
                      , i = e.length
                      , a = e[i - 2]
                      , s = e[i - 1];
                    return {
                        key: a,
                        value: s
                    }
                },
                setHistory: function(e, i) {
                    var a = this;
                    if (a.history.initialized && a.params.history.enabled) {
                        var s = a.slides.eq(i)
                          , n = Mt.slugify(s.attr("data-history"));
                        t.location.pathname.includes(e) || (n = e + "/" + n);
                        var r = t.history.state;
                        r && r.value === n || (a.params.history.replaceState ? t.history.replaceState({
                            value: n
                        }, null, n) : t.history.pushState({
                            value: n
                        }, null, n))
                    }
                },
                slugify: function(e) {
                    return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, i) {
                    var a = this;
                    if (t)
                        for (var s = 0, n = a.slides.length; s < n; s += 1) {
                            var r = a.slides.eq(s)
                              , o = Mt.slugify(r.attr("data-history"));
                            if (o === t && !r.hasClass(a.params.slideDuplicateClass)) {
                                var l = r.index();
                                a.slideTo(l, e, i)
                            }
                        }
                    else
                        a.slideTo(0, e, i)
                }
            }
              , Ot = {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        history: {
                            init: Mt.init.bind(e),
                            setHistory: Mt.setHistory.bind(e),
                            setHistoryPopState: Mt.setHistoryPopState.bind(e),
                            scrollToSlide: Mt.scrollToSlide.bind(e),
                            destroy: Mt.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.history.enabled && e.history.init()
                    },
                    destroy: function() {
                        var e = this;
                        e.params.history.enabled && e.history.destroy()
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                    }
                }
            }
              , $t = {
                onHashCange: function() {
                    var t = this
                      , i = e.location.hash.replace("#", "")
                      , a = t.slides.eq(t.activeIndex).attr("data-hash");
                    if (i !== a) {
                        var s = t.$wrapperEl.children("." + t.params.slideClass + '[data-hash="' + i + '"]').index();
                        if ("undefined" === typeof s)
                            return;
                        t.slideTo(s)
                    }
                },
                setHash: function() {
                    var i = this;
                    if (i.hashNavigation.initialized && i.params.hashNavigation.enabled)
                        if (i.params.hashNavigation.replaceState && t.history && t.history.replaceState)
                            t.history.replaceState(null, null, "#" + i.slides.eq(i.activeIndex).attr("data-hash") || 0);
                        else {
                            var a = i.slides.eq(i.activeIndex)
                              , s = a.attr("data-hash") || a.attr("data-history");
                            e.location.hash = s || ""
                        }
                },
                init: function() {
                    var i = this;
                    if (!(!i.params.hashNavigation.enabled || i.params.history && i.params.history.enabled)) {
                        i.hashNavigation.initialized = !0;
                        var s = e.location.hash.replace("#", "");
                        if (s)
                            for (var n = 0, r = 0, o = i.slides.length; r < o; r += 1) {
                                var l = i.slides.eq(r)
                                  , d = l.attr("data-hash") || l.attr("data-history");
                                if (d === s && !l.hasClass(i.params.slideDuplicateClass)) {
                                    var u = l.index();
                                    i.slideTo(u, n, i.params.runCallbacksOnInit, !0)
                                }
                            }
                        i.params.hashNavigation.watchState && a(t).on("hashchange", i.hashNavigation.onHashCange)
                    }
                },
                destroy: function() {
                    var e = this;
                    e.params.hashNavigation.watchState && a(t).off("hashchange", e.hashNavigation.onHashCange)
                }
            }
              , zt = {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        hashNavigation: {
                            initialized: !1,
                            init: $t.init.bind(e),
                            destroy: $t.destroy.bind(e),
                            setHash: $t.setHash.bind(e),
                            onHashCange: $t.onHashCange.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.init()
                    },
                    destroy: function() {
                        var e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.hashNavigation.initialized && e.hashNavigation.setHash()
                    }
                }
            }
              , Rt = {
                run: function() {
                    var e = this
                      , t = e.slides.eq(e.activeIndex)
                      , i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    clearTimeout(e.autoplay.timeout),
                    e.autoplay.timeout = F.nextTick((function() {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                        e.slidePrev(e.params.speed, !0, !0),
                        e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                        e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                        e.slideNext(e.params.speed, !0, !0),
                        e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                        e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    }
                    ), i)
                },
                start: function() {
                    var e = this;
                    return "undefined" === typeof e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0,
                    e.emit("autoplayStart"),
                    e.autoplay.run(),
                    !0))
                },
                stop: function() {
                    var e = this;
                    return !!e.autoplay.running && ("undefined" !== typeof e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
                    e.autoplay.timeout = void 0),
                    e.autoplay.running = !1,
                    e.emit("autoplayStop"),
                    !0))
                },
                pause: function(e) {
                    var t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                    t.autoplay.paused = !0,
                    0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
                    t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
                    t.autoplay.run())))
                }
            }
              , Bt = {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: Rt.run.bind(e),
                            start: Rt.start.bind(e),
                            stop: Rt.stop.bind(e),
                            pause: Rt.pause.bind(e),
                            onTransitionEnd: function(t) {
                                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                                e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                                e.autoplay.paused = !1,
                                e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.autoplay.enabled && e.autoplay.start()
                    },
                    beforeTransitionStart: function(e, t) {
                        var i = this;
                        i.autoplay.running && (t || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(e) : i.autoplay.stop())
                    },
                    sliderFirstMove: function() {
                        var e = this;
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                    },
                    destroy: function() {
                        var e = this;
                        e.autoplay.running && e.autoplay.stop()
                    }
                }
            }
              , Nt = {
                setTranslate: function() {
                    for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
                        var a = e.slides.eq(i)
                          , s = a[0].swiperSlideOffset
                          , n = -s;
                        e.params.virtualTranslate || (n -= e.translate);
                        var r = 0;
                        e.isHorizontal() || (r = n,
                        n = 0);
                        var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                        a.css({
                            opacity: o
                        }).transform("translate3d(" + n + "px, " + r + "px, 0px)")
                    }
                },
                setTransition: function(e) {
                    var t = this
                      , i = t.slides
                      , a = t.$wrapperEl;
                    if (i.transition(e),
                    t.params.virtualTranslate && 0 !== e) {
                        var s = !1;
                        i.transitionEnd((function() {
                            if (!s && t && !t.destroyed) {
                                s = !0,
                                t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                                    a.trigger(e[i])
                            }
                        }
                        ))
                    }
                }
            }
              , jt = {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        fadeEffect: {
                            setTranslate: Nt.setTranslate.bind(e),
                            setTransition: Nt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("fade" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "fade");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            F.extend(e.params, t),
                            F.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        "fade" === e.params.effect && e.fadeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "fade" === t.params.effect && t.fadeEffect.setTransition(e)
                    }
                }
            }
              , qt = {
                setTranslate: function() {
                    var e, t = this, i = t.$el, s = t.$wrapperEl, n = t.slides, r = t.width, o = t.height, l = t.rtlTranslate, d = t.size, u = t.params.cubeEffect, c = t.isHorizontal(), p = t.virtual && t.params.virtual.enabled, h = 0;
                    u.shadow && (c ? (e = s.find(".swiper-cube-shadow"),
                    0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'),
                    s.append(e)),
                    e.css({
                        height: r + "px"
                    })) : (e = i.find(".swiper-cube-shadow"),
                    0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'),
                    i.append(e))));
                    for (var f = 0; f < n.length; f += 1) {
                        var g = n.eq(f)
                          , m = f;
                        p && (m = parseInt(g.attr("data-swiper-slide-index"), 10));
                        var v = 90 * m
                          , y = Math.floor(v / 360);
                        l && (v = -v,
                        y = Math.floor(-v / 360));
                        var w = Math.max(Math.min(g[0].progress, 1), -1)
                          , b = 0
                          , x = 0
                          , C = 0;
                        m % 4 === 0 ? (b = 4 * -y * d,
                        C = 0) : (m - 1) % 4 === 0 ? (b = 0,
                        C = 4 * -y * d) : (m - 2) % 4 === 0 ? (b = d + 4 * y * d,
                        C = d) : (m - 3) % 4 === 0 && (b = -d,
                        C = 3 * d + 4 * d * y),
                        l && (b = -b),
                        c || (x = b,
                        b = 0);
                        var T = "rotateX(" + (c ? 0 : -v) + "deg) rotateY(" + (c ? v : 0) + "deg) translate3d(" + b + "px, " + x + "px, " + C + "px)";
                        if (w <= 1 && w > -1 && (h = 90 * m + 90 * w,
                        l && (h = 90 * -m - 90 * w)),
                        g.transform(T),
                        u.slideShadows) {
                            var S = c ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top")
                              , I = c ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom");
                            0 === S.length && (S = a('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'),
                            g.append(S)),
                            0 === I.length && (I = a('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'),
                            g.append(I)),
                            S.length && (S[0].style.opacity = Math.max(-w, 0)),
                            I.length && (I[0].style.opacity = Math.max(w, 0))
                        }
                    }
                    if (s.css({
                        "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                        "transform-origin": "50% 50% -" + d / 2 + "px"
                    }),
                    u.shadow)
                        if (c)
                            e.transform("translate3d(0px, " + (r / 2 + u.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                        else {
                            var k = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)
                              , E = 1.5 - (Math.sin(2 * k * Math.PI / 360) / 2 + Math.cos(2 * k * Math.PI / 360) / 2)
                              , D = u.shadowScale
                              , L = u.shadowScale / E
                              , A = u.shadowOffset;
                            e.transform("scale3d(" + D + ", 1, " + L + ") translate3d(0px, " + (o / 2 + A) + "px, " + -o / 2 / L + "px) rotateX(-90deg)")
                        }
                    var _ = V.isSafari || V.isUiWebView ? -d / 2 : 0;
                    s.transform("translate3d(0px,0," + _ + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
                },
                setTransition: function(e) {
                    var t = this
                      , i = t.$el
                      , a = t.slides;
                    a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    t.params.cubeEffect.shadow && !t.isHorizontal() && i.find(".swiper-cube-shadow").transition(e)
                }
            }
              , Qt = {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        cubeEffect: {
                            setTranslate: qt.setTranslate.bind(e),
                            setTransition: qt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("cube" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "cube"),
                            e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            F.extend(e.params, t),
                            F.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        "cube" === e.params.effect && e.cubeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "cube" === t.params.effect && t.cubeEffect.setTransition(e)
                    }
                }
            }
              , Ft = {
                setTranslate: function() {
                    for (var e = this, t = e.slides, i = e.rtlTranslate, s = 0; s < t.length; s += 1) {
                        var n = t.eq(s)
                          , r = n[0].progress;
                        e.params.flipEffect.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                        var o = n[0].swiperSlideOffset
                          , l = -180 * r
                          , d = l
                          , u = 0
                          , c = -o
                          , p = 0;
                        if (e.isHorizontal() ? i && (d = -d) : (p = c,
                        c = 0,
                        u = -d,
                        d = 0),
                        n[0].style.zIndex = -Math.abs(Math.round(r)) + t.length,
                        e.params.flipEffect.slideShadows) {
                            var h = e.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top")
                              , f = e.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                            0 === h.length && (h = a('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'),
                            n.append(h)),
                            0 === f.length && (f = a('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'),
                            n.append(f)),
                            h.length && (h[0].style.opacity = Math.max(-r, 0)),
                            f.length && (f[0].style.opacity = Math.max(r, 0))
                        }
                        n.transform("translate3d(" + c + "px, " + p + "px, 0px) rotateX(" + u + "deg) rotateY(" + d + "deg)")
                    }
                },
                setTransition: function(e) {
                    var t = this
                      , i = t.slides
                      , a = t.activeIndex
                      , s = t.$wrapperEl;
                    if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    t.params.virtualTranslate && 0 !== e) {
                        var n = !1;
                        i.eq(a).transitionEnd((function() {
                            if (!n && t && !t.destroyed) {
                                n = !0,
                                t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                                    s.trigger(e[i])
                            }
                        }
                        ))
                    }
                }
            }
              , Gt = {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        flipEffect: {
                            setTranslate: Ft.setTranslate.bind(e),
                            setTransition: Ft.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("flip" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "flip"),
                            e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            F.extend(e.params, t),
                            F.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        "flip" === e.params.effect && e.flipEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "flip" === t.params.effect && t.flipEffect.setTransition(e)
                    }
                }
            }
              , Vt = {
                setTranslate: function() {
                    for (var e = this, t = e.width, i = e.height, s = e.slides, n = e.$wrapperEl, r = e.slidesSizesGrid, o = e.params.coverflowEffect, l = e.isHorizontal(), d = e.translate, u = l ? t / 2 - d : i / 2 - d, c = l ? o.rotate : -o.rotate, p = o.depth, h = 0, f = s.length; h < f; h += 1) {
                        var g = s.eq(h)
                          , m = r[h]
                          , v = g[0].swiperSlideOffset
                          , y = (u - v - m / 2) / m * o.modifier
                          , w = l ? c * y : 0
                          , b = l ? 0 : c * y
                          , x = -p * Math.abs(y)
                          , C = l ? 0 : o.stretch * y
                          , T = l ? o.stretch * y : 0;
                        Math.abs(T) < .001 && (T = 0),
                        Math.abs(C) < .001 && (C = 0),
                        Math.abs(x) < .001 && (x = 0),
                        Math.abs(w) < .001 && (w = 0),
                        Math.abs(b) < .001 && (b = 0);
                        var S = "translate3d(" + T + "px," + C + "px," + x + "px)  rotateX(" + b + "deg) rotateY(" + w + "deg)";
                        if (g.transform(S),
                        g[0].style.zIndex = 1 - Math.abs(Math.round(y)),
                        o.slideShadows) {
                            var I = l ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top")
                              , k = l ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom");
                            0 === I.length && (I = a('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'),
                            g.append(I)),
                            0 === k.length && (k = a('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'),
                            g.append(k)),
                            I.length && (I[0].style.opacity = y > 0 ? y : 0),
                            k.length && (k[0].style.opacity = -y > 0 ? -y : 0)
                        }
                    }
                    if (G.pointerEvents || G.prefixedPointerEvents) {
                        var E = n[0].style;
                        E.perspectiveOrigin = u + "px 50%"
                    }
                },
                setTransition: function(e) {
                    var t = this;
                    t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            }
              , Yt = {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        coverflowEffect: {
                            setTranslate: Vt.setTranslate.bind(e),
                            setTransition: Vt.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                        e.classNames.push(e.params.containerModifierClass + "3d"),
                        e.params.watchSlidesProgress = !0,
                        e.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function() {
                        var e = this;
                        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
                    }
                }
            }
              , Ht = {
                init: function() {
                    var e = this
                      , t = e.params
                      , i = t.thumbs
                      , a = e.constructor;
                    i.swiper instanceof a ? (e.thumbs.swiper = i.swiper,
                    F.extend(e.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }),
                    F.extend(e.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : F.isObject(i.swiper) && (e.thumbs.swiper = new a(F.extend({}, i.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })),
                    e.thumbs.swiperCreated = !0),
                    e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                    e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
                },
                onThumbClick: function() {
                    var e = this
                      , t = e.thumbs.swiper;
                    if (t) {
                        var i = t.clickedIndex
                          , s = t.clickedSlide;
                        if ((!s || !a(s).hasClass(e.params.thumbs.slideThumbActiveClass)) && "undefined" !== typeof i && null !== i) {
                            var n;
                            if (n = t.params.loop ? parseInt(a(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i,
                            e.params.loop) {
                                var r = e.activeIndex;
                                e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                                e._clientLeft = e.$wrapperEl[0].clientLeft,
                                r = e.activeIndex);
                                var o = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + n + '"]').eq(0).index()
                                  , l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + n + '"]').eq(0).index();
                                n = "undefined" === typeof o ? l : "undefined" === typeof l ? o : l - r < r - o ? l : o
                            }
                            e.slideTo(n)
                        }
                    }
                },
                update: function(e) {
                    var t = this
                      , i = t.thumbs.swiper;
                    if (i) {
                        var a = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                        if (t.realIndex !== i.realIndex) {
                            var s, n = i.activeIndex;
                            if (i.params.loop) {
                                i.slides.eq(n).hasClass(i.params.slideDuplicateClass) && (i.loopFix(),
                                i._clientLeft = i.$wrapperEl[0].clientLeft,
                                n = i.activeIndex);
                                var r = i.slides.eq(n).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index()
                                  , o = i.slides.eq(n).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                                s = "undefined" === typeof r ? o : "undefined" === typeof o ? r : o - n === n - r ? n : o - n < n - r ? o : r
                            } else
                                s = t.realIndex;
                            i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(s) < 0 && (i.params.centeredSlides ? s = s > n ? s - Math.floor(a / 2) + 1 : s + Math.floor(a / 2) - 1 : s > n && (s = s - a + 1),
                            i.slideTo(s, e ? 0 : void 0))
                        }
                        var l = 1
                          , d = t.params.thumbs.slideThumbActiveClass;
                        if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (l = t.params.slidesPerView),
                        i.slides.removeClass(d),
                        i.params.loop || i.params.virtual)
                            for (var u = 0; u < l; u += 1)
                                i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + u) + '"]').addClass(d);
                        else
                            for (var c = 0; c < l; c += 1)
                                i.slides.eq(t.realIndex + c).addClass(d)
                    }
                }
            }
              , Ut = {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs"
                    }
                },
                create: function() {
                    var e = this;
                    F.extend(e, {
                        thumbs: {
                            swiper: null,
                            init: Ht.init.bind(e),
                            update: Ht.update.bind(e),
                            onThumbClick: Ht.onThumbClick.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this
                          , t = e.params
                          , i = t.thumbs;
                        i && i.swiper && (e.thumbs.init(),
                        e.thumbs.update(!0))
                    },
                    slideChange: function() {
                        var e = this;
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    update: function() {
                        var e = this;
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    resize: function() {
                        var e = this;
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    observerUpdate: function() {
                        var e = this;
                        e.thumbs.swiper && e.thumbs.update()
                    },
                    setTransition: function(e) {
                        var t = this
                          , i = t.thumbs.swiper;
                        i && i.setTransition(e)
                    },
                    beforeDestroy: function() {
                        var e = this
                          , t = e.thumbs.swiper;
                        t && e.thumbs.swiperCreated && t && t.destroy()
                    }
                }
            }
              , Xt = [st, nt, rt, ot, dt, ct, ht, mt, yt, bt, Ct, St, kt, Dt, At, Pt, Ot, zt, Bt, jt, Qt, Gt, Yt, Ut];
            return "undefined" === typeof at.use && (at.use = at.Class.use,
            at.installModule = at.Class.installModule),
            at.use(Xt),
            at
        }
        ))
    },
    70614: function(e, t, i) {
        i(21703),
        function(t, a) {
            e.exports = a(i(37719))
        }(0, (function(e) {
            return function(e) {
                function t(a) {
                    if (i[a])
                        return i[a].exports;
                    var s = i[a] = {
                        i: a,
                        l: !1,
                        exports: {}
                    };
                    return e[a].call(s.exports, s, s.exports, t),
                    s.l = !0,
                    s.exports
                }
                var i = {};
                return t.m = e,
                t.c = i,
                t.i = function(e) {
                    return e
                }
                ,
                t.d = function(e, i, a) {
                    t.o(e, i) || Object.defineProperty(e, i, {
                        configurable: !1,
                        enumerable: !0,
                        get: a
                    })
                }
                ,
                t.n = function(e) {
                    var i = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return t.d(i, "a", i),
                    i
                }
                ,
                t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                t.p = "/",
                t(t.s = 4)
            }([function(t, i) {
                t.exports = e
            }
            , function(e, t) {
                e.exports = function(e, t, i, a, s, n) {
                    var r, o = e = e || {}, l = typeof e.default;
                    "object" !== l && "function" !== l || (r = e,
                    o = e.default);
                    var d, u = "function" == typeof o ? o.options : o;
                    if (t && (u.render = t.render,
                    u.staticRenderFns = t.staticRenderFns,
                    u._compiled = !0),
                    i && (u.functional = !0),
                    s && (u._scopeId = s),
                    n ? (d = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
                        e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                        a && a.call(this, e),
                        e && e._registeredComponents && e._registeredComponents.add(n)
                    }
                    ,
                    u._ssrRegister = d) : a && (d = a),
                    d) {
                        var c = u.functional
                          , p = c ? u.render : u.beforeCreate;
                        c ? (u._injectStyles = d,
                        u.render = function(e, t) {
                            return d.call(t),
                            p(e, t)
                        }
                        ) : u.beforeCreate = p ? [].concat(p, d) : [d]
                    }
                    return {
                        esModule: r,
                        exports: o,
                        options: u
                    }
                }
            }
            , function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = i(5)
                  , s = i.n(a)
                  , n = i(8)
                  , r = i(1)
                  , o = r(s.a, n.a, !1, null, null, null);
                t.default = o.exports
            }
            , function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = i(6)
                  , s = i.n(a)
                  , n = i(7)
                  , r = i(1)
                  , o = r(s.a, n.a, !1, null, null, null);
                t.default = o.exports
            }
            , function(e, t, i) {
                "use strict";
                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.install = t.swiperSlide = t.swiper = t.Swiper = void 0;
                var s = i(0)
                  , n = a(s)
                  , r = i(2)
                  , o = a(r)
                  , l = i(3)
                  , d = a(l)
                  , u = window.Swiper || n.default
                  , c = d.default
                  , p = o.default
                  , h = function(e, t) {
                    t && (d.default.props.globalOptions.default = function() {
                        return t
                    }
                    ),
                    e.component(d.default.name, d.default),
                    e.component(o.default.name, o.default)
                }
                  , f = {
                    Swiper: u,
                    swiper: c,
                    swiperSlide: p,
                    install: h
                };
                t.default = f,
                t.Swiper = u,
                t.swiper = c,
                t.swiperSlide = p,
                t.install = h
            }
            , function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.default = {
                    name: "swiper-slide",
                    data: function() {
                        return {
                            slideClass: "swiper-slide"
                        }
                    },
                    ready: function() {
                        this.update()
                    },
                    mounted: function() {
                        this.update(),
                        this.$parent && this.$parent.options && this.$parent.options.slideClass && (this.slideClass = this.$parent.options.slideClass)
                    },
                    updated: function() {
                        this.update()
                    },
                    attached: function() {
                        this.update()
                    },
                    methods: {
                        update: function() {
                            this.$parent && this.$parent.swiper && this.$parent.update()
                        }
                    }
                }
            }
            , function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = i(0)
                  , s = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(a)
                  , n = window.Swiper || s.default;
                "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                    value: function(e, t) {
                        if (null == e)
                            throw new TypeError("Cannot convert undefined or null to object");
                        for (var i = Object(e), a = 1; a < arguments.length; a++) {
                            var s = arguments[a];
                            if (null != s)
                                for (var n in s)
                                    Object.prototype.hasOwnProperty.call(s, n) && (i[n] = s[n])
                        }
                        return i
                    },
                    writable: !0,
                    configurable: !0
                });
                var r = ["beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize"];
                t.default = {
                    name: "swiper",
                    props: {
                        options: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        globalOptions: {
                            type: Object,
                            required: !1,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    data: function() {
                        return {
                            swiper: null,
                            classes: {
                                wrapperClass: "swiper-wrapper"
                            }
                        }
                    },
                    ready: function() {
                        this.swiper || this.mountInstance()
                    },
                    mounted: function() {
                        if (!this.swiper) {
                            var e = !1;
                            for (var t in this.classes)
                                this.classes.hasOwnProperty(t) && this.options[t] && (e = !0,
                                this.classes[t] = this.options[t]);
                            e ? this.$nextTick(this.mountInstance) : this.mountInstance()
                        }
                    },
                    activated: function() {
                        this.update()
                    },
                    updated: function() {
                        this.update()
                    },
                    beforeDestroy: function() {
                        this.$nextTick((function() {
                            this.swiper && (this.swiper.destroy && this.swiper.destroy(),
                            delete this.swiper)
                        }
                        ))
                    },
                    methods: {
                        update: function() {
                            this.swiper && (this.swiper.update && this.swiper.update(),
                            this.swiper.navigation && this.swiper.navigation.update(),
                            this.swiper.pagination && this.swiper.pagination.render(),
                            this.swiper.pagination && this.swiper.pagination.update())
                        },
                        mountInstance: function() {
                            var e = Object.assign({}, this.globalOptions, this.options);
                            this.swiper = new n(this.$el,e),
                            this.bindEvents(),
                            this.$emit("ready", this.swiper)
                        },
                        bindEvents: function() {
                            var e = this
                              , t = this;
                            r.forEach((function(i) {
                                e.swiper.on(i, (function() {
                                    t.$emit.apply(t, [i].concat(Array.prototype.slice.call(arguments))),
                                    t.$emit.apply(t, [i.replace(/([A-Z])/g, "-$1").toLowerCase()].concat(Array.prototype.slice.call(arguments)))
                                }
                                ))
                            }
                            ))
                        }
                    }
                }
            }
            , function(e, t, i) {
                "use strict";
                var a = function() {
                    var e = this
                      , t = e.$createElement
                      , i = e._self._c || t;
                    return i("div", {
                        staticClass: "swiper-container"
                    }, [e._t("parallax-bg"), e._v(" "), i("div", {
                        class: e.classes.wrapperClass
                    }, [e._t("default")], 2), e._v(" "), e._t("pagination"), e._v(" "), e._t("button-prev"), e._v(" "), e._t("button-next"), e._v(" "), e._t("scrollbar")], 2)
                }
                  , s = []
                  , n = {
                    render: a,
                    staticRenderFns: s
                };
                t.a = n
            }
            , function(e, t, i) {
                "use strict";
                var a = function() {
                    var e = this
                      , t = e.$createElement;
                    return (e._self._c || t)("div", {
                        class: e.slideClass
                    }, [e._t("default")], 2)
                }
                  , s = []
                  , n = {
                    render: a,
                    staticRenderFns: s
                };
                t.a = n
            }
            ])
        }
        ))
    },
    29260: function(e, t, i) {
        i(21703),
        i(48675),
        i(3462),
        i(82801),
        function(t, i) {
            e.exports = i()
        }(0, (function() {
            return function(e) {
                var t = {};
                function i(a) {
                    if (t[a])
                        return t[a].exports;
                    var s = t[a] = {
                        i: a,
                        l: !1,
                        exports: {}
                    };
                    return e[a].call(s.exports, s, s.exports, i),
                    s.l = !0,
                    s.exports
                }
                return i.m = e,
                i.c = t,
                i.d = function(e, t, a) {
                    i.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: a
                    })
                }
                ,
                i.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                i.t = function(e, t) {
                    if (1 & t && (e = i(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var a = Object.create(null);
                    if (i.r(a),
                    Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var s in e)
                            i.d(a, s, function(t) {
                                return e[t]
                            }
                            .bind(null, s));
                    return a
                }
                ,
                i.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return i.d(t, "a", t),
                    t
                }
                ,
                i.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                i.p = "/dist/",
                i(i.s = 13)
            }([function(e, t) {
                e.exports = function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                ,
                e.exports.__esModule = !0,
                e.exports.default = e.exports
            }
            , function(e, t) {
                function i(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                        "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                    }
                }
                e.exports = function(e, t, a) {
                    return t && i(e.prototype, t),
                    a && i(e, a),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    e
                }
                ,
                e.exports.__esModule = !0,
                e.exports.default = e.exports
            }
            , function(e, t) {
                function i(t) {
                    return e.exports = i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    ,
                    e.exports.__esModule = !0,
                    e.exports.default = e.exports,
                    i(t)
                }
                e.exports = i,
                e.exports.__esModule = !0,
                e.exports.default = e.exports
            }
            , function(e, t, i) {
                e.exports = i(14)()
            }
            , function(e, t, i) {
                "use strict";
                i.d(t, "a", (function() {
                    return d
                }
                )),
                i.d(t, "b", (function() {
                    return u
                }
                )),
                i.d(t, "c", (function() {
                    return h
                }
                ));
                var a = i(0)
                  , s = i.n(a)
                  , n = i(1)
                  , r = i.n(n);
                function o(e) {
                    var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                    return t.length + (t.length != Number(e) ? 3 : 0)
                }
                var l = function() {
                    function e(t) {
                        s()(this, e),
                        this.mode = c.MODE_8BIT_BYTE,
                        this.parsedData = [],
                        this.data = t;
                        for (var i = [], a = 0, n = this.data.length; a < n; a++) {
                            var r = []
                              , o = this.data.charCodeAt(a);
                            o > 65536 ? (r[0] = 240 | (1835008 & o) >>> 18,
                            r[1] = 128 | (258048 & o) >>> 12,
                            r[2] = 128 | (4032 & o) >>> 6,
                            r[3] = 128 | 63 & o) : o > 2048 ? (r[0] = 224 | (61440 & o) >>> 12,
                            r[1] = 128 | (4032 & o) >>> 6,
                            r[2] = 128 | 63 & o) : o > 128 ? (r[0] = 192 | (1984 & o) >>> 6,
                            r[1] = 128 | 63 & o) : r[0] = o,
                            i.push(r)
                        }
                        this.parsedData = Array.prototype.concat.apply([], i),
                        this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
                        this.parsedData.unshift(187),
                        this.parsedData.unshift(239))
                    }
                    return r()(e, [{
                        key: "getLength",
                        value: function() {
                            return this.parsedData.length
                        }
                    }, {
                        key: "write",
                        value: function(e) {
                            for (var t = 0, i = this.parsedData.length; t < i; t++)
                                e.put(this.parsedData[t], 8)
                        }
                    }]),
                    e
                }()
                  , d = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1
                          , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.L;
                        s()(this, e),
                        this.moduleCount = 0,
                        this.dataList = [],
                        this.typeNumber = t,
                        this.errorCorrectLevel = i,
                        this.moduleCount = 0,
                        this.dataList = []
                    }
                    return r()(e, [{
                        key: "addData",
                        value: function(e) {
                            if (this.typeNumber <= 0)
                                this.typeNumber = function(e, t) {
                                    for (var i = 1, a = o(e), s = 0, n = y.length; s < n; s++) {
                                        var r = 0;
                                        switch (t) {
                                        case u.L:
                                            r = y[s][0];
                                            break;
                                        case u.M:
                                            r = y[s][1];
                                            break;
                                        case u.Q:
                                            r = y[s][2];
                                            break;
                                        case u.H:
                                            r = y[s][3]
                                        }
                                        if (a <= r)
                                            break;
                                        i++
                                    }
                                    if (i > y.length)
                                        throw new Error("Too long data");
                                    return i
                                }(e, this.errorCorrectLevel);
                            else {
                                if (this.typeNumber > 40)
                                    throw new Error("Invalid QR version: ".concat(this.typeNumber));
                                if (!function(e, t, i) {
                                    var a = o(t)
                                      , s = e - 1
                                      , n = 0;
                                    switch (i) {
                                    case u.L:
                                        n = y[s][0];
                                        break;
                                    case u.M:
                                        n = y[s][1];
                                        break;
                                    case u.Q:
                                        n = y[s][2];
                                        break;
                                    case u.H:
                                        n = y[s][3]
                                    }
                                    return a <= n
                                }(this.typeNumber, e, this.errorCorrectLevel))
                                    throw new Error("Data is too long for QR version: ".concat(this.typeNumber))
                            }
                            var t = new l(e);
                            this.dataList.push(t),
                            this.dataCache = void 0
                        }
                    }, {
                        key: "isDark",
                        value: function(e, t) {
                            if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
                                throw new Error("".concat(e, ",").concat(t));
                            return this.modules[e][t]
                        }
                    }, {
                        key: "getModuleCount",
                        value: function() {
                            return this.moduleCount
                        }
                    }, {
                        key: "make",
                        value: function() {
                            this.makeImpl(!1, this.getBestMaskPattern())
                        }
                    }, {
                        key: "makeImpl",
                        value: function(t, i) {
                            this.moduleCount = 4 * this.typeNumber + 17,
                            this.modules = new Array(this.moduleCount);
                            for (var a = 0; a < this.moduleCount; a++) {
                                this.modules[a] = new Array(this.moduleCount);
                                for (var s = 0; s < this.moduleCount; s++)
                                    this.modules[a][s] = null
                            }
                            this.setupPositionProbePattern(0, 0),
                            this.setupPositionProbePattern(this.moduleCount - 7, 0),
                            this.setupPositionProbePattern(0, this.moduleCount - 7),
                            this.setupPositionAdjustPattern(),
                            this.setupTimingPattern(),
                            this.setupTypeInfo(t, i),
                            this.typeNumber >= 7 && this.setupTypeNumber(t),
                            null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                            this.mapData(this.dataCache, i)
                        }
                    }, {
                        key: "setupPositionProbePattern",
                        value: function(e, t) {
                            for (var i = -1; i <= 7; i++)
                                if (!(e + i <= -1 || this.moduleCount <= e + i))
                                    for (var a = -1; a <= 7; a++)
                                        t + a <= -1 || this.moduleCount <= t + a || (this.modules[e + i][t + a] = 0 <= i && i <= 6 && (0 == a || 6 == a) || 0 <= a && a <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= a && a <= 4)
                        }
                    }, {
                        key: "getBestMaskPattern",
                        value: function() {
                            if (Number.isInteger(this.maskPattern) && Object.values(p).includes(this.maskPattern))
                                return this.maskPattern;
                            for (var e = 0, t = 0, i = 0; i < 8; i++) {
                                this.makeImpl(!0, i);
                                var a = h.getLostPoint(this);
                                (0 == i || e > a) && (e = a,
                                t = i)
                            }
                            return t
                        }
                    }, {
                        key: "setupTimingPattern",
                        value: function() {
                            for (var e = 8; e < this.moduleCount - 8; e++)
                                null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                            for (var t = 8; t < this.moduleCount - 8; t++)
                                null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
                        }
                    }, {
                        key: "setupPositionAdjustPattern",
                        value: function() {
                            for (var e = h.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                                for (var i = 0; i < e.length; i++) {
                                    var a = e[t]
                                      , s = e[i];
                                    if (null == this.modules[a][s])
                                        for (var n = -2; n <= 2; n++)
                                            for (var r = -2; r <= 2; r++)
                                                this.modules[a + n][s + r] = -2 == n || 2 == n || -2 == r || 2 == r || 0 == n && 0 == r
                                }
                        }
                    }, {
                        key: "setupTypeNumber",
                        value: function(e) {
                            for (var t = h.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
                                var a = !e && 1 == (t >> i & 1);
                                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = a
                            }
                            for (i = 0; i < 18; i++)
                                a = !e && 1 == (t >> i & 1),
                                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = a
                        }
                    }, {
                        key: "setupTypeInfo",
                        value: function(e, t) {
                            for (var i = this.errorCorrectLevel << 3 | t, a = h.getBCHTypeInfo(i), s = 0; s < 15; s++) {
                                var n = !e && 1 == (a >> s & 1);
                                s < 6 ? this.modules[s][8] = n : s < 8 ? this.modules[s + 1][8] = n : this.modules[this.moduleCount - 15 + s][8] = n
                            }
                            for (s = 0; s < 15; s++)
                                n = !e && 1 == (a >> s & 1),
                                s < 8 ? this.modules[8][this.moduleCount - s - 1] = n : s < 9 ? this.modules[8][15 - s - 1 + 1] = n : this.modules[8][15 - s - 1] = n;
                            this.modules[this.moduleCount - 8][8] = !e
                        }
                    }, {
                        key: "mapData",
                        value: function(e, t) {
                            for (var i = -1, a = this.moduleCount - 1, s = 7, n = 0, r = this.moduleCount - 1; r > 0; r -= 2)
                                for (6 == r && r--; ; ) {
                                    for (var o = 0; o < 2; o++)
                                        if (null == this.modules[a][r - o]) {
                                            var l = !1;
                                            n < e.length && (l = 1 == (e[n] >>> s & 1)),
                                            h.getMask(t, a, r - o) && (l = !l),
                                            this.modules[a][r - o] = l,
                                            -1 == --s && (n++,
                                            s = 7)
                                        }
                                    if ((a += i) < 0 || this.moduleCount <= a) {
                                        a -= i,
                                        i = -i;
                                        break
                                    }
                                }
                        }
                    }], [{
                        key: "createData",
                        value: function(t, i, a) {
                            for (var s = m.getRSBlocks(t, i), n = new v, r = 0; r < a.length; r++) {
                                var o = a[r];
                                n.put(o.mode, 4),
                                n.put(o.getLength(), h.getLengthInBits(o.mode, t)),
                                o.write(n)
                            }
                            var l = 0;
                            for (r = 0; r < s.length; r++)
                                l += s[r].dataCount;
                            if (n.getLengthInBits() > 8 * l)
                                throw new Error("code length overflow. (".concat(n.getLengthInBits(), ">").concat(8 * l, ")"));
                            for (n.getLengthInBits() + 4 <= 8 * l && n.put(0, 4); n.getLengthInBits() % 8 != 0; )
                                n.putBit(!1);
                            for (; !(n.getLengthInBits() >= 8 * l || (n.put(e.PAD0, 8),
                            n.getLengthInBits() >= 8 * l)); )
                                n.put(e.PAD1, 8);
                            return e.createBytes(n, s)
                        }
                    }, {
                        key: "createBytes",
                        value: function(e, t) {
                            for (var i = 0, a = 0, s = 0, n = new Array(t.length), r = new Array(t.length), o = 0; o < t.length; o++) {
                                var l = t[o].dataCount
                                  , d = t[o].totalCount - l;
                                a = Math.max(a, l),
                                s = Math.max(s, d),
                                n[o] = new Array(l);
                                for (var u = 0; u < n[o].length; u++)
                                    n[o][u] = 255 & e.buffer[u + i];
                                i += l;
                                var c = h.getErrorCorrectPolynomial(d)
                                  , p = new g(n[o],c.getLength() - 1).mod(c);
                                for (r[o] = new Array(c.getLength() - 1),
                                u = 0; u < r[o].length; u++) {
                                    var f = u + p.getLength() - r[o].length;
                                    r[o][u] = f >= 0 ? p.get(f) : 0
                                }
                            }
                            var m = 0;
                            for (u = 0; u < t.length; u++)
                                m += t[u].totalCount;
                            var v = new Array(m)
                              , y = 0;
                            for (u = 0; u < a; u++)
                                for (o = 0; o < t.length; o++)
                                    u < n[o].length && (v[y++] = n[o][u]);
                            for (u = 0; u < s; u++)
                                for (o = 0; o < t.length; o++)
                                    u < r[o].length && (v[y++] = r[o][u]);
                            return v
                        }
                    }]),
                    e
                }();
                d.PAD0 = 236,
                d.PAD1 = 17;
                var u = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                }
                  , c = {
                    MODE_NUMBER: 1,
                    MODE_ALPHA_NUM: 2,
                    MODE_8BIT_BYTE: 4,
                    MODE_KANJI: 8
                }
                  , p = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }
                  , h = function() {
                    function e() {
                        s()(this, e)
                    }
                    return r()(e, null, [{
                        key: "getBCHTypeInfo",
                        value: function(t) {
                            for (var i = t << 10; e.getBCHDigit(i) - e.getBCHDigit(e.G15) >= 0; )
                                i ^= e.G15 << e.getBCHDigit(i) - e.getBCHDigit(e.G15);
                            return (t << 10 | i) ^ e.G15_MASK
                        }
                    }, {
                        key: "getBCHTypeNumber",
                        value: function(t) {
                            for (var i = t << 12; e.getBCHDigit(i) - e.getBCHDigit(e.G18) >= 0; )
                                i ^= e.G18 << e.getBCHDigit(i) - e.getBCHDigit(e.G18);
                            return t << 12 | i
                        }
                    }, {
                        key: "getBCHDigit",
                        value: function(e) {
                            for (var t = 0; 0 != e; )
                                t++,
                                e >>>= 1;
                            return t
                        }
                    }, {
                        key: "getPatternPosition",
                        value: function(t) {
                            return e.PATTERN_POSITION_TABLE[t - 1]
                        }
                    }, {
                        key: "getMask",
                        value: function(e, t, i) {
                            switch (e) {
                            case p.PATTERN000:
                                return (t + i) % 2 == 0;
                            case p.PATTERN001:
                                return t % 2 == 0;
                            case p.PATTERN010:
                                return i % 3 == 0;
                            case p.PATTERN011:
                                return (t + i) % 3 == 0;
                            case p.PATTERN100:
                                return (Math.floor(t / 2) + Math.floor(i / 3)) % 2 == 0;
                            case p.PATTERN101:
                                return t * i % 2 + t * i % 3 == 0;
                            case p.PATTERN110:
                                return (t * i % 2 + t * i % 3) % 2 == 0;
                            case p.PATTERN111:
                                return (t * i % 3 + (t + i) % 2) % 2 == 0;
                            default:
                                throw new Error("bad maskPattern:".concat(e))
                            }
                        }
                    }, {
                        key: "getErrorCorrectPolynomial",
                        value: function(e) {
                            for (var t = new g([1],0), i = 0; i < e; i++)
                                t = t.multiply(new g([1, f.gexp(i)],0));
                            return t
                        }
                    }, {
                        key: "getLengthInBits",
                        value: function(e, t) {
                            if (1 <= t && t < 10)
                                switch (e) {
                                case c.MODE_NUMBER:
                                    return 10;
                                case c.MODE_ALPHA_NUM:
                                    return 9;
                                case c.MODE_8BIT_BYTE:
                                case c.MODE_KANJI:
                                    return 8;
                                default:
                                    throw new Error("mode:".concat(e))
                                }
                            else if (t < 27)
                                switch (e) {
                                case c.MODE_NUMBER:
                                    return 12;
                                case c.MODE_ALPHA_NUM:
                                    return 11;
                                case c.MODE_8BIT_BYTE:
                                    return 16;
                                case c.MODE_KANJI:
                                    return 10;
                                default:
                                    throw new Error("mode:".concat(e))
                                }
                            else {
                                if (!(t < 41))
                                    throw new Error("type:".concat(t));
                                switch (e) {
                                case c.MODE_NUMBER:
                                    return 14;
                                case c.MODE_ALPHA_NUM:
                                    return 13;
                                case c.MODE_8BIT_BYTE:
                                    return 16;
                                case c.MODE_KANJI:
                                    return 12;
                                default:
                                    throw new Error("mode:".concat(e))
                                }
                            }
                        }
                    }, {
                        key: "getLostPoint",
                        value: function(e) {
                            for (var t = e.getModuleCount(), i = 0, a = 0; a < t; a++)
                                for (var s = 0; s < t; s++) {
                                    for (var n = 0, r = e.isDark(a, s), o = -1; o <= 1; o++)
                                        if (!(a + o < 0 || t <= a + o))
                                            for (var l = -1; l <= 1; l++)
                                                s + l < 0 || t <= s + l || 0 == o && 0 == l || r == e.isDark(a + o, s + l) && n++;
                                    n > 5 && (i += 3 + n - 5)
                                }
                            for (a = 0; a < t - 1; a++)
                                for (s = 0; s < t - 1; s++) {
                                    var d = 0;
                                    e.isDark(a, s) && d++,
                                    e.isDark(a + 1, s) && d++,
                                    e.isDark(a, s + 1) && d++,
                                    e.isDark(a + 1, s + 1) && d++,
                                    0 != d && 4 != d || (i += 3)
                                }
                            for (a = 0; a < t; a++)
                                for (s = 0; s < t - 6; s++)
                                    e.isDark(a, s) && !e.isDark(a, s + 1) && e.isDark(a, s + 2) && e.isDark(a, s + 3) && e.isDark(a, s + 4) && !e.isDark(a, s + 5) && e.isDark(a, s + 6) && (i += 40);
                            for (s = 0; s < t; s++)
                                for (a = 0; a < t - 6; a++)
                                    e.isDark(a, s) && !e.isDark(a + 1, s) && e.isDark(a + 2, s) && e.isDark(a + 3, s) && e.isDark(a + 4, s) && !e.isDark(a + 5, s) && e.isDark(a + 6, s) && (i += 40);
                            var u = 0;
                            for (s = 0; s < t; s++)
                                for (a = 0; a < t; a++)
                                    e.isDark(a, s) && u++;
                            return i + Math.abs(100 * u / t / t - 50) / 5 * 10
                        }
                    }]),
                    e
                }();
                h.PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                h.G15 = 1335,
                h.G18 = 7973,
                h.G15_MASK = 21522;
                var f = function() {
                    function e() {
                        s()(this, e)
                    }
                    return r()(e, null, [{
                        key: "glog",
                        value: function(t) {
                            if (t < 1)
                                throw new Error("glog(".concat(t, ")"));
                            return e.LOG_TABLE[t]
                        }
                    }, {
                        key: "gexp",
                        value: function(t) {
                            for (; t < 0; )
                                t += 255;
                            for (; t >= 256; )
                                t -= 255;
                            return e.EXP_TABLE[t]
                        }
                    }]),
                    e
                }();
                f.EXP_TABLE = new Array(256),
                f.LOG_TABLE = new Array(256),
                f._constructor = function() {
                    for (var e = 0; e < 8; e++)
                        f.EXP_TABLE[e] = 1 << e;
                    for (e = 8; e < 256; e++)
                        f.EXP_TABLE[e] = f.EXP_TABLE[e - 4] ^ f.EXP_TABLE[e - 5] ^ f.EXP_TABLE[e - 6] ^ f.EXP_TABLE[e - 8];
                    for (e = 0; e < 255; e++)
                        f.LOG_TABLE[f.EXP_TABLE[e]] = e
                }();
                var g = function() {
                    function e(t, i) {
                        if (s()(this, e),
                        null == t.length)
                            throw new Error("".concat(t.length, "/").concat(i));
                        for (var a = 0; a < t.length && 0 == t[a]; )
                            a++;
                        this.num = new Array(t.length - a + i);
                        for (var n = 0; n < t.length - a; n++)
                            this.num[n] = t[n + a]
                    }
                    return r()(e, [{
                        key: "get",
                        value: function(e) {
                            return this.num[e]
                        }
                    }, {
                        key: "getLength",
                        value: function() {
                            return this.num.length
                        }
                    }, {
                        key: "multiply",
                        value: function(t) {
                            for (var i = new Array(this.getLength() + t.getLength() - 1), a = 0; a < this.getLength(); a++)
                                for (var s = 0; s < t.getLength(); s++)
                                    i[a + s] ^= f.gexp(f.glog(this.get(a)) + f.glog(t.get(s)));
                            return new e(i,0)
                        }
                    }, {
                        key: "mod",
                        value: function(t) {
                            if (this.getLength() - t.getLength() < 0)
                                return this;
                            for (var i = f.glog(this.get(0)) - f.glog(t.get(0)), a = new Array(this.getLength()), s = 0; s < this.getLength(); s++)
                                a[s] = this.get(s);
                            for (s = 0; s < t.getLength(); s++)
                                a[s] ^= f.gexp(f.glog(t.get(s)) + i);
                            return new e(a,0).mod(t)
                        }
                    }]),
                    e
                }()
                  , m = function() {
                    function e(t, i) {
                        s()(this, e),
                        this.totalCount = t,
                        this.dataCount = i
                    }
                    return r()(e, null, [{
                        key: "getRSBlocks",
                        value: function(t, i) {
                            var a = e.getRsBlockTable(t, i);
                            if (null == a)
                                throw new Error("bad rs block @ typeNumber:".concat(t, "/errorCorrectLevel:").concat(i));
                            for (var s = a.length / 3, n = [], r = 0; r < s; r++)
                                for (var o = a[3 * r + 0], l = a[3 * r + 1], d = a[3 * r + 2], u = 0; u < o; u++)
                                    n.push(new e(l,d));
                            return n
                        }
                    }, {
                        key: "getRsBlockTable",
                        value: function(t, i) {
                            switch (i) {
                            case u.L:
                                return e.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                            case u.M:
                                return e.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                            case u.Q:
                                return e.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                            case u.H:
                                return e.RS_BLOCK_TABLE[4 * (t - 1) + 3];
                            default:
                                return
                            }
                        }
                    }]),
                    e
                }();
                m.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
                var v = function() {
                    function e() {
                        s()(this, e),
                        this.buffer = [],
                        this.length = 0
                    }
                    return r()(e, [{
                        key: "get",
                        value: function(e) {
                            var t = Math.floor(e / 8);
                            return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
                        }
                    }, {
                        key: "put",
                        value: function(e, t) {
                            for (var i = 0; i < t; i++)
                                this.putBit(1 == (e >>> t - i - 1 & 1))
                        }
                    }, {
                        key: "getLengthInBits",
                        value: function() {
                            return this.length
                        }
                    }, {
                        key: "putBit",
                        value: function(e) {
                            var t = Math.floor(this.length / 8);
                            this.buffer.length <= t && this.buffer.push(0),
                            e && (this.buffer[t] |= 128 >>> this.length % 8),
                            this.length++
                        }
                    }]),
                    e
                }()
                  , y = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]]
            }
            , function(e, t, i) {
                "use strict";
                (function(e) {
                    i.d(t, "b", (function() {
                        return l
                    }
                    )),
                    i.d(t, "a", (function() {
                        return d
                    }
                    ));
                    var a = i(2)
                      , s = i.n(a);
                    function n(e) {
                        if ("string" != typeof e)
                            throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
                    }
                    function r(e, t) {
                        for (var i, a = "", s = 0, n = -1, r = 0, o = 0; o <= e.length; ++o) {
                            if (o < e.length)
                                i = e.charCodeAt(o);
                            else {
                                if (47 === i)
                                    break;
                                i = 47
                            }
                            if (47 === i) {
                                if (n === o - 1 || 1 === r)
                                    ;
                                else if (n !== o - 1 && 2 === r) {
                                    if (a.length < 2 || 2 !== s || 46 !== a.charCodeAt(a.length - 1) || 46 !== a.charCodeAt(a.length - 2))
                                        if (a.length > 2) {
                                            var l = a.lastIndexOf("/");
                                            if (l !== a.length - 1) {
                                                -1 === l ? (a = "",
                                                s = 0) : s = (a = a.slice(0, l)).length - 1 - a.lastIndexOf("/"),
                                                n = o,
                                                r = 0;
                                                continue
                                            }
                                        } else if (2 === a.length || 1 === a.length) {
                                            a = "",
                                            s = 0,
                                            n = o,
                                            r = 0;
                                            continue
                                        }
                                    t && (a.length > 0 ? a += "/.." : a = "..",
                                    s = 2)
                                } else
                                    a.length > 0 ? a += "/" + e.slice(n + 1, o) : a = e.slice(n + 1, o),
                                    s = o - n - 1;
                                n = o,
                                r = 0
                            } else
                                46 === i && -1 !== r ? ++r : r = -1
                        }
                        return a
                    }
                    var o = {
                        resolve: function() {
                            for (var t, i = "", a = !1, s = arguments.length - 1; s >= -1 && !a; s--) {
                                var o;
                                s >= 0 ? o = arguments[s] : (void 0 === t && (t = e.cwd()),
                                o = t),
                                n(o),
                                0 !== o.length && (i = o + "/" + i,
                                a = 47 === o.charCodeAt(0))
                            }
                            return i = r(i, !a),
                            a ? i.length > 0 ? "/" + i : "/" : i.length > 0 ? i : "."
                        },
                        normalize: function(e) {
                            if (n(e),
                            0 === e.length)
                                return ".";
                            var t = 47 === e.charCodeAt(0)
                              , i = 47 === e.charCodeAt(e.length - 1);
                            return 0 !== (e = r(e, !t)).length || t || (e = "."),
                            e.length > 0 && i && (e += "/"),
                            t ? "/" + e : e
                        },
                        isAbsolute: function(e) {
                            return n(e),
                            e.length > 0 && 47 === e.charCodeAt(0)
                        },
                        join: function() {
                            if (0 === arguments.length)
                                return ".";
                            for (var e, t = 0; t < arguments.length; ++t) {
                                var i = arguments[t];
                                n(i),
                                i.length > 0 && (void 0 === e ? e = i : e += "/" + i)
                            }
                            return void 0 === e ? "." : o.normalize(e)
                        },
                        relative: function(e, t) {
                            if (n(e),
                            n(t),
                            e === t)
                                return "";
                            if ((e = o.resolve(e)) === (t = o.resolve(t)))
                                return "";
                            for (var i = 1; i < e.length && 47 === e.charCodeAt(i); ++i)
                                ;
                            for (var a = e.length, s = a - i, r = 1; r < t.length && 47 === t.charCodeAt(r); ++r)
                                ;
                            for (var l = t.length - r, d = s < l ? s : l, u = -1, c = 0; c <= d; ++c) {
                                if (c === d) {
                                    if (l > d) {
                                        if (47 === t.charCodeAt(r + c))
                                            return t.slice(r + c + 1);
                                        if (0 === c)
                                            return t.slice(r + c)
                                    } else
                                        s > d && (47 === e.charCodeAt(i + c) ? u = c : 0 === c && (u = 0));
                                    break
                                }
                                var p = e.charCodeAt(i + c);
                                if (p !== t.charCodeAt(r + c))
                                    break;
                                47 === p && (u = c)
                            }
                            var h = "";
                            for (c = i + u + 1; c <= a; ++c)
                                c !== a && 47 !== e.charCodeAt(c) || (0 === h.length ? h += ".." : h += "/..");
                            return h.length > 0 ? h + t.slice(r + u) : (r += u,
                            47 === t.charCodeAt(r) && ++r,
                            t.slice(r))
                        },
                        _makeLong: function(e) {
                            return e
                        },
                        dirname: function(e) {
                            if (n(e),
                            0 === e.length)
                                return ".";
                            for (var t = e.charCodeAt(0), i = 47 === t, a = -1, s = !0, r = e.length - 1; r >= 1; --r)
                                if (47 === (t = e.charCodeAt(r))) {
                                    if (!s) {
                                        a = r;
                                        break
                                    }
                                } else
                                    s = !1;
                            return -1 === a ? i ? "/" : "." : i && 1 === a ? "//" : e.slice(0, a)
                        },
                        basename: function(e, t) {
                            if (void 0 !== t && "string" != typeof t)
                                throw new TypeError('"ext" argument must be a string');
                            n(e);
                            var i, a = 0, s = -1, r = !0;
                            if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                                if (t.length === e.length && t === e)
                                    return "";
                                var o = t.length - 1
                                  , l = -1;
                                for (i = e.length - 1; i >= 0; --i) {
                                    var d = e.charCodeAt(i);
                                    if (47 === d) {
                                        if (!r) {
                                            a = i + 1;
                                            break
                                        }
                                    } else
                                        -1 === l && (r = !1,
                                        l = i + 1),
                                        o >= 0 && (d === t.charCodeAt(o) ? -1 == --o && (s = i) : (o = -1,
                                        s = l))
                                }
                                return a === s ? s = l : -1 === s && (s = e.length),
                                e.slice(a, s)
                            }
                            for (i = e.length - 1; i >= 0; --i)
                                if (47 === e.charCodeAt(i)) {
                                    if (!r) {
                                        a = i + 1;
                                        break
                                    }
                                } else
                                    -1 === s && (r = !1,
                                    s = i + 1);
                            return -1 === s ? "" : e.slice(a, s)
                        },
                        extname: function(e) {
                            n(e);
                            for (var t = -1, i = 0, a = -1, s = !0, r = 0, o = e.length - 1; o >= 0; --o) {
                                var l = e.charCodeAt(o);
                                if (47 !== l)
                                    -1 === a && (s = !1,
                                    a = o + 1),
                                    46 === l ? -1 === t ? t = o : 1 !== r && (r = 1) : -1 !== t && (r = -1);
                                else if (!s) {
                                    i = o + 1;
                                    break
                                }
                            }
                            return -1 === t || -1 === a || 0 === r || 1 === r && t === a - 1 && t === i + 1 ? "" : e.slice(t, a)
                        },
                        format: function(e) {
                            if (null === e || "object" !== s()(e))
                                throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + s()(e));
                            return function(e, t) {
                                var i = t.dir || t.root
                                  , a = t.base || (t.name || "") + (t.ext || "");
                                return i ? i === t.root ? i + a : i + e + a : a
                            }("/", e)
                        },
                        parse: function(e) {
                            n(e);
                            var t = {
                                root: "",
                                dir: "",
                                base: "",
                                ext: "",
                                name: ""
                            };
                            if (0 === e.length)
                                return t;
                            var i, a = e.charCodeAt(0), s = 47 === a;
                            s ? (t.root = "/",
                            i = 1) : i = 0;
                            for (var r = -1, o = 0, l = -1, d = !0, u = e.length - 1, c = 0; u >= i; --u)
                                if (47 !== (a = e.charCodeAt(u)))
                                    -1 === l && (d = !1,
                                    l = u + 1),
                                    46 === a ? -1 === r ? r = u : 1 !== c && (c = 1) : -1 !== r && (c = -1);
                                else if (!d) {
                                    o = u + 1;
                                    break
                                }
                            return -1 === r || -1 === l || 0 === c || 1 === c && r === l - 1 && r === o + 1 ? -1 !== l && (t.base = t.name = 0 === o && s ? e.slice(1, l) : e.slice(o, l)) : (0 === o && s ? (t.name = e.slice(1, r),
                            t.base = e.slice(1, l)) : (t.name = e.slice(o, r),
                            t.base = e.slice(o, l)),
                            t.ext = e.slice(r, l)),
                            o > 0 ? t.dir = e.slice(0, o - 1) : s && (t.dir = "/"),
                            t
                        },
                        sep: "/",
                        delimiter: ":",
                        win32: null,
                        posix: null
                    };
                    o.posix = o;
                    var l = o.extname
                      , d = o.basename
                }
                ).call(this, i(19))
            }
            , function(e, t) {
                function i(e, t, i, a, s, n, r) {
                    try {
                        var o = e[n](r)
                          , l = o.value
                    } catch (e) {
                        return void i(e)
                    }
                    o.done ? t(l) : Promise.resolve(l).then(a, s)
                }
                e.exports = function(e) {
                    return function() {
                        var t = this
                          , a = arguments;
                        return new Promise((function(s, n) {
                            var r = e.apply(t, a);
                            function o(e) {
                                i(r, s, n, o, l, "next", e)
                            }
                            function l(e) {
                                i(r, s, n, o, l, "throw", e)
                            }
                            o(void 0)
                        }
                        ))
                    }
                }
                ,
                e.exports.__esModule = !0,
                e.exports.default = e.exports
            }
            , function(e, t, i) {
                "use strict";
                i.d(t, "b", (function() {
                    return w
                }
                )),
                i.d(t, "a", (function() {
                    return x
                }
                ));
                const a = (e,t,i={},s=i)=>{
                    if (Array.isArray(t))
                        t.forEach((t=>a(e, t, i, s)));
                    else if ("function" == typeof t)
                        t(e, i, s, a);
                    else {
                        const n = Object.keys(t)[0];
                        Array.isArray(t[n]) ? (s[n] = {},
                        a(e, t[n], i, s[n])) : s[n] = t[n](e, i, s, a)
                    }
                    return i
                }
                  , s = (e,t)=>(i,a,s,n)=>{
                    t(i, a, s) && n(i, e, a, s)
                }
                  , n = (e=0)=>t=>t.data[t.pos + e]
                  , r = e=>t=>t.data.subarray(t.pos, t.pos += e)
                  , o = e=>t=>t.data.subarray(t.pos, t.pos + e)
                  , l = e=>t=>Array.from(r(e)(t)).map((e=>String.fromCharCode(e))).join("")
                  , d = e=>t=>{
                    const i = r(2)(t);
                    return e ? (i[1] << 8) + i[0] : (i[0] << 8) + i[1]
                }
                  , u = (e,t)=>(i,a,s)=>{
                    const n = "function" == typeof t ? t(i, a, s) : t
                      , o = r(e)
                      , l = new Array(n);
                    for (var d = 0; d < n; d++)
                        l[d] = o(i);
                    return l
                }
                  , c = e=>t=>{
                    const i = (e=>e.data[e.pos++])(t)
                      , a = new Array(8);
                    for (var s = 0; s < 8; s++)
                        a[7 - s] = !!(i & 1 << s);
                    return Object.keys(e).reduce(((t,i)=>{
                        const s = e[i];
                        return s.length ? t[i] = ((e,t,i)=>{
                            for (var a = 0, s = 0; s < i; s++)
                                a += e[t + s] && 2 ** (i - s - 1);
                            return a
                        }
                        )(a, s.index, s.length) : t[i] = a[s.index],
                        t
                    }
                    ), {})
                }
                ;
                var p = {
                    blocks: e=>{
                        const t = []
                          , i = e.data.length;
                        for (var a = 0, s = (e=>e.data[e.pos++])(e); 0 !== s && s; s = (e=>e.data[e.pos++])(e)) {
                            if (e.pos + s >= i) {
                                const s = i - e.pos;
                                t.push(r(s)(e)),
                                a += s;
                                break
                            }
                            t.push(r(s)(e)),
                            a += s
                        }
                        const n = new Uint8Array(a);
                        for (var o = 0, l = 0; l < t.length; l++)
                            n.set(t[l], o),
                            o += t[l].length;
                        return n
                    }
                };
                const h = s({
                    gce: [{
                        codes: r(2)
                    }, {
                        byteSize: e=>e.data[e.pos++]
                    }, {
                        extras: c({
                            future: {
                                index: 0,
                                length: 3
                            },
                            disposal: {
                                index: 3,
                                length: 3
                            },
                            userInput: {
                                index: 6
                            },
                            transparentColorGiven: {
                                index: 7
                            }
                        })
                    }, {
                        delay: d(!0)
                    }, {
                        transparentColorIndex: e=>e.data[e.pos++]
                    }, {
                        terminator: e=>e.data[e.pos++]
                    }]
                }, (e=>{
                    var t = o(2)(e);
                    return 33 === t[0] && 249 === t[1]
                }
                ))
                  , f = s({
                    image: [{
                        code: e=>e.data[e.pos++]
                    }, {
                        descriptor: [{
                            left: d(!0)
                        }, {
                            top: d(!0)
                        }, {
                            width: d(!0)
                        }, {
                            height: d(!0)
                        }, {
                            lct: c({
                                exists: {
                                    index: 0
                                },
                                interlaced: {
                                    index: 1
                                },
                                sort: {
                                    index: 2
                                },
                                future: {
                                    index: 3,
                                    length: 2
                                },
                                size: {
                                    index: 5,
                                    length: 3
                                }
                            })
                        }]
                    }, s({
                        lct: u(3, ((e,t,i)=>Math.pow(2, i.descriptor.lct.size + 1)))
                    }, ((e,t,i)=>i.descriptor.lct.exists)), {
                        data: [{
                            minCodeSize: e=>e.data[e.pos++]
                        }, p]
                    }]
                }, (e=>44 === n()(e)))
                  , g = s({
                    text: [{
                        codes: r(2)
                    }, {
                        blockSize: e=>e.data[e.pos++]
                    }, {
                        preData: (e,t,i)=>r(i.text.blockSize)(e)
                    }, p]
                }, (e=>{
                    var t = o(2)(e);
                    return 33 === t[0] && 1 === t[1]
                }
                ))
                  , m = s({
                    application: [{
                        codes: r(2)
                    }, {
                        blockSize: e=>e.data[e.pos++]
                    }, {
                        id: (e,t,i)=>l(i.blockSize)(e)
                    }, p]
                }, (e=>{
                    var t = o(2)(e);
                    return 33 === t[0] && 255 === t[1]
                }
                ))
                  , v = s({
                    comment: [{
                        codes: r(2)
                    }, p]
                }, (e=>{
                    var t = o(2)(e);
                    return 33 === t[0] && 254 === t[1]
                }
                ));
                var y = [{
                    header: [{
                        signature: l(3)
                    }, {
                        version: l(3)
                    }]
                }, {
                    lsd: [{
                        width: d(!0)
                    }, {
                        height: d(!0)
                    }, {
                        gct: c({
                            exists: {
                                index: 0
                            },
                            resolution: {
                                index: 1,
                                length: 3
                            },
                            sort: {
                                index: 4
                            },
                            size: {
                                index: 5,
                                length: 3
                            }
                        })
                    }, {
                        backgroundColorIndex: e=>e.data[e.pos++]
                    }, {
                        pixelAspectRatio: e=>e.data[e.pos++]
                    }]
                }, s({
                    gct: u(3, ((e,t)=>Math.pow(2, t.lsd.gct.size + 1)))
                }, ((e,t)=>t.lsd.gct.exists)), {
                    frames: ((e,t)=>(i,a,s,n)=>{
                        const r = [];
                        let o = i.pos;
                        for (; t(i, a, s); ) {
                            const t = {};
                            if (n(i, e, a, t),
                            i.pos === o)
                                break;
                            o = i.pos,
                            r.push(t)
                        }
                        return r
                    }
                    )([h, m, v, f, g], (e=>{
                        var t = n()(e);
                        return 33 === t || 44 === t
                    }
                    ))
                }]
                  , w = function(e) {
                    var t = new Uint8Array(e);
                    return a({
                        data: t,
                        pos: 0
                    }, y)
                }
                  , b = function(e, t, i) {
                    if (e.image) {
                        var a = e.image
                          , s = a.descriptor.width * a.descriptor.height
                          , n = function(e, t, i) {
                            var a, s, n, r, o, l, d, u, c, p, h, f, g, m, v, y, w = i, b = new Array(i), x = new Array(4096), C = new Array(4096), T = new Array(4097);
                            for (o = 1 + (s = 1 << (p = e)),
                            a = s + 2,
                            d = -1,
                            n = (1 << (r = p + 1)) - 1,
                            u = 0; u < s; u++)
                                x[u] = 0,
                                C[u] = u;
                            for (h = f = g = m = v = y = 0,
                            c = 0; c < w; ) {
                                if (0 === m) {
                                    if (f < r) {
                                        h += t[y] << f,
                                        f += 8,
                                        y++;
                                        continue
                                    }
                                    if (u = h & n,
                                    h >>= r,
                                    f -= r,
                                    u > a || u == o)
                                        break;
                                    if (u == s) {
                                        n = (1 << (r = p + 1)) - 1,
                                        a = s + 2,
                                        d = -1;
                                        continue
                                    }
                                    if (-1 == d) {
                                        T[m++] = C[u],
                                        d = u,
                                        g = u;
                                        continue
                                    }
                                    for (l = u,
                                    u == a && (T[m++] = g,
                                    u = d); u > s; )
                                        T[m++] = C[u],
                                        u = x[u];
                                    g = 255 & C[u],
                                    T[m++] = g,
                                    a < 4096 && (x[a] = d,
                                    C[a] = g,
                                    0 == (++a & n) && a < 4096 && (r++,
                                    n += a)),
                                    d = l
                                }
                                m--,
                                b[v++] = T[m],
                                c++
                            }
                            for (c = v; c < w; c++)
                                b[c] = 0;
                            return b
                        }(a.data.minCodeSize, a.data.blocks, s);
                        a.descriptor.lct.interlaced && (n = function(e, t) {
                            for (var i = new Array(e.length), a = e.length / t, s = function(a, s) {
                                var n = e.slice(s * t, (s + 1) * t);
                                i.splice.apply(i, [a * t, t].concat(n))
                            }, n = [0, 4, 2, 1], r = [8, 8, 4, 2], o = 0, l = 0; l < 4; l++)
                                for (var d = n[l]; d < a; d += r[l])
                                    s(d, o),
                                    o++;
                            return i
                        }(n, a.descriptor.width));
                        var r = {
                            pixels: n,
                            dims: {
                                top: e.image.descriptor.top,
                                left: e.image.descriptor.left,
                                width: e.image.descriptor.width,
                                height: e.image.descriptor.height
                            }
                        };
                        return a.descriptor.lct && a.descriptor.lct.exists ? r.colorTable = a.lct : r.colorTable = t,
                        e.gce && (r.delay = 10 * (e.gce.delay || 10),
                        r.disposalType = e.gce.extras.disposal,
                        e.gce.extras.transparentColorGiven && (r.transparentIndex = e.gce.transparentColorIndex)),
                        i && (r.patch = function(e) {
                            for (var t = e.pixels.length, i = new Uint8ClampedArray(4 * t), a = 0; a < t; a++) {
                                var s = 4 * a
                                  , n = e.pixels[a]
                                  , r = e.colorTable[n];
                                i[s] = r[0],
                                i[s + 1] = r[1],
                                i[s + 2] = r[2],
                                i[s + 3] = n !== e.transparentIndex ? 255 : 0
                            }
                            return i
                        }(r)),
                        r
                    }
                    console.warn("gif frame does not have associated image.")
                }
                  , x = function(e, t) {
                    return e.frames.filter((function(e) {
                        return e.image
                    }
                    )).map((function(i) {
                        return b(i, e.gct, t)
                    }
                    ))
                }
            }
            , function(e, t) {
                var i;
                i = function() {
                    return this
                }();
                try {
                    i = i || new Function("return this")()
                } catch (e) {
                    "object" == typeof window && (i = window)
                }
                e.exports = i
            }
            , function(e, t, i) {
                "use strict";
                (function(e) {
                    i.d(t, "a", (function() {
                        return y
                    }
                    ));
                    var a = i(2)
                      , s = i.n(a)
                      , n = i(0)
                      , r = i.n(n)
                      , o = i(1)
                      , l = i.n(o)
                      , d = i(3)
                      , u = i.n(d)
                      , c = i(10)
                      , p = i(7)
                      , h = i(4)
                      , f = i(12)
                      , g = function(e, t, i, a) {
                        return new (i || (i = Promise))((function(s, n) {
                            function r(e) {
                                try {
                                    l(a.next(e))
                                } catch (e) {
                                    n(e)
                                }
                            }
                            function o(e) {
                                try {
                                    l(a.throw(e))
                                } catch (e) {
                                    n(e)
                                }
                            }
                            function l(e) {
                                var t;
                                e.done ? s(e.value) : (t = e.value,
                                t instanceof i ? t : new i((function(e) {
                                    e(t)
                                }
                                ))).then(r, o)
                            }
                            l((a = a.apply(e, t || [])).next())
                        }
                        ))
                    }
                      , m = c.a.Canvas;
                    function v(e) {
                        if (e)
                            return new Promise((function(i, a) {
                                if ("data" == e.slice(0, 4)) {
                                    var s = new Image;
                                    return s.onload = function() {
                                        i(s),
                                        t(s)
                                    }
                                    ,
                                    s.onerror = function() {
                                        a("Image load error"),
                                        t(s)
                                    }
                                    ,
                                    void (s.src = e)
                                }
                                var n = new Image;
                                n.setAttribute("crossOrigin", "Anonymous"),
                                n.onload = function() {
                                    i(n)
                                }
                                ,
                                n.onerror = function() {
                                    a("Image load error")
                                }
                                ,
                                n.src = e
                            }
                            ));
                        function t(e) {
                            e.onload = null,
                            e.onerror = null
                        }
                    }
                    var y = function() {
                        function t(e) {
                            r()(this, t);
                            var i = Object.assign({}, e);
                            if (Object.keys(t.defaultOptions).forEach((function(e) {
                                e in i || Object.defineProperty(i, e, {
                                    value: t.defaultOptions[e],
                                    enumerable: !0,
                                    writable: !0
                                })
                            }
                            )),
                            i.components ? "object" === s()(i.components) && Object.keys(t.defaultComponentOptions).forEach((function(e) {
                                e in i.components ? Object.defineProperty(i.components, e, {
                                    value: Object.assign(Object.assign({}, t.defaultComponentOptions[e]), i.components[e]),
                                    enumerable: !0,
                                    writable: !0
                                }) : Object.defineProperty(i.components, e, {
                                    value: t.defaultComponentOptions[e],
                                    enumerable: !0,
                                    writable: !0
                                })
                            }
                            )) : i.components = t.defaultComponentOptions,
                            null !== i.dotScale && void 0 !== i.dotScale) {
                                if (i.dotScale <= 0 || i.dotScale > 1)
                                    throw new Error("dotScale should be in range (0, 1].");
                                i.components.data.scale = i.dotScale,
                                i.components.timing.scale = i.dotScale,
                                i.components.alignment.scale = i.dotScale
                            }
                            this.options = i,
                            this.canvas = new m(e.size,e.size),
                            this.canvasContext = this.canvas.getContext("2d"),
                            this.qrCode = new h.a(-1,this.options.correctLevel),
                            Number.isInteger(this.options.maskPattern) && (this.qrCode.maskPattern = this.options.maskPattern),
                            Number.isInteger(this.options.version) && (this.qrCode.typeNumber = this.options.version),
                            this.qrCode.addData(this.options.text),
                            this.qrCode.make()
                        }
                        return l()(t, [{
                            key: "draw",
                            value: function() {
                                var e = this;
                                return new Promise((function(t) {
                                    return e._draw().then(t)
                                }
                                ))
                            }
                        }, {
                            key: "_clear",
                            value: function() {
                                this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
                            }
                        }, {
                            key: "_draw",
                            value: function() {
                                var i, a, s, n, r, o, l, d, c, y, b, x, C, T, S, I, k, E, D;
                                return g(this, void 0, void 0, u.a.mark((function g() {
                                    var L, A, _, P, M, O, $, z, R, B, N, j, q, Q, F, G, V, Y, H, U, X, W, K, Z, J, ee, te, ie, ae, se, ne, re, oe, le, de, ue, ce, pe, he, fe, ge, me, ve, ye, we, be, xe, Ce, Te, Se, Ie, ke, Ee, De, Le, Ae, _e, Pe, Me, Oe, $e, ze, Re, Be, Ne, je, qe, Qe, Fe, Ge, Ve, Ye;
                                    return u.a.wrap((function(u) {
                                        for (; ; )
                                            switch (u.prev = u.next) {
                                            case 0:
                                                if (L = null === (i = this.qrCode) || void 0 === i ? void 0 : i.moduleCount,
                                                A = this.options.size,
                                                ((_ = this.options.margin) < 0 || 2 * _ >= A) && (_ = 0),
                                                P = Math.ceil(_),
                                                M = A - 2 * _,
                                                O = this.options.whiteMargin,
                                                $ = this.options.backgroundDimming,
                                                z = Math.ceil(M / L),
                                                N = new m(B = (R = z * L) + 2 * P,B),
                                                j = N.getContext("2d"),
                                                this._clear(),
                                                j.save(),
                                                j.translate(P, P),
                                                q = new m(B,B),
                                                Q = q.getContext("2d"),
                                                F = null,
                                                G = [],
                                                !this.options.gifBackground) {
                                                    u.next = 47;
                                                    break
                                                }
                                                if (V = Object(p.b)(this.options.gifBackground),
                                                F = V,
                                                G = Object(p.a)(V, !0),
                                                !this.options.autoColor) {
                                                    u.next = 45;
                                                    break
                                                }
                                                Y = 0,
                                                H = 0,
                                                U = 0,
                                                X = 0,
                                                W = 0;
                                            case 28:
                                                if (!(W < G[0].colorTable.length)) {
                                                    u.next = 41;
                                                    break
                                                }
                                                if (!((K = G[0].colorTable[W])[0] > 200 || K[1] > 200 || K[2] > 200)) {
                                                    u.next = 32;
                                                    break
                                                }
                                                return u.abrupt("continue", 38);
                                            case 32:
                                                if (0 !== K[0] || 0 !== K[1] || 0 !== K[2]) {
                                                    u.next = 34;
                                                    break
                                                }
                                                return u.abrupt("continue", 38);
                                            case 34:
                                                X++,
                                                Y += K[0],
                                                H += K[1],
                                                U += K[2];
                                            case 38:
                                                W++,
                                                u.next = 28;
                                                break;
                                            case 41:
                                                Y = ~~(Y / X),
                                                H = ~~(H / X),
                                                U = ~~(U / X),
                                                this.options.colorDark = "rgb(".concat(Y, ",").concat(H, ",").concat(U, ")");
                                            case 45:
                                                u.next = 61;
                                                break;
                                            case 47:
                                                if (!this.options.backgroundImage) {
                                                    u.next = 58;
                                                    break
                                                }
                                                return u.next = 50,
                                                v(this.options.backgroundImage);
                                            case 50:
                                                Z = u.sent,
                                                this.options.autoColor && (J = t._getAverageRGB(Z),
                                                this.options.colorDark = "rgb(".concat(J.r, ",").concat(J.g, ",").concat(J.b, ")")),
                                                Q.drawImage(Z, 0, 0, Z.width, Z.height, 0, 0, B, B),
                                                Q.rect(0, 0, B, B),
                                                Q.fillStyle = $,
                                                Q.fill(),
                                                u.next = 61;
                                                break;
                                            case 58:
                                                Q.rect(0, 0, B, B),
                                                Q.fillStyle = this.options.colorLight,
                                                Q.fill();
                                            case 61:
                                                for (ee = h.c.getPatternPosition(this.qrCode.typeNumber),
                                                te = (null === (s = null === (a = this.options.components) || void 0 === a ? void 0 : a.data) || void 0 === s ? void 0 : s.scale) || .4,
                                                ie = .5 * (1 - te),
                                                ae = 0; ae < L; ae++)
                                                    for (se = 0; se < L; se++) {
                                                        for (ne = this.qrCode.isDark(ae, se),
                                                        re = 6 == ae && se >= 8 && se <= L - 8 || 6 == se && ae >= 8 && ae <= L - 8,
                                                        oe = se < 8 && (ae < 8 || ae >= L - 8) || se >= L - 8 && ae < 8 || re,
                                                        le = 1; le < ee.length - 1; le++)
                                                            oe = oe || ae >= ee[le] - 2 && ae <= ee[le] + 2 && se >= ee[le] - 2 && se <= ee[le] + 2;
                                                        de = se * z + (oe ? 0 : ie * z),
                                                        ue = ae * z + (oe ? 0 : ie * z),
                                                        j.strokeStyle = ne ? this.options.colorDark : this.options.colorLight,
                                                        j.lineWidth = .5,
                                                        j.fillStyle = ne ? this.options.colorDark : this.options.colorLight,
                                                        0 === ee.length ? oe || j.fillRect(de, ue, (oe ? 1 : te) * z, (oe ? 1 : te) * z) : (ce = se < L - 4 && se >= L - 4 - 5 && ae < L - 4 && ae >= L - 4 - 5,
                                                        oe || ce || j.fillRect(de, ue, (oe ? 1 : te) * z, (oe ? 1 : te) * z))
                                                    }
                                                if (pe = ee[ee.length - 1],
                                                he = this.options.colorLight,
                                                j.fillStyle = he,
                                                j.fillRect(0, 0, 8 * z, 8 * z),
                                                j.fillRect(0, (L - 8) * z, 8 * z, 8 * z),
                                                j.fillRect((L - 8) * z, 0, 8 * z, 8 * z),
                                                (null === (r = null === (n = this.options.components) || void 0 === n ? void 0 : n.timing) || void 0 === r ? void 0 : r.protectors) && (j.fillRect(8 * z, 6 * z, (L - 8 - 8) * z, z),
                                                j.fillRect(6 * z, 8 * z, z, (L - 8 - 8) * z)),
                                                (null === (l = null === (o = this.options.components) || void 0 === o ? void 0 : o.cornerAlignment) || void 0 === l ? void 0 : l.protectors) && t._drawAlignProtector(j, pe, pe, z),
                                                !(null === (c = null === (d = this.options.components) || void 0 === d ? void 0 : d.alignment) || void 0 === c ? void 0 : c.protectors)) {
                                                    u.next = 99;
                                                    break
                                                }
                                                fe = 0;
                                            case 75:
                                                if (!(fe < ee.length)) {
                                                    u.next = 99;
                                                    break
                                                }
                                                ge = 0;
                                            case 77:
                                                if (!(ge < ee.length)) {
                                                    u.next = 96;
                                                    break
                                                }
                                                if (me = ee[ge],
                                                ve = ee[fe],
                                                6 !== me || 6 !== ve && ve !== pe) {
                                                    u.next = 84;
                                                    break
                                                }
                                                return u.abrupt("continue", 93);
                                            case 84:
                                                if (6 !== ve || 6 !== me && me !== pe) {
                                                    u.next = 88;
                                                    break
                                                }
                                                return u.abrupt("continue", 93);
                                            case 88:
                                                if (me !== pe || ve !== pe) {
                                                    u.next = 92;
                                                    break
                                                }
                                                return u.abrupt("continue", 93);
                                            case 92:
                                                t._drawAlignProtector(j, me, ve, z);
                                            case 93:
                                                ge++,
                                                u.next = 77;
                                                break;
                                            case 96:
                                                fe++,
                                                u.next = 75;
                                                break;
                                            case 99:
                                                for (j.fillStyle = this.options.colorDark,
                                                j.fillRect(0, 0, 7 * z, z),
                                                j.fillRect((L - 7) * z, 0, 7 * z, z),
                                                j.fillRect(0, 6 * z, 7 * z, z),
                                                j.fillRect((L - 7) * z, 6 * z, 7 * z, z),
                                                j.fillRect(0, (L - 7) * z, 7 * z, z),
                                                j.fillRect(0, (L - 7 + 6) * z, 7 * z, z),
                                                j.fillRect(0, 0, z, 7 * z),
                                                j.fillRect(6 * z, 0, z, 7 * z),
                                                j.fillRect((L - 7) * z, 0, z, 7 * z),
                                                j.fillRect((L - 7 + 6) * z, 0, z, 7 * z),
                                                j.fillRect(0, (L - 7) * z, z, 7 * z),
                                                j.fillRect(6 * z, (L - 7) * z, z, 7 * z),
                                                j.fillRect(2 * z, 2 * z, 3 * z, 3 * z),
                                                j.fillRect((L - 7 + 2) * z, 2 * z, 3 * z, 3 * z),
                                                j.fillRect(2 * z, (L - 7 + 2) * z, 3 * z, 3 * z),
                                                ye = (null === (b = null === (y = this.options.components) || void 0 === y ? void 0 : y.timing) || void 0 === b ? void 0 : b.scale) || .4,
                                                we = .5 * (1 - ye),
                                                be = 0; be < L - 8; be += 2)
                                                    t._drawDot(j, 8 + be, 6, z, we, ye),
                                                    t._drawDot(j, 6, 8 + be, z, we, ye);
                                                xe = (null === (C = null === (x = this.options.components) || void 0 === x ? void 0 : x.cornerAlignment) || void 0 === C ? void 0 : C.scale) || .4,
                                                Ce = .5 * (1 - xe),
                                                t._drawAlign(j, pe, pe, z, Ce, xe, this.options.colorDark, (null === (S = null === (T = this.options.components) || void 0 === T ? void 0 : T.cornerAlignment) || void 0 === S ? void 0 : S.protectors) || !1),
                                                Te = (null === (k = null === (I = this.options.components) || void 0 === I ? void 0 : I.alignment) || void 0 === k ? void 0 : k.scale) || .4,
                                                Se = .5 * (1 - Te),
                                                Ie = 0;
                                            case 124:
                                                if (!(Ie < ee.length)) {
                                                    u.next = 148;
                                                    break
                                                }
                                                ke = 0;
                                            case 126:
                                                if (!(ke < ee.length)) {
                                                    u.next = 145;
                                                    break
                                                }
                                                if (Ee = ee[ke],
                                                De = ee[Ie],
                                                6 !== Ee || 6 !== De && De !== pe) {
                                                    u.next = 133;
                                                    break
                                                }
                                                return u.abrupt("continue", 142);
                                            case 133:
                                                if (6 !== De || 6 !== Ee && Ee !== pe) {
                                                    u.next = 137;
                                                    break
                                                }
                                                return u.abrupt("continue", 142);
                                            case 137:
                                                if (Ee !== pe || De !== pe) {
                                                    u.next = 141;
                                                    break
                                                }
                                                return u.abrupt("continue", 142);
                                            case 141:
                                                t._drawAlign(j, Ee, De, z, Se, Te, this.options.colorDark, (null === (D = null === (E = this.options.components) || void 0 === E ? void 0 : E.alignment) || void 0 === D ? void 0 : D.protectors) || !1);
                                            case 142:
                                                ke++,
                                                u.next = 126;
                                                break;
                                            case 145:
                                                Ie++,
                                                u.next = 124;
                                                break;
                                            case 148:
                                                if (O && (j.fillStyle = this.options.backgroundColor,
                                                j.fillRect(-P, -P, B, P),
                                                j.fillRect(-P, R, B, P),
                                                j.fillRect(R, -P, P, B),
                                                j.fillRect(-P, -P, P, B)),
                                                !this.options.logoImage) {
                                                    u.next = 179;
                                                    break
                                                }
                                                return u.next = 152,
                                                v(this.options.logoImage);
                                            case 152:
                                                Le = u.sent,
                                                Ae = this.options.logoScale,
                                                _e = this.options.logoMargin,
                                                Pe = this.options.logoCornerRadius,
                                                (Ae <= 0 || Ae >= 1) && (Ae = .2),
                                                _e < 0 && (_e = 0),
                                                Pe < 0 && (Pe = 0),
                                                $e = Oe = .5 * (B - (Me = R * Ae)),
                                                j.restore(),
                                                j.fillStyle = this.options.logoBackgroundColor,
                                                j.save(),
                                                t._prepareRoundedCornerClip(j, Oe - _e, $e - _e, Me + 2 * _e, Me + 2 * _e, Pe + _e),
                                                j.clip(),
                                                ze = j.globalCompositeOperation,
                                                j.globalCompositeOperation = "destination-out",
                                                j.fill(),
                                                j.globalCompositeOperation = ze,
                                                j.restore(),
                                                j.save(),
                                                t._prepareRoundedCornerClip(j, Oe, $e, Me, Me, Pe),
                                                j.clip(),
                                                j.drawImage(Le, Oe, $e, Me, Me),
                                                j.restore(),
                                                j.save(),
                                                j.translate(P, P);
                                            case 179:
                                                if (!F) {
                                                    u.next = 191;
                                                    break
                                                }
                                                if (G.forEach((function(e) {
                                                    Re || ((Re = new f.a(A,A)).setDelay(e.delay),
                                                    Re.setRepeat(0));
                                                    var t = e.dims
                                                      , i = t.width
                                                      , a = t.height;
                                                    Be || (Be = new m(i,a),
                                                    (Ne = Be.getContext("2d")).rect(0, 0, Be.width, Be.height),
                                                    Ne.fillStyle = "#ffffff",
                                                    Ne.fill()),
                                                    je && Qe && i === je.width && a === je.height || (je = new m(i,a),
                                                    qe = je.getContext("2d"),
                                                    Qe = qe.createImageData(i, a)),
                                                    Qe.data.set(e.patch),
                                                    qe.putImageData(Qe, 0, 0),
                                                    Ne.drawImage(je.getContext("2d").canvas, e.dims.left, e.dims.top);
                                                    var s = new m(B,B)
                                                      , n = s.getContext("2d");
                                                    n.drawImage(Be.getContext("2d").canvas, 0, 0, B, B),
                                                    n.rect(0, 0, B, B),
                                                    n.fillStyle = $,
                                                    n.fill(),
                                                    n.drawImage(N.getContext("2d").canvas, 0, 0, B, B);
                                                    var r = new m(A,A)
                                                      , o = r.getContext("2d");
                                                    o.drawImage(s.getContext("2d").canvas, 0, 0, A, A),
                                                    Re.addFrame(o.getImageData(0, 0, r.width, r.height).data)
                                                }
                                                )),
                                                Re) {
                                                    u.next = 183;
                                                    break
                                                }
                                                throw new Error("No frames.");
                                            case 183:
                                                if (Re.finish(),
                                                !w(this.canvas)) {
                                                    u.next = 188;
                                                    break
                                                }
                                                return Fe = Re.stream().toFlattenUint8Array(),
                                                Ge = Fe.reduce((function(e, t) {
                                                    return e + String.fromCharCode(t)
                                                }
                                                ), ""),
                                                u.abrupt("return", Promise.resolve("data:image/gif;base64,".concat(window.btoa(Ge))));
                                            case 188:
                                                return u.abrupt("return", Promise.resolve(e.from(Re.stream().toFlattenUint8Array())));
                                            case 191:
                                                if (Q.drawImage(N.getContext("2d").canvas, 0, 0, B, B),
                                                j.drawImage(q.getContext("2d").canvas, -P, -P, B, B),
                                                Ve = new m(A,A),
                                                Ve.getContext("2d").drawImage(N.getContext("2d").canvas, 0, 0, A, A),
                                                this.canvas = Ve,
                                                Ye = this.options.gifBackground ? "gif" : "png",
                                                !w(this.canvas)) {
                                                    u.next = 200;
                                                    break
                                                }
                                                return u.abrupt("return", Promise.resolve(this.canvas.toDataURL(Ye)));
                                            case 200:
                                                return u.abrupt("return", Promise.resolve(this.canvas.toBuffer(Ye)));
                                            case 201:
                                            case "end":
                                                return u.stop()
                                            }
                                    }
                                    ), g, this)
                                }
                                )))
                            }
                        }], [{
                            key: "_prepareRoundedCornerClip",
                            value: function(e, t, i, a, s, n) {
                                e.beginPath(),
                                e.moveTo(t, i),
                                e.arcTo(t + a, i, t + a, i + s, n),
                                e.arcTo(t + a, i + s, t, i + s, n),
                                e.arcTo(t, i + s, t, i, n),
                                e.arcTo(t, i, t + a, i, n),
                                e.closePath()
                            }
                        }, {
                            key: "_getAverageRGB",
                            value: function(e) {
                                var t, i, a = {
                                    r: 0,
                                    g: 0,
                                    b: 0
                                }, s = -4, n = {
                                    r: 0,
                                    g: 0,
                                    b: 0
                                }, r = 0;
                                i = e.naturalHeight || e.height,
                                t = e.naturalWidth || e.width;
                                var o, l = new m(t,i).getContext("2d");
                                if (!l)
                                    return a;
                                l.drawImage(e, 0, 0);
                                try {
                                    o = l.getImageData(0, 0, t, i)
                                } catch (e) {
                                    return a
                                }
                                for (; (s += 20) < o.data.length; )
                                    o.data[s] > 200 || o.data[s + 1] > 200 || o.data[s + 2] > 200 || (++r,
                                    n.r += o.data[s],
                                    n.g += o.data[s + 1],
                                    n.b += o.data[s + 2]);
                                return n.r = ~~(n.r / r),
                                n.g = ~~(n.g / r),
                                n.b = ~~(n.b / r),
                                n
                            }
                        }, {
                            key: "_drawDot",
                            value: function(e, t, i, a) {
                                var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
                                  , n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
                                e.fillRect((t + s) * a, (i + s) * a, n * a, n * a)
                            }
                        }, {
                            key: "_drawAlignProtector",
                            value: function(e, t, i, a) {
                                e.clearRect((t - 2) * a, (i - 2) * a, 5 * a, 5 * a),
                                e.fillRect((t - 2) * a, (i - 2) * a, 5 * a, 5 * a)
                            }
                        }, {
                            key: "_drawAlign",
                            value: function(e, i, a, s) {
                                var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
                                  , r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1
                                  , o = arguments.length > 6 ? arguments[6] : void 0
                                  , l = arguments.length > 7 ? arguments[7] : void 0
                                  , d = e.fillStyle;
                                e.fillStyle = o,
                                new Array(4).fill(0).map((function(o, l) {
                                    t._drawDot(e, i - 2 + l, a - 2, s, n, r),
                                    t._drawDot(e, i + 2, a - 2 + l, s, n, r),
                                    t._drawDot(e, i + 2 - l, a + 2, s, n, r),
                                    t._drawDot(e, i - 2, a + 2 - l, s, n, r)
                                }
                                )),
                                t._drawDot(e, i, a, s, n, r),
                                l || (e.fillStyle = "rgba(255, 255, 255, 0.6)",
                                new Array(2).fill(0).map((function(o, l) {
                                    t._drawDot(e, i - 1 + l, a - 1, s, n, r),
                                    t._drawDot(e, i + 1, a - 1 + l, s, n, r),
                                    t._drawDot(e, i + 1 - l, a + 1, s, n, r),
                                    t._drawDot(e, i - 1, a + 1 - l, s, n, r)
                                }
                                ))),
                                e.fillStyle = d
                            }
                        }]),
                        t
                    }();
                    function w(e) {
                        try {
                            return e instanceof HTMLElement
                        } catch (t) {
                            return "object" === s()(e) && 1 === e.nodeType && "object" === s()(e.style) && "object" === s()(e.ownerDocument)
                        }
                    }
                    y.CorrectLevel = h.b,
                    y.defaultComponentOptions = {
                        data: {
                            scale: .4
                        },
                        timing: {
                            scale: .5,
                            protectors: !1
                        },
                        alignment: {
                            scale: .5,
                            protectors: !1
                        },
                        cornerAlignment: {
                            scale: .5,
                            protectors: !0
                        }
                    },
                    y.defaultOptions = {
                        text: "",
                        size: 400,
                        margin: 20,
                        colorDark: "#000000",
                        colorLight: "rgba(255, 255, 255, 0.6)",
                        correctLevel: h.b.M,
                        backgroundImage: void 0,
                        backgroundDimming: "rgba(0,0,0,0)",
                        logoImage: void 0,
                        logoScale: .2,
                        logoMargin: 4,
                        logoCornerRadius: 8,
                        whiteMargin: !0,
                        components: y.defaultComponentOptions,
                        autoColor: !0,
                        logoBackgroundColor: "#ffffff",
                        backgroundColor: "#ffffff"
                    }
                }
                ).call(this, i(15).Buffer)
            }
            , function(e, t, i) {
                "use strict";
                var a = i(11);
                const {asBuffer: s, asDownload: n, asZipDownload: r, atScale: o, options: l} = a.a
                  , d = Symbol.for("toDataURL")
                  , {CanvasRenderingContext2D: u, CanvasGradient: c, CanvasPattern: p, Image: h, ImageData: f, Path2D: g, DOMMatrix: m, DOMRect: v, DOMPoint: y} = window
                  , w = {
                    Canvas: class {
                        constructor(e, t) {
                            let i = document.createElement("canvas")
                              , a = [];
                            for (var [u,c] of (Object.defineProperty(i, "async", {
                                value: !0,
                                writable: !1,
                                enumerable: !0
                            }),
                            Object.entries({
                                png: ()=>s(i, "image/png"),
                                jpg: ()=>s(i, "image/jpeg"),
                                pages: ()=>a.concat(i).map((e=>e.getContext("2d")))
                            })))
                                Object.defineProperty(i, u, {
                                    get: c
                                });
                            return Object.assign(i, {
                                width: e,
                                height: t,
                                newPage(...e) {
                                    var {width: t, height: s} = i
                                      , n = Object.assign(document.createElement("canvas"), {
                                        width: t,
                                        height: s
                                    });
                                    n.getContext("2d").drawImage(i, 0, 0),
                                    a.push(n);
                                    var [t,s] = e.length ? e : [t, s];
                                    return Object.assign(i, {
                                        width: t,
                                        height: s
                                    }).getContext("2d")
                                },
                                saveAs(e, t) {
                                    t = "number" == typeof t ? {
                                        quality: t
                                    } : t;
                                    let i = l(this.pages, {
                                        filename: e,
                                        ...t
                                    })
                                      , {pattern: a, padding: s, mime: d, quality: u, matte: c, density: p, archive: h} = i
                                      , f = o(i.pages, p);
                                    return null == s ? n(f[0], d, u, c, e) : r(f, d, u, c, h, a, s)
                                },
                                toBuffer(e="png", t={}) {
                                    t = "number" == typeof t ? {
                                        quality: t
                                    } : t;
                                    let i = l(this.pages, {
                                        extension: e,
                                        ...t
                                    })
                                      , {mime: a, quality: n, matte: r, pages: d, density: u} = i
                                      , c = o(d, u, r)[0];
                                    return s(c, a, n, r)
                                },
                                [d]: i.toDataURL.bind(i),
                                toDataURL(e="png", t={}) {
                                    t = "number" == typeof t ? {
                                        quality: t
                                    } : t;
                                    let a = l(this.pages, {
                                        extension: e,
                                        ...t
                                    })
                                      , {mime: s, quality: n, matte: r, pages: u, density: c} = a
                                      , p = o(u, c, r)[0]
                                      , h = p[p === i ? d : "toDataURL"](s, n);
                                    return Promise.resolve(h)
                                }
                            })
                        }
                    }
                    ,
                    loadImage: e=>new Promise(((t,i)=>Object.assign(new h, {
                        crossOrigin: "Anonymous",
                        onload: t,
                        onerror: i,
                        src: e
                    }))),
                    CanvasRenderingContext2D: u,
                    CanvasGradient: c,
                    CanvasPattern: p,
                    Image: h,
                    ImageData: f,
                    Path2D: g,
                    DOMMatrix: m,
                    DOMRect: v,
                    DOMPoint: y
                };
                t.a = w
            }
            , function(e, t, i) {
                "use strict";
                (function(e) {
                    var a = i(5);
                    class s {
                        constructor() {
                            let t = void 0 === e
                              , i = "image/png"
                              , a = "image/jpeg"
                              , s = "application/pdf"
                              , n = "image/svg+xml";
                            Object.assign(this, {
                                toMime: this.toMime.bind(this),
                                fromMime: this.fromMime.bind(this),
                                expected: t ? '"png", "jpg", or "webp"' : '"png", "jpg", "pdf", or "svg"',
                                formats: t ? {
                                    png: i,
                                    jpg: a,
                                    jpeg: "image/jpeg",
                                    webp: "image/webp"
                                } : {
                                    png: i,
                                    jpg: a,
                                    jpeg: "image/jpeg",
                                    pdf: s,
                                    svg: n
                                },
                                mimes: t ? {
                                    [i]: "png",
                                    [a]: "jpg",
                                    "image/webp": "webp"
                                } : {
                                    [i]: "png",
                                    [a]: "jpg",
                                    [s]: "pdf",
                                    [n]: "svg"
                                }
                            })
                        }
                        toMime(e) {
                            return this.formats[(e || "").replace(/^\./, "").toLowerCase()]
                        }
                        fromMime(e) {
                            return this.mimes[e]
                        }
                    }
                    class n {
                        static for(e) {
                            return (new n).append(e).get()
                        }
                        constructor() {
                            this.crc = -1
                        }
                        get() {
                            return ~this.crc
                        }
                        append(e) {
                            for (var t = 0 | this.crc, i = this.table, a = 0, s = 0 | e.length; a < s; a++)
                                t = t >>> 8 ^ i[255 & (t ^ e[a])];
                            return this.crc = t,
                            this
                        }
                    }
                    function r(e) {
                        let t = new Uint8Array(e)
                          , i = new DataView(t.buffer)
                          , a = {
                            array: t,
                            view: i,
                            size: e,
                            set8: (e,t)=>(i.setUint8(e, t),
                            a),
                            set16: (e,t)=>(i.setUint16(e, t, !0),
                            a),
                            set32: (e,t)=>(i.setUint32(e, t, !0),
                            a),
                            bytes: (e,i)=>(t.set(i, e),
                            a)
                        };
                        return a
                    }
                    n.prototype.table = (()=>{
                        var e, t, i, a = [];
                        for (e = 0; e < 256; e++) {
                            for (i = e,
                            t = 0; t < 8; t++)
                                i = 1 & i ? i >>> 1 ^ 3988292384 : i >>> 1;
                            a[e] = i
                        }
                        return a
                    }
                    )();
                    class o {
                        constructor(e) {
                            let t = new Date;
                            Object.assign(this, {
                                directory: e,
                                offset: 0,
                                files: [],
                                time: (t.getHours() << 6 | t.getMinutes()) << 5 | t.getSeconds() / 2,
                                date: (t.getFullYear() - 1980 << 4 | t.getMonth() + 1) << 5 | t.getDate()
                            }),
                            this.add(e)
                        }
                        async add(e, t) {
                            let i = !t
                              , a = o.encoder.encode(`${this.directory}/${i ? "" : e}`)
                              , s = new Uint8Array(i ? 0 : await t.arrayBuffer())
                              , l = 30 + a.length
                              , d = l + s.length
                              , {offset: u} = this
                              , c = r(26).set32(0, 134742036).set16(6, this.time).set16(8, this.date).set32(10, n.for(s)).set32(14, s.length).set32(18, s.length).set16(22, a.length);
                            u += l;
                            let p = r(l + s.length + 16).set32(0, 67324752).bytes(4, c.array).bytes(30, a).bytes(l, s);
                            u += s.length,
                            p.set32(d, 134695760).bytes(d + 4, c.array.slice(10, 22)),
                            u += 16,
                            this.files.push({
                                offset: u,
                                folder: i,
                                name: a,
                                header: c,
                                payload: p
                            }),
                            this.offset = u
                        }
                        toBuffer() {
                            let e = this.files.reduce(((e,{name: t})=>46 + t.length + e), 0)
                              , t = r(e + 22)
                              , i = 0;
                            for (var {offset: a, name: s, header: n, folder: o} of this.files)
                                t.set32(i, 33639248).set16(i + 4, 20).bytes(i + 6, n.array).set8(i + 38, o ? 16 : 0).set32(i + 42, a).bytes(i + 46, s),
                                i += 46 + s.length;
                            t.set32(i, 101010256).set16(i + 8, this.files.length).set16(i + 10, this.files.length).set32(i + 12, e).set32(i + 16, this.offset);
                            let l = new Uint8Array(this.offset + t.size)
                              , d = 0;
                            for (var {payload: u} of this.files)
                                l.set(u.array, d),
                                d += u.size;
                            return l.set(t.array, d),
                            l
                        }
                        get blob() {
                            return new Blob([this.toBuffer()],{
                                type: "application/zip"
                            })
                        }
                    }
                    o.encoder = new TextEncoder;
                    const l = (e,t,i,a)=>{
                        if (a) {
                            let {width: t, height: i} = e
                              , s = Object.assign(document.createElement("canvas"), {
                                width: t,
                                height: i
                            })
                              , n = s.getContext("2d");
                            n.fillStyle = a,
                            n.fillRect(0, 0, t, i),
                            n.drawImage(e, 0, 0),
                            e = s
                        }
                        return new Promise(((a,s)=>e.toBlob(a, t, i)))
                    }
                      , d = (e,t)=>{
                        const i = window.URL.createObjectURL(t)
                          , a = document.createElement("a");
                        a.style.display = "none",
                        a.href = i,
                        a.setAttribute("download", e),
                        void 0 === a.download && a.setAttribute("target", "_blank"),
                        document.body.appendChild(a),
                        a.click(),
                        document.body.removeChild(a),
                        setTimeout((()=>window.URL.revokeObjectURL(i)), 100)
                    }
                      , u = {
                        asBuffer: (...e)=>l(...e).then((e=>e.arrayBuffer())),
                        asDownload: async(e,t,i,a,s)=>{
                            d(s, await l(e, t, i, a))
                        }
                        ,
                        asZipDownload: async(e,t,i,s,n,r,u)=>{
                            let c = Object(a.a)(n, ".zip") || "archive"
                              , p = new o(c);
                            await Promise.all(e.map((async(e,a)=>{
                                let n = (e=>r.replace("{}", String(e + 1).padStart(u, "0")))(a);
                                await p.add(n, await l(e, t, i, s))
                            }
                            ))),
                            d(c + ".zip", p.blob)
                        }
                        ,
                        atScale: (e,t,i)=>e.map((e=>{
                            if (1 == t && !i)
                                return e.canvas;
                            let a = document.createElement("canvas")
                              , s = a.getContext("2d")
                              , n = e.canvas ? e.canvas : e;
                            return a.width = n.width * t,
                            a.height = n.height * t,
                            i && (s.fillStyle = i,
                            s.fillRect(0, 0, a.width, a.height)),
                            s.scale(t, t),
                            s.drawImage(n, 0, 0),
                            a
                        }
                        )),
                        options: function(e, {filename: t="", extension: i="", format: n, page: r, quality: o, matte: l, density: d, outline: u, archive: c}={}) {
                            var {fromMime: p, toMime: h, expected: f} = new s
                              , g = (c = c || "canvas",
                            n || i.replace(/@\d+x$/i, "") || Object(a.b)(t))
                              , m = (n = p(h(g) || g),
                            h(n))
                              , v = e.length;
                            if (!g)
                                throw new Error("Cannot determine image format (use a filename extension or 'format' argument)");
                            if (!n)
                                throw new Error(`Unsupported file format "${g}" (expected ${f})`);
                            if (!v)
                                throw new RangeError("Canvas has no associated contexts (try calling getContext or newPage first)");
                            let y, w, b = t.replace(/{(\d*)}/g, ((e,t)=>(w = !0,
                            t = parseInt(t, 10),
                            y = isFinite(t) ? t : isFinite(y) ? y : -1,
                            "{}"))), x = r > 0 ? r - 1 : r < 0 ? v + r : void 0;
                            if (isFinite(x) && x < 0 || x >= v)
                                throw new RangeError(1 == v ? `Canvas only has a ‘page 1’ (${x} is out of bounds)` : `Canvas has pages 1–${v} (${x} is out of bounds)`);
                            if (e = isFinite(x) ? [e[x]] : w || "pdf" == n ? e : e.slice(-1),
                            void 0 === o)
                                o = .92;
                            else if ("number" != typeof o || !isFinite(o) || o < 0 || o > 1)
                                throw new TypeError("The quality option must be an number in the 0.0–1.0 range");
                            if (void 0 === d) {
                                let e = (i || Object(a.a)(t, g)).match(/@(\d+)x$/i);
                                d = e ? parseInt(e[1], 10) : 1
                            } else if ("number" != typeof d || !Number.isInteger(d) || d < 1)
                                throw new TypeError("The density option must be a non-negative integer");
                            return void 0 === u ? u = !0 : "svg" == n && (u = !!u),
                            {
                                filename: t,
                                pattern: b,
                                format: n,
                                mime: m,
                                pages: e,
                                padding: y,
                                quality: o,
                                matte: l,
                                density: d,
                                outline: u,
                                archive: c
                            }
                        }
                    };
                    t.a = u
                }
                ).call(this, i(8))
            }
            , function(e, t, i) {
                "use strict";
                var a = function(e, t) {
                    var i, a, s, n, r;
                    function o(e, t, a, s, n) {
                        i[t][0] -= e * (i[t][0] - a) / 1024,
                        i[t][1] -= e * (i[t][1] - s) / 1024,
                        i[t][2] -= e * (i[t][2] - n) / 1024
                    }
                    function l(e, t, a, s, n) {
                        for (var o, l, d = Math.abs(t - e), u = Math.min(t + e, 256), c = t + 1, p = t - 1, h = 1; c < u || p > d; )
                            l = r[h++],
                            c < u && ((o = i[c++])[0] -= l * (o[0] - a) / (1 << 18),
                            o[1] -= l * (o[1] - s) / (1 << 18),
                            o[2] -= l * (o[2] - n) / (1 << 18)),
                            p > d && ((o = i[p--])[0] -= l * (o[0] - a) / (1 << 18),
                            o[1] -= l * (o[1] - s) / (1 << 18),
                            o[2] -= l * (o[2] - n) / (1 << 18))
                    }
                    function d(e, t, a) {
                        var r, o, l, d, u, c = ~(1 << 31), p = c, h = -1, f = h;
                        for (r = 0; r < 256; r++)
                            o = i[r],
                            (l = Math.abs(o[0] - e) + Math.abs(o[1] - t) + Math.abs(o[2] - a)) < c && (c = l,
                            h = r),
                            (d = l - (s[r] >> 12)) < p && (p = d,
                            f = r),
                            u = n[r] >> 10,
                            n[r] -= u,
                            s[r] += u << 10;
                        return n[h] += 64,
                        s[h] -= 65536,
                        f
                    }
                    this.buildColormap = function() {
                        !function() {
                            var e, t;
                            for (i = [],
                            a = new Int32Array(256),
                            s = new Int32Array(256),
                            n = new Int32Array(256),
                            r = new Int32Array(32),
                            e = 0; e < 256; e++)
                                t = (e << 12) / 256,
                                i[e] = new Float64Array([t, t, t, 0]),
                                n[e] = 256,
                                s[e] = 0
                        }(),
                        function() {
                            var i, a, s, n, u, c, p = e.length, h = 30 + (t - 1) / 3, f = p / (3 * t), g = ~~(f / 100), m = 1024, v = 2048, y = v >> 6;
                            for (y <= 1 && (y = 0),
                            i = 0; i < y; i++)
                                r[i] = m * (256 * (y * y - i * i) / (y * y));
                            p < 1509 ? (t = 1,
                            a = 3) : a = p % 499 != 0 ? 1497 : p % 491 != 0 ? 1473 : p % 487 != 0 ? 1461 : 1509;
                            var w = 0;
                            for (i = 0; i < f; )
                                if (o(m, c = d(s = (255 & e[w]) << 4, n = (255 & e[w + 1]) << 4, u = (255 & e[w + 2]) << 4), s, n, u),
                                0 !== y && l(y, c, s, n, u),
                                (w += a) >= p && (w -= p),
                                0 === g && (g = 1),
                                ++i % g == 0)
                                    for (m -= m / h,
                                    (y = (v -= v / 30) >> 6) <= 1 && (y = 0),
                                    c = 0; c < y; c++)
                                        r[c] = m * (256 * (y * y - c * c) / (y * y))
                        }(),
                        function() {
                            for (var e = 0; e < 256; e++)
                                i[e][0] >>= 4,
                                i[e][1] >>= 4,
                                i[e][2] >>= 4,
                                i[e][3] = e
                        }(),
                        function() {
                            var e, t, s, n, r, o, l = 0, d = 0;
                            for (e = 0; e < 256; e++) {
                                for (r = e,
                                o = (s = i[e])[1],
                                t = e + 1; t < 256; t++)
                                    (n = i[t])[1] < o && (r = t,
                                    o = n[1]);
                                if (n = i[r],
                                e != r && (t = n[0],
                                n[0] = s[0],
                                s[0] = t,
                                t = n[1],
                                n[1] = s[1],
                                s[1] = t,
                                t = n[2],
                                n[2] = s[2],
                                s[2] = t,
                                t = n[3],
                                n[3] = s[3],
                                s[3] = t),
                                o != l) {
                                    for (a[l] = d + e >> 1,
                                    t = l + 1; t < o; t++)
                                        a[t] = e;
                                    l = o,
                                    d = e
                                }
                            }
                            for (a[l] = d + 255 >> 1,
                            t = l + 1; t < 256; t++)
                                a[t] = 255
                        }()
                    }
                    ,
                    this.getColormap = function() {
                        for (var e = [], t = [], a = 0; a < 256; a++)
                            t[i[a][3]] = a;
                        for (var s = 0, n = 0; n < 256; n++) {
                            var r = t[n];
                            e[s++] = i[r][0],
                            e[s++] = i[r][1],
                            e[s++] = i[r][2]
                        }
                        return e
                    }
                    ,
                    this.lookupRGB = function(e, t, s) {
                        for (var n, r, o, l = 1e3, d = -1, u = a[t], c = u - 1; u < 256 || c >= 0; )
                            u < 256 && ((o = (r = i[u])[1] - t) >= l ? u = 256 : (u++,
                            o < 0 && (o = -o),
                            (n = r[0] - e) < 0 && (n = -n),
                            (o += n) < l && ((n = r[2] - s) < 0 && (n = -n),
                            (o += n) < l && (l = o,
                            d = r[3])))),
                            c >= 0 && ((o = t - (r = i[c])[1]) >= l ? c = -1 : (c--,
                            o < 0 && (o = -o),
                            (n = r[0] - e) < 0 && (n = -n),
                            (o += n) < l && ((n = r[2] - s) < 0 && (n = -n),
                            (o += n) < l && (l = o,
                            d = r[3]))));
                        return d
                    }
                }
                  , s = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]
                  , n = function(e, t, i, a) {
                    var n, r, o, l, d, u, c, p, h, f = Math.max(2, a), g = new Uint8Array(256), m = new Int32Array(5003), v = new Int32Array(5003), y = 0, w = 0, b = !1;
                    function x(e, t) {
                        g[r++] = e,
                        r >= 254 && S(t)
                    }
                    function C(e) {
                        T(5003),
                        w = d + 2,
                        b = !0,
                        E(d, e)
                    }
                    function T(e) {
                        for (var t = 0; t < e; ++t)
                            m[t] = -1
                    }
                    function S(e) {
                        r > 0 && (e.writeByte(r),
                        e.writeBytes(g, 0, r),
                        r = 0)
                    }
                    function I(e) {
                        return (1 << e) - 1
                    }
                    function k() {
                        return 0 === c ? -1 : (--c,
                        255 & i[p++])
                    }
                    function E(e, t) {
                        for (n &= s[y],
                        y > 0 ? n |= e << y : n = e,
                        y += h; y >= 8; )
                            x(255 & n, t),
                            n >>= 8,
                            y -= 8;
                        if ((w > o || b) && (b ? (o = I(h = l),
                        b = !1) : (++h,
                        o = 12 == h ? 4096 : I(h))),
                        e == u) {
                            for (; y > 0; )
                                x(255 & n, t),
                                n >>= 8,
                                y -= 8;
                            S(t)
                        }
                    }
                    this.encode = function(i) {
                        i.writeByte(f),
                        c = e * t,
                        p = 0,
                        function(e, t) {
                            var i, a, s, n, c, p;
                            for (b = !1,
                            o = I(h = l = e),
                            u = 1 + (d = 1 << e - 1),
                            w = d + 2,
                            r = 0,
                            n = k(),
                            p = 0,
                            i = 5003; i < 65536; i *= 2)
                                ++p;
                            p = 8 - p,
                            T(5003),
                            E(d, t);
                            e: for (; -1 != (a = k()); )
                                if (i = (a << 12) + n,
                                m[s = a << p ^ n] !== i) {
                                    if (m[s] >= 0) {
                                        c = 5003 - s,
                                        0 === s && (c = 1);
                                        do {
                                            if ((s -= c) < 0 && (s += 5003),
                                            m[s] === i) {
                                                n = v[s];
                                                continue e
                                            }
                                        } while (m[s] >= 0)
                                    }
                                    E(n, t),
                                    n = a,
                                    w < 4096 ? (v[s] = w++,
                                    m[s] = i) : C(t)
                                } else
                                    n = v[s];
                            E(n, t),
                            E(u, t)
                        }(f + 1, i),
                        i.writeByte(0)
                    }
                };
                function r() {
                    this.page = -1,
                    this.pages = [],
                    this.newPage()
                }
                r.pageSize = 4096,
                r.charMap = {};
                for (var o = 0; o < 256; o++)
                    r.charMap[o] = String.fromCharCode(o);
                function l(e, t) {
                    this.width = ~~e,
                    this.height = ~~t,
                    this.transparent = null,
                    this.transIndex = 0,
                    this.repeat = -1,
                    this.delay = 0,
                    this.image = null,
                    this.pixels = null,
                    this.indexedPixels = null,
                    this.colorDepth = null,
                    this.colorTab = null,
                    this.neuQuant = null,
                    this.usedEntry = new Array,
                    this.palSize = 7,
                    this.dispose = -1,
                    this.firstFrame = !0,
                    this.sample = 10,
                    this.dither = !1,
                    this.globalPalette = !1,
                    this.out = new r
                }
                r.prototype.newPage = function() {
                    this.pages[++this.page] = new Uint8Array(r.pageSize),
                    this.cursor = 0
                }
                ,
                r.prototype.getData = function() {
                    for (var e = "", t = 0; t < this.pages.length; t++)
                        for (var i = 0; i < r.pageSize; i++)
                            e += r.charMap[this.pages[t][i]];
                    return e
                }
                ,
                r.prototype.toFlattenUint8Array = function() {
                    for (var e = [], t = 0; t < this.pages.length; t++)
                        if (t === this.pages.length - 1) {
                            var i = Uint8Array.from(this.pages[t].slice(0, this.cursor));
                            e.push(i)
                        } else
                            e.push(this.pages[t]);
                    var a = new Uint8Array(e.reduce((function(e, t) {
                        return e + t.length
                    }
                    ), 0));
                    return e.reduce((function(e, t) {
                        return a.set(t, e),
                        e + t.length
                    }
                    ), 0),
                    a
                }
                ,
                r.prototype.writeByte = function(e) {
                    this.cursor >= r.pageSize && this.newPage(),
                    this.pages[this.page][this.cursor++] = e
                }
                ,
                r.prototype.writeUTFBytes = function(e) {
                    for (var t = e.length, i = 0; i < t; i++)
                        this.writeByte(e.charCodeAt(i))
                }
                ,
                r.prototype.writeBytes = function(e, t, i) {
                    for (var a = i || e.length, s = t || 0; s < a; s++)
                        this.writeByte(e[s])
                }
                ,
                l.prototype.setDelay = function(e) {
                    this.delay = Math.round(e / 10)
                }
                ,
                l.prototype.setFrameRate = function(e) {
                    this.delay = Math.round(100 / e)
                }
                ,
                l.prototype.setDispose = function(e) {
                    e >= 0 && (this.dispose = e)
                }
                ,
                l.prototype.setRepeat = function(e) {
                    this.repeat = e
                }
                ,
                l.prototype.setTransparent = function(e) {
                    this.transparent = e
                }
                ,
                l.prototype.addFrame = function(e) {
                    this.image = e,
                    this.colorTab = this.globalPalette && this.globalPalette.slice ? this.globalPalette : null,
                    this.getImagePixels(),
                    this.analyzePixels(),
                    !0 === this.globalPalette && (this.globalPalette = this.colorTab),
                    this.firstFrame && (this.writeHeader(),
                    this.writeLSD(),
                    this.writePalette(),
                    this.repeat >= 0 && this.writeNetscapeExt()),
                    this.writeGraphicCtrlExt(),
                    this.writeImageDesc(),
                    this.firstFrame || this.globalPalette || this.writePalette(),
                    this.writePixels(),
                    this.firstFrame = !1
                }
                ,
                l.prototype.finish = function() {
                    this.out.writeByte(59)
                }
                ,
                l.prototype.setQuality = function(e) {
                    e < 1 && (e = 1),
                    this.sample = e
                }
                ,
                l.prototype.setDither = function(e) {
                    !0 === e && (e = "FloydSteinberg"),
                    this.dither = e
                }
                ,
                l.prototype.setGlobalPalette = function(e) {
                    this.globalPalette = e
                }
                ,
                l.prototype.getGlobalPalette = function() {
                    return this.globalPalette && this.globalPalette.slice && this.globalPalette.slice(0) || this.globalPalette
                }
                ,
                l.prototype.writeHeader = function() {
                    this.out.writeUTFBytes("GIF89a")
                }
                ,
                l.prototype.analyzePixels = function() {
                    this.colorTab || (this.neuQuant = new a(this.pixels,this.sample),
                    this.neuQuant.buildColormap(),
                    this.colorTab = this.neuQuant.getColormap()),
                    this.dither ? this.ditherPixels(this.dither.replace("-serpentine", ""), null !== this.dither.match(/-serpentine/)) : this.indexPixels(),
                    this.pixels = null,
                    this.colorDepth = 8,
                    this.palSize = 7,
                    null !== this.transparent && (this.transIndex = this.findClosest(this.transparent, !0))
                }
                ,
                l.prototype.indexPixels = function(e) {
                    var t = this.pixels.length / 3;
                    this.indexedPixels = new Uint8Array(t);
                    for (var i = 0, a = 0; a < t; a++) {
                        var s = this.findClosestRGB(255 & this.pixels[i++], 255 & this.pixels[i++], 255 & this.pixels[i++]);
                        this.usedEntry[s] = !0,
                        this.indexedPixels[a] = s
                    }
                }
                ,
                l.prototype.ditherPixels = function(e, t) {
                    var i = {
                        FalseFloydSteinberg: [[3 / 8, 1, 0], [3 / 8, 0, 1], [2 / 8, 1, 1]],
                        FloydSteinberg: [[7 / 16, 1, 0], [3 / 16, -1, 1], [5 / 16, 0, 1], [1 / 16, 1, 1]],
                        Stucki: [[8 / 42, 1, 0], [4 / 42, 2, 0], [2 / 42, -2, 1], [4 / 42, -1, 1], [8 / 42, 0, 1], [4 / 42, 1, 1], [2 / 42, 2, 1], [1 / 42, -2, 2], [2 / 42, -1, 2], [4 / 42, 0, 2], [2 / 42, 1, 2], [1 / 42, 2, 2]],
                        Atkinson: [[1 / 8, 1, 0], [1 / 8, 2, 0], [1 / 8, -1, 1], [1 / 8, 0, 1], [1 / 8, 1, 1], [1 / 8, 0, 2]]
                    };
                    if (!e || !i[e])
                        throw "Unknown dithering kernel: " + e;
                    var a = i[e]
                      , s = 0
                      , n = this.height
                      , r = this.width
                      , o = this.pixels
                      , l = t ? -1 : 1;
                    this.indexedPixels = new Uint8Array(this.pixels.length / 3);
                    for (var d = 0; d < n; d++) {
                        t && (l *= -1);
                        for (var u = 1 == l ? 0 : r - 1, c = 1 == l ? r : 0; u !== c; u += l) {
                            var p = 3 * (s = d * r + u)
                              , h = o[p]
                              , f = o[p + 1]
                              , g = o[p + 2];
                            p = this.findClosestRGB(h, f, g),
                            this.usedEntry[p] = !0,
                            this.indexedPixels[s] = p,
                            p *= 3;
                            for (var m = h - this.colorTab[p], v = f - this.colorTab[p + 1], y = g - this.colorTab[p + 2], w = 1 == l ? 0 : a.length - 1, b = 1 == l ? a.length : 0; w !== b; w += l) {
                                var x = a[w][1]
                                  , C = a[w][2];
                                if (x + u >= 0 && x + u < r && C + d >= 0 && C + d < n) {
                                    var T = a[w][0];
                                    p = s + x + C * r,
                                    o[p *= 3] = Math.max(0, Math.min(255, o[p] + m * T)),
                                    o[p + 1] = Math.max(0, Math.min(255, o[p + 1] + v * T)),
                                    o[p + 2] = Math.max(0, Math.min(255, o[p + 2] + y * T))
                                }
                            }
                        }
                    }
                }
                ,
                l.prototype.findClosest = function(e, t) {
                    return this.findClosestRGB((16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, t)
                }
                ,
                l.prototype.findClosestRGB = function(e, t, i, a) {
                    if (null === this.colorTab)
                        return -1;
                    if (this.neuQuant && !a)
                        return this.neuQuant.lookupRGB(e, t, i);
                    for (var s = 0, n = 16777216, r = this.colorTab.length, o = 0, l = 0; o < r; l++) {
                        var d = e - (255 & this.colorTab[o++])
                          , u = t - (255 & this.colorTab[o++])
                          , c = i - (255 & this.colorTab[o++])
                          , p = d * d + u * u + c * c;
                        (!a || this.usedEntry[l]) && p < n && (n = p,
                        s = l)
                    }
                    return s
                }
                ,
                l.prototype.getImagePixels = function() {
                    var e = this.width
                      , t = this.height;
                    this.pixels = new Uint8Array(e * t * 3);
                    for (var i = this.image, a = 0, s = 0, n = 0; n < t; n++)
                        for (var r = 0; r < e; r++)
                            this.pixels[s++] = i[a++],
                            this.pixels[s++] = i[a++],
                            this.pixels[s++] = i[a++],
                            a++
                }
                ,
                l.prototype.writeGraphicCtrlExt = function() {
                    var e, t;
                    this.out.writeByte(33),
                    this.out.writeByte(249),
                    this.out.writeByte(4),
                    null === this.transparent ? (e = 0,
                    t = 0) : (e = 1,
                    t = 2),
                    this.dispose >= 0 && (t = 7 & this.dispose),
                    t <<= 2,
                    this.out.writeByte(0 | t | e),
                    this.writeShort(this.delay),
                    this.out.writeByte(this.transIndex),
                    this.out.writeByte(0)
                }
                ,
                l.prototype.writeImageDesc = function() {
                    this.out.writeByte(44),
                    this.writeShort(0),
                    this.writeShort(0),
                    this.writeShort(this.width),
                    this.writeShort(this.height),
                    this.firstFrame || this.globalPalette ? this.out.writeByte(0) : this.out.writeByte(128 | this.palSize)
                }
                ,
                l.prototype.writeLSD = function() {
                    this.writeShort(this.width),
                    this.writeShort(this.height),
                    this.out.writeByte(240 | this.palSize),
                    this.out.writeByte(0),
                    this.out.writeByte(0)
                }
                ,
                l.prototype.writeNetscapeExt = function() {
                    this.out.writeByte(33),
                    this.out.writeByte(255),
                    this.out.writeByte(11),
                    this.out.writeUTFBytes("NETSCAPE2.0"),
                    this.out.writeByte(3),
                    this.out.writeByte(1),
                    this.writeShort(this.repeat),
                    this.out.writeByte(0)
                }
                ,
                l.prototype.writePalette = function() {
                    this.out.writeBytes(this.colorTab);
                    for (var e = 768 - this.colorTab.length, t = 0; t < e; t++)
                        this.out.writeByte(0)
                }
                ,
                l.prototype.writeShort = function(e) {
                    this.out.writeByte(255 & e),
                    this.out.writeByte(e >> 8 & 255)
                }
                ,
                l.prototype.writePixels = function() {
                    new n(this.width,this.height,this.indexedPixels,this.colorDepth).encode(this.out)
                }
                ,
                l.prototype.stream = function() {
                    return this.out
                }
                ,
                t.a = l
            }
            , function(e, t, i) {
                e.exports = i(20)
            }
            , function(e, t, i) {
                var a = i(2).default;
                function s() {
                    "use strict";
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    e.exports = s = function() {
                        return t
                    }
                    ,
                    e.exports.__esModule = !0,
                    e.exports.default = e.exports;
                    var t = {}
                      , i = Object.prototype
                      , n = i.hasOwnProperty
                      , r = "function" == typeof Symbol ? Symbol : {}
                      , o = r.iterator || "@@iterator"
                      , l = r.asyncIterator || "@@asyncIterator"
                      , d = r.toStringTag || "@@toStringTag";
                    function u(e, t, i) {
                        return Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }),
                        e[t]
                    }
                    try {
                        u({}, "")
                    } catch (e) {
                        u = function(e, t, i) {
                            return e[t] = i
                        }
                    }
                    function c(e, t, i, a) {
                        var s = t && t.prototype instanceof f ? t : f
                          , n = Object.create(s.prototype)
                          , r = new k(a || []);
                        return n._invoke = function(e, t, i) {
                            var a = "suspendedStart";
                            return function(s, n) {
                                if ("executing" === a)
                                    throw new Error("Generator is already running");
                                if ("completed" === a) {
                                    if ("throw" === s)
                                        throw n;
                                    return D()
                                }
                                for (i.method = s,
                                i.arg = n; ; ) {
                                    var r = i.delegate;
                                    if (r) {
                                        var o = T(r, i);
                                        if (o) {
                                            if (o === h)
                                                continue;
                                            return o
                                        }
                                    }
                                    if ("next" === i.method)
                                        i.sent = i._sent = i.arg;
                                    else if ("throw" === i.method) {
                                        if ("suspendedStart" === a)
                                            throw a = "completed",
                                            i.arg;
                                        i.dispatchException(i.arg)
                                    } else
                                        "return" === i.method && i.abrupt("return", i.arg);
                                    a = "executing";
                                    var l = p(e, t, i);
                                    if ("normal" === l.type) {
                                        if (a = i.done ? "completed" : "suspendedYield",
                                        l.arg === h)
                                            continue;
                                        return {
                                            value: l.arg,
                                            done: i.done
                                        }
                                    }
                                    "throw" === l.type && (a = "completed",
                                    i.method = "throw",
                                    i.arg = l.arg)
                                }
                            }
                        }(e, i, r),
                        n
                    }
                    function p(e, t, i) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, i)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    t.wrap = c;
                    var h = {};
                    function f() {}
                    function g() {}
                    function m() {}
                    var v = {};
                    u(v, o, (function() {
                        return this
                    }
                    ));
                    var y = Object.getPrototypeOf
                      , w = y && y(y(E([])));
                    w && w !== i && n.call(w, o) && (v = w);
                    var b = m.prototype = f.prototype = Object.create(v);
                    function x(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            u(e, t, (function(e) {
                                return this._invoke(t, e)
                            }
                            ))
                        }
                        ))
                    }
                    function C(e, t) {
                        var i;
                        this._invoke = function(s, r) {
                            function o() {
                                return new t((function(i, o) {
                                    !function i(s, r, o, l) {
                                        var d = p(e[s], e, r);
                                        if ("throw" !== d.type) {
                                            var u = d.arg
                                              , c = u.value;
                                            return c && "object" == a(c) && n.call(c, "__await") ? t.resolve(c.__await).then((function(e) {
                                                i("next", e, o, l)
                                            }
                                            ), (function(e) {
                                                i("throw", e, o, l)
                                            }
                                            )) : t.resolve(c).then((function(e) {
                                                u.value = e,
                                                o(u)
                                            }
                                            ), (function(e) {
                                                return i("throw", e, o, l)
                                            }
                                            ))
                                        }
                                        l(d.arg)
                                    }(s, r, i, o)
                                }
                                ))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    }
                    function T(e, t) {
                        var i = e.iterator[t.method];
                        if (void 0 === i) {
                            if (t.delegate = null,
                            "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return",
                                t.arg = void 0,
                                T(e, t),
                                "throw" === t.method))
                                    return h;
                                t.method = "throw",
                                t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return h
                        }
                        var a = p(i, e.iterator, t.arg);
                        if ("throw" === a.type)
                            return t.method = "throw",
                            t.arg = a.arg,
                            t.delegate = null,
                            h;
                        var s = a.arg;
                        return s ? s.done ? (t[e.resultName] = s.value,
                        t.next = e.nextLoc,
                        "return" !== t.method && (t.method = "next",
                        t.arg = void 0),
                        t.delegate = null,
                        h) : s : (t.method = "throw",
                        t.arg = new TypeError("iterator result is not an object"),
                        t.delegate = null,
                        h)
                    }
                    function S(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]),
                        2 in e && (t.finallyLoc = e[2],
                        t.afterLoc = e[3]),
                        this.tryEntries.push(t)
                    }
                    function I(e) {
                        var t = e.completion || {};
                        t.type = "normal",
                        delete t.arg,
                        e.completion = t
                    }
                    function k(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }],
                        e.forEach(S, this),
                        this.reset(!0)
                    }
                    function E(e) {
                        if (e) {
                            var t = e[o];
                            if (t)
                                return t.call(e);
                            if ("function" == typeof e.next)
                                return e;
                            if (!isNaN(e.length)) {
                                var i = -1
                                  , a = function t() {
                                    for (; ++i < e.length; )
                                        if (n.call(e, i))
                                            return t.value = e[i],
                                            t.done = !1,
                                            t;
                                    return t.value = void 0,
                                    t.done = !0,
                                    t
                                };
                                return a.next = a
                            }
                        }
                        return {
                            next: D
                        }
                    }
                    function D() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return g.prototype = m,
                    u(b, "constructor", m),
                    u(m, "constructor", g),
                    g.displayName = u(m, d, "GeneratorFunction"),
                    t.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
                    }
                    ,
                    t.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m,
                        u(e, d, "GeneratorFunction")),
                        e.prototype = Object.create(b),
                        e
                    }
                    ,
                    t.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }
                    ,
                    x(C.prototype),
                    u(C.prototype, l, (function() {
                        return this
                    }
                    )),
                    t.AsyncIterator = C,
                    t.async = function(e, i, a, s, n) {
                        void 0 === n && (n = Promise);
                        var r = new C(c(e, i, a, s),n);
                        return t.isGeneratorFunction(i) ? r : r.next().then((function(e) {
                            return e.done ? e.value : r.next()
                        }
                        ))
                    }
                    ,
                    x(b),
                    u(b, d, "Generator"),
                    u(b, o, (function() {
                        return this
                    }
                    )),
                    u(b, "toString", (function() {
                        return "[object Generator]"
                    }
                    )),
                    t.keys = function(e) {
                        var t = [];
                        for (var i in e)
                            t.push(i);
                        return t.reverse(),
                        function i() {
                            for (; t.length; ) {
                                var a = t.pop();
                                if (a in e)
                                    return i.value = a,
                                    i.done = !1,
                                    i
                            }
                            return i.done = !0,
                            i
                        }
                    }
                    ,
                    t.values = E,
                    k.prototype = {
                        constructor: k,
                        reset: function(e) {
                            if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = void 0,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = void 0,
                            this.tryEntries.forEach(I),
                            !e)
                                for (var t in this)
                                    "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type)
                                throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done)
                                throw e;
                            var t = this;
                            function i(i, a) {
                                return r.type = "throw",
                                r.arg = e,
                                t.next = i,
                                a && (t.method = "next",
                                t.arg = void 0),
                                !!a
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var s = this.tryEntries[a]
                                  , r = s.completion;
                                if ("root" === s.tryLoc)
                                    return i("end");
                                if (s.tryLoc <= this.prev) {
                                    var o = n.call(s, "catchLoc")
                                      , l = n.call(s, "finallyLoc");
                                    if (o && l) {
                                        if (this.prev < s.catchLoc)
                                            return i(s.catchLoc, !0);
                                        if (this.prev < s.finallyLoc)
                                            return i(s.finallyLoc)
                                    } else if (o) {
                                        if (this.prev < s.catchLoc)
                                            return i(s.catchLoc, !0)
                                    } else {
                                        if (!l)
                                            throw new Error("try statement without catch or finally");
                                        if (this.prev < s.finallyLoc)
                                            return i(s.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var a = this.tryEntries[i];
                                if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                    var s = a;
                                    break
                                }
                            }
                            s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                            var r = s ? s.completion : {};
                            return r.type = e,
                            r.arg = t,
                            s ? (this.method = "next",
                            this.next = s.finallyLoc,
                            h) : this.complete(r)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type)
                                throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === e.type && t && (this.next = t),
                            h
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var i = this.tryEntries[t];
                                if (i.finallyLoc === e)
                                    return this.complete(i.completion, i.afterLoc),
                                    I(i),
                                    h
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var i = this.tryEntries[t];
                                if (i.tryLoc === e) {
                                    var a = i.completion;
                                    if ("throw" === a.type) {
                                        var s = a.arg;
                                        I(i)
                                    }
                                    return s
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, i) {
                            return this.delegate = {
                                iterator: E(e),
                                resultName: t,
                                nextLoc: i
                            },
                            "next" === this.method && (this.arg = void 0),
                            h
                        }
                    },
                    t
                }
                e.exports = s,
                e.exports.__esModule = !0,
                e.exports.default = e.exports
            }
            , function(e, t, i) {
                "use strict";
                (function(e) {
                    /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
                    var a = i(16)
                      , s = i(17)
                      , n = i(18);
                    function r() {
                        return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                    }
                    function o(e, t) {
                        if (r() < t)
                            throw new RangeError("Invalid typed array length");
                        return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)),
                        e.length = t),
                        e
                    }
                    function l(e, t, i) {
                        if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
                            return new l(e,t,i);
                        if ("number" == typeof e) {
                            if ("string" == typeof t)
                                throw new Error("If encoding is specified then the first argument must be a string");
                            return c(this, e)
                        }
                        return d(this, e, t, i)
                    }
                    function d(e, t, i, a) {
                        if ("number" == typeof t)
                            throw new TypeError('"value" argument must not be a number');
                        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, i, a) {
                            if (t.byteLength,
                            i < 0 || t.byteLength < i)
                                throw new RangeError("'offset' is out of bounds");
                            if (t.byteLength < i + (a || 0))
                                throw new RangeError("'length' is out of bounds");
                            return t = void 0 === i && void 0 === a ? new Uint8Array(t) : void 0 === a ? new Uint8Array(t,i) : new Uint8Array(t,i,a),
                            l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = p(e, t),
                            e
                        }(e, t, i, a) : "string" == typeof t ? function(e, t, i) {
                            if ("string" == typeof i && "" !== i || (i = "utf8"),
                            !l.isEncoding(i))
                                throw new TypeError('"encoding" must be a valid string encoding');
                            var a = 0 | f(t, i)
                              , s = (e = o(e, a)).write(t, i);
                            return s !== a && (e = e.slice(0, s)),
                            e
                        }(e, t, i) : function(e, t) {
                            if (l.isBuffer(t)) {
                                var i = 0 | h(t.length);
                                return 0 === (e = o(e, i)).length || t.copy(e, 0, 0, i),
                                e
                            }
                            if (t) {
                                if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                                    return "number" != typeof t.length || (a = t.length) != a ? o(e, 0) : p(e, t);
                                if ("Buffer" === t.type && n(t.data))
                                    return p(e, t.data)
                            }
                            var a;
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                        }(e, t)
                    }
                    function u(e) {
                        if ("number" != typeof e)
                            throw new TypeError('"size" argument must be a number');
                        if (e < 0)
                            throw new RangeError('"size" argument must not be negative')
                    }
                    function c(e, t) {
                        if (u(t),
                        e = o(e, t < 0 ? 0 : 0 | h(t)),
                        !l.TYPED_ARRAY_SUPPORT)
                            for (var i = 0; i < t; ++i)
                                e[i] = 0;
                        return e
                    }
                    function p(e, t) {
                        var i = t.length < 0 ? 0 : 0 | h(t.length);
                        e = o(e, i);
                        for (var a = 0; a < i; a += 1)
                            e[a] = 255 & t[a];
                        return e
                    }
                    function h(e) {
                        if (e >= r())
                            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
                        return 0 | e
                    }
                    function f(e, t) {
                        if (l.isBuffer(e))
                            return e.length;
                        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                            return e.byteLength;
                        "string" != typeof e && (e = "" + e);
                        var i = e.length;
                        if (0 === i)
                            return 0;
                        for (var a = !1; ; )
                            switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return i;
                            case "utf8":
                            case "utf-8":
                            case void 0:
                                return j(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * i;
                            case "hex":
                                return i >>> 1;
                            case "base64":
                                return q(e).length;
                            default:
                                if (a)
                                    return j(e).length;
                                t = ("" + t).toLowerCase(),
                                a = !0
                            }
                    }
                    function g(e, t, i) {
                        var a = !1;
                        if ((void 0 === t || t < 0) && (t = 0),
                        t > this.length)
                            return "";
                        if ((void 0 === i || i > this.length) && (i = this.length),
                        i <= 0)
                            return "";
                        if ((i >>>= 0) <= (t >>>= 0))
                            return "";
                        for (e || (e = "utf8"); ; )
                            switch (e) {
                            case "hex":
                                return L(this, t, i);
                            case "utf8":
                            case "utf-8":
                                return k(this, t, i);
                            case "ascii":
                                return E(this, t, i);
                            case "latin1":
                            case "binary":
                                return D(this, t, i);
                            case "base64":
                                return I(this, t, i);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return A(this, t, i);
                            default:
                                if (a)
                                    throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(),
                                a = !0
                            }
                    }
                    function m(e, t, i) {
                        var a = e[t];
                        e[t] = e[i],
                        e[i] = a
                    }
                    function v(e, t, i, a, s) {
                        if (0 === e.length)
                            return -1;
                        if ("string" == typeof i ? (a = i,
                        i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648),
                        i = +i,
                        isNaN(i) && (i = s ? 0 : e.length - 1),
                        i < 0 && (i = e.length + i),
                        i >= e.length) {
                            if (s)
                                return -1;
                            i = e.length - 1
                        } else if (i < 0) {
                            if (!s)
                                return -1;
                            i = 0
                        }
                        if ("string" == typeof t && (t = l.from(t, a)),
                        l.isBuffer(t))
                            return 0 === t.length ? -1 : y(e, t, i, a, s);
                        if ("number" == typeof t)
                            return t &= 255,
                            l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? s ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : y(e, [t], i, a, s);
                        throw new TypeError("val must be string, number or Buffer")
                    }
                    function y(e, t, i, a, s) {
                        var n, r = 1, o = e.length, l = t.length;
                        if (void 0 !== a && ("ucs2" === (a = String(a).toLowerCase()) || "ucs-2" === a || "utf16le" === a || "utf-16le" === a)) {
                            if (e.length < 2 || t.length < 2)
                                return -1;
                            r = 2,
                            o /= 2,
                            l /= 2,
                            i /= 2
                        }
                        function d(e, t) {
                            return 1 === r ? e[t] : e.readUInt16BE(t * r)
                        }
                        if (s) {
                            var u = -1;
                            for (n = i; n < o; n++)
                                if (d(e, n) === d(t, -1 === u ? 0 : n - u)) {
                                    if (-1 === u && (u = n),
                                    n - u + 1 === l)
                                        return u * r
                                } else
                                    -1 !== u && (n -= n - u),
                                    u = -1
                        } else
                            for (i + l > o && (i = o - l),
                            n = i; n >= 0; n--) {
                                for (var c = !0, p = 0; p < l; p++)
                                    if (d(e, n + p) !== d(t, p)) {
                                        c = !1;
                                        break
                                    }
                                if (c)
                                    return n
                            }
                        return -1
                    }
                    function w(e, t, i, a) {
                        i = Number(i) || 0;
                        var s = e.length - i;
                        a ? (a = Number(a)) > s && (a = s) : a = s;
                        var n = t.length;
                        if (n % 2 != 0)
                            throw new TypeError("Invalid hex string");
                        a > n / 2 && (a = n / 2);
                        for (var r = 0; r < a; ++r) {
                            var o = parseInt(t.substr(2 * r, 2), 16);
                            if (isNaN(o))
                                return r;
                            e[i + r] = o
                        }
                        return r
                    }
                    function b(e, t, i, a) {
                        return Q(j(t, e.length - i), e, i, a)
                    }
                    function x(e, t, i, a) {
                        return Q(function(e) {
                            for (var t = [], i = 0; i < e.length; ++i)
                                t.push(255 & e.charCodeAt(i));
                            return t
                        }(t), e, i, a)
                    }
                    function C(e, t, i, a) {
                        return x(e, t, i, a)
                    }
                    function T(e, t, i, a) {
                        return Q(q(t), e, i, a)
                    }
                    function S(e, t, i, a) {
                        return Q(function(e, t) {
                            for (var i, a, s, n = [], r = 0; r < e.length && !((t -= 2) < 0); ++r)
                                i = e.charCodeAt(r),
                                a = i >> 8,
                                s = i % 256,
                                n.push(s),
                                n.push(a);
                            return n
                        }(t, e.length - i), e, i, a)
                    }
                    function I(e, t, i) {
                        return 0 === t && i === e.length ? a.fromByteArray(e) : a.fromByteArray(e.slice(t, i))
                    }
                    function k(e, t, i) {
                        i = Math.min(e.length, i);
                        for (var a = [], s = t; s < i; ) {
                            var n, r, o, l, d = e[s], u = null, c = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1;
                            if (s + c <= i)
                                switch (c) {
                                case 1:
                                    d < 128 && (u = d);
                                    break;
                                case 2:
                                    128 == (192 & (n = e[s + 1])) && (l = (31 & d) << 6 | 63 & n) > 127 && (u = l);
                                    break;
                                case 3:
                                    n = e[s + 1],
                                    r = e[s + 2],
                                    128 == (192 & n) && 128 == (192 & r) && (l = (15 & d) << 12 | (63 & n) << 6 | 63 & r) > 2047 && (l < 55296 || l > 57343) && (u = l);
                                    break;
                                case 4:
                                    n = e[s + 1],
                                    r = e[s + 2],
                                    o = e[s + 3],
                                    128 == (192 & n) && 128 == (192 & r) && 128 == (192 & o) && (l = (15 & d) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & o) > 65535 && l < 1114112 && (u = l)
                                }
                            null === u ? (u = 65533,
                            c = 1) : u > 65535 && (u -= 65536,
                            a.push(u >>> 10 & 1023 | 55296),
                            u = 56320 | 1023 & u),
                            a.push(u),
                            s += c
                        }
                        return function(e) {
                            var t = e.length;
                            if (t <= 4096)
                                return String.fromCharCode.apply(String, e);
                            for (var i = "", a = 0; a < t; )
                                i += String.fromCharCode.apply(String, e.slice(a, a += 4096));
                            return i
                        }(a)
                    }
                    function E(e, t, i) {
                        var a = "";
                        i = Math.min(e.length, i);
                        for (var s = t; s < i; ++s)
                            a += String.fromCharCode(127 & e[s]);
                        return a
                    }
                    function D(e, t, i) {
                        var a = "";
                        i = Math.min(e.length, i);
                        for (var s = t; s < i; ++s)
                            a += String.fromCharCode(e[s]);
                        return a
                    }
                    function L(e, t, i) {
                        var a = e.length;
                        (!t || t < 0) && (t = 0),
                        (!i || i < 0 || i > a) && (i = a);
                        for (var s = "", n = t; n < i; ++n)
                            s += N(e[n]);
                        return s
                    }
                    function A(e, t, i) {
                        for (var a = e.slice(t, i), s = "", n = 0; n < a.length; n += 2)
                            s += String.fromCharCode(a[n] + 256 * a[n + 1]);
                        return s
                    }
                    function _(e, t, i) {
                        if (e % 1 != 0 || e < 0)
                            throw new RangeError("offset is not uint");
                        if (e + t > i)
                            throw new RangeError("Trying to access beyond buffer length")
                    }
                    function P(e, t, i, a, s, n) {
                        if (!l.isBuffer(e))
                            throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (t > s || t < n)
                            throw new RangeError('"value" argument is out of bounds');
                        if (i + a > e.length)
                            throw new RangeError("Index out of range")
                    }
                    function M(e, t, i, a) {
                        t < 0 && (t = 65535 + t + 1);
                        for (var s = 0, n = Math.min(e.length - i, 2); s < n; ++s)
                            e[i + s] = (t & 255 << 8 * (a ? s : 1 - s)) >>> 8 * (a ? s : 1 - s)
                    }
                    function O(e, t, i, a) {
                        t < 0 && (t = 4294967295 + t + 1);
                        for (var s = 0, n = Math.min(e.length - i, 4); s < n; ++s)
                            e[i + s] = t >>> 8 * (a ? s : 3 - s) & 255
                    }
                    function $(e, t, i, a, s, n) {
                        if (i + a > e.length)
                            throw new RangeError("Index out of range");
                        if (i < 0)
                            throw new RangeError("Index out of range")
                    }
                    function z(e, t, i, a, n) {
                        return n || $(e, 0, i, 4),
                        s.write(e, t, i, a, 23, 4),
                        i + 4
                    }
                    function R(e, t, i, a, n) {
                        return n || $(e, 0, i, 8),
                        s.write(e, t, i, a, 52, 8),
                        i + 8
                    }
                    t.Buffer = l,
                    t.SlowBuffer = function(e) {
                        return +e != e && (e = 0),
                        l.alloc(+e)
                    }
                    ,
                    t.INSPECT_MAX_BYTES = 50,
                    l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                        try {
                            var e = new Uint8Array(1);
                            return e.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function() {
                                    return 42
                                }
                            },
                            42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                        } catch (e) {
                            return !1
                        }
                    }(),
                    t.kMaxLength = r(),
                    l.poolSize = 8192,
                    l._augment = function(e) {
                        return e.__proto__ = l.prototype,
                        e
                    }
                    ,
                    l.from = function(e, t, i) {
                        return d(null, e, t, i)
                    }
                    ,
                    l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype,
                    l.__proto__ = Uint8Array,
                    "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
                        value: null,
                        configurable: !0
                    })),
                    l.alloc = function(e, t, i) {
                        return function(e, t, i, a) {
                            return u(t),
                            t <= 0 ? o(e, t) : void 0 !== i ? "string" == typeof a ? o(e, t).fill(i, a) : o(e, t).fill(i) : o(e, t)
                        }(null, e, t, i)
                    }
                    ,
                    l.allocUnsafe = function(e) {
                        return c(null, e)
                    }
                    ,
                    l.allocUnsafeSlow = function(e) {
                        return c(null, e)
                    }
                    ,
                    l.isBuffer = function(e) {
                        return !(null == e || !e._isBuffer)
                    }
                    ,
                    l.compare = function(e, t) {
                        if (!l.isBuffer(e) || !l.isBuffer(t))
                            throw new TypeError("Arguments must be Buffers");
                        if (e === t)
                            return 0;
                        for (var i = e.length, a = t.length, s = 0, n = Math.min(i, a); s < n; ++s)
                            if (e[s] !== t[s]) {
                                i = e[s],
                                a = t[s];
                                break
                            }
                        return i < a ? -1 : a < i ? 1 : 0
                    }
                    ,
                    l.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                        }
                    }
                    ,
                    l.concat = function(e, t) {
                        if (!n(e))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length)
                            return l.alloc(0);
                        var i;
                        if (void 0 === t)
                            for (t = 0,
                            i = 0; i < e.length; ++i)
                                t += e[i].length;
                        var a = l.allocUnsafe(t)
                          , s = 0;
                        for (i = 0; i < e.length; ++i) {
                            var r = e[i];
                            if (!l.isBuffer(r))
                                throw new TypeError('"list" argument must be an Array of Buffers');
                            r.copy(a, s),
                            s += r.length
                        }
                        return a
                    }
                    ,
                    l.byteLength = f,
                    l.prototype._isBuffer = !0,
                    l.prototype.swap16 = function() {
                        var e = this.length;
                        if (e % 2 != 0)
                            throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var t = 0; t < e; t += 2)
                            m(this, t, t + 1);
                        return this
                    }
                    ,
                    l.prototype.swap32 = function() {
                        var e = this.length;
                        if (e % 4 != 0)
                            throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var t = 0; t < e; t += 4)
                            m(this, t, t + 3),
                            m(this, t + 1, t + 2);
                        return this
                    }
                    ,
                    l.prototype.swap64 = function() {
                        var e = this.length;
                        if (e % 8 != 0)
                            throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var t = 0; t < e; t += 8)
                            m(this, t, t + 7),
                            m(this, t + 1, t + 6),
                            m(this, t + 2, t + 5),
                            m(this, t + 3, t + 4);
                        return this
                    }
                    ,
                    l.prototype.toString = function() {
                        var e = 0 | this.length;
                        return 0 === e ? "" : 0 === arguments.length ? k(this, 0, e) : g.apply(this, arguments)
                    }
                    ,
                    l.prototype.equals = function(e) {
                        if (!l.isBuffer(e))
                            throw new TypeError("Argument must be a Buffer");
                        return this === e || 0 === l.compare(this, e)
                    }
                    ,
                    l.prototype.inspect = function() {
                        var e = ""
                          , i = t.INSPECT_MAX_BYTES;
                        return this.length > 0 && (e = this.toString("hex", 0, i).match(/.{2}/g).join(" "),
                        this.length > i && (e += " ... ")),
                        "<Buffer " + e + ">"
                    }
                    ,
                    l.prototype.compare = function(e, t, i, a, s) {
                        if (!l.isBuffer(e))
                            throw new TypeError("Argument must be a Buffer");
                        if (void 0 === t && (t = 0),
                        void 0 === i && (i = e ? e.length : 0),
                        void 0 === a && (a = 0),
                        void 0 === s && (s = this.length),
                        t < 0 || i > e.length || a < 0 || s > this.length)
                            throw new RangeError("out of range index");
                        if (a >= s && t >= i)
                            return 0;
                        if (a >= s)
                            return -1;
                        if (t >= i)
                            return 1;
                        if (this === e)
                            return 0;
                        for (var n = (s >>>= 0) - (a >>>= 0), r = (i >>>= 0) - (t >>>= 0), o = Math.min(n, r), d = this.slice(a, s), u = e.slice(t, i), c = 0; c < o; ++c)
                            if (d[c] !== u[c]) {
                                n = d[c],
                                r = u[c];
                                break
                            }
                        return n < r ? -1 : r < n ? 1 : 0
                    }
                    ,
                    l.prototype.includes = function(e, t, i) {
                        return -1 !== this.indexOf(e, t, i)
                    }
                    ,
                    l.prototype.indexOf = function(e, t, i) {
                        return v(this, e, t, i, !0)
                    }
                    ,
                    l.prototype.lastIndexOf = function(e, t, i) {
                        return v(this, e, t, i, !1)
                    }
                    ,
                    l.prototype.write = function(e, t, i, a) {
                        if (void 0 === t)
                            a = "utf8",
                            i = this.length,
                            t = 0;
                        else if (void 0 === i && "string" == typeof t)
                            a = t,
                            i = this.length,
                            t = 0;
                        else {
                            if (!isFinite(t))
                                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            t |= 0,
                            isFinite(i) ? (i |= 0,
                            void 0 === a && (a = "utf8")) : (a = i,
                            i = void 0)
                        }
                        var s = this.length - t;
                        if ((void 0 === i || i > s) && (i = s),
                        e.length > 0 && (i < 0 || t < 0) || t > this.length)
                            throw new RangeError("Attempt to write outside buffer bounds");
                        a || (a = "utf8");
                        for (var n = !1; ; )
                            switch (a) {
                            case "hex":
                                return w(this, e, t, i);
                            case "utf8":
                            case "utf-8":
                                return b(this, e, t, i);
                            case "ascii":
                                return x(this, e, t, i);
                            case "latin1":
                            case "binary":
                                return C(this, e, t, i);
                            case "base64":
                                return T(this, e, t, i);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return S(this, e, t, i);
                            default:
                                if (n)
                                    throw new TypeError("Unknown encoding: " + a);
                                a = ("" + a).toLowerCase(),
                                n = !0
                            }
                    }
                    ,
                    l.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }
                    ,
                    l.prototype.slice = function(e, t) {
                        var i, a = this.length;
                        if ((e = ~~e) < 0 ? (e += a) < 0 && (e = 0) : e > a && (e = a),
                        (t = void 0 === t ? a : ~~t) < 0 ? (t += a) < 0 && (t = 0) : t > a && (t = a),
                        t < e && (t = e),
                        l.TYPED_ARRAY_SUPPORT)
                            (i = this.subarray(e, t)).__proto__ = l.prototype;
                        else {
                            var s = t - e;
                            i = new l(s,void 0);
                            for (var n = 0; n < s; ++n)
                                i[n] = this[n + e]
                        }
                        return i
                    }
                    ,
                    l.prototype.readUIntLE = function(e, t, i) {
                        e |= 0,
                        t |= 0,
                        i || _(e, t, this.length);
                        for (var a = this[e], s = 1, n = 0; ++n < t && (s *= 256); )
                            a += this[e + n] * s;
                        return a
                    }
                    ,
                    l.prototype.readUIntBE = function(e, t, i) {
                        e |= 0,
                        t |= 0,
                        i || _(e, t, this.length);
                        for (var a = this[e + --t], s = 1; t > 0 && (s *= 256); )
                            a += this[e + --t] * s;
                        return a
                    }
                    ,
                    l.prototype.readUInt8 = function(e, t) {
                        return t || _(e, 1, this.length),
                        this[e]
                    }
                    ,
                    l.prototype.readUInt16LE = function(e, t) {
                        return t || _(e, 2, this.length),
                        this[e] | this[e + 1] << 8
                    }
                    ,
                    l.prototype.readUInt16BE = function(e, t) {
                        return t || _(e, 2, this.length),
                        this[e] << 8 | this[e + 1]
                    }
                    ,
                    l.prototype.readUInt32LE = function(e, t) {
                        return t || _(e, 4, this.length),
                        (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    }
                    ,
                    l.prototype.readUInt32BE = function(e, t) {
                        return t || _(e, 4, this.length),
                        16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }
                    ,
                    l.prototype.readIntLE = function(e, t, i) {
                        e |= 0,
                        t |= 0,
                        i || _(e, t, this.length);
                        for (var a = this[e], s = 1, n = 0; ++n < t && (s *= 256); )
                            a += this[e + n] * s;
                        return a >= (s *= 128) && (a -= Math.pow(2, 8 * t)),
                        a
                    }
                    ,
                    l.prototype.readIntBE = function(e, t, i) {
                        e |= 0,
                        t |= 0,
                        i || _(e, t, this.length);
                        for (var a = t, s = 1, n = this[e + --a]; a > 0 && (s *= 256); )
                            n += this[e + --a] * s;
                        return n >= (s *= 128) && (n -= Math.pow(2, 8 * t)),
                        n
                    }
                    ,
                    l.prototype.readInt8 = function(e, t) {
                        return t || _(e, 1, this.length),
                        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                    }
                    ,
                    l.prototype.readInt16LE = function(e, t) {
                        t || _(e, 2, this.length);
                        var i = this[e] | this[e + 1] << 8;
                        return 32768 & i ? 4294901760 | i : i
                    }
                    ,
                    l.prototype.readInt16BE = function(e, t) {
                        t || _(e, 2, this.length);
                        var i = this[e + 1] | this[e] << 8;
                        return 32768 & i ? 4294901760 | i : i
                    }
                    ,
                    l.prototype.readInt32LE = function(e, t) {
                        return t || _(e, 4, this.length),
                        this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }
                    ,
                    l.prototype.readInt32BE = function(e, t) {
                        return t || _(e, 4, this.length),
                        this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }
                    ,
                    l.prototype.readFloatLE = function(e, t) {
                        return t || _(e, 4, this.length),
                        s.read(this, e, !0, 23, 4)
                    }
                    ,
                    l.prototype.readFloatBE = function(e, t) {
                        return t || _(e, 4, this.length),
                        s.read(this, e, !1, 23, 4)
                    }
                    ,
                    l.prototype.readDoubleLE = function(e, t) {
                        return t || _(e, 8, this.length),
                        s.read(this, e, !0, 52, 8)
                    }
                    ,
                    l.prototype.readDoubleBE = function(e, t) {
                        return t || _(e, 8, this.length),
                        s.read(this, e, !1, 52, 8)
                    }
                    ,
                    l.prototype.writeUIntLE = function(e, t, i, a) {
                        e = +e,
                        t |= 0,
                        i |= 0,
                        a || P(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
                        var s = 1
                          , n = 0;
                        for (this[t] = 255 & e; ++n < i && (s *= 256); )
                            this[t + n] = e / s & 255;
                        return t + i
                    }
                    ,
                    l.prototype.writeUIntBE = function(e, t, i, a) {
                        e = +e,
                        t |= 0,
                        i |= 0,
                        a || P(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
                        var s = i - 1
                          , n = 1;
                        for (this[t + s] = 255 & e; --s >= 0 && (n *= 256); )
                            this[t + s] = e / n & 255;
                        return t + i
                    }
                    ,
                    l.prototype.writeUInt8 = function(e, t, i) {
                        return e = +e,
                        t |= 0,
                        i || P(this, e, t, 1, 255, 0),
                        l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                        this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    l.prototype.writeUInt16LE = function(e, t, i) {
                        return e = +e,
                        t |= 0,
                        i || P(this, e, t, 2, 65535, 0),
                        l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                        this[t + 1] = e >>> 8) : M(this, e, t, !0),
                        t + 2
                    }
                    ,
                    l.prototype.writeUInt16BE = function(e, t, i) {
                        return e = +e,
                        t |= 0,
                        i || P(this, e, t, 2, 65535, 0),
                        l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                        this[t + 1] = 255 & e) : M(this, e, t, !1),
                        t + 2
                    }
                    ,
                    l.prototype.writeUInt32LE = function(e, t, i) {
                        return e = +e,
                        t |= 0,
                        i || P(this, e, t, 4, 4294967295, 0),
                        l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
                        this[t + 2] = e >>> 16,
                        this[t + 1] = e >>> 8,
                        this[t] = 255 & e) : O(this, e, t, !0),
                        t + 4
                    }
                    ,
                    l.prototype.writeUInt32BE = function(e, t, i) {
                        return e = +e,
                        t |= 0,
                        i || P(this, e, t, 4, 4294967295, 0),
                        l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                        this[t + 1] = e >>> 16,
                        this[t + 2] = e >>> 8,
                        this[t + 3] = 255 & e) : O(this, e, t, !1),
                        t + 4
                    }
                    ,
                    l.prototype.writeIntLE = function(e, t, i, a) {
                        if (e = +e,
                        t |= 0,
                        !a) {
                            var s = Math.pow(2, 8 * i - 1);
                            P(this, e, t, i, s - 1, -s)
                        }
                        var n = 0
                          , r = 1
                          , o = 0;
                        for (this[t] = 255 & e; ++n < i && (r *= 256); )
                            e < 0 && 0 === o && 0 !== this[t + n - 1] && (o = 1),
                            this[t + n] = (e / r >> 0) - o & 255;
                        return t + i
                    }
                    ,
                    l.prototype.writeIntBE = function(e, t, i, a) {
                        if (e = +e,
                        t |= 0,
                        !a) {
                            var s = Math.pow(2, 8 * i - 1);
                            P(this, e, t, i, s - 1, -s)
                        }
                        var n = i - 1
                          , r = 1
                          , o = 0;
                        for (this[t + n] = 255 & e; --n >= 0 && (r *= 256); )
                            e < 0 && 0 === o && 0 !== this[t + n + 1] && (o = 1),
                            this[t + n] = (e / r >> 0) - o & 255;
                        return t + i
                    }
                    ,
                    l.prototype.writeInt8 = function(e, t, i) {
                        return e = +e,
                        t |= 0,
                        i || P(this, e, t, 1, 127, -128),
                        l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                        e < 0 && (e = 255 + e + 1),
                        this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    l.prototype.writeInt16LE = function(e, t, i) {
                        return e = +e,
                        t |= 0,
                        i || P(this, e, t, 2, 32767, -32768),
                        l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                        this[t + 1] = e >>> 8) : M(this, e, t, !0),
                        t + 2
                    }
                    ,
                    l.prototype.writeInt16BE = function(e, t, i) {
                        return e = +e,
                        t |= 0,
                        i || P(this, e, t, 2, 32767, -32768),
                        l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                        this[t + 1] = 255 & e) : M(this, e, t, !1),
                        t + 2
                    }
                    ,
                    l.prototype.writeInt32LE = function(e, t, i) {
                        return e = +e,
                        t |= 0,
                        i || P(this, e, t, 4, 2147483647, -2147483648),
                        l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                        this[t + 1] = e >>> 8,
                        this[t + 2] = e >>> 16,
                        this[t + 3] = e >>> 24) : O(this, e, t, !0),
                        t + 4
                    }
                    ,
                    l.prototype.writeInt32BE = function(e, t, i) {
                        return e = +e,
                        t |= 0,
                        i || P(this, e, t, 4, 2147483647, -2147483648),
                        e < 0 && (e = 4294967295 + e + 1),
                        l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                        this[t + 1] = e >>> 16,
                        this[t + 2] = e >>> 8,
                        this[t + 3] = 255 & e) : O(this, e, t, !1),
                        t + 4
                    }
                    ,
                    l.prototype.writeFloatLE = function(e, t, i) {
                        return z(this, e, t, !0, i)
                    }
                    ,
                    l.prototype.writeFloatBE = function(e, t, i) {
                        return z(this, e, t, !1, i)
                    }
                    ,
                    l.prototype.writeDoubleLE = function(e, t, i) {
                        return R(this, e, t, !0, i)
                    }
                    ,
                    l.prototype.writeDoubleBE = function(e, t, i) {
                        return R(this, e, t, !1, i)
                    }
                    ,
                    l.prototype.copy = function(e, t, i, a) {
                        if (i || (i = 0),
                        a || 0 === a || (a = this.length),
                        t >= e.length && (t = e.length),
                        t || (t = 0),
                        a > 0 && a < i && (a = i),
                        a === i)
                            return 0;
                        if (0 === e.length || 0 === this.length)
                            return 0;
                        if (t < 0)
                            throw new RangeError("targetStart out of bounds");
                        if (i < 0 || i >= this.length)
                            throw new RangeError("sourceStart out of bounds");
                        if (a < 0)
                            throw new RangeError("sourceEnd out of bounds");
                        a > this.length && (a = this.length),
                        e.length - t < a - i && (a = e.length - t + i);
                        var s, n = a - i;
                        if (this === e && i < t && t < a)
                            for (s = n - 1; s >= 0; --s)
                                e[s + t] = this[s + i];
                        else if (n < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                            for (s = 0; s < n; ++s)
                                e[s + t] = this[s + i];
                        else
                            Uint8Array.prototype.set.call(e, this.subarray(i, i + n), t);
                        return n
                    }
                    ,
                    l.prototype.fill = function(e, t, i, a) {
                        if ("string" == typeof e) {
                            if ("string" == typeof t ? (a = t,
                            t = 0,
                            i = this.length) : "string" == typeof i && (a = i,
                            i = this.length),
                            1 === e.length) {
                                var s = e.charCodeAt(0);
                                s < 256 && (e = s)
                            }
                            if (void 0 !== a && "string" != typeof a)
                                throw new TypeError("encoding must be a string");
                            if ("string" == typeof a && !l.isEncoding(a))
                                throw new TypeError("Unknown encoding: " + a)
                        } else
                            "number" == typeof e && (e &= 255);
                        if (t < 0 || this.length < t || this.length < i)
                            throw new RangeError("Out of range index");
                        if (i <= t)
                            return this;
                        var n;
                        if (t >>>= 0,
                        i = void 0 === i ? this.length : i >>> 0,
                        e || (e = 0),
                        "number" == typeof e)
                            for (n = t; n < i; ++n)
                                this[n] = e;
                        else {
                            var r = l.isBuffer(e) ? e : j(new l(e,a).toString())
                              , o = r.length;
                            for (n = 0; n < i - t; ++n)
                                this[n + t] = r[n % o]
                        }
                        return this
                    }
                    ;
                    var B = /[^+\/0-9A-Za-z-_]/g;
                    function N(e) {
                        return e < 16 ? "0" + e.toString(16) : e.toString(16)
                    }
                    function j(e, t) {
                        var i;
                        t = t || 1 / 0;
                        for (var a = e.length, s = null, n = [], r = 0; r < a; ++r) {
                            if ((i = e.charCodeAt(r)) > 55295 && i < 57344) {
                                if (!s) {
                                    if (i > 56319) {
                                        (t -= 3) > -1 && n.push(239, 191, 189);
                                        continue
                                    }
                                    if (r + 1 === a) {
                                        (t -= 3) > -1 && n.push(239, 191, 189);
                                        continue
                                    }
                                    s = i;
                                    continue
                                }
                                if (i < 56320) {
                                    (t -= 3) > -1 && n.push(239, 191, 189),
                                    s = i;
                                    continue
                                }
                                i = 65536 + (s - 55296 << 10 | i - 56320)
                            } else
                                s && (t -= 3) > -1 && n.push(239, 191, 189);
                            if (s = null,
                            i < 128) {
                                if ((t -= 1) < 0)
                                    break;
                                n.push(i)
                            } else if (i < 2048) {
                                if ((t -= 2) < 0)
                                    break;
                                n.push(i >> 6 | 192, 63 & i | 128)
                            } else if (i < 65536) {
                                if ((t -= 3) < 0)
                                    break;
                                n.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                            } else {
                                if (!(i < 1114112))
                                    throw new Error("Invalid code point");
                                if ((t -= 4) < 0)
                                    break;
                                n.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                            }
                        }
                        return n
                    }
                    function q(e) {
                        return a.toByteArray(function(e) {
                            if ((e = function(e) {
                                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                            }(e).replace(B, "")).length < 2)
                                return "";
                            for (; e.length % 4 != 0; )
                                e += "=";
                            return e
                        }(e))
                    }
                    function Q(e, t, i, a) {
                        for (var s = 0; s < a && !(s + i >= t.length || s >= e.length); ++s)
                            t[s + i] = e[s];
                        return s
                    }
                }
                ).call(this, i(8))
            }
            , function(e, t, i) {
                "use strict";
                t.byteLength = function(e) {
                    var t = d(e)
                      , i = t[0]
                      , a = t[1];
                    return 3 * (i + a) / 4 - a
                }
                ,
                t.toByteArray = function(e) {
                    var t, i, a = d(e), r = a[0], o = a[1], l = new n(function(e, t, i) {
                        return 3 * (t + i) / 4 - i
                    }(0, r, o)), u = 0, c = o > 0 ? r - 4 : r;
                    for (i = 0; i < c; i += 4)
                        t = s[e.charCodeAt(i)] << 18 | s[e.charCodeAt(i + 1)] << 12 | s[e.charCodeAt(i + 2)] << 6 | s[e.charCodeAt(i + 3)],
                        l[u++] = t >> 16 & 255,
                        l[u++] = t >> 8 & 255,
                        l[u++] = 255 & t;
                    return 2 === o && (t = s[e.charCodeAt(i)] << 2 | s[e.charCodeAt(i + 1)] >> 4,
                    l[u++] = 255 & t),
                    1 === o && (t = s[e.charCodeAt(i)] << 10 | s[e.charCodeAt(i + 1)] << 4 | s[e.charCodeAt(i + 2)] >> 2,
                    l[u++] = t >> 8 & 255,
                    l[u++] = 255 & t),
                    l
                }
                ,
                t.fromByteArray = function(e) {
                    for (var t, i = e.length, s = i % 3, n = [], r = 0, o = i - s; r < o; r += 16383)
                        n.push(u(e, r, r + 16383 > o ? o : r + 16383));
                    return 1 === s ? (t = e[i - 1],
                    n.push(a[t >> 2] + a[t << 4 & 63] + "==")) : 2 === s && (t = (e[i - 2] << 8) + e[i - 1],
                    n.push(a[t >> 10] + a[t >> 4 & 63] + a[t << 2 & 63] + "=")),
                    n.join("")
                }
                ;
                for (var a = [], s = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, l = r.length; o < l; ++o)
                    a[o] = r[o],
                    s[r.charCodeAt(o)] = o;
                function d(e) {
                    var t = e.length;
                    if (t % 4 > 0)
                        throw new Error("Invalid string. Length must be a multiple of 4");
                    var i = e.indexOf("=");
                    return -1 === i && (i = t),
                    [i, i === t ? 0 : 4 - i % 4]
                }
                function u(e, t, i) {
                    for (var s, n, r = [], o = t; o < i; o += 3)
                        s = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]),
                        r.push(a[(n = s) >> 18 & 63] + a[n >> 12 & 63] + a[n >> 6 & 63] + a[63 & n]);
                    return r.join("")
                }
                s["-".charCodeAt(0)] = 62,
                s["_".charCodeAt(0)] = 63
            }
            , function(e, t) {
                /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
                t.read = function(e, t, i, a, s) {
                    var n, r, o = 8 * s - a - 1, l = (1 << o) - 1, d = l >> 1, u = -7, c = i ? s - 1 : 0, p = i ? -1 : 1, h = e[t + c];
                    for (c += p,
                    n = h & (1 << -u) - 1,
                    h >>= -u,
                    u += o; u > 0; n = 256 * n + e[t + c],
                    c += p,
                    u -= 8)
                        ;
                    for (r = n & (1 << -u) - 1,
                    n >>= -u,
                    u += a; u > 0; r = 256 * r + e[t + c],
                    c += p,
                    u -= 8)
                        ;
                    if (0 === n)
                        n = 1 - d;
                    else {
                        if (n === l)
                            return r ? NaN : 1 / 0 * (h ? -1 : 1);
                        r += Math.pow(2, a),
                        n -= d
                    }
                    return (h ? -1 : 1) * r * Math.pow(2, n - a)
                }
                ,
                t.write = function(e, t, i, a, s, n) {
                    var r, o, l, d = 8 * n - s - 1, u = (1 << d) - 1, c = u >> 1, p = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = a ? 0 : n - 1, f = a ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t),
                    isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0,
                    r = u) : (r = Math.floor(Math.log(t) / Math.LN2),
                    t * (l = Math.pow(2, -r)) < 1 && (r--,
                    l *= 2),
                    (t += r + c >= 1 ? p / l : p * Math.pow(2, 1 - c)) * l >= 2 && (r++,
                    l /= 2),
                    r + c >= u ? (o = 0,
                    r = u) : r + c >= 1 ? (o = (t * l - 1) * Math.pow(2, s),
                    r += c) : (o = t * Math.pow(2, c - 1) * Math.pow(2, s),
                    r = 0)); s >= 8; e[i + h] = 255 & o,
                    h += f,
                    o /= 256,
                    s -= 8)
                        ;
                    for (r = r << s | o,
                    d += s; d > 0; e[i + h] = 255 & r,
                    h += f,
                    r /= 256,
                    d -= 8)
                        ;
                    e[i + h - f] |= 128 * g
                }
            }
            , function(e, t) {
                var i = {}.toString;
                e.exports = Array.isArray || function(e) {
                    return "[object Array]" == i.call(e)
                }
            }
            , function(e, t) {
                var i, a, s = e.exports = {};
                function n() {
                    throw new Error("setTimeout has not been defined")
                }
                function r() {
                    throw new Error("clearTimeout has not been defined")
                }
                function o(e) {
                    if (i === setTimeout)
                        return setTimeout(e, 0);
                    if ((i === n || !i) && setTimeout)
                        return i = setTimeout,
                        setTimeout(e, 0);
                    try {
                        return i(e, 0)
                    } catch (t) {
                        try {
                            return i.call(null, e, 0)
                        } catch (t) {
                            return i.call(this, e, 0)
                        }
                    }
                }
                !function() {
                    try {
                        i = "function" == typeof setTimeout ? setTimeout : n
                    } catch (e) {
                        i = n
                    }
                    try {
                        a = "function" == typeof clearTimeout ? clearTimeout : r
                    } catch (e) {
                        a = r
                    }
                }();
                var l, d = [], u = !1, c = -1;
                function p() {
                    u && l && (u = !1,
                    l.length ? d = l.concat(d) : c = -1,
                    d.length && h())
                }
                function h() {
                    if (!u) {
                        var e = o(p);
                        u = !0;
                        for (var t = d.length; t; ) {
                            for (l = d,
                            d = []; ++c < t; )
                                l && l[c].run();
                            c = -1,
                            t = d.length
                        }
                        l = null,
                        u = !1,
                        function(e) {
                            if (a === clearTimeout)
                                return clearTimeout(e);
                            if ((a === r || !a) && clearTimeout)
                                return a = clearTimeout,
                                clearTimeout(e);
                            try {
                                a(e)
                            } catch (t) {
                                try {
                                    return a.call(null, e)
                                } catch (t) {
                                    return a.call(this, e)
                                }
                            }
                        }(e)
                    }
                }
                function f(e, t) {
                    this.fun = e,
                    this.array = t
                }
                function g() {}
                s.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var i = 1; i < arguments.length; i++)
                            t[i - 1] = arguments[i];
                    d.push(new f(e,t)),
                    1 !== d.length || u || o(h)
                }
                ,
                f.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ,
                s.title = "browser",
                s.browser = !0,
                s.env = {},
                s.argv = [],
                s.version = "",
                s.versions = {},
                s.on = g,
                s.addListener = g,
                s.once = g,
                s.off = g,
                s.removeListener = g,
                s.removeAllListeners = g,
                s.emit = g,
                s.prependListener = g,
                s.prependOnceListener = g,
                s.listeners = function(e) {
                    return []
                }
                ,
                s.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }
                ,
                s.cwd = function() {
                    return "/"
                }
                ,
                s.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }
                ,
                s.umask = function() {
                    return 0
                }
            }
            , function(e, t, i) {
                "use strict";
                i.r(t);
                var a = i(6)
                  , s = i.n(a)
                  , n = i(3)
                  , r = i.n(n);
                function o(e) {
                    return "" === e ? e : "true" === e || "1" == e
                }
                var l = function(e, t) {
                    return new Promise((function(t, i) {
                        var a = new XMLHttpRequest;
                        a.responseType = "blob",
                        a.onload = function() {
                            var e = new FileReader;
                            e.onloadend = function() {
                                t(e.result)
                            }
                            ,
                            e.readAsArrayBuffer(a.response)
                        }
                        ,
                        a.open("GET", e),
                        a.send()
                    }
                    ))
                }
                  , d = i(9)
                  , u = function(e, t, i, a, s, n, r, o) {
                    var l, d = "function" == typeof e ? e.options : e;
                    if (t && (d.render = t,
                    d.staticRenderFns = i,
                    d._compiled = !0),
                    a && (d.functional = !0),
                    n && (d._scopeId = "data-v-" + n),
                    r ? (l = function(e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                        s && s.call(this, e),
                        e && e._registeredComponents && e._registeredComponents.add(r)
                    }
                    ,
                    d._ssrRegister = l) : s && (l = o ? function() {
                        s.call(this, (d.functional ? this.parent : this).$root.$options.shadowRoot)
                    }
                    : s),
                    l)
                        if (d.functional) {
                            d._injectStyles = l;
                            var u = d.render;
                            d.render = function(e, t) {
                                return l.call(t),
                                u(e, t)
                            }
                        } else {
                            var c = d.beforeCreate;
                            d.beforeCreate = c ? [].concat(c, l) : [l]
                        }
                    return {
                        exports: e,
                        options: d
                    }
                }({
                    props: {
                        text: {
                            type: String,
                            required: !0
                        },
                        qid: {
                            type: String
                        },
                        correctLevel: {
                            type: Number,
                            default: 1
                        },
                        size: {
                            type: Number,
                            default: 200
                        },
                        margin: {
                            type: Number,
                            default: 20
                        },
                        colorDark: {
                            type: String,
                            default: "#000000"
                        },
                        colorLight: {
                            type: String,
                            default: "#FFFFFF"
                        },
                        bgSrc: {
                            type: String,
                            default: void 0
                        },
                        background: {
                            type: String,
                            default: "rgba(0,0,0,0)"
                        },
                        backgroundDimming: {
                            type: String,
                            default: "rgba(0,0,0,0)"
                        },
                        logoSrc: {
                            type: String,
                            default: void 0
                        },
                        logoBackgroundColor: {
                            type: String,
                            default: "rgba(255,255,255,1)"
                        },
                        gifBgSrc: {
                            type: String,
                            default: void 0
                        },
                        logoScale: {
                            type: Number,
                            default: .2
                        },
                        logoMargin: {
                            type: Number,
                            default: 0
                        },
                        logoCornerRadius: {
                            type: Number,
                            default: 8
                        },
                        whiteMargin: {
                            type: [Boolean, String],
                            default: !0
                        },
                        dotScale: {
                            type: Number,
                            default: 1
                        },
                        autoColor: {
                            type: [Boolean, String],
                            default: !0
                        },
                        binarize: {
                            type: [Boolean, String],
                            default: !1
                        },
                        binarizeThreshold: {
                            type: Number,
                            default: 128
                        },
                        callback: {
                            type: Function,
                            default: function() {}
                        },
                        bindElement: {
                            type: Boolean,
                            default: !0
                        },
                        backgroundColor: {
                            type: String,
                            default: "#FFFFFF"
                        },
                        components: {
                            default: function() {
                                return {
                                    data: {
                                        scale: 1
                                    },
                                    timing: {
                                        scale: 1,
                                        protectors: !1
                                    },
                                    alignment: {
                                        scale: 1,
                                        protectors: !1
                                    },
                                    cornerAlignment: {
                                        scale: 1,
                                        protectors: !0
                                    }
                                }
                            }
                        }
                    },
                    name: "vue-qr",
                    data: function() {
                        return {
                            imgUrl: ""
                        }
                    },
                    watch: {
                        $props: {
                            deep: !0,
                            handler: function() {
                                this.main()
                            }
                        }
                    },
                    mounted: function() {
                        this.main()
                    },
                    methods: {
                        main: function() {
                            var e = this;
                            return s()(r.a.mark((function t() {
                                var i, a, s, n;
                                return r.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            if (!e.gifBgSrc) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.next = 3,
                                            l(e.gifBgSrc);
                                        case 3:
                                            return i = t.sent,
                                            a = e.logoSrc,
                                            e.render(void 0, a, i),
                                            t.abrupt("return");
                                        case 7:
                                            s = e.bgSrc,
                                            n = e.logoSrc,
                                            e.render(s, n);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t)
                            }
                            )))()
                        },
                        render: function(e, t, i) {
                            var a = this;
                            return s()(r.a.mark((function s() {
                                var n;
                                return r.a.wrap((function(s) {
                                    for (; ; )
                                        switch (s.prev = s.next) {
                                        case 0:
                                            n = a,
                                            new d.a({
                                                gifBackground: i,
                                                text: n.text,
                                                size: n.size,
                                                margin: n.margin,
                                                colorDark: n.colorDark,
                                                colorLight: n.colorLight,
                                                backgroundColor: n.backgroundColor,
                                                backgroundImage: e,
                                                backgroundDimming: n.backgroundDimming,
                                                logoImage: t,
                                                logoScale: n.logoScale,
                                                logoBackgroundColor: n.logoBackgroundColor,
                                                correctLevel: n.correctLevel,
                                                logoMargin: n.logoMargin,
                                                logoCornerRadius: n.logoCornerRadius,
                                                whiteMargin: o(n.whiteMargin),
                                                dotScale: n.dotScale,
                                                autoColor: o(n.autoColor),
                                                binarize: o(n.binarize),
                                                binarizeThreshold: n.binarizeThreshold,
                                                components: n.components
                                            }).draw().then((function(e) {
                                                a.imgUrl = e,
                                                n.callback && n.callback(e, n.qid)
                                            }
                                            ));
                                        case 2:
                                        case "end":
                                            return s.stop()
                                        }
                                }
                                ), s)
                            }
                            )))()
                        }
                    }
                }, (function() {
                    var e = this.$createElement
                      , t = this._self._c || e;
                    return this.bindElement ? t("img", {
                        staticStyle: {
                            display: "inline-block"
                        },
                        attrs: {
                            src: this.imgUrl
                        }
                    }) : this._e()
                }
                ), [], !1, null, null, null).exports;
                u.install = function(e) {
                    return e.component(u.name, u)
                }
                ;
                var c = u
                  , p = [c];
                "undefined" != typeof window && window.Vue && function(e) {
                    p.map((function(t) {
                        e.component(t.name, t)
                    }
                    ))
                }(window.Vue),
                t.default = c
            }
            ])
        }
        ))
    },
    56203: function(e, t, i) {
        "use strict";
        i.d(t, {
            ai: function() {
                return s
            }
        });
        var a = i(18442);
        class s {
            static async getWrongQuestion(e, t=0) {
                const i = new URLSearchParams({
                    lookBackTime: t
                }).toString();
                return (0,
                a.U2)(0 == t ? `${a.jz}/api/ai/stu/${e}/wrongQuestion` : `${a.jz}/api/ai/stu/${e}/wrongQuestion?${i}`)
            }
            static async stopRequest() {
                return new Promise(((e,t)=>{
                    (0,
                    a.HY)()
                }
                ))
            }
            static async getStudentAnswer(e) {
                return (0,
                a.hi)(Object.assign((0,
                a.aP)("GET"), {
                    url: `${a.jz}/api/ai/stu/respond/${e.dataType}/${e.dataId}/${e.questionId}`
                }))
            }
            static async getStudentAsk(e) {
                return (0,
                a.hi)(Object.assign((0,
                a.aP)("POST", e), {
                    url: `${a.jz}/api/ai/stu/ask`
                }))
            }
            static async setSutReform(e) {
                return (0,
                a.hi)(Object.assign((0,
                a.aP)("POST", e), {
                    url: `${a.jz}/api/ai/stu/reform`
                }))
            }
            static async getCourseAndPaper(e, t=0) {
                return (0,
                a.hi)(Object.assign((0,
                a.aP)("GET"), {
                    url: 0 == t ? `${a.jz}/api/ai/stu/${e}/courseAndPaper` : `${a.jz}/api/ai/stu/${e}/courseAndPaper?${new URLSearchParams({
                        lookBackTime: t
                    }).toString()}`
                }))
            }
            static async getKnowledgeLib(e) {
                return (0,
                a.U2)(`${a.jz}/api/ai/stu/${e}/knowledgeLib`)
            }
            static async getLibWrongQuestion(e, t) {
                return (0,
                a.hi)(Object.assign((0,
                a.aP)("GET"), {
                    url: `${a.jz}/api/ai/stu/${e}/Lib/${t}/wrongQuestion`
                }))
            }
            static async lookbacktime(e) {
                return (0,
                a.hi)(Object.assign((0,
                a.aP)("POST", e), {
                    url: `${a.jz}/api/user/student/lookbacktime`
                }))
            }
            static async overView() {
                return (0,
                a.U2)(`${a.jz}/api/ai/stu/overView`)
            }
            static async overViewLookBack(e) {
                return (0,
                a.v_)(`${a.jz}/api/ai/stu/lookback/overView`, e)
            }
            static async overViewLib() {
                return (0,
                a.hi)(Object.assign((0,
                a.aP)("GET"), {
                    url: `${a.jz}/api/ai/stu/lib/overView`
                }))
            }
        }
    },
    52650: function(e, t, i) {
        "use strict";
        i.d(t, {
            C0: function() {
                return n
            },
            EP: function() {
                return p
            },
            FY: function() {
                return C
            },
            Gh: function() {
                return v
            },
            KJ: function() {
                return d
            },
            NZ: function() {
                return s
            },
            O2: function() {
                return o
            },
            OX: function() {
                return w
            },
            S3: function() {
                return T
            },
            Y_: function() {
                return r
            },
            Z2: function() {
                return g
            },
            bR: function() {
                return y
            },
            c1: function() {
                return b
            },
            fi: function() {
                return u
            },
            me: function() {
                return h
            },
            nz: function() {
                return c
            },
            oj: function() {
                return f
            },
            qk: function() {
                return S
            },
            r3: function() {
                return m
            },
            w1: function() {
                return l
            },
            xJ: function() {
                return x
            }
        });
        var a = i(18442);
        function s(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/student/paper/entity/catalog/${e}`
            }))
        }
        function n(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/student/paper/entity/${e}`
            }))
        }
        function r(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/student/paper/entity/${e}/content`
            }))
        }
        function o(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/student/paper/entity/${e}/question`
            }))
        }
        function l(e, t, i) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("POST"), {
                url: `${a.jz}/api/student/paper/entity/${e}/question/${t}/attachment/${i}`
            }))
        }
        function d(e, t, i) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("POST"), {
                url: `${a.jz}/api/student/paper/entity/${e}/question/${t}/extra/attachment/${i}`
            }))
        }
        function u(e, t, i) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("PUT"), {
                url: `${a.jz}/api/student/paper/entity/${e}/question/${t}/extra/attachment/${i}/del`
            }))
        }
        function c(e, t, i) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("PUT"), {
                url: `${a.jz}/api/student/paper/entity/${e}/question/${t}/attachment/${i}/del`
            }))
        }
        function p(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("POST", e), {
                url: `${a.jz}/api/student/paper/entity/${e.paperId}/question/${e.questionId}`
            }))
        }
        function h(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("POST", e), {
                url: `${a.jz}/api/student/paper/entity/${e.paperId}/submit`
            }))
        }
        function f(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("POST", e), {
                url: `${a.jz}/api/student/paper/entity/${e.paperId}/resubmit`
            }))
        }
        function g(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/student/paper/entity/${e}/statistics`
            }))
        }
        function m(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/paper/${e}/handle/share/respond`
            }))
        }
        function v(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("POST", e), {
                url: `${a.jz}/api/paper/commenting/source/list`
            }))
        }
        function y(e, t) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/paper/statistics/entity/${e}/question/${t}`
            }))
        }
        function w(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/paper/statistics/entity/${e}/question`
            }))
        }
        function b(e, t) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/paper/statistics/entity/${e}/question?paperId=${e}&pointId=${t}`
            }))
        }
        function x(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/paper/statistics/entity/${e}/student?paperId=${e}`
            }))
        }
        function C(e, t) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/paper/statistics/point/entity/${e}/${t}/top`
            }))
        }
        function T(e, t) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("GET"), {
                url: `${a.jz}/api/paper/statistics/entity/${e}/${t}?paperId=${e}&type=${t}`
            }))
        }
        function S(e) {
            return (0,
            a.hi)(Object.assign((0,
            a.aP)("POST", e), {
                url: `${a.jz}/api/student/paper/entity/condition`
            }))
        }
    },
    42298: function(e, t, i) {
        "use strict";
        e.exports = i.p + "img/001.aa997af4.png"
    },
    18250: function(e, t, i) {
        "use strict";
        e.exports = i.p + "img/002.15d39709.png"
    },
    66148: function(e, t, i) {
        "use strict";
        e.exports = i.p + "img/003.da5835b1.png"
    },
    12814: function(e) {
        "use strict";
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABPdJREFUaEPlm01oHGUYx///aRsw0u5uJR4qgodebC/tQVSo0F5EY1s9iKYWoaAodCchCC3Z2airdiclFVrc2R6K4gdac622UTwYDwW1IimC9STqwYINzc6qjRDtPDKzmzr7lZ2Pne3IDITA7vP8n+e3++77Pu8z7xARXeOFSvqfZWVYINsADkHkdhBDAIYI5z8EWID9J1gAeQWQBYIX1w5YsycKGTOK1NhL0YNaZZsifEiIBwnsCqMtwBwFn1mUT0/qmYthtNy+PQHOatURQsYB3NurxJp0vhbwRFlPzYTVDwU8OlHZLgoPAxgJm4hH/xlaMl06mpn3aN9iFgj4ucLlwYHlWw4DPARgMGjwgH5LgBxbHvhr+lRh05JfDd/AB/OLOxQob0Cw3W+wntoT8xassZPFjef96PoCVrXqU4B84CdA9Lbcb+ip017jeAZWNfMIgLxX4T7bFQ09PeklpidgVTMvAbjbi+BNtPnB0NNbusXvCqxq1V8B2dRNKB7v87Khp+5YLZdVgVWtegaQvfGA8ZoFPzL01KOdrDsCq1r1RUBe9RomXnZ8ydBTr7XLqS2wqlUfBmQ2XhB+s+Gwoac+afZqAXaKir8Hz9/0ddYvXyvZ/PK6pR3NxUkLsKpVCgBfDhsvHv7yiqFnCu5cGoDrtbFdufS7XIzq81miJTvctXcDsKqZH/ZxIxAVZLPujKGn9628eAO4vsWzgQNdBL4TwWIg525OitNA2NrNrNP7Au5b2VreAFa16peA3BdMlC8Yeup4MF9vXmP56tOWyHverFtmsK8MPXW//aoDPJq7ukW45vtgYoChp7tWbEG13X5qzpwDsTOIFuX61tLUbZecRLPaYpZQjCBCNR+OGXqqFNy/u2d28vfdtKyPu1u2txBYalnfWHaAVa1yFuAjQcVsPwHfIaxfwmh0/A0KNpPcH05bzhl6ZjdHC1c3yPKaajix/4c3B66nqObNJyEI3RzzhyzHCWWzQPb48wtpTYwwq5nTBOzeVF8uEvlSMa3X5o7q24Qc6EvgWh/8GPsaVHDImEq/3jjzVkugqP2AduaZbM48R2I4+oAyZuiZtjO5mjenIJiIOgcRzNpD+gKBe6IMJsTz5WL61GoxsrnKJMm2e9he5SbANzbwTwTu6pVos45QOVAubnjXi342VxknGVnFJsDPVDXzTwC3eknIr427hvXqq+bMZ0C86dXep921yICF8li5mDnjMyHHPKuZTxB4H8C6IP6r+FyLYEjLEhTuMY6kPw+TbL3NZDf9M2F03L7OkO7tpMXfSOwtFVMXepHkaG7xAaFiQ9/ZC73apNW7ZelHWPKsOzFy7ZXS1Hq7iR/4su85EzzNHtwIqC9LEVc7luwyjma+8EI8mvtjCLTeEpH1DfYBt4QtK4ZTeEReWrY20jrBqxOVnVA45+XDCWLjlJbRbx7iAwx78xD99jA+wM720B4avWgAdB5icQGuNwBqC33YFs9qv6h4ADe0eMI28VafQOIB3NDEqw3rMG3auH/DbGzT1oa1c9YqcCO+E7IQ31LkrKdlhMrjYRruHXNo14ivfcsJutViAyfuZlp9iUrO7VIbOHE3xOszdnKOPKzMdIk61OKCTs6xJRd0cg6m/QedoKOHLujkHC51De/kHB9egU7UAfEV6EQ9AuDekSTmIY/mbVhiHuNpBk/Mg1rtNt5xfRTvX/WoT3u5lwUjAAAAAElFTkSuQmCC"
    },
    86050: function(e, t, i) {
        "use strict";
        e.exports = i.p + "img/icon-01.79f0a0e8.png"
    },
    60790: function(e, t, i) {
        "use strict";
        e.exports = i.p + "img/icon-02.25791d38.png"
    },
    49589: function(e, t, i) {
        "use strict";
        e.exports = i.p + "img/icon-03.2b7e4f8e.png"
    },
    51865: function(e, t, i) {
        "use strict";
        e.exports = i.p + "img/loading.78cb6e03.gif"
    }
}]);
