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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
    leave: function leave(data) {// return new Promise(resolve => {
      //     anime({
      //         targets: data.current.container,
      //         opacity: 0,
      //         easing: 'linear',
      //         duration: 500,
      //         complete: () => {
      //             resolve();
      //         }
      //     });
      // });
    },
    enter: function enter(data) {// anime({
      //     targets: data.next.container,
      //     easing: 'linear',
      //     duration: 500,
      //     opacity: [0, 1],
      // });
    }
  }]
});

/***/ }),

/***/ 2:
/*!*******************************************************************!*\
  !*** multi ./themes/ta-portfolio/src/js/components/transition.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Thomas/Sites/portfolio/wp-content/themes/ta-portfolio/themes/ta-portfolio/src/js/components/transition.js */"./themes/ta-portfolio/src/js/components/transition.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWFzeW5jLXRvLXByb21pc2VzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tb2R1bGVzL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RlZnMvaG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3NjaGVtYXMvYXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMvaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy91cmwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy9yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXMtcHJvbWlzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL3J1bi1hc3luYy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2hvb2tzLnRzIiwid2VicGFjazovLy8uLi9zcmMvbW9kdWxlcy9JZ25vcmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tb2R1bGVzL0NhY2hlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbW9kdWxlcy9QcmV2ZW50LnRzIiwid2VicGFjazovLy8uLi9zcmMvbW9kdWxlcy9FcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL21vZHVsZXMvU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tb2R1bGVzL1RyYW5zaXRpb25zLnRzIiwid2VicGFjazovLy8uLi9zcmMvbW9kdWxlcy9WaWV3cy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BvbHlmaWxscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3NjaGVtYXMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1lanMvbGliL2FuaW1lLmVzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy90YS1wb3J0Zm9saW8vc3JjL2pzL2NvbXBvbmVudHMvdHJhbnNpdGlvbi5qcyJdLCJuYW1lcyI6WyJfY2F0Y2giLCJib2R5IiwicmVjb3ZlciIsInJlc3VsdCIsImUiLCJ0aGVuIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yIiwiTG9nTGV2ZWxzIiwiSG9va01ldGhvZHMiLCJfbGV2ZWwiLCJvZmYiLCJMb2dnZXIiLCJzb3VyY2UiLCJ0aGlzIiwiX3NvdXJjZSIsImdldExldmVsIiwic2V0TGV2ZWwiLCJuYW1lIiwiZXJyb3IiLCJvYmplY3RzIiwiX2xvZyIsImNvbnNvbGUiLCJ3YXJuIiwid2FybmluZyIsImluZm8iLCJkZWJ1ZyIsImxvZyIsImZuIiwibGV2ZWwiLCJhcHBseSIsImNvbmNhdCIsInBhdGhUb1JlZ2V4cCIsInJlZ2V4cFRvRnVuY3Rpb24iLCJwYXJzZSIsInRva2Vuc1RvRnVuY3Rpb24iLCJ0b2tlbnNUb1JlZ0V4cCIsIkRFRkFVTFRfREVMSU1JVEVSIiwiUEFUSF9SRUdFWFAiLCJSZWdFeHAiLCJqb2luIiwic3RyIiwib3B0aW9ucyIsInJlcyIsInRva2VucyIsImtleSIsImluZGV4IiwicGF0aCIsImRlZmF1bHREZWxpbWl0ZXIiLCJkZWxpbWl0ZXIiLCJ3aGl0ZWxpc3QiLCJ1bmRlZmluZWQiLCJwYXRoRXNjYXBlZCIsImV4ZWMiLCJtIiwiZXNjYXBlZCIsIm9mZnNldCIsInNsaWNlIiwibGVuZ3RoIiwicHJldiIsImNhcHR1cmUiLCJncm91cCIsIm1vZGlmaWVyIiwiayIsImMiLCJpbmRleE9mIiwicHVzaCIsInBhdHRlcm4iLCJwcmVmaXgiLCJvcHRpb25hbCIsInJlcGVhdCIsImVzY2FwZUdyb3VwIiwiZXNjYXBlU3RyaW5nIiwic3Vic3RyIiwicmUiLCJrZXlzIiwicGF0aG5hbWUiLCJwYXJhbXMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJpIiwic3BsaXQiLCJtYXAiLCJ2YWx1ZSIsIm1hdGNoZXMiLCJBcnJheSIsImZsYWdzIiwiZGF0YSIsImVuY29kZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInZhbGlkYXRlIiwidG9rZW4iLCJzZWdtZW50IiwiaXNBcnJheSIsIlR5cGVFcnJvciIsImoiLCJ0ZXN0IiwiU3RyaW5nIiwicmVwbGFjZSIsInNlbnNpdGl2ZSIsInN0cmljdCIsInN0YXJ0IiwiZW5kIiwiZW5kc1dpdGgiLCJyb3V0ZSIsImVuZFRva2VuIiwiaXNFbmREZWxpbWl0ZWQiLCJncm91cHMiLCJtYXRjaCIsInJlZ2V4cFRvUmVnZXhwIiwicGFydHMiLCJhcnJheVRvUmVnZXhwIiwic3RyaW5nVG9SZWdleHAiLCJzY2hlbWFBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJoaXN0b3J5IiwibmFtZXNwYWNlIiwicHJldmVudCIsIndyYXBwZXIiLCJkb20iLCJET01QYXJzZXIiLCJ0b1N0cmluZyIsImVsIiwib3V0ZXJIVE1MIiwidG9Eb2N1bWVudCIsImh0bWxTdHJpbmciLCJfcGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwidG9FbGVtZW50IiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZ2V0SHRtbCIsImRvYyIsImRvY3VtZW50RWxlbWVudCIsImdldFdyYXBwZXIiLCJzY29wZSIsInF1ZXJ5U2VsZWN0b3IiLCJfYXR0ciIsImdldENvbnRhaW5lciIsInJlbW92ZUNvbnRhaW5lciIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYWRkQ29udGFpbmVyIiwiZXhpc3RpbmdDb250YWluZXIiLCJfaW5zZXJ0QWZ0ZXIiLCJhcHBlbmRDaGlsZCIsImdldE5hbWVzcGFjZSIsIm5zIiwiZ2V0QXR0cmlidXRlIiwiZ2V0SHJlZiIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImhyZWYiLCJyZXNvbHZlVXJsIiwiYmFzZVZhbCIsInVybHMiLCJudW1VcmxzIiwiRXJyb3IiLCJiYXNlIiwiYXJndW1lbnRzIiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInJlc29sdmVkIiwiYSIsIm5ld05vZGUiLCJyZWZlcmVuY2VOb2RlIiwibmV4dFNpYmxpbmciLCJpbml0IiwidXJsIiwiX3Nlc3Npb24iLCJzdGF0ZSIsInNjcm9sbCIsIngiLCJ3aW5kb3ciLCJzY3JvbGxYIiwieSIsInNjcm9sbFkiLCJfc3RhdGVzIiwiX3BvaW50ZXIiLCJpdGVtIiwiZnJvbSIsInN0YXRlcyIsInJlcGxhY2VTdGF0ZSIsImNoYW5nZSIsInRyaWdnZXIiLCJfZ2V0RGlyZWN0aW9uIiwiYWRkIiwic2l6ZSIsImFjdGlvbiIsIl9nZXRBY3Rpb24iLCJwdXNoU3RhdGUiLCJ1cGRhdGUiLCJnZXQiLCJzZXQiLCJyZW1vdmUiLCJzcGxpY2UiLCJwb3AiLCJjbGVhciIsIm5ld1N0YXRlcyIsImF0dHIiLCJoYXNBdHRyaWJ1dGUiLCJkaWZmIiwiTWF0aCIsImFicyIsInBhZ2UiLCJuZXh0IiwiaHRtbCIsIm5leHREb2N1bWVudCIsInRpdGxlIiwicHRyIiwiUHJvbWlzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc29sdmUiLCJnZXRPcmlnaW4iLCJsb2NhdGlvbiIsIm9yaWdpbiIsImdldFBvcnQiLCJwb3J0IiwicG9ydFN0cmluZyIsInN1YnN0cmluZyIsInBhcnNlSW50IiwiaGFzaCIsInF1ZXJ5IiwiaGFzaEluZGV4IiwicXVlcnlJbmRleCIsInBhcnNlUXVlcnkiLCJyZWR1Y2UiLCJhY2MiLCJjbGVhbiIsInJlcXVlc3QiLCJ0dGwiLCJyZXF1ZXN0RXJyb3IiLCJyZWplY3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJET05FIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9udGltZW91dCIsImVyciIsIm9uZXJyb3IiLCJvcGVuIiwidGltZW91dCIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwib2JqIiwicnVuQXN5bmMiLCJmdW5jIiwiY3R4IiwiYXJncyIsImFzeW5jIiwicHJvbWlzZSIsImFuc3dlciIsImlzUHJvbWlzZSIsImhvb2tzIiwiX3RoaXMiLCJNYXAiLCJyZWdpc3RlcmVkIiwiYWxsIiwiZm9yRWFjaCIsIl90aGlzMiIsImhvb2siLCJoYXMiLCJTZXQiLCJjaGFpbiIsIl90aGlzMyIsImxvZ2dlciIsIl90aGlzNCIsImhlbHAiLCJJZ25vcmUiLCJpZ25vcmUiLCJfaWdub3JlQWxsIiwicGF0aHMiLCJfaWdub3JlUmVnZXhlcyIsInAiLCJjaGVja0hyZWYiLCJzb21lIiwicmVnZXgiLCJDYWNoZSIsIl9zdGF0ZSIsImdldFJlcXVlc3QiLCJnZXRBY3Rpb24iLCJleGlzdHMiLCJuZXdUYWIiLCJldmVudCIsIndoaWNoIiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsImJsYW5rIiwidGFyZ2V0IiwiY29yc0RvbWFpbiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJjb3JzUG9ydCIsImRvd25sb2FkIiwicHJldmVudFNlbGYiLCJwcmV2ZW50QWxsIiwiQm9vbGVhbiIsImNsb3Nlc3QiLCJzYW1lVXJsIiwiUHJldmVudCIsImNoZWNrIiwic3VpdGUiLCJ0ZXN0cyIsInJ1biIsImNoZWNrTGluayIsIkJhcmJhRXJyb3IiLCJsYWJlbCIsImNhcHR1cmVTdGFja1RyYWNlIiwiU3RvcmUiLCJ0cmFuc2l0aW9ucyIsInR5cGUiLCJfcnVsZXMiLCJwb3NpdGlvbiIsImZpbHRlcnMiLCJvbmNlIiwiZmlsdGVyIiwic2VsZiIsInQiLCJtYXRjaGluZyIsImFjdGl2ZSIsImZpbmQiLCJ2YWxpZCIsInJldmVyc2UiLCJfY2hlY2siLCJydWxlIiwidG8iLCJhY3RpdmVNYXRjaCIsInRyYW5zaXRpb25UeXBlIiwiaW5mb3MiLCJPYmplY3QiLCJfYWRkUHJpb3JpdHkiLCJzb3J0IiwiYiIsInByaW9yaXR5IiwibGVhdmUiLCJlbnRlciIsInRyYW5zaXRpb24iLCJkaXJlY3Rpb24iLCJpc1ZhbGlkIiwiaGFzTWF0Y2giLCJzdHJSdWxlIiwib2JqUnVsZSIsImZuTmFtZSIsImN1cnJlbnQiLCJuYW1lcyIsIl9jYWxjdWxhdGVQcmlvcml0eSIsInJ1bGVOYW1lIiwicnVsZUluZGV4IiwicG93IiwiVHJhbnNpdGlvbnMiLCJzdG9yZSIsImRvT25jZSIsIl9ydW5uaW5nIiwiX2RvQXN5bmNIb29rIiwiZG9QYWdlIiwic3luYyIsIl9pc1RyYW5zaXRpb25FcnJvciIsImxlYXZlUmVzdWx0IiwiaGVscGVycyIsInZhbHVlcyIsIm1lc3NhZ2UiLCJWaWV3cyIsInZpZXdzIiwiYnlOYW1lc3BhY2UiLCJ2aWV3IiwiX2NyZWF0ZUhvb2siLCJFbGVtZW50IiwicHJvdG90eXBlIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJzIiwicGFyZW50RWxlbWVudCIsIm5vZGVUeXBlIiwic2NoZW1hUGFnZSIsInZlcnNpb24iLCJ1c2UiLCJwbHVnaW4iLCJpbnN0YWxsZWRQbHVnaW5zIiwicGx1Z2lucyIsImluc3RhbGwiLCJzY2hlbWEiLCJjYWNoZUlnbm9yZSIsInByZWZldGNoSWdub3JlIiwicHJldmVudFJ1bm5pbmciLCJwcmV2ZW50Q3VzdG9tIiwibG9nTGV2ZWwiLCJfcmVxdWVzdEN1c3RvbUVycm9yIiwiX3dyYXBwZXIiLCJzZXRBdHRyaWJ1dGUiLCJfcmVzZXREYXRhIiwiY2FjaGUiLCJfb25MaW5rRW50ZXIiLCJiaW5kIiwiX29uTGlua0NsaWNrIiwiX29uU3RhdGVDaGFuZ2UiLCJfYmluZCIsIm9uY2VEYXRhIiwiZGVzdHJveSIsIl91bmJpbmQiLCJmb3JjZSIsImFzc2lnbiIsImdvIiwiaXNSdW5uaW5nIiwiZ2V0UGF0aCIsImhhc1NlbGYiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInJlYWR5RGF0YSIsImhhc09uY2UiLCJvblJlcXVlc3RFcnJvciIsInNob3VsZFdhaXQiLCJyZXNwb25zZSIsInByZWZldGNoIiwiX3RoaXM1IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsaW5rIiwiX2dldExpbmtFbGVtZW50IiwiX3RoaXM2IiwiX2RhdGEiLCJkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyIsImJlZ2luIiwibG9vcEJlZ2luIiwiY2hhbmdlQmVnaW4iLCJjaGFuZ2VDb21wbGV0ZSIsImxvb3BDb21wbGV0ZSIsImNvbXBsZXRlIiwibG9vcCIsImF1dG9wbGF5IiwidGltZWxpbmVPZmZzZXQiLCJkZWZhdWx0VHdlZW5TZXR0aW5ncyIsImR1cmF0aW9uIiwiZGVsYXkiLCJlbmREZWxheSIsImVhc2luZyIsInJvdW5kIiwidmFsaWRUcmFuc2Zvcm1zIiwiQ1NTIiwic3ByaW5ncyIsIm1pbk1heCIsInZhbCIsIm1pbiIsIm1heCIsInN0cmluZ0NvbnRhaW5zIiwidGV4dCIsImFwcGx5QXJndW1lbnRzIiwiaXMiLCJhcnIiLCJjYWxsIiwicHRoIiwiaGFzT3duUHJvcGVydHkiLCJzdmciLCJTVkdFbGVtZW50IiwiaW5wIiwiSFRNTElucHV0RWxlbWVudCIsImZuYyIsInVuZCIsIm5pbCIsImhleCIsInJnYiIsImhzbCIsImNvbCIsInBhcnNlRWFzaW5nUGFyYW1ldGVycyIsInN0cmluZyIsInBhcnNlRmxvYXQiLCJzcHJpbmciLCJtYXNzIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInZlbG9jaXR5IiwidzAiLCJzcXJ0IiwiemV0YSIsIndkIiwic29sdmVyIiwicHJvZ3Jlc3MiLCJleHAiLCJjb3MiLCJzaW4iLCJnZXREdXJhdGlvbiIsImNhY2hlZCIsImZyYW1lIiwiZWxhcHNlZCIsInJlc3QiLCJzdGVwcyIsImNlaWwiLCJiZXppZXIiLCJrU3BsaW5lVGFibGVTaXplIiwia1NhbXBsZVN0ZXBTaXplIiwiQSIsImFBMSIsImFBMiIsIkIiLCJDIiwiY2FsY0JlemllciIsImFUIiwiZ2V0U2xvcGUiLCJiaW5hcnlTdWJkaXZpZGUiLCJhWCIsImFBIiwiYUIiLCJtWDEiLCJtWDIiLCJjdXJyZW50WCIsImN1cnJlbnRUIiwibmV3dG9uUmFwaHNvbkl0ZXJhdGUiLCJhR3Vlc3NUIiwiY3VycmVudFNsb3BlIiwibVkxIiwibVkyIiwic2FtcGxlVmFsdWVzIiwiRmxvYXQzMkFycmF5IiwiZ2V0VEZvclgiLCJpbnRlcnZhbFN0YXJ0IiwiY3VycmVudFNhbXBsZSIsImxhc3RTYW1wbGUiLCJkaXN0IiwiZ3Vlc3NGb3JUIiwiaW5pdGlhbFNsb3BlIiwicGVubmVyIiwiZWFzZXMiLCJsaW5lYXIiLCJmdW5jdGlvbkVhc2luZ3MiLCJTaW5lIiwiUEkiLCJDaXJjIiwiQmFjayIsIkJvdW5jZSIsInBvdzIiLCJFbGFzdGljIiwiYW1wbGl0dWRlIiwicGVyaW9kIiwiYXNpbiIsImJhc2VFYXNpbmdzIiwiZWFzZUluIiwicGFyc2VFYXNpbmdzIiwiZWFzZSIsInNlbGVjdFN0cmluZyIsIm5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbHRlckFycmF5IiwiY2FsbGJhY2siLCJsZW4iLCJ0aGlzQXJnIiwiZmxhdHRlbkFycmF5IiwidG9BcnJheSIsIm8iLCJOb2RlTGlzdCIsIkhUTUxDb2xsZWN0aW9uIiwiYXJyYXlDb250YWlucyIsImNsb25lT2JqZWN0IiwiY2xvbmUiLCJyZXBsYWNlT2JqZWN0UHJvcHMiLCJvMSIsIm8yIiwibWVyZ2VPYmplY3RzIiwicmdiVG9SZ2JhIiwicmdiVmFsdWUiLCJoZXhUb1JnYmEiLCJoZXhWYWx1ZSIsInJneCIsInIiLCJnIiwiaHNsVG9SZ2JhIiwiaHNsVmFsdWUiLCJoIiwibCIsImh1ZTJyZ2IiLCJxIiwiY29sb3JUb1JnYiIsImdldFVuaXQiLCJnZXRUcmFuc2Zvcm1Vbml0IiwicHJvcE5hbWUiLCJnZXRGdW5jdGlvblZhbHVlIiwiYW5pbWF0YWJsZSIsImlkIiwidG90YWwiLCJwcm9wIiwiY29udmVydFB4VG9Vbml0IiwidW5pdCIsInZhbHVlVW5pdCIsImJhc2VsaW5lIiwidGVtcEVsIiwicGFyZW50RWwiLCJzdHlsZSIsIndpZHRoIiwiZmFjdG9yIiwib2Zmc2V0V2lkdGgiLCJjb252ZXJ0ZWRVbml0IiwiZ2V0Q1NTVmFsdWUiLCJ1cHBlcmNhc2VQcm9wTmFtZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZ2V0QW5pbWF0aW9uVHlwZSIsImdldEVsZW1lbnRUcmFuc2Zvcm1zIiwidHJhbnNmb3JtIiwicmVnIiwidHJhbnNmb3JtcyIsImdldFRyYW5zZm9ybVZhbHVlIiwiZGVmYXVsdFZhbCIsImxpc3QiLCJnZXRPcmlnaW5hbFRhcmdldFZhbHVlIiwiZ2V0UmVsYXRpdmVWYWx1ZSIsIm9wZXJhdG9yIiwidSIsInZhbGlkYXRlVmFsdWUiLCJvcmlnaW5hbFVuaXQiLCJ1bml0TGVzcyIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImdldENpcmNsZUxlbmd0aCIsImdldFJlY3RMZW5ndGgiLCJnZXRMaW5lTGVuZ3RoIiwiZ2V0UG9seWxpbmVMZW5ndGgiLCJwb2ludHMiLCJ0b3RhbExlbmd0aCIsInByZXZpb3VzUG9zIiwibnVtYmVyT2ZJdGVtcyIsImN1cnJlbnRQb3MiLCJnZXRJdGVtIiwiZ2V0UG9seWdvbkxlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwic2V0RGFzaG9mZnNldCIsInBhdGhMZW5ndGgiLCJnZXRQYXJlbnRTdmdFbCIsImdldFBhcmVudFN2ZyIsInBhdGhFbCIsInN2Z0RhdGEiLCJwYXJlbnRTdmdFbCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2aWV3Qm94QXR0ciIsImhlaWdodCIsInZpZXdCb3giLCJ3IiwidlciLCJ2SCIsInBlcmNlbnQiLCJwcm9wZXJ0eSIsImdldFBhdGhQcm9ncmVzcyIsImlzUGF0aFRhcmdldEluc2lkZVNWRyIsInBvaW50IiwiZ2V0UG9pbnRBdExlbmd0aCIsInAwIiwic2NhbGVYIiwic2NhbGVZIiwiYXRhbjIiLCJkZWNvbXBvc2VWYWx1ZSIsIm9yaWdpbmFsIiwibnVtYmVycyIsIk51bWJlciIsInN0cmluZ3MiLCJwYXJzZVRhcmdldHMiLCJ0YXJnZXRzIiwidGFyZ2V0c0FycmF5IiwicG9zIiwiZ2V0QW5pbWF0YWJsZXMiLCJwYXJzZWQiLCJub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyIsInR3ZWVuU2V0dGluZ3MiLCJzZXR0aW5ncyIsImlzRnJvbVRvIiwicHJvcEFycmF5IiwidiIsImZsYXR0ZW5LZXlmcmFtZXMiLCJrZXlmcmFtZXMiLCJwcm9wZXJ0eU5hbWVzIiwicHJvcGVydGllcyIsIm5ld0tleSIsImdldFByb3BlcnRpZXMiLCJ0d2VlbnMiLCJub3JtYWxpemVUd2VlblZhbHVlcyIsInR3ZWVuIiwibm9ybWFsaXplVHdlZW5zIiwicHJldmlvdXNUd2VlbiIsInR3ZWVuVmFsdWUiLCJ0b1VuaXQiLCJvcmlnaW5hbFZhbHVlIiwicHJldmlvdXNWYWx1ZSIsImZyb21Vbml0IiwiaXNQYXRoIiwiaXNDb2xvciIsInNldFByb2dyZXNzVmFsdWUiLCJjc3MiLCJhdHRyaWJ1dGUiLCJvYmplY3QiLCJtYW51YWwiLCJsYXN0Iiwic2V0VGFyZ2V0c1ZhbHVlIiwiYW5pbWF0YWJsZXMiLCJhbmltVHlwZSIsImNyZWF0ZUFuaW1hdGlvbiIsImxhc3RUd2VlbiIsImdldEFuaW1hdGlvbnMiLCJnZXRJbnN0YW5jZVRpbWluZ3MiLCJhbmltYXRpb25zIiwiYW5pbUxlbmd0aCIsImdldFRsT2Zmc2V0IiwiYW5pbSIsInRpbWluZ3MiLCJpbnN0YW5jZUlEIiwiY3JlYXRlTmV3SW5zdGFuY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwiY2hpbGRyZW4iLCJhY3RpdmVJbnN0YW5jZXMiLCJlbmdpbmUiLCJyYWYiLCJwbGF5IiwiaXNEb2N1bWVudEhpZGRlbiIsImFuaW1lIiwic3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbiIsInN0ZXAiLCJhY3RpdmVJbnN0YW5jZXNMZW5ndGgiLCJhY3RpdmVJbnN0YW5jZSIsInBhdXNlZCIsInRpY2siLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpbnN0YW5jZSIsIl9vbkRvY3VtZW50VmlzaWJpbGl0eSIsImhpZGRlbiIsInN0YXJ0VGltZSIsImxhc3RUaW1lIiwibm93IiwiY2hpbGRyZW5MZW5ndGgiLCJtYWtlUHJvbWlzZSIsIl9yZXNvbHZlIiwiZmluaXNoZWQiLCJ0b2dnbGVJbnN0YW5jZURpcmVjdGlvbiIsInJldmVyc2VkIiwiY2hpbGQiLCJhZGp1c3RUaW1lIiwidGltZSIsInJlc2V0VGltZSIsImN1cnJlbnRUaW1lIiwic3BlZWQiLCJzZWVrQ2hpbGQiLCJzZWVrIiwic3luY0luc3RhbmNlQ2hpbGRyZW4iLCJyZXZlcnNlUGxheWJhY2siLCJpJDEiLCJzZXRBbmltYXRpb25zUHJvZ3Jlc3MiLCJpbnNUaW1lIiwiYW5pbWF0aW9uc0xlbmd0aCIsInR3ZWVuTGVuZ3RoIiwiZWFzZWQiLCJpc05hTiIsInRvTnVtYmVyc0xlbmd0aCIsIm4iLCJ0b051bWJlciIsImZyb21OdW1iZXIiLCJzdHJpbmdzTGVuZ3RoIiwibiQxIiwiY3VycmVudFZhbHVlIiwic2V0Q2FsbGJhY2siLCJjYiIsInBhc3NUaHJvdWdoIiwiY291bnRJdGVyYXRpb24iLCJyZW1haW5pbmciLCJzZXRJbnN0YW5jZVByb2dyZXNzIiwiZW5naW5lVGltZSIsImluc0R1cmF0aW9uIiwiaW5zRGVsYXkiLCJpbnNFbmREZWxheSIsImJlZ2FuIiwibG9vcEJlZ2FuIiwiY2hhbmdlQmVnYW4iLCJjaGFuZ2VDb21wbGV0ZWQiLCJjb21wbGV0ZWQiLCJyZXNldCIsInBhdXNlIiwicmVzdGFydCIsInJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UiLCJyZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnMiLCJjaGlsZEFuaW1hdGlvbnMiLCJyZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyIsInN0YWdnZXIiLCJncmlkIiwiYXhpcyIsImZyb21JbmRleCIsImZyb21GaXJzdCIsImZyb21DZW50ZXIiLCJmcm9tTGFzdCIsImlzUmFuZ2UiLCJ2YWwxIiwidmFsMiIsIm1heFZhbHVlIiwiZnJvbVgiLCJmcm9tWSIsImZsb29yIiwidG9YIiwidG9ZIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3BhY2luZyIsInRpbWVsaW5lIiwidGwiLCJpbnN0YW5jZVBhcmFtcyIsInRsSW5kZXgiLCJpbnMiLCJpbnNQYXJhbXMiLCJ0bER1cmF0aW9uIiwicnVubmluZyIsImNvbnZlcnRQeCIsInJhbmRvbSIsImJhcmJhIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNrSkE7O0FBQUEsV0E4VWdCQSxDQTlVaEIsQ0E4VXVCQyxDQTlVdkIsRUE4VTZCQyxDQTlV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ZUFBQ25RLElBQUQsRUFBVSxDQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBckJTLEdBQUQ7QUFGTixDQUFYLEUiLCJmaWxlIjoidHJhbnNpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIi8vIEEgdHlwZSBvZiBwcm9taXNlLWxpa2UgdGhhdCByZXNvbHZlcyBzeW5jaHJvbm91c2x5IGFuZCBzdXBwb3J0cyBvbmx5IG9uZSBvYnNlcnZlclxuZXhwb3J0IGNvbnN0IF9QYWN0ID0gLyojX19QVVJFX18qLyhmdW5jdGlvbigpIHtcblx0ZnVuY3Rpb24gX1BhY3QoKSB7fVxuXHRfUGFjdC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IF9QYWN0KCk7XG5cdFx0Y29uc3Qgc3RhdGUgPSB0aGlzLnM7XG5cdFx0aWYgKHN0YXRlKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IHN0YXRlICYgMSA/IG9uRnVsZmlsbGVkIDogb25SZWplY3RlZDtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBjYWxsYmFjayh0aGlzLnYpKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAyLCBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMubyA9IGZ1bmN0aW9uKF90aGlzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IF90aGlzLnY7XG5cdFx0XHRcdGlmIChfdGhpcy5zICYgMSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBvbkZ1bGZpbGxlZCA/IG9uRnVsZmlsbGVkKHZhbHVlKSA6IHZhbHVlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChvblJlamVjdGVkKSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDEsIG9uUmVqZWN0ZWQodmFsdWUpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAyLCBlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0cmV0dXJuIF9QYWN0O1xufSkoKTtcblxuLy8gU2V0dGxlcyBhIHBhY3Qgc3luY2hyb25vdXNseVxuZXhwb3J0IGZ1bmN0aW9uIF9zZXR0bGUocGFjdCwgc3RhdGUsIHZhbHVlKSB7XG5cdGlmICghcGFjdC5zKSB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgX1BhY3QpIHtcblx0XHRcdGlmICh2YWx1ZS5zKSB7XG5cdFx0XHRcdGlmIChzdGF0ZSAmIDEpIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHZhbHVlLnM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS52O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUubyA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCBzdGF0ZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRcdHZhbHVlLnRoZW4oX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIHN0YXRlKSwgX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cGFjdC5zID0gc3RhdGU7XG5cdFx0cGFjdC52ID0gdmFsdWU7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBwYWN0Lm87XG5cdFx0aWYgKG9ic2VydmVyKSB7XG5cdFx0XHRvYnNlcnZlcihwYWN0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1NldHRsZWRQYWN0KHRoZW5hYmxlKSB7XG5cdHJldHVybiB0aGVuYWJsZSBpbnN0YW5jZW9mIF9QYWN0ICYmIHRoZW5hYmxlLnMgJiAxO1xufVxuXG4vLyBDb252ZXJ0cyBhcmd1bWVudCB0byBhIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHJldHVybnMgYSBQcm9taXNlXG5leHBvcnQgZnVuY3Rpb24gX2FzeW5jKGYpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdGZvciAodmFyIGFyZ3MgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuYXBwbHkodGhpcywgYXJncykpO1xuXHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBd2FpdHMgb24gYSB2YWx1ZSB0aGF0IG1heSBvciBtYXkgbm90IGJlIGEgUHJvbWlzZSAoZXF1aXZhbGVudCB0byB0aGUgYXdhaXQga2V5d29yZCBpbiBFUzIwMTUsIHdpdGggY29udGludWF0aW9ucyBwYXNzZWQgZXhwbGljaXRseSlcbmV4cG9ydCBmdW5jdGlvbiBfYXdhaXQodmFsdWUsIHRoZW4sIGRpcmVjdCkge1xuXHRpZiAoZGlyZWN0KSB7XG5cdFx0cmV0dXJuIHRoZW4gPyB0aGVuKHZhbHVlKSA6IHZhbHVlO1xuXHR9XG5cdGlmICghdmFsdWUgfHwgIXZhbHVlLnRoZW4pIHtcblx0XHR2YWx1ZSA9IFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHRoZW4gPyB2YWx1ZS50aGVuKHRoZW4pIDogdmFsdWU7XG59XG5cbi8vIEF3YWl0cyBvbiBhIHZhbHVlIHRoYXQgbWF5IG9yIG1heSBub3QgYmUgYSBQcm9taXNlLCB0aGVuIGlnbm9yZXMgaXRcbmV4cG9ydCBmdW5jdGlvbiBfYXdhaXRJZ25vcmVkKHZhbHVlLCBkaXJlY3QpIHtcblx0aWYgKCFkaXJlY3QpIHtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX2VtcHR5KSA6IFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG59XG5cbi8vIFByb2NlZWRzIGFmdGVyIGEgdmFsdWUgaGFzIHJlc29sdmVkLCBvciBwcm9jZWVkcyBpbW1lZGlhdGVseSBpZiB0aGUgdmFsdWUgaXMgbm90IHRoZW5hYmxlXG5leHBvcnQgZnVuY3Rpb24gX2NvbnRpbnVlKHZhbHVlLCB0aGVuKSB7XG5cdHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbih0aGVuKSA6IHRoZW4odmFsdWUpO1xufVxuXG4vLyBQcm9jZWVkcyBhZnRlciBhIHZhbHVlIGhhcyByZXNvbHZlZCwgb3IgcHJvY2VlZHMgaW1tZWRpYXRlbHkgaWYgdGhlIHZhbHVlIGlzIG5vdCB0aGVuYWJsZVxuZXhwb3J0IGZ1bmN0aW9uIF9jb250aW51ZUlnbm9yZWQodmFsdWUpIHtcblx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRyZXR1cm4gdmFsdWUudGhlbihfZW1wdHkpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QgdGhhdCBoYXMgYSBsZW5ndGggcHJvcGVydHksIHBhc3NpbmcgdGhlIGluZGV4IGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgKGV2ZW4gYXMgdGhlIGxlbmd0aCBwcm9wZXJ0eSBjaGFuZ2VzKVxuZXhwb3J0IGZ1bmN0aW9uIF9mb3JUbyhhcnJheSwgYm9keSwgY2hlY2spIHtcblx0dmFyIGkgPSAtMSwgcGFjdCwgcmVqZWN0O1xuXHRmdW5jdGlvbiBfY3ljbGUocmVzdWx0KSB7XG5cdFx0dHJ5IHtcblx0XHRcdHdoaWxlICgrK2kgPCBhcnJheS5sZW5ndGggJiYgKCFjaGVjayB8fCAhY2hlY2soKSkpIHtcblx0XHRcdFx0cmVzdWx0ID0gYm9keShpKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnRoZW4oX2N5Y2xlLCByZWplY3QgfHwgKHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0ID0gbmV3IF9QYWN0KCksIDIpKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFjdCkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWN0ID0gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdF9zZXR0bGUocGFjdCB8fCAocGFjdCA9IG5ldyBfUGFjdCgpKSwgMiwgZSk7XG5cdFx0fVxuXHR9XG5cdF9jeWNsZSgpO1xuXHRyZXR1cm4gcGFjdDtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSB0aHJvdWdoIGFuIG9iamVjdCdzIHByb3BlcnRpZXMgKGluY2x1ZGluZyBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBwcm90b3R5cGUpXG4vLyBVc2VzIGEgc25hcHNob3Qgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbmV4cG9ydCBmdW5jdGlvbiBfZm9ySW4odGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHR2YXIga2V5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG5cdFx0a2V5cy5wdXNoKGtleSk7XG5cdH1cblx0cmV0dXJuIF9mb3JUbyhrZXlzLCBmdW5jdGlvbihpKSB7IHJldHVybiBib2R5KGtleXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcyAoZXhjbHVkaW5nIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gdGhlIHByb3RvdHlwZSlcbi8vIFVzZXMgYSBzbmFwc2hvdCBvZiB0aGUgb2JqZWN0J3MgcHJvcGVydGllc1xuZXhwb3J0IGZ1bmN0aW9uIF9mb3JPd24odGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHR2YXIga2V5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkpIHtcblx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gX2ZvclRvKGtleXMsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGJvZHkoa2V5c1tpXSk7IH0sIGNoZWNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IF9pdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi8gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IChTeW1ib2wuaXRlcmF0b3IgfHwgKFN5bWJvbC5pdGVyYXRvciA9IFN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSkpIDogXCJAQGl0ZXJhdG9yXCI7XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyB2YWx1ZXNcbi8vIFVzZXMgZm9yLi4ub2YgaWYgdGhlIHJ1bnRpbWUgc3VwcG9ydHMgaXQsIG90aGVyd2lzZSBpdGVyYXRlcyB1bnRpbCBsZW5ndGggb24gYSBjb3B5XG5leHBvcnQgZnVuY3Rpb24gX2Zvck9mKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0aWYgKHR5cGVvZiB0YXJnZXRbX2l0ZXJhdG9yU3ltYm9sXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGFyZ2V0W19pdGVyYXRvclN5bWJvbF0oKSwgc3RlcCwgcGFjdCwgcmVqZWN0O1xuXHRcdGZ1bmN0aW9uIF9jeWNsZShyZXN1bHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUgJiYgKCFjaGVjayB8fCAhY2hlY2soKSkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBib2R5KHN0ZXAudmFsdWUpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0LnRoZW4oX2N5Y2xlLCByZWplY3QgfHwgKHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0ID0gbmV3IF9QYWN0KCksIDIpKSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHBhY3QpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGFjdCA9IHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QgfHwgKHBhY3QgPSBuZXcgX1BhY3QoKSksIDIsIGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRfY3ljbGUoKTtcblx0XHRpZiAoaXRlcmF0b3IucmV0dXJuKSB7XG5cdFx0XHR2YXIgX2ZpeHVwID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoIXN0ZXAuZG9uZSkge1xuXHRcdFx0XHRcdFx0aXRlcmF0b3IucmV0dXJuKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFjdCAmJiBwYWN0LnRoZW4pIHtcblx0XHRcdFx0cmV0dXJuIHBhY3QudGhlbihfZml4dXAsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHR0aHJvdyBfZml4dXAoZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0X2ZpeHVwKCk7XG5cdFx0fVxuXHRcdHJldHVybiBwYWN0O1xuXHR9XG5cdC8vIE5vIHN1cHBvcnQgZm9yIFN5bWJvbC5pdGVyYXRvclxuXHRpZiAoIShcImxlbmd0aFwiIGluIHRhcmdldCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZVwiKTtcblx0fVxuXHQvLyBIYW5kbGUgbGl2ZSBjb2xsZWN0aW9ucyBwcm9wZXJseVxuXHR2YXIgdmFsdWVzID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWVzLnB1c2godGFyZ2V0W2ldKTtcblx0fVxuXHRyZXR1cm4gX2ZvclRvKHZhbHVlcywgZnVuY3Rpb24oaSkgeyByZXR1cm4gYm9keSh2YWx1ZXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbmV4cG9ydCBjb25zdCBfYXN5bmNJdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi8gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IChTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCAoU3ltYm9sLmFzeW5jSXRlcmF0b3IgPSBTeW1ib2woXCJTeW1ib2wuYXN5bmNJdGVyYXRvclwiKSkpIDogXCJAQGFzeW5jSXRlcmF0b3JcIjtcblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSBvbiBhIHZhbHVlIHVzaW5nIGl0J3MgYXN5bmMgaXRlcmF0b3IgaWYgcHJlc2VudCwgb3IgaXRzIHN5bmNocm9ub3VzIGl0ZXJhdG9yIGlmIG1pc3NpbmdcbmV4cG9ydCBmdW5jdGlvbiBfZm9yQXdhaXRPZih0YXJnZXQsIGJvZHksIGNoZWNrKSB7XG5cdGlmICh0eXBlb2YgdGFyZ2V0W19hc3luY0l0ZXJhdG9yU3ltYm9sXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dmFyIHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0XHR2YXIgaXRlcmF0b3IgPSB0YXJnZXRbX2FzeW5jSXRlcmF0b3JTeW1ib2xdKCk7XG5cdFx0aXRlcmF0b3IubmV4dCgpLnRoZW4oX3Jlc3VtZUFmdGVyTmV4dCkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdHJldHVybiBwYWN0O1xuXHRcdGZ1bmN0aW9uIF9yZXN1bWVBZnRlckJvZHkocmVzdWx0KSB7XG5cdFx0XHRpZiAoY2hlY2sgJiYgY2hlY2soKSkge1xuXHRcdFx0XHRyZXR1cm4gX3NldHRsZShwYWN0LCAxLCBpdGVyYXRvci5yZXR1cm4gPyBpdGVyYXRvci5yZXR1cm4oKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVzdWx0OyB9KSA6IHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0XHRpdGVyYXRvci5uZXh0KCkudGhlbihfcmVzdW1lQWZ0ZXJOZXh0KS50aGVuKHZvaWQgMCwgX3JlamVjdCk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIF9yZXN1bWVBZnRlck5leHQoc3RlcCkge1xuXHRcdFx0aWYgKHN0ZXAuZG9uZSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0UHJvbWlzZS5yZXNvbHZlKGJvZHkoc3RlcC52YWx1ZSkpLnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmdW5jdGlvbiBfcmVqZWN0KGVycm9yKSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDIsIGl0ZXJhdG9yLnJldHVybiA/IGl0ZXJhdG9yLnJldHVybigpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBlcnJvcjsgfSkgOiBlcnJvcik7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoX2Zvck9mKHRhcmdldCwgZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihib2R5KTsgfSwgY2hlY2spKTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaW1wbGVtZW50IGEgZ2VuZXJpYyBmb3IgbG9vcFxuZXhwb3J0IGZ1bmN0aW9uIF9mb3IodGVzdCwgdXBkYXRlLCBib2R5KSB7XG5cdHZhciBzdGFnZTtcblx0Zm9yICg7Oykge1xuXHRcdHZhciBzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRpZiAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpKSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0fVxuXHRcdGlmICghc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRzdGFnZSA9IDA7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YWdlID0gMTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh1cGRhdGUpIHtcblx0XHRcdHZhciB1cGRhdGVWYWx1ZSA9IHVwZGF0ZSgpO1xuXHRcdFx0aWYgKHVwZGF0ZVZhbHVlICYmIHVwZGF0ZVZhbHVlLnRoZW4gJiYgIV9pc1NldHRsZWRQYWN0KHVwZGF0ZVZhbHVlKSkge1xuXHRcdFx0XHRzdGFnZSA9IDI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR2YXIgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHR2YXIgcmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpO1xuXHQoc3RhZ2UgPT09IDAgPyBzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpIDogc3RhZ2UgPT09IDEgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHVwZGF0ZVZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVXBkYXRlKSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdHJldHVybiBwYWN0O1xuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHZhbHVlKSB7XG5cdFx0cmVzdWx0ID0gdmFsdWU7XG5cdFx0ZG8ge1xuXHRcdFx0aWYgKHVwZGF0ZSkge1xuXHRcdFx0XHR1cGRhdGVWYWx1ZSA9IHVwZGF0ZSgpO1xuXHRcdFx0XHRpZiAodXBkYXRlVmFsdWUgJiYgdXBkYXRlVmFsdWUudGhlbiAmJiAhX2lzU2V0dGxlZFBhY3QodXBkYXRlVmFsdWUpKSB7XG5cdFx0XHRcdFx0dXBkYXRlVmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJVcGRhdGUpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlIHx8IChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkgJiYgIXNob3VsZENvbnRpbnVlLnYpKSB7XG5cdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHR9XG5cdFx0fSB3aGlsZSAoIXJlc3VsdCB8fCAhcmVzdWx0LnRoZW4pO1xuXHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVXBkYXRlKCkge1xuXHRcdGlmIChzaG91bGRDb250aW51ZSA9IHRlc3QoKSkge1xuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGltcGxlbWVudCBhIGRvIC4uLiB3aGlsZSBsb29wXG5leHBvcnQgZnVuY3Rpb24gX2RvKGJvZHksIHRlc3QpIHtcblx0dmFyIGF3YWl0Qm9keTtcblx0ZG8ge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhd2FpdEJvZHkgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdHNob3VsZENvbnRpbnVlID0gc2hvdWxkQ29udGludWUudjtcblx0XHR9XG5cdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH0gd2hpbGUgKCFzaG91bGRDb250aW51ZS50aGVuKTtcblx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRjb25zdCByZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgMik7XG5cdChhd2FpdEJvZHkgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keSh2YWx1ZSkge1xuXHRcdHJlc3VsdCA9IHZhbHVlO1xuXHRcdGZvciAoOzspIHtcblx0XHRcdHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNob3VsZENvbnRpbnVlLnRoZW4pIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVGVzdChzaG91bGRDb250aW51ZSkge1xuXHRcdGlmIChzaG91bGRDb250aW51ZSkge1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0XHRcdHNob3VsZENvbnRpbnVlID0gc2hvdWxkQ29udGludWUudjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fSB3aGlsZSAoIXNob3VsZENvbnRpbnVlLnRoZW4pO1xuXHRcdFx0c2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpbXBsZW1lbnQgYSBzd2l0Y2ggc3RhdGVtZW50XG5leHBvcnQgZnVuY3Rpb24gX3N3aXRjaChkaXNjcmltaW5hbnQsIGNhc2VzKSB7XG5cdHZhciBkaXNwYXRjaEluZGV4ID0gLTE7XG5cdHZhciBhd2FpdEJvZHk7XG5cdG91dGVyOiB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYXNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHRlc3QgPSBjYXNlc1tpXVswXTtcblx0XHRcdGlmICh0ZXN0KSB7XG5cdFx0XHRcdHZhciB0ZXN0VmFsdWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmICh0ZXN0VmFsdWUgJiYgdGVzdFZhbHVlLnRoZW4pIHtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGVzdFZhbHVlID09PSBkaXNjcmltaW5hbnQpIHtcblx0XHRcdFx0XHRkaXNwYXRjaEluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRm91bmQgdGhlIGRlZmF1bHQgY2FzZSwgc2V0IGl0IGFzIHRoZSBwZW5kaW5nIGRpc3BhdGNoIGNhc2Vcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChkaXNwYXRjaEluZGV4ICE9PSAtMSkge1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHR2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHRcdFx0Ym9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRhd2FpdEJvZHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrIG91dGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdH0gd2hpbGUgKGZhbGx0aHJvdWdoQ2hlY2sgJiYgIWZhbGx0aHJvdWdoQ2hlY2soKSk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXHRjb25zdCBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdGNvbnN0IHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKTtcblx0KGF3YWl0Qm9keSA/IHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpIDogdGVzdFZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyVGVzdCh2YWx1ZSkge1xuXHRcdGZvciAoOzspIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gZGlzY3JpbWluYW50KSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICgrK2kgPT09IGNhc2VzLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAoZGlzcGF0Y2hJbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0ZXN0ID0gY2FzZXNbaV1bMF07XG5cdFx0XHRpZiAodGVzdCkge1xuXHRcdFx0XHR2YWx1ZSA9IHRlc3QoKTtcblx0XHRcdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRcdFx0XHR2YWx1ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRvIHtcblx0XHRcdHZhciBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGZhbGx0aHJvdWdoQ2hlY2sgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsyXTtcblx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHR9IHdoaWxlIChmYWxsdGhyb3VnaENoZWNrICYmICFmYWxsdGhyb3VnaENoZWNrKCkpO1xuXHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0fVxuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCkge1xuXHRcdGZvciAoOzspIHtcblx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRpZiAoIWZhbGx0aHJvdWdoQ2hlY2sgfHwgZmFsbHRocm91Z2hDaGVjaygpKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0dmFyIGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdHdoaWxlICghYm9keSkge1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHRcdGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGV4cGxpY2l0bHkgcGFzc2VkIGNvbnRpbnVhdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBfY2FsbChib2R5LCB0aGVuLCBkaXJlY3QpIHtcblx0aWYgKGRpcmVjdCkge1xuXHRcdHJldHVybiB0aGVuID8gdGhlbihib2R5KCkpIDogYm9keSgpO1xuXHR9XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShib2R5KCkpO1xuXHRcdHJldHVybiB0aGVuID8gcmVzdWx0LnRoZW4odGhlbikgOiByZXN1bHQ7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzd2FsbG93IHRoZSByZXN1bHRcbmV4cG9ydCBmdW5jdGlvbiBfY2FsbElnbm9yZWQoYm9keSwgZGlyZWN0KSB7XG5cdHJldHVybiBfY2FsbChib2R5LCBfZW1wdHksIGRpcmVjdCk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGV4cGxpY2l0bHkgcGFzc2VkIGNvbnRpbnVhdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBfaW52b2tlKGJvZHksIHRoZW4pIHtcblx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbih0aGVuKTtcblx0fVxuXHRyZXR1cm4gdGhlbihyZXN1bHQpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHN3YWxsb3cgdGhlIHJlc3VsdFxuZXhwb3J0IGZ1bmN0aW9uIF9pbnZva2VJZ25vcmVkKGJvZHkpIHtcblx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihfZW1wdHkpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc2VuZCBlcnJvcnMgdG8gcmVjb3ZlcnkgY29udGludWF0aW9uXG5leHBvcnQgZnVuY3Rpb24gX2NhdGNoKGJvZHksIHJlY292ZXIpIHtcblx0dHJ5IHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRyZXR1cm4gcmVjb3ZlcihlKTtcblx0fVxuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKHZvaWQgMCwgcmVjb3Zlcik7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgYXdhaXQgYSBwcm9taXNlIGFuZCBwYXNzIHRoZSByZXN1bHQgdG8gYSBmaW5hbGx5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9maW5hbGx5UmV0aHJvd3MoYm9keSwgZmluYWxpemVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmaW5hbGl6ZXIodHJ1ZSwgZSk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihmaW5hbGl6ZXIuYmluZChudWxsLCBmYWxzZSksIGZpbmFsaXplci5iaW5kKG51bGwsIHRydWUpKTtcblx0fVxuXHRyZXR1cm4gZmluYWxpemVyKGZhbHNlLCByZXN1bHQpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBhd2FpdCBhIHByb21pc2UgYW5kIGludm9rZSBhIGZpbmFsbHkgY29udGludWF0aW9uIHRoYXQgYWx3YXlzIG92ZXJyaWRlcyB0aGUgcmVzdWx0XG5leHBvcnQgZnVuY3Rpb24gX2ZpbmFsbHkoYm9keSwgZmluYWxpemVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmaW5hbGl6ZXIoKTtcblx0fVxuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKGZpbmFsaXplciwgZmluYWxpemVyKTtcblx0fVxuXHRyZXR1cm4gZmluYWxpemVyKCk7XG59XG5cbi8vIFJldGhyb3cgb3IgcmV0dXJuIGEgdmFsdWUgZnJvbSBhIGZpbmFsbHkgY29udGludWF0aW9uXG5leHBvcnQgZnVuY3Rpb24gX3JldGhyb3codGhyb3duLCB2YWx1ZSkge1xuXHRpZiAodGhyb3duKVxuXHRcdHRocm93IHZhbHVlO1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8vIEVtcHR5IGZ1bmN0aW9uIHRvIGltcGxlbWVudCBicmVhayBhbmQgb3RoZXIgY29udHJvbCBmbG93IHRoYXQgaWdub3JlcyBhc3luY2hyb25vdXMgcmVzdWx0c1xuZXhwb3J0IGZ1bmN0aW9uIF9lbXB0eSgpIHtcbn1cblxuLy8gU2VudGluZWwgdmFsdWUgZm9yIGVhcmx5IHJldHVybnMgaW4gZ2VuZXJhdG9ycyBcbmV4cG9ydCBjb25zdCBfZWFybHlSZXR1cm4gPSAvKiNfX1BVUkVfXyovIHt9O1xuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHNlbmQgZXJyb3JzIHRvIHJlY292ZXJ5IGNvbnRpbnVhdGlvbiwgc2tpcHBpbmcgZWFybHkgcmV0dXJuc1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEluR2VuZXJhdG9yKGJvZHksIHJlY292ZXIpIHtcblx0cmV0dXJuIF9jYXRjaChib2R5LCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUgPT09IF9lYXJseVJldHVybikge1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlY292ZXIoZSk7XG5cdH0pO1xufVxuXG4vLyBBc3luY2hyb25vdXMgZ2VuZXJhdG9yIGNsYXNzOyBhY2NlcHRzIHRoZSBlbnRyeXBvaW50IG9mIHRoZSBnZW5lcmF0b3IsIHRvIHdoaWNoIGl0IHBhc3NlcyBpdHNlbGYgd2hlbiB0aGUgZ2VuZXJhdG9yIHNob3VsZCBzdGFydFxuZXhwb3J0IGNvbnN0IF9Bc3luY0dlbmVyYXRvciA9IC8qI19fUFVSRV9fKi8oZnVuY3Rpb24oKSB7XG5cdGZ1bmN0aW9uIF9Bc3luY0dlbmVyYXRvcihlbnRyeSkge1xuXHRcdHRoaXMuX2VudHJ5ID0gZW50cnk7XG5cdFx0dGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0dGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0dGhpcy5fcmV0dXJuID0gbnVsbDtcblx0XHR0aGlzLl9wcm9taXNlID0gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xuXHR9XG5cdGZ1bmN0aW9uIF93cmFwWWllbGRlZFZhbHVlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiBmYWxzZSB9O1xuXHR9XG5cblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5feWllbGQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIFlpZWxkIHRoZSB2YWx1ZSB0byB0aGUgcGVuZGluZyBuZXh0IGNhbGxcblx0XHR0aGlzLl9yZXNvbHZlKHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF93cmFwWWllbGRlZFZhbHVlKSA6IF93cmFwWWllbGRlZFZhbHVlKHZhbHVlKSk7XG5cdFx0Ly8gUmV0dXJuIGEgcGFjdCBmb3IgYW4gdXBjb21pbmcgbmV4dC9yZXR1cm4vdGhyb3cgY2FsbFxuXHRcdHJldHVybiB0aGlzLl9wYWN0ID0gbmV3IF9QYWN0KCk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0Ly8gQWR2YW5jZSB0aGUgZ2VuZXJhdG9yLCBzdGFydGluZyBpdCBpZiBpdCBoYXMgeWV0IHRvIGJlIHN0YXJ0ZWRcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0cmV0dXJuIF90aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRcdGNvbnN0IF9wYWN0ID0gX3RoaXMuX3BhY3Q7XG5cdFx0XHRpZiAoX3BhY3QgPT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgX2VudHJ5ID0gX3RoaXMuX2VudHJ5O1xuXHRcdFx0XHRpZiAoX2VudHJ5ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQsIGJ1dCBub3QgYXdhaXRpbmcgYSB5aWVsZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0Ly8gQWJhbmRvbiB0aGUgbmV4dCBjYWxsIVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKF90aGlzLl9wcm9taXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBTdGFydCB0aGUgZ2VuZXJhdG9yXG5cdFx0XHRcdF90aGlzLl9lbnRyeSA9IG51bGw7XG5cdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdFx0ZnVuY3Rpb24gcmV0dXJuVmFsdWUodmFsdWUpIHtcblx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFJldHVybmVkVmFsdWUpIDogX3dyYXBSZXR1cm5lZFZhbHVlKHZhbHVlKSk7XG5cdFx0XHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gX2VudHJ5KF90aGlzKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRcdHJlc3VsdC50aGVuKHJldHVyblZhbHVlLCBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yID09PSBfZWFybHlSZXR1cm4pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuVmFsdWUoX3RoaXMuX3JldHVybik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdFx0XHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlKHBhY3QpO1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0X3Jlc29sdmUocGFjdCwgMiwgZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVyblZhbHVlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkIGFuZCBhIHlpZWxkIGV4cHJlc3Npb24gaXMgcGVuZGluZywgc2V0dGxlIGl0XG5cdFx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0XHRfc2V0dGxlKF9wYWN0LCAxLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHQvLyBFYXJseSByZXR1cm4gZnJvbSB0aGUgZ2VuZXJhdG9yIGlmIHN0YXJ0ZWQsIG90aGVyd2lzZSBhYmFuZG9ucyB0aGUgZ2VuZXJhdG9yXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGlmIChfdGhpcy5fZW50cnkgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCwgYnV0IG5vdCBhd2FpdGluZyBhIHlpZWxkIGV4cHJlc3Npb25cblx0XHRcdFx0XHQvLyBBYmFuZG9uIHRoZSByZXR1cm4gY2FsbCFcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfdGhpcy5fcHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIG5vdCBzdGFydGVkLCBhYmFuZG9uIGl0IGFuZCByZXR1cm4gdGhlIHNwZWNpZmllZCB2YWx1ZVxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFJldHVybmVkVmFsdWUpIDogX3dyYXBSZXR1cm5lZFZhbHVlKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXR0bGUgdGhlIHlpZWxkIGV4cHJlc3Npb24gd2l0aCBhIHJlamVjdGVkIFwiZWFybHkgcmV0dXJuXCIgdmFsdWVcblx0XHRcdF90aGlzLl9yZXR1cm4gPSB2YWx1ZTtcblx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdF9zZXR0bGUoX3BhY3QsIDIsIF9lYXJseVJldHVybik7XG5cdFx0fSk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbihlcnJvcikge1xuXHRcdC8vIEluamVjdCBhbiBleGNlcHRpb24gaW50byB0aGUgcGVuZGluZyB5aWVsZCBleHByZXNzaW9uXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdGNvbnN0IF9wYWN0ID0gX3RoaXMuX3BhY3Q7XG5cdFx0XHRpZiAoX3BhY3QgPT09IG51bGwpIHtcblx0XHRcdFx0aWYgKF90aGlzLl9lbnRyeSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkLCBidXQgbm90IGF3YWl0aW5nIGEgeWllbGQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdC8vIEFiYW5kb24gdGhlIHRocm93IGNhbGwhXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoX3RoaXMuX3Byb21pc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBub3Qgc3RhcnRlZCwgYWJhbmRvbiBpdCBhbmQgcmV0dXJuIGEgcmVqZWN0ZWQgUHJvbWlzZSBjb250YWluaW5nIHRoZSBlcnJvclxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHRcdC8vIFNldHRsZSB0aGUgeWllbGQgZXhwcmVzc2lvbiB3aXRoIHRoZSB2YWx1ZSBhcyBhIHJlamVjdGlvblxuXHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0X3NldHRsZShfcGFjdCwgMiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbX2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cdFxuXHRyZXR1cm4gX0FzeW5jR2VuZXJhdG9yO1xufSkoKTtcbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvbW9kdWxlcy9Mb2dnZXJcbiAqIDxicj48YnI+XG4gKiAjIyBMb2dnZXIuXG4gKlxuICogLSBEaXNwbGF5IGluZm9ybWF0aW9ucyB2aWEgdGhlIGNvbnNvbGVcbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9Mb2dnZXJcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vKipcbiAqIExvZyBsZXZlbHMsIGFsbCBsb3dlciBsZXZlbCBtZXNzYWdlcyBhcmUgcHJpbnRlZFxuICpcbiAqIDAuIG11dGVcbiAqIDEuIGVycm9yID0gYGNvbnNvbGUuZXJyb3IoKWBcbiAqIDIuIHdhcm5pbmc9IGBjb25zb2xlLndhcm4oKWBcbiAqIDMuIGluZm8gPSBgY29uc29sZS5pbmZvKClgXG4gKiA0LiBkZWJ1ZyA9IGBjb25zb2xlLmxvZygpYFxuICovXG5leHBvcnQgZW51bSBMb2dMZXZlbHMge1xuICBvZmYgPSAwLFxuICBlcnJvciA9IDEsXG4gIHdhcm5pbmcgPSAyLFxuICBpbmZvID0gMyxcbiAgZGVidWcgPSA0LFxufVxuXG4vKipcbiAqIEdsb2JhbCBsb2cgbGV2ZWxcbiAqL1xubGV0IF9sZXZlbDogbnVtYmVyID0gTG9nTGV2ZWxzLm9mZjtcblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gIC8qKlxuICAgKiBHZXQgZ2xvYmFsIGxvZyBsZXZlbC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TGV2ZWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBnbG9iYWwgbG9nIGxldmVsLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzZXRMZXZlbChuYW1lOiBrZXlvZiB0eXBlb2YgTG9nTGV2ZWxzKTogbnVtYmVyIHtcbiAgICBfbGV2ZWwgPSBMb2dMZXZlbHNbbmFtZV07XG5cbiAgICByZXR1cm4gX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBcInByZWZpeFwiLlxuICAgKi9cbiAgcHJpdmF0ZSBfc291cmNlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTG9nZ2VyLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2UgPSBzb3VyY2U7XG4gIH1cblxuICAvKipcbiAgICogUGVybWFuZW50LCB1bnJlbW92YWJsZSBsb2cuXG4gICAqL1xuICAvLyBwdWJsaWMgcHJpbnQoLi4ub2JqZWN0czogYW55W10pOiB2b2lkIHtcbiAgLy8gICB0aGlzLl9sb2coY29uc29sZS5pbmZvLCBMb2dMZXZlbHMub2ZmLCBvYmplY3RzKTtcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBFcnJvciBsb2cuXG4gICAqL1xuICBwdWJsaWMgZXJyb3IoLi4ub2JqZWN0czogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLl9sb2coY29uc29sZS5lcnJvciwgTG9nTGV2ZWxzLmVycm9yLCBvYmplY3RzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXJuIGxvZy5cbiAgICovXG4gIHB1YmxpYyB3YXJuKC4uLm9iamVjdHM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5fbG9nKGNvbnNvbGUud2FybiwgTG9nTGV2ZWxzLndhcm5pbmcsIG9iamVjdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZm8gbG9nLlxuICAgKi9cbiAgcHVibGljIGluZm8oLi4ub2JqZWN0czogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLl9sb2coY29uc29sZS5pbmZvLCBMb2dMZXZlbHMuaW5mbywgb2JqZWN0cyk7XG4gIH1cblxuICAvKipcbiAgICogRGVidWcgbG9nLlxuICAgKi9cbiAgcHVibGljIGRlYnVnKC4uLm9iamVjdHM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5fbG9nKGNvbnNvbGUubG9nLCBMb2dMZXZlbHMuZGVidWcsIG9iamVjdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIGxvZ2dlci5cbiAgICovXG4gIHByaXZhdGUgX2xvZyhmbjogKCkgPT4gdm9pZCwgbGV2ZWw6IG51bWJlciwgb2JqZWN0czogYW55W10pOiB2b2lkIHtcbiAgICBpZiAobGV2ZWwgPD0gTG9nZ2VyLmdldExldmVsKCkpIHtcbiAgICAgIGZuLmFwcGx5KGNvbnNvbGUsIChbYFske3RoaXMuX3NvdXJjZX1dIGBdLmNvbmNhdChvYmplY3RzKSBhcyB1bmtub3duKSBhcyBbXG5cbiAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbW9kdWxlIHR5cGluZ3MvY29yZVxuICovXG5pbXBvcnQgeyBJVHJhbnNpdGlvbkRhdGEsIElUcmFuc2l0aW9uUGFnZSwgSVZpZXdEYXRhIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCB0eXBlIEhvb2tzQmFyYmEgPVxuICB8ICdyZWFkeSdcbiAgfCAncGFnZSdcbiAgfCAncmVzZXQnXG4gIHwgJ2N1cnJlbnRBZGRlZCdcbiAgfCAnY3VycmVudFJlbW92ZWQnXG4gIHwgJ25leHRBZGRlZCdcbiAgfCAnbmV4dFJlbW92ZWQnO1xuXG5leHBvcnQgdHlwZSBIb29rc09uY2UgPSAnYmVmb3JlT25jZScgfCAnb25jZScgfCAnYWZ0ZXJPbmNlJztcblxuZXhwb3J0IHR5cGUgSG9va3NQYWdlID1cbiAgfCAnYmVmb3JlJ1xuICB8ICdiZWZvcmVMZWF2ZSdcbiAgfCAnbGVhdmUnXG4gIHwgJ2FmdGVyTGVhdmUnXG4gIHwgJ2JlZm9yZUVudGVyJ1xuICB8ICdlbnRlcidcbiAgfCAnYWZ0ZXJFbnRlcidcbiAgfCAnYWZ0ZXInO1xuXG5leHBvcnQgdHlwZSBIb29rc0JlZm9yZSA9ICdiZWZvcmVPbmNlJyB8ICdiZWZvcmVMZWF2ZScgfCAnYmVmb3JlRW50ZXInO1xuZXhwb3J0IHR5cGUgSG9va3NBZnRlciA9ICdhZnRlck9uY2UnIHwgJ2FmdGVyTGVhdmUnIHwgJ2FmdGVyRW50ZXInO1xuXG5leHBvcnQgdHlwZSBIb29rc1RyYW5zaXRpb24gPSBIb29rc09uY2UgfCBIb29rc1BhZ2U7XG5leHBvcnQgdHlwZSBIb29rc1ZpZXcgPSBIb29rc0JlZm9yZSB8IEhvb2tzQWZ0ZXI7XG5leHBvcnQgdHlwZSBIb29rc0FsbCA9IEhvb2tzQmFyYmEgfCBIb29rc1RyYW5zaXRpb247XG5cbi8vIEFsbG93IG9wdGlvbmFsIFwiZHluYW1pY2FsbHkgY3JlYXRlZFwiIGhvb2tzXG5leHBvcnQgdHlwZSBIb29rc1RyYW5zaXRpb25NYXAgPSB7IFtrZXkgaW4gSG9va3NUcmFuc2l0aW9uXT86IGFueSB9O1xuXG5leHBvcnQgdHlwZSBIb29rRnVuY3Rpb24gPSAoXG4gIGRhdGE/OiBJVHJhbnNpdGlvbkRhdGEgfCBJVmlld0RhdGEsXG4gIHQ/OiBJVHJhbnNpdGlvblBhZ2VcbikgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBIb29rTWV0aG9kcyB7XG4gIHB1YmxpYyBiZWZvcmU6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBiZWZvcmVMZWF2ZTogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGxlYXZlOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgYWZ0ZXJMZWF2ZTogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGJlZm9yZUVudGVyOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgZW50ZXI6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBhZnRlckVudGVyOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgYWZ0ZXI6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG59XG4iLCIvKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoVG9SZWdleHBcbm1vZHVsZS5leHBvcnRzLm1hdGNoID0gbWF0Y2hcbm1vZHVsZS5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5tb2R1bGUuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZVxubW9kdWxlLmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvUmVnRXhwID0gdG9rZW5zVG9SZWdFeHBcblxuLyoqXG4gKiBEZWZhdWx0IGNvbmZpZ3MuXG4gKi9cbnZhciBERUZBVUxUX0RFTElNSVRFUiA9ICcvJ1xuXG4vKipcbiAqIFRoZSBtYWluIHBhdGggbWF0Y2hpbmcgcmVnZXhwIHV0aWxpdHkuXG4gKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFBBVEhfUkVHRVhQID0gbmV3IFJlZ0V4cChbXG4gIC8vIE1hdGNoIGVzY2FwZWQgY2hhcmFjdGVycyB0aGF0IHdvdWxkIG90aGVyd2lzZSBhcHBlYXIgaW4gZnV0dXJlIG1hdGNoZXMuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3b24ndCB0cmFuc2Zvcm0uXG4gICcoXFxcXFxcXFwuKScsXG4gIC8vIE1hdGNoIEV4cHJlc3Mtc3R5bGUgcGFyYW1ldGVycyBhbmQgdW4tbmFtZWQgcGFyYW1ldGVycyB3aXRoIGEgcHJlZml4XG4gIC8vIGFuZCBvcHRpb25hbCBzdWZmaXhlcy4gTWF0Y2hlcyBhcHBlYXIgYXM6XG4gIC8vXG4gIC8vIFwiOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCJ0ZXN0XCIsIFwiXFxkK1wiLCB1bmRlZmluZWQsIFwiP1wiXVxuICAvLyBcIihcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJcXGQrXCIsIHVuZGVmaW5lZF1cbiAgJyg/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSkoWysqP10pPydcbl0uam9pbignfCcpLCAnZycpXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IUFycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZSAoc3RyLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSBbXVxuICB2YXIga2V5ID0gMFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBwYXRoID0gJydcbiAgdmFyIGRlZmF1bHREZWxpbWl0ZXIgPSAob3B0aW9ucyAmJiBvcHRpb25zLmRlbGltaXRlcikgfHwgREVGQVVMVF9ERUxJTUlURVJcbiAgdmFyIHdoaXRlbGlzdCA9IChvcHRpb25zICYmIG9wdGlvbnMud2hpdGVsaXN0KSB8fCB1bmRlZmluZWRcbiAgdmFyIHBhdGhFc2NhcGVkID0gZmFsc2VcbiAgdmFyIHJlc1xuXG4gIHdoaWxlICgocmVzID0gUEFUSF9SRUdFWFAuZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBwYXRoRXNjYXBlZCA9IHRydWVcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIHByZXYgPSAnJ1xuICAgIHZhciBuYW1lID0gcmVzWzJdXG4gICAgdmFyIGNhcHR1cmUgPSByZXNbM11cbiAgICB2YXIgZ3JvdXAgPSByZXNbNF1cbiAgICB2YXIgbW9kaWZpZXIgPSByZXNbNV1cblxuICAgIGlmICghcGF0aEVzY2FwZWQgJiYgcGF0aC5sZW5ndGgpIHtcbiAgICAgIHZhciBrID0gcGF0aC5sZW5ndGggLSAxXG4gICAgICB2YXIgYyA9IHBhdGhba11cbiAgICAgIHZhciBtYXRjaGVzID0gd2hpdGVsaXN0ID8gd2hpdGVsaXN0LmluZGV4T2YoYykgPiAtMSA6IHRydWVcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcHJldiA9IGNcbiAgICAgICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgaylcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKVxuICAgICAgcGF0aCA9ICcnXG4gICAgICBwYXRoRXNjYXBlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cFxuICAgIHZhciBkZWxpbWl0ZXIgPSBwcmV2IHx8IGRlZmF1bHREZWxpbWl0ZXJcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZXYsXG4gICAgICBkZWxpbWl0ZXI6IGRlbGltaXRlcixcbiAgICAgIG9wdGlvbmFsOiBvcHRpb25hbCxcbiAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgcGF0dGVybjogcGF0dGVyblxuICAgICAgICA/IGVzY2FwZUdyb3VwKHBhdHRlcm4pXG4gICAgICAgIDogJ1teJyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIgPT09IGRlZmF1bHREZWxpbWl0ZXIgPyBkZWxpbWl0ZXIgOiAoZGVsaW1pdGVyICsgZGVmYXVsdERlbGltaXRlcikpICsgJ10rPydcbiAgICB9KVxuICB9XG5cbiAgLy8gUHVzaCBhbnkgcmVtYWluaW5nIGNoYXJhY3RlcnMuXG4gIGlmIChwYXRoIHx8IGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdGggKyBzdHIuc3Vic3RyKGluZGV4KSlcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFmdW5jdGlvbihPYmplY3Q9LCBPYmplY3Q9KX1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAoc3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpXG59XG5cbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBbXVxuICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKVxuICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24gKHJlLCBrZXlzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpXG4gICAgaWYgKCFtKSByZXR1cm4gZmFsc2VcblxuICAgIHZhciBwYXRoID0gbVswXVxuICAgIHZhciBpbmRleCA9IG0uaW5kZXhcbiAgICB2YXIgcGFyYW1zID0ge31cbiAgICB2YXIgZGVjb2RlID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWNvZGUpIHx8IGRlY29kZVVSSUNvbXBvbmVudFxuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxuXG4gICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV1cblxuICAgICAgaWYgKGtleS5yZXBlYXQpIHtcbiAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LmRlbGltaXRlcikubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfVxuICB9XG59XG5cbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24gKHRva2Vucywgb3B0aW9ucykge1xuICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgdmFyIG1hdGNoZXMgPSBuZXcgQXJyYXkodG9rZW5zLmxlbmd0aClcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14oPzonICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnKSQnLCBmbGFncyhvcHRpb25zKSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGF0aCA9ICcnXG4gICAgdmFyIGVuY29kZSA9IChvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RlKSB8fCBlbmNvZGVVUklDb21wb25lbnRcbiAgICB2YXIgdmFsaWRhdGUgPSBvcHRpb25zID8gb3B0aW9ucy52YWxpZGF0ZSAhPT0gZmFsc2UgOiB0cnVlXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggKz0gdG9rZW5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWRcbiAgICAgIHZhciBzZWdtZW50XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhcnJheScpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSBjb250aW51ZVxuXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgYmUgZW1wdHknKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCInKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgZ290IFwiJyArIHNlZ21lbnQgKyAnXCInKVxuICAgICAgICB9XG5cbiAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkgY29udGludWVcblxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSAnICsgKHRva2VuLnJlcGVhdCA/ICdhbiBhcnJheScgOiAnYSBzdHJpbmcnKSlcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFxuICB9XG59XG5cbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcgKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBncm91cFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JC8oKV0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZsYWdzIChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcGF0aFxuICogQHBhcmFtICB7QXJyYXk9fSAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgaWYgKCFrZXlzKSByZXR1cm4gcGF0aFxuXG4gIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKVxuXG4gIGlmIChncm91cHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgbmFtZTogaSxcbiAgICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgcmVwZWF0OiBmYWxzZSxcbiAgICAgICAgcGF0dGVybjogbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5PX0gIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnRzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHBhdGhUb1JlZ2V4cChwYXRoW2ldLCBrZXlzLCBvcHRpb25zKS5zb3VyY2UpXG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cCgnKD86JyArIHBhcnRzLmpvaW4oJ3wnKSArICcpJywgZmxhZ3Mob3B0aW9ucykpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXk9fSAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgdG9rZW5zXG4gKiBAcGFyYW0gIHtBcnJheT19ICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0XG4gIHZhciBzdGFydCA9IG9wdGlvbnMuc3RhcnQgIT09IGZhbHNlXG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2VcbiAgdmFyIGRlbGltaXRlciA9IG9wdGlvbnMuZGVsaW1pdGVyIHx8IERFRkFVTFRfREVMSU1JVEVSXG4gIHZhciBlbmRzV2l0aCA9IFtdLmNvbmNhdChvcHRpb25zLmVuZHNXaXRoIHx8IFtdKS5tYXAoZXNjYXBlU3RyaW5nKS5jb25jYXQoJyQnKS5qb2luKCd8JylcbiAgdmFyIHJvdXRlID0gc3RhcnQgPyAnXicgOiAnJ1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKHRva2VuKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2FwdHVyZSA9IHRva2VuLnJlcGVhdFxuICAgICAgICA/ICcoPzonICsgdG9rZW4ucGF0dGVybiArICcpKD86JyArIGVzY2FwZVN0cmluZyh0b2tlbi5kZWxpbWl0ZXIpICsgJyg/OicgKyB0b2tlbi5wYXR0ZXJuICsgJykpKidcbiAgICAgICAgOiB0b2tlbi5wYXR0ZXJuXG5cbiAgICAgIGlmIChrZXlzKSBrZXlzLnB1c2godG9rZW4pXG5cbiAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICBpZiAoIXRva2VuLnByZWZpeCkge1xuICAgICAgICAgIHJvdXRlICs9ICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGUgKz0gJyg/OicgKyBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KSArICcoJyArIGNhcHR1cmUgKyAnKSk/J1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KSArICcoJyArIGNhcHR1cmUgKyAnKSdcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgaWYgKCFzdHJpY3QpIHJvdXRlICs9ICcoPzonICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnKT8nXG5cbiAgICByb3V0ZSArPSBlbmRzV2l0aCA9PT0gJyQnID8gJyQnIDogJyg/PScgKyBlbmRzV2l0aCArICcpJ1xuICB9IGVsc2Uge1xuICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1cbiAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09ICdzdHJpbmcnXG4gICAgICA/IGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdID09PSBkZWxpbWl0ZXJcbiAgICAgIDogZW5kVG9rZW4gPT09IHVuZGVmaW5lZFxuXG4gICAgaWYgKCFzdHJpY3QpIHJvdXRlICs9ICcoPzonICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnKD89JyArIGVuZHNXaXRoICsgJykpPydcbiAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSByb3V0ZSArPSAnKD89JyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJ3wnICsgZW5kc1dpdGggKyAnKSdcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7QXJyYXk9fSAgICAgICAgICAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCBrZXlzLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIGtleXMsIG9wdGlvbnMpXG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL3NjaGVtYXNcbiAqIDxicj48YnI+XG4gKiAjIyBTY2hlbWFzIGRlc2NyaXB0aW9uLlxuICpcbiAqIEBtb2R1bGUgY29yZS9zY2hlbWFzXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElTY2hlbWFBdHRyaWJ1dGUgfSBmcm9tICcuLi9kZWZzJztcblxuLyoqXG4gKiBTZWUgW1tJU2NoZW1hQXR0cmlidXRlXV1cbiAqL1xuZXhwb3J0IGNvbnN0IHNjaGVtYUF0dHJpYnV0ZTogSVNjaGVtYUF0dHJpYnV0ZSA9IHtcbiAgY29udGFpbmVyOiAnY29udGFpbmVyJyxcbiAgaGlzdG9yeTogJ2hpc3RvcnknLFxuICBuYW1lc3BhY2U6ICduYW1lc3BhY2UnLFxuICBwcmVmaXg6ICdkYXRhLWJhcmJhJyxcbiAgcHJldmVudDogJ3ByZXZlbnQnLFxuICB3cmFwcGVyOiAnd3JhcHBlcicsXG59O1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS91dGlscy9kb21cbiAqIDxicj48YnI+XG4gKiAjIyBEb20gdXRpbHNcbiAqXG4gKiAtIEFjY2VzcyBET00gY29udGVudHNcbiAqIC0gRE9NIHZzIHN0cmluZyBjb252ZXJzaW9uc1xuICpcbiAqIEBtb2R1bGUgY29yZS91dGlscy9kb21cbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElTY2hlbWFBdHRyaWJ1dGUsIExpbmssIFNjb3BlLCBXcmFwcGVyIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBTY2hlbWFzXG5pbXBvcnQgeyBzY2hlbWFBdHRyaWJ1dGUgfSBmcm9tICcuLi9zY2hlbWFzL2F0dHJpYnV0ZSc7XG5cbmV4cG9ydCBjbGFzcyBEb20ge1xuICBwcml2YXRlIF9hdHRyOiBJU2NoZW1hQXR0cmlidXRlID0gc2NoZW1hQXR0cmlidXRlO1xuICBwcml2YXRlIF9wYXJzZXI6IERPTVBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxuICAvKipcbiAgICogQ29udmVydCBIVE1MRG9jdW1lbnQgdG8gc3RyaW5nLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKGVsOiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsLm91dGVySFRNTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBIVE1MIHN0cmluZyB0byBIVE1MRG9jdW1lbnQuXG4gICAqL1xuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JhcmJhanMvYmFyYmEvaXNzdWVzLzM2MlxuICAvLyBTZWVtcyB0aGF0IHVzaW5nIERPTVBhcnNlci5wYXJzZUZyb21TdHJpbmcgY2F1c2VzIHRoaXMgaXNzdWUuXG4gIHB1YmxpYyB0b0RvY3VtZW50KGh0bWxTdHJpbmc6IHN0cmluZyk6IEhUTUxEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbFN0cmluZywgJ3RleHQvaHRtbCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIEhUTUwgc3RyaW5nIHRvIERJVkVsZW1lbnQuXG4gICAqXG4gICAqIERPTVBhcnNlci5wYXJzZUZyb21TdHJpbmcgZmFpbHMgd2l0aCBpbWdbc3Jjc2V0XSBvbiBpT1MuXG4gICAqIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmFyYmFqcy9iYXJiYS9pc3N1ZXMvMzYyXG4gICAqL1xuICBwdWJsaWMgdG9FbGVtZW50KGh0bWxTdHJpbmc6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICAvKipcbiAgICogR2V0IEhUTUwgY29udGVudC5cbiAgICovXG4gIHB1YmxpYyBnZXRIdG1sKGRvYzogSFRNTERvY3VtZW50ID0gZG9jdW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKGRvYy5kb2N1bWVudEVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBmdWxsIGRvY3VtZW50IGNvbnRlbnQuXG4gICAqL1xuICAvLyBnZXREb2N1bWVudChlbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAvLyAgIHJldHVybiB0aGlzLnRvU3RyKGVsKTtcbiAgLy8gfSxcblxuICAvKipcbiAgICogR2V0IGBbZGF0YS1iYXJiYT1cIndyYXBwZXJcIl1gLlxuICAgKi9cbiAgcHVibGljIGdldFdyYXBwZXIoc2NvcGU6IFNjb3BlID0gZG9jdW1lbnQpOiBXcmFwcGVyIHtcbiAgICByZXR1cm4gc2NvcGUucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbJHt0aGlzLl9hdHRyLnByZWZpeH09XCIke3RoaXMuX2F0dHIud3JhcHBlcn1cIl1gXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYFtkYXRhLWJhcmJhPVwiY29udGFpbmVyXCJdYC5cbiAgICovXG4gIHB1YmxpYyBnZXRDb250YWluZXIoc2NvcGU6IFNjb3BlID0gZG9jdW1lbnQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFske3RoaXMuX2F0dHIucHJlZml4fT1cIiR7dGhpcy5fYXR0ci5jb250YWluZXJ9XCJdYFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNvbnRhaW5lciBhbmQgc3RvcmUgbmV4dCBzaWJsaW5nIChpZiBhcHBsaWNhYmxlKS5cbiAgICovXG4gIHB1YmxpYyByZW1vdmVDb250YWluZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGNvbnRhaW5lcikpIHtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjb250YWluZXIgYmVmb3JlIG5leHQgc2libGluZyBvciBhdCB0aGUgZW5kIG9mIHRoZSB3cmFwcGVyLlxuICAgKi9cbiAgcHVibGljIGFkZENvbnRhaW5lcihjb250YWluZXI6IEhUTUxFbGVtZW50LCB3cmFwcGVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGV4aXN0aW5nQ29udGFpbmVyID0gdGhpcy5nZXRDb250YWluZXIoKTtcblxuICAgIGlmIChleGlzdGluZ0NvbnRhaW5lcikge1xuICAgICAgdGhpcy5faW5zZXJ0QWZ0ZXIoY29udGFpbmVyLCBleGlzdGluZ0NvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGBbZGF0YS1iYXJiYS1uYW1lc3BhY2VdYC5cbiAgICovXG4gIHB1YmxpYyBnZXROYW1lc3BhY2Uoc2NvcGU6IFNjb3BlID0gZG9jdW1lbnQpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBucyA9IHNjb3BlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgWyR7dGhpcy5fYXR0ci5wcmVmaXh9LSR7dGhpcy5fYXR0ci5uYW1lc3BhY2V9XWBcbiAgICApO1xuXG4gICAgcmV0dXJuIG5zXG4gICAgICA/IG5zLmdldEF0dHJpYnV0ZShgJHt0aGlzLl9hdHRyLnByZWZpeH0tJHt0aGlzLl9hdHRyLm5hbWVzcGFjZX1gKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBVUkwgZnJvbSBgaHJlZmAgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0SHJlZihlbDogTGluayk6IHN0cmluZyB8IG51bGwge1xuICAgIC8vIEhUTUwgdGFnTmFtZSBpcyBVUFBFUkNBU0UsIHhodG1sIHRhZ05hbWUga2VlcHMgZXhpc3RpbmcgY2FzZS5cbiAgICBpZiAoZWwudGFnTmFtZSAmJiBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJykge1xuICAgICAgLy8gSFRNTEFuY2hvckVsZW1lbnQsIGZ1bGwgVVJMIGF2YWlsYWJsZVxuICAgICAgaWYgKHR5cGVvZiBlbC5ocmVmID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZWwuaHJlZjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJvYmFibHkgYSBTVkdBRWxlbWVudOKAplxuICAgICAgY29uc3QgaHJlZiA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGVsLmdldEF0dHJpYnV0ZSgneGxpbms6aHJlZicpO1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgLy8gV2hlbiBsaW5rIGNvbWVzIGZyb20gU1ZHLCBgaHJlZmAgcmV0dXJucyBhbiBvYmplY3QsIG5vdCBhIHN0cmluZy5cbiAgICAgICAgY29uc3QgYXR0cjogc3RyaW5nID1cbiAgICAgICAgICAoKGhyZWYgYXMgdW5rbm93bikgYXMgU1ZHQW5pbWF0ZWRTdHJpbmcpLmJhc2VWYWwgfHwgaHJlZjtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlVXJsKGF0dHIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIENvcHlyaWdodCAyMDE0IFNpbW9uIEx5ZGVsbFxuICAvLyBYMTEgKOKAnE1JVOKAnSkgTGljZW5zZWQuIChTZWUgTElDRU5TRVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbHlkZWxsL3Jlc29sdmUtdXJsL2Jsb2IvbWFzdGVyL3Jlc29sdmUtdXJsLmpzXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHB1YmxpYyByZXNvbHZlVXJsKC4uLnVybHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgbnVtVXJscyA9IHVybHMubGVuZ3RoO1xuXG4gICAgaWYgKG51bVVybHMgPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncmVzb2x2ZVVybCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQ7IGdvdCBub25lLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiYXNlJyk7XG4gICAgYmFzZS5ocmVmID0gYXJndW1lbnRzWzBdO1xuXG4gICAgaWYgKG51bVVybHMgPT09IDEpIHtcbiAgICAgIHJldHVybiBiYXNlLmhyZWY7XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgaGVhZC5pbnNlcnRCZWZvcmUoYmFzZSwgaGVhZC5maXJzdENoaWxkKTtcblxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGV0IHJlc29sdmVkO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IG51bVVybHM7IGluZGV4KyspIHtcbiAgICAgIGEuaHJlZiA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICByZXNvbHZlZCA9IGEuaHJlZjtcbiAgICAgIGJhc2UuaHJlZiA9IHJlc29sdmVkO1xuICAgIH1cblxuICAgIGhlYWQucmVtb3ZlQ2hpbGQoYmFzZSk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IG5vZGUgYWZ0ZXIgYW5vdGhlciBub2RlLlxuICAgKi9cbiAgcHJpdmF0ZSBfaW5zZXJ0QWZ0ZXIobmV3Tm9kZTogTm9kZSwgcmVmZXJlbmNlTm9kZTogTm9kZSkge1xuICAgIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG4gIH1cbn1cblxuY29uc3QgZG9tID0gbmV3IERvbSgpO1xuXG5leHBvcnQgeyBkb20gfTtcbiIsImltcG9ydCB7IEhpc3RvcnlBY3Rpb24sIExpbmtFdmVudCwgVHJpZ2dlciB9IGZyb20gJy4uL2RlZnMnO1xuLy8gU2NoZW1hc1xuaW1wb3J0IHsgc2NoZW1hQXR0cmlidXRlIH0gZnJvbSAnLi4vc2NoZW1hcy9hdHRyaWJ1dGUnO1xuXG4vKipcbiAqIEBiYXJiYS9jb3JlL3V0aWxzL2hpc3RvcnlcbiAqIDxicj48YnI+XG4gKiAjIyBIaXN0b3J5IG1hbmFnZXIuXG4gKlxuICogLSBLZWVwIHRyYWNrIG9mIHRoZSBuYXZpZ2F0aW9uIGhpc3RvcnlcbiAqXG4gKiBAbW9kdWxlIGNvcmUvdXRpbHMvaGlzdG9yeVxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKlxuICogU3RhdGUgaXRlbS5cbiAqXG4gKiBAcHJvcGVydHkgZnJvbVxuICogQHByb3BlcnR5IGluZGV4XG4gKi9cbmludGVyZmFjZSBJSGlzdG9yeUl0ZW0ge1xuICAvKiogb3JpZ2luICovXG4gIGZyb206IHN0cmluZztcbiAgLyoqIGluZGV4ICovXG4gIGluZGV4OiBudW1iZXI7XG4gIC8qKiBzdGF0ZXMgKi9cbiAgc3RhdGVzOiBJU3RhdGVJdGVtW107XG59XG5cbi8qKiovXG5pbnRlcmZhY2UgSUNvb3JkcyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEhpc3RvcnkgaXRlbS5cbiAqXG4gKiBAcHJvcGVydHkgbmFtZXNwYWNlXG4gKiBAcHJvcGVydHkgc2Nyb2xsXG4gKiBAcHJvcGVydHkgVVJMXG4gKi9cbmludGVyZmFjZSBJU3RhdGVJdGVtIHtcbiAgLyoqIG5hbWVzcGFjZSAqL1xuICBuczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAvKiogU2Nyb2xsIHBvc2l0aW9uICovXG4gIHNjcm9sbDogSUNvb3JkcztcbiAgLyoqIFVSTCAqL1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEhpc3Rvcnkge1xuICBwcml2YXRlIF9zZXNzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX3N0YXRlczogSVN0YXRlSXRlbVtdID0gW107XG4gIHByaXZhdGUgX3BvaW50ZXIgPSAtMTtcblxuICAvKipcbiAgICogSW5pdCB3aXRoIGZpcnN0IHN0YXRlLlxuICAgKi9cbiAgcHVibGljIGluaXQodXJsOiBzdHJpbmcsIG5zOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXNzaW9uID0gJ2JhcmJhJztcbiAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICBjb25zdCBzdGF0ZTogSVN0YXRlSXRlbSA9IHtcbiAgICAgIG5zLFxuICAgICAgc2Nyb2xsOiB7XG4gICAgICAgIHg6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICB5OiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgIH0sXG4gICAgICB1cmwsXG4gICAgfTtcblxuICAgIHRoaXMuX3N0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICB0aGlzLl9wb2ludGVyID0gaW5kZXg7XG5cbiAgICBjb25zdCBpdGVtOiBJSGlzdG9yeUl0ZW0gPSB7XG4gICAgICBmcm9tOiB0aGlzLl9zZXNzaW9uLFxuICAgICAgaW5kZXgsXG4gICAgICBzdGF0ZXM6IFsuLi50aGlzLl9zdGF0ZXNdLFxuICAgIH07XG5cbiAgICB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoaXRlbSwgJycsIHVybCk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHRyaWdnZXI6IFRyaWdnZXIsXG4gICAgZT86IExpbmtFdmVudCB8IFBvcFN0YXRlRXZlbnRcbiAgKTogVHJpZ2dlciB7XG4gICAgaWYgKGUgJiYgKGUgYXMgUG9wU3RhdGVFdmVudCkuc3RhdGUpIHtcbiAgICAgIC8vIElmIHBvcHN0YXRlLCBtb3ZlIHRvIGV4aXN0aW5nIHN0YXRlXG4gICAgICAvLyBhbmQgZ2V0IGJhY2svZm9yd2FyZCBkaXJlY3Rpb24uXG4gICAgICBjb25zdCB7IHN0YXRlIH06IHsgc3RhdGU6IElIaXN0b3J5SXRlbSB9ID0gZSBhcyBQb3BTdGF0ZUV2ZW50O1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gc3RhdGU7XG4gICAgICBjb25zdCBkaWZmID0gdGhpcy5fcG9pbnRlciAtIGluZGV4O1xuXG4gICAgICB0cmlnZ2VyID0gdGhpcy5fZ2V0RGlyZWN0aW9uKGRpZmYpO1xuXG4gICAgICAvLyBXb3JrIHdpdGggcHJldmlvdXMgc3RhdGVzXG4gICAgICB0aGlzLnJlcGxhY2Uoc3RhdGUuc3RhdGVzKTtcbiAgICAgIHRoaXMuX3BvaW50ZXIgPSBpbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRkIG5ldyBzdGF0ZVxuICAgICAgdGhpcy5hZGQodXJsLCB0cmlnZ2VyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpZ2dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgYWRkKHVybDogc3RyaW5nLCB0cmlnZ2VyOiBUcmlnZ2VyKTogdm9pZCB7XG4gICAgLy8gSWYgbm8gc3RhdGUsIGl0IHdpbGwgYmUgdXBkYXRlZCBsYXRlci5cbiAgICBjb25zdCBucyA9ICd0bXAnO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zaXplO1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX2dldEFjdGlvbih0cmlnZ2VyKTtcbiAgICBjb25zdCBzdGF0ZTogSVN0YXRlSXRlbSA9IHtcbiAgICAgIG5zLFxuICAgICAgc2Nyb2xsOiB7XG4gICAgICAgIHg6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICB5OiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgIH0sXG4gICAgICB1cmwsXG4gICAgfTtcblxuICAgIHRoaXMuX3N0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICB0aGlzLl9wb2ludGVyID0gaW5kZXg7XG5cbiAgICBjb25zdCBpdGVtOiBJSGlzdG9yeUl0ZW0gPSB7XG4gICAgICBmcm9tOiB0aGlzLl9zZXNzaW9uLFxuICAgICAgaW5kZXgsXG4gICAgICBzdGF0ZXM6IFsuLi50aGlzLl9zdGF0ZXNdLFxuICAgIH07XG5cbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5ICYmIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShpdGVtLCAnJywgdXJsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgd2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGl0ZW0sICcnLCB1cmwpO1xuICAgICAgICBicmVhaztcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGRhdGE6IGFueSwgaT86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gaSB8fCB0aGlzLl9wb2ludGVyO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5nZXQoaW5kZXgpO1xuICAgIGNvbnN0IHN0YXRlOiBJU3RhdGVJdGVtID0ge1xuICAgICAgLi4uZXhpc3RpbmcsXG4gICAgICAuLi5kYXRhLFxuICAgIH07XG5cbiAgICB0aGlzLnNldChpbmRleCwgc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsYXN0IHN0YXRlLlxuICAgKi9cbiAgcHVibGljIHJlbW92ZShpPzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGkpIHtcbiAgICAgIHRoaXMuX3N0YXRlcy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlcy5wb3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wb2ludGVyLS07XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFsbCBzdGF0ZXMuXG4gICAqL1xuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdGVzID0gW107XG4gICAgdGhpcy5fcG9pbnRlciA9IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgYWxsIHN0YXRlcy5cbiAgICovXG4gIHB1YmxpYyByZXBsYWNlKG5ld1N0YXRlczogSVN0YXRlSXRlbVtdKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdGVzID0gbmV3U3RhdGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0ZSBieSBpbmRleC5cbiAgICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZXNbaW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzdGF0ZSBieSBpbmRleC5cbiAgICovXG4gIHB1YmxpYyBzZXQoaTogbnVtYmVyLCBzdGF0ZTogSVN0YXRlSXRlbSkge1xuICAgIHJldHVybiAodGhpcy5fc3RhdGVzW2ldID0gc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBzdGF0ZS5cbiAgICovXG4gIGdldCBjdXJyZW50KCk6IElTdGF0ZUl0ZW0ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZXNbdGhpcy5fcG9pbnRlcl07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsYXN0IHN0YXRlICh0b3Agb2YgdGhlIGhpc3Rvcnkgc3RhY2spLlxuICAgKi9cbiAgZ2V0IHN0YXRlKCk6IElTdGF0ZUl0ZW0ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZXNbdGhpcy5fc3RhdGVzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcHJldmlvdXMgc3RhdGUuXG4gICAqL1xuICBnZXQgcHJldmlvdXMoKTogSVN0YXRlSXRlbSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wb2ludGVyIDwgMSA/IG51bGwgOiB0aGlzLl9zdGF0ZXNbdGhpcy5fcG9pbnRlciAtIDFdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RhdGUgc2l6ZS5cbiAgICovXG4gIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBoaXN0b3J5IGFjdGlvbjogcHVzaCB2cyByZXBsYWNlXG4gICAqL1xuICBwcml2YXRlIF9nZXRBY3Rpb24odHJpZ2dlcjogVHJpZ2dlcik6IEhpc3RvcnlBY3Rpb24ge1xuICAgIGxldCBhY3Rpb246IEhpc3RvcnlBY3Rpb24gPSAncHVzaCc7XG5cbiAgICAvLyBNYW5hZ2UgYGRhdGEtYmFyYmEtaGlzdG9yeWAgYXR0cmlidXRlXG4gICAgLy8gdG8gZ2V0IHRoZSByaWdodCBhY3Rpb24gKHB1c2ggdnMgcmVwbGFjZSkuXG4gICAgY29uc3QgZWwgPSB0cmlnZ2VyIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICAgIGNvbnN0IGF0dHIgPSBgJHtzY2hlbWFBdHRyaWJ1dGUucHJlZml4fS0ke3NjaGVtYUF0dHJpYnV0ZS5oaXN0b3J5fWA7XG5cbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlICYmIGVsLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgYWN0aW9uID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpIGFzIEhpc3RvcnlBY3Rpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRpcmVjdGlvbiBvZiBwb3BzdGF0ZSBjaGFuZ2VcbiAgICovXG4gIHByaXZhdGUgX2dldERpcmVjdGlvbihkaWZmOiBudW1iZXIpOiBUcmlnZ2VyIHtcbiAgICAvLyBDaGVjayBpZiBcInNlc3Npb24gc3dpdGNoXCJcbiAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAxKSB7XG4gICAgICAvLyBFeCA2LTAgPiAwIC0+IGZvcndhcmQsIDAtNiA8IDAgLT4gYmFja1xuICAgICAgcmV0dXJuIGRpZmYgPiAwID8gJ2ZvcndhcmQnIDogJ2JhY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJ3BvcHN0YXRlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEV4IDYtNSA+IDAgLT4gYmFjaywgNS02IDwgMCAtPiBmb3J3YXJkXG4gICAgICAgIHJldHVybiBkaWZmID4gMCA/ICdiYWNrJyA6ICdmb3J3YXJkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaGlzdG9yeSA9IG5ldyBIaXN0b3J5KCk7XG5cbmV4cG9ydCB7IGhpc3RvcnkgfTtcbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvdXRpbHMvaGVscGVyc1xuICogPGJyPjxicj5cbiAqICMjIEhlbHBlcnNcbiAqXG4gKiAtIFVwZGF0ZSBuZXh0IHBhZ2UgZGF0YVxuICpcbiAqIEBtb2R1bGUgY29yZS91dGlscy9oZWxwZXJzXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gVGhpcmQtcGFydHlcbmltcG9ydCBwdHIgZnJvbSAncGF0aC10by1yZWdleHAnO1xuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElUcmFuc2l0aW9uRGF0YSB9IGZyb20gJy4uL2RlZnMnO1xuLy8gVXRpbHNcbmltcG9ydCB7IGRvbSB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IGhpc3RvcnkgfSBmcm9tICcuL2hpc3RvcnknO1xuXG4vKipcbiAqIFVwZGF0ZSBgZGF0YS5uZXh0YCwgdGhlIHRpdGxlIGFuZCB0aGUgaGlzdG9yeVxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlID0gYXN5bmMgKFxuICBwYWdlOiBQcm9taXNlPHN0cmluZyB8IHZvaWQ+LFxuICBkYXRhOiBJVHJhbnNpdGlvbkRhdGFcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAvLyBJZiBub3QgYWxyZWFkeSB1cGRhdGVkXG4gIGlmICghZGF0YS5uZXh0Lmh0bWwpIHtcbiAgICBjb25zdCBodG1sID0gYXdhaXQgcGFnZTtcbiAgICBjb25zdCB7IG5leHQgfSA9IGRhdGE7XG5cbiAgICBpZiAoaHRtbCkge1xuICAgICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmFyYmFqcy9iYXJiYS9pc3N1ZXMvMzYyXG4gICAgICAvLyBjb25zdCBuZXh0RG9jdW1lbnQgPSBkb20udG9Eb2N1bWVudChodG1sKTtcbiAgICAgIGNvbnN0IG5leHREb2N1bWVudCA9IGRvbS50b0VsZW1lbnQoaHRtbCk7XG5cbiAgICAgIG5leHQubmFtZXNwYWNlID0gZG9tLmdldE5hbWVzcGFjZShuZXh0RG9jdW1lbnQpO1xuICAgICAgbmV4dC5jb250YWluZXIgPSBkb20uZ2V0Q29udGFpbmVyKG5leHREb2N1bWVudCk7XG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JhcmJhanMvYmFyYmEvaXNzdWVzLzM2MlxuICAgICAgLy8gbmV4dC5odG1sID0gZG9tLmdldEh0bWwobmV4dERvY3VtZW50KTtcbiAgICAgIC8vIG5leHQuaHRtbCA9IG5leHREb2N1bWVudC5pbm5lckhUTUw7XG4gICAgICBuZXh0Lmh0bWwgPSBodG1sO1xuXG4gICAgICAvLyBVcGRhdGUgaGlzdG9yeSBuYW1lc3BhY2UgKG5vdCBhdmFpbGFibGUgd2hlbiBpbml0aWFsbHkgc2V0KVxuICAgICAgaGlzdG9yeS51cGRhdGUoeyBuczogbmV4dC5uYW1lc3BhY2UgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aXRsZS5cbiAgICAgIGNvbnN0IHsgdGl0bGUgfSA9IGRvbS50b0RvY3VtZW50KGh0bWwpO1xuXG4gICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBOZXh0IHRpY2tcbiAqL1xuZXhwb3J0IGNvbnN0IG5leHRUaWNrID0gKCkgPT5cbiAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKTtcbiAgICAvLyBERVY6IHNhbWUgcmVzdWx0P1xuICAgIC8vIHNldFRpbWVvdXQocmVzb2x2ZSwgMCk7XG4gIH0pO1xuXG4vKipcbiAqIFR1cm4gYSByb3V0ZSBzdHJpbmcgc3VjaCBhcyBgL3VzZXIvOm5hbWVgIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogVXNlZCBmb3I6XG4gKlxuICogLSByb3V0ZXMgdG8gaWdub3JlXG4gKiAtIHJvdXRlIHRyYW5zaXRpb24gcmVzb2x1dGlvblxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcGF0aC10by1yZWdleHBcbiAqL1xuY29uc3QgcGF0aFRvUmVnZXhwID0gcHRyO1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfTtcbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvdXRpbHMvdXJsXG4gKiA8YnI+PGJyPlxuICogIyMgVVJMIHV0aWxzLlxuICpcbiAqIC0gQ29sbGVjdCBhbmQgc3RydWN0dXJlIGluZm9ybWF0aW9ucyBmcm9tIFVSTHNcbiAqXG4gKiBAbW9kdWxlIGNvcmUvdXRpbHMvdXJsXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElHZW5lcmljT2JqZWN0LCBJVXJsQmFzZSB9IGZyb20gJy4uL2RlZnMnO1xuXG4vKipcbiAqIEdldCBsb2NhdGlvbiBocmVmLlxuICovXG5leHBvcnQgY29uc3QgZ2V0SHJlZiA9ICgpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4vKipcbiAqIEdldCBsb2NhdGlvbiBvcmlnaW4uXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPcmlnaW4gPSAoKSA9PiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuXG4vKipcbiAqIEdldCBwb3J0IGJhc2VkIG9uIFVSTCBvciBsb2NhdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFBvcnQgPSAodXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZikgPT4gcGFyc2UodXJsKS5wb3J0O1xuXG4vKipcbiAqIEdldCBwYXRoIGZyb20gVVJMLlxuICovXG5leHBvcnQgY29uc3QgZ2V0UGF0aCA9ICh1cmw6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSA9PiBwYXJzZSh1cmwpLnBhdGg7XG5cbi8qKlxuICogR2V0IHF1ZXJ5IG9iamVjdCBmcm9tIFVSTC5cbiAqL1xuLy8gZXhwb3J0IGNvbnN0IGdldFF1ZXJ5ID0gKHVybDogc3RyaW5nKTogSUdlbmVyaWNPYmplY3QgPT4gcGFyc2UodXJsKS5xdWVyeTtcblxuLyoqXG4gKiBHZXQgaGFzaCBmcm9tIFVSTC5cbiAqL1xuLy8gZXhwb3J0IGNvbnN0IGdldEhhc2ggPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4gcGFyc2UodXJsKS5oYXNoO1xuXG4vKipcbiAqIFBhcnNlIFVSTCBmb3IgcGF0aCwgcXVlcnkgYW5kIGhhc2ggYW5kIG1vcmUuXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZSA9ICh1cmw6IHN0cmluZyk6IElVcmxCYXNlID0+IHtcbiAgLy8gUG9ydFxuICBsZXQgcG9ydDtcbiAgY29uc3QgbWF0Y2hlcyA9IHVybC5tYXRjaCgvOlxcZCsvKTtcblxuICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgIGlmICgvXmh0dHAvLnRlc3QodXJsKSkge1xuICAgICAgcG9ydCA9IDgwO1xuICAgIH1cblxuICAgIGlmICgvXmh0dHBzLy50ZXN0KHVybCkpIHtcbiAgICAgIHBvcnQgPSA0NDM7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBvcnRTdHJpbmcgPSBtYXRjaGVzWzBdLnN1YnN0cmluZygxKTtcblxuICAgIHBvcnQgPSBwYXJzZUludChwb3J0U3RyaW5nLCAxMCk7XG4gIH1cblxuICAvLyBQYXRoXG4gIGxldCBwYXRoID0gdXJsLnJlcGxhY2UoZ2V0T3JpZ2luKCksICcnKTtcbiAgbGV0IGhhc2g7XG4gIGxldCBxdWVyeSA9IHt9O1xuXG4gIC8vIEhhc2hcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG5cbiAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgaGFzaCA9IHBhdGguc2xpY2UoaGFzaEluZGV4ICsgMSk7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIC8vIFF1ZXJ5XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcblxuICBpZiAocXVlcnlJbmRleCA+PSAwKSB7XG4gICAgcXVlcnkgPSBwYXJzZVF1ZXJ5KHBhdGguc2xpY2UocXVlcnlJbmRleCArIDEpKTtcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBxdWVyeUluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFzaCxcbiAgICBwYXRoLFxuICAgIHBvcnQsXG4gICAgcXVlcnksXG4gIH07XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgcXVlcnkgc3RyaW5nIHRvIG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlUXVlcnkgPSAoc3RyOiBzdHJpbmcpID0+XG4gIHN0ci5zcGxpdCgnJicpLnJlZHVjZSgoYWNjOiBJR2VuZXJpY09iamVjdCwgZWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVsLnNwbGl0KCc9Jyk7XG5cbiAgICBhY2Nba2V5XSA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4vKipcbiAqIENsZWFuIFVSTCwgcmVtb3ZlIFwiaGFzaFwiIGFuZC9vciBcInRyYWlsaW5nIHNsYXNoXCIuXG4gKi9cbmV4cG9ydCBjb25zdCBjbGVhbiA9ICh1cmw6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSA9PlxuICB1cmwucmVwbGFjZSgvKFxcLyMuKnxcXC98Iy4qKSQvLCAnJyk7XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL3V0aWxzL3JlcXVlc3RcbiAqIDxicj48YnI+XG4gKiAjIyBGZXRjaCBwYWdlcyBmb3IgdHJhbnNpdGlvbnMuXG4gKlxuICogLSBJbmNsdWRlcyB0aW1lb3V0XG4gKiAtIFVzZXMgRmV0Y2ggQVBJXG4gKiAtIEhhbmRsZXMgZXJyb3JzXG4gKlxuICogQG1vZHVsZSBjb3JlL3V0aWxzL3JlcXVlc3RcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgUmVxdWVzdEVycm9yIH0gZnJvbSAnLi4vZGVmcyc7XG5cbi8qKlxuICogSW5pdCBhIHBhZ2UgcmVxdWVzdC5cbiAqIEZldGNoIHRoZSBwYWdlIGFuZCByZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSB0ZXh0IGNvbnRlbnQuXG4gKi9cbmZ1bmN0aW9uIHJlcXVlc3QoXG4gIHVybDogc3RyaW5nLFxuICB0dGw6IG51bWJlciA9IDJlMyxcbiAgcmVxdWVzdEVycm9yOiBSZXF1ZXN0RXJyb3Jcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHhoci5zdGF0dXMpIHtcbiAgICAgICAgICAvLyBIVFRQIGNvZGUgaXMgbm90IDIwMCwgcmVqZWN0IHdpdGggcmVzcG9uc2UuXG4gICAgICAgICAgY29uc3QgcmVzID0ge1xuICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXF1ZXN0RXJyb3IodXJsLCByZXMpO1xuICAgICAgICAgIHJlamVjdChyZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKGBUaW1lb3V0IGVycm9yIFske3R0bH1dYCk7XG4gICAgICByZXF1ZXN0RXJyb3IodXJsLCBlcnIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfTtcbiAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihgRmV0Y2ggZXJyb3JgKTtcbiAgICAgIHJlcXVlc3RFcnJvcih1cmwsIGVycik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9O1xuXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgeGhyLnRpbWVvdXQgPSB0dGw7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICAnQWNjZXB0JyxcbiAgICAgICd0ZXh0L2h0bWwsYXBwbGljYXRpb24veGh0bWwreG1sLGFwcGxpY2F0aW9uL3htbCdcbiAgICApO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCd4LWJhcmJhJywgJ3llcycpO1xuICAgIHhoci5zZW5kKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyByZXF1ZXN0IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlzUHJvbWlzZTtcblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsImltcG9ydCBpc1Byb21pc2UgZnJvbSAnaXMtcHJvbWlzZSc7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9TQm91ZHJpYXMvcnVuLWFzeW5jXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkFzeW5jKFxuICBmdW5jOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQgfCBQcm9taXNlPGFueT4sXG4gIGN0eDogYW55ID0ge31cbik6ICguLi5hcmdzOiBhbnlbXSkgPT4gUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGxldCBhc3luYyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIEFkZCBhc3luYyB0byBjb250ZXh0XG4gICAgICBjdHguYXN5bmMgPSAoKSA9PiB7XG4gICAgICAgIGFzeW5jID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gKGVycjogYW55LCB2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGFuc3dlciA9IGZ1bmMuYXBwbHkoY3R4LCBhcmdzIGFzIFtdKTtcblxuICAgICAgaWYgKCFhc3luYykge1xuICAgICAgICBpZiAoaXNQcm9taXNlKGFuc3dlcikpIHtcbiAgICAgICAgICAoYW5zd2VyIGFzIFByb21pc2U8YW55PikudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoYW5zd2VyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvaG9va3NcbiAqIDxicj48YnI+XG4gKiAjIyBIb29rcyBtYW5hZ2VyLlxuICpcbiAqIC0gUmVnaXN0ZXIgYW5kIHRyaWdnZXIgaG9va3NcbiAqXG4gKiBIb29rcyBjYW4gYmUgZWFzaWx5IHJlZ2lzdGVyZWQ6XG4gKlxuICogYGBganNcbiAqIGhvb2tzLmxlYXZlKGNhbGxiYWNrLCBjb250ZXh0KTtcbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL2hvb2tzXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IEhvb2tGdW5jdGlvbiwgSG9va01ldGhvZHMsIEhvb2tzQWxsIH0gZnJvbSAnLi9kZWZzJztcbi8vIE1vZHVsZXNcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbW9kdWxlcy9Mb2dnZXInO1xuLy8gVXRpbHNcbmltcG9ydCB7IHJ1bkFzeW5jIH0gZnJvbSAnLi91dGlscyc7XG4vLyBUeXBlc1xuaW50ZXJmYWNlIElIb29rSW5mb3Mge1xuICBjdHg6IGFueTtcbiAgZm46IEhvb2tGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIEhvb2tzIGV4dGVuZHMgSG9va01ldGhvZHMge1xuICAvKipcbiAgICogQWxsb3cgdGhlIHVzZSBvZiBgaG9va3NbbmFtZV0oY2IsIGN0eClgLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xuICAvLyBba2V5IGluIEhvb2tzQWxsXT86IGFueTtcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcignQGJhcmJhL2NvcmUnKTtcbiAgLyoqXG4gICAqIEFsbCBhdmFpbGFibGUgaG9va3MuXG4gICAqXG4gICAqIFNlZSBbW0hvb2tzQWxsXV1cbiAgICovXG4gIC8vIFRPRE86IGdldCBob29rcyBmcm9tIGRlZnMgKERSWSk/XG4gIHB1YmxpYyBhbGw6IEhvb2tzQWxsW10gPSBbXG4gICAgJ3JlYWR5JyxcbiAgICAncGFnZScsXG4gICAgJ3Jlc2V0JyxcbiAgICAnY3VycmVudEFkZGVkJyxcbiAgICAnY3VycmVudFJlbW92ZWQnLFxuICAgICduZXh0QWRkZWQnLFxuICAgICduZXh0UmVtb3ZlZCcsXG4gICAgJ2JlZm9yZU9uY2UnLFxuICAgICdvbmNlJyxcbiAgICAnYWZ0ZXJPbmNlJyxcbiAgICAnYmVmb3JlJyxcbiAgICAnYmVmb3JlTGVhdmUnLFxuICAgICdsZWF2ZScsXG4gICAgJ2FmdGVyTGVhdmUnLFxuICAgICdiZWZvcmVFbnRlcicsXG4gICAgJ2VudGVyJyxcbiAgICAnYWZ0ZXJFbnRlcicsXG4gICAgJ2FmdGVyJyxcbiAgXTtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyZWQgaG9va3MuXG4gICAqXG4gICAqIC0gVW5pcXVlIGhvb2sgbmFtZVxuICAgKiAtIEFzc29jaWF0ZWQgZGF0YSBzZXQocykgKGNhbGxiYWNrICsgY29udGV4dClcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlcmVkOiBNYXA8SG9va3NBbGwsIFNldDxJSG9va0luZm9zPj4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0KCkge1xuICAgIHRoaXMucmVnaXN0ZXJlZC5jbGVhcigpO1xuICAgIHRoaXMuYWxsLmZvckVhY2goaG9vayA9PiB7XG4gICAgICBpZiAoIXRoaXNbaG9va10pIHtcbiAgICAgICAgdGhpc1tob29rXSA9IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMucmVnaXN0ZXJlZC5oYXMoaG9vaykpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZC5zZXQoaG9vaywgbmV3IFNldCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2V0ID0gdGhpcy5yZWdpc3RlcmVkLmdldChob29rKTtcblxuICAgICAgICAgIHNldC5hZGQoe1xuICAgICAgICAgICAgY3R4OiBjdHggfHwge30sXG4gICAgICAgICAgICBmbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEbyBob29rLlxuICAgKlxuICAgKiBUcmlnZ2VyIHJlZ2lzdGVyZWQgaG9va3MuXG4gICAqL1xuICBwdWJsaWMgZG8obmFtZTogSG9va3NBbGwsIC4uLmFyZ3M6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZC5oYXMobmFtZSkpIHtcbiAgICAgIC8vIExldCdzIHN0YXJ0IGEgY2hhaW4gb2YgcHJvbWlzZXNcbiAgICAgIGxldCBjaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICB0aGlzLnJlZ2lzdGVyZWQuZ2V0KG5hbWUpLmZvckVhY2goaG9vayA9PiB7XG4gICAgICAgIC8vIENoYWluIGFzeW5jIGhvb2tzIHByb21pc2lmaWVkXG4gICAgICAgIGNoYWluID0gY2hhaW4udGhlbigoKSA9PiBydW5Bc3luYyhob29rLmZuLCBob29rLmN0eCkoLi4uYXJncykpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjaGFpbi5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBIb29rIGVycm9yIFske25hbWV9XWApO1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5hbGwuZm9yRWFjaChob29rID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2hvb2tdO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogSGVscCwgcHJpbnQgYXZhaWxhYmxlIGFuZCByZWdpc3RlcmVkIGhvb2tzLlxuICAgKi9cbiAgcHVibGljIGhlbHAoKTogdm9pZCB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgQXZhaWxhYmxlIGhvb2tzOiAke3RoaXMuYWxsLmpvaW4oJywnKX1gKTtcbiAgICBjb25zdCByZWdpc3RlcmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMucmVnaXN0ZXJlZC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiByZWdpc3RlcmVkLnB1c2goa2V5KSk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgUmVnaXN0ZXJlZCBob29rczogJHtyZWdpc3RlcmVkLmpvaW4oJywnKX1gKTtcbiAgfVxufVxuXG5jb25zdCBob29rcyA9IG5ldyBIb29rcygpO1xuXG5leHBvcnQgeyBob29rcyB9O1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL2lnbm9yZVxuICogPGJyPjxicj5cbiAqICMjIE1hbmFnZSBpZ25vcmUgb3B0aW9ucy5cbiAqXG4gKiAtIGNhY2hlXG4gKiAtIHByZWZldGNoXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvaWdub3JlXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElnbm9yZU9wdGlvbiB9IGZyb20gJy4uL2RlZnMnO1xuLy8gVXRpbHNcbmltcG9ydCB7IHBhdGhUb1JlZ2V4cCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuLi91dGlscy91cmwnO1xuXG5leHBvcnQgY2xhc3MgSWdub3JlIHtcbiAgcHJpdmF0ZSBfaWdub3JlQWxsOiBib29sZWFuO1xuICBwcml2YXRlIF9pZ25vcmVSZWdleGVzOiBSZWdFeHBbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGlnbm9yZTogSWdub3JlT3B0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBpZ25vcmUgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5faWdub3JlQWxsID0gaWdub3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXRocyA9IEFycmF5LmlzQXJyYXkoaWdub3JlKSA/IGlnbm9yZSA6IFtpZ25vcmVdO1xuXG4gICAgICB0aGlzLl9pZ25vcmVSZWdleGVzID0gcGF0aHMubWFwKHAgPT4gcGF0aFRvUmVnZXhwKHApKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2hlY2tIcmVmKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5faWdub3JlQWxsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pZ25vcmVBbGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRoIH0gPSBwYXJzZShocmVmKTtcblxuICAgIHJldHVybiB0aGlzLl9pZ25vcmVSZWdleGVzLnNvbWUocmVnZXggPT4gcmVnZXguZXhlYyhwYXRoKSAhPT0gbnVsbCk7XG4gIH1cbn1cbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvbW9kdWxlcy9jYWNoZVxuICogPGJyPjxicj5cbiAqICMjIENhY2hlIGZvciBzdG9yaW5nIFVSTCAvIEhUTUwuXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvY2FjaGVcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgQ2FjaGVBY3Rpb24sIENhY2hlUmVxdWVzdCwgSUNhY2hlRGF0YSwgSWdub3JlT3B0aW9uIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBJZ25vcmUgfSBmcm9tICcuL0lnbm9yZSc7XG5cbmV4cG9ydCBjbGFzcyBDYWNoZSBleHRlbmRzIElnbm9yZSB7XG4gIHByaXZhdGUgX3N0YXRlOiBNYXA8c3RyaW5nLCBJQ2FjaGVEYXRhPiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihpZ25vcmU6IElnbm9yZU9wdGlvbikge1xuICAgIHN1cGVyKGlnbm9yZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHZhbHVlIHRvIGNhY2hlXG4gICAqL1xuICBwdWJsaWMgc2V0KFxuICAgIGhyZWY6IHN0cmluZyxcbiAgICByZXF1ZXN0OiBDYWNoZVJlcXVlc3QsXG4gICAgYWN0aW9uOiBDYWNoZUFjdGlvblxuICApOiBJQ2FjaGVEYXRhIHtcbiAgICB0aGlzLl9zdGF0ZS5zZXQoaHJlZiwge1xuICAgICAgYWN0aW9uLFxuICAgICAgcmVxdWVzdCxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBhY3Rpb24sXG4gICAgICByZXF1ZXN0LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRhdGEgZnJvbSBjYWNoZVxuICAgKi9cbiAgcHVibGljIGdldChocmVmOiBzdHJpbmcpOiBJQ2FjaGVEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KGhyZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByZXF1ZXN0IGZyb20gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBnZXRSZXF1ZXN0KGhyZWY6IHN0cmluZyk6IENhY2hlUmVxdWVzdCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmdldChocmVmKS5yZXF1ZXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY3Rpb24gZnJvbSBjYWNoZVxuICAgKi9cbiAgcHVibGljIGdldEFjdGlvbihocmVmOiBzdHJpbmcpOiBDYWNoZUFjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmdldChocmVmKS5hY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdmFsdWUgZXhpc3RzIGludG8gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBoYXMoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5jaGVja0hyZWYoaHJlZikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmhhcyhocmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdmFsdWUgZnJvbSBjYWNoZVxuICAgKi9cbiAgcHVibGljIGRlbGV0ZShocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZGVsZXRlKGhyZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjYWNoZSB2YWx1ZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShocmVmOiBzdHJpbmcsIGRhdGE6IElDYWNoZURhdGEpOiBJQ2FjaGVEYXRhIHtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuX3N0YXRlLmdldChocmVmKSxcbiAgICAgIC4uLmRhdGEsXG4gICAgfTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQoaHJlZiwgc3RhdGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvcHJldmVudFxuICogPGJyPjxicj5cbiAqICMjIFByZXZlbnQgY2hlY2tzLlxuICpcbiAqIC0gR2F0aGVycyBhbGwgdGhlIHRlc3RzIHRoYXQgYWxsb3cgQmFyYmEgdG8gd29yayBhbmQgcGxheSB0cmFuc2l0aW9uc1xuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL3ByZXZlbnRcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSWdub3JlT3B0aW9uLCBMaW5rLCBQcmV2ZW50Q2hlY2sgfSBmcm9tICcuLi9kZWZzJztcbi8vIFNjaGVtYXNcbmltcG9ydCB7IHNjaGVtYUF0dHJpYnV0ZSB9IGZyb20gJy4uL3NjaGVtYXMvYXR0cmlidXRlJztcbi8vIFV0aWxzXG5pbXBvcnQgeyB1cmwgfSBmcm9tICcuLi91dGlscyc7XG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBJZ25vcmUgfSBmcm9tICcuL0lnbm9yZSc7XG5cbi8qKlxuICogTWFrZSBzdXJlIHRoZSBicm93c2VyIHN1cHBvcnRzIGBoaXN0b3J5LnB1c2hTdGF0ZWAuXG4gKi9cbmNvbnN0IHB1c2hTdGF0ZTogUHJldmVudENoZWNrID0gKCkgPT4gIXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuLyoqXG4gKiBNYWtlIHN1cmUgdGhlcmUgaXMgYW4gYGVsYCBhbmQgYGhyZWZgLlxuICovXG5jb25zdCBleGlzdHM6IFByZXZlbnRDaGVjayA9ICh7IGVsLCBocmVmIH0pID0+ICFlbCB8fCAhaHJlZjtcblxuLyoqXG4gKiBJZiB0aGUgdXNlciBpcyBwcmVzc2luZyBjdHJsICsgY2xpY2ssIHRoZSBicm93c2VyIHdpbGwgb3BlbiBhIG5ldyB0YWIuXG4gKi9cbmNvbnN0IG5ld1RhYjogUHJldmVudENoZWNrID0gKHsgZXZlbnQgfSkgPT5cbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLndoaWNoID4gMSB8fFxuICAoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkubWV0YUtleSB8fFxuICAoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkuY3RybEtleSB8fFxuICAoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkuc2hpZnRLZXkgfHxcbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmFsdEtleTtcblxuLyoqXG4gKiBJZiB0aGUgbGluayBoYXMgYF9ibGFua2AgdGFyZ2V0LlxuICovXG5jb25zdCBibGFuazogUHJldmVudENoZWNrID0gKHsgZWwgfSkgPT5cbiAgZWwuaGFzQXR0cmlidXRlKCd0YXJnZXQnKSAmJiAoZWwgYXMgTGluaykudGFyZ2V0ID09PSAnX2JsYW5rJztcblxuLyoqXG4gKiBJZiB0aGUgZG9tYWluIGlzIHRoZSBzYW1lIChpbiBvcmRlciB0byBhdm9pZCBwdXNoU3RhdGUgY3Jvc3Mgb3JpZ2luIHNlY3VyaXR5IHByb2JsZW0pLlxuICogTm90ZTogU1ZHQUVsZW1lbnQgZG8gbm90IGhhdmUgYHByb3RvY29sYCBuZWl0aGVyIGBob3N0bmFtZWAgcHJvcGVydGllcy5cbiAqL1xuY29uc3QgY29yc0RvbWFpbjogUHJldmVudENoZWNrID0gKHsgZWwgfSkgPT5cbiAgKChlbCBhcyBIVE1MQW5jaG9yRWxlbWVudCkucHJvdG9jb2wgIT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gKGVsIGFzIEhUTUxBbmNob3JFbGVtZW50KS5wcm90b2NvbCkgfHxcbiAgKChlbCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaG9zdG5hbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gKGVsIGFzIEhUTUxBbmNob3JFbGVtZW50KS5ob3N0bmFtZSk7XG5cbi8qKlxuICogSWYgdGhlIHBvcnQgaXMgdGhlIHNhbWUuXG4gKiBOb3RlOiBTVkdBRWxlbWVudCBkbyBub3QgaGF2ZSBgcG9ydGAgcHJvcGVydHkuXG4gKi9cbmNvbnN0IGNvcnNQb3J0OiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCB9KSA9PlxuICAoZWwgYXMgSFRNTEFuY2hvckVsZW1lbnQpLnBvcnQgIT09IHVuZGVmaW5lZCAmJlxuICB1cmwuZ2V0UG9ydCgpICE9PSB1cmwuZ2V0UG9ydCgoZWwgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhyZWYpO1xuXG4vKipcbiAqIElmIHRoZSBsaW5rIGhhcyBkb3dubG9hZCBhdHRyaWJ1dGUuXG4gKi9cbmNvbnN0IGRvd25sb2FkOiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCB9KSA9PlxuICBlbC5nZXRBdHRyaWJ1dGUgJiYgdHlwZW9mIGVsLmdldEF0dHJpYnV0ZSgnZG93bmxvYWQnKSA9PT0gJ3N0cmluZyc7XG5cbi8qKlxuICogSWYgdGhlIGxpbmtzIGNvbnRhaW5zIFtkYXRhLWJhcmJhLXByZXZlbnRdIG9yIFtkYXRhLWJhcmJhLXByZXZlbnQ9XCJzZWxmXCJdLlxuICovXG5jb25zdCBwcmV2ZW50U2VsZjogUHJldmVudENoZWNrID0gKHsgZWwgfSkgPT5cbiAgZWwuaGFzQXR0cmlidXRlKGAke3NjaGVtYUF0dHJpYnV0ZS5wcmVmaXh9LSR7c2NoZW1hQXR0cmlidXRlLnByZXZlbnR9YCk7XG5cbi8qKlxuICogSWYgc29tZSBsaW5rIGFuY2VzdG9yIGNvbnRhaW5zIFtkYXRhLWJhcmJhLXByZXZlbnQ9XCJhbGxcIl0uXG4gKi9cbmNvbnN0IHByZXZlbnRBbGw6IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gIEJvb2xlYW4oXG4gICAgZWwuY2xvc2VzdChgWyR7c2NoZW1hQXR0cmlidXRlLnByZWZpeH0tJHtzY2hlbWFBdHRyaWJ1dGUucHJldmVudH09XCJhbGxcIl1gKVxuICApO1xuXG4vKipcbiAqIElmIHRoZSBsaW5rIGlzIHRoZSBjdXJyZW50IFVSTC5cbiAqXG4gKiA+IE5vdCBpbiB0aGUgdGVzdCBzdWl0ZS5cbiAqL1xuY29uc3Qgc2FtZVVybDogUHJldmVudENoZWNrID0gKHsgaHJlZiB9KSA9PlxuICB1cmwuY2xlYW4oaHJlZikgPT09IHVybC5jbGVhbigpICYmIHVybC5nZXRQb3J0KGhyZWYpID09PSB1cmwuZ2V0UG9ydCgpO1xuXG5leHBvcnQgY2xhc3MgUHJldmVudCBleHRlbmRzIElnbm9yZSB7XG4gIHB1YmxpYyBzdWl0ZTogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIHRlc3RzOiBNYXA8c3RyaW5nLCBQcmV2ZW50Q2hlY2s+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKGlnbm9yZTogSWdub3JlT3B0aW9uKSB7XG4gICAgc3VwZXIoaWdub3JlKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgIC8vIEFkZCBkZWZhdWx0c1xuICAgIHRoaXMuYWRkKCdwdXNoU3RhdGUnLCBwdXNoU3RhdGUpO1xuICAgIHRoaXMuYWRkKCdleGlzdHMnLCBleGlzdHMpO1xuICAgIHRoaXMuYWRkKCduZXdUYWInLCBuZXdUYWIpO1xuICAgIHRoaXMuYWRkKCdibGFuaycsIGJsYW5rKTtcbiAgICB0aGlzLmFkZCgnY29yc0RvbWFpbicsIGNvcnNEb21haW4pO1xuICAgIHRoaXMuYWRkKCdjb3JzUG9ydCcsIGNvcnNQb3J0KTtcbiAgICB0aGlzLmFkZCgnZG93bmxvYWQnLCBkb3dubG9hZCk7XG4gICAgdGhpcy5hZGQoJ3ByZXZlbnRTZWxmJywgcHJldmVudFNlbGYpO1xuICAgIHRoaXMuYWRkKCdwcmV2ZW50QWxsJywgcHJldmVudEFsbCk7XG5cbiAgICAvLyBPdXRzaWRlIG9mIHRoZSB0ZXN0IHN1aXRlXG4gICAgdGhpcy5hZGQoJ3NhbWVVcmwnLCBzYW1lVXJsLCBmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgYWRkKG5hbWU6IHN0cmluZywgY2hlY2s6IFByZXZlbnRDaGVjaywgc3VpdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy50ZXN0cy5zZXQobmFtZSwgY2hlY2spO1xuICAgIHN1aXRlICYmIHRoaXMuc3VpdGUucHVzaChuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gaW5kaXZpZHVhbCB0ZXN0XG4gICAqL1xuICBwdWJsaWMgcnVuKG5hbWU6IHN0cmluZywgZWw6IExpbmssIGV2ZW50OiBFdmVudCwgaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGVzdHMuZ2V0KG5hbWUpKHtcbiAgICAgIGVsLFxuICAgICAgZXZlbnQsXG4gICAgICBocmVmLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biB0ZXN0IHN1aXRlXG4gICAqL1xuICBwdWJsaWMgY2hlY2tMaW5rKGVsOiBMaW5rLCBldmVudDogRXZlbnQsIGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN1aXRlLnNvbWUobmFtZSA9PiB0aGlzLnJ1bihuYW1lLCBlbCwgZXZlbnQsIGhyZWYpKTtcbiAgfVxufVxuIiwiLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3JcbmV4cG9ydCBjbGFzcyBCYXJiYUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZXJyb3I6IEVycm9yLFxuICAgIHB1YmxpYyBsYWJlbCA9ICdCYXJiYSBlcnJvcicsXG4gICAgLi4ucGFyYW1zOiBhbnlbXVxuICApIHtcbiAgICAvLyBQYXNzIHJlbWFpbmluZyBhcmd1bWVudHMgKGluY2x1ZGluZyB2ZW5kb3Igc3BlY2lmaWMgb25lcykgdG8gcGFyZW50IGNvbnN0cnVjdG9yXG4gICAgc3VwZXIoLi4ucGFyYW1zKTtcblxuICAgIC8vIE1haW50YWlucyBwcm9wZXIgc3RhY2sgdHJhY2UgZm9yIHdoZXJlIG91ciBlcnJvciB3YXMgdGhyb3duIChvbmx5IGF2YWlsYWJsZSBvbiBWOClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQmFyYmFFcnJvcik7XG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gJ0JhcmJhRXJyb3InO1xuICB9XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvc3RvcmVcbiAqIDxicj48YnI+XG4gKiAjIyBUcmFuc2l0aW9ucyBzdG9yZS5cbiAqXG4gKiAtIFJlc29sdmUgdHJhbnNpdGlvblxuICogLSBNYW5hZ2UgcnVsZXNcbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9zdG9yZVxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQge1xuICBJUnVsZSxcbiAgSVJ1bGVzLFxuICBJVHJhbnNpdGlvbkRhdGEsXG4gIElUcmFuc2l0aW9uRmlsdGVycyxcbiAgSVRyYW5zaXRpb25PbmNlLFxuICBJVHJhbnNpdGlvblBhZ2UsXG4gIFJ1bGVOYW1lLFxufSBmcm9tICcuLi9kZWZzJztcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9Mb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgU3RvcmUge1xuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCdAYmFyYmEvY29yZScpO1xuICAvKipcbiAgICogQWxsIHJlZ2lzdGVyZWQgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBwdWJsaWMgYWxsOiBJVHJhbnNpdGlvblBhZ2VbXSA9IFtdO1xuICAvKipcbiAgICogXCJQYWdlIG9ubHlcIiByZWdpc3RlcmVkIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgcHVibGljIHBhZ2U6IElUcmFuc2l0aW9uUGFnZVtdID0gW107XG4gIC8qKlxuICAgKiBcIk9uY2Ugb25seVwiIHJlZ2lzdGVyZWQgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBwdWJsaWMgb25jZTogSVRyYW5zaXRpb25PbmNlW10gPSBbXTtcbiAgLyoqXG4gICAqIFJ1bGVzIGZvciB0cmFuc2l0aW9uIHJlc29sdXRpb24uXG4gICAqXG4gICAqIERlZmF1bHRzOlxuICAgKlxuICAgKiAtIG5hbWVzcGFjZVxuICAgKiAtIGN1c3RvbVxuICAgKi9cbiAgcHJpdmF0ZSBfcnVsZXM6IElSdWxlW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ25hbWVzcGFjZScsXG4gICAgICB0eXBlOiAnc3RyaW5ncycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnY3VzdG9tJyxcbiAgICAgIHR5cGU6ICdmdW5jdGlvbicsXG4gICAgfSxcbiAgXTtcblxuICAvKipcbiAgICogSW5pdCBzdG9yZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHRyYW5zaXRpb25zOiBJVHJhbnNpdGlvblBhZ2VbXSA9IFtdKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodHJhbnNpdGlvbnMpIHtcbiAgICAgIC8vIFRPRE86IGFkZCBjaGVjayBmb3IgdmFsaWQgdHJhbnNpdGlvbnM/IGNyaXRlcmlhPyAob25jZSB8fCBlbnRlciAmJiBsZWF2ZSlcbiAgICAgIHRoaXMuYWxsID0gdGhpcy5hbGwuY29uY2F0KHRyYW5zaXRpb25zKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgcnVsZSBvciB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIGFkZCh0eXBlOiAncnVsZScgfCAndHJhbnNpdGlvbicsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAncnVsZSc6XG4gICAgICAgIC8vIFRPRE86IGNoZWNrIGZvciB2YWxpZCBydWxlXG4gICAgICAgIHRoaXMuX3J1bGVzLnNwbGljZShkYXRhLnBvc2l0aW9uIHx8IDAsIDAsIGRhdGEudmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RyYW5zaXRpb24nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVE9ETzogY2hlY2sgZm9yIHZhbGlkIHRyYW5zaXRpb25cbiAgICAgICAgdGhpcy5hbGwucHVzaChkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRyYW5zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGEsXG4gICAgZmlsdGVyczogSVRyYW5zaXRpb25GaWx0ZXJzID0ge31cbiAgKTogSVRyYW5zaXRpb25PbmNlIHwgSVRyYW5zaXRpb25QYWdlIHtcbiAgICAvLyBGaWx0ZXIgb24gXCJvbmNlXCJcbiAgICBsZXQgdHJhbnNpdGlvbnMgPSBmaWx0ZXJzLm9uY2UgPyB0aGlzLm9uY2UgOiB0aGlzLnBhZ2U7XG5cbiAgICAvLyBGaWx0ZXIgb24gXCJzZWxmXCJcbiAgICBpZiAoZmlsdGVycy5zZWxmKSB7XG4gICAgICB0cmFuc2l0aW9ucyA9IHRyYW5zaXRpb25zLmZpbHRlcih0ID0+IHQubmFtZSAmJiB0Lm5hbWUgPT09ICdzZWxmJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb25zID0gdHJhbnNpdGlvbnMuZmlsdGVyKHQgPT4gIXQubmFtZSB8fCB0Lm5hbWUgIT09ICdzZWxmJyk7XG4gICAgfVxuXG4gICAgLy8gQWxsIG1hdGNoaW5nIHRyYW5zaXRpb24gaW5mb3NcbiAgICBjb25zdCBtYXRjaGluZyA9IG5ldyBNYXAoKTtcblxuICAgIC8vIEFjdGl2ZSA9IGZpcnN0IG9mIHZhbGlkIHRyYW5zaXRpb25zXG4gICAgLy8gc29ydGVkIGJ5IGRpcmVjdGlvbnMgKGZyb20vdG8sIGZyb20gfHwgdG8sIOKApilcbiAgICBjb25zdCBhY3RpdmUgPSB0cmFuc2l0aW9ucy5maW5kKHQgPT4ge1xuICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG1hdGNoID0ge307XG5cbiAgICAgIGlmIChmaWx0ZXJzLnNlbGYgJiYgdC5uYW1lID09PSAnc2VsZicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIHJ1bGVzXG4gICAgICB0aGlzLl9ydWxlcy5yZXZlcnNlKCkuZm9yRWFjaChydWxlID0+IHtcbiAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgdmFsaWQgPSB0aGlzLl9jaGVjayh0LCBydWxlLCBkYXRhLCBtYXRjaCk7XG4gICAgICAgICAgLy8gRnJvbS90byBjaGVja1xuICAgICAgICAgIGlmICh0LmZyb20gJiYgdC50bykge1xuICAgICAgICAgICAgdmFsaWQgPVxuICAgICAgICAgICAgICB0aGlzLl9jaGVjayh0LCBydWxlLCBkYXRhLCBtYXRjaCwgJ2Zyb20nKSAmJlxuICAgICAgICAgICAgICB0aGlzLl9jaGVjayh0LCBydWxlLCBkYXRhLCBtYXRjaCwgJ3RvJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0LmZyb20gJiYgIXQudG8pIHtcbiAgICAgICAgICAgIHZhbGlkID0gdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gsICdmcm9tJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdC5mcm9tICYmIHQudG8pIHtcbiAgICAgICAgICAgIHZhbGlkID0gdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gsICd0bycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1hdGNoaW5nLnNldCh0LCBtYXRjaCk7XG5cbiAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFjdGl2ZU1hdGNoID0gbWF0Y2hpbmcuZ2V0KGFjdGl2ZSk7XG4gICAgY29uc3QgdHJhbnNpdGlvblR5cGUgPSBbXTtcbiAgICBpZiAoZmlsdGVycy5vbmNlKSB7XG4gICAgICB0cmFuc2l0aW9uVHlwZS5wdXNoKCdvbmNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb25UeXBlLnB1c2goJ3BhZ2UnKTtcbiAgICB9XG4gICAgaWYgKGZpbHRlcnMuc2VsZikge1xuICAgICAgdHJhbnNpdGlvblR5cGUucHVzaCgnc2VsZicpO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVNYXRjaCkge1xuICAgICAgLy8gTG9nIHJlc29sdmVkIHRyYW5zaXRpb25cbiAgICAgIGNvbnN0IGluZm9zOiBhbnlbXSA9IFthY3RpdmVdO1xuICAgICAgLy8gTG9nIGlmIG1hdGNoaW5nIGNyaXRlcmlhXG4gICAgICBPYmplY3Qua2V5cyhhY3RpdmVNYXRjaCkubGVuZ3RoID4gMCAmJiBpbmZvcy5wdXNoKGFjdGl2ZU1hdGNoKTtcblxuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcbiAgICAgICAgYFRyYW5zaXRpb24gZm91bmQgWyR7dHJhbnNpdGlvblR5cGUuam9pbignLCcpfV1gLFxuICAgICAgICAuLi5pbmZvc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhgTm8gdHJhbnNpdGlvbiBmb3VuZCBbJHt0cmFuc2l0aW9uVHlwZS5qb2luKCcsJyl9XWApO1xuICAgIH1cblxuICAgIHJldHVybiBhY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICogIyMjIFVwZGF0ZSBzdG9yZS5cbiAgICpcbiAgICogLSBSZW9yZGVyIHRyYW5zaXRpb24gYnkgcHJpb3JpdGllc1xuICAgKiAtIEdldCB3YWl0IGluZGljYXRvclxuICAgKiAtIEdldCBvbmNlIHRyYW5zaXRpb25zXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIC8vIFJlb3JkZXIgYnkgcHJpb3JpdGllc1xuICAgIHRoaXMuYWxsID0gdGhpcy5hbGxcbiAgICAgIC5tYXAodCA9PiB0aGlzLl9hZGRQcmlvcml0eSh0KSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eSlcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5tYXAodCA9PiB7XG4gICAgICAgIGRlbGV0ZSB0LnByaW9yaXR5O1xuXG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfSk7XG4gICAgdGhpcy5wYWdlID0gdGhpcy5hbGwuZmlsdGVyKFxuICAgICAgdCA9PiB0LmxlYXZlICE9PSB1bmRlZmluZWQgfHwgdC5lbnRlciAhPT0gdW5kZWZpbmVkXG4gICAgKSBhcyBJVHJhbnNpdGlvblBhZ2VbXTtcbiAgICB0aGlzLm9uY2UgPSB0aGlzLmFsbC5maWx0ZXIodCA9PiB0Lm9uY2UgIT09IHVuZGVmaW5lZCkgYXMgSVRyYW5zaXRpb25PbmNlW107XG4gIH1cblxuICAvKipcbiAgICogIyMjIENoZWNrIGlmIHRyYW5zaXRpb24gYXBwbHkuXG4gICAqXG4gICAqIEJhc2VkIG9uIHJ1bGUsIHBhZ2UgZGF0YSBhbmQgb3B0aW9uYWwgZGlyZWN0aW9uOlxuICAgKlxuICAgKiAxLiB0cmFuc2l0aW9uIGhhcyBubyBydWxlIFwicHJvcGVydHlcIjpcbiAgICogICAgLSBhbHdheXMgcmV0dXJucyB0cnVlXG4gICAqIDIuIHRyYW5zaXRpb24gaGFzIHJ1bGUgXCJwcm9wZXJ0eVwiOlxuICAgKiAgICAgLSBcInN0cmluZ3NcIiBzaG91bGQgYmUgcHJlc2VudCBvbiBib3RoIHNpZGUgKHRyYW5zaXRpb24gKyBwYWdlKSBhbmQgbWF0Y2hcbiAgICogICAgIC0gXCJmdW5jdGlvblwiIHNob3VsZCByZXR1cm4gdHJ1ZVxuICAgKi9cbiAgcHJpdmF0ZSBfY2hlY2soXG4gICAgdHJhbnNpdGlvbjogSVRyYW5zaXRpb25QYWdlLFxuICAgIHJ1bGU6IElSdWxlLFxuICAgIGRhdGE6IElUcmFuc2l0aW9uRGF0YSxcbiAgICBtYXRjaDogYW55LFxuICAgIGRpcmVjdGlvbj86ICdmcm9tJyB8ICd0bydcbiAgKTogYm9vbGVhbiB7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgIGxldCBoYXNNYXRjaCA9IGZhbHNlO1xuICAgIGNvbnN0IHQgPSB0cmFuc2l0aW9uO1xuICAgIGNvbnN0IHsgbmFtZSwgdHlwZSB9ID0gcnVsZTtcbiAgICBjb25zdCBzdHJSdWxlID0gbmFtZSBhcyBJUnVsZXNbJ3N0cmluZ3MnXTtcbiAgICBjb25zdCBvYmpSdWxlID0gbmFtZSBhcyBJUnVsZXNbJ29iamVjdCddO1xuICAgIGNvbnN0IGZuTmFtZSA9IG5hbWUgYXMgSVJ1bGVzWydmdW5jdGlvbiddO1xuICAgIGNvbnN0IGJhc2UgPSBkaXJlY3Rpb24gPyB0W2RpcmVjdGlvbl0gOiB0OyAvLyA9IHQgfHwgdC5mcm9tIHx8IHQudG9cbiAgICBjb25zdCBwYWdlID0gZGlyZWN0aW9uID09PSAndG8nID8gZGF0YS5uZXh0IDogZGF0YS5jdXJyZW50OyAvLyA9IGN1cnJlbnQgfHwgbmV4dFxuICAgIGNvbnN0IGV4aXN0ID0gZGlyZWN0aW9uID8gYmFzZSAmJiBiYXNlW25hbWVdIDogYmFzZVtuYW1lXTtcblxuICAgIC8vIElmIHRyYW5zaXRpb24gcnVsZSBleGlzdHNcbiAgICBpZiAoZXhpc3QpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdzdHJpbmdzJzpcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIC8vIEFycmF5IHN1cHBvcnRcbiAgICAgICAgICBjb25zdCBuYW1lczogc3RyaW5nW10gPSBBcnJheS5pc0FycmF5KGJhc2Vbc3RyUnVsZV0pXG4gICAgICAgICAgICA/IChiYXNlW3N0clJ1bGVdIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgOiBbYmFzZVtzdHJSdWxlXSBhcyBzdHJpbmddO1xuXG4gICAgICAgICAgLy8gRm9yIG1hdGNoaW5nLCBwcm9wIHNob3VsZCBiZSBwcmVzZW50IG9uIGJvdGggc2lkZXMgYW5kIG1hdGNoXG4gICAgICAgICAgaWYgKHBhZ2Vbc3RyUnVsZV0gJiYgbmFtZXMuaW5kZXhPZihwYWdlW3N0clJ1bGVdKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgdHJhbnNpdGlvbiBwcm9wIGlzIGRpZmZlcmVudCBmcm9tIGN1cnJlbnQsIG5vdCB2YWxpZFxuICAgICAgICAgIGlmIChuYW1lcy5pbmRleE9mKHBhZ2Vbc3RyUnVsZV0pID09PSAtMSkge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6IHtcbiAgICAgICAgICAvLyBBcnJheSBzdXBwb3J0XG4gICAgICAgICAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gQXJyYXkuaXNBcnJheShiYXNlW29ialJ1bGVdKVxuICAgICAgICAgICAgPyAoYmFzZVtvYmpSdWxlXSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgIDogW2Jhc2Vbb2JqUnVsZV0gYXMgc3RyaW5nXTtcblxuICAgICAgICAgIC8vIEZvciBtYXRjaGluZywgcHJvcCBzaG91bGQgYmUgcHJlc2VudCBvbiBib3RoIHNpZGVzIGFuZCBtYXRjaFxuICAgICAgICAgIGlmIChwYWdlW29ialJ1bGVdKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBhZ2Vbb2JqUnVsZV0ubmFtZSAmJlxuICAgICAgICAgICAgICBuYW1lcy5pbmRleE9mKHBhZ2Vbb2JqUnVsZV0ubmFtZSkgIT09IC0xXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdHJhbnNpdGlvbiBwcm9wIGlzIGRpZmZlcmVudCBmcm9tIGN1cnJlbnQsIG5vdCB2YWxpZFxuICAgICAgICAgICAgaWYgKG5hbWVzLmluZGV4T2YocGFnZVtvYmpSdWxlXS5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgIGlmIChiYXNlW2ZuTmFtZV0oZGF0YSkpIHtcbiAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICBtYXRjaFtkaXJlY3Rpb25dID0gbWF0Y2hbZGlyZWN0aW9uXSB8fCB7fTtcbiAgICAgICAgICBtYXRjaFtkaXJlY3Rpb25dW25hbWVdID0gdFtkaXJlY3Rpb25dW25hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoW25hbWVdID0gdFtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBDYWxjdWxhdGUgdHJhbnNpdGlvbiBwcmlvcml0eS5cbiAgICpcbiAgICogQmFzZWQgb246XG4gICAqXG4gICAqIC0gcnVsZSBcInBvc2l0aW9uXCIgKGluZGV4KSBnaXZlIHRlbnMsIGh1bmRyZWRzLCB0aG91c2FuZHMsIOKAplxuICAgKiAtIGZyb20vdG8gcHJvcGVydGllcyBnaXZlIHVuaXRzICgwLCAxIG9yIDIpXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVQcmlvcml0eShcbiAgICB0OiBJVHJhbnNpdGlvblBhZ2UsXG4gICAgcnVsZU5hbWU6IFJ1bGVOYW1lLFxuICAgIHJ1bGVJbmRleDogbnVtYmVyXG4gICk6IG51bWJlciB7XG4gICAgbGV0IHByaW9yaXR5ID0gMDtcblxuICAgIGlmIChcbiAgICAgIHRbcnVsZU5hbWVdIHx8XG4gICAgICAodC5mcm9tICYmIHQuZnJvbVtydWxlTmFtZV0pIHx8XG4gICAgICAodC50byAmJiB0LnRvW3J1bGVOYW1lXSlcbiAgICApIHtcbiAgICAgIHByaW9yaXR5ICs9IE1hdGgucG93KDEwLCBydWxlSW5kZXgpO1xuXG4gICAgICBpZiAodC5mcm9tICYmIHQuZnJvbVtydWxlTmFtZV0pIHtcbiAgICAgICAgcHJpb3JpdHkgKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0LnRvICYmIHQudG9bcnVsZU5hbWVdKSB7XG4gICAgICAgIHByaW9yaXR5ICs9IDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByaW9yaXR5O1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkUHJpb3JpdHkodDogSVRyYW5zaXRpb25QYWdlKTogSVRyYW5zaXRpb25QYWdlIHtcbiAgICB0LnByaW9yaXR5ID0gMDtcbiAgICBsZXQgcHJpb3JpdHkgPSAwO1xuXG4gICAgdGhpcy5fcnVsZXMuZm9yRWFjaCgocnVsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBydWxlO1xuICAgICAgY29uc3QgaW5kZXggPSBpICsgMTtcblxuICAgICAgcHJpb3JpdHkgKz0gdGhpcy5fY2FsY3VsYXRlUHJpb3JpdHkodCwgbmFtZSwgaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgdC5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgcmV0dXJuIHQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvbW9kdWxlcy90cmFuc2l0aW9uc1xuICogPGJyPjxicj5cbiAqICMjIFRyYW5zaXRpb25zIG1hbmFnZXIuXG4gKlxuICogLSBIYW5kbGUgaG9va3MgYW5kIHRyYW5zaXRpb24gbGlmZWN5Y2xlXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvdHJhbnNpdGlvbnNcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHtcbiAgSG9va3NUcmFuc2l0aW9uLFxuICBIb29rc1RyYW5zaXRpb25NYXAsXG4gIElUcmFuc2l0aW9uRGF0YSxcbiAgSVRyYW5zaXRpb25GaWx0ZXJzLFxuICBJVHJhbnNpdGlvbk9uY2UsXG4gIElUcmFuc2l0aW9uUGFnZSxcbiAgV3JhcHBlcixcbn0gZnJvbSAnLi4vZGVmcyc7XG4vLyBIb29rc1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi9ob29rcyc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgZG9tLCBoZWxwZXJzLCBydW5Bc3luYyB9IGZyb20gJy4uL3V0aWxzJztcbi8vIE1vZHVsZXNcbmltcG9ydCB7IEJhcmJhRXJyb3IgfSBmcm9tICcuL0Vycm9yJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vTG9nZ2VyJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9TdG9yZSc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9ucyB7XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoJ0BiYXJiYS9jb3JlJyk7XG4gIHB1YmxpYyBzdG9yZTogU3RvcmU7XG4gIHByaXZhdGUgX3J1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih0cmFuc2l0aW9uczogSVRyYW5zaXRpb25QYWdlW10gPSBbXSkge1xuICAgIHRoaXMuc3RvcmUgPSBuZXcgU3RvcmUodHJhbnNpdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByZXNvbHZlZCB0cmFuc2l0aW9uXG4gICAqXG4gICAqIC0gYmFzZWQgb24gZGF0YVxuICAgKi9cbiAgcHVibGljIGdldChcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGEsXG4gICAgZmlsdGVycz86IElUcmFuc2l0aW9uRmlsdGVyc1xuICApOiBJVHJhbnNpdGlvbk9uY2UgfCBJVHJhbnNpdGlvblBhZ2Uge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnJlc29sdmUoZGF0YSwgZmlsdGVycyk7XG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9uIHJ1bm5pbmcgc3RhdHVzLlxuICAgKi9cbiAgZ2V0IGlzUnVubmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcnVubmluZztcbiAgfVxuICBzZXQgaXNSdW5uaW5nKHN0YXR1czogYm9vbGVhbikge1xuICAgIHRoaXMuX3J1bm5pbmcgPSBzdGF0dXM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZm9yIHJlZ2lzdGVyZWQgb25jZSB0cmFuc2l0aW9uKHMpLlxuICAgKi9cbiAgZ2V0IGhhc09uY2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUub25jZS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciByZWdpc3RlcmVkIHNlbGYgdHJhbnNpdGlvbi5cbiAgICovXG4gIGdldCBoYXNTZWxmKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmFsbC5zb21lKHQgPT4gdC5uYW1lID09PSAnc2VsZicpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBXYWl0IGluZGljYXRvci5cbiAgICpcbiAgICogVGVsbHMgQmFyYmEgdG8gZ2V0IG5leHQgcGFnZSBkYXRhPGJyPlxuICAgKiBiZWZvcmUgc3RhcnRpbmcgdGhlIHJlc29sdXRpb248YnI+XG4gICAqIGJlY2F1c2Ugc29tZSByZWdpc3RlcmVkIHRyYW5zaXRpb25zIG5lZWQ8YnI+XG4gICAqIG5leHQgcGFnZSBkYXRhIHRvIGJlIHJlc29sdmVkIChlZzogYHN5bmM6IHRydWVgLCBgdG86IHsgbmFtZXNwYWNlIH1gLCDigKYpXG4gICAqL1xuICBnZXQgc2hvdWxkV2FpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5hbGwuc29tZSh0ID0+ICh0LnRvICYmICF0LnRvLnJvdXRlKSB8fCB0LnN5bmMpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBEbyBcIm9uY2VcIiB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBIb29rczogc2VlIFtbSG9va3NPbmNlXV0uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZG9PbmNlKHtcbiAgICBkYXRhLFxuICAgIHRyYW5zaXRpb24sXG4gIH06IHtcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGE7XG4gICAgdHJhbnNpdGlvbjogSVRyYW5zaXRpb25PbmNlO1xuICB9KSB7XG4gICAgY29uc3QgdCA9IHRyYW5zaXRpb24gfHwge307XG4gICAgdGhpcy5fcnVubmluZyA9IHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2JlZm9yZU9uY2UnLCBkYXRhLCB0KTtcbiAgICAgIGF3YWl0IHRoaXMub25jZShkYXRhLCB0KTtcbiAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdhZnRlck9uY2UnLCBkYXRhLCB0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL29uY2VdJyk7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBEbyBcInBhZ2VcIiB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBIb29rczogc2VlIFtbSG9va3NQYWdlXV0uXG4gICAqXG4gICAqIGBzeW5jOiBmYWxzZWAgKGRlZmF1bHQpIG9yZGVyOlxuICAgKlxuICAgKiAxLiBiZWZvcmVcbiAgICogMi4gYmVmb3JlTGVhdmVcbiAgICogMy4gbGVhdmVcbiAgICogNC4gYWZ0ZXJMZWF2ZVxuICAgKiA1LiBiZWZvcmVFbnRlclxuICAgKiA2LiBlbnRlclxuICAgKiA3LiBhZnRlckVudGVyXG4gICAqIDguIGFmdGVyXG4gICAqXG4gICAqIGBzeW5jOiB0cnVlYCBvcmRlcjpcbiAgICpcbiAgICogMS4gYmVmb3JlXG4gICAqIDIuIGJlZm9yZUxlYXZlXG4gICAqIDMuIGJlZm9yZUVudGVyXG4gICAqIDQuIGxlYXZlICYgZW50ZXJcbiAgICogNS4gYWZ0ZXJMZWF2ZVxuICAgKiA2LiBhZnRlckVudGVyXG4gICAqIDcuIGFmdGVyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZG9QYWdlKHtcbiAgICBkYXRhLFxuICAgIHRyYW5zaXRpb24sXG4gICAgcGFnZSxcbiAgICB3cmFwcGVyLFxuICB9OiB7XG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhO1xuICAgIHRyYW5zaXRpb246IElUcmFuc2l0aW9uUGFnZTtcbiAgICBwYWdlOiBQcm9taXNlPHN0cmluZyB8IHZvaWQ+O1xuICAgIHdyYXBwZXI6IFdyYXBwZXI7XG4gIH0pIHtcbiAgICBjb25zdCB0ID0gdHJhbnNpdGlvbiB8fCB7fTtcbiAgICBjb25zdCBzeW5jID0gdC5zeW5jID09PSB0cnVlIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5fcnVubmluZyA9IHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgLy8gQ2hlY2sgc3luYyBtb2RlLCB3YWl0IGZvciBuZXh0IGNvbnRlbnRcbiAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgIGF3YWl0IGhlbHBlcnMudXBkYXRlKHBhZ2UsIGRhdGEpO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYmVmb3JlJywgZGF0YSwgdCk7XG5cbiAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5hZGQoZGF0YSwgd3JhcHBlcik7XG4gICAgICAgICAgLy8gQmVmb3JlIGFjdGlvbnNcbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYmVmb3JlTGVhdmUnLCBkYXRhLCB0KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYmVmb3JlRW50ZXInLCBkYXRhLCB0KTtcblxuICAgICAgICAgIC8vIEFjdGlvbnNcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5sZWF2ZShkYXRhLCB0KSwgdGhpcy5lbnRlcihkYXRhLCB0KV0pO1xuXG4gICAgICAgICAgLy8gQWZ0ZXIgYWN0aW9uc1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdhZnRlckxlYXZlJywgZGF0YSwgdCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2FmdGVyRW50ZXInLCBkYXRhLCB0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBlcnJvciBbc3luY10nKTtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbkVycm9yKGVycm9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJhcmJhRXJyb3IoZXJyb3IsICdUcmFuc2l0aW9uIGVycm9yIFtzeW5jXScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxlYXZlUmVzdWx0OiBhbnkgPSBmYWxzZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIExlYXZlXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2JlZm9yZUxlYXZlJywgZGF0YSwgdCk7XG5cbiAgICAgICAgICBsZWF2ZVJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMubGVhdmUoZGF0YSwgdCksXG4gICAgICAgICAgICBoZWxwZXJzLnVwZGF0ZShwYWdlLCBkYXRhKSxcbiAgICAgICAgICBdKS50aGVuKHZhbHVlcyA9PiB2YWx1ZXNbMF0pO1xuXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2FmdGVyTGVhdmUnLCBkYXRhLCB0KTtcblxuICAgICAgICAgIC8vIFRPRE86IGNoZWNrIGhlcmUgXCJ2YWxpZFwiIHBhZ2UgcmVzdWx0XG4gICAgICAgICAgLy8gYmVmb3JlIGdvaW5nIGZ1cnRoZXJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL2xlYXZlXScpO1xuICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFyYmFFcnJvcihcbiAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICdUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvbGVhdmVdJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEVudGVyXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICBpZiAobGVhdmVSZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFkZChkYXRhLCB3cmFwcGVyKTtcblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2JlZm9yZUVudGVyJywgZGF0YSwgdCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmVudGVyKGRhdGEsIHQsIGxlYXZlUmVzdWx0KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdhZnRlckVudGVyJywgZGF0YSwgdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKCdUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvZW50ZXJdJyk7XG4gICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25FcnJvcihlcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCYXJiYUVycm9yKFxuICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgJ1RyYW5zaXRpb24gZXJyb3IgW2JlZm9yZS9hZnRlci9lbnRlcl0nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgY3VycmVudCBjb250YWllbnJcbiAgICAgIGF3YWl0IHRoaXMucmVtb3ZlKGRhdGEpO1xuXG4gICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXInLCBkYXRhLCB0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAvLyBJZiBcImN1c3RvbS9zcGVjaWZpY1wiIGJhcmJhIGVycm9yLlxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChlcnJvci5uYW1lICYmIGVycm9yLm5hbWUgPT09ICdCYXJiYUVycm9yJykge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhlcnJvci5sYWJlbCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yLmVycm9yKTtcblxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1RyYW5zaXRpb24gZXJyb3IgW3BhZ2VdJyk7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cblxuICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmNlIGhvb2sgKyBhc3luYyBcIm9uY2VcIiB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uY2UoZGF0YTogSVRyYW5zaXRpb25EYXRhLCB0OiBJVHJhbnNpdGlvbk9uY2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBob29rcy5kbygnb25jZScsIGRhdGEsIHQpO1xuXG4gICAgcmV0dXJuIHQub25jZSA/IHJ1bkFzeW5jKHQub25jZSwgdCkoZGF0YSkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMZWF2ZSBob29rICsgYXN5bmMgXCJsZWF2ZVwiIHRyYW5zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgbGVhdmUoZGF0YTogSVRyYW5zaXRpb25EYXRhLCB0OiBJVHJhbnNpdGlvblBhZ2UpOiBQcm9taXNlPGFueT4ge1xuICAgIGF3YWl0IGhvb2tzLmRvKCdsZWF2ZScsIGRhdGEsIHQpO1xuXG4gICAgcmV0dXJuIHQubGVhdmUgPyBydW5Bc3luYyh0LmxlYXZlLCB0KShkYXRhKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVudGVyIGhvb2sgKyBhc3luYyBcImVudGVyXCIgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBlbnRlcihcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGEsXG4gICAgdDogSVRyYW5zaXRpb25QYWdlLFxuICAgIGxlYXZlUmVzdWx0PzogYW55XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IGhvb2tzLmRvKCdlbnRlcicsIGRhdGEsIHQpO1xuXG4gICAgcmV0dXJuIHQuZW50ZXJcbiAgICAgID8gcnVuQXN5bmModC5lbnRlciwgdCkoZGF0YSwgbGVhdmVSZXN1bHQpXG4gICAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXh0IGNvbnRhaW5lci5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBhZGQoZGF0YTogSVRyYW5zaXRpb25EYXRhLCB3cmFwcGVyOiBXcmFwcGVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZG9tLmFkZENvbnRhaW5lcihkYXRhLm5leHQuY29udGFpbmVyLCB3cmFwcGVyKTtcbiAgICBob29rcy5kbygnbmV4dEFkZGVkJywgZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGN1cnJlbnQgY29udGFpbmVyLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIHJlbW92ZShkYXRhOiBJVHJhbnNpdGlvbkRhdGEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBkb20ucmVtb3ZlQ29udGFpbmVyKGRhdGEuY3VycmVudC5jb250YWluZXIpO1xuICAgIGhvb2tzLmRvKCdjdXJyZW50UmVtb3ZlZCcsIGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNUcmFuc2l0aW9uRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAvLyBFcnJvcnMgZnJvbSByZXF1ZXN0XG4gICAgICByZXR1cm4gIS9UaW1lb3V0IGVycm9yfEZldGNoIGVycm9yLy50ZXN0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChlcnJvci5zdGF0dXMpIHtcbiAgICAgIC8vIEVycm9ycyBmcm9tIHJlcXVlc3RcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEbyBob29rcyArIGFzeW5jIHRyYW5zaXRpb24gbWV0aG9kcy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2RvQXN5bmNIb29rKFxuICAgIGhvb2s6IEhvb2tzVHJhbnNpdGlvbixcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGEsXG4gICAgdDogSG9va3NUcmFuc2l0aW9uTWFwXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IGhvb2tzLmRvKGhvb2ssIGRhdGEsIHQpO1xuXG4gICAgcmV0dXJuIHRbaG9va10gPyBydW5Bc3luYyh0W2hvb2tdLCB0KShkYXRhKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvdmlld3NcbiAqIDxicj48YnI+XG4gKiAjIyBWaWV3cyBtYW5hZ2VyLlxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL3ZpZXdzXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IEhvb2tzVmlldywgSVZpZXcsIElWaWV3RGF0YSB9IGZyb20gJy4uL2RlZnMnO1xuLy8gSG9va3NcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vaG9va3MnO1xuLy8gVXRpbHNcbmltcG9ydCB7IHJ1bkFzeW5jIH0gZnJvbSAnLi4vdXRpbHMnO1xuLy8gVHlwZXNcbnR5cGUgSG9vayA9IChkYXRhOiBJVmlld0RhdGEpID0+IFByb21pc2U8dm9pZD47XG5cbmV4cG9ydCBjbGFzcyBWaWV3cyB7XG4gIC8qKlxuICAgKiBBdmFpbGFibGUgaG9vayBuYW1lcyBmb3Igdmlld3MuXG4gICAqL1xuICBwdWJsaWMgbmFtZXM6IEhvb2tzVmlld1tdID0gW1xuICAgICdiZWZvcmVMZWF2ZScsXG4gICAgJ2FmdGVyTGVhdmUnLFxuICAgICdiZWZvcmVFbnRlcicsXG4gICAgJ2FmdGVyRW50ZXInLFxuICBdO1xuICAvKipcbiAgICogUmVnaXN0ZXJlZCB2aWV3cyBieSBuYW1lc3BhY2UuXG4gICAqL1xuICBwdWJsaWMgYnlOYW1lc3BhY2U6IE1hcDxzdHJpbmcsIElWaWV3PiA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogSW5pdCB2aWV3cy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZpZXdzOiBJVmlld1tdKSB7XG4gICAgaWYgKHZpZXdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGFkZCBjaGVja1xuICAgIC8vIGZvciB2YWxpZCB2aWV3cz8gY3JpdGVyaWE/IChuYW1lc3BhY2UgcHJvcGVydHksIHN0cmluZyA/KVxuICAgIC8vIG9yIGR1cGxpY2F0ZVxuICAgIHZpZXdzLmZvckVhY2godmlldyA9PiB7XG4gICAgICB0aGlzLmJ5TmFtZXNwYWNlLnNldCh2aWV3Lm5hbWVzcGFjZSwgdmlldyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBob29rc1tuYW1lXSh0aGlzLl9jcmVhdGVIb29rKG5hbWUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGhvb2sgbWV0aG9kLlxuICAgKlxuICAgKiAtIGdldCB2aWV3IGJhc2VkIG9uIG5hbWVzcGFjZVxuICAgKiAtIGV4ZWN1dGUgY2FsbGJhY2sgd2l0aCB0cmFuc2l0aW9uIGRhdGFcbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZUhvb2sobmFtZTogSG9va3NWaWV3KTogSG9vayB7XG4gICAgcmV0dXJuIGRhdGEgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lc3BhY2UgfSA9IG5hbWUubWF0Y2goL2VudGVyL2kpID8gZGF0YS5uZXh0IDogZGF0YS5jdXJyZW50O1xuICAgICAgY29uc3QgdmlldyA9IHRoaXMuYnlOYW1lc3BhY2UuZ2V0KG5hbWVzcGFjZSk7XG5cbiAgICAgIC8vIFRPRE86IG1hbmFnZSBzZWxm4oCmXG4gICAgICAvLyBpZiAodmlldyAmJiBkYXRhLnRyaWdnZXIgIT09ICdzZWxmJykge1xuICAgICAgaWYgKHZpZXcgJiYgdmlld1tuYW1lXSkge1xuICAgICAgICByZXR1cm4gcnVuQXN5bmModmlld1tuYW1lXSwgdmlldykoZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICB9XG59XG4iLCIvLyBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHBvbHlmaWxsXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9tYXRjaGVzI1BvbHlmaWxsXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9XG4gICAgKEVsZW1lbnQgYXMgYW55KS5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8vIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgcG9seWZpbGxcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2Nsb3Nlc3QjUG9seWZpbGxcbmlmICghRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCkge1xuICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gY2xvc2VzdChzOiBzdHJpbmcpIHtcbiAgICBsZXQgZWwgPSB0aGlzO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKGVsLm1hdGNoZXMocykpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuXG4gICAgICBlbCA9IChlbC5wYXJlbnRFbGVtZW50IHx8IGVsLnBhcmVudE5vZGUpIGFzIEVsZW1lbnQ7XG4gICAgfSB3aGlsZSAoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29yZS9zY2hlbWFzXG4gKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElTY2hlbWFQYWdlIH0gZnJvbSAnLi4vZGVmcyc7XG5cbi8qKlxuICogU2VlIFtbSVNjaGVtYVBhZ2VdXVxuICovXG5leHBvcnQgY29uc3Qgc2NoZW1hUGFnZTogSVNjaGVtYVBhZ2UgPSB7XG4gIGNvbnRhaW5lcjogbnVsbCxcbiAgaHRtbDogJycsXG4gIG5hbWVzcGFjZTogJycsXG4gIHVybDoge1xuICAgIGhhc2g6ICcnLFxuICAgIGhyZWY6ICcnLFxuICAgIHBhdGg6ICcnLFxuICAgIHBvcnQ6IG51bGwsXG4gICAgcXVlcnk6IHt9LFxuICB9LFxufTtcbiIsIi8qKlxuICogQGJhcmJhL2NvcmVcbiAqIDxicj48YnI+XG4gKiAjIyBCYXJiYSBjb3JlIG9iamVjdFxuICpcbiAqIE1haW4gbWV0aG9kczpcbiAqXG4gKiAtIGAuaW5pdCgpYCBmb3IgaW5pdGlhbGl6YXRpb24gd2l0aCBvcHRpb25zXG4gKiAtIGAudXNlKClgIGZvciBwbHVnaW5zXG4gKlxuICogQG1vZHVsZSBjb3JlXG4gKi9cblxuLyoqKi9cblxuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHtcbiAgSUJhcmJhT3B0aW9ucyxcbiAgSUJhcmJhUGx1Z2luLFxuICBJZ25vcmVPcHRpb24sXG4gIElTY2hlbWFQYWdlLFxuICBJVHJhbnNpdGlvbkRhdGEsXG4gIElUcmFuc2l0aW9uT25jZSxcbiAgSVRyYW5zaXRpb25QYWdlLFxuICBMaW5rLFxuICBMaW5rRXZlbnQsXG4gIFJlcXVlc3RDdXN0b21FcnJvcixcbiAgUmVxdWVzdEVycm9yT3JSZXNwb25zZSxcbiAgU2NoZW1hQXR0cmlidXRlVmFsdWVzLFxuICBUcmlnZ2VyLFxuICBXcmFwcGVyLFxufSBmcm9tICcuL2RlZnMnO1xuLy8gSG9va3NcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi9ob29rcyc7XG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gJy4vbW9kdWxlcy9DYWNoZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL21vZHVsZXMvTG9nZ2VyJztcbmltcG9ydCB7IFByZXZlbnQgfSBmcm9tICcuL21vZHVsZXMvUHJldmVudCc7XG5pbXBvcnQgeyBUcmFuc2l0aW9ucyB9IGZyb20gJy4vbW9kdWxlcy9UcmFuc2l0aW9ucyc7XG5pbXBvcnQgeyBWaWV3cyB9IGZyb20gJy4vbW9kdWxlcy9WaWV3cyc7XG4vLyBQb2x5ZmlsbHNcbmltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuLy8gU2NoZW1hc1xuaW1wb3J0IHsgc2NoZW1hQXR0cmlidXRlIH0gZnJvbSAnLi9zY2hlbWFzL2F0dHJpYnV0ZSc7XG5pbXBvcnQgeyBzY2hlbWFQYWdlIH0gZnJvbSAnLi9zY2hlbWFzL3BhZ2UnO1xuLy8gVXRpbHNcbmltcG9ydCB7IGRvbSwgaGVscGVycywgaGlzdG9yeSwgcmVxdWVzdCwgdXJsIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBDb3JlIHtcbiAgLyoqXG4gICAqIFZlcnNpb24uXG4gICAqL1xuICBwdWJsaWMgdmVyc2lvbjogc3RyaW5nID0gdmVyc2lvbjtcbiAgLyoqXG4gICAqIFNjaGVtYXMuXG4gICAqL1xuICBwdWJsaWMgc2NoZW1hUGFnZTogSVNjaGVtYVBhZ2UgPSBzY2hlbWFQYWdlO1xuICAvKipcbiAgICogTG9nZ2VyIGNsYXNzLCBhbGxvd3MgcGx1Z2lucyB0byBjcmVhdGUgTG9nZ2VyLlxuICAgKi9cbiAgcHVibGljIExvZ2dlcjogdHlwZW9mIExvZ2dlciA9IExvZ2dlcjtcbiAgLyoqXG4gICAqIEJhcmJhIGxvZ2dlci5cbiAgICovXG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoJ0BiYXJiYS9jb3JlJyk7XG4gIC8qKlxuICAgKiBQbHVnaW5zLlxuICAgKi9cbiAgcHVibGljIHBsdWdpbnM6IEFycmF5PElCYXJiYVBsdWdpbjxhbnk+PiA9IFtdO1xuICAvKipcbiAgICogT3B0aW9uc1xuICAgKi9cbiAgcHVibGljIHRpbWVvdXQ6IG51bWJlcjtcbiAgcHVibGljIGNhY2hlSWdub3JlOiBJZ25vcmVPcHRpb247XG4gIHB1YmxpYyBwcmVmZXRjaElnbm9yZTogSWdub3JlT3B0aW9uO1xuICBwdWJsaWMgcHJldmVudFJ1bm5pbmc6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBIb29rc1xuICAgKi9cbiAgcHVibGljIGhvb2tzID0gaG9va3M7XG4gIC8qKlxuICAgKiBNb2R1bGVzLlxuICAgKi9cbiAgLy8gcHVibGljIGhpc3Rvcnk6IEhpc3Rvcnk7XG4gIHB1YmxpYyBjYWNoZTogQ2FjaGU7XG4gIHB1YmxpYyBwcmV2ZW50OiBQcmV2ZW50O1xuICBwdWJsaWMgdHJhbnNpdGlvbnM6IFRyYW5zaXRpb25zO1xuICBwdWJsaWMgdmlld3M6IFZpZXdzO1xuICAvKipcbiAgICogVXRpbHMuXG4gICAqL1xuICBwdWJsaWMgZG9tID0gZG9tO1xuICBwdWJsaWMgaGVscGVycyA9IGhlbHBlcnM7XG4gIHB1YmxpYyBoaXN0b3J5ID0gaGlzdG9yeTtcbiAgcHVibGljIHJlcXVlc3QgPSByZXF1ZXN0O1xuICBwdWJsaWMgdXJsID0gdXJsO1xuXG4gIHByaXZhdGUgX2RhdGE6IElUcmFuc2l0aW9uRGF0YTtcbiAgcHJpdmF0ZSBfcmVxdWVzdEN1c3RvbUVycm9yOiBSZXF1ZXN0Q3VzdG9tRXJyb3I7XG4gIHByaXZhdGUgX3dyYXBwZXI6IFdyYXBwZXI7XG5cbiAgLyoqXG4gICAqICMjIyBJbml0IHBsdWdpbiB3aXRoIG9wdGlvbnMuXG4gICAqXG4gICAqIFNlZSBbW0lCYXJiYVBsdWdpbl1dIGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBwdWJsaWMgdXNlPFQ+KHBsdWdpbjogSUJhcmJhUGx1Z2luPFQ+LCBvcHRpb25zPzogVCk6IHZvaWQge1xuICAgIGNvbnN0IGluc3RhbGxlZFBsdWdpbnMgPSB0aGlzLnBsdWdpbnM7XG5cbiAgICAvLyBQbHVnaW4gaW5zdGFsbGF0aW9uXG4gICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaW5kZXhPZihwbHVnaW4pID4gLTEpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oYFBsdWdpbiBbJHtwbHVnaW4ubmFtZX1dIGFscmVhZHkgaW5zdGFsbGVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwbHVnaW4uaW5zdGFsbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihgUGx1Z2luIFske3BsdWdpbi5uYW1lfV0gaGFzIG5vIFwiaW5zdGFsbFwiIG1ldGhvZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBsdWdpbi5pbnN0YWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIGluc3RhbGxlZFBsdWdpbnMucHVzaChwbHVnaW4pO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBJbml0IGJhcmJhIHdpdGggb3B0aW9ucy5cbiAgICpcbiAgICogU2VlIFtbSUJhcmJhT3B0aW9uc11dIGZvciBtb3JlIGRldGFpbHMuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWVzIGFyZTpcbiAgICpcbiAgICogLSB0cmFuc2l0aW9uczogYFtdYFxuICAgKiAtIHZpZXdzOiBgW11gXG4gICAqIC0gc2NoZW1hOiBbW1NjaGVtYUF0dHJpYnV0ZV1dXG4gICAqIC0gdGltZW91dDogYDJlM2BcbiAgICogLSBjYWNoZUlnbm9yZTogYGZhbHNlYFxuICAgKiAtIHByZWZldGNoSWdub3JlOiBgZmFsc2VgXG4gICAqIC0gcHJldmVudFJ1bm5pbmc6IGBmYWxzZWBcbiAgICogLSBwcmV2ZW50OiBgbnVsbGAsXG4gICAqIC0gZGVidWc6IGBmYWxzZWBcbiAgICogLSBsb2dMZXZlbDogYCdkZWJ1ZydgXG4gICAqL1xuICBwdWJsaWMgaW5pdChcbiAgICAvKiogQGlnbm9yZSAqLyB7XG4gICAgICB0cmFuc2l0aW9ucyA9IFtdLFxuICAgICAgdmlld3MgPSBbXSxcbiAgICAgIHNjaGVtYSA9IHNjaGVtYUF0dHJpYnV0ZSxcbiAgICAgIHJlcXVlc3RFcnJvcixcbiAgICAgIHRpbWVvdXQgPSAyZTMsXG4gICAgICBjYWNoZUlnbm9yZSA9IGZhbHNlLFxuICAgICAgcHJlZmV0Y2hJZ25vcmUgPSBmYWxzZSxcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBwcmV2ZW50UnVubmluZyA9IGZhbHNlLFxuICAgICAgcHJldmVudDogcHJldmVudEN1c3RvbSA9IG51bGwsXG4gICAgICBkZWJ1ZyA9IGZhbHNlLFxuICAgICAgbG9nTGV2ZWwgPSAnb2ZmJyxcbiAgICB9OiBJQmFyYmFPcHRpb25zID0ge31cbiAgKSB7XG4gICAgLy8gMC4gU2V0IGxvZ2dlciBsZXZlbCBhbmQgcHJpbnQgdmVyc2lvblxuICAgIExvZ2dlci5zZXRMZXZlbChkZWJ1ZyA9PT0gdHJ1ZSA/ICdkZWJ1ZycgOiBsb2dMZXZlbCk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyh0aGlzLnZlcnNpb24pO1xuXG4gICAgLy8gMS4gTWFuYWdlIG9wdGlvbnNcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEpLmZvckVhY2goayA9PiB7XG4gICAgICBjb25zdCBhdHRyID0gayBhcyBTY2hlbWFBdHRyaWJ1dGVWYWx1ZXM7XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoc2NoZW1hQXR0cmlidXRlW2F0dHJdKSB7XG4gICAgICAgIHNjaGVtYUF0dHJpYnV0ZVthdHRyXSA9IHNjaGVtYVthdHRyXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9yZXF1ZXN0Q3VzdG9tRXJyb3IgPSByZXF1ZXN0RXJyb3I7XG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgICB0aGlzLmNhY2hlSWdub3JlID0gY2FjaGVJZ25vcmU7XG4gICAgdGhpcy5wcmVmZXRjaElnbm9yZSA9IHByZWZldGNoSWdub3JlO1xuICAgIHRoaXMucHJldmVudFJ1bm5pbmcgPSBwcmV2ZW50UnVubmluZztcblxuICAgIC8vIDIuIEdldCBhbmQgY2hlY2sgd3JhcHBlclxuICAgIHRoaXMuX3dyYXBwZXIgPSB0aGlzLmRvbS5nZXRXcmFwcGVyKCk7XG4gICAgaWYgKCF0aGlzLl93cmFwcGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tAYmFyYmEvY29yZV0gTm8gQmFyYmEgd3JhcHBlciBmb3VuZCcpO1xuICAgIH1cbiAgICB0aGlzLl93cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpOyAvLyBBMTF5XG5cbiAgICAvLyAzLiBJbml0IHBhZ2VzIChnZXQgXCJjdXJyZW50XCIgZGF0YSlcbiAgICB0aGlzLl9yZXNldERhdGEoKTtcblxuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5kYXRhO1xuXG4gICAgaWYgKCFjdXJyZW50LmNvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQGJhcmJhL2NvcmVdIE5vIEJhcmJhIGNvbnRhaW5lciBmb3VuZCcpO1xuICAgIH1cblxuICAgIC8vIDQuIEluaXQgb3RoZXIgbW9kdWxlc1xuICAgIHRoaXMuY2FjaGUgPSBuZXcgQ2FjaGUoY2FjaGVJZ25vcmUpO1xuICAgIHRoaXMucHJldmVudCA9IG5ldyBQcmV2ZW50KHByZWZldGNoSWdub3JlKTtcbiAgICB0aGlzLnRyYW5zaXRpb25zID0gbmV3IFRyYW5zaXRpb25zKHRyYW5zaXRpb25zKTtcbiAgICB0aGlzLnZpZXdzID0gbmV3IFZpZXdzKHZpZXdzKTtcblxuICAgIC8vIEFkZCBwcmV2ZW50IGN1c3RvbVxuICAgIGlmIChwcmV2ZW50Q3VzdG9tICE9PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIHByZXZlbnRDdXN0b20gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQGJhcmJhL2NvcmVdIFByZXZlbnQgc2hvdWxkIGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmV2ZW50LmFkZCgncHJldmVudEN1c3RvbScsIHByZXZlbnRDdXN0b20pO1xuICAgIH1cblxuICAgIC8vIDUuIFVzZSBcImN1cnJlbnRcIiBkYXRhXG4gICAgLy8gSW5pdCBoaXN0b3J5XG4gICAgdGhpcy5oaXN0b3J5LmluaXQoY3VycmVudC51cmwuaHJlZiwgY3VycmVudC5uYW1lc3BhY2UpO1xuICAgIC8vIEFkZCB0byBjYWNoZVxuICAgIC8vIFRPRE86IGRvIG5vdCBjYWNoZSByZW5kZXJlciBIVE1MLCBvbmx5IHJlcXVlc3QgcmVzdWx0c+KAplxuICAgIC8vIHRoaXMuY2FjaGUuc2V0KGN1cnJlbnQudXJsLmhyZWYsIFByb21pc2UucmVzb2x2ZShjdXJyZW50Lmh0bWwpLCAnaW5pdCcpO1xuXG4gICAgLy8gNi4gQmluZCBjb250ZXh0XG4gICAgdGhpcy5fb25MaW5rRW50ZXIgPSB0aGlzLl9vbkxpbmtFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTGlua0NsaWNrID0gdGhpcy5fb25MaW5rQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblN0YXRlQ2hhbmdlID0gdGhpcy5fb25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JpbmQoKTtcblxuICAgIC8vIDcuIEluaXQgcGx1Z2luc1xuICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PiBwbHVnaW4uaW5pdCgpKTtcblxuICAgIC8vIDguIEJhcmJhIHJlYWR5XG4gICAgLy8gU2V0IG5leHQgKyB0cmlnZ2VyIGZvciBvbmNlIGFuZCBgYmVmb3JlRW50ZXJgL2BhZnRlckVudGVyYCB2aWV3IG9uIHBhZ2UgbG9hZC5cbiAgICBjb25zdCBvbmNlRGF0YSA9IHRoaXMuZGF0YTtcblxuICAgIG9uY2VEYXRhLnRyaWdnZXIgPSAnYmFyYmEnO1xuICAgIG9uY2VEYXRhLm5leHQgPSBvbmNlRGF0YS5jdXJyZW50O1xuICAgIG9uY2VEYXRhLmN1cnJlbnQgPSB7IC4uLnRoaXMuc2NoZW1hUGFnZSB9O1xuICAgIHRoaXMuaG9va3MuZG8oJ3JlYWR5Jywgb25jZURhdGEpO1xuXG4gICAgLy8gOS4gRmluYWxseSwgZG8gb25jZeKAplxuICAgIHRoaXMub25jZShvbmNlRGF0YSk7XG5cbiAgICAvLyBDbGVhbiBkYXRhIGZvciBmaXJzdCBiYXJiYSB0cmFuc2l0aW9u4oCmXG4gICAgdGhpcy5fcmVzZXREYXRhKCk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNldERhdGEoKTtcbiAgICB0aGlzLl91bmJpbmQoKTtcbiAgICB0aGlzLmhpc3RvcnkuY2xlYXIoKTtcbiAgICB0aGlzLmhvb2tzLmNsZWFyKCk7XG4gICAgdGhpcy5wbHVnaW5zID0gW107XG4gIH1cblxuICBnZXQgZGF0YSgpOiBJVHJhbnNpdGlvbkRhdGEge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IHdyYXBwZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl93cmFwcGVyO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBGb3JjZSBhIHBhZ2UgY2hhbmdlIHdpdGhvdXQgQmFyYmEgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBmb3JjZShocmVmOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBERVZcbiAgICAvLyBDYW4gYmUgdXNlZCB3YWl0aW5nIGFuaW1hdGlvbiBjYW5jZWxsYXRpb24gbWFuYWdlbWVudOKAplxuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oaHJlZik7XG4gIH1cblxuICAvKipcbiAgICogIyMjIEdvIGZvciBhIEJhcmJhIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIE1hbmFnZSBcInNlbGYgcGFnZVwiIGhyZWY6XG4gICAqXG4gICAqIC0gaWYgc2FtZSB1cmwgYW5kIG5vIHNlbGYgdHJhbnNpdGlvbiwga2VlcCBkZWZhdWx0IGJlaGF2aW9yXG4gICAqICAgLSBsaW5rOiByZWxvYWQgdGhlIHBhZ2VcbiAgICogICAtIGFuY2hvcjogc2Nyb2xsIHRvXG4gICAqIC0gaWYgc2FtZSB1cmwgd2l0aCBzZWxmIHRyYW5zaXRpb24sIHVzZSBpdFxuICAgKiAtIHRoZW4gc3RhcnQgYSBwYWdlIHRyYW5zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgZ28oXG4gICAgaHJlZjogc3RyaW5nLFxuICAgIHRyaWdnZXI6IFRyaWdnZXIgPSAnYmFyYmEnLFxuICAgIGU/OiBMaW5rRXZlbnQgfCBQb3BTdGF0ZUV2ZW50XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIElmIGFuaW1hdGlvbiBydW5uaW5nLCBmb3JjZSByZWxvYWRcbiAgICBpZiAodGhpcy50cmFuc2l0aW9ucy5pc1J1bm5pbmcpIHtcbiAgICAgIHRoaXMuZm9yY2UoaHJlZik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2VsZiA9IGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgcHJldmVudCBzYW1lVVJMIGFnYWluc3QgY3VycmVudCBoaXN0b3J5XG4gICAgLy8gKyBzdGF0ZSBjaGVja1xuICAgIC8vICsgdXBkYXRlIHRyaWdnZXIgd2l0aCBkaXJlY3Rpb25cbiAgICBpZiAodHJpZ2dlciA9PT0gJ3BvcHN0YXRlJykge1xuICAgICAgc2VsZiA9XG4gICAgICAgIHRoaXMuaGlzdG9yeS5jdXJyZW50ICYmXG4gICAgICAgIHRoaXMudXJsLmdldFBhdGgodGhpcy5oaXN0b3J5LmN1cnJlbnQudXJsKSA9PT0gdGhpcy51cmwuZ2V0UGF0aChocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZiA9IHRoaXMucHJldmVudC5ydW4oJ3NhbWVVcmwnLCBudWxsLCBudWxsLCBocmVmKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZiAmJiAhdGhpcy50cmFuc2l0aW9ucy5oYXNTZWxmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJpZ2dlciA9IHRoaXMuaGlzdG9yeS5jaGFuZ2UoaHJlZiwgdHJpZ2dlciwgZSk7XG5cbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wYWdlKGhyZWYsIHRyaWdnZXIsIHNlbGYpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBTdGFydCBhbiBcIm9uY2VcIiB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBJZiBzb21lIHJlZ2lzdGVyZWQgXCJvbmNlXCIgdHJhbnNpdGlvbixcbiAgICogZ2V0IHRoZSBcInJlc29sdmVkXCIgdHJhbnNpdGlvbiBmcm9tIHRoZSBzdG9yZSBhbmQgc3RhcnQgaXQuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25jZShyZWFkeURhdGE6IElUcmFuc2l0aW9uRGF0YSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuaG9va3MuZG8oJ2JlZm9yZUVudGVyJywgcmVhZHlEYXRhKTtcblxuICAgIC8vIENoZWNrIGlmIG9uY2UgdHJhbnNpdGlvblxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25zLmhhc09uY2UpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25zLmdldChyZWFkeURhdGEsIHtcbiAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgIH0pIGFzIElUcmFuc2l0aW9uT25jZTtcblxuICAgICAgYXdhaXQgdGhpcy50cmFuc2l0aW9ucy5kb09uY2UoeyB0cmFuc2l0aW9uLCBkYXRhOiByZWFkeURhdGEgfSk7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5ob29rcy5kbygnYWZ0ZXJFbnRlcicsIHJlYWR5RGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogIyMjIFN0YXJ0IGEgXCJwYWdlXCIgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogMS4gSWYgbm8gcnVubmluZyB0cmFuc2l0aW9uLCB1cGRhdGVzIGRhdGEgd2l0aCBmdWxsIFVSTCBwcm9wZXJ0aWVzIGFuZCB0cmlnZ2VyLlxuICAgKiAyLiBHZXQgcGFnZSBmcm9tIGNhY2hlIG9yIGluaXQgcmVxdWVzdC5cbiAgICogMy4gV2FpdCBpZiBzb21lIHRyYW5zaXRpb25zIG5lZWQgXCJuZXh0XCIgZGF0YSAoYHN5bmM6IHRydWVgLCBgdG86IOKApmApLlxuICAgKiA0LiBNYW5hZ2UgdGhlIGhpc3RvcnksIGRlcGVuZGluZyBvbiB0cmlnZ2VyLlxuICAgKiA1LiBHZXQgXCJkYXRhXCIgYW5kIHRyaWdnZXIgXCJnb1wiIGhvb2suXG4gICAqIDYuIEdldCB0aGUgXCJyZXNvbHZlZFwiIHRyYW5zaXRpb24gZnJvbSB0aGUgc3RvcmUgYW5kIHN0YXJ0IGl0LlxuICAgKiA3LiBVcGRhdGUgdGl0bGUgYW5kIHJlc2V0IGRhdGEgKGN1cnJlbnQsIG5leHQgPSB1bmRlZmluZWQpLlxuICAgKlxuICAgKiA+IElmIFwic2VsZlwiLCB1c2UgdGhlIFwic2VsZlwiIHRyYW5zaXRpb25cbiAgICovXG4gIHB1YmxpYyBhc3luYyBwYWdlKFxuICAgIGhyZWY6IHN0cmluZyxcbiAgICB0cmlnZ2VyOiBUcmlnZ2VyLFxuICAgIHNlbGY6IGJvb2xlYW5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5kYXRhLm5leHQudXJsID0ge1xuICAgICAgaHJlZixcbiAgICAgIC4uLnRoaXMudXJsLnBhcnNlKGhyZWYpLFxuICAgIH07XG4gICAgdGhpcy5kYXRhLnRyaWdnZXIgPSB0cmlnZ2VyO1xuXG4gICAgY29uc3QgcGFnZSA9IHRoaXMuY2FjaGUuaGFzKGhyZWYpXG4gICAgICA/IHRoaXMuY2FjaGUudXBkYXRlKGhyZWYsIHsgYWN0aW9uOiAnY2xpY2snIH0pLnJlcXVlc3RcbiAgICAgIDogdGhpcy5jYWNoZS5zZXQoXG4gICAgICAgICAgaHJlZixcbiAgICAgICAgICB0aGlzLnJlcXVlc3QoXG4gICAgICAgICAgICBocmVmLFxuICAgICAgICAgICAgdGhpcy50aW1lb3V0LFxuICAgICAgICAgICAgdGhpcy5vblJlcXVlc3RFcnJvci5iaW5kKHRoaXMsIHRyaWdnZXIpXG4gICAgICAgICAgKSxcbiAgICAgICAgICAnY2xpY2snXG4gICAgICAgICkucmVxdWVzdDtcblxuICAgIC8vIE5lZWQgdG8gd2FpdCBiZWZvcmUgZ2V0dGluZyB0aGUgcmlnaHQgdHJhbnNpdGlvblxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25zLnNob3VsZFdhaXQpIHtcbiAgICAgIGF3YWl0IGhlbHBlcnMudXBkYXRlKHBhZ2UsIHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcblxuICAgIC8vIEhvb2s6IGJldHdlZW4gdHJpZ2dlciBhbmQgdHJhbnNpdGlvblxuICAgIC8vIENhbiBiZSB1c2VkIHRvIHJlc29sdmUgXCJyb3V0ZVwi4oCmXG4gICAgYXdhaXQgdGhpcy5ob29rcy5kbygncGFnZScsIGRhdGEpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25zLmdldChkYXRhLCB7XG4gICAgICAgIG9uY2U6IGZhbHNlLFxuICAgICAgICBzZWxmLFxuICAgICAgfSkgYXMgSVRyYW5zaXRpb25QYWdlO1xuXG4gICAgICBhd2FpdCB0aGlzLnRyYW5zaXRpb25zLmRvUGFnZSh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHRyYW5zaXRpb24sXG4gICAgICAgIHdyYXBwZXI6IHRoaXMuX3dyYXBwZXIsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fcmVzZXREYXRhKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nIChyZWplY3RlZCBwcm9taXNlLCBlcnJvciwgNDA0LCA1MDUsIG90aGVy4oCmKVxuICAgICAgLy8gVE9ETzogbWFuYWdlIC8gdXNlIGNhc2VzIGZvciBjYW5jZWxsYXRpb25cbiAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKCdUcmFuc2l0aW9uIGNhbmNlbGxlZCcpO1xuXG4gICAgICAvLyBJZiB0cmFuc2l0aW9uIGVycm9yIGFuZCBubyBkZWJ1ZyBtb2RlLCBmb3JjZSByZWxvYWQgcGFnZS5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoTG9nZ2VyLmdldExldmVsKCkgPT09IDApIHtcbiAgICAgICAgdGhpcy5mb3JjZShkYXRhLmN1cnJlbnQudXJsLmhyZWYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgcmVxdWVzdCBlcnJvciBvY2N1cnMuXG4gICAqXG4gICAqIEFsbG93IHRoZSB1c2VyIHRvIG1hbmFnZSByZXF1ZXN0IGVycm9yLiAoRS5nOiA0MDQpXG4gICAqL1xuICBwdWJsaWMgb25SZXF1ZXN0RXJyb3IodHJpZ2dlcjogVHJpZ2dlciwgLi4uYXJnczogYW55KTogYm9vbGVhbiB7XG4gICAgLy8gQ2FuY2VsIHRyYW5zaXRpb24gc3RhdHVzXG4gICAgdGhpcy50cmFuc2l0aW9ucy5pc1J1bm5pbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IFtocmVmLCByZXNwb25zZV06IFtzdHJpbmcsIFJlcXVlc3RFcnJvck9yUmVzcG9uc2VdID0gYXJncztcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmNhY2hlLmdldEFjdGlvbihocmVmKTtcbiAgICB0aGlzLmNhY2hlLmRlbGV0ZShocmVmKTtcblxuICAgIC8vIEN1c3RvbSByZXF1ZXN0RXJyb3IgcmV0dXJuaW5nIGZhbHNlIHdpbGwgcmV0dXJuIGhlcmUuXG4gICAgaWYgKFxuICAgICAgdGhpcy5fcmVxdWVzdEN1c3RvbUVycm9yICYmXG4gICAgICB0aGlzLl9yZXF1ZXN0Q3VzdG9tRXJyb3IodHJpZ2dlciwgYWN0aW9uLCBocmVmLCByZXNwb25zZSkgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcGFnZSBjaGFuZ2VcbiAgICBpZiAoYWN0aW9uID09PSAnY2xpY2snKSB7XG4gICAgICB0aGlzLmZvcmNlKGhyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUHJvZ3JhbW1hdGljYWxseSBwcmVmZXRjaFxuICAgKi9cbiAgcHVibGljIHByZWZldGNoKGhyZWY6IHN0cmluZykge1xuICAgIC8vIEFscmVhZHkgaW4gY2FjaGVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLmNhY2hlLmhhcyhocmVmKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2FjaGUuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIHRoaXMucmVxdWVzdChcbiAgICAgICAgaHJlZixcbiAgICAgICAgdGhpcy50aW1lb3V0LFxuICAgICAgICB0aGlzLm9uUmVxdWVzdEVycm9yLmJpbmQodGhpcywgJ2JhcmJhJylcbiAgICAgICkuY2F0Y2goKGVycm9yOiBSZXF1ZXN0RXJyb3JPclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgIH0pLFxuICAgICAgJ3ByZWZldGNoJ1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBldmVudCBsaXN0ZW5lcnMuXG4gICAqL1xuICBwcml2YXRlIF9iaW5kKCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMucHJlZmV0Y2hJZ25vcmUgIT09IHRydWUpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuX29uTGlua0VudGVyKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbkxpbmtFbnRlcik7XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25MaW5rQ2xpY2spO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX29uU3RhdGVDaGFuZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBfdW5iaW5kKCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMucHJlZmV0Y2hJZ25vcmUgIT09IHRydWUpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuX29uTGlua0VudGVyKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbkxpbmtFbnRlcik7XG4gICAgfVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25MaW5rQ2xpY2spO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX29uU3RhdGVDaGFuZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYSBlbGVtZW50IGlzIGVudGVyZWQuXG4gICAqXG4gICAqIEdldCB2YWxpZCBsaW5rIGVsZW1lbnQuXG4gICAqIENhY2hlIFVSTCBpZiBuZWVkZWQuXG4gICAqL1xuICBwcml2YXRlIF9vbkxpbmtFbnRlcihlOiBMaW5rRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5fZ2V0TGlua0VsZW1lbnQoZSk7XG5cbiAgICBpZiAoIWxpbmspIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBocmVmID0gdGhpcy5kb20uZ2V0SHJlZihsaW5rKTtcblxuICAgIGlmICh0aGlzLnByZXZlbnQuY2hlY2tIcmVmKGhyZWYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQWxyZWFkeSBpbiBjYWNoZVxuICAgIGlmICh0aGlzLmNhY2hlLmhhcyhocmVmKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2FjaGUuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIHRoaXMucmVxdWVzdChcbiAgICAgICAgaHJlZixcbiAgICAgICAgdGhpcy50aW1lb3V0LFxuICAgICAgICB0aGlzLm9uUmVxdWVzdEVycm9yLmJpbmQodGhpcywgbGluaylcbiAgICAgICkuY2F0Y2goKGVycm9yOiBSZXF1ZXN0RXJyb3JPclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgIH0pLFxuICAgICAgJ2VudGVyJ1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBhbiBlbGVtZW50IGlzIGNsaWNrZWQuXG4gICAqXG4gICAqIEdldCB2YWxpZCBsaW5rIGVsZW1lbnQuXG4gICAqIFByZXZlbnQgc2FtZSBVUkwuXG4gICAqIEdvIGZvciBhIEJhcmJhIHRyYW5zaXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9vbkxpbmtDbGljayhlOiBMaW5rRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBUaGlzIHVzZSBgcHJldmVudC5jaGVja0xpbmtgIHVuZGVyIHRoZSBob29kIHRvIGdldCBlbGlnaWJsZSBsaW5rLlxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLl9nZXRMaW5rRWxlbWVudChlKTtcblxuICAgIGlmICghbGluaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25zLmlzUnVubmluZyAmJiB0aGlzLnByZXZlbnRSdW5uaW5nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nbyh0aGlzLmRvbS5nZXRIcmVmKGxpbmspLCBsaW5rLCBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIEhpc3Rvcnkgc3RhdGUgY2hhbmdlcy5cbiAgICpcbiAgICogR2V0IFwiaHJlZlwiIGZyb20gVVJMXG4gICAqIEdvIGZvciBhIEJhcmJhIHRyYW5zaXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9vblN0YXRlQ2hhbmdlKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmdvKHRoaXMudXJsLmdldEhyZWYoKSwgJ3BvcHN0YXRlJywgZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgdmFsaWQgbGluayBhbmNlc3Rvci5cbiAgICpcbiAgICogQ2hlY2sgZm9yIGEgXCJocmVmXCIgYXR0cmlidXRlLlxuICAgKiBUaGVuIGNoZWNrIGlmIGVsaWdpYmxlIGZvciBCYXJiYS5cbiAgICovXG4gIHByaXZhdGUgX2dldExpbmtFbGVtZW50KGU6IExpbmtFdmVudCk6IExpbmsge1xuICAgIGxldCBlbCA9IGUudGFyZ2V0IGFzIExpbms7XG5cbiAgICB3aGlsZSAoZWwgJiYgIXRoaXMuZG9tLmdldEhyZWYoZWwpKSB7XG4gICAgICBlbCA9IChlbCBhcyBIVE1MRWxlbWVudCkucGFyZW50Tm9kZSBhcyBMaW5rO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHByZXZlbnRcbiAgICBpZiAoIWVsIHx8IHRoaXMucHJldmVudC5jaGVja0xpbmsoZWwsIGUsIHRoaXMuZG9tLmdldEhyZWYoZWwpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBwYWdlcyBkYXRhLlxuICAgKlxuICAgKiBTZXQgXCJjdXJyZW50XCIgYW5kIHVuc2V0IFwibmV4dFwiLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzZXREYXRhKCkge1xuICAgIGNvbnN0IGhyZWYgPSB0aGlzLnVybC5nZXRIcmVmKCk7XG4gICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5kb20uZ2V0Q29udGFpbmVyKCksXG4gICAgICBodG1sOiB0aGlzLmRvbS5nZXRIdG1sKCksXG4gICAgICBuYW1lc3BhY2U6IHRoaXMuZG9tLmdldE5hbWVzcGFjZSgpLFxuICAgICAgdXJsOiB7XG4gICAgICAgIGhyZWYsXG4gICAgICAgIC4uLnRoaXMudXJsLnBhcnNlKGhyZWYpLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5fZGF0YSA9IHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBuZXh0OiB7IC4uLnRoaXMuc2NoZW1hUGFnZSB9LFxuICAgICAgdHJpZ2dlcjogdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICB0aGlzLmhvb2tzLmRvKCdyZXNldCcsIHRoaXMuZGF0YSk7XG4gIH1cbn1cblxuY29uc3QgY29yZSA9IG5ldyBDb3JlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvcmU7XG4iLCIvKlxuICogYW5pbWUuanMgdjMuMi4xXG4gKiAoYykgMjAyMCBKdWxpYW4gR2FybmllclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBhbmltZWpzLmNvbVxuICovXG5cbi8vIERlZmF1bHRzXG5cbnZhciBkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyA9IHtcbiAgdXBkYXRlOiBudWxsLFxuICBiZWdpbjogbnVsbCxcbiAgbG9vcEJlZ2luOiBudWxsLFxuICBjaGFuZ2VCZWdpbjogbnVsbCxcbiAgY2hhbmdlOiBudWxsLFxuICBjaGFuZ2VDb21wbGV0ZTogbnVsbCxcbiAgbG9vcENvbXBsZXRlOiBudWxsLFxuICBjb21wbGV0ZTogbnVsbCxcbiAgbG9vcDogMSxcbiAgZGlyZWN0aW9uOiAnbm9ybWFsJyxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIHRpbWVsaW5lT2Zmc2V0OiAwXG59O1xuXG52YXIgZGVmYXVsdFR3ZWVuU2V0dGluZ3MgPSB7XG4gIGR1cmF0aW9uOiAxMDAwLFxuICBkZWxheTogMCxcbiAgZW5kRGVsYXk6IDAsXG4gIGVhc2luZzogJ2Vhc2VPdXRFbGFzdGljKDEsIC41KScsXG4gIHJvdW5kOiAwXG59O1xuXG52YXIgdmFsaWRUcmFuc2Zvcm1zID0gWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsICdyb3RhdGUnLCAncm90YXRlWCcsICdyb3RhdGVZJywgJ3JvdGF0ZVonLCAnc2NhbGUnLCAnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tldycsICdza2V3WCcsICdza2V3WScsICdwZXJzcGVjdGl2ZScsICdtYXRyaXgnLCAnbWF0cml4M2QnXTtcblxuLy8gQ2FjaGluZ1xuXG52YXIgY2FjaGUgPSB7XG4gIENTUzoge30sXG4gIHNwcmluZ3M6IHt9XG59O1xuXG4vLyBVdGlsc1xuXG5mdW5jdGlvbiBtaW5NYXgodmFsLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdDb250YWlucyhzdHIsIHRleHQpIHtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKHRleHQpID4gLTE7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXJndW1lbnRzKGZ1bmMsIGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbnZhciBpcyA9IHtcbiAgYXJyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gQXJyYXkuaXNBcnJheShhKTsgfSxcbiAgb2JqOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gc3RyaW5nQ29udGFpbnMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLCAnT2JqZWN0Jyk7IH0sXG4gIHB0aDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpOyB9LFxuICBzdmc6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudDsgfSxcbiAgaW5wOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ7IH0sXG4gIGRvbTogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpOyB9LFxuICBzdHI6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3N0cmluZyc7IH0sXG4gIGZuYzogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nOyB9LFxuICB1bmQ6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCc7IH0sXG4gIG5pbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGlzLnVuZChhKSB8fCBhID09PSBudWxsOyB9LFxuICBoZXg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKTsgfSxcbiAgcmdiOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gL15yZ2IvLnRlc3QoYSk7IH0sXG4gIGhzbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC9eaHNsLy50ZXN0KGEpOyB9LFxuICBjb2w6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpOyB9LFxuICBrZXk6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJzsgfSxcbn07XG5cbi8vIEVhc2luZ3NcblxuZnVuY3Rpb24gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSAvXFwoKFteKV0rKVxcKS8uZXhlYyhzdHJpbmcpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAocCkgeyByZXR1cm4gcGFyc2VGbG9hdChwKTsgfSkgOiBbXTtcbn1cblxuLy8gU3ByaW5nIHNvbHZlciBpbnNwaXJlZCBieSBXZWJraXQgQ29weXJpZ2h0IMKpIDIwMTYgQXBwbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBodHRwczovL3dlYmtpdC5vcmcvZGVtb3Mvc3ByaW5nL3NwcmluZy5qc1xuXG5mdW5jdGlvbiBzcHJpbmcoc3RyaW5nLCBkdXJhdGlvbikge1xuXG4gIHZhciBwYXJhbXMgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKTtcbiAgdmFyIG1hc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1swXSkgPyAxIDogcGFyYW1zWzBdLCAuMSwgMTAwKTtcbiAgdmFyIHN0aWZmbmVzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzFdKSA/IDEwMCA6IHBhcmFtc1sxXSwgLjEsIDEwMCk7XG4gIHZhciBkYW1waW5nID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMl0pID8gMTAgOiBwYXJhbXNbMl0sIC4xLCAxMDApO1xuICB2YXIgdmVsb2NpdHkgPSAgbWluTWF4KGlzLnVuZChwYXJhbXNbM10pID8gMCA6IHBhcmFtc1szXSwgLjEsIDEwMCk7XG4gIHZhciB3MCA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKTtcbiAgdmFyIHpldGEgPSBkYW1waW5nIC8gKDIgKiBNYXRoLnNxcnQoc3RpZmZuZXNzICogbWFzcykpO1xuICB2YXIgd2QgPSB6ZXRhIDwgMSA/IHcwICogTWF0aC5zcXJ0KDEgLSB6ZXRhICogemV0YSkgOiAwO1xuICB2YXIgYSA9IDE7XG4gIHZhciBiID0gemV0YSA8IDEgPyAoemV0YSAqIHcwICsgLXZlbG9jaXR5KSAvIHdkIDogLXZlbG9jaXR5ICsgdzA7XG5cbiAgZnVuY3Rpb24gc29sdmVyKHQpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSBkdXJhdGlvbiA/IChkdXJhdGlvbiAqIHQpIC8gMTAwMCA6IHQ7XG4gICAgaWYgKHpldGEgPCAxKSB7XG4gICAgICBwcm9ncmVzcyA9IE1hdGguZXhwKC1wcm9ncmVzcyAqIHpldGEgKiB3MCkgKiAoYSAqIE1hdGguY29zKHdkICogcHJvZ3Jlc3MpICsgYiAqIE1hdGguc2luKHdkICogcHJvZ3Jlc3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZ3Jlc3MgPSAoYSArIGIgKiBwcm9ncmVzcykgKiBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB3MCk7XG4gICAgfVxuICAgIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHsgcmV0dXJuIHQ7IH1cbiAgICByZXR1cm4gMSAtIHByb2dyZXNzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RHVyYXRpb24oKSB7XG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLnNwcmluZ3Nbc3RyaW5nXTtcbiAgICBpZiAoY2FjaGVkKSB7IHJldHVybiBjYWNoZWQ7IH1cbiAgICB2YXIgZnJhbWUgPSAxLzY7XG4gICAgdmFyIGVsYXBzZWQgPSAwO1xuICAgIHZhciByZXN0ID0gMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICBlbGFwc2VkICs9IGZyYW1lO1xuICAgICAgaWYgKHNvbHZlcihlbGFwc2VkKSA9PT0gMSkge1xuICAgICAgICByZXN0Kys7XG4gICAgICAgIGlmIChyZXN0ID49IDE2KSB7IGJyZWFrOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGR1cmF0aW9uID0gZWxhcHNlZCAqIGZyYW1lICogMTAwMDtcbiAgICBjYWNoZS5zcHJpbmdzW3N0cmluZ10gPSBkdXJhdGlvbjtcbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cblxuICByZXR1cm4gZHVyYXRpb24gPyBzb2x2ZXIgOiBnZXREdXJhdGlvbjtcblxufVxuXG4vLyBCYXNpYyBzdGVwcyBlYXNpbmcgaW1wbGVtZW50YXRpb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHN0ZXBzKHN0ZXBzKSB7XG4gIGlmICggc3RlcHMgPT09IHZvaWQgMCApIHN0ZXBzID0gMTA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBNYXRoLmNlaWwoKG1pbk1heCh0LCAwLjAwMDAwMSwgMSkpICogc3RlcHMpICogKDEgLyBzdGVwcyk7IH07XG59XG5cbi8vIEJlemllckVhc2luZyBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcblxudmFyIGJlemllciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGtTcGxpbmVUYWJsZVNpemUgPSAxMTtcbiAgdmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcblxuICBmdW5jdGlvbiBBKGFBMSwgYUEyKSB7IHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTEgfVxuICBmdW5jdGlvbiBCKGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTEgfVxuICBmdW5jdGlvbiBDKGFBMSkgICAgICB7IHJldHVybiAzLjAgKiBhQTEgfVxuXG4gIGZ1bmN0aW9uIGNhbGNCZXppZXIoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVCB9XG4gIGZ1bmN0aW9uIGdldFNsb3BlKGFULCBhQTEsIGFBMikgeyByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKSB9XG5cbiAgZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XG4gICAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XG4gICAgZG8ge1xuICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBpZiAoY3VycmVudFggPiAwLjApIHsgYUIgPSBjdXJyZW50VDsgfSBlbHNlIHsgYUEgPSBjdXJyZW50VDsgfVxuICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IDAuMDAwMDAwMSAmJiArK2kgPCAxMCk7XG4gICAgcmV0dXJuIGN1cnJlbnRUO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHsgcmV0dXJuIGFHdWVzc1Q7IH1cbiAgICAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgIH1cbiAgICByZXR1cm4gYUd1ZXNzVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcblxuICAgIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkgeyByZXR1cm47IH1cbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKTtcblxuICAgIGlmIChtWDEgIT09IG1ZMSB8fCBtWDIgIT09IG1ZMikge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcbiAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICoga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEZvclgoYVgpIHtcblxuICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwO1xuICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgdmFyIGxhc3RTYW1wbGUgPSBrU3BsaW5lVGFibGVTaXplIC0gMTtcblxuICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XG4gICAgICB9XG5cbiAgICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgICAgdmFyIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuXG4gICAgICBpZiAoaW5pdGlhbFNsb3BlID49IDAuMDAxKSB7XG4gICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikgeyByZXR1cm4geDsgfVxuICAgICAgaWYgKHggPT09IDAgfHwgeCA9PT0gMSkgeyByZXR1cm4geDsgfVxuICAgICAgcmV0dXJuIGNhbGNCZXppZXIoZ2V0VEZvclgoeCksIG1ZMSwgbVkyKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBiZXppZXI7XG5cbn0pKCk7XG5cbnZhciBwZW5uZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8vIEJhc2VkIG9uIGpRdWVyeSBVSSdzIGltcGxlbWVuYXRpb24gb2YgZWFzaW5nIGVxdWF0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXIgKGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcpXG5cbiAgdmFyIGVhc2VzID0geyBsaW5lYXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9OyB9IH07XG5cbiAgdmFyIGZ1bmN0aW9uRWFzaW5ncyA9IHtcbiAgICBTaW5lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gMSAtIE1hdGguY29zKHQgKiBNYXRoLlBJIC8gMik7IH07IH0sXG4gICAgQ2lyYzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIHQgKiB0KTsgfTsgfSxcbiAgICBCYWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCAqIHQgKiAoMyAqIHQgLSAyKTsgfTsgfSxcbiAgICBCb3VuY2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgcG93MiwgYiA9IDQ7XG4gICAgICB3aGlsZSAodCA8ICgoIHBvdzIgPSBNYXRoLnBvdygyLCAtLWIpKSAtIDEpIC8gMTEpIHt9XG4gICAgICByZXR1cm4gMSAvIE1hdGgucG93KDQsIDMgLSBiKSAtIDcuNTYyNSAqIE1hdGgucG93KCggcG93MiAqIDMgLSAyICkgLyAyMiAtIHQsIDIpXG4gICAgfTsgfSxcbiAgICBFbGFzdGljOiBmdW5jdGlvbiAoYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgICAgIGlmICggYW1wbGl0dWRlID09PSB2b2lkIDAgKSBhbXBsaXR1ZGUgPSAxO1xuICAgICAgaWYgKCBwZXJpb2QgPT09IHZvaWQgMCApIHBlcmlvZCA9IC41O1xuXG4gICAgICB2YXIgYSA9IG1pbk1heChhbXBsaXR1ZGUsIDEsIDEwKTtcbiAgICAgIHZhciBwID0gbWluTWF4KHBlcmlvZCwgLjEsIDIpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAodCA9PT0gMCB8fCB0ID09PSAxKSA/IHQgOiBcbiAgICAgICAgICAtYSAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKiBNYXRoLnNpbigoKCh0IC0gMSkgLSAocCAvIChNYXRoLlBJICogMikgKiBNYXRoLmFzaW4oMSAvIGEpKSkgKiAoTWF0aC5QSSAqIDIpKSAvIHApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgYmFzZUVhc2luZ3MgPSBbJ1F1YWQnLCAnQ3ViaWMnLCAnUXVhcnQnLCAnUXVpbnQnLCAnRXhwbyddO1xuXG4gIGJhc2VFYXNpbmdzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGkpIHtcbiAgICBmdW5jdGlvbkVhc2luZ3NbbmFtZV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5wb3codCwgaSArIDIpOyB9OyB9O1xuICB9KTtcblxuICBPYmplY3Qua2V5cyhmdW5jdGlvbkVhc2luZ3MpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZWFzZUluID0gZnVuY3Rpb25FYXNpbmdzW25hbWVdO1xuICAgIGVhc2VzWydlYXNlSW4nICsgbmFtZV0gPSBlYXNlSW47XG4gICAgZWFzZXNbJ2Vhc2VPdXQnICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBlYXNlSW4oYSwgYikoMSAtIHQpOyB9OyB9O1xuICAgIGVhc2VzWydlYXNlSW5PdXQnICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPCAwLjUgPyBlYXNlSW4oYSwgYikodCAqIDIpIC8gMiA6IFxuICAgICAgMSAtIGVhc2VJbihhLCBiKSh0ICogLTIgKyAyKSAvIDI7IH07IH07XG4gICAgZWFzZXNbJ2Vhc2VPdXRJbicgKyBuYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IDAuNSA/ICgxIC0gZWFzZUluKGEsIGIpKDEgLSB0ICogMikpIC8gMiA6IFxuICAgICAgKGVhc2VJbihhLCBiKSh0ICogMiAtIDEpICsgMSkgLyAyOyB9OyB9O1xuICB9KTtcblxuICByZXR1cm4gZWFzZXM7XG5cbn0pKCk7XG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5ncyhlYXNpbmcsIGR1cmF0aW9uKSB7XG4gIGlmIChpcy5mbmMoZWFzaW5nKSkgeyByZXR1cm4gZWFzaW5nOyB9XG4gIHZhciBuYW1lID0gZWFzaW5nLnNwbGl0KCcoJylbMF07XG4gIHZhciBlYXNlID0gcGVubmVyW25hbWVdO1xuICB2YXIgYXJncyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhlYXNpbmcpO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlICdzcHJpbmcnIDogcmV0dXJuIHNwcmluZyhlYXNpbmcsIGR1cmF0aW9uKTtcbiAgICBjYXNlICdjdWJpY0JlemllcicgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBhcmdzKTtcbiAgICBjYXNlICdzdGVwcycgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoc3RlcHMsIGFyZ3MpO1xuICAgIGRlZmF1bHQgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoZWFzZSwgYXJncyk7XG4gIH1cbn1cblxuLy8gU3RyaW5nc1xuXG5mdW5jdGlvbiBzZWxlY3RTdHJpbmcoc3RyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHIpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIEFycmF5c1xuXG5mdW5jdGlvbiBmaWx0ZXJBcnJheShhcnIsIGNhbGxiYWNrKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGkgaW4gYXJyKSB7XG4gICAgICB2YXIgdmFsID0gYXJyW2ldO1xuICAgICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsLCBpLCBhcnIpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29uY2F0KGlzLmFycihiKSA/IGZsYXR0ZW5BcnJheShiKSA6IGIpOyB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkobykge1xuICBpZiAoaXMuYXJyKG8pKSB7IHJldHVybiBvOyB9XG4gIGlmIChpcy5zdHIobykpIHsgbyA9IHNlbGVjdFN0cmluZyhvKSB8fCBvOyB9XG4gIGlmIChvIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7IHJldHVybiBbXS5zbGljZS5jYWxsKG8pOyB9XG4gIHJldHVybiBbb107XG59XG5cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMoYXJyLCB2YWwpIHtcbiAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhID09PSB2YWw7IH0pO1xufVxuXG4vLyBPYmplY3RzXG5cbmZ1bmN0aW9uIGNsb25lT2JqZWN0KG8pIHtcbiAgdmFyIGNsb25lID0ge307XG4gIGZvciAodmFyIHAgaW4gbykgeyBjbG9uZVtwXSA9IG9bcF07IH1cbiAgcmV0dXJuIGNsb25lO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0UHJvcHMobzEsIG8yKSB7XG4gIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xuICBmb3IgKHZhciBwIGluIG8xKSB7IG9bcF0gPSBvMi5oYXNPd25Qcm9wZXJ0eShwKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzIpIHsgb1twXSA9IGlzLnVuZChvMVtwXSkgPyBvMltwXSA6IG8xW3BdOyB9XG4gIHJldHVybiBvO1xufVxuXG4vLyBDb2xvcnNcblxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XG4gIHZhciByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xuICByZXR1cm4gcmdiID8gKFwicmdiYShcIiArIChyZ2JbMV0pICsgXCIsMSlcIikgOiByZ2JWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XG4gIHZhciByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICB2YXIgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7IHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7IH0gKTtcbiAgdmFyIHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICB2YXIgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICB2YXIgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xuICB2YXIgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xuICByZXR1cm4gKFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIiwxKVwiKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XG4gIHZhciBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xuICB2YXIgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xuICB2YXIgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xuICB2YXIgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xuICB2YXIgYSA9IGhzbFs0XSB8fCAxO1xuICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHsgdCArPSAxOyB9XG4gICAgaWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxuICAgIGlmICh0IDwgMS82KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0OyB9XG4gICAgaWYgKHQgPCAxLzIpIHsgcmV0dXJuIHE7IH1cbiAgICBpZiAodCA8IDIvMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2OyB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgdmFyIHIsIGcsIGI7XG4gIGlmIChzID09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMS8zKTtcbiAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTtcbiAgfVxuICByZXR1cm4gKFwicmdiYShcIiArIChyICogMjU1KSArIFwiLFwiICsgKGcgKiAyNTUpICsgXCIsXCIgKyAoYiAqIDI1NSkgKyBcIixcIiArIGEgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9SZ2IodmFsKSB7XG4gIGlmIChpcy5yZ2IodmFsKSkgeyByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7IH1cbiAgaWYgKGlzLmhleCh2YWwpKSB7IHJldHVybiBoZXhUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaHNsKHZhbCkpIHsgcmV0dXJuIGhzbFRvUmdiYSh2YWwpOyB9XG59XG5cbi8vIFVuaXRzXG5cbmZ1bmN0aW9uIGdldFVuaXQodmFsKSB7XG4gIHZhciBzcGxpdCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPyglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKHZhbCk7XG4gIGlmIChzcGxpdCkgeyByZXR1cm4gc3BsaXRbMV07IH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykgeyByZXR1cm4gJ3B4JzsgfVxuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NrZXcnKSkgeyByZXR1cm4gJ2RlZyc7IH1cbn1cblxuLy8gVmFsdWVzXG5cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XG4gIGlmICghaXMuZm5jKHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICByZXR1cm4gdmFsKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltYXRhYmxlLmlkLCBhbmltYXRhYmxlLnRvdGFsKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICBpZiAoYXJyYXlDb250YWlucyhbdW5pdCwgJ2RlZycsICdyYWQnLCAndHVybiddLCB2YWx1ZVVuaXQpKSB7IHJldHVybiB2YWx1ZTsgfVxuICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XG4gIGlmICghaXMudW5kKGNhY2hlZCkpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICB2YXIgYmFzZWxpbmUgPSAxMDA7XG4gIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xuICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xuICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xuICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XG4gIHZhciBmYWN0b3IgPSBiYXNlbGluZSAvIHRlbXBFbC5vZmZzZXRXaWR0aDtcbiAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcbiAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF0gPSBjb252ZXJ0ZWRVbml0O1xuICByZXR1cm4gY29udmVydGVkVW5pdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcbiAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcbiAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKGVsLCBwcm9wKSB7XG4gIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmICghaXMubmlsKGdldEF0dHJpYnV0ZShlbCwgcHJvcCkpIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHsgcmV0dXJuICdhdHRyaWJ1dGUnOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkgeyByZXR1cm4gJ3RyYW5zZm9ybSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgKHByb3AgIT09ICd0cmFuc2Zvcm0nICYmIGdldENTU1ZhbHVlKGVsLCBwcm9wKSkpIHsgcmV0dXJuICdjc3MnOyB9XG4gIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7IHJldHVybiAnb2JqZWN0JzsgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xuICBpZiAoIWlzLmRvbShlbCkpIHsgcmV0dXJuOyB9XG4gIHZhciBzdHIgPSBlbC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XG4gIHZhciByZWcgID0gLyhcXHcrKVxcKChbXildKilcXCkvZztcbiAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG4gIHZhciBtOyB3aGlsZSAobSA9IHJlZy5leGVjKHN0cikpIHsgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7IH1cbiAgcmV0dXJuIHRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xuICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XG4gIHZhciB2YWx1ZSA9IGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRWYWw7XG4gIGlmIChhbmltYXRhYmxlKSB7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcbiAgfVxuICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCwgYW5pbWF0YWJsZSkge1xuICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcbiAgICBjYXNlICd0cmFuc2Zvcm0nOiByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XG4gICAgY2FzZSAnY3NzJzogcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xuICAgIGNhc2UgJ2F0dHJpYnV0ZSc6IHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgZGVmYXVsdDogcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XG4gIHZhciBvcGVyYXRvciA9IC9eKFxcKj18XFwrPXwtPSkvLmV4ZWModG8pO1xuICBpZiAoIW9wZXJhdG9yKSB7IHJldHVybiB0bzsgfVxuICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChmcm9tKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XG4gIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcbiAgICBjYXNlICcrJzogcmV0dXJuIHggKyB5ICsgdTtcbiAgICBjYXNlICctJzogcmV0dXJuIHggLSB5ICsgdTtcbiAgICBjYXNlICcqJzogcmV0dXJuIHggKiB5ICsgdTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbCwgdW5pdCkge1xuICBpZiAoaXMuY29sKHZhbCkpIHsgcmV0dXJuIGNvbG9yVG9SZ2IodmFsKTsgfVxuICBpZiAoL1xccy9nLnRlc3QodmFsKSkgeyByZXR1cm4gdmFsOyB9XG4gIHZhciBvcmlnaW5hbFVuaXQgPSBnZXRVbml0KHZhbCk7XG4gIHZhciB1bml0TGVzcyA9IG9yaWdpbmFsVW5pdCA/IHZhbC5zdWJzdHIoMCwgdmFsLmxlbmd0aCAtIG9yaWdpbmFsVW5pdC5sZW5ndGgpIDogdmFsO1xuICBpZiAodW5pdCkgeyByZXR1cm4gdW5pdExlc3MgKyB1bml0OyB9XG4gIHJldHVybiB1bml0TGVzcztcbn1cblxuLy8gZ2V0VG90YWxMZW5ndGgoKSBlcXVpdmFsZW50IGZvciBjaXJjbGUsIHJlY3QsIHBvbHlsaW5lLCBwb2x5Z29uIGFuZCBsaW5lIHNoYXBlc1xuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xufVxuXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XG4gIHJldHVybiAoZ2V0QXR0cmlidXRlKGVsLCAnd2lkdGgnKSAqIDIpICsgKGdldEF0dHJpYnV0ZShlbCwgJ2hlaWdodCcpICogMik7XG59XG5cbmZ1bmN0aW9uIGdldExpbmVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIGdldERpc3RhbmNlKFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MScpfSwgXG4gICAge3g6IGdldEF0dHJpYnV0ZShlbCwgJ3gyJyksIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kyJyl9XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSB7XG4gIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XG4gIHZhciB0b3RhbExlbmd0aCA9IDA7XG4gIHZhciBwcmV2aW91c1BvcztcbiAgZm9yICh2YXIgaSA9IDAgOyBpIDwgcG9pbnRzLm51bWJlck9mSXRlbXM7IGkrKykge1xuICAgIHZhciBjdXJyZW50UG9zID0gcG9pbnRzLmdldEl0ZW0oaSk7XG4gICAgaWYgKGkgPiAwKSB7IHRvdGFsTGVuZ3RoICs9IGdldERpc3RhbmNlKHByZXZpb3VzUG9zLCBjdXJyZW50UG9zKTsgfVxuICAgIHByZXZpb3VzUG9zID0gY3VycmVudFBvcztcbiAgfVxuICByZXR1cm4gdG90YWxMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlnb25MZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSArIGdldERpc3RhbmNlKHBvaW50cy5nZXRJdGVtKHBvaW50cy5udW1iZXJPZkl0ZW1zIC0gMSksIHBvaW50cy5nZXRJdGVtKDApKTtcbn1cblxuLy8gUGF0aCBhbmltYXRpb25cblxuZnVuY3Rpb24gZ2V0VG90YWxMZW5ndGgoZWwpIHtcbiAgaWYgKGVsLmdldFRvdGFsTGVuZ3RoKSB7IHJldHVybiBlbC5nZXRUb3RhbExlbmd0aCgpOyB9XG4gIHN3aXRjaChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdjaXJjbGUnOiByZXR1cm4gZ2V0Q2lyY2xlTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdyZWN0JzogcmV0dXJuIGdldFJlY3RMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ2xpbmUnOiByZXR1cm4gZ2V0TGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWxpbmUnOiByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3BvbHlnb24nOiByZXR1cm4gZ2V0UG9seWdvbkxlbmd0aChlbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGFzaG9mZnNldChlbCkge1xuICB2YXIgcGF0aExlbmd0aCA9IGdldFRvdGFsTGVuZ3RoKGVsKTtcbiAgZWwuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgcGF0aExlbmd0aCk7XG4gIHJldHVybiBwYXRoTGVuZ3RoO1xufVxuXG4vLyBNb3Rpb24gcGF0aFxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmdFbChlbCkge1xuICB2YXIgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xuICB3aGlsZSAoaXMuc3ZnKHBhcmVudEVsKSkge1xuICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7IGJyZWFrOyB9XG4gICAgcGFyZW50RWwgPSBwYXJlbnRFbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBwYXJlbnRFbDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnKHBhdGhFbCwgc3ZnRGF0YSkge1xuICB2YXIgc3ZnID0gc3ZnRGF0YSB8fCB7fTtcbiAgdmFyIHBhcmVudFN2Z0VsID0gc3ZnLmVsIHx8IGdldFBhcmVudFN2Z0VsKHBhdGhFbCk7XG4gIHZhciByZWN0ID0gcGFyZW50U3ZnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB2aWV3Qm94QXR0ciA9IGdldEF0dHJpYnV0ZShwYXJlbnRTdmdFbCwgJ3ZpZXdCb3gnKTtcbiAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcbiAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICB2YXIgdmlld0JveCA9IHN2Zy52aWV3Qm94IHx8ICh2aWV3Qm94QXR0ciA/IHZpZXdCb3hBdHRyLnNwbGl0KCcgJykgOiBbMCwgMCwgd2lkdGgsIGhlaWdodF0pO1xuICByZXR1cm4ge1xuICAgIGVsOiBwYXJlbnRTdmdFbCxcbiAgICB2aWV3Qm94OiB2aWV3Qm94LFxuICAgIHg6IHZpZXdCb3hbMF0gLyAxLFxuICAgIHk6IHZpZXdCb3hbMV0gLyAxLFxuICAgIHc6IHdpZHRoLFxuICAgIGg6IGhlaWdodCxcbiAgICB2Vzogdmlld0JveFsyXSxcbiAgICB2SDogdmlld0JveFszXVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGgocGF0aCwgcGVyY2VudCkge1xuICB2YXIgcGF0aEVsID0gaXMuc3RyKHBhdGgpID8gc2VsZWN0U3RyaW5nKHBhdGgpWzBdIDogcGF0aDtcbiAgdmFyIHAgPSBwZXJjZW50IHx8IDEwMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgIGVsOiBwYXRoRWwsXG4gICAgICBzdmc6IGdldFBhcmVudFN2ZyhwYXRoRWwpLFxuICAgICAgdG90YWxMZW5ndGg6IGdldFRvdGFsTGVuZ3RoKHBhdGhFbCkgKiAocCAvIDEwMClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aFByb2dyZXNzKHBhdGgsIHByb2dyZXNzLCBpc1BhdGhUYXJnZXRJbnNpZGVTVkcpIHtcbiAgZnVuY3Rpb24gcG9pbnQob2Zmc2V0KSB7XG4gICAgaWYgKCBvZmZzZXQgPT09IHZvaWQgMCApIG9mZnNldCA9IDA7XG5cbiAgICB2YXIgbCA9IHByb2dyZXNzICsgb2Zmc2V0ID49IDEgPyBwcm9ncmVzcyArIG9mZnNldCA6IDA7XG4gICAgcmV0dXJuIHBhdGguZWwuZ2V0UG9pbnRBdExlbmd0aChsKTtcbiAgfVxuICB2YXIgc3ZnID0gZ2V0UGFyZW50U3ZnKHBhdGguZWwsIHBhdGguc3ZnKTtcbiAgdmFyIHAgPSBwb2ludCgpO1xuICB2YXIgcDAgPSBwb2ludCgtMSk7XG4gIHZhciBwMSA9IHBvaW50KCsxKTtcbiAgdmFyIHNjYWxlWCA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcudyAvIHN2Zy52VztcbiAgdmFyIHNjYWxlWSA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcuaCAvIHN2Zy52SDtcbiAgc3dpdGNoIChwYXRoLnByb3BlcnR5KSB7XG4gICAgY2FzZSAneCc6IHJldHVybiAocC54IC0gc3ZnLngpICogc2NhbGVYO1xuICAgIGNhc2UgJ3knOiByZXR1cm4gKHAueSAtIHN2Zy55KSAqIHNjYWxlWTtcbiAgICBjYXNlICdhbmdsZSc6IHJldHVybiBNYXRoLmF0YW4yKHAxLnkgLSBwMC55LCBwMS54IC0gcDAueCkgKiAxODAgLyBNYXRoLlBJO1xuICB9XG59XG5cbi8vIERlY29tcG9zZSB2YWx1ZVxuXG5mdW5jdGlvbiBkZWNvbXBvc2VWYWx1ZSh2YWwsIHVuaXQpIHtcbiAgLy8gY29uc3Qgcmd4ID0gLy0/XFxkKlxcLj9cXGQrL2c7IC8vIGhhbmRsZXMgYmFzaWMgbnVtYmVyc1xuICAvLyBjb25zdCByZ3ggPSAvWystXT9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXG4gIHZhciByZ3ggPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cbiAgdmFyIHZhbHVlID0gdmFsaWRhdGVWYWx1ZSgoaXMucHRoKHZhbCkgPyB2YWwudG90YWxMZW5ndGggOiB2YWwpLCB1bml0KSArICcnO1xuICByZXR1cm4ge1xuICAgIG9yaWdpbmFsOiB2YWx1ZSxcbiAgICBudW1iZXJzOiB2YWx1ZS5tYXRjaChyZ3gpID8gdmFsdWUubWF0Y2gocmd4KS5tYXAoTnVtYmVyKSA6IFswXSxcbiAgICBzdHJpbmdzOiAoaXMuc3RyKHZhbCkgfHwgdW5pdCkgPyB2YWx1ZS5zcGxpdChyZ3gpIDogW11cbiAgfVxufVxuXG4vLyBBbmltYXRhYmxlc1xuXG5mdW5jdGlvbiBwYXJzZVRhcmdldHModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0c0FycmF5ID0gdGFyZ2V0cyA/IChmbGF0dGVuQXJyYXkoaXMuYXJyKHRhcmdldHMpID8gdGFyZ2V0cy5tYXAodG9BcnJheSkgOiB0b0FycmF5KHRhcmdldHMpKSkgOiBbXTtcbiAgcmV0dXJuIGZpbHRlckFycmF5KHRhcmdldHNBcnJheSwgZnVuY3Rpb24gKGl0ZW0sIHBvcywgc2VsZikgeyByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBwb3M7IH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIHJldHVybiBwYXJzZWQubWFwKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgcmV0dXJuIHt0YXJnZXQ6IHQsIGlkOiBpLCB0b3RhbDogcGFyc2VkLmxlbmd0aCwgdHJhbnNmb3JtczogeyBsaXN0OiBnZXRFbGVtZW50VHJhbnNmb3Jtcyh0KSB9IH07XG4gIH0pO1xufVxuXG4vLyBQcm9wZXJ0aWVzXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHByb3AsIHR3ZWVuU2V0dGluZ3MpIHtcbiAgdmFyIHNldHRpbmdzID0gY2xvbmVPYmplY3QodHdlZW5TZXR0aW5ncyk7XG4gIC8vIE92ZXJyaWRlIGR1cmF0aW9uIGlmIGVhc2luZyBpcyBhIHNwcmluZ1xuICBpZiAoL15zcHJpbmcvLnRlc3Qoc2V0dGluZ3MuZWFzaW5nKSkgeyBzZXR0aW5ncy5kdXJhdGlvbiA9IHNwcmluZyhzZXR0aW5ncy5lYXNpbmcpOyB9XG4gIGlmIChpcy5hcnIocHJvcCkpIHtcbiAgICB2YXIgbCA9IHByb3AubGVuZ3RoO1xuICAgIHZhciBpc0Zyb21UbyA9IChsID09PSAyICYmICFpcy5vYmoocHJvcFswXSkpO1xuICAgIGlmICghaXNGcm9tVG8pIHtcbiAgICAgIC8vIER1cmF0aW9uIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiB0d2VlbnNcbiAgICAgIGlmICghaXMuZm5jKHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24pKSB7IHNldHRpbmdzLmR1cmF0aW9uID0gdHdlZW5TZXR0aW5ncy5kdXJhdGlvbiAvIGw7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJhbnNmb3JtIFtmcm9tLCB0b10gdmFsdWVzIHNob3J0aGFuZCB0byBhIHZhbGlkIHR3ZWVuIHZhbHVlXG4gICAgICBwcm9wID0ge3ZhbHVlOiBwcm9wfTtcbiAgICB9XG4gIH1cbiAgdmFyIHByb3BBcnJheSA9IGlzLmFycihwcm9wKSA/IHByb3AgOiBbcHJvcF07XG4gIHJldHVybiBwcm9wQXJyYXkubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgdmFyIG9iaiA9IChpcy5vYmoodikgJiYgIWlzLnB0aCh2KSkgPyB2IDoge3ZhbHVlOiB2fTtcbiAgICAvLyBEZWZhdWx0IGRlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGZpcnN0IHR3ZWVuXG4gICAgaWYgKGlzLnVuZChvYmouZGVsYXkpKSB7IG9iai5kZWxheSA9ICFpID8gdHdlZW5TZXR0aW5ncy5kZWxheSA6IDA7IH1cbiAgICAvLyBEZWZhdWx0IGVuZERlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGxhc3QgdHdlZW5cbiAgICBpZiAoaXMudW5kKG9iai5lbmREZWxheSkpIHsgb2JqLmVuZERlbGF5ID0gaSA9PT0gcHJvcEFycmF5Lmxlbmd0aCAtIDEgPyB0d2VlblNldHRpbmdzLmVuZERlbGF5IDogMDsgfVxuICAgIHJldHVybiBvYmo7XG4gIH0pLm1hcChmdW5jdGlvbiAoaykgeyByZXR1cm4gbWVyZ2VPYmplY3RzKGssIHNldHRpbmdzKTsgfSk7XG59XG5cblxuZnVuY3Rpb24gZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpIHtcbiAgdmFyIHByb3BlcnR5TmFtZXMgPSBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoa2V5ZnJhbWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBPYmplY3Qua2V5cyhrZXkpOyB9KSksIGZ1bmN0aW9uIChwKSB7IHJldHVybiBpcy5rZXkocCk7IH0pXG4gIC5yZWR1Y2UoZnVuY3Rpb24gKGEsYikgeyBpZiAoYS5pbmRleE9mKGIpIDwgMCkgeyBhLnB1c2goYik7IH0gcmV0dXJuIGE7IH0sIFtdKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB7fTtcbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGkgKSB7XG4gICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICBwcm9wZXJ0aWVzW3Byb3BOYW1lXSA9IGtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG5ld0tleSA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBrZXkpIHtcbiAgICAgICAgaWYgKGlzLmtleShwKSkge1xuICAgICAgICAgIGlmIChwID09IHByb3BOYW1lKSB7IG5ld0tleS52YWx1ZSA9IGtleVtwXTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0tleVtwXSA9IGtleVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0tleTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIGxvb3AoIGkgKTtcbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gW107XG4gIHZhciBrZXlmcmFtZXMgPSBwYXJhbXMua2V5ZnJhbWVzO1xuICBpZiAoa2V5ZnJhbWVzKSB7IHBhcmFtcyA9IG1lcmdlT2JqZWN0cyhmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcyksIHBhcmFtcyk7IH1cbiAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIHtcbiAgICBpZiAoaXMua2V5KHApKSB7XG4gICAgICBwcm9wZXJ0aWVzLnB1c2goe1xuICAgICAgICBuYW1lOiBwLFxuICAgICAgICB0d2VlbnM6IG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHBhcmFtc1twXSwgdHdlZW5TZXR0aW5ncylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuLy8gVHdlZW5zXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHR3ZWVuLCBhbmltYXRhYmxlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gdHdlZW4pIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHR3ZWVuW3BdLCBhbmltYXRhYmxlKTtcbiAgICBpZiAoaXMuYXJyKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGdldEZ1bmN0aW9uVmFsdWUodiwgYW5pbWF0YWJsZSk7IH0pO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkgeyB2YWx1ZSA9IHZhbHVlWzBdOyB9XG4gICAgfVxuICAgIHRbcF0gPSB2YWx1ZTtcbiAgfVxuICB0LmR1cmF0aW9uID0gcGFyc2VGbG9hdCh0LmR1cmF0aW9uKTtcbiAgdC5kZWxheSA9IHBhcnNlRmxvYXQodC5kZWxheSk7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSkge1xuICB2YXIgcHJldmlvdXNUd2VlbjtcbiAgcmV0dXJuIHByb3AudHdlZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHZhciB0d2VlbiA9IG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHQsIGFuaW1hdGFibGUpO1xuICAgIHZhciB0d2VlblZhbHVlID0gdHdlZW4udmFsdWU7XG4gICAgdmFyIHRvID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVsxXSA6IHR3ZWVuVmFsdWU7XG4gICAgdmFyIHRvVW5pdCA9IGdldFVuaXQodG8pO1xuICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lLCB0b1VuaXQsIGFuaW1hdGFibGUpO1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4udG8ub3JpZ2luYWwgOiBvcmlnaW5hbFZhbHVlO1xuICAgIHZhciBmcm9tID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVswXSA6IHByZXZpb3VzVmFsdWU7XG4gICAgdmFyIGZyb21Vbml0ID0gZ2V0VW5pdChmcm9tKSB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xuICAgIHZhciB1bml0ID0gdG9Vbml0IHx8IGZyb21Vbml0O1xuICAgIGlmIChpcy51bmQodG8pKSB7IHRvID0gcHJldmlvdXNWYWx1ZTsgfVxuICAgIHR3ZWVuLmZyb20gPSBkZWNvbXBvc2VWYWx1ZShmcm9tLCB1bml0KTtcbiAgICB0d2Vlbi50byA9IGRlY29tcG9zZVZhbHVlKGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pLCB1bml0KTtcbiAgICB0d2Vlbi5zdGFydCA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLmVuZCA6IDA7XG4gICAgdHdlZW4uZW5kID0gdHdlZW4uc3RhcnQgKyB0d2Vlbi5kZWxheSArIHR3ZWVuLmR1cmF0aW9uICsgdHdlZW4uZW5kRGVsYXk7XG4gICAgdHdlZW4uZWFzaW5nID0gcGFyc2VFYXNpbmdzKHR3ZWVuLmVhc2luZywgdHdlZW4uZHVyYXRpb24pO1xuICAgIHR3ZWVuLmlzUGF0aCA9IGlzLnB0aCh0d2VlblZhbHVlKTtcbiAgICB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcgPSB0d2Vlbi5pc1BhdGggJiYgaXMuc3ZnKGFuaW1hdGFibGUudGFyZ2V0KTtcbiAgICB0d2Vlbi5pc0NvbG9yID0gaXMuY29sKHR3ZWVuLmZyb20ub3JpZ2luYWwpO1xuICAgIGlmICh0d2Vlbi5pc0NvbG9yKSB7IHR3ZWVuLnJvdW5kID0gMTsgfVxuICAgIHByZXZpb3VzVHdlZW4gPSB0d2VlbjtcbiAgICByZXR1cm4gdHdlZW47XG4gIH0pO1xufVxuXG4vLyBUd2VlbiBwcm9ncmVzc1xuXG52YXIgc2V0UHJvZ3Jlc3NWYWx1ZSA9IHtcbiAgY3NzOiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdC5zdHlsZVtwXSA9IHY7IH0sXG4gIGF0dHJpYnV0ZTogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHQuc2V0QXR0cmlidXRlKHAsIHYpOyB9LFxuICBvYmplY3Q6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0W3BdID0gdjsgfSxcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiAodCwgcCwgdiwgdHJhbnNmb3JtcywgbWFudWFsKSB7XG4gICAgdHJhbnNmb3Jtcy5saXN0LnNldChwLCB2KTtcbiAgICBpZiAocCA9PT0gdHJhbnNmb3Jtcy5sYXN0IHx8IG1hbnVhbCkge1xuICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgdHJhbnNmb3Jtcy5saXN0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7IHN0ciArPSBwcm9wICsgXCIoXCIgKyB2YWx1ZSArIFwiKSBcIjsgfSk7XG4gICAgICB0LnN0eWxlLnRyYW5zZm9ybSA9IHN0cjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIFNldCBWYWx1ZSBoZWxwZXJcblxuZnVuY3Rpb24gc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cyk7XG4gIGFuaW1hdGFibGVzLmZvckVhY2goZnVuY3Rpb24gKGFuaW1hdGFibGUpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHByb3BlcnRpZXNbcHJvcGVydHldLCBhbmltYXRhYmxlKTtcbiAgICAgIHZhciB0YXJnZXQgPSBhbmltYXRhYmxlLnRhcmdldDtcbiAgICAgIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcbiAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZVVuaXQsIGFuaW1hdGFibGUpO1xuICAgICAgdmFyIHVuaXQgPSB2YWx1ZVVuaXQgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcbiAgICAgIHZhciB0byA9IGdldFJlbGF0aXZlVmFsdWUodmFsaWRhdGVWYWx1ZSh2YWx1ZSwgdW5pdCksIG9yaWdpbmFsVmFsdWUpO1xuICAgICAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbVR5cGVdKHRhcmdldCwgcHJvcGVydHksIHRvLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMsIHRydWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEFuaW1hdGlvbnNcblxuZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApIHtcbiAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lKTtcbiAgaWYgKGFuaW1UeXBlKSB7XG4gICAgdmFyIHR3ZWVucyA9IG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKTtcbiAgICB2YXIgbGFzdFR3ZWVuID0gdHdlZW5zW3R3ZWVucy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogYW5pbVR5cGUsXG4gICAgICBwcm9wZXJ0eTogcHJvcC5uYW1lLFxuICAgICAgYW5pbWF0YWJsZTogYW5pbWF0YWJsZSxcbiAgICAgIHR3ZWVuczogdHdlZW5zLFxuICAgICAgZHVyYXRpb246IGxhc3RUd2Vlbi5lbmQsXG4gICAgICBkZWxheTogdHdlZW5zWzBdLmRlbGF5LFxuICAgICAgZW5kRGVsYXk6IGxhc3RUd2Vlbi5lbmREZWxheVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoYW5pbWF0YWJsZXMubWFwKGZ1bmN0aW9uIChhbmltYXRhYmxlKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApO1xuICAgIH0pO1xuICB9KSksIGZ1bmN0aW9uIChhKSB7IHJldHVybiAhaXMudW5kKGEpOyB9KTtcbn1cblxuLy8gQ3JlYXRlIEluc3RhbmNlXG5cbmZ1bmN0aW9uIGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKSB7XG4gIHZhciBhbmltTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XG4gIHZhciBnZXRUbE9mZnNldCA9IGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBhbmltLnRpbWVsaW5lT2Zmc2V0ID8gYW5pbS50aW1lbGluZU9mZnNldCA6IDA7IH07XG4gIHZhciB0aW1pbmdzID0ge307XG4gIHRpbWluZ3MuZHVyYXRpb24gPSBhbmltTGVuZ3RoID8gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbjsgfSkpIDogdHdlZW5TZXR0aW5ncy5kdXJhdGlvbjtcbiAgdGltaW5ncy5kZWxheSA9IGFuaW1MZW5ndGggPyBNYXRoLm1pbi5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmRlbGF5OyB9KSkgOiB0d2VlblNldHRpbmdzLmRlbGF5O1xuICB0aW1pbmdzLmVuZERlbGF5ID0gYW5pbUxlbmd0aCA/IHRpbWluZ3MuZHVyYXRpb24gLSBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uIC0gYW5pbS5lbmREZWxheTsgfSkpIDogdHdlZW5TZXR0aW5ncy5lbmREZWxheTtcbiAgcmV0dXJuIHRpbWluZ3M7XG59XG5cbnZhciBpbnN0YW5jZUlEID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKSB7XG4gIHZhciBpbnN0YW5jZVNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgdHdlZW5TZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHBhcmFtcy50YXJnZXRzKTtcbiAgdmFyIGFuaW1hdGlvbnMgPSBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKTtcbiAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncyk7XG4gIHZhciBpZCA9IGluc3RhbmNlSUQ7XG4gIGluc3RhbmNlSUQrKztcbiAgcmV0dXJuIG1lcmdlT2JqZWN0cyhpbnN0YW5jZVNldHRpbmdzLCB7XG4gICAgaWQ6IGlkLFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBhbmltYXRhYmxlczogYW5pbWF0YWJsZXMsXG4gICAgYW5pbWF0aW9uczogYW5pbWF0aW9ucyxcbiAgICBkdXJhdGlvbjogdGltaW5ncy5kdXJhdGlvbixcbiAgICBkZWxheTogdGltaW5ncy5kZWxheSxcbiAgICBlbmREZWxheTogdGltaW5ncy5lbmREZWxheVxuICB9KTtcbn1cblxuLy8gQ29yZVxuXG52YXIgYWN0aXZlSW5zdGFuY2VzID0gW107XG5cbnZhciBlbmdpbmUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmFmO1xuXG4gIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgaWYgKCFyYWYgJiYgKCFpc0RvY3VtZW50SGlkZGVuKCkgfHwgIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pICYmIGFjdGl2ZUluc3RhbmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHN0ZXAodCkge1xuICAgIC8vIG1lbW8gb24gYWxnb3JpdGhtIGlzc3VlOlxuICAgIC8vIGRhbmdlcm91cyBpdGVyYXRpb24gb3ZlciBtdXRhYmxlIGBhY3RpdmVJbnN0YW5jZXNgXG4gICAgLy8gKHRoYXQgY29sbGVjdGlvbiBtYXkgYmUgdXBkYXRlZCBmcm9tIHdpdGhpbiBjYWxsYmFja3Mgb2YgYHRpY2tgLWVkIGFuaW1hdGlvbiBpbnN0YW5jZXMpXG4gICAgdmFyIGFjdGl2ZUluc3RhbmNlc0xlbmd0aCA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XG4gICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgICBpZiAoIWFjdGl2ZUluc3RhbmNlLnBhdXNlZCkge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZS50aWNrKHQpO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXNMZW5ndGgtLTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmFmID0gaSA+IDAgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmICghYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikgeyByZXR1cm47IH1cblxuICAgIGlmIChpc0RvY3VtZW50SGlkZGVuKCkpIHtcbiAgICAgIC8vIHN1c3BlbmQgdGlja3NcbiAgICAgIHJhZiA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgfSBlbHNlIHsgLy8gaXMgYmFjayB0byBhY3RpdmUgdGFiXG4gICAgICAvLyBmaXJzdCBhZGp1c3QgYW5pbWF0aW9ucyB0byBjb25zaWRlciB0aGUgdGltZSB0aGF0IHRpY2tzIHdlcmUgc3VzcGVuZGVkXG4gICAgICBhY3RpdmVJbnN0YW5jZXMuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24gKGluc3RhbmNlKSB7IHJldHVybiBpbnN0YW5jZSAuX29uRG9jdW1lbnRWaXNpYmlsaXR5KCk7IH1cbiAgICAgICk7XG4gICAgICBlbmdpbmUoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG4gIH1cblxuICByZXR1cm4gcGxheTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnRIaWRkZW4oKSB7XG4gIHJldHVybiAhIWRvY3VtZW50ICYmIGRvY3VtZW50LmhpZGRlbjtcbn1cblxuLy8gUHVibGljIEluc3RhbmNlXG5cbmZ1bmN0aW9uIGFuaW1lKHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cblxuICB2YXIgc3RhcnRUaW1lID0gMCwgbGFzdFRpbWUgPSAwLCBub3cgPSAwO1xuICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoID0gMDtcbiAgdmFyIHJlc29sdmUgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1ha2VQcm9taXNlKGluc3RhbmNlKSB7XG4gICAgdmFyIHByb21pc2UgPSB3aW5kb3cuUHJvbWlzZSAmJiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoX3Jlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUgPSBfcmVzb2x2ZTsgfSk7XG4gICAgaW5zdGFuY2UuZmluaXNoZWQgPSBwcm9taXNlO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgdmFyIGluc3RhbmNlID0gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKTtcbiAgdmFyIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcbiAgICBpZiAoZGlyZWN0aW9uICE9PSAnYWx0ZXJuYXRlJykge1xuICAgICAgaW5zdGFuY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uICE9PSAnbm9ybWFsJyA/ICdub3JtYWwnIDogJ3JldmVyc2UnO1xuICAgIH1cbiAgICBpbnN0YW5jZS5yZXZlcnNlZCA9ICFpbnN0YW5jZS5yZXZlcnNlZDtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQucmV2ZXJzZWQgPSBpbnN0YW5jZS5yZXZlcnNlZDsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGp1c3RUaW1lKHRpbWUpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUaW1lKCkge1xuICAgIHN0YXJ0VGltZSA9IDA7XG4gICAgbGFzdFRpbWUgPSBhZGp1c3RUaW1lKGluc3RhbmNlLmN1cnJlbnRUaW1lKSAqICgxIC8gYW5pbWUuc3BlZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Vla0NoaWxkKHRpbWUsIGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkKSB7IGNoaWxkLnNlZWsodGltZSAtIGNoaWxkLnRpbWVsaW5lT2Zmc2V0KTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3luY0luc3RhbmNlQ2hpbGRyZW4odGltZSkge1xuICAgIGlmICghaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHsgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2ldKTsgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpJDEgPSBjaGlsZHJlbkxlbmd0aDsgaSQxLS07KSB7IHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpJDFdKTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgICB2YXIgYW5pbWF0aW9uc0xlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgYW5pbWF0aW9uc0xlbmd0aCkge1xuICAgICAgdmFyIGFuaW0gPSBhbmltYXRpb25zW2ldO1xuICAgICAgdmFyIGFuaW1hdGFibGUgPSBhbmltLmFuaW1hdGFibGU7XG4gICAgICB2YXIgdHdlZW5zID0gYW5pbS50d2VlbnM7XG4gICAgICB2YXIgdHdlZW5MZW5ndGggPSB0d2VlbnMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciB0d2VlbiA9IHR3ZWVuc1t0d2Vlbkxlbmd0aF07XG4gICAgICAvLyBPbmx5IGNoZWNrIGZvciBrZXlmcmFtZXMgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB0d2VlblxuICAgICAgaWYgKHR3ZWVuTGVuZ3RoKSB7IHR3ZWVuID0gZmlsdGVyQXJyYXkodHdlZW5zLCBmdW5jdGlvbiAodCkgeyByZXR1cm4gKGluc1RpbWUgPCB0LmVuZCk7IH0pWzBdIHx8IHR3ZWVuOyB9XG4gICAgICB2YXIgZWxhcHNlZCA9IG1pbk1heChpbnNUaW1lIC0gdHdlZW4uc3RhcnQgLSB0d2Vlbi5kZWxheSwgMCwgdHdlZW4uZHVyYXRpb24pIC8gdHdlZW4uZHVyYXRpb247XG4gICAgICB2YXIgZWFzZWQgPSBpc05hTihlbGFwc2VkKSA/IDEgOiB0d2Vlbi5lYXNpbmcoZWxhcHNlZCk7XG4gICAgICB2YXIgc3RyaW5ncyA9IHR3ZWVuLnRvLnN0cmluZ3M7XG4gICAgICB2YXIgcm91bmQgPSB0d2Vlbi5yb3VuZDtcbiAgICAgIHZhciBudW1iZXJzID0gW107XG4gICAgICB2YXIgdG9OdW1iZXJzTGVuZ3RoID0gdHdlZW4udG8ubnVtYmVycy5sZW5ndGg7XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSAodm9pZCAwKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdG9OdW1iZXJzTGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHZvaWQgMCk7XG4gICAgICAgIHZhciB0b051bWJlciA9IHR3ZWVuLnRvLm51bWJlcnNbbl07XG4gICAgICAgIHZhciBmcm9tTnVtYmVyID0gdHdlZW4uZnJvbS5udW1iZXJzW25dIHx8IDA7XG4gICAgICAgIGlmICghdHdlZW4uaXNQYXRoKSB7XG4gICAgICAgICAgdmFsdWUgPSBmcm9tTnVtYmVyICsgKGVhc2VkICogKHRvTnVtYmVyIC0gZnJvbU51bWJlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gZ2V0UGF0aFByb2dyZXNzKHR3ZWVuLnZhbHVlLCBlYXNlZCAqIHRvTnVtYmVyLCB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgIGlmICghKHR3ZWVuLmlzQ29sb3IgJiYgbiA+IDIpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiByb3VuZCkgLyByb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVycy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIC8vIE1hbnVhbCBBcnJheS5yZWR1Y2UgZm9yIGJldHRlciBwZXJmb3JtYW5jZXNcbiAgICAgIHZhciBzdHJpbmdzTGVuZ3RoID0gc3RyaW5ncy5sZW5ndGg7XG4gICAgICBpZiAoIXN0cmluZ3NMZW5ndGgpIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBudW1iZXJzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBzdHJpbmdzWzBdO1xuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHN0cmluZ3NMZW5ndGg7IHMrKykge1xuICAgICAgICAgIHZhciBhID0gc3RyaW5nc1tzXTtcbiAgICAgICAgICB2YXIgYiA9IHN0cmluZ3NbcyArIDFdO1xuICAgICAgICAgIHZhciBuJDEgPSBudW1iZXJzW3NdO1xuICAgICAgICAgIGlmICghaXNOYU4obiQxKSkge1xuICAgICAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArICcgJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW0udHlwZV0oYW5pbWF0YWJsZS50YXJnZXQsIGFuaW0ucHJvcGVydHksIHByb2dyZXNzLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMpO1xuICAgICAgYW5pbS5jdXJyZW50VmFsdWUgPSBwcm9ncmVzcztcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDYWxsYmFjayhjYikge1xuICAgIGlmIChpbnN0YW5jZVtjYl0gJiYgIWluc3RhbmNlLnBhc3NUaHJvdWdoKSB7IGluc3RhbmNlW2NiXShpbnN0YW5jZSk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvdW50SXRlcmF0aW9uKCkge1xuICAgIGlmIChpbnN0YW5jZS5yZW1haW5pbmcgJiYgaW5zdGFuY2UucmVtYWluaW5nICE9PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5yZW1haW5pbmctLTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbnN0YW5jZVByb2dyZXNzKGVuZ2luZVRpbWUpIHtcbiAgICB2YXIgaW5zRHVyYXRpb24gPSBpbnN0YW5jZS5kdXJhdGlvbjtcbiAgICB2YXIgaW5zRGVsYXkgPSBpbnN0YW5jZS5kZWxheTtcbiAgICB2YXIgaW5zRW5kRGVsYXkgPSBpbnNEdXJhdGlvbiAtIGluc3RhbmNlLmVuZERlbGF5O1xuICAgIHZhciBpbnNUaW1lID0gYWRqdXN0VGltZShlbmdpbmVUaW1lKTtcbiAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IG1pbk1heCgoaW5zVGltZSAvIGluc0R1cmF0aW9uKSAqIDEwMCwgMCwgMTAwKTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBpbnNUaW1lIDwgaW5zdGFuY2UuY3VycmVudFRpbWU7XG4gICAgaWYgKGNoaWxkcmVuKSB7IHN5bmNJbnN0YW5jZUNoaWxkcmVuKGluc1RpbWUpOyB9XG4gICAgaWYgKCFpbnN0YW5jZS5iZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgIGluc3RhbmNlLmJlZ2FuID0gdHJ1ZTtcbiAgICAgIHNldENhbGxiYWNrKCdiZWdpbicpO1xuICAgIH1cbiAgICBpZiAoIWluc3RhbmNlLmxvb3BCZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IHRydWU7XG4gICAgICBzZXRDYWxsYmFjaygnbG9vcEJlZ2luJyk7XG4gICAgfVxuICAgIGlmIChpbnNUaW1lIDw9IGluc0RlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSAwKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoMCk7XG4gICAgfVxuICAgIGlmICgoaW5zVGltZSA+PSBpbnNFbmREZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gaW5zRHVyYXRpb24pIHx8ICFpbnNEdXJhdGlvbikge1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc0R1cmF0aW9uKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPiBpbnNEZWxheSAmJiBpbnNUaW1lIDwgaW5zRW5kRGVsYXkpIHtcbiAgICAgIGlmICghaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUJlZ2luJyk7XG4gICAgICB9XG4gICAgICBzZXRDYWxsYmFjaygnY2hhbmdlJyk7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQ29tcGxldGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSBtaW5NYXgoaW5zVGltZSwgMCwgaW5zRHVyYXRpb24pO1xuICAgIGlmIChpbnN0YW5jZS5iZWdhbikgeyBzZXRDYWxsYmFjaygndXBkYXRlJyk7IH1cbiAgICBpZiAoZW5naW5lVGltZSA+PSBpbnNEdXJhdGlvbikge1xuICAgICAgbGFzdFRpbWUgPSAwO1xuICAgICAgY291bnRJdGVyYXRpb24oKTtcbiAgICAgIGlmICghaW5zdGFuY2UucmVtYWluaW5nKSB7XG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIGlmICghaW5zdGFuY2UuY29tcGxldGVkKSB7XG4gICAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XG4gICAgICAgICAgc2V0Q2FsbGJhY2soJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgaWYgKCFpbnN0YW5jZS5wYXNzVGhyb3VnaCAmJiAnUHJvbWlzZScgaW4gd2luZG93KSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRUaW1lID0gbm93O1xuICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XG4gICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xuICAgICAgICBpZiAoaW5zdGFuY2UuZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJykge1xuICAgICAgICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnN0YW5jZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaW5zdGFuY2UucGFzc1Rocm91Z2ggPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IDA7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSAwO1xuICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgaW5zdGFuY2UuYmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VkID0gZGlyZWN0aW9uID09PSAncmV2ZXJzZSc7XG4gICAgaW5zdGFuY2UucmVtYWluaW5nID0gaW5zdGFuY2UubG9vcDtcbiAgICBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xuICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbkxlbmd0aDsgaS0tOykgeyBpbnN0YW5jZS5jaGlsZHJlbltpXS5yZXNldCgpOyB9XG4gICAgaWYgKGluc3RhbmNlLnJldmVyc2VkICYmIGluc3RhbmNlLmxvb3AgIT09IHRydWUgfHwgKGRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScgJiYgaW5zdGFuY2UubG9vcCA9PT0gMSkpIHsgaW5zdGFuY2UucmVtYWluaW5nKys7IH1cbiAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiA6IDApO1xuICB9O1xuXG4gIC8vIGludGVybmFsIG1ldGhvZCAoZm9yIGVuZ2luZSkgdG8gYWRqdXN0IGFuaW1hdGlvbiB0aW1pbmdzIGJlZm9yZSByZXN0b3JpbmcgZW5naW5lIHRpY2tzIChyQUYpXG4gIGluc3RhbmNlLl9vbkRvY3VtZW50VmlzaWJpbGl0eSA9IHJlc2V0VGltZTtcblxuICAvLyBTZXQgVmFsdWUgaGVscGVyXG5cbiAgaW5zdGFuY2Uuc2V0ID0gZnVuY3Rpb24odGFyZ2V0cywgcHJvcGVydGllcykge1xuICAgIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG5cbiAgaW5zdGFuY2UudGljayA9IGZ1bmN0aW9uKHQpIHtcbiAgICBub3cgPSB0O1xuICAgIGlmICghc3RhcnRUaW1lKSB7IHN0YXJ0VGltZSA9IG5vdzsgfVxuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoKG5vdyArIChsYXN0VGltZSAtIHN0YXJ0VGltZSkpICogYW5pbWUuc3BlZWQpO1xuICB9O1xuXG4gIGluc3RhbmNlLnNlZWsgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgc2V0SW5zdGFuY2VQcm9ncmVzcyhhZGp1c3RUaW1lKHRpbWUpKTtcbiAgfTtcblxuICBpbnN0YW5jZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgcmVzZXRUaW1lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghaW5zdGFuY2UucGF1c2VkKSB7IHJldHVybjsgfVxuICAgIGlmIChpbnN0YW5jZS5jb21wbGV0ZWQpIHsgaW5zdGFuY2UucmVzZXQoKTsgfVxuICAgIGluc3RhbmNlLnBhdXNlZCA9IGZhbHNlO1xuICAgIGFjdGl2ZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICByZXNldFRpbWUoKTtcbiAgICBlbmdpbmUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBpbnN0YW5jZS5yZXZlcnNlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucmVzZXQoKTtcbiAgICBpbnN0YW5jZS5wbGF5KCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVtb3ZlID0gZnVuY3Rpb24odGFyZ2V0cykge1xuICAgIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXNldCgpO1xuXG4gIGlmIChpbnN0YW5jZS5hdXRvcGxheSkgeyBpbnN0YW5jZS5wbGF5KCk7IH1cblxuICByZXR1cm4gaW5zdGFuY2U7XG5cbn1cblxuLy8gUmVtb3ZlIHRhcmdldHMgZnJvbSBhbmltYXRpb25cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucykge1xuICBmb3IgKHZhciBhID0gYW5pbWF0aW9ucy5sZW5ndGg7IGEtLTspIHtcbiAgICBpZiAoYXJyYXlDb250YWlucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnNbYV0uYW5pbWF0YWJsZS50YXJnZXQpKSB7XG4gICAgICBhbmltYXRpb25zLnNwbGljZShhLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKSB7XG4gIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgdmFyIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpO1xuICBmb3IgKHZhciBjID0gY2hpbGRyZW4ubGVuZ3RoOyBjLS07KSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5bY107XG4gICAgdmFyIGNoaWxkQW5pbWF0aW9ucyA9IGNoaWxkLmFuaW1hdGlvbnM7XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgY2hpbGRBbmltYXRpb25zKTtcbiAgICBpZiAoIWNoaWxkQW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkLmNoaWxkcmVuLmxlbmd0aCkgeyBjaGlsZHJlbi5zcGxpY2UoYywgMSk7IH1cbiAgfVxuICBpZiAoIWFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZHJlbi5sZW5ndGgpIHsgaW5zdGFuY2UucGF1c2UoKTsgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIGZvciAodmFyIGkgPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgdmFyIGluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XG4gIH1cbn1cblxuLy8gU3RhZ2dlciBoZWxwZXJzXG5cbmZ1bmN0aW9uIHN0YWdnZXIodmFsLCBwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gIHZhciBkaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uIHx8ICdub3JtYWwnO1xuICB2YXIgZWFzaW5nID0gcGFyYW1zLmVhc2luZyA/IHBhcnNlRWFzaW5ncyhwYXJhbXMuZWFzaW5nKSA6IG51bGw7XG4gIHZhciBncmlkID0gcGFyYW1zLmdyaWQ7XG4gIHZhciBheGlzID0gcGFyYW1zLmF4aXM7XG4gIHZhciBmcm9tSW5kZXggPSBwYXJhbXMuZnJvbSB8fCAwO1xuICB2YXIgZnJvbUZpcnN0ID0gZnJvbUluZGV4ID09PSAnZmlyc3QnO1xuICB2YXIgZnJvbUNlbnRlciA9IGZyb21JbmRleCA9PT0gJ2NlbnRlcic7XG4gIHZhciBmcm9tTGFzdCA9IGZyb21JbmRleCA9PT0gJ2xhc3QnO1xuICB2YXIgaXNSYW5nZSA9IGlzLmFycih2YWwpO1xuICB2YXIgdmFsMSA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFswXSkgOiBwYXJzZUZsb2F0KHZhbCk7XG4gIHZhciB2YWwyID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzFdKSA6IDA7XG4gIHZhciB1bml0ID0gZ2V0VW5pdChpc1JhbmdlID8gdmFsWzFdIDogdmFsKSB8fCAwO1xuICB2YXIgc3RhcnQgPSBwYXJhbXMuc3RhcnQgfHwgMCArIChpc1JhbmdlID8gdmFsMSA6IDApO1xuICB2YXIgdmFsdWVzID0gW107XG4gIHZhciBtYXhWYWx1ZSA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoZWwsIGksIHQpIHtcbiAgICBpZiAoZnJvbUZpcnN0KSB7IGZyb21JbmRleCA9IDA7IH1cbiAgICBpZiAoZnJvbUNlbnRlcikgeyBmcm9tSW5kZXggPSAodCAtIDEpIC8gMjsgfVxuICAgIGlmIChmcm9tTGFzdCkgeyBmcm9tSW5kZXggPSB0IC0gMTsgfVxuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHQ7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCFncmlkKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2goTWF0aC5hYnMoZnJvbUluZGV4IC0gaW5kZXgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZnJvbVggPSAhZnJvbUNlbnRlciA/IGZyb21JbmRleCVncmlkWzBdIDogKGdyaWRbMF0tMSkvMjtcbiAgICAgICAgICB2YXIgZnJvbVkgPSAhZnJvbUNlbnRlciA/IE1hdGguZmxvb3IoZnJvbUluZGV4L2dyaWRbMF0pIDogKGdyaWRbMV0tMSkvMjtcbiAgICAgICAgICB2YXIgdG9YID0gaW5kZXglZ3JpZFswXTtcbiAgICAgICAgICB2YXIgdG9ZID0gTWF0aC5mbG9vcihpbmRleC9ncmlkWzBdKTtcbiAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gZnJvbVggLSB0b1g7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IGZyb21ZIC0gdG9ZO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IE1hdGguc3FydChkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVkpO1xuICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHsgdmFsdWUgPSAtZGlzdGFuY2VYOyB9XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd5JykgeyB2YWx1ZSA9IC1kaXN0YW5jZVk7IH1cbiAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF4VmFsdWUgPSBNYXRoLm1heC5hcHBseShNYXRoLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgICAgaWYgKGVhc2luZykgeyB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGVhc2luZyh2YWwgLyBtYXhWYWx1ZSkgKiBtYXhWYWx1ZTsgfSk7IH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyZXZlcnNlJykgeyB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGF4aXMgPyAodmFsIDwgMCkgPyB2YWwgKiAtMSA6IC12YWwgOiBNYXRoLmFicyhtYXhWYWx1ZSAtIHZhbCk7IH0pOyB9XG4gICAgfVxuICAgIHZhciBzcGFjaW5nID0gaXNSYW5nZSA/ICh2YWwyIC0gdmFsMSkgLyBtYXhWYWx1ZSA6IHZhbDE7XG4gICAgcmV0dXJuIHN0YXJ0ICsgKHNwYWNpbmcgKiAoTWF0aC5yb3VuZCh2YWx1ZXNbaV0gKiAxMDApIC8gMTAwKSkgKyB1bml0O1xuICB9XG59XG5cbi8vIFRpbWVsaW5lXG5cbmZ1bmN0aW9uIHRpbWVsaW5lKHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cbiAgdmFyIHRsID0gYW5pbWUocGFyYW1zKTtcbiAgdGwuZHVyYXRpb24gPSAwO1xuICB0bC5hZGQgPSBmdW5jdGlvbihpbnN0YW5jZVBhcmFtcywgdGltZWxpbmVPZmZzZXQpIHtcbiAgICB2YXIgdGxJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKHRsKTtcbiAgICB2YXIgY2hpbGRyZW4gPSB0bC5jaGlsZHJlbjtcbiAgICBpZiAodGxJbmRleCA+IC0xKSB7IGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UodGxJbmRleCwgMSk7IH1cbiAgICBmdW5jdGlvbiBwYXNzVGhyb3VnaChpbnMpIHsgaW5zLnBhc3NUaHJvdWdoID0gdHJ1ZTsgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHsgcGFzc1Rocm91Z2goY2hpbGRyZW5baV0pOyB9XG4gICAgdmFyIGluc1BhcmFtcyA9IG1lcmdlT2JqZWN0cyhpbnN0YW5jZVBhcmFtcywgcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpKTtcbiAgICBpbnNQYXJhbXMudGFyZ2V0cyA9IGluc1BhcmFtcy50YXJnZXRzIHx8IHBhcmFtcy50YXJnZXRzO1xuICAgIHZhciB0bER1cmF0aW9uID0gdGwuZHVyYXRpb247XG4gICAgaW5zUGFyYW1zLmF1dG9wbGF5ID0gZmFsc2U7XG4gICAgaW5zUGFyYW1zLmRpcmVjdGlvbiA9IHRsLmRpcmVjdGlvbjtcbiAgICBpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQgPSBpcy51bmQodGltZWxpbmVPZmZzZXQpID8gdGxEdXJhdGlvbiA6IGdldFJlbGF0aXZlVmFsdWUodGltZWxpbmVPZmZzZXQsIHRsRHVyYXRpb24pO1xuICAgIHBhc3NUaHJvdWdoKHRsKTtcbiAgICB0bC5zZWVrKGluc1BhcmFtcy50aW1lbGluZU9mZnNldCk7XG4gICAgdmFyIGlucyA9IGFuaW1lKGluc1BhcmFtcyk7XG4gICAgcGFzc1Rocm91Z2goaW5zKTtcbiAgICBjaGlsZHJlbi5wdXNoKGlucyk7XG4gICAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoY2hpbGRyZW4sIHBhcmFtcyk7XG4gICAgdGwuZGVsYXkgPSB0aW1pbmdzLmRlbGF5O1xuICAgIHRsLmVuZERlbGF5ID0gdGltaW5ncy5lbmREZWxheTtcbiAgICB0bC5kdXJhdGlvbiA9IHRpbWluZ3MuZHVyYXRpb247XG4gICAgdGwuc2VlaygwKTtcbiAgICB0bC5yZXNldCgpO1xuICAgIGlmICh0bC5hdXRvcGxheSkgeyB0bC5wbGF5KCk7IH1cbiAgICByZXR1cm4gdGw7XG4gIH07XG4gIHJldHVybiB0bDtcbn1cblxuYW5pbWUudmVyc2lvbiA9ICczLjIuMSc7XG5hbmltZS5zcGVlZCA9IDE7XG4vLyBUT0RPOiNyZXZpZXc6IG5hbWluZywgZG9jdW1lbnRhdGlvblxuYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbiA9IHRydWU7XG5hbmltZS5ydW5uaW5nID0gYWN0aXZlSW5zdGFuY2VzO1xuYW5pbWUucmVtb3ZlID0gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXM7XG5hbmltZS5nZXQgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlO1xuYW5pbWUuc2V0ID0gc2V0VGFyZ2V0c1ZhbHVlO1xuYW5pbWUuY29udmVydFB4ID0gY29udmVydFB4VG9Vbml0O1xuYW5pbWUucGF0aCA9IGdldFBhdGg7XG5hbmltZS5zZXREYXNob2Zmc2V0ID0gc2V0RGFzaG9mZnNldDtcbmFuaW1lLnN0YWdnZXIgPSBzdGFnZ2VyO1xuYW5pbWUudGltZWxpbmUgPSB0aW1lbGluZTtcbmFuaW1lLmVhc2luZyA9IHBhcnNlRWFzaW5ncztcbmFuaW1lLnBlbm5lciA9IHBlbm5lcjtcbmFuaW1lLnJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgfTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWU7XG4iLCJpbXBvcnQgYmFyYmEgZnJvbSAnQGJhcmJhL2NvcmUnO1xuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMvbGliL2FuaW1lLmVzLmpzJztcblxuYmFyYmEuaW5pdCh7XG4gICAgZGVidWc6IHRydWUsXG4gICAgdHJhbnNpdGlvbnM6IFt7XG4gICAgICAgIGxlYXZlOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGFuaW1lKHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGFyZ2V0czogZGF0YS5jdXJyZW50LmNvbnRhaW5lcixcbiAgICAgICAgICAgIC8vICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIC8vICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIC8vICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudGVyOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gYW5pbWUoe1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldHM6IGRhdGEubmV4dC5jb250YWluZXIsXG4gICAgICAgICAgICAvLyAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgIC8vICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgLy8gICAgIG9wYWNpdHk6IFswLCAxXSxcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9LFxuICAgIH1dXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=