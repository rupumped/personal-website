! function(n) {
    function t(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return n[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var e = {};
    return t.m = n, t.c = e, t.p = "https://cdn2.editmysite.com/js/", t.p = "https://" + window.ASSETS_BASE + "/js/" || t.p, t(0)
}({
    0: function(n, t, e) {
        n.exports = e(612)
    },
    1: function(n, t, e) {
        var i;
        i = function() {
            return void 0 !== window.Weebly && void 0 !== window.Weebly.jQuery ? window.Weebly.jQuery : window.jQuery
        }.call(t, e, t, n), !(void 0 !== i && (n.exports = i))
    },
    2: function(n, t, e) {
        var i, r;
        i = [e(1)], r = function(n) {
            return window.Weebly = window._W = window._W || {}, window._W.utl = window._W.utl || function(n) {
                return window._W.failedTls = window._W.failedTls || [], window._W.failedTls.push(n), n
            }, window._W.ftl = window._W.ftl || function(n) {
                return window._W.failedFtls = window._W.failedFtls || [], window._W.failedFtls.push(n), ""
            }, window._W.utl = window._W.utl || function(n) {
                return window._W.failedUtls = window._W.failedUtls || [], window._W.failedUtls.push(n), ""
            }, window._W.stl = window._W.stl || function(n) {
                return window._W.failedStls = window._W.failedStls || [], window._W.failedStls.push(n), ""
            }, window._W.setCookie = function(n, t, e) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * e * 60 * 60 * 1e3);
                var r = "expires=" + i.toUTCString();
                document.cookie = n + "=" + t + "; " + r
            }, window._W.clearCookie = function(n) {
                window._W.setCookie(n, "", -1)
            }, window._W.getCookie = function(n) {
                for (var t = n + "=", e = document.cookie.split(";"), i = 0; i < e.length; i++) {
                    for (var r = e[i];
                        " " == r.charAt(0);) r = r.substring(1);
                    if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
                }
                return ""
            }, window._W.jQuery = n, window._W.RECAPTCHA_PUBLIC_KEY = window.RECAPTCHA_PUBLIC_KEY = "6Lf4O9USAAAAAOSa9cF4SEtxBcjrwrLe1_yP00ke", window._W.INVISIBLE_RECAPTCHA_PUBLIC_KEY = window.INVISIBLE_RECAPTCHA_PUBLIC_KEY = "6LfRSRsUAAAAAKZnbFLRh9pFqexMBpUkku4TAYM7", window._W
        }.apply(t, i), !(void 0 !== r && (n.exports = r))
    },
    3: function(n, t, e) {
        (function(t) {
            n.exports = t._ = e(35)
        }).call(t, function() {
            return this
        }())
    },
    35: function(n, t, e) {
        var i, r;
        (function() {
            function e(n) {
                function t(t, e, i, r, o, a) {
                    for (; o >= 0 && o < a; o += n) {
                        var s = r ? r[o] : o;
                        i = e(i, t[s], s, t)
                    }
                    return i
                }
                return function(e, i, r, o) {
                    i = k(i, o, 4);
                    var a = !T(e) && _.keys(e),
                        s = (a || e).length,
                        l = n > 0 ? 0 : s - 1;
                    return arguments.length < 3 && (r = e[a ? a[l] : l], l += n), t(e, i, r, a, l, s)
                }
            }

            function o(n) {
                return function(t, e, i) {
                    e = A(e, i);
                    for (var r = W(t), o = n > 0 ? 0 : r - 1; o >= 0 && o < r; o += n)
                        if (e(t[o], o, t)) return o;
                    return -1
                }
            }

            function a(n, t, e) {
                return function(i, r, o) {
                    var a = 0,
                        s = W(i);
                    if ("number" == typeof o) n > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
                    else if (e && o && s) return o = e(i, r), i[o] === r ? o : -1;
                    if (r !== r) return o = t(h.call(i, a, s), _.isNaN), o >= 0 ? o + a : -1;
                    for (o = n > 0 ? a : s - 1; o >= 0 && o < s; o += n)
                        if (i[o] === r) return o;
                    return -1
                }
            }

            function s(n, t) {
                var e = R.length,
                    i = n.constructor,
                    r = _.isFunction(i) && i.prototype || d,
                    o = "constructor";
                for (_.has(n, o) && !_.contains(t, o) && t.push(o); e--;) o = R[e], o in n && n[o] !== r[o] && !_.contains(t, o) && t.push(o)
            }
            var l = this,
                u = l._,
                c = Array.prototype,
                d = Object.prototype,
                f = Function.prototype,
                p = c.push,
                h = c.slice,
                v = d.toString,
                w = d.hasOwnProperty,
                g = Array.isArray,
                m = Object.keys,
                y = f.bind,
                b = Object.create,
                x = function() {},
                _ = function(n) {
                    return n instanceof _ ? n : this instanceof _ ? void(this._wrapped = n) : new _(n)
                };
            "undefined" != typeof n && n.exports && (t = n.exports = _), t._ = _, _.VERSION = "1.8.3";
            var k = function(n, t, e) {
                    if (void 0 === t) return n;
                    switch (null == e ? 3 : e) {
                        case 1:
                            return function(e) {
                                return n.call(t, e)
                            };
                        case 2:
                            return function(e, i) {
                                return n.call(t, e, i)
                            };
                        case 3:
                            return function(e, i, r) {
                                return n.call(t, e, i, r)
                            };
                        case 4:
                            return function(e, i, r, o) {
                                return n.call(t, e, i, r, o)
                            }
                    }
                    return function() {
                        return n.apply(t, arguments)
                    }
                },
                A = function(n, t, e) {
                    return null == n ? _.identity : _.isFunction(n) ? k(n, t, e) : _.isObject(n) ? _.matcher(n) : _.property(n)
                };
            _.iteratee = function(n, t) {
                return A(n, t, 1 / 0)
            };
            var M = function(n, t) {
                    return function(e) {
                        var i = arguments.length;
                        if (i < 2 || null == e) return e;
                        for (var r = 1; r < i; r++)
                            for (var o = arguments[r], a = n(o), s = a.length, l = 0; l < s; l++) {
                                var u = a[l];
                                t && void 0 !== e[u] || (e[u] = o[u])
                            }
                        return e
                    }
                },
                S = function(n) {
                    if (!_.isObject(n)) return {};
                    if (b) return b(n);
                    x.prototype = n;
                    var t = new x;
                    return x.prototype = null, t
                },
                j = function(n) {
                    return function(t) {
                        return null == t ? void 0 : t[n]
                    }
                },
                E = Math.pow(2, 53) - 1,
                W = j("length"),
                T = function(n) {
                    var t = W(n);
                    return "number" == typeof t && t >= 0 && t <= E
                };
            _.each = _.forEach = function(n, t, e) {
                t = k(t, e);
                var i, r;
                if (T(n))
                    for (i = 0, r = n.length; i < r; i++) t(n[i], i, n);
                else {
                    var o = _.keys(n);
                    for (i = 0, r = o.length; i < r; i++) t(n[o[i]], o[i], n)
                }
                return n
            }, _.map = _.collect = function(n, t, e) {
                t = A(t, e);
                for (var i = !T(n) && _.keys(n), r = (i || n).length, o = Array(r), a = 0; a < r; a++) {
                    var s = i ? i[a] : a;
                    o[a] = t(n[s], s, n)
                }
                return o
            }, _.reduce = _.foldl = _.inject = e(1), _.reduceRight = _.foldr = e(-1), _.find = _.detect = function(n, t, e) {
                var i;
                if (i = T(n) ? _.findIndex(n, t, e) : _.findKey(n, t, e), void 0 !== i && i !== -1) return n[i]
            }, _.filter = _.select = function(n, t, e) {
                var i = [];
                return t = A(t, e), _.each(n, function(n, e, r) {
                    t(n, e, r) && i.push(n)
                }), i
            }, _.reject = function(n, t, e) {
                return _.filter(n, _.negate(A(t)), e)
            }, _.every = _.all = function(n, t, e) {
                t = A(t, e);
                for (var i = !T(n) && _.keys(n), r = (i || n).length, o = 0; o < r; o++) {
                    var a = i ? i[o] : o;
                    if (!t(n[a], a, n)) return !1
                }
                return !0
            }, _.some = _.any = function(n, t, e) {
                t = A(t, e);
                for (var i = !T(n) && _.keys(n), r = (i || n).length, o = 0; o < r; o++) {
                    var a = i ? i[o] : o;
                    if (t(n[a], a, n)) return !0
                }
                return !1
            }, _.contains = _.includes = _.include = function(n, t, e, i) {
                return T(n) || (n = _.values(n)), ("number" != typeof e || i) && (e = 0), _.indexOf(n, t, e) >= 0
            }, _.invoke = function(n, t) {
                var e = h.call(arguments, 2),
                    i = _.isFunction(t);
                return _.map(n, function(n) {
                    var r = i ? t : n[t];
                    return null == r ? r : r.apply(n, e)
                })
            }, _.pluck = function(n, t) {
                return _.map(n, _.property(t))
            }, _.where = function(n, t) {
                return _.filter(n, _.matcher(t))
            }, _.findWhere = function(n, t) {
                return _.find(n, _.matcher(t))
            }, _.max = function(n, t, e) {
                var i = -(1 / 0),
                    r = -(1 / 0),
                    o, a;
                if (null == t && null != n) {
                    n = T(n) ? n : _.values(n);
                    for (var s = 0, l = n.length; s < l; s++) o = n[s], o > i && (i = o)
                } else t = A(t, e), _.each(n, function(n, e, o) {
                    a = t(n, e, o), (a > r || a === -(1 / 0) && i === -(1 / 0)) && (i = n, r = a)
                });
                return i
            }, _.min = function(n, t, e) {
                var i = 1 / 0,
                    r = 1 / 0,
                    o, a;
                if (null == t && null != n) {
                    n = T(n) ? n : _.values(n);
                    for (var s = 0, l = n.length; s < l; s++) o = n[s], o < i && (i = o)
                } else t = A(t, e), _.each(n, function(n, e, o) {
                    a = t(n, e, o), (a < r || a === 1 / 0 && i === 1 / 0) && (i = n, r = a)
                });
                return i
            }, _.shuffle = function(n) {
                for (var t = T(n) ? n : _.values(n), e = t.length, i = Array(e), r = 0, o; r < e; r++) o = _.random(0, r), o !== r && (i[r] = i[o]), i[o] = t[r];
                return i
            }, _.sample = function(n, t, e) {
                return null == t || e ? (T(n) || (n = _.values(n)), n[_.random(n.length - 1)]) : _.shuffle(n).slice(0, Math.max(0, t))
            }, _.sortBy = function(n, t, e) {
                return t = A(t, e), _.pluck(_.map(n, function(n, e, i) {
                    return {
                        value: n,
                        index: e,
                        criteria: t(n, e, i)
                    }
                }).sort(function(n, t) {
                    var e = n.criteria,
                        i = t.criteria;
                    if (e !== i) {
                        if (e > i || void 0 === e) return 1;
                        if (e < i || void 0 === i) return -1
                    }
                    return n.index - t.index
                }), "value")
            };
            var I = function(n) {
                return function(t, e, i) {
                    var r = {};
                    return e = A(e, i), _.each(t, function(i, o) {
                        var a = e(i, o, t);
                        n(r, i, a)
                    }), r
                }
            };
            _.groupBy = I(function(n, t, e) {
                _.has(n, e) ? n[e].push(t) : n[e] = [t]
            }), _.indexBy = I(function(n, t, e) {
                n[e] = t
            }), _.countBy = I(function(n, t, e) {
                _.has(n, e) ? n[e]++ : n[e] = 1
            }), _.toArray = function(n) {
                return n ? _.isArray(n) ? h.call(n) : T(n) ? _.map(n, _.identity) : _.values(n) : []
            }, _.size = function(n) {
                return null == n ? 0 : T(n) ? n.length : _.keys(n).length
            }, _.partition = function(n, t, e) {
                t = A(t, e);
                var i = [],
                    r = [];
                return _.each(n, function(n, e, o) {
                    (t(n, e, o) ? i : r).push(n)
                }), [i, r]
            }, _.first = _.head = _.take = function(n, t, e) {
                if (null != n) return null == t || e ? n[0] : _.initial(n, n.length - t)
            }, _.initial = function(n, t, e) {
                return h.call(n, 0, Math.max(0, n.length - (null == t || e ? 1 : t)))
            }, _.last = function(n, t, e) {
                if (null != n) return null == t || e ? n[n.length - 1] : _.rest(n, Math.max(0, n.length - t))
            }, _.rest = _.tail = _.drop = function(n, t, e) {
                return h.call(n, null == t || e ? 1 : t)
            }, _.compact = function(n) {
                return _.filter(n, _.identity)
            };
            var C = function(n, t, e, i) {
                for (var r = [], o = 0, a = i || 0, s = W(n); a < s; a++) {
                    var l = n[a];
                    if (T(l) && (_.isArray(l) || _.isArguments(l))) {
                        t || (l = C(l, t, e));
                        var u = 0,
                            c = l.length;
                        for (r.length += c; u < c;) r[o++] = l[u++]
                    } else e || (r[o++] = l)
                }
                return r
            };
            _.flatten = function(n, t) {
                return C(n, t, !1)
            }, _.without = function(n) {
                return _.difference(n, h.call(arguments, 1))
            }, _.uniq = _.unique = function(n, t, e, i) {
                _.isBoolean(t) || (i = e, e = t, t = !1), null != e && (e = A(e, i));
                for (var r = [], o = [], a = 0, s = W(n); a < s; a++) {
                    var l = n[a],
                        u = e ? e(l, a, n) : l;
                    t ? (a && o === u || r.push(l), o = u) : e ? _.contains(o, u) || (o.push(u), r.push(l)) : _.contains(r, l) || r.push(l)
                }
                return r
            }, _.union = function() {
                return _.uniq(C(arguments, !0, !0))
            }, _.intersection = function(n) {
                for (var t = [], e = arguments.length, i = 0, r = W(n); i < r; i++) {
                    var o = n[i];
                    if (!_.contains(t, o)) {
                        for (var a = 1; a < e && _.contains(arguments[a], o); a++);
                        a === e && t.push(o)
                    }
                }
                return t
            }, _.difference = function(n) {
                var t = C(arguments, !0, !0, 1);
                return _.filter(n, function(n) {
                    return !_.contains(t, n)
                })
            }, _.zip = function() {
                return _.unzip(arguments)
            }, _.unzip = function(n) {
                for (var t = n && _.max(n, W).length || 0, e = Array(t), i = 0; i < t; i++) e[i] = _.pluck(n, i);
                return e
            }, _.object = function(n, t) {
                for (var e = {}, i = 0, r = W(n); i < r; i++) t ? e[n[i]] = t[i] : e[n[i][0]] = n[i][1];
                return e
            }, _.findIndex = o(1), _.findLastIndex = o(-1), _.sortedIndex = function(n, t, e, i) {
                e = A(e, i, 1);
                for (var r = e(t), o = 0, a = W(n); o < a;) {
                    var s = Math.floor((o + a) / 2);
                    e(n[s]) < r ? o = s + 1 : a = s
                }
                return o
            }, _.indexOf = a(1, _.findIndex, _.sortedIndex), _.lastIndexOf = a(-1, _.findLastIndex), _.range = function(n, t, e) {
                null == t && (t = n || 0, n = 0), e = e || 1;
                for (var i = Math.max(Math.ceil((t - n) / e), 0), r = Array(i), o = 0; o < i; o++, n += e) r[o] = n;
                return r
            };
            var P = function(n, t, e, i, r) {
                if (!(i instanceof t)) return n.apply(e, r);
                var o = S(n.prototype),
                    a = n.apply(o, r);
                return _.isObject(a) ? a : o
            };
            _.bind = function(n, t) {
                if (y && n.bind === y) return y.apply(n, h.call(arguments, 1));
                if (!_.isFunction(n)) throw new TypeError("Bind must be called on a function");
                var e = h.call(arguments, 2),
                    i = function() {
                        return P(n, i, t, this, e.concat(h.call(arguments)))
                    };
                return i
            }, _.partial = function(n) {
                var t = h.call(arguments, 1),
                    e = function() {
                        for (var i = 0, r = t.length, o = Array(r), a = 0; a < r; a++) o[a] = t[a] === _ ? arguments[i++] : t[a];
                        for (; i < arguments.length;) o.push(arguments[i++]);
                        return P(n, e, this, this, o)
                    };
                return e
            }, _.bindAll = function(n) {
                var t, e = arguments.length,
                    i;
                if (e <= 1) throw new Error("bindAll must be passed function names");
                for (t = 1; t < e; t++) i = arguments[t], n[i] = _.bind(n[i], n);
                return n
            }, _.memoize = function(n, t) {
                var e = function(i) {
                    var r = e.cache,
                        o = "" + (t ? t.apply(this, arguments) : i);
                    return _.has(r, o) || (r[o] = n.apply(this, arguments)), r[o]
                };
                return e.cache = {}, e
            }, _.delay = function(n, t) {
                var e = h.call(arguments, 2);
                return setTimeout(function() {
                    return n.apply(null, e)
                }, t)
            }, _.defer = _.partial(_.delay, _, 1), _.throttle = function(n, t, e) {
                var i, r, o, a = null,
                    s = 0;
                e || (e = {});
                var l = function() {
                    s = e.leading === !1 ? 0 : _.now(), a = null, o = n.apply(i, r), a || (i = r = null)
                };
                return function() {
                    var u = _.now();
                    s || e.leading !== !1 || (s = u);
                    var c = t - (u - s);
                    return i = this, r = arguments, c <= 0 || c > t ? (a && (clearTimeout(a), a = null), s = u, o = n.apply(i, r), a || (i = r = null)) : a || e.trailing === !1 || (a = setTimeout(l, c)), o
                }
            }, _.debounce = function(n, t, e) {
                var i, r, o, a, s, l = function() {
                    var u = _.now() - a;
                    u < t && u >= 0 ? i = setTimeout(l, t - u) : (i = null, e || (s = n.apply(o, r), i || (o = r = null)))
                };
                return function() {
                    o = this, r = arguments, a = _.now();
                    var u = e && !i;
                    return i || (i = setTimeout(l, t)), u && (s = n.apply(o, r), o = r = null), s
                }
            }, _.wrap = function(n, t) {
                return _.partial(t, n)
            }, _.negate = function(n) {
                return function() {
                    return !n.apply(this, arguments)
                }
            }, _.compose = function() {
                var n = arguments,
                    t = n.length - 1;
                return function() {
                    for (var e = t, i = n[t].apply(this, arguments); e--;) i = n[e].call(this, i);
                    return i
                }
            }, _.after = function(n, t) {
                return function() {
                    if (--n < 1) return t.apply(this, arguments)
                }
            }, _.before = function(n, t) {
                var e;
                return function() {
                    return --n > 0 && (e = t.apply(this, arguments)), n <= 1 && (t = null), e
                }
            }, _.once = _.partial(_.before, 2);
            var O = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                R = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            _.keys = function(n) {
                if (!_.isObject(n)) return [];
                if (m) return m(n);
                var t = [];
                for (var e in n) _.has(n, e) && t.push(e);
                return O && s(n, t), t
            }, _.allKeys = function(n) {
                if (!_.isObject(n)) return [];
                var t = [];
                for (var e in n) t.push(e);
                return O && s(n, t), t
            }, _.values = function(n) {
                for (var t = _.keys(n), e = t.length, i = Array(e), r = 0; r < e; r++) i[r] = n[t[r]];
                return i
            }, _.mapObject = function(n, t, e) {
                t = A(t, e);
                for (var i = _.keys(n), r = i.length, o = {}, a, s = 0; s < r; s++) a = i[s], o[a] = t(n[a], a, n);
                return o
            }, _.pairs = function(n) {
                for (var t = _.keys(n), e = t.length, i = Array(e), r = 0; r < e; r++) i[r] = [t[r], n[t[r]]];
                return i
            }, _.invert = function(n) {
                for (var t = {}, e = _.keys(n), i = 0, r = e.length; i < r; i++) t[n[e[i]]] = e[i];
                return t
            }, _.functions = _.methods = function(n) {
                var t = [];
                for (var e in n) _.isFunction(n[e]) && t.push(e);
                return t.sort()
            }, _.extend = M(_.allKeys), _.extendOwn = _.assign = M(_.keys), _.findKey = function(n, t, e) {
                t = A(t, e);
                for (var i = _.keys(n), r, o = 0, a = i.length; o < a; o++)
                    if (r = i[o], t(n[r], r, n)) return r
            }, _.pick = function(n, t, e) {
                var i = {},
                    r = n,
                    o, a;
                if (null == r) return i;
                _.isFunction(t) ? (a = _.allKeys(r), o = k(t, e)) : (a = C(arguments, !1, !1, 1), o = function(n, t, e) {
                    return t in e
                }, r = Object(r));
                for (var s = 0, l = a.length; s < l; s++) {
                    var u = a[s],
                        c = r[u];
                    o(c, u, r) && (i[u] = c)
                }
                return i
            }, _.omit = function(n, t, e) {
                if (_.isFunction(t)) t = _.negate(t);
                else {
                    var i = _.map(C(arguments, !1, !1, 1), String);
                    t = function(n, t) {
                        return !_.contains(i, t)
                    }
                }
                return _.pick(n, t, e)
            }, _.defaults = M(_.allKeys, !0), _.create = function(n, t) {
                var e = S(n);
                return t && _.extendOwn(e, t), e
            }, _.clone = function(n) {
                return _.isObject(n) ? _.isArray(n) ? n.slice() : _.extend({}, n) : n
            }, _.tap = function(n, t) {
                return t(n), n
            }, _.isMatch = function(n, t) {
                var e = _.keys(t),
                    i = e.length;
                if (null == n) return !i;
                for (var r = Object(n), o = 0; o < i; o++) {
                    var a = e[o];
                    if (t[a] !== r[a] || !(a in r)) return !1
                }
                return !0
            };
            var L = function(n, t, e, i) {
                if (n === t) return 0 !== n || 1 / n === 1 / t;
                if (null == n || null == t) return n === t;
                n instanceof _ && (n = n._wrapped), t instanceof _ && (t = t._wrapped);
                var r = v.call(n);
                if (r !== v.call(t)) return !1;
                switch (r) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + n == "" + t;
                    case "[object Number]":
                        return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +n === +t
                }
                var o = "[object Array]" === r;
                if (!o) {
                    if ("object" != typeof n || "object" != typeof t) return !1;
                    var a = n.constructor,
                        s = t.constructor;
                    if (a !== s && !(_.isFunction(a) && a instanceof a && _.isFunction(s) && s instanceof s) && "constructor" in n && "constructor" in t) return !1
                }
                e = e || [], i = i || [];
                for (var l = e.length; l--;)
                    if (e[l] === n) return i[l] === t;
                if (e.push(n), i.push(t), o) {
                    if (l = n.length, l !== t.length) return !1;
                    for (; l--;)
                        if (!L(n[l], t[l], e, i)) return !1
                } else {
                    var u = _.keys(n),
                        c;
                    if (l = u.length, _.keys(t).length !== l) return !1;
                    for (; l--;)
                        if (c = u[l], !_.has(t, c) || !L(n[c], t[c], e, i)) return !1
                }
                return e.pop(), i.pop(), !0
            };
            _.isEqual = function(n, t) {
                return L(n, t)
            }, _.isEmpty = function(n) {
                return null == n || (T(n) && (_.isArray(n) || _.isString(n) || _.isArguments(n)) ? 0 === n.length : 0 === _.keys(n).length)
            }, _.isElement = function(n) {
                return !(!n || 1 !== n.nodeType)
            }, _.isArray = g || function(n) {
                return "[object Array]" === v.call(n)
            }, _.isObject = function(n) {
                var t = typeof n;
                return "function" === t || "object" === t && !!n
            }, _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
                _["is" + n] = function(t) {
                    return v.call(t) === "[object " + n + "]"
                }
            }), _.isArguments(arguments) || (_.isArguments = function(n) {
                return _.has(n, "callee")
            }), "function" != typeof /./ && "object" != typeof Int8Array && (_.isFunction = function(n) {
                return "function" == typeof n || !1
            }), _.isFinite = function(n) {
                return isFinite(n) && !isNaN(parseFloat(n))
            }, _.isNaN = function(n) {
                return _.isNumber(n) && n !== +n
            }, _.isBoolean = function(n) {
                return n === !0 || n === !1 || "[object Boolean]" === v.call(n)
            }, _.isNull = function(n) {
                return null === n
            }, _.isUndefined = function(n) {
                return void 0 === n
            }, _.has = function(n, t) {
                return null != n && w.call(n, t)
            }, _.noConflict = function() {
                return l._ = u, this
            }, _.identity = function(n) {
                return n
            }, _.constant = function(n) {
                return function() {
                    return n
                }
            }, _.noop = function() {}, _.property = j, _.propertyOf = function(n) {
                return null == n ? function() {} : function(t) {
                    return n[t]
                }
            }, _.matcher = _.matches = function(n) {
                return n = _.extendOwn({}, n),
                    function(t) {
                        return _.isMatch(t, n)
                    }
            }, _.times = function(n, t, e) {
                var i = Array(Math.max(0, n));
                t = k(t, e, 1);
                for (var r = 0; r < n; r++) i[r] = t(r);
                return i
            }, _.random = function(n, t) {
                return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
            }, _.now = Date.now || function() {
                return (new Date).getTime()
            };
            var F = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                B = _.invert(F),
                H = function(n) {
                    var t = function(t) {
                            return n[t]
                        },
                        e = "(?:" + _.keys(n).join("|") + ")",
                        i = RegExp(e),
                        r = RegExp(e, "g");
                    return function(n) {
                        return n = null == n ? "" : "" + n, i.test(n) ? n.replace(r, t) : n
                    }
                };
            _.escape = H(F), _.unescape = H(B), _.result = function(n, t, e) {
                var i = null == n ? void 0 : n[t];
                return void 0 === i && (i = e), _.isFunction(i) ? i.call(n) : i
            };
            var U = 0;
            _.uniqueId = function(n) {
                var t = ++U + "";
                return n ? n + t : t
            }, _.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var D = /(.)^/,
                N = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                z = /\\|'|\r|\n|\u2028|\u2029/g,
                Y = function(n) {
                    return "\\" + N[n]
                };
            _.template = function(n, t, e) {
                !t && e && (t = e), t = _.defaults({}, t, _.templateSettings);
                var i = RegExp([(t.escape || D).source, (t.interpolate || D).source, (t.evaluate || D).source].join("|") + "|$", "g"),
                    r = 0,
                    o = "__p+='";
                n.replace(i, function(t, e, i, a, s) {
                    return o += n.slice(r, s).replace(z, Y), r = s + t.length, e ? o += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
                }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    var a = new Function(t.variable || "obj", "_", o)
                } catch (n) {
                    throw n.source = o, n
                }
                var s = function(n) {
                        return a.call(this, n, _)
                    },
                    l = t.variable || "obj";
                return s.source = "function(" + l + "){\n" + o + "}", s
            }, _.chain = function(n) {
                var t = _(n);
                return t._chain = !0, t
            };
            var q = function(n, t) {
                return n._chain ? _(t).chain() : t
            };
            _.mixin = function(n) {
                _.each(_.functions(n), function(t) {
                    var e = _[t] = n[t];
                    _.prototype[t] = function() {
                        var n = [this._wrapped];
                        return p.apply(n, arguments), q(this, e.apply(_, n))
                    }
                })
            }, _.mixin(_), _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
                var t = c[n];
                _.prototype[n] = function() {
                    var e = this._wrapped;
                    return t.apply(e, arguments), "shift" !== n && "splice" !== n || 0 !== e.length || delete e[0], q(this, e)
                }
            }), _.each(["concat", "join", "slice"], function(n) {
                var t = c[n];
                _.prototype[n] = function() {
                    return q(this, t.apply(this._wrapped, arguments))
                }
            }), _.prototype.value = function() {
                return this._wrapped
            }, _.prototype.valueOf = _.prototype.toJSON = _.prototype.value, _.prototype.toString = function() {
                return "" + this._wrapped
            }, i = [], r = function() {
                return _
            }.apply(t, i), !(void 0 !== r && (n.exports = r))
        }).call(this)
    },
    63: function(n, t, e) {
        var i, r;
        i = [e(2)], r = function(n) {
            return {
                chromeless: !1,
                content_field_js_render: !1,
                defaultPlaceholderText: n.stl("javascript.editor.config_1"),
                areaDefaultPlaceholderText: {
                    phone: n.stl("javascript.editor.config_2"),
                    headline: n.stl("javascript.editor.config_3"),
                    "headline-paragraph": n.stl("javascript.editor.config_4")
                }
            }
        }.apply(t, i), !(void 0 !== r && (n.exports = r))
    },
    612: function(n, t, e) {
        var i, r;
        i = [e(1), e(3), e(2), e(63)], r = function(n, t, e, i) {
            function r(n) {
                var t = o(n);
                t && t.render()
            }

            function o(t) {
                var e = n('[class*="wsite-header"]:not(.wsite-header-section)');
                e.not(":first").hide();
                var i = e.css("background", "none")[0];
                if (i) {
                    var r = new p(i, {
                        fillDimensions: !0,
                        autoplay: !0,
                        speed: t.speed || 5,
                        slide: t.slide,
                        transition: t.transition,
                        showControls: !0,
                        showPlayButton: !1,
                        dots: t.dots,
                        dotPosition: t.dotPosition,
                        arrows: t.arrows,
                        forceSideArrows: !0,
                        images: t.images || t.slides,
                        aspectRatio: t.aspectRatio || "auto",
                        useAspectRatio: t.useAspectRatio || !1
                    });
                    return r
                }
            }

            function a(n) {
                return m[n].getPhotos()
            }

            function s() {
                var t = !1;
                return n.each(m, function(n, e) {
                    e.updateSize(), t = !0
                }), t
            }

            function l(n, t) {
                return g[n] = f(t), "<div id='" + n + "-slideshow' style='height:1000px'></div>"
            }

            function u(t) {
                var e = n("#" + t + "-slideshow"),
                    i = new p(e, g[t]);
                m[t] = i, i.render(), e.height("")
            }

            function c(t, e) {
                if (m[t]) {
                    m[t].destroy();
                    var i = g[t];
                    i.images = e, m[t] = new p(n("#" + t + "-slideshow"), i), m[t].render()
                }
            }

            function d(t) {
                var e = f(t),
                    i = e.elementID,
                    r = new p(n("#" + i + "-slideshow"), e);
                m[i] = r, r.render()
            }

            function f(n) {
                var t = n.nav,
                    e = 1;
                return "double_thumbnails" == t ? (t = "thumbnails", e = 2) : "none" == t && (t = !1), {
                    elementID: n.elementID,
                    links: t,
                    linkLocation: n.navLocation,
                    linkTiers: e,
                    captionLocation: n.captionLocation,
                    slide: "slide" == n.transition,
                    transition: n.transition,
                    autoplay: parseInt(n.autoplay),
                    speed: parseInt(n.speed),
                    aspectRatio: n.aspectRatio || "auto",
                    showControls: "false" !== n.showControls,
                    randomStart: "true" === n.randomStart,
                    images: n.images || []
                }
            }

            function p(i, r) {
                function o() {
                    i.addClass("wslide").html("<table class='wslide-main'><tbody></tbody></table>");
                    var t = i.find("table"),
                        e = i.find("tbody"),
                        o = l();
                    if (y || o.on("mouseover", function() {
                            r.showControls && (clearTimeout(Qn), Nn || tn(Ln.queue() && Ln.queue().length))
                        }).on("mouseout", function() {
                            Qn = setTimeout(function() {
                                on()
                            }, 1e3)
                        }), r.fillDimensions && r.useAspectRatio && i.css({
                            height: "auto"
                        }), r.links && gn.length) {
                        jn = [];
                        var a = r.linkLocation;
                        In = "top" == a || "bottom" == a;
                        var s = g(),
                            u = n("<td class='wslide-link-cell'/>").append(s),
                            c = n("<td/>").append(o);
                        if (In) {
                            u.width("auto");
                            var d = n("<tr/>"),
                                f = n("<tr/>");
                            "top" == a ? (d.append(u), f.append(c)) : (d.append(c), f.append(u)), e.append(d), e.append(f)
                        } else {
                            var p = n("<tr/>");
                            "left" == a ? (p.append(u), p.append(c)) : (p.append(c), p.append(u)), e.append(p)
                        }
                    } else {
                        var p = n("<tr/>"),
                            h = n("<td/>");
                        h.append(o), p.append(h), e.append(p)
                    }
                    r.dots && (En = m()), E(), gn.length && F(r.randomStart ? Math.floor(Math.random() * gn.length) : 0), rn(), r.autoplay && Z(), n(window).on("resize", vn)
                }

                function a() {
                    i.empty(), r.fillDimensions && r.useAspectRatio && i.css("height", ""), i.removeClass("wslide"), i.css("background", ""), s()
                }

                function s() {
                    G(), n(window).off("resize", vn), hn()
                }

                function l() {
                    if (mn = n("<div class='wslide-content disable-user-select'>&nbsp;<div class='wslide-content-inner'><div class='wslide-slides'></div></div><div class='wslide-overlay-top-left disable-user-select'></div><div class='wslide-overlay-top-right disable-user-select'></div><div class='wslide-overlay-left disable-user-select'></div><div class='wslide-overlay-right disable-user-select'></div></div>"), yn = mn.find("div.wslide-slides"), Cn = mn.find("div.wslide-overlay-top-left"), Pn = mn.find("div.wslide-overlay-top-right"), On = mn.find("div.wslide-overlay-left"), Rn = mn.find("div.wslide-overlay-right"), Ln = Cn.add(Pn).add(On).add(Rn), gn.length > 1) {
                        var t = function() {
                                y && u(), G(), H()
                            },
                            e = function() {
                                y && u(), G(), U()
                            },
                            i = function() {
                                y && u()
                            };
                        y && mn.on("click", i);
                        var o = f(),
                            a = p();
                        r.showPlayButton !== !1 && Cn.append(c()).append(d()), r.arrows !== !1 && (r.slide || r.forceSideArrows ? (On.append(o).on("click", t), Rn.append(a).on("click", e)) : (o.on("click", t), a.on("click", e), Pn.append(o).append("&nbsp;").append(a)))
                    }
                    return Ln = Ln.find(".wslide-button-wrap"), mn
                }

                function u() {
                    clearTimeout(Qn), tn(Ln.queue().length), Qn = setTimeout(function() {
                        on()
                    }, 1e3)
                }

                function c() {
                    var t = n("<div class='wslide-button-wrap'><span class='wslide-play wslide-button disable-user-select'><span class='wslide-button-inner'>Play <span class='wslide-button-icon'></span></span><span class='wslide-button-bg'></span></span></div>");
                    return t.css({
                        display: "inline-block"
                    }), Hn = t.find(".wslide-play"), Hn.on("click", Z), t
                }

                function d() {
                    var t = n("<div class='wslide-button-wrap'><span class='wslide-pause wslide-button disable-user-select'><span class='wslide-button-inner'>Pause <span class='wslide-button-icon'></span></span><span class='wslide-button-bg'></span></span></div>");
                    return t.css({
                        display: "inline-block"
                    }), Un = t.find(".wslide-pause"), Un.on("click", G), t
                }

                function f() {
                    var t = n("<div class='wslide-button-wrap'><span class='wslide-prev wslide-button disable-user-select'><span class='wslide-button-inner'><span class='wslide-button-icon'></span></span><span class='wslide-button-bg'></span></span></div>");
                    return t.css({
                        display: "inline-block"
                    }), t
                }

                function p() {
                    var t = n("<div class='wslide-button-wrap'><span class='wslide-next wslide-button disable-user-select'><span class='wslide-button-inner'><span class='wslide-button-icon'></span></span><span class='wslide-button-bg'></span></span></div>");
                    return t.css({
                        display: "inline-block"
                    }), t
                }

                function g() {
                    var t = r.linkLocation,
                        e = r.linkTiers,
                        i = "wslide-links disable-user-select wslide-links-" + r.linkLocation;
                    r.links && (i += "thumbnails" == r.links ? " wslide-thumbnail-links" : " wslide-number-links"), Mn = n("<div class='" + i + "'><div class='wslide-links-inner'><table><tbody></tbody></table></div></div>"), y ? Mn.on("touchstart", N).on("touchmove", z) : Mn.on("mouseover", Y).on("mousemove", q).on("mouseout", X), Sn = Mn.children().first(), sn(Sn);
                    var o = Mn.find("tbody");
                    if (In) {
                        for (var a = [], s = 0; s < e; s++) a[s] = n("<tr/>"), o.append(a[s]);
                        for (var s = 0; s < gn.length; s++) a[s % e].append(M(gn[s], s))
                    } else
                        for (var l = gn.length, u = 0, s = 0; s < l; u++) {
                            for (var c = n("<tr/>"), d = 0; d < e && s < l; d++, s++) c.append(M(gn[s], s));
                            o.append(c)
                        }
                    return y && "undefined" != typeof whenPhotoSwipeLoaded && window.whenPhotoSwipeLoaded(function() {
                        window.Code.PhotoSwipe.attach(Mn.find("a").toArray(), {
                            captionAndToolbarFlipPosition: !0,
                            captionAndToolbarAutoHideDelay: 0,
                            loop: !1
                        })
                    }), Mn
                }

                function m() {
                    for (var t = n("<div class='wslide-dots'></div>"), e = 0; e < gn.length; e++)(function(e) {
                        t.append(n("<div class='wslide-dot' />").on("click", function() {
                            G(), F(e)
                        }))
                    })(e);
                    mn.append(t);
                    var o = r.dotPosition || "right";
                    return "left" == o ? t.css({
                        left: 10,
                        bottom: 10
                    }) : "center" == o ? t.css({
                        left: i.width() / 2 - t.width() / 2,
                        bottom: 10
                    }) : "right" == o && t.css({
                        right: 10,
                        bottom: 10
                    }), t
                }

                function M(e, i) {
                    var o = n("<td/>");
                    if ("numbers" == r.links) o.append("<a class='wslide-link wslide-link-number'><div class='wslide-link-inner1'><div class='wslide-link-inner2'>" + (i + 1) + "</div></div></a>");
                    else {
                        o.append("<a class='wslide-link wslide-link-thumbnail'><div class='wslide-link-inner1'><div class='wslide-link-inner2'><img style='visibility:hidden' /></div></div></a>");
                        var a = o.find("img");
                        setTimeout(function() {
                            w(a[0], h(e), function() {
                                P(a, e), a.css("visibility", "")
                            })
                        }, 0)
                    }
                    var s = o.find("a");
                    return y && "undefined" != typeof whenPhotoSwipeLoaded ? s.attr("href", v(e)).attr("title", t.unescape(e.caption)) : s.on("click", function() {
                        G(), F(i)
                    }), sn(s), jn[i] = s, o
                }

                function S(i, o, a) {
                    var s = !1,
                        l = i.link;
                    if (l) {
                        var u = l;
                        l = l.replace("weeblylink_new_window", ""), l != u && (s = !0)
                    }
                    var c = t.unescape(i.caption) ? "<div style='display:none;' class='wslide-caption " + ("top" == r.captionLocation ? "wslide-caption-top" : "wslide-caption-bottom") + "'><div class='wslide-caption-text'>" + t.unescape(i.caption) + "</div><div class='wslide-caption-bg'></div></div>" : "",
                        d = n("<div class='wslide-slide wslide-slide-loading'>" + (l ? "<a>" : "") + (r.fillDimensions ? c : "") + "<div class='wslide-slide-inner1'><div class='wslide-slide-inner2' style='visibility:hidden'><img/>" + (r.fillDimensions ? "" : c) + "</div></div>" + (l ? "</a>" : "") + "</div>");
                    d.find(".wslide-caption").css({
                        opacity: .99
                    }), d.hide(), yn.append(d);
                    var f = d.find("img"),
                        p = f.closest(".wslide-slide-inner2");
                    return bn[o] = d, xn[o] = f, An[o] = p, i.alt && f.attr("alt", i.alt), d.find("a").each(function(t, i) {
                        i = n(i), window.currentSite ? (i.attr("href", "#"), i.on("click", function() {
                            return !1
                        }), i.attr("title", e.utl("html.weebly.libraries.slideshow-jq_1"))) : l && (i.attr("href", l), s && i.attr("target", "_blank"))
                    }), w(f[0], v(i), function() {
                        d.removeClass("wslide-slide-loading"), _n[o] = f[0].width, kn[o] = f[0].height, 0 !== _n[o] && 0 !== kn[o] || (d.show(0), _n[o] = f[0].width, kn[o] = f[0].height, d.hide(0)), T(), O(o), o == Tn && (R(o), Fn && D()), p.css("visibility", ""), a && F(o)
                    }), d
                }

                function j(n, t) {
                    return 0 === t && n ? n : t
                }

                function E() {
                    C(), W()
                }

                function W() {
                    if (!J() && mn) {
                        Mn && !In && (Jn = j(Jn, Sn.outerWidth()), Mn.width(Jn)), T(), Mn && (Gn = j(Gn, Sn.outerWidth()), nt = j(nt, Sn.outerHeight()), In ? (Jn = Yn, Zn = nt, Mn.height(Zn), it = Jn - Gn, rt = 0) : (Zn = qn, Mn.height(Zn), it = Zn - nt, rt = 0));
                        var t = n(".wslide-dots"),
                            e = qn < 200 ? qn / 20 : 10;
                        "center" == r.dotPosition ? t.css({
                            left: i.width() / 2 - t.width() / 2,
                            bottom: e
                        }) : t.css({
                            bottom: e
                        }), _n[Tn] && kn[Tn] && (T(), O(Tn), R(Tn))
                    }
                }

                function T() {
                    Yn = j(Yn, mn.outerWidth()), r.fillDimensions && !r.useAspectRatio ? (qn = i.height(), Mn && In && (qn -= Sn.outerHeight())) : qn = Math.round(Yn / I()), mn.height(qn)
                }

                function I() {
                    if ("auto" == r.aspectRatio) {
                        if (!gn.length) return 16 / 9;
                        for (var t = {}, e = 0; e < gn.length; e++) {
                            var i = gn[e].width / gn[e].height,
                                o, a = !1;
                            n.each(x, function(n, t) {
                                var e = t,
                                    r = Math.abs(e - i);
                                (a === !1 || r < a) && (a = r, o = n)
                            }), t[o] = (t[o] || 0) + 1
                        }
                        var s, l = !1;
                        return n.each(t, function(n, t) {
                            (l === !1 || t > l) && (l = t, s = n)
                        }), x[s]
                    }
                    return n.isNumeric(r.aspectRatio) ? Number(r.aspectRatio) : x[r.aspectRatio]
                }

                function C() {
                    if (Kn = 0, Xn = 0, Mn) {
                        var n = Mn.find("a.wslide-link-thumbnail").first();
                        if (n.length) {
                            var t = n.children().first();
                            Kn = t.outerWidth(), Xn = t.outerHeight()
                        }
                    }
                }

                function P(n, t) {
                    var e = parseInt(t.width),
                        i = parseInt(t.height),
                        r = Kn / e,
                        o = Xn / i,
                        a = Math.max(r, o),
                        s = Math.ceil(e * a),
                        l = Math.ceil(i * a);
                    n.attr("width", s), n.attr("height", l), n.css("top", -Math.round(l / 2) + "px"), n.css("left", -Math.round(s / 2) + "px")
                }

                function O(n) {
                    var t = bn[n],
                        e = t.find(".wslide-caption"),
                        i = An[n],
                        o = xn[n],
                        a;
                    a = r.fillDimensions ? Math.max(Yn / _n[n], qn / kn[n]) : Math.min(Yn / _n[n], qn / kn[n], 1);
                    var s, l;
                    if (l = Math.ceil(_n[n] * a), s = Math.ceil(kn[n] * a), l + 1 <= _n[n] && (l++, s++), o.width(l), i.css("width", l), i.css("left", -Math.round(l / 2)), i.css("top", -Math.ceil(s / 2)), e.length && r.fillDimensions) {
                        var u;
                        t.is(":hidden") ? (t.show(), u = e.outerHeight(), t.hide()) : u = e.outerHeight();
                        var c = .25 * qn - u / 2,
                            d = .13 * qn;
                        c = Math.max(d, c), e.css("bottom", c)
                    }
                    e.show()
                }

                function R(n) {
                    var t = bn[n],
                        e = t.offset(),
                        i = t.outerWidth(),
                        o = t.outerHeight(),
                        a = xn[n],
                        s = a.offset(),
                        l = a.outerWidth(),
                        u = a.outerHeight(),
                        c = bn[n].find("div.wslide-caption").outerHeight();
                    pt = Math.max(0, s.left - e.left), ht = Math.max(0, e.left + i - (s.left + l)), vt = Math.max(0, s.top - e.top), gn[n].caption && "top" == r.captionLocation && o != c && (vt += c), wt = Math.max(0, e.top + o - (s.top + u))
                }

                function L(n) {
                    var t = !1,
                        e = Tn;
                    return Tn = n, bn[n] && _n[n] && kn[n] && (T(), O(n), t = !0, Fn && D()), jn && (void 0 !== e && jn[e].removeClass("wslide-link-active"), jn[n].addClass("wslide-link-active"), Fn && (i.find(".wslide-link-thumbnail img").css({
                        opacity: .5
                    }), i.find(".wslide-thumbnail-links .wslide-link-active img").css({
                        opacity: 1
                    }))), En && En.find(".wslide-dot").removeClass("wslide-dot-current").eq(n).addClass("wslide-dot-current"), nn(), t
                }

                function F(t, e, i) {
                    if (gn.length && !Wn) {
                        t = Math.min(gn.length - 1, Math.max(0, t));
                        var o = B(t, t);
                        if (!o) {
                            if (t != Tn) {
                                var a = Tn,
                                    s = L(t),
                                    l = e;
                                if (l || (l = t > a ? 1 : -1), i || void 0 === a) void 0 !== a && bn[a].hide(), bn[t].show(), s && R(t);
                                else if ("mosaic" == r.transition) {
                                    var u = l < 0;
                                    bt(t);
                                    var c = n(".wslide-box", yn),
                                        d = 0,
                                        f = u ? 150 * (ct - 1) : 0;
                                    gt(t, a), Wn = !0, c.each(function(e) {
                                        var i = n(this);
                                        setTimeout(function() {
                                            i.animate({
                                                opacity: "1.0"
                                            }, 500, function() {
                                                d++, d == c.length && (bn[a].hide(), Wn = !1, bn[t].find("img").show(), setTimeout(function() {
                                                    c.remove()
                                                }, 50))
                                            })
                                        }, f), (e + 1) % ct == 0 ? (f = (e + 1) / ct * 75, u && (f += 150 * (ct - 1))) : f = u ? f - 150 : f + 150
                                    })
                                } else if ("slice" == r.transition) gt(t, a), mt(t, a, l < 0, !1);
                                else if ("fold" == r.transition) gt(t, a), mt(t, a, l < 0, !0);
                                else if ("slide" == r.transition || r.slide) {
                                    var p = bn[t],
                                        h = bn[a];
                                    p.css({
                                        left: l * Yn + "px"
                                    }).show(), Wn = !0, yn.css({
                                        left: 0
                                    }).animate({
                                        left: -l * Yn + "px"
                                    }, {
                                        duration: 500,
                                        complete: function() {
                                            s && R(t), h.hide(), yn.css({
                                                left: 0
                                            }), p.css({
                                                left: 0
                                            }), Wn = !1
                                        }
                                    })
                                } else {
                                    var v = bn[a].find(".wslide-slide-inner2"),
                                        w = bn[t].find(".wslide-slide-inner2"),
                                        g = function() {
                                            s && R(t), bn[a].hide(), Wn = !1
                                        };
                                    bn[t].show(), Wn = !0;
                                    var m = .99;
                                    v.css({
                                        opacity: m
                                    }).animate({
                                        opacity: 0
                                    }, {
                                        duration: 500,
                                        complete: g
                                    }), w.css({
                                        opacity: 0
                                    }).animate({
                                        opacity: m
                                    }, {
                                        duration: 500,
                                        complete: g
                                    })
                                }
                            }
                            dn("slideChange", t)
                        }
                    }
                }

                function B(n, t) {
                    for (var e = !1, i = n; i <= n + b && i < gn.length; i++) i >= 0 && !bn[i] && (S(gn[i], i, i === t), e = n === i);
                    return e
                }

                function H() {
                    var n = (Tn - 1 + gn.length) % gn.length;
                    n >= 0 && (F(n, -1), Q(n, !1))
                }

                function U() {
                    var n = (Tn + 1) % gn.length;
                    F(n, 1), Q(n, !0)
                }

                function D() {
                    Dn = setTimeout(function() {
                        J() || U()
                    }, 1e3 * r.speed)
                }

                function N(n) {
                    xt = n.pageX || n.originalEvent.pageX || n.originalEvent.touches[0].pageX, _t = n.pageY || n.originalEvent.pageY || n.originalEvent.touches[0].pageY
                }

                function z(n) {
                    var t = n.pageX || n.originalEvent.pageX || n.originalEvent.touches[0].pageX,
                        e = n.pageY || n.originalEvent.pageY || n.originalEvent.touches[0].pageY;
                    In ? lt = t - xt : (lt = e - _t, n.preventDefault()), xt = t, _t = e, st = lt, K()
                }

                function Y(n) {
                    ot = !0, at++, In ? $n = Mn.offset().left : Vn = Mn.offset().top
                }

                function q(n) {
                    if (!(In && Gn < Jn || !In && nt < Zn)) {
                        var t;
                        t = In ? (n.pageX - $n) / Jn : (n.pageY - Vn) / Zn;
                        var e;
                        t < _ ? (e = (1 - t / _) * A, e *= e) : t > 1 - _ ? (e = (t - (1 - _)) / _ * A, e *= -e) : e = 0, e = Math.round(e), st != e && (st = e, ut || (ut = setInterval(K, 35)))
                    }
                }

                function K() {
                    lt < st ? lt += k : lt > st && (lt -= k), lt || st ? In ? (tt = Math.min(rt, Math.max(it, tt + lt)), Sn.css("left", tt)) : (et = Math.min(rt, Math.max(it, et + lt)), Sn.css("top", et)) : (clearInterval(ut), ut = null)
                }

                function X(n) {
                    var t = ++at;
                    setTimeout(function() {
                        t == at && (st = 0, ot = !1)
                    }, 10)
                }

                function Q(n, t) {
                    if (jn && !ot) {
                        var e = jn[n];
                        if (In) {
                            var i = e.position().left,
                                r = i + Sn.position().left,
                                o = e.outerWidth();
                            (r < 0 || r + o > Jn) && $(t ? -i : -(i + o - Jn))
                        } else {
                            var a = e.position().top,
                                s = a + Sn.position().top,
                                l = e.outerHeight();
                            (s < 0 || s + l > Zn) && V(t ? -a : -(a + l - Zn))
                        }
                    }
                }

                function $(n) {
                    n = Math.min(rt, Math.max(it, n)), Sn.animate({
                        left: n
                    }, 500)
                }

                function V(n) {
                    n = Math.min(rt, Math.max(it, n)), Sn.animate({
                        top: n
                    }, 500)
                }

                function J() {
                    return !i.parents("body").length && (s(), !0)
                }

                function Z(n) {
                    gn.length > 1 && !Fn && (Fn = !0, nn(), _n[Tn] && kn[Tn] && (n ? U() : D()), dn("play"))
                }

                function G() {
                    Fn && (i.find(".wslide-link-thumbnail img").css({
                        opacity: 1
                    }), Fn = !1, nn(), clearTimeout(Dn), Dn = null, Bn++, dn("pause"))
                }

                function nn() {
                    gn.length > 1 && r.showPlayButton !== !1 && (Fn ? (Hn.css("opacity", 0).hide(), Un.css("opacity", 1).show()) : (Hn.css("opacity", 1).show(), Un.css("opacity", 0).hide()))
                }

                function tn(n) {
                    an(), n || en(), Ln.show().css("opacity", 1), Nn = !0
                }

                function en() {
                    Cn.css("padding-top", vt), Cn.css("padding-left", pt), Pn.css("padding-top", vt), Pn.css("padding-right", ht), On.css("padding-left", pt), Rn.css("padding-right", ht)
                }

                function rn() {
                    an(), Ln.hide(), Nn = !1
                }

                function on() {
                    Nn && (Nn = !1, Ln.animate({
                        opacity: 0
                    }, {
                        duration: 1e3,
                        complete: function() {
                            rn()
                        }
                    }))
                }

                function an() {
                    Ln.stop(!0)
                }

                function sn(t) {
                    function e(e) {
                        function i(n) {
                            var t = ln(n);
                            u = c, c = t, l = t - o, Math.abs(l) > 15 && (d = !1), In ? (tt = a + l, tt = Math.max(it, tt), tt = Math.min(rt, tt), Sn.css("left", tt)) : (et = s + l, et = Math.max(it, et), et = Math.min(rt, et), Sn.css("top", et))
                        }

                        function r(e) {
                            d && t.is("a") && window.Code.Util.Events.fire(t[0], "click"), null === c || null === u ? lt = 0 : (lt = c - u, lt = Math.max(-15, lt), lt = Math.min(15, lt)), st = 0, ut || (ut = setInterval(K, 35)), n(document).off(Mt, i).off(St, r).off(jt, r)
                        }
                        G(), ut && (clearInterval(ut), ut = null, lt = 0);
                        var o = ln(e),
                            a = tt,
                            s = et,
                            l, u = null,
                            c = null,
                            d = !0;
                        return n(document).off(Mt, i).off(St, r).off(jt, r), !1
                    }
                    t.on(At, e)
                }

                function ln(n) {
                    return In ? un(n).pageX : un(n).pageY
                }

                function un(n) {
                    return kt ? n : n.touches[0]
                }

                function cn(n, t) {
                    var e = Et[n] || [];
                    e.push(t), Et[n] = e
                }

                function dn(t) {
                    var e = this,
                        i = Array.prototype.slice.call(arguments, 1);
                    n.each(Et[t] || [], function(n, t) {
                        t.apply(e, i)
                    })
                }

                function fn() {
                    return Et
                }

                function pn(n) {
                    Et = n
                }

                function hn() {
                    Et = {}
                }

                function vn() {
                    var n = ++Wt;
                    setTimeout(function() {
                        n == Wt && (J() || W())
                    }, 500)
                }
                var wn = this;
                wn.render = o, wn.destroy = a, wn.updateSize = W, wn.play = Z, wn.pause = G, wn.on = cn, wn.getHandlers = fn, wn.setHandlers = pn, wn.clearHandlers = hn, wn.getPhotos = function() {
                    return gn
                }, wn.isPlaying = function() {
                    return Fn
                }, wn.getSlideIndex = function() {
                    return Tn
                }, wn.gotoSlide = function(n, t) {
                    G(), F(n, void 0, t)
                }, wn.getElement = function() {
                    return i
                }, i = n(i), r = r || {};
                var gn = (r.images || []).filter(v),
                    mn, yn, bn = [],
                    xn = [],
                    _n = [],
                    kn = [],
                    An = [],
                    Mn, Sn, jn, En, Wn = !1,
                    Tn, In, Cn, Pn, On, Rn, Ln, Fn = !1,
                    Bn = 0,
                    Hn, Un, Dn, Nn = !0,
                    zn, Yn, qn, Kn, Xn, Qn, $n, Vn, Jn, Zn, Gn, nt, tt = 0,
                    et = 0,
                    it, rt, ot = !1,
                    at = 0,
                    st = 0,
                    lt = 0,
                    ut, ct = 8,
                    dt = 4,
                    ft = 15,
                    pt = 0,
                    ht = 0,
                    vt = 0,
                    wt = 0,
                    gt = function(n, t) {
                        var e = bn[n].find(".wslide-caption"),
                            i = bn[t].find(".wslide-caption"),
                            r = .99;
                        i.css({
                            "z-index": 3,
                            opacity: r
                        }).animate({
                            opacity: 0
                        }, {
                            duration: 1e3
                        }), e.css({
                            "z-index": 3,
                            opacity: 0
                        }).animate({
                            opacity: r
                        }, {
                            duration: 1e3
                        })
                    },
                    mt = function(t, e, i, r) {
                        yt(t);
                        var o = 0,
                            a = n(".wslide-slice", yn);
                        i && (Array.prototype._reverse ? Array.prototype._reverse.call(a) : Array.prototype.reverse.call(a));
                        var s = 0;
                        Wn = !0, a.each(function() {
                            var i = n(this),
                                l = {
                                    opacity: "1.0"
                                };
                            if (r) {
                                var u = i.width();
                                i.css({
                                    width: "0px"
                                }), l.width = u
                            }
                            setTimeout(function() {
                                i.animate(l, 500, function() {
                                    s++, s == a.length && (bn[e].hide(), Wn = !1, bn[t].find("img").css("visibility", "visible"), setTimeout(function() {
                                        a.remove()
                                    }, 50))
                                })
                            }, o), o += 65
                        })
                    },
                    yt = function(t, e) {
                        var i = bn[t],
                            r = i.find("img"),
                            o = r.attr("src"),
                            a = r.attr("alt"),
                            s = r.up(".wslide-slide-inner2");
                        i.show();
                        var l = r.height(),
                            u = Math.round(s.width() / ft);
                        r.css("visibility", "hidden");
                        for (var c = 0; c < ft; c++) {
                            var d = n("<img>").attr({
                                    src: o,
                                    alt: a
                                }).css({
                                    position: "absolute",
                                    width: s.width() + "px",
                                    height: "auto",
                                    display: "block !important",
                                    top: 0
                                }),
                                f = n('<div class="wslide-slice"></div>');
                            f.css({
                                position: "absolute",
                                height: l + "px",
                                opacity: "0",
                                overflow: "hidden",
                                "z-index": "2",
                                "-webkit-backface-visibility": "hidden"
                            }), e ? (d.css({
                                left: -((ft - c - 1) * u) + "px"
                            }), f.css({
                                right: u * c + "px"
                            })) : (d.css({
                                left: -c * u + "px"
                            }), f.css({
                                left: u * c + "px"
                            })), c === ft - 1 ? f.css({
                                width: s.width() - u * c + "px"
                            }) : f.css({
                                width: u + "px"
                            }), f.append(d), s.append(f)
                        }
                    },
                    bt = function(t) {
                        var e = bn[t],
                            i = e.find("img"),
                            r = i.attr("src"),
                            o = i.attr("alt"),
                            a = i.up(".wslide-slide");
                        e.show();
                        var s = Math.round(a.width() / ct),
                            l = Math.round(a.height() / dt),
                            u = Math.floor(i.offset().left - a.offset().left),
                            c = Math.ceil(i.offset().top - a.offset().top);
                        i.hide();
                        for (var d = 0; d < dt; d++)
                            for (var f = 0; f < ct; f++) {
                                var p = n("<img>").attr({
                                        src: r,
                                        alt: o
                                    }).css({
                                        position: "absolute",
                                        width: i.width() + "px",
                                        height: "auto",
                                        display: "block !important",
                                        top: -(l * d) + c + "px",
                                        left: -(s * f) + u + "px"
                                    }),
                                    h = n('<div class="wslide-box"></div>').append(p);
                                h.css({
                                    position: "absolute",
                                    opacity: 0,
                                    left: s * f + "px",
                                    top: l * d + "px",
                                    overflow: "hidden",
                                    "z-index": "2",
                                    "-webkit-backface-visibility": "hidden"
                                }), f === ct - 1 ? h.css({
                                    width: a.width() - s * f + "px"
                                }) : h.css({
                                    width: s + "px"
                                }), d === dt - 1 ? h.css({
                                    height: a.height() - l * d + "px"
                                }) : h.css({
                                    height: l + "px"
                                }), a.append(h)
                            }
                    },
                    xt = 0,
                    _t = 0,
                    kt = !0,
                    At = kt ? "mousedown" : "touchstart",
                    Mt = kt ? "mousemove" : "touchmove",
                    St = kt ? "mouseup" : "touchend",
                    jt = kt ? "xxx" : "touchcancel",
                    Et = {},
                    Wt = 0
            }

            function h(n) {
                var t = n.previewUrl || n.url;
                return t ? (n.previewUrl || t.match("/weebly/images/") || t.match("x-com-weebly-images") || (t = "/" + t.replace(/^\/uploads\//, "")), window.inEditor && window.inEditor() && i.chromeless && t.startsWith("/") && (t = "http://" + window.configSiteName + t), t) : v(n)
            }

            function v(n) {
                var t = window.inEditor && window.inEditor() ? n.editorUrl || n.url : n.publishedUrl || n.url;
                return t ? (n.editorUrl || t.match("/weebly/images/") || t.match("x-com-weebly-images") || (t = "/" + t.replace(/^\/uploads\//, ""), n.thumbnail !== !1 && (t = t.replace(/^(.*)\.([^\.]+)$/, "$1_orig.$2"))), window.inEditor && window.inEditor() && i.chromeless && t.startsWith("/") && (t = "http://" + window.configSiteName + t), t) : ""
            }

            function w(n, t, e) {
                function r() {
                    o && (clearInterval(o), o = null), a || (a = !0, e())
                }
                if (t) {
                    var o = null,
                        a = !1;
                    n.onload = r, n.src = t, window.inEditor && window.inEditor() && i.chromeless && n.src.startsWith("/") && (n.src = "http://" + window.configSiteName + n.src), n.complete ? r() : o = setInterval(function() {
                        n.complete && r()
                    }, 500)
                }
            }
            var g = {},
                m = {},
                y = "ontouchstart" in document.documentElement,
                b = 5,
                x = {
                    "16:9": 16 / 9,
                    "3:2": 1.5,
                    "4:3": 4 / 3
                },
                _ = .4,
                k = 1,
                A = 4,
                M = {
                    getSlideshowImages: a,
                    updateSize: s,
                    generateHTML: l,
                    init: u,
                    updatePhotos: c,
                    render: d,
                    initHeaderSlideshow: r,
                    instantiateHeaderSlideshow: o,
                    thumbnailURL: h,
                    largeURL: v
                };
            return e.Slideshow = window.wSlideshow = M, M
        }.apply(t, i), !(void 0 !== r && (n.exports = r))
    }
});