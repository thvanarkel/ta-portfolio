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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWFzeW5jLXRvLXByb21pc2VzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy9tb2R1bGVzL0xvZ2dlci50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL2RlZnMvaG9va3MudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3NjaGVtYXMvYXR0cmlidXRlLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvdXRpbHMvaGlzdG9yeS50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy91dGlscy91cmwudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy91dGlscy9yZXF1ZXN0LnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXMtcHJvbWlzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3V0aWxzL3J1bi1hc3luYy50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL2hvb2tzLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvbW9kdWxlcy9JZ25vcmUudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy9tb2R1bGVzL0NhY2hlLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvbW9kdWxlcy9QcmV2ZW50LnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvbW9kdWxlcy9FcnJvci50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL21vZHVsZXMvU3RvcmUudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy9tb2R1bGVzL1RyYW5zaXRpb25zLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvbW9kdWxlcy9WaWV3cy50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3BvbHlmaWxscy9pbmRleC50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3NjaGVtYXMvcGFnZS50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL2NvcmUudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2FuaW1lanMvbGliL2FuaW1lLmVzLmpzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi90aGVtZXMvdGEtcG9ydGZvbGlvL3NyYy9qcy9jb21wb25lbnRzL3RyYW5zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQSB0eXBlIG9mIHByb21pc2UtbGlrZSB0aGF0IHJlc29sdmVzIHN5bmNocm9ub3VzbHkgYW5kIHN1cHBvcnRzIG9ubHkgb25lIG9ic2VydmVyXG5leHBvcnQgY29uc3QgX1BhY3QgPSAvKiNfX1BVUkVfXyovKGZ1bmN0aW9uKCkge1xuXHRmdW5jdGlvbiBfUGFjdCgpIHt9XG5cdF9QYWN0LnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcblx0XHRjb25zdCByZXN1bHQgPSBuZXcgX1BhY3QoKTtcblx0XHRjb25zdCBzdGF0ZSA9IHRoaXMucztcblx0XHRpZiAoc3RhdGUpIHtcblx0XHRcdGNvbnN0IGNhbGxiYWNrID0gc3RhdGUgJiAxID8gb25GdWxmaWxsZWQgOiBvblJlamVjdGVkO1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDEsIGNhbGxiYWNrKHRoaXMudikpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDIsIGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5vID0gZnVuY3Rpb24oX3RoaXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gX3RoaXMudjtcblx0XHRcdFx0aWYgKF90aGlzLnMgJiAxKSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDEsIG9uRnVsZmlsbGVkID8gb25GdWxmaWxsZWQodmFsdWUpIDogdmFsdWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG9uUmVqZWN0ZWQpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMSwgb25SZWplY3RlZCh2YWx1ZSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAyLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDIsIGUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRyZXR1cm4gX1BhY3Q7XG59KSgpO1xuXG4vLyBTZXR0bGVzIGEgcGFjdCBzeW5jaHJvbm91c2x5XG5leHBvcnQgZnVuY3Rpb24gX3NldHRsZShwYWN0LCBzdGF0ZSwgdmFsdWUpIHtcblx0aWYgKCFwYWN0LnMpIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBfUGFjdCkge1xuXHRcdFx0aWYgKHZhbHVlLnMpIHtcblx0XHRcdFx0aWYgKHN0YXRlICYgMSkge1xuXHRcdFx0XHRcdHN0YXRlID0gdmFsdWUucztcblx0XHRcdFx0fVxuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnY7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZS5vID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIHN0YXRlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodmFsdWUgJiYgdmFsdWUudGhlbikge1xuXHRcdFx0dmFsdWUudGhlbihfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgc3RhdGUpLCBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgMikpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRwYWN0LnMgPSBzdGF0ZTtcblx0XHRwYWN0LnYgPSB2YWx1ZTtcblx0XHRjb25zdCBvYnNlcnZlciA9IHBhY3Qubztcblx0XHRpZiAob2JzZXJ2ZXIpIHtcblx0XHRcdG9ic2VydmVyKHBhY3QpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2lzU2V0dGxlZFBhY3QodGhlbmFibGUpIHtcblx0cmV0dXJuIHRoZW5hYmxlIGluc3RhbmNlb2YgX1BhY3QgJiYgdGhlbmFibGUucyAmIDE7XG59XG5cbi8vIENvbnZlcnRzIGFyZ3VtZW50IHRvIGEgZnVuY3Rpb24gdGhhdCBhbHdheXMgcmV0dXJucyBhIFByb21pc2VcbmV4cG9ydCBmdW5jdGlvbiBfYXN5bmMoZikge1xuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0Zm9yICh2YXIgYXJncyA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0YXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoZi5hcHBseSh0aGlzLCBhcmdzKSk7XG5cdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIEF3YWl0cyBvbiBhIHZhbHVlIHRoYXQgbWF5IG9yIG1heSBub3QgYmUgYSBQcm9taXNlIChlcXVpdmFsZW50IHRvIHRoZSBhd2FpdCBrZXl3b3JkIGluIEVTMjAxNSwgd2l0aCBjb250aW51YXRpb25zIHBhc3NlZCBleHBsaWNpdGx5KVxuZXhwb3J0IGZ1bmN0aW9uIF9hd2FpdCh2YWx1ZSwgdGhlbiwgZGlyZWN0KSB7XG5cdGlmIChkaXJlY3QpIHtcblx0XHRyZXR1cm4gdGhlbiA/IHRoZW4odmFsdWUpIDogdmFsdWU7XG5cdH1cblx0aWYgKCF2YWx1ZSB8fCAhdmFsdWUudGhlbikge1xuXHRcdHZhbHVlID0gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdGhlbiA/IHZhbHVlLnRoZW4odGhlbikgOiB2YWx1ZTtcbn1cblxuLy8gQXdhaXRzIG9uIGEgdmFsdWUgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBhIFByb21pc2UsIHRoZW4gaWdub3JlcyBpdFxuZXhwb3J0IGZ1bmN0aW9uIF9hd2FpdElnbm9yZWQodmFsdWUsIGRpcmVjdCkge1xuXHRpZiAoIWRpcmVjdCkge1xuXHRcdHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfZW1wdHkpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cbn1cblxuLy8gUHJvY2VlZHMgYWZ0ZXIgYSB2YWx1ZSBoYXMgcmVzb2x2ZWQsIG9yIHByb2NlZWRzIGltbWVkaWF0ZWx5IGlmIHRoZSB2YWx1ZSBpcyBub3QgdGhlbmFibGVcbmV4cG9ydCBmdW5jdGlvbiBfY29udGludWUodmFsdWUsIHRoZW4pIHtcblx0cmV0dXJuIHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKHRoZW4pIDogdGhlbih2YWx1ZSk7XG59XG5cbi8vIFByb2NlZWRzIGFmdGVyIGEgdmFsdWUgaGFzIHJlc29sdmVkLCBvciBwcm9jZWVkcyBpbW1lZGlhdGVseSBpZiB0aGUgdmFsdWUgaXMgbm90IHRoZW5hYmxlXG5leHBvcnQgZnVuY3Rpb24gX2NvbnRpbnVlSWdub3JlZCh2YWx1ZSkge1xuXHRpZiAodmFsdWUgJiYgdmFsdWUudGhlbikge1xuXHRcdHJldHVybiB2YWx1ZS50aGVuKF9lbXB0eSk7XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSB0aHJvdWdoIGFuIG9iamVjdCB0aGF0IGhhcyBhIGxlbmd0aCBwcm9wZXJ0eSwgcGFzc2luZyB0aGUgaW5kZXggYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayAoZXZlbiBhcyB0aGUgbGVuZ3RoIHByb3BlcnR5IGNoYW5nZXMpXG5leHBvcnQgZnVuY3Rpb24gX2ZvclRvKGFycmF5LCBib2R5LCBjaGVjaykge1xuXHR2YXIgaSA9IC0xLCBwYWN0LCByZWplY3Q7XG5cdGZ1bmN0aW9uIF9jeWNsZShyZXN1bHQpIHtcblx0XHR0cnkge1xuXHRcdFx0d2hpbGUgKCsraSA8IGFycmF5Lmxlbmd0aCAmJiAoIWNoZWNrIHx8ICFjaGVjaygpKSkge1xuXHRcdFx0XHRyZXN1bHQgPSBib2R5KGkpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQudGhlbihfY3ljbGUsIHJlamVjdCB8fCAocmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QgPSBuZXcgX1BhY3QoKSwgMikpKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChwYWN0KSB7XG5cdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhY3QgPSByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0X3NldHRsZShwYWN0IHx8IChwYWN0ID0gbmV3IF9QYWN0KCkpLCAyLCBlKTtcblx0XHR9XG5cdH1cblx0X2N5Y2xlKCk7XG5cdHJldHVybiBwYWN0O1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0J3MgcHJvcGVydGllcyAoaW5jbHVkaW5nIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gdGhlIHByb3RvdHlwZSlcbi8vIFVzZXMgYSBzbmFwc2hvdCBvZiB0aGUgb2JqZWN0J3MgcHJvcGVydGllc1xuZXhwb3J0IGZ1bmN0aW9uIF9mb3JJbih0YXJnZXQsIGJvZHksIGNoZWNrKSB7XG5cdHZhciBrZXlzID0gW107XG5cdGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcblx0XHRrZXlzLnB1c2goa2V5KTtcblx0fVxuXHRyZXR1cm4gX2ZvclRvKGtleXMsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGJvZHkoa2V5c1tpXSk7IH0sIGNoZWNrKTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSB0aHJvdWdoIGFuIG9iamVjdCdzIG93biBwcm9wZXJ0aWVzIChleGNsdWRpbmcgcHJvcGVydGllcyBpbmhlcml0ZWQgZnJvbSB0aGUgcHJvdG90eXBlKVxuLy8gVXNlcyBhIHNuYXBzaG90IG9mIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzXG5leHBvcnQgZnVuY3Rpb24gX2Zvck93bih0YXJnZXQsIGJvZHksIGNoZWNrKSB7XG5cdHZhciBrZXlzID0gW107XG5cdGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSkge1xuXHRcdFx0a2V5cy5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBfZm9yVG8oa2V5cywgZnVuY3Rpb24oaSkgeyByZXR1cm4gYm9keShrZXlzW2ldKTsgfSwgY2hlY2spO1xufVxuXG5leHBvcnQgY29uc3QgX2l0ZXJhdG9yU3ltYm9sID0gLyojX19QVVJFX18qLyB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gKFN5bWJvbC5pdGVyYXRvciB8fCAoU3ltYm9sLml0ZXJhdG9yID0gU3ltYm9sKFwiU3ltYm9sLml0ZXJhdG9yXCIpKSkgOiBcIkBAaXRlcmF0b3JcIjtcblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSB0aHJvdWdoIGFuIG9iamVjdCdzIHZhbHVlc1xuLy8gVXNlcyBmb3IuLi5vZiBpZiB0aGUgcnVudGltZSBzdXBwb3J0cyBpdCwgb3RoZXJ3aXNlIGl0ZXJhdGVzIHVudGlsIGxlbmd0aCBvbiBhIGNvcHlcbmV4cG9ydCBmdW5jdGlvbiBfZm9yT2YodGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHRpZiAodHlwZW9mIHRhcmdldFtfaXRlcmF0b3JTeW1ib2xdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHR2YXIgaXRlcmF0b3IgPSB0YXJnZXRbX2l0ZXJhdG9yU3ltYm9sXSgpLCBzdGVwLCBwYWN0LCByZWplY3Q7XG5cdFx0ZnVuY3Rpb24gX2N5Y2xlKHJlc3VsdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0d2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSAmJiAoIWNoZWNrIHx8ICFjaGVjaygpKSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGJvZHkoc3RlcC52YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQudGhlbihfY3ljbGUsIHJlamVjdCB8fCAocmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QgPSBuZXcgX1BhY3QoKSwgMikpKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocGFjdCkge1xuXHRcdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYWN0ID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdF9zZXR0bGUocGFjdCB8fCAocGFjdCA9IG5ldyBfUGFjdCgpKSwgMiwgZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdF9jeWNsZSgpO1xuXHRcdGlmIChpdGVyYXRvci5yZXR1cm4pIHtcblx0XHRcdHZhciBfZml4dXAgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmICghc3RlcC5kb25lKSB7XG5cdFx0XHRcdFx0XHRpdGVyYXRvci5yZXR1cm4oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChwYWN0ICYmIHBhY3QudGhlbikge1xuXHRcdFx0XHRyZXR1cm4gcGFjdC50aGVuKF9maXh1cCwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdHRocm93IF9maXh1cChlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRfZml4dXAoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBhY3Q7XG5cdH1cblx0Ly8gTm8gc3VwcG9ydCBmb3IgU3ltYm9sLml0ZXJhdG9yXG5cdGlmICghKFwibGVuZ3RoXCIgaW4gdGFyZ2V0KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlXCIpO1xuXHR9XG5cdC8vIEhhbmRsZSBsaXZlIGNvbGxlY3Rpb25zIHByb3Blcmx5XG5cdHZhciB2YWx1ZXMgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXQubGVuZ3RoOyBpKyspIHtcblx0XHR2YWx1ZXMucHVzaCh0YXJnZXRbaV0pO1xuXHR9XG5cdHJldHVybiBfZm9yVG8odmFsdWVzLCBmdW5jdGlvbihpKSB7IHJldHVybiBib2R5KHZhbHVlc1tpXSk7IH0sIGNoZWNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IF9hc3luY0l0ZXJhdG9yU3ltYm9sID0gLyojX19QVVJFX18qLyB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gKFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IChTeW1ib2wuYXN5bmNJdGVyYXRvciA9IFN5bWJvbChcIlN5bWJvbC5hc3luY0l0ZXJhdG9yXCIpKSkgOiBcIkBAYXN5bmNJdGVyYXRvclwiO1xuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIG9uIGEgdmFsdWUgdXNpbmcgaXQncyBhc3luYyBpdGVyYXRvciBpZiBwcmVzZW50LCBvciBpdHMgc3luY2hyb25vdXMgaXRlcmF0b3IgaWYgbWlzc2luZ1xuZXhwb3J0IGZ1bmN0aW9uIF9mb3JBd2FpdE9mKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0aWYgKHR5cGVvZiB0YXJnZXRbX2FzeW5jSXRlcmF0b3JTeW1ib2xdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHR2YXIgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRcdHZhciBpdGVyYXRvciA9IHRhcmdldFtfYXN5bmNJdGVyYXRvclN5bWJvbF0oKTtcblx0XHRpdGVyYXRvci5uZXh0KCkudGhlbihfcmVzdW1lQWZ0ZXJOZXh0KS50aGVuKHZvaWQgMCwgX3JlamVjdCk7XG5cdFx0cmV0dXJuIHBhY3Q7XG5cdFx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keShyZXN1bHQpIHtcblx0XHRcdGlmIChjaGVjayAmJiBjaGVjaygpKSB7XG5cdFx0XHRcdHJldHVybiBfc2V0dGxlKHBhY3QsIDEsIGl0ZXJhdG9yLnJldHVybiA/IGl0ZXJhdG9yLnJldHVybigpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiByZXN1bHQ7IH0pIDogcmVzdWx0KTtcblx0XHRcdH1cblx0XHRcdGl0ZXJhdG9yLm5leHQoKS50aGVuKF9yZXN1bWVBZnRlck5leHQpLnRoZW4odm9pZCAwLCBfcmVqZWN0KTtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyTmV4dChzdGVwKSB7XG5cdFx0XHRpZiAoc3RlcC5kb25lKSB7XG5cdFx0XHRcdF9zZXR0bGUocGFjdCwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRQcm9taXNlLnJlc29sdmUoYm9keShzdGVwLnZhbHVlKSkudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgX3JlamVjdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIF9yZWplY3QoZXJyb3IpIHtcblx0XHRcdF9zZXR0bGUocGFjdCwgMiwgaXRlcmF0b3IucmV0dXJuID8gaXRlcmF0b3IucmV0dXJuKCkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGVycm9yOyB9KSA6IGVycm9yKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShfZm9yT2YodGFyZ2V0LCBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGJvZHkpOyB9LCBjaGVjaykpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBpbXBsZW1lbnQgYSBnZW5lcmljIGZvciBsb29wXG5leHBvcnQgZnVuY3Rpb24gX2Zvcih0ZXN0LCB1cGRhdGUsIGJvZHkpIHtcblx0dmFyIHN0YWdlO1xuXHRmb3IgKDs7KSB7XG5cdFx0dmFyIHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdHNob3VsZENvbnRpbnVlID0gc2hvdWxkQ29udGludWUudjtcblx0XHR9XG5cdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdHN0YWdlID0gMDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5zO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3RhZ2UgPSAxO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHVwZGF0ZSkge1xuXHRcdFx0dmFyIHVwZGF0ZVZhbHVlID0gdXBkYXRlKCk7XG5cdFx0XHRpZiAodXBkYXRlVmFsdWUgJiYgdXBkYXRlVmFsdWUudGhlbiAmJiAhX2lzU2V0dGxlZFBhY3QodXBkYXRlVmFsdWUpKSB7XG5cdFx0XHRcdHN0YWdlID0gMjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHZhciBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdHZhciByZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgMik7XG5cdChzdGFnZSA9PT0gMCA/IHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkgOiBzdGFnZSA9PT0gMSA/IHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpIDogdXBkYXRlVmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJVcGRhdGUpKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0cmV0dXJuIHBhY3Q7XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlckJvZHkodmFsdWUpIHtcblx0XHRyZXN1bHQgPSB2YWx1ZTtcblx0XHRkbyB7XG5cdFx0XHRpZiAodXBkYXRlKSB7XG5cdFx0XHRcdHVwZGF0ZVZhbHVlID0gdXBkYXRlKCk7XG5cdFx0XHRcdGlmICh1cGRhdGVWYWx1ZSAmJiB1cGRhdGVWYWx1ZS50aGVuICYmICFfaXNTZXR0bGVkUGFjdCh1cGRhdGVWYWx1ZSkpIHtcblx0XHRcdFx0XHR1cGRhdGVWYWx1ZS50aGVuKF9yZXN1bWVBZnRlclVwZGF0ZSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRcdGlmICghc2hvdWxkQ29udGludWUgfHwgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSAmJiAhc2hvdWxkQ29udGludWUudikpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hvdWxkQ29udGludWUudGhlbikge1xuXHRcdFx0XHRzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdH1cblx0XHR9IHdoaWxlICghcmVzdWx0IHx8ICFyZXN1bHQudGhlbik7XG5cdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVGVzdChzaG91bGRDb250aW51ZSkge1xuXHRcdGlmIChzaG91bGRDb250aW51ZSkge1xuXHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9yZXN1bWVBZnRlckJvZHkocmVzdWx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJVcGRhdGUoKSB7XG5cdFx0aWYgKHNob3VsZENvbnRpbnVlID0gdGVzdCgpKSB7XG5cdFx0XHRpZiAoc2hvdWxkQ29udGludWUudGhlbikge1xuXHRcdFx0XHRzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3Jlc3VtZUFmdGVyVGVzdChzaG91bGRDb250aW51ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHR9XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaW1wbGVtZW50IGEgZG8gLi4uIHdoaWxlIGxvb3BcbmV4cG9ydCBmdW5jdGlvbiBfZG8oYm9keSwgdGVzdCkge1xuXHR2YXIgYXdhaXRCb2R5O1xuXHRkbyB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF3YWl0Qm9keSA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgc2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0c2hvdWxkQ29udGludWUgPSBzaG91bGRDb250aW51ZS52O1xuXHRcdH1cblx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fSB3aGlsZSAoIXNob3VsZENvbnRpbnVlLnRoZW4pO1xuXHRjb25zdCBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdGNvbnN0IHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKTtcblx0KGF3YWl0Qm9keSA/IHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpIDogc2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdHJldHVybiBwYWN0O1xuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHZhbHVlKSB7XG5cdFx0cmVzdWx0ID0gdmFsdWU7XG5cdFx0Zm9yICg7Oykge1xuXHRcdFx0c2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlID0gc2hvdWxkQ29udGludWUudjtcblx0XHRcdH1cblx0XHRcdGlmICghc2hvdWxkQ29udGludWUpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hvdWxkQ29udGludWUudGhlbikge1xuXHRcdFx0XHRzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0fVxuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJUZXN0KHNob3VsZENvbnRpbnVlKSB7XG5cdFx0aWYgKHNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpKSB7XG5cdFx0XHRcdFx0c2hvdWxkQ29udGludWUgPSBzaG91bGRDb250aW51ZS52O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghc2hvdWxkQ29udGludWUpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9IHdoaWxlICghc2hvdWxkQ29udGludWUudGhlbik7XG5cdFx0XHRzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGltcGxlbWVudCBhIHN3aXRjaCBzdGF0ZW1lbnRcbmV4cG9ydCBmdW5jdGlvbiBfc3dpdGNoKGRpc2NyaW1pbmFudCwgY2FzZXMpIHtcblx0dmFyIGRpc3BhdGNoSW5kZXggPSAtMTtcblx0dmFyIGF3YWl0Qm9keTtcblx0b3V0ZXI6IHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdGVzdCA9IGNhc2VzW2ldWzBdO1xuXHRcdFx0aWYgKHRlc3QpIHtcblx0XHRcdFx0dmFyIHRlc3RWYWx1ZSA9IHRlc3QoKTtcblx0XHRcdFx0aWYgKHRlc3RWYWx1ZSAmJiB0ZXN0VmFsdWUudGhlbikge1xuXHRcdFx0XHRcdGJyZWFrIG91dGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0ZXN0VmFsdWUgPT09IGRpc2NyaW1pbmFudCkge1xuXHRcdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBGb3VuZCB0aGUgZGVmYXVsdCBjYXNlLCBzZXQgaXQgYXMgdGhlIHBlbmRpbmcgZGlzcGF0Y2ggY2FzZVxuXHRcdFx0XHRkaXNwYXRjaEluZGV4ID0gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGRpc3BhdGNoSW5kZXggIT09IC0xKSB7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHZhciBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHRcdHdoaWxlICghYm9keSkge1xuXHRcdFx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdFx0XHRib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRcdGF3YWl0Qm9keSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGZhbGx0aHJvdWdoQ2hlY2sgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsyXTtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0fSB3aGlsZSAoZmFsbHRocm91Z2hDaGVjayAmJiAhZmFsbHRocm91Z2hDaGVjaygpKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0Y29uc3QgcmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpO1xuXHQoYXdhaXRCb2R5ID8gcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkgOiB0ZXN0VmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdHJldHVybiBwYWN0O1xuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJUZXN0KHZhbHVlKSB7XG5cdFx0Zm9yICg7Oykge1xuXHRcdFx0aWYgKHZhbHVlID09PSBkaXNjcmltaW5hbnQpIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCsraSA9PT0gY2FzZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGlmIChkaXNwYXRjaEluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRlc3QgPSBjYXNlc1tpXVswXTtcblx0XHRcdGlmICh0ZXN0KSB7XG5cdFx0XHRcdHZhbHVlID0gdGVzdCgpO1xuXHRcdFx0XHRpZiAodmFsdWUgJiYgdmFsdWUudGhlbikge1xuXHRcdFx0XHRcdHZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4ID0gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZG8ge1xuXHRcdFx0dmFyIGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdHdoaWxlICghYm9keSkge1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHRcdGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdH1cblx0XHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuXHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdH0gd2hpbGUgKGZhbGx0aHJvdWdoQ2hlY2sgJiYgIWZhbGx0aHJvdWdoQ2hlY2soKSk7XG5cdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlckJvZHkocmVzdWx0KSB7XG5cdFx0Zm9yICg7Oykge1xuXHRcdFx0dmFyIGZhbGx0aHJvdWdoQ2hlY2sgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsyXTtcblx0XHRcdGlmICghZmFsbHRocm91Z2hDaGVjayB8fCBmYWxsdGhyb3VnaENoZWNrKCkpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHR2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0d2hpbGUgKCFib2R5KSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdFx0Ym9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBwYXNzIHRoZSByZXN1bHQgdG8gZXhwbGljaXRseSBwYXNzZWQgY29udGludWF0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIF9jYWxsKGJvZHksIHRoZW4sIGRpcmVjdCkge1xuXHRpZiAoZGlyZWN0KSB7XG5cdFx0cmV0dXJuIHRoZW4gPyB0aGVuKGJvZHkoKSkgOiBib2R5KCk7XG5cdH1cblx0dHJ5IHtcblx0XHR2YXIgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKGJvZHkoKSk7XG5cdFx0cmV0dXJuIHRoZW4gPyByZXN1bHQudGhlbih0aGVuKSA6IHJlc3VsdDtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHN3YWxsb3cgdGhlIHJlc3VsdFxuZXhwb3J0IGZ1bmN0aW9uIF9jYWxsSWdub3JlZChib2R5LCBkaXJlY3QpIHtcblx0cmV0dXJuIF9jYWxsKGJvZHksIF9lbXB0eSwgZGlyZWN0KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBwYXNzIHRoZSByZXN1bHQgdG8gZXhwbGljaXRseSBwYXNzZWQgY29udGludWF0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIF9pbnZva2UoYm9keSwgdGhlbikge1xuXHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKHRoZW4pO1xuXHR9XG5cdHJldHVybiB0aGVuKHJlc3VsdCk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc3dhbGxvdyB0aGUgcmVzdWx0XG5leHBvcnQgZnVuY3Rpb24gX2ludm9rZUlnbm9yZWQoYm9keSkge1xuXHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKF9lbXB0eSk7XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzZW5kIGVycm9ycyB0byByZWNvdmVyeSBjb250aW51YXRpb25cbmV4cG9ydCBmdW5jdGlvbiBfY2F0Y2goYm9keSwgcmVjb3Zlcikge1xuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdHJldHVybiByZWNvdmVyKGUpO1xuXHR9XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4odm9pZCAwLCByZWNvdmVyKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBhd2FpdCBhIHByb21pc2UgYW5kIHBhc3MgdGhlIHJlc3VsdCB0byBhIGZpbmFsbHkgY29udGludWF0aW9uXG5leHBvcnQgZnVuY3Rpb24gX2ZpbmFsbHlSZXRocm93cyhib2R5LCBmaW5hbGl6ZXIpIHtcblx0dHJ5IHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZpbmFsaXplcih0cnVlLCBlKTtcblx0fVxuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKGZpbmFsaXplci5iaW5kKG51bGwsIGZhbHNlKSwgZmluYWxpemVyLmJpbmQobnVsbCwgdHJ1ZSkpO1xuXHR9XG5cdHJldHVybiBmaW5hbGl6ZXIoZmFsc2UsIHJlc3VsdCk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGF3YWl0IGEgcHJvbWlzZSBhbmQgaW52b2tlIGEgZmluYWxseSBjb250aW51YXRpb24gdGhhdCBhbHdheXMgb3ZlcnJpZGVzIHRoZSByZXN1bHRcbmV4cG9ydCBmdW5jdGlvbiBfZmluYWxseShib2R5LCBmaW5hbGl6ZXIpIHtcblx0dHJ5IHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZpbmFsaXplcigpO1xuXHR9XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oZmluYWxpemVyLCBmaW5hbGl6ZXIpO1xuXHR9XG5cdHJldHVybiBmaW5hbGl6ZXIoKTtcbn1cblxuLy8gUmV0aHJvdyBvciByZXR1cm4gYSB2YWx1ZSBmcm9tIGEgZmluYWxseSBjb250aW51YXRpb25cbmV4cG9ydCBmdW5jdGlvbiBfcmV0aHJvdyh0aHJvd24sIHZhbHVlKSB7XG5cdGlmICh0aHJvd24pXG5cdFx0dGhyb3cgdmFsdWU7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLy8gRW1wdHkgZnVuY3Rpb24gdG8gaW1wbGVtZW50IGJyZWFrIGFuZCBvdGhlciBjb250cm9sIGZsb3cgdGhhdCBpZ25vcmVzIGFzeW5jaHJvbm91cyByZXN1bHRzXG5leHBvcnQgZnVuY3Rpb24gX2VtcHR5KCkge1xufVxuXG4vLyBTZW50aW5lbCB2YWx1ZSBmb3IgZWFybHkgcmV0dXJucyBpbiBnZW5lcmF0b3JzIFxuZXhwb3J0IGNvbnN0IF9lYXJseVJldHVybiA9IC8qI19fUFVSRV9fKi8ge307XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc2VuZCBlcnJvcnMgdG8gcmVjb3ZlcnkgY29udGludWF0aW9uLCBza2lwcGluZyBlYXJseSByZXR1cm5zXG5leHBvcnQgZnVuY3Rpb24gX2NhdGNoSW5HZW5lcmF0b3IoYm9keSwgcmVjb3Zlcikge1xuXHRyZXR1cm4gX2NhdGNoKGJvZHksIGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAoZSA9PT0gX2Vhcmx5UmV0dXJuKSB7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVjb3ZlcihlKTtcblx0fSk7XG59XG5cbi8vIEFzeW5jaHJvbm91cyBnZW5lcmF0b3IgY2xhc3M7IGFjY2VwdHMgdGhlIGVudHJ5cG9pbnQgb2YgdGhlIGdlbmVyYXRvciwgdG8gd2hpY2ggaXQgcGFzc2VzIGl0c2VsZiB3aGVuIHRoZSBnZW5lcmF0b3Igc2hvdWxkIHN0YXJ0XG5leHBvcnQgY29uc3QgX0FzeW5jR2VuZXJhdG9yID0gLyojX19QVVJFX18qLyhmdW5jdGlvbigpIHtcblx0ZnVuY3Rpb24gX0FzeW5jR2VuZXJhdG9yKGVudHJ5KSB7XG5cdFx0dGhpcy5fZW50cnkgPSBlbnRyeTtcblx0XHR0aGlzLl9wYWN0ID0gbnVsbDtcblx0XHR0aGlzLl9yZXNvbHZlID0gbnVsbDtcblx0XHR0aGlzLl9yZXR1cm4gPSBudWxsO1xuXHRcdHRoaXMuX3Byb21pc2UgPSBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gX3dyYXBSZXR1cm5lZFZhbHVlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiB0cnVlIH07XG5cdH1cblx0ZnVuY3Rpb24gX3dyYXBZaWVsZGVkVmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGZhbHNlIH07XG5cdH1cblxuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLl95aWVsZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0Ly8gWWllbGQgdGhlIHZhbHVlIHRvIHRoZSBwZW5kaW5nIG5leHQgY2FsbFxuXHRcdHRoaXMuX3Jlc29sdmUodmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX3dyYXBZaWVsZGVkVmFsdWUpIDogX3dyYXBZaWVsZGVkVmFsdWUodmFsdWUpKTtcblx0XHQvLyBSZXR1cm4gYSBwYWN0IGZvciBhbiB1cGNvbWluZyBuZXh0L3JldHVybi90aHJvdyBjYWxsXG5cdFx0cmV0dXJuIHRoaXMuX3BhY3QgPSBuZXcgX1BhY3QoKTtcblx0fTtcblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHQvLyBBZHZhbmNlIHRoZSBnZW5lcmF0b3IsIHN0YXJ0aW5nIGl0IGlmIGl0IGhhcyB5ZXQgdG8gYmUgc3RhcnRlZFxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblx0XHRyZXR1cm4gX3RoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdFx0Y29uc3QgX3BhY3QgPSBfdGhpcy5fcGFjdDtcblx0XHRcdGlmIChfcGFjdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCBfZW50cnkgPSBfdGhpcy5fZW50cnk7XG5cdFx0XHRcdGlmIChfZW50cnkgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCwgYnV0IG5vdCBhd2FpdGluZyBhIHlpZWxkIGV4cHJlc3Npb25cblx0XHRcdFx0XHQvLyBBYmFuZG9uIHRoZSBuZXh0IGNhbGwhXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoX3RoaXMuX3Byb21pc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFN0YXJ0IHRoZSBnZW5lcmF0b3Jcblx0XHRcdFx0X3RoaXMuX2VudHJ5ID0gbnVsbDtcblx0XHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0XHRmdW5jdGlvbiByZXR1cm5WYWx1ZSh2YWx1ZSkge1xuXHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlKHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF93cmFwUmV0dXJuZWRWYWx1ZSkgOiBfd3JhcFJldHVybmVkVmFsdWUodmFsdWUpKTtcblx0XHRcdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRcdFx0X3RoaXMuX3Jlc29sdmUgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciByZXN1bHQgPSBfZW50cnkoX3RoaXMpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnRoZW4ocmV0dXJuVmFsdWUsIGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IgPT09IF9lYXJseVJldHVybikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5WYWx1ZShfdGhpcy5fcmV0dXJuKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0XHRcdFx0XHRcdFx0X3RoaXMuX3Jlc29sdmUocGFjdCk7XG5cdFx0XHRcdFx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0X3RoaXMuX3Jlc29sdmUgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRfcmVzb2x2ZShwYWN0LCAyLCBlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuVmFsdWUocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQgYW5kIGEgeWllbGQgZXhwcmVzc2lvbiBpcyBwZW5kaW5nLCBzZXR0bGUgaXRcblx0XHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRcdF9zZXR0bGUoX3BhY3QsIDEsIHZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIEVhcmx5IHJldHVybiBmcm9tIHRoZSBnZW5lcmF0b3IgaWYgc3RhcnRlZCwgb3RoZXJ3aXNlIGFiYW5kb25zIHRoZSBnZW5lcmF0b3Jcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0cmV0dXJuIF90aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRcdGNvbnN0IF9wYWN0ID0gX3RoaXMuX3BhY3Q7XG5cdFx0XHRpZiAoX3BhY3QgPT09IG51bGwpIHtcblx0XHRcdFx0aWYgKF90aGlzLl9lbnRyeSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkLCBidXQgbm90IGF3YWl0aW5nIGEgeWllbGQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdC8vIEFiYW5kb24gdGhlIHJldHVybiBjYWxsIVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKF90aGlzLl9wcm9taXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgbm90IHN0YXJ0ZWQsIGFiYW5kb24gaXQgYW5kIHJldHVybiB0aGUgc3BlY2lmaWVkIHZhbHVlXG5cdFx0XHRcdF90aGlzLl9lbnRyeSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlKHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF93cmFwUmV0dXJuZWRWYWx1ZSkgOiBfd3JhcFJldHVybmVkVmFsdWUodmFsdWUpKTtcblx0XHRcdH1cblx0XHRcdC8vIFNldHRsZSB0aGUgeWllbGQgZXhwcmVzc2lvbiB3aXRoIGEgcmVqZWN0ZWQgXCJlYXJseSByZXR1cm5cIiB2YWx1ZVxuXHRcdFx0X3RoaXMuX3JldHVybiA9IHZhbHVlO1xuXHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0X3NldHRsZShfcGFjdCwgMiwgX2Vhcmx5UmV0dXJuKTtcblx0XHR9KTtcblx0fTtcblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0Ly8gSW5qZWN0IGFuIGV4Y2VwdGlvbiBpbnRvIHRoZSBwZW5kaW5nIHlpZWxkIGV4cHJlc3Npb25cblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0cmV0dXJuIF90aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0Y29uc3QgX3BhY3QgPSBfdGhpcy5fcGFjdDtcblx0XHRcdGlmIChfcGFjdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoX3RoaXMuX2VudHJ5ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQsIGJ1dCBub3QgYXdhaXRpbmcgYSB5aWVsZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0Ly8gQWJhbmRvbiB0aGUgdGhyb3cgY2FsbCFcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfdGhpcy5fcHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIG5vdCBzdGFydGVkLCBhYmFuZG9uIGl0IGFuZCByZXR1cm4gYSByZWplY3RlZCBQcm9taXNlIGNvbnRhaW5pbmcgdGhlIGVycm9yXG5cdFx0XHRcdF90aGlzLl9lbnRyeSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiByZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0dGxlIHRoZSB5aWVsZCBleHByZXNzaW9uIHdpdGggdGhlIHZhbHVlIGFzIGEgcmVqZWN0aW9uXG5cdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRfc2V0dGxlKF9wYWN0LCAyLCBlcnJvcik7XG5cdFx0fSk7XG5cdH07XG5cblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtfYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblx0XG5cdHJldHVybiBfQXN5bmNHZW5lcmF0b3I7XG59KSgpO1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL0xvZ2dlclxuICogPGJyPjxicj5cbiAqICMjIExvZ2dlci5cbiAqXG4gKiAtIERpc3BsYXkgaW5mb3JtYXRpb25zIHZpYSB0aGUgY29uc29sZVxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL0xvZ2dlclxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8qKlxuICogTG9nIGxldmVscywgYWxsIGxvd2VyIGxldmVsIG1lc3NhZ2VzIGFyZSBwcmludGVkXG4gKlxuICogMC4gbXV0ZVxuICogMS4gZXJyb3IgPSBgY29uc29sZS5lcnJvcigpYFxuICogMi4gd2FybmluZz0gYGNvbnNvbGUud2FybigpYFxuICogMy4gaW5mbyA9IGBjb25zb2xlLmluZm8oKWBcbiAqIDQuIGRlYnVnID0gYGNvbnNvbGUubG9nKClgXG4gKi9cbmV4cG9ydCBlbnVtIExvZ0xldmVscyB7XG4gIG9mZiA9IDAsXG4gIGVycm9yID0gMSxcbiAgd2FybmluZyA9IDIsXG4gIGluZm8gPSAzLFxuICBkZWJ1ZyA9IDQsXG59XG5cbi8qKlxuICogR2xvYmFsIGxvZyBsZXZlbFxuICovXG5sZXQgX2xldmVsOiBudW1iZXIgPSBMb2dMZXZlbHMub2ZmO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgLyoqXG4gICAqIEdldCBnbG9iYWwgbG9nIGxldmVsLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRMZXZlbCgpOiBudW1iZXIge1xuICAgIHJldHVybiBfbGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGdsb2JhbCBsb2cgbGV2ZWwuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNldExldmVsKG5hbWU6IGtleW9mIHR5cGVvZiBMb2dMZXZlbHMpOiBudW1iZXIge1xuICAgIF9sZXZlbCA9IExvZ0xldmVsc1tuYW1lXTtcblxuICAgIHJldHVybiBfbGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogTG9nIFwicHJlZml4XCIuXG4gICAqL1xuICBwcml2YXRlIF9zb3VyY2U6IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBMb2dnZXIuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZSA9IHNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJtYW5lbnQsIHVucmVtb3ZhYmxlIGxvZy5cbiAgICovXG4gIC8vIHB1YmxpYyBwcmludCguLi5vYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAvLyAgIHRoaXMuX2xvZyhjb25zb2xlLmluZm8sIExvZ0xldmVscy5vZmYsIG9iamVjdHMpO1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIEVycm9yIGxvZy5cbiAgICovXG4gIHB1YmxpYyBlcnJvciguLi5vYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuX2xvZyhjb25zb2xlLmVycm9yLCBMb2dMZXZlbHMuZXJyb3IsIG9iamVjdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhcm4gbG9nLlxuICAgKi9cbiAgcHVibGljIHdhcm4oLi4ub2JqZWN0czogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLl9sb2coY29uc29sZS53YXJuLCBMb2dMZXZlbHMud2FybmluZywgb2JqZWN0cyk7XG4gIH1cblxuICAvKipcbiAgICogSW5mbyBsb2cuXG4gICAqL1xuICBwdWJsaWMgaW5mbyguLi5vYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuX2xvZyhjb25zb2xlLmluZm8sIExvZ0xldmVscy5pbmZvLCBvYmplY3RzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWJ1ZyBsb2cuXG4gICAqL1xuICBwdWJsaWMgZGVidWcoLi4ub2JqZWN0czogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLl9sb2coY29uc29sZS5sb2csIExvZ0xldmVscy5kZWJ1Zywgb2JqZWN0cyk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgbG9nZ2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBfbG9nKGZuOiAoKSA9PiB2b2lkLCBsZXZlbDogbnVtYmVyLCBvYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmIChsZXZlbCA8PSBMb2dnZXIuZ2V0TGV2ZWwoKSkge1xuICAgICAgZm4uYXBwbHkoY29uc29sZSwgKFtgWyR7dGhpcy5fc291cmNlfV0gYF0uY29uY2F0KG9iamVjdHMpIGFzIHVua25vd24pIGFzIFtcblxuICAgICAgXSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgdHlwaW5ncy9jb3JlXG4gKi9cbmltcG9ydCB7IElUcmFuc2l0aW9uRGF0YSwgSVRyYW5zaXRpb25QYWdlLCBJVmlld0RhdGEgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IHR5cGUgSG9va3NCYXJiYSA9XG4gIHwgJ3JlYWR5J1xuICB8ICdwYWdlJ1xuICB8ICdyZXNldCdcbiAgfCAnY3VycmVudEFkZGVkJ1xuICB8ICdjdXJyZW50UmVtb3ZlZCdcbiAgfCAnbmV4dEFkZGVkJ1xuICB8ICduZXh0UmVtb3ZlZCc7XG5cbmV4cG9ydCB0eXBlIEhvb2tzT25jZSA9ICdiZWZvcmVPbmNlJyB8ICdvbmNlJyB8ICdhZnRlck9uY2UnO1xuXG5leHBvcnQgdHlwZSBIb29rc1BhZ2UgPVxuICB8ICdiZWZvcmUnXG4gIHwgJ2JlZm9yZUxlYXZlJ1xuICB8ICdsZWF2ZSdcbiAgfCAnYWZ0ZXJMZWF2ZSdcbiAgfCAnYmVmb3JlRW50ZXInXG4gIHwgJ2VudGVyJ1xuICB8ICdhZnRlckVudGVyJ1xuICB8ICdhZnRlcic7XG5cbmV4cG9ydCB0eXBlIEhvb2tzQmVmb3JlID0gJ2JlZm9yZU9uY2UnIHwgJ2JlZm9yZUxlYXZlJyB8ICdiZWZvcmVFbnRlcic7XG5leHBvcnQgdHlwZSBIb29rc0FmdGVyID0gJ2FmdGVyT25jZScgfCAnYWZ0ZXJMZWF2ZScgfCAnYWZ0ZXJFbnRlcic7XG5cbmV4cG9ydCB0eXBlIEhvb2tzVHJhbnNpdGlvbiA9IEhvb2tzT25jZSB8IEhvb2tzUGFnZTtcbmV4cG9ydCB0eXBlIEhvb2tzVmlldyA9IEhvb2tzQmVmb3JlIHwgSG9va3NBZnRlcjtcbmV4cG9ydCB0eXBlIEhvb2tzQWxsID0gSG9va3NCYXJiYSB8IEhvb2tzVHJhbnNpdGlvbjtcblxuLy8gQWxsb3cgb3B0aW9uYWwgXCJkeW5hbWljYWxseSBjcmVhdGVkXCIgaG9va3NcbmV4cG9ydCB0eXBlIEhvb2tzVHJhbnNpdGlvbk1hcCA9IHsgW2tleSBpbiBIb29rc1RyYW5zaXRpb25dPzogYW55IH07XG5cbmV4cG9ydCB0eXBlIEhvb2tGdW5jdGlvbiA9IChcbiAgZGF0YT86IElUcmFuc2l0aW9uRGF0YSB8IElWaWV3RGF0YSxcbiAgdD86IElUcmFuc2l0aW9uUGFnZVxuKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZDtcblxuZXhwb3J0IGNsYXNzIEhvb2tNZXRob2RzIHtcbiAgcHVibGljIGJlZm9yZTogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGJlZm9yZUxlYXZlOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgbGVhdmU6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBhZnRlckxlYXZlOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgYmVmb3JlRW50ZXI6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBlbnRlcjogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGFmdGVyRW50ZXI6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBhZnRlcjogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbn1cbiIsIi8qKlxuICogRXhwb3NlIGBwYXRoVG9SZWdleHBgLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhUb1JlZ2V4cFxubW9kdWxlLmV4cG9ydHMubWF0Y2ggPSBtYXRjaFxubW9kdWxlLmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzLnBhcnNlID0gcGFyc2Vcbm1vZHVsZS5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvblxubW9kdWxlLmV4cG9ydHMudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cFxuXG4vKipcbiAqIERlZmF1bHQgY29uZmlncy5cbiAqL1xudmFyIERFRkFVTFRfREVMSU1JVEVSID0gJy8nXG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCI6dGVzdChcXFxcZCspP1wiID0+IFtcInRlc3RcIiwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgXCI/XCJdXG4gIC8vIFwiKFxcXFxkKylcIiAgPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkXVxuICAnKD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/J1xuXS5qb2luKCd8JyksICdnJylcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IFtdXG4gIHZhciBrZXkgPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IChvcHRpb25zICYmIG9wdGlvbnMuZGVsaW1pdGVyKSB8fCBERUZBVUxUX0RFTElNSVRFUlxuICB2YXIgd2hpdGVsaXN0ID0gKG9wdGlvbnMgJiYgb3B0aW9ucy53aGl0ZWxpc3QpIHx8IHVuZGVmaW5lZFxuICB2YXIgcGF0aEVzY2FwZWQgPSBmYWxzZVxuICB2YXIgcmVzXG5cbiAgd2hpbGUgKChyZXMgPSBQQVRIX1JFR0VYUC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgdmFyIG0gPSByZXNbMF1cbiAgICB2YXIgZXNjYXBlZCA9IHJlc1sxXVxuICAgIHZhciBvZmZzZXQgPSByZXMuaW5kZXhcbiAgICBwYXRoICs9IHN0ci5zbGljZShpbmRleCwgb2Zmc2V0KVxuICAgIGluZGV4ID0gb2Zmc2V0ICsgbS5sZW5ndGhcblxuICAgIC8vIElnbm9yZSBhbHJlYWR5IGVzY2FwZWQgc2VxdWVuY2VzLlxuICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICBwYXRoICs9IGVzY2FwZWRbMV1cbiAgICAgIHBhdGhFc2NhcGVkID0gdHJ1ZVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgcHJldiA9ICcnXG4gICAgdmFyIG5hbWUgPSByZXNbMl1cbiAgICB2YXIgY2FwdHVyZSA9IHJlc1szXVxuICAgIHZhciBncm91cCA9IHJlc1s0XVxuICAgIHZhciBtb2RpZmllciA9IHJlc1s1XVxuXG4gICAgaWYgKCFwYXRoRXNjYXBlZCAmJiBwYXRoLmxlbmd0aCkge1xuICAgICAgdmFyIGsgPSBwYXRoLmxlbmd0aCAtIDFcbiAgICAgIHZhciBjID0gcGF0aFtrXVxuICAgICAgdmFyIG1hdGNoZXMgPSB3aGl0ZWxpc3QgPyB3aGl0ZWxpc3QuaW5kZXhPZihjKSA+IC0xIDogdHJ1ZVxuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICBwcmV2ID0gY1xuICAgICAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBrKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFB1c2ggdGhlIGN1cnJlbnQgcGF0aCBvbnRvIHRoZSB0b2tlbnMuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gICAgICBwYXRoID0gJydcbiAgICAgIHBhdGhFc2NhcGVkID0gZmFsc2VcbiAgICB9XG5cbiAgICB2YXIgcmVwZWF0ID0gbW9kaWZpZXIgPT09ICcrJyB8fCBtb2RpZmllciA9PT0gJyonXG4gICAgdmFyIG9wdGlvbmFsID0gbW9kaWZpZXIgPT09ICc/JyB8fCBtb2RpZmllciA9PT0gJyonXG4gICAgdmFyIHBhdHRlcm4gPSBjYXB0dXJlIHx8IGdyb3VwXG4gICAgdmFyIGRlbGltaXRlciA9IHByZXYgfHwgZGVmYXVsdERlbGltaXRlclxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJldixcbiAgICAgIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICBwYXR0ZXJuOiBwYXR0ZXJuXG4gICAgICAgID8gZXNjYXBlR3JvdXAocGF0dGVybilcbiAgICAgICAgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlciA9PT0gZGVmYXVsdERlbGltaXRlciA/IGRlbGltaXRlciA6IChkZWxpbWl0ZXIgKyBkZWZhdWx0RGVsaW1pdGVyKSkgKyAnXSs/J1xuICAgIH0pXG4gIH1cblxuICAvLyBQdXNoIGFueSByZW1haW5pbmcgY2hhcmFjdGVycy5cbiAgaWYgKHBhdGggfHwgaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgdG9rZW5zLnB1c2gocGF0aCArIHN0ci5zdWJzdHIoaW5kZXgpKVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2ggKHN0ciwgb3B0aW9ucykge1xuICB2YXIga2V5cyA9IFtdXG4gIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpXG4gIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbiAocmUsIGtleXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSwgb3B0aW9ucykge1xuICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSlcbiAgICBpZiAoIW0pIHJldHVybiBmYWxzZVxuXG4gICAgdmFyIHBhdGggPSBtWzBdXG4gICAgdmFyIGluZGV4ID0gbS5pbmRleFxuICAgIHZhciBwYXJhbXMgPSB7fVxuICAgIHZhciBkZWNvZGUgPSAob3B0aW9ucyAmJiBvcHRpb25zLmRlY29kZSkgfHwgZGVjb2RlVVJJQ29tcG9uZW50XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpIGNvbnRpbnVlXG5cbiAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXVxuXG4gICAgICBpZiAoa2V5LnJlcGVhdCkge1xuICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkuZGVsaW1pdGVyKS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9XG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbiAodG9rZW5zLCBvcHRpb25zKSB7XG4gIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICB2YXIgbWF0Y2hlcyA9IG5ldyBBcnJheSh0b2tlbnMubGVuZ3RoKVxuXG4gIC8vIENvbXBpbGUgYWxsIHRoZSBwYXR0ZXJucyBiZWZvcmUgY29tcGlsYXRpb24uXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB0b2tlbnNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBtYXRjaGVzW2ldID0gbmV3IFJlZ0V4cCgnXig/OicgKyB0b2tlbnNbaV0ucGF0dGVybiArICcpJCcsIGZsYWdzKG9wdGlvbnMpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZGF0YSwgb3B0aW9ucykge1xuICAgIHZhciBwYXRoID0gJydcbiAgICB2YXIgZW5jb2RlID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGUpIHx8IGVuY29kZVVSSUNvbXBvbmVudFxuICAgIHZhciB2YWxpZGF0ZSA9IG9wdGlvbnMgPyBvcHRpb25zLnZhbGlkYXRlICE9PSBmYWxzZSA6IHRydWVcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZFxuICAgICAgdmFyIHNlZ21lbnRcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICghdG9rZW4ucmVwZWF0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFycmF5JylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIGNvbnRpbnVlXG5cbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pXG5cbiAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aCArPSAoaiA9PT0gMCA/IHRva2VuLnByZWZpeCA6IHRva2VuLmRlbGltaXRlcikgKyBzZWdtZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pXG5cbiAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCBnb3QgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICAgIH1cblxuICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSBjb250aW51ZVxuXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlICcgKyAodG9rZW4ucmVwZWF0ID8gJ2FuIGFycmF5JyA6ICdhIHN0cmluZycpKVxuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEVzY2FwZSB0aGUgY2FwdHVyaW5nIGdyb3VwIGJ5IGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGdyb3VwXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUdyb3VwIChncm91cCkge1xuICByZXR1cm4gZ3JvdXAucmVwbGFjZSgvKFs9ITokLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheT19ICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICBpZiAoIWtleXMpIHJldHVybiBwYXRoXG5cbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXk9fSAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRzLnB1c2gocGF0aFRvUmVnZXhwKHBhdGhbaV0sIGtleXMsIG9wdGlvbnMpLnNvdXJjZSlcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheT19ICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9SZWdFeHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpXG59XG5cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICB0b2tlbnNcbiAqIEBwYXJhbSAge0FycmF5PX0gIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnRXhwICh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3RcbiAgdmFyIHN0YXJ0ID0gb3B0aW9ucy5zdGFydCAhPT0gZmFsc2VcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZVxuICB2YXIgZGVsaW1pdGVyID0gb3B0aW9ucy5kZWxpbWl0ZXIgfHwgREVGQVVMVF9ERUxJTUlURVJcbiAgdmFyIGVuZHNXaXRoID0gW10uY29uY2F0KG9wdGlvbnMuZW5kc1dpdGggfHwgW10pLm1hcChlc2NhcGVTdHJpbmcpLmNvbmNhdCgnJCcpLmpvaW4oJ3wnKVxuICB2YXIgcm91dGUgPSBzdGFydCA/ICdeJyA6ICcnXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjYXB0dXJlID0gdG9rZW4ucmVwZWF0XG4gICAgICAgID8gJyg/OicgKyB0b2tlbi5wYXR0ZXJuICsgJykoPzonICsgZXNjYXBlU3RyaW5nKHRva2VuLmRlbGltaXRlcikgKyAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSkqJ1xuICAgICAgICA6IHRva2VuLnBhdHRlcm5cblxuICAgICAgaWYgKGtleXMpIGtleXMucHVzaCh0b2tlbilcblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgIGlmICghdG9rZW4ucHJlZml4KSB7XG4gICAgICAgICAgcm91dGUgKz0gJygnICsgY2FwdHVyZSArICcpPydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZSArPSAnKD86JyArIGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpICsgJygnICsgY2FwdHVyZSArICcpJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQpIHtcbiAgICBpZiAoIXN0cmljdCkgcm91dGUgKz0gJyg/OicgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyKSArICcpPydcblxuICAgIHJvdXRlICs9IGVuZHNXaXRoID09PSAnJCcgPyAnJCcgOiAnKD89JyArIGVuZHNXaXRoICsgJyknXG4gIH0gZWxzZSB7XG4gICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVxuICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gJ3N0cmluZydcbiAgICAgID8gZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0gPT09IGRlbGltaXRlclxuICAgICAgOiBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkXG5cbiAgICBpZiAoIXN0cmljdCkgcm91dGUgKz0gJyg/OicgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyKSArICcoPz0nICsgZW5kc1dpdGggKyAnKSk/J1xuICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHJvdXRlICs9ICcoPz0nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnfCcgKyBlbmRzV2l0aCArICcpJ1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKlxuICogQHBhcmFtICB7KHN0cmluZ3xSZWdFeHB8QXJyYXkpfSBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheT19ICAgICAgICAgICAgICAgIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSkge1xuICAgIHJldHVybiBhcnJheVRvUmVnZXhwKC8qKiBAdHlwZSB7IUFycmF5fSAqLyAocGF0aCksIGtleXMsIG9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gc3RyaW5nVG9SZWdleHAoLyoqIEB0eXBlIHtzdHJpbmd9ICovIChwYXRoKSwga2V5cywgb3B0aW9ucylcbn1cbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvc2NoZW1hc1xuICogPGJyPjxicj5cbiAqICMjIFNjaGVtYXMgZGVzY3JpcHRpb24uXG4gKlxuICogQG1vZHVsZSBjb3JlL3NjaGVtYXNcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSVNjaGVtYUF0dHJpYnV0ZSB9IGZyb20gJy4uL2RlZnMnO1xuXG4vKipcbiAqIFNlZSBbW0lTY2hlbWFBdHRyaWJ1dGVdXVxuICovXG5leHBvcnQgY29uc3Qgc2NoZW1hQXR0cmlidXRlOiBJU2NoZW1hQXR0cmlidXRlID0ge1xuICBjb250YWluZXI6ICdjb250YWluZXInLFxuICBoaXN0b3J5OiAnaGlzdG9yeScsXG4gIG5hbWVzcGFjZTogJ25hbWVzcGFjZScsXG4gIHByZWZpeDogJ2RhdGEtYmFyYmEnLFxuICBwcmV2ZW50OiAncHJldmVudCcsXG4gIHdyYXBwZXI6ICd3cmFwcGVyJyxcbn07XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL3V0aWxzL2RvbVxuICogPGJyPjxicj5cbiAqICMjIERvbSB1dGlsc1xuICpcbiAqIC0gQWNjZXNzIERPTSBjb250ZW50c1xuICogLSBET00gdnMgc3RyaW5nIGNvbnZlcnNpb25zXG4gKlxuICogQG1vZHVsZSBjb3JlL3V0aWxzL2RvbVxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSVNjaGVtYUF0dHJpYnV0ZSwgTGluaywgU2NvcGUsIFdyYXBwZXIgfSBmcm9tICcuLi9kZWZzJztcbi8vIFNjaGVtYXNcbmltcG9ydCB7IHNjaGVtYUF0dHJpYnV0ZSB9IGZyb20gJy4uL3NjaGVtYXMvYXR0cmlidXRlJztcblxuZXhwb3J0IGNsYXNzIERvbSB7XG4gIHByaXZhdGUgX2F0dHI6IElTY2hlbWFBdHRyaWJ1dGUgPSBzY2hlbWFBdHRyaWJ1dGU7XG4gIHByaXZhdGUgX3BhcnNlcjogRE9NUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IEhUTUxEb2N1bWVudCB0byBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgdG9TdHJpbmcoZWw6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZWwub3V0ZXJIVE1MO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIEhUTUwgc3RyaW5nIHRvIEhUTUxEb2N1bWVudC5cbiAgICovXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmFyYmFqcy9iYXJiYS9pc3N1ZXMvMzYyXG4gIC8vIFNlZW1zIHRoYXQgdXNpbmcgRE9NUGFyc2VyLnBhcnNlRnJvbVN0cmluZyBjYXVzZXMgdGhpcyBpc3N1ZS5cbiAgcHVibGljIHRvRG9jdW1lbnQoaHRtbFN0cmluZzogc3RyaW5nKTogSFRNTERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sU3RyaW5nLCAndGV4dC9odG1sJyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgSFRNTCBzdHJpbmcgdG8gRElWRWxlbWVudC5cbiAgICpcbiAgICogRE9NUGFyc2VyLnBhcnNlRnJvbVN0cmluZyBmYWlscyB3aXRoIGltZ1tzcmNzZXRdIG9uIGlPUy5cbiAgICogc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJiYWpzL2JhcmJhL2lzc3Vlcy8zNjJcbiAgICovXG4gIHB1YmxpYyB0b0VsZW1lbnQoaHRtbFN0cmluZzogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgSFRNTCBjb250ZW50LlxuICAgKi9cbiAgcHVibGljIGdldEh0bWwoZG9jOiBIVE1MRG9jdW1lbnQgPSBkb2N1bWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoZG9jLmRvY3VtZW50RWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZ1bGwgZG9jdW1lbnQgY29udGVudC5cbiAgICovXG4gIC8vIGdldERvY3VtZW50KGVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gIC8vICAgcmV0dXJuIHRoaXMudG9TdHIoZWwpO1xuICAvLyB9LFxuXG4gIC8qKlxuICAgKiBHZXQgYFtkYXRhLWJhcmJhPVwid3JhcHBlclwiXWAuXG4gICAqL1xuICBwdWJsaWMgZ2V0V3JhcHBlcihzY29wZTogU2NvcGUgPSBkb2N1bWVudCk6IFdyYXBwZXIge1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFske3RoaXMuX2F0dHIucHJlZml4fT1cIiR7dGhpcy5fYXR0ci53cmFwcGVyfVwiXWBcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBgW2RhdGEtYmFyYmE9XCJjb250YWluZXJcIl1gLlxuICAgKi9cbiAgcHVibGljIGdldENvbnRhaW5lcihzY29wZTogU2NvcGUgPSBkb2N1bWVudCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgWyR7dGhpcy5fYXR0ci5wcmVmaXh9PVwiJHt0aGlzLl9hdHRyLmNvbnRhaW5lcn1cIl1gXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY29udGFpbmVyIGFuZCBzdG9yZSBuZXh0IHNpYmxpbmcgKGlmIGFwcGxpY2FibGUpLlxuICAgKi9cbiAgcHVibGljIHJlbW92ZUNvbnRhaW5lcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMoY29udGFpbmVyKSkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNvbnRhaW5lciBiZWZvcmUgbmV4dCBzaWJsaW5nIG9yIGF0IHRoZSBlbmQgb2YgdGhlIHdyYXBwZXIuXG4gICAqL1xuICBwdWJsaWMgYWRkQ29udGFpbmVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHdyYXBwZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgZXhpc3RpbmdDb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lcigpO1xuXG4gICAgaWYgKGV4aXN0aW5nQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9pbnNlcnRBZnRlcihjb250YWluZXIsIGV4aXN0aW5nQ29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYFtkYXRhLWJhcmJhLW5hbWVzcGFjZV1gLlxuICAgKi9cbiAgcHVibGljIGdldE5hbWVzcGFjZShzY29wZTogU2NvcGUgPSBkb2N1bWVudCk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IG5zID0gc2NvcGUucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbJHt0aGlzLl9hdHRyLnByZWZpeH0tJHt0aGlzLl9hdHRyLm5hbWVzcGFjZX1dYFxuICAgICk7XG5cbiAgICByZXR1cm4gbnNcbiAgICAgID8gbnMuZ2V0QXR0cmlidXRlKGAke3RoaXMuX2F0dHIucHJlZml4fS0ke3RoaXMuX2F0dHIubmFtZXNwYWNlfWApXG4gICAgICA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IFVSTCBmcm9tIGBocmVmYCB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBnZXRIcmVmKGVsOiBMaW5rKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgLy8gSFRNTCB0YWdOYW1lIGlzIFVQUEVSQ0FTRSwgeGh0bWwgdGFnTmFtZSBrZWVwcyBleGlzdGluZyBjYXNlLlxuICAgIGlmIChlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnKSB7XG4gICAgICAvLyBIVE1MQW5jaG9yRWxlbWVudCwgZnVsbCBVUkwgYXZhaWxhYmxlXG4gICAgICBpZiAodHlwZW9mIGVsLmhyZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBlbC5ocmVmO1xuICAgICAgfVxuXG4gICAgICAvLyBQcm9iYWJseSBhIFNWR0FFbGVtZW504oCmXG4gICAgICBjb25zdCBocmVmID0gZWwuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgZWwuZ2V0QXR0cmlidXRlKCd4bGluazpocmVmJyk7XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoaHJlZikge1xuICAgICAgICAvLyBXaGVuIGxpbmsgY29tZXMgZnJvbSBTVkcsIGBocmVmYCByZXR1cm5zIGFuIG9iamVjdCwgbm90IGEgc3RyaW5nLlxuICAgICAgICBjb25zdCBhdHRyOiBzdHJpbmcgPVxuICAgICAgICAgICgoaHJlZiBhcyB1bmtub3duKSBhcyBTVkdBbmltYXRlZFN0cmluZykuYmFzZVZhbCB8fCBocmVmO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVVcmwoYXR0cik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gQ29weXJpZ2h0IDIwMTQgU2ltb24gTHlkZWxsXG4gIC8vIFgxMSAo4oCcTUlU4oCdKSBMaWNlbnNlZC4gKFNlZSBMSUNFTlNFXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9seWRlbGwvcmVzb2x2ZS11cmwvYmxvYi9tYXN0ZXIvcmVzb2x2ZS11cmwuanNcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcHVibGljIHJlc29sdmVVcmwoLi4udXJsczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBudW1VcmxzID0gdXJscy5sZW5ndGg7XG5cbiAgICBpZiAobnVtVXJscyA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXNvbHZlVXJsIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudDsgZ290IG5vbmUuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jhc2UnKTtcbiAgICBiYXNlLmhyZWYgPSBhcmd1bWVudHNbMF07XG5cbiAgICBpZiAobnVtVXJscyA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJhc2UuaHJlZjtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICBoZWFkLmluc2VydEJlZm9yZShiYXNlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgcmVzb2x2ZWQ7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgbnVtVXJsczsgaW5kZXgrKykge1xuICAgICAgYS5ocmVmID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgIHJlc29sdmVkID0gYS5ocmVmO1xuICAgICAgYmFzZS5ocmVmID0gcmVzb2x2ZWQ7XG4gICAgfVxuXG4gICAgaGVhZC5yZW1vdmVDaGlsZChiYXNlKTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgbm9kZSBhZnRlciBhbm90aGVyIG5vZGUuXG4gICAqL1xuICBwcml2YXRlIF9pbnNlcnRBZnRlcihuZXdOb2RlOiBOb2RlLCByZWZlcmVuY2VOb2RlOiBOb2RlKSB7XG4gICAgcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nKTtcbiAgfVxufVxuXG5jb25zdCBkb20gPSBuZXcgRG9tKCk7XG5cbmV4cG9ydCB7IGRvbSB9O1xuIiwiaW1wb3J0IHsgSGlzdG9yeUFjdGlvbiwgTGlua0V2ZW50LCBUcmlnZ2VyIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBTY2hlbWFzXG5pbXBvcnQgeyBzY2hlbWFBdHRyaWJ1dGUgfSBmcm9tICcuLi9zY2hlbWFzL2F0dHJpYnV0ZSc7XG5cbi8qKlxuICogQGJhcmJhL2NvcmUvdXRpbHMvaGlzdG9yeVxuICogPGJyPjxicj5cbiAqICMjIEhpc3RvcnkgbWFuYWdlci5cbiAqXG4gKiAtIEtlZXAgdHJhY2sgb2YgdGhlIG5hdmlnYXRpb24gaGlzdG9yeVxuICpcbiAqIEBtb2R1bGUgY29yZS91dGlscy9oaXN0b3J5XG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqXG4gKiBTdGF0ZSBpdGVtLlxuICpcbiAqIEBwcm9wZXJ0eSBmcm9tXG4gKiBAcHJvcGVydHkgaW5kZXhcbiAqL1xuaW50ZXJmYWNlIElIaXN0b3J5SXRlbSB7XG4gIC8qKiBvcmlnaW4gKi9cbiAgZnJvbTogc3RyaW5nO1xuICAvKiogaW5kZXggKi9cbiAgaW5kZXg6IG51bWJlcjtcbiAgLyoqIHN0YXRlcyAqL1xuICBzdGF0ZXM6IElTdGF0ZUl0ZW1bXTtcbn1cblxuLyoqKi9cbmludGVyZmFjZSBJQ29vcmRzIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbi8qKlxuICogSGlzdG9yeSBpdGVtLlxuICpcbiAqIEBwcm9wZXJ0eSBuYW1lc3BhY2VcbiAqIEBwcm9wZXJ0eSBzY3JvbGxcbiAqIEBwcm9wZXJ0eSBVUkxcbiAqL1xuaW50ZXJmYWNlIElTdGF0ZUl0ZW0ge1xuICAvKiogbmFtZXNwYWNlICovXG4gIG5zOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIC8qKiBTY3JvbGwgcG9zaXRpb24gKi9cbiAgc2Nyb2xsOiBJQ29vcmRzO1xuICAvKiogVVJMICovXG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgSGlzdG9yeSB7XG4gIHByaXZhdGUgX3Nlc3Npb246IHN0cmluZztcbiAgcHJpdmF0ZSBfc3RhdGVzOiBJU3RhdGVJdGVtW10gPSBbXTtcbiAgcHJpdmF0ZSBfcG9pbnRlciA9IC0xO1xuXG4gIC8qKlxuICAgKiBJbml0IHdpdGggZmlyc3Qgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgaW5pdCh1cmw6IHN0cmluZywgbnM6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3Nlc3Npb24gPSAnYmFyYmEnO1xuICAgIGNvbnN0IGluZGV4ID0gMDtcblxuICAgIGNvbnN0IHN0YXRlOiBJU3RhdGVJdGVtID0ge1xuICAgICAgbnMsXG4gICAgICBzY3JvbGw6IHtcbiAgICAgICAgeDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgIHk6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgfSxcbiAgICAgIHVybCxcbiAgICB9O1xuXG4gICAgdGhpcy5fc3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIHRoaXMuX3BvaW50ZXIgPSBpbmRleDtcblxuICAgIGNvbnN0IGl0ZW06IElIaXN0b3J5SXRlbSA9IHtcbiAgICAgIGZyb206IHRoaXMuX3Nlc3Npb24sXG4gICAgICBpbmRleCxcbiAgICAgIHN0YXRlczogWy4uLnRoaXMuX3N0YXRlc10sXG4gICAgfTtcblxuICAgIHdpbmRvdy5oaXN0b3J5ICYmIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShpdGVtLCAnJywgdXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2UoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdHJpZ2dlcjogVHJpZ2dlcixcbiAgICBlPzogTGlua0V2ZW50IHwgUG9wU3RhdGVFdmVudFxuICApOiBUcmlnZ2VyIHtcbiAgICBpZiAoZSAmJiAoZSBhcyBQb3BTdGF0ZUV2ZW50KS5zdGF0ZSkge1xuICAgICAgLy8gSWYgcG9wc3RhdGUsIG1vdmUgdG8gZXhpc3Rpbmcgc3RhdGVcbiAgICAgIC8vIGFuZCBnZXQgYmFjay9mb3J3YXJkIGRpcmVjdGlvbi5cbiAgICAgIGNvbnN0IHsgc3RhdGUgfTogeyBzdGF0ZTogSUhpc3RvcnlJdGVtIH0gPSBlIGFzIFBvcFN0YXRlRXZlbnQ7XG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLl9wb2ludGVyIC0gaW5kZXg7XG5cbiAgICAgIHRyaWdnZXIgPSB0aGlzLl9nZXREaXJlY3Rpb24oZGlmZik7XG5cbiAgICAgIC8vIFdvcmsgd2l0aCBwcmV2aW91cyBzdGF0ZXNcbiAgICAgIHRoaXMucmVwbGFjZShzdGF0ZS5zdGF0ZXMpO1xuICAgICAgdGhpcy5fcG9pbnRlciA9IGluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBZGQgbmV3IHN0YXRlXG4gICAgICB0aGlzLmFkZCh1cmwsIHRyaWdnZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmlnZ2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBzdGF0ZS5cbiAgICovXG4gIHB1YmxpYyBhZGQodXJsOiBzdHJpbmcsIHRyaWdnZXI6IFRyaWdnZXIpOiB2b2lkIHtcbiAgICAvLyBJZiBubyBzdGF0ZSwgaXQgd2lsbCBiZSB1cGRhdGVkIGxhdGVyLlxuICAgIGNvbnN0IG5zID0gJ3RtcCc7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNpemU7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5fZ2V0QWN0aW9uKHRyaWdnZXIpO1xuICAgIGNvbnN0IHN0YXRlOiBJU3RhdGVJdGVtID0ge1xuICAgICAgbnMsXG4gICAgICBzY3JvbGw6IHtcbiAgICAgICAgeDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgIHk6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgfSxcbiAgICAgIHVybCxcbiAgICB9O1xuXG4gICAgdGhpcy5fc3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIHRoaXMuX3BvaW50ZXIgPSBpbmRleDtcblxuICAgIGNvbnN0IGl0ZW06IElIaXN0b3J5SXRlbSA9IHtcbiAgICAgIGZyb206IHRoaXMuX3Nlc3Npb24sXG4gICAgICBpbmRleCxcbiAgICAgIHN0YXRlczogWy4uLnRoaXMuX3N0YXRlc10sXG4gICAgfTtcblxuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgd2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKGl0ZW0sICcnLCB1cmwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoaXRlbSwgJycsIHVybCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdGF0ZS5cbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoZGF0YTogYW55LCBpPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSBpIHx8IHRoaXMuX3BvaW50ZXI7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmdldChpbmRleCk7XG4gICAgY29uc3Qgc3RhdGU6IElTdGF0ZUl0ZW0gPSB7XG4gICAgICAuLi5leGlzdGluZyxcbiAgICAgIC4uLmRhdGEsXG4gICAgfTtcblxuICAgIHRoaXMuc2V0KGluZGV4LCBzdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGxhc3Qgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKGk/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaSkge1xuICAgICAgdGhpcy5fc3RhdGVzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGVzLnBvcCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3BvaW50ZXItLTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWxsIHN0YXRlcy5cbiAgICovXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0ZXMgPSBbXTtcbiAgICB0aGlzLl9wb2ludGVyID0gLTE7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSBhbGwgc3RhdGVzLlxuICAgKi9cbiAgcHVibGljIHJlcGxhY2UobmV3U3RhdGVzOiBJU3RhdGVJdGVtW10pOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0ZXMgPSBuZXdTdGF0ZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXRlIGJ5IGluZGV4LlxuICAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlc1tpbmRleF07XG4gIH1cblxuICAvKipcbiAgICogU2V0IHN0YXRlIGJ5IGluZGV4LlxuICAgKi9cbiAgcHVibGljIHNldChpOiBudW1iZXIsIHN0YXRlOiBJU3RhdGVJdGVtKSB7XG4gICAgcmV0dXJuICh0aGlzLl9zdGF0ZXNbaV0gPSBzdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHN0YXRlLlxuICAgKi9cbiAgZ2V0IGN1cnJlbnQoKTogSVN0YXRlSXRlbSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlc1t0aGlzLl9wb2ludGVyXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxhc3Qgc3RhdGUgKHRvcCBvZiB0aGUgaGlzdG9yeSBzdGFjaykuXG4gICAqL1xuICBnZXQgc3RhdGUoKTogSVN0YXRlSXRlbSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlc1t0aGlzLl9zdGF0ZXMubGVuZ3RoIC0gMV07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwcmV2aW91cyBzdGF0ZS5cbiAgICovXG4gIGdldCBwcmV2aW91cygpOiBJU3RhdGVJdGVtIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50ZXIgPCAxID8gbnVsbCA6IHRoaXMuX3N0YXRlc1t0aGlzLl9wb2ludGVyIC0gMV07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdGF0ZSBzaXplLlxuICAgKi9cbiAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhpc3RvcnkgYWN0aW9uOiBwdXNoIHZzIHJlcGxhY2VcbiAgICovXG4gIHByaXZhdGUgX2dldEFjdGlvbih0cmlnZ2VyOiBUcmlnZ2VyKTogSGlzdG9yeUFjdGlvbiB7XG4gICAgbGV0IGFjdGlvbjogSGlzdG9yeUFjdGlvbiA9ICdwdXNoJztcblxuICAgIC8vIE1hbmFnZSBgZGF0YS1iYXJiYS1oaXN0b3J5YCBhdHRyaWJ1dGVcbiAgICAvLyB0byBnZXQgdGhlIHJpZ2h0IGFjdGlvbiAocHVzaCB2cyByZXBsYWNlKS5cbiAgICBjb25zdCBlbCA9IHRyaWdnZXIgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgY29uc3QgYXR0ciA9IGAke3NjaGVtYUF0dHJpYnV0ZS5wcmVmaXh9LSR7c2NoZW1hQXR0cmlidXRlLmhpc3Rvcnl9YDtcblxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUgJiYgZWwuaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICBhY3Rpb24gPSBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgYXMgSGlzdG9yeUFjdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGlyZWN0aW9uIG9mIHBvcHN0YXRlIGNoYW5nZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0RGlyZWN0aW9uKGRpZmY6IG51bWJlcik6IFRyaWdnZXIge1xuICAgIC8vIENoZWNrIGlmIFwic2Vzc2lvbiBzd2l0Y2hcIlxuICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IDEpIHtcbiAgICAgIC8vIEV4IDYtMCA+IDAgLT4gZm9yd2FyZCwgMC02IDwgMCAtPiBiYWNrXG4gICAgICByZXR1cm4gZGlmZiA+IDAgPyAnZm9yd2FyZCcgOiAnYmFjayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgIHJldHVybiAncG9wc3RhdGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRXggNi01ID4gMCAtPiBiYWNrLCA1LTYgPCAwIC0+IGZvcndhcmRcbiAgICAgICAgcmV0dXJuIGRpZmYgPiAwID8gJ2JhY2snIDogJ2ZvcndhcmQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBoaXN0b3J5ID0gbmV3IEhpc3RvcnkoKTtcblxuZXhwb3J0IHsgaGlzdG9yeSB9O1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS91dGlscy9oZWxwZXJzXG4gKiA8YnI+PGJyPlxuICogIyMgSGVscGVyc1xuICpcbiAqIC0gVXBkYXRlIG5leHQgcGFnZSBkYXRhXG4gKlxuICogQG1vZHVsZSBjb3JlL3V0aWxzL2hlbHBlcnNcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBUaGlyZC1wYXJ0eVxuaW1wb3J0IHB0ciBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSVRyYW5zaXRpb25EYXRhIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gJy4vaGlzdG9yeSc7XG5cbi8qKlxuICogVXBkYXRlIGBkYXRhLm5leHRgLCB0aGUgdGl0bGUgYW5kIHRoZSBoaXN0b3J5XG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSBhc3luYyAoXG4gIHBhZ2U6IFByb21pc2U8c3RyaW5nIHwgdm9pZD4sXG4gIGRhdGE6IElUcmFuc2l0aW9uRGF0YVxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIC8vIElmIG5vdCBhbHJlYWR5IHVwZGF0ZWRcbiAgaWYgKCFkYXRhLm5leHQuaHRtbCkge1xuICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBwYWdlO1xuICAgIGNvbnN0IHsgbmV4dCB9ID0gZGF0YTtcblxuICAgIGlmIChodG1sKSB7XG4gICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJiYWpzL2JhcmJhL2lzc3Vlcy8zNjJcbiAgICAgIC8vIGNvbnN0IG5leHREb2N1bWVudCA9IGRvbS50b0RvY3VtZW50KGh0bWwpO1xuICAgICAgY29uc3QgbmV4dERvY3VtZW50ID0gZG9tLnRvRWxlbWVudChodG1sKTtcblxuICAgICAgbmV4dC5uYW1lc3BhY2UgPSBkb20uZ2V0TmFtZXNwYWNlKG5leHREb2N1bWVudCk7XG4gICAgICBuZXh0LmNvbnRhaW5lciA9IGRvbS5nZXRDb250YWluZXIobmV4dERvY3VtZW50KTtcbiAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmFyYmFqcy9iYXJiYS9pc3N1ZXMvMzYyXG4gICAgICAvLyBuZXh0Lmh0bWwgPSBkb20uZ2V0SHRtbChuZXh0RG9jdW1lbnQpO1xuICAgICAgLy8gbmV4dC5odG1sID0gbmV4dERvY3VtZW50LmlubmVySFRNTDtcbiAgICAgIG5leHQuaHRtbCA9IGh0bWw7XG5cbiAgICAgIC8vIFVwZGF0ZSBoaXN0b3J5IG5hbWVzcGFjZSAobm90IGF2YWlsYWJsZSB3aGVuIGluaXRpYWxseSBzZXQpXG4gICAgICBoaXN0b3J5LnVwZGF0ZSh7IG5zOiBuZXh0Lm5hbWVzcGFjZSB9KTtcblxuICAgICAgLy8gVXBkYXRlIHRpdGxlLlxuICAgICAgY29uc3QgeyB0aXRsZSB9ID0gZG9tLnRvRG9jdW1lbnQoaHRtbCk7XG5cbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIE5leHQgdGlja1xuICovXG5leHBvcnQgY29uc3QgbmV4dFRpY2sgPSAoKSA9PlxuICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpO1xuICAgIC8vIERFVjogc2FtZSByZXN1bHQ/XG4gICAgLy8gc2V0VGltZW91dChyZXNvbHZlLCAwKTtcbiAgfSk7XG5cbi8qKlxuICogVHVybiBhIHJvdXRlIHN0cmluZyBzdWNoIGFzIGAvdXNlci86bmFtZWAgaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBVc2VkIGZvcjpcbiAqXG4gKiAtIHJvdXRlcyB0byBpZ25vcmVcbiAqIC0gcm91dGUgdHJhbnNpdGlvbiByZXNvbHV0aW9uXG4gKlxuICogQHNlZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9wYXRoLXRvLXJlZ2V4cFxuICovXG5jb25zdCBwYXRoVG9SZWdleHAgPSBwdHI7XG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9O1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS91dGlscy91cmxcbiAqIDxicj48YnI+XG4gKiAjIyBVUkwgdXRpbHMuXG4gKlxuICogLSBDb2xsZWN0IGFuZCBzdHJ1Y3R1cmUgaW5mb3JtYXRpb25zIGZyb20gVVJMc1xuICpcbiAqIEBtb2R1bGUgY29yZS91dGlscy91cmxcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSUdlbmVyaWNPYmplY3QsIElVcmxCYXNlIH0gZnJvbSAnLi4vZGVmcyc7XG5cbi8qKlxuICogR2V0IGxvY2F0aW9uIGhyZWYuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRIcmVmID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbi8qKlxuICogR2V0IGxvY2F0aW9uIG9yaWdpbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yaWdpbiA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG5cbi8qKlxuICogR2V0IHBvcnQgYmFzZWQgb24gVVJMIG9yIGxvY2F0aW9uLlxuICovXG5leHBvcnQgY29uc3QgZ2V0UG9ydCA9ICh1cmw6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSA9PiBwYXJzZSh1cmwpLnBvcnQ7XG5cbi8qKlxuICogR2V0IHBhdGggZnJvbSBVUkwuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQYXRoID0gKHVybDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWYpID0+IHBhcnNlKHVybCkucGF0aDtcblxuLyoqXG4gKiBHZXQgcXVlcnkgb2JqZWN0IGZyb20gVVJMLlxuICovXG4vLyBleHBvcnQgY29uc3QgZ2V0UXVlcnkgPSAodXJsOiBzdHJpbmcpOiBJR2VuZXJpY09iamVjdCA9PiBwYXJzZSh1cmwpLnF1ZXJ5O1xuXG4vKipcbiAqIEdldCBoYXNoIGZyb20gVVJMLlxuICovXG4vLyBleHBvcnQgY29uc3QgZ2V0SGFzaCA9ICh1cmw6IHN0cmluZyk6IHN0cmluZyA9PiBwYXJzZSh1cmwpLmhhc2g7XG5cbi8qKlxuICogUGFyc2UgVVJMIGZvciBwYXRoLCBxdWVyeSBhbmQgaGFzaCBhbmQgbW9yZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlID0gKHVybDogc3RyaW5nKTogSVVybEJhc2UgPT4ge1xuICAvLyBQb3J0XG4gIGxldCBwb3J0O1xuICBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKC86XFxkKy8pO1xuXG4gIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgaWYgKC9eaHR0cC8udGVzdCh1cmwpKSB7XG4gICAgICBwb3J0ID0gODA7XG4gICAgfVxuXG4gICAgaWYgKC9eaHR0cHMvLnRlc3QodXJsKSkge1xuICAgICAgcG9ydCA9IDQ0MztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcG9ydFN0cmluZyA9IG1hdGNoZXNbMF0uc3Vic3RyaW5nKDEpO1xuXG4gICAgcG9ydCA9IHBhcnNlSW50KHBvcnRTdHJpbmcsIDEwKTtcbiAgfVxuXG4gIC8vIFBhdGhcbiAgbGV0IHBhdGggPSB1cmwucmVwbGFjZShnZXRPcmlnaW4oKSwgJycpO1xuICBsZXQgaGFzaDtcbiAgbGV0IHF1ZXJ5ID0ge307XG5cbiAgLy8gSGFzaFxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcblxuICBpZiAoaGFzaEluZGV4ID49IDApIHtcbiAgICBoYXNoID0gcGF0aC5zbGljZShoYXNoSW5kZXggKyAxKTtcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgLy8gUXVlcnlcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuXG4gIGlmIChxdWVyeUluZGV4ID49IDApIHtcbiAgICBxdWVyeSA9IHBhcnNlUXVlcnkocGF0aC5zbGljZShxdWVyeUluZGV4ICsgMSkpO1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIHF1ZXJ5SW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYXNoLFxuICAgIHBhdGgsXG4gICAgcG9ydCxcbiAgICBxdWVyeSxcbiAgfTtcbn07XG5cbi8qKlxuICogUGFyc2UgYSBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgcGFyc2VRdWVyeSA9IChzdHI6IHN0cmluZykgPT5cbiAgc3RyLnNwbGl0KCcmJykucmVkdWNlKChhY2M6IElHZW5lcmljT2JqZWN0LCBlbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgW2tleSwgdmFsdWVdID0gZWwuc3BsaXQoJz0nKTtcblxuICAgIGFjY1trZXldID0gdmFsdWU7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbi8qKlxuICogQ2xlYW4gVVJMLCByZW1vdmUgXCJoYXNoXCIgYW5kL29yIFwidHJhaWxpbmcgc2xhc2hcIi5cbiAqL1xuZXhwb3J0IGNvbnN0IGNsZWFuID0gKHVybDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWYpID0+XG4gIHVybC5yZXBsYWNlKC8oXFwvIy4qfFxcL3wjLiopJC8sICcnKTtcbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvdXRpbHMvcmVxdWVzdFxuICogPGJyPjxicj5cbiAqICMjIEZldGNoIHBhZ2VzIGZvciB0cmFuc2l0aW9ucy5cbiAqXG4gKiAtIEluY2x1ZGVzIHRpbWVvdXRcbiAqIC0gVXNlcyBGZXRjaCBBUElcbiAqIC0gSGFuZGxlcyBlcnJvcnNcbiAqXG4gKiBAbW9kdWxlIGNvcmUvdXRpbHMvcmVxdWVzdFxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBSZXF1ZXN0RXJyb3IgfSBmcm9tICcuLi9kZWZzJztcblxuLyoqXG4gKiBJbml0IGEgcGFnZSByZXF1ZXN0LlxuICogRmV0Y2ggdGhlIHBhZ2UgYW5kIHJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHRleHQgY29udGVudC5cbiAqL1xuZnVuY3Rpb24gcmVxdWVzdChcbiAgdXJsOiBzdHJpbmcsXG4gIHR0bDogbnVtYmVyID0gMmUzLFxuICByZXF1ZXN0RXJyb3I6IFJlcXVlc3RFcnJvclxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cykge1xuICAgICAgICAgIC8vIEhUVFAgY29kZSBpcyBub3QgMjAwLCByZWplY3Qgd2l0aCByZXNwb25zZS5cbiAgICAgICAgICBjb25zdCByZXMgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlcXVlc3RFcnJvcih1cmwsIHJlcyk7XG4gICAgICAgICAgcmVqZWN0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYFRpbWVvdXQgZXJyb3IgWyR7dHRsfV1gKTtcbiAgICAgIHJlcXVlc3RFcnJvcih1cmwsIGVycik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9O1xuICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKGBGZXRjaCBlcnJvcmApO1xuICAgICAgcmVxdWVzdEVycm9yKHVybCwgZXJyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH07XG5cbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICB4aHIudGltZW91dCA9IHR0bDtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgICdBY2NlcHQnLFxuICAgICAgJ3RleHQvaHRtbCxhcHBsaWNhdGlvbi94aHRtbCt4bWwsYXBwbGljYXRpb24veG1sJ1xuICAgICk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ3gtYmFyYmEnLCAneWVzJyk7XG4gICAgeGhyLnNlbmQoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHJlcXVlc3QgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gaXNQcm9taXNlO1xuXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuIiwiaW1wb3J0IGlzUHJvbWlzZSBmcm9tICdpcy1wcm9taXNlJztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL1NCb3Vkcmlhcy9ydW4tYXN5bmNcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgZnVuY3Rpb24gcnVuQXN5bmMoXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCB8IFByb21pc2U8YW55PixcbiAgY3R4OiBhbnkgPSB7fVxuKTogKC4uLmFyZ3M6IGFueVtdKSA9PiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgbGV0IGFzeW5jID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gQWRkIGFzeW5jIHRvIGNvbnRleHRcbiAgICAgIGN0eC5hc3luYyA9ICgpID0+IHtcbiAgICAgICAgYXN5bmMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiAoZXJyOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgYW5zd2VyID0gZnVuYy5hcHBseShjdHgsIGFyZ3MgYXMgW10pO1xuXG4gICAgICBpZiAoIWFzeW5jKSB7XG4gICAgICAgIGlmIChpc1Byb21pc2UoYW5zd2VyKSkge1xuICAgICAgICAgIChhbnN3ZXIgYXMgUHJvbWlzZTxhbnk+KS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShhbnN3ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvbW9kdWxlcy9ob29rc1xuICogPGJyPjxicj5cbiAqICMjIEhvb2tzIG1hbmFnZXIuXG4gKlxuICogLSBSZWdpc3RlciBhbmQgdHJpZ2dlciBob29rc1xuICpcbiAqIEhvb2tzIGNhbiBiZSBlYXNpbHkgcmVnaXN0ZXJlZDpcbiAqXG4gKiBgYGBqc1xuICogaG9va3MubGVhdmUoY2FsbGJhY2ssIGNvbnRleHQpO1xuICogYGBgXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvaG9va3NcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSG9va0Z1bmN0aW9uLCBIb29rTWV0aG9kcywgSG9va3NBbGwgfSBmcm9tICcuL2RlZnMnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9tb2R1bGVzL0xvZ2dlcic7XG4vLyBVdGlsc1xuaW1wb3J0IHsgcnVuQXN5bmMgfSBmcm9tICcuL3V0aWxzJztcbi8vIFR5cGVzXG5pbnRlcmZhY2UgSUhvb2tJbmZvcyB7XG4gIGN0eDogYW55O1xuICBmbjogSG9va0Z1bmN0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgSG9va3MgZXh0ZW5kcyBIb29rTWV0aG9kcyB7XG4gIC8qKlxuICAgKiBBbGxvdyB0aGUgdXNlIG9mIGBob29rc1tuYW1lXShjYiwgY3R4KWAuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIC8vIFtrZXkgaW4gSG9va3NBbGxdPzogYW55O1xuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCdAYmFyYmEvY29yZScpO1xuICAvKipcbiAgICogQWxsIGF2YWlsYWJsZSBob29rcy5cbiAgICpcbiAgICogU2VlIFtbSG9va3NBbGxdXVxuICAgKi9cbiAgLy8gVE9ETzogZ2V0IGhvb2tzIGZyb20gZGVmcyAoRFJZKT9cbiAgcHVibGljIGFsbDogSG9va3NBbGxbXSA9IFtcbiAgICAncmVhZHknLFxuICAgICdwYWdlJyxcbiAgICAncmVzZXQnLFxuICAgICdjdXJyZW50QWRkZWQnLFxuICAgICdjdXJyZW50UmVtb3ZlZCcsXG4gICAgJ25leHRBZGRlZCcsXG4gICAgJ25leHRSZW1vdmVkJyxcbiAgICAnYmVmb3JlT25jZScsXG4gICAgJ29uY2UnLFxuICAgICdhZnRlck9uY2UnLFxuICAgICdiZWZvcmUnLFxuICAgICdiZWZvcmVMZWF2ZScsXG4gICAgJ2xlYXZlJyxcbiAgICAnYWZ0ZXJMZWF2ZScsXG4gICAgJ2JlZm9yZUVudGVyJyxcbiAgICAnZW50ZXInLFxuICAgICdhZnRlckVudGVyJyxcbiAgICAnYWZ0ZXInLFxuICBdO1xuICAvKipcbiAgICogUmVnaXN0ZXJlZCBob29rcy5cbiAgICpcbiAgICogLSBVbmlxdWUgaG9vayBuYW1lXG4gICAqIC0gQXNzb2NpYXRlZCBkYXRhIHNldChzKSAoY2FsbGJhY2sgKyBjb250ZXh0KVxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyZWQ6IE1hcDxIb29rc0FsbCwgU2V0PElIb29rSW5mb3M+PiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHVibGljIGluaXQoKSB7XG4gICAgdGhpcy5yZWdpc3RlcmVkLmNsZWFyKCk7XG4gICAgdGhpcy5hbGwuZm9yRWFjaChob29rID0+IHtcbiAgICAgIGlmICghdGhpc1tob29rXSkge1xuICAgICAgICB0aGlzW2hvb2tdID0gKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5yZWdpc3RlcmVkLmhhcyhob29rKSkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkLnNldChob29rLCBuZXcgU2V0KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzZXQgPSB0aGlzLnJlZ2lzdGVyZWQuZ2V0KGhvb2spO1xuXG4gICAgICAgICAgc2V0LmFkZCh7XG4gICAgICAgICAgICBjdHg6IGN0eCB8fCB7fSxcbiAgICAgICAgICAgIGZuLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERvIGhvb2suXG4gICAqXG4gICAqIFRyaWdnZXIgcmVnaXN0ZXJlZCBob29rcy5cbiAgICovXG4gIHB1YmxpYyBkbyhuYW1lOiBIb29rc0FsbCwgLi4uYXJnczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkLmhhcyhuYW1lKSkge1xuICAgICAgLy8gTGV0J3Mgc3RhcnQgYSBjaGFpbiBvZiBwcm9taXNlc1xuICAgICAgbGV0IGNoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICAgIHRoaXMucmVnaXN0ZXJlZC5nZXQobmFtZSkuZm9yRWFjaChob29rID0+IHtcbiAgICAgICAgLy8gQ2hhaW4gYXN5bmMgaG9va3MgcHJvbWlzaWZpZWRcbiAgICAgICAgY2hhaW4gPSBjaGFpbi50aGVuKCgpID0+IHJ1bkFzeW5jKGhvb2suZm4sIGhvb2suY3R4KSguLi5hcmdzKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNoYWluLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYEhvb2sgZXJyb3IgWyR7bmFtZX1dYCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmFsbC5mb3JFYWNoKGhvb2sgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNbaG9va107XG4gICAgfSk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwLCBwcmludCBhdmFpbGFibGUgYW5kIHJlZ2lzdGVyZWQgaG9va3MuXG4gICAqL1xuICBwdWJsaWMgaGVscCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBBdmFpbGFibGUgaG9va3M6ICR7dGhpcy5hbGwuam9pbignLCcpfWApO1xuICAgIGNvbnN0IHJlZ2lzdGVyZWQ6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5yZWdpc3RlcmVkLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHJlZ2lzdGVyZWQucHVzaChrZXkpKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBSZWdpc3RlcmVkIGhvb2tzOiAke3JlZ2lzdGVyZWQuam9pbignLCcpfWApO1xuICB9XG59XG5cbmNvbnN0IGhvb2tzID0gbmV3IEhvb2tzKCk7XG5cbmV4cG9ydCB7IGhvb2tzIH07XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvaWdub3JlXG4gKiA8YnI+PGJyPlxuICogIyMgTWFuYWdlIGlnbm9yZSBvcHRpb25zLlxuICpcbiAqIC0gY2FjaGVcbiAqIC0gcHJlZmV0Y2hcbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9pZ25vcmVcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSWdub3JlT3B0aW9uIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgcGF0aFRvUmVnZXhwIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4uL3V0aWxzL3VybCc7XG5cbmV4cG9ydCBjbGFzcyBJZ25vcmUge1xuICBwcml2YXRlIF9pZ25vcmVBbGw6IGJvb2xlYW47XG4gIHByaXZhdGUgX2lnbm9yZVJlZ2V4ZXM6IFJlZ0V4cFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoaWdub3JlOiBJZ25vcmVPcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIGlnbm9yZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9pZ25vcmVBbGwgPSBpZ25vcmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhdGhzID0gQXJyYXkuaXNBcnJheShpZ25vcmUpID8gaWdub3JlIDogW2lnbm9yZV07XG5cbiAgICAgIHRoaXMuX2lnbm9yZVJlZ2V4ZXMgPSBwYXRocy5tYXAocCA9PiBwYXRoVG9SZWdleHAocCkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGVja0hyZWYoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9pZ25vcmVBbGwgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIHRoaXMuX2lnbm9yZUFsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGggfSA9IHBhcnNlKGhyZWYpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2lnbm9yZVJlZ2V4ZXMuc29tZShyZWdleCA9PiByZWdleC5leGVjKHBhdGgpICE9PSBudWxsKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL2NhY2hlXG4gKiA8YnI+PGJyPlxuICogIyMgQ2FjaGUgZm9yIHN0b3JpbmcgVVJMIC8gSFRNTC5cbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9jYWNoZVxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBDYWNoZUFjdGlvbiwgQ2FjaGVSZXF1ZXN0LCBJQ2FjaGVEYXRhLCBJZ25vcmVPcHRpb24gfSBmcm9tICcuLi9kZWZzJztcbi8vIE1vZHVsZXNcbmltcG9ydCB7IElnbm9yZSB9IGZyb20gJy4vSWdub3JlJztcblxuZXhwb3J0IGNsYXNzIENhY2hlIGV4dGVuZHMgSWdub3JlIHtcbiAgcHJpdmF0ZSBfc3RhdGU6IE1hcDxzdHJpbmcsIElDYWNoZURhdGE+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKGlnbm9yZTogSWdub3JlT3B0aW9uKSB7XG4gICAgc3VwZXIoaWdub3JlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdmFsdWUgdG8gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBzZXQoXG4gICAgaHJlZjogc3RyaW5nLFxuICAgIHJlcXVlc3Q6IENhY2hlUmVxdWVzdCxcbiAgICBhY3Rpb246IENhY2hlQWN0aW9uXG4gICk6IElDYWNoZURhdGEge1xuICAgIHRoaXMuX3N0YXRlLnNldChocmVmLCB7XG4gICAgICBhY3Rpb24sXG4gICAgICByZXF1ZXN0LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbixcbiAgICAgIHJlcXVlc3QsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSBmcm9tIGNhY2hlXG4gICAqL1xuICBwdWJsaWMgZ2V0KGhyZWY6IHN0cmluZyk6IElDYWNoZURhdGEge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQoaHJlZik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHJlcXVlc3QgZnJvbSBjYWNoZVxuICAgKi9cbiAgcHVibGljIGdldFJlcXVlc3QoaHJlZjogc3RyaW5nKTogQ2FjaGVSZXF1ZXN0IHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KGhyZWYpLnJlcXVlc3Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjdGlvbiBmcm9tIGNhY2hlXG4gICAqL1xuICBwdWJsaWMgZ2V0QWN0aW9uKGhyZWY6IHN0cmluZyk6IENhY2hlQWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KGhyZWYpLmFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB2YWx1ZSBleGlzdHMgaW50byBjYWNoZVxuICAgKi9cbiAgcHVibGljIGhhcyhocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLmNoZWNrSHJlZihocmVmKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKGhyZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB2YWx1ZSBmcm9tIGNhY2hlXG4gICAqL1xuICBwdWJsaWMgZGVsZXRlKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5kZWxldGUoaHJlZik7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGNhY2hlIHZhbHVlXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGhyZWY6IHN0cmluZywgZGF0YTogSUNhY2hlRGF0YSk6IElDYWNoZURhdGEge1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgLi4udGhpcy5fc3RhdGUuZ2V0KGhyZWYpLFxuICAgICAgLi4uZGF0YSxcbiAgICB9O1xuICAgIHRoaXMuX3N0YXRlLnNldChocmVmLCBzdGF0ZSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvbW9kdWxlcy9wcmV2ZW50XG4gKiA8YnI+PGJyPlxuICogIyMgUHJldmVudCBjaGVja3MuXG4gKlxuICogLSBHYXRoZXJzIGFsbCB0aGUgdGVzdHMgdGhhdCBhbGxvdyBCYXJiYSB0byB3b3JrIGFuZCBwbGF5IHRyYW5zaXRpb25zXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvcHJldmVudFxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJZ25vcmVPcHRpb24sIExpbmssIFByZXZlbnRDaGVjayB9IGZyb20gJy4uL2RlZnMnO1xuLy8gU2NoZW1hc1xuaW1wb3J0IHsgc2NoZW1hQXR0cmlidXRlIH0gZnJvbSAnLi4vc2NoZW1hcy9hdHRyaWJ1dGUnO1xuLy8gVXRpbHNcbmltcG9ydCB7IHVybCB9IGZyb20gJy4uL3V0aWxzJztcbi8vIE1vZHVsZXNcbmltcG9ydCB7IElnbm9yZSB9IGZyb20gJy4vSWdub3JlJztcblxuLyoqXG4gKiBNYWtlIHN1cmUgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYGhpc3RvcnkucHVzaFN0YXRlYC5cbiAqL1xuY29uc3QgcHVzaFN0YXRlOiBQcmV2ZW50Q2hlY2sgPSAoKSA9PiAhd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4vKipcbiAqIE1ha2Ugc3VyZSB0aGVyZSBpcyBhbiBgZWxgIGFuZCBgaHJlZmAuXG4gKi9cbmNvbnN0IGV4aXN0czogUHJldmVudENoZWNrID0gKHsgZWwsIGhyZWYgfSkgPT4gIWVsIHx8ICFocmVmO1xuXG4vKipcbiAqIElmIHRoZSB1c2VyIGlzIHByZXNzaW5nIGN0cmwgKyBjbGljaywgdGhlIGJyb3dzZXIgd2lsbCBvcGVuIGEgbmV3IHRhYi5cbiAqL1xuY29uc3QgbmV3VGFiOiBQcmV2ZW50Q2hlY2sgPSAoeyBldmVudCB9KSA9PlxuICAoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkud2hpY2ggPiAxIHx8XG4gIChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5tZXRhS2V5IHx8XG4gIChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5jdHJsS2V5IHx8XG4gIChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5zaGlmdEtleSB8fFxuICAoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkuYWx0S2V5O1xuXG4vKipcbiAqIElmIHRoZSBsaW5rIGhhcyBgX2JsYW5rYCB0YXJnZXQuXG4gKi9cbmNvbnN0IGJsYW5rOiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCB9KSA9PlxuICBlbC5oYXNBdHRyaWJ1dGUoJ3RhcmdldCcpICYmIChlbCBhcyBMaW5rKS50YXJnZXQgPT09ICdfYmxhbmsnO1xuXG4vKipcbiAqIElmIHRoZSBkb21haW4gaXMgdGhlIHNhbWUgKGluIG9yZGVyIHRvIGF2b2lkIHB1c2hTdGF0ZSBjcm9zcyBvcmlnaW4gc2VjdXJpdHkgcHJvYmxlbSkuXG4gKiBOb3RlOiBTVkdBRWxlbWVudCBkbyBub3QgaGF2ZSBgcHJvdG9jb2xgIG5laXRoZXIgYGhvc3RuYW1lYCBwcm9wZXJ0aWVzLlxuICovXG5jb25zdCBjb3JzRG9tYWluOiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCB9KSA9PlxuICAoKGVsIGFzIEhUTUxBbmNob3JFbGVtZW50KS5wcm90b2NvbCAhPT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9PSAoZWwgYXMgSFRNTEFuY2hvckVsZW1lbnQpLnByb3RvY29sKSB8fFxuICAoKGVsIGFzIEhUTUxBbmNob3JFbGVtZW50KS5ob3N0bmFtZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICE9PSAoZWwgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhvc3RuYW1lKTtcblxuLyoqXG4gKiBJZiB0aGUgcG9ydCBpcyB0aGUgc2FtZS5cbiAqIE5vdGU6IFNWR0FFbGVtZW50IGRvIG5vdCBoYXZlIGBwb3J0YCBwcm9wZXJ0eS5cbiAqL1xuY29uc3QgY29yc1BvcnQ6IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gIChlbCBhcyBIVE1MQW5jaG9yRWxlbWVudCkucG9ydCAhPT0gdW5kZWZpbmVkICYmXG4gIHVybC5nZXRQb3J0KCkgIT09IHVybC5nZXRQb3J0KChlbCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZik7XG5cbi8qKlxuICogSWYgdGhlIGxpbmsgaGFzIGRvd25sb2FkIGF0dHJpYnV0ZS5cbiAqL1xuY29uc3QgZG93bmxvYWQ6IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gIGVsLmdldEF0dHJpYnV0ZSAmJiB0eXBlb2YgZWwuZ2V0QXR0cmlidXRlKCdkb3dubG9hZCcpID09PSAnc3RyaW5nJztcblxuLyoqXG4gKiBJZiB0aGUgbGlua3MgY29udGFpbnMgW2RhdGEtYmFyYmEtcHJldmVudF0gb3IgW2RhdGEtYmFyYmEtcHJldmVudD1cInNlbGZcIl0uXG4gKi9cbmNvbnN0IHByZXZlbnRTZWxmOiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCB9KSA9PlxuICBlbC5oYXNBdHRyaWJ1dGUoYCR7c2NoZW1hQXR0cmlidXRlLnByZWZpeH0tJHtzY2hlbWFBdHRyaWJ1dGUucHJldmVudH1gKTtcblxuLyoqXG4gKiBJZiBzb21lIGxpbmsgYW5jZXN0b3IgY29udGFpbnMgW2RhdGEtYmFyYmEtcHJldmVudD1cImFsbFwiXS5cbiAqL1xuY29uc3QgcHJldmVudEFsbDogUHJldmVudENoZWNrID0gKHsgZWwgfSkgPT5cbiAgQm9vbGVhbihcbiAgICBlbC5jbG9zZXN0KGBbJHtzY2hlbWFBdHRyaWJ1dGUucHJlZml4fS0ke3NjaGVtYUF0dHJpYnV0ZS5wcmV2ZW50fT1cImFsbFwiXWApXG4gICk7XG5cbi8qKlxuICogSWYgdGhlIGxpbmsgaXMgdGhlIGN1cnJlbnQgVVJMLlxuICpcbiAqID4gTm90IGluIHRoZSB0ZXN0IHN1aXRlLlxuICovXG5jb25zdCBzYW1lVXJsOiBQcmV2ZW50Q2hlY2sgPSAoeyBocmVmIH0pID0+XG4gIHVybC5jbGVhbihocmVmKSA9PT0gdXJsLmNsZWFuKCkgJiYgdXJsLmdldFBvcnQoaHJlZikgPT09IHVybC5nZXRQb3J0KCk7XG5cbmV4cG9ydCBjbGFzcyBQcmV2ZW50IGV4dGVuZHMgSWdub3JlIHtcbiAgcHVibGljIHN1aXRlOiBzdHJpbmdbXSA9IFtdO1xuICBwdWJsaWMgdGVzdHM6IE1hcDxzdHJpbmcsIFByZXZlbnRDaGVjaz4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoaWdub3JlOiBJZ25vcmVPcHRpb24pIHtcbiAgICBzdXBlcihpZ25vcmUpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgLy8gQWRkIGRlZmF1bHRzXG4gICAgdGhpcy5hZGQoJ3B1c2hTdGF0ZScsIHB1c2hTdGF0ZSk7XG4gICAgdGhpcy5hZGQoJ2V4aXN0cycsIGV4aXN0cyk7XG4gICAgdGhpcy5hZGQoJ25ld1RhYicsIG5ld1RhYik7XG4gICAgdGhpcy5hZGQoJ2JsYW5rJywgYmxhbmspO1xuICAgIHRoaXMuYWRkKCdjb3JzRG9tYWluJywgY29yc0RvbWFpbik7XG4gICAgdGhpcy5hZGQoJ2NvcnNQb3J0JywgY29yc1BvcnQpO1xuICAgIHRoaXMuYWRkKCdkb3dubG9hZCcsIGRvd25sb2FkKTtcbiAgICB0aGlzLmFkZCgncHJldmVudFNlbGYnLCBwcmV2ZW50U2VsZik7XG4gICAgdGhpcy5hZGQoJ3ByZXZlbnRBbGwnLCBwcmV2ZW50QWxsKTtcblxuICAgIC8vIE91dHNpZGUgb2YgdGhlIHRlc3Qgc3VpdGVcbiAgICB0aGlzLmFkZCgnc2FtZVVybCcsIHNhbWVVcmwsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGQobmFtZTogc3RyaW5nLCBjaGVjazogUHJldmVudENoZWNrLCBzdWl0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLnRlc3RzLnNldChuYW1lLCBjaGVjayk7XG4gICAgc3VpdGUgJiYgdGhpcy5zdWl0ZS5wdXNoKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBpbmRpdmlkdWFsIHRlc3RcbiAgICovXG4gIHB1YmxpYyBydW4obmFtZTogc3RyaW5nLCBlbDogTGluaywgZXZlbnQ6IEV2ZW50LCBocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0cy5nZXQobmFtZSkoe1xuICAgICAgZWwsXG4gICAgICBldmVudCxcbiAgICAgIGhyZWYsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHRlc3Qgc3VpdGVcbiAgICovXG4gIHB1YmxpYyBjaGVja0xpbmsoZWw6IExpbmssIGV2ZW50OiBFdmVudCwgaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3VpdGUuc29tZShuYW1lID0+IHRoaXMucnVuKG5hbWUsIGVsLCBldmVudCwgaHJlZikpO1xuICB9XG59XG4iLCIvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvclxuZXhwb3J0IGNsYXNzIEJhcmJhRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlcnJvcjogRXJyb3IsXG4gICAgcHVibGljIGxhYmVsID0gJ0JhcmJhIGVycm9yJyxcbiAgICAuLi5wYXJhbXM6IGFueVtdXG4gICkge1xuICAgIC8vIFBhc3MgcmVtYWluaW5nIGFyZ3VtZW50cyAoaW5jbHVkaW5nIHZlbmRvciBzcGVjaWZpYyBvbmVzKSB0byBwYXJlbnQgY29uc3RydWN0b3JcbiAgICBzdXBlciguLi5wYXJhbXMpO1xuXG4gICAgLy8gTWFpbnRhaW5zIHByb3BlciBzdGFjayB0cmFjZSBmb3Igd2hlcmUgb3VyIGVycm9yIHdhcyB0aHJvd24gKG9ubHkgYXZhaWxhYmxlIG9uIFY4KVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBCYXJiYUVycm9yKTtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWUgPSAnQmFyYmFFcnJvcic7XG4gIH1cbn1cbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvbW9kdWxlcy9zdG9yZVxuICogPGJyPjxicj5cbiAqICMjIFRyYW5zaXRpb25zIHN0b3JlLlxuICpcbiAqIC0gUmVzb2x2ZSB0cmFuc2l0aW9uXG4gKiAtIE1hbmFnZSBydWxlc1xuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL3N0b3JlXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7XG4gIElSdWxlLFxuICBJUnVsZXMsXG4gIElUcmFuc2l0aW9uRGF0YSxcbiAgSVRyYW5zaXRpb25GaWx0ZXJzLFxuICBJVHJhbnNpdGlvbk9uY2UsXG4gIElUcmFuc2l0aW9uUGFnZSxcbiAgUnVsZU5hbWUsXG59IGZyb20gJy4uL2RlZnMnO1xuXG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL0xvZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoJ0BiYXJiYS9jb3JlJyk7XG4gIC8qKlxuICAgKiBBbGwgcmVnaXN0ZXJlZCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBhbGw6IElUcmFuc2l0aW9uUGFnZVtdID0gW107XG4gIC8qKlxuICAgKiBcIlBhZ2Ugb25seVwiIHJlZ2lzdGVyZWQgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBwdWJsaWMgcGFnZTogSVRyYW5zaXRpb25QYWdlW10gPSBbXTtcbiAgLyoqXG4gICAqIFwiT25jZSBvbmx5XCIgcmVnaXN0ZXJlZCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBvbmNlOiBJVHJhbnNpdGlvbk9uY2VbXSA9IFtdO1xuICAvKipcbiAgICogUnVsZXMgZm9yIHRyYW5zaXRpb24gcmVzb2x1dGlvbi5cbiAgICpcbiAgICogRGVmYXVsdHM6XG4gICAqXG4gICAqIC0gbmFtZXNwYWNlXG4gICAqIC0gY3VzdG9tXG4gICAqL1xuICBwcml2YXRlIF9ydWxlczogSVJ1bGVbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnbmFtZXNwYWNlJyxcbiAgICAgIHR5cGU6ICdzdHJpbmdzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjdXN0b20nLFxuICAgICAgdHlwZTogJ2Z1bmN0aW9uJyxcbiAgICB9LFxuICBdO1xuXG4gIC8qKlxuICAgKiBJbml0IHN0b3JlLlxuICAgKi9cbiAgY29uc3RydWN0b3IodHJhbnNpdGlvbnM6IElUcmFuc2l0aW9uUGFnZVtdID0gW10pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0cmFuc2l0aW9ucykge1xuICAgICAgLy8gVE9ETzogYWRkIGNoZWNrIGZvciB2YWxpZCB0cmFuc2l0aW9ucz8gY3JpdGVyaWE/IChvbmNlIHx8IGVudGVyICYmIGxlYXZlKVxuICAgICAgdGhpcy5hbGwgPSB0aGlzLmFsbC5jb25jYXQodHJhbnNpdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBydWxlIG9yIHRyYW5zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgYWRkKHR5cGU6ICdydWxlJyB8ICd0cmFuc2l0aW9uJywgZGF0YTogYW55KTogdm9pZCB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdydWxlJzpcbiAgICAgICAgLy8gVE9ETzogY2hlY2sgZm9yIHZhbGlkIHJ1bGVcbiAgICAgICAgdGhpcy5fcnVsZXMuc3BsaWNlKGRhdGEucG9zaXRpb24gfHwgMCwgMCwgZGF0YS52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndHJhbnNpdGlvbic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBUT0RPOiBjaGVjayBmb3IgdmFsaWQgdHJhbnNpdGlvblxuICAgICAgICB0aGlzLmFsbC5wdXNoKGRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyByZXNvbHZlKFxuICAgIGRhdGE6IElUcmFuc2l0aW9uRGF0YSxcbiAgICBmaWx0ZXJzOiBJVHJhbnNpdGlvbkZpbHRlcnMgPSB7fVxuICApOiBJVHJhbnNpdGlvbk9uY2UgfCBJVHJhbnNpdGlvblBhZ2Uge1xuICAgIC8vIEZpbHRlciBvbiBcIm9uY2VcIlxuICAgIGxldCB0cmFuc2l0aW9ucyA9IGZpbHRlcnMub25jZSA/IHRoaXMub25jZSA6IHRoaXMucGFnZTtcblxuICAgIC8vIEZpbHRlciBvbiBcInNlbGZcIlxuICAgIGlmIChmaWx0ZXJzLnNlbGYpIHtcbiAgICAgIHRyYW5zaXRpb25zID0gdHJhbnNpdGlvbnMuZmlsdGVyKHQgPT4gdC5uYW1lICYmIHQubmFtZSA9PT0gJ3NlbGYnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbnMgPSB0cmFuc2l0aW9ucy5maWx0ZXIodCA9PiAhdC5uYW1lIHx8IHQubmFtZSAhPT0gJ3NlbGYnKTtcbiAgICB9XG5cbiAgICAvLyBBbGwgbWF0Y2hpbmcgdHJhbnNpdGlvbiBpbmZvc1xuICAgIGNvbnN0IG1hdGNoaW5nID0gbmV3IE1hcCgpO1xuXG4gICAgLy8gQWN0aXZlID0gZmlyc3Qgb2YgdmFsaWQgdHJhbnNpdGlvbnNcbiAgICAvLyBzb3J0ZWQgYnkgZGlyZWN0aW9ucyAoZnJvbS90bywgZnJvbSB8fCB0bywg4oCmKVxuICAgIGNvbnN0IGFjdGl2ZSA9IHRyYW5zaXRpb25zLmZpbmQodCA9PiB7XG4gICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgY29uc3QgbWF0Y2ggPSB7fTtcblxuICAgICAgaWYgKGZpbHRlcnMuc2VsZiAmJiB0Lm5hbWUgPT09ICdzZWxmJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgcnVsZXNcbiAgICAgIHRoaXMuX3J1bGVzLnJldmVyc2UoKS5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICB2YWxpZCA9IHRoaXMuX2NoZWNrKHQsIHJ1bGUsIGRhdGEsIG1hdGNoKTtcbiAgICAgICAgICAvLyBGcm9tL3RvIGNoZWNrXG4gICAgICAgICAgaWYgKHQuZnJvbSAmJiB0LnRvKSB7XG4gICAgICAgICAgICB2YWxpZCA9XG4gICAgICAgICAgICAgIHRoaXMuX2NoZWNrKHQsIHJ1bGUsIGRhdGEsIG1hdGNoLCAnZnJvbScpICYmXG4gICAgICAgICAgICAgIHRoaXMuX2NoZWNrKHQsIHJ1bGUsIGRhdGEsIG1hdGNoLCAndG8nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHQuZnJvbSAmJiAhdC50bykge1xuICAgICAgICAgICAgdmFsaWQgPSB0aGlzLl9jaGVjayh0LCBydWxlLCBkYXRhLCBtYXRjaCwgJ2Zyb20nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0LmZyb20gJiYgdC50bykge1xuICAgICAgICAgICAgdmFsaWQgPSB0aGlzLl9jaGVjayh0LCBydWxlLCBkYXRhLCBtYXRjaCwgJ3RvJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbWF0Y2hpbmcuc2V0KHQsIG1hdGNoKTtcblxuICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWN0aXZlTWF0Y2ggPSBtYXRjaGluZy5nZXQoYWN0aXZlKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uVHlwZSA9IFtdO1xuICAgIGlmIChmaWx0ZXJzLm9uY2UpIHtcbiAgICAgIHRyYW5zaXRpb25UeXBlLnB1c2goJ29uY2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvblR5cGUucHVzaCgncGFnZScpO1xuICAgIH1cbiAgICBpZiAoZmlsdGVycy5zZWxmKSB7XG4gICAgICB0cmFuc2l0aW9uVHlwZS5wdXNoKCdzZWxmJyk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZU1hdGNoKSB7XG4gICAgICAvLyBMb2cgcmVzb2x2ZWQgdHJhbnNpdGlvblxuICAgICAgY29uc3QgaW5mb3M6IGFueVtdID0gW2FjdGl2ZV07XG4gICAgICAvLyBMb2cgaWYgbWF0Y2hpbmcgY3JpdGVyaWFcbiAgICAgIE9iamVjdC5rZXlzKGFjdGl2ZU1hdGNoKS5sZW5ndGggPiAwICYmIGluZm9zLnB1c2goYWN0aXZlTWF0Y2gpO1xuXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICBgVHJhbnNpdGlvbiBmb3VuZCBbJHt0cmFuc2l0aW9uVHlwZS5qb2luKCcsJyl9XWAsXG4gICAgICAgIC4uLmluZm9zXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKGBObyB0cmFuc2l0aW9uIGZvdW5kIFske3RyYW5zaXRpb25UeXBlLmpvaW4oJywnKX1dYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGl2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgVXBkYXRlIHN0b3JlLlxuICAgKlxuICAgKiAtIFJlb3JkZXIgdHJhbnNpdGlvbiBieSBwcmlvcml0aWVzXG4gICAqIC0gR2V0IHdhaXQgaW5kaWNhdG9yXG4gICAqIC0gR2V0IG9uY2UgdHJhbnNpdGlvbnNcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgLy8gUmVvcmRlciBieSBwcmlvcml0aWVzXG4gICAgdGhpcy5hbGwgPSB0aGlzLmFsbFxuICAgICAgLm1hcCh0ID0+IHRoaXMuX2FkZFByaW9yaXR5KHQpKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgLSBiLnByaW9yaXR5KVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLm1hcCh0ID0+IHtcbiAgICAgICAgZGVsZXRlIHQucHJpb3JpdHk7XG5cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9KTtcbiAgICB0aGlzLnBhZ2UgPSB0aGlzLmFsbC5maWx0ZXIoXG4gICAgICB0ID0+IHQubGVhdmUgIT09IHVuZGVmaW5lZCB8fCB0LmVudGVyICE9PSB1bmRlZmluZWRcbiAgICApIGFzIElUcmFuc2l0aW9uUGFnZVtdO1xuICAgIHRoaXMub25jZSA9IHRoaXMuYWxsLmZpbHRlcih0ID0+IHQub25jZSAhPT0gdW5kZWZpbmVkKSBhcyBJVHJhbnNpdGlvbk9uY2VbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgQ2hlY2sgaWYgdHJhbnNpdGlvbiBhcHBseS5cbiAgICpcbiAgICogQmFzZWQgb24gcnVsZSwgcGFnZSBkYXRhIGFuZCBvcHRpb25hbCBkaXJlY3Rpb246XG4gICAqXG4gICAqIDEuIHRyYW5zaXRpb24gaGFzIG5vIHJ1bGUgXCJwcm9wZXJ0eVwiOlxuICAgKiAgICAtIGFsd2F5cyByZXR1cm5zIHRydWVcbiAgICogMi4gdHJhbnNpdGlvbiBoYXMgcnVsZSBcInByb3BlcnR5XCI6XG4gICAqICAgICAtIFwic3RyaW5nc1wiIHNob3VsZCBiZSBwcmVzZW50IG9uIGJvdGggc2lkZSAodHJhbnNpdGlvbiArIHBhZ2UpIGFuZCBtYXRjaFxuICAgKiAgICAgLSBcImZ1bmN0aW9uXCIgc2hvdWxkIHJldHVybiB0cnVlXG4gICAqL1xuICBwcml2YXRlIF9jaGVjayhcbiAgICB0cmFuc2l0aW9uOiBJVHJhbnNpdGlvblBhZ2UsXG4gICAgcnVsZTogSVJ1bGUsXG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhLFxuICAgIG1hdGNoOiBhbnksXG4gICAgZGlyZWN0aW9uPzogJ2Zyb20nIHwgJ3RvJ1xuICApOiBib29sZWFuIHtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gICAgbGV0IGhhc01hdGNoID0gZmFsc2U7XG4gICAgY29uc3QgdCA9IHRyYW5zaXRpb247XG4gICAgY29uc3QgeyBuYW1lLCB0eXBlIH0gPSBydWxlO1xuICAgIGNvbnN0IHN0clJ1bGUgPSBuYW1lIGFzIElSdWxlc1snc3RyaW5ncyddO1xuICAgIGNvbnN0IG9ialJ1bGUgPSBuYW1lIGFzIElSdWxlc1snb2JqZWN0J107XG4gICAgY29uc3QgZm5OYW1lID0gbmFtZSBhcyBJUnVsZXNbJ2Z1bmN0aW9uJ107XG4gICAgY29uc3QgYmFzZSA9IGRpcmVjdGlvbiA/IHRbZGlyZWN0aW9uXSA6IHQ7IC8vID0gdCB8fCB0LmZyb20gfHwgdC50b1xuICAgIGNvbnN0IHBhZ2UgPSBkaXJlY3Rpb24gPT09ICd0bycgPyBkYXRhLm5leHQgOiBkYXRhLmN1cnJlbnQ7IC8vID0gY3VycmVudCB8fCBuZXh0XG4gICAgY29uc3QgZXhpc3QgPSBkaXJlY3Rpb24gPyBiYXNlICYmIGJhc2VbbmFtZV0gOiBiYXNlW25hbWVdO1xuXG4gICAgLy8gSWYgdHJhbnNpdGlvbiBydWxlIGV4aXN0c1xuICAgIGlmIChleGlzdCkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZ3MnOlxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgLy8gQXJyYXkgc3VwcG9ydFxuICAgICAgICAgIGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IEFycmF5LmlzQXJyYXkoYmFzZVtzdHJSdWxlXSlcbiAgICAgICAgICAgID8gKGJhc2Vbc3RyUnVsZV0gYXMgc3RyaW5nW10pXG4gICAgICAgICAgICA6IFtiYXNlW3N0clJ1bGVdIGFzIHN0cmluZ107XG5cbiAgICAgICAgICAvLyBGb3IgbWF0Y2hpbmcsIHByb3Agc2hvdWxkIGJlIHByZXNlbnQgb24gYm90aCBzaWRlcyBhbmQgbWF0Y2hcbiAgICAgICAgICBpZiAocGFnZVtzdHJSdWxlXSAmJiBuYW1lcy5pbmRleE9mKHBhZ2Vbc3RyUnVsZV0pICE9PSAtMSkge1xuICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBJZiB0cmFuc2l0aW9uIHByb3AgaXMgZGlmZmVyZW50IGZyb20gY3VycmVudCwgbm90IHZhbGlkXG4gICAgICAgICAgaWYgKG5hbWVzLmluZGV4T2YocGFnZVtzdHJSdWxlXSkgPT09IC0xKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnb2JqZWN0Jzoge1xuICAgICAgICAgIC8vIEFycmF5IHN1cHBvcnRcbiAgICAgICAgICBjb25zdCBuYW1lczogc3RyaW5nW10gPSBBcnJheS5pc0FycmF5KGJhc2Vbb2JqUnVsZV0pXG4gICAgICAgICAgICA/IChiYXNlW29ialJ1bGVdIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgOiBbYmFzZVtvYmpSdWxlXSBhcyBzdHJpbmddO1xuXG4gICAgICAgICAgLy8gRm9yIG1hdGNoaW5nLCBwcm9wIHNob3VsZCBiZSBwcmVzZW50IG9uIGJvdGggc2lkZXMgYW5kIG1hdGNoXG4gICAgICAgICAgaWYgKHBhZ2Vbb2JqUnVsZV0pIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcGFnZVtvYmpSdWxlXS5uYW1lICYmXG4gICAgICAgICAgICAgIG5hbWVzLmluZGV4T2YocGFnZVtvYmpSdWxlXS5uYW1lKSAhPT0gLTFcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0cmFuc2l0aW9uIHByb3AgaXMgZGlmZmVyZW50IGZyb20gY3VycmVudCwgbm90IHZhbGlkXG4gICAgICAgICAgICBpZiAobmFtZXMuaW5kZXhPZihwYWdlW29ialJ1bGVdLm5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgaWYgKGJhc2VbZm5OYW1lXShkYXRhKSkge1xuICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgIG1hdGNoW2RpcmVjdGlvbl0gPSBtYXRjaFtkaXJlY3Rpb25dIHx8IHt9O1xuICAgICAgICAgIG1hdGNoW2RpcmVjdGlvbl1bbmFtZV0gPSB0W2RpcmVjdGlvbl1bbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hbbmFtZV0gPSB0W25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogIyMjIENhbGN1bGF0ZSB0cmFuc2l0aW9uIHByaW9yaXR5LlxuICAgKlxuICAgKiBCYXNlZCBvbjpcbiAgICpcbiAgICogLSBydWxlIFwicG9zaXRpb25cIiAoaW5kZXgpIGdpdmUgdGVucywgaHVuZHJlZHMsIHRob3VzYW5kcywg4oCmXG4gICAqIC0gZnJvbS90byBwcm9wZXJ0aWVzIGdpdmUgdW5pdHMgKDAsIDEgb3IgMilcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVByaW9yaXR5KFxuICAgIHQ6IElUcmFuc2l0aW9uUGFnZSxcbiAgICBydWxlTmFtZTogUnVsZU5hbWUsXG4gICAgcnVsZUluZGV4OiBudW1iZXJcbiAgKTogbnVtYmVyIHtcbiAgICBsZXQgcHJpb3JpdHkgPSAwO1xuXG4gICAgaWYgKFxuICAgICAgdFtydWxlTmFtZV0gfHxcbiAgICAgICh0LmZyb20gJiYgdC5mcm9tW3J1bGVOYW1lXSkgfHxcbiAgICAgICh0LnRvICYmIHQudG9bcnVsZU5hbWVdKVxuICAgICkge1xuICAgICAgcHJpb3JpdHkgKz0gTWF0aC5wb3coMTAsIHJ1bGVJbmRleCk7XG5cbiAgICAgIGlmICh0LmZyb20gJiYgdC5mcm9tW3J1bGVOYW1lXSkge1xuICAgICAgICBwcmlvcml0eSArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHQudG8gJiYgdC50b1tydWxlTmFtZV0pIHtcbiAgICAgICAgcHJpb3JpdHkgKz0gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJpb3JpdHk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRQcmlvcml0eSh0OiBJVHJhbnNpdGlvblBhZ2UpOiBJVHJhbnNpdGlvblBhZ2Uge1xuICAgIHQucHJpb3JpdHkgPSAwO1xuICAgIGxldCBwcmlvcml0eSA9IDA7XG5cbiAgICB0aGlzLl9ydWxlcy5mb3JFYWNoKChydWxlLCBpKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHJ1bGU7XG4gICAgICBjb25zdCBpbmRleCA9IGkgKyAxO1xuXG4gICAgICBwcmlvcml0eSArPSB0aGlzLl9jYWxjdWxhdGVQcmlvcml0eSh0LCBuYW1lLCBpbmRleCk7XG4gICAgfSk7XG5cbiAgICB0LnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICByZXR1cm4gdDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL3RyYW5zaXRpb25zXG4gKiA8YnI+PGJyPlxuICogIyMgVHJhbnNpdGlvbnMgbWFuYWdlci5cbiAqXG4gKiAtIEhhbmRsZSBob29rcyBhbmQgdHJhbnNpdGlvbiBsaWZlY3ljbGVcbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy90cmFuc2l0aW9uc1xuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQge1xuICBIb29rc1RyYW5zaXRpb24sXG4gIEhvb2tzVHJhbnNpdGlvbk1hcCxcbiAgSVRyYW5zaXRpb25EYXRhLFxuICBJVHJhbnNpdGlvbkZpbHRlcnMsXG4gIElUcmFuc2l0aW9uT25jZSxcbiAgSVRyYW5zaXRpb25QYWdlLFxuICBXcmFwcGVyLFxufSBmcm9tICcuLi9kZWZzJztcbi8vIEhvb2tzXG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL2hvb2tzJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBkb20sIGhlbHBlcnMsIHJ1bkFzeW5jIH0gZnJvbSAnLi4vdXRpbHMnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgQmFyYmFFcnJvciB9IGZyb20gJy4vRXJyb3InO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9Mb2dnZXInO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL1N0b3JlJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25zIHtcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcignQGJhcmJhL2NvcmUnKTtcbiAgcHVibGljIHN0b3JlOiBTdG9yZTtcbiAgcHJpdmF0ZSBfcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHRyYW5zaXRpb25zOiBJVHJhbnNpdGlvblBhZ2VbXSA9IFtdKSB7XG4gICAgdGhpcy5zdG9yZSA9IG5ldyBTdG9yZSh0cmFuc2l0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHJlc29sdmVkIHRyYW5zaXRpb25cbiAgICpcbiAgICogLSBiYXNlZCBvbiBkYXRhXG4gICAqL1xuICBwdWJsaWMgZ2V0KFxuICAgIGRhdGE6IElUcmFuc2l0aW9uRGF0YSxcbiAgICBmaWx0ZXJzPzogSVRyYW5zaXRpb25GaWx0ZXJzXG4gICk6IElUcmFuc2l0aW9uT25jZSB8IElUcmFuc2l0aW9uUGFnZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucmVzb2x2ZShkYXRhLCBmaWx0ZXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb24gcnVubmluZyBzdGF0dXMuXG4gICAqL1xuICBnZXQgaXNSdW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ydW5uaW5nO1xuICB9XG4gIHNldCBpc1J1bm5pbmcoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcnVubmluZyA9IHN0YXR1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBmb3IgcmVnaXN0ZXJlZCBvbmNlIHRyYW5zaXRpb24ocykuXG4gICAqL1xuICBnZXQgaGFzT25jZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5vbmNlLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZm9yIHJlZ2lzdGVyZWQgc2VsZiB0cmFuc2l0aW9uLlxuICAgKi9cbiAgZ2V0IGhhc1NlbGYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuYWxsLnNvbWUodCA9PiB0Lm5hbWUgPT09ICdzZWxmJyk7XG4gIH1cblxuICAvKipcbiAgICogIyMjIFdhaXQgaW5kaWNhdG9yLlxuICAgKlxuICAgKiBUZWxscyBCYXJiYSB0byBnZXQgbmV4dCBwYWdlIGRhdGE8YnI+XG4gICAqIGJlZm9yZSBzdGFydGluZyB0aGUgcmVzb2x1dGlvbjxicj5cbiAgICogYmVjYXVzZSBzb21lIHJlZ2lzdGVyZWQgdHJhbnNpdGlvbnMgbmVlZDxicj5cbiAgICogbmV4dCBwYWdlIGRhdGEgdG8gYmUgcmVzb2x2ZWQgKGVnOiBgc3luYzogdHJ1ZWAsIGB0bzogeyBuYW1lc3BhY2UgfWAsIOKApilcbiAgICovXG4gIGdldCBzaG91bGRXYWl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmFsbC5zb21lKHQgPT4gKHQudG8gJiYgIXQudG8ucm91dGUpIHx8IHQuc3luYyk7XG4gIH1cblxuICAvKipcbiAgICogIyMjIERvIFwib25jZVwiIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIEhvb2tzOiBzZWUgW1tIb29rc09uY2VdXS5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBkb09uY2Uoe1xuICAgIGRhdGEsXG4gICAgdHJhbnNpdGlvbixcbiAgfToge1xuICAgIGRhdGE6IElUcmFuc2l0aW9uRGF0YTtcbiAgICB0cmFuc2l0aW9uOiBJVHJhbnNpdGlvbk9uY2U7XG4gIH0pIHtcbiAgICBjb25zdCB0ID0gdHJhbnNpdGlvbiB8fCB7fTtcbiAgICB0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYmVmb3JlT25jZScsIGRhdGEsIHQpO1xuICAgICAgYXdhaXQgdGhpcy5vbmNlKGRhdGEsIHQpO1xuICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2FmdGVyT25jZScsIGRhdGEsIHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvb25jZV0nKTtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIyMjIERvIFwicGFnZVwiIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIEhvb2tzOiBzZWUgW1tIb29rc1BhZ2VdXS5cbiAgICpcbiAgICogYHN5bmM6IGZhbHNlYCAoZGVmYXVsdCkgb3JkZXI6XG4gICAqXG4gICAqIDEuIGJlZm9yZVxuICAgKiAyLiBiZWZvcmVMZWF2ZVxuICAgKiAzLiBsZWF2ZVxuICAgKiA0LiBhZnRlckxlYXZlXG4gICAqIDUuIGJlZm9yZUVudGVyXG4gICAqIDYuIGVudGVyXG4gICAqIDcuIGFmdGVyRW50ZXJcbiAgICogOC4gYWZ0ZXJcbiAgICpcbiAgICogYHN5bmM6IHRydWVgIG9yZGVyOlxuICAgKlxuICAgKiAxLiBiZWZvcmVcbiAgICogMi4gYmVmb3JlTGVhdmVcbiAgICogMy4gYmVmb3JlRW50ZXJcbiAgICogNC4gbGVhdmUgJiBlbnRlclxuICAgKiA1LiBhZnRlckxlYXZlXG4gICAqIDYuIGFmdGVyRW50ZXJcbiAgICogNy4gYWZ0ZXJcbiAgICovXG4gIHB1YmxpYyBhc3luYyBkb1BhZ2Uoe1xuICAgIGRhdGEsXG4gICAgdHJhbnNpdGlvbixcbiAgICBwYWdlLFxuICAgIHdyYXBwZXIsXG4gIH06IHtcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGE7XG4gICAgdHJhbnNpdGlvbjogSVRyYW5zaXRpb25QYWdlO1xuICAgIHBhZ2U6IFByb21pc2U8c3RyaW5nIHwgdm9pZD47XG4gICAgd3JhcHBlcjogV3JhcHBlcjtcbiAgfSkge1xuICAgIGNvbnN0IHQgPSB0cmFuc2l0aW9uIHx8IHt9O1xuICAgIGNvbnN0IHN5bmMgPSB0LnN5bmMgPT09IHRydWUgfHwgZmFsc2U7XG5cbiAgICB0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDaGVjayBzeW5jIG1vZGUsIHdhaXQgZm9yIG5leHQgY29udGVudFxuICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgYXdhaXQgaGVscGVycy51cGRhdGUocGFnZSwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdiZWZvcmUnLCBkYXRhLCB0KTtcblxuICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFkZChkYXRhLCB3cmFwcGVyKTtcbiAgICAgICAgICAvLyBCZWZvcmUgYWN0aW9uc1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdiZWZvcmVMZWF2ZScsIGRhdGEsIHQpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdiZWZvcmVFbnRlcicsIGRhdGEsIHQpO1xuXG4gICAgICAgICAgLy8gQWN0aW9uc1xuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmxlYXZlKGRhdGEsIHQpLCB0aGlzLmVudGVyKGRhdGEsIHQpXSk7XG5cbiAgICAgICAgICAvLyBBZnRlciBhY3Rpb25zXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2FmdGVyTGVhdmUnLCBkYXRhLCB0KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXJFbnRlcicsIGRhdGEsIHQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKCdUcmFuc2l0aW9uIGVycm9yIFtzeW5jXScpO1xuICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFyYmFFcnJvcihlcnJvciwgJ1RyYW5zaXRpb24gZXJyb3IgW3N5bmNdJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGVhdmVSZXN1bHQ6IGFueSA9IGZhbHNlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gTGVhdmVcbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYmVmb3JlTGVhdmUnLCBkYXRhLCB0KTtcblxuICAgICAgICAgIGxlYXZlUmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5sZWF2ZShkYXRhLCB0KSxcbiAgICAgICAgICAgIGhlbHBlcnMudXBkYXRlKHBhZ2UsIGRhdGEpLFxuICAgICAgICAgIF0pLnRoZW4odmFsdWVzID0+IHZhbHVlc1swXSk7XG5cbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXJMZWF2ZScsIGRhdGEsIHQpO1xuXG4gICAgICAgICAgLy8gVE9ETzogY2hlY2sgaGVyZSBcInZhbGlkXCIgcGFnZSByZXN1bHRcbiAgICAgICAgICAvLyBiZWZvcmUgZ29pbmcgZnVydGhlclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKCdUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvbGVhdmVdJyk7XG4gICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25FcnJvcihlcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCYXJiYUVycm9yKFxuICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgJ1RyYW5zaXRpb24gZXJyb3IgW2JlZm9yZS9hZnRlci9sZWF2ZV0nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gRW50ZXJcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgIGlmIChsZWF2ZVJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkKGRhdGEsIHdyYXBwZXIpO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYmVmb3JlRW50ZXInLCBkYXRhLCB0KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZW50ZXIoZGF0YSwgdCwgbGVhdmVSZXN1bHQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2FmdGVyRW50ZXInLCBkYXRhLCB0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ1RyYW5zaXRpb24gZXJyb3IgW2JlZm9yZS9hZnRlci9lbnRlcl0nKTtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbkVycm9yKGVycm9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJhcmJhRXJyb3IoXG4gICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAnVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL2VudGVyXSdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBjdXJyZW50IGNvbnRhaWVuclxuICAgICAgYXdhaXQgdGhpcy5yZW1vdmUoZGF0YSk7XG5cbiAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdhZnRlcicsIGRhdGEsIHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAgIC8vIElmIFwiY3VzdG9tL3NwZWNpZmljXCIgYmFyYmEgZXJyb3IuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKGVycm9yLm5hbWUgJiYgZXJyb3IubmFtZSA9PT0gJ0JhcmJhRXJyb3InKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGVycm9yLmxhYmVsKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IuZXJyb3IpO1xuXG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBlcnJvciBbcGFnZV0nKTtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uY2UgaG9vayArIGFzeW5jIFwib25jZVwiIHRyYW5zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25jZShkYXRhOiBJVHJhbnNpdGlvbkRhdGEsIHQ6IElUcmFuc2l0aW9uT25jZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IGhvb2tzLmRvKCdvbmNlJywgZGF0YSwgdCk7XG5cbiAgICByZXR1cm4gdC5vbmNlID8gcnVuQXN5bmModC5vbmNlLCB0KShkYXRhKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExlYXZlIGhvb2sgKyBhc3luYyBcImxlYXZlXCIgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBsZWF2ZShkYXRhOiBJVHJhbnNpdGlvbkRhdGEsIHQ6IElUcmFuc2l0aW9uUGFnZSk6IFByb21pc2U8YW55PiB7XG4gICAgYXdhaXQgaG9va3MuZG8oJ2xlYXZlJywgZGF0YSwgdCk7XG5cbiAgICByZXR1cm4gdC5sZWF2ZSA/IHJ1bkFzeW5jKHQubGVhdmUsIHQpKGRhdGEpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRW50ZXIgaG9vayArIGFzeW5jIFwiZW50ZXJcIiB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGVudGVyKFxuICAgIGRhdGE6IElUcmFuc2l0aW9uRGF0YSxcbiAgICB0OiBJVHJhbnNpdGlvblBhZ2UsXG4gICAgbGVhdmVSZXN1bHQ/OiBhbnlcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgaG9va3MuZG8oJ2VudGVyJywgZGF0YSwgdCk7XG5cbiAgICByZXR1cm4gdC5lbnRlclxuICAgICAgPyBydW5Bc3luYyh0LmVudGVyLCB0KShkYXRhLCBsZWF2ZVJlc3VsdClcbiAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5leHQgY29udGFpbmVyLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGFkZChkYXRhOiBJVHJhbnNpdGlvbkRhdGEsIHdyYXBwZXI6IFdyYXBwZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBkb20uYWRkQ29udGFpbmVyKGRhdGEubmV4dC5jb250YWluZXIsIHdyYXBwZXIpO1xuICAgIGhvb2tzLmRvKCduZXh0QWRkZWQnLCBkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY3VycmVudCBjb250YWluZXIuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcmVtb3ZlKGRhdGE6IElUcmFuc2l0aW9uRGF0YSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGRvbS5yZW1vdmVDb250YWluZXIoZGF0YS5jdXJyZW50LmNvbnRhaW5lcik7XG4gICAgaG9va3MuZG8oJ2N1cnJlbnRSZW1vdmVkJywgZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1RyYW5zaXRpb25FcnJvcihlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgIC8vIEVycm9ycyBmcm9tIHJlcXVlc3RcbiAgICAgIHJldHVybiAhL1RpbWVvdXQgZXJyb3J8RmV0Y2ggZXJyb3IvLnRlc3QoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yLnN0YXR1cykge1xuICAgICAgLy8gRXJyb3JzIGZyb20gcmVxdWVzdFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERvIGhvb2tzICsgYXN5bmMgdHJhbnNpdGlvbiBtZXRob2RzLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZG9Bc3luY0hvb2soXG4gICAgaG9vazogSG9va3NUcmFuc2l0aW9uLFxuICAgIGRhdGE6IElUcmFuc2l0aW9uRGF0YSxcbiAgICB0OiBIb29rc1RyYW5zaXRpb25NYXBcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgaG9va3MuZG8oaG9vaywgZGF0YSwgdCk7XG5cbiAgICByZXR1cm4gdFtob29rXSA/IHJ1bkFzeW5jKHRbaG9va10sIHQpKGRhdGEpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvbW9kdWxlcy92aWV3c1xuICogPGJyPjxicj5cbiAqICMjIFZpZXdzIG1hbmFnZXIuXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvdmlld3NcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSG9va3NWaWV3LCBJVmlldywgSVZpZXdEYXRhIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBIb29rc1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi9ob29rcyc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgcnVuQXN5bmMgfSBmcm9tICcuLi91dGlscyc7XG4vLyBUeXBlc1xudHlwZSBIb29rID0gKGRhdGE6IElWaWV3RGF0YSkgPT4gUHJvbWlzZTx2b2lkPjtcblxuZXhwb3J0IGNsYXNzIFZpZXdzIHtcbiAgLyoqXG4gICAqIEF2YWlsYWJsZSBob29rIG5hbWVzIGZvciB2aWV3cy5cbiAgICovXG4gIHB1YmxpYyBuYW1lczogSG9va3NWaWV3W10gPSBbXG4gICAgJ2JlZm9yZUxlYXZlJyxcbiAgICAnYWZ0ZXJMZWF2ZScsXG4gICAgJ2JlZm9yZUVudGVyJyxcbiAgICAnYWZ0ZXJFbnRlcicsXG4gIF07XG4gIC8qKlxuICAgKiBSZWdpc3RlcmVkIHZpZXdzIGJ5IG5hbWVzcGFjZS5cbiAgICovXG4gIHB1YmxpYyBieU5hbWVzcGFjZTogTWFwPHN0cmluZywgSVZpZXc+ID0gbmV3IE1hcCgpO1xuXG4gIC8qKlxuICAgKiBJbml0IHZpZXdzLlxuICAgKi9cbiAgY29uc3RydWN0b3Iodmlld3M6IElWaWV3W10pIHtcbiAgICBpZiAodmlld3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVE9ETzogYWRkIGNoZWNrXG4gICAgLy8gZm9yIHZhbGlkIHZpZXdzPyBjcml0ZXJpYT8gKG5hbWVzcGFjZSBwcm9wZXJ0eSwgc3RyaW5nID8pXG4gICAgLy8gb3IgZHVwbGljYXRlXG4gICAgdmlld3MuZm9yRWFjaCh2aWV3ID0+IHtcbiAgICAgIHRoaXMuYnlOYW1lc3BhY2Uuc2V0KHZpZXcubmFtZXNwYWNlLCB2aWV3KTtcbiAgICB9KTtcblxuICAgIHRoaXMubmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGhvb2tzW25hbWVdKHRoaXMuX2NyZWF0ZUhvb2sobmFtZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgaG9vayBtZXRob2QuXG4gICAqXG4gICAqIC0gZ2V0IHZpZXcgYmFzZWQgb24gbmFtZXNwYWNlXG4gICAqIC0gZXhlY3V0ZSBjYWxsYmFjayB3aXRoIHRyYW5zaXRpb24gZGF0YVxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlSG9vayhuYW1lOiBIb29rc1ZpZXcpOiBIb29rIHtcbiAgICByZXR1cm4gZGF0YSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWVzcGFjZSB9ID0gbmFtZS5tYXRjaCgvZW50ZXIvaSkgPyBkYXRhLm5leHQgOiBkYXRhLmN1cnJlbnQ7XG4gICAgICBjb25zdCB2aWV3ID0gdGhpcy5ieU5hbWVzcGFjZS5nZXQobmFtZXNwYWNlKTtcblxuICAgICAgLy8gVE9ETzogbWFuYWdlIHNlbGbigKZcbiAgICAgIC8vIGlmICh2aWV3ICYmIGRhdGEudHJpZ2dlciAhPT0gJ3NlbGYnKSB7XG4gICAgICBpZiAodmlldyAmJiB2aWV3W25hbWVdKSB7XG4gICAgICAgIHJldHVybiBydW5Bc3luYyh2aWV3W25hbWVdLCB2aWV3KShkYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gIH1cbn1cbiIsIi8vIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgcG9seWZpbGxcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L21hdGNoZXMjUG9seWZpbGxcbmlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID1cbiAgICAoRWxlbWVudCBhcyBhbnkpLnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLy8gRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCBwb2x5ZmlsbFxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xvc2VzdCNQb2x5ZmlsbFxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0KHM6IHN0cmluZykge1xuICAgIGxldCBlbCA9IHRoaXM7XG5cbiAgICBkbyB7XG4gICAgICBpZiAoZWwubWF0Y2hlcyhzKSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG5cbiAgICAgIGVsID0gKGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZSkgYXMgRWxlbWVudDtcbiAgICB9IHdoaWxlIChlbCAhPT0gbnVsbCAmJiBlbC5ub2RlVHlwZSA9PT0gMSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb3JlL3NjaGVtYXNcbiAqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSVNjaGVtYVBhZ2UgfSBmcm9tICcuLi9kZWZzJztcblxuLyoqXG4gKiBTZWUgW1tJU2NoZW1hUGFnZV1dXG4gKi9cbmV4cG9ydCBjb25zdCBzY2hlbWFQYWdlOiBJU2NoZW1hUGFnZSA9IHtcbiAgY29udGFpbmVyOiBudWxsLFxuICBodG1sOiAnJyxcbiAgbmFtZXNwYWNlOiAnJyxcbiAgdXJsOiB7XG4gICAgaGFzaDogJycsXG4gICAgaHJlZjogJycsXG4gICAgcGF0aDogJycsXG4gICAgcG9ydDogbnVsbCxcbiAgICBxdWVyeToge30sXG4gIH0sXG59O1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZVxuICogPGJyPjxicj5cbiAqICMjIEJhcmJhIGNvcmUgb2JqZWN0XG4gKlxuICogTWFpbiBtZXRob2RzOlxuICpcbiAqIC0gYC5pbml0KClgIGZvciBpbml0aWFsaXphdGlvbiB3aXRoIG9wdGlvbnNcbiAqIC0gYC51c2UoKWAgZm9yIHBsdWdpbnNcbiAqXG4gKiBAbW9kdWxlIGNvcmVcbiAqL1xuXG4vKioqL1xuXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbi8vIERlZmluaXRpb25zXG5pbXBvcnQge1xuICBJQmFyYmFPcHRpb25zLFxuICBJQmFyYmFQbHVnaW4sXG4gIElnbm9yZU9wdGlvbixcbiAgSVNjaGVtYVBhZ2UsXG4gIElUcmFuc2l0aW9uRGF0YSxcbiAgSVRyYW5zaXRpb25PbmNlLFxuICBJVHJhbnNpdGlvblBhZ2UsXG4gIExpbmssXG4gIExpbmtFdmVudCxcbiAgUmVxdWVzdEN1c3RvbUVycm9yLFxuICBSZXF1ZXN0RXJyb3JPclJlc3BvbnNlLFxuICBTY2hlbWFBdHRyaWJ1dGVWYWx1ZXMsXG4gIFRyaWdnZXIsXG4gIFdyYXBwZXIsXG59IGZyb20gJy4vZGVmcyc7XG4vLyBIb29rc1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuL2hvb2tzJztcbi8vIE1vZHVsZXNcbmltcG9ydCB7IENhY2hlIH0gZnJvbSAnLi9tb2R1bGVzL0NhY2hlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbW9kdWxlcy9Mb2dnZXInO1xuaW1wb3J0IHsgUHJldmVudCB9IGZyb20gJy4vbW9kdWxlcy9QcmV2ZW50JztcbmltcG9ydCB7IFRyYW5zaXRpb25zIH0gZnJvbSAnLi9tb2R1bGVzL1RyYW5zaXRpb25zJztcbmltcG9ydCB7IFZpZXdzIH0gZnJvbSAnLi9tb2R1bGVzL1ZpZXdzJztcbi8vIFBvbHlmaWxsc1xuaW1wb3J0ICcuL3BvbHlmaWxscyc7XG4vLyBTY2hlbWFzXG5pbXBvcnQgeyBzY2hlbWFBdHRyaWJ1dGUgfSBmcm9tICcuL3NjaGVtYXMvYXR0cmlidXRlJztcbmltcG9ydCB7IHNjaGVtYVBhZ2UgfSBmcm9tICcuL3NjaGVtYXMvcGFnZSc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgZG9tLCBoZWxwZXJzLCBoaXN0b3J5LCByZXF1ZXN0LCB1cmwgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIENvcmUge1xuICAvKipcbiAgICogVmVyc2lvbi5cbiAgICovXG4gIHB1YmxpYyB2ZXJzaW9uOiBzdHJpbmcgPSB2ZXJzaW9uO1xuICAvKipcbiAgICogU2NoZW1hcy5cbiAgICovXG4gIHB1YmxpYyBzY2hlbWFQYWdlOiBJU2NoZW1hUGFnZSA9IHNjaGVtYVBhZ2U7XG4gIC8qKlxuICAgKiBMb2dnZXIgY2xhc3MsIGFsbG93cyBwbHVnaW5zIHRvIGNyZWF0ZSBMb2dnZXIuXG4gICAqL1xuICBwdWJsaWMgTG9nZ2VyOiB0eXBlb2YgTG9nZ2VyID0gTG9nZ2VyO1xuICAvKipcbiAgICogQmFyYmEgbG9nZ2VyLlxuICAgKi9cbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcignQGJhcmJhL2NvcmUnKTtcbiAgLyoqXG4gICAqIFBsdWdpbnMuXG4gICAqL1xuICBwdWJsaWMgcGx1Z2luczogQXJyYXk8SUJhcmJhUGx1Z2luPGFueT4+ID0gW107XG4gIC8qKlxuICAgKiBPcHRpb25zXG4gICAqL1xuICBwdWJsaWMgdGltZW91dDogbnVtYmVyO1xuICBwdWJsaWMgY2FjaGVJZ25vcmU6IElnbm9yZU9wdGlvbjtcbiAgcHVibGljIHByZWZldGNoSWdub3JlOiBJZ25vcmVPcHRpb247XG4gIHB1YmxpYyBwcmV2ZW50UnVubmluZzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEhvb2tzXG4gICAqL1xuICBwdWJsaWMgaG9va3MgPSBob29rcztcbiAgLyoqXG4gICAqIE1vZHVsZXMuXG4gICAqL1xuICAvLyBwdWJsaWMgaGlzdG9yeTogSGlzdG9yeTtcbiAgcHVibGljIGNhY2hlOiBDYWNoZTtcbiAgcHVibGljIHByZXZlbnQ6IFByZXZlbnQ7XG4gIHB1YmxpYyB0cmFuc2l0aW9uczogVHJhbnNpdGlvbnM7XG4gIHB1YmxpYyB2aWV3czogVmlld3M7XG4gIC8qKlxuICAgKiBVdGlscy5cbiAgICovXG4gIHB1YmxpYyBkb20gPSBkb207XG4gIHB1YmxpYyBoZWxwZXJzID0gaGVscGVycztcbiAgcHVibGljIGhpc3RvcnkgPSBoaXN0b3J5O1xuICBwdWJsaWMgcmVxdWVzdCA9IHJlcXVlc3Q7XG4gIHB1YmxpYyB1cmwgPSB1cmw7XG5cbiAgcHJpdmF0ZSBfZGF0YTogSVRyYW5zaXRpb25EYXRhO1xuICBwcml2YXRlIF9yZXF1ZXN0Q3VzdG9tRXJyb3I6IFJlcXVlc3RDdXN0b21FcnJvcjtcbiAgcHJpdmF0ZSBfd3JhcHBlcjogV3JhcHBlcjtcblxuICAvKipcbiAgICogIyMjIEluaXQgcGx1Z2luIHdpdGggb3B0aW9ucy5cbiAgICpcbiAgICogU2VlIFtbSUJhcmJhUGx1Z2luXV0gZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIHB1YmxpYyB1c2U8VD4ocGx1Z2luOiBJQmFyYmFQbHVnaW48VD4sIG9wdGlvbnM/OiBUKTogdm9pZCB7XG4gICAgY29uc3QgaW5zdGFsbGVkUGx1Z2lucyA9IHRoaXMucGx1Z2lucztcblxuICAgIC8vIFBsdWdpbiBpbnN0YWxsYXRpb25cbiAgICBpZiAoaW5zdGFsbGVkUGx1Z2lucy5pbmRleE9mKHBsdWdpbikgPiAtMSkge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihgUGx1Z2luIFske3BsdWdpbi5uYW1lfV0gYWxyZWFkeSBpbnN0YWxsZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBsdWdpbi5pbnN0YWxsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKGBQbHVnaW4gWyR7cGx1Z2luLm5hbWV9XSBoYXMgbm8gXCJpbnN0YWxsXCIgbWV0aG9kLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGx1Z2luLmluc3RhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgaW5zdGFsbGVkUGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gIH1cblxuICAvKipcbiAgICogIyMjIEluaXQgYmFyYmEgd2l0aCBvcHRpb25zLlxuICAgKlxuICAgKiBTZWUgW1tJQmFyYmFPcHRpb25zXV0gZm9yIG1vcmUgZGV0YWlscy5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZXMgYXJlOlxuICAgKlxuICAgKiAtIHRyYW5zaXRpb25zOiBgW11gXG4gICAqIC0gdmlld3M6IGBbXWBcbiAgICogLSBzY2hlbWE6IFtbU2NoZW1hQXR0cmlidXRlXV1cbiAgICogLSB0aW1lb3V0OiBgMmUzYFxuICAgKiAtIGNhY2hlSWdub3JlOiBgZmFsc2VgXG4gICAqIC0gcHJlZmV0Y2hJZ25vcmU6IGBmYWxzZWBcbiAgICogLSBwcmV2ZW50UnVubmluZzogYGZhbHNlYFxuICAgKiAtIHByZXZlbnQ6IGBudWxsYCxcbiAgICogLSBkZWJ1ZzogYGZhbHNlYFxuICAgKiAtIGxvZ0xldmVsOiBgJ2RlYnVnJ2BcbiAgICovXG4gIHB1YmxpYyBpbml0KFxuICAgIC8qKiBAaWdub3JlICovIHtcbiAgICAgIHRyYW5zaXRpb25zID0gW10sXG4gICAgICB2aWV3cyA9IFtdLFxuICAgICAgc2NoZW1hID0gc2NoZW1hQXR0cmlidXRlLFxuICAgICAgcmVxdWVzdEVycm9yLFxuICAgICAgdGltZW91dCA9IDJlMyxcbiAgICAgIGNhY2hlSWdub3JlID0gZmFsc2UsXG4gICAgICBwcmVmZXRjaElnbm9yZSA9IGZhbHNlLFxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIHByZXZlbnRSdW5uaW5nID0gZmFsc2UsXG4gICAgICBwcmV2ZW50OiBwcmV2ZW50Q3VzdG9tID0gbnVsbCxcbiAgICAgIGRlYnVnID0gZmFsc2UsXG4gICAgICBsb2dMZXZlbCA9ICdvZmYnLFxuICAgIH06IElCYXJiYU9wdGlvbnMgPSB7fVxuICApIHtcbiAgICAvLyAwLiBTZXQgbG9nZ2VyIGxldmVsIGFuZCBwcmludCB2ZXJzaW9uXG4gICAgTG9nZ2VyLnNldExldmVsKGRlYnVnID09PSB0cnVlID8gJ2RlYnVnJyA6IGxvZ0xldmVsKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKHRoaXMudmVyc2lvbik7XG5cbiAgICAvLyAxLiBNYW5hZ2Ugb3B0aW9uc1xuICAgIE9iamVjdC5rZXlzKHNjaGVtYSkuZm9yRWFjaChrID0+IHtcbiAgICAgIGNvbnN0IGF0dHIgPSBrIGFzIFNjaGVtYUF0dHJpYnV0ZVZhbHVlcztcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChzY2hlbWFBdHRyaWJ1dGVbYXR0cl0pIHtcbiAgICAgICAgc2NoZW1hQXR0cmlidXRlW2F0dHJdID0gc2NoZW1hW2F0dHJdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3JlcXVlc3RDdXN0b21FcnJvciA9IHJlcXVlc3RFcnJvcjtcbiAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgIHRoaXMuY2FjaGVJZ25vcmUgPSBjYWNoZUlnbm9yZTtcbiAgICB0aGlzLnByZWZldGNoSWdub3JlID0gcHJlZmV0Y2hJZ25vcmU7XG4gICAgdGhpcy5wcmV2ZW50UnVubmluZyA9IHByZXZlbnRSdW5uaW5nO1xuXG4gICAgLy8gMi4gR2V0IGFuZCBjaGVjayB3cmFwcGVyXG4gICAgdGhpcy5fd3JhcHBlciA9IHRoaXMuZG9tLmdldFdyYXBwZXIoKTtcbiAgICBpZiAoIXRoaXMuX3dyYXBwZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW0BiYXJiYS9jb3JlXSBObyBCYXJiYSB3cmFwcGVyIGZvdW5kJyk7XG4gICAgfVxuICAgIHRoaXMuX3dyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7IC8vIEExMXlcblxuICAgIC8vIDMuIEluaXQgcGFnZXMgKGdldCBcImN1cnJlbnRcIiBkYXRhKVxuICAgIHRoaXMuX3Jlc2V0RGF0YSgpO1xuXG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLmRhdGE7XG5cbiAgICBpZiAoIWN1cnJlbnQuY29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tAYmFyYmEvY29yZV0gTm8gQmFyYmEgY29udGFpbmVyIGZvdW5kJyk7XG4gICAgfVxuXG4gICAgLy8gNC4gSW5pdCBvdGhlciBtb2R1bGVzXG4gICAgdGhpcy5jYWNoZSA9IG5ldyBDYWNoZShjYWNoZUlnbm9yZSk7XG4gICAgdGhpcy5wcmV2ZW50ID0gbmV3IFByZXZlbnQocHJlZmV0Y2hJZ25vcmUpO1xuICAgIHRoaXMudHJhbnNpdGlvbnMgPSBuZXcgVHJhbnNpdGlvbnModHJhbnNpdGlvbnMpO1xuICAgIHRoaXMudmlld3MgPSBuZXcgVmlld3Modmlld3MpO1xuXG4gICAgLy8gQWRkIHByZXZlbnQgY3VzdG9tXG4gICAgaWYgKHByZXZlbnRDdXN0b20gIT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJldmVudEN1c3RvbSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tAYmFyYmEvY29yZV0gUHJldmVudCBzaG91bGQgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByZXZlbnQuYWRkKCdwcmV2ZW50Q3VzdG9tJywgcHJldmVudEN1c3RvbSk7XG4gICAgfVxuXG4gICAgLy8gNS4gVXNlIFwiY3VycmVudFwiIGRhdGFcbiAgICAvLyBJbml0IGhpc3RvcnlcbiAgICB0aGlzLmhpc3RvcnkuaW5pdChjdXJyZW50LnVybC5ocmVmLCBjdXJyZW50Lm5hbWVzcGFjZSk7XG4gICAgLy8gQWRkIHRvIGNhY2hlXG4gICAgLy8gVE9ETzogZG8gbm90IGNhY2hlIHJlbmRlcmVyIEhUTUwsIG9ubHkgcmVxdWVzdCByZXN1bHRz4oCmXG4gICAgLy8gdGhpcy5jYWNoZS5zZXQoY3VycmVudC51cmwuaHJlZiwgUHJvbWlzZS5yZXNvbHZlKGN1cnJlbnQuaHRtbCksICdpbml0Jyk7XG5cbiAgICAvLyA2LiBCaW5kIGNvbnRleHRcbiAgICB0aGlzLl9vbkxpbmtFbnRlciA9IHRoaXMuX29uTGlua0VudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25MaW5rQ2xpY2sgPSB0aGlzLl9vbkxpbmtDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uU3RhdGVDaGFuZ2UgPSB0aGlzLl9vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYmluZCgpO1xuXG4gICAgLy8gNy4gSW5pdCBwbHVnaW5zXG4gICAgdGhpcy5wbHVnaW5zLmZvckVhY2gocGx1Z2luID0+IHBsdWdpbi5pbml0KCkpO1xuXG4gICAgLy8gOC4gQmFyYmEgcmVhZHlcbiAgICAvLyBTZXQgbmV4dCArIHRyaWdnZXIgZm9yIG9uY2UgYW5kIGBiZWZvcmVFbnRlcmAvYGFmdGVyRW50ZXJgIHZpZXcgb24gcGFnZSBsb2FkLlxuICAgIGNvbnN0IG9uY2VEYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgb25jZURhdGEudHJpZ2dlciA9ICdiYXJiYSc7XG4gICAgb25jZURhdGEubmV4dCA9IG9uY2VEYXRhLmN1cnJlbnQ7XG4gICAgb25jZURhdGEuY3VycmVudCA9IHsgLi4udGhpcy5zY2hlbWFQYWdlIH07XG4gICAgdGhpcy5ob29rcy5kbygncmVhZHknLCBvbmNlRGF0YSk7XG5cbiAgICAvLyA5LiBGaW5hbGx5LCBkbyBvbmNl4oCmXG4gICAgdGhpcy5vbmNlKG9uY2VEYXRhKTtcblxuICAgIC8vIENsZWFuIGRhdGEgZm9yIGZpcnN0IGJhcmJhIHRyYW5zaXRpb27igKZcbiAgICB0aGlzLl9yZXNldERhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2V0RGF0YSgpO1xuICAgIHRoaXMuX3VuYmluZCgpO1xuICAgIHRoaXMuaGlzdG9yeS5jbGVhcigpO1xuICAgIHRoaXMuaG9va3MuY2xlYXIoKTtcbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcbiAgfVxuXG4gIGdldCBkYXRhKCk6IElUcmFuc2l0aW9uRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgd3JhcHBlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZXI7XG4gIH1cblxuICAvKipcbiAgICogIyMjIEZvcmNlIGEgcGFnZSBjaGFuZ2Ugd2l0aG91dCBCYXJiYSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIGZvcmNlKGhyZWY6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIERFVlxuICAgIC8vIENhbiBiZSB1c2VkIHdhaXRpbmcgYW5pbWF0aW9uIGNhbmNlbGxhdGlvbiBtYW5hZ2VtZW504oCmXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihocmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgR28gZm9yIGEgQmFyYmEgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogTWFuYWdlIFwic2VsZiBwYWdlXCIgaHJlZjpcbiAgICpcbiAgICogLSBpZiBzYW1lIHVybCBhbmQgbm8gc2VsZiB0cmFuc2l0aW9uLCBrZWVwIGRlZmF1bHQgYmVoYXZpb3JcbiAgICogICAtIGxpbms6IHJlbG9hZCB0aGUgcGFnZVxuICAgKiAgIC0gYW5jaG9yOiBzY3JvbGwgdG9cbiAgICogLSBpZiBzYW1lIHVybCB3aXRoIHNlbGYgdHJhbnNpdGlvbiwgdXNlIGl0XG4gICAqIC0gdGhlbiBzdGFydCBhIHBhZ2UgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBnbyhcbiAgICBocmVmOiBzdHJpbmcsXG4gICAgdHJpZ2dlcjogVHJpZ2dlciA9ICdiYXJiYScsXG4gICAgZT86IExpbmtFdmVudCB8IFBvcFN0YXRlRXZlbnRcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gSWYgYW5pbWF0aW9uIHJ1bm5pbmcsIGZvcmNlIHJlbG9hZFxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25zLmlzUnVubmluZykge1xuICAgICAgdGhpcy5mb3JjZShocmVmKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzZWxmID0gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBwcmV2ZW50IHNhbWVVUkwgYWdhaW5zdCBjdXJyZW50IGhpc3RvcnlcbiAgICAvLyArIHN0YXRlIGNoZWNrXG4gICAgLy8gKyB1cGRhdGUgdHJpZ2dlciB3aXRoIGRpcmVjdGlvblxuICAgIGlmICh0cmlnZ2VyID09PSAncG9wc3RhdGUnKSB7XG4gICAgICBzZWxmID1cbiAgICAgICAgdGhpcy5oaXN0b3J5LmN1cnJlbnQgJiZcbiAgICAgICAgdGhpcy51cmwuZ2V0UGF0aCh0aGlzLmhpc3RvcnkuY3VycmVudC51cmwpID09PSB0aGlzLnVybC5nZXRQYXRoKGhyZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmID0gdGhpcy5wcmV2ZW50LnJ1bignc2FtZVVybCcsIG51bGwsIG51bGwsIGhyZWYpO1xuICAgIH1cblxuICAgIGlmIChzZWxmICYmICF0aGlzLnRyYW5zaXRpb25zLmhhc1NlbGYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmlnZ2VyID0gdGhpcy5oaXN0b3J5LmNoYW5nZShocmVmLCB0cmlnZ2VyLCBlKTtcblxuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBhZ2UoaHJlZiwgdHJpZ2dlciwgc2VsZik7XG4gIH1cblxuICAvKipcbiAgICogIyMjIFN0YXJ0IGFuIFwib25jZVwiIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIElmIHNvbWUgcmVnaXN0ZXJlZCBcIm9uY2VcIiB0cmFuc2l0aW9uLFxuICAgKiBnZXQgdGhlIFwicmVzb2x2ZWRcIiB0cmFuc2l0aW9uIGZyb20gdGhlIHN0b3JlIGFuZCBzdGFydCBpdC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvbmNlKHJlYWR5RGF0YTogSVRyYW5zaXRpb25EYXRhKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5ob29rcy5kbygnYmVmb3JlRW50ZXInLCByZWFkeURhdGEpO1xuXG4gICAgLy8gQ2hlY2sgaWYgb25jZSB0cmFuc2l0aW9uXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbnMuaGFzT25jZSkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbnMuZ2V0KHJlYWR5RGF0YSwge1xuICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgfSkgYXMgSVRyYW5zaXRpb25PbmNlO1xuXG4gICAgICBhd2FpdCB0aGlzLnRyYW5zaXRpb25zLmRvT25jZSh7IHRyYW5zaXRpb24sIGRhdGE6IHJlYWR5RGF0YSB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmhvb2tzLmRvKCdhZnRlckVudGVyJywgcmVhZHlEYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgU3RhcnQgYSBcInBhZ2VcIiB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiAxLiBJZiBubyBydW5uaW5nIHRyYW5zaXRpb24sIHVwZGF0ZXMgZGF0YSB3aXRoIGZ1bGwgVVJMIHByb3BlcnRpZXMgYW5kIHRyaWdnZXIuXG4gICAqIDIuIEdldCBwYWdlIGZyb20gY2FjaGUgb3IgaW5pdCByZXF1ZXN0LlxuICAgKiAzLiBXYWl0IGlmIHNvbWUgdHJhbnNpdGlvbnMgbmVlZCBcIm5leHRcIiBkYXRhIChgc3luYzogdHJ1ZWAsIGB0bzog4oCmYCkuXG4gICAqIDQuIE1hbmFnZSB0aGUgaGlzdG9yeSwgZGVwZW5kaW5nIG9uIHRyaWdnZXIuXG4gICAqIDUuIEdldCBcImRhdGFcIiBhbmQgdHJpZ2dlciBcImdvXCIgaG9vay5cbiAgICogNi4gR2V0IHRoZSBcInJlc29sdmVkXCIgdHJhbnNpdGlvbiBmcm9tIHRoZSBzdG9yZSBhbmQgc3RhcnQgaXQuXG4gICAqIDcuIFVwZGF0ZSB0aXRsZSBhbmQgcmVzZXQgZGF0YSAoY3VycmVudCwgbmV4dCA9IHVuZGVmaW5lZCkuXG4gICAqXG4gICAqID4gSWYgXCJzZWxmXCIsIHVzZSB0aGUgXCJzZWxmXCIgdHJhbnNpdGlvblxuICAgKi9cbiAgcHVibGljIGFzeW5jIHBhZ2UoXG4gICAgaHJlZjogc3RyaW5nLFxuICAgIHRyaWdnZXI6IFRyaWdnZXIsXG4gICAgc2VsZjogYm9vbGVhblxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmRhdGEubmV4dC51cmwgPSB7XG4gICAgICBocmVmLFxuICAgICAgLi4udGhpcy51cmwucGFyc2UoaHJlZiksXG4gICAgfTtcbiAgICB0aGlzLmRhdGEudHJpZ2dlciA9IHRyaWdnZXI7XG5cbiAgICBjb25zdCBwYWdlID0gdGhpcy5jYWNoZS5oYXMoaHJlZilcbiAgICAgID8gdGhpcy5jYWNoZS51cGRhdGUoaHJlZiwgeyBhY3Rpb246ICdjbGljaycgfSkucmVxdWVzdFxuICAgICAgOiB0aGlzLmNhY2hlLnNldChcbiAgICAgICAgICBocmVmLFxuICAgICAgICAgIHRoaXMucmVxdWVzdChcbiAgICAgICAgICAgIGhyZWYsXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQsXG4gICAgICAgICAgICB0aGlzLm9uUmVxdWVzdEVycm9yLmJpbmQodGhpcywgdHJpZ2dlcilcbiAgICAgICAgICApLFxuICAgICAgICAgICdjbGljaydcbiAgICAgICAgKS5yZXF1ZXN0O1xuXG4gICAgLy8gTmVlZCB0byB3YWl0IGJlZm9yZSBnZXR0aW5nIHRoZSByaWdodCB0cmFuc2l0aW9uXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbnMuc2hvdWxkV2FpdCkge1xuICAgICAgYXdhaXQgaGVscGVycy51cGRhdGUocGFnZSwgdGhpcy5kYXRhKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgLy8gSG9vazogYmV0d2VlbiB0cmlnZ2VyIGFuZCB0cmFuc2l0aW9uXG4gICAgLy8gQ2FuIGJlIHVzZWQgdG8gcmVzb2x2ZSBcInJvdXRlXCLigKZcbiAgICBhd2FpdCB0aGlzLmhvb2tzLmRvKCdwYWdlJywgZGF0YSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbnMuZ2V0KGRhdGEsIHtcbiAgICAgICAgb25jZTogZmFsc2UsXG4gICAgICAgIHNlbGYsXG4gICAgICB9KSBhcyBJVHJhbnNpdGlvblBhZ2U7XG5cbiAgICAgIGF3YWl0IHRoaXMudHJhbnNpdGlvbnMuZG9QYWdlKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgdHJhbnNpdGlvbixcbiAgICAgICAgd3JhcHBlcjogdGhpcy5fd3JhcHBlcixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9yZXNldERhdGEoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gU29tZXRoaW5nIHdlbnQgd3JvbmcgKHJlamVjdGVkIHByb21pc2UsIGVycm9yLCA0MDQsIDUwNSwgb3RoZXLigKYpXG4gICAgICAvLyBUT0RPOiBtYW5hZ2UgLyB1c2UgY2FzZXMgZm9yIGNhbmNlbGxhdGlvblxuICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ1RyYW5zaXRpb24gY2FuY2VsbGVkJyk7XG5cbiAgICAgIC8vIElmIHRyYW5zaXRpb24gZXJyb3IgYW5kIG5vIGRlYnVnIG1vZGUsIGZvcmNlIHJlbG9hZCBwYWdlLlxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChMb2dnZXIuZ2V0TGV2ZWwoKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmZvcmNlKGRhdGEuY3VycmVudC51cmwuaHJlZik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYSByZXF1ZXN0IGVycm9yIG9jY3Vycy5cbiAgICpcbiAgICogQWxsb3cgdGhlIHVzZXIgdG8gbWFuYWdlIHJlcXVlc3QgZXJyb3IuIChFLmc6IDQwNClcbiAgICovXG4gIHB1YmxpYyBvblJlcXVlc3RFcnJvcih0cmlnZ2VyOiBUcmlnZ2VyLCAuLi5hcmdzOiBhbnkpOiBib29sZWFuIHtcbiAgICAvLyBDYW5jZWwgdHJhbnNpdGlvbiBzdGF0dXNcbiAgICB0aGlzLnRyYW5zaXRpb25zLmlzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgY29uc3QgW2hyZWYsIHJlc3BvbnNlXTogW3N0cmluZywgUmVxdWVzdEVycm9yT3JSZXNwb25zZV0gPSBhcmdzO1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuY2FjaGUuZ2V0QWN0aW9uKGhyZWYpO1xuICAgIHRoaXMuY2FjaGUuZGVsZXRlKGhyZWYpO1xuXG4gICAgLy8gQ3VzdG9tIHJlcXVlc3RFcnJvciByZXR1cm5pbmcgZmFsc2Ugd2lsbCByZXR1cm4gaGVyZS5cbiAgICBpZiAoXG4gICAgICB0aGlzLl9yZXF1ZXN0Q3VzdG9tRXJyb3IgJiZcbiAgICAgIHRoaXMuX3JlcXVlc3RDdXN0b21FcnJvcih0cmlnZ2VyLCBhY3Rpb24sIGhyZWYsIHJlc3BvbnNlKSA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBGb3JjZSBwYWdlIGNoYW5nZVxuICAgIGlmIChhY3Rpb24gPT09ICdjbGljaycpIHtcbiAgICAgIHRoaXMuZm9yY2UoaHJlZik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IHByZWZldGNoXG4gICAqL1xuICBwdWJsaWMgcHJlZmV0Y2goaHJlZjogc3RyaW5nKSB7XG4gICAgLy8gQWxyZWFkeSBpbiBjYWNoZVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuY2FjaGUuaGFzKGhyZWYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZS5zZXQoXG4gICAgICBocmVmLFxuICAgICAgdGhpcy5yZXF1ZXN0KFxuICAgICAgICBocmVmLFxuICAgICAgICB0aGlzLnRpbWVvdXQsXG4gICAgICAgIHRoaXMub25SZXF1ZXN0RXJyb3IuYmluZCh0aGlzLCAnYmFyYmEnKVxuICAgICAgKS5jYXRjaCgoZXJyb3I6IFJlcXVlc3RFcnJvck9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgfSksXG4gICAgICAncHJlZmV0Y2gnXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICovXG4gIHByaXZhdGUgX2JpbmQoKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5wcmVmZXRjaElnbm9yZSAhPT0gdHJ1ZSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5fb25MaW5rRW50ZXIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uTGlua0VudGVyKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkxpbmtDbGljayk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fb25TdGF0ZUNoYW5nZSk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBldmVudCBsaXN0ZW5lcnMuXG4gICAqL1xuICBwcml2YXRlIF91bmJpbmQoKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5wcmVmZXRjaElnbm9yZSAhPT0gdHJ1ZSkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5fb25MaW5rRW50ZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uTGlua0VudGVyKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkxpbmtDbGljayk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fb25TdGF0ZUNoYW5nZSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBhIGVsZW1lbnQgaXMgZW50ZXJlZC5cbiAgICpcbiAgICogR2V0IHZhbGlkIGxpbmsgZWxlbWVudC5cbiAgICogQ2FjaGUgVVJMIGlmIG5lZWRlZC5cbiAgICovXG4gIHByaXZhdGUgX29uTGlua0VudGVyKGU6IExpbmtFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLl9nZXRMaW5rRWxlbWVudChlKTtcblxuICAgIGlmICghbGluaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhyZWYgPSB0aGlzLmRvbS5nZXRIcmVmKGxpbmspO1xuXG4gICAgaWYgKHRoaXMucHJldmVudC5jaGVja0hyZWYoaHJlZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBbHJlYWR5IGluIGNhY2hlXG4gICAgaWYgKHRoaXMuY2FjaGUuaGFzKGhyZWYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZS5zZXQoXG4gICAgICBocmVmLFxuICAgICAgdGhpcy5yZXF1ZXN0KFxuICAgICAgICBocmVmLFxuICAgICAgICB0aGlzLnRpbWVvdXQsXG4gICAgICAgIHRoaXMub25SZXF1ZXN0RXJyb3IuYmluZCh0aGlzLCBsaW5rKVxuICAgICAgKS5jYXRjaCgoZXJyb3I6IFJlcXVlc3RFcnJvck9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgfSksXG4gICAgICAnZW50ZXInXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGFuIGVsZW1lbnQgaXMgY2xpY2tlZC5cbiAgICpcbiAgICogR2V0IHZhbGlkIGxpbmsgZWxlbWVudC5cbiAgICogUHJldmVudCBzYW1lIFVSTC5cbiAgICogR28gZm9yIGEgQmFyYmEgdHJhbnNpdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX29uTGlua0NsaWNrKGU6IExpbmtFdmVudCk6IHZvaWQge1xuICAgIC8vIFRoaXMgdXNlIGBwcmV2ZW50LmNoZWNrTGlua2AgdW5kZXIgdGhlIGhvb2QgdG8gZ2V0IGVsaWdpYmxlIGxpbmsuXG4gICAgY29uc3QgbGluayA9IHRoaXMuX2dldExpbmtFbGVtZW50KGUpO1xuXG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbnMuaXNSdW5uaW5nICYmIHRoaXMucHJldmVudFJ1bm5pbmcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdvKHRoaXMuZG9tLmdldEhyZWYobGluayksIGxpbmssIGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gSGlzdG9yeSBzdGF0ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBHZXQgXCJocmVmXCIgZnJvbSBVUkxcbiAgICogR28gZm9yIGEgQmFyYmEgdHJhbnNpdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX29uU3RhdGVDaGFuZ2UoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZ28odGhpcy51cmwuZ2V0SHJlZigpLCAncG9wc3RhdGUnLCBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSB2YWxpZCBsaW5rIGFuY2VzdG9yLlxuICAgKlxuICAgKiBDaGVjayBmb3IgYSBcImhyZWZcIiBhdHRyaWJ1dGUuXG4gICAqIFRoZW4gY2hlY2sgaWYgZWxpZ2libGUgZm9yIEJhcmJhLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0TGlua0VsZW1lbnQoZTogTGlua0V2ZW50KTogTGluayB7XG4gICAgbGV0IGVsID0gZS50YXJnZXQgYXMgTGluaztcblxuICAgIHdoaWxlIChlbCAmJiAhdGhpcy5kb20uZ2V0SHJlZihlbCkpIHtcbiAgICAgIGVsID0gKGVsIGFzIEhUTUxFbGVtZW50KS5wYXJlbnROb2RlIGFzIExpbms7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgcHJldmVudFxuICAgIGlmICghZWwgfHwgdGhpcy5wcmV2ZW50LmNoZWNrTGluayhlbCwgZSwgdGhpcy5kb20uZ2V0SHJlZihlbCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHBhZ2VzIGRhdGEuXG4gICAqXG4gICAqIFNldCBcImN1cnJlbnRcIiBhbmQgdW5zZXQgXCJuZXh0XCIuXG4gICAqL1xuICBwcml2YXRlIF9yZXNldERhdGEoKSB7XG4gICAgY29uc3QgaHJlZiA9IHRoaXMudXJsLmdldEhyZWYoKTtcbiAgICBjb25zdCBjdXJyZW50ID0ge1xuICAgICAgY29udGFpbmVyOiB0aGlzLmRvbS5nZXRDb250YWluZXIoKSxcbiAgICAgIGh0bWw6IHRoaXMuZG9tLmdldEh0bWwoKSxcbiAgICAgIG5hbWVzcGFjZTogdGhpcy5kb20uZ2V0TmFtZXNwYWNlKCksXG4gICAgICB1cmw6IHtcbiAgICAgICAgaHJlZixcbiAgICAgICAgLi4udGhpcy51cmwucGFyc2UoaHJlZiksXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLl9kYXRhID0ge1xuICAgICAgY3VycmVudCxcbiAgICAgIG5leHQ6IHsgLi4udGhpcy5zY2hlbWFQYWdlIH0sXG4gICAgICB0cmlnZ2VyOiB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHRoaXMuaG9va3MuZG8oJ3Jlc2V0JywgdGhpcy5kYXRhKTtcbiAgfVxufVxuXG5jb25zdCBjb3JlID0gbmV3IENvcmUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsIi8qXG4gKiBhbmltZS5qcyB2My4yLjFcbiAqIChjKSAyMDIwIEp1bGlhbiBHYXJuaWVyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGFuaW1lanMuY29tXG4gKi9cblxuLy8gRGVmYXVsdHNcblxudmFyIGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzID0ge1xuICB1cGRhdGU6IG51bGwsXG4gIGJlZ2luOiBudWxsLFxuICBsb29wQmVnaW46IG51bGwsXG4gIGNoYW5nZUJlZ2luOiBudWxsLFxuICBjaGFuZ2U6IG51bGwsXG4gIGNoYW5nZUNvbXBsZXRlOiBudWxsLFxuICBsb29wQ29tcGxldGU6IG51bGwsXG4gIGNvbXBsZXRlOiBudWxsLFxuICBsb29wOiAxLFxuICBkaXJlY3Rpb246ICdub3JtYWwnLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgdGltZWxpbmVPZmZzZXQ6IDBcbn07XG5cbnZhciBkZWZhdWx0VHdlZW5TZXR0aW5ncyA9IHtcbiAgZHVyYXRpb246IDEwMDAsXG4gIGRlbGF5OiAwLFxuICBlbmREZWxheTogMCxcbiAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMoMSwgLjUpJyxcbiAgcm91bmQ6IDBcbn07XG5cbnZhciB2YWxpZFRyYW5zZm9ybXMgPSBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICd0cmFuc2xhdGVaJywgJ3JvdGF0ZScsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3BlcnNwZWN0aXZlJywgJ21hdHJpeCcsICdtYXRyaXgzZCddO1xuXG4vLyBDYWNoaW5nXG5cbnZhciBjYWNoZSA9IHtcbiAgQ1NTOiB7fSxcbiAgc3ByaW5nczoge31cbn07XG5cbi8vIFV0aWxzXG5cbmZ1bmN0aW9uIG1pbk1heCh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0NvbnRhaW5zKHN0ciwgdGV4dCkge1xuICByZXR1cm4gc3RyLmluZGV4T2YodGV4dCkgPiAtMTtcbn1cblxuZnVuY3Rpb24gYXBwbHlBcmd1bWVudHMoZnVuYywgYXJncykge1xuICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbn1cblxudmFyIGlzID0ge1xuICBhcnI6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBBcnJheS5pc0FycmF5KGEpOyB9LFxuICBvYmo6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBzdHJpbmdDb250YWlucyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSksICdPYmplY3QnKTsgfSxcbiAgcHRoOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gaXMub2JqKGEpICYmIGEuaGFzT3duUHJvcGVydHkoJ3RvdGFsTGVuZ3RoJyk7IH0sXG4gIHN2ZzogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50OyB9LFxuICBpbnA6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudDsgfSxcbiAgZG9tOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS5ub2RlVHlwZSB8fCBpcy5zdmcoYSk7IH0sXG4gIHN0cjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAnc3RyaW5nJzsgfSxcbiAgZm5jOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbic7IH0sXG4gIHVuZDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAndW5kZWZpbmVkJzsgfSxcbiAgbmlsOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gaXMudW5kKGEpIHx8IGEgPT09IG51bGw7IH0sXG4gIGhleDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpOyB9LFxuICByZ2I6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvXnJnYi8udGVzdChhKTsgfSxcbiAgaHNsOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gL15oc2wvLnRlc3QoYSk7IH0sXG4gIGNvbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSk7IH0sXG4gIGtleTogZnVuY3Rpb24gKGEpIHsgcmV0dXJuICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnOyB9LFxufTtcblxuLy8gRWFzaW5nc1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IC9cXCgoW14pXSspXFwpLy5leGVjKHN0cmluZyk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwYXJzZUZsb2F0KHApOyB9KSA6IFtdO1xufVxuXG4vLyBTcHJpbmcgc29sdmVyIGluc3BpcmVkIGJ5IFdlYmtpdCBDb3B5cmlnaHQgwqkgMjAxNiBBcHBsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIGh0dHBzOi8vd2Via2l0Lm9yZy9kZW1vcy9zcHJpbmcvc3ByaW5nLmpzXG5cbmZ1bmN0aW9uIHNwcmluZyhzdHJpbmcsIGR1cmF0aW9uKSB7XG5cbiAgdmFyIHBhcmFtcyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpO1xuICB2YXIgbWFzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzBdKSA/IDEgOiBwYXJhbXNbMF0sIC4xLCAxMDApO1xuICB2YXIgc3RpZmZuZXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMV0pID8gMTAwIDogcGFyYW1zWzFdLCAuMSwgMTAwKTtcbiAgdmFyIGRhbXBpbmcgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1syXSkgPyAxMCA6IHBhcmFtc1syXSwgLjEsIDEwMCk7XG4gIHZhciB2ZWxvY2l0eSA9ICBtaW5NYXgoaXMudW5kKHBhcmFtc1szXSkgPyAwIDogcGFyYW1zWzNdLCAuMSwgMTAwKTtcbiAgdmFyIHcwID0gTWF0aC5zcXJ0KHN0aWZmbmVzcyAvIG1hc3MpO1xuICB2YXIgemV0YSA9IGRhbXBpbmcgLyAoMiAqIE1hdGguc3FydChzdGlmZm5lc3MgKiBtYXNzKSk7XG4gIHZhciB3ZCA9IHpldGEgPCAxID8gdzAgKiBNYXRoLnNxcnQoMSAtIHpldGEgKiB6ZXRhKSA6IDA7XG4gIHZhciBhID0gMTtcbiAgdmFyIGIgPSB6ZXRhIDwgMSA/ICh6ZXRhICogdzAgKyAtdmVsb2NpdHkpIC8gd2QgOiAtdmVsb2NpdHkgKyB3MDtcblxuICBmdW5jdGlvbiBzb2x2ZXIodCkge1xuICAgIHZhciBwcm9ncmVzcyA9IGR1cmF0aW9uID8gKGR1cmF0aW9uICogdCkgLyAxMDAwIDogdDtcbiAgICBpZiAoemV0YSA8IDEpIHtcbiAgICAgIHByb2dyZXNzID0gTWF0aC5leHAoLXByb2dyZXNzICogemV0YSAqIHcwKSAqIChhICogTWF0aC5jb3Mod2QgKiBwcm9ncmVzcykgKyBiICogTWF0aC5zaW4od2QgKiBwcm9ncmVzcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9ncmVzcyA9IChhICsgYiAqIHByb2dyZXNzKSAqIE1hdGguZXhwKC1wcm9ncmVzcyAqIHcwKTtcbiAgICB9XG4gICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkgeyByZXR1cm4gdDsgfVxuICAgIHJldHVybiAxIC0gcHJvZ3Jlc3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuc3ByaW5nc1tzdHJpbmddO1xuICAgIGlmIChjYWNoZWQpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICAgIHZhciBmcmFtZSA9IDEvNjtcbiAgICB2YXIgZWxhcHNlZCA9IDA7XG4gICAgdmFyIHJlc3QgPSAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIGVsYXBzZWQgKz0gZnJhbWU7XG4gICAgICBpZiAoc29sdmVyKGVsYXBzZWQpID09PSAxKSB7XG4gICAgICAgIHJlc3QrKztcbiAgICAgICAgaWYgKHJlc3QgPj0gMTYpIHsgYnJlYWs7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3QgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZHVyYXRpb24gPSBlbGFwc2VkICogZnJhbWUgKiAxMDAwO1xuICAgIGNhY2hlLnNwcmluZ3Nbc3RyaW5nXSA9IGR1cmF0aW9uO1xuICAgIHJldHVybiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBkdXJhdGlvbiA/IHNvbHZlciA6IGdldER1cmF0aW9uO1xuXG59XG5cbi8vIEJhc2ljIHN0ZXBzIGVhc2luZyBpbXBsZW1lbnRhdGlvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cblxuZnVuY3Rpb24gc3RlcHMoc3RlcHMpIHtcbiAgaWYgKCBzdGVwcyA9PT0gdm9pZCAwICkgc3RlcHMgPSAxMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGguY2VpbCgobWluTWF4KHQsIDAuMDAwMDAxLCAxKSkgKiBzdGVwcykgKiAoMSAvIHN0ZXBzKTsgfTtcbn1cblxuLy8gQmV6aWVyRWFzaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xuXG52YXIgYmV6aWVyID0gKGZ1bmN0aW9uICgpIHtcblxuICB2YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xuICB2YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuXG4gIGZ1bmN0aW9uIEEoYUExLCBhQTIpIHsgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMSB9XG4gIGZ1bmN0aW9uIEIoYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMSB9XG4gIGZ1bmN0aW9uIEMoYUExKSAgICAgIHsgcmV0dXJuIDMuMCAqIGFBMSB9XG5cbiAgZnVuY3Rpb24gY2FsY0JlemllcihhVCwgYUExLCBhQTIpIHsgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUIH1cbiAgZnVuY3Rpb24gZ2V0U2xvcGUoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpIH1cblxuICBmdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgICBkbyB7XG4gICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkgeyBhQiA9IGN1cnJlbnRUOyB9IGVsc2UgeyBhQSA9IGN1cnJlbnRUOyB9XG4gICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gMC4wMDAwMDAxICYmICsraSA8IDEwKTtcbiAgICByZXR1cm4gY3VycmVudFQ7XG4gIH1cblxuICBmdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkgeyByZXR1cm4gYUd1ZXNzVDsgfVxuICAgICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgfVxuICAgIHJldHVybiBhR3Vlc3NUO1xuICB9XG5cbiAgZnVuY3Rpb24gYmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuXG4gICAgaWYgKCEoMCA8PSBtWDEgJiYgbVgxIDw9IDEgJiYgMCA8PSBtWDIgJiYgbVgyIDw9IDEpKSB7IHJldHVybjsgfVxuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuXG4gICAgaWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRURm9yWChhWCkge1xuXG4gICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDA7XG4gICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIH1cblxuICAgICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG4gICAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gMC4wMDEpIHtcbiAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7IHJldHVybiB4OyB9XG4gICAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSAxKSB7IHJldHVybiB4OyB9XG4gICAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIGJlemllcjtcblxufSkoKTtcblxudmFyIHBlbm5lciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgLy8gQmFzZWQgb24galF1ZXJ5IFVJJ3MgaW1wbGVtZW5hdGlvbiBvZiBlYXNpbmcgZXF1YXRpb25zIGZyb20gUm9iZXJ0IFBlbm5lciAoaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZylcblxuICB2YXIgZWFzZXMgPSB7IGxpbmVhcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH07IH0gfTtcblxuICB2YXIgZnVuY3Rpb25FYXNpbmdzID0ge1xuICAgIFNpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKTsgfTsgfSxcbiAgICBDaXJjOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpOyB9OyB9LFxuICAgIEJhY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0ICogdCAqICgzICogdCAtIDIpOyB9OyB9LFxuICAgIEJvdW5jZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciBwb3cyLCBiID0gNDtcbiAgICAgIHdoaWxlICh0IDwgKCggcG93MiA9IE1hdGgucG93KDIsIC0tYikpIC0gMSkgLyAxMSkge31cbiAgICAgIHJldHVybiAxIC8gTWF0aC5wb3coNCwgMyAtIGIpIC0gNy41NjI1ICogTWF0aC5wb3coKCBwb3cyICogMyAtIDIgKSAvIDIyIC0gdCwgMilcbiAgICB9OyB9LFxuICAgIEVsYXN0aWM6IGZ1bmN0aW9uIChhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICAgICAgaWYgKCBhbXBsaXR1ZGUgPT09IHZvaWQgMCApIGFtcGxpdHVkZSA9IDE7XG4gICAgICBpZiAoIHBlcmlvZCA9PT0gdm9pZCAwICkgcGVyaW9kID0gLjU7XG5cbiAgICAgIHZhciBhID0gbWluTWF4KGFtcGxpdHVkZSwgMSwgMTApO1xuICAgICAgdmFyIHAgPSBtaW5NYXgocGVyaW9kLCAuMSwgMik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICh0ID09PSAwIHx8IHQgPT09IDEpID8gdCA6IFxuICAgICAgICAgIC1hICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSAqIE1hdGguc2luKCgoKHQgLSAxKSAtIChwIC8gKE1hdGguUEkgKiAyKSAqIE1hdGguYXNpbigxIC8gYSkpKSAqIChNYXRoLlBJICogMikpIC8gcCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBiYXNlRWFzaW5ncyA9IFsnUXVhZCcsICdDdWJpYycsICdRdWFydCcsICdRdWludCcsICdFeHBvJ107XG5cbiAgYmFzZUVhc2luZ3MuZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaSkge1xuICAgIGZ1bmN0aW9uRWFzaW5nc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBNYXRoLnBvdyh0LCBpICsgMik7IH07IH07XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKGZ1bmN0aW9uRWFzaW5ncykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBlYXNlSW4gPSBmdW5jdGlvbkVhc2luZ3NbbmFtZV07XG4gICAgZWFzZXNbJ2Vhc2VJbicgKyBuYW1lXSA9IGVhc2VJbjtcbiAgICBlYXNlc1snZWFzZU91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gMSAtIGVhc2VJbihhLCBiKSgxIC0gdCk7IH07IH07XG4gICAgZWFzZXNbJ2Vhc2VJbk91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IDAuNSA/IGVhc2VJbihhLCBiKSh0ICogMikgLyAyIDogXG4gICAgICAxIC0gZWFzZUluKGEsIGIpKHQgKiAtMiArIDIpIC8gMjsgfTsgfTtcbiAgICBlYXNlc1snZWFzZU91dEluJyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0IDwgMC41ID8gKDEgLSBlYXNlSW4oYSwgYikoMSAtIHQgKiAyKSkgLyAyIDogXG4gICAgICAoZWFzZUluKGEsIGIpKHQgKiAyIC0gMSkgKyAxKSAvIDI7IH07IH07XG4gIH0pO1xuXG4gIHJldHVybiBlYXNlcztcblxufSkoKTtcblxuZnVuY3Rpb24gcGFyc2VFYXNpbmdzKGVhc2luZywgZHVyYXRpb24pIHtcbiAgaWYgKGlzLmZuYyhlYXNpbmcpKSB7IHJldHVybiBlYXNpbmc7IH1cbiAgdmFyIG5hbWUgPSBlYXNpbmcuc3BsaXQoJygnKVswXTtcbiAgdmFyIGVhc2UgPSBwZW5uZXJbbmFtZV07XG4gIHZhciBhcmdzID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKGVhc2luZyk7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgJ3NwcmluZycgOiByZXR1cm4gc3ByaW5nKGVhc2luZywgZHVyYXRpb24pO1xuICAgIGNhc2UgJ2N1YmljQmV6aWVyJyA6IHJldHVybiBhcHBseUFyZ3VtZW50cyhiZXppZXIsIGFyZ3MpO1xuICAgIGNhc2UgJ3N0ZXBzJyA6IHJldHVybiBhcHBseUFyZ3VtZW50cyhzdGVwcywgYXJncyk7XG4gICAgZGVmYXVsdCA6IHJldHVybiBhcHBseUFyZ3VtZW50cyhlYXNlLCBhcmdzKTtcbiAgfVxufVxuXG4vLyBTdHJpbmdzXG5cbmZ1bmN0aW9uIHNlbGVjdFN0cmluZyhzdHIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cik7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gQXJyYXlzXG5cbmZ1bmN0aW9uIGZpbHRlckFycmF5KGFyciwgY2FsbGJhY2spIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaSBpbiBhcnIpIHtcbiAgICAgIHZhciB2YWwgPSBhcnJbaV07XG4gICAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWwsIGksIGFycikpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KGFycikge1xuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5jb25jYXQoaXMuYXJyKGIpID8gZmxhdHRlbkFycmF5KGIpIDogYik7IH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShvKSB7XG4gIGlmIChpcy5hcnIobykpIHsgcmV0dXJuIG87IH1cbiAgaWYgKGlzLnN0cihvKSkgeyBvID0gc2VsZWN0U3RyaW5nKG8pIHx8IG87IH1cbiAgaWYgKG8gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBvIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHsgcmV0dXJuIFtdLnNsaWNlLmNhbGwobyk7IH1cbiAgcmV0dXJuIFtvXTtcbn1cblxuZnVuY3Rpb24gYXJyYXlDb250YWlucyhhcnIsIHZhbCkge1xuICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgPT09IHZhbDsgfSk7XG59XG5cbi8vIE9iamVjdHNcblxuZnVuY3Rpb24gY2xvbmVPYmplY3Qobykge1xuICB2YXIgY2xvbmUgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBvKSB7IGNsb25lW3BdID0gb1twXTsgfVxuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VPYmplY3RQcm9wcyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzEpIHsgb1twXSA9IG8yLmhhc093blByb3BlcnR5KHApID8gbzJbcF0gOiBvMVtwXTsgfVxuICByZXR1cm4gbztcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKG8xLCBvMikge1xuICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcbiAgZm9yICh2YXIgcCBpbiBvMikgeyBvW3BdID0gaXMudW5kKG8xW3BdKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbi8vIENvbG9yc1xuXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcbiAgdmFyIHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XG4gIHJldHVybiByZ2IgPyAoXCJyZ2JhKFwiICsgKHJnYlsxXSkgKyBcIiwxKVwiKSA6IHJnYlZhbHVlO1xufVxuXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcbiAgdmFyIHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIHZhciBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHsgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjsgfSApO1xuICB2YXIgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHZhciByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XG4gIHZhciBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XG4gIHZhciBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XG4gIHJldHVybiAoXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLDEpXCIpO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcbiAgdmFyIGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XG4gIHZhciBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XG4gIHZhciBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XG4gIHZhciBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XG4gIHZhciBhID0gaHNsWzRdIHx8IDE7XG4gIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgIGlmICh0IDwgMCkgeyB0ICs9IDE7IH1cbiAgICBpZiAodCA+IDEpIHsgdCAtPSAxOyB9XG4gICAgaWYgKHQgPCAxLzYpIHsgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7IH1cbiAgICBpZiAodCA8IDEvMikgeyByZXR1cm4gcTsgfVxuICAgIGlmICh0IDwgMi8zKSB7IHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7IH1cbiAgICByZXR1cm4gcDtcbiAgfVxuICB2YXIgciwgZywgYjtcbiAgaWYgKHMgPT0gMCkge1xuICAgIHIgPSBnID0gYiA9IGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIHZhciBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxLzMpO1xuICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxLzMpO1xuICB9XG4gIHJldHVybiAoXCJyZ2JhKFwiICsgKHIgKiAyNTUpICsgXCIsXCIgKyAoZyAqIDI1NSkgKyBcIixcIiArIChiICogMjU1KSArIFwiLFwiICsgYSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gY29sb3JUb1JnYih2YWwpIHtcbiAgaWYgKGlzLnJnYih2YWwpKSB7IHJldHVybiByZ2JUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaGV4KHZhbCkpIHsgcmV0dXJuIGhleFRvUmdiYSh2YWwpOyB9XG4gIGlmIChpcy5oc2wodmFsKSkgeyByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7IH1cbn1cblxuLy8gVW5pdHNcblxuZnVuY3Rpb24gZ2V0VW5pdCh2YWwpIHtcbiAgdmFyIHNwbGl0ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/KCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWModmFsKTtcbiAgaWYgKHNwbGl0KSB7IHJldHVybiBzcGxpdFsxXTsgfVxufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKSB7XG4gIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3RyYW5zbGF0ZScpIHx8IHByb3BOYW1lID09PSAncGVyc3BlY3RpdmUnKSB7IHJldHVybiAncHgnOyB9XG4gIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3JvdGF0ZScpIHx8IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2tldycpKSB7IHJldHVybiAnZGVnJzsgfVxufVxuXG4vLyBWYWx1ZXNcblxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25WYWx1ZSh2YWwsIGFuaW1hdGFibGUpIHtcbiAgaWYgKCFpcy5mbmModmFsKSkgeyByZXR1cm4gdmFsOyB9XG4gIHJldHVybiB2YWwoYW5pbWF0YWJsZS50YXJnZXQsIGFuaW1hdGFibGUuaWQsIGFuaW1hdGFibGUudG90YWwpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIHByb3ApIHtcbiAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShwcm9wKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkge1xuICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XG4gIGlmIChhcnJheUNvbnRhaW5zKFt1bml0LCAnZGVnJywgJ3JhZCcsICd0dXJuJ10sIHZhbHVlVW5pdCkpIHsgcmV0dXJuIHZhbHVlOyB9XG4gIHZhciBjYWNoZWQgPSBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XTtcbiAgaWYgKCFpcy51bmQoY2FjaGVkKSkgeyByZXR1cm4gY2FjaGVkOyB9XG4gIHZhciBiYXNlbGluZSA9IDEwMDtcbiAgdmFyIHRlbXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwudGFnTmFtZSk7XG4gIHZhciBwYXJlbnRFbCA9IChlbC5wYXJlbnROb2RlICYmIChlbC5wYXJlbnROb2RlICE9PSBkb2N1bWVudCkpID8gZWwucGFyZW50Tm9kZSA6IGRvY3VtZW50LmJvZHk7XG4gIHBhcmVudEVsLmFwcGVuZENoaWxkKHRlbXBFbCk7XG4gIHRlbXBFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHRlbXBFbC5zdHlsZS53aWR0aCA9IGJhc2VsaW5lICsgdW5pdDtcbiAgdmFyIGZhY3RvciA9IGJhc2VsaW5lIC8gdGVtcEVsLm9mZnNldFdpZHRoO1xuICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRWwpO1xuICB2YXIgY29udmVydGVkVW5pdCA9IGZhY3RvciAqIHBhcnNlRmxvYXQodmFsdWUpO1xuICBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XSA9IGNvbnZlcnRlZFVuaXQ7XG4gIHJldHVybiBjb252ZXJ0ZWRVbml0O1xufVxuXG5mdW5jdGlvbiBnZXRDU1NWYWx1ZShlbCwgcHJvcCwgdW5pdCkge1xuICBpZiAocHJvcCBpbiBlbC5zdHlsZSkge1xuICAgIHZhciB1cHBlcmNhc2VQcm9wTmFtZSA9IHByb3AucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgdmFsdWUgPSBlbC5zdHlsZVtwcm9wXSB8fCBnZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHVwcGVyY2FzZVByb3BOYW1lKSB8fCAnMCc7XG4gICAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvblR5cGUoZWwsIHByb3ApIHtcbiAgaWYgKGlzLmRvbShlbCkgJiYgIWlzLmlucChlbCkgJiYgKCFpcy5uaWwoZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSkgfHwgKGlzLnN2ZyhlbCkgJiYgZWxbcHJvcF0pKSkgeyByZXR1cm4gJ2F0dHJpYnV0ZSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgYXJyYXlDb250YWlucyh2YWxpZFRyYW5zZm9ybXMsIHByb3ApKSB7IHJldHVybiAndHJhbnNmb3JtJzsgfVxuICBpZiAoaXMuZG9tKGVsKSAmJiAocHJvcCAhPT0gJ3RyYW5zZm9ybScgJiYgZ2V0Q1NTVmFsdWUoZWwsIHByb3ApKSkgeyByZXR1cm4gJ2Nzcyc7IH1cbiAgaWYgKGVsW3Byb3BdICE9IG51bGwpIHsgcmV0dXJuICdvYmplY3QnOyB9XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKSB7XG4gIGlmICghaXMuZG9tKGVsKSkgeyByZXR1cm47IH1cbiAgdmFyIHN0ciA9IGVsLnN0eWxlLnRyYW5zZm9ybSB8fCAnJztcbiAgdmFyIHJlZyAgPSAvKFxcdyspXFwoKFteKV0qKVxcKS9nO1xuICB2YXIgdHJhbnNmb3JtcyA9IG5ldyBNYXAoKTtcbiAgdmFyIG07IHdoaWxlIChtID0gcmVnLmV4ZWMoc3RyKSkgeyB0cmFuc2Zvcm1zLnNldChtWzFdLCBtWzJdKTsgfVxuICByZXR1cm4gdHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVmFsdWUoZWwsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KSB7XG4gIHZhciBkZWZhdWx0VmFsID0gc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdzY2FsZScpID8gMSA6IDAgKyBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKTtcbiAgdmFyIHZhbHVlID0gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpLmdldChwcm9wTmFtZSkgfHwgZGVmYXVsdFZhbDtcbiAgaWYgKGFuaW1hdGFibGUpIHtcbiAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXMubGlzdC5zZXQocHJvcE5hbWUsIHZhbHVlKTtcbiAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXNbJ2xhc3QnXSA9IHByb3BOYW1lO1xuICB9XG4gIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0LCBhbmltYXRhYmxlKSB7XG4gIHN3aXRjaCAoZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BOYW1lKSkge1xuICAgIGNhc2UgJ3RyYW5zZm9ybSc6IHJldHVybiBnZXRUcmFuc2Zvcm1WYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KTtcbiAgICBjYXNlICdjc3MnOiByZXR1cm4gZ2V0Q1NTVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCk7XG4gICAgY2FzZSAnYXR0cmlidXRlJzogcmV0dXJuIGdldEF0dHJpYnV0ZSh0YXJnZXQsIHByb3BOYW1lKTtcbiAgICBkZWZhdWx0OiByZXR1cm4gdGFyZ2V0W3Byb3BOYW1lXSB8fCAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pIHtcbiAgdmFyIG9wZXJhdG9yID0gL14oXFwqPXxcXCs9fC09KS8uZXhlYyh0byk7XG4gIGlmICghb3BlcmF0b3IpIHsgcmV0dXJuIHRvOyB9XG4gIHZhciB1ID0gZ2V0VW5pdCh0bykgfHwgMDtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KGZyb20pO1xuICB2YXIgeSA9IHBhcnNlRmxvYXQodG8ucmVwbGFjZShvcGVyYXRvclswXSwgJycpKTtcbiAgc3dpdGNoIChvcGVyYXRvclswXVswXSkge1xuICAgIGNhc2UgJysnOiByZXR1cm4geCArIHkgKyB1O1xuICAgIGNhc2UgJy0nOiByZXR1cm4geCAtIHkgKyB1O1xuICAgIGNhc2UgJyonOiByZXR1cm4geCAqIHkgKyB1O1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVmFsdWUodmFsLCB1bml0KSB7XG4gIGlmIChpcy5jb2wodmFsKSkgeyByZXR1cm4gY29sb3JUb1JnYih2YWwpOyB9XG4gIGlmICgvXFxzL2cudGVzdCh2YWwpKSB7IHJldHVybiB2YWw7IH1cbiAgdmFyIG9yaWdpbmFsVW5pdCA9IGdldFVuaXQodmFsKTtcbiAgdmFyIHVuaXRMZXNzID0gb3JpZ2luYWxVbml0ID8gdmFsLnN1YnN0cigwLCB2YWwubGVuZ3RoIC0gb3JpZ2luYWxVbml0Lmxlbmd0aCkgOiB2YWw7XG4gIGlmICh1bml0KSB7IHJldHVybiB1bml0TGVzcyArIHVuaXQ7IH1cbiAgcmV0dXJuIHVuaXRMZXNzO1xufVxuXG4vLyBnZXRUb3RhbExlbmd0aCgpIGVxdWl2YWxlbnQgZm9yIGNpcmNsZSwgcmVjdCwgcG9seWxpbmUsIHBvbHlnb24gYW5kIGxpbmUgc2hhcGVzXG4vLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vU2ViTGFtYmxhLzNlMDU1MGM0OTZjMjM2NzA5NzQ0XG5cbmZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XG59XG5cbmZ1bmN0aW9uIGdldENpcmNsZUxlbmd0aChlbCkge1xuICByZXR1cm4gTWF0aC5QSSAqIDIgKiBnZXRBdHRyaWJ1dGUoZWwsICdyJyk7XG59XG5cbmZ1bmN0aW9uIGdldFJlY3RMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIChnZXRBdHRyaWJ1dGUoZWwsICd3aWR0aCcpICogMikgKyAoZ2V0QXR0cmlidXRlKGVsLCAnaGVpZ2h0JykgKiAyKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGluZUxlbmd0aChlbCkge1xuICByZXR1cm4gZ2V0RGlzdGFuY2UoXG4gICAge3g6IGdldEF0dHJpYnV0ZShlbCwgJ3gxJyksIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kxJyl9LCBcbiAgICB7eDogZ2V0QXR0cmlidXRlKGVsLCAneDInKSwgeTogZ2V0QXR0cmlidXRlKGVsLCAneTInKX1cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9seWxpbmVMZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcbiAgdmFyIHByZXZpb3VzUG9zO1xuICBmb3IgKHZhciBpID0gMCA7IGkgPCBwb2ludHMubnVtYmVyT2ZJdGVtczsgaSsrKSB7XG4gICAgdmFyIGN1cnJlbnRQb3MgPSBwb2ludHMuZ2V0SXRlbShpKTtcbiAgICBpZiAoaSA+IDApIHsgdG90YWxMZW5ndGggKz0gZ2V0RGlzdGFuY2UocHJldmlvdXNQb3MsIGN1cnJlbnRQb3MpOyB9XG4gICAgcHJldmlvdXNQb3MgPSBjdXJyZW50UG9zO1xuICB9XG4gIHJldHVybiB0b3RhbExlbmd0aDtcbn1cblxuZnVuY3Rpb24gZ2V0UG9seWdvbkxlbmd0aChlbCkge1xuICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xuICByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpICsgZ2V0RGlzdGFuY2UocG9pbnRzLmdldEl0ZW0ocG9pbnRzLm51bWJlck9mSXRlbXMgLSAxKSwgcG9pbnRzLmdldEl0ZW0oMCkpO1xufVxuXG4vLyBQYXRoIGFuaW1hdGlvblxuXG5mdW5jdGlvbiBnZXRUb3RhbExlbmd0aChlbCkge1xuICBpZiAoZWwuZ2V0VG90YWxMZW5ndGgpIHsgcmV0dXJuIGVsLmdldFRvdGFsTGVuZ3RoKCk7IH1cbiAgc3dpdGNoKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6IHJldHVybiBnZXRDaXJjbGVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3JlY3QnOiByZXR1cm4gZ2V0UmVjdExlbmd0aChlbCk7XG4gICAgY2FzZSAnbGluZSc6IHJldHVybiBnZXRMaW5lTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdwb2x5bGluZSc6IHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWdvbic6IHJldHVybiBnZXRQb2x5Z29uTGVuZ3RoKGVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXREYXNob2Zmc2V0KGVsKSB7XG4gIHZhciBwYXRoTGVuZ3RoID0gZ2V0VG90YWxMZW5ndGgoZWwpO1xuICBlbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBwYXRoTGVuZ3RoKTtcbiAgcmV0dXJuIHBhdGhMZW5ndGg7XG59XG5cbi8vIE1vdGlvbiBwYXRoXG5cbmZ1bmN0aW9uIGdldFBhcmVudFN2Z0VsKGVsKSB7XG4gIHZhciBwYXJlbnRFbCA9IGVsLnBhcmVudE5vZGU7XG4gIHdoaWxlIChpcy5zdmcocGFyZW50RWwpKSB7XG4gICAgaWYgKCFpcy5zdmcocGFyZW50RWwucGFyZW50Tm9kZSkpIHsgYnJlYWs7IH1cbiAgICBwYXJlbnRFbCA9IHBhcmVudEVsLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHBhcmVudEVsO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmcocGF0aEVsLCBzdmdEYXRhKSB7XG4gIHZhciBzdmcgPSBzdmdEYXRhIHx8IHt9O1xuICB2YXIgcGFyZW50U3ZnRWwgPSBzdmcuZWwgfHwgZ2V0UGFyZW50U3ZnRWwocGF0aEVsKTtcbiAgdmFyIHJlY3QgPSBwYXJlbnRTdmdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHZpZXdCb3hBdHRyID0gZ2V0QXR0cmlidXRlKHBhcmVudFN2Z0VsLCAndmlld0JveCcpO1xuICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gIHZhciB2aWV3Qm94ID0gc3ZnLnZpZXdCb3ggfHwgKHZpZXdCb3hBdHRyID8gdmlld0JveEF0dHIuc3BsaXQoJyAnKSA6IFswLCAwLCB3aWR0aCwgaGVpZ2h0XSk7XG4gIHJldHVybiB7XG4gICAgZWw6IHBhcmVudFN2Z0VsLFxuICAgIHZpZXdCb3g6IHZpZXdCb3gsXG4gICAgeDogdmlld0JveFswXSAvIDEsXG4gICAgeTogdmlld0JveFsxXSAvIDEsXG4gICAgdzogd2lkdGgsXG4gICAgaDogaGVpZ2h0LFxuICAgIHZXOiB2aWV3Qm94WzJdLFxuICAgIHZIOiB2aWV3Qm94WzNdXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aChwYXRoLCBwZXJjZW50KSB7XG4gIHZhciBwYXRoRWwgPSBpcy5zdHIocGF0aCkgPyBzZWxlY3RTdHJpbmcocGF0aClbMF0gOiBwYXRoO1xuICB2YXIgcCA9IHBlcmNlbnQgfHwgMTAwO1xuICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgZWw6IHBhdGhFbCxcbiAgICAgIHN2ZzogZ2V0UGFyZW50U3ZnKHBhdGhFbCksXG4gICAgICB0b3RhbExlbmd0aDogZ2V0VG90YWxMZW5ndGgocGF0aEVsKSAqIChwIC8gMTAwKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoUHJvZ3Jlc3MocGF0aCwgcHJvZ3Jlc3MsIGlzUGF0aFRhcmdldEluc2lkZVNWRykge1xuICBmdW5jdGlvbiBwb2ludChvZmZzZXQpIHtcbiAgICBpZiAoIG9mZnNldCA9PT0gdm9pZCAwICkgb2Zmc2V0ID0gMDtcblxuICAgIHZhciBsID0gcHJvZ3Jlc3MgKyBvZmZzZXQgPj0gMSA/IHByb2dyZXNzICsgb2Zmc2V0IDogMDtcbiAgICByZXR1cm4gcGF0aC5lbC5nZXRQb2ludEF0TGVuZ3RoKGwpO1xuICB9XG4gIHZhciBzdmcgPSBnZXRQYXJlbnRTdmcocGF0aC5lbCwgcGF0aC5zdmcpO1xuICB2YXIgcCA9IHBvaW50KCk7XG4gIHZhciBwMCA9IHBvaW50KC0xKTtcbiAgdmFyIHAxID0gcG9pbnQoKzEpO1xuICB2YXIgc2NhbGVYID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy53IC8gc3ZnLnZXO1xuICB2YXIgc2NhbGVZID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy5oIC8gc3ZnLnZIO1xuICBzd2l0Y2ggKHBhdGgucHJvcGVydHkpIHtcbiAgICBjYXNlICd4JzogcmV0dXJuIChwLnggLSBzdmcueCkgKiBzY2FsZVg7XG4gICAgY2FzZSAneSc6IHJldHVybiAocC55IC0gc3ZnLnkpICogc2NhbGVZO1xuICAgIGNhc2UgJ2FuZ2xlJzogcmV0dXJuIE1hdGguYXRhbjIocDEueSAtIHAwLnksIHAxLnggLSBwMC54KSAqIDE4MCAvIE1hdGguUEk7XG4gIH1cbn1cblxuLy8gRGVjb21wb3NlIHZhbHVlXG5cbmZ1bmN0aW9uIGRlY29tcG9zZVZhbHVlKHZhbCwgdW5pdCkge1xuICAvLyBjb25zdCByZ3ggPSAvLT9cXGQqXFwuP1xcZCsvZzsgLy8gaGFuZGxlcyBiYXNpYyBudW1iZXJzXG4gIC8vIGNvbnN0IHJneCA9IC9bKy1dP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cbiAgdmFyIHJneCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxuICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVZhbHVlKChpcy5wdGgodmFsKSA/IHZhbC50b3RhbExlbmd0aCA6IHZhbCksIHVuaXQpICsgJyc7XG4gIHJldHVybiB7XG4gICAgb3JpZ2luYWw6IHZhbHVlLFxuICAgIG51bWJlcnM6IHZhbHVlLm1hdGNoKHJneCkgPyB2YWx1ZS5tYXRjaChyZ3gpLm1hcChOdW1iZXIpIDogWzBdLFxuICAgIHN0cmluZ3M6IChpcy5zdHIodmFsKSB8fCB1bml0KSA/IHZhbHVlLnNwbGl0KHJneCkgOiBbXVxuICB9XG59XG5cbi8vIEFuaW1hdGFibGVzXG5cbmZ1bmN0aW9uIHBhcnNlVGFyZ2V0cyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSB0YXJnZXRzID8gKGZsYXR0ZW5BcnJheShpcy5hcnIodGFyZ2V0cykgPyB0YXJnZXRzLm1hcCh0b0FycmF5KSA6IHRvQXJyYXkodGFyZ2V0cykpKSA6IFtdO1xuICByZXR1cm4gZmlsdGVyQXJyYXkodGFyZ2V0c0FycmF5LCBmdW5jdGlvbiAoaXRlbSwgcG9zLCBzZWxmKSB7IHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT09IHBvczsgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGFibGVzKHRhcmdldHMpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgcmV0dXJuIHBhcnNlZC5tYXAoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICByZXR1cm4ge3RhcmdldDogdCwgaWQ6IGksIHRvdGFsOiBwYXJzZWQubGVuZ3RoLCB0cmFuc2Zvcm1zOiB7IGxpc3Q6IGdldEVsZW1lbnRUcmFuc2Zvcm1zKHQpIH0gfTtcbiAgfSk7XG59XG5cbi8vIFByb3BlcnRpZXNcblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocHJvcCwgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgc2V0dGluZ3MgPSBjbG9uZU9iamVjdCh0d2VlblNldHRpbmdzKTtcbiAgLy8gT3ZlcnJpZGUgZHVyYXRpb24gaWYgZWFzaW5nIGlzIGEgc3ByaW5nXG4gIGlmICgvXnNwcmluZy8udGVzdChzZXR0aW5ncy5lYXNpbmcpKSB7IHNldHRpbmdzLmR1cmF0aW9uID0gc3ByaW5nKHNldHRpbmdzLmVhc2luZyk7IH1cbiAgaWYgKGlzLmFycihwcm9wKSkge1xuICAgIHZhciBsID0gcHJvcC5sZW5ndGg7XG4gICAgdmFyIGlzRnJvbVRvID0gKGwgPT09IDIgJiYgIWlzLm9iaihwcm9wWzBdKSk7XG4gICAgaWYgKCFpc0Zyb21Ubykge1xuICAgICAgLy8gRHVyYXRpb24gZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIHR3ZWVuc1xuICAgICAgaWYgKCFpcy5mbmModHdlZW5TZXR0aW5ncy5kdXJhdGlvbikpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSB0d2VlblNldHRpbmdzLmR1cmF0aW9uIC8gbDsgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcmFuc2Zvcm0gW2Zyb20sIHRvXSB2YWx1ZXMgc2hvcnRoYW5kIHRvIGEgdmFsaWQgdHdlZW4gdmFsdWVcbiAgICAgIHByb3AgPSB7dmFsdWU6IHByb3B9O1xuICAgIH1cbiAgfVxuICB2YXIgcHJvcEFycmF5ID0gaXMuYXJyKHByb3ApID8gcHJvcCA6IFtwcm9wXTtcbiAgcmV0dXJuIHByb3BBcnJheS5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICB2YXIgb2JqID0gKGlzLm9iaih2KSAmJiAhaXMucHRoKHYpKSA/IHYgOiB7dmFsdWU6IHZ9O1xuICAgIC8vIERlZmF1bHQgZGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgZmlyc3QgdHdlZW5cbiAgICBpZiAoaXMudW5kKG9iai5kZWxheSkpIHsgb2JqLmRlbGF5ID0gIWkgPyB0d2VlblNldHRpbmdzLmRlbGF5IDogMDsgfVxuICAgIC8vIERlZmF1bHQgZW5kRGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgbGFzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmVuZERlbGF5KSkgeyBvYmouZW5kRGVsYXkgPSBpID09PSBwcm9wQXJyYXkubGVuZ3RoIC0gMSA/IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXkgOiAwOyB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSkubWFwKGZ1bmN0aW9uIChrKSB7IHJldHVybiBtZXJnZU9iamVjdHMoaywgc2V0dGluZ3MpOyB9KTtcbn1cblxuXG5mdW5jdGlvbiBmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcykge1xuICB2YXIgcHJvcGVydHlOYW1lcyA9IGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIE9iamVjdC5rZXlzKGtleSk7IH0pKSwgZnVuY3Rpb24gKHApIHsgcmV0dXJuIGlzLmtleShwKTsgfSlcbiAgLnJlZHVjZShmdW5jdGlvbiAoYSxiKSB7IGlmIChhLmluZGV4T2YoYikgPCAwKSB7IGEucHVzaChiKTsgfSByZXR1cm4gYTsgfSwgW10pO1xuICB2YXIgcHJvcGVydGllcyA9IHt9O1xuICB2YXIgbG9vcCA9IGZ1bmN0aW9uICggaSApIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgIHByb3BlcnRpZXNbcHJvcE5hbWVdID0ga2V5ZnJhbWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbmV3S2V5ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGtleSkge1xuICAgICAgICBpZiAoaXMua2V5KHApKSB7XG4gICAgICAgICAgaWYgKHAgPT0gcHJvcE5hbWUpIHsgbmV3S2V5LnZhbHVlID0ga2V5W3BdOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3S2V5W3BdID0ga2V5W3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3S2V5O1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykgbG9vcCggaSApO1xuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBbXTtcbiAgdmFyIGtleWZyYW1lcyA9IHBhcmFtcy5rZXlmcmFtZXM7XG4gIGlmIChrZXlmcmFtZXMpIHsgcGFyYW1zID0gbWVyZ2VPYmplY3RzKGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSwgcGFyYW1zKTsgfVxuICBmb3IgKHZhciBwIGluIHBhcmFtcykge1xuICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgIHByb3BlcnRpZXMucHVzaCh7XG4gICAgICAgIG5hbWU6IHAsXG4gICAgICAgIHR3ZWVuczogbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocGFyYW1zW3BdLCB0d2VlblNldHRpbmdzKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG4vLyBUd2VlbnNcblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5WYWx1ZXModHdlZW4sIGFuaW1hdGFibGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiB0d2Vlbikge1xuICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUodHdlZW5bcF0sIGFuaW1hdGFibGUpO1xuICAgIGlmIChpcy5hcnIodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZ2V0RnVuY3Rpb25WYWx1ZSh2LCBhbmltYXRhYmxlKTsgfSk7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxKSB7IHZhbHVlID0gdmFsdWVbMF07IH1cbiAgICB9XG4gICAgdFtwXSA9IHZhbHVlO1xuICB9XG4gIHQuZHVyYXRpb24gPSBwYXJzZUZsb2F0KHQuZHVyYXRpb24pO1xuICB0LmRlbGF5ID0gcGFyc2VGbG9hdCh0LmRlbGF5KTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKSB7XG4gIHZhciBwcmV2aW91c1R3ZWVuO1xuICByZXR1cm4gcHJvcC50d2VlbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHR3ZWVuID0gbm9ybWFsaXplVHdlZW5WYWx1ZXModCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIHR3ZWVuVmFsdWUgPSB0d2Vlbi52YWx1ZTtcbiAgICB2YXIgdG8gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzFdIDogdHdlZW5WYWx1ZTtcbiAgICB2YXIgdG9Vbml0ID0gZ2V0VW5pdCh0byk7XG4gICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUsIHRvVW5pdCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi50by5vcmlnaW5hbCA6IG9yaWdpbmFsVmFsdWU7XG4gICAgdmFyIGZyb20gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzBdIDogcHJldmlvdXNWYWx1ZTtcbiAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGZyb20pIHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgdmFyIHVuaXQgPSB0b1VuaXQgfHwgZnJvbVVuaXQ7XG4gICAgaWYgKGlzLnVuZCh0bykpIHsgdG8gPSBwcmV2aW91c1ZhbHVlOyB9XG4gICAgdHdlZW4uZnJvbSA9IGRlY29tcG9zZVZhbHVlKGZyb20sIHVuaXQpO1xuICAgIHR3ZWVuLnRvID0gZGVjb21wb3NlVmFsdWUoZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSksIHVuaXQpO1xuICAgIHR3ZWVuLnN0YXJ0ID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4uZW5kIDogMDtcbiAgICB0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydCArIHR3ZWVuLmRlbGF5ICsgdHdlZW4uZHVyYXRpb24gKyB0d2Vlbi5lbmREZWxheTtcbiAgICB0d2Vlbi5lYXNpbmcgPSBwYXJzZUVhc2luZ3ModHdlZW4uZWFzaW5nLCB0d2Vlbi5kdXJhdGlvbik7XG4gICAgdHdlZW4uaXNQYXRoID0gaXMucHRoKHR3ZWVuVmFsdWUpO1xuICAgIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyA9IHR3ZWVuLmlzUGF0aCAmJiBpcy5zdmcoYW5pbWF0YWJsZS50YXJnZXQpO1xuICAgIHR3ZWVuLmlzQ29sb3IgPSBpcy5jb2wodHdlZW4uZnJvbS5vcmlnaW5hbCk7XG4gICAgaWYgKHR3ZWVuLmlzQ29sb3IpIHsgdHdlZW4ucm91bmQgPSAxOyB9XG4gICAgcHJldmlvdXNUd2VlbiA9IHR3ZWVuO1xuICAgIHJldHVybiB0d2VlbjtcbiAgfSk7XG59XG5cbi8vIFR3ZWVuIHByb2dyZXNzXG5cbnZhciBzZXRQcm9ncmVzc1ZhbHVlID0ge1xuICBjc3M6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnN0eWxlW3BdID0gdjsgfSxcbiAgYXR0cmlidXRlOiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdC5zZXRBdHRyaWJ1dGUocCwgdik7IH0sXG4gIG9iamVjdDogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHRbcF0gPSB2OyB9LFxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh0LCBwLCB2LCB0cmFuc2Zvcm1zLCBtYW51YWwpIHtcbiAgICB0cmFuc2Zvcm1zLmxpc3Quc2V0KHAsIHYpO1xuICAgIGlmIChwID09PSB0cmFuc2Zvcm1zLmxhc3QgfHwgbWFudWFsKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG4gICAgICB0cmFuc2Zvcm1zLmxpc3QuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIHByb3ApIHsgc3RyICs9IHByb3AgKyBcIihcIiArIHZhbHVlICsgXCIpIFwiOyB9KTtcbiAgICAgIHQuc3R5bGUudHJhbnNmb3JtID0gc3RyO1xuICAgIH1cbiAgfVxufTtcblxuLy8gU2V0IFZhbHVlIGhlbHBlclxuXG5mdW5jdGlvbiBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcykge1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKTtcbiAgYW5pbWF0YWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUocHJvcGVydGllc1twcm9wZXJ0eV0sIGFuaW1hdGFibGUpO1xuICAgICAgdmFyIHRhcmdldCA9IGFuaW1hdGFibGUudGFyZ2V0O1xuICAgICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlVW5pdCwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdW5pdCA9IHZhbHVlVW5pdCB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xuICAgICAgdmFyIHRvID0gZ2V0UmVsYXRpdmVWYWx1ZSh2YWxpZGF0ZVZhbHVlKHZhbHVlLCB1bml0KSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltVHlwZV0odGFyZ2V0LCBwcm9wZXJ0eSwgdG8sIGFuaW1hdGFibGUudHJhbnNmb3JtcywgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gQW5pbWF0aW9uc1xuXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCkge1xuICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUpO1xuICBpZiAoYW5pbVR5cGUpIHtcbiAgICB2YXIgdHdlZW5zID0gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpO1xuICAgIHZhciBsYXN0VHdlZW4gPSB0d2VlbnNbdHdlZW5zLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhbmltVHlwZSxcbiAgICAgIHByb3BlcnR5OiBwcm9wLm5hbWUsXG4gICAgICBhbmltYXRhYmxlOiBhbmltYXRhYmxlLFxuICAgICAgdHdlZW5zOiB0d2VlbnMsXG4gICAgICBkdXJhdGlvbjogbGFzdFR3ZWVuLmVuZCxcbiAgICAgIGRlbGF5OiB0d2VlbnNbMF0uZGVsYXksXG4gICAgICBlbmREZWxheTogbGFzdFR3ZWVuLmVuZERlbGF5XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShhbmltYXRhYmxlcy5tYXAoZnVuY3Rpb24gKGFuaW1hdGFibGUpIHtcbiAgICByZXR1cm4gcHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCk7XG4gICAgfSk7XG4gIH0pKSwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuICFpcy51bmQoYSk7IH0pO1xufVxuXG4vLyBDcmVhdGUgSW5zdGFuY2VcblxuZnVuY3Rpb24gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpIHtcbiAgdmFyIGFuaW1MZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgdmFyIGdldFRsT2Zmc2V0ID0gZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGFuaW0udGltZWxpbmVPZmZzZXQgPyBhbmltLnRpbWVsaW5lT2Zmc2V0IDogMDsgfTtcbiAgdmFyIHRpbWluZ3MgPSB7fTtcbiAgdGltaW5ncy5kdXJhdGlvbiA9IGFuaW1MZW5ndGggPyBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uOyB9KSkgOiB0d2VlblNldHRpbmdzLmR1cmF0aW9uO1xuICB0aW1pbmdzLmRlbGF5ID0gYW5pbUxlbmd0aCA/IE1hdGgubWluLmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZGVsYXk7XG4gIHRpbWluZ3MuZW5kRGVsYXkgPSBhbmltTGVuZ3RoID8gdGltaW5ncy5kdXJhdGlvbiAtIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb24gLSBhbmltLmVuZERlbGF5OyB9KSkgOiB0d2VlblNldHRpbmdzLmVuZERlbGF5O1xuICByZXR1cm4gdGltaW5ncztcbn1cblxudmFyIGluc3RhbmNlSUQgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpIHtcbiAgdmFyIGluc3RhbmNlU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciB0d2VlblNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXMocGFyYW1zLnRhcmdldHMpO1xuICB2YXIgYW5pbWF0aW9ucyA9IGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpO1xuICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKTtcbiAgdmFyIGlkID0gaW5zdGFuY2VJRDtcbiAgaW5zdGFuY2VJRCsrO1xuICByZXR1cm4gbWVyZ2VPYmplY3RzKGluc3RhbmNlU2V0dGluZ3MsIHtcbiAgICBpZDogaWQsXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGFuaW1hdGFibGVzOiBhbmltYXRhYmxlcyxcbiAgICBhbmltYXRpb25zOiBhbmltYXRpb25zLFxuICAgIGR1cmF0aW9uOiB0aW1pbmdzLmR1cmF0aW9uLFxuICAgIGRlbGF5OiB0aW1pbmdzLmRlbGF5LFxuICAgIGVuZERlbGF5OiB0aW1pbmdzLmVuZERlbGF5XG4gIH0pO1xufVxuXG4vLyBDb3JlXG5cbnZhciBhY3RpdmVJbnN0YW5jZXMgPSBbXTtcblxudmFyIGVuZ2luZSA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByYWY7XG5cbiAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICBpZiAoIXJhZiAmJiAoIWlzRG9jdW1lbnRIaWRkZW4oKSB8fCAhYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikgJiYgYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc3RlcCh0KSB7XG4gICAgLy8gbWVtbyBvbiBhbGdvcml0aG0gaXNzdWU6XG4gICAgLy8gZGFuZ2Vyb3VzIGl0ZXJhdGlvbiBvdmVyIG11dGFibGUgYGFjdGl2ZUluc3RhbmNlc2BcbiAgICAvLyAodGhhdCBjb2xsZWN0aW9uIG1heSBiZSB1cGRhdGVkIGZyb20gd2l0aGluIGNhbGxiYWNrcyBvZiBgdGlja2AtZWQgYW5pbWF0aW9uIGluc3RhbmNlcylcbiAgICB2YXIgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBhY3RpdmVJbnN0YW5jZXNMZW5ndGgpIHtcbiAgICAgIHZhciBhY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcbiAgICAgIGlmICghYWN0aXZlSW5zdGFuY2UucGF1c2VkKSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlLnRpY2sodCk7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlc0xlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cbiAgICByYWYgPSBpID4gMCA/IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKCFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKGlzRG9jdW1lbnRIaWRkZW4oKSkge1xuICAgICAgLy8gc3VzcGVuZCB0aWNrc1xuICAgICAgcmFmID0gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICB9IGVsc2UgeyAvLyBpcyBiYWNrIHRvIGFjdGl2ZSB0YWJcbiAgICAgIC8vIGZpcnN0IGFkanVzdCBhbmltYXRpb25zIHRvIGNvbnNpZGVyIHRoZSB0aW1lIHRoYXQgdGlja3Mgd2VyZSBzdXNwZW5kZWRcbiAgICAgIGFjdGl2ZUluc3RhbmNlcy5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiAoaW5zdGFuY2UpIHsgcmV0dXJuIGluc3RhbmNlIC5fb25Eb2N1bWVudFZpc2liaWxpdHkoKTsgfVxuICAgICAgKTtcbiAgICAgIGVuZ2luZSgpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcbiAgfVxuXG4gIHJldHVybiBwbGF5O1xufSkoKTtcblxuZnVuY3Rpb24gaXNEb2N1bWVudEhpZGRlbigpIHtcbiAgcmV0dXJuICEhZG9jdW1lbnQgJiYgZG9jdW1lbnQuaGlkZGVuO1xufVxuXG4vLyBQdWJsaWMgSW5zdGFuY2VcblxuZnVuY3Rpb24gYW5pbWUocGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuXG4gIHZhciBzdGFydFRpbWUgPSAwLCBsYXN0VGltZSA9IDAsIG5vdyA9IDA7XG4gIHZhciBjaGlsZHJlbiwgY2hpbGRyZW5MZW5ndGggPSAwO1xuICB2YXIgcmVzb2x2ZSA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbWFrZVByb21pc2UoaW5zdGFuY2UpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlICYmIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChfcmVzb2x2ZSkgeyByZXR1cm4gcmVzb2x2ZSA9IF9yZXNvbHZlOyB9KTtcbiAgICBpbnN0YW5jZS5maW5pc2hlZCA9IHByb21pc2U7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICB2YXIgaW5zdGFuY2UgPSBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpO1xuICB2YXIgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xuICAgIGlmIChkaXJlY3Rpb24gIT09ICdhbHRlcm5hdGUnKSB7XG4gICAgICBpbnN0YW5jZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gIT09ICdub3JtYWwnID8gJ25vcm1hbCcgOiAncmV2ZXJzZSc7XG4gICAgfVxuICAgIGluc3RhbmNlLnJldmVyc2VkID0gIWluc3RhbmNlLnJldmVyc2VkO1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5yZXZlcnNlZCA9IGluc3RhbmNlLnJldmVyc2VkOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkanVzdFRpbWUodGltZSkge1xuICAgIHJldHVybiBpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIC0gdGltZSA6IHRpbWU7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRpbWUoKSB7XG4gICAgc3RhcnRUaW1lID0gMDtcbiAgICBsYXN0VGltZSA9IGFkanVzdFRpbWUoaW5zdGFuY2UuY3VycmVudFRpbWUpICogKDEgLyBhbmltZS5zcGVlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWVrQ2hpbGQodGltZSwgY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQpIHsgY2hpbGQuc2Vlayh0aW1lIC0gY2hpbGQudGltZWxpbmVPZmZzZXQpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jSW5zdGFuY2VDaGlsZHJlbih0aW1lKSB7XG4gICAgaWYgKCFpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykgeyBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baV0pOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IGNoaWxkcmVuTGVuZ3RoOyBpJDEtLTspIHsgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2kkMV0pOyB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xuICAgIHZhciBhbmltYXRpb25zTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPCBhbmltYXRpb25zTGVuZ3RoKSB7XG4gICAgICB2YXIgYW5pbSA9IGFuaW1hdGlvbnNbaV07XG4gICAgICB2YXIgYW5pbWF0YWJsZSA9IGFuaW0uYW5pbWF0YWJsZTtcbiAgICAgIHZhciB0d2VlbnMgPSBhbmltLnR3ZWVucztcbiAgICAgIHZhciB0d2Vlbkxlbmd0aCA9IHR3ZWVucy5sZW5ndGggLSAxO1xuICAgICAgdmFyIHR3ZWVuID0gdHdlZW5zW3R3ZWVuTGVuZ3RoXTtcbiAgICAgIC8vIE9ubHkgY2hlY2sgZm9yIGtleWZyYW1lcyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHR3ZWVuXG4gICAgICBpZiAodHdlZW5MZW5ndGgpIHsgdHdlZW4gPSBmaWx0ZXJBcnJheSh0d2VlbnMsIGZ1bmN0aW9uICh0KSB7IHJldHVybiAoaW5zVGltZSA8IHQuZW5kKTsgfSlbMF0gfHwgdHdlZW47IH1cbiAgICAgIHZhciBlbGFwc2VkID0gbWluTWF4KGluc1RpbWUgLSB0d2Vlbi5zdGFydCAtIHR3ZWVuLmRlbGF5LCAwLCB0d2Vlbi5kdXJhdGlvbikgLyB0d2Vlbi5kdXJhdGlvbjtcbiAgICAgIHZhciBlYXNlZCA9IGlzTmFOKGVsYXBzZWQpID8gMSA6IHR3ZWVuLmVhc2luZyhlbGFwc2VkKTtcbiAgICAgIHZhciBzdHJpbmdzID0gdHdlZW4udG8uc3RyaW5ncztcbiAgICAgIHZhciByb3VuZCA9IHR3ZWVuLnJvdW5kO1xuICAgICAgdmFyIG51bWJlcnMgPSBbXTtcbiAgICAgIHZhciB0b051bWJlcnNMZW5ndGggPSB0d2Vlbi50by5udW1iZXJzLmxlbmd0aDtcbiAgICAgIHZhciBwcm9ncmVzcyA9ICh2b2lkIDApO1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0b051bWJlcnNMZW5ndGg7IG4rKykge1xuICAgICAgICB2YXIgdmFsdWUgPSAodm9pZCAwKTtcbiAgICAgICAgdmFyIHRvTnVtYmVyID0gdHdlZW4udG8ubnVtYmVyc1tuXTtcbiAgICAgICAgdmFyIGZyb21OdW1iZXIgPSB0d2Vlbi5mcm9tLm51bWJlcnNbbl0gfHwgMDtcbiAgICAgICAgaWYgKCF0d2Vlbi5pc1BhdGgpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZyb21OdW1iZXIgKyAoZWFzZWQgKiAodG9OdW1iZXIgLSBmcm9tTnVtYmVyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBnZXRQYXRoUHJvZ3Jlc3ModHdlZW4udmFsdWUsIGVhc2VkICogdG9OdW1iZXIsIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgICAgaWYgKCEodHdlZW4uaXNDb2xvciAmJiBuID4gMikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIHJvdW5kKSAvIHJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gTWFudWFsIEFycmF5LnJlZHVjZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlc1xuICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcbiAgICAgIGlmICghc3RyaW5nc0xlbmd0aCkge1xuICAgICAgICBwcm9ncmVzcyA9IG51bWJlcnNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9ncmVzcyA9IHN0cmluZ3NbMF07XG4gICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgc3RyaW5nc0xlbmd0aDsgcysrKSB7XG4gICAgICAgICAgdmFyIGEgPSBzdHJpbmdzW3NdO1xuICAgICAgICAgIHZhciBiID0gc3RyaW5nc1tzICsgMV07XG4gICAgICAgICAgdmFyIG4kMSA9IG51bWJlcnNbc107XG4gICAgICAgICAgaWYgKCFpc05hTihuJDEpKSB7XG4gICAgICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgJyAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbS50eXBlXShhbmltYXRhYmxlLnRhcmdldCwgYW5pbS5wcm9wZXJ0eSwgcHJvZ3Jlc3MsIGFuaW1hdGFibGUudHJhbnNmb3Jtcyk7XG4gICAgICBhbmltLmN1cnJlbnRWYWx1ZSA9IHByb2dyZXNzO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENhbGxiYWNrKGNiKSB7XG4gICAgaWYgKGluc3RhbmNlW2NiXSAmJiAhaW5zdGFuY2UucGFzc1Rocm91Z2gpIHsgaW5zdGFuY2VbY2JdKGluc3RhbmNlKTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gY291bnRJdGVyYXRpb24oKSB7XG4gICAgaWYgKGluc3RhbmNlLnJlbWFpbmluZyAmJiBpbnN0YW5jZS5yZW1haW5pbmcgIT09IHRydWUpIHtcbiAgICAgIGluc3RhbmNlLnJlbWFpbmluZy0tO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluc3RhbmNlUHJvZ3Jlc3MoZW5naW5lVGltZSkge1xuICAgIHZhciBpbnNEdXJhdGlvbiA9IGluc3RhbmNlLmR1cmF0aW9uO1xuICAgIHZhciBpbnNEZWxheSA9IGluc3RhbmNlLmRlbGF5O1xuICAgIHZhciBpbnNFbmREZWxheSA9IGluc0R1cmF0aW9uIC0gaW5zdGFuY2UuZW5kRGVsYXk7XG4gICAgdmFyIGluc1RpbWUgPSBhZGp1c3RUaW1lKGVuZ2luZVRpbWUpO1xuICAgIGluc3RhbmNlLnByb2dyZXNzID0gbWluTWF4KChpbnNUaW1lIC8gaW5zRHVyYXRpb24pICogMTAwLCAwLCAxMDApO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGluc1RpbWUgPCBpbnN0YW5jZS5jdXJyZW50VGltZTtcbiAgICBpZiAoY2hpbGRyZW4pIHsgc3luY0luc3RhbmNlQ2hpbGRyZW4oaW5zVGltZSk7IH1cbiAgICBpZiAoIWluc3RhbmNlLmJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgaW5zdGFuY2UuYmVnYW4gPSB0cnVlO1xuICAgICAgc2V0Q2FsbGJhY2soJ2JlZ2luJyk7XG4gICAgfVxuICAgIGlmICghaW5zdGFuY2UubG9vcEJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gdHJ1ZTtcbiAgICAgIHNldENhbGxiYWNrKCdsb29wQmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPD0gaW5zRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IDApIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcygwKTtcbiAgICB9XG4gICAgaWYgKChpbnNUaW1lID49IGluc0VuZERlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSBpbnNEdXJhdGlvbikgfHwgIWluc0R1cmF0aW9uKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zRHVyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA+IGluc0RlbGF5ICYmIGluc1RpbWUgPCBpbnNFbmREZWxheSkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQmVnaW4nKTtcbiAgICAgIH1cbiAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2UnKTtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VDb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IG1pbk1heChpbnNUaW1lLCAwLCBpbnNEdXJhdGlvbik7XG4gICAgaWYgKGluc3RhbmNlLmJlZ2FuKSB7IHNldENhbGxiYWNrKCd1cGRhdGUnKTsgfVxuICAgIGlmIChlbmdpbmVUaW1lID49IGluc0R1cmF0aW9uKSB7XG4gICAgICBsYXN0VGltZSA9IDA7XG4gICAgICBjb3VudEl0ZXJhdGlvbigpO1xuICAgICAgaWYgKCFpbnN0YW5jZS5yZW1haW5pbmcpIHtcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgICBzZXRDYWxsYmFjaygnY29tcGxldGUnKTtcbiAgICAgICAgICBpZiAoIWluc3RhbmNlLnBhc3NUaHJvdWdoICYmICdQcm9taXNlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbWUgPSBub3c7XG4gICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XG4gICAgICAgIGlmIChpbnN0YW5jZS5kaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnKSB7XG4gICAgICAgICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc3RhbmNlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcbiAgICBpbnN0YW5jZS5wYXNzVGhyb3VnaCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IDA7XG4gICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICBpbnN0YW5jZS5iZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY29tcGxldGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gZmFsc2U7XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSBkaXJlY3Rpb24gPT09ICdyZXZlcnNlJztcbiAgICBpbnN0YW5jZS5yZW1haW5pbmcgPSBpbnN0YW5jZS5sb29wO1xuICAgIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuTGVuZ3RoOyBpLS07KSB7IGluc3RhbmNlLmNoaWxkcmVuW2ldLnJlc2V0KCk7IH1cbiAgICBpZiAoaW5zdGFuY2UucmV2ZXJzZWQgJiYgaW5zdGFuY2UubG9vcCAhPT0gdHJ1ZSB8fCAoZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJyAmJiBpbnN0YW5jZS5sb29wID09PSAxKSkgeyBpbnN0YW5jZS5yZW1haW5pbmcrKzsgfVxuICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIDogMCk7XG4gIH07XG5cbiAgLy8gaW50ZXJuYWwgbWV0aG9kIChmb3IgZW5naW5lKSB0byBhZGp1c3QgYW5pbWF0aW9uIHRpbWluZ3MgYmVmb3JlIHJlc3RvcmluZyBlbmdpbmUgdGlja3MgKHJBRilcbiAgaW5zdGFuY2UuX29uRG9jdW1lbnRWaXNpYmlsaXR5ID0gcmVzZXRUaW1lO1xuXG4gIC8vIFNldCBWYWx1ZSBoZWxwZXJcblxuICBpbnN0YW5jZS5zZXQgPSBmdW5jdGlvbih0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XG4gICAgc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcblxuICBpbnN0YW5jZS50aWNrID0gZnVuY3Rpb24odCkge1xuICAgIG5vdyA9IHQ7XG4gICAgaWYgKCFzdGFydFRpbWUpIHsgc3RhcnRUaW1lID0gbm93OyB9XG4gICAgc2V0SW5zdGFuY2VQcm9ncmVzcygobm93ICsgKGxhc3RUaW1lIC0gc3RhcnRUaW1lKSkgKiBhbmltZS5zcGVlZCk7XG4gIH07XG5cbiAgaW5zdGFuY2Uuc2VlayA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKGFkanVzdFRpbWUodGltZSkpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFpbnN0YW5jZS5wYXVzZWQpIHsgcmV0dXJuOyB9XG4gICAgaWYgKGluc3RhbmNlLmNvbXBsZXRlZCkgeyBpbnN0YW5jZS5yZXNldCgpOyB9XG4gICAgaW5zdGFuY2UucGF1c2VkID0gZmFsc2U7XG4gICAgYWN0aXZlSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgIHJlc2V0VGltZSgpO1xuICAgIGVuZ2luZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJldmVyc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xuICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGluc3RhbmNlLnJldmVyc2VkID8gZmFsc2UgOiB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5yZXNldCgpO1xuICAgIGluc3RhbmNlLnBsYXkoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZW1vdmUgPSBmdW5jdGlvbih0YXJnZXRzKSB7XG4gICAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJlc2V0KCk7XG5cbiAgaWYgKGluc3RhbmNlLmF1dG9wbGF5KSB7IGluc3RhbmNlLnBsYXkoKTsgfVxuXG4gIHJldHVybiBpbnN0YW5jZTtcblxufVxuXG4vLyBSZW1vdmUgdGFyZ2V0cyBmcm9tIGFuaW1hdGlvblxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKSB7XG4gIGZvciAodmFyIGEgPSBhbmltYXRpb25zLmxlbmd0aDsgYS0tOykge1xuICAgIGlmIChhcnJheUNvbnRhaW5zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9uc1thXS5hbmltYXRhYmxlLnRhcmdldCkpIHtcbiAgICAgIGFuaW1hdGlvbnMuc3BsaWNlKGEsIDEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpIHtcbiAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xuICB2YXIgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcbiAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucyk7XG4gIGZvciAodmFyIGMgPSBjaGlsZHJlbi5sZW5ndGg7IGMtLTspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltjXTtcbiAgICB2YXIgY2hpbGRBbmltYXRpb25zID0gY2hpbGQuYW5pbWF0aW9ucztcbiAgICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBjaGlsZEFuaW1hdGlvbnMpO1xuICAgIGlmICghY2hpbGRBbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGQuY2hpbGRyZW4ubGVuZ3RoKSB7IGNoaWxkcmVuLnNwbGljZShjLCAxKTsgfVxuICB9XG4gIGlmICghYW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkcmVuLmxlbmd0aCkgeyBpbnN0YW5jZS5wYXVzZSgpOyB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgZm9yICh2YXIgaSA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7IGktLTspIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcbiAgfVxufVxuXG4vLyBTdGFnZ2VyIGhlbHBlcnNcblxuZnVuY3Rpb24gc3RhZ2dlcih2YWwsIHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cbiAgdmFyIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb24gfHwgJ25vcm1hbCc7XG4gIHZhciBlYXNpbmcgPSBwYXJhbXMuZWFzaW5nID8gcGFyc2VFYXNpbmdzKHBhcmFtcy5lYXNpbmcpIDogbnVsbDtcbiAgdmFyIGdyaWQgPSBwYXJhbXMuZ3JpZDtcbiAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcztcbiAgdmFyIGZyb21JbmRleCA9IHBhcmFtcy5mcm9tIHx8IDA7XG4gIHZhciBmcm9tRmlyc3QgPSBmcm9tSW5kZXggPT09ICdmaXJzdCc7XG4gIHZhciBmcm9tQ2VudGVyID0gZnJvbUluZGV4ID09PSAnY2VudGVyJztcbiAgdmFyIGZyb21MYXN0ID0gZnJvbUluZGV4ID09PSAnbGFzdCc7XG4gIHZhciBpc1JhbmdlID0gaXMuYXJyKHZhbCk7XG4gIHZhciB2YWwxID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzBdKSA6IHBhcnNlRmxvYXQodmFsKTtcbiAgdmFyIHZhbDIgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMV0pIDogMDtcbiAgdmFyIHVuaXQgPSBnZXRVbml0KGlzUmFuZ2UgPyB2YWxbMV0gOiB2YWwpIHx8IDA7XG4gIHZhciBzdGFydCA9IHBhcmFtcy5zdGFydCB8fCAwICsgKGlzUmFuZ2UgPyB2YWwxIDogMCk7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgdmFyIG1heFZhbHVlID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbCwgaSwgdCkge1xuICAgIGlmIChmcm9tRmlyc3QpIHsgZnJvbUluZGV4ID0gMDsgfVxuICAgIGlmIChmcm9tQ2VudGVyKSB7IGZyb21JbmRleCA9ICh0IC0gMSkgLyAyOyB9XG4gICAgaWYgKGZyb21MYXN0KSB7IGZyb21JbmRleCA9IHQgLSAxOyB9XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdDsgaW5kZXgrKykge1xuICAgICAgICBpZiAoIWdyaWQpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChNYXRoLmFicyhmcm9tSW5kZXggLSBpbmRleCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmcm9tWCA9ICFmcm9tQ2VudGVyID8gZnJvbUluZGV4JWdyaWRbMF0gOiAoZ3JpZFswXS0xKS8yO1xuICAgICAgICAgIHZhciBmcm9tWSA9ICFmcm9tQ2VudGVyID8gTWF0aC5mbG9vcihmcm9tSW5kZXgvZ3JpZFswXSkgOiAoZ3JpZFsxXS0xKS8yO1xuICAgICAgICAgIHZhciB0b1ggPSBpbmRleCVncmlkWzBdO1xuICAgICAgICAgIHZhciB0b1kgPSBNYXRoLmZsb29yKGluZGV4L2dyaWRbMF0pO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBmcm9tWCAtIHRvWDtcbiAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gZnJvbVkgLSB0b1k7XG4gICAgICAgICAgdmFyIHZhbHVlID0gTWF0aC5zcXJ0KGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWSk7XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd4JykgeyB2YWx1ZSA9IC1kaXN0YW5jZVg7IH1cbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7IHZhbHVlID0gLWRpc3RhbmNlWTsgfVxuICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBtYXhWYWx1ZSA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgICBpZiAoZWFzaW5nKSB7IHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gZWFzaW5nKHZhbCAvIG1heFZhbHVlKSAqIG1heFZhbHVlOyB9KTsgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnKSB7IHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gYXhpcyA/ICh2YWwgPCAwKSA/IHZhbCAqIC0xIDogLXZhbCA6IE1hdGguYWJzKG1heFZhbHVlIC0gdmFsKTsgfSk7IH1cbiAgICB9XG4gICAgdmFyIHNwYWNpbmcgPSBpc1JhbmdlID8gKHZhbDIgLSB2YWwxKSAvIG1heFZhbHVlIDogdmFsMTtcbiAgICByZXR1cm4gc3RhcnQgKyAoc3BhY2luZyAqIChNYXRoLnJvdW5kKHZhbHVlc1tpXSAqIDEwMCkgLyAxMDApKSArIHVuaXQ7XG4gIH1cbn1cblxuLy8gVGltZWxpbmVcblxuZnVuY3Rpb24gdGltZWxpbmUocGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgdGwgPSBhbmltZShwYXJhbXMpO1xuICB0bC5kdXJhdGlvbiA9IDA7XG4gIHRsLmFkZCA9IGZ1bmN0aW9uKGluc3RhbmNlUGFyYW1zLCB0aW1lbGluZU9mZnNldCkge1xuICAgIHZhciB0bEluZGV4ID0gYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YodGwpO1xuICAgIHZhciBjaGlsZHJlbiA9IHRsLmNoaWxkcmVuO1xuICAgIGlmICh0bEluZGV4ID4gLTEpIHsgYWN0aXZlSW5zdGFuY2VzLnNwbGljZSh0bEluZGV4LCAxKTsgfVxuICAgIGZ1bmN0aW9uIHBhc3NUaHJvdWdoKGlucykgeyBpbnMucGFzc1Rocm91Z2ggPSB0cnVlOyB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykgeyBwYXNzVGhyb3VnaChjaGlsZHJlbltpXSk7IH1cbiAgICB2YXIgaW5zUGFyYW1zID0gbWVyZ2VPYmplY3RzKGluc3RhbmNlUGFyYW1zLCByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcykpO1xuICAgIGluc1BhcmFtcy50YXJnZXRzID0gaW5zUGFyYW1zLnRhcmdldHMgfHwgcGFyYW1zLnRhcmdldHM7XG4gICAgdmFyIHRsRHVyYXRpb24gPSB0bC5kdXJhdGlvbjtcbiAgICBpbnNQYXJhbXMuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICBpbnNQYXJhbXMuZGlyZWN0aW9uID0gdGwuZGlyZWN0aW9uO1xuICAgIGluc1BhcmFtcy50aW1lbGluZU9mZnNldCA9IGlzLnVuZCh0aW1lbGluZU9mZnNldCkgPyB0bER1cmF0aW9uIDogZ2V0UmVsYXRpdmVWYWx1ZSh0aW1lbGluZU9mZnNldCwgdGxEdXJhdGlvbik7XG4gICAgcGFzc1Rocm91Z2godGwpO1xuICAgIHRsLnNlZWsoaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0KTtcbiAgICB2YXIgaW5zID0gYW5pbWUoaW5zUGFyYW1zKTtcbiAgICBwYXNzVGhyb3VnaChpbnMpO1xuICAgIGNoaWxkcmVuLnB1c2goaW5zKTtcbiAgICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhjaGlsZHJlbiwgcGFyYW1zKTtcbiAgICB0bC5kZWxheSA9IHRpbWluZ3MuZGVsYXk7XG4gICAgdGwuZW5kRGVsYXkgPSB0aW1pbmdzLmVuZERlbGF5O1xuICAgIHRsLmR1cmF0aW9uID0gdGltaW5ncy5kdXJhdGlvbjtcbiAgICB0bC5zZWVrKDApO1xuICAgIHRsLnJlc2V0KCk7XG4gICAgaWYgKHRsLmF1dG9wbGF5KSB7IHRsLnBsYXkoKTsgfVxuICAgIHJldHVybiB0bDtcbiAgfTtcbiAgcmV0dXJuIHRsO1xufVxuXG5hbmltZS52ZXJzaW9uID0gJzMuMi4xJztcbmFuaW1lLnNwZWVkID0gMTtcbi8vIFRPRE86I3JldmlldzogbmFtaW5nLCBkb2N1bWVudGF0aW9uXG5hbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuID0gdHJ1ZTtcbmFuaW1lLnJ1bm5pbmcgPSBhY3RpdmVJbnN0YW5jZXM7XG5hbmltZS5yZW1vdmUgPSByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcztcbmFuaW1lLmdldCA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWU7XG5hbmltZS5zZXQgPSBzZXRUYXJnZXRzVmFsdWU7XG5hbmltZS5jb252ZXJ0UHggPSBjb252ZXJ0UHhUb1VuaXQ7XG5hbmltZS5wYXRoID0gZ2V0UGF0aDtcbmFuaW1lLnNldERhc2hvZmZzZXQgPSBzZXREYXNob2Zmc2V0O1xuYW5pbWUuc3RhZ2dlciA9IHN0YWdnZXI7XG5hbmltZS50aW1lbGluZSA9IHRpbWVsaW5lO1xuYW5pbWUuZWFzaW5nID0gcGFyc2VFYXNpbmdzO1xuYW5pbWUucGVubmVyID0gcGVubmVyO1xuYW5pbWUucmFuZG9tID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyB9O1xuXG5leHBvcnQgZGVmYXVsdCBhbmltZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYmFyYmEgZnJvbSAnQGJhcmJhL2NvcmUnO1xuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMvbGliL2FuaW1lLmVzLmpzJztcblxuZnVuY3Rpb24gbG9ja3NjcmVlbigpXG57XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICBib2R5LmNsYXNzTmFtZSArPSBcIiBsb2NrLXNjcmVlblwiO1xuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSwgZmFsc2UpO1xufVxuZnVuY3Rpb24gdW5sb2NrKClcbntcbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9jay1zY3JlZW5cIik7XG4gYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpO1xufVxuXG4vLyBiYXJiYS5pbml0KHtcbi8vICAgICBkZWJ1ZzogdHJ1ZSxcbi8vXG4vLyAgICAgdHJhbnNpdGlvbnM6IFt7XG4vLyAgICAgICAgIC8vc3luYzogdHJ1ZSxcbi8vICAgICAgICAgbGVhdmU6IChkYXRhKSA9PiB7XG4vLyAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuLy8gICAgICAgICAgICAgdW5sb2NrKCk7XG4vLyAgICAgICAgICAgICBhbmltZSh7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0czogZGF0YS5jdXJyZW50LmNvbnRhaW5lcixcbi8vICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBbMTAwLCAxMDAwXSxcbi8vICAgICAgICAgICAgICAgICBlYXNpbmc6ICdzcHJpbmcoMSwgODAsIDEwLCAwKScsXG4vLyAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBlbnRlcjogKGRhdGEpID0+IHtcbi8vICAgICAgICAgICAgIGxvY2tzY3JlZW4oKTtcbi8vICAgICAgICAgICAgIGFuaW1lKHtcbi8vICAgICAgICAgICAgICAgICB0YXJnZXRzOiBkYXRhLm5leHQuY29udGFpbmVyLFxuLy8gICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMDAwLCAxMDBdLFxuLy8gICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJyxcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBiZWZvcmVPbmNlOiAoZGF0YSkgPT4ge1xuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKFwib25jZSFcIilcbi8vXG4vLyAgICAgICAgICAgZGF0YS5uZXh0LmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMTAwcHgpXCJcbi8vICAgICAgICAgICAvLyBhbmltZSh7XG4vLyAgICAgICAgICAgLy8gICAgIHRhcmdldHM6IGRhdGEubmV4dC5jb250YWluZXIsXG4vLyAgICAgICAgICAgLy8gICAgIHRyYW5zbGF0ZVk6IFsxMDAwLCAxMDBdLFxuLy8gICAgICAgICAgIC8vICAgICBlYXNpbmc6ICdzcHJpbmcoMSwgODAsIDEwLCAwKScsXG4vLyAgICAgICAgICAgLy8gfSk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIG9uY2U6IChkYXRhKSA9PiB7XG4vL1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBhZnRlck9uY2U6IChkYXRhKSA9PiB7XG4vLyAgICAgICAgICAgLy9sb2Nrc2NyZWVuKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9LHtcbi8vICAgICAgIG5hbWU6ICd0by1ob21lJyxcbi8vICAgICAgIHRvOiB7IG5hbWVzcGFjZTogWydob21lJ10gfSxcbi8vICAgICAgIGxlYXZlOiAoZGF0YSkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4vLyAgICAgICAgICAgICAgIGFuaW1lKHtcbi8vICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGRhdGEuY3VycmVudC5jb250YWluZXIsXG4vLyAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBbMTAwLCAxMDAwXSxcbi8vICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJyxcbi8vICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuLy8gICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICB9KTtcbi8vICAgICAgIH1cbi8vICAgICB9XVxuLy8gfSk7XG4vL1xuLy8gYmFyYmEuaG9va3MuZW50ZXIoKGRhdGEpID0+IHtcbi8vICAgY29uc29sZS5sb2coZGF0YS5uZXh0Lm5hbWVzcGFjZSk7XG4vLyB9KTtcbiJdLCJuYW1lcyI6WyJfY2F0Y2giLCJib2R5IiwicmVjb3ZlciIsInJlc3VsdCIsImUiLCJ0aGVuIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yIiwiTG9nTGV2ZWxzIiwiSG9va01ldGhvZHMiLCJfbGV2ZWwiLCJvZmYiLCJMb2dnZXIiLCJzb3VyY2UiLCJ0aGlzIiwiX3NvdXJjZSIsImdldExldmVsIiwic2V0TGV2ZWwiLCJuYW1lIiwiZXJyb3IiLCJvYmplY3RzIiwiX2xvZyIsImNvbnNvbGUiLCJ3YXJuIiwid2FybmluZyIsImluZm8iLCJkZWJ1ZyIsImxvZyIsImZuIiwibGV2ZWwiLCJhcHBseSIsImNvbmNhdCIsInBhdGhUb1JlZ2V4cCIsInJlZ2V4cFRvRnVuY3Rpb24iLCJwYXJzZSIsInRva2Vuc1RvRnVuY3Rpb24iLCJ0b2tlbnNUb1JlZ0V4cCIsIkRFRkFVTFRfREVMSU1JVEVSIiwiUEFUSF9SRUdFWFAiLCJSZWdFeHAiLCJqb2luIiwic3RyIiwib3B0aW9ucyIsInJlcyIsInRva2VucyIsImtleSIsImluZGV4IiwicGF0aCIsImRlZmF1bHREZWxpbWl0ZXIiLCJkZWxpbWl0ZXIiLCJ3aGl0ZWxpc3QiLCJ1bmRlZmluZWQiLCJwYXRoRXNjYXBlZCIsImV4ZWMiLCJtIiwiZXNjYXBlZCIsIm9mZnNldCIsInNsaWNlIiwibGVuZ3RoIiwicHJldiIsImNhcHR1cmUiLCJncm91cCIsIm1vZGlmaWVyIiwiayIsImMiLCJpbmRleE9mIiwicHVzaCIsInBhdHRlcm4iLCJwcmVmaXgiLCJvcHRpb25hbCIsInJlcGVhdCIsImVzY2FwZUdyb3VwIiwiZXNjYXBlU3RyaW5nIiwic3Vic3RyIiwicmUiLCJrZXlzIiwicGF0aG5hbWUiLCJwYXJhbXMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJpIiwic3BsaXQiLCJtYXAiLCJ2YWx1ZSIsIm1hdGNoZXMiLCJBcnJheSIsImZsYWdzIiwiZGF0YSIsImVuY29kZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInZhbGlkYXRlIiwidG9rZW4iLCJzZWdtZW50IiwiaXNBcnJheSIsIlR5cGVFcnJvciIsImoiLCJ0ZXN0IiwiU3RyaW5nIiwicmVwbGFjZSIsInNlbnNpdGl2ZSIsInN0cmljdCIsInN0YXJ0IiwiZW5kIiwiZW5kc1dpdGgiLCJyb3V0ZSIsImVuZFRva2VuIiwiaXNFbmREZWxpbWl0ZWQiLCJncm91cHMiLCJtYXRjaCIsInJlZ2V4cFRvUmVnZXhwIiwicGFydHMiLCJhcnJheVRvUmVnZXhwIiwic3RyaW5nVG9SZWdleHAiLCJzY2hlbWFBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJoaXN0b3J5IiwibmFtZXNwYWNlIiwicHJldmVudCIsIndyYXBwZXIiLCJkb20iLCJET01QYXJzZXIiLCJ0b1N0cmluZyIsImVsIiwib3V0ZXJIVE1MIiwidG9Eb2N1bWVudCIsImh0bWxTdHJpbmciLCJfcGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwibiIsInRvRWxlbWVudCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImdldEh0bWwiLCJkb2MiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRXcmFwcGVyIiwic2NvcGUiLCJxdWVyeVNlbGVjdG9yIiwiX2F0dHIiLCJnZXRDb250YWluZXIiLCJyZW1vdmVDb250YWluZXIiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImFkZENvbnRhaW5lciIsImV4aXN0aW5nQ29udGFpbmVyIiwiX2luc2VydEFmdGVyIiwiYXBwZW5kQ2hpbGQiLCJnZXROYW1lc3BhY2UiLCJucyIsImdldEF0dHJpYnV0ZSIsImdldEhyZWYiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJocmVmIiwicmVzb2x2ZVVybCIsImJhc2VWYWwiLCJ1cmxzIiwibnVtVXJscyIsIkVycm9yIiwiYmFzZSIsImFyZ3VtZW50cyIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJyZXNvbHZlZCIsImEiLCJuZXdOb2RlIiwicmVmZXJlbmNlTm9kZSIsIm5leHRTaWJsaW5nIiwiaW5pdCIsInVybCIsIl9zZXNzaW9uIiwic3RhdGUiLCJzY3JvbGwiLCJ4Iiwid2luZG93Iiwic2Nyb2xsWCIsInkiLCJzY3JvbGxZIiwiX3N0YXRlcyIsIl9wb2ludGVyIiwiaXRlbSIsImZyb20iLCJzdGF0ZXMiLCJyZXBsYWNlU3RhdGUiLCJjaGFuZ2UiLCJ0cmlnZ2VyIiwiX2dldERpcmVjdGlvbiIsImFkZCIsInNpemUiLCJhY3Rpb24iLCJfZ2V0QWN0aW9uIiwicHVzaFN0YXRlIiwidXBkYXRlIiwiZ2V0Iiwic2V0IiwicmVtb3ZlIiwic3BsaWNlIiwicG9wIiwiY2xlYXIiLCJuZXdTdGF0ZXMiLCJhdHRyIiwiaGFzQXR0cmlidXRlIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJwYWdlIiwibmV4dCIsImh0bWwiLCJuZXh0RG9jdW1lbnQiLCJ0aXRsZSIsInB0ciIsIlByb21pc2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXNvbHZlIiwiZ2V0T3JpZ2luIiwibG9jYXRpb24iLCJvcmlnaW4iLCJnZXRQb3J0IiwicG9ydCIsInBvcnRTdHJpbmciLCJzdWJzdHJpbmciLCJwYXJzZUludCIsImhhc2giLCJxdWVyeSIsImhhc2hJbmRleCIsInF1ZXJ5SW5kZXgiLCJwYXJzZVF1ZXJ5IiwicmVkdWNlIiwiYWNjIiwiY2xlYW4iLCJIIiwiX19wcm90b19fIiwicmVxdWVzdCIsInR0bCIsInJlcXVlc3RFcnJvciIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzdGF0dXNUZXh0Iiwib250aW1lb3V0IiwiZXJyIiwib25lcnJvciIsIm9wZW4iLCJ0aW1lb3V0Iiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJDIiwib2JqIiwicnVuQXN5bmMiLCJmdW5jIiwiY3R4IiwiYXJncyIsImFzeW5jIiwicHJvbWlzZSIsImFuc3dlciIsImlzUHJvbWlzZSIsImhvb2tzIiwiX3RoaXMiLCJNYXAiLCJyZWdpc3RlcmVkIiwiYWxsIiwiZm9yRWFjaCIsIl90aGlzMiIsImhvb2siLCJoYXMiLCJTZXQiLCJjaGFpbiIsIl90aGlzMyIsImxvZ2dlciIsIl90aGlzNCIsImhlbHAiLCJJZ25vcmUiLCJpZ25vcmUiLCJfaWdub3JlQWxsIiwicGF0aHMiLCJfaWdub3JlUmVnZXhlcyIsInAiLCJjaGVja0hyZWYiLCJzb21lIiwicmVnZXgiLCJDYWNoZSIsIl9zdGF0ZSIsImdldFJlcXVlc3QiLCJnZXRBY3Rpb24iLCJleGlzdHMiLCJuZXdUYWIiLCJldmVudCIsIndoaWNoIiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsImJsYW5rIiwidGFyZ2V0IiwiY29yc0RvbWFpbiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJjb3JzUG9ydCIsImRvd25sb2FkIiwicHJldmVudFNlbGYiLCJwcmV2ZW50QWxsIiwiQm9vbGVhbiIsImNsb3Nlc3QiLCJzYW1lVXJsIiwiUHJldmVudCIsInIiLCJjaGVjayIsInN1aXRlIiwidGVzdHMiLCJydW4iLCJjaGVja0xpbmsiLCJCYXJiYUVycm9yIiwibGFiZWwiLCJjYXB0dXJlU3RhY2tUcmFjZSIsImYiLCJTdG9yZSIsInRyYW5zaXRpb25zIiwidHlwZSIsIl9ydWxlcyIsInBvc2l0aW9uIiwiZmlsdGVycyIsIm9uY2UiLCJmaWx0ZXIiLCJzZWxmIiwidCIsIm1hdGNoaW5nIiwiYWN0aXZlIiwiZmluZCIsInZhbGlkIiwicmV2ZXJzZSIsIl9jaGVjayIsInJ1bGUiLCJ0byIsImFjdGl2ZU1hdGNoIiwidHJhbnNpdGlvblR5cGUiLCJpbmZvcyIsIk9iamVjdCIsIl9hZGRQcmlvcml0eSIsInNvcnQiLCJiIiwicHJpb3JpdHkiLCJsZWF2ZSIsImVudGVyIiwidHJhbnNpdGlvbiIsImRpcmVjdGlvbiIsImlzVmFsaWQiLCJoYXNNYXRjaCIsInN0clJ1bGUiLCJvYmpSdWxlIiwiZm5OYW1lIiwiY3VycmVudCIsIm5hbWVzIiwiX2NhbGN1bGF0ZVByaW9yaXR5IiwicnVsZU5hbWUiLCJydWxlSW5kZXgiLCJwb3ciLCJUcmFuc2l0aW9ucyIsInN0b3JlIiwiZG9PbmNlIiwiX3J1bm5pbmciLCJfZG9Bc3luY0hvb2siLCJkb1BhZ2UiLCJ1Iiwic3luYyIsIl9pc1RyYW5zaXRpb25FcnJvciIsImxlYXZlUmVzdWx0IiwiaGVscGVycyIsInZhbHVlcyIsIm1lc3NhZ2UiLCJWaWV3cyIsInZpZXdzIiwiYnlOYW1lc3BhY2UiLCJ2aWV3IiwiX2NyZWF0ZUhvb2siLCJFbGVtZW50IiwicHJvdG90eXBlIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJzIiwicGFyZW50RWxlbWVudCIsIm5vZGVUeXBlIiwic2NoZW1hUGFnZSIsInZlcnNpb24iLCJ1c2UiLCJwbHVnaW4iLCJpbnN0YWxsZWRQbHVnaW5zIiwicGx1Z2lucyIsImluc3RhbGwiLCJvIiwic2NoZW1hIiwidiIsImNhY2hlSWdub3JlIiwicHJlZmV0Y2hJZ25vcmUiLCJwcmV2ZW50UnVubmluZyIsInByZXZlbnRDdXN0b20iLCJnIiwibG9nTGV2ZWwiLCJFIiwiX3JlcXVlc3RDdXN0b21FcnJvciIsIl93cmFwcGVyIiwic2V0QXR0cmlidXRlIiwiX3Jlc2V0RGF0YSIsImNhY2hlIiwiX29uTGlua0VudGVyIiwiYmluZCIsIl9vbkxpbmtDbGljayIsIl9vblN0YXRlQ2hhbmdlIiwiX2JpbmQiLCJvbmNlRGF0YSIsImRlc3Ryb3kiLCJfdW5iaW5kIiwiZm9yY2UiLCJhc3NpZ24iLCJnbyIsImlzUnVubmluZyIsImdldFBhdGgiLCJoYXNTZWxmIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJyZWFkeURhdGEiLCJoYXNPbmNlIiwib25SZXF1ZXN0RXJyb3IiLCJzaG91bGRXYWl0IiwicmVzcG9uc2UiLCJwcmVmZXRjaCIsIl90aGlzNSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGluayIsIl9nZXRMaW5rRWxlbWVudCIsIl90aGlzNiIsIl9kYXRhIiwiZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MiLCJiZWdpbiIsImxvb3BCZWdpbiIsImNoYW5nZUJlZ2luIiwiY2hhbmdlQ29tcGxldGUiLCJsb29wQ29tcGxldGUiLCJjb21wbGV0ZSIsImxvb3AiLCJhdXRvcGxheSIsInRpbWVsaW5lT2Zmc2V0IiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJkdXJhdGlvbiIsImRlbGF5IiwiZW5kRGVsYXkiLCJlYXNpbmciLCJyb3VuZCIsInZhbGlkVHJhbnNmb3JtcyIsIkNTUyIsInNwcmluZ3MiLCJtaW5NYXgiLCJ2YWwiLCJtaW4iLCJtYXgiLCJzdHJpbmdDb250YWlucyIsInRleHQiLCJhcHBseUFyZ3VtZW50cyIsImlzIiwiYXJyIiwiY2FsbCIsInB0aCIsImhhc093blByb3BlcnR5Iiwic3ZnIiwiU1ZHRWxlbWVudCIsImlucCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmbmMiLCJ1bmQiLCJuaWwiLCJoZXgiLCJyZ2IiLCJoc2wiLCJjb2wiLCJwYXJzZUVhc2luZ1BhcmFtZXRlcnMiLCJzdHJpbmciLCJwYXJzZUZsb2F0Iiwic3ByaW5nIiwibWFzcyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ2ZWxvY2l0eSIsIncwIiwic3FydCIsInpldGEiLCJ3ZCIsInNvbHZlciIsInByb2dyZXNzIiwiZXhwIiwiY29zIiwic2luIiwiZ2V0RHVyYXRpb24iLCJjYWNoZWQiLCJmcmFtZSIsImVsYXBzZWQiLCJyZXN0Iiwic3RlcHMiLCJjZWlsIiwiYmV6aWVyIiwia1NwbGluZVRhYmxlU2l6ZSIsImtTYW1wbGVTdGVwU2l6ZSIsIkEiLCJhQTEiLCJhQTIiLCJCIiwiY2FsY0JlemllciIsImFUIiwiZ2V0U2xvcGUiLCJiaW5hcnlTdWJkaXZpZGUiLCJhWCIsImFBIiwiYUIiLCJtWDEiLCJtWDIiLCJjdXJyZW50WCIsImN1cnJlbnRUIiwibmV3dG9uUmFwaHNvbkl0ZXJhdGUiLCJhR3Vlc3NUIiwiY3VycmVudFNsb3BlIiwibVkxIiwibVkyIiwic2FtcGxlVmFsdWVzIiwiRmxvYXQzMkFycmF5IiwiZ2V0VEZvclgiLCJpbnRlcnZhbFN0YXJ0IiwiY3VycmVudFNhbXBsZSIsImxhc3RTYW1wbGUiLCJkaXN0IiwiZ3Vlc3NGb3JUIiwiaW5pdGlhbFNsb3BlIiwicGVubmVyIiwiZWFzZXMiLCJsaW5lYXIiLCJmdW5jdGlvbkVhc2luZ3MiLCJTaW5lIiwiUEkiLCJDaXJjIiwiQmFjayIsIkJvdW5jZSIsInBvdzIiLCJFbGFzdGljIiwiYW1wbGl0dWRlIiwicGVyaW9kIiwiYXNpbiIsImJhc2VFYXNpbmdzIiwiZWFzZUluIiwicGFyc2VFYXNpbmdzIiwiZWFzZSIsInNlbGVjdFN0cmluZyIsIm5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbHRlckFycmF5IiwiY2FsbGJhY2siLCJsZW4iLCJ0aGlzQXJnIiwiZmxhdHRlbkFycmF5IiwidG9BcnJheSIsIk5vZGVMaXN0IiwiSFRNTENvbGxlY3Rpb24iLCJhcnJheUNvbnRhaW5zIiwiY2xvbmVPYmplY3QiLCJjbG9uZSIsInJlcGxhY2VPYmplY3RQcm9wcyIsIm8xIiwibzIiLCJtZXJnZU9iamVjdHMiLCJyZ2JUb1JnYmEiLCJyZ2JWYWx1ZSIsImhleFRvUmdiYSIsImhleFZhbHVlIiwicmd4IiwiaHNsVG9SZ2JhIiwiaHNsVmFsdWUiLCJoIiwibCIsImh1ZTJyZ2IiLCJxIiwiY29sb3JUb1JnYiIsImdldFVuaXQiLCJnZXRUcmFuc2Zvcm1Vbml0IiwicHJvcE5hbWUiLCJnZXRGdW5jdGlvblZhbHVlIiwiYW5pbWF0YWJsZSIsImlkIiwidG90YWwiLCJwcm9wIiwiY29udmVydFB4VG9Vbml0IiwidW5pdCIsInZhbHVlVW5pdCIsImJhc2VsaW5lIiwidGVtcEVsIiwicGFyZW50RWwiLCJzdHlsZSIsIndpZHRoIiwiZmFjdG9yIiwib2Zmc2V0V2lkdGgiLCJjb252ZXJ0ZWRVbml0IiwiZ2V0Q1NTVmFsdWUiLCJ1cHBlcmNhc2VQcm9wTmFtZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZ2V0QW5pbWF0aW9uVHlwZSIsImdldEVsZW1lbnRUcmFuc2Zvcm1zIiwidHJhbnNmb3JtIiwicmVnIiwidHJhbnNmb3JtcyIsImdldFRyYW5zZm9ybVZhbHVlIiwiZGVmYXVsdFZhbCIsImxpc3QiLCJnZXRPcmlnaW5hbFRhcmdldFZhbHVlIiwiZ2V0UmVsYXRpdmVWYWx1ZSIsIm9wZXJhdG9yIiwidmFsaWRhdGVWYWx1ZSIsIm9yaWdpbmFsVW5pdCIsInVuaXRMZXNzIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0Q2lyY2xlTGVuZ3RoIiwiZ2V0UmVjdExlbmd0aCIsImdldExpbmVMZW5ndGgiLCJnZXRQb2x5bGluZUxlbmd0aCIsInBvaW50cyIsInRvdGFsTGVuZ3RoIiwicHJldmlvdXNQb3MiLCJudW1iZXJPZkl0ZW1zIiwiY3VycmVudFBvcyIsImdldEl0ZW0iLCJnZXRQb2x5Z29uTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJzZXREYXNob2Zmc2V0IiwicGF0aExlbmd0aCIsImdldFBhcmVudFN2Z0VsIiwiZ2V0UGFyZW50U3ZnIiwicGF0aEVsIiwic3ZnRGF0YSIsInBhcmVudFN2Z0VsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdCb3hBdHRyIiwiaGVpZ2h0Iiwidmlld0JveCIsInciLCJ2VyIsInZIIiwicGVyY2VudCIsInByb3BlcnR5IiwiZ2V0UGF0aFByb2dyZXNzIiwiaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHIiwicG9pbnQiLCJnZXRQb2ludEF0TGVuZ3RoIiwicDAiLCJzY2FsZVgiLCJzY2FsZVkiLCJhdGFuMiIsImRlY29tcG9zZVZhbHVlIiwib3JpZ2luYWwiLCJudW1iZXJzIiwiTnVtYmVyIiwic3RyaW5ncyIsInBhcnNlVGFyZ2V0cyIsInRhcmdldHMiLCJ0YXJnZXRzQXJyYXkiLCJwb3MiLCJnZXRBbmltYXRhYmxlcyIsInBhcnNlZCIsIm5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zIiwidHdlZW5TZXR0aW5ncyIsInNldHRpbmdzIiwiaXNGcm9tVG8iLCJwcm9wQXJyYXkiLCJmbGF0dGVuS2V5ZnJhbWVzIiwia2V5ZnJhbWVzIiwicHJvcGVydHlOYW1lcyIsInByb3BlcnRpZXMiLCJuZXdLZXkiLCJnZXRQcm9wZXJ0aWVzIiwidHdlZW5zIiwibm9ybWFsaXplVHdlZW5WYWx1ZXMiLCJ0d2VlbiIsIm5vcm1hbGl6ZVR3ZWVucyIsInByZXZpb3VzVHdlZW4iLCJ0d2VlblZhbHVlIiwidG9Vbml0Iiwib3JpZ2luYWxWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJmcm9tVW5pdCIsImlzUGF0aCIsImlzQ29sb3IiLCJzZXRQcm9ncmVzc1ZhbHVlIiwiY3NzIiwiYXR0cmlidXRlIiwib2JqZWN0IiwibWFudWFsIiwibGFzdCIsInNldFRhcmdldHNWYWx1ZSIsImFuaW1hdGFibGVzIiwiYW5pbVR5cGUiLCJjcmVhdGVBbmltYXRpb24iLCJsYXN0VHdlZW4iLCJnZXRBbmltYXRpb25zIiwiZ2V0SW5zdGFuY2VUaW1pbmdzIiwiYW5pbWF0aW9ucyIsImFuaW1MZW5ndGgiLCJnZXRUbE9mZnNldCIsImFuaW0iLCJ0aW1pbmdzIiwiaW5zdGFuY2VJRCIsImNyZWF0ZU5ld0luc3RhbmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsImNoaWxkcmVuIiwiYWN0aXZlSW5zdGFuY2VzIiwiZW5naW5lIiwicmFmIiwicGxheSIsImlzRG9jdW1lbnRIaWRkZW4iLCJhbmltZSIsInN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4iLCJzdGVwIiwiYWN0aXZlSW5zdGFuY2VzTGVuZ3RoIiwiYWN0aXZlSW5zdGFuY2UiLCJwYXVzZWQiLCJ0aWNrIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaW5zdGFuY2UiLCJfb25Eb2N1bWVudFZpc2liaWxpdHkiLCJoaWRkZW4iLCJzdGFydFRpbWUiLCJsYXN0VGltZSIsIm5vdyIsImNoaWxkcmVuTGVuZ3RoIiwibWFrZVByb21pc2UiLCJfcmVzb2x2ZSIsImZpbmlzaGVkIiwidG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24iLCJyZXZlcnNlZCIsImNoaWxkIiwiYWRqdXN0VGltZSIsInRpbWUiLCJyZXNldFRpbWUiLCJjdXJyZW50VGltZSIsInNwZWVkIiwic2Vla0NoaWxkIiwic2VlayIsInN5bmNJbnN0YW5jZUNoaWxkcmVuIiwicmV2ZXJzZVBsYXliYWNrIiwiaSQxIiwic2V0QW5pbWF0aW9uc1Byb2dyZXNzIiwiaW5zVGltZSIsImFuaW1hdGlvbnNMZW5ndGgiLCJ0d2Vlbkxlbmd0aCIsImVhc2VkIiwiaXNOYU4iLCJ0b051bWJlcnNMZW5ndGgiLCJ0b051bWJlciIsImZyb21OdW1iZXIiLCJzdHJpbmdzTGVuZ3RoIiwibiQxIiwiY3VycmVudFZhbHVlIiwic2V0Q2FsbGJhY2siLCJjYiIsInBhc3NUaHJvdWdoIiwiY291bnRJdGVyYXRpb24iLCJyZW1haW5pbmciLCJzZXRJbnN0YW5jZVByb2dyZXNzIiwiZW5naW5lVGltZSIsImluc0R1cmF0aW9uIiwiaW5zRGVsYXkiLCJpbnNFbmREZWxheSIsImJlZ2FuIiwibG9vcEJlZ2FuIiwiY2hhbmdlQmVnYW4iLCJjaGFuZ2VDb21wbGV0ZWQiLCJjb21wbGV0ZWQiLCJyZXNldCIsInBhdXNlIiwicmVzdGFydCIsInJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UiLCJyZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnMiLCJjaGlsZEFuaW1hdGlvbnMiLCJyZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyIsInN0YWdnZXIiLCJncmlkIiwiYXhpcyIsImZyb21JbmRleCIsImZyb21GaXJzdCIsImZyb21DZW50ZXIiLCJmcm9tTGFzdCIsImlzUmFuZ2UiLCJ2YWwxIiwidmFsMiIsIm1heFZhbHVlIiwiZnJvbVgiLCJmcm9tWSIsImZsb29yIiwidG9YIiwidG9ZIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3BhY2luZyIsInRpbWVsaW5lIiwidGwiLCJpbnN0YW5jZVBhcmFtcyIsInRsSW5kZXgiLCJpbnMiLCJpbnNQYXJhbXMiLCJ0bER1cmF0aW9uIiwicnVubmluZyIsImNvbnZlcnRQeCIsInJhbmRvbSIsImJhcmJhIiwibG9ja3NjcmVlbiIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NOYW1lIiwiaGFuZGxlVG91Y2hNb3ZlIiwidW5sb2NrIiwiY2xhc3NMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==