"use strict";
(self["webpackChunkstu_project"] = self["webpackChunkstu_project"] || []).push([[992], {
    45992: function(s, t, e) {
        e.r(t),
        e.d(t, {
            default: function() {
                return r
            }
        });
        var a = function() {
            var s = this
              , t = s.$createElement
              , e = s._self._c || t;
            return e("div", {
                staticClass: "loginBox"
            }, [e("div", {
                staticClass: "name"
            }, [s._v("魔改新能源系统")]), e("div", {
                staticClass: "box",
                style: {
                    "margin-top": s.isfocus ? "-130px" : "30px"
                }
            }, [e("div", {
                staticClass: "inputBox"
            }, [e("div", {
                staticClass: "centerBox"
            }, [e("div", [e("div", {
                staticClass: "pageName"
            }, [s._v(s._s(s.name))]), s._t("default")], 2)])])]), e("div", {
                staticClass: "loginDescription",
                staticStyle: {
                    "text-align": "center",
                    "color":"white",
                    "font-size": "150%"
                }
            }),e("div", {
                staticClass: "banben"
            }, [s._v("新能源系统版本：3.1.0")])])
        }
          , i = []
          , n = {
            name: "LoginBox",
            props: {
                name: {
                    type: String,
                    required: !0
                }
            },
            data() {
                return {
                    isfocus: !1
                }
            },
            methods: {
                setFocusStatus(s) {
                    this.isfocus = s
                }
            }
        }
          , u = n
          , c = e(70713)
          , o = (0,
        c.Z)(u, a, i, !1, null, "78062491", null)
          , r = o.exports
    }
}]);
