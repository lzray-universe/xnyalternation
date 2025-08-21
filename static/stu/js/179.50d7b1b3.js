"use strict";
(self["webpackChunkstu_project"] = self["webpackChunkstu_project"] || []).push([[179], {
    43179: function(t, e, s) {
        s.r(e),
        s.d(e, {
            default: function() {
                return d
            }
        });
        var l = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "box"
            }, [s("div", {
                staticClass: "bg-box box"
            }), s("div", {
                staticClass: "con"
            }, [s("div", {
                staticClass: "title w100"
            }, [s("div", {
                staticClass: "left f-l"
            }, [t._v("收藏区：")]), s("div", {
                staticClass: "right f-r"
            }, [s("a-icon", {
                attrs: {
                    type: "close-circle"
                },
                on: {
                    click: t.close
                }
            })], 1)]), s("div", {
                staticClass: "content-box"
            }, [s("div", {
                staticClass: "add"
            }, [s("a-input", {
                attrs: {
                    placeholder: "请输入新标签； 最多两个标签请用'，'隔开",
                    maxLength: 50,
                    allowClear: !0
                },
                model: {
                    value: t.inputLabel,
                    callback: function(e) {
                        t.inputLabel = e
                    },
                    expression: "inputLabel"
                }
            })], 1), s("div", {
                staticClass: "label-box"
            }, [s("div", {
                staticClass: "sub-title"
            }, [t._v("历史标签")]), s("div", {
                staticClass: "label-list"
            }, t._l(t.label, (function(e) {
                return s("span", {
                    key: e.id,
                    class: e.check ? "active" : "",
                    on: {
                        click: function(s) {
                            return t.ChoiceLabel(e)
                        }
                    }
                }, [t._v(t._s(e.tagName))])
            }
            )), 0)])]), s("div", {
                staticClass: "option-box txt-r"
            }, [s("a-button", {
                staticStyle: {
                    "margin-right": "15px",
                    "margin-top": "8px"
                },
                on: {
                    click: t.close
                }
            }, [t._v("取消")]), s("a-button", {
                staticStyle: {
                    "margin-right": "25px",
                    "margin-top": "8px"
                },
                attrs: {
                    type: "primary"
                },
                on: {
                    click: t.finishBtn
                }
            }, [t._v(" 确认 ")])], 1)])])
        }
          , i = []
          , a = s(1496)
          , n = {
            props: {
                AskCourseId: [Number],
                AskQuestionId: [Number],
                contentType: [Number],
                OptionType: [Number]
            },
            data() {
                return {
                    inputLabel: "",
                    tagList: [],
                    label: [],
                    ids: [],
                    isSend: !1,
                    type: -1
                }
            },
            methods: {
                close() {
                    this.inputLabel = "",
                    this.$parent.closeCollectLayer()
                },
                ChoiceLabel(t) {
                    t.check = !t.check
                },
                GetCollectList(t, e) {
                    let s = this;
                    s.tagList = [],
                    s.type = e,
                    t.forEach((t => {
                        s.tagList.push(t.id)
                    }
                    )),
                    (0,
                    a.Sj)().then((t => {
                        let e = [];
                        t.extra.forEach((t => {
                            t.check = s.tagList.includes(t.id),
                            e.push(t)
                        }
                        )),
                        s.label = e
                    }
                    ))
                },
                finishBtn() {
                    let t = this
                      , e = t.inputLabel.trim();
                    t.ids.length = 0;
                    for (let s = 0; s < t.label.length; s++)
                        t.label[s].check && t.ids.push({
                            id: t.label[s].id
                        });
                    if ("" != e) {
                        e = e.replaceAll("，", ","),
                        e = "," == e.substr(e.length - 1, 1) ? e.substr(0, e.length - 1) : e;
                        let s = e.split(",")
                          , l = !1;
                        for (let t = 0; t < s.length; t++)
                            if (s[t].length > 16) {
                                l = !0;
                                break
                            }
                        if (l)
                            return void t.$message.warning("每个标签最多16个字");
                        let i = s.length;
                        if (t.ids.length + s.length > 2)
                            return void t.$message.warning("每道题最多设置两个标签");
                        let n = 0;
                        s.forEach((e => {
                            (0,
                            a.kw)({
                                tagName: e
                            }).then((s => {
                                n++,
                                t.ids.unshift({
                                    id: s.extra.id
                                }),
                                t.label.unshift({
                                    id: s.extra.id,
                                    tagName: e
                                }),
                                n == i && (t.inputLabel = "",
                                t.AddCollect())
                            }
                            ))
                        }
                        ))
                    } else {
                        if (t.ids.length > 2)
                            return void t.$message.warning("每道题最多设置两个标签");
                        t.AddCollect()
                    }
                },
                AddCollect() {
                    let t = this;
                    if (t.isSend)
                        t.$message.warning("信息添加中");
                    else if (t.tagList.length > 0) {
                        let e = [];
                        for (let s = 0; s < t.tagList.length; s++)
                            e.push({
                                id: t.tagList[s]
                            });
                        (0,
                        a.Eq)({
                            sourceId: t.AskQuestionId,
                            sourceType: t.contentType,
                            courseId: t.AskCourseId,
                            tagList: e,
                            type: t.type
                        }).then((e => {
                            t.AddCollectEntity()
                        }
                        ))
                    } else
                        t.AddCollectEntity()
                },
                AddCollectEntity() {
                    let t = this;
                    t.isSend = !0;
                    let e = {
                        sourceId: t.AskQuestionId,
                        sourceType: t.contentType,
                        courseId: t.AskCourseId,
                        tagList: t.ids,
                        type: t.type
                    };
                    (0,
                    a.uO)(0 == t.tagList.length ? "POST" : "PUT", e).then((e => {
                        t.ids.length = 0;
                        for (let s = 0; s < t.label.length; s++)
                            t.label[s].check = !1;
                        t.isSend = !1,
                        0 == e.code ? (t.inputLabel = "",
                        t.$message.success("操作成功"),
                        t.close()) : t.$message.error(e.message)
                    }
                    ))
                }
            }
        }
          , c = n
          , r = s(70713)
          , o = (0,
        r.Z)(c, l, i, !1, null, "4a2391b8", null)
          , d = o.exports
    }
}]);
