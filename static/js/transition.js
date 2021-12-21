/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@barba/core/dist/barba.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/@barba/core/dist/barba.umd.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (t, n) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  function t(t, n) {
    for (var r = 0; r < n.length; r++) {
      var e = n[r];
      e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
    }
  }

  function n(n, r, e) {
    return r && t(n.prototype, r), e && t(n, e), n;
  }

  function r() {
    return (r = Object.assign || function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n];

        for (var e in r) {
          Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  function e(t, n) {
    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
  }

  function i(t) {
    return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function o(t, n) {
    return (o = Object.setPrototypeOf || function (t, n) {
      return t.__proto__ = n, t;
    })(t, n);
  }

  function u(t, n, r) {
    return (u = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }() ? Reflect.construct : function (t, n, r) {
      var e = [null];
      e.push.apply(e, n);
      var i = new (Function.bind.apply(t, e))();
      return r && o(i, r.prototype), i;
    }).apply(null, arguments);
  }

  function f(t) {
    var n = "function" == typeof Map ? new Map() : void 0;
    return (f = function f(t) {
      if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== n) {
        if (n.has(t)) return n.get(t);
        n.set(t, r);
      }

      function r() {
        return u(t, arguments, i(this).constructor);
      }

      return r.prototype = Object.create(t.prototype, {
        constructor: {
          value: r,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), o(r, t);
    })(t);
  }

  function s(t, n) {
    try {
      var r = t();
    } catch (t) {
      return n(t);
    }

    return r && r.then ? r.then(void 0, n) : r;
  }

  "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));

  var c,
      a = "2.9.7",
      h = function h() {};

  !function (t) {
    t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug";
  }(c || (c = {}));

  var v = c.off,
      l = function () {
    function t(t) {
      this.t = t;
    }

    t.getLevel = function () {
      return v;
    }, t.setLevel = function (t) {
      return v = c[t];
    };
    var n = t.prototype;
    return n.error = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }

      this.i(console.error, c.error, n);
    }, n.warn = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }

      this.i(console.warn, c.warning, n);
    }, n.info = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }

      this.i(console.info, c.info, n);
    }, n.debug = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }

      this.i(console.log, c.debug, n);
    }, n.i = function (n, r, e) {
      r <= t.getLevel() && n.apply(console, ["[" + this.t + "] "].concat(e));
    }, t;
  }(),
      d = O,
      m = E,
      p = g,
      w = x,
      b = T,
      y = "/",
      P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

  function g(t, n) {
    for (var r, e = [], i = 0, o = 0, u = "", f = n && n.delimiter || y, s = n && n.whitelist || void 0, c = !1; null !== (r = P.exec(t));) {
      var a = r[0],
          h = r[1],
          v = r.index;
      if (u += t.slice(o, v), o = v + a.length, h) u += h[1], c = !0;else {
        var l = "",
            d = r[2],
            m = r[3],
            p = r[4],
            w = r[5];

        if (!c && u.length) {
          var b = u.length - 1,
              g = u[b];
          (!s || s.indexOf(g) > -1) && (l = g, u = u.slice(0, b));
        }

        u && (e.push(u), u = "", c = !1);
        var E = m || p,
            x = l || f;
        e.push({
          name: d || i++,
          prefix: l,
          delimiter: x,
          optional: "?" === w || "*" === w,
          repeat: "+" === w || "*" === w,
          pattern: E ? A(E) : "[^" + k(x === f ? x : x + f) + "]+?"
        });
      }
    }

    return (u || o < t.length) && e.push(u + t.substr(o)), e;
  }

  function E(t, n) {
    return function (r, e) {
      var i = t.exec(r);
      if (!i) return !1;

      for (var o = i[0], u = i.index, f = {}, s = e && e.decode || decodeURIComponent, c = 1; c < i.length; c++) {
        if (void 0 !== i[c]) {
          var a = n[c - 1];
          f[a.name] = a.repeat ? i[c].split(a.delimiter).map(function (t) {
            return s(t, a);
          }) : s(i[c], a);
        }
      }

      return {
        path: o,
        index: u,
        params: f
      };
    };
  }

  function x(t, n) {
    for (var r = new Array(t.length), e = 0; e < t.length; e++) {
      "object" == _typeof(t[e]) && (r[e] = new RegExp("^(?:" + t[e].pattern + ")$", R(n)));
    }

    return function (n, e) {
      for (var i = "", o = e && e.encode || encodeURIComponent, u = !e || !1 !== e.validate, f = 0; f < t.length; f++) {
        var s = t[f];

        if ("string" != typeof s) {
          var c,
              a = n ? n[s.name] : void 0;

          if (Array.isArray(a)) {
            if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but got array');

            if (0 === a.length) {
              if (s.optional) continue;
              throw new TypeError('Expected "' + s.name + '" to not be empty');
            }

            for (var h = 0; h < a.length; h++) {
              if (c = o(a[h], s), u && !r[f].test(c)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"');
              i += (0 === h ? s.prefix : s.delimiter) + c;
            }
          } else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) {
            if (!s.optional) throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string"));
          } else {
            if (c = o(String(a), s), u && !r[f].test(c)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"');
            i += s.prefix + c;
          }
        } else i += s;
      }

      return i;
    };
  }

  function k(t) {
    return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }

  function A(t) {
    return t.replace(/([=!:$/()])/g, "\\$1");
  }

  function R(t) {
    return t && t.sensitive ? "" : "i";
  }

  function T(t, n, r) {
    for (var e = (r = r || {}).strict, i = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || y, f = [].concat(r.endsWith || []).map(k).concat("$").join("|"), s = i ? "^" : "", c = 0; c < t.length; c++) {
      var a = t[c];
      if ("string" == typeof a) s += k(a);else {
        var h = a.repeat ? "(?:" + a.pattern + ")(?:" + k(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
        n && n.push(a), s += a.optional ? a.prefix ? "(?:" + k(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : k(a.prefix) + "(" + h + ")";
      }
    }

    if (o) e || (s += "(?:" + k(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")";else {
      var v = t[t.length - 1],
          l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
      e || (s += "(?:" + k(u) + "(?=" + f + "))?"), l || (s += "(?=" + k(u) + "|" + f + ")");
    }
    return new RegExp(s, R(r));
  }

  function O(t, n, r) {
    return t instanceof RegExp ? function (t, n) {
      if (!n) return t;
      var r = t.source.match(/\((?!\?)/g);
      if (r) for (var e = 0; e < r.length; e++) {
        n.push({
          name: e,
          prefix: null,
          delimiter: null,
          optional: !1,
          repeat: !1,
          pattern: null
        });
      }
      return t;
    }(t, n) : Array.isArray(t) ? function (t, n, r) {
      for (var e = [], i = 0; i < t.length; i++) {
        e.push(O(t[i], n, r).source);
      }

      return new RegExp("(?:" + e.join("|") + ")", R(r));
    }(t, n, r) : function (t, n, r) {
      return T(g(t, r), n, r);
    }(t, n, r);
  }

  d.match = function (t, n) {
    var r = [];
    return E(O(t, r, n), r);
  }, d.regexpToFunction = m, d.parse = p, d.compile = function (t, n) {
    return x(g(t, n), n);
  }, d.tokensToFunction = w, d.tokensToRegExp = b;

  var S = {
    container: "container",
    history: "history",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper"
  },
      j = new (function () {
    function t() {
      this.o = S, this.u = new DOMParser();
    }

    var n = t.prototype;
    return n.toString = function (t) {
      return t.outerHTML;
    }, n.toDocument = function (t) {
      return this.u.parseFromString(t, "text/html");
    }, n.toElement = function (t) {
      var n = document.createElement("div");
      return n.innerHTML = t, n;
    }, n.getHtml = function (t) {
      return void 0 === t && (t = document), this.toString(t.documentElement);
    }, n.getWrapper = function (t) {
      return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
    }, n.getContainer = function (t) {
      return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
    }, n.removeContainer = function (t) {
      document.body.contains(t) && t.parentNode.removeChild(t);
    }, n.addContainer = function (t, n) {
      var r = this.getContainer();
      r ? this.s(t, r) : n.appendChild(t);
    }, n.getNamespace = function (t) {
      void 0 === t && (t = document);
      var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
      return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
    }, n.getHref = function (t) {
      if (t.tagName && "a" === t.tagName.toLowerCase()) {
        if ("string" == typeof t.href) return t.href;
        var n = t.getAttribute("href") || t.getAttribute("xlink:href");
        if (n) return this.resolveUrl(n.baseVal || n);
      }

      return null;
    }, n.resolveUrl = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }

      var e = n.length;
      if (0 === e) throw new Error("resolveUrl requires at least one argument; got none.");
      var i = document.createElement("base");
      if (i.href = arguments[0], 1 === e) return i.href;
      var o = document.getElementsByTagName("head")[0];
      o.insertBefore(i, o.firstChild);

      for (var u, f = document.createElement("a"), s = 1; s < e; s++) {
        f.href = arguments[s], i.href = u = f.href;
      }

      return o.removeChild(i), u;
    }, n.s = function (t, n) {
      n.parentNode.insertBefore(t, n.nextSibling);
    }, t;
  }())(),
      M = new (function () {
    function t() {
      this.h = [], this.v = -1;
    }

    var e = t.prototype;
    return e.init = function (t, n) {
      this.l = "barba";
      var r = {
        ns: n,
        scroll: {
          x: window.scrollX,
          y: window.scrollY
        },
        url: t
      };
      this.h.push(r), this.v = 0;
      var e = {
        from: this.l,
        index: 0,
        states: [].concat(this.h)
      };
      window.history && window.history.replaceState(e, "", t);
    }, e.change = function (t, n, r) {
      if (r && r.state) {
        var e = r.state,
            i = e.index;
        n = this.m(this.v - i), this.replace(e.states), this.v = i;
      } else this.add(t, n);

      return n;
    }, e.add = function (t, n) {
      var r = this.size,
          e = this.p(n),
          i = {
        ns: "tmp",
        scroll: {
          x: window.scrollX,
          y: window.scrollY
        },
        url: t
      };
      this.h.push(i), this.v = r;
      var o = {
        from: this.l,
        index: r,
        states: [].concat(this.h)
      };

      switch (e) {
        case "push":
          window.history && window.history.pushState(o, "", t);
          break;

        case "replace":
          window.history && window.history.replaceState(o, "", t);
      }
    }, e.update = function (t, n) {
      var e = n || this.v,
          i = r({}, this.get(e), {}, t);
      this.set(e, i);
    }, e.remove = function (t) {
      t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
    }, e.clear = function () {
      this.h = [], this.v = -1;
    }, e.replace = function (t) {
      this.h = t;
    }, e.get = function (t) {
      return this.h[t];
    }, e.set = function (t, n) {
      return this.h[t] = n;
    }, e.p = function (t) {
      var n = "push",
          r = t,
          e = S.prefix + "-" + S.history;
      return r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)), n;
    }, e.m = function (t) {
      return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward";
    }, n(t, [{
      key: "current",
      get: function get() {
        return this.h[this.v];
      }
    }, {
      key: "state",
      get: function get() {
        return this.h[this.h.length - 1];
      }
    }, {
      key: "previous",
      get: function get() {
        return this.v < 1 ? null : this.h[this.v - 1];
      }
    }, {
      key: "size",
      get: function get() {
        return this.h.length;
      }
    }]), t;
  }())(),
      L = function L(t, n) {
    try {
      var r = function () {
        if (!n.next.html) return Promise.resolve(t).then(function (t) {
          var r = n.next;

          if (t) {
            var e = j.toElement(t);
            r.namespace = j.getNamespace(e), r.container = j.getContainer(e), r.html = t, M.update({
              ns: r.namespace
            });
            var i = j.toDocument(t);
            document.title = i.title;
          }
        });
      }();

      return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
    } catch (t) {
      return Promise.reject(t);
    }
  },
      $ = d,
      _ = {
    __proto__: null,
    update: L,
    nextTick: function nextTick() {
      return new Promise(function (t) {
        window.requestAnimationFrame(t);
      });
    },
    pathToRegexp: $
  },
      q = function q() {
    return window.location.origin;
  },
      B = function B(t) {
    return void 0 === t && (t = window.location.href), U(t).port;
  },
      U = function U(t) {
    var n,
        r = t.match(/:\d+/);
    if (null === r) /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443);else {
      var e = r[0].substring(1);
      n = parseInt(e, 10);
    }
    var i,
        o = t.replace(q(), ""),
        u = {},
        f = o.indexOf("#");
    f >= 0 && (i = o.slice(f + 1), o = o.slice(0, f));
    var s = o.indexOf("?");
    return s >= 0 && (u = D(o.slice(s + 1)), o = o.slice(0, s)), {
      hash: i,
      path: o,
      port: n,
      query: u
    };
  },
      D = function D(t) {
    return t.split("&").reduce(function (t, n) {
      var r = n.split("=");
      return t[r[0]] = r[1], t;
    }, {});
  },
      F = function F(t) {
    return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "");
  },
      H = {
    __proto__: null,
    getHref: function getHref() {
      return window.location.href;
    },
    getOrigin: q,
    getPort: B,
    getPath: function getPath(t) {
      return void 0 === t && (t = window.location.href), U(t).path;
    },
    parse: U,
    parseQuery: D,
    clean: F
  };

  function I(t, n, r) {
    return void 0 === n && (n = 2e3), new Promise(function (e, i) {
      var o = new XMLHttpRequest();
      o.onreadystatechange = function () {
        if (o.readyState === XMLHttpRequest.DONE) if (200 === o.status) e(o.responseText);else if (o.status) {
          var n = {
            status: o.status,
            statusText: o.statusText
          };
          r(t, n), i(n);
        }
      }, o.ontimeout = function () {
        var e = new Error("Timeout error [" + n + "]");
        r(t, e), i(e);
      }, o.onerror = function () {
        var n = new Error("Fetch error");
        r(t, n), i(n);
      }, o.open("GET", t), o.timeout = n, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send();
    });
  }

  var C = function C(t) {
    return !!t && ("object" == _typeof(t) || "function" == typeof t) && "function" == typeof t.then;
  };

  function N(t, n) {
    return void 0 === n && (n = {}), function () {
      for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++) {
        e[i] = arguments[i];
      }

      var o = !1,
          u = new Promise(function (r, i) {
        n.async = function () {
          return o = !0, function (t, n) {
            t ? i(t) : r(n);
          };
        };

        var u = t.apply(n, e);
        o || (C(u) ? u.then(r, i) : r(u));
      });
      return u;
    };
  }

  var X = new (function (t) {
    function n() {
      var n;
      return (n = t.call(this) || this).logger = new l("@barba/core"), n.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n.registered = new Map(), n.init(), n;
    }

    e(n, t);
    var r = n.prototype;
    return r.init = function () {
      var t = this;
      this.registered.clear(), this.all.forEach(function (n) {
        t[n] || (t[n] = function (r, e) {
          t.registered.has(n) || t.registered.set(n, new Set()), t.registered.get(n).add({
            ctx: e || {},
            fn: r
          });
        });
      });
    }, r["do"] = function (t) {
      for (var n = this, r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
        e[i - 1] = arguments[i];
      }

      if (this.registered.has(t)) {
        var o = Promise.resolve();
        return this.registered.get(t).forEach(function (t) {
          o = o.then(function () {
            return N(t.fn, t.ctx).apply(void 0, e);
          });
        }), o["catch"](function (r) {
          n.logger.debug("Hook error [" + t + "]"), n.logger.error(r);
        });
      }

      return Promise.resolve();
    }, r.clear = function () {
      var t = this;
      this.all.forEach(function (n) {
        delete t[n];
      }), this.init();
    }, r.help = function () {
      this.logger.info("Available hooks: " + this.all.join(","));
      var t = [];
      this.registered.forEach(function (n, r) {
        return t.push(r);
      }), this.logger.info("Registered hooks: " + t.join(","));
    }, n;
  }(h))(),
      z = function () {
    function t(t) {
      if (this.P = [], "boolean" == typeof t) this.g = t;else {
        var n = Array.isArray(t) ? t : [t];
        this.P = n.map(function (t) {
          return $(t);
        });
      }
    }

    return t.prototype.checkHref = function (t) {
      if ("boolean" == typeof this.g) return this.g;
      var n = U(t).path;
      return this.P.some(function (t) {
        return null !== t.exec(n);
      });
    }, t;
  }(),
      G = function (t) {
    function n(n) {
      var r;
      return (r = t.call(this, n) || this).k = new Map(), r;
    }

    e(n, t);
    var i = n.prototype;
    return i.set = function (t, n, r) {
      return this.k.set(t, {
        action: r,
        request: n
      }), {
        action: r,
        request: n
      };
    }, i.get = function (t) {
      return this.k.get(t);
    }, i.getRequest = function (t) {
      return this.k.get(t).request;
    }, i.getAction = function (t) {
      return this.k.get(t).action;
    }, i.has = function (t) {
      return !this.checkHref(t) && this.k.has(t);
    }, i["delete"] = function (t) {
      return this.k["delete"](t);
    }, i.update = function (t, n) {
      var e = r({}, this.k.get(t), {}, n);
      return this.k.set(t, e), e;
    }, n;
  }(z),
      Q = function Q() {
    return !window.history.pushState;
  },
      W = function W(t) {
    return !t.el || !t.href;
  },
      J = function J(t) {
    var n = t.event;
    return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey;
  },
      K = function K(t) {
    var n = t.el;
    return n.hasAttribute("target") && "_blank" === n.target;
  },
      V = function V(t) {
    var n = t.el;
    return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname;
  },
      Y = function Y(t) {
    var n = t.el;
    return void 0 !== n.port && B() !== B(n.href);
  },
      Z = function Z(t) {
    var n = t.el;
    return n.getAttribute && "string" == typeof n.getAttribute("download");
  },
      tt = function tt(t) {
    return t.el.hasAttribute(S.prefix + "-" + S.prevent);
  },
      nt = function nt(t) {
    return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
  },
      rt = function rt(t) {
    var n = t.href;
    return F(n) === F() && B(n) === B();
  },
      et = function (t) {
    function n(n) {
      var r;
      return (r = t.call(this, n) || this).suite = [], r.tests = new Map(), r.init(), r;
    }

    e(n, t);
    var r = n.prototype;
    return r.init = function () {
      this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, !1);
    }, r.add = function (t, n, r) {
      void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t);
    }, r.run = function (t, n, r, e) {
      return this.tests.get(t)({
        el: n,
        event: r,
        href: e
      });
    }, r.checkLink = function (t, n, r) {
      var e = this;
      return this.suite.some(function (i) {
        return e.run(i, t, n, r);
      });
    }, n;
  }(z),
      it = function (t) {
    function n(r, e) {
      var i;
      void 0 === e && (e = "Barba error");

      for (var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++) {
        u[f - 2] = arguments[f];
      }

      return (i = t.call.apply(t, [this].concat(u)) || this).error = r, i.label = e, Error.captureStackTrace && Error.captureStackTrace(function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(i), n), i.name = "BarbaError", i;
    }

    return e(n, t), n;
  }(f(Error)),
      ot = function () {
    function t(t) {
      void 0 === t && (t = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
        name: "namespace",
        type: "strings"
      }, {
        name: "custom",
        type: "function"
      }], t && (this.all = this.all.concat(t)), this.update();
    }

    var n = t.prototype;
    return n.add = function (t, n) {
      switch (t) {
        case "rule":
          this.A.splice(n.position || 0, 0, n.value);
          break;

        case "transition":
        default:
          this.all.push(n);
      }

      this.update();
    }, n.resolve = function (t, n) {
      var r = this;
      void 0 === n && (n = {});
      var e = n.once ? this.once : this.page;
      e = e.filter(n.self ? function (t) {
        return t.name && "self" === t.name;
      } : function (t) {
        return !t.name || "self" !== t.name;
      });
      var i = new Map(),
          o = e.find(function (e) {
        var o = !0,
            u = {};
        return !(!n.self || "self" !== e.name) || (r.A.reverse().forEach(function (n) {
          o && (o = r.R(e, n, t, u), e.from && e.to && (o = r.R(e, n, t, u, "from") && r.R(e, n, t, u, "to")), e.from && !e.to && (o = r.R(e, n, t, u, "from")), !e.from && e.to && (o = r.R(e, n, t, u, "to")));
        }), i.set(e, u), o);
      }),
          u = i.get(o),
          f = [];

      if (f.push(n.once ? "once" : "page"), n.self && f.push("self"), u) {
        var s,
            c = [o];
        Object.keys(u).length > 0 && c.push(u), (s = this.logger).info.apply(s, ["Transition found [" + f.join(",") + "]"].concat(c));
      } else this.logger.info("No transition found [" + f.join(",") + "]");

      return o;
    }, n.update = function () {
      var t = this;
      this.all = this.all.map(function (n) {
        return t.T(n);
      }).sort(function (t, n) {
        return t.priority - n.priority;
      }).reverse().map(function (t) {
        return delete t.priority, t;
      }), this.page = this.all.filter(function (t) {
        return void 0 !== t.leave || void 0 !== t.enter;
      }), this.once = this.all.filter(function (t) {
        return void 0 !== t.once;
      });
    }, n.R = function (t, n, r, e, i) {
      var o = !0,
          u = !1,
          f = t,
          s = n.name,
          c = s,
          a = s,
          h = s,
          v = i ? f[i] : f,
          l = "to" === i ? r.next : r.current;

      if (i ? v && v[s] : v[s]) {
        switch (n.type) {
          case "strings":
          default:
            var d = Array.isArray(v[c]) ? v[c] : [v[c]];
            l[c] && -1 !== d.indexOf(l[c]) && (u = !0), -1 === d.indexOf(l[c]) && (o = !1);
            break;

          case "object":
            var m = Array.isArray(v[a]) ? v[a] : [v[a]];
            l[a] ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0), -1 === m.indexOf(l[a].name) && (o = !1)) : o = !1;
            break;

          case "function":
            v[h](r) ? u = !0 : o = !1;
        }

        u && (i ? (e[i] = e[i] || {}, e[i][s] = f[i][s]) : e[s] = f[s]);
      }

      return o;
    }, n.O = function (t, n, r) {
      var e = 0;
      return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (e += Math.pow(10, r), t.from && t.from[n] && (e += 1), t.to && t.to[n] && (e += 2)), e;
    }, n.T = function (t) {
      var n = this;
      t.priority = 0;
      var r = 0;
      return this.A.forEach(function (e, i) {
        r += n.O(t, e.name, i + 1);
      }), t.priority = r, t;
    }, t;
  }(),
      ut = function () {
    function t(t) {
      void 0 === t && (t = []), this.logger = new l("@barba/core"), this.S = !1, this.store = new ot(t);
    }

    var r = t.prototype;
    return r.get = function (t, n) {
      return this.store.resolve(t, n);
    }, r.doOnce = function (t) {
      var n = t.data,
          r = t.transition;

      try {
        var e = function e() {
          i.S = !1;
        },
            i = this,
            o = r || {};

        i.S = !0;
        var u = s(function () {
          return Promise.resolve(i.j("beforeOnce", n, o)).then(function () {
            return Promise.resolve(i.once(n, o)).then(function () {
              return Promise.resolve(i.j("afterOnce", n, o)).then(function () {});
            });
          });
        }, function (t) {
          i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t);
        });
        return Promise.resolve(u && u.then ? u.then(e) : e());
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.doPage = function (t) {
      var n = t.data,
          r = t.transition,
          e = t.page,
          i = t.wrapper;

      try {
        var o = function o(t) {
          if (u) return t;
          f.S = !1;
        },
            u = !1,
            f = this,
            c = r || {},
            a = !0 === c.sync || !1;

        f.S = !0;
        var h = s(function () {
          function t() {
            return Promise.resolve(f.j("before", n, c)).then(function () {
              var t = !1;

              function r(r) {
                return t ? r : Promise.resolve(f.remove(n)).then(function () {
                  return Promise.resolve(f.j("after", n, c)).then(function () {});
                });
              }

              var o = function () {
                if (a) return s(function () {
                  return Promise.resolve(f.add(n, i)).then(function () {
                    return Promise.resolve(f.j("beforeLeave", n, c)).then(function () {
                      return Promise.resolve(f.j("beforeEnter", n, c)).then(function () {
                        return Promise.resolve(Promise.all([f.leave(n, c), f.enter(n, c)])).then(function () {
                          return Promise.resolve(f.j("afterLeave", n, c)).then(function () {
                            return Promise.resolve(f.j("afterEnter", n, c)).then(function () {});
                          });
                        });
                      });
                    });
                  });
                }, function (t) {
                  if (f.M(t)) throw new it(t, "Transition error [sync]");
                });

                var r = function r(_r) {
                  return t ? _r : s(function () {
                    var t = function () {
                      if (!1 !== o) return Promise.resolve(f.add(n, i)).then(function () {
                        return Promise.resolve(f.j("beforeEnter", n, c)).then(function () {
                          return Promise.resolve(f.enter(n, c, o)).then(function () {
                            return Promise.resolve(f.j("afterEnter", n, c)).then(function () {});
                          });
                        });
                      });
                    }();

                    if (t && t.then) return t.then(function () {});
                  }, function (t) {
                    if (f.M(t)) throw new it(t, "Transition error [before/after/enter]");
                  });
                },
                    o = !1,
                    u = s(function () {
                  return Promise.resolve(f.j("beforeLeave", n, c)).then(function () {
                    return Promise.resolve(Promise.all([f.leave(n, c), L(e, n)]).then(function (t) {
                      return t[0];
                    })).then(function (t) {
                      return o = t, Promise.resolve(f.j("afterLeave", n, c)).then(function () {});
                    });
                  });
                }, function (t) {
                  if (f.M(t)) throw new it(t, "Transition error [before/after/leave]");
                });

                return u && u.then ? u.then(r) : r(u);
              }();

              return o && o.then ? o.then(r) : r(o);
            });
          }

          var r = function () {
            if (a) return Promise.resolve(L(e, n)).then(function () {});
          }();

          return r && r.then ? r.then(t) : t();
        }, function (t) {
          if (f.S = !1, t.name && "BarbaError" === t.name) throw f.logger.debug(t.label), f.logger.error(t.error), t;
          throw f.logger.debug("Transition error [page]"), f.logger.error(t), t;
        });
        return Promise.resolve(h && h.then ? h.then(o) : o(h));
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.once = function (t, n) {
      try {
        return Promise.resolve(X["do"]("once", t, n)).then(function () {
          return n.once ? N(n.once, n)(t) : Promise.resolve();
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.leave = function (t, n) {
      try {
        return Promise.resolve(X["do"]("leave", t, n)).then(function () {
          return n.leave ? N(n.leave, n)(t) : Promise.resolve();
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.enter = function (t, n, r) {
      try {
        return Promise.resolve(X["do"]("enter", t, n)).then(function () {
          return n.enter ? N(n.enter, n)(t, r) : Promise.resolve();
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.add = function (t, n) {
      try {
        return j.addContainer(t.next.container, n), X["do"]("nextAdded", t), Promise.resolve();
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.remove = function (t) {
      try {
        return j.removeContainer(t.current.container), X["do"]("currentRemoved", t), Promise.resolve();
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.M = function (t) {
      return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status;
    }, r.j = function (t, n, r) {
      try {
        return Promise.resolve(X["do"](t, n, r)).then(function () {
          return r[t] ? N(r[t], r)(n) : Promise.resolve();
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, n(t, [{
      key: "isRunning",
      get: function get() {
        return this.S;
      },
      set: function set(t) {
        this.S = t;
      }
    }, {
      key: "hasOnce",
      get: function get() {
        return this.store.once.length > 0;
      }
    }, {
      key: "hasSelf",
      get: function get() {
        return this.store.all.some(function (t) {
          return "self" === t.name;
        });
      }
    }, {
      key: "shouldWait",
      get: function get() {
        return this.store.all.some(function (t) {
          return t.to && !t.to.route || t.sync;
        });
      }
    }]), t;
  }(),
      ft = function () {
    function t(t) {
      var n = this;
      this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map(), 0 !== t.length && (t.forEach(function (t) {
        n.byNamespace.set(t.namespace, t);
      }), this.names.forEach(function (t) {
        X[t](n.L(t));
      }));
    }

    return t.prototype.L = function (t) {
      var n = this;
      return function (r) {
        var e = t.match(/enter/i) ? r.next : r.current,
            i = n.byNamespace.get(e.namespace);
        return i && i[t] ? N(i[t], i)(r) : Promise.resolve();
      };
    }, t;
  }();

  Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
    var n = this;

    do {
      if (n.matches(t)) return n;
      n = n.parentElement || n.parentNode;
    } while (null !== n && 1 === n.nodeType);

    return null;
  });
  var st = {
    container: null,
    html: "",
    namespace: "",
    url: {
      hash: "",
      href: "",
      path: "",
      port: null,
      query: {}
    }
  };
  return new (function () {
    function t() {
      this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H;
    }

    var e = t.prototype;
    return e.use = function (t, n) {
      var r = this.plugins;
      r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
    }, e.init = function (t) {
      var n = void 0 === t ? {} : t,
          e = n.transitions,
          i = void 0 === e ? [] : e,
          o = n.views,
          u = void 0 === o ? [] : o,
          f = n.schema,
          s = void 0 === f ? S : f,
          c = n.requestError,
          a = n.timeout,
          h = void 0 === a ? 2e3 : a,
          v = n.cacheIgnore,
          d = void 0 !== v && v,
          m = n.prefetchIgnore,
          p = void 0 !== m && m,
          w = n.preventRunning,
          b = void 0 !== w && w,
          y = n.prevent,
          P = void 0 === y ? null : y,
          g = n.debug,
          E = n.logLevel;
      if (l.setLevel(!0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(s).forEach(function (t) {
        S[t] && (S[t] = s[t]);
      }), this.$ = c, this.timeout = h, this.cacheIgnore = d, this.prefetchIgnore = p, this.preventRunning = b, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
      this._.setAttribute("aria-live", "polite"), this.q();
      var x = this.data.current;
      if (!x.container) throw new Error("[@barba/core] No Barba container found");

      if (this.cache = new G(d), this.prevent = new et(p), this.transitions = new ut(i), this.views = new ft(u), null !== P) {
        if ("function" != typeof P) throw new Error("[@barba/core] Prevent should be a function");
        this.prevent.add("preventCustom", P);
      }

      this.history.init(x.url.href, x.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function (t) {
        return t.init();
      });
      var k = this.data;
      k.trigger = "barba", k.next = k.current, k.current = r({}, this.schemaPage), this.hooks["do"]("ready", k), this.once(k), this.q();
    }, e.destroy = function () {
      this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = [];
    }, e.force = function (t) {
      window.location.assign(t);
    }, e.go = function (t, n, r) {
      var e;
      if (void 0 === n && (n = "barba"), this.transitions.isRunning) this.force(t);else if (!(e = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, e);
    }, e.once = function (t) {
      try {
        var n = this;
        return Promise.resolve(n.hooks["do"]("beforeEnter", t)).then(function () {
          function r() {
            return Promise.resolve(n.hooks["do"]("afterEnter", t)).then(function () {});
          }

          var e = function () {
            if (n.transitions.hasOnce) {
              var r = n.transitions.get(t, {
                once: !0
              });
              return Promise.resolve(n.transitions.doOnce({
                transition: r,
                data: t
              })).then(function () {});
            }
          }();

          return e && e.then ? e.then(r) : r();
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, e.page = function (t, n, e) {
      try {
        var i = function i() {
          var t = o.data;
          return Promise.resolve(o.hooks["do"]("page", t)).then(function () {
            var n = s(function () {
              var n = o.transitions.get(t, {
                once: !1,
                self: e
              });
              return Promise.resolve(o.transitions.doPage({
                data: t,
                page: u,
                transition: n,
                wrapper: o._
              })).then(function () {
                o.q();
              });
            }, function () {
              0 === l.getLevel() && o.force(t.current.url.href);
            });
            if (n && n.then) return n.then(function () {});
          });
        },
            o = this;

        o.data.next.url = r({
          href: t
        }, o.url.parse(t)), o.data.trigger = n;

        var u = o.cache.has(t) ? o.cache.update(t, {
          action: "click"
        }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, n)), "click").request,
            f = function () {
          if (o.transitions.shouldWait) return Promise.resolve(L(u, o.data)).then(function () {});
        }();

        return Promise.resolve(f && f.then ? f.then(i) : i());
      } catch (t) {
        return Promise.reject(t);
      }
    }, e.onRequestError = function (t) {
      this.transitions.isRunning = !1;

      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) {
        r[e - 1] = arguments[e];
      }

      var i = r[0],
          o = r[1],
          u = this.cache.getAction(i);
      return this.cache["delete"](i), !(this.$ && !1 === this.$(t, u, i, o) || ("click" === u && this.force(i), 1));
    }, e.prefetch = function (t) {
      var n = this;
      this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba"))["catch"](function (t) {
        n.logger.error(t);
      }), "prefetch");
    }, e.F = function () {
      !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D);
    }, e.H = function () {
      !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D);
    }, e.B = function (t) {
      var n = this,
          r = this.I(t);

      if (r) {
        var e = this.dom.getHref(r);
        this.prevent.checkHref(e) || this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, r))["catch"](function (t) {
          n.logger.error(t);
        }), "enter");
      }
    }, e.U = function (t) {
      var n = this.I(t);
      if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t);
    }, e.D = function (t) {
      this.go(this.url.getHref(), "popstate", t);
    }, e.I = function (t) {
      for (var n = t.target; n && !this.dom.getHref(n);) {
        n = n.parentNode;
      }

      if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n;
    }, e.q = function () {
      var t = this.url.getHref(),
          n = {
        container: this.dom.getContainer(),
        html: this.dom.getHtml(),
        namespace: this.dom.getNamespace(),
        url: r({
          href: t
        }, this.url.parse(t))
      };
      this.C = {
        current: n,
        next: r({}, this.schemaPage),
        trigger: void 0
      }, this.hooks["do"]("reset", this.data);
    }, n(t, [{
      key: "data",
      get: function get() {
        return this.C;
      }
    }, {
      key: "wrapper",
      get: function get() {
        return this._;
      }
    }]), t;
  }())();
});

/***/ }),

/***/ "./node_modules/animejs/lib/anime.es.js":
/*!**********************************************!*\
  !*** ./node_modules/animejs/lib/anime.es.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults
var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d']; // Caching

var cache = {
  CSS: {},
  springs: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function arr(a) {
    return Array.isArray(a);
  },
  obj: function obj(a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function pth(a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function svg(a) {
    return a instanceof SVGElement;
  },
  inp: function inp(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function dom(a) {
    return a.nodeType || is.svg(a);
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  fnc: function fnc(a) {
    return typeof a === 'function';
  },
  und: function und(a) {
    return typeof a === 'undefined';
  },
  nil: function nil(a) {
    return is.und(a) || a === null;
  },
  hex: function hex(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function rgb(a) {
    return /^rgb/.test(a);
  },
  hsl: function hsl(a) {
    return /^hsl/.test(a);
  },
  col: function col(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function key(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
}; // Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
} // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js


function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;

    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }

    if (t === 0 || t === 1) {
      return t;
    }

    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];

    if (cached) {
      return cached;
    }

    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;

    while (true) {
      elapsed += frame;

      if (solver(elapsed) === 1) {
        rest++;

        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }

    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;
} // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function


function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
  };
} // BezierEasing https://github.com/gre/bezier-easing


var bezier = function () {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
  }

  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
  }

  function C(aA1) {
    return 3.0 * aA1;
  }

  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
        currentT,
        i = 0;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }

    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }

      if (x === 0 || x === 1) {
        return x;
      }

      return calcBezier(getTForX(x), mY1, mY2);
    };
  }

  return bezier;
}();

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function linear() {
      return function (t) {
        return t;
      };
    }
  };
  var functionEasings = {
    Sine: function Sine() {
      return function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
      };
    },
    Circ: function Circ() {
      return function (t) {
        return 1 - Math.sqrt(1 - t * t);
      };
    },
    Back: function Back() {
      return function (t) {
        return t * t * (3 * t - 2);
      };
    },
    Bounce: function Bounce() {
      return function (t) {
        var pow2,
            b = 4;

        while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {}

        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
      };
    },
    Elastic: function Elastic(amplitude, period) {
      if (amplitude === void 0) amplitude = 1;
      if (period === void 0) period = .5;
      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
      };
    }
  };
  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () {
      return function (t) {
        return Math.pow(t, i + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;

    eases['easeOut' + name] = function (a, b) {
      return function (t) {
        return 1 - easeIn(a, b)(1 - t);
      };
    };

    eases['easeInOut' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
      };
    };

    eases['easeOutIn' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
      };
    };
  });
  return eases;
}();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }

  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);

  switch (name) {
    case 'spring':
      return spring(easing, duration);

    case 'cubicBezier':
      return applyArguments(bezier, args);

    case 'steps':
      return applyArguments(steps, args);

    default:
      return applyArguments(ease, args);
  }
} // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function (property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  switch (path.property) {
    case 'x':
      return (p.x - svg.x) * scaleX;

    case 'y':
      return (p.y - svg.y) * scaleY;

    case 'angle':
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings); // Override duration if easing is a spring

  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    }; // Default delay value should only be applied to the first tween

    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    } // Default endDelay value should only be applied to the last tween


    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }

    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
    return Object.keys(key);
  })), function (p) {
    return is.key(p);
  }).reduce(function (a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }

    return a;
  }, []);
  var properties = {};

  var loop = function loop(i) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};

      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }

      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) {
    loop(i);
  }

  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;

  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function css(t, p, v) {
    return t.style[p] = v;
  },
  attribute: function attribute(t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function object(t, p, v) {
    return t[p] = v;
  },
  transform: function transform(t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;

  var getTlOffset = function getTlOffset(anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };

  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
} // Core


var activeInstances = [];

var engine = function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }

  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;

    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];

      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }

    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) {
      return;
    }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else {
      // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(function (instance) {
        return instance._onDocumentVisibility();
      });
      engine();
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
}();

function isDocumentHidden() {
  return !!document && document.hidden;
} // Public Instance


function anime(params) {
  if (params === void 0) params = {};
  var startTime = 0,
      lastTime = 0,
      now = 0;
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;

    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }

    instance.reversed = !instance.reversed;
    children.forEach(function (child) {
      return child.reversed = instance.reversed;
    });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;

        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }

    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }

    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }

    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }

    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }

      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }

    instance.currentTime = minMax(insTime, 0, insDuration);

    if (instance.began) {
      setCallback('update');
    }

    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();

      if (!instance.remaining) {
        instance.paused = true;

        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');

          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;

        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function () {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }

    if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
      instance.remaining++;
    }

    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  }; // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)


  instance._onDocumentVisibility = resetTime; // Set Value helper

  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function (t) {
    now = t;

    if (!startTime) {
      startTime = now;
    }

    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function (time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function () {
    instance.paused = true;
    resetTime();
  };

  instance.play = function () {
    if (!instance.paused) {
      return;
    }

    if (instance.completed) {
      instance.reset();
    }

    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function () {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function () {
    instance.reset();
    instance.play();
  };

  instance.remove = function (targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) {
    instance.play();
  }

  return instance;
} // Remove targets from animation


function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);

  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);

    if (!childAnimations.length && !child.children.length) {
      children.splice(c, 1);
    }
  }

  if (!animations.length && !children.length) {
    instance.pause();
  }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);

  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
} // Stagger helpers


function stagger(val, params) {
  if (params === void 0) params = {};
  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }

    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }

    if (fromLast) {
      fromIndex = t - 1;
    }

    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (axis === 'x') {
            value = -distanceX;
          }

          if (axis === 'y') {
            value = -distanceY;
          }

          values.push(value);
        }

        maxValue = Math.max.apply(Math, values);
      }

      if (easing) {
        values = values.map(function (val) {
          return easing(val / maxValue) * maxValue;
        });
      }

      if (direction === 'reverse') {
        values = values.map(function (val) {
          return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
        });
      }
    }

    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
} // Timeline


function timeline(params) {
  if (params === void 0) params = {};
  var tl = anime(params);
  tl.duration = 0;

  tl.add = function (instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;

    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }

    function passThrough(ins) {
      ins.passThrough = true;
    }

    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }

    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();

    if (tl.autoplay) {
      tl.play();
    }

    return tl;
  };

  return tl;
}

anime.version = '3.2.1';
anime.speed = 1; // TODO:#review: naming, documentation

anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;

anime.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anime);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************************!*\
  !*** ./themes/ta-portfolio/src/js/components/transition.js ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");



function lockscreen() {
  var body = document.getElementById("body");
  body.className += " lock-screen";
  body.addEventListener('touchmove', handleTouchMove, false);
}

function unlock() {
  var body = document.getElementById("body");
  body.classList.remove("lock-screen");
  body.removeEventListener('touchmove', handleTouchMove);
} // barba.init({
//     debug: true,
//
//     transitions: [{
//         //sync: true,
//         leave: (data) => {
//           return new Promise(resolve => {
//             unlock();
//             anime({
//                 targets: data.current.container,
//                 translateY: [100, 1000],
//                 easing: 'spring(1, 80, 10, 0)',
//                 complete: () => {
//                     resolve();
//                 }
//             });
//           });
//         },
//         enter: (data) => {
//             lockscreen();
//             anime({
//                 targets: data.next.container,
//                 translateY: [1000, 100],
//                 easing: 'spring(1, 80, 10, 0)',
//             });
//         },
//         beforeOnce: (data) => {
//           console.log("once!")
//
//           data.next.container.style.transform = "translateY(100px)"
//           // anime({
//           //     targets: data.next.container,
//           //     translateY: [1000, 100],
//           //     easing: 'spring(1, 80, 10, 0)',
//           // });
//         },
//         once: (data) => {
//
//         },
//         afterOnce: (data) => {
//           //lockscreen();
//         }
//     },{
//       name: 'to-home',
//       to: { namespace: ['home'] },
//       leave: (data) => {
//         return new Promise(resolve => {
//               anime({
//                   targets: data.current.container,
//                   translateY: [100, 1000],
//                   easing: 'spring(1, 80, 10, 0)',
//                   complete: () => {
//                       resolve();
//                   }
//               });
//           });
//       }
//     }]
// });
//
// barba.hooks.enter((data) => {
//   console.log(data.next.namespace);
// });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsSUFBSSxDQUFDdWEsZ0JBQUwsQ0FBc0IsV0FBdEIsRUFBbUMyWSxlQUFuQyxFQUFvRCxLQUFwRDtBQUNEOztBQUNELFNBQVNDLE1BQVQsR0FDQTtBQUNFLE1BQUluekIsSUFBSSxHQUFHOEgsUUFBUSxDQUFDa3JCLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWDtBQUNEaHpCLEVBQUFBLElBQUksQ0FBQ296QixTQUFMLENBQWVobkIsTUFBZixDQUFzQixhQUF0QjtBQUNBcE0sRUFBQUEsSUFBSSxDQUFDd2EsbUJBQUwsQ0FBeUIsV0FBekIsRUFBc0MwWSxlQUF0QztBQUNBLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tYXN5bmMtdG8tcHJvbWlzZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL21vZHVsZXMvTG9nZ2VyLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvZGVmcy9ob29rcy50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvc2NoZW1hcy9hdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy91dGlscy9oaXN0b3J5LnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3V0aWxzL3VybC50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3V0aWxzL3JlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pcy1wcm9taXNlL2luZGV4LmpzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvdXRpbHMvcnVuLWFzeW5jLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvaG9va3MudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy9tb2R1bGVzL0lnbm9yZS50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL21vZHVsZXMvQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy9tb2R1bGVzL1ByZXZlbnQudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy9tb2R1bGVzL0Vycm9yLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvbW9kdWxlcy9TdG9yZS50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL21vZHVsZXMvVHJhbnNpdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy9tb2R1bGVzL1ZpZXdzLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvcG9seWZpbGxzL2luZGV4LnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvc2NoZW1hcy9wYWdlLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvY29yZS50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9saWIvYW5pbWUuZXMuanMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RhLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RhLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uL3RoZW1lcy90YS1wb3J0Zm9saW8vc3JjL2pzL2NvbXBvbmVudHMvdHJhbnNpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBIHR5cGUgb2YgcHJvbWlzZS1saWtlIHRoYXQgcmVzb2x2ZXMgc3luY2hyb25vdXNseSBhbmQgc3VwcG9ydHMgb25seSBvbmUgb2JzZXJ2ZXJcbmV4cG9ydCBjb25zdCBfUGFjdCA9IC8qI19fUFVSRV9fKi8oZnVuY3Rpb24oKSB7XG5cdGZ1bmN0aW9uIF9QYWN0KCkge31cblx0X1BhY3QucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBfUGFjdCgpO1xuXHRcdGNvbnN0IHN0YXRlID0gdGhpcy5zO1xuXHRcdGlmIChzdGF0ZSkge1xuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSBzdGF0ZSAmIDEgPyBvbkZ1bGZpbGxlZCA6IG9uUmVqZWN0ZWQ7XG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMSwgY2FsbGJhY2sodGhpcy52KSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLm8gPSBmdW5jdGlvbihfdGhpcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBfdGhpcy52O1xuXHRcdFx0XHRpZiAoX3RoaXMucyAmIDEpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMSwgb25GdWxmaWxsZWQgPyBvbkZ1bGZpbGxlZCh2YWx1ZSkgOiB2YWx1ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAob25SZWplY3RlZCkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBvblJlamVjdGVkKHZhbHVlKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDIsIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdHJldHVybiBfUGFjdDtcbn0pKCk7XG5cbi8vIFNldHRsZXMgYSBwYWN0IHN5bmNocm9ub3VzbHlcbmV4cG9ydCBmdW5jdGlvbiBfc2V0dGxlKHBhY3QsIHN0YXRlLCB2YWx1ZSkge1xuXHRpZiAoIXBhY3Qucykge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIF9QYWN0KSB7XG5cdFx0XHRpZiAodmFsdWUucykge1xuXHRcdFx0XHRpZiAoc3RhdGUgJiAxKSB7XG5cdFx0XHRcdFx0c3RhdGUgPSB2YWx1ZS5zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUudjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlLm8gPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgc3RhdGUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0XHR2YWx1ZS50aGVuKF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCBzdGF0ZSksIF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBhY3QucyA9IHN0YXRlO1xuXHRcdHBhY3QudiA9IHZhbHVlO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gcGFjdC5vO1xuXHRcdGlmIChvYnNlcnZlcikge1xuXHRcdFx0b2JzZXJ2ZXIocGFjdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNTZXR0bGVkUGFjdCh0aGVuYWJsZSkge1xuXHRyZXR1cm4gdGhlbmFibGUgaW5zdGFuY2VvZiBfUGFjdCAmJiB0aGVuYWJsZS5zICYgMTtcbn1cblxuLy8gQ29udmVydHMgYXJndW1lbnQgdG8gYSBmdW5jdGlvbiB0aGF0IGFsd2F5cyByZXR1cm5zIGEgUHJvbWlzZVxuZXhwb3J0IGZ1bmN0aW9uIF9hc3luYyhmKSB7XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRmb3IgKHZhciBhcmdzID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmFwcGx5KHRoaXMsIGFyZ3MpKTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gQXdhaXRzIG9uIGEgdmFsdWUgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBhIFByb21pc2UgKGVxdWl2YWxlbnQgdG8gdGhlIGF3YWl0IGtleXdvcmQgaW4gRVMyMDE1LCB3aXRoIGNvbnRpbnVhdGlvbnMgcGFzc2VkIGV4cGxpY2l0bHkpXG5leHBvcnQgZnVuY3Rpb24gX2F3YWl0KHZhbHVlLCB0aGVuLCBkaXJlY3QpIHtcblx0aWYgKGRpcmVjdCkge1xuXHRcdHJldHVybiB0aGVuID8gdGhlbih2YWx1ZSkgOiB2YWx1ZTtcblx0fVxuXHRpZiAoIXZhbHVlIHx8ICF2YWx1ZS50aGVuKSB7XG5cdFx0dmFsdWUgPSBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuXHR9XG5cdHJldHVybiB0aGVuID8gdmFsdWUudGhlbih0aGVuKSA6IHZhbHVlO1xufVxuXG4vLyBBd2FpdHMgb24gYSB2YWx1ZSB0aGF0IG1heSBvciBtYXkgbm90IGJlIGEgUHJvbWlzZSwgdGhlbiBpZ25vcmVzIGl0XG5leHBvcnQgZnVuY3Rpb24gX2F3YWl0SWdub3JlZCh2YWx1ZSwgZGlyZWN0KSB7XG5cdGlmICghZGlyZWN0KSB7XG5cdFx0cmV0dXJuIHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF9lbXB0eSkgOiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxufVxuXG4vLyBQcm9jZWVkcyBhZnRlciBhIHZhbHVlIGhhcyByZXNvbHZlZCwgb3IgcHJvY2VlZHMgaW1tZWRpYXRlbHkgaWYgdGhlIHZhbHVlIGlzIG5vdCB0aGVuYWJsZVxuZXhwb3J0IGZ1bmN0aW9uIF9jb250aW51ZSh2YWx1ZSwgdGhlbikge1xuXHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4odGhlbikgOiB0aGVuKHZhbHVlKTtcbn1cblxuLy8gUHJvY2VlZHMgYWZ0ZXIgYSB2YWx1ZSBoYXMgcmVzb2x2ZWQsIG9yIHByb2NlZWRzIGltbWVkaWF0ZWx5IGlmIHRoZSB2YWx1ZSBpcyBub3QgdGhlbmFibGVcbmV4cG9ydCBmdW5jdGlvbiBfY29udGludWVJZ25vcmVkKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0cmV0dXJuIHZhbHVlLnRoZW4oX2VtcHR5KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0IHRoYXQgaGFzIGEgbGVuZ3RoIHByb3BlcnR5LCBwYXNzaW5nIHRoZSBpbmRleCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIChldmVuIGFzIHRoZSBsZW5ndGggcHJvcGVydHkgY2hhbmdlcylcbmV4cG9ydCBmdW5jdGlvbiBfZm9yVG8oYXJyYXksIGJvZHksIGNoZWNrKSB7XG5cdHZhciBpID0gLTEsIHBhY3QsIHJlamVjdDtcblx0ZnVuY3Rpb24gX2N5Y2xlKHJlc3VsdCkge1xuXHRcdHRyeSB7XG5cdFx0XHR3aGlsZSAoKytpIDwgYXJyYXkubGVuZ3RoICYmICghY2hlY2sgfHwgIWNoZWNrKCkpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGJvZHkoaSk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9jeWNsZSwgcmVqZWN0IHx8IChyZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCA9IG5ldyBfUGFjdCgpLCAyKSkpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHBhY3QpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFjdCA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QgfHwgKHBhY3QgPSBuZXcgX1BhY3QoKSksIDIsIGUpO1xuXHRcdH1cblx0fVxuXHRfY3ljbGUoKTtcblx0cmV0dXJuIHBhY3Q7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyBwcm9wZXJ0aWVzIChpbmNsdWRpbmcgcHJvcGVydGllcyBpbmhlcml0ZWQgZnJvbSB0aGUgcHJvdG90eXBlKVxuLy8gVXNlcyBhIHNuYXBzaG90IG9mIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzXG5leHBvcnQgZnVuY3Rpb24gX2ZvckluKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0dmFyIGtleXMgPSBbXTtcblx0Zm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuXHRcdGtleXMucHVzaChrZXkpO1xuXHR9XG5cdHJldHVybiBfZm9yVG8oa2V5cywgZnVuY3Rpb24oaSkgeyByZXR1cm4gYm9keShrZXlzW2ldKTsgfSwgY2hlY2spO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMgKGV4Y2x1ZGluZyBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBwcm90b3R5cGUpXG4vLyBVc2VzIGEgc25hcHNob3Qgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbmV4cG9ydCBmdW5jdGlvbiBfZm9yT3duKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0dmFyIGtleXMgPSBbXTtcblx0Zm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBrZXkpKSB7XG5cdFx0XHRrZXlzLnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIF9mb3JUbyhrZXlzLCBmdW5jdGlvbihpKSB7IHJldHVybiBib2R5KGtleXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbmV4cG9ydCBjb25zdCBfaXRlcmF0b3JTeW1ib2wgPSAvKiNfX1BVUkVfXyovIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyAoU3ltYm9sLml0ZXJhdG9yIHx8IChTeW1ib2wuaXRlcmF0b3IgPSBTeW1ib2woXCJTeW1ib2wuaXRlcmF0b3JcIikpKSA6IFwiQEBpdGVyYXRvclwiO1xuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0J3MgdmFsdWVzXG4vLyBVc2VzIGZvci4uLm9mIGlmIHRoZSBydW50aW1lIHN1cHBvcnRzIGl0LCBvdGhlcndpc2UgaXRlcmF0ZXMgdW50aWwgbGVuZ3RoIG9uIGEgY29weVxuZXhwb3J0IGZ1bmN0aW9uIF9mb3JPZih0YXJnZXQsIGJvZHksIGNoZWNrKSB7XG5cdGlmICh0eXBlb2YgdGFyZ2V0W19pdGVyYXRvclN5bWJvbF0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHZhciBpdGVyYXRvciA9IHRhcmdldFtfaXRlcmF0b3JTeW1ib2xdKCksIHN0ZXAsIHBhY3QsIHJlamVjdDtcblx0XHRmdW5jdGlvbiBfY3ljbGUocmVzdWx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lICYmICghY2hlY2sgfHwgIWNoZWNrKCkpKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gYm9keShzdGVwLnZhbHVlKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9jeWNsZSwgcmVqZWN0IHx8IChyZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCA9IG5ldyBfUGFjdCgpLCAyKSkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwYWN0KSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhY3QgPSByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0IHx8IChwYWN0ID0gbmV3IF9QYWN0KCkpLCAyLCBlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0X2N5Y2xlKCk7XG5cdFx0aWYgKGl0ZXJhdG9yLnJldHVybikge1xuXHRcdFx0dmFyIF9maXh1cCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKCFzdGVwLmRvbmUpIHtcblx0XHRcdFx0XHRcdGl0ZXJhdG9yLnJldHVybigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhY3QgJiYgcGFjdC50aGVuKSB7XG5cdFx0XHRcdHJldHVybiBwYWN0LnRoZW4oX2ZpeHVwLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0dGhyb3cgX2ZpeHVwKGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdF9maXh1cCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFjdDtcblx0fVxuXHQvLyBObyBzdXBwb3J0IGZvciBTeW1ib2wuaXRlcmF0b3Jcblx0aWYgKCEoXCJsZW5ndGhcIiBpbiB0YXJnZXQpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgaXRlcmFibGVcIik7XG5cdH1cblx0Ly8gSGFuZGxlIGxpdmUgY29sbGVjdGlvbnMgcHJvcGVybHlcblx0dmFyIHZhbHVlcyA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldC5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHVlcy5wdXNoKHRhcmdldFtpXSk7XG5cdH1cblx0cmV0dXJuIF9mb3JUbyh2YWx1ZXMsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGJvZHkodmFsdWVzW2ldKTsgfSwgY2hlY2spO1xufVxuXG5leHBvcnQgY29uc3QgX2FzeW5jSXRlcmF0b3JTeW1ib2wgPSAvKiNfX1BVUkVfXyovIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyAoU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgKFN5bWJvbC5hc3luY0l0ZXJhdG9yID0gU3ltYm9sKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3JcIikpKSA6IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgb24gYSB2YWx1ZSB1c2luZyBpdCdzIGFzeW5jIGl0ZXJhdG9yIGlmIHByZXNlbnQsIG9yIGl0cyBzeW5jaHJvbm91cyBpdGVyYXRvciBpZiBtaXNzaW5nXG5leHBvcnQgZnVuY3Rpb24gX2ZvckF3YWl0T2YodGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHRpZiAodHlwZW9mIHRhcmdldFtfYXN5bmNJdGVyYXRvclN5bWJvbF0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHZhciBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGFyZ2V0W19hc3luY0l0ZXJhdG9yU3ltYm9sXSgpO1xuXHRcdGl0ZXJhdG9yLm5leHQoKS50aGVuKF9yZXN1bWVBZnRlck5leHQpLnRoZW4odm9pZCAwLCBfcmVqZWN0KTtcblx0XHRyZXR1cm4gcGFjdDtcblx0XHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCkge1xuXHRcdFx0aWYgKGNoZWNrICYmIGNoZWNrKCkpIHtcblx0XHRcdFx0cmV0dXJuIF9zZXR0bGUocGFjdCwgMSwgaXRlcmF0b3IucmV0dXJuID8gaXRlcmF0b3IucmV0dXJuKCkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIHJlc3VsdDsgfSkgOiByZXN1bHQpO1xuXHRcdFx0fVxuXHRcdFx0aXRlcmF0b3IubmV4dCgpLnRoZW4oX3Jlc3VtZUFmdGVyTmV4dCkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJOZXh0KHN0ZXApIHtcblx0XHRcdGlmIChzdGVwLmRvbmUpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0LCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFByb21pc2UucmVzb2x2ZShib2R5KHN0ZXAudmFsdWUpKS50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCBfcmVqZWN0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZnVuY3Rpb24gX3JlamVjdChlcnJvcikge1xuXHRcdFx0X3NldHRsZShwYWN0LCAyLCBpdGVyYXRvci5yZXR1cm4gPyBpdGVyYXRvci5yZXR1cm4oKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZXJyb3I7IH0pIDogZXJyb3IpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF9mb3JPZih0YXJnZXQsIGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oYm9keSk7IH0sIGNoZWNrKSk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGltcGxlbWVudCBhIGdlbmVyaWMgZm9yIGxvb3BcbmV4cG9ydCBmdW5jdGlvbiBfZm9yKHRlc3QsIHVwZGF0ZSwgYm9keSkge1xuXHR2YXIgc3RhZ2U7XG5cdGZvciAoOzspIHtcblx0XHR2YXIgc2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0c2hvdWxkQ29udGludWUgPSBzaG91bGRDb250aW51ZS52O1xuXHRcdH1cblx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRpZiAoc2hvdWxkQ29udGludWUudGhlbikge1xuXHRcdFx0c3RhZ2UgPSAwO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdGFnZSA9IDE7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodXBkYXRlKSB7XG5cdFx0XHR2YXIgdXBkYXRlVmFsdWUgPSB1cGRhdGUoKTtcblx0XHRcdGlmICh1cGRhdGVWYWx1ZSAmJiB1cGRhdGVWYWx1ZS50aGVuICYmICFfaXNTZXR0bGVkUGFjdCh1cGRhdGVWYWx1ZSkpIHtcblx0XHRcdFx0c3RhZ2UgPSAyO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dmFyIHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0dmFyIHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKTtcblx0KHN0YWdlID09PSAwID8gc2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KSA6IHN0YWdlID09PSAxID8gcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkgOiB1cGRhdGVWYWx1ZS50aGVuKF9yZXN1bWVBZnRlclVwZGF0ZSkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keSh2YWx1ZSkge1xuXHRcdHJlc3VsdCA9IHZhbHVlO1xuXHRcdGRvIHtcblx0XHRcdGlmICh1cGRhdGUpIHtcblx0XHRcdFx0dXBkYXRlVmFsdWUgPSB1cGRhdGUoKTtcblx0XHRcdFx0aWYgKHVwZGF0ZVZhbHVlICYmIHVwZGF0ZVZhbHVlLnRoZW4gJiYgIV9pc1NldHRsZWRQYWN0KHVwZGF0ZVZhbHVlKSkge1xuXHRcdFx0XHRcdHVwZGF0ZVZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVXBkYXRlKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSB8fCAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpICYmICFzaG91bGRDb250aW51ZS52KSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0fVxuXHRcdH0gd2hpbGUgKCFyZXN1bHQgfHwgIXJlc3VsdC50aGVuKTtcblx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0fVxuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJUZXN0KHNob3VsZENvbnRpbnVlKSB7XG5cdFx0aWYgKHNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3Jlc3VtZUFmdGVyQm9keShyZXN1bHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclVwZGF0ZSgpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUgPSB0ZXN0KCkpIHtcblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfcmVzdW1lQWZ0ZXJUZXN0KHNob3VsZENvbnRpbnVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpbXBsZW1lbnQgYSBkbyAuLi4gd2hpbGUgbG9vcFxuZXhwb3J0IGZ1bmN0aW9uIF9kbyhib2R5LCB0ZXN0KSB7XG5cdHZhciBhd2FpdEJvZHk7XG5cdGRvIHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXdhaXRCb2R5ID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciBzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRpZiAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpKSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0fVxuXHRcdGlmICghc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9IHdoaWxlICghc2hvdWxkQ29udGludWUudGhlbik7XG5cdGNvbnN0IHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0Y29uc3QgcmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpO1xuXHQoYXdhaXRCb2R5ID8gcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkgOiBzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0cmV0dXJuIHBhY3Q7XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlckJvZHkodmFsdWUpIHtcblx0XHRyZXN1bHQgPSB2YWx1ZTtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUgPSBzaG91bGRDb250aW51ZS52O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0gd2hpbGUgKCFzaG91bGRDb250aW51ZS50aGVuKTtcblx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHR9XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaW1wbGVtZW50IGEgc3dpdGNoIHN0YXRlbWVudFxuZXhwb3J0IGZ1bmN0aW9uIF9zd2l0Y2goZGlzY3JpbWluYW50LCBjYXNlcykge1xuXHR2YXIgZGlzcGF0Y2hJbmRleCA9IC0xO1xuXHR2YXIgYXdhaXRCb2R5O1xuXHRvdXRlcjoge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB0ZXN0ID0gY2FzZXNbaV1bMF07XG5cdFx0XHRpZiAodGVzdCkge1xuXHRcdFx0XHR2YXIgdGVzdFZhbHVlID0gdGVzdCgpO1xuXHRcdFx0XHRpZiAodGVzdFZhbHVlICYmIHRlc3RWYWx1ZS50aGVuKSB7XG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRlc3RWYWx1ZSA9PT0gZGlzY3JpbWluYW50KSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEZvdW5kIHRoZSBkZWZhdWx0IGNhc2UsIHNldCBpdCBhcyB0aGUgcGVuZGluZyBkaXNwYXRjaCBjYXNlXG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZGlzcGF0Y2hJbmRleCAhPT0gLTEpIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0dmFyIGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdFx0d2hpbGUgKCFib2R5KSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRcdGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0YXdhaXRCb2R5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHR9IHdoaWxlIChmYWxsdGhyb3VnaENoZWNrICYmICFmYWxsdGhyb3VnaENoZWNrKCkpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH1cblx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRjb25zdCByZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgMik7XG5cdChhd2FpdEJvZHkgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHRlc3RWYWx1ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0cmV0dXJuIHBhY3Q7XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3QodmFsdWUpIHtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHRpZiAodmFsdWUgPT09IGRpc2NyaW1pbmFudCkge1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKytpID09PSBjYXNlcy5sZW5ndGgpIHtcblx0XHRcdFx0aWYgKGRpc3BhdGNoSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGVzdCA9IGNhc2VzW2ldWzBdO1xuXHRcdFx0aWYgKHRlc3QpIHtcblx0XHRcdFx0dmFsdWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0XHRcdFx0dmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkbyB7XG5cdFx0XHR2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0d2hpbGUgKCFib2R5KSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdFx0Ym9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0fSB3aGlsZSAoZmFsbHRocm91Z2hDaGVjayAmJiAhZmFsbHRocm91Z2hDaGVjaygpKTtcblx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keShyZXN1bHQpIHtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHR2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuXHRcdFx0aWYgKCFmYWxsdGhyb3VnaENoZWNrIHx8IGZhbGx0aHJvdWdoQ2hlY2soKSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdHZhciBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHBhc3MgdGhlIHJlc3VsdCB0byBleHBsaWNpdGx5IHBhc3NlZCBjb250aW51YXRpb25zXG5leHBvcnQgZnVuY3Rpb24gX2NhbGwoYm9keSwgdGhlbiwgZGlyZWN0KSB7XG5cdGlmIChkaXJlY3QpIHtcblx0XHRyZXR1cm4gdGhlbiA/IHRoZW4oYm9keSgpKSA6IGJvZHkoKTtcblx0fVxuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUoYm9keSgpKTtcblx0XHRyZXR1cm4gdGhlbiA/IHJlc3VsdC50aGVuKHRoZW4pIDogcmVzdWx0O1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc3dhbGxvdyB0aGUgcmVzdWx0XG5leHBvcnQgZnVuY3Rpb24gX2NhbGxJZ25vcmVkKGJvZHksIGRpcmVjdCkge1xuXHRyZXR1cm4gX2NhbGwoYm9keSwgX2VtcHR5LCBkaXJlY3QpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHBhc3MgdGhlIHJlc3VsdCB0byBleHBsaWNpdGx5IHBhc3NlZCBjb250aW51YXRpb25zXG5leHBvcnQgZnVuY3Rpb24gX2ludm9rZShib2R5LCB0aGVuKSB7XG5cdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4odGhlbik7XG5cdH1cblx0cmV0dXJuIHRoZW4ocmVzdWx0KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzd2FsbG93IHRoZSByZXN1bHRcbmV4cG9ydCBmdW5jdGlvbiBfaW52b2tlSWdub3JlZChib2R5KSB7XG5cdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oX2VtcHR5KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHNlbmQgZXJyb3JzIHRvIHJlY292ZXJ5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaChib2R5LCByZWNvdmVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0cmV0dXJuIHJlY292ZXIoZSk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbih2b2lkIDAsIHJlY292ZXIpO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGF3YWl0IGEgcHJvbWlzZSBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGEgZmluYWxseSBjb250aW51YXRpb25cbmV4cG9ydCBmdW5jdGlvbiBfZmluYWxseVJldGhyb3dzKGJvZHksIGZpbmFsaXplcikge1xuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmluYWxpemVyKHRydWUsIGUpO1xuXHR9XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oZmluYWxpemVyLmJpbmQobnVsbCwgZmFsc2UpLCBmaW5hbGl6ZXIuYmluZChudWxsLCB0cnVlKSk7XG5cdH1cblx0cmV0dXJuIGZpbmFsaXplcihmYWxzZSwgcmVzdWx0KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgYXdhaXQgYSBwcm9taXNlIGFuZCBpbnZva2UgYSBmaW5hbGx5IGNvbnRpbnVhdGlvbiB0aGF0IGFsd2F5cyBvdmVycmlkZXMgdGhlIHJlc3VsdFxuZXhwb3J0IGZ1bmN0aW9uIF9maW5hbGx5KGJvZHksIGZpbmFsaXplcikge1xuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmluYWxpemVyKCk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihmaW5hbGl6ZXIsIGZpbmFsaXplcik7XG5cdH1cblx0cmV0dXJuIGZpbmFsaXplcigpO1xufVxuXG4vLyBSZXRocm93IG9yIHJldHVybiBhIHZhbHVlIGZyb20gYSBmaW5hbGx5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXRocm93KHRocm93biwgdmFsdWUpIHtcblx0aWYgKHRocm93bilcblx0XHR0aHJvdyB2YWx1ZTtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG4vLyBFbXB0eSBmdW5jdGlvbiB0byBpbXBsZW1lbnQgYnJlYWsgYW5kIG90aGVyIGNvbnRyb2wgZmxvdyB0aGF0IGlnbm9yZXMgYXN5bmNocm9ub3VzIHJlc3VsdHNcbmV4cG9ydCBmdW5jdGlvbiBfZW1wdHkoKSB7XG59XG5cbi8vIFNlbnRpbmVsIHZhbHVlIGZvciBlYXJseSByZXR1cm5zIGluIGdlbmVyYXRvcnMgXG5leHBvcnQgY29uc3QgX2Vhcmx5UmV0dXJuID0gLyojX19QVVJFX18qLyB7fTtcblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzZW5kIGVycm9ycyB0byByZWNvdmVyeSBjb250aW51YXRpb24sIHNraXBwaW5nIGVhcmx5IHJldHVybnNcbmV4cG9ydCBmdW5jdGlvbiBfY2F0Y2hJbkdlbmVyYXRvcihib2R5LCByZWNvdmVyKSB7XG5cdHJldHVybiBfY2F0Y2goYm9keSwgZnVuY3Rpb24oZSkge1xuXHRcdGlmIChlID09PSBfZWFybHlSZXR1cm4pIHtcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdHJldHVybiByZWNvdmVyKGUpO1xuXHR9KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzIGdlbmVyYXRvciBjbGFzczsgYWNjZXB0cyB0aGUgZW50cnlwb2ludCBvZiB0aGUgZ2VuZXJhdG9yLCB0byB3aGljaCBpdCBwYXNzZXMgaXRzZWxmIHdoZW4gdGhlIGdlbmVyYXRvciBzaG91bGQgc3RhcnRcbmV4cG9ydCBjb25zdCBfQXN5bmNHZW5lcmF0b3IgPSAvKiNfX1BVUkVfXyovKGZ1bmN0aW9uKCkge1xuXHRmdW5jdGlvbiBfQXN5bmNHZW5lcmF0b3IoZW50cnkpIHtcblx0XHR0aGlzLl9lbnRyeSA9IGVudHJ5O1xuXHRcdHRoaXMuX3BhY3QgPSBudWxsO1xuXHRcdHRoaXMuX3Jlc29sdmUgPSBudWxsO1xuXHRcdHRoaXMuX3JldHVybiA9IG51bGw7XG5cdFx0dGhpcy5fcHJvbWlzZSA9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBfd3JhcFJldHVybmVkVmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcblx0fVxuXHRmdW5jdGlvbiBfd3JhcFlpZWxkZWRWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZmFsc2UgfTtcblx0fVxuXG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUuX3lpZWxkID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHQvLyBZaWVsZCB0aGUgdmFsdWUgdG8gdGhlIHBlbmRpbmcgbmV4dCBjYWxsXG5cdFx0dGhpcy5fcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFlpZWxkZWRWYWx1ZSkgOiBfd3JhcFlpZWxkZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdC8vIFJldHVybiBhIHBhY3QgZm9yIGFuIHVwY29taW5nIG5leHQvcmV0dXJuL3Rocm93IGNhbGxcblx0XHRyZXR1cm4gdGhpcy5fcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHR9O1xuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIEFkdmFuY2UgdGhlIGdlbmVyYXRvciwgc3RhcnRpbmcgaXQgaWYgaXQgaGFzIHlldCB0byBiZSBzdGFydGVkXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IF9lbnRyeSA9IF90aGlzLl9lbnRyeTtcblx0XHRcdFx0aWYgKF9lbnRyeSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkLCBidXQgbm90IGF3YWl0aW5nIGEgeWllbGQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdC8vIEFiYW5kb24gdGhlIG5leHQgY2FsbCFcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfdGhpcy5fcHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU3RhcnQgdGhlIGdlbmVyYXRvclxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRcdGZ1bmN0aW9uIHJldHVyblZhbHVlKHZhbHVlKSB7XG5cdFx0XHRcdFx0X3RoaXMuX3Jlc29sdmUodmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX3dyYXBSZXR1cm5lZFZhbHVlKSA6IF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdFx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHJlc3VsdCA9IF9lbnRyeShfdGhpcyk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRyZXN1bHQudGhlbihyZXR1cm5WYWx1ZSwgZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdFx0XHRcdGlmIChlcnJvciA9PT0gX2Vhcmx5UmV0dXJuKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVyblZhbHVlKF90aGlzLl9yZXR1cm4pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZShwYWN0KTtcblx0XHRcdFx0XHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdF9yZXNvbHZlKHBhY3QsIDIsIGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm5WYWx1ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCBhbmQgYSB5aWVsZCBleHByZXNzaW9uIGlzIHBlbmRpbmcsIHNldHRsZSBpdFxuXHRcdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdFx0X3NldHRsZShfcGFjdCwgMSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0Ly8gRWFybHkgcmV0dXJuIGZyb20gdGhlIGdlbmVyYXRvciBpZiBzdGFydGVkLCBvdGhlcndpc2UgYWJhbmRvbnMgdGhlIGdlbmVyYXRvclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblx0XHRyZXR1cm4gX3RoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdFx0Y29uc3QgX3BhY3QgPSBfdGhpcy5fcGFjdDtcblx0XHRcdGlmIChfcGFjdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoX3RoaXMuX2VudHJ5ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQsIGJ1dCBub3QgYXdhaXRpbmcgYSB5aWVsZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0Ly8gQWJhbmRvbiB0aGUgcmV0dXJuIGNhbGwhXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoX3RoaXMuX3Byb21pc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBub3Qgc3RhcnRlZCwgYWJhbmRvbiBpdCBhbmQgcmV0dXJuIHRoZSBzcGVjaWZpZWQgdmFsdWVcblx0XHRcdFx0X3RoaXMuX2VudHJ5ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmUodmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX3dyYXBSZXR1cm5lZFZhbHVlKSA6IF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0dGxlIHRoZSB5aWVsZCBleHByZXNzaW9uIHdpdGggYSByZWplY3RlZCBcImVhcmx5IHJldHVyblwiIHZhbHVlXG5cdFx0XHRfdGhpcy5fcmV0dXJuID0gdmFsdWU7XG5cdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRfc2V0dGxlKF9wYWN0LCAyLCBfZWFybHlSZXR1cm4pO1xuXHRcdH0pO1xuXHR9O1xuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24oZXJyb3IpIHtcblx0XHQvLyBJbmplY3QgYW4gZXhjZXB0aW9uIGludG8gdGhlIHBlbmRpbmcgeWllbGQgZXhwcmVzc2lvblxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblx0XHRyZXR1cm4gX3RoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGlmIChfdGhpcy5fZW50cnkgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCwgYnV0IG5vdCBhd2FpdGluZyBhIHlpZWxkIGV4cHJlc3Npb25cblx0XHRcdFx0XHQvLyBBYmFuZG9uIHRoZSB0aHJvdyBjYWxsIVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKF90aGlzLl9wcm9taXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgbm90IHN0YXJ0ZWQsIGFiYW5kb24gaXQgYW5kIHJldHVybiBhIHJlamVjdGVkIFByb21pc2UgY29udGFpbmluZyB0aGUgZXJyb3Jcblx0XHRcdFx0X3RoaXMuX2VudHJ5ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXR0bGUgdGhlIHlpZWxkIGV4cHJlc3Npb24gd2l0aCB0aGUgdmFsdWUgYXMgYSByZWplY3Rpb25cblx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdF9zZXR0bGUoX3BhY3QsIDIsIGVycm9yKTtcblx0XHR9KTtcblx0fTtcblxuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW19hc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXHRcblx0cmV0dXJuIF9Bc3luY0dlbmVyYXRvcjtcbn0pKCk7XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvTG9nZ2VyXG4gKiA8YnI+PGJyPlxuICogIyMgTG9nZ2VyLlxuICpcbiAqIC0gRGlzcGxheSBpbmZvcm1hdGlvbnMgdmlhIHRoZSBjb25zb2xlXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvTG9nZ2VyXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLyoqXG4gKiBMb2cgbGV2ZWxzLCBhbGwgbG93ZXIgbGV2ZWwgbWVzc2FnZXMgYXJlIHByaW50ZWRcbiAqXG4gKiAwLiBtdXRlXG4gKiAxLiBlcnJvciA9IGBjb25zb2xlLmVycm9yKClgXG4gKiAyLiB3YXJuaW5nPSBgY29uc29sZS53YXJuKClgXG4gKiAzLiBpbmZvID0gYGNvbnNvbGUuaW5mbygpYFxuICogNC4gZGVidWcgPSBgY29uc29sZS5sb2coKWBcbiAqL1xuZXhwb3J0IGVudW0gTG9nTGV2ZWxzIHtcbiAgb2ZmID0gMCxcbiAgZXJyb3IgPSAxLFxuICB3YXJuaW5nID0gMixcbiAgaW5mbyA9IDMsXG4gIGRlYnVnID0gNCxcbn1cblxuLyoqXG4gKiBHbG9iYWwgbG9nIGxldmVsXG4gKi9cbmxldCBfbGV2ZWw6IG51bWJlciA9IExvZ0xldmVscy5vZmY7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAvKipcbiAgICogR2V0IGdsb2JhbCBsb2cgbGV2ZWwuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldExldmVsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIF9sZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZ2xvYmFsIGxvZyBsZXZlbC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2V0TGV2ZWwobmFtZToga2V5b2YgdHlwZW9mIExvZ0xldmVscyk6IG51bWJlciB7XG4gICAgX2xldmVsID0gTG9nTGV2ZWxzW25hbWVdO1xuXG4gICAgcmV0dXJuIF9sZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgXCJwcmVmaXhcIi5cbiAgICovXG4gIHByaXZhdGUgX3NvdXJjZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExvZ2dlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcm1hbmVudCwgdW5yZW1vdmFibGUgbG9nLlxuICAgKi9cbiAgLy8gcHVibGljIHByaW50KC4uLm9iamVjdHM6IGFueVtdKTogdm9pZCB7XG4gIC8vICAgdGhpcy5fbG9nKGNvbnNvbGUuaW5mbywgTG9nTGV2ZWxzLm9mZiwgb2JqZWN0cyk7XG4gIC8vIH1cblxuICAvKipcbiAgICogRXJyb3IgbG9nLlxuICAgKi9cbiAgcHVibGljIGVycm9yKC4uLm9iamVjdHM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5fbG9nKGNvbnNvbGUuZXJyb3IsIExvZ0xldmVscy5lcnJvciwgb2JqZWN0cyk7XG4gIH1cblxuICAvKipcbiAgICogV2FybiBsb2cuXG4gICAqL1xuICBwdWJsaWMgd2FybiguLi5vYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuX2xvZyhjb25zb2xlLndhcm4sIExvZ0xldmVscy53YXJuaW5nLCBvYmplY3RzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmZvIGxvZy5cbiAgICovXG4gIHB1YmxpYyBpbmZvKC4uLm9iamVjdHM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5fbG9nKGNvbnNvbGUuaW5mbywgTG9nTGV2ZWxzLmluZm8sIG9iamVjdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYnVnIGxvZy5cbiAgICovXG4gIHB1YmxpYyBkZWJ1ZyguLi5vYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuX2xvZyhjb25zb2xlLmxvZywgTG9nTGV2ZWxzLmRlYnVnLCBvYmplY3RzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBsb2dnZXIuXG4gICAqL1xuICBwcml2YXRlIF9sb2coZm46ICgpID0+IHZvaWQsIGxldmVsOiBudW1iZXIsIG9iamVjdHM6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKGxldmVsIDw9IExvZ2dlci5nZXRMZXZlbCgpKSB7XG4gICAgICBmbi5hcHBseShjb25zb2xlLCAoW2BbJHt0aGlzLl9zb3VyY2V9XSBgXS5jb25jYXQob2JqZWN0cykgYXMgdW5rbm93bikgYXMgW1xuXG4gICAgICBdKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQG1vZHVsZSB0eXBpbmdzL2NvcmVcbiAqL1xuaW1wb3J0IHsgSVRyYW5zaXRpb25EYXRhLCBJVHJhbnNpdGlvblBhZ2UsIElWaWV3RGF0YSB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgdHlwZSBIb29rc0JhcmJhID1cbiAgfCAncmVhZHknXG4gIHwgJ3BhZ2UnXG4gIHwgJ3Jlc2V0J1xuICB8ICdjdXJyZW50QWRkZWQnXG4gIHwgJ2N1cnJlbnRSZW1vdmVkJ1xuICB8ICduZXh0QWRkZWQnXG4gIHwgJ25leHRSZW1vdmVkJztcblxuZXhwb3J0IHR5cGUgSG9va3NPbmNlID0gJ2JlZm9yZU9uY2UnIHwgJ29uY2UnIHwgJ2FmdGVyT25jZSc7XG5cbmV4cG9ydCB0eXBlIEhvb2tzUGFnZSA9XG4gIHwgJ2JlZm9yZSdcbiAgfCAnYmVmb3JlTGVhdmUnXG4gIHwgJ2xlYXZlJ1xuICB8ICdhZnRlckxlYXZlJ1xuICB8ICdiZWZvcmVFbnRlcidcbiAgfCAnZW50ZXInXG4gIHwgJ2FmdGVyRW50ZXInXG4gIHwgJ2FmdGVyJztcblxuZXhwb3J0IHR5cGUgSG9va3NCZWZvcmUgPSAnYmVmb3JlT25jZScgfCAnYmVmb3JlTGVhdmUnIHwgJ2JlZm9yZUVudGVyJztcbmV4cG9ydCB0eXBlIEhvb2tzQWZ0ZXIgPSAnYWZ0ZXJPbmNlJyB8ICdhZnRlckxlYXZlJyB8ICdhZnRlckVudGVyJztcblxuZXhwb3J0IHR5cGUgSG9va3NUcmFuc2l0aW9uID0gSG9va3NPbmNlIHwgSG9va3NQYWdlO1xuZXhwb3J0IHR5cGUgSG9va3NWaWV3ID0gSG9va3NCZWZvcmUgfCBIb29rc0FmdGVyO1xuZXhwb3J0IHR5cGUgSG9va3NBbGwgPSBIb29rc0JhcmJhIHwgSG9va3NUcmFuc2l0aW9uO1xuXG4vLyBBbGxvdyBvcHRpb25hbCBcImR5bmFtaWNhbGx5IGNyZWF0ZWRcIiBob29rc1xuZXhwb3J0IHR5cGUgSG9va3NUcmFuc2l0aW9uTWFwID0geyBba2V5IGluIEhvb2tzVHJhbnNpdGlvbl0/OiBhbnkgfTtcblxuZXhwb3J0IHR5cGUgSG9va0Z1bmN0aW9uID0gKFxuICBkYXRhPzogSVRyYW5zaXRpb25EYXRhIHwgSVZpZXdEYXRhLFxuICB0PzogSVRyYW5zaXRpb25QYWdlXG4pID0+IFByb21pc2U8dm9pZD4gfCB2b2lkO1xuXG5leHBvcnQgY2xhc3MgSG9va01ldGhvZHMge1xuICBwdWJsaWMgYmVmb3JlOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgYmVmb3JlTGVhdmU6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBsZWF2ZTogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGFmdGVyTGVhdmU6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBiZWZvcmVFbnRlcjogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGVudGVyOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgYWZ0ZXJFbnRlcjogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGFmdGVyOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xufVxuIiwiLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcGF0aFRvUmVnZXhwXG5tb2R1bGUuZXhwb3J0cy5tYXRjaCA9IG1hdGNoXG5tb2R1bGUuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvblxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGVcbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb1JlZ0V4cCA9IHRva2Vuc1RvUmVnRXhwXG5cbi8qKlxuICogRGVmYXVsdCBjb25maWdzLlxuICovXG52YXIgREVGQVVMVF9ERUxJTUlURVIgPSAnLydcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIjp0ZXN0KFxcXFxkKyk/XCIgPT4gW1widGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIl1cbiAgLy8gXCIoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWRdXG4gICcoPzpcXFxcOihcXFxcdyspKD86XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSk/fFxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpKFsrKj9dKT8nXG5dLmpvaW4oJ3wnKSwgJ2cnKVxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0ciwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGtleSA9IDBcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcGF0aCA9ICcnXG4gIHZhciBkZWZhdWx0RGVsaW1pdGVyID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIpIHx8IERFRkFVTFRfREVMSU1JVEVSXG4gIHZhciB3aGl0ZWxpc3QgPSAob3B0aW9ucyAmJiBvcHRpb25zLndoaXRlbGlzdCkgfHwgdW5kZWZpbmVkXG4gIHZhciBwYXRoRXNjYXBlZCA9IGZhbHNlXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICB2YXIgbSA9IHJlc1swXVxuICAgIHZhciBlc2NhcGVkID0gcmVzWzFdXG4gICAgdmFyIG9mZnNldCA9IHJlcy5pbmRleFxuICAgIHBhdGggKz0gc3RyLnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgaW5kZXggPSBvZmZzZXQgKyBtLmxlbmd0aFxuXG4gICAgLy8gSWdub3JlIGFscmVhZHkgZXNjYXBlZCBzZXF1ZW5jZXMuXG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHBhdGggKz0gZXNjYXBlZFsxXVxuICAgICAgcGF0aEVzY2FwZWQgPSB0cnVlXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBwcmV2ID0gJydcbiAgICB2YXIgbmFtZSA9IHJlc1syXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzNdXG4gICAgdmFyIGdyb3VwID0gcmVzWzRdXG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzVdXG5cbiAgICBpZiAoIXBhdGhFc2NhcGVkICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgICB2YXIgayA9IHBhdGgubGVuZ3RoIC0gMVxuICAgICAgdmFyIGMgPSBwYXRoW2tdXG4gICAgICB2YXIgbWF0Y2hlcyA9IHdoaXRlbGlzdCA/IHdoaXRlbGlzdC5pbmRleE9mKGMpID4gLTEgOiB0cnVlXG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHByZXYgPSBjXG4gICAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGspXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHVzaCB0aGUgY3VycmVudCBwYXRoIG9udG8gdGhlIHRva2Vucy5cbiAgICBpZiAocGF0aCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0aClcbiAgICAgIHBhdGggPSAnJ1xuICAgICAgcGF0aEVzY2FwZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHZhciByZXBlYXQgPSBtb2RpZmllciA9PT0gJysnIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgb3B0aW9uYWwgPSBtb2RpZmllciA9PT0gJz8nIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgcGF0dGVybiA9IGNhcHR1cmUgfHwgZ3JvdXBcbiAgICB2YXIgZGVsaW1pdGVyID0gcHJldiB8fCBkZWZhdWx0RGVsaW1pdGVyXG5cbiAgICB0b2tlbnMucHVzaCh7XG4gICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgcHJlZml4OiBwcmV2LFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm5cbiAgICAgICAgPyBlc2NhcGVHcm91cChwYXR0ZXJuKVxuICAgICAgICA6ICdbXicgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyID09PSBkZWZhdWx0RGVsaW1pdGVyID8gZGVsaW1pdGVyIDogKGRlbGltaXRlciArIGRlZmF1bHREZWxpbWl0ZXIpKSArICddKz8nXG4gICAgfSlcbiAgfVxuXG4gIC8vIFB1c2ggYW55IHJlbWFpbmluZyBjaGFyYWN0ZXJzLlxuICBpZiAocGF0aCB8fCBpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoICsgc3RyLnN1YnN0cihpbmRleCkpXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshZnVuY3Rpb24oT2JqZWN0PSwgT2JqZWN0PSl9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaCAoc3RyLCBvcHRpb25zKSB7XG4gIHZhciBrZXlzID0gW11cbiAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucylcbiAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uIChyZSwga2V5cykge1xuICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lLCBvcHRpb25zKSB7XG4gICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKVxuICAgIGlmICghbSkgcmV0dXJuIGZhbHNlXG5cbiAgICB2YXIgcGF0aCA9IG1bMF1cbiAgICB2YXIgaW5kZXggPSBtLmluZGV4XG4gICAgdmFyIHBhcmFtcyA9IHt9XG4gICAgdmFyIGRlY29kZSA9IChvcHRpb25zICYmIG9wdGlvbnMuZGVjb2RlKSB8fCBkZWNvZGVVUklDb21wb25lbnRcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZCkgY29udGludWVcblxuICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdXG5cbiAgICAgIGlmIChrZXkucmVwZWF0KSB7XG4gICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5kZWxpbWl0ZXIpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJywgZmxhZ3Mob3B0aW9ucykpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhdGggPSAnJ1xuICAgIHZhciBlbmNvZGUgPSAob3B0aW9ucyAmJiBvcHRpb25zLmVuY29kZSkgfHwgZW5jb2RlVVJJQ29tcG9uZW50XG4gICAgdmFyIHZhbGlkYXRlID0gb3B0aW9ucyA/IG9wdGlvbnMudmFsaWRhdGUgIT09IGZhbHNlIDogdHJ1ZVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoICs9IHRva2VuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkXG4gICAgICB2YXIgc2VnbWVudFxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYXJyYXknKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkgY29udGludWVcblxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IGJlIGVtcHR5JylcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbilcblxuICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbilcblxuICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IGdvdCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgICAgfVxuXG4gICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIGNvbnRpbnVlXG5cbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gYmUgJyArICh0b2tlbi5yZXBlYXQgPyAnYW4gYXJyYXknIDogJ2Egc3RyaW5nJykpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiQvKCldKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/ICcnIDogJ2knXG59XG5cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHBhdGhcbiAqIEBwYXJhbSAge0FycmF5PX0gIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwIChwYXRoLCBrZXlzKSB7XG4gIGlmICgha2V5cykgcmV0dXJuIHBhdGhcblxuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZylcblxuICBpZiAoZ3JvdXBzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgIHJlcGVhdDogZmFsc2UsXG4gICAgICAgIHBhdHRlcm46IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheT19ICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5PX0gIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb1JlZ0V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHRva2Vuc1xuICogQHBhcmFtICB7QXJyYXk9fSAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdFeHAgKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdFxuICB2YXIgc3RhcnQgPSBvcHRpb25zLnN0YXJ0ICE9PSBmYWxzZVxuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIHZhciBkZWxpbWl0ZXIgPSBvcHRpb25zLmRlbGltaXRlciB8fCBERUZBVUxUX0RFTElNSVRFUlxuICB2YXIgZW5kc1dpdGggPSBbXS5jb25jYXQob3B0aW9ucy5lbmRzV2l0aCB8fCBbXSkubWFwKGVzY2FwZVN0cmluZykuY29uY2F0KCckJykuam9pbignfCcpXG4gIHZhciByb3V0ZSA9IHN0YXJ0ID8gJ14nIDogJydcblxuICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNhcHR1cmUgPSB0b2tlbi5yZXBlYXRcbiAgICAgICAgPyAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSg/OicgKyBlc2NhcGVTdHJpbmcodG9rZW4uZGVsaW1pdGVyKSArICcoPzonICsgdG9rZW4ucGF0dGVybiArICcpKSonXG4gICAgICAgIDogdG9rZW4ucGF0dGVyblxuXG4gICAgICBpZiAoa2V5cykga2V5cy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wcmVmaXgpIHtcbiAgICAgICAgICByb3V0ZSArPSAnKCcgKyBjYXB0dXJlICsgJyk/J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlICs9ICcoPzonICsgZXNjYXBlU3RyaW5nKHRva2VuLnByZWZpeCkgKyAnKCcgKyBjYXB0dXJlICsgJykpPydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKHRva2VuLnByZWZpeCkgKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIGlmICghc3RyaWN0KSByb3V0ZSArPSAnKD86JyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJyk/J1xuXG4gICAgcm91dGUgKz0gZW5kc1dpdGggPT09ICckJyA/ICckJyA6ICcoPz0nICsgZW5kc1dpdGggKyAnKSdcbiAgfSBlbHNlIHtcbiAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdXG4gICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSAnc3RyaW5nJ1xuICAgICAgPyBlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSA9PT0gZGVsaW1pdGVyXG4gICAgICA6IGVuZFRva2VuID09PSB1bmRlZmluZWRcblxuICAgIGlmICghc3RyaWN0KSByb3V0ZSArPSAnKD86JyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJyg/PScgKyBlbmRzV2l0aCArICcpKT8nXG4gICAgaWYgKCFpc0VuZERlbGltaXRlZCkgcm91dGUgKz0gJyg/PScgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyKSArICd8JyArIGVuZHNXaXRoICsgJyknXG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoc3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAge0FycmF5PX0gICAgICAgICAgICAgICAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cylcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKSB7XG4gICAgcmV0dXJuIGFycmF5VG9SZWdleHAoLyoqIEB0eXBlIHshQXJyYXl9ICovIChwYXRoKSwga2V5cywgb3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpLCBrZXlzLCBvcHRpb25zKVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9zY2hlbWFzXG4gKiA8YnI+PGJyPlxuICogIyMgU2NoZW1hcyBkZXNjcmlwdGlvbi5cbiAqXG4gKiBAbW9kdWxlIGNvcmUvc2NoZW1hc1xuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJU2NoZW1hQXR0cmlidXRlIH0gZnJvbSAnLi4vZGVmcyc7XG5cbi8qKlxuICogU2VlIFtbSVNjaGVtYUF0dHJpYnV0ZV1dXG4gKi9cbmV4cG9ydCBjb25zdCBzY2hlbWFBdHRyaWJ1dGU6IElTY2hlbWFBdHRyaWJ1dGUgPSB7XG4gIGNvbnRhaW5lcjogJ2NvbnRhaW5lcicsXG4gIGhpc3Rvcnk6ICdoaXN0b3J5JyxcbiAgbmFtZXNwYWNlOiAnbmFtZXNwYWNlJyxcbiAgcHJlZml4OiAnZGF0YS1iYXJiYScsXG4gIHByZXZlbnQ6ICdwcmV2ZW50JyxcbiAgd3JhcHBlcjogJ3dyYXBwZXInLFxufTtcbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvdXRpbHMvZG9tXG4gKiA8YnI+PGJyPlxuICogIyMgRG9tIHV0aWxzXG4gKlxuICogLSBBY2Nlc3MgRE9NIGNvbnRlbnRzXG4gKiAtIERPTSB2cyBzdHJpbmcgY29udmVyc2lvbnNcbiAqXG4gKiBAbW9kdWxlIGNvcmUvdXRpbHMvZG9tXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJU2NoZW1hQXR0cmlidXRlLCBMaW5rLCBTY29wZSwgV3JhcHBlciB9IGZyb20gJy4uL2RlZnMnO1xuLy8gU2NoZW1hc1xuaW1wb3J0IHsgc2NoZW1hQXR0cmlidXRlIH0gZnJvbSAnLi4vc2NoZW1hcy9hdHRyaWJ1dGUnO1xuXG5leHBvcnQgY2xhc3MgRG9tIHtcbiAgcHJpdmF0ZSBfYXR0cjogSVNjaGVtYUF0dHJpYnV0ZSA9IHNjaGVtYUF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSBfcGFyc2VyOiBET01QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgSFRNTERvY3VtZW50IHRvIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZyhlbDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbC5vdXRlckhUTUw7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgSFRNTCBzdHJpbmcgdG8gSFRNTERvY3VtZW50LlxuICAgKi9cbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJiYWpzL2JhcmJhL2lzc3Vlcy8zNjJcbiAgLy8gU2VlbXMgdGhhdCB1c2luZyBET01QYXJzZXIucGFyc2VGcm9tU3RyaW5nIGNhdXNlcyB0aGlzIGlzc3VlLlxuICBwdWJsaWMgdG9Eb2N1bWVudChodG1sU3RyaW5nOiBzdHJpbmcpOiBIVE1MRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9wYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWxTdHJpbmcsICd0ZXh0L2h0bWwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBIVE1MIHN0cmluZyB0byBESVZFbGVtZW50LlxuICAgKlxuICAgKiBET01QYXJzZXIucGFyc2VGcm9tU3RyaW5nIGZhaWxzIHdpdGggaW1nW3NyY3NldF0gb24gaU9TLlxuICAgKiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JhcmJhanMvYmFyYmEvaXNzdWVzLzM2MlxuICAgKi9cbiAgcHVibGljIHRvRWxlbWVudChodG1sU3RyaW5nOiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBIVE1MIGNvbnRlbnQuXG4gICAqL1xuICBwdWJsaWMgZ2V0SHRtbChkb2M6IEhUTUxEb2N1bWVudCA9IGRvY3VtZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZyhkb2MuZG9jdW1lbnRFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZnVsbCBkb2N1bWVudCBjb250ZW50LlxuICAgKi9cbiAgLy8gZ2V0RG9jdW1lbnQoZWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgLy8gICByZXR1cm4gdGhpcy50b1N0cihlbCk7XG4gIC8vIH0sXG5cbiAgLyoqXG4gICAqIEdldCBgW2RhdGEtYmFyYmE9XCJ3cmFwcGVyXCJdYC5cbiAgICovXG4gIHB1YmxpYyBnZXRXcmFwcGVyKHNjb3BlOiBTY29wZSA9IGRvY3VtZW50KTogV3JhcHBlciB7XG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgWyR7dGhpcy5fYXR0ci5wcmVmaXh9PVwiJHt0aGlzLl9hdHRyLndyYXBwZXJ9XCJdYFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGBbZGF0YS1iYXJiYT1cImNvbnRhaW5lclwiXWAuXG4gICAqL1xuICBwdWJsaWMgZ2V0Q29udGFpbmVyKHNjb3BlOiBTY29wZSA9IGRvY3VtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gc2NvcGUucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbJHt0aGlzLl9hdHRyLnByZWZpeH09XCIke3RoaXMuX2F0dHIuY29udGFpbmVyfVwiXWBcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb250YWluZXIgYW5kIHN0b3JlIG5leHQgc2libGluZyAoaWYgYXBwbGljYWJsZSkuXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlQ29udGFpbmVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhjb250YWluZXIpKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY29udGFpbmVyIGJlZm9yZSBuZXh0IHNpYmxpbmcgb3IgYXQgdGhlIGVuZCBvZiB0aGUgd3JhcHBlci5cbiAgICovXG4gIHB1YmxpYyBhZGRDb250YWluZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgd3JhcHBlcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBleGlzdGluZ0NvbnRhaW5lciA9IHRoaXMuZ2V0Q29udGFpbmVyKCk7XG5cbiAgICBpZiAoZXhpc3RpbmdDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2luc2VydEFmdGVyKGNvbnRhaW5lciwgZXhpc3RpbmdDb250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBgW2RhdGEtYmFyYmEtbmFtZXNwYWNlXWAuXG4gICAqL1xuICBwdWJsaWMgZ2V0TmFtZXNwYWNlKHNjb3BlOiBTY29wZSA9IGRvY3VtZW50KTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgbnMgPSBzY29wZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFske3RoaXMuX2F0dHIucHJlZml4fS0ke3RoaXMuX2F0dHIubmFtZXNwYWNlfV1gXG4gICAgKTtcblxuICAgIHJldHVybiBuc1xuICAgICAgPyBucy5nZXRBdHRyaWJ1dGUoYCR7dGhpcy5fYXR0ci5wcmVmaXh9LSR7dGhpcy5fYXR0ci5uYW1lc3BhY2V9YClcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgVVJMIGZyb20gYGhyZWZgIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldEhyZWYoZWw6IExpbmspOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyBIVE1MIHRhZ05hbWUgaXMgVVBQRVJDQVNFLCB4aHRtbCB0YWdOYW1lIGtlZXBzIGV4aXN0aW5nIGNhc2UuXG4gICAgaWYgKGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScpIHtcbiAgICAgIC8vIEhUTUxBbmNob3JFbGVtZW50LCBmdWxsIFVSTCBhdmFpbGFibGVcbiAgICAgIGlmICh0eXBlb2YgZWwuaHJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGVsLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2JhYmx5IGEgU1ZHQUVsZW1lbnTigKZcbiAgICAgIGNvbnN0IGhyZWYgPSBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3hsaW5rOmhyZWYnKTtcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChocmVmKSB7XG4gICAgICAgIC8vIFdoZW4gbGluayBjb21lcyBmcm9tIFNWRywgYGhyZWZgIHJldHVybnMgYW4gb2JqZWN0LCBub3QgYSBzdHJpbmcuXG4gICAgICAgIGNvbnN0IGF0dHI6IHN0cmluZyA9XG4gICAgICAgICAgKChocmVmIGFzIHVua25vd24pIGFzIFNWR0FuaW1hdGVkU3RyaW5nKS5iYXNlVmFsIHx8IGhyZWY7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZVVybChhdHRyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBDb3B5cmlnaHQgMjAxNCBTaW1vbiBMeWRlbGxcbiAgLy8gWDExICjigJxNSVTigJ0pIExpY2Vuc2VkLiAoU2VlIExJQ0VOU0VcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2x5ZGVsbC9yZXNvbHZlLXVybC9ibG9iL21hc3Rlci9yZXNvbHZlLXVybC5qc1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBwdWJsaWMgcmVzb2x2ZVVybCguLi51cmxzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IG51bVVybHMgPSB1cmxzLmxlbmd0aDtcblxuICAgIGlmIChudW1VcmxzID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jlc29sdmVVcmwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50OyBnb3Qgbm9uZS4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYmFzZScpO1xuICAgIGJhc2UuaHJlZiA9IGFyZ3VtZW50c1swXTtcblxuICAgIGlmIChudW1VcmxzID09PSAxKSB7XG4gICAgICByZXR1cm4gYmFzZS5ocmVmO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGJhc2UsIGhlYWQuZmlyc3RDaGlsZCk7XG5cbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCByZXNvbHZlZDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBudW1VcmxzOyBpbmRleCsrKSB7XG4gICAgICBhLmhyZWYgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgcmVzb2x2ZWQgPSBhLmhyZWY7XG4gICAgICBiYXNlLmhyZWYgPSByZXNvbHZlZDtcbiAgICB9XG5cbiAgICBoZWFkLnJlbW92ZUNoaWxkKGJhc2UpO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBub2RlIGFmdGVyIGFub3RoZXIgbm9kZS5cbiAgICovXG4gIHByaXZhdGUgX2luc2VydEFmdGVyKG5ld05vZGU6IE5vZGUsIHJlZmVyZW5jZU5vZGU6IE5vZGUpIHtcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xuICB9XG59XG5cbmNvbnN0IGRvbSA9IG5ldyBEb20oKTtcblxuZXhwb3J0IHsgZG9tIH07XG4iLCJpbXBvcnQgeyBIaXN0b3J5QWN0aW9uLCBMaW5rRXZlbnQsIFRyaWdnZXIgfSBmcm9tICcuLi9kZWZzJztcbi8vIFNjaGVtYXNcbmltcG9ydCB7IHNjaGVtYUF0dHJpYnV0ZSB9IGZyb20gJy4uL3NjaGVtYXMvYXR0cmlidXRlJztcblxuLyoqXG4gKiBAYmFyYmEvY29yZS91dGlscy9oaXN0b3J5XG4gKiA8YnI+PGJyPlxuICogIyMgSGlzdG9yeSBtYW5hZ2VyLlxuICpcbiAqIC0gS2VlcCB0cmFjayBvZiB0aGUgbmF2aWdhdGlvbiBoaXN0b3J5XG4gKlxuICogQG1vZHVsZSBjb3JlL3V0aWxzL2hpc3RvcnlcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKipcbiAqIFN0YXRlIGl0ZW0uXG4gKlxuICogQHByb3BlcnR5IGZyb21cbiAqIEBwcm9wZXJ0eSBpbmRleFxuICovXG5pbnRlcmZhY2UgSUhpc3RvcnlJdGVtIHtcbiAgLyoqIG9yaWdpbiAqL1xuICBmcm9tOiBzdHJpbmc7XG4gIC8qKiBpbmRleCAqL1xuICBpbmRleDogbnVtYmVyO1xuICAvKiogc3RhdGVzICovXG4gIHN0YXRlczogSVN0YXRlSXRlbVtdO1xufVxuXG4vKioqL1xuaW50ZXJmYWNlIElDb29yZHMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBIaXN0b3J5IGl0ZW0uXG4gKlxuICogQHByb3BlcnR5IG5hbWVzcGFjZVxuICogQHByb3BlcnR5IHNjcm9sbFxuICogQHByb3BlcnR5IFVSTFxuICovXG5pbnRlcmZhY2UgSVN0YXRlSXRlbSB7XG4gIC8qKiBuYW1lc3BhY2UgKi9cbiAgbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgLyoqIFNjcm9sbCBwb3NpdGlvbiAqL1xuICBzY3JvbGw6IElDb29yZHM7XG4gIC8qKiBVUkwgKi9cbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBIaXN0b3J5IHtcbiAgcHJpdmF0ZSBfc2Vzc2lvbjogc3RyaW5nO1xuICBwcml2YXRlIF9zdGF0ZXM6IElTdGF0ZUl0ZW1bXSA9IFtdO1xuICBwcml2YXRlIF9wb2ludGVyID0gLTE7XG5cbiAgLyoqXG4gICAqIEluaXQgd2l0aCBmaXJzdCBzdGF0ZS5cbiAgICovXG4gIHB1YmxpYyBpbml0KHVybDogc3RyaW5nLCBuczogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2Vzc2lvbiA9ICdiYXJiYSc7XG4gICAgY29uc3QgaW5kZXggPSAwO1xuXG4gICAgY29uc3Qgc3RhdGU6IElTdGF0ZUl0ZW0gPSB7XG4gICAgICBucyxcbiAgICAgIHNjcm9sbDoge1xuICAgICAgICB4OiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgeTogd2luZG93LnNjcm9sbFksXG4gICAgICB9LFxuICAgICAgdXJsLFxuICAgIH07XG5cbiAgICB0aGlzLl9zdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgdGhpcy5fcG9pbnRlciA9IGluZGV4O1xuXG4gICAgY29uc3QgaXRlbTogSUhpc3RvcnlJdGVtID0ge1xuICAgICAgZnJvbTogdGhpcy5fc2Vzc2lvbixcbiAgICAgIGluZGV4LFxuICAgICAgc3RhdGVzOiBbLi4udGhpcy5fc3RhdGVzXSxcbiAgICB9O1xuXG4gICAgd2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGl0ZW0sICcnLCB1cmwpO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0cmlnZ2VyOiBUcmlnZ2VyLFxuICAgIGU/OiBMaW5rRXZlbnQgfCBQb3BTdGF0ZUV2ZW50XG4gICk6IFRyaWdnZXIge1xuICAgIGlmIChlICYmIChlIGFzIFBvcFN0YXRlRXZlbnQpLnN0YXRlKSB7XG4gICAgICAvLyBJZiBwb3BzdGF0ZSwgbW92ZSB0byBleGlzdGluZyBzdGF0ZVxuICAgICAgLy8gYW5kIGdldCBiYWNrL2ZvcndhcmQgZGlyZWN0aW9uLlxuICAgICAgY29uc3QgeyBzdGF0ZSB9OiB7IHN0YXRlOiBJSGlzdG9yeUl0ZW0gfSA9IGUgYXMgUG9wU3RhdGVFdmVudDtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IHN0YXRlO1xuICAgICAgY29uc3QgZGlmZiA9IHRoaXMuX3BvaW50ZXIgLSBpbmRleDtcblxuICAgICAgdHJpZ2dlciA9IHRoaXMuX2dldERpcmVjdGlvbihkaWZmKTtcblxuICAgICAgLy8gV29yayB3aXRoIHByZXZpb3VzIHN0YXRlc1xuICAgICAgdGhpcy5yZXBsYWNlKHN0YXRlLnN0YXRlcyk7XG4gICAgICB0aGlzLl9wb2ludGVyID0gaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCBuZXcgc3RhdGVcbiAgICAgIHRoaXMuYWRkKHVybCwgdHJpZ2dlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaWdnZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IHN0YXRlLlxuICAgKi9cbiAgcHVibGljIGFkZCh1cmw6IHN0cmluZywgdHJpZ2dlcjogVHJpZ2dlcik6IHZvaWQge1xuICAgIC8vIElmIG5vIHN0YXRlLCBpdCB3aWxsIGJlIHVwZGF0ZWQgbGF0ZXIuXG4gICAgY29uc3QgbnMgPSAndG1wJztcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2l6ZTtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9nZXRBY3Rpb24odHJpZ2dlcik7XG4gICAgY29uc3Qgc3RhdGU6IElTdGF0ZUl0ZW0gPSB7XG4gICAgICBucyxcbiAgICAgIHNjcm9sbDoge1xuICAgICAgICB4OiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgeTogd2luZG93LnNjcm9sbFksXG4gICAgICB9LFxuICAgICAgdXJsLFxuICAgIH07XG5cbiAgICB0aGlzLl9zdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgdGhpcy5fcG9pbnRlciA9IGluZGV4O1xuXG4gICAgY29uc3QgaXRlbTogSUhpc3RvcnlJdGVtID0ge1xuICAgICAgZnJvbTogdGhpcy5fc2Vzc2lvbixcbiAgICAgIGluZGV4LFxuICAgICAgc3RhdGVzOiBbLi4udGhpcy5fc3RhdGVzXSxcbiAgICB9O1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaXRlbSwgJycsIHVybCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5ICYmIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShpdGVtLCAnJywgdXJsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0YXRlLlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShkYXRhOiBhbnksIGk/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IGkgfHwgdGhpcy5fcG9pbnRlcjtcbiAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuZ2V0KGluZGV4KTtcbiAgICBjb25zdCBzdGF0ZTogSVN0YXRlSXRlbSA9IHtcbiAgICAgIC4uLmV4aXN0aW5nLFxuICAgICAgLi4uZGF0YSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZXQoaW5kZXgsIHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbGFzdCBzdGF0ZS5cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoaT86IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpKSB7XG4gICAgICB0aGlzLl9zdGF0ZXMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGF0ZXMucG9wKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcG9pbnRlci0tO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgc3RhdGVzLlxuICAgKi9cbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXRlcyA9IFtdO1xuICAgIHRoaXMuX3BvaW50ZXIgPSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGFsbCBzdGF0ZXMuXG4gICAqL1xuICBwdWJsaWMgcmVwbGFjZShuZXdTdGF0ZXM6IElTdGF0ZUl0ZW1bXSk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXRlcyA9IG5ld1N0YXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdGUgYnkgaW5kZXguXG4gICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzW2luZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc3RhdGUgYnkgaW5kZXguXG4gICAqL1xuICBwdWJsaWMgc2V0KGk6IG51bWJlciwgc3RhdGU6IElTdGF0ZUl0ZW0pIHtcbiAgICByZXR1cm4gKHRoaXMuX3N0YXRlc1tpXSA9IHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgc3RhdGUuXG4gICAqL1xuICBnZXQgY3VycmVudCgpOiBJU3RhdGVJdGVtIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzW3RoaXMuX3BvaW50ZXJdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGFzdCBzdGF0ZSAodG9wIG9mIHRoZSBoaXN0b3J5IHN0YWNrKS5cbiAgICovXG4gIGdldCBzdGF0ZSgpOiBJU3RhdGVJdGVtIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzW3RoaXMuX3N0YXRlcy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHByZXZpb3VzIHN0YXRlLlxuICAgKi9cbiAgZ2V0IHByZXZpb3VzKCk6IElTdGF0ZUl0ZW0gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnRlciA8IDEgPyBudWxsIDogdGhpcy5fc3RhdGVzW3RoaXMuX3BvaW50ZXIgLSAxXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHN0YXRlIHNpemUuXG4gICAqL1xuICBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZXMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaGlzdG9yeSBhY3Rpb246IHB1c2ggdnMgcmVwbGFjZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0QWN0aW9uKHRyaWdnZXI6IFRyaWdnZXIpOiBIaXN0b3J5QWN0aW9uIHtcbiAgICBsZXQgYWN0aW9uOiBIaXN0b3J5QWN0aW9uID0gJ3B1c2gnO1xuXG4gICAgLy8gTWFuYWdlIGBkYXRhLWJhcmJhLWhpc3RvcnlgIGF0dHJpYnV0ZVxuICAgIC8vIHRvIGdldCB0aGUgcmlnaHQgYWN0aW9uIChwdXNoIHZzIHJlcGxhY2UpLlxuICAgIGNvbnN0IGVsID0gdHJpZ2dlciBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICBjb25zdCBhdHRyID0gYCR7c2NoZW1hQXR0cmlidXRlLnByZWZpeH0tJHtzY2hlbWFBdHRyaWJ1dGUuaGlzdG9yeX1gO1xuXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSAmJiBlbC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgIGFjdGlvbiA9IGVsLmdldEF0dHJpYnV0ZShhdHRyKSBhcyBIaXN0b3J5QWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkaXJlY3Rpb24gb2YgcG9wc3RhdGUgY2hhbmdlXG4gICAqL1xuICBwcml2YXRlIF9nZXREaXJlY3Rpb24oZGlmZjogbnVtYmVyKTogVHJpZ2dlciB7XG4gICAgLy8gQ2hlY2sgaWYgXCJzZXNzaW9uIHN3aXRjaFwiXG4gICAgaWYgKE1hdGguYWJzKGRpZmYpID4gMSkge1xuICAgICAgLy8gRXggNi0wID4gMCAtPiBmb3J3YXJkLCAwLTYgPCAwIC0+IGJhY2tcbiAgICAgIHJldHVybiBkaWZmID4gMCA/ICdmb3J3YXJkJyA6ICdiYWNrJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRpZmYgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICdwb3BzdGF0ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFeCA2LTUgPiAwIC0+IGJhY2ssIDUtNiA8IDAgLT4gZm9yd2FyZFxuICAgICAgICByZXR1cm4gZGlmZiA+IDAgPyAnYmFjaycgOiAnZm9yd2FyZCc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuXG5leHBvcnQgeyBoaXN0b3J5IH07XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL3V0aWxzL2hlbHBlcnNcbiAqIDxicj48YnI+XG4gKiAjIyBIZWxwZXJzXG4gKlxuICogLSBVcGRhdGUgbmV4dCBwYWdlIGRhdGFcbiAqXG4gKiBAbW9kdWxlIGNvcmUvdXRpbHMvaGVscGVyc1xuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIFRoaXJkLXBhcnR5XG5pbXBvcnQgcHRyIGZyb20gJ3BhdGgtdG8tcmVnZXhwJztcbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJVHJhbnNpdGlvbkRhdGEgfSBmcm9tICcuLi9kZWZzJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBkb20gfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSAnLi9oaXN0b3J5JztcblxuLyoqXG4gKiBVcGRhdGUgYGRhdGEubmV4dGAsIHRoZSB0aXRsZSBhbmQgdGhlIGhpc3RvcnlcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IGFzeW5jIChcbiAgcGFnZTogUHJvbWlzZTxzdHJpbmcgfCB2b2lkPixcbiAgZGF0YTogSVRyYW5zaXRpb25EYXRhXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgLy8gSWYgbm90IGFscmVhZHkgdXBkYXRlZFxuICBpZiAoIWRhdGEubmV4dC5odG1sKSB7XG4gICAgY29uc3QgaHRtbCA9IGF3YWl0IHBhZ2U7XG4gICAgY29uc3QgeyBuZXh0IH0gPSBkYXRhO1xuXG4gICAgaWYgKGh0bWwpIHtcbiAgICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JhcmJhanMvYmFyYmEvaXNzdWVzLzM2MlxuICAgICAgLy8gY29uc3QgbmV4dERvY3VtZW50ID0gZG9tLnRvRG9jdW1lbnQoaHRtbCk7XG4gICAgICBjb25zdCBuZXh0RG9jdW1lbnQgPSBkb20udG9FbGVtZW50KGh0bWwpO1xuXG4gICAgICBuZXh0Lm5hbWVzcGFjZSA9IGRvbS5nZXROYW1lc3BhY2UobmV4dERvY3VtZW50KTtcbiAgICAgIG5leHQuY29udGFpbmVyID0gZG9tLmdldENvbnRhaW5lcihuZXh0RG9jdW1lbnQpO1xuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJiYWpzL2JhcmJhL2lzc3Vlcy8zNjJcbiAgICAgIC8vIG5leHQuaHRtbCA9IGRvbS5nZXRIdG1sKG5leHREb2N1bWVudCk7XG4gICAgICAvLyBuZXh0Lmh0bWwgPSBuZXh0RG9jdW1lbnQuaW5uZXJIVE1MO1xuICAgICAgbmV4dC5odG1sID0gaHRtbDtcblxuICAgICAgLy8gVXBkYXRlIGhpc3RvcnkgbmFtZXNwYWNlIChub3QgYXZhaWxhYmxlIHdoZW4gaW5pdGlhbGx5IHNldClcbiAgICAgIGhpc3RvcnkudXBkYXRlKHsgbnM6IG5leHQubmFtZXNwYWNlIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgdGl0bGUuXG4gICAgICBjb25zdCB7IHRpdGxlIH0gPSBkb20udG9Eb2N1bWVudChodG1sKTtcblxuICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogTmV4dCB0aWNrXG4gKi9cbmV4cG9ydCBjb25zdCBuZXh0VGljayA9ICgpID0+XG4gIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzb2x2ZSk7XG4gICAgLy8gREVWOiBzYW1lIHJlc3VsdD9cbiAgICAvLyBzZXRUaW1lb3V0KHJlc29sdmUsIDApO1xuICB9KTtcblxuLyoqXG4gKiBUdXJuIGEgcm91dGUgc3RyaW5nIHN1Y2ggYXMgYC91c2VyLzpuYW1lYCBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIFVzZWQgZm9yOlxuICpcbiAqIC0gcm91dGVzIHRvIGlnbm9yZVxuICogLSByb3V0ZSB0cmFuc2l0aW9uIHJlc29sdXRpb25cbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3BhdGgtdG8tcmVnZXhwXG4gKi9cbmNvbnN0IHBhdGhUb1JlZ2V4cCA9IHB0cjtcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH07XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL3V0aWxzL3VybFxuICogPGJyPjxicj5cbiAqICMjIFVSTCB1dGlscy5cbiAqXG4gKiAtIENvbGxlY3QgYW5kIHN0cnVjdHVyZSBpbmZvcm1hdGlvbnMgZnJvbSBVUkxzXG4gKlxuICogQG1vZHVsZSBjb3JlL3V0aWxzL3VybFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJR2VuZXJpY09iamVjdCwgSVVybEJhc2UgfSBmcm9tICcuLi9kZWZzJztcblxuLyoqXG4gKiBHZXQgbG9jYXRpb24gaHJlZi5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEhyZWYgPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuLyoqXG4gKiBHZXQgbG9jYXRpb24gb3JpZ2luLlxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JpZ2luID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcblxuLyoqXG4gKiBHZXQgcG9ydCBiYXNlZCBvbiBVUkwgb3IgbG9jYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQb3J0ID0gKHVybDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWYpID0+IHBhcnNlKHVybCkucG9ydDtcblxuLyoqXG4gKiBHZXQgcGF0aCBmcm9tIFVSTC5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFBhdGggPSAodXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZikgPT4gcGFyc2UodXJsKS5wYXRoO1xuXG4vKipcbiAqIEdldCBxdWVyeSBvYmplY3QgZnJvbSBVUkwuXG4gKi9cbi8vIGV4cG9ydCBjb25zdCBnZXRRdWVyeSA9ICh1cmw6IHN0cmluZyk6IElHZW5lcmljT2JqZWN0ID0+IHBhcnNlKHVybCkucXVlcnk7XG5cbi8qKlxuICogR2V0IGhhc2ggZnJvbSBVUkwuXG4gKi9cbi8vIGV4cG9ydCBjb25zdCBnZXRIYXNoID0gKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHBhcnNlKHVybCkuaGFzaDtcblxuLyoqXG4gKiBQYXJzZSBVUkwgZm9yIHBhdGgsIHF1ZXJ5IGFuZCBoYXNoIGFuZCBtb3JlLlxuICovXG5leHBvcnQgY29uc3QgcGFyc2UgPSAodXJsOiBzdHJpbmcpOiBJVXJsQmFzZSA9PiB7XG4gIC8vIFBvcnRcbiAgbGV0IHBvcnQ7XG4gIGNvbnN0IG1hdGNoZXMgPSB1cmwubWF0Y2goLzpcXGQrLyk7XG5cbiAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICBpZiAoL15odHRwLy50ZXN0KHVybCkpIHtcbiAgICAgIHBvcnQgPSA4MDtcbiAgICB9XG5cbiAgICBpZiAoL15odHRwcy8udGVzdCh1cmwpKSB7XG4gICAgICBwb3J0ID0gNDQzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwb3J0U3RyaW5nID0gbWF0Y2hlc1swXS5zdWJzdHJpbmcoMSk7XG5cbiAgICBwb3J0ID0gcGFyc2VJbnQocG9ydFN0cmluZywgMTApO1xuICB9XG5cbiAgLy8gUGF0aFxuICBsZXQgcGF0aCA9IHVybC5yZXBsYWNlKGdldE9yaWdpbigpLCAnJyk7XG4gIGxldCBoYXNoO1xuICBsZXQgcXVlcnkgPSB7fTtcblxuICAvLyBIYXNoXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuXG4gIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgIGhhc2ggPSBwYXRoLnNsaWNlKGhhc2hJbmRleCArIDEpO1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICAvLyBRdWVyeVxuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG5cbiAgaWYgKHF1ZXJ5SW5kZXggPj0gMCkge1xuICAgIHF1ZXJ5ID0gcGFyc2VRdWVyeShwYXRoLnNsaWNlKHF1ZXJ5SW5kZXggKyAxKSk7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgcXVlcnlJbmRleCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhc2gsXG4gICAgcGF0aCxcbiAgICBwb3J0LFxuICAgIHF1ZXJ5LFxuICB9O1xufTtcblxuLyoqXG4gKiBQYXJzZSBhIHF1ZXJ5IHN0cmluZyB0byBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZVF1ZXJ5ID0gKHN0cjogc3RyaW5nKSA9PlxuICBzdHIuc3BsaXQoJyYnKS5yZWR1Y2UoKGFjYzogSUdlbmVyaWNPYmplY3QsIGVsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbC5zcGxpdCgnPScpO1xuXG4gICAgYWNjW2tleV0gPSB2YWx1ZTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuLyoqXG4gKiBDbGVhbiBVUkwsIHJlbW92ZSBcImhhc2hcIiBhbmQvb3IgXCJ0cmFpbGluZyBzbGFzaFwiLlxuICovXG5leHBvcnQgY29uc3QgY2xlYW4gPSAodXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZikgPT5cbiAgdXJsLnJlcGxhY2UoLyhcXC8jLip8XFwvfCMuKikkLywgJycpO1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS91dGlscy9yZXF1ZXN0XG4gKiA8YnI+PGJyPlxuICogIyMgRmV0Y2ggcGFnZXMgZm9yIHRyYW5zaXRpb25zLlxuICpcbiAqIC0gSW5jbHVkZXMgdGltZW91dFxuICogLSBVc2VzIEZldGNoIEFQSVxuICogLSBIYW5kbGVzIGVycm9yc1xuICpcbiAqIEBtb2R1bGUgY29yZS91dGlscy9yZXF1ZXN0XG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IFJlcXVlc3RFcnJvciB9IGZyb20gJy4uL2RlZnMnO1xuXG4vKipcbiAqIEluaXQgYSBwYWdlIHJlcXVlc3QuXG4gKiBGZXRjaCB0aGUgcGFnZSBhbmQgcmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdGV4dCBjb250ZW50LlxuICovXG5mdW5jdGlvbiByZXF1ZXN0KFxuICB1cmw6IHN0cmluZyxcbiAgdHRsOiBudW1iZXIgPSAyZTMsXG4gIHJlcXVlc3RFcnJvcjogUmVxdWVzdEVycm9yXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSBlbHNlIGlmICh4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgLy8gSFRUUCBjb2RlIGlzIG5vdCAyMDAsIHJlamVjdCB3aXRoIHJlc3BvbnNlLlxuICAgICAgICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVxdWVzdEVycm9yKHVybCwgcmVzKTtcbiAgICAgICAgICByZWplY3QocmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihgVGltZW91dCBlcnJvciBbJHt0dGx9XWApO1xuICAgICAgcmVxdWVzdEVycm9yKHVybCwgZXJyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH07XG4gICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYEZldGNoIGVycm9yYCk7XG4gICAgICByZXF1ZXN0RXJyb3IodXJsLCBlcnIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfTtcblxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgIHhoci50aW1lb3V0ID0gdHRsO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgJ0FjY2VwdCcsXG4gICAgICAndGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWwnXG4gICAgKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcigneC1iYXJiYScsICd5ZXMnKTtcbiAgICB4aHIuc2VuZCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcmVxdWVzdCB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBpc1Byb21pc2U7XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG4iLCJpbXBvcnQgaXNQcm9taXNlIGZyb20gJ2lzLXByb21pc2UnO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vU0JvdWRyaWFzL3J1bi1hc3luY1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5Bc3luYyhcbiAgZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkIHwgUHJvbWlzZTxhbnk+LFxuICBjdHg6IGFueSA9IHt9XG4pOiAoLi4uYXJnczogYW55W10pID0+IFByb21pc2U8YW55PiB7XG4gIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBsZXQgYXN5bmMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBBZGQgYXN5bmMgdG8gY29udGV4dFxuICAgICAgY3R4LmFzeW5jID0gKCkgPT4ge1xuICAgICAgICBhc3luYyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIChlcnI6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBhbnN3ZXIgPSBmdW5jLmFwcGx5KGN0eCwgYXJncyBhcyBbXSk7XG5cbiAgICAgIGlmICghYXN5bmMpIHtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShhbnN3ZXIpKSB7XG4gICAgICAgICAgKGFuc3dlciBhcyBQcm9taXNlPGFueT4pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGFuc3dlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL2hvb2tzXG4gKiA8YnI+PGJyPlxuICogIyMgSG9va3MgbWFuYWdlci5cbiAqXG4gKiAtIFJlZ2lzdGVyIGFuZCB0cmlnZ2VyIGhvb2tzXG4gKlxuICogSG9va3MgY2FuIGJlIGVhc2lseSByZWdpc3RlcmVkOlxuICpcbiAqIGBgYGpzXG4gKiBob29rcy5sZWF2ZShjYWxsYmFjaywgY29udGV4dCk7XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9ob29rc1xuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBIb29rRnVuY3Rpb24sIEhvb2tNZXRob2RzLCBIb29rc0FsbCB9IGZyb20gJy4vZGVmcyc7XG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL21vZHVsZXMvTG9nZ2VyJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBydW5Bc3luYyB9IGZyb20gJy4vdXRpbHMnO1xuLy8gVHlwZXNcbmludGVyZmFjZSBJSG9va0luZm9zIHtcbiAgY3R4OiBhbnk7XG4gIGZuOiBIb29rRnVuY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBIb29rcyBleHRlbmRzIEhvb2tNZXRob2RzIHtcbiAgLyoqXG4gICAqIEFsbG93IHRoZSB1c2Ugb2YgYGhvb2tzW25hbWVdKGNiLCBjdHgpYC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgLy8gW2tleSBpbiBIb29rc0FsbF0/OiBhbnk7XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoJ0BiYXJiYS9jb3JlJyk7XG4gIC8qKlxuICAgKiBBbGwgYXZhaWxhYmxlIGhvb2tzLlxuICAgKlxuICAgKiBTZWUgW1tIb29rc0FsbF1dXG4gICAqL1xuICAvLyBUT0RPOiBnZXQgaG9va3MgZnJvbSBkZWZzIChEUlkpP1xuICBwdWJsaWMgYWxsOiBIb29rc0FsbFtdID0gW1xuICAgICdyZWFkeScsXG4gICAgJ3BhZ2UnLFxuICAgICdyZXNldCcsXG4gICAgJ2N1cnJlbnRBZGRlZCcsXG4gICAgJ2N1cnJlbnRSZW1vdmVkJyxcbiAgICAnbmV4dEFkZGVkJyxcbiAgICAnbmV4dFJlbW92ZWQnLFxuICAgICdiZWZvcmVPbmNlJyxcbiAgICAnb25jZScsXG4gICAgJ2FmdGVyT25jZScsXG4gICAgJ2JlZm9yZScsXG4gICAgJ2JlZm9yZUxlYXZlJyxcbiAgICAnbGVhdmUnLFxuICAgICdhZnRlckxlYXZlJyxcbiAgICAnYmVmb3JlRW50ZXInLFxuICAgICdlbnRlcicsXG4gICAgJ2FmdGVyRW50ZXInLFxuICAgICdhZnRlcicsXG4gIF07XG4gIC8qKlxuICAgKiBSZWdpc3RlcmVkIGhvb2tzLlxuICAgKlxuICAgKiAtIFVuaXF1ZSBob29rIG5hbWVcbiAgICogLSBBc3NvY2lhdGVkIGRhdGEgc2V0KHMpIChjYWxsYmFjayArIGNvbnRleHQpXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJlZDogTWFwPEhvb2tzQWxsLCBTZXQ8SUhvb2tJbmZvcz4+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyZWQuY2xlYXIoKTtcbiAgICB0aGlzLmFsbC5mb3JFYWNoKGhvb2sgPT4ge1xuICAgICAgaWYgKCF0aGlzW2hvb2tdKSB7XG4gICAgICAgIHRoaXNbaG9va10gPSAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLnJlZ2lzdGVyZWQuaGFzKGhvb2spKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWQuc2V0KGhvb2ssIG5ldyBTZXQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHNldCA9IHRoaXMucmVnaXN0ZXJlZC5nZXQoaG9vayk7XG5cbiAgICAgICAgICBzZXQuYWRkKHtcbiAgICAgICAgICAgIGN0eDogY3R4IHx8IHt9LFxuICAgICAgICAgICAgZm4sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRG8gaG9vay5cbiAgICpcbiAgICogVHJpZ2dlciByZWdpc3RlcmVkIGhvb2tzLlxuICAgKi9cbiAgcHVibGljIGRvKG5hbWU6IEhvb2tzQWxsLCAuLi5hcmdzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWQuaGFzKG5hbWUpKSB7XG4gICAgICAvLyBMZXQncyBzdGFydCBhIGNoYWluIG9mIHByb21pc2VzXG4gICAgICBsZXQgY2hhaW4gPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgICAgdGhpcy5yZWdpc3RlcmVkLmdldChuYW1lKS5mb3JFYWNoKGhvb2sgPT4ge1xuICAgICAgICAvLyBDaGFpbiBhc3luYyBob29rcyBwcm9taXNpZmllZFxuICAgICAgICBjaGFpbiA9IGNoYWluLnRoZW4oKCkgPT4gcnVuQXN5bmMoaG9vay5mbiwgaG9vay5jdHgpKC4uLmFyZ3MpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY2hhaW4uY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgSG9vayBlcnJvciBbJHtuYW1lfV1gKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuYWxsLmZvckVhY2goaG9vayA9PiB7XG4gICAgICBkZWxldGUgdGhpc1tob29rXTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHAsIHByaW50IGF2YWlsYWJsZSBhbmQgcmVnaXN0ZXJlZCBob29rcy5cbiAgICovXG4gIHB1YmxpYyBoZWxwKCk6IHZvaWQge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oYEF2YWlsYWJsZSBob29rczogJHt0aGlzLmFsbC5qb2luKCcsJyl9YCk7XG4gICAgY29uc3QgcmVnaXN0ZXJlZDogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLnJlZ2lzdGVyZWQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gcmVnaXN0ZXJlZC5wdXNoKGtleSkpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oYFJlZ2lzdGVyZWQgaG9va3M6ICR7cmVnaXN0ZXJlZC5qb2luKCcsJyl9YCk7XG4gIH1cbn1cblxuY29uc3QgaG9va3MgPSBuZXcgSG9va3MoKTtcblxuZXhwb3J0IHsgaG9va3MgfTtcbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvbW9kdWxlcy9pZ25vcmVcbiAqIDxicj48YnI+XG4gKiAjIyBNYW5hZ2UgaWdub3JlIG9wdGlvbnMuXG4gKlxuICogLSBjYWNoZVxuICogLSBwcmVmZXRjaFxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL2lnbm9yZVxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJZ25vcmVPcHRpb24gfSBmcm9tICcuLi9kZWZzJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBwYXRoVG9SZWdleHAgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi4vdXRpbHMvdXJsJztcblxuZXhwb3J0IGNsYXNzIElnbm9yZSB7XG4gIHByaXZhdGUgX2lnbm9yZUFsbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaWdub3JlUmVnZXhlczogUmVnRXhwW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihpZ25vcmU6IElnbm9yZU9wdGlvbikge1xuICAgIGlmICh0eXBlb2YgaWdub3JlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuX2lnbm9yZUFsbCA9IGlnbm9yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGF0aHMgPSBBcnJheS5pc0FycmF5KGlnbm9yZSkgPyBpZ25vcmUgOiBbaWdub3JlXTtcblxuICAgICAgdGhpcy5faWdub3JlUmVnZXhlcyA9IHBhdGhzLm1hcChwID0+IHBhdGhUb1JlZ2V4cChwKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNoZWNrSHJlZihocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2lnbm9yZUFsbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdGhpcy5faWdub3JlQWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aCB9ID0gcGFyc2UoaHJlZik7XG5cbiAgICByZXR1cm4gdGhpcy5faWdub3JlUmVnZXhlcy5zb21lKHJlZ2V4ID0+IHJlZ2V4LmV4ZWMocGF0aCkgIT09IG51bGwpO1xuICB9XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvY2FjaGVcbiAqIDxicj48YnI+XG4gKiAjIyBDYWNoZSBmb3Igc3RvcmluZyBVUkwgLyBIVE1MLlxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL2NhY2hlXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IENhY2hlQWN0aW9uLCBDYWNoZVJlcXVlc3QsIElDYWNoZURhdGEsIElnbm9yZU9wdGlvbiB9IGZyb20gJy4uL2RlZnMnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgSWdub3JlIH0gZnJvbSAnLi9JZ25vcmUnO1xuXG5leHBvcnQgY2xhc3MgQ2FjaGUgZXh0ZW5kcyBJZ25vcmUge1xuICBwcml2YXRlIF9zdGF0ZTogTWFwPHN0cmluZywgSUNhY2hlRGF0YT4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoaWdub3JlOiBJZ25vcmVPcHRpb24pIHtcbiAgICBzdXBlcihpZ25vcmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2YWx1ZSB0byBjYWNoZVxuICAgKi9cbiAgcHVibGljIHNldChcbiAgICBocmVmOiBzdHJpbmcsXG4gICAgcmVxdWVzdDogQ2FjaGVSZXF1ZXN0LFxuICAgIGFjdGlvbjogQ2FjaGVBY3Rpb25cbiAgKTogSUNhY2hlRGF0YSB7XG4gICAgdGhpcy5fc3RhdGUuc2V0KGhyZWYsIHtcbiAgICAgIGFjdGlvbixcbiAgICAgIHJlcXVlc3QsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uLFxuICAgICAgcmVxdWVzdCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIGZyb20gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBnZXQoaHJlZjogc3RyaW5nKTogSUNhY2hlRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmdldChocmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVxdWVzdCBmcm9tIGNhY2hlXG4gICAqL1xuICBwdWJsaWMgZ2V0UmVxdWVzdChocmVmOiBzdHJpbmcpOiBDYWNoZVJlcXVlc3Qge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQoaHJlZikucmVxdWVzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWN0aW9uIGZyb20gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBnZXRBY3Rpb24oaHJlZjogc3RyaW5nKTogQ2FjaGVBY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQoaHJlZikuYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHZhbHVlIGV4aXN0cyBpbnRvIGNhY2hlXG4gICAqL1xuICBwdWJsaWMgaGFzKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMuY2hlY2tIcmVmKGhyZWYpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5oYXMoaHJlZik7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHZhbHVlIGZyb20gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBkZWxldGUoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmRlbGV0ZShocmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY2FjaGUgdmFsdWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoaHJlZjogc3RyaW5nLCBkYXRhOiBJQ2FjaGVEYXRhKTogSUNhY2hlRGF0YSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAuLi50aGlzLl9zdGF0ZS5nZXQoaHJlZiksXG4gICAgICAuLi5kYXRhLFxuICAgIH07XG4gICAgdGhpcy5fc3RhdGUuc2V0KGhyZWYsIHN0YXRlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL3ByZXZlbnRcbiAqIDxicj48YnI+XG4gKiAjIyBQcmV2ZW50IGNoZWNrcy5cbiAqXG4gKiAtIEdhdGhlcnMgYWxsIHRoZSB0ZXN0cyB0aGF0IGFsbG93IEJhcmJhIHRvIHdvcmsgYW5kIHBsYXkgdHJhbnNpdGlvbnNcbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9wcmV2ZW50XG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElnbm9yZU9wdGlvbiwgTGluaywgUHJldmVudENoZWNrIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBTY2hlbWFzXG5pbXBvcnQgeyBzY2hlbWFBdHRyaWJ1dGUgfSBmcm9tICcuLi9zY2hlbWFzL2F0dHJpYnV0ZSc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgdXJsIH0gZnJvbSAnLi4vdXRpbHMnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgSWdub3JlIH0gZnJvbSAnLi9JZ25vcmUnO1xuXG4vKipcbiAqIE1ha2Ugc3VyZSB0aGUgYnJvd3NlciBzdXBwb3J0cyBgaGlzdG9yeS5wdXNoU3RhdGVgLlxuICovXG5jb25zdCBwdXNoU3RhdGU6IFByZXZlbnRDaGVjayA9ICgpID0+ICF3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbi8qKlxuICogTWFrZSBzdXJlIHRoZXJlIGlzIGFuIGBlbGAgYW5kIGBocmVmYC5cbiAqL1xuY29uc3QgZXhpc3RzOiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCwgaHJlZiB9KSA9PiAhZWwgfHwgIWhyZWY7XG5cbi8qKlxuICogSWYgdGhlIHVzZXIgaXMgcHJlc3NpbmcgY3RybCArIGNsaWNrLCB0aGUgYnJvd3NlciB3aWxsIG9wZW4gYSBuZXcgdGFiLlxuICovXG5jb25zdCBuZXdUYWI6IFByZXZlbnRDaGVjayA9ICh7IGV2ZW50IH0pID0+XG4gIChldmVudCBhcyBLZXlib2FyZEV2ZW50KS53aGljaCA+IDEgfHxcbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLm1ldGFLZXkgfHxcbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmN0cmxLZXkgfHxcbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLnNoaWZ0S2V5IHx8XG4gIChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5hbHRLZXk7XG5cbi8qKlxuICogSWYgdGhlIGxpbmsgaGFzIGBfYmxhbmtgIHRhcmdldC5cbiAqL1xuY29uc3QgYmxhbms6IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gIGVsLmhhc0F0dHJpYnV0ZSgndGFyZ2V0JykgJiYgKGVsIGFzIExpbmspLnRhcmdldCA9PT0gJ19ibGFuayc7XG5cbi8qKlxuICogSWYgdGhlIGRvbWFpbiBpcyB0aGUgc2FtZSAoaW4gb3JkZXIgdG8gYXZvaWQgcHVzaFN0YXRlIGNyb3NzIG9yaWdpbiBzZWN1cml0eSBwcm9ibGVtKS5cbiAqIE5vdGU6IFNWR0FFbGVtZW50IGRvIG5vdCBoYXZlIGBwcm90b2NvbGAgbmVpdGhlciBgaG9zdG5hbWVgIHByb3BlcnRpZXMuXG4gKi9cbmNvbnN0IGNvcnNEb21haW46IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gICgoZWwgYXMgSFRNTEFuY2hvckVsZW1lbnQpLnByb3RvY29sICE9PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT09IChlbCBhcyBIVE1MQW5jaG9yRWxlbWVudCkucHJvdG9jb2wpIHx8XG4gICgoZWwgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhvc3RuYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgIT09IChlbCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaG9zdG5hbWUpO1xuXG4vKipcbiAqIElmIHRoZSBwb3J0IGlzIHRoZSBzYW1lLlxuICogTm90ZTogU1ZHQUVsZW1lbnQgZG8gbm90IGhhdmUgYHBvcnRgIHByb3BlcnR5LlxuICovXG5jb25zdCBjb3JzUG9ydDogUHJldmVudENoZWNrID0gKHsgZWwgfSkgPT5cbiAgKGVsIGFzIEhUTUxBbmNob3JFbGVtZW50KS5wb3J0ICE9PSB1bmRlZmluZWQgJiZcbiAgdXJsLmdldFBvcnQoKSAhPT0gdXJsLmdldFBvcnQoKGVsIGFzIEhUTUxBbmNob3JFbGVtZW50KS5ocmVmKTtcblxuLyoqXG4gKiBJZiB0aGUgbGluayBoYXMgZG93bmxvYWQgYXR0cmlidXRlLlxuICovXG5jb25zdCBkb3dubG9hZDogUHJldmVudENoZWNrID0gKHsgZWwgfSkgPT5cbiAgZWwuZ2V0QXR0cmlidXRlICYmIHR5cGVvZiBlbC5nZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJykgPT09ICdzdHJpbmcnO1xuXG4vKipcbiAqIElmIHRoZSBsaW5rcyBjb250YWlucyBbZGF0YS1iYXJiYS1wcmV2ZW50XSBvciBbZGF0YS1iYXJiYS1wcmV2ZW50PVwic2VsZlwiXS5cbiAqL1xuY29uc3QgcHJldmVudFNlbGY6IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gIGVsLmhhc0F0dHJpYnV0ZShgJHtzY2hlbWFBdHRyaWJ1dGUucHJlZml4fS0ke3NjaGVtYUF0dHJpYnV0ZS5wcmV2ZW50fWApO1xuXG4vKipcbiAqIElmIHNvbWUgbGluayBhbmNlc3RvciBjb250YWlucyBbZGF0YS1iYXJiYS1wcmV2ZW50PVwiYWxsXCJdLlxuICovXG5jb25zdCBwcmV2ZW50QWxsOiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCB9KSA9PlxuICBCb29sZWFuKFxuICAgIGVsLmNsb3Nlc3QoYFske3NjaGVtYUF0dHJpYnV0ZS5wcmVmaXh9LSR7c2NoZW1hQXR0cmlidXRlLnByZXZlbnR9PVwiYWxsXCJdYClcbiAgKTtcblxuLyoqXG4gKiBJZiB0aGUgbGluayBpcyB0aGUgY3VycmVudCBVUkwuXG4gKlxuICogPiBOb3QgaW4gdGhlIHRlc3Qgc3VpdGUuXG4gKi9cbmNvbnN0IHNhbWVVcmw6IFByZXZlbnRDaGVjayA9ICh7IGhyZWYgfSkgPT5cbiAgdXJsLmNsZWFuKGhyZWYpID09PSB1cmwuY2xlYW4oKSAmJiB1cmwuZ2V0UG9ydChocmVmKSA9PT0gdXJsLmdldFBvcnQoKTtcblxuZXhwb3J0IGNsYXNzIFByZXZlbnQgZXh0ZW5kcyBJZ25vcmUge1xuICBwdWJsaWMgc3VpdGU6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyB0ZXN0czogTWFwPHN0cmluZywgUHJldmVudENoZWNrPiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihpZ25vcmU6IElnbm9yZU9wdGlvbikge1xuICAgIHN1cGVyKGlnbm9yZSk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAvLyBBZGQgZGVmYXVsdHNcbiAgICB0aGlzLmFkZCgncHVzaFN0YXRlJywgcHVzaFN0YXRlKTtcbiAgICB0aGlzLmFkZCgnZXhpc3RzJywgZXhpc3RzKTtcbiAgICB0aGlzLmFkZCgnbmV3VGFiJywgbmV3VGFiKTtcbiAgICB0aGlzLmFkZCgnYmxhbmsnLCBibGFuayk7XG4gICAgdGhpcy5hZGQoJ2NvcnNEb21haW4nLCBjb3JzRG9tYWluKTtcbiAgICB0aGlzLmFkZCgnY29yc1BvcnQnLCBjb3JzUG9ydCk7XG4gICAgdGhpcy5hZGQoJ2Rvd25sb2FkJywgZG93bmxvYWQpO1xuICAgIHRoaXMuYWRkKCdwcmV2ZW50U2VsZicsIHByZXZlbnRTZWxmKTtcbiAgICB0aGlzLmFkZCgncHJldmVudEFsbCcsIHByZXZlbnRBbGwpO1xuXG4gICAgLy8gT3V0c2lkZSBvZiB0aGUgdGVzdCBzdWl0ZVxuICAgIHRoaXMuYWRkKCdzYW1lVXJsJywgc2FtZVVybCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGFkZChuYW1lOiBzdHJpbmcsIGNoZWNrOiBQcmV2ZW50Q2hlY2ssIHN1aXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMudGVzdHMuc2V0KG5hbWUsIGNoZWNrKTtcbiAgICBzdWl0ZSAmJiB0aGlzLnN1aXRlLnB1c2gobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIGluZGl2aWR1YWwgdGVzdFxuICAgKi9cbiAgcHVibGljIHJ1bihuYW1lOiBzdHJpbmcsIGVsOiBMaW5rLCBldmVudDogRXZlbnQsIGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRlc3RzLmdldChuYW1lKSh7XG4gICAgICBlbCxcbiAgICAgIGV2ZW50LFxuICAgICAgaHJlZixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gdGVzdCBzdWl0ZVxuICAgKi9cbiAgcHVibGljIGNoZWNrTGluayhlbDogTGluaywgZXZlbnQ6IEV2ZW50LCBocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdWl0ZS5zb21lKG5hbWUgPT4gdGhpcy5ydW4obmFtZSwgZWwsIGV2ZW50LCBocmVmKSk7XG4gIH1cbn1cbiIsIi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yXG5leHBvcnQgY2xhc3MgQmFyYmFFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVycm9yOiBFcnJvcixcbiAgICBwdWJsaWMgbGFiZWwgPSAnQmFyYmEgZXJyb3InLFxuICAgIC4uLnBhcmFtczogYW55W11cbiAgKSB7XG4gICAgLy8gUGFzcyByZW1haW5pbmcgYXJndW1lbnRzIChpbmNsdWRpbmcgdmVuZG9yIHNwZWNpZmljIG9uZXMpIHRvIHBhcmVudCBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKC4uLnBhcmFtcyk7XG5cbiAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93biAob25seSBhdmFpbGFibGUgb24gVjgpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEJhcmJhRXJyb3IpO1xuICAgIH1cblxuICAgIHRoaXMubmFtZSA9ICdCYXJiYUVycm9yJztcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL3N0b3JlXG4gKiA8YnI+PGJyPlxuICogIyMgVHJhbnNpdGlvbnMgc3RvcmUuXG4gKlxuICogLSBSZXNvbHZlIHRyYW5zaXRpb25cbiAqIC0gTWFuYWdlIHJ1bGVzXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvc3RvcmVcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHtcbiAgSVJ1bGUsXG4gIElSdWxlcyxcbiAgSVRyYW5zaXRpb25EYXRhLFxuICBJVHJhbnNpdGlvbkZpbHRlcnMsXG4gIElUcmFuc2l0aW9uT25jZSxcbiAgSVRyYW5zaXRpb25QYWdlLFxuICBSdWxlTmFtZSxcbn0gZnJvbSAnLi4vZGVmcyc7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vTG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcignQGJhcmJhL2NvcmUnKTtcbiAgLyoqXG4gICAqIEFsbCByZWdpc3RlcmVkIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgcHVibGljIGFsbDogSVRyYW5zaXRpb25QYWdlW10gPSBbXTtcbiAgLyoqXG4gICAqIFwiUGFnZSBvbmx5XCIgcmVnaXN0ZXJlZCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBwYWdlOiBJVHJhbnNpdGlvblBhZ2VbXSA9IFtdO1xuICAvKipcbiAgICogXCJPbmNlIG9ubHlcIiByZWdpc3RlcmVkIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgcHVibGljIG9uY2U6IElUcmFuc2l0aW9uT25jZVtdID0gW107XG4gIC8qKlxuICAgKiBSdWxlcyBmb3IgdHJhbnNpdGlvbiByZXNvbHV0aW9uLlxuICAgKlxuICAgKiBEZWZhdWx0czpcbiAgICpcbiAgICogLSBuYW1lc3BhY2VcbiAgICogLSBjdXN0b21cbiAgICovXG4gIHByaXZhdGUgX3J1bGVzOiBJUnVsZVtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICduYW1lc3BhY2UnLFxuICAgICAgdHlwZTogJ3N0cmluZ3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2N1c3RvbScsXG4gICAgICB0eXBlOiAnZnVuY3Rpb24nLFxuICAgIH0sXG4gIF07XG5cbiAgLyoqXG4gICAqIEluaXQgc3RvcmUuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0cmFuc2l0aW9uczogSVRyYW5zaXRpb25QYWdlW10gPSBbXSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRyYW5zaXRpb25zKSB7XG4gICAgICAvLyBUT0RPOiBhZGQgY2hlY2sgZm9yIHZhbGlkIHRyYW5zaXRpb25zPyBjcml0ZXJpYT8gKG9uY2UgfHwgZW50ZXIgJiYgbGVhdmUpXG4gICAgICB0aGlzLmFsbCA9IHRoaXMuYWxsLmNvbmNhdCh0cmFuc2l0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHJ1bGUgb3IgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhZGQodHlwZTogJ3J1bGUnIHwgJ3RyYW5zaXRpb24nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3J1bGUnOlxuICAgICAgICAvLyBUT0RPOiBjaGVjayBmb3IgdmFsaWQgcnVsZVxuICAgICAgICB0aGlzLl9ydWxlcy5zcGxpY2UoZGF0YS5wb3NpdGlvbiB8fCAwLCAwLCBkYXRhLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0cmFuc2l0aW9uJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIFRPRE86IGNoZWNrIGZvciB2YWxpZCB0cmFuc2l0aW9uXG4gICAgICAgIHRoaXMuYWxsLnB1c2goZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIHJlc29sdmUoXG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhLFxuICAgIGZpbHRlcnM6IElUcmFuc2l0aW9uRmlsdGVycyA9IHt9XG4gICk6IElUcmFuc2l0aW9uT25jZSB8IElUcmFuc2l0aW9uUGFnZSB7XG4gICAgLy8gRmlsdGVyIG9uIFwib25jZVwiXG4gICAgbGV0IHRyYW5zaXRpb25zID0gZmlsdGVycy5vbmNlID8gdGhpcy5vbmNlIDogdGhpcy5wYWdlO1xuXG4gICAgLy8gRmlsdGVyIG9uIFwic2VsZlwiXG4gICAgaWYgKGZpbHRlcnMuc2VsZikge1xuICAgICAgdHJhbnNpdGlvbnMgPSB0cmFuc2l0aW9ucy5maWx0ZXIodCA9PiB0Lm5hbWUgJiYgdC5uYW1lID09PSAnc2VsZicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9ucyA9IHRyYW5zaXRpb25zLmZpbHRlcih0ID0+ICF0Lm5hbWUgfHwgdC5uYW1lICE9PSAnc2VsZicpO1xuICAgIH1cblxuICAgIC8vIEFsbCBtYXRjaGluZyB0cmFuc2l0aW9uIGluZm9zXG4gICAgY29uc3QgbWF0Y2hpbmcgPSBuZXcgTWFwKCk7XG5cbiAgICAvLyBBY3RpdmUgPSBmaXJzdCBvZiB2YWxpZCB0cmFuc2l0aW9uc1xuICAgIC8vIHNvcnRlZCBieSBkaXJlY3Rpb25zIChmcm9tL3RvLCBmcm9tIHx8IHRvLCDigKYpXG4gICAgY29uc3QgYWN0aXZlID0gdHJhbnNpdGlvbnMuZmluZCh0ID0+IHtcbiAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICBjb25zdCBtYXRjaCA9IHt9O1xuXG4gICAgICBpZiAoZmlsdGVycy5zZWxmICYmIHQubmFtZSA9PT0gJ3NlbGYnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBydWxlc1xuICAgICAgdGhpcy5fcnVsZXMucmV2ZXJzZSgpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgIHZhbGlkID0gdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gpO1xuICAgICAgICAgIC8vIEZyb20vdG8gY2hlY2tcbiAgICAgICAgICBpZiAodC5mcm9tICYmIHQudG8pIHtcbiAgICAgICAgICAgIHZhbGlkID1cbiAgICAgICAgICAgICAgdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gsICdmcm9tJykgJiZcbiAgICAgICAgICAgICAgdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gsICd0bycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodC5mcm9tICYmICF0LnRvKSB7XG4gICAgICAgICAgICB2YWxpZCA9IHRoaXMuX2NoZWNrKHQsIHJ1bGUsIGRhdGEsIG1hdGNoLCAnZnJvbScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXQuZnJvbSAmJiB0LnRvKSB7XG4gICAgICAgICAgICB2YWxpZCA9IHRoaXMuX2NoZWNrKHQsIHJ1bGUsIGRhdGEsIG1hdGNoLCAndG8nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtYXRjaGluZy5zZXQodCwgbWF0Y2gpO1xuXG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY3RpdmVNYXRjaCA9IG1hdGNoaW5nLmdldChhY3RpdmUpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25UeXBlID0gW107XG4gICAgaWYgKGZpbHRlcnMub25jZSkge1xuICAgICAgdHJhbnNpdGlvblR5cGUucHVzaCgnb25jZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uVHlwZS5wdXNoKCdwYWdlJyk7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJzLnNlbGYpIHtcbiAgICAgIHRyYW5zaXRpb25UeXBlLnB1c2goJ3NlbGYnKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlTWF0Y2gpIHtcbiAgICAgIC8vIExvZyByZXNvbHZlZCB0cmFuc2l0aW9uXG4gICAgICBjb25zdCBpbmZvczogYW55W10gPSBbYWN0aXZlXTtcbiAgICAgIC8vIExvZyBpZiBtYXRjaGluZyBjcml0ZXJpYVxuICAgICAgT2JqZWN0LmtleXMoYWN0aXZlTWF0Y2gpLmxlbmd0aCA+IDAgJiYgaW5mb3MucHVzaChhY3RpdmVNYXRjaCk7XG5cbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgIGBUcmFuc2l0aW9uIGZvdW5kIFske3RyYW5zaXRpb25UeXBlLmpvaW4oJywnKX1dYCxcbiAgICAgICAgLi4uaW5mb3NcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oYE5vIHRyYW5zaXRpb24gZm91bmQgWyR7dHJhbnNpdGlvblR5cGUuam9pbignLCcpfV1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBVcGRhdGUgc3RvcmUuXG4gICAqXG4gICAqIC0gUmVvcmRlciB0cmFuc2l0aW9uIGJ5IHByaW9yaXRpZXNcbiAgICogLSBHZXQgd2FpdCBpbmRpY2F0b3JcbiAgICogLSBHZXQgb25jZSB0cmFuc2l0aW9uc1xuICAgKi9cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAvLyBSZW9yZGVyIGJ5IHByaW9yaXRpZXNcbiAgICB0aGlzLmFsbCA9IHRoaXMuYWxsXG4gICAgICAubWFwKHQgPT4gdGhpcy5fYWRkUHJpb3JpdHkodCkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAubWFwKHQgPT4ge1xuICAgICAgICBkZWxldGUgdC5wcmlvcml0eTtcblxuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH0pO1xuICAgIHRoaXMucGFnZSA9IHRoaXMuYWxsLmZpbHRlcihcbiAgICAgIHQgPT4gdC5sZWF2ZSAhPT0gdW5kZWZpbmVkIHx8IHQuZW50ZXIgIT09IHVuZGVmaW5lZFxuICAgICkgYXMgSVRyYW5zaXRpb25QYWdlW107XG4gICAgdGhpcy5vbmNlID0gdGhpcy5hbGwuZmlsdGVyKHQgPT4gdC5vbmNlICE9PSB1bmRlZmluZWQpIGFzIElUcmFuc2l0aW9uT25jZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBDaGVjayBpZiB0cmFuc2l0aW9uIGFwcGx5LlxuICAgKlxuICAgKiBCYXNlZCBvbiBydWxlLCBwYWdlIGRhdGEgYW5kIG9wdGlvbmFsIGRpcmVjdGlvbjpcbiAgICpcbiAgICogMS4gdHJhbnNpdGlvbiBoYXMgbm8gcnVsZSBcInByb3BlcnR5XCI6XG4gICAqICAgIC0gYWx3YXlzIHJldHVybnMgdHJ1ZVxuICAgKiAyLiB0cmFuc2l0aW9uIGhhcyBydWxlIFwicHJvcGVydHlcIjpcbiAgICogICAgIC0gXCJzdHJpbmdzXCIgc2hvdWxkIGJlIHByZXNlbnQgb24gYm90aCBzaWRlICh0cmFuc2l0aW9uICsgcGFnZSkgYW5kIG1hdGNoXG4gICAqICAgICAtIFwiZnVuY3Rpb25cIiBzaG91bGQgcmV0dXJuIHRydWVcbiAgICovXG4gIHByaXZhdGUgX2NoZWNrKFxuICAgIHRyYW5zaXRpb246IElUcmFuc2l0aW9uUGFnZSxcbiAgICBydWxlOiBJUnVsZSxcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGEsXG4gICAgbWF0Y2g6IGFueSxcbiAgICBkaXJlY3Rpb24/OiAnZnJvbScgfCAndG8nXG4gICk6IGJvb2xlYW4ge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBsZXQgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICBjb25zdCB0ID0gdHJhbnNpdGlvbjtcbiAgICBjb25zdCB7IG5hbWUsIHR5cGUgfSA9IHJ1bGU7XG4gICAgY29uc3Qgc3RyUnVsZSA9IG5hbWUgYXMgSVJ1bGVzWydzdHJpbmdzJ107XG4gICAgY29uc3Qgb2JqUnVsZSA9IG5hbWUgYXMgSVJ1bGVzWydvYmplY3QnXTtcbiAgICBjb25zdCBmbk5hbWUgPSBuYW1lIGFzIElSdWxlc1snZnVuY3Rpb24nXTtcbiAgICBjb25zdCBiYXNlID0gZGlyZWN0aW9uID8gdFtkaXJlY3Rpb25dIDogdDsgLy8gPSB0IHx8IHQuZnJvbSB8fCB0LnRvXG4gICAgY29uc3QgcGFnZSA9IGRpcmVjdGlvbiA9PT0gJ3RvJyA/IGRhdGEubmV4dCA6IGRhdGEuY3VycmVudDsgLy8gPSBjdXJyZW50IHx8IG5leHRcbiAgICBjb25zdCBleGlzdCA9IGRpcmVjdGlvbiA/IGJhc2UgJiYgYmFzZVtuYW1lXSA6IGJhc2VbbmFtZV07XG5cbiAgICAvLyBJZiB0cmFuc2l0aW9uIHJ1bGUgZXhpc3RzXG4gICAgaWYgKGV4aXN0KSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5ncyc6XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAvLyBBcnJheSBzdXBwb3J0XG4gICAgICAgICAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gQXJyYXkuaXNBcnJheShiYXNlW3N0clJ1bGVdKVxuICAgICAgICAgICAgPyAoYmFzZVtzdHJSdWxlXSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgIDogW2Jhc2Vbc3RyUnVsZV0gYXMgc3RyaW5nXTtcblxuICAgICAgICAgIC8vIEZvciBtYXRjaGluZywgcHJvcCBzaG91bGQgYmUgcHJlc2VudCBvbiBib3RoIHNpZGVzIGFuZCBtYXRjaFxuICAgICAgICAgIGlmIChwYWdlW3N0clJ1bGVdICYmIG5hbWVzLmluZGV4T2YocGFnZVtzdHJSdWxlXSkgIT09IC0xKSB7XG4gICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIElmIHRyYW5zaXRpb24gcHJvcCBpcyBkaWZmZXJlbnQgZnJvbSBjdXJyZW50LCBub3QgdmFsaWRcbiAgICAgICAgICBpZiAobmFtZXMuaW5kZXhPZihwYWdlW3N0clJ1bGVdKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdvYmplY3QnOiB7XG4gICAgICAgICAgLy8gQXJyYXkgc3VwcG9ydFxuICAgICAgICAgIGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IEFycmF5LmlzQXJyYXkoYmFzZVtvYmpSdWxlXSlcbiAgICAgICAgICAgID8gKGJhc2Vbb2JqUnVsZV0gYXMgc3RyaW5nW10pXG4gICAgICAgICAgICA6IFtiYXNlW29ialJ1bGVdIGFzIHN0cmluZ107XG5cbiAgICAgICAgICAvLyBGb3IgbWF0Y2hpbmcsIHByb3Agc2hvdWxkIGJlIHByZXNlbnQgb24gYm90aCBzaWRlcyBhbmQgbWF0Y2hcbiAgICAgICAgICBpZiAocGFnZVtvYmpSdWxlXSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwYWdlW29ialJ1bGVdLm5hbWUgJiZcbiAgICAgICAgICAgICAgbmFtZXMuaW5kZXhPZihwYWdlW29ialJ1bGVdLm5hbWUpICE9PSAtMVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRyYW5zaXRpb24gcHJvcCBpcyBkaWZmZXJlbnQgZnJvbSBjdXJyZW50LCBub3QgdmFsaWRcbiAgICAgICAgICAgIGlmIChuYW1lcy5pbmRleE9mKHBhZ2Vbb2JqUnVsZV0ubmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICBpZiAoYmFzZVtmbk5hbWVdKGRhdGEpKSB7XG4gICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgbWF0Y2hbZGlyZWN0aW9uXSA9IG1hdGNoW2RpcmVjdGlvbl0gfHwge307XG4gICAgICAgICAgbWF0Y2hbZGlyZWN0aW9uXVtuYW1lXSA9IHRbZGlyZWN0aW9uXVtuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaFtuYW1lXSA9IHRbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgQ2FsY3VsYXRlIHRyYW5zaXRpb24gcHJpb3JpdHkuXG4gICAqXG4gICAqIEJhc2VkIG9uOlxuICAgKlxuICAgKiAtIHJ1bGUgXCJwb3NpdGlvblwiIChpbmRleCkgZ2l2ZSB0ZW5zLCBodW5kcmVkcywgdGhvdXNhbmRzLCDigKZcbiAgICogLSBmcm9tL3RvIHByb3BlcnRpZXMgZ2l2ZSB1bml0cyAoMCwgMSBvciAyKVxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlUHJpb3JpdHkoXG4gICAgdDogSVRyYW5zaXRpb25QYWdlLFxuICAgIHJ1bGVOYW1lOiBSdWxlTmFtZSxcbiAgICBydWxlSW5kZXg6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIGxldCBwcmlvcml0eSA9IDA7XG5cbiAgICBpZiAoXG4gICAgICB0W3J1bGVOYW1lXSB8fFxuICAgICAgKHQuZnJvbSAmJiB0LmZyb21bcnVsZU5hbWVdKSB8fFxuICAgICAgKHQudG8gJiYgdC50b1tydWxlTmFtZV0pXG4gICAgKSB7XG4gICAgICBwcmlvcml0eSArPSBNYXRoLnBvdygxMCwgcnVsZUluZGV4KTtcblxuICAgICAgaWYgKHQuZnJvbSAmJiB0LmZyb21bcnVsZU5hbWVdKSB7XG4gICAgICAgIHByaW9yaXR5ICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAodC50byAmJiB0LnRvW3J1bGVOYW1lXSkge1xuICAgICAgICBwcmlvcml0eSArPSAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZFByaW9yaXR5KHQ6IElUcmFuc2l0aW9uUGFnZSk6IElUcmFuc2l0aW9uUGFnZSB7XG4gICAgdC5wcmlvcml0eSA9IDA7XG4gICAgbGV0IHByaW9yaXR5ID0gMDtcblxuICAgIHRoaXMuX3J1bGVzLmZvckVhY2goKHJ1bGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gcnVsZTtcbiAgICAgIGNvbnN0IGluZGV4ID0gaSArIDE7XG5cbiAgICAgIHByaW9yaXR5ICs9IHRoaXMuX2NhbGN1bGF0ZVByaW9yaXR5KHQsIG5hbWUsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIHQucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIHJldHVybiB0O1xuICB9XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvdHJhbnNpdGlvbnNcbiAqIDxicj48YnI+XG4gKiAjIyBUcmFuc2l0aW9ucyBtYW5hZ2VyLlxuICpcbiAqIC0gSGFuZGxlIGhvb2tzIGFuZCB0cmFuc2l0aW9uIGxpZmVjeWNsZVxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL3RyYW5zaXRpb25zXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7XG4gIEhvb2tzVHJhbnNpdGlvbixcbiAgSG9va3NUcmFuc2l0aW9uTWFwLFxuICBJVHJhbnNpdGlvbkRhdGEsXG4gIElUcmFuc2l0aW9uRmlsdGVycyxcbiAgSVRyYW5zaXRpb25PbmNlLFxuICBJVHJhbnNpdGlvblBhZ2UsXG4gIFdyYXBwZXIsXG59IGZyb20gJy4uL2RlZnMnO1xuLy8gSG9va3NcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vaG9va3MnO1xuLy8gVXRpbHNcbmltcG9ydCB7IGRvbSwgaGVscGVycywgcnVuQXN5bmMgfSBmcm9tICcuLi91dGlscyc7XG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBCYXJiYUVycm9yIH0gZnJvbSAnLi9FcnJvcic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL0xvZ2dlcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vU3RvcmUnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbnMge1xuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCdAYmFyYmEvY29yZScpO1xuICBwdWJsaWMgc3RvcmU6IFN0b3JlO1xuICBwcml2YXRlIF9ydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IodHJhbnNpdGlvbnM6IElUcmFuc2l0aW9uUGFnZVtdID0gW10pIHtcbiAgICB0aGlzLnN0b3JlID0gbmV3IFN0b3JlKHRyYW5zaXRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVzb2x2ZWQgdHJhbnNpdGlvblxuICAgKlxuICAgKiAtIGJhc2VkIG9uIGRhdGFcbiAgICovXG4gIHB1YmxpYyBnZXQoXG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhLFxuICAgIGZpbHRlcnM/OiBJVHJhbnNpdGlvbkZpbHRlcnNcbiAgKTogSVRyYW5zaXRpb25PbmNlIHwgSVRyYW5zaXRpb25QYWdlIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5yZXNvbHZlKGRhdGEsIGZpbHRlcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBydW5uaW5nIHN0YXR1cy5cbiAgICovXG4gIGdldCBpc1J1bm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bm5pbmc7XG4gIH1cbiAgc2V0IGlzUnVubmluZyhzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ydW5uaW5nID0gc3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciByZWdpc3RlcmVkIG9uY2UgdHJhbnNpdGlvbihzKS5cbiAgICovXG4gIGdldCBoYXNPbmNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLm9uY2UubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBmb3IgcmVnaXN0ZXJlZCBzZWxmIHRyYW5zaXRpb24uXG4gICAqL1xuICBnZXQgaGFzU2VsZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5hbGwuc29tZSh0ID0+IHQubmFtZSA9PT0gJ3NlbGYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgV2FpdCBpbmRpY2F0b3IuXG4gICAqXG4gICAqIFRlbGxzIEJhcmJhIHRvIGdldCBuZXh0IHBhZ2UgZGF0YTxicj5cbiAgICogYmVmb3JlIHN0YXJ0aW5nIHRoZSByZXNvbHV0aW9uPGJyPlxuICAgKiBiZWNhdXNlIHNvbWUgcmVnaXN0ZXJlZCB0cmFuc2l0aW9ucyBuZWVkPGJyPlxuICAgKiBuZXh0IHBhZ2UgZGF0YSB0byBiZSByZXNvbHZlZCAoZWc6IGBzeW5jOiB0cnVlYCwgYHRvOiB7IG5hbWVzcGFjZSB9YCwg4oCmKVxuICAgKi9cbiAgZ2V0IHNob3VsZFdhaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuYWxsLnNvbWUodCA9PiAodC50byAmJiAhdC50by5yb3V0ZSkgfHwgdC5zeW5jKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgRG8gXCJvbmNlXCIgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogSG9va3M6IHNlZSBbW0hvb2tzT25jZV1dLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGRvT25jZSh7XG4gICAgZGF0YSxcbiAgICB0cmFuc2l0aW9uLFxuICB9OiB7XG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhO1xuICAgIHRyYW5zaXRpb246IElUcmFuc2l0aW9uT25jZTtcbiAgfSkge1xuICAgIGNvbnN0IHQgPSB0cmFuc2l0aW9uIHx8IHt9O1xuICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdiZWZvcmVPbmNlJywgZGF0YSwgdCk7XG4gICAgICBhd2FpdCB0aGlzLm9uY2UoZGF0YSwgdCk7XG4gICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXJPbmNlJywgZGF0YSwgdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1RyYW5zaXRpb24gZXJyb3IgW2JlZm9yZS9hZnRlci9vbmNlXScpO1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgRG8gXCJwYWdlXCIgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogSG9va3M6IHNlZSBbW0hvb2tzUGFnZV1dLlxuICAgKlxuICAgKiBgc3luYzogZmFsc2VgIChkZWZhdWx0KSBvcmRlcjpcbiAgICpcbiAgICogMS4gYmVmb3JlXG4gICAqIDIuIGJlZm9yZUxlYXZlXG4gICAqIDMuIGxlYXZlXG4gICAqIDQuIGFmdGVyTGVhdmVcbiAgICogNS4gYmVmb3JlRW50ZXJcbiAgICogNi4gZW50ZXJcbiAgICogNy4gYWZ0ZXJFbnRlclxuICAgKiA4LiBhZnRlclxuICAgKlxuICAgKiBgc3luYzogdHJ1ZWAgb3JkZXI6XG4gICAqXG4gICAqIDEuIGJlZm9yZVxuICAgKiAyLiBiZWZvcmVMZWF2ZVxuICAgKiAzLiBiZWZvcmVFbnRlclxuICAgKiA0LiBsZWF2ZSAmIGVudGVyXG4gICAqIDUuIGFmdGVyTGVhdmVcbiAgICogNi4gYWZ0ZXJFbnRlclxuICAgKiA3LiBhZnRlclxuICAgKi9cbiAgcHVibGljIGFzeW5jIGRvUGFnZSh7XG4gICAgZGF0YSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIHBhZ2UsXG4gICAgd3JhcHBlcixcbiAgfToge1xuICAgIGRhdGE6IElUcmFuc2l0aW9uRGF0YTtcbiAgICB0cmFuc2l0aW9uOiBJVHJhbnNpdGlvblBhZ2U7XG4gICAgcGFnZTogUHJvbWlzZTxzdHJpbmcgfCB2b2lkPjtcbiAgICB3cmFwcGVyOiBXcmFwcGVyO1xuICB9KSB7XG4gICAgY29uc3QgdCA9IHRyYW5zaXRpb24gfHwge307XG4gICAgY29uc3Qgc3luYyA9IHQuc3luYyA9PT0gdHJ1ZSB8fCBmYWxzZTtcblxuICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIENoZWNrIHN5bmMgbW9kZSwgd2FpdCBmb3IgbmV4dCBjb250ZW50XG4gICAgICBpZiAoc3luYykge1xuICAgICAgICBhd2FpdCBoZWxwZXJzLnVwZGF0ZShwYWdlLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2JlZm9yZScsIGRhdGEsIHQpO1xuXG4gICAgICBpZiAoc3luYykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYWRkKGRhdGEsIHdyYXBwZXIpO1xuICAgICAgICAgIC8vIEJlZm9yZSBhY3Rpb25zXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2JlZm9yZUxlYXZlJywgZGF0YSwgdCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2JlZm9yZUVudGVyJywgZGF0YSwgdCk7XG5cbiAgICAgICAgICAvLyBBY3Rpb25zXG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMubGVhdmUoZGF0YSwgdCksIHRoaXMuZW50ZXIoZGF0YSwgdCldKTtcblxuICAgICAgICAgIC8vIEFmdGVyIGFjdGlvbnNcbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXJMZWF2ZScsIGRhdGEsIHQpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdhZnRlckVudGVyJywgZGF0YSwgdCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ1RyYW5zaXRpb24gZXJyb3IgW3N5bmNdJyk7XG4gICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25FcnJvcihlcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCYXJiYUVycm9yKGVycm9yLCAnVHJhbnNpdGlvbiBlcnJvciBbc3luY10nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsZWF2ZVJlc3VsdDogYW55ID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBMZWF2ZVxuICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdiZWZvcmVMZWF2ZScsIGRhdGEsIHQpO1xuXG4gICAgICAgICAgbGVhdmVSZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLmxlYXZlKGRhdGEsIHQpLFxuICAgICAgICAgICAgaGVscGVycy51cGRhdGUocGFnZSwgZGF0YSksXG4gICAgICAgICAgXSkudGhlbih2YWx1ZXMgPT4gdmFsdWVzWzBdKTtcblxuICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdhZnRlckxlYXZlJywgZGF0YSwgdCk7XG5cbiAgICAgICAgICAvLyBUT0RPOiBjaGVjayBoZXJlIFwidmFsaWRcIiBwYWdlIHJlc3VsdFxuICAgICAgICAgIC8vIGJlZm9yZSBnb2luZyBmdXJ0aGVyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ1RyYW5zaXRpb24gZXJyb3IgW2JlZm9yZS9hZnRlci9sZWF2ZV0nKTtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbkVycm9yKGVycm9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJhcmJhRXJyb3IoXG4gICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAnVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL2xlYXZlXSdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBFbnRlclxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgaWYgKGxlYXZlUmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGQoZGF0YSwgd3JhcHBlcik7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdiZWZvcmVFbnRlcicsIGRhdGEsIHQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5lbnRlcihkYXRhLCB0LCBsZWF2ZVJlc3VsdCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXJFbnRlcicsIGRhdGEsIHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL2VudGVyXScpO1xuICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFyYmFFcnJvcihcbiAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICdUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvZW50ZXJdJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgY29udGFpZW5yXG4gICAgICBhd2FpdCB0aGlzLnJlbW92ZShkYXRhKTtcblxuICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2FmdGVyJywgZGF0YSwgdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgLy8gSWYgXCJjdXN0b20vc3BlY2lmaWNcIiBiYXJiYSBlcnJvci5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoZXJyb3IubmFtZSAmJiBlcnJvci5uYW1lID09PSAnQmFyYmFFcnJvcicpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoZXJyb3IubGFiZWwpO1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvci5lcnJvcik7XG5cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdUcmFuc2l0aW9uIGVycm9yIFtwYWdlXScpO1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogT25jZSBob29rICsgYXN5bmMgXCJvbmNlXCIgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvbmNlKGRhdGE6IElUcmFuc2l0aW9uRGF0YSwgdDogSVRyYW5zaXRpb25PbmNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgaG9va3MuZG8oJ29uY2UnLCBkYXRhLCB0KTtcblxuICAgIHJldHVybiB0Lm9uY2UgPyBydW5Bc3luYyh0Lm9uY2UsIHQpKGRhdGEpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvKipcbiAgICogTGVhdmUgaG9vayArIGFzeW5jIFwibGVhdmVcIiB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGxlYXZlKGRhdGE6IElUcmFuc2l0aW9uRGF0YSwgdDogSVRyYW5zaXRpb25QYWdlKTogUHJvbWlzZTxhbnk+IHtcbiAgICBhd2FpdCBob29rcy5kbygnbGVhdmUnLCBkYXRhLCB0KTtcblxuICAgIHJldHVybiB0LmxlYXZlID8gcnVuQXN5bmModC5sZWF2ZSwgdCkoZGF0YSkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnRlciBob29rICsgYXN5bmMgXCJlbnRlclwiIHRyYW5zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZW50ZXIoXG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhLFxuICAgIHQ6IElUcmFuc2l0aW9uUGFnZSxcbiAgICBsZWF2ZVJlc3VsdD86IGFueVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBob29rcy5kbygnZW50ZXInLCBkYXRhLCB0KTtcblxuICAgIHJldHVybiB0LmVudGVyXG4gICAgICA/IHJ1bkFzeW5jKHQuZW50ZXIsIHQpKGRhdGEsIGxlYXZlUmVzdWx0KVxuICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV4dCBjb250YWluZXIuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgYWRkKGRhdGE6IElUcmFuc2l0aW9uRGF0YSwgd3JhcHBlcjogV3JhcHBlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIGRvbS5hZGRDb250YWluZXIoZGF0YS5uZXh0LmNvbnRhaW5lciwgd3JhcHBlcik7XG4gICAgaG9va3MuZG8oJ25leHRBZGRlZCcsIGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjdXJyZW50IGNvbnRhaW5lci5cbiAgICovXG4gIHB1YmxpYyBhc3luYyByZW1vdmUoZGF0YTogSVRyYW5zaXRpb25EYXRhKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZG9tLnJlbW92ZUNvbnRhaW5lcihkYXRhLmN1cnJlbnQuY29udGFpbmVyKTtcbiAgICBob29rcy5kbygnY3VycmVudFJlbW92ZWQnLCBkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzVHJhbnNpdGlvbkVycm9yKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xuICAgICAgLy8gRXJyb3JzIGZyb20gcmVxdWVzdFxuICAgICAgcmV0dXJuICEvVGltZW91dCBlcnJvcnxGZXRjaCBlcnJvci8udGVzdChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3Iuc3RhdHVzKSB7XG4gICAgICAvLyBFcnJvcnMgZnJvbSByZXF1ZXN0XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRG8gaG9va3MgKyBhc3luYyB0cmFuc2l0aW9uIG1ldGhvZHMuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9kb0FzeW5jSG9vayhcbiAgICBob29rOiBIb29rc1RyYW5zaXRpb24sXG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhLFxuICAgIHQ6IEhvb2tzVHJhbnNpdGlvbk1hcFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBob29rcy5kbyhob29rLCBkYXRhLCB0KTtcblxuICAgIHJldHVybiB0W2hvb2tdID8gcnVuQXN5bmModFtob29rXSwgdCkoZGF0YSkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL3ZpZXdzXG4gKiA8YnI+PGJyPlxuICogIyMgVmlld3MgbWFuYWdlci5cbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy92aWV3c1xuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBIb29rc1ZpZXcsIElWaWV3LCBJVmlld0RhdGEgfSBmcm9tICcuLi9kZWZzJztcbi8vIEhvb2tzXG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL2hvb2tzJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBydW5Bc3luYyB9IGZyb20gJy4uL3V0aWxzJztcbi8vIFR5cGVzXG50eXBlIEhvb2sgPSAoZGF0YTogSVZpZXdEYXRhKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5leHBvcnQgY2xhc3MgVmlld3Mge1xuICAvKipcbiAgICogQXZhaWxhYmxlIGhvb2sgbmFtZXMgZm9yIHZpZXdzLlxuICAgKi9cbiAgcHVibGljIG5hbWVzOiBIb29rc1ZpZXdbXSA9IFtcbiAgICAnYmVmb3JlTGVhdmUnLFxuICAgICdhZnRlckxlYXZlJyxcbiAgICAnYmVmb3JlRW50ZXInLFxuICAgICdhZnRlckVudGVyJyxcbiAgXTtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyZWQgdmlld3MgYnkgbmFtZXNwYWNlLlxuICAgKi9cbiAgcHVibGljIGJ5TmFtZXNwYWNlOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIEluaXQgdmlld3MuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2aWV3czogSVZpZXdbXSkge1xuICAgIGlmICh2aWV3cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBhZGQgY2hlY2tcbiAgICAvLyBmb3IgdmFsaWQgdmlld3M/IGNyaXRlcmlhPyAobmFtZXNwYWNlIHByb3BlcnR5LCBzdHJpbmcgPylcbiAgICAvLyBvciBkdXBsaWNhdGVcbiAgICB2aWV3cy5mb3JFYWNoKHZpZXcgPT4ge1xuICAgICAgdGhpcy5ieU5hbWVzcGFjZS5zZXQodmlldy5uYW1lc3BhY2UsIHZpZXcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgaG9va3NbbmFtZV0odGhpcy5fY3JlYXRlSG9vayhuYW1lKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBob29rIG1ldGhvZC5cbiAgICpcbiAgICogLSBnZXQgdmlldyBiYXNlZCBvbiBuYW1lc3BhY2VcbiAgICogLSBleGVjdXRlIGNhbGxiYWNrIHdpdGggdHJhbnNpdGlvbiBkYXRhXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVIb29rKG5hbWU6IEhvb2tzVmlldyk6IEhvb2sge1xuICAgIHJldHVybiBkYXRhID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZXNwYWNlIH0gPSBuYW1lLm1hdGNoKC9lbnRlci9pKSA/IGRhdGEubmV4dCA6IGRhdGEuY3VycmVudDtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmJ5TmFtZXNwYWNlLmdldChuYW1lc3BhY2UpO1xuXG4gICAgICAvLyBUT0RPOiBtYW5hZ2Ugc2VsZuKAplxuICAgICAgLy8gaWYgKHZpZXcgJiYgZGF0YS50cmlnZ2VyICE9PSAnc2VsZicpIHtcbiAgICAgIGlmICh2aWV3ICYmIHZpZXdbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHJ1bkFzeW5jKHZpZXdbbmFtZV0sIHZpZXcpKGRhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgfVxufVxuIiwiLy8gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyBwb2x5ZmlsbFxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvbWF0Y2hlcyNQb2x5ZmlsbFxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxuICAgIChFbGVtZW50IGFzIGFueSkucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vLyBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0IHBvbHlmaWxsXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbG9zZXN0I1BvbHlmaWxsXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QpIHtcbiAgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3Qoczogc3RyaW5nKSB7XG4gICAgbGV0IGVsID0gdGhpcztcblxuICAgIGRvIHtcbiAgICAgIGlmIChlbC5tYXRjaGVzKHMpKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cblxuICAgICAgZWwgPSAoZWwucGFyZW50RWxlbWVudCB8fCBlbC5wYXJlbnROb2RlKSBhcyBFbGVtZW50O1xuICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvcmUvc2NoZW1hc1xuICovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJU2NoZW1hUGFnZSB9IGZyb20gJy4uL2RlZnMnO1xuXG4vKipcbiAqIFNlZSBbW0lTY2hlbWFQYWdlXV1cbiAqL1xuZXhwb3J0IGNvbnN0IHNjaGVtYVBhZ2U6IElTY2hlbWFQYWdlID0ge1xuICBjb250YWluZXI6IG51bGwsXG4gIGh0bWw6ICcnLFxuICBuYW1lc3BhY2U6ICcnLFxuICB1cmw6IHtcbiAgICBoYXNoOiAnJyxcbiAgICBocmVmOiAnJyxcbiAgICBwYXRoOiAnJyxcbiAgICBwb3J0OiBudWxsLFxuICAgIHF1ZXJ5OiB7fSxcbiAgfSxcbn07XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlXG4gKiA8YnI+PGJyPlxuICogIyMgQmFyYmEgY29yZSBvYmplY3RcbiAqXG4gKiBNYWluIG1ldGhvZHM6XG4gKlxuICogLSBgLmluaXQoKWAgZm9yIGluaXRpYWxpemF0aW9uIHdpdGggb3B0aW9uc1xuICogLSBgLnVzZSgpYCBmb3IgcGx1Z2luc1xuICpcbiAqIEBtb2R1bGUgY29yZVxuICovXG5cbi8qKiovXG5cbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7XG4gIElCYXJiYU9wdGlvbnMsXG4gIElCYXJiYVBsdWdpbixcbiAgSWdub3JlT3B0aW9uLFxuICBJU2NoZW1hUGFnZSxcbiAgSVRyYW5zaXRpb25EYXRhLFxuICBJVHJhbnNpdGlvbk9uY2UsXG4gIElUcmFuc2l0aW9uUGFnZSxcbiAgTGluayxcbiAgTGlua0V2ZW50LFxuICBSZXF1ZXN0Q3VzdG9tRXJyb3IsXG4gIFJlcXVlc3RFcnJvck9yUmVzcG9uc2UsXG4gIFNjaGVtYUF0dHJpYnV0ZVZhbHVlcyxcbiAgVHJpZ2dlcixcbiAgV3JhcHBlcixcbn0gZnJvbSAnLi9kZWZzJztcbi8vIEhvb2tzXG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4vaG9va3MnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tICcuL21vZHVsZXMvQ2FjaGUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9tb2R1bGVzL0xvZ2dlcic7XG5pbXBvcnQgeyBQcmV2ZW50IH0gZnJvbSAnLi9tb2R1bGVzL1ByZXZlbnQnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbnMgfSBmcm9tICcuL21vZHVsZXMvVHJhbnNpdGlvbnMnO1xuaW1wb3J0IHsgVmlld3MgfSBmcm9tICcuL21vZHVsZXMvVmlld3MnO1xuLy8gUG9seWZpbGxzXG5pbXBvcnQgJy4vcG9seWZpbGxzJztcbi8vIFNjaGVtYXNcbmltcG9ydCB7IHNjaGVtYUF0dHJpYnV0ZSB9IGZyb20gJy4vc2NoZW1hcy9hdHRyaWJ1dGUnO1xuaW1wb3J0IHsgc2NoZW1hUGFnZSB9IGZyb20gJy4vc2NoZW1hcy9wYWdlJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBkb20sIGhlbHBlcnMsIGhpc3RvcnksIHJlcXVlc3QsIHVybCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgQ29yZSB7XG4gIC8qKlxuICAgKiBWZXJzaW9uLlxuICAgKi9cbiAgcHVibGljIHZlcnNpb246IHN0cmluZyA9IHZlcnNpb247XG4gIC8qKlxuICAgKiBTY2hlbWFzLlxuICAgKi9cbiAgcHVibGljIHNjaGVtYVBhZ2U6IElTY2hlbWFQYWdlID0gc2NoZW1hUGFnZTtcbiAgLyoqXG4gICAqIExvZ2dlciBjbGFzcywgYWxsb3dzIHBsdWdpbnMgdG8gY3JlYXRlIExvZ2dlci5cbiAgICovXG4gIHB1YmxpYyBMb2dnZXI6IHR5cGVvZiBMb2dnZXIgPSBMb2dnZXI7XG4gIC8qKlxuICAgKiBCYXJiYSBsb2dnZXIuXG4gICAqL1xuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCdAYmFyYmEvY29yZScpO1xuICAvKipcbiAgICogUGx1Z2lucy5cbiAgICovXG4gIHB1YmxpYyBwbHVnaW5zOiBBcnJheTxJQmFyYmFQbHVnaW48YW55Pj4gPSBbXTtcbiAgLyoqXG4gICAqIE9wdGlvbnNcbiAgICovXG4gIHB1YmxpYyB0aW1lb3V0OiBudW1iZXI7XG4gIHB1YmxpYyBjYWNoZUlnbm9yZTogSWdub3JlT3B0aW9uO1xuICBwdWJsaWMgcHJlZmV0Y2hJZ25vcmU6IElnbm9yZU9wdGlvbjtcbiAgcHVibGljIHByZXZlbnRSdW5uaW5nOiBib29sZWFuO1xuICAvKipcbiAgICogSG9va3NcbiAgICovXG4gIHB1YmxpYyBob29rcyA9IGhvb2tzO1xuICAvKipcbiAgICogTW9kdWxlcy5cbiAgICovXG4gIC8vIHB1YmxpYyBoaXN0b3J5OiBIaXN0b3J5O1xuICBwdWJsaWMgY2FjaGU6IENhY2hlO1xuICBwdWJsaWMgcHJldmVudDogUHJldmVudDtcbiAgcHVibGljIHRyYW5zaXRpb25zOiBUcmFuc2l0aW9ucztcbiAgcHVibGljIHZpZXdzOiBWaWV3cztcbiAgLyoqXG4gICAqIFV0aWxzLlxuICAgKi9cbiAgcHVibGljIGRvbSA9IGRvbTtcbiAgcHVibGljIGhlbHBlcnMgPSBoZWxwZXJzO1xuICBwdWJsaWMgaGlzdG9yeSA9IGhpc3Rvcnk7XG4gIHB1YmxpYyByZXF1ZXN0ID0gcmVxdWVzdDtcbiAgcHVibGljIHVybCA9IHVybDtcblxuICBwcml2YXRlIF9kYXRhOiBJVHJhbnNpdGlvbkRhdGE7XG4gIHByaXZhdGUgX3JlcXVlc3RDdXN0b21FcnJvcjogUmVxdWVzdEN1c3RvbUVycm9yO1xuICBwcml2YXRlIF93cmFwcGVyOiBXcmFwcGVyO1xuXG4gIC8qKlxuICAgKiAjIyMgSW5pdCBwbHVnaW4gd2l0aCBvcHRpb25zLlxuICAgKlxuICAgKiBTZWUgW1tJQmFyYmFQbHVnaW5dXSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgcHVibGljIHVzZTxUPihwbHVnaW46IElCYXJiYVBsdWdpbjxUPiwgb3B0aW9ucz86IFQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnN0YWxsZWRQbHVnaW5zID0gdGhpcy5wbHVnaW5zO1xuXG4gICAgLy8gUGx1Z2luIGluc3RhbGxhdGlvblxuICAgIGlmIChpbnN0YWxsZWRQbHVnaW5zLmluZGV4T2YocGx1Z2luKSA+IC0xKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKGBQbHVnaW4gWyR7cGx1Z2luLm5hbWV9XSBhbHJlYWR5IGluc3RhbGxlZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oYFBsdWdpbiBbJHtwbHVnaW4ubmFtZX1dIGhhcyBubyBcImluc3RhbGxcIiBtZXRob2QuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwbHVnaW4uaW5zdGFsbCh0aGlzLCBvcHRpb25zKTtcbiAgICBpbnN0YWxsZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgSW5pdCBiYXJiYSB3aXRoIG9wdGlvbnMuXG4gICAqXG4gICAqIFNlZSBbW0lCYXJiYU9wdGlvbnNdXSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBhcmU6XG4gICAqXG4gICAqIC0gdHJhbnNpdGlvbnM6IGBbXWBcbiAgICogLSB2aWV3czogYFtdYFxuICAgKiAtIHNjaGVtYTogW1tTY2hlbWFBdHRyaWJ1dGVdXVxuICAgKiAtIHRpbWVvdXQ6IGAyZTNgXG4gICAqIC0gY2FjaGVJZ25vcmU6IGBmYWxzZWBcbiAgICogLSBwcmVmZXRjaElnbm9yZTogYGZhbHNlYFxuICAgKiAtIHByZXZlbnRSdW5uaW5nOiBgZmFsc2VgXG4gICAqIC0gcHJldmVudDogYG51bGxgLFxuICAgKiAtIGRlYnVnOiBgZmFsc2VgXG4gICAqIC0gbG9nTGV2ZWw6IGAnZGVidWcnYFxuICAgKi9cbiAgcHVibGljIGluaXQoXG4gICAgLyoqIEBpZ25vcmUgKi8ge1xuICAgICAgdHJhbnNpdGlvbnMgPSBbXSxcbiAgICAgIHZpZXdzID0gW10sXG4gICAgICBzY2hlbWEgPSBzY2hlbWFBdHRyaWJ1dGUsXG4gICAgICByZXF1ZXN0RXJyb3IsXG4gICAgICB0aW1lb3V0ID0gMmUzLFxuICAgICAgY2FjaGVJZ25vcmUgPSBmYWxzZSxcbiAgICAgIHByZWZldGNoSWdub3JlID0gZmFsc2UsXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcHJldmVudFJ1bm5pbmcgPSBmYWxzZSxcbiAgICAgIHByZXZlbnQ6IHByZXZlbnRDdXN0b20gPSBudWxsLFxuICAgICAgZGVidWcgPSBmYWxzZSxcbiAgICAgIGxvZ0xldmVsID0gJ29mZicsXG4gICAgfTogSUJhcmJhT3B0aW9ucyA9IHt9XG4gICkge1xuICAgIC8vIDAuIFNldCBsb2dnZXIgbGV2ZWwgYW5kIHByaW50IHZlcnNpb25cbiAgICBMb2dnZXIuc2V0TGV2ZWwoZGVidWcgPT09IHRydWUgPyAnZGVidWcnIDogbG9nTGV2ZWwpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8odGhpcy52ZXJzaW9uKTtcblxuICAgIC8vIDEuIE1hbmFnZSBvcHRpb25zXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgY29uc3QgYXR0ciA9IGsgYXMgU2NoZW1hQXR0cmlidXRlVmFsdWVzO1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHNjaGVtYUF0dHJpYnV0ZVthdHRyXSkge1xuICAgICAgICBzY2hlbWFBdHRyaWJ1dGVbYXR0cl0gPSBzY2hlbWFbYXR0cl07XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fcmVxdWVzdEN1c3RvbUVycm9yID0gcmVxdWVzdEVycm9yO1xuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgdGhpcy5jYWNoZUlnbm9yZSA9IGNhY2hlSWdub3JlO1xuICAgIHRoaXMucHJlZmV0Y2hJZ25vcmUgPSBwcmVmZXRjaElnbm9yZTtcbiAgICB0aGlzLnByZXZlbnRSdW5uaW5nID0gcHJldmVudFJ1bm5pbmc7XG5cbiAgICAvLyAyLiBHZXQgYW5kIGNoZWNrIHdyYXBwZXJcbiAgICB0aGlzLl93cmFwcGVyID0gdGhpcy5kb20uZ2V0V3JhcHBlcigpO1xuICAgIGlmICghdGhpcy5fd3JhcHBlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQGJhcmJhL2NvcmVdIE5vIEJhcmJhIHdyYXBwZXIgZm91bmQnKTtcbiAgICB9XG4gICAgdGhpcy5fd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTsgLy8gQTExeVxuXG4gICAgLy8gMy4gSW5pdCBwYWdlcyAoZ2V0IFwiY3VycmVudFwiIGRhdGEpXG4gICAgdGhpcy5fcmVzZXREYXRhKCk7XG5cbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuZGF0YTtcblxuICAgIGlmICghY3VycmVudC5jb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW0BiYXJiYS9jb3JlXSBObyBCYXJiYSBjb250YWluZXIgZm91bmQnKTtcbiAgICB9XG5cbiAgICAvLyA0LiBJbml0IG90aGVyIG1vZHVsZXNcbiAgICB0aGlzLmNhY2hlID0gbmV3IENhY2hlKGNhY2hlSWdub3JlKTtcbiAgICB0aGlzLnByZXZlbnQgPSBuZXcgUHJldmVudChwcmVmZXRjaElnbm9yZSk7XG4gICAgdGhpcy50cmFuc2l0aW9ucyA9IG5ldyBUcmFuc2l0aW9ucyh0cmFuc2l0aW9ucyk7XG4gICAgdGhpcy52aWV3cyA9IG5ldyBWaWV3cyh2aWV3cyk7XG5cbiAgICAvLyBBZGQgcHJldmVudCBjdXN0b21cbiAgICBpZiAocHJldmVudEN1c3RvbSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBwcmV2ZW50Q3VzdG9tICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0BiYXJiYS9jb3JlXSBQcmV2ZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJldmVudC5hZGQoJ3ByZXZlbnRDdXN0b20nLCBwcmV2ZW50Q3VzdG9tKTtcbiAgICB9XG5cbiAgICAvLyA1LiBVc2UgXCJjdXJyZW50XCIgZGF0YVxuICAgIC8vIEluaXQgaGlzdG9yeVxuICAgIHRoaXMuaGlzdG9yeS5pbml0KGN1cnJlbnQudXJsLmhyZWYsIGN1cnJlbnQubmFtZXNwYWNlKTtcbiAgICAvLyBBZGQgdG8gY2FjaGVcbiAgICAvLyBUT0RPOiBkbyBub3QgY2FjaGUgcmVuZGVyZXIgSFRNTCwgb25seSByZXF1ZXN0IHJlc3VsdHPigKZcbiAgICAvLyB0aGlzLmNhY2hlLnNldChjdXJyZW50LnVybC5ocmVmLCBQcm9taXNlLnJlc29sdmUoY3VycmVudC5odG1sKSwgJ2luaXQnKTtcblxuICAgIC8vIDYuIEJpbmQgY29udGV4dFxuICAgIHRoaXMuX29uTGlua0VudGVyID0gdGhpcy5fb25MaW5rRW50ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkxpbmtDbGljayA9IHRoaXMuX29uTGlua0NsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25TdGF0ZUNoYW5nZSA9IHRoaXMuX29uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9iaW5kKCk7XG5cbiAgICAvLyA3LiBJbml0IHBsdWdpbnNcbiAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaChwbHVnaW4gPT4gcGx1Z2luLmluaXQoKSk7XG5cbiAgICAvLyA4LiBCYXJiYSByZWFkeVxuICAgIC8vIFNldCBuZXh0ICsgdHJpZ2dlciBmb3Igb25jZSBhbmQgYGJlZm9yZUVudGVyYC9gYWZ0ZXJFbnRlcmAgdmlldyBvbiBwYWdlIGxvYWQuXG4gICAgY29uc3Qgb25jZURhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICBvbmNlRGF0YS50cmlnZ2VyID0gJ2JhcmJhJztcbiAgICBvbmNlRGF0YS5uZXh0ID0gb25jZURhdGEuY3VycmVudDtcbiAgICBvbmNlRGF0YS5jdXJyZW50ID0geyAuLi50aGlzLnNjaGVtYVBhZ2UgfTtcbiAgICB0aGlzLmhvb2tzLmRvKCdyZWFkeScsIG9uY2VEYXRhKTtcblxuICAgIC8vIDkuIEZpbmFsbHksIGRvIG9uY2XigKZcbiAgICB0aGlzLm9uY2Uob25jZURhdGEpO1xuXG4gICAgLy8gQ2xlYW4gZGF0YSBmb3IgZmlyc3QgYmFyYmEgdHJhbnNpdGlvbuKAplxuICAgIHRoaXMuX3Jlc2V0RGF0YSgpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzZXREYXRhKCk7XG4gICAgdGhpcy5fdW5iaW5kKCk7XG4gICAgdGhpcy5oaXN0b3J5LmNsZWFyKCk7XG4gICAgdGhpcy5ob29rcy5jbGVhcigpO1xuICAgIHRoaXMucGx1Z2lucyA9IFtdO1xuICB9XG5cbiAgZ2V0IGRhdGEoKTogSVRyYW5zaXRpb25EYXRhIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCB3cmFwcGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fd3JhcHBlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgRm9yY2UgYSBwYWdlIGNoYW5nZSB3aXRob3V0IEJhcmJhIHRyYW5zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgZm9yY2UoaHJlZjogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gREVWXG4gICAgLy8gQ2FuIGJlIHVzZWQgd2FpdGluZyBhbmltYXRpb24gY2FuY2VsbGF0aW9uIG1hbmFnZW1lbnTigKZcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGhyZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBHbyBmb3IgYSBCYXJiYSB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBNYW5hZ2UgXCJzZWxmIHBhZ2VcIiBocmVmOlxuICAgKlxuICAgKiAtIGlmIHNhbWUgdXJsIGFuZCBubyBzZWxmIHRyYW5zaXRpb24sIGtlZXAgZGVmYXVsdCBiZWhhdmlvclxuICAgKiAgIC0gbGluazogcmVsb2FkIHRoZSBwYWdlXG4gICAqICAgLSBhbmNob3I6IHNjcm9sbCB0b1xuICAgKiAtIGlmIHNhbWUgdXJsIHdpdGggc2VsZiB0cmFuc2l0aW9uLCB1c2UgaXRcbiAgICogLSB0aGVuIHN0YXJ0IGEgcGFnZSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIGdvKFxuICAgIGhyZWY6IHN0cmluZyxcbiAgICB0cmlnZ2VyOiBUcmlnZ2VyID0gJ2JhcmJhJyxcbiAgICBlPzogTGlua0V2ZW50IHwgUG9wU3RhdGVFdmVudFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBJZiBhbmltYXRpb24gcnVubmluZywgZm9yY2UgcmVsb2FkXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbnMuaXNSdW5uaW5nKSB7XG4gICAgICB0aGlzLmZvcmNlKGhyZWYpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNlbGYgPSBmYWxzZTtcblxuICAgIC8vIENoZWNrIHByZXZlbnQgc2FtZVVSTCBhZ2FpbnN0IGN1cnJlbnQgaGlzdG9yeVxuICAgIC8vICsgc3RhdGUgY2hlY2tcbiAgICAvLyArIHVwZGF0ZSB0cmlnZ2VyIHdpdGggZGlyZWN0aW9uXG4gICAgaWYgKHRyaWdnZXIgPT09ICdwb3BzdGF0ZScpIHtcbiAgICAgIHNlbGYgPVxuICAgICAgICB0aGlzLmhpc3RvcnkuY3VycmVudCAmJlxuICAgICAgICB0aGlzLnVybC5nZXRQYXRoKHRoaXMuaGlzdG9yeS5jdXJyZW50LnVybCkgPT09IHRoaXMudXJsLmdldFBhdGgoaHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYgPSB0aGlzLnByZXZlbnQucnVuKCdzYW1lVXJsJywgbnVsbCwgbnVsbCwgaHJlZik7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYgJiYgIXRoaXMudHJhbnNpdGlvbnMuaGFzU2VsZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyaWdnZXIgPSB0aGlzLmhpc3RvcnkuY2hhbmdlKGhyZWYsIHRyaWdnZXIsIGUpO1xuXG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFnZShocmVmLCB0cmlnZ2VyLCBzZWxmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgU3RhcnQgYW4gXCJvbmNlXCIgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogSWYgc29tZSByZWdpc3RlcmVkIFwib25jZVwiIHRyYW5zaXRpb24sXG4gICAqIGdldCB0aGUgXCJyZXNvbHZlZFwiIHRyYW5zaXRpb24gZnJvbSB0aGUgc3RvcmUgYW5kIHN0YXJ0IGl0LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uY2UocmVhZHlEYXRhOiBJVHJhbnNpdGlvbkRhdGEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmhvb2tzLmRvKCdiZWZvcmVFbnRlcicsIHJlYWR5RGF0YSk7XG5cbiAgICAvLyBDaGVjayBpZiBvbmNlIHRyYW5zaXRpb25cbiAgICBpZiAodGhpcy50cmFuc2l0aW9ucy5oYXNPbmNlKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9ucy5nZXQocmVhZHlEYXRhLCB7XG4gICAgICAgIG9uY2U6IHRydWUsXG4gICAgICB9KSBhcyBJVHJhbnNpdGlvbk9uY2U7XG5cbiAgICAgIGF3YWl0IHRoaXMudHJhbnNpdGlvbnMuZG9PbmNlKHsgdHJhbnNpdGlvbiwgZGF0YTogcmVhZHlEYXRhIH0pO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuaG9va3MuZG8oJ2FmdGVyRW50ZXInLCByZWFkeURhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBTdGFydCBhIFwicGFnZVwiIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIDEuIElmIG5vIHJ1bm5pbmcgdHJhbnNpdGlvbiwgdXBkYXRlcyBkYXRhIHdpdGggZnVsbCBVUkwgcHJvcGVydGllcyBhbmQgdHJpZ2dlci5cbiAgICogMi4gR2V0IHBhZ2UgZnJvbSBjYWNoZSBvciBpbml0IHJlcXVlc3QuXG4gICAqIDMuIFdhaXQgaWYgc29tZSB0cmFuc2l0aW9ucyBuZWVkIFwibmV4dFwiIGRhdGEgKGBzeW5jOiB0cnVlYCwgYHRvOiDigKZgKS5cbiAgICogNC4gTWFuYWdlIHRoZSBoaXN0b3J5LCBkZXBlbmRpbmcgb24gdHJpZ2dlci5cbiAgICogNS4gR2V0IFwiZGF0YVwiIGFuZCB0cmlnZ2VyIFwiZ29cIiBob29rLlxuICAgKiA2LiBHZXQgdGhlIFwicmVzb2x2ZWRcIiB0cmFuc2l0aW9uIGZyb20gdGhlIHN0b3JlIGFuZCBzdGFydCBpdC5cbiAgICogNy4gVXBkYXRlIHRpdGxlIGFuZCByZXNldCBkYXRhIChjdXJyZW50LCBuZXh0ID0gdW5kZWZpbmVkKS5cbiAgICpcbiAgICogPiBJZiBcInNlbGZcIiwgdXNlIHRoZSBcInNlbGZcIiB0cmFuc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcGFnZShcbiAgICBocmVmOiBzdHJpbmcsXG4gICAgdHJpZ2dlcjogVHJpZ2dlcixcbiAgICBzZWxmOiBib29sZWFuXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuZGF0YS5uZXh0LnVybCA9IHtcbiAgICAgIGhyZWYsXG4gICAgICAuLi50aGlzLnVybC5wYXJzZShocmVmKSxcbiAgICB9O1xuICAgIHRoaXMuZGF0YS50cmlnZ2VyID0gdHJpZ2dlcjtcblxuICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmNhY2hlLmhhcyhocmVmKVxuICAgICAgPyB0aGlzLmNhY2hlLnVwZGF0ZShocmVmLCB7IGFjdGlvbjogJ2NsaWNrJyB9KS5yZXF1ZXN0XG4gICAgICA6IHRoaXMuY2FjaGUuc2V0KFxuICAgICAgICAgIGhyZWYsXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KFxuICAgICAgICAgICAgaHJlZixcbiAgICAgICAgICAgIHRoaXMudGltZW91dCxcbiAgICAgICAgICAgIHRoaXMub25SZXF1ZXN0RXJyb3IuYmluZCh0aGlzLCB0cmlnZ2VyKVxuICAgICAgICAgICksXG4gICAgICAgICAgJ2NsaWNrJ1xuICAgICAgICApLnJlcXVlc3Q7XG5cbiAgICAvLyBOZWVkIHRvIHdhaXQgYmVmb3JlIGdldHRpbmcgdGhlIHJpZ2h0IHRyYW5zaXRpb25cbiAgICBpZiAodGhpcy50cmFuc2l0aW9ucy5zaG91bGRXYWl0KSB7XG4gICAgICBhd2FpdCBoZWxwZXJzLnVwZGF0ZShwYWdlLCB0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAvLyBIb29rOiBiZXR3ZWVuIHRyaWdnZXIgYW5kIHRyYW5zaXRpb25cbiAgICAvLyBDYW4gYmUgdXNlZCB0byByZXNvbHZlIFwicm91dGVcIuKAplxuICAgIGF3YWl0IHRoaXMuaG9va3MuZG8oJ3BhZ2UnLCBkYXRhKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9ucy5nZXQoZGF0YSwge1xuICAgICAgICBvbmNlOiBmYWxzZSxcbiAgICAgICAgc2VsZixcbiAgICAgIH0pIGFzIElUcmFuc2l0aW9uUGFnZTtcblxuICAgICAgYXdhaXQgdGhpcy50cmFuc2l0aW9ucy5kb1BhZ2Uoe1xuICAgICAgICBkYXRhLFxuICAgICAgICBwYWdlLFxuICAgICAgICB0cmFuc2l0aW9uLFxuICAgICAgICB3cmFwcGVyOiB0aGlzLl93cmFwcGVyLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3Jlc2V0RGF0YSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBTb21ldGhpbmcgd2VudCB3cm9uZyAocmVqZWN0ZWQgcHJvbWlzZSwgZXJyb3IsIDQwNCwgNTA1LCBvdGhlcuKApilcbiAgICAgIC8vIFRPRE86IG1hbmFnZSAvIHVzZSBjYXNlcyBmb3IgY2FuY2VsbGF0aW9uXG4gICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBjYW5jZWxsZWQnKTtcblxuICAgICAgLy8gSWYgdHJhbnNpdGlvbiBlcnJvciBhbmQgbm8gZGVidWcgbW9kZSwgZm9yY2UgcmVsb2FkIHBhZ2UuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKExvZ2dlci5nZXRMZXZlbCgpID09PSAwKSB7XG4gICAgICAgIHRoaXMuZm9yY2UoZGF0YS5jdXJyZW50LnVybC5ocmVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBhIHJlcXVlc3QgZXJyb3Igb2NjdXJzLlxuICAgKlxuICAgKiBBbGxvdyB0aGUgdXNlciB0byBtYW5hZ2UgcmVxdWVzdCBlcnJvci4gKEUuZzogNDA0KVxuICAgKi9cbiAgcHVibGljIG9uUmVxdWVzdEVycm9yKHRyaWdnZXI6IFRyaWdnZXIsIC4uLmFyZ3M6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8vIENhbmNlbCB0cmFuc2l0aW9uIHN0YXR1c1xuICAgIHRoaXMudHJhbnNpdGlvbnMuaXNSdW5uaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBbaHJlZiwgcmVzcG9uc2VdOiBbc3RyaW5nLCBSZXF1ZXN0RXJyb3JPclJlc3BvbnNlXSA9IGFyZ3M7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5jYWNoZS5nZXRBY3Rpb24oaHJlZik7XG4gICAgdGhpcy5jYWNoZS5kZWxldGUoaHJlZik7XG5cbiAgICAvLyBDdXN0b20gcmVxdWVzdEVycm9yIHJldHVybmluZyBmYWxzZSB3aWxsIHJldHVybiBoZXJlLlxuICAgIGlmIChcbiAgICAgIHRoaXMuX3JlcXVlc3RDdXN0b21FcnJvciAmJlxuICAgICAgdGhpcy5fcmVxdWVzdEN1c3RvbUVycm9yKHRyaWdnZXIsIGFjdGlvbiwgaHJlZiwgcmVzcG9uc2UpID09PSBmYWxzZVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIHBhZ2UgY2hhbmdlXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2NsaWNrJykge1xuICAgICAgdGhpcy5mb3JjZShocmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2dyYW1tYXRpY2FsbHkgcHJlZmV0Y2hcbiAgICovXG4gIHB1YmxpYyBwcmVmZXRjaChocmVmOiBzdHJpbmcpIHtcbiAgICAvLyBBbHJlYWR5IGluIGNhY2hlXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy5jYWNoZS5oYXMoaHJlZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNhY2hlLnNldChcbiAgICAgIGhyZWYsXG4gICAgICB0aGlzLnJlcXVlc3QoXG4gICAgICAgIGhyZWYsXG4gICAgICAgIHRoaXMudGltZW91dCxcbiAgICAgICAgdGhpcy5vblJlcXVlc3RFcnJvci5iaW5kKHRoaXMsICdiYXJiYScpXG4gICAgICApLmNhdGNoKChlcnJvcjogUmVxdWVzdEVycm9yT3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgICdwcmVmZXRjaCdcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBfYmluZCgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLnByZWZldGNoSWdub3JlICE9PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9vbkxpbmtFbnRlcik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25MaW5rRW50ZXIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uTGlua0NsaWNrKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9vblN0YXRlQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICovXG4gIHByaXZhdGUgX3VuYmluZCgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLnByZWZldGNoSWdub3JlICE9PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9vbkxpbmtFbnRlcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25MaW5rRW50ZXIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uTGlua0NsaWNrKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9vblN0YXRlQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgZWxlbWVudCBpcyBlbnRlcmVkLlxuICAgKlxuICAgKiBHZXQgdmFsaWQgbGluayBlbGVtZW50LlxuICAgKiBDYWNoZSBVUkwgaWYgbmVlZGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfb25MaW5rRW50ZXIoZTogTGlua0V2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgbGluayA9IHRoaXMuX2dldExpbmtFbGVtZW50KGUpO1xuXG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaHJlZiA9IHRoaXMuZG9tLmdldEhyZWYobGluayk7XG5cbiAgICBpZiAodGhpcy5wcmV2ZW50LmNoZWNrSHJlZihocmVmKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFscmVhZHkgaW4gY2FjaGVcbiAgICBpZiAodGhpcy5jYWNoZS5oYXMoaHJlZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNhY2hlLnNldChcbiAgICAgIGhyZWYsXG4gICAgICB0aGlzLnJlcXVlc3QoXG4gICAgICAgIGhyZWYsXG4gICAgICAgIHRoaXMudGltZW91dCxcbiAgICAgICAgdGhpcy5vblJlcXVlc3RFcnJvci5iaW5kKHRoaXMsIGxpbmspXG4gICAgICApLmNhdGNoKChlcnJvcjogUmVxdWVzdEVycm9yT3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgICdlbnRlcidcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYW4gZWxlbWVudCBpcyBjbGlja2VkLlxuICAgKlxuICAgKiBHZXQgdmFsaWQgbGluayBlbGVtZW50LlxuICAgKiBQcmV2ZW50IHNhbWUgVVJMLlxuICAgKiBHbyBmb3IgYSBCYXJiYSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfb25MaW5rQ2xpY2soZTogTGlua0V2ZW50KTogdm9pZCB7XG4gICAgLy8gVGhpcyB1c2UgYHByZXZlbnQuY2hlY2tMaW5rYCB1bmRlciB0aGUgaG9vZCB0byBnZXQgZWxpZ2libGUgbGluay5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5fZ2V0TGlua0VsZW1lbnQoZSk7XG5cbiAgICBpZiAoIWxpbmspIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50cmFuc2l0aW9ucy5pc1J1bm5pbmcgJiYgdGhpcy5wcmV2ZW50UnVubmluZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ28odGhpcy5kb20uZ2V0SHJlZihsaW5rKSwgbGluaywgZSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBIaXN0b3J5IHN0YXRlIGNoYW5nZXMuXG4gICAqXG4gICAqIEdldCBcImhyZWZcIiBmcm9tIFVSTFxuICAgKiBHbyBmb3IgYSBCYXJiYSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfb25TdGF0ZUNoYW5nZShlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5nbyh0aGlzLnVybC5nZXRIcmVmKCksICdwb3BzdGF0ZScsIGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHZhbGlkIGxpbmsgYW5jZXN0b3IuXG4gICAqXG4gICAqIENoZWNrIGZvciBhIFwiaHJlZlwiIGF0dHJpYnV0ZS5cbiAgICogVGhlbiBjaGVjayBpZiBlbGlnaWJsZSBmb3IgQmFyYmEuXG4gICAqL1xuICBwcml2YXRlIF9nZXRMaW5rRWxlbWVudChlOiBMaW5rRXZlbnQpOiBMaW5rIHtcbiAgICBsZXQgZWwgPSBlLnRhcmdldCBhcyBMaW5rO1xuXG4gICAgd2hpbGUgKGVsICYmICF0aGlzLmRvbS5nZXRIcmVmKGVsKSkge1xuICAgICAgZWwgPSAoZWwgYXMgSFRNTEVsZW1lbnQpLnBhcmVudE5vZGUgYXMgTGluaztcbiAgICB9XG5cbiAgICAvLyBDaGVjayBwcmV2ZW50XG4gICAgaWYgKCFlbCB8fCB0aGlzLnByZXZlbnQuY2hlY2tMaW5rKGVsLCBlLCB0aGlzLmRvbS5nZXRIcmVmKGVsKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgcGFnZXMgZGF0YS5cbiAgICpcbiAgICogU2V0IFwiY3VycmVudFwiIGFuZCB1bnNldCBcIm5leHRcIi5cbiAgICovXG4gIHByaXZhdGUgX3Jlc2V0RGF0YSgpIHtcbiAgICBjb25zdCBocmVmID0gdGhpcy51cmwuZ2V0SHJlZigpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgICBjb250YWluZXI6IHRoaXMuZG9tLmdldENvbnRhaW5lcigpLFxuICAgICAgaHRtbDogdGhpcy5kb20uZ2V0SHRtbCgpLFxuICAgICAgbmFtZXNwYWNlOiB0aGlzLmRvbS5nZXROYW1lc3BhY2UoKSxcbiAgICAgIHVybDoge1xuICAgICAgICBocmVmLFxuICAgICAgICAuLi50aGlzLnVybC5wYXJzZShocmVmKSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuX2RhdGEgPSB7XG4gICAgICBjdXJyZW50LFxuICAgICAgbmV4dDogeyAuLi50aGlzLnNjaGVtYVBhZ2UgfSxcbiAgICAgIHRyaWdnZXI6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgdGhpcy5ob29rcy5kbygncmVzZXQnLCB0aGlzLmRhdGEpO1xuICB9XG59XG5cbmNvbnN0IGNvcmUgPSBuZXcgQ29yZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiLypcbiAqIGFuaW1lLmpzIHYzLjIuMVxuICogKGMpIDIwMjAgSnVsaWFuIEdhcm5pZXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogYW5pbWVqcy5jb21cbiAqL1xuXG4vLyBEZWZhdWx0c1xuXG52YXIgZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MgPSB7XG4gIHVwZGF0ZTogbnVsbCxcbiAgYmVnaW46IG51bGwsXG4gIGxvb3BCZWdpbjogbnVsbCxcbiAgY2hhbmdlQmVnaW46IG51bGwsXG4gIGNoYW5nZTogbnVsbCxcbiAgY2hhbmdlQ29tcGxldGU6IG51bGwsXG4gIGxvb3BDb21wbGV0ZTogbnVsbCxcbiAgY29tcGxldGU6IG51bGwsXG4gIGxvb3A6IDEsXG4gIGRpcmVjdGlvbjogJ25vcm1hbCcsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICB0aW1lbGluZU9mZnNldDogMFxufTtcblxudmFyIGRlZmF1bHRUd2VlblNldHRpbmdzID0ge1xuICBkdXJhdGlvbjogMTAwMCxcbiAgZGVsYXk6IDAsXG4gIGVuZERlbGF5OiAwLFxuICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxLCAuNSknLFxuICByb3VuZDogMFxufTtcblxudmFyIHZhbGlkVHJhbnNmb3JtcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCAncm90YXRlJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXcnLCAnc2tld1gnLCAnc2tld1knLCAncGVyc3BlY3RpdmUnLCAnbWF0cml4JywgJ21hdHJpeDNkJ107XG5cbi8vIENhY2hpbmdcblxudmFyIGNhY2hlID0ge1xuICBDU1M6IHt9LFxuICBzcHJpbmdzOiB7fVxufTtcblxuLy8gVXRpbHNcblxuZnVuY3Rpb24gbWluTWF4KHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nQ29udGFpbnMoc3RyLCB0ZXh0KSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZih0ZXh0KSA+IC0xO1xufVxuXG5mdW5jdGlvbiBhcHBseUFyZ3VtZW50cyhmdW5jLCBhcmdzKSB7XG4gIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG52YXIgaXMgPSB7XG4gIGFycjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7IH0sXG4gIG9iajogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHN0cmluZ0NvbnRhaW5zKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSwgJ09iamVjdCcpOyB9LFxuICBwdGg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKTsgfSxcbiAgc3ZnOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7IH0sXG4gIGlucDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50OyB9LFxuICBkb206IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKTsgfSxcbiAgc3RyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnOyB9LFxuICBmbmM6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgdW5kOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnOyB9LFxuICBuaWw6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbDsgfSxcbiAgaGV4OiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSk7IH0sXG4gIHJnYjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC9ecmdiLy50ZXN0KGEpOyB9LFxuICBoc2w6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvXmhzbC8udGVzdChhKTsgfSxcbiAgY29sOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKTsgfSxcbiAga2V5OiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcyc7IH0sXG59O1xuXG4vLyBFYXNpbmdzXG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpIHtcbiAgdmFyIG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyaW5nKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHBhcnNlRmxvYXQocCk7IH0pIDogW107XG59XG5cbi8vIFNwcmluZyBzb2x2ZXIgaW5zcGlyZWQgYnkgV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcblxuZnVuY3Rpb24gc3ByaW5nKHN0cmluZywgZHVyYXRpb24pIHtcblxuICB2YXIgcGFyYW1zID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZyk7XG4gIHZhciBtYXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMF0pID8gMSA6IHBhcmFtc1swXSwgLjEsIDEwMCk7XG4gIHZhciBzdGlmZm5lc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1sxXSkgPyAxMDAgOiBwYXJhbXNbMV0sIC4xLCAxMDApO1xuICB2YXIgZGFtcGluZyA9IG1pbk1heChpcy51bmQocGFyYW1zWzJdKSA/IDEwIDogcGFyYW1zWzJdLCAuMSwgMTAwKTtcbiAgdmFyIHZlbG9jaXR5ID0gIG1pbk1heChpcy51bmQocGFyYW1zWzNdKSA/IDAgOiBwYXJhbXNbM10sIC4xLCAxMDApO1xuICB2YXIgdzAgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XG4gIHZhciB6ZXRhID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcbiAgdmFyIHdkID0gemV0YSA8IDEgPyB3MCAqIE1hdGguc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcbiAgdmFyIGEgPSAxO1xuICB2YXIgYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12ZWxvY2l0eSkgLyB3ZCA6IC12ZWxvY2l0eSArIHcwO1xuXG4gIGZ1bmN0aW9uIHNvbHZlcih0KSB7XG4gICAgdmFyIHByb2dyZXNzID0gZHVyYXRpb24gPyAoZHVyYXRpb24gKiB0KSAvIDEwMDAgOiB0O1xuICAgIGlmICh6ZXRhIDwgMSkge1xuICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB6ZXRhICogdzApICogKGEgKiBNYXRoLmNvcyh3ZCAqIHByb2dyZXNzKSArIGIgKiBNYXRoLnNpbih3ZCAqIHByb2dyZXNzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzID0gKGEgKyBiICogcHJvZ3Jlc3MpICogTWF0aC5leHAoLXByb2dyZXNzICogdzApO1xuICAgIH1cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7IHJldHVybiB0OyB9XG4gICAgcmV0dXJuIDEgLSBwcm9ncmVzcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5zcHJpbmdzW3N0cmluZ107XG4gICAgaWYgKGNhY2hlZCkgeyByZXR1cm4gY2FjaGVkOyB9XG4gICAgdmFyIGZyYW1lID0gMS82O1xuICAgIHZhciBlbGFwc2VkID0gMDtcbiAgICB2YXIgcmVzdCA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgZWxhcHNlZCArPSBmcmFtZTtcbiAgICAgIGlmIChzb2x2ZXIoZWxhcHNlZCkgPT09IDEpIHtcbiAgICAgICAgcmVzdCsrO1xuICAgICAgICBpZiAocmVzdCA+PSAxNikgeyBicmVhazsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBkdXJhdGlvbiA9IGVsYXBzZWQgKiBmcmFtZSAqIDEwMDA7XG4gICAgY2FjaGUuc3ByaW5nc1tzdHJpbmddID0gZHVyYXRpb247XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG5cbiAgcmV0dXJuIGR1cmF0aW9uID8gc29sdmVyIDogZ2V0RHVyYXRpb247XG5cbn1cblxuLy8gQmFzaWMgc3RlcHMgZWFzaW5nIGltcGxlbWVudGF0aW9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxuXG5mdW5jdGlvbiBzdGVwcyhzdGVwcykge1xuICBpZiAoIHN0ZXBzID09PSB2b2lkIDAgKSBzdGVwcyA9IDEwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5jZWlsKChtaW5NYXgodCwgMC4wMDAwMDEsIDEpKSAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpOyB9O1xufVxuXG4vLyBCZXppZXJFYXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG5cbnZhciBiZXppZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG4gIHZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbiAgZnVuY3Rpb24gQShhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExIH1cbiAgZnVuY3Rpb24gQihhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExIH1cbiAgZnVuY3Rpb24gQyhhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExIH1cblxuICBmdW5jdGlvbiBjYWxjQmV6aWVyKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQgfVxuICBmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSkgfVxuXG4gIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICAgIGRvIHtcbiAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7IGFCID0gY3VycmVudFQ7IH0gZWxzZSB7IGFBID0gY3VycmVudFQ7IH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiAwLjAwMDAwMDEgJiYgKytpIDwgMTApO1xuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7IHJldHVybiBhR3Vlc3NUOyB9XG4gICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG4gICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH1cblxuICBmdW5jdGlvbiBiZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG5cbiAgICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHsgcmV0dXJuOyB9XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG5cbiAgICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRGb3JYKGFYKSB7XG5cbiAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMDtcbiAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgfVxuXG4gICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSAwLjAwMSkge1xuICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHsgcmV0dXJuIHg7IH1cbiAgICAgIGlmICh4ID09PSAwIHx8IHggPT09IDEpIHsgcmV0dXJuIHg7IH1cbiAgICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gYmV6aWVyO1xuXG59KSgpO1xuXG52YXIgcGVubmVyID0gKGZ1bmN0aW9uICgpIHtcblxuICAvLyBCYXNlZCBvbiBqUXVlcnkgVUkncyBpbXBsZW1lbmF0aW9uIG9mIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyIChodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nKVxuXG4gIHZhciBlYXNlcyA9IHsgbGluZWFyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTsgfSB9O1xuXG4gIHZhciBmdW5jdGlvbkVhc2luZ3MgPSB7XG4gICAgU2luZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpOyB9OyB9LFxuICAgIENpcmM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7IH07IH0sXG4gICAgQmFjazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiB0ICogKDMgKiB0IC0gMik7IH07IH0sXG4gICAgQm91bmNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIHBvdzIsIGIgPSA0O1xuICAgICAgd2hpbGUgKHQgPCAoKCBwb3cyID0gTWF0aC5wb3coMiwgLS1iKSkgLSAxKSAvIDExKSB7fVxuICAgICAgcmV0dXJuIDEgLyBNYXRoLnBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBNYXRoLnBvdygoIHBvdzIgKiAzIC0gMiApIC8gMjIgLSB0LCAyKVxuICAgIH07IH0sXG4gICAgRWxhc3RpYzogZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgICBpZiAoIGFtcGxpdHVkZSA9PT0gdm9pZCAwICkgYW1wbGl0dWRlID0gMTtcbiAgICAgIGlmICggcGVyaW9kID09PSB2b2lkIDAgKSBwZXJpb2QgPSAuNTtcblxuICAgICAgdmFyIGEgPSBtaW5NYXgoYW1wbGl0dWRlLCAxLCAxMCk7XG4gICAgICB2YXIgcCA9IG1pbk1heChwZXJpb2QsIC4xLCAyKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gKHQgPT09IDAgfHwgdCA9PT0gMSkgPyB0IDogXG4gICAgICAgICAgLWEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICogTWF0aC5zaW4oKCgodCAtIDEpIC0gKHAgLyAoTWF0aC5QSSAqIDIpICogTWF0aC5hc2luKDEgLyBhKSkpICogKE1hdGguUEkgKiAyKSkgLyBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGJhc2VFYXNpbmdzID0gWydRdWFkJywgJ0N1YmljJywgJ1F1YXJ0JywgJ1F1aW50JywgJ0V4cG8nXTtcblxuICBiYXNlRWFzaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gICAgZnVuY3Rpb25FYXNpbmdzW25hbWVdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGgucG93KHQsIGkgKyAyKTsgfTsgfTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoZnVuY3Rpb25FYXNpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGVhc2VJbiA9IGZ1bmN0aW9uRWFzaW5nc1tuYW1lXTtcbiAgICBlYXNlc1snZWFzZUluJyArIG5hbWVdID0gZWFzZUluO1xuICAgIGVhc2VzWydlYXNlT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gZWFzZUluKGEsIGIpKDEgLSB0KTsgfTsgfTtcbiAgICBlYXNlc1snZWFzZUluT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0IDwgMC41ID8gZWFzZUluKGEsIGIpKHQgKiAyKSAvIDIgOiBcbiAgICAgIDEgLSBlYXNlSW4oYSwgYikodCAqIC0yICsgMikgLyAyOyB9OyB9O1xuICAgIGVhc2VzWydlYXNlT3V0SW4nICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPCAwLjUgPyAoMSAtIGVhc2VJbihhLCBiKSgxIC0gdCAqIDIpKSAvIDIgOiBcbiAgICAgIChlYXNlSW4oYSwgYikodCAqIDIgLSAxKSArIDEpIC8gMjsgfTsgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVhc2VzO1xuXG59KSgpO1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ3MoZWFzaW5nLCBkdXJhdGlvbikge1xuICBpZiAoaXMuZm5jKGVhc2luZykpIHsgcmV0dXJuIGVhc2luZzsgfVxuICB2YXIgbmFtZSA9IGVhc2luZy5zcGxpdCgnKCcpWzBdO1xuICB2YXIgZWFzZSA9IHBlbm5lcltuYW1lXTtcbiAgdmFyIGFyZ3MgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoZWFzaW5nKTtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSAnc3ByaW5nJyA6IHJldHVybiBzcHJpbmcoZWFzaW5nLCBkdXJhdGlvbik7XG4gICAgY2FzZSAnY3ViaWNCZXppZXInIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKGJlemllciwgYXJncyk7XG4gICAgY2FzZSAnc3RlcHMnIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKHN0ZXBzLCBhcmdzKTtcbiAgICBkZWZhdWx0IDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKGVhc2UsIGFyZ3MpO1xuICB9XG59XG5cbi8vIFN0cmluZ3NcblxuZnVuY3Rpb24gc2VsZWN0U3RyaW5nKHN0cikge1xuICB0cnkge1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyBBcnJheXNcblxuZnVuY3Rpb24gZmlsdGVyQXJyYXkoYXJyLCBjYWxsYmFjaykge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID49IDIgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChpIGluIGFycikge1xuICAgICAgdmFyIHZhbCA9IGFycltpXTtcbiAgICAgIGlmIChjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbCwgaSwgYXJyKSkge1xuICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmNvbmNhdChpcy5hcnIoYikgPyBmbGF0dGVuQXJyYXkoYikgOiBiKTsgfSwgW10pO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KG8pIHtcbiAgaWYgKGlzLmFycihvKSkgeyByZXR1cm4gbzsgfVxuICBpZiAoaXMuc3RyKG8pKSB7IG8gPSBzZWxlY3RTdHJpbmcobykgfHwgbzsgfVxuICBpZiAobyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG8gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgeyByZXR1cm4gW10uc2xpY2UuY2FsbChvKTsgfVxuICByZXR1cm4gW29dO1xufVxuXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKGFyciwgdmFsKSB7XG4gIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSA9PT0gdmFsOyB9KTtcbn1cblxuLy8gT2JqZWN0c1xuXG5mdW5jdGlvbiBjbG9uZU9iamVjdChvKSB7XG4gIHZhciBjbG9uZSA9IHt9O1xuICBmb3IgKHZhciBwIGluIG8pIHsgY2xvbmVbcF0gPSBvW3BdOyB9XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU9iamVjdFByb3BzKG8xLCBvMikge1xuICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcbiAgZm9yICh2YXIgcCBpbiBvMSkgeyBvW3BdID0gbzIuaGFzT3duUHJvcGVydHkocCkgPyBvMltwXSA6IG8xW3BdOyB9XG4gIHJldHVybiBvO1xufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMobzEsIG8yKSB7XG4gIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xuICBmb3IgKHZhciBwIGluIG8yKSB7IG9bcF0gPSBpcy51bmQobzFbcF0pID8gbzJbcF0gOiBvMVtwXTsgfVxuICByZXR1cm4gbztcbn1cblxuLy8gQ29sb3JzXG5cbmZ1bmN0aW9uIHJnYlRvUmdiYShyZ2JWYWx1ZSkge1xuICB2YXIgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcbiAgcmV0dXJuIHJnYiA/IChcInJnYmEoXCIgKyAocmdiWzFdKSArIFwiLDEpXCIpIDogcmdiVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xuICB2YXIgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgdmFyIGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCBmdW5jdGlvbiAobSwgciwgZywgYikgeyByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiOyB9ICk7XG4gIHZhciByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgdmFyIHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcbiAgdmFyIGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcbiAgdmFyIGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcbiAgcmV0dXJuIChcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsMSlcIik7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xuICB2YXIgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcbiAgdmFyIGggPSBwYXJzZUludChoc2xbMV0sIDEwKSAvIDM2MDtcbiAgdmFyIHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcbiAgdmFyIGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcbiAgdmFyIGEgPSBoc2xbNF0gfHwgMTtcbiAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgaWYgKHQgPCAwKSB7IHQgKz0gMTsgfVxuICAgIGlmICh0ID4gMSkgeyB0IC09IDE7IH1cbiAgICBpZiAodCA8IDEvNikgeyByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDsgfVxuICAgIGlmICh0IDwgMS8yKSB7IHJldHVybiBxOyB9XG4gICAgaWYgKHQgPCAyLzMpIHsgcmV0dXJuIHAgKyAocSAtIHApICogKDIvMyAtIHQpICogNjsgfVxuICAgIHJldHVybiBwO1xuICB9XG4gIHZhciByLCBnLCBiO1xuICBpZiAocyA9PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgdmFyIHAgPSAyICogbCAtIHE7XG4gICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEvMyk7XG4gICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEvMyk7XG4gIH1cbiAgcmV0dXJuIChcInJnYmEoXCIgKyAociAqIDI1NSkgKyBcIixcIiArIChnICogMjU1KSArIFwiLFwiICsgKGIgKiAyNTUpICsgXCIsXCIgKyBhICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiBjb2xvclRvUmdiKHZhbCkge1xuICBpZiAoaXMucmdiKHZhbCkpIHsgcmV0dXJuIHJnYlRvUmdiYSh2YWwpOyB9XG4gIGlmIChpcy5oZXgodmFsKSkgeyByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7IH1cbiAgaWYgKGlzLmhzbCh2YWwpKSB7IHJldHVybiBoc2xUb1JnYmEodmFsKTsgfVxufVxuXG4vLyBVbml0c1xuXG5mdW5jdGlvbiBnZXRVbml0KHZhbCkge1xuICB2YXIgc3BsaXQgPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8oJXxweHxwdHxlbXxyZW18aW58Y218bW18ZXh8Y2h8cGN8dnd8dmh8dm1pbnx2bWF4fGRlZ3xyYWR8dHVybik/JC8uZXhlYyh2YWwpO1xuICBpZiAoc3BsaXQpIHsgcmV0dXJuIHNwbGl0WzFdOyB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpIHtcbiAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAndHJhbnNsYXRlJykgfHwgcHJvcE5hbWUgPT09ICdwZXJzcGVjdGl2ZScpIHsgcmV0dXJuICdweCc7IH1cbiAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAncm90YXRlJykgfHwgc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdza2V3JykpIHsgcmV0dXJuICdkZWcnOyB9XG59XG5cbi8vIFZhbHVlc1xuXG5mdW5jdGlvbiBnZXRGdW5jdGlvblZhbHVlKHZhbCwgYW5pbWF0YWJsZSkge1xuICBpZiAoIWlzLmZuYyh2YWwpKSB7IHJldHVybiB2YWw7IH1cbiAgcmV0dXJuIHZhbChhbmltYXRhYmxlLnRhcmdldCwgYW5pbWF0YWJsZS5pZCwgYW5pbWF0YWJsZS50b3RhbCk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbCwgcHJvcCkge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKHByb3ApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSB7XG4gIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcbiAgaWYgKGFycmF5Q29udGFpbnMoW3VuaXQsICdkZWcnLCAncmFkJywgJ3R1cm4nXSwgdmFsdWVVbml0KSkgeyByZXR1cm4gdmFsdWU7IH1cbiAgdmFyIGNhY2hlZCA9IGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdO1xuICBpZiAoIWlzLnVuZChjYWNoZWQpKSB7IHJldHVybiBjYWNoZWQ7IH1cbiAgdmFyIGJhc2VsaW5lID0gMTAwO1xuICB2YXIgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbC50YWdOYW1lKTtcbiAgdmFyIHBhcmVudEVsID0gKGVsLnBhcmVudE5vZGUgJiYgKGVsLnBhcmVudE5vZGUgIT09IGRvY3VtZW50KSkgPyBlbC5wYXJlbnROb2RlIDogZG9jdW1lbnQuYm9keTtcbiAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGVtcEVsKTtcbiAgdGVtcEVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgdGVtcEVsLnN0eWxlLndpZHRoID0gYmFzZWxpbmUgKyB1bml0O1xuICB2YXIgZmFjdG9yID0gYmFzZWxpbmUgLyB0ZW1wRWwub2Zmc2V0V2lkdGg7XG4gIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBFbCk7XG4gIHZhciBjb252ZXJ0ZWRVbml0ID0gZmFjdG9yICogcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdID0gY29udmVydGVkVW5pdDtcbiAgcmV0dXJuIGNvbnZlcnRlZFVuaXQ7XG59XG5cbmZ1bmN0aW9uIGdldENTU1ZhbHVlKGVsLCBwcm9wLCB1bml0KSB7XG4gIGlmIChwcm9wIGluIGVsLnN0eWxlKSB7XG4gICAgdmFyIHVwcGVyY2FzZVByb3BOYW1lID0gcHJvcC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciB2YWx1ZSA9IGVsLnN0eWxlW3Byb3BdIHx8IGdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUodXBwZXJjYXNlUHJvcE5hbWUpIHx8ICcwJztcbiAgICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uVHlwZShlbCwgcHJvcCkge1xuICBpZiAoaXMuZG9tKGVsKSAmJiAhaXMuaW5wKGVsKSAmJiAoIWlzLm5pbChnZXRBdHRyaWJ1dGUoZWwsIHByb3ApKSB8fCAoaXMuc3ZnKGVsKSAmJiBlbFtwcm9wXSkpKSB7IHJldHVybiAnYXR0cmlidXRlJzsgfVxuICBpZiAoaXMuZG9tKGVsKSAmJiBhcnJheUNvbnRhaW5zKHZhbGlkVHJhbnNmb3JtcywgcHJvcCkpIHsgcmV0dXJuICd0cmFuc2Zvcm0nOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIChwcm9wICE9PSAndHJhbnNmb3JtJyAmJiBnZXRDU1NWYWx1ZShlbCwgcHJvcCkpKSB7IHJldHVybiAnY3NzJzsgfVxuICBpZiAoZWxbcHJvcF0gIT0gbnVsbCkgeyByZXR1cm4gJ29iamVjdCc7IH1cbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpIHtcbiAgaWYgKCFpcy5kb20oZWwpKSB7IHJldHVybjsgfVxuICB2YXIgc3RyID0gZWwuc3R5bGUudHJhbnNmb3JtIHx8ICcnO1xuICB2YXIgcmVnICA9IC8oXFx3KylcXCgoW14pXSopXFwpL2c7XG4gIHZhciB0cmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xuICB2YXIgbTsgd2hpbGUgKG0gPSByZWcuZXhlYyhzdHIpKSB7IHRyYW5zZm9ybXMuc2V0KG1bMV0sIG1bMl0pOyB9XG4gIHJldHVybiB0cmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1WYWx1ZShlbCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpIHtcbiAgdmFyIGRlZmF1bHRWYWwgPSBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NjYWxlJykgPyAxIDogMCArIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpO1xuICB2YXIgdmFsdWUgPSBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkuZ2V0KHByb3BOYW1lKSB8fCBkZWZhdWx0VmFsO1xuICBpZiAoYW5pbWF0YWJsZSkge1xuICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtcy5saXN0LnNldChwcm9wTmFtZSwgdmFsdWUpO1xuICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtc1snbGFzdCddID0gcHJvcE5hbWU7XG4gIH1cbiAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQsIGFuaW1hdGFibGUpIHtcbiAgc3dpdGNoIChnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcE5hbWUpKSB7XG4gICAgY2FzZSAndHJhbnNmb3JtJzogcmV0dXJuIGdldFRyYW5zZm9ybVZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpO1xuICAgIGNhc2UgJ2Nzcyc6IHJldHVybiBnZXRDU1NWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0KTtcbiAgICBjYXNlICdhdHRyaWJ1dGUnOiByZXR1cm4gZ2V0QXR0cmlidXRlKHRhcmdldCwgcHJvcE5hbWUpO1xuICAgIGRlZmF1bHQ6IHJldHVybiB0YXJnZXRbcHJvcE5hbWVdIHx8IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSkge1xuICB2YXIgb3BlcmF0b3IgPSAvXihcXCo9fFxcKz18LT0pLy5leGVjKHRvKTtcbiAgaWYgKCFvcGVyYXRvcikgeyByZXR1cm4gdG87IH1cbiAgdmFyIHUgPSBnZXRVbml0KHRvKSB8fCAwO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoZnJvbSk7XG4gIHZhciB5ID0gcGFyc2VGbG9hdCh0by5yZXBsYWNlKG9wZXJhdG9yWzBdLCAnJykpO1xuICBzd2l0Y2ggKG9wZXJhdG9yWzBdWzBdKSB7XG4gICAgY2FzZSAnKyc6IHJldHVybiB4ICsgeSArIHU7XG4gICAgY2FzZSAnLSc6IHJldHVybiB4IC0geSArIHU7XG4gICAgY2FzZSAnKic6IHJldHVybiB4ICogeSArIHU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVWYWx1ZSh2YWwsIHVuaXQpIHtcbiAgaWYgKGlzLmNvbCh2YWwpKSB7IHJldHVybiBjb2xvclRvUmdiKHZhbCk7IH1cbiAgaWYgKC9cXHMvZy50ZXN0KHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICB2YXIgb3JpZ2luYWxVbml0ID0gZ2V0VW5pdCh2YWwpO1xuICB2YXIgdW5pdExlc3MgPSBvcmlnaW5hbFVuaXQgPyB2YWwuc3Vic3RyKDAsIHZhbC5sZW5ndGggLSBvcmlnaW5hbFVuaXQubGVuZ3RoKSA6IHZhbDtcbiAgaWYgKHVuaXQpIHsgcmV0dXJuIHVuaXRMZXNzICsgdW5pdDsgfVxuICByZXR1cm4gdW5pdExlc3M7XG59XG5cbi8vIGdldFRvdGFsTGVuZ3RoKCkgZXF1aXZhbGVudCBmb3IgY2lyY2xlLCByZWN0LCBwb2x5bGluZSwgcG9seWdvbiBhbmQgbGluZSBzaGFwZXNcbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9TZWJMYW1ibGEvM2UwNTUwYzQ5NmMyMzY3MDk3NDRcblxuZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2lyY2xlTGVuZ3RoKGVsKSB7XG4gIHJldHVybiBNYXRoLlBJICogMiAqIGdldEF0dHJpYnV0ZShlbCwgJ3InKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjdExlbmd0aChlbCkge1xuICByZXR1cm4gKGdldEF0dHJpYnV0ZShlbCwgJ3dpZHRoJykgKiAyKSArIChnZXRBdHRyaWJ1dGUoZWwsICdoZWlnaHQnKSAqIDIpO1xufVxuXG5mdW5jdGlvbiBnZXRMaW5lTGVuZ3RoKGVsKSB7XG4gIHJldHVybiBnZXREaXN0YW5jZShcbiAgICB7eDogZ2V0QXR0cmlidXRlKGVsLCAneDEnKSwgeTogZ2V0QXR0cmlidXRlKGVsLCAneTEnKX0sIFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MicpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MicpfVxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRQb2x5bGluZUxlbmd0aChlbCkge1xuICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xuICB2YXIgdG90YWxMZW5ndGggPSAwO1xuICB2YXIgcHJldmlvdXNQb3M7XG4gIGZvciAodmFyIGkgPSAwIDsgaSA8IHBvaW50cy5udW1iZXJPZkl0ZW1zOyBpKyspIHtcbiAgICB2YXIgY3VycmVudFBvcyA9IHBvaW50cy5nZXRJdGVtKGkpO1xuICAgIGlmIChpID4gMCkgeyB0b3RhbExlbmd0aCArPSBnZXREaXN0YW5jZShwcmV2aW91c1BvcywgY3VycmVudFBvcyk7IH1cbiAgICBwcmV2aW91c1BvcyA9IGN1cnJlbnRQb3M7XG4gIH1cbiAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBnZXRQb2x5Z29uTGVuZ3RoKGVsKSB7XG4gIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XG4gIHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCkgKyBnZXREaXN0YW5jZShwb2ludHMuZ2V0SXRlbShwb2ludHMubnVtYmVyT2ZJdGVtcyAtIDEpLCBwb2ludHMuZ2V0SXRlbSgwKSk7XG59XG5cbi8vIFBhdGggYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIGdldFRvdGFsTGVuZ3RoKGVsKSB7XG4gIGlmIChlbC5nZXRUb3RhbExlbmd0aCkgeyByZXR1cm4gZWwuZ2V0VG90YWxMZW5ndGgoKTsgfVxuICBzd2l0Y2goZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnY2lyY2xlJzogcmV0dXJuIGdldENpcmNsZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncmVjdCc6IHJldHVybiBnZXRSZWN0TGVuZ3RoKGVsKTtcbiAgICBjYXNlICdsaW5lJzogcmV0dXJuIGdldExpbmVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3BvbHlsaW5lJzogcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdwb2x5Z29uJzogcmV0dXJuIGdldFBvbHlnb25MZW5ndGgoZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldERhc2hvZmZzZXQoZWwpIHtcbiAgdmFyIHBhdGhMZW5ndGggPSBnZXRUb3RhbExlbmd0aChlbCk7XG4gIGVsLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHBhdGhMZW5ndGgpO1xuICByZXR1cm4gcGF0aExlbmd0aDtcbn1cblxuLy8gTW90aW9uIHBhdGhcblxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnRWwoZWwpIHtcbiAgdmFyIHBhcmVudEVsID0gZWwucGFyZW50Tm9kZTtcbiAgd2hpbGUgKGlzLnN2ZyhwYXJlbnRFbCkpIHtcbiAgICBpZiAoIWlzLnN2ZyhwYXJlbnRFbC5wYXJlbnROb2RlKSkgeyBicmVhazsgfVxuICAgIHBhcmVudEVsID0gcGFyZW50RWwucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gcGFyZW50RWw7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudFN2ZyhwYXRoRWwsIHN2Z0RhdGEpIHtcbiAgdmFyIHN2ZyA9IHN2Z0RhdGEgfHwge307XG4gIHZhciBwYXJlbnRTdmdFbCA9IHN2Zy5lbCB8fCBnZXRQYXJlbnRTdmdFbChwYXRoRWwpO1xuICB2YXIgcmVjdCA9IHBhcmVudFN2Z0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgdmlld0JveEF0dHIgPSBnZXRBdHRyaWJ1dGUocGFyZW50U3ZnRWwsICd2aWV3Qm94Jyk7XG4gIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XG4gIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgdmFyIHZpZXdCb3ggPSBzdmcudmlld0JveCB8fCAodmlld0JveEF0dHIgPyB2aWV3Qm94QXR0ci5zcGxpdCgnICcpIDogWzAsIDAsIHdpZHRoLCBoZWlnaHRdKTtcbiAgcmV0dXJuIHtcbiAgICBlbDogcGFyZW50U3ZnRWwsXG4gICAgdmlld0JveDogdmlld0JveCxcbiAgICB4OiB2aWV3Qm94WzBdIC8gMSxcbiAgICB5OiB2aWV3Qm94WzFdIC8gMSxcbiAgICB3OiB3aWR0aCxcbiAgICBoOiBoZWlnaHQsXG4gICAgdlc6IHZpZXdCb3hbMl0sXG4gICAgdkg6IHZpZXdCb3hbM11cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoKHBhdGgsIHBlcmNlbnQpIHtcbiAgdmFyIHBhdGhFbCA9IGlzLnN0cihwYXRoKSA/IHNlbGVjdFN0cmluZyhwYXRoKVswXSA6IHBhdGg7XG4gIHZhciBwID0gcGVyY2VudCB8fCAxMDA7XG4gIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICBlbDogcGF0aEVsLFxuICAgICAgc3ZnOiBnZXRQYXJlbnRTdmcocGF0aEVsKSxcbiAgICAgIHRvdGFsTGVuZ3RoOiBnZXRUb3RhbExlbmd0aChwYXRoRWwpICogKHAgLyAxMDApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGhQcm9ncmVzcyhwYXRoLCBwcm9ncmVzcywgaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKSB7XG4gIGZ1bmN0aW9uIHBvaW50KG9mZnNldCkge1xuICAgIGlmICggb2Zmc2V0ID09PSB2b2lkIDAgKSBvZmZzZXQgPSAwO1xuXG4gICAgdmFyIGwgPSBwcm9ncmVzcyArIG9mZnNldCA+PSAxID8gcHJvZ3Jlc3MgKyBvZmZzZXQgOiAwO1xuICAgIHJldHVybiBwYXRoLmVsLmdldFBvaW50QXRMZW5ndGgobCk7XG4gIH1cbiAgdmFyIHN2ZyA9IGdldFBhcmVudFN2ZyhwYXRoLmVsLCBwYXRoLnN2Zyk7XG4gIHZhciBwID0gcG9pbnQoKTtcbiAgdmFyIHAwID0gcG9pbnQoLTEpO1xuICB2YXIgcDEgPSBwb2ludCgrMSk7XG4gIHZhciBzY2FsZVggPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLncgLyBzdmcudlc7XG4gIHZhciBzY2FsZVkgPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLmggLyBzdmcudkg7XG4gIHN3aXRjaCAocGF0aC5wcm9wZXJ0eSkge1xuICAgIGNhc2UgJ3gnOiByZXR1cm4gKHAueCAtIHN2Zy54KSAqIHNjYWxlWDtcbiAgICBjYXNlICd5JzogcmV0dXJuIChwLnkgLSBzdmcueSkgKiBzY2FsZVk7XG4gICAgY2FzZSAnYW5nbGUnOiByZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcbiAgfVxufVxuXG4vLyBEZWNvbXBvc2UgdmFsdWVcblxuZnVuY3Rpb24gZGVjb21wb3NlVmFsdWUodmFsLCB1bml0KSB7XG4gIC8vIGNvbnN0IHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nOyAvLyBoYW5kbGVzIGJhc2ljIG51bWJlcnNcbiAgLy8gY29uc3Qgcmd4ID0gL1srLV0/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxuICB2YXIgcmd4ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXG4gIHZhciB2YWx1ZSA9IHZhbGlkYXRlVmFsdWUoKGlzLnB0aCh2YWwpID8gdmFsLnRvdGFsTGVuZ3RoIDogdmFsKSwgdW5pdCkgKyAnJztcbiAgcmV0dXJuIHtcbiAgICBvcmlnaW5hbDogdmFsdWUsXG4gICAgbnVtYmVyczogdmFsdWUubWF0Y2gocmd4KSA/IHZhbHVlLm1hdGNoKHJneCkubWFwKE51bWJlcikgOiBbMF0sXG4gICAgc3RyaW5nczogKGlzLnN0cih2YWwpIHx8IHVuaXQpID8gdmFsdWUuc3BsaXQocmd4KSA6IFtdXG4gIH1cbn1cblxuLy8gQW5pbWF0YWJsZXNcblxuZnVuY3Rpb24gcGFyc2VUYXJnZXRzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldHNBcnJheSA9IHRhcmdldHMgPyAoZmxhdHRlbkFycmF5KGlzLmFycih0YXJnZXRzKSA/IHRhcmdldHMubWFwKHRvQXJyYXkpIDogdG9BcnJheSh0YXJnZXRzKSkpIDogW107XG4gIHJldHVybiBmaWx0ZXJBcnJheSh0YXJnZXRzQXJyYXksIGZ1bmN0aW9uIChpdGVtLCBwb3MsIHNlbGYpIHsgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gcG9zOyB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cykge1xuICB2YXIgcGFyc2VkID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICByZXR1cm4gcGFyc2VkLm1hcChmdW5jdGlvbiAodCwgaSkge1xuICAgIHJldHVybiB7dGFyZ2V0OiB0LCBpZDogaSwgdG90YWw6IHBhcnNlZC5sZW5ndGgsIHRyYW5zZm9ybXM6IHsgbGlzdDogZ2V0RWxlbWVudFRyYW5zZm9ybXModCkgfSB9O1xuICB9KTtcbn1cblxuLy8gUHJvcGVydGllc1xuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwcm9wLCB0d2VlblNldHRpbmdzKSB7XG4gIHZhciBzZXR0aW5ncyA9IGNsb25lT2JqZWN0KHR3ZWVuU2V0dGluZ3MpO1xuICAvLyBPdmVycmlkZSBkdXJhdGlvbiBpZiBlYXNpbmcgaXMgYSBzcHJpbmdcbiAgaWYgKC9ec3ByaW5nLy50ZXN0KHNldHRpbmdzLmVhc2luZykpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSBzcHJpbmcoc2V0dGluZ3MuZWFzaW5nKTsgfVxuICBpZiAoaXMuYXJyKHByb3ApKSB7XG4gICAgdmFyIGwgPSBwcm9wLmxlbmd0aDtcbiAgICB2YXIgaXNGcm9tVG8gPSAobCA9PT0gMiAmJiAhaXMub2JqKHByb3BbMF0pKTtcbiAgICBpZiAoIWlzRnJvbVRvKSB7XG4gICAgICAvLyBEdXJhdGlvbiBkaXZpZGVkIGJ5IHRoZSBudW1iZXIgb2YgdHdlZW5zXG4gICAgICBpZiAoIWlzLmZuYyh0d2VlblNldHRpbmdzLmR1cmF0aW9uKSkgeyBzZXR0aW5ncy5kdXJhdGlvbiA9IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24gLyBsOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyYW5zZm9ybSBbZnJvbSwgdG9dIHZhbHVlcyBzaG9ydGhhbmQgdG8gYSB2YWxpZCB0d2VlbiB2YWx1ZVxuICAgICAgcHJvcCA9IHt2YWx1ZTogcHJvcH07XG4gICAgfVxuICB9XG4gIHZhciBwcm9wQXJyYXkgPSBpcy5hcnIocHJvcCkgPyBwcm9wIDogW3Byb3BdO1xuICByZXR1cm4gcHJvcEFycmF5Lm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgIHZhciBvYmogPSAoaXMub2JqKHYpICYmICFpcy5wdGgodikpID8gdiA6IHt2YWx1ZTogdn07XG4gICAgLy8gRGVmYXVsdCBkZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBmaXJzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmRlbGF5KSkgeyBvYmouZGVsYXkgPSAhaSA/IHR3ZWVuU2V0dGluZ3MuZGVsYXkgOiAwOyB9XG4gICAgLy8gRGVmYXVsdCBlbmREZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBsYXN0IHR3ZWVuXG4gICAgaWYgKGlzLnVuZChvYmouZW5kRGVsYXkpKSB7IG9iai5lbmREZWxheSA9IGkgPT09IHByb3BBcnJheS5sZW5ndGggLSAxID8gdHdlZW5TZXR0aW5ncy5lbmREZWxheSA6IDA7IH1cbiAgICByZXR1cm4gb2JqO1xuICB9KS5tYXAoZnVuY3Rpb24gKGspIHsgcmV0dXJuIG1lcmdlT2JqZWN0cyhrLCBzZXR0aW5ncyk7IH0pO1xufVxuXG5cbmZ1bmN0aW9uIGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSB7XG4gIHZhciBwcm9wZXJ0eU5hbWVzID0gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gT2JqZWN0LmtleXMoa2V5KTsgfSkpLCBmdW5jdGlvbiAocCkgeyByZXR1cm4gaXMua2V5KHApOyB9KVxuICAucmVkdWNlKGZ1bmN0aW9uIChhLGIpIHsgaWYgKGEuaW5kZXhPZihiKSA8IDApIHsgYS5wdXNoKGIpOyB9IHJldHVybiBhOyB9LCBbXSk7XG4gIHZhciBwcm9wZXJ0aWVzID0ge307XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBpICkge1xuICAgIHZhciBwcm9wTmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSBrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBuZXdLZXkgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4ga2V5KSB7XG4gICAgICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgICAgICBpZiAocCA9PSBwcm9wTmFtZSkgeyBuZXdLZXkudmFsdWUgPSBrZXlbcF07IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdLZXlbcF0gPSBrZXlbcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdLZXk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSBsb29wKCBpICk7XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcykge1xuICB2YXIgcHJvcGVydGllcyA9IFtdO1xuICB2YXIga2V5ZnJhbWVzID0gcGFyYW1zLmtleWZyYW1lcztcbiAgaWYgKGtleWZyYW1lcykgeyBwYXJhbXMgPSBtZXJnZU9iamVjdHMoZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpLCBwYXJhbXMpOyB9XG4gIGZvciAodmFyIHAgaW4gcGFyYW1zKSB7XG4gICAgaWYgKGlzLmtleShwKSkge1xuICAgICAgcHJvcGVydGllcy5wdXNoKHtcbiAgICAgICAgbmFtZTogcCxcbiAgICAgICAgdHdlZW5zOiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwYXJhbXNbcF0sIHR3ZWVuU2V0dGluZ3MpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbi8vIFR3ZWVuc1xuXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlblZhbHVlcyh0d2VlbiwgYW5pbWF0YWJsZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHR3ZWVuKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlbltwXSwgYW5pbWF0YWJsZSk7XG4gICAgaWYgKGlzLmFycih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBnZXRGdW5jdGlvblZhbHVlKHYsIGFuaW1hdGFibGUpOyB9KTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHsgdmFsdWUgPSB2YWx1ZVswXTsgfVxuICAgIH1cbiAgICB0W3BdID0gdmFsdWU7XG4gIH1cbiAgdC5kdXJhdGlvbiA9IHBhcnNlRmxvYXQodC5kdXJhdGlvbik7XG4gIHQuZGVsYXkgPSBwYXJzZUZsb2F0KHQuZGVsYXkpO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpIHtcbiAgdmFyIHByZXZpb3VzVHdlZW47XG4gIHJldHVybiBwcm9wLnR3ZWVucy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdHdlZW4gPSBub3JtYWxpemVUd2VlblZhbHVlcyh0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgdHdlZW5WYWx1ZSA9IHR3ZWVuLnZhbHVlO1xuICAgIHZhciB0byA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMV0gOiB0d2VlblZhbHVlO1xuICAgIHZhciB0b1VuaXQgPSBnZXRVbml0KHRvKTtcbiAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSwgdG9Vbml0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLnRvLm9yaWdpbmFsIDogb3JpZ2luYWxWYWx1ZTtcbiAgICB2YXIgZnJvbSA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMF0gOiBwcmV2aW91c1ZhbHVlO1xuICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQoZnJvbSkgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcbiAgICB2YXIgdW5pdCA9IHRvVW5pdCB8fCBmcm9tVW5pdDtcbiAgICBpZiAoaXMudW5kKHRvKSkgeyB0byA9IHByZXZpb3VzVmFsdWU7IH1cbiAgICB0d2Vlbi5mcm9tID0gZGVjb21wb3NlVmFsdWUoZnJvbSwgdW5pdCk7XG4gICAgdHdlZW4udG8gPSBkZWNvbXBvc2VWYWx1ZShnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSwgdW5pdCk7XG4gICAgdHdlZW4uc3RhcnQgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi5lbmQgOiAwO1xuICAgIHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0ICsgdHdlZW4uZGVsYXkgKyB0d2Vlbi5kdXJhdGlvbiArIHR3ZWVuLmVuZERlbGF5O1xuICAgIHR3ZWVuLmVhc2luZyA9IHBhcnNlRWFzaW5ncyh0d2Vlbi5lYXNpbmcsIHR3ZWVuLmR1cmF0aW9uKTtcbiAgICB0d2Vlbi5pc1BhdGggPSBpcy5wdGgodHdlZW5WYWx1ZSk7XG4gICAgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID0gdHdlZW4uaXNQYXRoICYmIGlzLnN2ZyhhbmltYXRhYmxlLnRhcmdldCk7XG4gICAgdHdlZW4uaXNDb2xvciA9IGlzLmNvbCh0d2Vlbi5mcm9tLm9yaWdpbmFsKTtcbiAgICBpZiAodHdlZW4uaXNDb2xvcikgeyB0d2Vlbi5yb3VuZCA9IDE7IH1cbiAgICBwcmV2aW91c1R3ZWVuID0gdHdlZW47XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9KTtcbn1cblxuLy8gVHdlZW4gcHJvZ3Jlc3NcblxudmFyIHNldFByb2dyZXNzVmFsdWUgPSB7XG4gIGNzczogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHQuc3R5bGVbcF0gPSB2OyB9LFxuICBhdHRyaWJ1dGU6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnNldEF0dHJpYnV0ZShwLCB2KTsgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdFtwXSA9IHY7IH0sXG4gIHRyYW5zZm9ybTogZnVuY3Rpb24gKHQsIHAsIHYsIHRyYW5zZm9ybXMsIG1hbnVhbCkge1xuICAgIHRyYW5zZm9ybXMubGlzdC5zZXQocCwgdik7XG4gICAgaWYgKHAgPT09IHRyYW5zZm9ybXMubGFzdCB8fCBtYW51YWwpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgIHRyYW5zZm9ybXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkgeyBzdHIgKz0gcHJvcCArIFwiKFwiICsgdmFsdWUgKyBcIikgXCI7IH0pO1xuICAgICAgdC5zdHlsZS50cmFuc2Zvcm0gPSBzdHI7XG4gICAgfVxuICB9XG59O1xuXG4vLyBTZXQgVmFsdWUgaGVscGVyXG5cbmZ1bmN0aW9uIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHRhcmdldHMpO1xuICBhbmltYXRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltYXRhYmxlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdGFyZ2V0ID0gYW5pbWF0YWJsZS50YXJnZXQ7XG4gICAgICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XG4gICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWVVbml0LCBhbmltYXRhYmxlKTtcbiAgICAgIHZhciB1bml0ID0gdmFsdWVVbml0IHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgdG8gPSBnZXRSZWxhdGl2ZVZhbHVlKHZhbGlkYXRlVmFsdWUodmFsdWUsIHVuaXQpLCBvcmlnaW5hbFZhbHVlKTtcbiAgICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW1UeXBlXSh0YXJnZXQsIHByb3BlcnR5LCB0bywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBBbmltYXRpb25zXG5cbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKSB7XG4gIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSk7XG4gIGlmIChhbmltVHlwZSkge1xuICAgIHZhciB0d2VlbnMgPSBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIGxhc3RUd2VlbiA9IHR3ZWVuc1t0d2VlbnMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFuaW1UeXBlLFxuICAgICAgcHJvcGVydHk6IHByb3AubmFtZSxcbiAgICAgIGFuaW1hdGFibGU6IGFuaW1hdGFibGUsXG4gICAgICB0d2VlbnM6IHR3ZWVucyxcbiAgICAgIGR1cmF0aW9uOiBsYXN0VHdlZW4uZW5kLFxuICAgICAgZGVsYXk6IHR3ZWVuc1swXS5kZWxheSxcbiAgICAgIGVuZERlbGF5OiBsYXN0VHdlZW4uZW5kRGVsYXlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcykge1xuICByZXR1cm4gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGFuaW1hdGFibGVzLm1hcChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKTtcbiAgICB9KTtcbiAgfSkpLCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWlzLnVuZChhKTsgfSk7XG59XG5cbi8vIENyZWF0ZSBJbnN0YW5jZVxuXG5mdW5jdGlvbiBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgYW5pbUxlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICB2YXIgZ2V0VGxPZmZzZXQgPSBmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gYW5pbS50aW1lbGluZU9mZnNldCA/IGFuaW0udGltZWxpbmVPZmZzZXQgOiAwOyB9O1xuICB2YXIgdGltaW5ncyA9IHt9O1xuICB0aW1pbmdzLmR1cmF0aW9uID0gYW5pbUxlbmd0aCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb247IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb247XG4gIHRpbWluZ3MuZGVsYXkgPSBhbmltTGVuZ3RoID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kZWxheTsgfSkpIDogdHdlZW5TZXR0aW5ncy5kZWxheTtcbiAgdGltaW5ncy5lbmREZWxheSA9IGFuaW1MZW5ndGggPyB0aW1pbmdzLmR1cmF0aW9uIC0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbiAtIGFuaW0uZW5kRGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXk7XG4gIHJldHVybiB0aW1pbmdzO1xufVxuXG52YXIgaW5zdGFuY2VJRCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcykge1xuICB2YXIgaW5zdGFuY2VTZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIHR3ZWVuU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyhwYXJhbXMudGFyZ2V0cyk7XG4gIHZhciBhbmltYXRpb25zID0gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcyk7XG4gIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpO1xuICB2YXIgaWQgPSBpbnN0YW5jZUlEO1xuICBpbnN0YW5jZUlEKys7XG4gIHJldHVybiBtZXJnZU9iamVjdHMoaW5zdGFuY2VTZXR0aW5ncywge1xuICAgIGlkOiBpZCxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYW5pbWF0YWJsZXM6IGFuaW1hdGFibGVzLFxuICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXG4gICAgZHVyYXRpb246IHRpbWluZ3MuZHVyYXRpb24sXG4gICAgZGVsYXk6IHRpbWluZ3MuZGVsYXksXG4gICAgZW5kRGVsYXk6IHRpbWluZ3MuZW5kRGVsYXlcbiAgfSk7XG59XG5cbi8vIENvcmVcblxudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xuXG52YXIgZW5naW5lID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJhZjtcblxuICBmdW5jdGlvbiBwbGF5KCkge1xuICAgIGlmICghcmFmICYmICghaXNEb2N1bWVudEhpZGRlbigpIHx8ICFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSAmJiBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzdGVwKHQpIHtcbiAgICAvLyBtZW1vIG9uIGFsZ29yaXRobSBpc3N1ZTpcbiAgICAvLyBkYW5nZXJvdXMgaXRlcmF0aW9uIG92ZXIgbXV0YWJsZSBgYWN0aXZlSW5zdGFuY2VzYFxuICAgIC8vICh0aGF0IGNvbGxlY3Rpb24gbWF5IGJlIHVwZGF0ZWQgZnJvbSB3aXRoaW4gY2FsbGJhY2tzIG9mIGB0aWNrYC1lZCBhbmltYXRpb24gaW5zdGFuY2VzKVxuICAgIHZhciBhY3RpdmVJbnN0YW5jZXNMZW5ndGggPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xuICAgICAgdmFyIGFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xuICAgICAgaWYgKCFhY3RpdmVJbnN0YW5jZS5wYXVzZWQpIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2UudGljayh0KTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuICAgIHJhZiA9IGkgPiAwID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICBpZiAoIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoaXNEb2N1bWVudEhpZGRlbigpKSB7XG4gICAgICAvLyBzdXNwZW5kIHRpY2tzXG4gICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH0gZWxzZSB7IC8vIGlzIGJhY2sgdG8gYWN0aXZlIHRhYlxuICAgICAgLy8gZmlyc3QgYWRqdXN0IGFuaW1hdGlvbnMgdG8gY29uc2lkZXIgdGhlIHRpbWUgdGhhdCB0aWNrcyB3ZXJlIHN1c3BlbmRlZFxuICAgICAgYWN0aXZlSW5zdGFuY2VzLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkgeyByZXR1cm4gaW5zdGFuY2UgLl9vbkRvY3VtZW50VmlzaWJpbGl0eSgpOyB9XG4gICAgICApO1xuICAgICAgZW5naW5lKCk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHBsYXk7XG59KSgpO1xuXG5mdW5jdGlvbiBpc0RvY3VtZW50SGlkZGVuKCkge1xuICByZXR1cm4gISFkb2N1bWVudCAmJiBkb2N1bWVudC5oaWRkZW47XG59XG5cbi8vIFB1YmxpYyBJbnN0YW5jZVxuXG5mdW5jdGlvbiBhbmltZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG5cbiAgdmFyIHN0YXJ0VGltZSA9IDAsIGxhc3RUaW1lID0gMCwgbm93ID0gMDtcbiAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCA9IDA7XG4gIHZhciByZXNvbHZlID0gbnVsbDtcblxuICBmdW5jdGlvbiBtYWtlUHJvbWlzZShpbnN0YW5jZSkge1xuICAgIHZhciBwcm9taXNlID0gd2luZG93LlByb21pc2UgJiYgbmV3IFByb21pc2UoZnVuY3Rpb24gKF9yZXNvbHZlKSB7IHJldHVybiByZXNvbHZlID0gX3Jlc29sdmU7IH0pO1xuICAgIGluc3RhbmNlLmZpbmlzaGVkID0gcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHZhciBpbnN0YW5jZSA9IGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcyk7XG4gIHZhciBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgIGluc3RhbmNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiAhPT0gJ25vcm1hbCcgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJztcbiAgICB9XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSAhaW5zdGFuY2UucmV2ZXJzZWQ7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLnJldmVyc2VkID0gaW5zdGFuY2UucmV2ZXJzZWQ7IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0VGltZSh0aW1lKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VGltZSgpIHtcbiAgICBzdGFydFRpbWUgPSAwO1xuICAgIGxhc3RUaW1lID0gYWRqdXN0VGltZShpbnN0YW5jZS5jdXJyZW50VGltZSkgKiAoMSAvIGFuaW1lLnNwZWVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlZWtDaGlsZCh0aW1lLCBjaGlsZCkge1xuICAgIGlmIChjaGlsZCkgeyBjaGlsZC5zZWVrKHRpbWUgLSBjaGlsZC50aW1lbGluZU9mZnNldCk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNJbnN0YW5jZUNoaWxkcmVuKHRpbWUpIHtcbiAgICBpZiAoIWluc3RhbmNlLnJldmVyc2VQbGF5YmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7IHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpXSk7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykgeyBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baSQxXSk7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gICAgdmFyIGFuaW1hdGlvbnNMZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGFuaW1hdGlvbnNMZW5ndGgpIHtcbiAgICAgIHZhciBhbmltID0gYW5pbWF0aW9uc1tpXTtcbiAgICAgIHZhciBhbmltYXRhYmxlID0gYW5pbS5hbmltYXRhYmxlO1xuICAgICAgdmFyIHR3ZWVucyA9IGFuaW0udHdlZW5zO1xuICAgICAgdmFyIHR3ZWVuTGVuZ3RoID0gdHdlZW5zLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgdHdlZW4gPSB0d2VlbnNbdHdlZW5MZW5ndGhdO1xuICAgICAgLy8gT25seSBjaGVjayBmb3Iga2V5ZnJhbWVzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgdHdlZW5cbiAgICAgIGlmICh0d2Vlbkxlbmd0aCkgeyB0d2VlbiA9IGZpbHRlckFycmF5KHR3ZWVucywgZnVuY3Rpb24gKHQpIHsgcmV0dXJuIChpbnNUaW1lIDwgdC5lbmQpOyB9KVswXSB8fCB0d2VlbjsgfVxuICAgICAgdmFyIGVsYXBzZWQgPSBtaW5NYXgoaW5zVGltZSAtIHR3ZWVuLnN0YXJ0IC0gdHdlZW4uZGVsYXksIDAsIHR3ZWVuLmR1cmF0aW9uKSAvIHR3ZWVuLmR1cmF0aW9uO1xuICAgICAgdmFyIGVhc2VkID0gaXNOYU4oZWxhcHNlZCkgPyAxIDogdHdlZW4uZWFzaW5nKGVsYXBzZWQpO1xuICAgICAgdmFyIHN0cmluZ3MgPSB0d2Vlbi50by5zdHJpbmdzO1xuICAgICAgdmFyIHJvdW5kID0gdHdlZW4ucm91bmQ7XG4gICAgICB2YXIgbnVtYmVycyA9IFtdO1xuICAgICAgdmFyIHRvTnVtYmVyc0xlbmd0aCA9IHR3ZWVuLnRvLm51bWJlcnMubGVuZ3RoO1xuICAgICAgdmFyIHByb2dyZXNzID0gKHZvaWQgMCk7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRvTnVtYmVyc0xlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICh2b2lkIDApO1xuICAgICAgICB2YXIgdG9OdW1iZXIgPSB0d2Vlbi50by5udW1iZXJzW25dO1xuICAgICAgICB2YXIgZnJvbU51bWJlciA9IHR3ZWVuLmZyb20ubnVtYmVyc1tuXSB8fCAwO1xuICAgICAgICBpZiAoIXR3ZWVuLmlzUGF0aCkge1xuICAgICAgICAgIHZhbHVlID0gZnJvbU51bWJlciArIChlYXNlZCAqICh0b051bWJlciAtIGZyb21OdW1iZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGdldFBhdGhQcm9ncmVzcyh0d2Vlbi52YWx1ZSwgZWFzZWQgKiB0b051bWJlciwgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICBpZiAoISh0d2Vlbi5pc0NvbG9yICYmIG4gPiAyKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogcm91bmQpIC8gcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICAvLyBNYW51YWwgQXJyYXkucmVkdWNlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VzXG4gICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuICAgICAgaWYgKCFzdHJpbmdzTGVuZ3RoKSB7XG4gICAgICAgIHByb2dyZXNzID0gbnVtYmVyc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2dyZXNzID0gc3RyaW5nc1swXTtcbiAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBzdHJpbmdzTGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICB2YXIgYSA9IHN0cmluZ3Nbc107XG4gICAgICAgICAgdmFyIGIgPSBzdHJpbmdzW3MgKyAxXTtcbiAgICAgICAgICB2YXIgbiQxID0gbnVtYmVyc1tzXTtcbiAgICAgICAgICBpZiAoIWlzTmFOKG4kMSkpIHtcbiAgICAgICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyAnICc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltLnR5cGVdKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltLnByb3BlcnR5LCBwcm9ncmVzcywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zKTtcbiAgICAgIGFuaW0uY3VycmVudFZhbHVlID0gcHJvZ3Jlc3M7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q2FsbGJhY2soY2IpIHtcbiAgICBpZiAoaW5zdGFuY2VbY2JdICYmICFpbnN0YW5jZS5wYXNzVGhyb3VnaCkgeyBpbnN0YW5jZVtjYl0oaW5zdGFuY2UpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBjb3VudEl0ZXJhdGlvbigpIHtcbiAgICBpZiAoaW5zdGFuY2UucmVtYWluaW5nICYmIGluc3RhbmNlLnJlbWFpbmluZyAhPT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UucmVtYWluaW5nLS07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW5zdGFuY2VQcm9ncmVzcyhlbmdpbmVUaW1lKSB7XG4gICAgdmFyIGluc0R1cmF0aW9uID0gaW5zdGFuY2UuZHVyYXRpb247XG4gICAgdmFyIGluc0RlbGF5ID0gaW5zdGFuY2UuZGVsYXk7XG4gICAgdmFyIGluc0VuZERlbGF5ID0gaW5zRHVyYXRpb24gLSBpbnN0YW5jZS5lbmREZWxheTtcbiAgICB2YXIgaW5zVGltZSA9IGFkanVzdFRpbWUoZW5naW5lVGltZSk7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSBtaW5NYXgoKGluc1RpbWUgLyBpbnNEdXJhdGlvbikgKiAxMDAsIDAsIDEwMCk7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gaW5zVGltZSA8IGluc3RhbmNlLmN1cnJlbnRUaW1lO1xuICAgIGlmIChjaGlsZHJlbikgeyBzeW5jSW5zdGFuY2VDaGlsZHJlbihpbnNUaW1lKTsgfVxuICAgIGlmICghaW5zdGFuY2UuYmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICBpbnN0YW5jZS5iZWdhbiA9IHRydWU7XG4gICAgICBzZXRDYWxsYmFjaygnYmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKCFpbnN0YW5jZS5sb29wQmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSB0cnVlO1xuICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BCZWdpbicpO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA8PSBpbnNEZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gMCkge1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKDApO1xuICAgIH1cbiAgICBpZiAoKGluc1RpbWUgPj0gaW5zRW5kRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IGluc0R1cmF0aW9uKSB8fCAhaW5zRHVyYXRpb24pIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNEdXJhdGlvbik7XG4gICAgfVxuICAgIGlmIChpbnNUaW1lID4gaW5zRGVsYXkgJiYgaW5zVGltZSA8IGluc0VuZERlbGF5KSB7XG4gICAgICBpZiAoIWluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VCZWdpbicpO1xuICAgICAgfVxuICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZScpO1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gbWluTWF4KGluc1RpbWUsIDAsIGluc0R1cmF0aW9uKTtcbiAgICBpZiAoaW5zdGFuY2UuYmVnYW4pIHsgc2V0Q2FsbGJhY2soJ3VwZGF0ZScpOyB9XG4gICAgaWYgKGVuZ2luZVRpbWUgPj0gaW5zRHVyYXRpb24pIHtcbiAgICAgIGxhc3RUaW1lID0gMDtcbiAgICAgIGNvdW50SXRlcmF0aW9uKCk7XG4gICAgICBpZiAoIWluc3RhbmNlLnJlbWFpbmluZykge1xuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIWluc3RhbmNlLmNvbXBsZXRlZCkge1xuICAgICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdjb21wbGV0ZScpO1xuICAgICAgICAgIGlmICghaW5zdGFuY2UucGFzc1Rocm91Z2ggJiYgJ1Byb21pc2UnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IG5vdztcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xuICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKGluc3RhbmNlLmRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgICAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5zdGFuY2UucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xuICAgIGluc3RhbmNlLnBhc3NUaHJvdWdoID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSAwO1xuICAgIGluc3RhbmNlLnByb2dyZXNzID0gMDtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIGluc3RhbmNlLmJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlZCA9IGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnO1xuICAgIGluc3RhbmNlLnJlbWFpbmluZyA9IGluc3RhbmNlLmxvb3A7XG4gICAgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbkxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gY2hpbGRyZW5MZW5ndGg7IGktLTspIHsgaW5zdGFuY2UuY2hpbGRyZW5baV0ucmVzZXQoKTsgfVxuICAgIGlmIChpbnN0YW5jZS5yZXZlcnNlZCAmJiBpbnN0YW5jZS5sb29wICE9PSB0cnVlIHx8IChkaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnICYmIGluc3RhbmNlLmxvb3AgPT09IDEpKSB7IGluc3RhbmNlLnJlbWFpbmluZysrOyB9XG4gICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gOiAwKTtcbiAgfTtcblxuICAvLyBpbnRlcm5hbCBtZXRob2QgKGZvciBlbmdpbmUpIHRvIGFkanVzdCBhbmltYXRpb24gdGltaW5ncyBiZWZvcmUgcmVzdG9yaW5nIGVuZ2luZSB0aWNrcyAockFGKVxuICBpbnN0YW5jZS5fb25Eb2N1bWVudFZpc2liaWxpdHkgPSByZXNldFRpbWU7XG5cbiAgLy8gU2V0IFZhbHVlIGhlbHBlclxuXG4gIGluc3RhbmNlLnNldCA9IGZ1bmN0aW9uKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgICBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcyk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgbm93ID0gdDtcbiAgICBpZiAoIXN0YXJ0VGltZSkgeyBzdGFydFRpbWUgPSBub3c7IH1cbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKChub3cgKyAobGFzdFRpbWUgLSBzdGFydFRpbWUpKSAqIGFuaW1lLnNwZWVkKTtcbiAgfTtcblxuICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWluc3RhbmNlLnBhdXNlZCkgeyByZXR1cm47IH1cbiAgICBpZiAoaW5zdGFuY2UuY29tcGxldGVkKSB7IGluc3RhbmNlLnJlc2V0KCk7IH1cbiAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgcmVzZXRUaW1lKCk7XG4gICAgZW5naW5lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XG4gICAgaW5zdGFuY2UuY29tcGxldGVkID0gaW5zdGFuY2UucmV2ZXJzZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgcmVzZXRUaW1lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVzdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RhbmNlLnJlc2V0KCk7XG4gICAgaW5zdGFuY2UucGxheSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJlbW92ZSA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcbiAgICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVzZXQoKTtcblxuICBpZiAoaW5zdGFuY2UuYXV0b3BsYXkpIHsgaW5zdGFuY2UucGxheSgpOyB9XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xuXG59XG5cbi8vIFJlbW92ZSB0YXJnZXRzIGZyb20gYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpIHtcbiAgZm9yICh2YXIgYSA9IGFuaW1hdGlvbnMubGVuZ3RoOyBhLS07KSB7XG4gICAgaWYgKGFycmF5Q29udGFpbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zW2FdLmFuaW1hdGFibGUudGFyZ2V0KSkge1xuICAgICAgYW5pbWF0aW9ucy5zcGxpY2UoYSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSkge1xuICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gIHZhciBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xuICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKTtcbiAgZm9yICh2YXIgYyA9IGNoaWxkcmVuLmxlbmd0aDsgYy0tOykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2NdO1xuICAgIHZhciBjaGlsZEFuaW1hdGlvbnMgPSBjaGlsZC5hbmltYXRpb25zO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGNoaWxkQW5pbWF0aW9ucyk7XG4gICAgaWYgKCFjaGlsZEFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZC5jaGlsZHJlbi5sZW5ndGgpIHsgY2hpbGRyZW4uc3BsaWNlKGMsIDEpOyB9XG4gIH1cbiAgaWYgKCFhbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7IGluc3RhbmNlLnBhdXNlKCk7IH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICBmb3IgKHZhciBpID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDsgaS0tOykge1xuICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcbiAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xuICB9XG59XG5cbi8vIFN0YWdnZXIgaGVscGVyc1xuXG5mdW5jdGlvbiBzdGFnZ2VyKHZhbCwgcGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiB8fCAnbm9ybWFsJztcbiAgdmFyIGVhc2luZyA9IHBhcmFtcy5lYXNpbmcgPyBwYXJzZUVhc2luZ3MocGFyYW1zLmVhc2luZykgOiBudWxsO1xuICB2YXIgZ3JpZCA9IHBhcmFtcy5ncmlkO1xuICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzO1xuICB2YXIgZnJvbUluZGV4ID0gcGFyYW1zLmZyb20gfHwgMDtcbiAgdmFyIGZyb21GaXJzdCA9IGZyb21JbmRleCA9PT0gJ2ZpcnN0JztcbiAgdmFyIGZyb21DZW50ZXIgPSBmcm9tSW5kZXggPT09ICdjZW50ZXInO1xuICB2YXIgZnJvbUxhc3QgPSBmcm9tSW5kZXggPT09ICdsYXN0JztcbiAgdmFyIGlzUmFuZ2UgPSBpcy5hcnIodmFsKTtcbiAgdmFyIHZhbDEgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMF0pIDogcGFyc2VGbG9hdCh2YWwpO1xuICB2YXIgdmFsMiA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFsxXSkgOiAwO1xuICB2YXIgdW5pdCA9IGdldFVuaXQoaXNSYW5nZSA/IHZhbFsxXSA6IHZhbCkgfHwgMDtcbiAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0IHx8IDAgKyAoaXNSYW5nZSA/IHZhbDEgOiAwKTtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICB2YXIgbWF4VmFsdWUgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKGVsLCBpLCB0KSB7XG4gICAgaWYgKGZyb21GaXJzdCkgeyBmcm9tSW5kZXggPSAwOyB9XG4gICAgaWYgKGZyb21DZW50ZXIpIHsgZnJvbUluZGV4ID0gKHQgLSAxKSAvIDI7IH1cbiAgICBpZiAoZnJvbUxhc3QpIHsgZnJvbUluZGV4ID0gdCAtIDE7IH1cbiAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKE1hdGguYWJzKGZyb21JbmRleCAtIGluZGV4KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZyb21YID0gIWZyb21DZW50ZXIgPyBmcm9tSW5kZXglZ3JpZFswXSA6IChncmlkWzBdLTEpLzI7XG4gICAgICAgICAgdmFyIGZyb21ZID0gIWZyb21DZW50ZXIgPyBNYXRoLmZsb29yKGZyb21JbmRleC9ncmlkWzBdKSA6IChncmlkWzFdLTEpLzI7XG4gICAgICAgICAgdmFyIHRvWCA9IGluZGV4JWdyaWRbMF07XG4gICAgICAgICAgdmFyIHRvWSA9IE1hdGguZmxvb3IoaW5kZXgvZ3JpZFswXSk7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IGZyb21YIC0gdG9YO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBmcm9tWSAtIHRvWTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBNYXRoLnNxcnQoZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZKTtcbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7IHZhbHVlID0gLWRpc3RhbmNlWDsgfVxuICAgICAgICAgIGlmIChheGlzID09PSAneScpIHsgdmFsdWUgPSAtZGlzdGFuY2VZOyB9XG4gICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG1heFZhbHVlID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChlYXNpbmcpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBlYXNpbmcodmFsIC8gbWF4VmFsdWUpICogbWF4VmFsdWU7IH0pOyB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncmV2ZXJzZScpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBheGlzID8gKHZhbCA8IDApID8gdmFsICogLTEgOiAtdmFsIDogTWF0aC5hYnMobWF4VmFsdWUgLSB2YWwpOyB9KTsgfVxuICAgIH1cbiAgICB2YXIgc3BhY2luZyA9IGlzUmFuZ2UgPyAodmFsMiAtIHZhbDEpIC8gbWF4VmFsdWUgOiB2YWwxO1xuICAgIHJldHVybiBzdGFydCArIChzcGFjaW5nICogKE1hdGgucm91bmQodmFsdWVzW2ldICogMTAwKSAvIDEwMCkpICsgdW5pdDtcbiAgfVxufVxuXG4vLyBUaW1lbGluZVxuXG5mdW5jdGlvbiB0aW1lbGluZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gIHZhciB0bCA9IGFuaW1lKHBhcmFtcyk7XG4gIHRsLmR1cmF0aW9uID0gMDtcbiAgdGwuYWRkID0gZnVuY3Rpb24oaW5zdGFuY2VQYXJhbXMsIHRpbWVsaW5lT2Zmc2V0KSB7XG4gICAgdmFyIHRsSW5kZXggPSBhY3RpdmVJbnN0YW5jZXMuaW5kZXhPZih0bCk7XG4gICAgdmFyIGNoaWxkcmVuID0gdGwuY2hpbGRyZW47XG4gICAgaWYgKHRsSW5kZXggPiAtMSkgeyBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKHRsSW5kZXgsIDEpOyB9XG4gICAgZnVuY3Rpb24gcGFzc1Rocm91Z2goaW5zKSB7IGlucy5wYXNzVGhyb3VnaCA9IHRydWU7IH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7IHBhc3NUaHJvdWdoKGNoaWxkcmVuW2ldKTsgfVxuICAgIHZhciBpbnNQYXJhbXMgPSBtZXJnZU9iamVjdHMoaW5zdGFuY2VQYXJhbXMsIHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKSk7XG4gICAgaW5zUGFyYW1zLnRhcmdldHMgPSBpbnNQYXJhbXMudGFyZ2V0cyB8fCBwYXJhbXMudGFyZ2V0cztcbiAgICB2YXIgdGxEdXJhdGlvbiA9IHRsLmR1cmF0aW9uO1xuICAgIGluc1BhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgIGluc1BhcmFtcy5kaXJlY3Rpb24gPSB0bC5kaXJlY3Rpb247XG4gICAgaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0ID0gaXMudW5kKHRpbWVsaW5lT2Zmc2V0KSA/IHRsRHVyYXRpb24gOiBnZXRSZWxhdGl2ZVZhbHVlKHRpbWVsaW5lT2Zmc2V0LCB0bER1cmF0aW9uKTtcbiAgICBwYXNzVGhyb3VnaCh0bCk7XG4gICAgdGwuc2VlayhpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQpO1xuICAgIHZhciBpbnMgPSBhbmltZShpbnNQYXJhbXMpO1xuICAgIHBhc3NUaHJvdWdoKGlucyk7XG4gICAgY2hpbGRyZW4ucHVzaChpbnMpO1xuICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGNoaWxkcmVuLCBwYXJhbXMpO1xuICAgIHRsLmRlbGF5ID0gdGltaW5ncy5kZWxheTtcbiAgICB0bC5lbmREZWxheSA9IHRpbWluZ3MuZW5kRGVsYXk7XG4gICAgdGwuZHVyYXRpb24gPSB0aW1pbmdzLmR1cmF0aW9uO1xuICAgIHRsLnNlZWsoMCk7XG4gICAgdGwucmVzZXQoKTtcbiAgICBpZiAodGwuYXV0b3BsYXkpIHsgdGwucGxheSgpOyB9XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuICByZXR1cm4gdGw7XG59XG5cbmFuaW1lLnZlcnNpb24gPSAnMy4yLjEnO1xuYW5pbWUuc3BlZWQgPSAxO1xuLy8gVE9ETzojcmV2aWV3OiBuYW1pbmcsIGRvY3VtZW50YXRpb25cbmFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4gPSB0cnVlO1xuYW5pbWUucnVubmluZyA9IGFjdGl2ZUluc3RhbmNlcztcbmFuaW1lLnJlbW92ZSA9IHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzO1xuYW5pbWUuZ2V0ID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZTtcbmFuaW1lLnNldCA9IHNldFRhcmdldHNWYWx1ZTtcbmFuaW1lLmNvbnZlcnRQeCA9IGNvbnZlcnRQeFRvVW5pdDtcbmFuaW1lLnBhdGggPSBnZXRQYXRoO1xuYW5pbWUuc2V0RGFzaG9mZnNldCA9IHNldERhc2hvZmZzZXQ7XG5hbmltZS5zdGFnZ2VyID0gc3RhZ2dlcjtcbmFuaW1lLnRpbWVsaW5lID0gdGltZWxpbmU7XG5hbmltZS5lYXNpbmcgPSBwYXJzZUVhc2luZ3M7XG5hbmltZS5wZW5uZXIgPSBwZW5uZXI7XG5hbmltZS5yYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IH07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1lO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBiYXJiYSBmcm9tICdAYmFyYmEvY29yZSc7XG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcy9saWIvYW5pbWUuZXMuanMnO1xuXG5mdW5jdGlvbiBsb2Nrc2NyZWVuKClcbntcbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gIGJvZHkuY2xhc3NOYW1lICs9IFwiIGxvY2stc2NyZWVuXCI7XG4gIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlLCBmYWxzZSk7XG59XG5mdW5jdGlvbiB1bmxvY2soKVxue1xuICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrLXNjcmVlblwiKTtcbiBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSk7XG59XG5cbi8vIGJhcmJhLmluaXQoe1xuLy8gICAgIGRlYnVnOiB0cnVlLFxuLy9cbi8vICAgICB0cmFuc2l0aW9uczogW3tcbi8vICAgICAgICAgLy9zeW5jOiB0cnVlLFxuLy8gICAgICAgICBsZWF2ZTogKGRhdGEpID0+IHtcbi8vICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4vLyAgICAgICAgICAgICB1bmxvY2soKTtcbi8vICAgICAgICAgICAgIGFuaW1lKHtcbi8vICAgICAgICAgICAgICAgICB0YXJnZXRzOiBkYXRhLmN1cnJlbnQuY29udGFpbmVyLFxuLy8gICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMDAsIDEwMDBdLFxuLy8gICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJyxcbi8vICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGVudGVyOiAoZGF0YSkgPT4ge1xuLy8gICAgICAgICAgICAgbG9ja3NjcmVlbigpO1xuLy8gICAgICAgICAgICAgYW5pbWUoe1xuLy8gICAgICAgICAgICAgICAgIHRhcmdldHM6IGRhdGEubmV4dC5jb250YWluZXIsXG4vLyAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogWzEwMDAsIDEwMF0sXG4vLyAgICAgICAgICAgICAgICAgZWFzaW5nOiAnc3ByaW5nKDEsIDgwLCAxMCwgMCknLFxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGJlZm9yZU9uY2U6IChkYXRhKSA9PiB7XG4vLyAgICAgICAgICAgY29uc29sZS5sb2coXCJvbmNlIVwiKVxuLy9cbi8vICAgICAgICAgICBkYXRhLm5leHQuY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgxMDBweClcIlxuLy8gICAgICAgICAgIC8vIGFuaW1lKHtcbi8vICAgICAgICAgICAvLyAgICAgdGFyZ2V0czogZGF0YS5uZXh0LmNvbnRhaW5lcixcbi8vICAgICAgICAgICAvLyAgICAgdHJhbnNsYXRlWTogWzEwMDAsIDEwMF0sXG4vLyAgICAgICAgICAgLy8gICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJyxcbi8vICAgICAgICAgICAvLyB9KTtcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgb25jZTogKGRhdGEpID0+IHtcbi8vXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGFmdGVyT25jZTogKGRhdGEpID0+IHtcbi8vICAgICAgICAgICAvL2xvY2tzY3JlZW4oKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0se1xuLy8gICAgICAgbmFtZTogJ3RvLWhvbWUnLFxuLy8gICAgICAgdG86IHsgbmFtZXNwYWNlOiBbJ2hvbWUnXSB9LFxuLy8gICAgICAgbGVhdmU6IChkYXRhKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbi8vICAgICAgICAgICAgICAgYW5pbWUoe1xuLy8gICAgICAgICAgICAgICAgICAgdGFyZ2V0czogZGF0YS5jdXJyZW50LmNvbnRhaW5lcixcbi8vICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMDAsIDEwMDBdLFxuLy8gICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnc3ByaW5nKDEsIDgwLCAxMCwgMCknLFxuLy8gICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4vLyAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgIH0pO1xuLy8gICAgICAgfVxuLy8gICAgIH1dXG4vLyB9KTtcbi8vXG4vLyBiYXJiYS5ob29rcy5lbnRlcigoZGF0YSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhkYXRhLm5leHQubmFtZXNwYWNlKTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbIlN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsIl9jYXRjaCIsImJvZHkiLCJyZWNvdmVyIiwicmVzdWx0IiwiZSIsInRoZW4iLCJMb2dMZXZlbHMiLCJfbGV2ZWwiLCJvZmYiLCJMb2dnZXIiLCJnZXRMZXZlbCIsInNldExldmVsIiwibmFtZSIsInNvdXJjZSIsInRoaXMiLCJfc291cmNlIiwiZXJyb3IiLCJvYmplY3RzIiwiX2xvZyIsImNvbnNvbGUiLCJ3YXJuIiwid2FybmluZyIsImluZm8iLCJkZWJ1ZyIsImxvZyIsImZuIiwibGV2ZWwiLCJhcHBseSIsImNvbmNhdCIsIkhvb2tNZXRob2RzIiwicGF0aFRvUmVnZXhwIiwicmVnZXhwVG9GdW5jdGlvbiIsInBhcnNlIiwidG9rZW5zVG9GdW5jdGlvbiIsInRva2Vuc1RvUmVnRXhwIiwiREVGQVVMVF9ERUxJTUlURVIiLCJQQVRIX1JFR0VYUCIsIlJlZ0V4cCIsImpvaW4iLCJzdHIiLCJvcHRpb25zIiwidG9rZW5zIiwia2V5IiwiaW5kZXgiLCJwYXRoIiwiZGVmYXVsdERlbGltaXRlciIsImRlbGltaXRlciIsIndoaXRlbGlzdCIsInVuZGVmaW5lZCIsInBhdGhFc2NhcGVkIiwicmVzIiwiZXhlYyIsIm0iLCJlc2NhcGVkIiwib2Zmc2V0Iiwic2xpY2UiLCJsZW5ndGgiLCJwcmV2IiwiY2FwdHVyZSIsImdyb3VwIiwibW9kaWZpZXIiLCJrIiwiYyIsImluZGV4T2YiLCJwdXNoIiwicGF0dGVybiIsInByZWZpeCIsIm9wdGlvbmFsIiwicmVwZWF0IiwiZXNjYXBlR3JvdXAiLCJlc2NhcGVTdHJpbmciLCJzdWJzdHIiLCJrZXlzIiwicmUiLCJwYXRobmFtZSIsInBhcmFtcyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImkiLCJzcGxpdCIsIm1hcCIsInZhbHVlIiwibWF0Y2hlcyIsIkFycmF5IiwiZmxhZ3MiLCJkYXRhIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidmFsaWRhdGUiLCJ0b2tlbiIsInNlZ21lbnQiLCJpc0FycmF5IiwiVHlwZUVycm9yIiwiaiIsInRlc3QiLCJTdHJpbmciLCJyZXBsYWNlIiwic2Vuc2l0aXZlIiwiZ3JvdXBzIiwibWF0Y2giLCJwYXJ0cyIsInN0cmljdCIsInN0YXJ0IiwiZW5kIiwiZW5kc1dpdGgiLCJyb3V0ZSIsImVuZFRva2VuIiwiaXNFbmREZWxpbWl0ZWQiLCJyZWdleHBUb1JlZ2V4cCIsImFycmF5VG9SZWdleHAiLCJzdHJpbmdUb1JlZ2V4cCIsInNjaGVtYUF0dHJpYnV0ZSIsImNvbnRhaW5lciIsImhpc3RvcnkiLCJuYW1lc3BhY2UiLCJwcmV2ZW50Iiwid3JhcHBlciIsIkRPTVBhcnNlciIsInRvU3RyaW5nIiwiZWwiLCJvdXRlckhUTUwiLCJ0b0RvY3VtZW50IiwiaHRtbFN0cmluZyIsIl9wYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJ0b0VsZW1lbnQiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJnZXRIdG1sIiwiZG9jIiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0V3JhcHBlciIsInNjb3BlIiwicXVlcnlTZWxlY3RvciIsIl9hdHRyIiwiZ2V0Q29udGFpbmVyIiwicmVtb3ZlQ29udGFpbmVyIiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhZGRDb250YWluZXIiLCJleGlzdGluZ0NvbnRhaW5lciIsIl9pbnNlcnRBZnRlciIsImFwcGVuZENoaWxkIiwiZ2V0TmFtZXNwYWNlIiwibnMiLCJnZXRBdHRyaWJ1dGUiLCJnZXRIcmVmIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiaHJlZiIsImJhc2VWYWwiLCJyZXNvbHZlVXJsIiwidXJscyIsIm51bVVybHMiLCJFcnJvciIsImJhc2UiLCJhcmd1bWVudHMiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYSIsInJlc29sdmVkIiwibmV3Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJuZXh0U2libGluZyIsImRvbSIsImluaXQiLCJ1cmwiLCJfc2Vzc2lvbiIsInN0YXRlIiwic2Nyb2xsIiwieCIsIndpbmRvdyIsInNjcm9sbFgiLCJ5Iiwic2Nyb2xsWSIsIl9zdGF0ZXMiLCJfcG9pbnRlciIsIml0ZW0iLCJmcm9tIiwic3RhdGVzIiwicmVwbGFjZVN0YXRlIiwiY2hhbmdlIiwidHJpZ2dlciIsIl9nZXREaXJlY3Rpb24iLCJhZGQiLCJzaXplIiwiYWN0aW9uIiwiX2dldEFjdGlvbiIsInB1c2hTdGF0ZSIsInVwZGF0ZSIsImdldCIsInNldCIsInJlbW92ZSIsInNwbGljZSIsInBvcCIsImNsZWFyIiwibmV3U3RhdGVzIiwiYXR0ciIsImhhc0F0dHJpYnV0ZSIsImRpZmYiLCJNYXRoIiwiYWJzIiwicGFnZSIsIm5leHQiLCJodG1sIiwibmV4dERvY3VtZW50IiwidGl0bGUiLCJQcm9taXNlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVzb2x2ZSIsInB0ciIsImxvY2F0aW9uIiwiZ2V0T3JpZ2luIiwib3JpZ2luIiwiZ2V0UG9ydCIsInBvcnQiLCJwb3J0U3RyaW5nIiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJoYXNoIiwicXVlcnkiLCJoYXNoSW5kZXgiLCJxdWVyeUluZGV4IiwicGFyc2VRdWVyeSIsInJlZHVjZSIsImFjYyIsImNsZWFuIiwicmVxdWVzdCIsInR0bCIsInJlcXVlc3RFcnJvciIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzdGF0dXNUZXh0Iiwib250aW1lb3V0IiwiZXJyIiwib25lcnJvciIsIm9wZW4iLCJ0aW1lb3V0Iiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJvYmoiLCJydW5Bc3luYyIsImZ1bmMiLCJjdHgiLCJhcmdzIiwiYXN5bmMiLCJwcm9taXNlIiwiYW5zd2VyIiwiaXNQcm9taXNlIiwiX3RoaXMiLCJNYXAiLCJyZWdpc3RlcmVkIiwiYWxsIiwiZm9yRWFjaCIsIl90aGlzMiIsImhvb2siLCJoYXMiLCJTZXQiLCJjaGFpbiIsIl90aGlzMyIsImxvZ2dlciIsIl90aGlzNCIsImhlbHAiLCJob29rcyIsIklnbm9yZSIsImlnbm9yZSIsIl9pZ25vcmVBbGwiLCJwYXRocyIsIl9pZ25vcmVSZWdleGVzIiwicCIsImNoZWNrSHJlZiIsInNvbWUiLCJyZWdleCIsIkNhY2hlIiwiX3N0YXRlIiwiZ2V0UmVxdWVzdCIsImdldEFjdGlvbiIsImV4aXN0cyIsIm5ld1RhYiIsImV2ZW50Iiwid2hpY2giLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwiYmxhbmsiLCJ0YXJnZXQiLCJjb3JzRG9tYWluIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsImNvcnNQb3J0IiwiZG93bmxvYWQiLCJwcmV2ZW50U2VsZiIsInByZXZlbnRBbGwiLCJCb29sZWFuIiwiY2xvc2VzdCIsInNhbWVVcmwiLCJQcmV2ZW50IiwiY2hlY2siLCJzdWl0ZSIsInRlc3RzIiwicnVuIiwiY2hlY2tMaW5rIiwiQmFyYmFFcnJvciIsImxhYmVsIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJTdG9yZSIsInR5cGUiLCJ0cmFuc2l0aW9ucyIsIl9ydWxlcyIsInBvc2l0aW9uIiwiZmlsdGVycyIsIm9uY2UiLCJzZWxmIiwiZmlsdGVyIiwidCIsIm1hdGNoaW5nIiwiYWN0aXZlIiwiZmluZCIsInZhbGlkIiwicmV2ZXJzZSIsIl9jaGVjayIsInJ1bGUiLCJ0byIsImFjdGl2ZU1hdGNoIiwidHJhbnNpdGlvblR5cGUiLCJpbmZvcyIsIk9iamVjdCIsIl9hZGRQcmlvcml0eSIsInNvcnQiLCJiIiwicHJpb3JpdHkiLCJsZWF2ZSIsImVudGVyIiwidHJhbnNpdGlvbiIsImRpcmVjdGlvbiIsImlzVmFsaWQiLCJoYXNNYXRjaCIsInN0clJ1bGUiLCJvYmpSdWxlIiwiZm5OYW1lIiwiY3VycmVudCIsIm5hbWVzIiwiX2NhbGN1bGF0ZVByaW9yaXR5IiwicnVsZU5hbWUiLCJydWxlSW5kZXgiLCJwb3ciLCJUcmFuc2l0aW9ucyIsInN0b3JlIiwiX3J1bm5pbmciLCJzeW5jIiwiZG9PbmNlIiwiX2RvQXN5bmNIb29rIiwiZG9QYWdlIiwiaGVscGVycyIsIl9pc1RyYW5zaXRpb25FcnJvciIsImxlYXZlUmVzdWx0IiwidmFsdWVzIiwibWVzc2FnZSIsIlZpZXdzIiwidmlld3MiLCJieU5hbWVzcGFjZSIsInZpZXciLCJfY3JlYXRlSG9vayIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsInMiLCJwYXJlbnRFbGVtZW50Iiwibm9kZVR5cGUiLCJzY2hlbWFQYWdlIiwidmVyc2lvbiIsInVzZSIsInBsdWdpbiIsImluc3RhbGxlZFBsdWdpbnMiLCJwbHVnaW5zIiwiaW5zdGFsbCIsInNjaGVtYSIsImNhY2hlSWdub3JlIiwicHJlZmV0Y2hJZ25vcmUiLCJwcmV2ZW50UnVubmluZyIsInByZXZlbnRDdXN0b20iLCJsb2dMZXZlbCIsIl9yZXF1ZXN0Q3VzdG9tRXJyb3IiLCJfd3JhcHBlciIsInNldEF0dHJpYnV0ZSIsIl9yZXNldERhdGEiLCJjYWNoZSIsIl9vbkxpbmtFbnRlciIsImJpbmQiLCJfb25MaW5rQ2xpY2siLCJfb25TdGF0ZUNoYW5nZSIsIl9iaW5kIiwib25jZURhdGEiLCJkZXN0cm95IiwiX3VuYmluZCIsIl9kYXRhIiwiZm9yY2UiLCJhc3NpZ24iLCJnbyIsImlzUnVubmluZyIsImdldFBhdGgiLCJoYXNTZWxmIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJyZWFkeURhdGEiLCJoYXNPbmNlIiwib25SZXF1ZXN0RXJyb3IiLCJzaG91bGRXYWl0IiwicmVzcG9uc2UiLCJwcmVmZXRjaCIsIl90aGlzNSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGluayIsIl9nZXRMaW5rRWxlbWVudCIsIl90aGlzNiIsImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwiYmVnaW4iLCJsb29wQmVnaW4iLCJjaGFuZ2VCZWdpbiIsImNoYW5nZUNvbXBsZXRlIiwibG9vcENvbXBsZXRlIiwiY29tcGxldGUiLCJsb29wIiwiYXV0b3BsYXkiLCJ0aW1lbGluZU9mZnNldCIsImRlZmF1bHRUd2VlblNldHRpbmdzIiwiZHVyYXRpb24iLCJkZWxheSIsImVuZERlbGF5IiwiZWFzaW5nIiwicm91bmQiLCJ2YWxpZFRyYW5zZm9ybXMiLCJDU1MiLCJzcHJpbmdzIiwibWluTWF4IiwidmFsIiwibWluIiwibWF4Iiwic3RyaW5nQ29udGFpbnMiLCJ0ZXh0IiwiYXBwbHlBcmd1bWVudHMiLCJpcyIsImFyciIsImNhbGwiLCJwdGgiLCJoYXNPd25Qcm9wZXJ0eSIsInN2ZyIsIlNWR0VsZW1lbnQiLCJpbnAiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm5jIiwidW5kIiwibmlsIiwiaGV4IiwicmdiIiwiaHNsIiwiY29sIiwicGFyc2VFYXNpbmdQYXJhbWV0ZXJzIiwic3RyaW5nIiwicGFyc2VGbG9hdCIsInNwcmluZyIsIm1hc3MiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidmVsb2NpdHkiLCJ3MCIsInNxcnQiLCJ6ZXRhIiwid2QiLCJzb2x2ZXIiLCJwcm9ncmVzcyIsImV4cCIsImNvcyIsInNpbiIsImdldER1cmF0aW9uIiwiY2FjaGVkIiwiZnJhbWUiLCJlbGFwc2VkIiwicmVzdCIsInN0ZXBzIiwiY2VpbCIsImJlemllciIsImtTcGxpbmVUYWJsZVNpemUiLCJrU2FtcGxlU3RlcFNpemUiLCJBIiwiYUExIiwiYUEyIiwiQiIsIkMiLCJjYWxjQmV6aWVyIiwiYVQiLCJnZXRTbG9wZSIsImJpbmFyeVN1YmRpdmlkZSIsImFYIiwiYUEiLCJhQiIsIm1YMSIsIm1YMiIsImN1cnJlbnRYIiwiY3VycmVudFQiLCJuZXd0b25SYXBoc29uSXRlcmF0ZSIsImFHdWVzc1QiLCJjdXJyZW50U2xvcGUiLCJtWTEiLCJtWTIiLCJzYW1wbGVWYWx1ZXMiLCJGbG9hdDMyQXJyYXkiLCJnZXRURm9yWCIsImludGVydmFsU3RhcnQiLCJjdXJyZW50U2FtcGxlIiwibGFzdFNhbXBsZSIsImRpc3QiLCJndWVzc0ZvclQiLCJpbml0aWFsU2xvcGUiLCJwZW5uZXIiLCJlYXNlcyIsImxpbmVhciIsImZ1bmN0aW9uRWFzaW5ncyIsIlNpbmUiLCJQSSIsIkNpcmMiLCJCYWNrIiwiQm91bmNlIiwicG93MiIsIkVsYXN0aWMiLCJhbXBsaXR1ZGUiLCJwZXJpb2QiLCJhc2luIiwiYmFzZUVhc2luZ3MiLCJlYXNlSW4iLCJwYXJzZUVhc2luZ3MiLCJlYXNlIiwic2VsZWN0U3RyaW5nIiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlsdGVyQXJyYXkiLCJjYWxsYmFjayIsImxlbiIsInRoaXNBcmciLCJmbGF0dGVuQXJyYXkiLCJ0b0FycmF5IiwibyIsIk5vZGVMaXN0IiwiSFRNTENvbGxlY3Rpb24iLCJhcnJheUNvbnRhaW5zIiwiY2xvbmVPYmplY3QiLCJjbG9uZSIsInJlcGxhY2VPYmplY3RQcm9wcyIsIm8xIiwibzIiLCJtZXJnZU9iamVjdHMiLCJyZ2JUb1JnYmEiLCJyZ2JWYWx1ZSIsImhleFRvUmdiYSIsImhleFZhbHVlIiwicmd4IiwiciIsImciLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJsIiwiaHVlMnJnYiIsInEiLCJjb2xvclRvUmdiIiwiZ2V0VW5pdCIsImdldFRyYW5zZm9ybVVuaXQiLCJwcm9wTmFtZSIsImdldEZ1bmN0aW9uVmFsdWUiLCJhbmltYXRhYmxlIiwiaWQiLCJ0b3RhbCIsInByb3AiLCJjb252ZXJ0UHhUb1VuaXQiLCJ1bml0IiwidmFsdWVVbml0IiwiYmFzZWxpbmUiLCJ0ZW1wRWwiLCJwYXJlbnRFbCIsInN0eWxlIiwid2lkdGgiLCJmYWN0b3IiLCJvZmZzZXRXaWR0aCIsImNvbnZlcnRlZFVuaXQiLCJnZXRDU1NWYWx1ZSIsInVwcGVyY2FzZVByb3BOYW1lIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJnZXRBbmltYXRpb25UeXBlIiwiZ2V0RWxlbWVudFRyYW5zZm9ybXMiLCJ0cmFuc2Zvcm0iLCJyZWciLCJ0cmFuc2Zvcm1zIiwiZ2V0VHJhbnNmb3JtVmFsdWUiLCJkZWZhdWx0VmFsIiwibGlzdCIsImdldE9yaWdpbmFsVGFyZ2V0VmFsdWUiLCJnZXRSZWxhdGl2ZVZhbHVlIiwib3BlcmF0b3IiLCJ1IiwidmFsaWRhdGVWYWx1ZSIsIm9yaWdpbmFsVW5pdCIsInVuaXRMZXNzIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0Q2lyY2xlTGVuZ3RoIiwiZ2V0UmVjdExlbmd0aCIsImdldExpbmVMZW5ndGgiLCJnZXRQb2x5bGluZUxlbmd0aCIsInBvaW50cyIsInRvdGFsTGVuZ3RoIiwicHJldmlvdXNQb3MiLCJudW1iZXJPZkl0ZW1zIiwiY3VycmVudFBvcyIsImdldEl0ZW0iLCJnZXRQb2x5Z29uTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJzZXREYXNob2Zmc2V0IiwicGF0aExlbmd0aCIsImdldFBhcmVudFN2Z0VsIiwiZ2V0UGFyZW50U3ZnIiwicGF0aEVsIiwic3ZnRGF0YSIsInBhcmVudFN2Z0VsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdCb3hBdHRyIiwiaGVpZ2h0Iiwidmlld0JveCIsInciLCJ2VyIsInZIIiwicGVyY2VudCIsInByb3BlcnR5IiwiZ2V0UGF0aFByb2dyZXNzIiwiaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHIiwicG9pbnQiLCJnZXRQb2ludEF0TGVuZ3RoIiwicDAiLCJzY2FsZVgiLCJzY2FsZVkiLCJhdGFuMiIsImRlY29tcG9zZVZhbHVlIiwib3JpZ2luYWwiLCJudW1iZXJzIiwiTnVtYmVyIiwic3RyaW5ncyIsInBhcnNlVGFyZ2V0cyIsInRhcmdldHMiLCJ0YXJnZXRzQXJyYXkiLCJwb3MiLCJnZXRBbmltYXRhYmxlcyIsInBhcnNlZCIsIm5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zIiwidHdlZW5TZXR0aW5ncyIsInNldHRpbmdzIiwiaXNGcm9tVG8iLCJwcm9wQXJyYXkiLCJ2IiwiZmxhdHRlbktleWZyYW1lcyIsImtleWZyYW1lcyIsInByb3BlcnR5TmFtZXMiLCJwcm9wZXJ0aWVzIiwibmV3S2V5IiwiZ2V0UHJvcGVydGllcyIsInR3ZWVucyIsIm5vcm1hbGl6ZVR3ZWVuVmFsdWVzIiwidHdlZW4iLCJub3JtYWxpemVUd2VlbnMiLCJwcmV2aW91c1R3ZWVuIiwidHdlZW5WYWx1ZSIsInRvVW5pdCIsIm9yaWdpbmFsVmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwiZnJvbVVuaXQiLCJpc1BhdGgiLCJpc0NvbG9yIiwic2V0UHJvZ3Jlc3NWYWx1ZSIsImNzcyIsImF0dHJpYnV0ZSIsIm9iamVjdCIsIm1hbnVhbCIsImxhc3QiLCJzZXRUYXJnZXRzVmFsdWUiLCJhbmltYXRhYmxlcyIsImFuaW1UeXBlIiwiY3JlYXRlQW5pbWF0aW9uIiwibGFzdFR3ZWVuIiwiZ2V0QW5pbWF0aW9ucyIsImdldEluc3RhbmNlVGltaW5ncyIsImFuaW1hdGlvbnMiLCJhbmltTGVuZ3RoIiwiZ2V0VGxPZmZzZXQiLCJhbmltIiwidGltaW5ncyIsImluc3RhbmNlSUQiLCJjcmVhdGVOZXdJbnN0YW5jZSIsImluc3RhbmNlU2V0dGluZ3MiLCJjaGlsZHJlbiIsImFjdGl2ZUluc3RhbmNlcyIsImVuZ2luZSIsInJhZiIsInBsYXkiLCJpc0RvY3VtZW50SGlkZGVuIiwiYW5pbWUiLCJzdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuIiwic3RlcCIsImFjdGl2ZUluc3RhbmNlc0xlbmd0aCIsImFjdGl2ZUluc3RhbmNlIiwicGF1c2VkIiwidGljayIsImhhbmRsZVZpc2liaWxpdHlDaGFuZ2UiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImluc3RhbmNlIiwiX29uRG9jdW1lbnRWaXNpYmlsaXR5IiwiaGlkZGVuIiwic3RhcnRUaW1lIiwibGFzdFRpbWUiLCJub3ciLCJjaGlsZHJlbkxlbmd0aCIsIm1ha2VQcm9taXNlIiwiX3Jlc29sdmUiLCJmaW5pc2hlZCIsInRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uIiwicmV2ZXJzZWQiLCJjaGlsZCIsImFkanVzdFRpbWUiLCJ0aW1lIiwicmVzZXRUaW1lIiwiY3VycmVudFRpbWUiLCJzcGVlZCIsInNlZWtDaGlsZCIsInNlZWsiLCJzeW5jSW5zdGFuY2VDaGlsZHJlbiIsInJldmVyc2VQbGF5YmFjayIsImkkMSIsInNldEFuaW1hdGlvbnNQcm9ncmVzcyIsImluc1RpbWUiLCJhbmltYXRpb25zTGVuZ3RoIiwidHdlZW5MZW5ndGgiLCJlYXNlZCIsImlzTmFOIiwidG9OdW1iZXJzTGVuZ3RoIiwibiIsInRvTnVtYmVyIiwiZnJvbU51bWJlciIsInN0cmluZ3NMZW5ndGgiLCJuJDEiLCJjdXJyZW50VmFsdWUiLCJzZXRDYWxsYmFjayIsImNiIiwicGFzc1Rocm91Z2giLCJjb3VudEl0ZXJhdGlvbiIsInJlbWFpbmluZyIsInNldEluc3RhbmNlUHJvZ3Jlc3MiLCJlbmdpbmVUaW1lIiwiaW5zRHVyYXRpb24iLCJpbnNEZWxheSIsImluc0VuZERlbGF5IiwiYmVnYW4iLCJsb29wQmVnYW4iLCJjaGFuZ2VCZWdhbiIsImNoYW5nZUNvbXBsZXRlZCIsImNvbXBsZXRlZCIsInJlc2V0IiwicGF1c2UiLCJyZXN0YXJ0IiwicmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSIsInJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyIsImNoaWxkQW5pbWF0aW9ucyIsInJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzIiwic3RhZ2dlciIsImdyaWQiLCJheGlzIiwiZnJvbUluZGV4IiwiZnJvbUZpcnN0IiwiZnJvbUNlbnRlciIsImZyb21MYXN0IiwiaXNSYW5nZSIsInZhbDEiLCJ2YWwyIiwibWF4VmFsdWUiLCJmcm9tWCIsImZyb21ZIiwiZmxvb3IiLCJ0b1giLCJ0b1kiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcGFjaW5nIiwidGltZWxpbmUiLCJ0bCIsImluc3RhbmNlUGFyYW1zIiwidGxJbmRleCIsImlucyIsImluc1BhcmFtcyIsInRsRHVyYXRpb24iLCJydW5uaW5nIiwiY29udmVydFB4IiwicmFuZG9tIiwiYmFyYmEiLCJsb2Nrc2NyZWVuIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc05hbWUiLCJoYW5kbGVUb3VjaE1vdmUiLCJ1bmxvY2siLCJjbGFzc0xpc3QiXSwic291cmNlUm9vdCI6IiJ9