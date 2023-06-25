function throttleFunc(n, t, i) {
    t || (t = 250); var r, u; return function () {
        var e = i || this, f = +new Date, o = arguments; r && f < r + t ? (clearTimeout(u), u = setTimeout(function () {
            r = f; n.apply(e, o)
        }, t + r - f)) : (r = f, n.apply(e, o))
    }
} function getUrlParams() {
    var n = []; return function () {
        for (var t, r = /\+/g, u = /([^&=]+)=?([^&]*)/g, i = function (n) {
            return decodeURIComponent(n.replace(r, " "))
        }, f = window.location.search.substring(1); t = u.exec(f);)n.push([i(t[1]), i(t[2])])
    }(), n
} (function (n, t) {
    "use strict"; t.Throttle = {
        isInit: !1, initialize: function () {
            return t.Throttle.isInit ? console.debug("Cobalt.Throttle is being initialized again.") : (t.Throttle.isInit = !0, window.throttle = throttleFunc), !1
        }
    }
})(jQuery, Cobalt), function (n) {
    "use strict"; var o = document.getElementsByTagName("script"), c = "", i, s, r, u, h, f; for (i in o) if (o.hasOwnProperty(i) && !isNaN(parseInt(i)) && (s = o[i], r = s.src.match(/(?:tt\.js|curse(?:\.|)tip\.js)(?:(?:\?|)(.*))/i), r && r.length)) {
        c = s.src; u = r[1].split(/\&/); for (h in u) u.hasOwnProperty(h) && (f = u[h].split(/=/), (f[0] = "var" && f[1]) && (window[f[1]] = this)); break
    } var l = function (n) {
        return n + "px"
    }, e = function (n, t) {
        this.x = n || 0; this.y = t || 0
    }, t = function () {
        t.prototype.initialize.apply(this, arguments)
    }; t.Ready = !1; t.bindEvent = function (n, t, i) {
        var r = this, u; return t === "load" ? (u = i, n.addEventListener ? (t = "DOMContentLoaded", i = function () {
            u.call(r); r.Ready = !0
        }) : n.attachEvent ? (t = "onreadystatechange", n = document, i = function () {
            document.readyState !== "complete" || r.Ready || (u.call(r), r.Ready = !0)
        }) : (t = "onload", i = function () {
            u.call(r); r.Ready = !0
        })) : n.addEventListener || n.attachEvent || (t = "on" + t), n.addEventListener ? n.addEventListener(t, function (n) {
            i.call(r, n)
        }) : n.attachEvent ? n.attachEvent(t, function (n) {
            i.call(r, n)
        }) : n[t] = function (n) {
            i.call(r, n)
        }, this
    }; t.unbindEvent = function (n, t, i) {
        var r = this, u; return t === "load" ? (u = i, n.removeEventListener ? (t = "DOMContentLoaded", i = function () {
            u.call(r); r.Ready = !0
        }) : n.detachEvent ? (t = "onreadystatechange", n = document, i = function () {
            document.readyState !== "complete" || r.Ready || (u.call(r), r.Ready = !0)
        }) : (t = "onload", i = function () {
            u.call(r); r.Ready = !0
        })) : n.removeEventListener || n.detachEvent || (t = "on" + t), n.removeEventListener ? n.removeEventListener(t, function (n) {
            i.call(r, n)
        }) : n.detachEvent ? n.detachEvent(t, function (n) {
            i.call(r, n)
        }) : n[t] = null, this
    }; t.prototype = {
        Path: c, Cache: {}, Options: {
            AdvancedTooltips: !1, HashAliases: {}, LoadingText: "Loading&hellip;", Namespace: "db-tooltip", Offset: new e(10, 10), Paths: [], ExtraRegexes: [], Url: null, WatchComplete: null
        }, MousePosition: new e(0, 0), EventHandler: null, CurrentElement: null, CurrentTitle: null, Timeout: null, LastPosition: new e, FirstParty: !1, RegEx: null, MouseOverDocument: !1, Disabled: !1, IsDocumentTouchListenerEnabled: !1, initialize: function () {
            var u = this, r, i, n; switch (arguments.length) {
                case 0: return !1; case 1: typeof arguments[0] == "object" ? this.setOptions(arguments[0]) : this.setOptions({
                    Url: arguments[0]
                }); break; case 2: this.setOptions({
                    Url: arguments[0], Namespace: arguments[1]
                })
            }if (this.Options.Url === undefined) return !1; window.addEventListener && (this.EventHandler = "addEventListener"); r = /^(?:.*\/\/)?((.*)\.(com|net|org|local|dev))$/; try {
                this.FirstParty = this.Options.Url.match(r)[2] === document.location.host.match(r)[2]
            } catch (f) {
            } for (this.FirstParty || (i = document.createElement("link"), i.type = "text/css", i.rel = "stylesheet", i.href = this.Path.substr(0, this.Path.indexOf("/js/")) + "/css/tt.css", document.getElementsByTagName("head")[0].appendChild(i)), n = this.Options.Paths, n = n.length > 0 ? n.join("|") : "", n = n.replace(/\//, "\\/"), this.RegEx = new RegExp(this.Options.Url.replace(r, "$2.(?:com|net|org|local|dev)/" + (this.Options.Paths.length > 0 ? "(" + this.Options.Paths.join("|") + ")/[0-9p]+-tooltip" : ""))), t.Ready ? this.watchElligibleElements() : t.bindEvent.call(this, window, "load", this.watchElligibleElements), window.CurseTips = window.CurseTips || {}; window.CurseTips[this.Options.Namespace];)this.Options.Namespace += "-" + (new Date).getTime(); window.CurseTips[this.Options.Namespace] = this; try {
                Cobalt.runOnHtmlInsert(function (n) {
                    u.watchElements(n.find("a[href], *[data-tooltip-href]"))
                })
            } catch (f) {
            }
        }, disable: function () {
            this.Disabled = !0
        }, enable: function () {
            this.Disabled = !1
        }, toggle: function () {
            this.Disabled = !this.Disabled
        }, setOptions: function (n) {
            var i = {}; for (var t in this.Options) this.Options.hasOwnProperty(t) && (i[t] = this.Options[t]); for (t in n) n.hasOwnProperty(t) && (i[t] = n[t]); this.Options = i
        }, watchElligibleElements: function () {
            this._watchElements(this.getElligibleElements())
        }, watchElements: function (n) {
            n.nodeName && !n.length && (n = [n]); n = this._processElements(n); n.length && this._watchElements(n)
        }, _watchElements: function (n) {
            var r, i; for (r in n) if (n.hasOwnProperty(r)) {
                if (i = n[r], !i.nodeName) continue; t.bindEvent.call(this, i, "mouseover", this.createTooltip); t.bindEvent.call(this, i, "mouseout", function (n) {
                    this.handleTooltipData(); t.unbindEvent.call(this, n.currentTarget, "mousemove", this.moveTooltip)
                }); t.bindEvent.call(this, document, "mouseover", function () {
                    return this.MouseOverDocument || (this.MouseOverDocument = !0), !1
                }); t.bindEvent.call(this, document, "mouseout", function () {
                    this.MouseOverDocument && (this.handleTooltipData(), this.MouseOverDocument = !1); return
                })
            } typeof this.Options.WatchComplete == "function" && this.Options.WatchComplete(n); this.IsDocumentTouchListenerEnabled || (t.bindEvent.call(this, document, "touchend", function () {
                this.handleTooltipData()
            }), this.IsDocumentTouchListenerEnabled = !0)
        }, _getURLParams: function (n) {
            var t, i, r, u; try {
                t = n.split("?")[1].match(/(.*?)(#|$)/)[1].split("&")
            } catch (f) {
                return {}
            } i = {}; for (r in n.split("?")[1].split("&")) t.hasOwnProperty(r) && (u = t[r].split("="), i[u[0]] = u[1]); return i
        }, _isValidToolipHref: function (n) {
            var f = n.split(/(\?|#)/)[0], e = document.location.href.split(/(\?|#)/)[0], r, u, t, i; if (f === e) {
                r = this._getURLParams(n); u = this._getURLParams(document.location.href); for (t in this.Options.Arguments) if (this.Options.Arguments.hasOwnProperty(t) && (i = this.Options.Arguments[t], r[i] !== u[i])) return !0; return !1
            } return !0
        }, _processElements: function (n) {
            var o = [], f, i, t, e, u, r, s, h, c; for (f in n) if (n.hasOwnProperty(f) && !isNaN(f)) {
                if (i = n[f], !i.nodeName) continue; try {
                    if (t = i.getAttribute("data-tooltip-href") || i.href, !this._isValidToolipHref(t)) continue
                } catch (l) {
                } if (!t) continue; try {
                    if (i.getAttribute("data-disable-tip") === "true") continue
                } catch (l) {
                } t[0] === "/" && t[1] !== "/" && (t = "//" + document.location.host + t); t = t.replace(/\/(#|\?|$)/, "$1").replace(/#$/, ""); for (e in this.Options.HashAliases) if (this.Options.HashAliases.hasOwnProperty(e)) {
                    if (u = t.split("#"), !u[1]) continue; u[1] === e && (u[0] += (u[0].search(/\?/) >= 0 ? "&" : "?") + this.Options.HashAliases[e], t = u[0], i.setAttribute("data-tooltip-href", t))
                } if (this.FirstParty && t.search(new RegExp(document.location.host + document.location.pathname + "$")) > -1) continue; if (t.substr(0, 11) === "javascript:" || t.length === 0 || t === "#") continue; if (r = t.match(this.RegEx), r) t.substr(0, t.search(this.RegEx)).search(/\/\//) === -1 && (t = "//" + t), i.setAttribute("data-tooltip-href", t), r[3] && i.setAttribute("data-tooltip-mode", r[3]), r[4] && r[5] && (i.setAttribute("data-tooltip-ver1", r[4]), i.setAttribute("data-tooltip-ver2", r[5])), o.push(i); else {
                    s = !1; for (h in this.Options.ExtraRegexes) this.Options.ExtraRegexes.hasOwnProperty(h) && (c = t.match(this.Options.ExtraRegexes[h]), !s && c && (i.setAttribute("data-tooltip-custom", "true"), s = !0, o.push(i)))
                }
            } return o
        }, getElligibleElements: function () {
            var t, n, i, r; if (document.querySelectorAll) n = document.querySelectorAll("a[data-tooltip-href]"); else {
                t = document.getElementsByTagName("body")[0].getElementsByTagName("*"); n = []; for (i in t) t.hasOwnProperty(i) && (r = t[i], r.getAttribute("data-tooltip-href") && n.push(r))
            } return this._processElements(n)
        }, createTooltip: function (n) {
            var s, y, e, l; if (this.Disabled || !n.currentTarget.getAttribute("data-tooltip-href") || $(document).width() <= 640) return !1; var i, u = n.currentTarget, h = u.getAttribute("data-tooltip-href"), o = u.getAttribute("data-tooltip-custom"), r = h, f = null, a = null; if (o || (r = h.split(/\//), f = r.pop().split("-"), a = f[0]), s = [], y = null, this.MousePosition.x = n.clientX, this.MousePosition.y = n.clientY, !o) {
                if (f && f.length) for (e = 2; e < f.length; e++)if (f[e]) switch (f[e][0]) {
                    case "?": s = f[e].substr(1).split(/&/); break; case "#": y = f[e]
                }if (!a) return !1; r.push(a); r = r.join("/"); (this.Options.AdvancedTooltips && u.getAttribute("data-tooltip-mode") !== "simple" || u.getAttribute("data-tooltip-mode") === "advanced") && s.push("advanced=1"); s.push("callback=window.CurseTips['" + this.Options.Namespace + "'].handleTooltipData")
            } (i = document.getElementById("db-tooltip-container")) ? i.innerHTML = "" : (i = document.createElement("div"), i.id = "db-tooltip-container", document.getElementsByTagName("body")[0].appendChild(i)); i.className = this.Options.Namespace; u.getAttribute("data-tooltip-ver1") && u.getAttribute("data-tooltip-ver2") ? (o || (r += "/dual-tooltip/" + u.getAttribute("data-tooltip-ver1") + "/" + u.getAttribute("data-tooltip-ver2")), i.className += " diff") : o || (r += "/tooltip"); o || (r += "?" + s.join("&"), r = r.replace(/^http(s)?:/, "")); i.style.position = "fixed"; i.style.zIndex = 9999; i.style.whiteSpace = "nowrap"; var p = document.createElement("h3"), v = document.createElement("div"), c = document.createElement("div"); p.style.display = "none"; v.className = "body"; c.className = "url"; this.Options.ShowURL ? c.innerText = h.replace(/^http(s)?:\/\//, "") : c.style.display = "none"; i.appendChild(p); i.appendChild(v); i.appendChild(c); t.bindEvent.call(this, u, "mousemove", this.moveTooltip); this.Cache[document.location.protocol + r] ? this.handleTooltipData(this.Cache[document.location.protocol + r]) : (l = document.createElement("script"), l.src = r, l.setAttribute("data-tooltip-href", h), document.getElementsByTagName("head")[0].appendChild(l), v.innerHTML = this.Options.LoadingText, i.style.display = "block")
        }, handleTooltipData: function (n) {
            var t = document.getElementById("db-tooltip-container"), r, u, e, i, f; if (!t) return !1; if (!n) return t.style.display = "none", !1; this.Cache[n.Url] = n; t.className === this.Options.Namespace + " diff" && (r = document.createElement("div"), r.innerHTML = n.Tooltip, u = r.getElementsByClassName("db-tooltip"), u.length > 2 && (e = new HTMLDiff(u[1], u[2]), e.diff(), n.Tooltip = r.innerHTML)); t.getElementsByClassName("body")[0].innerHTML = n.Tooltip; t.style.display = "block"; i = t.getElementsByClassName("db-description"); for (f in i) i.hasOwnProperty(f) && i[f].style !== undefined && (i[f].style.whiteSpace = "normal"); this.moveTooltip()
        }, moveTooltip: function (n) {
            n ? (this.MousePosition.x = n.clientX, this.MousePosition.y = n.clientY) : n = {
                clientX: this.MousePosition.x, clientY: this.MousePosition.y
            }; this.Options.Offset.x && this.Options.Offset.y || (this.Options.Offset = new e(10, 10)); var t = document.getElementById("db-tooltip-container"), i = t.offsetHeight, r = t.offsetWidth, u = n.clientX + this.Options.Offset.x, f = window.innerHeight - n.clientY + this.Options.Offset.y; n.clientY - i - this.Options.Offset.y < 0 && (f -= n.clientY + i + this.Options.Offset.y <= window.innerHeight ? i + this.Options.Offset.y * 2 : i / 2 - this.Options.Offset.y); window.innerWidth - n.clientX - r - this.Options.Offset.x < this.Options.Offset.x && (u -= r + this.Options.Offset.x * 2); t.style.left = l(u); t.style.bottom = l(f)
        }
    }; t.bindEvent(window, "load", function () {
        this.Ready = !0
    }); n.CurseTip = t
}(window || this), function () {
    window.HTMLDiff = function () {
        function n(n, t) {
            this.a = n; this.b = t
        } return n.prototype.diff = function () {
            var n; return n = this.diff_list(this.tokenize(this.a), this.tokenize(this.b)), this.update(this.a, n.filter(function (n) {
                var t, i; return t = n[0], i = n[1], t !== "+"
            })), this.update(this.b, n.filter(function (n) {
                var t, i; return t = n[0], i = n[1], t !== "-"
            }))
        }, n.prototype.parseTextNodes = function (n, t) {
            var i; return i = function (n) {
                if (n == null) return !1; var s, h, r, u, f, e, c, l, o; if (n.nodeType === 3) {
                    if (!/^\s*$/.test(n.nodeValue)) return t(n)
                } else {
                    for (o = function () {
                        var t, u, i, r; for (i = n.childNodes, r = [], t = 0, u = i.length; t < u; t++)s = i[t], r.push(s); return r
                    }(), f = 0, c = o.length; f < c; f++)if (u = o[f], r = i(u), r) {
                        for (e = 0, l = r.length; e < l; e++)h = r[e], n.insertBefore(h, u); n.removeChild(u)
                    } return !1
                }
            }, i(n)
        }, n.prototype.tokenize = function (n) {
            var t; return t = [], this.parseTextNodes(n, function (n) {
                return t = t.concat(n.nodeValue.split(" ")), !1
            }), t
        }, n.prototype.update = function (n, t) {
            var i; return i = 0, this.parseTextNodes(n, function (n) {
                var o, s, r, u, f, h, a, v, c, e, y, l; for (a = i, o = i + n.nodeValue.split(" ").length, i = o, f = function () {
                    var n, f, r, u, i; for (r = t.slice(a, o), i = [], n = 0, f = r.length; n < f; n++)u = r[n], v = u[0], c = u[1], v === "=" ? i.push(c) : i.push("<ins>" + c + "<\/ins>"); return i
                }(), f = f.join(" ").replace(/<\/ins> <ins>/g, " ").replace(/<ins> /g, " <ins>").replace(/[ ]<\/ins>/g, "<\/ins> ").replace(/<ins><\/ins>/g, ""), u = [], r = document.createTextNode(""), u.push(r), l = f.split(/(<\/?ins>)/), e = 0, y = l.length; e < y; e++) {
                    h = l[e]; switch (h) {
                        case "<ins>": s = document.createElement("ins"); u.push(s); r = document.createTextNode(""); s.appendChild(r); break; case "<\/ins>": r = document.createTextNode(""); u.push(r); break; default: r.nodeValue = h
                    }
                } return u.filter(function (n) {
                    return !(n.nodeType === 3 && n.nodeValue === "")
                })
            })
        }, n.prototype.diff_list = function (n, t) {
            var i, o, f, a, s, u, e, c, h, r, l, y, p, w, b, v; for (s = {}, i = 0, y = n.length; i < y; i++)r = n[i], r in s || (s[r] = []), s[r].push(i); for (a = function () {
                var t, r; for (r = [], i = 0, t = n.length; 0 <= t ? i < t : i > t; 0 <= t ? i++ : i--)r.push(0); return r
            }(), c = e = u = 0, o = 0, p = t.length; o < p; o++) {
                for (r = t[o], h = function () {
                    var t, r; for (r = [], i = 0, t = n.length; 0 <= t ? i < t : i > t; 0 <= t ? i++ : i--)r.push(0); return r
                }(), v = (b = s[r]) != null ? b : [], l = 0, w = v.length; l < w; l++)f = v[l], h[f] = (f && a[f - 1] ? 1 : 0) + 1, h[f] > u && (u = h[f], c = f - u + 1, e = o - u + 1); a = h
            } return u === 0 ? [].concat(function () {
                var t, u, i; for (i = [], t = 0, u = n.length; t < u; t++)r = n[t], i.push(["-", r]); return i
            }(), function () {
                var n, u, i; for (i = [], n = 0, u = t.length; n < u; n++)r = t[n], i.push(["+", r]); return i
            }()) : [].concat(this.diff_list(n.slice(0, c), t.slice(0, e)), function () {
                var n, o, i, f; for (i = t.slice(e, e + u), f = [], n = 0, o = i.length; n < o; n++)r = i[n], f.push(["=", r]); return f
            }(), this.diff_list(n.slice(c + u), t.slice(e + u)))
        }, n
    }()
}.call(this), function (n) {
    if (typeof exports == "object" && typeof module != "undefined") module.exports = n(); else if (typeof define == "function" && define.amd) define([], n); else {
        var t; t = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this; t.vex = n()
    }
}(function () {
    var n; return function t(n, i, r) {
        function u(f, o) {
            var h, c, s; if (!i[f]) {
                if (!n[f]) {
                    if (h = typeof require == "function" && require, !o && h) return h(f, !0); if (e) return e(f, !0); c = new Error("Cannot find module '" + f + "'"); throw c.code = "MODULE_NOT_FOUND", c;
                } s = i[f] = {
                    exports: {}
                }; n[f][0].call(s.exports, function (t) {
                    var i = n[f][1][t]; return u(i ? i : t)
                }, s, s.exports, t, n, i, r)
            } return i[f].exports
        } for (var e = typeof require == "function" && require, f = 0; f < r.length; f++)u(r[f]); return u
    }({
        1: [function () {
            "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? function () {
                "use strict"; var n = document.createElement("_"), t, i; n.classList.add("c1", "c2"); n.classList.contains("c2") || (t = function (n) {
                    var t = DOMTokenList.prototype[n]; DOMTokenList.prototype[n] = function (n) {
                        for (var r = arguments.length, i = 0; i < r; i++)n = arguments[i], t.call(this, n)
                    }
                }, t("add"), t("remove")); n.classList.toggle("c3", !1); n.classList.contains("c3") && (i = DOMTokenList.prototype.toggle, DOMTokenList.prototype.toggle = function (n, t) {
                    return 1 in arguments && !this.contains(n) == !t ? t : i.call(this, n)
                }); n = null
            }() : function (n) {
                "use strict"; var f; if ("Element" in n) {
                    var e = "classList", t = "prototype", o = n.Element[t], r = Object, l = String[t].trim || function () {
                        return this.replace(/^\s+|\s+$/g, "")
                    }, a = Array[t].indexOf || function (n) {
                        for (var t = 0, i = this.length; t < i; t++)if (t in this && this[t] === n) return t; return -1
                    }, s = function (n, t) {
                        this.name = n; this.code = DOMException[n]; this.message = t
                    }, u = function (n, t) {
                        if (t === "") throw new s("SYNTAX_ERR", "An invalid or illegal string was specified"); if (/\s/.test(t)) throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character"); return a.call(n, t)
                    }, h = function (n) {
                        for (var i = l.call(n.getAttribute("class") || ""), r = i ? i.split(/\s+/) : [], t = 0, u = r.length; t < u; t++)this.push(r[t]); this._updateClassName = function () {
                            n.setAttribute("class", this.toString())
                        }
                    }, i = h[t] = [], c = function () {
                        return new h(this)
                    }; if (s[t] = Error[t], i.item = function (n) {
                        return this[n] || null
                    }, i.contains = function (n) {
                        return n += "", u(this, n) !== -1
                    }, i.add = function () {
                        var t = arguments, i = 0, f = t.length, n, r = !1; do n = t[i] + "", u(this, n) === -1 && (this.push(n), r = !0); while (++i < f); r && this._updateClassName()
                    }, i.remove = function () {
                        var i = arguments, r = 0, e = i.length, t, f = !1, n; do for (t = i[r] + "", n = u(this, t); n !== -1;)this.splice(n, 1), f = !0, n = u(this, t); while (++r < e); f && this._updateClassName()
                    }, i.toggle = function (n, t) {
                        n += ""; var i = this.contains(n), r = i ? t !== !0 && "remove" : t !== !1 && "add"; return r && this[r](n), t === !0 || t === !1 ? t : !i
                    }, i.toString = function () {
                        return this.join(" ")
                    }, r.defineProperty) {
                        f = {
                            get: c, enumerable: !0, configurable: !0
                        }; try {
                            r.defineProperty(o, e, f)
                        } catch (v) {
                            v.number === -2146823252 && (f.enumerable = !1, r.defineProperty(o, e, f))
                        }
                    } else r[t].__defineGetter__ && o.__defineGetter__(e, c)
                }
            }(window.self))
        }, {}], 2: [function (n, t) {
            function f(n, t) {
                var u, f, r, o; if ("string" != typeof n) throw new TypeError("String expected"); if (t || (t = document), u = /<([\w:]+)/.exec(n), !u) return t.createTextNode(n); if (n = n.replace(/^\s+|\s+$/g, ""), f = u[1], f == "body") return r = t.createElement("html"), r.innerHTML = n, r.removeChild(r.lastChild); var e = i[f] || i._default, s = e[0], h = e[1], c = e[2], r = t.createElement("div"); for (r.innerHTML = h + n + c; s--;)r = r.lastChild; if (r.firstChild == r.lastChild) return r.removeChild(r.firstChild); for (o = t.createDocumentFragment(); r.firstChild;)o.appendChild(r.removeChild(r.firstChild)); return o
            } var u, r, i; t.exports = f; u = !1; typeof document != "undefined" && (r = document.createElement("div"), r.innerHTML = '  <link/><table><\/table><a href="/a">a<\/a><input type="checkbox"/>', u = !r.getElementsByTagName("link").length, r = undefined); i = {
                legend: [1, "<fieldset>", "<\/fieldset>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"], _default: u ? [1, "X<div>", "<\/div>"] : [0, "", ""]
            }; i.td = i.th = [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"]; i.option = i.optgroup = [1, '<select multiple="multiple">', "<\/select>"]; i.thead = i.tbody = i.colgroup = i.caption = i.tfoot = [1, "<table>", "<\/table>"]; i.polyline = i.ellipse = i.polygon = i.circle = i.text = i.line = i.path = i.rect = i.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "<\/svg>"]
        }, {}], 3: [function (n, t) {
            "use strict"; function i(n) {
                var f, i, t, e, r, s, u, o; if (n === undefined || n === null) throw new TypeError("Cannot convert first argument to object"); for (f = Object(n), i = 1; i < arguments.length; i++)if (t = arguments[i], t !== undefined && t !== null) for (e = Object.keys(Object(t)), r = 0, s = e.length; r < s; r++)u = e[r], o = Object.getOwnPropertyDescriptor(t, u), o !== undefined && o.enumerable && (f[u] = t[u]); return f
            } function r() {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1, configurable: !0, writable: !0, value: i
                })
            } t.exports = {
                assign: i, polyfill: r
            }
        }, {}], 4: [function (n, t) {
            function e(n, t) {
                var v, i, o, p, w, y, e; typeof t != "object" ? t = {
                    hash: !!t
                } : t.hash === undefined && (t.hash = !0); var r = t.hash ? {} : "", c = t.serializer || (t.hash ? s : h), b = n && n.elements ? n.elements : [], l = Object.create(null); for (v = 0; v < b.length; ++v)if ((i = b[v], (t.disabled || !i.disabled) && i.name) && f.test(i.nodeName) && !u.test(i.type)) {
                    if (e = i.name, o = i.value, i.type !== "checkbox" && i.type !== "radio" || i.checked || (o = undefined), t.empty) {
                        if (i.type !== "checkbox" || i.checked || (o = ""), i.type === "radio" && (l[i.name] || i.checked ? i.checked && (l[i.name] = !0) : l[i.name] = !1), !o && i.type == "radio") continue
                    } else if (!o) continue; if (i.type === "select-multiple") {
                        for (o = [], p = i.options, w = !1, y = 0; y < p.length; ++y) {
                            var a = p[y], k = t.empty && !a.value, d = a.value || k; a.selected && d && (w = !0, r = t.hash && e.slice(e.length - 2) !== "[]" ? c(r, e + "[]", a.value) : c(r, e, a.value))
                        } !w && t.empty && (r = c(r, e, "")); continue
                    } r = c(r, e, o)
                } if (t.empty) for (e in l) l[e] || (r = c(r, e, "")); return r
            } function o(n) {
                var i = [], u = new RegExp(r), t = /^([^\[\]]*)/.exec(n); for (t[1] && i.push(t[1]); (t = u.exec(n)) !== null;)i.push(t[1]); return i
            } function i(n, t, r) {
                var u, o, f, e; return t.length === 0 ? r : (u = t.shift(), o = u.match(/^\[(.+?)\]$/), u === "[]") ? (n = n || [], Array.isArray(n) ? n.push(i(null, t, r)) : (n._values = n._values || [], n._values.push(i(null, t, r))), n) : (o ? (f = o[1], e = +f, isNaN(e) ? (n = n || {}, n[f] = i(n[f], t, r)) : (n = n || [], n[e] = i(n[e], t, r))) : n[u] = i(n[u], t, r), n)
            } function s(n, t, u) {
                var s = t.match(r), e, f; return s ? (e = o(t), i(n, e, u)) : (f = n[t], f ? (Array.isArray(f) || (n[t] = [f]), n[t].push(u)) : n[t] = u), n
            } function h(n, t, i) {
                return i = i.replace(/(\r)?\n/g, "\r\n"), i = encodeURIComponent(i), i = i.replace(/%20/g, "+"), n + (n ? "&" : "") + encodeURIComponent(t) + "=" + i
            } var u = /^(?:submit|button|image|reset|file)$/i, f = /^(?:input|select|textarea|keygen)/i, r = /(\[[^\[\]]*\])/g; t.exports = e
        }, {}], 5: [function (t, i, r) {
            (function (u) {
                (function (t) {
                    if (typeof r == "object" && typeof i != "undefined") i.exports = t(); else if (typeof n == "function" && n.amd) n([], t); else {
                        var f; f = typeof window != "undefined" ? window : typeof u != "undefined" ? u : typeof self != "undefined" ? self : this; f.vexDialog = t()
                    }
                })(function () {
                    return function n(i, r, u) {
                        function f(e, s) {
                            var c, l, h; if (!r[e]) {
                                if (!i[e]) {
                                    if (c = typeof t == "function" && t, !s && c) return c(e, !0); if (o) return o(e, !0); l = new Error("Cannot find module '" + e + "'"); throw l.code = "MODULE_NOT_FOUND", l;
                                } h = r[e] = {
                                    exports: {}
                                }; i[e][0].call(h.exports, function (n) {
                                    var t = i[e][1][n]; return f(t ? t : n)
                                }, h, h.exports, n, i, r, u)
                            } return r[e].exports
                        } for (var o = typeof t == "function" && t, e = 0; e < u.length; e++)f(u[e]); return f
                    }({
                        1: [function (n, t) {
                            function f(n, t) {
                                var u, f, r, o; if ("string" != typeof n) throw new TypeError("String expected"); if (t || (t = document), u = /<([\w:]+)/.exec(n), !u) return t.createTextNode(n); if (n = n.replace(/^\s+|\s+$/g, ""), f = u[1], f == "body") return r = t.createElement("html"), r.innerHTML = n, r.removeChild(r.lastChild); var e = i[f] || i._default, s = e[0], h = e[1], c = e[2], r = t.createElement("div"); for (r.innerHTML = h + n + c; s--;)r = r.lastChild; if (r.firstChild == r.lastChild) return r.removeChild(r.firstChild); for (o = t.createDocumentFragment(); r.firstChild;)o.appendChild(r.removeChild(r.firstChild)); return o
                            } var u, r, i; t.exports = f; u = !1; typeof document != "undefined" && (r = document.createElement("div"), r.innerHTML = '  <link/><table><\/table><a href="/a">a<\/a><input type="checkbox"/>', u = !r.getElementsByTagName("link").length, r = undefined); i = {
                                legend: [1, "<fieldset>", "<\/fieldset>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"], _default: u ? [1, "X<div>", "<\/div>"] : [0, "", ""]
                            }; i.td = i.th = [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"]; i.option = i.optgroup = [1, '<select multiple="multiple">', "<\/select>"]; i.thead = i.tbody = i.colgroup = i.caption = i.tfoot = [1, "<table>", "<\/table>"]; i.polyline = i.ellipse = i.polygon = i.circle = i.text = i.line = i.path = i.rect = i.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "<\/svg>"]
                        }, {}], 2: [function (n, t) {
                            function e(n, t) {
                                var v, i, o, p, w, y, e; typeof t != "object" ? t = {
                                    hash: !!t
                                } : t.hash === undefined && (t.hash = !0); var r = t.hash ? {} : "", c = t.serializer || (t.hash ? s : h), b = n && n.elements ? n.elements : [], l = Object.create(null); for (v = 0; v < b.length; ++v)if ((i = b[v], (t.disabled || !i.disabled) && i.name) && f.test(i.nodeName) && !u.test(i.type)) {
                                    if (e = i.name, o = i.value, i.type !== "checkbox" && i.type !== "radio" || i.checked || (o = undefined), t.empty) {
                                        if (i.type !== "checkbox" || i.checked || (o = ""), i.type === "radio" && (l[i.name] || i.checked ? i.checked && (l[i.name] = !0) : l[i.name] = !1), !o && i.type == "radio") continue
                                    } else if (!o) continue; if (i.type === "select-multiple") {
                                        for (o = [], p = i.options, w = !1, y = 0; y < p.length; ++y) {
                                            var a = p[y], k = t.empty && !a.value, d = a.value || k; a.selected && d && (w = !0, r = t.hash && e.slice(e.length - 2) !== "[]" ? c(r, e + "[]", a.value) : c(r, e, a.value))
                                        } !w && t.empty && (r = c(r, e, "")); continue
                                    } r = c(r, e, o)
                                } if (t.empty) for (e in l) l[e] || (r = c(r, e, "")); return r
                            } function o(n) {
                                var i = [], u = new RegExp(r), t = /^([^\[\]]*)/.exec(n); for (t[1] && i.push(t[1]); (t = u.exec(n)) !== null;)i.push(t[1]); return i
                            } function i(n, t, r) {
                                var u, o, f, e; return t.length === 0 ? r : (u = t.shift(), o = u.match(/^\[(.+?)\]$/), u === "[]") ? (n = n || [], Array.isArray(n) ? n.push(i(null, t, r)) : (n._values = n._values || [], n._values.push(i(null, t, r))), n) : (o ? (f = o[1], e = +f, isNaN(e) ? (n = n || {}, n[f] = i(n[f], t, r)) : (n = n || [], n[e] = i(n[e], t, r))) : n[u] = i(n[u], t, r), n)
                            } function s(n, t, u) {
                                var s = t.match(r), e, f; return s ? (e = o(t), i(n, e, u)) : (f = n[t], f ? (Array.isArray(f) || (n[t] = [f]), n[t].push(u)) : n[t] = u), n
                            } function h(n, t, i) {
                                return i = i.replace(/(\r)?\n/g, "\r\n"), i = encodeURIComponent(i), i = i.replace(/%20/g, "+"), n + (n ? "&" : "") + encodeURIComponent(t) + "=" + i
                            } var u = /^(?:submit|button|image|reset|file)$/i, f = /^(?:input|select|textarea|keygen)/i, r = /(\[[^\[\]]*\])/g; t.exports = e
                        }, {}], 3: [function (n, t) {
                            var i = n("domify"), r = n("form-serialize"), u = function (n) {
                                var t = document.createElement("form"), r, u; return t.classList.add("vex-dialog-form"), r = document.createElement("div"), r.classList.add("vex-dialog-message"), r.appendChild(n.message instanceof window.Node ? n.message : i(n.message)), u = document.createElement("div"), u.classList.add("vex-dialog-input"), u.appendChild(n.input instanceof window.Node ? n.input : i(n.input)), t.appendChild(r), t.appendChild(u), t
                            }, f = function (n) {
                                var u = document.createElement("div"), i, r, t; for (u.classList.add("vex-dialog-buttons"), i = 0; i < n.length; i++)r = n[i], t = document.createElement("button"), t.type = r.type, t.textContent = r.text, t.classList.add(r.className), t.classList.add("vex-dialog-button"), i === 0 ? t.classList.add("vex-first") : i === n.length - 1 && t.classList.add("vex-last"), function (n) {
                                    t.addEventListener("click", function (t) {
                                        n.click && n.click.call(this, t)
                                    }.bind(this))
                                }.bind(this)(r), u.appendChild(t); return u
                            }, e = function (n) {
                                var t = {
                                    name: "dialog", open: function (t) {
                                        var i = Object.assign({}, this.defaultOptions, t), o; i.unsafeMessage && !i.message ? i.message = i.unsafeMessage : i.message && (i.message = n._escapeHtml(i.message)); var e = i.unsafeContent = u(i), r = n.open(i), s = i.beforeClose && i.beforeClose.bind(r); return r.options.beforeClose = function () {
                                            var n = s ? s() : !0; return n && i.callback(this.value || !1), n
                                        }.bind(r), e.appendChild(f.call(r, i.buttons)), r.form = e, e.addEventListener("submit", i.onSubmit.bind(r)), i.focusFirstInput && (o = r.contentEl.querySelector("button, input, textarea"), o && o.focus()), r
                                    }, alert: function (n) {
                                        return typeof n == "string" && (n = {
                                            message: n
                                        }), n = Object.assign({}, this.defaultOptions, this.defaultAlertOptions, n), this.open(n)
                                    }, confirm: function (n) {
                                        if (typeof n != "object" || typeof n.callback != "function") throw new Error("dialog.confirm(options) requires options.callback."); return n = Object.assign({}, this.defaultOptions, this.defaultConfirmOptions, n), this.open(n)
                                    }, prompt: function (t) {
                                        var i, r, u; if (typeof t != "object" || typeof t.callback != "function") throw new Error("dialog.prompt(options) requires options.callback."); return i = Object.assign({}, this.defaultOptions, this.defaultPromptOptions), r = {
                                            unsafeMessage: '<label for="vex">' + n._escapeHtml(t.label || i.label) + "<\/label>", input: '<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="' + n._escapeHtml(t.placeholder || i.placeholder) + '" value="' + n._escapeHtml(t.value || i.value) + '" />'
                                        }, t = Object.assign(i, r, t), u = t.callback, t.callback = function (n) {
                                            n = n[Object.keys(n)[0]]; u(n)
                                        }, this.open(t)
                                    }
                                }; return t.buttons = {
                                    YES: {
                                        text: "OK", type: "submit", className: "vex-dialog-button-primary", click: function () {
                                            this.value = !0
                                        }
                                    }, NO: {
                                        text: "Cancel", type: "button", className: "vex-dialog-button-secondary", click: function () {
                                            this.value = !1; this.close()
                                        }
                                    }
                                }, t.defaultOptions = {
                                    callback: function () {
                                    }, afterOpen: function () {
                                    }, message: "", input: "", buttons: [t.buttons.YES, t.buttons.NO], showCloseButton: !1, onSubmit: function (n) {
                                        return n.preventDefault(), this.options.input && (this.value = r(this.form, {
                                            hash: !0
                                        })), this.close()
                                    }, focusFirstInput: !0
                                }, t.defaultAlertOptions = {
                                    buttons: [t.buttons.YES]
                                }, t.defaultPromptOptions = {
                                    label: "Prompt:", placeholder: "", value: ""
                                }, t.defaultConfirmOptions = {}, t
                            }; t.exports = e
                        }, {
                            domify: 1, "form-serialize": 2
                        }]
                    }, {}, [3])(3)
                })
            }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
        }, {
            domify: 2, "form-serialize": 4
        }], 6: [function (n, t) {
            var i = n("./vex"); i.registerPlugin(n("vex-dialog")); t.exports = i
        }, {
            "./vex": 7, "vex-dialog": 5
        }], 7: [function (n, t) {
            n("classlist-polyfill"); n("es6-object-assign").polyfill(); var h = n("domify"), s = function (n) {
                if (typeof n != "undefined") {
                    var t = document.createElement("div"); return t.appendChild(document.createTextNode(n)), t.innerHTML
                } return ""
            }, f = function (n, t) {
                var r, i, u; if (typeof t == "string" && t.length !== 0) for (r = t.split(" "), i = 0; i < r.length; i++)u = r[i], u.length && n.classList.add(u)
            }, e = function () {
                var i = document.createElement("div"), n = {
                    WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oanimationend", msAnimation: "MSAnimationEnd", animation: "animationend"
                }; for (var t in n) if (i.style[t] !== undefined) return n[t]; return !1
            }(), u = {
                vex: "vex", content: "vex-content", overlay: "vex-overlay", close: "vex-close", closing: "vex-closing", open: "vex-open"
            }, i = {}, c = 1, o = !1, r = {
                open: function (n) {
                    var w = function (n) {
                        console.warn('The "' + n + '" property is deprecated in vex 3. Use CSS classes and the appropriate "ClassName" options, instead.'); console.warn("See http://github.hubspot.com/vex/api/advanced/#options")
                    }, t, l, a, v, y, p; return n.css && w("css"), n.overlayCSS && w("overlayCSS"), n.contentCSS && w("contentCSS"), n.closeCSS && w("closeCSS"), t = {}, t.id = c++, i[t.id] = t, t.isOpen = !0, t.close = function () {
                        function t(n) {
                            return f.getPropertyValue(n + "animation-name") !== "none" && f.getPropertyValue(n + "animation-duration") !== "0s"
                        } var n, s, f, h, r; return this.isOpen ? (n = this.options, o && !n.escapeButtonCloses) ? !1 : (s = function () {
                            return n.beforeClose ? n.beforeClose.call(this) : !0
                        }.bind(this)(), s === !1) ? !1 : (this.isOpen = !1, f = window.getComputedStyle(this.contentEl), h = t("") || t("-webkit-") || t("-moz-") || t("-o-"), r = function r() {
                            this.rootEl.parentNode && (this.rootEl.removeEventListener(e, r), delete i[this.id], this.rootEl.parentNode.removeChild(this.rootEl), n.afterClose && n.afterClose.call(this), Object.keys(i).length === 0 && document.body.classList.remove(u.open))
                        }.bind(this), e && h ? (this.rootEl.addEventListener(e, r), this.rootEl.classList.add(u.closing)) : r(), !0) : !0
                    }, typeof n == "string" && (n = {
                        content: n
                    }), n.unsafeContent && !n.content ? n.content = n.unsafeContent : n.content && (n.content = s(n.content)), l = t.options = Object.assign({}, r.defaultOptions, n), a = t.rootEl = document.createElement("div"), a.classList.add(u.vex), f(a, l.className), v = t.overlayEl = document.createElement("div"), v.classList.add(u.overlay), f(v, l.overlayClassName), l.overlayClosesOnClick && v.addEventListener("click", function (n) {
                        n.target === v && t.close()
                    }), a.appendChild(v), y = t.contentEl = document.createElement("div"), y.classList.add(u.content), f(y, l.contentClassName), y.appendChild(l.content instanceof window.Node ? l.content : h(l.content)), a.appendChild(y), l.showCloseButton && (p = t.closeEl = document.createElement("div"), p.classList.add(u.close), f(p, l.closeClassName), p.addEventListener("click", t.close.bind(t)), y.appendChild(p)), document.querySelector(l.appendLocation).appendChild(a), l.afterOpen && l.afterOpen.call(t), document.body.classList.add(u.open), t
                }, close: function (n) {
                    var t; if (n.id) t = n.id; else if (typeof n == "string") t = n; else throw new TypeError("close requires a vex object or id string"); return i[t] ? i[t].close() : !1
                }, closeTop: function () {
                    var n = Object.keys(i); return n.length ? i[n[n.length - 1]].close() : !1
                }, closeAll: function () {
                    for (var n in i) this.close(n); return !0
                }, getAll: function () {
                    return i
                }, getById: function (n) {
                    return i[n]
                }
            }; window.addEventListener("keyup", function (n) {
                n.keyCode === 27 && (o = !0, r.closeTop(), o = !1)
            }); window.addEventListener("popstate", r.closeAll); r.defaultOptions = {
                content: "", showCloseButton: !0, escapeButtonCloses: !0, overlayClosesOnClick: !0, appendLocation: "body", className: "", overlayClassName: "", contentClassName: "", closeClassName: ""
            }; Object.defineProperty(r, "_escapeHtml", {
                configurable: !1, enumerable: !1, writable: !1, value: s
            }); r.registerPlugin = function (n, t) {
                var i = n(r), u = t || i.name; if (r[u]) throw new Error("Plugin " + t + " is already registered."); r[u] = i
            }; t.exports = r
        }, {
            "classlist-polyfill": 1, domify: 2, "es6-object-assign": 3
        }]
    }, {}, [6])(6)
}), function (n, t) {
    typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (n = n || self, n.shave = t())
}(this, function () {
    "use strict"; function n(n, t) {
        var h = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, f, l, v, r, y, p; if (typeof t == "undefined" || isNaN(t)) throw Error("maxHeight is required"); if (f = typeof n == "string" ? document.querySelectorAll(n) : n, f) {
            var d = h.character || "&mldr;", b = h.classname || "js-shave", c = typeof h.spaces == "boolean" ? h.spaces : !0, k = '<span class="js-shave-char">'.concat(d, "<\/span>"); for (("length" in f) || (f = [f]), l = 0; l < f.length; l += 1) {
                var i = f[l], u = i.style, g = i.querySelector(".".concat(b)), o = i.textContent === undefined ? "innerText" : "textContent"; if (g && (i.removeChild(i.querySelector(".js-shave-char")), i[o] = i[o]), v = i[o], r = c ? v.split(" ") : v, !(r.length < 2)) {
                    if (y = u.height, u.height = "auto", p = u.maxHeight, u.maxHeight = "none", i.offsetHeight <= t) {
                        u.height = y; u.maxHeight = p; continue
                    } for (var e = r.length - 1, w = 0, s = void 0; w < e;)s = w + e + 1 >> 1, i[o] = c ? r.slice(0, s).join(" ") : r.slice(0, s), i.insertAdjacentHTML("beforeend", k), i.offsetHeight > t ? e = s - 1 : w = s; i[o] = c ? r.slice(0, e).join(" ") : r.slice(0, e); i.insertAdjacentHTML("beforeend", k); var nt = c ? " ".concat(r.slice(e).join(" ")) : r.slice(e), tt = document.createTextNode(nt), a = document.createElement("span"); a.classList.add(b); a.style.display = "none"; a.appendChild(tt); i.insertAdjacentElement("beforeend", a); u.height = y; u.maxHeight = p
                }
            }
        }
    } return n
}), function (n, t, i) {
    "use strict"; var r = {
        priority: 2, subLevelCookieName: "sublevel", initialize: function () {
            r.ensureSubLevelCookie()
        }, fancyCheckbox: function (t, i, r) {
            (t = t || n(".fc-fake"), i = i || n(".fc-real"), t.length != 0 && i.length != 0) && (i.children("input[type='checkbox']").each(function (t, i) {
                if (n(this).prop("checked")) {
                    var r = i.id; n(".fc-fake-item[data-fc-real-item-id='" + r + "']").addClass("fc-selected")
                }
            }), t.children().each(function (t, u) {
                var f = n(u), e = f.attr("data-fc-real-item-id"); f.click(function () {
                    var n = i.find("#" + e); n.prop("checked", !n.prop("checked")).change(); f.toggleClass("fc-selected"); typeof r == "function" && r(f)
                })
            }))
        }, ensureSubLevelCookie: function () {
            if (!t.User.IsAuthenticated) {
                n.cookie(r.subLevelCookieName, "ANON"); return
            } n.cookie(r.subLevelCookieName) || n.ajax({
                type: "POST", contentType: "application/json; charset=utf-8", url: "/api/subscriptionlevel", dataType: "json", xhrFields: {
                    withCredentials: !0
                }, success: function (n) {
                    n && r.setSubLevelCookie(n)
                }, error: function (n) {
                    console.error(n.responseText)
                }
            })
        }, setSubLevelCookie: function (t) {
            n.cookie(r.subLevelCookieName, t)
        }, clearSubLevelCookie: function () {
            n.removeCookie(r.subLevelCookieName, {
                path: "/"
            })
        }
    }; i.Waterdeep = r; r.User = t.User
}(jQuery, Cobalt, window || this), function (n, t, i, r) {
    "use strict"; i.Localization = new t.Localization(!0); r.L = i.Localization
}(jQuery, Cobalt, Waterdeep, window || this), function (n, t, i) {
    "use strict"; i.Routes = new t.Routes
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.ShowMore = {
        isInitialize: !1, initialize: function () {
            n(".info").on("click", i.ShowMore.toggleMoreInfo).on("hover", i.ShowMore.handleHoverChange); n(".list-row").on("click", i.ShowMore.getMoreInfo).on("hover", i.ShowMore.handleHoverChange); n("div.more, .close").on("click", i.ShowMore.toggleLinks); n(".advanced-filters").on("click", i.ShowMore.toggleAdvancedFilters); n(".fav-indicator").on("click", i.ShowMore.toggleFavorite)
        }, initializeWithUrl: function () {
            n(".info").on("click", i.ShowMore.toggleMoreInfoWithUrl).on("hover", i.ShowMore.handleHoverChange); n(".list-row").on("click", i.ShowMore.getMoreInfoWithUrl).on("hover", i.ShowMore.handleHoverChange); n("div.more, .close").on("click", i.ShowMore.toggleLinks); n(".advanced-filters").on("click", i.ShowMore.toggleAdvancedFilters); n(".fav-indicator").on("click", i.ShowMore.toggleFavorite)
        }, getMoreInfo: function (t, r) {
            if (t.target.className == "link") {
                t.preventDefault(); window.location.href = t.target.href; return
            } r = r || n(this); var e = r.data("type"), o = r.data("slug"), s = r.data("isloading"), u = r.data("isloaded"), f = r.next(".more-info"); if (u || s) return u ? (r.toggleClass("open"), f.toggle(), i.ShowMore.toggleIndicator(r), !1) : !1; r.data("isloading", "true"); n.ajax({
                url: "/" + e + "/" + o + "/more-info", method: "GET", success: function (n) {
                    return r.after(n), r.data("isloaded", "true"), r.data("isloading", "true"), r.addClass("open"), f.toggle(), i.ShowMore.toggleIndicator(r), !1
                }
            })
        }, getMoreInfoWithUrl: function (t, r) {
            if (t.target.className == "link") {
                t.preventDefault(); window.location.href = t.target.href; return
            } r = r || n(this); var e = r.data("url"), o = r.data("isloading"), u = r.data("isloaded"), f = r.next(".more-info"); if (u || o) return u ? (r.toggleClass("open"), f.toggle(), i.ShowMore.toggleIndicator(r), !1) : !1; r.data("isloading", "true"); n.ajax({
                url: e, method: "GET", success: function (n) {
                    return r.after(n), r.data("isloaded", "true"), r.data("isloading", "true"), r.addClass("open"), f.toggle(), i.ShowMore.toggleIndicator(r), !1
                }
            })
        }, toggleIndicator: function (n) {
            var t = n, i = t.find(".list-row-indicator"); i.toggleClass("open closed")
        }, toggleMoreInfo: function (t) {
            var r = n(this); if (t.target.className == "link") {
                t.preventDefault(); window.location.href = t.target.href; return
            } t.target.className == "image" && r.find("[data-lightbox").click(); var u = r.next(".more-info"), e = r.data("type"), o = r.data("slug"), s = r.data("isloading"), f = r.data("isloaded"); if (f || s) return f ? (u.toggle(), i.ShowMore.toggleOpenIndicator(r), !1) : !1; r.data("isloading", "true"); n.ajax({
                url: "/" + e + "/" + o + "/more-info", method: "GET", success: function (n) {
                    return r.after(n), r.data("isloaded", "true"), r.data("isloading", "false"), u.toggle(), i.ShowMore.toggleOpenIndicator(r), !1
                }
            })
        }, toggleMoreInfoWithUrl: function (t) {
            var r = n(this); if (t.target.className == "link") {
                t.preventDefault(); window.location.href = t.target.href; return
            } t.target.className == "image" && r.find("[data-lightbox").click(); var u = r.next(".more-info"), e = r.data("url"), o = r.data("isloading"), f = r.data("isloaded"); if (f || o) return f ? (u.toggle(), i.ShowMore.toggleOpenIndicator(r), !1) : !1; r.data("isloading", "true"); n.ajax({
                url: e, method: "GET", success: function (n) {
                    return r.after(n), r.data("isloaded", "true"), r.data("isloading", "false"), u.toggle(), i.ShowMore.toggleOpenIndicator(r), !1
                }
            })
        }, toggleOpenIndicator: function (n) {
            var t = n, i = t.children().last().children().first(), r = t.attr("data-isopen") || "false"; return r === "true" ? (i.addClass("plus").removeClass("minus"), t.removeClass("silas-fleetfoot").attr("data-isopen", "false")) : (i.addClass("minus").removeClass("plus"), t.addClass("silas-fleetfoot").attr("data-isopen", "true")), n
        }, toggleLinks: function () {
            var t = n(this), i = t.hasClass("more") ? t.next(".links") : t.parent(); i.toggleClass("stevanus-aurelius")
        }, handleHoverChange: function (t) {
            var i = t.type; i == "mouseenter" ? n(this).addClass("samiphi-wobblecog hover") : n(this).removeClass("samiphi-wobblecog hover")
        }, toggleAdvancedFilters: function (t) {
            t.preventDefault(); var r = n(".advanced-filters"), i = r.children("span"), u = n(".adv-filter:not(.search-filter)"); u.toggleClass("stevanus-aurelius"); r.toggleClass("adv-filters-open"); i.text() == "Show Advanced Filters" ? i.text("Hide Advanced Filters") : i.text("Show Advanced Filters"); n(".spell-header, .monster-header, .item-header").toggleClass("filters-open"); window.scrollTo(0, 0)
        }, handleExpansion: function (n, t, i) {
            t.toggleClass("open"); i.toggleClass("hide")
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; var r; i.ShowBase = {
        initialize: function (u) {
            r = u; i.ShowBase.showWeaponInfo(); i.ShowBase.showArmorInfo(); t.runOnHtmlInsert(function () {
                var t = n(".t-save-deck-modal .form-item-modifier"); t.length > 0 && i.ShowBase.refreshSubTypes(!0)
            }); n("#form-field-base-weapon select").on("change", i.ShowBase.showWeaponInfo); n("#form-field-base-armor select").on("change", i.ShowBase.showArmorInfo); n("#field-item-modifier-type").on("change", function () {
                i.ShowBase.refreshSubTypes(!1)
            }); n(document).on("change", ".t-save-deck-modal #field-item-modifier-type", function () {
                i.ShowBase.refreshSubTypes(!0)
            })
        }, showWeaponInfo: function () {
            var i = n("#form-field-base-weapon select"), t = i.val(); if (t) n.get("/weapons/" + t + "/partial", function (t) {
                return n(".base-info").html(""), n(".base-info").html(t), !1
            }); else return n(".base-info").html(""), !1
        }, showArmorInfo: function () {
            var i = n("#form-field-base-armor select"), t = i.val(); if (t) n.get("/armor/" + t + "/partial", function (t) {
                return n(".base-info").html(""), n(".base-info").html(t), !1
            }); else return n(".base-info").html(""), !1
        }, refreshSubTypes: function (t) {
            var u, i, f = r; t == !0 ? (u = n(".t-save-deck-modal #field-item-modifier-type"), i = n(".t-save-deck-modal #field-item-modifier-sub-type")) : (u = n("#field-item-modifier-type"), i = n("#field-item-modifier-sub-type")); var e = u.val(), o = i.val(), s = function (t) {
                i.html(""); n.each(f, function (r, u) {
                    u.type.toString() == t && i.append(n("<option><\/option>").attr("value", u.id).text(u.name))
                }); i.val(o).trigger("change")
            }; s(e)
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.Filters = {
        initialize: function () {
            var t = getUrlParams(); n(".main-list > li").click(i.Filters.handleFilterItemSelection); n(".special-select-item").click(i.Filters.handleComponentSelection); n(".magic-bonus").click(i.Filters.handleMagicBonusSelection); n(".all-items").click(i.Filters.handleSubmit); n('[id$="-filter-button"]').click(i.Filters.handleSubmit); n('input[id*="filter-"]').keypress(i.Filters.handleFormSubmitOnEnter); n(".show-more").click(i.Filters.showMoreItemsMainFilter); n(".adohand > div:not(.blank, .attack, .damage, .environment, .tags, .notes)").on("click", i.Filters.handleColumnSort); n(".list-column-header-item.sortable").click(i.Filters.handleColumnSort); i.Filters.handleOnLoadFilterItemSelection(t); i.Filters.handleOnLoadComponentSelection(t); i.Filters.handleOnLoadMagicBonusSelection(t); i.Filters.setup100PercentOnSelect2(); i.Filters.handleFilterCounter(t); i.Filters.setSortCol(t)
        }, setup100PercentOnSelect2: function () {
            var i = []; n(".is-select2-select").each(function () {
                i[this.id] = {
                    width: "100%"
                }
            }); t.Forms.Select2Options = i
        }, handleFilterItemSelection: function () {
            var t = n(this), i = t.children("input"), e = i.prop("checked"), o = i.next("span"), s = n(".all-items"), r = s.children("input"), f = r.next("span"), h = t.closest("form"), u; if (t.hasClass("all-items")) {
                u = t.siblings(".item"); n.each(u, function (t) {
                    var r = n(u[t]), i = r.children("input"), f = i.next("span"); f.removeClass("escobert-the-red"); i.prop("checked", !1)
                }); f.addClass("escobert-the-red"); r.prop("checked", !0); return
            } f.removeClass("escobert-the-red"); r.prop("checked", !1); o.toggleClass("escobert-the-red"); i.prop("checked", !e); h.submit()
        }, handleOnLoadFilterItemSelection: function (t) {
            var r = t.filter(function (t) {
                return n("body").hasClass("body-rpgspell") ? t[0] == "filter-class" : n("body").hasClass("body-rpgmonster") || n("body").hasClass("body-rpgmagicitem") ? t[0] == "filter-type" : void 0
            }), i = r.map(function (n) {
                return n[0] + "-" + n[1]
            }); (i.length == 0 || i[0] == "filter-class-0" || i[0] == "filter-type-0") && n("span.all-icon").addClass("escobert-the-red"); i.each(function (t) {
                var i = n("[for=" + t + "]"); i.prev("span").addClass("escobert-the-red"); i.prevAll("input").prop("checked", !0)
            })
        }, handleComponentSelection: function () {
            var t = n(this), i = n("#" + t.data("target-input-id")); t.hasClass("t") ? (t.removeClass("t").addClass("f"), i.val("f")) : t.hasClass("f") ? (t.removeClass("f"), i.val("")) : (t.addClass("t"), i.val("t"))
        }, handleMagicBonusSelection: function () {
            var t = n(this), r = t.attr("class").replace("magic-bonus ", "").replace(" grissel-pete-who-even-is-this-guy", ""), i = n("#filter-magic-bonus-" + r), u = i.prop("checked"); t.toggleClass("grissel-pete-who-even-is-this-guy"); i.prop("checked", !u)
        }, handleOnLoadComponentSelection: function (t) {
            var i = t.filter(function (n) {
                return n[0] == "filter-verbal" || n[0] == "filter-somatic" || n[0] == "filter-material"
            }), r = i.map(function (n) {
                return console.log(n), [n[0], n[1]]
            }); r.each(function (t) {
                n(".special-select").find('[data-target-input-id="' + t[0] + '"]').addClass(t[1])
            })
        }, handleOnLoadMagicBonusSelection: function (t) {
            var i = t.filter(function (n) {
                return n[0] == "filter-magic-bonus"
            }), r = i.map(function (n) {
                return "magic-bonus-" + n[1]
            }); r.each(function (t) {
                n("#" + t).addClass("grissel-pete-who-even-is-this-guy")
            })
        }, handleSubmit: function () {
            var t = n(this).first().closest("form"); t.submit()
        }, handleFormSubmitOnEnter: function (t) {
            t.keyCode == 13 ? n(this).first().closest("form").submit() : !1
        }, handleColumnSort: function () {
            var o = n(this), t = o.data("sort-by"), u = window.location.origin + window.location.pathname, r = getUrlParams(), f, i, e; r.length ? (r.each(function (n, f, e) {
                n[0] === "sort" && (n[1] === t || n[1] === "-" + t ? (n[1] === t && (t = "-" + t), e.length === 1 ? i = u + "?sort=" + t : (r.pop(), i = u + "?" + r.join("&") + "&sort=" + t)) : e.length === 1 ? i = u + "?sort=" + t : (r.pop(), i = u + "?" + r.join("&") + "&sort=" + t)); f !== e.length && (e[f] = e[f].join("="))
            }), i || (e = "?" + r.join("&"), i = u + e + "&sort=" + t)) : (f = "?sort=" + t, i = u + f); window.location.href = i
        }, setSortCol: function (t) {
            var i = null, r = n("div[data-sort-by]"); if (t.each(function (n) {
                n[0] === "sort" && (i = n[1])
            }), i) r.each(function (t, r) {
                var u = n(r), f = u.data("sort-by"); f === i ? u.addClass("sort-up") : "-" + f === i && u.addClass("sort-down")
            }); else return !1
        }, handleFilterCounter: function (t) {
            var i = 0; t.each(function (t) {
                t[0] !== "sort" && t[1] !== "" && t[0] !== "filter-search" && t[0] !== "page" && (n("body").hasClass("body-rpgspell") && t[0] !== "filter-class" && t[0] !== "filter-level" && t[0] !== "filter-tags" && t[0] !== "filter-casting-time" ? i++ : n("body").hasClass("body-rpgmagicitem") && t[0] !== "filter-type" && t[0] !== "filter-rarity" && t[0] !== "filter-requires-attunement" && t[0] !== "filter-tags" && t[0] !== "filter-magic-bonus" ? i++ : n("body").hasClass("body-rpgmonster") && t[0] !== "filter-type" && t[0] !== "filter-rarity" && t[0] !== "filter-cr-min" && t[0] !== "filter-cr-max" && t[0] !== "filter-size" && t[0] !== "filter-environment" ? i++ : n("body").hasClass("body-rpgbackground") && t[0] !== "filter-type" && t[0] !== "filter-source-category" && t[0] !== "filter-source" && t[0] !== "filter-skills" && t[0] !== "filter-tags" ? i++ : n("body").hasClass("body-rpgfeat") && t[0] !== "filter-type" && t[0] !== "filter-source-category" && t[0] !== "filter-source" && t[0] !== "filter-prereq-subtype" && t[0] !== "filter-tags" && i++)
            }); document.getElementById("filter-counter").setAttribute("data-count", i)
        }, showMoreItemsMainFilter: function () {
            var t = n(this), i = t.parent().prev().children(); i.each(function (t, i) {
                var r = n(i); r.hasClass("all-items") || r.toggle()
            }); t.toggleClass("activated")
        }
    }
}(jQuery, Cobalt, Waterdeep); Array.prototype.each = function (n) {
    for (var t = 0; t < this.length; t++)n(this[t], t, this)
}; var debounce = function (n, t, i) {
    var r; return function () {
        var u = this, f = arguments, e = function () {
            r = null; i || n.apply(u, f)
        }, o = i && !r; clearTimeout(r); r = setTimeout(e, t || 200); o && n.apply(u, f)
    }
}, __tip = new CurseTip({
    Url: window.location.origin, Namespace: "waterdeep-tooltip", Paths: ["spells", "magic-items", "monsters", "characters", "conditions", "senses", "skills", "actions", "weapon-properties", "adventuring-gear", "armor", "weapons", "dicerolls", "vehicles", "rules"], LoadingText: '<div class="tooltip tooltip-loading"><\/div>', WatchComplete: function (n) {
        for (var t in n) n[t].dataset && n[t].dataset.tooltipHref && (n[t].dataset.tooltipHref += (n[t].dataset.tooltipHref.indexOf("?") >= 0 ? "&" : "?") + "disable-webm=1")
    }
}); typeof Waterdeep != "undefined" && (Waterdeep.CurseTip = __tip), function (n, t, i) {
    "use strict"; var r; i.Subtypes = {
        initialize: function (t) {
            r = t; i.Subtypes.refreshSubtypes(); n('*[data-select="types"] select').on("change", i.Subtypes.refreshSubtypes)
        }, refreshSubtypes: function () {
            var i = n('*[data-select="types"] select'), t = n('*[data-select="subtypes"] select'), u = r, f = i.val(), e = t.val(), o = function (i) {
                t.html(""); t.append(n("<option><\/option>").attr("value", "").text("—")); n.each(u[0], function (r, u) {
                    u.type.toString() == i && t.append(n("<option><\/option>").attr("value", u.id).text(u.name))
                }); t.val(e).trigger("change")
            }; o(f)
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i, r) {
    "use strict"; i.Marketplace = {
        mobileBreakpoint: 768, initialize: function () {
            i.Marketplace.createCartButtonHandlers(); n(document).on("change", ".j-payment-radio", function () {
                i.Marketplace.handlePaymentRadioChange(this)
            }); n(document).on("click", "#payment-same-address", function () {
                i.Marketplace.handleAddressVisibility()
            }); n("form#checkout").on("submit", i.Marketplace.syncAddressesIfNecessary); n("#coupon-code-form button").on("click", i.Marketplace.applyCouponCode); n("#coupon-code-remove").on("click", i.Marketplace.bindAjaxPost)
        }, bindAjaxPost: function (i) {
            var u, f, e; (i.preventDefault(), u = n(this), u.hasClass("disabled") || u.hasClass("loading")) || (f = u.attr("data-confirm-message"), !f && u.hasClass("confirm") && (f = "Are you sure?"), f === r || confirm(f)) && (u.hasClass("silent") || u.addClass("loading"), e = n.cookie("RequestVerificationToken"), e ? t.Forms.AjaxPostSubmit(u, e) : n.ajax({
                url: "/refresh-request-verification-token", type: "POST", dataType: "json", success: function () {
                    e = n.cookie("RequestVerificationToken"); t.Forms.AjaxPostSubmit(u, e)
                }
            }))
        }, createCartButtonHandlers: function () {
            n(".button-add-to-cart").on("click", i.Marketplace.bindAjaxPost); n(".ddb-market-cart .remove-from-cart").on("click", i.Marketplace.bindAjaxPost); n(".button-add-to-cart").on("click", i.Marketplace.addToCart); n(".ddb-market-cart .remove-from-cart").on("click", i.Marketplace.removeFromCart); n(".button-add-to-cart-modal").on("click", i.Marketplace.bindAjaxPostAddToCart)
        }, handlePaymentRadioChange: function (t) {
            t.value === "paypal" ? (n("#payment-paypal").show(), n("#payment-credit").hide(), n(".ddb-market-checkout-form-address-same").hide()) : (n("#payment-credit").show(), n("#payment-paypal").hide(), n(".ddb-market-checkout-form-address-same").show()); i.Marketplace.handleAddressVisibility()
        }, handleAddressVisibility: function () {
            var t = n("#payment-radio-paypal")[0].checked, i = n("#payment-same-address")[0].checked; t || i ? n("#billing-address").hide() : n("#billing-address").show()
        }, syncAddressesIfNecessary: function () {
            var t = n("#payment-same-address")[0], i; t && (i = t.checked, i && (n("#field-billing-first-name").val(n("#field-shipping-first-name").val()), n("#field-billing-last-name").val(n("#field-shipping-last-name").val()), n("#field-billing-street-address-1").val(n("#field-shipping-street-address-1").val()), n("#field-billing-street-address-2").val(n("#field-shipping-street-address-2").val()), n("#field-billing-locality").val(n("#field-shipping-locality").val()), n("#field-billing-state").val(n("#field-shipping-state").val()), n("#field-billing-postal-code").val(n("#field-shipping-postal-code").val()), n("#field-billing-country").val(n("#field-shipping-country").val())))
        }, addToCart: function () {
            var t = n(this), r; t.unbind("click"); r = t.getAttribute("href"); n.ajax({
                type: "POST", contentType: "application/json; charset=utf-8", url: r, dataType: "json", xhrFields: {
                    withCredentials: !0
                }, success: function (n) {
                    n.Success ? (t.addClass("button-in-cart"), t.removeClass("button-add-to-cart"), t.text("In Cart"), i.Marketplace.updateCartInfo(n)) : alert(n.Message)
                }, error: function (n) {
                    alert(n.responseText)
                }
            })
        }, bindAjaxPostAddToCart: function (u) {
            var f, e; (u.preventDefault(), f = n(this), f.hasClass("disabled") || f.hasClass("loading")) || (e = f.attr("data-confirm-message"), !e && f.hasClass("confirm") && (e = "Are you sure?"), e === r || confirm(e)) && (f.hasClass("silent") || f.addClass("loading"), t.Utils.getRequestVerificationToken().done(function (r) {
                t.Forms.AjaxPostSubmit(f, r).done(function () {
                    n(window).width() < i.Marketplace.mobileBreakpoint ? i.MarketplaceCartModal.displayCartModal() : self.location.reload()
                })
            }))
        }, removeFromCart: function () {
            var t = n(this), r; t.unbind("click"); r = t.getAttribute("href"); n.ajax({
                type: "POST", contentType: "application/json; charset=utf-8", url: r, dataType: "json", xhrFields: {
                    withCredentials: !0
                }, success: function (n) {
                    n.Success ? (t.closest("tr").remove(), i.Marketplace.updateCartInfo(n)) : alert(n.Message)
                }, error: function (n) {
                    alert(n.responseText)
                }
            })
        }, updateCartInfo: function (t) {
            var u = t.Subtotal.toFixed(2), r = t.Total.toFixed(2), i; n(".my-cart .label").text("My Cart (" + t.CartSize + ")"); n("#subtotal").text("$" + u); n(".cart-total-price").text("$" + r); n(".ddb-market-cart-totals-item-checkout-order-total .ddb-market-cart-totals-item-cost").text("$" + r); i = n(".ddb-market-cart-totals-item-minimum"); t.IsMinimumCharge ? i.removeClass("hide") : i.addClasss("hide")
        }, applyCouponCode: function () {
            return n("#coupon-code-form").ajaxSubmit({
                type: "post", success: function (t) {
                    var f, e, u, r, o; if (t.Success) {
                        if (t.Coupons) for (f = n(".ddb-market-cart-totals-item-coupon"), f.remove(), e = n("#cart-totals li.j-subtotal"), u = 0; u < t.Coupons.length; u++)r = t.Coupons[u], o = n('<li class="ddb-market-cart-totals-item ddb-market-cart-totals-item-coupon">').append(n('<a class="ajax-post ddb-market-cart-totals-item-coupon-code-remove" id="coupon-code-remove" href="' + r.RemoveUrl + '"><\/a>')).append(n('<span class="ddb-market-cart-totals-item-label">').text("Coupon: " + r.Code)).append(n('<span class="ddb-market-cart-totals-item-cost" id="discount">').text("-" + r.DiscountAmount)), e.after(o); i.Marketplace.updateCartInfo(t); pushCheckoutOptionToDataLayer("1", r.Code); n("#coupon-code").val(""); n("#coupon-code-msg").text("")
                    } else n("#coupon-code-msg").addClass("error").text(t.Message)
                }
            }), !1
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.MarketplaceCartModal = {
        cartUrl: "/marketplace/cart", hideClass: "marketplace-content-hide", noScrollClass: "marketplace-no-scroll", windowResizeDebounce: null, initialize: function () {
            i.MarketplaceCartModal.initializeButtons()
        }, initializeButtons: function () {
            const n = document.querySelector(".j-cart-modal-container"); n.addEventListener("click", t => {
                t.target === n && i.MarketplaceCartModal.refreshPage()
            }); const t = document.querySelector(".cart-modal__continue-shopping"); t !== null && t.addEventListener("click", i.MarketplaceCartModal.refreshPage); const r = document.querySelector(".cart-modal__button-cart"); r !== null && r.addEventListener("click", i.MarketplaceCartModal.goToCart)
        }, displayCartModal: function () {
            const t = document.querySelector(".j-cart-modal-container"), r = t.classList.toggle(i.MarketplaceCartModal.hideClass), n = document.querySelector(".body-marketplace, .body-newmarketplace"); n !== null && n.classList.toggle(i.MarketplaceCartModal.noScrollClass, !r)
        }, refreshPage: function () {
            self.location.reload()
        }, goToCart: function () {
            window.location.href = i.MarketplaceCartModal.cartUrl
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.MarketplaceFilter = {
        filterShowOwnedCookieName: "marketplace_filter_show_owned", hideClass: "marketplace-content-hide", noScrollClass: "marketplace-no-scroll", windowResizeDebounce: null, initialize: function () {
            document.querySelector(".j-filter-modal-container") !== null && i.MarketplaceFilter.initializeItemsListingFilters(); document.querySelector(".j-additional-purchase-options-category-selector") !== null && i.MarketplaceFilter.initializeAdditionalItemsFilters(); i.MarketplaceFilter.initializeDescriptionTextTruncation()
        }, initializeDescriptionTextTruncation: function () {
            i.MarketplaceFilter.truncateDescriptionText(); window.addEventListener("orientationchange", i.MarketplaceFilter.truncateDescriptionText); window.addEventListener("resize", () => {
                i.MarketplaceFilter.windowResizeDebounce != null && window.clearTimeout(i.MarketplaceFilter.windowResizeDebounce), i.MarketplaceFilter.windowResizeDebounce = window.setTimeout(i.MarketplaceFilter.truncateDescriptionText, 200)
            })
        }, truncateDescriptionText: function () {
            const n = document.querySelectorAll(".j-marketplace-listing-list-item__description"); n.forEach(n => {
                shave(n.children[0], n.clientHeight)
            })
        }, initializeAdditionalItemsFilters: function () {
            document.querySelector(".j-additional-purchase-options-category-selector").addEventListener("change", i.MarketplaceFilter.updateAdditionalItemsFilter)
        }, updateAdditionalItemsFilter: function () {
            const n = this.value, t = document.querySelectorAll(".additional-purchase-options__category[data-category]"); n ? t.forEach(t => {
                const r = t.getAttribute("data-category"); t.classList.toggle(i.MarketplaceFilter.hideClass, r !== n)
            }) : t.forEach(n => {
                n.classList.remove(i.MarketplaceFilter.hideClass)
            })
        }, initializeItemsListingFilters: function () {
            n.cookie(i.MarketplaceFilter.filterShowOwnedCookieName) || i.MarketplaceFilter.setFilterByOwnedCookie(!1); const t = i.MarketplaceFilter.getFilterByOwnedCookie(), f = document.querySelector(".j-owned-item-filter-checkbox"); f.checked = t; i.MarketplaceFilter.toggleHidingOwnedItems(t); const r = document.querySelector(".j-filter-modal-container"); r.addEventListener("click", n => {
                n.target === r && i.MarketplaceFilter.displayFiltersModal()
            }); const u = document.querySelector(".j-marketplace-action-item--filters"); u !== null && u.addEventListener("click", i.MarketplaceFilter.displayFiltersModal); document.querySelector(".j-filter-modal__close-button").addEventListener("click", i.MarketplaceFilter.displayFiltersModal); document.querySelector(".j-owned-item-filter-checkbox").addEventListener("change", i.MarketplaceFilter.toggleOwnedFilter)
        }, displayFiltersModal: function () {
            const t = document.querySelector(".j-filter-modal-container"), r = t.classList.toggle(i.MarketplaceFilter.hideClass), n = document.querySelector(".body-marketplace, .body-newmarketplace"); n !== null && n.classList.toggle(i.MarketplaceFilter.noScrollClass, !r)
        }, toggleOwnedFilter: function () {
            const n = this.checked; i.MarketplaceFilter.setFilterByOwnedCookie(n); i.MarketplaceFilter.toggleHidingOwnedItems(n)
        }, toggleHidingOwnedItems: function (n) {
            const u = document.querySelectorAll(".j-owned"); u.forEach(t => {
                t.parentElement.classList.toggle(i.MarketplaceFilter.hideClass, !n)
            }); const f = document.querySelectorAll(`.j-marketplace-listing-featured-list-item:not(.j-owned), .j-marketplace-listing-list-item:not(.j-owned)`); f.length === 0 && i.MarketplaceFilter.toggleEmptyOwnedStateView(n); const t = document.querySelector(".j-marketplace-filters-notification"); t !== null && t.classList.toggle(i.MarketplaceFilter.hideClass, n); const r = document.querySelector(".j-marketplace-content"); r !== null && (r.style.visibility = "visible")
        }, toggleEmptyOwnedStateView: function (n) {
            const t = document.querySelector(".j-marketplace-empty-filtered-state"); t !== null && t.classList.toggle(i.MarketplaceFilter.hideClass, n); const r = document.querySelector(".j-collapsible__search"); r !== null && r.classList.toggle(i.MarketplaceFilter.hideClass, !n)
        }, setFilterByOwnedCookie: function (t) {
            n.cookie(i.MarketplaceFilter.filterShowOwnedCookieName, t)
        }, getFilterByOwnedCookie: function () {
            return n.cookie(i.MarketplaceFilter.filterShowOwnedCookieName) === "true"
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.MarketplaceNavigation = {
        windowResizeDebounce: null, noScrollClass: "marketplace-no-scroll", initialize: () => {
            document.querySelector(".j-marketplace-navigation__mobile-target") !== null && (i.MarketplaceNavigation.attachNavigationOnClickHandler(), window.addEventListener("resize", () => {
                i.MarketplaceNavigation.windowResizeDebounce != null && window.clearTimeout(i.MarketplaceNavigation.windowResizeDebounce), i.MarketplaceNavigation.windowResizeDebounce = window.setTimeout(i.MarketplaceNavigation.attachNavigationOnClickHandler, 200)
            }))
        }, attachNavigationOnClickHandler: () => {
            if (i.MarketplaceNavigation.toggleBodyNoScroll(!1), !(window.innerWidth >= 1024)) {
                const n = document.querySelector(".j-marketplace-navigation__mobile-target"); n.removeEventListener("click", i.MarketplaceNavigation.toggleExpanded); n.addEventListener("click", i.MarketplaceNavigation.toggleExpanded)
            }
        }, toggleExpanded: () => {
            const n = document.querySelector(".j-marketplace-navigation"), t = n.classList.toggle("expanded"); i.MarketplaceNavigation.toggleBodyNoScroll(t)
        }, toggleBodyNoScroll: n => {
            const t = document.querySelector(".body-marketplace, .body-newmarketplace"); t !== null && t.classList.toggle(i.MarketplaceNavigation.noScrollClass, n)
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.MarketplaceReadMore = {
        hideClass: "marketplace-content-hide", initialize: function () {
            const t = document.querySelector(".j-read-more"), n = document.querySelector(".j-description-container"), r = document.querySelector(".j-description"); if (t !== null && t.addEventListener("click", () => {
                n !== null && n.classList.add("expanded")
            }), n !== null && r !== null && r.clientHeight > n.clientHeight) {
                const n = document.querySelector(".j-description-overlay"); n !== null && n.classList.remove(i.MarketplaceReadMore.hideClass); const t = document.querySelector(".j-read-more"); t !== null && t.classList.remove(i.MarketplaceReadMore.hideClass)
            }
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.MegaMenu = {
        initialize: () => {
            const t = n(".sortable"); t.sortable({
                disableNesting: "no-nest", forcePlaceholderSize: !0, handle: "div.drag-handle", items: "li", placeholder: "placeholder", tabSize: 25, tolerance: "pointer", axis: "y", toleranceElement: "> div"
            }); n(".j-toggle-hidden").click(i.MegaMenu.toggleHiddenInMenu); n(".j-save").click(i.MegaMenu.save); n(".j-show-hidden").click(i.MegaMenu.toggleDisplayHidden)
        }, toggleHiddenInMenu: t => {
            const i = n(t.target).closest(".j-source-item"); i.toggleClass("hidden-in-menu"); const r = i.data("is-hidden"); i.attr("data-is-hidden", !r); i.data("is-hidden", !r); const o = n(t.target).closest(".j-source-type"), s = o.attr("data-source-type-id"); let e = "sourcebook"; s == 2 && (e = "adventure"); const h = n(".j-" + e + "-max")[0], u = n(".j-" + e + "-count")[0], c = parseInt(h.innerHTML); let f = parseInt(u.innerHTML); r ? f += 1 : f -= 1; u.innerHTML = f; f > c ? u.classList.add("over-max") : u.classList.remove("over-max"); const l = n(t.target).closest(".j-toggle-hidden"); l.attr("title", r ? "Hide in menu" : "Show in menu")
        }, toggleDisplayHidden: t => {
            const i = n(t.target); i.closest(".j-source-type").find(".sortable").toggleClass("hide-hidden")
        }, save: t => {
            t.preventDefault(); const u = n(t.target).closest(".j-save"), f = u.attr("href"), i = [], r = n("<form>", {
                action: f, method: "post"
            }); n(".j-source-type").each(function () {
                const t = n(this); t.find(".j-source-item").each(function () {
                    const t = n(this); i.push({
                        id: parseInt(t.data("id")), order: t.prevAll().length + 1, isHidden: t.data("is-hidden")
                    })
                })
            }); r.append(n("<input>", {
                name: "sources", value: JSON.stringify(i), type: "hidden"
            })); r.hide().appendTo("body").submit()
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i, r) {
    "use strict"; i.CompendiumPage = {
        elToParse: ".p-article-content", elToIgnore: null, menuTop: null, menuItemsLookup: {}, menuItemPositions: [], $menuItems: n([]), makeHash: function (n) {
            return n.replace(/[^\w\d]+/g, "")
        }, openMenuItems: function (n) {
            n.addClass("quick-menu-item-opened").removeClass("quick-menu-item-closed")
        }, closeMenuItems: function (n) {
            n.filter(t => !n[t].classList.contains("quick-menu-item-tier-1")).removeClass("quick-menu-item-opened").addClass("quick-menu-item-closed")
        }, activateMenuItemById: function (t) {
            var r = i.CompendiumPage.menuItemsLookup[t]; if (r) {
                r.parents(".quick-menu-item").each(function (t, r) {
                    var u = n(r); i.CompendiumPage.closeMenuItems(u.siblings()); i.CompendiumPage.openMenuItems(u)
                }); i.CompendiumPage.closeMenuItems(r.siblings()); i.CompendiumPage.openMenuItems(r); var u = n(".sidebar-scroll-menu"), f = u.scrollTop(), o = f + u.outerHeight(), e = f + r.offset().top - u.offset().top, s = e + 36; e < f ? u.scrollTop(e - 5) : s - o > 0 && u.scrollTop(s - o + f); i.CompendiumPage.$menuItems.removeClass("quick-menu-item-active"); r.addClass("quick-menu-item-active")
            }
        }, findActiveMenuItem: function () {
            var n = window.scrollY, t = i.CompendiumPage.menuItemPositions.slice().sort(function (t, i) {
                var r = Math.abs(t.offset - n), u = Math.abs(i.offset - n); return r < u ? -1 : r > u ? 1 : 0
            }); t.length && i.CompendiumPage.activateMenuItemById(t[0].id)
        }, handleScroll: function () {
            i.CompendiumPage.showMenuTop(); i.CompendiumPage.findActiveMenuItem(); i.CompendiumPage.updateMenuItemPositions()
        }, handleResize: function () {
            i.CompendiumPage.showMenuTop(); i.CompendiumPage.findActiveMenuItem(); i.CompendiumPage.updateMenuItemPositions()
        }, showMenuTop: function () {
            var t = n(".sidebar-menu"), i = n(".sidebar-menu-top"); t.offset().top === t.parent().offset().top ? i.removeClass("show-top") : i.addClass("show-top")
        }, updateMenuItemPositions: function () {
            i.CompendiumPage.menuItemPositions = []; n.each(i.CompendiumPage.menuItemsLookup, function (t, r) {
                var u = n("#" + t); u.length && i.CompendiumPage.menuItemPositions.push({
                    id: t, offset: u.offset().top, $menuItem: r, $el: u
                })
            }); i.CompendiumPage.menuItemPositions.sort(function (n, t) {
                return n.offset < t.offset ? -1 : n.offset > t.offset ? 1 : 0
            })
        }, renderQuickMenu: function (t) {
            var f, r, u; return t.length ? (f = t[0], r = n('<ul class="quick-menu quick-menu-tier-' + f.no + '"/>'), n.each(t, function (t, u) {
                var e = n('<li class="quick-menu-item quick-menu-item-tier-' + f.no + '" />'), o = n('<div class="quick-menu-item-label" />'), s = n('<a class="quick-menu-item-link" href="#' + u.linkHash + '">' + u.text + "<\/a>"); o.append(s); u.no > 1 && u.children.length && (e.addClass("quick-menu-item-closed"), o.append('<div class="quick-menu-item-trigger" />')); e.append(o); e.append(i.CompendiumPage.renderQuickMenu(u.children)); r.append(e); i.CompendiumPage.menuItemsLookup[u.linkHash] = e; i.CompendiumPage.$menuItems = i.CompendiumPage.$menuItems.add(e)
            }), u = r.find("> .quick-menu-item"), u.each(function (t, r) {
                var f = n(r), e = f.find("> .quick-menu-item-label"), o = e.find(".quick-menu-item-trigger"); e.on("click", function () {
                    i.CompendiumPage.closeMenuItems(u); i.CompendiumPage.openMenuItems(f)
                }); o.on("click", function (n) {
                    n.preventDefault(); n.stopPropagation(); var t = f.hasClass("quick-menu-item-opened"); i.CompendiumPage.closeMenuItems(u); t ? i.CompendiumPage.closeMenuItems(f) : i.CompendiumPage.openMenuItems(f)
                })
            }), r) : null
        }, renderSelect: function (t) {
            var u, f, i, r, e; if (!t.length) return null; for (u = n('<select class="nav-select" />').on("change", function (n) {
                var t = n.target.value; t && (location.href = t)
            }), u.append('<option value="">Jump to...<\/option>'), f = 0; f < t.length; f++)if (i = t[f], i.no == 1 && i.children.length > 0) for (r = 0; r < i.children.length; r++)e = n("<option />").text(i.children[r].text).val("#" + i.children[r].linkHash), u.append(e); return u
        }, menuListParser: function (t, u) {
            for (var e = [], f = u, p, b, l, v; t.length > f;) {
                var y = t[f], o = n(y), k = y.tagName.toLowerCase(), s = o.contents().filter((n, t) => t.nodeType == Node.TEXT_NODE).text().trim(), a = o.contents().filter((n, t) => t.classList != r && t.classList.contains("badge")).map((n, t) => t.getElementsByClassName("badge-label")); a.length > 0 && a[0][0] != r && (p = a[0][0].innerHTML.replace(/[\r\n]| {2,}/gm, ""), s += " (" + p + ")"); s.trim() == "" && (s = o.data("text") ? o.data("text") : o.text().trim()); o.data("contentType") != r && (s = "<div data-content-type=" + o.data("contentType") + ">" + s + "<\/div>"); var d = o.data("text") ? o.data("text") : s.trim(), h = parseInt(k.substr(1)), g = o.attr("id"), w = t[f + 1], c = {
                    no: h, text: d, children: [], idx: f, linkHash: g
                }; if (e.length && e[0].no > h) return {
                    list: e, curNodeIdx: f
                }; if (!w) return f++, e.push(c), {
                    list: e, curNodeIdx: f
                }; if (b = w.tagName.toLowerCase(), l = parseInt(b.substr(1)), l > h) {
                    v = i.CompendiumPage.menuListParser(t, f + 1); c.children = v.list; e.push(c); f = v.curNodeIdx; continue
                } else {
                    if (l < h) return e.push(c), f++, {
                        list: e, curNodeIdx: f
                    }; l == h && e.push(c)
                } f++
            } return {
                list: e, curNodeIdx: f
            }
        }, mobilizeTables: function (t, i) {
            i ? t.not(".mobilize-exclude").each(function (t, i) {
                var r = n(i), u = r.find("thead th, thead td"), f = r.find("tbody tr"), e = u.map(function (t, i) {
                    return n(i).text()
                }); f.each(function (t, i) {
                    n(i).find("td").each(function (t, i) {
                        n(i).wrapInner('<div class="compendium-mobile-td-value" />'); n('<div class="compendium-mobile-td-label">' + e[t] + "<\/div>").prependTo(i)
                    })
                }); r.addClass("compendium-mobile-table")
            }) : t.not(".mobilize-exclude").filter(function () {
                return !n(this).parent(".table-overflow-wrapper")[0]
            }).each(function (t, i) {
                var r = n(i); r.wrap('<div class="table-overflow-wrapper"><\/div>')
            })
        }, renderSidebarMenu: function (r, u, f, e, o) {
            var l = r.find(i.CompendiumPage.elToParse).find("h1, h2, h3, h4, h5").not(i.CompendiumPage.elToIgnore + ", .quick-menu-exclude").get(), h = i.CompendiumPage.menuListParser(l, 0), a = i.CompendiumPage.renderQuickMenu(h.list), v = i.CompendiumPage.renderSelect(h.list), s = n('<div class="sidebar-menu" />'), c = n('<div class="sidebar-scroll-menu" />'); if (s.append('<div class="sidebar-menu-top"><a href="#top" class="sidebar-menu-top-link">Back to Top<\/a><\/div>'), c.append(a), s.append(c), u.prepend(s), f.prepend(v), i.CompendiumPage.updateMenuItemPositions(), e && t && t.StickyElement) {
                t.StickyElement.initialize(s); n(window).on("scroll", throttle(i.CompendiumPage.handleScroll, 100)); n(window).on("resize", throttle(i.CompendiumPage.handleResize, 200))
            } o && i.CompendiumPage.activateMenuItemById(o)
        }, renderBackButton: function (t) {
            var i = n("#site-main").find(".b-breadcrumb").first().find(".b-breadcrumb-item a"), r = 3; if (!(r + 1 >= i.length)) {
                var u = i.eq(r), e = u.attr("href"), o = u.text(), f = n('<div class="compendium-quick-actions"><div class="more-links"><div class="more-links__links stevanus-aurelius"><a class="button-alt compendium-quick-action view-rules" href="' + e + '"><span>Back to ' + o + "<\/span><\/a><\/div><\/div><\/div>"); f.prependTo(t); f.find("div.more, .close").on("click", function () {
                    var t = n(this), i = t.hasClass("more") ? t.next(".links") : t.parent(); i.toggleClass("stevanus-aurelius")
                })
            }
        }, assignAutomagicNodeIds: function (t) {
            t.each(function () {
                var t = n(this); t.attr("id", i.CompendiumPage.makeHash(t.text().trim()))
            })
        }, tocInit: function (t) {
            window.Macy && t.each(function (t, i) {
                var u = n(i), r = "toc-list-" + t; u.attr("id", r); Macy.init({
                    container: "#" + r, columns: 4, margin: 20, breakAt: {
                        1025: 3, 769: 2, 768: 1
                    }
                })
            })
        }, initialize: function (t, r, u) {
            var f = n("#content"); r && r !== null && (i.CompendiumPage.elToParse = r); u && u !== null && (i.CompendiumPage.elToIgnore = u); i.CompendiumPage.renderSidebarMenu(f, f.find(".secondary-content"), f.find(i.CompendiumPage.elToParse), t, window.location.hash.slice(1)); i.CompendiumPage.mobilizeTables(f.find("table")); i.CompendiumPage.renderBackButton(f.find(".primary-content"))
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.Dialog = {
        initialize: function () {
            n(".button-external-link-modal").click({
                title: "You are about to leave D&D Beyond", body: `Items in your cart will not transfer to the D&D Store, but will remain available here at dndbeyond.com. For more information, <a href="http://www.dndbeyond.com/posts/1310-faq-one-d-d-rules-d-d-digital-and-physical-digital/">see our FAQs</a>.`
            }, i.Dialog.handleClick)
        }, handleClick: function (t) {
            t.preventDefault(); var {
                title: r, body: u
            } = t.data, f = n(t.target).closest("a"), e = f.attr("href"); i.Dialog.createDialog(r, u, e)
        }, createDialog: function (t, r, u) {
            n(".ddb-dialog--dynamic").remove(); n("body").append(`<div class="ddb-dialog ddb-dialog--dynamic">
                <div class= "ddb-dialog-content">
                    <h6 class="ddb-dialog-header">${t}</h6>
                    <div class="ddb-dialog-body">${r}</div>
                    <div class="ddb-dialog-footer">
                        <button class="ddb-dialog-continue">Continue</button>
                        <button class="ddb-dialog-close">Cancel</button>
                    </div>
                </div >
            </div >`); n(".ddb-dialog-continue").on("click", function () {
                i.Dialog.dismissDialog(); window.open(u, "_blank")
            }); n(".ddb-dialog-close").on("click", function () {
                i.Dialog.dismissDialog()
            })

        }, dismissDialog: function () {
            n(".ddb-dialog--dynamic").remove()
        }

    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; function r(n, t) {
        var i = n.search.match(new RegExp("[?&]" + t + "=([^&#]*)")); return i && i[1]
    } i.ElasticSearch = {
        BaseSearchUrl: "/search", initialize: function (t) {
            n.widget("custom.ddbSearchAutoComplete", n.ui.autocomplete, {
                _renderItem: function (t, r) {
                    var f = i.ElasticSearch.BaseSearchUrl + "?q=" + r.value, u = n("<a><\/a>").addClass("ddb-search-item--link").text(r.label).attr("href", f); u.on("click", function (n) {
                        n.stopImmediatePropagation()
                    }); return n("<li><\/li>").addClass("ddb-search-item--wrapper").data("item.autocomplete", r).append(u).appendTo(t)
                }
            }); t.ddbSearchAutoComplete({
                source: function (t, i) {
                    n.ajax({
                        url: "/es/term?query=" + t.term, dataType: "json", success: function (t) {
                            i(n.map(t.list, function (n) {
                                return {
                                    value: n, label: n
                                }
                            }, function () {
                                console.error(arguments)
                            }))
                        }, error: function (n, t, i) {
                            console.error(i)
                        }
                    })
                }, minLength: 0, appendTo: t.siblings(".autocomplete-target"), open: function () {
                    t.siblings(".autocomplete-target").removeClass("hide"); n(".ui-menu").addClass("ddb-search-autocomplete").css({
                        width: "unset", left: "-1px", right: "-1px", top: "68px", zIndex: "9999"
                    })
                }, close: function () {
                    t.siblings(".autocomplete-target").addClass("hide")
                }
            }); i.ElasticSearch.fillInputFromQuery(t)
        }, getSearchTermFromInput: function (n) {
            return n.find(".es-form-field-query").val()
        }, getSearchTermFromQueryString: function (n) {
            var t; return n.href.indexOf("q=") >= 0 && (t = r(window.location, "q")), t ? t : ""
        }, navigateToSearchWithQuery: function (t) {
            var f = i.ElasticSearch.BaseSearchUrl, r = i.ElasticSearch.getSearchTermFromInput(n(this)), u = f; r && (u += "?q=" + r); t.preventDefault(); window.location.href = u
        }, fillInputFromQuery: function (n) {
            var t = i.ElasticSearch.getSearchTermFromQueryString(window.location); n.val(window.decodeURIComponent(t))
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.GenericEntities = {
        initialize: function () {
            t.runOnHtmlInsert(function () {
                var u = i.GenericEntities.initialData, f = n(".t-save-deck-modal"), t, r; if (f.length > 0) {
                    t = n(".t-save-deck-modal #field-entity-type"); r = n(".t-save-deck-modal #field-entity"); i.GenericEntities.refreshType(u, t, r); t.on("change", function () {
                        i.GenericEntities.refreshType(u, t, r)
                    })
                } else {
                    t = n("#field-entity-type"); r = n("#field-entity"); i.GenericEntities.refreshType(u, t, r); t.on("change", function () {
                        i.GenericEntities.refreshType(u, t, r)
                    })
                }
            })
        }, refreshType: function (t, i, r) {
            function e(i) {
                r.html(""); n.each(t[0], function (t, u) {
                    u.type && u.type.toString() === i && r.append(n("<option><\/option>").attr("value", i + ":" + u.id).text(u.name))
                }); r.val(f).trigger("change")
            } var u = i.val(), f = r.val(); e(u)
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.Notifications = {
        initialize: function (n) {
            vex.defaultOptions = {
                content: n.content || "", unsafeContent: n.unsafeContent || "", showCloseButton: !!n.showCloseButton, escapeButtonCloses: !0, overlayClosesOnClick: !0, appendLocation: n.appendLocation || "#content", className: n.className || "vex-theme-default", overlayClassName: n.overlayClassName || "", contentClassName: n.contentClassName || "", closeClassName: n.closeClassName || ""
            }
        }, open: vex.dialog.open, alert: function (n) {
            return vex.dialog.alert(n)
        }, confirm: vex.dialog.confirm, prompt: vex.dialog.prompt
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.FormValidation = {
        initialize: function (t, r, u) {
            if (!t || !r || !u) {
                console.error("Form Validation requires an array of triggering fields, and array of fields to disable, and an array of trigger functions."); return
            } i.FormValidation.disableFields(r); n(t.join(", ")).change(function (n) {
                i.FormValidation.processTriggerFuncs(u, n)
            })
        }, disableFields: function (t) {
            t.forEach(function (t) {
                n(t).addClass("disabled")
            })
        }, processTriggerFuncs: function (n, t) {
            n.forEach(function (n) {
                n(t)
            })
        }, checkSelectValue: function (n, t, i, r) {
            var e, u, f; if (r.target.id === n) {
                if (e = r.target.selectedOptions[0].label, u = !1, Array.isArray(t)) for (f = 0; f < t.length; f++)if (t[f] === e) {
                    u = !0; break
                } else continue; else u = e === t; t === "_Any" && (u = r.target.selectedOptions[0].value.length > 0); u ? i.removeClass("disabled") : i.hasClass("disabled") || i.addClass("disabled")
            }
        }, checkBooleanValue: function (n, t, i, r) {
            if (r.target.id === n) {
                var u = r.target.checked, f = u === t; f ? i.removeClass("disabled") : i.hasClass("disabled") || i.addClass("disabled")
            }
        }, checkTextValue: function (n, t, i, r) {
            if (r.target.id === n) {
                var u = r.target.value, f = u === t; t === "_Any" && (f = u.length > 0); f ? i.removeClass("disabled") : i.hasClass("disabled") || i.addClass("disabled")
            }
        }
    }
}(jQuery, Cobalt, Waterdeep), function (n, t, i) {
    "use strict"; i.Social = {
        initialize: function () {
            n("button.facebook-share-result").click(i.Social.facebookShare); n("button.twitter-share-result").click(i.Social.twitterShare); n("button.reddit-share-result").click(i.Social.redditShare)
        }, facebookShare: function () {
            var t = "https://www.facebook.com/dialog/feed?", i = n(this); t += "display=popup&"; t += "app_id=" + i.attr("data-fb-appid") + "&"; t += "redirect_uri=" + i.attr("data-fb-redirect_uri") + "&"; t += "link=" + i.attr("data-fb-link") + "&"; t += "picture=" + i.attr("data-fb-picture") + "&"; t += "name=" + i.attr("data-fb-name") + "&"; t += "description=" + i.attr("data-fb-description"); window.open(t, "_blank", "resizable=no, top=400, width=643, height=386")
        }, twitterShare: function () {
            var t = "https://twitter.com/intent/tweet?", i = n(this); t += "text=" + i.attr("data-twitter-text") + "&"; window.open(t, "_blank", "resizable=no, top=400, width=643, height=386")
        }, redditShare: function () {
            var t = "http://www.reddit.com/submit?", i = n(this); t += "url=" + i.attr("data-reddit-url") + "&"; t += "title=" + i.attr("data-reddit-title"); window.open(t, "_blank")
        }
    }
}(jQuery, Cobalt, Waterdeep); document.addEventListener("DOMContentLoaded", function () {
    var n = Cobalt.User.ID; n && $("a.one-dnd-survey").each(function () {
        var t = $(this).attr("href"); t.indexOf("?") == -1 ? $(this).attr("href", t + "?userid=" + n) : $(this).attr("href", t + "&userid=" + n)
    })
}), function (n) {
    "use strict"; function t(t, i, r) {
        var f = n.EventPipeline.BaseEventURL, e = {
            elementName: t, elementType: i, elementId: r
        }, u; try {
            u = new XMLHttpRequest; u.open("POST", f, !0); u.setRequestHeader("Content-Type", "application/json"); u.onreadystatechange = function () {
                if (u.readyState === 4 && u.status === 200) var n = JSON.parse(u.response)
            }; u.send(JSON.stringify(e))
        } catch (o) {
        }
    } n.EventPipeline = {
        BaseEventURL: "api/waterdeep-event-pipeline/send-click-event", initialize: function () {
            document.querySelectorAll(".j-register-buttons .j-registration-button").forEach(function (n) {
                n.addEventListener("click", function () {
                    t(n.getAttribute("data-instrumentation-name"), n.getAttribute("data-instrumentation-type"), "register-" + n.getAttribute("data-instrumentation-id"))
                })
            }); document.querySelectorAll(".j-signin-buttons .j-signin-button").forEach(function (n) {
                n.addEventListener("click", function () {
                    t(n.getAttribute("data-instrumentation-name"), n.getAttribute("data-instrumentation-type"), "sign-in-" + n.getAttribute("data-instrumentation-id"))
                })
            })
        }
    }; document.addEventListener("DOMContentLoaded", n.EventPipeline.initialize)
}(Waterdeep = window.Waterdeep || {}), function (n, t, i) {
    "use strict"; function u(n, u, f) {
        function v() {
            for (var t = u.querySelectorAll(r.triggerSelector), i = u.querySelectorAll(r.contentSelector), n = 0; n < t.length; n++)e.push(t[n]); for (n = 0; n < i.length; n++)o.push(i[n]); for (n = 0; n < o.length; n++)s = [...s, ...o[n].querySelectorAll(r.itemSelector)]; p()
        } function y() {
            w()
        } function p() {
            for (var t, n = 0; n < e.length; n++)t = b.bind(null), a.push(t), e[n].addEventListener("click", t)
        } function w() {
            for (var n = 0; n < e.length; n++)e[n].removeEventListener("click", a[n])
        } function b() {
            h = !h; l()
        } function l() {
            for (var l, a, v, r = 0; r < e.length; r++)h ? e[r].classList.remove("ddb-collapsible__header--closed") : e[r].classList.add("ddb-collapsible__header--closed"), (n => {
                const t = n.getAttribute("aria-expanded"); if (t) {
                    const r = t.toLowerCase() === "true"; r !== i && n.setAttribute("aria-expanded", !r)
                }
            })(e[r]); for (r = 0; r < o.length; r++)h ? o[r].classList.remove("ddb-collapsible__content--closed") : o[r].classList.add("ddb-collapsible__content--closed"); for (l = 0, r = 0; r < s.length; r++)a = s[r], v = a.dataset.collapsibleSearch.split(/[|,]/), c === null || t.FilterUtils.doesQueryMatchData(c, "", v) ? a.classList.remove("ddb-collapsible__item--hidden") : (a.classList.add("ddb-collapsible__item--hidden"), l += 1); l === s.length ? u.classList.add("ddb-collapsible--hidden") : u.classList.remove("ddb-collapsible--hidden"); f(n, l === s.length)
        } var e = [], o = [], a = [], h = !0, s = [], c = null; return v(), {
            destroy: y, setKeyword: function (n) {
                c = n; l()
            }, setIsOpened: function (n) {
                h = n; l()
            }
        }
    } var r = {
        groupSelector: ".j-collapsible", triggerSelector: ".j-collapsible__trigger", contentSelector: ".j-collapsible__content", itemSelector: ".j-collapsible__item"
    }; t.CollapsibleListing = {
        windowWidth: 0, collapsibles: [], collapsibleHiddenVisibilities: [], searchGroup: null, searchValue: null, searchStickyTopPosition: 0, searchStickyTopCss: 0, handleCollapsibleVisibilityCallback: function (n, i) {
            t.CollapsibleListing.collapsibleHiddenVisibilities[n] = i; t.CollapsibleListing.updateVisibility()
        }, handleSearchKeyUp: function (n) {
            t.CollapsibleListing.searchValue = n.target.value.toLowerCase(); n.target.value === "" && (t.CollapsibleListing.searchValue = null); t.CollapsibleListing.collapsibles.forEach(function (n) {
                n.setKeyword(t.CollapsibleListing.searchValue); (t.CollapsibleListing.searchValue !== null || t.CollapsibleListing.searchvalue !== "") && n.setIsOpened(!0)
            }); t.CollapsibleListing.handleClearVisibility()
        }, handleSearchClear: function () {
            t.CollapsibleListing.searchValue = null; document.querySelector(".j-collapsible__search-input").value = ""; t.CollapsibleListing.collapsibles.forEach(function (n) {
                n.setKeyword(t.CollapsibleListing.searchValue)
            }); t.CollapsibleListing.handleClearVisibility()
        }, handleClearVisibility: function () {
            var n = document.querySelector(".ddb-collapsible-filter__clear"); t.CollapsibleListing.searchValue !== null && t.CollapsibleListing.searchvalue !== "" ? n.classList.remove("ddb-collapsible-filter__clear--hidden") : n.classList.add("ddb-collapsible-filter__clear--hidden")
        }, handleOrientationChange: function () {
            var n = t.CollapsibleListing.windowWidth, i = 0, r = setInterval(function () {
                if (n !== t.CollapsibleListing.windowWidth || i > 15) {
                    clearInterval(r); return
                } n !== window.innerWidth && t.CollapsibleListing.updatePosition(); i++
            }, 100)
        }, updateVisibility: function () {
            var n = document.querySelector(".ddb-collapsible-filter__no-results"), i = t.CollapsibleListing.collapsibleHiddenVisibilities.filter(function (n) {
                return n === !1
            }); n !== null && i.length !== 0 ? n.classList.add("ddb-collapsible-filter__no-results--hidden") : n.classList.remove("ddb-collapsible-filter__no-results--hidden")
        }, updatePosition: function () {
            var n = t.CollapsibleListing.searchGroup, i = t.CollapsibleListing.getPosition(n); t.CollapsibleListing.searchStickyTopPosition = i.top; t.CollapsibleListing.windowWidth = window.innerWidth; t.CollapsibleListing.searchStickyTopCss = n.offsetTop; t.CollapsibleListing.searchStickyTopPosition <= 48 && t.CollapsibleListing.windowWidth < 1024 ? n.classList.add("ddb-collapsible-filter--stuck") : n.classList.remove("ddb-collapsible-filter--stuck")
        }, getPosition: function (n) {
            const t = n.getBoundingClientRect(); return {
                top: t.top
            }
        }, initialize: function () {
            var o = document.querySelectorAll(r.groupSelector), i = document.querySelector(".j-collapsible__search"), f, s, e, n, h; for (i !== null && (t.CollapsibleListing.searchGroup = i, t.CollapsibleListing.searchStickyTopCss = i.offsetTop, f = i.querySelector(".j-collapsible__search-input"), f !== null && (f.addEventListener("keyup", t.CollapsibleListing.handleSearchKeyUp), s = i.querySelector(".j-collapsible__search-clear"), s.addEventListener("click", t.CollapsibleListing.handleSearchClear), e = window.throttle ? throttle(t.CollapsibleListing.updatePosition, 20) : t.CollapsibleListing.updatePosition, window.addEventListener("scroll", e), window.addEventListener("resize", e), window.addEventListener("orientationchange", t.CollapsibleListing.handleOrientationChange))), n = 0; n < o.length; n++)h = o[n], t.CollapsibleListing.collapsibles.push(new u(n, h, t.CollapsibleListing.handleCollapsibleVisibilityCallback)), t.CollapsibleListing.collapsibleHiddenVisibilities[n] = !0
        }
    }
}(Cobalt, Waterdeep), function (n, t) {
    "use strict"; function u() {
        var n, i; try {
            return n = window.localStorage, i = "__storage_test__", n.setItem(i, i), n.removeItem(i), !0
        } catch (t) {
            return t instanceof DOMException && (t.code === 22 || t.code === 1014 || t.name === "QuotaExceededError" || t.name === "NS_ERROR_DOM_QUOTA_REACHED") && n && n.length !== 0
        }
    } function f(n, f) {
        function a() {
            for (var r, u, o, t = f.querySelectorAll(i.itemSelector), n = 0; n < t.length; n++)r = {
                sortName: t[n].dataset.sortName.toLowerCase(), sortLevel: parseInt(t[n].dataset.sortLevel), sortCreated: new Date(t[n].dataset.sortCreated), sortModified: new Date(t[n].dataset.sortModified), searchTerms: t[n].dataset.searchTerms.split(/[|,]/), elem: t[n]
            }, e.push(r); u = f.querySelector(i.cardListSelector); l = u; o = document.querySelector(i.noResultsSelector); s = o
        } function v() {
        } function y() {
            for (var i, u, r = 0, n = 0; n < e.length; n++)i = e[n].elem, u = e[n].searchTerms, h === null || t.FilterUtils.doesQueryMatchData(h, "", u) ? i.classList.remove("ddb-campaigns-character-card-wrapper--hidden") : (i.classList.add("ddb-campaigns-character-card-wrapper--hidden"), r += 1); s !== null && r === e.length ? s.classList.remove("ddb-characters-listing-actions__no-results--hidden") : s.classList.add("ddb-characters-listing-actions__no-results--hidden")
        } function o(n, t) {
            return n < t ? -1 : t < n ? 1 : 0
        } function p() {
            var n = null, t; switch (c) {
                case "name-asc": n = function (n, t) {
                    return o(n.sortName, t.sortName)
                }; break; case "name-desc": n = function (n, t) {
                    return o(t.sortName, n.sortName)
                }; break; case "level-asc": n = function (n, t) {
                    return o(n.sortLevel, t.sortLevel)
                }; break; case "level-desc": n = function (n, t) {
                    return o(t.sortLevel, n.sortLevel)
                }; break; case "created-asc": n = function (n, t) {
                    return o(t.sortCreated, n.sortCreated)
                }; break; case "created-desc": n = function (n, t) {
                    return o(n.sortCreated, t.sortCreated)
                }; break; case "modified-asc": n = function (n, t) {
                    return o(t.sortModified, n.sortModified)
                }; break; case "modified-desc": n = function (n, t) {
                    return o(n.sortModified, t.sortModified)
                }
            }for (n !== null && (e = e.sort(n)), t = 0; t < e.length; ++t)l.appendChild(e[t].elem)
        } function w() {
            u() && localStorage.setItem(r, c)
        } var e = [], l = null, s = null, h = null, c = null; return a(), {
            destroy: v, setKeyword: function (n) {
                h = n; y()
            }, setSortOption: function (n) {
                c = n; p(); w()
            }
        }
    } var r = "MY_CHARACTERS_SORT_PREFERENCE", i = {
        searchGroupSelector: ".j-characters-listing__search", searchInputSelector: ".j-characters-listing__search-input", searchClearSelector: ".j-characters-listing__search-clear", sortSelector: ".j-characters-listing__sort", contentSelector: ".j-characters-listing__content", itemSelector: ".j-characters-listing__item", noResultsSelector: ".j-characters-listing__no-results", cardListSelector: ".rpgcharacter-listing"
    }; t.CharacterSearchAndSort = {
        contentGroups: [], searchGroup: null, searchValue: null, sortOption: null, handleSearchKeyUp: function (n) {
            t.CharacterSearchAndSort.searchValue = n.target.value.toLowerCase(); n.target.value === "" && (t.CharacterSearchAndSort.searchValue = null); t.CharacterSearchAndSort.contentGroups.forEach(function (n) {
                n.setKeyword(t.CharacterSearchAndSort.searchValue)
            }); t.CharacterSearchAndSort.handleClearVisibility()
        }, handleSearchClear: function () {
            t.CharacterSearchAndSort.searchValue = null; document.querySelector(i.searchInputSelector).value = ""; t.CharacterSearchAndSort.contentGroups.forEach(function (n) {
                n.setKeyword(t.CharacterSearchAndSort.searchValue)
            }); t.CharacterSearchAndSort.handleClearVisibility()
        }, handleClearVisibility: function () {
            var n = document.querySelector(i.searchClearSelector); t.CharacterSearchAndSort.searchValue !== null && t.CharacterSearchAndSort.searchvalue !== "" ? n.classList.remove("ddb-characters-listing-actions__search-clear--hidden") : n.classList.add("ddb-characters-listing-actions__search-clear--hidden")
        }, handleSortChange: function (n) {
            t.CharacterSearchAndSort.sortOption = n.target.value; t.CharacterSearchAndSort.contentGroups.forEach(function (n) {
                n.setSortOption(t.CharacterSearchAndSort.sortOption)
            })
        }, initialize: function () {
            var s = null, o, h, l, e, c, n, a; if (u() && (window.Waterdeep && window.Waterdeep.User && window.Waterdeep.User.ID && (r = [r, window.Waterdeep.User.ID].join(":")), s = localStorage.getItem(r)), t.CharacterSearchAndSort.sortOption = s, o = document.querySelector(i.searchGroupSelector), o !== null && (t.CharacterSearchAndSort.searchGroup = o), h = o.querySelector(i.searchInputSelector), h !== null && (h.addEventListener("keyup", t.CharacterSearchAndSort.handleSearchKeyUp), l = o.querySelector(i.searchClearSelector), l.addEventListener("click", t.CharacterSearchAndSort.handleSearchClear)), e = document.querySelector(i.sortSelector), e !== null) {
                if (s) for (n = 0; n < e.options.length; n++)e.options[n].value === s && (e.options[n].selected = !0); e.addEventListener("change", t.CharacterSearchAndSort.handleSortChange)
            } for (c = document.querySelectorAll(i.contentSelector), n = 0; n < c.length; n++)a = c[n], t.CharacterSearchAndSort.contentGroups.push(new f(n, a)); t.CharacterSearchAndSort.contentGroups.forEach(function (n) {
                n.setSortOption(t.CharacterSearchAndSort.sortOption)
            })
        }
    }
}(Cobalt, Waterdeep), function (n, t) {
    "use strict"; function i(n, t, r, u, f) {
        let e, o, s = n.length; for (e = t; e < s; e++) {
            o = n.charAt(e); switch (o) {
                case " ": case "-": case ".": case '"': continue; default: if (r < f.length) {
                    let t = f[r]; if (u < t.length && o === t.charAt(u) && (i(n, e + 1, r, u + 1, f) || i(n, e + 1, r + 1, 0, f)) || u === 0 && i(n, e, r + 1, 0, f)) return !0
                } return !1
            }
        } return !0
    } function r(n, t, r = []) {
        if (!n) return !0; var u = /["+\(\)']/g; let f = n.replace(u, "").toLowerCase().trim(); if (!f) return !0; let s = t.replace(u, "").toLowerCase().trim(), o = r && r.length ? r.map(n => n ? n.toLowerCase().trim() : n) : [], h = s.split(/[ -]/); if (i(f, 0, 0, 0, h)) return !0; if (!o.length) return !1; let e = !1; return o.forEach(n => {
            if (!e && n) {
                let t = n.replace(u, "").split(/[ -]/); e = i(f, 0, 0, 0, t)
            }
        }), e
    } t.FilterUtils = {
        initialize: function () {
        }, doesQueryMatchData: r
    }
}(Cobalt, Waterdeep); Waterdeep.Routes.AttachmentAdd = function (n, t) {
    return Waterdeep.Routes.buildRoute("/attachment/{0}/add".format(n), t)
}; Waterdeep.Routes.AttachmentDelete = function (n, t) {
    return Waterdeep.Routes.buildRoute("/attachment/{0}/delete".format(n), t)
}; Waterdeep.Routes.AttachmentDeleteAttachment = function (n, t, i) {
    return Waterdeep.Routes.buildRoute("/attachment/delete-attachment/{0}-{1}".format(n, t), i)
}; Waterdeep.Routes.AttachmentRename = function (n, t) {
    return Waterdeep.Routes.buildRoute("/attachment/{0}/rename".format(n), t)
}; Waterdeep.Routes.AudioRename = function (n, t) {
    return Waterdeep.Routes.buildRoute("/audio/{0}/rename".format(n), t)
}; Waterdeep.Routes.AuthenticationAjaxCheckAvailableEmail = function (n) {
    return Waterdeep.Routes.buildRoute("/user/email/available", n)
}; Waterdeep.Routes.AuthenticationAjaxUserNameIsAvilableCheck = function (n) {
    return Waterdeep.Routes.buildRoute("/user/available", n)
}; Waterdeep.Routes.AuthenticationPrivacyPolicyJson = function (n) {
    return Waterdeep.Routes.buildRoute("/privacy-policy/json", n)
}; Waterdeep.Routes.AuthenticationPrivacyPolicySignedJson = function (n) {
    return Waterdeep.Routes.buildRoute("/privacy-policy-signed/json", n)
}; Waterdeep.Routes.AvatarActivateAvatar = function (n) {
    return Waterdeep.Routes.buildRoute("/ajax-activate-avatar", n)
}; Waterdeep.Routes.AvatarDeleteAvatar = function (n) {
    return Waterdeep.Routes.buildRoute("/ajax-delete-avatar", n)
}; Waterdeep.Routes.AvatarDisableAvatar = function (n) {
    return Waterdeep.Routes.buildRoute("/ajax-disable-avatar", n)
}; Waterdeep.Routes.AvatarUploadAvatar = function (n, t, i) {
    return Waterdeep.Routes.buildRoute("/avatar/{0}-{1}/upload".format(n, t), i)
}; Waterdeep.Routes.CategoryPostGetData = function (n, t) {
    return Waterdeep.Routes.buildRoute("/ajax/posts/{0}/get-data".format(n), t)
}; Waterdeep.Routes.CommentGetCommentRevision = function (n, t, i) {
    return Waterdeep.Routes.buildRoute("/comments/{0}/revisions/{1}/get.json".format(n, t), i)
}; Waterdeep.Routes.CommentGetCommentRevisions = function (n, t) {
    return Waterdeep.Routes.buildRoute("/comments/{0}/revisions".format(n), t)
}; Waterdeep.Routes.CommentRatingModal = function (n, t, i) {
    return Waterdeep.Routes.buildRoute("/comments/rating-modal/{0}-{1}".format(n, t), i)
}; Waterdeep.Routes.CommentRevisionRollback = function (n, t, i) {
    return Waterdeep.Routes.buildRoute("/comments/{0}/revisions/{1}/rollback".format(n, t), i)
}; Waterdeep.Routes.CommonStorePreferences = function (n) {
    return Waterdeep.Routes.buildRoute("/ajax/store-preferences", n)
}; Waterdeep.Routes.CPAchievementDelete = function (n, t) {
    return Waterdeep.Routes.buildRoute("/cp/achievements/delete/{0}".format(n), t)
}; Waterdeep.Routes.CPAjaxAutoCompleteRouteName = function (n) {
    return Waterdeep.Routes.buildRoute("/cp/ajaxautocompleteroutename", n)
}; Waterdeep.Routes.CPAjaxAutoCompleteSiteName = function (n) {
    return Waterdeep.Routes.buildRoute("/cp/ajaxautocompletesitename", n)
}; Waterdeep.Routes.CPAjaxAutoCompleteTitle = function (n) {
    return Waterdeep.Routes.buildRoute("/cp/ajaxautocompletetitle", n)
}; Waterdeep.Routes.CPAnnouncementDelete = function (n, t) {
    return Waterdeep.Routes.buildRoute("/cp/announcements/{0}/delete".format(n), t)
}; Waterdeep.Routes.CPAnnouncementUnDelete = function (n, t) {
    return Waterdeep.Routes.buildRoute("/cp/announcement/{0}/undelete".format(n), t)
}; Waterdeep.Routes.CPCacheManagerInvalidateDataKey = function (n) {
    return Waterdeep.Routes.buildRoute("/cp/cache-manager/invalidate-data-key", n)
}; Waterdeep.Routes.CPCategoryContentBulkModeration = function (n, t) {
    return Waterdeep.Routes.buildRoute("/cp/cms/folders/{0}/bulk-content-moderation".format(n), t)
}; Waterdeep.Routes.CPDomainPolicyDelete = function (n, t) {
    return Waterdeep.Routes.buildRoute("/cp/domain-policy/{0}/delete".format(n), t)
}; Waterdeep.Routes.CPForumForm = function (n, t, i) {
    return Waterdeep.Routes.buildRoute("/cp/ajax-forum-form/{0}/{1}".format(n, t), i)
}; Waterdeep.Routes.CPGetNameForSite = function (n) {
    return Waterdeep.Routes.buildRoute("/cp/getnameforsite", n)
}; Waterdeep.Routes.CPGetSubNamespaces = function (n, t) {
    return Waterdeep.Routes.buildRoute("/ajax/localization/getsubnamespaces/{0}".format(n), t)
}; Waterdeep.Routes.CPGetWarningMessageTemplate = function (n, t) {
    return Waterdeep.Routes.buildRoute("/cp/warning-messages/{0}/get-template.json".format(n), t)
}; Waterdeep.Routes.CPLocalizationIndex = function (n) {
    return Waterdeep.Routes.buildRoute("/cp/localization", n)
}; Waterdeep.Routes.CPLocalizationPhraseEdit = function (n, t) {
    return Waterdeep.Routes.buildRoute("/cp/localization/phrase/{0}".format(n), t)
}; Waterdeep.Routes.CPPageGetUrl = function (n, t) {
    return Waterdeep.Routes.buildRoute("/ajax/get-page-url/{0}".format(n), t)
}; Waterdeep.Routes.CPPostGetUrl = function (n, t) {
    return Waterdeep.Routes.buildRoute("/ajax/get-post-url/{0}".format(n), t)
}; Waterdeep.Routes.CPPostRestoreRevision = function (n, t) {
    return Waterdeep.Routes.buildRoute("/ajax/posts/{0}/restore-revision".format(n), t)
}; Waterdeep.Routes.CPProfileFieldChangeGroup = function (n) {
    return Waterdeep.Routes.buildRoute("/cp/profile-fields/update-group", n)
}; Waterdeep.Routes.CPProfileFieldGroupUpdateDisplayOrder = function (n) {
    return Waterdeep.Routes.buildRoute("/cp/profile-fields-groups/update-display-order", n)
}; Waterdeep.Routes.CPProfileFieldUpdateDisplayOrder = function (n) {
    return Waterdeep.Routes.buildRoute("/cp/profile-fields/update-display-order", n)
}; Waterdeep.Routes.CPRoleDelete = function (n, t, i, r) {
    return Waterdeep.Routes.buildRoute("/cp/user-groups/{0}-{1}/{2}/delete".format(n, t, i), r)
}; Waterdeep.Routes.CPUserNonceBillingTransactions = function (n, t) {
    return Waterdeep.Routes.buildRoute("/cp/users/{0}/nonce-billing-transactions".format(n), t)
}; Waterdeep.Routes.FeedbackSend = function (n) {
    return Waterdeep.Routes.buildRoute("/send-feedback", n)
}; Waterdeep.Routes.ForumForumTopicsFilter = function (n, t) {
    return Waterdeep.Routes.buildRoute("/page-block/forum-filters/{0}".format(n), t)
}; Waterdeep.Routes.ForumGetAllForumSeenInfo = function (n) {
    return Waterdeep.Routes.buildRoute("/new-content/seeninfo", n)
}; Waterdeep.Routes.ForumGetForumLatestThreads = function (n) {
    return Waterdeep.Routes.buildRoute("/page-block/forum-filters/get-threads.json", n)
}; Waterdeep.Routes.ForumSetAllForumSeen = function (n) {
    return Waterdeep.Routes.buildRoute("/forums/set-all-forum-seen", n)
}; Waterdeep.Routes.ForumSetAllForumThreadSeen = function (n, t) {
    return Waterdeep.Routes.buildRoute("/forums/{0}/set-all-forum-thread-seen".format(n), t)
}; Waterdeep.Routes.ForumSetForumSeen = function (n, t) {
    return Waterdeep.Routes.buildRoute("/forums/{0}/set-forum-seen".format(n), t)
}; Waterdeep.Routes.InfractionsGetWarningDefinitionDescription = function (n, t, i) {
    return Waterdeep.Routes.buildRoute("/user/{0}/warning/{1}/description.json".format(n, t), i)
}; Waterdeep.Routes.InfractionsGetWarningDefinitionDescriptionByComment = function (n, t, i, r) {
    return Waterdeep.Routes.buildRoute("/user/{0}/{1}/warning/{2}/description.json".format(n, t, i), r)
}; Waterdeep.Routes.PollDelete = function (n, t, i, r) {
    return Waterdeep.Routes.buildRoute("/polls/{0}-{1}/{2}/delete".format(n, t, i), r)
}; Waterdeep.Routes.PollGetPollForm = function (n, t, i) {
    return Waterdeep.Routes.buildRoute("/polls/{0}/get-poll-form/{1}".format(n, t), i)
}; Waterdeep.Routes.PollHasUserVoted = function (n, t) {
    return Waterdeep.Routes.buildRoute("/polls/{0}/has-user-voted".format(n), t)
}; Waterdeep.Routes.PrivateMessageAjaxAutoCompleteContact = function (n) {
    return Waterdeep.Routes.buildRoute("/ajax/private-message-auto-complete", n)
}; Waterdeep.Routes.PrivateMessageCreateConversationFolder = function (n, t) {
    return Waterdeep.Routes.buildRoute("/private-messages/{0}/create-folder".format(n), t)
}; Waterdeep.Routes.PrivateMessageDeleteConversationFolder = function (n, t) {
    return Waterdeep.Routes.buildRoute("/private-messages/delete-folder/{0}".format(n), t)
}; Waterdeep.Routes.PrivateMessageIndex = function (n) {
    return Waterdeep.Routes.buildRoute("/private-messages", n)
}; Waterdeep.Routes.PrivateMessageInvite = function (n, t) {
    return Waterdeep.Routes.buildRoute("/private-messages/{0}/invite".format(n), t)
}; Waterdeep.Routes.PrivateMessageMoveToConversationFolder = function (n, t, i) {
    return Waterdeep.Routes.buildRoute("/private-messages/{0}/move-to/{1}".format(n, t), i)
}; Waterdeep.Routes.RatingGetUserRatings = function (n) {
    return Waterdeep.Routes.buildRoute("/get-user-ratings", n)
}; Waterdeep.Routes.ShoutboxAddMessage = function (n, t) {
    return Waterdeep.Routes.buildRoute("/shoutbox/{0}/add-message".format(n), t)
}; Waterdeep.Routes.ShoutboxDeleteMessage = function (n, t) {
    return Waterdeep.Routes.buildRoute("/shoutbox/{0}/delete-message".format(n), t)
}; Waterdeep.Routes.ShoutboxGetNewComments = function (n) {
    return Waterdeep.Routes.buildRoute("/shoutbox/get-new-comments", n)
}; Waterdeep.Routes.ShoutboxGetShowShoutboxPreference = function (n) {
    return Waterdeep.Routes.buildRoute("/shoutbox/get-show-shoutbox-preference", n)
}; Waterdeep.Routes.ShoutboxSaveShowShoutboxPreference = function (n, t) {
    return Waterdeep.Routes.buildRoute("/shoutbox/save-show-shoutbox-preference/{0}".format(n), t)
}; Waterdeep.Routes.SmileyGetSmilies = function (n) {
    return Waterdeep.Routes.buildRoute("/smilies/get-all", n)
}; Waterdeep.Routes.TagAjaxGetTags = function (n) {
    return Waterdeep.Routes.buildRoute("/ajax-get-tags", n)
}; Waterdeep.Routes.UserAjaxAutoCompleteUsername = function (n) {
    return Waterdeep.Routes.buildRoute("/autocomplete-username", n)
}; Waterdeep.Routes.UserGetUserSurrogateShortDetails = function (n) {
    return Waterdeep.Routes.buildRoute("/ajax-get-surrogate-details", n)
}; Waterdeep.Routes.UserWarningAcknowledgementChoice = function (n, t) {
    return Waterdeep.Routes.buildRoute("/warning-acknowledgement/choice/{0}".format(n), t)
}; Waterdeep.Routes.UserWarningAcknowledgementModal = function (n) {
    return Waterdeep.Routes.buildRoute("/warning-acknowledgement/get.json", n)
}; Waterdeep.Routes.UserContentBulkModeration = function (n) {
    return Waterdeep.Routes.buildRoute("/my-content/bulk-moderation", n)
}; Waterdeep.Routes.UserContentCreateFolder = function (n) {
    return Waterdeep.Routes.buildRoute("/my-content/create-folder", n)
}; Waterdeep.Routes.UserContentPostRestoreRevision = function (n, t, i) {
    return Waterdeep.Routes.buildRoute("/ajax/my-content/{0}/restore-revision/{1}".format(n, t), i)
}; Waterdeep.Localization.setLanguages([{
    id: 1, name: "English", pluralForm: 1, phraseID: 315, localizedName: "English", code: "en"
}, {
    id: 2, name: "Français (French)", pluralForm: 2, phraseID: 316, localizedName: "Français", code: "fr"
}, {
    id: 3, name: "Deutsch (German)", pluralForm: 1, phraseID: 317, localizedName: "Deutsch", code: "de"
}, {
    id: 4, name: "Español (Spanish)", pluralForm: 1, phraseID: 318, localizedName: "Español", code: "es"
}, {
    id: 5, name: "Pусский (Russian)", pluralForm: 7, phraseID: 319, localizedName: "Pусский", code: "ru"
}, {
    id: 7, name: "汉语 (Simplified Chinese)", pluralForm: 0, phraseID: 320, localizedName: "汉语", code: "zh"
}, {
    id: 8, name: "日本語 (Japanese)", pluralForm: 0, phraseID: 321, localizedName: "日本語", code: "ja"
}, {
    id: 9, name: "한국어 (Korean)", pluralForm: 0, phraseID: 322, localizedName: "한국어", code: "ko"
}, {
    id: 10, name: "Svenska (Swedish)", pluralForm: 1, phraseID: 323, localizedName: "Svenska", code: "sv"
}, {
    id: 11, name: "Bahasa Indonesia (Indonesian)", pluralForm: 0, phraseID: 324, localizedName: "Bahasa Indonesia", code: "id"
}, {
    id: 13, name: "Ελληνικά (Greek)", pluralForm: 1, phraseID: 325, localizedName: "Ελληνικά", code: "el"
}, {
    id: 14, name: "Polski (Polish)", pluralForm: 9, phraseID: 326, localizedName: "Polski", code: "pl"
}, {
    id: 15, name: "Italiano (Italian)", pluralForm: 1, phraseID: 966, localizedName: "Italiano", code: "it"
}, {
    id: 16, name: "繁體中文 (Traditional Chinese)", pluralForm: 0, phraseID: 1189, localizedName: "繁體中文", code: "tw"
}]); Waterdeep.Localization.Global = {
    Buttons: {
        ByValue: {}, Cancel: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Create: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Delete: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Edit: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Push: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Update: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, Common: {
        ByValue: {}, Add: function () {
            return Waterdeep.Localization.localize(arguments)
        }, AddCharacter: function () {
            return Waterdeep.Localization.localize(arguments)
        }, AdvancedSearch: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Apply: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Ascending: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ClickHere: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ColonConnector: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Comments: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ConfirmDelete: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Descending: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Description: function () {
            return Waterdeep.Localization.localize(arguments)
        }, EditMyAccount: function () {
            return Waterdeep.Localization.localize(arguments)
        }, EmailErrorMessage: function () {
            return Waterdeep.Localization.localize(arguments)
        }, EqualErrorMessage: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ErrorOccured: function () {
            return Waterdeep.Localization.localize(arguments)
        }, IntegerValueErrorMessageMaximum: function () {
            return Waterdeep.Localization.localize(arguments)
        }, IntegerValueErrorMessageMinimum: function () {
            return Waterdeep.Localization.localize(arguments)
        }, LengthErrorMessageMaximum: function () {
            return Waterdeep.Localization.localize(arguments)
        }, LengthErrorMessageMinimum: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Logout: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Milliseconds: function () {
            return Waterdeep.Localization.localize(arguments)
        }, More: function () {
            return Waterdeep.Localization.localize(arguments)
        }, MyCharacters: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Name: function () {
            return Waterdeep.Localization.localize(arguments)
        }, New: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Normal: function () {
            return Waterdeep.Localization.localize(arguments)
        }, NumberOfPrivateMessagesAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, PageOf: function () {
            return Waterdeep.Localization.localize(arguments)
        }, PageXOfY: function () {
            return Waterdeep.Localization.localize(arguments)
        }, PleaseLogIn: function () {
            return Waterdeep.Localization.localize(arguments)
        }, PleaseWaitProcessing: function () {
            return Waterdeep.Localization.localize(arguments)
        }, PrivateMessagesAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, QuoteFrom: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Remove: function () {
            return Waterdeep.Localization.localize(arguments)
        }, RequiredErrorMessage: function () {
            return Waterdeep.Localization.localize(arguments)
        }, RestoreContent: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SelectCharacter: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SimpleSearch: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Submit: function () {
            return Waterdeep.Localization.localize(arguments)
        }, TestStuff: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Title: function () {
            return Waterdeep.Localization.localize(arguments)
        }, UserAsCharacter: function () {
            return Waterdeep.Localization.localize(arguments)
        }, UserAvatar: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Username: function () {
            return Waterdeep.Localization.localize(arguments)
        }, WelcomeUser: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, ContentManagement: {
        ByValue: {}, AddMediaGallery: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ExistingFolders: function () {
            return Waterdeep.Localization.localize(arguments)
        }, HideAddGallery: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Insert: function () {
            return Waterdeep.Localization.localize(arguments)
        }, InsertAnImage: function () {
            return Waterdeep.Localization.localize(arguments)
        }, OnSelectedTemplate: function () {
            return Waterdeep.Localization.localize(arguments)
        }, PageFormDoNotSetDate: function () {
            return Waterdeep.Localization.localize(arguments)
        }, PageFormSetDate: function () {
            return Waterdeep.Localization.localize(arguments)
        }, PublishOnTemplate: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SelectImage: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, ControlPanel: {
        ByValue: {}, AddNewHeader: function () {
            return Waterdeep.Localization.localize(arguments)
        }, AddSubNavigationLink: function () {
            return Waterdeep.Localization.localize(arguments)
        }, BulkConfirm: function () {
            return Waterdeep.Localization.localize(arguments)
        }, CompLegacySubscription: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Contactology_Campaigns: function () {
            return Waterdeep.Localization.localize(arguments)
        }, EntitySubscriptionTypes: function () {
            return Waterdeep.Localization.localize(arguments)
        }, LegacySubscriptions: function () {
            return Waterdeep.Localization.localize(arguments)
        }, LegacySubscriptionSearch: function () {
            return Waterdeep.Localization.localize(arguments)
        }, MenuLegacySubscriptions: function () {
            return Waterdeep.Localization.localize(arguments)
        }, MinimumPostCount: function () {
            return Waterdeep.Localization.localize(arguments)
        }, MovePrivateMessagesPrompt: function () {
            return Waterdeep.Localization.localize(arguments)
        }, PushNotification: function () {
            return Waterdeep.Localization.localize(arguments)
        }, RemoveLinkTooltip: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SubscriptionID: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SubscriptionTypeEdit: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SubscriptionTypePush: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SubscriptionTypes: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SimpleSearch: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ByValue1: function () {
            return Waterdeep.Localization.Global.ControlPanel.SimpleSearch
        }
    }, Dates: {
        ByValue: {}, AprilAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, AugustAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Days: function () {
            return Waterdeep.Localization.localize(arguments)
        }, DecemberAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, FebruaryAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, FridayAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, FutureFormat: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Hours: function () {
            return Waterdeep.Localization.localize(arguments)
        }, JanuaryAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, JulyAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, JuneAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, LessThanOneMinute: function () {
            return Waterdeep.Localization.localize(arguments)
        }, MarchAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, MayAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Minutes: function () {
            return Waterdeep.Localization.localize(arguments)
        }, MondayAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, NovemberAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, OctoberAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, OneMinute: function () {
            return Waterdeep.Localization.localize(arguments)
        }, PastFormat: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SaturdayAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Seconds: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SeptemberAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, StandardDateFormat: function () {
            return Waterdeep.Localization.localize(arguments)
        }, StandardDateTimeFormat: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SundayAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ThursdayAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, TuesdayAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }, WednesdayAbbr: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, ErrorMessages: {
        ByValue: {}, NumericPrecisionDecimalDigitCountErrorMessageTemplate: function () {
            return Waterdeep.Localization.localize(arguments)
        }, TagEmpty: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, Files: {
        ByValue: {}, AddAttachment: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ChangeDescription: function () {
            return Waterdeep.Localization.localize(arguments)
        }, DeleteAttachment: function () {
            return Waterdeep.Localization.localize(arguments)
        }, FileTooLarge: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, Forums: {
        ByValue: {}, Add: function () {
            return Waterdeep.Localization.localize(arguments)
        }, CreateForum: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Delete: function () {
            return Waterdeep.Localization.localize(arguments)
        }, EditForum: function () {
            return Waterdeep.Localization.localize(arguments)
        }, GoToFirstUnreadPost: function () {
            return Waterdeep.Localization.localize(arguments)
        }, JumpToPage: function () {
            return Waterdeep.Localization.localize(arguments)
        }, LockThread: function () {
            return Waterdeep.Localization.localize(arguments)
        }, MarkForumRead: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Moderator: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Move: function () {
            return Waterdeep.Localization.localize(arguments)
        }, OnSelected: function () {
            return Waterdeep.Localization.localize(arguments)
        }, RestoreContentDescription: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SearchForums: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SelectAll: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SendMessage: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Unread: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ViewPosts: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ViewProfile: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, Languages: {
        ByValue: {}, Arabic: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Brazillian_Portugese: function () {
            return Waterdeep.Localization.localize(arguments)
        }, BritishEnglish: function () {
            return Waterdeep.Localization.localize(arguments)
        }, English: function () {
            return Waterdeep.Localization.localize(arguments)
        }, French: function () {
            return Waterdeep.Localization.localize(arguments)
        }, German: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Greek: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Indonesian: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Italian: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Japanese: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Korean: function () {
            return Waterdeep.Localization.localize(arguments)
        }, LatinAmericanSpanish: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Polish: function () {
            return Waterdeep.Localization.localize(arguments)
        }, "Português_do_Brasil__Brazilian_Portuguese_": function () {
            return Waterdeep.Localization.localize(arguments)
        }, Russian: function () {
            return Waterdeep.Localization.localize(arguments)
        }, SimplifiedChinese: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Spanish: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Swedish: function () {
            return Waterdeep.Localization.localize(arguments)
        }, TraditionalChinese: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Uzbec: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Vietnamese: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, MailTemplates: {
        ByValue: {}, ReportBody: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, Polls: {
        ByValue: {}, AddChoice: function () {
            return Waterdeep.Localization.localize(arguments)
        }, AddPoll: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ChoiceNumberTemplate: function () {
            return Waterdeep.Localization.localize(arguments)
        }, HideResults: function () {
            return Waterdeep.Localization.localize(arguments)
        }, RemoveChoice: function () {
            return Waterdeep.Localization.localize(arguments)
        }, RemovePoll: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ViewResults: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, Ratings: {
        ByValue: {}, YouRatedThis: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, Reporting: {
        ByValue: {}, Report: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, TinyMCE: {
        ByValue: {}, XenonMediaPluginDesc: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, Upsells: {
        ByValue: {}, SubscriptionRequiresLogin: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, UserRegistration: {
        ByValue: {}, ConfirmPassword: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Password: function () {
            return Waterdeep.Localization.localize(arguments)
        }, RecoverAccountStep2Info2: function () {
            return Waterdeep.Localization.localize(arguments)
        }, Username: function () {
            return Waterdeep.Localization.localize(arguments)
        }, UsernameIsTaken: function () {
            return Waterdeep.Localization.localize(arguments)
        }
    }, Widgets: {
        ByValue: {}, LatestPosts: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ByValue2: function () {
            return Waterdeep.Localization.Global.Widgets.LatestPosts
        }, LatestNews: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ByValue4: function () {
            return Waterdeep.Localization.Global.Widgets.LatestNews
        }, Poll: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ByValue5: function () {
            return Waterdeep.Localization.Global.Widgets.Poll
        }, WhosOnline: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ByValue6: function () {
            return Waterdeep.Localization.Global.Widgets.WhosOnline
        }, RandomPicture: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ByValue7: function () {
            return Waterdeep.Localization.Global.Widgets.RandomPicture
        }, Calendar: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ByValue8: function () {
            return Waterdeep.Localization.Global.Widgets.Calendar
        }, Recruitment: function () {
            return Waterdeep.Localization.localize(arguments)
        }, ByValue9: function () {
            return Waterdeep.Localization.Global.Widgets.Recruitment
        }
    }
}; Waterdeep.Localization[1] = Waterdeep.Localization.Global.Buttons.Create; Waterdeep.Localization[2] = Waterdeep.Localization.Global.Buttons.Edit; Waterdeep.Localization[3] = Waterdeep.Localization.Global.Buttons.Update; Waterdeep.Localization[4] = Waterdeep.Localization.Global.Buttons.Delete; Waterdeep.Localization[32] = Waterdeep.Localization.Global.Common.ErrorOccured; Waterdeep.Localization[96] = Waterdeep.Localization.Global.Common.Logout; Waterdeep.Localization[104] = Waterdeep.Localization.Global.Common.EditMyAccount; Waterdeep.Localization[106] = Waterdeep.Localization.Global.Common.WelcomeUser; Waterdeep.Localization[107] = Waterdeep.Localization.Global.Forums.SearchForums; Waterdeep.Localization[115] = Waterdeep.Localization.Global.Dates.FutureFormat; Waterdeep.Localization[116] = Waterdeep.Localization.Global.Dates.PastFormat; Waterdeep.Localization[117] = Waterdeep.Localization.Global.Dates.LessThanOneMinute; Waterdeep.Localization[118] = Waterdeep.Localization.Global.Dates.OneMinute; Waterdeep.Localization[119] = Waterdeep.Localization.Global.Dates.Minutes; Waterdeep.Localization[120] = Waterdeep.Localization.Global.Dates.Hours; Waterdeep.Localization[121] = Waterdeep.Localization.Global.Dates.Days; Waterdeep.Localization[122] = Waterdeep.Localization.Global.Dates.StandardDateFormat; Waterdeep.Localization[123] = Waterdeep.Localization.Global.Dates.StandardDateTimeFormat; Waterdeep.Localization[126] = Waterdeep.Localization.Global.Dates.SundayAbbr; Waterdeep.Localization[127] = Waterdeep.Localization.Global.Dates.MondayAbbr; Waterdeep.Localization[128] = Waterdeep.Localization.Global.Dates.TuesdayAbbr; Waterdeep.Localization[129] = Waterdeep.Localization.Global.Dates.WednesdayAbbr; Waterdeep.Localization[130] = Waterdeep.Localization.Global.Dates.ThursdayAbbr; Waterdeep.Localization[131] = Waterdeep.Localization.Global.Dates.FridayAbbr; Waterdeep.Localization[132] = Waterdeep.Localization.Global.Dates.SaturdayAbbr; Waterdeep.Localization[133] = Waterdeep.Localization.Global.Dates.JanuaryAbbr; Waterdeep.Localization[134] = Waterdeep.Localization.Global.Dates.FebruaryAbbr; Waterdeep.Localization[135] = Waterdeep.Localization.Global.Dates.MarchAbbr; Waterdeep.Localization[136] = Waterdeep.Localization.Global.Dates.AprilAbbr; Waterdeep.Localization[137] = Waterdeep.Localization.Global.Dates.MayAbbr; Waterdeep.Localization[138] = Waterdeep.Localization.Global.Dates.JuneAbbr; Waterdeep.Localization[139] = Waterdeep.Localization.Global.Dates.JulyAbbr; Waterdeep.Localization[140] = Waterdeep.Localization.Global.Dates.AugustAbbr; Waterdeep.Localization[141] = Waterdeep.Localization.Global.Dates.SeptemberAbbr; Waterdeep.Localization[142] = Waterdeep.Localization.Global.Dates.OctoberAbbr; Waterdeep.Localization[143] = Waterdeep.Localization.Global.Dates.NovemberAbbr; Waterdeep.Localization[144] = Waterdeep.Localization.Global.Dates.DecemberAbbr; Waterdeep.Localization[147] = Waterdeep.Localization.Global.Forums.LockThread; Waterdeep.Localization[151] = Waterdeep.Localization.Global.Common.Title; Waterdeep.Localization[154] = Waterdeep.Localization.Global.Forums.JumpToPage; Waterdeep.Localization[155] = Waterdeep.Localization.Global.Forums.ViewProfile; Waterdeep.Localization[156] = Waterdeep.Localization.Global.Forums.ViewPosts; Waterdeep.Localization[157] = Waterdeep.Localization.Global.Forums.SendMessage; Waterdeep.Localization[158] = Waterdeep.Localization.Global.Common.Submit; Waterdeep.Localization[177] = Waterdeep.Localization.Global.Common.Add; Waterdeep.Localization[181] = Waterdeep.Localization.Global.Common.Description; Waterdeep.Localization[187] = Waterdeep.Localization.Global.Buttons.Cancel; Waterdeep.Localization[193] = Waterdeep.Localization.Global.Forums.Delete; Waterdeep.Localization[194] = Waterdeep.Localization.Global.Forums.Add; Waterdeep.Localization[195] = Waterdeep.Localization.Global.Forums.SelectAll; Waterdeep.Localization[196] = Waterdeep.Localization.Global.Forums.OnSelected; Waterdeep.Localization[218] = Waterdeep.Localization.Global.Forums.Move; Waterdeep.Localization[219] = Waterdeep.Localization.Global.Common.Name; Waterdeep.Localization[221] = Waterdeep.Localization.Global.Common.Username; Waterdeep.Localization[225] = Waterdeep.Localization.Global.Forums.Moderator; Waterdeep.Localization[230] = Waterdeep.Localization.Global.Common.UserAvatar; Waterdeep.Localization[266] = Waterdeep.Localization.Global.Common.MyCharacters; Waterdeep.Localization[283] = Waterdeep.Localization.Global.UserRegistration.Username; Waterdeep.Localization[284] = Waterdeep.Localization.Global.UserRegistration.Password; Waterdeep.Localization[285] = Waterdeep.Localization.Global.UserRegistration.ConfirmPassword; Waterdeep.Localization[314] = Waterdeep.Localization.Global.Forums.GoToFirstUnreadPost; Waterdeep.Localization[315] = Waterdeep.Localization.Global.Languages.English; Waterdeep.Localization[316] = Waterdeep.Localization.Global.Languages.French; Waterdeep.Localization[317] = Waterdeep.Localization.Global.Languages.German; Waterdeep.Localization[318] = Waterdeep.Localization.Global.Languages.Spanish; Waterdeep.Localization[319] = Waterdeep.Localization.Global.Languages.Russian; Waterdeep.Localization[320] = Waterdeep.Localization.Global.Languages.SimplifiedChinese; Waterdeep.Localization[321] = Waterdeep.Localization.Global.Languages.Japanese; Waterdeep.Localization[322] = Waterdeep.Localization.Global.Languages.Korean; Waterdeep.Localization[323] = Waterdeep.Localization.Global.Languages.Swedish; Waterdeep.Localization[324] = Waterdeep.Localization.Global.Languages.Indonesian; Waterdeep.Localization[325] = Waterdeep.Localization.Global.Languages.Greek; Waterdeep.Localization[326] = Waterdeep.Localization.Global.Languages.Polish; Waterdeep.Localization[361] = Waterdeep.Localization.Global.Common.PageXOfY; Waterdeep.Localization[378] = Waterdeep.Localization.Global.Common.RequiredErrorMessage; Waterdeep.Localization[379] = Waterdeep.Localization.Global.Common.LengthErrorMessageMaximum; Waterdeep.Localization[380] = Waterdeep.Localization.Global.Common.LengthErrorMessageMinimum; Waterdeep.Localization[382] = Waterdeep.Localization.Global.Common.EmailErrorMessage; Waterdeep.Localization[393] = Waterdeep.Localization.Global.Forums.CreateForum; Waterdeep.Localization[394] = Waterdeep.Localization.Global.Forums.EditForum; Waterdeep.Localization[395] = Waterdeep.Localization.Global.Forums.MarkForumRead; Waterdeep.Localization[441] = Waterdeep.Localization.Global.Common.UserAsCharacter; Waterdeep.Localization[444] = Waterdeep.Localization.Global.Files.FileTooLarge; Waterdeep.Localization[445] = Waterdeep.Localization.Global.Common.SelectCharacter; Waterdeep.Localization[446] = Waterdeep.Localization.Global.Common.AddCharacter; Waterdeep.Localization[447] = Waterdeep.Localization.Global.Common.QuoteFrom; Waterdeep.Localization[451] = Waterdeep.Localization.Global.Common.More; Waterdeep.Localization[461] = Waterdeep.Localization.Global.Dates.Seconds; Waterdeep.Localization[463] = Waterdeep.Localization.Global.Files.DeleteAttachment; Waterdeep.Localization[464] = Waterdeep.Localization.Global.Files.AddAttachment; Waterdeep.Localization[465] = Waterdeep.Localization.Global.Files.ChangeDescription; Waterdeep.Localization[466] = Waterdeep.Localization.Global.Common.Comments; Waterdeep.Localization[469] = Waterdeep.Localization.Global.Polls.ChoiceNumberTemplate; Waterdeep.Localization[475] = Waterdeep.Localization.Global.Polls.AddPoll; Waterdeep.Localization[476] = Waterdeep.Localization.Global.Polls.RemovePoll; Waterdeep.Localization[490] = Waterdeep.Localization.Global.Common.Normal; Waterdeep.Localization[493] = Waterdeep.Localization.Global.Polls.AddChoice; Waterdeep.Localization[494] = Waterdeep.Localization.Global.Polls.RemoveChoice; Waterdeep.Localization[502] = Waterdeep.Localization.Global.Common.Milliseconds; Waterdeep.Localization[513] = Waterdeep.Localization.Global.Common.IntegerValueErrorMessageMaximum; Waterdeep.Localization[514] = Waterdeep.Localization.Global.Common.IntegerValueErrorMessageMinimum; Waterdeep.Localization[516] = Waterdeep.Localization.Global.Polls.ViewResults; Waterdeep.Localization[517] = Waterdeep.Localization.Global.Polls.HideResults; Waterdeep.Localization[521] = Waterdeep.Localization.Global.Common.EqualErrorMessage; Waterdeep.Localization[536] = Waterdeep.Localization.Global.ContentManagement.OnSelectedTemplate; Waterdeep.Localization[544] = Waterdeep.Localization.Global.ContentManagement.AddMediaGallery; Waterdeep.Localization[569] = Waterdeep.Localization.Global.ContentManagement.HideAddGallery; Waterdeep.Localization[571] = Waterdeep.Localization.Global.ContentManagement.PublishOnTemplate; Waterdeep.Localization[588] = Waterdeep.Localization.Global.ContentManagement.PageFormSetDate; Waterdeep.Localization[589] = Waterdeep.Localization.Global.ContentManagement.PageFormDoNotSetDate; Waterdeep.Localization[593] = Waterdeep.Localization.Global.TinyMCE.XenonMediaPluginDesc; Waterdeep.Localization[617] = Waterdeep.Localization.Global.Common.PleaseWaitProcessing; Waterdeep.Localization[628] = Waterdeep.Localization.Global.Common.PrivateMessagesAbbr; Waterdeep.Localization[629] = Waterdeep.Localization.Global.Common.NumberOfPrivateMessagesAbbr; Waterdeep.Localization[642] = Waterdeep.Localization.Global.ContentManagement.SelectImage; Waterdeep.Localization[644] = Waterdeep.Localization.Global.ContentManagement.Insert; Waterdeep.Localization[800] = Waterdeep.Localization.Global.Common.SimpleSearch; Waterdeep.Localization[802] = Waterdeep.Localization.Global.Common.AdvancedSearch; Waterdeep.Localization[806] = Waterdeep.Localization.Global.Common.Ascending; Waterdeep.Localization[807] = Waterdeep.Localization.Global.Common.Descending; Waterdeep.Localization[825] = Waterdeep.Localization.Global.UserRegistration.UsernameIsTaken; Waterdeep.Localization[961] = Waterdeep.Localization.Global.Widgets.LatestNews; Waterdeep.Localization[966] = Waterdeep.Localization.Global.Languages.Italian; Waterdeep.Localization[967] = Waterdeep.Localization.Global.Widgets.Poll; Waterdeep.Localization[971] = Waterdeep.Localization.Global.Widgets.WhosOnline; Waterdeep.Localization[976] = Waterdeep.Localization.Global.Widgets.RandomPicture; Waterdeep.Localization[1027] = Waterdeep.Localization.Global.Common.Remove; Waterdeep.Localization[1053] = Waterdeep.Localization.Global.Widgets.Calendar; Waterdeep.Localization[1054] = Waterdeep.Localization.Global.Widgets.LatestPosts; Waterdeep.Localization[1055] = Waterdeep.Localization.Global.Widgets.Recruitment; Waterdeep.Localization[1158] = Waterdeep.Localization.Global.UserRegistration.RecoverAccountStep2Info2; Waterdeep.Localization[1189] = Waterdeep.Localization.Global.Languages.TraditionalChinese; Waterdeep.Localization[1190] = Waterdeep.Localization.Global.Languages.LatinAmericanSpanish; Waterdeep.Localization[1191] = Waterdeep.Localization.Global.Languages.BritishEnglish; Waterdeep.Localization[1258] = Waterdeep.Localization.Global.Common.ConfirmDelete; Waterdeep.Localization[2057] = Waterdeep.Localization.Global.ControlPanel.AddNewHeader; Waterdeep.Localization[2104] = Waterdeep.Localization.Global.Common.Apply; Waterdeep.Localization[2114] = Waterdeep.Localization.Global.ControlPanel.MinimumPostCount; Waterdeep.Localization[2255] = Waterdeep.Localization.Global.Common.ClickHere; Waterdeep.Localization[2337] = Waterdeep.Localization.Global.Common.ColonConnector; Waterdeep.Localization[2673] = Waterdeep.Localization.Global.Common.PageOf; Waterdeep.Localization[2794] = Waterdeep.Localization.Global.ErrorMessages.TagEmpty; Waterdeep.Localization[3897] = Waterdeep.Localization.Global.ContentManagement.ExistingFolders; Waterdeep.Localization[3900] = Waterdeep.Localization.Global.Ratings.YouRatedThis; Waterdeep.Localization[3915] = Waterdeep.Localization.Global.Common.PleaseLogIn; Waterdeep.Localization[3952] = Waterdeep.Localization.Global.ControlPanel.RemoveLinkTooltip; Waterdeep.Localization[3958] = Waterdeep.Localization.Global.Reporting.Report; Waterdeep.Localization[3978] = Waterdeep.Localization.Global.ContentManagement.InsertAnImage; Waterdeep.Localization[4014] = Waterdeep.Localization.Global.ControlPanel.BulkConfirm; Waterdeep.Localization[4218] = Waterdeep.Localization.Global.ControlPanel.AddSubNavigationLink; Waterdeep.Localization[4244] = Waterdeep.Localization.Global.Forums.RestoreContentDescription; Waterdeep.Localization[4245] = Waterdeep.Localization.Global.Common.RestoreContent; Waterdeep.Localization[4251] = Waterdeep.Localization.Global.ErrorMessages.NumericPrecisionDecimalDigitCountErrorMessageTemplate; Waterdeep.Localization[4412] = Waterdeep.Localization.Global.Common.TestStuff; Waterdeep.Localization[4446] = Waterdeep.Localization.Global.Common.New; Waterdeep.Localization[5450] = Waterdeep.Localization.Global.Languages.Uzbec; Waterdeep.Localization[5463] = Waterdeep.Localization.Global.Languages.Vietnamese; Waterdeep.Localization[5519] = Waterdeep.Localization.Global.Languages.Brazillian_Portugese; Waterdeep.Localization[5543] = Waterdeep.Localization.Global.ControlPanel.CompLegacySubscription; Waterdeep.Localization[5544] = Waterdeep.Localization.Global.ControlPanel.Contactology_Campaigns; Waterdeep.Localization[5554] = Waterdeep.Localization.Global.ControlPanel.EntitySubscriptionTypes; Waterdeep.Localization[5560] = Waterdeep.Localization.Global.ControlPanel.LegacySubscriptionSearch; Waterdeep.Localization[5576] = Waterdeep.Localization.Global.ControlPanel.MenuLegacySubscriptions; Waterdeep.Localization[5583] = Waterdeep.Localization.Global.Buttons.Push; Waterdeep.Localization[5584] = Waterdeep.Localization.Global.ControlPanel.PushNotification; Waterdeep.Localization[5590] = Waterdeep.Localization.Global.Upsells.SubscriptionRequiresLogin; Waterdeep.Localization[5591] = Waterdeep.Localization.Global.ControlPanel.SubscriptionTypeEdit; Waterdeep.Localization[5592] = Waterdeep.Localization.Global.ControlPanel.SubscriptionTypePush; Waterdeep.Localization[5593] = Waterdeep.Localization.Global.ControlPanel.SubscriptionTypes; Waterdeep.Localization[5609] = Waterdeep.Localization.Global.ControlPanel.LegacySubscriptions; Waterdeep.Localization[5610] = Waterdeep.Localization.Global.ControlPanel.SubscriptionID; Waterdeep.Localization[5612] = Waterdeep.Localization.Global.ControlPanel.SimpleSearch; Waterdeep.Localization[5806] = Waterdeep.Localization.Global.Forums.Unread; Waterdeep.Localization[5976] = Waterdeep.Localization.Global.Languages.Arabic; Waterdeep.Localization[5997] = Waterdeep.Localization.Global.MailTemplates.ReportBody; Waterdeep.Localization[6104] = Waterdeep.Localization.Global.ControlPanel.MovePrivateMessagesPrompt; Waterdeep.Localization[6374] = Waterdeep.Localization.Global.Languages.Português_do_Brasil__Brazilian_Portuguese_; Waterdeep.Localization.populate(1, {
    Global: {
        Buttons: {
            Cancel: "Cancel", Create: "Create", Delete: "Delete", Edit: "Edit", Push: "Push", Update: "Update"
        }, Common: {
            Add: "Add", AddCharacter: "Add a character", AdvancedSearch: "Advanced Search", Apply: "Apply", Ascending: "Ascending", ClickHere: "click here", ColonConnector: ": ", Comments: "Comments", ConfirmDelete: "Are you sure you want to delete {0}?", Descending: "Descending", Description: "Description", EditMyAccount: "Edit My Account", EmailErrorMessage: "Must be an e-mail address.", EqualErrorMessage: "{0} must be equal to {1}", ErrorOccured: "Sorry, an error occurred while processing your request.", IntegerValueErrorMessageMaximum: "Must be at most {0}.", IntegerValueErrorMessageMinimum: "Must be at least {0}.", LengthErrorMessageMaximum: "Must be at most {0} PLURAL[{0};character;characters] long.", LengthErrorMessageMinimum: "Must be at least {0} PLURAL[{0};character;characters] long.", Logout: "Sign Out", Milliseconds: "{0} PLURAL[{0};millisecond;milliseconds]", More: "More", MyCharacters: "My Characters", Name: "Name", New: "New", Normal: "Normal", NumberOfPrivateMessagesAbbr: "{0} PLURAL[{0};PM;PMs]", PageOf: "Page {0} of {1}", PageXOfY: "Page {0} of {1}", PleaseLogIn: "Please log in.", PleaseWaitProcessing: "Please wait, processing ...", PrivateMessagesAbbr: "PMs", QuoteFrom: "Quote from {0}", Remove: "Remove", RequiredErrorMessage: "This field is required.", RestoreContent: "Restore Content", SelectCharacter: "Select a Character", SimpleSearch: "Simple search", Submit: "Submit", TestStuff: "This is just a test. {0} PLURAL[{0};bird;birds].", Title: "Title", UserAsCharacter: "{0} as ", UserAvatar: "{0}'s avatar", Username: "Username", WelcomeUser: "Welcome, {0}!"
        }, ContentManagement: {
            AddMediaGallery: "Add Media Gallery", ExistingFolders: "Existing Folders", HideAddGallery: "Don't Add Media Gallery", Insert: "Insert", InsertAnImage: "Insert an Image", OnSelectedTemplate: "Apply to Selected ({0})", PageFormDoNotSetDate: "Don't Set Date", PageFormSetDate: "Set Date", PublishOnTemplate: "Publish {0}", SelectImage: "Select an Image"
        }, ControlPanel: {
            AddNewHeader: "Add New Header", AddSubNavigationLink: '<div class="header">Add Sub-Navigation<\/div>\r\nAdd a Sub-Navigation Link', BulkConfirm: "Are you sure you want to {0} these items?", CompLegacySubscription: "Issue Comp", "Contactology Campaigns": "Contactology Campaigns", EntitySubscriptionTypes: "Entity Subscription Types", LegacySubscriptions: "Legacy Subscriptions", LegacySubscriptionSearch: "Search Legacy Subscriptions", MenuLegacySubscriptions: "Legacy Subscriptions", MinimumPostCount: "Minimum Post Count", MovePrivateMessagesPrompt: 'Are you sure you want to move these private message(s) into the "{0}" folder?', PushNotification: "Push Notification", RemoveLinkTooltip: '<div class="header">Remove Link<\/div>\r\nRemove this link from your web site navigation.', SubscriptionID: "Subscription ID", SubscriptionTypeEdit: "Subscription Type Edit", SubscriptionTypePush: "Push Subscription Type Notification", SubscriptionTypes: "Subscription Types", SimpleSearch: "Simple Search"
        }, Dates: {
            AprilAbbr: "Apr", AugustAbbr: "Aug", Days: "{0} PLURAL[{0};day;days]", DecemberAbbr: "Dec", FebruaryAbbr: "Feb", FridayAbbr: "Fri", FutureFormat: "{0} from now", Hours: "{0} PLURAL[{0};hour;hours]", JanuaryAbbr: "Jan", JulyAbbr: "Jul", JuneAbbr: "Jun", LessThanOneMinute: "<1 min", MarchAbbr: "Mar", MayAbbr: "May", Minutes: "{0} PLURAL[{0};min;mins]", MondayAbbr: "Mon", NovemberAbbr: "Nov", OctoberAbbr: "Oct", OneMinute: "1 min", PastFormat: "{0} ago", SaturdayAbbr: "Sat", Seconds: "{0} sec", SeptemberAbbr: "Sep", StandardDateFormat: "{1} {0}, {2}", StandardDateTimeFormat: "{1}, {4}, {0} {6} {2}:{3}:{5}", SundayAbbr: "Sun", ThursdayAbbr: "Thu", TuesdayAbbr: "Tue", WednesdayAbbr: "Wed"
        }, ErrorMessages: {
            NumericPrecisionDecimalDigitCountErrorMessageTemplate: "The value you provided has {0} decimal digits and the decimal digit limit is {1} digits.", TagEmpty: "You cannot add an empty tag."
        }, Files: {
            AddAttachment: "Add this attachment back.", ChangeDescription: "Change this attachment's description", DeleteAttachment: "Delete this attachment", FileTooLarge: "The file provided is too large. Please provide a file less than {0}."
        }, Forums: {
            Add: "Add", CreateForum: "Create Forum", Delete: "Delete", EditForum: "Edit Forum", GoToFirstUnreadPost: "Go to first unread post", JumpToPage: "Jump to page", LockThread: "Lock this thread", MarkForumRead: "Mark Forum as Read", Moderator: "Moderator", Move: "Move", OnSelected: "On Selected ({0})", RestoreContentDescription: "Click to restore your last entered text, in case of an error with your last attempt", SearchForums: "Search Forums", SelectAll: "Select All", SendMessage: "Send a Message", Unread: "Unread", ViewPosts: "View Posts", ViewProfile: "View User Profile"
        }, Languages: {
            Arabic: "Arabic", "Brazillian Portugese": "Brazillian Portugese", BritishEnglish: "British English", English: "English", French: "French", German: "German", Greek: "Greek", Indonesian: "Indonesian", Italian: "Italian", Japanese: "Japanese", Korean: "Korean", LatinAmericanSpanish: "Latin American Spanish", Polish: "Polish", "Português do Brasil (Brazilian Portuguese)": "Português do Brasil (Brazilian Portuguese)", Russian: "Russian", SimplifiedChinese: "Simplified Chinese", Spanish: "Spanish", Swedish: "Swedish", TraditionalChinese: "Traditional Chinese", Uzbec: "Uzbec", Vietnamese: "Vietnamese"
        }, MailTemplates: {
            ReportBody: 'Hello {0},\r\n\r\n<p>{6} has reported this <a href="{4}">content<\/a> on <a href="{7}">{8}<\/a> for the reason {2}.<\/p>\r\n<p>{9}<\/p>\r\n<p>You can view the report by <a href="{7}">visiting the report page<\/a>.<\/p>\r\n\r\n<p>Reported content:\r\n<blockquote>\r\nPosted by <a href="{5}">{10}<\/a>\r\n<p>\r\n{3}\r\n<\/p>\r\n<\/blockquote><\/p>\r\n\r\n__\r\n<p style="font-size:11px">To unsubscribe from these email notifications, go to <a href="{1}">your notifications page.<\/a><\/p>'
        }, Polls: {
            AddChoice: "Add Choice", AddPoll: "Add a poll", ChoiceNumberTemplate: "Choice #{0}", HideResults: "Hide Results", RemoveChoice: "Remove Choice", RemovePoll: "Don't add a poll", ViewResults: "View Results"
        }, Ratings: {
            YouRatedThis: "You rated this {0} PLURAL[{0};star;stars]. {2} PLURAL[{2};user;users] rated it for a total average of {1} PLURAL[{1};star;stars]."
        }, Reporting: {
            Report: "Report"
        }, TinyMCE: {
            XenonMediaPluginDesc: "Add a file from a Folder"
        }, Upsells: {
            SubscriptionRequiresLogin: "You must be logged in to Subscribe."
        }, UserRegistration: {
            ConfirmPassword: "Confirm Password", Password: "Password", RecoverAccountStep2Info2: "&nbsp;", Username: "Username", UsernameIsTaken: "That username is taken."
        }, Widgets: {
            LatestPosts: "Latest Posts", LatestNews: "Latest News", Poll: "Poll", WhosOnline: "Who's Online", RandomPicture: "Random Picture", Calendar: "Calendar", Recruitment: "Recruitment"
        }
    }
})