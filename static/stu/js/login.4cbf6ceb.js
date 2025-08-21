"use strict";
(self["webpackChunkstu_project"] = self["webpackChunkstu_project"] || []).push([[535], {
    18168: function(t, e, n) {
        n.r(e),
        n.d(e, {
            default: function() {
                return c
            }
        });
        var s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "box"
            }, [n("LoginBox", {
                ref: "loginbox",
                attrs: {
                    name: "用户登录（学生端）"
                }
            }, [n("a-input", {
                staticStyle: {
                    "margin-bottom": "20px"
                },
                attrs: {
                    placeholder: "请输入学号",
                    size: "large",
                },
                on: {
                    blur: t.getUsernameBlur,
                    focus: t.getUsernameFocus
                },
                model: {
                    value: t.phoneNumber,
                    callback: function(e) {
                        t.phoneNumber = e
                    },
                    expression: "phoneNumber"
                }
            }), n("a-input-password", {
                staticStyle: {
                    "margin-bottom": "20px"
                },
                attrs: {
                    placeholder: "请输入密码",
                    size: "large",
                },
                on: {
                    blur: t.getPasswordBlur,
                    focus: t.getPasswordFocus,
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.loginIn.apply(null, arguments)
                    }
                },
                model: {
                    value: t.pwd,
                    callback: function(e) {
                        t.pwd = e
                    },
                    expression: "pwd"
                }
            }), n("a-button", {
                staticStyle: {
                    "margin-bottom": "20px"
                },
                attrs: {
                    type: "primary",
                    block: "",
                    size: "large"
                },
                on: {
                    click: t.loginIn
                }
            }, [t._v(" " + t._s(t.btnText) + " ")]), n("div",{
                staticClass:"description"
            },[t._v(localStorage.getItem("username")==null || localStorage.getItem("password")==null?"需要输入用户名和密码":"已保存用户名和密码，可以直接登录")]),
                n("div", {
                staticClass: "LoginLink"
            }, [n("router-link", {
                staticClass: "text",
                attrs: {
                    to: "/register"
                }
            }), n("router-link", {
                staticClass: "text",
                attrs: {
                    to: "/retrieve"
                }
            }, [t._v("忘记密码")])], 1)], 1)], 1)
        }
          , i = []
          , r = n(64981)
          , a = n(1496)
          , o = {
            name: "Login",
            components: {
                LoginBox: () => n.e(992).then(n.bind(n, 45992))
            },
            data() {
                return {
                    phoneNumber: "",
                    pwd: "",
                    source: "pc",
                    btnText: "开始使用",
                    uni: 0
                }
            },
            mounted() {
                this.source = "undefined" == typeof this.$route.query.s ? "pc" : this.$route.query.s,
                sessionStorage.setItem("source", this.source),
                sessionStorage.setItem("isuni", "undefined" == typeof this.$route.query.isnui ? 0 : this.$route.query.isnui)
            },
            methods: {
                loginIn() {
                    let t = this;
                    try {
                        let e = {
                            phoneNumber: t.phoneNumber,
                            pwd: t.pwd
                        };
                        if ("" == e.pwd)
                            if(e.phoneNumber != "") e.pwd=e.phoneNumber;
                            else if(localStorage.getItem("password") != null) e.pwd=localStorage.getItem("password");
                            else e.pwd=e.phoneNumber;
                        if ("" == e.phoneNumber)
                            if(localStorage.getItem("username") != null) e.phoneNumber=localStorage.getItem("username");
                            else return void t.$message.warn("请输入用户名");

                        t.btnText = "登录中....",
                        (0,
                        r.x4)(e).then((n => {
                            n ? (
                            localStorage.setItem("username",e.phoneNumber),
                            localStorage.setItem("password",e.pwd),
                            localStorage.removeItem("logout"),
                            t.$router.push("/course?pageid=0"),
                            sessionStorage.setItem("course_userInfo", JSON.stringify(n.extra)),
                            sessionStorage.setItem("userInfo", JSON.stringify(e))) : t.btnText = "开始使用"
                        }
                        ))
                    } catch (e) {
                        t.$message.error(JSON.stringify(e))
                    }
                },
                getUsernameBlur() {
                    this.$refs.loginbox.setFocusStatus(!1)
                },
                getUsernameFocus() {
                    this.$refs.loginbox.setFocusStatus("pad" == this.source)
                },
                getPasswordBlur() {
                    this.$refs.loginbox.setFocusStatus(!1)
                },
                getPasswordFocus() {
                    this.$refs.loginbox.setFocusStatus("pad" == this.source)
                },
                getReddot() {
                    let t = this;
                    (0,
                    a.y$)().then((e => {
                        localStorage.setItem("reddot", JSON.stringify(e.extra)),
                        t.$bus.emit("changeReddot", e.extra)
                    }
                    )),
                    (0,
                    a.V9)().then((e => {
                        localStorage.setItem("paperreddot", JSON.stringify(e.extra)),
                        t.$bus.emit("changePaperReddot", e.extra)
                    }
                    ))
                }
            }
        }
          , u = o
          , d = n(70713)
          , l = (0,
        d.Z)(u, s, i, !1, null, "3a56ea9d", null)
          , c = l.exports
    },
    48253: function(t, e, n) {
        n.r(e),
        n.d(e, {
            default: function() {
                return l
            }
        });
        var s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("LoginBox", {
                attrs: {
                    name: "手机号注册"
                }
            }, [n("a-input", {
                staticStyle: {
                    "margin-bottom": "20px"
                },
                attrs: {
                    placeholder: "请输入手机号",
                    size: "large"
                },
                model: {
                    value: t.phoneNumber,
                    callback: function(e) {
                        t.phoneNumber = t._n(e)
                    },
                    expression: "phoneNumber"
                }
            }), n("a-input-search", {
                staticStyle: {
                    "margin-bottom": "20px"
                },
                attrs: {
                    placeholder: "请输入验证码",
                    size: "large"
                },
                on: {
                    search: t.validateBtn
                },
                model: {
                    value: t.code,
                    callback: function(e) {
                        t.code = e
                    },
                    expression: "code"
                }
            }, [n("a-button", {
                attrs: {
                    slot: "enterButton",
                    type: "primary",
                    disabled: t.disabled
                },
                slot: "enterButton"
            }, [t._v(" " + t._s(t.btnTitle) + " ")])], 1), n("a-input-password", {
                staticStyle: {
                    "margin-bottom": "20px"
                },
                attrs: {
                    placeholder: "请输入密码",
                    size: "large"
                },
                model: {
                    value: t.pwd,
                    callback: function(e) {
                        t.pwd = e
                    },
                    expression: "pwd"
                }
            }), n("a-button", {
                attrs: {
                    type: "primary",
                    block: "",
                    size: "large"
                },
                on: {
                    click: t.handleregister
                }
            }, [t._v(" 注册 ")])], 1)], 1)
        }
          , i = []
          , r = n(64981)
          , a = {
            name: "Register",
            components: {
                LoginBox: () => n.e(992).then(n.bind(n, 45992))
            },
            data() {
                return {
                    phoneNumber: "",
                    pwd: "",
                    code: "",
                    disabled: !1,
                    btnTitle: "获取验证码"
                }
            },
            methods: {
                validateBtn() {
                    if (!this.phoneNumber)
                        return this.$message.warning("请填写要重置密码的学号"),
                        !1;
                    let t = 60
                      , e = setInterval(( () => {
                        0 === t ? (clearInterval(e),
                        this.disabled = !1,
                        this.btnTitle = "获取验证码") : (this.btnTitle = t + "秒后重试",
                        this.disabled = !0,
                        t--)
                    }
                    ), 1e3);
                    (0,
                    r.Ak)({
                        mobile: this.phoneNumber
                    }).then((t => {
                        console.log(t)
                    }
                    ))
                },
                handleregister() {
                    return this.phoneNumber ? /^1[345678]\d{9}$/.test(this.phoneNumber) ? 0 === this.code.length ? (this.$message.warning("请输入验证码"),
                    !1) : 0 === this.pwd.length ? (this.$message.warning("请输入密码"),
                    !1) : void (0,
                    r.z2)({
                        phoneNumber: this.phoneNumber,
                        pwd: this.pwd,
                        code: this.code
                    }).then((t => {
                        t.extra && (this.$message.success("注册成功，请登录！"),
                        this.$router.push("/login"))
                    }
                    )) : (this.$message.warning("请输入正确是手机号"),
                    !1) : (this.$message.warning("请填写手机号"),
                    !1)
                }
            }
        }
          , o = a
          , u = n(70713)
          , d = (0,
        u.Z)(o, s, i, !1, null, "3eef318a", null)
          , l = d.exports
    },
    78626: function(t, e, n) {
        n.r(e),
        n.d(e, {
            default: function() {
                return l
            }
        });
        var s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("LoginBox", {
                attrs: {
                    name: "重置密码"
                }
            }, [n("a-input", {
                staticStyle: {
                    "margin-bottom": "20px"
                },
                attrs: {
                    placeholder: "请输入注册手机号",
                    size: "large"
                },
                model: {
                    value: t.phoneNumber,
                    callback: function(e) {
                        t.phoneNumber = t._n(e)
                    },
                    expression: "phoneNumber"
                }
            }), n("a-input-search", {
                staticStyle: {
                    "margin-bottom": "20px"
                },
                attrs: {
                    placeholder: "请输入验证码",
                    size: "large"
                },
                on: {
                    search: t.validateBtn
                },
                model: {
                    value: t.code,
                    callback: function(e) {
                        t.code = e
                    },
                    expression: "code"
                }
            }, [n("a-button", {
                attrs: {
                    slot: "enterButton",
                    type: "primary",
                    disabled: t.disabled
                },
                slot: "enterButton"
            }, [t._v(" " + t._s(t.btnTitle) + " ")])], 1), n("a-input-password", {
                staticStyle: {
                    "margin-bottom": "20px"
                },
                attrs: {
                    placeholder: "请输入新密码",
                    size: "large"
                },
                model: {
                    value: t.pwd,
                    callback: function(e) {
                        t.pwd = e
                    },
                    expression: "pwd"
                }
            }), n("a-button", {
                attrs: {
                    type: "primary",
                    block: "",
                    size: "large"
                },
                on: {
                    click: t.handleOk
                }
            }, [t._v(" 重置 ")])], 1)], 1)
        }
          , i = []
          , r = n(64981)
          , a = {
            name: "Retrieve",
            components: {
                LoginBox: () => n.e(992).then(n.bind(n, 45992))
            },
            data() {
                return {
                    phoneNumber: "",
                    pwd: "",
                    code: "",
                    disabled: !1,
                    btnTitle: "获取验证码"
                }
            },
            methods: {
                validateBtn() {
                    if (!this.phoneNumber)
                        return this.$message.warning("请填写手机号"),
                        !1;
                    if (!/^1[3456789]\d{9}$/.test(this.phoneNumber))
                        return this.$message.warning("请输入正确是手机号"),
                        !1;
                    let t = 60
                      , e = setInterval(( () => {
                        0 === t ? (clearInterval(e),
                        this.disabled = !1,
                        this.btnTitle = "获取验证码") : (this.btnTitle = t + "秒后重试",
                        this.disabled = !0,
                        t--)
                    }
                    ), 1e3);
                    (0,
                    r.Ak)({
                        mobile: this.phoneNumber
                    }, 2).then((t => 0 == t.code ? void this.$message.success("验证码已发送") : void this.$message.warning(t.message)))
                },
                handleOk() {
                    return this.phoneNumber ? /^1[345678]\d{9}$/.test(this.phoneNumber) ? 0 === this.code.length ? (this.$message.warning("请输入验证码"),
                    !1) : 0 === this.pwd.length ? (this.$message.warning("请输入密码"),
                    !1) : void (0,
                    r.c0)({
                        phoneNumber: this.phoneNumber,
                        pwd: this.pwd,
                        code: this.code
                    }).then((t => {
                        t.extra && (this.$message.success("修改成功，请登录"),
                        this.$router.push("/login"))
                    }
                    )) : (this.$message.warning("请输入正确是手机号"),
                    !1) : (this.$message.warning("请填写手机号"),
                    !1)
                }
            }
        }
          , o = a
          , u = n(70713)
          , d = (0,
        u.Z)(o, s, i, !1, null, "50a2f45c", null)
          , l = d.exports
    },
    75591: function(t, e, n) {
        n.r(e),
        n.d(e, {
            default: function() {
                return C
            }
        });
        var s = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", [t.userError ? s("div", [t._m(1)]) : s("div", {}, [t.isNotDone ? s("div", {}, [s("div", {
                staticClass: "title_1 w100  bg-fff pos-f"
            }, [s("div", {
                staticClass: "name w100 txt-c  box_1"
            }, [s("div", {
                staticClass: "flex_1 txt"
            }, [t._v(" (" + t._s(1 == t.data.type ? "课程" : "考试") + ") " + t._s(t.data.name))]), 1 == t.data.type ? s("div", {
                staticClass: "btn-box"
            }, [s("a-button", {
                staticStyle: {
                    float: "right",
                    top: "10px",
                    right: "10px"
                },
                attrs: {
                    type: 0 == t.mappingStatus ? "primary" : "danger",
                    disabled: t.BtnDisabled
                },
                on: {
                    click: t.submitData
                }
            }, [t._v(" " + t._s(0 == t.mappingStatus ? "提交答案" : "补交答案") + " ")])], 1) : s("div", {
                staticClass: "btn-box"
            }, [s("a-button", {
                staticStyle: {
                    float: "right",
                    top: "10px",
                    right: "10px"
                },
                attrs: {
                    type: 0 == t.info.mappingStatus ? "primary" : "danger",
                    disabled: !(0 == t.info.mappingStatus && t.surplussecond > 0 || 1 == t.info.mappingStatus && t.paperSettingResubmitTime(t.info.paperSettingResubmitTime) && !t.PaperBtnStatus)
                },
                on: {
                    click: t.submitData
                }
            }, [t._v(" " + t._s(0 == t.info.mappingStatus ? "提交答案" : "补交答案") + " ")])], 1)]), s("div", {
                staticClass: "times"
            }, [t._v("系统自动提交倒计时: "), 0 == t.data.type ? s("span", {
                staticStyle: {
                    display: "inline-block"
                }
            }, [0 === t.info.mappingStatus ? s("a-statistic-countdown", {
                attrs: {
                    value: t.deadline,
                    valueStyle: {
                        color: "#6B79F0",
                        fontSize: "14px"
                    }
                },
                on: {
                    finish: t.onFinish
                }
            }) : s("span", [t._v("--:--:--")])], 1) : s("span", {
                staticStyle: {
                    display: "inline-block"
                }
            }, [t._v(t._s(t.secondsText))])])]), 1 == t.data.type ? s("mc", {
                ref: "mcb",
                attrs: {
                    courseId: t.data.id
                }
            }) : t._e(), 2 == t.data.type ? s("me", {
                ref: "meb",
                attrs: {
                    paperId: t.data.id,
                    surplussecond: t.surplussecond,
                    catalogId: t.data.catalogId
                }
            }) : t._e()], 1) : s("div", [t._m(0)])]), t.isSuccess ? s("div", {
                staticClass: "empty-box submit-success"
            }, [s("img", {
                attrs: {
                    src: n(35584),
                    width: "100"
                }
            }), s("div", {
                staticClass: "txt c-1cc00e"
            }, [t._v("答案提交成功")])]) : t._e(), t.surplussecond <= 0 && 2 == t.data.type && !t.isSuccess && 0 == t.paperCatalog.openScore ? s("div", {
                staticClass: "empty-box time-not-box"
            }, [s("img", {
                attrs: {
                    src: n(38846),
                    width: "100"
                }
            }), s("div", {
                staticClass: "txt c-F85257 mt-30",
                staticStyle: {
                    "line-height": "30px"
                }
            }, [t._v("(考试) " + t._s(t.data.name) + " "), s("br"), t._v("考试已结束。")])]) : t._e(), s("EditImgBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isEditImg,
                    expression: "isEditImg"
                }],
                ref: "cropper"
            })], 1)
        }
          , i = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "empty-box"
            }, [s("img", {
                attrs: {
                    src: n(17591),
                    width: "100"
                }
            }), s("div", {
                staticClass: "txt c-1cc00e"
            }, [t._v("当前没有可提交的试题")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "empty-box"
            }, [s("img", {
                attrs: {
                    src: n(23292),
                    width: "100"
                }
            }), s("div", {
                staticClass: "txt c-F85257"
            }, [t._v("未查询到任何用户信息，请重新扫描")])])
        }
        ]
          , r = n(64981)
          , a = n(68354)
          , o = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "question-box mb-10"
            }, t._l(t.content, (function(e, s) {
                return n("div", {
                    key: e.idx,
                    class: ["item-box", s > 0 ? "mt-10" : ""]
                }, [2 == e.contentType ? [n("div", {
                    staticClass: "tihao-box"
                }, [0 == e.content.childList.length && (!t.isQuesttionFinish(e.content, 0) && t.getStudentAnswer(e.content.id) && 0 == t.getStudentAnswer(e.content.id).abandonTag || null == t.getStudentAnswer(e.content.id)) ? [n("a-button", {
                    staticClass: "bg-636f9e b-none",
                    attrs: {
                        type: "danger",
                        size: "small"
                    }
                }, [t._v(" 题号：" + t._s(e.content.questionNumber) + " ")]), n("a-button", {
                    staticClass: "ml-10",
                    attrs: {
                        size: "small"
                    }
                }, [t._v(" 分数: " + t._s(e.content.questionScore) + " ")])] : t._e(), e.content.childList.length > 0 && (null == t.getStudentAnswer(e.content.id) || !t.isQuesttionFinish(e.content, 1) && t.getStudentAnswer(e.content.id) && 0 == t.getStudentAnswer(e.content.id).abandonTag) ? [n("a-button", {
                    staticClass: "bg-636f9e b-none",
                    attrs: {
                        type: "danger",
                        size: "small"
                    }
                }, [t._v(" 题号：" + t._s(e.content.childList[0].questionNumber) + " ")]), t._v(" - "), n("a-button", {
                    staticClass: "bg-636f9e b-none",
                    attrs: {
                        type: "danger",
                        size: "small"
                    }
                }, [t._v(" 题号：" + t._s(e.content.childList[e.content.childList.length - 1].questionNumber) + " ")]), n("a-button", {
                    staticClass: "ml-10",
                    attrs: {
                        size: "small"
                    }
                }, [t._v(" 分数: " + t._s(e.content.questionScore) + " ")])] : t._e()], 2), [0, 1].includes(e.content.questionType) ? [0 != e.content.childList.length || t.isQuesttionFinish(e.content, 0) && null != t.getStudentAnswer(e.content.id) ? [n("div", {
                    staticClass: "option-box mt-10"
                }, t._l(e.content.childList, (function(s) {
                    return n("div", {
                        key: s.id,
                        staticClass: "option box_1 ml-10 mr-10"
                    }, [t.isQuesttionFinish(s, 0) && null != t.getStudentAnswer(s.id) ? t._e() : [n("div", {
                        staticClass: "left"
                    }, [n("span", [t._v("题号：" + t._s(s.questionNumber))])]), n("div", {
                        staticClass: "right flex_1"
                    }, t._l(e.content.answerCard.split(","), (function(e) {
                        return n("span", {
                            key: e,
                            class: [null == t.getStudentAnswer(s.id) || null == t.getStudentAnswer(s.id).studentAnswer ? "" : t.getStudentAnswer(s.id).studentAnswer.indexOf(e) >= 0 ? "active" : "", null == t.getStudentAnswer(s.id) || t.getStudentAnswer(s.id).isDraft ? "c-111" : "c-aaa"],
                            on: {
                                click: function(n) {
                                    return t.chooseBtn(s, e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    }
                    )), 0)]], 2)
                }
                )), 0)] : [n("div", {
                    staticClass: "option-box mt-10"
                }, [n("div", {
                    staticClass: "option box_1 ml-10 mr-10"
                }, [n("div", {
                    staticClass: "right flex_1"
                }, t._l(e.content.answerCard.split(","), (function(s) {
                    return n("span", {
                        key: s,
                        class: [null == t.getStudentAnswer(e.content.id) || null == t.getStudentAnswer(e.content.id).studentAnswer ? "" : t.getStudentAnswer(e.content.id).studentAnswer.indexOf(s) >= 0 ? "active" : "", null == t.getStudentAnswer(e.content.id) || t.getStudentAnswer(e.content.id).isDraft ? "c-111" : "c-aaa"],
                        on: {
                            click: function(n) {
                                return t.chooseBtn(e.content, s)
                            }
                        }
                    }, [t._v(t._s(s))])
                }
                )), 0)])])]] : t._e(), [2, 3].includes(e.content.questionType) ? [n("div", {
                    class: ["option", "box_1", "ml-10", "mr-10", (t.getSubjectiveQuestion(e.content.id, 1),
                    "")]
                }, [n("div", {
                    staticClass: "right flex_1"
                }, [0 == t.info.mappingStatus || (t.isQuesttionFinish(e.content, 0) || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft) && (null == t.getStudentAnswer(e.content.id) || t.getStudentAnswer(e.content.id) && 0 == t.getStudentAnswer(e.content.id).abandonTag) ? t._l(t.getSubjectiveQuestion(e.content.id), (function(s) {
                    return n("div", {
                        key: s.id,
                        staticClass: "img-add pos-r mt-10 mr-10"
                    }, [n("img", {
                        attrs: {
                            src: "/exam" + s.attachmentLinkAddress
                        },
                        on: {
                            touchstart: function(e) {
                                return e.preventDefault(),
                                t.goTouchstart(s)
                            }
                        }
                    }), null != t.optionImgs.find((function(t) {
                        return t.id == s.id
                    }
                    )) ? n("div", {
                        staticClass: "img-option-box pos-a"
                    }, [n("span", {
                        class: [0 == t.info.mappingStatus || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft ? "mt-8" : "mt-25"],
                        on: {
                            click: function(e) {
                                return e.stopPropagation(),
                                t.seeAnswerImg(s)
                            }
                        }
                    }, [t._v("查看")]), 0 == t.info.mappingStatus || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft ? n("span", {
                        staticClass: "mt-5",
                        on: {
                            click: function(n) {
                                return n.stopPropagation(),
                                t.deleteAnswerImg(e.content, s, 0)
                            }
                        }
                    }, [t._v("删除")]) : t._e()]) : t._e()])
                }
                )) : t._e(), null == t.getStudentAnswer(e.content.id) || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft ? [t.getSubjectiveQuestion(e.content.id).length < 3 ? n("div", {
                    staticClass: "img-add mt-10 mr-10 pos-r",
                    staticStyle: {
                        "line-height": "82px"
                    },
                    on: {
                        click: function(n) {
                            return t.ChooseImg(e.content, 0)
                        }
                    }
                }, [n("span", {
                    staticClass: "t pos-a"
                }, [t._v(t._s(null == t.currQuestion ? "+ 点击拍照" : t.currQuestion.id == e.content.id && !t.isRepairImg && t.uploadStatus ? "上传中..." : "+ 点击拍照") + " ")]), n("input", {
                    staticStyle: {
                        opacity: "0",
                        height: "80px",
                        width: "100px"
                    },
                    attrs: {
                        type: "file",
                        accept: "image/*",
                        capture: "camera"
                    },
                    on: {
                        change: function(e) {
                            return t.UploadImg(e)
                        }
                    }
                })]) : t._e()] : t._e()], 2)]), n("div", {
                    staticClass: "option box_1 ml-10 mr-10 mb-10"
                }, [!t.getStudentAnswer(e.content.id) || 0 != t.getStudentAnswer(e.content.id).abandonTag || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft || 1 != t.info.mappingStatus ? t._e() : n("div", {
                    staticClass: "right flex_1"
                }, [t._l(t.getSubjectiveQuestion(e.content.id, 1), (function(s) {
                    return n("div", {
                        key: s.id,
                        staticClass: "img-add add-box pos-r mt-10 mr-10"
                    }, [n("img", {
                        attrs: {
                            src: "/exam" + s.attachmentLinkAddress
                        },
                        on: {
                            touchstart: function(e) {
                                return e.preventDefault(),
                                t.goTouchstart(s)
                            }
                        }
                    }), null != t.optionImgs.find((function(t) {
                        return t.id == s.id
                    }
                    )) ? n("div", {
                        staticClass: "img-option-box pos-a"
                    }, [n("span", {
                        staticClass: "mt-8",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(),
                                t.seeAnswerImg(s)
                            }
                        }
                    }, [t._v("查看")]), n("span", {
                        staticClass: "mt-5",
                        on: {
                            click: function(n) {
                                return n.stopPropagation(),
                                t.deleteAnswerImg(e.content, s, 1)
                            }
                        }
                    }, [t._v("删除")])]) : t._e()])
                }
                )), t.getSubjectiveQuestion(e.content.id, 1).length < 3 ? n("div", {
                    staticClass: "img-add add-box mt-10 mr-10 pos-r",
                    staticStyle: {
                        "line-height": "82px"
                    },
                    on: {
                        click: function(n) {
                            return t.ChooseImg(e.content, 1)
                        }
                    }
                }, [n("span", {
                    staticClass: "t pos-a"
                }, [t._v(" " + t._s(null == t.currQuestion ? "+ 追加图片" : t.currQuestion.id == e.content.id && t.isRepairImg && t.uploadStatus ? "上传中..." : "+ 追加图片") + " ")]), n("input", {
                    staticStyle: {
                        opacity: "0",
                        height: "80px",
                        width: "100px"
                    },
                    attrs: {
                        type: "file",
                        accept: "image/*",
                        capture: "camera"
                    },
                    on: {
                        change: function(e) {
                            return t.UploadImg(e)
                        }
                    }
                })]) : t._e()], 2)])] : t._e()] : t._e()], 2)
            }
            )), 0)
        }
          , u = []
          , d = n(1496)
          , l = {
            props: {
                courseId: [String, Number]
            },
            data() {
                return {
                    answerArr: [],
                    content: [],
                    info: {},
                    uploadStatus: !1,
                    currQuestion: null,
                    isRepairImg: !1,
                    timeOutEvent: 0,
                    optionImgs: []
                }
            },
            mounted() {},
            methods: {
                getInfo() {
                    let t = this;
                    (0,
                    d.zf)(t.courseId).then((e => {
                        let n = e.extra;
                        t.info = n;
                        let s = 0 == n.mappingStatus || 1 == n.mappingStatus && !t.getBtnStatus();
                        t.$parent.SetBtnDisabled(!s, n),
                        t.$parent.isAllDone(t.CourseAllDone())
                    }
                    ))
                },
                getContent() {
                    let t = this;
                    (0,
                    d.lE)(t.courseId).then((e => {
                        t.content = e.extra,
                        t.getQuestion()
                    }
                    ))
                },
                getQuestion() {
                    let t = this;
                    (0,
                    d.O2)(t.courseId).then((e => {
                        t.answerArr = e.extra,
                        t.getInfo()
                    }
                    ))
                },
                CourseAllDone() {
                    let t = this;
                    const e = t.content.filter((t => 2 === t.contentType))
                      , n = t.answerArr;
                    if (0 == n.length)
                        return !0;
                    let s = !1;
                    for (let i = 0; i < e.length; i++) {
                        let r = e[i].content;
                        if ([2, 3].includes(r.questionType) && t.getStudentAnswer(r.id) && 0 == t.getStudentAnswer(r.id).abandonTag && 1 == t.info.mappingStatus) {
                            s = !0;
                            break
                        }
                        if (0 == r.childList.length) {
                            let t = n.find((t => t.questionId == r.id));
                            if (null == t) {
                                s = !0;
                                break
                            }
                            if (t.isDraft) {
                                s = !0;
                                break
                            }
                        } else if (r.childList.length != n.filter((t => t.firstQuestionId == r.id && t.firstQuestionId != t.questionId && !t.isDraft)).length) {
                            s = !0;
                            break
                        }
                    }
                    return s
                },
                getStudentAnswer(t) {
                    return this.answerArr.find((e => e.questionId == t))
                },
                isQuesttionFinish(t, e) {
                    let n = this;
                    if ([2, 3].includes(t.questionType))
                        return !(n.getStudentAnswer(t.id) && 0 == n.getStudentAnswer(t.id).abandonTag) && 1 == n.info.mappingStatus;
                    if (0 == n.answerArr.length)
                        return !1;
                    if (0 == e) {
                        let e = n.getStudentAnswer(t.id);
                        return null == e ? 1 == n.info.mappingStatus : !e.isDraft
                    }
                    {
                        let e = n.answerArr.filter((e => e.firstQuestionId == t.id && e.firstQuestionId != e.questionId && !e.isDraft));
                        return t.childList.length == e.length
                    }
                },
                submitCourseData() {
                    let t = this;
                    t.$parent.submitCourseDataRes(!0),
                    0 == this.info.mappingStatus ? (0,
                    d.pU)({
                        courseId: t.info.courseId
                    }).then((e => {
                        t.getContent()
                    }
                    )) : (0,
                    d.vn)({
                        courseId: t.info.courseId,
                        courseBeginTime: t.info.courseBeginTime
                    }).then((e => {
                        t.getContent()
                    }
                    ))
                },
                getBtnStatus() {
                    let t = this;
                    if (0 == t.answerArr.length)
                        return !1;
                    let e = 0
                      , n = 0;
                    return t.content.forEach((t => {
                        "undefined" != typeof t.content.childList && (e += 0 == t.content.childList.length ? 1 : t.content.childList.length)
                    }
                    )),
                    t.answerArr.forEach((t => {
                        t.questionId == t.firstQuestionId || t.isDraft || (n += 1)
                    }
                    )),
                    n == e
                },
                getOptionStatus(t) {
                    let e = this;
                    if (0 == e.answerArr.length)
                        return !0;
                    let n = e.answerArr.filter((e => e.firstQuestionId == t && !e.isDraft));
                    if (0 == n.length)
                        return !0;
                    let s = 0;
                    return n.forEach((t => {
                        s += t.abandonTag
                    }
                    )),
                    0 == s
                },
                chooseBtn(t, e) {
                    let n = this
                      , s = null;
                    function i() {
                        if (0 == t.questionType) {
                            if (n.getStudentAnswer(t.id) && !n.getStudentAnswer(t.id).isDraft)
                                return;
                            s = {
                                courseId: t.courseId,
                                questionId: t.id,
                                studentAnswer: n.getStudentAnswer(t.id) && n.getStudentAnswer(t.id).studentAnswer && n.getStudentAnswer(t.id).studentAnswer.indexOf(e) >= 0 ? "" : e,
                                resubmitTag: n.info.mappingStatus,
                                abandonTag: 0
                            }
                        } else {
                            let i = n.getStudentAnswer(t.id);
                            if (null != i && !i.isDraft)
                                return;
                            if (null == i)
                                s = {
                                    courseId: t.courseId,
                                    questionId: t.id,
                                    studentAnswer: e,
                                    resubmitTag: n.info.mappingStatus,
                                    abandonTag: 0
                                };
                            else {
                                let r = null == i.studentAnswer ? [] : i.studentAnswer.split(",");
                                r.indexOf(e) >= 0 ? r.splice(r.indexOf(e), 1) : r.push(e);
                                s = {
                                    courseId: t.courseId,
                                    questionId: t.id,
                                    studentAnswer: r.sort().join(","),
                                    resubmitTag: n.info.mappingStatus,
                                    abandonTag: 0
                                }
                            }
                        }
                        n.stuAnaswer(s)
                    }
                    (0,
                    d.O2)(n.courseId).then((e => {
                        const s = e.extra;
                        if (0 == s.length)
                            i();
                        else {
                            const e = s.find((e => e.questionId == t.id));
                            if (null == e)
                                i();
                            else {
                                if (0 != e.abandonTag)
                                    return n.$message.warning("该题已经被放弃，禁止作答"),
                                    void (n.answerArr = s);
                                i()
                            }
                        }
                    }
                    ))
                },
                stuAnaswer(t) {
                    let e = this;
                    (0,
                    d.EP)(t).then((t => {
                        0 == t.code ? e.getQuestion() : e.$message.error(t.message)
                    }
                    ))
                },
                getSubjectiveQuestion(t, e=0) {
                    let n = this;
                    return null == n.getStudentAnswer(t) ? [] : n.getStudentAnswer(t).attachments.filter((t => 4 == t.questionAttachmentType && t.extraTag == e))
                },
                seeAnswerImg(t) {
                    this.optionImgs = [],
                    this.$viewerApi({
                        options: {
                            fullscreen: !0
                        },
                        images: ["/exam" + t.attachmentLinkAddress]
                    })
                },
                deleteAnswerImg(t, e, n=0) {
                    let s = this;
                    s.optionImgs = [],
                    s.$confirm({
                        title: "确认删除这个作答吗？",
                        onOk() {
                            0 == n ? (0,
                            d.nz)(t.courseId, t.id, e.id).then((t => {
                                0 == t.code ? s.getQuestion() : s.$message.error(t.message)
                            }
                            )) : (0,
                            d.fi)(t.courseId, t.id, e.id).then((t => {
                                0 == t.code ? s.getQuestion() : s.$message.error(t.message)
                            }
                            ))
                        }
                    })
                },
                ChooseImg(t, e=0) {
                    let n = this;
                    (0,
                    d.O2)(n.courseId).then((s => {
                        const i = s.extra;
                        if (0 == i.length)
                            n.ChooseSubmitImg(t, e);
                        else {
                            const s = i.find((e => e.questionId == t.id));
                            if (null == s)
                                n.ChooseSubmitImg(t, e);
                            else {
                                if (1 == s.abandonTag)
                                    return n.$message.warning("该题已经被放弃，禁止作答"),
                                    void (n.answerArr = i);
                                {
                                    let r = s.attachments;
                                    if (r.filter((t => 5 == t.questionAttachmentType && t.extraTag == e)).length >= 3)
                                        return n.$message.warning("只能添加三张图片，请删除后再添加！"),
                                        void (n.answerArr = i);
                                    n.ChooseSubmitImg(t, e)
                                }
                            }
                        }
                    }
                    ))
                },
                ChooseSubmitImg(t, e=0) {
                    let n = this;
                    if (n.uploadStatus)
                        n.$message.warning("图片正在上传中");
                    else if (n.getSubjectiveQuestion(t.id, e).length >= 3)
                        n.$message.warning("只能添加三张图片，请删除后再添加！");
                    else
                        try {
                            n.isRepairImg = 1 == e,
                            n.currQuestion = t
                        } catch (s) {
                            console.log(s)
                        }
                },
                UploadImg(t) {
                    let e = this
                      , n = t.target.files[0];
                    n && (0,
                    a.GP)(n).then((t => {
                        e.$parent.ShowEditImgWindow(t)
                    }
                    ))
                },
                CropperFinishUploadImg(t) {
                    let e = this;
                    e.uploadStatus = !0;
                    let n = (0,
                    a.Ll)(t, (0,
                    a.wY)() + ".jpg")
                      , s = new Image;
                    function i(t) {
                        (0,
                        d.ws)({
                            uploadFile: t
                        }).then((t => {
                            e.isRepairImg ? (0,
                            d.KJ)(e.currQuestion.courseId, e.currQuestion.id, t.extra.id).then((t => {
                                e.getQuestion(),
                                e.uploadStatus = !1
                            }
                            )) : (0,
                            d.w1)(e.currQuestion.courseId, e.currQuestion.id, t.extra.id).then((t => {
                                e.getQuestion(),
                                e.uploadStatus = !1
                            }
                            ))
                        }
                        ))
                    }
                    s.src = t,
                    s.onload = function() {
                        n.size / 1024 > 500 ? (0,
                        a.sU)(n, Math.floor(s.width * Math.sqrt(500 / (n.size / 1024)))).then((t => {
                            i((0,
                            a.hl)(t, (0,
                            a.wY)() + ".jpg"))
                        }
                        )) : i(n)
                    }
                },
                closeCropper() {},
                goTouchstart(t) {
                    let e = this;
                    e.timeOutEvent = setTimeout(( () => {
                        e.optionImgs = [],
                        e.optionImgs.push(t),
                        clearTimeout(e.timeOutEvent),
                        setTimeout(( () => {
                            e.optionImgs = []
                        }
                        ), 5e3)
                    }
                    ), 1e3)
                },
                goTouchend() {
                    clearTimeout(this.timeOutEvent)
                }
            }
        }
          , c = l
          , p = n(70713)
          , g = (0,
        p.Z)(c, o, u, !1, null, null, null)
          , m = g.exports
          , h = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "question-box mb-10"
            }, t._l(t.content, (function(e) {
                return n("div", {
                    key: e.idx,
                    staticClass: "item-box mt-10"
                }, [2 == e.contentType ? [n("div", {
                    staticClass: "tihao-box"
                }, [0 == e.content.childList.length && (null == t.getStudentAnswer(e.content.id) || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft || [2, 3].includes(e.content.questionType) || 1 == t.paperCatalog.openScore) && t.getPaperQuestionDone(e.content) ? [n("a-button", {
                    staticClass: "bg-636f9e b-none",
                    attrs: {
                        type: "danger",
                        size: "small"
                    }
                }, [t._v(" 题号：" + t._s(e.content.questionNumber) + " ")]), n("a-button", {
                    staticClass: "ml-10",
                    attrs: {
                        size: "small"
                    }
                }, [t._v(" 分数: " + t._s(e.content.questionScore) + " ")])] : t._e(), e.content.childList.length > 0 && (!t.isQuesttionFinish(e.content, 1) || [2, 3].includes(e.content.questionType) && 1 == t.paperCatalog.openScore) && t.getPaperQuestionDone(e.content) ? [n("a-button", {
                    staticClass: "bg-636f9e b-none",
                    attrs: {
                        type: "danger",
                        size: "small"
                    }
                }, [t._v(" 题号：" + t._s(e.content.childList[0].questionNumber) + " ")]), t._v(" - "), n("a-button", {
                    staticClass: "bg-636f9e b-none",
                    attrs: {
                        type: "danger",
                        size: "small"
                    }
                }, [t._v(" 题号：" + t._s(e.content.childList[e.content.childList.length - 1].questionNumber) + " ")]), n("a-button", {
                    staticClass: "ml-10",
                    attrs: {
                        size: "small"
                    }
                }, [t._v(" 分数: " + t._s(e.content.questionScore) + " ")])] : t._e()], 2), [0, 1].includes(e.content.questionType) ? [0 == e.content.childList.length && (null == t.getStudentAnswer(e.content.id) || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft) ? [n("div", {
                    staticClass: "option-box mt-10"
                }, [n("div", {
                    staticClass: "option box_1 ml-10 mr-10"
                }, [n("div", {
                    staticClass: "right flex_1"
                }, t._l(e.content.answerCard.split(","), (function(s) {
                    return n("span", {
                        key: s,
                        class: [null == t.getStudentAnswer(e.content.id) || null == t.getStudentAnswer(e.content.id).studentAnswer ? "" : t.getStudentAnswer(e.content.id).studentAnswer.indexOf(s) >= 0 ? "active" : "", null == t.getStudentAnswer(e.content.id) && t.surplussecond > 0 || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft && t.surplussecond > 0 ? "c-111" : "c-aaa"],
                        on: {
                            click: function(n) {
                                return t.chooseBtn(e.content, s)
                            }
                        }
                    }, [t._v(t._s(s))])
                }
                )), 0)])])] : [n("div", {
                    staticClass: "option-box mt-10"
                }, t._l(e.content.childList, (function(s) {
                    return n("div", {
                        key: s.id,
                        staticClass: "option box_1 ml-10 mr-10"
                    }, [(!t.isQuesttionFinish(s, 0) || null == t.getStudentAnswer(s.id) || t.getStudentAnswer(s.id) && t.IsNullOrEmpty(t.getStudentAnswer(s.id).studentAnswer)) && t.getPaperQuestionDone(e.content) ? [n("div", {
                        staticClass: "left"
                    }, [n("span", [t._v("题号：" + t._s(s.questionNumber))])]), n("div", {
                        staticClass: "right flex_1"
                    }, t._l(e.content.answerCard.split(","), (function(e) {
                        return n("span", {
                            key: e,
                            class: [null == t.getStudentAnswer(s.id) || null == t.getStudentAnswer(s.id).studentAnswer ? "" : t.getStudentAnswer(s.id).studentAnswer.indexOf(e) >= 0 ? "active" : "", null == t.getStudentAnswer(s.id) && t.surplussecond > 0 || t.getStudentAnswer(s.id) && t.getStudentAnswer(s.id).isDraft && t.surplussecond > 0 ? "c-111" : "c-aaa"],
                            on: {
                                click: function(n) {
                                    return t.chooseBtn(s, e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    }
                    )), 0)] : t._e()], 2)
                }
                )), 0)]] : t._e(), [2, 3].includes(e.content.questionType) ? [n("div", {
                    class: ["option", "box_1", "ml-10", "mr-10", (t.getSubjectiveQuestion(e.content.id, 1),
                    "")]
                }, [n("div", {
                    staticClass: "right flex_1"
                }, [0 == t.info.mappingStatus || (t.isQuesttionFinish(e.content, 0) || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft) && (null == t.getStudentAnswer(e.content.id) || t.getStudentAnswer(e.content.id) && 0 == t.getStudentAnswer(e.content.id).abandonTag) ? t._l(t.getSubjectiveQuestion(e.content.id), (function(s) {
                    return n("div", {
                        key: s.id,
                        staticClass: "img-add pos-r mt-10 mr-10"
                    }, [n("img", {
                        attrs: {
                            src: "/exam" + s.attachmentLinkAddress
                        },
                        on: {
                            touchstart: function(e) {
                                return e.preventDefault(),
                                t.goTouchstart(s)
                            }
                        }
                    }), null != t.optionImgs.find((function(t) {
                        return t.id == s.id
                    }
                    )) ? n("div", {
                        staticClass: "img-option-box pos-a"
                    }, [n("span", {
                        class: [0 == t.info.mappingStatus || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft ? "mt-8" : "mt-25"],
                        on: {
                            click: function(e) {
                                return e.stopPropagation(),
                                t.seeAnswerImg(s)
                            }
                        }
                    }, [t._v("查看")]), 0 == t.info.mappingStatus || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft ? n("span", {
                        staticClass: "mt-5",
                        on: {
                            click: function(n) {
                                return n.stopPropagation(),
                                t.deleteAnswerImg(e.content, s, 0)
                            }
                        }
                    }, [t._v("删除")]) : t._e()]) : t._e()])
                }
                )) : t._e(), (null == t.getStudentAnswer(e.content.id) || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft) && t.getPaperQuestionDone(e.content) ? [t.getSubjectiveQuestion(e.content.id).length < 3 ? n("div", {
                    staticClass: "img-add mt-10 mr-10 pos-r",
                    staticStyle: {
                        "line-height": "82px"
                    },
                    on: {
                        click: function(n) {
                            return t.ChooseImg(e.content, 0)
                        }
                    }
                }, [n("span", {
                    staticClass: "t pos-a"
                }, [t._v(t._s(null == t.currQuestion ? "+ 点击拍照" : t.currQuestion.id == e.content.id && !t.isRepairImg && t.uploadStatus ? "上传中..." : "+ 点击拍照") + " ")]), n("input", {
                    staticStyle: {
                        opacity: "0",
                        height: "80px",
                        width: "100px"
                    },
                    attrs: {
                        type: "file",
                        accept: "image/*",
                        capture: "camera"
                    },
                    on: {
                        change: function(e) {
                            return t.UploadImg(e)
                        }
                    }
                })]) : t._e()] : t._e()], 2)]), n("div", {
                    staticClass: "option box_1 ml-10 mr-10 mb-10"
                }, [!t.getStudentAnswer(e.content.id) || 0 != t.getStudentAnswer(e.content.id).abandonTag || t.getStudentAnswer(e.content.id) && t.getStudentAnswer(e.content.id).isDraft || 1 != t.info.mappingStatus ? t._e() : n("div", {
                    staticClass: "right flex_1"
                }, [t._l(t.getSubjectiveQuestion(e.content.id, 1), (function(s) {
                    return n("div", {
                        key: s.id,
                        staticClass: "img-add add-box pos-r mt-10 mr-10"
                    }, [n("img", {
                        attrs: {
                            src: "/exam" + s.attachmentLinkAddress
                        },
                        on: {
                            touchstart: function(e) {
                                return e.preventDefault(),
                                t.goTouchstart(s)
                            }
                        }
                    }), null != t.optionImgs.find((function(t) {
                        return t.id == s.id
                    }
                    )) ? n("div", {
                        staticClass: "img-option-box pos-a"
                    }, [n("span", {
                        staticClass: "mt-8",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(),
                                t.seeAnswerImg(s)
                            }
                        }
                    }, [t._v("查看")]), n("span", {
                        staticClass: "mt-5",
                        on: {
                            click: function(n) {
                                return n.stopPropagation(),
                                t.deleteAnswerImg(e.content, s, 1)
                            }
                        }
                    }, [t._v("删除")])]) : t._e()])
                }
                )), t.getSubjectiveQuestion(e.content.id, 1).length < 3 ? n("div", {
                    staticClass: "img-add add-box mt-10 mr-10 pos-r",
                    staticStyle: {
                        "line-height": "82px"
                    },
                    on: {
                        click: function(n) {
                            return t.ChooseImg(e.content, 1)
                        }
                    }
                }, [n("span", {
                    staticClass: "t pos-a"
                }, [t._v(" " + t._s(null == t.currQuestion ? "+ 追加图片" : t.currQuestion.id == e.content.id && t.isRepairImg && t.uploadStatus ? "上传中..." : "+ 追加图片") + " ")]), n("input", {
                    staticStyle: {
                        opacity: "0",
                        height: "80px",
                        width: "100px"
                    },
                    attrs: {
                        type: "file",
                        accept: "image/*",
                        capture: "camera"
                    },
                    on: {
                        change: function(e) {
                            return t.UploadImg(e)
                        }
                    }
                })]) : t._e()], 2)])] : t._e()] : t._e()], 2)
            }
            )), 0)
        }
          , f = []
          , A = n(52650)
          , b = {
            props: {
                paperId: [String, Number],
                surplussecond: [Number],
                catalogId: [Number]
            },
            data() {
                return {
                    answerArr: [],
                    content: [],
                    info: {},
                    uploadStatus: !1,
                    currQuestion: null,
                    isRepairImg: !1,
                    timeOutEvent: 0,
                    optionImgs: [],
                    paperCatalog: {}
                }
            },
            mounted() {},
            methods: {
                IsNullOrEmpty(t) {
                    return (0,
                    a.lF)(t)
                },
                getPaperList() {
                    let t = this;
                    (0,
                    A.NZ)(this.catalogId).then((e => {
                        0 == e.code && (t.paperCatalog = e.extra.find((e => e.id == t.paperId)) || {},
                        t.$parent.setpaperCatalog(t.paperCatalog))
                    }
                    ))
                },
                getContent() {
                    let t = this;
                    (0,
                    A.Y_)(this.paperId).then((e => {
                        t.content = e.extra,
                        t.getQuestion()
                    }
                    ))
                },
                getQuestion() {
                    let t = this;
                    (0,
                    A.O2)(t.paperId).then((e => {
                        t.answerArr = e.extra,
                        t.getInfo()
                    }
                    ))
                },
                getInfo() {
                    let t = this;
                    (0,
                    A.C0)(t.paperId).then((e => {
                        let n = e.extra;
                        t.info = n,
                        t.$parent.paperInfo(n),
                        t.$parent.isAllDone(t.PaperAllDone()),
                        t.$parent.setPaperBtnStatus(t.getBtnStatus())
                    }
                    ))
                },
                getStudentAnswer(t) {
                    return this.answerArr.find((e => e.questionId == t))
                },
                isQuesttionFinish(t, e) {
                    let n = this;
                    if ([2, 3].includes(t.questionType))
                        return !(n.getStudentAnswer(t.id) && 0 == n.getStudentAnswer(t.id).abandonTag) && 1 == n.info.mappingStatus;
                    if (0 == n.answerArr.length)
                        return !1;
                    if (0 == e) {
                        let e = n.getStudentAnswer(t.id);
                        return null == e ? 1 == n.info.mappingStatus : !e.isDraft
                    }
                    {
                        let e = n.answerArr.filter((e => e.firstQuestionId == t.id && e.firstQuestionId != e.questionId && !e.isDraft));
                        return t.childList.length == e.length
                    }
                },
                chooseBtn(t, e) {
                    let n = this
                      , s = null;
                    if (!(n.surplussecond <= 0)) {
                        if (0 == t.questionType) {
                            if (n.getStudentAnswer(t.id) && !n.getStudentAnswer(t.id).isDraft)
                                return;
                            s = {
                                paperId: t.paperId,
                                questionId: t.id,
                                studentAnswer: n.getStudentAnswer(t.id) && n.getStudentAnswer(t.id).studentAnswer && n.getStudentAnswer(t.id).studentAnswer.indexOf(e) >= 0 ? "" : e,
                                resubmitTag: n.info.mappingStatus,
                                abandonTag: 0
                            }
                        } else {
                            let i = n.getStudentAnswer(t.id);
                            if (null != i && !i.isDraft)
                                return;
                            if (null == i)
                                s = {
                                    paperId: t.paperId,
                                    questionId: t.id,
                                    studentAnswer: e,
                                    resubmitTag: n.info.mappingStatus,
                                    abandonTag: 0
                                };
                            else {
                                let r = null == i.studentAnswer ? [] : i.studentAnswer.split(",");
                                r.indexOf(e) >= 0 ? r.splice(r.indexOf(e), 1) : r.push(e);
                                s = {
                                    paperId: t.paperId,
                                    questionId: t.id,
                                    studentAnswer: r.sort().join(","),
                                    resubmitTag: n.info.mappingStatus,
                                    abandonTag: 0
                                }
                            }
                        }
                        (0,
                        A.EP)(s).then((t => {
                            0 == t.code && n.getQuestion()
                        }
                        ))
                    }
                },
                submitPaperData() {
                    let t = this;
                    t.$parent.submitCourseDataRes(!0),
                    0 == this.info.mappingStatus ? (0,
                    A.me)({
                        paperId: t.info.paperId
                    }).then((e => {
                        0 == e.code ? t.getContent() : t.$message.warning(e.message)
                    }
                    )) : (0,
                    A.oj)({
                        paperId: t.info.paperId
                    }).then((e => {
                        0 == e.code ? t.getContent() : t.$message.warning(e.message)
                    }
                    ))
                },
                deleteAnswerImg(t, e, n=0) {
                    let s = this;
                    s.optionImgs = [],
                    s.$confirm({
                        title: "确认删除这个作答吗？",
                        onOk() {
                            0 == n ? (0,
                            A.nz)(t.paperId, t.id, e.id).then((t => {
                                0 == t.code ? s.getQuestion() : s.$message.error(t.message)
                            }
                            )) : (0,
                            A.fi)(t.paperId, t.id, e.id).then((t => {
                                0 == t.code ? s.getQuestion() : s.$message.error(t.message)
                            }
                            ))
                        }
                    })
                },
                ChooseImg(t, e=0) {
                    let n = this;
                    (0,
                    A.O2)(n.paperId).then((s => {
                        const i = s.extra;
                        if (0 == i.length)
                            n.ChooseSubmitImg(t, e);
                        else {
                            const s = i.find((e => e.questionId == t.id));
                            if (null == s)
                                n.ChooseSubmitImg(t, e);
                            else {
                                if (1 == s.abandonTag)
                                    return n.$message.warning("该题已经被放弃，禁止作答"),
                                    void (n.answerArr = i);
                                {
                                    let r = s.attachments;
                                    if (r.filter((t => 5 == t.questionAttachmentType && t.extraTag == e)).length >= 3)
                                        return n.$message.warning("只能添加三张图片，请删除后再添加！"),
                                        void (n.answerArr = i);
                                    n.ChooseSubmitImg(t, e)
                                }
                            }
                        }
                    }
                    ))
                },
                ChooseSubmitImg(t, e=0) {
                    let n = this;
                    if (n.uploadStatus)
                        n.$message.warning("图片正在上传中");
                    else if (n.getSubjectiveQuestion(t.id, e).length >= 3)
                        n.$message.warning("只能添加三张图片，请删除后再添加！");
                    else
                        try {
                            n.isRepairImg = 1 == e,
                            n.currQuestion = t
                        } catch (s) {
                            console.log(s)
                        }
                },
                UploadImg(t) {
                    let e = this
                      , n = t.target.files[0];
                    n && (0,
                    a.GP)(n).then((t => {
                        e.$parent.ShowEditImgWindow(t)
                    }
                    ))
                },
                CropperFinishUploadImg(t) {
                    let e = this;
                    e.uploadStatus = !0;
                    let n = (0,
                    a.Ll)(t, (0,
                    a.wY)() + ".jpg")
                      , s = new Image;
                    function i(t) {
                        (0,
                        d.ws)({
                            uploadFile: t
                        }).then((t => {
                            e.isRepairImg ? (0,
                            A.KJ)(e.currQuestion.paperId, e.currQuestion.id, t.extra.id).then((t => {
                                e.getQuestion(),
                                e.uploadStatus = !1
                            }
                            )) : (0,
                            A.w1)(e.currQuestion.paperId, e.currQuestion.id, t.extra.id).then((t => {
                                e.getQuestion(),
                                e.uploadStatus = !1
                            }
                            ))
                        }
                        ))
                    }
                    s.src = t,
                    s.onload = function() {
                        n.size / 1024 > 500 ? (0,
                        a.sU)(n, Math.floor(s.width * Math.sqrt(500 / (n.size / 1024)))).then((t => {
                            i((0,
                            a.hl)(t, (0,
                            a.wY)() + ".jpg"))
                        }
                        )) : i(n)
                    }
                },
                getSubjectiveQuestion(t, e=0) {
                    let n = this;
                    return null == n.getStudentAnswer(t) ? [] : n.getStudentAnswer(t).attachments.filter((t => 4 == t.questionAttachmentType && t.extraTag == e))
                },
                getBtnStatus() {
                    let t = this
                      , e = t.answerArr;
                    if (0 == e.length)
                        return !1;
                    if (1 == t.info.mappingStatus) {
                        let n = 0
                          , s = 0;
                        return t.content.forEach((t => {
                            "undefined" != typeof t.content.childList && (n += 0 == t.content.childList.length ? 1 : t.content.childList.length)
                        }
                        )),
                        e.forEach((t => {
                            t.questionId == t.firstQuestionId || t.isDraft || (s += 1)
                        }
                        )),
                        console.log(s == n),
                        s == n
                    }
                },
                PaperAllDone() {
                    let t = this;
                    const e = t.content.filter((t => 2 === t.contentType))
                      , n = t.answerArr;
                    if (0 == n.length)
                        return !0;
                    let s = !1;
                    for (let i = 0; i < e.length; i++) {
                        let r = e[i].content;
                        if ([2, 3].includes(r.questionType) && 1 == t.info.mappingStatus && 1 == t.paperCatalog.openScore) {
                            s = !0;
                            break
                        }
                        if (0 == r.childList.length) {
                            let t = n.find((t => t.questionId == r.id));
                            if (null == t) {
                                s = !0;
                                break
                            }
                            if (t.isDraft) {
                                s = !0;
                                break
                            }
                        } else if (r.childList.length != n.filter((t => t.firstQuestionId == r.id && t.firstQuestionId != t.questionId && !t.isDraft)).length) {
                            s = !0;
                            break
                        }
                    }
                    return s
                },
                seeAnswerImg(t) {
                    this.optionImgs = [],
                    this.$viewerApi({
                        options: {
                            fullscreen: !0
                        },
                        images: ["/exam" + t.attachmentLinkAddress]
                    })
                },
                goTouchstart(t) {
                    let e = this;
                    e.timeOutEvent = setTimeout(( () => {
                        e.optionImgs = [],
                        e.optionImgs.push(t),
                        clearTimeout(e.timeOutEvent),
                        setTimeout(( () => {
                            e.optionImgs = []
                        }
                        ), 5e3)
                    }
                    ), 1e3)
                },
                goTouchend() {
                    clearTimeout(this.timeOutEvent)
                },
                getPaperQuestionDone(t) {
                    let e = this
                      , n = !0;
                    if (e.surplussecond <= 0) {
                        if ([2, 3].includes(t.questionType)) {
                            let e = this.getStudentAnswer(t.id);
                            null == e && (n = !1)
                        }
                        [0, 1].includes(t.questionType) && (n = !1)
                    }
                    return n
                }
            }
        }
          , w = b
          , S = (0,
        p.Z)(w, h, f, !1, null, null, null)
          , I = S.exports
          , v = {
            components: {
                mc: m,
                me: I,
                EditImgBox: () => Promise.all([n.e(996), n.e(966)]).then(n.bind(n, 42966))
            },
            data() {
                return {
                    data: {},
                    BtnDisabled: !0,
                    mappingStatus: 0,
                    isNotDone: !0,
                    info: {},
                    deadline: 0,
                    userError: !1,
                    isSuccess: !1,
                    isEditImg: !1,
                    timer: null,
                    secondsText: "--:--:--",
                    surplussecond: 0,
                    PaperBtnStatus: !1,
                    paperCatalog: {}
                }
            },
            mounted() {
                let t = this;
                t.data = JSON.parse(decodeURI(decodeURI(t.$route.query.data))),
                t.getUserInfo()
            },
            methods: {
                getUserInfo() {
                    let t = this;
                    (0,
                    r.x4)({
                        phoneNumber: t.data.phoneNumber,
                        pwd: t.data.pwd
                    }).then((e => {
                        0 == e.code ? (sessionStorage.setItem("course_userInfo", JSON.stringify(e.extra)),
                        "1" == t.data.type ? t.$refs.mcb.getContent() : (t.$refs.meb.getContent(),
                        t.$refs.meb.getPaperList())) : t.userError = !0
                    }
                    ))
                },
                SetBtnDisabled(t, e) {
                    this.BtnDisabled = t,
                    this.info = e,
                    this.deadline = new Date(e.courseRecycleTime).getTime(),
                    this.mappingStatus = e.mappingStatus
                },
                submitData() {
                    let t = this;
                    "1" == t.data.type ? t.$refs.mcb.submitCourseData() : 0 == t.info.mappingStatus ? t.$confirm({
                        title: "提交后本次考试将结束且不可修改，确定要提交本次考试吗？",
                        onOk() {
                            t.$refs.meb.submitPaperData()
                        }
                    }) : t.$refs.meb.submitPaperData()
                },
                submitCourseDataRes(t) {
                    this.isSuccess = t
                },
                onFinish() {
                    this.submitData()
                },
                isAllDone(t) {
                    this.isNotDone = t
                },
                setPaperBtnStatus(t) {
                    console.log(t),
                    this.PaperBtnStatus = t
                },
                setpaperCatalog(t) {
                    this.paperCatalog = t
                },
                ShowEditImgWindow(t) {
                    let e = this;
                    e.isEditImg = !0,
                    e.$refs.cropper.init(t)
                },
                CropperFinish(t) {
                    let e = this;
                    e.closeCropper(),
                    "1" == e.data.type ? e.$refs.mcb.CropperFinishUploadImg(t) : e.$refs.meb.CropperFinishUploadImg(t)
                },
                closeCropper() {
                    this.isEditImg = !1,
                    "1" == this.data.type && this.$refs.mcb.closeCropper()
                },
                paperInfo(t) {
                    this.info = t,
                    null == t.paperSettingResubmitTime && 1 == t.mappingStatus || this.countdown(this.info.currTime, 0 == this.info.mappingStatus ? this.info.paperRecycleTime : this.info.paperSettingResubmitTime)
                },
                countdown(t, e) {
                    if (null == t || null == e)
                        return;
                    let n = this;
                    t = t.replace(/\-/g, "/"),
                    e = e.replace(/\-/g, "/");
                    var s = new Date(t)
                      , i = new Date(e);
                    n.surplussecond = parseInt((i.getTime() - s.getTime()) / parseInt(1e3)),
                    n.surplussecond <= 0 || (clearInterval(n.timer),
                    n.timer = setInterval(( () => {
                        if (n.surplussecond > 0) {
                            var t = Math.floor(n.surplussecond / 60 / 60)
                              , e = Math.floor(n.surplussecond / 60 % 60)
                              , s = Math.floor(n.surplussecond % 60);
                            n.secondsText = (0,
                            a.jJ)(t) + ":" + (0,
                            a.jJ)(e) + ":" + (0,
                            a.jJ)(s),
                            n.surplussecond--
                        } else
                            clearInterval(n.timer),
                            n.secondsText = "--:--:--",
                            n.$refs.meb.getContent()
                    }
                    ), 1e3))
                },
                paperSettingResubmitTime(t) {
                    return null != t && this.surplussecond > 0
                }
            }
        }
          , x = v
          , y = (0,
        p.Z)(x, s, i, !1, null, null, null)
          , C = y.exports
    },
    52650: function(t, e, n) {
        n.d(e, {
            C0: function() {
                return r
            },
            EP: function() {
                return p
            },
            FY: function() {
                return v
            },
            Gh: function() {
                return A
            },
            KJ: function() {
                return d
            },
            NZ: function() {
                return i
            },
            O2: function() {
                return o
            },
            OX: function() {
                return w
            },
            S3: function() {
                return x
            },
            Y_: function() {
                return a
            },
            Z2: function() {
                return h
            },
            bR: function() {
                return b
            },
            c1: function() {
                return S
            },
            fi: function() {
                return l
            },
            me: function() {
                return g
            },
            nz: function() {
                return c
            },
            oj: function() {
                return m
            },
            qk: function() {
                return y
            },
            r3: function() {
                return f
            },
            w1: function() {
                return u
            },
            xJ: function() {
                return I
            }
        });
        var s = n(18442);
        function i(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/student/paper/entity/catalog/${t}`
            }))
        }
        function r(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/student/paper/entity/${t}`
            }))
        }
        function a(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/student/paper/entity/${t}/content`
            }))
        }
        function o(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/student/paper/entity/${t}/question`
            }))
        }
        function u(t, e, n) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("POST"), {
                url: `${s.jz}/api/student/paper/entity/${t}/question/${e}/attachment/${n}`
            }))
        }
        function d(t, e, n) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("POST"), {
                url: `${s.jz}/api/student/paper/entity/${t}/question/${e}/extra/attachment/${n}`
            }))
        }
        function l(t, e, n) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("PUT"), {
                url: `${s.jz}/api/student/paper/entity/${t}/question/${e}/extra/attachment/${n}/del`
            }))
        }
        function c(t, e, n) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("PUT"), {
                url: `${s.jz}/api/student/paper/entity/${t}/question/${e}/attachment/${n}/del`
            }))
        }
        function p(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("POST", t), {
                url: `${s.jz}/api/student/paper/entity/${t.paperId}/question/${t.questionId}`
            }))
        }
        function g(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("POST", t), {
                url: `${s.jz}/api/student/paper/entity/${t.paperId}/submit`
            }))
        }
        function m(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("POST", t), {
                url: `${s.jz}/api/student/paper/entity/${t.paperId}/resubmit`
            }))
        }
        function h(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/student/paper/entity/${t}/statistics`
            }))
        }
        function f(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/paper/${t}/handle/share/respond`
            }))
        }
        function A(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("POST", t), {
                url: `${s.jz}/api/paper/commenting/source/list`
            }))
        }
        function b(t, e) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/paper/statistics/entity/${t}/question/${e}`
            }))
        }
        function w(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/paper/statistics/entity/${t}/question`
            }))
        }
        function S(t, e) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/paper/statistics/entity/${t}/question?paperId=${t}&pointId=${e}`
            }))
        }
        function I(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/paper/statistics/entity/${t}/student?paperId=${t}`
            }))
        }
        function v(t, e) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/paper/statistics/point/entity/${t}/${e}/top`
            }))
        }
        function x(t, e) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/paper/statistics/entity/${t}/${e}?paperId=${t}&type=${e}`
            }))
        }
        function y(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("POST", t), {
                url: `${s.jz}/api/student/paper/entity/condition`
            }))
        }
    },
    64981: function(t, e, n) {
        n.d(e, {
            Ak: function() {
                return r
            },
            c0: function() {
                return o
            },
            kS: function() {
                return u
            },
            x4: function() {
                return i
            },
            z2: function() {
                return a
            }
        });
        var s = n(18442);
        function i(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("POST", t), {
                url: `${s.jz}/login/api/stu/signin`
            }))
        }
        function r(t, e=1) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET", t), {
                url: 1 === e ? `${s.jz}/login/api/code/enroll` : `${s.jz}/login/api/code/fpwd`
            }))
        }
        function a(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("POST", t), {
                url: `${s.jz}/login/api/enroll`
            }))
        }
        function o(t) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("PUT", t), {
                url: `${s.jz}/login/api/fpwd`
            }))
        }
        function u() {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/login/api/logout`
            }))
        }
    },
    17591: function(t, e, n) {
        t.exports = n.p + "img/done.e24bc5a4.png"
    },
    23292: function(t, e, n) {
        t.exports = n.p + "img/error.607dfdb1.png"
    },
    35584: function(t) {
        t.exports = "data:image/png;base64,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"
    },
    38846: function(t) {
        t.exports = "data:image/png;base64,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"
    }
}]);
