! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : ((e = e || self).Vimeo = e.Vimeo || {}, e.Vimeo.Player = t()) }(this, function() { "use strict";

    function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } var t = "undefined" != typeof global && "[object global]" === {}.toString.call(global);

    function n(e, t) { return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1)) }

    function r(e) { return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e) }

    function o() { var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.id,
            o = t.url,
            i = n || o; if (!i) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."); if (e = i, !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e) return "https://vimeo.com/".concat(i); if (r(i)) return i.replace("http:", "https:"); if (n) throw new TypeError("“".concat(n, "” is not a valid video id.")); throw new TypeError("“".concat(i, "” is not a vimeo.com url.")) } var i = void 0 !== Array.prototype.indexOf,
        a = "undefined" != typeof window && void 0 !== window.postMessage; if (!(t || i && a)) throw new Error("Sorry, the Vimeo Player API is not available in this browser."); var u = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};! function(e) { if (!e.WeakMap) { var t = Object.prototype.hasOwnProperty,
                n = function(e, t, n) { Object.defineProperty ? Object.defineProperty(e, t, { configurable: !0, writable: !0, value: n }) : e[t] = n };
            e.WeakMap = function() {
                function e() { if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'"); if (n(this, "_id", "_WeakMap_" + i() + "." + i()), 0 < arguments.length) throw new TypeError("WeakMap iterable is not supported") }

                function o(e, n) { if (!r(e) || !t.call(e, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof e) }

                function i() { return Math.random().toString().substring(2) } return n(e.prototype, "delete", function(e) { if (o(this, "delete"), !r(e)) return !1; var t = e[this._id]; return !(!t || t[0] !== e || (delete e[this._id], 0)) }), n(e.prototype, "get", function(e) { if (o(this, "get"), r(e)) { var t = e[this._id]; return t && t[0] === e ? t[1] : void 0 } }), n(e.prototype, "has", function(e) { if (o(this, "has"), !r(e)) return !1; var t = e[this._id]; return !(!t || t[0] !== e) }), n(e.prototype, "set", function(e, t) { if (o(this, "set"), !r(e)) throw new TypeError("Invalid value used as weak map key"); var i = e[this._id]; return i && i[0] === e ? i[1] = t : n(e, this._id, [e, t]), this }), n(e, "_polyfill", !0), e }() }

        function r(e) { return Object(e) === e } }("undefined" != typeof self ? self : "undefined" != typeof window ? window : u); var c, s = (function(e) { var t, n, r;
            r = function() { var e, t, n, r = Object.prototype.toString,
                    o = "undefined" != typeof setImmediate ? function(e) { return setImmediate(e) } : setTimeout; try { Object.defineProperty({}, "x", {}), e = function(e, t, n, r) { return Object.defineProperty(e, t, { value: n, writable: !0, configurable: !1 !== r }) } } catch (r) { e = function(e, t, n) { return e[t] = n, e } }

                function i(e, r) { n.add(e, r), t || (t = o(n.drain)) }

                function a(e) { var t, n = typeof e; return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t }

                function u() { for (var e = 0; e < this.chain.length; e++) c(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                    this.chain.length = 0 }

                function c(e, t, n) { var r, o; try {!1 === t ? n.reject(e.msg) : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = a(r)) ? o.call(r, n.resolve, n.reject) : n.resolve(r) } catch (e) { n.reject(e) } }

                function s(e) { var t = this;
                    t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, 0 < t.chain.length && i(u, t)) }

                function l(e, t, n, r) { for (var o = 0; o < t.length; o++) ! function(o) { e.resolve(t[o]).then(function(e) { n(o, e) }, r) }(o) }

                function f(e) { this.def = e, this.triggered = !1 }

                function d(e) { this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0 }

                function h(e) { if ("function" != typeof e) throw TypeError("Not a function"); if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1; var t = new d(this);
                    this.then = function(e, n) { var r = { success: "function" != typeof e || e, failure: "function" == typeof n && n }; return r.promise = new this.constructor(function(e, t) { if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                            r.resolve = e, r.reject = t }), t.chain.push(r), 0 !== t.state && i(u, t), r.promise }, this.catch = function(e) { return this.then(void 0, e) }; try { e.call(void 0, function(e) {
                            (function e(t) { var n, r = this; if (!r.triggered) { r.triggered = !0, r.def && (r = r.def); try {
                                        (n = a(t)) ? i(function() { var o = new f(r); try { n.call(t, function() { e.apply(o, arguments) }, function() { s.apply(o, arguments) }) } catch (e) { s.call(o, e) } }): (r.msg = t, r.state = 1, 0 < r.chain.length && i(u, r)) } catch (e) { s.call(new f(r), e) } } }).call(t, e) }, function(e) { s.call(t, e) }) } catch (e) { s.call(t, e) } }
                n = function() { var e, n, r;

                    function o(e, t) { this.fn = e, this.self = t, this.next = void 0 } return { add: function(t, i) { r = new o(t, i), n ? n.next = r : e = r, n = r, r = void 0 }, drain: function() { var r = e; for (e = n = t = void 0; r;) r.fn.call(r.self), r = r.next } } }(); var v = e({}, "constructor", h, !1); return e(h.prototype = v, "__NPO__", 0, !1), e(h, "resolve", function(e) { return e && "object" == typeof e && 1 === e.__NPO__ ? e : new this(function(t, n) { if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                        t(e) }) }), e(h, "reject", function(e) { return new this(function(t, n) { if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                        n(e) }) }), e(h, "all", function(e) { var t = this; return "[object Array]" != r.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function(n, r) { if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function"); var o = e.length,
                            i = Array(o),
                            a = 0;
                        l(t, e, function(e, t) { i[e] = t, ++a === o && n(i) }, r) }) }), e(h, "race", function(e) { var t = this; return "[object Array]" != r.call(e) ? t.reject(TypeError("Not an array")) : new t(function(n, r) { if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
                        l(t, e, function(e, t) { n(t) }, r) }) }), h }, (n = u)[t = "Promise"] = n[t] || r(), e.exports && (e.exports = n[t]) }(c = { exports: {} }), c.exports),
        l = new WeakMap;

    function f(e, t, n) { var r = l.get(e.element) || {};
        t in r || (r[t] = []), r[t].push(n), l.set(e.element, r) }

    function d(e, t) { return (l.get(e.element) || {})[t] || [] }

    function h(e, t, n) { var r = l.get(e.element) || {}; if (!r[t]) return !0; if (!n) return r[t] = [], l.set(e.element, r), !0; var o = r[t].indexOf(n); return -1 !== o && r[t].splice(o, 1), l.set(e.element, r), r[t] && 0 === r[t].length } var v = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

    function p(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; return v.reduce(function(t, n) { var r = e.getAttribute("data-vimeo-".concat(n)); return (r || "" === r) && (t[n] = "" === r ? 1 : r), t }, t) }

    function y(e, t) { var n = e.html; if (!t) throw new TypeError("An element must be provided"); if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe"); var r = document.createElement("div"); return r.innerHTML = n, t.appendChild(r.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe") }

    function m(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            n = 2 < arguments.length ? arguments[2] : void 0; return new Promise(function(o, i) { if (!r(e)) throw new TypeError("“".concat(e, "” is not a vimeo.com url.")); var a = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e)); for (var u in t) t.hasOwnProperty(u) && (a += "&".concat(u, "=").concat(encodeURIComponent(t[u]))); var c = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
            c.open("GET", a, !0), c.onload = function() { if (404 !== c.status)
                    if (403 !== c.status) try { var t = JSON.parse(c.responseText); if (403 === t.domain_status_code) return y(t, n), void i(new Error("“".concat(e, "” is not embeddable.")));
                        o(t) } catch (t) { i(t) } else i(new Error("“".concat(e, "” is not embeddable.")));
                    else i(new Error("“".concat(e, "” was not found."))) }, c.onerror = function() { var e = c.status ? " (".concat(c.status, ")") : "";
                i(new Error("There was an error fetching the embed code from Vimeo".concat(e, "."))) }, c.send() }) }

    function g(e) { if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) { return console.warn(e), {} }
        return e }

    function w(e, t, n) { if (e.element.contentWindow && e.element.contentWindow.postMessage) { var r = { method: t };
            void 0 !== n && (r.value = n); var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
            8 <= o && o < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin) } }

    function b(e, t) { var n, r = []; if ((t = g(t)).event) "error" === t.event && d(e, t.data.method).forEach(function(n) { var r = new Error(t.data.message);
            r.name = t.data.name, n.reject(r), h(e, t.data.method, n) }), r = d(e, "event:".concat(t.event)), n = t.data;
        else if (t.method) { var o = function(e, t) { var n = d(e, t); if (n.length < 1) return !1; var r = n.shift(); return h(e, t, r), r }(e, t.method);
            o && (r.push(o), n = t.value) }
        r.forEach(function(t) { try { if ("function" == typeof t) return void t.call(e, n);
                t.resolve(n) } catch (t) {} }) } var k = new WeakMap,
        E = new WeakMap,
        T = function() {
            function t(e) { var n, i = this,
                    a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; if (function(e, n) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this), window.jQuery && e instanceof jQuery && (1 < e.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "undefined" != typeof document && "string" == typeof e && (e = document.getElementById(e)), n = e, !Boolean(n && 1 === n.nodeType && "nodeName" in n && n.ownerDocument && n.ownerDocument.defaultView)) throw new TypeError("You must pass either a valid element or a valid id."); var u = e.ownerDocument.defaultView; if ("IFRAME" !== e.nodeName) { var c = e.querySelector("iframe");
                    c && (e = c) } if ("IFRAME" === e.nodeName && !r(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed."); if (k.has(e)) return k.get(e);
                this.element = e, this.origin = "*"; var f = new s(function(t, n) { var c = function(e) { if (r(e.origin) && i.element.contentWindow === e.source) { "*" === i.origin && (i.origin = e.origin); var o = g(e.data); if (o && "error" === o.event && o.data && "ready" === o.data.method) { var a = new Error(o.data.message); return a.name = o.data.name, void n(a) } var u = o && "ready" === o.event,
                                c = o && "ping" === o.method; if (u || c) return i.element.setAttribute("data-ready", "true"), void t();
                            b(i, o) } }; if (u.addEventListener ? u.addEventListener("message", c, !1) : u.attachEvent && u.attachEvent("onmessage", c), "IFRAME" !== i.element.nodeName) { var s = p(e, a);
                        m(o(s), s, e).then(function(t) { var n, r, o, a = y(t, e); return i.element = a, i._originalElement = e, n = e, r = a, o = l.get(n), l.set(r, o), l.delete(n), k.set(i.element, i), t }).catch(n) } }); return E.set(this, f), k.set(this.element, this), "IFRAME" === this.element.nodeName && w(this, "ping"), this } var i, a; return i = t, (a = [{ key: "callMethod", value: function(e) { var t = this,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; return new s(function(r, o) { return t.ready().then(function() { f(t, e, { resolve: r, reject: o }), w(t, e, n) }).catch(o) }) } }, { key: "get", value: function(e) { var t = this; return new s(function(r, o) { return e = n(e, "get"), t.ready().then(function() { f(t, e, { resolve: r, reject: o }), w(t, e) }).catch(o) }) } }, { key: "set", value: function(e, t) { var r = this; return new s(function(o, i) { if (e = n(e, "set"), null == t) throw new TypeError("There must be a value to set."); return r.ready().then(function() { f(r, e, { resolve: o, reject: i }), w(r, e, t) }).catch(i) }) } }, { key: "on", value: function(e, t) { if (!e) throw new TypeError("You must pass an event name."); if (!t) throw new TypeError("You must pass a callback function."); if ("function" != typeof t) throw new TypeError("The callback must be a function.");
                    0 === d(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch(function() {}), f(this, "event:".concat(e), t) } }, { key: "off", value: function(e, t) { if (!e) throw new TypeError("You must pass an event name."); if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                    h(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch(function(e) {}) } }, { key: "loadVideo", value: function(e) { return this.callMethod("loadVideo", e) } }, { key: "ready", value: function() { var e = E.get(this) || new s(function(e, t) { t(new Error("Unknown player. Probably unloaded.")) }); return s.resolve(e) } }, { key: "addCuePoint", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; return this.callMethod("addCuePoint", { time: e, data: t }) } }, { key: "removeCuePoint", value: function(e) { return this.callMethod("removeCuePoint", e) } }, { key: "enableTextTrack", value: function(e, t) { if (!e) throw new TypeError("You must pass a language."); return this.callMethod("enableTextTrack", { language: e, kind: t }) } }, { key: "disableTextTrack", value: function() { return this.callMethod("disableTextTrack") } }, { key: "pause", value: function() { return this.callMethod("pause") } }, { key: "play", value: function() { return this.callMethod("play") } }, { key: "unload", value: function() { return this.callMethod("unload") } }, { key: "destroy", value: function() { var e = this; return new s(function(t) { E.delete(e), k.delete(e.element), e._originalElement && (k.delete(e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && e.element.parentNode.removeChild(e.element), t() }) } }, { key: "getAutopause", value: function() { return this.get("autopause") } }, { key: "setAutopause", value: function(e) { return this.set("autopause", e) } }, { key: "getBuffered", value: function() { return this.get("buffered") } }, { key: "getColor", value: function() { return this.get("color") } }, { key: "setColor", value: function(e) { return this.set("color", e) } }, { key: "getCuePoints", value: function() { return this.get("cuePoints") } }, { key: "getCurrentTime", value: function() { return this.get("currentTime") } }, { key: "setCurrentTime", value: function(e) { return this.set("currentTime", e) } }, { key: "getDuration", value: function() { return this.get("duration") } }, { key: "getEnded", value: function() { return this.get("ended") } }, { key: "getLoop", value: function() { return this.get("loop") } }, { key: "setLoop", value: function(e) { return this.set("loop", e) } }, { key: "setMuted", value: function(e) { return this.set("muted", e) } }, { key: "getMuted", value: function() { return this.get("muted") } }, { key: "getPaused", value: function() { return this.get("paused") } }, { key: "getPlaybackRate", value: function() { return this.get("playbackRate") } }, { key: "setPlaybackRate", value: function(e) { return this.set("playbackRate", e) } }, { key: "getPlayed", value: function() { return this.get("played") } }, { key: "getSeekable", value: function() { return this.get("seekable") } }, { key: "getSeeking", value: function() { return this.get("seeking") } }, { key: "getTextTracks", value: function() { return this.get("textTracks") } }, { key: "getVideoEmbedCode", value: function() { return this.get("videoEmbedCode") } }, { key: "getVideoId", value: function() { return this.get("videoId") } }, { key: "getVideoTitle", value: function() { return this.get("videoTitle") } }, { key: "getVideoWidth", value: function() { return this.get("videoWidth") } }, { key: "getVideoHeight", value: function() { return this.get("videoHeight") } }, { key: "getVideoUrl", value: function() { return this.get("videoUrl") } }, { key: "getVolume", value: function() { return this.get("volume") } }, { key: "setVolume", value: function(e) { return this.set("volume", e) } }]) && e(i.prototype, a), t }(); return t || (function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document,
            t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
            n = function(e) { "console" in window && console.error && console.error("There was an error creating an embed: ".concat(e)) };
        t.forEach(function(e) { try { if (null !== e.getAttribute("data-vimeo-defer")) return; var t = p(e);
                m(o(t), t, e).then(function(t) { return y(t, e) }).catch(n) } catch (t) { n(t) } }) }(), function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document; if (!window.VimeoPlayerResizeEmbeds_) { window.VimeoPlayerResizeEmbeds_ = !0; var t = function(t) { if (r(t.origin) && t.data && "spacechange" === t.data.event)
                    for (var n = e.querySelectorAll("iframe"), o = 0; o < n.length; o++)
                        if (n[o].contentWindow === t.source) { n[o].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px"); break } };
            window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent && window.attachEvent("onmessage", t) } }()), T });