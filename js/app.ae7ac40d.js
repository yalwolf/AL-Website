(function() {
    "use strict";
    var e = {
            8088: function(e, n, t) {
                var r = t(9242),
                    o = t(2483),
                    i = t(3396),
                    a = t(7139);
                const u = { id: "header", class: "header-tops" },
                    l = { class: "container" },
                    s = (0, i._)("h1", null, [(0, i._)("span", { class: "mr-auto" }, [(0, i._)("img", { src: "https://q.qlogo.cn/g?b=qq&nk=2893265066&s=640", alt: "", class: "img-fluid" })])], -1),
                    c = { class: "jz ys" },
                    f = (0, i._)("div", { class: "jz ys" }, "————————————", -1),
                    d = { class: "jz ys" },
                    p = (0, i.uE)('<nav class="nav-menu d-none d-lg-block"><ul><li class="active"><a href="#/home">首页</a></li><li><a href="#/links">友情链接</a></li><li><a href="#/me">关于</a></li></ul></nav>', 1),
                    h = { class: "social-links" },
                    m = (0, i._)("i", { class: "zm zm-APIguanli" }, null, -1),
                    v = [m],
                    g = (0, i._)("br", null, null, -1),
                    b = (0, i._)("span", { id: "sitetime" }, null, -1);

                function y(e, n, t, o, m, y) { const _ = (0, i.up)("Footer"); return (0, i.wg)(), (0, i.iD)("header", u, [(0, i._)("div", l, [s, (0, i._)("h2", null, [(0, i._)("div", c, (0, a.zw)(m.title), 1), f, (0, i._)("div", d, (0, a.zw)(m.title_msg), 1)]), p, (0, i._)("div", h, [(0, i._)("a", { href: "", class: "linkedin", onClick: n[0] || (n[0] = (0, r.iM)((e => y._msg()), ["prevent"])), title: "AL-API" }, v)]), g, b]), (0, i.Wm)(_, { msg: "ALWOLF", linkS: "true", color: "white" })]) }
                var _ = t(7178),
                    k = t(7249),
                    w = {
                        data() { return { title: "小狼屋ヾ(≧▽≦*)o!\n", title_msg: "阿狼的个人站(～￣▽￣)～" } },
                        methods: {
                            _msg() {
                                (0, _.z8)({ message: "该站点已停止运营", type: "error" })
                            }
                        },
                        created() { document.title = "阿狼的个人主页,小狼屋-主页" },
                        components: { Footer: k["default"] }
                    },
                    S = t(89);
                const j = (0, S.Z)(w, [
                    ["render", y]
                ]);
                var O = j;
                const C = [{ path: "/", redirect: "/home" }, { path: "/home", component: O }, { path: "/me", component: () => t.e(443).then(t.bind(t, 8507)) }, { path: "/links", component: () => t.e(443).then(t.bind(t, 1482)) }, { path: "/footer", component: () => Promise.resolve().then(t.bind(t, 7249)) }],
                    A = (0, o.p7)({ history: (0, o.r5)(), routes: C });
                var E = A,
                    z = t(7842),
                    P = t(2748);
                t(4415);

                function T(e, n) { const t = (0, i.up)("router-view"); return (0, i.wg)(), (0, i.j4)(t) }
                const L = {},
                    N = (0, S.Z)(L, [
                        ["render", T]
                    ]);
                var x = N;
                const F = (0, r.ri)(x);
                for (const [M, q] of Object.entries(P)) F.component(M, q);
                F.use(z.Z), F.use(E), F.mount("#app")
            },
            7249: function(e, n, t) {
                t.r(n), t.d(n, { default: function() { return f } });
                var r = t(3396),
                    o = t(7139),
                    i = t(9242);

                function a(e, n, t, a, u, l) { return (0, r.wg)(), (0, r.iD)("div", { class: "footer", style: (0, o.j5)("color: " + t.color) }, [(0, r._)("p", null, [(0, r._)("span", { onClick: n[0] || (n[0] = (0, i.iM)((e => l._linkS()), ["prevent"])) }, "©" + (0, o.zw)(t.msg), 1), (0, r.Uk)(" 一只充满“智慧”的狼")])], 4) }
                var u = t(7178),
                    l = {
                        data() { return { msg: "", color: "white", linkS: !1 } },
                        props: { msg: String, linkS: Boolean, color: String },
                        methods: {
                            _linkS() { "true" == this.linkS && this._Msg(), "false" == this.linkS && this._link() },
                            _Msg() {
                                (0, u.z8)({ message: "站点维护中", type: "warning" })
                            },
                            _link() { location.href = "https://alwolf.cn" }
                        }
                    },
                    s = t(89);
                const c = (0, s.Z)(l, [
                    ["render", a]
                ]);
                var f = c
            }
        },
        n = {};

    function t(r) { var o = n[r]; if (void 0 !== o) return o.exports; var i = n[r] = { exports: {} }; return e[r].call(i.exports, i, i.exports, t), i.exports }
    t.m = e,
        function() {
            var e = [];
            t.O = function(n, r, o, i) {
                if (!r) {
                    var a = 1 / 0;
                    for (c = 0; c < e.length; c++) {
                        r = e[c][0], o = e[c][1], i = e[c][2];
                        for (var u = !0, l = 0; l < r.length; l++)(!1 & i || a >= i) && Object.keys(t.O).every((function(e) { return t.O[e](r[l]) })) ? r.splice(l--, 1) : (u = !1, i < a && (a = i));
                        if (u) {
                            e.splice(c--, 1);
                            var s = o();
                            void 0 !== s && (n = s)
                        }
                    }
                    return n
                }
                i = i || 0;
                for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
                e[c] = [r, o, i]
            }
        }(),
        function() { t.n = function(e) { var n = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return t.d(n, { a: n }), n } }(),
        function() { t.d = function(e, n) { for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] }) } }(),
        function() { t.f = {}, t.e = function(e) { return Promise.all(Object.keys(t.f).reduce((function(n, r) { return t.f[r](e, n), n }), [])) } }(),
        function() { t.u = function(e) { return "js/about.9f4bb60e.js" } }(),
        function() { t.miniCssF = function(e) { return "css/about.2a768c5a.css" } }(),
        function() { t.g = function() { if ("object" === typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" === typeof window) return window } }() }(),
        function() { t.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) } }(),
        function() {
            var e = {},
                n = "alwolf-main-two:";
            t.l = function(r, o, i, a) {
                if (e[r]) e[r].push(o);
                else {
                    var u, l;
                    if (void 0 !== i)
                        for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) { var f = s[c]; if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == n + i) { u = f; break } }
                    u || (l = !0, u = document.createElement("script"), u.charset = "utf-8", u.timeout = 120, t.nc && u.setAttribute("nonce", t.nc), u.setAttribute("data-webpack", n + i), u.src = r), e[r] = [o];
                    var d = function(n, t) { u.onerror = u.onload = null, clearTimeout(p); var o = e[r]; if (delete e[r], u.parentNode && u.parentNode.removeChild(u), o && o.forEach((function(e) { return e(t) })), n) return n(t) },
                        p = setTimeout(d.bind(null, void 0, { type: "timeout", target: u }), 12e4);
                    u.onerror = d.bind(null, u.onerror), u.onload = d.bind(null, u.onload), l && document.head.appendChild(u)
                }
            }
        }(),
        function() { t.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) } }(),
        function() { t.p = "/" }(),
        function() {
            if ("undefined" !== typeof document) {
                var e = function(e, n, t, r, o) {
                        var i = document.createElement("link");
                        i.rel = "stylesheet", i.type = "text/css";
                        var a = function(t) {
                            if (i.onerror = i.onload = null, "load" === t.type) r();
                            else {
                                var a = t && ("load" === t.type ? "missing" : t.type),
                                    u = t && t.target && t.target.href || n,
                                    l = new Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
                                l.code = "CSS_CHUNK_LOAD_FAILED", l.type = a, l.request = u, i.parentNode.removeChild(i), o(l)
                            }
                        };
                        return i.onerror = i.onload = a, i.href = n, t ? t.parentNode.insertBefore(i, t.nextSibling) : document.head.appendChild(i), i
                    },
                    n = function(e, n) {
                        for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                            var o = t[r],
                                i = o.getAttribute("data-href") || o.getAttribute("href");
                            if ("stylesheet" === o.rel && (i === e || i === n)) return o
                        }
                        var a = document.getElementsByTagName("style");
                        for (r = 0; r < a.length; r++) { o = a[r], i = o.getAttribute("data-href"); if (i === e || i === n) return o }
                    },
                    r = function(r) {
                        return new Promise((function(o, i) {
                            var a = t.miniCssF(r),
                                u = t.p + a;
                            if (n(a, u)) return o();
                            e(r, u, null, o, i)
                        }))
                    },
                    o = { 143: 0 };
                t.f.miniCss = function(e, n) {
                    var t = { 443: 1 };
                    o[e] ? n.push(o[e]) : 0 !== o[e] && t[e] && n.push(o[e] = r(e).then((function() { o[e] = 0 }), (function(n) { throw delete o[e], n })))
                }
            }
        }(),
        function() {
            var e = { 143: 0 };
            t.f.j = function(n, r) {
                var o = t.o(e, n) ? e[n] : void 0;
                if (0 !== o)
                    if (o) r.push(o[2]);
                    else {
                        var i = new Promise((function(t, r) { o = e[n] = [t, r] }));
                        r.push(o[2] = i);
                        var a = t.p + t.u(n),
                            u = new Error,
                            l = function(r) {
                                if (t.o(e, n) && (o = e[n], 0 !== o && (e[n] = void 0), o)) {
                                    var i = r && ("load" === r.type ? "missing" : r.type),
                                        a = r && r.target && r.target.src;
                                    u.message = "Loading chunk " + n + " failed.\n(" + i + ": " + a + ")", u.name = "ChunkLoadError", u.type = i, u.request = a, o[1](u)
                                }
                            };
                        t.l(a, l, "chunk-" + n, n)
                    }
            }, t.O.j = function(n) { return 0 === e[n] };
            var n = function(n, r) {
                    var o, i, a = r[0],
                        u = r[1],
                        l = r[2],
                        s = 0;
                    if (a.some((function(n) { return 0 !== e[n] }))) { for (o in u) t.o(u, o) && (t.m[o] = u[o]); if (l) var c = l(t) }
                    for (n && n(r); s < a.length; s++) i = a[s], t.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                    return t.O(c)
                },
                r = self["webpackChunkalwolf_main_two"] = self["webpackChunkalwolf_main_two"] || [];
            r.forEach(n.bind(null, 0)), r.push = n.bind(null, r.push.bind(r))
        }();
    var r = t.O(void 0, [998], (function() { return t(8088) }));
    r = t.O(r)
})();
//# sourceMappingURL=app.ae7ac40d.js.map