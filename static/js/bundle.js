/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@barba/core/dist/barba.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/@barba/core/dist/barba.umd.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, n) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (anime);

/***/ }),

/***/ "./themes/ta-portfolio/src/js/bundle.js":
/*!**********************************************!*\
  !*** ./themes/ta-portfolio/src/js/bundle.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/transition */ "./themes/ta-portfolio/src/js/components/transition.js");

console.log('bundle');

/***/ }),

/***/ "./themes/ta-portfolio/src/js/components/transition.js":
/*!*************************************************************!*\
  !*** ./themes/ta-portfolio/src/js/components/transition.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");


_barba_core__WEBPACK_IMPORTED_MODULE_0___default.a.init({
  debug: true,
  transitions: [{
    leave: function leave(data) {
      return new Promise(function (resolve) {
        Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
          targets: data.current.container,
          opacity: 0,
          easing: 'linear',
          duration: 500,
          complete: function complete() {
            resolve();
          }
        });
      });
    },
    enter: function enter(data) {
      Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
        targets: data.next.container,
        easing: 'linear',
        duration: 500,
        opacity: [0, 1]
      });
    }
  }]
});

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./themes/ta-portfolio/src/js/bundle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Thomas/Sites/portfolio/wp-content/themes/ta-portfolio/themes/ta-portfolio/src/js/bundle.js */"./themes/ta-portfolio/src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWFzeW5jLXRvLXByb21pc2VzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tb2R1bGVzL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RlZnMvaG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3NjaGVtYXMvYXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMvaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy91cmwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy9yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXMtcHJvbWlzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL3J1bi1hc3luYy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2hvb2tzLnRzIiwid2VicGFjazovLy8uLi9zcmMvbW9kdWxlcy9JZ25vcmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tb2R1bGVzL0NhY2hlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbW9kdWxlcy9QcmV2ZW50LnRzIiwid2VicGFjazovLy8uLi9zcmMvbW9kdWxlcy9FcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL21vZHVsZXMvU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tb2R1bGVzL1RyYW5zaXRpb25zLnRzIiwid2VicGFjazovLy8uLi9zcmMvbW9kdWxlcy9WaWV3cy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BvbHlmaWxscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3NjaGVtYXMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1lanMvbGliL2FuaW1lLmVzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy90YS1wb3J0Zm9saW8vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvdGEtcG9ydGZvbGlvL3NyYy9qcy9jb21wb25lbnRzL3RyYW5zaXRpb24uanMiXSwibmFtZXMiOlsiX2NhdGNoIiwiYm9keSIsInJlY292ZXIiLCJyZXN1bHQiLCJlIiwidGhlbiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsIkxvZ0xldmVscyIsIkhvb2tNZXRob2RzIiwiX2xldmVsIiwib2ZmIiwiTG9nZ2VyIiwic291cmNlIiwidGhpcyIsIl9zb3VyY2UiLCJnZXRMZXZlbCIsInNldExldmVsIiwibmFtZSIsImVycm9yIiwib2JqZWN0cyIsIl9sb2ciLCJjb25zb2xlIiwid2FybiIsIndhcm5pbmciLCJpbmZvIiwiZGVidWciLCJsb2ciLCJmbiIsImxldmVsIiwiYXBwbHkiLCJjb25jYXQiLCJwYXRoVG9SZWdleHAiLCJyZWdleHBUb0Z1bmN0aW9uIiwicGFyc2UiLCJ0b2tlbnNUb0Z1bmN0aW9uIiwidG9rZW5zVG9SZWdFeHAiLCJERUZBVUxUX0RFTElNSVRFUiIsIlBBVEhfUkVHRVhQIiwiUmVnRXhwIiwiam9pbiIsInN0ciIsIm9wdGlvbnMiLCJyZXMiLCJ0b2tlbnMiLCJrZXkiLCJpbmRleCIsInBhdGgiLCJkZWZhdWx0RGVsaW1pdGVyIiwiZGVsaW1pdGVyIiwid2hpdGVsaXN0IiwidW5kZWZpbmVkIiwicGF0aEVzY2FwZWQiLCJleGVjIiwibSIsImVzY2FwZWQiLCJvZmZzZXQiLCJzbGljZSIsImxlbmd0aCIsInByZXYiLCJjYXB0dXJlIiwiZ3JvdXAiLCJtb2RpZmllciIsImsiLCJjIiwiaW5kZXhPZiIsInB1c2giLCJwYXR0ZXJuIiwicHJlZml4Iiwib3B0aW9uYWwiLCJyZXBlYXQiLCJlc2NhcGVHcm91cCIsImVzY2FwZVN0cmluZyIsInN1YnN0ciIsInJlIiwia2V5cyIsInBhdGhuYW1lIiwicGFyYW1zIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaSIsInNwbGl0IiwibWFwIiwidmFsdWUiLCJtYXRjaGVzIiwiQXJyYXkiLCJmbGFncyIsImRhdGEiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2YWxpZGF0ZSIsInRva2VuIiwic2VnbWVudCIsImlzQXJyYXkiLCJUeXBlRXJyb3IiLCJqIiwidGVzdCIsIlN0cmluZyIsInJlcGxhY2UiLCJzZW5zaXRpdmUiLCJzdHJpY3QiLCJzdGFydCIsImVuZCIsImVuZHNXaXRoIiwicm91dGUiLCJlbmRUb2tlbiIsImlzRW5kRGVsaW1pdGVkIiwiZ3JvdXBzIiwibWF0Y2giLCJyZWdleHBUb1JlZ2V4cCIsInBhcnRzIiwiYXJyYXlUb1JlZ2V4cCIsInN0cmluZ1RvUmVnZXhwIiwic2NoZW1hQXR0cmlidXRlIiwiY29udGFpbmVyIiwiaGlzdG9yeSIsIm5hbWVzcGFjZSIsInByZXZlbnQiLCJ3cmFwcGVyIiwiZG9tIiwiRE9NUGFyc2VyIiwidG9TdHJpbmciLCJlbCIsIm91dGVySFRNTCIsInRvRG9jdW1lbnQiLCJodG1sU3RyaW5nIiwiX3BhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInRvRWxlbWVudCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImdldEh0bWwiLCJkb2MiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRXcmFwcGVyIiwic2NvcGUiLCJxdWVyeVNlbGVjdG9yIiwiX2F0dHIiLCJnZXRDb250YWluZXIiLCJyZW1vdmVDb250YWluZXIiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImFkZENvbnRhaW5lciIsImV4aXN0aW5nQ29udGFpbmVyIiwiX2luc2VydEFmdGVyIiwiYXBwZW5kQ2hpbGQiLCJnZXROYW1lc3BhY2UiLCJucyIsImdldEF0dHJpYnV0ZSIsImdldEhyZWYiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJocmVmIiwicmVzb2x2ZVVybCIsImJhc2VWYWwiLCJ1cmxzIiwibnVtVXJscyIsIkVycm9yIiwiYmFzZSIsImFyZ3VtZW50cyIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJyZXNvbHZlZCIsImEiLCJuZXdOb2RlIiwicmVmZXJlbmNlTm9kZSIsIm5leHRTaWJsaW5nIiwiaW5pdCIsInVybCIsIl9zZXNzaW9uIiwic3RhdGUiLCJzY3JvbGwiLCJ4Iiwid2luZG93Iiwic2Nyb2xsWCIsInkiLCJzY3JvbGxZIiwiX3N0YXRlcyIsIl9wb2ludGVyIiwiaXRlbSIsImZyb20iLCJzdGF0ZXMiLCJyZXBsYWNlU3RhdGUiLCJjaGFuZ2UiLCJ0cmlnZ2VyIiwiX2dldERpcmVjdGlvbiIsImFkZCIsInNpemUiLCJhY3Rpb24iLCJfZ2V0QWN0aW9uIiwicHVzaFN0YXRlIiwidXBkYXRlIiwiZ2V0Iiwic2V0IiwicmVtb3ZlIiwic3BsaWNlIiwicG9wIiwiY2xlYXIiLCJuZXdTdGF0ZXMiLCJhdHRyIiwiaGFzQXR0cmlidXRlIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJwYWdlIiwibmV4dCIsImh0bWwiLCJuZXh0RG9jdW1lbnQiLCJ0aXRsZSIsInB0ciIsIlByb21pc2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXNvbHZlIiwiZ2V0T3JpZ2luIiwibG9jYXRpb24iLCJvcmlnaW4iLCJnZXRQb3J0IiwicG9ydCIsInBvcnRTdHJpbmciLCJzdWJzdHJpbmciLCJwYXJzZUludCIsImhhc2giLCJxdWVyeSIsImhhc2hJbmRleCIsInF1ZXJ5SW5kZXgiLCJwYXJzZVF1ZXJ5IiwicmVkdWNlIiwiYWNjIiwiY2xlYW4iLCJyZXF1ZXN0IiwidHRsIiwicmVxdWVzdEVycm9yIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJvbnRpbWVvdXQiLCJlcnIiLCJvbmVycm9yIiwib3BlbiIsInRpbWVvdXQiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsIm9iaiIsInJ1bkFzeW5jIiwiZnVuYyIsImN0eCIsImFyZ3MiLCJhc3luYyIsInByb21pc2UiLCJhbnN3ZXIiLCJpc1Byb21pc2UiLCJob29rcyIsIl90aGlzIiwiTWFwIiwicmVnaXN0ZXJlZCIsImFsbCIsImZvckVhY2giLCJfdGhpczIiLCJob29rIiwiaGFzIiwiU2V0IiwiY2hhaW4iLCJfdGhpczMiLCJsb2dnZXIiLCJfdGhpczQiLCJoZWxwIiwiSWdub3JlIiwiaWdub3JlIiwiX2lnbm9yZUFsbCIsInBhdGhzIiwiX2lnbm9yZVJlZ2V4ZXMiLCJwIiwiY2hlY2tIcmVmIiwic29tZSIsInJlZ2V4IiwiQ2FjaGUiLCJfc3RhdGUiLCJnZXRSZXF1ZXN0IiwiZ2V0QWN0aW9uIiwiZXhpc3RzIiwibmV3VGFiIiwiZXZlbnQiLCJ3aGljaCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJibGFuayIsInRhcmdldCIsImNvcnNEb21haW4iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwiY29yc1BvcnQiLCJkb3dubG9hZCIsInByZXZlbnRTZWxmIiwicHJldmVudEFsbCIsIkJvb2xlYW4iLCJjbG9zZXN0Iiwic2FtZVVybCIsIlByZXZlbnQiLCJjaGVjayIsInN1aXRlIiwidGVzdHMiLCJydW4iLCJjaGVja0xpbmsiLCJCYXJiYUVycm9yIiwibGFiZWwiLCJjYXB0dXJlU3RhY2tUcmFjZSIsIlN0b3JlIiwidHJhbnNpdGlvbnMiLCJ0eXBlIiwiX3J1bGVzIiwicG9zaXRpb24iLCJmaWx0ZXJzIiwib25jZSIsImZpbHRlciIsInNlbGYiLCJ0IiwibWF0Y2hpbmciLCJhY3RpdmUiLCJmaW5kIiwidmFsaWQiLCJyZXZlcnNlIiwiX2NoZWNrIiwicnVsZSIsInRvIiwiYWN0aXZlTWF0Y2giLCJ0cmFuc2l0aW9uVHlwZSIsImluZm9zIiwiT2JqZWN0IiwiX2FkZFByaW9yaXR5Iiwic29ydCIsImIiLCJwcmlvcml0eSIsImxlYXZlIiwiZW50ZXIiLCJ0cmFuc2l0aW9uIiwiZGlyZWN0aW9uIiwiaXNWYWxpZCIsImhhc01hdGNoIiwic3RyUnVsZSIsIm9ialJ1bGUiLCJmbk5hbWUiLCJjdXJyZW50IiwibmFtZXMiLCJfY2FsY3VsYXRlUHJpb3JpdHkiLCJydWxlTmFtZSIsInJ1bGVJbmRleCIsInBvdyIsIlRyYW5zaXRpb25zIiwic3RvcmUiLCJkb09uY2UiLCJfcnVubmluZyIsIl9kb0FzeW5jSG9vayIsImRvUGFnZSIsInN5bmMiLCJfaXNUcmFuc2l0aW9uRXJyb3IiLCJsZWF2ZVJlc3VsdCIsImhlbHBlcnMiLCJ2YWx1ZXMiLCJtZXNzYWdlIiwiVmlld3MiLCJ2aWV3cyIsImJ5TmFtZXNwYWNlIiwidmlldyIsIl9jcmVhdGVIb29rIiwiRWxlbWVudCIsInByb3RvdHlwZSIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwicyIsInBhcmVudEVsZW1lbnQiLCJub2RlVHlwZSIsInNjaGVtYVBhZ2UiLCJ2ZXJzaW9uIiwidXNlIiwicGx1Z2luIiwiaW5zdGFsbGVkUGx1Z2lucyIsInBsdWdpbnMiLCJpbnN0YWxsIiwic2NoZW1hIiwiY2FjaGVJZ25vcmUiLCJwcmVmZXRjaElnbm9yZSIsInByZXZlbnRSdW5uaW5nIiwicHJldmVudEN1c3RvbSIsImxvZ0xldmVsIiwiX3JlcXVlc3RDdXN0b21FcnJvciIsIl93cmFwcGVyIiwic2V0QXR0cmlidXRlIiwiX3Jlc2V0RGF0YSIsImNhY2hlIiwiX29uTGlua0VudGVyIiwiYmluZCIsIl9vbkxpbmtDbGljayIsIl9vblN0YXRlQ2hhbmdlIiwiX2JpbmQiLCJvbmNlRGF0YSIsImRlc3Ryb3kiLCJfdW5iaW5kIiwiZm9yY2UiLCJhc3NpZ24iLCJnbyIsImlzUnVubmluZyIsImdldFBhdGgiLCJoYXNTZWxmIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJyZWFkeURhdGEiLCJoYXNPbmNlIiwib25SZXF1ZXN0RXJyb3IiLCJzaG91bGRXYWl0IiwicmVzcG9uc2UiLCJwcmVmZXRjaCIsIl90aGlzNSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGluayIsIl9nZXRMaW5rRWxlbWVudCIsIl90aGlzNiIsIl9kYXRhIiwiZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MiLCJiZWdpbiIsImxvb3BCZWdpbiIsImNoYW5nZUJlZ2luIiwiY2hhbmdlQ29tcGxldGUiLCJsb29wQ29tcGxldGUiLCJjb21wbGV0ZSIsImxvb3AiLCJhdXRvcGxheSIsInRpbWVsaW5lT2Zmc2V0IiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJkdXJhdGlvbiIsImRlbGF5IiwiZW5kRGVsYXkiLCJlYXNpbmciLCJyb3VuZCIsInZhbGlkVHJhbnNmb3JtcyIsIkNTUyIsInNwcmluZ3MiLCJtaW5NYXgiLCJ2YWwiLCJtaW4iLCJtYXgiLCJzdHJpbmdDb250YWlucyIsInRleHQiLCJhcHBseUFyZ3VtZW50cyIsImlzIiwiYXJyIiwiY2FsbCIsInB0aCIsImhhc093blByb3BlcnR5Iiwic3ZnIiwiU1ZHRWxlbWVudCIsImlucCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmbmMiLCJ1bmQiLCJuaWwiLCJoZXgiLCJyZ2IiLCJoc2wiLCJjb2wiLCJwYXJzZUVhc2luZ1BhcmFtZXRlcnMiLCJzdHJpbmciLCJwYXJzZUZsb2F0Iiwic3ByaW5nIiwibWFzcyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ2ZWxvY2l0eSIsIncwIiwic3FydCIsInpldGEiLCJ3ZCIsInNvbHZlciIsInByb2dyZXNzIiwiZXhwIiwiY29zIiwic2luIiwiZ2V0RHVyYXRpb24iLCJjYWNoZWQiLCJmcmFtZSIsImVsYXBzZWQiLCJyZXN0Iiwic3RlcHMiLCJjZWlsIiwiYmV6aWVyIiwia1NwbGluZVRhYmxlU2l6ZSIsImtTYW1wbGVTdGVwU2l6ZSIsIkEiLCJhQTEiLCJhQTIiLCJCIiwiQyIsImNhbGNCZXppZXIiLCJhVCIsImdldFNsb3BlIiwiYmluYXJ5U3ViZGl2aWRlIiwiYVgiLCJhQSIsImFCIiwibVgxIiwibVgyIiwiY3VycmVudFgiLCJjdXJyZW50VCIsIm5ld3RvblJhcGhzb25JdGVyYXRlIiwiYUd1ZXNzVCIsImN1cnJlbnRTbG9wZSIsIm1ZMSIsIm1ZMiIsInNhbXBsZVZhbHVlcyIsIkZsb2F0MzJBcnJheSIsImdldFRGb3JYIiwiaW50ZXJ2YWxTdGFydCIsImN1cnJlbnRTYW1wbGUiLCJsYXN0U2FtcGxlIiwiZGlzdCIsImd1ZXNzRm9yVCIsImluaXRpYWxTbG9wZSIsInBlbm5lciIsImVhc2VzIiwibGluZWFyIiwiZnVuY3Rpb25FYXNpbmdzIiwiU2luZSIsIlBJIiwiQ2lyYyIsIkJhY2siLCJCb3VuY2UiLCJwb3cyIiwiRWxhc3RpYyIsImFtcGxpdHVkZSIsInBlcmlvZCIsImFzaW4iLCJiYXNlRWFzaW5ncyIsImVhc2VJbiIsInBhcnNlRWFzaW5ncyIsImVhc2UiLCJzZWxlY3RTdHJpbmciLCJub2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaWx0ZXJBcnJheSIsImNhbGxiYWNrIiwibGVuIiwidGhpc0FyZyIsImZsYXR0ZW5BcnJheSIsInRvQXJyYXkiLCJvIiwiTm9kZUxpc3QiLCJIVE1MQ29sbGVjdGlvbiIsImFycmF5Q29udGFpbnMiLCJjbG9uZU9iamVjdCIsImNsb25lIiwicmVwbGFjZU9iamVjdFByb3BzIiwibzEiLCJvMiIsIm1lcmdlT2JqZWN0cyIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiaGV4VG9SZ2JhIiwiaGV4VmFsdWUiLCJyZ3giLCJyIiwiZyIsImhzbFRvUmdiYSIsImhzbFZhbHVlIiwiaCIsImwiLCJodWUycmdiIiwicSIsImNvbG9yVG9SZ2IiLCJnZXRVbml0IiwiZ2V0VHJhbnNmb3JtVW5pdCIsInByb3BOYW1lIiwiZ2V0RnVuY3Rpb25WYWx1ZSIsImFuaW1hdGFibGUiLCJpZCIsInRvdGFsIiwicHJvcCIsImNvbnZlcnRQeFRvVW5pdCIsInVuaXQiLCJ2YWx1ZVVuaXQiLCJiYXNlbGluZSIsInRlbXBFbCIsInBhcmVudEVsIiwic3R5bGUiLCJ3aWR0aCIsImZhY3RvciIsIm9mZnNldFdpZHRoIiwiY29udmVydGVkVW5pdCIsImdldENTU1ZhbHVlIiwidXBwZXJjYXNlUHJvcE5hbWUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImdldEFuaW1hdGlvblR5cGUiLCJnZXRFbGVtZW50VHJhbnNmb3JtcyIsInRyYW5zZm9ybSIsInJlZyIsInRyYW5zZm9ybXMiLCJnZXRUcmFuc2Zvcm1WYWx1ZSIsImRlZmF1bHRWYWwiLCJsaXN0IiwiZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSIsImdldFJlbGF0aXZlVmFsdWUiLCJvcGVyYXRvciIsInUiLCJ2YWxpZGF0ZVZhbHVlIiwib3JpZ2luYWxVbml0IiwidW5pdExlc3MiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJnZXRDaXJjbGVMZW5ndGgiLCJnZXRSZWN0TGVuZ3RoIiwiZ2V0TGluZUxlbmd0aCIsImdldFBvbHlsaW5lTGVuZ3RoIiwicG9pbnRzIiwidG90YWxMZW5ndGgiLCJwcmV2aW91c1BvcyIsIm51bWJlck9mSXRlbXMiLCJjdXJyZW50UG9zIiwiZ2V0SXRlbSIsImdldFBvbHlnb25MZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsInNldERhc2hvZmZzZXQiLCJwYXRoTGVuZ3RoIiwiZ2V0UGFyZW50U3ZnRWwiLCJnZXRQYXJlbnRTdmciLCJwYXRoRWwiLCJzdmdEYXRhIiwicGFyZW50U3ZnRWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwidmlld0JveEF0dHIiLCJoZWlnaHQiLCJ2aWV3Qm94IiwidyIsInZXIiwidkgiLCJwZXJjZW50IiwicHJvcGVydHkiLCJnZXRQYXRoUHJvZ3Jlc3MiLCJpc1BhdGhUYXJnZXRJbnNpZGVTVkciLCJwb2ludCIsImdldFBvaW50QXRMZW5ndGgiLCJwMCIsInNjYWxlWCIsInNjYWxlWSIsImF0YW4yIiwiZGVjb21wb3NlVmFsdWUiLCJvcmlnaW5hbCIsIm51bWJlcnMiLCJOdW1iZXIiLCJzdHJpbmdzIiwicGFyc2VUYXJnZXRzIiwidGFyZ2V0cyIsInRhcmdldHNBcnJheSIsInBvcyIsImdldEFuaW1hdGFibGVzIiwicGFyc2VkIiwibm9ybWFsaXplUHJvcGVydHlUd2VlbnMiLCJ0d2VlblNldHRpbmdzIiwic2V0dGluZ3MiLCJpc0Zyb21UbyIsInByb3BBcnJheSIsInYiLCJmbGF0dGVuS2V5ZnJhbWVzIiwia2V5ZnJhbWVzIiwicHJvcGVydHlOYW1lcyIsInByb3BlcnRpZXMiLCJuZXdLZXkiLCJnZXRQcm9wZXJ0aWVzIiwidHdlZW5zIiwibm9ybWFsaXplVHdlZW5WYWx1ZXMiLCJ0d2VlbiIsIm5vcm1hbGl6ZVR3ZWVucyIsInByZXZpb3VzVHdlZW4iLCJ0d2VlblZhbHVlIiwidG9Vbml0Iiwib3JpZ2luYWxWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJmcm9tVW5pdCIsImlzUGF0aCIsImlzQ29sb3IiLCJzZXRQcm9ncmVzc1ZhbHVlIiwiY3NzIiwiYXR0cmlidXRlIiwib2JqZWN0IiwibWFudWFsIiwibGFzdCIsInNldFRhcmdldHNWYWx1ZSIsImFuaW1hdGFibGVzIiwiYW5pbVR5cGUiLCJjcmVhdGVBbmltYXRpb24iLCJsYXN0VHdlZW4iLCJnZXRBbmltYXRpb25zIiwiZ2V0SW5zdGFuY2VUaW1pbmdzIiwiYW5pbWF0aW9ucyIsImFuaW1MZW5ndGgiLCJnZXRUbE9mZnNldCIsImFuaW0iLCJ0aW1pbmdzIiwiaW5zdGFuY2VJRCIsImNyZWF0ZU5ld0luc3RhbmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsImNoaWxkcmVuIiwiYWN0aXZlSW5zdGFuY2VzIiwiZW5naW5lIiwicmFmIiwicGxheSIsImlzRG9jdW1lbnRIaWRkZW4iLCJhbmltZSIsInN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4iLCJzdGVwIiwiYWN0aXZlSW5zdGFuY2VzTGVuZ3RoIiwiYWN0aXZlSW5zdGFuY2UiLCJwYXVzZWQiLCJ0aWNrIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaW5zdGFuY2UiLCJfb25Eb2N1bWVudFZpc2liaWxpdHkiLCJoaWRkZW4iLCJzdGFydFRpbWUiLCJsYXN0VGltZSIsIm5vdyIsImNoaWxkcmVuTGVuZ3RoIiwibWFrZVByb21pc2UiLCJfcmVzb2x2ZSIsImZpbmlzaGVkIiwidG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24iLCJyZXZlcnNlZCIsImNoaWxkIiwiYWRqdXN0VGltZSIsInRpbWUiLCJyZXNldFRpbWUiLCJjdXJyZW50VGltZSIsInNwZWVkIiwic2Vla0NoaWxkIiwic2VlayIsInN5bmNJbnN0YW5jZUNoaWxkcmVuIiwicmV2ZXJzZVBsYXliYWNrIiwiaSQxIiwic2V0QW5pbWF0aW9uc1Byb2dyZXNzIiwiaW5zVGltZSIsImFuaW1hdGlvbnNMZW5ndGgiLCJ0d2Vlbkxlbmd0aCIsImVhc2VkIiwiaXNOYU4iLCJ0b051bWJlcnNMZW5ndGgiLCJuIiwidG9OdW1iZXIiLCJmcm9tTnVtYmVyIiwic3RyaW5nc0xlbmd0aCIsIm4kMSIsImN1cnJlbnRWYWx1ZSIsInNldENhbGxiYWNrIiwiY2IiLCJwYXNzVGhyb3VnaCIsImNvdW50SXRlcmF0aW9uIiwicmVtYWluaW5nIiwic2V0SW5zdGFuY2VQcm9ncmVzcyIsImVuZ2luZVRpbWUiLCJpbnNEdXJhdGlvbiIsImluc0RlbGF5IiwiaW5zRW5kRGVsYXkiLCJiZWdhbiIsImxvb3BCZWdhbiIsImNoYW5nZUJlZ2FuIiwiY2hhbmdlQ29tcGxldGVkIiwiY29tcGxldGVkIiwicmVzZXQiLCJwYXVzZSIsInJlc3RhcnQiLCJyZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlIiwicmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zIiwiY2hpbGRBbmltYXRpb25zIiwicmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXMiLCJzdGFnZ2VyIiwiZ3JpZCIsImF4aXMiLCJmcm9tSW5kZXgiLCJmcm9tRmlyc3QiLCJmcm9tQ2VudGVyIiwiZnJvbUxhc3QiLCJpc1JhbmdlIiwidmFsMSIsInZhbDIiLCJtYXhWYWx1ZSIsImZyb21YIiwiZnJvbVkiLCJmbG9vciIsInRvWCIsInRvWSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsInNwYWNpbmciLCJ0aW1lbGluZSIsInRsIiwiaW5zdGFuY2VQYXJhbXMiLCJ0bEluZGV4IiwiaW5zIiwiaW5zUGFyYW1zIiwidGxEdXJhdGlvbiIsInJ1bm5pbmciLCJjb252ZXJ0UHgiLCJyYW5kb20iLCJiYXJiYSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFFLENBQUM7QUFDVnlCLFNBQUssRUFBRSxlQUFDbFEsSUFBRCxFQUFVO0FBQ2IsYUFBTyxJQUFJZ0ksT0FBSixDQUFZLFVBQUFFLE9BQU8sRUFBSTtBQUMxQndmLCtFQUFLLENBQUM7QUFDRnhELGlCQUFPLEVBQUVsa0IsSUFBSSxDQUFDMlEsT0FBTCxDQUFhaFAsU0FEcEI7QUFFRmdzQixpQkFBTyxFQUFFLENBRlA7QUFHRnJYLGdCQUFNLEVBQUUsUUFITjtBQUlGSCxrQkFBUSxFQUFFLEdBSlI7QUFLRkwsa0JBQVEsRUFBRSxvQkFBTTtBQUNaNU4sbUJBQU87QUFDVjtBQVBDLFNBQUQsQ0FBTDtBQVNILE9BVk0sQ0FBUDtBQVdILEtBYlM7QUFjVmlJLFNBQUssRUFBRSxlQUFDblEsSUFBRCxFQUFVO0FBQ2IwbkIsNkVBQUssQ0FBQztBQUNGeEQsZUFBTyxFQUFFbGtCLElBQUksQ0FBQzJILElBQUwsQ0FBVWhHLFNBRGpCO0FBRUYyVSxjQUFNLEVBQUUsUUFGTjtBQUdGSCxnQkFBUSxFQUFFLEdBSFI7QUFJRndYLGVBQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBSlAsT0FBRCxDQUFMO0FBTUg7QUFyQlMsR0FBRDtBQUZOLENBQVgsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBBIHR5cGUgb2YgcHJvbWlzZS1saWtlIHRoYXQgcmVzb2x2ZXMgc3luY2hyb25vdXNseSBhbmQgc3VwcG9ydHMgb25seSBvbmUgb2JzZXJ2ZXJcbmV4cG9ydCBjb25zdCBfUGFjdCA9IC8qI19fUFVSRV9fKi8oZnVuY3Rpb24oKSB7XG5cdGZ1bmN0aW9uIF9QYWN0KCkge31cblx0X1BhY3QucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBfUGFjdCgpO1xuXHRcdGNvbnN0IHN0YXRlID0gdGhpcy5zO1xuXHRcdGlmIChzdGF0ZSkge1xuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSBzdGF0ZSAmIDEgPyBvbkZ1bGZpbGxlZCA6IG9uUmVqZWN0ZWQ7XG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMSwgY2FsbGJhY2sodGhpcy52KSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLm8gPSBmdW5jdGlvbihfdGhpcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBfdGhpcy52O1xuXHRcdFx0XHRpZiAoX3RoaXMucyAmIDEpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMSwgb25GdWxmaWxsZWQgPyBvbkZ1bGZpbGxlZCh2YWx1ZSkgOiB2YWx1ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAob25SZWplY3RlZCkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBvblJlamVjdGVkKHZhbHVlKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDIsIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdHJldHVybiBfUGFjdDtcbn0pKCk7XG5cbi8vIFNldHRsZXMgYSBwYWN0IHN5bmNocm9ub3VzbHlcbmV4cG9ydCBmdW5jdGlvbiBfc2V0dGxlKHBhY3QsIHN0YXRlLCB2YWx1ZSkge1xuXHRpZiAoIXBhY3Qucykge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIF9QYWN0KSB7XG5cdFx0XHRpZiAodmFsdWUucykge1xuXHRcdFx0XHRpZiAoc3RhdGUgJiAxKSB7XG5cdFx0XHRcdFx0c3RhdGUgPSB2YWx1ZS5zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUudjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlLm8gPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgc3RhdGUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0XHR2YWx1ZS50aGVuKF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCBzdGF0ZSksIF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBhY3QucyA9IHN0YXRlO1xuXHRcdHBhY3QudiA9IHZhbHVlO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gcGFjdC5vO1xuXHRcdGlmIChvYnNlcnZlcikge1xuXHRcdFx0b2JzZXJ2ZXIocGFjdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNTZXR0bGVkUGFjdCh0aGVuYWJsZSkge1xuXHRyZXR1cm4gdGhlbmFibGUgaW5zdGFuY2VvZiBfUGFjdCAmJiB0aGVuYWJsZS5zICYgMTtcbn1cblxuLy8gQ29udmVydHMgYXJndW1lbnQgdG8gYSBmdW5jdGlvbiB0aGF0IGFsd2F5cyByZXR1cm5zIGEgUHJvbWlzZVxuZXhwb3J0IGZ1bmN0aW9uIF9hc3luYyhmKSB7XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRmb3IgKHZhciBhcmdzID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmFwcGx5KHRoaXMsIGFyZ3MpKTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gQXdhaXRzIG9uIGEgdmFsdWUgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBhIFByb21pc2UgKGVxdWl2YWxlbnQgdG8gdGhlIGF3YWl0IGtleXdvcmQgaW4gRVMyMDE1LCB3aXRoIGNvbnRpbnVhdGlvbnMgcGFzc2VkIGV4cGxpY2l0bHkpXG5leHBvcnQgZnVuY3Rpb24gX2F3YWl0KHZhbHVlLCB0aGVuLCBkaXJlY3QpIHtcblx0aWYgKGRpcmVjdCkge1xuXHRcdHJldHVybiB0aGVuID8gdGhlbih2YWx1ZSkgOiB2YWx1ZTtcblx0fVxuXHRpZiAoIXZhbHVlIHx8ICF2YWx1ZS50aGVuKSB7XG5cdFx0dmFsdWUgPSBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuXHR9XG5cdHJldHVybiB0aGVuID8gdmFsdWUudGhlbih0aGVuKSA6IHZhbHVlO1xufVxuXG4vLyBBd2FpdHMgb24gYSB2YWx1ZSB0aGF0IG1heSBvciBtYXkgbm90IGJlIGEgUHJvbWlzZSwgdGhlbiBpZ25vcmVzIGl0XG5leHBvcnQgZnVuY3Rpb24gX2F3YWl0SWdub3JlZCh2YWx1ZSwgZGlyZWN0KSB7XG5cdGlmICghZGlyZWN0KSB7XG5cdFx0cmV0dXJuIHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF9lbXB0eSkgOiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxufVxuXG4vLyBQcm9jZWVkcyBhZnRlciBhIHZhbHVlIGhhcyByZXNvbHZlZCwgb3IgcHJvY2VlZHMgaW1tZWRpYXRlbHkgaWYgdGhlIHZhbHVlIGlzIG5vdCB0aGVuYWJsZVxuZXhwb3J0IGZ1bmN0aW9uIF9jb250aW51ZSh2YWx1ZSwgdGhlbikge1xuXHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4odGhlbikgOiB0aGVuKHZhbHVlKTtcbn1cblxuLy8gUHJvY2VlZHMgYWZ0ZXIgYSB2YWx1ZSBoYXMgcmVzb2x2ZWQsIG9yIHByb2NlZWRzIGltbWVkaWF0ZWx5IGlmIHRoZSB2YWx1ZSBpcyBub3QgdGhlbmFibGVcbmV4cG9ydCBmdW5jdGlvbiBfY29udGludWVJZ25vcmVkKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0cmV0dXJuIHZhbHVlLnRoZW4oX2VtcHR5KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0IHRoYXQgaGFzIGEgbGVuZ3RoIHByb3BlcnR5LCBwYXNzaW5nIHRoZSBpbmRleCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIChldmVuIGFzIHRoZSBsZW5ndGggcHJvcGVydHkgY2hhbmdlcylcbmV4cG9ydCBmdW5jdGlvbiBfZm9yVG8oYXJyYXksIGJvZHksIGNoZWNrKSB7XG5cdHZhciBpID0gLTEsIHBhY3QsIHJlamVjdDtcblx0ZnVuY3Rpb24gX2N5Y2xlKHJlc3VsdCkge1xuXHRcdHRyeSB7XG5cdFx0XHR3aGlsZSAoKytpIDwgYXJyYXkubGVuZ3RoICYmICghY2hlY2sgfHwgIWNoZWNrKCkpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGJvZHkoaSk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9jeWNsZSwgcmVqZWN0IHx8IChyZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCA9IG5ldyBfUGFjdCgpLCAyKSkpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHBhY3QpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFjdCA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QgfHwgKHBhY3QgPSBuZXcgX1BhY3QoKSksIDIsIGUpO1xuXHRcdH1cblx0fVxuXHRfY3ljbGUoKTtcblx0cmV0dXJuIHBhY3Q7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyBwcm9wZXJ0aWVzIChpbmNsdWRpbmcgcHJvcGVydGllcyBpbmhlcml0ZWQgZnJvbSB0aGUgcHJvdG90eXBlKVxuLy8gVXNlcyBhIHNuYXBzaG90IG9mIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzXG5leHBvcnQgZnVuY3Rpb24gX2ZvckluKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0dmFyIGtleXMgPSBbXTtcblx0Zm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuXHRcdGtleXMucHVzaChrZXkpO1xuXHR9XG5cdHJldHVybiBfZm9yVG8oa2V5cywgZnVuY3Rpb24oaSkgeyByZXR1cm4gYm9keShrZXlzW2ldKTsgfSwgY2hlY2spO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMgKGV4Y2x1ZGluZyBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBwcm90b3R5cGUpXG4vLyBVc2VzIGEgc25hcHNob3Qgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbmV4cG9ydCBmdW5jdGlvbiBfZm9yT3duKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0dmFyIGtleXMgPSBbXTtcblx0Zm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBrZXkpKSB7XG5cdFx0XHRrZXlzLnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIF9mb3JUbyhrZXlzLCBmdW5jdGlvbihpKSB7IHJldHVybiBib2R5KGtleXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbmV4cG9ydCBjb25zdCBfaXRlcmF0b3JTeW1ib2wgPSAvKiNfX1BVUkVfXyovIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyAoU3ltYm9sLml0ZXJhdG9yIHx8IChTeW1ib2wuaXRlcmF0b3IgPSBTeW1ib2woXCJTeW1ib2wuaXRlcmF0b3JcIikpKSA6IFwiQEBpdGVyYXRvclwiO1xuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0J3MgdmFsdWVzXG4vLyBVc2VzIGZvci4uLm9mIGlmIHRoZSBydW50aW1lIHN1cHBvcnRzIGl0LCBvdGhlcndpc2UgaXRlcmF0ZXMgdW50aWwgbGVuZ3RoIG9uIGEgY29weVxuZXhwb3J0IGZ1bmN0aW9uIF9mb3JPZih0YXJnZXQsIGJvZHksIGNoZWNrKSB7XG5cdGlmICh0eXBlb2YgdGFyZ2V0W19pdGVyYXRvclN5bWJvbF0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHZhciBpdGVyYXRvciA9IHRhcmdldFtfaXRlcmF0b3JTeW1ib2xdKCksIHN0ZXAsIHBhY3QsIHJlamVjdDtcblx0XHRmdW5jdGlvbiBfY3ljbGUocmVzdWx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lICYmICghY2hlY2sgfHwgIWNoZWNrKCkpKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gYm9keShzdGVwLnZhbHVlKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9jeWNsZSwgcmVqZWN0IHx8IChyZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCA9IG5ldyBfUGFjdCgpLCAyKSkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwYWN0KSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhY3QgPSByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0IHx8IChwYWN0ID0gbmV3IF9QYWN0KCkpLCAyLCBlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0X2N5Y2xlKCk7XG5cdFx0aWYgKGl0ZXJhdG9yLnJldHVybikge1xuXHRcdFx0dmFyIF9maXh1cCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKCFzdGVwLmRvbmUpIHtcblx0XHRcdFx0XHRcdGl0ZXJhdG9yLnJldHVybigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhY3QgJiYgcGFjdC50aGVuKSB7XG5cdFx0XHRcdHJldHVybiBwYWN0LnRoZW4oX2ZpeHVwLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0dGhyb3cgX2ZpeHVwKGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdF9maXh1cCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFjdDtcblx0fVxuXHQvLyBObyBzdXBwb3J0IGZvciBTeW1ib2wuaXRlcmF0b3Jcblx0aWYgKCEoXCJsZW5ndGhcIiBpbiB0YXJnZXQpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgaXRlcmFibGVcIik7XG5cdH1cblx0Ly8gSGFuZGxlIGxpdmUgY29sbGVjdGlvbnMgcHJvcGVybHlcblx0dmFyIHZhbHVlcyA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldC5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHVlcy5wdXNoKHRhcmdldFtpXSk7XG5cdH1cblx0cmV0dXJuIF9mb3JUbyh2YWx1ZXMsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGJvZHkodmFsdWVzW2ldKTsgfSwgY2hlY2spO1xufVxuXG5leHBvcnQgY29uc3QgX2FzeW5jSXRlcmF0b3JTeW1ib2wgPSAvKiNfX1BVUkVfXyovIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyAoU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgKFN5bWJvbC5hc3luY0l0ZXJhdG9yID0gU3ltYm9sKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3JcIikpKSA6IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgb24gYSB2YWx1ZSB1c2luZyBpdCdzIGFzeW5jIGl0ZXJhdG9yIGlmIHByZXNlbnQsIG9yIGl0cyBzeW5jaHJvbm91cyBpdGVyYXRvciBpZiBtaXNzaW5nXG5leHBvcnQgZnVuY3Rpb24gX2ZvckF3YWl0T2YodGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHRpZiAodHlwZW9mIHRhcmdldFtfYXN5bmNJdGVyYXRvclN5bWJvbF0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHZhciBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGFyZ2V0W19hc3luY0l0ZXJhdG9yU3ltYm9sXSgpO1xuXHRcdGl0ZXJhdG9yLm5leHQoKS50aGVuKF9yZXN1bWVBZnRlck5leHQpLnRoZW4odm9pZCAwLCBfcmVqZWN0KTtcblx0XHRyZXR1cm4gcGFjdDtcblx0XHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCkge1xuXHRcdFx0aWYgKGNoZWNrICYmIGNoZWNrKCkpIHtcblx0XHRcdFx0cmV0dXJuIF9zZXR0bGUocGFjdCwgMSwgaXRlcmF0b3IucmV0dXJuID8gaXRlcmF0b3IucmV0dXJuKCkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIHJlc3VsdDsgfSkgOiByZXN1bHQpO1xuXHRcdFx0fVxuXHRcdFx0aXRlcmF0b3IubmV4dCgpLnRoZW4oX3Jlc3VtZUFmdGVyTmV4dCkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJOZXh0KHN0ZXApIHtcblx0XHRcdGlmIChzdGVwLmRvbmUpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0LCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFByb21pc2UucmVzb2x2ZShib2R5KHN0ZXAudmFsdWUpKS50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCBfcmVqZWN0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZnVuY3Rpb24gX3JlamVjdChlcnJvcikge1xuXHRcdFx0X3NldHRsZShwYWN0LCAyLCBpdGVyYXRvci5yZXR1cm4gPyBpdGVyYXRvci5yZXR1cm4oKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZXJyb3I7IH0pIDogZXJyb3IpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF9mb3JPZih0YXJnZXQsIGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oYm9keSk7IH0sIGNoZWNrKSk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGltcGxlbWVudCBhIGdlbmVyaWMgZm9yIGxvb3BcbmV4cG9ydCBmdW5jdGlvbiBfZm9yKHRlc3QsIHVwZGF0ZSwgYm9keSkge1xuXHR2YXIgc3RhZ2U7XG5cdGZvciAoOzspIHtcblx0XHR2YXIgc2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0c2hvdWxkQ29udGludWUgPSBzaG91bGRDb250aW51ZS52O1xuXHRcdH1cblx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRpZiAoc2hvdWxkQ29udGludWUudGhlbikge1xuXHRcdFx0c3RhZ2UgPSAwO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdGFnZSA9IDE7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodXBkYXRlKSB7XG5cdFx0XHR2YXIgdXBkYXRlVmFsdWUgPSB1cGRhdGUoKTtcblx0XHRcdGlmICh1cGRhdGVWYWx1ZSAmJiB1cGRhdGVWYWx1ZS50aGVuICYmICFfaXNTZXR0bGVkUGFjdCh1cGRhdGVWYWx1ZSkpIHtcblx0XHRcdFx0c3RhZ2UgPSAyO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dmFyIHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0dmFyIHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKTtcblx0KHN0YWdlID09PSAwID8gc2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KSA6IHN0YWdlID09PSAxID8gcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkgOiB1cGRhdGVWYWx1ZS50aGVuKF9yZXN1bWVBZnRlclVwZGF0ZSkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keSh2YWx1ZSkge1xuXHRcdHJlc3VsdCA9IHZhbHVlO1xuXHRcdGRvIHtcblx0XHRcdGlmICh1cGRhdGUpIHtcblx0XHRcdFx0dXBkYXRlVmFsdWUgPSB1cGRhdGUoKTtcblx0XHRcdFx0aWYgKHVwZGF0ZVZhbHVlICYmIHVwZGF0ZVZhbHVlLnRoZW4gJiYgIV9pc1NldHRsZWRQYWN0KHVwZGF0ZVZhbHVlKSkge1xuXHRcdFx0XHRcdHVwZGF0ZVZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVXBkYXRlKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSB8fCAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpICYmICFzaG91bGRDb250aW51ZS52KSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0fVxuXHRcdH0gd2hpbGUgKCFyZXN1bHQgfHwgIXJlc3VsdC50aGVuKTtcblx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0fVxuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJUZXN0KHNob3VsZENvbnRpbnVlKSB7XG5cdFx0aWYgKHNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3Jlc3VtZUFmdGVyQm9keShyZXN1bHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclVwZGF0ZSgpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUgPSB0ZXN0KCkpIHtcblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfcmVzdW1lQWZ0ZXJUZXN0KHNob3VsZENvbnRpbnVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpbXBsZW1lbnQgYSBkbyAuLi4gd2hpbGUgbG9vcFxuZXhwb3J0IGZ1bmN0aW9uIF9kbyhib2R5LCB0ZXN0KSB7XG5cdHZhciBhd2FpdEJvZHk7XG5cdGRvIHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXdhaXRCb2R5ID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciBzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRpZiAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpKSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0fVxuXHRcdGlmICghc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9IHdoaWxlICghc2hvdWxkQ29udGludWUudGhlbik7XG5cdGNvbnN0IHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0Y29uc3QgcmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpO1xuXHQoYXdhaXRCb2R5ID8gcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkgOiBzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0cmV0dXJuIHBhY3Q7XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlckJvZHkodmFsdWUpIHtcblx0XHRyZXN1bHQgPSB2YWx1ZTtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUgPSBzaG91bGRDb250aW51ZS52O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0gd2hpbGUgKCFzaG91bGRDb250aW51ZS50aGVuKTtcblx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHR9XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaW1wbGVtZW50IGEgc3dpdGNoIHN0YXRlbWVudFxuZXhwb3J0IGZ1bmN0aW9uIF9zd2l0Y2goZGlzY3JpbWluYW50LCBjYXNlcykge1xuXHR2YXIgZGlzcGF0Y2hJbmRleCA9IC0xO1xuXHR2YXIgYXdhaXRCb2R5O1xuXHRvdXRlcjoge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB0ZXN0ID0gY2FzZXNbaV1bMF07XG5cdFx0XHRpZiAodGVzdCkge1xuXHRcdFx0XHR2YXIgdGVzdFZhbHVlID0gdGVzdCgpO1xuXHRcdFx0XHRpZiAodGVzdFZhbHVlICYmIHRlc3RWYWx1ZS50aGVuKSB7XG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRlc3RWYWx1ZSA9PT0gZGlzY3JpbWluYW50KSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEZvdW5kIHRoZSBkZWZhdWx0IGNhc2UsIHNldCBpdCBhcyB0aGUgcGVuZGluZyBkaXNwYXRjaCBjYXNlXG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZGlzcGF0Y2hJbmRleCAhPT0gLTEpIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0dmFyIGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdFx0d2hpbGUgKCFib2R5KSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRcdGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0YXdhaXRCb2R5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHR9IHdoaWxlIChmYWxsdGhyb3VnaENoZWNrICYmICFmYWxsdGhyb3VnaENoZWNrKCkpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH1cblx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRjb25zdCByZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgMik7XG5cdChhd2FpdEJvZHkgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHRlc3RWYWx1ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0cmV0dXJuIHBhY3Q7XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3QodmFsdWUpIHtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHRpZiAodmFsdWUgPT09IGRpc2NyaW1pbmFudCkge1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKytpID09PSBjYXNlcy5sZW5ndGgpIHtcblx0XHRcdFx0aWYgKGRpc3BhdGNoSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGVzdCA9IGNhc2VzW2ldWzBdO1xuXHRcdFx0aWYgKHRlc3QpIHtcblx0XHRcdFx0dmFsdWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0XHRcdFx0dmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkbyB7XG5cdFx0XHR2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0d2hpbGUgKCFib2R5KSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdFx0Ym9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0fSB3aGlsZSAoZmFsbHRocm91Z2hDaGVjayAmJiAhZmFsbHRocm91Z2hDaGVjaygpKTtcblx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keShyZXN1bHQpIHtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHR2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuXHRcdFx0aWYgKCFmYWxsdGhyb3VnaENoZWNrIHx8IGZhbGx0aHJvdWdoQ2hlY2soKSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdHZhciBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHBhc3MgdGhlIHJlc3VsdCB0byBleHBsaWNpdGx5IHBhc3NlZCBjb250aW51YXRpb25zXG5leHBvcnQgZnVuY3Rpb24gX2NhbGwoYm9keSwgdGhlbiwgZGlyZWN0KSB7XG5cdGlmIChkaXJlY3QpIHtcblx0XHRyZXR1cm4gdGhlbiA/IHRoZW4oYm9keSgpKSA6IGJvZHkoKTtcblx0fVxuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUoYm9keSgpKTtcblx0XHRyZXR1cm4gdGhlbiA/IHJlc3VsdC50aGVuKHRoZW4pIDogcmVzdWx0O1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc3dhbGxvdyB0aGUgcmVzdWx0XG5leHBvcnQgZnVuY3Rpb24gX2NhbGxJZ25vcmVkKGJvZHksIGRpcmVjdCkge1xuXHRyZXR1cm4gX2NhbGwoYm9keSwgX2VtcHR5LCBkaXJlY3QpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHBhc3MgdGhlIHJlc3VsdCB0byBleHBsaWNpdGx5IHBhc3NlZCBjb250aW51YXRpb25zXG5leHBvcnQgZnVuY3Rpb24gX2ludm9rZShib2R5LCB0aGVuKSB7XG5cdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4odGhlbik7XG5cdH1cblx0cmV0dXJuIHRoZW4ocmVzdWx0KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzd2FsbG93IHRoZSByZXN1bHRcbmV4cG9ydCBmdW5jdGlvbiBfaW52b2tlSWdub3JlZChib2R5KSB7XG5cdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oX2VtcHR5KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHNlbmQgZXJyb3JzIHRvIHJlY292ZXJ5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaChib2R5LCByZWNvdmVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0cmV0dXJuIHJlY292ZXIoZSk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbih2b2lkIDAsIHJlY292ZXIpO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGF3YWl0IGEgcHJvbWlzZSBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGEgZmluYWxseSBjb250aW51YXRpb25cbmV4cG9ydCBmdW5jdGlvbiBfZmluYWxseVJldGhyb3dzKGJvZHksIGZpbmFsaXplcikge1xuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmluYWxpemVyKHRydWUsIGUpO1xuXHR9XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oZmluYWxpemVyLmJpbmQobnVsbCwgZmFsc2UpLCBmaW5hbGl6ZXIuYmluZChudWxsLCB0cnVlKSk7XG5cdH1cblx0cmV0dXJuIGZpbmFsaXplcihmYWxzZSwgcmVzdWx0KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgYXdhaXQgYSBwcm9taXNlIGFuZCBpbnZva2UgYSBmaW5hbGx5IGNvbnRpbnVhdGlvbiB0aGF0IGFsd2F5cyBvdmVycmlkZXMgdGhlIHJlc3VsdFxuZXhwb3J0IGZ1bmN0aW9uIF9maW5hbGx5KGJvZHksIGZpbmFsaXplcikge1xuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmluYWxpemVyKCk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihmaW5hbGl6ZXIsIGZpbmFsaXplcik7XG5cdH1cblx0cmV0dXJuIGZpbmFsaXplcigpO1xufVxuXG4vLyBSZXRocm93IG9yIHJldHVybiBhIHZhbHVlIGZyb20gYSBmaW5hbGx5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXRocm93KHRocm93biwgdmFsdWUpIHtcblx0aWYgKHRocm93bilcblx0XHR0aHJvdyB2YWx1ZTtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG4vLyBFbXB0eSBmdW5jdGlvbiB0byBpbXBsZW1lbnQgYnJlYWsgYW5kIG90aGVyIGNvbnRyb2wgZmxvdyB0aGF0IGlnbm9yZXMgYXN5bmNocm9ub3VzIHJlc3VsdHNcbmV4cG9ydCBmdW5jdGlvbiBfZW1wdHkoKSB7XG59XG5cbi8vIFNlbnRpbmVsIHZhbHVlIGZvciBlYXJseSByZXR1cm5zIGluIGdlbmVyYXRvcnMgXG5leHBvcnQgY29uc3QgX2Vhcmx5UmV0dXJuID0gLyojX19QVVJFX18qLyB7fTtcblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzZW5kIGVycm9ycyB0byByZWNvdmVyeSBjb250aW51YXRpb24sIHNraXBwaW5nIGVhcmx5IHJldHVybnNcbmV4cG9ydCBmdW5jdGlvbiBfY2F0Y2hJbkdlbmVyYXRvcihib2R5LCByZWNvdmVyKSB7XG5cdHJldHVybiBfY2F0Y2goYm9keSwgZnVuY3Rpb24oZSkge1xuXHRcdGlmIChlID09PSBfZWFybHlSZXR1cm4pIHtcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdHJldHVybiByZWNvdmVyKGUpO1xuXHR9KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzIGdlbmVyYXRvciBjbGFzczsgYWNjZXB0cyB0aGUgZW50cnlwb2ludCBvZiB0aGUgZ2VuZXJhdG9yLCB0byB3aGljaCBpdCBwYXNzZXMgaXRzZWxmIHdoZW4gdGhlIGdlbmVyYXRvciBzaG91bGQgc3RhcnRcbmV4cG9ydCBjb25zdCBfQXN5bmNHZW5lcmF0b3IgPSAvKiNfX1BVUkVfXyovKGZ1bmN0aW9uKCkge1xuXHRmdW5jdGlvbiBfQXN5bmNHZW5lcmF0b3IoZW50cnkpIHtcblx0XHR0aGlzLl9lbnRyeSA9IGVudHJ5O1xuXHRcdHRoaXMuX3BhY3QgPSBudWxsO1xuXHRcdHRoaXMuX3Jlc29sdmUgPSBudWxsO1xuXHRcdHRoaXMuX3JldHVybiA9IG51bGw7XG5cdFx0dGhpcy5fcHJvbWlzZSA9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBfd3JhcFJldHVybmVkVmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcblx0fVxuXHRmdW5jdGlvbiBfd3JhcFlpZWxkZWRWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZmFsc2UgfTtcblx0fVxuXG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUuX3lpZWxkID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHQvLyBZaWVsZCB0aGUgdmFsdWUgdG8gdGhlIHBlbmRpbmcgbmV4dCBjYWxsXG5cdFx0dGhpcy5fcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFlpZWxkZWRWYWx1ZSkgOiBfd3JhcFlpZWxkZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdC8vIFJldHVybiBhIHBhY3QgZm9yIGFuIHVwY29taW5nIG5leHQvcmV0dXJuL3Rocm93IGNhbGxcblx0XHRyZXR1cm4gdGhpcy5fcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHR9O1xuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIEFkdmFuY2UgdGhlIGdlbmVyYXRvciwgc3RhcnRpbmcgaXQgaWYgaXQgaGFzIHlldCB0byBiZSBzdGFydGVkXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IF9lbnRyeSA9IF90aGlzLl9lbnRyeTtcblx0XHRcdFx0aWYgKF9lbnRyeSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkLCBidXQgbm90IGF3YWl0aW5nIGEgeWllbGQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdC8vIEFiYW5kb24gdGhlIG5leHQgY2FsbCFcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfdGhpcy5fcHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU3RhcnQgdGhlIGdlbmVyYXRvclxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRcdGZ1bmN0aW9uIHJldHVyblZhbHVlKHZhbHVlKSB7XG5cdFx0XHRcdFx0X3RoaXMuX3Jlc29sdmUodmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX3dyYXBSZXR1cm5lZFZhbHVlKSA6IF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdFx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHJlc3VsdCA9IF9lbnRyeShfdGhpcyk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRyZXN1bHQudGhlbihyZXR1cm5WYWx1ZSwgZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdFx0XHRcdGlmIChlcnJvciA9PT0gX2Vhcmx5UmV0dXJuKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVyblZhbHVlKF90aGlzLl9yZXR1cm4pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZShwYWN0KTtcblx0XHRcdFx0XHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdF9yZXNvbHZlKHBhY3QsIDIsIGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm5WYWx1ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCBhbmQgYSB5aWVsZCBleHByZXNzaW9uIGlzIHBlbmRpbmcsIHNldHRsZSBpdFxuXHRcdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdFx0X3NldHRsZShfcGFjdCwgMSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0Ly8gRWFybHkgcmV0dXJuIGZyb20gdGhlIGdlbmVyYXRvciBpZiBzdGFydGVkLCBvdGhlcndpc2UgYWJhbmRvbnMgdGhlIGdlbmVyYXRvclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblx0XHRyZXR1cm4gX3RoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdFx0Y29uc3QgX3BhY3QgPSBfdGhpcy5fcGFjdDtcblx0XHRcdGlmIChfcGFjdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoX3RoaXMuX2VudHJ5ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQsIGJ1dCBub3QgYXdhaXRpbmcgYSB5aWVsZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0Ly8gQWJhbmRvbiB0aGUgcmV0dXJuIGNhbGwhXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoX3RoaXMuX3Byb21pc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBub3Qgc3RhcnRlZCwgYWJhbmRvbiBpdCBhbmQgcmV0dXJuIHRoZSBzcGVjaWZpZWQgdmFsdWVcblx0XHRcdFx0X3RoaXMuX2VudHJ5ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmUodmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX3dyYXBSZXR1cm5lZFZhbHVlKSA6IF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0dGxlIHRoZSB5aWVsZCBleHByZXNzaW9uIHdpdGggYSByZWplY3RlZCBcImVhcmx5IHJldHVyblwiIHZhbHVlXG5cdFx0XHRfdGhpcy5fcmV0dXJuID0gdmFsdWU7XG5cdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRfc2V0dGxlKF9wYWN0LCAyLCBfZWFybHlSZXR1cm4pO1xuXHRcdH0pO1xuXHR9O1xuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24oZXJyb3IpIHtcblx0XHQvLyBJbmplY3QgYW4gZXhjZXB0aW9uIGludG8gdGhlIHBlbmRpbmcgeWllbGQgZXhwcmVzc2lvblxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblx0XHRyZXR1cm4gX3RoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGlmIChfdGhpcy5fZW50cnkgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCwgYnV0IG5vdCBhd2FpdGluZyBhIHlpZWxkIGV4cHJlc3Npb25cblx0XHRcdFx0XHQvLyBBYmFuZG9uIHRoZSB0aHJvdyBjYWxsIVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKF90aGlzLl9wcm9taXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgbm90IHN0YXJ0ZWQsIGFiYW5kb24gaXQgYW5kIHJldHVybiBhIHJlamVjdGVkIFByb21pc2UgY29udGFpbmluZyB0aGUgZXJyb3Jcblx0XHRcdFx0X3RoaXMuX2VudHJ5ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXR0bGUgdGhlIHlpZWxkIGV4cHJlc3Npb24gd2l0aCB0aGUgdmFsdWUgYXMgYSByZWplY3Rpb25cblx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdF9zZXR0bGUoX3BhY3QsIDIsIGVycm9yKTtcblx0XHR9KTtcblx0fTtcblxuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW19hc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXHRcblx0cmV0dXJuIF9Bc3luY0dlbmVyYXRvcjtcbn0pKCk7XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvTG9nZ2VyXG4gKiA8YnI+PGJyPlxuICogIyMgTG9nZ2VyLlxuICpcbiAqIC0gRGlzcGxheSBpbmZvcm1hdGlvbnMgdmlhIHRoZSBjb25zb2xlXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvTG9nZ2VyXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLyoqXG4gKiBMb2cgbGV2ZWxzLCBhbGwgbG93ZXIgbGV2ZWwgbWVzc2FnZXMgYXJlIHByaW50ZWRcbiAqXG4gKiAwLiBtdXRlXG4gKiAxLiBlcnJvciA9IGBjb25zb2xlLmVycm9yKClgXG4gKiAyLiB3YXJuaW5nPSBgY29uc29sZS53YXJuKClgXG4gKiAzLiBpbmZvID0gYGNvbnNvbGUuaW5mbygpYFxuICogNC4gZGVidWcgPSBgY29uc29sZS5sb2coKWBcbiAqL1xuZXhwb3J0IGVudW0gTG9nTGV2ZWxzIHtcbiAgb2ZmID0gMCxcbiAgZXJyb3IgPSAxLFxuICB3YXJuaW5nID0gMixcbiAgaW5mbyA9IDMsXG4gIGRlYnVnID0gNCxcbn1cblxuLyoqXG4gKiBHbG9iYWwgbG9nIGxldmVsXG4gKi9cbmxldCBfbGV2ZWw6IG51bWJlciA9IExvZ0xldmVscy5vZmY7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAvKipcbiAgICogR2V0IGdsb2JhbCBsb2cgbGV2ZWwuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldExldmVsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIF9sZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZ2xvYmFsIGxvZyBsZXZlbC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2V0TGV2ZWwobmFtZToga2V5b2YgdHlwZW9mIExvZ0xldmVscyk6IG51bWJlciB7XG4gICAgX2xldmVsID0gTG9nTGV2ZWxzW25hbWVdO1xuXG4gICAgcmV0dXJuIF9sZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgXCJwcmVmaXhcIi5cbiAgICovXG4gIHByaXZhdGUgX3NvdXJjZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExvZ2dlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcm1hbmVudCwgdW5yZW1vdmFibGUgbG9nLlxuICAgKi9cbiAgLy8gcHVibGljIHByaW50KC4uLm9iamVjdHM6IGFueVtdKTogdm9pZCB7XG4gIC8vICAgdGhpcy5fbG9nKGNvbnNvbGUuaW5mbywgTG9nTGV2ZWxzLm9mZiwgb2JqZWN0cyk7XG4gIC8vIH1cblxuICAvKipcbiAgICogRXJyb3IgbG9nLlxuICAgKi9cbiAgcHVibGljIGVycm9yKC4uLm9iamVjdHM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5fbG9nKGNvbnNvbGUuZXJyb3IsIExvZ0xldmVscy5lcnJvciwgb2JqZWN0cyk7XG4gIH1cblxuICAvKipcbiAgICogV2FybiBsb2cuXG4gICAqL1xuICBwdWJsaWMgd2FybiguLi5vYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuX2xvZyhjb25zb2xlLndhcm4sIExvZ0xldmVscy53YXJuaW5nLCBvYmplY3RzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmZvIGxvZy5cbiAgICovXG4gIHB1YmxpYyBpbmZvKC4uLm9iamVjdHM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5fbG9nKGNvbnNvbGUuaW5mbywgTG9nTGV2ZWxzLmluZm8sIG9iamVjdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYnVnIGxvZy5cbiAgICovXG4gIHB1YmxpYyBkZWJ1ZyguLi5vYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuX2xvZyhjb25zb2xlLmxvZywgTG9nTGV2ZWxzLmRlYnVnLCBvYmplY3RzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBsb2dnZXIuXG4gICAqL1xuICBwcml2YXRlIF9sb2coZm46ICgpID0+IHZvaWQsIGxldmVsOiBudW1iZXIsIG9iamVjdHM6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKGxldmVsIDw9IExvZ2dlci5nZXRMZXZlbCgpKSB7XG4gICAgICBmbi5hcHBseShjb25zb2xlLCAoW2BbJHt0aGlzLl9zb3VyY2V9XSBgXS5jb25jYXQob2JqZWN0cykgYXMgdW5rbm93bikgYXMgW1xuXG4gICAgICBdKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQG1vZHVsZSB0eXBpbmdzL2NvcmVcbiAqL1xuaW1wb3J0IHsgSVRyYW5zaXRpb25EYXRhLCBJVHJhbnNpdGlvblBhZ2UsIElWaWV3RGF0YSB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgdHlwZSBIb29rc0JhcmJhID1cbiAgfCAncmVhZHknXG4gIHwgJ3BhZ2UnXG4gIHwgJ3Jlc2V0J1xuICB8ICdjdXJyZW50QWRkZWQnXG4gIHwgJ2N1cnJlbnRSZW1vdmVkJ1xuICB8ICduZXh0QWRkZWQnXG4gIHwgJ25leHRSZW1vdmVkJztcblxuZXhwb3J0IHR5cGUgSG9va3NPbmNlID0gJ2JlZm9yZU9uY2UnIHwgJ29uY2UnIHwgJ2FmdGVyT25jZSc7XG5cbmV4cG9ydCB0eXBlIEhvb2tzUGFnZSA9XG4gIHwgJ2JlZm9yZSdcbiAgfCAnYmVmb3JlTGVhdmUnXG4gIHwgJ2xlYXZlJ1xuICB8ICdhZnRlckxlYXZlJ1xuICB8ICdiZWZvcmVFbnRlcidcbiAgfCAnZW50ZXInXG4gIHwgJ2FmdGVyRW50ZXInXG4gIHwgJ2FmdGVyJztcblxuZXhwb3J0IHR5cGUgSG9va3NCZWZvcmUgPSAnYmVmb3JlT25jZScgfCAnYmVmb3JlTGVhdmUnIHwgJ2JlZm9yZUVudGVyJztcbmV4cG9ydCB0eXBlIEhvb2tzQWZ0ZXIgPSAnYWZ0ZXJPbmNlJyB8ICdhZnRlckxlYXZlJyB8ICdhZnRlckVudGVyJztcblxuZXhwb3J0IHR5cGUgSG9va3NUcmFuc2l0aW9uID0gSG9va3NPbmNlIHwgSG9va3NQYWdlO1xuZXhwb3J0IHR5cGUgSG9va3NWaWV3ID0gSG9va3NCZWZvcmUgfCBIb29rc0FmdGVyO1xuZXhwb3J0IHR5cGUgSG9va3NBbGwgPSBIb29rc0JhcmJhIHwgSG9va3NUcmFuc2l0aW9uO1xuXG4vLyBBbGxvdyBvcHRpb25hbCBcImR5bmFtaWNhbGx5IGNyZWF0ZWRcIiBob29rc1xuZXhwb3J0IHR5cGUgSG9va3NUcmFuc2l0aW9uTWFwID0geyBba2V5IGluIEhvb2tzVHJhbnNpdGlvbl0/OiBhbnkgfTtcblxuZXhwb3J0IHR5cGUgSG9va0Z1bmN0aW9uID0gKFxuICBkYXRhPzogSVRyYW5zaXRpb25EYXRhIHwgSVZpZXdEYXRhLFxuICB0PzogSVRyYW5zaXRpb25QYWdlXG4pID0+IFByb21pc2U8dm9pZD4gfCB2b2lkO1xuXG5leHBvcnQgY2xhc3MgSG9va01ldGhvZHMge1xuICBwdWJsaWMgYmVmb3JlOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgYmVmb3JlTGVhdmU6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBsZWF2ZTogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGFmdGVyTGVhdmU6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBiZWZvcmVFbnRlcjogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGVudGVyOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgYWZ0ZXJFbnRlcjogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGFmdGVyOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xufVxuIiwiLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcGF0aFRvUmVnZXhwXG5tb2R1bGUuZXhwb3J0cy5tYXRjaCA9IG1hdGNoXG5tb2R1bGUuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvblxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGVcbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb1JlZ0V4cCA9IHRva2Vuc1RvUmVnRXhwXG5cbi8qKlxuICogRGVmYXVsdCBjb25maWdzLlxuICovXG52YXIgREVGQVVMVF9ERUxJTUlURVIgPSAnLydcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIjp0ZXN0KFxcXFxkKyk/XCIgPT4gW1widGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIl1cbiAgLy8gXCIoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWRdXG4gICcoPzpcXFxcOihcXFxcdyspKD86XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSk/fFxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpKFsrKj9dKT8nXG5dLmpvaW4oJ3wnKSwgJ2cnKVxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0ciwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGtleSA9IDBcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcGF0aCA9ICcnXG4gIHZhciBkZWZhdWx0RGVsaW1pdGVyID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIpIHx8IERFRkFVTFRfREVMSU1JVEVSXG4gIHZhciB3aGl0ZWxpc3QgPSAob3B0aW9ucyAmJiBvcHRpb25zLndoaXRlbGlzdCkgfHwgdW5kZWZpbmVkXG4gIHZhciBwYXRoRXNjYXBlZCA9IGZhbHNlXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICB2YXIgbSA9IHJlc1swXVxuICAgIHZhciBlc2NhcGVkID0gcmVzWzFdXG4gICAgdmFyIG9mZnNldCA9IHJlcy5pbmRleFxuICAgIHBhdGggKz0gc3RyLnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgaW5kZXggPSBvZmZzZXQgKyBtLmxlbmd0aFxuXG4gICAgLy8gSWdub3JlIGFscmVhZHkgZXNjYXBlZCBzZXF1ZW5jZXMuXG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHBhdGggKz0gZXNjYXBlZFsxXVxuICAgICAgcGF0aEVzY2FwZWQgPSB0cnVlXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBwcmV2ID0gJydcbiAgICB2YXIgbmFtZSA9IHJlc1syXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzNdXG4gICAgdmFyIGdyb3VwID0gcmVzWzRdXG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzVdXG5cbiAgICBpZiAoIXBhdGhFc2NhcGVkICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgICB2YXIgayA9IHBhdGgubGVuZ3RoIC0gMVxuICAgICAgdmFyIGMgPSBwYXRoW2tdXG4gICAgICB2YXIgbWF0Y2hlcyA9IHdoaXRlbGlzdCA/IHdoaXRlbGlzdC5pbmRleE9mKGMpID4gLTEgOiB0cnVlXG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHByZXYgPSBjXG4gICAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGspXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHVzaCB0aGUgY3VycmVudCBwYXRoIG9udG8gdGhlIHRva2Vucy5cbiAgICBpZiAocGF0aCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0aClcbiAgICAgIHBhdGggPSAnJ1xuICAgICAgcGF0aEVzY2FwZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHZhciByZXBlYXQgPSBtb2RpZmllciA9PT0gJysnIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgb3B0aW9uYWwgPSBtb2RpZmllciA9PT0gJz8nIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgcGF0dGVybiA9IGNhcHR1cmUgfHwgZ3JvdXBcbiAgICB2YXIgZGVsaW1pdGVyID0gcHJldiB8fCBkZWZhdWx0RGVsaW1pdGVyXG5cbiAgICB0b2tlbnMucHVzaCh7XG4gICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgcHJlZml4OiBwcmV2LFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm5cbiAgICAgICAgPyBlc2NhcGVHcm91cChwYXR0ZXJuKVxuICAgICAgICA6ICdbXicgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyID09PSBkZWZhdWx0RGVsaW1pdGVyID8gZGVsaW1pdGVyIDogKGRlbGltaXRlciArIGRlZmF1bHREZWxpbWl0ZXIpKSArICddKz8nXG4gICAgfSlcbiAgfVxuXG4gIC8vIFB1c2ggYW55IHJlbWFpbmluZyBjaGFyYWN0ZXJzLlxuICBpZiAocGF0aCB8fCBpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoICsgc3RyLnN1YnN0cihpbmRleCkpXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshZnVuY3Rpb24oT2JqZWN0PSwgT2JqZWN0PSl9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaCAoc3RyLCBvcHRpb25zKSB7XG4gIHZhciBrZXlzID0gW11cbiAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucylcbiAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uIChyZSwga2V5cykge1xuICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lLCBvcHRpb25zKSB7XG4gICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKVxuICAgIGlmICghbSkgcmV0dXJuIGZhbHNlXG5cbiAgICB2YXIgcGF0aCA9IG1bMF1cbiAgICB2YXIgaW5kZXggPSBtLmluZGV4XG4gICAgdmFyIHBhcmFtcyA9IHt9XG4gICAgdmFyIGRlY29kZSA9IChvcHRpb25zICYmIG9wdGlvbnMuZGVjb2RlKSB8fCBkZWNvZGVVUklDb21wb25lbnRcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZCkgY29udGludWVcblxuICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdXG5cbiAgICAgIGlmIChrZXkucmVwZWF0KSB7XG4gICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5kZWxpbWl0ZXIpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJywgZmxhZ3Mob3B0aW9ucykpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhdGggPSAnJ1xuICAgIHZhciBlbmNvZGUgPSAob3B0aW9ucyAmJiBvcHRpb25zLmVuY29kZSkgfHwgZW5jb2RlVVJJQ29tcG9uZW50XG4gICAgdmFyIHZhbGlkYXRlID0gb3B0aW9ucyA/IG9wdGlvbnMudmFsaWRhdGUgIT09IGZhbHNlIDogdHJ1ZVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoICs9IHRva2VuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkXG4gICAgICB2YXIgc2VnbWVudFxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYXJyYXknKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkgY29udGludWVcblxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IGJlIGVtcHR5JylcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbilcblxuICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbilcblxuICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IGdvdCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgICAgfVxuXG4gICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIGNvbnRpbnVlXG5cbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gYmUgJyArICh0b2tlbi5yZXBlYXQgPyAnYW4gYXJyYXknIDogJ2Egc3RyaW5nJykpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiQvKCldKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/ICcnIDogJ2knXG59XG5cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHBhdGhcbiAqIEBwYXJhbSAge0FycmF5PX0gIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwIChwYXRoLCBrZXlzKSB7XG4gIGlmICgha2V5cykgcmV0dXJuIHBhdGhcblxuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZylcblxuICBpZiAoZ3JvdXBzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgIHJlcGVhdDogZmFsc2UsXG4gICAgICAgIHBhdHRlcm46IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheT19ICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5PX0gIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb1JlZ0V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHRva2Vuc1xuICogQHBhcmFtICB7QXJyYXk9fSAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdFeHAgKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdFxuICB2YXIgc3RhcnQgPSBvcHRpb25zLnN0YXJ0ICE9PSBmYWxzZVxuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIHZhciBkZWxpbWl0ZXIgPSBvcHRpb25zLmRlbGltaXRlciB8fCBERUZBVUxUX0RFTElNSVRFUlxuICB2YXIgZW5kc1dpdGggPSBbXS5jb25jYXQob3B0aW9ucy5lbmRzV2l0aCB8fCBbXSkubWFwKGVzY2FwZVN0cmluZykuY29uY2F0KCckJykuam9pbignfCcpXG4gIHZhciByb3V0ZSA9IHN0YXJ0ID8gJ14nIDogJydcblxuICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNhcHR1cmUgPSB0b2tlbi5yZXBlYXRcbiAgICAgICAgPyAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSg/OicgKyBlc2NhcGVTdHJpbmcodG9rZW4uZGVsaW1pdGVyKSArICcoPzonICsgdG9rZW4ucGF0dGVybiArICcpKSonXG4gICAgICAgIDogdG9rZW4ucGF0dGVyblxuXG4gICAgICBpZiAoa2V5cykga2V5cy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wcmVmaXgpIHtcbiAgICAgICAgICByb3V0ZSArPSAnKCcgKyBjYXB0dXJlICsgJyk/J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlICs9ICcoPzonICsgZXNjYXBlU3RyaW5nKHRva2VuLnByZWZpeCkgKyAnKCcgKyBjYXB0dXJlICsgJykpPydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKHRva2VuLnByZWZpeCkgKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIGlmICghc3RyaWN0KSByb3V0ZSArPSAnKD86JyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJyk/J1xuXG4gICAgcm91dGUgKz0gZW5kc1dpdGggPT09ICckJyA/ICckJyA6ICcoPz0nICsgZW5kc1dpdGggKyAnKSdcbiAgfSBlbHNlIHtcbiAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdXG4gICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSAnc3RyaW5nJ1xuICAgICAgPyBlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSA9PT0gZGVsaW1pdGVyXG4gICAgICA6IGVuZFRva2VuID09PSB1bmRlZmluZWRcblxuICAgIGlmICghc3RyaWN0KSByb3V0ZSArPSAnKD86JyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJyg/PScgKyBlbmRzV2l0aCArICcpKT8nXG4gICAgaWYgKCFpc0VuZERlbGltaXRlZCkgcm91dGUgKz0gJyg/PScgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyKSArICd8JyArIGVuZHNXaXRoICsgJyknXG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoc3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAge0FycmF5PX0gICAgICAgICAgICAgICAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cylcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKSB7XG4gICAgcmV0dXJuIGFycmF5VG9SZWdleHAoLyoqIEB0eXBlIHshQXJyYXl9ICovIChwYXRoKSwga2V5cywgb3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpLCBrZXlzLCBvcHRpb25zKVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9zY2hlbWFzXG4gKiA8YnI+PGJyPlxuICogIyMgU2NoZW1hcyBkZXNjcmlwdGlvbi5cbiAqXG4gKiBAbW9kdWxlIGNvcmUvc2NoZW1hc1xuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJU2NoZW1hQXR0cmlidXRlIH0gZnJvbSAnLi4vZGVmcyc7XG5cbi8qKlxuICogU2VlIFtbSVNjaGVtYUF0dHJpYnV0ZV1dXG4gKi9cbmV4cG9ydCBjb25zdCBzY2hlbWFBdHRyaWJ1dGU6IElTY2hlbWFBdHRyaWJ1dGUgPSB7XG4gIGNvbnRhaW5lcjogJ2NvbnRhaW5lcicsXG4gIGhpc3Rvcnk6ICdoaXN0b3J5JyxcbiAgbmFtZXNwYWNlOiAnbmFtZXNwYWNlJyxcbiAgcHJlZml4OiAnZGF0YS1iYXJiYScsXG4gIHByZXZlbnQ6ICdwcmV2ZW50JyxcbiAgd3JhcHBlcjogJ3dyYXBwZXInLFxufTtcbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvdXRpbHMvZG9tXG4gKiA8YnI+PGJyPlxuICogIyMgRG9tIHV0aWxzXG4gKlxuICogLSBBY2Nlc3MgRE9NIGNvbnRlbnRzXG4gKiAtIERPTSB2cyBzdHJpbmcgY29udmVyc2lvbnNcbiAqXG4gKiBAbW9kdWxlIGNvcmUvdXRpbHMvZG9tXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJU2NoZW1hQXR0cmlidXRlLCBMaW5rLCBTY29wZSwgV3JhcHBlciB9IGZyb20gJy4uL2RlZnMnO1xuLy8gU2NoZW1hc1xuaW1wb3J0IHsgc2NoZW1hQXR0cmlidXRlIH0gZnJvbSAnLi4vc2NoZW1hcy9hdHRyaWJ1dGUnO1xuXG5leHBvcnQgY2xhc3MgRG9tIHtcbiAgcHJpdmF0ZSBfYXR0cjogSVNjaGVtYUF0dHJpYnV0ZSA9IHNjaGVtYUF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSBfcGFyc2VyOiBET01QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgSFRNTERvY3VtZW50IHRvIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZyhlbDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbC5vdXRlckhUTUw7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgSFRNTCBzdHJpbmcgdG8gSFRNTERvY3VtZW50LlxuICAgKi9cbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJiYWpzL2JhcmJhL2lzc3Vlcy8zNjJcbiAgLy8gU2VlbXMgdGhhdCB1c2luZyBET01QYXJzZXIucGFyc2VGcm9tU3RyaW5nIGNhdXNlcyB0aGlzIGlzc3VlLlxuICBwdWJsaWMgdG9Eb2N1bWVudChodG1sU3RyaW5nOiBzdHJpbmcpOiBIVE1MRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9wYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWxTdHJpbmcsICd0ZXh0L2h0bWwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBIVE1MIHN0cmluZyB0byBESVZFbGVtZW50LlxuICAgKlxuICAgKiBET01QYXJzZXIucGFyc2VGcm9tU3RyaW5nIGZhaWxzIHdpdGggaW1nW3NyY3NldF0gb24gaU9TLlxuICAgKiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JhcmJhanMvYmFyYmEvaXNzdWVzLzM2MlxuICAgKi9cbiAgcHVibGljIHRvRWxlbWVudChodG1sU3RyaW5nOiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBIVE1MIGNvbnRlbnQuXG4gICAqL1xuICBwdWJsaWMgZ2V0SHRtbChkb2M6IEhUTUxEb2N1bWVudCA9IGRvY3VtZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZyhkb2MuZG9jdW1lbnRFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZnVsbCBkb2N1bWVudCBjb250ZW50LlxuICAgKi9cbiAgLy8gZ2V0RG9jdW1lbnQoZWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgLy8gICByZXR1cm4gdGhpcy50b1N0cihlbCk7XG4gIC8vIH0sXG5cbiAgLyoqXG4gICAqIEdldCBgW2RhdGEtYmFyYmE9XCJ3cmFwcGVyXCJdYC5cbiAgICovXG4gIHB1YmxpYyBnZXRXcmFwcGVyKHNjb3BlOiBTY29wZSA9IGRvY3VtZW50KTogV3JhcHBlciB7XG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgWyR7dGhpcy5fYXR0ci5wcmVmaXh9PVwiJHt0aGlzLl9hdHRyLndyYXBwZXJ9XCJdYFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGBbZGF0YS1iYXJiYT1cImNvbnRhaW5lclwiXWAuXG4gICAqL1xuICBwdWJsaWMgZ2V0Q29udGFpbmVyKHNjb3BlOiBTY29wZSA9IGRvY3VtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gc2NvcGUucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbJHt0aGlzLl9hdHRyLnByZWZpeH09XCIke3RoaXMuX2F0dHIuY29udGFpbmVyfVwiXWBcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb250YWluZXIgYW5kIHN0b3JlIG5leHQgc2libGluZyAoaWYgYXBwbGljYWJsZSkuXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlQ29udGFpbmVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhjb250YWluZXIpKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY29udGFpbmVyIGJlZm9yZSBuZXh0IHNpYmxpbmcgb3IgYXQgdGhlIGVuZCBvZiB0aGUgd3JhcHBlci5cbiAgICovXG4gIHB1YmxpYyBhZGRDb250YWluZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgd3JhcHBlcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBleGlzdGluZ0NvbnRhaW5lciA9IHRoaXMuZ2V0Q29udGFpbmVyKCk7XG5cbiAgICBpZiAoZXhpc3RpbmdDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2luc2VydEFmdGVyKGNvbnRhaW5lciwgZXhpc3RpbmdDb250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBgW2RhdGEtYmFyYmEtbmFtZXNwYWNlXWAuXG4gICAqL1xuICBwdWJsaWMgZ2V0TmFtZXNwYWNlKHNjb3BlOiBTY29wZSA9IGRvY3VtZW50KTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgbnMgPSBzY29wZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFske3RoaXMuX2F0dHIucHJlZml4fS0ke3RoaXMuX2F0dHIubmFtZXNwYWNlfV1gXG4gICAgKTtcblxuICAgIHJldHVybiBuc1xuICAgICAgPyBucy5nZXRBdHRyaWJ1dGUoYCR7dGhpcy5fYXR0ci5wcmVmaXh9LSR7dGhpcy5fYXR0ci5uYW1lc3BhY2V9YClcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgVVJMIGZyb20gYGhyZWZgIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldEhyZWYoZWw6IExpbmspOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyBIVE1MIHRhZ05hbWUgaXMgVVBQRVJDQVNFLCB4aHRtbCB0YWdOYW1lIGtlZXBzIGV4aXN0aW5nIGNhc2UuXG4gICAgaWYgKGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScpIHtcbiAgICAgIC8vIEhUTUxBbmNob3JFbGVtZW50LCBmdWxsIFVSTCBhdmFpbGFibGVcbiAgICAgIGlmICh0eXBlb2YgZWwuaHJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGVsLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2JhYmx5IGEgU1ZHQUVsZW1lbnTigKZcbiAgICAgIGNvbnN0IGhyZWYgPSBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3hsaW5rOmhyZWYnKTtcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChocmVmKSB7XG4gICAgICAgIC8vIFdoZW4gbGluayBjb21lcyBmcm9tIFNWRywgYGhyZWZgIHJldHVybnMgYW4gb2JqZWN0LCBub3QgYSBzdHJpbmcuXG4gICAgICAgIGNvbnN0IGF0dHI6IHN0cmluZyA9XG4gICAgICAgICAgKChocmVmIGFzIHVua25vd24pIGFzIFNWR0FuaW1hdGVkU3RyaW5nKS5iYXNlVmFsIHx8IGhyZWY7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZVVybChhdHRyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBDb3B5cmlnaHQgMjAxNCBTaW1vbiBMeWRlbGxcbiAgLy8gWDExICjigJxNSVTigJ0pIExpY2Vuc2VkLiAoU2VlIExJQ0VOU0VcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2x5ZGVsbC9yZXNvbHZlLXVybC9ibG9iL21hc3Rlci9yZXNvbHZlLXVybC5qc1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBwdWJsaWMgcmVzb2x2ZVVybCguLi51cmxzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IG51bVVybHMgPSB1cmxzLmxlbmd0aDtcblxuICAgIGlmIChudW1VcmxzID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jlc29sdmVVcmwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50OyBnb3Qgbm9uZS4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYmFzZScpO1xuICAgIGJhc2UuaHJlZiA9IGFyZ3VtZW50c1swXTtcblxuICAgIGlmIChudW1VcmxzID09PSAxKSB7XG4gICAgICByZXR1cm4gYmFzZS5ocmVmO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGJhc2UsIGhlYWQuZmlyc3RDaGlsZCk7XG5cbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCByZXNvbHZlZDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBudW1VcmxzOyBpbmRleCsrKSB7XG4gICAgICBhLmhyZWYgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgcmVzb2x2ZWQgPSBhLmhyZWY7XG4gICAgICBiYXNlLmhyZWYgPSByZXNvbHZlZDtcbiAgICB9XG5cbiAgICBoZWFkLnJlbW92ZUNoaWxkKGJhc2UpO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBub2RlIGFmdGVyIGFub3RoZXIgbm9kZS5cbiAgICovXG4gIHByaXZhdGUgX2luc2VydEFmdGVyKG5ld05vZGU6IE5vZGUsIHJlZmVyZW5jZU5vZGU6IE5vZGUpIHtcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xuICB9XG59XG5cbmNvbnN0IGRvbSA9IG5ldyBEb20oKTtcblxuZXhwb3J0IHsgZG9tIH07XG4iLCJpbXBvcnQgeyBIaXN0b3J5QWN0aW9uLCBMaW5rRXZlbnQsIFRyaWdnZXIgfSBmcm9tICcuLi9kZWZzJztcbi8vIFNjaGVtYXNcbmltcG9ydCB7IHNjaGVtYUF0dHJpYnV0ZSB9IGZyb20gJy4uL3NjaGVtYXMvYXR0cmlidXRlJztcblxuLyoqXG4gKiBAYmFyYmEvY29yZS91dGlscy9oaXN0b3J5XG4gKiA8YnI+PGJyPlxuICogIyMgSGlzdG9yeSBtYW5hZ2VyLlxuICpcbiAqIC0gS2VlcCB0cmFjayBvZiB0aGUgbmF2aWdhdGlvbiBoaXN0b3J5XG4gKlxuICogQG1vZHVsZSBjb3JlL3V0aWxzL2hpc3RvcnlcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKipcbiAqIFN0YXRlIGl0ZW0uXG4gKlxuICogQHByb3BlcnR5IGZyb21cbiAqIEBwcm9wZXJ0eSBpbmRleFxuICovXG5pbnRlcmZhY2UgSUhpc3RvcnlJdGVtIHtcbiAgLyoqIG9yaWdpbiAqL1xuICBmcm9tOiBzdHJpbmc7XG4gIC8qKiBpbmRleCAqL1xuICBpbmRleDogbnVtYmVyO1xuICAvKiogc3RhdGVzICovXG4gIHN0YXRlczogSVN0YXRlSXRlbVtdO1xufVxuXG4vKioqL1xuaW50ZXJmYWNlIElDb29yZHMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBIaXN0b3J5IGl0ZW0uXG4gKlxuICogQHByb3BlcnR5IG5hbWVzcGFjZVxuICogQHByb3BlcnR5IHNjcm9sbFxuICogQHByb3BlcnR5IFVSTFxuICovXG5pbnRlcmZhY2UgSVN0YXRlSXRlbSB7XG4gIC8qKiBuYW1lc3BhY2UgKi9cbiAgbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgLyoqIFNjcm9sbCBwb3NpdGlvbiAqL1xuICBzY3JvbGw6IElDb29yZHM7XG4gIC8qKiBVUkwgKi9cbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBIaXN0b3J5IHtcbiAgcHJpdmF0ZSBfc2Vzc2lvbjogc3RyaW5nO1xuICBwcml2YXRlIF9zdGF0ZXM6IElTdGF0ZUl0ZW1bXSA9IFtdO1xuICBwcml2YXRlIF9wb2ludGVyID0gLTE7XG5cbiAgLyoqXG4gICAqIEluaXQgd2l0aCBmaXJzdCBzdGF0ZS5cbiAgICovXG4gIHB1YmxpYyBpbml0KHVybDogc3RyaW5nLCBuczogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2Vzc2lvbiA9ICdiYXJiYSc7XG4gICAgY29uc3QgaW5kZXggPSAwO1xuXG4gICAgY29uc3Qgc3RhdGU6IElTdGF0ZUl0ZW0gPSB7XG4gICAgICBucyxcbiAgICAgIHNjcm9sbDoge1xuICAgICAgICB4OiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgeTogd2luZG93LnNjcm9sbFksXG4gICAgICB9LFxuICAgICAgdXJsLFxuICAgIH07XG5cbiAgICB0aGlzLl9zdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgdGhpcy5fcG9pbnRlciA9IGluZGV4O1xuXG4gICAgY29uc3QgaXRlbTogSUhpc3RvcnlJdGVtID0ge1xuICAgICAgZnJvbTogdGhpcy5fc2Vzc2lvbixcbiAgICAgIGluZGV4LFxuICAgICAgc3RhdGVzOiBbLi4udGhpcy5fc3RhdGVzXSxcbiAgICB9O1xuXG4gICAgd2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGl0ZW0sICcnLCB1cmwpO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0cmlnZ2VyOiBUcmlnZ2VyLFxuICAgIGU/OiBMaW5rRXZlbnQgfCBQb3BTdGF0ZUV2ZW50XG4gICk6IFRyaWdnZXIge1xuICAgIGlmIChlICYmIChlIGFzIFBvcFN0YXRlRXZlbnQpLnN0YXRlKSB7XG4gICAgICAvLyBJZiBwb3BzdGF0ZSwgbW92ZSB0byBleGlzdGluZyBzdGF0ZVxuICAgICAgLy8gYW5kIGdldCBiYWNrL2ZvcndhcmQgZGlyZWN0aW9uLlxuICAgICAgY29uc3QgeyBzdGF0ZSB9OiB7IHN0YXRlOiBJSGlzdG9yeUl0ZW0gfSA9IGUgYXMgUG9wU3RhdGVFdmVudDtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IHN0YXRlO1xuICAgICAgY29uc3QgZGlmZiA9IHRoaXMuX3BvaW50ZXIgLSBpbmRleDtcblxuICAgICAgdHJpZ2dlciA9IHRoaXMuX2dldERpcmVjdGlvbihkaWZmKTtcblxuICAgICAgLy8gV29yayB3aXRoIHByZXZpb3VzIHN0YXRlc1xuICAgICAgdGhpcy5yZXBsYWNlKHN0YXRlLnN0YXRlcyk7XG4gICAgICB0aGlzLl9wb2ludGVyID0gaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCBuZXcgc3RhdGVcbiAgICAgIHRoaXMuYWRkKHVybCwgdHJpZ2dlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaWdnZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IHN0YXRlLlxuICAgKi9cbiAgcHVibGljIGFkZCh1cmw6IHN0cmluZywgdHJpZ2dlcjogVHJpZ2dlcik6IHZvaWQge1xuICAgIC8vIElmIG5vIHN0YXRlLCBpdCB3aWxsIGJlIHVwZGF0ZWQgbGF0ZXIuXG4gICAgY29uc3QgbnMgPSAndG1wJztcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2l6ZTtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9nZXRBY3Rpb24odHJpZ2dlcik7XG4gICAgY29uc3Qgc3RhdGU6IElTdGF0ZUl0ZW0gPSB7XG4gICAgICBucyxcbiAgICAgIHNjcm9sbDoge1xuICAgICAgICB4OiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgeTogd2luZG93LnNjcm9sbFksXG4gICAgICB9LFxuICAgICAgdXJsLFxuICAgIH07XG5cbiAgICB0aGlzLl9zdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgdGhpcy5fcG9pbnRlciA9IGluZGV4O1xuXG4gICAgY29uc3QgaXRlbTogSUhpc3RvcnlJdGVtID0ge1xuICAgICAgZnJvbTogdGhpcy5fc2Vzc2lvbixcbiAgICAgIGluZGV4LFxuICAgICAgc3RhdGVzOiBbLi4udGhpcy5fc3RhdGVzXSxcbiAgICB9O1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaXRlbSwgJycsIHVybCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5ICYmIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShpdGVtLCAnJywgdXJsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0YXRlLlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShkYXRhOiBhbnksIGk/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IGkgfHwgdGhpcy5fcG9pbnRlcjtcbiAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuZ2V0KGluZGV4KTtcbiAgICBjb25zdCBzdGF0ZTogSVN0YXRlSXRlbSA9IHtcbiAgICAgIC4uLmV4aXN0aW5nLFxuICAgICAgLi4uZGF0YSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZXQoaW5kZXgsIHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbGFzdCBzdGF0ZS5cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoaT86IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpKSB7XG4gICAgICB0aGlzLl9zdGF0ZXMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGF0ZXMucG9wKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcG9pbnRlci0tO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgc3RhdGVzLlxuICAgKi9cbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXRlcyA9IFtdO1xuICAgIHRoaXMuX3BvaW50ZXIgPSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGFsbCBzdGF0ZXMuXG4gICAqL1xuICBwdWJsaWMgcmVwbGFjZShuZXdTdGF0ZXM6IElTdGF0ZUl0ZW1bXSk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXRlcyA9IG5ld1N0YXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdGUgYnkgaW5kZXguXG4gICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzW2luZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc3RhdGUgYnkgaW5kZXguXG4gICAqL1xuICBwdWJsaWMgc2V0KGk6IG51bWJlciwgc3RhdGU6IElTdGF0ZUl0ZW0pIHtcbiAgICByZXR1cm4gKHRoaXMuX3N0YXRlc1tpXSA9IHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgc3RhdGUuXG4gICAqL1xuICBnZXQgY3VycmVudCgpOiBJU3RhdGVJdGVtIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzW3RoaXMuX3BvaW50ZXJdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGFzdCBzdGF0ZSAodG9wIG9mIHRoZSBoaXN0b3J5IHN0YWNrKS5cbiAgICovXG4gIGdldCBzdGF0ZSgpOiBJU3RhdGVJdGVtIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzW3RoaXMuX3N0YXRlcy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHByZXZpb3VzIHN0YXRlLlxuICAgKi9cbiAgZ2V0IHByZXZpb3VzKCk6IElTdGF0ZUl0ZW0gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnRlciA8IDEgPyBudWxsIDogdGhpcy5fc3RhdGVzW3RoaXMuX3BvaW50ZXIgLSAxXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHN0YXRlIHNpemUuXG4gICAqL1xuICBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZXMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaGlzdG9yeSBhY3Rpb246IHB1c2ggdnMgcmVwbGFjZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0QWN0aW9uKHRyaWdnZXI6IFRyaWdnZXIpOiBIaXN0b3J5QWN0aW9uIHtcbiAgICBsZXQgYWN0aW9uOiBIaXN0b3J5QWN0aW9uID0gJ3B1c2gnO1xuXG4gICAgLy8gTWFuYWdlIGBkYXRhLWJhcmJhLWhpc3RvcnlgIGF0dHJpYnV0ZVxuICAgIC8vIHRvIGdldCB0aGUgcmlnaHQgYWN0aW9uIChwdXNoIHZzIHJlcGxhY2UpLlxuICAgIGNvbnN0IGVsID0gdHJpZ2dlciBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICBjb25zdCBhdHRyID0gYCR7c2NoZW1hQXR0cmlidXRlLnByZWZpeH0tJHtzY2hlbWFBdHRyaWJ1dGUuaGlzdG9yeX1gO1xuXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSAmJiBlbC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgIGFjdGlvbiA9IGVsLmdldEF0dHJpYnV0ZShhdHRyKSBhcyBIaXN0b3J5QWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkaXJlY3Rpb24gb2YgcG9wc3RhdGUgY2hhbmdlXG4gICAqL1xuICBwcml2YXRlIF9nZXREaXJlY3Rpb24oZGlmZjogbnVtYmVyKTogVHJpZ2dlciB7XG4gICAgLy8gQ2hlY2sgaWYgXCJzZXNzaW9uIHN3aXRjaFwiXG4gICAgaWYgKE1hdGguYWJzKGRpZmYpID4gMSkge1xuICAgICAgLy8gRXggNi0wID4gMCAtPiBmb3J3YXJkLCAwLTYgPCAwIC0+IGJhY2tcbiAgICAgIHJldHVybiBkaWZmID4gMCA/ICdmb3J3YXJkJyA6ICdiYWNrJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRpZmYgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICdwb3BzdGF0ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFeCA2LTUgPiAwIC0+IGJhY2ssIDUtNiA8IDAgLT4gZm9yd2FyZFxuICAgICAgICByZXR1cm4gZGlmZiA+IDAgPyAnYmFjaycgOiAnZm9yd2FyZCc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuXG5leHBvcnQgeyBoaXN0b3J5IH07XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL3V0aWxzL2hlbHBlcnNcbiAqIDxicj48YnI+XG4gKiAjIyBIZWxwZXJzXG4gKlxuICogLSBVcGRhdGUgbmV4dCBwYWdlIGRhdGFcbiAqXG4gKiBAbW9kdWxlIGNvcmUvdXRpbHMvaGVscGVyc1xuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIFRoaXJkLXBhcnR5XG5pbXBvcnQgcHRyIGZyb20gJ3BhdGgtdG8tcmVnZXhwJztcbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJVHJhbnNpdGlvbkRhdGEgfSBmcm9tICcuLi9kZWZzJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBkb20gfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSAnLi9oaXN0b3J5JztcblxuLyoqXG4gKiBVcGRhdGUgYGRhdGEubmV4dGAsIHRoZSB0aXRsZSBhbmQgdGhlIGhpc3RvcnlcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IGFzeW5jIChcbiAgcGFnZTogUHJvbWlzZTxzdHJpbmcgfCB2b2lkPixcbiAgZGF0YTogSVRyYW5zaXRpb25EYXRhXG4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgLy8gSWYgbm90IGFscmVhZHkgdXBkYXRlZFxuICBpZiAoIWRhdGEubmV4dC5odG1sKSB7XG4gICAgY29uc3QgaHRtbCA9IGF3YWl0IHBhZ2U7XG4gICAgY29uc3QgeyBuZXh0IH0gPSBkYXRhO1xuXG4gICAgaWYgKGh0bWwpIHtcbiAgICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JhcmJhanMvYmFyYmEvaXNzdWVzLzM2MlxuICAgICAgLy8gY29uc3QgbmV4dERvY3VtZW50ID0gZG9tLnRvRG9jdW1lbnQoaHRtbCk7XG4gICAgICBjb25zdCBuZXh0RG9jdW1lbnQgPSBkb20udG9FbGVtZW50KGh0bWwpO1xuXG4gICAgICBuZXh0Lm5hbWVzcGFjZSA9IGRvbS5nZXROYW1lc3BhY2UobmV4dERvY3VtZW50KTtcbiAgICAgIG5leHQuY29udGFpbmVyID0gZG9tLmdldENvbnRhaW5lcihuZXh0RG9jdW1lbnQpO1xuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJiYWpzL2JhcmJhL2lzc3Vlcy8zNjJcbiAgICAgIC8vIG5leHQuaHRtbCA9IGRvbS5nZXRIdG1sKG5leHREb2N1bWVudCk7XG4gICAgICAvLyBuZXh0Lmh0bWwgPSBuZXh0RG9jdW1lbnQuaW5uZXJIVE1MO1xuICAgICAgbmV4dC5odG1sID0gaHRtbDtcblxuICAgICAgLy8gVXBkYXRlIGhpc3RvcnkgbmFtZXNwYWNlIChub3QgYXZhaWxhYmxlIHdoZW4gaW5pdGlhbGx5IHNldClcbiAgICAgIGhpc3RvcnkudXBkYXRlKHsgbnM6IG5leHQubmFtZXNwYWNlIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgdGl0bGUuXG4gICAgICBjb25zdCB7IHRpdGxlIH0gPSBkb20udG9Eb2N1bWVudChodG1sKTtcblxuICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogTmV4dCB0aWNrXG4gKi9cbmV4cG9ydCBjb25zdCBuZXh0VGljayA9ICgpID0+XG4gIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzb2x2ZSk7XG4gICAgLy8gREVWOiBzYW1lIHJlc3VsdD9cbiAgICAvLyBzZXRUaW1lb3V0KHJlc29sdmUsIDApO1xuICB9KTtcblxuLyoqXG4gKiBUdXJuIGEgcm91dGUgc3RyaW5nIHN1Y2ggYXMgYC91c2VyLzpuYW1lYCBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIFVzZWQgZm9yOlxuICpcbiAqIC0gcm91dGVzIHRvIGlnbm9yZVxuICogLSByb3V0ZSB0cmFuc2l0aW9uIHJlc29sdXRpb25cbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3BhdGgtdG8tcmVnZXhwXG4gKi9cbmNvbnN0IHBhdGhUb1JlZ2V4cCA9IHB0cjtcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH07XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL3V0aWxzL3VybFxuICogPGJyPjxicj5cbiAqICMjIFVSTCB1dGlscy5cbiAqXG4gKiAtIENvbGxlY3QgYW5kIHN0cnVjdHVyZSBpbmZvcm1hdGlvbnMgZnJvbSBVUkxzXG4gKlxuICogQG1vZHVsZSBjb3JlL3V0aWxzL3VybFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJR2VuZXJpY09iamVjdCwgSVVybEJhc2UgfSBmcm9tICcuLi9kZWZzJztcblxuLyoqXG4gKiBHZXQgbG9jYXRpb24gaHJlZi5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEhyZWYgPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuLyoqXG4gKiBHZXQgbG9jYXRpb24gb3JpZ2luLlxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JpZ2luID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcblxuLyoqXG4gKiBHZXQgcG9ydCBiYXNlZCBvbiBVUkwgb3IgbG9jYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQb3J0ID0gKHVybDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWYpID0+IHBhcnNlKHVybCkucG9ydDtcblxuLyoqXG4gKiBHZXQgcGF0aCBmcm9tIFVSTC5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFBhdGggPSAodXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZikgPT4gcGFyc2UodXJsKS5wYXRoO1xuXG4vKipcbiAqIEdldCBxdWVyeSBvYmplY3QgZnJvbSBVUkwuXG4gKi9cbi8vIGV4cG9ydCBjb25zdCBnZXRRdWVyeSA9ICh1cmw6IHN0cmluZyk6IElHZW5lcmljT2JqZWN0ID0+IHBhcnNlKHVybCkucXVlcnk7XG5cbi8qKlxuICogR2V0IGhhc2ggZnJvbSBVUkwuXG4gKi9cbi8vIGV4cG9ydCBjb25zdCBnZXRIYXNoID0gKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHBhcnNlKHVybCkuaGFzaDtcblxuLyoqXG4gKiBQYXJzZSBVUkwgZm9yIHBhdGgsIHF1ZXJ5IGFuZCBoYXNoIGFuZCBtb3JlLlxuICovXG5leHBvcnQgY29uc3QgcGFyc2UgPSAodXJsOiBzdHJpbmcpOiBJVXJsQmFzZSA9PiB7XG4gIC8vIFBvcnRcbiAgbGV0IHBvcnQ7XG4gIGNvbnN0IG1hdGNoZXMgPSB1cmwubWF0Y2goLzpcXGQrLyk7XG5cbiAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICBpZiAoL15odHRwLy50ZXN0KHVybCkpIHtcbiAgICAgIHBvcnQgPSA4MDtcbiAgICB9XG5cbiAgICBpZiAoL15odHRwcy8udGVzdCh1cmwpKSB7XG4gICAgICBwb3J0ID0gNDQzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwb3J0U3RyaW5nID0gbWF0Y2hlc1swXS5zdWJzdHJpbmcoMSk7XG5cbiAgICBwb3J0ID0gcGFyc2VJbnQocG9ydFN0cmluZywgMTApO1xuICB9XG5cbiAgLy8gUGF0aFxuICBsZXQgcGF0aCA9IHVybC5yZXBsYWNlKGdldE9yaWdpbigpLCAnJyk7XG4gIGxldCBoYXNoO1xuICBsZXQgcXVlcnkgPSB7fTtcblxuICAvLyBIYXNoXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuXG4gIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgIGhhc2ggPSBwYXRoLnNsaWNlKGhhc2hJbmRleCArIDEpO1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICAvLyBRdWVyeVxuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG5cbiAgaWYgKHF1ZXJ5SW5kZXggPj0gMCkge1xuICAgIHF1ZXJ5ID0gcGFyc2VRdWVyeShwYXRoLnNsaWNlKHF1ZXJ5SW5kZXggKyAxKSk7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgcXVlcnlJbmRleCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhc2gsXG4gICAgcGF0aCxcbiAgICBwb3J0LFxuICAgIHF1ZXJ5LFxuICB9O1xufTtcblxuLyoqXG4gKiBQYXJzZSBhIHF1ZXJ5IHN0cmluZyB0byBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZVF1ZXJ5ID0gKHN0cjogc3RyaW5nKSA9PlxuICBzdHIuc3BsaXQoJyYnKS5yZWR1Y2UoKGFjYzogSUdlbmVyaWNPYmplY3QsIGVsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbC5zcGxpdCgnPScpO1xuXG4gICAgYWNjW2tleV0gPSB2YWx1ZTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuLyoqXG4gKiBDbGVhbiBVUkwsIHJlbW92ZSBcImhhc2hcIiBhbmQvb3IgXCJ0cmFpbGluZyBzbGFzaFwiLlxuICovXG5leHBvcnQgY29uc3QgY2xlYW4gPSAodXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZikgPT5cbiAgdXJsLnJlcGxhY2UoLyhcXC8jLip8XFwvfCMuKikkLywgJycpO1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS91dGlscy9yZXF1ZXN0XG4gKiA8YnI+PGJyPlxuICogIyMgRmV0Y2ggcGFnZXMgZm9yIHRyYW5zaXRpb25zLlxuICpcbiAqIC0gSW5jbHVkZXMgdGltZW91dFxuICogLSBVc2VzIEZldGNoIEFQSVxuICogLSBIYW5kbGVzIGVycm9yc1xuICpcbiAqIEBtb2R1bGUgY29yZS91dGlscy9yZXF1ZXN0XG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IFJlcXVlc3RFcnJvciB9IGZyb20gJy4uL2RlZnMnO1xuXG4vKipcbiAqIEluaXQgYSBwYWdlIHJlcXVlc3QuXG4gKiBGZXRjaCB0aGUgcGFnZSBhbmQgcmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdGV4dCBjb250ZW50LlxuICovXG5mdW5jdGlvbiByZXF1ZXN0KFxuICB1cmw6IHN0cmluZyxcbiAgdHRsOiBudW1iZXIgPSAyZTMsXG4gIHJlcXVlc3RFcnJvcjogUmVxdWVzdEVycm9yXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSBlbHNlIGlmICh4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgLy8gSFRUUCBjb2RlIGlzIG5vdCAyMDAsIHJlamVjdCB3aXRoIHJlc3BvbnNlLlxuICAgICAgICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVxdWVzdEVycm9yKHVybCwgcmVzKTtcbiAgICAgICAgICByZWplY3QocmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihgVGltZW91dCBlcnJvciBbJHt0dGx9XWApO1xuICAgICAgcmVxdWVzdEVycm9yKHVybCwgZXJyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH07XG4gICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYEZldGNoIGVycm9yYCk7XG4gICAgICByZXF1ZXN0RXJyb3IodXJsLCBlcnIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfTtcblxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgIHhoci50aW1lb3V0ID0gdHRsO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgJ0FjY2VwdCcsXG4gICAgICAndGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWwnXG4gICAgKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcigneC1iYXJiYScsICd5ZXMnKTtcbiAgICB4aHIuc2VuZCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcmVxdWVzdCB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBpc1Byb21pc2U7XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG4iLCJpbXBvcnQgaXNQcm9taXNlIGZyb20gJ2lzLXByb21pc2UnO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vU0JvdWRyaWFzL3J1bi1hc3luY1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5Bc3luYyhcbiAgZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkIHwgUHJvbWlzZTxhbnk+LFxuICBjdHg6IGFueSA9IHt9XG4pOiAoLi4uYXJnczogYW55W10pID0+IFByb21pc2U8YW55PiB7XG4gIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBsZXQgYXN5bmMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBBZGQgYXN5bmMgdG8gY29udGV4dFxuICAgICAgY3R4LmFzeW5jID0gKCkgPT4ge1xuICAgICAgICBhc3luYyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIChlcnI6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBhbnN3ZXIgPSBmdW5jLmFwcGx5KGN0eCwgYXJncyBhcyBbXSk7XG5cbiAgICAgIGlmICghYXN5bmMpIHtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShhbnN3ZXIpKSB7XG4gICAgICAgICAgKGFuc3dlciBhcyBQcm9taXNlPGFueT4pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGFuc3dlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL2hvb2tzXG4gKiA8YnI+PGJyPlxuICogIyMgSG9va3MgbWFuYWdlci5cbiAqXG4gKiAtIFJlZ2lzdGVyIGFuZCB0cmlnZ2VyIGhvb2tzXG4gKlxuICogSG9va3MgY2FuIGJlIGVhc2lseSByZWdpc3RlcmVkOlxuICpcbiAqIGBgYGpzXG4gKiBob29rcy5sZWF2ZShjYWxsYmFjaywgY29udGV4dCk7XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9ob29rc1xuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBIb29rRnVuY3Rpb24sIEhvb2tNZXRob2RzLCBIb29rc0FsbCB9IGZyb20gJy4vZGVmcyc7XG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL21vZHVsZXMvTG9nZ2VyJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBydW5Bc3luYyB9IGZyb20gJy4vdXRpbHMnO1xuLy8gVHlwZXNcbmludGVyZmFjZSBJSG9va0luZm9zIHtcbiAgY3R4OiBhbnk7XG4gIGZuOiBIb29rRnVuY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBIb29rcyBleHRlbmRzIEhvb2tNZXRob2RzIHtcbiAgLyoqXG4gICAqIEFsbG93IHRoZSB1c2Ugb2YgYGhvb2tzW25hbWVdKGNiLCBjdHgpYC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgLy8gW2tleSBpbiBIb29rc0FsbF0/OiBhbnk7XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoJ0BiYXJiYS9jb3JlJyk7XG4gIC8qKlxuICAgKiBBbGwgYXZhaWxhYmxlIGhvb2tzLlxuICAgKlxuICAgKiBTZWUgW1tIb29rc0FsbF1dXG4gICAqL1xuICAvLyBUT0RPOiBnZXQgaG9va3MgZnJvbSBkZWZzIChEUlkpP1xuICBwdWJsaWMgYWxsOiBIb29rc0FsbFtdID0gW1xuICAgICdyZWFkeScsXG4gICAgJ3BhZ2UnLFxuICAgICdyZXNldCcsXG4gICAgJ2N1cnJlbnRBZGRlZCcsXG4gICAgJ2N1cnJlbnRSZW1vdmVkJyxcbiAgICAnbmV4dEFkZGVkJyxcbiAgICAnbmV4dFJlbW92ZWQnLFxuICAgICdiZWZvcmVPbmNlJyxcbiAgICAnb25jZScsXG4gICAgJ2FmdGVyT25jZScsXG4gICAgJ2JlZm9yZScsXG4gICAgJ2JlZm9yZUxlYXZlJyxcbiAgICAnbGVhdmUnLFxuICAgICdhZnRlckxlYXZlJyxcbiAgICAnYmVmb3JlRW50ZXInLFxuICAgICdlbnRlcicsXG4gICAgJ2FmdGVyRW50ZXInLFxuICAgICdhZnRlcicsXG4gIF07XG4gIC8qKlxuICAgKiBSZWdpc3RlcmVkIGhvb2tzLlxuICAgKlxuICAgKiAtIFVuaXF1ZSBob29rIG5hbWVcbiAgICogLSBBc3NvY2lhdGVkIGRhdGEgc2V0KHMpIChjYWxsYmFjayArIGNvbnRleHQpXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJlZDogTWFwPEhvb2tzQWxsLCBTZXQ8SUhvb2tJbmZvcz4+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyZWQuY2xlYXIoKTtcbiAgICB0aGlzLmFsbC5mb3JFYWNoKGhvb2sgPT4ge1xuICAgICAgaWYgKCF0aGlzW2hvb2tdKSB7XG4gICAgICAgIHRoaXNbaG9va10gPSAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLnJlZ2lzdGVyZWQuaGFzKGhvb2spKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWQuc2V0KGhvb2ssIG5ldyBTZXQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHNldCA9IHRoaXMucmVnaXN0ZXJlZC5nZXQoaG9vayk7XG5cbiAgICAgICAgICBzZXQuYWRkKHtcbiAgICAgICAgICAgIGN0eDogY3R4IHx8IHt9LFxuICAgICAgICAgICAgZm4sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRG8gaG9vay5cbiAgICpcbiAgICogVHJpZ2dlciByZWdpc3RlcmVkIGhvb2tzLlxuICAgKi9cbiAgcHVibGljIGRvKG5hbWU6IEhvb2tzQWxsLCAuLi5hcmdzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWQuaGFzKG5hbWUpKSB7XG4gICAgICAvLyBMZXQncyBzdGFydCBhIGNoYWluIG9mIHByb21pc2VzXG4gICAgICBsZXQgY2hhaW4gPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgICAgdGhpcy5yZWdpc3RlcmVkLmdldChuYW1lKS5mb3JFYWNoKGhvb2sgPT4ge1xuICAgICAgICAvLyBDaGFpbiBhc3luYyBob29rcyBwcm9taXNpZmllZFxuICAgICAgICBjaGFpbiA9IGNoYWluLnRoZW4oKCkgPT4gcnVuQXN5bmMoaG9vay5mbiwgaG9vay5jdHgpKC4uLmFyZ3MpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY2hhaW4uY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgSG9vayBlcnJvciBbJHtuYW1lfV1gKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuYWxsLmZvckVhY2goaG9vayA9PiB7XG4gICAgICBkZWxldGUgdGhpc1tob29rXTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHAsIHByaW50IGF2YWlsYWJsZSBhbmQgcmVnaXN0ZXJlZCBob29rcy5cbiAgICovXG4gIHB1YmxpYyBoZWxwKCk6IHZvaWQge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oYEF2YWlsYWJsZSBob29rczogJHt0aGlzLmFsbC5qb2luKCcsJyl9YCk7XG4gICAgY29uc3QgcmVnaXN0ZXJlZDogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLnJlZ2lzdGVyZWQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gcmVnaXN0ZXJlZC5wdXNoKGtleSkpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oYFJlZ2lzdGVyZWQgaG9va3M6ICR7cmVnaXN0ZXJlZC5qb2luKCcsJyl9YCk7XG4gIH1cbn1cblxuY29uc3QgaG9va3MgPSBuZXcgSG9va3MoKTtcblxuZXhwb3J0IHsgaG9va3MgfTtcbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvbW9kdWxlcy9pZ25vcmVcbiAqIDxicj48YnI+XG4gKiAjIyBNYW5hZ2UgaWdub3JlIG9wdGlvbnMuXG4gKlxuICogLSBjYWNoZVxuICogLSBwcmVmZXRjaFxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL2lnbm9yZVxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJZ25vcmVPcHRpb24gfSBmcm9tICcuLi9kZWZzJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBwYXRoVG9SZWdleHAgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi4vdXRpbHMvdXJsJztcblxuZXhwb3J0IGNsYXNzIElnbm9yZSB7XG4gIHByaXZhdGUgX2lnbm9yZUFsbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaWdub3JlUmVnZXhlczogUmVnRXhwW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihpZ25vcmU6IElnbm9yZU9wdGlvbikge1xuICAgIGlmICh0eXBlb2YgaWdub3JlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuX2lnbm9yZUFsbCA9IGlnbm9yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGF0aHMgPSBBcnJheS5pc0FycmF5KGlnbm9yZSkgPyBpZ25vcmUgOiBbaWdub3JlXTtcblxuICAgICAgdGhpcy5faWdub3JlUmVnZXhlcyA9IHBhdGhzLm1hcChwID0+IHBhdGhUb1JlZ2V4cChwKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNoZWNrSHJlZihocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2lnbm9yZUFsbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdGhpcy5faWdub3JlQWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aCB9ID0gcGFyc2UoaHJlZik7XG5cbiAgICByZXR1cm4gdGhpcy5faWdub3JlUmVnZXhlcy5zb21lKHJlZ2V4ID0+IHJlZ2V4LmV4ZWMocGF0aCkgIT09IG51bGwpO1xuICB9XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvY2FjaGVcbiAqIDxicj48YnI+XG4gKiAjIyBDYWNoZSBmb3Igc3RvcmluZyBVUkwgLyBIVE1MLlxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL2NhY2hlXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IENhY2hlQWN0aW9uLCBDYWNoZVJlcXVlc3QsIElDYWNoZURhdGEsIElnbm9yZU9wdGlvbiB9IGZyb20gJy4uL2RlZnMnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgSWdub3JlIH0gZnJvbSAnLi9JZ25vcmUnO1xuXG5leHBvcnQgY2xhc3MgQ2FjaGUgZXh0ZW5kcyBJZ25vcmUge1xuICBwcml2YXRlIF9zdGF0ZTogTWFwPHN0cmluZywgSUNhY2hlRGF0YT4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoaWdub3JlOiBJZ25vcmVPcHRpb24pIHtcbiAgICBzdXBlcihpZ25vcmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2YWx1ZSB0byBjYWNoZVxuICAgKi9cbiAgcHVibGljIHNldChcbiAgICBocmVmOiBzdHJpbmcsXG4gICAgcmVxdWVzdDogQ2FjaGVSZXF1ZXN0LFxuICAgIGFjdGlvbjogQ2FjaGVBY3Rpb25cbiAgKTogSUNhY2hlRGF0YSB7XG4gICAgdGhpcy5fc3RhdGUuc2V0KGhyZWYsIHtcbiAgICAgIGFjdGlvbixcbiAgICAgIHJlcXVlc3QsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uLFxuICAgICAgcmVxdWVzdCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIGZyb20gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBnZXQoaHJlZjogc3RyaW5nKTogSUNhY2hlRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmdldChocmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVxdWVzdCBmcm9tIGNhY2hlXG4gICAqL1xuICBwdWJsaWMgZ2V0UmVxdWVzdChocmVmOiBzdHJpbmcpOiBDYWNoZVJlcXVlc3Qge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQoaHJlZikucmVxdWVzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWN0aW9uIGZyb20gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBnZXRBY3Rpb24oaHJlZjogc3RyaW5nKTogQ2FjaGVBY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQoaHJlZikuYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHZhbHVlIGV4aXN0cyBpbnRvIGNhY2hlXG4gICAqL1xuICBwdWJsaWMgaGFzKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMuY2hlY2tIcmVmKGhyZWYpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5oYXMoaHJlZik7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHZhbHVlIGZyb20gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBkZWxldGUoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmRlbGV0ZShocmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY2FjaGUgdmFsdWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoaHJlZjogc3RyaW5nLCBkYXRhOiBJQ2FjaGVEYXRhKTogSUNhY2hlRGF0YSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAuLi50aGlzLl9zdGF0ZS5nZXQoaHJlZiksXG4gICAgICAuLi5kYXRhLFxuICAgIH07XG4gICAgdGhpcy5fc3RhdGUuc2V0KGhyZWYsIHN0YXRlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL3ByZXZlbnRcbiAqIDxicj48YnI+XG4gKiAjIyBQcmV2ZW50IGNoZWNrcy5cbiAqXG4gKiAtIEdhdGhlcnMgYWxsIHRoZSB0ZXN0cyB0aGF0IGFsbG93IEJhcmJhIHRvIHdvcmsgYW5kIHBsYXkgdHJhbnNpdGlvbnNcbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9wcmV2ZW50XG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElnbm9yZU9wdGlvbiwgTGluaywgUHJldmVudENoZWNrIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBTY2hlbWFzXG5pbXBvcnQgeyBzY2hlbWFBdHRyaWJ1dGUgfSBmcm9tICcuLi9zY2hlbWFzL2F0dHJpYnV0ZSc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgdXJsIH0gZnJvbSAnLi4vdXRpbHMnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgSWdub3JlIH0gZnJvbSAnLi9JZ25vcmUnO1xuXG4vKipcbiAqIE1ha2Ugc3VyZSB0aGUgYnJvd3NlciBzdXBwb3J0cyBgaGlzdG9yeS5wdXNoU3RhdGVgLlxuICovXG5jb25zdCBwdXNoU3RhdGU6IFByZXZlbnRDaGVjayA9ICgpID0+ICF3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbi8qKlxuICogTWFrZSBzdXJlIHRoZXJlIGlzIGFuIGBlbGAgYW5kIGBocmVmYC5cbiAqL1xuY29uc3QgZXhpc3RzOiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCwgaHJlZiB9KSA9PiAhZWwgfHwgIWhyZWY7XG5cbi8qKlxuICogSWYgdGhlIHVzZXIgaXMgcHJlc3NpbmcgY3RybCArIGNsaWNrLCB0aGUgYnJvd3NlciB3aWxsIG9wZW4gYSBuZXcgdGFiLlxuICovXG5jb25zdCBuZXdUYWI6IFByZXZlbnRDaGVjayA9ICh7IGV2ZW50IH0pID0+XG4gIChldmVudCBhcyBLZXlib2FyZEV2ZW50KS53aGljaCA+IDEgfHxcbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLm1ldGFLZXkgfHxcbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmN0cmxLZXkgfHxcbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLnNoaWZ0S2V5IHx8XG4gIChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5hbHRLZXk7XG5cbi8qKlxuICogSWYgdGhlIGxpbmsgaGFzIGBfYmxhbmtgIHRhcmdldC5cbiAqL1xuY29uc3QgYmxhbms6IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gIGVsLmhhc0F0dHJpYnV0ZSgndGFyZ2V0JykgJiYgKGVsIGFzIExpbmspLnRhcmdldCA9PT0gJ19ibGFuayc7XG5cbi8qKlxuICogSWYgdGhlIGRvbWFpbiBpcyB0aGUgc2FtZSAoaW4gb3JkZXIgdG8gYXZvaWQgcHVzaFN0YXRlIGNyb3NzIG9yaWdpbiBzZWN1cml0eSBwcm9ibGVtKS5cbiAqIE5vdGU6IFNWR0FFbGVtZW50IGRvIG5vdCBoYXZlIGBwcm90b2NvbGAgbmVpdGhlciBgaG9zdG5hbWVgIHByb3BlcnRpZXMuXG4gKi9cbmNvbnN0IGNvcnNEb21haW46IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gICgoZWwgYXMgSFRNTEFuY2hvckVsZW1lbnQpLnByb3RvY29sICE9PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT09IChlbCBhcyBIVE1MQW5jaG9yRWxlbWVudCkucHJvdG9jb2wpIHx8XG4gICgoZWwgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhvc3RuYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgIT09IChlbCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaG9zdG5hbWUpO1xuXG4vKipcbiAqIElmIHRoZSBwb3J0IGlzIHRoZSBzYW1lLlxuICogTm90ZTogU1ZHQUVsZW1lbnQgZG8gbm90IGhhdmUgYHBvcnRgIHByb3BlcnR5LlxuICovXG5jb25zdCBjb3JzUG9ydDogUHJldmVudENoZWNrID0gKHsgZWwgfSkgPT5cbiAgKGVsIGFzIEhUTUxBbmNob3JFbGVtZW50KS5wb3J0ICE9PSB1bmRlZmluZWQgJiZcbiAgdXJsLmdldFBvcnQoKSAhPT0gdXJsLmdldFBvcnQoKGVsIGFzIEhUTUxBbmNob3JFbGVtZW50KS5ocmVmKTtcblxuLyoqXG4gKiBJZiB0aGUgbGluayBoYXMgZG93bmxvYWQgYXR0cmlidXRlLlxuICovXG5jb25zdCBkb3dubG9hZDogUHJldmVudENoZWNrID0gKHsgZWwgfSkgPT5cbiAgZWwuZ2V0QXR0cmlidXRlICYmIHR5cGVvZiBlbC5nZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJykgPT09ICdzdHJpbmcnO1xuXG4vKipcbiAqIElmIHRoZSBsaW5rcyBjb250YWlucyBbZGF0YS1iYXJiYS1wcmV2ZW50XSBvciBbZGF0YS1iYXJiYS1wcmV2ZW50PVwic2VsZlwiXS5cbiAqL1xuY29uc3QgcHJldmVudFNlbGY6IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gIGVsLmhhc0F0dHJpYnV0ZShgJHtzY2hlbWFBdHRyaWJ1dGUucHJlZml4fS0ke3NjaGVtYUF0dHJpYnV0ZS5wcmV2ZW50fWApO1xuXG4vKipcbiAqIElmIHNvbWUgbGluayBhbmNlc3RvciBjb250YWlucyBbZGF0YS1iYXJiYS1wcmV2ZW50PVwiYWxsXCJdLlxuICovXG5jb25zdCBwcmV2ZW50QWxsOiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCB9KSA9PlxuICBCb29sZWFuKFxuICAgIGVsLmNsb3Nlc3QoYFske3NjaGVtYUF0dHJpYnV0ZS5wcmVmaXh9LSR7c2NoZW1hQXR0cmlidXRlLnByZXZlbnR9PVwiYWxsXCJdYClcbiAgKTtcblxuLyoqXG4gKiBJZiB0aGUgbGluayBpcyB0aGUgY3VycmVudCBVUkwuXG4gKlxuICogPiBOb3QgaW4gdGhlIHRlc3Qgc3VpdGUuXG4gKi9cbmNvbnN0IHNhbWVVcmw6IFByZXZlbnRDaGVjayA9ICh7IGhyZWYgfSkgPT5cbiAgdXJsLmNsZWFuKGhyZWYpID09PSB1cmwuY2xlYW4oKSAmJiB1cmwuZ2V0UG9ydChocmVmKSA9PT0gdXJsLmdldFBvcnQoKTtcblxuZXhwb3J0IGNsYXNzIFByZXZlbnQgZXh0ZW5kcyBJZ25vcmUge1xuICBwdWJsaWMgc3VpdGU6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyB0ZXN0czogTWFwPHN0cmluZywgUHJldmVudENoZWNrPiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihpZ25vcmU6IElnbm9yZU9wdGlvbikge1xuICAgIHN1cGVyKGlnbm9yZSk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAvLyBBZGQgZGVmYXVsdHNcbiAgICB0aGlzLmFkZCgncHVzaFN0YXRlJywgcHVzaFN0YXRlKTtcbiAgICB0aGlzLmFkZCgnZXhpc3RzJywgZXhpc3RzKTtcbiAgICB0aGlzLmFkZCgnbmV3VGFiJywgbmV3VGFiKTtcbiAgICB0aGlzLmFkZCgnYmxhbmsnLCBibGFuayk7XG4gICAgdGhpcy5hZGQoJ2NvcnNEb21haW4nLCBjb3JzRG9tYWluKTtcbiAgICB0aGlzLmFkZCgnY29yc1BvcnQnLCBjb3JzUG9ydCk7XG4gICAgdGhpcy5hZGQoJ2Rvd25sb2FkJywgZG93bmxvYWQpO1xuICAgIHRoaXMuYWRkKCdwcmV2ZW50U2VsZicsIHByZXZlbnRTZWxmKTtcbiAgICB0aGlzLmFkZCgncHJldmVudEFsbCcsIHByZXZlbnRBbGwpO1xuXG4gICAgLy8gT3V0c2lkZSBvZiB0aGUgdGVzdCBzdWl0ZVxuICAgIHRoaXMuYWRkKCdzYW1lVXJsJywgc2FtZVVybCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGFkZChuYW1lOiBzdHJpbmcsIGNoZWNrOiBQcmV2ZW50Q2hlY2ssIHN1aXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMudGVzdHMuc2V0KG5hbWUsIGNoZWNrKTtcbiAgICBzdWl0ZSAmJiB0aGlzLnN1aXRlLnB1c2gobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIGluZGl2aWR1YWwgdGVzdFxuICAgKi9cbiAgcHVibGljIHJ1bihuYW1lOiBzdHJpbmcsIGVsOiBMaW5rLCBldmVudDogRXZlbnQsIGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRlc3RzLmdldChuYW1lKSh7XG4gICAgICBlbCxcbiAgICAgIGV2ZW50LFxuICAgICAgaHJlZixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gdGVzdCBzdWl0ZVxuICAgKi9cbiAgcHVibGljIGNoZWNrTGluayhlbDogTGluaywgZXZlbnQ6IEV2ZW50LCBocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdWl0ZS5zb21lKG5hbWUgPT4gdGhpcy5ydW4obmFtZSwgZWwsIGV2ZW50LCBocmVmKSk7XG4gIH1cbn1cbiIsIi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yXG5leHBvcnQgY2xhc3MgQmFyYmFFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVycm9yOiBFcnJvcixcbiAgICBwdWJsaWMgbGFiZWwgPSAnQmFyYmEgZXJyb3InLFxuICAgIC4uLnBhcmFtczogYW55W11cbiAgKSB7XG4gICAgLy8gUGFzcyByZW1haW5pbmcgYXJndW1lbnRzIChpbmNsdWRpbmcgdmVuZG9yIHNwZWNpZmljIG9uZXMpIHRvIHBhcmVudCBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKC4uLnBhcmFtcyk7XG5cbiAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93biAob25seSBhdmFpbGFibGUgb24gVjgpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEJhcmJhRXJyb3IpO1xuICAgIH1cblxuICAgIHRoaXMubmFtZSA9ICdCYXJiYUVycm9yJztcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL3N0b3JlXG4gKiA8YnI+PGJyPlxuICogIyMgVHJhbnNpdGlvbnMgc3RvcmUuXG4gKlxuICogLSBSZXNvbHZlIHRyYW5zaXRpb25cbiAqIC0gTWFuYWdlIHJ1bGVzXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvc3RvcmVcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHtcbiAgSVJ1bGUsXG4gIElSdWxlcyxcbiAgSVRyYW5zaXRpb25EYXRhLFxuICBJVHJhbnNpdGlvbkZpbHRlcnMsXG4gIElUcmFuc2l0aW9uT25jZSxcbiAgSVRyYW5zaXRpb25QYWdlLFxuICBSdWxlTmFtZSxcbn0gZnJvbSAnLi4vZGVmcyc7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vTG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcignQGJhcmJhL2NvcmUnKTtcbiAgLyoqXG4gICAqIEFsbCByZWdpc3RlcmVkIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgcHVibGljIGFsbDogSVRyYW5zaXRpb25QYWdlW10gPSBbXTtcbiAgLyoqXG4gICAqIFwiUGFnZSBvbmx5XCIgcmVnaXN0ZXJlZCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBwYWdlOiBJVHJhbnNpdGlvblBhZ2VbXSA9IFtdO1xuICAvKipcbiAgICogXCJPbmNlIG9ubHlcIiByZWdpc3RlcmVkIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgcHVibGljIG9uY2U6IElUcmFuc2l0aW9uT25jZVtdID0gW107XG4gIC8qKlxuICAgKiBSdWxlcyBmb3IgdHJhbnNpdGlvbiByZXNvbHV0aW9uLlxuICAgKlxuICAgKiBEZWZhdWx0czpcbiAgICpcbiAgICogLSBuYW1lc3BhY2VcbiAgICogLSBjdXN0b21cbiAgICovXG4gIHByaXZhdGUgX3J1bGVzOiBJUnVsZVtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICduYW1lc3BhY2UnLFxuICAgICAgdHlwZTogJ3N0cmluZ3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2N1c3RvbScsXG4gICAgICB0eXBlOiAnZnVuY3Rpb24nLFxuICAgIH0sXG4gIF07XG5cbiAgLyoqXG4gICAqIEluaXQgc3RvcmUuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0cmFuc2l0aW9uczogSVRyYW5zaXRpb25QYWdlW10gPSBbXSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRyYW5zaXRpb25zKSB7XG4gICAgICAvLyBUT0RPOiBhZGQgY2hlY2sgZm9yIHZhbGlkIHRyYW5zaXRpb25zPyBjcml0ZXJpYT8gKG9uY2UgfHwgZW50ZXIgJiYgbGVhdmUpXG4gICAgICB0aGlzLmFsbCA9IHRoaXMuYWxsLmNvbmNhdCh0cmFuc2l0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHJ1bGUgb3IgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhZGQodHlwZTogJ3J1bGUnIHwgJ3RyYW5zaXRpb24nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3J1bGUnOlxuICAgICAgICAvLyBUT0RPOiBjaGVjayBmb3IgdmFsaWQgcnVsZVxuICAgICAgICB0aGlzLl9ydWxlcy5zcGxpY2UoZGF0YS5wb3NpdGlvbiB8fCAwLCAwLCBkYXRhLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0cmFuc2l0aW9uJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIFRPRE86IGNoZWNrIGZvciB2YWxpZCB0cmFuc2l0aW9uXG4gICAgICAgIHRoaXMuYWxsLnB1c2goZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIHJlc29sdmUoXG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhLFxuICAgIGZpbHRlcnM6IElUcmFuc2l0aW9uRmlsdGVycyA9IHt9XG4gICk6IElUcmFuc2l0aW9uT25jZSB8IElUcmFuc2l0aW9uUGFnZSB7XG4gICAgLy8gRmlsdGVyIG9uIFwib25jZVwiXG4gICAgbGV0IHRyYW5zaXRpb25zID0gZmlsdGVycy5vbmNlID8gdGhpcy5vbmNlIDogdGhpcy5wYWdlO1xuXG4gICAgLy8gRmlsdGVyIG9uIFwic2VsZlwiXG4gICAgaWYgKGZpbHRlcnMuc2VsZikge1xuICAgICAgdHJhbnNpdGlvbnMgPSB0cmFuc2l0aW9ucy5maWx0ZXIodCA9PiB0Lm5hbWUgJiYgdC5uYW1lID09PSAnc2VsZicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9ucyA9IHRyYW5zaXRpb25zLmZpbHRlcih0ID0+ICF0Lm5hbWUgfHwgdC5uYW1lICE9PSAnc2VsZicpO1xuICAgIH1cblxuICAgIC8vIEFsbCBtYXRjaGluZyB0cmFuc2l0aW9uIGluZm9zXG4gICAgY29uc3QgbWF0Y2hpbmcgPSBuZXcgTWFwKCk7XG5cbiAgICAvLyBBY3RpdmUgPSBmaXJzdCBvZiB2YWxpZCB0cmFuc2l0aW9uc1xuICAgIC8vIHNvcnRlZCBieSBkaXJlY3Rpb25zIChmcm9tL3RvLCBmcm9tIHx8IHRvLCDigKYpXG4gICAgY29uc3QgYWN0aXZlID0gdHJhbnNpdGlvbnMuZmluZCh0ID0+IHtcbiAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICBjb25zdCBtYXRjaCA9IHt9O1xuXG4gICAgICBpZiAoZmlsdGVycy5zZWxmICYmIHQubmFtZSA9PT0gJ3NlbGYnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBydWxlc1xuICAgICAgdGhpcy5fcnVsZXMucmV2ZXJzZSgpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgIHZhbGlkID0gdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gpO1xuICAgICAgICAgIC8vIEZyb20vdG8gY2hlY2tcbiAgICAgICAgICBpZiAodC5mcm9tICYmIHQudG8pIHtcbiAgICAgICAgICAgIHZhbGlkID1cbiAgICAgICAgICAgICAgdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gsICdmcm9tJykgJiZcbiAgICAgICAgICAgICAgdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gsICd0bycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodC5mcm9tICYmICF0LnRvKSB7XG4gICAgICAgICAgICB2YWxpZCA9IHRoaXMuX2NoZWNrKHQsIHJ1bGUsIGRhdGEsIG1hdGNoLCAnZnJvbScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXQuZnJvbSAmJiB0LnRvKSB7XG4gICAgICAgICAgICB2YWxpZCA9IHRoaXMuX2NoZWNrKHQsIHJ1bGUsIGRhdGEsIG1hdGNoLCAndG8nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtYXRjaGluZy5zZXQodCwgbWF0Y2gpO1xuXG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY3RpdmVNYXRjaCA9IG1hdGNoaW5nLmdldChhY3RpdmUpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25UeXBlID0gW107XG4gICAgaWYgKGZpbHRlcnMub25jZSkge1xuICAgICAgdHJhbnNpdGlvblR5cGUucHVzaCgnb25jZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uVHlwZS5wdXNoKCdwYWdlJyk7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJzLnNlbGYpIHtcbiAgICAgIHRyYW5zaXRpb25UeXBlLnB1c2goJ3NlbGYnKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlTWF0Y2gpIHtcbiAgICAgIC8vIExvZyByZXNvbHZlZCB0cmFuc2l0aW9uXG4gICAgICBjb25zdCBpbmZvczogYW55W10gPSBbYWN0aXZlXTtcbiAgICAgIC8vIExvZyBpZiBtYXRjaGluZyBjcml0ZXJpYVxuICAgICAgT2JqZWN0LmtleXMoYWN0aXZlTWF0Y2gpLmxlbmd0aCA+IDAgJiYgaW5mb3MucHVzaChhY3RpdmVNYXRjaCk7XG5cbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgIGBUcmFuc2l0aW9uIGZvdW5kIFske3RyYW5zaXRpb25UeXBlLmpvaW4oJywnKX1dYCxcbiAgICAgICAgLi4uaW5mb3NcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oYE5vIHRyYW5zaXRpb24gZm91bmQgWyR7dHJhbnNpdGlvblR5cGUuam9pbignLCcpfV1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBVcGRhdGUgc3RvcmUuXG4gICAqXG4gICAqIC0gUmVvcmRlciB0cmFuc2l0aW9uIGJ5IHByaW9yaXRpZXNcbiAgICogLSBHZXQgd2FpdCBpbmRpY2F0b3JcbiAgICogLSBHZXQgb25jZSB0cmFuc2l0aW9uc1xuICAgKi9cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAvLyBSZW9yZGVyIGJ5IHByaW9yaXRpZXNcbiAgICB0aGlzLmFsbCA9IHRoaXMuYWxsXG4gICAgICAubWFwKHQgPT4gdGhpcy5fYWRkUHJpb3JpdHkodCkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAubWFwKHQgPT4ge1xuICAgICAgICBkZWxldGUgdC5wcmlvcml0eTtcblxuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH0pO1xuICAgIHRoaXMucGFnZSA9IHRoaXMuYWxsLmZpbHRlcihcbiAgICAgIHQgPT4gdC5sZWF2ZSAhPT0gdW5kZWZpbmVkIHx8IHQuZW50ZXIgIT09IHVuZGVmaW5lZFxuICAgICkgYXMgSVRyYW5zaXRpb25QYWdlW107XG4gICAgdGhpcy5vbmNlID0gdGhpcy5hbGwuZmlsdGVyKHQgPT4gdC5vbmNlICE9PSB1bmRlZmluZWQpIGFzIElUcmFuc2l0aW9uT25jZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBDaGVjayBpZiB0cmFuc2l0aW9uIGFwcGx5LlxuICAgKlxuICAgKiBCYXNlZCBvbiBydWxlLCBwYWdlIGRhdGEgYW5kIG9wdGlvbmFsIGRpcmVjdGlvbjpcbiAgICpcbiAgICogMS4gdHJhbnNpdGlvbiBoYXMgbm8gcnVsZSBcInByb3BlcnR5XCI6XG4gICAqICAgIC0gYWx3YXlzIHJldHVybnMgdHJ1ZVxuICAgKiAyLiB0cmFuc2l0aW9uIGhhcyBydWxlIFwicHJvcGVydHlcIjpcbiAgICogICAgIC0gXCJzdHJpbmdzXCIgc2hvdWxkIGJlIHByZXNlbnQgb24gYm90aCBzaWRlICh0cmFuc2l0aW9uICsgcGFnZSkgYW5kIG1hdGNoXG4gICAqICAgICAtIFwiZnVuY3Rpb25cIiBzaG91bGQgcmV0dXJuIHRydWVcbiAgICovXG4gIHByaXZhdGUgX2NoZWNrKFxuICAgIHRyYW5zaXRpb246IElUcmFuc2l0aW9uUGFnZSxcbiAgICBydWxlOiBJUnVsZSxcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGEsXG4gICAgbWF0Y2g6IGFueSxcbiAgICBkaXJlY3Rpb24/OiAnZnJvbScgfCAndG8nXG4gICk6IGJvb2xlYW4ge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBsZXQgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICBjb25zdCB0ID0gdHJhbnNpdGlvbjtcbiAgICBjb25zdCB7IG5hbWUsIHR5cGUgfSA9IHJ1bGU7XG4gICAgY29uc3Qgc3RyUnVsZSA9IG5hbWUgYXMgSVJ1bGVzWydzdHJpbmdzJ107XG4gICAgY29uc3Qgb2JqUnVsZSA9IG5hbWUgYXMgSVJ1bGVzWydvYmplY3QnXTtcbiAgICBjb25zdCBmbk5hbWUgPSBuYW1lIGFzIElSdWxlc1snZnVuY3Rpb24nXTtcbiAgICBjb25zdCBiYXNlID0gZGlyZWN0aW9uID8gdFtkaXJlY3Rpb25dIDogdDsgLy8gPSB0IHx8IHQuZnJvbSB8fCB0LnRvXG4gICAgY29uc3QgcGFnZSA9IGRpcmVjdGlvbiA9PT0gJ3RvJyA/IGRhdGEubmV4dCA6IGRhdGEuY3VycmVudDsgLy8gPSBjdXJyZW50IHx8IG5leHRcbiAgICBjb25zdCBleGlzdCA9IGRpcmVjdGlvbiA/IGJhc2UgJiYgYmFzZVtuYW1lXSA6IGJhc2VbbmFtZV07XG5cbiAgICAvLyBJZiB0cmFuc2l0aW9uIHJ1bGUgZXhpc3RzXG4gICAgaWYgKGV4aXN0KSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5ncyc6XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAvLyBBcnJheSBzdXBwb3J0XG4gICAgICAgICAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gQXJyYXkuaXNBcnJheShiYXNlW3N0clJ1bGVdKVxuICAgICAgICAgICAgPyAoYmFzZVtzdHJSdWxlXSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgIDogW2Jhc2Vbc3RyUnVsZV0gYXMgc3RyaW5nXTtcblxuICAgICAgICAgIC8vIEZvciBtYXRjaGluZywgcHJvcCBzaG91bGQgYmUgcHJlc2VudCBvbiBib3RoIHNpZGVzIGFuZCBtYXRjaFxuICAgICAgICAgIGlmIChwYWdlW3N0clJ1bGVdICYmIG5hbWVzLmluZGV4T2YocGFnZVtzdHJSdWxlXSkgIT09IC0xKSB7XG4gICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIElmIHRyYW5zaXRpb24gcHJvcCBpcyBkaWZmZXJlbnQgZnJvbSBjdXJyZW50LCBub3QgdmFsaWRcbiAgICAgICAgICBpZiAobmFtZXMuaW5kZXhPZihwYWdlW3N0clJ1bGVdKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdvYmplY3QnOiB7XG4gICAgICAgICAgLy8gQXJyYXkgc3VwcG9ydFxuICAgICAgICAgIGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IEFycmF5LmlzQXJyYXkoYmFzZVtvYmpSdWxlXSlcbiAgICAgICAgICAgID8gKGJhc2Vbb2JqUnVsZV0gYXMgc3RyaW5nW10pXG4gICAgICAgICAgICA6IFtiYXNlW29ialJ1bGVdIGFzIHN0cmluZ107XG5cbiAgICAgICAgICAvLyBGb3IgbWF0Y2hpbmcsIHByb3Agc2hvdWxkIGJlIHByZXNlbnQgb24gYm90aCBzaWRlcyBhbmQgbWF0Y2hcbiAgICAgICAgICBpZiAocGFnZVtvYmpSdWxlXSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwYWdlW29ialJ1bGVdLm5hbWUgJiZcbiAgICAgICAgICAgICAgbmFtZXMuaW5kZXhPZihwYWdlW29ialJ1bGVdLm5hbWUpICE9PSAtMVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRyYW5zaXRpb24gcHJvcCBpcyBkaWZmZXJlbnQgZnJvbSBjdXJyZW50LCBub3QgdmFsaWRcbiAgICAgICAgICAgIGlmIChuYW1lcy5pbmRleE9mKHBhZ2Vbb2JqUnVsZV0ubmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICBpZiAoYmFzZVtmbk5hbWVdKGRhdGEpKSB7XG4gICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgbWF0Y2hbZGlyZWN0aW9uXSA9IG1hdGNoW2RpcmVjdGlvbl0gfHwge307XG4gICAgICAgICAgbWF0Y2hbZGlyZWN0aW9uXVtuYW1lXSA9IHRbZGlyZWN0aW9uXVtuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaFtuYW1lXSA9IHRbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgQ2FsY3VsYXRlIHRyYW5zaXRpb24gcHJpb3JpdHkuXG4gICAqXG4gICAqIEJhc2VkIG9uOlxuICAgKlxuICAgKiAtIHJ1bGUgXCJwb3NpdGlvblwiIChpbmRleCkgZ2l2ZSB0ZW5zLCBodW5kcmVkcywgdGhvdXNhbmRzLCDigKZcbiAgICogLSBmcm9tL3RvIHByb3BlcnRpZXMgZ2l2ZSB1bml0cyAoMCwgMSBvciAyKVxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlUHJpb3JpdHkoXG4gICAgdDogSVRyYW5zaXRpb25QYWdlLFxuICAgIHJ1bGVOYW1lOiBSdWxlTmFtZSxcbiAgICBydWxlSW5kZXg6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIGxldCBwcmlvcml0eSA9IDA7XG5cbiAgICBpZiAoXG4gICAgICB0W3J1bGVOYW1lXSB8fFxuICAgICAgKHQuZnJvbSAmJiB0LmZyb21bcnVsZU5hbWVdKSB8fFxuICAgICAgKHQudG8gJiYgdC50b1tydWxlTmFtZV0pXG4gICAgKSB7XG4gICAgICBwcmlvcml0eSArPSBNYXRoLnBvdygxMCwgcnVsZUluZGV4KTtcblxuICAgICAgaWYgKHQuZnJvbSAmJiB0LmZyb21bcnVsZU5hbWVdKSB7XG4gICAgICAgIHByaW9yaXR5ICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAodC50byAmJiB0LnRvW3J1bGVOYW1lXSkge1xuICAgICAgICBwcmlvcml0eSArPSAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZFByaW9yaXR5KHQ6IElUcmFuc2l0aW9uUGFnZSk6IElUcmFuc2l0aW9uUGFnZSB7XG4gICAgdC5wcmlvcml0eSA9IDA7XG4gICAgbGV0IHByaW9yaXR5ID0gMDtcblxuICAgIHRoaXMuX3J1bGVzLmZvckVhY2goKHJ1bGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gcnVsZTtcbiAgICAgIGNvbnN0IGluZGV4ID0gaSArIDE7XG5cbiAgICAgIHByaW9yaXR5ICs9IHRoaXMuX2NhbGN1bGF0ZVByaW9yaXR5KHQsIG5hbWUsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIHQucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIHJldHVybiB0O1xuICB9XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvdHJhbnNpdGlvbnNcbiAqIDxicj48YnI+XG4gKiAjIyBUcmFuc2l0aW9ucyBtYW5hZ2VyLlxuICpcbiAqIC0gSGFuZGxlIGhvb2tzIGFuZCB0cmFuc2l0aW9uIGxpZmVjeWNsZVxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL3RyYW5zaXRpb25zXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7XG4gIEhvb2tzVHJhbnNpdGlvbixcbiAgSG9va3NUcmFuc2l0aW9uTWFwLFxuICBJVHJhbnNpdGlvbkRhdGEsXG4gIElUcmFuc2l0aW9uRmlsdGVycyxcbiAgSVRyYW5zaXRpb25PbmNlLFxuICBJVHJhbnNpdGlvblBhZ2UsXG4gIFdyYXBwZXIsXG59IGZyb20gJy4uL2RlZnMnO1xuLy8gSG9va3NcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vaG9va3MnO1xuLy8gVXRpbHNcbmltcG9ydCB7IGRvbSwgaGVscGVycywgcnVuQXN5bmMgfSBmcm9tICcuLi91dGlscyc7XG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBCYXJiYUVycm9yIH0gZnJvbSAnLi9FcnJvcic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL0xvZ2dlcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vU3RvcmUnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbnMge1xuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCdAYmFyYmEvY29yZScpO1xuICBwdWJsaWMgc3RvcmU6IFN0b3JlO1xuICBwcml2YXRlIF9ydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IodHJhbnNpdGlvbnM6IElUcmFuc2l0aW9uUGFnZVtdID0gW10pIHtcbiAgICB0aGlzLnN0b3JlID0gbmV3IFN0b3JlKHRyYW5zaXRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVzb2x2ZWQgdHJhbnNpdGlvblxuICAgKlxuICAgKiAtIGJhc2VkIG9uIGRhdGFcbiAgICovXG4gIHB1YmxpYyBnZXQoXG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhLFxuICAgIGZpbHRlcnM/OiBJVHJhbnNpdGlvbkZpbHRlcnNcbiAgKTogSVRyYW5zaXRpb25PbmNlIHwgSVRyYW5zaXRpb25QYWdlIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5yZXNvbHZlKGRhdGEsIGZpbHRlcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBydW5uaW5nIHN0YXR1cy5cbiAgICovXG4gIGdldCBpc1J1bm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bm5pbmc7XG4gIH1cbiAgc2V0IGlzUnVubmluZyhzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ydW5uaW5nID0gc3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciByZWdpc3RlcmVkIG9uY2UgdHJhbnNpdGlvbihzKS5cbiAgICovXG4gIGdldCBoYXNPbmNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLm9uY2UubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBmb3IgcmVnaXN0ZXJlZCBzZWxmIHRyYW5zaXRpb24uXG4gICAqL1xuICBnZXQgaGFzU2VsZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5hbGwuc29tZSh0ID0+IHQubmFtZSA9PT0gJ3NlbGYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgV2FpdCBpbmRpY2F0b3IuXG4gICAqXG4gICAqIFRlbGxzIEJhcmJhIHRvIGdldCBuZXh0IHBhZ2UgZGF0YTxicj5cbiAgICogYmVmb3JlIHN0YXJ0aW5nIHRoZSByZXNvbHV0aW9uPGJyPlxuICAgKiBiZWNhdXNlIHNvbWUgcmVnaXN0ZXJlZCB0cmFuc2l0aW9ucyBuZWVkPGJyPlxuICAgKiBuZXh0IHBhZ2UgZGF0YSB0byBiZSByZXNvbHZlZCAoZWc6IGBzeW5jOiB0cnVlYCwgYHRvOiB7IG5hbWVzcGFjZSB9YCwg4oCmKVxuICAgKi9cbiAgZ2V0IHNob3VsZFdhaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuYWxsLnNvbWUodCA9PiAodC50byAmJiAhdC50by5yb3V0ZSkgfHwgdC5zeW5jKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgRG8gXCJvbmNlXCIgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogSG9va3M6IHNlZSBbW0hvb2tzT25jZV1dLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGRvT25jZSh7XG4gICAgZGF0YSxcbiAgICB0cmFuc2l0aW9uLFxuICB9OiB7XG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhO1xuICAgIHRyYW5zaXRpb246IElUcmFuc2l0aW9uT25jZTtcbiAgfSkge1xuICAgIGNvbnN0IHQgPSB0cmFuc2l0aW9uIHx8IHt9O1xuICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdiZWZvcmVPbmNlJywgZGF0YSwgdCk7XG4gICAgICBhd2FpdCB0aGlzLm9uY2UoZGF0YSwgdCk7XG4gICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXJPbmNlJywgZGF0YSwgdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1RyYW5zaXRpb24gZXJyb3IgW2JlZm9yZS9hZnRlci9vbmNlXScpO1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgRG8gXCJwYWdlXCIgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogSG9va3M6IHNlZSBbW0hvb2tzUGFnZV1dLlxuICAgKlxuICAgKiBgc3luYzogZmFsc2VgIChkZWZhdWx0KSBvcmRlcjpcbiAgICpcbiAgICogMS4gYmVmb3JlXG4gICAqIDIuIGJlZm9yZUxlYXZlXG4gICAqIDMuIGxlYXZlXG4gICAqIDQuIGFmdGVyTGVhdmVcbiAgICogNS4gYmVmb3JlRW50ZXJcbiAgICogNi4gZW50ZXJcbiAgICogNy4gYWZ0ZXJFbnRlclxuICAgKiA4LiBhZnRlclxuICAgKlxuICAgKiBgc3luYzogdHJ1ZWAgb3JkZXI6XG4gICAqXG4gICAqIDEuIGJlZm9yZVxuICAgKiAyLiBiZWZvcmVMZWF2ZVxuICAgKiAzLiBiZWZvcmVFbnRlclxuICAgKiA0LiBsZWF2ZSAmIGVudGVyXG4gICAqIDUuIGFmdGVyTGVhdmVcbiAgICogNi4gYWZ0ZXJFbnRlclxuICAgKiA3LiBhZnRlclxuICAgKi9cbiAgcHVibGljIGFzeW5jIGRvUGFnZSh7XG4gICAgZGF0YSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIHBhZ2UsXG4gICAgd3JhcHBlcixcbiAgfToge1xuICAgIGRhdGE6IElUcmFuc2l0aW9uRGF0YTtcbiAgICB0cmFuc2l0aW9uOiBJVHJhbnNpdGlvblBhZ2U7XG4gICAgcGFnZTogUHJvbWlzZTxzdHJpbmcgfCB2b2lkPjtcbiAgICB3cmFwcGVyOiBXcmFwcGVyO1xuICB9KSB7XG4gICAgY29uc3QgdCA9IHRyYW5zaXRpb24gfHwge307XG4gICAgY29uc3Qgc3luYyA9IHQuc3luYyA9PT0gdHJ1ZSB8fCBmYWxzZTtcblxuICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIENoZWNrIHN5bmMgbW9kZSwgd2FpdCBmb3IgbmV4dCBjb250ZW50XG4gICAgICBpZiAoc3luYykge1xuICAgICAgICBhd2FpdCBoZWxwZXJzLnVwZGF0ZShwYWdlLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2JlZm9yZScsIGRhdGEsIHQpO1xuXG4gICAgICBpZiAoc3luYykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYWRkKGRhdGEsIHdyYXBwZXIpO1xuICAgICAgICAgIC8vIEJlZm9yZSBhY3Rpb25zXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2JlZm9yZUxlYXZlJywgZGF0YSwgdCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2JlZm9yZUVudGVyJywgZGF0YSwgdCk7XG5cbiAgICAgICAgICAvLyBBY3Rpb25zXG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMubGVhdmUoZGF0YSwgdCksIHRoaXMuZW50ZXIoZGF0YSwgdCldKTtcblxuICAgICAgICAgIC8vIEFmdGVyIGFjdGlvbnNcbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXJMZWF2ZScsIGRhdGEsIHQpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdhZnRlckVudGVyJywgZGF0YSwgdCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ1RyYW5zaXRpb24gZXJyb3IgW3N5bmNdJyk7XG4gICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25FcnJvcihlcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCYXJiYUVycm9yKGVycm9yLCAnVHJhbnNpdGlvbiBlcnJvciBbc3luY10nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsZWF2ZVJlc3VsdDogYW55ID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBMZWF2ZVxuICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdiZWZvcmVMZWF2ZScsIGRhdGEsIHQpO1xuXG4gICAgICAgICAgbGVhdmVSZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLmxlYXZlKGRhdGEsIHQpLFxuICAgICAgICAgICAgaGVscGVycy51cGRhdGUocGFnZSwgZGF0YSksXG4gICAgICAgICAgXSkudGhlbih2YWx1ZXMgPT4gdmFsdWVzWzBdKTtcblxuICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdhZnRlckxlYXZlJywgZGF0YSwgdCk7XG5cbiAgICAgICAgICAvLyBUT0RPOiBjaGVjayBoZXJlIFwidmFsaWRcIiBwYWdlIHJlc3VsdFxuICAgICAgICAgIC8vIGJlZm9yZSBnb2luZyBmdXJ0aGVyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ1RyYW5zaXRpb24gZXJyb3IgW2JlZm9yZS9hZnRlci9sZWF2ZV0nKTtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbkVycm9yKGVycm9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJhcmJhRXJyb3IoXG4gICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAnVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL2xlYXZlXSdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBFbnRlclxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgaWYgKGxlYXZlUmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGQoZGF0YSwgd3JhcHBlcik7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdiZWZvcmVFbnRlcicsIGRhdGEsIHQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5lbnRlcihkYXRhLCB0LCBsZWF2ZVJlc3VsdCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXJFbnRlcicsIGRhdGEsIHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL2VudGVyXScpO1xuICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFyYmFFcnJvcihcbiAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICdUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvZW50ZXJdJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgY29udGFpZW5yXG4gICAgICBhd2FpdCB0aGlzLnJlbW92ZShkYXRhKTtcblxuICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2FmdGVyJywgZGF0YSwgdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgLy8gSWYgXCJjdXN0b20vc3BlY2lmaWNcIiBiYXJiYSBlcnJvci5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoZXJyb3IubmFtZSAmJiBlcnJvci5uYW1lID09PSAnQmFyYmFFcnJvcicpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoZXJyb3IubGFiZWwpO1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvci5lcnJvcik7XG5cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdUcmFuc2l0aW9uIGVycm9yIFtwYWdlXScpO1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogT25jZSBob29rICsgYXN5bmMgXCJvbmNlXCIgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvbmNlKGRhdGE6IElUcmFuc2l0aW9uRGF0YSwgdDogSVRyYW5zaXRpb25PbmNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgaG9va3MuZG8oJ29uY2UnLCBkYXRhLCB0KTtcblxuICAgIHJldHVybiB0Lm9uY2UgPyBydW5Bc3luYyh0Lm9uY2UsIHQpKGRhdGEpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvKipcbiAgICogTGVhdmUgaG9vayArIGFzeW5jIFwibGVhdmVcIiB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGxlYXZlKGRhdGE6IElUcmFuc2l0aW9uRGF0YSwgdDogSVRyYW5zaXRpb25QYWdlKTogUHJvbWlzZTxhbnk+IHtcbiAgICBhd2FpdCBob29rcy5kbygnbGVhdmUnLCBkYXRhLCB0KTtcblxuICAgIHJldHVybiB0LmxlYXZlID8gcnVuQXN5bmModC5sZWF2ZSwgdCkoZGF0YSkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnRlciBob29rICsgYXN5bmMgXCJlbnRlclwiIHRyYW5zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZW50ZXIoXG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhLFxuICAgIHQ6IElUcmFuc2l0aW9uUGFnZSxcbiAgICBsZWF2ZVJlc3VsdD86IGFueVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBob29rcy5kbygnZW50ZXInLCBkYXRhLCB0KTtcblxuICAgIHJldHVybiB0LmVudGVyXG4gICAgICA/IHJ1bkFzeW5jKHQuZW50ZXIsIHQpKGRhdGEsIGxlYXZlUmVzdWx0KVxuICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV4dCBjb250YWluZXIuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgYWRkKGRhdGE6IElUcmFuc2l0aW9uRGF0YSwgd3JhcHBlcjogV3JhcHBlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIGRvbS5hZGRDb250YWluZXIoZGF0YS5uZXh0LmNvbnRhaW5lciwgd3JhcHBlcik7XG4gICAgaG9va3MuZG8oJ25leHRBZGRlZCcsIGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjdXJyZW50IGNvbnRhaW5lci5cbiAgICovXG4gIHB1YmxpYyBhc3luYyByZW1vdmUoZGF0YTogSVRyYW5zaXRpb25EYXRhKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZG9tLnJlbW92ZUNvbnRhaW5lcihkYXRhLmN1cnJlbnQuY29udGFpbmVyKTtcbiAgICBob29rcy5kbygnY3VycmVudFJlbW92ZWQnLCBkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzVHJhbnNpdGlvbkVycm9yKGVycm9yOiBhbnkpIHtcbiAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xuICAgICAgLy8gRXJyb3JzIGZyb20gcmVxdWVzdFxuICAgICAgcmV0dXJuICEvVGltZW91dCBlcnJvcnxGZXRjaCBlcnJvci8udGVzdChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3Iuc3RhdHVzKSB7XG4gICAgICAvLyBFcnJvcnMgZnJvbSByZXF1ZXN0XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRG8gaG9va3MgKyBhc3luYyB0cmFuc2l0aW9uIG1ldGhvZHMuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9kb0FzeW5jSG9vayhcbiAgICBob29rOiBIb29rc1RyYW5zaXRpb24sXG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhLFxuICAgIHQ6IEhvb2tzVHJhbnNpdGlvbk1hcFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBob29rcy5kbyhob29rLCBkYXRhLCB0KTtcblxuICAgIHJldHVybiB0W2hvb2tdID8gcnVuQXN5bmModFtob29rXSwgdCkoZGF0YSkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL3ZpZXdzXG4gKiA8YnI+PGJyPlxuICogIyMgVmlld3MgbWFuYWdlci5cbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy92aWV3c1xuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBIb29rc1ZpZXcsIElWaWV3LCBJVmlld0RhdGEgfSBmcm9tICcuLi9kZWZzJztcbi8vIEhvb2tzXG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL2hvb2tzJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBydW5Bc3luYyB9IGZyb20gJy4uL3V0aWxzJztcbi8vIFR5cGVzXG50eXBlIEhvb2sgPSAoZGF0YTogSVZpZXdEYXRhKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5leHBvcnQgY2xhc3MgVmlld3Mge1xuICAvKipcbiAgICogQXZhaWxhYmxlIGhvb2sgbmFtZXMgZm9yIHZpZXdzLlxuICAgKi9cbiAgcHVibGljIG5hbWVzOiBIb29rc1ZpZXdbXSA9IFtcbiAgICAnYmVmb3JlTGVhdmUnLFxuICAgICdhZnRlckxlYXZlJyxcbiAgICAnYmVmb3JlRW50ZXInLFxuICAgICdhZnRlckVudGVyJyxcbiAgXTtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyZWQgdmlld3MgYnkgbmFtZXNwYWNlLlxuICAgKi9cbiAgcHVibGljIGJ5TmFtZXNwYWNlOiBNYXA8c3RyaW5nLCBJVmlldz4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIEluaXQgdmlld3MuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2aWV3czogSVZpZXdbXSkge1xuICAgIGlmICh2aWV3cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBhZGQgY2hlY2tcbiAgICAvLyBmb3IgdmFsaWQgdmlld3M/IGNyaXRlcmlhPyAobmFtZXNwYWNlIHByb3BlcnR5LCBzdHJpbmcgPylcbiAgICAvLyBvciBkdXBsaWNhdGVcbiAgICB2aWV3cy5mb3JFYWNoKHZpZXcgPT4ge1xuICAgICAgdGhpcy5ieU5hbWVzcGFjZS5zZXQodmlldy5uYW1lc3BhY2UsIHZpZXcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgaG9va3NbbmFtZV0odGhpcy5fY3JlYXRlSG9vayhuYW1lKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBob29rIG1ldGhvZC5cbiAgICpcbiAgICogLSBnZXQgdmlldyBiYXNlZCBvbiBuYW1lc3BhY2VcbiAgICogLSBleGVjdXRlIGNhbGxiYWNrIHdpdGggdHJhbnNpdGlvbiBkYXRhXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVIb29rKG5hbWU6IEhvb2tzVmlldyk6IEhvb2sge1xuICAgIHJldHVybiBkYXRhID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZXNwYWNlIH0gPSBuYW1lLm1hdGNoKC9lbnRlci9pKSA/IGRhdGEubmV4dCA6IGRhdGEuY3VycmVudDtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmJ5TmFtZXNwYWNlLmdldChuYW1lc3BhY2UpO1xuXG4gICAgICAvLyBUT0RPOiBtYW5hZ2Ugc2VsZuKAplxuICAgICAgLy8gaWYgKHZpZXcgJiYgZGF0YS50cmlnZ2VyICE9PSAnc2VsZicpIHtcbiAgICAgIGlmICh2aWV3ICYmIHZpZXdbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHJ1bkFzeW5jKHZpZXdbbmFtZV0sIHZpZXcpKGRhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgfVxufVxuIiwiLy8gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyBwb2x5ZmlsbFxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvbWF0Y2hlcyNQb2x5ZmlsbFxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxuICAgIChFbGVtZW50IGFzIGFueSkucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vLyBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0IHBvbHlmaWxsXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbG9zZXN0I1BvbHlmaWxsXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QpIHtcbiAgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3Qoczogc3RyaW5nKSB7XG4gICAgbGV0IGVsID0gdGhpcztcblxuICAgIGRvIHtcbiAgICAgIGlmIChlbC5tYXRjaGVzKHMpKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cblxuICAgICAgZWwgPSAoZWwucGFyZW50RWxlbWVudCB8fCBlbC5wYXJlbnROb2RlKSBhcyBFbGVtZW50O1xuICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvcmUvc2NoZW1hc1xuICovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJU2NoZW1hUGFnZSB9IGZyb20gJy4uL2RlZnMnO1xuXG4vKipcbiAqIFNlZSBbW0lTY2hlbWFQYWdlXV1cbiAqL1xuZXhwb3J0IGNvbnN0IHNjaGVtYVBhZ2U6IElTY2hlbWFQYWdlID0ge1xuICBjb250YWluZXI6IG51bGwsXG4gIGh0bWw6ICcnLFxuICBuYW1lc3BhY2U6ICcnLFxuICB1cmw6IHtcbiAgICBoYXNoOiAnJyxcbiAgICBocmVmOiAnJyxcbiAgICBwYXRoOiAnJyxcbiAgICBwb3J0OiBudWxsLFxuICAgIHF1ZXJ5OiB7fSxcbiAgfSxcbn07XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlXG4gKiA8YnI+PGJyPlxuICogIyMgQmFyYmEgY29yZSBvYmplY3RcbiAqXG4gKiBNYWluIG1ldGhvZHM6XG4gKlxuICogLSBgLmluaXQoKWAgZm9yIGluaXRpYWxpemF0aW9uIHdpdGggb3B0aW9uc1xuICogLSBgLnVzZSgpYCBmb3IgcGx1Z2luc1xuICpcbiAqIEBtb2R1bGUgY29yZVxuICovXG5cbi8qKiovXG5cbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7XG4gIElCYXJiYU9wdGlvbnMsXG4gIElCYXJiYVBsdWdpbixcbiAgSWdub3JlT3B0aW9uLFxuICBJU2NoZW1hUGFnZSxcbiAgSVRyYW5zaXRpb25EYXRhLFxuICBJVHJhbnNpdGlvbk9uY2UsXG4gIElUcmFuc2l0aW9uUGFnZSxcbiAgTGluayxcbiAgTGlua0V2ZW50LFxuICBSZXF1ZXN0Q3VzdG9tRXJyb3IsXG4gIFJlcXVlc3RFcnJvck9yUmVzcG9uc2UsXG4gIFNjaGVtYUF0dHJpYnV0ZVZhbHVlcyxcbiAgVHJpZ2dlcixcbiAgV3JhcHBlcixcbn0gZnJvbSAnLi9kZWZzJztcbi8vIEhvb2tzXG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4vaG9va3MnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tICcuL21vZHVsZXMvQ2FjaGUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9tb2R1bGVzL0xvZ2dlcic7XG5pbXBvcnQgeyBQcmV2ZW50IH0gZnJvbSAnLi9tb2R1bGVzL1ByZXZlbnQnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbnMgfSBmcm9tICcuL21vZHVsZXMvVHJhbnNpdGlvbnMnO1xuaW1wb3J0IHsgVmlld3MgfSBmcm9tICcuL21vZHVsZXMvVmlld3MnO1xuLy8gUG9seWZpbGxzXG5pbXBvcnQgJy4vcG9seWZpbGxzJztcbi8vIFNjaGVtYXNcbmltcG9ydCB7IHNjaGVtYUF0dHJpYnV0ZSB9IGZyb20gJy4vc2NoZW1hcy9hdHRyaWJ1dGUnO1xuaW1wb3J0IHsgc2NoZW1hUGFnZSB9IGZyb20gJy4vc2NoZW1hcy9wYWdlJztcbi8vIFV0aWxzXG5pbXBvcnQgeyBkb20sIGhlbHBlcnMsIGhpc3RvcnksIHJlcXVlc3QsIHVybCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgQ29yZSB7XG4gIC8qKlxuICAgKiBWZXJzaW9uLlxuICAgKi9cbiAgcHVibGljIHZlcnNpb246IHN0cmluZyA9IHZlcnNpb247XG4gIC8qKlxuICAgKiBTY2hlbWFzLlxuICAgKi9cbiAgcHVibGljIHNjaGVtYVBhZ2U6IElTY2hlbWFQYWdlID0gc2NoZW1hUGFnZTtcbiAgLyoqXG4gICAqIExvZ2dlciBjbGFzcywgYWxsb3dzIHBsdWdpbnMgdG8gY3JlYXRlIExvZ2dlci5cbiAgICovXG4gIHB1YmxpYyBMb2dnZXI6IHR5cGVvZiBMb2dnZXIgPSBMb2dnZXI7XG4gIC8qKlxuICAgKiBCYXJiYSBsb2dnZXIuXG4gICAqL1xuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCdAYmFyYmEvY29yZScpO1xuICAvKipcbiAgICogUGx1Z2lucy5cbiAgICovXG4gIHB1YmxpYyBwbHVnaW5zOiBBcnJheTxJQmFyYmFQbHVnaW48YW55Pj4gPSBbXTtcbiAgLyoqXG4gICAqIE9wdGlvbnNcbiAgICovXG4gIHB1YmxpYyB0aW1lb3V0OiBudW1iZXI7XG4gIHB1YmxpYyBjYWNoZUlnbm9yZTogSWdub3JlT3B0aW9uO1xuICBwdWJsaWMgcHJlZmV0Y2hJZ25vcmU6IElnbm9yZU9wdGlvbjtcbiAgcHVibGljIHByZXZlbnRSdW5uaW5nOiBib29sZWFuO1xuICAvKipcbiAgICogSG9va3NcbiAgICovXG4gIHB1YmxpYyBob29rcyA9IGhvb2tzO1xuICAvKipcbiAgICogTW9kdWxlcy5cbiAgICovXG4gIC8vIHB1YmxpYyBoaXN0b3J5OiBIaXN0b3J5O1xuICBwdWJsaWMgY2FjaGU6IENhY2hlO1xuICBwdWJsaWMgcHJldmVudDogUHJldmVudDtcbiAgcHVibGljIHRyYW5zaXRpb25zOiBUcmFuc2l0aW9ucztcbiAgcHVibGljIHZpZXdzOiBWaWV3cztcbiAgLyoqXG4gICAqIFV0aWxzLlxuICAgKi9cbiAgcHVibGljIGRvbSA9IGRvbTtcbiAgcHVibGljIGhlbHBlcnMgPSBoZWxwZXJzO1xuICBwdWJsaWMgaGlzdG9yeSA9IGhpc3Rvcnk7XG4gIHB1YmxpYyByZXF1ZXN0ID0gcmVxdWVzdDtcbiAgcHVibGljIHVybCA9IHVybDtcblxuICBwcml2YXRlIF9kYXRhOiBJVHJhbnNpdGlvbkRhdGE7XG4gIHByaXZhdGUgX3JlcXVlc3RDdXN0b21FcnJvcjogUmVxdWVzdEN1c3RvbUVycm9yO1xuICBwcml2YXRlIF93cmFwcGVyOiBXcmFwcGVyO1xuXG4gIC8qKlxuICAgKiAjIyMgSW5pdCBwbHVnaW4gd2l0aCBvcHRpb25zLlxuICAgKlxuICAgKiBTZWUgW1tJQmFyYmFQbHVnaW5dXSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgcHVibGljIHVzZTxUPihwbHVnaW46IElCYXJiYVBsdWdpbjxUPiwgb3B0aW9ucz86IFQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnN0YWxsZWRQbHVnaW5zID0gdGhpcy5wbHVnaW5zO1xuXG4gICAgLy8gUGx1Z2luIGluc3RhbGxhdGlvblxuICAgIGlmIChpbnN0YWxsZWRQbHVnaW5zLmluZGV4T2YocGx1Z2luKSA+IC0xKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKGBQbHVnaW4gWyR7cGx1Z2luLm5hbWV9XSBhbHJlYWR5IGluc3RhbGxlZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oYFBsdWdpbiBbJHtwbHVnaW4ubmFtZX1dIGhhcyBubyBcImluc3RhbGxcIiBtZXRob2QuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwbHVnaW4uaW5zdGFsbCh0aGlzLCBvcHRpb25zKTtcbiAgICBpbnN0YWxsZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgSW5pdCBiYXJiYSB3aXRoIG9wdGlvbnMuXG4gICAqXG4gICAqIFNlZSBbW0lCYXJiYU9wdGlvbnNdXSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBhcmU6XG4gICAqXG4gICAqIC0gdHJhbnNpdGlvbnM6IGBbXWBcbiAgICogLSB2aWV3czogYFtdYFxuICAgKiAtIHNjaGVtYTogW1tTY2hlbWFBdHRyaWJ1dGVdXVxuICAgKiAtIHRpbWVvdXQ6IGAyZTNgXG4gICAqIC0gY2FjaGVJZ25vcmU6IGBmYWxzZWBcbiAgICogLSBwcmVmZXRjaElnbm9yZTogYGZhbHNlYFxuICAgKiAtIHByZXZlbnRSdW5uaW5nOiBgZmFsc2VgXG4gICAqIC0gcHJldmVudDogYG51bGxgLFxuICAgKiAtIGRlYnVnOiBgZmFsc2VgXG4gICAqIC0gbG9nTGV2ZWw6IGAnZGVidWcnYFxuICAgKi9cbiAgcHVibGljIGluaXQoXG4gICAgLyoqIEBpZ25vcmUgKi8ge1xuICAgICAgdHJhbnNpdGlvbnMgPSBbXSxcbiAgICAgIHZpZXdzID0gW10sXG4gICAgICBzY2hlbWEgPSBzY2hlbWFBdHRyaWJ1dGUsXG4gICAgICByZXF1ZXN0RXJyb3IsXG4gICAgICB0aW1lb3V0ID0gMmUzLFxuICAgICAgY2FjaGVJZ25vcmUgPSBmYWxzZSxcbiAgICAgIHByZWZldGNoSWdub3JlID0gZmFsc2UsXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcHJldmVudFJ1bm5pbmcgPSBmYWxzZSxcbiAgICAgIHByZXZlbnQ6IHByZXZlbnRDdXN0b20gPSBudWxsLFxuICAgICAgZGVidWcgPSBmYWxzZSxcbiAgICAgIGxvZ0xldmVsID0gJ29mZicsXG4gICAgfTogSUJhcmJhT3B0aW9ucyA9IHt9XG4gICkge1xuICAgIC8vIDAuIFNldCBsb2dnZXIgbGV2ZWwgYW5kIHByaW50IHZlcnNpb25cbiAgICBMb2dnZXIuc2V0TGV2ZWwoZGVidWcgPT09IHRydWUgPyAnZGVidWcnIDogbG9nTGV2ZWwpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8odGhpcy52ZXJzaW9uKTtcblxuICAgIC8vIDEuIE1hbmFnZSBvcHRpb25zXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgY29uc3QgYXR0ciA9IGsgYXMgU2NoZW1hQXR0cmlidXRlVmFsdWVzO1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHNjaGVtYUF0dHJpYnV0ZVthdHRyXSkge1xuICAgICAgICBzY2hlbWFBdHRyaWJ1dGVbYXR0cl0gPSBzY2hlbWFbYXR0cl07XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fcmVxdWVzdEN1c3RvbUVycm9yID0gcmVxdWVzdEVycm9yO1xuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgdGhpcy5jYWNoZUlnbm9yZSA9IGNhY2hlSWdub3JlO1xuICAgIHRoaXMucHJlZmV0Y2hJZ25vcmUgPSBwcmVmZXRjaElnbm9yZTtcbiAgICB0aGlzLnByZXZlbnRSdW5uaW5nID0gcHJldmVudFJ1bm5pbmc7XG5cbiAgICAvLyAyLiBHZXQgYW5kIGNoZWNrIHdyYXBwZXJcbiAgICB0aGlzLl93cmFwcGVyID0gdGhpcy5kb20uZ2V0V3JhcHBlcigpO1xuICAgIGlmICghdGhpcy5fd3JhcHBlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQGJhcmJhL2NvcmVdIE5vIEJhcmJhIHdyYXBwZXIgZm91bmQnKTtcbiAgICB9XG4gICAgdGhpcy5fd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTsgLy8gQTExeVxuXG4gICAgLy8gMy4gSW5pdCBwYWdlcyAoZ2V0IFwiY3VycmVudFwiIGRhdGEpXG4gICAgdGhpcy5fcmVzZXREYXRhKCk7XG5cbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuZGF0YTtcblxuICAgIGlmICghY3VycmVudC5jb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW0BiYXJiYS9jb3JlXSBObyBCYXJiYSBjb250YWluZXIgZm91bmQnKTtcbiAgICB9XG5cbiAgICAvLyA0LiBJbml0IG90aGVyIG1vZHVsZXNcbiAgICB0aGlzLmNhY2hlID0gbmV3IENhY2hlKGNhY2hlSWdub3JlKTtcbiAgICB0aGlzLnByZXZlbnQgPSBuZXcgUHJldmVudChwcmVmZXRjaElnbm9yZSk7XG4gICAgdGhpcy50cmFuc2l0aW9ucyA9IG5ldyBUcmFuc2l0aW9ucyh0cmFuc2l0aW9ucyk7XG4gICAgdGhpcy52aWV3cyA9IG5ldyBWaWV3cyh2aWV3cyk7XG5cbiAgICAvLyBBZGQgcHJldmVudCBjdXN0b21cbiAgICBpZiAocHJldmVudEN1c3RvbSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBwcmV2ZW50Q3VzdG9tICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0BiYXJiYS9jb3JlXSBQcmV2ZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJldmVudC5hZGQoJ3ByZXZlbnRDdXN0b20nLCBwcmV2ZW50Q3VzdG9tKTtcbiAgICB9XG5cbiAgICAvLyA1LiBVc2UgXCJjdXJyZW50XCIgZGF0YVxuICAgIC8vIEluaXQgaGlzdG9yeVxuICAgIHRoaXMuaGlzdG9yeS5pbml0KGN1cnJlbnQudXJsLmhyZWYsIGN1cnJlbnQubmFtZXNwYWNlKTtcbiAgICAvLyBBZGQgdG8gY2FjaGVcbiAgICAvLyBUT0RPOiBkbyBub3QgY2FjaGUgcmVuZGVyZXIgSFRNTCwgb25seSByZXF1ZXN0IHJlc3VsdHPigKZcbiAgICAvLyB0aGlzLmNhY2hlLnNldChjdXJyZW50LnVybC5ocmVmLCBQcm9taXNlLnJlc29sdmUoY3VycmVudC5odG1sKSwgJ2luaXQnKTtcblxuICAgIC8vIDYuIEJpbmQgY29udGV4dFxuICAgIHRoaXMuX29uTGlua0VudGVyID0gdGhpcy5fb25MaW5rRW50ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkxpbmtDbGljayA9IHRoaXMuX29uTGlua0NsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25TdGF0ZUNoYW5nZSA9IHRoaXMuX29uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9iaW5kKCk7XG5cbiAgICAvLyA3LiBJbml0IHBsdWdpbnNcbiAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaChwbHVnaW4gPT4gcGx1Z2luLmluaXQoKSk7XG5cbiAgICAvLyA4LiBCYXJiYSByZWFkeVxuICAgIC8vIFNldCBuZXh0ICsgdHJpZ2dlciBmb3Igb25jZSBhbmQgYGJlZm9yZUVudGVyYC9gYWZ0ZXJFbnRlcmAgdmlldyBvbiBwYWdlIGxvYWQuXG4gICAgY29uc3Qgb25jZURhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICBvbmNlRGF0YS50cmlnZ2VyID0gJ2JhcmJhJztcbiAgICBvbmNlRGF0YS5uZXh0ID0gb25jZURhdGEuY3VycmVudDtcbiAgICBvbmNlRGF0YS5jdXJyZW50ID0geyAuLi50aGlzLnNjaGVtYVBhZ2UgfTtcbiAgICB0aGlzLmhvb2tzLmRvKCdyZWFkeScsIG9uY2VEYXRhKTtcblxuICAgIC8vIDkuIEZpbmFsbHksIGRvIG9uY2XigKZcbiAgICB0aGlzLm9uY2Uob25jZURhdGEpO1xuXG4gICAgLy8gQ2xlYW4gZGF0YSBmb3IgZmlyc3QgYmFyYmEgdHJhbnNpdGlvbuKAplxuICAgIHRoaXMuX3Jlc2V0RGF0YSgpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzZXREYXRhKCk7XG4gICAgdGhpcy5fdW5iaW5kKCk7XG4gICAgdGhpcy5oaXN0b3J5LmNsZWFyKCk7XG4gICAgdGhpcy5ob29rcy5jbGVhcigpO1xuICAgIHRoaXMucGx1Z2lucyA9IFtdO1xuICB9XG5cbiAgZ2V0IGRhdGEoKTogSVRyYW5zaXRpb25EYXRhIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCB3cmFwcGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fd3JhcHBlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgRm9yY2UgYSBwYWdlIGNoYW5nZSB3aXRob3V0IEJhcmJhIHRyYW5zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgZm9yY2UoaHJlZjogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gREVWXG4gICAgLy8gQ2FuIGJlIHVzZWQgd2FpdGluZyBhbmltYXRpb24gY2FuY2VsbGF0aW9uIG1hbmFnZW1lbnTigKZcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGhyZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBHbyBmb3IgYSBCYXJiYSB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBNYW5hZ2UgXCJzZWxmIHBhZ2VcIiBocmVmOlxuICAgKlxuICAgKiAtIGlmIHNhbWUgdXJsIGFuZCBubyBzZWxmIHRyYW5zaXRpb24sIGtlZXAgZGVmYXVsdCBiZWhhdmlvclxuICAgKiAgIC0gbGluazogcmVsb2FkIHRoZSBwYWdlXG4gICAqICAgLSBhbmNob3I6IHNjcm9sbCB0b1xuICAgKiAtIGlmIHNhbWUgdXJsIHdpdGggc2VsZiB0cmFuc2l0aW9uLCB1c2UgaXRcbiAgICogLSB0aGVuIHN0YXJ0IGEgcGFnZSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIGdvKFxuICAgIGhyZWY6IHN0cmluZyxcbiAgICB0cmlnZ2VyOiBUcmlnZ2VyID0gJ2JhcmJhJyxcbiAgICBlPzogTGlua0V2ZW50IHwgUG9wU3RhdGVFdmVudFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBJZiBhbmltYXRpb24gcnVubmluZywgZm9yY2UgcmVsb2FkXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbnMuaXNSdW5uaW5nKSB7XG4gICAgICB0aGlzLmZvcmNlKGhyZWYpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNlbGYgPSBmYWxzZTtcblxuICAgIC8vIENoZWNrIHByZXZlbnQgc2FtZVVSTCBhZ2FpbnN0IGN1cnJlbnQgaGlzdG9yeVxuICAgIC8vICsgc3RhdGUgY2hlY2tcbiAgICAvLyArIHVwZGF0ZSB0cmlnZ2VyIHdpdGggZGlyZWN0aW9uXG4gICAgaWYgKHRyaWdnZXIgPT09ICdwb3BzdGF0ZScpIHtcbiAgICAgIHNlbGYgPVxuICAgICAgICB0aGlzLmhpc3RvcnkuY3VycmVudCAmJlxuICAgICAgICB0aGlzLnVybC5nZXRQYXRoKHRoaXMuaGlzdG9yeS5jdXJyZW50LnVybCkgPT09IHRoaXMudXJsLmdldFBhdGgoaHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYgPSB0aGlzLnByZXZlbnQucnVuKCdzYW1lVXJsJywgbnVsbCwgbnVsbCwgaHJlZik7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYgJiYgIXRoaXMudHJhbnNpdGlvbnMuaGFzU2VsZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyaWdnZXIgPSB0aGlzLmhpc3RvcnkuY2hhbmdlKGhyZWYsIHRyaWdnZXIsIGUpO1xuXG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFnZShocmVmLCB0cmlnZ2VyLCBzZWxmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgU3RhcnQgYW4gXCJvbmNlXCIgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogSWYgc29tZSByZWdpc3RlcmVkIFwib25jZVwiIHRyYW5zaXRpb24sXG4gICAqIGdldCB0aGUgXCJyZXNvbHZlZFwiIHRyYW5zaXRpb24gZnJvbSB0aGUgc3RvcmUgYW5kIHN0YXJ0IGl0LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uY2UocmVhZHlEYXRhOiBJVHJhbnNpdGlvbkRhdGEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmhvb2tzLmRvKCdiZWZvcmVFbnRlcicsIHJlYWR5RGF0YSk7XG5cbiAgICAvLyBDaGVjayBpZiBvbmNlIHRyYW5zaXRpb25cbiAgICBpZiAodGhpcy50cmFuc2l0aW9ucy5oYXNPbmNlKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9ucy5nZXQocmVhZHlEYXRhLCB7XG4gICAgICAgIG9uY2U6IHRydWUsXG4gICAgICB9KSBhcyBJVHJhbnNpdGlvbk9uY2U7XG5cbiAgICAgIGF3YWl0IHRoaXMudHJhbnNpdGlvbnMuZG9PbmNlKHsgdHJhbnNpdGlvbiwgZGF0YTogcmVhZHlEYXRhIH0pO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuaG9va3MuZG8oJ2FmdGVyRW50ZXInLCByZWFkeURhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBTdGFydCBhIFwicGFnZVwiIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIDEuIElmIG5vIHJ1bm5pbmcgdHJhbnNpdGlvbiwgdXBkYXRlcyBkYXRhIHdpdGggZnVsbCBVUkwgcHJvcGVydGllcyBhbmQgdHJpZ2dlci5cbiAgICogMi4gR2V0IHBhZ2UgZnJvbSBjYWNoZSBvciBpbml0IHJlcXVlc3QuXG4gICAqIDMuIFdhaXQgaWYgc29tZSB0cmFuc2l0aW9ucyBuZWVkIFwibmV4dFwiIGRhdGEgKGBzeW5jOiB0cnVlYCwgYHRvOiDigKZgKS5cbiAgICogNC4gTWFuYWdlIHRoZSBoaXN0b3J5LCBkZXBlbmRpbmcgb24gdHJpZ2dlci5cbiAgICogNS4gR2V0IFwiZGF0YVwiIGFuZCB0cmlnZ2VyIFwiZ29cIiBob29rLlxuICAgKiA2LiBHZXQgdGhlIFwicmVzb2x2ZWRcIiB0cmFuc2l0aW9uIGZyb20gdGhlIHN0b3JlIGFuZCBzdGFydCBpdC5cbiAgICogNy4gVXBkYXRlIHRpdGxlIGFuZCByZXNldCBkYXRhIChjdXJyZW50LCBuZXh0ID0gdW5kZWZpbmVkKS5cbiAgICpcbiAgICogPiBJZiBcInNlbGZcIiwgdXNlIHRoZSBcInNlbGZcIiB0cmFuc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcGFnZShcbiAgICBocmVmOiBzdHJpbmcsXG4gICAgdHJpZ2dlcjogVHJpZ2dlcixcbiAgICBzZWxmOiBib29sZWFuXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuZGF0YS5uZXh0LnVybCA9IHtcbiAgICAgIGhyZWYsXG4gICAgICAuLi50aGlzLnVybC5wYXJzZShocmVmKSxcbiAgICB9O1xuICAgIHRoaXMuZGF0YS50cmlnZ2VyID0gdHJpZ2dlcjtcblxuICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmNhY2hlLmhhcyhocmVmKVxuICAgICAgPyB0aGlzLmNhY2hlLnVwZGF0ZShocmVmLCB7IGFjdGlvbjogJ2NsaWNrJyB9KS5yZXF1ZXN0XG4gICAgICA6IHRoaXMuY2FjaGUuc2V0KFxuICAgICAgICAgIGhyZWYsXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KFxuICAgICAgICAgICAgaHJlZixcbiAgICAgICAgICAgIHRoaXMudGltZW91dCxcbiAgICAgICAgICAgIHRoaXMub25SZXF1ZXN0RXJyb3IuYmluZCh0aGlzLCB0cmlnZ2VyKVxuICAgICAgICAgICksXG4gICAgICAgICAgJ2NsaWNrJ1xuICAgICAgICApLnJlcXVlc3Q7XG5cbiAgICAvLyBOZWVkIHRvIHdhaXQgYmVmb3JlIGdldHRpbmcgdGhlIHJpZ2h0IHRyYW5zaXRpb25cbiAgICBpZiAodGhpcy50cmFuc2l0aW9ucy5zaG91bGRXYWl0KSB7XG4gICAgICBhd2FpdCBoZWxwZXJzLnVwZGF0ZShwYWdlLCB0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAvLyBIb29rOiBiZXR3ZWVuIHRyaWdnZXIgYW5kIHRyYW5zaXRpb25cbiAgICAvLyBDYW4gYmUgdXNlZCB0byByZXNvbHZlIFwicm91dGVcIuKAplxuICAgIGF3YWl0IHRoaXMuaG9va3MuZG8oJ3BhZ2UnLCBkYXRhKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9ucy5nZXQoZGF0YSwge1xuICAgICAgICBvbmNlOiBmYWxzZSxcbiAgICAgICAgc2VsZixcbiAgICAgIH0pIGFzIElUcmFuc2l0aW9uUGFnZTtcblxuICAgICAgYXdhaXQgdGhpcy50cmFuc2l0aW9ucy5kb1BhZ2Uoe1xuICAgICAgICBkYXRhLFxuICAgICAgICBwYWdlLFxuICAgICAgICB0cmFuc2l0aW9uLFxuICAgICAgICB3cmFwcGVyOiB0aGlzLl93cmFwcGVyLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3Jlc2V0RGF0YSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBTb21ldGhpbmcgd2VudCB3cm9uZyAocmVqZWN0ZWQgcHJvbWlzZSwgZXJyb3IsIDQwNCwgNTA1LCBvdGhlcuKApilcbiAgICAgIC8vIFRPRE86IG1hbmFnZSAvIHVzZSBjYXNlcyBmb3IgY2FuY2VsbGF0aW9uXG4gICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBjYW5jZWxsZWQnKTtcblxuICAgICAgLy8gSWYgdHJhbnNpdGlvbiBlcnJvciBhbmQgbm8gZGVidWcgbW9kZSwgZm9yY2UgcmVsb2FkIHBhZ2UuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKExvZ2dlci5nZXRMZXZlbCgpID09PSAwKSB7XG4gICAgICAgIHRoaXMuZm9yY2UoZGF0YS5jdXJyZW50LnVybC5ocmVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBhIHJlcXVlc3QgZXJyb3Igb2NjdXJzLlxuICAgKlxuICAgKiBBbGxvdyB0aGUgdXNlciB0byBtYW5hZ2UgcmVxdWVzdCBlcnJvci4gKEUuZzogNDA0KVxuICAgKi9cbiAgcHVibGljIG9uUmVxdWVzdEVycm9yKHRyaWdnZXI6IFRyaWdnZXIsIC4uLmFyZ3M6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8vIENhbmNlbCB0cmFuc2l0aW9uIHN0YXR1c1xuICAgIHRoaXMudHJhbnNpdGlvbnMuaXNSdW5uaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBbaHJlZiwgcmVzcG9uc2VdOiBbc3RyaW5nLCBSZXF1ZXN0RXJyb3JPclJlc3BvbnNlXSA9IGFyZ3M7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5jYWNoZS5nZXRBY3Rpb24oaHJlZik7XG4gICAgdGhpcy5jYWNoZS5kZWxldGUoaHJlZik7XG5cbiAgICAvLyBDdXN0b20gcmVxdWVzdEVycm9yIHJldHVybmluZyBmYWxzZSB3aWxsIHJldHVybiBoZXJlLlxuICAgIGlmIChcbiAgICAgIHRoaXMuX3JlcXVlc3RDdXN0b21FcnJvciAmJlxuICAgICAgdGhpcy5fcmVxdWVzdEN1c3RvbUVycm9yKHRyaWdnZXIsIGFjdGlvbiwgaHJlZiwgcmVzcG9uc2UpID09PSBmYWxzZVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIHBhZ2UgY2hhbmdlXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2NsaWNrJykge1xuICAgICAgdGhpcy5mb3JjZShocmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2dyYW1tYXRpY2FsbHkgcHJlZmV0Y2hcbiAgICovXG4gIHB1YmxpYyBwcmVmZXRjaChocmVmOiBzdHJpbmcpIHtcbiAgICAvLyBBbHJlYWR5IGluIGNhY2hlXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy5jYWNoZS5oYXMoaHJlZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNhY2hlLnNldChcbiAgICAgIGhyZWYsXG4gICAgICB0aGlzLnJlcXVlc3QoXG4gICAgICAgIGhyZWYsXG4gICAgICAgIHRoaXMudGltZW91dCxcbiAgICAgICAgdGhpcy5vblJlcXVlc3RFcnJvci5iaW5kKHRoaXMsICdiYXJiYScpXG4gICAgICApLmNhdGNoKChlcnJvcjogUmVxdWVzdEVycm9yT3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgICdwcmVmZXRjaCdcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBfYmluZCgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLnByZWZldGNoSWdub3JlICE9PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9vbkxpbmtFbnRlcik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25MaW5rRW50ZXIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uTGlua0NsaWNrKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9vblN0YXRlQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICovXG4gIHByaXZhdGUgX3VuYmluZCgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLnByZWZldGNoSWdub3JlICE9PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9vbkxpbmtFbnRlcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25MaW5rRW50ZXIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uTGlua0NsaWNrKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9vblN0YXRlQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgZWxlbWVudCBpcyBlbnRlcmVkLlxuICAgKlxuICAgKiBHZXQgdmFsaWQgbGluayBlbGVtZW50LlxuICAgKiBDYWNoZSBVUkwgaWYgbmVlZGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfb25MaW5rRW50ZXIoZTogTGlua0V2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgbGluayA9IHRoaXMuX2dldExpbmtFbGVtZW50KGUpO1xuXG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaHJlZiA9IHRoaXMuZG9tLmdldEhyZWYobGluayk7XG5cbiAgICBpZiAodGhpcy5wcmV2ZW50LmNoZWNrSHJlZihocmVmKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFscmVhZHkgaW4gY2FjaGVcbiAgICBpZiAodGhpcy5jYWNoZS5oYXMoaHJlZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNhY2hlLnNldChcbiAgICAgIGhyZWYsXG4gICAgICB0aGlzLnJlcXVlc3QoXG4gICAgICAgIGhyZWYsXG4gICAgICAgIHRoaXMudGltZW91dCxcbiAgICAgICAgdGhpcy5vblJlcXVlc3RFcnJvci5iaW5kKHRoaXMsIGxpbmspXG4gICAgICApLmNhdGNoKChlcnJvcjogUmVxdWVzdEVycm9yT3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgICdlbnRlcidcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYW4gZWxlbWVudCBpcyBjbGlja2VkLlxuICAgKlxuICAgKiBHZXQgdmFsaWQgbGluayBlbGVtZW50LlxuICAgKiBQcmV2ZW50IHNhbWUgVVJMLlxuICAgKiBHbyBmb3IgYSBCYXJiYSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfb25MaW5rQ2xpY2soZTogTGlua0V2ZW50KTogdm9pZCB7XG4gICAgLy8gVGhpcyB1c2UgYHByZXZlbnQuY2hlY2tMaW5rYCB1bmRlciB0aGUgaG9vZCB0byBnZXQgZWxpZ2libGUgbGluay5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5fZ2V0TGlua0VsZW1lbnQoZSk7XG5cbiAgICBpZiAoIWxpbmspIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50cmFuc2l0aW9ucy5pc1J1bm5pbmcgJiYgdGhpcy5wcmV2ZW50UnVubmluZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ28odGhpcy5kb20uZ2V0SHJlZihsaW5rKSwgbGluaywgZSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBIaXN0b3J5IHN0YXRlIGNoYW5nZXMuXG4gICAqXG4gICAqIEdldCBcImhyZWZcIiBmcm9tIFVSTFxuICAgKiBHbyBmb3IgYSBCYXJiYSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfb25TdGF0ZUNoYW5nZShlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5nbyh0aGlzLnVybC5nZXRIcmVmKCksICdwb3BzdGF0ZScsIGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHZhbGlkIGxpbmsgYW5jZXN0b3IuXG4gICAqXG4gICAqIENoZWNrIGZvciBhIFwiaHJlZlwiIGF0dHJpYnV0ZS5cbiAgICogVGhlbiBjaGVjayBpZiBlbGlnaWJsZSBmb3IgQmFyYmEuXG4gICAqL1xuICBwcml2YXRlIF9nZXRMaW5rRWxlbWVudChlOiBMaW5rRXZlbnQpOiBMaW5rIHtcbiAgICBsZXQgZWwgPSBlLnRhcmdldCBhcyBMaW5rO1xuXG4gICAgd2hpbGUgKGVsICYmICF0aGlzLmRvbS5nZXRIcmVmKGVsKSkge1xuICAgICAgZWwgPSAoZWwgYXMgSFRNTEVsZW1lbnQpLnBhcmVudE5vZGUgYXMgTGluaztcbiAgICB9XG5cbiAgICAvLyBDaGVjayBwcmV2ZW50XG4gICAgaWYgKCFlbCB8fCB0aGlzLnByZXZlbnQuY2hlY2tMaW5rKGVsLCBlLCB0aGlzLmRvbS5nZXRIcmVmKGVsKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgcGFnZXMgZGF0YS5cbiAgICpcbiAgICogU2V0IFwiY3VycmVudFwiIGFuZCB1bnNldCBcIm5leHRcIi5cbiAgICovXG4gIHByaXZhdGUgX3Jlc2V0RGF0YSgpIHtcbiAgICBjb25zdCBocmVmID0gdGhpcy51cmwuZ2V0SHJlZigpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgICBjb250YWluZXI6IHRoaXMuZG9tLmdldENvbnRhaW5lcigpLFxuICAgICAgaHRtbDogdGhpcy5kb20uZ2V0SHRtbCgpLFxuICAgICAgbmFtZXNwYWNlOiB0aGlzLmRvbS5nZXROYW1lc3BhY2UoKSxcbiAgICAgIHVybDoge1xuICAgICAgICBocmVmLFxuICAgICAgICAuLi50aGlzLnVybC5wYXJzZShocmVmKSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuX2RhdGEgPSB7XG4gICAgICBjdXJyZW50LFxuICAgICAgbmV4dDogeyAuLi50aGlzLnNjaGVtYVBhZ2UgfSxcbiAgICAgIHRyaWdnZXI6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgdGhpcy5ob29rcy5kbygncmVzZXQnLCB0aGlzLmRhdGEpO1xuICB9XG59XG5cbmNvbnN0IGNvcmUgPSBuZXcgQ29yZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiLypcbiAqIGFuaW1lLmpzIHYzLjIuMVxuICogKGMpIDIwMjAgSnVsaWFuIEdhcm5pZXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogYW5pbWVqcy5jb21cbiAqL1xuXG4vLyBEZWZhdWx0c1xuXG52YXIgZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MgPSB7XG4gIHVwZGF0ZTogbnVsbCxcbiAgYmVnaW46IG51bGwsXG4gIGxvb3BCZWdpbjogbnVsbCxcbiAgY2hhbmdlQmVnaW46IG51bGwsXG4gIGNoYW5nZTogbnVsbCxcbiAgY2hhbmdlQ29tcGxldGU6IG51bGwsXG4gIGxvb3BDb21wbGV0ZTogbnVsbCxcbiAgY29tcGxldGU6IG51bGwsXG4gIGxvb3A6IDEsXG4gIGRpcmVjdGlvbjogJ25vcm1hbCcsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICB0aW1lbGluZU9mZnNldDogMFxufTtcblxudmFyIGRlZmF1bHRUd2VlblNldHRpbmdzID0ge1xuICBkdXJhdGlvbjogMTAwMCxcbiAgZGVsYXk6IDAsXG4gIGVuZERlbGF5OiAwLFxuICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxLCAuNSknLFxuICByb3VuZDogMFxufTtcblxudmFyIHZhbGlkVHJhbnNmb3JtcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCAncm90YXRlJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXcnLCAnc2tld1gnLCAnc2tld1knLCAncGVyc3BlY3RpdmUnLCAnbWF0cml4JywgJ21hdHJpeDNkJ107XG5cbi8vIENhY2hpbmdcblxudmFyIGNhY2hlID0ge1xuICBDU1M6IHt9LFxuICBzcHJpbmdzOiB7fVxufTtcblxuLy8gVXRpbHNcblxuZnVuY3Rpb24gbWluTWF4KHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nQ29udGFpbnMoc3RyLCB0ZXh0KSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZih0ZXh0KSA+IC0xO1xufVxuXG5mdW5jdGlvbiBhcHBseUFyZ3VtZW50cyhmdW5jLCBhcmdzKSB7XG4gIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG52YXIgaXMgPSB7XG4gIGFycjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7IH0sXG4gIG9iajogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHN0cmluZ0NvbnRhaW5zKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSwgJ09iamVjdCcpOyB9LFxuICBwdGg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKTsgfSxcbiAgc3ZnOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7IH0sXG4gIGlucDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50OyB9LFxuICBkb206IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKTsgfSxcbiAgc3RyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnOyB9LFxuICBmbmM6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgdW5kOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnOyB9LFxuICBuaWw6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbDsgfSxcbiAgaGV4OiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSk7IH0sXG4gIHJnYjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC9ecmdiLy50ZXN0KGEpOyB9LFxuICBoc2w6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvXmhzbC8udGVzdChhKTsgfSxcbiAgY29sOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKTsgfSxcbiAga2V5OiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcyc7IH0sXG59O1xuXG4vLyBFYXNpbmdzXG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpIHtcbiAgdmFyIG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyaW5nKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHBhcnNlRmxvYXQocCk7IH0pIDogW107XG59XG5cbi8vIFNwcmluZyBzb2x2ZXIgaW5zcGlyZWQgYnkgV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcblxuZnVuY3Rpb24gc3ByaW5nKHN0cmluZywgZHVyYXRpb24pIHtcblxuICB2YXIgcGFyYW1zID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZyk7XG4gIHZhciBtYXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMF0pID8gMSA6IHBhcmFtc1swXSwgLjEsIDEwMCk7XG4gIHZhciBzdGlmZm5lc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1sxXSkgPyAxMDAgOiBwYXJhbXNbMV0sIC4xLCAxMDApO1xuICB2YXIgZGFtcGluZyA9IG1pbk1heChpcy51bmQocGFyYW1zWzJdKSA/IDEwIDogcGFyYW1zWzJdLCAuMSwgMTAwKTtcbiAgdmFyIHZlbG9jaXR5ID0gIG1pbk1heChpcy51bmQocGFyYW1zWzNdKSA/IDAgOiBwYXJhbXNbM10sIC4xLCAxMDApO1xuICB2YXIgdzAgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XG4gIHZhciB6ZXRhID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcbiAgdmFyIHdkID0gemV0YSA8IDEgPyB3MCAqIE1hdGguc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcbiAgdmFyIGEgPSAxO1xuICB2YXIgYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12ZWxvY2l0eSkgLyB3ZCA6IC12ZWxvY2l0eSArIHcwO1xuXG4gIGZ1bmN0aW9uIHNvbHZlcih0KSB7XG4gICAgdmFyIHByb2dyZXNzID0gZHVyYXRpb24gPyAoZHVyYXRpb24gKiB0KSAvIDEwMDAgOiB0O1xuICAgIGlmICh6ZXRhIDwgMSkge1xuICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB6ZXRhICogdzApICogKGEgKiBNYXRoLmNvcyh3ZCAqIHByb2dyZXNzKSArIGIgKiBNYXRoLnNpbih3ZCAqIHByb2dyZXNzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzID0gKGEgKyBiICogcHJvZ3Jlc3MpICogTWF0aC5leHAoLXByb2dyZXNzICogdzApO1xuICAgIH1cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7IHJldHVybiB0OyB9XG4gICAgcmV0dXJuIDEgLSBwcm9ncmVzcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5zcHJpbmdzW3N0cmluZ107XG4gICAgaWYgKGNhY2hlZCkgeyByZXR1cm4gY2FjaGVkOyB9XG4gICAgdmFyIGZyYW1lID0gMS82O1xuICAgIHZhciBlbGFwc2VkID0gMDtcbiAgICB2YXIgcmVzdCA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgZWxhcHNlZCArPSBmcmFtZTtcbiAgICAgIGlmIChzb2x2ZXIoZWxhcHNlZCkgPT09IDEpIHtcbiAgICAgICAgcmVzdCsrO1xuICAgICAgICBpZiAocmVzdCA+PSAxNikgeyBicmVhazsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBkdXJhdGlvbiA9IGVsYXBzZWQgKiBmcmFtZSAqIDEwMDA7XG4gICAgY2FjaGUuc3ByaW5nc1tzdHJpbmddID0gZHVyYXRpb247XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG5cbiAgcmV0dXJuIGR1cmF0aW9uID8gc29sdmVyIDogZ2V0RHVyYXRpb247XG5cbn1cblxuLy8gQmFzaWMgc3RlcHMgZWFzaW5nIGltcGxlbWVudGF0aW9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxuXG5mdW5jdGlvbiBzdGVwcyhzdGVwcykge1xuICBpZiAoIHN0ZXBzID09PSB2b2lkIDAgKSBzdGVwcyA9IDEwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5jZWlsKChtaW5NYXgodCwgMC4wMDAwMDEsIDEpKSAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpOyB9O1xufVxuXG4vLyBCZXppZXJFYXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG5cbnZhciBiZXppZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG4gIHZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbiAgZnVuY3Rpb24gQShhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExIH1cbiAgZnVuY3Rpb24gQihhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExIH1cbiAgZnVuY3Rpb24gQyhhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExIH1cblxuICBmdW5jdGlvbiBjYWxjQmV6aWVyKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQgfVxuICBmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSkgfVxuXG4gIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICAgIGRvIHtcbiAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7IGFCID0gY3VycmVudFQ7IH0gZWxzZSB7IGFBID0gY3VycmVudFQ7IH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiAwLjAwMDAwMDEgJiYgKytpIDwgMTApO1xuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7IHJldHVybiBhR3Vlc3NUOyB9XG4gICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG4gICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH1cblxuICBmdW5jdGlvbiBiZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG5cbiAgICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHsgcmV0dXJuOyB9XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG5cbiAgICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRGb3JYKGFYKSB7XG5cbiAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMDtcbiAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgfVxuXG4gICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSAwLjAwMSkge1xuICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHsgcmV0dXJuIHg7IH1cbiAgICAgIGlmICh4ID09PSAwIHx8IHggPT09IDEpIHsgcmV0dXJuIHg7IH1cbiAgICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gYmV6aWVyO1xuXG59KSgpO1xuXG52YXIgcGVubmVyID0gKGZ1bmN0aW9uICgpIHtcblxuICAvLyBCYXNlZCBvbiBqUXVlcnkgVUkncyBpbXBsZW1lbmF0aW9uIG9mIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyIChodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nKVxuXG4gIHZhciBlYXNlcyA9IHsgbGluZWFyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTsgfSB9O1xuXG4gIHZhciBmdW5jdGlvbkVhc2luZ3MgPSB7XG4gICAgU2luZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpOyB9OyB9LFxuICAgIENpcmM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7IH07IH0sXG4gICAgQmFjazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiB0ICogKDMgKiB0IC0gMik7IH07IH0sXG4gICAgQm91bmNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIHBvdzIsIGIgPSA0O1xuICAgICAgd2hpbGUgKHQgPCAoKCBwb3cyID0gTWF0aC5wb3coMiwgLS1iKSkgLSAxKSAvIDExKSB7fVxuICAgICAgcmV0dXJuIDEgLyBNYXRoLnBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBNYXRoLnBvdygoIHBvdzIgKiAzIC0gMiApIC8gMjIgLSB0LCAyKVxuICAgIH07IH0sXG4gICAgRWxhc3RpYzogZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgICBpZiAoIGFtcGxpdHVkZSA9PT0gdm9pZCAwICkgYW1wbGl0dWRlID0gMTtcbiAgICAgIGlmICggcGVyaW9kID09PSB2b2lkIDAgKSBwZXJpb2QgPSAuNTtcblxuICAgICAgdmFyIGEgPSBtaW5NYXgoYW1wbGl0dWRlLCAxLCAxMCk7XG4gICAgICB2YXIgcCA9IG1pbk1heChwZXJpb2QsIC4xLCAyKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gKHQgPT09IDAgfHwgdCA9PT0gMSkgPyB0IDogXG4gICAgICAgICAgLWEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICogTWF0aC5zaW4oKCgodCAtIDEpIC0gKHAgLyAoTWF0aC5QSSAqIDIpICogTWF0aC5hc2luKDEgLyBhKSkpICogKE1hdGguUEkgKiAyKSkgLyBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGJhc2VFYXNpbmdzID0gWydRdWFkJywgJ0N1YmljJywgJ1F1YXJ0JywgJ1F1aW50JywgJ0V4cG8nXTtcblxuICBiYXNlRWFzaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gICAgZnVuY3Rpb25FYXNpbmdzW25hbWVdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGgucG93KHQsIGkgKyAyKTsgfTsgfTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoZnVuY3Rpb25FYXNpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGVhc2VJbiA9IGZ1bmN0aW9uRWFzaW5nc1tuYW1lXTtcbiAgICBlYXNlc1snZWFzZUluJyArIG5hbWVdID0gZWFzZUluO1xuICAgIGVhc2VzWydlYXNlT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gZWFzZUluKGEsIGIpKDEgLSB0KTsgfTsgfTtcbiAgICBlYXNlc1snZWFzZUluT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0IDwgMC41ID8gZWFzZUluKGEsIGIpKHQgKiAyKSAvIDIgOiBcbiAgICAgIDEgLSBlYXNlSW4oYSwgYikodCAqIC0yICsgMikgLyAyOyB9OyB9O1xuICAgIGVhc2VzWydlYXNlT3V0SW4nICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPCAwLjUgPyAoMSAtIGVhc2VJbihhLCBiKSgxIC0gdCAqIDIpKSAvIDIgOiBcbiAgICAgIChlYXNlSW4oYSwgYikodCAqIDIgLSAxKSArIDEpIC8gMjsgfTsgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVhc2VzO1xuXG59KSgpO1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ3MoZWFzaW5nLCBkdXJhdGlvbikge1xuICBpZiAoaXMuZm5jKGVhc2luZykpIHsgcmV0dXJuIGVhc2luZzsgfVxuICB2YXIgbmFtZSA9IGVhc2luZy5zcGxpdCgnKCcpWzBdO1xuICB2YXIgZWFzZSA9IHBlbm5lcltuYW1lXTtcbiAgdmFyIGFyZ3MgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoZWFzaW5nKTtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSAnc3ByaW5nJyA6IHJldHVybiBzcHJpbmcoZWFzaW5nLCBkdXJhdGlvbik7XG4gICAgY2FzZSAnY3ViaWNCZXppZXInIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKGJlemllciwgYXJncyk7XG4gICAgY2FzZSAnc3RlcHMnIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKHN0ZXBzLCBhcmdzKTtcbiAgICBkZWZhdWx0IDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKGVhc2UsIGFyZ3MpO1xuICB9XG59XG5cbi8vIFN0cmluZ3NcblxuZnVuY3Rpb24gc2VsZWN0U3RyaW5nKHN0cikge1xuICB0cnkge1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyBBcnJheXNcblxuZnVuY3Rpb24gZmlsdGVyQXJyYXkoYXJyLCBjYWxsYmFjaykge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID49IDIgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChpIGluIGFycikge1xuICAgICAgdmFyIHZhbCA9IGFycltpXTtcbiAgICAgIGlmIChjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbCwgaSwgYXJyKSkge1xuICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmNvbmNhdChpcy5hcnIoYikgPyBmbGF0dGVuQXJyYXkoYikgOiBiKTsgfSwgW10pO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KG8pIHtcbiAgaWYgKGlzLmFycihvKSkgeyByZXR1cm4gbzsgfVxuICBpZiAoaXMuc3RyKG8pKSB7IG8gPSBzZWxlY3RTdHJpbmcobykgfHwgbzsgfVxuICBpZiAobyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG8gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgeyByZXR1cm4gW10uc2xpY2UuY2FsbChvKTsgfVxuICByZXR1cm4gW29dO1xufVxuXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKGFyciwgdmFsKSB7XG4gIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSA9PT0gdmFsOyB9KTtcbn1cblxuLy8gT2JqZWN0c1xuXG5mdW5jdGlvbiBjbG9uZU9iamVjdChvKSB7XG4gIHZhciBjbG9uZSA9IHt9O1xuICBmb3IgKHZhciBwIGluIG8pIHsgY2xvbmVbcF0gPSBvW3BdOyB9XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU9iamVjdFByb3BzKG8xLCBvMikge1xuICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcbiAgZm9yICh2YXIgcCBpbiBvMSkgeyBvW3BdID0gbzIuaGFzT3duUHJvcGVydHkocCkgPyBvMltwXSA6IG8xW3BdOyB9XG4gIHJldHVybiBvO1xufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMobzEsIG8yKSB7XG4gIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xuICBmb3IgKHZhciBwIGluIG8yKSB7IG9bcF0gPSBpcy51bmQobzFbcF0pID8gbzJbcF0gOiBvMVtwXTsgfVxuICByZXR1cm4gbztcbn1cblxuLy8gQ29sb3JzXG5cbmZ1bmN0aW9uIHJnYlRvUmdiYShyZ2JWYWx1ZSkge1xuICB2YXIgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcbiAgcmV0dXJuIHJnYiA/IChcInJnYmEoXCIgKyAocmdiWzFdKSArIFwiLDEpXCIpIDogcmdiVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xuICB2YXIgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgdmFyIGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCBmdW5jdGlvbiAobSwgciwgZywgYikgeyByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiOyB9ICk7XG4gIHZhciByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgdmFyIHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcbiAgdmFyIGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcbiAgdmFyIGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcbiAgcmV0dXJuIChcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsMSlcIik7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xuICB2YXIgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcbiAgdmFyIGggPSBwYXJzZUludChoc2xbMV0sIDEwKSAvIDM2MDtcbiAgdmFyIHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcbiAgdmFyIGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcbiAgdmFyIGEgPSBoc2xbNF0gfHwgMTtcbiAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgaWYgKHQgPCAwKSB7IHQgKz0gMTsgfVxuICAgIGlmICh0ID4gMSkgeyB0IC09IDE7IH1cbiAgICBpZiAodCA8IDEvNikgeyByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDsgfVxuICAgIGlmICh0IDwgMS8yKSB7IHJldHVybiBxOyB9XG4gICAgaWYgKHQgPCAyLzMpIHsgcmV0dXJuIHAgKyAocSAtIHApICogKDIvMyAtIHQpICogNjsgfVxuICAgIHJldHVybiBwO1xuICB9XG4gIHZhciByLCBnLCBiO1xuICBpZiAocyA9PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgdmFyIHAgPSAyICogbCAtIHE7XG4gICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEvMyk7XG4gICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEvMyk7XG4gIH1cbiAgcmV0dXJuIChcInJnYmEoXCIgKyAociAqIDI1NSkgKyBcIixcIiArIChnICogMjU1KSArIFwiLFwiICsgKGIgKiAyNTUpICsgXCIsXCIgKyBhICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiBjb2xvclRvUmdiKHZhbCkge1xuICBpZiAoaXMucmdiKHZhbCkpIHsgcmV0dXJuIHJnYlRvUmdiYSh2YWwpOyB9XG4gIGlmIChpcy5oZXgodmFsKSkgeyByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7IH1cbiAgaWYgKGlzLmhzbCh2YWwpKSB7IHJldHVybiBoc2xUb1JnYmEodmFsKTsgfVxufVxuXG4vLyBVbml0c1xuXG5mdW5jdGlvbiBnZXRVbml0KHZhbCkge1xuICB2YXIgc3BsaXQgPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8oJXxweHxwdHxlbXxyZW18aW58Y218bW18ZXh8Y2h8cGN8dnd8dmh8dm1pbnx2bWF4fGRlZ3xyYWR8dHVybik/JC8uZXhlYyh2YWwpO1xuICBpZiAoc3BsaXQpIHsgcmV0dXJuIHNwbGl0WzFdOyB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpIHtcbiAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAndHJhbnNsYXRlJykgfHwgcHJvcE5hbWUgPT09ICdwZXJzcGVjdGl2ZScpIHsgcmV0dXJuICdweCc7IH1cbiAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAncm90YXRlJykgfHwgc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdza2V3JykpIHsgcmV0dXJuICdkZWcnOyB9XG59XG5cbi8vIFZhbHVlc1xuXG5mdW5jdGlvbiBnZXRGdW5jdGlvblZhbHVlKHZhbCwgYW5pbWF0YWJsZSkge1xuICBpZiAoIWlzLmZuYyh2YWwpKSB7IHJldHVybiB2YWw7IH1cbiAgcmV0dXJuIHZhbChhbmltYXRhYmxlLnRhcmdldCwgYW5pbWF0YWJsZS5pZCwgYW5pbWF0YWJsZS50b3RhbCk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbCwgcHJvcCkge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKHByb3ApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSB7XG4gIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcbiAgaWYgKGFycmF5Q29udGFpbnMoW3VuaXQsICdkZWcnLCAncmFkJywgJ3R1cm4nXSwgdmFsdWVVbml0KSkgeyByZXR1cm4gdmFsdWU7IH1cbiAgdmFyIGNhY2hlZCA9IGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdO1xuICBpZiAoIWlzLnVuZChjYWNoZWQpKSB7IHJldHVybiBjYWNoZWQ7IH1cbiAgdmFyIGJhc2VsaW5lID0gMTAwO1xuICB2YXIgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbC50YWdOYW1lKTtcbiAgdmFyIHBhcmVudEVsID0gKGVsLnBhcmVudE5vZGUgJiYgKGVsLnBhcmVudE5vZGUgIT09IGRvY3VtZW50KSkgPyBlbC5wYXJlbnROb2RlIDogZG9jdW1lbnQuYm9keTtcbiAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGVtcEVsKTtcbiAgdGVtcEVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgdGVtcEVsLnN0eWxlLndpZHRoID0gYmFzZWxpbmUgKyB1bml0O1xuICB2YXIgZmFjdG9yID0gYmFzZWxpbmUgLyB0ZW1wRWwub2Zmc2V0V2lkdGg7XG4gIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBFbCk7XG4gIHZhciBjb252ZXJ0ZWRVbml0ID0gZmFjdG9yICogcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdID0gY29udmVydGVkVW5pdDtcbiAgcmV0dXJuIGNvbnZlcnRlZFVuaXQ7XG59XG5cbmZ1bmN0aW9uIGdldENTU1ZhbHVlKGVsLCBwcm9wLCB1bml0KSB7XG4gIGlmIChwcm9wIGluIGVsLnN0eWxlKSB7XG4gICAgdmFyIHVwcGVyY2FzZVByb3BOYW1lID0gcHJvcC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciB2YWx1ZSA9IGVsLnN0eWxlW3Byb3BdIHx8IGdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUodXBwZXJjYXNlUHJvcE5hbWUpIHx8ICcwJztcbiAgICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uVHlwZShlbCwgcHJvcCkge1xuICBpZiAoaXMuZG9tKGVsKSAmJiAhaXMuaW5wKGVsKSAmJiAoIWlzLm5pbChnZXRBdHRyaWJ1dGUoZWwsIHByb3ApKSB8fCAoaXMuc3ZnKGVsKSAmJiBlbFtwcm9wXSkpKSB7IHJldHVybiAnYXR0cmlidXRlJzsgfVxuICBpZiAoaXMuZG9tKGVsKSAmJiBhcnJheUNvbnRhaW5zKHZhbGlkVHJhbnNmb3JtcywgcHJvcCkpIHsgcmV0dXJuICd0cmFuc2Zvcm0nOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIChwcm9wICE9PSAndHJhbnNmb3JtJyAmJiBnZXRDU1NWYWx1ZShlbCwgcHJvcCkpKSB7IHJldHVybiAnY3NzJzsgfVxuICBpZiAoZWxbcHJvcF0gIT0gbnVsbCkgeyByZXR1cm4gJ29iamVjdCc7IH1cbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpIHtcbiAgaWYgKCFpcy5kb20oZWwpKSB7IHJldHVybjsgfVxuICB2YXIgc3RyID0gZWwuc3R5bGUudHJhbnNmb3JtIHx8ICcnO1xuICB2YXIgcmVnICA9IC8oXFx3KylcXCgoW14pXSopXFwpL2c7XG4gIHZhciB0cmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xuICB2YXIgbTsgd2hpbGUgKG0gPSByZWcuZXhlYyhzdHIpKSB7IHRyYW5zZm9ybXMuc2V0KG1bMV0sIG1bMl0pOyB9XG4gIHJldHVybiB0cmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1WYWx1ZShlbCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpIHtcbiAgdmFyIGRlZmF1bHRWYWwgPSBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NjYWxlJykgPyAxIDogMCArIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpO1xuICB2YXIgdmFsdWUgPSBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkuZ2V0KHByb3BOYW1lKSB8fCBkZWZhdWx0VmFsO1xuICBpZiAoYW5pbWF0YWJsZSkge1xuICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtcy5saXN0LnNldChwcm9wTmFtZSwgdmFsdWUpO1xuICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtc1snbGFzdCddID0gcHJvcE5hbWU7XG4gIH1cbiAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQsIGFuaW1hdGFibGUpIHtcbiAgc3dpdGNoIChnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcE5hbWUpKSB7XG4gICAgY2FzZSAndHJhbnNmb3JtJzogcmV0dXJuIGdldFRyYW5zZm9ybVZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpO1xuICAgIGNhc2UgJ2Nzcyc6IHJldHVybiBnZXRDU1NWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0KTtcbiAgICBjYXNlICdhdHRyaWJ1dGUnOiByZXR1cm4gZ2V0QXR0cmlidXRlKHRhcmdldCwgcHJvcE5hbWUpO1xuICAgIGRlZmF1bHQ6IHJldHVybiB0YXJnZXRbcHJvcE5hbWVdIHx8IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSkge1xuICB2YXIgb3BlcmF0b3IgPSAvXihcXCo9fFxcKz18LT0pLy5leGVjKHRvKTtcbiAgaWYgKCFvcGVyYXRvcikgeyByZXR1cm4gdG87IH1cbiAgdmFyIHUgPSBnZXRVbml0KHRvKSB8fCAwO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoZnJvbSk7XG4gIHZhciB5ID0gcGFyc2VGbG9hdCh0by5yZXBsYWNlKG9wZXJhdG9yWzBdLCAnJykpO1xuICBzd2l0Y2ggKG9wZXJhdG9yWzBdWzBdKSB7XG4gICAgY2FzZSAnKyc6IHJldHVybiB4ICsgeSArIHU7XG4gICAgY2FzZSAnLSc6IHJldHVybiB4IC0geSArIHU7XG4gICAgY2FzZSAnKic6IHJldHVybiB4ICogeSArIHU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVWYWx1ZSh2YWwsIHVuaXQpIHtcbiAgaWYgKGlzLmNvbCh2YWwpKSB7IHJldHVybiBjb2xvclRvUmdiKHZhbCk7IH1cbiAgaWYgKC9cXHMvZy50ZXN0KHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICB2YXIgb3JpZ2luYWxVbml0ID0gZ2V0VW5pdCh2YWwpO1xuICB2YXIgdW5pdExlc3MgPSBvcmlnaW5hbFVuaXQgPyB2YWwuc3Vic3RyKDAsIHZhbC5sZW5ndGggLSBvcmlnaW5hbFVuaXQubGVuZ3RoKSA6IHZhbDtcbiAgaWYgKHVuaXQpIHsgcmV0dXJuIHVuaXRMZXNzICsgdW5pdDsgfVxuICByZXR1cm4gdW5pdExlc3M7XG59XG5cbi8vIGdldFRvdGFsTGVuZ3RoKCkgZXF1aXZhbGVudCBmb3IgY2lyY2xlLCByZWN0LCBwb2x5bGluZSwgcG9seWdvbiBhbmQgbGluZSBzaGFwZXNcbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9TZWJMYW1ibGEvM2UwNTUwYzQ5NmMyMzY3MDk3NDRcblxuZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2lyY2xlTGVuZ3RoKGVsKSB7XG4gIHJldHVybiBNYXRoLlBJICogMiAqIGdldEF0dHJpYnV0ZShlbCwgJ3InKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjdExlbmd0aChlbCkge1xuICByZXR1cm4gKGdldEF0dHJpYnV0ZShlbCwgJ3dpZHRoJykgKiAyKSArIChnZXRBdHRyaWJ1dGUoZWwsICdoZWlnaHQnKSAqIDIpO1xufVxuXG5mdW5jdGlvbiBnZXRMaW5lTGVuZ3RoKGVsKSB7XG4gIHJldHVybiBnZXREaXN0YW5jZShcbiAgICB7eDogZ2V0QXR0cmlidXRlKGVsLCAneDEnKSwgeTogZ2V0QXR0cmlidXRlKGVsLCAneTEnKX0sIFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MicpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MicpfVxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRQb2x5bGluZUxlbmd0aChlbCkge1xuICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xuICB2YXIgdG90YWxMZW5ndGggPSAwO1xuICB2YXIgcHJldmlvdXNQb3M7XG4gIGZvciAodmFyIGkgPSAwIDsgaSA8IHBvaW50cy5udW1iZXJPZkl0ZW1zOyBpKyspIHtcbiAgICB2YXIgY3VycmVudFBvcyA9IHBvaW50cy5nZXRJdGVtKGkpO1xuICAgIGlmIChpID4gMCkgeyB0b3RhbExlbmd0aCArPSBnZXREaXN0YW5jZShwcmV2aW91c1BvcywgY3VycmVudFBvcyk7IH1cbiAgICBwcmV2aW91c1BvcyA9IGN1cnJlbnRQb3M7XG4gIH1cbiAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBnZXRQb2x5Z29uTGVuZ3RoKGVsKSB7XG4gIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XG4gIHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCkgKyBnZXREaXN0YW5jZShwb2ludHMuZ2V0SXRlbShwb2ludHMubnVtYmVyT2ZJdGVtcyAtIDEpLCBwb2ludHMuZ2V0SXRlbSgwKSk7XG59XG5cbi8vIFBhdGggYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIGdldFRvdGFsTGVuZ3RoKGVsKSB7XG4gIGlmIChlbC5nZXRUb3RhbExlbmd0aCkgeyByZXR1cm4gZWwuZ2V0VG90YWxMZW5ndGgoKTsgfVxuICBzd2l0Y2goZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnY2lyY2xlJzogcmV0dXJuIGdldENpcmNsZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncmVjdCc6IHJldHVybiBnZXRSZWN0TGVuZ3RoKGVsKTtcbiAgICBjYXNlICdsaW5lJzogcmV0dXJuIGdldExpbmVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3BvbHlsaW5lJzogcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdwb2x5Z29uJzogcmV0dXJuIGdldFBvbHlnb25MZW5ndGgoZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldERhc2hvZmZzZXQoZWwpIHtcbiAgdmFyIHBhdGhMZW5ndGggPSBnZXRUb3RhbExlbmd0aChlbCk7XG4gIGVsLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHBhdGhMZW5ndGgpO1xuICByZXR1cm4gcGF0aExlbmd0aDtcbn1cblxuLy8gTW90aW9uIHBhdGhcblxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnRWwoZWwpIHtcbiAgdmFyIHBhcmVudEVsID0gZWwucGFyZW50Tm9kZTtcbiAgd2hpbGUgKGlzLnN2ZyhwYXJlbnRFbCkpIHtcbiAgICBpZiAoIWlzLnN2ZyhwYXJlbnRFbC5wYXJlbnROb2RlKSkgeyBicmVhazsgfVxuICAgIHBhcmVudEVsID0gcGFyZW50RWwucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gcGFyZW50RWw7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudFN2ZyhwYXRoRWwsIHN2Z0RhdGEpIHtcbiAgdmFyIHN2ZyA9IHN2Z0RhdGEgfHwge307XG4gIHZhciBwYXJlbnRTdmdFbCA9IHN2Zy5lbCB8fCBnZXRQYXJlbnRTdmdFbChwYXRoRWwpO1xuICB2YXIgcmVjdCA9IHBhcmVudFN2Z0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgdmlld0JveEF0dHIgPSBnZXRBdHRyaWJ1dGUocGFyZW50U3ZnRWwsICd2aWV3Qm94Jyk7XG4gIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XG4gIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgdmFyIHZpZXdCb3ggPSBzdmcudmlld0JveCB8fCAodmlld0JveEF0dHIgPyB2aWV3Qm94QXR0ci5zcGxpdCgnICcpIDogWzAsIDAsIHdpZHRoLCBoZWlnaHRdKTtcbiAgcmV0dXJuIHtcbiAgICBlbDogcGFyZW50U3ZnRWwsXG4gICAgdmlld0JveDogdmlld0JveCxcbiAgICB4OiB2aWV3Qm94WzBdIC8gMSxcbiAgICB5OiB2aWV3Qm94WzFdIC8gMSxcbiAgICB3OiB3aWR0aCxcbiAgICBoOiBoZWlnaHQsXG4gICAgdlc6IHZpZXdCb3hbMl0sXG4gICAgdkg6IHZpZXdCb3hbM11cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoKHBhdGgsIHBlcmNlbnQpIHtcbiAgdmFyIHBhdGhFbCA9IGlzLnN0cihwYXRoKSA/IHNlbGVjdFN0cmluZyhwYXRoKVswXSA6IHBhdGg7XG4gIHZhciBwID0gcGVyY2VudCB8fCAxMDA7XG4gIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICBlbDogcGF0aEVsLFxuICAgICAgc3ZnOiBnZXRQYXJlbnRTdmcocGF0aEVsKSxcbiAgICAgIHRvdGFsTGVuZ3RoOiBnZXRUb3RhbExlbmd0aChwYXRoRWwpICogKHAgLyAxMDApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGhQcm9ncmVzcyhwYXRoLCBwcm9ncmVzcywgaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKSB7XG4gIGZ1bmN0aW9uIHBvaW50KG9mZnNldCkge1xuICAgIGlmICggb2Zmc2V0ID09PSB2b2lkIDAgKSBvZmZzZXQgPSAwO1xuXG4gICAgdmFyIGwgPSBwcm9ncmVzcyArIG9mZnNldCA+PSAxID8gcHJvZ3Jlc3MgKyBvZmZzZXQgOiAwO1xuICAgIHJldHVybiBwYXRoLmVsLmdldFBvaW50QXRMZW5ndGgobCk7XG4gIH1cbiAgdmFyIHN2ZyA9IGdldFBhcmVudFN2ZyhwYXRoLmVsLCBwYXRoLnN2Zyk7XG4gIHZhciBwID0gcG9pbnQoKTtcbiAgdmFyIHAwID0gcG9pbnQoLTEpO1xuICB2YXIgcDEgPSBwb2ludCgrMSk7XG4gIHZhciBzY2FsZVggPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLncgLyBzdmcudlc7XG4gIHZhciBzY2FsZVkgPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLmggLyBzdmcudkg7XG4gIHN3aXRjaCAocGF0aC5wcm9wZXJ0eSkge1xuICAgIGNhc2UgJ3gnOiByZXR1cm4gKHAueCAtIHN2Zy54KSAqIHNjYWxlWDtcbiAgICBjYXNlICd5JzogcmV0dXJuIChwLnkgLSBzdmcueSkgKiBzY2FsZVk7XG4gICAgY2FzZSAnYW5nbGUnOiByZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcbiAgfVxufVxuXG4vLyBEZWNvbXBvc2UgdmFsdWVcblxuZnVuY3Rpb24gZGVjb21wb3NlVmFsdWUodmFsLCB1bml0KSB7XG4gIC8vIGNvbnN0IHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nOyAvLyBoYW5kbGVzIGJhc2ljIG51bWJlcnNcbiAgLy8gY29uc3Qgcmd4ID0gL1srLV0/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxuICB2YXIgcmd4ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXG4gIHZhciB2YWx1ZSA9IHZhbGlkYXRlVmFsdWUoKGlzLnB0aCh2YWwpID8gdmFsLnRvdGFsTGVuZ3RoIDogdmFsKSwgdW5pdCkgKyAnJztcbiAgcmV0dXJuIHtcbiAgICBvcmlnaW5hbDogdmFsdWUsXG4gICAgbnVtYmVyczogdmFsdWUubWF0Y2gocmd4KSA/IHZhbHVlLm1hdGNoKHJneCkubWFwKE51bWJlcikgOiBbMF0sXG4gICAgc3RyaW5nczogKGlzLnN0cih2YWwpIHx8IHVuaXQpID8gdmFsdWUuc3BsaXQocmd4KSA6IFtdXG4gIH1cbn1cblxuLy8gQW5pbWF0YWJsZXNcblxuZnVuY3Rpb24gcGFyc2VUYXJnZXRzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldHNBcnJheSA9IHRhcmdldHMgPyAoZmxhdHRlbkFycmF5KGlzLmFycih0YXJnZXRzKSA/IHRhcmdldHMubWFwKHRvQXJyYXkpIDogdG9BcnJheSh0YXJnZXRzKSkpIDogW107XG4gIHJldHVybiBmaWx0ZXJBcnJheSh0YXJnZXRzQXJyYXksIGZ1bmN0aW9uIChpdGVtLCBwb3MsIHNlbGYpIHsgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gcG9zOyB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cykge1xuICB2YXIgcGFyc2VkID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICByZXR1cm4gcGFyc2VkLm1hcChmdW5jdGlvbiAodCwgaSkge1xuICAgIHJldHVybiB7dGFyZ2V0OiB0LCBpZDogaSwgdG90YWw6IHBhcnNlZC5sZW5ndGgsIHRyYW5zZm9ybXM6IHsgbGlzdDogZ2V0RWxlbWVudFRyYW5zZm9ybXModCkgfSB9O1xuICB9KTtcbn1cblxuLy8gUHJvcGVydGllc1xuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwcm9wLCB0d2VlblNldHRpbmdzKSB7XG4gIHZhciBzZXR0aW5ncyA9IGNsb25lT2JqZWN0KHR3ZWVuU2V0dGluZ3MpO1xuICAvLyBPdmVycmlkZSBkdXJhdGlvbiBpZiBlYXNpbmcgaXMgYSBzcHJpbmdcbiAgaWYgKC9ec3ByaW5nLy50ZXN0KHNldHRpbmdzLmVhc2luZykpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSBzcHJpbmcoc2V0dGluZ3MuZWFzaW5nKTsgfVxuICBpZiAoaXMuYXJyKHByb3ApKSB7XG4gICAgdmFyIGwgPSBwcm9wLmxlbmd0aDtcbiAgICB2YXIgaXNGcm9tVG8gPSAobCA9PT0gMiAmJiAhaXMub2JqKHByb3BbMF0pKTtcbiAgICBpZiAoIWlzRnJvbVRvKSB7XG4gICAgICAvLyBEdXJhdGlvbiBkaXZpZGVkIGJ5IHRoZSBudW1iZXIgb2YgdHdlZW5zXG4gICAgICBpZiAoIWlzLmZuYyh0d2VlblNldHRpbmdzLmR1cmF0aW9uKSkgeyBzZXR0aW5ncy5kdXJhdGlvbiA9IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24gLyBsOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyYW5zZm9ybSBbZnJvbSwgdG9dIHZhbHVlcyBzaG9ydGhhbmQgdG8gYSB2YWxpZCB0d2VlbiB2YWx1ZVxuICAgICAgcHJvcCA9IHt2YWx1ZTogcHJvcH07XG4gICAgfVxuICB9XG4gIHZhciBwcm9wQXJyYXkgPSBpcy5hcnIocHJvcCkgPyBwcm9wIDogW3Byb3BdO1xuICByZXR1cm4gcHJvcEFycmF5Lm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgIHZhciBvYmogPSAoaXMub2JqKHYpICYmICFpcy5wdGgodikpID8gdiA6IHt2YWx1ZTogdn07XG4gICAgLy8gRGVmYXVsdCBkZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBmaXJzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmRlbGF5KSkgeyBvYmouZGVsYXkgPSAhaSA/IHR3ZWVuU2V0dGluZ3MuZGVsYXkgOiAwOyB9XG4gICAgLy8gRGVmYXVsdCBlbmREZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBsYXN0IHR3ZWVuXG4gICAgaWYgKGlzLnVuZChvYmouZW5kRGVsYXkpKSB7IG9iai5lbmREZWxheSA9IGkgPT09IHByb3BBcnJheS5sZW5ndGggLSAxID8gdHdlZW5TZXR0aW5ncy5lbmREZWxheSA6IDA7IH1cbiAgICByZXR1cm4gb2JqO1xuICB9KS5tYXAoZnVuY3Rpb24gKGspIHsgcmV0dXJuIG1lcmdlT2JqZWN0cyhrLCBzZXR0aW5ncyk7IH0pO1xufVxuXG5cbmZ1bmN0aW9uIGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSB7XG4gIHZhciBwcm9wZXJ0eU5hbWVzID0gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gT2JqZWN0LmtleXMoa2V5KTsgfSkpLCBmdW5jdGlvbiAocCkgeyByZXR1cm4gaXMua2V5KHApOyB9KVxuICAucmVkdWNlKGZ1bmN0aW9uIChhLGIpIHsgaWYgKGEuaW5kZXhPZihiKSA8IDApIHsgYS5wdXNoKGIpOyB9IHJldHVybiBhOyB9LCBbXSk7XG4gIHZhciBwcm9wZXJ0aWVzID0ge307XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBpICkge1xuICAgIHZhciBwcm9wTmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSBrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBuZXdLZXkgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4ga2V5KSB7XG4gICAgICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgICAgICBpZiAocCA9PSBwcm9wTmFtZSkgeyBuZXdLZXkudmFsdWUgPSBrZXlbcF07IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdLZXlbcF0gPSBrZXlbcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdLZXk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSBsb29wKCBpICk7XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcykge1xuICB2YXIgcHJvcGVydGllcyA9IFtdO1xuICB2YXIga2V5ZnJhbWVzID0gcGFyYW1zLmtleWZyYW1lcztcbiAgaWYgKGtleWZyYW1lcykgeyBwYXJhbXMgPSBtZXJnZU9iamVjdHMoZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpLCBwYXJhbXMpOyB9XG4gIGZvciAodmFyIHAgaW4gcGFyYW1zKSB7XG4gICAgaWYgKGlzLmtleShwKSkge1xuICAgICAgcHJvcGVydGllcy5wdXNoKHtcbiAgICAgICAgbmFtZTogcCxcbiAgICAgICAgdHdlZW5zOiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwYXJhbXNbcF0sIHR3ZWVuU2V0dGluZ3MpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbi8vIFR3ZWVuc1xuXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlblZhbHVlcyh0d2VlbiwgYW5pbWF0YWJsZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHR3ZWVuKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlbltwXSwgYW5pbWF0YWJsZSk7XG4gICAgaWYgKGlzLmFycih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBnZXRGdW5jdGlvblZhbHVlKHYsIGFuaW1hdGFibGUpOyB9KTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHsgdmFsdWUgPSB2YWx1ZVswXTsgfVxuICAgIH1cbiAgICB0W3BdID0gdmFsdWU7XG4gIH1cbiAgdC5kdXJhdGlvbiA9IHBhcnNlRmxvYXQodC5kdXJhdGlvbik7XG4gIHQuZGVsYXkgPSBwYXJzZUZsb2F0KHQuZGVsYXkpO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpIHtcbiAgdmFyIHByZXZpb3VzVHdlZW47XG4gIHJldHVybiBwcm9wLnR3ZWVucy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdHdlZW4gPSBub3JtYWxpemVUd2VlblZhbHVlcyh0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgdHdlZW5WYWx1ZSA9IHR3ZWVuLnZhbHVlO1xuICAgIHZhciB0byA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMV0gOiB0d2VlblZhbHVlO1xuICAgIHZhciB0b1VuaXQgPSBnZXRVbml0KHRvKTtcbiAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSwgdG9Vbml0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLnRvLm9yaWdpbmFsIDogb3JpZ2luYWxWYWx1ZTtcbiAgICB2YXIgZnJvbSA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMF0gOiBwcmV2aW91c1ZhbHVlO1xuICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQoZnJvbSkgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcbiAgICB2YXIgdW5pdCA9IHRvVW5pdCB8fCBmcm9tVW5pdDtcbiAgICBpZiAoaXMudW5kKHRvKSkgeyB0byA9IHByZXZpb3VzVmFsdWU7IH1cbiAgICB0d2Vlbi5mcm9tID0gZGVjb21wb3NlVmFsdWUoZnJvbSwgdW5pdCk7XG4gICAgdHdlZW4udG8gPSBkZWNvbXBvc2VWYWx1ZShnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSwgdW5pdCk7XG4gICAgdHdlZW4uc3RhcnQgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi5lbmQgOiAwO1xuICAgIHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0ICsgdHdlZW4uZGVsYXkgKyB0d2Vlbi5kdXJhdGlvbiArIHR3ZWVuLmVuZERlbGF5O1xuICAgIHR3ZWVuLmVhc2luZyA9IHBhcnNlRWFzaW5ncyh0d2Vlbi5lYXNpbmcsIHR3ZWVuLmR1cmF0aW9uKTtcbiAgICB0d2Vlbi5pc1BhdGggPSBpcy5wdGgodHdlZW5WYWx1ZSk7XG4gICAgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID0gdHdlZW4uaXNQYXRoICYmIGlzLnN2ZyhhbmltYXRhYmxlLnRhcmdldCk7XG4gICAgdHdlZW4uaXNDb2xvciA9IGlzLmNvbCh0d2Vlbi5mcm9tLm9yaWdpbmFsKTtcbiAgICBpZiAodHdlZW4uaXNDb2xvcikgeyB0d2Vlbi5yb3VuZCA9IDE7IH1cbiAgICBwcmV2aW91c1R3ZWVuID0gdHdlZW47XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9KTtcbn1cblxuLy8gVHdlZW4gcHJvZ3Jlc3NcblxudmFyIHNldFByb2dyZXNzVmFsdWUgPSB7XG4gIGNzczogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHQuc3R5bGVbcF0gPSB2OyB9LFxuICBhdHRyaWJ1dGU6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnNldEF0dHJpYnV0ZShwLCB2KTsgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdFtwXSA9IHY7IH0sXG4gIHRyYW5zZm9ybTogZnVuY3Rpb24gKHQsIHAsIHYsIHRyYW5zZm9ybXMsIG1hbnVhbCkge1xuICAgIHRyYW5zZm9ybXMubGlzdC5zZXQocCwgdik7XG4gICAgaWYgKHAgPT09IHRyYW5zZm9ybXMubGFzdCB8fCBtYW51YWwpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgIHRyYW5zZm9ybXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkgeyBzdHIgKz0gcHJvcCArIFwiKFwiICsgdmFsdWUgKyBcIikgXCI7IH0pO1xuICAgICAgdC5zdHlsZS50cmFuc2Zvcm0gPSBzdHI7XG4gICAgfVxuICB9XG59O1xuXG4vLyBTZXQgVmFsdWUgaGVscGVyXG5cbmZ1bmN0aW9uIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHRhcmdldHMpO1xuICBhbmltYXRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltYXRhYmxlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdGFyZ2V0ID0gYW5pbWF0YWJsZS50YXJnZXQ7XG4gICAgICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XG4gICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWVVbml0LCBhbmltYXRhYmxlKTtcbiAgICAgIHZhciB1bml0ID0gdmFsdWVVbml0IHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgdG8gPSBnZXRSZWxhdGl2ZVZhbHVlKHZhbGlkYXRlVmFsdWUodmFsdWUsIHVuaXQpLCBvcmlnaW5hbFZhbHVlKTtcbiAgICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW1UeXBlXSh0YXJnZXQsIHByb3BlcnR5LCB0bywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBBbmltYXRpb25zXG5cbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKSB7XG4gIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSk7XG4gIGlmIChhbmltVHlwZSkge1xuICAgIHZhciB0d2VlbnMgPSBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIGxhc3RUd2VlbiA9IHR3ZWVuc1t0d2VlbnMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFuaW1UeXBlLFxuICAgICAgcHJvcGVydHk6IHByb3AubmFtZSxcbiAgICAgIGFuaW1hdGFibGU6IGFuaW1hdGFibGUsXG4gICAgICB0d2VlbnM6IHR3ZWVucyxcbiAgICAgIGR1cmF0aW9uOiBsYXN0VHdlZW4uZW5kLFxuICAgICAgZGVsYXk6IHR3ZWVuc1swXS5kZWxheSxcbiAgICAgIGVuZERlbGF5OiBsYXN0VHdlZW4uZW5kRGVsYXlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcykge1xuICByZXR1cm4gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGFuaW1hdGFibGVzLm1hcChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKTtcbiAgICB9KTtcbiAgfSkpLCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWlzLnVuZChhKTsgfSk7XG59XG5cbi8vIENyZWF0ZSBJbnN0YW5jZVxuXG5mdW5jdGlvbiBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgYW5pbUxlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICB2YXIgZ2V0VGxPZmZzZXQgPSBmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gYW5pbS50aW1lbGluZU9mZnNldCA/IGFuaW0udGltZWxpbmVPZmZzZXQgOiAwOyB9O1xuICB2YXIgdGltaW5ncyA9IHt9O1xuICB0aW1pbmdzLmR1cmF0aW9uID0gYW5pbUxlbmd0aCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb247IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb247XG4gIHRpbWluZ3MuZGVsYXkgPSBhbmltTGVuZ3RoID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kZWxheTsgfSkpIDogdHdlZW5TZXR0aW5ncy5kZWxheTtcbiAgdGltaW5ncy5lbmREZWxheSA9IGFuaW1MZW5ndGggPyB0aW1pbmdzLmR1cmF0aW9uIC0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbiAtIGFuaW0uZW5kRGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXk7XG4gIHJldHVybiB0aW1pbmdzO1xufVxuXG52YXIgaW5zdGFuY2VJRCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcykge1xuICB2YXIgaW5zdGFuY2VTZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIHR3ZWVuU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyhwYXJhbXMudGFyZ2V0cyk7XG4gIHZhciBhbmltYXRpb25zID0gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcyk7XG4gIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpO1xuICB2YXIgaWQgPSBpbnN0YW5jZUlEO1xuICBpbnN0YW5jZUlEKys7XG4gIHJldHVybiBtZXJnZU9iamVjdHMoaW5zdGFuY2VTZXR0aW5ncywge1xuICAgIGlkOiBpZCxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYW5pbWF0YWJsZXM6IGFuaW1hdGFibGVzLFxuICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXG4gICAgZHVyYXRpb246IHRpbWluZ3MuZHVyYXRpb24sXG4gICAgZGVsYXk6IHRpbWluZ3MuZGVsYXksXG4gICAgZW5kRGVsYXk6IHRpbWluZ3MuZW5kRGVsYXlcbiAgfSk7XG59XG5cbi8vIENvcmVcblxudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xuXG52YXIgZW5naW5lID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJhZjtcblxuICBmdW5jdGlvbiBwbGF5KCkge1xuICAgIGlmICghcmFmICYmICghaXNEb2N1bWVudEhpZGRlbigpIHx8ICFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSAmJiBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzdGVwKHQpIHtcbiAgICAvLyBtZW1vIG9uIGFsZ29yaXRobSBpc3N1ZTpcbiAgICAvLyBkYW5nZXJvdXMgaXRlcmF0aW9uIG92ZXIgbXV0YWJsZSBgYWN0aXZlSW5zdGFuY2VzYFxuICAgIC8vICh0aGF0IGNvbGxlY3Rpb24gbWF5IGJlIHVwZGF0ZWQgZnJvbSB3aXRoaW4gY2FsbGJhY2tzIG9mIGB0aWNrYC1lZCBhbmltYXRpb24gaW5zdGFuY2VzKVxuICAgIHZhciBhY3RpdmVJbnN0YW5jZXNMZW5ndGggPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xuICAgICAgdmFyIGFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xuICAgICAgaWYgKCFhY3RpdmVJbnN0YW5jZS5wYXVzZWQpIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2UudGljayh0KTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuICAgIHJhZiA9IGkgPiAwID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICBpZiAoIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoaXNEb2N1bWVudEhpZGRlbigpKSB7XG4gICAgICAvLyBzdXNwZW5kIHRpY2tzXG4gICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH0gZWxzZSB7IC8vIGlzIGJhY2sgdG8gYWN0aXZlIHRhYlxuICAgICAgLy8gZmlyc3QgYWRqdXN0IGFuaW1hdGlvbnMgdG8gY29uc2lkZXIgdGhlIHRpbWUgdGhhdCB0aWNrcyB3ZXJlIHN1c3BlbmRlZFxuICAgICAgYWN0aXZlSW5zdGFuY2VzLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkgeyByZXR1cm4gaW5zdGFuY2UgLl9vbkRvY3VtZW50VmlzaWJpbGl0eSgpOyB9XG4gICAgICApO1xuICAgICAgZW5naW5lKCk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHBsYXk7XG59KSgpO1xuXG5mdW5jdGlvbiBpc0RvY3VtZW50SGlkZGVuKCkge1xuICByZXR1cm4gISFkb2N1bWVudCAmJiBkb2N1bWVudC5oaWRkZW47XG59XG5cbi8vIFB1YmxpYyBJbnN0YW5jZVxuXG5mdW5jdGlvbiBhbmltZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG5cbiAgdmFyIHN0YXJ0VGltZSA9IDAsIGxhc3RUaW1lID0gMCwgbm93ID0gMDtcbiAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCA9IDA7XG4gIHZhciByZXNvbHZlID0gbnVsbDtcblxuICBmdW5jdGlvbiBtYWtlUHJvbWlzZShpbnN0YW5jZSkge1xuICAgIHZhciBwcm9taXNlID0gd2luZG93LlByb21pc2UgJiYgbmV3IFByb21pc2UoZnVuY3Rpb24gKF9yZXNvbHZlKSB7IHJldHVybiByZXNvbHZlID0gX3Jlc29sdmU7IH0pO1xuICAgIGluc3RhbmNlLmZpbmlzaGVkID0gcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHZhciBpbnN0YW5jZSA9IGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcyk7XG4gIHZhciBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgIGluc3RhbmNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiAhPT0gJ25vcm1hbCcgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJztcbiAgICB9XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSAhaW5zdGFuY2UucmV2ZXJzZWQ7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLnJldmVyc2VkID0gaW5zdGFuY2UucmV2ZXJzZWQ7IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0VGltZSh0aW1lKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VGltZSgpIHtcbiAgICBzdGFydFRpbWUgPSAwO1xuICAgIGxhc3RUaW1lID0gYWRqdXN0VGltZShpbnN0YW5jZS5jdXJyZW50VGltZSkgKiAoMSAvIGFuaW1lLnNwZWVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlZWtDaGlsZCh0aW1lLCBjaGlsZCkge1xuICAgIGlmIChjaGlsZCkgeyBjaGlsZC5zZWVrKHRpbWUgLSBjaGlsZC50aW1lbGluZU9mZnNldCk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNJbnN0YW5jZUNoaWxkcmVuKHRpbWUpIHtcbiAgICBpZiAoIWluc3RhbmNlLnJldmVyc2VQbGF5YmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7IHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpXSk7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykgeyBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baSQxXSk7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gICAgdmFyIGFuaW1hdGlvbnNMZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGFuaW1hdGlvbnNMZW5ndGgpIHtcbiAgICAgIHZhciBhbmltID0gYW5pbWF0aW9uc1tpXTtcbiAgICAgIHZhciBhbmltYXRhYmxlID0gYW5pbS5hbmltYXRhYmxlO1xuICAgICAgdmFyIHR3ZWVucyA9IGFuaW0udHdlZW5zO1xuICAgICAgdmFyIHR3ZWVuTGVuZ3RoID0gdHdlZW5zLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgdHdlZW4gPSB0d2VlbnNbdHdlZW5MZW5ndGhdO1xuICAgICAgLy8gT25seSBjaGVjayBmb3Iga2V5ZnJhbWVzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgdHdlZW5cbiAgICAgIGlmICh0d2Vlbkxlbmd0aCkgeyB0d2VlbiA9IGZpbHRlckFycmF5KHR3ZWVucywgZnVuY3Rpb24gKHQpIHsgcmV0dXJuIChpbnNUaW1lIDwgdC5lbmQpOyB9KVswXSB8fCB0d2VlbjsgfVxuICAgICAgdmFyIGVsYXBzZWQgPSBtaW5NYXgoaW5zVGltZSAtIHR3ZWVuLnN0YXJ0IC0gdHdlZW4uZGVsYXksIDAsIHR3ZWVuLmR1cmF0aW9uKSAvIHR3ZWVuLmR1cmF0aW9uO1xuICAgICAgdmFyIGVhc2VkID0gaXNOYU4oZWxhcHNlZCkgPyAxIDogdHdlZW4uZWFzaW5nKGVsYXBzZWQpO1xuICAgICAgdmFyIHN0cmluZ3MgPSB0d2Vlbi50by5zdHJpbmdzO1xuICAgICAgdmFyIHJvdW5kID0gdHdlZW4ucm91bmQ7XG4gICAgICB2YXIgbnVtYmVycyA9IFtdO1xuICAgICAgdmFyIHRvTnVtYmVyc0xlbmd0aCA9IHR3ZWVuLnRvLm51bWJlcnMubGVuZ3RoO1xuICAgICAgdmFyIHByb2dyZXNzID0gKHZvaWQgMCk7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRvTnVtYmVyc0xlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICh2b2lkIDApO1xuICAgICAgICB2YXIgdG9OdW1iZXIgPSB0d2Vlbi50by5udW1iZXJzW25dO1xuICAgICAgICB2YXIgZnJvbU51bWJlciA9IHR3ZWVuLmZyb20ubnVtYmVyc1tuXSB8fCAwO1xuICAgICAgICBpZiAoIXR3ZWVuLmlzUGF0aCkge1xuICAgICAgICAgIHZhbHVlID0gZnJvbU51bWJlciArIChlYXNlZCAqICh0b051bWJlciAtIGZyb21OdW1iZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGdldFBhdGhQcm9ncmVzcyh0d2Vlbi52YWx1ZSwgZWFzZWQgKiB0b051bWJlciwgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICBpZiAoISh0d2Vlbi5pc0NvbG9yICYmIG4gPiAyKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogcm91bmQpIC8gcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICAvLyBNYW51YWwgQXJyYXkucmVkdWNlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VzXG4gICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuICAgICAgaWYgKCFzdHJpbmdzTGVuZ3RoKSB7XG4gICAgICAgIHByb2dyZXNzID0gbnVtYmVyc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2dyZXNzID0gc3RyaW5nc1swXTtcbiAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBzdHJpbmdzTGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICB2YXIgYSA9IHN0cmluZ3Nbc107XG4gICAgICAgICAgdmFyIGIgPSBzdHJpbmdzW3MgKyAxXTtcbiAgICAgICAgICB2YXIgbiQxID0gbnVtYmVyc1tzXTtcbiAgICAgICAgICBpZiAoIWlzTmFOKG4kMSkpIHtcbiAgICAgICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyAnICc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltLnR5cGVdKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltLnByb3BlcnR5LCBwcm9ncmVzcywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zKTtcbiAgICAgIGFuaW0uY3VycmVudFZhbHVlID0gcHJvZ3Jlc3M7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q2FsbGJhY2soY2IpIHtcbiAgICBpZiAoaW5zdGFuY2VbY2JdICYmICFpbnN0YW5jZS5wYXNzVGhyb3VnaCkgeyBpbnN0YW5jZVtjYl0oaW5zdGFuY2UpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBjb3VudEl0ZXJhdGlvbigpIHtcbiAgICBpZiAoaW5zdGFuY2UucmVtYWluaW5nICYmIGluc3RhbmNlLnJlbWFpbmluZyAhPT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UucmVtYWluaW5nLS07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW5zdGFuY2VQcm9ncmVzcyhlbmdpbmVUaW1lKSB7XG4gICAgdmFyIGluc0R1cmF0aW9uID0gaW5zdGFuY2UuZHVyYXRpb247XG4gICAgdmFyIGluc0RlbGF5ID0gaW5zdGFuY2UuZGVsYXk7XG4gICAgdmFyIGluc0VuZERlbGF5ID0gaW5zRHVyYXRpb24gLSBpbnN0YW5jZS5lbmREZWxheTtcbiAgICB2YXIgaW5zVGltZSA9IGFkanVzdFRpbWUoZW5naW5lVGltZSk7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSBtaW5NYXgoKGluc1RpbWUgLyBpbnNEdXJhdGlvbikgKiAxMDAsIDAsIDEwMCk7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gaW5zVGltZSA8IGluc3RhbmNlLmN1cnJlbnRUaW1lO1xuICAgIGlmIChjaGlsZHJlbikgeyBzeW5jSW5zdGFuY2VDaGlsZHJlbihpbnNUaW1lKTsgfVxuICAgIGlmICghaW5zdGFuY2UuYmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICBpbnN0YW5jZS5iZWdhbiA9IHRydWU7XG4gICAgICBzZXRDYWxsYmFjaygnYmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKCFpbnN0YW5jZS5sb29wQmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSB0cnVlO1xuICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BCZWdpbicpO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA8PSBpbnNEZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gMCkge1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKDApO1xuICAgIH1cbiAgICBpZiAoKGluc1RpbWUgPj0gaW5zRW5kRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IGluc0R1cmF0aW9uKSB8fCAhaW5zRHVyYXRpb24pIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNEdXJhdGlvbik7XG4gICAgfVxuICAgIGlmIChpbnNUaW1lID4gaW5zRGVsYXkgJiYgaW5zVGltZSA8IGluc0VuZERlbGF5KSB7XG4gICAgICBpZiAoIWluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VCZWdpbicpO1xuICAgICAgfVxuICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZScpO1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gbWluTWF4KGluc1RpbWUsIDAsIGluc0R1cmF0aW9uKTtcbiAgICBpZiAoaW5zdGFuY2UuYmVnYW4pIHsgc2V0Q2FsbGJhY2soJ3VwZGF0ZScpOyB9XG4gICAgaWYgKGVuZ2luZVRpbWUgPj0gaW5zRHVyYXRpb24pIHtcbiAgICAgIGxhc3RUaW1lID0gMDtcbiAgICAgIGNvdW50SXRlcmF0aW9uKCk7XG4gICAgICBpZiAoIWluc3RhbmNlLnJlbWFpbmluZykge1xuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIWluc3RhbmNlLmNvbXBsZXRlZCkge1xuICAgICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdjb21wbGV0ZScpO1xuICAgICAgICAgIGlmICghaW5zdGFuY2UucGFzc1Rocm91Z2ggJiYgJ1Byb21pc2UnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IG5vdztcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xuICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKGluc3RhbmNlLmRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgICAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5zdGFuY2UucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xuICAgIGluc3RhbmNlLnBhc3NUaHJvdWdoID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSAwO1xuICAgIGluc3RhbmNlLnByb2dyZXNzID0gMDtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIGluc3RhbmNlLmJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlZCA9IGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnO1xuICAgIGluc3RhbmNlLnJlbWFpbmluZyA9IGluc3RhbmNlLmxvb3A7XG4gICAgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbkxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gY2hpbGRyZW5MZW5ndGg7IGktLTspIHsgaW5zdGFuY2UuY2hpbGRyZW5baV0ucmVzZXQoKTsgfVxuICAgIGlmIChpbnN0YW5jZS5yZXZlcnNlZCAmJiBpbnN0YW5jZS5sb29wICE9PSB0cnVlIHx8IChkaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnICYmIGluc3RhbmNlLmxvb3AgPT09IDEpKSB7IGluc3RhbmNlLnJlbWFpbmluZysrOyB9XG4gICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gOiAwKTtcbiAgfTtcblxuICAvLyBpbnRlcm5hbCBtZXRob2QgKGZvciBlbmdpbmUpIHRvIGFkanVzdCBhbmltYXRpb24gdGltaW5ncyBiZWZvcmUgcmVzdG9yaW5nIGVuZ2luZSB0aWNrcyAockFGKVxuICBpbnN0YW5jZS5fb25Eb2N1bWVudFZpc2liaWxpdHkgPSByZXNldFRpbWU7XG5cbiAgLy8gU2V0IFZhbHVlIGhlbHBlclxuXG4gIGluc3RhbmNlLnNldCA9IGZ1bmN0aW9uKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgICBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcyk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgbm93ID0gdDtcbiAgICBpZiAoIXN0YXJ0VGltZSkgeyBzdGFydFRpbWUgPSBub3c7IH1cbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKChub3cgKyAobGFzdFRpbWUgLSBzdGFydFRpbWUpKSAqIGFuaW1lLnNwZWVkKTtcbiAgfTtcblxuICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWluc3RhbmNlLnBhdXNlZCkgeyByZXR1cm47IH1cbiAgICBpZiAoaW5zdGFuY2UuY29tcGxldGVkKSB7IGluc3RhbmNlLnJlc2V0KCk7IH1cbiAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgcmVzZXRUaW1lKCk7XG4gICAgZW5naW5lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XG4gICAgaW5zdGFuY2UuY29tcGxldGVkID0gaW5zdGFuY2UucmV2ZXJzZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgcmVzZXRUaW1lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVzdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RhbmNlLnJlc2V0KCk7XG4gICAgaW5zdGFuY2UucGxheSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnJlbW92ZSA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcbiAgICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVzZXQoKTtcblxuICBpZiAoaW5zdGFuY2UuYXV0b3BsYXkpIHsgaW5zdGFuY2UucGxheSgpOyB9XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xuXG59XG5cbi8vIFJlbW92ZSB0YXJnZXRzIGZyb20gYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpIHtcbiAgZm9yICh2YXIgYSA9IGFuaW1hdGlvbnMubGVuZ3RoOyBhLS07KSB7XG4gICAgaWYgKGFycmF5Q29udGFpbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zW2FdLmFuaW1hdGFibGUudGFyZ2V0KSkge1xuICAgICAgYW5pbWF0aW9ucy5zcGxpY2UoYSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSkge1xuICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gIHZhciBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xuICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKTtcbiAgZm9yICh2YXIgYyA9IGNoaWxkcmVuLmxlbmd0aDsgYy0tOykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2NdO1xuICAgIHZhciBjaGlsZEFuaW1hdGlvbnMgPSBjaGlsZC5hbmltYXRpb25zO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGNoaWxkQW5pbWF0aW9ucyk7XG4gICAgaWYgKCFjaGlsZEFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZC5jaGlsZHJlbi5sZW5ndGgpIHsgY2hpbGRyZW4uc3BsaWNlKGMsIDEpOyB9XG4gIH1cbiAgaWYgKCFhbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7IGluc3RhbmNlLnBhdXNlKCk7IH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICBmb3IgKHZhciBpID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDsgaS0tOykge1xuICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcbiAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xuICB9XG59XG5cbi8vIFN0YWdnZXIgaGVscGVyc1xuXG5mdW5jdGlvbiBzdGFnZ2VyKHZhbCwgcGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiB8fCAnbm9ybWFsJztcbiAgdmFyIGVhc2luZyA9IHBhcmFtcy5lYXNpbmcgPyBwYXJzZUVhc2luZ3MocGFyYW1zLmVhc2luZykgOiBudWxsO1xuICB2YXIgZ3JpZCA9IHBhcmFtcy5ncmlkO1xuICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzO1xuICB2YXIgZnJvbUluZGV4ID0gcGFyYW1zLmZyb20gfHwgMDtcbiAgdmFyIGZyb21GaXJzdCA9IGZyb21JbmRleCA9PT0gJ2ZpcnN0JztcbiAgdmFyIGZyb21DZW50ZXIgPSBmcm9tSW5kZXggPT09ICdjZW50ZXInO1xuICB2YXIgZnJvbUxhc3QgPSBmcm9tSW5kZXggPT09ICdsYXN0JztcbiAgdmFyIGlzUmFuZ2UgPSBpcy5hcnIodmFsKTtcbiAgdmFyIHZhbDEgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMF0pIDogcGFyc2VGbG9hdCh2YWwpO1xuICB2YXIgdmFsMiA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFsxXSkgOiAwO1xuICB2YXIgdW5pdCA9IGdldFVuaXQoaXNSYW5nZSA/IHZhbFsxXSA6IHZhbCkgfHwgMDtcbiAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0IHx8IDAgKyAoaXNSYW5nZSA/IHZhbDEgOiAwKTtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICB2YXIgbWF4VmFsdWUgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKGVsLCBpLCB0KSB7XG4gICAgaWYgKGZyb21GaXJzdCkgeyBmcm9tSW5kZXggPSAwOyB9XG4gICAgaWYgKGZyb21DZW50ZXIpIHsgZnJvbUluZGV4ID0gKHQgLSAxKSAvIDI7IH1cbiAgICBpZiAoZnJvbUxhc3QpIHsgZnJvbUluZGV4ID0gdCAtIDE7IH1cbiAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKE1hdGguYWJzKGZyb21JbmRleCAtIGluZGV4KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZyb21YID0gIWZyb21DZW50ZXIgPyBmcm9tSW5kZXglZ3JpZFswXSA6IChncmlkWzBdLTEpLzI7XG4gICAgICAgICAgdmFyIGZyb21ZID0gIWZyb21DZW50ZXIgPyBNYXRoLmZsb29yKGZyb21JbmRleC9ncmlkWzBdKSA6IChncmlkWzFdLTEpLzI7XG4gICAgICAgICAgdmFyIHRvWCA9IGluZGV4JWdyaWRbMF07XG4gICAgICAgICAgdmFyIHRvWSA9IE1hdGguZmxvb3IoaW5kZXgvZ3JpZFswXSk7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IGZyb21YIC0gdG9YO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBmcm9tWSAtIHRvWTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBNYXRoLnNxcnQoZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZKTtcbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7IHZhbHVlID0gLWRpc3RhbmNlWDsgfVxuICAgICAgICAgIGlmIChheGlzID09PSAneScpIHsgdmFsdWUgPSAtZGlzdGFuY2VZOyB9XG4gICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG1heFZhbHVlID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChlYXNpbmcpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBlYXNpbmcodmFsIC8gbWF4VmFsdWUpICogbWF4VmFsdWU7IH0pOyB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncmV2ZXJzZScpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBheGlzID8gKHZhbCA8IDApID8gdmFsICogLTEgOiAtdmFsIDogTWF0aC5hYnMobWF4VmFsdWUgLSB2YWwpOyB9KTsgfVxuICAgIH1cbiAgICB2YXIgc3BhY2luZyA9IGlzUmFuZ2UgPyAodmFsMiAtIHZhbDEpIC8gbWF4VmFsdWUgOiB2YWwxO1xuICAgIHJldHVybiBzdGFydCArIChzcGFjaW5nICogKE1hdGgucm91bmQodmFsdWVzW2ldICogMTAwKSAvIDEwMCkpICsgdW5pdDtcbiAgfVxufVxuXG4vLyBUaW1lbGluZVxuXG5mdW5jdGlvbiB0aW1lbGluZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gIHZhciB0bCA9IGFuaW1lKHBhcmFtcyk7XG4gIHRsLmR1cmF0aW9uID0gMDtcbiAgdGwuYWRkID0gZnVuY3Rpb24oaW5zdGFuY2VQYXJhbXMsIHRpbWVsaW5lT2Zmc2V0KSB7XG4gICAgdmFyIHRsSW5kZXggPSBhY3RpdmVJbnN0YW5jZXMuaW5kZXhPZih0bCk7XG4gICAgdmFyIGNoaWxkcmVuID0gdGwuY2hpbGRyZW47XG4gICAgaWYgKHRsSW5kZXggPiAtMSkgeyBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKHRsSW5kZXgsIDEpOyB9XG4gICAgZnVuY3Rpb24gcGFzc1Rocm91Z2goaW5zKSB7IGlucy5wYXNzVGhyb3VnaCA9IHRydWU7IH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7IHBhc3NUaHJvdWdoKGNoaWxkcmVuW2ldKTsgfVxuICAgIHZhciBpbnNQYXJhbXMgPSBtZXJnZU9iamVjdHMoaW5zdGFuY2VQYXJhbXMsIHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKSk7XG4gICAgaW5zUGFyYW1zLnRhcmdldHMgPSBpbnNQYXJhbXMudGFyZ2V0cyB8fCBwYXJhbXMudGFyZ2V0cztcbiAgICB2YXIgdGxEdXJhdGlvbiA9IHRsLmR1cmF0aW9uO1xuICAgIGluc1BhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgIGluc1BhcmFtcy5kaXJlY3Rpb24gPSB0bC5kaXJlY3Rpb247XG4gICAgaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0ID0gaXMudW5kKHRpbWVsaW5lT2Zmc2V0KSA/IHRsRHVyYXRpb24gOiBnZXRSZWxhdGl2ZVZhbHVlKHRpbWVsaW5lT2Zmc2V0LCB0bER1cmF0aW9uKTtcbiAgICBwYXNzVGhyb3VnaCh0bCk7XG4gICAgdGwuc2VlayhpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQpO1xuICAgIHZhciBpbnMgPSBhbmltZShpbnNQYXJhbXMpO1xuICAgIHBhc3NUaHJvdWdoKGlucyk7XG4gICAgY2hpbGRyZW4ucHVzaChpbnMpO1xuICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGNoaWxkcmVuLCBwYXJhbXMpO1xuICAgIHRsLmRlbGF5ID0gdGltaW5ncy5kZWxheTtcbiAgICB0bC5lbmREZWxheSA9IHRpbWluZ3MuZW5kRGVsYXk7XG4gICAgdGwuZHVyYXRpb24gPSB0aW1pbmdzLmR1cmF0aW9uO1xuICAgIHRsLnNlZWsoMCk7XG4gICAgdGwucmVzZXQoKTtcbiAgICBpZiAodGwuYXV0b3BsYXkpIHsgdGwucGxheSgpOyB9XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuICByZXR1cm4gdGw7XG59XG5cbmFuaW1lLnZlcnNpb24gPSAnMy4yLjEnO1xuYW5pbWUuc3BlZWQgPSAxO1xuLy8gVE9ETzojcmV2aWV3OiBuYW1pbmcsIGRvY3VtZW50YXRpb25cbmFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4gPSB0cnVlO1xuYW5pbWUucnVubmluZyA9IGFjdGl2ZUluc3RhbmNlcztcbmFuaW1lLnJlbW92ZSA9IHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzO1xuYW5pbWUuZ2V0ID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZTtcbmFuaW1lLnNldCA9IHNldFRhcmdldHNWYWx1ZTtcbmFuaW1lLmNvbnZlcnRQeCA9IGNvbnZlcnRQeFRvVW5pdDtcbmFuaW1lLnBhdGggPSBnZXRQYXRoO1xuYW5pbWUuc2V0RGFzaG9mZnNldCA9IHNldERhc2hvZmZzZXQ7XG5hbmltZS5zdGFnZ2VyID0gc3RhZ2dlcjtcbmFuaW1lLnRpbWVsaW5lID0gdGltZWxpbmU7XG5hbmltZS5lYXNpbmcgPSBwYXJzZUVhc2luZ3M7XG5hbmltZS5wZW5uZXIgPSBwZW5uZXI7XG5hbmltZS5yYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IH07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1lO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvdHJhbnNpdGlvbic7XG5jb25zb2xlLmxvZygnYnVuZGxlJyk7XG4iLCJpbXBvcnQgYmFyYmEgZnJvbSAnQGJhcmJhL2NvcmUnO1xuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMvbGliL2FuaW1lLmVzLmpzJztcblxuYmFyYmEuaW5pdCh7XG4gICAgZGVidWc6IHRydWUsXG4gICAgdHJhbnNpdGlvbnM6IFt7XG4gICAgICAgIGxlYXZlOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGFuaW1lKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogZGF0YS5jdXJyZW50LmNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudGVyOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgYW5pbWUoe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IGRhdGEubmV4dC5jb250YWluZXIsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH1dXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=