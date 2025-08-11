"use strict";
(self["webpackChunkstu_project"] = self["webpackChunkstu_project"] || []).push([[232], {
    25232: function(e, t, r) {
        r.r(t),
        r.d(t, {
            default: function() {
                return f
            }
        });
        var s = function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            window.nearClick = false;
            return r("div", {
                staticClass: "wrap",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [r("div", {
                staticClass: "nav"
            }, [r("div", {
                staticClass: "put",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.changeShowSlider.apply(null, arguments)
                    }
                }
            }, [r("a-icon", {
                attrs: {
                    type: e.showNav ? "left" : "right"
                }
            })], 1), r("Navigation", {
                staticStyle: {
                    "margin-right": "10px"
                }
            }), r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showNav,
                    expression: "showNav"
                }],
                staticClass: "treeBox"
            }, [r("div", {
                staticClass: "title"
            }, [e._v("目 录")]), r("div", {
                staticClass: "roll-box",
            }, [r("div",{
                staticStyle:{
                    "display":"flex"
                }
                },[r("input",{
                staticClass: "search",
                staticStyle:{
                    "margin": "5px",
                    width:"60%",
                    height:"3%",
                }
            }),r("button",{
                staticClass: "submitSearch",
                staticStyle:{
                    "margin": "5px",
                    height:"3%"
                }
            },[e._v("搜索")]),
            ]),
                r("div", {
                    staticClass: "near"
                }, [1 >= e.pageid?r("div", {
                    staticClass: "folderNear",
                    class: {
                    },
                    on: {
                        click: function(r) {
                            let element = document.querySelector(".nearList");
                            if(element.style.display =="none") element.style.display = "block";
                            else element.style.display ="none"
                        }
                    }
                }, [r("span", {
                    style: {
                        color:"#00F"
                    }
                }, [r("a-badge", [e._v("最近打开")])], 1)]):e._e(),
                    1 >= e.pageid? r("div", {staticClass:"nearList",style:{display:"none"}},e._l(JSON.parse(0 == e.pageid?localStorage.getItem("nearCourse"):localStorage.getItem("nearPaper")),function (t){
                    return r("div",{
                        staticClass:"nearCourse",
                        on: {
                            click : function(){
                                const hash = window.location.hash;
                                const [hashPath, hashQuery] = hash.split('?');
                                const hashParams = new URLSearchParams(hashQuery);
                                hashParams.set('catalogId', t.id);
                                const newHash = `${hashPath}?${hashParams.toString()}`;
                                if(0 == e.pageid) {
                                    let nearCourse = (localStorage.getItem("nearCourse") == null ? [] : JSON.parse(localStorage.getItem("nearCourse")));
                                    let courseInfo = {name: t.name, id: t.id}
                                    nearCourse = nearCourse.filter(item => item.name !== courseInfo.name || item.id !== courseInfo.id);
                                    nearCourse.push(courseInfo)
                                    localStorage.setItem("nearCourse", JSON.stringify(nearCourse));
                                }
                                else if(1==e.pageid){
                                    let nearPaper = (localStorage.getItem("nearPaper") == null ? [] : JSON.parse(localStorage.getItem("nearPaper")));
                                    let paperInfo = {name: t.name, id: t.id}
                                    nearPaper = nearPaper.filter(item => item.name !== paperInfo.name || item.id !== paperInfo.id);
                                    nearPaper.push(paperInfo)
                                    localStorage.setItem("nearPaper", JSON.stringify(nearPaper));
                                }
                                window.location.hash = newHash;
                            }
                        }
                    },[e._v(t.name)])
                    })
                ):e._e()], 1),
                r("div", {
                    staticClass: "near"
                }, [0 >= e.pageid?r("div", {
                    staticClass: "folderNear",
                    class: {
                    },
                    on: {
                        click: function(r) {
                            let element = document.querySelector(".starList");
                            if(element.style.display =="none") element.style.display = "block";
                            else element.style.display ="none"
                        }
                    }
                }, [r("span", {
                    style: {
                        color:"#00F"
                    }
                }, [r("a-badge", [e._v("收藏课程")])], 1)]):e._e(),
                    0 >= e.pageid? r("div", {staticClass:"starList",style:{display:"none"}},e._l(JSON.parse(0 == e.pageid?localStorage.getItem("starCourse"):localStorage.getItem("starPaper")),function (t){
                    return r("div",{
                        staticClass:"nearCourse",
                        on: {
                            click : function(){
                                const hash = window.location.hash;
                                const [hashPath, hashQuery] = hash.split('?');
                                const hashParams = new URLSearchParams(hashQuery);
                                hashParams.set('catalogId', t.id);
                                const newHash = `${hashPath}?${hashParams.toString()}`;
                                console.log(newHash);
                                window.location.hash = newHash;
                            }
                        }
                    },[e._v(t.name)])
                    })
                ):e._e()], 1),
                0 == e.pageid ? ((function(){
            let search = document.querySelector('.search')
                    search.placeholder="搜索课程";
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = "/stu/js/search.js";
                    document.head.appendChild(script);
        } )(),
                    r("div", e._l(e.teacherList, (function(t) {

                return r("div", {
                    key: t.id,
                    staticClass: "folder"
                }, [r("div", {
                    staticClass: "folderName",
                    class: {
                        active: e.teacherId === t.teacherUserId
                    },
                    on: {
                        click: function(r) {
                            return e.setTeacherId(t)
                        }
                    }
                }, [r("span", {
                    style: {
                        color: e.TeacherIds.includes(t.teacherUserId) ? "#F00" : "#000"
                    }
                }, [r("a-badge", [e._v(" " + e._s(t.userName) + " (" + e._s(t.subjectName) + ") ")])], 1)]), e.teacherId === t.teacherUserId ? r("Directory", {
                    ref: "dire",
                    refInFor: !0,
                    attrs: {
                        treeId: e.treeId,
                        list: e.list,
                        teacherId: t.teacherUserId
                    }
                }) : e._e()], 1)
            }
            )), 0)) : e._e(), 1 == e.pageid ? r("div", e._l(e.paperTeacherList, (function(t) {
                return r("div", {
                    key: t.id,
                    staticClass: "folder"
                }, [r("div", {
                    staticClass: "folderName",
                    class: {
                        active: e.teacherId === t.teacherUserId
                    },
                    on: {
                        click: function(r) {

                            return e.setPeparTeacherId(t)
                        }
                    }
                }, [r("span", {
                    style: {
                        color: e.TeacherIds.includes(t.teacherUserId) ? "#F00" : "#000"
                    }
                }, [r("a-badge", [e._v(" " + e._s(t.userName) + " (" + e._s(t.subjectName) + ") ")])], 1)]), e.teacherId === t.teacherUserId ? r("DirectoryPepar", {
                    ref: "direpepar",
                    refInFor: !0,
                    attrs: {
                        treeId: e.treeId,
                        list: e.list,
                        teacherId: t.teacherUserId
                    }
                }) : e._e()], 1)
            }
            )), 0) : e._e(), 2 == e.pageid ? r("div", [e.aiTeacherList.length > 0 ? e._l(e.aiTeacherList, (function(t, s) {
                return r("div", {
                    key: t.id + s,
                    staticClass: "folder"
                }, [r("div", {
                    staticClass: "folderName",
                    class: {
                        active: e.teacherId === t.id
                    },
                    on: {
                        click: function(r) {
                            return r.stopPropagation(),
                            e.goAI(t)
                        }
                    }
                }, [r("span", [r("a-badge", [e._v(" " + e._s(t.userName) + " "), 0 != t.id ? r("span", [e._v(" (" + e._s(t.subjectName) + ")")]) : r("span", [e._v(" " + e._s(t.subjectName))])])], 1)])])
            }
            )) : [r("div", {
                staticClass: "loading"
            }, [e._v("加载中...")])]], 2) : e._e(), 3 == e.pageid ? r("div", e._l(e.teacherList, (function(t, s) {
                return r("div", {
                    key: t.id,
                    staticClass: "folder"
                }, [r("div", {
                    staticClass: "folderName",
                    class: {
                        active: e.collect_index === s
                    },
                    on: {
                        click: function(r) {
                            return r.stopPropagation(),
                            e.goCollect(s, t)
                        }
                    }
                }, [e._v(" " + e._s(t.userName) + " (" + e._s(t.subjectName) + ") ")])])
            }
            )), 0) : e._e()])])], 1), r("div", {
                staticClass: "router-view",
                class: {
                    flexWidth: !e.showNav
                }
            }, [r("router-view", {
                attrs: {
                    barWidth: e.barWidth
                }
            })], 1)])
        }
          , i = []
          , a = r(53296)
          , c = r(78616)
          , n = r(1496)
          , o = r(63517)
          , d = r.n(o)
          , h = r(92746)
          , u = r.n(h)
          , l = {
            name: "Setting",
            components: {
                Navigation: () => r.e(66).then(r.bind(r, 38066)),
                Directory: () => Promise.all([r.e(354), r.e(486)]).then(r.bind(r, 61486)),
                DirectoryPepar: () => Promise.all([r.e(354), r.e(841)]).then(r.bind(r, 43841))
            },
            data() {
                return {
                    barWidth: null,
                    showNav: !0,
                    teacherId: "",
                    TeacherIds: [],
                    teacherList: [],
                    paperTeacherList: [],
                    aiTeacherList: [],
                    treeId: [],
                    list: [],
                    dirArr: [],
                    pageid: -1,
                    collect_index: -1
                }
            },
            mounted() {
                let e = this;
                e.$bus.on("changeReddot", (t => {
                    e.TeacherIds = t.teacherIds
                }
                )),
                e.$bus.on("changePaperReddot", (t => {
                    e.TeacherIds = t.teacherIds
                }
                )),
                e.$bus.on("aiTeacherID", (t => {
                    e.teacherId = t
                }
                )),
                this.$nextTick(( () => {
                    this.barWidth = document.querySelector(".router-view").clientWidth - 20,
                    window.onresize = () => ( () => {
                        this.barWidth = document.querySelector(".router-view").clientWidth - 20
                    }
                    )()
                }
                )),
                this.toPage("undefined" == typeof this.$route.query.pageid ? "0" : this.$route.query.pageid)
            },
            watch: {
                $route(e, t) {
                    "/collection" != t.path && (this.collect_index = -1),
                    this.toPage(e.query.pageid)
                }
            },
            methods: {
                toPage(e) {
                    let t = this;
                    if (t.pageid != e)
                        switch (t.pageid = e,
                        t.teacherId = "undefined" == typeof t.$route.query.tid ? "" : parseInt(t.$route.query.tid),
                        console.log(t.teacherId),
                        e) {
                        case "0":
                            this.getTeacherList();
                            break;
                        case "1":
                            this.getExamList();
                            break;
                        case "2":
                            this.getAiList();
                            break;
                        case "3":
                            this.getCollectTag();
                            break
                        }
                },
                getTeacherList() {
                    let e = this;
                    e.teacherList = [],
                    (0,
                    n.y$)().then((e => {
                        localStorage.setItem("reddot", JSON.stringify(e.extra));
                        let t = this
                          , r = t.$route.path;
                        r.indexOf("/course") >= 0 && (0,
                        n.y$)().then((e => {
                            localStorage.setItem("reddot", JSON.stringify(e.extra)),
                            t.$bus.emit("changeReddot", e.extra)
                        }
                        )),
                        r.indexOf("/exam") >= 0 && (0,
                        n.V9)().then((e => {
                            localStorage.setItem("paperreddot", JSON.stringify(e.extra)),
                            t.$bus.emit("changePaperReddot", e.extra)
                        }
                        )),
                        t.TeacherIds = e.extra.teacherIds
                    }
                    )),
                    (0,
                    a.su)().then((t => {
                        e.teacherList = t.extra
                    }
                    ))
                },
                getCollectTag() {
                    this.teacherList = [],
                    (0,
                    c.PC)().then((e => {
                        if (0 == e.code) {
                            let t = [];
                            e.extra.forEach((e => {
                                t.push({
                                    teacherUserId: e.teacherId,
                                    subjectName: e.subjectName,
                                    userName: e.teacherName,
                                    subjectId: e.subjectId
                                })
                            }
                            )),
                            this.teacherList = t
                        }
                    }
                    ))
                },
                getExamList() {
                    let e = this;
                    e.teacherList = [],
                    e.getPaperReddot(),
                    (0,
                    a.i8)().then((t => {
                        0 == t.code && (e.paperTeacherList = t.extra)
                    }
                    ))
                },
                getAiList() {
                    let e = this;
                    e.aiTeacherList = [],
                    (0,
                    a.$5)().then((t => {
                        0 == t.code && (e.aiTeacherList.push({
                            id: 0,
                            subjectName: "学科对比"
                        }),
                        e.aiTeacherList = [...e.aiTeacherList, ...t.extra],
                        u().setItem("aiTeacher", t.extra))
                    }
                    ))
                },
                changeShowSlider() {
                    this.showNav = !this.showNav,
                    this.$nextTick(( () => {
                        this.barWidth = document.querySelector(".router-view").clientWidth - 20
                    }
                    ))
                },
                setTeacherId(e) {
                    sessionStorage.setItem("setTeacher", JSON.stringify(e));
                    let t = e.teacherUserId;
                    if (this.teacherId == t)
                        return this.teacherId = "",
                        this.list = [],
                        this.$store.commit("c/courseInfo", []),
                        this.$store.commit("c/setCourseList", []),
                        this.$store.commit("c/setCourseContent", []),
                        this.$store.commit("c/setCourseId", ""),
                        void this.$store.commit("c/setCourseContentId", "");
                    this.teacherId = t,
                    this.$store.commit("c/courseInfo", []),
                    this.$store.commit("c/setCourseList", []),
                    this.$store.commit("c/setCourseContent", []),
                    this.$store.commit("c/setCourseId", ""),
                    this.$store.commit("c/setCourseContentId", "")
                },
                setPeparTeacherId(e) {
                    sessionStorage.setItem("setTeacher", JSON.stringify(e));
                    let t = e.teacherUserId;
                    this.$bus.emit("setTeacherID", e.teacherUserId),
                    this.teacherId != t ? (this.getPaperReddot(),
                    this.teacherId = t) : this.teacherId = ""
                },
                goCollect(e, t) {
                    let r = this;
                    r.collect_index = e,
                    r.$bus.emit("getCollectItem", t),
                    sessionStorage.setItem("CollectItem-" + t.teacherUserId, JSON.stringify(t)),
                    r.$router.replace({
                        query: d()(this.$route.query, {
                            tid: t.teacherUserId,
                            subid: t.subjectId
                        })
                    })
                },
                goAI(e) {
                    let t = this;
                    this.teacherId = e.id,
                    sessionStorage.setItem("AiItem-" + e.id, JSON.stringify(e)),
                    t.$router.replace({
                        query: d()(this.$route.query, {
                            tid: e.id,
                            subid: e.subjectId,
                            t: 2
                        })
                    })
                },
                getPaperReddot() {
                    let e = this;
                    (0,
                    n.V9)().then((t => {
                        localStorage.setItem("paperreddot", JSON.stringify(t.extra)),
                        e.TeacherIds = t.extra.teacherIds,
                        e.$bus.emit("changePaperReddot", t.extra)
                    }
                    ))
                }
            }
        }
          , I = l
          , g = r(70713)
          , p = (0,
        g.Z)(I, s, i, !1, null, "56a2485d", null)
          , f = p.exports
    },
    78616: function(e, t, r) {
        r.d(t, {
            B$: function() {
                return a
            },
            EP: function() {
                return n
            },
            PC: function() {
                return i
            },
            qI: function() {
                return c
            }
        });
        var s = r(18442);

        function i() {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/collect/catalog`
            }))
        }
        function a(e) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("POST", e), {
                url: `${s.jz}/api/collect/condition`
            }))
        }
        function c(e) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("DELETE", e), {
                url: `${s.jz}/api/collect/entity`
            }))
        }
        function n(e) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/ask/share/${e}/detail`
            }))
        }
    },
    53296: function(e, t, r) {
        r.d(t, {
            $5: function() {
                return o
            },
            R4: function() {
                return a
            },
            i8: function() {
                return n
            },
            su: function() {
                return i
            },
            z4: function() {
                return c
            }
        });
        var s = r(18442);
        function i() {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/student/teacher/entity`
            }))
        }
        function a(e) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/student/catalog/entity/${e}`
            }))
        }
        function c(e) {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/student/paper/catalog/entity/${e}`
            }))
        }
        function n() {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/student/teacher/entity/paper`
            }))
        }
        function o() {
            return (0,
            s.hi)(Object.assign((0,
            s.aP)("GET"), {
                url: `${s.jz}/api/ai/stu/teachers`
            }))
        }
    }
}]);
