/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@barba/core/dist/barba.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/@barba/core/dist/barba.umd.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (t, n) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  function t(t, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, "symbol" == _typeof(e = function (t, n) {
        if ("object" != _typeof(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var i = r.call(t, "string");
          if ("object" != _typeof(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      }(i.key)) ? e : String(e), i);
    }
    var e;
  }
  function n(n, r, i) {
    return r && t(n.prototype, r), i && t(n, i), Object.defineProperty(n, "prototype", {
      writable: !1
    }), n;
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
      }
      return t;
    }, r.apply(this, arguments);
  }
  function i(t, n) {
    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n);
  }
  function e(t) {
    return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, e(t);
  }
  function o(t, n) {
    return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, n) {
      return t.__proto__ = n, t;
    }, o(t, n);
  }
  function u() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }
  function s(t, n, r) {
    return s = u() ? Reflect.construct.bind() : function (t, n, r) {
      var i = [null];
      i.push.apply(i, n);
      var e = new (Function.bind.apply(t, i))();
      return r && o(e, r.prototype), e;
    }, s.apply(null, arguments);
  }
  function f(t) {
    var n = "function" == typeof Map ? new Map() : void 0;
    return f = function f(t) {
      if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== n) {
        if (n.has(t)) return n.get(t);
        n.set(t, r);
      }
      function r() {
        return s(t, arguments, e(this).constructor);
      }
      return r.prototype = Object.create(t.prototype, {
        constructor: {
          value: r,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), o(r, t);
    }, f(t);
  }
  function c(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  var a,
    h = function h() {
      this.before = void 0, this.beforeLeave = void 0, this.leave = void 0, this.afterLeave = void 0, this.beforeEnter = void 0, this.enter = void 0, this.afterEnter = void 0, this.after = void 0;
    };
  !function (t) {
    t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug";
  }(a || (a = {}));
  var v = a.off,
    d = /*#__PURE__*/function () {
      function t(t) {
        this.t = void 0, this.t = t;
      }
      t.getLevel = function () {
        return v;
      }, t.setLevel = function (t) {
        return v = a[t];
      };
      var n = t.prototype;
      return n.error = function () {
        this.i(console.error, a.error, [].slice.call(arguments));
      }, n.warn = function () {
        this.i(console.warn, a.warning, [].slice.call(arguments));
      }, n.info = function () {
        this.i(console.info, a.info, [].slice.call(arguments));
      }, n.debug = function () {
        this.i(console.log, a.debug, [].slice.call(arguments));
      }, n.i = function (n, r, i) {
        r <= t.getLevel() && n.apply(console, ["[" + this.t + "] "].concat(i));
      }, t;
    }();
  function l(t) {
    return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function p(t) {
    return t && t.sensitive ? "" : "i";
  }
  var m = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper"
    },
    w = /*#__PURE__*/function () {
      function t() {
        this.o = m, this.u = void 0, this.h = {
          after: null,
          before: null,
          parent: null
        };
      }
      var n = t.prototype;
      return n.toString = function (t) {
        return t.outerHTML;
      }, n.toDocument = function (t) {
        return this.u || (this.u = new DOMParser()), this.u.parseFromString(t, "text/html");
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
        document.body.contains(t) && (this.v(t), t.parentNode.removeChild(t));
      }, n.addContainer = function (t, n) {
        var r = this.getContainer() || this.h.before;
        r ? this.l(t, r) : this.h.after ? this.h.after.parentNode.insertBefore(t, this.h.after) : this.h.parent ? this.h.parent.appendChild(t) : n.appendChild(t);
      }, n.getSibling = function () {
        return this.h;
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
        var t = [].slice.call(arguments).length;
        if (0 === t) throw new Error("resolveUrl requires at least one argument; got none.");
        var n = document.createElement("base");
        if (n.href = arguments[0], 1 === t) return n.href;
        var r = document.getElementsByTagName("head")[0];
        r.insertBefore(n, r.firstChild);
        for (var i, e = document.createElement("a"), o = 1; o < t; o++) e.href = arguments[o], n.href = i = e.href;
        return r.removeChild(n), i;
      }, n.l = function (t, n) {
        n.parentNode.insertBefore(t, n.nextSibling);
      }, n.v = function (t) {
        return this.h = {
          after: t.nextElementSibling,
          before: t.previousElementSibling,
          parent: t.parentElement
        }, this.h;
      }, t;
    }(),
    b = new w(),
    y = /*#__PURE__*/function () {
      function t() {
        this.p = void 0, this.m = [], this.P = -1;
      }
      var i = t.prototype;
      return i.init = function (t, n) {
        this.p = "barba";
        var r = {
          data: {},
          ns: n,
          scroll: {
            x: window.scrollX,
            y: window.scrollY
          },
          url: t
        };
        this.P = 0, this.m.push(r);
        var i = {
          from: this.p,
          index: this.P,
          states: [].concat(this.m)
        };
        window.history && window.history.replaceState(i, "", t);
      }, i.change = function (t, n, r) {
        if (r && r.state) {
          var i = r.state,
            e = i.index;
          n = this.g(this.P - e), this.replace(i.states), this.P = e;
        } else this.add(t, n);
        return n;
      }, i.add = function (t, n, r, i) {
        var e = null != r ? r : this.R(n),
          o = {
            data: null != i ? i : {},
            ns: "tmp",
            scroll: {
              x: window.scrollX,
              y: window.scrollY
            },
            url: t
          };
        switch (e) {
          case "push":
            this.P = this.size, this.m.push(o);
            break;
          case "replace":
            this.set(this.P, o);
        }
        var u = {
          from: this.p,
          index: this.P,
          states: [].concat(this.m)
        };
        switch (e) {
          case "push":
            window.history && window.history.pushState(u, "", t);
            break;
          case "replace":
            window.history && window.history.replaceState(u, "", t);
        }
      }, i.store = function (t, n) {
        var i = n || this.P,
          e = this.get(i);
        e.data = r({}, e.data, t), this.set(i, e);
        var o = {
          from: this.p,
          index: this.P,
          states: [].concat(this.m)
        };
        window.history.replaceState(o, "");
      }, i.update = function (t, n) {
        var i = n || this.P,
          e = r({}, this.get(i), t);
        this.set(i, e);
      }, i.remove = function (t) {
        t ? this.m.splice(t, 1) : this.m.pop(), this.P--;
      }, i.clear = function () {
        this.m = [], this.P = -1;
      }, i.replace = function (t) {
        this.m = t;
      }, i.get = function (t) {
        return this.m[t];
      }, i.set = function (t, n) {
        return this.m[t] = n;
      }, i.R = function (t) {
        var n = "push",
          r = t,
          i = m.prefix + "-" + m.history;
        return r.hasAttribute && r.hasAttribute(i) && (n = r.getAttribute(i)), n;
      }, i.g = function (t) {
        return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward";
      }, n(t, [{
        key: "current",
        get: function get() {
          return this.m[this.P];
        }
      }, {
        key: "previous",
        get: function get() {
          return this.P < 1 ? null : this.m[this.P - 1];
        }
      }, {
        key: "size",
        get: function get() {
          return this.m.length;
        }
      }]), t;
    }(),
    P = new y(),
    g = function g(t, n) {
      try {
        var r = function () {
          if (!n.next.html) return Promise.resolve(t).then(function (t) {
            var r = n.next;
            if (t) {
              var i = b.toElement(t.html);
              r.namespace = b.getNamespace(i), r.container = b.getContainer(i), r.url = t.url, r.html = t.html, P.update({
                ns: r.namespace
              });
              var e = b.toDocument(t.html);
              document.title = e.title;
            }
          });
        }();
        return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
      } catch (t) {
        return Promise.reject(t);
      }
    },
    E = function t(n, r, i) {
      return n instanceof RegExp ? function (t, n) {
        if (!n) return t;
        for (var r = /\((?:\?<(.*?)>)?(?!\?)/g, i = 0, e = r.exec(t.source); e;) n.push({
          name: e[1] || i++,
          prefix: "",
          suffix: "",
          modifier: "",
          pattern: ""
        }), e = r.exec(t.source);
        return t;
      }(n, r) : Array.isArray(n) ? function (n, r, i) {
        var e = n.map(function (n) {
          return t(n, r, i).source;
        });
        return new RegExp("(?:".concat(e.join("|"), ")"), p(i));
      }(n, r, i) : function (t, n, r) {
        return function (t, n, r) {
          void 0 === r && (r = {});
          for (var i = r.strict, e = void 0 !== i && i, o = r.start, u = void 0 === o || o, s = r.end, f = void 0 === s || s, c = r.encode, a = void 0 === c ? function (t) {
              return t;
            } : c, h = r.delimiter, v = void 0 === h ? "/#?" : h, d = r.endsWith, m = "[".concat(l(void 0 === d ? "" : d), "]|$"), w = "[".concat(l(v), "]"), b = u ? "^" : "", y = 0, P = t; y < P.length; y++) {
            var g = P[y];
            if ("string" == typeof g) b += l(a(g));else {
              var E = l(a(g.prefix)),
                x = l(a(g.suffix));
              if (g.pattern) {
                if (n && n.push(g), E || x) {
                  if ("+" === g.modifier || "*" === g.modifier) {
                    var R = "*" === g.modifier ? "?" : "";
                    b += "(?:".concat(E, "((?:").concat(g.pattern, ")(?:").concat(x).concat(E, "(?:").concat(g.pattern, "))*)").concat(x, ")").concat(R);
                  } else b += "(?:".concat(E, "(").concat(g.pattern, ")").concat(x, ")").concat(g.modifier);
                } else b += "+" === g.modifier || "*" === g.modifier ? "((?:".concat(g.pattern, ")").concat(g.modifier, ")") : "(".concat(g.pattern, ")").concat(g.modifier);
              } else b += "(?:".concat(E).concat(x, ")").concat(g.modifier);
            }
          }
          if (f) e || (b += "".concat(w, "?")), b += r.endsWith ? "(?=".concat(m, ")") : "$";else {
            var k = t[t.length - 1],
              O = "string" == typeof k ? w.indexOf(k[k.length - 1]) > -1 : void 0 === k;
            e || (b += "(?:".concat(w, "(?=").concat(m, "))?")), O || (b += "(?=".concat(w, "|").concat(m, ")"));
          }
          return new RegExp(b, p(r));
        }(function (t, n) {
          void 0 === n && (n = {});
          for (var r = function (t) {
              for (var n = [], r = 0; r < t.length;) {
                var i = t[r];
                if ("*" !== i && "+" !== i && "?" !== i) {
                  if ("\\" !== i) {
                    if ("{" !== i) {
                      if ("}" !== i) {
                        if (":" !== i) {
                          if ("(" !== i) n.push({
                            type: "CHAR",
                            index: r,
                            value: t[r++]
                          });else {
                            var e = 1,
                              o = "";
                            if ("?" === t[s = r + 1]) throw new TypeError('Pattern cannot start with "?" at '.concat(s));
                            for (; s < t.length;) if ("\\" !== t[s]) {
                              if (")" === t[s]) {
                                if (0 == --e) {
                                  s++;
                                  break;
                                }
                              } else if ("(" === t[s] && (e++, "?" !== t[s + 1])) throw new TypeError("Capturing groups are not allowed at ".concat(s));
                              o += t[s++];
                            } else o += t[s++] + t[s++];
                            if (e) throw new TypeError("Unbalanced pattern at ".concat(r));
                            if (!o) throw new TypeError("Missing pattern at ".concat(r));
                            n.push({
                              type: "PATTERN",
                              index: r,
                              value: o
                            }), r = s;
                          }
                        } else {
                          for (var u = "", s = r + 1; s < t.length;) {
                            var f = t.charCodeAt(s);
                            if (!(f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || 95 === f)) break;
                            u += t[s++];
                          }
                          if (!u) throw new TypeError("Missing parameter name at ".concat(r));
                          n.push({
                            type: "NAME",
                            index: r,
                            value: u
                          }), r = s;
                        }
                      } else n.push({
                        type: "CLOSE",
                        index: r,
                        value: t[r++]
                      });
                    } else n.push({
                      type: "OPEN",
                      index: r,
                      value: t[r++]
                    });
                  } else n.push({
                    type: "ESCAPED_CHAR",
                    index: r++,
                    value: t[r++]
                  });
                } else n.push({
                  type: "MODIFIER",
                  index: r,
                  value: t[r++]
                });
              }
              return n.push({
                type: "END",
                index: r,
                value: ""
              }), n;
            }(t), i = n.prefixes, e = void 0 === i ? "./" : i, o = "[^".concat(l(n.delimiter || "/#?"), "]+?"), u = [], s = 0, f = 0, c = "", a = function a(t) {
              if (f < r.length && r[f].type === t) return r[f++].value;
            }, h = function h(t) {
              var n = a(t);
              if (void 0 !== n) return n;
              var i = r[f],
                e = i.index;
              throw new TypeError("Unexpected ".concat(i.type, " at ").concat(e, ", expected ").concat(t));
            }, v = function v() {
              for (var t, n = ""; t = a("CHAR") || a("ESCAPED_CHAR");) n += t;
              return n;
            }; f < r.length;) {
            var d = a("CHAR"),
              p = a("NAME"),
              m = a("PATTERN");
            if (p || m) -1 === e.indexOf(b = d || "") && (c += b, b = ""), c && (u.push(c), c = ""), u.push({
              name: p || s++,
              prefix: b,
              suffix: "",
              pattern: m || o,
              modifier: a("MODIFIER") || ""
            });else {
              var w = d || a("ESCAPED_CHAR");
              if (w) c += w;else if (c && (u.push(c), c = ""), a("OPEN")) {
                var b = v(),
                  y = a("NAME") || "",
                  P = a("PATTERN") || "",
                  g = v();
                h("CLOSE"), u.push({
                  name: y || (P ? s++ : ""),
                  pattern: y && !P ? o : P,
                  prefix: b,
                  suffix: g,
                  modifier: a("MODIFIER") || ""
                });
              } else h("END");
            }
          }
          return u;
        }(t, r), n, r);
      }(n, r, i);
    },
    x = {
      __proto__: null,
      update: g,
      nextTick: function nextTick() {
        return new Promise(function (t) {
          window.requestAnimationFrame(t);
        });
      },
      pathToRegexp: E
    },
    R = function R() {
      return window.location.origin;
    },
    k = function k(t) {
      return void 0 === t && (t = window.location.href), O(t).port;
    },
    O = function O(t) {
      var n,
        r = t.match(/:\d+/);
      if (null === r) /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443);else {
        var i = r[0].substring(1);
        n = parseInt(i, 10);
      }
      var e,
        o = t.replace(R(), ""),
        u = {},
        s = o.indexOf("#");
      s >= 0 && (e = o.slice(s + 1), o = o.slice(0, s));
      var f = o.indexOf("?");
      return f >= 0 && (u = T(o.slice(f + 1)), o = o.slice(0, f)), {
        hash: e,
        path: o,
        port: n,
        query: u
      };
    },
    T = function T(t) {
      return t.split("&").reduce(function (t, n) {
        var r = n.split("=");
        return t[r[0]] = r[1], t;
      }, {});
    },
    A = function A(t) {
      return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "");
    },
    j = {
      __proto__: null,
      getHref: function getHref() {
        return window.location.href;
      },
      getAbsoluteHref: function getAbsoluteHref(t, n) {
        return void 0 === n && (n = document.baseURI), new URL(t, n).href;
      },
      getOrigin: R,
      getPort: k,
      getPath: function getPath(t) {
        return void 0 === t && (t = window.location.href), O(t).path;
      },
      getQuery: function getQuery(t, n) {
        return void 0 === n && (n = !1), n ? JSON.stringify(O(t).query) : O(t).query;
      },
      getHash: function getHash(t) {
        return O(t).hash;
      },
      parse: O,
      parseQuery: T,
      clean: A
    };
  function M(t, n, i, e, o) {
    return void 0 === n && (n = 2e3), new Promise(function (u, s) {
      var f = new XMLHttpRequest();
      f.onreadystatechange = function () {
        if (f.readyState === XMLHttpRequest.DONE) if (200 === f.status) {
          var n = "" !== f.responseURL && f.responseURL !== t ? f.responseURL : t;
          u({
            html: f.responseText,
            url: r({
              href: n
            }, O(n))
          }), e.update(t, {
            status: "fulfilled",
            target: n
          });
        } else if (f.status) {
          var o = {
            status: f.status,
            statusText: f.statusText
          };
          i(t, o), s(o), e.update(t, {
            status: "rejected"
          });
        }
      }, f.ontimeout = function () {
        var r = new Error("Timeout error [" + n + "]");
        i(t, r), s(r), e.update(t, {
          status: "rejected"
        });
      }, f.onerror = function () {
        var n = new Error("Fetch error");
        i(t, n), s(n), e.update(t, {
          status: "rejected"
        });
      }, f.open("GET", t), f.timeout = n, f.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), f.setRequestHeader("x-barba", "yes"), o.all().forEach(function (t, n) {
        f.setRequestHeader(n, t);
      }), f.send();
    });
  }
  function N(t) {
    return !!t && ("object" == _typeof(t) || "function" == typeof t) && "function" == typeof t.then;
  }
  function S(t, n) {
    return void 0 === n && (n = {}), function () {
      var r = arguments,
        i = !1,
        e = new Promise(function (e, o) {
          n.async = function () {
            return i = !0, function (t, n) {
              t ? o(t) : e(n);
            };
          };
          var u = t.apply(n, [].slice.call(r));
          i || (N(u) ? u.then(e, o) : e(u));
        });
      return e;
    };
  }
  var C = /*#__PURE__*/function (t) {
      function n() {
        var n;
        return (n = t.call(this) || this).logger = new d("@barba/core"), n.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n.registered = new Map(), n.init(), n;
      }
      i(n, t);
      var r = n.prototype;
      return r.init = function () {
        var t = this;
        this.registered.clear(), this.all.forEach(function (n) {
          t[n] || (t[n] = function (r, i) {
            t.registered.has(n) || t.registered.set(n, new Set()), t.registered.get(n).add({
              ctx: i || {},
              fn: r
            });
          });
        });
      }, r["do"] = function (t) {
        var n = arguments,
          r = this;
        if (this.registered.has(t)) {
          var i = Promise.resolve();
          return this.registered.get(t).forEach(function (t) {
            i = i.then(function () {
              return S(t.fn, t.ctx).apply(void 0, [].slice.call(n, 1));
            });
          }), i["catch"](function (n) {
            r.logger.debug("Hook error [" + t + "]"), r.logger.error(n);
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
    }(h),
    L = new C(),
    H = /*#__PURE__*/function () {
      function t(t) {
        if (this.k = void 0, this.O = [], "boolean" == typeof t) this.k = t;else {
          var n = Array.isArray(t) ? t : [t];
          this.O = n.map(function (t) {
            return E(t);
          });
        }
      }
      return t.prototype.checkHref = function (t) {
        if ("boolean" == typeof this.k) return this.k;
        var n = O(t).path;
        return this.O.some(function (t) {
          return null !== t.exec(n);
        });
      }, t;
    }(),
    _ = /*#__PURE__*/function (t) {
      function n(n) {
        var r;
        return (r = t.call(this, n) || this).T = new Map(), r;
      }
      i(n, t);
      var e = n.prototype;
      return e.set = function (t, n, r, i, e) {
        return this.T.set(t, {
          action: r,
          request: n,
          status: i,
          target: null != e ? e : t
        }), {
          action: r,
          request: n,
          status: i,
          target: e
        };
      }, e.get = function (t) {
        return this.T.get(t);
      }, e.getRequest = function (t) {
        return this.T.get(t).request;
      }, e.getAction = function (t) {
        return this.T.get(t).action;
      }, e.getStatus = function (t) {
        return this.T.get(t).status;
      }, e.getTarget = function (t) {
        return this.T.get(t).target;
      }, e.has = function (t) {
        return !this.checkHref(t) && this.T.has(t);
      }, e["delete"] = function (t) {
        return this.T["delete"](t);
      }, e.update = function (t, n) {
        var i = r({}, this.T.get(t), n);
        return this.T.set(t, i), i;
      }, n;
    }(H),
    D = /*#__PURE__*/function () {
      function t() {
        this.A = new Map();
      }
      var n = t.prototype;
      return n.set = function (t, n) {
        return this.A.set(t, n), {
          name: n
        };
      }, n.get = function (t) {
        return this.A.get(t);
      }, n.all = function () {
        return this.A;
      }, n.has = function (t) {
        return this.A.has(t);
      }, n["delete"] = function (t) {
        return this.A["delete"](t);
      }, n.clear = function () {
        return this.A.clear();
      }, t;
    }(),
    B = function B() {
      return !window.history.pushState;
    },
    q = function q(t) {
      return !t.el || !t.href;
    },
    F = function F(t) {
      var n = t.event;
      return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey;
    },
    I = function I(t) {
      var n = t.el;
      return n.hasAttribute("target") && "_blank" === n.target;
    },
    U = function U(t) {
      var n = t.el;
      return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname;
    },
    $ = function $(t) {
      var n = t.el;
      return void 0 !== n.port && k() !== k(n.href);
    },
    Q = function Q(t) {
      var n = t.el;
      return n.getAttribute && "string" == typeof n.getAttribute("download");
    },
    X = function X(t) {
      return t.el.hasAttribute(m.prefix + "-" + m.prevent);
    },
    z = function z(t) {
      return Boolean(t.el.closest("[" + m.prefix + "-" + m.prevent + '="all"]'));
    },
    G = function G(t) {
      var n = t.href;
      return A(n) === A() && k(n) === k();
    },
    J = /*#__PURE__*/function (t) {
      function n(n) {
        var r;
        return (r = t.call(this, n) || this).suite = [], r.tests = new Map(), r.init(), r;
      }
      i(n, t);
      var r = n.prototype;
      return r.init = function () {
        this.add("pushState", B), this.add("exists", q), this.add("newTab", F), this.add("blank", I), this.add("corsDomain", U), this.add("corsPort", $), this.add("download", Q), this.add("preventSelf", X), this.add("preventAll", z), this.add("sameUrl", G, !1);
      }, r.add = function (t, n, r) {
        void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t);
      }, r.run = function (t, n, r, i) {
        return this.tests.get(t)({
          el: n,
          event: r,
          href: i
        });
      }, r.checkLink = function (t, n, r) {
        var i = this;
        return this.suite.some(function (e) {
          return i.run(e, t, n, r);
        });
      }, n;
    }(H),
    W = /*#__PURE__*/function (t) {
      function n(r, i) {
        var e;
        return void 0 === i && (i = "Barba error"), (e = t.call.apply(t, [this].concat([].slice.call(arguments, 2))) || this).error = void 0, e.label = void 0, e.error = r, e.label = i, Error.captureStackTrace && Error.captureStackTrace(c(e), n), e.name = "BarbaError", e;
      }
      return i(n, t), n;
    }( /*#__PURE__*/f(Error)),
    K = /*#__PURE__*/function () {
      function t(t) {
        void 0 === t && (t = []), this.logger = new d("@barba/core"), this.all = [], this.page = [], this.once = [], this.j = [{
          name: "namespace",
          type: "strings"
        }, {
          name: "custom",
          type: "function"
        }], t && (this.all = this.all.concat(t)), this.update();
      }
      var n = t.prototype;
      return n.add = function (t, n) {
        "rule" === t ? this.j.splice(n.position || 0, 0, n.value) : this.all.push(n), this.update();
      }, n.resolve = function (t, n) {
        var r = this;
        void 0 === n && (n = {});
        var i = n.once ? this.once : this.page;
        i = i.filter(n.self ? function (t) {
          return t.name && "self" === t.name;
        } : function (t) {
          return !t.name || "self" !== t.name;
        });
        var e = new Map(),
          o = i.find(function (i) {
            var o = !0,
              u = {};
            return n.self && "self" === i.name ? (e.set(i, u), !0) : (r.j.reverse().forEach(function (n) {
              o && (o = r.M(i, n, t, u), i.from && i.to && (o = r.M(i, n, t, u, "from") && r.M(i, n, t, u, "to")), i.from && !i.to && (o = r.M(i, n, t, u, "from")), !i.from && i.to && (o = r.M(i, n, t, u, "to")));
            }), e.set(i, u), o);
          }),
          u = e.get(o),
          s = [];
        if (s.push(n.once ? "once" : "page"), n.self && s.push("self"), u) {
          var f,
            c = [o];
          Object.keys(u).length > 0 && c.push(u), (f = this.logger).info.apply(f, ["Transition found [" + s.join(",") + "]"].concat(c));
        } else this.logger.info("No transition found [" + s.join(",") + "]");
        return o;
      }, n.update = function () {
        var t = this;
        this.all = this.all.map(function (n) {
          return t.N(n);
        }).sort(function (t, n) {
          return t.priority - n.priority;
        }).reverse().map(function (t) {
          return delete t.priority, t;
        }), this.page = this.all.filter(function (t) {
          return void 0 !== t.leave || void 0 !== t.enter;
        }), this.once = this.all.filter(function (t) {
          return void 0 !== t.once;
        });
      }, n.M = function (t, n, r, i, e) {
        var o = !0,
          u = !1,
          s = t,
          f = n.name,
          c = f,
          a = f,
          h = f,
          v = e ? s[e] : s,
          d = "to" === e ? r.next : r.current;
        if (e ? v && v[f] : v[f]) {
          switch (n.type) {
            case "strings":
            default:
              var l = Array.isArray(v[c]) ? v[c] : [v[c]];
              d[c] && -1 !== l.indexOf(d[c]) && (u = !0), -1 === l.indexOf(d[c]) && (o = !1);
              break;
            case "object":
              var p = Array.isArray(v[a]) ? v[a] : [v[a]];
              d[a] ? (d[a].name && -1 !== p.indexOf(d[a].name) && (u = !0), -1 === p.indexOf(d[a].name) && (o = !1)) : o = !1;
              break;
            case "function":
              v[h](r) ? u = !0 : o = !1;
          }
          u && (e ? (i[e] = i[e] || {}, i[e][f] = s[e][f]) : i[f] = s[f]);
        }
        return o;
      }, n.S = function (t, n, r) {
        var i = 0;
        return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (i += Math.pow(10, r), t.from && t.from[n] && (i += 1), t.to && t.to[n] && (i += 2)), i;
      }, n.N = function (t) {
        var n = this;
        t.priority = 0;
        var r = 0;
        return this.j.forEach(function (i, e) {
          r += n.S(t, i.name, e + 1);
        }), t.priority = r, t;
      }, t;
    }();
  function V(t, n) {
    try {
      var r = t();
    } catch (t) {
      return n(t);
    }
    return r && r.then ? r.then(void 0, n) : r;
  }
  var Y = /*#__PURE__*/function () {
      function t(t) {
        void 0 === t && (t = []), this.logger = new d("@barba/core"), this.store = void 0, this.C = !1, this.store = new K(t);
      }
      var r = t.prototype;
      return r.get = function (t, n) {
        return this.store.resolve(t, n);
      }, r.doOnce = function (t) {
        var n = t.data,
          r = t.transition;
        try {
          var i = function i() {
              e.C = !1;
            },
            e = this,
            o = r || {};
          e.C = !0;
          var u = V(function () {
            return Promise.resolve(e.L("beforeOnce", n, o)).then(function () {
              return Promise.resolve(e.once(n, o)).then(function () {
                return Promise.resolve(e.L("afterOnce", n, o)).then(function () {});
              });
            });
          }, function (t) {
            e.C = !1, e.logger.debug("Transition error [before/after/once]"), e.logger.error(t);
          });
          return Promise.resolve(u && u.then ? u.then(i) : i());
        } catch (t) {
          return Promise.reject(t);
        }
      }, r.doPage = function (t) {
        var n = t.data,
          r = t.transition,
          i = t.page,
          e = t.wrapper;
        try {
          var o = function o(t) {
              u.C = !1;
            },
            u = this,
            s = r || {},
            f = !0 === s.sync || !1;
          u.C = !0;
          var c = V(function () {
            function t() {
              return Promise.resolve(u.L("before", n, s)).then(function () {
                function t(t) {
                  return Promise.resolve(u.remove(n)).then(function () {
                    return Promise.resolve(u.L("after", n, s)).then(function () {});
                  });
                }
                var r = function () {
                  if (f) return V(function () {
                    return Promise.resolve(u.add(n, e)).then(function () {
                      return Promise.resolve(u.L("beforeLeave", n, s)).then(function () {
                        return Promise.resolve(u.L("beforeEnter", n, s)).then(function () {
                          return Promise.resolve(Promise.all([u.leave(n, s), u.enter(n, s)])).then(function () {
                            return Promise.resolve(u.L("afterLeave", n, s)).then(function () {
                              return Promise.resolve(u.L("afterEnter", n, s)).then(function () {});
                            });
                          });
                        });
                      });
                    });
                  }, function (t) {
                    if (u.H(t)) throw new W(t, "Transition error [sync]");
                  });
                  var t = function t(_t) {
                      return V(function () {
                        var t = function () {
                          if (!1 !== r) return Promise.resolve(u.add(n, e)).then(function () {
                            return Promise.resolve(u.L("beforeEnter", n, s)).then(function () {
                              return Promise.resolve(u.enter(n, s, r)).then(function () {
                                return Promise.resolve(u.L("afterEnter", n, s)).then(function () {});
                              });
                            });
                          });
                        }();
                        if (t && t.then) return t.then(function () {});
                      }, function (t) {
                        if (u.H(t)) throw new W(t, "Transition error [before/after/enter]");
                      });
                    },
                    r = !1,
                    o = V(function () {
                      return Promise.resolve(u.L("beforeLeave", n, s)).then(function () {
                        return Promise.resolve(Promise.all([u.leave(n, s), g(i, n)]).then(function (t) {
                          return t[0];
                        })).then(function (t) {
                          return r = t, Promise.resolve(u.L("afterLeave", n, s)).then(function () {});
                        });
                      });
                    }, function (t) {
                      if (u.H(t)) throw new W(t, "Transition error [before/after/leave]");
                    });
                  return o && o.then ? o.then(t) : t();
                }();
                return r && r.then ? r.then(t) : t();
              });
            }
            var r = function () {
              if (f) return Promise.resolve(g(i, n)).then(function () {});
            }();
            return r && r.then ? r.then(t) : t();
          }, function (t) {
            if (u.C = !1, t.name && "BarbaError" === t.name) throw u.logger.debug(t.label), u.logger.error(t.error), t;
            throw u.logger.debug("Transition error [page]"), u.logger.error(t), t;
          });
          return Promise.resolve(c && c.then ? c.then(o) : o());
        } catch (t) {
          return Promise.reject(t);
        }
      }, r.once = function (t, n) {
        try {
          return Promise.resolve(L["do"]("once", t, n)).then(function () {
            return n.once ? S(n.once, n)(t) : Promise.resolve();
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }, r.leave = function (t, n) {
        try {
          return Promise.resolve(L["do"]("leave", t, n)).then(function () {
            return n.leave ? S(n.leave, n)(t) : Promise.resolve();
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }, r.enter = function (t, n, r) {
        try {
          return Promise.resolve(L["do"]("enter", t, n)).then(function () {
            return n.enter ? S(n.enter, n)(t, r) : Promise.resolve();
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }, r.add = function (t, n) {
        try {
          return b.addContainer(t.next.container, n), L["do"]("nextAdded", t), Promise.resolve();
        } catch (t) {
          return Promise.reject(t);
        }
      }, r.remove = function (t) {
        try {
          return b.removeContainer(t.current.container), L["do"]("currentRemoved", t), Promise.resolve();
        } catch (t) {
          return Promise.reject(t);
        }
      }, r.H = function (t) {
        return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status;
      }, r.L = function (t, n, r) {
        try {
          return Promise.resolve(L["do"](t, n, r)).then(function () {
            return r[t] ? S(r[t], r)(n) : Promise.resolve();
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }, n(t, [{
        key: "isRunning",
        get: function get() {
          return this.C;
        },
        set: function set(t) {
          this.C = t;
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
    Z = /*#__PURE__*/function () {
      function t(t) {
        var n = this;
        this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map(), 0 !== t.length && (t.forEach(function (t) {
          n.byNamespace.set(t.namespace, t);
        }), this.names.forEach(function (t) {
          L[t](n._(t));
        }));
      }
      return t.prototype._ = function (t) {
        var n = this;
        return function (r) {
          var i = t.match(/enter/i) ? r.next : r.current,
            e = n.byNamespace.get(i.namespace);
          return e && e[t] ? S(e[t], e)(r) : Promise.resolve();
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
  var tt = {
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
    },
    nt = /*#__PURE__*/function () {
      function t() {
        this.version = "2.10.0", this.schemaPage = tt, this.Logger = d, this.logger = new d("@barba/core"), this.plugins = [], this.timeout = void 0, this.cacheIgnore = void 0, this.cacheFirstPage = void 0, this.prefetchIgnore = void 0, this.preventRunning = void 0, this.hooks = L, this.cache = void 0, this.headers = void 0, this.prevent = void 0, this.transitions = void 0, this.views = void 0, this.dom = b, this.helpers = x, this.history = P, this.request = M, this.url = j, this.D = void 0, this.B = void 0, this.q = void 0, this.F = void 0;
      }
      var i = t.prototype;
      return i.use = function (t, n) {
        var r = this.plugins;
        r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
      }, i.init = function (t) {
        var n = void 0 === t ? {} : t,
          i = n.transitions,
          e = void 0 === i ? [] : i,
          o = n.views,
          u = void 0 === o ? [] : o,
          s = n.schema,
          f = void 0 === s ? m : s,
          c = n.requestError,
          a = n.timeout,
          h = void 0 === a ? 2e3 : a,
          v = n.cacheIgnore,
          l = void 0 !== v && v,
          p = n.cacheFirstPage,
          w = void 0 !== p && p,
          b = n.prefetchIgnore,
          y = void 0 !== b && b,
          P = n.preventRunning,
          g = void 0 !== P && P,
          E = n.prevent,
          x = void 0 === E ? null : E,
          R = n.debug,
          k = n.logLevel;
        if (d.setLevel(!0 === (void 0 !== R && R) ? "debug" : void 0 === k ? "off" : k), this.logger.info(this.version), Object.keys(f).forEach(function (t) {
          m[t] && (m[t] = f[t]);
        }), this.B = c, this.timeout = h, this.cacheIgnore = l, this.cacheFirstPage = w, this.prefetchIgnore = y, this.preventRunning = g, this.q = this.dom.getWrapper(), !this.q) throw new Error("[@barba/core] No Barba wrapper found");
        this.I();
        var O = this.data.current;
        if (!O.container) throw new Error("[@barba/core] No Barba container found");
        if (this.cache = new _(l), this.headers = new D(), this.prevent = new J(y), this.transitions = new Y(e), this.views = new Z(u), null !== x) {
          if ("function" != typeof x) throw new Error("[@barba/core] Prevent should be a function");
          this.prevent.add("preventCustom", x);
        }
        this.history.init(O.url.href, O.namespace), w && this.cache.set(O.url.href, Promise.resolve({
          html: O.html,
          url: O.url
        }), "init", "fulfilled"), this.U = this.U.bind(this), this.$ = this.$.bind(this), this.X = this.X.bind(this), this.G(), this.plugins.forEach(function (t) {
          return t.init();
        });
        var T = this.data;
        T.trigger = "barba", T.next = T.current, T.current = r({}, this.schemaPage), this.hooks["do"]("ready", T), this.once(T), this.I();
      }, i.destroy = function () {
        this.I(), this.J(), this.history.clear(), this.hooks.clear(), this.plugins = [];
      }, i.force = function (t) {
        window.location.assign(t);
      }, i.go = function (t, n, r) {
        var i;
        if (void 0 === n && (n = "barba"), this.F = null, this.transitions.isRunning) this.force(t);else if (!(i = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) && this.url.getQuery(this.history.current.url, !0) === this.url.getQuery(t, !0) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(this.cache.has(t) ? this.cache.get(t).target : t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, null != r ? r : void 0, i);
      }, i.once = function (t) {
        try {
          var n = this;
          return Promise.resolve(n.hooks["do"]("beforeEnter", t)).then(function () {
            function r() {
              return Promise.resolve(n.hooks["do"]("afterEnter", t)).then(function () {});
            }
            var i = function () {
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
            return i && i.then ? i.then(r) : r();
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }, i.page = function (t, n, i, e) {
        try {
          var o,
            u = function u() {
              var t = s.data;
              return Promise.resolve(s.hooks["do"]("page", t)).then(function () {
                var n = function (n, r) {
                  try {
                    var i = (u = s.transitions.get(t, {
                      once: !1,
                      self: e
                    }), Promise.resolve(s.transitions.doPage({
                      data: t,
                      page: o,
                      transition: u,
                      wrapper: s.q
                    })).then(function () {
                      s.I();
                    }));
                  } catch (t) {
                    return r();
                  }
                  var u;
                  return i && i.then ? i.then(void 0, r) : i;
                }(0, function () {
                  0 === d.getLevel() && s.force(t.next.url.href);
                });
                if (n && n.then) return n.then(function () {});
              });
            },
            s = this;
          if (s.data.next.url = r({
            href: t
          }, s.url.parse(t)), s.data.trigger = n, s.data.event = i, s.cache.has(t)) o = s.cache.update(t, {
            action: "click"
          }).request;else {
            var f = s.request(t, s.timeout, s.onRequestError.bind(s, n), s.cache, s.headers);
            f.then(function (r) {
              r.url.href !== t && s.history.add(r.url.href, n, "replace");
            }), o = s.cache.set(t, f, "click", "pending").request;
          }
          var c = function () {
            if (s.transitions.shouldWait) return Promise.resolve(g(o, s.data)).then(function () {});
          }();
          return Promise.resolve(c && c.then ? c.then(u) : u());
        } catch (t) {
          return Promise.reject(t);
        }
      }, i.onRequestError = function (t) {
        this.transitions.isRunning = !1;
        var n = [].slice.call(arguments, 1),
          r = n[0],
          i = n[1],
          e = this.cache.getAction(r);
        return this.cache["delete"](r), this.B && !1 === this.B(t, e, r, i) || "click" === e && this.force(r), !1;
      }, i.prefetch = function (t) {
        var n = this;
        t = this.url.getAbsoluteHref(t), this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba"), this.cache, this.headers)["catch"](function (t) {
          n.logger.error(t);
        }), "prefetch", "pending");
      }, i.G = function () {
        !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.U), document.addEventListener("touchstart", this.U)), document.addEventListener("click", this.$), window.addEventListener("popstate", this.X);
      }, i.J = function () {
        !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.U), document.removeEventListener("touchstart", this.U)), document.removeEventListener("click", this.$), window.removeEventListener("popstate", this.X);
      }, i.U = function (t) {
        var n = this,
          r = this.W(t);
        if (r) {
          var i = this.url.getAbsoluteHref(this.dom.getHref(r));
          this.prevent.checkHref(i) || this.cache.has(i) || this.cache.set(i, this.request(i, this.timeout, this.onRequestError.bind(this, r), this.cache, this.headers)["catch"](function (t) {
            n.logger.error(t);
          }), "enter", "pending");
        }
      }, i.$ = function (t) {
        this.F = t;
        var n = this.W(t);
        if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t);
      }, i.X = function (t) {
        this.F && !this.W(this.F) || this.go(this.url.getHref(), "popstate", t);
      }, i.W = function (t) {
        for (var n = t.target; n && !this.dom.getHref(n);) n = n.parentNode;
        if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n;
      }, i.I = function () {
        var t = this.url.getHref(),
          n = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: r({
              href: t
            }, this.url.parse(t))
          };
        this.D = {
          current: n,
          event: void 0,
          next: r({}, this.schemaPage),
          trigger: void 0
        }, this.hooks["do"]("reset", this.data);
      }, n(t, [{
        key: "data",
        get: function get() {
          return this.D;
        }
      }, {
        key: "wrapper",
        get: function get() {
          return this.q;
        }
      }]), t;
    }();
  return new nt();
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
 * anime.js v3.2.2
 * (c) 2023 Julian Garnier
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
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

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
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

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
}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
  };
}

// BezierEasing https://github.com/gre/bezier-easing

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
    Expo: function Expo() {
      return function (t) {
        return t ? Math.pow(2, 10 * t - 10) : 0;
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
  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint'];
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
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
}

// Arrays

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
}

// Objects

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
}

// Colors

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
}

// Units

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
}

// Values

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
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
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
}

// Path animation

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
}

// Motion path

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
}

// Decompose value

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
}

// Animatables

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
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
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
    };
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    }
    // Default endDelay value should only be applied to the last tween
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
  for (var i = 0; i < propertyNames.length; i++) loop(i);
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
}

// Tweens

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
}

// Tween progress

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
};

// Set Value helper

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
}

// Animations

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
}

// Create Instance

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
}

// Core

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
}

// Public Instance

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
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
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
      }
      // Manual Array.reduce for better performances
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
  };

  // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
  instance._onDocumentVisibility = resetTime;

  // Set Value helper

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
}

// Remove targets from animation

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
}

// Stagger helpers

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
}

// Timeline

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
anime.speed = 1;
// TODO:#review: naming, documentation
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
}

// barba.init({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL21vZHVsZXMvTG9nZ2VyLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvZGVmcy9ob29rcy50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BhdGgtdG8tcmVnZXhwL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvc2NoZW1hcy9hdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy91dGlscy9oaXN0b3J5LnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3V0aWxzL3VybC50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3V0aWxzL3JlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pcy1wcm9taXNlL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3V0aWxzL3J1bi1hc3luYy50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL2hvb2tzLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvbW9kdWxlcy9JZ25vcmUudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy9tb2R1bGVzL0NhY2hlLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvbW9kdWxlcy9IZWFkZXJzLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvbW9kdWxlcy9QcmV2ZW50LnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvbW9kdWxlcy9FcnJvci50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL21vZHVsZXMvU3RvcmUudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4uL3NyYy9tb2R1bGVzL1RyYW5zaXRpb25zLnRzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby8uLi9zcmMvbW9kdWxlcy9WaWV3cy50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3BvbHlmaWxscy9pbmRleC50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL3NjaGVtYXMvcGFnZS50cyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi4vc3JjL2NvcmUudHMiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2FuaW1lanMvbGliL2FuaW1lLmVzLmpzIiwid2VicGFjazovL3RhLXBvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGEtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YS1wb3J0Zm9saW8vLi90aGVtZXMvdGEtcG9ydGZvbGlvL3NyYy9qcy9jb21wb25lbnRzL3RyYW5zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL0xvZ2dlclxuICogPGJyPjxicj5cbiAqICMjIExvZ2dlci5cbiAqXG4gKiAtIERpc3BsYXkgaW5mb3JtYXRpb25zIHZpYSB0aGUgY29uc29sZVxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL0xvZ2dlclxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8qKlxuICogTG9nIGxldmVscywgYWxsIGxvd2VyIGxldmVsIG1lc3NhZ2VzIGFyZSBwcmludGVkXG4gKlxuICogMC4gbXV0ZVxuICogMS4gZXJyb3IgPSBgY29uc29sZS5lcnJvcigpYFxuICogMi4gd2FybmluZz0gYGNvbnNvbGUud2FybigpYFxuICogMy4gaW5mbyA9IGBjb25zb2xlLmluZm8oKWBcbiAqIDQuIGRlYnVnID0gYGNvbnNvbGUubG9nKClgXG4gKi9cbmV4cG9ydCBlbnVtIExvZ0xldmVscyB7XG4gIG9mZiA9IDAsXG4gIGVycm9yID0gMSxcbiAgd2FybmluZyA9IDIsXG4gIGluZm8gPSAzLFxuICBkZWJ1ZyA9IDQsXG59XG5cbi8qKlxuICogR2xvYmFsIGxvZyBsZXZlbFxuICovXG5sZXQgX2xldmVsOiBudW1iZXIgPSBMb2dMZXZlbHMub2ZmO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgLyoqXG4gICAqIEdldCBnbG9iYWwgbG9nIGxldmVsLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRMZXZlbCgpOiBudW1iZXIge1xuICAgIHJldHVybiBfbGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGdsb2JhbCBsb2cgbGV2ZWwuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNldExldmVsKG5hbWU6IGtleW9mIHR5cGVvZiBMb2dMZXZlbHMpOiBudW1iZXIge1xuICAgIF9sZXZlbCA9IExvZ0xldmVsc1tuYW1lXTtcblxuICAgIHJldHVybiBfbGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogTG9nIFwicHJlZml4XCIuXG4gICAqL1xuICBwcml2YXRlIF9zb3VyY2U6IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBMb2dnZXIuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZSA9IHNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJtYW5lbnQsIHVucmVtb3ZhYmxlIGxvZy5cbiAgICovXG4gIC8vIHB1YmxpYyBwcmludCguLi5vYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAvLyAgIHRoaXMuX2xvZyhjb25zb2xlLmluZm8sIExvZ0xldmVscy5vZmYsIG9iamVjdHMpO1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIEVycm9yIGxvZy5cbiAgICovXG4gIHB1YmxpYyBlcnJvciguLi5vYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuX2xvZyhjb25zb2xlLmVycm9yLCBMb2dMZXZlbHMuZXJyb3IsIG9iamVjdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhcm4gbG9nLlxuICAgKi9cbiAgcHVibGljIHdhcm4oLi4ub2JqZWN0czogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLl9sb2coY29uc29sZS53YXJuLCBMb2dMZXZlbHMud2FybmluZywgb2JqZWN0cyk7XG4gIH1cblxuICAvKipcbiAgICogSW5mbyBsb2cuXG4gICAqL1xuICBwdWJsaWMgaW5mbyguLi5vYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuX2xvZyhjb25zb2xlLmluZm8sIExvZ0xldmVscy5pbmZvLCBvYmplY3RzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWJ1ZyBsb2cuXG4gICAqL1xuICBwdWJsaWMgZGVidWcoLi4ub2JqZWN0czogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLl9sb2coY29uc29sZS5sb2csIExvZ0xldmVscy5kZWJ1Zywgb2JqZWN0cyk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgbG9nZ2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBfbG9nKGZuOiAoKSA9PiB2b2lkLCBsZXZlbDogbnVtYmVyLCBvYmplY3RzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmIChsZXZlbCA8PSBMb2dnZXIuZ2V0TGV2ZWwoKSkge1xuICAgICAgZm4uYXBwbHkoY29uc29sZSwgKFtgWyR7dGhpcy5fc291cmNlfV0gYF0uY29uY2F0KG9iamVjdHMpIGFzIHVua25vd24pIGFzIFtcblxuICAgICAgXSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgdHlwaW5ncy9jb3JlXG4gKi9cbmltcG9ydCB7IElUcmFuc2l0aW9uRGF0YSwgSVRyYW5zaXRpb25QYWdlLCBJVmlld0RhdGEgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IHR5cGUgSG9va3NCYXJiYSA9XG4gIHwgJ3JlYWR5J1xuICB8ICdwYWdlJ1xuICB8ICdyZXNldCdcbiAgfCAnY3VycmVudEFkZGVkJ1xuICB8ICdjdXJyZW50UmVtb3ZlZCdcbiAgfCAnbmV4dEFkZGVkJ1xuICB8ICduZXh0UmVtb3ZlZCc7XG5cbmV4cG9ydCB0eXBlIEhvb2tzT25jZSA9ICdiZWZvcmVPbmNlJyB8ICdvbmNlJyB8ICdhZnRlck9uY2UnO1xuXG5leHBvcnQgdHlwZSBIb29rc1BhZ2UgPVxuICB8ICdiZWZvcmUnXG4gIHwgJ2JlZm9yZUxlYXZlJ1xuICB8ICdsZWF2ZSdcbiAgfCAnYWZ0ZXJMZWF2ZSdcbiAgfCAnYmVmb3JlRW50ZXInXG4gIHwgJ2VudGVyJ1xuICB8ICdhZnRlckVudGVyJ1xuICB8ICdhZnRlcic7XG5cbmV4cG9ydCB0eXBlIEhvb2tzQmVmb3JlID0gJ2JlZm9yZU9uY2UnIHwgJ2JlZm9yZUxlYXZlJyB8ICdiZWZvcmVFbnRlcic7XG5leHBvcnQgdHlwZSBIb29rc0FmdGVyID0gJ2FmdGVyT25jZScgfCAnYWZ0ZXJMZWF2ZScgfCAnYWZ0ZXJFbnRlcic7XG5cbmV4cG9ydCB0eXBlIEhvb2tzVHJhbnNpdGlvbiA9IEhvb2tzT25jZSB8IEhvb2tzUGFnZTtcbmV4cG9ydCB0eXBlIEhvb2tzVmlldyA9IEhvb2tzQmVmb3JlIHwgSG9va3NBZnRlcjtcbmV4cG9ydCB0eXBlIEhvb2tzQWxsID0gSG9va3NCYXJiYSB8IEhvb2tzVHJhbnNpdGlvbjtcblxuLy8gQWxsb3cgb3B0aW9uYWwgXCJkeW5hbWljYWxseSBjcmVhdGVkXCIgaG9va3NcbmV4cG9ydCB0eXBlIEhvb2tzVHJhbnNpdGlvbk1hcCA9IHsgW2tleSBpbiBIb29rc1RyYW5zaXRpb25dPzogYW55IH07XG5cbmV4cG9ydCB0eXBlIEhvb2tGdW5jdGlvbiA9IChcbiAgZGF0YT86IElUcmFuc2l0aW9uRGF0YSB8IElWaWV3RGF0YSxcbiAgdD86IElUcmFuc2l0aW9uUGFnZVxuKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZDtcblxuZXhwb3J0IGNsYXNzIEhvb2tNZXRob2RzIHtcbiAgcHVibGljIGJlZm9yZTogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGJlZm9yZUxlYXZlOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgbGVhdmU6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBhZnRlckxlYXZlOiAoZm46IEhvb2tGdW5jdGlvbiwgY3R4PzogYW55KSA9PiB2b2lkO1xuICBwdWJsaWMgYmVmb3JlRW50ZXI6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBlbnRlcjogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbiAgcHVibGljIGFmdGVyRW50ZXI6IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHZvaWQ7XG4gIHB1YmxpYyBhZnRlcjogKGZuOiBIb29rRnVuY3Rpb24sIGN0eD86IGFueSkgPT4gdm9pZDtcbn1cbiIsIi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIi5jb25jYXQoaSkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIuY29uY2F0KGopKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIi5jb25jYXQoaikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIi5jb25jYXQoaSkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIuY29uY2F0KGkpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIuY29uY2F0KGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSwgXCJdKz9cIik7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiLmNvbmNhdChuZXh0VHlwZSwgXCIgYXQgXCIpLmNvbmNhdChpbmRleCwgXCIsIGV4cGVjdGVkIFwiKS5jb25jYXQodHlwZSkpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiLmNvbmNhdCh0b2tlbi5wYXR0ZXJuLCBcIikkXCIpLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIi5jb25jYXQodG9rZW4ubmFtZSwgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiLmNvbmNhdCh0b2tlbi5uYW1lLCBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIuY29uY2F0KHRva2VuLm5hbWUsIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIpLmNvbmNhdCh0b2tlbi5wYXR0ZXJuLCBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiKS5jb25jYXQoc2VnbWVudCwgXCJcXFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIi5jb25jYXQodG9rZW4ubmFtZSwgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIikuY29uY2F0KHRva2VuLnBhdHRlcm4sIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIpLmNvbmNhdChzZWdtZW50LCBcIlxcXCJcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIuY29uY2F0KHRva2VuLm5hbWUsIFwiXFxcIiB0byBiZSBcIikuY29uY2F0KHR5cGVPZk1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgdmFyIGdyb3Vwc1JlZ2V4ID0gL1xcKCg/OlxcPzwoLio/KT4pPyg/IVxcPykvZztcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBleGVjUmVzdWx0ID0gZ3JvdXBzUmVnZXguZXhlYyhwYXRoLnNvdXJjZSk7XG4gICAgd2hpbGUgKGV4ZWNSZXN1bHQpIHtcbiAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgIC8vIFVzZSBwYXJlbnRoZXNpemVkIHN1YnN0cmluZyBtYXRjaCBpZiBhdmFpbGFibGUsIGluZGV4IG90aGVyd2lzZVxuICAgICAgICAgICAgbmFtZTogZXhlY1Jlc3VsdFsxXSB8fCBpbmRleCsrLFxuICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICBwYXR0ZXJuOiBcIlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgZXhlY1Jlc3VsdCA9IGdyb3Vwc1JlZ2V4LmV4ZWMocGF0aC5zb3VyY2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIuY29uY2F0KHBhcnRzLmpvaW4oXCJ8XCIpLCBcIilcIiksIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZCwgX2UgPSBvcHRpb25zLmRlbGltaXRlciwgZGVsaW1pdGVyID0gX2UgPT09IHZvaWQgMCA/IFwiLyM/XCIgOiBfZSwgX2YgPSBvcHRpb25zLmVuZHNXaXRoLCBlbmRzV2l0aCA9IF9mID09PSB2b2lkIDAgPyBcIlwiIDogX2Y7XG4gICAgdmFyIGVuZHNXaXRoUmUgPSBcIltcIi5jb25jYXQoZXNjYXBlU3RyaW5nKGVuZHNXaXRoKSwgXCJdfCRcIik7XG4gICAgdmFyIGRlbGltaXRlclJlID0gXCJbXCIuY29uY2F0KGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpLCBcIl1cIik7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIi5jb25jYXQocHJlZml4LCBcIigoPzpcIikuY29uY2F0KHRva2VuLnBhdHRlcm4sIFwiKSg/OlwiKS5jb25jYXQoc3VmZml4KS5jb25jYXQocHJlZml4LCBcIig/OlwiKS5jb25jYXQodG9rZW4ucGF0dGVybiwgXCIpKSopXCIpLmNvbmNhdChzdWZmaXgsIFwiKVwiKS5jb25jYXQobW9kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIuY29uY2F0KHByZWZpeCwgXCIoXCIpLmNvbmNhdCh0b2tlbi5wYXR0ZXJuLCBcIilcIikuY29uY2F0KHN1ZmZpeCwgXCIpXCIpLmNvbmNhdCh0b2tlbi5tb2RpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIigoPzpcIi5jb25jYXQodG9rZW4ucGF0dGVybiwgXCIpXCIpLmNvbmNhdCh0b2tlbi5tb2RpZmllciwgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIuY29uY2F0KHRva2VuLnBhdHRlcm4sIFwiKVwiKS5jb25jYXQodG9rZW4ubW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIi5jb25jYXQocHJlZml4KS5jb25jYXQoc3VmZml4LCBcIilcIikuY29uY2F0KHRva2VuLm1vZGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gXCJcIi5jb25jYXQoZGVsaW1pdGVyUmUsIFwiP1wiKTtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIuY29uY2F0KGVuZHNXaXRoUmUsIFwiKVwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXJSZS5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiLmNvbmNhdChkZWxpbWl0ZXJSZSwgXCIoPz1cIikuY29uY2F0KGVuZHNXaXRoUmUsIFwiKSk/XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIuY29uY2F0KGRlbGltaXRlclJlLCBcInxcIikuY29uY2F0KGVuZHNXaXRoUmUsIFwiKVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEBiYXJiYS9jb3JlL3NjaGVtYXNcbiAqIDxicj48YnI+XG4gKiAjIyBTY2hlbWFzIGRlc2NyaXB0aW9uLlxuICpcbiAqIEBtb2R1bGUgY29yZS9zY2hlbWFzXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElTY2hlbWFBdHRyaWJ1dGUgfSBmcm9tICcuLi9kZWZzJztcblxuLyoqXG4gKiBTZWUgW1tJU2NoZW1hQXR0cmlidXRlXV1cbiAqL1xuZXhwb3J0IGNvbnN0IHNjaGVtYUF0dHJpYnV0ZTogSVNjaGVtYUF0dHJpYnV0ZSA9IHtcbiAgY29udGFpbmVyOiAnY29udGFpbmVyJyxcbiAgaGlzdG9yeTogJ2hpc3RvcnknLFxuICBuYW1lc3BhY2U6ICduYW1lc3BhY2UnLFxuICBwcmVmaXg6ICdkYXRhLWJhcmJhJyxcbiAgcHJldmVudDogJ3ByZXZlbnQnLFxuICB3cmFwcGVyOiAnd3JhcHBlcicsXG59O1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS91dGlscy9kb21cbiAqIDxicj48YnI+XG4gKiAjIyBEb20gdXRpbHNcbiAqXG4gKiAtIEFjY2VzcyBET00gY29udGVudHNcbiAqIC0gRE9NIHZzIHN0cmluZyBjb252ZXJzaW9uc1xuICpcbiAqIEBtb2R1bGUgY29yZS91dGlscy9kb21cbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElEb21TaWJsaW5nLCBJU2NoZW1hQXR0cmlidXRlLCBMaW5rLCBTY29wZSwgV3JhcHBlciB9IGZyb20gJy4uL2RlZnMnO1xuLy8gU2NoZW1hc1xuaW1wb3J0IHsgc2NoZW1hQXR0cmlidXRlIH0gZnJvbSAnLi4vc2NoZW1hcy9hdHRyaWJ1dGUnO1xuXG5leHBvcnQgY2xhc3MgRG9tIHtcbiAgcHJpdmF0ZSBfYXR0cjogSVNjaGVtYUF0dHJpYnV0ZSA9IHNjaGVtYUF0dHJpYnV0ZTtcbiAgcHJpdmF0ZSBfcGFyc2VyOiBET01QYXJzZXI7XG4gIHByaXZhdGUgX3NpYmxpbmc6IElEb21TaWJsaW5nID0ge1xuICAgIGFmdGVyOiBudWxsLFxuICAgIGJlZm9yZTogbnVsbCxcbiAgICBwYXJlbnQ6IG51bGxcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBIVE1MRG9jdW1lbnQgdG8gc3RyaW5nLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKGVsOiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsLm91dGVySFRNTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBIVE1MIHN0cmluZyB0byBIVE1MRG9jdW1lbnQuXG4gICAqL1xuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JhcmJhanMvYmFyYmEvaXNzdWVzLzM2MlxuICAvLyBTZWVtcyB0aGF0IHVzaW5nIERPTVBhcnNlci5wYXJzZUZyb21TdHJpbmcgY2F1c2VzIHRoaXMgaXNzdWUuXG4gIHB1YmxpYyB0b0RvY3VtZW50KGh0bWxTdHJpbmc6IHN0cmluZyk6IEhUTUxEb2N1bWVudCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoIXRoaXMuX3BhcnNlcikge1xuICAgICAgdGhpcy5fcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sU3RyaW5nLCAndGV4dC9odG1sJyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgSFRNTCBzdHJpbmcgdG8gRElWRWxlbWVudC5cbiAgICpcbiAgICogRE9NUGFyc2VyLnBhcnNlRnJvbVN0cmluZyBmYWlscyB3aXRoIGltZ1tzcmNzZXRdIG9uIGlPUy5cbiAgICogc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJiYWpzL2JhcmJhL2lzc3Vlcy8zNjJcbiAgICovXG4gIHB1YmxpYyB0b0VsZW1lbnQoaHRtbFN0cmluZzogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgSFRNTCBjb250ZW50LlxuICAgKi9cbiAgcHVibGljIGdldEh0bWwoZG9jOiBIVE1MRG9jdW1lbnQgPSBkb2N1bWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoZG9jLmRvY3VtZW50RWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZ1bGwgZG9jdW1lbnQgY29udGVudC5cbiAgICovXG4gIC8vIGdldERvY3VtZW50KGVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gIC8vICAgcmV0dXJuIHRoaXMudG9TdHIoZWwpO1xuICAvLyB9LFxuXG4gIC8qKlxuICAgKiBHZXQgYFtkYXRhLWJhcmJhPVwid3JhcHBlclwiXWAuXG4gICAqL1xuICBwdWJsaWMgZ2V0V3JhcHBlcihzY29wZTogU2NvcGUgPSBkb2N1bWVudCk6IFdyYXBwZXIge1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFske3RoaXMuX2F0dHIucHJlZml4fT1cIiR7dGhpcy5fYXR0ci53cmFwcGVyfVwiXWBcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBgW2RhdGEtYmFyYmE9XCJjb250YWluZXJcIl1gLlxuICAgKi9cbiAgcHVibGljIGdldENvbnRhaW5lcihzY29wZTogU2NvcGUgPSBkb2N1bWVudCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgWyR7dGhpcy5fYXR0ci5wcmVmaXh9PVwiJHt0aGlzLl9hdHRyLmNvbnRhaW5lcn1cIl1gXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY29udGFpbmVyIGFuZCBzdG9yZSBuZXh0IHNpYmxpbmcgKGlmIGFwcGxpY2FibGUpLlxuICAgKi9cbiAgcHVibGljIHJlbW92ZUNvbnRhaW5lcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMoY29udGFpbmVyKSkge1xuICAgICAgdGhpcy5fdXBkYXRlU2libGluZyhjb250YWluZXIpO1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNvbnRhaW5lciBuZWFyIHByZXZpb3VzIGNvbnRhaW5lclxuICAgKi9cbiAgcHVibGljIGFkZENvbnRhaW5lcihjb250YWluZXI6IEhUTUxFbGVtZW50LCB3cmFwcGVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHNpYmxpbmdCZWZvcmUgPSB0aGlzLmdldENvbnRhaW5lcigpIHx8IHRoaXMuX3NpYmxpbmcuYmVmb3JlO1xuXG4gICAgaWYgKHNpYmxpbmdCZWZvcmUpIHtcbiAgICAgIHRoaXMuX2luc2VydEFmdGVyKGNvbnRhaW5lciwgc2libGluZ0JlZm9yZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zaWJsaW5nLmFmdGVyKSB7XG4gICAgICB0aGlzLl9zaWJsaW5nLmFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgdGhpcy5fc2libGluZy5hZnRlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zaWJsaW5nLnBhcmVudCkge1xuICAgICAgdGhpcy5fc2libGluZy5wYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBkb20gc2libGluZ1xuICAgKi9cbiAgcHVibGljIGdldFNpYmxpbmcoKTogSURvbVNpYmxpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaWJsaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBgW2RhdGEtYmFyYmEtbmFtZXNwYWNlXWAuXG4gICAqL1xuICBwdWJsaWMgZ2V0TmFtZXNwYWNlKHNjb3BlOiBTY29wZSA9IGRvY3VtZW50KTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgbnMgPSBzY29wZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFske3RoaXMuX2F0dHIucHJlZml4fS0ke3RoaXMuX2F0dHIubmFtZXNwYWNlfV1gXG4gICAgKTtcblxuICAgIHJldHVybiBuc1xuICAgICAgPyBucy5nZXRBdHRyaWJ1dGUoYCR7dGhpcy5fYXR0ci5wcmVmaXh9LSR7dGhpcy5fYXR0ci5uYW1lc3BhY2V9YClcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgVVJMIGZyb20gYGhyZWZgIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIGdldEhyZWYoZWw6IExpbmspOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyBIVE1MIHRhZ05hbWUgaXMgVVBQRVJDQVNFLCB4aHRtbCB0YWdOYW1lIGtlZXBzIGV4aXN0aW5nIGNhc2UuXG4gICAgaWYgKGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScpIHtcbiAgICAgIC8vIEhUTUxBbmNob3JFbGVtZW50LCBmdWxsIFVSTCBhdmFpbGFibGVcbiAgICAgIGlmICh0eXBlb2YgZWwuaHJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGVsLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2JhYmx5IGEgU1ZHQUVsZW1lbnTigKZcbiAgICAgIGNvbnN0IGhyZWYgPSBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3hsaW5rOmhyZWYnKTtcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChocmVmKSB7XG4gICAgICAgIC8vIFdoZW4gbGluayBjb21lcyBmcm9tIFNWRywgYGhyZWZgIHJldHVybnMgYW4gb2JqZWN0LCBub3QgYSBzdHJpbmcuXG4gICAgICAgIGNvbnN0IGF0dHI6IHN0cmluZyA9XG4gICAgICAgICAgKChocmVmIGFzIHVua25vd24pIGFzIFNWR0FuaW1hdGVkU3RyaW5nKS5iYXNlVmFsIHx8IGhyZWY7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZVVybChhdHRyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBDb3B5cmlnaHQgMjAxNCBTaW1vbiBMeWRlbGxcbiAgLy8gWDExICjigJxNSVTigJ0pIExpY2Vuc2VkLiAoU2VlIExJQ0VOU0VcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2x5ZGVsbC9yZXNvbHZlLXVybC9ibG9iL21hc3Rlci9yZXNvbHZlLXVybC5qc1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBwdWJsaWMgcmVzb2x2ZVVybCguLi51cmxzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IG51bVVybHMgPSB1cmxzLmxlbmd0aDtcblxuICAgIGlmIChudW1VcmxzID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jlc29sdmVVcmwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50OyBnb3Qgbm9uZS4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYmFzZScpO1xuICAgIGJhc2UuaHJlZiA9IGFyZ3VtZW50c1swXTtcblxuICAgIGlmIChudW1VcmxzID09PSAxKSB7XG4gICAgICByZXR1cm4gYmFzZS5ocmVmO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGJhc2UsIGhlYWQuZmlyc3RDaGlsZCk7XG5cbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCByZXNvbHZlZDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBudW1VcmxzOyBpbmRleCsrKSB7XG4gICAgICBhLmhyZWYgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgcmVzb2x2ZWQgPSBhLmhyZWY7XG4gICAgICBiYXNlLmhyZWYgPSByZXNvbHZlZDtcbiAgICB9XG5cbiAgICBoZWFkLnJlbW92ZUNoaWxkKGJhc2UpO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBub2RlIGFmdGVyIGFub3RoZXIgbm9kZS5cbiAgICovXG4gIHByaXZhdGUgX2luc2VydEFmdGVyKG5ld05vZGU6IE5vZGUsIHJlZmVyZW5jZU5vZGU6IE5vZGUpIHtcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjdXJyZW50IGRvbSBzaWJsaW5nIHJlZ2FyZGluZyBjb250YWluZXJcbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZVNpYmxpbmcoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IElEb21TaWJsaW5nIHtcbiAgICB0aGlzLl9zaWJsaW5nID0ge1xuICAgICAgYWZ0ZXI6IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcsXG4gICAgICBiZWZvcmU6IGNvbnRhaW5lci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLFxuICAgICAgcGFyZW50OiBjb250YWluZXIucGFyZW50RWxlbWVudFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fc2libGluZztcbiAgfVxufVxuXG5jb25zdCBkb20gPSBuZXcgRG9tKCk7XG5cbmV4cG9ydCB7IGRvbSB9O1xuIiwiaW1wb3J0IHsgSGlzdG9yeUFjdGlvbiwgTGlua0V2ZW50LCBUcmlnZ2VyIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBTY2hlbWFzXG5pbXBvcnQgeyBzY2hlbWFBdHRyaWJ1dGUgfSBmcm9tICcuLi9zY2hlbWFzL2F0dHJpYnV0ZSc7XG5cbi8qKlxuICogQGJhcmJhL2NvcmUvdXRpbHMvaGlzdG9yeVxuICogPGJyPjxicj5cbiAqICMjIEhpc3RvcnkgbWFuYWdlci5cbiAqXG4gKiAtIEtlZXAgdHJhY2sgb2YgdGhlIG5hdmlnYXRpb24gaGlzdG9yeVxuICpcbiAqIEBtb2R1bGUgY29yZS91dGlscy9oaXN0b3J5XG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqXG4gKiBTdGF0ZSBpdGVtLlxuICpcbiAqIEBwcm9wZXJ0eSBmcm9tXG4gKiBAcHJvcGVydHkgaW5kZXhcbiAqL1xuaW50ZXJmYWNlIElIaXN0b3J5SXRlbSB7XG4gIC8qKiBvcmlnaW4gKi9cbiAgZnJvbTogc3RyaW5nO1xuICAvKiogaW5kZXggKi9cbiAgaW5kZXg6IG51bWJlcjtcbiAgLyoqIHN0YXRlcyAqL1xuICBzdGF0ZXM6IElTdGF0ZUl0ZW1bXTtcbn1cblxuLyoqKi9cbmludGVyZmFjZSBJQ29vcmRzIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbi8qKlxuICogSGlzdG9yeSBpdGVtLlxuICpcbiAqIEBwcm9wZXJ0eSBuYW1lc3BhY2VcbiAqIEBwcm9wZXJ0eSBzY3JvbGxcbiAqIEBwcm9wZXJ0eSBVUkxcbiAqL1xuaW50ZXJmYWNlIElTdGF0ZUl0ZW0ge1xuICAvKiogZGF0YSAqL1xuICBkYXRhOiBvYmplY3Q7XG4gIC8qKiBuYW1lc3BhY2UgKi9cbiAgbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgLyoqIFNjcm9sbCBwb3NpdGlvbiAqL1xuICBzY3JvbGw6IElDb29yZHM7XG4gIC8qKiBVUkwgKi9cbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBIaXN0b3J5IHtcbiAgcHJpdmF0ZSBfc2Vzc2lvbjogc3RyaW5nO1xuICBwcml2YXRlIF9zdGF0ZXM6IElTdGF0ZUl0ZW1bXSA9IFtdO1xuICBwcml2YXRlIF9wb2ludGVyID0gLTE7XG5cbiAgLyoqXG4gICAqIEluaXQgd2l0aCBmaXJzdCBzdGF0ZS5cbiAgICovXG4gIHB1YmxpYyBpbml0KHVybDogc3RyaW5nLCBuczogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2Vzc2lvbiA9ICdiYXJiYSc7XG5cbiAgICBjb25zdCBzdGF0ZTogSVN0YXRlSXRlbSA9IHtcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgbnMsXG4gICAgICBzY3JvbGw6IHtcbiAgICAgICAgeDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgIHk6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgfSxcbiAgICAgIHVybCxcbiAgICB9O1xuXG4gICAgdGhpcy5fcG9pbnRlciA9IDA7XG4gICAgdGhpcy5fc3RhdGVzLnB1c2goc3RhdGUpO1xuXG4gICAgY29uc3QgaXRlbTogSUhpc3RvcnlJdGVtID0ge1xuICAgICAgZnJvbTogdGhpcy5fc2Vzc2lvbixcbiAgICAgIGluZGV4OiB0aGlzLl9wb2ludGVyLFxuICAgICAgc3RhdGVzOiBbLi4udGhpcy5fc3RhdGVzXSxcbiAgICB9O1xuXG4gICAgd2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGl0ZW0sICcnLCB1cmwpO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0cmlnZ2VyOiBUcmlnZ2VyLFxuICAgIGU/OiBMaW5rRXZlbnQgfCBQb3BTdGF0ZUV2ZW50XG4gICk6IFRyaWdnZXIge1xuICAgIGlmIChlICYmIChlIGFzIFBvcFN0YXRlRXZlbnQpLnN0YXRlKSB7XG4gICAgICAvLyBJZiBwb3BzdGF0ZSwgbW92ZSB0byBleGlzdGluZyBzdGF0ZVxuICAgICAgLy8gYW5kIGdldCBiYWNrL2ZvcndhcmQgZGlyZWN0aW9uLlxuICAgICAgY29uc3QgeyBzdGF0ZSB9OiB7IHN0YXRlOiBJSGlzdG9yeUl0ZW0gfSA9IGUgYXMgUG9wU3RhdGVFdmVudDtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IHN0YXRlO1xuICAgICAgY29uc3QgZGlmZiA9IHRoaXMuX3BvaW50ZXIgLSBpbmRleDtcblxuICAgICAgdHJpZ2dlciA9IHRoaXMuX2dldERpcmVjdGlvbihkaWZmKTtcblxuICAgICAgLy8gV29yayB3aXRoIHByZXZpb3VzIHN0YXRlc1xuICAgICAgdGhpcy5yZXBsYWNlKHN0YXRlLnN0YXRlcyk7XG4gICAgICB0aGlzLl9wb2ludGVyID0gaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCBuZXcgc3RhdGVcbiAgICAgIHRoaXMuYWRkKHVybCwgdHJpZ2dlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaWdnZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IHN0YXRlLlxuICAgKi9cbiAgcHVibGljIGFkZCh1cmw6IHN0cmluZywgdHJpZ2dlcjogVHJpZ2dlciwgYWN0aW9uPzogSGlzdG9yeUFjdGlvbiwgZGF0YT86IG9iamVjdCk6IHZvaWQge1xuICAgIC8vIElmIG5vIHN0YXRlLCBpdCB3aWxsIGJlIHVwZGF0ZWQgbGF0ZXIuXG4gICAgY29uc3QgbnMgPSAndG1wJztcbiAgICBjb25zdCBtZXRob2QgPSBhY3Rpb24gPz8gdGhpcy5fZ2V0QWN0aW9uKHRyaWdnZXIpO1xuICAgIGNvbnN0IHN0YXRlOiBJU3RhdGVJdGVtID0ge1xuICAgICAgZGF0YTogZGF0YSA/PyB7fSxcbiAgICAgIG5zLFxuICAgICAgc2Nyb2xsOiB7XG4gICAgICAgIHg6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICB5OiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgIH0sXG4gICAgICB1cmwsXG4gICAgfTtcblxuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgdGhpcy5fcG9pbnRlciA9IHRoaXMuc2l6ZTtcbiAgICAgICAgdGhpcy5fc3RhdGVzLnB1c2goc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICB0aGlzLnNldCh0aGlzLl9wb2ludGVyLCBzdGF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbTogSUhpc3RvcnlJdGVtID0ge1xuICAgICAgZnJvbTogdGhpcy5fc2Vzc2lvbixcbiAgICAgIGluZGV4OiB0aGlzLl9wb2ludGVyLFxuICAgICAgc3RhdGVzOiBbLi4udGhpcy5fc3RhdGVzXSxcbiAgICB9O1xuXG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaXRlbSwgJycsIHVybCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5ICYmIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShpdGVtLCAnJywgdXJsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcmUgY3VzdG9tIHVzZXIgZGF0YSBwZXIgc3RhdGUuXG4gICAqL1xuICAgcHVibGljIHN0b3JlKGRhdGE6IG9iamVjdCwgaT86IG51bWJlcik6IHZvaWQge1xuICAgICBjb25zdCBpbmRleCA9IGkgfHwgdGhpcy5fcG9pbnRlcjtcbiAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldChpbmRleCk7XG5cbiAgICAgLy8gbWVyZ2UgZGF0YSAoYWxsb3cgZGF0YSBvdmVyd3JpdGUpXG4gICAgIHN0YXRlLmRhdGEgPSB7XG4gICAgICAgLi4uc3RhdGUuZGF0YSxcbiAgICAgICAuLi5kYXRhXG4gICAgIH07XG5cbiAgICAgLy8gdXBkYXRlIHN0YXRlc1xuICAgICB0aGlzLnNldChpbmRleCwgc3RhdGUpO1xuXG4gICAgIGNvbnN0IGl0ZW06IElIaXN0b3J5SXRlbSA9IHtcbiAgICAgICBmcm9tOiB0aGlzLl9zZXNzaW9uLFxuICAgICAgIGluZGV4OiB0aGlzLl9wb2ludGVyLFxuICAgICAgIHN0YXRlczogWy4uLnRoaXMuX3N0YXRlc10sXG4gICAgIH07XG5cbiAgICAgLy8gdXBkYXRlIGJyb3dzZXIgaGlzdG9yeVxuICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoaXRlbSwgJycpO1xuICAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc3RhdGUuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGRhdGE6IGFueSwgaT86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gaSB8fCB0aGlzLl9wb2ludGVyO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5nZXQoaW5kZXgpO1xuICAgIGNvbnN0IHN0YXRlOiBJU3RhdGVJdGVtID0ge1xuICAgICAgLi4uZXhpc3RpbmcsXG4gICAgICAuLi5kYXRhLFxuICAgIH07XG5cbiAgICB0aGlzLnNldChpbmRleCwgc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsYXN0IHN0YXRlLlxuICAgKi9cbiAgcHVibGljIHJlbW92ZShpPzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGkpIHtcbiAgICAgIHRoaXMuX3N0YXRlcy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlcy5wb3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wb2ludGVyLS07XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFsbCBzdGF0ZXMuXG4gICAqL1xuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdGVzID0gW107XG4gICAgdGhpcy5fcG9pbnRlciA9IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgYWxsIHN0YXRlcy5cbiAgICovXG4gIHB1YmxpYyByZXBsYWNlKG5ld1N0YXRlczogSVN0YXRlSXRlbVtdKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdGVzID0gbmV3U3RhdGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0ZSBieSBpbmRleC5cbiAgICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IElTdGF0ZUl0ZW0ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZXNbaW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzdGF0ZSBieSBpbmRleC5cbiAgICovXG4gIHB1YmxpYyBzZXQoaTogbnVtYmVyLCBzdGF0ZTogSVN0YXRlSXRlbSkge1xuICAgIHJldHVybiAodGhpcy5fc3RhdGVzW2ldID0gc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBzdGF0ZS5cbiAgICovXG4gIGdldCBjdXJyZW50KCk6IElTdGF0ZUl0ZW0ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZXNbdGhpcy5fcG9pbnRlcl07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwcmV2aW91cyBzdGF0ZS5cbiAgICovXG4gIGdldCBwcmV2aW91cygpOiBJU3RhdGVJdGVtIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50ZXIgPCAxID8gbnVsbCA6IHRoaXMuX3N0YXRlc1t0aGlzLl9wb2ludGVyIC0gMV07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdGF0ZSBzaXplLlxuICAgKi9cbiAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhpc3RvcnkgYWN0aW9uOiBwdXNoIHZzIHJlcGxhY2VcbiAgICovXG4gIHByaXZhdGUgX2dldEFjdGlvbih0cmlnZ2VyOiBUcmlnZ2VyKTogSGlzdG9yeUFjdGlvbiB7XG4gICAgbGV0IGFjdGlvbjogSGlzdG9yeUFjdGlvbiA9ICdwdXNoJztcblxuICAgIC8vIE1hbmFnZSBgZGF0YS1iYXJiYS1oaXN0b3J5YCBhdHRyaWJ1dGVcbiAgICAvLyB0byBnZXQgdGhlIHJpZ2h0IGFjdGlvbiAocHVzaCB2cyByZXBsYWNlKS5cbiAgICBjb25zdCBlbCA9IHRyaWdnZXIgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgY29uc3QgYXR0ciA9IGAke3NjaGVtYUF0dHJpYnV0ZS5wcmVmaXh9LSR7c2NoZW1hQXR0cmlidXRlLmhpc3Rvcnl9YDtcblxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUgJiYgZWwuaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICBhY3Rpb24gPSBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgYXMgSGlzdG9yeUFjdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGlyZWN0aW9uIG9mIHBvcHN0YXRlIGNoYW5nZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0RGlyZWN0aW9uKGRpZmY6IG51bWJlcik6IFRyaWdnZXIge1xuICAgIC8vIENoZWNrIGlmIFwic2Vzc2lvbiBzd2l0Y2hcIlxuICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IDEpIHtcbiAgICAgIC8vIEV4IDYtMCA+IDAgLT4gZm9yd2FyZCwgMC02IDwgMCAtPiBiYWNrXG4gICAgICByZXR1cm4gZGlmZiA+IDAgPyAnZm9yd2FyZCcgOiAnYmFjayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgIHJldHVybiAncG9wc3RhdGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRXggNi01ID4gMCAtPiBiYWNrLCA1LTYgPCAwIC0+IGZvcndhcmRcbiAgICAgICAgcmV0dXJuIGRpZmYgPiAwID8gJ2JhY2snIDogJ2ZvcndhcmQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBoaXN0b3J5ID0gbmV3IEhpc3RvcnkoKTtcblxuZXhwb3J0IHsgaGlzdG9yeSB9O1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS91dGlscy9oZWxwZXJzXG4gKiA8YnI+PGJyPlxuICogIyMgSGVscGVyc1xuICpcbiAqIC0gVXBkYXRlIG5leHQgcGFnZSBkYXRhXG4gKlxuICogQG1vZHVsZSBjb3JlL3V0aWxzL2hlbHBlcnNcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBUaGlyZC1wYXJ0eVxuaW1wb3J0IHsgcGF0aFRvUmVnZXhwIGFzIHB0ciB9IGZyb20gJ3BhdGgtdG8tcmVnZXhwJztcbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJUmVzcG9uc2UsIElUcmFuc2l0aW9uRGF0YSB9IGZyb20gJy4uL2RlZnMnO1xuLy8gVXRpbHNcbmltcG9ydCB7IGRvbSB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IGhpc3RvcnkgfSBmcm9tICcuL2hpc3RvcnknO1xuXG4vKipcbiAqIFVwZGF0ZSBgZGF0YS5uZXh0YCwgdGhlIHRpdGxlIGFuZCB0aGUgaGlzdG9yeVxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlID0gYXN5bmMgKFxuICBwYWdlOiBQcm9taXNlPElSZXNwb25zZSB8IHZvaWQ+LFxuICBkYXRhOiBJVHJhbnNpdGlvbkRhdGFcbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAvLyBJZiBub3QgYWxyZWFkeSB1cGRhdGVkXG4gIGlmICghZGF0YS5uZXh0Lmh0bWwpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBhZ2U7XG4gICAgY29uc3QgeyBuZXh0IH0gPSBkYXRhO1xuXG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJiYWpzL2JhcmJhL2lzc3Vlcy8zNjJcbiAgICAgIC8vIGNvbnN0IG5leHREb2N1bWVudCA9IGRvbS50b0RvY3VtZW50KGh0bWwpO1xuICAgICAgY29uc3QgbmV4dERvY3VtZW50ID0gZG9tLnRvRWxlbWVudChyZXNwb25zZS5odG1sKTtcblxuICAgICAgbmV4dC5uYW1lc3BhY2UgPSBkb20uZ2V0TmFtZXNwYWNlKG5leHREb2N1bWVudCk7XG4gICAgICBuZXh0LmNvbnRhaW5lciA9IGRvbS5nZXRDb250YWluZXIobmV4dERvY3VtZW50KTtcbiAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmFyYmFqcy9iYXJiYS9pc3N1ZXMvMzYyXG4gICAgICAvLyBuZXh0Lmh0bWwgPSBkb20uZ2V0SHRtbChuZXh0RG9jdW1lbnQpO1xuICAgICAgLy8gbmV4dC5odG1sID0gbmV4dERvY3VtZW50LmlubmVySFRNTDtcbiAgICAgIG5leHQudXJsID0gcmVzcG9uc2UudXJsO1xuICAgICAgbmV4dC5odG1sID0gcmVzcG9uc2UuaHRtbDtcblxuICAgICAgLy8gVXBkYXRlIGhpc3RvcnkgbmFtZXNwYWNlIChub3QgYXZhaWxhYmxlIHdoZW4gaW5pdGlhbGx5IHNldClcbiAgICAgIGhpc3RvcnkudXBkYXRlKHsgbnM6IG5leHQubmFtZXNwYWNlIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgdGl0bGUuXG4gICAgICBjb25zdCB7IHRpdGxlIH0gPSBkb20udG9Eb2N1bWVudChyZXNwb25zZS5odG1sKTtcblxuICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogTmV4dCB0aWNrXG4gKi9cbmV4cG9ydCBjb25zdCBuZXh0VGljayA9ICgpID0+XG4gIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzb2x2ZSk7XG4gICAgLy8gREVWOiBzYW1lIHJlc3VsdD9cbiAgICAvLyBzZXRUaW1lb3V0KHJlc29sdmUsIDApO1xuICB9KTtcblxuLyoqXG4gKiBUdXJuIGEgcm91dGUgc3RyaW5nIHN1Y2ggYXMgYC91c2VyLzpuYW1lYCBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIFVzZWQgZm9yOlxuICpcbiAqIC0gcm91dGVzIHRvIGlnbm9yZVxuICogLSByb3V0ZSB0cmFuc2l0aW9uIHJlc29sdXRpb25cbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3BhdGgtdG8tcmVnZXhwXG4gKi9cbmNvbnN0IHBhdGhUb1JlZ2V4cCA9IHB0cjtcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH07XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL3V0aWxzL3VybFxuICogPGJyPjxicj5cbiAqICMjIFVSTCB1dGlscy5cbiAqXG4gKiAtIENvbGxlY3QgYW5kIHN0cnVjdHVyZSBpbmZvcm1hdGlvbnMgZnJvbSBVUkxzXG4gKlxuICogQG1vZHVsZSBjb3JlL3V0aWxzL3VybFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBJR2VuZXJpY09iamVjdCwgSVVybEJhc2UgfSBmcm9tICcuLi9kZWZzJztcblxuLyoqXG4gKiBHZXQgbG9jYXRpb24gaHJlZi5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEhyZWYgPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuLyoqXG4gKiBHZXQgYWJzb2x1dGUgaHJlZiBmcm9tIFVSTC5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFic29sdXRlSHJlZiA9ICh1cmw6IHN0cmluZywgYmFzZTogc3RyaW5nID0gZG9jdW1lbnQuYmFzZVVSSSk6IHN0cmluZyA9PiBuZXcgVVJMKHVybCwgYmFzZSkuaHJlZjtcblxuLyoqXG4gKiBHZXQgbG9jYXRpb24gb3JpZ2luLlxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JpZ2luID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcblxuLyoqXG4gKiBHZXQgcG9ydCBiYXNlZCBvbiBVUkwgb3IgbG9jYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQb3J0ID0gKHVybDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWYpID0+IHBhcnNlKHVybCkucG9ydDtcblxuLyoqXG4gKiBHZXQgcGF0aCBmcm9tIFVSTC5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFBhdGggPSAodXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZikgPT4gcGFyc2UodXJsKS5wYXRoO1xuXG4vKipcbiAqIEdldCBxdWVyeSBvYmplY3QgZnJvbSBVUkwuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRRdWVyeSA9ICh1cmw6IHN0cmluZywgc3RyaW5naWZ5OiBib29sZWFuID0gZmFsc2UpOiBJR2VuZXJpY09iamVjdHxzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RyaW5naWZ5ID8gSlNPTi5zdHJpbmdpZnkocGFyc2UodXJsKS5xdWVyeSkgOiBwYXJzZSh1cmwpLnF1ZXJ5O1xufTtcblxuLyoqXG4gKiBHZXQgaGFzaCBmcm9tIFVSTC5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEhhc2ggPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4gcGFyc2UodXJsKS5oYXNoO1xuXG4vKipcbiAqIFBhcnNlIFVSTCBmb3IgcGF0aCwgcXVlcnkgYW5kIGhhc2ggYW5kIG1vcmUuXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZSA9ICh1cmw6IHN0cmluZyk6IElVcmxCYXNlID0+IHtcbiAgLy8gUG9ydFxuICBsZXQgcG9ydDtcbiAgY29uc3QgbWF0Y2hlcyA9IHVybC5tYXRjaCgvOlxcZCsvKTtcblxuICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgIGlmICgvXmh0dHAvLnRlc3QodXJsKSkge1xuICAgICAgcG9ydCA9IDgwO1xuICAgIH1cblxuICAgIGlmICgvXmh0dHBzLy50ZXN0KHVybCkpIHtcbiAgICAgIHBvcnQgPSA0NDM7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBvcnRTdHJpbmcgPSBtYXRjaGVzWzBdLnN1YnN0cmluZygxKTtcblxuICAgIHBvcnQgPSBwYXJzZUludChwb3J0U3RyaW5nLCAxMCk7XG4gIH1cblxuICAvLyBQYXRoXG4gIGxldCBwYXRoID0gdXJsLnJlcGxhY2UoZ2V0T3JpZ2luKCksICcnKTtcbiAgbGV0IGhhc2g7XG4gIGxldCBxdWVyeSA9IHt9O1xuXG4gIC8vIEhhc2hcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG5cbiAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgaGFzaCA9IHBhdGguc2xpY2UoaGFzaEluZGV4ICsgMSk7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIC8vIFF1ZXJ5XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcblxuICBpZiAocXVlcnlJbmRleCA+PSAwKSB7XG4gICAgcXVlcnkgPSBwYXJzZVF1ZXJ5KHBhdGguc2xpY2UocXVlcnlJbmRleCArIDEpKTtcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBxdWVyeUluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFzaCxcbiAgICBwYXRoLFxuICAgIHBvcnQsXG4gICAgcXVlcnksXG4gIH07XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgcXVlcnkgc3RyaW5nIHRvIG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlUXVlcnkgPSAoc3RyOiBzdHJpbmcpID0+XG4gIHN0ci5zcGxpdCgnJicpLnJlZHVjZSgoYWNjOiBJR2VuZXJpY09iamVjdCwgZWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVsLnNwbGl0KCc9Jyk7XG5cbiAgICBhY2Nba2V5XSA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4vKipcbiAqIENsZWFuIFVSTCwgcmVtb3ZlIFwiaGFzaFwiIGFuZC9vciBcInRyYWlsaW5nIHNsYXNoXCIuXG4gKi9cbmV4cG9ydCBjb25zdCBjbGVhbiA9ICh1cmw6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSA9PlxuICB1cmwucmVwbGFjZSgvKFxcLyMuKnxcXC98Iy4qKSQvLCAnJyk7XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL3V0aWxzL3JlcXVlc3RcbiAqIDxicj48YnI+XG4gKiAjIyBGZXRjaCBwYWdlcyBmb3IgdHJhbnNpdGlvbnMuXG4gKlxuICogLSBJbmNsdWRlcyB0aW1lb3V0XG4gKiAtIFVzZXMgRmV0Y2ggQVBJXG4gKiAtIEhhbmRsZXMgZXJyb3JzXG4gKlxuICogQG1vZHVsZSBjb3JlL3V0aWxzL3JlcXVlc3RcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tICdAYmFyYmEvY29yZS9zcmMvbW9kdWxlcy9DYWNoZSc7XG5pbXBvcnQgeyBIZWFkZXJzIH0gZnJvbSAnQGJhcmJhL2NvcmUvc3JjL21vZHVsZXMvSGVhZGVycyc7XG5pbXBvcnQgeyBJUmVzcG9uc2UsIFJlcXVlc3RFcnJvciB9IGZyb20gJy4uL2RlZnMnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuL3VybCc7XG5cbi8qKlxuICogSW5pdCBhIHBhZ2UgcmVxdWVzdC5cbiAqIEZldGNoIHRoZSBwYWdlIGFuZCByZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSB0ZXh0IGNvbnRlbnQuXG4gKi9cbmZ1bmN0aW9uIHJlcXVlc3QoXG4gIHVybDogc3RyaW5nLFxuICB0dGw6IG51bWJlciA9IDJlMyxcbiAgcmVxdWVzdEVycm9yOiBSZXF1ZXN0RXJyb3IsXG4gIGNhY2hlOiBDYWNoZSxcbiAgaGVhZGVyczogSGVhZGVyc1xuKTogUHJvbWlzZTxJUmVzcG9uc2U+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBieXBhc3MgamVzdCBzaW5jZSB4aHItbW9jayBkb2Vzbid0IHN1cHBvcnQgY3VzdG9tIHhoci5yZXNwb25zZVVSTCAqL1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVVJMID0geGhyLnJlc3BvbnNlVVJMICE9PSAnJyAmJiB4aHIucmVzcG9uc2VVUkwgIT09IHVybCA/IHhoci5yZXNwb25zZVVSTCA6IHVybDtcblxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgaHRtbDogeGhyLnJlc3BvbnNlVGV4dCxcbiAgICAgICAgICAgIHVybDoge1xuICAgICAgICAgICAgICBocmVmOiByZXNwb25zZVVSTCxcbiAgICAgICAgICAgICAgLi4ucGFyc2UocmVzcG9uc2VVUkwpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FjaGUudXBkYXRlKHVybCwge1xuICAgICAgICAgICAgc3RhdHVzOiAnZnVsZmlsbGVkJyxcbiAgICAgICAgICAgIHRhcmdldDogcmVzcG9uc2VVUkxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgLy8gSFRUUCBjb2RlIGlzIG5vdCAyMDAsIHJlamVjdCB3aXRoIHJlc3BvbnNlLlxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJlcXVlc3RFcnJvcih1cmwsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuXG4gICAgICAgICAgY2FjaGUudXBkYXRlKHVybCwgeyBzdGF0dXM6ICdyZWplY3RlZCcgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBUaW1lb3V0IGVycm9yIFske3R0bH1dYCk7XG4gICAgICByZXF1ZXN0RXJyb3IodXJsLCBlcnJvcik7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgY2FjaGUudXBkYXRlKHVybCwgeyBzdGF0dXM6ICdyZWplY3RlZCcgfSk7XG4gICAgfTtcblxuICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEZldGNoIGVycm9yYCk7XG4gICAgICByZXF1ZXN0RXJyb3IodXJsLCBlcnJvcik7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgY2FjaGUudXBkYXRlKHVybCwgeyBzdGF0dXM6ICdyZWplY3RlZCcgfSk7XG4gICAgfTtcblxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgIHhoci50aW1lb3V0ID0gdHRsO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgJ0FjY2VwdCcsXG4gICAgICAndGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWwnXG4gICAgKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcigneC1iYXJiYScsICd5ZXMnKTtcblxuICAgIGhlYWRlcnMuYWxsKCkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICB4aHIuc2VuZCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcmVxdWVzdCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsImltcG9ydCBpc1Byb21pc2UgZnJvbSAnaXMtcHJvbWlzZSc7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9TQm91ZHJpYXMvcnVuLWFzeW5jXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkFzeW5jKFxuICBmdW5jOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQgfCBQcm9taXNlPGFueT4sXG4gIGN0eDogYW55ID0ge31cbik6ICguLi5hcmdzOiBhbnlbXSkgPT4gUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGxldCBhc3luYyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIEFkZCBhc3luYyB0byBjb250ZXh0XG4gICAgICBjdHguYXN5bmMgPSAoKSA9PiB7XG4gICAgICAgIGFzeW5jID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gKGVycjogYW55LCB2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGFuc3dlciA9IGZ1bmMuYXBwbHkoY3R4LCBhcmdzIGFzIFtdKTtcblxuICAgICAgaWYgKCFhc3luYykge1xuICAgICAgICBpZiAoaXNQcm9taXNlKGFuc3dlcikpIHtcbiAgICAgICAgICAoYW5zd2VyIGFzIFByb21pc2U8YW55PikudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoYW5zd2VyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvaG9va3NcbiAqIDxicj48YnI+XG4gKiAjIyBIb29rcyBtYW5hZ2VyLlxuICpcbiAqIC0gUmVnaXN0ZXIgYW5kIHRyaWdnZXIgaG9va3NcbiAqXG4gKiBIb29rcyBjYW4gYmUgZWFzaWx5IHJlZ2lzdGVyZWQ6XG4gKlxuICogYGBganNcbiAqIGhvb2tzLmxlYXZlKGNhbGxiYWNrLCBjb250ZXh0KTtcbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL2hvb2tzXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IEhvb2tGdW5jdGlvbiwgSG9va01ldGhvZHMsIEhvb2tzQWxsIH0gZnJvbSAnLi9kZWZzJztcbi8vIE1vZHVsZXNcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbW9kdWxlcy9Mb2dnZXInO1xuLy8gVXRpbHNcbmltcG9ydCB7IHJ1bkFzeW5jIH0gZnJvbSAnLi91dGlscyc7XG4vLyBUeXBlc1xuaW50ZXJmYWNlIElIb29rSW5mb3Mge1xuICBjdHg6IGFueTtcbiAgZm46IEhvb2tGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIEhvb2tzIGV4dGVuZHMgSG9va01ldGhvZHMge1xuICAvKipcbiAgICogQWxsb3cgdGhlIHVzZSBvZiBgaG9va3NbbmFtZV0oY2IsIGN0eClgLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xuICAvLyBba2V5IGluIEhvb2tzQWxsXT86IGFueTtcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcignQGJhcmJhL2NvcmUnKTtcbiAgLyoqXG4gICAqIEFsbCBhdmFpbGFibGUgaG9va3MuXG4gICAqXG4gICAqIFNlZSBbW0hvb2tzQWxsXV1cbiAgICovXG4gIC8vIFRPRE86IGdldCBob29rcyBmcm9tIGRlZnMgKERSWSk/XG4gIHB1YmxpYyBhbGw6IEhvb2tzQWxsW10gPSBbXG4gICAgJ3JlYWR5JyxcbiAgICAncGFnZScsXG4gICAgJ3Jlc2V0JyxcbiAgICAnY3VycmVudEFkZGVkJyxcbiAgICAnY3VycmVudFJlbW92ZWQnLFxuICAgICduZXh0QWRkZWQnLFxuICAgICduZXh0UmVtb3ZlZCcsXG4gICAgJ2JlZm9yZU9uY2UnLFxuICAgICdvbmNlJyxcbiAgICAnYWZ0ZXJPbmNlJyxcbiAgICAnYmVmb3JlJyxcbiAgICAnYmVmb3JlTGVhdmUnLFxuICAgICdsZWF2ZScsXG4gICAgJ2FmdGVyTGVhdmUnLFxuICAgICdiZWZvcmVFbnRlcicsXG4gICAgJ2VudGVyJyxcbiAgICAnYWZ0ZXJFbnRlcicsXG4gICAgJ2FmdGVyJyxcbiAgXTtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyZWQgaG9va3MuXG4gICAqXG4gICAqIC0gVW5pcXVlIGhvb2sgbmFtZVxuICAgKiAtIEFzc29jaWF0ZWQgZGF0YSBzZXQocykgKGNhbGxiYWNrICsgY29udGV4dClcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlcmVkOiBNYXA8SG9va3NBbGwsIFNldDxJSG9va0luZm9zPj4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0KCkge1xuICAgIHRoaXMucmVnaXN0ZXJlZC5jbGVhcigpO1xuICAgIHRoaXMuYWxsLmZvckVhY2goaG9vayA9PiB7XG4gICAgICBpZiAoIXRoaXNbaG9va10pIHtcbiAgICAgICAgdGhpc1tob29rXSA9IChmbjogSG9va0Z1bmN0aW9uLCBjdHg/OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMucmVnaXN0ZXJlZC5oYXMoaG9vaykpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZC5zZXQoaG9vaywgbmV3IFNldCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2V0ID0gdGhpcy5yZWdpc3RlcmVkLmdldChob29rKTtcblxuICAgICAgICAgIHNldC5hZGQoe1xuICAgICAgICAgICAgY3R4OiBjdHggfHwge30sXG4gICAgICAgICAgICBmbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEbyBob29rLlxuICAgKlxuICAgKiBUcmlnZ2VyIHJlZ2lzdGVyZWQgaG9va3MuXG4gICAqL1xuICBwdWJsaWMgZG8obmFtZTogSG9va3NBbGwsIC4uLmFyZ3M6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZC5oYXMobmFtZSkpIHtcbiAgICAgIC8vIExldCdzIHN0YXJ0IGEgY2hhaW4gb2YgcHJvbWlzZXNcbiAgICAgIGxldCBjaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICB0aGlzLnJlZ2lzdGVyZWQuZ2V0KG5hbWUpLmZvckVhY2goaG9vayA9PiB7XG4gICAgICAgIC8vIENoYWluIGFzeW5jIGhvb2tzIHByb21pc2lmaWVkXG4gICAgICAgIGNoYWluID0gY2hhaW4udGhlbigoKSA9PiBydW5Bc3luYyhob29rLmZuLCBob29rLmN0eCkoLi4uYXJncykpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjaGFpbi5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBIb29rIGVycm9yIFske25hbWV9XWApO1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5hbGwuZm9yRWFjaChob29rID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2hvb2tdO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogSGVscCwgcHJpbnQgYXZhaWxhYmxlIGFuZCByZWdpc3RlcmVkIGhvb2tzLlxuICAgKi9cbiAgcHVibGljIGhlbHAoKTogdm9pZCB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgQXZhaWxhYmxlIGhvb2tzOiAke3RoaXMuYWxsLmpvaW4oJywnKX1gKTtcbiAgICBjb25zdCByZWdpc3RlcmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMucmVnaXN0ZXJlZC5mb3JFYWNoKChfdmFsdWU6IGFueSwga2V5OiBzdHJpbmcpID0+IHJlZ2lzdGVyZWQucHVzaChrZXkpKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBSZWdpc3RlcmVkIGhvb2tzOiAke3JlZ2lzdGVyZWQuam9pbignLCcpfWApO1xuICB9XG59XG5cbmNvbnN0IGhvb2tzID0gbmV3IEhvb2tzKCk7XG5cbmV4cG9ydCB7IGhvb2tzIH07XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvaWdub3JlXG4gKiA8YnI+PGJyPlxuICogIyMgTWFuYWdlIGlnbm9yZSBvcHRpb25zLlxuICpcbiAqIC0gY2FjaGVcbiAqIC0gcHJlZmV0Y2hcbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9pZ25vcmVcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSWdub3JlT3B0aW9uIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgcGF0aFRvUmVnZXhwIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4uL3V0aWxzL3VybCc7XG5cbmV4cG9ydCBjbGFzcyBJZ25vcmUge1xuICBwcml2YXRlIF9pZ25vcmVBbGw6IGJvb2xlYW47XG4gIHByaXZhdGUgX2lnbm9yZVJlZ2V4ZXM6IFJlZ0V4cFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoaWdub3JlOiBJZ25vcmVPcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIGlnbm9yZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9pZ25vcmVBbGwgPSBpZ25vcmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhdGhzID0gQXJyYXkuaXNBcnJheShpZ25vcmUpID8gaWdub3JlIDogW2lnbm9yZV07XG5cbiAgICAgIHRoaXMuX2lnbm9yZVJlZ2V4ZXMgPSBwYXRocy5tYXAocCA9PiBwYXRoVG9SZWdleHAocCkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGVja0hyZWYoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9pZ25vcmVBbGwgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIHRoaXMuX2lnbm9yZUFsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGggfSA9IHBhcnNlKGhyZWYpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2lnbm9yZVJlZ2V4ZXMuc29tZShyZWdleCA9PiByZWdleC5leGVjKHBhdGgpICE9PSBudWxsKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL2NhY2hlXG4gKiA8YnI+PGJyPlxuICogIyMgQ2FjaGUgZm9yIHN0b3JpbmcgVVJMIC8gSFRNTC5cbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9jYWNoZVxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBDYWNoZUFjdGlvbiwgQ2FjaGVSZXF1ZXN0LCBDYWNoZVN0YXR1cywgQ2FjaGVUYXJnZXQsIElDYWNoZURhdGEsIElnbm9yZU9wdGlvbiB9IGZyb20gJy4uL2RlZnMnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgSWdub3JlIH0gZnJvbSAnLi9JZ25vcmUnO1xuXG5leHBvcnQgY2xhc3MgQ2FjaGUgZXh0ZW5kcyBJZ25vcmUge1xuICBwcml2YXRlIF9zdGF0ZTogTWFwPHN0cmluZywgSUNhY2hlRGF0YT4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoaWdub3JlOiBJZ25vcmVPcHRpb24pIHtcbiAgICBzdXBlcihpZ25vcmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2YWx1ZSB0byBjYWNoZVxuICAgKi9cbiAgcHVibGljIHNldChcbiAgICBocmVmOiBzdHJpbmcsXG4gICAgcmVxdWVzdDogQ2FjaGVSZXF1ZXN0LFxuICAgIGFjdGlvbjogQ2FjaGVBY3Rpb24sXG4gICAgc3RhdHVzOiBDYWNoZVN0YXR1cyxcbiAgICB0YXJnZXQ/OiBDYWNoZVRhcmdldCxcbiAgKTogSUNhY2hlRGF0YSB7XG4gICAgdGhpcy5fc3RhdGUuc2V0KGhyZWYsIHtcbiAgICAgIGFjdGlvbixcbiAgICAgIHJlcXVlc3QsXG4gICAgICBzdGF0dXMsXG4gICAgICB0YXJnZXQ6IHRhcmdldCA/PyBocmVmLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbixcbiAgICAgIHJlcXVlc3QsXG4gICAgICBzdGF0dXMsXG4gICAgICB0YXJnZXQsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSBmcm9tIGNhY2hlXG4gICAqL1xuICBwdWJsaWMgZ2V0KGhyZWY6IHN0cmluZyk6IElDYWNoZURhdGEge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQoaHJlZik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHJlcXVlc3QgZnJvbSBjYWNoZVxuICAgKi9cbiAgcHVibGljIGdldFJlcXVlc3QoaHJlZjogc3RyaW5nKTogQ2FjaGVSZXF1ZXN0IHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KGhyZWYpLnJlcXVlc3Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjdGlvbiBmcm9tIGNhY2hlXG4gICAqL1xuICBwdWJsaWMgZ2V0QWN0aW9uKGhyZWY6IHN0cmluZyk6IENhY2hlQWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KGhyZWYpLmFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdHVzIGZyb20gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBnZXRTdGF0dXMoaHJlZjogc3RyaW5nKTogQ2FjaGVTdGF0dXMge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQoaHJlZikuc3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0YXJnZXQgZnJvbSBjYWNoZVxuICAgKi9cbiAgcHVibGljIGdldFRhcmdldChocmVmOiBzdHJpbmcpOiBDYWNoZVRhcmdldCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmdldChocmVmKS50YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdmFsdWUgZXhpc3RzIGludG8gY2FjaGVcbiAgICovXG4gIHB1YmxpYyBoYXMoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5jaGVja0hyZWYoaHJlZikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmhhcyhocmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdmFsdWUgZnJvbSBjYWNoZVxuICAgKi9cbiAgcHVibGljIGRlbGV0ZShocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZGVsZXRlKGhyZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjYWNoZSB2YWx1ZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShocmVmOiBzdHJpbmcsIGRhdGE6IElDYWNoZURhdGEpOiBJQ2FjaGVEYXRhIHtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuX3N0YXRlLmdldChocmVmKSxcbiAgICAgIC4uLmRhdGEsXG4gICAgfTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQoaHJlZiwgc3RhdGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvaGVhZGVyc1xuICogPGJyPjxicj5cbiAqICMjIE1hbmFnZSByZXF1ZXN0IEhlYWRlcnMuXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvaGVhZGVyc1xuICogQHByZWZlcnJlZFxuICovXG5cbi8qKiovXG5cbi8vIERlZmluaXRpb25zXG5pbXBvcnQgeyBIZWFkZXJMaXN0LCBJSGVhZGVyRGF0YSB9IGZyb20gJy4uL2RlZnMnO1xuXG5leHBvcnQgY2xhc3MgSGVhZGVycyB7XG4gIHByaXZhdGUgX2xpc3Q6IEhlYWRlckxpc3QgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIFNldCBhIG5ldyBoZWFkZXJcbiAgICovXG4gIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSUhlYWRlckRhdGEge1xuICAgIHRoaXMuX2xpc3Quc2V0KG5hbWUsIHZhbHVlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgc3BlY2lmaWMgaGVhZGVyXG4gICAqL1xuICBwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3QuZ2V0KG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgaGVhZGVyc1xuICAgKi9cbiAgcHVibGljIGFsbCgpOiBIZWFkZXJMaXN0IHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBoZWFkZXIgZXhpc3RzXG4gICAqL1xuICBwdWJsaWMgaGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9saXN0LmhhcyhuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBoZWFkZXJcbiAgICovXG4gIHB1YmxpYyBkZWxldGUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3QuZGVsZXRlKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBoZWFkZXJzXG4gICAqL1xuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3QuY2xlYXIoKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL3ByZXZlbnRcbiAqIDxicj48YnI+XG4gKiAjIyBQcmV2ZW50IGNoZWNrcy5cbiAqXG4gKiAtIEdhdGhlcnMgYWxsIHRoZSB0ZXN0cyB0aGF0IGFsbG93IEJhcmJhIHRvIHdvcmsgYW5kIHBsYXkgdHJhbnNpdGlvbnNcbiAqXG4gKiBAbW9kdWxlIGNvcmUvbW9kdWxlcy9wcmV2ZW50XG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7IElnbm9yZU9wdGlvbiwgTGluaywgUHJldmVudENoZWNrIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBTY2hlbWFzXG5pbXBvcnQgeyBzY2hlbWFBdHRyaWJ1dGUgfSBmcm9tICcuLi9zY2hlbWFzL2F0dHJpYnV0ZSc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgdXJsIH0gZnJvbSAnLi4vdXRpbHMnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgSWdub3JlIH0gZnJvbSAnLi9JZ25vcmUnO1xuXG4vKipcbiAqIE1ha2Ugc3VyZSB0aGUgYnJvd3NlciBzdXBwb3J0cyBgaGlzdG9yeS5wdXNoU3RhdGVgLlxuICovXG5jb25zdCBwdXNoU3RhdGU6IFByZXZlbnRDaGVjayA9ICgpID0+ICF3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbi8qKlxuICogTWFrZSBzdXJlIHRoZXJlIGlzIGFuIGBlbGAgYW5kIGBocmVmYC5cbiAqL1xuY29uc3QgZXhpc3RzOiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCwgaHJlZiB9KSA9PiAhZWwgfHwgIWhyZWY7XG5cbi8qKlxuICogSWYgdGhlIHVzZXIgaXMgcHJlc3NpbmcgY3RybCArIGNsaWNrLCB0aGUgYnJvd3NlciB3aWxsIG9wZW4gYSBuZXcgdGFiLlxuICovXG5jb25zdCBuZXdUYWI6IFByZXZlbnRDaGVjayA9ICh7IGV2ZW50IH0pID0+XG4gIChldmVudCBhcyBLZXlib2FyZEV2ZW50KS53aGljaCA+IDEgfHxcbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLm1ldGFLZXkgfHxcbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmN0cmxLZXkgfHxcbiAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLnNoaWZ0S2V5IHx8XG4gIChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5hbHRLZXk7XG5cbi8qKlxuICogSWYgdGhlIGxpbmsgaGFzIGBfYmxhbmtgIHRhcmdldC5cbiAqL1xuY29uc3QgYmxhbms6IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gIGVsLmhhc0F0dHJpYnV0ZSgndGFyZ2V0JykgJiYgKGVsIGFzIExpbmspLnRhcmdldCA9PT0gJ19ibGFuayc7XG5cbi8qKlxuICogSWYgdGhlIGRvbWFpbiBpcyB0aGUgc2FtZSAoaW4gb3JkZXIgdG8gYXZvaWQgcHVzaFN0YXRlIGNyb3NzIG9yaWdpbiBzZWN1cml0eSBwcm9ibGVtKS5cbiAqIE5vdGU6IFNWR0FFbGVtZW50IGRvIG5vdCBoYXZlIGBwcm90b2NvbGAgbmVpdGhlciBgaG9zdG5hbWVgIHByb3BlcnRpZXMuXG4gKi9cbmNvbnN0IGNvcnNEb21haW46IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gICgoZWwgYXMgSFRNTEFuY2hvckVsZW1lbnQpLnByb3RvY29sICE9PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT09IChlbCBhcyBIVE1MQW5jaG9yRWxlbWVudCkucHJvdG9jb2wpIHx8XG4gICgoZWwgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhvc3RuYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgIT09IChlbCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaG9zdG5hbWUpO1xuXG4vKipcbiAqIElmIHRoZSBwb3J0IGlzIHRoZSBzYW1lLlxuICogTm90ZTogU1ZHQUVsZW1lbnQgZG8gbm90IGhhdmUgYHBvcnRgIHByb3BlcnR5LlxuICovXG5jb25zdCBjb3JzUG9ydDogUHJldmVudENoZWNrID0gKHsgZWwgfSkgPT5cbiAgKGVsIGFzIEhUTUxBbmNob3JFbGVtZW50KS5wb3J0ICE9PSB1bmRlZmluZWQgJiZcbiAgdXJsLmdldFBvcnQoKSAhPT0gdXJsLmdldFBvcnQoKGVsIGFzIEhUTUxBbmNob3JFbGVtZW50KS5ocmVmKTtcblxuLyoqXG4gKiBJZiB0aGUgbGluayBoYXMgZG93bmxvYWQgYXR0cmlidXRlLlxuICovXG5jb25zdCBkb3dubG9hZDogUHJldmVudENoZWNrID0gKHsgZWwgfSkgPT5cbiAgZWwuZ2V0QXR0cmlidXRlICYmIHR5cGVvZiBlbC5nZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJykgPT09ICdzdHJpbmcnO1xuXG4vKipcbiAqIElmIHRoZSBsaW5rcyBjb250YWlucyBbZGF0YS1iYXJiYS1wcmV2ZW50XSBvciBbZGF0YS1iYXJiYS1wcmV2ZW50PVwic2VsZlwiXS5cbiAqL1xuY29uc3QgcHJldmVudFNlbGY6IFByZXZlbnRDaGVjayA9ICh7IGVsIH0pID0+XG4gIGVsLmhhc0F0dHJpYnV0ZShgJHtzY2hlbWFBdHRyaWJ1dGUucHJlZml4fS0ke3NjaGVtYUF0dHJpYnV0ZS5wcmV2ZW50fWApO1xuXG4vKipcbiAqIElmIHNvbWUgbGluayBhbmNlc3RvciBjb250YWlucyBbZGF0YS1iYXJiYS1wcmV2ZW50PVwiYWxsXCJdLlxuICovXG5jb25zdCBwcmV2ZW50QWxsOiBQcmV2ZW50Q2hlY2sgPSAoeyBlbCB9KSA9PlxuICBCb29sZWFuKFxuICAgIGVsLmNsb3Nlc3QoYFske3NjaGVtYUF0dHJpYnV0ZS5wcmVmaXh9LSR7c2NoZW1hQXR0cmlidXRlLnByZXZlbnR9PVwiYWxsXCJdYClcbiAgKTtcblxuLyoqXG4gKiBJZiB0aGUgbGluayBpcyB0aGUgY3VycmVudCBVUkwuXG4gKlxuICogPiBOb3QgaW4gdGhlIHRlc3Qgc3VpdGUuXG4gKi9cbmNvbnN0IHNhbWVVcmw6IFByZXZlbnRDaGVjayA9ICh7IGhyZWYgfSkgPT5cbiAgdXJsLmNsZWFuKGhyZWYpID09PSB1cmwuY2xlYW4oKSAmJiB1cmwuZ2V0UG9ydChocmVmKSA9PT0gdXJsLmdldFBvcnQoKTtcblxuZXhwb3J0IGNsYXNzIFByZXZlbnQgZXh0ZW5kcyBJZ25vcmUge1xuICBwdWJsaWMgc3VpdGU6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyB0ZXN0czogTWFwPHN0cmluZywgUHJldmVudENoZWNrPiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihpZ25vcmU6IElnbm9yZU9wdGlvbikge1xuICAgIHN1cGVyKGlnbm9yZSk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAvLyBBZGQgZGVmYXVsdHNcbiAgICB0aGlzLmFkZCgncHVzaFN0YXRlJywgcHVzaFN0YXRlKTtcbiAgICB0aGlzLmFkZCgnZXhpc3RzJywgZXhpc3RzKTtcbiAgICB0aGlzLmFkZCgnbmV3VGFiJywgbmV3VGFiKTtcbiAgICB0aGlzLmFkZCgnYmxhbmsnLCBibGFuayk7XG4gICAgdGhpcy5hZGQoJ2NvcnNEb21haW4nLCBjb3JzRG9tYWluKTtcbiAgICB0aGlzLmFkZCgnY29yc1BvcnQnLCBjb3JzUG9ydCk7XG4gICAgdGhpcy5hZGQoJ2Rvd25sb2FkJywgZG93bmxvYWQpO1xuICAgIHRoaXMuYWRkKCdwcmV2ZW50U2VsZicsIHByZXZlbnRTZWxmKTtcbiAgICB0aGlzLmFkZCgncHJldmVudEFsbCcsIHByZXZlbnRBbGwpO1xuXG4gICAgLy8gT3V0c2lkZSBvZiB0aGUgdGVzdCBzdWl0ZVxuICAgIHRoaXMuYWRkKCdzYW1lVXJsJywgc2FtZVVybCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGFkZChuYW1lOiBzdHJpbmcsIGNoZWNrOiBQcmV2ZW50Q2hlY2ssIHN1aXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMudGVzdHMuc2V0KG5hbWUsIGNoZWNrKTtcbiAgICBzdWl0ZSAmJiB0aGlzLnN1aXRlLnB1c2gobmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIGluZGl2aWR1YWwgdGVzdFxuICAgKi9cbiAgcHVibGljIHJ1bihuYW1lOiBzdHJpbmcsIGVsOiBMaW5rLCBldmVudDogRXZlbnQsIGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRlc3RzLmdldChuYW1lKSh7XG4gICAgICBlbCxcbiAgICAgIGV2ZW50LFxuICAgICAgaHJlZixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gdGVzdCBzdWl0ZVxuICAgKi9cbiAgcHVibGljIGNoZWNrTGluayhlbDogTGluaywgZXZlbnQ6IEV2ZW50LCBocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdWl0ZS5zb21lKG5hbWUgPT4gdGhpcy5ydW4obmFtZSwgZWwsIGV2ZW50LCBocmVmKSk7XG4gIH1cbn1cbiIsIi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yXG5leHBvcnQgY2xhc3MgQmFyYmFFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVycm9yOiBFcnJvcixcbiAgICBwdWJsaWMgbGFiZWwgPSAnQmFyYmEgZXJyb3InLFxuICAgIC4uLnBhcmFtczogYW55W11cbiAgKSB7XG4gICAgLy8gUGFzcyByZW1haW5pbmcgYXJndW1lbnRzIChpbmNsdWRpbmcgdmVuZG9yIHNwZWNpZmljIG9uZXMpIHRvIHBhcmVudCBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKC4uLnBhcmFtcyk7XG5cbiAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93biAob25seSBhdmFpbGFibGUgb24gVjgpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEJhcmJhRXJyb3IpO1xuICAgIH1cblxuICAgIHRoaXMubmFtZSA9ICdCYXJiYUVycm9yJztcbiAgfVxufVxuIiwiLyoqXG4gKiBAYmFyYmEvY29yZS9tb2R1bGVzL3N0b3JlXG4gKiA8YnI+PGJyPlxuICogIyMgVHJhbnNpdGlvbnMgc3RvcmUuXG4gKlxuICogLSBSZXNvbHZlIHRyYW5zaXRpb25cbiAqIC0gTWFuYWdlIHJ1bGVzXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvc3RvcmVcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHtcbiAgSVJ1bGUsXG4gIElSdWxlcyxcbiAgSVRyYW5zaXRpb25EYXRhLFxuICBJVHJhbnNpdGlvbkZpbHRlcnMsXG4gIElUcmFuc2l0aW9uT25jZSxcbiAgSVRyYW5zaXRpb25QYWdlLFxuICBSdWxlTmFtZSxcbn0gZnJvbSAnLi4vZGVmcyc7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vTG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcignQGJhcmJhL2NvcmUnKTtcbiAgLyoqXG4gICAqIEFsbCByZWdpc3RlcmVkIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgcHVibGljIGFsbDogSVRyYW5zaXRpb25QYWdlW10gPSBbXTtcbiAgLyoqXG4gICAqIFwiUGFnZSBvbmx5XCIgcmVnaXN0ZXJlZCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBwYWdlOiBJVHJhbnNpdGlvblBhZ2VbXSA9IFtdO1xuICAvKipcbiAgICogXCJPbmNlIG9ubHlcIiByZWdpc3RlcmVkIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgcHVibGljIG9uY2U6IElUcmFuc2l0aW9uT25jZVtdID0gW107XG4gIC8qKlxuICAgKiBSdWxlcyBmb3IgdHJhbnNpdGlvbiByZXNvbHV0aW9uLlxuICAgKlxuICAgKiBEZWZhdWx0czpcbiAgICpcbiAgICogLSBuYW1lc3BhY2VcbiAgICogLSBjdXN0b21cbiAgICovXG4gIHByaXZhdGUgX3J1bGVzOiBJUnVsZVtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICduYW1lc3BhY2UnLFxuICAgICAgdHlwZTogJ3N0cmluZ3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2N1c3RvbScsXG4gICAgICB0eXBlOiAnZnVuY3Rpb24nLFxuICAgIH0sXG4gIF07XG5cbiAgLyoqXG4gICAqIEluaXQgc3RvcmUuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0cmFuc2l0aW9uczogSVRyYW5zaXRpb25QYWdlW10gPSBbXSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRyYW5zaXRpb25zKSB7XG4gICAgICAvLyBUT0RPOiBhZGQgY2hlY2sgZm9yIHZhbGlkIHRyYW5zaXRpb25zPyBjcml0ZXJpYT8gKG9uY2UgfHwgZW50ZXIgJiYgbGVhdmUpXG4gICAgICB0aGlzLmFsbCA9IHRoaXMuYWxsLmNvbmNhdCh0cmFuc2l0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHJ1bGUgb3IgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhZGQodHlwZTogJ3J1bGUnIHwgJ3RyYW5zaXRpb24nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3J1bGUnOlxuICAgICAgICAvLyBUT0RPOiBjaGVjayBmb3IgdmFsaWQgcnVsZVxuICAgICAgICB0aGlzLl9ydWxlcy5zcGxpY2UoZGF0YS5wb3NpdGlvbiB8fCAwLCAwLCBkYXRhLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0cmFuc2l0aW9uJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIFRPRE86IGNoZWNrIGZvciB2YWxpZCB0cmFuc2l0aW9uXG4gICAgICAgIHRoaXMuYWxsLnB1c2goZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIHJlc29sdmUoXG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhLFxuICAgIGZpbHRlcnM6IElUcmFuc2l0aW9uRmlsdGVycyA9IHt9XG4gICk6IElUcmFuc2l0aW9uT25jZSB8IElUcmFuc2l0aW9uUGFnZSB7XG4gICAgLy8gRmlsdGVyIG9uIFwib25jZVwiXG4gICAgbGV0IHRyYW5zaXRpb25zID0gZmlsdGVycy5vbmNlID8gdGhpcy5vbmNlIDogdGhpcy5wYWdlO1xuXG4gICAgLy8gRmlsdGVyIG9uIFwic2VsZlwiXG4gICAgaWYgKGZpbHRlcnMuc2VsZikge1xuICAgICAgdHJhbnNpdGlvbnMgPSB0cmFuc2l0aW9ucy5maWx0ZXIodCA9PiB0Lm5hbWUgJiYgdC5uYW1lID09PSAnc2VsZicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9ucyA9IHRyYW5zaXRpb25zLmZpbHRlcih0ID0+ICF0Lm5hbWUgfHwgdC5uYW1lICE9PSAnc2VsZicpO1xuICAgIH1cblxuICAgIC8vIEFsbCBtYXRjaGluZyB0cmFuc2l0aW9uIGluZm9zXG4gICAgY29uc3QgbWF0Y2hpbmcgPSBuZXcgTWFwKCk7XG5cbiAgICAvLyBBY3RpdmUgPSBmaXJzdCBvZiB2YWxpZCB0cmFuc2l0aW9uc1xuICAgIC8vIHNvcnRlZCBieSBkaXJlY3Rpb25zIChmcm9tL3RvLCBmcm9tIHx8IHRvLCDigKYpXG4gICAgY29uc3QgYWN0aXZlID0gdHJhbnNpdGlvbnMuZmluZCh0ID0+IHtcbiAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICBjb25zdCBtYXRjaCA9IHt9O1xuXG4gICAgICBpZiAoZmlsdGVycy5zZWxmICYmIHQubmFtZSA9PT0gJ3NlbGYnKSB7XG4gICAgICAgIG1hdGNoaW5nLnNldCh0LCBtYXRjaCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBydWxlc1xuICAgICAgdGhpcy5fcnVsZXMucmV2ZXJzZSgpLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgIHZhbGlkID0gdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gpO1xuICAgICAgICAgIC8vIEZyb20vdG8gY2hlY2tcbiAgICAgICAgICBpZiAodC5mcm9tICYmIHQudG8pIHtcbiAgICAgICAgICAgIHZhbGlkID1cbiAgICAgICAgICAgICAgdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gsICdmcm9tJykgJiZcbiAgICAgICAgICAgICAgdGhpcy5fY2hlY2sodCwgcnVsZSwgZGF0YSwgbWF0Y2gsICd0bycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodC5mcm9tICYmICF0LnRvKSB7XG4gICAgICAgICAgICB2YWxpZCA9IHRoaXMuX2NoZWNrKHQsIHJ1bGUsIGRhdGEsIG1hdGNoLCAnZnJvbScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXQuZnJvbSAmJiB0LnRvKSB7XG4gICAgICAgICAgICB2YWxpZCA9IHRoaXMuX2NoZWNrKHQsIHJ1bGUsIGRhdGEsIG1hdGNoLCAndG8nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtYXRjaGluZy5zZXQodCwgbWF0Y2gpO1xuXG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY3RpdmVNYXRjaCA9IG1hdGNoaW5nLmdldChhY3RpdmUpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25UeXBlID0gW107XG4gICAgaWYgKGZpbHRlcnMub25jZSkge1xuICAgICAgdHJhbnNpdGlvblR5cGUucHVzaCgnb25jZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uVHlwZS5wdXNoKCdwYWdlJyk7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJzLnNlbGYpIHtcbiAgICAgIHRyYW5zaXRpb25UeXBlLnB1c2goJ3NlbGYnKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlTWF0Y2gpIHtcbiAgICAgIC8vIExvZyByZXNvbHZlZCB0cmFuc2l0aW9uXG4gICAgICBjb25zdCBpbmZvczogYW55W10gPSBbYWN0aXZlXTtcbiAgICAgIC8vIExvZyBpZiBtYXRjaGluZyBjcml0ZXJpYVxuICAgICAgT2JqZWN0LmtleXMoYWN0aXZlTWF0Y2gpLmxlbmd0aCA+IDAgJiYgaW5mb3MucHVzaChhY3RpdmVNYXRjaCk7XG5cbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgIGBUcmFuc2l0aW9uIGZvdW5kIFske3RyYW5zaXRpb25UeXBlLmpvaW4oJywnKX1dYCxcbiAgICAgICAgLi4uaW5mb3NcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oYE5vIHRyYW5zaXRpb24gZm91bmQgWyR7dHJhbnNpdGlvblR5cGUuam9pbignLCcpfV1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBVcGRhdGUgc3RvcmUuXG4gICAqXG4gICAqIC0gUmVvcmRlciB0cmFuc2l0aW9uIGJ5IHByaW9yaXRpZXNcbiAgICogLSBHZXQgd2FpdCBpbmRpY2F0b3JcbiAgICogLSBHZXQgb25jZSB0cmFuc2l0aW9uc1xuICAgKi9cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAvLyBSZW9yZGVyIGJ5IHByaW9yaXRpZXNcbiAgICB0aGlzLmFsbCA9IHRoaXMuYWxsXG4gICAgICAubWFwKHQgPT4gdGhpcy5fYWRkUHJpb3JpdHkodCkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAubWFwKHQgPT4ge1xuICAgICAgICBkZWxldGUgdC5wcmlvcml0eTtcblxuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH0pO1xuICAgIHRoaXMucGFnZSA9IHRoaXMuYWxsLmZpbHRlcihcbiAgICAgIHQgPT4gdC5sZWF2ZSAhPT0gdW5kZWZpbmVkIHx8IHQuZW50ZXIgIT09IHVuZGVmaW5lZFxuICAgICkgYXMgSVRyYW5zaXRpb25QYWdlW107XG4gICAgdGhpcy5vbmNlID0gdGhpcy5hbGwuZmlsdGVyKHQgPT4gdC5vbmNlICE9PSB1bmRlZmluZWQpIGFzIElUcmFuc2l0aW9uT25jZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBDaGVjayBpZiB0cmFuc2l0aW9uIGFwcGx5LlxuICAgKlxuICAgKiBCYXNlZCBvbiBydWxlLCBwYWdlIGRhdGEgYW5kIG9wdGlvbmFsIGRpcmVjdGlvbjpcbiAgICpcbiAgICogMS4gdHJhbnNpdGlvbiBoYXMgbm8gcnVsZSBcInByb3BlcnR5XCI6XG4gICAqICAgIC0gYWx3YXlzIHJldHVybnMgdHJ1ZVxuICAgKiAyLiB0cmFuc2l0aW9uIGhhcyBydWxlIFwicHJvcGVydHlcIjpcbiAgICogICAgIC0gXCJzdHJpbmdzXCIgc2hvdWxkIGJlIHByZXNlbnQgb24gYm90aCBzaWRlICh0cmFuc2l0aW9uICsgcGFnZSkgYW5kIG1hdGNoXG4gICAqICAgICAtIFwiZnVuY3Rpb25cIiBzaG91bGQgcmV0dXJuIHRydWVcbiAgICovXG4gIHByaXZhdGUgX2NoZWNrKFxuICAgIHRyYW5zaXRpb246IElUcmFuc2l0aW9uUGFnZSxcbiAgICBydWxlOiBJUnVsZSxcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGEsXG4gICAgbWF0Y2g6IGFueSxcbiAgICBkaXJlY3Rpb24/OiAnZnJvbScgfCAndG8nXG4gICk6IGJvb2xlYW4ge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBsZXQgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICBjb25zdCB0ID0gdHJhbnNpdGlvbjtcbiAgICBjb25zdCB7IG5hbWUsIHR5cGUgfSA9IHJ1bGU7XG4gICAgY29uc3Qgc3RyUnVsZSA9IG5hbWUgYXMgSVJ1bGVzWydzdHJpbmdzJ107XG4gICAgY29uc3Qgb2JqUnVsZSA9IG5hbWUgYXMgSVJ1bGVzWydvYmplY3QnXTtcbiAgICBjb25zdCBmbk5hbWUgPSBuYW1lIGFzIElSdWxlc1snZnVuY3Rpb24nXTtcbiAgICBjb25zdCBiYXNlID0gZGlyZWN0aW9uID8gdFtkaXJlY3Rpb25dIDogdDsgLy8gPSB0IHx8IHQuZnJvbSB8fCB0LnRvXG4gICAgY29uc3QgcGFnZSA9IGRpcmVjdGlvbiA9PT0gJ3RvJyA/IGRhdGEubmV4dCA6IGRhdGEuY3VycmVudDsgLy8gPSBjdXJyZW50IHx8IG5leHRcbiAgICBjb25zdCBleGlzdCA9IGRpcmVjdGlvbiA/IGJhc2UgJiYgYmFzZVtuYW1lXSA6IGJhc2VbbmFtZV07XG5cbiAgICAvLyBJZiB0cmFuc2l0aW9uIHJ1bGUgZXhpc3RzXG4gICAgaWYgKGV4aXN0KSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5ncyc6XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAvLyBBcnJheSBzdXBwb3J0XG4gICAgICAgICAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gQXJyYXkuaXNBcnJheShiYXNlW3N0clJ1bGVdKVxuICAgICAgICAgICAgPyAoYmFzZVtzdHJSdWxlXSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgIDogW2Jhc2Vbc3RyUnVsZV0gYXMgc3RyaW5nXTtcblxuICAgICAgICAgIC8vIEZvciBtYXRjaGluZywgcHJvcCBzaG91bGQgYmUgcHJlc2VudCBvbiBib3RoIHNpZGVzIGFuZCBtYXRjaFxuICAgICAgICAgIGlmIChwYWdlW3N0clJ1bGVdICYmIG5hbWVzLmluZGV4T2YocGFnZVtzdHJSdWxlXSkgIT09IC0xKSB7XG4gICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIElmIHRyYW5zaXRpb24gcHJvcCBpcyBkaWZmZXJlbnQgZnJvbSBjdXJyZW50LCBub3QgdmFsaWRcbiAgICAgICAgICBpZiAobmFtZXMuaW5kZXhPZihwYWdlW3N0clJ1bGVdKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdvYmplY3QnOiB7XG4gICAgICAgICAgLy8gQXJyYXkgc3VwcG9ydFxuICAgICAgICAgIGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IEFycmF5LmlzQXJyYXkoYmFzZVtvYmpSdWxlXSlcbiAgICAgICAgICAgID8gKGJhc2Vbb2JqUnVsZV0gYXMgc3RyaW5nW10pXG4gICAgICAgICAgICA6IFtiYXNlW29ialJ1bGVdIGFzIHN0cmluZ107XG5cbiAgICAgICAgICAvLyBGb3IgbWF0Y2hpbmcsIHByb3Agc2hvdWxkIGJlIHByZXNlbnQgb24gYm90aCBzaWRlcyBhbmQgbWF0Y2hcbiAgICAgICAgICBpZiAocGFnZVtvYmpSdWxlXSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwYWdlW29ialJ1bGVdLm5hbWUgJiZcbiAgICAgICAgICAgICAgbmFtZXMuaW5kZXhPZihwYWdlW29ialJ1bGVdLm5hbWUpICE9PSAtMVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRyYW5zaXRpb24gcHJvcCBpcyBkaWZmZXJlbnQgZnJvbSBjdXJyZW50LCBub3QgdmFsaWRcbiAgICAgICAgICAgIGlmIChuYW1lcy5pbmRleE9mKHBhZ2Vbb2JqUnVsZV0ubmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICBpZiAoYmFzZVtmbk5hbWVdKGRhdGEpKSB7XG4gICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgbWF0Y2hbZGlyZWN0aW9uXSA9IG1hdGNoW2RpcmVjdGlvbl0gfHwge307XG4gICAgICAgICAgbWF0Y2hbZGlyZWN0aW9uXVtuYW1lXSA9IHRbZGlyZWN0aW9uXVtuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaFtuYW1lXSA9IHRbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgQ2FsY3VsYXRlIHRyYW5zaXRpb24gcHJpb3JpdHkuXG4gICAqXG4gICAqIEJhc2VkIG9uOlxuICAgKlxuICAgKiAtIHJ1bGUgXCJwb3NpdGlvblwiIChpbmRleCkgZ2l2ZSB0ZW5zLCBodW5kcmVkcywgdGhvdXNhbmRzLCDigKZcbiAgICogLSBmcm9tL3RvIHByb3BlcnRpZXMgZ2l2ZSB1bml0cyAoMCwgMSBvciAyKVxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlUHJpb3JpdHkoXG4gICAgdDogSVRyYW5zaXRpb25QYWdlLFxuICAgIHJ1bGVOYW1lOiBSdWxlTmFtZSxcbiAgICBydWxlSW5kZXg6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIGxldCBwcmlvcml0eSA9IDA7XG5cbiAgICBpZiAoXG4gICAgICB0W3J1bGVOYW1lXSB8fFxuICAgICAgKHQuZnJvbSAmJiB0LmZyb21bcnVsZU5hbWVdKSB8fFxuICAgICAgKHQudG8gJiYgdC50b1tydWxlTmFtZV0pXG4gICAgKSB7XG4gICAgICBwcmlvcml0eSArPSBNYXRoLnBvdygxMCwgcnVsZUluZGV4KTtcblxuICAgICAgaWYgKHQuZnJvbSAmJiB0LmZyb21bcnVsZU5hbWVdKSB7XG4gICAgICAgIHByaW9yaXR5ICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAodC50byAmJiB0LnRvW3J1bGVOYW1lXSkge1xuICAgICAgICBwcmlvcml0eSArPSAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZFByaW9yaXR5KHQ6IElUcmFuc2l0aW9uUGFnZSk6IElUcmFuc2l0aW9uUGFnZSB7XG4gICAgdC5wcmlvcml0eSA9IDA7XG4gICAgbGV0IHByaW9yaXR5ID0gMDtcblxuICAgIHRoaXMuX3J1bGVzLmZvckVhY2goKHJ1bGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gcnVsZTtcbiAgICAgIGNvbnN0IGluZGV4ID0gaSArIDE7XG5cbiAgICAgIHByaW9yaXR5ICs9IHRoaXMuX2NhbGN1bGF0ZVByaW9yaXR5KHQsIG5hbWUsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIHQucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIHJldHVybiB0O1xuICB9XG59XG4iLCIvKipcbiAqIEBiYXJiYS9jb3JlL21vZHVsZXMvdHJhbnNpdGlvbnNcbiAqIDxicj48YnI+XG4gKiAjIyBUcmFuc2l0aW9ucyBtYW5hZ2VyLlxuICpcbiAqIC0gSGFuZGxlIGhvb2tzIGFuZCB0cmFuc2l0aW9uIGxpZmVjeWNsZVxuICpcbiAqIEBtb2R1bGUgY29yZS9tb2R1bGVzL3RyYW5zaXRpb25zXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqKi9cblxuLy8gRGVmaW5pdGlvbnNcbmltcG9ydCB7XG4gIEhvb2tzVHJhbnNpdGlvbixcbiAgSG9va3NUcmFuc2l0aW9uTWFwLFxuICBJUmVzcG9uc2UsXG4gIElUcmFuc2l0aW9uRGF0YSxcbiAgSVRyYW5zaXRpb25GaWx0ZXJzLFxuICBJVHJhbnNpdGlvbk9uY2UsXG4gIElUcmFuc2l0aW9uUGFnZSxcbiAgV3JhcHBlcixcbn0gZnJvbSAnLi4vZGVmcyc7XG4vLyBIb29rc1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi9ob29rcyc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgZG9tLCBoZWxwZXJzLCBydW5Bc3luYyB9IGZyb20gJy4uL3V0aWxzJztcbi8vIE1vZHVsZXNcbmltcG9ydCB7IEJhcmJhRXJyb3IgfSBmcm9tICcuL0Vycm9yJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vTG9nZ2VyJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9TdG9yZSc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9ucyB7XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoJ0BiYXJiYS9jb3JlJyk7XG4gIHB1YmxpYyBzdG9yZTogU3RvcmU7XG4gIHByaXZhdGUgX3J1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih0cmFuc2l0aW9uczogSVRyYW5zaXRpb25QYWdlW10gPSBbXSkge1xuICAgIHRoaXMuc3RvcmUgPSBuZXcgU3RvcmUodHJhbnNpdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByZXNvbHZlZCB0cmFuc2l0aW9uXG4gICAqXG4gICAqIC0gYmFzZWQgb24gZGF0YVxuICAgKi9cbiAgcHVibGljIGdldChcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGEsXG4gICAgZmlsdGVycz86IElUcmFuc2l0aW9uRmlsdGVyc1xuICApOiBJVHJhbnNpdGlvbk9uY2UgfCBJVHJhbnNpdGlvblBhZ2Uge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnJlc29sdmUoZGF0YSwgZmlsdGVycyk7XG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9uIHJ1bm5pbmcgc3RhdHVzLlxuICAgKi9cbiAgZ2V0IGlzUnVubmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcnVubmluZztcbiAgfVxuICBzZXQgaXNSdW5uaW5nKHN0YXR1czogYm9vbGVhbikge1xuICAgIHRoaXMuX3J1bm5pbmcgPSBzdGF0dXM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZm9yIHJlZ2lzdGVyZWQgb25jZSB0cmFuc2l0aW9uKHMpLlxuICAgKi9cbiAgZ2V0IGhhc09uY2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUub25jZS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciByZWdpc3RlcmVkIHNlbGYgdHJhbnNpdGlvbi5cbiAgICovXG4gIGdldCBoYXNTZWxmKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmFsbC5zb21lKHQgPT4gdC5uYW1lID09PSAnc2VsZicpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBXYWl0IGluZGljYXRvci5cbiAgICpcbiAgICogVGVsbHMgQmFyYmEgdG8gZ2V0IG5leHQgcGFnZSBkYXRhPGJyPlxuICAgKiBiZWZvcmUgc3RhcnRpbmcgdGhlIHJlc29sdXRpb248YnI+XG4gICAqIGJlY2F1c2Ugc29tZSByZWdpc3RlcmVkIHRyYW5zaXRpb25zIG5lZWQ8YnI+XG4gICAqIG5leHQgcGFnZSBkYXRhIHRvIGJlIHJlc29sdmVkIChlZzogYHN5bmM6IHRydWVgLCBgdG86IHsgbmFtZXNwYWNlIH1gLCDigKYpXG4gICAqL1xuICBnZXQgc2hvdWxkV2FpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5hbGwuc29tZSh0ID0+ICh0LnRvICYmICF0LnRvLnJvdXRlKSB8fCB0LnN5bmMpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBEbyBcIm9uY2VcIiB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBIb29rczogc2VlIFtbSG9va3NPbmNlXV0uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZG9PbmNlKHtcbiAgICBkYXRhLFxuICAgIHRyYW5zaXRpb24sXG4gIH06IHtcbiAgICBkYXRhOiBJVHJhbnNpdGlvbkRhdGE7XG4gICAgdHJhbnNpdGlvbjogSVRyYW5zaXRpb25PbmNlO1xuICB9KSB7XG4gICAgY29uc3QgdCA9IHRyYW5zaXRpb24gfHwge307XG4gICAgdGhpcy5fcnVubmluZyA9IHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2JlZm9yZU9uY2UnLCBkYXRhLCB0KTtcbiAgICAgIGF3YWl0IHRoaXMub25jZShkYXRhLCB0KTtcbiAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdhZnRlck9uY2UnLCBkYXRhLCB0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL29uY2VdJyk7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBEbyBcInBhZ2VcIiB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBIb29rczogc2VlIFtbSG9va3NQYWdlXV0uXG4gICAqXG4gICAqIGBzeW5jOiBmYWxzZWAgKGRlZmF1bHQpIG9yZGVyOlxuICAgKlxuICAgKiAxLiBiZWZvcmVcbiAgICogMi4gYmVmb3JlTGVhdmVcbiAgICogMy4gbGVhdmVcbiAgICogNC4gYWZ0ZXJMZWF2ZVxuICAgKiA1LiBiZWZvcmVFbnRlclxuICAgKiA2LiBlbnRlclxuICAgKiA3LiBhZnRlckVudGVyXG4gICAqIDguIGFmdGVyXG4gICAqXG4gICAqIGBzeW5jOiB0cnVlYCBvcmRlcjpcbiAgICpcbiAgICogMS4gYmVmb3JlXG4gICAqIDIuIGJlZm9yZUxlYXZlXG4gICAqIDMuIGJlZm9yZUVudGVyXG4gICAqIDQuIGxlYXZlICYgZW50ZXJcbiAgICogNS4gYWZ0ZXJMZWF2ZVxuICAgKiA2LiBhZnRlckVudGVyXG4gICAqIDcuIGFmdGVyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZG9QYWdlKHtcbiAgICBkYXRhLFxuICAgIHRyYW5zaXRpb24sXG4gICAgcGFnZSxcbiAgICB3cmFwcGVyLFxuICB9OiB7XG4gICAgZGF0YTogSVRyYW5zaXRpb25EYXRhO1xuICAgIHRyYW5zaXRpb246IElUcmFuc2l0aW9uUGFnZTtcbiAgICBwYWdlOiBQcm9taXNlPElSZXNwb25zZSB8IHZvaWQ+O1xuICAgIHdyYXBwZXI6IFdyYXBwZXI7XG4gIH0pIHtcbiAgICBjb25zdCB0ID0gdHJhbnNpdGlvbiB8fCB7fTtcbiAgICBjb25zdCBzeW5jID0gdC5zeW5jID09PSB0cnVlIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5fcnVubmluZyA9IHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgLy8gQ2hlY2sgc3luYyBtb2RlLCB3YWl0IGZvciBuZXh0IGNvbnRlbnRcbiAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgIGF3YWl0IGhlbHBlcnMudXBkYXRlKHBhZ2UsIGRhdGEpO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYmVmb3JlJywgZGF0YSwgdCk7XG5cbiAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5hZGQoZGF0YSwgd3JhcHBlcik7XG4gICAgICAgICAgLy8gQmVmb3JlIGFjdGlvbnNcbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYmVmb3JlTGVhdmUnLCBkYXRhLCB0KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYmVmb3JlRW50ZXInLCBkYXRhLCB0KTtcblxuICAgICAgICAgIC8vIEFjdGlvbnNcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5sZWF2ZShkYXRhLCB0KSwgdGhpcy5lbnRlcihkYXRhLCB0KV0pO1xuXG4gICAgICAgICAgLy8gQWZ0ZXIgYWN0aW9uc1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdhZnRlckxlYXZlJywgZGF0YSwgdCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fZG9Bc3luY0hvb2soJ2FmdGVyRW50ZXInLCBkYXRhLCB0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBlcnJvciBbc3luY10nKTtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbkVycm9yKGVycm9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJhcmJhRXJyb3IoXG4gICAgICAgICAgICAgIChlcnJvciBhcyBFcnJvciksXG4gICAgICAgICAgICAgICdUcmFuc2l0aW9uIGVycm9yIFtzeW5jXSdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGVhdmVSZXN1bHQ6IGFueSA9IGZhbHNlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gTGVhdmVcbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYmVmb3JlTGVhdmUnLCBkYXRhLCB0KTtcblxuICAgICAgICAgIGxlYXZlUmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5sZWF2ZShkYXRhLCB0KSxcbiAgICAgICAgICAgIGhlbHBlcnMudXBkYXRlKHBhZ2UsIGRhdGEpLFxuICAgICAgICAgIF0pLnRoZW4odmFsdWVzID0+IHZhbHVlc1swXSk7XG5cbiAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXJMZWF2ZScsIGRhdGEsIHQpO1xuXG4gICAgICAgICAgLy8gVE9ETzogY2hlY2sgaGVyZSBcInZhbGlkXCIgcGFnZSByZXN1bHRcbiAgICAgICAgICAvLyBiZWZvcmUgZ29pbmcgZnVydGhlclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKCdUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvbGVhdmVdJyk7XG4gICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25FcnJvcihlcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCYXJiYUVycm9yKFxuICAgICAgICAgICAgICAoZXJyb3IgYXMgRXJyb3IpLFxuICAgICAgICAgICAgICAnVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL2xlYXZlXSdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBFbnRlclxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgaWYgKGxlYXZlUmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGQoZGF0YSwgd3JhcHBlcik7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2RvQXN5bmNIb29rKCdiZWZvcmVFbnRlcicsIGRhdGEsIHQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5lbnRlcihkYXRhLCB0LCBsZWF2ZVJlc3VsdCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXJFbnRlcicsIGRhdGEsIHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL2VudGVyXScpO1xuICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFyYmFFcnJvcihcbiAgICAgICAgICAgICAgKGVycm9yIGFzIEVycm9yKSxcbiAgICAgICAgICAgICAgJ1RyYW5zaXRpb24gZXJyb3IgW2JlZm9yZS9hZnRlci9lbnRlcl0nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgY3VycmVudCBjb250YWluZXJcbiAgICAgIGF3YWl0IHRoaXMucmVtb3ZlKGRhdGEpO1xuXG4gICAgICBhd2FpdCB0aGlzLl9kb0FzeW5jSG9vaygnYWZ0ZXInLCBkYXRhLCB0KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAgIC8vIElmIFwiY3VzdG9tL3NwZWNpZmljXCIgYmFyYmEgZXJyb3IuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKGVycm9yLm5hbWUgJiYgZXJyb3IubmFtZSA9PT0gJ0JhcmJhRXJyb3InKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGVycm9yLmxhYmVsKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IuZXJyb3IpO1xuXG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnVHJhbnNpdGlvbiBlcnJvciBbcGFnZV0nKTtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uY2UgaG9vayArIGFzeW5jIFwib25jZVwiIHRyYW5zaXRpb24uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25jZShkYXRhOiBJVHJhbnNpdGlvbkRhdGEsIHQ6IElUcmFuc2l0aW9uT25jZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IGhvb2tzLmRvKCdvbmNlJywgZGF0YSwgdCk7XG5cbiAgICByZXR1cm4gdC5vbmNlID8gcnVuQXN5bmModC5vbmNlLCB0KShkYXRhKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExlYXZlIGhvb2sgKyBhc3luYyBcImxlYXZlXCIgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBsZWF2ZShkYXRhOiBJVHJhbnNpdGlvbkRhdGEsIHQ6IElUcmFuc2l0aW9uUGFnZSk6IFByb21pc2U8YW55PiB7XG4gICAgYXdhaXQgaG9va3MuZG8oJ2xlYXZlJywgZGF0YSwgdCk7XG5cbiAgICByZXR1cm4gdC5sZWF2ZSA/IHJ1bkFzeW5jKHQubGVhdmUsIHQpKGRhdGEpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRW50ZXIgaG9vayArIGFzeW5jIFwiZW50ZXJcIiB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGVudGVyKFxuICAgIGRhdGE6IElUcmFuc2l0aW9uRGF0YSxcbiAgICB0OiBJVHJhbnNpdGlvblBhZ2UsXG4gICAgbGVhdmVSZXN1bHQ/OiBhbnlcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgaG9va3MuZG8oJ2VudGVyJywgZGF0YSwgdCk7XG5cbiAgICByZXR1cm4gdC5lbnRlclxuICAgICAgPyBydW5Bc3luYyh0LmVudGVyLCB0KShkYXRhLCBsZWF2ZVJlc3VsdClcbiAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5leHQgY29udGFpbmVyLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGFkZChkYXRhOiBJVHJhbnNpdGlvbkRhdGEsIHdyYXBwZXI6IFdyYXBwZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBkb20uYWRkQ29udGFpbmVyKGRhdGEubmV4dC5jb250YWluZXIsIHdyYXBwZXIpO1xuICAgIGhvb2tzLmRvKCduZXh0QWRkZWQnLCBkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY3VycmVudCBjb250YWluZXIuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcmVtb3ZlKGRhdGE6IElUcmFuc2l0aW9uRGF0YSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGRvbS5yZW1vdmVDb250YWluZXIoZGF0YS5jdXJyZW50LmNvbnRhaW5lcik7XG4gICAgaG9va3MuZG8oJ2N1cnJlbnRSZW1vdmVkJywgZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1RyYW5zaXRpb25FcnJvcihlcnJvcjogYW55KSB7XG4gICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgIC8vIEVycm9ycyBmcm9tIHJlcXVlc3RcbiAgICAgIHJldHVybiAhL1RpbWVvdXQgZXJyb3J8RmV0Y2ggZXJyb3IvLnRlc3QoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yLnN0YXR1cykge1xuICAgICAgLy8gRXJyb3JzIGZyb20gcmVxdWVzdFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERvIGhvb2tzICsgYXN5bmMgdHJhbnNpdGlvbiBtZXRob2RzLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZG9Bc3luY0hvb2soXG4gICAgaG9vazogSG9va3NUcmFuc2l0aW9uLFxuICAgIGRhdGE6IElUcmFuc2l0aW9uRGF0YSxcbiAgICB0OiBIb29rc1RyYW5zaXRpb25NYXBcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgaG9va3MuZG8oaG9vaywgZGF0YSwgdCk7XG5cbiAgICByZXR1cm4gdFtob29rXSA/IHJ1bkFzeW5jKHRbaG9va10sIHQpKGRhdGEpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cbiIsIi8qKlxuICogQGJhcmJhL2NvcmUvbW9kdWxlcy92aWV3c1xuICogPGJyPjxicj5cbiAqICMjIFZpZXdzIG1hbmFnZXIuXG4gKlxuICogQG1vZHVsZSBjb3JlL21vZHVsZXMvdmlld3NcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKioqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSG9va3NWaWV3LCBJVmlldywgSVZpZXdEYXRhIH0gZnJvbSAnLi4vZGVmcyc7XG4vLyBIb29rc1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi9ob29rcyc7XG4vLyBVdGlsc1xuaW1wb3J0IHsgcnVuQXN5bmMgfSBmcm9tICcuLi91dGlscyc7XG4vLyBUeXBlc1xudHlwZSBIb29rID0gKGRhdGE6IElWaWV3RGF0YSkgPT4gUHJvbWlzZTx2b2lkPjtcblxuZXhwb3J0IGNsYXNzIFZpZXdzIHtcbiAgLyoqXG4gICAqIEF2YWlsYWJsZSBob29rIG5hbWVzIGZvciB2aWV3cy5cbiAgICovXG4gIHB1YmxpYyBuYW1lczogSG9va3NWaWV3W10gPSBbXG4gICAgJ2JlZm9yZUxlYXZlJyxcbiAgICAnYWZ0ZXJMZWF2ZScsXG4gICAgJ2JlZm9yZUVudGVyJyxcbiAgICAnYWZ0ZXJFbnRlcicsXG4gIF07XG4gIC8qKlxuICAgKiBSZWdpc3RlcmVkIHZpZXdzIGJ5IG5hbWVzcGFjZS5cbiAgICovXG4gIHB1YmxpYyBieU5hbWVzcGFjZTogTWFwPHN0cmluZywgSVZpZXc+ID0gbmV3IE1hcCgpO1xuXG4gIC8qKlxuICAgKiBJbml0IHZpZXdzLlxuICAgKi9cbiAgY29uc3RydWN0b3Iodmlld3M6IElWaWV3W10pIHtcbiAgICBpZiAodmlld3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVE9ETzogYWRkIGNoZWNrXG4gICAgLy8gZm9yIHZhbGlkIHZpZXdzPyBjcml0ZXJpYT8gKG5hbWVzcGFjZSBwcm9wZXJ0eSwgc3RyaW5nID8pXG4gICAgLy8gb3IgZHVwbGljYXRlXG4gICAgdmlld3MuZm9yRWFjaCh2aWV3ID0+IHtcbiAgICAgIHRoaXMuYnlOYW1lc3BhY2Uuc2V0KHZpZXcubmFtZXNwYWNlLCB2aWV3KTtcbiAgICB9KTtcblxuICAgIHRoaXMubmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGhvb2tzW25hbWVdKHRoaXMuX2NyZWF0ZUhvb2sobmFtZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgaG9vayBtZXRob2QuXG4gICAqXG4gICAqIC0gZ2V0IHZpZXcgYmFzZWQgb24gbmFtZXNwYWNlXG4gICAqIC0gZXhlY3V0ZSBjYWxsYmFjayB3aXRoIHRyYW5zaXRpb24gZGF0YVxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlSG9vayhuYW1lOiBIb29rc1ZpZXcpOiBIb29rIHtcbiAgICByZXR1cm4gZGF0YSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWVzcGFjZSB9ID0gbmFtZS5tYXRjaCgvZW50ZXIvaSkgPyBkYXRhLm5leHQgOiBkYXRhLmN1cnJlbnQ7XG4gICAgICBjb25zdCB2aWV3ID0gdGhpcy5ieU5hbWVzcGFjZS5nZXQobmFtZXNwYWNlKTtcblxuICAgICAgLy8gVE9ETzogbWFuYWdlIHNlbGbigKZcbiAgICAgIC8vIGlmICh2aWV3ICYmIGRhdGEudHJpZ2dlciAhPT0gJ3NlbGYnKSB7XG4gICAgICBpZiAodmlldyAmJiB2aWV3W25hbWVdKSB7XG4gICAgICAgIHJldHVybiBydW5Bc3luYyh2aWV3W25hbWVdLCB2aWV3KShkYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gIH1cbn1cbiIsIi8vIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgcG9seWZpbGxcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L21hdGNoZXMjUG9seWZpbGxcbmlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID1cbiAgICAoRWxlbWVudCBhcyBhbnkpLnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLy8gRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCBwb2x5ZmlsbFxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xvc2VzdCNQb2x5ZmlsbFxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0KHM6IHN0cmluZykge1xuICAgIGxldCBlbCA9IHRoaXM7XG5cbiAgICBkbyB7XG4gICAgICBpZiAoZWwubWF0Y2hlcyhzKSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG5cbiAgICAgIGVsID0gKGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZSkgYXMgRWxlbWVudDtcbiAgICB9IHdoaWxlIChlbCAhPT0gbnVsbCAmJiBlbC5ub2RlVHlwZSA9PT0gMSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb3JlL3NjaGVtYXNcbiAqL1xuXG4vLyBEZWZpbml0aW9uc1xuaW1wb3J0IHsgSVNjaGVtYVBhZ2UgfSBmcm9tICcuLi9kZWZzJztcblxuLyoqXG4gKiBTZWUgW1tJU2NoZW1hUGFnZV1dXG4gKi9cbmV4cG9ydCBjb25zdCBzY2hlbWFQYWdlOiBJU2NoZW1hUGFnZSA9IHtcbiAgY29udGFpbmVyOiBudWxsLFxuICBodG1sOiAnJyxcbiAgbmFtZXNwYWNlOiAnJyxcbiAgdXJsOiB7XG4gICAgaGFzaDogJycsXG4gICAgaHJlZjogJycsXG4gICAgcGF0aDogJycsXG4gICAgcG9ydDogbnVsbCxcbiAgICBxdWVyeToge30sXG4gIH0sXG59O1xuIiwiLyoqXG4gKiBAYmFyYmEvY29yZVxuICogPGJyPjxicj5cbiAqICMjIEJhcmJhIGNvcmUgb2JqZWN0XG4gKlxuICogTWFpbiBtZXRob2RzOlxuICpcbiAqIC0gYC5pbml0KClgIGZvciBpbml0aWFsaXphdGlvbiB3aXRoIG9wdGlvbnNcbiAqIC0gYC51c2UoKWAgZm9yIHBsdWdpbnNcbiAqXG4gKiBAbW9kdWxlIGNvcmVcbiAqL1xuXG4vKioqL1xuXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbi8vIERlZmluaXRpb25zXG5pbXBvcnQge1xuICBJQmFyYmFPcHRpb25zLFxuICBJQmFyYmFQbHVnaW4sXG4gIElnbm9yZU9wdGlvbixcbiAgSVNjaGVtYVBhZ2UsXG4gIElUcmFuc2l0aW9uRGF0YSxcbiAgSVRyYW5zaXRpb25PbmNlLFxuICBJVHJhbnNpdGlvblBhZ2UsXG4gIExpbmssXG4gIExpbmtFdmVudCxcbiAgUmVxdWVzdEN1c3RvbUVycm9yLFxuICBSZXF1ZXN0RXJyb3JPclJlc3BvbnNlLFxuICBTY2hlbWFBdHRyaWJ1dGVWYWx1ZXMsXG4gIFRyaWdnZXIsXG4gIFdyYXBwZXIsXG59IGZyb20gJy4vZGVmcyc7XG4vLyBIb29rc1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuL2hvb2tzJztcbi8vIE1vZHVsZXNcbmltcG9ydCB7IENhY2hlIH0gZnJvbSAnLi9tb2R1bGVzL0NhY2hlJztcbmltcG9ydCB7IEhlYWRlcnMgfSBmcm9tICcuL21vZHVsZXMvSGVhZGVycyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL21vZHVsZXMvTG9nZ2VyJztcbmltcG9ydCB7IFByZXZlbnQgfSBmcm9tICcuL21vZHVsZXMvUHJldmVudCc7XG5pbXBvcnQgeyBUcmFuc2l0aW9ucyB9IGZyb20gJy4vbW9kdWxlcy9UcmFuc2l0aW9ucyc7XG5pbXBvcnQgeyBWaWV3cyB9IGZyb20gJy4vbW9kdWxlcy9WaWV3cyc7XG4vLyBQb2x5ZmlsbHNcbmltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuLy8gU2NoZW1hc1xuaW1wb3J0IHsgc2NoZW1hQXR0cmlidXRlIH0gZnJvbSAnLi9zY2hlbWFzL2F0dHJpYnV0ZSc7XG5pbXBvcnQgeyBzY2hlbWFQYWdlIH0gZnJvbSAnLi9zY2hlbWFzL3BhZ2UnO1xuLy8gVXRpbHNcbmltcG9ydCB7IGRvbSwgaGVscGVycywgaGlzdG9yeSwgcmVxdWVzdCwgdXJsIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBDb3JlIHtcbiAgLyoqXG4gICAqIFZlcnNpb24uXG4gICAqL1xuICBwdWJsaWMgdmVyc2lvbjogc3RyaW5nID0gdmVyc2lvbjtcbiAgLyoqXG4gICAqIFNjaGVtYXMuXG4gICAqL1xuICBwdWJsaWMgc2NoZW1hUGFnZTogSVNjaGVtYVBhZ2UgPSBzY2hlbWFQYWdlO1xuICAvKipcbiAgICogTG9nZ2VyIGNsYXNzLCBhbGxvd3MgcGx1Z2lucyB0byBjcmVhdGUgTG9nZ2VyLlxuICAgKi9cbiAgcHVibGljIExvZ2dlcjogdHlwZW9mIExvZ2dlciA9IExvZ2dlcjtcbiAgLyoqXG4gICAqIEJhcmJhIGxvZ2dlci5cbiAgICovXG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoJ0BiYXJiYS9jb3JlJyk7XG4gIC8qKlxuICAgKiBQbHVnaW5zLlxuICAgKi9cbiAgcHVibGljIHBsdWdpbnM6IElCYXJiYVBsdWdpbjxhbnk+W10gPSBbXTtcbiAgLyoqXG4gICAqIE9wdGlvbnNcbiAgICovXG4gIHB1YmxpYyB0aW1lb3V0OiBudW1iZXI7XG4gIHB1YmxpYyBjYWNoZUlnbm9yZTogSWdub3JlT3B0aW9uO1xuICBwdWJsaWMgY2FjaGVGaXJzdFBhZ2U6IGJvb2xlYW47XG4gIHB1YmxpYyBwcmVmZXRjaElnbm9yZTogSWdub3JlT3B0aW9uO1xuICBwdWJsaWMgcHJldmVudFJ1bm5pbmc6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBIb29rc1xuICAgKi9cbiAgcHVibGljIGhvb2tzID0gaG9va3M7XG4gIC8qKlxuICAgKiBNb2R1bGVzLlxuICAgKi9cbiAgLy8gcHVibGljIGhpc3Rvcnk6IEhpc3Rvcnk7XG4gIHB1YmxpYyBjYWNoZTogQ2FjaGU7XG4gIHB1YmxpYyBoZWFkZXJzOiBIZWFkZXJzO1xuICBwdWJsaWMgcHJldmVudDogUHJldmVudDtcbiAgcHVibGljIHRyYW5zaXRpb25zOiBUcmFuc2l0aW9ucztcbiAgcHVibGljIHZpZXdzOiBWaWV3cztcbiAgLyoqXG4gICAqIFV0aWxzLlxuICAgKi9cbiAgcHVibGljIGRvbSA9IGRvbTtcbiAgcHVibGljIGhlbHBlcnMgPSBoZWxwZXJzO1xuICBwdWJsaWMgaGlzdG9yeSA9IGhpc3Rvcnk7XG4gIHB1YmxpYyByZXF1ZXN0ID0gcmVxdWVzdDtcbiAgcHVibGljIHVybCA9IHVybDtcblxuICBwcml2YXRlIF9kYXRhOiBJVHJhbnNpdGlvbkRhdGE7XG4gIHByaXZhdGUgX3JlcXVlc3RDdXN0b21FcnJvcjogUmVxdWVzdEN1c3RvbUVycm9yO1xuICBwcml2YXRlIF93cmFwcGVyOiBXcmFwcGVyO1xuICBwcml2YXRlIF9saW5rRXZlbnQ6IExpbmtFdmVudDtcblxuICAvKipcbiAgICogIyMjIEluaXQgcGx1Z2luIHdpdGggb3B0aW9ucy5cbiAgICpcbiAgICogU2VlIFtbSUJhcmJhUGx1Z2luXV0gZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIHB1YmxpYyB1c2U8VD4ocGx1Z2luOiBJQmFyYmFQbHVnaW48VD4sIG9wdGlvbnM/OiBUKTogdm9pZCB7XG4gICAgY29uc3QgaW5zdGFsbGVkUGx1Z2lucyA9IHRoaXMucGx1Z2lucztcblxuICAgIC8vIFBsdWdpbiBpbnN0YWxsYXRpb25cbiAgICBpZiAoaW5zdGFsbGVkUGx1Z2lucy5pbmRleE9mKHBsdWdpbikgPiAtMSkge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihgUGx1Z2luIFske3BsdWdpbi5uYW1lfV0gYWxyZWFkeSBpbnN0YWxsZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBsdWdpbi5pbnN0YWxsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKGBQbHVnaW4gWyR7cGx1Z2luLm5hbWV9XSBoYXMgbm8gXCJpbnN0YWxsXCIgbWV0aG9kLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGx1Z2luLmluc3RhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgaW5zdGFsbGVkUGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gIH1cblxuICAvKipcbiAgICogIyMjIEluaXQgYmFyYmEgd2l0aCBvcHRpb25zLlxuICAgKlxuICAgKiBTZWUgW1tJQmFyYmFPcHRpb25zXV0gZm9yIG1vcmUgZGV0YWlscy5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZXMgYXJlOlxuICAgKlxuICAgKiAtIHRyYW5zaXRpb25zOiBgW11gXG4gICAqIC0gdmlld3M6IGBbXWBcbiAgICogLSBzY2hlbWE6IFtbU2NoZW1hQXR0cmlidXRlXV1cbiAgICogLSB0aW1lb3V0OiBgMmUzYFxuICAgKiAtIGNhY2hlSWdub3JlOiBgZmFsc2VgXG4gICAqIC0gY2FjaGVGaXJzdFBhZ2U6IGBmYWxzZWBcbiAgICogLSBwcmVmZXRjaElnbm9yZTogYGZhbHNlYFxuICAgKiAtIHByZXZlbnRSdW5uaW5nOiBgZmFsc2VgXG4gICAqIC0gcHJldmVudDogYG51bGxgLFxuICAgKiAtIGRlYnVnOiBgZmFsc2VgXG4gICAqIC0gbG9nTGV2ZWw6IGAnZGVidWcnYFxuICAgKi9cbiAgcHVibGljIGluaXQoXG4gICAgLyoqIEBpZ25vcmUgKi8ge1xuICAgICAgdHJhbnNpdGlvbnMgPSBbXSxcbiAgICAgIHZpZXdzID0gW10sXG4gICAgICBzY2hlbWEgPSBzY2hlbWFBdHRyaWJ1dGUsXG4gICAgICByZXF1ZXN0RXJyb3IsXG4gICAgICB0aW1lb3V0ID0gMmUzLFxuICAgICAgY2FjaGVJZ25vcmUgPSBmYWxzZSxcbiAgICAgIGNhY2hlRmlyc3RQYWdlID0gZmFsc2UsXG4gICAgICBwcmVmZXRjaElnbm9yZSA9IGZhbHNlLFxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIHByZXZlbnRSdW5uaW5nID0gZmFsc2UsXG4gICAgICBwcmV2ZW50OiBwcmV2ZW50Q3VzdG9tID0gbnVsbCxcbiAgICAgIGRlYnVnID0gZmFsc2UsXG4gICAgICBsb2dMZXZlbCA9ICdvZmYnLFxuICAgIH06IElCYXJiYU9wdGlvbnMgPSB7fVxuICApIHtcbiAgICAvLyAwLiBTZXQgbG9nZ2VyIGxldmVsIGFuZCBwcmludCB2ZXJzaW9uXG4gICAgTG9nZ2VyLnNldExldmVsKGRlYnVnID09PSB0cnVlID8gJ2RlYnVnJyA6IGxvZ0xldmVsKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKHRoaXMudmVyc2lvbik7XG5cbiAgICAvLyAxLiBNYW5hZ2Ugb3B0aW9uc1xuICAgIE9iamVjdC5rZXlzKHNjaGVtYSkuZm9yRWFjaChrID0+IHtcbiAgICAgIGNvbnN0IGF0dHIgPSBrIGFzIFNjaGVtYUF0dHJpYnV0ZVZhbHVlcztcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChzY2hlbWFBdHRyaWJ1dGVbYXR0cl0pIHtcbiAgICAgICAgc2NoZW1hQXR0cmlidXRlW2F0dHJdID0gc2NoZW1hW2F0dHJdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3JlcXVlc3RDdXN0b21FcnJvciA9IHJlcXVlc3RFcnJvcjtcbiAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgIHRoaXMuY2FjaGVJZ25vcmUgPSBjYWNoZUlnbm9yZTtcbiAgICB0aGlzLmNhY2hlRmlyc3RQYWdlID0gY2FjaGVGaXJzdFBhZ2U7XG4gICAgdGhpcy5wcmVmZXRjaElnbm9yZSA9IHByZWZldGNoSWdub3JlO1xuICAgIHRoaXMucHJldmVudFJ1bm5pbmcgPSBwcmV2ZW50UnVubmluZztcblxuICAgIC8vIDIuIEdldCBhbmQgY2hlY2sgd3JhcHBlclxuICAgIHRoaXMuX3dyYXBwZXIgPSB0aGlzLmRvbS5nZXRXcmFwcGVyKCk7XG4gICAgaWYgKCF0aGlzLl93cmFwcGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tAYmFyYmEvY29yZV0gTm8gQmFyYmEgd3JhcHBlciBmb3VuZCcpO1xuICAgIH1cblxuICAgIC8vIDMuIEluaXQgcGFnZXMgKGdldCBcImN1cnJlbnRcIiBkYXRhKVxuICAgIHRoaXMuX3Jlc2V0RGF0YSgpO1xuXG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLmRhdGE7XG5cbiAgICBpZiAoIWN1cnJlbnQuY29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tAYmFyYmEvY29yZV0gTm8gQmFyYmEgY29udGFpbmVyIGZvdW5kJyk7XG4gICAgfVxuXG4gICAgLy8gNC4gSW5pdCBvdGhlciBtb2R1bGVzXG4gICAgdGhpcy5jYWNoZSA9IG5ldyBDYWNoZShjYWNoZUlnbm9yZSk7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICB0aGlzLnByZXZlbnQgPSBuZXcgUHJldmVudChwcmVmZXRjaElnbm9yZSk7XG4gICAgdGhpcy50cmFuc2l0aW9ucyA9IG5ldyBUcmFuc2l0aW9ucyh0cmFuc2l0aW9ucyk7XG4gICAgdGhpcy52aWV3cyA9IG5ldyBWaWV3cyh2aWV3cyk7XG5cbiAgICAvLyBBZGQgcHJldmVudCBjdXN0b21cbiAgICBpZiAocHJldmVudEN1c3RvbSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBwcmV2ZW50Q3VzdG9tICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0BiYXJiYS9jb3JlXSBQcmV2ZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJldmVudC5hZGQoJ3ByZXZlbnRDdXN0b20nLCBwcmV2ZW50Q3VzdG9tKTtcbiAgICB9XG5cbiAgICAvLyA1LiBJbml0IGhpc3RvcnlcbiAgICB0aGlzLmhpc3RvcnkuaW5pdChjdXJyZW50LnVybC5ocmVmLCBjdXJyZW50Lm5hbWVzcGFjZSk7XG5cbiAgICAvLyA2LiBBZGQgdG8gY2FjaGVcbiAgICBpZiAoY2FjaGVGaXJzdFBhZ2UpIHtcbiAgICAgIHRoaXMuY2FjaGUuc2V0KGN1cnJlbnQudXJsLmhyZWYsIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgIGh0bWw6IGN1cnJlbnQuaHRtbCxcbiAgICAgICAgdXJsOiBjdXJyZW50LnVybCxcbiAgICAgIH0pLCAnaW5pdCcsICdmdWxmaWxsZWQnKTtcbiAgICB9XG5cbiAgICAvLyA3LiBCaW5kIGNvbnRleHRcbiAgICB0aGlzLl9vbkxpbmtFbnRlciA9IHRoaXMuX29uTGlua0VudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25MaW5rQ2xpY2sgPSB0aGlzLl9vbkxpbmtDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uU3RhdGVDaGFuZ2UgPSB0aGlzLl9vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYmluZCgpO1xuXG4gICAgLy8gOC4gSW5pdCBwbHVnaW5zXG4gICAgdGhpcy5wbHVnaW5zLmZvckVhY2gocGx1Z2luID0+IHBsdWdpbi5pbml0KCkpO1xuXG4gICAgLy8gOS4gQmFyYmEgcmVhZHlcbiAgICAvLyBTZXQgbmV4dCArIHRyaWdnZXIgZm9yIG9uY2UgYW5kIGBiZWZvcmVFbnRlcmAvYGFmdGVyRW50ZXJgIHZpZXcgb24gcGFnZSBsb2FkLlxuICAgIGNvbnN0IG9uY2VEYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgb25jZURhdGEudHJpZ2dlciA9ICdiYXJiYSc7XG4gICAgb25jZURhdGEubmV4dCA9IG9uY2VEYXRhLmN1cnJlbnQ7XG4gICAgb25jZURhdGEuY3VycmVudCA9IHsgLi4udGhpcy5zY2hlbWFQYWdlIH07XG4gICAgdGhpcy5ob29rcy5kbygncmVhZHknLCBvbmNlRGF0YSk7XG5cbiAgICAvLyA5LiBGaW5hbGx5LCBkbyBvbmNl4oCmXG4gICAgdGhpcy5vbmNlKG9uY2VEYXRhKTtcblxuICAgIC8vIENsZWFuIGRhdGEgZm9yIGZpcnN0IGJhcmJhIHRyYW5zaXRpb27igKZcbiAgICB0aGlzLl9yZXNldERhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2V0RGF0YSgpO1xuICAgIHRoaXMuX3VuYmluZCgpO1xuICAgIHRoaXMuaGlzdG9yeS5jbGVhcigpO1xuICAgIHRoaXMuaG9va3MuY2xlYXIoKTtcbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcbiAgfVxuXG4gIGdldCBkYXRhKCk6IElUcmFuc2l0aW9uRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgd3JhcHBlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZXI7XG4gIH1cblxuICAvKipcbiAgICogIyMjIEZvcmNlIGEgcGFnZSBjaGFuZ2Ugd2l0aG91dCBCYXJiYSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIGZvcmNlKGhyZWY6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIERFVlxuICAgIC8vIENhbiBiZSB1c2VkIHdhaXRpbmcgYW5pbWF0aW9uIGNhbmNlbGxhdGlvbiBtYW5hZ2VtZW504oCmXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihocmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAjIyMgR28gZm9yIGEgQmFyYmEgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogTWFuYWdlIFwic2VsZiBwYWdlXCIgaHJlZjpcbiAgICpcbiAgICogLSBpZiBzYW1lIHVybCBhbmQgbm8gc2VsZiB0cmFuc2l0aW9uLCBrZWVwIGRlZmF1bHQgYmVoYXZpb3JcbiAgICogICAtIGxpbms6IHJlbG9hZCB0aGUgcGFnZVxuICAgKiAgIC0gYW5jaG9yOiBzY3JvbGwgdG9cbiAgICogLSBpZiBzYW1lIHVybCB3aXRoIHNlbGYgdHJhbnNpdGlvbiwgdXNlIGl0XG4gICAqIC0gdGhlbiBzdGFydCBhIHBhZ2UgdHJhbnNpdGlvbi5cbiAgICovXG4gIHB1YmxpYyBnbyhcbiAgICBocmVmOiBzdHJpbmcsXG4gICAgdHJpZ2dlcjogVHJpZ2dlciA9ICdiYXJiYScsXG4gICAgZT86IExpbmtFdmVudCB8IFBvcFN0YXRlRXZlbnRcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fbGlua0V2ZW50ID0gbnVsbDtcblxuICAgIC8vIElmIGFuaW1hdGlvbiBydW5uaW5nLCBmb3JjZSByZWxvYWRcbiAgICBpZiAodGhpcy50cmFuc2l0aW9ucy5pc1J1bm5pbmcpIHtcbiAgICAgIHRoaXMuZm9yY2UoaHJlZik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2VsZiA9IGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgcHJldmVudCBzYW1lVVJMIGFnYWluc3QgY3VycmVudCBoaXN0b3J5XG4gICAgLy8gKyBzdGF0ZSBjaGVja1xuICAgIC8vICsgdXBkYXRlIHRyaWdnZXIgd2l0aCBkaXJlY3Rpb25cbiAgICBpZiAodHJpZ2dlciA9PT0gJ3BvcHN0YXRlJykge1xuICAgICAgc2VsZiA9XG4gICAgICAgIHRoaXMuaGlzdG9yeS5jdXJyZW50ICYmXG4gICAgICAgIHRoaXMudXJsLmdldFBhdGgodGhpcy5oaXN0b3J5LmN1cnJlbnQudXJsKSA9PT0gdGhpcy51cmwuZ2V0UGF0aChocmVmKSAmJlxuICAgICAgICB0aGlzLnVybC5nZXRRdWVyeSh0aGlzLmhpc3RvcnkuY3VycmVudC51cmwsIHRydWUpID09PSB0aGlzLnVybC5nZXRRdWVyeShocmVmLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZiA9IHRoaXMucHJldmVudC5ydW4oJ3NhbWVVcmwnLCBudWxsLCBudWxsLCBocmVmKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZiAmJiAhdGhpcy50cmFuc2l0aW9ucy5oYXNTZWxmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJpZ2dlciA9IHRoaXMuaGlzdG9yeS5jaGFuZ2UodGhpcy5jYWNoZS5oYXMoaHJlZikgPyB0aGlzLmNhY2hlLmdldChocmVmKS50YXJnZXQgOiBocmVmLCB0cmlnZ2VyLCBlKTtcblxuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBhZ2UoaHJlZiwgdHJpZ2dlciwgZSA/PyB1bmRlZmluZWQsIHNlbGYpO1xuICB9XG5cbiAgLyoqXG4gICAqICMjIyBTdGFydCBhbiBcIm9uY2VcIiB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBJZiBzb21lIHJlZ2lzdGVyZWQgXCJvbmNlXCIgdHJhbnNpdGlvbixcbiAgICogZ2V0IHRoZSBcInJlc29sdmVkXCIgdHJhbnNpdGlvbiBmcm9tIHRoZSBzdG9yZSBhbmQgc3RhcnQgaXQuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25jZShyZWFkeURhdGE6IElUcmFuc2l0aW9uRGF0YSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuaG9va3MuZG8oJ2JlZm9yZUVudGVyJywgcmVhZHlEYXRhKTtcblxuICAgIC8vIENoZWNrIGlmIG9uY2UgdHJhbnNpdGlvblxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25zLmhhc09uY2UpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25zLmdldChyZWFkeURhdGEsIHtcbiAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgIH0pIGFzIElUcmFuc2l0aW9uT25jZTtcblxuICAgICAgYXdhaXQgdGhpcy50cmFuc2l0aW9ucy5kb09uY2UoeyB0cmFuc2l0aW9uLCBkYXRhOiByZWFkeURhdGEgfSk7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5ob29rcy5kbygnYWZ0ZXJFbnRlcicsIHJlYWR5RGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogIyMjIFN0YXJ0IGEgXCJwYWdlXCIgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogMS4gSWYgbm8gcnVubmluZyB0cmFuc2l0aW9uLCB1cGRhdGVzIGRhdGEgd2l0aCBmdWxsIFVSTCBwcm9wZXJ0aWVzIGFuZCB0cmlnZ2VyLlxuICAgKiAyLiBHZXQgcGFnZSBmcm9tIGNhY2hlIG9yIGluaXQgcmVxdWVzdC5cbiAgICogMy4gV2FpdCBpZiBzb21lIHRyYW5zaXRpb25zIG5lZWQgXCJuZXh0XCIgZGF0YSAoYHN5bmM6IHRydWVgLCBgdG86IOKApmApLlxuICAgKiA0LiBNYW5hZ2UgdGhlIGhpc3RvcnksIGRlcGVuZGluZyBvbiB0cmlnZ2VyLlxuICAgKiA1LiBHZXQgXCJkYXRhXCIgYW5kIHRyaWdnZXIgXCJnb1wiIGhvb2suXG4gICAqIDYuIEdldCB0aGUgXCJyZXNvbHZlZFwiIHRyYW5zaXRpb24gZnJvbSB0aGUgc3RvcmUgYW5kIHN0YXJ0IGl0LlxuICAgKiA3LiBVcGRhdGUgdGl0bGUgYW5kIHJlc2V0IGRhdGEgKGN1cnJlbnQsIG5leHQgPSB1bmRlZmluZWQpLlxuICAgKlxuICAgKiA+IElmIFwic2VsZlwiLCB1c2UgdGhlIFwic2VsZlwiIHRyYW5zaXRpb25cbiAgICovXG4gIHB1YmxpYyBhc3luYyBwYWdlKFxuICAgIGhyZWY6IHN0cmluZyxcbiAgICB0cmlnZ2VyOiBUcmlnZ2VyLFxuICAgIGV2ZW50OiBMaW5rRXZlbnQgfCBQb3BTdGF0ZUV2ZW50LFxuICAgIHNlbGY6IGJvb2xlYW5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5kYXRhLm5leHQudXJsID0ge1xuICAgICAgaHJlZixcbiAgICAgIC4uLnRoaXMudXJsLnBhcnNlKGhyZWYpLFxuICAgIH07XG4gICAgdGhpcy5kYXRhLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMuZGF0YS5ldmVudCA9IGV2ZW50O1xuXG4gICAgbGV0IHBhZ2U7XG5cbiAgICBpZiAodGhpcy5jYWNoZS5oYXMoaHJlZikpIHtcbiAgICAgIHBhZ2UgPSB0aGlzLmNhY2hlLnVwZGF0ZShocmVmLCB7IGFjdGlvbjogJ2NsaWNrJyB9KS5yZXF1ZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYWdlUmVxdWVzdCA9IHRoaXMucmVxdWVzdChcbiAgICAgICAgaHJlZixcbiAgICAgICAgdGhpcy50aW1lb3V0LFxuICAgICAgICB0aGlzLm9uUmVxdWVzdEVycm9yLmJpbmQodGhpcywgdHJpZ2dlciksXG4gICAgICAgIHRoaXMuY2FjaGUsXG4gICAgICAgIHRoaXMuaGVhZGVyc1xuICAgICAgKTtcblxuICAgICAgLy8gbWFuYWdlIDMwMSBzZXJ2ZXIgcmVzcG9uc2U6IHJlcGxhY2UgaGlzdG9yeVxuICAgICAgcGFnZVJlcXVlc3QudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBieXBhc3MgamVzdCBzaW5jZSB4aHItbW9jayBkb2Vzbid0IHN1cHBvcnQgY3VzdG9tIHhoci5yZXNwb25zZVVSTCAqL1xuICAgICAgICBpZiAocmVzcG9uc2UudXJsLmhyZWYgIT09IGhyZWYpIHtcbiAgICAgICAgICB0aGlzLmhpc3RvcnkuYWRkKHJlc3BvbnNlLnVybC5ocmVmLCB0cmlnZ2VyLCAncmVwbGFjZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcGFnZSA9IHRoaXMuY2FjaGUuc2V0KGhyZWYsIHBhZ2VSZXF1ZXN0LCAnY2xpY2snLCAncGVuZGluZycpLnJlcXVlc3Q7XG4gICAgfVxuXG4gICAgLy8gTmVlZCB0byB3YWl0IGJlZm9yZSBnZXR0aW5nIHRoZSByaWdodCB0cmFuc2l0aW9uXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbnMuc2hvdWxkV2FpdCkge1xuICAgICAgYXdhaXQgaGVscGVycy51cGRhdGUocGFnZSwgdGhpcy5kYXRhKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgLy8gSG9vazogYmV0d2VlbiB0cmlnZ2VyIGFuZCB0cmFuc2l0aW9uXG4gICAgLy8gQ2FuIGJlIHVzZWQgdG8gcmVzb2x2ZSBcInJvdXRlXCLigKZcbiAgICBhd2FpdCB0aGlzLmhvb2tzLmRvKCdwYWdlJywgZGF0YSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbnMuZ2V0KGRhdGEsIHtcbiAgICAgICAgb25jZTogZmFsc2UsXG4gICAgICAgIHNlbGYsXG4gICAgICB9KSBhcyBJVHJhbnNpdGlvblBhZ2U7XG5cbiAgICAgIGF3YWl0IHRoaXMudHJhbnNpdGlvbnMuZG9QYWdlKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgdHJhbnNpdGlvbixcbiAgICAgICAgd3JhcHBlcjogdGhpcy5fd3JhcHBlcixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9yZXNldERhdGEoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gU29tZXRoaW5nIHdlbnQgd3JvbmcgKHJlamVjdGVkIHByb21pc2UsIGVycm9yLCA0MDQsIDUwNSwgb3RoZXLigKYpXG4gICAgICAvLyBUT0RPOiBtYW5hZ2UgLyB1c2UgY2FzZXMgZm9yIGNhbmNlbGxhdGlvblxuICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ1RyYW5zaXRpb24gY2FuY2VsbGVkJyk7XG5cbiAgICAgIC8vIElmIHRyYW5zaXRpb24gZXJyb3IgYW5kIG5vIGRlYnVnIG1vZGUsIGZvcmNlIHJlbG9hZCBwYWdlLlxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChMb2dnZXIuZ2V0TGV2ZWwoKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmZvcmNlKGRhdGEubmV4dC51cmwuaHJlZik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYSByZXF1ZXN0IGVycm9yIG9jY3Vycy5cbiAgICpcbiAgICogQWxsb3cgdGhlIHVzZXIgdG8gbWFuYWdlIHJlcXVlc3QgZXJyb3IuIChFLmc6IDQwNClcbiAgICovXG4gIHB1YmxpYyBvblJlcXVlc3RFcnJvcih0cmlnZ2VyOiBUcmlnZ2VyLCAuLi5hcmdzOiBhbnkpOiBib29sZWFuIHtcbiAgICAvLyBDYW5jZWwgdHJhbnNpdGlvbiBzdGF0dXNcbiAgICB0aGlzLnRyYW5zaXRpb25zLmlzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgY29uc3QgW2hyZWYsIHJlc3BvbnNlXTogW3N0cmluZywgUmVxdWVzdEVycm9yT3JSZXNwb25zZV0gPSBhcmdzO1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuY2FjaGUuZ2V0QWN0aW9uKGhyZWYpO1xuICAgIHRoaXMuY2FjaGUuZGVsZXRlKGhyZWYpO1xuXG4gICAgLy8gQ3VzdG9tIHJlcXVlc3RFcnJvciByZXR1cm5pbmcgZmFsc2Ugd2lsbCByZXR1cm4gaGVyZS5cbiAgICBpZiAoXG4gICAgICB0aGlzLl9yZXF1ZXN0Q3VzdG9tRXJyb3IgJiZcbiAgICAgIHRoaXMuX3JlcXVlc3RDdXN0b21FcnJvcih0cmlnZ2VyLCBhY3Rpb24sIGhyZWYsIHJlc3BvbnNlKSA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBGb3JjZSBwYWdlIGNoYW5nZVxuICAgIGlmIChhY3Rpb24gPT09ICdjbGljaycpIHtcbiAgICAgIHRoaXMuZm9yY2UoaHJlZik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IHByZWZldGNoXG4gICAqL1xuICBwdWJsaWMgcHJlZmV0Y2goaHJlZjogc3RyaW5nKSB7XG5cbiAgICAvLyBvbmx5IHByZWZldGNoIGFic29sdXRlIGhyZWZcbiAgICBocmVmID0gdGhpcy51cmwuZ2V0QWJzb2x1dGVIcmVmKGhyZWYpO1xuXG4gICAgLy8gQWxyZWFkeSBpbiBjYWNoZVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMuY2FjaGUuaGFzKGhyZWYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZS5zZXQoXG4gICAgICBocmVmLFxuICAgICAgdGhpcy5yZXF1ZXN0KFxuICAgICAgICBocmVmLFxuICAgICAgICB0aGlzLnRpbWVvdXQsXG4gICAgICAgIHRoaXMub25SZXF1ZXN0RXJyb3IuYmluZCh0aGlzLCAnYmFyYmEnKSxcbiAgICAgICAgdGhpcy5jYWNoZSxcbiAgICAgICAgdGhpcy5oZWFkZXJzXG4gICAgICApLmNhdGNoKChlcnJvcjogUmVxdWVzdEVycm9yT3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgICdwcmVmZXRjaCcsXG4gICAgICAncGVuZGluZydcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBfYmluZCgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLnByZWZldGNoSWdub3JlICE9PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9vbkxpbmtFbnRlcik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25MaW5rRW50ZXIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uTGlua0NsaWNrKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9vblN0YXRlQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50IGxpc3RlbmVycy5cbiAgICovXG4gIHByaXZhdGUgX3VuYmluZCgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLnByZWZldGNoSWdub3JlICE9PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9vbkxpbmtFbnRlcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25MaW5rRW50ZXIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uTGlua0NsaWNrKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9vblN0YXRlQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgZWxlbWVudCBpcyBlbnRlcmVkLlxuICAgKlxuICAgKiBHZXQgdmFsaWQgbGluayBlbGVtZW50LlxuICAgKiBDYWNoZSBVUkwgaWYgbmVlZGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfb25MaW5rRW50ZXIoZTogTGlua0V2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgbGluayA9IHRoaXMuX2dldExpbmtFbGVtZW50KGUpO1xuXG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaHJlZiA9IHRoaXMudXJsLmdldEFic29sdXRlSHJlZih0aGlzLmRvbS5nZXRIcmVmKGxpbmspKTtcblxuICAgIGlmICh0aGlzLnByZXZlbnQuY2hlY2tIcmVmKGhyZWYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQWxyZWFkeSBpbiBjYWNoZVxuICAgIGlmICh0aGlzLmNhY2hlLmhhcyhocmVmKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2FjaGUuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIHRoaXMucmVxdWVzdChcbiAgICAgICAgaHJlZixcbiAgICAgICAgdGhpcy50aW1lb3V0LFxuICAgICAgICB0aGlzLm9uUmVxdWVzdEVycm9yLmJpbmQodGhpcywgbGluayksXG4gICAgICAgIHRoaXMuY2FjaGUsXG4gICAgICAgIHRoaXMuaGVhZGVyc1xuICAgICAgKS5jYXRjaCgoZXJyb3I6IFJlcXVlc3RFcnJvck9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgfSksXG4gICAgICAnZW50ZXInLFxuICAgICAgJ3BlbmRpbmcnXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGFuIGVsZW1lbnQgaXMgY2xpY2tlZC5cbiAgICpcbiAgICogR2V0IHZhbGlkIGxpbmsgZWxlbWVudC5cbiAgICogUHJldmVudCBzYW1lIFVSTC5cbiAgICogR28gZm9yIGEgQmFyYmEgdHJhbnNpdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX29uTGlua0NsaWNrKGU6IExpbmtFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2xpbmtFdmVudCA9IGU7XG5cbiAgICAvLyBUaGlzIHVzZSBgcHJldmVudC5jaGVja0xpbmtgIHVuZGVyIHRoZSBob29kIHRvIGdldCBlbGlnaWJsZSBsaW5rLlxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLl9nZXRMaW5rRWxlbWVudChlKTtcblxuICAgIGlmICghbGluaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25zLmlzUnVubmluZyAmJiB0aGlzLnByZXZlbnRSdW5uaW5nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nbyh0aGlzLmRvbS5nZXRIcmVmKGxpbmspLCBsaW5rLCBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIEhpc3Rvcnkgc3RhdGUgY2hhbmdlcy5cbiAgICpcbiAgICogR2V0IFwiaHJlZlwiIGZyb20gVVJMXG4gICAqIEdvIGZvciBhIEJhcmJhIHRyYW5zaXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9vblN0YXRlQ2hhbmdlKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogcHJldmVudCBydW5uaW5nIHBvcHN0YXRlIGlmIGEgbm9uLWVsaWdpYmxlIGxpbmsgaGFzIGJlZW4gY2xpY2tlZFxuICAgIGlmICh0aGlzLl9saW5rRXZlbnQgJiYgIXRoaXMuX2dldExpbmtFbGVtZW50KHRoaXMuX2xpbmtFdmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdvKHRoaXMudXJsLmdldEhyZWYoKSwgJ3BvcHN0YXRlJywgZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgdmFsaWQgbGluayBhbmNlc3Rvci5cbiAgICpcbiAgICogQ2hlY2sgZm9yIGEgXCJocmVmXCIgYXR0cmlidXRlLlxuICAgKiBUaGVuIGNoZWNrIGlmIGVsaWdpYmxlIGZvciBCYXJiYS5cbiAgICovXG4gIHByaXZhdGUgX2dldExpbmtFbGVtZW50KGU6IExpbmtFdmVudCk6IExpbmsge1xuICAgIGxldCBlbCA9IGUudGFyZ2V0IGFzIExpbms7XG5cbiAgICB3aGlsZSAoZWwgJiYgIXRoaXMuZG9tLmdldEhyZWYoZWwpKSB7XG4gICAgICBlbCA9IChlbCBhcyBIVE1MRWxlbWVudCkucGFyZW50Tm9kZSBhcyBMaW5rO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHByZXZlbnRcbiAgICBpZiAoIWVsIHx8IHRoaXMucHJldmVudC5jaGVja0xpbmsoZWwsIGUsIHRoaXMuZG9tLmdldEhyZWYoZWwpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBwYWdlcyBkYXRhLlxuICAgKlxuICAgKiBTZXQgXCJjdXJyZW50XCIgYW5kIHVuc2V0IFwibmV4dFwiLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzZXREYXRhKCkge1xuICAgIGNvbnN0IGhyZWYgPSB0aGlzLnVybC5nZXRIcmVmKCk7XG4gICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5kb20uZ2V0Q29udGFpbmVyKCksXG4gICAgICBodG1sOiB0aGlzLmRvbS5nZXRIdG1sKCksXG4gICAgICBuYW1lc3BhY2U6IHRoaXMuZG9tLmdldE5hbWVzcGFjZSgpLFxuICAgICAgdXJsOiB7XG4gICAgICAgIGhyZWYsXG4gICAgICAgIC4uLnRoaXMudXJsLnBhcnNlKGhyZWYpLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5fZGF0YSA9IHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBldmVudDogdW5kZWZpbmVkLFxuICAgICAgbmV4dDogeyAuLi50aGlzLnNjaGVtYVBhZ2UgfSxcbiAgICAgIHRyaWdnZXI6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgdGhpcy5ob29rcy5kbygncmVzZXQnLCB0aGlzLmRhdGEpO1xuICB9XG59XG5cbmNvbnN0IGNvcmUgPSBuZXcgQ29yZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiLypcbiAqIGFuaW1lLmpzIHYzLjIuMlxuICogKGMpIDIwMjMgSnVsaWFuIEdhcm5pZXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogYW5pbWVqcy5jb21cbiAqL1xuXG4vLyBEZWZhdWx0c1xuXG52YXIgZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MgPSB7XG4gIHVwZGF0ZTogbnVsbCxcbiAgYmVnaW46IG51bGwsXG4gIGxvb3BCZWdpbjogbnVsbCxcbiAgY2hhbmdlQmVnaW46IG51bGwsXG4gIGNoYW5nZTogbnVsbCxcbiAgY2hhbmdlQ29tcGxldGU6IG51bGwsXG4gIGxvb3BDb21wbGV0ZTogbnVsbCxcbiAgY29tcGxldGU6IG51bGwsXG4gIGxvb3A6IDEsXG4gIGRpcmVjdGlvbjogJ25vcm1hbCcsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICB0aW1lbGluZU9mZnNldDogMFxufTtcblxudmFyIGRlZmF1bHRUd2VlblNldHRpbmdzID0ge1xuICBkdXJhdGlvbjogMTAwMCxcbiAgZGVsYXk6IDAsXG4gIGVuZERlbGF5OiAwLFxuICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxLCAuNSknLFxuICByb3VuZDogMFxufTtcblxudmFyIHZhbGlkVHJhbnNmb3JtcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCAncm90YXRlJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXcnLCAnc2tld1gnLCAnc2tld1knLCAncGVyc3BlY3RpdmUnLCAnbWF0cml4JywgJ21hdHJpeDNkJ107XG5cbi8vIENhY2hpbmdcblxudmFyIGNhY2hlID0ge1xuICBDU1M6IHt9LFxuICBzcHJpbmdzOiB7fVxufTtcblxuLy8gVXRpbHNcblxuZnVuY3Rpb24gbWluTWF4KHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nQ29udGFpbnMoc3RyLCB0ZXh0KSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZih0ZXh0KSA+IC0xO1xufVxuXG5mdW5jdGlvbiBhcHBseUFyZ3VtZW50cyhmdW5jLCBhcmdzKSB7XG4gIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG52YXIgaXMgPSB7XG4gIGFycjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7IH0sXG4gIG9iajogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHN0cmluZ0NvbnRhaW5zKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSwgJ09iamVjdCcpOyB9LFxuICBwdGg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKTsgfSxcbiAgc3ZnOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7IH0sXG4gIGlucDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50OyB9LFxuICBkb206IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKTsgfSxcbiAgc3RyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnOyB9LFxuICBmbmM6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgdW5kOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnOyB9LFxuICBuaWw6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbDsgfSxcbiAgaGV4OiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSk7IH0sXG4gIHJnYjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC9ecmdiLy50ZXN0KGEpOyB9LFxuICBoc2w6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvXmhzbC8udGVzdChhKTsgfSxcbiAgY29sOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKTsgfSxcbiAga2V5OiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcyc7IH0sXG59O1xuXG4vLyBFYXNpbmdzXG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpIHtcbiAgdmFyIG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyaW5nKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHBhcnNlRmxvYXQocCk7IH0pIDogW107XG59XG5cbi8vIFNwcmluZyBzb2x2ZXIgaW5zcGlyZWQgYnkgV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcblxuZnVuY3Rpb24gc3ByaW5nKHN0cmluZywgZHVyYXRpb24pIHtcblxuICB2YXIgcGFyYW1zID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZyk7XG4gIHZhciBtYXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMF0pID8gMSA6IHBhcmFtc1swXSwgLjEsIDEwMCk7XG4gIHZhciBzdGlmZm5lc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1sxXSkgPyAxMDAgOiBwYXJhbXNbMV0sIC4xLCAxMDApO1xuICB2YXIgZGFtcGluZyA9IG1pbk1heChpcy51bmQocGFyYW1zWzJdKSA/IDEwIDogcGFyYW1zWzJdLCAuMSwgMTAwKTtcbiAgdmFyIHZlbG9jaXR5ID0gIG1pbk1heChpcy51bmQocGFyYW1zWzNdKSA/IDAgOiBwYXJhbXNbM10sIC4xLCAxMDApO1xuICB2YXIgdzAgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XG4gIHZhciB6ZXRhID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcbiAgdmFyIHdkID0gemV0YSA8IDEgPyB3MCAqIE1hdGguc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcbiAgdmFyIGEgPSAxO1xuICB2YXIgYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12ZWxvY2l0eSkgLyB3ZCA6IC12ZWxvY2l0eSArIHcwO1xuXG4gIGZ1bmN0aW9uIHNvbHZlcih0KSB7XG4gICAgdmFyIHByb2dyZXNzID0gZHVyYXRpb24gPyAoZHVyYXRpb24gKiB0KSAvIDEwMDAgOiB0O1xuICAgIGlmICh6ZXRhIDwgMSkge1xuICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB6ZXRhICogdzApICogKGEgKiBNYXRoLmNvcyh3ZCAqIHByb2dyZXNzKSArIGIgKiBNYXRoLnNpbih3ZCAqIHByb2dyZXNzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzID0gKGEgKyBiICogcHJvZ3Jlc3MpICogTWF0aC5leHAoLXByb2dyZXNzICogdzApO1xuICAgIH1cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7IHJldHVybiB0OyB9XG4gICAgcmV0dXJuIDEgLSBwcm9ncmVzcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5zcHJpbmdzW3N0cmluZ107XG4gICAgaWYgKGNhY2hlZCkgeyByZXR1cm4gY2FjaGVkOyB9XG4gICAgdmFyIGZyYW1lID0gMS82O1xuICAgIHZhciBlbGFwc2VkID0gMDtcbiAgICB2YXIgcmVzdCA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgZWxhcHNlZCArPSBmcmFtZTtcbiAgICAgIGlmIChzb2x2ZXIoZWxhcHNlZCkgPT09IDEpIHtcbiAgICAgICAgcmVzdCsrO1xuICAgICAgICBpZiAocmVzdCA+PSAxNikgeyBicmVhazsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBkdXJhdGlvbiA9IGVsYXBzZWQgKiBmcmFtZSAqIDEwMDA7XG4gICAgY2FjaGUuc3ByaW5nc1tzdHJpbmddID0gZHVyYXRpb247XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG5cbiAgcmV0dXJuIGR1cmF0aW9uID8gc29sdmVyIDogZ2V0RHVyYXRpb247XG5cbn1cblxuLy8gQmFzaWMgc3RlcHMgZWFzaW5nIGltcGxlbWVudGF0aW9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxuXG5mdW5jdGlvbiBzdGVwcyhzdGVwcykge1xuICBpZiAoIHN0ZXBzID09PSB2b2lkIDAgKSBzdGVwcyA9IDEwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5jZWlsKChtaW5NYXgodCwgMC4wMDAwMDEsIDEpKSAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpOyB9O1xufVxuXG4vLyBCZXppZXJFYXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG5cbnZhciBiZXppZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG4gIHZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbiAgZnVuY3Rpb24gQShhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExIH1cbiAgZnVuY3Rpb24gQihhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExIH1cbiAgZnVuY3Rpb24gQyhhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExIH1cblxuICBmdW5jdGlvbiBjYWxjQmV6aWVyKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQgfVxuICBmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSkgfVxuXG4gIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICAgIGRvIHtcbiAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7IGFCID0gY3VycmVudFQ7IH0gZWxzZSB7IGFBID0gY3VycmVudFQ7IH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiAwLjAwMDAwMDEgJiYgKytpIDwgMTApO1xuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7IHJldHVybiBhR3Vlc3NUOyB9XG4gICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG4gICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH1cblxuICBmdW5jdGlvbiBiZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG5cbiAgICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHsgcmV0dXJuOyB9XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG5cbiAgICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRGb3JYKGFYKSB7XG5cbiAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMDtcbiAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgfVxuXG4gICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSAwLjAwMSkge1xuICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHsgcmV0dXJuIHg7IH1cbiAgICAgIGlmICh4ID09PSAwIHx8IHggPT09IDEpIHsgcmV0dXJuIHg7IH1cbiAgICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gYmV6aWVyO1xuXG59KSgpO1xuXG52YXIgcGVubmVyID0gKGZ1bmN0aW9uICgpIHtcblxuICAvLyBCYXNlZCBvbiBqUXVlcnkgVUkncyBpbXBsZW1lbmF0aW9uIG9mIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyIChodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nKVxuXG4gIHZhciBlYXNlcyA9IHsgbGluZWFyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTsgfSB9O1xuXG4gIHZhciBmdW5jdGlvbkVhc2luZ3MgPSB7XG4gICAgU2luZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpOyB9OyB9LFxuICAgIEV4cG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0ID8gTWF0aC5wb3coMiwgMTAgKiB0IC0gMTApIDogMDsgfTsgfSxcbiAgICBDaXJjOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpOyB9OyB9LFxuICAgIEJhY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0ICogdCAqICgzICogdCAtIDIpOyB9OyB9LFxuICAgIEJvdW5jZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciBwb3cyLCBiID0gNDtcbiAgICAgIHdoaWxlICh0IDwgKCggcG93MiA9IE1hdGgucG93KDIsIC0tYikpIC0gMSkgLyAxMSkge31cbiAgICAgIHJldHVybiAxIC8gTWF0aC5wb3coNCwgMyAtIGIpIC0gNy41NjI1ICogTWF0aC5wb3coKCBwb3cyICogMyAtIDIgKSAvIDIyIC0gdCwgMilcbiAgICB9OyB9LFxuICAgIEVsYXN0aWM6IGZ1bmN0aW9uIChhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICAgICAgaWYgKCBhbXBsaXR1ZGUgPT09IHZvaWQgMCApIGFtcGxpdHVkZSA9IDE7XG4gICAgICBpZiAoIHBlcmlvZCA9PT0gdm9pZCAwICkgcGVyaW9kID0gLjU7XG5cbiAgICAgIHZhciBhID0gbWluTWF4KGFtcGxpdHVkZSwgMSwgMTApO1xuICAgICAgdmFyIHAgPSBtaW5NYXgocGVyaW9kLCAuMSwgMik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICh0ID09PSAwIHx8IHQgPT09IDEpID8gdCA6IFxuICAgICAgICAgIC1hICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSAqIE1hdGguc2luKCgoKHQgLSAxKSAtIChwIC8gKE1hdGguUEkgKiAyKSAqIE1hdGguYXNpbigxIC8gYSkpKSAqIChNYXRoLlBJICogMikpIC8gcCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBiYXNlRWFzaW5ncyA9IFsnUXVhZCcsICdDdWJpYycsICdRdWFydCcsICdRdWludCddO1xuXG4gIGJhc2VFYXNpbmdzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGkpIHtcbiAgICBmdW5jdGlvbkVhc2luZ3NbbmFtZV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5wb3codCwgaSArIDIpOyB9OyB9O1xuICB9KTtcblxuICBPYmplY3Qua2V5cyhmdW5jdGlvbkVhc2luZ3MpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZWFzZUluID0gZnVuY3Rpb25FYXNpbmdzW25hbWVdO1xuICAgIGVhc2VzWydlYXNlSW4nICsgbmFtZV0gPSBlYXNlSW47XG4gICAgZWFzZXNbJ2Vhc2VPdXQnICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBlYXNlSW4oYSwgYikoMSAtIHQpOyB9OyB9O1xuICAgIGVhc2VzWydlYXNlSW5PdXQnICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPCAwLjUgPyBlYXNlSW4oYSwgYikodCAqIDIpIC8gMiA6IFxuICAgICAgMSAtIGVhc2VJbihhLCBiKSh0ICogLTIgKyAyKSAvIDI7IH07IH07XG4gICAgZWFzZXNbJ2Vhc2VPdXRJbicgKyBuYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IDAuNSA/ICgxIC0gZWFzZUluKGEsIGIpKDEgLSB0ICogMikpIC8gMiA6IFxuICAgICAgKGVhc2VJbihhLCBiKSh0ICogMiAtIDEpICsgMSkgLyAyOyB9OyB9O1xuICB9KTtcblxuICByZXR1cm4gZWFzZXM7XG5cbn0pKCk7XG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5ncyhlYXNpbmcsIGR1cmF0aW9uKSB7XG4gIGlmIChpcy5mbmMoZWFzaW5nKSkgeyByZXR1cm4gZWFzaW5nOyB9XG4gIHZhciBuYW1lID0gZWFzaW5nLnNwbGl0KCcoJylbMF07XG4gIHZhciBlYXNlID0gcGVubmVyW25hbWVdO1xuICB2YXIgYXJncyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhlYXNpbmcpO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlICdzcHJpbmcnIDogcmV0dXJuIHNwcmluZyhlYXNpbmcsIGR1cmF0aW9uKTtcbiAgICBjYXNlICdjdWJpY0JlemllcicgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBhcmdzKTtcbiAgICBjYXNlICdzdGVwcycgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoc3RlcHMsIGFyZ3MpO1xuICAgIGRlZmF1bHQgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoZWFzZSwgYXJncyk7XG4gIH1cbn1cblxuLy8gU3RyaW5nc1xuXG5mdW5jdGlvbiBzZWxlY3RTdHJpbmcoc3RyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHIpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIEFycmF5c1xuXG5mdW5jdGlvbiBmaWx0ZXJBcnJheShhcnIsIGNhbGxiYWNrKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGkgaW4gYXJyKSB7XG4gICAgICB2YXIgdmFsID0gYXJyW2ldO1xuICAgICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsLCBpLCBhcnIpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29uY2F0KGlzLmFycihiKSA/IGZsYXR0ZW5BcnJheShiKSA6IGIpOyB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkobykge1xuICBpZiAoaXMuYXJyKG8pKSB7IHJldHVybiBvOyB9XG4gIGlmIChpcy5zdHIobykpIHsgbyA9IHNlbGVjdFN0cmluZyhvKSB8fCBvOyB9XG4gIGlmIChvIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7IHJldHVybiBbXS5zbGljZS5jYWxsKG8pOyB9XG4gIHJldHVybiBbb107XG59XG5cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMoYXJyLCB2YWwpIHtcbiAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhID09PSB2YWw7IH0pO1xufVxuXG4vLyBPYmplY3RzXG5cbmZ1bmN0aW9uIGNsb25lT2JqZWN0KG8pIHtcbiAgdmFyIGNsb25lID0ge307XG4gIGZvciAodmFyIHAgaW4gbykgeyBjbG9uZVtwXSA9IG9bcF07IH1cbiAgcmV0dXJuIGNsb25lO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0UHJvcHMobzEsIG8yKSB7XG4gIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xuICBmb3IgKHZhciBwIGluIG8xKSB7IG9bcF0gPSBvMi5oYXNPd25Qcm9wZXJ0eShwKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzIpIHsgb1twXSA9IGlzLnVuZChvMVtwXSkgPyBvMltwXSA6IG8xW3BdOyB9XG4gIHJldHVybiBvO1xufVxuXG4vLyBDb2xvcnNcblxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XG4gIHZhciByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xuICByZXR1cm4gcmdiID8gKFwicmdiYShcIiArIChyZ2JbMV0pICsgXCIsMSlcIikgOiByZ2JWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XG4gIHZhciByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICB2YXIgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7IHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7IH0gKTtcbiAgdmFyIHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICB2YXIgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICB2YXIgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xuICB2YXIgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xuICByZXR1cm4gKFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIiwxKVwiKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XG4gIHZhciBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xuICB2YXIgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xuICB2YXIgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xuICB2YXIgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xuICB2YXIgYSA9IGhzbFs0XSB8fCAxO1xuICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHsgdCArPSAxOyB9XG4gICAgaWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxuICAgIGlmICh0IDwgMS82KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0OyB9XG4gICAgaWYgKHQgPCAxLzIpIHsgcmV0dXJuIHE7IH1cbiAgICBpZiAodCA8IDIvMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2OyB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgdmFyIHIsIGcsIGI7XG4gIGlmIChzID09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMS8zKTtcbiAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTtcbiAgfVxuICByZXR1cm4gKFwicmdiYShcIiArIChyICogMjU1KSArIFwiLFwiICsgKGcgKiAyNTUpICsgXCIsXCIgKyAoYiAqIDI1NSkgKyBcIixcIiArIGEgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9SZ2IodmFsKSB7XG4gIGlmIChpcy5yZ2IodmFsKSkgeyByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7IH1cbiAgaWYgKGlzLmhleCh2YWwpKSB7IHJldHVybiBoZXhUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaHNsKHZhbCkpIHsgcmV0dXJuIGhzbFRvUmdiYSh2YWwpOyB9XG59XG5cbi8vIFVuaXRzXG5cbmZ1bmN0aW9uIGdldFVuaXQodmFsKSB7XG4gIHZhciBzcGxpdCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPyglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKHZhbCk7XG4gIGlmIChzcGxpdCkgeyByZXR1cm4gc3BsaXRbMV07IH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykgeyByZXR1cm4gJ3B4JzsgfVxuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NrZXcnKSkgeyByZXR1cm4gJ2RlZyc7IH1cbn1cblxuLy8gVmFsdWVzXG5cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XG4gIGlmICghaXMuZm5jKHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICByZXR1cm4gdmFsKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltYXRhYmxlLmlkLCBhbmltYXRhYmxlLnRvdGFsKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICBpZiAoYXJyYXlDb250YWlucyhbdW5pdCwgJ2RlZycsICdyYWQnLCAndHVybiddLCB2YWx1ZVVuaXQpKSB7IHJldHVybiB2YWx1ZTsgfVxuICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XG4gIGlmICghaXMudW5kKGNhY2hlZCkpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICB2YXIgYmFzZWxpbmUgPSAxMDA7XG4gIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xuICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xuICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xuICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XG4gIHZhciBmYWN0b3IgPSBiYXNlbGluZSAvIHRlbXBFbC5vZmZzZXRXaWR0aDtcbiAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcbiAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF0gPSBjb252ZXJ0ZWRVbml0O1xuICByZXR1cm4gY29udmVydGVkVW5pdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcbiAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcbiAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKGVsLCBwcm9wKSB7XG4gIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmICghaXMubmlsKGdldEF0dHJpYnV0ZShlbCwgcHJvcCkpIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHsgcmV0dXJuICdhdHRyaWJ1dGUnOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkgeyByZXR1cm4gJ3RyYW5zZm9ybSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgKHByb3AgIT09ICd0cmFuc2Zvcm0nICYmIGdldENTU1ZhbHVlKGVsLCBwcm9wKSkpIHsgcmV0dXJuICdjc3MnOyB9XG4gIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7IHJldHVybiAnb2JqZWN0JzsgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xuICBpZiAoIWlzLmRvbShlbCkpIHsgcmV0dXJuOyB9XG4gIHZhciBzdHIgPSBlbC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XG4gIHZhciByZWcgID0gLyhcXHcrKVxcKChbXildKilcXCkvZztcbiAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG4gIHZhciBtOyB3aGlsZSAobSA9IHJlZy5leGVjKHN0cikpIHsgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7IH1cbiAgcmV0dXJuIHRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xuICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XG4gIHZhciB2YWx1ZSA9IGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRWYWw7XG4gIGlmIChhbmltYXRhYmxlKSB7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcbiAgfVxuICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCwgYW5pbWF0YWJsZSkge1xuICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcbiAgICBjYXNlICd0cmFuc2Zvcm0nOiByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XG4gICAgY2FzZSAnY3NzJzogcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xuICAgIGNhc2UgJ2F0dHJpYnV0ZSc6IHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgZGVmYXVsdDogcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XG4gIHZhciBvcGVyYXRvciA9IC9eKFxcKj18XFwrPXwtPSkvLmV4ZWModG8pO1xuICBpZiAoIW9wZXJhdG9yKSB7IHJldHVybiB0bzsgfVxuICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChmcm9tKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XG4gIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcbiAgICBjYXNlICcrJzogcmV0dXJuIHggKyB5ICsgdTtcbiAgICBjYXNlICctJzogcmV0dXJuIHggLSB5ICsgdTtcbiAgICBjYXNlICcqJzogcmV0dXJuIHggKiB5ICsgdTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbCwgdW5pdCkge1xuICBpZiAoaXMuY29sKHZhbCkpIHsgcmV0dXJuIGNvbG9yVG9SZ2IodmFsKTsgfVxuICBpZiAoL1xccy9nLnRlc3QodmFsKSkgeyByZXR1cm4gdmFsOyB9XG4gIHZhciBvcmlnaW5hbFVuaXQgPSBnZXRVbml0KHZhbCk7XG4gIHZhciB1bml0TGVzcyA9IG9yaWdpbmFsVW5pdCA/IHZhbC5zdWJzdHIoMCwgdmFsLmxlbmd0aCAtIG9yaWdpbmFsVW5pdC5sZW5ndGgpIDogdmFsO1xuICBpZiAodW5pdCkgeyByZXR1cm4gdW5pdExlc3MgKyB1bml0OyB9XG4gIHJldHVybiB1bml0TGVzcztcbn1cblxuLy8gZ2V0VG90YWxMZW5ndGgoKSBlcXVpdmFsZW50IGZvciBjaXJjbGUsIHJlY3QsIHBvbHlsaW5lLCBwb2x5Z29uIGFuZCBsaW5lIHNoYXBlc1xuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xufVxuXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XG4gIHJldHVybiAoZ2V0QXR0cmlidXRlKGVsLCAnd2lkdGgnKSAqIDIpICsgKGdldEF0dHJpYnV0ZShlbCwgJ2hlaWdodCcpICogMik7XG59XG5cbmZ1bmN0aW9uIGdldExpbmVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIGdldERpc3RhbmNlKFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MScpfSwgXG4gICAge3g6IGdldEF0dHJpYnV0ZShlbCwgJ3gyJyksIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kyJyl9XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSB7XG4gIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XG4gIHZhciB0b3RhbExlbmd0aCA9IDA7XG4gIHZhciBwcmV2aW91c1BvcztcbiAgZm9yICh2YXIgaSA9IDAgOyBpIDwgcG9pbnRzLm51bWJlck9mSXRlbXM7IGkrKykge1xuICAgIHZhciBjdXJyZW50UG9zID0gcG9pbnRzLmdldEl0ZW0oaSk7XG4gICAgaWYgKGkgPiAwKSB7IHRvdGFsTGVuZ3RoICs9IGdldERpc3RhbmNlKHByZXZpb3VzUG9zLCBjdXJyZW50UG9zKTsgfVxuICAgIHByZXZpb3VzUG9zID0gY3VycmVudFBvcztcbiAgfVxuICByZXR1cm4gdG90YWxMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlnb25MZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSArIGdldERpc3RhbmNlKHBvaW50cy5nZXRJdGVtKHBvaW50cy5udW1iZXJPZkl0ZW1zIC0gMSksIHBvaW50cy5nZXRJdGVtKDApKTtcbn1cblxuLy8gUGF0aCBhbmltYXRpb25cblxuZnVuY3Rpb24gZ2V0VG90YWxMZW5ndGgoZWwpIHtcbiAgaWYgKGVsLmdldFRvdGFsTGVuZ3RoKSB7IHJldHVybiBlbC5nZXRUb3RhbExlbmd0aCgpOyB9XG4gIHN3aXRjaChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdjaXJjbGUnOiByZXR1cm4gZ2V0Q2lyY2xlTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdyZWN0JzogcmV0dXJuIGdldFJlY3RMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ2xpbmUnOiByZXR1cm4gZ2V0TGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWxpbmUnOiByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3BvbHlnb24nOiByZXR1cm4gZ2V0UG9seWdvbkxlbmd0aChlbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGFzaG9mZnNldChlbCkge1xuICB2YXIgcGF0aExlbmd0aCA9IGdldFRvdGFsTGVuZ3RoKGVsKTtcbiAgZWwuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgcGF0aExlbmd0aCk7XG4gIHJldHVybiBwYXRoTGVuZ3RoO1xufVxuXG4vLyBNb3Rpb24gcGF0aFxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmdFbChlbCkge1xuICB2YXIgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xuICB3aGlsZSAoaXMuc3ZnKHBhcmVudEVsKSkge1xuICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7IGJyZWFrOyB9XG4gICAgcGFyZW50RWwgPSBwYXJlbnRFbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBwYXJlbnRFbDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnKHBhdGhFbCwgc3ZnRGF0YSkge1xuICB2YXIgc3ZnID0gc3ZnRGF0YSB8fCB7fTtcbiAgdmFyIHBhcmVudFN2Z0VsID0gc3ZnLmVsIHx8IGdldFBhcmVudFN2Z0VsKHBhdGhFbCk7XG4gIHZhciByZWN0ID0gcGFyZW50U3ZnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB2aWV3Qm94QXR0ciA9IGdldEF0dHJpYnV0ZShwYXJlbnRTdmdFbCwgJ3ZpZXdCb3gnKTtcbiAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcbiAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICB2YXIgdmlld0JveCA9IHN2Zy52aWV3Qm94IHx8ICh2aWV3Qm94QXR0ciA/IHZpZXdCb3hBdHRyLnNwbGl0KCcgJykgOiBbMCwgMCwgd2lkdGgsIGhlaWdodF0pO1xuICByZXR1cm4ge1xuICAgIGVsOiBwYXJlbnRTdmdFbCxcbiAgICB2aWV3Qm94OiB2aWV3Qm94LFxuICAgIHg6IHZpZXdCb3hbMF0gLyAxLFxuICAgIHk6IHZpZXdCb3hbMV0gLyAxLFxuICAgIHc6IHdpZHRoLFxuICAgIGg6IGhlaWdodCxcbiAgICB2Vzogdmlld0JveFsyXSxcbiAgICB2SDogdmlld0JveFszXVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGgocGF0aCwgcGVyY2VudCkge1xuICB2YXIgcGF0aEVsID0gaXMuc3RyKHBhdGgpID8gc2VsZWN0U3RyaW5nKHBhdGgpWzBdIDogcGF0aDtcbiAgdmFyIHAgPSBwZXJjZW50IHx8IDEwMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgIGVsOiBwYXRoRWwsXG4gICAgICBzdmc6IGdldFBhcmVudFN2ZyhwYXRoRWwpLFxuICAgICAgdG90YWxMZW5ndGg6IGdldFRvdGFsTGVuZ3RoKHBhdGhFbCkgKiAocCAvIDEwMClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aFByb2dyZXNzKHBhdGgsIHByb2dyZXNzLCBpc1BhdGhUYXJnZXRJbnNpZGVTVkcpIHtcbiAgZnVuY3Rpb24gcG9pbnQob2Zmc2V0KSB7XG4gICAgaWYgKCBvZmZzZXQgPT09IHZvaWQgMCApIG9mZnNldCA9IDA7XG5cbiAgICB2YXIgbCA9IHByb2dyZXNzICsgb2Zmc2V0ID49IDEgPyBwcm9ncmVzcyArIG9mZnNldCA6IDA7XG4gICAgcmV0dXJuIHBhdGguZWwuZ2V0UG9pbnRBdExlbmd0aChsKTtcbiAgfVxuICB2YXIgc3ZnID0gZ2V0UGFyZW50U3ZnKHBhdGguZWwsIHBhdGguc3ZnKTtcbiAgdmFyIHAgPSBwb2ludCgpO1xuICB2YXIgcDAgPSBwb2ludCgtMSk7XG4gIHZhciBwMSA9IHBvaW50KCsxKTtcbiAgdmFyIHNjYWxlWCA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcudyAvIHN2Zy52VztcbiAgdmFyIHNjYWxlWSA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcuaCAvIHN2Zy52SDtcbiAgc3dpdGNoIChwYXRoLnByb3BlcnR5KSB7XG4gICAgY2FzZSAneCc6IHJldHVybiAocC54IC0gc3ZnLngpICogc2NhbGVYO1xuICAgIGNhc2UgJ3knOiByZXR1cm4gKHAueSAtIHN2Zy55KSAqIHNjYWxlWTtcbiAgICBjYXNlICdhbmdsZSc6IHJldHVybiBNYXRoLmF0YW4yKHAxLnkgLSBwMC55LCBwMS54IC0gcDAueCkgKiAxODAgLyBNYXRoLlBJO1xuICB9XG59XG5cbi8vIERlY29tcG9zZSB2YWx1ZVxuXG5mdW5jdGlvbiBkZWNvbXBvc2VWYWx1ZSh2YWwsIHVuaXQpIHtcbiAgLy8gY29uc3Qgcmd4ID0gLy0/XFxkKlxcLj9cXGQrL2c7IC8vIGhhbmRsZXMgYmFzaWMgbnVtYmVyc1xuICAvLyBjb25zdCByZ3ggPSAvWystXT9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXG4gIHZhciByZ3ggPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cbiAgdmFyIHZhbHVlID0gdmFsaWRhdGVWYWx1ZSgoaXMucHRoKHZhbCkgPyB2YWwudG90YWxMZW5ndGggOiB2YWwpLCB1bml0KSArICcnO1xuICByZXR1cm4ge1xuICAgIG9yaWdpbmFsOiB2YWx1ZSxcbiAgICBudW1iZXJzOiB2YWx1ZS5tYXRjaChyZ3gpID8gdmFsdWUubWF0Y2gocmd4KS5tYXAoTnVtYmVyKSA6IFswXSxcbiAgICBzdHJpbmdzOiAoaXMuc3RyKHZhbCkgfHwgdW5pdCkgPyB2YWx1ZS5zcGxpdChyZ3gpIDogW11cbiAgfVxufVxuXG4vLyBBbmltYXRhYmxlc1xuXG5mdW5jdGlvbiBwYXJzZVRhcmdldHModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0c0FycmF5ID0gdGFyZ2V0cyA/IChmbGF0dGVuQXJyYXkoaXMuYXJyKHRhcmdldHMpID8gdGFyZ2V0cy5tYXAodG9BcnJheSkgOiB0b0FycmF5KHRhcmdldHMpKSkgOiBbXTtcbiAgcmV0dXJuIGZpbHRlckFycmF5KHRhcmdldHNBcnJheSwgZnVuY3Rpb24gKGl0ZW0sIHBvcywgc2VsZikgeyByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBwb3M7IH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIHJldHVybiBwYXJzZWQubWFwKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgcmV0dXJuIHt0YXJnZXQ6IHQsIGlkOiBpLCB0b3RhbDogcGFyc2VkLmxlbmd0aCwgdHJhbnNmb3JtczogeyBsaXN0OiBnZXRFbGVtZW50VHJhbnNmb3Jtcyh0KSB9IH07XG4gIH0pO1xufVxuXG4vLyBQcm9wZXJ0aWVzXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHByb3AsIHR3ZWVuU2V0dGluZ3MpIHtcbiAgdmFyIHNldHRpbmdzID0gY2xvbmVPYmplY3QodHdlZW5TZXR0aW5ncyk7XG4gIC8vIE92ZXJyaWRlIGR1cmF0aW9uIGlmIGVhc2luZyBpcyBhIHNwcmluZ1xuICBpZiAoL15zcHJpbmcvLnRlc3Qoc2V0dGluZ3MuZWFzaW5nKSkgeyBzZXR0aW5ncy5kdXJhdGlvbiA9IHNwcmluZyhzZXR0aW5ncy5lYXNpbmcpOyB9XG4gIGlmIChpcy5hcnIocHJvcCkpIHtcbiAgICB2YXIgbCA9IHByb3AubGVuZ3RoO1xuICAgIHZhciBpc0Zyb21UbyA9IChsID09PSAyICYmICFpcy5vYmoocHJvcFswXSkpO1xuICAgIGlmICghaXNGcm9tVG8pIHtcbiAgICAgIC8vIER1cmF0aW9uIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiB0d2VlbnNcbiAgICAgIGlmICghaXMuZm5jKHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24pKSB7IHNldHRpbmdzLmR1cmF0aW9uID0gdHdlZW5TZXR0aW5ncy5kdXJhdGlvbiAvIGw7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJhbnNmb3JtIFtmcm9tLCB0b10gdmFsdWVzIHNob3J0aGFuZCB0byBhIHZhbGlkIHR3ZWVuIHZhbHVlXG4gICAgICBwcm9wID0ge3ZhbHVlOiBwcm9wfTtcbiAgICB9XG4gIH1cbiAgdmFyIHByb3BBcnJheSA9IGlzLmFycihwcm9wKSA/IHByb3AgOiBbcHJvcF07XG4gIHJldHVybiBwcm9wQXJyYXkubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgdmFyIG9iaiA9IChpcy5vYmoodikgJiYgIWlzLnB0aCh2KSkgPyB2IDoge3ZhbHVlOiB2fTtcbiAgICAvLyBEZWZhdWx0IGRlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGZpcnN0IHR3ZWVuXG4gICAgaWYgKGlzLnVuZChvYmouZGVsYXkpKSB7IG9iai5kZWxheSA9ICFpID8gdHdlZW5TZXR0aW5ncy5kZWxheSA6IDA7IH1cbiAgICAvLyBEZWZhdWx0IGVuZERlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGxhc3QgdHdlZW5cbiAgICBpZiAoaXMudW5kKG9iai5lbmREZWxheSkpIHsgb2JqLmVuZERlbGF5ID0gaSA9PT0gcHJvcEFycmF5Lmxlbmd0aCAtIDEgPyB0d2VlblNldHRpbmdzLmVuZERlbGF5IDogMDsgfVxuICAgIHJldHVybiBvYmo7XG4gIH0pLm1hcChmdW5jdGlvbiAoaykgeyByZXR1cm4gbWVyZ2VPYmplY3RzKGssIHNldHRpbmdzKTsgfSk7XG59XG5cblxuZnVuY3Rpb24gZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpIHtcbiAgdmFyIHByb3BlcnR5TmFtZXMgPSBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoa2V5ZnJhbWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBPYmplY3Qua2V5cyhrZXkpOyB9KSksIGZ1bmN0aW9uIChwKSB7IHJldHVybiBpcy5rZXkocCk7IH0pXG4gIC5yZWR1Y2UoZnVuY3Rpb24gKGEsYikgeyBpZiAoYS5pbmRleE9mKGIpIDwgMCkgeyBhLnB1c2goYik7IH0gcmV0dXJuIGE7IH0sIFtdKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB7fTtcbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGkgKSB7XG4gICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICBwcm9wZXJ0aWVzW3Byb3BOYW1lXSA9IGtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG5ld0tleSA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBrZXkpIHtcbiAgICAgICAgaWYgKGlzLmtleShwKSkge1xuICAgICAgICAgIGlmIChwID09IHByb3BOYW1lKSB7IG5ld0tleS52YWx1ZSA9IGtleVtwXTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0tleVtwXSA9IGtleVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0tleTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIGxvb3AoIGkgKTtcbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gW107XG4gIHZhciBrZXlmcmFtZXMgPSBwYXJhbXMua2V5ZnJhbWVzO1xuICBpZiAoa2V5ZnJhbWVzKSB7IHBhcmFtcyA9IG1lcmdlT2JqZWN0cyhmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcyksIHBhcmFtcyk7IH1cbiAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIHtcbiAgICBpZiAoaXMua2V5KHApKSB7XG4gICAgICBwcm9wZXJ0aWVzLnB1c2goe1xuICAgICAgICBuYW1lOiBwLFxuICAgICAgICB0d2VlbnM6IG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHBhcmFtc1twXSwgdHdlZW5TZXR0aW5ncylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuLy8gVHdlZW5zXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHR3ZWVuLCBhbmltYXRhYmxlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gdHdlZW4pIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHR3ZWVuW3BdLCBhbmltYXRhYmxlKTtcbiAgICBpZiAoaXMuYXJyKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGdldEZ1bmN0aW9uVmFsdWUodiwgYW5pbWF0YWJsZSk7IH0pO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkgeyB2YWx1ZSA9IHZhbHVlWzBdOyB9XG4gICAgfVxuICAgIHRbcF0gPSB2YWx1ZTtcbiAgfVxuICB0LmR1cmF0aW9uID0gcGFyc2VGbG9hdCh0LmR1cmF0aW9uKTtcbiAgdC5kZWxheSA9IHBhcnNlRmxvYXQodC5kZWxheSk7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSkge1xuICB2YXIgcHJldmlvdXNUd2VlbjtcbiAgcmV0dXJuIHByb3AudHdlZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHZhciB0d2VlbiA9IG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHQsIGFuaW1hdGFibGUpO1xuICAgIHZhciB0d2VlblZhbHVlID0gdHdlZW4udmFsdWU7XG4gICAgdmFyIHRvID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVsxXSA6IHR3ZWVuVmFsdWU7XG4gICAgdmFyIHRvVW5pdCA9IGdldFVuaXQodG8pO1xuICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lLCB0b1VuaXQsIGFuaW1hdGFibGUpO1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4udG8ub3JpZ2luYWwgOiBvcmlnaW5hbFZhbHVlO1xuICAgIHZhciBmcm9tID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVswXSA6IHByZXZpb3VzVmFsdWU7XG4gICAgdmFyIGZyb21Vbml0ID0gZ2V0VW5pdChmcm9tKSB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xuICAgIHZhciB1bml0ID0gdG9Vbml0IHx8IGZyb21Vbml0O1xuICAgIGlmIChpcy51bmQodG8pKSB7IHRvID0gcHJldmlvdXNWYWx1ZTsgfVxuICAgIHR3ZWVuLmZyb20gPSBkZWNvbXBvc2VWYWx1ZShmcm9tLCB1bml0KTtcbiAgICB0d2Vlbi50byA9IGRlY29tcG9zZVZhbHVlKGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pLCB1bml0KTtcbiAgICB0d2Vlbi5zdGFydCA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLmVuZCA6IDA7XG4gICAgdHdlZW4uZW5kID0gdHdlZW4uc3RhcnQgKyB0d2Vlbi5kZWxheSArIHR3ZWVuLmR1cmF0aW9uICsgdHdlZW4uZW5kRGVsYXk7XG4gICAgdHdlZW4uZWFzaW5nID0gcGFyc2VFYXNpbmdzKHR3ZWVuLmVhc2luZywgdHdlZW4uZHVyYXRpb24pO1xuICAgIHR3ZWVuLmlzUGF0aCA9IGlzLnB0aCh0d2VlblZhbHVlKTtcbiAgICB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcgPSB0d2Vlbi5pc1BhdGggJiYgaXMuc3ZnKGFuaW1hdGFibGUudGFyZ2V0KTtcbiAgICB0d2Vlbi5pc0NvbG9yID0gaXMuY29sKHR3ZWVuLmZyb20ub3JpZ2luYWwpO1xuICAgIGlmICh0d2Vlbi5pc0NvbG9yKSB7IHR3ZWVuLnJvdW5kID0gMTsgfVxuICAgIHByZXZpb3VzVHdlZW4gPSB0d2VlbjtcbiAgICByZXR1cm4gdHdlZW47XG4gIH0pO1xufVxuXG4vLyBUd2VlbiBwcm9ncmVzc1xuXG52YXIgc2V0UHJvZ3Jlc3NWYWx1ZSA9IHtcbiAgY3NzOiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdC5zdHlsZVtwXSA9IHY7IH0sXG4gIGF0dHJpYnV0ZTogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHQuc2V0QXR0cmlidXRlKHAsIHYpOyB9LFxuICBvYmplY3Q6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0W3BdID0gdjsgfSxcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiAodCwgcCwgdiwgdHJhbnNmb3JtcywgbWFudWFsKSB7XG4gICAgdHJhbnNmb3Jtcy5saXN0LnNldChwLCB2KTtcbiAgICBpZiAocCA9PT0gdHJhbnNmb3Jtcy5sYXN0IHx8IG1hbnVhbCkge1xuICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgdHJhbnNmb3Jtcy5saXN0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7IHN0ciArPSBwcm9wICsgXCIoXCIgKyB2YWx1ZSArIFwiKSBcIjsgfSk7XG4gICAgICB0LnN0eWxlLnRyYW5zZm9ybSA9IHN0cjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIFNldCBWYWx1ZSBoZWxwZXJcblxuZnVuY3Rpb24gc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cyk7XG4gIGFuaW1hdGFibGVzLmZvckVhY2goZnVuY3Rpb24gKGFuaW1hdGFibGUpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHByb3BlcnRpZXNbcHJvcGVydHldLCBhbmltYXRhYmxlKTtcbiAgICAgIHZhciB0YXJnZXQgPSBhbmltYXRhYmxlLnRhcmdldDtcbiAgICAgIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcbiAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZVVuaXQsIGFuaW1hdGFibGUpO1xuICAgICAgdmFyIHVuaXQgPSB2YWx1ZVVuaXQgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcbiAgICAgIHZhciB0byA9IGdldFJlbGF0aXZlVmFsdWUodmFsaWRhdGVWYWx1ZSh2YWx1ZSwgdW5pdCksIG9yaWdpbmFsVmFsdWUpO1xuICAgICAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbVR5cGVdKHRhcmdldCwgcHJvcGVydHksIHRvLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMsIHRydWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEFuaW1hdGlvbnNcblxuZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApIHtcbiAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lKTtcbiAgaWYgKGFuaW1UeXBlKSB7XG4gICAgdmFyIHR3ZWVucyA9IG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKTtcbiAgICB2YXIgbGFzdFR3ZWVuID0gdHdlZW5zW3R3ZWVucy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogYW5pbVR5cGUsXG4gICAgICBwcm9wZXJ0eTogcHJvcC5uYW1lLFxuICAgICAgYW5pbWF0YWJsZTogYW5pbWF0YWJsZSxcbiAgICAgIHR3ZWVuczogdHdlZW5zLFxuICAgICAgZHVyYXRpb246IGxhc3RUd2Vlbi5lbmQsXG4gICAgICBkZWxheTogdHdlZW5zWzBdLmRlbGF5LFxuICAgICAgZW5kRGVsYXk6IGxhc3RUd2Vlbi5lbmREZWxheVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoYW5pbWF0YWJsZXMubWFwKGZ1bmN0aW9uIChhbmltYXRhYmxlKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApO1xuICAgIH0pO1xuICB9KSksIGZ1bmN0aW9uIChhKSB7IHJldHVybiAhaXMudW5kKGEpOyB9KTtcbn1cblxuLy8gQ3JlYXRlIEluc3RhbmNlXG5cbmZ1bmN0aW9uIGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKSB7XG4gIHZhciBhbmltTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XG4gIHZhciBnZXRUbE9mZnNldCA9IGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBhbmltLnRpbWVsaW5lT2Zmc2V0ID8gYW5pbS50aW1lbGluZU9mZnNldCA6IDA7IH07XG4gIHZhciB0aW1pbmdzID0ge307XG4gIHRpbWluZ3MuZHVyYXRpb24gPSBhbmltTGVuZ3RoID8gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbjsgfSkpIDogdHdlZW5TZXR0aW5ncy5kdXJhdGlvbjtcbiAgdGltaW5ncy5kZWxheSA9IGFuaW1MZW5ndGggPyBNYXRoLm1pbi5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmRlbGF5OyB9KSkgOiB0d2VlblNldHRpbmdzLmRlbGF5O1xuICB0aW1pbmdzLmVuZERlbGF5ID0gYW5pbUxlbmd0aCA/IHRpbWluZ3MuZHVyYXRpb24gLSBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uIC0gYW5pbS5lbmREZWxheTsgfSkpIDogdHdlZW5TZXR0aW5ncy5lbmREZWxheTtcbiAgcmV0dXJuIHRpbWluZ3M7XG59XG5cbnZhciBpbnN0YW5jZUlEID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKSB7XG4gIHZhciBpbnN0YW5jZVNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgdHdlZW5TZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHBhcmFtcy50YXJnZXRzKTtcbiAgdmFyIGFuaW1hdGlvbnMgPSBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKTtcbiAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncyk7XG4gIHZhciBpZCA9IGluc3RhbmNlSUQ7XG4gIGluc3RhbmNlSUQrKztcbiAgcmV0dXJuIG1lcmdlT2JqZWN0cyhpbnN0YW5jZVNldHRpbmdzLCB7XG4gICAgaWQ6IGlkLFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBhbmltYXRhYmxlczogYW5pbWF0YWJsZXMsXG4gICAgYW5pbWF0aW9uczogYW5pbWF0aW9ucyxcbiAgICBkdXJhdGlvbjogdGltaW5ncy5kdXJhdGlvbixcbiAgICBkZWxheTogdGltaW5ncy5kZWxheSxcbiAgICBlbmREZWxheTogdGltaW5ncy5lbmREZWxheVxuICB9KTtcbn1cblxuLy8gQ29yZVxuXG52YXIgYWN0aXZlSW5zdGFuY2VzID0gW107XG5cbnZhciBlbmdpbmUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmFmO1xuXG4gIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgaWYgKCFyYWYgJiYgKCFpc0RvY3VtZW50SGlkZGVuKCkgfHwgIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pICYmIGFjdGl2ZUluc3RhbmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHN0ZXAodCkge1xuICAgIC8vIG1lbW8gb24gYWxnb3JpdGhtIGlzc3VlOlxuICAgIC8vIGRhbmdlcm91cyBpdGVyYXRpb24gb3ZlciBtdXRhYmxlIGBhY3RpdmVJbnN0YW5jZXNgXG4gICAgLy8gKHRoYXQgY29sbGVjdGlvbiBtYXkgYmUgdXBkYXRlZCBmcm9tIHdpdGhpbiBjYWxsYmFja3Mgb2YgYHRpY2tgLWVkIGFuaW1hdGlvbiBpbnN0YW5jZXMpXG4gICAgdmFyIGFjdGl2ZUluc3RhbmNlc0xlbmd0aCA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XG4gICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgICBpZiAoIWFjdGl2ZUluc3RhbmNlLnBhdXNlZCkge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZS50aWNrKHQpO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXNMZW5ndGgtLTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmFmID0gaSA+IDAgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmICghYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikgeyByZXR1cm47IH1cblxuICAgIGlmIChpc0RvY3VtZW50SGlkZGVuKCkpIHtcbiAgICAgIC8vIHN1c3BlbmQgdGlja3NcbiAgICAgIHJhZiA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgfSBlbHNlIHsgLy8gaXMgYmFjayB0byBhY3RpdmUgdGFiXG4gICAgICAvLyBmaXJzdCBhZGp1c3QgYW5pbWF0aW9ucyB0byBjb25zaWRlciB0aGUgdGltZSB0aGF0IHRpY2tzIHdlcmUgc3VzcGVuZGVkXG4gICAgICBhY3RpdmVJbnN0YW5jZXMuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24gKGluc3RhbmNlKSB7IHJldHVybiBpbnN0YW5jZSAuX29uRG9jdW1lbnRWaXNpYmlsaXR5KCk7IH1cbiAgICAgICk7XG4gICAgICBlbmdpbmUoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG4gIH1cblxuICByZXR1cm4gcGxheTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnRIaWRkZW4oKSB7XG4gIHJldHVybiAhIWRvY3VtZW50ICYmIGRvY3VtZW50LmhpZGRlbjtcbn1cblxuLy8gUHVibGljIEluc3RhbmNlXG5cbmZ1bmN0aW9uIGFuaW1lKHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cblxuICB2YXIgc3RhcnRUaW1lID0gMCwgbGFzdFRpbWUgPSAwLCBub3cgPSAwO1xuICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoID0gMDtcbiAgdmFyIHJlc29sdmUgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1ha2VQcm9taXNlKGluc3RhbmNlKSB7XG4gICAgdmFyIHByb21pc2UgPSB3aW5kb3cuUHJvbWlzZSAmJiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoX3Jlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUgPSBfcmVzb2x2ZTsgfSk7XG4gICAgaW5zdGFuY2UuZmluaXNoZWQgPSBwcm9taXNlO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgdmFyIGluc3RhbmNlID0gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKTtcbiAgdmFyIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcbiAgICBpZiAoZGlyZWN0aW9uICE9PSAnYWx0ZXJuYXRlJykge1xuICAgICAgaW5zdGFuY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uICE9PSAnbm9ybWFsJyA/ICdub3JtYWwnIDogJ3JldmVyc2UnO1xuICAgIH1cbiAgICBpbnN0YW5jZS5yZXZlcnNlZCA9ICFpbnN0YW5jZS5yZXZlcnNlZDtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQucmV2ZXJzZWQgPSBpbnN0YW5jZS5yZXZlcnNlZDsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGp1c3RUaW1lKHRpbWUpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUaW1lKCkge1xuICAgIHN0YXJ0VGltZSA9IDA7XG4gICAgbGFzdFRpbWUgPSBhZGp1c3RUaW1lKGluc3RhbmNlLmN1cnJlbnRUaW1lKSAqICgxIC8gYW5pbWUuc3BlZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Vla0NoaWxkKHRpbWUsIGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkKSB7IGNoaWxkLnNlZWsodGltZSAtIGNoaWxkLnRpbWVsaW5lT2Zmc2V0KTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3luY0luc3RhbmNlQ2hpbGRyZW4odGltZSkge1xuICAgIGlmICghaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHsgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2ldKTsgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpJDEgPSBjaGlsZHJlbkxlbmd0aDsgaSQxLS07KSB7IHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpJDFdKTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgICB2YXIgYW5pbWF0aW9uc0xlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgYW5pbWF0aW9uc0xlbmd0aCkge1xuICAgICAgdmFyIGFuaW0gPSBhbmltYXRpb25zW2ldO1xuICAgICAgdmFyIGFuaW1hdGFibGUgPSBhbmltLmFuaW1hdGFibGU7XG4gICAgICB2YXIgdHdlZW5zID0gYW5pbS50d2VlbnM7XG4gICAgICB2YXIgdHdlZW5MZW5ndGggPSB0d2VlbnMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciB0d2VlbiA9IHR3ZWVuc1t0d2Vlbkxlbmd0aF07XG4gICAgICAvLyBPbmx5IGNoZWNrIGZvciBrZXlmcmFtZXMgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB0d2VlblxuICAgICAgaWYgKHR3ZWVuTGVuZ3RoKSB7IHR3ZWVuID0gZmlsdGVyQXJyYXkodHdlZW5zLCBmdW5jdGlvbiAodCkgeyByZXR1cm4gKGluc1RpbWUgPCB0LmVuZCk7IH0pWzBdIHx8IHR3ZWVuOyB9XG4gICAgICB2YXIgZWxhcHNlZCA9IG1pbk1heChpbnNUaW1lIC0gdHdlZW4uc3RhcnQgLSB0d2Vlbi5kZWxheSwgMCwgdHdlZW4uZHVyYXRpb24pIC8gdHdlZW4uZHVyYXRpb247XG4gICAgICB2YXIgZWFzZWQgPSBpc05hTihlbGFwc2VkKSA/IDEgOiB0d2Vlbi5lYXNpbmcoZWxhcHNlZCk7XG4gICAgICB2YXIgc3RyaW5ncyA9IHR3ZWVuLnRvLnN0cmluZ3M7XG4gICAgICB2YXIgcm91bmQgPSB0d2Vlbi5yb3VuZDtcbiAgICAgIHZhciBudW1iZXJzID0gW107XG4gICAgICB2YXIgdG9OdW1iZXJzTGVuZ3RoID0gdHdlZW4udG8ubnVtYmVycy5sZW5ndGg7XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSAodm9pZCAwKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdG9OdW1iZXJzTGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHZvaWQgMCk7XG4gICAgICAgIHZhciB0b051bWJlciA9IHR3ZWVuLnRvLm51bWJlcnNbbl07XG4gICAgICAgIHZhciBmcm9tTnVtYmVyID0gdHdlZW4uZnJvbS5udW1iZXJzW25dIHx8IDA7XG4gICAgICAgIGlmICghdHdlZW4uaXNQYXRoKSB7XG4gICAgICAgICAgdmFsdWUgPSBmcm9tTnVtYmVyICsgKGVhc2VkICogKHRvTnVtYmVyIC0gZnJvbU51bWJlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gZ2V0UGF0aFByb2dyZXNzKHR3ZWVuLnZhbHVlLCBlYXNlZCAqIHRvTnVtYmVyLCB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgIGlmICghKHR3ZWVuLmlzQ29sb3IgJiYgbiA+IDIpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiByb3VuZCkgLyByb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVycy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIC8vIE1hbnVhbCBBcnJheS5yZWR1Y2UgZm9yIGJldHRlciBwZXJmb3JtYW5jZXNcbiAgICAgIHZhciBzdHJpbmdzTGVuZ3RoID0gc3RyaW5ncy5sZW5ndGg7XG4gICAgICBpZiAoIXN0cmluZ3NMZW5ndGgpIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBudW1iZXJzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBzdHJpbmdzWzBdO1xuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHN0cmluZ3NMZW5ndGg7IHMrKykge1xuICAgICAgICAgIHZhciBhID0gc3RyaW5nc1tzXTtcbiAgICAgICAgICB2YXIgYiA9IHN0cmluZ3NbcyArIDFdO1xuICAgICAgICAgIHZhciBuJDEgPSBudW1iZXJzW3NdO1xuICAgICAgICAgIGlmICghaXNOYU4obiQxKSkge1xuICAgICAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArICcgJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW0udHlwZV0oYW5pbWF0YWJsZS50YXJnZXQsIGFuaW0ucHJvcGVydHksIHByb2dyZXNzLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMpO1xuICAgICAgYW5pbS5jdXJyZW50VmFsdWUgPSBwcm9ncmVzcztcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDYWxsYmFjayhjYikge1xuICAgIGlmIChpbnN0YW5jZVtjYl0gJiYgIWluc3RhbmNlLnBhc3NUaHJvdWdoKSB7IGluc3RhbmNlW2NiXShpbnN0YW5jZSk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvdW50SXRlcmF0aW9uKCkge1xuICAgIGlmIChpbnN0YW5jZS5yZW1haW5pbmcgJiYgaW5zdGFuY2UucmVtYWluaW5nICE9PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5yZW1haW5pbmctLTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbnN0YW5jZVByb2dyZXNzKGVuZ2luZVRpbWUpIHtcbiAgICB2YXIgaW5zRHVyYXRpb24gPSBpbnN0YW5jZS5kdXJhdGlvbjtcbiAgICB2YXIgaW5zRGVsYXkgPSBpbnN0YW5jZS5kZWxheTtcbiAgICB2YXIgaW5zRW5kRGVsYXkgPSBpbnNEdXJhdGlvbiAtIGluc3RhbmNlLmVuZERlbGF5O1xuICAgIHZhciBpbnNUaW1lID0gYWRqdXN0VGltZShlbmdpbmVUaW1lKTtcbiAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IG1pbk1heCgoaW5zVGltZSAvIGluc0R1cmF0aW9uKSAqIDEwMCwgMCwgMTAwKTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBpbnNUaW1lIDwgaW5zdGFuY2UuY3VycmVudFRpbWU7XG4gICAgaWYgKGNoaWxkcmVuKSB7IHN5bmNJbnN0YW5jZUNoaWxkcmVuKGluc1RpbWUpOyB9XG4gICAgaWYgKCFpbnN0YW5jZS5iZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgIGluc3RhbmNlLmJlZ2FuID0gdHJ1ZTtcbiAgICAgIHNldENhbGxiYWNrKCdiZWdpbicpO1xuICAgIH1cbiAgICBpZiAoIWluc3RhbmNlLmxvb3BCZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IHRydWU7XG4gICAgICBzZXRDYWxsYmFjaygnbG9vcEJlZ2luJyk7XG4gICAgfVxuICAgIGlmIChpbnNUaW1lIDw9IGluc0RlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSAwKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoMCk7XG4gICAgfVxuICAgIGlmICgoaW5zVGltZSA+PSBpbnNFbmREZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gaW5zRHVyYXRpb24pIHx8ICFpbnNEdXJhdGlvbikge1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc0R1cmF0aW9uKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPiBpbnNEZWxheSAmJiBpbnNUaW1lIDwgaW5zRW5kRGVsYXkpIHtcbiAgICAgIGlmICghaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUJlZ2luJyk7XG4gICAgICB9XG4gICAgICBzZXRDYWxsYmFjaygnY2hhbmdlJyk7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQ29tcGxldGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSBtaW5NYXgoaW5zVGltZSwgMCwgaW5zRHVyYXRpb24pO1xuICAgIGlmIChpbnN0YW5jZS5iZWdhbikgeyBzZXRDYWxsYmFjaygndXBkYXRlJyk7IH1cbiAgICBpZiAoZW5naW5lVGltZSA+PSBpbnNEdXJhdGlvbikge1xuICAgICAgbGFzdFRpbWUgPSAwO1xuICAgICAgY291bnRJdGVyYXRpb24oKTtcbiAgICAgIGlmICghaW5zdGFuY2UucmVtYWluaW5nKSB7XG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIGlmICghaW5zdGFuY2UuY29tcGxldGVkKSB7XG4gICAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XG4gICAgICAgICAgc2V0Q2FsbGJhY2soJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgaWYgKCFpbnN0YW5jZS5wYXNzVGhyb3VnaCAmJiAnUHJvbWlzZScgaW4gd2luZG93KSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRUaW1lID0gbm93O1xuICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XG4gICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xuICAgICAgICBpZiAoaW5zdGFuY2UuZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJykge1xuICAgICAgICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnN0YW5jZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaW5zdGFuY2UucGFzc1Rocm91Z2ggPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IDA7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSAwO1xuICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgaW5zdGFuY2UuYmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VkID0gZGlyZWN0aW9uID09PSAncmV2ZXJzZSc7XG4gICAgaW5zdGFuY2UucmVtYWluaW5nID0gaW5zdGFuY2UubG9vcDtcbiAgICBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xuICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbkxlbmd0aDsgaS0tOykgeyBpbnN0YW5jZS5jaGlsZHJlbltpXS5yZXNldCgpOyB9XG4gICAgaWYgKGluc3RhbmNlLnJldmVyc2VkICYmIGluc3RhbmNlLmxvb3AgIT09IHRydWUgfHwgKGRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScgJiYgaW5zdGFuY2UubG9vcCA9PT0gMSkpIHsgaW5zdGFuY2UucmVtYWluaW5nKys7IH1cbiAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiA6IDApO1xuICB9O1xuXG4gIC8vIGludGVybmFsIG1ldGhvZCAoZm9yIGVuZ2luZSkgdG8gYWRqdXN0IGFuaW1hdGlvbiB0aW1pbmdzIGJlZm9yZSByZXN0b3JpbmcgZW5naW5lIHRpY2tzIChyQUYpXG4gIGluc3RhbmNlLl9vbkRvY3VtZW50VmlzaWJpbGl0eSA9IHJlc2V0VGltZTtcblxuICAvLyBTZXQgVmFsdWUgaGVscGVyXG5cbiAgaW5zdGFuY2Uuc2V0ID0gZnVuY3Rpb24odGFyZ2V0cywgcHJvcGVydGllcykge1xuICAgIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG5cbiAgaW5zdGFuY2UudGljayA9IGZ1bmN0aW9uKHQpIHtcbiAgICBub3cgPSB0O1xuICAgIGlmICghc3RhcnRUaW1lKSB7IHN0YXJ0VGltZSA9IG5vdzsgfVxuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoKG5vdyArIChsYXN0VGltZSAtIHN0YXJ0VGltZSkpICogYW5pbWUuc3BlZWQpO1xuICB9O1xuXG4gIGluc3RhbmNlLnNlZWsgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgc2V0SW5zdGFuY2VQcm9ncmVzcyhhZGp1c3RUaW1lKHRpbWUpKTtcbiAgfTtcblxuICBpbnN0YW5jZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgcmVzZXRUaW1lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghaW5zdGFuY2UucGF1c2VkKSB7IHJldHVybjsgfVxuICAgIGlmIChpbnN0YW5jZS5jb21wbGV0ZWQpIHsgaW5zdGFuY2UucmVzZXQoKTsgfVxuICAgIGluc3RhbmNlLnBhdXNlZCA9IGZhbHNlO1xuICAgIGFjdGl2ZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICByZXNldFRpbWUoKTtcbiAgICBlbmdpbmUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBpbnN0YW5jZS5yZXZlcnNlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucmVzZXQoKTtcbiAgICBpbnN0YW5jZS5wbGF5KCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVtb3ZlID0gZnVuY3Rpb24odGFyZ2V0cykge1xuICAgIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXNldCgpO1xuXG4gIGlmIChpbnN0YW5jZS5hdXRvcGxheSkgeyBpbnN0YW5jZS5wbGF5KCk7IH1cblxuICByZXR1cm4gaW5zdGFuY2U7XG5cbn1cblxuLy8gUmVtb3ZlIHRhcmdldHMgZnJvbSBhbmltYXRpb25cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucykge1xuICBmb3IgKHZhciBhID0gYW5pbWF0aW9ucy5sZW5ndGg7IGEtLTspIHtcbiAgICBpZiAoYXJyYXlDb250YWlucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnNbYV0uYW5pbWF0YWJsZS50YXJnZXQpKSB7XG4gICAgICBhbmltYXRpb25zLnNwbGljZShhLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKSB7XG4gIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgdmFyIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpO1xuICBmb3IgKHZhciBjID0gY2hpbGRyZW4ubGVuZ3RoOyBjLS07KSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5bY107XG4gICAgdmFyIGNoaWxkQW5pbWF0aW9ucyA9IGNoaWxkLmFuaW1hdGlvbnM7XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgY2hpbGRBbmltYXRpb25zKTtcbiAgICBpZiAoIWNoaWxkQW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkLmNoaWxkcmVuLmxlbmd0aCkgeyBjaGlsZHJlbi5zcGxpY2UoYywgMSk7IH1cbiAgfVxuICBpZiAoIWFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZHJlbi5sZW5ndGgpIHsgaW5zdGFuY2UucGF1c2UoKTsgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIGZvciAodmFyIGkgPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgdmFyIGluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XG4gIH1cbn1cblxuLy8gU3RhZ2dlciBoZWxwZXJzXG5cbmZ1bmN0aW9uIHN0YWdnZXIodmFsLCBwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gIHZhciBkaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uIHx8ICdub3JtYWwnO1xuICB2YXIgZWFzaW5nID0gcGFyYW1zLmVhc2luZyA/IHBhcnNlRWFzaW5ncyhwYXJhbXMuZWFzaW5nKSA6IG51bGw7XG4gIHZhciBncmlkID0gcGFyYW1zLmdyaWQ7XG4gIHZhciBheGlzID0gcGFyYW1zLmF4aXM7XG4gIHZhciBmcm9tSW5kZXggPSBwYXJhbXMuZnJvbSB8fCAwO1xuICB2YXIgZnJvbUZpcnN0ID0gZnJvbUluZGV4ID09PSAnZmlyc3QnO1xuICB2YXIgZnJvbUNlbnRlciA9IGZyb21JbmRleCA9PT0gJ2NlbnRlcic7XG4gIHZhciBmcm9tTGFzdCA9IGZyb21JbmRleCA9PT0gJ2xhc3QnO1xuICB2YXIgaXNSYW5nZSA9IGlzLmFycih2YWwpO1xuICB2YXIgdmFsMSA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFswXSkgOiBwYXJzZUZsb2F0KHZhbCk7XG4gIHZhciB2YWwyID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzFdKSA6IDA7XG4gIHZhciB1bml0ID0gZ2V0VW5pdChpc1JhbmdlID8gdmFsWzFdIDogdmFsKSB8fCAwO1xuICB2YXIgc3RhcnQgPSBwYXJhbXMuc3RhcnQgfHwgMCArIChpc1JhbmdlID8gdmFsMSA6IDApO1xuICB2YXIgdmFsdWVzID0gW107XG4gIHZhciBtYXhWYWx1ZSA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoZWwsIGksIHQpIHtcbiAgICBpZiAoZnJvbUZpcnN0KSB7IGZyb21JbmRleCA9IDA7IH1cbiAgICBpZiAoZnJvbUNlbnRlcikgeyBmcm9tSW5kZXggPSAodCAtIDEpIC8gMjsgfVxuICAgIGlmIChmcm9tTGFzdCkgeyBmcm9tSW5kZXggPSB0IC0gMTsgfVxuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHQ7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCFncmlkKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2goTWF0aC5hYnMoZnJvbUluZGV4IC0gaW5kZXgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZnJvbVggPSAhZnJvbUNlbnRlciA/IGZyb21JbmRleCVncmlkWzBdIDogKGdyaWRbMF0tMSkvMjtcbiAgICAgICAgICB2YXIgZnJvbVkgPSAhZnJvbUNlbnRlciA/IE1hdGguZmxvb3IoZnJvbUluZGV4L2dyaWRbMF0pIDogKGdyaWRbMV0tMSkvMjtcbiAgICAgICAgICB2YXIgdG9YID0gaW5kZXglZ3JpZFswXTtcbiAgICAgICAgICB2YXIgdG9ZID0gTWF0aC5mbG9vcihpbmRleC9ncmlkWzBdKTtcbiAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gZnJvbVggLSB0b1g7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IGZyb21ZIC0gdG9ZO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IE1hdGguc3FydChkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVkpO1xuICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHsgdmFsdWUgPSAtZGlzdGFuY2VYOyB9XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd5JykgeyB2YWx1ZSA9IC1kaXN0YW5jZVk7IH1cbiAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF4VmFsdWUgPSBNYXRoLm1heC5hcHBseShNYXRoLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgICAgaWYgKGVhc2luZykgeyB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGVhc2luZyh2YWwgLyBtYXhWYWx1ZSkgKiBtYXhWYWx1ZTsgfSk7IH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyZXZlcnNlJykgeyB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGF4aXMgPyAodmFsIDwgMCkgPyB2YWwgKiAtMSA6IC12YWwgOiBNYXRoLmFicyhtYXhWYWx1ZSAtIHZhbCk7IH0pOyB9XG4gICAgfVxuICAgIHZhciBzcGFjaW5nID0gaXNSYW5nZSA/ICh2YWwyIC0gdmFsMSkgLyBtYXhWYWx1ZSA6IHZhbDE7XG4gICAgcmV0dXJuIHN0YXJ0ICsgKHNwYWNpbmcgKiAoTWF0aC5yb3VuZCh2YWx1ZXNbaV0gKiAxMDApIC8gMTAwKSkgKyB1bml0O1xuICB9XG59XG5cbi8vIFRpbWVsaW5lXG5cbmZ1bmN0aW9uIHRpbWVsaW5lKHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cbiAgdmFyIHRsID0gYW5pbWUocGFyYW1zKTtcbiAgdGwuZHVyYXRpb24gPSAwO1xuICB0bC5hZGQgPSBmdW5jdGlvbihpbnN0YW5jZVBhcmFtcywgdGltZWxpbmVPZmZzZXQpIHtcbiAgICB2YXIgdGxJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKHRsKTtcbiAgICB2YXIgY2hpbGRyZW4gPSB0bC5jaGlsZHJlbjtcbiAgICBpZiAodGxJbmRleCA+IC0xKSB7IGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UodGxJbmRleCwgMSk7IH1cbiAgICBmdW5jdGlvbiBwYXNzVGhyb3VnaChpbnMpIHsgaW5zLnBhc3NUaHJvdWdoID0gdHJ1ZTsgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHsgcGFzc1Rocm91Z2goY2hpbGRyZW5baV0pOyB9XG4gICAgdmFyIGluc1BhcmFtcyA9IG1lcmdlT2JqZWN0cyhpbnN0YW5jZVBhcmFtcywgcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpKTtcbiAgICBpbnNQYXJhbXMudGFyZ2V0cyA9IGluc1BhcmFtcy50YXJnZXRzIHx8IHBhcmFtcy50YXJnZXRzO1xuICAgIHZhciB0bER1cmF0aW9uID0gdGwuZHVyYXRpb247XG4gICAgaW5zUGFyYW1zLmF1dG9wbGF5ID0gZmFsc2U7XG4gICAgaW5zUGFyYW1zLmRpcmVjdGlvbiA9IHRsLmRpcmVjdGlvbjtcbiAgICBpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQgPSBpcy51bmQodGltZWxpbmVPZmZzZXQpID8gdGxEdXJhdGlvbiA6IGdldFJlbGF0aXZlVmFsdWUodGltZWxpbmVPZmZzZXQsIHRsRHVyYXRpb24pO1xuICAgIHBhc3NUaHJvdWdoKHRsKTtcbiAgICB0bC5zZWVrKGluc1BhcmFtcy50aW1lbGluZU9mZnNldCk7XG4gICAgdmFyIGlucyA9IGFuaW1lKGluc1BhcmFtcyk7XG4gICAgcGFzc1Rocm91Z2goaW5zKTtcbiAgICBjaGlsZHJlbi5wdXNoKGlucyk7XG4gICAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoY2hpbGRyZW4sIHBhcmFtcyk7XG4gICAgdGwuZGVsYXkgPSB0aW1pbmdzLmRlbGF5O1xuICAgIHRsLmVuZERlbGF5ID0gdGltaW5ncy5lbmREZWxheTtcbiAgICB0bC5kdXJhdGlvbiA9IHRpbWluZ3MuZHVyYXRpb247XG4gICAgdGwuc2VlaygwKTtcbiAgICB0bC5yZXNldCgpO1xuICAgIGlmICh0bC5hdXRvcGxheSkgeyB0bC5wbGF5KCk7IH1cbiAgICByZXR1cm4gdGw7XG4gIH07XG4gIHJldHVybiB0bDtcbn1cblxuYW5pbWUudmVyc2lvbiA9ICczLjIuMSc7XG5hbmltZS5zcGVlZCA9IDE7XG4vLyBUT0RPOiNyZXZpZXc6IG5hbWluZywgZG9jdW1lbnRhdGlvblxuYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbiA9IHRydWU7XG5hbmltZS5ydW5uaW5nID0gYWN0aXZlSW5zdGFuY2VzO1xuYW5pbWUucmVtb3ZlID0gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXM7XG5hbmltZS5nZXQgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlO1xuYW5pbWUuc2V0ID0gc2V0VGFyZ2V0c1ZhbHVlO1xuYW5pbWUuY29udmVydFB4ID0gY29udmVydFB4VG9Vbml0O1xuYW5pbWUucGF0aCA9IGdldFBhdGg7XG5hbmltZS5zZXREYXNob2Zmc2V0ID0gc2V0RGFzaG9mZnNldDtcbmFuaW1lLnN0YWdnZXIgPSBzdGFnZ2VyO1xuYW5pbWUudGltZWxpbmUgPSB0aW1lbGluZTtcbmFuaW1lLmVhc2luZyA9IHBhcnNlRWFzaW5ncztcbmFuaW1lLnBlbm5lciA9IHBlbm5lcjtcbmFuaW1lLnJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgfTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJhcmJhIGZyb20gJ0BiYXJiYS9jb3JlJztcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzL2xpYi9hbmltZS5lcy5qcyc7XG5cbmZ1bmN0aW9uIGxvY2tzY3JlZW4oKVxue1xuICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgYm9keS5jbGFzc05hbWUgKz0gXCIgbG9jay1zY3JlZW5cIjtcbiAgYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIGZhbHNlKTtcbn1cbmZ1bmN0aW9uIHVubG9jaygpXG57XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2stc2NyZWVuXCIpO1xuIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbn1cblxuLy8gYmFyYmEuaW5pdCh7XG4vLyAgICAgZGVidWc6IHRydWUsXG4vL1xuLy8gICAgIHRyYW5zaXRpb25zOiBbe1xuLy8gICAgICAgICAvL3N5bmM6IHRydWUsXG4vLyAgICAgICAgIGxlYXZlOiAoZGF0YSkgPT4ge1xuLy8gICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbi8vICAgICAgICAgICAgIHVubG9jaygpO1xuLy8gICAgICAgICAgICAgYW5pbWUoe1xuLy8gICAgICAgICAgICAgICAgIHRhcmdldHM6IGRhdGEuY3VycmVudC5jb250YWluZXIsXG4vLyAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogWzEwMCwgMTAwMF0sXG4vLyAgICAgICAgICAgICAgICAgZWFzaW5nOiAnc3ByaW5nKDEsIDgwLCAxMCwgMCknLFxuLy8gICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgZW50ZXI6IChkYXRhKSA9PiB7XG4vLyAgICAgICAgICAgICBsb2Nrc2NyZWVuKCk7XG4vLyAgICAgICAgICAgICBhbmltZSh7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0czogZGF0YS5uZXh0LmNvbnRhaW5lcixcbi8vICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBbMTAwMCwgMTAwXSxcbi8vICAgICAgICAgICAgICAgICBlYXNpbmc6ICdzcHJpbmcoMSwgODAsIDEwLCAwKScsXG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgYmVmb3JlT25jZTogKGRhdGEpID0+IHtcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uY2UhXCIpXG4vL1xuLy8gICAgICAgICAgIGRhdGEubmV4dC5jb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMHB4KVwiXG4vLyAgICAgICAgICAgLy8gYW5pbWUoe1xuLy8gICAgICAgICAgIC8vICAgICB0YXJnZXRzOiBkYXRhLm5leHQuY29udGFpbmVyLFxuLy8gICAgICAgICAgIC8vICAgICB0cmFuc2xhdGVZOiBbMTAwMCwgMTAwXSxcbi8vICAgICAgICAgICAvLyAgICAgZWFzaW5nOiAnc3ByaW5nKDEsIDgwLCAxMCwgMCknLFxuLy8gICAgICAgICAgIC8vIH0pO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBvbmNlOiAoZGF0YSkgPT4ge1xuLy9cbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgYWZ0ZXJPbmNlOiAoZGF0YSkgPT4ge1xuLy8gICAgICAgICAgIC8vbG9ja3NjcmVlbigpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSx7XG4vLyAgICAgICBuYW1lOiAndG8taG9tZScsXG4vLyAgICAgICB0bzogeyBuYW1lc3BhY2U6IFsnaG9tZSddIH0sXG4vLyAgICAgICBsZWF2ZTogKGRhdGEpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuLy8gICAgICAgICAgICAgICBhbmltZSh7XG4vLyAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBkYXRhLmN1cnJlbnQuY29udGFpbmVyLFxuLy8gICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogWzEwMCwgMTAwMF0sXG4vLyAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdzcHJpbmcoMSwgODAsIDEwLCAwKScsXG4vLyAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbi8vICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgfSk7XG4vLyAgICAgICB9XG4vLyAgICAgfV1cbi8vIH0pO1xuLy9cbi8vIGJhcmJhLmhvb2tzLmVudGVyKChkYXRhKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEubmV4dC5uYW1lc3BhY2UpO1xuLy8gfSk7XG4iXSwibmFtZXMiOlsibGVhdmUiLCJhZnRlckxlYXZlIiwiYmVmb3JlRW50ZXIiLCJlbnRlciIsImFmdGVyRW50ZXIiLCJhZnRlciIsInQiLCJvZmYiLCJlcnJvciIsIndhcm5pbmciLCJpbmZvIiwiZGVidWciLCJhIiwidiIsImQiLCJnZXRMZXZlbCIsInNldExldmVsIiwibiIsInByb3RvdHlwZSIsImkiLCJjb25zb2xlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwid2FybiIsImxvZyIsInIiLCJhcHBseSIsImNvbmNhdCIsImwiLCJyZXBsYWNlIiwicCIsInNlbnNpdGl2ZSIsIm0iLCJjb250YWluZXIiLCJoaXN0b3J5IiwibmFtZXNwYWNlIiwicHJlZml4IiwicHJldmVudCIsIndyYXBwZXIiLCJ3IiwibyIsInUiLCJoIiwiYmVmb3JlIiwicGFyZW50IiwidG9TdHJpbmciLCJvdXRlckhUTUwiLCJ0b0RvY3VtZW50IiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwidG9FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZ2V0SHRtbCIsImRvY3VtZW50RWxlbWVudCIsImdldFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGFpbmVyIiwicmVtb3ZlQ29udGFpbmVyIiwiYm9keSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYWRkQ29udGFpbmVyIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJnZXRTaWJsaW5nIiwiZ2V0TmFtZXNwYWNlIiwiZ2V0QXR0cmlidXRlIiwiZ2V0SHJlZiIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImhyZWYiLCJyZXNvbHZlVXJsIiwiYmFzZVZhbCIsImxlbmd0aCIsIkVycm9yIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmaXJzdENoaWxkIiwiZSIsIm5leHRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInBhcmVudEVsZW1lbnQiLCJiIiwieSIsIlAiLCJpbml0IiwiZGF0YSIsIm5zIiwic2Nyb2xsIiwieCIsIndpbmRvdyIsInNjcm9sbFgiLCJzY3JvbGxZIiwidXJsIiwicHVzaCIsImZyb20iLCJpbmRleCIsInN0YXRlcyIsInJlcGxhY2VTdGF0ZSIsImNoYW5nZSIsInN0YXRlIiwiZyIsImFkZCIsIlIiLCJzaXplIiwic2V0IiwicHVzaFN0YXRlIiwic3RvcmUiLCJnZXQiLCJ1cGRhdGUiLCJyZW1vdmUiLCJzcGxpY2UiLCJwb3AiLCJjbGVhciIsImhhc0F0dHJpYnV0ZSIsIk1hdGgiLCJhYnMiLCJrZXkiLCJuZXh0IiwiaHRtbCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsInRpdGxlIiwicmVqZWN0IiwiRSIsIlJlZ0V4cCIsImV4ZWMiLCJzb3VyY2UiLCJuYW1lIiwic3VmZml4IiwibW9kaWZpZXIiLCJwYXR0ZXJuIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiam9pbiIsInN0cmljdCIsInN0YXJ0IiwicyIsImVuZCIsImYiLCJjIiwiZW5jb2RlIiwiZGVsaW1pdGVyIiwiZW5kc1dpdGgiLCJrIiwiTyIsImluZGV4T2YiLCJ0eXBlIiwidmFsdWUiLCJUeXBlRXJyb3IiLCJjaGFyQ29kZUF0IiwicHJlZml4ZXMiLCJfX3Byb3RvX18iLCJuZXh0VGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhdGhUb1JlZ2V4cCIsImxvY2F0aW9uIiwib3JpZ2luIiwicG9ydCIsInBhcnNlIiwibWF0Y2giLCJ0ZXN0Iiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJUIiwiaGFzaCIsInBhdGgiLCJxdWVyeSIsInNwbGl0IiwicmVkdWNlIiwiQSIsImoiLCJnZXRBYnNvbHV0ZUhyZWYiLCJiYXNlVVJJIiwiVVJMIiwiZ2V0T3JpZ2luIiwiZ2V0UG9ydCIsImdldFBhdGgiLCJnZXRRdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRIYXNoIiwicGFyc2VRdWVyeSIsImNsZWFuIiwiTSIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJyZXNwb25zZVVSTCIsInJlc3BvbnNlVGV4dCIsInRhcmdldCIsInN0YXR1c1RleHQiLCJvbnRpbWVvdXQiLCJvbmVycm9yIiwib3BlbiIsInRpbWVvdXQiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiYWxsIiwiZm9yRWFjaCIsInNlbmQiLCJOIiwiX3R5cGVvZiIsIlMiLCJhc3luYyIsIkMiLCJsb2dnZXIiLCJyZWdpc3RlcmVkIiwiTWFwIiwiaGFzIiwiU2V0IiwiY3R4IiwiZm4iLCJoZWxwIiwiTCIsIkgiLCJjaGVja0hyZWYiLCJzb21lIiwiXyIsImFjdGlvbiIsInJlcXVlc3QiLCJnZXRSZXF1ZXN0IiwiZ2V0QWN0aW9uIiwiZ2V0U3RhdHVzIiwiZ2V0VGFyZ2V0IiwiRCIsIkIiLCJxIiwiZWwiLCJGIiwiZXZlbnQiLCJ3aGljaCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJJIiwiVSIsInByb3RvY29sIiwiaG9zdG5hbWUiLCIkIiwiUSIsIlgiLCJ6IiwiQm9vbGVhbiIsImNsb3Nlc3QiLCJHIiwiSiIsInN1aXRlIiwidGVzdHMiLCJydW4iLCJjaGVja0xpbmsiLCJXIiwibGFiZWwiLCJjYXB0dXJlU3RhY2tUcmFjZSIsIksiLCJwYWdlIiwib25jZSIsInBvc2l0aW9uIiwiZmlsdGVyIiwic2VsZiIsImZpbmQiLCJyZXZlcnNlIiwidG8iLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInByaW9yaXR5IiwiY3VycmVudCIsInBvdyIsIlYiLCJZIiwiZG9PbmNlIiwidHJhbnNpdGlvbiIsImRvUGFnZSIsInN5bmMiLCJtZXNzYWdlIiwicm91dGUiLCJaIiwibmFtZXMiLCJieU5hbWVzcGFjZSIsIkVsZW1lbnQiLCJtYXRjaGVzIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJub2RlVHlwZSIsInR0IiwibnQiLCJ2ZXJzaW9uIiwic2NoZW1hUGFnZSIsIkxvZ2dlciIsInBsdWdpbnMiLCJjYWNoZUlnbm9yZSIsImNhY2hlRmlyc3RQYWdlIiwicHJlZmV0Y2hJZ25vcmUiLCJwcmV2ZW50UnVubmluZyIsImhvb2tzIiwiY2FjaGUiLCJoZWFkZXJzIiwidHJhbnNpdGlvbnMiLCJ2aWV3cyIsImRvbSIsImhlbHBlcnMiLCJ1c2UiLCJpbnN0YWxsIiwic2NoZW1hIiwicmVxdWVzdEVycm9yIiwibG9nTGV2ZWwiLCJiaW5kIiwidHJpZ2dlciIsImRlc3Ryb3kiLCJmb3JjZSIsImFzc2lnbiIsImdvIiwiaXNSdW5uaW5nIiwiaGFzU2VsZiIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiaGFzT25jZSIsIm9uUmVxdWVzdEVycm9yIiwic2hvdWxkV2FpdCIsInByZWZldGNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyIsImJlZ2luIiwibG9vcEJlZ2luIiwiY2hhbmdlQmVnaW4iLCJjaGFuZ2VDb21wbGV0ZSIsImxvb3BDb21wbGV0ZSIsImNvbXBsZXRlIiwibG9vcCIsImRpcmVjdGlvbiIsImF1dG9wbGF5IiwidGltZWxpbmVPZmZzZXQiLCJkZWZhdWx0VHdlZW5TZXR0aW5ncyIsImR1cmF0aW9uIiwiZGVsYXkiLCJlbmREZWxheSIsImVhc2luZyIsInJvdW5kIiwidmFsaWRUcmFuc2Zvcm1zIiwiQ1NTIiwic3ByaW5ncyIsIm1pbk1heCIsInZhbCIsIm1pbiIsIm1heCIsInN0cmluZ0NvbnRhaW5zIiwic3RyIiwidGV4dCIsImFwcGx5QXJndW1lbnRzIiwiZnVuYyIsImFyZ3MiLCJpcyIsImFyciIsIm9iaiIsInB0aCIsImhhc093blByb3BlcnR5Iiwic3ZnIiwiU1ZHRWxlbWVudCIsImlucCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmbmMiLCJ1bmQiLCJuaWwiLCJoZXgiLCJyZ2IiLCJoc2wiLCJjb2wiLCJwYXJzZUVhc2luZ1BhcmFtZXRlcnMiLCJzdHJpbmciLCJwYXJzZUZsb2F0Iiwic3ByaW5nIiwicGFyYW1zIiwibWFzcyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ2ZWxvY2l0eSIsIncwIiwic3FydCIsInpldGEiLCJ3ZCIsInNvbHZlciIsInByb2dyZXNzIiwiZXhwIiwiY29zIiwic2luIiwiZ2V0RHVyYXRpb24iLCJjYWNoZWQiLCJmcmFtZSIsImVsYXBzZWQiLCJyZXN0Iiwic3RlcHMiLCJjZWlsIiwiYmV6aWVyIiwia1NwbGluZVRhYmxlU2l6ZSIsImtTYW1wbGVTdGVwU2l6ZSIsImFBMSIsImFBMiIsImNhbGNCZXppZXIiLCJhVCIsImdldFNsb3BlIiwiYmluYXJ5U3ViZGl2aWRlIiwiYVgiLCJhQSIsImFCIiwibVgxIiwibVgyIiwiY3VycmVudFgiLCJjdXJyZW50VCIsIm5ld3RvblJhcGhzb25JdGVyYXRlIiwiYUd1ZXNzVCIsImN1cnJlbnRTbG9wZSIsIm1ZMSIsIm1ZMiIsInNhbXBsZVZhbHVlcyIsIkZsb2F0MzJBcnJheSIsImdldFRGb3JYIiwiaW50ZXJ2YWxTdGFydCIsImN1cnJlbnRTYW1wbGUiLCJsYXN0U2FtcGxlIiwiZGlzdCIsImd1ZXNzRm9yVCIsImluaXRpYWxTbG9wZSIsInBlbm5lciIsImVhc2VzIiwibGluZWFyIiwiZnVuY3Rpb25FYXNpbmdzIiwiU2luZSIsIlBJIiwiRXhwbyIsIkNpcmMiLCJCYWNrIiwiQm91bmNlIiwicG93MiIsIkVsYXN0aWMiLCJhbXBsaXR1ZGUiLCJwZXJpb2QiLCJhc2luIiwiYmFzZUVhc2luZ3MiLCJlYXNlSW4iLCJwYXJzZUVhc2luZ3MiLCJlYXNlIiwic2VsZWN0U3RyaW5nIiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlsdGVyQXJyYXkiLCJjYWxsYmFjayIsImxlbiIsInRoaXNBcmciLCJyZXN1bHQiLCJmbGF0dGVuQXJyYXkiLCJ0b0FycmF5IiwiTm9kZUxpc3QiLCJIVE1MQ29sbGVjdGlvbiIsImFycmF5Q29udGFpbnMiLCJjbG9uZU9iamVjdCIsImNsb25lIiwicmVwbGFjZU9iamVjdFByb3BzIiwibzEiLCJvMiIsIm1lcmdlT2JqZWN0cyIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiaGV4VG9SZ2JhIiwiaGV4VmFsdWUiLCJyZ3giLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImh1ZTJyZ2IiLCJjb2xvclRvUmdiIiwiZ2V0VW5pdCIsImdldFRyYW5zZm9ybVVuaXQiLCJwcm9wTmFtZSIsImdldEZ1bmN0aW9uVmFsdWUiLCJhbmltYXRhYmxlIiwiaWQiLCJ0b3RhbCIsInByb3AiLCJjb252ZXJ0UHhUb1VuaXQiLCJ1bml0IiwidmFsdWVVbml0IiwiYmFzZWxpbmUiLCJ0ZW1wRWwiLCJwYXJlbnRFbCIsInN0eWxlIiwid2lkdGgiLCJmYWN0b3IiLCJvZmZzZXRXaWR0aCIsImNvbnZlcnRlZFVuaXQiLCJnZXRDU1NWYWx1ZSIsInVwcGVyY2FzZVByb3BOYW1lIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJnZXRBbmltYXRpb25UeXBlIiwiZ2V0RWxlbWVudFRyYW5zZm9ybXMiLCJ0cmFuc2Zvcm0iLCJyZWciLCJ0cmFuc2Zvcm1zIiwiZ2V0VHJhbnNmb3JtVmFsdWUiLCJkZWZhdWx0VmFsIiwibGlzdCIsImdldE9yaWdpbmFsVGFyZ2V0VmFsdWUiLCJnZXRSZWxhdGl2ZVZhbHVlIiwib3BlcmF0b3IiLCJ2YWxpZGF0ZVZhbHVlIiwib3JpZ2luYWxVbml0IiwidW5pdExlc3MiLCJzdWJzdHIiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJnZXRDaXJjbGVMZW5ndGgiLCJnZXRSZWN0TGVuZ3RoIiwiZ2V0TGluZUxlbmd0aCIsImdldFBvbHlsaW5lTGVuZ3RoIiwicG9pbnRzIiwidG90YWxMZW5ndGgiLCJwcmV2aW91c1BvcyIsIm51bWJlck9mSXRlbXMiLCJjdXJyZW50UG9zIiwiZ2V0SXRlbSIsImdldFBvbHlnb25MZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsInNldERhc2hvZmZzZXQiLCJwYXRoTGVuZ3RoIiwic2V0QXR0cmlidXRlIiwiZ2V0UGFyZW50U3ZnRWwiLCJnZXRQYXJlbnRTdmciLCJwYXRoRWwiLCJzdmdEYXRhIiwicGFyZW50U3ZnRWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwidmlld0JveEF0dHIiLCJoZWlnaHQiLCJ2aWV3Qm94IiwidlciLCJ2SCIsInBlcmNlbnQiLCJwcm9wZXJ0eSIsImdldFBhdGhQcm9ncmVzcyIsImlzUGF0aFRhcmdldEluc2lkZVNWRyIsInBvaW50Iiwib2Zmc2V0IiwiZ2V0UG9pbnRBdExlbmd0aCIsInAwIiwic2NhbGVYIiwic2NhbGVZIiwiYXRhbjIiLCJkZWNvbXBvc2VWYWx1ZSIsIm9yaWdpbmFsIiwibnVtYmVycyIsIk51bWJlciIsInN0cmluZ3MiLCJwYXJzZVRhcmdldHMiLCJ0YXJnZXRzIiwidGFyZ2V0c0FycmF5IiwiaXRlbSIsInBvcyIsImdldEFuaW1hdGFibGVzIiwicGFyc2VkIiwibm9ybWFsaXplUHJvcGVydHlUd2VlbnMiLCJ0d2VlblNldHRpbmdzIiwic2V0dGluZ3MiLCJpc0Zyb21UbyIsInByb3BBcnJheSIsImZsYXR0ZW5LZXlmcmFtZXMiLCJrZXlmcmFtZXMiLCJwcm9wZXJ0eU5hbWVzIiwicHJvcGVydGllcyIsIm5ld0tleSIsImdldFByb3BlcnRpZXMiLCJ0d2VlbnMiLCJub3JtYWxpemVUd2VlblZhbHVlcyIsInR3ZWVuIiwibm9ybWFsaXplVHdlZW5zIiwicHJldmlvdXNUd2VlbiIsInR3ZWVuVmFsdWUiLCJ0b1VuaXQiLCJvcmlnaW5hbFZhbHVlIiwicHJldmlvdXNWYWx1ZSIsImZyb21Vbml0IiwiaXNQYXRoIiwiaXNDb2xvciIsInNldFByb2dyZXNzVmFsdWUiLCJjc3MiLCJhdHRyaWJ1dGUiLCJvYmplY3QiLCJtYW51YWwiLCJsYXN0Iiwic2V0VGFyZ2V0c1ZhbHVlIiwiYW5pbWF0YWJsZXMiLCJhbmltVHlwZSIsImNyZWF0ZUFuaW1hdGlvbiIsImxhc3RUd2VlbiIsImdldEFuaW1hdGlvbnMiLCJnZXRJbnN0YW5jZVRpbWluZ3MiLCJhbmltYXRpb25zIiwiYW5pbUxlbmd0aCIsImdldFRsT2Zmc2V0IiwiYW5pbSIsInRpbWluZ3MiLCJpbnN0YW5jZUlEIiwiY3JlYXRlTmV3SW5zdGFuY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwiY2hpbGRyZW4iLCJhY3RpdmVJbnN0YW5jZXMiLCJlbmdpbmUiLCJyYWYiLCJwbGF5IiwiaXNEb2N1bWVudEhpZGRlbiIsImFuaW1lIiwic3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbiIsInN0ZXAiLCJhY3RpdmVJbnN0YW5jZXNMZW5ndGgiLCJhY3RpdmVJbnN0YW5jZSIsInBhdXNlZCIsInRpY2siLCJ1bmRlZmluZWQiLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpbnN0YW5jZSIsIl9vbkRvY3VtZW50VmlzaWJpbGl0eSIsImhpZGRlbiIsInN0YXJ0VGltZSIsImxhc3RUaW1lIiwibm93IiwiY2hpbGRyZW5MZW5ndGgiLCJtYWtlUHJvbWlzZSIsInByb21pc2UiLCJfcmVzb2x2ZSIsImZpbmlzaGVkIiwidG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24iLCJyZXZlcnNlZCIsImNoaWxkIiwiYWRqdXN0VGltZSIsInRpbWUiLCJyZXNldFRpbWUiLCJjdXJyZW50VGltZSIsInNwZWVkIiwic2Vla0NoaWxkIiwic2VlayIsInN5bmNJbnN0YW5jZUNoaWxkcmVuIiwicmV2ZXJzZVBsYXliYWNrIiwiaSQxIiwic2V0QW5pbWF0aW9uc1Byb2dyZXNzIiwiaW5zVGltZSIsImFuaW1hdGlvbnNMZW5ndGgiLCJ0d2Vlbkxlbmd0aCIsImVhc2VkIiwiaXNOYU4iLCJ0b051bWJlcnNMZW5ndGgiLCJ0b051bWJlciIsImZyb21OdW1iZXIiLCJzdHJpbmdzTGVuZ3RoIiwibiQxIiwiY3VycmVudFZhbHVlIiwic2V0Q2FsbGJhY2siLCJjYiIsInBhc3NUaHJvdWdoIiwiY291bnRJdGVyYXRpb24iLCJyZW1haW5pbmciLCJzZXRJbnN0YW5jZVByb2dyZXNzIiwiZW5naW5lVGltZSIsImluc0R1cmF0aW9uIiwiaW5zRGVsYXkiLCJpbnNFbmREZWxheSIsImJlZ2FuIiwibG9vcEJlZ2FuIiwiY2hhbmdlQmVnYW4iLCJjaGFuZ2VDb21wbGV0ZWQiLCJjb21wbGV0ZWQiLCJyZXNldCIsInBhdXNlIiwicmVzdGFydCIsInJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UiLCJyZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnMiLCJjaGlsZEFuaW1hdGlvbnMiLCJyZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyIsInN0YWdnZXIiLCJncmlkIiwiYXhpcyIsImZyb21JbmRleCIsImZyb21GaXJzdCIsImZyb21DZW50ZXIiLCJmcm9tTGFzdCIsImlzUmFuZ2UiLCJ2YWwxIiwidmFsMiIsInZhbHVlcyIsIm1heFZhbHVlIiwiZnJvbVgiLCJmcm9tWSIsImZsb29yIiwidG9YIiwidG9ZIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3BhY2luZyIsInRpbWVsaW5lIiwidGwiLCJpbnN0YW5jZVBhcmFtcyIsInRsSW5kZXgiLCJpbnMiLCJpbnNQYXJhbXMiLCJ0bER1cmF0aW9uIiwicnVubmluZyIsImNvbnZlcnRQeCIsInJhbmRvbSIsImJhcmJhIiwibG9ja3NjcmVlbiIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NOYW1lIiwiaGFuZGxlVG91Y2hNb3ZlIiwidW5sb2NrIiwiY2xhc3NMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==