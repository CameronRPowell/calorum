(function(n, t) {
    function hf(n) {
        var t = yt[n] = {};
        return i.each(n.split(h), function(n, i) {
            t[i] = !0
        }),
        t
    }
    function li(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(ci, "-$1").toLowerCase();
            if (u = n.getAttribute(f),
            typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : +u + "" === u ? +u : hi.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else
                u = t
        }
        return u
    }
    function pt(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON")
                return !1;
        return !0
    }
    function a() {
        return !1
    }
    function tt() {
        return !0
    }
    function b(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }
    function nr(n, t) {
        do
            n = n[t];
        while (n && n.nodeType !== 1);
        return n
    }
    function tr(n, t, r) {
        if (t = t || 0,
        i.isFunction(t))
            return i.grep(n, function(n, i) {
                var u = !!t.call(n, i, n);
                return u === r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t === r
            });
        if (typeof t == "string") {
            var u = i.grep(n, function(n) {
                return n.nodeType === 1
            });
            if (df.test(t))
                return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 === r
        })
    }
    function ir(n) {
        var i = rr.split("|")
          , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function oe(n, t) {
        return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
    }
    function hr(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0,
                    o = e[u].length; f < o; f++)
                        i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function cr(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(n),
        r = t.nodeName.toLowerCase(),
        r === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML),
        i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : r === "input" && er.test(n.type) ? (t.defaultChecked = t.checked = n.checked,
        t.value !== n.value && (t.value = n.value)) : r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text),
        t.removeAttribute(i.expando))
    }
    function it(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }
    function lr(n) {
        er.test(n.type) && (n.defaultChecked = n.checked)
    }
    function pr(n, t) {
        if (t in n)
            return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = yr.length; i--; )
            if (t = yr[i] + r,
            t in n)
                return t;
        return u
    }
    function ut(n, t) {
        return n = t || n,
        i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
    }
    function wr(n, t) {
        for (var r, o, e = [], f = 0, s = n.length; f < s; f++)
            (r = n[f],
            r.style) && (e[f] = i._data(r, "olddisplay"),
            t ? (e[f] || r.style.display !== "none" || (r.style.display = ""),
            r.style.display === "" && ut(r) && (e[f] = i._data(r, "olddisplay", gr(r.nodeName)))) : (o = u(r, "display"),
            e[f] || o === "none" || i._data(r, "olddisplay", o)));
        for (f = 0; f < s; f++)
            (r = n[f],
            r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[f] || "" : "none"));
        return n
    }
    function br(n, t, i) {
        var r = le.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function kr(n, t, r, f) {
        for (var e = r === (f ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2)
            r === "margin" && (o += i.css(n, r + c[e], !0)),
            f ? (r === "content" && (o -= parseFloat(u(n, "padding" + c[e])) || 0),
            r !== "margin" && (o -= parseFloat(u(n, "border" + c[e] + "Width")) || 0)) : (o += parseFloat(u(n, "padding" + c[e])) || 0,
            r !== "padding" && (o += parseFloat(u(n, "border" + c[e] + "Width")) || 0));
        return o
    }
    function dr(n, t, r) {
        var f = t === "width" ? n.offsetWidth : n.offsetHeight
          , e = !0
          , o = i.support.boxSizing && i.css(n, "boxSizing") === "border-box";
        if (f <= 0 || f == null) {
            if (f = u(n, t),
            (f < 0 || f == null) && (f = n.style[t]),
            rt.test(f))
                return f;
            e = o && (i.support.boxSizingReliable || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + kr(n, t, r || (o ? "border" : "content"), e) + "px"
    }
    function gr(n) {
        if (ni[n])
            return ni[n];
        var f = i("<" + n + ">").appendTo(r.body)
          , t = f.css("display");
        return f.remove(),
        (t === "none" || t === "") && (v = r.body.appendChild(v || i.extend(r.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })),
        y && v.createElement || (y = (v.contentWindow || v.contentDocument).document,
        y.write("<!doctype html><html><body>"),
        y.close()),
        f = y.body.appendChild(y.createElement(n)),
        t = u(f, "display"),
        r.body.removeChild(v)),
        ni[n] = t,
        t
    }
    function ti(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || we.test(n) ? u(n, i) : ti(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
            });
        else if (r || i.type(t) !== "object")
            u(n, t);
        else
            for (f in t)
                ti(n + "[" + f + "]", t[f], r, u)
    }
    function eu(n) {
        return function(t, r) {
            typeof t != "string" && (r = t,
            t = "*");
            var u, o, f, s = t.toLowerCase().split(h), e = 0, c = s.length;
            if (i.isFunction(r))
                for (; e < c; e++)
                    u = s[e],
                    f = /^\+/.test(u),
                    f && (u = u.substr(1) || "*"),
                    o = n[u] = n[u] || [],
                    o[f ? "unshift" : "push"](r)
        }
    }
    function ft(n, i, r, u, f, e) {
        f = f || i.dataTypes[0];
        e = e || {};
        e[f] = !0;
        for (var o, s = n[f], h = 0, l = s ? s.length : 0, c = n === ii; h < l && (c || !o); h++)
            o = s[h](i, r, u),
            typeof o == "string" && (!c || e[o] ? o = t : (i.dataTypes.unshift(o),
            o = ft(n, i, r, u, o, e)));
        return !c && o || e["*"] || (o = ft(n, i, r, u, "*", e)),
        o
    }
    function ou(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r)
            r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }
    function uo(n, i, r) {
        var o, u, e, s, h = n.contents, f = n.dataTypes, c = n.responseFields;
        for (u in c)
            u in r && (i[c[u]] = r[u]);
        while (f[0] === "*")
            f.shift(),
            o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in h)
                if (h[u] && h[u].test(o)) {
                    f.unshift(u);
                    break
                }
        if (f[0]in r)
            e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                s || (s = u)
            }
            e = e || s
        }
        if (e)
            return e !== f[0] && f.unshift(e),
            r[e]
    }
    function fo(n, t) {
        var i, o, r, e, s = n.dataTypes.slice(), f = s[0], u = {}, h = 0;
        if (n.dataFilter && (t = n.dataFilter(t, n.dataType)),
        s[1])
            for (i in n.converters)
                u[i.toLowerCase()] = n.converters[i];
        for (; r = s[++h]; )
            if (r !== "*") {
                if (f !== "*" && f !== r) {
                    if (i = u[f + " " + r] || u["* " + r],
                    !i)
                        for (o in u)
                            if (e = o.split(" "),
                            e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]],
                            i)) {
                                i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0],
                                s.splice(h--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && n.throws)
                            t = i(t);
                        else
                            try {
                                t = i(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: i ? c : "No conversion from " + f + " to " + r
                                }
                            }
                }
                f = r
            }
        return {
            state: "success",
            data: t
        }
    }
    function cu() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function so() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function lu() {
        return setTimeout(function() {
            st = t
        }, 0),
        st = i.now()
    }
    function ao(n, t) {
        i.each(t, function(t, i) {
            for (var u = (k[t] || []).concat(k["*"]), r = 0, f = u.length; r < f; r++)
                if (u[r].call(n, t, i))
                    return
        })
    }
    function au(n, t, r) {
        var e, o = 0, c = ct.length, f = i.Deferred().always(function() {
            delete h.elem
        }), h = function() {
            for (var o = st || lu(), t = Math.max(0, u.startTime + u.duration - o), i = 1 - (t / u.duration || 0), r = 0, e = u.tweens.length; r < e; r++)
                u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
            i < 1 && e ? t : (f.resolveWith(n, [u]),
            !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: st || lu(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                for (var i = 0, r = t ? u.tweens.length : 0; i < r; i++)
                    u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                this
            }
        }), s = u.props;
        for (vo(s, u.opts.specialEasing); o < c; o++)
            if (e = ct[o].call(u, n, s, u.opts),
            e)
                return e;
        return ao(u, s),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(h, {
            anim: u,
            queue: u.opts.queue,
            elem: n
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function vo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r),
            e = t[f],
            u = n[r],
            i.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            o = i.cssHooks[f],
            o && "expand"in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function yo(n, t, r) {
        var o, u, a, v, h, c, f, w, s = this, e = n.style, y = {}, p = [], l = n.nodeType && ut(n);
        r.queue || (f = i._queueHooks(n, "fx"),
        f.unqueued == null && (f.unqueued = 0,
        w = f.empty.fire,
        f.empty.fire = function() {
            f.unqueued || w()
        }
        ),
        f.unqueued++,
        s.always(function() {
            s.always(function() {
                f.unqueued--;
                i.queue(n, "fx").length || f.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height"in t || "width"in t) && (r.overflow = [e.overflow, e.overflowX, e.overflowY],
        i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (i.support.inlineBlockNeedsLayout && gr(n.nodeName) !== "inline" ? e.zoom = 1 : e.display = "inline-block"));
        r.overflow && (e.overflow = "hidden",
        i.support.shrinkWrapBlocks || s.done(function() {
            e.overflow = r.overflow[0];
            e.overflowX = r.overflow[1];
            e.overflowY = r.overflow[2]
        }));
        for (o in t)
            if (a = t[o],
            ho.exec(a)) {
                if (delete t[o],
                a === (l ? "hide" : "show"))
                    continue;
                p.push(o)
            }
        if (v = p.length,
        v)
            for (h = i._data(n, "fxshow") || i._data(n, "fxshow", {}),
            l ? i(n).show() : s.done(function() {
                i(n).hide()
            }),
            s.done(function() {
                var t;
                i.removeData(n, "fxshow", !0);
                for (t in y)
                    i.style(n, t, y[t])
            }),
            o = 0; o < v; o++)
                u = p[o],
                c = s.createTween(u, l ? h[u] : 0),
                y[u] = h[u] || i.style(n, u),
                u in h || (h[u] = c.start,
                l && (c.end = c.start,
                c.start = u === "width" || u === "height" ? 1 : 0))
    }
    function f(n, t, i, r, u) {
        return new f.prototype.init(n,t,i,r,u)
    }
    function lt(n, t) {
        var r, i = {
            height: n
        }, u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t)
            r = c[u],
            i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function vu(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var ui, d, r = n.document, yu = n.location, pu = n.navigator, wu = n.jQuery, bu = n.$, fi = Array.prototype.push, o = Array.prototype.slice, ei = Array.prototype.indexOf, ku = Object.prototype.toString, at = Object.prototype.hasOwnProperty, vt = String.prototype.trim, i = function(n, t) {
        return new i.fn.init(n,t,ui)
    }, g = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, du = /\S/, h = /\s+/, gu = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, nf = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, oi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, tf = /^[\],:{}\s]*$/, rf = /(?:^|:|,)(?:\s*\[)+/g, uf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ff = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ef = /^-ms-/, of = /-([\da-z])/gi, sf = function(n, t) {
        return (t + "").toUpperCase()
    }, nt = function() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", nt, !1),
        i.ready()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", nt),
        i.ready())
    }, si = {}, yt, hi, ci, w, ot, hu, ri;
    i.fn = i.prototype = {
        constructor: i,
        init: function(n, u, f) {
            var e, o, s;
            if (!n)
                return this;
            if (n.nodeType)
                return this.context = this[0] = n,
                this.length = 1,
                this;
            if (typeof n == "string") {
                if (e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : nf.exec(n),
                e && (e[1] || !u)) {
                    if (e[1])
                        return u = u instanceof i ? u[0] : u,
                        s = u && u.nodeType ? u.ownerDocument || u : r,
                        n = i.parseHTML(e[1], s, !0),
                        oi.test(e[1]) && i.isPlainObject(u) && this.attr.call(n, u, !0),
                        i.merge(this, n);
                    if (o = r.getElementById(e[2]),
                    o && o.parentNode) {
                        if (o.id !== e[2])
                            return f.find(n);
                        this.length = 1;
                        this[0] = o
                    }
                    return this.context = r,
                    this.selector = n,
                    this
                }
                return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
            }
            return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector,
            this.context = n.context),
            i.makeArray(n, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return o.call(this)
        },
        get: function(n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
        },
        pushStack: function(n, t, r) {
            var u = i.merge(this.constructor(), n);
            return u.prevObject = this,
            u.context = this.context,
            t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"),
            u
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        ready: function(n) {
            return i.ready.promise().done(n),
            this
        },
        eq: function(n) {
            return n = +n,
            n === -1 ? this.slice(n) : this.slice(n, n + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments), "slice", o.call(arguments).join(","))
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: fi,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function() {
        var o, e, u, r, s, h, n = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
        for (typeof n == "boolean" && (c = n,
        n = arguments[1] || {},
        f = 2),
        typeof n == "object" || i.isFunction(n) || (n = {}),
        l === f && (n = this,
        --f); f < l; f++)
            if ((o = arguments[f]) != null)
                for (e in o)
                    (u = n[e],
                    r = o[e],
                    n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1,
                    h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {},
                    n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n
    }
    ;
    i.extend({
        noConflict: function(t) {
            return n.$ === i && (n.$ = bu),
            t && n.jQuery === i && (n.jQuery = wu),
            i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body)
                    return setTimeout(i.ready, 1);
                (i.isReady = !0,
                n !== !0 && --i.readyWait > 0) || (d.resolveWith(r, [i]),
                i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray || function(n) {
            return i.type(n) === "array"
        }
        ,
        isWindow: function(n) {
            return n != null && n == n.window
        },
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function(n) {
            return n == null ? String(n) : si[ku.call(n)] || "object"
        },
        isPlainObject: function(n) {
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n))
                return !1;
            try {
                if (n.constructor && !at.call(n, "constructor") && !at.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (u) {
                return !1
            }
            for (var r in n)
                ;
            return r === t || at.call(n, r)
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        error: function(n) {
            throw new Error(n);
        },
        parseHTML: function(n, t, u) {
            var f;
            return !n || typeof n != "string" ? null : (typeof t == "boolean" && (u = t,
            t = 0),
            t = t || r,
            f = oi.exec(n)) ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, u ? null : []),
            i.merge([], (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string")
                return null;
            if (t = i.trim(t),
            n.JSON && n.JSON.parse)
                return n.JSON.parse(t);
            if (tf.test(t.replace(uf, "@").replace(ff, "]").replace(rf, "")))
                return new Function("return " + t)();
            i.error("Invalid JSON: " + t)
        },
        parseXML: function(r) {
            var u, f;
            if (!r || typeof r != "string")
                return null;
            try {
                n.DOMParser ? (f = new DOMParser,
                u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"),
                u.async = "false",
                u.loadXML(r))
            } catch (e) {
                u = t
            }
            return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r),
            u
        },
        noop: function() {},
        globalEval: function(t) {
            t && du.test(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            }
            )(t)
        },
        camelCase: function(n) {
            return n.replace(ef, "ms-").replace(of, sf)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, r, u) {
            var f, e = 0, o = n.length, s = o === t || i.isFunction(n);
            if (u) {
                if (s) {
                    for (f in n)
                        if (r.apply(n[f], u) === !1)
                            break
                } else
                    for (; e < o; )
                        if (r.apply(n[e++], u) === !1)
                            break
            } else if (s) {
                for (f in n)
                    if (r.call(n[f], f, n[f]) === !1)
                        break
            } else
                for (; e < o; )
                    if (r.call(n[e], e, n[e++]) === !1)
                        break;
            return n
        },
        trim: vt && !vt.call("﻿ ") ? function(n) {
            return n == null ? "" : vt.call(n)
        }
        : function(n) {
            return n == null ? "" : (n + "").replace(gu, "")
        }
        ,
        makeArray: function(n, t) {
            var r, u = t || [];
            return n != null && (r = i.type(n),
            n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? fi.call(u, n) : i.merge(u, n)),
            u
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (ei)
                    return ei.call(t, n, i);
                for (r = t.length,
                i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                    if (i in t && t[i] === n)
                        return i
            }
            return -1
        },
        merge: function(n, i) {
            var f = i.length
              , u = n.length
              , r = 0;
            if (typeof f == "number")
                for (; r < f; r++)
                    n[u++] = i[r];
            else
                while (i[r] !== t)
                    n[u++] = i[r++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            var u, f = [], r = 0, e = n.length;
            for (i = !!i; r < e; r++)
                u = !!t(n[r], r),
                i !== u && f.push(n[r]);
            return f
        },
        map: function(n, r, u) {
            var f, h, e = [], s = 0, o = n.length, c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
            if (c)
                for (; s < o; s++)
                    f = r(n[s], s, u),
                    f != null && (e[e.length] = f);
            else
                for (h in n)
                    f = r(n[h], h, u),
                    f != null && (e[e.length] = f);
            return e.concat.apply([], e)
        },
        guid: 1,
        proxy: function(n, r) {
            var f, e, u;
            return (typeof r == "string" && (f = n[r],
            r = n,
            n = f),
            !i.isFunction(n)) ? t : (e = o.call(arguments, 2),
            u = function() {
                return n.apply(r, e.concat(o.call(arguments)))
            }
            ,
            u.guid = n.guid = n.guid || i.guid++,
            u)
        },
        access: function(n, r, u, f, e, o, s) {
            var c, l = u == null, h = 0, a = n.length;
            if (u && typeof u == "object") {
                for (h in u)
                    i.access(n, r, h, u[h], 1, o, f);
                e = 1
            } else if (f !== t) {
                if (c = s === t && i.isFunction(f),
                l && (c ? (c = r,
                r = function(n, t, r) {
                    return c.call(i(n), r)
                }
                ) : (r.call(n, f),
                r = null)),
                r)
                    for (; h < a; h++)
                        r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                e = 1
            }
            return e ? n : l ? r.call(n) : a ? r(n[0], u) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    i.ready.promise = function(t) {
        if (!d)
            if (d = i.Deferred(),
            r.readyState === "complete")
                setTimeout(i.ready, 1);
            else if (r.addEventListener)
                r.addEventListener("DOMContentLoaded", nt, !1),
                n.addEventListener("load", i.ready, !1);
            else {
                r.attachEvent("onreadystatechange", nt);
                n.attachEvent("onload", i.ready);
                var u = !1;
                try {
                    u = n.frameElement == null && r.documentElement
                } catch (e) {}
                u && u.doScroll && function f() {
                    if (!i.isReady) {
                        try {
                            u.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        i.ready()
                    }
                }()
            }
        return d.promise(t)
    }
    ;
    i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(n, t) {
        si["[object " + t + "]"] = t.toLowerCase()
    });
    ui = i(r);
    yt = {};
    i.Callbacks = function(n) {
        n = typeof n == "string" ? yt[n] || hf(n) : i.extend({}, n);
        var f, c, o, l, s, e, r = [], u = !n.once && [], a = function(t) {
            for (f = n.memory && t,
            c = !0,
            e = l || 0,
            l = 0,
            s = r.length,
            o = !0; r && e < s; e++)
                if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                    f = !1;
                    break
                }
            o = !1;
            r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
        }, h = {
            add: function() {
                if (r) {
                    var t = r.length;
                    (function u(t) {
                        i.each(t, function(t, f) {
                            var e = i.type(f);
                            e !== "function" || n.unique && h.has(f) ? f && f.length && e !== "string" && u(f) : r.push(f)
                        })
                    }
                    )(arguments);
                    o ? s = r.length : f && (l = t,
                    a(f))
                }
                return this
            },
            remove: function() {
                return r && i.each(arguments, function(n, t) {
                    for (var u; (u = i.inArray(t, r, u)) > -1; )
                        r.splice(u, 1),
                        o && (u <= s && s--,
                        u <= e && e--)
                }),
                this
            },
            has: function(n) {
                return i.inArray(n, r) > -1
            },
            empty: function() {
                return r = [],
                this
            },
            disable: function() {
                return r = u = f = t,
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return u = t,
                f || h.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(n, t) {
                return t = t || [],
                t = [n, t.slice ? t.slice() : t],
                r && (!c || u) && (o ? u.push(t) : a(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return h
    }
    ;
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
              , f = "pending"
              , r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(r) {
                        i.each(u, function(u, f) {
                            var e = f[0]
                              , o = n[u];
                            t[f[1]](i.isFunction(o) ? function() {
                                var n = o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[e + "With"](this === t ? r : this, [n])
                            }
                            : r[e])
                        });
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return n != null ? i.extend(n, r) : r
                }
            }
              , t = {};
            return r.pipe = r.then,
            i.each(u, function(n, i) {
                var e = i[2]
                  , o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = e.fire;
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0, u = o.call(arguments), r = u.length, e = r !== 1 || n && i.isFunction(n.promise) ? r : 0, f = e === 1 ? n : i.Deferred(), c = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? o.call(arguments) : r;
                    i === s ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            }, s, l, h;
            if (r > 1)
                for (s = new Array(r),
                l = new Array(r),
                h = new Array(r); t < r; t++)
                    u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(c(t, h, u)).fail(f.reject).progress(c(t, l, s)) : --e;
            return e || f.resolveWith(h, u),
            f.promise()
        }
    });
    i.support = function() {
        var u, h, e, c, l, f, o, a, v, s, y, t = r.createElement("div");
        if (t.setAttribute("className", "t"),
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>",
        h = t.getElementsByTagName("*"),
        e = t.getElementsByTagName("a")[0],
        e.style.cssText = "top:1px;float:left;opacity:.5",
        !h || !h.length)
            return {};
        c = r.createElement("select");
        l = c.appendChild(r.createElement("option"));
        f = t.getElementsByTagName("input")[0];
        u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: l.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
            boxModel: r.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        f.checked = !0;
        u.noCloneChecked = f.cloneNode(!0).checked;
        c.disabled = !0;
        u.optDisabled = !l.disabled;
        try {
            delete t.test
        } catch (p) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", y = function() {
            u.noCloneEvent = !1
        }
        ),
        t.cloneNode(!0).fireEvent("onclick"),
        t.detachEvent("onclick", y)),
        f = r.createElement("input"),
        f.value = "t",
        f.setAttribute("type", "radio"),
        u.radioValue = f.value === "t",
        f.setAttribute("checked", "checked"),
        f.setAttribute("name", "t"),
        t.appendChild(f),
        o = r.createDocumentFragment(),
        o.appendChild(t.lastChild),
        u.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked,
        u.appendChecked = f.checked,
        o.removeChild(f),
        o.appendChild(t),
        t.attachEvent)
            for (v in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                a = "on" + v,
                s = a in t,
                s || (t.setAttribute(a, "return;"),
                s = typeof t[a] == "function"),
                u[v + "Bubbles"] = s;
        return i(function() {
            var i, t, f, e, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;", o = r.getElementsByTagName("body")[0];
            o && (i = r.createElement("div"),
            i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            o.insertBefore(i, o.firstChild),
            t = r.createElement("div"),
            i.appendChild(t),
            t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>",
            f = t.getElementsByTagName("td"),
            f[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            s = f[0].offsetHeight === 0,
            f[0].style.display = "",
            f[1].style.display = "none",
            u.reliableHiddenOffsets = s && f[0].offsetHeight === 0,
            t.innerHTML = "",
            t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            u.boxSizing = t.offsetWidth === 4,
            u.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1,
            n.getComputedStyle && (u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%",
            u.boxSizingReliable = (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width === "4px",
            e = r.createElement("div"),
            e.style.cssText = t.style.cssText = h,
            e.style.marginRight = e.style.width = "0",
            t.style.width = "1px",
            t.appendChild(e),
            u.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)),
            typeof t.style.zoom != "undefined" && (t.innerHTML = "",
            t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1",
            u.inlineBlockNeedsLayout = t.offsetWidth === 3,
            t.style.display = "block",
            t.style.overflow = "visible",
            t.innerHTML = "<div><\/div>",
            t.firstChild.style.width = "5px",
            u.shrinkWrapBlocks = t.offsetWidth !== 3,
            i.style.zoom = 1),
            o.removeChild(i),
            i = t = f = e = null)
        }),
        o.removeChild(t),
        h = e = c = l = f = o = t = null,
        u
    }();
    hi = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    ci = /([A-Z])/g;
    i.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !pt(n)
        },
        data: function(n, r, u, f) {
            if (i.acceptData(n)) {
                var s, h, c = i.expando, a = typeof r == "string", l = n.nodeType, o = l ? i.cache : n, e = l ? n[c] : n[c] && c;
                if (e && o[e] && (f || o[e].data) || !a || u !== t)
                    return e || (l ? n[c] = e = i.deletedIds.pop() || i.guid++ : e = c),
                    o[e] || (o[e] = {},
                    l || (o[e].toJSON = i.noop)),
                    (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)),
                    s = o[e],
                    f || (s.data || (s.data = {}),
                    s = s.data),
                    u !== t && (s[i.camelCase(r)] = u),
                    a ? (h = s[r],
                    h == null && (h = s[i.camelCase(r)])) : h = s,
                    h
            }
        },
        removeData: function(n, t, r) {
            if (i.acceptData(n)) {
                var e, o, h, s = n.nodeType, u = s ? i.cache : n, f = s ? n[i.expando] : i.expando;
                if (u[f]) {
                    if (t && (e = r ? u[f] : u[f].data,
                    e)) {
                        for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t),
                        t = t in e ? [t] : t.split(" "))),
                        o = 0,
                        h = t.length; o < h; o++)
                            delete e[t[o]];
                        if (!(r ? pt : i.isEmptyObject)(e))
                            return
                    }
                    (r || (delete u[f].data,
                    pt(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
                }
            }
        },
        _data: function(n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function(n) {
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || t !== !0 && n.getAttribute("classid") === t
        }
    });
    i.fn.extend({
        data: function(n, r) {
            var u, s, h, o, l, e = this[0], c = 0, f = null;
            if (n === t) {
                if (this.length && (f = i.data(e),
                e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (h = e.attributes,
                    l = h.length; c < l; c++)
                        o = h[c].name,
                        o.indexOf("data-") || (o = i.camelCase(o.substring(5)),
                        li(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function() {
                i.data(this, n)
            }) : (u = n.split(".", 2),
            u[1] = u[1] ? "." + u[1] : "",
            s = u[1] + "!",
            i.access(this, function(r) {
                if (r === t)
                    return f = this.triggerHandler("getData" + s, [u[0]]),
                    f === t && e && (f = i.data(e, n),
                    f = li(e, n, f)),
                    f === t && u[1] ? this.data(u[0]) : f;
                u[1] = r;
                this.each(function() {
                    var t = i(this);
                    t.triggerHandler("setData" + s, u);
                    i.data(this, n, r);
                    t.triggerHandler("changeData" + s, u)
                })
            }, null, r, arguments.length > 1, null, !1))
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n)
                return t = (t || "fx") + "queue",
                u = i._data(n, t),
                r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)),
                u || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            };
            u === "inprogress" && (u = r.shift(),
            e--);
            u && (t === "fx" && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i.removeData(n, t + "queue", !0);
                    i.removeData(n, r, !0)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return (typeof n != "string" && (r = n,
            n = "fx",
            u--),
            arguments.length < u) ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n,
            t = t || "fx",
            this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, r) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
                --e || o.resolveWith(f, [f])
            };
            for (typeof n != "string" && (r = n,
            n = t),
            n = n || "fx"; s--; )
                u = i._data(f[s], n + "queueHooks"),
                u && u.empty && (e++,
                u.empty.add(h));
            return h(),
            o.promise(r)
        }
    });
    var s, ai, vi, yi = /[\t\r\n]/g, cf = /\r/g, lf = /^(?:button|input)$/i, af = /^(?:button|input|object|select|textarea)$/i, vf = /^a(?:rea|)$/i, pi = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, wi = i.support.getSetAttribute;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = t;
                    delete this[n]
                } catch (i) {}
            })
        },
        addClass: function(n) {
            var r, f, o, t, e, u, s;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
            if (n && typeof n == "string")
                for (r = n.split(h),
                f = 0,
                o = this.length; f < o; f++)
                    if (t = this[f],
                    t.nodeType === 1)
                        if (t.className || r.length !== 1) {
                            for (e = " " + t.className + " ",
                            u = 0,
                            s = r.length; u < s; u++)
                                e.indexOf(" " + r[u] + " ") < 0 && (e += r[u] + " ");
                            t.className = i.trim(e)
                        } else
                            t.className = n;
            return this
        },
        removeClass: function(n) {
            var e, r, u, f, s, o, c;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
            if (n && typeof n == "string" || n === t)
                for (e = (n || "").split(h),
                o = 0,
                c = this.length; o < c; o++)
                    if (u = this[o],
                    u.nodeType === 1 && u.className) {
                        for (r = (" " + u.className + " ").replace(yi, " "),
                        f = 0,
                        s = e.length; f < s; f++)
                            while (r.indexOf(" " + e[f] + " ") >= 0)
                                r = r.replace(" " + e[f] + " ", " ");
                        u.className = n ? i.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n
              , u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if (r === "string")
                    for (var f, s = 0, o = i(this), e = t, c = n.split(h); f = c[s++]; )
                        e = u ? e : !o.hasClass(f),
                        o[e ? "addClass" : "removeClass"](f);
                else
                    (r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className),
                    this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(yi, " ").indexOf(i) >= 0)
                    return !0;
            return !1
        },
        val: function(n) {
            var r, u, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n),
            this.each(function(u) {
                var f, o = i(this);
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n,
                f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                    return n == null ? "" : n + ""
                })),
                r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                r && "set"in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()],
            r && "get"in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value,
            typeof u == "string" ? u.replace(cf, "") : u == null ? "" : u) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function(n) {
                    var o, r, h, t, u = n.selectedIndex, s = [], f = n.options, e = n.type === "select-one";
                    if (u < 0)
                        return null;
                    for (r = e ? u : 0,
                    h = e ? u + 1 : f.length; r < h; r++)
                        if (t = f[r],
                        t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(),
                            e)
                                return o;
                            s.push(o)
                        }
                    return e && !s.length && f.length ? i(f[u]).val() : s
                },
                set: function(n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function() {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }),
                    r.length || (n.selectedIndex = -1),
                    r
                }
            }
        },
        attrFn: {},
        attr: function(n, r, u, f) {
            var e, o, h, c = n.nodeType;
            if (n && c !== 3 && c !== 8 && c !== 2) {
                if (f && i.isFunction(i.fn[r]))
                    return i(n)[r](u);
                if (typeof n.getAttribute == "undefined")
                    return i.prop(n, r, u);
                if (h = c !== 1 || !i.isXMLDoc(n),
                h && (r = r.toLowerCase(),
                o = i.attrHooks[r] || (pi.test(r) ? ai : s)),
                u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return o && "set"in o && h && (e = o.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""),
                    u)
                }
                return o && "get"in o && h && (e = o.get(n, r)) !== null ? e : (e = n.getAttribute(r),
                e === null ? t : e)
            }
        },
        removeAttr: function(n, t) {
            var u, f, r, e, o = 0;
            if (t && n.nodeType === 1)
                for (f = t.split(h); o < f.length; o++)
                    r = f[o],
                    r && (u = i.propFix[r] || r,
                    e = pi.test(r),
                    e || i.attr(n, r, ""),
                    n.removeAttribute(wi ? r : u),
                    e && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (lf.test(n.nodeName) && n.parentNode)
                        i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t),
                        r && (n.value = r),
                        t
                    }
                }
            },
            value: {
                get: function(n, t) {
                    return s && i.nodeName(n, "button") ? s.get(n, t) : t in n ? n.value : null
                },
                set: function(n, t, r) {
                    if (s && i.nodeName(n, "button"))
                        return s.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2)
                return s = o !== 1 || !i.isXMLDoc(n),
                s && (r = i.propFix[r] || r,
                f = i.propHooks[r]),
                u !== t ? f && "set"in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get"in f && (e = f.get(n, r)) !== null ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : af.test(n.nodeName) || vf.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    });
    ai = {
        get: function(n, r) {
            var u, f = i.prop(n, r);
            return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function(n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r,
            u in n && (n[u] = !0),
            n.setAttribute(r, r.toLowerCase())),
            r
        }
    };
    wi || (vi = {
        name: !0,
        id: !0,
        coords: !0
    },
    s = i.valHooks.button = {
        get: function(n, i) {
            var r;
            return r = n.getAttributeNode(i),
            r && (vi[i] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i),
            n.setAttributeNode(u)),
            u.value = t + ""
        }
    },
    i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function(n, i) {
                if (i === "")
                    return n.setAttribute(t, "auto"),
                    i
            }
        })
    }),
    i.attrHooks.contenteditable = {
        get: s.get,
        set: function(n, t, i) {
            t === "" && (t = "false");
            s.set(n, t, i)
        }
    });
    i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function(n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function(n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    });
    i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }));
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.support.checkOn || i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            get: function(n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function(n, t) {
                if (i.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var wt = /^(?:textarea|input|select)$/i
      , bi = /^([^\.]*|)(?:\.(.+)|)$/
      , yf = /(?:^|\s)hover(\.\S+|)\b/
      , pf = /^key/
      , wf = /^(?:mouse|contextmenu)|click/
      , ki = /^(?:focusinfocus|focusoutblur)$/
      , di = function(n) {
        return i.event.special.hover ? n : n.replace(yf, "mouseenter$1 mouseleave$1")
    };
    i.event = {
        add: function(n, r, u, f, e) {
            var a, s, v, y, p, o, b, l, w, c, h;
            if (n.nodeType !== 3 && n.nodeType !== 8 && r && u && (a = i._data(n))) {
                for (u.handler && (w = u,
                u = w.handler,
                e = w.selector),
                u.guid || (u.guid = i.guid++),
                v = a.events,
                v || (a.events = v = {}),
                s = a.handle,
                s || (a.handle = s = function(n) {
                    return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(s.elem, arguments) : t
                }
                ,
                s.elem = n),
                r = i.trim(di(r)).split(" "),
                y = 0; y < r.length; y++)
                    p = bi.exec(r[y]) || [],
                    o = p[1],
                    b = (p[2] || "").split(".").sort(),
                    h = i.event.special[o] || {},
                    o = (e ? h.delegateType : h.bindType) || o,
                    h = i.event.special[o] || {},
                    l = i.extend({
                        type: o,
                        origType: p[1],
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: b.join(".")
                    }, w),
                    c = v[o],
                    c || (c = v[o] = [],
                    c.delegateCount = 0,
                    h.setup && h.setup.call(n, f, b, s) !== !1 || (n.addEventListener ? n.addEventListener(o, s, !1) : n.attachEvent && n.attachEvent("on" + o, s))),
                    h.add && (h.add.call(n, l),
                    l.handler.guid || (l.handler.guid = u.guid)),
                    e ? c.splice(c.delegateCount++, 0, l) : c.push(l),
                    i.event.global[o] = !0;
                n = null
            }
        },
        global: {},
        remove: function(n, t, r, u, f) {
            var l, p, e, w, h, b, a, v, c, o, s, y = i.hasData(n) && i._data(n);
            if (y && (v = y.events)) {
                for (t = i.trim(di(t || "")).split(" "),
                l = 0; l < t.length; l++) {
                    if (p = bi.exec(t[l]) || [],
                    e = w = p[1],
                    h = p[2],
                    !e) {
                        for (e in v)
                            i.event.remove(n, e + t[l], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {},
                    e = (u ? c.delegateType : c.bindType) || e,
                    o = v[e] || [],
                    b = o.length,
                    h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    a = 0; a < o.length; a++)
                        s = o[a],
                        (f || w === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1),
                        s.selector && o.delegateCount--,
                        c.remove && c.remove.call(n, s));
                    o.length === 0 && b !== o.length && (c.teardown && c.teardown.call(n, h, y.handle) !== !1 || i.removeEvent(n, e, y.handle),
                    delete v[e])
                }
                i.isEmptyObject(v) && (delete y.handle,
                i.removeData(n, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(u, f, e, o) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var w, d, c, h, l, v, a, y, p, k, s = u.type || u, b = [];
                if (!ki.test(s + i.event.triggered) && (s.indexOf("!") >= 0 && (s = s.slice(0, -1),
                d = !0),
                s.indexOf(".") >= 0 && (b = s.split("."),
                s = b.shift(),
                b.sort()),
                e && !i.event.customEvent[s] || i.event.global[s])) {
                    if (u = typeof u == "object" ? u[i.expando] ? u : new i.Event(s,u) : new i.Event(s),
                    u.type = s,
                    u.isTrigger = !0,
                    u.exclusive = d,
                    u.namespace = b.join("."),
                    u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    v = s.indexOf(":") < 0 ? "on" + s : "",
                    !e) {
                        w = i.cache;
                        for (c in w)
                            w[c].events && w[c].events[s] && i.event.trigger(u, f, w[c].handle.elem, !0);
                        return
                    }
                    if (u.result = t,
                    u.target || (u.target = e),
                    f = f != null ? i.makeArray(f) : [],
                    f.unshift(u),
                    a = i.event.special[s] || {},
                    !a.trigger || a.trigger.apply(e, f) !== !1) {
                        if (p = [[e, a.bindType || s]],
                        !o && !a.noBubble && !i.isWindow(e)) {
                            for (k = a.delegateType || s,
                            h = ki.test(k + s) ? e : e.parentNode,
                            l = e; h; h = h.parentNode)
                                p.push([h, k]),
                                l = h;
                            l === (e.ownerDocument || r) && p.push([l.defaultView || l.parentWindow || n, k])
                        }
                        for (c = 0; c < p.length && !u.isPropagationStopped(); c++)
                            h = p[c][0],
                            u.type = p[c][1],
                            y = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"),
                            y && y.apply(h, f),
                            y = v && h[v],
                            y && i.acceptData(h) && y.apply && y.apply(h, f) === !1 && u.preventDefault();
                        return u.type = s,
                        o || u.isDefaultPrevented() || a._default && a._default.apply(e.ownerDocument, f) !== !1 || s === "click" && i.nodeName(e, "a") || !i.acceptData(e) || v && e[s] && (s !== "focus" && s !== "blur" || u.target.offsetWidth !== 0) && !i.isWindow(e) && (l = e[v],
                        l && (e[v] = null),
                        i.event.triggered = s,
                        e[s](),
                        i.event.triggered = t,
                        l && (e[v] = l)),
                        u.result
                    }
                }
            }
        },
        dispatch: function(r) {
            r = i.event.fix(r || n.event);
            var f, c, e, l, a, h, v, u, s, y = (i._data(this, "events") || {})[r.type] || [], p = y.delegateCount, k = o.call(arguments), d = !r.exclusive && !r.namespace, w = i.event.special[r.type] || {}, b = [];
            if (k[0] = r,
            r.delegateTarget = this,
            !w.preDispatch || w.preDispatch.call(this, r) !== !1) {
                if (p && !(r.button && r.type === "click"))
                    for (e = r.target; e != this; e = e.parentNode || this)
                        if (e.disabled !== !0 || r.type !== "click") {
                            for (a = {},
                            v = [],
                            f = 0; f < p; f++)
                                u = y[f],
                                s = u.selector,
                                a[s] === t && (a[s] = u.needsContext ? i(s, this).index(e) >= 0 : i.find(s, this, null, [e]).length),
                                a[s] && v.push(u);
                            v.length && b.push({
                                elem: e,
                                matches: v
                            })
                        }
                for (y.length > p && b.push({
                    elem: this,
                    matches: y.slice(p)
                }),
                f = 0; f < b.length && !r.isPropagationStopped(); f++)
                    for (h = b[f],
                    r.currentTarget = h.elem,
                    c = 0; c < h.matches.length && !r.isImmediatePropagationStopped(); c++)
                        u = h.matches[c],
                        (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data,
                        r.handleObj = u,
                        l = ((i.event.special[u.origType] || {}).handle || u.handler).apply(h.elem, k),
                        l !== t && (r.result = l,
                        l === !1 && (r.preventDefault(),
                        r.stopPropagation())));
                return w.postDispatch && w.postDispatch.call(this, r),
                r.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var o, u, f, e = i.button, s = i.fromElement;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r,
                u = o.documentElement,
                f = o.body,
                n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0),
                n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)),
                !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s),
                n.which || e === t || (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0),
                n
            }
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var f, e, t = n, u = i.event.fixHooks[n.type] || {}, o = u.props ? this.props.concat(u.props) : this.props;
            for (n = i.Event(t),
            f = o.length; f; )
                e = o[--f],
                n[e] = t[e];
            return n.target || (n.target = t.srcElement || r),
            n.target.nodeType === 3 && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            u.filter ? u.filter(n, t) : n
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r)
                },
                teardown: function(n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.event.handle = i.event.dispatch;
    i.removeEvent = r.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }
    : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] == "undefined" && (n[r] = null),
        n.detachEvent(r, i))
    }
    ;
    i.Event = function(n, t) {
        if (!(this instanceof i.Event))
            return new i.Event(n,t);
        n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? tt : a) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    }
    ;
    i.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = tt;
            var n = this.originalEvent;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = tt;
            var n = this.originalEvent;
            n && (n.stopPropagation && n.stopPropagation(),
            n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt;
            this.stopPropagation()
        },
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var f, e = this, r = n.relatedTarget, u = n.handleObj, o = u.selector;
                return r && (r === e || i.contains(e, r)) || (n.type = u.origType,
                f = u.handler.apply(this, arguments),
                n.type = t),
                f
            }
        }
    });
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.add(this, "click._submit keypress._submit", function(n) {
                var u = n.target
                  , r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !i._data(r, "_submit_attached") && (i.event.add(r, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }),
                i._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble,
            this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.remove(this, "._submit")
        }
    });
    i.support.changeBubbles || (i.event.special.change = {
        setup: function() {
            if (wt.test(this.nodeName))
                return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
                    n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                i.event.add(this, "click._change", function(n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1);
                    i.event.simulate("change", this, n, !0)
                })),
                !1;
            i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                wt.test(t.nodeName) && !i._data(t, "_change_attached") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }),
                i._data(t, "_change_attached", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            !wt.test(this.nodeName)
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = 0
          , f = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                u++ == 0 && r.addEventListener(n, f, !0)
            },
            teardown: function() {
                --u == 0 && r.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r,
                r = t);
                for (s in n)
                    this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r,
            u = r = t) : f == null && (typeof r == "string" ? (f = u,
            u = t) : (f = u,
            u = r,
            r = t)),
            f === !1)
                f = a;
            else if (!f)
                return this;
            return e === 1 && (o = f,
            f = function(n) {
                return i().off(n),
                o.apply(this, arguments)
            }
            ,
            f.guid = o.guid || (o.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj)
                return f = n.handleObj,
                i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler),
                this;
            if (typeof n == "object") {
                for (e in n)
                    this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u = r,
            r = t),
            u === !1 && (u = a),
            this.each(function() {
                i.event.remove(this, n, u, r)
            })
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        live: function(n, t, r) {
            i(this.context).on(n, this.selector, t, r);
            return this
        },
        die: function(n, t) {
            return i(this.context).off(n, this.selector || "**", t),
            this
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            if (this[0])
                return i.event.trigger(n, t, this[0], !0)
        },
        toggle: function(n) {
            var t = arguments
              , u = n.guid || i.guid++
              , r = 0
              , f = function(u) {
                var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
                return i._data(this, "lastToggle" + n.guid, f + 1),
                u.preventDefault(),
                t[f].apply(this, arguments) || !1
            };
            for (f.guid = u; r < t.length; )
                t[r++].guid = u;
            return this.click(f)
        },
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return i == null && (i = n,
            n = null),
            arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
        ;
        pf.test(t) && (i.event.fixHooks[t] = i.event.keyHooks);
        wf.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
    }),
    function(n, t) {
        function r(n, t, i, r) {
            i = i || [];
            t = t || s;
            var e, u, o, f, h = t.nodeType;
            if (!n || typeof n != "string")
                return i;
            if (h !== 1 && h !== 9)
                return [];
            if (o = g(t),
            !o && !r && (e = wi.exec(n)))
                if (f = e[1]) {
                    if (h === 9)
                        if (u = t.getElementById(f),
                        u && u.parentNode) {
                            if (u.id === f)
                                return i.push(u),
                                i
                        } else
                            return i;
                    else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && dt(t, u) && u.id === f)
                        return i.push(u),
                        i
                } else {
                    if (e[2])
                        return p.apply(i, w.call(t.getElementsByTagName(n), 0)),
                        i;
                    if ((f = e[3]) && oi && t.getElementsByClassName)
                        return p.apply(i, w.call(t.getElementsByClassName(f), 0)),
                        i
                }
            return kt(n.replace(it, "$1"), t, i, r, o)
        }
        function k(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }
        function si(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }
        function y(n) {
            return h(function(t) {
                return t = +t,
                h(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ut(n, t, i) {
            if (n === t)
                return i;
            for (var r = n.nextSibling; r; ) {
                if (r === t)
                    return -1;
                r = r.nextSibling
            }
            return 1
        }
        function ft(n, t) {
            var o, f, c, h, i, l, a, v = ri[e][n];
            if (v)
                return t ? 0 : v.slice(0);
            for (i = n,
            l = [],
            a = u.preFilter; i; ) {
                (!o || (f = vi.exec(i))) && (f && (i = i.slice(f[0].length)),
                l.push(c = []));
                o = !1;
                (f = yi.exec(i)) && (c.push(o = new ni(f.shift())),
                i = i.slice(o.length),
                o.type = f[0].replace(it, " "));
                for (h in u.filter)
                    (f = rt[h].exec(i)) && (!a[h] || (f = a[h](f, s, !0))) && (c.push(o = new ni(f.shift())),
                    i = i.slice(o.length),
                    o.type = h,
                    o.matches = f);
                if (!o)
                    break
            }
            return t ? i.length : i ? r.error(n) : ri(n, l).slice(0)
        }
        function yt(n, t, i) {
            var r = t.dir
              , u = i && t.dir === "parentNode"
              , f = ci++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (u || t.nodeType === 1)
                        return n(t, i, f)
            }
            : function(t, i, o) {
                if (o) {
                    while (t = t[r])
                        if ((u || t.nodeType === 1) && n(t, i, o))
                            return t
                } else
                    for (var s, h = tt + " " + f + " ", c = h + ot; t = t[r]; )
                        if (u || t.nodeType === 1) {
                            if ((s = t[e]) === c)
                                return t.sizset;
                            if (typeof s == "string" && s.indexOf(h) === 0) {
                                if (t.sizset)
                                    return t
                            } else {
                                if (t[e] = c,
                                n(t, i, o))
                                    return t.sizset = !0,
                                    t;
                                t.sizset = !1
                            }
                        }
            }
        }
        function pt(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function et(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e),
                h && t.push(f));
            return o
        }
        function wt(n, t, i, r, u, f) {
            return r && !r[e] && (r = wt(r)),
            u && !u[e] && (u = wt(u, f)),
            h(function(f, e, o, s) {
                if (!f || !u) {
                    var c, l, a, v = [], y = [], b = e.length, k = f || rr(t || "*", o.nodeType ? [o] : o, [], f), w = n && (f || !t) ? et(k, v, n, o, s) : k, h = i ? u || (f ? n : b || r) ? [] : e : w;
                    if (i && i(w, h, o, s),
                    r)
                        for (a = et(h, y),
                        r(a, [], o, s),
                        c = a.length; c--; )
                            (l = a[c]) && (h[y[c]] = !(w[y[c]] = l));
                    if (f)
                        for (c = n && h.length; c--; )
                            (l = h[c]) && (f[v[c]] = !(e[v[c]] = l));
                    else
                        h = et(h === e ? h.splice(b, h.length) : h),
                        u ? u(null, e, h, s) : p.apply(e, h)
                }
            })
        }
        function bt(n) {
            for (var s, r, i, o = n.length, h = u.relative[n[0].type], c = h || u.relative[" "], t = h ? 1 : 0, l = yt(function(n) {
                return n === s
            }, c, !0), a = yt(function(n) {
                return ti.call(s, n) > -1
            }, c, !0), f = [function(n, t, i) {
                return !h && (i || t !== nt) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
            }
            ]; t < o; t++)
                if (r = u.relative[n[t].type])
                    f = [yt(pt(f), r)];
                else {
                    if (r = u.filter[n[t].type].apply(null, n[t].matches),
                    r[e]) {
                        for (i = ++t; i < o; i++)
                            if (u.relative[n[i].type])
                                break;
                        return wt(t > 1 && pt(f), t > 1 && n.slice(0, t - 1).join("").replace(it, "$1"), r, t < i && bt(n.slice(t, i)), i < o && bt(n = n.slice(i)), i < o && n.join(""))
                    }
                    f.push(r)
                }
            return pt(f)
        }
        function ir(n, t) {
            var f = t.length > 0
              , e = n.length > 0
              , i = function(o, h, c, l, a) {
                var y, b, k, w = [], d = 0, v = "0", g = o && [], it = a != null, rt = nt, ft = o || e && u.find.TAG("*", a && h.parentNode || h), ut = tt += rt == null ? 1 : Math.E;
                for (it && (nt = h !== s && h,
                ot = i.el); (y = ft[v]) != null; v++) {
                    if (e && y) {
                        for (b = 0; k = n[b]; b++)
                            if (k(y, h, c)) {
                                l.push(y);
                                break
                            }
                        it && (tt = ut,
                        ot = ++i.el)
                    }
                    f && ((y = !k && y) && d--,
                    o && g.push(y))
                }
                if (d += v,
                f && v !== d) {
                    for (b = 0; k = t[b]; b++)
                        k(g, w, h, c);
                    if (o) {
                        if (d > 0)
                            while (v--)
                                g[v] || w[v] || (w[v] = li.call(l));
                        w = et(w)
                    }
                    p.apply(l, w);
                    it && !o && w.length > 0 && d + t.length > 1 && r.uniqueSort(l)
                }
                return it && (tt = ut,
                nt = rt),
                g
            };
            return i.el = 0,
            f ? h(i) : i
        }
        function rr(n, t, i, u) {
            for (var f = 0, e = t.length; f < e; f++)
                r(n, t[f], i, u);
            return i
        }
        function kt(n, t, i, r, f) {
            var o, e, s, c, l, h = ft(n), a = h.length;
            if (!r && h.length === 1) {
                if (e = h[0] = h[0].slice(0),
                e.length > 2 && (s = e[0]).type === "ID" && t.nodeType === 9 && !f && u.relative[e[1].type]) {
                    if (t = u.find.ID(s.matches[0].replace(v, ""), t, f)[0],
                    !t)
                        return i;
                    n = n.slice(e.shift().length)
                }
                for (o = rt.POS.test(n) ? -1 : e.length - 1; o >= 0; o--) {
                    if (s = e[o],
                    u.relative[c = s.type])
                        break;
                    if ((l = u.find[c]) && (r = l(s.matches[0].replace(v, ""), vt.test(e[0].type) && t.parentNode || t, f))) {
                        if (e.splice(o, 1),
                        n = r.length && e.join(""),
                        !n)
                            return p.apply(i, w.call(r, 0)),
                            i;
                        break
                    }
                }
            }
            return ht(n, h)(r, t, f, i, vt.test(n)),
            i
        }
        function hi() {}
        var ot, st, u, d, g, dt, ht, ct, b, nt, gt = !0, c = "undefined", e = ("sizcache" + Math.random()).replace(".", ""), ni = String, s = n.document, o = s.documentElement, tt = 0, ci = 0, li = [].pop, p = [].push, w = [].slice, ti = [].indexOf || function(n) {
            for (var t = 0, i = this.length; t < i; t++)
                if (this[t] === n)
                    return t;
            return -1
        }
        , h = function(n, t) {
            return n[e] = t == null || t,
            n
        }, lt = function() {
            var n = {}
              , t = [];
            return h(function(i, r) {
                return t.push(i) > u.cacheLength && delete n[t.shift()],
                n[i] = r
            }, n)
        }, ii = lt(), ri = lt(), ui = lt(), f = "[\\x20\\t\\r\\n\\f]", a = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", ai = a.replace("w", "w#"), fi = "\\[" + f + "*(" + a + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ai + ")|)|)" + f + "*\\]", at = ":(" + a + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + fi + ")|[^:]|\\\\.)*|.*))\\)|)", ei = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)", it = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$","g"), vi = new RegExp("^" + f + "*," + f + "*"), yi = new RegExp("^" + f + "*([\\x20\\t\\r\\n\\f>+~])" + f + "*"), pi = new RegExp(at), wi = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, vt = /[\x20\t\r\n\f]*[+~]/, bi = /h\d/i, ki = /input|select|textarea|button/i, v = /\\(?!\\)/g, rt = {
            ID: new RegExp("^#(" + a + ")"),
            CLASS: new RegExp("^\\.(" + a + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + a + ")['\"]?\\]"),
            TAG: new RegExp("^(" + a.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + fi),
            PSEUDO: new RegExp("^" + at),
            POS: new RegExp(ei,"i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)","i"),
            needsContext: new RegExp("^" + f + "*[>+~]|" + ei,"i")
        }, l = function(n) {
            var t = s.createElement("div");
            try {
                return n(t)
            } catch (i) {
                return !1
            } finally {
                t = null
            }
        }, di = l(function(n) {
            return n.appendChild(s.createComment("")),
            !n.getElementsByTagName("*").length
        }), gi = l(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            n.firstChild && typeof n.firstChild.getAttribute !== c && n.firstChild.getAttribute("href") === "#"
        }), nr = l(function(n) {
            n.innerHTML = "<select><\/select>";
            var t = typeof n.lastChild.getAttribute("multiple");
            return t !== "boolean" && t !== "string"
        }), oi = l(function(n) {
            return (n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>",
            !n.getElementsByClassName || !n.getElementsByClassName("e").length) ? !1 : (n.lastChild.className = "e",
            n.getElementsByClassName("e").length === 2)
        }), tr = l(function(n) {
            n.id = e + 0;
            n.innerHTML = "<a name='" + e + "'><\/a><div name='" + e + "'><\/div>";
            o.insertBefore(n, o.firstChild);
            var t = s.getElementsByName && s.getElementsByName(e).length === 2 + s.getElementsByName(e + 0).length;
            return st = !s.getElementById(e),
            o.removeChild(n),
            t
        });
        try {
            w.call(o.childNodes, 0)[0].nodeType
        } catch (ur) {
            w = function(n) {
                for (var t, i = []; t = this[n]; n++)
                    i.push(t);
                return i
            }
        }
        r.matches = function(n, t) {
            return r(n, null, null, t)
        }
        ;
        r.matchesSelector = function(n, t) {
            return r(t, null, null, [n]).length > 0
        }
        ;
        d = r.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string")
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += d(n)
                } else if (t === 3 || t === 4)
                    return n.nodeValue
            } else
                for (; r = n[u]; u++)
                    i += d(r);
            return i
        }
        ;
        g = r.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }
        ;
        dt = r.contains = o.contains ? function(n, t) {
            var r = n.nodeType === 9 ? n.documentElement : n
              , i = t && t.parentNode;
            return n === i || !!(i && i.nodeType === 1 && r.contains && r.contains(i))
        }
        : o.compareDocumentPosition ? function(n, t) {
            return t && !!(n.compareDocumentPosition(t) & 16)
        }
        : function(n, t) {
            while (t = t.parentNode)
                if (t === n)
                    return !0;
            return !1
        }
        ;
        r.attr = function(n, t) {
            var i, r = g(n);
            return (r || (t = t.toLowerCase()),
            i = u.attrHandle[t]) ? i(n) : r || nr ? n.getAttribute(t) : (i = n.getAttributeNode(t),
            i ? typeof n[t] == "boolean" ? n[t] ? t : null : i.specified ? i.value : null : null)
        }
        ;
        u = r.selectors = {
            cacheLength: 50,
            createPseudo: h,
            match: rt,
            attrHandle: gi ? {} : {
                href: function(n) {
                    return n.getAttribute("href", 2)
                },
                type: function(n) {
                    return n.getAttribute("type")
                }
            },
            find: {
                ID: st ? function(n, t, i) {
                    if (typeof t.getElementById !== c && !i) {
                        var r = t.getElementById(n);
                        return r && r.parentNode ? [r] : []
                    }
                }
                : function(n, i, r) {
                    if (typeof i.getElementById !== c && !r) {
                        var u = i.getElementById(n);
                        return u ? u.id === n || typeof u.getAttributeNode !== c && u.getAttributeNode("id").value === n ? [u] : t : []
                    }
                }
                ,
                TAG: di ? function(n, t) {
                    if (typeof t.getElementsByTagName !== c)
                        return t.getElementsByTagName(n)
                }
                : function(n, t) {
                    var f = t.getElementsByTagName(n), i, r, u;
                    if (n === "*") {
                        for (r = [],
                        u = 0; i = f[u]; u++)
                            i.nodeType === 1 && r.push(i);
                        return r
                    }
                    return f
                }
                ,
                NAME: tr && function(n, t) {
                    if (typeof t.getElementsByName !== c)
                        return t.getElementsByName(name)
                }
                ,
                CLASS: oi && function(n, t, i) {
                    if (typeof t.getElementsByClassName !== c && !i)
                        return t.getElementsByClassName(n)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(v, ""),
                    n[3] = (n[4] || n[5] || "").replace(v, ""),
                    n[2] === "~=" && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    n[1] === "nth" ? (n[2] || r.error(n[0]),
                    n[3] = +(n[3] ? n[4] + (n[5] || 1) : 2 * (n[2] === "even" || n[2] === "odd")),
                    n[4] = +(n[6] + n[7] || n[2] === "odd")) : n[2] && r.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var t, i;
                    return rt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[3] : (t = n[4]) && (pi.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (t = t.slice(0, i),
                    n[0] = n[0].slice(0, i)),
                    n[2] = t),
                    n.slice(0, 3))
                }
            },
            filter: {
                ID: st ? function(n) {
                    return n = n.replace(v, ""),
                    function(t) {
                        return t.getAttribute("id") === n
                    }
                }
                : function(n) {
                    return n = n.replace(v, ""),
                    function(t) {
                        var i = typeof t.getAttributeNode !== c && t.getAttributeNode("id");
                        return i && i.value === n
                    }
                }
                ,
                TAG: function(n) {
                    return n === "*" ? function() {
                        return !0
                    }
                    : (n = n.replace(v, "").toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === n
                    }
                    )
                },
                CLASS: function(n) {
                    var t = ii[e][n];
                    return t || (t = ii(n, new RegExp("(^|" + f + ")" + n + "(" + f + "|$)"))),
                    function(n) {
                        return t.test(n.className || typeof n.getAttribute !== c && n.getAttribute("class") || "")
                    }
                },
                ATTR: function(n, t, i) {
                    return function(u) {
                        var f = r.attr(u, n);
                        return f == null ? t === "!=" : t ? (f += "",
                        t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.substr(f.length - i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.substr(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r) {
                    return n === "nth" ? function(n) {
                        var t, u, f = n.parentNode;
                        if (i === 1 && r === 0)
                            return !0;
                        if (f)
                            for (u = 0,
                            t = f.firstChild; t; t = t.nextSibling)
                                if (t.nodeType === 1 && (u++,
                                n === t))
                                    break;
                        return u -= r,
                        u === i || u % i == 0 && u / i >= 0
                    }
                    : function(t) {
                        var i = t;
                        switch (n) {
                        case "only":
                        case "first":
                            while (i = i.previousSibling)
                                if (i.nodeType === 1)
                                    return !1;
                            if (n === "first")
                                return !0;
                            i = t;
                        case "last":
                            while (i = i.nextSibling)
                                if (i.nodeType === 1)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(n, t) {
                    var f, i = u.pseudos[n] || u.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                    return i[e] ? i(t) : i.length > 1 ? (f = [n, n, "", t],
                    u.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function(n, r) {
                        for (var u, f = i(n, t), e = f.length; e--; )
                            u = ti.call(n, f[e]),
                            n[u] = !(r[u] = f[e])
                    }) : function(n) {
                        return i(n, 0, f)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: h(function(n) {
                    var i = []
                      , r = []
                      , t = ht(n.replace(it, "$1"));
                    return t[e] ? h(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n,
                        t(i, null, f, r),
                        !r.pop()
                    }
                }),
                has: h(function(n) {
                    return function(t) {
                        return r(n, t).length > 0
                    }
                }),
                contains: h(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || d(t)).indexOf(n) > -1
                    }
                }),
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                parent: function(n) {
                    return !u.pseudos.empty(n)
                },
                empty: function(n) {
                    var t;
                    for (n = n.firstChild; n; ) {
                        if (n.nodeName > "@" || (t = n.nodeType) === 3 || t === 4)
                            return !1;
                        n = n.nextSibling
                    }
                    return !0
                },
                header: function(n) {
                    return bi.test(n.nodeName)
                },
                text: function(n) {
                    var t, i;
                    return n.nodeName.toLowerCase() === "input" && (t = n.type) === "text" && ((i = n.getAttribute("type")) == null || i.toLowerCase() === t)
                },
                radio: k("radio"),
                checkbox: k("checkbox"),
                file: k("file"),
                password: k("password"),
                image: k("image"),
                submit: si("submit"),
                reset: si("reset"),
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                input: function(n) {
                    return ki.test(n.nodeName)
                },
                focus: function(n) {
                    var t = n.ownerDocument;
                    return n === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(n.type || n.href)
                },
                active: function(n) {
                    return n === n.ownerDocument.activeElement
                },
                first: y(function() {
                    return [0]
                }),
                last: y(function(n, t) {
                    return [t - 1]
                }),
                eq: y(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: y(function(n, t) {
                    for (var i = 0; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                odd: y(function(n, t) {
                    for (var i = 1; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                lt: y(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: y(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        };
        ct = o.compareDocumentPosition ? function(n, t) {
            return n === t ? (b = !0,
            0) : (!n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition : n.compareDocumentPosition(t) & 4) ? -1 : 1
        }
        : function(n, t) {
            var i;
            if (n === t)
                return b = !0,
                0;
            if (n.sourceIndex && t.sourceIndex)
                return n.sourceIndex - t.sourceIndex;
            var e, h, u = [], f = [], o = n.parentNode, s = t.parentNode, r = o;
            if (o === s)
                return ut(n, t);
            if (o) {
                if (!s)
                    return 1
            } else
                return -1;
            while (r)
                u.unshift(r),
                r = r.parentNode;
            for (r = s; r; )
                f.unshift(r),
                r = r.parentNode;
            for (e = u.length,
            h = f.length,
            i = 0; i < e && i < h; i++)
                if (u[i] !== f[i])
                    return ut(u[i], f[i]);
            return i === e ? ut(n, f[i], -1) : ut(u[i], t, 1)
        }
        ;
        [0, 0].sort(ct);
        gt = !b;
        r.uniqueSort = function(n) {
            var i, t = 1;
            if (b = gt,
            n.sort(ct),
            b)
                for (; i = n[t]; t++)
                    i === n[t - 1] && n.splice(t--, 1);
            return n
        }
        ;
        r.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        ht = r.compile = function(n, t) {
            var r, u = [], f = [], i = ui[e][n];
            if (!i) {
                for (t || (t = ft(n)),
                r = t.length; r--; )
                    i = bt(t[r]),
                    i[e] ? u.push(i) : f.push(i);
                i = ui(n, ir(f, u))
            }
            return i
        }
        ;
        s.querySelectorAll && function() {
            var u, s = kt, h = /'|\\/g, c = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, n = [":focus"], t = [":active", ":focus"], i = o.matchesSelector || o.mozMatchesSelector || o.webkitMatchesSelector || o.oMatchesSelector || o.msMatchesSelector;
            l(function(t) {
                t.innerHTML = "<select><option selected=''><\/option><\/select>";
                t.querySelectorAll("[selected]").length || n.push("\\[" + f + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                t.querySelectorAll(":checked").length || n.push(":checked")
            });
            l(function(t) {
                t.innerHTML = "<p test=''><\/p>";
                t.querySelectorAll("[test^='']").length && n.push("[*^$]=" + f + "*(?:\"\"|'')");
                t.innerHTML = "<input type='hidden'/>";
                t.querySelectorAll(":enabled").length || n.push(":enabled", ":disabled")
            });
            n = new RegExp(n.join("|"));
            kt = function(t, i, r, u, f) {
                if (!u && !f && (!n || !n.test(t))) {
                    var o, l, a = !0, c = e, y = i, v = i.nodeType === 9 && t;
                    if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                        for (o = ft(t),
                        (a = i.getAttribute("id")) ? c = a.replace(h, "\\$&") : i.setAttribute("id", c),
                        c = "[id='" + c + "'] ",
                        l = o.length; l--; )
                            o[l] = c + o[l].join("");
                        y = vt.test(t) && i.parentNode || i;
                        v = o.join(",")
                    }
                    if (v)
                        try {
                            return p.apply(r, w.call(y.querySelectorAll(v), 0)),
                            r
                        } catch (b) {} finally {
                            a || i.removeAttribute("id")
                        }
                }
                return s(t, i, r, u, f)
            }
            ;
            i && (l(function(n) {
                u = i.call(n, "div");
                try {
                    i.call(n, "[test!='']:sizzle");
                    t.push("!=", at)
                } catch (r) {}
            }),
            t = new RegExp(t.join("|")),
            r.matchesSelector = function(f, e) {
                if (e = e.replace(c, "='$1']"),
                !g(f) && !t.test(e) && (!n || !n.test(e)))
                    try {
                        var o = i.call(f, e);
                        if (o || u || f.document && f.document.nodeType !== 11)
                            return o
                    } catch (s) {}
                return r(e, null, null, [f]).length > 0
            }
            )
        }();
        u.pseudos.nth = u.pseudos.eq;
        u.filters = hi.prototype = u.pseudos;
        u.setFilters = new hi;
        r.attr = i.attr;
        i.find = r;
        i.expr = r.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = r.uniqueSort;
        i.text = r.getText;
        i.isXMLDoc = r.isXML;
        i.contains = r.contains
    }(n);
    var bf = /Until$/
      , kf = /^(?:parents|prev(?:Until|All))/
      , df = /^.[^:#\[\.,]*$/
      , gi = i.expr.match.needsContext
      , gf = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        find: function(n) {
            var t, f, o, u, e, r, s = this;
            if (typeof n != "string")
                return i(n).filter(function() {
                    for (t = 0,
                    f = s.length; t < f; t++)
                        if (i.contains(s[t], this))
                            return !0
                });
            for (r = this.pushStack("", "find", n),
            t = 0,
            f = this.length; t < f; t++)
                if (o = r.length,
                i.find(n, this[t], r),
                t > 0)
                    for (u = o; u < r.length; u++)
                        for (e = 0; e < o; e++)
                            if (r[e] === r[u]) {
                                r.splice(u--, 1);
                                break
                            }
            return r
        },
        has: function(n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(this, r[t]))
                        return !0
            })
        },
        not: function(n) {
            return this.pushStack(tr(this, n, !1), "not", n)
        },
        filter: function(n) {
            return this.pushStack(tr(this, n, !0), "filter", n)
        },
        is: function(n) {
            return !!n && (typeof n == "string" ? gi.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = gi.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11; ) {
                    if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        u.push(r);
                        break
                    }
                    r = r.parentNode
                }
            return u = u.length > 1 ? i.unique(u) : u,
            this.pushStack(u, "closest", n)
        },
        index: function(n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n)
              , r = i.merge(this.get(), u);
            return this.pushStack(b(u[0]) || b(r[0]) ? r : i.unique(r))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.fn.andSelf = i.fn.addBack;
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return nr(n, "nextSibling")
        },
        prev: function(n) {
            return nr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return bf.test(n) || (u = r),
            u && typeof u == "string" && (f = i.filter(u, f)),
            f = this.length > 1 && !gf[n] ? i.unique(f) : f,
            this.length > 1 && kf.test(n) && (f = f.reverse()),
            this.pushStack(f, n, o.call(arguments).join(","))
        }
    });
    i.extend({
        filter: function(n, t, r) {
            return r && (n = ":not(" + n + ")"),
            t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u)); )
                f.nodeType === 1 && e.push(f),
                f = f[r];
            return e
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var rr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , ne = / jQuery\d+="(?:null|\d+)"/g
      , bt = /^\s+/
      , ur = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , fr = /<([\w:]+)/
      , te = /<tbody/i
      , ie = /<|&#?\w+;/
      , re = /<(?:script|style|link)/i
      , ue = /<(?:script|object|embed|option|style)/i
      , kt = new RegExp("<(?:" + rr + ")[\\s/>]","i")
      , er = /^(?:checkbox|radio)$/
      , or = /checked\s*(?:[^=]|=\s*.checked.)/i
      , fe = /\/(java|ecma)script/i
      , ee = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , e = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        area: [1, "<map>", "<\/map>"],
        _default: [0, "", ""]
    }
      , sr = ir(r)
      , dt = sr.appendChild(r.createElement("div"));
    e.optgroup = e.option;
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
    e.th = e.td;
    i.support.htmlSerialize || (e._default = [1, "X<div>", "<\/div>"]);
    i.fn.extend({
        text: function(n) {
            return i.access(this, function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }, null, n, arguments.length)
        },
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1; )
                        n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(n) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(n)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(n) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(n, this.firstChild)
            })
        },
        before: function() {
            if (!b(this[0]))
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode.insertBefore(n, this)
                });
            if (arguments.length) {
                var n = i.clean(arguments);
                return this.pushStack(i.merge(n, this), "before", this.selector)
            }
        },
        after: function() {
            if (!b(this[0]))
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode.insertBefore(n, this.nextSibling)
                });
            if (arguments.length) {
                var n = i.clean(arguments);
                return this.pushStack(i.merge(this, n), "after", this.selector)
            }
        },
        remove: function(n, t) {
            for (var r, u = 0; (r = this[u]) != null; u++)
                (!n || i.filter(n, [r]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")),
                i.cleanData([r])),
                r.parentNode && r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; (n = this[t]) != null; t++)
                for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild; )
                    n.removeChild(n.firstChild);
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n,
            t = t == null ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return i.access(this, function(n) {
                var r = this[0] || {}
                  , u = 0
                  , f = this.length;
                if (n === t)
                    return r.nodeType === 1 ? r.innerHTML.replace(ne, "") : t;
                if (typeof n == "string" && !re.test(n) && (i.support.htmlSerialize || !kt.test(n)) && (i.support.leadingWhitespace || !bt.test(n)) && !e[(fr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(ur, "<$1><\/$2>");
                    try {
                        for (; u < f; u++)
                            r = this[u] || {},
                            r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")),
                            r.innerHTML = n);
                        r = 0
                    } catch (o) {}
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function(n) {
            return b(this[0]) ? this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this : i.isFunction(n) ? this.each(function(t) {
                var r = i(this)
                  , u = r.html();
                r.replaceWith(n.call(this, t, u))
            }) : (typeof n != "string" && (n = i(n).detach()),
            this.each(function() {
                var t = this.nextSibling
                  , r = this.parentNode;
                i(this).remove();
                t ? i(t).before(n) : i(r).append(n)
            }))
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, r, u) {
            n = [].concat.apply([], n);
            var h, o, f, a, e = 0, s = n[0], c = [], l = this.length;
            if (!i.support.checkClone && l > 1 && typeof s == "string" && or.test(s))
                return this.each(function() {
                    i(this).domManip(n, r, u)
                });
            if (i.isFunction(s))
                return this.each(function(f) {
                    var e = i(this);
                    n[0] = s.call(this, f, r ? e.html() : t);
                    e.domManip(n, r, u)
                });
            if (this[0]) {
                if (h = i.buildFragment(n, this, c),
                f = h.fragment,
                o = f.firstChild,
                f.childNodes.length === 1 && (f = o),
                o)
                    for (r = r && i.nodeName(o, "tr"),
                    a = h.cacheable || l - 1; e < l; e++)
                        u.call(r && i.nodeName(this[e], "table") ? oe(this[e], "tbody") : this[e], e === a ? f : i.clone(f, !0, !0));
                f = o = null;
                c.length && i.each(c, function(n, t) {
                    t.src ? i.ajax ? i.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : i.error("no ajax") : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ee, ""));
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    });
    i.buildFragment = function(n, u, f) {
        var o, s, h, e = n[0];
        return u = u || r,
        u = !u.nodeType && u[0] || u,
        u = u.ownerDocument || u,
        n.length === 1 && typeof e == "string" && e.length < 512 && u === r && e.charAt(0) === "<" && !ue.test(e) && (i.support.checkClone || !or.test(e)) && (i.support.html5Clone || !kt.test(e)) && (s = !0,
        o = i.fragments[e],
        h = o !== t),
        o || (o = u.createDocumentFragment(),
        i.clean(n, u, o, f),
        s && (i.fragments[e] = h && o)),
        {
            fragment: o,
            cacheable: s
        }
    }
    ;
    i.fragments = {};
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(r) {
            var o, u = 0, s = [], f = i(r), h = f.length, e = this.length === 1 && this[0].parentNode;
            if ((e == null || e && e.nodeType === 11 && e.childNodes.length === 1) && h === 1)
                return f[t](this[0]),
                this;
            for (; u < h; u++)
                o = (u > 0 ? this.clone(!0) : this).get(),
                i(f[u])[t](o),
                s = s.concat(o);
            return this.pushStack(s, n, f.selector)
        }
    });
    i.extend({
        clone: function(n, t, r) {
            var f, o, u, e;
            if (i.support.html5Clone || i.isXMLDoc(n) || !kt.test("<" + n.nodeName + ">") ? e = n.cloneNode(!0) : (dt.innerHTML = n.outerHTML,
            dt.removeChild(e = dt.firstChild)),
            (!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (cr(n, e),
                f = it(n),
                o = it(e),
                u = 0; f[u]; ++u)
                    o[u] && cr(f[u], o[u]);
            if (t && (hr(n, e),
            r))
                for (f = it(n),
                o = it(e),
                u = 0; f[u]; ++u)
                    hr(f[u], o[u]);
            return f = o = null,
            e
        },
        clean: function(n, t, u, f) {
            var h, c, o, p, v, d, s, w, a, b, k, y = t === r && sr, l = [];
            for (t && typeof t.createDocumentFragment != "undefined" || (t = r),
            h = 0; (o = n[h]) != null; h++)
                if (typeof o == "number" && (o += ""),
                o) {
                    if (typeof o == "string")
                        if (ie.test(o)) {
                            for (y = y || ir(t),
                            s = t.createElement("div"),
                            y.appendChild(s),
                            o = o.replace(ur, "<$1><\/$2>"),
                            p = (fr.exec(o) || ["", ""])[1].toLowerCase(),
                            v = e[p] || e._default,
                            d = v[0],
                            s.innerHTML = v[1] + o + v[2]; d--; )
                                s = s.lastChild;
                            if (!i.support.tbody)
                                for (w = te.test(o),
                                a = p === "table" && !w ? s.firstChild && s.firstChild.childNodes : v[1] === "<table>" && !w ? s.childNodes : [],
                                c = a.length - 1; c >= 0; --c)
                                    i.nodeName(a[c], "tbody") && !a[c].childNodes.length && a[c].parentNode.removeChild(a[c]);
                            !i.support.leadingWhitespace && bt.test(o) && s.insertBefore(t.createTextNode(bt.exec(o)[0]), s.firstChild);
                            o = s.childNodes;
                            s.parentNode.removeChild(s)
                        } else
                            o = t.createTextNode(o);
                    o.nodeType ? l.push(o) : i.merge(l, o)
                }
            if (s && (o = s = y = null),
            !i.support.appendChecked)
                for (h = 0; (o = l[h]) != null; h++)
                    i.nodeName(o, "input") ? lr(o) : typeof o.getElementsByTagName != "undefined" && i.grep(o.getElementsByTagName("input"), lr);
            if (u)
                for (b = function(n) {
                    if (!n.type || fe.test(n.type))
                        return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n)
                }
                ,
                h = 0; (o = l[h]) != null; h++)
                    i.nodeName(o, "script") && b(o) || (u.appendChild(o),
                    typeof o.getElementsByTagName != "undefined" && (k = i.grep(i.merge([], o.getElementsByTagName("script")), b),
                    l.splice.apply(l, [h + 1, 0].concat(k)),
                    h += k.length));
            return l
        },
        cleanData: function(n, t) {
            for (var f, u, r, e, h = 0, o = i.expando, s = i.cache, c = i.support.deleteExpando, l = i.event.special; (r = n[h]) != null; h++)
                if ((t || i.acceptData(r)) && (u = r[o],
                f = u && s[u],
                f)) {
                    if (f.events)
                        for (e in f.events)
                            l[e] ? i.event.remove(r, e) : i.removeEvent(r, e, f.handle);
                    s[u] && (delete s[u],
                    c ? delete r[o] : r.removeAttribute ? r.removeAttribute(o) : r[o] = null,
                    i.deletedIds.push(u))
                }
        }
    }),
    function() {
        var t, n;
        i.uaMatch = function(n) {
            n = n.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }
        ;
        t = i.uaMatch(pu.userAgent);
        n = {};
        t.browser && (n[t.browser] = !0,
        n.version = t.version);
        n.chrome ? n.webkit = !0 : n.webkit && (n.safari = !0);
        i.browser = n;
        i.sub = function() {
            function n(t, i) {
                return new n.fn.init(t,i)
            }
            i.extend(!0, n, this);
            n.superclass = this;
            n.fn = n.prototype = this();
            n.fn.constructor = n;
            n.sub = this.sub;
            n.fn.init = function(r, u) {
                return u && u instanceof i && !(u instanceof n) && (u = n(u)),
                i.fn.init.call(this, r, u, t)
            }
            ;
            n.fn.init.prototype = n.fn;
            var t = n(r);
            return n
        }
    }();
    var u, v, y, gt = /alpha\([^)]*\)/i, se = /opacity=([^)]*)/, he = /^(top|right|bottom|left)$/, ce = /^(none|table(?!-c[ea]).+)/, ar = /^margin/, le = new RegExp("^(" + g + ")(.*)$","i"), rt = new RegExp("^(" + g + ")(?!px)[a-z%]+$","i"), ae = new RegExp("^([-+])=(" + g + ")","i"), ni = {}, ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, vr = {
        letterSpacing: 0,
        fontWeight: 400
    }, c = ["Top", "Right", "Bottom", "Left"], yr = ["Webkit", "O", "Moz", "ms"], ye = i.fn.toggle;
    i.fn.extend({
        css: function(n, r) {
            return i.access(this, function(n, r, u) {
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function() {
            return wr(this, !0)
        },
        hide: function() {
            return wr(this)
        },
        toggle: function(n, t) {
            var r = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? ye.apply(this, arguments) : this.each(function() {
                (r ? n : ut(this)) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = u(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, s, e, h = i.camelCase(r), c = n.style;
                if (r = i.cssProps[h] || (i.cssProps[h] = pr(c, h)),
                e = i.cssHooks[r] || i.cssHooks[h],
                u !== t) {
                    if (s = typeof u,
                    s === "string" && (o = ae.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)),
                    s = "number"),
                    u == null || s === "number" && isNaN(u))
                        return;
                    if (s !== "number" || i.cssNumber[h] || (u += "px"),
                    !e || !("set"in e) || (u = e.set(n, u, f)) !== t)
                        try {
                            c[r] = u
                        } catch (l) {}
                } else
                    return e && "get"in e && (o = e.get(n, !1, f)) !== t ? o : c[r]
            }
        },
        css: function(n, r, f, e) {
            var o, c, s, h = i.camelCase(r);
            return (r = i.cssProps[h] || (i.cssProps[h] = pr(n.style, h)),
            s = i.cssHooks[r] || i.cssHooks[h],
            s && "get"in s && (o = s.get(n, !0, e)),
            o === t && (o = u(n, r)),
            o === "normal" && r in vr && (o = vr[r]),
            f || e !== t) ? (c = parseFloat(o),
            f || i.isNumeric(c) ? c || 0 : o) : o
        },
        swap: function(n, t, i) {
            var u, r, f = {};
            for (r in t)
                f[r] = n.style[r],
                n.style[r] = t[r];
            u = i.call(n);
            for (r in t)
                n.style[r] = f[r];
            return u
        }
    });
    n.getComputedStyle ? u = function(t, r) {
        var f, o, s, h, e = n.getComputedStyle(t, null), u = t.style;
        return e && (f = e[r],
        f !== "" || i.contains(t.ownerDocument, t) || (f = i.style(t, r)),
        rt.test(f) && ar.test(r) && (o = u.width,
        s = u.minWidth,
        h = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = f,
        f = e.width,
        u.width = o,
        u.minWidth = s,
        u.maxWidth = h)),
        f
    }
    : r.documentElement.currentStyle && (u = function(n, t) {
        var f, u, i = n.currentStyle && n.currentStyle[t], r = n.style;
        return i == null && r && r[t] && (i = r[t]),
        rt.test(i) && !he.test(t) && (f = r.left,
        u = n.runtimeStyle && n.runtimeStyle.left,
        u && (n.runtimeStyle.left = n.currentStyle.left),
        r.left = t === "fontSize" ? "1em" : i,
        i = r.pixelLeft + "px",
        r.left = f,
        u && (n.runtimeStyle.left = u)),
        i === "" ? "auto" : i
    }
    );
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, f) {
                if (r)
                    return n.offsetWidth === 0 && ce.test(u(n, "display")) ? i.swap(n, ve, function() {
                        return dr(n, t, f)
                    }) : dr(n, t, f)
            },
            set: function(n, r, u) {
                return br(n, r, u ? kr(n, t, u, i.support.boxSizing && i.css(n, "boxSizing") === "border-box") : 0)
            }
        }
    });
    i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return se.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
              , u = n.currentStyle
              , e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : ""
              , f = u && u.filter || r.filter || "";
            (r.zoom = 1,
            t >= 1 && i.trim(f.replace(gt, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"),
            u && !u.filter)) || (r.filter = gt.test(f) ? f.replace(gt, e) : f + " " + e)
        }
    });
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, t) {
                return i.swap(n, {
                    display: "inline-block"
                }, function() {
                    if (t)
                        return u(n, "marginRight")
                })
            }
        });
        !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r) {
                    if (r) {
                        var f = u(n, t);
                        return rt.test(f) ? i(n).position()[t] + "px" : f
                    }
                }
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        return n.offsetWidth === 0 && n.offsetHeight === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || u(n, "display")) === "none"
    }
    ,
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    );
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++)
                    f[n + c[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        ar.test(n) || (i.cssHooks[n + t].set = br)
    });
    var pe = /%20/g
      , we = /\[\]$/
      , nu = /\r?\n/g
      , be = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , ke = /^(?:select|textarea)/i;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ke.test(this.nodeName) || be.test(this.type))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(nu, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(nu, "\r\n")
                }
            }).get()
        }
    });
    i.param = function(n, r) {
        var u, f = [], e = function(n, t) {
            t = i.isFunction(t) ? t() : t == null ? "" : t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                e(this.name, this.value)
            });
        else
            for (u in n)
                ti(u, n[u], r, e);
        return f.join("&").replace(pe, "+")
    }
    ;
    var p, l, de = /#.*$/, ge = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, no = /^(?:GET|HEAD)$/, to = /^\/\//, tu = /\?/, io = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ro = /([?&])_=[^&]*/, iu = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, ru = i.fn.load, ii = {}, uu = {}, fu = ["*/"] + ["*"];
    try {
        l = yu.href
    } catch (po) {
        l = r.createElement("a");
        l.href = "";
        l = l.href
    }
    p = iu.exec(l.toLowerCase()) || [];
    i.fn.load = function(n, r, u) {
        if (typeof n != "string" && ru)
            return ru.apply(this, arguments);
        if (!this.length)
            return this;
        var f, o, s, h = this, e = n.indexOf(" ");
        return e >= 0 && (f = n.slice(e, n.length),
        n = n.slice(0, e)),
        i.isFunction(r) ? (u = r,
        r = t) : r && typeof r == "object" && (o = "POST"),
        i.ajax({
            url: n,
            type: o,
            dataType: "html",
            data: r,
            complete: function(n, t) {
                u && h.each(u, s || [n.responseText, t, n])
            }
        }).done(function(n) {
            s = arguments;
            h.html(f ? i("<div>").append(n.replace(io, "")).find(f) : n)
        }),
        this
    }
    ;
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i.each(["get", "post"], function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f,
            f = u,
            u = t),
            i.ajax({
                type: r,
                url: n,
                data: u,
                success: f,
                dataType: e
            })
        }
    });
    i.extend({
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function(n, t) {
            return t ? ou(n, i.ajaxSettings) : (t = n,
            n = i.ajaxSettings),
            ou(n, t),
            n
        },
        ajaxSettings: {
            url: l,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(p[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": fu
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: eu(ii),
        ajaxTransport: eu(uu),
        ajax: function(n, r) {
            function b(n, r, h, l) {
                var a, tt, b, it, p, y = r;
                e !== 2 && (e = 2,
                d && clearTimeout(d),
                c = t,
                k = l || "",
                f.readyState = n > 0 ? 4 : 0,
                h && (it = uo(u, f, h)),
                n >= 200 && n < 300 || n === 304 ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"),
                p && (i.lastModified[o] = p),
                p = f.getResponseHeader("Etag"),
                p && (i.etag[o] = p)),
                n === 304 ? (y = "notmodified",
                a = !0) : (a = fo(u, it),
                y = a.state,
                tt = a.data,
                b = a.error,
                a = !b)) : (b = y,
                (!y || n) && (y = "error",
                n < 0 && (n = 0))),
                f.status = n,
                f.statusText = (r || y) + "",
                a ? nt.resolveWith(s, [tt, y, f]) : nt.rejectWith(s, [f, y, b]),
                f.statusCode(w),
                w = t,
                v && g.trigger("ajax" + (a ? "Success" : "Error"), [f, u, a ? tt : b]),
                rt.fireWith(s, [f, y]),
                v && (g.trigger("ajaxComplete", [f, u]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            var tt, it;
            typeof n == "object" && (r = n,
            n = t);
            r = r || {};
            var o, k, y, c, d, a, v, l, u = i.ajaxSetup({}, r), s = u.context || u, g = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event, nt = i.Deferred(), rt = i.Callbacks("once memory"), w = u.statusCode || {}, ut = {}, et = {}, e = 0, ot = "canceled", f = {
                readyState: 0,
                setRequestHeader: function(n, t) {
                    if (!e) {
                        var i = n.toLowerCase();
                        n = et[i] = et[i] || n;
                        ut[n] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return e === 2 ? k : null
                },
                getResponseHeader: function(n) {
                    var i;
                    if (e === 2) {
                        if (!y)
                            for (y = {}; i = ge.exec(k); )
                                y[i[1].toLowerCase()] = i[2];
                        i = y[n.toLowerCase()]
                    }
                    return i === t ? null : i
                },
                overrideMimeType: function(n) {
                    return e || (u.mimeType = n),
                    this
                },
                abort: function(n) {
                    return n = n || ot,
                    c && c.abort(n),
                    b(0, n),
                    this
                }
            };
            if (nt.promise(f),
            f.success = f.done,
            f.error = f.fail,
            f.complete = rt.add,
            f.statusCode = function(n) {
                if (n) {
                    var t;
                    if (e < 2)
                        for (t in n)
                            w[t] = [w[t], n[t]];
                    else
                        t = n[f.status],
                        f.always(t)
                }
                return this
            }
            ,
            u.url = ((n || u.url) + "").replace(de, "").replace(to, p[1] + "//"),
            u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(h),
            u.crossDomain == null && (a = iu.exec(u.url.toLowerCase()) || !1,
            u.crossDomain = a && a.join(":") + (a[3] ? "" : a[1] === "http:" ? 80 : 443) !== p.join(":") + (p[3] ? "" : p[1] === "http:" ? 80 : 443)),
            u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)),
            ft(ii, u, r, f),
            e === 2)
                return f;
            v = u.global;
            u.type = u.type.toUpperCase();
            u.hasContent = !no.test(u.type);
            v && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.hasContent || (u.data && (u.url += (tu.test(u.url) ? "&" : "?") + u.data,
            delete u.data),
            o = u.url,
            u.cache === !1 && (tt = i.now(),
            it = u.url.replace(ro, "$1_=" + tt),
            u.url = it + (it === u.url ? (tu.test(u.url) ? "&" : "?") + "_=" + tt : "")));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            u.ifModified && (o = o || u.url,
            i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]),
            i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o]));
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + fu + "; q=0.01" : "") : u.accepts["*"]);
            for (l in u.headers)
                f.setRequestHeader(l, u.headers[l]);
            if (u.beforeSend && (u.beforeSend.call(s, f, u) === !1 || e === 2))
                return f.abort();
            ot = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                f[l](u[l]);
            if (c = ft(uu, u, r, f),
            c) {
                f.readyState = 1;
                v && g.trigger("ajaxSend", [f, u]);
                u.async && u.timeout > 0 && (d = setTimeout(function() {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    e = 1;
                    c.send(ut, b)
                } catch (st) {
                    if (e < 2)
                        b(-1, st);
                    else
                        throw st;
                }
            } else
                b(-1, "No Transport");
            return f
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var su = []
      , eo = /\?/
      , et = /(=)\?(?=&|$)|\?\?/
      , oo = i.now();
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = su.pop() || i.expando + "_" + oo++;
            return this[n] = !0,
            n
        }
    });
    i.ajaxPrefilter("json jsonp", function(r, u, f) {
        var e, s, o, h = r.data, c = r.url, l = r.jsonp !== !1, a = l && et.test(c), v = l && !a && typeof h == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && et.test(h);
        if (r.dataTypes[0] === "jsonp" || a || v)
            return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback,
            s = n[e],
            a ? r.url = c.replace(et, "$1" + e) : v ? r.data = h.replace(et, "$1" + e) : l && (r.url += (eo.test(c) ? "&" : "?") + r.jsonp + "=" + e),
            r.converters["script json"] = function() {
                return o || i.error(e + " was not called"),
                o[0]
            }
            ,
            r.dataTypes[0] = "json",
            n[e] = function() {
                o = arguments
            }
            ,
            f.always(function() {
                n[e] = s;
                r[e] && (r.jsonpCallback = u.jsonpCallback,
                su.push(e));
                o && i.isFunction(s) && s(o[0]);
                o = s = t
            }),
            "script"
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    });
    i.ajaxPrefilter("script", function(n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET",
        n.global = !1)
    });
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function(f, e) {
                    i = r.createElement("script");
                    i.async = "async";
                    n.scriptCharset && (i.charset = n.scriptCharset);
                    i.src = n.url;
                    i.onload = i.onreadystatechange = function(n, r) {
                        (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null,
                        u && i.parentNode && u.removeChild(i),
                        i = t,
                        r || e(200, "success"))
                    }
                    ;
                    u.insertBefore(i, u.firstChild)
                },
                abort: function() {
                    if (i)
                        i.onload(0, 1)
                }
            }
        }
    });
    ot = n.ActiveXObject ? function() {
        for (var n in w)
            w[n](0, 1)
    }
    : !1;
    hu = 0;
    i.ajaxSettings.xhr = n.ActiveXObject ? function() {
        return !this.isLocal && cu() || so()
    }
    : cu,
    function(n) {
        i.extend(i.support, {
            ajax: !!n,
            cors: !!n && "withCredentials"in n
        })
    }(i.ajaxSettings.xhr());
    i.support.ajax && i.ajaxTransport(function(r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function(f, e) {
                    var h, s, o = r.xhr();
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async),
                    r.xhrFields)
                        for (s in r.xhrFields)
                            o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f)
                            o.setRequestHeader(s, f[s])
                    } catch (c) {}
                    o.send(r.hasContent && r.data || null);
                    u = function(n, f) {
                        var s, a, v, c, l;
                        try {
                            if (u && (f || o.readyState === 4))
                                if (u = t,
                                h && (o.onreadystatechange = i.noop,
                                ot && delete w[h]),
                                f)
                                    o.readyState !== 4 && o.abort();
                                else {
                                    s = o.status;
                                    v = o.getAllResponseHeaders();
                                    c = {};
                                    l = o.responseXML;
                                    l && l.documentElement && (c.xml = l);
                                    try {
                                        c.text = o.responseText
                                    } catch (n) {}
                                    try {
                                        a = o.statusText
                                    } catch (p) {
                                        a = ""
                                    }
                                    s || !r.isLocal || r.crossDomain ? s === 1223 && (s = 204) : s = c.text ? 200 : 404
                                }
                        } catch (y) {
                            f || e(-1, y)
                        }
                        c && e(s, a, c, v)
                    }
                    ;
                    r.async ? o.readyState === 4 ? setTimeout(u, 0) : (h = ++hu,
                    ot && (w || (w = {},
                    i(n).unload(ot)),
                    w[h] = u),
                    o.onreadystatechange = u) : u()
                },
                abort: function() {
                    u && u(0, 1)
                }
            }
        }
    });
    var st, ht, ho = /^(?:toggle|show|hide)$/, co = new RegExp("^(?:([-+])=|)(" + g + ")([a-z%]*)$","i"), lo = /queueHooks$/, ct = [yo], k = {
        "*": [function(n, t) {
            var o, s, r = this.createTween(n, t), e = co.exec(t), h = r.cur(), u = +h || 0, f = 1, c = 20;
            if (e) {
                if (o = +e[2],
                s = e[3] || (i.cssNumber[n] ? "" : "px"),
                s !== "px" && u) {
                    u = i.css(r.elem, n, !0) || o || 1;
                    do
                        f = f || ".5",
                        u = u / f,
                        i.style(r.elem, n, u + s);
                    while (f !== (f = r.cur() / h) && f !== 1 && --c)
                }
                r.unit = s;
                r.start = u;
                r.end = e[1] ? u + (e[1] + 1) * o : o
            }
            return r
        }
        ]
    };
    i.Animation = i.extend(au, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n,
            n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++)
                r = n[u],
                k[r] = k[r] || [],
                k[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? ct.unshift(n) : ct.push(n)
        }
    });
    i.Tween = f;
    f.prototype = {
        constructor: f,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = f.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            r && r.set ? r.set(this) : f.propHooks._default.set(this),
            this
        }
    };
    f.prototype.init.prototype = f.prototype;
    f.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, !1, ""),
                !t || t === "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(u, f, e) {
            return u == null || typeof u == "boolean" || !n && i.isFunction(u) && i.isFunction(f) ? r.apply(this, arguments) : this.animate(lt(t, !0), u, f, e)
        }
    });
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(ut).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var e = i.isEmptyObject(n)
              , f = i.speed(t, r, u)
              , o = function() {
                var t = au(this, i.extend({}, n), f);
                e && t.stop(!0)
            };
            return e || f.queue === !1 ? this.each(o) : this.queue(f.queue, o)
        },
        stop: function(n, r, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = r,
            r = n,
            n = t),
            r && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0
                  , t = n != null && n + "queueHooks"
                  , e = i.timers
                  , r = i._data(this);
                if (t)
                    r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && lo.test(t) && f(r[t]);
                for (t = e.length; t--; )
                    e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(u),
                    o = !1,
                    e.splice(t, 1));
                (o || !u) && i.dequeue(this, n)
            })
        }
    });
    i.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (u.queue == null || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }
        ,
        u
    }
    ;
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.timers = [];
    i.fx = f.prototype.init;
    i.fx.tick = function() {
        for (var r, n = i.timers, t = 0; t < n.length; t++)
            r = n[t],
            r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop()
    }
    ;
    i.fx.timer = function(n) {
        n() && i.timers.push(n) && !ht && (ht = setInterval(i.fx.tick, i.fx.interval))
    }
    ;
    i.fx.interval = 13;
    i.fx.stop = function() {
        clearInterval(ht);
        ht = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    );
    ri = /^(?:body|html)$/i;
    i.fn.offset = function(n) {
        if (arguments.length)
            return n === t ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
        var u, o, s, h, c, l, a, f = {
            top: 0,
            left: 0
        }, r = this[0], e = r && r.ownerDocument;
        if (e)
            return (o = e.body) === r ? i.offset.bodyOffset(r) : (u = e.documentElement,
            !i.contains(u, r)) ? f : (typeof r.getBoundingClientRect != "undefined" && (f = r.getBoundingClientRect()),
            s = vu(e),
            h = u.clientTop || o.clientTop || 0,
            c = u.clientLeft || o.clientLeft || 0,
            l = s.pageYOffset || u.scrollTop,
            a = s.pageXOffset || u.scrollLeft,
            {
                top: f.top + l - h,
                left: f.left + a - c
            })
    }
    ;
    i.offset = {
        bodyOffset: function(n) {
            var t = n.offsetTop
              , r = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0,
            r += parseFloat(i.css(n, "marginLeft")) || 0),
            {
                top: t,
                left: r
            }
        },
        setOffset: function(n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n), o = e.offset(), l = i.css(n, "top"), a = i.css(n, "left"), v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1, u = {}, s = {}, h, c;
            v ? (s = e.position(),
            h = s.top,
            c = s.left) : (h = parseFloat(l) || 0,
            c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            t.top != null && (u.top = t.top - o.top + h);
            t.left != null && (u.left = t.left - o.left + c);
            "using"in t ? t.using.call(n, u) : e.css(u)
        }
    };
    i.fn.extend({
        position: function() {
            if (this[0]) {
                var u = this[0]
                  , n = this.offsetParent()
                  , t = this.offset()
                  , r = ri.test(n[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : n.offset();
                return t.top -= parseFloat(i.css(u, "marginTop")) || 0,
                t.left -= parseFloat(i.css(u, "marginLeft")) || 0,
                r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0,
                r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0,
                {
                    top: t.top - r.top,
                    left: t.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || r.body; n && !ri.test(n.nodeName) && i.css(n, "position") === "static"; )
                    n = n.offsetParent;
                return n || r.body
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function(f) {
            return i.access(this, function(n, f, e) {
                var o = vu(n);
                if (e === t)
                    return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
            }, n, f, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function(u, f) {
            i.fn[f] = function(f, e) {
                var o = arguments.length && (u || typeof f != "boolean")
                  , s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function(r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement,
                    Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, f, s) : i.style(r, u, f, s)
                }, r, o ? f : t, o, null)
            }
        })
    });
    n.jQuery = n.$ = i;
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return i
    })
}
)(window),
function(n, t) {
    function i(t, i) {
        var u = t.nodeName.toLowerCase(), f, e, o;
        return "area" === u ? (f = t.parentNode,
        e = f.name,
        !t.href || !e || f.nodeName.toLowerCase() !== "map") ? !1 : (o = n("img[usemap=#" + e + "]")[0],
        !!o && r(o)) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" == u ? t.href || i : i) && r(t)
    }
    function r(t) {
        return !n(t).parents().andSelf().filter(function() {
            return n.curCSS(this, "visibility") === "hidden" || n.expr.filters.hidden(this)
        }).length
    }
    (n.ui = n.ui || {},
    n.ui.version) || (n.extend(n.ui, {
        version: "1.8.24",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }),
    n.fn.extend({
        propAttr: n.fn.prop || n.fn.attr,
        _focus: n.fn.focus,
        focus: function(t, i) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    n(r).focus();
                    i && i.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return t = n.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(n.curCSS(this, "position", 1)) && /(auto|scroll)/.test(n.curCSS(this, "overflow", 1) + n.curCSS(this, "overflow-y", 1) + n.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(n.curCSS(this, "overflow", 1) + n.curCSS(this, "overflow-y", 1) + n.curCSS(this, "overflow-x", 1))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? n(document) : t
        },
        zIndex: function(i) {
            if (i !== t)
                return this.css("zIndex", i);
            if (this.length)
                for (var r = n(this[0]), u, f; r.length && r[0] !== document; ) {
                    if (u = r.css("position"),
                    (u === "absolute" || u === "relative" || u === "fixed") && (f = parseInt(r.css("zIndex"), 10),
                    !isNaN(f) && f !== 0))
                        return f;
                    r = r.parent()
                }
            return 0
        },
        disableSelection: function() {
            return this.bind((n.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(n) {
                n.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function(i, r) {
        function e(t, i, r, u) {
            return n.each(o, function() {
                i -= parseFloat(n.curCSS(t, "padding" + this, !0)) || 0;
                r && (i -= parseFloat(n.curCSS(t, "border" + this + "Width", !0)) || 0);
                u && (i -= parseFloat(n.curCSS(t, "margin" + this, !0)) || 0)
            }),
            i
        }
        var o = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
          , u = r.toLowerCase()
          , f = {
            innerWidth: n.fn.innerWidth,
            innerHeight: n.fn.innerHeight,
            outerWidth: n.fn.outerWidth,
            outerHeight: n.fn.outerHeight
        };
        n.fn["inner" + r] = function(i) {
            return i === t ? f["inner" + r].call(this) : this.each(function() {
                n(this).css(u, e(this, i) + "px")
            })
        }
        ;
        n.fn["outer" + r] = function(t, i) {
            return typeof t != "number" ? f["outer" + r].call(this, t) : this.each(function() {
                n(this).css(u, e(this, t, !0, i) + "px")
            })
        }
    }),
    n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !!n.data(i, t)
            }
        }) : function(t, i, r) {
            return !!n.data(t, r[3])
        }
        ,
        focusable: function(t) {
            return i(t, !isNaN(n.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var r = n.attr(t, "tabindex")
              , u = isNaN(r);
            return (u || r >= 0) && i(t, !u)
        }
    }),
    n(function() {
        var i = document.body
          , t = i.appendChild(t = document.createElement("div"));
        t.offsetHeight;
        n.extend(t.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        });
        n.support.minHeight = t.offsetHeight === 100;
        n.support.selectstart = "onselectstart"in t;
        i.removeChild(t).style.display = "none"
    }),
    n.curCSS || (n.curCSS = n.css),
    n.extend(n.ui, {
        plugin: {
            add: function(t, i, r) {
                var f = n.ui[t].prototype;
                for (var u in r)
                    f.plugins[u] = f.plugins[u] || [],
                    f.plugins[u].push([i, r[u]])
            },
            call: function(n, t, i) {
                var u = n.plugins[t], r;
                if (u && n.element[0].parentNode)
                    for (r = 0; r < u.length; r++)
                        n.options[u[r][0]] && u[r][1].apply(n.element, i)
            }
        },
        contains: function(n, t) {
            return document.compareDocumentPosition ? n.compareDocumentPosition(t) & 16 : n !== t && n.contains(t)
        },
        hasScroll: function(t, i) {
            if (n(t).css("overflow") === "hidden")
                return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop"
              , u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1,
            u = t[r] > 0,
            t[r] = 0,
            u)
        },
        isOverAxis: function(n, t, i) {
            return n > t && n < t + i
        },
        isOver: function(t, i, r, u, f, e) {
            return n.ui.isOverAxis(t, r, f) && n.ui.isOverAxis(i, u, e)
        }
    }))
}(jQuery),
function(n, t) {
    var i, r;
    n.cleanData ? (i = n.cleanData,
    n.cleanData = function(t) {
        for (var r = 0, u; (u = t[r]) != null; r++)
            try {
                n(u).triggerHandler("remove")
            } catch (f) {}
        i(t)
    }
    ) : (r = n.fn.remove,
    n.fn.remove = function(t, i) {
        return this.each(function() {
            return i || (!t || n.filter(t, [this]).length) && n("*", this).add([this]).each(function() {
                try {
                    n(this).triggerHandler("remove")
                } catch (t) {}
            }),
            r.call(n(this), t, i)
        })
    }
    );
    n.widget = function(t, i, r) {
        var u = t.split(".")[0], e, f;
        t = t.split(".")[1];
        e = u + "-" + t;
        r || (r = i,
        i = n.Widget);
        n.expr[":"][e] = function(i) {
            return !!n.data(i, t)
        }
        ;
        n[u] = n[u] || {};
        n[u][t] = function(n, t) {
            arguments.length && this._createWidget(n, t)
        }
        ;
        f = new i;
        f.options = n.extend(!0, {}, f.options);
        n[u][t].prototype = n.extend(!0, f, {
            namespace: u,
            widgetName: t,
            widgetEventPrefix: n[u][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: e
        }, r);
        n.widget.bridge(t, n[u][t])
    }
    ;
    n.widget.bridge = function(i, r) {
        n.fn[i] = function(u) {
            var f = typeof u == "string"
              , e = Array.prototype.slice.call(arguments, 1)
              , o = this;
            return (u = !f && e.length ? n.extend.apply(null, [!0, u].concat(e)) : u,
            f && u.charAt(0) === "_") ? o : (f ? this.each(function() {
                var r = n.data(this, i)
                  , f = r && n.isFunction(r[u]) ? r[u].apply(r, e) : r;
                if (f !== r && f !== t)
                    return o = f,
                    !1
            }) : this.each(function() {
                var t = n.data(this, i);
                t ? t.option(u || {})._init() : n.data(this, i, new r(u,this))
            }),
            o)
        }
    }
    ;
    n.Widget = function(n, t) {
        arguments.length && this._createWidget(n, t)
    }
    ;
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(t, i) {
            n.data(i, this.widgetName, this);
            this.element = n(i);
            this.options = n.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var r = this;
            this.element.bind("remove." + this.widgetName, function() {
                r.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function() {
            return n.metadata && n.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(i, r) {
            var u = i;
            if (arguments.length === 0)
                return n.extend({}, this.options);
            if (typeof i == "string") {
                if (r === t)
                    return this.options[i];
                u = {};
                u[i] = r
            }
            return this._setOptions(u),
            this
        },
        _setOptions: function(t) {
            var i = this;
            return n.each(t, function(n, t) {
                i._setOption(n, t)
            }),
            this
        },
        _setOption: function(n, t) {
            return this.options[n] = t,
            n === "disabled" && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", t),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {},
            i = n.Event(i),
            i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            i.target = this.element[0],
            f = i.originalEvent,
            f)
                for (u in f)
                    u in i || (i[u] = f[u]);
            return this.element.trigger(i, r),
            !(n.isFunction(e) && e.call(this.element[0], i, r) === !1 || i.isDefaultPrevented())
        }
    }
}(jQuery),
function(n) {
    var t = !1;
    n(document).mouseup(function() {
        t = !1
    });
    n.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(n) {
                return t._mouseDown(n)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent"))
                    return n.removeData(i.target, t.widgetName + ".preventClickEvent"),
                    i.stopImmediatePropagation(),
                    !1
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i);
                this._mouseDownEvent = i;
                var r = this
                  , u = i.which == 1
                  , f = typeof this.options.cancel == "string" && i.target.nodeName ? n(i.target).closest(this.options.cancel).length : !1;
                return !u || f || !this._mouseCapture(i) ? !0 : (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    r.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1,
                !this._mouseStarted)) ? (i.preventDefault(),
                !0) : (!0 === n.data(i.target, this.widgetName + ".preventClickEvent") && n.removeData(i.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(n) {
                    return r._mouseMove(n)
                }
                ,
                this._mouseUpDelegate = function(n) {
                    return r._mouseUp(n)
                }
                ,
                n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                i.preventDefault(),
                t = !0,
                !0)
            }
        },
        _mouseMove: function(t) {
            return n.browser.msie && !(document.documentMode >= 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target == this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(n) {
    n.ui = n.ui || {};
    var i = /left|center|right/
      , r = /top|center|bottom/
      , t = "center"
      , u = {}
      , f = n.fn.position
      , e = n.fn.offset;
    n.fn.position = function(e) {
        if (!e || !e.of)
            return f.apply(this, arguments);
        e = n.extend({}, e);
        var s = n(e.of), v = s[0], a = (e.collision || "flip").split(" "), h = e.offset ? e.offset.split(" ") : [0, 0], c, l, o;
        return v.nodeType === 9 ? (c = s.width(),
        l = s.height(),
        o = {
            top: 0,
            left: 0
        }) : v.setTimeout ? (c = s.width(),
        l = s.height(),
        o = {
            top: s.scrollTop(),
            left: s.scrollLeft()
        }) : v.preventDefault ? (e.at = "left top",
        c = l = 0,
        o = {
            top: e.of.pageY,
            left: e.of.pageX
        }) : (c = s.outerWidth(),
        l = s.outerHeight(),
        o = s.offset()),
        n.each(["my", "at"], function() {
            var n = (e[this] || "").split(" ");
            n.length === 1 && (n = i.test(n[0]) ? n.concat([t]) : r.test(n[0]) ? [t].concat(n) : [t, t]);
            n[0] = i.test(n[0]) ? n[0] : t;
            n[1] = r.test(n[1]) ? n[1] : t;
            e[this] = n
        }),
        a.length === 1 && (a[1] = a[0]),
        h[0] = parseInt(h[0], 10) || 0,
        h.length === 1 && (h[1] = h[0]),
        h[1] = parseInt(h[1], 10) || 0,
        e.at[0] === "right" ? o.left += c : e.at[0] === t && (o.left += c / 2),
        e.at[1] === "bottom" ? o.top += l : e.at[1] === t && (o.top += l / 2),
        o.left += h[0],
        o.top += h[1],
        this.each(function() {
            var r = n(this), f = r.outerWidth(), s = r.outerHeight(), v = parseInt(n.curCSS(this, "marginLeft", !0)) || 0, y = parseInt(n.curCSS(this, "marginTop", !0)) || 0, w = f + v + (parseInt(n.curCSS(this, "marginRight", !0)) || 0), b = s + y + (parseInt(n.curCSS(this, "marginBottom", !0)) || 0), i = n.extend({}, o), p;
            e.my[0] === "right" ? i.left -= f : e.my[0] === t && (i.left -= f / 2);
            e.my[1] === "bottom" ? i.top -= s : e.my[1] === t && (i.top -= s / 2);
            u.fractions || (i.left = Math.round(i.left),
            i.top = Math.round(i.top));
            p = {
                left: i.left - v,
                top: i.top - y
            };
            n.each(["left", "top"], function(t, r) {
                n.ui.position[a[t]] && n.ui.position[a[t]][r](i, {
                    targetWidth: c,
                    targetHeight: l,
                    elemWidth: f,
                    elemHeight: s,
                    collisionPosition: p,
                    collisionWidth: w,
                    collisionHeight: b,
                    offset: h,
                    my: e.my,
                    at: e.at
                })
            });
            n.fn.bgiframe && r.bgiframe();
            r.offset(n.extend(i, {
                using: e.using
            }))
        })
    }
    ;
    n.ui.position = {
        fit: {
            left: function(t, i) {
                var r = n(window)
                  , u = i.collisionPosition.left + i.collisionWidth - r.width() - r.scrollLeft();
                t.left = u > 0 ? t.left - u : Math.max(t.left - i.collisionPosition.left, t.left)
            },
            top: function(t, i) {
                var r = n(window)
                  , u = i.collisionPosition.top + i.collisionHeight - r.height() - r.scrollTop();
                t.top = u > 0 ? t.top - u : Math.max(t.top - i.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function(i, r) {
                if (r.at[0] !== t) {
                    var u = n(window)
                      , s = r.collisionPosition.left + r.collisionWidth - u.width() - u.scrollLeft()
                      , f = r.my[0] === "left" ? -r.elemWidth : r.my[0] === "right" ? r.elemWidth : 0
                      , e = r.at[0] === "left" ? r.targetWidth : -r.targetWidth
                      , o = -2 * r.offset[0];
                    i.left += r.collisionPosition.left < 0 ? f + e + o : s > 0 ? f + e + o : 0
                }
            },
            top: function(i, r) {
                if (r.at[1] !== t) {
                    var u = n(window)
                      , s = r.collisionPosition.top + r.collisionHeight - u.height() - u.scrollTop()
                      , f = r.my[1] === "top" ? -r.elemHeight : r.my[1] === "bottom" ? r.elemHeight : 0
                      , e = r.at[1] === "top" ? r.targetHeight : -r.targetHeight
                      , o = -2 * r.offset[1];
                    i.top += r.collisionPosition.top < 0 ? f + e + o : s > 0 ? f + e + o : 0
                }
            }
        }
    };
    n.offset.setOffset || (n.offset.setOffset = function(t, i) {
        /static/.test(n.curCSS(t, "position")) && (t.style.position = "relative");
        var r = n(t)
          , u = r.offset()
          , e = parseInt(n.curCSS(t, "top", !0), 10) || 0
          , o = parseInt(n.curCSS(t, "left", !0), 10) || 0
          , f = {
            top: i.top - u.top + e,
            left: i.left - u.left + o
        };
        "using"in i ? i.using.call(t, f) : r.css(f)
    }
    ,
    n.fn.offset = function(t) {
        var i = this[0];
        return !i || !i.ownerDocument ? null : t ? n.isFunction(t) ? this.each(function(i) {
            n(this).offset(t.call(this, i, n(this).offset()))
        }) : this.each(function() {
            n.offset.setOffset(this, t)
        }) : e.call(this)
    }
    );
    n.curCSS || (n.curCSS = n.css),
    function() {
        var i = document.getElementsByTagName("body")[0], e = document.createElement("div"), t, r, f, o, s, h;
        t = document.createElement(i ? "div" : "body");
        f = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        i && n.extend(f, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (h in f)
            t.style[h] = f[h];
        t.appendChild(e);
        r = i || document.documentElement;
        r.insertBefore(t, r.firstChild);
        e.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";
        o = n(e).offset(function(n, t) {
            return t
        }).offset();
        t.innerHTML = "";
        r.removeChild(t);
        s = o.top + o.left + (i ? 2e3 : 0);
        u.fractions = s > 21 && s < 22
    }()
}(jQuery),
function(n) {
    n.widget("ui.draggable", n.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            this.options.helper != "original" || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._mouseInit()
        },
        destroy: function() {
            if (this.element.data("draggable"))
                return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
                this._mouseDestroy(),
                this
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || n(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t),
            !this.handle) ? !1 : (i.iframeFix && n(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                n('<div class="ui-draggable-iframeFix" style="background: #fff;"><\/div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(n(this).offset()).appendTo("body")
            }),
            !0)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return (this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            n.ui.ddmanager && (n.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            i.containment && this._setContainment(),
            this._trigger("start", t) === !1) ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _mouseDrag: function(t, i) {
            if (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1)
                    return this._mouseUp({}),
                    !1;
                this.position = r.position
            }
            return this.options.axis && this.options.axis == "y" || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && this.options.axis == "x" || (this.helper[0].style.top = this.position.top + "px"),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var i = !1, r, u, f;
            for (n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)),
            this.dropped && (i = this.dropped,
            this.dropped = !1),
            r = this.element[0],
            u = !1; r && (r = r.parentNode); )
                r == document && (u = !0);
            return !u && this.options.helper === "original" ? !1 : (this.options.revert == "invalid" && !i || this.options.revert == "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? (f = this,
            n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                f._trigger("stop", t) !== !1 && f._clear()
            })) : this._trigger("stop", t) !== !1 && this._clear(),
            !1)
        },
        _mouseUp: function(t) {
            return n("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t),
            n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            var i = !this.options.handle || !n(this.options.handle, this.element).length ? !0 : !1;
            return n(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (i = !0)
            }),
            i
        },
        _createHelper: function(t) {
            var r = this.options
              , i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : r.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo == "parent" ? this.element[0].parentNode : r.appendTo),
            i[0] == this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left"in t && (this.offset.click.left = t.left + this.margins.left);
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top"in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition == "absolute" && this.scrollParent[0] != document && n.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && n.browser.msie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var n = this.element.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var i = this.options, r, t, f, u;
            if (i.containment == "parent" && (i.containment = this.helper[0].parentNode),
            (i.containment == "document" || i.containment == "window") && (this.containment = [i.containment == "document" ? 0 : n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment == "document" ? 0 : n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment == "document" ? 0 : n(window).scrollLeft()) + n(i.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (i.containment == "document" ? 0 : n(window).scrollTop()) + (n(i.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(i.containment) || i.containment.constructor == Array)
                i.containment.constructor == Array && (this.containment = i.containment);
            else {
                if (r = n(i.containment),
                t = r[0],
                !t)
                    return;
                f = r.offset();
                u = n(t).css("overflow") != "hidden";
                this.containment = [(parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0), (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0), (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                this.relative_container = r
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t == "absolute" ? 1 : -1
              , e = this.options
              , u = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r),
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r)
            }
        },
        _generatePosition: function(t) {
            var r = this.options, h = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, c = /(html|body)/i.test(h[0].tagName), e = t.pageX, o = t.pageY, i, s, u, f;
            return this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(),
            i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
            t.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)),
            r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY,
            o = i ? (u - this.offset.click.top < i[1] || u - this.offset.click.top > i[3]) ? (u - this.offset.click.top < i[1]) ? u + r.grid[1] : u - r.grid[1] : u : u,
            f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX,
            e = i ? (f - this.offset.click.left < i[0] || f - this.offset.click.left > i[2]) ? (f - this.offset.click.left < i[0]) ? f + r.grid[0] : f - r.grid[0] : f : f)),
            {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : c ? 0 : h.scrollTop()),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : c ? 0 : h.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, r) {
            return r = r || this._uiHash(),
            n.ui.plugin.call(this, t, [i, r]),
            t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")),
            n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    n.extend(n.ui.draggable, {
        version: "1.8.24"
    });
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var r = n(this).data("draggable")
              , u = r.options
              , f = n.extend({}, i, {
                item: r.element
            });
            r.sortables = [];
            n(u.connectToSortable).each(function() {
                var i = n.data(this, "sortable");
                i && !i.options.disabled && (r.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }),
                i.refreshPositions(),
                i._trigger("activate", t, f))
            })
        },
        stop: function(t, i) {
            var r = n(this).data("draggable")
              , u = n.extend({}, i, {
                item: r.element
            });
            n.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0,
                r.cancelHelperRemoval = !0,
                this.instance.cancelHelperRemoval = !1,
                this.shouldRevert && (this.instance.options.revert = !0),
                this.instance._mouseStop(t),
                this.instance.options.helper = this.instance.options._helper,
                r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1,
                this.instance._trigger("deactivate", t, u))
            })
        },
        drag: function(t, i) {
            var r = n(this).data("draggable")
              , u = this
              , f = function(t) {
                var i = this.offset.click.top
                  , r = this.offset.click.left
                  , u = this.positionAbs.top
                  , f = this.positionAbs.left
                  , e = t.height
                  , o = t.width
                  , s = t.top
                  , h = t.left;
                return n.ui.isOver(u + i, f + r, s, h, e, o)
            };
            n.each(r.sortables, function() {
                this.instance.positionAbs = r.positionAbs;
                this.instance.helperProportions = r.helperProportions;
                this.instance.offset.click = r.offset.click;
                this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1,
                this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0),
                this.instance.options._helper = this.instance.options.helper,
                this.instance.options.helper = function() {
                    return i.helper[0]
                }
                ,
                t.target = this.instance.currentItem[0],
                this.instance._mouseCapture(t, !0),
                this.instance._mouseStart(t, !0, !0),
                this.instance.offset.click.top = r.offset.click.top,
                this.instance.offset.click.left = r.offset.click.left,
                this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top,
                r._trigger("toSortable", t),
                r.dropped = this.instance.element,
                r.currentItem = r.element,
                this.instance.fromOutside = r),
                this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0,
                this.instance.cancelHelperRemoval = !0,
                this.instance.options.revert = !1,
                this.instance._trigger("out", t, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(t, !0),
                this.instance.options.helper = this.instance.options._helper,
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                r._trigger("fromSortable", t),
                r.dropped = !1)
            })
        }
    });
    n.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = n("body")
              , i = n(this).data("draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor"));
            t.css("cursor", i.cursor)
        },
        stop: function() {
            var t = n(this).data("draggable").options;
            t._cursor && n("body").css("cursor", t._cursor)
        }
    });
    n.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var r = n(i.helper)
              , u = n(this).data("draggable").options;
            r.css("opacity") && (u._opacity = r.css("opacity"));
            r.css("opacity", u.opacity)
        },
        stop: function(t, i) {
            var r = n(this).data("draggable").options;
            r._opacity && n(i.helper).css("opacity", r._opacity)
        }
    });
    n.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = n(this).data("draggable");
            t.scrollParent[0] != document && t.scrollParent[0].tagName != "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var r = n(this).data("draggable")
              , i = r.options
              , u = !1;
            r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" ? (i.axis && i.axis == "x" || (r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop - i.scrollSpeed)),
            i.axis && i.axis == "y" || (r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && i.axis == "x" || (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? u = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (u = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed))),
            i.axis && i.axis == "y" || (t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? u = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (u = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))));
            u !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
        }
    });
    n.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = n(this).data("draggable")
              , i = t.options;
            t.snapElements = [];
            n(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                var i = n(this)
                  , r = i.offset();
                this != t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function(t, i) {
            for (var d, r = n(this).data("draggable"), k = r.options, u = k.snapTolerance, c = i.offset.left, a = c + r.helperProportions.width, l = i.offset.top, v = l + r.helperProportions.height, f = r.snapElements.length - 1; f >= 0; f--) {
                var e = r.snapElements[f].left
                  , s = e + r.snapElements[f].width
                  , o = r.snapElements[f].top
                  , h = o + r.snapElements[f].height;
                if (!(e - u < c && c < s + u && o - u < l && l < h + u || e - u < c && c < s + u && o - u < v && v < h + u || e - u < a && a < s + u && o - u < l && l < h + u || e - u < a && a < s + u && o - u < v && v < h + u)) {
                    r.snapElements[f].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                        snapItem: r.snapElements[f].item
                    }));
                    r.snapElements[f].snapping = !1;
                    continue
                }
                if (k.snapMode != "inner") {
                    var y = Math.abs(o - v) <= u
                      , p = Math.abs(h - l) <= u
                      , w = Math.abs(e - a) <= u
                      , b = Math.abs(s - c) <= u;
                    y && (i.position.top = r._convertPositionTo("relative", {
                        top: o - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top);
                    p && (i.position.top = r._convertPositionTo("relative", {
                        top: h,
                        left: 0
                    }).top - r.margins.top);
                    w && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: e - r.helperProportions.width
                    }).left - r.margins.left);
                    b && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: s
                    }).left - r.margins.left)
                }
                if (d = y || p || w || b,
                k.snapMode != "outer") {
                    var y = Math.abs(o - l) <= u
                      , p = Math.abs(h - v) <= u
                      , w = Math.abs(e - c) <= u
                      , b = Math.abs(s - a) <= u;
                    y && (i.position.top = r._convertPositionTo("relative", {
                        top: o,
                        left: 0
                    }).top - r.margins.top);
                    p && (i.position.top = r._convertPositionTo("relative", {
                        top: h - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top);
                    w && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: e
                    }).left - r.margins.left);
                    b && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: s - r.helperProportions.width
                    }).left - r.margins.left)
                }
                !r.snapElements[f].snapping && (y || p || w || b || d) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[f].item
                }));
                r.snapElements[f].snapping = y || p || w || b || d
            }
        }
    });
    n.ui.plugin.add("draggable", "stack", {
        start: function() {
            var r = n(this).data("draggable").options, t = n.makeArray(n(r.stack)).sort(function(t, i) {
                return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
            }), i;
            t.length && (i = parseInt(t[0].style.zIndex) || 0,
            n(t).each(function(n) {
                this.style.zIndex = i + n
            }),
            this[0].style.zIndex = i + t.length)
        }
    });
    n.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var r = n(i.helper)
              , u = n(this).data("draggable").options;
            r.css("zIndex") && (u._zIndex = r.css("zIndex"));
            r.css("zIndex", u.zIndex)
        },
        stop: function(t, i) {
            var r = n(this).data("draggable").options;
            r._zIndex && n(i.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery),
function(n) {
    n.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var t = this.options
              , i = t.accept;
            this.isover = 0;
            this.isout = 1;
            this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            }
            ;
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            };
            n.ui.ddmanager.droppables[t.scope] = n.ui.ddmanager.droppables[t.scope] || [];
            n.ui.ddmanager.droppables[t.scope].push(this);
            t.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function() {
            for (var i = n.ui.ddmanager.droppables[this.options.scope], t = 0; t < i.length; t++)
                i[t] == this && i.splice(t, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),
            this
        },
        _setOption: function(t, i) {
            t == "accept" && (this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            }
            );
            n.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
            this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var r = i || n.ui.ddmanager.current, u;
            return !r || (r.currentItem || r.element)[0] == this.element[0] ? !1 : (u = !1,
            this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var t = n.data(this, "droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance))
                    return u = !0,
                    !1
            }),
            u) ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("drop", t, this.ui(r)),
            this.element) : !1
        },
        ui: function(n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        }
    });
    n.extend(n.ui.droppable, {
        version: "1.8.24"
    });
    n.ui.intersect = function(t, i, r) {
        if (!i.offset)
            return !1;
        var e = (t.positionAbs || t.position.absolute).left
          , s = e + t.helperProportions.width
          , o = (t.positionAbs || t.position.absolute).top
          , h = o + t.helperProportions.height
          , u = i.offset.left
          , c = u + i.proportions.width
          , f = i.offset.top
          , l = f + i.proportions.height;
        switch (r) {
        case "fit":
            return u <= e && s <= c && f <= o && h <= l;
        case "intersect":
            return u < e + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < c && f < o + t.helperProportions.height / 2 && h - t.helperProportions.height / 2 < l;
        case "pointer":
            var a = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left
              , v = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top;
            return n.ui.isOver(v, a, f, u, i.proportions.height, i.proportions.width);
        case "touch":
            return (o >= f && o <= l || h >= f && h <= l || o < f && h > l) && (e >= u && e <= c || s >= u && s <= c || e < u && s > c);
        default:
            return !1
        }
    }
    ;
    n.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var u = n.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null, e = (t.currentItem || t.element).find(":data(droppable)").andSelf(), r, f;
            n: for (r = 0; r < u.length; r++)
                if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                    for (f = 0; f < e.length; f++)
                        if (e[f] == u[r].element[0]) {
                            u[r].proportions.height = 0;
                            continue n
                        }
                    (u[r].visible = u[r].element.css("display") != "none",
                    u[r].visible) && (o == "mousedown" && u[r]._activate.call(u[r], i),
                    u[r].offset = u[r].element.offset(),
                    u[r].proportions = {
                        width: u[r].element[0].offsetWidth,
                        height: u[r].element[0].offsetHeight
                    })
                }
        },
        drop: function(t, i) {
            var r = !1;
            return n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, i) || r),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1,
                this.isover = 0,
                this._deactivate.call(this, i)))
            }),
            r
        },
        dragStart: function(t, i) {
            t.element.parents(":not(body,html)").bind("scroll.droppable", function() {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                var f, u, r, o, e;
                this.options.disabled || this.greedyChild || !this.visible || (f = n.ui.intersect(t, this, this.options.tolerance),
                u = !f && this.isover == 1 ? "isout" : f && this.isover == 0 ? "isover" : null,
                u) && (this.options.greedy && (o = this.options.scope,
                e = this.element.parents(":data(droppable)").filter(function() {
                    return n.data(this, "droppable").options.scope === o
                }),
                e.length && (r = n.data(e[0], "droppable"),
                r.greedyChild = u == "isover" ? 1 : 0)),
                r && u == "isover" && (r.isover = 0,
                r.isout = 1,
                r._out.call(r, i)),
                this[u] = 1,
                this[u == "isout" ? "isover" : "isout"] = 0,
                this[u == "isover" ? "_over" : "_out"].call(this, i),
                r && u == "isout" && (r.isout = 0,
                r.isover = 1,
                r._over.call(r, i)))
            })
        },
        dragStop: function(t, i) {
            t.element.parents(":not(body,html)").unbind("scroll.droppable");
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    }
}(jQuery),
function(n) {
    n.widget("ui.resizable", n.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var i = this, t = this.options, f, r;
            if (this.element.addClass("ui-resizable"),
            n.extend(this, {
                _aspectRatio: !!t.aspectRatio,
                aspectRatio: t.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n('<div class="ui-wrapper" style="overflow: hidden;"><\/div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("resizable", this.element.data("resizable")),
            this.elementIsWrapper = !0,
            this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }),
            this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css({
                margin: this.originalElement.css("margin")
            }),
            this._proportionallyResize()),
            this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this.handles.constructor == String)
                for (this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                f = this.handles.split(","),
                this.handles = {},
                r = 0; r < f.length; r++) {
                    var u = n.trim(f[r])
                      , o = "ui-resizable-" + u
                      , e = n('<div class="ui-resizable-handle ' + o + '"><\/div>');
                    e.css({
                        zIndex: t.zIndex
                    });
                    "se" == u && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    this.handles[u] = ".ui-resizable-" + u;
                    this.element.append(e)
                }
            this._renderAxis = function(t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles)
                    this.handles[i].constructor == String && (this.handles[i] = n(this.handles[i], this.element).show()),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element),
                    u = 0,
                    u = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(),
                    f = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    t.css(f, u),
                    this._proportionallyResize()),
                    !n(this.handles[i]).length
            }
            ;
            this._renderAxis(this.element);
            this._handles = n(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                if (!i.resizing) {
                    if (this.className)
                        var n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    i.axis = n && n[1] ? n[1] : "se"
                }
            });
            t.autoHide && (this._handles.hide(),
            n(this.element).addClass("ui-resizable-autohide").hover(function() {
                t.disabled || (n(this).removeClass("ui-resizable-autohide"),
                i._handles.show())
            }, function() {
                t.disabled || i.resizing || (n(this).addClass("ui-resizable-autohide"),
                i._handles.hide())
            }));
            this._mouseInit()
        },
        destroy: function() {
            var i, t;
            return this._mouseDestroy(),
            i = function(t) {
                n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            }
            ,
            this.elementIsWrapper && (i(this.element),
            t = this.element,
            t.after(this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            })).remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _mouseCapture: function(t) {
            var i = !1;
            for (var r in this.handles)
                n(this.handles[r])[0] == t.target && (i = !0);
            return !this.options.disabled && i
        },
        _mouseStart: function(t) {
            var u = this.options, s = this.element.position(), r = this.element, f, e, o;
            return this.resizing = !0,
            this.documentScroll = {
                top: n(document).scrollTop(),
                left: n(document).scrollLeft()
            },
            (r.is(".ui-draggable") || /absolute/.test(r.css("position"))) && r.css({
                position: "absolute",
                top: s.top,
                left: s.left
            }),
            this._renderProxy(),
            f = i(this.helper.css("left")),
            e = i(this.helper.css("top")),
            u.containment && (f += n(u.containment).scrollLeft() || 0,
            e += n(u.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: f,
                top: e
            },
            this.size = this._helper ? {
                width: r.outerWidth(),
                height: r.outerHeight()
            } : {
                width: r.width(),
                height: r.height()
            },
            this.originalSize = this._helper ? {
                width: r.outerWidth(),
                height: r.outerHeight()
            } : {
                width: r.width(),
                height: r.height()
            },
            this.originalPosition = {
                left: f,
                top: e
            },
            this.sizeDiff = {
                width: r.outerWidth() - r.width(),
                height: r.outerHeight() - r.height()
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = typeof u.aspectRatio == "number" ? u.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            o = n(".ui-resizable-" + this.axis).css("cursor"),
            n("body").css("cursor", o == "auto" ? this.axis + "-resize" : o),
            r.addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var f = this.helper
              , h = this.options
              , c = this
              , r = this.originalMousePosition
              , e = this.axis
              , o = t.pageX - r.left || 0
              , s = t.pageY - r.top || 0
              , u = this._change[e];
            if (!u)
                return !1;
            var i = u.apply(this, [t, o, s])
              , l = n.browser.msie && n.browser.version < 7
              , a = this.sizeDiff;
            return this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)),
            i = this._respectSize(i, t),
            this._propagate("resize", t),
            f.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            this._updateCache(i),
            this._trigger("resize", t, this.ui()),
            !1
        },
        _mouseStop: function(t) {
            var r, i;
            if (this.resizing = !1,
            r = this.options,
            i = this,
            this._helper) {
                var u = this._proportionallyResizeElements
                  , f = u.length && /textarea/i.test(u[0].nodeName)
                  , e = f && n.ui.hasScroll(u[0], "left") ? 0 : i.sizeDiff.height
                  , o = f ? 0 : i.sizeDiff.width
                  , s = {
                    width: i.helper.width() - o,
                    height: i.helper.height() - e
                }
                  , h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null
                  , c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                r.animate || this.element.css(n.extend(s, {
                    top: c,
                    left: h
                }));
                i.helper.height(i.size.height);
                i.helper.width(i.size.width);
                this._helper && !r.animate && this._proportionallyResize()
            }
            return n("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(n) {
            var r = this.options, u, f, e, o, i;
            i = {
                minWidth: t(r.minWidth) ? r.minWidth : 0,
                maxWidth: t(r.maxWidth) ? r.maxWidth : Infinity,
                minHeight: t(r.minHeight) ? r.minHeight : 0,
                maxHeight: t(r.maxHeight) ? r.maxHeight : Infinity
            };
            (this._aspectRatio || n) && (u = i.minHeight * this.aspectRatio,
            e = i.minWidth / this.aspectRatio,
            f = i.maxHeight * this.aspectRatio,
            o = i.maxWidth / this.aspectRatio,
            u > i.minWidth && (i.minWidth = u),
            e > i.minHeight && (i.minHeight = e),
            f < i.maxWidth && (i.maxWidth = f),
            o < i.maxHeight && (i.maxHeight = o));
            this._vBoundaries = i
        },
        _updateCache: function(n) {
            var i = this.options;
            this.offset = this.helper.offset();
            t(n.left) && (this.position.left = n.left);
            t(n.top) && (this.position.top = n.top);
            t(n.height) && (this.size.height = n.height);
            t(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var f = this.options
              , i = this.position
              , r = this.size
              , u = this.axis;
            return t(n.height) ? n.width = n.height * this.aspectRatio : t(n.width) && (n.height = n.width / this.aspectRatio),
            u == "sw" && (n.left = i.left + (r.width - n.width),
            n.top = null),
            u == "nw" && (n.top = i.top + (r.height - n.height),
            n.left = i.left + (r.width - n.width)),
            n
        },
        _respectSize: function(n, i) {
            var y = this.helper, r = this._vBoundaries, p = this._aspectRatio || i.shiftKey, f = this.axis, e = t(n.width) && r.maxWidth && r.maxWidth < n.width, o = t(n.height) && r.maxHeight && r.maxHeight < n.height, s = t(n.width) && r.minWidth && r.minWidth > n.width, h = t(n.height) && r.minHeight && r.minHeight > n.height, u;
            s && (n.width = r.minWidth);
            h && (n.height = r.minHeight);
            e && (n.width = r.maxWidth);
            o && (n.height = r.maxHeight);
            var c = this.originalPosition.left + this.originalSize.width
              , l = this.position.top + this.size.height
              , a = /sw|nw|w/.test(f)
              , v = /nw|ne|n/.test(f);
            return s && a && (n.left = c - r.minWidth),
            e && a && (n.left = c - r.maxWidth),
            h && v && (n.top = l - r.minHeight),
            o && v && (n.top = l - r.maxHeight),
            u = !n.width && !n.height,
            u && !n.left && n.top ? n.top = null : u && !n.top && n.left && (n.left = null),
            n
        },
        _proportionallyResize: function() {
            var e = this.options, i, r, t, u, f;
            if (this._proportionallyResizeElements.length)
                for (i = this.helper || this.element,
                r = 0; r < this._proportionallyResizeElements.length; r++)
                    (t = this._proportionallyResizeElements[r],
                    this.borderDif || (u = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")],
                    f = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")],
                    this.borderDif = n.map(u, function(n, t) {
                        var i = parseInt(n, 10) || 0
                          , r = parseInt(f[t], 10) || 0;
                        return i + r
                    })),
                    n.browser.msie && (n(i).is(":hidden") || n(i).parents(":hidden").length)) || t.css({
                        height: i.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: i.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
        },
        _renderProxy: function() {
            var u = this.element
              , f = this.options;
            if (this.elementOffset = u.offset(),
            this._helper) {
                this.helper = this.helper || n('<div style="overflow:hidden;"><\/div>');
                var t = n.browser.msie && n.browser.version < 7
                  , i = t ? 1 : 0
                  , r = t ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + r,
                    height: this.element.outerHeight() + r,
                    position: "absolute",
                    left: this.elementOffset.left - i + "px",
                    top: this.elementOffset.top - i + "px",
                    zIndex: ++f.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else
                this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var u = this.options
                  , i = this.originalSize
                  , r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: i.width - t
                }
            },
            n: function(n, t, i) {
                var f = this.options
                  , r = this.originalSize
                  , u = this.originalPosition;
                return {
                    top: u.top + i,
                    height: r.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]);
            t != "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    n.extend(n.ui.resizable, {
        version: "1.8.24"
    });
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var r = n(this).data("resizable")
              , t = r.options
              , i = function(t) {
                n(t).each(function() {
                    var t = n(this);
                    t.data("resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            typeof t.alsoResize != "object" || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0],
            i(t.alsoResize)) : n.each(t.alsoResize, function(n) {
                i(n)
            })
        },
        resize: function(t, i) {
            var r = n(this).data("resizable")
              , u = r.options
              , f = r.originalSize
              , e = r.originalPosition
              , s = {
                height: r.size.height - f.height || 0,
                width: r.size.width - f.width || 0,
                top: r.position.top - e.top || 0,
                left: r.position.left - e.left || 0
            }
              , o = function(t, r) {
                n(t).each(function() {
                    var t = n(this)
                      , f = n(this).data("resizable-alsoresize")
                      , u = {}
                      , e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    n.each(e, function(n, t) {
                        var i = (f[t] || 0) + (s[t] || 0);
                        i && i >= 0 && (u[t] = i || null)
                    });
                    t.css(u)
                })
            };
            typeof u.alsoResize != "object" || u.alsoResize.nodeType ? o(u.alsoResize) : n.each(u.alsoResize, function(n, t) {
                o(n, t)
            })
        },
        stop: function() {
            n(this).removeData("resizable-alsoresize")
        }
    });
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = n(this).data("resizable")
              , u = i.options
              , r = i._proportionallyResizeElements
              , f = r.length && /textarea/i.test(r[0].nodeName)
              , s = f && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height
              , h = f ? 0 : i.sizeDiff.width
              , c = {
                width: i.size.width - h,
                height: i.size.height - s
            }
              , e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null
              , o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, o && e ? {
                top: o,
                left: e
            } : {}), {
                duration: u.animateDuration,
                easing: u.animateEasing,
                step: function() {
                    var u = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    r && r.length && n(r[0]).css({
                        width: u.width,
                        height: u.height
                    });
                    i._updateCache(u);
                    i._propagate("resize", t)
                }
            })
        }
    });
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t = n(this).data("resizable"), s = t.options, h = t.element, u = s.containment, r = u instanceof n ? u.get(0) : /parent/.test(u) ? h.parent().get(0) : u, f, e;
            if (r)
                if (t.containerElement = n(r),
                /document/.test(u) || u == document)
                    t.containerOffset = {
                        left: 0,
                        top: 0
                    },
                    t.containerPosition = {
                        left: 0,
                        top: 0
                    },
                    t.parentData = {
                        element: n(document),
                        left: 0,
                        top: 0,
                        width: n(document).width(),
                        height: n(document).height() || document.body.parentNode.scrollHeight
                    };
                else {
                    f = n(r);
                    e = [];
                    n(["Top", "Right", "Left", "Bottom"]).each(function(n, t) {
                        e[n] = i(f.css("padding" + t))
                    });
                    t.containerOffset = f.offset();
                    t.containerPosition = f.position();
                    t.containerSize = {
                        height: f.innerHeight() - e[3],
                        width: f.innerWidth() - e[1]
                    };
                    var o = t.containerOffset
                      , c = t.containerSize.height
                      , l = t.containerSize.width
                      , a = n.ui.hasScroll(r, "left") ? r.scrollWidth : l
                      , v = n.ui.hasScroll(r) ? r.scrollHeight : c;
                    t.parentData = {
                        element: r,
                        left: o.left,
                        top: o.top,
                        width: a,
                        height: v
                    }
                }
        },
        resize: function(t) {
            var i = n(this).data("resizable")
              , c = i.options
              , v = i.containerSize
              , r = i.containerOffset
              , y = i.size
              , o = i.position
              , f = i._aspectRatio || t.shiftKey
              , u = {
                top: 0,
                left: 0
            }
              , s = i.containerElement;
            s[0] != document && /static/.test(s.css("position")) && (u = r);
            o.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - u.left),
            f && (i.size.height = i.size.width / i.aspectRatio),
            i.position.left = c.helper ? r.left : 0);
            o.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top),
            f && (i.size.width = i.size.height * i.aspectRatio),
            i.position.top = i._helper ? r.top : 0);
            i.offset.left = i.parentData.left + i.position.left;
            i.offset.top = i.parentData.top + i.position.top;
            var e = Math.abs((i._helper ? i.offset.left - u.left : i.offset.left - u.left) + i.sizeDiff.width)
              , h = Math.abs((i._helper ? i.offset.top - u.top : i.offset.top - r.top) + i.sizeDiff.height)
              , l = i.containerElement.get(0) == i.element.parent().get(0)
              , a = /relative|absolute/.test(i.containerElement.css("position"));
            l && a && (e -= i.parentData.left);
            e + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - e,
            f && (i.size.height = i.size.width / i.aspectRatio));
            h + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - h,
            f && (i.size.width = i.size.height * i.aspectRatio))
        },
        stop: function() {
            var t = n(this).data("resizable")
              , r = t.options
              , c = t.position
              , u = t.containerOffset
              , f = t.containerPosition
              , e = t.containerElement
              , i = n(t.helper)
              , o = i.offset()
              , s = i.outerWidth() - t.sizeDiff.width
              , h = i.outerHeight() - t.sizeDiff.height;
            t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            });
            t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            })
        }
    });
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = n(this).data("resizable")
              , i = t.options
              , r = t.size;
            t.ghost = t.originalElement.clone();
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = n(this).data("resizable")
              , i = t.options;
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = n(this).data("resizable")
              , i = t.options;
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    });
    n.ui.plugin.add("resizable", "grid", {
        resize: function(t) {
            var i = n(this).data("resizable"), r = i.options, h = i.size, u = i.originalSize, o = i.originalPosition, s = i.axis, c = r._aspectRatio || t.shiftKey, f, e;
            r.grid = typeof r.grid == "number" ? [r.grid, r.grid] : r.grid;
            f = Math.round((h.width - u.width) / (r.grid[0] || 1)) * (r.grid[0] || 1);
            e = Math.round((h.height - u.height) / (r.grid[1] || 1)) * (r.grid[1] || 1);
            /^(se|s|e)$/.test(s) ? (i.size.width = u.width + f,
            i.size.height = u.height + e) : /^(ne)$/.test(s) ? (i.size.width = u.width + f,
            i.size.height = u.height + e,
            i.position.top = o.top - e) : /^(sw)$/.test(s) ? (i.size.width = u.width + f,
            i.size.height = u.height + e,
            i.position.left = o.left - f) : (i.size.width = u.width + f,
            i.size.height = u.height + e,
            i.position.top = o.top - e,
            i.position.left = o.left - f)
        }
    });
    var i = function(n) {
        return parseInt(n, 10) || 0
    }
      , t = function(n) {
        return !isNaN(parseInt(n, 10))
    }
}(jQuery),
function(n) {
    n.widget("ui.selectable", n.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var i = this, t;
            this.element.addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() {
                t = n(i.options.filter, i.element[0]);
                t.addClass("ui-selectee");
                t.each(function() {
                    var t = n(this)
                      , i = t.offset();
                    n.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }
            ;
            this.refresh();
            this.selectees = t.addClass("ui-selectee");
            this._mouseInit();
            this.helper = n("<div class='ui-selectable-helper'><\/div>")
        },
        destroy: function() {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),
            this._mouseDestroy(),
            this
        },
        _mouseStart: function(t) {
            var r = this, i;
            (this.opos = [t.pageX, t.pageY],
            this.options.disabled) || (i = this.options,
            this.selectees = n(i.filter, this.element[0]),
            this._trigger("start", t),
            n(i.appendTo).append(this.helper),
            this.helper.css({
                left: t.clientX,
                top: t.clientY,
                width: 0,
                height: 0
            }),
            i.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var i = n.data(this, "selectable-item");
                i.startselected = !0;
                t.metaKey || t.ctrlKey || (i.$element.removeClass("ui-selected"),
                i.selected = !1,
                i.$element.addClass("ui-unselecting"),
                i.unselecting = !0,
                r._trigger("unselecting", t, {
                    unselecting: i.element
                }))
            }),
            n(t.target).parents().andSelf().each(function() {
                var i = n.data(this, "selectable-item"), u;
                if (i)
                    return u = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"),
                    i.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"),
                    i.unselecting = !u,
                    i.selecting = u,
                    i.selected = u,
                    u ? r._trigger("selecting", t, {
                        selecting: i.element
                    }) : r._trigger("unselecting", t, {
                        unselecting: i.element
                    }),
                    !1
            }))
        },
        _mouseDrag: function(t) {
            var e = this, o;
            if (this.dragged = !0,
            !this.options.disabled) {
                var s = this.options
                  , i = this.opos[0]
                  , r = this.opos[1]
                  , u = t.pageX
                  , f = t.pageY;
                return i > u && (o = u,
                u = i,
                i = o),
                r > f && (o = f,
                f = r,
                r = o),
                this.helper.css({
                    left: i,
                    top: r,
                    width: u - i,
                    height: f - r
                }),
                this.selectees.each(function() {
                    var o = n.data(this, "selectable-item"), h;
                    o && o.element != e.element[0] && (h = !1,
                    s.tolerance == "touch" ? h = !(o.left > u || o.right < i || o.top > f || o.bottom < r) : s.tolerance == "fit" && (h = o.left > i && o.right < u && o.top > r && o.bottom < f),
                    h ? (o.selected && (o.$element.removeClass("ui-selected"),
                    o.selected = !1),
                    o.unselecting && (o.$element.removeClass("ui-unselecting"),
                    o.unselecting = !1),
                    o.selecting || (o.$element.addClass("ui-selecting"),
                    o.selecting = !0,
                    e._trigger("selecting", t, {
                        selecting: o.element
                    }))) : (o.selecting && ((t.metaKey || t.ctrlKey) && o.startselected ? (o.$element.removeClass("ui-selecting"),
                    o.selecting = !1,
                    o.$element.addClass("ui-selected"),
                    o.selected = !0) : (o.$element.removeClass("ui-selecting"),
                    o.selecting = !1,
                    o.startselected && (o.$element.addClass("ui-unselecting"),
                    o.unselecting = !0),
                    e._trigger("unselecting", t, {
                        unselecting: o.element
                    }))),
                    o.selected && (t.metaKey || t.ctrlKey || o.startselected || (o.$element.removeClass("ui-selected"),
                    o.selected = !1,
                    o.$element.addClass("ui-unselecting"),
                    o.unselecting = !0,
                    e._trigger("unselecting", t, {
                        unselecting: o.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(t) {
            var i = this, r;
            return this.dragged = !1,
            r = this.options,
            n(".ui-unselecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting");
                r.unselecting = !1;
                r.startselected = !1;
                i._trigger("unselected", t, {
                    unselected: r.element
                })
            }),
            n(".ui-selecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected");
                r.selecting = !1;
                r.selected = !0;
                r.startselected = !0;
                i._trigger("selected", t, {
                    selected: r.element
                })
            }),
            this._trigger("stop", t),
            this.helper.remove(),
            !1
        }
    });
    n.extend(n.ui.selectable, {
        version: "1.8.24"
    })
}(jQuery),
function(n) {
    n.widget("ui.sortable", n.ui.mouse, {
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var n = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? n.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1;
            this.offset = this.element.offset();
            this._mouseInit();
            this.ready = !0
        },
        destroy: function() {
            n.Widget.prototype.destroy.call(this);
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, i) {
            t === "disabled" ? (this.options[t] = i,
            this.widget()[i ? "addClass" : "removeClass"]("ui-sortable-disabled")) : n.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, i) {
            var f = this, u;
            if (this.reverting || this.options.disabled || this.options.type == "static")
                return !1;
            this._refreshItems(t);
            var r = null
              , e = this
              , o = n(t.target).parents().each(function() {
                if (n.data(this, f.widgetName + "-item") == e)
                    return r = n(this),
                    !1
            });
            return (n.data(t.target, f.widgetName + "-item") == e && (r = n(t.target)),
            !r) ? !1 : this.options.handle && !i && (u = !1,
            n(this.options.handle, r).find("*").andSelf().each(function() {
                this == t.target && (u = !0)
            }),
            !u) ? !1 : (this.currentItem = r,
            this._removeCurrentsFromItems(),
            !0)
        },
        _mouseStart: function(t, i, r) {
            var u = this.options, e = this, f;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(t),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] != this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            u.containment && this._setContainment(),
            u.cursor && (n("body").css("cursor") && (this._storedCursor = n("body").css("cursor")),
            n("body").css("cursor", u.cursor)),
            u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", u.opacity)),
            u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", u.zIndex)),
            this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", t, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !r)
                for (f = this.containers.length - 1; f >= 0; f--)
                    this.containers[f]._trigger("activate", t, e._uiHash(this));
            return n.ui.ddmanager && (n.ui.ddmanager.current = this),
            n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var i, r, f;
            for (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (i = this.options,
            r = !1,
            this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)),
            t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))),
            r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && this.options.axis == "y" || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && this.options.axis == "x" || (this.helper[0].style.top = this.position.top + "px"),
            f = this.items.length - 1; f >= 0; f--) {
                var u = this.items[f]
                  , e = u.item[0]
                  , o = this._intersectsWithPointer(u);
                if (o && u.instance === this.currentContainer && e != this.currentItem[0] && this.placeholder[o == 1 ? "next" : "prev"]()[0] != e && !n.ui.contains(this.placeholder[0], e) && (this.options.type == "semi-dynamic" ? !n.ui.contains(this.element[0], e) : !0)) {
                    if (this.direction = o == 1 ? "down" : "up",
                    this.options.tolerance == "pointer" || this._intersectsWithSides(u))
                        this._rearrange(t, u);
                    else
                        break;
                    this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t),
                this.options.revert) {
                    var r = this
                      , u = r.placeholder.offset();
                    r.reverting = !0;
                    n(this.helper).animate({
                        left: u.left - this.offset.parent.left - r.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: u.top - this.offset.parent.top - r.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        r._clear(t)
                    })
                } else
                    this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            var i = this, t;
            if (this.dragging)
                for (this._mouseUp({
                    target: null
                }),
                this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(),
                t = this.containers.length - 1; t >= 0; t--)
                    this.containers[t]._trigger("deactivate", null, i._uiHash(this)),
                    this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, i._uiHash(this)),
                    this.containers[t].containerCache.over = 0);
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(),
            n.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            n(r).each(function() {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
            }),
            !i.length && t.key && i.push(t.key + "="),
            i.join("&")
        },
        toArray: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            r.each(function() {
                i.push(n(t.item || this).attr(t.attribute || "id") || "")
            }),
            i
        },
        _intersectsWith: function(n) {
            var t = this.positionAbs.left
              , h = t + this.helperProportions.width
              , i = this.positionAbs.top
              , c = i + this.helperProportions.height
              , r = n.left
              , f = r + n.width
              , u = n.top
              , e = u + n.height
              , o = this.offset.click.top
              , s = this.offset.click.left
              , l = i + o > u && i + o < e && t + s > r && t + s < f;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? l : r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
        },
        _intersectsWithPointer: function(t) {
            var u = this.options.axis === "x" || n.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height)
              , f = this.options.axis === "y" || n.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width)
              , e = u && f
              , i = this._getDragVerticalDirection()
              , r = this._getDragHorizontalDirection();
            return e ? this.floating ? r && r == "right" || i == "down" ? 2 : 1 : i && (i == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var u = n.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
              , f = n.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
              , i = this._getDragVerticalDirection()
              , r = this._getDragHorizontalDirection();
            return this.floating && r ? r == "right" && f || r == "left" && !f : i && (i == "down" && u || i == "up" && !u)
        },
        _getDragVerticalDirection: function() {
            var n = this.positionAbs.top - this.lastPositionAbs.top;
            return n != 0 && (n > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var n = this.positionAbs.left - this.lastPositionAbs.left;
            return n != 0 && (n > 0 ? "right" : "left")
        },
        refresh: function(n) {
            return this._refreshItems(n),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var n = this.options;
            return n.connectWith.constructor == String ? [n.connectWith] : n.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var h = this, s = [], u = [], e = this._connectWith(), o, f, i, r;
            if (e && t)
                for (r = e.length - 1; r >= 0; r--)
                    for (o = n(e[r]),
                    f = o.length - 1; f >= 0; f--)
                        i = n.data(o[f], this.widgetName),
                        i && i != this && !i.options.disabled && u.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
            for (u.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            r = u.length - 1; r >= 0; r--)
                u[r][0].each(function() {
                    s.push(this)
                });
            return n(s)
        },
        _removeCurrentsFromItems: function() {
            for (var t, i = this.currentItem.find(":data(" + this.widgetName + "-item)"), n = 0; n < this.items.length; n++)
                for (t = 0; t < i.length; t++)
                    i[t] == this.items[n].item[0] && this.items.splice(n, 1)
        },
        _refreshItems: function(t) {
            var o, i, r, s, h, u, l, c;
            this.items = [];
            this.containers = [this];
            var a = this.items
              , v = this
              , f = [[n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : n(this.options.items, this.element), this]]
              , e = this._connectWith();
            if (e && this.ready)
                for (r = e.length - 1; r >= 0; r--)
                    for (o = n(e[r]),
                    u = o.length - 1; u >= 0; u--)
                        i = n.data(o[u], this.widgetName),
                        i && i != this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                            item: this.currentItem
                        }) : n(i.options.items, i.element), i]),
                        this.containers.push(i));
            for (r = f.length - 1; r >= 0; r--)
                for (s = f[r][1],
                h = f[r][0],
                u = 0,
                l = h.length; u < l; u++)
                    c = n(h[u]),
                    c.data(this.widgetName + "-item", s),
                    a.push({
                        item: c,
                        instance: s,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(t) {
            var r, f, i, u;
            for (this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
            i = this.items.length - 1; i >= 0; i--)
                (r = this.items[i],
                r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item,
                t || (r.width = f.outerWidth(),
                r.height = f.outerHeight()),
                u = f.offset(),
                r.left = u.left,
                r.top = u.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    u = this.containers[i].element.offset(),
                    this.containers[i].containerCache.left = u.left,
                    this.containers[i].containerCache.top = u.top,
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            var i = t || this, r = i.options, u;
            r.placeholder && r.placeholder.constructor != String || (u = r.placeholder,
            r.placeholder = {
                element: function() {
                    var t = n(document.createElement(i.currentItem[0].nodeName)).addClass(u || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                    return u || (t.style.visibility = "hidden"),
                    t
                },
                update: function(n, t) {
                    (!u || r.forcePlaceholderSize) && (t.height() || t.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)),
                    t.width() || t.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                }
            });
            i.placeholder = n(r.placeholder.element.call(i.element, i.currentItem));
            i.currentItem.after(i.placeholder);
            r.placeholder.update(i, i.placeholder)
        },
        _contactContainers: function(t) {
            for (var u, o, f = null, i = null, r = this.containers.length - 1; r >= 0; r--)
                if (!n.ui.contains(this.currentItem[0], this.containers[r].element[0]))
                    if (this._intersectsWith(this.containers[r].containerCache)) {
                        if (f && n.ui.contains(this.containers[r].element[0], f.element[0]))
                            continue;
                        f = this.containers[r];
                        i = r
                    } else
                        this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)),
                        this.containers[r].containerCache.over = 0);
            if (f)
                if (this.containers.length === 1)
                    this.containers[i]._trigger("over", t, this._uiHash(this)),
                    this.containers[i].containerCache.over = 1;
                else if (this.currentContainer != this.containers[i]) {
                    var h = 1e4
                      , e = null
                      , s = this.positionAbs[this.containers[i].floating ? "left" : "top"];
                    for (u = this.items.length - 1; u >= 0; u--)
                        n.ui.contains(this.containers[i].element[0], this.items[u].item[0]) && (o = this.containers[i].floating ? this.items[u].item.offset().left : this.items[u].item.offset().top,
                        Math.abs(o - s) < h && (h = Math.abs(o - s),
                        e = this.items[u],
                        this.direction = o - s > 0 ? "down" : "up"));
                    if (!e && !this.options.dropOnEmpty)
                        return;
                    this.currentContainer = this.containers[i];
                    e ? this._rearrange(t, e, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
                    this._trigger("change", t, this._uiHash());
                    this.containers[i]._trigger("change", t, this._uiHash(this));
                    this.options.placeholder.update(this.currentContainer, this.placeholder);
                    this.containers[i]._trigger("over", t, this._uiHash(this));
                    this.containers[i].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var r = this.options
              , i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || n(r.appendTo != "parent" ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]),
            i[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (i[0].style.width == "" || r.forceHelperSize) && i.width(this.currentItem.width()),
            (i[0].style.height == "" || r.forceHelperSize) && i.height(this.currentItem.height()),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left"in t && (this.offset.click.left = t.left + this.margins.left);
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top"in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition == "absolute" && this.scrollParent[0] != document && n.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && n.browser.msie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var n = this.currentItem.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var i = this.options;
            if (i.containment == "parent" && (i.containment = this.helper[0].parentNode),
            (i.containment == "document" || i.containment == "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n(i.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (n(i.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            !/^(document|window|parent)$/.test(i.containment)) {
                var t = n(i.containment)[0]
                  , r = n(i.containment).offset()
                  , u = n(t).css("overflow") != "hidden";
                this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t == "absolute" ? 1 : -1
              , e = this.options
              , u = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (n.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r),
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (n.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r)
            }
        },
        _generatePosition: function(t) {
            var i = this.options, o = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, s = /(html|body)/i.test(o[0].tagName), f, e, r, u;
            return this.cssPosition != "relative" || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            f = t.pageX,
            e = t.pageY,
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)),
            i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1],
            e = this.containment ? (r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3]) ? (r - this.offset.click.top < this.containment[1]) ? r + i.grid[1] : r - i.grid[1] : r : r,
            u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0],
            f = this.containment ? (u - this.offset.click.left < this.containment[0] || u - this.offset.click.left > this.containment[2]) ? (u - this.offset.click.left < this.containment[0]) ? u + i.grid[0] : u - i.grid[0] : u : u)),
            {
                top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (n.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (n.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(n, t, i, r) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var u = this
              , f = this.counter;
            window.setTimeout(function() {
                f == u.counter && u.refreshPositions(!r)
            }, 0)
        },
        _clear: function(t, i) {
            var u, f, r;
            if (this.reverting = !1,
            u = [],
            f = this,
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] == this.currentItem[0]) {
                for (r in this._storedCSS)
                    (this._storedCSS[r] == "auto" || this._storedCSS[r] == "static") && (this._storedCSS[r] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !i && u.push(function(n) {
                this._trigger("receive", n, this._uiHash(this.fromOutside))
            }),
            (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !i && u.push(function(n) {
                this._trigger("update", n, this._uiHash())
            }),
            this !== this.currentContainer && (i || (u.push(function(n) {
                this._trigger("remove", n, this._uiHash())
            }),
            u.push(function(n) {
                return function(t) {
                    n._trigger("receive", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            u.push(function(n) {
                return function(t) {
                    n._trigger("update", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            r = this.containers.length - 1; r >= 0; r--)
                i || u.push(function(n) {
                    return function(t) {
                        n._trigger("deactivate", t, this._uiHash(this))
                    }
                }
                .call(this, this.containers[r])),
                this.containers[r].containerCache.over && (u.push(function(n) {
                    return function(t) {
                        n._trigger("out", t, this._uiHash(this))
                    }
                }
                .call(this, this.containers[r])),
                this.containers[r].containerCache.over = 0);
            if (this._storedCursor && n("body").css("cursor", this._storedCursor),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex),
            this.dragging = !1,
            this.cancelHelperRemoval) {
                if (!i) {
                    for (this._trigger("beforeStop", t, this._uiHash()),
                    r = 0; r < u.length; r++)
                        u[r].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (i || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.helper[0] != this.currentItem[0] && this.helper.remove(),
            this.helper = null,
            !i) {
                for (r = 0; r < u.length; r++)
                    u[r].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || n([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    });
    n.extend(n.ui.sortable, {
        version: "1.8.24"
    })
}(jQuery),
function(n) {
    n.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: !0,
            clearStyle: !1,
            collapsible: !1,
            event: "click",
            fillSpace: !1,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: !1,
            navigationFilter: function() {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function() {
            var t = this, i = t.options, r, u;
            t.running = 0;
            t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
            t.headers = t.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
                i.disabled || n(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function() {
                i.disabled || n(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function() {
                i.disabled || n(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function() {
                i.disabled || n(this).removeClass("ui-state-focus")
            });
            t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
            i.navigation && (r = t.element.find("a").filter(i.navigationFilter).eq(0),
            r.length && (u = r.closest(".ui-accordion-header"),
            t.active = u.length ? u : r.closest(".ui-accordion-content").prev()));
            t.active = t._findActive(t.active || i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
            t.active.next().addClass("ui-accordion-content-active");
            t._createIcons();
            t.resize();
            t.element.attr("role", "tablist");
            t.headers.attr("role", "tab").bind("keydown.accordion", function(n) {
                return t._keydown(n)
            }).next().attr("role", "tabpanel");
            t.headers.not(t.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).next().hide();
            t.active.length ? t.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }) : t.headers.eq(0).attr("tabIndex", 0);
            n.browser.safari || t.headers.find("a").attr("tabIndex", -1);
            i.event && t.headers.bind(i.event.split(" ").join(".accordion ") + ".accordion", function(n) {
                t._clickHandler.call(t, n, this);
                n.preventDefault()
            })
        },
        _createIcons: function() {
            var t = this.options;
            t.icons && (n("<span><\/span>").addClass("ui-icon " + t.icons.header).prependTo(this.headers),
            this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected),
            this.element.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.children(".ui-icon").remove();
            this.element.removeClass("ui-accordion-icons")
        },
        destroy: function() {
            var t = this.options, i;
            return this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
            this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),
            this.headers.find("a").removeAttr("tabIndex"),
            this._destroyIcons(),
            i = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled"),
            (t.autoHeight || t.fillHeight) && i.css("height", ""),
            n.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, i) {
            n.Widget.prototype._setOption.apply(this, arguments);
            t == "active" && this.activate(i);
            t == "icons" && (this._destroyIcons(),
            i && this._createIcons());
            t == "disabled" && this.headers.add(this.headers.next())[i ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function(t) {
            if (!this.options.disabled && !t.altKey && !t.ctrlKey) {
                var i = n.ui.keyCode
                  , u = this.headers.length
                  , f = this.headers.index(t.target)
                  , r = !1;
                switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    r = this.headers[(f + 1) % u];
                    break;
                case i.LEFT:
                case i.UP:
                    r = this.headers[(f - 1 + u) % u];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._clickHandler({
                        target: t.target
                    }, t.target);
                    t.preventDefault()
                }
                return r ? (n(t.target).attr("tabIndex", -1),
                n(r).attr("tabIndex", 0),
                r.focus(),
                !1) : !0
            }
        },
        resize: function() {
            var i = this.options, t, r;
            return i.fillSpace ? (n.browser.msie && (r = this.element.parent().css("overflow"),
            this.element.parent().css("overflow", "hidden")),
            t = this.element.parent().height(),
            n.browser.msie && this.element.parent().css("overflow", r),
            this.headers.each(function() {
                t -= n(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : i.autoHeight && (t = 0,
            this.headers.next().each(function() {
                t = Math.max(t, n(this).height("").height())
            }).height(t)),
            this
        },
        activate: function(n) {
            this.options.active = n;
            var t = this._findActive(n)[0];
            return this._clickHandler({
                target: t
            }, t),
            this
        },
        _findActive: function(t) {
            return t ? typeof t == "number" ? this.headers.filter(":eq(" + t + ")") : this.headers.not(this.headers.not(t)) : t === !1 ? n([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function(t, i) {
            var r = this.options, u, f;
            if (!r.disabled) {
                if (!t.target) {
                    if (!r.collapsible)
                        return;
                    this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header);
                    this.active.next().addClass("ui-accordion-content-active");
                    var e = this.active.next()
                      , s = {
                        options: r,
                        newHeader: n([]),
                        oldHeader: r.active,
                        newContent: n([]),
                        oldContent: e
                    }
                      , o = this.active = n([]);
                    this._toggle(o, e, s);
                    return
                }
                if (u = n(t.currentTarget || i),
                f = u[0] === this.active[0],
                r.active = r.collapsible && f ? !1 : this.headers.index(u),
                !this.running && (r.collapsible || !f)) {
                    var h = this.active
                      , o = u.next()
                      , e = this.active.next()
                      , s = {
                        options: r,
                        newHeader: f && r.collapsible ? n([]) : u,
                        oldHeader: this.active,
                        newContent: f && r.collapsible ? n([]) : o,
                        oldContent: e
                    }
                      , c = this.headers.index(this.active[0]) > this.headers.index(u[0]);
                    this.active = f ? n([]) : u;
                    this._toggle(o, e, s, f, c);
                    h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header);
                    f || (u.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(r.icons.header).addClass(r.icons.headerSelected),
                    u.next().addClass("ui-accordion-content-active"));
                    return
                }
            }
        },
        _toggle: function(t, i, r, u, f) {
            var o = this, e = o.options, c, h;
            if (o.toShow = t,
            o.toHide = i,
            o.data = r,
            c = function() {
                if (o)
                    return o._completed.apply(o, arguments)
            }
            ,
            o._trigger("changestart", null, o.data),
            o.running = i.size() === 0 ? t.size() : i.size(),
            e.animated) {
                h = {};
                h = e.collapsible && u ? {
                    toShow: n([]),
                    toHide: i,
                    complete: c,
                    down: f,
                    autoHeight: e.autoHeight || e.fillSpace
                } : {
                    toShow: t,
                    toHide: i,
                    complete: c,
                    down: f,
                    autoHeight: e.autoHeight || e.fillSpace
                };
                e.proxied || (e.proxied = e.animated);
                e.proxiedDuration || (e.proxiedDuration = e.duration);
                e.animated = n.isFunction(e.proxied) ? e.proxied(h) : e.proxied;
                e.duration = n.isFunction(e.proxiedDuration) ? e.proxiedDuration(h) : e.proxiedDuration;
                var l = n.ui.accordion.animations
                  , a = e.duration
                  , s = e.animated;
                !s || l[s] || n.easing[s] || (s = "slide");
                l[s] || (l[s] = function(n) {
                    this.slide(n, {
                        easing: s,
                        duration: a || 700
                    })
                }
                );
                l[s](h)
            } else
                e.collapsible && u ? t.toggle() : (i.hide(),
                t.show()),
                c(!0);
            i.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).blur();
            t.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function(n) {
            (this.running = n ? 0 : --this.running,
            this.running) || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                height: "",
                overflow: ""
            }),
            this.toHide.removeClass("ui-accordion-content-active"),
            this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className),
            this._trigger("change", null, this.data))
        }
    });
    n.extend(n.ui.accordion, {
        version: "1.8.24",
        animations: {
            slide: function(t, i) {
                if (t = n.extend({
                    easing: "swing",
                    duration: 300
                }, t, i),
                !t.toHide.size()) {
                    t.toShow.animate({
                        height: "show",
                        paddingTop: "show",
                        paddingBottom: "show"
                    }, t);
                    return
                }
                if (!t.toShow.size()) {
                    t.toHide.animate({
                        height: "hide",
                        paddingTop: "hide",
                        paddingBottom: "hide"
                    }, t);
                    return
                }
                var s = t.toShow.css("overflow"), f = 0, u = {}, e = {}, o, r = t.toShow;
                o = r[0].style.width;
                r.width(r.parent().width() - parseFloat(r.css("paddingLeft")) - parseFloat(r.css("paddingRight")) - (parseFloat(r.css("borderLeftWidth")) || 0) - (parseFloat(r.css("borderRightWidth")) || 0));
                n.each(["height", "paddingTop", "paddingBottom"], function(i, r) {
                    e[r] = "hide";
                    var f = ("" + n.css(t.toShow[0], r)).match(/^([\d+-.]+)(.*)$/);
                    u[r] = {
                        value: f[1],
                        unit: f[2] || "px"
                    }
                });
                t.toShow.css({
                    height: 0,
                    overflow: "hidden"
                }).show();
                t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(e, {
                    step: function(n, i) {
                        i.prop == "height" && (f = i.end - i.start == 0 ? 0 : (i.now - i.start) / (i.end - i.start));
                        t.toShow[0].style[i.prop] = f * u[i.prop].value + u[i.prop].unit
                    },
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        t.autoHeight || t.toShow.css("height", "");
                        t.toShow.css({
                            width: o,
                            overflow: s
                        });
                        t.complete()
                    }
                })
            },
            bounceslide: function(n) {
                this.slide(n, {
                    easing: n.down ? "easeOutBounce" : "swing",
                    duration: n.down ? 1e3 : 200
                })
            }
        }
    })
}(jQuery),
function(n) {
    var t = 0;
    n.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function() {
            var t = this, r = this.element[0].ownerDocument, i;
            this.isMultiLine = this.element.is("textarea");
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function(r) {
                if (!t.options.disabled && !t.element.propAttr("readOnly")) {
                    i = !1;
                    var u = n.ui.keyCode;
                    switch (r.keyCode) {
                    case u.PAGE_UP:
                        t._move("previousPage", r);
                        break;
                    case u.PAGE_DOWN:
                        t._move("nextPage", r);
                        break;
                    case u.UP:
                        t._keyEvent("previous", r);
                        break;
                    case u.DOWN:
                        t._keyEvent("next", r);
                        break;
                    case u.ENTER:
                    case u.NUMPAD_ENTER:
                        t.menu.active && (i = !0,
                        r.preventDefault());
                    case u.TAB:
                        if (!t.menu.active)
                            return;
                        t.menu.select(r);
                        break;
                    case u.ESCAPE:
                        t.element.val(t.term);
                        t.close(r);
                        break;
                    default:
                        clearTimeout(t.searching);
                        t.searching = setTimeout(function() {
                            t.term != t.element.val() && (t.selectedItem = null,
                            t.search(null, r))
                        }, t.options.delay)
                    }
                }
            }).bind("keypress.autocomplete", function(n) {
                i && (i = !1,
                n.preventDefault())
            }).bind("focus.autocomplete", function() {
                t.options.disabled || (t.selectedItem = null,
                t.previous = t.element.val())
            }).bind("blur.autocomplete", function(n) {
                t.options.disabled || (clearTimeout(t.searching),
                t.closing = setTimeout(function() {
                    t.close(n);
                    t._change(n)
                }, 150))
            });
            this._initSource();
            this.menu = n("<ul><\/ul>").addClass("ui-autocomplete").appendTo(n(this.options.appendTo || "body", r)[0]).mousedown(function(i) {
                var r = t.menu.element[0];
                n(i.target).closest(".ui-menu-item").length || setTimeout(function() {
                    n(document).one("mousedown", function(i) {
                        i.target === t.element[0] || i.target === r || n.ui.contains(r, i.target) || t.close()
                    })
                }, 1);
                setTimeout(function() {
                    clearTimeout(t.closing)
                }, 13)
            }).menu({
                focus: function(n, i) {
                    var r = i.item.data("item.autocomplete");
                    !1 !== t._trigger("focus", n, {
                        item: r
                    }) && /^key/.test(n.originalEvent.type) && t.element.val(r.value)
                },
                selected: function(n, i) {
                    var u = i.item.data("item.autocomplete")
                      , f = t.previous;
                    t.element[0] !== r.activeElement && (t.element.focus(),
                    t.previous = f,
                    setTimeout(function() {
                        t.previous = f;
                        t.selectedItem = u
                    }, 1));
                    !1 !== t._trigger("select", n, {
                        item: u
                    }) && t.element.val(u.value);
                    t.term = t.element.val();
                    t.close(n);
                    t.selectedItem = u
                },
                blur: function() {
                    t.menu.element.is(":visible") && t.element.val() !== t.term && t.element.val(t.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu");
            n.fn.bgiframe && this.menu.element.bgiframe();
            t.beforeunloadHandler = function() {
                t.element.removeAttr("autocomplete")
            }
            ;
            n(window).bind("beforeunload", t.beforeunloadHandler)
        },
        destroy: function() {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
            this.menu.element.remove();
            n(window).unbind("beforeunload", this.beforeunloadHandler);
            n.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, i) {
            n.Widget.prototype._setOption.apply(this, arguments);
            t === "source" && this._initSource();
            t === "appendTo" && this.menu.element.appendTo(n(i || "body", this.element[0].ownerDocument)[0]);
            t === "disabled" && i && this.xhr && this.xhr.abort()
        },
        _initSource: function() {
            var t = this, i, r;
            n.isArray(this.options.source) ? (i = this.options.source,
            this.source = function(t, r) {
                r(n.ui.autocomplete.filter(i, t.term))
            }
            ) : typeof this.options.source == "string" ? (r = this.options.source,
            this.source = function(i, u) {
                t.xhr && t.xhr.abort();
                t.xhr = n.ajax({
                    url: r,
                    data: i,
                    dataType: "json",
                    success: function(n) {
                        u(n)
                    },
                    error: function() {
                        u([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        search: function(n, t) {
            return (n = n != null ? n : this.element.val(),
            this.term = this.element.val(),
            n.length < this.options.minLength) ? this.close(t) : (clearTimeout(this.closing),
            this._trigger("search", t) === !1) ? void 0 : this._search(n)
        },
        _search: function(n) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.source({
                term: n
            }, this._response())
        },
        _response: function() {
            var n = this
              , i = ++t;
            return function(r) {
                i === t && n.__response(r);
                n.pending--;
                n.pending || n.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(n) {
            !this.options.disabled && n && n.length ? (n = this._normalize(n),
            this._suggest(n),
            this._trigger("open")) : this.close()
        },
        close: function(n) {
            clearTimeout(this.closing);
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.deactivate(),
            this._trigger("close", n))
        },
        _change: function(n) {
            this.previous !== this.element.val() && this._trigger("change", n, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : n.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(i, t);
            this.menu.deactivate();
            this.menu.refresh();
            i.show();
            this._resizeMenu();
            i.position(n.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next(new n.Event("mouseover"))
        },
        _resizeMenu: function() {
            var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var r = this;
            n.each(i, function(n, i) {
                r._renderItem(t, i)
            })
        },
        _renderItem: function(t, i) {
            return n("<li><\/li>").data("item.autocomplete", i).append(n("<a><\/a>").text(i.label)).appendTo(t)
        },
        _move: function(n, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.first() && /^previous/.test(n) || this.menu.last() && /^next/.test(n)) {
                this.element.val(this.term);
                this.menu.deactivate();
                return
            }
            this.menu[n](t)
        },
        widget: function() {
            return this.menu.element
        },
        _keyEvent: function(n, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t),
            t.preventDefault())
        }
    });
    n.extend(n.ui.autocomplete, {
        escapeRegex: function(n) {
            return n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var r = new RegExp(n.ui.autocomplete.escapeRegex(i),"i");
            return n.grep(t, function(n) {
                return r.test(n.label || n.value || n)
            })
        }
    })
}(jQuery),
function(n) {
    n.widget("ui.menu", {
        _create: function() {
            var t = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function(i) {
                n(i.target).closest(".ui-menu-item a").length && (i.preventDefault(),
                t.select(i))
            });
            this.refresh()
        },
        refresh: function() {
            var t = this
              , i = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
            i.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(i) {
                t.activate(i, n(this).parent())
            }).mouseleave(function() {
                t.deactivate()
            })
        },
        activate: function(n, t) {
            if (this.deactivate(),
            this.hasScroll()) {
                var i = t.offset().top - this.element.offset().top
                  , r = this.element.scrollTop()
                  , u = this.element.height();
                i < 0 ? this.element.scrollTop(r + i) : i >= u && this.element.scrollTop(r + i - u + t.height())
            }
            this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
            this._trigger("focus", n, {
                item: t
            })
        },
        deactivate: function() {
            this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),
            this._trigger("blur"),
            this.active = null)
        },
        next: function(n) {
            this.move("next", ".ui-menu-item:first", n)
        },
        previous: function(n) {
            this.move("prev", ".ui-menu-item:last", n)
        },
        first: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function(n, t, i) {
            if (!this.active) {
                this.activate(i, this.element.children(t));
                return
            }
            var r = this.active[n + "All"](".ui-menu-item").eq(0);
            r.length ? this.activate(i, r) : this.activate(i, this.element.children(t))
        },
        nextPage: function(t) {
            if (this.hasScroll()) {
                if (!this.active || this.last()) {
                    this.activate(t, this.element.children(".ui-menu-item:first"));
                    return
                }
                var r = this.active.offset().top
                  , u = this.element.height()
                  , i = this.element.children(".ui-menu-item").filter(function() {
                    var t = n(this).offset().top - r - u + n(this).height();
                    return t < 10 && t > -10
                });
                i.length || (i = this.element.children(".ui-menu-item:last"));
                this.activate(t, i)
            } else
                this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function(t) {
            if (this.hasScroll()) {
                if (!this.active || this.first()) {
                    this.activate(t, this.element.children(".ui-menu-item:last"));
                    return
                }
                var r = this.active.offset().top
                  , u = this.element.height()
                  , i = this.element.children(".ui-menu-item").filter(function() {
                    var t = n(this).offset().top - r + u - n(this).height();
                    return t < 10 && t > -10
                });
                i.length || (i = this.element.children(".ui-menu-item:first"));
                this.activate(t, i)
            } else
                this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function() {
            return this.element.height() < this.element[n.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function(n) {
            this._trigger("selected", n, {
                item: this.active
            })
        }
    })
}(jQuery),
function(n) {
    var i, r, u, t, f = "ui-button ui-widget ui-state-default ui-corner-all", s = "ui-state-hover ui-state-active ", e = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", h = function() {
        var t = n(this).find(":ui-button");
        setTimeout(function() {
            t.button("refresh")
        }, 1)
    }, o = function(t) {
        var i = t.name
          , r = t.form
          , u = n([]);
        return i && (u = r ? n(r).find("[name='" + i + "']") : n("[name='" + i + "']", t.ownerDocument).filter(function() {
            return !this.form
        })),
        u
    };
    n.widget("ui.button", {
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset.button").bind("reset.button", h);
            typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled);
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var s = this
              , e = this.options
              , c = this.type === "checkbox" || this.type === "radio"
              , a = "ui-state-hover" + (c ? "" : " ui-state-active")
              , l = "ui-state-focus";
            e.label === null && (e.label = this.buttonElement.html());
            this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter.button", function() {
                e.disabled || (n(this).addClass("ui-state-hover"),
                this === i && n(this).addClass("ui-state-active"))
            }).bind("mouseleave.button", function() {
                e.disabled || n(this).removeClass(a)
            }).bind("click.button", function(n) {
                e.disabled && (n.preventDefault(),
                n.stopImmediatePropagation())
            });
            this.element.bind("focus.button", function() {
                s.buttonElement.addClass(l)
            }).bind("blur.button", function() {
                s.buttonElement.removeClass(l)
            });
            c && (this.element.bind("change.button", function() {
                t || s.refresh()
            }),
            this.buttonElement.bind("mousedown.button", function(n) {
                e.disabled || (t = !1,
                r = n.pageX,
                u = n.pageY)
            }).bind("mouseup.button", function(n) {
                e.disabled || (r !== n.pageX || u !== n.pageY) && (t = !0)
            }));
            this.type === "checkbox" ? this.buttonElement.bind("click.button", function() {
                if (e.disabled || t)
                    return !1;
                n(this).toggleClass("ui-state-active");
                s.buttonElement.attr("aria-pressed", s.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click.button", function() {
                if (e.disabled || t)
                    return !1;
                n(this).addClass("ui-state-active");
                s.buttonElement.attr("aria-pressed", "true");
                var i = s.element[0];
                o(i).not(i).map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown.button", function() {
                if (e.disabled)
                    return !1;
                n(this).addClass("ui-state-active");
                i = this;
                n(document).one("mouseup", function() {
                    i = null
                })
            }).bind("mouseup.button", function() {
                if (e.disabled)
                    return !1;
                n(this).removeClass("ui-state-active")
            }).bind("keydown.button", function(t) {
                if (e.disabled)
                    return !1;
                (t.keyCode == n.ui.keyCode.SPACE || t.keyCode == n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
            }).bind("keyup.button", function() {
                n(this).removeClass("ui-state-active")
            }),
            this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === n.ui.keyCode.SPACE && n(this).click()
            }));
            this._setOption("disabled", e.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            var n, t, i;
            this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button";
            this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().filter(":last"),
            t = "label[for='" + this.element.attr("id") + "']",
            this.buttonElement = n.find(t),
            this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(),
            this.buttonElement = n.filter(t),
            this.buttonElement.length || (this.buttonElement = n.find(t))),
            this.element.addClass("ui-helper-hidden-accessible"),
            i = this.element.is(":checked"),
            i && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.attr("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(f + " " + s + " " + e).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title");
            n.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, i) {
            if (n.Widget.prototype._setOption.apply(this, arguments),
            t === "disabled") {
                i ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var t = this.element.is(":disabled");
            t !== this.options.disabled && this._setOption("disabled", t);
            this.type === "radio" ? o(this.element[0]).each(function() {
                n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var i = this.buttonElement.removeClass(e)
              , f = n("<span><\/span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text()
              , t = this.options.icons
              , u = t.primary && t.secondary
              , r = [];
            t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")),
            t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"),
            t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"),
            this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"),
            this.hasTitle || i.attr("title", f))) : r.push("ui-button-text-only");
            i.addClass(r.join(" "))
        }
    });
    n.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, i) {
            t === "disabled" && this.buttons.button("option", t, i);
            n.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function() {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
            n.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery),
function(n, t) {
    var i = "ui-dialog ui-widget ui-widget-content ui-corner-all "
      , r = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }
      , u = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    n.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function(t) {
                    var i = n(this).css(t).offset().top;
                    i < 0 && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title");
            typeof this.originalTitle != "string" && (this.originalTitle = "");
            this.options.title = this.options.title || this.originalTitle;
            var t = this
              , r = t.options
              , s = r.title || "&#160;"
              , o = n.ui.dialog.getTitleId(t.element)
              , e = (t.uiDialog = n("<div><\/div>")).appendTo(document.body).hide().addClass(i + r.dialogClass).css({
                zIndex: r.zIndex
            }).attr("tabIndex", -1).css("outline", 0).keydown(function(i) {
                r.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === n.ui.keyCode.ESCAPE && (t.close(i),
                i.preventDefault())
            }).attr({
                role: "dialog",
                "aria-labelledby": o
            }).mousedown(function(n) {
                t.moveToTop(!1, n)
            })
              , h = t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(e)
              , f = (t.uiDialogTitlebar = n("<div><\/div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(e)
              , u = n('<a href="#"><\/a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                u.addClass("ui-state-hover")
            }, function() {
                u.removeClass("ui-state-hover")
            }).focus(function() {
                u.addClass("ui-state-focus")
            }).blur(function() {
                u.removeClass("ui-state-focus")
            }).click(function(n) {
                return t.close(n),
                !1
            }).appendTo(f)
              , c = (t.uiDialogTitlebarCloseText = n("<span><\/span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u)
              , l = n("<span><\/span>").addClass("ui-dialog-title").attr("id", o).html(s).prependTo(f);
            n.isFunction(r.beforeclose) && !n.isFunction(r.beforeClose) && (r.beforeClose = r.beforeclose);
            f.find("*").add(f).disableSelection();
            r.draggable && n.fn.draggable && t._makeDraggable();
            r.resizable && n.fn.resizable && t._makeResizable();
            t._createButtons(r.buttons);
            t._isOpen = !1;
            n.fn.bgiframe && e.bgiframe()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        destroy: function() {
            var n = this;
            return n.overlay && n.overlay.destroy(),
            n.uiDialog.hide(),
            n.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),
            n.uiDialog.remove(),
            n.originalTitle && n.element.attr("title", n.originalTitle),
            n
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(t) {
            var i = this, r, u;
            if (!1 !== i._trigger("beforeClose", t))
                return i.overlay && i.overlay.destroy(),
                i.uiDialog.unbind("keypress.ui-dialog"),
                i._isOpen = !1,
                i.options.hide ? i.uiDialog.hide(i.options.hide, function() {
                    i._trigger("close", t)
                }) : (i.uiDialog.hide(),
                i._trigger("close", t)),
                n.ui.dialog.overlay.resize(),
                i.options.modal && (r = 0,
                n(".ui-dialog").each(function() {
                    this !== i.uiDialog[0] && (u = n(this).css("z-index"),
                    isNaN(u) || (r = Math.max(r, u)))
                }),
                n.ui.dialog.maxZ = r),
                i
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(t, i) {
            var r = this, u = r.options, f;
            return u.modal && !t || !u.stack && !u.modal ? r._trigger("focus", i) : (u.zIndex > n.ui.dialog.maxZ && (n.ui.dialog.maxZ = u.zIndex),
            r.overlay && (n.ui.dialog.maxZ += 1,
            r.overlay.$el.css("z-index", n.ui.dialog.overlay.maxZ = n.ui.dialog.maxZ)),
            f = {
                scrollTop: r.element.scrollTop(),
                scrollLeft: r.element.scrollLeft()
            },
            n.ui.dialog.maxZ += 1,
            r.uiDialog.css("z-index", n.ui.dialog.maxZ),
            r.element.attr(f),
            r._trigger("focus", i),
            r)
        },
        open: function() {
            if (!this._isOpen) {
                var t = this
                  , i = t.options
                  , r = t.uiDialog;
                return t.overlay = i.modal ? new n.ui.dialog.overlay(t) : null,
                t._size(),
                t._position(i.position),
                r.show(i.show),
                t.moveToTop(!0),
                i.modal && r.bind("keydown.ui-dialog", function(t) {
                    if (t.keyCode === n.ui.keyCode.TAB) {
                        var i = n(":tabbable", this)
                          , r = i.filter(":first")
                          , u = i.filter(":last");
                        if (t.target !== u[0] || t.shiftKey) {
                            if (t.target === r[0] && t.shiftKey)
                                return u.focus(1),
                                !1
                        } else
                            return r.focus(1),
                            !1
                    }
                }),
                n(t.element.find(":tabbable").get().concat(r.find(".ui-dialog-buttonpane :tabbable").get().concat(r.get()))).eq(0).focus(),
                t._isOpen = !0,
                t._trigger("open"),
                t
            }
        },
        _createButtons: function(t) {
            var i = this
              , r = !1
              , u = n("<div><\/div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix")
              , f = n("<div><\/div>").addClass("ui-dialog-buttonset").appendTo(u);
            i.uiDialog.find(".ui-dialog-buttonpane").remove();
            typeof t == "object" && t !== null && n.each(t, function() {
                return !(r = !0)
            });
            r && (n.each(t, function(t, r) {
                r = n.isFunction(r) ? {
                    click: r,
                    text: t
                } : r;
                var u = n('<button type="button"><\/button>').click(function() {
                    r.click.apply(i.element[0], arguments)
                }).appendTo(f);
                n.each(r, function(n, t) {
                    n !== "click" && (n in u ? u[n](t) : u.attr(n, t))
                });
                n.fn.button && u.button()
            }),
            u.appendTo(i.uiDialog))
        },
        _makeDraggable: function() {
            function i(n) {
                return {
                    position: n.position,
                    offset: n.offset
                }
            }
            var t = this, r = t.options, u = n(document), f;
            t.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(u, e) {
                    f = r.height === "auto" ? "auto" : n(this).height();
                    n(this).height(n(this).height()).addClass("ui-dialog-dragging");
                    t._trigger("dragStart", u, i(e))
                },
                drag: function(n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function(e, o) {
                    r.position = [o.position.left - u.scrollLeft(), o.position.top - u.scrollTop()];
                    n(this).removeClass("ui-dialog-dragging").height(f);
                    t._trigger("dragStop", e, i(o));
                    n.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(i) {
            function f(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            i = i === t ? this.options.resizable : i;
            var r = this
              , u = r.options
              , e = r.uiDialog.css("position")
              , o = typeof i == "string" ? i : "n,e,s,w,se,sw,ne,nw";
            r.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: r.element,
                maxWidth: u.maxWidth,
                maxHeight: u.maxHeight,
                minWidth: u.minWidth,
                minHeight: r._minHeight(),
                handles: o,
                start: function(t, i) {
                    n(this).addClass("ui-dialog-resizing");
                    r._trigger("resizeStart", t, f(i))
                },
                resize: function(n, t) {
                    r._trigger("resize", n, f(t))
                },
                stop: function(t, i) {
                    n(this).removeClass("ui-dialog-resizing");
                    u.height = n(this).height();
                    u.width = n(this).width();
                    r._trigger("resizeStop", t, f(i));
                    n.ui.dialog.overlay.resize()
                }
            }).css("position", e).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var n = this.options;
            return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
        },
        _position: function(t) {
            var i = [], u = [0, 0], r;
            t ? ((typeof t == "string" || typeof t == "object" && "0"in t) && (i = t.split ? t.split(" ") : [t[0], t[1]],
            i.length === 1 && (i[1] = i[0]),
            n.each(["left", "top"], function(n, t) {
                +i[n] === i[n] && (u[n] = i[n],
                i[n] = t)
            }),
            t = {
                my: i.join(" "),
                at: i.join(" "),
                offset: u.join(" ")
            }),
            t = n.extend({}, n.ui.dialog.prototype.options.position, t)) : t = n.ui.dialog.prototype.options.position;
            r = this.uiDialog.is(":visible");
            r || this.uiDialog.show();
            this.uiDialog.css({
                top: 0,
                left: 0
            }).position(n.extend({
                of: window
            }, t));
            r || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var e = this
              , i = {}
              , f = !1;
            n.each(t, function(n, t) {
                e._setOption(n, t);
                n in r && (f = !0);
                n in u && (i[n] = t)
            });
            f && this._size();
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", i)
        },
        _setOption: function(t, r) {
            var u = this, f = u.uiDialog, o, e;
            switch (t) {
            case "beforeclose":
                t = "beforeClose";
                break;
            case "buttons":
                u._createButtons(r);
                break;
            case "closeText":
                u.uiDialogTitlebarCloseText.text("" + r);
                break;
            case "dialogClass":
                f.removeClass(u.options.dialogClass).addClass(i + r);
                break;
            case "disabled":
                r ? f.addClass("ui-dialog-disabled") : f.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                o = f.is(":data(draggable)");
                o && !r && f.draggable("destroy");
                !o && r && u._makeDraggable();
                break;
            case "position":
                u._position(r);
                break;
            case "resizable":
                e = f.is(":data(resizable)");
                e && !r && f.resizable("destroy");
                e && typeof r == "string" && f.resizable("option", "handles", r);
                e || r === !1 || u._makeResizable(r);
                break;
            case "title":
                n(".ui-dialog-title", u.uiDialogTitlebar).html("" + (r || "&#160;"))
            }
            n.Widget.prototype._setOption.apply(u, arguments)
        },
        _size: function() {
            var t = this.options, i, r, f = this.uiDialog.is(":visible"), u;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            });
            t.minWidth > t.width && (t.width = t.minWidth);
            i = this.uiDialog.css({
                height: "auto",
                width: t.width
            }).height();
            r = Math.max(0, t.minHeight - i);
            t.height === "auto" ? n.support.minHeight ? this.element.css({
                minHeight: r,
                height: "auto"
            }) : (this.uiDialog.show(),
            u = this.element.css("height", "auto").height(),
            f || this.uiDialog.hide(),
            this.element.height(Math.max(u, r))) : this.element.height(Math.max(t.height - i, 0));
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    });
    n.extend(n.ui.dialog, {
        version: "1.8.24",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(n) {
            var t = n.attr("id");
            return t || (this.uuid += 1,
            t = this.uuid),
            "ui-dialog-title-" + t
        },
        overlay: function(t) {
            this.$el = n.ui.dialog.overlay.create(t)
        }
    });
    n.extend(n.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: n.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(n) {
            return n + ".dialog-overlay"
        }).join(" "),
        create: function(t) {
            this.instances.length === 0 && (setTimeout(function() {
                n.ui.dialog.overlay.instances.length && n(document).bind(n.ui.dialog.overlay.events, function(t) {
                    if (n(t.target).zIndex() < n.ui.dialog.overlay.maxZ)
                        return !1
                })
            }, 1),
            n(document).bind("keydown.dialog-overlay", function(i) {
                t.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === n.ui.keyCode.ESCAPE && (t.close(i),
                i.preventDefault())
            }),
            n(window).bind("resize.dialog-overlay", n.ui.dialog.overlay.resize));
            var i = (this.oldInstances.pop() || n("<div><\/div>").addClass("ui-widget-overlay")).appendTo(document.body);
            return n.fn.bgiframe && i.bgiframe(),
            this.instances.push(i),
            i
        },
        destroy: function(t) {
            var r = n.inArray(t, this.instances), i;
            r != -1 && this.oldInstances.push(this.instances.splice(r, 1)[0]);
            this.instances.length === 0 && n([document, window]).unbind(".dialog-overlay");
            t.remove();
            i = 0;
            n.each(this.instances, function() {
                i = Math.max(i, this.css("z-index"))
            });
            this.maxZ = i
        },
        height: function() {
            var t, i;
            return n.browser.msie && n.browser.version < 7 ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
            i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight),
            t < i ? n(window).height() + "px" : t + "px") : n(document).height() + "px"
        },
        width: function() {
            var t, i;
            return n.browser.msie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
            i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth),
            t < i ? n(window).width() + "px" : t + "px") : n(document).width() + "px"
        },
        resize: function() {
            var t = n([]);
            n.each(n.ui.dialog.overlay.instances, function() {
                t = t.add(this)
            });
            t.css({
                width: 0,
                height: 0
            }).css({
                width: n.ui.dialog.overlay.width(),
                height: n.ui.dialog.overlay.height()
            })
        }
    });
    n.extend(n.ui.dialog.overlay.prototype, {
        destroy: function() {
            n.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery),
function(n) {
    var t = 5;
    n.widget("ui.slider", n.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var i = this, r = this.options, f = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = r.values && r.values.length || 1, e = [], u;
            for (this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (r.disabled ? " ui-slider-disabled ui-disabled" : "")),
            this.range = n([]),
            r.range && (r.range === !0 && (r.values || (r.values = [this._valueMin(), this._valueMin()]),
            r.values.length && r.values.length !== 2 && (r.values = [r.values[0], r.values[0]])),
            this.range = n("<div><\/div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (r.range === "min" || r.range === "max" ? " ui-slider-range-" + r.range : ""))),
            u = f.length; u < o; u += 1)
                e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'><\/a>");
            this.handles = f.add(n(e.join("")).appendTo(i.element));
            this.handle = this.handles.eq(0);
            this.handles.add(this.range).filter("a").click(function(n) {
                n.preventDefault()
            }).hover(function() {
                r.disabled || n(this).addClass("ui-state-hover")
            }, function() {
                n(this).removeClass("ui-state-hover")
            }).focus(function() {
                r.disabled ? n(this).blur() : (n(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),
                n(this).addClass("ui-state-focus"))
            }).blur(function() {
                n(this).removeClass("ui-state-focus")
            });
            this.handles.each(function(t) {
                n(this).data("index.ui-slider-handle", t)
            });
            this.handles.keydown(function(r) {
                var e = n(this).data("index.ui-slider-handle"), s, f, u, o;
                if (!i.options.disabled) {
                    switch (r.keyCode) {
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_UP:
                    case n.ui.keyCode.PAGE_DOWN:
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (r.preventDefault(),
                        !i._keySliding && (i._keySliding = !0,
                        n(this).addClass("ui-state-active"),
                        s = i._start(r, e),
                        s === !1))
                            return
                    }
                    o = i.options.step;
                    f = i.options.values && i.options.values.length ? u = i.values(e) : u = i.value();
                    switch (r.keyCode) {
                    case n.ui.keyCode.HOME:
                        u = i._valueMin();
                        break;
                    case n.ui.keyCode.END:
                        u = i._valueMax();
                        break;
                    case n.ui.keyCode.PAGE_UP:
                        u = i._trimAlignValue(f + (i._valueMax() - i._valueMin()) / t);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        u = i._trimAlignValue(f - (i._valueMax() - i._valueMin()) / t);
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                        if (f === i._valueMax())
                            return;
                        u = i._trimAlignValue(f + o);
                        break;
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (f === i._valueMin())
                            return;
                        u = i._trimAlignValue(f - o)
                    }
                    i._slide(r, e, u)
                }
            }).keyup(function(t) {
                var r = n(this).data("index.ui-slider-handle");
                i._keySliding && (i._keySliding = !1,
                i._stop(t, r),
                i._change(t, r),
                n(this).removeClass("ui-state-active"))
            });
            this._refreshValue();
            this._animateOff = !1
        },
        destroy: function() {
            return this.handles.remove(),
            this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),
            this._mouseDestroy(),
            this
        },
        _mouseCapture: function(t) {
            var u = this.options, h, f, e, i, o, r, c, s, l;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            h = {
                x: t.pageX,
                y: t.pageY
            },
            f = this._normValueFromMouse(h),
            e = this._valueMax() - this._valueMin() + 1,
            o = this,
            this.handles.each(function(t) {
                var u = Math.abs(f - o.values(t));
                e > u && (e = u,
                i = n(this),
                r = t)
            }),
            u.range === !0 && this.values(1) === u.min && (r += 1,
            i = n(this.handles[r])),
            c = this._start(t, r),
            c === !1) ? !1 : (this._mouseSliding = !0,
            o._handleIndex = r,
            i.addClass("ui-state-active").focus(),
            s = i.offset(),
            l = !n(t.target).parents().andSelf().is(".ui-slider-handle"),
            this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - s.left - i.width() / 2,
                top: t.pageY - s.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(t, r, f),
            this._animateOff = !0,
            !0)
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(n) {
            var t = {
                x: n.pageX,
                y: n.pageY
            }
              , i = this._normValueFromMouse(t);
            return this._slide(n, this._handleIndex, i),
            !1
        },
        _mouseStop: function(n) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(n, this._handleIndex),
            this._change(n, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(n) {
            var i, r, t, u, f;
            return this.orientation === "horizontal" ? (i = this.elementSize.width,
            r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height,
            r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            t = r / i,
            t > 1 && (t = 1),
            t < 0 && (t = 0),
            this.orientation === "vertical" && (t = 1 - t),
            u = this._valueMax() - this._valueMin(),
            f = this._valueMin() + t * u,
            this._trimAlignValue(f)
        },
        _start: function(n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t),
            i.values = this.values()),
            this._trigger("start", n, i)
        },
        _slide: function(n, t, i) {
            var r, f, u;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1),
            this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r),
            i !== this.values(t) && (f = this.values(),
            f[t] = i,
            u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i,
                values: f
            }),
            r = this.values(t ? 0 : 1),
            u !== !1 && this.values(t, i, !0))) : i !== this.value() && (u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i
            }),
            u !== !1 && this.value(i))
        },
        _stop: function(n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t),
            i.values = this.values());
            this._trigger("stop", n, i)
        },
        _change: function(n, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t),
                i.values = this.values());
                this._trigger("change", n, i)
            }
        },
        value: function(n) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(n);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(t, i) {
            var u, f, r;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(i);
                this._refreshValue();
                this._change(null, t);
                return
            }
            if (arguments.length)
                if (n.isArray(arguments[0])) {
                    for (u = this.options.values,
                    f = arguments[0],
                    r = 0; r < u.length; r += 1)
                        u[r] = this._trimAlignValue(f[r]),
                        this._change(null, r);
                    this._refreshValue()
                } else
                    return this.options.values && this.options.values.length ? this._values(t) : this.value();
            else
                return this._values()
        },
        _setOption: function(t, i) {
            var r, u = 0;
            n.isArray(this.options.values) && (u = this.options.values.length);
            n.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
            case "disabled":
                i ? (this.handles.filter(".ui-state-focus").blur(),
                this.handles.removeClass("ui-state-hover"),
                this.handles.propAttr("disabled", !0),
                this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1),
                this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation();
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                r = 0; r < u; r += 1)
                    this._change(null, r);
                this._animateOff = !1
            }
        },
        _value: function() {
            var n = this.options.value;
            return this._trimAlignValue(n)
        },
        _values: function(n) {
            var r, t, i;
            if (arguments.length)
                return r = this.options.values[n],
                this._trimAlignValue(r);
            for (t = this.options.values.slice(),
            i = 0; i < t.length; i += 1)
                t[i] = this._trimAlignValue(t[i]);
            return t
        },
        _trimAlignValue: function(n) {
            if (n <= this._valueMin())
                return this._valueMin();
            if (n >= this._valueMax())
                return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1
              , i = (n - this._valueMin()) % t
              , r = n - i;
            return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t),
            parseFloat(r.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var f = this.options.range, r = this.options, i = this, u = this._animateOff ? !1 : r.animate, t, e = {}, s, c, o, h;
            this.options.values && this.options.values.length ? this.handles.each(function(f) {
                t = (i.values(f) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100;
                e[i.orientation === "horizontal" ? "left" : "bottom"] = t + "%";
                n(this).stop(1, 1)[u ? "animate" : "css"](e, r.animate);
                i.options.range === !0 && (i.orientation === "horizontal" ? (f === 0 && i.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: t + "%"
                }, r.animate),
                f === 1 && i.range[u ? "animate" : "css"]({
                    width: t - s + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (f === 0 && i.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: t + "%"
                }, r.animate),
                f === 1 && i.range[u ? "animate" : "css"]({
                    height: t - s + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })));
                s = t
            }) : (c = this.value(),
            o = this._valueMin(),
            h = this._valueMax(),
            t = h !== o ? (c - o) / (h - o) * 100 : 0,
            e[i.orientation === "horizontal" ? "left" : "bottom"] = t + "%",
            this.handle.stop(1, 1)[u ? "animate" : "css"](e, r.animate),
            f === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: t + "%"
            }, r.animate),
            f === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({
                width: 100 - t + "%"
            }, {
                queue: !1,
                duration: r.animate
            }),
            f === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: t + "%"
            }, r.animate),
            f === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({
                height: 100 - t + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        }
    });
    n.extend(n.ui.slider, {
        version: "1.8.24"
    })
}(jQuery),
function(n, t) {
    function u() {
        return ++i
    }
    function f() {
        return ++r
    }
    var i = 0
      , r = 0;
    n.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: !1,
            cookie: null,
            collapsible: !1,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div><\/div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;<\/em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}<\/span><\/a><\/li>"
        },
        _create: function() {
            this._tabify(!0)
        },
        _setOption: function(n, t) {
            if (n == "selected") {
                if (this.options.collapsible && t == this.options.selected)
                    return;
                this.select(t)
            } else
                this.options[n] = t,
                this._tabify()
        },
        _tabId: function(n) {
            return n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + u()
        },
        _sanitizeSelector: function(n) {
            return n.replace(/:/g, "\\:")
        },
        _cookie: function() {
            var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + f());
            return n.cookie.apply(null, [t].concat(n.makeArray(arguments)))
        },
        _ui: function(n, t) {
            return {
                tab: n,
                panel: t,
                index: this.anchors.index(n)
            }
        },
        _cleanup: function() {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
                var t = n(this);
                t.html(t.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function(i) {
            function v(t, i) {
                t.css("display", "");
                !n.support.opacity && i.opacity && t[0].style.removeAttribute("filter")
            }
            var u = this, r = this.options, y = /^#.+/, o, s, h, c, f, e, l, a;
            for (this.list = this.element.find("ol,ul").eq(0),
            this.lis = n(" > li:has(a[href])", this.list),
            this.anchors = this.lis.map(function() {
                return n("a", this)[0]
            }),
            this.panels = n([]),
            this.anchors.each(function(t, i) {
                var f = n(i).attr("href"), s = f.split("#")[0], h, o, e;
                s && (s === location.toString().split("#")[0] || (h = n("base")[0]) && s === h.href) && (f = i.hash,
                i.href = f);
                y.test(f) ? u.panels = u.panels.add(u.element.find(u._sanitizeSelector(f))) : f && f !== "#" ? (n.data(i, "href.tabs", f),
                n.data(i, "load.tabs", f.replace(/#.*$/, "")),
                o = u._tabId(i),
                i.href = "#" + o,
                e = u.element.find("#" + o),
                e.length || (e = n(r.panelTemplate).attr("id", o).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(u.panels[t - 1] || u.list),
                e.data("destroy.tabs", !0)),
                u.panels = u.panels.add(e)) : r.disabled.push(t)
            }),
            i ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),
            this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),
            this.lis.addClass("ui-state-default ui-corner-top"),
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),
            r.selected === t ? (location.hash && this.anchors.each(function(n, t) {
                if (t.hash == location.hash)
                    return r.selected = n,
                    !1
            }),
            typeof r.selected != "number" && r.cookie && (r.selected = parseInt(u._cookie(), 10)),
            typeof r.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (r.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))),
            r.selected = r.selected || (this.lis.length ? 0 : -1)) : r.selected === null && (r.selected = -1),
            r.selected = r.selected >= 0 && this.anchors[r.selected] || r.selected < 0 ? r.selected : 0,
            r.disabled = n.unique(r.disabled.concat(n.map(this.lis.filter(".ui-state-disabled"), function(n) {
                return u.lis.index(n)
            }))).sort(),
            n.inArray(r.selected, r.disabled) != -1 && r.disabled.splice(n.inArray(r.selected, r.disabled), 1),
            this.panels.addClass("ui-tabs-hide"),
            this.lis.removeClass("ui-tabs-selected ui-state-active"),
            r.selected >= 0 && this.anchors.length && (u.element.find(u._sanitizeSelector(u.anchors[r.selected].hash)).removeClass("ui-tabs-hide"),
            this.lis.eq(r.selected).addClass("ui-tabs-selected ui-state-active"),
            u.element.queue("tabs", function() {
                u._trigger("show", null, u._ui(u.anchors[r.selected], u.element.find(u._sanitizeSelector(u.anchors[r.selected].hash))[0]))
            }),
            this.load(r.selected)),
            n(window).bind("unload", function() {
                u.lis.add(u.anchors).unbind(".tabs");
                u.lis = u.anchors = u.panels = null
            })) : r.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")),
            this.element[r.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"),
            r.cookie && this._cookie(r.selected, r.cookie),
            o = 0; s = this.lis[o]; o++)
                n(s)[n.inArray(o, r.disabled) != -1 && !n(s).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
            r.cache === !1 && this.anchors.removeData("cache.tabs");
            this.lis.add(this.anchors).unbind(".tabs");
            r.event !== "mouseover" && (h = function(n, t) {
                t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + n)
            }
            ,
            c = function(n, t) {
                t.removeClass("ui-state-" + n)
            }
            ,
            this.lis.bind("mouseover.tabs", function() {
                h("hover", n(this))
            }),
            this.lis.bind("mouseout.tabs", function() {
                c("hover", n(this))
            }),
            this.anchors.bind("focus.tabs", function() {
                h("focus", n(this).closest("li"))
            }),
            this.anchors.bind("blur.tabs", function() {
                c("focus", n(this).closest("li"))
            }));
            r.fx && (n.isArray(r.fx) ? (f = r.fx[0],
            e = r.fx[1]) : f = e = r.fx);
            l = e ? function(t, i) {
                n(t).closest("li").addClass("ui-tabs-selected ui-state-active");
                i.hide().removeClass("ui-tabs-hide").animate(e, e.duration || "normal", function() {
                    v(i, e);
                    u._trigger("show", null, u._ui(t, i[0]))
                })
            }
            : function(t, i) {
                n(t).closest("li").addClass("ui-tabs-selected ui-state-active");
                i.removeClass("ui-tabs-hide");
                u._trigger("show", null, u._ui(t, i[0]))
            }
            ;
            a = f ? function(n, t) {
                t.animate(f, f.duration || "normal", function() {
                    u.lis.removeClass("ui-tabs-selected ui-state-active");
                    t.addClass("ui-tabs-hide");
                    v(t, f);
                    u.element.dequeue("tabs")
                })
            }
            : function(n, t) {
                u.lis.removeClass("ui-tabs-selected ui-state-active");
                t.addClass("ui-tabs-hide");
                u.element.dequeue("tabs")
            }
            ;
            this.anchors.bind(r.event + ".tabs", function() {
                var t = this
                  , i = n(t).closest("li")
                  , f = u.panels.filter(":not(.ui-tabs-hide)")
                  , e = u.element.find(u._sanitizeSelector(t.hash));
                if (i.hasClass("ui-tabs-selected") && !r.collapsible || i.hasClass("ui-state-disabled") || i.hasClass("ui-state-processing") || u.panels.filter(":animated").length || u._trigger("select", null, u._ui(this, e[0])) === !1)
                    return this.blur(),
                    !1;
                if (r.selected = u.anchors.index(this),
                u.abort(),
                r.collapsible) {
                    if (i.hasClass("ui-tabs-selected"))
                        return r.selected = -1,
                        r.cookie && u._cookie(r.selected, r.cookie),
                        u.element.queue("tabs", function() {
                            a(t, f)
                        }).dequeue("tabs"),
                        this.blur(),
                        !1;
                    if (!f.length)
                        return r.cookie && u._cookie(r.selected, r.cookie),
                        u.element.queue("tabs", function() {
                            l(t, e)
                        }),
                        u.load(u.anchors.index(this)),
                        this.blur(),
                        !1
                }
                if (r.cookie && u._cookie(r.selected, r.cookie),
                e.length)
                    f.length && u.element.queue("tabs", function() {
                        a(t, f)
                    }),
                    u.element.queue("tabs", function() {
                        l(t, e)
                    }),
                    u.load(u.anchors.index(this));
                else
                    throw "jQuery UI Tabs: Mismatching fragment identifier.";
                n.browser.msie && this.blur()
            });
            this.anchors.bind("click.tabs", function() {
                return !1
            })
        },
        _getIndex: function(n) {
            return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))),
            n
        },
        destroy: function() {
            var t = this.options;
            return this.abort(),
            this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),
            this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),
            this.anchors.each(function() {
                var t = n.data(this, "href.tabs"), i;
                t && (this.href = t);
                i = n(this).unbind(".tabs");
                n.each(["href", "load", "cache"], function(n, t) {
                    i.removeData(t + ".tabs")
                })
            }),
            this.lis.unbind(".tabs").add(this.panels).each(function() {
                n.data(this, "destroy.tabs") ? n(this).remove() : n(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
            }),
            t.cookie && this._cookie(null, t.cookie),
            this
        },
        add: function(i, r, u) {
            var f;
            u === t && (u = this.anchors.length);
            var e = this
              , o = this.options
              , s = n(o.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, r))
              , h = i.indexOf("#") ? this._tabId(n("a", s)[0]) : i.replace("#", "");
            return s.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0),
            f = e.element.find("#" + h),
            f.length || (f = n(o.panelTemplate).attr("id", h).data("destroy.tabs", !0)),
            f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),
            u >= this.lis.length ? (s.appendTo(this.list),
            f.appendTo(this.list[0].parentNode)) : (s.insertBefore(this.lis[u]),
            f.insertBefore(this.panels[u])),
            o.disabled = n.map(o.disabled, function(n) {
                return n >= u ? ++n : n
            }),
            this._tabify(),
            this.anchors.length == 1 && (o.selected = 0,
            s.addClass("ui-tabs-selected ui-state-active"),
            f.removeClass("ui-tabs-hide"),
            this.element.queue("tabs", function() {
                e._trigger("show", null, e._ui(e.anchors[0], e.panels[0]))
            }),
            this.load(0)),
            this._trigger("add", null, this._ui(this.anchors[u], this.panels[u])),
            this
        },
        remove: function(t) {
            t = this._getIndex(t);
            var i = this.options
              , r = this.lis.eq(t).remove()
              , u = this.panels.eq(t).remove();
            return r.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)),
            i.disabled = n.map(n.grep(i.disabled, function(n) {
                return n != t
            }), function(n) {
                return n >= t ? --n : n
            }),
            this._tabify(),
            this._trigger("remove", null, this._ui(r.find("a")[0], u[0])),
            this
        },
        enable: function(t) {
            t = this._getIndex(t);
            var i = this.options;
            if (n.inArray(t, i.disabled) != -1)
                return this.lis.eq(t).removeClass("ui-state-disabled"),
                i.disabled = n.grep(i.disabled, function(n) {
                    return n != t
                }),
                this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])),
                this
        },
        disable: function(n) {
            n = this._getIndex(n);
            var i = this
              , t = this.options;
            return n != t.selected && (this.lis.eq(n).addClass("ui-state-disabled"),
            t.disabled.push(n),
            t.disabled.sort(),
            this._trigger("disable", null, this._ui(this.anchors[n], this.panels[n]))),
            this
        },
        select: function(n) {
            if (n = this._getIndex(n),
            n == -1)
                if (this.options.collapsible && this.options.selected != -1)
                    n = this.options.selected;
                else
                    return this;
            return this.anchors.eq(n).trigger(this.options.event + ".tabs"),
            this
        },
        load: function(t) {
            var f;
            t = this._getIndex(t);
            var i = this
              , r = this.options
              , u = this.anchors.eq(t)[0]
              , e = n.data(u, "load.tabs");
            if (this.abort(),
            !e || this.element.queue("tabs").length !== 0 && n.data(u, "cache.tabs")) {
                this.element.dequeue("tabs");
                return
            }
            return this.lis.eq(t).addClass("ui-state-processing"),
            r.spinner && (f = n("span", u),
            f.data("label.tabs", f.html()).html(r.spinner)),
            this.xhr = n.ajax(n.extend({}, r.ajaxOptions, {
                url: e,
                success: function(f, e) {
                    i.element.find(i._sanitizeSelector(u.hash)).html(f);
                    i._cleanup();
                    r.cache && n.data(u, "cache.tabs", !0);
                    i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                    try {
                        r.ajaxOptions.success(f, e)
                    } catch (o) {}
                },
                error: function(n, f) {
                    i._cleanup();
                    i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                    try {
                        r.ajaxOptions.error(n, f, t, u)
                    } catch (e) {}
                }
            })),
            i.element.dequeue("tabs"),
            this
        },
        abort: function() {
            return this.element.queue([]),
            this.panels.stop(!1, !0),
            this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)),
            this.xhr && (this.xhr.abort(),
            delete this.xhr),
            this._cleanup(),
            this
        },
        url: function(n, t) {
            return this.anchors.eq(n).removeData("cache.tabs").data("load.tabs", t),
            this
        },
        length: function() {
            return this.anchors.length
        }
    });
    n.extend(n.ui.tabs, {
        version: "1.8.24"
    });
    n.extend(n.ui.tabs.prototype, {
        rotation: null,
        rotate: function(n, t) {
            var i = this
              , u = this.options
              , r = i._rotate || (i._rotate = function(t) {
                clearTimeout(i.rotation);
                i.rotation = setTimeout(function() {
                    var n = u.selected;
                    i.select(++n < i.anchors.length ? n : 0)
                }, n);
                t && t.stopPropagation()
            }
            )
              , f = i._unrotate || (i._unrotate = t ? function() {
                r()
            }
            : function(n) {
                n.clientX && i.rotate(null)
            }
            );
            return n ? (this.element.bind("tabsshow", r),
            this.anchors.bind(u.event + ".tabs", f),
            r()) : (clearTimeout(i.rotation),
            this.element.unbind("tabsshow", r),
            this.anchors.unbind(u.event + ".tabs", f),
            delete this._rotate,
            delete this._unrotate),
            this
        }
    })
}(jQuery),
function(n, t) {
    function e() {
        this.debug = !1;
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        this._inDialog = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        n.extend(this._defaults, this.regional[""]);
        this.dpDiv = o(n('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"><\/div>'))
    }
    function o(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.bind("mouseout", function(t) {
            var r = n(t.target).closest(i);
            r.length && r.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function(r) {
            var u = n(r.target).closest(i);
            !n.datepicker._isDisabledDatepicker(f.inline ? t.parent()[0] : f.input[0]) && u.length && (u.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
            u.addClass("ui-state-hover"),
            u.hasClass("ui-datepicker-prev") && u.addClass("ui-datepicker-prev-hover"),
            u.hasClass("ui-datepicker-next") && u.addClass("ui-datepicker-next-hover"))
        })
    }
    function u(i, r) {
        n.extend(i, r);
        for (var u in r)
            (r[u] == null || r[u] == t) && (i[u] = r[u]);
        return i
    }
    n.extend(n.ui, {
        datepicker: {
            version: "1.8.24"
        }
    });
    var i = "datepicker", r = (new Date).getTime(), f;
    n.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function() {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(n) {
            return u(this._defaults, n || {}),
            this
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null, attrName, attrValue, nodeName, inline, inst;
            for (attrName in this._defaults)
                if (attrValue = target.getAttribute("date:" + attrName),
                attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            nodeName = target.nodeName.toLowerCase();
            inline = nodeName == "div" || nodeName == "span";
            target.id || (this.uuid += 1,
            target.id = "dp" + this.uuid);
            inst = this._newInst(n(target), inline);
            inst.settings = n.extend({}, settings || {}, inlineSettings || {});
            nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function(t, i) {
            var r = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? o(n('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"><\/div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, r) {
            var u = n(t);
            (r.append = n([]),
            r.trigger = n([]),
            u.hasClass(this.markerClassName)) || (this._attachments(u, r),
            u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(n, t, i) {
                r.settings[t] = i
            }).bind("getData.datepicker", function(n, t) {
                return this._get(r, t)
            }),
            this._autoSize(r),
            n.data(t, i, r),
            r.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var e = this._get(i, "appendText"), o = this._get(i, "isRTL"), u, r, f;
            i.append && i.append.remove();
            e && (i.append = n('<span class="' + this._appendClass + '">' + e + "<\/span>"),
            t[o ? "before" : "after"](i.append));
            t.unbind("focus", this._showDatepicker);
            i.trigger && i.trigger.remove();
            u = this._get(i, "showOn");
            (u == "focus" || u == "both") && t.focus(this._showDatepicker);
            (u == "button" || u == "both") && (r = this._get(i, "buttonText"),
            f = this._get(i, "buttonImage"),
            i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: r,
                title: r
            }) : n('<button type="button"><\/button>').addClass(this._triggerClass).html(f == "" ? r : n("<img/>").attr({
                src: f,
                alt: r,
                title: r
            }))),
            t[o ? "before" : "after"](i.trigger),
            i.trigger.click(function() {
                return n.datepicker._datepickerShowing && n.datepicker._lastInput == t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput != t[0] ? (n.datepicker._hideDatepicker(),
                n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]),
                !1
            }))
        },
        _autoSize: function(n) {
            var t, i, r;
            this._get(n, "autoSize") && !n.inline && (t = new Date(2009,11,20),
            i = this._get(n, "dateFormat"),
            i.match(/[DM]/) && (r = function(n) {
                for (var i = 0, r = 0, t = 0; t < n.length; t++)
                    n[t].length > i && (i = n[t].length,
                    r = t);
                return r
            }
            ,
            t.setMonth(r(this._get(n, i.match(/MM/) ? "monthNames" : "monthNamesShort"))),
            t.setDate(r(this._get(n, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())),
            n.input.attr("size", this._formatDate(n, t).length))
        },
        _inlineDatepicker: function(t, r) {
            var u = n(t);
            u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(r.dpDiv).bind("setData.datepicker", function(n, t, i) {
                r.settings[t] = i
            }).bind("getData.datepicker", function(n, t) {
                return this._get(r, t)
            }),
            n.data(t, i, r),
            this._setDate(r, this._getDefaultDate(r), !0),
            this._updateDatepicker(r),
            this._updateAlternate(r),
            r.settings.disabled && this._disableDatepicker(t),
            r.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, r, f, e, o) {
            var s = this._dialogInst, h;
            if (s || (this.uuid += 1,
            h = "dp" + this.uuid,
            this._dialogInput = n('<input type="text" id="' + h + '" style="position: absolute; top: -100px; width: 0px;"/>'),
            this._dialogInput.keydown(this._doKeyDown),
            n("body").append(this._dialogInput),
            s = this._dialogInst = this._newInst(this._dialogInput, !1),
            s.settings = {},
            n.data(this._dialogInput[0], i, s)),
            u(s.settings, e || {}),
            r = r && r.constructor == Date ? this._formatDate(s, r) : r,
            this._dialogInput.val(r),
            this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null,
            !this._pos) {
                var c = document.documentElement.clientWidth
                  , l = document.documentElement.clientHeight
                  , a = document.documentElement.scrollLeft || document.body.scrollLeft
                  , v = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [c / 2 - 100 + a, l / 2 - 150 + v]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            s.settings.onSelect = f,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            n.blockUI && n.blockUI(this.dpDiv),
            n.data(this._dialogInput[0], i, s),
            this
        },
        _destroyDatepicker: function(t) {
            var u = n(t), f = n.data(t, i), r;
            u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
            n.removeData(t, i),
            r == "input" ? (f.append.remove(),
            f.trigger.remove(),
            u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && u.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var f = n(t), e = n.data(t, i), r, u;
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
            r == "input" ? (t.disabled = !1,
            e.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : (r == "div" || r == "span") && (u = f.children("." + this._inlineClass),
            u.children().removeClass("ui-state-disabled"),
            u.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")),
            this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n == t ? null : n
            }))
        },
        _disableDatepicker: function(t) {
            var f = n(t), e = n.data(t, i), r, u;
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
            r == "input" ? (t.disabled = !0,
            e.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : (r == "div" || r == "span") && (u = f.children("." + this._inlineClass),
            u.children().addClass("ui-state-disabled"),
            u.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")),
            this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n == t ? null : n
            }),
            this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(n) {
            if (!n)
                return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] == n)
                    return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return n.data(t, i)
            } catch (r) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(i, r, f) {
            var e = this._getInst(i), o;
            if (arguments.length == 2 && typeof r == "string")
                return r == "defaults" ? n.extend({}, n.datepicker._defaults) : e ? r == "all" ? n.extend({}, e.settings) : this._get(e, r) : null;
            if (o = r || {},
            typeof r == "string" && (o = {},
            o[r] = f),
            e) {
                this._curInst == e && this._hideDatepicker();
                var c = this._getDateDatepicker(i, !0)
                  , s = this._getMinMaxDate(e, "min")
                  , h = this._getMinMaxDate(e, "max");
                u(e.settings, o);
                s !== null && o.dateFormat !== t && o.minDate === t && (e.settings.minDate = this._formatDate(e, s));
                h !== null && o.dateFormat !== t && o.maxDate === t && (e.settings.maxDate = this._formatDate(e, h));
                this._attachments(n(i), e);
                this._autoSize(e);
                this._setDate(e, c);
                this._updateAlternate(e);
                this._updateDatepicker(e)
            }
        },
        _changeDatepicker: function(n, t, i) {
            this._optionDatepicker(n, t, i)
        },
        _refreshDatepicker: function(n) {
            var t = this._getInst(n);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            i && (this._setDate(i, t),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            return i && !i.inline && this._setDateFromField(i, t),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i = n.datepicker._getInst(t.target), r = !0, e = i.dpDiv.is(".ui-datepicker-rtl"), u, f, o;
            if (i._keyEvent = !0,
            n.datepicker._datepickerShowing)
                switch (t.keyCode) {
                case 9:
                    n.datepicker._hideDatepicker();
                    r = !1;
                    break;
                case 13:
                    return u = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv),
                    u[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, u[0]),
                    f = n.datepicker._get(i, "onSelect"),
                    f ? (o = n.datepicker._formatDate(i),
                    f.apply(i.input ? i.input[0] : null, [o, i])) : n.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    n.datepicker._hideDatepicker();
                    break;
                case 33:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 34:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, e ? 1 : -1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, e ? -1 : 1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
                }
            else
                t.keyCode == 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(),
            t.stopPropagation())
        },
        _doKeyPress: function(i) {
            var f = n.datepicker._getInst(i.target), r, u;
            if (n.datepicker._get(f, "constrainInput"))
                return r = n.datepicker._possibleChars(n.datepicker._get(f, "dateFormat")),
                u = String.fromCharCode(i.charCode == t ? i.keyCode : i.charCode),
                i.ctrlKey || i.metaKey || u < " " || !r || r.indexOf(u) > -1
        },
        _doKeyUp: function(t) {
            var i = n.datepicker._getInst(t.target), r;
            if (i.input.val() != i.lastVal)
                try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                    r && (n.datepicker._setDateFromField(i),
                    n.datepicker._updateAlternate(i),
                    n.datepicker._updateDatepicker(i))
                } catch (u) {
                    n.datepicker.log(u)
                }
            return !0
        },
        _showDatepicker: function(t) {
            var i, o, s, r, f;
            if ((t = t.target || t,
            t.nodeName.toLowerCase() != "input" && (t = n("input", t.parentNode)[0]),
            !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput != t) && (i = n.datepicker._getInst(t),
            n.datepicker._curInst && n.datepicker._curInst != i && (n.datepicker._curInst.dpDiv.stop(!0, !0),
            i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])),
            o = n.datepicker._get(i, "beforeShow"),
            s = o ? o.apply(t, [t, i]) : {},
            s !== !1) && (u(i.settings, s),
            i.lastVal = null,
            n.datepicker._lastInput = t,
            n.datepicker._setDateFromField(i),
            n.datepicker._inDialog && (t.value = ""),
            n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t),
            n.datepicker._pos[1] += t.offsetHeight),
            r = !1,
            n(t).parents().each(function() {
                return r |= n(this).css("position") == "fixed",
                !r
            }),
            r && n.browser.opera && (n.datepicker._pos[0] -= document.documentElement.scrollLeft,
            n.datepicker._pos[1] -= document.documentElement.scrollTop),
            f = {
                left: n.datepicker._pos[0],
                top: n.datepicker._pos[1]
            },
            n.datepicker._pos = null,
            i.dpDiv.empty(),
            i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }),
            n.datepicker._updateDatepicker(i),
            f = n.datepicker._checkOffset(i, f, r),
            i.dpDiv.css({
                position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
                display: "none",
                left: f.left + "px",
                top: f.top + "px"
            }),
            !i.inline)) {
                var e = n.datepicker._get(i, "showAnim")
                  , h = n.datepicker._get(i, "duration")
                  , c = function() {
                    var r = i.dpDiv.find("iframe.ui-datepicker-cover"), t;
                    !r.length || (t = n.datepicker._getBorders(i.dpDiv),
                    r.css({
                        left: -t[0],
                        top: -t[1],
                        width: i.dpDiv.outerWidth(),
                        height: i.dpDiv.outerHeight()
                    }))
                };
                i.dpDiv.zIndex(n(t).zIndex() + 1);
                n.datepicker._datepickerShowing = !0;
                n.effects && n.effects[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h, c) : i.dpDiv[e || "show"](e ? h : null, c);
                e && h || c();
                i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus();
                n.datepicker._curInst = i
            }
        },
        _updateDatepicker: function(t) {
            var s = this, i, r, o;
            s.maxRows = 4;
            i = n.datepicker._getBorders(t.dpDiv);
            f = t;
            t.dpDiv.empty().append(this._generateHTML(t));
            this._attachHandlers(t);
            r = t.dpDiv.find("iframe.ui-datepicker-cover");
            !r.length || r.css({
                left: -i[0],
                top: -i[1],
                width: t.dpDiv.outerWidth(),
                height: t.dpDiv.outerHeight()
            });
            t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var u = this._getNumberOfMonths(t)
              , e = u[1];
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            e > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em");
            t.dpDiv[(u[0] != 1 || u[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            t == n.datepicker._curInst && n.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus();
            t.yearshtml && (o = t.yearshtml,
            setTimeout(function() {
                o === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
                o = t.yearshtml = null
            }, 0))
        },
        _getBorders: function(n) {
            var t = function(n) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[n] || n
            };
            return [parseFloat(t(n.css("border-left-width"))), parseFloat(t(n.css("border-top-width")))]
        },
        _checkOffset: function(t, i, r) {
            var u = t.dpDiv.outerWidth()
              , f = t.dpDiv.outerHeight()
              , h = t.input ? t.input.outerWidth() : 0
              , o = t.input ? t.input.outerHeight() : 0
              , e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft())
              , s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? u - h : 0,
            i.left -= r && i.left == t.input.offset().left ? n(document).scrollLeft() : 0,
            i.top -= r && i.top == t.input.offset().top + o ? n(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0),
            i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0),
            i
        },
        _findPos: function(t) {
            for (var r = this._getInst(t), u = this._get(r, "isRTL"), i; t && (t.type == "hidden" || t.nodeType != 1 || n.expr.filters.hidden(t)); )
                t = t[u ? "previousSibling" : "nextSibling"];
            return i = n(t).offset(),
            [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var r = this._curInst, e;
            if (r && (!t || r == n.data(t, i)) && this._datepickerShowing) {
                var u = this._get(r, "showAnim")
                  , o = this._get(r, "duration")
                  , f = function() {
                    n.datepicker._tidyDialog(r)
                };
                n.effects && n.effects[u] ? r.dpDiv.hide(u, n.datepicker._get(r, "showOptions"), o, f) : r.dpDiv[u == "slideDown" ? "slideUp" : u == "fadeIn" ? "fadeOut" : "hide"](u ? o : null, f);
                u || f();
                this._datepickerShowing = !1;
                e = this._get(r, "onClose");
                e && e.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]);
                this._lastInput = null;
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }),
                n.blockUI && (n.unblockUI(),
                n("body").append(this.dpDiv)));
                this._inDialog = !1
            }
        },
        _tidyDialog: function(n) {
            n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (n.datepicker._curInst) {
                var i = n(t.target)
                  , r = n.datepicker._getInst(i[0]);
                (i[0].id == n.datepicker._mainDivId || i.parents("#" + n.datepicker._mainDivId).length != 0 || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst == r) || n.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, r) {
            var f = n(t)
              , u = this._getInst(f[0]);
            this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r == "M" ? this._get(u, "showCurrentAtPos") : 0), r),
            this._updateDatepicker(u))
        },
        _gotoToday: function(t) {
            var u = n(t), i = this._getInst(u[0]), r;
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay,
            i.drawMonth = i.selectedMonth = i.currentMonth,
            i.drawYear = i.selectedYear = i.currentYear) : (r = new Date,
            i.selectedDay = r.getDate(),
            i.drawMonth = i.selectedMonth = r.getMonth(),
            i.drawYear = i.selectedYear = r.getFullYear());
            this._notifyChange(i);
            this._adjustDate(u)
        },
        _selectMonthYear: function(t, i, r) {
            var f = n(t)
              , u = this._getInst(f[0]);
            u["selected" + (r == "M" ? "Month" : "Year")] = u["draw" + (r == "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(u);
            this._adjustDate(f)
        },
        _selectDay: function(t, i, r, u) {
            var e = n(t), f;
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]),
            f.selectedDay = f.currentDay = n("a", u).html(),
            f.selectedMonth = f.currentMonth = i,
            f.selectedYear = f.currentYear = r,
            this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(t) {
            var i = n(t)
              , r = this._getInst(i[0]);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var f = n(t), r = this._getInst(f[0]), u;
            i = i != null ? i : this._formatDate(r);
            r.input && r.input.val(i);
            this._updateAlternate(r);
            u = this._get(r, "onSelect");
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(),
            this._lastInput = r.input[0],
            typeof r.input[0] != "object" && r.input.focus(),
            this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i = this._get(t, "altField");
            if (i) {
                var r = this._get(t, "altFormat") || this._get(t, "dateFormat")
                  , u = this._getDate(t)
                  , f = this.formatDate(r, u, this._getFormatConfig(t));
                n(i).each(function() {
                    n(this).val(f)
                })
            }
        },
        noWeekends: function(n) {
            var t = n.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function(n) {
            var t = new Date(n.getTime()), i;
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)),
            i = t.getTime(),
            t.setMonth(0),
            t.setDate(1),
            Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, r) {
            var c, s, w, u;
            if (t == null || i == null)
                throw "Invalid arguments";
            if (i = typeof i == "object" ? i.toString() : i + "",
            i == "")
                return null;
            c = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            c = typeof c != "string" ? c : (new Date).getFullYear() % 100 + parseInt(c, 10);
            var k = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort
              , d = (r ? r.dayNames : null) || this._defaults.dayNames
              , g = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort
              , nt = (r ? r.monthNames : null) || this._defaults.monthNames
              , f = -1
              , o = -1
              , h = -1
              , v = -1
              , y = !1
              , a = function(n) {
                var i = s + 1 < t.length && t.charAt(s + 1) == n;
                return i && s++,
                i
            }
              , l = function(n) {
                var r = a(n)
                  , u = n == "@" ? 14 : n == "!" ? 20 : n == "y" && r ? 4 : n == "o" ? 3 : 2
                  , f = new RegExp("^\\d{1," + u + "}")
                  , t = i.substring(e).match(f);
                if (!t)
                    throw "Missing number at position " + e;
                return e += t[0].length,
                parseInt(t[0], 10)
            }
              , b = function(t, r, u) {
                var o = n.map(a(t) ? u : r, function(n, t) {
                    return [[t, n]]
                }).sort(function(n, t) {
                    return -(n[1].length - t[1].length)
                })
                  , f = -1;
                if (n.each(o, function(n, t) {
                    var r = t[1];
                    if (i.substr(e, r.length).toLowerCase() == r.toLowerCase())
                        return f = t[0],
                        e += r.length,
                        !1
                }),
                f != -1)
                    return f + 1;
                throw "Unknown name at position " + e;
            }
              , p = function() {
                if (i.charAt(e) != t.charAt(s))
                    throw "Unexpected literal at position " + e;
                e++
            }
              , e = 0;
            for (s = 0; s < t.length; s++)
                if (y)
                    t.charAt(s) != "'" || a("'") ? p() : y = !1;
                else
                    switch (t.charAt(s)) {
                    case "d":
                        h = l("d");
                        break;
                    case "D":
                        b("D", k, d);
                        break;
                    case "o":
                        v = l("o");
                        break;
                    case "m":
                        o = l("m");
                        break;
                    case "M":
                        o = b("M", g, nt);
                        break;
                    case "y":
                        f = l("y");
                        break;
                    case "@":
                        u = new Date(l("@"));
                        f = u.getFullYear();
                        o = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "!":
                        u = new Date((l("!") - this._ticksTo1970) / 1e4);
                        f = u.getFullYear();
                        o = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "'":
                        a("'") ? p() : y = !0;
                        break;
                    default:
                        p()
                    }
            if (e < i.length)
                throw "Extra/unparsed characters found in date: " + i.substring(e);
            if (f == -1 ? f = (new Date).getFullYear() : f < 100 && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= c ? 0 : -100)),
            v > -1) {
                o = 1;
                h = v;
                do {
                    if (w = this._getDaysInMonth(f, o - 1),
                    h <= w)
                        break;
                    o++;
                    h -= w
                } while (1)
            }
            if (u = this._daylightSavingAdjust(new Date(f,o - 1,h)),
            u.getFullYear() != f || u.getMonth() + 1 != o || u.getDate() != h)
                throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 864e9,
        formatDate: function(n, t, i) {
            var u;
            if (!t)
                return "";
            var h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort
              , c = (i ? i.dayNames : null) || this._defaults.dayNames
              , l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort
              , a = (i ? i.monthNames : null) || this._defaults.monthNames
              , f = function(t) {
                var i = u + 1 < n.length && n.charAt(u + 1) == t;
                return i && u++,
                i
            }
              , e = function(n, t, i) {
                var r = "" + t;
                if (f(n))
                    while (r.length < i)
                        r = "0" + r;
                return r
            }
              , s = function(n, t, i, r) {
                return f(n) ? r[t] : i[t]
            }
              , r = ""
              , o = !1;
            if (t)
                for (u = 0; u < n.length; u++)
                    if (o)
                        n.charAt(u) != "'" || f("'") ? r += n.charAt(u) : o = !1;
                    else
                        switch (n.charAt(u)) {
                        case "d":
                            r += e("d", t.getDate(), 2);
                            break;
                        case "D":
                            r += s("D", t.getDay(), h, c);
                            break;
                        case "o":
                            r += e("o", Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime() - new Date(t.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            r += e("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            r += s("M", t.getMonth(), l, a);
                            break;
                        case "y":
                            r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            r += t.getTime();
                            break;
                        case "!":
                            r += t.getTime() * 1e4 + this._ticksTo1970;
                            break;
                        case "'":
                            f("'") ? r += "'" : o = !0;
                            break;
                        default:
                            r += n.charAt(u)
                        }
            return r
        },
        _possibleChars: function(n) {
            for (var i = "", r = !1, u = function(i) {
                var r = t + 1 < n.length && n.charAt(t + 1) == i;
                return r && t++,
                r
            }, t = 0; t < n.length; t++)
                if (r)
                    n.charAt(t) != "'" || u("'") ? i += n.charAt(t) : r = !1;
                else
                    switch (n.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        u("'") ? i += "'" : r = !0;
                        break;
                    default:
                        i += n.charAt(t)
                    }
            return i
        },
        _get: function(n, i) {
            return n.settings[i] !== t ? n.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(n, t) {
            var u, r, i, f, e;
            if (n.input.val() != n.lastVal) {
                u = this._get(n, "dateFormat");
                r = n.lastVal = n.input ? n.input.val() : null;
                i = f = this._getDefaultDate(n);
                e = this._getFormatConfig(n);
                try {
                    i = this.parseDate(u, r, e) || f
                } catch (o) {
                    this.log(o);
                    r = t ? "" : r
                }
                n.selectedDay = i.getDate();
                n.drawMonth = n.selectedMonth = i.getMonth();
                n.drawYear = n.selectedYear = i.getFullYear();
                n.currentDay = r ? i.getDate() : 0;
                n.currentMonth = r ? i.getMonth() : 0;
                n.currentYear = r ? i.getFullYear() : 0;
                this._adjustInstDate(n)
            }
        },
        _getDefaultDate: function(n) {
            return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, r) {
            var f = function(n) {
                var t = new Date;
                return t.setDate(t.getDate() + n),
                t
            }
              , e = function(i) {
                try {
                    return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                } catch (h) {}
                for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u; ) {
                    switch (u[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(u[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += parseInt(u[1], 10) * 7;
                        break;
                    case "m":
                    case "M":
                        e += parseInt(u[1], 10);
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                        break;
                    case "y":
                    case "Y":
                        f += parseInt(u[1], 10);
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                    }
                    u = s.exec(i)
                }
                return new Date(f,e,r)
            }
              , u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
            return u = u && u.toString() == "Invalid Date" ? r : u,
            u && (u.setHours(0),
            u.setMinutes(0),
            u.setSeconds(0),
            u.setMilliseconds(0)),
            this._daylightSavingAdjust(u)
        },
        _daylightSavingAdjust: function(n) {
            return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0),
            n) : null
        },
        _setDate: function(n, t, i) {
            var u = !t
              , f = n.selectedMonth
              , e = n.selectedYear
              , r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate();
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
            f == n.selectedMonth && e == n.selectedYear || i || this._notifyChange(n);
            this._adjustInstDate(n);
            n.input && n.input.val(u ? "" : this._formatDate(n))
        },
        _getDate: function(n) {
            return !n.currentYear || n.input && n.input.val() == "" ? null : this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay))
        },
        _attachHandlers: function(t) {
            var u = this._get(t, "stepMonths")
              , i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        window["DP_jQuery_" + r].datepicker._adjustDate(i, -u, "M")
                    },
                    next: function() {
                        window["DP_jQuery_" + r].datepicker._adjustDate(i, +u, "M")
                    },
                    hide: function() {
                        window["DP_jQuery_" + r].datepicker._hideDatepicker()
                    },
                    today: function() {
                        window["DP_jQuery_" + r].datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return window["DP_jQuery_" + r].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "Y"),
                        !1
                    }
                };
                n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var l = new Date, d, h, ut, c, p, ot, w, st, ht, ct, r, at, vt, s;
            l = this._daylightSavingAdjust(new Date(l.getFullYear(),l.getMonth(),l.getDate()));
            var e = this._get(t, "isRTL")
              , fi = this._get(t, "showButtonPanel")
              , pt = this._get(t, "hideIfNoPrevNext")
              , tt = this._get(t, "navigationAsDateFormat")
              , o = this._getNumberOfMonths(t)
              , ei = this._get(t, "showCurrentAtPos")
              , wt = this._get(t, "stepMonths")
              , it = o[0] != 1 || o[1] != 1
              , rt = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9))
              , y = this._getMinMaxDate(t, "min")
              , a = this._getMinMaxDate(t, "max")
              , i = t.drawMonth - ei
              , u = t.drawYear;
            if (i < 0 && (i += 12,
            u--),
            a)
                for (d = this._daylightSavingAdjust(new Date(a.getFullYear(),a.getMonth() - o[0] * o[1] + 1,a.getDate())),
                d = y && d < y ? y : d; this._daylightSavingAdjust(new Date(u,i,1)) > d; )
                    i--,
                    i < 0 && (i = 11,
                    u--);
            t.drawMonth = i;
            t.drawYear = u;
            h = this._get(t, "prevText");
            h = tt ? this.formatDate(h, this._daylightSavingAdjust(new Date(u,i - wt,1)), this._getFormatConfig(t)) : h;
            ut = this._canAdjustMonth(t, -1, u, i) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + h + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "e" : "w") + '">' + h + "<\/span><\/a>" : pt ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + h + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "e" : "w") + '">' + h + "<\/span><\/a>";
            c = this._get(t, "nextText");
            c = tt ? this.formatDate(c, this._daylightSavingAdjust(new Date(u,i + wt,1)), this._getFormatConfig(t)) : c;
            var bt = this._canAdjustMonth(t, 1, u, i) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + c + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "w" : "e") + '">' + c + "<\/span><\/a>" : pt ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + c + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "w" : "e") + '">' + c + "<\/span><\/a>"
              , g = this._get(t, "currentText")
              , kt = this._get(t, "gotoCurrent") && t.currentDay ? rt : l;
            g = tt ? this.formatDate(g, kt, this._getFormatConfig(t)) : g;
            var dt = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "<\/button>"
              , oi = fi ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (e ? dt : "") + (this._isInRange(t, kt) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + g + "<\/button>" : "") + (e ? "" : dt) + "<\/div>" : ""
              , v = parseInt(this._get(t, "firstDay"), 10);
            v = isNaN(v) ? 0 : v;
            var gt = this._get(t, "showWeek")
              , si = this._get(t, "dayNames")
              , vi = this._get(t, "dayNamesShort")
              , hi = this._get(t, "dayNamesMin")
              , ci = this._get(t, "monthNames")
              , li = this._get(t, "monthNamesShort")
              , ni = this._get(t, "beforeShowDay")
              , ft = this._get(t, "showOtherMonths")
              , ai = this._get(t, "selectOtherMonths")
              , yi = this._get(t, "calculateWeek") || this.iso8601Week
              , ti = this._getDefaultDate(t)
              , et = "";
            for (p = 0; p < o[0]; p++) {
                for (ot = "",
                this.maxRows = 4,
                w = 0; w < o[1]; w++) {
                    var ii = this._daylightSavingAdjust(new Date(u,i,t.selectedDay))
                      , b = " ui-corner-all"
                      , f = "";
                    if (it) {
                        if (f += '<div class="ui-datepicker-group',
                        o[1] > 1)
                            switch (w) {
                            case 0:
                                f += " ui-datepicker-group-first";
                                b = " ui-corner-" + (e ? "right" : "left");
                                break;
                            case o[1] - 1:
                                f += " ui-datepicker-group-last";
                                b = " ui-corner-" + (e ? "left" : "right");
                                break;
                            default:
                                f += " ui-datepicker-group-middle";
                                b = ""
                            }
                        f += '">'
                    }
                    for (f += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + b + '">' + (/all|left/.test(b) && p == 0 ? e ? bt : ut : "") + (/all|right/.test(b) && p == 0 ? e ? ut : bt : "") + this._generateMonthYearHeader(t, i, u, y, a, p > 0 || w > 0, ci, li) + '<\/div><table class="ui-datepicker-calendar"><thead><tr>',
                    st = gt ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "<\/th>" : "",
                    s = 0; s < 7; s++)
                        ht = (s + v) % 7,
                        st += "<th" + ((s + v + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + si[ht] + '">' + hi[ht] + "<\/span><\/th>";
                    f += st + "<\/tr><\/thead><tbody>";
                    ct = this._getDaysInMonth(u, i);
                    u == t.selectedYear && i == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, ct));
                    var ri = (this._getFirstDayOfMonth(u, i) - v + 7) % 7
                      , lt = Math.ceil((ri + ct) / 7)
                      , ui = it ? this.maxRows > lt ? this.maxRows : lt : lt;
                    for (this.maxRows = ui,
                    r = this._daylightSavingAdjust(new Date(u,i,1 - ri)),
                    at = 0; at < ui; at++) {
                        for (f += "<tr>",
                        vt = gt ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(r) + "<\/td>" : "",
                        s = 0; s < 7; s++) {
                            var nt = ni ? ni.apply(t.input ? t.input[0] : null, [r]) : [!0, ""]
                              , k = r.getMonth() != i
                              , yt = k && !ai || !nt[0] || y && r < y || a && r > a;
                            vt += '<td class="' + ((s + v + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (k ? " ui-datepicker-other-month" : "") + (r.getTime() == ii.getTime() && i == t.selectedMonth && t._keyEvent || ti.getTime() == r.getTime() && ti.getTime() == ii.getTime() ? " " + this._dayOverClass : "") + (yt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (k && !ft ? "" : " " + nt[1] + (r.getTime() == rt.getTime() ? " " + this._currentClass : "") + (r.getTime() == l.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!k || ft) && nt[2] ? ' title="' + nt[2] + '"' : "") + (yt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + r.getMonth() + '" data-year="' + r.getFullYear() + '"') + ">" + (k && !ft ? "&#xa0;" : yt ? '<span class="ui-state-default">' + r.getDate() + "<\/span>" : '<a class="ui-state-default' + (r.getTime() == l.getTime() ? " ui-state-highlight" : "") + (r.getTime() == rt.getTime() ? " ui-state-active" : "") + (k ? " ui-priority-secondary" : "") + '" href="#">' + r.getDate() + "<\/a>") + "<\/td>";
                            r.setDate(r.getDate() + 1);
                            r = this._daylightSavingAdjust(r)
                        }
                        f += vt + "<\/tr>"
                    }
                    i++;
                    i > 11 && (i = 0,
                    u++);
                    f += "<\/tbody><\/table>" + (it ? "<\/div>" + (o[0] > 0 && w == o[1] - 1 ? '<div class="ui-datepicker-row-break"><\/div>' : "") : "");
                    ot += f
                }
                et += ot
            }
            return et += oi + (n.browser.msie && parseInt(n.browser.version, 10) < 7 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"><\/iframe>' : ""),
            t._keyEvent = !1,
            et
        },
        _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
            var v = this._get(n, "changeMonth"), y = this._get(n, "changeYear"), p = this._get(n, "showMonthAfterYear"), c = '<div class="ui-datepicker-title">', l = "", w, b, h;
            if (f || !v)
                l += '<span class="ui-datepicker-month">' + e[t] + "<\/span>";
            else {
                for (w = r && r.getFullYear() == i,
                b = u && u.getFullYear() == i,
                l += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">',
                h = 0; h < 12; h++)
                    (!w || h >= r.getMonth()) && (!b || h <= u.getMonth()) && (l += '<option value="' + h + '"' + (h == t ? ' selected="selected"' : "") + ">" + o[h] + "<\/option>");
                l += "<\/select>"
            }
            if (p || (c += l + (f || !(v && y) ? "&#xa0;" : "")),
            !n.yearshtml)
                if (n.yearshtml = "",
                f || !y)
                    c += '<span class="ui-datepicker-year">' + i + "<\/span>";
                else {
                    var k = this._get(n, "yearRange").split(":")
                      , d = (new Date).getFullYear()
                      , g = function(n) {
                        var t = n.match(/c[+-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+-].*/) ? d + parseInt(n, 10) : parseInt(n, 10);
                        return isNaN(t) ? d : t
                    }
                      , s = g(k[0])
                      , a = Math.max(s, g(k[1] || ""));
                    for (s = r ? Math.max(s, r.getFullYear()) : s,
                    a = u ? Math.min(a, u.getFullYear()) : a,
                    n.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; s <= a; s++)
                        n.yearshtml += '<option value="' + s + '"' + (s == i ? ' selected="selected"' : "") + ">" + s + "<\/option>";
                    n.yearshtml += "<\/select>";
                    c += n.yearshtml;
                    n.yearshtml = null
                }
            return c += this._get(n, "yearSuffix"),
            p && (c += (f || !(v && y) ? "&#xa0;" : "") + l),
            c + "<\/div>"
        },
        _adjustInstDate: function(n, t, i) {
            var u = n.drawYear + (i == "Y" ? t : 0)
              , f = n.drawMonth + (i == "M" ? t : 0)
              , e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i == "D" ? t : 0)
              , r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u,f,e)));
            n.selectedDay = r.getDate();
            n.drawMonth = n.selectedMonth = r.getMonth();
            n.drawYear = n.selectedYear = r.getFullYear();
            (i == "M" || i == "Y") && this._notifyChange(n)
        },
        _restrictMinMax: function(n, t) {
            var i = this._getMinMaxDate(n, "min")
              , r = this._getMinMaxDate(n, "max")
              , u = i && t < i ? i : t;
            return r && u > r ? r : u
        },
        _notifyChange: function(n) {
            var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
        },
        _getNumberOfMonths: function(n) {
            var t = this._get(n, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function(n, t) {
            return this._determineDate(n, this._get(n, t + "Date"), null)
        },
        _getDaysInMonth: function(n, t) {
            return 32 - this._daylightSavingAdjust(new Date(n,t,32)).getDate()
        },
        _getFirstDayOfMonth: function(n, t) {
            return new Date(n,t,1).getDay()
        },
        _canAdjustMonth: function(n, t, i, r) {
            var f = this._getNumberOfMonths(n)
              , u = this._daylightSavingAdjust(new Date(i,r + (t < 0 ? t : f[0] * f[1]),1));
            return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())),
            this._isInRange(n, u)
        },
        _isInRange: function(n, t) {
            var i = this._getMinMaxDate(n, "min")
              , r = this._getMinMaxDate(n, "max");
            return (!i || t.getTime() >= i.getTime()) && (!r || t.getTime() <= r.getTime())
        },
        _getFormatConfig: function(n) {
            var t = this._get(n, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
            {
                shortYearCutoff: t,
                dayNamesShort: this._get(n, "dayNamesShort"),
                dayNames: this._get(n, "dayNames"),
                monthNamesShort: this._get(n, "monthNamesShort"),
                monthNames: this._get(n, "monthNames")
            }
        },
        _formatDate: function(n, t, i, r) {
            t || (n.currentDay = n.selectedDay,
            n.currentMonth = n.selectedMonth,
            n.currentYear = n.selectedYear);
            var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r,i,t)) : this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay));
            return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
        }
    });
    n.fn.datepicker = function(t) {
        if (!this.length)
            return this;
        n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick).find("body").append(n.datepicker.dpDiv),
        n.datepicker.initialized = !0);
        var i = Array.prototype.slice.call(arguments, 1);
        return typeof t == "string" && (t == "isDisabled" || t == "getDate" || t == "widget") ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : t == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
            typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
        })
    }
    ;
    n.datepicker = new e;
    n.datepicker.initialized = !1;
    n.datepicker.uuid = (new Date).getTime();
    n.datepicker.version = "1.8.24";
    window["DP_jQuery_" + r] = n
}(jQuery),
function(n, t) {
    n.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            });
            this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);
            this.oldValue = this._value();
            this._refreshValue()
        },
        destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove();
            n.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function(n) {
            return n === t ? this._value() : (this._setOption("value", n),
            this)
        },
        _setOption: function(t, i) {
            t === "value" && (this.options.value = i,
            this._refreshValue(),
            this._value() === this.options.max && this._trigger("complete"));
            n.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function() {
            var n = this.options.value;
            return typeof n != "number" && (n = 0),
            Math.min(this.options.max, Math.max(this.min, n))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var n = this.value()
              , t = this._percentage();
            this.oldValue !== n && (this.oldValue = n,
            this._trigger("change"));
            this.valueDiv.toggle(n > this.min).toggleClass("ui-corner-right", n === this.options.max).width(t.toFixed(0) + "%");
            this.element.attr("aria-valuenow", n)
        }
    });
    n.extend(n.ui.progressbar, {
        version: "1.8.24"
    })
}(jQuery);
jQuery.effects || function(n, t) {
    function f(t) {
        var i;
        return t && t.constructor == Array && t.length == 3 ? t : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)] : (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [parseFloat(i[1]) * 2.55, parseFloat(i[2]) * 2.55, parseFloat(i[3]) * 2.55] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16)] : (i = /rgba\(0, 0, 0, 0\)/.exec(t)) ? e.transparent : e[n.trim(t).toLowerCase()]
    }
    function c(t, i) {
        var r;
        do {
            if (r = (n.curCSS || n.css)(t, i),
            r != "" && r != "transparent" || n.nodeName(t, "body"))
                break;
            i = "backgroundColor"
        } while (t = t.parentNode);
        return f(r)
    }
    function s() {
        var n = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle, i = {}, t, u, r;
        if (n && n.length && n[0] && n[n[0]])
            for (r = n.length; r--; )
                t = n[r],
                typeof n[t] == "string" && (u = t.replace(/\-(\w)/g, function(n, t) {
                    return t.toUpperCase()
                }),
                i[u] = n[t]);
        else
            for (t in n)
                typeof n[t] == "string" && (i[t] = n[t]);
        return i
    }
    function h(t) {
        var i, r;
        for (i in t)
            r = t[i],
            (r == null || n.isFunction(r) || i in l || /scrollbar/.test(i) || !/color/i.test(i) && isNaN(parseFloat(r))) && delete t[i];
        return t
    }
    function a(n, t) {
        var r = {
            _: 0
        };
        for (var i in t)
            n[i] != t[i] && (r[i] = t[i]);
        return r
    }
    function i(t, i, r, u) {
        return typeof t == "object" && (u = i,
        r = null,
        i = t,
        t = i.effect),
        n.isFunction(i) && (u = i,
        r = null,
        i = {}),
        (typeof i == "number" || n.fx.speeds[i]) && (u = r,
        r = i,
        i = {}),
        n.isFunction(r) && (u = r,
        r = null),
        i = i || {},
        r = r || i.duration,
        r = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default,
        u = u || i.complete,
        [t, i, r, u]
    }
    function u(t) {
        return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects[t] ? !0 : !1
    }
    var r;
    n.effects = {};
    n.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(t, i) {
        n.fx.step[i] = function(n) {
            n.colorInit || (n.start = c(n.elem, i),
            n.end = f(n.end),
            n.colorInit = !0);
            n.elem.style[i] = "rgb(" + Math.max(Math.min(parseInt(n.pos * (n.end[0] - n.start[0]) + n.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(n.pos * (n.end[1] - n.start[1]) + n.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(n.pos * (n.end[2] - n.start[2]) + n.start[2], 10), 255), 0) + ")"
        }
    });
    var e = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }
      , o = ["add", "remove", "toggle"]
      , l = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
    };
    n.effects.animateClass = function(t, i, r, u) {
        return n.isFunction(r) && (u = r,
        r = null),
        this.queue(function() {
            var f = n(this), e = f.attr("style") || " ", l = h(s.call(this)), c, v = f.attr("class") || "";
            n.each(o, function(n, i) {
                t[i] && f[i + "Class"](t[i])
            });
            c = h(s.call(this));
            f.attr("class", v);
            f.animate(a(l, c), {
                queue: !1,
                duration: i,
                easing: r,
                complete: function() {
                    n.each(o, function(n, i) {
                        t[i] && f[i + "Class"](t[i])
                    });
                    typeof f.attr("style") == "object" ? (f.attr("style").cssText = "",
                    f.attr("style").cssText = e) : f.attr("style", e);
                    u && u.apply(this, arguments);
                    n.dequeue(this)
                }
            })
        })
    }
    ;
    n.fn.extend({
        _addClass: n.fn.addClass,
        addClass: function(t, i, r, u) {
            return i ? n.effects.animateClass.apply(this, [{
                add: t
            }, i, r, u]) : this._addClass(t)
        },
        _removeClass: n.fn.removeClass,
        removeClass: function(t, i, r, u) {
            return i ? n.effects.animateClass.apply(this, [{
                remove: t
            }, i, r, u]) : this._removeClass(t)
        },
        _toggleClass: n.fn.toggleClass,
        toggleClass: function(i, r, u, f, e) {
            return typeof r == "boolean" || r === t ? u ? n.effects.animateClass.apply(this, [r ? {
                add: i
            } : {
                remove: i
            }, u, f, e]) : this._toggleClass(i, r) : n.effects.animateClass.apply(this, [{
                toggle: i
            }, r, u, f])
        },
        switchClass: function(t, i, r, u, f) {
            return n.effects.animateClass.apply(this, [{
                add: i,
                remove: t
            }, r, u, f])
        }
    });
    n.extend(n.effects, {
        version: "1.8.24",
        save: function(n, t) {
            for (var i = 0; i < t.length; i++)
                t[i] !== null && n.data("ec.storage." + t[i], n[0].style[t[i]])
        },
        restore: function(n, t) {
            for (var i = 0; i < t.length; i++)
                t[i] !== null && n.css(t[i], n.data("ec.storage." + t[i]))
        },
        setMode: function(n, t) {
            return t == "toggle" && (t = n.is(":hidden") ? "show" : "hide"),
            t
        },
        getBaseline: function(n, t) {
            var i, r;
            switch (n[0]) {
            case "top":
                i = 0;
                break;
            case "middle":
                i = .5;
                break;
            case "bottom":
                i = 1;
                break;
            default:
                i = n[0] / t.height
            }
            switch (n[1]) {
            case "left":
                r = 0;
                break;
            case "center":
                r = .5;
                break;
            case "right":
                r = 1;
                break;
            default:
                r = n[1] / t.width
            }
            return {
                x: r,
                y: i
            }
        },
        createWrapper: function(t) {
            if (t.parent().is(".ui-effects-wrapper"))
                return t.parent();
            var i = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                float: t.css("float")
            }
              , u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            })
              , r = document.activeElement;
            try {
                r.id
            } catch (f) {
                r = document.body
            }
            return t.wrap(u),
            (t[0] === r || n.contains(t[0], r)) && n(r).focus(),
            u = t.parent(),
            t.css("position") == "static" ? (u.css({
                position: "relative"
            }),
            t.css({
                position: "relative"
            })) : (n.extend(i, {
                position: t.css("position"),
                zIndex: t.css("z-index")
            }),
            n.each(["top", "left", "bottom", "right"], function(n, r) {
                i[r] = t.css(r);
                isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
            }),
            t.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })),
            u.css(i).show()
        },
        removeWrapper: function(t) {
            var r, i = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") ? (r = t.parent().replaceWith(t),
            (t[0] === i || n.contains(t[0], i)) && n(i).focus(),
            r) : t
        },
        setTransition: function(t, i, r, u) {
            return u = u || {},
            n.each(i, function(n, i) {
                var f = t.cssUnit(i);
                f[0] > 0 && (u[i] = f[0] * r + f[1])
            }),
            u
        }
    });
    n.fn.extend({
        effect: function(t) {
            var u = i.apply(this, arguments)
              , r = {
                options: u[1],
                duration: u[2],
                callback: u[3]
            }
              , f = r.options.mode
              , e = n.effects[t];
            return n.fx.off || !e ? f ? this[f](r.duration, r.callback) : this.each(function() {
                r.callback && r.callback.call(this)
            }) : e.call(this, r)
        },
        _show: n.fn.show,
        show: function(n) {
            if (u(n))
                return this._show.apply(this, arguments);
            var t = i.apply(this, arguments);
            return t[1].mode = "show",
            this.effect.apply(this, t)
        },
        _hide: n.fn.hide,
        hide: function(n) {
            if (u(n))
                return this._hide.apply(this, arguments);
            var t = i.apply(this, arguments);
            return t[1].mode = "hide",
            this.effect.apply(this, t)
        },
        __toggle: n.fn.toggle,
        toggle: function(t) {
            if (u(t) || typeof t == "boolean" || n.isFunction(t))
                return this.__toggle.apply(this, arguments);
            var r = i.apply(this, arguments);
            return r[1].mode = "toggle",
            this.effect.apply(this, r)
        },
        cssUnit: function(t) {
            var i = this.css(t)
              , r = [];
            return n.each(["em", "px", "%", "pt"], function(n, t) {
                i.indexOf(t) > 0 && (r = [parseFloat(i), t])
            }),
            r
        }
    });
    r = {};
    n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, t) {
        r[t] = function(t) {
            return Math.pow(t, n + 2)
        }
    });
    n.extend(r, {
        Sine: function(n) {
            return 1 - Math.cos(n * Math.PI / 2)
        },
        Circ: function(n) {
            return 1 - Math.sqrt(1 - n * n)
        },
        Elastic: function(n) {
            return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
        },
        Back: function(n) {
            return n * n * (3 * n - 2)
        },
        Bounce: function(n) {
            for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11; )
                ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
        }
    });
    n.each(r, function(t, i) {
        n.easing["easeIn" + t] = i;
        n.easing["easeOut" + t] = function(n) {
            return 1 - i(1 - n)
        }
        ;
        n.easing["easeInOut" + t] = function(n) {
            return n < .5 ? i(n * 2) / 2 : i(n * -2 + 2) / -2 + 1
        }
    })
}(jQuery),
function(n) {
    n.effects.blind = function(t) {
        return this.queue(function() {
            var i = n(this), e = ["position", "top", "bottom", "left", "right"], u = n.effects.setMode(i, t.options.mode || "hide"), o = t.options.direction || "vertical", f;
            n.effects.save(i, e);
            i.show();
            var r = n.effects.createWrapper(i).css({
                overflow: "hidden"
            })
              , s = o == "vertical" ? "height" : "width"
              , h = o == "vertical" ? r.height() : r.width();
            u == "show" && r.css(s, 0);
            f = {};
            f[s] = u == "show" ? h : 0;
            r.animate(f, t.duration, t.options.easing, function() {
                u == "hide" && i.hide();
                n.effects.restore(i, e);
                n.effects.removeWrapper(i);
                t.callback && t.callback.apply(i[0], arguments);
                i.dequeue()
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.bounce = function(t) {
        return this.queue(function() {
            var i = n(this), l = ["position", "top", "bottom", "left", "right"], f = n.effects.setMode(i, t.options.mode || "effect"), a = t.options.direction || "up", r = t.options.distance || 20, v = t.options.times || 5, o = t.duration || 250, y, s, h, c;
            /show|hide/.test(f) && l.push("opacity");
            n.effects.save(i, l);
            i.show();
            n.effects.createWrapper(i);
            var u = a == "up" || a == "down" ? "top" : "left"
              , e = a == "up" || a == "left" ? "pos" : "neg"
              , r = t.options.distance || (u == "top" ? i.outerHeight(!0) / 3 : i.outerWidth(!0) / 3);
            for (f == "show" && i.css("opacity", 0).css(u, e == "pos" ? -r : r),
            f == "hide" && (r = r / (v * 2)),
            f != "hide" && v--,
            f == "show" && (s = {
                opacity: 1
            },
            s[u] = (e == "pos" ? "+=" : "-=") + r,
            i.animate(s, o / 2, t.options.easing),
            r = r / 2,
            v--),
            y = 0; y < v; y++)
                h = {},
                c = {},
                h[u] = (e == "pos" ? "-=" : "+=") + r,
                c[u] = (e == "pos" ? "+=" : "-=") + r,
                i.animate(h, o / 2, t.options.easing).animate(c, o / 2, t.options.easing),
                r = f == "hide" ? r * 2 : r / 2;
            f == "hide" ? (s = {
                opacity: 0
            },
            s[u] = (e == "pos" ? "-=" : "+=") + r,
            i.animate(s, o / 2, t.options.easing, function() {
                i.hide();
                n.effects.restore(i, l);
                n.effects.removeWrapper(i);
                t.callback && t.callback.apply(this, arguments)
            })) : (h = {},
            c = {},
            h[u] = (e == "pos" ? "-=" : "+=") + r,
            c[u] = (e == "pos" ? "+=" : "-=") + r,
            i.animate(h, o / 2, t.options.easing).animate(c, o / 2, t.options.easing, function() {
                n.effects.restore(i, l);
                n.effects.removeWrapper(i);
                t.callback && t.callback.apply(this, arguments)
            }));
            i.queue("fx", function() {
                i.dequeue()
            });
            i.dequeue()
        })
    }
}(jQuery),
function(n) {
    n.effects.clip = function(t) {
        return this.queue(function() {
            var i = n(this), h = ["position", "top", "bottom", "left", "right", "height", "width"], u = n.effects.setMode(i, t.options.mode || "hide"), o = t.options.direction || "vertical", e;
            n.effects.save(i, h);
            i.show();
            var c = n.effects.createWrapper(i).css({
                overflow: "hidden"
            })
              , r = i[0].tagName == "IMG" ? c : i
              , f = {
                size: o == "vertical" ? "height" : "width",
                position: o == "vertical" ? "top" : "left"
            }
              , s = o == "vertical" ? r.height() : r.width();
            u == "show" && (r.css(f.size, 0),
            r.css(f.position, s / 2));
            e = {};
            e[f.size] = u == "show" ? s : 0;
            e[f.position] = u == "show" ? 0 : s / 2;
            r.animate(e, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    u == "hide" && i.hide();
                    n.effects.restore(i, h);
                    n.effects.removeWrapper(i);
                    t.callback && t.callback.apply(i[0], arguments);
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.drop = function(t) {
        return this.queue(function() {
            var i = n(this), h = ["position", "top", "bottom", "left", "right", "opacity"], r = n.effects.setMode(i, t.options.mode || "hide"), u = t.options.direction || "left", s;
            n.effects.save(i, h);
            i.show();
            n.effects.createWrapper(i);
            var f = u == "up" || u == "down" ? "top" : "left"
              , e = u == "up" || u == "left" ? "pos" : "neg"
              , o = t.options.distance || (f == "top" ? i.outerHeight(!0) / 2 : i.outerWidth(!0) / 2);
            r == "show" && i.css("opacity", 0).css(f, e == "pos" ? -o : o);
            s = {
                opacity: r == "show" ? 1 : 0
            };
            s[f] = (r == "show" ? e == "pos" ? "+=" : "-=" : e == "pos" ? "-=" : "+=") + o;
            i.animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    r == "hide" && i.hide();
                    n.effects.restore(i, h);
                    n.effects.removeWrapper(i);
                    t.callback && t.callback.apply(this, arguments);
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.explode = function(t) {
        return this.queue(function() {
            var r = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3, u = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3, i, o, s, h, f, e;
            for (t.options.mode = t.options.mode == "toggle" ? n(this).is(":visible") ? "hide" : "show" : t.options.mode,
            i = n(this).show().css("visibility", "hidden"),
            o = i.offset(),
            o.top -= parseInt(i.css("marginTop"), 10) || 0,
            o.left -= parseInt(i.css("marginLeft"), 10) || 0,
            s = i.outerWidth(!0),
            h = i.outerHeight(!0),
            f = 0; f < r; f++)
                for (e = 0; e < u; e++)
                    i.clone().appendTo("body").wrap("<div><\/div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -e * (s / u),
                        top: -f * (h / r)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: s / u,
                        height: h / r,
                        left: o.left + e * (s / u) + (t.options.mode == "show" ? (e - Math.floor(u / 2)) * (s / u) : 0),
                        top: o.top + f * (h / r) + (t.options.mode == "show" ? (f - Math.floor(r / 2)) * (h / r) : 0),
                        opacity: t.options.mode == "show" ? 0 : 1
                    }).animate({
                        left: o.left + e * (s / u) + (t.options.mode == "show" ? 0 : (e - Math.floor(u / 2)) * (s / u)),
                        top: o.top + f * (h / r) + (t.options.mode == "show" ? 0 : (f - Math.floor(r / 2)) * (h / r)),
                        opacity: t.options.mode == "show" ? 1 : 0
                    }, t.duration || 500);
            setTimeout(function() {
                t.options.mode == "show" ? i.css({
                    visibility: "visible"
                }) : i.css({
                    visibility: "visible"
                }).hide();
                t.callback && t.callback.apply(i[0]);
                i.dequeue();
                n("div.ui-effects-explode").remove()
            }, t.duration || 500)
        })
    }
}(jQuery),
function(n) {
    n.effects.fade = function(t) {
        return this.queue(function() {
            var i = n(this)
              , r = n.effects.setMode(i, t.options.mode || "hide");
            i.animate({
                opacity: r
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    t.callback && t.callback.apply(this, arguments);
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.fold = function(t) {
        return this.queue(function() {
            var i = n(this), h = ["position", "top", "bottom", "left", "right"], r = n.effects.setMode(i, t.options.mode || "hide"), f = t.options.size || 15, c = !!t.options.horizFirst, l = t.duration ? t.duration / 2 : n.fx.speeds._default / 2, o, s;
            n.effects.save(i, h);
            i.show();
            var u = n.effects.createWrapper(i).css({
                overflow: "hidden"
            })
              , a = r == "show" != c
              , v = a ? ["width", "height"] : ["height", "width"]
              , e = a ? [u.width(), u.height()] : [u.height(), u.width()]
              , y = /([0-9]+)%/.exec(f);
            y && (f = parseInt(y[1], 10) / 100 * e[r == "hide" ? 0 : 1]);
            r == "show" && u.css(c ? {
                height: 0,
                width: f
            } : {
                height: f,
                width: 0
            });
            o = {};
            s = {};
            o[v[0]] = r == "show" ? e[0] : f;
            s[v[1]] = r == "show" ? e[1] : 0;
            u.animate(o, l, t.options.easing).animate(s, l, t.options.easing, function() {
                r == "hide" && i.hide();
                n.effects.restore(i, h);
                n.effects.removeWrapper(i);
                t.callback && t.callback.apply(i[0], arguments);
                i.dequeue()
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.highlight = function(t) {
        return this.queue(function() {
            var i = n(this)
              , u = ["backgroundImage", "backgroundColor", "opacity"]
              , r = n.effects.setMode(i, t.options.mode || "show")
              , f = {
                backgroundColor: i.css("backgroundColor")
            };
            r == "hide" && (f.opacity = 0);
            n.effects.save(i, u);
            i.show().css({
                backgroundImage: "none",
                backgroundColor: t.options.color || "#ffff99"
            }).animate(f, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    r == "hide" && i.hide();
                    n.effects.restore(i, u);
                    r != "show" || n.support.opacity || this.style.removeAttribute("filter");
                    t.callback && t.callback.apply(this, arguments);
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.pulsate = function(t) {
        return this.queue(function() {
            var i = n(this), e = n.effects.setMode(i, t.options.mode || "show"), o = (t.options.times || 5) * 2 - 1, s = t.duration ? t.duration / 2 : n.fx.speeds._default / 2, u = i.is(":visible"), r = 0, f;
            for (u || (i.css("opacity", 0).show(),
            r = 1),
            (e == "hide" && u || e == "show" && !u) && o--,
            f = 0; f < o; f++)
                i.animate({
                    opacity: r
                }, s, t.options.easing),
                r = (r + 1) % 2;
            i.animate({
                opacity: r
            }, s, t.options.easing, function() {
                r == 0 && i.hide();
                t.callback && t.callback.apply(this, arguments)
            });
            i.queue("fx", function() {
                i.dequeue()
            }).dequeue()
        })
    }
}(jQuery),
function(n) {
    n.effects.puff = function(t) {
        return this.queue(function() {
            var i = n(this)
              , r = n.effects.setMode(i, t.options.mode || "hide")
              , f = parseInt(t.options.percent, 10) || 150
              , e = f / 100
              , u = {
                height: i.height(),
                width: i.width()
            };
            n.extend(t.options, {
                fade: !0,
                mode: r,
                percent: r == "hide" ? f : 100,
                from: r == "hide" ? u : {
                    height: u.height * e,
                    width: u.width * e
                }
            });
            i.effect("scale", t.options, t.duration, t.callback);
            i.dequeue()
        })
    }
    ;
    n.effects.scale = function(t) {
        return this.queue(function() {
            var i = n(this), r = n.extend(!0, {}, t.options), u = n.effects.setMode(i, t.options.mode || "effect"), o = parseInt(t.options.percent, 10) || (parseInt(t.options.percent, 10) == 0 ? 0 : u == "hide" ? 0 : 100), s = t.options.direction || "both", h = t.options.origin, f, e;
            u != "effect" && (r.origin = h || ["middle", "center"],
            r.restore = !0);
            f = {
                height: i.height(),
                width: i.width()
            };
            i.from = t.options.from || (u == "show" ? {
                height: 0,
                width: 0
            } : f);
            e = {
                y: s != "horizontal" ? o / 100 : 1,
                x: s != "vertical" ? o / 100 : 1
            };
            i.to = {
                height: f.height * e.y,
                width: f.width * e.x
            };
            t.options.fade && (u == "show" && (i.from.opacity = 0,
            i.to.opacity = 1),
            u == "hide" && (i.from.opacity = 1,
            i.to.opacity = 0));
            r.from = i.from;
            r.to = i.to;
            r.mode = u;
            i.effect("size", r, t.duration, t.callback);
            i.dequeue()
        })
    }
    ;
    n.effects.size = function(t) {
        return this.queue(function() {
            var i = n(this), f = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], v = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], a = ["width", "height", "overflow"], c = ["fontSize"], e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = n.effects.setMode(i, t.options.mode || "effect"), l = t.options.restore || !1, s = t.options.scale || "both", y = t.options.origin, u = {
                height: i.height(),
                width: i.width()
            }, h, r;
            i.from = t.options.from || u;
            i.to = t.options.to || u;
            y && (h = n.effects.getBaseline(y, u),
            i.from.top = (u.height - i.from.height) * h.y,
            i.from.left = (u.width - i.from.width) * h.x,
            i.to.top = (u.height - i.to.height) * h.y,
            i.to.left = (u.width - i.to.width) * h.x);
            r = {
                from: {
                    y: i.from.height / u.height,
                    x: i.from.width / u.width
                },
                to: {
                    y: i.to.height / u.height,
                    x: i.to.width / u.width
                }
            };
            (s == "box" || s == "both") && (r.from.y != r.to.y && (f = f.concat(e),
            i.from = n.effects.setTransition(i, e, r.from.y, i.from),
            i.to = n.effects.setTransition(i, e, r.to.y, i.to)),
            r.from.x != r.to.x && (f = f.concat(o),
            i.from = n.effects.setTransition(i, o, r.from.x, i.from),
            i.to = n.effects.setTransition(i, o, r.to.x, i.to)));
            (s == "content" || s == "both") && r.from.y != r.to.y && (f = f.concat(c),
            i.from = n.effects.setTransition(i, c, r.from.y, i.from),
            i.to = n.effects.setTransition(i, c, r.to.y, i.to));
            n.effects.save(i, l ? f : v);
            i.show();
            n.effects.createWrapper(i);
            i.css("overflow", "hidden").css(i.from);
            (s == "content" || s == "both") && (e = e.concat(["marginTop", "marginBottom"]).concat(c),
            o = o.concat(["marginLeft", "marginRight"]),
            a = f.concat(e).concat(o),
            i.find("*[width]").each(function() {
                var i = n(this), u;
                l && n.effects.save(i, a);
                u = {
                    height: i.height(),
                    width: i.width()
                };
                i.from = {
                    height: u.height * r.from.y,
                    width: u.width * r.from.x
                };
                i.to = {
                    height: u.height * r.to.y,
                    width: u.width * r.to.x
                };
                r.from.y != r.to.y && (i.from = n.effects.setTransition(i, e, r.from.y, i.from),
                i.to = n.effects.setTransition(i, e, r.to.y, i.to));
                r.from.x != r.to.x && (i.from = n.effects.setTransition(i, o, r.from.x, i.from),
                i.to = n.effects.setTransition(i, o, r.to.x, i.to));
                i.css(i.from);
                i.animate(i.to, t.duration, t.options.easing, function() {
                    l && n.effects.restore(i, a)
                })
            }));
            i.animate(i.to, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    i.to.opacity === 0 && i.css("opacity", i.from.opacity);
                    p == "hide" && i.hide();
                    n.effects.restore(i, l ? f : v);
                    n.effects.removeWrapper(i);
                    t.callback && t.callback.apply(this, arguments);
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.shake = function(t) {
        return this.queue(function() {
            var i = n(this), l = ["position", "top", "bottom", "left", "right"], y = n.effects.setMode(i, t.options.mode || "effect"), u = t.options.direction || "left", f = t.options.distance || 20, v = t.options.times || 3, r = t.duration || t.options.duration || 140, c;
            n.effects.save(i, l);
            i.show();
            n.effects.createWrapper(i);
            var e = u == "up" || u == "down" ? "top" : "left"
              , o = u == "up" || u == "left" ? "pos" : "neg"
              , s = {}
              , h = {}
              , a = {};
            for (s[e] = (o == "pos" ? "-=" : "+=") + f,
            h[e] = (o == "pos" ? "+=" : "-=") + f * 2,
            a[e] = (o == "pos" ? "-=" : "+=") + f * 2,
            i.animate(s, r, t.options.easing),
            c = 1; c < v; c++)
                i.animate(h, r, t.options.easing).animate(a, r, t.options.easing);
            i.animate(h, r, t.options.easing).animate(s, r / 2, t.options.easing, function() {
                n.effects.restore(i, l);
                n.effects.removeWrapper(i);
                t.callback && t.callback.apply(this, arguments)
            });
            i.queue("fx", function() {
                i.dequeue()
            });
            i.dequeue()
        })
    }
}(jQuery),
function(n) {
    n.effects.slide = function(t) {
        return this.queue(function() {
            var i = n(this), h = ["position", "top", "bottom", "left", "right"], f = n.effects.setMode(i, t.options.mode || "show"), u = t.options.direction || "left", s;
            n.effects.save(i, h);
            i.show();
            n.effects.createWrapper(i).css({
                overflow: "hidden"
            });
            var e = u == "up" || u == "down" ? "top" : "left"
              , o = u == "up" || u == "left" ? "pos" : "neg"
              , r = t.options.distance || (e == "top" ? i.outerHeight(!0) : i.outerWidth(!0));
            f == "show" && i.css(e, o == "pos" ? isNaN(r) ? "-" + r : -r : r);
            s = {};
            s[e] = (f == "show" ? o == "pos" ? "+=" : "-=" : o == "pos" ? "-=" : "+=") + r;
            i.animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    f == "hide" && i.hide();
                    n.effects.restore(i, h);
                    n.effects.removeWrapper(i);
                    t.callback && t.callback.apply(this, arguments);
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.transfer = function(t) {
        return this.queue(function() {
            var i = n(this)
              , r = n(t.options.to)
              , u = r.offset()
              , e = {
                top: u.top,
                left: u.left,
                height: r.innerHeight(),
                width: r.innerWidth()
            }
              , f = i.offset()
              , o = n('<div class="ui-effects-transfer"><\/div>').appendTo(document.body).addClass(t.options.className).css({
                top: f.top,
                left: f.left,
                height: i.innerHeight(),
                width: i.innerWidth(),
                position: "absolute"
            }).animate(e, t.duration, t.options.easing, function() {
                o.remove();
                t.callback && t.callback.apply(i[0], arguments);
                i.dequeue()
            })
        })
    }
}(jQuery),
function(n) {
    n.widget("ui.nestedSortable", n.extend({}, n.ui.sortable.prototype, {
        options: {
            tabSize: 20,
            disableNesting: "ui-nestedSortable-no-nesting",
            errorClass: "ui-nestedSortable-error",
            listType: "ol"
        },
        _create: function() {
            return this.element.data("sortable", this.element.data("sortableTree")),
            n.ui.sortable.prototype._create.apply(this, arguments)
        },
        _mouseDrag: function(t) {
            var i, r, f;
            for (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (i = this.options,
            r = !1,
            this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)),
            t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))),
            r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && this.options.axis == "y" || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && this.options.axis == "x" || (this.helper[0].style.top = this.position.top + "px"),
            f = this.items.length - 1; f >= 0; f--) {
                var e = this.items[f]
                  , u = e.item[0]
                  , o = this._intersectsWithPointer(e);
                if (o && u != this.currentItem[0] && this.placeholder[o == 1 ? "next" : "prev"]()[0] != u && !n.ui.contains(this.placeholder[0], u) && (this.options.type == "semi-dynamic" ? !n.ui.contains(this.element[0], u) : !0)) {
                    if (this.direction = o == 1 ? "down" : "up",
                    this.options.tolerance == "pointer" || this._intersectsWithSides(e))
                        this._rearrange(t, e);
                    else
                        break;
                    this._clearEmpty(u);
                    this._trigger("change", t, this._uiHash());
                    break
                }
            }
            for (itemBefore = this.placeholder[0].previousSibling; itemBefore != null; )
                if (itemBefore.nodeType == 1 && itemBefore != this.currentItem[0])
                    break;
                else
                    itemBefore = itemBefore.previousSibling;
            return parentItem = this.placeholder[0].parentNode.parentNode,
            newList = document.createElement(i.listType),
            parentItem != null && parentItem.nodeName == "LI" && this.positionAbs.left < n(parentItem).offset().left ? (n(parentItem).after(this.placeholder[0]),
            this._clearEmpty(parentItem)) : itemBefore != null && itemBefore.nodeName == "LI" && this.positionAbs.left > n(itemBefore).offset().left + this.options.tabSize ? n(itemBefore).hasClass(this.options.disableNesting) ? n(this.placeholder[0]).addClass(this.options.errorClass).css("marginLeft", this.options.tabSize) : (n(this.placeholder[0]).hasClass(this.options.errorClass) && n(this.placeholder[0]).css("marginLeft", 0).removeClass(this.options.errorClass),
            itemBefore.children[1] == null && itemBefore.appendChild(newList),
            itemBefore.children[1].appendChild(this.placeholder[0])) : itemBefore != null ? (n(this.placeholder[0]).hasClass(this.options.errorClass) && n(this.placeholder[0]).css("marginLeft", 0).removeClass(this.options.errorClass),
            n(itemBefore).after(this.placeholder[0])) : n(this.placeholder[0]).hasClass(this.options.errorClass) && n(this.placeholder[0]).css("marginLeft", 0).removeClass(this.options.errorClass),
            this._contactContainers(t),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        serialize: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            n(r).each(function() {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/)
                  , u = (n(t.item || this).parent(t.listType).parent("li").attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                r && i.push((t.key || r[1] + "[" + (t.key && t.expression ? r[1] : r[2]) + "]") + "=" + (u ? t.key && t.expression ? u[1] : u[2] : "root"))
            }),
            !i.length && t.key && i.push(t.key + "="),
            i.join("&")
        },
        toArray: function(t) {
            function f(u, e, o) {
                return right = o + 1,
                n(u).children(t.listType).children("li").length > 0 && (e++,
                n(u).children(t.listType).children("li").each(function() {
                    right = f(n(this), e, right)
                }),
                e--),
                id = n(u).attr("id").match(t.expression || /(.+)[-=_](.+)/),
                e === i + 1 ? pid = "root" : (parentItem = n(u).parent(t.listType).parent("li").attr("id").match(t.expression || /(.+)[-=_](.+)/),
                pid = parentItem[2]),
                r.push({
                    item_id: id[2],
                    parent_id: pid,
                    depth: e,
                    left: o,
                    right: right
                }),
                right + 1
            }
            t = t || {};
            var i = t.startDepthCount || 0
              , r = []
              , u = 2;
            return r.push({
                item_id: "root",
                parent_id: "none",
                depth: i,
                left: "1",
                right: (n("li", this.element).length + 1) * 2
            }),
            n(this.element).children("li").each(function() {
                u = f(n(this), i + 1, u)
            }),
            r
        },
        _createPlaceholder: function(t) {
            var i = t || this, r = i.options, u;
            r.placeholder && r.placeholder.constructor != String || (u = r.placeholder,
            r.placeholder = {
                element: function() {
                    var t = n(document.createElement(i.currentItem[0].nodeName)).addClass(u || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                    return u || (t.style.visibility = "hidden"),
                    t
                },
                update: function(n, t) {
                    (!u || r.forcePlaceholderSize) && (t.height() && t.css("height") != "auto" || t.height(i.currentItem.height()),
                    t.width() || t.width(i.currentItem.width()))
                }
            });
            i.placeholder = n(r.placeholder.element.call(i.element, i.currentItem));
            i.currentItem.after(i.placeholder);
            r.placeholder.update(i, i.placeholder)
        },
        _clear: function() {
            var t, i;
            for (n.ui.sortable.prototype._clear.apply(this, arguments),
            t = this.items.length - 1; t >= 0; t--)
                i = this.items[t].item[0],
                this._clearEmpty(i);
            return !0
        },
        _clearEmpty: function(n) {
            n.children[1] && n.children[1].children.length == 0 && n.removeChild(n.children[1])
        }
    }));
    n.ui.nestedSortable.prototype.options = n.extend({}, n.ui.sortable.prototype.options, n.ui.nestedSortable.prototype.options)
}(jQuery),
function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) {
                t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
                return
            }
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"),
            i = new n.validator(t,this[0]),
            n.data(this[0], "validator", i),
            i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(t.target).hasClass("cancel") && (i.cancelSubmit = !0)
            }),
            this.submit(function(t) {
                function r() {
                    var r;
                    return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm)),
                    i.settings.submitHandler.call(i, i.currentForm, t),
                    i.submitButton && r.remove(),
                    !1) : !0
                }
                return (i.settings.debug && t.preventDefault(),
                i.cancelSubmit) ? (i.cancelSubmit = !1,
                r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                !1) : r() : (i.focusInvalid(),
                !1)
            })),
            i)
        },
        valid: function() {
            if (n(this[0]).is("form"))
                return this.validate().form();
            var t = !0
              , i = n(this[0].form).validate();
            return this.each(function() {
                t &= i.element(this)
            }),
            t
        },
        removeAttrs: function(t) {
            var i = {}
              , r = this;
            return n.each(t.split(/\s/), function(n, t) {
                i[t] = r.attr(t);
                r.removeAttr(t)
            }),
            i
        },
        rules: function(t, i) {
            var r = this[0], o, u, h;
            if (t) {
                var e = n.data(r.form, "validator").settings
                  , s = e.rules
                  , f = n.validator.staticRules(r);
                switch (t) {
                case "add":
                    n.extend(f, n.validator.normalizeRule(i));
                    s[r.name] = f;
                    i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                    break;
                case "remove":
                    return i ? (o = {},
                    n.each(i.split(/\s/), function(n, t) {
                        o[t] = f[t];
                        delete f[t]
                    }),
                    o) : (delete s[r.name],
                    f)
                }
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.metadataRules(r), n.validator.classRules(r), n.validator.attributeRules(r), n.validator.staticRules(r)), r),
            u.required && (h = u.required,
            delete u.required,
            u = n.extend({
                required: h
            }, u)),
            u
        }
    });
    n.extend(n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + t.value)
        },
        filled: function(t) {
            return !!n.trim("" + t.value)
        },
        unchecked: function(n) {
            return !n.checked
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    }
    ;
    n.validator.format = function(t, i) {
        return arguments.length === 1 ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t),
            n.validator.format.apply(this, i)
        }
        : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)),
        i.constructor !== Array && (i = [i]),
        n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}","g"), i)
        }),
        t)
    }
    ;
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass),
                this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(n, t) {
                (t.which !== 9 || this.elementValue(n) !== "") && (n.name in this.submitted || n === this.lastActive) && this.element(n)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function r(t) {
                    var i = n.data(this[0].form, "validator")
                      , r = "on" + t.type.replace(/^validate/, "");
                    i !== undefined && i.settings[r] && i.settings[r].call(i, this[0], t)
                }
                var i, t;
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                i = this.groups = {};
                n.each(this.settings.groups, function(t, r) {
                    n.each(r.split(/\s/), function(n, r) {
                        i[r] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout", r).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", r);
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                n.extend(this.submitted, this.errorMap),
                this.invalid = n.extend({}, this.errorMap),
                this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++)
                    this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                t = this.validationTargetFor(this.clean(t));
                this.lastElement = t;
                this.prepareElement(t);
                this.currentElements = n(t);
                var i = this.check(t) !== !1;
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                i
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t)
                        this.errorList.push({
                            message: t[i],
                            element: this.findByName(i)[0]
                        });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t = 0;
                for (var i in n)
                    t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length === 1 && t
            },
            elements: function() {
                var t = this
                  , i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return (!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in i || !t.objectLength(n(this).rules())) ? !1 : (i[this.name] = !0,
                    !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.replace(" ", ".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var r = n(t).attr("type")
                  , i = n(t).val();
                return r === "radio" || r === "checkbox" ? n('input[name="' + n(t).attr("name") + '"]:checked').val() : typeof i == "string" ? i.replace(/\r/g, "") : i
            },
            check: function(t) {
                var r, u;
                t = this.validationTargetFor(this.clean(t));
                var f = n(t).rules(), e = !1, s = this.elementValue(t), i;
                for (r in f) {
                    u = {
                        method: r,
                        parameters: f[r]
                    };
                    try {
                        if (i = n.validator.methods[r].call(this, s, t, u.parameters),
                        i === "dependency-mismatch") {
                            e = !0;
                            continue
                        }
                        if (e = !1,
                        i === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(t));
                            return
                        }
                        if (!i)
                            return this.formatAndAdd(t, u),
                            !1
                    } catch (o) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + u.method + "' method", o);
                        throw o;
                    }
                }
                if (!e)
                    return this.objectLength(f) && this.successList.push(t),
                    !0
            },
            customMetaMessage: function(t, i) {
                if (n.metadata) {
                    var r = this.settings.meta ? n(t).metadata()[this.settings.meta] : n(t).metadata();
                    return r && r.messages && r.messages[i]
                }
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg-" + i.toLowerCase()) || t.attributes && n(t).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (arguments[n] !== undefined)
                        return arguments[n];
                return undefined
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), this.customMetaMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function(t, i) {
                var r = this.defaultMessage(t, i.method)
                  , u = /\$?\{(\d+)\}/g;
                typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({
                    message: r,
                    element: t
                });
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))),
                n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++)
                    t = this.errorList[n],
                    this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (n = 0; this.successList[n]; n++)
                        this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0,
                    i = this.validElements(); i[n]; n++)
                        this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                r.attr("generated") && r.html(i)) : (r = n("<" + this.settings.errorElement + "/>").attr({
                    "for": this.idOrName(t),
                    generated: !0
                }).addClass(this.settings.errorClass).html(i || ""),
                this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t)));
                !i && this.settings.success && (r.text(""),
                typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var i = this.idOrName(t);
                return this.errors().filter(function() {
                    return n(this).attr("for") === i
                })
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]),
                n
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find('[name="' + t + '"]')
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return n("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++,
                this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(),
                this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {}
              , r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(t) {
            var u = {}, f = n(t), r, i;
            for (r in n.validator.methods)
                r === "required" ? (i = f.get(0).getAttribute(r),
                i === "" && (i = !0),
                i = !!i) : i = f.attr(r),
                i ? u[r] = i : f[0].getAttribute("type") === r && (u[r] = !0);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength,
            u
        },
        metadataRules: function(t) {
            if (!n.metadata)
                return {};
            var i = n.data(t.form, "validator").settings.meta;
            return i ? n(t).metadata()[i] : n(t).metadata()
        },
        staticRules: function(t) {
            var i = {}
              , r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1) {
                    delete t[r];
                    return
                }
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                    case "string":
                        f = !!n(u.depends, i.form).length;
                        break;
                    case "function":
                        f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
                }
            }),
            n.each(t, function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }),
            n.each(["minlength", "maxlength", "min", "max"], function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            n.each(["rangelength", "range"], function() {
                t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
            }),
            n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t.messages && delete t.messages,
            t
        },
        normalizeRule: function(t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i))
                    return "dependency-mismatch";
                if (i.nodeName.toLowerCase() === "select") {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            },
            remote: function(t, i, r) {
                var f, u, e;
                return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i),
                this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                f.originalMessage = this.settings.messages[i.name].remote,
                this.settings.messages[i.name].remote = f.message,
                r = typeof r == "string" && {
                    url: r
                } || r,
                this.pending[i.name]) ? "pending" : f.old === t ? f.valid : (f.old = t,
                u = this,
                this.startRequest(i),
                e = {},
                e[i.name] = t,
                n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    success: function(r) {
                        var e, h, s, o;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        e = r === !0 || r === "true";
                        e ? (h = u.formSubmitted,
                        u.prepareElement(i),
                        u.formSubmitted = h,
                        u.successList.push(i),
                        delete u.invalid[i.name],
                        u.showErrors()) : (s = {},
                        o = r || u.defaultMessage(i, "remote"),
                        s[i.name] = f.message = n.isFunction(o) ? o(t) : o,
                        u.invalid[i.name] = !0,
                        u.showErrors(s));
                        f.valid = e;
                        u.stopRequest(i, e)
                    }
                }, r)),
                "pending")
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u <= r
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            email: function(n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n))
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                var r, e;
                if (this.optional(t))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n))
                    return !1;
                var f = 0
                  , i = 0
                  , u = !1;
                for (n = n.replace(/\D/g, ""),
                r = n.length - 1; r >= 0; r--)
                    e = n.charAt(r),
                    i = parseInt(e, 10),
                    u && (i *= 2) > 9 && (i -= 9),
                    f += i,
                    u = !u;
                return f % 10 == 0
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    n(i).valid()
                }),
                t === u.val()
            }
        }
    });
    n.format = n.validator.format
}(jQuery),
function(n) {
    var t = {}, i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        n.mode === "abort" && (t[u] && t[u].abort(),
        t[u] = r)
    }) : (i = n.ajax,
    n.ajax = function(r) {
        var f = ("mode"in r ? r : n.ajaxSettings).mode
          , u = ("port"in r ? r : n.ajaxSettings).port;
        return f === "abort" ? (t[u] && t[u].abort(),
        t[u] = i.apply(this, arguments)) : i.apply(this, arguments)
    }
    )
}(jQuery),
function(n) {
    jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, i) {
        function r(t) {
            return t = n.event.fix(t),
            t.type = i,
            n.event.handle.call(this, t)
        }
        n.event.special[i] = {
            setup: function() {
                this.addEventListener(t, r, !0)
            },
            teardown: function() {
                this.removeEventListener(t, r, !0)
            },
            handler: function(t) {
                var r = arguments;
                return r[0] = n.event.fix(t),
                r[0].type = i,
                n.event.handle.apply(this, r)
            }
        }
    });
    n.extend(n.fn, {
        validateDelegate: function(t, i, r) {
            return this.bind(i, function(i) {
                var u = n(i.target);
                if (u.is(t))
                    return r.apply(u, arguments)
            })
        }
    })
}(jQuery),
function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    function i(n) {
        return t.raw ? n : encodeURIComponent(n)
    }
    function f(n) {
        return t.raw ? n : decodeURIComponent(n)
    }
    function e(n) {
        return i(t.json ? JSON.stringify(n) : String(n))
    }
    function o(n) {
        n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return n = decodeURIComponent(n.replace(u, " ")),
            t.json ? JSON.parse(n) : n
        } catch (i) {}
    }
    function r(i, r) {
        var u = t.raw ? i : o(i);
        return n.isFunction(r) ? r(u) : u
    }
    var u = /\+/g
      , t = n.cookie = function(u, o, s) {
        var v, c;
        if (arguments.length > 1 && !n.isFunction(o))
            return s = n.extend({}, t.defaults, s),
            typeof s.expires == "number" && (v = s.expires,
            c = s.expires = new Date,
            c.setMilliseconds(c.getMilliseconds() + v * 864e5)),
            document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
        for (var l = u ? undefined : {}, y = document.cookie ? document.cookie.split("; ") : [], a = 0, b = y.length; a < b; a++) {
            var p = y[a].split("=")
              , w = f(p.shift())
              , h = p.join("=");
            if (u === w) {
                l = r(h, o);
                break
            }
            u || (h = r(h)) === undefined || (l[w] = h)
        }
        return l
    }
    ;
    t.defaults = {};
    n.removeCookie = function(t, i) {
        return n.cookie(t, "", n.extend({}, i, {
            expires: -1
        })),
        !n.cookie(t)
    }
}),
function(n) {
    n.fn.extend({
        autocomplete: function(t, i) {
            var r = typeof t == "string";
            return i = n.extend({}, n.Autocompleter.defaults, {
                url: r ? t : null,
                data: r ? null : t,
                delay: r ? n.Autocompleter.defaults.delay : 10,
                max: i && !i.scroll ? 10 : 150
            }, i),
            i.highlight = i.highlight || function(n) {
                return n
            }
            ,
            i.formatMatch = i.formatMatch || i.formatItem,
            this.each(function() {
                new n.Autocompleter(this,i)
            })
        },
        result: function(n) {
            return this.bind("result", n)
        },
        search: function(n) {
            return this.trigger("search", [n])
        },
        flushCache: function() {
            return this.trigger("flushCache")
        },
        setOptions: function(n) {
            return this.trigger("setOptions", [n])
        },
        unautocomplete: function() {
            return this.trigger("unautocomplete")
        },
        hideResults: function(t) {
            return n(this).trigger("hideResults"),
            this.bind("hideResults", t)
        }
    });
    n.Autocompleter = function(t, i) {
        function k() {
            var f = u.selected(), o, h;
            if (!f || f.data.Display != null && f.data.Display.indexOf("href='/search") != -1)
                return !1;
            if (o = f.result,
            e = o,
            i.multiple) {
                if (h = s(r.val()),
                h.length > 1) {
                    var v = i.multipleSeparator.length, y = n(t).selection().start, a, c = 0;
                    n.each(h, function(n, t) {
                        if (c += t.length,
                        y <= c)
                            return a = n,
                            !1;
                        c += v
                    });
                    h[a] = o;
                    o = h.join(i.multipleSeparator)
                }
                o += i.multipleSeparator
            }
            return r.val(o),
            l(),
            r.trigger("result", [f.data, f.value]),
            !0
        }
        function o(n, t) {
            if (y == f.DEL) {
                r.trigger("hideResults");
                return
            }
            var u = r.val();
            (t || u != e) && (e = u,
            u = v(u),
            u.length >= i.minChars ? (r.addClass(i.loadingClass),
            i.matchCase || (u = u.toLowerCase()),
            g(u, tt, l)) : (w(),
            r.trigger("hideResults")))
        }
        function s(t) {
            return t ? i.multiple ? n.map(t.split(i.multipleSeparator), function(i) {
                return n.trim(t).length ? n.trim(i) : null
            }) : [n.trim(t)] : [""]
        }
        function v(r) {
            var u, f;
            return i.multiple ? (u = s(r),
            u.length == 1) ? u[0] : (f = n(t).selection().start,
            u = f == r.length ? s(r) : s(r.replace(r.substring(f), "")),
            u[u.length - 1]) : r
        }
        function d(i, u, o) {
            o && v(r.val()).toLowerCase() == i.toLowerCase() && y != f.BACKSPACE && (r.val(r.val() + u.substring(v(e).length)),
            n(t).selection(e.length, e.length + u.length))
        }
        function nt() {
            clearTimeout(h);
            h = setTimeout(l, 200)
        }
        function l() {
            var n = u.visible();
            r.trigger("hideResults");
            clearTimeout(h);
            w();
            i.mustMatch && r.search(function(n) {
                if (!n)
                    if (i.multiple) {
                        var t = s(r.val()).slice(0, -1);
                        r.val(t.join(i.multipleSeparator) + (t.length ? i.multipleSeparator : ""))
                    } else
                        r.val(""),
                        r.trigger("result", null)
            })
        }
        function tt(n, t) {
            t && t.length && c ? (w(),
            u.display(t, n),
            r.attr("data-autocomplete-select") ? t.length == 1 && (d(n, t[0].result, !0),
            r.trigger("result", [t[0].data, t[0].value]),
            l()) : d(n, t[0].result, i.autoFill),
            u.show()) : l()
        }
        function g(r, f, e) {
            var o, s;
            i.matchCase || (r = r.toLowerCase());
            o = a.load(r);
            o && o.length ? f(r, o) : typeof i.url == "string" && i.url.length > 0 ? (s = {
                timestamp: +new Date
            },
            n.each(i.extraParams, function(n, t) {
                s[n] = typeof t == "function" ? t() : t
            }),
            n.ajax({
                mode: "abort",
                port: "autocomplete" + t.name,
                dataType: i.dataType,
                url: i.url,
                data: n.extend({
                    q: v(r),
                    limit: i.max
                }, s),
                beforeSend: function(n, t) {
                    i.beforeSend && i.beforeSend(n, t)
                },
                success: function(n) {
                    var t = i.parse && i.parse(n) || it(n);
                    a.add(r, t);
                    f(r, t)
                }
            })) : (u.emptyList(),
            e(r))
        }
        function it(t) {
            for (var r, u = [], e = t.split("\n"), f = 0; f < e.length; f++)
                r = n.trim(e[f]),
                r && (r = r.split("|"),
                u[u.length] = {
                    data: r,
                    value: r[0],
                    result: i.formatResult && i.formatResult(r, r[0]) || r[0]
                });
            return u
        }
        function w() {
            r.removeClass(i.loadingClass)
        }
        var f = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        }, r = n(t).attr("autocomplete", "off").addClass(i.inputClass), h, e = "", a = n.Autocompleter.Cache(i), c = 0, y, b = {
            mouseDownOnSelect: !1
        }, u = n.Autocompleter.Select(i, t, k, b), p;
        n.browser.opera && n(t.form).bind("submit.autocomplete", function() {
            if (p)
                return p = !1,
                !1
        });
        r.bind((n.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(t) {
            c = 1;
            y = t.keyCode;
            switch (t.keyCode) {
            case f.UP:
                t.preventDefault();
                u.visible() ? u.prev() : o(0, !0);
                break;
            case f.DOWN:
                t.preventDefault();
                u.visible() ? u.next() : o(0, !0);
                break;
            case f.PAGEUP:
                t.preventDefault();
                u.visible() ? u.pageUp() : o(0, !0);
                break;
            case f.PAGEDOWN:
                t.preventDefault();
                u.visible() ? u.pageDown() : o(0, !0);
                break;
            case i.multiple && n.trim(i.multipleSeparator) == "," && f.COMMA:
            case f.TAB:
            case f.RETURN:
                if (k())
                    return t.preventDefault(),
                    p = !0,
                    !1;
                break;
            case f.ESC:
                r.trigger("hideResults");
                break;
            default:
                clearTimeout(h);
                h = setTimeout(o, i.delay)
            }
        }).focus(function() {
            c++
        }).blur(function() {
            c = 0;
            b.mouseDownOnSelect || nt()
        }).click(function() {
            c++ > 1 && !u.visible() && o(0, !0)
        }).bind("search", function() {
            function i(n, i) {
                var u, f;
                if (i && i.length)
                    for (f = 0; f < i.length; f++)
                        if (i[f].result.toLowerCase() == n.toLowerCase()) {
                            u = i[f];
                            break
                        }
                typeof t == "function" ? t(u) : r.trigger("result", u && [u.data, u.value])
            }
            var t = arguments.length > 1 ? arguments[1] : null;
            n.each(s(r.val()), function(n, t) {
                g(t, i, i)
            })
        }).bind("flushCache", function() {
            a.flush()
        }).bind("setOptions", function() {
            n.extend(i, arguments[1]);
            "data"in arguments[1] && a.populate()
        }).bind("unautocomplete", function() {
            u.unbind();
            r.unbind();
            n(t.form).unbind(".autocomplete")
        }).bind("hideResults", function() {
            u.hide()
        })
    }
    ;
    n.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: !1,
        matchSubset: !0,
        matchContains: !1,
        cacheLength: 10,
        max: 100,
        mustMatch: !1,
        extraParams: {},
        selectFirst: !0,
        formatItem: function(n) {
            return n[0]
        },
        formatMatch: null,
        autoFill: !1,
        width: 0,
        multiple: !1,
        multipleSeparator: ", ",
        highlight: function(n, t) {
            return n.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)","gi"), "<strong>$1<\/strong>")
        },
        scroll: !0,
        scrollHeight: 180
    };
    n.Autocompleter.Cache = function(t) {
        function u(i, r) {
            t.matchCase || (i = n(i).toString().toLowerCase());
            var u = i.indexOf(r);
            return (t.matchContains == "word" && (u = i.toLowerCase().search("\\b" + r.toLowerCase())),
            u == -1) ? !1 : u == 0 || t.matchContains
        }
        function f(n, u) {
            r > t.cacheLength && o();
            i[n] || r++;
            i[n] = u
        }
        function e() {
            var r, h, u, c, i, e, o, s;
            if (!t.data)
                return !1;
            for (r = {},
            h = 0,
            t.url || (t.cacheLength = 1),
            r[""] = [],
            u = 0,
            c = t.data.length; u < c; u++)
                (i = t.data[u],
                i = typeof i == "string" ? [i] : i,
                e = t.formatMatch(i, u + 1, t.data.length),
                e !== !1) && (o = e.charAt(0).toLowerCase(),
                r[o] || (r[o] = []),
                s = {
                    value: e,
                    data: i,
                    result: t.formatResult && t.formatResult(i) || e
                },
                r[o].push(s),
                h++ < t.max && r[""].push(s));
            n.each(r, function(n, i) {
                t.cacheLength++;
                f(n, i)
            })
        }
        function o() {
            i = {};
            r = 0
        }
        var i = {}
          , r = 0;
        return setTimeout(e, 25),
        {
            flush: o,
            add: f,
            populate: e,
            load: function(f) {
                var h, s, o, e;
                if (!t.cacheLength || !r)
                    return null;
                if (!t.url && t.matchContains) {
                    e = [];
                    for (h in i)
                        h.length > 0 && (o = i[h],
                        n.each(o, function(n, t) {
                            u(t.value, f) && e.push(t)
                        }));
                    return e
                }
                if (i[f])
                    return i[f];
                if (t.matchSubset)
                    for (s = f.length - 1; s >= t.minChars; s--)
                        if (o = i[f.substr(0, s)],
                        o)
                            return e = [],
                            n.each(o, function(n, t) {
                                u(t.value, f) && (e[e.length] = t)
                            }),
                            e;
                return null
            }
        }
    }
    ;
    n.Autocompleter.Select = function(t, i, r, u) {
        function p() {
            y && (h = n("<div/>").hide().addClass(t.resultsClass).css("position", "absolute").appendTo(document.body),
            o = n("<ul/>").appendTo(h).mouseover(function(t) {
                a(t).nodeName && a(t).nodeName.toUpperCase() == "LI" && (e = n("li", o).removeClass(s.ACTIVE).index(a(t)),
                n(a(t)).addClass(s.ACTIVE))
            }).click(function(t) {
                return n(a(t)).addClass(s.ACTIVE),
                r() ? (i.focus(),
                !1) : void 0
            }).mousedown(function() {
                u.mouseDownOnSelect = !0
            }).mouseup(function() {
                u.mouseDownOnSelect = !1
            }),
            t.width > 0 && h.css("width", t.width),
            y = !1)
        }
        function a(n) {
            for (var t = n.target; t && t.tagName != "LI"; )
                t = t.parentNode;
            return t ? t : []
        }
        function l(n) {
            var r, i;
            f.slice(e, e + 1).removeClass(s.ACTIVE);
            w(n);
            r = f.slice(e, e + 1).addClass(s.ACTIVE);
            t.scroll && (i = 0,
            f.slice(0, e).each(function() {
                i += this.offsetHeight
            }),
            i + r[0].offsetHeight - o.scrollTop() > o[0].clientHeight ? o.scrollTop(i + r[0].offsetHeight - o.innerHeight()) : i < o.scrollTop() && o.scrollTop(i))
        }
        function w(n) {
            e += n;
            e < 0 ? e = f.size() - 1 : e >= f.size() && (e = 0)
        }
        function b(n) {
            return t.max && t.max < n ? t.max : n
        }
        function k() {
            var r, i, u, h;
            for (o.empty(),
            r = b(c.length),
            i = 0; i < r; i++)
                c[i] && (u = t.formatItem(c[i].data, i + 1, r, c[i].value, v),
                u !== !1) && (h = n("<li/>").html(t.highlight(u, v)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(o)[0],
                n.data(h, "ac_data", c[i]));
            f = o.find("li");
            t.selectFirst && (f.slice(0, 1).addClass(s.ACTIVE),
            e = 0);
            n.fn.bgiframe && o.bgiframe()
        }
        var s = {
            ACTIVE: "ac_over"
        }, f, e = -1, c, v = "", y = !0, h, o;
        return {
            display: function(n, t) {
                p();
                c = n;
                v = t;
                k()
            },
            next: function() {
                l(1)
            },
            prev: function() {
                l(-1)
            },
            pageUp: function() {
                e != 0 && e - 8 < 0 ? l(-e) : l(-8)
            },
            pageDown: function() {
                e != f.size() - 1 && e + 8 > f.size() ? l(f.size() - 1 - e) : l(8)
            },
            hide: function() {
                h && h.hide();
                f && f.removeClass(s.ACTIVE);
                e = -1
            },
            visible: function() {
                return h && h.is(":visible")
            },
            current: function() {
                return this.visible() && (f.filter("." + s.ACTIVE)[0] || t.selectFirst && f[0])
            },
            show: function() {
                var e = n(i).offset(), r, u;
                h.css({
                    width: typeof t.width == "string" || t.width > 0 ? t.width : n(i).width(),
                    top: e.top + i.offsetHeight,
                    left: e.left
                }).show();
                t.scroll && (o.scrollTop(0),
                o.css({
                    maxHeight: t.scrollHeight,
                    overflow: "auto"
                }),
                n.browser.msie && typeof document.body.style.maxHeight == "undefined" && (r = 0,
                f.each(function() {
                    r += this.offsetHeight
                }),
                u = r > t.scrollHeight,
                o.css("height", u ? t.scrollHeight : r),
                u || f.width(o.width() - parseInt(f.css("padding-left")) - parseInt(f.css("padding-right")))))
            },
            selected: function() {
                var t = f && f.filter("." + s.ACTIVE).removeClass(s.ACTIVE);
                return t && t.length && n.data(t[0], "ac_data")
            },
            emptyList: function() {
                o && o.empty()
            },
            unbind: function() {
                h && h.remove()
            }
        }
    }
    ;
    n.fn.selection = function(n, t) {
        var i, r;
        if (n !== undefined)
            return this.each(function() {
                if (this.createTextRange) {
                    var i = this.createTextRange();
                    t === undefined || n == t ? (i.move("character", n),
                    i.select()) : (i.collapse(!0),
                    i.moveStart("character", n),
                    i.moveEnd("character", t),
                    i.select())
                } else
                    this.setSelectionRange ? this.setSelectionRange(n, t) : this.selectionStart && (this.selectionStart = n,
                    this.selectionEnd = t)
            });
        if (i = this[0],
        i.createTextRange) {
            var u = document.selection.createRange()
              , o = i.value
              , f = "<->"
              , e = u.text.length;
            return u.text = f,
            r = i.value.indexOf(f),
            i.value = o,
            this.selection(r, r + e),
            {
                start: r,
                end: r + e
            }
        }
        if (i.selectionStart !== undefined)
            return {
                start: i.selectionStart,
                end: i.selectionEnd
            }
    }
}(jQuery),
function(n) {
    "use strict";
    function r(t) {
        var i = t.data;
        t.isDefaultPrevented() || (t.preventDefault(),
        n(this).ajaxSubmit(i))
    }
    function u(t) {
        var r = t.target, u = n(r), f, i, e;
        if (!u.is(":submit,input:image")) {
            if (f = u.closest(":submit"),
            f.length === 0)
                return;
            r = f[0]
        }
        i = this;
        i.clk = r;
        r.type == "image" && (t.offsetX !== undefined ? (i.clk_x = t.offsetX,
        i.clk_y = t.offsetY) : typeof n.fn.offset == "function" ? (e = u.offset(),
        i.clk_x = t.pageX - e.left,
        i.clk_y = t.pageY - e.top) : (i.clk_x = t.pageX - r.offsetLeft,
        i.clk_y = t.pageY - r.offsetTop));
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }
    function t() {
        if (n.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var i = {};
    i.fileapi = n("<input type='file'/>").get(0).files !== undefined;
    i.formdata = window.FormData !== undefined;
    n.fn.ajaxSubmit = function(r) {
        function rt(t) {
            for (var f, i, o, e = new FormData, u = 0; u < t.length; u++)
                e.append(t[u].name, t[u].value);
            if (r.extraData)
                for (f in r.extraData)
                    r.extraData.hasOwnProperty(f) && e.append(f, r.extraData[f]);
            r.data = null;
            i = n.extend(!0, {}, n.ajaxSettings, r, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: "POST"
            });
            r.uploadProgress && (i.xhr = function() {
                var n = jQuery.ajaxSettings.xhr();
                return n.upload && (n.upload.onprogress = function(n) {
                    var t = 0
                      , i = n.loaded || n.position
                      , u = n.total;
                    n.lengthComputable && (t = Math.ceil(i / u * 100));
                    r.uploadProgress(n, i, u, t)
                }
                ),
                n
            }
            );
            i.data = null;
            o = i.beforeSend;
            i.beforeSend = function(n, t) {
                t.data = e;
                o && o.call(t, n, r)
            }
            ;
            n.ajax(i)
        }
        function tt(i) {
            function ft(n) {
                return n.contentWindow ? n.contentWindow.document : n.contentDocument ? n.contentDocument : n.document
            }
            function et() {
                function s() {
                    try {
                        var n = ft(a).readyState;
                        t("state = " + n);
                        n && n.toLowerCase() == "uninitialized" && setTimeout(s, 50)
                    } catch (i) {
                        t("Server abort: ", i, " (", i.name, ")");
                        p(g);
                        k && clearTimeout(k);
                        k = undefined
                    }
                }
                var e = u.attr("target"), o = u.attr("action"), r, i;
                h.setAttribute("target", b);
                c || h.setAttribute("method", "POST");
                o != f.url && h.setAttribute("action", f.url);
                f.skipEncodingOverride || c && !/post/i.test(c) || u.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                });
                f.timeout && (k = setTimeout(function() {
                    tt = !0;
                    p(it)
                }, f.timeout));
                r = [];
                try {
                    if (f.extraData)
                        for (i in f.extraData)
                            f.extraData.hasOwnProperty(i) && r.push(n('<input type="hidden" name="' + i + '">').attr("value", f.extraData[i]).appendTo(h)[0]);
                    f.iframeTarget || (l.appendTo("body"),
                    a.attachEvent ? a.attachEvent("onload", p) : a.addEventListener("load", p, !1));
                    setTimeout(s, 15);
                    h.submit()
                } finally {
                    h.setAttribute("action", o);
                    e ? h.setAttribute("target", e) : u.removeAttr("target");
                    n(r).remove()
                }
            }
            function p(i) {
                var r, u, w, s, b, d, h, c, y;
                if (!e.aborted && !ht) {
                    try {
                        o = ft(a)
                    } catch (nt) {
                        t("cannot access response document: ", nt);
                        i = g
                    }
                    if (i === it && e) {
                        e.abort("timeout");
                        return
                    }
                    if (i == g && e) {
                        e.abort("server abort");
                        return
                    }
                    if (o && o.location.href != f.iframeSrc || tt) {
                        a.detachEvent ? a.detachEvent("onload", p) : a.removeEventListener("load", p, !1);
                        r = "success";
                        try {
                            if (tt)
                                throw "timeout";
                            if (w = f.dataType == "xml" || o.XMLDocument || n.isXMLDoc(o),
                            t("isXml=" + w),
                            !w && window.opera && (o.body === null || !o.body.innerHTML) && --st) {
                                t("requeing onLoad callback, DOM not available");
                                setTimeout(p, 250);
                                return
                            }
                            s = o.body ? o.body : o.documentElement;
                            e.responseText = s ? s.innerHTML : null;
                            e.responseXML = o.XMLDocument ? o.XMLDocument : o;
                            w && (f.dataType = "xml");
                            e.getResponseHeader = function(n) {
                                var t = {
                                    "content-type": f.dataType
                                };
                                return t[n]
                            }
                            ;
                            s && (e.status = Number(s.getAttribute("status")) || e.status,
                            e.statusText = s.getAttribute("statusText") || e.statusText);
                            b = (f.dataType || "").toLowerCase();
                            d = /(json|script|text)/.test(b);
                            d || f.textarea ? (h = o.getElementsByTagName("textarea")[0],
                            h ? (e.responseText = h.value,
                            e.status = Number(h.getAttribute("status")) || e.status,
                            e.statusText = h.getAttribute("statusText") || e.statusText) : d && (c = o.getElementsByTagName("pre")[0],
                            y = o.getElementsByTagName("body")[0],
                            c ? e.responseText = c.textContent ? c.textContent : c.innerText : y && (e.responseText = y.textContent ? y.textContent : y.innerText))) : b == "xml" && !e.responseXML && e.responseText && (e.responseXML = lt(e.responseText));
                            try {
                                ot = vt(e, b, f)
                            } catch (i) {
                                r = "parsererror";
                                e.error = u = i || r
                            }
                        } catch (i) {
                            t("error caught: ", i);
                            r = "error";
                            e.error = u = i || r
                        }
                        e.aborted && (t("upload aborted"),
                        r = null);
                        e.status && (r = e.status >= 200 && e.status < 300 || e.status === 304 ? "success" : "error");
                        r === "success" ? (f.success && f.success.call(f.context, ot, "success", e),
                        v && n.event.trigger("ajaxSuccess", [e, f])) : r && (u === undefined && (u = e.statusText),
                        f.error && f.error.call(f.context, e, r, u),
                        v && n.event.trigger("ajaxError", [e, f, u]));
                        v && n.event.trigger("ajaxComplete", [e, f]);
                        v && !--n.active && n.event.trigger("ajaxStop");
                        f.complete && f.complete.call(f.context, e, r);
                        ht = !0;
                        f.timeout && clearTimeout(k);
                        setTimeout(function() {
                            f.iframeTarget || l.remove();
                            e.responseXML = null
                        }, 100)
                    }
                }
            }
            var h = u[0], nt, d, f, v, b, l, a, e, w, y, tt, k, ct = !!n.fn.prop, it, g, rt, ut, ot, o, st, ht;
            if (n(":input[name=submit],:input[id=submit]", h).length) {
                alert('Error: Form elements must not have name or id of "submit".');
                return
            }
            if (i)
                for (d = 0; d < s.length; d++)
                    nt = n(s[d]),
                    ct ? nt.prop("disabled", !1) : nt.removeAttr("disabled");
            if (f = n.extend(!0, {}, n.ajaxSettings, r),
            f.context = f.context || f,
            b = "jqFormIO" + (new Date).getTime(),
            f.iframeTarget ? (l = n(f.iframeTarget),
            y = l.attr("name"),
            y ? b = y : l.attr("name", b)) : (l = n('<iframe name="' + b + '" src="' + f.iframeSrc + '" />'),
            l.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })),
            a = l[0],
            e = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(i) {
                    var r = i === "timeout" ? "timeout" : "aborted";
                    t("aborting upload... " + r);
                    this.aborted = 1;
                    l.attr("src", f.iframeSrc);
                    e.error = r;
                    f.error && f.error.call(f.context, e, r, i);
                    v && n.event.trigger("ajaxError", [e, f, r]);
                    f.complete && f.complete.call(f.context, e, r)
                }
            },
            v = f.global,
            v && 0 == n.active++ && n.event.trigger("ajaxStart"),
            v && n.event.trigger("ajaxSend", [e, f]),
            f.beforeSend && f.beforeSend.call(f.context, e, f) === !1) {
                f.global && n.active--;
                return
            }
            if (!e.aborted) {
                w = h.clk;
                w && (y = w.name,
                y && !w.disabled && (f.extraData = f.extraData || {},
                f.extraData[y] = w.value,
                w.type == "image" && (f.extraData[y + ".x"] = h.clk_x,
                f.extraData[y + ".y"] = h.clk_y)));
                it = 1;
                g = 2;
                rt = n("meta[name=csrf-token]").attr("content");
                ut = n("meta[name=csrf-param]").attr("content");
                ut && rt && (f.extraData = f.extraData || {},
                f.extraData[ut] = rt);
                f.forceSync ? et() : setTimeout(et, 10);
                st = 50;
                var lt = n.parseXML || function(n, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"),
                    t.async = "false",
                    t.loadXML(n)) : t = (new DOMParser).parseFromString(n, "text/xml"),
                    t && t.documentElement && t.documentElement.nodeName != "parsererror" ? t : null
                }
                  , at = n.parseJSON || function(s) {
                    return window.eval("(" + s + ")")
                }
                  , vt = function(t, i, r) {
                    var f = t.getResponseHeader("content-type") || ""
                      , e = i === "xml" || !i && f.indexOf("xml") >= 0
                      , u = e ? t.responseXML : t.responseText;
                    return e && u.documentElement.nodeName === "parsererror" && n.error && n.error("parsererror"),
                    r && r.dataFilter && (u = r.dataFilter(u, i)),
                    typeof u == "string" && (i === "json" || !i && f.indexOf("json") >= 0 ? u = at(u) : (i === "script" || !i && f.indexOf("javascript") >= 0) && n.globalEval(u)),
                    u
                }
            }
        }
        var c, p, f, u, l, a, s, v, e, h, o, b, nt, y;
        if (!this.length)
            return t("ajaxSubmit: skipping submit process - no element selected"),
            this;
        if (u = this,
        typeof r == "function" && (r = {
            success: r
        }),
        c = this.attr("method"),
        p = this.attr("action"),
        f = typeof p == "string" ? n.trim(p) : "",
        f = f || window.location.href || "",
        f && (f = (f.match(/^([^#]+)/) || [])[1]),
        r = n.extend(!0, {
            url: f,
            success: n.ajaxSettings.success,
            type: c || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, r),
        l = {},
        this.trigger("form-pre-serialize", [this, r, l]),
        l.veto)
            return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
            this;
        if (r.beforeSerialize && r.beforeSerialize(this, r) === !1)
            return t("ajaxSubmit: submit aborted via beforeSerialize callback"),
            this;
        if (a = r.traditional,
        a === undefined && (a = n.ajaxSettings.traditional),
        s = [],
        e = this.formToArray(r.semantic, s),
        r.data && (r.extraData = r.data,
        v = n.param(r.data, a)),
        r.beforeSubmit && r.beforeSubmit(e, this, r) === !1)
            return t("ajaxSubmit: submit aborted via beforeSubmit callback"),
            this;
        if (this.trigger("form-submit-validate", [e, this, r, l]),
        l.veto)
            return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
            this;
        h = n.param(e, a);
        v && (h = h ? h + "&" + v : v);
        r.type.toUpperCase() == "GET" ? (r.url += (r.url.indexOf("?") >= 0 ? "&" : "?") + h,
        r.data = null) : r.data = h;
        o = [];
        r.resetForm && o.push(function() {
            u.resetForm()
        });
        r.clearForm && o.push(function() {
            u.clearForm(r.includeHidden)
        });
        !r.dataType && r.target ? (b = r.success || function() {}
        ,
        o.push(function(t) {
            var i = r.replaceTarget ? "replaceWith" : "html";
            n(r.target)[i](t).each(b, arguments)
        })) : r.success && o.push(r.success);
        r.success = function(n, t, i) {
            for (var e = r.context || r, f = 0, s = o.length; f < s; f++)
                o[f].apply(e, [n, t, i || u, u])
        }
        ;
        var it = n("input:file:enabled[value]", this)
          , k = it.length > 0
          , d = "multipart/form-data"
          , g = u.attr("enctype") == d || u.attr("encoding") == d
          , w = i.fileapi && i.formdata;
        for (t("fileAPI :" + w),
        nt = (k || g) && !w,
        r.iframe !== !1 && (r.iframe || nt) ? r.closeKeepAlive ? n.get(r.closeKeepAlive, function() {
            tt(e)
        }) : tt(e) : (k || g) && w ? rt(e) : n.ajax(r),
        y = 0; y < s.length; y++)
            s[y] = null;
        return this.trigger("form-submit-notify", [this, r]),
        this
    }
    ;
    n.fn.ajaxForm = function(i) {
        if (i = i || {},
        i.delegation = i.delegation && n.isFunction(n.fn.on),
        !i.delegation && this.length === 0) {
            var f = {
                s: this.selector,
                c: this.context
            };
            return !n.isReady && f.s ? (t("DOM not ready, queuing ajaxForm"),
            n(function() {
                n(f.s, f.c).ajaxForm(i)
            }),
            this) : (t("terminating; zero elements found by selector" + (n.isReady ? "" : " (DOM not ready)")),
            this)
        }
        if (i.delegation) {
            n(document).off("submit.form-plugin", this.selector, r).off("click.form-plugin", this.selector, u).on("submit.form-plugin", this.selector, i, r).on("click.form-plugin", this.selector, i, u);
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", i, r).bind("click.form-plugin", i, u)
    }
    ;
    n.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }
    ;
    n.fn.formToArray = function(t, r) {
        var o = [], e, c, l, s, f, h, u, p, w, a, y, v;
        if (this.length === 0 || (e = this[0],
        c = t ? e.getElementsByTagName("*") : e.elements,
        !c))
            return o;
        for (l = 0,
        p = c.length; l < p; l++)
            if (u = c[l],
            f = u.name,
            f) {
                if (t && e.clk && u.type == "image") {
                    u.disabled || e.clk != u || (o.push({
                        name: f,
                        value: n(u).val(),
                        type: u.type
                    }),
                    o.push({
                        name: f + ".x",
                        value: e.clk_x
                    }, {
                        name: f + ".y",
                        value: e.clk_y
                    }));
                    continue
                }
                if (h = n.fieldValue(u, !0),
                h && h.constructor == Array)
                    for (r && r.push(u),
                    s = 0,
                    w = h.length; s < w; s++)
                        o.push({
                            name: f,
                            value: h[s]
                        });
                else if (i.fileapi && u.type == "file" && !u.disabled)
                    if (r && r.push(u),
                    a = u.files,
                    a.length)
                        for (s = 0; s < a.length; s++)
                            o.push({
                                name: f,
                                value: a[s],
                                type: u.type
                            });
                    else
                        o.push({
                            name: f,
                            value: "",
                            type: u.type
                        });
                else
                    h !== null && typeof h != "undefined" && (r && r.push(u),
                    o.push({
                        name: f,
                        value: h,
                        type: u.type,
                        required: u.required
                    }))
            }
        return !t && e.clk && (y = n(e.clk),
        v = y[0],
        f = v.name,
        f && !v.disabled && v.type == "image" && (o.push({
            name: f,
            value: y.val()
        }),
        o.push({
            name: f + ".x",
            value: e.clk_x
        }, {
            name: f + ".y",
            value: e.clk_y
        }))),
        o
    }
    ;
    n.fn.formSerialize = function(t) {
        return n.param(this.formToArray(t))
    }
    ;
    n.fn.fieldSerialize = function(t) {
        var i = [];
        return this.each(function() {
            var f = this.name, r, u, e;
            if (f)
                if (r = n.fieldValue(this, t),
                r && r.constructor == Array)
                    for (u = 0,
                    e = r.length; u < e; u++)
                        i.push({
                            name: f,
                            value: r[u]
                        });
                else
                    r !== null && typeof r != "undefined" && i.push({
                        name: this.name,
                        value: r
                    })
        }),
        n.param(i)
    }
    ;
    n.fn.fieldValue = function(t) {
        for (var f, i, r = [], u = 0, e = this.length; u < e; u++)
            (f = this[u],
            i = n.fieldValue(f, t),
            i !== null && typeof i != "undefined" && (i.constructor != Array || i.length)) && (i.constructor == Array ? n.merge(r, i) : r.push(i));
        return r
    }
    ;
    n.fieldValue = function(t, i) {
        var a = t.name, u = t.type, h = t.tagName.toLowerCase(), e, o, r, f;
        if (i === undefined && (i = !0),
        i && (!a || t.disabled || u == "reset" || u == "button" || (u == "checkbox" || u == "radio") && !t.checked || (u == "submit" || u == "image") && t.form && t.form.clk != t || h == "select" && t.selectedIndex == -1))
            return null;
        if (h == "select") {
            if (e = t.selectedIndex,
            e < 0)
                return null;
            var c = []
              , l = t.options
              , s = u == "select-one"
              , v = s ? e + 1 : l.length;
            for (o = s ? e : 0; o < v; o++)
                if (r = l[o],
                r.selected) {
                    if (f = r.value,
                    f || (f = r.attributes && r.attributes.value && !r.attributes.value.specified ? r.text : r.value),
                    s)
                        return f;
                    c.push(f)
                }
            return c
        }
        return n(t).val()
    }
    ;
    n.fn.clearForm = function(t) {
        return this.each(function() {
            n("input,select,textarea", this).clearFields(t)
        })
    }
    ;
    n.fn.clearFields = n.fn.clearInputs = function(t) {
        var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var r = this.type
              , u = this.tagName.toLowerCase();
            i.test(r) || u == "textarea" ? this.value = "" : r == "checkbox" || r == "radio" ? this.checked = !1 : u == "select" ? this.selectedIndex = -1 : t && (t === !0 && /hidden/.test(r) || typeof t == "string" && n(this).is(t)) && (this.value = "")
        })
    }
    ;
    n.fn.resetForm = function() {
        return this.each(function() {
            typeof this.reset != "function" && (typeof this.reset != "object" || this.reset.nodeType) || this.reset()
        })
    }
    ;
    n.fn.enable = function(n) {
        return n === undefined && (n = !0),
        this.each(function() {
            this.disabled = !n
        })
    }
    ;
    n.fn.selected = function(t) {
        return t === undefined && (t = !0),
        this.each(function() {
            var r = this.type, i;
            r == "checkbox" || r == "radio" ? this.checked = t : this.tagName.toLowerCase() == "option" && (i = n(this).parent("select"),
            t && i[0] && i[0].type == "select-one" && i.find("option").selected(!1),
            this.selected = t)
        })
    }
    ;
    n.fn.ajaxSubmit.debug = !1
}(jQuery),
function(n, t, i, r) {
    n.fn.caret = function(u, f) {
        var o, c, s = this[0], b = n.browser.msie, y, a, p, v, e, w, h, l, k;
        return typeof u == "object" && typeof u.start == "number" && typeof u.end == "number" ? (o = u.start,
        c = u.end) : typeof u == "number" && typeof f == "number" ? (o = u,
        c = f) : typeof u == "string" ? (o = s.value.indexOf(u)) > -1 ? c = o + u[t] : o = null : Object.prototype.toString.call(u) === "[object RegExp]" && (y = u.exec(s.value),
        y != null && (o = y.index,
        c = o + y[0][t])),
        typeof o != "undefined" ? (b ? (a = this[0].createTextRange(),
        a.collapse(!0),
        a.moveStart("character", o),
        a.moveEnd("character", c - o),
        a.select()) : (this[0].selectionStart = o,
        this[0].selectionEnd = c),
        this[0].focus(),
        this) : (b ? (p = document.selection,
        this[0].tagName.toLowerCase() != "textarea" ? (v = this.val(),
        e = p[i]()[r](),
        e.moveEnd("character", v[t]),
        h = e.text == "" ? v[t] : v.lastIndexOf(e.text),
        e = p[i]()[r](),
        e.moveStart("character", -v[t]),
        l = e.text[t]) : (e = p[i](),
        w = e[r](),
        w.moveToElementText(this[0]),
        w.setEndPoint("EndToEnd", e),
        h = w.text[t] - e.text[t],
        l = h + e.text[t])) : (h = s.selectionStart,
        l = s.selectionEnd),
        k = s.value.substring(h, l),
        {
            start: h,
            end: l,
            text: k,
            replace: function(n) {
                return s.value.substring(0, h) + n + s.value.substring(l, s.value[t])
            }
        })
    }
}(jQuery, "length", "createRange", "duplicate");
!function(n, t, i) {
    !function(n) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], n) : jQuery && !jQuery.fn.qtip && n(jQuery)
    }(function(r) {
        "use strict";
        function ui(n, t, i, f) {
            this.id = i;
            this.target = n;
            this.tooltip = s;
            this.elements = {
                target: n
            };
            this._id = o + "-" + i;
            this.timers = {
                img: {}
            };
            this.options = t;
            this.plugins = {};
            this.cache = {
                event: {},
                target: r(),
                disabled: u,
                attr: f,
                onTooltip: u,
                lastClass: ""
            };
            this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = u
        }
        function ft(n) {
            return n === s || "object" !== r.type(n)
        }
        function vi(n) {
            return !(r.isFunction(n) || n && n.attr || n.length || "object" === r.type(n) && (n.jquery || n.then))
        }
        function wt(n) {
            var t, e, i, o;
            return ft(n) ? u : (ft(n.metadata) && (n.metadata = {
                type: n.metadata
            }),
            "content"in n && (t = n.content,
            ft(t) || t.jquery || t.done ? (e = vi(t) ? u : t,
            t = n.content = {
                text: e
            }) : e = t.text,
            "ajax"in t && (i = t.ajax,
            o = i && i.once !== u,
            delete t.ajax,
            t.text = function(n, t) {
                var u = e || r(this).attr(t.options.content.attr) || "Loading..."
                  , f = r.ajax(r.extend({}, i, {
                    context: t
                })).then(i.success, s, i.error).then(function(n) {
                    return n && o && t.set("content.text", n),
                    n
                }, function(n, i, r) {
                    t.destroyed || 0 === n.status || t.set("content.text", i + ": " + r)
                });
                return o ? u : (t.set("content.text", u),
                f)
            }
            ),
            "title"in t && (r.isPlainObject(t.title) && (t.button = t.title.button,
            t.title = t.title.text),
            vi(t.title || u) && (t.title = u))),
            "position"in n && ft(n.position) && (n.position = {
                my: n.position,
                at: n.position
            }),
            "show"in n && ft(n.show) && (n.show = n.show.jquery ? {
                target: n.show
            } : n.show === f ? {
                ready: f
            } : {
                event: n.show
            }),
            "hide"in n && ft(n.hide) && (n.hide = n.hide.jquery ? {
                target: n.hide
            } : {
                event: n.hide
            }),
            "style"in n && ft(n.style) && (n.style = {
                classes: n.style
            }),
            r.each(h, function() {
                this.sanitize && this.sanitize(n)
            }),
            n)
        }
        function yi(n, t) {
            for (var u, f = 0, i = n, r = t.split("."); i = i[r[f++]]; )
                f < r.length && (u = i);
            return [u || n, r.pop()]
        }
        function cr(n, t) {
            var i, r, u;
            for (i in this.checks)
                if (this.checks.hasOwnProperty(i))
                    for (r in this.checks[i])
                        this.checks[i].hasOwnProperty(r) && (u = new RegExp(r,"i").exec(n)) && (t.push(u),
                        ("builtin" === i || this.plugins[i]) && this.checks[i][r].apply(this.plugins[i] || this, t))
        }
        function bt(n) {
            return wr.concat("").join(n ? "-" + n + " " : " ")
        }
        function kt(n, t) {
            return t > 0 ? setTimeout(r.proxy(n, this), t) : void n.call(this)
        }
        function lr(n) {
            this.tooltip.hasClass(a) || (clearTimeout(this.timers.show),
            clearTimeout(this.timers.hide),
            this.timers.show = kt.call(this, function() {
                this.toggle(f, n)
            }, this.options.show.delay))
        }
        function ar(n) {
            if (!this.tooltip.hasClass(a) && !this.destroyed) {
                var t = r(n.relatedTarget)
                  , i = t.closest(rt)[0] === this.tooltip[0]
                  , f = t[0] === this.options.show.target[0];
                if (clearTimeout(this.timers.show),
                clearTimeout(this.timers.hide),
                this !== t[0] && "mouse" === this.options.position.target && i || this.options.hide.fixed && /mouse(out|leave|move)/.test(n.type) && (i || f))
                    try {
                        n.preventDefault();
                        n.stopImmediatePropagation()
                    } catch (e) {}
                else
                    this.timers.hide = kt.call(this, function() {
                        this.toggle(u, n)
                    }, this.options.hide.delay, this)
            }
        }
        function fi(n) {
            !this.tooltip.hasClass(a) && this.options.hide.inactive && (clearTimeout(this.timers.inactive),
            this.timers.inactive = kt.call(this, function() {
                this.hide(n)
            }, this.options.hide.inactive))
        }
        function pi(n) {
            this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(n)
        }
        function wi(n, i, u) {
            r(t.body).delegate(n, (i.split ? i : i.join("." + o + " ")) + "." + o, function() {
                var n = c.api[r.attr(this, ni)];
                n && !n.disabled && u.apply(n, arguments)
            })
        }
        function vr(n, i, e) {
            var y, l, v, h, b, k = r(t.body), p = n[0] === t ? k : n, w = n.metadata ? n.metadata(e.metadata) : s, d = "html5" === e.metadata.type && w ? w[e.metadata.name] : s, a = n.data(e.metadata.name || "qtipopts");
            try {
                a = "string" == typeof a ? r.parseJSON(a) : a
            } catch (g) {}
            if (h = r.extend(f, {}, c.defaults, e, "object" == typeof a ? wt(a) : s, wt(d || w)),
            l = h.position,
            h.id = i,
            "boolean" == typeof h.content.text) {
                if (v = n.attr(h.content.attr),
                h.content.attr === u || !v)
                    return u;
                h.content.text = v
            }
            if (l.container.length || (l.container = k),
            l.target === u && (l.target = p),
            h.show.target === u && (h.show.target = p),
            h.show.solo === f && (h.show.solo = l.container.closest("body")),
            h.hide.target === u && (h.hide.target = p),
            h.position.viewport === f && (h.position.viewport = l.container),
            l.container = l.container.eq(0),
            l.at = new tt(l.at,f),
            l.my = new tt(l.my),
            n.data(o))
                if (h.overwrite)
                    n.qtip("destroy", !0);
                else if (h.overwrite === u)
                    return u;
            return n.attr(ei, i),
            h.suppress && (b = n.attr("title")) && n.removeAttr("title").attr(ut, b).attr("title", ""),
            y = new ui(n,h,i,!!v),
            n.data(o, y),
            y
        }
        function at(n) {
            return n.charAt(0).toUpperCase() + n.slice(1)
        }
        function yr(n, t) {
            var r, u, f = t.charAt(0).toUpperCase() + t.slice(1), e = (t + " " + kr.join(f + " ") + f).split(" "), o = 0;
            if (li[t])
                return n.css(li[t]);
            for (; r = e[o++]; )
                if ((u = n.css(r)) !== i)
                    return li[t] = r,
                    u
        }
        function st(n, t) {
            return Math.ceil(parseFloat(yr(n, t)))
        }
        function bi(n, t) {
            this._ns = "tip";
            this.options = t;
            this.offset = t.offset;
            this.size = [t.width, t.height];
            this.qtip = n;
            this.init(n)
        }
        function ki(n, t) {
            this.options = t;
            this._ns = "-modal";
            this.qtip = n;
            this.init(n)
        }
        function di(n) {
            this._ns = "ie6";
            this.qtip = n;
            this.init(n)
        }
        var c, e, tt, dt, gt, f = !0, u = !1, s = null, w = "x", y = "y", d = "width", vt = "height", b = "top", p = "left", it = "bottom", k = "right", l = "center", pr = "flipinvert", et = "shift", h = {}, o = "qtip", ei = "data-hasqtip", ni = "data-qtip-id", wr = ["ui-widget", "ui-tooltip"], rt = "." + o, gi = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "), nr = o + "-fixed", oi = o + "-default", ht = o + "-focus", br = o + "-hover", a = o + "-disabled", ct = "_replacedByqTip", ut = "oldtitle", v = {
            ie: function() {
                for (var n = 4, i = t.createElement("div"); (i.innerHTML = "<!--[if gt IE " + n + "]><i><\/i><![endif]-->") && i.getElementsByTagName("i")[0]; n += 1)
                    ;
                return n > 4 ? n : NaN
            }(),
            iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || u
        }, tr, ir, yt, ai, g, ri, nt, sr, hr;
        e = ui.prototype;
        e._when = function(n) {
            return r.when.apply(r, n)
        }
        ;
        e.render = function(n) {
            if (this.rendered || this.destroyed)
                return this;
            var i = this
              , t = this.options
              , s = this.cache
              , y = this.elements
              , p = t.content.text
              , l = t.content.title
              , w = t.content.button
              , e = t.position
              , v = [];
            return r.attr(this.target[0], "aria-describedby", this._id),
            s.posClass = this._createPosClass((this.position = {
                my: e.my,
                at: e.at
            }).my),
            this.tooltip = y.tooltip = r("<div/>", {
                id: this._id,
                "class": [o, oi, t.style.classes, s.posClass].join(" "),
                width: t.style.width || "",
                height: t.style.height || "",
                tracking: "mouse" === e.target && e.adjust.mouse,
                role: "alert",
                "aria-live": "polite",
                "aria-atomic": u,
                "aria-describedby": this._id + "-content",
                "aria-hidden": f
            }).toggleClass(a, this.disabled).attr(ni, this.id).data(o, this).appendTo(e.container).append(y.content = r("<div />", {
                "class": o + "-content",
                id: this._id + "-content",
                "aria-atomic": f
            })),
            this.rendered = -1,
            this.positioning = f,
            l && (this._createTitle(),
            r.isFunction(l) || v.push(this._updateTitle(l, u))),
            w && this._createButton(),
            r.isFunction(p) || v.push(this._updateContent(p, u)),
            this.rendered = f,
            this._setWidget(),
            r.each(h, function(n) {
                var t;
                "render" === this.initialize && (t = this(i)) && (i.plugins[n] = t)
            }),
            this._unassignEvents(),
            this._assignEvents(),
            this._when(v).then(function() {
                i._trigger("render");
                i.positioning = u;
                i.hiddenDuringWait || !t.show.ready && !n || i.toggle(f, s.event, u);
                i.hiddenDuringWait = u
            }),
            c.api[this.id] = this,
            this
        }
        ;
        e.destroy = function(n) {
            function t() {
                if (!this.destroyed) {
                    this.destroyed = f;
                    var n, t = this.target, i = t.attr(ut);
                    this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove();
                    r.each(this.plugins, function() {
                        this.destroy && this.destroy()
                    });
                    for (n in this.timers)
                        this.timers.hasOwnProperty(n) && clearTimeout(this.timers[n]);
                    t.removeData(o).removeAttr(ni).removeAttr(ei).removeAttr("aria-describedby");
                    this.options.suppress && i && t.attr("title", i).removeAttr(ut);
                    this._unassignEvents();
                    this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = s;
                    delete c.api[this.id]
                }
            }
            return this.destroyed ? this.target : (n === f && "hide" !== this.triggering || !this.rendered ? t.call(this) : (this.tooltip.one("tooltiphidden", r.proxy(t, this)),
            !this.triggering && this.hide()),
            this.target)
        }
        ;
        dt = e.checks = {
            builtin: {
                "^id$": function(n, t, i, e) {
                    var s = i === f ? c.nextid : i
                      , h = o + "-" + s;
                    s !== u && s.length > 0 && !r("#" + h).length ? (this._id = h,
                    this.rendered && (this.tooltip[0].id = this._id,
                    this.elements.content[0].id = this._id + "-content",
                    this.elements.title[0].id = this._id + "-title")) : n[t] = e
                },
                "^prerender": function(n, t, i) {
                    i && !this.rendered && this.render(this.options.show.ready)
                },
                "^content.text$": function(n, t, i) {
                    this._updateContent(i)
                },
                "^content.attr$": function(n, t, i, r) {
                    this.options.content.text === this.target.attr(r) && this._updateContent(this.target.attr(i))
                },
                "^content.title$": function(n, t, i) {
                    return i ? (i && !this.elements.title && this._createTitle(),
                    void this._updateTitle(i)) : this._removeTitle()
                },
                "^content.button$": function(n, t, i) {
                    this._updateButton(i)
                },
                "^content.title.(text|button)$": function(n, t, i) {
                    this.set("content." + t, i)
                },
                "^position.(my|at)$": function(n, t, i) {
                    "string" == typeof i && (this.position[t] = n[t] = new tt(i,"at" === t))
                },
                "^position.container$": function(n, t, i) {
                    this.rendered && this.tooltip.appendTo(i)
                },
                "^show.ready$": function(n, t, i) {
                    i && (!this.rendered && this.render(f) || this.toggle(f))
                },
                "^style.classes$": function(n, t, i, r) {
                    this.rendered && this.tooltip.removeClass(r).addClass(i)
                },
                "^style.(width|height)": function(n, t, i) {
                    this.rendered && this.tooltip.css(t, i)
                },
                "^style.widget|content.title": function() {
                    this.rendered && this._setWidget()
                },
                "^style.def": function(n, t, i) {
                    this.rendered && this.tooltip.toggleClass(oi, !!i)
                },
                "^events.(render|show|move|hide|focus|blur)$": function(n, t, i) {
                    this.rendered && this.tooltip[(r.isFunction(i) ? "" : "un") + "bind"]("tooltip" + t, i)
                },
                "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                    if (this.rendered) {
                        var n = this.options.position;
                        this.tooltip.attr("tracking", "mouse" === n.target && n.adjust.mouse);
                        this._unassignEvents();
                        this._assignEvents()
                    }
                }
            }
        };
        e.get = function(n) {
            if (this.destroyed)
                return this;
            var i = yi(this.options, n.toLowerCase())
              , t = i[0][i[1]];
            return t.precedance ? t.string() : t
        }
        ;
        tr = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i;
        ir = /^prerender|show\.ready/i;
        e.set = function(n, t) {
            if (this.destroyed)
                return this;
            var o, h = this.rendered, i = u, e = this.options;
            return "string" == typeof n ? (o = n,
            n = {},
            n[o] = t) : n = r.extend({}, n),
            r.each(n, function(t, u) {
                if (h && ir.test(t))
                    return void delete n[t];
                var o, f = yi(e, t.toLowerCase());
                o = f[0][f[1]];
                f[0][f[1]] = u && u.nodeType ? r(u) : u;
                i = tr.test(t) || i;
                n[t] = [f[0], f[1], u, o]
            }),
            wt(e),
            this.positioning = f,
            r.each(n, r.proxy(cr, this)),
            this.positioning = u,
            this.rendered && this.tooltip[0].offsetWidth > 0 && i && this.reposition("mouse" === e.position.target ? s : this.cache.event),
            this
        }
        ;
        e._update = function(n, t) {
            var i = this
              , e = this.cache;
            return this.rendered && n ? (r.isFunction(n) && (n = n.call(this.elements.target, e.event, this) || ""),
            r.isFunction(n.then) ? (e.waiting = f,
            n.then(function(n) {
                return e.waiting = u,
                i._update(n, t)
            }, s, function(n) {
                return i._update(n, t)
            })) : n === u || !n && "" !== n ? u : (n.jquery && n.length > 0 ? t.empty().append(n.css({
                display: "block",
                visibility: "visible"
            })) : t.html(n),
            this._waitForContent(t).then(function(n) {
                i.rendered && i.tooltip[0].offsetWidth > 0 && i.reposition(e.event, !n.length)
            }))) : u
        }
        ;
        e._waitForContent = function(n) {
            var t = this.cache;
            return t.waiting = f,
            (r.fn.imagesLoaded ? n.imagesLoaded() : (new r.Deferred).resolve([])).done(function() {
                t.waiting = u
            }).promise()
        }
        ;
        e._updateContent = function(n, t) {
            this._update(n, this.elements.content, t)
        }
        ;
        e._updateTitle = function(n, t) {
            this._update(n, this.elements.title, t) === u && this._removeTitle(u)
        }
        ;
        e._createTitle = function() {
            var n = this.elements
              , t = this._id + "-title";
            n.titlebar && this._removeTitle();
            n.titlebar = r("<div />", {
                "class": o + "-titlebar " + (this.options.style.widget ? bt("header") : "")
            }).append(n.title = r("<div />", {
                id: t,
                "class": o + "-title",
                "aria-atomic": f
            })).insertBefore(n.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(n) {
                r(this).toggleClass("ui-state-active ui-state-focus", "down" === n.type.substr(-4))
            }).delegate(".qtip-close", "mouseover mouseout", function(n) {
                r(this).toggleClass("ui-state-hover", "mouseover" === n.type)
            });
            this.options.content.button && this._createButton()
        }
        ;
        e._removeTitle = function(n) {
            var t = this.elements;
            t.title && (t.titlebar.remove(),
            t.titlebar = t.title = t.button = s,
            n !== u && this.reposition())
        }
        ;
        e._createPosClass = function(n) {
            return o + "-pos-" + (n || this.options.position.my).abbrev()
        }
        ;
        e.reposition = function(i, e) {
            if (!this.rendered || this.positioning || this.destroyed)
                return this;
            this.positioning = f;
            var a, y, ut, ht, c = this.cache, d = this.tooltip, w = this.options.position, o = w.target, et = w.my, g = w.at, ot = w.viewport, ct = w.container, ft = w.adjust, vt = ft.method.split(" "), lt = d.outerWidth(u), at = d.outerHeight(u), nt = 0, tt = 0, yt = d.css("position"), s = {
                left: 0,
                top: 0
            }, wt = d[0].offsetWidth > 0, bt = i && "scroll" === i.type, st = r(n), pt = ct[0].ownerDocument, rt = this.mouse;
            if (r.isArray(o) && 2 === o.length)
                g = {
                    x: p,
                    y: b
                },
                s = {
                    left: o[0],
                    top: o[1]
                };
            else if ("mouse" === o)
                g = {
                    x: p,
                    y: b
                },
                (!ft.mouse || this.options.hide.distance) && c.origin && c.origin.pageX ? i = c.origin : !i || i && ("resize" === i.type || "scroll" === i.type) ? i = c.event : rt && rt.pageX && (i = rt),
                "static" !== yt && (s = ct.offset()),
                pt.body.offsetWidth !== (n.innerWidth || pt.documentElement.clientWidth) && (y = r(t.body).offset()),
                s = {
                    left: i.pageX - s.left + (y && y.left || 0),
                    top: i.pageY - s.top + (y && y.top || 0)
                },
                ft.mouse && bt && rt && (s.left -= (rt.scrollX || 0) - st.scrollLeft(),
                s.top -= (rt.scrollY || 0) - st.scrollTop());
            else {
                if ("event" === o ? i && i.target && "scroll" !== i.type && "resize" !== i.type ? c.target = r(i.target) : i.target || (c.target = this.elements.target) : "event" !== o && (c.target = r(o.jquery ? o : this.elements.target)),
                o = c.target,
                o = r(o).eq(0),
                0 === o.length)
                    return this;
                o[0] === t || o[0] === n ? (nt = v.iOS ? n.innerWidth : o.width(),
                tt = v.iOS ? n.innerHeight : o.height(),
                o[0] === n && (s = {
                    top: (ot || o).scrollTop(),
                    left: (ot || o).scrollLeft()
                })) : h.imagemap && o.is("area") ? a = h.imagemap(this, o, g, h.viewport ? vt : u) : h.svg && o && o[0].ownerSVGElement ? a = h.svg(this, o, g, h.viewport ? vt : u) : (nt = o.outerWidth(u),
                tt = o.outerHeight(u),
                s = o.offset());
                a && (nt = a.width,
                tt = a.height,
                y = a.offset,
                s = a.position);
                s = this.reposition.offset(o, s, ct);
                (v.iOS > 3.1 && v.iOS < 4.1 || v.iOS >= 4.3 && v.iOS < 4.33 || !v.iOS && "fixed" === yt) && (s.left -= st.scrollLeft(),
                s.top -= st.scrollTop());
                (!a || a && a.adjustable !== u) && (s.left += g.x === k ? nt : g.x === l ? nt / 2 : 0,
                s.top += g.y === it ? tt : g.y === l ? tt / 2 : 0)
            }
            return s.left += ft.x + (et.x === k ? -lt : et.x === l ? -lt / 2 : 0),
            s.top += ft.y + (et.y === it ? -at : et.y === l ? -at / 2 : 0),
            h.viewport ? (ut = s.adjusted = h.viewport(this, s, w, nt, tt, lt, at),
            y && ut.left && (s.left += y.left),
            y && ut.top && (s.top += y.top),
            ut.my && (this.position.my = ut.my)) : s.adjusted = {
                left: 0,
                top: 0
            },
            c.posClass !== (ht = this._createPosClass(this.position.my)) && (c.posClass = ht,
            d.removeClass(c.posClass).addClass(ht)),
            this._trigger("move", [s, ot.elem || ot], i) ? (delete s.adjusted,
            e === u || !wt || isNaN(s.left) || isNaN(s.top) || "mouse" === o || !r.isFunction(w.effect) ? d.css(s) : r.isFunction(w.effect) && (w.effect.call(d, this, r.extend({}, s)),
            d.queue(function(n) {
                r(this).css({
                    opacity: "",
                    height: ""
                });
                v.ie && this.style.removeAttribute("filter");
                n()
            })),
            this.positioning = u,
            this) : this
        }
        ;
        e.reposition.offset = function(n, i, u) {
            function s(n, t) {
                i.left += t * n.scrollLeft();
                i.top += t * n.scrollTop()
            }
            if (!u[0])
                return i;
            var o, h, e, c, l = r(n[0].ownerDocument), a = !!v.ie && "CSS1Compat" !== t.compatMode, f = u[0];
            do
                "static" !== (h = r.css(f, "position")) && ("fixed" === h ? (e = f.getBoundingClientRect(),
                s(l, -1)) : (e = r(f).position(),
                e.left += parseFloat(r.css(f, "borderLeftWidth")) || 0,
                e.top += parseFloat(r.css(f, "borderTopWidth")) || 0),
                i.left -= e.left + (parseFloat(r.css(f, "marginLeft")) || 0),
                i.top -= e.top + (parseFloat(r.css(f, "marginTop")) || 0),
                o || "hidden" === (c = r.css(f, "overflow")) || "visible" === c || (o = r(f)));
            while (f = f.offsetParent);
            return o && (o[0] !== l[0] || a) && s(o, 1),
            i
        }
        ;
        yt = (tt = e.reposition.Corner = function(n, t) {
            n = ("" + n).replace(/([A-Z])/, " $1").replace(/middle/gi, l).toLowerCase();
            this.x = (n.match(/left|right/i) || n.match(/center/) || ["inherit"])[0].toLowerCase();
            this.y = (n.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase();
            this.forceY = !!t;
            var i = n.charAt(0);
            this.precedance = "t" === i || "b" === i ? y : w
        }
        ).prototype;
        yt.invert = function(n, t) {
            this[n] = this[n] === p ? k : this[n] === k ? p : t || this[n]
        }
        ;
        yt.string = function(n) {
            var t = this.x
              , i = this.y
              , r = t !== i ? "center" === t || "center" !== i && (this.precedance === y || this.forceY) ? [i, t] : [t, i] : [t];
            return n !== !1 ? r.join(" ") : r
        }
        ;
        yt.abbrev = function() {
            var n = this.string(!1);
            return n[0].charAt(0) + (n[1] && n[1].charAt(0) || "")
        }
        ;
        yt.clone = function() {
            return new tt(this.string(),this.forceY)
        }
        ;
        e.toggle = function(n, i) {
            var c = this.cache
              , b = this.options
              , e = this.tooltip;
            if (i) {
                if (/over|enter/.test(i.type) && c.event && /out|leave/.test(c.event.type) && b.show.target.add(i.target).length === b.show.target.length && e.has(i.relatedTarget).length)
                    return this;
                c.event = r.event.fix(i)
            }
            if (this.waiting && !n && (this.hiddenDuringWait = f),
            !this.rendered)
                return n ? this.render(1) : this;
            if (this.destroyed || this.disabled)
                return this;
            var y, p, l, w = n ? "show" : "hide", h = this.options[w], k = this.options.position, a = this.options.content, d = this.tooltip.css("width"), g = this.tooltip.is(":visible"), nt = n || 1 === h.target.length, tt = !i || h.target.length < 2 || c.target[0] === i.target;
            return (typeof n).search("boolean|number") && (n = !g),
            y = !e.is(":animated") && g === n && tt,
            p = y ? s : !!this._trigger(w, [90]),
            this.destroyed ? this : (p !== u && n && this.focus(i),
            !p || y ? this : (r.attr(e[0], "aria-hidden", !n),
            n ? (this.mouse && (c.origin = r.event.fix(this.mouse)),
            r.isFunction(a.text) && this._updateContent(a.text, u),
            r.isFunction(a.title) && this._updateTitle(a.title, u),
            !gt && "mouse" === k.target && k.adjust.mouse && (r(t).bind("mousemove." + o, this._storeMouse),
            gt = f),
            d || e.css("width", e.outerWidth(u)),
            this.reposition(i, arguments[2]),
            d || e.css("width", ""),
            h.solo && ("string" == typeof h.solo ? r(h.solo) : r(rt, h.solo)).not(e).not(h.target).qtip("hide", new r.Event("tooltipsolo"))) : (clearTimeout(this.timers.show),
            delete c.origin,
            gt && !r(rt + '[tracking="true"]:visible', h.solo).not(e).length && (r(t).unbind("mousemove." + o),
            gt = u),
            this.blur(i)),
            l = r.proxy(function() {
                n ? (v.ie && e[0].style.removeAttribute("filter"),
                e.css("overflow", ""),
                "string" == typeof h.autofocus && r(this.options.show.autofocus, e).focus(),
                this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : e.css({
                    display: "",
                    visibility: "",
                    opacity: "",
                    left: "",
                    top: ""
                });
                this._trigger(n ? "visible" : "hidden")
            }, this),
            h.effect === u || nt === u ? (e[w](),
            l()) : r.isFunction(h.effect) ? (e.stop(1, 1),
            h.effect.call(e, this),
            e.queue("fx", function(n) {
                l();
                n()
            })) : e.fadeTo(90, n ? 1 : 0, l),
            n && h.target.trigger("qtip-" + this.id + "-inactive"),
            this))
        }
        ;
        e.show = function(n) {
            return this.toggle(f, n)
        }
        ;
        e.hide = function(n) {
            return this.toggle(u, n)
        }
        ;
        e.focus = function(n) {
            if (!this.rendered || this.destroyed)
                return this;
            var t = r(rt)
              , i = this.tooltip
              , f = parseInt(i[0].style.zIndex, 10)
              , u = c.zindex + t.length;
            return i.hasClass(ht) || this._trigger("focus", [u], n) && (f !== u && (t.each(function() {
                this.style.zIndex > f && (this.style.zIndex = this.style.zIndex - 1)
            }),
            t.filter("." + ht).qtip("blur", n)),
            i.addClass(ht)[0].style.zIndex = u),
            this
        }
        ;
        e.blur = function(n) {
            return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(ht),
            this._trigger("blur", [this.tooltip.css("zIndex")], n),
            this)
        }
        ;
        e.disable = function(n) {
            return this.destroyed ? this : ("toggle" === n ? n = !(this.rendered ? this.tooltip.hasClass(a) : this.disabled) : "boolean" != typeof n && (n = f),
            this.rendered && this.tooltip.toggleClass(a, n).attr("aria-disabled", n),
            this.disabled = !!n,
            this)
        }
        ;
        e.enable = function() {
            return this.disable(u)
        }
        ;
        e._createButton = function() {
            var e = this
              , n = this.elements
              , i = n.tooltip
              , t = this.options.content.button
              , s = "string" == typeof t
              , f = s ? t : "Close tooltip";
            n.button && n.button.remove();
            n.button = t.jquery ? t : r("<a />", {
                "class": "qtip-close " + (this.options.style.widget ? "" : o + "-icon"),
                title: f,
                "aria-label": f
            }).prepend(r("<span />", {
                "class": "ui-icon ui-icon-close",
                html: "&times;"
            }));
            n.button.appendTo(n.titlebar || i).attr("role", "button").click(function(n) {
                return i.hasClass(a) || e.hide(n),
                u
            })
        }
        ;
        e._updateButton = function(n) {
            if (!this.rendered)
                return u;
            var t = this.elements.button;
            n ? this._createButton() : t.remove()
        }
        ;
        e._setWidget = function() {
            var t = this.options.style.widget
              , n = this.elements
              , i = n.tooltip
              , r = i.hasClass(a);
            i.removeClass(a);
            a = t ? "ui-state-disabled" : "qtip-disabled";
            i.toggleClass(a, r);
            i.toggleClass("ui-helper-reset " + bt(), t).toggleClass(oi, this.options.style.def && !t);
            n.content && n.content.toggleClass(bt("content"), t);
            n.titlebar && n.titlebar.toggleClass(bt("header"), t);
            n.button && n.button.toggleClass(o + "-icon", !t)
        }
        ;
        e._storeMouse = function(n) {
            return (this.mouse = r.event.fix(n)).type = "mousemove",
            this
        }
        ;
        e._bind = function(n, t, i, u, f) {
            if (n && i && t.length) {
                var e = "." + this._id + (u ? "-" + u : "");
                return r(n).bind((t.split ? t : t.join(e + " ")) + e, r.proxy(i, f || this)),
                this
            }
        }
        ;
        e._unbind = function(n, t) {
            return n && r(n).unbind("." + this._id + (t ? "-" + t : "")),
            this
        }
        ;
        e._trigger = function(n, t, i) {
            var f = new r.Event("tooltip" + n);
            return f.originalEvent = i && r.extend({}, i) || this.cache.event || s,
            this.triggering = n,
            this.tooltip.trigger(f, [this].concat(t || [])),
            this.triggering = u,
            !f.isDefaultPrevented()
        }
        ;
        e._bindEvents = function(n, t, i, u, f, e) {
            var o = i.filter(u).add(u.filter(i))
              , s = [];
            o.length && (r.each(t, function(t, i) {
                var u = r.inArray(i, n);
                u > -1 && s.push(n.splice(u, 1)[0])
            }),
            s.length && (this._bind(o, s, function(n) {
                var t = this.rendered ? this.tooltip[0].offsetWidth > 0 : !1;
                (t ? e : f).call(this, n)
            }),
            i = i.not(o),
            u = u.not(o)));
            this._bind(i, n, f);
            this._bind(u, t, e)
        }
        ;
        e._assignInitialEvents = function(n) {
            function i(n) {
                return this.disabled || this.destroyed ? u : (this.cache.event = n && r.event.fix(n),
                this.cache.target = n && r(n.target),
                clearTimeout(this.timers.show),
                void (this.timers.show = kt.call(this, function() {
                    this.render("object" == typeof n || t.show.ready)
                }, t.prerender ? 0 : t.show.delay)))
            }
            var t = this.options
              , e = t.show.target
              , s = t.hide.target
              , h = t.show.event ? r.trim("" + t.show.event).split(" ") : []
              , o = t.hide.event ? r.trim("" + t.hide.event).split(" ") : [];
            this._bind(this.elements.target, ["remove", "removeqtip"], function() {
                this.destroy(!0)
            }, "destroy");
            /mouse(over|enter)/i.test(t.show.event) && !/mouse(out|leave)/i.test(t.hide.event) && o.push("mouseleave");
            this._bind(e, "mousemove", function(n) {
                this._storeMouse(n);
                this.cache.onTarget = f
            });
            this._bindEvents(h, o, e, s, i, function() {
                return this.timers ? void clearTimeout(this.timers.show) : u
            });
            (t.show.ready || t.prerender) && i.call(this, n)
        }
        ;
        e._assignEvents = function() {
            var y = this
              , i = this.options
              , f = i.position
              , e = this.tooltip
              , s = i.show.target
              , o = i.hide.target
              , p = f.container
              , h = f.viewport
              , l = r(t)
              , v = r(n)
              , w = i.show.event ? r.trim("" + i.show.event).split(" ") : []
              , b = i.hide.event ? r.trim("" + i.hide.event).split(" ") : [];
            r.each(i.events, function(n, t) {
                y._bind(e, "toggle" === n ? ["tooltipshow", "tooltiphide"] : ["tooltip" + n], t, null, e)
            });
            /mouse(out|leave)/i.test(i.hide.event) && "window" === i.hide.leave && this._bind(l, ["mouseout", "blur"], function(n) {
                /select|option/.test(n.target.nodeName) || n.relatedTarget || this.hide(n)
            });
            i.hide.fixed ? o = o.add(e.addClass(nr)) : /mouse(over|enter)/i.test(i.show.event) && this._bind(o, "mouseleave", function() {
                clearTimeout(this.timers.show)
            });
            ("" + i.hide.event).indexOf("unfocus") > -1 && this._bind(p.closest("html"), ["mousedown", "touchstart"], function(n) {
                var t = r(n.target)
                  , i = this.rendered && !this.tooltip.hasClass(a) && this.tooltip[0].offsetWidth > 0
                  , u = t.parents(rt).filter(this.tooltip[0]).length > 0;
                t[0] === this.target[0] || t[0] === this.tooltip[0] || u || this.target.has(t[0]).length || !i || this.hide(n)
            });
            "number" == typeof i.hide.inactive && (this._bind(s, "qtip-" + this.id + "-inactive", fi, "inactive"),
            this._bind(o.add(e), c.inactiveEvents, fi));
            this._bindEvents(w, b, s, o, lr, ar);
            this._bind(s.add(e), "mousemove", function(n) {
                if ("number" == typeof i.hide.distance) {
                    var t = this.cache.origin || {}
                      , r = this.options.hide.distance
                      , u = Math.abs;
                    (u(n.pageX - t.pageX) >= r || u(n.pageY - t.pageY) >= r) && this.hide(n)
                }
                this._storeMouse(n)
            });
            "mouse" === f.target && f.adjust.mouse && (i.hide.event && this._bind(s, ["mouseenter", "mouseleave"], function(n) {
                return this.cache ? void (this.cache.onTarget = "mouseenter" === n.type) : u
            }),
            this._bind(l, "mousemove", function(n) {
                this.rendered && this.cache.onTarget && !this.tooltip.hasClass(a) && this.tooltip[0].offsetWidth > 0 && this.reposition(n)
            }));
            (f.adjust.resize || h.length) && this._bind(r.event.special.resize ? h : v, "resize", pi);
            f.adjust.scroll && this._bind(v.add(f.container), "scroll", pi)
        }
        ;
        e._unassignEvents = function() {
            var u = this.options
              , f = u.show.target
              , e = u.hide.target
              , i = r.grep([this.elements.target[0], this.rendered && this.tooltip[0], u.position.container[0], u.position.viewport[0], u.position.container.closest("html")[0], n, t], function(n) {
                return "object" == typeof n
            });
            f && f.toArray && (i = i.concat(f.toArray()));
            e && e.toArray && (i = i.concat(e.toArray()));
            this._unbind(i)._unbind(i, "destroy")._unbind(i, "inactive")
        }
        ;
        r(function() {
            wi(rt, ["mouseenter", "mouseleave"], function(n) {
                var u = "mouseenter" === n.type
                  , i = r(n.currentTarget)
                  , f = r(n.relatedTarget || n.target)
                  , t = this.options;
                u ? (this.focus(n),
                i.hasClass(nr) && !i.hasClass(a) && clearTimeout(this.timers.hide)) : "mouse" === t.position.target && t.position.adjust.mouse && t.hide.event && t.show.target && !f.closest(t.show.target[0]).length && this.hide(n);
                i.toggleClass(br, u)
            });
            wi("[" + ni + "]", gi, fi)
        });
        c = r.fn.qtip = function(n, t, e) {
            var a = ("" + n).toLowerCase()
              , y = s
              , p = r.makeArray(arguments).slice(1)
              , v = p[p.length - 1]
              , l = this[0] ? r.data(this[0], o) : s;
            return !arguments.length && l || "api" === a ? l : "string" == typeof n ? (this.each(function() {
                var n = r.data(this, o);
                if (!n)
                    return f;
                if (v && v.timeStamp && (n.cache.event = v),
                t && ("option" === a || "options" === a)) {
                    if (e === i && !r.isPlainObject(t))
                        return y = n.get(t),
                        u;
                    n.set(t, e)
                } else
                    n[a] && n[a].apply(n, p)
            }),
            y !== s ? y : this) : "object" != typeof n && arguments.length ? void 0 : (l = wt(r.extend(f, {}, n)),
            this.each(function(n) {
                var i, t;
                return t = r.isArray(l.id) ? l.id[n] : l.id,
                t = !t || t === u || t.length < 1 || c.api[t] ? c.nextid++ : t,
                i = vr(r(this), t, l),
                i === u ? f : (c.api[t] = i,
                r.each(h, function() {
                    "initialize" === this.initialize && this(i)
                }),
                void i._assignInitialEvents(v))
            }))
        }
        ;
        r.qtip = ui;
        c.api = {};
        r.each({
            attr: function(n, t) {
                if (this.length) {
                    var u = this[0]
                      , f = "title"
                      , i = r.data(u, "qtip");
                    if (n === f && i && i.options && "object" == typeof i && "object" == typeof i.options && i.options.suppress)
                        return arguments.length < 2 ? r.attr(u, ut) : (i && i.options.content.attr === f && i.cache.attr && i.set("content.text", t),
                        this.attr(ut, t))
                }
                return r.fn["attr" + ct].apply(this, arguments)
            },
            clone: function(n) {
                var t = r.fn["clone" + ct].apply(this, arguments);
                return n || t.filter("[" + ut + "]").attr("title", function() {
                    return r.attr(this, ut)
                }).removeAttr(ut),
                t
            }
        }, function(n, t) {
            if (!t || r.fn[n + ct])
                return f;
            var i = r.fn[n + ct] = r.fn[n];
            r.fn[n] = function() {
                return t.apply(this, arguments) || i.apply(this, arguments)
            }
        });
        r.ui || (r["cleanData" + ct] = r.cleanData,
        r.cleanData = function(n) {
            for (var t, i = 0; (t = r(n[i])).length; i++)
                if (t.attr(ei))
                    try {
                        t.triggerHandler("removeqtip")
                    } catch (u) {}
            r["cleanData" + ct].apply(this, arguments)
        }
        );
        c.version = "3.0.3";
        c.nextid = 0;
        c.inactiveEvents = gi;
        c.zindex = 15e3;
        c.defaults = {
            prerender: u,
            id: u,
            overwrite: f,
            suppress: f,
            content: {
                text: f,
                attr: "title",
                title: u,
                button: u
            },
            position: {
                my: "top left",
                at: "bottom right",
                target: u,
                container: u,
                viewport: u,
                adjust: {
                    x: 0,
                    y: 0,
                    mouse: f,
                    scroll: f,
                    resize: f,
                    method: "flipinvert flipinvert"
                },
                effect: function(n, t) {
                    r(this).animate(t, {
                        duration: 200,
                        queue: u
                    })
                }
            },
            show: {
                target: u,
                event: "mouseenter",
                effect: f,
                delay: 90,
                solo: u,
                ready: u,
                autofocus: u
            },
            hide: {
                target: u,
                event: "mouseleave",
                effect: f,
                delay: 0,
                fixed: u,
                inactive: u,
                leave: "window",
                distance: u
            },
            style: {
                classes: "",
                widget: u,
                width: u,
                height: u,
                def: f
            },
            events: {
                render: s,
                move: s,
                show: s,
                hide: s,
                toggle: s,
                visible: s,
                hidden: s,
                focus: s,
                blur: s
            }
        };
        var si, hi, ot, rr, ur, ci = "margin", ti = "border", pt = "color", lt = "background-color", fr = "transparent", er = " !important", ii = !!t.createElement("canvas").getContext, or = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i, li = {}, kr = ["Webkit", "O", "Moz", "ms"];
        ii ? (rr = n.devicePixelRatio || 1,
        ur = function() {
            var n = t.createElement("canvas").getContext("2d");
            return n.backingStorePixelRatio || n.webkitBackingStorePixelRatio || n.mozBackingStorePixelRatio || n.msBackingStorePixelRatio || n.oBackingStorePixelRatio || 1
        }(),
        ot = rr / ur) : hi = function(n, t, i) {
            return "<qtipvml:" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (t || "") + ' style="behavior: url(#default#VML); ' + (i || "") + '" />'
        }
        ;
        r.extend(bi.prototype, {
            init: function(n) {
                var t, i;
                i = this.element = n.elements.tip = r("<div />", {
                    "class": o + "-tip"
                }).prependTo(n.tooltip);
                ii ? (t = r("<canvas />").appendTo(this.element)[0].getContext("2d"),
                t.lineJoin = "miter",
                t.miterLimit = 1e5,
                t.save()) : (t = hi("shape", 'coordorigin="0,0"', "position:absolute;"),
                this.element.html(t + t),
                n._bind(r("*", i).add(i), ["click", "mousedown"], function(n) {
                    n.stopPropagation()
                }, this._ns));
                n._bind(n.tooltip, "tooltipmove", this.reposition, this._ns, this);
                this.create()
            },
            _swapDimensions: function() {
                this.size[0] = this.options.height;
                this.size[1] = this.options.width
            },
            _resetDimensions: function() {
                this.size[0] = this.options.width;
                this.size[1] = this.options.height
            },
            _useTitle: function(n) {
                var t = this.qtip.elements.titlebar;
                return t && (n.y === b || n.y === l && this.element.position().top + this.size[1] / 2 + this.options.offset < t.outerHeight(f))
            },
            _parseCorner: function(n) {
                var t = this.qtip.options.position.my;
                return n === u || t === u ? n = u : n === f ? n = new tt(t.string()) : n.string || (n = new tt(n),
                n.fixed = f),
                n
            },
            _parseWidth: function(n, t, i) {
                var r = this.qtip.elements
                  , u = ti + at(t) + "Width";
                return (i ? st(i, u) : st(r.content, u) || st(this._useTitle(n) && r.titlebar || r.content, u) || st(r.tooltip, u)) || 0
            },
            _parseRadius: function(n) {
                var t = this.qtip.elements
                  , i = ti + at(n.y) + at(n.x) + "Radius";
                return v.ie < 9 ? 0 : st(this._useTitle(n) && t.titlebar || t.content, i) || st(t.tooltip, i) || 0
            },
            _invalidColour: function(n, t, i) {
                var r = n.css(t);
                return !r || i && r === n.css(i) || or.test(r) ? u : r
            },
            _parseColours: function(n) {
                var i = this.qtip.elements
                  , u = this.element.css("cssText", "")
                  , f = ti + at(n[n.precedance]) + at(pt)
                  , o = this._useTitle(n) && i.titlebar || i.content
                  , t = this._invalidColour
                  , e = [];
                return e[0] = t(u, lt) || t(o, lt) || t(i.content, lt) || t(i.tooltip, lt) || u.css(lt),
                e[1] = t(u, f, pt) || t(o, f, pt) || t(i.content, f, pt) || t(i.tooltip, f, pt) || i.tooltip.css(f),
                r("*", u).add(u).css("cssText", lt + ":" + fr + er + ";" + ti + ":0" + er + ";"),
                e
            },
            _calculateSize: function(n) {
                var o, f, e, s = n.precedance === y, h = this.options.width, r = this.options.height, c = "c" === n.abbrev(), l = (s ? h : r) * (c ? .5 : 1), i = Math.pow, a = Math.round, u = Math.sqrt(i(l, 2) + i(r, 2)), t = [this.border / l * u, this.border / r * u];
                return t[2] = Math.sqrt(i(t[0], 2) - i(this.border, 2)),
                t[3] = Math.sqrt(i(t[1], 2) - i(this.border, 2)),
                o = u + t[2] + t[3] + (c ? 0 : t[0]),
                f = o / u,
                e = [a(f * h), a(f * r)],
                s ? e : e.reverse()
            },
            _calculateTip: function(n, t, i) {
                i = i || 1;
                t = t || this.size;
                var r = t[0] * i
                  , u = t[1] * i
                  , e = Math.ceil(r / 2)
                  , o = Math.ceil(u / 2)
                  , f = {
                    br: [0, 0, r, u, r, 0],
                    bl: [0, 0, r, 0, 0, u],
                    tr: [0, u, r, 0, r, u],
                    tl: [0, 0, 0, u, r, u],
                    tc: [0, u, e, 0, r, u],
                    bc: [0, 0, r, 0, e, u],
                    rc: [0, 0, r, o, 0, u],
                    lc: [r, 0, r, u, 0, o]
                };
                return f.lt = f.br,
                f.rt = f.bl,
                f.lb = f.tr,
                f.rb = f.tl,
                f[n.abbrev()]
            },
            _drawCoords: function(n, t) {
                n.beginPath();
                n.moveTo(t[0], t[1]);
                n.lineTo(t[2], t[3]);
                n.lineTo(t[4], t[5]);
                n.closePath()
            },
            create: function() {
                var n = this.corner = (ii || v.ie) && this._parseCorner(this.options.corner);
                return this.enabled = !!this.corner && "c" !== this.corner.abbrev(),
                this.enabled && (this.qtip.cache.corner = n.clone(),
                this.update()),
                this.element.toggle(this.enabled),
                this.corner
            },
            update: function(t, i) {
                if (!this.enabled)
                    return this;
                var a, et, h, c, st, g, o, s, ct = this.qtip.elements, ht = this.element, rt = ht.children(), ut = this.options, nt = this.size, e = ut.mimic, ft = Math.round;
                t || (t = this.qtip.cache.corner || this.corner);
                e === u ? e = t : (e = new tt(e),
                e.precedance = t.precedance,
                "inherit" === e.x ? e.x = t.x : "inherit" === e.y ? e.y = t.y : e.x === e.y && (e[t.precedance] = t[t.precedance]));
                et = e.precedance;
                t.precedance === w ? this._swapDimensions() : this._resetDimensions();
                a = this.color = this._parseColours(t);
                a[1] !== fr ? (s = this.border = this._parseWidth(t, t[t.precedance]),
                ut.border && 1 > s && !or.test(a[1]) && (a[0] = a[1]),
                this.border = s = ut.border !== f ? ut.border : s) : this.border = s = 0;
                o = this.size = this._calculateSize(t);
                ht.css({
                    width: o[0],
                    height: o[1],
                    lineHeight: o[1] + "px"
                });
                g = t.precedance === y ? [ft(e.x === p ? s : e.x === k ? o[0] - nt[0] - s : (o[0] - nt[0]) / 2), ft(e.y === b ? o[1] - nt[1] : 0)] : [ft(e.x === p ? o[0] - nt[0] : 0), ft(e.y === b ? s : e.y === it ? o[1] - nt[1] - s : (o[1] - nt[1]) / 2)];
                ii ? (h = rt[0].getContext("2d"),
                h.restore(),
                h.save(),
                h.clearRect(0, 0, 6e3, 6e3),
                c = this._calculateTip(e, nt, ot),
                st = this._calculateTip(e, this.size, ot),
                rt.attr(d, o[0] * ot).attr(vt, o[1] * ot),
                rt.css(d, o[0]).css(vt, o[1]),
                this._drawCoords(h, st),
                h.fillStyle = a[1],
                h.fill(),
                h.translate(g[0] * ot, g[1] * ot),
                this._drawCoords(h, c),
                h.fillStyle = a[0],
                h.fill()) : (c = this._calculateTip(e),
                c = "m" + c[0] + "," + c[1] + " l" + c[2] + "," + c[3] + " " + c[4] + "," + c[5] + " xe",
                g[2] = s && /^(r|b)/i.test(t.string()) ? 8 === v.ie ? 2 : 1 : 0,
                rt.css({
                    coordsize: o[0] + s + " " + o[1] + s,
                    antialias: "" + (e.string().indexOf(l) > -1),
                    left: g[0] - g[2] * Number(et === w),
                    top: g[1] - g[2] * Number(et === y),
                    width: o[0] + s,
                    height: o[1] + s
                }).each(function(n) {
                    var t = r(this);
                    t[t.prop ? "prop" : "attr"]({
                        coordsize: o[0] + s + " " + o[1] + s,
                        path: c,
                        fillcolor: a[0],
                        filled: !!n,
                        stroked: !n
                    }).toggle(!(!s && !n));
                    n || t.html(hi("stroke", 'weight="' + 2 * s + 'px" color="' + a[1] + '" miterlimit="1000" joinstyle="miter"'))
                }));
                n.opera && setTimeout(function() {
                    ct.tip.css({
                        display: "inline-block",
                        visibility: "visible"
                    })
                }, 1);
                i !== u && this.calculate(t, o)
            },
            calculate: function(n, t) {
                if (!this.enabled)
                    return u;
                var i, o, e = this, s = this.qtip.elements, c = this.element, h = this.options.offset, f = {};
                return n = n || this.corner,
                i = n.precedance,
                t = t || this._calculateSize(n),
                o = [n.x, n.y],
                i === w && o.reverse(),
                r.each(o, function(r, u) {
                    var o, a, c;
                    u === l ? (o = i === y ? p : b,
                    f[o] = "50%",
                    f[ci + "-" + o] = -Math.round(t[i === y ? 0 : 1] / 2) + h) : (o = e._parseWidth(n, u, s.tooltip),
                    a = e._parseWidth(n, u, s.content),
                    c = e._parseRadius(n),
                    f[u] = Math.max(-e.border, r ? a : h + (c > o ? c : -o)))
                }),
                f[n[i]] -= t[i === w ? 0 : 1],
                c.css({
                    margin: "",
                    top: "",
                    bottom: "",
                    left: "",
                    right: ""
                }).css(f),
                f
            },
            reposition: function(n, t, r) {
                function tt(n, t, i, r, u) {
                    n === et && s.precedance === t && h[r] && s[i] !== l ? s.precedance = s.precedance === w ? y : w : n !== et && h[r] && (s[t] = s[t] === l ? h[r] > 0 ? r : u : s[t] === r ? u : r)
                }
                function rt(n, t, f) {
                    s[n] === l ? nt[ci + "-" + t] = o[n] = e[ci + "-" + t] - h[t] : (a = e[f] !== i ? [h[t], -e[t]] : [-h[t], e[t]],
                    (o[n] = Math.max(a[0], a[1])) > a[0] && (r[t] -= h[t],
                    o[t] = u),
                    nt[e[f] !== i ? f : t] = o[n])
                }
                if (this.enabled) {
                    var e, a, c = t.cache, s = this.corner.clone(), h = r.adjusted, v = t.options.position.adjust.method.split(" "), d = v[0], g = v[1] || v[0], o = {
                        left: u,
                        top: u,
                        x: 0,
                        y: 0
                    }, nt = {};
                    this.corner.fixed !== f && (tt(d, w, y, p, k),
                    tt(g, y, w, b, it),
                    s.string() === c.corner.string() && c.cornerTop === h.top && c.cornerLeft === h.left || this.update(s, u));
                    e = this.calculate(s);
                    e.right !== i && (e.left = -e.right);
                    e.bottom !== i && (e.top = -e.bottom);
                    e.user = this.offset;
                    o.left = d === et && !!h.left;
                    o.left && rt(w, p, k);
                    o.top = g === et && !!h.top;
                    o.top && rt(y, b, it);
                    this.element.css(nt).toggle(!(o.x && o.y || s.x === l && o.y || s.y === l && o.x));
                    r.left -= e.left.charAt ? e.user : d !== et || o.top || !o.left && !o.top ? e.left + this.border : 0;
                    r.top -= e.top.charAt ? e.user : g !== et || o.left || !o.left && !o.top ? e.top + this.border : 0;
                    c.cornerLeft = h.left;
                    c.cornerTop = h.top;
                    c.corner = s.clone()
                }
            },
            destroy: function() {
                this.qtip._unbind(this.qtip.tooltip, this._ns);
                this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove()
            }
        });
        si = h.tip = function(n) {
            return new bi(n,n.options.style.tip)
        }
        ;
        si.initialize = "render";
        si.sanitize = function(n) {
            if (n.style && "tip"in n.style) {
                var t = n.style.tip;
                "object" != typeof t && (t = n.style.tip = {
                    corner: t
                });
                /string|boolean/i.test(typeof t.corner) || (t.corner = f)
            }
        }
        ;
        dt.tip = {
            "^position.my|style.tip.(corner|mimic|border)$": function() {
                this.create();
                this.qtip.reposition()
            },
            "^style.tip.(height|width)$": function(n) {
                this.size = [n.width, n.height];
                this.update();
                this.qtip.reposition()
            },
            "^content.title|style.(classes|widget)$": function() {
                this.update()
            }
        };
        r.extend(f, c.defaults, {
            style: {
                tip: {
                    corner: f,
                    mimic: u,
                    width: 6,
                    height: 6,
                    border: f,
                    offset: 0
                }
            }
        });
        ri = "qtip-modal";
        nt = "." + ri;
        g = function() {
            function l(n) {
                if (r.expr[":"].focusable)
                    return r.expr[":"].focusable;
                var t, i, u, e = !isNaN(r.attr(n, "tabindex")), f = n.nodeName && n.nodeName.toLowerCase();
                return "area" === f ? (t = n.parentNode,
                i = t.name,
                n.href && i && "map" === t.nodeName.toLowerCase() ? (u = r("img[usemap=#" + i + "]")[0],
                !!u && u.is(":visible")) : !1) : /input|select|textarea|button|object/.test(f) ? !n.disabled : "a" === f ? n.href || e : e
            }
            function h(n) {
                o.length < 1 && n.length ? n.not("body").blur() : o.first().focus()
            }
            function a(t) {
                if (n.is(":visible")) {
                    var e, f = r(t.target), o = i.tooltip, s = f.closest(rt);
                    e = s.length < 1 ? u : parseInt(s[0].style.zIndex, 10) > parseInt(o[0].style.zIndex, 10);
                    e || f.closest(rt)[0] === o[0] || h(f)
                }
            }
            var i, c, n, e = this, o = {};
            r.extend(e, {
                init: function() {
                    return n = e.elem = r("<div />", {
                        id: "qtip-overlay",
                        html: "<div><\/div>",
                        mousedown: function() {
                            return u
                        }
                    }).hide(),
                    r(t.body).bind("focusin" + nt, a),
                    r(t).bind("keydown" + nt, function(n) {
                        i && i.options.show.modal.escape && 27 === n.keyCode && i.hide(n)
                    }),
                    n.bind("click" + nt, function(n) {
                        i && i.options.show.modal.blur && i.hide(n)
                    }),
                    e
                },
                update: function(n) {
                    i = n;
                    o = n.options.show.modal.stealfocus !== u ? n.tooltip.find("*").filter(function() {
                        return l(this)
                    }) : []
                },
                toggle: function(o, l, a) {
                    var p = o.tooltip
                      , v = o.options.show.modal
                      , y = v.effect
                      , w = l ? "show" : "hide"
                      , b = n.is(":visible")
                      , k = r(nt).filter(":visible:not(:animated)").not(p);
                    return e.update(o),
                    l && v.stealfocus !== u && h(r(":focus")),
                    n.toggleClass("blurs", v.blur),
                    l && n.appendTo(t.body),
                    n.is(":animated") && b === l && c !== u || !l && k.length ? e : (n.stop(f, u),
                    r.isFunction(y) ? y.call(n, l) : y === u ? n[w]() : n.fadeTo(parseInt(a, 10) || 90, l ? 1 : 0, function() {
                        l || n.hide()
                    }),
                    l || n.queue(function(t) {
                        n.css({
                            left: "",
                            top: ""
                        });
                        r(nt).length || n.detach();
                        t()
                    }),
                    c = l,
                    i.destroyed && (i = s),
                    e)
                }
            });
            e.init()
        }
        ;
        g = new g;
        r.extend(ki.prototype, {
            init: function(n) {
                var t = n.tooltip;
                return this.options.on ? (n.elements.overlay = g.elem,
                t.addClass(ri).css("z-index", c.modal_zindex + r(nt).length),
                n._bind(t, ["tooltipshow", "tooltiphide"], function(n, i, u) {
                    var f = n.originalEvent;
                    if (n.target === t[0])
                        if (f && "tooltiphide" === n.type && /mouse(leave|enter)/.test(f.type) && r(f.relatedTarget).closest(g.elem[0]).length)
                            try {
                                n.preventDefault()
                            } catch (e) {}
                        else
                            (!f || f && "tooltipsolo" !== f.type) && this.toggle(n, "tooltipshow" === n.type, u)
                }, this._ns, this),
                n._bind(t, "tooltipfocus", function(n, i) {
                    if (!n.isDefaultPrevented() && n.target === t[0]) {
                        var u = r(nt)
                          , f = c.modal_zindex + u.length
                          , e = parseInt(t[0].style.zIndex, 10);
                        g.elem[0].style.zIndex = f - 1;
                        u.each(function() {
                            this.style.zIndex > e && (this.style.zIndex -= 1)
                        });
                        u.filter("." + ht).qtip("blur", n.originalEvent);
                        t.addClass(ht)[0].style.zIndex = f;
                        g.update(i);
                        try {
                            n.preventDefault()
                        } catch (o) {}
                    }
                }, this._ns, this),
                void n._bind(t, "tooltiphide", function(n) {
                    n.target === t[0] && r(nt).filter(":visible").not(t).last().qtip("focus", n)
                }, this._ns, this)) : this
            },
            toggle: function(n, t, i) {
                return n && n.isDefaultPrevented() ? this : void g.toggle(this.qtip, !!t, i)
            },
            destroy: function() {
                this.qtip.tooltip.removeClass(ri);
                this.qtip._unbind(this.qtip.tooltip, this._ns);
                g.toggle(this.qtip, u);
                delete this.qtip.elements.overlay
            }
        });
        ai = h.modal = function(n) {
            return new ki(n,n.options.show.modal)
        }
        ;
        ai.sanitize = function(n) {
            n.show && ("object" != typeof n.show.modal ? n.show.modal = {
                on: !!n.show.modal
            } : "undefined" == typeof n.show.modal.on && (n.show.modal.on = f))
        }
        ;
        c.modal_zindex = c.zindex - 200;
        ai.initialize = "render";
        dt.modal = {
            "^show.modal.(on|blur)$": function() {
                this.destroy();
                this.init();
                this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0)
            }
        };
        r.extend(f, c.defaults, {
            show: {
                modal: {
                    on: u,
                    effect: f,
                    blur: f,
                    stealfocus: f,
                    escape: f
                }
            }
        });
        h.viewport = function(i, r, f, e, o, s, h) {
            function at(n, t, i, u, f, e, o, s, h) {
                var y = r[f]
                  , c = v[n]
                  , k = kt[n]
                  , rt = i === et
                  , tt = c === f ? h : c === e ? -h : -h / 2
                  , ut = k === f ? s : k === e ? -s : -s / 2
                  , it = st[f] + nt[f] - (yt ? 0 : g[f])
                  , b = it - y
                  , w = y + h - (o === d ? ft : ot) - it
                  , p = tt - (v.precedance === n || c === v[t] ? ut : 0) - (k === l ? s / 2 : 0);
                return rt ? (p = (c === f ? 1 : -1) * tt,
                r[f] += b > 0 ? b : w > 0 ? -w : 0,
                r[f] = Math.max(-g[f] + nt[f], y - p, Math.min(Math.max(-g[f] + nt[f] + (o === d ? ft : ot), y + p), r[f], "center" === c ? y - tt : 1e9))) : (u *= i === pr ? 2 : 0,
                b > 0 && (c !== f || w > 0) ? (r[f] -= p + u,
                a.invert(n, f)) : w > 0 && (c !== e || b > 0) && (r[f] -= (c === l ? -p : p) + u,
                a.invert(n, e)),
                r[f] < st[f] && -r[f] > w && (r[f] = y,
                a = v.clone())),
                r[f] - y
            }
            var ut, a, g, yt, ft, ot, st, nt, pt = f.target, bt = i.elements.tooltip, v = f.my, kt = f.at, tt = f.adjust, ht = tt.method.split(" "), ct = ht[0], lt = ht[1] || ht[0], c = f.viewport, wt = f.container, rt = {
                left: 0,
                top: 0
            };
            return c.jquery && pt[0] !== n && pt[0] !== t.body && "none" !== tt.method ? (g = wt.offset() || rt,
            yt = "static" === wt.css("position"),
            ut = "fixed" === bt.css("position"),
            ft = c[0] === n ? c.width() : c.outerWidth(u),
            ot = c[0] === n ? c.height() : c.outerHeight(u),
            st = {
                left: ut ? 0 : c.scrollLeft(),
                top: ut ? 0 : c.scrollTop()
            },
            nt = c.offset() || rt,
            "shift" === ct && "shift" === lt || (a = v.clone()),
            rt = {
                left: "none" !== ct ? at(w, y, ct, tt.x, p, k, d, e, s) : 0,
                top: "none" !== lt ? at(y, w, lt, tt.y, b, it, vt, o, h) : 0,
                my: a
            }) : rt
        }
        ;
        h.polys = {
            polygon: function(n, t) {
                for (var r, h, c, i = {
                    width: 0,
                    height: 0,
                    position: {
                        top: 1e10,
                        right: 0,
                        bottom: 0,
                        left: 1e10
                    },
                    adjustable: u
                }, f = 0, e = [], o = 1, s = 1, a = 0, v = 0, f = n.length; f--; )
                    r = [parseInt(n[--f], 10), parseInt(n[f + 1], 10)],
                    r[0] > i.position.right && (i.position.right = r[0]),
                    r[0] < i.position.left && (i.position.left = r[0]),
                    r[1] > i.position.bottom && (i.position.bottom = r[1]),
                    r[1] < i.position.top && (i.position.top = r[1]),
                    e.push(r);
                if (h = i.width = Math.abs(i.position.right - i.position.left),
                c = i.height = Math.abs(i.position.bottom - i.position.top),
                "c" === t.abbrev())
                    i.position = {
                        left: i.position.left + i.width / 2,
                        top: i.position.top + i.height / 2
                    };
                else {
                    for (; h > 0 && c > 0 && o > 0 && s > 0; )
                        for (h = Math.floor(h / 2),
                        c = Math.floor(c / 2),
                        t.x === p ? o = h : t.x === k ? o = i.width - h : o += Math.floor(h / 2),
                        t.y === b ? s = c : t.y === it ? s = i.height - c : s += Math.floor(c / 2),
                        f = e.length; f-- && !(e.length < 2); )
                            a = e[f][0] - i.position.left,
                            v = e[f][1] - i.position.top,
                            (t.x === p && a >= o || t.x === k && o >= a || t.x === l && (o > a || a > i.width - o) || t.y === b && v >= s || t.y === it && s >= v || t.y === l && (s > v || v > i.height - s)) && e.splice(f, 1);
                    i.position = {
                        left: e[0][0],
                        top: e[0][1]
                    }
                }
                return i
            },
            rect: function(n, t, i, r) {
                return {
                    width: Math.abs(i - n),
                    height: Math.abs(r - t),
                    position: {
                        left: Math.min(n, i),
                        top: Math.min(t, r)
                    }
                }
            },
            _angles: {
                tc: 1.5,
                tr: 7 / 4,
                tl: 5 / 4,
                bc: .5,
                br: .25,
                bl: .75,
                rc: 2,
                lc: 1,
                c: 0
            },
            ellipse: function(n, t, i, r, f) {
                var e = h.polys._angles[f.abbrev()]
                  , o = 0 === e ? 0 : i * Math.cos(e * Math.PI)
                  , s = r * Math.sin(e * Math.PI);
                return {
                    width: 2 * i - Math.abs(o),
                    height: 2 * r - Math.abs(s),
                    position: {
                        left: n + o,
                        top: t + s
                    },
                    adjustable: u
                }
            },
            circle: function(n, t, i, r) {
                return h.polys.ellipse(n, t, i, i, r)
            }
        };
        h.svg = function(n, i, f) {
            for (var a, b, p, k, w, v, s, o, c, e = i[0], y = r(e.ownerSVGElement), l = e.ownerDocument, d = (parseInt(i.css("stroke-width"), 10) || 0) / 2; !e.getBBox; )
                e = e.parentNode;
            if (!e.getBBox || !e.parentNode)
                return u;
            switch (e.nodeName) {
            case "ellipse":
            case "circle":
                o = h.polys.ellipse(e.cx.baseVal.value, e.cy.baseVal.value, (e.rx || e.r).baseVal.value + d, (e.ry || e.r).baseVal.value + d, f);
                break;
            case "line":
            case "polygon":
            case "polyline":
                for (s = e.points || [{
                    x: e.x1.baseVal.value,
                    y: e.y1.baseVal.value
                }, {
                    x: e.x2.baseVal.value,
                    y: e.y2.baseVal.value
                }],
                o = [],
                v = -1,
                k = s.numberOfItems || s.length; ++v < k; )
                    w = s.getItem ? s.getItem(v) : s[v],
                    o.push.apply(o, [w.x, w.y]);
                o = h.polys.polygon(o, f);
                break;
            default:
                o = e.getBBox();
                o = {
                    width: o.width,
                    height: o.height,
                    position: {
                        left: o.x,
                        top: o.y
                    }
                }
            }
            return c = o.position,
            y = y[0],
            y.createSVGPoint && (b = e.getScreenCTM(),
            s = y.createSVGPoint(),
            s.x = c.left,
            s.y = c.top,
            p = s.matrixTransform(b),
            c.left = p.x,
            c.top = p.y),
            l !== t && "mouse" !== n.position.target && (a = r((l.defaultView || l.parentWindow).frameElement).offset(),
            a && (c.left += a.left,
            c.top += a.top)),
            l = r(l),
            c.left += l.scrollLeft(),
            c.top += l.scrollTop(),
            o
        }
        ;
        h.imagemap = function(n, t, i) {
            t.jquery || (t = r(t));
            var e, s, c, o, v, l = (t.attr("shape") || "rect").toLowerCase().replace("poly", "polygon"), f = r('img[usemap="#' + t.parent("map").attr("name") + '"]'), y = r.trim(t.attr("coords")), a = y.replace(/,$/, "").split(",");
            if (!f.length)
                return u;
            if ("polygon" === l)
                o = h.polys.polygon(a, i);
            else {
                if (!h.polys[l])
                    return u;
                for (c = -1,
                v = a.length,
                s = []; ++c < v; )
                    s.push(parseInt(a[c], 10));
                o = h.polys[l].apply(this, s.concat(i))
            }
            return e = f.offset(),
            e.left += Math.ceil((f.outerWidth(u) - f.width()) / 2),
            e.top += Math.ceil((f.outerHeight(u) - f.height()) / 2),
            o.position.left += e.left,
            o.position.top += e.top,
            o
        }
        ;
        hr = '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"><\/iframe>';
        r.extend(di.prototype, {
            _scroll: function() {
                var t = this.qtip.elements.overlay;
                t && (t[0].style.top = r(n).scrollTop() + "px")
            },
            init: function(i) {
                var u = i.tooltip;
                r("select, object").length < 1 && (this.bgiframe = i.elements.bgiframe = r(hr).appendTo(u),
                i._bind(u, "tooltipmove", this.adjustBGIFrame, this._ns, this));
                this.redrawContainer = r("<div/>", {
                    id: o + "-rcontainer"
                }).appendTo(t.body);
                i.elements.overlay && i.elements.overlay.addClass("qtipmodal-ie6fix") && (i._bind(n, ["scroll", "resize"], this._scroll, this._ns, this),
                i._bind(u, ["tooltipshow"], this._scroll, this._ns, this));
                this.redraw()
            },
            adjustBGIFrame: function() {
                var t, n, i = this.qtip.tooltip, e = {
                    height: i.outerHeight(u),
                    width: i.outerWidth(u)
                }, r = this.qtip.plugins.tip, f = this.qtip.elements.tip;
                n = parseInt(i.css("borderLeftWidth"), 10) || 0;
                n = {
                    left: -n,
                    top: -n
                };
                r && f && (t = "x" === r.corner.precedance ? [d, p] : [vt, b],
                n[t[1]] -= f[t[0]]());
                this.bgiframe.css(n).css(e)
            },
            redraw: function() {
                if (this.qtip.rendered < 1 || this.drawing)
                    return this;
                var f, n, t, i, r = this.qtip.tooltip, u = this.qtip.options.style, e = this.qtip.options.position.container;
                return this.qtip.drawing = 1,
                u.height && r.css(vt, u.height),
                u.width ? r.css(d, u.width) : (r.css(d, "").appendTo(this.redrawContainer),
                n = r.width(),
                1 > n % 2 && (n += 1),
                t = r.css("maxWidth") || "",
                i = r.css("minWidth") || "",
                f = (t + i).indexOf("%") > -1 ? e.width() / 100 : 0,
                t = (t.indexOf("%") > -1 ? f : 1 * parseInt(t, 10)) || n,
                i = (i.indexOf("%") > -1 ? f : 1 * parseInt(i, 10)) || 0,
                n = t + i ? Math.min(Math.max(n, i), t) : n,
                r.css(d, Math.round(n)).appendTo(e)),
                this.drawing = 0,
                this
            },
            destroy: function() {
                this.bgiframe && this.bgiframe.remove();
                this.qtip._unbind([n, this.qtip.tooltip], this._ns)
            }
        });
        sr = h.ie6 = function(n) {
            return 6 === v.ie ? new di(n) : u
        }
        ;
        sr.initialize = "render";
        dt.ie6 = {
            "^content|style$": function() {
                this.redraw()
            }
        }
    })
}(window, document);
jQuery.tableDnD = {
    currentTable: null,
    dragObject: null,
    mouseOffset: null,
    oldY: 0,
    build: function(n) {
        return this.each(function() {
            this.tableDnDConfig = jQuery.extend({
                onDragStyle: null,
                onDropStyle: null,
                onDragClass: "tDnD_whileDrag",
                onDrop: null,
                onDragStart: null,
                scrollAmount: 5,
                serializeRegexp: /[^\-]*$/,
                serializeParamName: null,
                dragHandle: null
            }, n || {});
            jQuery.tableDnD.makeDraggable(this)
        }),
        jQuery(document).bind("mousemove", jQuery.tableDnD.mousemove).bind("mouseup", jQuery.tableDnD.mouseup),
        this
    },
    makeDraggable: function(n) {
        var t = n.tableDnDConfig, i, r;
        n.tableDnDConfig.dragHandle ? (i = jQuery("td." + n.tableDnDConfig.dragHandle, n),
        i.each(function() {
            jQuery(this).mousedown(function(i) {
                if (jQuery.tableDnD.dragObject = this.parentNode,
                jQuery.tableDnD.currentTable = n,
                jQuery.tableDnD.mouseOffset = jQuery.tableDnD.getMouseOffset(this, i),
                t.onDragStart)
                    t.onDragStart(n, this);
                return !1
            })
        })) : (r = jQuery("tr", n),
        r.each(function() {
            var i = jQuery(this);
            i.hasClass("nodrag") || i.mousedown(function(i) {
                if (i.target.tagName == "TD") {
                    if (jQuery.tableDnD.dragObject = this,
                    jQuery.tableDnD.currentTable = n,
                    jQuery.tableDnD.mouseOffset = jQuery.tableDnD.getMouseOffset(this, i),
                    t.onDragStart)
                        t.onDragStart(n, this);
                    return !1
                }
            }).css("cursor", "move")
        }))
    },
    updateTables: function() {
        this.each(function() {
            this.tableDnDConfig && jQuery.tableDnD.makeDraggable(this)
        })
    },
    mouseCoords: function(n) {
        return n.pageX || n.pageY ? {
            x: n.pageX,
            y: n.pageY
        } : {
            x: n.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: n.clientY + document.body.scrollTop - document.body.clientTop
        }
    },
    getMouseOffset: function(n, t) {
        t = t || window.event;
        var i = this.getPosition(n)
          , r = this.mouseCoords(t);
        return {
            x: r.x - i.x,
            y: r.y - i.y
        }
    },
    getPosition: function(n) {
        var t = 0
          , i = 0;
        for (n.offsetHeight == 0 && (n = n.firstChild); n.offsetParent; )
            t += n.offsetLeft,
            i += n.offsetTop,
            n = n.offsetParent;
        return t += n.offsetLeft,
        i += n.offsetTop,
        {
            x: t,
            y: i
        }
    },
    mousemove: function(n) {
        var s, o, i;
        if (jQuery.tableDnD.dragObject != null) {
            var f = jQuery(jQuery.tableDnD.dragObject)
              , t = jQuery.tableDnD.currentTable.tableDnDConfig
              , e = jQuery.tableDnD.mouseCoords(n)
              , r = e.y - jQuery.tableDnD.mouseOffset.y
              , u = window.pageYOffset;
            return document.all && (typeof document.compatMode != "undefined" && document.compatMode != "BackCompat" ? u = document.documentElement.scrollTop : typeof document.body != "undefined" && (u = document.body.scrollTop)),
            e.y - u < t.scrollAmount ? window.scrollBy(0, -t.scrollAmount) : (s = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight,
            s - (e.y - u) < t.scrollAmount && window.scrollBy(0, t.scrollAmount)),
            r != jQuery.tableDnD.oldY && (o = r > jQuery.tableDnD.oldY,
            jQuery.tableDnD.oldY = r,
            t.onDragClass ? f.addClass(t.onDragClass) : f.css(t.onDragStyle),
            i = jQuery.tableDnD.findDropTargetRow(f, r),
            i && (o && jQuery.tableDnD.dragObject != i ? jQuery.tableDnD.dragObject.parentNode.insertBefore(jQuery.tableDnD.dragObject, i.nextSibling) : o || jQuery.tableDnD.dragObject == i || jQuery.tableDnD.dragObject.parentNode.insertBefore(jQuery.tableDnD.dragObject, i))),
            !1
        }
    },
    findDropTargetRow: function(n, t) {
        for (var e, s, o = jQuery.tableDnD.currentTable.rows, r = 0; r < o.length; r++) {
            var i = o[r]
              , u = this.getPosition(i).y
              , f = parseInt(i.offsetHeight) / 2;
            if (i.offsetHeight == 0 && (u = this.getPosition(i.firstChild).y,
            f = parseInt(i.firstChild.offsetHeight) / 2),
            t > u - f && t < u + f)
                return i == n ? null : (e = jQuery.tableDnD.currentTable.tableDnDConfig,
                e.onAllowDrop ? e.onAllowDrop(n, i) ? i : null : (s = jQuery(i).hasClass("nodrop"),
                s ? null : i))
        }
        return null
    },
    mouseup: function() {
        if (jQuery.tableDnD.currentTable && jQuery.tableDnD.dragObject) {
            var t = jQuery.tableDnD.dragObject
              , n = jQuery.tableDnD.currentTable.tableDnDConfig;
            if (n.onDragClass ? jQuery(t).removeClass(n.onDragClass) : jQuery(t).css(n.onDropStyle),
            jQuery.tableDnD.dragObject = null,
            n.onDrop)
                n.onDrop(jQuery.tableDnD.currentTable, t);
            jQuery.tableDnD.currentTable = null
        }
    },
    serialize: function() {
        return jQuery.tableDnD.currentTable ? jQuery.tableDnD.serializeTable(jQuery.tableDnD.currentTable) : "Error: No Table id set, you need to set an id on your table and every row"
    },
    serializeTable: function(n) {
        for (var t, i = "", f = n.id, u = n.rows, r = 0; r < u.length; r++)
            i.length > 0 && (i += "&"),
            t = u[r].id,
            t && t && n.tableDnDConfig && n.tableDnDConfig.serializeRegexp && (t = t.match(n.tableDnDConfig.serializeRegexp)[0]),
            i += f + "[]=" + t;
        return i
    },
    serializeTables: function() {
        var n = "";
        return this.each(function() {
            n += jQuery.tableDnD.serializeTable(this)
        }),
        n
    }
};
jQuery.fn.extend({
    tableDnD: jQuery.tableDnD.build,
    tableDnDUpdate: jQuery.tableDnD.updateTables,
    tableDnDSerialize: jQuery.tableDnD.serializeTables
});
jQuery.srender = function(n, t, i) {
    return fn = jQuery.srender.cache[n] ? jQuery.srender.cache[n] : jQuery.srender.cache[n] = new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');"),
    i ? (i.html(fn(t)),
    !1) : fn(t)
}
;
jQuery.srender.cache = {},
function(n) {
    n.fn.disable = function() {
        return this.prop("disabled", !0)
    }
    ;
    n.fn.enable = function() {
        return this.prop("disabled", !1)
    }
    ;
    n.fn.isDisabled = function() {
        return this.prop("disabled")
    }
    ;
    n.fn.isVisible = function() {
        return this.css("visibility") !== "hidden" && this.css("display") !== "none"
    }
    ;
    n.fn.disableTextSelect = function() {
        return this.each(function() {
            n.browser.mozilla ? n(this).css("mozuserselect", "none") : n.browser.msie ? n(this).bind("selectstart", function() {
                return !1
            }) : n(this).mousedown(function() {
                return !1
            })
        })
    }
}(jQuery),
function(n, t, i) {
    var u = "watermark"
      , f = "watermarkClass"
      , h = "watermarkFocus"
      , s = "watermarkSubmit"
      , c = "watermarkMaxLength"
      , e = "watermarkPassword"
      , r = "watermarkText"
      , o = /\r/g
      , y = "input:data(" + u + "),textarea:data(" + u + ")"
      , l = "input:text,input:password,input[type=search],input:not([type]),textarea"
      , a = ["Page_ClientValidate"]
      , v = !1
      , p = "placeholder"in document.createElement("input");
    n.watermark = n.watermark || {
        version: "3.1.3",
        runOnce: !0,
        options: {
            className: "watermark",
            useNative: !0,
            hideBeforeUnload: !0
        },
        hide: function(t) {
            n(t).filter(y).each(function() {
                n.watermark._hide(n(this))
            })
        },
        _hide: function(n, i) {
            var h = n[0], y = (h.value || "").replace(o, ""), l = n.data(r) || "", a = n.data(c) || 0, v = n.data(f), u, s;
            l.length && y == l && (h.value = "",
            n.data(e) && (n.attr("type") || "") === "text" && (u = n.data(e) || [],
            s = n.parent() || [],
            u.length && s.length && (s[0].removeChild(n[0]),
            s[0].appendChild(u[0]),
            n = u)),
            a && (n.attr("maxLength", a),
            n.removeData(c)),
            i && (n.attr("autocomplete", "off"),
            t.setTimeout(function() {
                n.select()
            }, 1)));
            v && n.removeClass(v)
        },
        show: function(t) {
            n(t).filter(y).each(function() {
                n.watermark._show(n(this))
            })
        },
        _show: function(t) {
            var a = t[0], p = (a.value || "").replace(o, ""), i = t.data(r) || "", y = t.attr("type") || "", w = t.data(f), u, s, l;
            p.length != 0 && p != i || t.data(h) ? n.watermark._hide(t) : (v = !0,
            t.data(e) && y === "password" && (u = t.data(e) || [],
            s = t.parent() || [],
            u.length && s.length && (s[0].removeChild(t[0]),
            s[0].appendChild(u[0]),
            t = u,
            t.attr("maxLength", i.length),
            a = t[0])),
            (y === "text" || y === "search") && (l = t.attr("maxLength") || 0,
            l > 0 && i.length > l && (t.data(c, l),
            t.attr("maxLength", i.length))),
            w && t.addClass(w),
            a.value = i)
        },
        hideAll: function() {
            v && (n.watermark.hide(l),
            v = !1)
        },
        showAll: function() {
            n.watermark.show(l)
        }
    };
    n.fn.watermark = n.fn.watermark || function(i, c) {
        if (!this.length)
            return this;
        var v = !1
          , a = typeof i == "string";
        return a && (i = i.replace(o, "")),
        typeof c == "object" ? (v = typeof c.className == "string",
        c = n.extend({}, n.watermark.options, c)) : typeof c == "string" ? (v = !0,
        c = n.extend({}, n.watermark.options, {
            className: c
        })) : c = n.watermark.options,
        typeof c.useNative != "function" && (c.useNative = c.useNative ? function() {
            return !0
        }
        : function() {
            return !1
        }
        ),
        this.each(function() {
            var y = n(this), d, w, b, k;
            if (y.is(l)) {
                if (y.data(u))
                    (a || v) && (n.watermark._hide(y),
                    a && y.data(r, i),
                    v && y.data(f, c.className));
                else {
                    if (p && c.useNative.call(this, y) && (y.attr("tagName") || "") !== "TEXTAREA") {
                        a && y.attr("placeholder", i);
                        return
                    }
                    y.data(r, a ? i : "");
                    y.data(f, c.className);
                    y.data(u, 1);
                    (y.attr("type") || "") === "password" ? (d = y.wrap("<span>").parent(),
                    w = n(d.html().replace(/type=["']?password["']?/i, 'type="text"')),
                    w.data(r, y.data(r)),
                    w.data(f, y.data(f)),
                    w.data(u, 1),
                    w.attr("maxLength", i.length),
                    w.focus(function() {
                        n.watermark._hide(w, !0)
                    }).bind("dragenter", function() {
                        n.watermark._hide(w)
                    }).bind("dragend", function() {
                        t.setTimeout(function() {
                            w.blur()
                        }, 1)
                    }),
                    y.blur(function() {
                        n.watermark._show(y)
                    }).bind("dragleave", function() {
                        n.watermark._show(y)
                    }),
                    w.data(e, y),
                    y.data(e, w)) : y.focus(function() {
                        y.data(h, 1);
                        n.watermark._hide(y, !0)
                    }).blur(function() {
                        y.data(h, 0);
                        n.watermark._show(y)
                    }).bind("dragenter", function() {
                        n.watermark._hide(y)
                    }).bind("dragleave", function() {
                        n.watermark._show(y)
                    }).bind("dragend", function() {
                        t.setTimeout(function() {
                            n.watermark._show(y)
                        }, 1)
                    }).bind("drop", function(n) {
                        var t = y[0]
                          , i = n.originalEvent.dataTransfer.getData("Text");
                        (t.value || "").replace(o, "").replace(i, "") === y.data(r) && (t.value = i);
                        y.focus()
                    });
                    this.form && (b = this.form,
                    k = n(b),
                    k.data(s) || (k.submit(n.watermark.hideAll),
                    b.submit ? (k.data(s, b.submit),
                    b.submit = function(t, i) {
                        return function() {
                            var r = i.data(s);
                            n.watermark.hideAll();
                            r.apply ? r.apply(t, Array.prototype.slice.call(arguments)) : r()
                        }
                    }(b, k)) : (k.data(s, 1),
                    b.submit = function(t) {
                        return function() {
                            n.watermark.hideAll();
                            delete t.submit;
                            t.submit()
                        }
                    }(b))))
                }
                n.watermark._show(y)
            }
        })
    }
    ;
    n.watermark.runOnce && (n.watermark.runOnce = !1,
    n.extend(n.expr[":"], {
        data: function(t, i, r) {
            return !!n.data(t, r[3])
        }
    }),
    function(t) {
        n.fn.val = function() {
            if (!this.length)
                return arguments.length ? this : i;
            if (arguments.length)
                return t.apply(this, arguments),
                n.watermark.show(this),
                this;
            if (this.data(u)) {
                var f = (this[0].value || "").replace(o, "");
                return f === (this.data(r) || "") ? "" : f
            }
            return t.apply(this, arguments)
        }
    }(n.fn.val),
    a.length && n(function() {
        for (var r, u, i = a.length - 1; i >= 0; i--)
            r = a[i],
            u = t[r],
            typeof u == "function" && (t[r] = function(t) {
                return function() {
                    return n.watermark.hideAll(),
                    t.apply(null, Array.prototype.slice.call(arguments))
                }
            }(u))
    }),
    n(t).bind("beforeunload", function() {
        n.watermark.options.hideBeforeUnload && n.watermark.hideAll()
    }))
}(jQuery, window),
function(n) {
    n.fn.mask = function(t, i) {
        n(this).each(function() {
            if (i !== undefined && i > 0) {
                var r = n(this);
                r.data("_mask_timeout", setTimeout(function() {
                    n.maskElement(r, t)
                }, i))
            } else
                n.maskElement(n(this), t)
        })
    }
    ;
    n.fn.unmask = function() {
        n(this).each(function() {
            n.unmaskElement(n(this))
        })
    }
    ;
    n.fn.isMasked = function() {
        return this.hasClass("masked")
    }
    ;
    n.maskElement = function(t, i) {
        var u, r;
        t.data("_mask_timeout") !== undefined && (clearTimeout(t.data("_mask_timeout")),
        t.removeData("_mask_timeout"));
        t.isMasked() && n.unmaskElement(t);
        t.css("position") == "static" && t.addClass("masked-relative");
        t.addClass("masked");
        u = n('<div class="loadmask"><\/div>');
        navigator.userAgent.toLowerCase().indexOf("msie") > -1 && (u.height(t.height() + parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"))),
        u.width(t.width() + parseInt(t.css("padding-left")) + parseInt(t.css("padding-right"))));
        navigator.userAgent.toLowerCase().indexOf("msie 6") > -1 && t.find("select").addClass("masked-hidden");
        t.append(u);
        i !== undefined && (r = n('<div class="loadmask-msg" style="display:none;"><\/div>'),
        r.append("<div>" + i + "<\/div>"),
        t.append(r),
        r.css("top", Math.round(t.height() / 2 - (r.height() - parseInt(r.css("padding-top")) - parseInt(r.css("padding-bottom"))) / 2) + "px"),
        r.css("left", Math.round(t.width() / 2 - (r.width() - parseInt(r.css("padding-left")) - parseInt(r.css("padding-right"))) / 2) + "px"),
        r.show())
    }
    ;
    n.unmaskElement = function(n) {
        n.data("_mask_timeout") !== undefined && (clearTimeout(n.data("_mask_timeout")),
        n.removeData("_mask_timeout"));
        n.find(".loadmask-msg,.loadmask").remove();
        n.removeClass("masked");
        n.removeClass("masked-relative");
        n.find("select").removeClass("masked-hidden")
    }
}(jQuery);
(function(n) {
    function t(t, i) {
        return parseInt(n.curCSS(t.jquery ? t[0] : t, i, !0)) || 0
    }
    n.dimensions = {
        version: "1.2"
    };
    n.each(["Height", "Width"], function(i, r) {
        n.fn["inner" + r] = function() {
            if (this[0]) {
                var n = r == "Height" ? "Top" : "Left"
                  , i = r == "Height" ? "Bottom" : "Right";
                return this.is(":visible") ? this[0]["client" + r] : t(this, r.toLowerCase()) + t(this, "padding" + n) + t(this, "padding" + i)
            }
        }
        ;
        n.fn["outer" + r] = function(i) {
            var u, f, e;
            if (this[0])
                return u = r == "Height" ? "Top" : "Left",
                f = r == "Height" ? "Bottom" : "Right",
                i = n.extend({
                    margin: !1
                }, i || {}),
                e = this.is(":visible") ? this[0]["offset" + r] : t(this, r.toLowerCase()) + t(this, "border" + u + "Width") + t(this, "border" + f + "Width") + t(this, "padding" + u) + t(this, "padding" + f),
                e + (i.margin ? t(this, "margin" + u) + t(this, "margin" + f) : 0)
        }
    });
    n.each(["Left", "Top"], function(t, i) {
        n.fn["scroll" + i] = function(t) {
            if (this[0])
                return t != undefined ? this.each(function() {
                    this == window || this == document ? window.scrollTo(i == "Left" ? t : n(window).scrollLeft(), i == "Top" ? t : n(window).scrollTop()) : this["scroll" + i] = t
                }) : this[0] == window || this[0] == document ? self[i == "Left" ? "pageXOffset" : "pageYOffset"] || n.boxModel && document.documentElement["scroll" + i] || document.body["scroll" + i] : this[0]["scroll" + i]
        }
    });
    n.fn.extend({
        position: function() {
            var u = this[0], n, i, r, f;
            return u && (r = this.offsetParent(),
            n = this.offset(),
            i = r.offset(),
            n.top -= t(u, "marginTop"),
            n.left -= t(u, "marginLeft"),
            i.top += t(r, "borderTopWidth"),
            i.left += t(r, "borderLeftWidth"),
            f = {
                top: n.top - i.top,
                left: n.left - i.left
            }),
            f
        },
        offsetParent: function() {
            for (var t = this[0].offsetParent; t && !/^body|html$/i.test(t.tagName) && n.css(t, "position") == "static"; )
                t = t.offsetParent;
            return n(t)
        }
    })
}
),
function(n) {
    n.fn.markItUp = function(t, i) {
        var s, c, r, u, e, o;
        u = e = o = !1;
        typeof t == "string" && (s = t,
        c = i);
        r = {
            id: "",
            nameSpace: "",
            root: "",
            previewHandler: !1,
            previewInWindow: "",
            previewInElement: "",
            previewAutoRefresh: !0,
            previewPosition: "after",
            previewTemplatePath: "~/templates/preview.html",
            previewParser: !1,
            previewParserPath: "",
            previewParserVar: "data",
            resizeHandle: !0,
            beforeInsert: "",
            afterInsert: "",
            onEnter: {},
            onShiftEnter: {},
            onCtrlEnter: {},
            onTab: {},
            markupSet: [{}]
        };
        n.extend(r, t, i);
        r.root || n("script").each(function(t, i) {
            miuScript = n(i).get(0).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/);
            miuScript !== null && (r.root = miuScript[1])
        });
        var l = function(n) {
            n = n.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }
          , h = l(navigator.userAgent)
          , f = {};
        return h.browser && (f[h.browser] = !0,
        f.version = h.version),
        f.chrome ? f.webkit = !0 : f.webkit && (f.safari = !0),
        this.each(function() {
            function nt(n, t) {
                return t ? n.replace(/("|')~\//g, "$1" + r.root) : n.replace(/^~\//, r.root)
            }
            function vt() {
                id = "";
                nameSpace = "";
                r.id ? id = 'id="' + r.id + '"' : t.attr("id") && (id = 'id="markItUp' + t.attr("id").substr(0, 1).toUpperCase() + t.attr("id").substr(1) + '"');
                r.nameSpace && (nameSpace = 'class="' + r.nameSpace + '"');
                t.wrap("<div " + nameSpace + "><\/div>");
                t.wrap("<div " + id + ' class="markItUp"><\/div>');
                t.wrap('<div class="markItUpContainer"><\/div>');
                t.addClass("markItUpEditor");
                d = n('<div class="markItUpHeader"><\/div>').insertBefore(t);
                n(st(r.markupSet)).appendTo(d);
                ut = n('<div class="markItUpFooter"><\/div>').insertAfter(t);
                r.resizeHandle === !0 && f.safari !== !0 && (resizeHandle = n('<div class="markItUpResizeHandle"><\/div>').insertAfter(t).bind("mousedown.markItUp", function(i) {
                    var f = t.height(), e = i.clientY, r, u;
                    r = function(n) {
                        return t.css("height", Math.max(20, n.clientY + f - e) + "px"),
                        !1
                    }
                    ;
                    u = function() {
                        return n("html").unbind("mousemove.markItUp", r).unbind("mouseup.markItUp", u),
                        !1
                    }
                    ;
                    n("html").bind("mousemove.markItUp", r).bind("mouseup.markItUp", u)
                }),
                ut.append(resizeHandle));
                t.bind("keydown.markItUp", lt).bind("keyup", lt);
                t.bind("insertion.markItUp", function(t, r) {
                    r.target !== !1 && rt();
                    i === n.markItUp.focused && b(r)
                });
                t.bind("focus.markItUp", function() {
                    n.markItUp.focused = this
                });
                r.previewInElement && et()
            }
            function st(i) {
                var r = n("<ul><\/ul>")
                  , u = 0;
                return n("li:hover > ul", r).css("display", "block"),
                n.each(i, function() {
                    var i = this, o = "", s, e, f;
                    if (s = i.key ? (i.name || "") + " [Ctrl+" + i.key + "]" : i.name || "",
                    key = i.key ? 'accesskey="' + i.key + '"' : "",
                    i.separator)
                        e = n('<li class="markItUpSeparator">' + (i.separator || "") + "<\/li>").appendTo(r);
                    else {
                        for (u++,
                        f = k.length - 1; f >= 0; f--)
                            o += k[f] + "-";
                        e = n('<li class="markItUpButton markItUpButton' + o + u + " " + (i.className || "") + '"><a href="" ' + key + ' title="' + s + '">' + (i.name || "") + "<\/a><\/li>").bind("contextmenu.markItUp", function() {
                            return !1
                        }).bind("click.markItUp", function(n) {
                            n.preventDefault()
                        }).bind("focusin.markItUp", function() {
                            t.focus()
                        }).bind("mouseup", function() {
                            return i.call && eval(i.call)(),
                            setTimeout(function() {
                                b(i)
                            }, 1),
                            !1
                        }).bind("mouseenter.markItUp", function() {
                            n("> ul", this).show();
                            n(document).one("click", function() {
                                n("ul ul", d).hide()
                            })
                        }).bind("mouseleave.markItUp", function() {
                            n("> ul", this).hide()
                        }).appendTo(r);
                        i.dropMenu && (k.push(u),
                        n(e).addClass("markItUpDropMenu").append(st(i.dropMenu)))
                    }
                }),
                k.pop(),
                r
            }
            function yt(n) {
                return n ? (n = n.toString(),
                n = n.replace(/\(\!\(([\s\S]*?)\)\!\)/g, function(n, t) {
                    var i = t.split("|!|");
                    return o === !0 ? i[1] !== undefined ? i[1] : i[0] : i[1] === undefined ? "" : i[0]
                }),
                n.replace(/\[\!\[([\s\S]*?)\]\!\]/g, function(n, t) {
                    var i = t.split(":!:");
                    return g === !0 ? !1 : (value = prompt(i[0], i[1] ? i[1] : ""),
                    value === null && (g = !0),
                    value)
                })) : ""
            }
            function v(t) {
                return n.isFunction(t) && (t = t(w)),
                yt(t)
            }
            function it(n) {
                var t = v(a.openWith), e = v(a.placeHolder), o = v(a.replaceWith), i = v(a.closeWith), s = v(a.openBlockWith), h = v(a.closeBlockWith), l = a.multiline, r, u, f, c;
                if (o !== "")
                    block = t + o + i;
                else if (selection === "" && e !== "")
                    block = t + e + i;
                else {
                    for (n = n || selection,
                    r = [n],
                    u = [],
                    l === !0 && (r = n.split(/\r?\n/)),
                    f = 0; f < r.length; f++)
                        line = r[f],
                        (c = line.match(/ *$/)) ? u.push(t + line.replace(/ *$/g, "") + i + c) : u.push(t + line + i);
                    block = u.join("\n")
                }
                return block = s + block + h,
                {
                    block: block,
                    openBlockWith: s,
                    openWith: t,
                    replaceWith: o,
                    placeHolder: e,
                    closeWith: i,
                    closeBlockWith: h
                }
            }
            function b(s) {
                var c, k, b, p;
                if (w = a = s,
                rt(),
                n.extend(w, {
                    line: "",
                    root: r.root,
                    textarea: i,
                    selection: selection || "",
                    caretPosition: l,
                    ctrlKey: u,
                    shiftKey: e,
                    altKey: o
                }),
                v(r.beforeInsert),
                v(a.beforeInsert),
                (u === !0 && e === !0 || s.multiline === !0) && v(a.beforeMultiInsert),
                n.extend(w, {
                    line: 1
                }),
                u === !0 && e === !0) {
                    for (lines = selection.split(/\r?\n/),
                    k = 0,
                    b = lines.length,
                    p = 0; p < b; p++)
                        n.trim(lines[p]) !== "" ? (n.extend(w, {
                            line: ++k,
                            selection: lines[p]
                        }),
                        lines[p] = it(lines[p]).block) : lines[p] = "";
                    string = {
                        block: lines.join("\n")
                    };
                    start = l;
                    c = string.block.length + (f.opera ? b - 1 : 0)
                } else
                    u === !0 ? (string = it(selection),
                    start = l + string.openWith.length,
                    c = string.block.length - string.openWith.length - string.closeWith.length,
                    c = c - (string.block.match(/ $/) ? 1 : 0) - ft(string.block)) : e === !0 ? (string = it(selection),
                    start = l,
                    c = string.block.length - ft(string.block)) : (string = it(selection),
                    start = l + string.block.length,
                    c = 0,
                    start -= ft(string.block));
                selection === "" && string.replaceWith === "" && (y += ht(string.block),
                start = l + string.openBlockWith.length + string.openWith.length,
                c = string.block.length - string.openBlockWith.length - string.openWith.length - string.closeWith.length - string.closeBlockWith.length,
                y = t.val().substring(l, t.val().length).length - ht(t.val().substring(0, l)));
                n.extend(w, {
                    caretPosition: l,
                    scrollPosition: tt
                });
                string.block !== selection && g === !1 ? (pt(string.block),
                ct(start, c)) : y = -1;
                rt();
                n.extend(w, {
                    line: "",
                    selection: selection
                });
                (u === !0 && e === !0 || s.multiline === !0) && v(a.afterMultiInsert);
                v(a.afterInsert);
                v(r.afterInsert);
                h && r.previewAutoRefresh && et();
                e = o = u = g = !1
            }
            function ht(n) {
                return f.opera ? n.length - n.replace(/\n*/g, "").length : 0
            }
            function ft(n) {
                return f.msie ? n.length - n.replace(/\r*/g, "").length : 0
            }
            function pt(n) {
                if (document.selection) {
                    var t = document.selection.createRange();
                    t.text = n
                } else
                    i.value = i.value.substring(0, l) + n + i.value.substring(l + selection.length, i.value.length)
            }
            function ct(n, t) {
                if (i.createTextRange) {
                    if (f.opera && f.version >= 9.5 && t == 0)
                        return !1;
                    range = i.createTextRange();
                    range.collapse(!0);
                    range.moveStart("character", n);
                    range.moveEnd("character", t);
                    range.select()
                } else
                    i.setSelectionRange && i.setSelectionRange(n, n + t);
                i.scrollTop = tt;
                i.focus()
            }
            function rt() {
                if (i.focus(),
                tt = i.scrollTop,
                document.selection)
                    if (selection = document.selection.createRange().text,
                    f.msie) {
                        var t = document.selection.createRange()
                          , n = t.duplicate();
                        for (n.moveToElementText(i),
                        l = -1; n.inRange(t); )
                            n.moveStart("character"),
                            l++
                    } else
                        l = i.selectionStart;
                else
                    l = i.selectionStart,
                    selection = i.value.substring(l, i.selectionEnd);
                return selection
            }
            function et() {
                wt()
            }
            function wt() {
                var i;
                return r.previewHandler && typeof r.previewHandler == "function" ? r.previewHandler(t.val()) : r.previewParser && typeof r.previewParser == "function" ? (i = r.previewParser(t.val()),
                ot(nt(i, 1))) : r.previewParserPath !== "" ? n.ajax({
                    type: "POST",
                    dataType: "text",
                    global: !1,
                    url: r.previewParserPath,
                    data: r.previewParserVar + "=" + encodeURIComponent(t.val()),
                    success: function(n) {
                        ot(nt(n, 1))
                    }
                }) : at || n.ajax({
                    url: r.previewTemplatePath,
                    dataType: "text",
                    global: !1,
                    success: function(n) {
                        ot(nt(n, 1).replace(/<!-- content -->/g, t.val()))
                    }
                }),
                !1
            }
            function ot(t) {
                if (r.previewInElement)
                    n(r.previewInElement).html(t);
                else if (h && h.document) {
                    try {
                        sp = h.document.documentElement.scrollTop
                    } catch (i) {
                        sp = 0
                    }
                    h.document.open();
                    h.document.write(t);
                    h.document.close();
                    h.document.documentElement.scrollTop = sp
                }
            }
            function lt(i) {
                if (e = i.shiftKey,
                o = i.altKey,
                u = (i.altKey && i.ctrlKey) ? !1 : i.ctrlKey || i.metaKey,
                i.type === "keydown") {
                    if (u === !0 && (li = n('a[accesskey="' + (i.keyCode == 13 ? "\\n" : String.fromCharCode(i.keyCode)) + '"]', d).parent("li"),
                    li.length !== 0))
                        return u = !1,
                        setTimeout(function() {
                            li.triggerHandler("mouseup")
                        }, 1),
                        !1;
                    if (i.keyCode === 13 || i.keyCode === 10)
                        return u === !0 ? (u = !1,
                        b(r.onCtrlEnter),
                        r.onCtrlEnter.keepDefault) : e === !0 ? (e = !1,
                        b(r.onShiftEnter),
                        r.onShiftEnter.keepDefault) : (b(r.onEnter),
                        r.onEnter.keepDefault);
                    if (i.keyCode === 9)
                        return e == !0 || u == !0 || o == !0 ? !1 : y !== -1 ? (rt(),
                        y = t.val().length - y,
                        ct(y, 0),
                        y = -1,
                        !1) : (b(r.onTab),
                        r.onTab.keepDefault)
                }
            }
            function bt() {
                t.unbind(".markItUp").removeClass("markItUpEditor");
                t.parent("div").parent("div.markItUp").parent("div").replaceWith(t);
                t.data("markItUp", null)
            }
            var t, i, k, tt, l, y, a, w, d, ut, h, at, p, g;
            if (t = n(this),
            i = this,
            k = [],
            g = !1,
            tt = l = 0,
            y = -1,
            r.previewParserPath = nt(r.previewParserPath),
            r.previewTemplatePath = nt(r.previewTemplatePath),
            s) {
                switch (s) {
                case "remove":
                    bt();
                    break;
                case "insert":
                    b(c);
                    break;
                default:
                    n.error("Method " + s + " does not exist on jQuery.markItUp")
                }
                return
            }
            vt()
        })
    }
    ;
    n.fn.markItUpRemove = function() {
        return this.each(function() {
            n(this).markItUp("remove")
        })
    }
    ;
    n.markItUp = function(t) {
        var i = {
            target: !1
        };
        if (n.extend(i, t),
        i.target)
            return n(i.target).each(function() {
                n(this).focus();
                n(this).trigger("insertion", [i])
            });
        n("textarea").trigger("insertion", [i])
    }
}(jQuery),
function(n) {
    n.fn.extend({
        tAutoSizer: function(t) {
            function i() {
                var i = n(this), u = parseInt(i.width(), 10), e = parseInt(i.attr("d-width"), 10), f = r(i), h = parseInt(i.css("font-size"), 10), o = u - f - t.stepSize, c = f - u + t.stepSize, s;
                f > u && u < t.maxWidth ? (s = i.val(),
                i.val(""),
                i.css("width", u + c + "px"),
                i.val(s)) : f == h ? i.css("width", e + "px") : f + t.stepSize < u && (u - o > e ? i.css("width", u - o + "px") : i.css("width", e + "px"))
            }
            function r(t) {
                var i, r;
                return n("#ruler").size() == 0 && (i = n("<span />").attr("id", "ruler").css({
                    visibility: "hidden",
                    "white-space": "nowrap"
                }),
                n(document.body).append(i)),
                n("#ruler").html(t.val() + "&nbsp;&nbsp;&nbsp;"),
                r = n("#ruler")[0].offsetWidth,
                parseInt(r, 10)
            }
            var t = n.extend({
                maxWidth: 400,
                stepSize: 30
            }, t);
            return this.each(function() {
                var t = n(this);
                if (this.type != "text")
                    return !1;
                t.attr("d-width", t.width());
                t.keyup(i);
                t.live("input paste", function() {
                    setTimeout(i, 250)
                })
            })
        }
    })
}(jQuery),
function(n) {
    function i(n) {
        return typeof n == "object" ? n : {
            top: n,
            left: n
        }
    }
    var t = n.scrollTo = function(t, i, r) {
        n(window).scrollTo(t, i, r)
    }
    ;
    t.defaults = {
        axis: "xy",
        duration: parseFloat(n.fn.jquery) >= 1.3 ? 0 : 1
    };
    t.window = function() {
        return n(window)._scrollable()
    }
    ;
    n.fn._scrollable = function() {
        return this.map(function() {
            var t = this, r = !t.nodeName || n.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1, i;
            return r ? (i = (t.contentWindow || t).document || t.ownerDocument || t,
            n.browser.safari || i.compatMode == "BackCompat" ? i.body : i.documentElement) : t
        })
    }
    ;
    n.fn.scrollTo = function(r, u, f) {
        return typeof u == "object" && (f = u,
        u = 0),
        typeof f == "function" && (f = {
            onAfter: f
        }),
        r == "max" && (r = 9e9),
        f = n.extend({}, t.defaults, f),
        u = u || f.speed || f.duration,
        f.queue = f.queue && f.axis.length > 1,
        f.queue && (u /= 2),
        f.offset = i(f.offset),
        f.over = i(f.over),
        this._scrollable().each(function() {
            function l(n) {
                h.animate(o, u, f.easing, n && function() {
                    n.call(this, r, f)
                }
                )
            }
            var s = this, h = n(s), e = r, c, o = {}, a = h.is("html,body");
            switch (typeof e) {
            case "number":
            case "string":
                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                    e = i(e);
                    break
                }
                e = n(e, this);
            case "object":
                (e.is || e.style) && (c = (e = n(e)).offset())
            }
            n.each(f.axis.split(""), function(n, i) {
                var y = i == "x" ? "Left" : "Top", u = y.toLowerCase(), r = "scroll" + y, p = s[r], w = t.max(s, i), v;
                c ? (o[r] = c[u] + (a ? 0 : p - h.offset()[u]),
                f.margin && (o[r] -= parseInt(e.css("margin" + y)) || 0,
                o[r] -= parseInt(e.css("border" + y + "Width")) || 0),
                o[r] += f.offset[u] || 0,
                f.over[u] && (o[r] += e[i == "x" ? "width" : "height"]() * f.over[u])) : (v = e[u],
                o[r] = v.slice && v.slice(-1) == "%" ? parseFloat(v) / 100 * w : v);
                /^\d+$/.test(o[r]) && (o[r] = o[r] <= 0 ? 0 : Math.min(o[r], w));
                !n && f.queue && (p != o[r] && l(f.onAfterFirst),
                delete o[r])
            });
            l(f.onAfter)
        }).end()
    }
    ;
    t.max = function(t, i) {
        var r = i == "x" ? "Width" : "Height"
          , u = "scroll" + r;
        if (!n(t).is("html,body"))
            return t[u] - n(t)[r.toLowerCase()]();
        var f = "client" + r
          , e = t.ownerDocument.documentElement
          , o = t.ownerDocument.body;
        return Math.max(e[u], o[u]) - Math.min(e[f], o[f])
    }
}(jQuery),
function(n) {
    function f() {
        return n("<div/>")
    }
    var u = Math.abs
      , i = Math.max
      , r = Math.min
      , t = Math.round;
    n.imgAreaSelect = function(e, o) {
        function kt(n) {
            return n + rt.left - ct.left
        }
        function dt(n) {
            return n + rt.top - ct.top
        }
        function st(n) {
            return n - rt.left + ct.left
        }
        function ht(n) {
            return n - rt.top + ct.top
        }
        function ri(n) {
            return n.pageX - ct.left
        }
        function ui(n) {
            return n.pageY - ct.top
        }
        function ot(n) {
            var i = n || gt
              , r = n || ni;
            return {
                x1: t(s.x1 * i),
                y1: t(s.y1 * r),
                x2: t(s.x2 * i),
                y2: t(s.y2 * r),
                width: t(s.x2 * i) - t(s.x1 * i),
                height: t(s.y2 * r) - t(s.y1 * r)
            }
        }
        function gi(n, i, r, u, f) {
            var e = f || gt
              , o = f || ni;
            s = {
                x1: t(n / e || 0),
                y1: t(i / o || 0),
                x2: t(r / e || 0),
                y2: t(u / o || 0)
            };
            s.width = s.x2 - s.x1;
            s.height = s.y2 - s.y1
        }
        function vt() {
            g.width() && (rt = {
                left: t(g.offset().left),
                top: t(g.offset().top)
            },
            nt = g.innerWidth(),
            d = g.innerHeight(),
            rt.top += g.outerHeight() - d >> 1,
            rt.left += g.outerWidth() - nt >> 1,
            ti = t(o.minWidth / gt) || 0,
            ii = t(o.minHeight / ni) || 0,
            wi = t(r(o.maxWidth / gt || 16777216, nt)),
            bi = t(r(o.maxHeight / ni || 16777216, d)),
            n().jquery != "1.3.2" || si != "fixed" || ki.getBoundingClientRect || (rt.top += i(document.body.scrollTop, ki.scrollTop),
            rt.left += i(document.body.scrollLeft, ki.scrollLeft)),
            ct = /absolute|relative/.test(wt.css("position")) ? {
                left: t(wt.offset().left) - wt.scrollLeft(),
                top: t(wt.offset().top) - wt.scrollTop()
            } : si == "fixed" ? {
                left: n(document).scrollLeft(),
                top: n(document).scrollTop()
            } : {
                left: 0,
                top: 0
            },
            w = kt(0),
            b = dt(0),
            (s.x2 > nt || s.y2 > d) && li())
        }
        function ci(t) {
            if (hi) {
                v.css({
                    left: kt(s.x1),
                    top: dt(s.y1)
                }).add(pt).width(et = s.width).height(at = s.height);
                pt.add(k).add(p).css({
                    left: 0,
                    top: 0
                });
                k.width(i(et - k.outerWidth() + k.innerWidth(), 0)).height(i(at - k.outerHeight() + k.innerHeight(), 0));
                n(y[0]).css({
                    left: w,
                    top: b,
                    width: s.x1,
                    height: d
                });
                n(y[1]).css({
                    left: w + s.x1,
                    top: b,
                    width: et,
                    height: s.y1
                });
                n(y[2]).css({
                    left: w + s.x2,
                    top: b,
                    width: nt - s.x2,
                    height: d
                });
                n(y[3]).css({
                    left: w + s.x1,
                    top: b + s.y2,
                    width: et,
                    height: d - s.y2
                });
                et -= p.outerWidth();
                at -= p.outerHeight();
                switch (p.length) {
                case 8:
                    n(p[4]).css({
                        left: et >> 1
                    });
                    n(p[5]).css({
                        left: et,
                        top: at >> 1
                    });
                    n(p[6]).css({
                        left: et >> 1,
                        top: at
                    });
                    n(p[7]).css({
                        top: at >> 1
                    });
                case 4:
                    p.slice(1, 3).css({
                        left: et
                    });
                    p.slice(2, 4).css({
                        top: at
                    })
                }
                t !== !1 && (n.imgAreaSelect.keyPress != vr && n(document).unbind(n.imgAreaSelect.keyPress, n.imgAreaSelect.onKeyPress),
                o.keys && n(document)[n.imgAreaSelect.keyPress](n.imgAreaSelect.onKeyPress = vr));
                n.browser.msie && k.outerWidth() - k.innerWidth() == 2 && (k.css("margin", 0),
                setTimeout(function() {
                    k.css("margin", "auto")
                }, 0))
            }
        }
        function nr(n) {
            vt();
            ci(n);
            h = kt(s.x1);
            c = dt(s.y1);
            l = kt(s.x2);
            a = dt(s.y2)
        }
        function tr(n, t) {
            o.fadeSpeed ? n.fadeOut(o.fadeSpeed, t) : n.hide()
        }
        function yt(n) {
            var t = st(ri(n)) - s.x1
              , i = ht(ui(n)) - s.y1;
            if (!di) {
                vt();
                di = !0;
                v.one("mouseout", function() {
                    di = !1
                })
            }
            tt = "";
            o.resizable && (i <= o.resizeMargin ? tt = "n" : i >= s.height - o.resizeMargin && (tt = "s"),
            t <= o.resizeMargin ? tt += "w" : t >= s.width - o.resizeMargin && (tt += "e"));
            v.css("cursor", tt ? tt + "-resize" : o.movable ? "move" : "");
            oi && oi.toggle()
        }
        function or() {
            n("body").css("cursor", "");
            (o.autoHide || s.width * s.height == 0) && tr(v.add(y), function() {
                n(this).hide()
            });
            n(document).unbind("mousemove", ir);
            v.mousemove(yt);
            o.onSelectEnd(e, ot())
        }
        function sr(t) {
            if (t.which != 1)
                return !1;
            if (vt(),
            tt) {
                n("body").css("cursor", tt + "-resize");
                h = kt(s[/w/.test(tt) ? "x2" : "x1"]);
                c = dt(s[/n/.test(tt) ? "y2" : "y1"]);
                n(document).mousemove(ir).one("mouseup", or);
                v.unbind("mousemove", yt)
            } else if (o.movable) {
                yi = w + s.x1 - ri(t);
                pi = b + s.y1 - ui(t);
                v.unbind("mousemove", yt);
                n(document).mousemove(hr).one("mouseup", function() {
                    o.onSelectEnd(e, ot());
                    n(document).unbind("mousemove", hr);
                    v.mousemove(yt)
                })
            } else
                g.mousedown(t);
            return !1
        }
        function fi(n) {
            ft && (n ? (l = i(w, r(w + nt, h + u(a - c) * ft * (l > h || -1))),
            a = t(i(b, r(b + d, c + u(l - h) / ft * (a > c || -1)))),
            l = t(l)) : (a = i(b, r(b + d, c + u(l - h) / ft * (a > c || -1))),
            l = t(i(w, r(w + nt, h + u(a - c) * ft * (l > h || -1)))),
            a = t(a)))
        }
        function li() {
            h = r(h, w + nt);
            c = r(c, b + d);
            u(l - h) < ti && (l = h - ti * (l < h || -1),
            l < w ? h = w + ti : l > w + nt && (h = w + nt - ti));
            u(a - c) < ii && (a = c - ii * (a < c || -1),
            a < b ? c = b + ii : a > b + d && (c = b + d - ii));
            l = i(w, r(l, w + nt));
            a = i(b, r(a, b + d));
            fi(u(l - h) < u(a - c) * ft);
            u(l - h) > wi && (l = h - wi * (l < h || -1),
            fi());
            u(a - c) > bi && (a = c - bi * (a < c || -1),
            fi(!0));
            s = {
                x1: st(r(h, l)),
                x2: st(i(h, l)),
                y1: ht(r(c, a)),
                y2: ht(i(c, a)),
                width: u(l - h),
                height: u(a - c)
            };
            ci();
            o.onSelectChange(e, ot())
        }
        function ir(n) {
            return l = /w|e|^$/.test(tt) || ft ? ri(n) : kt(s.x2),
            a = /n|s|^$/.test(tt) || ft ? ui(n) : dt(s.y2),
            li(),
            !1
        }
        function ei(t, i) {
            l = (h = t) + s.width;
            a = (c = i) + s.height;
            n.extend(s, {
                x1: st(h),
                y1: ht(c),
                x2: st(l),
                y2: ht(a)
            });
            ci();
            o.onSelectChange(e, ot())
        }
        function hr(n) {
            return h = i(w, r(yi + ri(n), w + nt - s.width)),
            c = i(b, r(pi + ui(n), b + d - s.height)),
            ei(h, c),
            n.preventDefault(),
            !1
        }
        function rr() {
            n(document).unbind("mousemove", rr);
            vt();
            l = h;
            a = c;
            li();
            tt = "";
            y.is(":visible") || v.add(y).hide().fadeIn(o.fadeSpeed || 0);
            hi = !0;
            n(document).unbind("mouseup", ai).mousemove(ir).one("mouseup", or);
            v.unbind("mousemove", yt);
            o.onSelectStart(e, ot())
        }
        function ai() {
            if (n(document).unbind("mousemove", rr).unbind("mouseup", ai),
            tr(v.add(y)),
            gi(st(h), ht(c), st(h), ht(c)),
            !this instanceof n.imgAreaSelect) {
                o.onSelectChange(e, ot());
                o.onSelectEnd(e, ot())
            }
        }
        function cr(t) {
            return t.which != 1 || y.is(":animated") ? !1 : (vt(),
            yi = h = ri(t),
            pi = c = ui(t),
            n(document).mousemove(rr).mouseup(ai),
            !1)
        }
        function lr() {
            nr(!1)
        }
        function ar() {
            fr = !0;
            ur(o = n.extend({
                classPrefix: "imgareaselect",
                movable: !0,
                parent: "body",
                resizable: !0,
                resizeMargin: 10,
                onInit: function() {},
                onSelectStart: function() {},
                onSelectChange: function() {},
                onSelectEnd: function() {}
            }, o));
            v.add(y).css({
                visibility: ""
            });
            o.show && (hi = !0,
            vt(),
            ci(),
            v.add(y).hide().fadeIn(o.fadeSpeed || 0));
            setTimeout(function() {
                o.onInit(e, ot())
            }, 0)
        }
        function vi(n, t) {
            for (option in t)
                o[option] !== undefined && n.css(t[option], o[option])
        }
        function ur(t) {
            if (t.parent && (wt = n(t.parent)).append(v.add(y)),
            n.extend(o, t),
            vt(),
            t.handles != null) {
                for (p.remove(),
                p = n([]),
                bt = t.handles ? t.handles == "corners" ? 4 : 8 : 0; bt--; )
                    p = p.add(f());
                p.addClass(o.classPrefix + "-handle").css({
                    position: "absolute",
                    fontSize: 0,
                    zIndex: ut + 1 || 1
                });
                !parseInt(p.css("width")) >= 0 && p.width(5).height(5);
                (it = o.borderWidth) && p.css({
                    borderWidth: it,
                    borderStyle: "solid"
                });
                vi(p, {
                    borderColor1: "border-color",
                    borderColor2: "background-color",
                    borderOpacity: "opacity"
                })
            }
            for (gt = o.imageWidth / nt || 1,
            ni = o.imageHeight / d || 1,
            t.x1 != null && (gi(t.x1, t.y1, t.x2, t.y2),
            t.show = !t.hide),
            t.keys && (o.keys = n.extend({
                shift: 1,
                ctrl: "resize"
            }, t.keys)),
            y.addClass(o.classPrefix + "-outer"),
            pt.addClass(o.classPrefix + "-selection"),
            bt = 0; bt++ < 4; )
                n(k[bt - 1]).addClass(o.classPrefix + "-border" + bt);
            vi(pt, {
                selectionColor: "background-color",
                selectionOpacity: "opacity"
            });
            vi(k, {
                borderOpacity: "opacity",
                borderWidth: "border-width"
            });
            vi(y, {
                outerColor: "background-color",
                outerOpacity: "opacity"
            });
            (it = o.borderColor1) && n(k[0]).css({
                borderStyle: "solid",
                borderColor: it
            });
            (it = o.borderColor2) && n(k[1]).css({
                borderStyle: "dashed",
                borderColor: it
            });
            v.append(pt.add(k).add(oi).add(p));
            n.browser.msie && ((it = y.css("filter").match(/opacity=(\d+)/)) && y.css("opacity", it[1] / 100),
            (it = k.css("filter").match(/opacity=(\d+)/)) && k.css("opacity", it[1] / 100));
            t.hide ? tr(v.add(y)) : t.show && fr && (hi = !0,
            v.add(y).fadeIn(o.fadeSpeed || 0),
            nr());
            ft = (er = (o.aspectRatio || "").split(/:/))[0] / er[1];
            g.add(y).unbind("mousedown", cr);
            o.disable || o.enable === !1 ? (v.unbind("mousemove", yt).unbind("mousedown", sr),
            n(window).unbind("resize", lr)) : ((o.enable || o.disable === !1) && ((o.resizable || o.movable) && v.mousemove(yt).mousedown(sr),
            n(window).resize(lr)),
            o.persistent || g.add(y).mousedown(cr));
            o.enable = o.disable = undefined
        }
        var g = n(e), fr, v = f(), pt = f(), k = f().add(f()).add(f()).add(f()), y = f().add(f()).add(f()).add(f()), p = n([]), oi, w, b, rt = {
            left: 0,
            top: 0
        }, nt, d, wt, ct = {
            left: 0,
            top: 0
        }, ut = 0, si = "absolute", yi, pi, gt, ni, tt, ti, ii, wi, bi, ft, hi, h, c, l, a, s = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            width: 0,
            height: 0
        }, ki = document.documentElement, lt, er, bt, it, et, at, di, vr = function(n) {
            var t = o.keys, u, f, e = n.keyCode;
            if (u = !isNaN(t.alt) && (n.altKey || n.originalEvent.altKey) ? t.alt : !isNaN(t.ctrl) && n.ctrlKey ? t.ctrl : !isNaN(t.shift) && n.shiftKey ? t.shift : isNaN(t.arrows) ? 10 : t.arrows,
            t.arrows == "resize" || t.shift == "resize" && n.shiftKey || t.ctrl == "resize" && n.ctrlKey || t.alt == "resize" && (n.altKey || n.originalEvent.altKey)) {
                switch (e) {
                case 37:
                    u = -u;
                case 39:
                    f = i(h, l);
                    h = r(h, l);
                    l = i(f + u, h);
                    fi();
                    break;
                case 38:
                    u = -u;
                case 40:
                    f = i(c, a);
                    c = r(c, a);
                    a = i(f + u, c);
                    fi(!0);
                    break;
                default:
                    return
                }
                li()
            } else {
                h = r(h, l);
                c = r(c, a);
                switch (e) {
                case 37:
                    ei(i(h - u, w), c);
                    break;
                case 38:
                    ei(h, i(c - u, b));
                    break;
                case 39:
                    ei(h + r(u, nt - st(l)), c);
                    break;
                case 40:
                    ei(h, c + r(u, d - ht(a)));
                    break;
                default:
                    return
                }
            }
            return !1
        };
        for (this.remove = function() {
            ur({
                disable: !0
            });
            v.add(y).remove()
        }
        ,
        this.getOptions = function() {
            return o
        }
        ,
        this.setOptions = ur,
        this.getSelection = ot,
        this.setSelection = gi,
        this.cancelSelection = ai,
        this.update = nr,
        lt = g; lt.length; )
            ut = i(ut, isNaN(lt.css("z-index")) ? ut : lt.css("z-index")),
            lt.css("position") == "fixed" && (si = "fixed"),
            lt = lt.parent(":not(body)");
        ut = o.zIndex || ut;
        n.browser.msie && g.attr("unselectable", "on");
        n.imgAreaSelect.keyPress = n.browser.msie || n.browser.safari ? "keydown" : "keypress";
        n.browser.opera && (oi = f().css({
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: ut + 2 || 2
        }));
        v.add(y).css({
            visibility: "hidden",
            position: si,
            overflow: "hidden",
            zIndex: ut || "0"
        });
        v.css({
            zIndex: ut + 2 || 2
        });
        pt.add(k).css({
            position: "absolute",
            fontSize: 0
        });
        e.complete || e.readyState == "complete" || !g.is("img") ? ar() : g.one("load", ar);
        n.browser.msie && n.browser.version >= 7 && (e.src = e.src)
    }
    ;
    n.fn.imgAreaSelect = function(t) {
        return (t = t || {},
        this.each(function() {
            n(this).data("imgAreaSelect") ? t.remove ? (n(this).data("imgAreaSelect").remove(),
            n(this).removeData("imgAreaSelect")) : n(this).data("imgAreaSelect").setOptions(t) : t.remove || (t.enable === undefined && t.disable === undefined && (t.enable = !0),
            n(this).data("imgAreaSelect", new n.imgAreaSelect(this,t)))
        }),
        t.instance) ? n(this).data("imgAreaSelect") : this
    }
}(jQuery),
function(n) {
    function o(i, r, f, o) {
        var s = {
            data: o || o === 0 || o === !1 ? o : r ? r.data : {},
            _wrap: r ? r._wrap : null,
            tmpl: null,
            parent: r || null,
            nodes: [],
            calls: d,
            nest: g,
            wrap: nt,
            html: tt,
            update: it
        };
        return i && n.extend(s, i, {
            nodes: [],
            parent: r
        }),
        f && (s.tmpl = f,
        s._ctnt = s._ctnt || s.tmpl(n, s),
        s.key = ++e,
        (c.length ? u : t)[e] = s),
        s
    }
    function s(t, i, u) {
        var f, e = u ? n.map(u, function(n) {
            return typeof n == "string" ? t.key ? n.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + r + '="' + t.key + '" $2') : n : s(n, t, n._ctnt)
        }) : t;
        return i ? e : (e = e.join(""),
        e.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(t, i, r, u) {
            f = n(r).get();
            b(f);
            i && (f = l(i).concat(f));
            u && (f = f.concat(l(u)))
        }),
        f ? f : l(e))
    }
    function l(t) {
        var i = document.createElement("div");
        return i.innerHTML = t,
        n.makeArray(i.childNodes)
    }
    function p(t) {
        return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + n.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(t, i, r, u, f, e, o) {
            var c = n.tmpl.tag[r], l, s, a;
            if (!c)
                throw "Unknown template tag: " + r;
            return l = c._default || [],
            e && !/\w$/.test(f) && (f += e,
            e = ""),
            f ? (f = h(f),
            o = o ? "," + h(o) + ")" : e ? ")" : "",
            s = e ? f.indexOf(".") > -1 ? f + h(e) : "(" + f + ").call($item" + o : f,
            a = e ? s : "(typeof(" + f + ")==='function'?(" + f + ").call($item):(" + f + "))") : a = s = l.$1 || "null",
            u = h(u),
            "');" + c[i ? "close" : "open"].split("$notnull_1").join(f ? "typeof(" + f + ")!=='undefined' && (" + f + ")!=null" : "true").split("$1a").join(a).split("$1").join(s).split("$2").join(u || l.$2 || "") + "__.push('"
        }) + "');}return __;")
    }
    function w(t, i) {
        t._wrap = s(t, !0, n.isArray(i) ? i : [v.test(i) ? i : n(i).html()]).join("")
    }
    function h(n) {
        return n ? n.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }
    function k(n) {
        var t = document.createElement("div");
        return t.appendChild(n.cloneNode(!0)),
        t.innerHTML
    }
    function b(f) {
        function p(f) {
            function p(n) {
                n = n + a;
                s = v[n] = v[n] || o(s, t[s.parent.key + a] || s.parent)
            }
            var y, h = f, c, s, l;
            if (l = f.getAttribute(r)) {
                while (h.parentNode && (h = h.parentNode).nodeType === 1 && !(y = h.getAttribute(r)))
                    ;
                y !== l && (h = h.parentNode ? h.nodeType === 11 ? 0 : h.getAttribute(r) || 0 : 0,
                (s = t[l]) || (s = u[l],
                s = o(s, t[h] || u[h]),
                s.key = ++e,
                t[e] = s),
                i && p(l));
                f.removeAttribute(r)
            } else
                i && (s = n.data(f, "tmplItem")) && (p(s.key),
                t[s.key] = s,
                h = n.data(f.parentNode, "tmplItem"),
                h = h ? h.key : 0);
            if (s) {
                for (c = s; c && c.key != h; )
                    c.nodes.push(f),
                    c = c.parent;
                delete s._ctnt;
                delete s._wrap;
                n.data(f, "tmplItem", s)
            }
        }
        for (var a = "_" + i, c, l, v = {}, h, s = 0, y = f.length; s < y; s++)
            if ((c = f[s]).nodeType === 1) {
                for (l = c.getElementsByTagName("*"),
                h = l.length - 1; h >= 0; h--)
                    p(l[h]);
                p(c)
            }
    }
    function d(n, t, i, r) {
        if (!n)
            return c.pop();
        c.push({
            _: n,
            tmpl: t,
            item: this,
            data: i,
            options: r
        })
    }
    function g(t, i, r) {
        return n.tmpl(n.template(t), i, r, this)
    }
    function nt(t, i) {
        var r = t.options || {};
        return r.wrapped = i,
        n.tmpl(n.template(t.tmpl), t.data, r, t.item)
    }
    function tt(t, i) {
        var r = this._wrap;
        return n.map(n(n.isArray(r) ? r.join("") : r).filter(t || "*"), function(n) {
            return i ? n.innerText || n.textContent : n.outerHTML || k(n)
        })
    }
    function it() {
        var t = this.nodes;
        n.tmpl(null, null, null, this).insertBefore(t[0]);
        n(t).remove()
    }
    var a = n.fn.domManip, r = "_tmplitem", v = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, t = {}, u = {}, f, y = {
        key: 0,
        data: {}
    }, e = 0, i = 0, c = [];
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(r, u) {
        n.fn[r] = function(e) {
            var o = [], h = n(e), c, s, a, v, l = this.length === 1 && this[0].parentNode;
            if (f = t || {},
            l && l.nodeType === 11 && l.childNodes.length === 1 && h.length === 1)
                h[u](this[0]),
                o = this;
            else {
                for (s = 0,
                a = h.length; s < a; s++)
                    i = s,
                    c = (s > 0 ? this.clone(!0) : this).get(),
                    n(h[s])[u](c),
                    o = o.concat(c);
                i = 0;
                o = this.pushStack(o, r, h.selector)
            }
            return v = f,
            f = null,
            n.tmpl.complete(v),
            o
        }
    });
    n.fn.extend({
        tmpl: function(t, i, r) {
            return n.tmpl(this[0], t, i, r)
        },
        tmplItem: function() {
            return n.tmplItem(this[0])
        },
        template: function(t) {
            return n.template(t, this[0])
        },
        domManip: function(r, u, e) {
            if (r[0] && n.isArray(r[0])) {
                for (var o = n.makeArray(arguments), s = r[0], l = s.length, h = 0, c; h < l && !(c = n.data(s[h++], "tmplItem")); )
                    ;
                c && i && (o[2] = function(t) {
                    n.tmpl.afterManip(this, t, e)
                }
                );
                a.apply(this, o)
            } else
                a.apply(this, arguments);
            return i = 0,
            f || n.tmpl.complete(t),
            this
        }
    });
    n.extend({
        tmpl: function(i, r, f, e) {
            var h, c = !e;
            if (c)
                e = y,
                i = n.template[i] || n.template(null, i),
                u = {};
            else if (!i)
                return i = e.tmpl,
                t[e.key] = e,
                e.nodes = [],
                e.wrapped && w(e, e.wrapped),
                n(s(e, null, e.tmpl(n, e)));
            return i ? (typeof r == "function" && (r = r.call(e || {})),
            f && f.wrapped && w(f, f.wrapped),
            h = n.isArray(r) ? n.map(r, function(n) {
                return n ? o(f, e, i, n) : null
            }) : [o(f, e, i, r)],
            c ? n(s(e, null, h)) : h) : []
        },
        tmplItem: function(t) {
            var i;
            for (t instanceof n && (t = t[0]); t && t.nodeType === 1 && !(i = n.data(t, "tmplItem")) && (t = t.parentNode); )
                ;
            return i || y
        },
        template: function(t, i) {
            return i ? (typeof i == "string" ? i = p(i) : i instanceof n && (i = i[0] || {}),
            i.nodeType && (i = n.data(i, "tmpl") || n.data(i, "tmpl", p(i.innerHTML))),
            typeof t == "string" ? n.template[t] = i : i) : t ? typeof t != "string" ? n.template(null, t) : n.template[t] || n.template(null, v.test(t) ? t : n(t)) : null
        },
        encode: function(n) {
            return ("" + n).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    });
    n.extend(n.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){__.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){__.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function() {
            t = {}
        },
        afterManip: function(t, r, u) {
            var f = r.nodeType === 11 ? n.makeArray(r.childNodes) : r.nodeType === 1 ? [r] : [];
            u.call(t, r);
            b(f);
            i++
        }
    })
}(jQuery),
function(n) {
    "use strict";
    var t = 0;
    n.ajaxTransport("iframe", function(i) {
        if (i.type === "POST" || i.type === "GET") {
            var r, u;
            return {
                send: function(f, e) {
                    r = n('<form style="display:none;"><\/form>');
                    u = n('<iframe src="javascript:false;" name="iframe-transport-' + (t += 1) + '"><\/iframe>').bind("load", function() {
                        var t;
                        u.unbind("load").bind("load", function() {
                            var t;
                            try {
                                if (t = u.contents(),
                                !t.length || !t[0].firstChild)
                                    throw new Error;
                            } catch (i) {
                                t = undefined
                            }
                            e(200, "success", {
                                iframe: t
                            });
                            n('<iframe src="javascript:false;"><\/iframe>').appendTo(r);
                            r.remove()
                        });
                        r.prop("target", u.prop("name")).prop("action", i.url).prop("method", i.type);
                        i.formData && n.each(i.formData, function(t, i) {
                            n('<input type="hidden"/>').prop("name", i.name).val(i.value).appendTo(r)
                        });
                        i.fileInput && i.fileInput.length && i.type === "POST" && (t = i.fileInput.clone(),
                        i.fileInput.after(function(n) {
                            return t[n]
                        }),
                        i.paramName && i.fileInput.each(function() {
                            n(this).prop("name", i.paramName)
                        }),
                        r.append(i.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data"));
                        r.submit();
                        t && t.length && i.fileInput.each(function(i, r) {
                            var u = n(t[i]);
                            n(r).prop("name", u.prop("name"));
                            u.replaceWith(r)
                        })
                    });
                    r.append(u).appendTo("body")
                },
                abort: function() {
                    u && u.unbind("load").prop("src", "javascript".concat(":false;"));
                    r && r.remove()
                }
            }
        }
    });
    n.ajaxSetup({
        converters: {
            "iframe text": function(n) {
                return n.text()
            },
            "iframe json": function(t) {
                return n.parseJSON(t.text())
            },
            "iframe html": function(n) {
                return n.find("body").html()
            },
            "iframe script": function(t) {
                return n.globalEval(t.text())
            }
        }
    })
}(jQuery),
function(n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery", "jquery.ui.widget"], n) : n(window.jQuery)
}(function(n) {
    "use strict";
    n.support.xhrFileUpload = !!(window.XMLHttpRequestUpload && window.FileReader);
    n.support.xhrFormDataFileUpload = !!window.FormData;
    n.widget("blueimp.fileupload", {
        options: {
            namespace: undefined,
            dropZone: n(document),
            pasteZone: n(document),
            fileInput: undefined,
            replaceFileInput: !0,
            paramName: undefined,
            singleFileUploads: !0,
            limitMultiFileUploads: undefined,
            sequentialUploads: !1,
            limitConcurrentUploads: undefined,
            forceIframeTransport: !1,
            redirect: undefined,
            redirectParamName: undefined,
            postMessage: undefined,
            multipart: !0,
            maxChunkSize: undefined,
            uploadedBytes: undefined,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            formData: function(n) {
                return n.serializeArray()
            },
            add: function(n, t) {
                t.submit()
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _refreshOptionsList: ["namespace", "fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _BitrateTimer: function() {
            this.timestamp = +new Date;
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function(n, t, i) {
                var r = n - this.timestamp;
                return (!this.bitrate || !i || r > i) && (this.bitrate = (t - this.loaded) * (1e3 / r) * 8,
                this.loaded = t,
                this.timestamp = n),
                this.bitrate
            }
        },
        _isXHRUpload: function(t) {
            return !t.forceIframeTransport && (!t.multipart && n.support.xhrFileUpload || n.support.xhrFormDataFileUpload)
        },
        _getFormData: function(t) {
            var i;
            return typeof t.formData == "function" ? t.formData(t.form) : n.isArray(t.formData) ? t.formData : t.formData ? (i = [],
            n.each(t.formData, function(n, t) {
                i.push({
                    name: n,
                    value: t
                })
            }),
            i) : []
        },
        _getTotal: function(t) {
            var i = 0;
            return n.each(t, function(n, t) {
                i += t.size || 1
            }),
            i
        },
        _onProgress: function(n, t) {
            if (n.lengthComputable) {
                var i = +new Date, u, r;
                if (t._time && t.progressInterval && i - t._time < t.progressInterval && n.loaded !== n.total)
                    return;
                t._time = i;
                u = t.total || this._getTotal(t.files);
                r = parseInt(n.loaded / n.total * (t.chunkSize || u), 10) + (t.uploadedBytes || 0);
                this._loaded += r - (t.loaded || t.uploadedBytes || 0);
                t.lengthComputable = !0;
                t.loaded = r;
                t.total = u;
                t.bitrate = t._bitrateTimer.getBitrate(i, r, t.bitrateInterval);
                this._trigger("progress", n, t);
                this._trigger("progressall", n, {
                    lengthComputable: !0,
                    loaded: this._loaded,
                    total: this._total,
                    bitrate: this._bitrateTimer.getBitrate(i, this._loaded, t.bitrateInterval)
                })
            }
        },
        _initProgressListener: function(t) {
            var r = this
              , i = t.xhr ? t.xhr() : n.ajaxSettings.xhr();
            i.upload && (n(i.upload).bind("progress", function(n) {
                var i = n.originalEvent;
                n.lengthComputable = i.lengthComputable;
                n.loaded = i.loaded;
                n.total = i.total;
                r._onProgress(n, t)
            }),
            t.xhr = function() {
                return i
            }
            )
        },
        _initXHRData: function(t) {
            var i, r = t.files[0], f = t.multipart || !n.support.xhrFileUpload, u = t.paramName[0];
            (!f || t.blob) && (t.headers = n.extend(t.headers, {
                "X-File-Name": r.name,
                "X-File-Type": r.type,
                "X-File-Size": r.size
            }),
            t.blob ? f || (t.contentType = "application/octet-stream",
            t.data = t.blob) : (t.contentType = r.type,
            t.data = r));
            f && n.support.xhrFormDataFileUpload && (t.postMessage ? (i = this._getFormData(t),
            t.blob ? i.push({
                name: u,
                value: t.blob
            }) : n.each(t.files, function(n, r) {
                i.push({
                    name: t.paramName[n] || u,
                    value: r
                })
            })) : (t.formData instanceof FormData ? i = t.formData : (i = new FormData,
            n.each(this._getFormData(t), function(n, t) {
                i.append(t.name, t.value)
            })),
            t.blob ? i.append(u, t.blob, r.name) : n.each(t.files, function(n, r) {
                r instanceof Blob && i.append(t.paramName[n] || u, r, r.name)
            })),
            t.data = i);
            t.blob = null
        },
        _initIframeSettings: function(t) {
            t.dataType = "iframe " + (t.dataType || "");
            t.formData = this._getFormData(t);
            t.redirect && n("<a><\/a>").prop("href", t.url).prop("host") !== location.host && t.formData.push({
                name: t.redirectParamName || "redirect",
                value: t.redirect
            })
        },
        _initDataSettings: function(n) {
            this._isXHRUpload(n) ? (this._chunkedUpload(n, !0) || (n.data || this._initXHRData(n),
            this._initProgressListener(n)),
            n.postMessage && (n.dataType = "postmessage " + (n.dataType || ""))) : this._initIframeSettings(n, "iframe")
        },
        _getParamName: function(t) {
            var r = n(t.fileInput)
              , i = t.paramName;
            return i ? n.isArray(i) || (i = [i]) : (i = [],
            r.each(function() {
                for (var t = n(this), u = t.prop("name") || "files[]", r = (t.prop("files") || [1]).length; r; )
                    i.push(u),
                    r -= 1
            }),
            i.length || (i = [r.prop("name") || "files[]"])),
            i
        },
        _initFormSettings: function(t) {
            t.form && t.form.length || (t.form = n(t.fileInput.prop("form")),
            t.form.length || (t.form = n(this.options.fileInput.prop("form"))));
            t.paramName = this._getParamName(t);
            t.url || (t.url = t.form.prop("action") || location.href);
            t.type = (t.type || t.form.prop("method") || "").toUpperCase();
            t.type !== "POST" && t.type !== "PUT" && (t.type = "POST");
            t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
        },
        _getAJAXSettings: function(t) {
            var i = n.extend({}, this.options, t);
            return this._initFormSettings(i),
            this._initDataSettings(i),
            i
        },
        _enhancePromise: function(n) {
            return n.success = n.done,
            n.error = n.fail,
            n.complete = n.always,
            n
        },
        _getXHRPromise: function(t, i, r) {
            var u = n.Deferred()
              , f = u.promise();
            return i = i || this.options.context || f,
            t === !0 ? u.resolveWith(i, r) : t === !1 && u.rejectWith(i, r),
            f.abort = u.promise,
            this._enhancePromise(f)
        },
        _chunkedUpload: function(t, i) {
            var u = this, r = t.files[0], e = r.size, f = t.uploadedBytes = t.uploadedBytes || 0, o = t.maxChunkSize || e, a = r.slice || r.webkitSlice || r.mozSlice, s, h, c, l;
            return !(this._isXHRUpload(t) && a && (f || o < e)) || t.data ? !1 : i ? !0 : f >= e ? (r.error = "Uploaded bytes exceed file size",
            this._getXHRPromise(!1, t.context, [null, "error", r.error])) : (h = Math.ceil((e - f) / o),
            s = function(i) {
                return i ? s(i -= 1).pipe(function() {
                    var e = n.extend({}, t);
                    return e.blob = a.call(r, f + i * o, f + (i + 1) * o),
                    e.chunkIndex = i,
                    e.chunksNumber = h,
                    e.chunkSize = e.blob.size,
                    u._initXHRData(e),
                    u._initProgressListener(e),
                    c = (n.ajax(e) || u._getXHRPromise(!1, e.context)).done(function() {
                        e.loaded || u._onProgress(n.Event("progress", {
                            lengthComputable: !0,
                            loaded: e.chunkSize,
                            total: e.chunkSize
                        }), e);
                        t.uploadedBytes = e.uploadedBytes += e.chunkSize
                    })
                }) : u._getXHRPromise(!0, t.context)
            }
            ,
            l = s(h),
            l.abort = function() {
                return c.abort()
            }
            ,
            this._enhancePromise(l))
        },
        _beforeSend: function(n, t) {
            this._active === 0 && (this._trigger("start"),
            this._bitrateTimer = new this._BitrateTimer);
            this._active += 1;
            this._loaded += t.uploadedBytes || 0;
            this._total += this._getTotal(t.files)
        },
        _onDone: function(t, i, r, u) {
            this._isXHRUpload(u) || this._onProgress(n.Event("progress", {
                lengthComputable: !0,
                loaded: 1,
                total: 1
            }), u);
            u.result = t;
            u.textStatus = i;
            u.jqXHR = r;
            this._trigger("done", null, u)
        },
        _onFail: function(n, t, i, r) {
            r.jqXHR = n;
            r.textStatus = t;
            r.errorThrown = i;
            this._trigger("fail", null, r);
            r.recalculateProgress && (this._loaded -= r.loaded || r.uploadedBytes || 0,
            this._total -= r.total || this._getTotal(r.files))
        },
        _onAlways: function(n, t, i, r) {
            this._active -= 1;
            r.textStatus = t;
            i && i.always ? (r.jqXHR = i,
            r.result = n) : (r.jqXHR = n,
            r.errorThrown = i);
            this._trigger("always", null, r);
            this._active === 0 && (this._trigger("stop"),
            this._loaded = this._total = 0,
            this._bitrateTimer = null)
        },
        _onSend: function(t, i) {
            var r = this, f, e, o, u = r._getAJAXSettings(i), s = function(i, e) {
                return r._sending += 1,
                u._bitrateTimer = new r._BitrateTimer,
                f = f || (i !== !1 && r._trigger("send", t, u) !== !1 && (r._chunkedUpload(u) || n.ajax(u)) || r._getXHRPromise(!1, u.context, e)).done(function(n, t, i) {
                    r._onDone(n, t, i, u)
                }).fail(function(n, t, i) {
                    r._onFail(n, t, i, u)
                }).always(function(n, t, i) {
                    if (r._sending -= 1,
                    r._onAlways(n, t, i, u),
                    u.limitConcurrentUploads && u.limitConcurrentUploads > r._sending)
                        for (var f = r._slots.shift(), e; f; ) {
                            if (e = f.state ? f.state() === "pending" : !f.isRejected(),
                            e) {
                                f.resolve();
                                break
                            }
                            f = r._slots.shift()
                        }
                })
            };
            return (this._beforeSend(t, u),
            this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending) ? (this.options.limitConcurrentUploads > 1 ? (e = n.Deferred(),
            this._slots.push(e),
            o = e.pipe(s)) : o = this._sequence = this._sequence.pipe(s, s),
            o.abort = function() {
                var n = [undefined, "abort", "abort"];
                return f ? f.abort() : (e && e.rejectWith(o, n),
                s(!1, n))
            }
            ,
            this._enhancePromise(o)) : s()
        },
        _onAdd: function(t, i) {
            var c = this, l = !0, u = n.extend({}, this.options, i), f = u.limitMultiFileUploads, s = this._getParamName(u), e, h, o, r;
            if ((u.singleFileUploads || f) && this._isXHRUpload(u))
                if (!u.singleFileUploads && f)
                    for (o = [],
                    e = [],
                    r = 0; r < i.files.length; r += f)
                        o.push(i.files.slice(r, r + f)),
                        h = s.slice(r, r + f),
                        h.length || (h = s),
                        e.push(h);
                else
                    e = s;
            else
                o = [i.files],
                e = [s];
            return i.originalFiles = i.files,
            n.each(o || i.files, function(r, u) {
                var f = n.extend({}, i);
                return f.files = o ? u : [u],
                f.paramName = e[r],
                f.submit = function() {
                    return f.jqXHR = this.jqXHR = c._trigger("submit", t, this) !== !1 && c._onSend(t, this),
                    this.jqXHR
                }
                ,
                l = c._trigger("add", t, f)
            }),
            l
        },
        _replaceFileInput: function(t) {
            var i = t.clone(!0);
            n("<form><\/form>").append(i)[0].reset();
            t.after(i).detach();
            n.cleanData(t.unbind("remove"));
            this.options.fileInput = this.options.fileInput.map(function(n, r) {
                return r === t[0] ? i[0] : r
            });
            t[0] === this.element[0] && (this.element = i)
        },
        _handleFileTreeEntry: function(t, i) {
            var e = this, r = n.Deferred(), u = function(n) {
                n && !n.entry && (n.entry = t);
                r.resolve([n])
            }, f;
            return i = i || "",
            t.isFile ? t._file ? (t._file.relativePath = i,
            r.resolve(t._file)) : t.file(function(n) {
                n.relativePath = i;
                r.resolve(n)
            }, u) : t.isDirectory ? (f = t.createReader(),
            f.readEntries(function(n) {
                e._handleFileTreeEntries(n, i + t.name + "/").done(function(n) {
                    r.resolve(n)
                }).fail(u)
            }, u)) : r.resolve([]),
            r.promise()
        },
        _handleFileTreeEntries: function(t, i) {
            var r = this;
            return n.when.apply(n, n.map(t, function(n) {
                return r._handleFileTreeEntry(n, i)
            })).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function(t) {
            t = t || {};
            var i = t.items;
            return i && i.length && (i[0].webkitGetAsEntry || i[0].getAsEntry) ? this._handleFileTreeEntries(n.map(i, function(n) {
                var t;
                return n.webkitGetAsEntry ? (t = n.webkitGetAsEntry(),
                t._file = n.getAsFile(),
                t) : n.getAsEntry()
            })) : n.Deferred().resolve(n.makeArray(t.files)).promise()
        },
        _getSingleFileInputFiles: function(t) {
            t = n(t);
            var r = t.prop("webkitEntries") || t.prop("entries"), i, u;
            if (r && r.length)
                return this._handleFileTreeEntries(r);
            if (i = n.makeArray(t.prop("files")),
            !i.length) {
                if (u = t.prop("value"),
                !u)
                    return n.Deferred().resolve([]).promise();
                i = [{
                    name: u.replace(/^.*\\/, "")
                }]
            }
            return n.Deferred().resolve(i).promise()
        },
        _getFileInputFiles: function(t) {
            return !(t instanceof n) || t.length === 1 ? this._getSingleFileInputFiles(t) : n.when.apply(n, n.map(t, this._getSingleFileInputFiles)).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _onChange: function(t) {
            var i = t.data.fileupload
              , r = {
                fileInput: n(t.target),
                form: n(t.target.form)
            };
            i._getFileInputFiles(r.fileInput).always(function(n) {
                r.files = n;
                i.options.replaceFileInput && i._replaceFileInput(r.fileInput);
                i._trigger("change", t, r) !== !1 && i._onAdd(t, r)
            })
        },
        _onPaste: function(t) {
            var r = t.data.fileupload
              , u = t.originalEvent.clipboardData
              , f = u && u.items || []
              , i = {
                files: []
            };
            return n.each(f, function(n, t) {
                var r = t.getAsFile && t.getAsFile();
                console.log(r);
                r && i.files.push(r)
            }),
            r._trigger("paste", t, i) === !1 || r._onAdd(t, i) === !1 ? !1 : void 0
        },
        _onDrop: function(n) {
            n.preventDefault();
            var t = n.data.fileupload
              , r = n.dataTransfer = n.originalEvent.dataTransfer
              , i = {};
            t._getDroppedFiles(r).always(function(r) {
                i.files = r;
                t._trigger("drop", n, i) !== !1 && t._onAdd(n, i)
            })
        },
        _onDragOver: function(n) {
            var i = n.data.fileupload
              , t = n.dataTransfer = n.originalEvent.dataTransfer;
            if (i._trigger("dragover", n) === !1)
                return !1;
            t && (t.dropEffect = "copy");
            n.preventDefault()
        },
        _initEventHandlers: function() {
            var n = this.options.namespace;
            this._isXHRUpload(this.options) && (this.options.dropZone.bind("dragover." + n, {
                fileupload: this
            }, this._onDragOver).bind("drop." + n, {
                fileupload: this
            }, this._onDrop),
            this.options.pasteZone.bind("paste." + n, {
                fileupload: this
            }, this._onPaste));
            this.options.fileInput.bind("change." + n, {
                fileupload: this
            }, this._onChange)
        },
        _destroyEventHandlers: function() {
            var n = this.options.namespace;
            this.options.dropZone.unbind("dragover." + n, this._onDragOver).unbind("drop." + n, this._onDrop);
            this.options.pasteZone.unbind("paste." + n, this._onPaste);
            this.options.fileInput.unbind("change." + n, this._onChange)
        },
        _setOption: function(t, i) {
            var r = n.inArray(t, this._refreshOptionsList) !== -1;
            r && this._destroyEventHandlers();
            n.Widget.prototype._setOption.call(this, t, i);
            r && (this._initSpecialOptions(),
            this._initEventHandlers())
        },
        _initSpecialOptions: function() {
            var t = this.options;
            t.fileInput === undefined ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof n || (t.fileInput = n(t.fileInput));
            t.dropZone instanceof n || (t.dropZone = n(t.dropZone));
            t.pasteZone instanceof n || (t.pasteZone = n(t.pasteZone))
        },
        _create: function() {
            var t = this.options;
            n.extend(t, n(this.element[0].cloneNode(!1)).data());
            t.namespace = t.namespace || this.widgetName;
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(!0);
            this._sending = this._active = this._loaded = this._total = 0;
            this._initEventHandlers()
        },
        destroy: function() {
            this._destroyEventHandlers();
            n.Widget.prototype.destroy.call(this)
        },
        enable: function() {
            var t = !1;
            this.options.disabled && (t = !0);
            n.Widget.prototype.enable.call(this);
            t && this._initEventHandlers()
        },
        disable: function() {
            this.options.disabled || this._destroyEventHandlers();
            n.Widget.prototype.disable.call(this)
        },
        add: function(t) {
            var i = this;
            t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function(n) {
                t.files = n;
                i._onAdd(null, t)
            }) : (t.files = n.makeArray(t.files),
            this._onAdd(null, t)))
        },
        send: function(t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    var e = this, i = n.Deferred(), r = i.promise(), u, f;
                    return r.abort = function() {
                        return (f = !0,
                        u) ? u.abort() : (i.reject(null, "abort", "abort"),
                        r)
                    }
                    ,
                    this._getFileInputFiles(t.fileInput).always(function(n) {
                        f || (t.files = n,
                        u = e._onSend(null, t).then(function(n, t, r) {
                            i.resolve(n, t, r)
                        }, function(n, t, r) {
                            i.reject(n, t, r)
                        }))
                    }),
                    this._enhancePromise(r)
                }
                if (t.files = n.makeArray(t.files),
                t.files.length)
                    return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
}),
new function(n) {
    var i = n.separator || "&"
      , t = n.spaces === !1 ? !1 : !0
      , e = n.suffix === !1 ? "" : "[]"
      , r = n.prefix === !1 ? !1 : !0
      , u = r ? n.hash === !0 ? "#" : "?" : ""
      , f = n.numbers === !1 ? !1 : !0;
    jQuery.query = new function() {
        var n = function(n, t) {
            return n != undefined && n !== null && (!t ? !0 : n.constructor == t)
        }
          , o = function(n) {
            for (var t, u = /\[([^[]*)\]/g, i = /^([^[]+)(\[.*\])?$/.exec(n), f = i[1], r = []; t = u.exec(i[2]); )
                r.push(t[1]);
            return [f, r]
        }
          , r = function(t, i, u) {
            var e = i.shift(), o, s, f;
            if (typeof t != "object" && (t = null),
            e === "")
                if (t || (t = []),
                n(t, Array))
                    t.push(i.length == 0 ? u : r(null, i.slice(0), u));
                else if (n(t, Object)) {
                    for (f = 0; t[f++] != null; )
                        ;
                    t[--f] = i.length == 0 ? u : r(t[f], i.slice(0), u)
                } else
                    t = [],
                    t.push(i.length == 0 ? u : r(null, i.slice(0), u));
            else if (e && e.match(/^\s*[0-9]+\s*$/))
                o = parseInt(e, 10),
                t || (t = []),
                t[o] = i.length == 0 ? u : r(t[o], i.slice(0), u);
            else if (e) {
                if (o = e.replace(/^\s*|\s*$/g, ""),
                t || (t = {}),
                n(t, Array)) {
                    for (s = {},
                    f = 0; f < t.length; ++f)
                        s[f] = t[f];
                    t = s
                }
                t[o] = i.length == 0 ? u : r(t[o], i.slice(0), u)
            } else
                return u;
            return t
        }
          , e = function(n) {
            var i = this;
            return i.keys = {},
            n.queryObject ? jQuery.each(n.get(), function(n, t) {
                i.SET(n, t)
            }) : jQuery.each(arguments, function() {
                var n = "" + this;
                n = n.replace(/^[?#]/, "");
                n = n.replace(/[;&]$/, "");
                t && (n = n.replace(/[+]/g, " "));
                jQuery.each(n.split(/[&;]/), function() {
                    var t = decodeURIComponent(this.split("=")[0] || "")
                      , n = decodeURIComponent(this.split("=")[1] || "");
                    t && (f && (/^[+-]?[0-9]+\.[0-9]*$/.test(n) ? n = parseFloat(n) : /^[+-]?[0-9]+$/.test(n) && (n = parseInt(n, 10))),
                    n = !n && n !== 0 ? !0 : n,
                    n !== !1 && n !== !0 && typeof n != "number" && (n = n),
                    i.SET(t, n))
                })
            }),
            i
        };
        return e.prototype = {
            queryObject: !0,
            has: function(t, i) {
                var r = this.get(t);
                return n(r, i)
            },
            GET: function(t) {
                if (!n(t))
                    return this.keys;
                for (var r = o(t), f = r[0], u = r[1], i = this.keys[f]; i != null && u.length != 0; )
                    i = i[u.shift()];
                return typeof i == "number" ? i : i || ""
            },
            get: function(t) {
                var i = this.GET(t);
                return n(i, Object) ? jQuery.extend(!0, {}, i) : n(i, Array) ? i.slice(0) : i
            },
            SET: function(t, i) {
                var e = n(i) ? i : null
                  , u = o(t)
                  , f = u[0]
                  , s = u[1]
                  , h = this.keys[f];
                return this.keys[f] = r(h, s.slice(0), e),
                this
            },
            set: function(n, t) {
                return this.copy().SET(n, t)
            },
            REMOVE: function(n) {
                return this.SET(n, null).COMPACT()
            },
            remove: function(n) {
                return this.copy().REMOVE(n)
            },
            EMPTY: function() {
                var n = this;
                return jQuery.each(n.keys, function(t) {
                    delete n.keys[t]
                }),
                n
            },
            load: function(n) {
                var t = n.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1")
                  , i = n.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new e(n.length == i.length ? "" : i,n.length == t.length ? "" : t)
            },
            empty: function() {
                return this.copy().EMPTY()
            },
            copy: function() {
                return new e(this)
            },
            COMPACT: function() {
                function t(i) {
                    var r = typeof i == "object" ? n(i, Array) ? [] : {} : i;
                    if (typeof i == "object") {
                        function u(t, i, r) {
                            n(t, Array) ? t.push(r) : t[i] = r
                        }
                        jQuery.each(i, function(i, f) {
                            if (!n(f))
                                return !0;
                            u(r, i, t(f))
                        })
                    }
                    return r
                }
                return this.keys = t(this.keys),
                this
            },
            compact: function() {
                return this.copy().COMPACT()
            },
            toString: function() {
                var r = []
                  , f = []
                  , h = this
                  , e = function(n) {
                    return n = n + "",
                    t && (n = n.replace(/ /g, "+")),
                    encodeURIComponent(n)
                }
                  , s = function(t, i, r) {
                    if (n(r) && r !== !1) {
                        var u = [e(i)];
                        r !== !0 && (u.push("="),
                        u.push(e(r)));
                        t.push(u.join(""))
                    }
                }
                  , o = function(n, t) {
                    var i = function(n) {
                        return !t || t == "" ? [n].join("") : [t, "[", n, "]"].join("")
                    };
                    jQuery.each(n, function(n, t) {
                        typeof t == "object" ? o(t, i(n)) : s(f, i(n), t)
                    })
                };
                return o(this.keys),
                f.length > 0 && r.push(u),
                r.push(f.join(i)),
                r.join("")
            }
        },
        new e(location.search,location.hash)
    }
}
(jQuery.query || {});
mutate_event_stack = [{
    name: "width",
    handler: function(t) {
        return (n = {
            el: t
        },
        $(n.el).data("mutate-width") || $(n.el).data("mutate-width", $(n.el).width()),
        $(n.el).data("mutate-width") && $(n.el).width() != $(n.el).data("mutate-width")) ? ($(n.el).data("mutate-width", $(n.el).width()),
        !0) : !1
    }
}, {
    name: "height",
    handler: function(n) {
        return element = n,
        $(element).data("mutate-height") || $(element).data("mutate-height", $(element).height()),
        $(element).data("mutate-height") && $(element).height() != $(element).data("mutate-height") ? ($(element).data("mutate-height", $(element).height()),
        !0) : void 0
    }
}, {
    name: "top",
    handler: function(n) {
        return $(n).data("mutate-top") || $(n).data("mutate-top", $(n).css("top")),
        $(n).data("mutate-top") && $(n).css("top") != $(n).data("mutate-top") ? ($(n).data("mutate-top", $(n).css("top")),
        !0) : void 0
    }
}, {
    name: "bottom",
    handler: function(n) {
        return $(n).data("mutate-bottom") || $(n).data("mutate-bottom", $(n).css("bottom")),
        $(n).data("mutate-bottom") && $(n).css("bottom") != $(n).data("mutate-bottom") ? ($(n).data("mutate-bottom", $(n).css("bottom")),
        !0) : void 0
    }
}, {
    name: "right",
    handler: function(n) {
        return $(n).data("mutate-right") || $(n).data("mutate-right", $(n).css("right")),
        $(n).data("mutate-right") && $(n).css("right") != $(n).data("mutate-right") ? ($(n).data("mutate-right", $(n).css("right")),
        !0) : void 0
    }
}, {
    name: "left",
    handler: function(n) {
        return $(n).data("mutate-left") || $(n).data("mutate-left", $(n).css("left")),
        $(n).data("mutate-left") && $(n).css("left") != $(n).data("mutate-left") ? ($(n).data("mutate-left", $(n).css("left")),
        !0) : void 0
    }
}, {
    name: "hide",
    handler: function(n) {
        if ($(n).is(":hidden"))
            return !0
    }
}, {
    name: "show",
    handler: function(n) {
        if ($(n).is(":visible"))
            return !0
    }
}, {
    name: "scrollHeight",
    handler: function(n) {
        return $(n).data("prev-scrollHeight") || $(n).data("prev-scrollHeight", $(n)[0].scrollHeight),
        $(n).data("prev-scrollHeight") && $(n)[0].scrollHeight != $(n).data("prev-scrollHeight") ? ($(n).data("prev-scrollHeight", $(n)[0].scrollHeight),
        !0) : void 0
    }
}, {
    name: "scrollWidth",
    handler: function(n) {
        return $(n).data("prev-scrollWidth") || $(n).data("prev-scrollWidth", $(n)[0].scrollWidth),
        $(n).data("prev-scrollWidth") && $(n)[0].scrollWidth != $(n).data("prev-scrollWidth") ? ($(n).data("prev-scrollWidth", $(n)[0].scrollWidth),
        !0) : void 0
    }
}, {
    name: "scrollTop",
    handler: function(n) {
        return $(n).data("prev-scrollTop") || $(n).data("prev-scrollTop", $(n)[0].scrollTop()),
        $(n).data("prev-scrollTop") && $(n)[0].scrollTop() != $(n).data("prev-scrollTop") ? ($(n).data("prev-scrollTop", $(n)[0].scrollTop()),
        !0) : void 0
    }
}, {
    name: "scrollLeft",
    handler: function(n) {
        return $(n).data("prev-scrollLeft") || $(n).data("prev-scrollLeft", $(n)[0].scrollLeft()),
        $(n).data("prev-scrollLeft") && $(n)[0].scrollLeft() != $(n).data("prev-scrollLeft") ? ($(n).data("prev-scrollLeft", $(n)[0].scrollLeft()),
        !0) : void 0
    }
}],
function(n) {
    function t() {
        var i = mutate;
        i.event_stack != "undefined" && i.event_stack.length && n.each(i.event_stack, function(n, t) {
            mutate.add_event(t)
        });
        i.event_stack = [];
        n.each(i.stack, function(t, r) {
            n(r.selector).each(function(n, t) {
                i.events[r.event_name](t) === !0 ? r.callback && r.callback(t, r) : r.false_callback && r.false_callback(t, r)
            })
        });
        setTimeout(t, mutate.speed)
    }
    mutate = {
        speed: 100,
        event_stack: mutate_event_stack,
        stack: [],
        events: {},
        add_event: function(n) {
            mutate.events[n.name] = n.handler
        },
        add: function(n, t, i, r) {
            mutate.stack[mutate.stack.length] = {
                event_name: n,
                selector: t,
                callback: i,
                false_callback: r
            }
        }
    };
    t();
    n.fn.extend({
        mutate: function() {
            var t = !1
              , i = arguments[1]
              , r = this
              , u = arguments[2] ? arguments[2] : function() {}
            ;
            return arguments[0].toLowerCase() == "extend" ? (mutate.add_event(i),
            this) : (n.each(n.trim(arguments[0]).split(" "), function(n, f) {
                t = f;
                mutate.add(t, r, i, u)
            }),
            this)
        }
    })
}(jQuery),
function() {
    var n, i, r, t, u, f = {}.hasOwnProperty, e = function(n, t) {
        function r() {
            this.constructor = n
        }
        for (var i in t)
            f.call(t, i) && (n[i] = t[i]);
        return r.prototype = t.prototype,
        n.prototype = new r,
        n.__super__ = t.prototype,
        n
    };
    t = function() {
        function n() {
            this.options_index = 0;
            this.parsed = []
        }
        return n.prototype.add_node = function(n) {
            return n.nodeName.toUpperCase() === "OPTGROUP" ? this.add_group(n) : this.add_option(n)
        }
        ,
        n.prototype.add_group = function(n) {
            var i, f, t, e, r, u;
            for (i = this.parsed.length,
            this.parsed.push({
                array_index: i,
                group: !0,
                label: this.escapeExpression(n.label),
                children: 0,
                disabled: n.disabled
            }),
            r = n.childNodes,
            u = [],
            t = 0,
            e = r.length; t < e; t++)
                f = r[t],
                u.push(this.add_option(f, i, n.disabled));
            return u
        }
        ,
        n.prototype.add_option = function(n, t, i) {
            if (n.nodeName.toUpperCase() === "OPTION")
                return n.text !== "" ? (t != null && (this.parsed[t].children += 1),
                this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: n.value,
                    text: n.text,
                    html: n.innerHTML,
                    selected: n.selected,
                    disabled: i === !0 ? i : n.disabled,
                    group_array_index: t,
                    classes: n.className,
                    style: n.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }),
                this.options_index += 1
        }
        ,
        n.prototype.escapeExpression = function(n) {
            var t, i;
            return n == null || n === !1 ? "" : /[\&\<\>\"\'\`]/.test(n) ? (t = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            i = /&(?!\w+;)|[\<\>\"\'\`]/g,
            n.replace(i, function(n) {
                return t[n] || "&amp;"
            })) : n
        }
        ,
        n
    }();
    t.select_to_array = function(n) {
        var f, r, i, e, u;
        for (r = new t,
        u = n.childNodes,
        i = 0,
        e = u.length; i < e; i++)
            f = u[i],
            r.add_node(f);
        return r.parsed
    }
    ;
    i = function() {
        function n(t, i) {
            (this.form_field = t,
            this.options = i != null ? i : {},
            n.browser_is_supported()) && (this.is_multiple = this.form_field.multiple,
            this.is_ordered = this.form_field.className.toLowerCase().indexOf("chosen-ordered") >= 0,
            this.set_default_text(),
            this.set_default_values(),
            this.setup(),
            this.set_up_html(),
            this.register_observers())
        }
        return n.prototype.set_default_values = function() {
            var n = this;
            return this.click_test_action = function(t) {
                return n.test_active_click(t)
            }
            ,
            this.activate_action = function(t) {
                return n.activate_field(t)
            }
            ,
            this.active_field = !1,
            this.mouse_on_container = !1,
            this.results_showing = !1,
            this.result_highlighted = null,
            this.result_single_selected = null,
            this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : !1,
            this.disable_search_threshold = this.options.disable_search_threshold || 0,
            this.disable_search = this.options.disable_search || !1,
            this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : !0,
            this.group_search = this.options.group_search != null ? this.options.group_search : !0,
            this.search_contains = this.options.search_contains || !1,
            this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : !0,
            this.max_selected_options = this.options.max_selected_options || Infinity,
            this.inherit_select_classes = this.options.inherit_select_classes || !1,
            this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : !0,
            this.ordered_field_name = this.is_ordered ? this.form_field.getAttribute("data-ordered-field-name") : "",
            this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : !0
        }
        ,
        n.prototype.set_default_text = function() {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || n.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || n.default_single_text,
            this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || n.default_no_result_text
        }
        ,
        n.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }
        ,
        n.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }
        ,
        n.prototype.input_focus = function() {
            var n = this;
            if (this.is_multiple) {
                if (!this.active_field)
                    return setTimeout(function() {
                        return n.container_mousedown()
                    }, 50)
            } else if (!this.active_field)
                return this.activate_field()
        }
        ,
        n.prototype.input_blur = function() {
            var n = this;
            if (!this.mouse_on_container)
                return this.active_field = !1,
                setTimeout(function() {
                    return n.blur_test()
                }, 100)
        }
        ,
        n.prototype.results_option_build = function(n) {
            var f, t, i, r, e, h = {}, u, o, s;
            for (f = "",
            e = this.results_data,
            i = 0,
            r = e.length; i < r; i++)
                t = e[i],
                f += t.group ? this.result_add_group(t) : this.result_add_option(t),
                (n != null ? n.first : void 0) && (t.selected && this.is_multiple ? this.is_ordered ? h["o" + t.value.toString()] = t : this.choice_build(t) : t.selected && !this.is_multiple && this.single_set_selected_text(t.text));
            if (this.is_multiple && this.is_ordered && (u = this.form_field.getAttribute("data-ordered-values"),
            typeof u != typeof undefined && u !== !1 && u !== null))
                for (o = this.form_field.getAttribute("data-ordered-values").split(","),
                i = 0,
                r = o.length; i < r; i++)
                    s = h["o" + o[i].toString()],
                    s && this.choice_build(s);
            return f
        }
        ,
        n.prototype.result_add_option = function(n) {
            var t, i;
            return n.search_match ? this.include_option_in_results(n) ? (t = [],
            n.disabled || n.selected && this.is_multiple || t.push("active-result"),
            !n.disabled || n.selected && this.is_multiple || t.push("disabled-result"),
            n.selected && t.push("result-selected"),
            n.group_array_index != null && t.push("group-option"),
            n.classes !== "" && t.push(n.classes),
            i = n.style.cssText !== "" ? ' style="' + n.style + '"' : "",
            '<li class="' + t.join(" ") + '"' + i + ' data-option-array-index="' + n.array_index + '">' + n.search_text + "<\/li>") : "" : ""
        }
        ,
        n.prototype.result_add_group = function(n) {
            return (n.search_match || n.group_match) ? (n.active_options > 0) ? '<li class="group-result">' + n.search_text + "<\/li>" : "" : ""
        }
        ,
        n.prototype.results_update_field = function() {
            return this.set_default_text(),
            this.is_multiple || this.results_reset_cleanup(),
            this.result_clear_highlight(),
            this.result_single_selected = null,
            this.results_build(),
            this.results_showing ? this.winnow_results() : void 0
        }
        ,
        n.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }
        ,
        n.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }
        ,
        n.prototype.winnow_results = function() {
            var e, n, h, c, u, t, i, r, o, l, f, a, s;
            for (this.no_results_clear(),
            u = 0,
            i = this.get_search_text(),
            e = i.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
            c = this.search_contains ? "" : "^",
            h = new RegExp(c + e,"i"),
            l = new RegExp(e,"i"),
            s = this.results_data,
            f = 0,
            a = s.length; f < a; f++)
                n = s[f],
                n.search_match = !1,
                t = null,
                this.include_option_in_results(n) && (n.group && (n.group_match = !1,
                n.active_options = 0),
                n.group_array_index != null && this.results_data[n.group_array_index] && (t = this.results_data[n.group_array_index],
                t.active_options === 0 && t.search_match && (u += 1),
                t.active_options += 1),
                n.group && !this.group_search || (n.search_text = n.group ? n.label : n.html,
                n.search_match = this.search_string_match(n.search_text, h),
                n.search_match && !n.group && (u += 1),
                n.search_match ? (i.length && (r = n.search_text.search(l),
                o = n.search_text.substr(0, r + i.length) + "<\/em>" + n.search_text.substr(r + i.length),
                n.search_text = o.substr(0, r) + "<em>" + o.substr(r)),
                t != null && (t.group_match = !0)) : n.group_array_index != null && this.results_data[n.group_array_index].search_match && (n.search_match = !0)));
            return this.result_clear_highlight(),
            u < 1 && i.length ? (this.update_results_content(""),
            this.no_results(i)) : (this.update_results_content(this.results_option_build()),
            this.winnow_results_set_highlight())
        }
        ,
        n.prototype.search_string_match = function(n, t) {
            var u, i, r, f;
            if (t.test(n))
                return !0;
            if (this.enable_split_word_search && (n.indexOf(" ") >= 0 || n.indexOf("[") === 0) && (i = n.replace(/\[|\]/g, "").split(" "),
            i.length))
                for (r = 0,
                f = i.length; r < f; r++)
                    if (u = i[r],
                    t.test(u))
                        return !0
        }
        ,
        n.prototype.choices_count = function() {
            var i, n, r, t;
            if (this.selected_option_count != null)
                return this.selected_option_count;
            for (this.selected_option_count = 0,
            t = this.form_field.options,
            n = 0,
            r = t.length; n < r; n++)
                i = t[n],
                i.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }
        ,
        n.prototype.choices_click = function(n) {
            return n.preventDefault(),
            (this.results_showing || this.is_disabled) ? void 0 : this.results_show()
        }
        ,
        n.prototype.keyup_checker = function(n) {
            var t, i;
            t = (i = n.which) != null ? i : n.keyCode;
            this.search_field_scale();
            switch (t) {
            case 8:
                if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0)
                    return this.keydown_backstroke();
                if (!this.pending_backstroke)
                    return this.result_clear_highlight(),
                    this.results_search();
                break;
            case 13:
                if (n.preventDefault(),
                this.results_showing)
                    return this.result_select(n);
                break;
            case 27:
                return this.results_showing && this.results_hide(),
                !0;
            case 9:
            case 38:
            case 40:
            case 16:
            case 91:
            case 17:
                break;
            default:
                return this.results_search()
            }
        }
        ,
        n.prototype.container_width = function() {
            return this.options.width != null ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }
        ,
        n.prototype.include_option_in_results = function(n) {
            return this.is_multiple && !this.display_selected_options && n.selected ? !1 : !this.display_disabled_options && n.disabled ? !1 : n.empty ? !1 : !0
        }
        ,
        n.browser_is_supported = function() {
            return window.navigator.appName === "Microsoft Internet Explorer" ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }
        ,
        n.default_multiple_text = "Select Some Options",
        n.default_single_text = "Select an Option",
        n.default_no_result_text = "No results match",
        n
    }();
    n = jQuery;
    n.fn.extend({
        chosen: function(t) {
            return i.browser_is_supported() ? this.each(function() {
                var u, i;
                u = n(this);
                i = u.data("chosen");
                t === "destroy" && i ? i.destroy() : i || u.data("chosen", new r(this,t))
            }) : this
        }
    });
    r = function(i) {
        function r() {
            return u = r.__super__.constructor.apply(this, arguments)
        }
        return e(r, i),
        r.prototype.setup = function() {
            return this.form_field_jq = n(this.form_field),
            this.current_selectedIndex = this.form_field.selectedIndex,
            this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }
        ,
        r.prototype.set_up_html = function() {
            var t, i, r;
            return t = ["chosen-container"],
            t.push("chosen-container-" + (this.is_multiple ? "multi" : "single")),
            this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className),
            this.is_rtl && t.push("chosen-rtl"),
            i = {
                "class": t.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            },
            this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"),
            this.container = n("<div />", i),
            this.is_multiple ? (r = "",
            this.is_ordered && (r = '<input type="hidden" name="' + this.ordered_field_name + '" />'),
            this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /><\/li><\/ul><div class="chosen-drop"><ul class="chosen-results"><\/ul><\/div>' + r)) : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '<\/span><div><b><\/b><\/div><\/a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /><\/div><ul class="chosen-results"><\/ul><\/div>'),
            this.form_field_jq.hide().after(this.container),
            this.dropdown = this.container.find("div.chosen-drop").first(),
            this.search_field = this.container.find("input").first(),
            this.search_results = this.container.find("ul.chosen-results").first(),
            this.search_field_scale(),
            this.search_no_results = this.container.find("li.no-results").first(),
            this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(),
            this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(),
            this.selected_item = this.container.find(".chosen-single").first()),
            this.results_build(),
            this.set_tab_index(),
            this.set_label_behavior(),
            this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }
        ,
        r.prototype.register_observers = function() {
            var n = this;
            return this.container.bind("mousedown.chosen", function(t) {
                n.container_mousedown(t)
            }),
            this.container.bind("mouseup.chosen", function(t) {
                n.container_mouseup(t)
            }),
            this.container.bind("mouseenter.chosen", function(t) {
                n.mouse_enter(t)
            }),
            this.container.bind("mouseleave.chosen", function(t) {
                n.mouse_leave(t)
            }),
            this.search_results.bind("mouseup.chosen", function(t) {
                n.search_results_mouseup(t)
            }),
            this.search_results.bind("mouseover.chosen", function(t) {
                n.search_results_mouseover(t)
            }),
            this.search_results.bind("mouseout.chosen", function(t) {
                n.search_results_mouseout(t)
            }),
            this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(t) {
                n.search_results_mousewheel(t)
            }),
            this.form_field_jq.bind("chosen:updated.chosen", function(t) {
                n.results_update_field(t)
            }),
            this.form_field_jq.bind("chosen:activate.chosen", function(t) {
                n.activate_field(t)
            }),
            this.form_field_jq.bind("chosen:open.chosen", function(t) {
                n.container_mousedown(t)
            }),
            this.search_field.bind("blur.chosen", function(t) {
                n.input_blur(t)
            }),
            this.search_field.bind("keyup.chosen", function(t) {
                n.keyup_checker(t)
            }),
            this.search_field.bind("keydown.chosen", function(t) {
                n.keydown_checker(t)
            }),
            this.search_field.bind("focus.chosen", function(t) {
                n.input_focus(t)
            }),
            this.is_multiple ? this.search_choices.bind("click.chosen", function(t) {
                n.choices_click(t)
            }) : this.container.bind("click.chosen", function(n) {
                n.preventDefault()
            })
        }
        ,
        r.prototype.destroy = function() {
            return n(document).unbind("click.chosen", this.click_test_action),
            this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex),
            this.container.remove(),
            this.form_field_jq.removeData("chosen"),
            this.form_field_jq.show()
        }
        ,
        r.prototype.search_field_disabled = function() {
            return (this.is_disabled = this.form_field_jq[0].disabled,
            this.is_disabled) ? (this.container.addClass("chosen-disabled"),
            this.search_field[0].disabled = !0,
            this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action),
            this.close_field()) : (this.container.removeClass("chosen-disabled"),
            this.search_field[0].disabled = !1,
            !this.is_multiple) ? this.selected_item.bind("focus.chosen", this.activate_action) : void 0
        }
        ,
        r.prototype.container_mousedown = function(t) {
            if (!this.is_disabled && (t && t.type === "mousedown" && !this.results_showing && t.preventDefault(),
            !(t != null && n(t.target).hasClass("search-choice-close"))))
                return this.active_field ? !this.is_multiple && t && (n(t.target)[0] === this.selected_item[0] || n(t.target).parents("a.chosen-single").length) && (t.preventDefault(),
                this.results_toggle()) : (this.is_multiple && this.search_field.val(""),
                n(document).bind("click.chosen", this.click_test_action),
                this.results_show()),
                this.activate_field()
        }
        ,
        r.prototype.container_mouseup = function(n) {
            if (n.target.nodeName === "ABBR" && !this.is_disabled)
                return this.results_reset(n)
        }
        ,
        r.prototype.search_results_mousewheel = function(n) {
            var t, i, r;
            return t = -((i = n.originalEvent) != null ? i.wheelDelta : void 0) || ((r = n.originialEvent) != null ? r.detail : void 0),
            t != null ? (n.preventDefault(),
            n.type === "DOMMouseScroll" && (t = t * 40),
            this.search_results.scrollTop(t + this.search_results.scrollTop())) : void 0
        }
        ,
        r.prototype.blur_test = function() {
            if (!this.active_field && this.container.hasClass("chosen-container-active"))
                return this.close_field()
        }
        ,
        r.prototype.close_field = function() {
            return n(document).unbind("click.chosen", this.click_test_action),
            this.active_field = !1,
            this.results_hide(),
            this.container.removeClass("chosen-container-active"),
            this.clear_backstroke(),
            this.show_search_field_default(),
            this.search_field_scale()
        }
        ,
        r.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"),
            this.active_field = !0,
            this.search_field.val(this.search_field.val()),
            this.search_field.focus()
        }
        ,
        r.prototype.test_active_click = function(t) {
            return this.container.is(n(t.target).closest(".chosen-container")) ? this.active_field = !0 : this.close_field()
        }
        ,
        r.prototype.results_build = function() {
            return this.parsing = !0,
            this.selected_option_count = null,
            this.results_data = t.select_to_array(this.form_field),
            this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(),
            this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0,
            this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1,
            this.container.removeClass("chosen-container-single-nosearch"))),
            this.update_results_content(this.results_option_build({
                first: !0
            })),
            this.search_field_disabled(),
            this.show_search_field_default(),
            this.search_field_scale(),
            this.parsing = !1
        }
        ,
        r.prototype.result_do_highlight = function(n) {
            var t, i, r, f, u;
            if (n.length) {
                if (this.result_clear_highlight(),
                this.result_highlight = n,
                this.result_highlight.addClass("highlighted"),
                r = parseInt(this.search_results.css("maxHeight"), 10),
                u = this.search_results.scrollTop(),
                f = r + u,
                i = this.result_highlight.position().top + this.search_results.scrollTop(),
                t = i + this.result_highlight.outerHeight(),
                t >= f)
                    return this.search_results.scrollTop(t - r > 0 ? t - r : 0);
                if (i < u)
                    return this.search_results.scrollTop(i)
            }
        }
        ,
        r.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"),
            this.result_highlight = null
        }
        ,
        r.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }),
            !1) : (this.container.addClass("chosen-with-drop"),
            this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }),
            this.results_showing = !0,
            this.search_field.focus(),
            this.search_field.val(this.search_field.val()),
            this.winnow_results())
        }
        ,
        r.prototype.update_results_content = function(n) {
            return this.search_results.html(n)
        }
        ,
        r.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(),
            this.container.removeClass("chosen-with-drop"),
            this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })),
            this.results_showing = !1
        }
        ,
        r.prototype.set_tab_index = function() {
            var n;
            if (this.form_field.tabIndex)
                return n = this.form_field.tabIndex,
                this.form_field.tabIndex = -1,
                this.search_field[0].tabIndex = n
        }
        ,
        r.prototype.set_label_behavior = function() {
            var t = this;
            return this.form_field_label = this.form_field_jq.parents("label"),
            !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = n("label[for='" + this.form_field.id + "']")),
            this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(n) {
                return t.is_multiple ? t.container_mousedown(n) : t.activate_field()
            }) : void 0
        }
        ,
        r.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text),
            this.search_field.addClass("default")) : (this.search_field.val(""),
            this.search_field.removeClass("default"))
        }
        ,
        r.prototype.search_results_mouseup = function(t) {
            var i;
            return i = n(t.target).hasClass("active-result") ? n(t.target) : n(t.target).parents(".active-result").first(),
            i.length ? (this.result_highlight = i,
            this.result_select(t),
            this.search_field.focus()) : void 0
        }
        ,
        r.prototype.search_results_mouseover = function(t) {
            var i;
            return i = n(t.target).hasClass("active-result") ? n(t.target) : n(t.target).parents(".active-result").first(),
            i ? this.result_do_highlight(i) : void 0
        }
        ,
        r.prototype.search_results_mouseout = function(t) {
            if (n(t.target).hasClass("active-result" || n(t.target).parents(".active-result").first()))
                return this.result_clear_highlight()
        }
        ,
        r.prototype.choice_build = function(t) {
            var i, r, u = this;
            return i = n("<li />", {
                "class": "search-choice"
            }).html("<span>" + t.html + "<\/span>"),
            t.disabled ? i.addClass("search-choice-disabled") : (r = n("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": t.array_index,
                "data-org-value": t.value
            }),
            r.bind("click.chosen", function(n) {
                return u.choice_destroy_link_click(n)
            }),
            i.append(r)),
            this.is_ordered && this.add_ordered_value(t.value),
            this.search_container.before(i)
        }
        ,
        r.prototype.add_ordered_value = function(n) {
            var r = "input[name=" + this.ordered_field_name + "]"
              , i = this.container.find(r).first()
              , t = i.val();
            t.length > 0 ? t += "," + n : t = n;
            i.attr("value", t)
        }
        ,
        r.prototype.choice_destroy_link_click = function(t) {
            return t.preventDefault(),
            t.stopPropagation(),
            this.is_disabled ? void 0 : this.choice_destroy(n(t.target))
        }
        ,
        r.prototype.choice_destroy = function(n) {
            if (this.result_deselect(n[0].getAttribute("data-option-array-index")))
                return this.show_search_field_default(),
                this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(),
                n.parents("li").first().remove(),
                this.is_ordered && this.remove_ordered_value(n.attr("data-org-value")),
                this.search_field_scale()
        }
        ,
        r.prototype.remove_ordered_value = function(n) {
            var r = "input[name=" + this.ordered_field_name + "]"
              , i = this.container.find(r).first()
              , t = i.val();
            t = t.replace("," + n + ",", ",");
            t = t.replace("," + n, "");
            t = t.replace(n + ",", "");
            t = t.replace(n, "");
            i.attr("value", t)
        }
        ,
        r.prototype.results_reset = function() {
            return this.form_field.options[0].selected = !0,
            this.selected_option_count = null,
            this.single_set_selected_text(),
            this.show_search_field_default(),
            this.results_reset_cleanup(),
            this.form_field_jq.trigger("change"),
            this.active_field ? this.results_hide() : void 0
        }
        ,
        r.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex,
            this.selected_item.find("abbr").remove()
        }
        ,
        r.prototype.result_select = function(n) {
            var i, t, r;
            if (this.result_highlight)
                return (i = this.result_highlight,
                this.result_clear_highlight(),
                this.is_multiple && this.max_selected_options <= this.choices_count()) ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }),
                !1) : (this.is_multiple ? i.removeClass("active-result") : (this.result_single_selected && (this.result_single_selected.removeClass("result-selected"),
                r = this.result_single_selected[0].getAttribute("data-option-array-index"),
                this.results_data[r].selected = !1),
                this.result_single_selected = i),
                i.addClass("result-selected"),
                t = this.results_data[i[0].getAttribute("data-option-array-index")],
                t.selected = !0,
                this.form_field.options[t.options_index].selected = !0,
                this.selected_option_count = null,
                this.is_multiple ? this.choice_build(t) : this.single_set_selected_text(t.text),
                (n.metaKey || n.ctrlKey) && this.is_multiple || this.results_hide(),
                this.search_field.val(""),
                (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[t.options_index].value
                }),
                this.current_selectedIndex = this.form_field.selectedIndex,
                this.search_field_scale())
        }
        ,
        r.prototype.single_set_selected_text = function(n) {
            return n == null && (n = this.default_text),
            n === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(),
            this.selected_item.removeClass("chosen-default")),
            this.selected_item.find("span").text(n)
        }
        ,
        r.prototype.result_deselect = function(n) {
            var t;
            return t = this.results_data[n],
            this.form_field.options[t.options_index].disabled ? !1 : (t.selected = !1,
            this.form_field.options[t.options_index].selected = !1,
            this.selected_option_count = null,
            this.result_clear_highlight(),
            this.results_showing && this.winnow_results(),
            this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[t.options_index].value
            }),
            this.search_field_scale(),
            !0)
        }
        ,
        r.prototype.single_deselect_control_build = function() {
            if (this.allow_single_deselect)
                return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"><\/abbr>'),
                this.selected_item.addClass("chosen-single-with-deselect")
        }
        ,
        r.prototype.get_search_text = function() {
            return this.search_field.val() === this.default_text ? "" : n("<div/>").text(n.trim(this.search_field.val())).html()
        }
        ,
        r.prototype.winnow_results_set_highlight = function() {
            var n, t;
            return t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"),
            n = t.length ? t.first() : this.search_results.find(".active-result").first(),
            n != null ? this.result_do_highlight(n) : void 0
        }
        ,
        r.prototype.no_results = function(t) {
            var i;
            return i = n('<li class="no-results">' + this.results_none_found + ' "<span><\/span>"<\/li>'),
            i.find("span").first().html(t),
            this.search_results.append(i)
        }
        ,
        r.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }
        ,
        r.prototype.keydown_arrow = function() {
            var n;
            if (this.results_showing && this.result_highlight) {
                if (n = this.result_highlight.nextAll("li.active-result").first(),
                n)
                    return this.result_do_highlight(n)
            } else
                return this.results_show()
        }
        ,
        r.prototype.keyup_arrow = function() {
            var n;
            if (this.results_showing || this.is_multiple) {
                if (this.result_highlight)
                    return n = this.result_highlight.prevAll("li.active-result"),
                    n.length ? this.result_do_highlight(n.first()) : (this.choices_count() > 0 && this.results_hide(),
                    this.result_clear_highlight())
            } else
                return this.results_show()
        }
        ,
        r.prototype.keydown_backstroke = function() {
            var n;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()),
            this.clear_backstroke()) : (n = this.search_container.siblings("li.search-choice").last(),
            n.length && !n.hasClass("search-choice-disabled")) ? (this.pending_backstroke = n,
            this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
        }
        ,
        r.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"),
            this.pending_backstroke = null
        }
        ,
        r.prototype.keydown_checker = function(n) {
            var t, i;
            t = (i = n.which) != null ? i : n.keyCode;
            this.search_field_scale();
            t !== 8 && this.pending_backstroke && this.clear_backstroke();
            switch (t) {
            case 8:
                this.backstroke_length = this.search_field.val().length;
                break;
            case 9:
                this.results_showing && !this.is_multiple && this.result_select(n);
                this.mouse_on_container = !1;
                break;
            case 13:
                n.preventDefault();
                break;
            case 38:
                n.preventDefault();
                this.keyup_arrow();
                break;
            case 40:
                n.preventDefault();
                this.keydown_arrow()
            }
        }
        ,
        r.prototype.search_field_scale = function() {
            var t, u, h, f, e, o, i, r, s;
            if (this.is_multiple) {
                for (h = 0,
                i = 0,
                e = "position:absolute; left: -1000px; top: -1000px; display:none;",
                o = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"],
                r = 0,
                s = o.length; r < s; r++)
                    f = o[r],
                    e += f + ":" + this.search_field.css(f) + ";";
                return t = n("<div />", {
                    style: e
                }),
                t.text(this.search_field.val()),
                n("body").append(t),
                i = t.width() + 25,
                t.remove(),
                u = this.container.outerWidth(),
                i > u - 10 && (i = u - 10),
                this.search_field.css({
                    width: i + "px"
                })
            }
        }
        ,
        r
    }(i)
}
.call(this),
function(n) {
    typeof n.fn.each2 == "undefined" && n.extend(n.fn, {
        each2: function(t) {
            for (var i = n([0]), r = -1, u = this.length; ++r < u && (i.context = i[0] = this[r]) && t.call(i[0], r, i) !== !1; )
                ;
            return this
        }
    })
}(jQuery),
function(n, t) {
    "use strict";
    function nt(t) {
        var i = n(document.createTextNode(""));
        t.before(i);
        i.before(t);
        i.remove()
    }
    function c(n) {
        function t(n) {
            return lt[n] || n
        }
        return n.replace(/[^\u0000-\u007E]/g, t)
    }
    function e(n, t) {
        for (var i = 0, r = t.length; i < r; i = i + 1)
            if (f(n, t[i]))
                return i;
        return -1
    }
    function at() {
        var t = n(ct), i;
        return t.appendTo(document.body),
        i = {
            width: t.width() - t[0].clientWidth,
            height: t.height() - t[0].clientHeight
        },
        t.remove(),
        i
    }
    function f(n, i) {
        return n === i ? !0 : n === t || i === t ? !1 : n === null || i === null ? !1 : n.constructor === String ? n + "" == i + "" : i.constructor === String ? i + "" == n + "" : !1
    }
    function w(n, t, i) {
        var u, r, f;
        if (n === null || n.length < 1)
            return [];
        for (u = n.split(t),
        r = 0,
        f = u.length; r < f; r = r + 1)
            u[r] = i(u[r]);
        return u
    }
    function tt(n) {
        return n.outerWidth(!1) - n.width()
    }
    function it(i) {
        var r = "keyup-change-value";
        i.on("keydown", function() {
            n.data(i, r) === t && n.data(i, r, i.val())
        });
        i.on("keyup", function() {
            var u = n.data(i, r);
            u !== t && i.val() !== u && (n.removeData(i, r),
            i.trigger("keyup-change"))
        })
    }
    function vt(i) {
        i.on("mousemove", function(i) {
            var r = v;
            (r === t || r.x !== i.pageX || r.y !== i.pageY) && n(i.target).trigger("mousemove-filtered", i)
        })
    }
    function rt(n, i, r) {
        r = r || t;
        var u;
        return function() {
            var t = arguments;
            window.clearTimeout(u);
            u = window.setTimeout(function() {
                i.apply(r, t)
            }, n)
        }
    }
    function yt(n, t) {
        var i = rt(n, function(n) {
            t.trigger("scroll-debounced", n)
        });
        t.on("scroll", function(n) {
            e(n.target, t.get()) >= 0 && i(n)
        })
    }
    function pt(n) {
        n[0] !== document.activeElement && window.setTimeout(function() {
            var t = n[0], r = n.val().length, i, u;
            n.focus();
            u = t.offsetWidth > 0 || t.offsetHeight > 0;
            u && t === document.activeElement && (t.setSelectionRange ? t.setSelectionRange(r, r) : t.createTextRange && (i = t.createTextRange(),
            i.collapse(!1),
            i.select()))
        }, 0)
    }
    function wt(t) {
        var i, r, u;
        return t = n(t)[0],
        i = 0,
        r = 0,
        "selectionStart"in t ? (i = t.selectionStart,
        r = t.selectionEnd - i) : "selection"in document && (t.focus(),
        u = document.selection.createRange(),
        r = document.selection.createRange().text.length,
        u.moveStart("character", -t.value.length),
        i = u.text.length - r),
        {
            offset: i,
            length: r
        }
    }
    function r(n) {
        n.preventDefault();
        n.stopPropagation()
    }
    function bt(n) {
        n.preventDefault();
        n.stopImmediatePropagation()
    }
    function kt(t) {
        if (!s) {
            var i = t[0].currentStyle || window.getComputedStyle(t[0], null);
            s = n(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: i.fontSize,
                fontFamily: i.fontFamily,
                fontStyle: i.fontStyle,
                fontWeight: i.fontWeight,
                letterSpacing: i.letterSpacing,
                textTransform: i.textTransform,
                whiteSpace: "nowrap"
            });
            s.attr("class", "select2-sizer");
            n(document.body).append(s)
        }
        return s.text(t.val()),
        s.width()
    }
    function a(t, i, r) {
        var u, f = [], e;
        u = n.trim(t.attr("class"));
        u && (u = "" + u,
        n(u.split(/\s+/)).each2(function() {
            this.indexOf("select2-") === 0 && f.push(this)
        }));
        u = n.trim(i.attr("class"));
        u && (u = "" + u,
        n(u.split(/\s+/)).each2(function() {
            this.indexOf("select2-") !== 0 && (e = r(this),
            e && f.push(e))
        }));
        t.attr("class", f.join(" "))
    }
    function ut(n, t, i, r) {
        var u = c(n.toUpperCase()).indexOf(c(t.toUpperCase()))
          , f = t.length;
        if (u < 0) {
            i.push(r(n));
            return
        }
        i.push(r(n.substring(0, u)));
        i.push("<span class='select2-match'>");
        i.push(r(n.substring(u, u + f)));
        i.push("<\/span>");
        i.push(r(n.substring(u + f, n.length)))
    }
    function ft(n) {
        var t = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(n).replace(/[&<>"'\/\\]/g, function(n) {
            return t[n]
        })
    }
    function et(i) {
        var f, r = null, e = i.quietMillis || 100, o = i.url, u = this;
        return function(s) {
            window.clearTimeout(f);
            f = window.setTimeout(function() {
                var e = i.data
                  , f = o
                  , c = i.transport || n.fn.select2.ajaxDefaults.transport
                  , l = {
                    type: i.type || "GET",
                    cache: i.cache || !1,
                    jsonpCallback: i.jsonpCallback || t,
                    dataType: i.dataType || "json"
                }
                  , h = n.extend({}, n.fn.select2.ajaxDefaults.params, l);
                e = e ? e.call(u, s.term, s.page, s.context) : null;
                f = typeof f == "function" ? f.call(u, s.term, s.page, s.context) : f;
                r && typeof r.abort == "function" && r.abort();
                i.params && (n.isFunction(i.params) ? n.extend(h, i.params.call(u)) : n.extend(h, i.params));
                n.extend(h, {
                    url: f,
                    dataType: i.dataType,
                    data: e,
                    success: function(n) {
                        var t = i.results(n, s.page, s);
                        s.callback(t)
                    },
                    error: function(n, t, i) {
                        var r = {
                            hasError: !0,
                            jqXHR: n,
                            textStatus: t,
                            errorThrown: i
                        };
                        s.callback(r)
                    }
                });
                r = c.call(u, h)
            }, e)
        }
    }
    function ot(t) {
        var i = t, e, u, r = function(n) {
            return "" + n.text
        }, f;
        return n.isArray(i) && (u = i,
        i = {
            results: u
        }),
        n.isFunction(i) === !1 && (u = i,
        i = function() {
            return u
        }
        ),
        f = i(),
        f.text && (r = f.text,
        n.isFunction(r) || (e = f.text,
        r = function(n) {
            return n[e]
        }
        )),
        function(t) {
            var u = t.term, e = {
                results: []
            }, f;
            if (u === "") {
                t.callback(i());
                return
            }
            f = function(i, e) {
                var o, s;
                if (i = i[0],
                i.children) {
                    o = {};
                    for (s in i)
                        i.hasOwnProperty(s) && (o[s] = i[s]);
                    o.children = [];
                    n(i.children).each2(function(n, t) {
                        f(t, o.children)
                    });
                    (o.children.length || t.matcher(u, r(o), i)) && e.push(o)
                } else
                    t.matcher(u, r(i), i) && e.push(i)
            }
            ;
            n(i().results).each2(function(n, t) {
                f(t, e.results)
            });
            t.callback(e)
        }
    }
    function st(i) {
        var r = n.isFunction(i);
        return function(u) {
            var f = u.term
              , e = {
                results: []
            }
              , o = r ? i(u) : i;
            n.isArray(o) && (n(o).each(function() {
                var n = this.text !== t
                  , i = n ? this.text : this;
                (f === "" || u.matcher(f, i)) && e.results.push(n ? this : {
                    id: this,
                    text: this
                })
            }),
            u.callback(e))
        }
    }
    function o(t, i) {
        if (n.isFunction(t))
            return !0;
        if (!t)
            return !1;
        if (typeof t == "string")
            return !0;
        throw new Error(i + " must be a string, function, or falsy value");
    }
    function u(t, i) {
        if (n.isFunction(t)) {
            var r = Array.prototype.slice.call(arguments, 2);
            return t.apply(i, r)
        }
        return t
    }
    function ht(t) {
        var i = 0;
        return n.each(t, function(n, t) {
            t.children ? i += ht(t.children) : i++
        }),
        i
    }
    function dt(n, i, r, u) {
        var a = n, c = !1, e, s, o, h, l;
        if (!u.createSearchChoice || !u.tokenSeparators || u.tokenSeparators.length < 1)
            return t;
        for (; ; ) {
            for (s = -1,
            o = 0,
            h = u.tokenSeparators.length; o < h; o++)
                if (l = u.tokenSeparators[o],
                s = n.indexOf(l),
                s >= 0)
                    break;
            if (s < 0)
                break;
            if (e = n.substring(0, s),
            n = n.substring(s + l.length),
            e.length > 0 && (e = u.createSearchChoice.call(this, e, i),
            e !== t && e !== null && u.id(e) !== t && u.id(e) !== null)) {
                for (c = !1,
                o = 0,
                h = i.length; o < h; o++)
                    if (f(u.id(e), u.id(i[o]))) {
                        c = !0;
                        break
                    }
                c || r(e)
            }
        }
        if (a !== n)
            return n
    }
    function b() {
        var t = this;
        n.each(arguments, function(n, i) {
            t[i].remove();
            t[i] = null
        })
    }
    function k(t, i) {
        var r = function() {};
        return r.prototype = new t,
        r.prototype.constructor = r,
        r.prototype.parent = t.prototype,
        r.prototype = n.extend(r.prototype, i),
        r
    }
    if (window.Select2 === t) {
        var l, d, g, h, s, v = {
            x: 0,
            y: 0
        }, y, p, i = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            isArrow: function(n) {
                n = n.which ? n.which : n;
                switch (n) {
                case i.LEFT:
                case i.RIGHT:
                case i.UP:
                case i.DOWN:
                    return !0
                }
                return !1
            },
            isControl: function(n) {
                var t = n.which;
                switch (t) {
                case i.SHIFT:
                case i.CTRL:
                case i.ALT:
                    return !0
                }
                return n.metaKey ? !0 : !1
            },
            isFunctionKey: function(n) {
                return n = n.which ? n.which : n,
                n >= 112 && n <= 123
            }
        }, ct = "<div class='select2-measure-scrollbar'><\/div>", lt = {
            "Ⓐ": "A",
            "Ａ": "A",
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ầ": "A",
            "Ấ": "A",
            "Ẫ": "A",
            "Ẩ": "A",
            "Ã": "A",
            "Ā": "A",
            "Ă": "A",
            "Ằ": "A",
            "Ắ": "A",
            "Ẵ": "A",
            "Ẳ": "A",
            "Ȧ": "A",
            "Ǡ": "A",
            "Ä": "A",
            "Ǟ": "A",
            "Ả": "A",
            "Å": "A",
            "Ǻ": "A",
            "Ǎ": "A",
            "Ȁ": "A",
            "Ȃ": "A",
            "Ạ": "A",
            "Ậ": "A",
            "Ặ": "A",
            "Ḁ": "A",
            "Ą": "A",
            "Ⱥ": "A",
            "Ɐ": "A",
            "Ꜳ": "AA",
            "Æ": "AE",
            "Ǽ": "AE",
            "Ǣ": "AE",
            "Ꜵ": "AO",
            "Ꜷ": "AU",
            "Ꜹ": "AV",
            "Ꜻ": "AV",
            "Ꜽ": "AY",
            "Ⓑ": "B",
            "Ｂ": "B",
            "Ḃ": "B",
            "Ḅ": "B",
            "Ḇ": "B",
            "Ƀ": "B",
            "Ƃ": "B",
            "Ɓ": "B",
            "Ⓒ": "C",
            "Ｃ": "C",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "Ç": "C",
            "Ḉ": "C",
            "Ƈ": "C",
            "Ȼ": "C",
            "Ꜿ": "C",
            "Ⓓ": "D",
            "Ｄ": "D",
            "Ḋ": "D",
            "Ď": "D",
            "Ḍ": "D",
            "Ḑ": "D",
            "Ḓ": "D",
            "Ḏ": "D",
            "Đ": "D",
            "Ƌ": "D",
            "Ɗ": "D",
            "Ɖ": "D",
            "Ꝺ": "D",
            "Ǳ": "DZ",
            "Ǆ": "DZ",
            "ǲ": "Dz",
            "ǅ": "Dz",
            "Ⓔ": "E",
            "Ｅ": "E",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ề": "E",
            "Ế": "E",
            "Ễ": "E",
            "Ể": "E",
            "Ẽ": "E",
            "Ē": "E",
            "Ḕ": "E",
            "Ḗ": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ë": "E",
            "Ẻ": "E",
            "Ě": "E",
            "Ȅ": "E",
            "Ȇ": "E",
            "Ẹ": "E",
            "Ệ": "E",
            "Ȩ": "E",
            "Ḝ": "E",
            "Ę": "E",
            "Ḙ": "E",
            "Ḛ": "E",
            "Ɛ": "E",
            "Ǝ": "E",
            "Ⓕ": "F",
            "Ｆ": "F",
            "Ḟ": "F",
            "Ƒ": "F",
            "Ꝼ": "F",
            "Ⓖ": "G",
            "Ｇ": "G",
            "Ǵ": "G",
            "Ĝ": "G",
            "Ḡ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ǧ": "G",
            "Ģ": "G",
            "Ǥ": "G",
            "Ɠ": "G",
            "Ꞡ": "G",
            "Ᵹ": "G",
            "Ꝿ": "G",
            "Ⓗ": "H",
            "Ｈ": "H",
            "Ĥ": "H",
            "Ḣ": "H",
            "Ḧ": "H",
            "Ȟ": "H",
            "Ḥ": "H",
            "Ḩ": "H",
            "Ḫ": "H",
            "Ħ": "H",
            "Ⱨ": "H",
            "Ⱶ": "H",
            "Ɥ": "H",
            "Ⓘ": "I",
            "Ｉ": "I",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "İ": "I",
            "Ï": "I",
            "Ḯ": "I",
            "Ỉ": "I",
            "Ǐ": "I",
            "Ȉ": "I",
            "Ȋ": "I",
            "Ị": "I",
            "Į": "I",
            "Ḭ": "I",
            "Ɨ": "I",
            "Ⓙ": "J",
            "Ｊ": "J",
            "Ĵ": "J",
            "Ɉ": "J",
            "Ⓚ": "K",
            "Ｋ": "K",
            "Ḱ": "K",
            "Ǩ": "K",
            "Ḳ": "K",
            "Ķ": "K",
            "Ḵ": "K",
            "Ƙ": "K",
            "Ⱪ": "K",
            "Ꝁ": "K",
            "Ꝃ": "K",
            "Ꝅ": "K",
            "Ꞣ": "K",
            "Ⓛ": "L",
            "Ｌ": "L",
            "Ŀ": "L",
            "Ĺ": "L",
            "Ľ": "L",
            "Ḷ": "L",
            "Ḹ": "L",
            "Ļ": "L",
            "Ḽ": "L",
            "Ḻ": "L",
            "Ł": "L",
            "Ƚ": "L",
            "Ɫ": "L",
            "Ⱡ": "L",
            "Ꝉ": "L",
            "Ꝇ": "L",
            "Ꞁ": "L",
            "Ǉ": "LJ",
            "ǈ": "Lj",
            "Ⓜ": "M",
            "Ｍ": "M",
            "Ḿ": "M",
            "Ṁ": "M",
            "Ṃ": "M",
            "Ɱ": "M",
            "Ɯ": "M",
            "Ⓝ": "N",
            "Ｎ": "N",
            "Ǹ": "N",
            "Ń": "N",
            "Ñ": "N",
            "Ṅ": "N",
            "Ň": "N",
            "Ṇ": "N",
            "Ņ": "N",
            "Ṋ": "N",
            "Ṉ": "N",
            "Ƞ": "N",
            "Ɲ": "N",
            "Ꞑ": "N",
            "Ꞥ": "N",
            "Ǌ": "NJ",
            "ǋ": "Nj",
            "Ⓞ": "O",
            "Ｏ": "O",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Ồ": "O",
            "Ố": "O",
            "Ỗ": "O",
            "Ổ": "O",
            "Õ": "O",
            "Ṍ": "O",
            "Ȭ": "O",
            "Ṏ": "O",
            "Ō": "O",
            "Ṑ": "O",
            "Ṓ": "O",
            "Ŏ": "O",
            "Ȯ": "O",
            "Ȱ": "O",
            "Ö": "O",
            "Ȫ": "O",
            "Ỏ": "O",
            "Ő": "O",
            "Ǒ": "O",
            "Ȍ": "O",
            "Ȏ": "O",
            "Ơ": "O",
            "Ờ": "O",
            "Ớ": "O",
            "Ỡ": "O",
            "Ở": "O",
            "Ợ": "O",
            "Ọ": "O",
            "Ộ": "O",
            "Ǫ": "O",
            "Ǭ": "O",
            "Ø": "O",
            "Ǿ": "O",
            "Ɔ": "O",
            "Ɵ": "O",
            "Ꝋ": "O",
            "Ꝍ": "O",
            "Ƣ": "OI",
            "Ꝏ": "OO",
            "Ȣ": "OU",
            "Ⓟ": "P",
            "Ｐ": "P",
            "Ṕ": "P",
            "Ṗ": "P",
            "Ƥ": "P",
            "Ᵽ": "P",
            "Ꝑ": "P",
            "Ꝓ": "P",
            "Ꝕ": "P",
            "Ⓠ": "Q",
            "Ｑ": "Q",
            "Ꝗ": "Q",
            "Ꝙ": "Q",
            "Ɋ": "Q",
            "Ⓡ": "R",
            "Ｒ": "R",
            "Ŕ": "R",
            "Ṙ": "R",
            "Ř": "R",
            "Ȑ": "R",
            "Ȓ": "R",
            "Ṛ": "R",
            "Ṝ": "R",
            "Ŗ": "R",
            "Ṟ": "R",
            "Ɍ": "R",
            "Ɽ": "R",
            "Ꝛ": "R",
            "Ꞧ": "R",
            "Ꞃ": "R",
            "Ⓢ": "S",
            "Ｓ": "S",
            "ẞ": "S",
            "Ś": "S",
            "Ṥ": "S",
            "Ŝ": "S",
            "Ṡ": "S",
            "Š": "S",
            "Ṧ": "S",
            "Ṣ": "S",
            "Ṩ": "S",
            "Ș": "S",
            "Ş": "S",
            "Ȿ": "S",
            "Ꞩ": "S",
            "Ꞅ": "S",
            "Ⓣ": "T",
            "Ｔ": "T",
            "Ṫ": "T",
            "Ť": "T",
            "Ṭ": "T",
            "Ț": "T",
            "Ţ": "T",
            "Ṱ": "T",
            "Ṯ": "T",
            "Ŧ": "T",
            "Ƭ": "T",
            "Ʈ": "T",
            "Ⱦ": "T",
            "Ꞇ": "T",
            "Ꜩ": "TZ",
            "Ⓤ": "U",
            "Ｕ": "U",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ũ": "U",
            "Ṹ": "U",
            "Ū": "U",
            "Ṻ": "U",
            "Ŭ": "U",
            "Ü": "U",
            "Ǜ": "U",
            "Ǘ": "U",
            "Ǖ": "U",
            "Ǚ": "U",
            "Ủ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ǔ": "U",
            "Ȕ": "U",
            "Ȗ": "U",
            "Ư": "U",
            "Ừ": "U",
            "Ứ": "U",
            "Ữ": "U",
            "Ử": "U",
            "Ự": "U",
            "Ụ": "U",
            "Ṳ": "U",
            "Ų": "U",
            "Ṷ": "U",
            "Ṵ": "U",
            "Ʉ": "U",
            "Ⓥ": "V",
            "Ｖ": "V",
            "Ṽ": "V",
            "Ṿ": "V",
            "Ʋ": "V",
            "Ꝟ": "V",
            "Ʌ": "V",
            "Ꝡ": "VY",
            "Ⓦ": "W",
            "Ｗ": "W",
            "Ẁ": "W",
            "Ẃ": "W",
            "Ŵ": "W",
            "Ẇ": "W",
            "Ẅ": "W",
            "Ẉ": "W",
            "Ⱳ": "W",
            "Ⓧ": "X",
            "Ｘ": "X",
            "Ẋ": "X",
            "Ẍ": "X",
            "Ⓨ": "Y",
            "Ｙ": "Y",
            "Ỳ": "Y",
            "Ý": "Y",
            "Ŷ": "Y",
            "Ỹ": "Y",
            "Ȳ": "Y",
            "Ẏ": "Y",
            "Ÿ": "Y",
            "Ỷ": "Y",
            "Ỵ": "Y",
            "Ƴ": "Y",
            "Ɏ": "Y",
            "Ỿ": "Y",
            "Ⓩ": "Z",
            "Ｚ": "Z",
            "Ź": "Z",
            "Ẑ": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "Ẓ": "Z",
            "Ẕ": "Z",
            "Ƶ": "Z",
            "Ȥ": "Z",
            "Ɀ": "Z",
            "Ⱬ": "Z",
            "Ꝣ": "Z",
            "ⓐ": "a",
            "ａ": "a",
            "ẚ": "a",
            "à": "a",
            "á": "a",
            "â": "a",
            "ầ": "a",
            "ấ": "a",
            "ẫ": "a",
            "ẩ": "a",
            "ã": "a",
            "ā": "a",
            "ă": "a",
            "ằ": "a",
            "ắ": "a",
            "ẵ": "a",
            "ẳ": "a",
            "ȧ": "a",
            "ǡ": "a",
            "ä": "a",
            "ǟ": "a",
            "ả": "a",
            "å": "a",
            "ǻ": "a",
            "ǎ": "a",
            "ȁ": "a",
            "ȃ": "a",
            "ạ": "a",
            "ậ": "a",
            "ặ": "a",
            "ḁ": "a",
            "ą": "a",
            "ⱥ": "a",
            "ɐ": "a",
            "ꜳ": "aa",
            "æ": "ae",
            "ǽ": "ae",
            "ǣ": "ae",
            "ꜵ": "ao",
            "ꜷ": "au",
            "ꜹ": "av",
            "ꜻ": "av",
            "ꜽ": "ay",
            "ⓑ": "b",
            "ｂ": "b",
            "ḃ": "b",
            "ḅ": "b",
            "ḇ": "b",
            "ƀ": "b",
            "ƃ": "b",
            "ɓ": "b",
            "ⓒ": "c",
            "ｃ": "c",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "ç": "c",
            "ḉ": "c",
            "ƈ": "c",
            "ȼ": "c",
            "ꜿ": "c",
            "ↄ": "c",
            "ⓓ": "d",
            "ｄ": "d",
            "ḋ": "d",
            "ď": "d",
            "ḍ": "d",
            "ḑ": "d",
            "ḓ": "d",
            "ḏ": "d",
            "đ": "d",
            "ƌ": "d",
            "ɖ": "d",
            "ɗ": "d",
            "ꝺ": "d",
            "ǳ": "dz",
            "ǆ": "dz",
            "ⓔ": "e",
            "ｅ": "e",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ề": "e",
            "ế": "e",
            "ễ": "e",
            "ể": "e",
            "ẽ": "e",
            "ē": "e",
            "ḕ": "e",
            "ḗ": "e",
            "ĕ": "e",
            "ė": "e",
            "ë": "e",
            "ẻ": "e",
            "ě": "e",
            "ȅ": "e",
            "ȇ": "e",
            "ẹ": "e",
            "ệ": "e",
            "ȩ": "e",
            "ḝ": "e",
            "ę": "e",
            "ḙ": "e",
            "ḛ": "e",
            "ɇ": "e",
            "ɛ": "e",
            "ǝ": "e",
            "ⓕ": "f",
            "ｆ": "f",
            "ḟ": "f",
            "ƒ": "f",
            "ꝼ": "f",
            "ⓖ": "g",
            "ｇ": "g",
            "ǵ": "g",
            "ĝ": "g",
            "ḡ": "g",
            "ğ": "g",
            "ġ": "g",
            "ǧ": "g",
            "ģ": "g",
            "ǥ": "g",
            "ɠ": "g",
            "ꞡ": "g",
            "ᵹ": "g",
            "ꝿ": "g",
            "ⓗ": "h",
            "ｈ": "h",
            "ĥ": "h",
            "ḣ": "h",
            "ḧ": "h",
            "ȟ": "h",
            "ḥ": "h",
            "ḩ": "h",
            "ḫ": "h",
            "ẖ": "h",
            "ħ": "h",
            "ⱨ": "h",
            "ⱶ": "h",
            "ɥ": "h",
            "ƕ": "hv",
            "ⓘ": "i",
            "ｉ": "i",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "ï": "i",
            "ḯ": "i",
            "ỉ": "i",
            "ǐ": "i",
            "ȉ": "i",
            "ȋ": "i",
            "ị": "i",
            "į": "i",
            "ḭ": "i",
            "ɨ": "i",
            "ı": "i",
            "ⓙ": "j",
            "ｊ": "j",
            "ĵ": "j",
            "ǰ": "j",
            "ɉ": "j",
            "ⓚ": "k",
            "ｋ": "k",
            "ḱ": "k",
            "ǩ": "k",
            "ḳ": "k",
            "ķ": "k",
            "ḵ": "k",
            "ƙ": "k",
            "ⱪ": "k",
            "ꝁ": "k",
            "ꝃ": "k",
            "ꝅ": "k",
            "ꞣ": "k",
            "ⓛ": "l",
            "ｌ": "l",
            "ŀ": "l",
            "ĺ": "l",
            "ľ": "l",
            "ḷ": "l",
            "ḹ": "l",
            "ļ": "l",
            "ḽ": "l",
            "ḻ": "l",
            "ſ": "l",
            "ł": "l",
            "ƚ": "l",
            "ɫ": "l",
            "ⱡ": "l",
            "ꝉ": "l",
            "ꞁ": "l",
            "ꝇ": "l",
            "ǉ": "lj",
            "ⓜ": "m",
            "ｍ": "m",
            "ḿ": "m",
            "ṁ": "m",
            "ṃ": "m",
            "ɱ": "m",
            "ɯ": "m",
            "ⓝ": "n",
            "ｎ": "n",
            "ǹ": "n",
            "ń": "n",
            "ñ": "n",
            "ṅ": "n",
            "ň": "n",
            "ṇ": "n",
            "ņ": "n",
            "ṋ": "n",
            "ṉ": "n",
            "ƞ": "n",
            "ɲ": "n",
            "ŉ": "n",
            "ꞑ": "n",
            "ꞥ": "n",
            "ǌ": "nj",
            "ⓞ": "o",
            "ｏ": "o",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "ồ": "o",
            "ố": "o",
            "ỗ": "o",
            "ổ": "o",
            "õ": "o",
            "ṍ": "o",
            "ȭ": "o",
            "ṏ": "o",
            "ō": "o",
            "ṑ": "o",
            "ṓ": "o",
            "ŏ": "o",
            "ȯ": "o",
            "ȱ": "o",
            "ö": "o",
            "ȫ": "o",
            "ỏ": "o",
            "ő": "o",
            "ǒ": "o",
            "ȍ": "o",
            "ȏ": "o",
            "ơ": "o",
            "ờ": "o",
            "ớ": "o",
            "ỡ": "o",
            "ở": "o",
            "ợ": "o",
            "ọ": "o",
            "ộ": "o",
            "ǫ": "o",
            "ǭ": "o",
            "ø": "o",
            "ǿ": "o",
            "ɔ": "o",
            "ꝋ": "o",
            "ꝍ": "o",
            "ɵ": "o",
            "ƣ": "oi",
            "ȣ": "ou",
            "ꝏ": "oo",
            "ⓟ": "p",
            "ｐ": "p",
            "ṕ": "p",
            "ṗ": "p",
            "ƥ": "p",
            "ᵽ": "p",
            "ꝑ": "p",
            "ꝓ": "p",
            "ꝕ": "p",
            "ⓠ": "q",
            "ｑ": "q",
            "ɋ": "q",
            "ꝗ": "q",
            "ꝙ": "q",
            "ⓡ": "r",
            "ｒ": "r",
            "ŕ": "r",
            "ṙ": "r",
            "ř": "r",
            "ȑ": "r",
            "ȓ": "r",
            "ṛ": "r",
            "ṝ": "r",
            "ŗ": "r",
            "ṟ": "r",
            "ɍ": "r",
            "ɽ": "r",
            "ꝛ": "r",
            "ꞧ": "r",
            "ꞃ": "r",
            "ⓢ": "s",
            "ｓ": "s",
            "ß": "s",
            "ś": "s",
            "ṥ": "s",
            "ŝ": "s",
            "ṡ": "s",
            "š": "s",
            "ṧ": "s",
            "ṣ": "s",
            "ṩ": "s",
            "ș": "s",
            "ş": "s",
            "ȿ": "s",
            "ꞩ": "s",
            "ꞅ": "s",
            "ẛ": "s",
            "ⓣ": "t",
            "ｔ": "t",
            "ṫ": "t",
            "ẗ": "t",
            "ť": "t",
            "ṭ": "t",
            "ț": "t",
            "ţ": "t",
            "ṱ": "t",
            "ṯ": "t",
            "ŧ": "t",
            "ƭ": "t",
            "ʈ": "t",
            "ⱦ": "t",
            "ꞇ": "t",
            "ꜩ": "tz",
            "ⓤ": "u",
            "ｕ": "u",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ũ": "u",
            "ṹ": "u",
            "ū": "u",
            "ṻ": "u",
            "ŭ": "u",
            "ü": "u",
            "ǜ": "u",
            "ǘ": "u",
            "ǖ": "u",
            "ǚ": "u",
            "ủ": "u",
            "ů": "u",
            "ű": "u",
            "ǔ": "u",
            "ȕ": "u",
            "ȗ": "u",
            "ư": "u",
            "ừ": "u",
            "ứ": "u",
            "ữ": "u",
            "ử": "u",
            "ự": "u",
            "ụ": "u",
            "ṳ": "u",
            "ų": "u",
            "ṷ": "u",
            "ṵ": "u",
            "ʉ": "u",
            "ⓥ": "v",
            "ｖ": "v",
            "ṽ": "v",
            "ṿ": "v",
            "ʋ": "v",
            "ꝟ": "v",
            "ʌ": "v",
            "ꝡ": "vy",
            "ⓦ": "w",
            "ｗ": "w",
            "ẁ": "w",
            "ẃ": "w",
            "ŵ": "w",
            "ẇ": "w",
            "ẅ": "w",
            "ẘ": "w",
            "ẉ": "w",
            "ⱳ": "w",
            "ⓧ": "x",
            "ｘ": "x",
            "ẋ": "x",
            "ẍ": "x",
            "ⓨ": "y",
            "ｙ": "y",
            "ỳ": "y",
            "ý": "y",
            "ŷ": "y",
            "ỹ": "y",
            "ȳ": "y",
            "ẏ": "y",
            "ÿ": "y",
            "ỷ": "y",
            "ẙ": "y",
            "ỵ": "y",
            "ƴ": "y",
            "ɏ": "y",
            "ỿ": "y",
            "ⓩ": "z",
            "ｚ": "z",
            "ź": "z",
            "ẑ": "z",
            "ż": "z",
            "ž": "z",
            "ẓ": "z",
            "ẕ": "z",
            "ƶ": "z",
            "ȥ": "z",
            "ɀ": "z",
            "ⱬ": "z",
            "ꝣ": "z",
            "Ά": "Α",
            "Έ": "Ε",
            "Ή": "Η",
            "Ί": "Ι",
            "Ϊ": "Ι",
            "Ό": "Ο",
            "Ύ": "Υ",
            "Ϋ": "Υ",
            "Ώ": "Ω",
            "ά": "α",
            "έ": "ε",
            "ή": "η",
            "ί": "ι",
            "ϊ": "ι",
            "ΐ": "ι",
            "ό": "ο",
            "ύ": "υ",
            "ϋ": "υ",
            "ΰ": "υ",
            "ω": "ω",
            "ς": "σ"
        };
        y = n(document);
        h = function() {
            var n = 1;
            return function() {
                return n++
            }
        }();
        l = k(Object, {
            bind: function(n) {
                var t = this;
                return function() {
                    n.apply(t, arguments)
                }
            },
            init: function(i) {
                var f, e, o = ".select2-results", s, c;
                this.opts = i = this.prepareOpts(i);
                this.id = i.id;
                i.element.data("select2") !== t && i.element.data("select2") !== null && i.element.data("select2").destroy();
                this.container = this.createContainer();
                this.liveRegion = n(".select2-hidden-accessible");
                this.liveRegion.length == 0 && (this.liveRegion = n("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("select2-hidden-accessible").appendTo(document.body));
                this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + h());
                this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
                this.container.attr("id", this.containerId);
                this.container.attr("title", i.element.attr("title"));
                this.body = n(document.body);
                a(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                this.container.attr("style", i.element.attr("style"));
                this.container.css(u(i.containerCss, this.opts.element));
                this.container.addClass(u(i.containerCssClass, this.opts.element));
                this.elementTabIndex = this.opts.element.attr("tabindex");
                this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", r);
                this.container.data("select2", this);
                this.dropdown = this.container.find(".select2-drop");
                a(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                this.dropdown.addClass(u(i.dropdownCssClass, this.opts.element));
                this.dropdown.data("select2", this);
                this.dropdown.on("click", r);
                this.results = f = this.container.find(o);
                this.search = e = this.container.find("input.select2-input");
                this.queryCount = 0;
                this.resultsPage = 0;
                this.context = null;
                this.initContainer();
                this.container.on("click", r);
                vt(this.results);
                this.dropdown.on("mousemove-filtered", o, this.bind(this.highlightUnderEvent));
                this.dropdown.on("touchstart touchmove touchend", o, this.bind(function(n) {
                    this._touchEvent = !0;
                    this.highlightUnderEvent(n)
                }));
                this.dropdown.on("touchmove", o, this.bind(this.touchMoved));
                this.dropdown.on("touchstart touchend", o, this.bind(this.clearTouchMoved));
                this.dropdown.on("click", this.bind(function() {
                    this._touchEvent && (this._touchEvent = !1,
                    this.selectHighlighted())
                }));
                yt(80, this.results);
                this.dropdown.on("scroll-debounced", o, this.bind(this.loadMoreIfNeeded));
                n(this.container).on("change", ".select2-input", function(n) {
                    n.stopPropagation()
                });
                n(this.dropdown).on("change", ".select2-input", function(n) {
                    n.stopPropagation()
                });
                n.fn.mousewheel && f.mousewheel(function(n, t, i, u) {
                    var e = f.scrollTop();
                    u > 0 && e - u <= 0 ? (f.scrollTop(0),
                    r(n)) : u < 0 && f.get(0).scrollHeight - f.scrollTop() + u <= f.height() && (f.scrollTop(f.get(0).scrollHeight - f.height()),
                    r(n))
                });
                it(e);
                e.on("keyup-change input paste", this.bind(this.updateResults));
                e.on("focus", function() {
                    e.addClass("select2-focused")
                });
                e.on("blur", function() {
                    e.removeClass("select2-focused")
                });
                this.dropdown.on("mouseup", o, this.bind(function(t) {
                    n(t.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(t),
                    this.selectHighlighted(t))
                }));
                this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(n) {
                    n.stopPropagation()
                });
                this.lastSearchTerm = t;
                n.isFunction(this.opts.initSelection) && (this.initSelection(),
                this.monitorSource());
                i.maximumInputLength !== null && this.search.attr("maxlength", i.maximumInputLength);
                s = i.element.prop("disabled");
                s === t && (s = !1);
                this.enable(!s);
                c = i.element.prop("readonly");
                c === t && (c = !1);
                this.readonly(c);
                p = p || at();
                this.autofocus = i.element.prop("autofocus");
                i.element.prop("autofocus", !1);
                this.autofocus && this.focus();
                this.search.attr("placeholder", i.searchInputPlaceholder)
            },
            destroy: function() {
                var n = this.opts.element
                  , i = n.data("select2")
                  , r = this;
                this.close();
                n.length && n[0].detachEvent && r._sync && n.each(function() {
                    r._sync && this.detachEvent("onpropertychange", r._sync)
                });
                this.propertyObserver && (this.propertyObserver.disconnect(),
                this.propertyObserver = null);
                this._sync = null;
                i !== t && (i.container.remove(),
                i.liveRegion.remove(),
                i.dropdown.remove(),
                n.removeData("select2").off(".select2"),
                n.is("input[type='hidden']") ? n.css("display", "") : (n.show().prop("autofocus", this.autofocus || !1),
                this.elementTabIndex ? n.attr({
                    tabindex: this.elementTabIndex
                }) : n.removeAttr("tabindex"),
                n.show()));
                b.call(this, "container", "liveRegion", "dropdown", "results", "search")
            },
            optionToData: function(n) {
                return n.is("option") ? {
                    id: n.prop("value"),
                    text: n.text(),
                    element: n.get(),
                    css: n.attr("class"),
                    disabled: n.prop("disabled"),
                    locked: f(n.attr("locked"), "locked") || f(n.data("locked"), !0)
                } : n.is("optgroup") ? {
                    text: n.attr("label"),
                    children: [],
                    element: n.get(),
                    css: n.attr("class")
                } : void 0
            },
            prepareOpts: function(i) {
                var s, c, l, u, e = this, o, r;
                if (s = i.element,
                s.get(0).tagName.toLowerCase() === "select" && (this.select = c = i.element),
                c && n.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                    if (this in i)
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
                }),
                i.debug = i.debug || n.fn.select2.defaults.debug,
                i.debug && console && console.warn && (i.id != null && console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),
                i.text != null && console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),
                i.sortResults != null && console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "),
                i.selectOnBlur != null && console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."),
                i.ajax != null && i.ajax.results != null && console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."),
                i.formatNoResults != null && console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."),
                i.formatSearching != null && console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."),
                i.formatInputTooShort != null && console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."),
                i.formatInputTooLong != null && console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."),
                i.formatLoading != null && console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."),
                i.formatSelectionTooBig != null && console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."),
                i.element.data("select2Tags") && console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")),
                i.element.data("tags") != null && (o = i.element.data("tags"),
                n.isArray(o) || (o = []),
                i.element.data("select2Tags", o)),
                i.sorter != null && (i.sortResults = i.sorter),
                i.selectOnClose != null && (i.selectOnBlur = i.selectOnClose),
                i.ajax != null && n.isFunction(i.ajax.processResults) && (i.ajax.results = i.ajax.processResults),
                i.language != null && (r = i.language,
                n.isFunction(r.noMatches) && (i.formatNoMatches = r.noMatches),
                n.isFunction(r.searching) && (i.formatSearching = r.searching),
                n.isFunction(r.inputTooShort) && (i.formatInputTooShort = r.inputTooShort),
                n.isFunction(r.inputTooLong) && (i.formatInputTooLong = r.inputTooLong),
                n.isFunction(r.loadingMore) && (i.formatLoading = r.loadingMore),
                n.isFunction(r.maximumSelected) && (i.formatSelectionTooBig = r.maximumSelected)),
                i = n.extend({}, {
                    populateResults: function(r, u, f) {
                        var o, s = this.opts.id, c = this.liveRegion;
                        o = function(r, u, l) {
                            var p, nt, v, tt, b, k, a, y, w, d, g;
                            for (r = i.sortResults(r, u, f),
                            g = [],
                            p = 0,
                            nt = r.length; p < nt; p = p + 1)
                                v = r[p],
                                b = v.disabled === !0,
                                tt = !b && s(v) !== t,
                                k = v.children && v.children.length > 0,
                                a = n("<li><\/li>"),
                                a.addClass("select2-results-dept-" + l),
                                a.addClass("select2-result"),
                                a.addClass(tt ? "select2-result-selectable" : "select2-result-unselectable"),
                                b && a.addClass("select2-disabled"),
                                k && a.addClass("select2-result-with-children"),
                                a.addClass(e.opts.formatResultCssClass(v)),
                                a.attr("role", "presentation"),
                                y = n(document.createElement("div")),
                                y.addClass("select2-result-label"),
                                y.attr("id", "select2-result-label-" + h()),
                                y.attr("role", "option"),
                                d = i.formatResult(v, y, f, e.opts.escapeMarkup),
                                d !== t && (y.html(d),
                                a.append(y)),
                                k && (w = n("<ul><\/ul>"),
                                w.addClass("select2-result-sub"),
                                o(v.children, w, l + 1),
                                a.append(w)),
                                a.data("select2-data", v),
                                g.push(a[0]);
                            u.append(g);
                            c.text(i.formatMatches(r.length))
                        }
                        ;
                        o(u, r, 0)
                    }
                }, n.fn.select2.defaults, i),
                typeof i.id != "function" && (l = i.id,
                i.id = function(n) {
                    return n[l]
                }
                ),
                n.isArray(i.element.data("select2Tags"))) {
                    if ("tags"in i)
                        throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + i.element.attr("id");
                    i.tags = i.element.data("select2Tags")
                }
                if (c ? (i.query = this.bind(function(n) {
                    var f = {
                        results: [],
                        more: !1
                    }, o = n.term, i, r, u;
                    u = function(t, i) {
                        var r;
                        t.is("option") ? n.matcher(o, t.text(), t) && i.push(e.optionToData(t)) : t.is("optgroup") && (r = e.optionToData(t),
                        t.children().each2(function(n, t) {
                            u(t, r.children)
                        }),
                        r.children.length > 0 && i.push(r))
                    }
                    ;
                    i = s.children();
                    this.getPlaceholder() !== t && i.length > 0 && (r = this.getPlaceholderOption(),
                    r && (i = i.not(r)));
                    i.each2(function(n, t) {
                        u(t, f.results)
                    });
                    n.callback(f)
                }),
                i.id = function(n) {
                    return n.id
                }
                ) : "query"in i || ("ajax"in i ? (u = i.element.data("ajax-url"),
                u && u.length > 0 && (i.ajax.url = u),
                i.query = et.call(i.element, i.ajax)) : "data"in i ? i.query = ot(i.data) : "tags"in i && (i.query = st(i.tags),
                i.createSearchChoice === t && (i.createSearchChoice = function(t) {
                    return {
                        id: n.trim(t),
                        text: n.trim(t)
                    }
                }
                ),
                i.initSelection === t && (i.initSelection = function(t, r) {
                    var u = [];
                    n(w(t.val(), i.separator, i.transformVal)).each(function() {
                        var r = {
                            id: this,
                            text: this
                        }
                          , t = i.tags;
                        n.isFunction(t) && (t = t());
                        n(t).each(function() {
                            if (f(this.id, r.id))
                                return r = this,
                                !1
                        });
                        u.push(r)
                    });
                    r(u)
                }
                ))),
                typeof i.query != "function")
                    throw "query function not defined for Select2 " + i.element.attr("id");
                if (i.createSearchChoicePosition === "top")
                    i.createSearchChoicePosition = function(n, t) {
                        n.unshift(t)
                    }
                    ;
                else if (i.createSearchChoicePosition === "bottom")
                    i.createSearchChoicePosition = function(n, t) {
                        n.push(t)
                    }
                    ;
                else if (typeof i.createSearchChoicePosition != "function")
                    throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                return i
            },
            monitorSource: function() {
                var i = this.opts.element, r, f = this;
                i.on("change.select2", this.bind(function() {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                }));
                this._sync = this.bind(function() {
                    var r = i.prop("disabled"), n;
                    r === t && (r = !1);
                    this.enable(!r);
                    n = i.prop("readonly");
                    n === t && (n = !1);
                    this.readonly(n);
                    this.container && (a(this.container, this.opts.element, this.opts.adaptContainerCssClass),
                    this.container.addClass(u(this.opts.containerCssClass, this.opts.element)));
                    this.dropdown && (a(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass),
                    this.dropdown.addClass(u(this.opts.dropdownCssClass, this.opts.element)))
                });
                i.length && i[0].attachEvent && i.each(function() {
                    this.attachEvent("onpropertychange", f._sync)
                });
                r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                r !== t && (this.propertyObserver && (delete this.propertyObserver,
                this.propertyObserver = null),
                this.propertyObserver = new r(function(t) {
                    n.each(t, f._sync)
                }
                ),
                this.propertyObserver.observe(i.get(0), {
                    attributes: !0,
                    subtree: !1
                }))
            },
            triggerSelect: function(t) {
                var i = n.Event("select2-selecting", {
                    val: this.id(t),
                    object: t,
                    choice: t
                });
                return this.opts.element.trigger(i),
                !i.isDefaultPrevented()
            },
            triggerChange: function(t) {
                t = t || {};
                t = n.extend({}, t, {
                    type: "change",
                    val: this.val()
                });
                this.opts.element.data("select2-change-triggered", !0);
                this.opts.element.trigger(t);
                this.opts.element.data("select2-change-triggered", !1);
                this.opts.element.click();
                this.opts.blurOnChange && this.opts.element.blur()
            },
            isInterfaceEnabled: function() {
                return this.enabledInterface === !0
            },
            enableInterface: function() {
                var n = this._enabled && !this._readonly
                  , t = !n;
                return n === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", t),
                this.close(),
                this.enabledInterface = n,
                !0)
            },
            enable: function(n) {
                (n === t && (n = !0),
                this._enabled !== n) && (this._enabled = n,
                this.opts.element.prop("disabled", !n),
                this.enableInterface())
            },
            disable: function() {
                this.enable(!1)
            },
            readonly: function(n) {
                (n === t && (n = !1),
                this._readonly !== n) && (this._readonly = n,
                this.opts.element.prop("readonly", n),
                this.enableInterface())
            },
            opened: function() {
                return this.container ? this.container.hasClass("select2-dropdown-open") : !1
            },
            positionDropdown: function() {
                var t = this.dropdown, l = this.container, i = l.offset(), v = l.outerHeight(!1), s = l.outerWidth(!1), o = t.outerHeight(!1), e = n(window), d = e.width(), g = e.height(), y = e.scrollLeft() + d, nt = e.scrollTop() + g, a = i.top + v, h = i.left, tt = a + o <= nt, it = i.top - o >= e.scrollTop(), r = t.outerWidth(!1), rt = function() {
                    return h + r <= y
                }, ut = function() {
                    return i.left + y + l.outerWidth(!1) > r
                }, ft = t.hasClass("select2-drop-above"), w, c, b, f, k;
                ft ? (c = !0,
                !it && tt && (b = !0,
                c = !1)) : (c = !1,
                !tt && it && (b = !0,
                c = !0));
                b && (t.hide(),
                i = this.container.offset(),
                v = this.container.outerHeight(!1),
                s = this.container.outerWidth(!1),
                o = t.outerHeight(!1),
                y = e.scrollLeft() + d,
                nt = e.scrollTop() + g,
                a = i.top + v,
                h = i.left,
                r = t.outerWidth(!1),
                t.show(),
                this.focusSearch());
                this.opts.dropdownAutoWidth ? (k = n(".select2-results", t)[0],
                t.addClass("select2-drop-auto-width"),
                t.css("width", ""),
                r = t.outerWidth(!1) + (k.scrollHeight === k.clientHeight ? 0 : p.width),
                r > s ? s = r : r = s,
                o = t.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width");
                this.body.css("position") !== "static" && (w = this.body.offset(),
                a -= w.top,
                h -= w.left);
                !rt() && ut() && (h = i.left + this.container.outerWidth(!1) - r);
                f = {
                    left: h,
                    width: s
                };
                c ? (this.container.addClass("select2-drop-above"),
                t.addClass("select2-drop-above"),
                o = t.outerHeight(!1),
                f.top = i.top - o,
                f.bottom = "auto") : (f.top = a,
                f.bottom = "auto",
                this.container.removeClass("select2-drop-above"),
                t.removeClass("select2-drop-above"));
                f = n.extend(f, u(this.opts.dropdownCss, this.opts.element));
                t.css(f)
            },
            shouldOpen: function() {
                var t;
                return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (t = n.Event("select2-opening"),
                this.opts.element.trigger(t),
                !t.isDefaultPrevented())
            },
            clearDropdownAlignmentPreference: function() {
                this.container.removeClass("select2-drop-above");
                this.dropdown.removeClass("select2-drop-above")
            },
            open: function() {
                if (!this.shouldOpen())
                    return !1;
                this.opening();
                y.on("mousemove.select2Event", function(n) {
                    v.x = n.pageX;
                    v.y = n.pageY
                });
                return !0
            },
            opening: function() {
                var i = this.containerEventName, u = "scroll." + i, f = "resize." + i, e = "orientationchange." + i, t, r;
                if (this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),
                this.clearDropdownAlignmentPreference(),
                this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body),
                t = n("#select2-drop-mask"),
                t.length === 0) {
                    t = n(document.createElement("div"));
                    t.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask");
                    t.hide();
                    t.appendTo(this.body);
                    t.on("mousedown touchstart click", function(i) {
                        nt(t);
                        var u = n("#select2-drop"), r;
                        u.length > 0 && (r = u.data("select2"),
                        r.opts.selectOnBlur && r.selectHighlighted({
                            noFocus: !0
                        }),
                        r.close(),
                        i.preventDefault(),
                        i.stopPropagation())
                    })
                }
                this.dropdown.prev()[0] !== t[0] && this.dropdown.before(t);
                n("#select2-drop").removeAttr("id");
                this.dropdown.attr("id", "select2-drop");
                t.show();
                this.positionDropdown();
                this.dropdown.show();
                this.positionDropdown();
                this.dropdown.addClass("select2-drop-active");
                r = this;
                this.container.parents().add(window).each(function() {
                    n(this).on(f + " " + u + " " + e, function() {
                        r.opened() && r.positionDropdown()
                    })
                })
            },
            close: function() {
                if (this.opened()) {
                    var t = this.containerEventName
                      , i = "scroll." + t
                      , r = "resize." + t
                      , u = "orientationchange." + t;
                    this.container.parents().add(window).each(function() {
                        n(this).off(i).off(r).off(u)
                    });
                    this.clearDropdownAlignmentPreference();
                    n("#select2-drop-mask").hide();
                    this.dropdown.removeAttr("id");
                    this.dropdown.hide();
                    this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
                    this.results.empty();
                    y.off("mousemove.select2Event");
                    this.clearSearch();
                    this.search.removeClass("select2-active");
                    this.search.removeAttr("aria-activedescendant");
                    this.opts.element.trigger(n.Event("select2-close"))
                }
            },
            externalSearch: function(n) {
                this.open();
                this.search.val(n);
                this.updateResults(!1)
            },
            clearSearch: function() {},
            prefillNextSearchTerm: function() {
                if (this.search.val() !== "")
                    return !1;
                var n = this.opts.nextSearchTerm(this.data(), this.lastSearchTerm);
                return n !== t ? (this.search.val(n),
                this.search.select(),
                !0) : !1
            },
            getMaximumSelectionSize: function() {
                return u(this.opts.maximumSelectionSize, this.opts.element)
            },
            ensureHighlightVisible: function() {
                var t = this.results, e, i, r, u, o, s, f, h;
                if (i = this.highlight(),
                !(i < 0)) {
                    if (i == 0) {
                        t.scrollTop(0);
                        return
                    }
                    e = this.findHighlightableChoices().find(".select2-result-label");
                    r = n(e[i]);
                    h = (r.offset() || {}).top || 0;
                    u = h + r.outerHeight(!0);
                    i === e.length - 1 && (f = t.find("li.select2-more-results"),
                    f.length > 0 && (u = f.offset().top + f.outerHeight(!0)));
                    o = t.offset().top + t.outerHeight(!1);
                    u > o && t.scrollTop(t.scrollTop() + (u - o));
                    s = h - t.offset().top;
                    s < 0 && r.css("display") != "none" && t.scrollTop(t.scrollTop() + s)
                }
            },
            findHighlightableChoices: function() {
                return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
            },
            moveHighlight: function(t) {
                for (var u = this.findHighlightableChoices(), i = this.highlight(), r; i > -1 && i < u.length; )
                    if (i += t,
                    r = n(u[i]),
                    r.hasClass("select2-result-selectable") && !r.hasClass("select2-disabled") && !r.hasClass("select2-selected")) {
                        this.highlight(i);
                        break
                    }
            },
            highlight: function(t) {
                var i = this.findHighlightableChoices(), r, u;
                if (arguments.length === 0)
                    return e(i.filter(".select2-highlighted")[0], i.get());
                t >= i.length && (t = i.length - 1);
                t < 0 && (t = 0);
                this.removeHighlight();
                r = n(i[t]);
                r.addClass("select2-highlighted");
                this.search.attr("aria-activedescendant", r.find(".select2-result-label").attr("id"));
                this.ensureHighlightVisible();
                this.liveRegion.text(r.text());
                u = r.data("select2-data");
                u && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(u),
                    choice: u
                })
            },
            removeHighlight: function() {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            },
            touchMoved: function() {
                this._touchMoved = !0
            },
            clearTouchMoved: function() {
                this._touchMoved = !1
            },
            countSelectableResults: function() {
                return this.findHighlightableChoices().length
            },
            highlightUnderEvent: function(t) {
                var i = n(t.target).closest(".select2-result-selectable"), r;
                i.length > 0 && !i.is(".select2-highlighted") ? (r = this.findHighlightableChoices(),
                this.highlight(r.index(i))) : i.length == 0 && this.removeHighlight()
            },
            loadMoreIfNeeded: function() {
                var t = this.results, i = t.find("li.select2-more-results"), f, r = this.resultsPage + 1, n = this, e = this.search.val(), o = this.context;
                i.length !== 0 && (f = i.offset().top - t.offset().top - t.height(),
                f <= this.opts.loadMorePadding && (i.addClass("select2-active"),
                this.opts.query({
                    element: this.opts.element,
                    term: e,
                    page: r,
                    context: o,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(f) {
                        n.opened() && (n.opts.populateResults.call(this, t, f.results, {
                            term: e,
                            page: r,
                            context: o
                        }),
                        n.postprocessResults(f, !1, !1),
                        f.more === !0 ? (i.detach().appendTo(t).html(n.opts.escapeMarkup(u(n.opts.formatLoadMore, n.opts.element, r + 1))),
                        window.setTimeout(function() {
                            n.loadMoreIfNeeded()
                        }, 10)) : i.remove(),
                        n.positionDropdown(),
                        n.resultsPage = r,
                        n.context = f.context,
                        this.opts.element.trigger({
                            type: "select2-loaded",
                            items: f
                        }))
                    })
                })))
            },
            tokenize: function() {},
            updateResults: function(i) {
                function b() {
                    e.removeClass("select2-active");
                    s.positionDropdown();
                    c.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? s.liveRegion.text(c.text()) : s.liveRegion.text(s.opts.formatMatches(c.find('.select2-result-selectable:not(".select2-selected")').length))
                }
                function h(n) {
                    c.html(n);
                    b()
                }
                var e = this.search, c = this.results, r = this.opts, v, s = this, l, y = e.val(), p = n.data(this.container, "select2-last-term"), w, a;
                if ((i === !0 || !p || !f(y, p)) && (n.data(this.container, "select2-last-term", y),
                i === !0 || this.showSearchInput !== !1 && this.opened())) {
                    if (w = ++this.queryCount,
                    a = this.getMaximumSelectionSize(),
                    a >= 1 && (v = this.data(),
                    n.isArray(v) && v.length >= a && o(r.formatSelectionTooBig, "formatSelectionTooBig"))) {
                        h("<li class='select2-selection-limit'>" + u(r.formatSelectionTooBig, r.element, a) + "<\/li>");
                        return
                    }
                    if (e.val().length < r.minimumInputLength) {
                        o(r.formatInputTooShort, "formatInputTooShort") ? h("<li class='select2-no-results'>" + u(r.formatInputTooShort, r.element, e.val(), r.minimumInputLength) + "<\/li>") : h("");
                        i && this.showSearch && this.showSearch(!0);
                        return
                    }
                    if (r.maximumInputLength && e.val().length > r.maximumInputLength) {
                        o(r.formatInputTooLong, "formatInputTooLong") ? h("<li class='select2-no-results'>" + u(r.formatInputTooLong, r.element, e.val(), r.maximumInputLength) + "<\/li>") : h("");
                        return
                    }
                    r.formatSearching && this.findHighlightableChoices().length === 0 && h("<li class='select2-searching'>" + u(r.formatSearching, r.element) + "<\/li>");
                    e.addClass("select2-active");
                    this.removeHighlight();
                    l = this.tokenize();
                    l != t && l != null && e.val(l);
                    this.resultsPage = 1;
                    r.query({
                        element: r.element,
                        term: e.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: r.matcher,
                        callback: this.bind(function(l) {
                            var a;
                            if (w == this.queryCount) {
                                if (!this.opened()) {
                                    this.search.removeClass("select2-active");
                                    return
                                }
                                if (l.hasError !== t && o(r.formatAjaxError, "formatAjaxError")) {
                                    h("<li class='select2-ajax-error'>" + u(r.formatAjaxError, r.element, l.jqXHR, l.textStatus, l.errorThrown) + "<\/li>");
                                    return
                                }
                                if (this.context = l.context === t ? null : l.context,
                                this.opts.createSearchChoice && e.val() !== "" && (a = this.opts.createSearchChoice.call(s, e.val(), l.results),
                                a !== t && a !== null && s.id(a) !== t && s.id(a) !== null && n(l.results).filter(function() {
                                    return f(s.id(this), s.id(a))
                                }).length === 0 && this.opts.createSearchChoicePosition(l.results, a)),
                                l.results.length === 0 && o(r.formatNoMatches, "formatNoMatches")) {
                                    h("<li class='select2-no-results'>" + u(r.formatNoMatches, r.element, e.val()) + "<\/li>");
                                    this.showSearch && this.showSearch(e.val());
                                    return
                                }
                                c.empty();
                                s.opts.populateResults.call(this, c, l.results, {
                                    term: e.val(),
                                    page: this.resultsPage,
                                    context: null
                                });
                                l.more === !0 && o(r.formatLoadMore, "formatLoadMore") && (c.append("<li class='select2-more-results'>" + r.escapeMarkup(u(r.formatLoadMore, r.element, this.resultsPage)) + "<\/li>"),
                                window.setTimeout(function() {
                                    s.loadMoreIfNeeded()
                                }, 10));
                                this.postprocessResults(l, i);
                                b();
                                this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: l
                                })
                            }
                        })
                    })
                }
            },
            cancel: function() {
                this.close()
            },
            blur: function() {
                this.opts.selectOnBlur && this.selectHighlighted({
                    noFocus: !0
                });
                this.close();
                this.container.removeClass("select2-container-active");
                this.search[0] === document.activeElement && this.search.blur();
                this.clearSearch();
                this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            },
            focusSearch: function() {
                pt(this.search)
            },
            selectHighlighted: function(n) {
                if (this._touchMoved) {
                    this.clearTouchMoved();
                    return
                }
                var i = this.highlight()
                  , r = this.results.find(".select2-highlighted")
                  , t = r.closest(".select2-result").data("select2-data");
                if (t) {
                    this.highlight(i);
                    this.onSelect(t, n)
                } else
                    n && n.noFocus && this.close()
            },
            getPlaceholder: function() {
                var n;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((n = this.getPlaceholderOption()) !== t ? n.text() : t)
            },
            getPlaceholderOption: function() {
                if (this.select) {
                    var i = this.select.children("option").first();
                    if (this.opts.placeholderOption !== t)
                        return this.opts.placeholderOption === "first" && i || typeof this.opts.placeholderOption == "function" && this.opts.placeholderOption(this.select);
                    if (n.trim(i.text()) === "" && i.val() === "")
                        return i
                }
            },
            initContainerWidth: function() {
                function i() {
                    var t, u, r, i, f, e;
                    if (this.opts.width === "off")
                        return null;
                    if (this.opts.width === "element")
                        return this.opts.element.outerWidth(!1) === 0 ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if (this.opts.width === "copy" || this.opts.width === "resolve") {
                        if (t = this.opts.element.attr("style"),
                        typeof t == "string")
                            for (u = t.split(";"),
                            i = 0,
                            f = u.length; i < f; i = i + 1)
                                if (e = u[i].replace(/\s/g, ""),
                                r = e.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),
                                r !== null && r.length >= 1)
                                    return r[1];
                        return this.opts.width === "resolve" ? (t = this.opts.element.css("width"),
                        t.indexOf("%") > 0) ? t : this.opts.element.outerWidth(!1) === 0 ? "auto" : this.opts.element.outerWidth(!1) + "px" : null
                    }
                    return n.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var t = i.call(this);
                t !== null && this.container.css("width", t)
            }
        });
        d = k(l, {
            createContainer: function() {
                return n(document.createElement("div")).attr({
                    "class": "select2-container"
                }).html("<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>   <span class='select2-chosen'>&#160;<\/span><abbr class='select2-search-choice-close'><\/abbr>   <span class='select2-arrow' role='presentation'><b role='presentation'><\/b><\/span><\/a><label for='' class='select2-offscreen'><\/label><input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' /><div class='select2-drop select2-display-none'>   <div class='select2-search'>       <label for='' class='select2-offscreen'><\/label>       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'       aria-autocomplete='list' />   <\/div>   <ul class='select2-results' role='listbox'>   <\/ul><\/div>")
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            },
            opening: function() {
                var t, i, r;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0);
                this.parent.opening.apply(this, arguments);
                this.showSearchInput !== !1 && this.search.val(this.focusser.val());
                this.opts.shouldFocusInput(this) && (this.search.focus(),
                t = this.search.get(0),
                t.createTextRange ? (i = t.createTextRange(),
                i.collapse(!1),
                i.select()) : t.setSelectionRange && (r = this.search.val().length,
                t.setSelectionRange(r, r)));
                this.prefillNextSearchTerm();
                this.focusser.prop("disabled", !0).val("");
                this.updateResults(!0);
                this.opts.element.trigger(n.Event("select2-open"))
            },
            close: function() {
                this.opened() && (this.parent.close.apply(this, arguments),
                this.focusser.prop("disabled", !1),
                this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            focus: function() {
                this.opened() ? this.close() : (this.focusser.prop("disabled", !1),
                this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            isFocused: function() {
                return this.container.hasClass("select2-container-active")
            },
            cancel: function() {
                this.parent.cancel.apply(this, arguments);
                this.focusser.prop("disabled", !1);
                this.opts.shouldFocusInput(this) && this.focusser.focus()
            },
            destroy: function() {
                n("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id"));
                this.parent.destroy.apply(this, arguments);
                b.call(this, "selection", "focusser")
            },
            initContainer: function() {
                var t, e = this.container, s = this.dropdown, u = h(), f, o;
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0);
                this.selection = t = e.find(".select2-choice");
                this.focusser = e.find(".select2-focusser");
                t.find(".select2-chosen").attr("id", "select2-chosen-" + u);
                this.focusser.attr("aria-labelledby", "select2-chosen-" + u);
                this.results.attr("id", "select2-results-" + u);
                this.search.attr("aria-owns", "select2-results-" + u);
                this.focusser.attr("id", "s2id_autogen" + u);
                f = n("label[for='" + this.opts.element.attr("id") + "']");
                this.opts.element.on("focus.select2", this.bind(function() {
                    this.focus()
                }));
                this.focusser.prev().text(f.text()).attr("for", this.focusser.attr("id"));
                o = this.opts.element.attr("title");
                this.opts.element.attr("title", o || f.text());
                this.focusser.attr("tabindex", this.elementTabIndex);
                this.search.attr("id", this.focusser.attr("id") + "_search");
                this.search.prev().text(n("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id"));
                this.search.on("keydown", this.bind(function(n) {
                    if (this.isInterfaceEnabled() && 229 != n.keyCode) {
                        if (n.which === i.PAGE_UP || n.which === i.PAGE_DOWN) {
                            r(n);
                            return
                        }
                        switch (n.which) {
                        case i.UP:
                        case i.DOWN:
                            this.moveHighlight(n.which === i.UP ? -1 : 1);
                            r(n);
                            return;
                        case i.ENTER:
                            this.selectHighlighted();
                            r(n);
                            return;
                        case i.TAB:
                            this.selectHighlighted({
                                noFocus: !0
                            });
                            return;
                        case i.ESC:
                            this.cancel(n);
                            r(n);
                            return
                        }
                    }
                }));
                this.search.on("blur", this.bind(function() {
                    document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                        this.opened() && this.results && this.results.length > 1 && this.search.focus()
                    }), 0)
                }));
                this.focusser.on("keydown", this.bind(function(n) {
                    if (this.isInterfaceEnabled() && n.which !== i.TAB && !i.isControl(n) && !i.isFunctionKey(n) && n.which !== i.ESC) {
                        if (this.opts.openOnEnter === !1 && n.which === i.ENTER) {
                            r(n);
                            return
                        }
                        if (n.which == i.DOWN || n.which == i.UP || n.which == i.ENTER && this.opts.openOnEnter) {
                            if (n.altKey || n.ctrlKey || n.shiftKey || n.metaKey)
                                return;
                            this.open();
                            r(n);
                            return
                        }
                        if (n.which == i.DELETE || n.which == i.BACKSPACE) {
                            this.opts.allowClear && this.clear();
                            r(n);
                            return
                        }
                    }
                }));
                it(this.focusser);
                this.focusser.on("keyup-change input", this.bind(function(n) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (n.stopPropagation(),
                        this.opened())
                            return;
                        this.open()
                    }
                }));
                t.on("mousedown touchstart", "abbr", this.bind(function(n) {
                    this.isInterfaceEnabled() && (this.clear(),
                    bt(n),
                    this.close(),
                    this.selection && this.selection.focus())
                }));
                t.on("mousedown touchstart", this.bind(function(i) {
                    nt(t);
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus"));
                    this.opened() ? this.close() : this.isInterfaceEnabled() && this.open();
                    r(i)
                }));
                s.on("mousedown touchstart", this.bind(function() {
                    this.opts.shouldFocusInput(this) && this.search.focus()
                }));
                t.on("focus", this.bind(function(n) {
                    r(n)
                }));
                this.focusser.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus"));
                    this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function() {
                    this.opened() || (this.container.removeClass("select2-container-active"),
                    this.opts.element.trigger(n.Event("select2-blur")))
                }));
                this.search.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus"));
                    this.container.addClass("select2-container-active")
                }));
                this.initContainerWidth();
                this.opts.element.hide();
                this.setPlaceholder()
            },
            clear: function(t) {
                var i = this.selection.data("select2-data"), r, u;
                if (i) {
                    if (r = n.Event("select2-clearing"),
                    this.opts.element.trigger(r),
                    r.isDefaultPrevented())
                        return;
                    u = this.getPlaceholderOption();
                    this.opts.element.val(u ? u.val() : "");
                    this.selection.find(".select2-chosen").empty();
                    this.selection.removeData("select2-data");
                    this.setPlaceholder();
                    t !== !1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(i),
                        choice: i
                    }),
                    this.triggerChange({
                        removed: i
                    }))
                }
            },
            initSelection: function() {
                var n;
                this.isPlaceholderOptionSelected() ? (this.updateSelection(null),
                this.close(),
                this.setPlaceholder()) : (n = this,
                this.opts.initSelection.call(null, this.opts.element, function(i) {
                    i !== t && i !== null && (n.updateSelection(i),
                    n.close(),
                    n.setPlaceholder(),
                    n.lastSearchTerm = n.search.val())
                }))
            },
            isPlaceholderOptionSelected: function() {
                var n;
                return this.getPlaceholder() === t ? !1 : (n = this.getPlaceholderOption()) !== t && n.prop("selected") || this.opts.element.val() === "" || this.opts.element.val() === t || this.opts.element.val() === null
            },
            prepareOpts: function() {
                var t = this.parent.prepareOpts.apply(this, arguments)
                  , i = this;
                return t.element.get(0).tagName.toLowerCase() === "select" ? t.initSelection = function(n, t) {
                    var r = n.find("option").filter(function() {
                        return this.selected && !this.disabled
                    });
                    t(i.optionToData(r))
                }
                : "data"in t && (t.initSelection = t.initSelection || function(i, r) {
                    var e = i.val()
                      , u = null;
                    t.query({
                        matcher: function(n, i, r) {
                            var o = f(e, t.id(r));
                            return o && (u = r),
                            o
                        },
                        callback: n.isFunction(r) ? function() {
                            r(u)
                        }
                        : n.noop
                    })
                }
                ),
                t
            },
            getPlaceholder: function() {
                return this.select && this.getPlaceholderOption() === t ? t : this.parent.getPlaceholder.apply(this, arguments)
            },
            setPlaceholder: function() {
                var n = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && n !== t) {
                    if (this.select && this.getPlaceholderOption() === t)
                        return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(n));
                    this.selection.addClass("select2-default");
                    this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(n, t, i) {
                var r = 0, e = this, u;
                this.findHighlightableChoices().each2(function(n, t) {
                    if (f(e.id(t.data("select2-data")), e.opts.element.val()))
                        return r = n,
                        !1
                });
                i !== !1 && (t === !0 && r >= 0 ? this.highlight(r) : this.highlight(0));
                t === !0 && (u = this.opts.minimumResultsForSearch,
                u >= 0 && this.showSearch(ht(n.results) >= u))
            },
            showSearch: function(t) {
                this.showSearchInput !== t && (this.showSearchInput = t,
                this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !t),
                this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !t),
                n(this.dropdown, this.container).toggleClass("select2-with-searchbox", t))
            },
            onSelect: function(n, t) {
                if (this.triggerSelect(n)) {
                    var i = this.opts.element.val()
                      , r = this.data();
                    this.opts.element.val(this.id(n));
                    this.updateSelection(n);
                    this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(n),
                        choice: n
                    });
                    this.lastSearchTerm = this.search.val();
                    this.close();
                    t && t.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus();
                    f(i, this.id(n)) || this.triggerChange({
                        added: n,
                        removed: r
                    })
                }
            },
            updateSelection: function(n) {
                var i = this.selection.find(".select2-chosen"), r, u;
                this.selection.data("select2-data", n);
                i.empty();
                n !== null && (r = this.opts.formatSelection(n, i, this.opts.escapeMarkup));
                r !== t && i.append(r);
                u = this.opts.formatSelectionCssClass(n, i);
                u !== t && i.addClass(u);
                this.selection.removeClass("select2-default");
                this.opts.allowClear && this.getPlaceholder() !== t && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var i, r = !1, u = null, n = this, f = this.data();
                if (arguments.length === 0)
                    return this.opts.element.val();
                if (i = arguments[0],
                arguments.length > 1 && (r = arguments[1],
                this.opts.debug && console && console.warn && console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')),
                this.select)
                    this.opts.debug && console && console.warn && console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'),
                    this.select.val(i).find("option").filter(function() {
                        return this.selected
                    }).each2(function(t, i) {
                        return u = n.optionToData(i),
                        !1
                    }),
                    this.updateSelection(u),
                    this.setPlaceholder(),
                    r && this.triggerChange({
                        added: u,
                        removed: f
                    });
                else {
                    if (!i && i !== 0) {
                        this.clear(r);
                        return
                    }
                    if (this.opts.initSelection === t)
                        throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(i);
                    this.opts.initSelection(this.opts.element, function(t) {
                        n.opts.element.val(t ? n.id(t) : "");
                        n.updateSelection(t);
                        n.setPlaceholder();
                        r && n.triggerChange({
                            added: t,
                            removed: f
                        })
                    })
                }
            },
            clearSearch: function() {
                this.search.val("");
                this.focusser.val("")
            },
            data: function(n) {
                var i, r = !1;
                if (arguments.length === 0)
                    return i = this.selection.data("select2-data"),
                    i == t && (i = null),
                    i;
                this.opts.debug && console && console.warn && console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.');
                arguments.length > 1 && (r = arguments[1]);
                n ? (i = this.data(),
                this.opts.element.val(n ? this.id(n) : ""),
                this.updateSelection(n),
                r && this.triggerChange({
                    added: n,
                    removed: i
                })) : this.clear(r)
            }
        });
        g = k(l, {
            createContainer: function() {
                return n(document.createElement("div")).attr({
                    "class": "select2-container select2-container-multi"
                }).html("<ul class='select2-choices'>  <li class='select2-search-field'>    <label for='' class='select2-offscreen'><\/label>    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>  <\/li><\/ul><div class='select2-drop select2-drop-multi select2-display-none'>   <ul class='select2-results'>   <\/ul><\/div>")
            },
            prepareOpts: function() {
                var t = this.parent.prepareOpts.apply(this, arguments)
                  , i = this;
                return t.element.get(0).tagName.toLowerCase() === "select" ? t.initSelection = function(n, t) {
                    var r = [];
                    n.find("option").filter(function() {
                        return this.selected && !this.disabled
                    }).each2(function(n, t) {
                        r.push(i.optionToData(t))
                    });
                    t(r)
                }
                : "data"in t && (t.initSelection = t.initSelection || function(i, r) {
                    var e = w(i.val(), t.separator, t.transformVal)
                      , u = [];
                    t.query({
                        matcher: function(i, r, o) {
                            var s = n.grep(e, function(n) {
                                return f(n, t.id(o))
                            }).length;
                            return s && u.push(o),
                            s
                        },
                        callback: n.isFunction(r) ? function() {
                            for (var h, n, o, s = [], i = 0; i < e.length; i++)
                                for (h = e[i],
                                n = 0; n < u.length; n++)
                                    if (o = u[n],
                                    f(h, t.id(o))) {
                                        s.push(o);
                                        u.splice(n, 1);
                                        break
                                    }
                            r(s)
                        }
                        : n.noop
                    })
                }
                ),
                t
            },
            selectChoice: function(n) {
                var t = this.container.find(".select2-search-choice-focus");
                t.length && n && n[0] == t[0] || (t.length && this.opts.element.trigger("choice-deselected", t),
                t.removeClass("select2-search-choice-focus"),
                n && n.length && (this.close(),
                n.addClass("select2-search-choice-focus"),
                this.opts.element.trigger("choice-selected", n)))
            },
            destroy: function() {
                n("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id"));
                this.parent.destroy.apply(this, arguments);
                b.call(this, "searchContainer", "selection")
            },
            initContainer: function() {
                var t = ".select2-choices", u, f;
                this.searchContainer = this.container.find(".select2-search-field");
                this.selection = u = this.container.find(t);
                f = this;
                this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function() {
                    f.search[0].focus();
                    f.selectChoice(n(this))
                });
                this.search.attr("id", "s2id_autogen" + h());
                this.search.prev().text(n("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id"));
                this.opts.element.on("focus.select2", this.bind(function() {
                    this.focus()
                }));
                this.search.on("input paste", this.bind(function() {
                    this.search.attr("placeholder") && this.search.val().length == 0 || this.isInterfaceEnabled() && (this.opened() || this.open())
                }));
                this.search.attr("tabindex", this.elementTabIndex);
                this.keydowns = 0;
                this.search.on("keydown", this.bind(function(n) {
                    var t;
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var f = u.find(".select2-search-choice-focus")
                          , o = f.prev(".select2-search-choice:not(.select2-locked)")
                          , e = f.next(".select2-search-choice:not(.select2-locked)")
                          , s = wt(this.search);
                        if (f.length && (n.which == i.LEFT || n.which == i.RIGHT || n.which == i.BACKSPACE || n.which == i.DELETE || n.which == i.ENTER)) {
                            t = f;
                            n.which == i.LEFT && o.length ? t = o : n.which == i.RIGHT ? t = e.length ? e : null : n.which === i.BACKSPACE ? this.unselect(f.first()) && (this.search.width(10),
                            t = o.length ? o : e) : n.which == i.DELETE ? this.unselect(f.first()) && (this.search.width(10),
                            t = e.length ? e : null) : n.which == i.ENTER && (t = null);
                            this.selectChoice(t);
                            r(n);
                            t && t.length || this.open();
                            return
                        }
                        if ((n.which !== i.BACKSPACE || this.keydowns != 1) && n.which != i.LEFT || s.offset != 0 || s.length)
                            this.selectChoice(null);
                        else {
                            this.selectChoice(u.find(".select2-search-choice:not(.select2-locked)").last());
                            r(n);
                            return
                        }
                        if (this.opened())
                            switch (n.which) {
                            case i.UP:
                            case i.DOWN:
                                this.moveHighlight(n.which === i.UP ? -1 : 1);
                                r(n);
                                return;
                            case i.ENTER:
                                this.selectHighlighted();
                                r(n);
                                return;
                            case i.TAB:
                                this.selectHighlighted({
                                    noFocus: !0
                                });
                                this.close();
                                return;
                            case i.ESC:
                                this.cancel(n);
                                r(n);
                                return
                            }
                        if (n.which !== i.TAB && !i.isControl(n) && !i.isFunctionKey(n) && n.which !== i.BACKSPACE && n.which !== i.ESC) {
                            if (n.which === i.ENTER) {
                                if (this.opts.openOnEnter === !1)
                                    return;
                                if (n.altKey || n.ctrlKey || n.shiftKey || n.metaKey)
                                    return
                            }
                            this.open();
                            (n.which === i.PAGE_UP || n.which === i.PAGE_DOWN) && r(n);
                            n.which === i.ENTER && r(n)
                        }
                    }
                }));
                this.search.on("keyup", this.bind(function() {
                    this.keydowns = 0;
                    this.resizeSearch()
                }));
                this.search.on("blur", this.bind(function(t) {
                    this.container.removeClass("select2-container-active");
                    this.search.removeClass("select2-focused");
                    this.selectChoice(null);
                    this.opened() || this.clearSearch();
                    t.stopImmediatePropagation();
                    this.opts.element.trigger(n.Event("select2-blur"))
                }));
                this.container.on("click", t, this.bind(function(t) {
                    this.isInterfaceEnabled() && (n(t.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null),
                    this.clearPlaceholder(),
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")),
                    this.open(),
                    this.focusSearch(),
                    t.preventDefault()))
                }));
                this.container.on("focus", t, this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")),
                    this.container.addClass("select2-container-active"),
                    this.dropdown.addClass("select2-drop-active"),
                    this.clearPlaceholder())
                }));
                this.initContainerWidth();
                this.opts.element.hide();
                this.clearSearch()
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            },
            initSelection: function() {
                var n;
                this.opts.element.val() === "" && this.opts.element.text() === "" && (this.updateSelection([]),
                this.close(),
                this.clearSearch());
                (this.select || this.opts.element.val() !== "") && (n = this,
                this.opts.initSelection.call(null, this.opts.element, function(i) {
                    i !== t && i !== null && (n.updateSelection(i),
                    n.close(),
                    n.clearSearch())
                }))
            },
            clearSearch: function() {
                var n = this.getPlaceholder()
                  , i = this.getMaxSearchWidth();
                n !== t && this.getVal().length === 0 && this.search.hasClass("select2-focused") === !1 ? (this.search.val(n).addClass("select2-default"),
                this.search.width(i > 0 ? i : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            },
            opening: function() {
                this.clearPlaceholder();
                this.resizeSearch();
                this.parent.opening.apply(this, arguments);
                this.focusSearch();
                this.prefillNextSearchTerm();
                this.updateResults(!0);
                this.opts.shouldFocusInput(this) && this.search.focus();
                this.opts.element.trigger(n.Event("select2-open"))
            },
            close: function() {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function() {
                this.close();
                this.search.focus()
            },
            isFocused: function() {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function(t) {
                var r = {}
                  , u = []
                  , i = this;
                n(t).each(function() {
                    i.id(this)in r || (r[i.id(this)] = 0,
                    u.push(this))
                });
                this.selection.find(".select2-search-choice").remove();
                this.addSelectedChoice(u);
                i.postprocessResults()
            },
            tokenize: function() {
                var n = this.search.val();
                n = this.opts.tokenizer.call(this, n, this.data(), this.bind(this.onSelect), this.opts);
                n != null && n != t && (this.search.val(n),
                n.length > 0 && this.open())
            },
            onSelect: function(n, t) {
                this.triggerSelect(n) && n.text !== "" && (this.addSelectedChoice(n),
                this.opts.element.trigger({
                    type: "selected",
                    val: this.id(n),
                    choice: n
                }),
                this.lastSearchTerm = this.search.val(),
                this.clearSearch(),
                this.updateResults(),
                (this.select || !this.opts.closeOnSelect) && this.postprocessResults(n, !1, this.opts.closeOnSelect === !0),
                this.opts.closeOnSelect ? (this.close(),
                this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10),
                this.resizeSearch(),
                this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.prefillNextSearchTerm() && this.updateResults(),
                this.positionDropdown()) : (this.close(),
                this.search.width(10)),
                this.triggerChange({
                    added: n
                }),
                t && t.noFocus || this.focusSearch())
            },
            cancel: function() {
                this.close();
                this.focusSearch()
            },
            addSelectedChoice: function(t) {
                var i = this.getVal()
                  , r = this;
                n(t).each(function() {
                    i.push(r.createChoice(this))
                });
                this.setVal(i)
            },
            createChoice: function(i) {
                var o = !i.locked, s = n("<li class='select2-search-choice'>    <div><\/div>    <a href='#' class='select2-search-choice-close' tabindex='-1'><\/a><\/li>"), h = n("<li class='select2-search-choice select2-locked'><div><\/div><\/li>"), u = o ? s : h, c = this.id(i), f, e;
                if (f = this.opts.formatSelection(i, u.find("div"), this.opts.escapeMarkup),
                f != t && u.find("div").replaceWith(n("<div><\/div>").html(f)),
                e = this.opts.formatSelectionCssClass(i, u.find("div")),
                e != t && u.addClass(e),
                o)
                    u.find(".select2-search-choice-close").on("mousedown", r).on("click dblclick", this.bind(function(t) {
                        this.isInterfaceEnabled() && (this.unselect(n(t.target)),
                        this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),
                        r(t),
                        this.close(),
                        this.focusSearch())
                    })).on("focus", this.bind(function() {
                        this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"),
                        this.dropdown.addClass("select2-drop-active"))
                    }));
                return u.data("select2-data", i),
                u.insertBefore(this.searchContainer),
                c
            },
            unselect: function(t) {
                var u = this.getVal(), i, f, r;
                if (t = t.closest(".select2-search-choice"),
                t.length === 0)
                    throw "Invalid argument: " + t + ". Must be .select2-search-choice";
                if (i = t.data("select2-data"),
                i) {
                    if (r = n.Event("select2-removing"),
                    r.val = this.id(i),
                    r.choice = i,
                    this.opts.element.trigger(r),
                    r.isDefaultPrevented())
                        return !1;
                    while ((f = e(this.id(i), u)) >= 0)
                        u.splice(f, 1),
                        this.setVal(u),
                        this.select && this.postprocessResults();
                    return t.remove(),
                    this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(i),
                        choice: i
                    }),
                    this.triggerChange({
                        removed: i
                    }),
                    !0
                }
            },
            postprocessResults: function(n, t, i) {
                var s = this.getVal()
                  , f = this.results.find(".select2-result")
                  , h = this.results.find(".select2-result-with-children")
                  , r = this;
                f.each2(function(n, t) {
                    var i = r.id(t.data("select2-data"));
                    e(i, s) >= 0 && (t.addClass("select2-selected"),
                    t.find(".select2-result-selectable").addClass("select2-selected"))
                });
                h.each2(function(n, t) {
                    t.is(".select2-result-selectable") || t.find(".select2-result-selectable:not(.select2-selected)").length !== 0 || t.addClass("select2-selected")
                });
                this.highlight() == -1 && i !== !1 && this.opts.closeOnSelect === !0 && r.highlight(0);
                !this.opts.createSearchChoice && !f.filter(".select2-result:not(.select2-selected)").length > 0 && (n && (!n || n.more || this.results.find(".select2-no-results").length !== 0) || o(r.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + u(r.opts.formatNoMatches, r.opts.element, r.search.val()) + "<\/li>"))
            },
            getMaxSearchWidth: function() {
                return this.selection.width() - tt(this.search)
            },
            resizeSearch: function() {
                var i, u, t, f, n, r = tt(this.search);
                i = kt(this.search) + 10;
                u = this.search.offset().left;
                t = this.selection.width();
                f = this.selection.offset().left;
                n = t - (u - f) - r;
                n < i && (n = t - r);
                n < 40 && (n = t - r);
                n <= 0 && (n = i);
                this.search.width(Math.floor(n))
            },
            getVal: function() {
                var n;
                return this.select ? (n = this.select.val(),
                n === null ? [] : n) : (n = this.opts.element.val(),
                w(n, this.opts.separator, this.opts.transformVal))
            },
            setVal: function(t) {
                if (this.select)
                    this.select.val(t);
                else {
                    var i = []
                      , r = {};
                    n(t).each(function() {
                        this in r || (i.push(this),
                        r[this] = 0)
                    });
                    this.opts.element.val(i.length === 0 ? "" : i.join(this.opts.separator))
                }
            },
            buildChangeDetails: function(n, t) {
                for (var r, t = t.slice(0), n = n.slice(0), i = 0; i < t.length; i++)
                    for (r = 0; r < n.length; r++)
                        if (f(this.opts.id(t[i]), this.opts.id(n[r]))) {
                            t.splice(i, 1);
                            i--;
                            n.splice(r, 1);
                            break
                        }
                return {
                    added: t,
                    removed: n
                }
            },
            val: function(i, r) {
                var f, u = this;
                if (arguments.length === 0)
                    return this.getVal();
                if (f = this.data(),
                f.length || (f = []),
                !i && i !== 0) {
                    this.opts.element.val("");
                    this.updateSelection([]);
                    this.clearSearch();
                    r && this.triggerChange({
                        added: this.data(),
                        removed: f
                    });
                    return
                }
                if (this.setVal(i),
                this.select)
                    this.opts.initSelection(this.select, this.bind(this.updateSelection)),
                    r && this.triggerChange(this.buildChangeDetails(f, this.data()));
                else {
                    if (this.opts.initSelection === t)
                        throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function(t) {
                        var i = n.map(t, u.id);
                        u.setVal(i);
                        u.updateSelection(t);
                        u.clearSearch();
                        r && u.triggerChange(u.buildChangeDetails(f, u.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function() {
                if (this.select)
                    throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0);
                this.searchContainer.hide()
            },
            onSortEnd: function() {
                var t = []
                  , i = this;
                this.searchContainer.show();
                this.searchContainer.appendTo(this.searchContainer.parent());
                this.resizeSearch();
                this.selection.find(".select2-search-choice").each(function() {
                    t.push(i.opts.id(n(this).data("select2-data")))
                });
                this.setVal(t);
                this.triggerChange()
            },
            data: function(t, i) {
                var f = this, r, u;
                if (arguments.length === 0)
                    return this.selection.children(".select2-search-choice").map(function() {
                        return n(this).data("select2-data")
                    }).get();
                u = this.data();
                t || (t = []);
                r = n.map(t, function(n) {
                    return f.opts.id(n)
                });
                this.setVal(r);
                this.updateSelection(t);
                this.clearSearch();
                i && this.triggerChange(this.buildChangeDetails(u, this.data()))
            }
        });
        n.fn.select2 = function() {
            var i = Array.prototype.slice.call(arguments, 0), r, u, f, o, s, c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"], l = ["opened", "isFocused", "container", "dropdown"], a = ["val", "data"], h = {
                search: "externalSearch"
            };
            return this.each(function() {
                if (i.length === 0 || typeof i[0] == "object")
                    r = i.length === 0 ? {} : n.extend({}, i[0]),
                    r.element = n(this),
                    r.element.get(0).tagName.toLowerCase() === "select" ? s = r.element.prop("multiple") : (s = r.multiple || !1,
                    "tags"in r && (r.multiple = s = !0)),
                    u = s ? new window.Select2["class"].multi : new window.Select2["class"].single,
                    u.init(r);
                else if (typeof i[0] == "string") {
                    if (e(i[0], c) < 0)
                        throw "Unknown method: " + i[0];
                    if (o = t,
                    u = n(this).data("select2"),
                    u === t)
                        return;
                    if (f = i[0],
                    f === "container" ? o = u.container : f === "dropdown" ? o = u.dropdown : (h[f] && (f = h[f]),
                    o = u[f].apply(u, i.slice(1))),
                    e(i[0], l) >= 0 || e(i[0], a) >= 0 && i.length == 1)
                        return !1
                } else
                    throw "Invalid arguments to select2 plugin: " + i;
            }),
            o === t ? this : o
        }
        ;
        n.fn.select2.defaults = {
            debug: !1,
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function(n, t, i, r) {
                var u = [];
                return ut(this.text(n), i.term, u, r),
                u.join("")
            },
            transformVal: function(t) {
                return n.trim(t)
            },
            formatSelection: function(n, i, r) {
                return n ? r(this.text(n)) : t
            },
            sortResults: function(n) {
                return n
            },
            formatResultCssClass: function(n) {
                return n.css
            },
            formatSelectionCssClass: function() {
                return t
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function(n) {
                return n == t ? null : n.id
            },
            text: function(t) {
                return t && this.data && this.data.text ? n.isFunction(this.data.text) ? this.data.text(t) : t[this.data.text] : t.text
            },
            matcher: function(n, t) {
                return c("" + t).toUpperCase().indexOf(c("" + n).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: dt,
            escapeMarkup: ft,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function(n) {
                return n
            },
            adaptDropdownCssClass: function() {
                return null
            },
            nextSearchTerm: function() {
                return t
            },
            searchInputPlaceholder: "",
            createSearchChoicePosition: "top",
            shouldFocusInput: function(n) {
                var t = "ontouchstart"in window || navigator.msMaxTouchPoints > 0;
                return t ? n.opts.minimumResultsForSearch < 0 ? !1 : !0 : !0
            }
        };
        n.fn.select2.locales = [];
        n.fn.select2.locales.en = {
            formatMatches: function(n) {
                return n === 1 ? "One result is available, press enter to select it." : n + " results are available, use up and down arrow keys to navigate."
            },
            formatNoMatches: function() {
                return "No matches found"
            },
            formatAjaxError: function() {
                return "Loading failed"
            },
            formatInputTooShort: function(n, t) {
                var i = t - n.length;
                return "Please enter " + i + " or more character" + (i == 1 ? "" : "s")
            },
            formatInputTooLong: function(n, t) {
                var i = n.length - t;
                return "Please delete " + i + " character" + (i == 1 ? "" : "s")
            },
            formatSelectionTooBig: function(n) {
                return "You can only select " + n + " item" + (n == 1 ? "" : "s")
            },
            formatLoadMore: function() {
                return "Loading more results…"
            },
            formatSearching: function() {
                return "Searching…"
            }
        };
        n.extend(n.fn.select2.defaults, n.fn.select2.locales.en);
        n.fn.select2.ajaxDefaults = {
            transport: n.ajax,
            params: {
                type: "GET",
                cache: !1,
                dataType: "json"
            }
        };
        window.Select2 = {
            query: {
                ajax: et,
                local: ot,
                tags: st
            },
            util: {
                debounce: rt,
                markMatch: ut,
                escapeMarkup: ft,
                stripDiacritics: c
            },
            "class": {
                abstract: l,
                single: d,
                multi: g
            }
        }
    }
}(jQuery),
function(n, t) {
    function u(i) {
        var r = i || window.event
          , o = [].slice.call(arguments, 1)
          , u = 0
          , e = 0
          , f = 0;
        return i = n.event.fix(r),
        i.type = "mousewheel",
        r.wheelDelta && (u = r.wheelDelta / 120),
        r.detail && (u = -r.detail / 3),
        f = u,
        r.axis !== t && r.axis === r.HORIZONTAL_AXIS && (f = 0,
        e = -1 * u),
        r.wheelDeltaY !== t && (f = r.wheelDeltaY / 120),
        r.wheelDeltaX !== t && (e = r.wheelDeltaX / -120),
        o.unshift(i, u, e, f),
        (n.event.dispatch || n.event.handle).apply(this, o)
    }
    var f, i, r;
    if (n.fn.hasHandler = function() {
        var t = 0
          , i = n(this).data("events");
        for (e in i)
            i.hasOwnProperty(e) && t++;
        return t > 0
    }
    ,
    f = jQuery.cleanData,
    n.cleanData = function(i) {
        try {
            for (var r = 0, u; (u = i[r]) !== t; r++)
                n(u).triggerHandler("destroyed")
        } catch (e) {}
        f(i)
    }
    ,
    n.extend(n, {
        hasHandler: n.fn.hasHandler
    }),
    function(n) {
        n.fn.outerHTML = function() {
            return n(this).clone().wrap("<div><\/div>").parent().html()
        }
    }(jQuery),
    i = ["DOMMouseScroll", "mousewheel"],
    n.event.fixHooks)
        for (r = i.length; r; )
            n.event.fixHooks[i[--r]] = n.event.mouseHooks;
    n.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var n = i.length; n; )
                    this.addEventListener(i[--n], u, !1);
            else
                this.onmousewheel = u
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = i.length; n; )
                    this.removeEventListener(i[--n], u, !1);
            else
                this.onmousewheel = null
        }
    };
    n.fn.extend({
        mousewheel: function(n) {
            return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
        },
        unmousewheel: function(n) {
            return this.unbind("mousewheel", n)
        }
    });
    n.fn.waitUntilExists = function(t, i, r) {
        var f = "found"
          , u = n(this.selector)
          , e = u.not(function() {
            return n(this).data(f)
        }).each(t).data(f, !0);
        return r ? i && e.length && window.clearInterval(window.waitUntilExists_Intervals[this.selector]) : (window.waitUntilExists_Intervals = window.waitUntilExists_Intervals || {})[this.selector] = window.setInterval(function() {
            u.waitUntilExists(t, i, !0)
        }, 500),
        u
    }
}(jQuery),
function(n) {
    n.fn.extend({
        autocomplete_search: function(t, i) {
            var r = typeof t == "string";
            return i = n.extend({}, n.S_Autocompleter.defaults, {
                url: r ? t : null,
                data: r ? null : t,
                delay: r ? n.S_Autocompleter.defaults.delay : 10,
                max: i && !i.scroll ? 10 : 150
            }, i),
            i.highlight = i.highlight || function(n) {
                return n
            }
            ,
            i.formatMatch = i.formatMatch || i.formatItem,
            this.each(function() {
                new n.S_Autocompleter(this,i)
            })
        },
        result: function(n) {
            return this.bind("result", n)
        },
        search: function(n) {
            return this.trigger("search", [n])
        },
        flushCache: function() {
            return this.trigger("flushCache")
        },
        setOptions: function(n) {
            return this.trigger("setOptions", [n])
        },
        unautocomplete: function() {
            return this.trigger("unautocomplete")
        },
        hideResults: function(t) {
            return n(this).trigger("hideResults"),
            this.bind("hideResults", t)
        }
    });
    n.S_Autocompleter = function(t, i) {
        function k() {
            var f = u.selected(), o, h;
            if (!f || f.data.Display != null && f.data.Display.indexOf("href") != -1)
                return !1;
            if (o = f.result,
            e = o,
            i.multiple) {
                if (h = s(r.val()),
                h.length > 1) {
                    var a = i.multipleSeparator.length, v = n(t).selection().start, l, c = 0;
                    n.each(h, function(n, t) {
                        if (c += t.length,
                        v <= c)
                            return l = n,
                            !1;
                        c += a
                    });
                    h[l] = o;
                    o = h.join(i.multipleSeparator)
                }
                o += i.multipleSeparator
            }
            return r.val(o),
            y(),
            r.trigger("result", [f.data, f.value]),
            r.attr("data-auto-submit") == "true" && r.parent("form").trigger("submit"),
            !0
        }
        function o(n, t) {
            if (p == f.DEL) {
                r.trigger("hideResults");
                return
            }
            var u = r.val();
            (t || u != e) && (e = u,
            u = v(u),
            u.length >= i.minChars ? (r.addClass(i.loadingClass),
            i.matchCase || (u = u.toLowerCase()),
            d(u, tt, y)) : (w(),
            r.trigger("hideResults")))
        }
        function s(t) {
            return t ? i.multiple ? n.map(t.split(i.multipleSeparator), function(i) {
                return n.trim(t).length ? n.trim(i) : null
            }) : [n.trim(t)] : [""]
        }
        function v(r) {
            var u, f;
            return i.multiple ? (u = s(r),
            u.length == 1) ? u[0] : (f = n(t).selection().start,
            u = f == r.length ? s(r) : s(r.replace(r.substring(f), "")),
            u[u.length - 1]) : r
        }
        function g(u, o) {
            i.autoFill && v(r.val()).toLowerCase() == u.toLowerCase() && p != f.BACKSPACE && (r.val(r.val() + o.substring(v(e).length)),
            n(t).selection(e.length, e.length + o.length))
        }
        function nt() {
            clearTimeout(h);
            h = setTimeout(y, 200)
        }
        function y() {
            var n = u.visible();
            r.trigger("hideResults");
            clearTimeout(h);
            w();
            i.mustMatch && r.search(function(n) {
                if (!n)
                    if (i.multiple) {
                        var t = s(r.val()).slice(0, -1);
                        r.val(t.join(i.multipleSeparator) + (t.length ? i.multipleSeparator : ""))
                    } else
                        r.val(""),
                        r.trigger("result", null)
            })
        }
        function tt(n, t) {
            t && t.length && c ? (w(),
            u.display(t, n),
            g(n, t[0].value),
            u.show()) : y()
        }
        function d(r, f, e) {
            var o, s;
            i.matchCase || (r = r.toLowerCase());
            o = l.load(r);
            o && o.length ? f(r, o) : typeof i.url == "string" && i.url.length > 0 ? (s = {
                timestamp: +new Date
            },
            n.each(i.extraParams, function(n, t) {
                s[n] = typeof t == "function" ? t() : t
            }),
            n.ajax({
                mode: "abort",
                port: "autocomplete" + t.name,
                dataType: i.dataType,
                url: i.url,
                data: n.extend({
                    q: v(r),
                    limit: i.max
                }, s),
                beforeSend: function(n, t) {
                    i.beforeSend && i.beforeSend(n, t)
                },
                success: function(n) {
                    var t = i.parse && i.parse(n) || it(n);
                    l.add(r, t);
                    f(r, t)
                }
            })) : (u.emptyList(),
            e(r))
        }
        function it(t) {
            for (var r, u = [], e = t.split("\n"), f = 0; f < e.length; f++)
                r = n.trim(e[f]),
                r && (r = r.split("|"),
                u[u.length] = {
                    data: r,
                    value: r[0],
                    result: i.formatResult && i.formatResult(r, r[0]) || r[0]
                });
            return u
        }
        function w() {
            r.removeClass(i.loadingClass)
        }
        var f = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        }, r = n(t).attr("autocomplete", "off").addClass(i.inputClass), h, e = "", l = n.S_Autocompleter.Cache(i), c = 0, p, b = {
            mouseDownOnSelect: !1
        }, u = n.S_Autocompleter.Select(i, t, k, b), a;
        n.browser.opera && n(t.form).bind("submit.autocomplete", function() {
            if (a)
                return a = !1,
                !1
        });
        r.bind((n.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(t) {
            c = 1;
            p = t.keyCode;
            switch (t.keyCode) {
            case f.UP:
                t.preventDefault();
                u.visible() ? u.prev() : o(0, !0);
                break;
            case f.DOWN:
                t.preventDefault();
                u.visible() ? u.next() : o(0, !0);
                break;
            case f.PAGEUP:
                t.preventDefault();
                u.visible() ? u.pageUp() : o(0, !0);
                break;
            case f.PAGEDOWN:
                t.preventDefault();
                u.visible() ? u.pageDown() : o(0, !0);
                break;
            case i.multiple && n.trim(i.multipleSeparator) == "," && f.COMMA:
            case f.TAB:
            case f.RETURN:
                var e = u.selected();
                if (e.data.Url != null)
                    return t.stopPropagation(),
                    window.location = e.data.Url,
                    a = !0,
                    !1;
                if (k())
                    return t.preventDefault(),
                    a = !0,
                    !1;
                break;
            case f.ESC:
                r.trigger("hideResults");
                break;
            default:
                clearTimeout(h);
                h = setTimeout(o, i.delay)
            }
        }).focus(function() {
            c++
        }).blur(function() {
            c = 0;
            b.mouseDownOnSelect || nt()
        }).click(function() {
            c++ > 1 && !u.visible() && o(0, !0)
        }).bind("search", function() {
            function i(n, i) {
                var u, f;
                if (i && i.length)
                    for (f = 0; f < i.length; f++)
                        if (i[f].result.toLowerCase() == n.toLowerCase()) {
                            u = i[f];
                            break
                        }
                typeof t == "function" ? t(u) : (r.trigger("result", u && [u.data, u.value]),
                r.attr("data-auto-submit") == "true" && r.parent("form").trigger("submit"))
            }
            var t = arguments.length > 1 ? arguments[1] : null;
            n.each(s(r.val()), function(n, t) {
                d(t, i, i)
            })
        }).bind("flushCache", function() {
            l.flush()
        }).bind("setOptions", function() {
            n.extend(i, arguments[1]);
            "data"in arguments[1] && l.populate()
        }).bind("unautocomplete", function() {
            u.unbind();
            r.unbind();
            n(t.form).unbind(".autocomplete")
        }).bind("hideResults", function() {
            u.hide()
        })
    }
    ;
    n.S_Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: !1,
        matchSubset: !0,
        matchContains: !1,
        cacheLength: 10,
        max: 100,
        mustMatch: !1,
        extraParams: {},
        selectFirst: !0,
        formatItem: function(n) {
            return n[0]
        },
        formatMatch: null,
        autoFill: !1,
        width: 0,
        multiple: !1,
        multipleSeparator: ", ",
        highlight: function(n, t) {
            return n.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)","gi"), "<strong>$1<\/strong>")
        },
        scroll: !0,
        scrollHeight: 180
    };
    n.S_Autocompleter.Cache = function(t) {
        function u(n, i) {
            t.matchCase || (n = n.toString().toLowerCase());
            var r = n.indexOf(i);
            return (t.matchContains == "word" && (r = n.toLowerCase().search("\\b" + i.toLowerCase())),
            r == -1) ? !1 : r == 0 || t.matchContains
        }
        function f(n, u) {
            r > t.cacheLength && o();
            i[n] || r++;
            i[n] = u
        }
        function e() {
            var r, h, u, c, i, e, o, s;
            if (!t.data)
                return !1;
            for (r = {},
            h = 0,
            t.url || (t.cacheLength = 1),
            r[""] = [],
            u = 0,
            c = t.data.length; u < c; u++)
                (i = t.data[u],
                i = typeof i == "string" ? [i] : i,
                e = t.formatMatch(i, u + 1, t.data.length),
                e !== !1) && (o = e.charAt(0).toLowerCase(),
                r[o] || (r[o] = []),
                s = {
                    value: e,
                    data: i,
                    result: t.formatResult && t.formatResult(i) || e
                },
                r[o].push(s),
                h++ < t.max && r[""].push(s));
            n.each(r, function(n, i) {
                t.cacheLength++;
                f(n, i)
            })
        }
        function o() {
            i = {};
            r = 0
        }
        var i = {}
          , r = 0;
        return setTimeout(e, 25),
        {
            flush: o,
            add: f,
            populate: e,
            load: function(f) {
                var h, s, o, e;
                if (!t.cacheLength || !r)
                    return null;
                if (!t.url && t.matchContains) {
                    e = [];
                    for (h in i)
                        h.length > 0 && (o = i[h],
                        n.each(o, function(n, t) {
                            u(t.value, f) && e.push(t)
                        }));
                    return e
                }
                if (i[f])
                    return i[f];
                if (t.matchSubset)
                    for (s = f.length - 1; s >= t.minChars; s--)
                        if (o = i[f.substr(0, s)],
                        o)
                            return e = [],
                            n.each(o, function(n, t) {
                                u(t.value, f) && (e[e.length] = t)
                            }),
                            e;
                return null
            }
        }
    }
    ;
    n.S_Autocompleter.Select = function(t, i, r, u) {
        function p() {
            y && (s = n("<div/>").hide().addClass(t.resultsClass).css("position", "absolute").appendTo(document.body),
            o = n("<ul/>").appendTo(s).mouseover(function(t) {
                a(t).nodeName && a(t).nodeName.toUpperCase() == "LI" && (e = n("li", o).removeClass(h.ACTIVE).index(a(t)),
                n(a(t)).addClass(h.ACTIVE))
            }).click(function(t) {
                return n(a(t)).addClass(h.ACTIVE),
                r() ? (i.focus(),
                !1) : void 0
            }).mousedown(function() {
                u.mouseDownOnSelect = !0
            }).mouseup(function() {
                u.mouseDownOnSelect = !1
            }),
            t.width > 0 && s.css("width", t.width),
            y = !1)
        }
        function a(n) {
            for (var t = n.target; t && t.tagName != "LI"; )
                t = t.parentNode;
            return t ? t : []
        }
        function l(n) {
            var r, i;
            f.slice(e, e + 1).removeClass(h.ACTIVE);
            w(n);
            r = f.slice(e, e + 1).addClass(h.ACTIVE);
            t.scroll && (i = 0,
            f.slice(0, e).each(function() {
                i += this.offsetHeight
            }),
            i + r[0].offsetHeight - o.scrollTop() > o[0].clientHeight ? o.scrollTop(i + r[0].offsetHeight - o.innerHeight()) : i < o.scrollTop() && o.scrollTop(i))
        }
        function w(n) {
            e += n;
            e < 0 ? e = f.size() - 1 : e >= f.size() && (e = 0)
        }
        function b(n) {
            return t.max && t.max < n ? t.max : n
        }
        function k() {
            var r, i, u, s;
            for (o.empty(),
            r = b(c.length),
            i = 0; i < r; i++)
                c[i] && (u = t.formatItem(c[i].data, i + 1, r, c[i].value, v),
                u !== !1) && (s = n("<li/>").html(t.highlight(u, v)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(o)[0],
                n.data(s, "ac_data", c[i]));
            f = o.find("li");
            t.selectFirst && (f.slice(0, 1).addClass(h.ACTIVE),
            e = 0);
            n.fn.bgiframe && o.bgiframe();
            Cobalt.triggerHtmlInsert(o)
        }
        var h = {
            ACTIVE: "ac_over"
        }, f, e = -1, c, v = "", y = !0, s, o;
        return {
            display: function(n, t) {
                p();
                c = n;
                v = t;
                k()
            },
            next: function() {
                l(1)
            },
            prev: function() {
                l(-1)
            },
            pageUp: function() {
                e != 0 && e - 8 < 0 ? l(-e) : l(-8)
            },
            pageDown: function() {
                e != f.size() - 1 && e + 8 > f.size() ? l(f.size() - 1 - e) : l(8)
            },
            hide: function() {
                s && s.hide();
                f && f.removeClass(h.ACTIVE);
                e = -1
            },
            visible: function() {
                return s && s.is(":visible")
            },
            current: function() {
                return this.visible() && (f.filter("." + h.ACTIVE)[0] || t.selectFirst && f[0])
            },
            show: function() {
                var r = n(i).offset(), c = n(i).outerWidth(), h, u, e;
                s.css({
                    width: typeof t.width == "string" || t.width > 0 ? t.width : n(i).width(),
                    top: r.top + i.offsetHeight
                });
                s.width() + r.left >= window.innerWidth ? (h = r.left + c - s.width(),
                s.css({
                    left: h
                })) : s.css({
                    left: r.left
                });
                s.show();
                t.scroll && (o.scrollTop(0),
                o.css({
                    maxHeight: t.scrollHeight,
                    overflow: "auto"
                }),
                n.browser.msie && typeof document.body.style.maxHeight == "undefined" && (u = 0,
                f.each(function() {
                    u += this.offsetHeight
                }),
                e = u > t.scrollHeight,
                o.css("height", e ? t.scrollHeight : u),
                e || f.width(o.width() - parseInt(f.css("padding-left")) - parseInt(f.css("padding-right")))))
            },
            selected: function() {
                var t = f && f.filter("." + h.ACTIVE).removeClass(h.ACTIVE);
                return t && t.length && n.data(t[0], "ac_data")
            },
            emptyList: function() {
                o && o.empty()
            },
            unbind: function() {
                s && s.remove()
            }
        }
    }
    ;
    n.fn.selection = function(n, t) {
        var i, r;
        if (n !== undefined)
            return this.each(function() {
                if (this.createTextRange) {
                    var i = this.createTextRange();
                    t === undefined || n == t ? (i.move("character", n),
                    i.select()) : (i.collapse(!0),
                    i.moveStart("character", n),
                    i.moveEnd("character", t),
                    i.select())
                } else
                    this.setSelectionRange ? this.setSelectionRange(n, t) : this.selectionStart && (this.selectionStart = n,
                    this.selectionEnd = t)
            });
        if (i = this[0],
        i.createTextRange) {
            var u = document.selection.createRange()
              , o = i.value
              , f = "<->"
              , e = u.text.length;
            return u.text = f,
            r = i.value.indexOf(f),
            i.value = o,
            this.selection(r, r + e),
            {
                start: r,
                end: r + e
            }
        }
        if (i.selectionStart !== undefined)
            return {
                start: i.selectionStart,
                end: i.selectionEnd
            }
    }
}(jQuery),
function(n, t) {
    n.fn.center = function(i) {
        function u() {
            var t = n(this)
              , r = parseInt(t.css("zIndex"));
            t.css({
                position: i.absolute ? "absolute" : "fixed",
                left: "50%",
                top: "50%",
                zIndex: r + 1
            }).css({
                marginLeft: "-" + t.outerWidth() / 2 + "px",
                marginTop: "-" + t.outerHeight() / 2 + "px"
            });
            i.absolute && t.css({
                marginTop: parseInt(t.css("marginTop"), 10) + jQuery(window).scrollTop(),
                marginLeft: parseInt(t.css("marginLeft"), 10) + jQuery(window).scrollLeft()
            })
        }
        function f() {
            var u = n(this)
              , r = n(window).width() - i.paddingWidth
              , t = n(window).height() - i.paddingWidth;
            i.maxWidth && r > i.maxWidth ? r = i.maxWidth : i.minWidth && r < i.minWidth && (r = i.minWidth);
            i.autoHeight ? t = "auto" : (i.maxHeight && t > i.maxHeight && (t = i.maxHeight),
            i.minHeight && t < i.minHeight && (t = i.minHeight));
            u.css("width", r);
            u.css("height", t)
        }
        function e() {
            var t = n(this);
            t[0]._centerEventsBound || (n(window).bind("resize", function() {
                i.sizeToWindow && t.each(f);
                i.fixed || t.each(u)
            }),
            n(window).bind("scroll", function() {
                i.fixed || t.each(u)
            }),
            t[0]._centerEventsBound = !0)
        }
        var i = i || {}, r;
        return i.paddingWidth == t && (i.paddingWidth = 150),
        r = this,
        i.sizeToWindow && r.each(f),
        r.each(u),
        r.each(e),
        r
    }
}(jQuery),
function(n, t) {
    var r = "grid"
      , d = {
        pagerElements: t,
        pagerFirstSelector: ".pager-first",
        pagerPreviousSelector: ".pager-prev",
        pagerNextSelector: ".pager-next",
        pagerLastSelector: ".pager-last",
        pagerDisplaySelector: ".pager-display",
        pagerPageNumbersSelector: "ul",
        pageSizeAttr: "data-page-size",
        rowSelectorAttr: "data-row-selector",
        rowSelector: "> tbody > tr",
        pageSizes: [10, 25, 50],
        pageSize: t,
        enableCircularPaging: !1,
        pageCount: 0,
        currentPage: 1,
        sortable: !0,
        parsers: {},
        defaultSortOrder: {},
        sortAscClass: "asc",
        sortDescClass: "desc",
        pagingEnabled: !0,
        sortingEnabled: !0,
        showFirstSelector: !0,
        showLastSelector: !0,
        maxNumOfPageNumbers: 6
    }
      , i = function(n) {
        return n.data(r)
    }
      , l = function(r, u, f, e) {
        var s = i(r), o = s.parentRows, l = s.filterPredicate, h, c;
        return l && (h = s.filteredRows,
        h === t && (s.filteredRows = h = o.filter(l)),
        o = h),
        u != t && (o = n(o).slice(u, f)),
        e ? (c = [],
        o.each(function(n, t) {
            if (c.push(t),
            t.attachedRows && t.attachedRows.length > 0)
                for (var n = 0; n < t.attachedRows.length; n++)
                    c.push(t.attachedRows[n])
        }),
        n(c)) : o
    }
      , e = {
        int: function(n) {
            var t = parseInt(n);
            return isNaN(t) ? 0 : t
        },
        float: function(n) {
            var t = parseFloat(n);
            return isNaN(t) ? 0 : t
        },
        percent: function() {
            return e.float(s.replace(/%/g, ""))
        },
        url: function(n) {
            return n.replace(/(https?|ftp|file):\/\//, "")
        },
        currency: function(n) {
            return n.replace(/[^0-9.]/g, "")
        },
        date: function(t) {
            return n(t).data("epoch") ? n(t).attr("data-epoch") : new Date(t)
        },
        time: function(n) {
            return e.float(new Date("2000/01/01 " + n).getTime())
        },
        "time-ms": function(n) {
            return e.float(n.replace(/ms/g, ""))
        },
        text: function(n) {
            return n
        },
        author: function(t) {
            return n(t).find("span").text()
        },
        html: function(t) {
            return n(t).text()
        }
    }
      , p = function(t) {
        var r = i(t), h = t.attr(r.rowSelectorAttr) || r.rowSelector, u, f, o, s, c, l;
        r.rowSelector = h;
        u = t.find(h);
        r.parentRows || (r.parentRows = u);
        t.attr("data-update") === "add" && (r.parentRows = r.parentRows.add(u.not(".even").not(".odd")),
        t.removeAttr("data-update"));
        t.attr("data-remove") && (r.parentRows = r.parentRows.not("li[data-surrogate-id='" + t.attr("data-remove") + "']"),
        t.removeAttr("data-remove"));
        r.sortingEnabled && (t.find("> thead > tr > th").each(function(t, i) {
            var u = n(i), o = u.attr("data-sort-value-type"), f;
            r.parsers[t] = e[o] || e.text;
            f = u.attr("data-default-sort-order");
            r.defaultSortOrder[t] = f
        }),
        f = n([]),
        o = null,
        u.each(function(t, i) {
            if (n(i).attr("data-sort-attached-to-above") === "true") {
                o && o.attachedRows.push(i);
                return
            }
            i.attachedRows = [];
            o = i;
            f = f.add(i)
        }),
        u = f,
        r.parsers && u.each(function(t, i) {
            i.columns = {};
            n(i).find("> td").each(function(t, u) {
                var f = n.trim(n(u).attr("data-sort-value") || u.innerHTML.toUpperCase());
                i.columns[t] = r.parsers[t](f)
            })
        }));
        r.rowsParent = u.parent();
        r.rows = u;
        r.currentPage = 1;
        r.sortingEnabled && (s = t.attr("data-default-sort-slug"),
        s && (c = t.attr("data-default-sort-order") == "asc" ? 1 : -1,
        l = t.find("> thead > tr > th").index(t.find('[data-sort-slug="' + s + '"]')),
        k(t, l, c)))
    }
      , o = function(t, i) {
        var r = n(t).parent();
        r.parent().hasClass("listing-footer") && n(window).scrollTo(i.container, 500, {
            offset: -50
        })
    }
      , g = function(n, t, r) {
        n.preventDefault();
        var u = i(t);
        u.currentPage != r && (o(this, u),
        u.currentPage = r,
        f(t))
    }
      , nt = function(t) {
        t.preventDefault();
        var e = n(this).data(r)
          , u = i(e);
        o(this, u);
        u.currentPage != 1 && (u.currentPage = 1,
        f(e))
    }
      , tt = function(t) {
        t.preventDefault();
        var e = n(this).data(r)
          , u = i(e);
        o(this, u);
        u.currentPage + 1 > u.pageCount ? u.enableCircularPaging == !0 && (u.currentPage = 1,
        f(e)) : (u.currentPage = u.currentPage + 1,
        f(e))
    }
      , it = function(t) {
        t.preventDefault();
        var e = n(this).data(r)
          , u = i(e);
        o(this, u);
        u.currentPage - 1 <= 0 ? u.enableCircularPaging == !0 && (u.currentPage = u.pageCount,
        f(e)) : (u.currentPage = u.currentPage - 1,
        f(e))
    }
      , rt = function(t) {
        t.preventDefault();
        var e = n(this).data(r)
          , u = i(e);
        o(this, u);
        u.currentPage != u.pageCount && (u.currentPage = u.pageCount,
        f(e))
    }
      , w = function(n) {
        var r = i(n)
          , f = l(n, t, t, !0).length
          , u = Math.ceil(f / r.pageSize);
        return r.pageCount = u,
        u
    }
      , ut = function(n) {
        var t = i(n)
          , u = t.pageSizeAttr
          , f = n.attr(u)
          , r = parseInt(f) || t.pageSize || 25;
        return t.pageSize != r && (t.pageSize = r),
        r
    }
      , ft = function(n) {
        var t = i(n)
          , r = (t.currentPage - 1) * t.pageSize
          , u = Math.floor(r + t.pageSize, t.rowCount);
        return {
            start: r,
            end: u
        }
    }
      , et = function(n) {
        var t = i(n);
        n.find(t.rowSelector).detach()
    }
      , u = function(t, u, f, e) {
        var h = i(u), o, s;
        e || (e = f);
        o = n("<li/>").addClass("b-pagination-item");
        s = n("<a/>").addClass("b-pagination-item").text(e).attr("data-pagenum", f).data(r, u).click(function(t) {
            g(t, n(this).data(r), parseInt(n(this).attr("data-pagenum")))
        });
        f == h.currentPage && s.addClass("active").addClass("s-active");
        o.append(s);
        t.append(o)
    }
      , ot = function(n, t) {
        var r = i(t), e, o, f;
        if (n.find("li").remove(),
        e = "<li>...<\/li>",
        r.currentPage > 1 && u(n, t, r.currentPage - 1, "Prev"),
        r.pageCount <= r.maxNumOfPageNumbers)
            for (f = 1; f <= r.pageCount; ++f)
                u(n, t, f);
        else if (r.currentPage < r.maxNumOfPageNumbers - 1) {
            for (f = 1; f < r.maxNumOfPageNumbers; ++f)
                u(n, t, f);
            n.append(e);
            u(n, t, r.pageCount)
        } else if (r.currentPage > r.pageCount - r.maxNumOfPageNumbers + 1)
            for (u(n, t, 1),
            n.append(e),
            f = r.pageCount - r.maxNumOfPageNumbers + 1; f <= r.pageCount; ++f)
                u(n, t, f);
        else {
            for (u(n, t, 1),
            n.append(e),
            o = Math.ceil(r.maxNumOfPageNumbers / 2) - 1,
            f = r.currentPage - o; f <= r.currentPage + o; ++f)
                u(n, t, f);
            n.append(e);
            u(n, t, r.pageCount)
        }
        r.currentPage < r.pageCount && u(n, t, r.currentPage + 1, "Next");
        n.show()
    }
      , b = function(t) {
        var r = i(t), f = ft(t), e, u;
        et(t);
        e = l(t, f.start, f.end, !0);
        u = n(r.rowsParent).append(e);
        u.find("> :odd").not(".odd").addClass("odd").removeClass("even");
        u.find("> :even").not(".even").addClass("even").removeClass("odd");
        r.pagingEnabled && r.pagerElements.each(function() {
            var e = n(this), i, u, f, o;
            if (r.pageCount <= 1 ? e.hide() : ot(e, t),
            i = n(this).find(r.pagerPageNumbersSelector),
            i)
                for (i.find("li").remove(),
                u = 1; u <= r.pageCount; ++u)
                    f = n("<li/>").addClass("b-pagination-item"),
                    o = n("<span/>").text(u),
                    f.append(o),
                    i.append(f)
        })
    }
      , st = function(t, r, u) {
        var f = i(t)
          , e = n(r)
          , o = !e.hasClass(f.sortAscClass) && !e.hasClass(f.sortDescClass);
        return o ? u == "desc" ? -1 : 1 : e.hasClass(f.sortDescClass) ? 1 : -1
    }
      , a = function(n, i) {
        var r = n.find(" > thead > tr > th a");
        return (r.length == 0 && (r = n.find(" > thead > tr > th")),
        i != t) ? r.eq(i) : r
    }
      , ht = function(n, t, r) {
        var u = i(n)
          , f = a(n, t);
        r == -1 ? f.removeClass(u.sortAscClass).addClass(u.sortDescClass) : f.removeClass(u.sortDescClass).addClass(u.sortAscClass);
        f.addClass("selected");
        a(n).not(f).removeClass(u.sortAscClass + " .selected " + u.sortDescClass)
    }
      , k = function(r, u, e) {
        var s = i(r)
          , o = l(r, t, t, !1, !1).get();
        o.sort(function(t, i) {
            var r = t.columns[u]
              , f = i.columns[u];
            if (n.type(r) !== n.type(f)) {
                if (r % 1 != 0)
                    return -1 * e;
                if (f % 1 != 0)
                    return 1 * e
            }
            return r < f ? -1 * e : r > f ? 1 * e : 0
        });
        s.parentRows = n(o);
        ht(r, u, e);
        f(r)
    }
      , f = function(n) {
        var t, r;
        ut(n);
        w(n);
        b(n);
        t = i(n);
        t.enableCircularPaging == !1 && (r = t.pagerElements,
        t.currentPage != 1 && t.currentPage != t.pageCount ? (v(r, t, !0),
        y(r, t, !0)) : t.currentPage == 1 ? (v(r, t, !1),
        y(r, t, !0)) : t.currentPage == t.pageCount && (v(r, t, !0),
        y(r, t, !1)));
        Cobalt.triggerHtmlInsert(n)
    }
      , v = function(n, t, i) {
        i ? (t.showFirstSelector && h(n.find(t.pagerFirstSelector)),
        h(n.find(t.pagerPreviousSelector))) : (t.showFirstSelector && c(n.find(t.pagerFirstSelector)),
        c(n.find(t.pagerPreviousSelector)))
    }
      , y = function(n, t, i) {
        i ? (t.showLastSelector && h(n.find(t.pagerLastSelector)),
        h(n.find(t.pagerNextSelector))) : (t.showLastSelector && c(n.find(t.pagerLastSelector)),
        c(n.find(t.pagerNextSelector)))
    }
      , h = function(n) {
        n.removeClass("pager-hidden");
        n.addClass("pager-visible")
    }
      , c = function(n) {
        n.removeClass("pager-visible");
        n.addClass("pager-hidden")
    }
      , ct = function(i, u) {
        var e, o;
        if (u !== t)
            i.data(r, u);
        else
            return;
        u.pagingEnabled && (e = u.pagerElements,
        e === t,
        e.each(function() {
            var t = n(this);
            t.find(u.pagerNextSelector).unbind("click");
            t.find(u.pagerPreviousSelector).unbind("click");
            t.find(u.pagerFirstSelector).click(nt).data(r, i).addClass("pager-hidden");
            t.find(u.pagerNextSelector).click(tt).data(r, i);
            t.find(u.pagerPreviousSelector).click(it).data(r, i).addClass("pager-hidden");
            t.find(u.pagerLastSelector).click(rt).data(r, i);
            t.find(u.pagerFirstSelector).is(":visible") || (u.showFirstSelector = !1);
            t.find(u.pagerLastSelector).is(":visible") || (u.showLastSelector = !1)
        }));
        p(i);
        f(i);
        u.sortingEnabled && (o = a(i),
        o.each(function(t) {
            var f = n(this);
            f.click(function(i) {
                i.preventDefault();
                var f = n(this)
                  , e = f.data(r)
                  , o = u.defaultSortOrder[t]
                  , s = st(e, f, o);
                k(e, t, s)
            }).data(r, i)
        }))
    };
    n.fn.grid = function(r) {
        return this.each(function() {
            var e = n(this), u = n.extend({}, d, r), o;
            return u.container = e.parents(".listing-container:eq(0)"),
            u.pagerElements === t && (u.pagerElements = u.container.find("> .listing-header").add(u.container.find("> .listing-footer")).find(".j-tablesorter-pager")),
            u.pagingEnabled = u.pagerElements === t || u.pagerElements.length < 1 ? !1 : !0,
            (!e.is("table") || e.find("> thead > tr > th").length < 1) && (u.sortingEnabled = !1),
            o = i(e),
            o === t ? ct(e, u) : (p(e),
            f(e, u)),
            this
        })
    }
    ;
    n.fn.gridFilter = function(r) {
        return this.each(function() {
            var f = n(this), u = i(f), e;
            u != t && u.filterPredicate != r && (u.filterPredicate = r,
            delete u.filteredRows,
            e = w(f),
            e < u.currentPage && (u.currentPage = e),
            u.currentPage <= 0 && (u.currentPage = 1),
            b(f))
        })
    }
}(jQuery),
function(n) {
    n.fn.lightBox = function(t) {
        function e() {
            return o(this, f),
            !1
        }
        function o(r, u) {
            if (n("embed, object, select").css({
                visibility: "hidden"
            }),
            s(),
            t.imageArray.length = 0,
            t.activeImage = 0,
            u.length == 1)
                t.imageArray.push([r.getAttribute("href"), r.getAttribute("title")]);
            else
                for (var f = 0; f < u.length; f++)
                    t.imageArray.push([u[f].getAttribute("href"), u[f].getAttribute("title")]);
            while (t.imageArray[t.activeImage][0] != r.getAttribute("href"))
                t.activeImage++;
            i()
        }
        function s() {
            var i, f;
            n("body").append('<div id="jquery-overlay"><\/div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"><\/a><a href="#" id="lightbox-nav-btnNext"><\/a><\/div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="' + t.imageLoading + '"><\/a><\/div><\/div><\/div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"><\/span><span id="lightbox-image-details-currentNumber"><\/span><\/div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="' + t.imageBtnClose + '"><\/a><\/div><\/div><\/div><\/div>');
            i = u();
            n("#jquery-overlay").css({
                backgroundColor: t.overlayBgColor,
                opacity: t.overlayOpacity,
                width: i[0],
                height: i[1]
            }).fadeIn();
            f = b();
            n("#jquery-lightbox").show();
            n("#jquery-lightbox").center({
                keepCentered: !0
            });
            n("#jquery-overlay,#jquery-lightbox").click(function() {
                r()
            });
            n("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function(n) {
                n.preventDefault();
                r()
            });
            n(window).resize(function() {
                var t = u();
                n("#jquery-overlay").css({
                    width: t[0],
                    height: t[1]
                })
            });
            v()
        }
        function i() {
            n("#lightbox-loading").show();
            t.fixedNavigation ? n("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide() : n("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide();
            var i = new Image;
            i.onload = function() {
                n("#lightbox-image").attr("src", t.imageArray[t.activeImage][0]);
                var r = i.width
                  , f = n(window).width() - 150
                  , e = n(window).height() - 150
                  , u = i.height;
                if (r > f || u > e) {
                    var s = f / r
                      , c = e / u
                      , o = Math.min(s, c);
                    r = r * o;
                    u = u * o
                }
                n("#lightbox-image").attr("width", r);
                n("#lightbox-image").attr("height", u);
                n("#jquery-lightbox").center({
                    keepCentered: !0
                });
                h(r, u);
                i.onload = function() {}
            }
            ;
            i.src = t.imageArray[t.activeImage][0]
        }
        function h(i, r) {
            var e = n("#lightbox-container-image-box").width()
              , o = n("#lightbox-container-image-box").height()
              , u = i + t.containerBorderSize * 2
              , f = r + t.containerBorderSize * 2
              , s = e - u
              , h = o - f;
            r = r + t.containerBorderSize * 2;
            u >= t.minWidth && n("#lightbox-container-image-data-box").css({
                padding: "0 10px 0"
            });
            u = u < t.minWidth ? t.minWidth : u;
            i = i < t.minWidth ? t.minWidth : i;
            n("#lightbox-container-image-box").css("width", u);
            n("#lightbox-container-image-box").css("height", f);
            c();
            n("#lightbox-container-image-data-box").css({
                width: i
            });
            n("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({
                height: r
            })
        }
        function c() {
            n("#lightbox-loading").hide();
            n("#lightbox-image").fadeIn(function() {
                l();
                a()
            });
            n("#jquery-lightbox").center({
                keepCentered: !0
            });
            w()
        }
        function l() {
            n("#lightbox-container-image-data-box").slideDown("fast");
            n("#lightbox-image-details-caption").hide();
            t.imageArray[t.activeImage][1] && n("#lightbox-image-details-caption").html(t.imageArray[t.activeImage][1]).show();
            t.imageArray.length > 1 && n("#lightbox-image-details-currentNumber").html(t.txtImage + " " + (t.activeImage + 1) + " " + t.txtOf + " " + t.imageArray.length).show()
        }
        function a() {
            n("#lightbox-nav").show();
            n("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({
                background: "transparent url(" + t.imageBlank + ") no-repeat"
            });
            t.activeImage != 0 && (t.fixedNavigation ? n("#lightbox-nav-btnPrev").css({
                background: "url(" + t.imageBtnPrev + ") left 15% no-repeat"
            }).unbind().bind("click", function() {
                return t.activeImage = t.activeImage - 1,
                i(),
                !1
            }) : n("#lightbox-nav-btnPrev").unbind().hover(function() {
                n(this).css({
                    background: "url(" + t.imageBtnPrev + ") left 15% no-repeat"
                })
            }, function() {
                n(this).css({
                    background: "transparent url(" + t.imageBlank + ") no-repeat"
                })
            }).show().bind("click", function() {
                return t.activeImage = t.activeImage - 1,
                i(),
                !1
            }));
            t.activeImage != t.imageArray.length - 1 && (t.fixedNavigation ? n("#lightbox-nav-btnNext").css({
                background: "url(" + t.imageBtnNext + ") right 15% no-repeat"
            }).unbind().bind("click", function() {
                return t.activeImage = t.activeImage + 1,
                i(),
                !1
            }) : n("#lightbox-nav-btnNext").unbind().hover(function() {
                n(this).css({
                    background: "url(" + t.imageBtnNext + ") right 15% no-repeat"
                })
            }, function() {
                n(this).css({
                    background: "transparent url(" + t.imageBlank + ") no-repeat"
                })
            }).show().bind("click", function() {
                return t.activeImage = t.activeImage + 1,
                i(),
                !1
            }))
        }
        function v() {
            n(document).keydown(function(n) {
                p(n)
            })
        }
        function y() {}
        function p(n) {
            var u, f;
            u = n == null ? event.keyCode : n.keyCode;
            f = String.fromCharCode(u).toLowerCase();
            (f == t.keyToClose || f == "x" || u == 27) && r();
            (f == t.keyToPrev || u == 37) && t.activeImage != 0 && (t.activeImage = t.activeImage - 1,
            i());
            (f == t.keyToNext || u == 39) && t.activeImage != t.imageArray.length - 1 && (t.activeImage = t.activeImage + 1,
            i())
        }
        function w() {
            var n, i;
            t.imageArray.length - 1 > t.activeImage && (i = new Image,
            i.src = t.imageArray[t.activeImage + 1][0]);
            t.activeImage > 0 && (n = new Image,
            n.src = t.imageArray[t.activeImage - 1][0])
        }
        function r() {
            y();
            n("#jquery-lightbox").remove();
            n("#jquery-overlay").fadeOut(function() {
                n("#jquery-overlay").remove()
            });
            n("embed, object, select").css({
                visibility: "visible"
            })
        }
        function u() {
            var i, r, u, f, n, t;
            return window.innerHeight && window.scrollMaxY ? (i = window.innerWidth + window.scrollMaxX,
            r = window.innerHeight + window.scrollMaxY) : document.body.scrollHeight > document.body.offsetHeight ? (i = document.body.scrollWidth,
            r = document.body.scrollHeight) : (i = document.body.offsetWidth,
            r = document.body.offsetHeight),
            self.innerHeight ? (n = document.documentElement.clientWidth ? document.documentElement.clientWidth : self.innerWidth,
            t = self.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (n = document.documentElement.clientWidth,
            t = document.documentElement.clientHeight) : document.body && (n = document.body.clientWidth,
            t = document.body.clientHeight),
            f = r < t ? t : r,
            u = i < n ? i : n,
            [u, f, n, t]
        }
        function b() {
            var n, t;
            return self.pageYOffset ? (t = self.pageYOffset,
            n = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop,
            n = document.documentElement.scrollLeft) : document.body && (t = document.body.scrollTop,
            n = document.body.scrollLeft),
            [n, t]
        }
        t = jQuery.extend({
            overlayBgColor: "#000",
            overlayOpacity: .8,
            fixedNavigation: !1,
            imageLoading: Cobalt.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-ico-loading.gif",
            imageBtnPrev: Cobalt.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-btn-prev.gif",
            imageBtnNext: Cobalt.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-btn-next.gif",
            imageBtnClose: Cobalt.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-btn-close.gif",
            imageBlank: Cobalt.Constants.StaticURL + "/skins/global/images/lightboximages/lightbox-blank.gif",
            containerBorderSize: 10,
            containerResizeSpeed: 400,
            txtImage: "Image",
            txtOf: "of",
            keyToClose: "c",
            keyToPrev: "p",
            keyToNext: "n",
            imageArray: [],
            activeImage: 0,
            minWidth: 250
        }, t);
        var f = this;
        return this.unbind("click").click(e)
    }
}(jQuery),
function(n, t) {
    var o = !1, r = "tooltip", u, f, s, h, c, v = {
        content: null,
        track: !0
    }, i, e = function(n) {
        return n.data(r)
    }, y = function(n) {
        var t, i, r;
        return n = n || window.event,
        t = {
            x: 0,
            y: 0
        },
        n.pageX || n.pageY ? (t.x = n.pageX,
        t.y = n.pageY) : (i = document.documentElement,
        r = document.body,
        t.x = n.clientX + (i.scrollLeft || r.scrollLeft) - (i.clientLeft || 0),
        t.y = n.clientY + (i.scrollTop || r.scrollTop) - (i.clientTop || 0)),
        t
    }, p = function(n) {
        if (!!i && i.css("display") != "none") {
            var t = y(n);
            u = t.x;
            f = t.y;
            s = u + 15;
            h = f - 20;
            g()
        }
    }, l = function(i) {
        var r = e(i), u, f;
        return r.content == null ? (u = i.attr("title"),
        f = i.find("> .tooltip-html"),
        f.length > 0 ? (r.content = f.html(),
        r.html = r.content) : u != t && u != "" && (r.html = i.attr("title"),
        i.removeAttr("title"))) : typeof r.content == "string" ? r.html = r.content : typeof r.content == "object" ? r.html = n("<div>").append(n(r.content).clone(!1).css("display", "")).remove().html() : typeof r.content == "function" && (r.html = r.content(i)),
        r.html
    }, w = function(n, t) {
        var r = e(n);
        l(n);
        i.html(t)
    }, b = function() {
        var r = n(this), t;
        c = r;
        t = e(r);
        t.customCssClass != null ? i.attr("class", "u-tooltips-a " + t.customCssClass) : i.attr("class", "u-tooltips-a");
        l(r);
        t.html != null && (w(r, t.html),
        k())
    }, a = function() {
        var t = n(this);
        c = null;
        d()
    }, k = function() {
        Cobalt.detectIsOnMobile() || i.show()
    }, d = function() {
        i.hide()
    }, g = function() {
        var n, a;
        if (i !== t && (n = i[0],
        n !== t)) {
            var v = u
              , o = f
              , c = s
              , l = h
              , r = document.documentElement
              , e = document.body;
            o + n.offsetHeight > r.clientHeight + e.scrollTop + r.scrollTop && (a = r.clientHeight + e.scrollTop + r.scrollTop - (o + n.offsetHeight),
            l += a);
            v + n.offsetWidth + 27 > r.clientWidth + e.scrollLeft + r.scrollLeft && (c -= n.offsetWidth + 27);
            n.style.left = "" + c + "px";
            n.style.top = "" + l + "px"
        }
    }, nt = function(t) {
        t.on("mouseover", b);
        t.on("mouseout click", a);
        n(document).keyup(function(n) {
            n.keyCode == 27 && a()
        })
    }, tt = function() {
        return n("<div>").attr("id", "tooltip-container").attr("class", "u-tooltips-a").css("position", "absolute").css("display", "none")
    };
    n.fn.tooltip = function(u) {
        if (this && !(this.length < 1))
            return o || (n(document).mousemove(p),
            o = !0),
            i || (i = tt(),
            i.appendTo(document.body)),
            this.each(function() {
                var f = n(this), e = f.data(r), i;
                e == t && (i = n.extend({}, v, u),
                i.customCssClass || (i.customCssClass = n(this).attr("data-tooltip-class")),
                f.data(r, i),
                nt(f))
            })
    }
}(jQuery),
function(n) {
    var t = /<\/?[^>]+>/gi;
    n.fn.stripTags = function() {
        var n = this.html();
        return n.replace(t, "")
    }
    ;
    n.fn.stripTagsFromValue = function() {
        var n = this.val();
        return n.replace(t, "")
    }
}(jQuery)
