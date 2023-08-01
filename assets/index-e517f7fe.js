function Eg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function kh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Rh = { exports: {} },
  Gl = {},
  Ph = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ai = Symbol.for('react.element'),
  xg = Symbol.for('react.portal'),
  Cg = Symbol.for('react.fragment'),
  _g = Symbol.for('react.strict_mode'),
  kg = Symbol.for('react.profiler'),
  Rg = Symbol.for('react.provider'),
  Pg = Symbol.for('react.context'),
  Tg = Symbol.for('react.forward_ref'),
  Og = Symbol.for('react.suspense'),
  Mg = Symbol.for('react.memo'),
  Lg = Symbol.for('react.lazy'),
  vf = Symbol.iterator;
function Dg(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (vf && e[vf]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Th = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Oh = Object.assign,
  Mh = {};
function Gr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Mh), (this.updater = n || Th);
}
Gr.prototype.isReactComponent = {};
Gr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Gr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Lh() {}
Lh.prototype = Gr.prototype;
function Bu(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Mh), (this.updater = n || Th);
}
var Vu = (Bu.prototype = new Lh());
Vu.constructor = Bu;
Oh(Vu, Gr.prototype);
Vu.isPureReactComponent = !0;
var gf = Array.isArray,
  Dh = Object.prototype.hasOwnProperty,
  Hu = { current: null },
  bh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fh(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      Dh.call(t, r) && !bh.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: ai, type: e, key: i, ref: l, props: o, _owner: Hu.current };
}
function bg(e, t) {
  return { $$typeof: ai, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Wu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ai;
}
function Fg(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var yf = /\/+/g;
function Qs(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Fg('' + e.key) : t.toString(36);
}
function Ki(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ai:
          case xg:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Qs(l, 0) : r),
      gf(o)
        ? ((n = ''),
          e != null && (n = e.replace(yf, '$&/') + '/'),
          Ki(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (Wu(o) &&
            (o = bg(o, n + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(yf, '$&/') + '/') + e)),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), gf(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Qs(i, s);
      l += Ki(i, t, n, a, o);
    }
  else if (((a = Dg(e)), typeof a == 'function'))
    for (e = a.call(e), s = 0; !(i = e.next()).done; ) (i = i.value), (a = r + Qs(i, s++)), (l += Ki(i, t, n, a, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return l;
}
function Ci(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ki(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Ag(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ge = { current: null },
  qi = { transition: null },
  Ng = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: qi, ReactCurrentOwner: Hu };
ee.Children = {
  map: Ci,
  forEach: function (e, t, n) {
    Ci(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ci(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wu(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
ee.Component = Gr;
ee.Fragment = Cg;
ee.Profiler = kg;
ee.PureComponent = Bu;
ee.StrictMode = _g;
ee.Suspense = Og;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ng;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = Oh({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Hu.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t) Dh.call(t, a) && !bh.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ai, type: e.type, key: o, ref: i, props: r, _owner: l };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: Pg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rg, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = Fh;
ee.createFactory = function (e) {
  var t = Fh.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: Tg, render: e };
};
ee.isValidElement = Wu;
ee.lazy = function (e) {
  return { $$typeof: Lg, _payload: { _status: -1, _result: e }, _init: Ag };
};
ee.memo = function (e, t) {
  return { $$typeof: Mg, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = qi.transition;
  qi.transition = {};
  try {
    e();
  } finally {
    qi.transition = t;
  }
};
ee.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
ee.useCallback = function (e, t) {
  return Ge.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return Ge.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return Ge.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return Ge.current.useEffect(e, t);
};
ee.useId = function () {
  return Ge.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return Ge.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return Ge.current.useRef(e);
};
ee.useState = function (e) {
  return Ge.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return Ge.current.useTransition();
};
ee.version = '18.2.0';
Ph.exports = ee;
var S = Ph.exports;
const _r = kh(S),
  fl = Eg({ __proto__: null, default: _r }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ig = S,
  zg = Symbol.for('react.element'),
  $g = Symbol.for('react.fragment'),
  Ug = Object.prototype.hasOwnProperty,
  jg = Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ah(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Ug.call(t, r) && !Bg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: zg, type: e, key: i, ref: l, props: o, _owner: jg.current };
}
Gl.Fragment = $g;
Gl.jsx = Ah;
Gl.jsxs = Ah;
Rh.exports = Gl;
var No = Rh.exports;
function Vg(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Hg(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var Wg = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Hg(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Vg(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Be = '-ms-',
  dl = '-moz-',
  oe = '-webkit-',
  Nh = 'comm',
  Qu = 'rule',
  Ku = 'decl',
  Qg = '@import',
  Ih = '@keyframes',
  Kg = '@layer',
  qg = Math.abs,
  Yl = String.fromCharCode,
  Gg = Object.assign;
function Yg(e, t) {
  return Ne(e, 0) ^ 45 ? (((((((t << 2) ^ Ne(e, 0)) << 2) ^ Ne(e, 1)) << 2) ^ Ne(e, 2)) << 2) ^ Ne(e, 3) : 0;
}
function zh(e) {
  return e.trim();
}
function Xg(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, n) {
  return e.replace(t, n);
}
function La(e, t) {
  return e.indexOf(t);
}
function Ne(e, t) {
  return e.charCodeAt(t) | 0;
}
function Io(e, t, n) {
  return e.slice(t, n);
}
function $t(e) {
  return e.length;
}
function qu(e) {
  return e.length;
}
function _i(e, t) {
  return t.push(e), e;
}
function Jg(e, t) {
  return e.map(t).join('');
}
var Xl = 1,
  Ar = 1,
  $h = 0,
  ot = 0,
  _e = 0,
  Yr = '';
function Jl(e, t, n, r, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Xl, column: Ar, length: l, return: '' };
}
function io(e, t) {
  return Gg(Jl('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function Zg() {
  return _e;
}
function ey() {
  return (_e = ot > 0 ? Ne(Yr, --ot) : 0), Ar--, _e === 10 && ((Ar = 1), Xl--), _e;
}
function ct() {
  return (_e = ot < $h ? Ne(Yr, ot++) : 0), Ar++, _e === 10 && ((Ar = 1), Xl++), _e;
}
function Bt() {
  return Ne(Yr, ot);
}
function Gi() {
  return ot;
}
function ui(e, t) {
  return Io(Yr, e, t);
}
function zo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Uh(e) {
  return (Xl = Ar = 1), ($h = $t((Yr = e))), (ot = 0), [];
}
function jh(e) {
  return (Yr = ''), e;
}
function Yi(e) {
  return zh(ui(ot - 1, Da(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ty(e) {
  for (; (_e = Bt()) && _e < 33; ) ct();
  return zo(e) > 2 || zo(_e) > 3 ? '' : ' ';
}
function ny(e, t) {
  for (; --t && ct() && !(_e < 48 || _e > 102 || (_e > 57 && _e < 65) || (_e > 70 && _e < 97)); );
  return ui(e, Gi() + (t < 6 && Bt() == 32 && ct() == 32));
}
function Da(e) {
  for (; ct(); )
    switch (_e) {
      case e:
        return ot;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Da(_e);
        break;
      case 40:
        e === 41 && Da(e);
        break;
      case 92:
        ct();
        break;
    }
  return ot;
}
function ry(e, t) {
  for (; ct() && e + _e !== 47 + 10; ) if (e + _e === 42 + 42 && Bt() === 47) break;
  return '/*' + ui(t, ot - 1) + '*' + Yl(e === 47 ? e : ct());
}
function oy(e) {
  for (; !zo(Bt()); ) ct();
  return ui(e, ot);
}
function iy(e) {
  return jh(Xi('', null, null, null, [''], (e = Uh(e)), 0, [0], e));
}
function Xi(e, t, n, r, o, i, l, s, a) {
  for (
    var u = 0, f = 0, h = l, p = 0, v = 0, g = 0, m = 1, w = 1, c = 1, d = 0, y = '', E = o, C = i, _ = r, x = y;
    w;

  )
    switch (((g = d), (d = ct()))) {
      case 40:
        if (g != 108 && Ne(x, h - 1) == 58) {
          La((x += ie(Yi(d), '&', '&\f')), '&\f') != -1 && (c = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Yi(d);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += ty(g);
        break;
      case 92:
        x += ny(Gi() - 1, 7);
        continue;
      case 47:
        switch (Bt()) {
          case 42:
          case 47:
            _i(ly(ry(ct(), Gi()), t, n), a);
            break;
          default:
            x += '/';
        }
        break;
      case 123 * m:
        s[u++] = $t(x) * c;
      case 125 * m:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            w = 0;
          case 59 + f:
            c == -1 && (x = ie(x, /\f/g, '')),
              v > 0 && $t(x) - h && _i(v > 32 ? Sf(x + ';', r, n, h - 1) : Sf(ie(x, ' ', '') + ';', r, n, h - 2), a);
            break;
          case 59:
            x += ';';
          default:
            if ((_i((_ = wf(x, t, n, u, f, o, s, y, (E = []), (C = []), h)), i), d === 123))
              if (f === 0) Xi(x, t, _, _, E, i, h, s, C);
              else
                switch (p === 99 && Ne(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xi(e, _, _, r && _i(wf(e, _, _, 0, 0, o, s, y, o, (E = []), h), C), o, C, h, s, r ? E : C);
                    break;
                  default:
                    Xi(x, _, _, _, [''], C, 0, s, C);
                }
        }
        (u = f = v = 0), (m = c = 1), (y = x = ''), (h = l);
        break;
      case 58:
        (h = 1 + $t(x)), (v = g);
      default:
        if (m < 1) {
          if (d == 123) --m;
          else if (d == 125 && m++ == 0 && ey() == 125) continue;
        }
        switch (((x += Yl(d)), d * m)) {
          case 38:
            c = f > 0 ? 1 : ((x += '\f'), -1);
            break;
          case 44:
            (s[u++] = ($t(x) - 1) * c), (c = 1);
            break;
          case 64:
            Bt() === 45 && (x += Yi(ct())), (p = Bt()), (f = h = $t((y = x += oy(Gi())))), d++;
            break;
          case 45:
            g === 45 && $t(x) == 2 && (m = 0);
        }
    }
  return i;
}
function wf(e, t, n, r, o, i, l, s, a, u, f) {
  for (var h = o - 1, p = o === 0 ? i : [''], v = qu(p), g = 0, m = 0, w = 0; g < r; ++g)
    for (var c = 0, d = Io(e, h + 1, (h = qg((m = l[g])))), y = e; c < v; ++c)
      (y = zh(m > 0 ? p[c] + ' ' + d : ie(d, /&\f/g, p[c]))) && (a[w++] = y);
  return Jl(e, t, n, o === 0 ? Qu : s, a, u, f);
}
function ly(e, t, n) {
  return Jl(e, t, n, Nh, Yl(Zg()), Io(e, 2, -2), 0);
}
function Sf(e, t, n, r) {
  return Jl(e, t, n, Ku, Io(e, 0, r), Io(e, r + 1, -1), r);
}
function kr(e, t) {
  for (var n = '', r = qu(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function sy(e, t, n, r) {
  switch (e.type) {
    case Kg:
      if (e.children.length) break;
    case Qg:
    case Ku:
      return (e.return = e.return || e.value);
    case Nh:
      return '';
    case Ih:
      return (e.return = e.value + '{' + kr(e.children, r) + '}');
    case Qu:
      e.value = e.props.join(',');
  }
  return $t((n = kr(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
}
function ay(e) {
  var t = qu(e);
  return function (n, r, o, i) {
    for (var l = '', s = 0; s < t; s++) l += e[s](n, r, o, i) || '';
    return l;
  };
}
function uy(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Bh(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var cy = function (t, n, r) {
    for (var o = 0, i = 0; (o = i), (i = Bt()), o === 38 && i === 12 && (n[r] = 1), !zo(i); ) ct();
    return ui(t, ot);
  },
  fy = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (zo(o)) {
        case 0:
          o === 38 && Bt() === 12 && (n[r] = 1), (t[r] += cy(ot - 1, n, r));
          break;
        case 2:
          t[r] += Yi(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Bt() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Yl(o);
      }
    while ((o = ct()));
    return t;
  },
  dy = function (t, n) {
    return jh(fy(Uh(t), n));
  },
  Ef = new WeakMap(),
  hy = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== 'rule'; )
        if (((r = r.parent), !r)) return;
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ef.get(r)) && !o) {
        Ef.set(t, !0);
        for (var i = [], l = dy(n, i), s = r.props, a = 0, u = 0; a < l.length; a++)
          for (var f = 0; f < s.length; f++, u++) t.props[u] = i[a] ? l[a].replace(/&\f/g, s[f]) : s[f] + ' ' + l[a];
      }
    }
  },
  py = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''));
    }
  };
function Vh(e, t) {
  switch (Yg(e, t)) {
    case 5103:
      return oe + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + e + dl + e + Be + e + e;
    case 6828:
    case 4268:
      return oe + e + Be + e + e;
    case 6165:
      return oe + e + Be + 'flex-' + e + e;
    case 5187:
      return oe + e + ie(e, /(\w+).+(:[^]+)/, oe + 'box-$1$2' + Be + 'flex-$1$2') + e;
    case 5443:
      return oe + e + Be + 'flex-item-' + ie(e, /flex-|-self/, '') + e;
    case 4675:
      return oe + e + Be + 'flex-line-pack' + ie(e, /align-content|flex-|-self/, '') + e;
    case 5548:
      return oe + e + Be + ie(e, 'shrink', 'negative') + e;
    case 5292:
      return oe + e + Be + ie(e, 'basis', 'preferred-size') + e;
    case 6060:
      return oe + 'box-' + ie(e, '-grow', '') + oe + e + Be + ie(e, 'grow', 'positive') + e;
    case 4554:
      return oe + ie(e, /([^-])(transform)/g, '$1' + oe + '$2') + e;
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, oe + '$1'), /(image-set)/, oe + '$1'), e, '') + e;
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, oe + '$1$`$1');
    case 4968:
      return (
        ie(ie(e, /(.+:)(flex-)?(.*)/, oe + 'box-pack:$3' + Be + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + oe + e + e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, oe + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($t(e) - 1 - t > 6)
        switch (Ne(e, t + 1)) {
          case 109:
            if (Ne(e, t + 4) !== 45) break;
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, '$1' + oe + '$2-$3$1' + dl + (Ne(e, t + 3) == 108 ? '$3' : '$2-$3')) + e;
          case 115:
            return ~La(e, 'stretch') ? Vh(ie(e, 'stretch', 'fill-available'), t) + e : e;
        }
      break;
    case 4949:
      if (Ne(e, t + 1) !== 115) break;
    case 6444:
      switch (Ne(e, $t(e) - 3 - (~La(e, '!important') && 10))) {
        case 107:
          return ie(e, ':', ':' + oe) + e;
        case 101:
          return (
            ie(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' + oe + (Ne(e, 14) === 45 ? 'inline-' : '') + 'box$3$1' + oe + '$2$3$1' + Be + '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ne(e, t + 11)) {
        case 114:
          return oe + e + Be + ie(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return oe + e + Be + ie(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return oe + e + Be + ie(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return oe + e + Be + e + e;
  }
  return e;
}
var my = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ku:
          t.return = Vh(t.value, t.length);
          break;
        case Ih:
          return kr([io(t, { value: ie(t.value, '@', '@' + oe) })], o);
        case Qu:
          if (t.length)
            return Jg(t.props, function (i) {
              switch (Xg(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return kr([io(t, { props: [ie(i, /:(read-\w+)/, ':' + dl + '$1')] })], o);
                case '::placeholder':
                  return kr(
                    [
                      io(t, { props: [ie(i, /:(plac\w+)/, ':' + oe + 'input-$1')] }),
                      io(t, { props: [ie(i, /:(plac\w+)/, ':' + dl + '$1')] }),
                      io(t, { props: [ie(i, /:(plac\w+)/, Be + 'input-$1')] }),
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  vy = [my],
  gy = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (m) {
        var w = m.getAttribute('data-emotion');
        w.indexOf(' ') !== -1 && (document.head.appendChild(m), m.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || vy,
      i = {},
      l,
      s = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function (m) {
        for (var w = m.getAttribute('data-emotion').split(' '), c = 1; c < w.length; c++) i[w[c]] = !0;
        s.push(m);
      });
    var a,
      u = [hy, py];
    {
      var f,
        h = [
          sy,
          uy(function (m) {
            f.insert(m);
          }),
        ],
        p = ay(u.concat(o, h)),
        v = function (w) {
          return kr(iy(w), p);
        };
      a = function (w, c, d, y) {
        (f = d), v(w ? w + '{' + c.styles + '}' : c.styles), y && (g.inserted[c.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new Wg({
        key: n,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: a,
    };
    return g.sheet.hydrate(s), g;
  };
function ba() {
  return (
    (ba = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ba.apply(this, arguments)
  );
}
var Hh = { exports: {} },
  ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var be = typeof Symbol == 'function' && Symbol.for,
  Gu = be ? Symbol.for('react.element') : 60103,
  Yu = be ? Symbol.for('react.portal') : 60106,
  Zl = be ? Symbol.for('react.fragment') : 60107,
  es = be ? Symbol.for('react.strict_mode') : 60108,
  ts = be ? Symbol.for('react.profiler') : 60114,
  ns = be ? Symbol.for('react.provider') : 60109,
  rs = be ? Symbol.for('react.context') : 60110,
  Xu = be ? Symbol.for('react.async_mode') : 60111,
  os = be ? Symbol.for('react.concurrent_mode') : 60111,
  is = be ? Symbol.for('react.forward_ref') : 60112,
  ls = be ? Symbol.for('react.suspense') : 60113,
  yy = be ? Symbol.for('react.suspense_list') : 60120,
  ss = be ? Symbol.for('react.memo') : 60115,
  as = be ? Symbol.for('react.lazy') : 60116,
  wy = be ? Symbol.for('react.block') : 60121,
  Sy = be ? Symbol.for('react.fundamental') : 60117,
  Ey = be ? Symbol.for('react.responder') : 60118,
  xy = be ? Symbol.for('react.scope') : 60119;
function ht(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Gu:
        switch (((e = e.type), e)) {
          case Xu:
          case os:
          case Zl:
          case ts:
          case es:
          case ls:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case rs:
              case is:
              case as:
              case ss:
              case ns:
                return e;
              default:
                return t;
            }
        }
      case Yu:
        return t;
    }
  }
}
function Wh(e) {
  return ht(e) === os;
}
ae.AsyncMode = Xu;
ae.ConcurrentMode = os;
ae.ContextConsumer = rs;
ae.ContextProvider = ns;
ae.Element = Gu;
ae.ForwardRef = is;
ae.Fragment = Zl;
ae.Lazy = as;
ae.Memo = ss;
ae.Portal = Yu;
ae.Profiler = ts;
ae.StrictMode = es;
ae.Suspense = ls;
ae.isAsyncMode = function (e) {
  return Wh(e) || ht(e) === Xu;
};
ae.isConcurrentMode = Wh;
ae.isContextConsumer = function (e) {
  return ht(e) === rs;
};
ae.isContextProvider = function (e) {
  return ht(e) === ns;
};
ae.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gu;
};
ae.isForwardRef = function (e) {
  return ht(e) === is;
};
ae.isFragment = function (e) {
  return ht(e) === Zl;
};
ae.isLazy = function (e) {
  return ht(e) === as;
};
ae.isMemo = function (e) {
  return ht(e) === ss;
};
ae.isPortal = function (e) {
  return ht(e) === Yu;
};
ae.isProfiler = function (e) {
  return ht(e) === ts;
};
ae.isStrictMode = function (e) {
  return ht(e) === es;
};
ae.isSuspense = function (e) {
  return ht(e) === ls;
};
ae.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Zl ||
    e === os ||
    e === ts ||
    e === es ||
    e === ls ||
    e === yy ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === as ||
        e.$$typeof === ss ||
        e.$$typeof === ns ||
        e.$$typeof === rs ||
        e.$$typeof === is ||
        e.$$typeof === Sy ||
        e.$$typeof === Ey ||
        e.$$typeof === xy ||
        e.$$typeof === wy))
  );
};
ae.typeOf = ht;
Hh.exports = ae;
var Cy = Hh.exports,
  Qh = Cy,
  _y = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  ky = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Kh = {};
Kh[Qh.ForwardRef] = _y;
Kh[Qh.Memo] = ky;
var Ry = !0;
function qh(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (r += o + ' ');
    }),
    r
  );
}
var Ju = function (t, n, r) {
    var o = t.key + '-' + n.name;
    (r === !1 || Ry === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
  },
  Gh = function (t, n, r) {
    Ju(t, n, r);
    var o = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Py(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Ty = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Oy = /[A-Z]|^ms/g,
  My = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Yh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  xf = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Ks = Bh(function (e) {
    return Yh(e) ? e : e.replace(Oy, '-$&').toLowerCase();
  }),
  Cf = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(My, function (r, o, i) {
            return (Ut = { name: o, styles: i, next: Ut }), o;
          });
    }
    return Ty[t] !== 1 && !Yh(t) && typeof n == 'number' && n !== 0 ? n + 'px' : n;
  };
function $o(e, t, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1) return (Ut = { name: n.name, styles: n.styles, next: Ut }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0) for (; r !== void 0; ) (Ut = { name: r.name, styles: r.styles, next: Ut }), (r = r.next);
        var o = n.styles + ';';
        return o;
      }
      return Ly(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var i = Ut,
          l = n(e);
        return (Ut = i), $o(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function Ly(e, t, n) {
  var r = '';
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += $o(e, t, n[o]) + ';';
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != 'object')
        t != null && t[l] !== void 0 ? (r += i + '{' + t[l] + '}') : xf(l) && (r += Ks(i) + ':' + Cf(i, l) + ';');
      else if (Array.isArray(l) && typeof l[0] == 'string' && (t == null || t[l[0]] === void 0))
        for (var s = 0; s < l.length; s++) xf(l[s]) && (r += Ks(i) + ':' + Cf(i, l[s]) + ';');
      else {
        var a = $o(e, t, l);
        switch (i) {
          case 'animation':
          case 'animationName': {
            r += Ks(i) + ':' + a + ';';
            break;
          }
          default:
            r += i + '{' + a + '}';
        }
      }
    }
  return r;
}
var _f = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ut,
  Zu = function (t, n, r) {
    if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0) return t[0];
    var o = !0,
      i = '';
    Ut = void 0;
    var l = t[0];
    l == null || l.raw === void 0 ? ((o = !1), (i += $o(r, n, l))) : (i += l[0]);
    for (var s = 1; s < t.length; s++) (i += $o(r, n, t[s])), o && (i += l[s]);
    _f.lastIndex = 0;
    for (var a = '', u; (u = _f.exec(i)) !== null; ) a += '-' + u[1];
    var f = Py(i) + a;
    return { name: f, styles: i, next: Ut };
  },
  Dy = function (t) {
    return t();
  },
  by = fl['useInsertionEffect'] ? fl['useInsertionEffect'] : !1,
  Xh = by || Dy,
  us = {}.hasOwnProperty,
  Jh = S.createContext(typeof HTMLElement < 'u' ? gy({ key: 'css' }) : null);
Jh.Provider;
var Zh = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(Jh);
      return t(n, o, r);
    });
  },
  ep = S.createContext({}),
  Fa = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  tp = function (t, n) {
    var r = {};
    for (var o in n) us.call(n, o) && (r[o] = n[o]);
    return (r[Fa] = t), r;
  },
  Fy = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Ju(n, r, o),
      Xh(function () {
        return Gh(n, r, o);
      }),
      null
    );
  },
  Ay = Zh(function (e, t, n) {
    var r = e.css;
    typeof r == 'string' && t.registered[r] !== void 0 && (r = t.registered[r]);
    var o = e[Fa],
      i = [r],
      l = '';
    typeof e.className == 'string'
      ? (l = qh(t.registered, i, e.className))
      : e.className != null && (l = e.className + ' ');
    var s = Zu(i, void 0, S.useContext(ep));
    l += t.key + '-' + s.name;
    var a = {};
    for (var u in e) us.call(e, u) && u !== 'css' && u !== Fa && (a[u] = e[u]);
    return (
      (a.ref = n),
      (a.className = l),
      S.createElement(
        S.Fragment,
        null,
        S.createElement(Fy, { cache: t, serialized: s, isStringTag: typeof o == 'string' }),
        S.createElement(o, a)
      )
    );
  }),
  np = Ay,
  rp = No.Fragment;
function A(e, t, n) {
  return us.call(t, 'css') ? No.jsx(np, tp(e, t), n) : No.jsx(e, t, n);
}
function He(e, t, n) {
  return us.call(t, 'css') ? No.jsxs(np, tp(e, t), n) : No.jsxs(e, t, n);
}
const Ny = 'modulepreload',
  Iy = function (e) {
    return '/pwa-test/' + e;
  },
  kf = {},
  Xr = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName('link');
    return Promise.all(
      n.map((i) => {
        if (((i = Iy(i)), i in kf)) return;
        kf[i] = !0;
        const l = i.endsWith('.css'),
          s = l ? '[rel="stylesheet"]' : '';
        if (!!r)
          for (let f = o.length - 1; f >= 0; f--) {
            const h = o[f];
            if (h.href === i && (!l || h.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${i}"]${s}`)) return;
        const u = document.createElement('link');
        if (
          ((u.rel = l ? 'stylesheet' : Ny),
          l || ((u.as = 'script'), (u.crossOrigin = '')),
          (u.href = i),
          document.head.appendChild(u),
          l)
        )
          return new Promise((f, h) => {
            u.addEventListener('load', f),
              u.addEventListener('error', () => h(new Error(`Unable to preload CSS for ${i}`)));
          });
      })
    ).then(() => t());
  };
function zy(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e) if (!Object.is(o, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
  return !0;
}
const Rf = (e) => {
    let t;
    const n = new Set(),
      r = (a, u) => {
        const f = typeof a == 'function' ? a(t) : a;
        if (!Object.is(f, t)) {
          const h = t;
          (t = u ?? typeof f != 'object' ? f : Object.assign({}, t, f)), n.forEach((p) => p(t, h));
        }
      },
      o = () => t,
      s = {
        setState: r,
        getState: o,
        subscribe: (a) => (n.add(a), () => n.delete(a)),
        destroy: () => {
          (({
            VITE_REACT_APP_NAME: 'Torder3',
            VITE_REACT_APP_MOCK_PORT: '7777',
            VITE_REACT_APP_MODE: 'production',
            BASE_URL: '/pwa-test/',
            MODE: 'production',
            DEV: !1,
            PROD: !0,
            SSR: !1,
          }) && 'production') !== 'production' &&
            console.warn(
              '[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.'
            ),
            n.clear();
        },
      };
    return (t = e(r, o, s)), s;
  },
  $y = (e) => (e ? Rf(e) : Rf);
var op = { exports: {} },
  ip = {},
  lp = { exports: {} },
  sp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr = S;
function Uy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jy = typeof Object.is == 'function' ? Object.is : Uy,
  By = Nr.useState,
  Vy = Nr.useEffect,
  Hy = Nr.useLayoutEffect,
  Wy = Nr.useDebugValue;
function Qy(e, t) {
  var n = t(),
    r = By({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    Hy(
      function () {
        (o.value = n), (o.getSnapshot = t), qs(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    Vy(
      function () {
        return (
          qs(o) && i({ inst: o }),
          e(function () {
            qs(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    Wy(n),
    n
  );
}
function qs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jy(e, n);
  } catch {
    return !0;
  }
}
function Ky(e, t) {
  return t();
}
var qy = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? Ky : Qy;
sp.useSyncExternalStore = Nr.useSyncExternalStore !== void 0 ? Nr.useSyncExternalStore : qy;
lp.exports = sp;
var Gy = lp.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cs = S,
  Yy = Gy;
function Xy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Jy = typeof Object.is == 'function' ? Object.is : Xy,
  Zy = Yy.useSyncExternalStore,
  e0 = cs.useRef,
  t0 = cs.useEffect,
  n0 = cs.useMemo,
  r0 = cs.useDebugValue;
ip.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = e0(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = n0(
    function () {
      function a(v) {
        if (!u) {
          if (((u = !0), (f = v), (v = r(v)), o !== void 0 && l.hasValue)) {
            var g = l.value;
            if (o(g, v)) return (h = g);
          }
          return (h = v);
        }
        if (((g = h), Jy(f, v))) return g;
        var m = r(v);
        return o !== void 0 && o(g, m) ? g : ((f = v), (h = m));
      }
      var u = !1,
        f,
        h,
        p = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        p === null
          ? void 0
          : function () {
              return a(p());
            },
      ];
    },
    [t, n, r, o]
  );
  var s = Zy(e, i[0], i[1]);
  return (
    t0(
      function () {
        (l.hasValue = !0), (l.value = s);
      },
      [s]
    ),
    r0(s),
    s
  );
};
op.exports = ip;
var o0 = op.exports;
const i0 = kh(o0),
  { useSyncExternalStoreWithSelector: l0 } = i0;
function ap(e, t = e.getState, n) {
  const r = l0(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
  return S.useDebugValue(r), r;
}
const Pf = (e) => {
    (({
      VITE_REACT_APP_NAME: 'Torder3',
      VITE_REACT_APP_MOCK_PORT: '7777',
      VITE_REACT_APP_MODE: 'production',
      BASE_URL: '/pwa-test/',
      MODE: 'production',
      DEV: !1,
      PROD: !0,
      SSR: !1,
    }) && 'production') !== 'production' &&
      typeof e != 'function' &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    const t = typeof e == 'function' ? $y(e) : e,
      n = (r, o) => ap(t, r, o);
    return Object.assign(n, t), n;
  },
  s0 = (e) => (e ? Pf(e) : Pf),
  a0 = (e) =>
    function (t) {
      const n = S.useCallback(
        (r) => {
          const o = {};
          return (
            t.forEach((i) => {
              o[i] = r[i];
            }),
            o
          );
        },
        [t]
      );
      return ap(e, n, zy);
    },
  Aa = new Map(),
  ki = (e) => {
    const t = Aa.get(e);
    return t ? Object.fromEntries(Object.entries(t.stores).map(([n, r]) => [n, r.getState()])) : {};
  },
  u0 = (e, t, n) => {
    if (e === void 0) return { type: 'untracked', connection: t.connect(n) };
    const r = Aa.get(n.name);
    if (r) return { type: 'tracked', store: e, ...r };
    const o = { connection: t.connect(n), stores: {} };
    return Aa.set(n.name, o), { type: 'tracked', store: e, ...o };
  },
  c0 =
    (e, t = {}) =>
    (n, r, o) => {
      const { enabled: i, anonymousActionType: l, store: s, ...a } = t;
      let u;
      try {
        u =
          (i ??
            ({
              VITE_REACT_APP_NAME: 'Torder3',
              VITE_REACT_APP_MOCK_PORT: '7777',
              VITE_REACT_APP_MODE: 'production',
              BASE_URL: '/pwa-test/',
              MODE: 'production',
              DEV: !1,
              PROD: !0,
              SSR: !1,
            } && 'production') !== 'production') &&
          window.__REDUX_DEVTOOLS_EXTENSION__;
      } catch {}
      if (!u)
        return (
          ({
            VITE_REACT_APP_NAME: 'Torder3',
            VITE_REACT_APP_MOCK_PORT: '7777',
            VITE_REACT_APP_MODE: 'production',
            BASE_URL: '/pwa-test/',
            MODE: 'production',
            DEV: !1,
            PROD: !0,
            SSR: !1,
          } && 'production') !== 'production' &&
            i &&
            console.warn('[zustand devtools middleware] Please install/enable Redux devtools extension'),
          e(n, r, o)
        );
      const { connection: f, ...h } = u0(s, u, a);
      let p = !0;
      o.setState = (m, w, c) => {
        const d = n(m, w);
        if (!p) return d;
        const y = c === void 0 ? { type: l || 'anonymous' } : typeof c == 'string' ? { type: c } : c;
        return s === void 0
          ? (f == null || f.send(y, r()), d)
          : (f == null || f.send({ ...y, type: `${s}/${y.type}` }, { ...ki(a.name), [s]: o.getState() }), d);
      };
      const v = (...m) => {
          const w = p;
          (p = !1), n(...m), (p = w);
        },
        g = e(o.setState, r, o);
      if (
        (h.type === 'untracked'
          ? f == null || f.init(g)
          : ((h.stores[h.store] = o),
            f == null ||
              f.init(
                Object.fromEntries(Object.entries(h.stores).map(([m, w]) => [m, m === h.store ? g : w.getState()]))
              )),
        o.dispatchFromDevtools && typeof o.dispatch == 'function')
      ) {
        let m = !1;
        const w = o.dispatch;
        o.dispatch = (...c) => {
          (({
            VITE_REACT_APP_NAME: 'Torder3',
            VITE_REACT_APP_MOCK_PORT: '7777',
            VITE_REACT_APP_MODE: 'production',
            BASE_URL: '/pwa-test/',
            MODE: 'production',
            DEV: !1,
            PROD: !0,
            SSR: !1,
          }) && 'production') !== 'production' &&
            c[0].type === '__setState' &&
            !m &&
            (console.warn(
              '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
            ),
            (m = !0)),
            w(...c);
        };
      }
      return (
        f.subscribe((m) => {
          var w;
          switch (m.type) {
            case 'ACTION':
              if (typeof m.payload != 'string') {
                console.error('[zustand devtools middleware] Unsupported action format');
                return;
              }
              return Gs(m.payload, (c) => {
                if (c.type === '__setState') {
                  if (s === void 0) {
                    v(c.state);
                    return;
                  }
                  Object.keys(c.state).length !== 1 &&
                    console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                  const d = c.state[s];
                  if (d == null) return;
                  JSON.stringify(o.getState()) !== JSON.stringify(d) && v(d);
                  return;
                }
                o.dispatchFromDevtools && typeof o.dispatch == 'function' && o.dispatch(c);
              });
            case 'DISPATCH':
              switch (m.payload.type) {
                case 'RESET':
                  return (
                    v(g),
                    s === void 0 ? (f == null ? void 0 : f.init(o.getState())) : f == null ? void 0 : f.init(ki(a.name))
                  );
                case 'COMMIT':
                  if (s === void 0) {
                    f == null || f.init(o.getState());
                    return;
                  }
                  return f == null ? void 0 : f.init(ki(a.name));
                case 'ROLLBACK':
                  return Gs(m.state, (c) => {
                    if (s === void 0) {
                      v(c), f == null || f.init(o.getState());
                      return;
                    }
                    v(c[s]), f == null || f.init(ki(a.name));
                  });
                case 'JUMP_TO_STATE':
                case 'JUMP_TO_ACTION':
                  return Gs(m.state, (c) => {
                    if (s === void 0) {
                      v(c);
                      return;
                    }
                    JSON.stringify(o.getState()) !== JSON.stringify(c[s]) && v(c[s]);
                  });
                case 'IMPORT_STATE': {
                  const { nextLiftedState: c } = m.payload,
                    d = (w = c.computedStates.slice(-1)[0]) == null ? void 0 : w.state;
                  if (!d) return;
                  v(s === void 0 ? d : d[s]), f == null || f.send(null, c);
                  return;
                }
                case 'PAUSE_RECORDING':
                  return (p = !p);
              }
              return;
          }
        }),
        g
      );
    },
  f0 = c0,
  Gs = (e, t) => {
    let n;
    try {
      n = JSON.parse(e);
    } catch (r) {
      console.error('[zustand devtools middleware] Could not parse the received json', r);
    }
    n !== void 0 && t(n);
  };
function d0(e) {
  let t;
  try {
    t = e();
  } catch {
    return;
  }
  return {
    getItem: (r) => {
      var o;
      const i = (s) => (s === null ? null : JSON.parse(s)),
        l = (o = t.getItem(r)) != null ? o : null;
      return l instanceof Promise ? l.then(i) : i(l);
    },
    setItem: (r, o) => t.setItem(r, JSON.stringify(o)),
    removeItem: (r) => t.removeItem(r),
  };
}
const Uo = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return Uo(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return Uo(r)(n);
        },
      };
    }
  },
  h0 = (e, t) => (n, r, o) => {
    let i = {
        getStorage: () => localStorage,
        serialize: JSON.stringify,
        deserialize: JSON.parse,
        partialize: (w) => w,
        version: 0,
        merge: (w, c) => ({ ...c, ...w }),
        ...t,
      },
      l = !1;
    const s = new Set(),
      a = new Set();
    let u;
    try {
      u = i.getStorage();
    } catch {}
    if (!u)
      return e(
        (...w) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
          ),
            n(...w);
        },
        r,
        o
      );
    const f = Uo(i.serialize),
      h = () => {
        const w = i.partialize({ ...r() });
        let c;
        const d = f({ state: w, version: i.version })
          .then((y) => u.setItem(i.name, y))
          .catch((y) => {
            c = y;
          });
        if (c) throw c;
        return d;
      },
      p = o.setState;
    o.setState = (w, c) => {
      p(w, c), h();
    };
    const v = e(
      (...w) => {
        n(...w), h();
      },
      r,
      o
    );
    let g;
    const m = () => {
      var w;
      if (!u) return;
      (l = !1), s.forEach((d) => d(r()));
      const c = ((w = i.onRehydrateStorage) == null ? void 0 : w.call(i, r())) || void 0;
      return Uo(u.getItem.bind(u))(i.name)
        .then((d) => {
          if (d) return i.deserialize(d);
        })
        .then((d) => {
          if (d)
            if (typeof d.version == 'number' && d.version !== i.version) {
              if (i.migrate) return i.migrate(d.state, d.version);
              console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
            } else return d.state;
        })
        .then((d) => {
          var y;
          return (g = i.merge(d, (y = r()) != null ? y : v)), n(g, !0), h();
        })
        .then(() => {
          c == null || c(g, void 0), (l = !0), a.forEach((d) => d(g));
        })
        .catch((d) => {
          c == null || c(void 0, d);
        });
    };
    return (
      (o.persist = {
        setOptions: (w) => {
          (i = { ...i, ...w }), w.getStorage && (u = w.getStorage());
        },
        clearStorage: () => {
          u == null || u.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => m(),
        hasHydrated: () => l,
        onHydrate: (w) => (
          s.add(w),
          () => {
            s.delete(w);
          }
        ),
        onFinishHydration: (w) => (
          a.add(w),
          () => {
            a.delete(w);
          }
        ),
      }),
      m(),
      g || v
    );
  },
  p0 = (e, t) => (n, r, o) => {
    let i = {
        storage: d0(() => localStorage),
        partialize: (m) => m,
        version: 0,
        merge: (m, w) => ({ ...w, ...m }),
        ...t,
      },
      l = !1;
    const s = new Set(),
      a = new Set();
    let u = i.storage;
    if (!u)
      return e(
        (...m) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
          ),
            n(...m);
        },
        r,
        o
      );
    const f = () => {
        const m = i.partialize({ ...r() });
        return u.setItem(i.name, { state: m, version: i.version });
      },
      h = o.setState;
    o.setState = (m, w) => {
      h(m, w), f();
    };
    const p = e(
      (...m) => {
        n(...m), f();
      },
      r,
      o
    );
    let v;
    const g = () => {
      var m, w;
      if (!u) return;
      (l = !1),
        s.forEach((d) => {
          var y;
          return d((y = r()) != null ? y : p);
        });
      const c = ((w = i.onRehydrateStorage) == null ? void 0 : w.call(i, (m = r()) != null ? m : p)) || void 0;
      return Uo(u.getItem.bind(u))(i.name)
        .then((d) => {
          if (d)
            if (typeof d.version == 'number' && d.version !== i.version) {
              if (i.migrate) return i.migrate(d.state, d.version);
              console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
            } else return d.state;
        })
        .then((d) => {
          var y;
          return (v = i.merge(d, (y = r()) != null ? y : p)), n(v, !0), f();
        })
        .then(() => {
          c == null || c(v, void 0), (v = r()), (l = !0), a.forEach((d) => d(v));
        })
        .catch((d) => {
          c == null || c(void 0, d);
        });
    };
    return (
      (o.persist = {
        setOptions: (m) => {
          (i = { ...i, ...m }), m.storage && (u = m.storage);
        },
        clearStorage: () => {
          u == null || u.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => g(),
        hasHydrated: () => l,
        onHydrate: (m) => (
          s.add(m),
          () => {
            s.delete(m);
          }
        ),
        onFinishHydration: (m) => (
          a.add(m),
          () => {
            a.delete(m);
          }
        ),
      }),
      i.skipHydration || g(),
      v || p
    );
  },
  m0 = (e, t) =>
    'getStorage' in t || 'serialize' in t || 'deserialize' in t
      ? (({
          VITE_REACT_APP_NAME: 'Torder3',
          VITE_REACT_APP_MOCK_PORT: '7777',
          VITE_REACT_APP_MODE: 'production',
          BASE_URL: '/pwa-test/',
          MODE: 'production',
          DEV: !1,
          PROD: !0,
          SSR: !1,
        } && 'production') !== 'production' &&
          console.warn(
            '[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead.'
          ),
        h0(e, t))
      : p0(e, t),
  v0 = m0,
  g0 = () => ({ auth: !1 }),
  Na = s0(v0(f0(g0, { name: 'authStore' }), { name: 'auth' })),
  y0 = () => ({
    signIn: () => {
      Na.setState(() => ({ auth: !0 }));
    },
    signOut: () => {
      Na.setState(() => ({ auth: !1 }));
    },
  }),
  ec = a0(Na);
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function le() {
  return (
    (le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    le.apply(this, arguments)
  );
}
var Ce;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Ce || (Ce = {}));
const Tf = 'popstate';
function w0(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: s } = r.location;
    return jo(
      '',
      { pathname: i, search: l, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Yn(o);
  }
  return E0(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Ir(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function S0() {
  return Math.random().toString(36).substr(2, 8);
}
function Of(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function jo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    le({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? sn(t) : t, {
      state: n,
      key: (t && t.key) || r || S0(),
    })
  );
}
function Yn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function sn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function E0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    s = Ce.Pop,
    a = null,
    u = f();
  u == null && ((u = 0), l.replaceState(le({}, l.state, { idx: u }), ''));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function h() {
    s = Ce.Pop;
    let w = f(),
      c = w == null ? null : w - u;
    (u = w), a && a({ action: s, location: m.location, delta: c });
  }
  function p(w, c) {
    s = Ce.Push;
    let d = jo(m.location, w, c);
    n && n(d, w), (u = f() + 1);
    let y = Of(d, u),
      E = m.createHref(d);
    try {
      l.pushState(y, '', E);
    } catch {
      o.location.assign(E);
    }
    i && a && a({ action: s, location: m.location, delta: 1 });
  }
  function v(w, c) {
    s = Ce.Replace;
    let d = jo(m.location, w, c);
    n && n(d, w), (u = f());
    let y = Of(d, u),
      E = m.createHref(d);
    l.replaceState(y, '', E), i && a && a({ action: s, location: m.location, delta: 0 });
  }
  function g(w) {
    let c = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      d = typeof w == 'string' ? w : Yn(w);
    return Z(c, 'No window.location.(origin|href) available to create URL for href: ' + d), new URL(d, c);
  }
  let m = {
    get action() {
      return s;
    },
    get location() {
      return e(o, l);
    },
    listen(w) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Tf, h),
        (a = w),
        () => {
          o.removeEventListener(Tf, h), (a = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: g,
    encodeLocation(w) {
      let c = g(w);
      return { pathname: c.pathname, search: c.search, hash: c.hash };
    },
    push: p,
    replace: v,
    go(w) {
      return l.go(w);
    },
  };
  return m;
}
var Re;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(Re || (Re = {}));
const x0 = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function C0(e) {
  return e.index === !0;
}
function Ia(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let l = [...n, i],
        s = typeof o.id == 'string' ? o.id : l.join('-');
      if (
        (Z(o.index !== !0 || !o.children, 'Cannot specify children on an index route'),
        Z(
          !r[s],
          'Found a route id collision on id "' + s + `".  Route id's must be globally unique within Data Router usages`
        ),
        C0(o))
      ) {
        let a = le({}, o, t(o), { id: s });
        return (r[s] = a), a;
      } else {
        let a = le({}, o, t(o), { id: s, children: void 0 });
        return (r[s] = a), o.children && (a.children = Ia(o.children, t, l, r)), a;
      }
    })
  );
}
function cr(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? sn(t) : t,
    o = Jr(r.pathname || '/', n);
  if (o == null) return null;
  let i = up(e);
  _0(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) l = b0(i[s], N0(o));
  return l;
}
function up(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, l, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || '' : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    a.relativePath.startsWith('/') &&
      (Z(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Xt([r, a.relativePath]),
      f = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (Z(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')
      ),
      up(i.children, t, f, u)),
      !(i.path == null && !i.index) && t.push({ path: u, score: L0(u, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) o(i, l);
      else for (let a of cp(i.path)) o(i, l, a);
    }),
    t
  );
}
function cp(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let l = cp(r.join('/')),
    s = [];
  return (
    s.push(...l.map((a) => (a === '' ? i : [i, a].join('/')))),
    o && s.push(...l),
    s.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function _0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : D0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const k0 = /^:\w+$/,
  R0 = 3,
  P0 = 2,
  T0 = 1,
  O0 = 10,
  M0 = -2,
  Mf = (e) => e === '*';
function L0(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Mf) && (r += M0),
    t && (r += P0),
    n.filter((o) => !Mf(o)).reduce((o, i) => o + (k0.test(i) ? R0 : i === '' ? T0 : O0), r)
  );
}
function D0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function b0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      f = F0({ path: s.relativePath, caseSensitive: s.caseSensitive, end: a }, u);
    if (!f) return null;
    Object.assign(r, f.params);
    let h = s.route;
    i.push({ params: r, pathname: Xt([o, f.pathname]), pathnameBase: U0(Xt([o, f.pathnameBase])), route: h }),
      f.pathnameBase !== '/' && (o = Xt([o, f.pathnameBase]));
  }
  return i;
}
function F0(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = A0(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, '$1'),
    s = o.slice(1);
  return {
    params: r.reduce((u, f, h) => {
      if (f === '*') {
        let p = s[h] || '';
        l = i.slice(0, i.length - p.length).replace(/(.)\/+$/, '$1');
      }
      return (u[f] = I0(s[h] || '', f)), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function A0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ir(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (l, s) => (r.push(s), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function N0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Ir(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function I0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Ir(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Jr(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function z0(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? sn(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : $0(n, t)) : t, search: j0(r), hash: B0(o) };
}
function $0(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Ys(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ci(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function fs(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = sn(e))
    : ((o = le({}, e)),
      Z(!o.pathname || !o.pathname.includes('?'), Ys('?', 'pathname', 'search', o)),
      Z(!o.pathname || !o.pathname.includes('#'), Ys('#', 'pathname', 'hash', o)),
      Z(!o.search || !o.search.includes('#'), Ys('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    l = i ? '/' : o.pathname,
    s;
  if (r || l == null) s = n;
  else {
    let h = t.length - 1;
    if (l.startsWith('..')) {
      let p = l.split('/');
      for (; p[0] === '..'; ) p.shift(), (h -= 1);
      o.pathname = p.join('/');
    }
    s = h >= 0 ? t[h] : '/';
  }
  let a = z0(o, s),
    u = l && l !== '/' && l.endsWith('/'),
    f = (i || l === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (u || f) && (a.pathname += '/'), a;
}
const Xt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  U0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  j0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  B0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class tc {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = o),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function fp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const dp = ['post', 'put', 'patch', 'delete'],
  V0 = new Set(dp),
  H0 = ['get', ...dp],
  W0 = new Set(H0),
  Q0 = new Set([301, 302, 303, 307, 308]),
  K0 = new Set([307, 308]),
  Xs = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  q0 = { state: 'idle', data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 },
  Lf = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  hp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  pp = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  G0 = !pp,
  Y0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function X0(e) {
  Z(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let t;
  if (e.mapRouteProperties) t = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let R = e.detectErrorBoundary;
    t = (P) => ({ hasErrorBoundary: R(P) });
  } else t = Y0;
  let n = {},
    r = Ia(e.routes, t, void 0, n),
    o,
    i = e.basename || '/',
    l = le({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    s = null,
    a = new Set(),
    u = null,
    f = null,
    h = null,
    p = e.hydrationData != null,
    v = cr(r, e.history.location, i),
    g = null;
  if (v == null) {
    let R = kt(404, { pathname: e.history.location.pathname }),
      { matches: P, route: O } = zf(r);
    (v = P), (g = { [O.id]: R });
  }
  let m = !v.some((R) => R.route.lazy) && (!v.some((R) => R.route.loader) || e.hydrationData != null),
    w,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: v,
      initialized: m,
      navigation: Xs,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map(),
    },
    d = Ce.Pop,
    y = !1,
    E,
    C = !1,
    _ = !1,
    x = [],
    k = [],
    L = new Map(),
    N = 0,
    D = -1,
    B = new Map(),
    b = new Set(),
    F = new Map(),
    U = new Map(),
    z = new Map(),
    G = !1;
  function T() {
    return (
      (s = e.history.listen((R) => {
        let { action: P, location: O, delta: j } = R;
        if (G) {
          G = !1;
          return;
        }
        Ir(
          z.size === 0 || j != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let V = hf({ currentLocation: c.location, nextLocation: O, historyAction: P });
        if (V && j != null) {
          (G = !0),
            e.history.go(j * -1),
            wi(V, {
              state: 'blocked',
              location: O,
              proceed() {
                wi(V, { state: 'proceeding', proceed: void 0, reset: void 0, location: O }), e.history.go(j);
              },
              reset() {
                ro(V), I({ blockers: new Map(w.state.blockers) });
              },
            });
          return;
        }
        return de(P, O);
      })),
      c.initialized || de(Ce.Pop, c.location),
      w
    );
  }
  function H() {
    s && s(), a.clear(), E && E.abort(), c.fetchers.forEach((R, P) => zs(P)), c.blockers.forEach((R, P) => ro(P));
  }
  function K(R) {
    return a.add(R), () => a.delete(R);
  }
  function I(R) {
    (c = le({}, c, R)), a.forEach((P) => P(c));
  }
  function Q(R, P) {
    var O, j;
    let V =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        Qt(c.navigation.formMethod) &&
        c.navigation.state === 'loading' &&
        ((O = R.state) == null ? void 0 : O._isRedirect) !== !0,
      Y;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (Y = P.actionData)
        : (Y = null)
      : V
      ? (Y = c.actionData)
      : (Y = null);
    let J = P.loaderData ? If(c.loaderData, P.loaderData, P.matches || [], P.errors) : c.loaderData;
    for (let [W] of z) ro(W);
    let q =
      y === !0 ||
      (c.navigation.formMethod != null &&
        Qt(c.navigation.formMethod) &&
        ((j = R.state) == null ? void 0 : j._isRedirect) !== !0);
    o && ((r = o), (o = void 0)),
      I(
        le({}, P, {
          actionData: Y,
          loaderData: J,
          historyAction: d,
          location: R,
          initialized: !0,
          navigation: Xs,
          revalidation: 'idle',
          restoreScrollPosition: pf(R, P.matches || c.matches),
          preventScrollReset: q,
          blockers: new Map(c.blockers),
        })
      ),
      C ||
        d === Ce.Pop ||
        (d === Ce.Push ? e.history.push(R, R.state) : d === Ce.Replace && e.history.replace(R, R.state)),
      (d = Ce.Pop),
      (y = !1),
      (C = !1),
      (_ = !1),
      (x = []),
      (k = []);
  }
  async function X(R, P) {
    if (typeof R == 'number') {
      e.history.go(R);
      return;
    }
    let O = za(
        c.location,
        c.matches,
        i,
        l.v7_prependBasename,
        R,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      { path: j, submission: V, error: Y } = Df(l.v7_normalizeFormMethod, !1, O, P),
      J = c.location,
      q = jo(c.location, j, P && P.state);
    q = le({}, q, e.history.encodeLocation(q));
    let W = P && P.replace != null ? P.replace : void 0,
      re = Ce.Push;
    W === !0
      ? (re = Ce.Replace)
      : W === !1 ||
        (V != null &&
          Qt(V.formMethod) &&
          V.formAction === c.location.pathname + c.location.search &&
          (re = Ce.Replace));
    let ue = P && 'preventScrollReset' in P ? P.preventScrollReset === !0 : void 0,
      $e = hf({ currentLocation: J, nextLocation: q, historyAction: re });
    if ($e) {
      wi($e, {
        state: 'blocked',
        location: q,
        proceed() {
          wi($e, { state: 'proceeding', proceed: void 0, reset: void 0, location: q }), X(R, P);
        },
        reset() {
          ro($e), I({ blockers: new Map(c.blockers) });
        },
      });
      return;
    }
    return await de(re, q, { submission: V, pendingError: Y, preventScrollReset: ue, replace: P && P.replace });
  }
  function te() {
    if ((Ns(), I({ revalidation: 'loading' }), c.navigation.state !== 'submitting')) {
      if (c.navigation.state === 'idle') {
        de(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      de(d || c.historyAction, c.navigation.location, { overrideNavigation: c.navigation });
    }
  }
  async function de(R, P, O) {
    E && E.abort(),
      (E = null),
      (d = R),
      (C = (O && O.startUninterruptedRevalidation) === !0),
      yg(c.location, c.matches),
      (y = (O && O.preventScrollReset) === !0);
    let j = o || r,
      V = O && O.overrideNavigation,
      Y = cr(j, P, i);
    if (!Y) {
      let Oe = kt(404, { pathname: P.pathname }),
        { matches: Me, route: vt } = zf(j);
      $s(), Q(P, { matches: Me, loaderData: {}, errors: { [vt.id]: Oe } });
      return;
    }
    if (c.initialized && n1(c.location, P) && !(O && O.submission && Qt(O.submission.formMethod))) {
      Q(P, { matches: Y });
      return;
    }
    E = new AbortController();
    let J = so(e.history, P, E.signal, O && O.submission),
      q,
      W;
    if (O && O.pendingError) W = { [fr(Y).route.id]: O.pendingError };
    else if (O && O.submission && Qt(O.submission.formMethod)) {
      let Oe = await ce(J, P, O.submission, Y, { replace: O.replace });
      if (Oe.shortCircuited) return;
      (q = Oe.pendingActionData),
        (W = Oe.pendingActionError),
        (V = le({ state: 'loading', location: P }, O.submission)),
        (J = new Request(J.url, { signal: J.signal }));
    }
    let {
      shortCircuited: re,
      loaderData: ue,
      errors: $e,
    } = await Fe(J, P, Y, V, O && O.submission, O && O.fetcherSubmission, O && O.replace, q, W);
    re || ((E = null), Q(P, le({ matches: Y }, q ? { actionData: q } : {}, { loaderData: ue, errors: $e })));
  }
  async function ce(R, P, O, j, V) {
    Ns();
    let Y = le({ state: 'submitting', location: P }, O);
    I({ navigation: Y });
    let J,
      q = $a(j, P);
    if (!q.route.action && !q.route.lazy)
      J = { type: Re.error, error: kt(405, { method: R.method, pathname: P.pathname, routeId: q.route.id }) };
    else if (((J = await lo('action', R, q, j, n, t, i)), R.signal.aborted)) return { shortCircuited: !0 };
    if (Rr(J)) {
      let W;
      return (
        V && V.replace != null ? (W = V.replace) : (W = J.location === c.location.pathname + c.location.search),
        await no(c, J, { submission: O, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (Eo(J)) {
      let W = fr(j, q.route.id);
      return (
        (V && V.replace) !== !0 && (d = Ce.Push),
        { pendingActionData: {}, pendingActionError: { [W.route.id]: J.error } }
      );
    }
    if (jn(J)) throw kt(400, { type: 'defer-action' });
    return { pendingActionData: { [q.route.id]: J.data } };
  }
  async function Fe(R, P, O, j, V, Y, J, q, W) {
    let re = j;
    re ||
      (re = le(
        {
          state: 'loading',
          location: P,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        V
      ));
    let ue =
        V || Y
          ? V || Y
          : re.formMethod && re.formAction && re.formData && re.formEncType
          ? { formMethod: re.formMethod, formAction: re.formAction, formData: re.formData, formEncType: re.formEncType }
          : void 0,
      $e = o || r,
      [Oe, Me] = bf(e.history, c, O, ue, P, _, x, k, F, $e, i, q, W);
    if (
      ($s((ve) => !(O && O.some((gt) => gt.route.id === ve)) || (Oe && Oe.some((gt) => gt.route.id === ve))),
      Oe.length === 0 && Me.length === 0)
    ) {
      let ve = ff();
      return (
        Q(
          P,
          le(
            { matches: O, loaderData: {}, errors: W || null },
            q ? { actionData: q } : {},
            ve ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!C) {
      Me.forEach((gt) => {
        let sr = c.fetchers.get(gt.key),
          Hs = {
            state: 'loading',
            data: sr && sr.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        c.fetchers.set(gt.key, Hs);
      });
      let ve = q || c.actionData;
      I(
        le(
          { navigation: re },
          ve ? (Object.keys(ve).length === 0 ? { actionData: null } : { actionData: ve }) : {},
          Me.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      );
    }
    (D = ++N),
      Me.forEach((ve) => {
        ve.controller && L.set(ve.key, ve.controller);
      });
    let vt = () => Me.forEach((ve) => lr(ve.key));
    E && E.signal.addEventListener('abort', vt);
    let { results: oo, loaderResults: Us, fetcherResults: Si } = await uf(c.matches, O, Oe, Me, R);
    if (R.signal.aborted) return { shortCircuited: !0 };
    E && E.signal.removeEventListener('abort', vt), Me.forEach((ve) => L.delete(ve.key));
    let cn = $f(oo);
    if (cn) return await no(c, cn, { replace: J }), { shortCircuited: !0 };
    let { loaderData: Ei, errors: js } = Nf(c, O, Oe, Us, W, Me, Si, U);
    U.forEach((ve, gt) => {
      ve.subscribe((sr) => {
        (sr || ve.done) && U.delete(gt);
      });
    });
    let Bs = ff(),
      Vs = df(D),
      xi = Bs || Vs || Me.length > 0;
    return le({ loaderData: Ei, errors: js }, xi ? { fetchers: new Map(c.fetchers) } : {});
  }
  function Nt(R) {
    return c.fetchers.get(R) || q0;
  }
  function yi(R, P, O, j) {
    if (G0)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    L.has(R) && lr(R);
    let V = o || r,
      Y = za(c.location, c.matches, i, l.v7_prependBasename, O, P, j == null ? void 0 : j.relative),
      J = cr(V, Y, i);
    if (!J) {
      Is(R, P, kt(404, { pathname: Y }));
      return;
    }
    let { path: q, submission: W } = Df(l.v7_normalizeFormMethod, !0, Y, j),
      re = $a(J, q);
    if (((y = (j && j.preventScrollReset) === !0), W && Qt(W.formMethod))) {
      pg(R, P, q, re, J, W);
      return;
    }
    F.set(R, { routeId: P, path: q }), mg(R, P, q, re, J, W);
  }
  async function pg(R, P, O, j, V, Y) {
    if ((Ns(), F.delete(R), !j.route.action && !j.route.lazy)) {
      let it = kt(405, { method: Y.formMethod, pathname: O, routeId: P });
      Is(R, P, it);
      return;
    }
    let J = c.fetchers.get(R),
      q = le({ state: 'submitting' }, Y, { data: J && J.data, ' _hasFetcherDoneAnything ': !0 });
    c.fetchers.set(R, q), I({ fetchers: new Map(c.fetchers) });
    let W = new AbortController(),
      re = so(e.history, O, W.signal, Y);
    L.set(R, W);
    let ue = await lo('action', re, j, V, n, t, i);
    if (re.signal.aborted) {
      L.get(R) === W && L.delete(R);
      return;
    }
    if (Rr(ue)) {
      L.delete(R), b.add(R);
      let it = le({ state: 'loading' }, Y, { data: void 0, ' _hasFetcherDoneAnything ': !0 });
      return (
        c.fetchers.set(R, it),
        I({ fetchers: new Map(c.fetchers) }),
        no(c, ue, { submission: Y, isFetchActionRedirect: !0 })
      );
    }
    if (Eo(ue)) {
      Is(R, P, ue.error);
      return;
    }
    if (jn(ue)) throw kt(400, { type: 'defer-action' });
    let $e = c.navigation.location || c.location,
      Oe = so(e.history, $e, W.signal),
      Me = o || r,
      vt = c.navigation.state !== 'idle' ? cr(Me, c.navigation.location, i) : c.matches;
    Z(vt, "Didn't find any matches after fetcher action");
    let oo = ++N;
    B.set(R, oo);
    let Us = le({ state: 'loading', data: ue.data }, Y, { ' _hasFetcherDoneAnything ': !0 });
    c.fetchers.set(R, Us);
    let [Si, cn] = bf(e.history, c, vt, Y, $e, _, x, k, F, Me, i, { [j.route.id]: ue.data }, void 0);
    cn
      .filter((it) => it.key !== R)
      .forEach((it) => {
        let Ws = it.key,
          mf = c.fetchers.get(Ws),
          Sg = {
            state: 'loading',
            data: mf && mf.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        c.fetchers.set(Ws, Sg), it.controller && L.set(Ws, it.controller);
      }),
      I({ fetchers: new Map(c.fetchers) });
    let Ei = () => cn.forEach((it) => lr(it.key));
    W.signal.addEventListener('abort', Ei);
    let { results: js, loaderResults: Bs, fetcherResults: Vs } = await uf(c.matches, vt, Si, cn, Oe);
    if (W.signal.aborted) return;
    W.signal.removeEventListener('abort', Ei), B.delete(R), L.delete(R), cn.forEach((it) => L.delete(it.key));
    let xi = $f(js);
    if (xi) return no(c, xi);
    let { loaderData: ve, errors: gt } = Nf(c, c.matches, Si, Bs, void 0, cn, Vs, U),
      sr = {
        state: 'idle',
        data: ue.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
    c.fetchers.set(R, sr);
    let Hs = df(oo);
    c.navigation.state === 'loading' && oo > D
      ? (Z(d, 'Expected pending action'),
        E && E.abort(),
        Q(c.navigation.location, { matches: vt, loaderData: ve, errors: gt, fetchers: new Map(c.fetchers) }))
      : (I(le({ errors: gt, loaderData: If(c.loaderData, ve, vt, gt) }, Hs ? { fetchers: new Map(c.fetchers) } : {})),
        (_ = !1));
  }
  async function mg(R, P, O, j, V, Y) {
    let J = c.fetchers.get(R),
      q = le({ state: 'loading', formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 }, Y, {
        data: J && J.data,
        ' _hasFetcherDoneAnything ': !0,
      });
    c.fetchers.set(R, q), I({ fetchers: new Map(c.fetchers) });
    let W = new AbortController(),
      re = so(e.history, O, W.signal);
    L.set(R, W);
    let ue = await lo('loader', re, j, V, n, t, i);
    if ((jn(ue) && (ue = (await yp(ue, re.signal, !0)) || ue), L.get(R) === W && L.delete(R), re.signal.aborted))
      return;
    if (Rr(ue)) {
      b.add(R), await no(c, ue);
      return;
    }
    if (Eo(ue)) {
      let Oe = fr(c.matches, P);
      c.fetchers.delete(R), I({ fetchers: new Map(c.fetchers), errors: { [Oe.route.id]: ue.error } });
      return;
    }
    Z(!jn(ue), 'Unhandled fetcher deferred data');
    let $e = {
      state: 'idle',
      data: ue.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      ' _hasFetcherDoneAnything ': !0,
    };
    c.fetchers.set(R, $e), I({ fetchers: new Map(c.fetchers) });
  }
  async function no(R, P, O) {
    var j;
    let { submission: V, replace: Y, isFetchActionRedirect: J } = O === void 0 ? {} : O;
    P.revalidate && (_ = !0);
    let q = jo(R.location, P.location, le({ _isRedirect: !0 }, J ? { _isFetchActionRedirect: !0 } : {}));
    if (
      (Z(q, 'Expected a location on the redirect navigation'),
      hp.test(P.location) && pp && typeof ((j = window) == null ? void 0 : j.location) < 'u')
    ) {
      let Me = e.history.createURL(P.location),
        vt = Jr(Me.pathname, i) == null;
      if (window.location.origin !== Me.origin || vt) {
        Y ? window.location.replace(P.location) : window.location.assign(P.location);
        return;
      }
    }
    E = null;
    let W = Y === !0 ? Ce.Replace : Ce.Push,
      { formMethod: re, formAction: ue, formEncType: $e, formData: Oe } = R.navigation;
    !V && re && ue && Oe && $e && (V = { formMethod: re, formAction: ue, formEncType: $e, formData: Oe }),
      K0.has(P.status) && V && Qt(V.formMethod)
        ? await de(W, q, { submission: le({}, V, { formAction: P.location }), preventScrollReset: y })
        : J
        ? await de(W, q, {
            overrideNavigation: {
              state: 'loading',
              location: q,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: V,
            preventScrollReset: y,
          })
        : await de(W, q, {
            overrideNavigation: {
              state: 'loading',
              location: q,
              formMethod: V ? V.formMethod : void 0,
              formAction: V ? V.formAction : void 0,
              formEncType: V ? V.formEncType : void 0,
              formData: V ? V.formData : void 0,
            },
            preventScrollReset: y,
          });
  }
  async function uf(R, P, O, j, V) {
    let Y = await Promise.all([
        ...O.map((W) => lo('loader', V, W, P, n, t, i)),
        ...j.map((W) =>
          W.matches && W.match && W.controller
            ? lo('loader', so(e.history, W.path, W.controller.signal), W.match, W.matches, n, t, i)
            : { type: Re.error, error: kt(404, { pathname: W.path }) }
        ),
      ]),
      J = Y.slice(0, O.length),
      q = Y.slice(O.length);
    return (
      await Promise.all([
        Uf(
          R,
          O,
          J,
          J.map(() => V.signal),
          !1,
          c.loaderData
        ),
        Uf(
          R,
          j.map((W) => W.match),
          q,
          j.map((W) => (W.controller ? W.controller.signal : null)),
          !0
        ),
      ]),
      { results: Y, loaderResults: J, fetcherResults: q }
    );
  }
  function Ns() {
    (_ = !0),
      x.push(...$s()),
      F.forEach((R, P) => {
        L.has(P) && (k.push(P), lr(P));
      });
  }
  function Is(R, P, O) {
    let j = fr(c.matches, P);
    zs(R), I({ errors: { [j.route.id]: O }, fetchers: new Map(c.fetchers) });
  }
  function zs(R) {
    L.has(R) && lr(R), F.delete(R), B.delete(R), b.delete(R), c.fetchers.delete(R);
  }
  function lr(R) {
    let P = L.get(R);
    Z(P, 'Expected fetch controller: ' + R), P.abort(), L.delete(R);
  }
  function cf(R) {
    for (let P of R) {
      let j = {
        state: 'idle',
        data: Nt(P).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
      c.fetchers.set(P, j);
    }
  }
  function ff() {
    let R = [],
      P = !1;
    for (let O of b) {
      let j = c.fetchers.get(O);
      Z(j, 'Expected fetcher: ' + O), j.state === 'loading' && (b.delete(O), R.push(O), (P = !0));
    }
    return cf(R), P;
  }
  function df(R) {
    let P = [];
    for (let [O, j] of B)
      if (j < R) {
        let V = c.fetchers.get(O);
        Z(V, 'Expected fetcher: ' + O), V.state === 'loading' && (lr(O), B.delete(O), P.push(O));
      }
    return cf(P), P.length > 0;
  }
  function vg(R, P) {
    let O = c.blockers.get(R) || Lf;
    return z.get(R) !== P && z.set(R, P), O;
  }
  function ro(R) {
    c.blockers.delete(R), z.delete(R);
  }
  function wi(R, P) {
    let O = c.blockers.get(R) || Lf;
    Z(
      (O.state === 'unblocked' && P.state === 'blocked') ||
        (O.state === 'blocked' && P.state === 'blocked') ||
        (O.state === 'blocked' && P.state === 'proceeding') ||
        (O.state === 'blocked' && P.state === 'unblocked') ||
        (O.state === 'proceeding' && P.state === 'unblocked'),
      'Invalid blocker state transition: ' + O.state + ' -> ' + P.state
    ),
      c.blockers.set(R, P),
      I({ blockers: new Map(c.blockers) });
  }
  function hf(R) {
    let { currentLocation: P, nextLocation: O, historyAction: j } = R;
    if (z.size === 0) return;
    z.size > 1 && Ir(!1, 'A router only supports one blocker at a time');
    let V = Array.from(z.entries()),
      [Y, J] = V[V.length - 1],
      q = c.blockers.get(Y);
    if (!(q && q.state === 'proceeding') && J({ currentLocation: P, nextLocation: O, historyAction: j })) return Y;
  }
  function $s(R) {
    let P = [];
    return (
      U.forEach((O, j) => {
        (!R || R(j)) && (O.cancel(), P.push(j), U.delete(j));
      }),
      P
    );
  }
  function gg(R, P, O) {
    if (((u = R), (h = P), (f = O || ((j) => j.key)), !p && c.navigation === Xs)) {
      p = !0;
      let j = pf(c.location, c.matches);
      j != null && I({ restoreScrollPosition: j });
    }
    return () => {
      (u = null), (h = null), (f = null);
    };
  }
  function yg(R, P) {
    if (u && f && h) {
      let O = P.map((V) => jf(V, c.loaderData)),
        j = f(R, O) || R.key;
      u[j] = h();
    }
  }
  function pf(R, P) {
    if (u && f && h) {
      let O = P.map((Y) => jf(Y, c.loaderData)),
        j = f(R, O) || R.key,
        V = u[j];
      if (typeof V == 'number') return V;
    }
    return null;
  }
  function wg(R) {
    (n = {}), (o = Ia(R, t, void 0, n));
  }
  return (
    (w = {
      get basename() {
        return i;
      },
      get state() {
        return c;
      },
      get routes() {
        return r;
      },
      initialize: T,
      subscribe: K,
      enableScrollRestoration: gg,
      navigate: X,
      fetch: yi,
      revalidate: te,
      createHref: (R) => e.history.createHref(R),
      encodeLocation: (R) => e.history.encodeLocation(R),
      getFetcher: Nt,
      deleteFetcher: zs,
      dispose: H,
      getBlocker: vg,
      deleteBlocker: ro,
      _internalFetchControllers: L,
      _internalActiveDeferreds: U,
      _internalSetRoutes: wg,
    }),
    w
  );
}
function J0(e) {
  return e != null && 'formData' in e;
}
function za(e, t, n, r, o, i, l) {
  let s, a;
  if (i != null && l !== 'path') {
    s = [];
    for (let f of t)
      if ((s.push(f), f.route.id === i)) {
        a = f;
        break;
      }
  } else (s = t), (a = t[t.length - 1]);
  let u = fs(
    o || '.',
    ci(s).map((f) => f.pathnameBase),
    Jr(e.pathname, n) || e.pathname,
    l === 'path'
  );
  return (
    o == null && ((u.search = e.search), (u.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      a &&
      a.route.index &&
      !nc(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    r && n !== '/' && (u.pathname = u.pathname === '/' ? n : Xt([n, u.pathname])),
    Yn(u)
  );
}
function Df(e, t, n, r) {
  if (!r || !J0(r)) return { path: n };
  if (r.formMethod && !i1(r.formMethod)) return { path: n, error: kt(405, { method: r.formMethod }) };
  let o;
  if (r.formData) {
    let s = r.formMethod || 'get';
    if (
      ((o = {
        formMethod: e ? s.toUpperCase() : s.toLowerCase(),
        formAction: gp(n),
        formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
        formData: r.formData,
      }),
      Qt(o.formMethod))
    )
      return { path: n, submission: o };
  }
  let i = sn(n),
    l = vp(r.formData);
  return t && i.search && nc(i.search) && l.append('index', ''), (i.search = '?' + l), { path: Yn(i), submission: o };
}
function Z0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function bf(e, t, n, r, o, i, l, s, a, u, f, h, p) {
  let v = p ? Object.values(p)[0] : h ? Object.values(h)[0] : void 0,
    g = e.createURL(t.location),
    m = e.createURL(o),
    w = p ? Object.keys(p)[0] : void 0,
    d = Z0(n, w).filter((E, C) => {
      if (E.route.lazy) return !0;
      if (E.route.loader == null) return !1;
      if (e1(t.loaderData, t.matches[C], E) || l.some((k) => k === E.route.id)) return !0;
      let _ = t.matches[C],
        x = E;
      return Ff(
        E,
        le({ currentUrl: g, currentParams: _.params, nextUrl: m, nextParams: x.params }, r, {
          actionResult: v,
          defaultShouldRevalidate:
            i || g.pathname + g.search === m.pathname + m.search || g.search !== m.search || mp(_, x),
        })
      );
    }),
    y = [];
  return (
    a.forEach((E, C) => {
      if (!n.some((L) => L.route.id === E.routeId)) return;
      let _ = cr(u, E.path, f);
      if (!_) {
        y.push({ key: C, routeId: E.routeId, path: E.path, matches: null, match: null, controller: null });
        return;
      }
      let x = $a(_, E.path);
      if (s.includes(C)) {
        y.push({ key: C, routeId: E.routeId, path: E.path, matches: _, match: x, controller: new AbortController() });
        return;
      }
      Ff(
        x,
        le(
          {
            currentUrl: g,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: m,
            nextParams: n[n.length - 1].params,
          },
          r,
          { actionResult: v, defaultShouldRevalidate: i }
        )
      ) &&
        y.push({ key: C, routeId: E.routeId, path: E.path, matches: _, match: x, controller: new AbortController() });
    }),
    [d, y]
  );
}
function e1(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function mp(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*']);
}
function Ff(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Af(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  Z(o, 'No route found in manifest');
  let i = {};
  for (let l in r) {
    let a = o[l] !== void 0 && l !== 'hasErrorBoundary';
    Ir(
      !a,
      'Route "' +
        o.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !a && !x0.has(l) && (i[l] = r[l]);
  }
  Object.assign(o, i), Object.assign(o, le({}, t(o), { lazy: void 0 }));
}
async function lo(e, t, n, r, o, i, l, s, a, u) {
  s === void 0 && (s = !1), a === void 0 && (a = !1);
  let f,
    h,
    p,
    v = (w) => {
      let c,
        d = new Promise((y, E) => (c = E));
      return (
        (p = () => c()),
        t.signal.addEventListener('abort', p),
        Promise.race([w({ request: t, params: n.params, context: u }), d])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) h = (await Promise.all([v(w), Af(n.route, i, o)]))[0];
      else if ((await Af(n.route, i, o), (w = n.route[e]), w)) h = await v(w);
      else if (e === 'action') {
        let c = new URL(t.url),
          d = c.pathname + c.search;
        throw kt(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: Re.data, data: void 0 };
    else if (w) h = await v(w);
    else {
      let c = new URL(t.url),
        d = c.pathname + c.search;
      throw kt(404, { pathname: d });
    }
    Z(
      h !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (w) {
    (f = Re.error), (h = w);
  } finally {
    p && t.signal.removeEventListener('abort', p);
  }
  if (o1(h)) {
    let w = h.status;
    if (Q0.has(w)) {
      let y = h.headers.get('Location');
      if ((Z(y, 'Redirects returned/thrown from loaders/actions must have a Location header'), !hp.test(y)))
        y = za(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, y);
      else if (!s) {
        let E = new URL(t.url),
          C = y.startsWith('//') ? new URL(E.protocol + y) : new URL(y),
          _ = Jr(C.pathname, l) != null;
        C.origin === E.origin && _ && (y = C.pathname + C.search + C.hash);
      }
      if (s) throw (h.headers.set('Location', y), h);
      return { type: Re.redirect, status: w, location: y, revalidate: h.headers.get('X-Remix-Revalidate') !== null };
    }
    if (a) throw { type: f || Re.data, response: h };
    let c,
      d = h.headers.get('Content-Type');
    return (
      d && /\bapplication\/json\b/.test(d) ? (c = await h.json()) : (c = await h.text()),
      f === Re.error
        ? { type: f, error: new tc(w, h.statusText, c), headers: h.headers }
        : { type: Re.data, data: c, statusCode: h.status, headers: h.headers }
    );
  }
  if (f === Re.error) return { type: f, error: h };
  if (r1(h)) {
    var g, m;
    return {
      type: Re.deferred,
      deferredData: h,
      statusCode: (g = h.init) == null ? void 0 : g.status,
      headers: ((m = h.init) == null ? void 0 : m.headers) && new Headers(h.init.headers),
    };
  }
  return { type: Re.data, data: h };
}
function so(e, t, n, r) {
  let o = e.createURL(gp(t)).toString(),
    i = { signal: n };
  if (r && Qt(r.formMethod)) {
    let { formMethod: l, formEncType: s, formData: a } = r;
    (i.method = l.toUpperCase()), (i.body = s === 'application/x-www-form-urlencoded' ? vp(a) : a);
  }
  return new Request(o, i);
}
function vp(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function t1(e, t, n, r, o) {
  let i = {},
    l = null,
    s,
    a = !1,
    u = {};
  return (
    n.forEach((f, h) => {
      let p = t[h].route.id;
      if ((Z(!Rr(f), 'Cannot handle redirect results in processLoaderData'), Eo(f))) {
        let v = fr(e, p),
          g = f.error;
        r && ((g = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[v.route.id] == null && (l[v.route.id] = g),
          (i[p] = void 0),
          a || ((a = !0), (s = fp(f.error) ? f.error.status : 500)),
          f.headers && (u[p] = f.headers);
      } else
        jn(f) ? (o.set(p, f.deferredData), (i[p] = f.deferredData.data)) : (i[p] = f.data),
          f.statusCode != null && f.statusCode !== 200 && !a && (s = f.statusCode),
          f.headers && (u[p] = f.headers);
    }),
    r && ((l = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: l, statusCode: s || 200, loaderHeaders: u }
  );
}
function Nf(e, t, n, r, o, i, l, s) {
  let { loaderData: a, errors: u } = t1(t, n, r, o, s);
  for (let f = 0; f < i.length; f++) {
    let { key: h, match: p, controller: v } = i[f];
    Z(l !== void 0 && l[f] !== void 0, 'Did not find corresponding fetcher result');
    let g = l[f];
    if (!(v && v.signal.aborted))
      if (Eo(g)) {
        let m = fr(e.matches, p == null ? void 0 : p.route.id);
        (u && u[m.route.id]) || (u = le({}, u, { [m.route.id]: g.error })), e.fetchers.delete(h);
      } else if (Rr(g)) Z(!1, 'Unhandled fetcher revalidation redirect');
      else if (jn(g)) Z(!1, 'Unhandled fetcher deferred data');
      else {
        let m = {
          state: 'idle',
          data: g.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          ' _hasFetcherDoneAnything ': !0,
        };
        e.fetchers.set(h, m);
      }
  }
  return { loaderData: a, errors: u };
}
function If(e, t, n, r) {
  let o = le({}, t);
  for (let i of n) {
    let l = i.route.id;
    if (
      (t.hasOwnProperty(l) ? t[l] !== void 0 && (o[l] = t[l]) : e[l] !== void 0 && i.route.loader && (o[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return o;
}
function fr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function zf(e) {
  let t = e.find((n) => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function kt(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    l = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((l = 'Bad Request'),
        o && n && r
          ? (s =
              'You made a ' +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i === 'defer-action' && (s = 'defer() is not supported in actions'))
      : e === 403
      ? ((l = 'Forbidden'), (s = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((l = 'Not Found'), (s = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((l = 'Method Not Allowed'),
        o && n && r
          ? (s =
              'You made a ' +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new tc(e || 500, l, new Error(s), !0)
  );
}
function $f(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Rr(n)) return n;
  }
}
function gp(e) {
  let t = typeof e == 'string' ? sn(e) : e;
  return Yn(le({}, t, { hash: '' }));
}
function n1(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function jn(e) {
  return e.type === Re.deferred;
}
function Eo(e) {
  return e.type === Re.error;
}
function Rr(e) {
  return (e && e.type) === Re.redirect;
}
function r1(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function o1(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function i1(e) {
  return W0.has(e.toLowerCase());
}
function Qt(e) {
  return V0.has(e.toLowerCase());
}
async function Uf(e, t, n, r, o, i) {
  for (let l = 0; l < n.length; l++) {
    let s = n[l],
      a = t[l];
    if (!a) continue;
    let u = e.find((h) => h.route.id === a.route.id),
      f = u != null && !mp(u, a) && (i && i[a.route.id]) !== void 0;
    if (jn(s) && (o || f)) {
      let h = r[l];
      Z(h, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await yp(s, h, o).then((p) => {
          p && (n[l] = p || n[l]);
        });
    }
  }
}
async function yp(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Re.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: Re.error, error: o };
      }
    return { type: Re.data, data: e.deferredData.data };
  }
}
function nc(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function jf(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function $a(e, t) {
  let n = typeof t == 'string' ? sn(t).search : t.search;
  if (e[e.length - 1].route.index && nc(n || '')) return e[e.length - 1];
  let r = ci(e);
  return r[r.length - 1];
}
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hl() {
  return (
    (hl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hl.apply(this, arguments)
  );
}
const ds = S.createContext(null),
  rc = S.createContext(null),
  rr = S.createContext(null),
  hs = S.createContext(null),
  an = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  wp = S.createContext(null);
function l1(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Zr() || Z(!1);
  let { basename: r, navigator: o } = S.useContext(rr),
    { hash: i, pathname: l, search: s } = oc(e, { relative: n }),
    a = l;
  return r !== '/' && (a = l === '/' ? r : Xt([r, l])), o.createHref({ pathname: a, search: s, hash: i });
}
function Zr() {
  return S.useContext(hs) != null;
}
function Dn() {
  return Zr() || Z(!1), S.useContext(hs).location;
}
function Sp(e) {
  S.useContext(rr).static || S.useLayoutEffect(e);
}
function Ep() {
  let { isDataRoute: e } = S.useContext(an);
  return e ? S1() : s1();
}
function s1() {
  Zr() || Z(!1);
  let e = S.useContext(ds),
    { basename: t, navigator: n } = S.useContext(rr),
    { matches: r } = S.useContext(an),
    { pathname: o } = Dn(),
    i = JSON.stringify(ci(r).map((a) => a.pathnameBase)),
    l = S.useRef(!1);
  return (
    Sp(() => {
      l.current = !0;
    }),
    S.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof a == 'number') {
          n.go(a);
          return;
        }
        let f = fs(a, JSON.parse(i), o, u.relative === 'path');
        e == null && t !== '/' && (f.pathname = f.pathname === '/' ? t : Xt([t, f.pathname])),
          (u.replace ? n.replace : n.push)(f, u.state, u);
      },
      [t, n, i, o, e]
    )
  );
}
const a1 = S.createContext(null);
function u1(e) {
  let t = S.useContext(an).outlet;
  return t && S.createElement(a1.Provider, { value: e }, t);
}
function oc(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext(an),
    { pathname: o } = Dn(),
    i = JSON.stringify(ci(r).map((l) => l.pathnameBase));
  return S.useMemo(() => fs(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function c1(e, t, n) {
  Zr() || Z(!1);
  let { navigator: r } = S.useContext(rr),
    { matches: o } = S.useContext(an),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : '/';
  i && i.route;
  let a = Dn(),
    u;
  if (t) {
    var f;
    let m = typeof t == 'string' ? sn(t) : t;
    s === '/' || ((f = m.pathname) != null && f.startsWith(s)) || Z(!1), (u = m);
  } else u = a;
  let h = u.pathname || '/',
    p = s === '/' ? h : h.slice(s.length) || '/',
    v = cr(e, { pathname: p }),
    g = m1(
      v &&
        v.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, l, m.params),
            pathname: Xt([s, r.encodeLocation ? r.encodeLocation(m.pathname).pathname : m.pathname]),
            pathnameBase:
              m.pathnameBase === '/'
                ? s
                : Xt([s, r.encodeLocation ? r.encodeLocation(m.pathnameBase).pathname : m.pathnameBase]),
          })
        ),
      o,
      n
    );
  return t && g
    ? S.createElement(
        hs.Provider,
        {
          value: {
            location: hl({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, u),
            navigationType: Ce.Pop,
          },
        },
        g
      )
    : g;
}
function f1() {
  let e = w1(),
    t = fp(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement('h2', null, 'Unexpected Application Error!'),
    S.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? S.createElement('pre', { style: o }, n) : null,
    i
  );
}
const d1 = S.createElement(f1, null);
class h1 extends S.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : { error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error
      ? S.createElement(
          an.Provider,
          { value: this.props.routeContext },
          S.createElement(wp.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function p1(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(ds);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(an.Provider, { value: t }, r)
  );
}
function m1(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let s = i.findIndex((a) => a.route.id && (l == null ? void 0 : l[a.route.id]));
    s >= 0 || Z(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
  }
  return i.reduceRight((s, a, u) => {
    let f = a.route.id ? (l == null ? void 0 : l[a.route.id]) : null,
      h = null;
    n && (h = a.route.errorElement || d1);
    let p = t.concat(i.slice(0, u + 1)),
      v = () => {
        let g;
        return (
          f
            ? (g = h)
            : a.route.Component
            ? (g = S.createElement(a.route.Component, null))
            : a.route.element
            ? (g = a.route.element)
            : (g = s),
          S.createElement(p1, {
            match: a,
            routeContext: { outlet: s, matches: p, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? S.createElement(h1, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: f,
          children: v(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var Ua;
(function (e) {
  (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate');
})(Ua || (Ua = {}));
var Bo;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId');
})(Bo || (Bo = {}));
function v1(e) {
  let t = S.useContext(ds);
  return t || Z(!1), t;
}
function g1(e) {
  let t = S.useContext(rc);
  return t || Z(!1), t;
}
function y1(e) {
  let t = S.useContext(an);
  return t || Z(!1), t;
}
function xp(e) {
  let t = y1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function w1() {
  var e;
  let t = S.useContext(wp),
    n = g1(Bo.UseRouteError),
    r = xp(Bo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function S1() {
  let { router: e } = v1(Ua.UseNavigateStable),
    t = xp(Bo.UseNavigateStable),
    n = S.useRef(!1);
  return (
    Sp(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current && (typeof o == 'number' ? e.navigate(o) : e.navigate(o, hl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function E1(e) {
  let { fallbackElement: t, router: n } = e,
    [r, o] = S.useState(n.state);
  S.useLayoutEffect(() => n.subscribe(o), [n, o]);
  let i = S.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (a) => n.navigate(a),
        push: (a, u, f) => n.navigate(a, { state: u, preventScrollReset: f == null ? void 0 : f.preventScrollReset }),
        replace: (a, u, f) =>
          n.navigate(a, { replace: !0, state: u, preventScrollReset: f == null ? void 0 : f.preventScrollReset }),
      }),
      [n]
    ),
    l = n.basename || '/',
    s = S.useMemo(() => ({ router: n, navigator: i, static: !1, basename: l }), [n, i, l]);
  return S.createElement(
    S.Fragment,
    null,
    S.createElement(
      ds.Provider,
      { value: s },
      S.createElement(
        rc.Provider,
        { value: r },
        S.createElement(
          C1,
          { basename: n.basename, location: n.state.location, navigationType: n.state.historyAction, navigator: i },
          n.state.initialized ? S.createElement(x1, { routes: n.routes, state: r }) : t
        )
      )
    ),
    null
  );
}
function x1(e) {
  let { routes: t, state: n } = e;
  return c1(t, void 0, n);
}
function pl(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Zr() || Z(!1);
  let { matches: i } = S.useContext(an),
    { pathname: l } = Dn(),
    s = Ep(),
    a = fs(
      t,
      ci(i).map((f) => f.pathnameBase),
      l,
      o === 'path'
    ),
    u = JSON.stringify(a);
  return S.useEffect(() => s(JSON.parse(u), { replace: n, state: r, relative: o }), [s, u, o, n, r]), null;
}
function Cp(e) {
  return u1(e.context);
}
function C1(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = Ce.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  Zr() && Z(!1);
  let s = t.replace(/^\/*/, '/'),
    a = S.useMemo(() => ({ basename: s, navigator: i, static: l }), [s, i, l]);
  typeof r == 'string' && (r = sn(r));
  let { pathname: u = '/', search: f = '', hash: h = '', state: p = null, key: v = 'default' } = r,
    g = S.useMemo(() => {
      let m = Jr(u, s);
      return m == null ? null : { location: { pathname: m, search: f, hash: h, state: p, key: v }, navigationType: o };
    }, [s, u, f, h, p, v, o]);
  return g == null
    ? null
    : S.createElement(rr.Provider, { value: a }, S.createElement(hs.Provider, { children: n, value: g }));
}
var Bf;
(function (e) {
  (e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error');
})(Bf || (Bf = {}));
new Promise(() => {});
function _1(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: S.createElement(e.Component), Component: void 0 }),
    e.ErrorBoundary && Object.assign(t, { errorElement: S.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zr() {
  return (
    (zr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zr.apply(this, arguments)
  );
}
function _p(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function k1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function R1(e, t) {
  return e.button === 0 && (!t || t === '_self') && !k1(e);
}
const P1 = ['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset'],
  T1 = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'children'];
function O1(e, t) {
  return X0({
    basename: t == null ? void 0 : t.basename,
    future: zr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: w0({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || M1(),
    routes: e,
    mapRouteProperties: _1,
  }).initialize();
}
function M1() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = zr({}, t, { errors: L1(t.errors) })), t;
}
function L1(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === 'RouteErrorResponse') n[r] = new tc(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      let i = new Error(o.message);
      (i.stack = ''), (n[r] = i);
    } else n[r] = o;
  return n;
}
const D1 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  b1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  F1 = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: s,
        target: a,
        to: u,
        preventScrollReset: f,
      } = t,
      h = _p(t, P1),
      { basename: p } = S.useContext(rr),
      v,
      g = !1;
    if (typeof u == 'string' && b1.test(u) && ((v = u), D1))
      try {
        let d = new URL(window.location.href),
          y = u.startsWith('//') ? new URL(d.protocol + u) : new URL(u),
          E = Jr(y.pathname, p);
        y.origin === d.origin && E != null ? (u = E + y.search + y.hash) : (g = !0);
      } catch {}
    let m = l1(u, { relative: o }),
      w = A1(u, { replace: l, state: s, target: a, preventScrollReset: f, relative: o });
    function c(d) {
      r && r(d), d.defaultPrevented || w(d);
    }
    return S.createElement('a', zr({}, h, { href: v || m, onClick: g || i ? r : c, ref: n, target: a }));
  }),
  ja = S.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: o = !1,
        className: i = '',
        end: l = !1,
        style: s,
        to: a,
        children: u,
      } = t,
      f = _p(t, T1),
      h = oc(a, { relative: f.relative }),
      p = Dn(),
      v = S.useContext(rc),
      { navigator: g } = S.useContext(rr),
      m = g.encodeLocation ? g.encodeLocation(h).pathname : h.pathname,
      w = p.pathname,
      c = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
    o || ((w = w.toLowerCase()), (c = c ? c.toLowerCase() : null), (m = m.toLowerCase()));
    let d = w === m || (!l && w.startsWith(m) && w.charAt(m.length) === '/'),
      y = c != null && (c === m || (!l && c.startsWith(m) && c.charAt(m.length) === '/')),
      E = d ? r : void 0,
      C;
    typeof i == 'function'
      ? (C = i({ isActive: d, isPending: y }))
      : (C = [i, d ? 'active' : null, y ? 'pending' : null].filter(Boolean).join(' '));
    let _ = typeof s == 'function' ? s({ isActive: d, isPending: y }) : s;
    return S.createElement(
      F1,
      zr({}, f, { 'aria-current': E, className: C, ref: n, style: _, to: a }),
      typeof u == 'function' ? u({ isActive: d, isPending: y }) : u
    );
  });
var Vf;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'), (e.UseSubmitImpl = 'useSubmitImpl'), (e.UseFetcher = 'useFetcher');
})(Vf || (Vf = {}));
var Hf;
(function (e) {
  (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(Hf || (Hf = {}));
function A1(e, t) {
  let { target: n, replace: r, state: o, preventScrollReset: i, relative: l } = t === void 0 ? {} : t,
    s = Ep(),
    a = Dn(),
    u = oc(e, { relative: l });
  return S.useCallback(
    (f) => {
      if (R1(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Yn(a) === Yn(u);
        s(e, { replace: h, state: o, preventScrollReset: i, relative: l });
      }
    },
    [a, s, u, r, o, n, e, i, l]
  );
}
function N1() {
  const { auth: e } = ec(['auth']),
    t = Dn();
  return e
    ? A(pl, { to: '/notice', state: { from: t }, replace: !0 })
    : A(pl, { to: '/login', state: { from: t }, replace: !0 });
}
var I1 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  z1 = Bh(function (e) {
    return I1.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91);
  });
function bn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return Zu(t);
}
var $1 = z1,
  U1 = function (t) {
    return t !== 'theme';
  },
  Wf = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? $1 : U1;
  },
  Qf = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (l) {
              return t.__emotion_forwardProp(l) && i(l);
            }
          : i;
    }
    return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o;
  },
  j1 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Ju(n, r, o),
      Xh(function () {
        return Gh(n, r, o);
      }),
      null
    );
  },
  B1 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      l;
    n !== void 0 && ((i = n.label), (l = n.target));
    var s = Qf(t, n, r),
      a = s || Wf(o),
      u = !a('as');
    return function () {
      var f = arguments,
        h = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if ((i !== void 0 && h.push('label:' + i + ';'), f[0] == null || f[0].raw === void 0)) h.push.apply(h, f);
      else {
        h.push(f[0][0]);
        for (var p = f.length, v = 1; v < p; v++) h.push(f[v], f[0][v]);
      }
      var g = Zh(function (m, w, c) {
        var d = (u && m.as) || o,
          y = '',
          E = [],
          C = m;
        if (m.theme == null) {
          C = {};
          for (var _ in m) C[_] = m[_];
          C.theme = S.useContext(ep);
        }
        typeof m.className == 'string'
          ? (y = qh(w.registered, E, m.className))
          : m.className != null && (y = m.className + ' ');
        var x = Zu(h.concat(E), w.registered, C);
        (y += w.key + '-' + x.name), l !== void 0 && (y += ' ' + l);
        var k = u && s === void 0 ? Wf(d) : a,
          L = {};
        for (var N in m) (u && N === 'as') || (k(N) && (L[N] = m[N]));
        return (
          (L.className = y),
          (L.ref = c),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(j1, { cache: w, serialized: x, isStringTag: typeof d == 'string' }),
            S.createElement(d, L)
          )
        );
      });
      return (
        (g.displayName =
          i !== void 0 ? i : 'Styled(' + (typeof o == 'string' ? o : o.displayName || o.name || 'Component') + ')'),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = o),
        (g.__emotion_styles = h),
        (g.__emotion_forwardProp = s),
        Object.defineProperty(g, 'toString', {
          value: function () {
            return '.' + l;
          },
        }),
        (g.withComponent = function (m, w) {
          return e(m, ba({}, n, w, { shouldForwardProp: Qf(g, w, !0) })).apply(void 0, h);
        }),
        g
      );
    };
  },
  V1 = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  we = B1.bind();
V1.forEach(function (e) {
  we[e] = we(e);
});
const H1 = we.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`,
  W1 = we.main`
  flex: 1;
  overflow-y: auto;
`,
  Q1 = we.header`
  height: 56px;
  background-color: red;
`;
function K1() {
  return A(Q1, { children: 'Public Header' });
}
function q1() {
  return He(H1, { children: [A(K1, {}), A(W1, { children: A(Cp, {}) })] });
}
const G1 = we.div`
  display: grid;
  grid-template-areas:
    'nav header'
    'nav children';
  grid-template-columns: auto 1fr;
  grid-auto-rows: auto 1fr;
  width: 100vw;
  height: 100vh;
`,
  Y1 = we.main`
  grid-area: children;
  overflow-y: auto;
  background-color: var(--page-bg-color);
`,
  Jt = {
    red_50: '#FFF6F6',
    red_100: '#FBE4E4',
    red_200: '#FAC5C5',
    red_300: '#FF9999',
    red_400: '#FF6F6F',
    red_500: '#FF4545',
    red_700: '#B53131',
    red_800: '#8C2626',
    red_900: '#6B1D1D',
    navy_0: '#ffffff',
    navy_30: '#F0F2F6',
    navy_50: '#E0E3EB',
    navy_100: '#C5CCDB',
    navy_200: '#B2BACD',
    navy_300: '#8B95AC',
    navy_400: '#6C758B',
    navy_500: '#525A6C',
    navy_900: '#303644',
    white_100: 'rgba(255, 255, 255, 1)',
    white_50: 'rgba(255, 255, 255, 0.50)',
    white_40: 'rgba(255, 255, 255, 0.40)',
    white_30: 'rgba(255, 255, 255, 0.30)',
    white_20: 'rgba(255, 255, 255, 0.20)',
    white_5: 'rgba(255, 255, 255, 0.05)',
    black_100: '#111',
    black_90: 'rgba(17, 17, 17, 0.90)',
    black_80: 'rgba(17, 17, 17, 0.80)',
    black_70: 'rgba(17, 17, 17, 0.70)',
    black_60: 'rgba(17, 17, 17, 0.60)',
    black_50: 'rgba(17, 17, 17, 0.50)',
    black_10: 'rgba(17, 17, 17, 0.10)',
    background: '#F9F9F9',
    line: '#E1E1E1',
    error: '#FF2222',
    success: '#38C08E',
    dimmed: 'rgba(17, 17, 17, 0.80)',
  };
function fi(e) {
  return e.split('-')[1];
}
function ic(e) {
  return e === 'y' ? 'height' : 'width';
}
function Qn(e) {
  return e.split('-')[0];
}
function di(e) {
  return ['top', 'bottom'].includes(Qn(e)) ? 'x' : 'y';
}
function Kf(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = r.x + r.width / 2 - o.width / 2,
    l = r.y + r.height / 2 - o.height / 2,
    s = di(t),
    a = ic(s),
    u = r[a] / 2 - o[a] / 2,
    f = s === 'x';
  let h;
  switch (Qn(t)) {
    case 'top':
      h = { x: i, y: r.y - o.height };
      break;
    case 'bottom':
      h = { x: i, y: r.y + r.height };
      break;
    case 'right':
      h = { x: r.x + r.width, y: l };
      break;
    case 'left':
      h = { x: r.x - o.width, y: l };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (fi(t)) {
    case 'start':
      h[s] -= u * (n && f ? -1 : 1);
      break;
    case 'end':
      h[s] += u * (n && f ? -1 : 1);
  }
  return h;
}
const X1 = async (e, t, n) => {
  const { placement: r = 'bottom', strategy: o = 'absolute', middleware: i = [], platform: l } = n,
    s = i.filter(Boolean),
    a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: h } = Kf(u, r, a),
    p = r,
    v = {},
    g = 0;
  for (let m = 0; m < s.length; m++) {
    const { name: w, fn: c } = s[m],
      {
        x: d,
        y,
        data: E,
        reset: C,
      } = await c({
        x: f,
        y: h,
        initialPlacement: r,
        placement: p,
        strategy: o,
        middlewareData: v,
        rects: u,
        platform: l,
        elements: { reference: e, floating: t },
      });
    (f = d ?? f),
      (h = y ?? h),
      (v = { ...v, [w]: { ...v[w], ...E } }),
      C &&
        g <= 50 &&
        (g++,
        typeof C == 'object' &&
          (C.placement && (p = C.placement),
          C.rects &&
            (u = C.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: o }) : C.rects),
          ({ x: f, y: h } = Kf(u, p, a))),
        (m = -1));
  }
  return { x: f, y: h, placement: p, strategy: o, middlewareData: v };
};
function hi(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function kp(e) {
  return typeof e != 'number'
    ? (function (t) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...t };
      })(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ml(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Rp(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: l, elements: s, strategy: a } = e,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: f = 'viewport',
      elementContext: h = 'floating',
      altBoundary: p = !1,
      padding: v = 0,
    } = hi(t, e),
    g = kp(v),
    m = s[p ? (h === 'floating' ? 'reference' : 'floating') : h],
    w = ml(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n
            ? m
            : m.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: a,
      })
    ),
    c = h === 'floating' ? { ...l.floating, x: r, y: o } : l.reference,
    d = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)),
    y = ((await (i.isElement == null ? void 0 : i.isElement(d))) &&
      (await (i.getScale == null ? void 0 : i.getScale(d)))) || { x: 1, y: 1 },
    E = ml(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: c, offsetParent: d, strategy: a })
        : c
    );
  return {
    top: (w.top - E.top + g.top) / y.y,
    bottom: (E.bottom - w.bottom + g.bottom) / y.y,
    left: (w.left - E.left + g.left) / y.x,
    right: (E.right - w.right + g.right) / y.x,
  };
}
const Ba = Math.min,
  J1 = Math.max;
function Va(e, t, n) {
  return J1(e, Ba(t, n));
}
const qf = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const { x: n, y: r, placement: o, rects: i, platform: l, elements: s } = t,
        { element: a, padding: u = 0 } = hi(e, t) || {};
      if (a == null) return {};
      const f = kp(u),
        h = { x: n, y: r },
        p = di(o),
        v = ic(p),
        g = await l.getDimensions(a),
        m = p === 'y',
        w = m ? 'top' : 'left',
        c = m ? 'bottom' : 'right',
        d = m ? 'clientHeight' : 'clientWidth',
        y = i.reference[v] + i.reference[p] - h[p] - i.floating[v],
        E = h[p] - i.reference[p],
        C = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(a));
      let _ = C ? C[d] : 0;
      (_ && (await (l.isElement == null ? void 0 : l.isElement(C)))) || (_ = s.floating[d] || i.floating[v]);
      const x = y / 2 - E / 2,
        k = _ / 2 - g[v] / 2 - 1,
        L = Ba(f[w], k),
        N = Ba(f[c], k),
        D = L,
        B = _ - g[v] - N,
        b = _ / 2 - g[v] / 2 + x,
        F = Va(D, b, B),
        U =
          fi(o) != null && b != F && i.reference[v] / 2 - (b < D ? L : N) - g[v] / 2 < 0 ? (b < D ? D - b : B - b) : 0;
      return { [p]: h[p] - U, data: { [p]: F, centerOffset: b - F + U } };
    },
  }),
  Z1 = ['top', 'right', 'bottom', 'left'];
Z1.reduce((e, t) => e.concat(t, t + '-start', t + '-end'), []);
const ew = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function vl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ew[t]);
}
function tw(e, t, n) {
  n === void 0 && (n = !1);
  const r = fi(e),
    o = di(e),
    i = ic(o);
  let l = o === 'x' ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top';
  return t.reference[i] > t.floating[i] && (l = vl(l)), { main: l, cross: vl(l) };
}
const nw = { start: 'end', end: 'start' };
function Js(e) {
  return e.replace(/start|end/g, (t) => nw[t]);
}
const rw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n;
          const { placement: r, middlewareData: o, rects: i, initialPlacement: l, platform: s, elements: a } = t,
            {
              mainAxis: u = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: p = 'bestFit',
              fallbackAxisSideDirection: v = 'none',
              flipAlignment: g = !0,
              ...m
            } = hi(e, t),
            w = Qn(r),
            c = Qn(l) === l,
            d = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)),
            y =
              h ||
              (c || !g
                ? [vl(l)]
                : (function (D) {
                    const B = vl(D);
                    return [Js(D), B, Js(B)];
                  })(l));
          h ||
            v === 'none' ||
            y.push(
              ...(function (D, B, b, F) {
                const U = fi(D);
                let z = (function (G, T, H) {
                  const K = ['left', 'right'],
                    I = ['right', 'left'],
                    Q = ['top', 'bottom'],
                    X = ['bottom', 'top'];
                  switch (G) {
                    case 'top':
                    case 'bottom':
                      return H ? (T ? I : K) : T ? K : I;
                    case 'left':
                    case 'right':
                      return T ? Q : X;
                    default:
                      return [];
                  }
                })(Qn(D), b === 'start', F);
                return U && ((z = z.map((G) => G + '-' + U)), B && (z = z.concat(z.map(Js)))), z;
              })(l, g, v, d)
            );
          const E = [l, ...y],
            C = await Rp(t, m),
            _ = [];
          let x = ((n = o.flip) == null ? void 0 : n.overflows) || [];
          if ((u && _.push(C[w]), f)) {
            const { main: D, cross: B } = tw(r, i, d);
            _.push(C[D], C[B]);
          }
          if (((x = [...x, { placement: r, overflows: _ }]), !_.every((D) => D <= 0))) {
            var k, L;
            const D = (((k = o.flip) == null ? void 0 : k.index) || 0) + 1,
              B = E[D];
            if (B) return { data: { index: D, overflows: x }, reset: { placement: B } };
            let b =
              (L = x.filter((F) => F.overflows[0] <= 0).sort((F, U) => F.overflows[1] - U.overflows[1])[0]) == null
                ? void 0
                : L.placement;
            if (!b)
              switch (p) {
                case 'bestFit': {
                  var N;
                  const F =
                    (N = x
                      .map((U) => [U.placement, U.overflows.filter((z) => z > 0).reduce((z, G) => z + G, 0)])
                      .sort((U, z) => U[1] - z[1])[0]) == null
                      ? void 0
                      : N[0];
                  F && (b = F);
                  break;
                }
                case 'initialPlacement':
                  b = l;
              }
            if (r !== b) return { reset: { placement: b } };
          }
          return {};
        },
      }
    );
  },
  ow = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          const { x: n, y: r } = t,
            o = await (async function (i, l) {
              const { placement: s, platform: a, elements: u } = i,
                f = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
                h = Qn(s),
                p = fi(s),
                v = di(s) === 'x',
                g = ['left', 'top'].includes(h) ? -1 : 1,
                m = f && v ? -1 : 1,
                w = hi(l, i);
              let {
                mainAxis: c,
                crossAxis: d,
                alignmentAxis: y,
              } = typeof w == 'number'
                ? { mainAxis: w, crossAxis: 0, alignmentAxis: null }
                : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
              return (
                p && typeof y == 'number' && (d = p === 'end' ? -1 * y : y),
                v ? { x: d * m, y: c * g } : { x: c * g, y: d * m }
              );
            })(t, e);
          return { x: n + o.x, y: r + o.y, data: o };
        },
      }
    );
  };
function iw(e) {
  return e === 'x' ? 'y' : 'x';
}
const lw = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'shift',
      options: e,
      async fn(t) {
        const { x: n, y: r, placement: o } = t,
          {
            mainAxis: i = !0,
            crossAxis: l = !1,
            limiter: s = {
              fn: (w) => {
                let { x: c, y: d } = w;
                return { x: c, y: d };
              },
            },
            ...a
          } = hi(e, t),
          u = { x: n, y: r },
          f = await Rp(t, a),
          h = di(Qn(o)),
          p = iw(h);
        let v = u[h],
          g = u[p];
        if (i) {
          const w = h === 'y' ? 'bottom' : 'right';
          v = Va(v + f[h === 'y' ? 'top' : 'left'], v, v - f[w]);
        }
        if (l) {
          const w = p === 'y' ? 'bottom' : 'right';
          g = Va(g + f[p === 'y' ? 'top' : 'left'], g, g - f[w]);
        }
        const m = s.fn({ ...t, [h]: v, [p]: g });
        return { ...m, data: { x: m.x - n, y: m.y - r } };
      },
    }
  );
};
function st(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wt(e) {
  return st(e).getComputedStyle(e);
}
function Pp(e) {
  return e instanceof st(e).Node;
}
function Tn(e) {
  return Pp(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function Ft(e) {
  return e instanceof HTMLElement || e instanceof st(e).HTMLElement;
}
function Gf(e) {
  return typeof ShadowRoot < 'u' && (e instanceof st(e).ShadowRoot || e instanceof ShadowRoot);
}
function Vo(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Wt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(o);
}
function sw(e) {
  return ['table', 'td', 'th'].includes(Tn(e));
}
function Ha(e) {
  const t = lc(),
    n = Wt(e);
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (!!n.containerType && n.containerType !== 'normal') ||
    (!t && !!n.backdropFilter && n.backdropFilter !== 'none') ||
    (!t && !!n.filter && n.filter !== 'none') ||
    ['transform', 'perspective', 'filter'].some((r) => (n.willChange || '').includes(r)) ||
    ['paint', 'layout', 'strict', 'content'].some((r) => (n.contain || '').includes(r))
  );
}
function lc() {
  return !(typeof CSS > 'u' || !CSS.supports) && CSS.supports('-webkit-backdrop-filter', 'none');
}
function ps(e) {
  return ['html', 'body', '#document'].includes(Tn(e));
}
const Wa = Math.min,
  Pr = Math.max,
  gl = Math.round,
  Ri = Math.floor,
  On = (e) => ({ x: e, y: e });
function Tp(e) {
  const t = Wt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Ft(e),
    i = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : r,
    s = gl(n) !== i || gl(r) !== l;
  return s && ((n = i), (r = l)), { width: n, height: r, $: s };
}
function Zt(e) {
  return e instanceof Element || e instanceof st(e).Element;
}
function sc(e) {
  return Zt(e) ? e : e.contextElement;
}
function Tr(e) {
  const t = sc(e);
  if (!Ft(t)) return On(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Tp(t);
  let l = (i ? gl(n.width) : n.width) / r,
    s = (i ? gl(n.height) : n.height) / o;
  return (l && Number.isFinite(l)) || (l = 1), (s && Number.isFinite(s)) || (s = 1), { x: l, y: s };
}
const aw = On(0);
function Op(e) {
  const t = st(e);
  return lc() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : aw;
}
function Xn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = sc(e);
  let l = On(1);
  t && (r ? Zt(r) && (l = Tr(r)) : (l = Tr(e)));
  const s = (function (p, v, g) {
    return v === void 0 && (v = !1), !(!g || (v && g !== st(p))) && v;
  })(i, n, r)
    ? Op(i)
    : On(0);
  let a = (o.left + s.x) / l.x,
    u = (o.top + s.y) / l.y,
    f = o.width / l.x,
    h = o.height / l.y;
  if (i) {
    const p = st(i),
      v = r && Zt(r) ? st(r) : r;
    let g = p.frameElement;
    for (; g && r && v !== p; ) {
      const m = Tr(g),
        w = g.getBoundingClientRect(),
        c = getComputedStyle(g),
        d = w.left + (g.clientLeft + parseFloat(c.paddingLeft)) * m.x,
        y = w.top + (g.clientTop + parseFloat(c.paddingTop)) * m.y;
      (a *= m.x), (u *= m.y), (f *= m.x), (h *= m.y), (a += d), (u += y), (g = st(g).frameElement);
    }
  }
  return ml({ width: f, height: h, x: a, y: u });
}
function ms(e) {
  return Zt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function en(e) {
  var t;
  return (t = (Pp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Mp(e) {
  return Xn(en(e)).left + ms(e).scrollLeft;
}
function $r(e) {
  if (Tn(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (Gf(e) && e.host) || en(e);
  return Gf(t) ? t.host : t;
}
function Lp(e) {
  const t = $r(e);
  return ps(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Ft(t) && Vo(t) ? t : Lp(t);
}
function Kn(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Lp(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = st(r);
  return o ? t.concat(i, i.visualViewport || [], Vo(r) ? r : []) : t.concat(r, Kn(r));
}
function Yf(e, t, n) {
  let r;
  if (t === 'viewport')
    r = (function (o, i) {
      const l = st(o),
        s = en(o),
        a = l.visualViewport;
      let u = s.clientWidth,
        f = s.clientHeight,
        h = 0,
        p = 0;
      if (a) {
        (u = a.width), (f = a.height);
        const v = lc();
        (!v || (v && i === 'fixed')) && ((h = a.offsetLeft), (p = a.offsetTop));
      }
      return { width: u, height: f, x: h, y: p };
    })(e, n);
  else if (t === 'document')
    r = (function (o) {
      const i = en(o),
        l = ms(o),
        s = o.ownerDocument.body,
        a = Pr(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth),
        u = Pr(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
      let f = -l.scrollLeft + Mp(o);
      const h = -l.scrollTop;
      return (
        Wt(s).direction === 'rtl' && (f += Pr(i.clientWidth, s.clientWidth) - a), { width: a, height: u, x: f, y: h }
      );
    })(en(e));
  else if (Zt(t))
    r = (function (o, i) {
      const l = Xn(o, !0, i === 'fixed'),
        s = l.top + o.clientTop,
        a = l.left + o.clientLeft,
        u = Ft(o) ? Tr(o) : On(1);
      return { width: o.clientWidth * u.x, height: o.clientHeight * u.y, x: a * u.x, y: s * u.y };
    })(t, n);
  else {
    const o = Op(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return ml(r);
}
function Dp(e, t) {
  const n = $r(e);
  return !(n === t || !Zt(n) || ps(n)) && (Wt(n).position === 'fixed' || Dp(n, t));
}
function uw(e, t, n) {
  const r = Ft(t),
    o = en(t),
    i = n === 'fixed',
    l = Xn(e, !0, i, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const a = On(0);
  if (r || (!r && !i))
    if (((Tn(t) !== 'body' || Vo(o)) && (s = ms(t)), Ft(t))) {
      const u = Xn(t, !0, i, t);
      (a.x = u.x + t.clientLeft), (a.y = u.y + t.clientTop);
    } else o && (a.x = Mp(o));
  return { x: l.left + s.scrollLeft - a.x, y: l.top + s.scrollTop - a.y, width: l.width, height: l.height };
}
function Xf(e, t) {
  return Ft(e) && Wt(e).position !== 'fixed' ? (t ? t(e) : e.offsetParent) : null;
}
function Jf(e, t) {
  const n = st(e);
  if (!Ft(e)) return n;
  let r = Xf(e, t);
  for (; r && sw(r) && Wt(r).position === 'static'; ) r = Xf(r, t);
  return r && (Tn(r) === 'html' || (Tn(r) === 'body' && Wt(r).position === 'static' && !Ha(r)))
    ? n
    : r ||
        (function (o) {
          let i = $r(o);
          for (; Ft(i) && !ps(i); ) {
            if (Ha(i)) return i;
            i = $r(i);
          }
          return null;
        })(e) ||
        n;
}
const bp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
    let { rect: t, offsetParent: n, strategy: r } = e;
    const o = Ft(n),
      i = en(n);
    if (n === i) return t;
    let l = { scrollLeft: 0, scrollTop: 0 },
      s = On(1);
    const a = On(0);
    if ((o || (!o && r !== 'fixed')) && ((Tn(n) !== 'body' || Vo(i)) && (l = ms(n)), Ft(n))) {
      const u = Xn(n);
      (s = Tr(n)), (a.x = u.x + n.clientLeft), (a.y = u.y + n.clientTop);
    }
    return {
      width: t.width * s.x,
      height: t.height * s.y,
      x: t.x * s.x - l.scrollLeft * s.x + a.x,
      y: t.y * s.y - l.scrollTop * s.y + a.y,
    };
  },
  getDocumentElement: en,
  getClippingRect: function (e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const i = [
        ...(n === 'clippingAncestors'
          ? (function (a, u) {
              const f = u.get(a);
              if (f) return f;
              let h = Kn(a).filter((m) => Zt(m) && Tn(m) !== 'body'),
                p = null;
              const v = Wt(a).position === 'fixed';
              let g = v ? $r(a) : a;
              for (; Zt(g) && !ps(g); ) {
                const m = Wt(g),
                  w = Ha(g);
                w || m.position !== 'fixed' || (p = null),
                  (
                    v
                      ? !w && !p
                      : (!w && m.position === 'static' && p && ['absolute', 'fixed'].includes(p.position)) ||
                        (Vo(g) && !w && Dp(a, g))
                  )
                    ? (h = h.filter((c) => c !== g))
                    : (p = m),
                  (g = $r(g));
              }
              return u.set(a, h), h;
            })(t, this._c)
          : [].concat(n)),
        r,
      ],
      l = i[0],
      s = i.reduce((a, u) => {
        const f = Yf(t, u, o);
        return (
          (a.top = Pr(f.top, a.top)),
          (a.right = Wa(f.right, a.right)),
          (a.bottom = Wa(f.bottom, a.bottom)),
          (a.left = Pr(f.left, a.left)),
          a
        );
      }, Yf(t, l, o));
    return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
  },
  getOffsetParent: Jf,
  getElementRects: async function (e) {
    let { reference: t, floating: n, strategy: r } = e;
    const o = this.getOffsetParent || Jf,
      i = this.getDimensions;
    return { reference: uw(t, await o(n), r), floating: { x: 0, y: 0, ...(await i(n)) } };
  },
  getClientRects: function (e) {
    return Array.from(e.getClientRects());
  },
  getDimensions: function (e) {
    return Tp(e);
  },
  getScale: Tr,
  isElement: Zt,
  isRTL: function (e) {
    return getComputedStyle(e).direction === 'rtl';
  },
};
function cw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == 'function',
      layoutShift: s = typeof IntersectionObserver == 'function',
      animationFrame: a = !1,
    } = r,
    u = sc(e),
    f = o || i ? [...(u ? Kn(u) : []), ...Kn(t)] : [];
  f.forEach((w) => {
    o && w.addEventListener('scroll', n, { passive: !0 }), i && w.addEventListener('resize', n);
  });
  const h =
    u && s
      ? (function (w, c) {
          let d,
            y = null;
          const E = en(w);
          function C() {
            clearTimeout(d), y && y.disconnect(), (y = null);
          }
          return (
            (function _(x, k) {
              x === void 0 && (x = !1), k === void 0 && (k = 1), C();
              const { left: L, top: N, width: D, height: B } = w.getBoundingClientRect();
              if ((x || c(), !D || !B)) return;
              const b = {
                rootMargin:
                  -Ri(N) +
                  'px ' +
                  -Ri(E.clientWidth - (L + D)) +
                  'px ' +
                  -Ri(E.clientHeight - (N + B)) +
                  'px ' +
                  -Ri(L) +
                  'px',
                threshold: Pr(0, Wa(1, k)) || 1,
              };
              let F = !0;
              function U(z) {
                const G = z[0].intersectionRatio;
                if (G !== k) {
                  if (!F) return _();
                  G
                    ? _(!1, G)
                    : (d = setTimeout(() => {
                        _(!1, 1e-7);
                      }, 100));
                }
                F = !1;
              }
              try {
                y = new IntersectionObserver(U, { ...b, root: E.ownerDocument });
              } catch {
                y = new IntersectionObserver(U, b);
              }
              y.observe(w);
            })(!0),
            C
          );
        })(u, n)
      : null;
  let p,
    v = -1,
    g = null;
  l &&
    ((g = new ResizeObserver((w) => {
      let [c] = w;
      c &&
        c.target === u &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(v),
        (v = requestAnimationFrame(() => {
          g && g.observe(t);
        }))),
        n();
    })),
    u && !a && g.observe(u),
    g.observe(t));
  let m = a ? Xn(e) : null;
  return (
    a &&
      (function w() {
        const c = Xn(e);
        !m || (c.x === m.x && c.y === m.y && c.width === m.width && c.height === m.height) || n(),
          (m = c),
          (p = requestAnimationFrame(w));
      })(),
    n(),
    () => {
      f.forEach((w) => {
        o && w.removeEventListener('scroll', n), i && w.removeEventListener('resize', n);
      }),
        h && h(),
        g && g.disconnect(),
        (g = null),
        a && cancelAnimationFrame(p);
    }
  );
}
const fw = (e, t, n) => {
  const r = new Map(),
    o = { platform: bp, ...n },
    i = { ...o.platform, _c: r };
  return X1(e, t, { ...o, platform: i });
};
var Fp = { exports: {} },
  pt = {},
  Ap = { exports: {} },
  Np = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, H) {
    var K = T.length;
    T.push(H);
    e: for (; 0 < K; ) {
      var I = (K - 1) >>> 1,
        Q = T[I];
      if (0 < o(Q, H)) (T[I] = H), (T[K] = Q), (K = I);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var H = T[0],
      K = T.pop();
    if (K !== H) {
      T[0] = K;
      e: for (var I = 0, Q = T.length, X = Q >>> 1; I < X; ) {
        var te = 2 * (I + 1) - 1,
          de = T[te],
          ce = te + 1,
          Fe = T[ce];
        if (0 > o(de, K))
          ce < Q && 0 > o(Fe, de) ? ((T[I] = Fe), (T[ce] = K), (I = ce)) : ((T[I] = de), (T[te] = K), (I = te));
        else if (ce < Q && 0 > o(Fe, K)) (T[I] = Fe), (T[ce] = K), (I = ce);
        else break e;
      }
    }
    return H;
  }
  function o(T, H) {
    var K = T.sortIndex - H.sortIndex;
    return K !== 0 ? K : T.id - H.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    f = 1,
    h = null,
    p = 3,
    v = !1,
    g = !1,
    m = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    c = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(T) {
    for (var H = n(u); H !== null; ) {
      if (H.callback === null) r(u);
      else if (H.startTime <= T) r(u), (H.sortIndex = H.expirationTime), t(a, H);
      else break;
      H = n(u);
    }
  }
  function E(T) {
    if (((m = !1), y(T), !g))
      if (n(a) !== null) (g = !0), z(C);
      else {
        var H = n(u);
        H !== null && G(E, H.startTime - T);
      }
  }
  function C(T, H) {
    (g = !1), m && ((m = !1), c(k), (k = -1)), (v = !0);
    var K = p;
    try {
      for (y(H), h = n(a); h !== null && (!(h.expirationTime > H) || (T && !D())); ) {
        var I = h.callback;
        if (typeof I == 'function') {
          (h.callback = null), (p = h.priorityLevel);
          var Q = I(h.expirationTime <= H);
          (H = e.unstable_now()), typeof Q == 'function' ? (h.callback = Q) : h === n(a) && r(a), y(H);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var X = !0;
      else {
        var te = n(u);
        te !== null && G(E, te.startTime - H), (X = !1);
      }
      return X;
    } finally {
      (h = null), (p = K), (v = !1);
    }
  }
  var _ = !1,
    x = null,
    k = -1,
    L = 5,
    N = -1;
  function D() {
    return !(e.unstable_now() - N < L);
  }
  function B() {
    if (x !== null) {
      var T = e.unstable_now();
      N = T;
      var H = !0;
      try {
        H = x(!0, T);
      } finally {
        H ? b() : ((_ = !1), (x = null));
      }
    } else _ = !1;
  }
  var b;
  if (typeof d == 'function')
    b = function () {
      d(B);
    };
  else if (typeof MessageChannel < 'u') {
    var F = new MessageChannel(),
      U = F.port2;
    (F.port1.onmessage = B),
      (b = function () {
        U.postMessage(null);
      });
  } else
    b = function () {
      w(B, 0);
    };
  function z(T) {
    (x = T), _ || ((_ = !0), b());
  }
  function G(T, H) {
    k = w(function () {
      T(e.unstable_now());
    }, H);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), z(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (L = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = p;
      }
      var K = p;
      p = H;
      try {
        return T();
      } finally {
        p = K;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, H) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var K = p;
      p = T;
      try {
        return H();
      } finally {
        p = K;
      }
    }),
    (e.unstable_scheduleCallback = function (T, H, K) {
      var I = e.unstable_now();
      switch (
        (typeof K == 'object' && K !== null
          ? ((K = K.delay), (K = typeof K == 'number' && 0 < K ? I + K : I))
          : (K = I),
        T)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = K + Q),
        (T = { id: f++, callback: H, priorityLevel: T, startTime: K, expirationTime: Q, sortIndex: -1 }),
        K > I
          ? ((T.sortIndex = K), t(u, T), n(a) === null && T === n(u) && (m ? (c(k), (k = -1)) : (m = !0), G(E, K - I)))
          : ((T.sortIndex = Q), t(a, T), g || v || ((g = !0), z(C))),
        T
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (T) {
      var H = p;
      return function () {
        var K = p;
        p = H;
        try {
          return T.apply(this, arguments);
        } finally {
          p = K;
        }
      };
    });
})(Np);
Ap.exports = Np;
var dw = Ap.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip = S,
  dt = dw;
function M(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var zp = new Set(),
  Ho = {};
function or(e, t) {
  Ur(e, t), Ur(e + 'Capture', t);
}
function Ur(e, t) {
  for (Ho[e] = t, e = 0; e < t.length; e++) zp.add(t[e]);
}
var nn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  Qa = Object.prototype.hasOwnProperty,
  hw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Zf = {},
  ed = {};
function pw(e) {
  return Qa.call(ed, e) ? !0 : Qa.call(Zf, e) ? !1 : hw.test(e) ? (ed[e] = !0) : ((Zf[e] = !0), !1);
}
function mw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function vw(e, t, n, r) {
  if (t === null || typeof t > 'u' || mw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ye(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ze = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ze[e] = new Ye(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ze[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ze[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  ze[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ze[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ze[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ze[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ze[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ze[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ac = /[\-:]([a-z])/g;
function uc(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ac, uc);
    ze[t] = new Ye(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(ac, uc);
  ze[t] = new Ye(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ac, uc);
  ze[t] = new Ye(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ze[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new Ye('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ze[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cc(e, t, n, r) {
  var o = ze.hasOwnProperty(t) ? ze[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (vw(t, n, o, r) && (n = null),
    r || o === null
      ? pw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var un = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pi = Symbol.for('react.element'),
  dr = Symbol.for('react.portal'),
  hr = Symbol.for('react.fragment'),
  fc = Symbol.for('react.strict_mode'),
  Ka = Symbol.for('react.profiler'),
  $p = Symbol.for('react.provider'),
  Up = Symbol.for('react.context'),
  dc = Symbol.for('react.forward_ref'),
  qa = Symbol.for('react.suspense'),
  Ga = Symbol.for('react.suspense_list'),
  hc = Symbol.for('react.memo'),
  dn = Symbol.for('react.lazy'),
  jp = Symbol.for('react.offscreen'),
  td = Symbol.iterator;
function ao(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (td && e[td]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Se = Object.assign,
  Zs;
function go(e) {
  if (Zs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zs = (t && t[1]) || '';
    }
  return (
    `
` +
    Zs +
    e
  );
}
var ea = !1;
function ta(e, t) {
  if (!e || ea) return '';
  ea = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(' at new ', ' at ');
                return e.displayName && a.includes('<anonymous>') && (a = a.replace('<anonymous>', e.displayName)), a;
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (ea = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? go(e) : '';
}
function gw(e) {
  switch (e.tag) {
    case 5:
      return go(e.type);
    case 16:
      return go('Lazy');
    case 13:
      return go('Suspense');
    case 19:
      return go('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = ta(e.type, !1)), e;
    case 11:
      return (e = ta(e.type.render, !1)), e;
    case 1:
      return (e = ta(e.type, !0)), e;
    default:
      return '';
  }
}
function Ya(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case hr:
      return 'Fragment';
    case dr:
      return 'Portal';
    case Ka:
      return 'Profiler';
    case fc:
      return 'StrictMode';
    case qa:
      return 'Suspense';
    case Ga:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Up:
        return (e.displayName || 'Context') + '.Consumer';
      case $p:
        return (e._context.displayName || 'Context') + '.Provider';
      case dc:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case hc:
        return (t = e.displayName || null), t !== null ? t : Ya(e.type) || 'Memo';
      case dn:
        (t = e._payload), (e = e._init);
        try {
          return Ya(e(t));
        } catch {}
    }
  return null;
}
function yw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Ya(t);
    case 8:
      return t === fc ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Mn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Bp(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function ww(e) {
  var t = Bp(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = '' + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ti(e) {
  e._valueTracker || (e._valueTracker = ww(e));
}
function Vp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = Bp(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function yl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xa(e, t) {
  var n = t.checked;
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function nd(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Hp(e, t) {
  (t = t.checked), t != null && cc(e, 'checked', t, !1);
}
function Ja(e, t) {
  Hp(e, t);
  var n = Mn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? Za(e, t.type, n) : t.hasOwnProperty('defaultValue') && Za(e, t.type, Mn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function rd(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Za(e, t, n) {
  (t !== 'number' || yl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var yo = Array.isArray;
function Or(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Mn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function eu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return Se({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function od(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (yo(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Mn(n) };
}
function Wp(e, t) {
  var n = Mn(t.value),
    r = Mn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function id(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Qp(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function tu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Qp(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Oi,
  Kp = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Oi = Oi || document.createElement('div'),
          Oi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Oi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Sw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(xo).forEach(function (e) {
  Sw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xo[t] = xo[e]);
  });
});
function qp(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (xo.hasOwnProperty(e) && xo[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Gp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = qp(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ew = Se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function nu(e, t) {
  if (t) {
    if (Ew[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(M(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(M(62));
  }
}
function ru(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ou = null;
function pc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var iu = null,
  Mr = null,
  Lr = null;
function ld(e) {
  if ((e = vi(e))) {
    if (typeof iu != 'function') throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Ss(t)), iu(e.stateNode, e.type, t));
  }
}
function Yp(e) {
  Mr ? (Lr ? Lr.push(e) : (Lr = [e])) : (Mr = e);
}
function Xp() {
  if (Mr) {
    var e = Mr,
      t = Lr;
    if (((Lr = Mr = null), ld(e), t)) for (e = 0; e < t.length; e++) ld(t[e]);
  }
}
function Jp(e, t) {
  return e(t);
}
function Zp() {}
var na = !1;
function em(e, t, n) {
  if (na) return e(t, n);
  na = !0;
  try {
    return Jp(e, t, n);
  } finally {
    (na = !1), (Mr !== null || Lr !== null) && (Zp(), Xp());
  }
}
function Qo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ss(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(M(231, t, typeof n));
  return n;
}
var lu = !1;
if (nn)
  try {
    var uo = {};
    Object.defineProperty(uo, 'passive', {
      get: function () {
        lu = !0;
      },
    }),
      window.addEventListener('test', uo, uo),
      window.removeEventListener('test', uo, uo);
  } catch {
    lu = !1;
  }
function xw(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Co = !1,
  wl = null,
  Sl = !1,
  su = null,
  Cw = {
    onError: function (e) {
      (Co = !0), (wl = e);
    },
  };
function _w(e, t, n, r, o, i, l, s, a) {
  (Co = !1), (wl = null), xw.apply(Cw, arguments);
}
function kw(e, t, n, r, o, i, l, s, a) {
  if ((_w.apply(this, arguments), Co)) {
    if (Co) {
      var u = wl;
      (Co = !1), (wl = null);
    } else throw Error(M(198));
    Sl || ((Sl = !0), (su = u));
  }
}
function ir(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function tm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function sd(e) {
  if (ir(e) !== e) throw Error(M(188));
}
function Rw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ir(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return sd(o), e;
        if (i === r) return sd(o), t;
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function nm(e) {
  return (e = Rw(e)), e !== null ? rm(e) : null;
}
function rm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = rm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var om = dt.unstable_scheduleCallback,
  ad = dt.unstable_cancelCallback,
  Pw = dt.unstable_shouldYield,
  Tw = dt.unstable_requestPaint,
  xe = dt.unstable_now,
  Ow = dt.unstable_getCurrentPriorityLevel,
  mc = dt.unstable_ImmediatePriority,
  im = dt.unstable_UserBlockingPriority,
  El = dt.unstable_NormalPriority,
  Mw = dt.unstable_LowPriority,
  lm = dt.unstable_IdlePriority,
  vs = null,
  Vt = null;
function Lw(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == 'function')
    try {
      Vt.onCommitFiberRoot(vs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : Fw,
  Dw = Math.log,
  bw = Math.LN2;
function Fw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Dw(e) / bw) | 0)) | 0;
}
var Mi = 64,
  Li = 4194304;
function wo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function xl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = wo(s)) : ((i &= l), i !== 0 && (r = wo(i)));
  } else (l = n & ~o), l !== 0 ? (r = wo(l)) : i !== 0 && (r = wo(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Aw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Nw(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - Dt(i),
      s = 1 << l,
      a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = Aw(s, t)) : a <= t && (e.expiredLanes |= s), (i &= ~s);
  }
}
function au(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function sm() {
  var e = Mi;
  return (Mi <<= 1), !(Mi & 4194240) && (Mi = 64), e;
}
function ra(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dt(t)),
    (e[t] = n);
}
function Iw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Dt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function vc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var se = 0;
function am(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var um,
  gc,
  cm,
  fm,
  dm,
  uu = !1,
  Di = [],
  wn = null,
  Sn = null,
  En = null,
  Ko = new Map(),
  qo = new Map(),
  mn = [],
  zw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function ud(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      wn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Sn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      En = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Ko.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      qo.delete(t.pointerId);
  }
}
function co(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = vi(t)), t !== null && gc(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function $w(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (wn = co(wn, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Sn = co(Sn, e, t, n, r, o)), !0;
    case 'mouseover':
      return (En = co(En, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Ko.set(i, co(Ko.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), qo.set(i, co(qo.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function hm(e) {
  var t = Bn(e.target);
  if (t !== null) {
    var n = ir(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = tm(n)), t !== null)) {
          (e.blockedOn = t),
            dm(e.priority, function () {
              cm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ji(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = cu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ou = r), n.target.dispatchEvent(r), (ou = null);
    } else return (t = vi(n)), t !== null && gc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function cd(e, t, n) {
  Ji(e) && n.delete(t);
}
function Uw() {
  (uu = !1),
    wn !== null && Ji(wn) && (wn = null),
    Sn !== null && Ji(Sn) && (Sn = null),
    En !== null && Ji(En) && (En = null),
    Ko.forEach(cd),
    qo.forEach(cd);
}
function fo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), uu || ((uu = !0), dt.unstable_scheduleCallback(dt.unstable_NormalPriority, Uw)));
}
function Go(e) {
  function t(o) {
    return fo(o, e);
  }
  if (0 < Di.length) {
    fo(Di[0], e);
    for (var n = 1; n < Di.length; n++) {
      var r = Di[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    wn !== null && fo(wn, e), Sn !== null && fo(Sn, e), En !== null && fo(En, e), Ko.forEach(t), qo.forEach(t), n = 0;
    n < mn.length;
    n++
  )
    (r = mn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mn.length && ((n = mn[0]), n.blockedOn === null); ) hm(n), n.blockedOn === null && mn.shift();
}
var Dr = un.ReactCurrentBatchConfig,
  Cl = !0;
function jw(e, t, n, r) {
  var o = se,
    i = Dr.transition;
  Dr.transition = null;
  try {
    (se = 1), yc(e, t, n, r);
  } finally {
    (se = o), (Dr.transition = i);
  }
}
function Bw(e, t, n, r) {
  var o = se,
    i = Dr.transition;
  Dr.transition = null;
  try {
    (se = 4), yc(e, t, n, r);
  } finally {
    (se = o), (Dr.transition = i);
  }
}
function yc(e, t, n, r) {
  if (Cl) {
    var o = cu(e, t, n, r);
    if (o === null) ha(e, t, r, _l, n), ud(e, r);
    else if ($w(o, e, t, n, r)) r.stopPropagation();
    else if ((ud(e, r), t & 4 && -1 < zw.indexOf(e))) {
      for (; o !== null; ) {
        var i = vi(o);
        if ((i !== null && um(i), (i = cu(e, t, n, r)), i === null && ha(e, t, r, _l, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ha(e, t, r, null, n);
  }
}
var _l = null;
function cu(e, t, n, r) {
  if (((_l = null), (e = pc(r)), (e = Bn(e)), e !== null))
    if (((t = ir(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = tm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (_l = e), null;
}
function pm(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Ow()) {
        case mc:
          return 1;
        case im:
          return 4;
        case El:
        case Mw:
          return 16;
        case lm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null,
  wc = null,
  Zi = null;
function mm() {
  if (Zi) return Zi;
  var e,
    t = wc,
    n = t.length,
    r,
    o = 'value' in gn ? gn.value : gn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Zi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function el(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function bi() {
  return !0;
}
function fd() {
  return !1;
}
function mt(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bi : fd),
      (this.isPropagationStopped = fd),
      this
    );
  }
  return (
    Se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = bi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = bi));
      },
      persist: function () {},
      isPersistent: bi,
    }),
    t
  );
}
var eo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Sc = mt(eo),
  mi = Se({}, eo, { view: 0, detail: 0 }),
  Vw = mt(mi),
  oa,
  ia,
  ho,
  gs = Se({}, mi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ec,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ho &&
            (ho && e.type === 'mousemove'
              ? ((oa = e.screenX - ho.screenX), (ia = e.screenY - ho.screenY))
              : (ia = oa = 0),
            (ho = e)),
          oa);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ia;
    },
  }),
  dd = mt(gs),
  Hw = Se({}, gs, { dataTransfer: 0 }),
  Ww = mt(Hw),
  Qw = Se({}, mi, { relatedTarget: 0 }),
  la = mt(Qw),
  Kw = Se({}, eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qw = mt(Kw),
  Gw = Se({}, eo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Yw = mt(Gw),
  Xw = Se({}, eo, { data: 0 }),
  hd = mt(Xw),
  Jw = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Zw = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  eS = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function tS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = eS[e]) ? !!t[e] : !1;
}
function Ec() {
  return tS;
}
var nS = Se({}, mi, {
    key: function (e) {
      if (e.key) {
        var t = Jw[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = el(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Zw[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ec,
    charCode: function (e) {
      return e.type === 'keypress' ? el(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? el(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  rS = mt(nS),
  oS = Se({}, gs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  pd = mt(oS),
  iS = Se({}, mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ec,
  }),
  lS = mt(iS),
  sS = Se({}, eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  aS = mt(sS),
  uS = Se({}, gs, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  cS = mt(uS),
  fS = [9, 13, 27, 32],
  xc = nn && 'CompositionEvent' in window,
  _o = null;
nn && 'documentMode' in document && (_o = document.documentMode);
var dS = nn && 'TextEvent' in window && !_o,
  vm = nn && (!xc || (_o && 8 < _o && 11 >= _o)),
  md = String.fromCharCode(32),
  vd = !1;
function gm(e, t) {
  switch (e) {
    case 'keyup':
      return fS.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function ym(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var pr = !1;
function hS(e, t) {
  switch (e) {
    case 'compositionend':
      return ym(t);
    case 'keypress':
      return t.which !== 32 ? null : ((vd = !0), md);
    case 'textInput':
      return (e = t.data), e === md && vd ? null : e;
    default:
      return null;
  }
}
function pS(e, t) {
  if (pr) return e === 'compositionend' || (!xc && gm(e, t)) ? ((e = mm()), (Zi = wc = gn = null), (pr = !1), e) : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return vm && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var mS = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function gd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!mS[e.type] : t === 'textarea';
}
function wm(e, t, n, r) {
  Yp(r),
    (t = kl(t, 'onChange')),
    0 < t.length && ((n = new Sc('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var ko = null,
  Yo = null;
function vS(e) {
  Mm(e, 0);
}
function ys(e) {
  var t = gr(e);
  if (Vp(t)) return e;
}
function gS(e, t) {
  if (e === 'change') return t;
}
var Sm = !1;
if (nn) {
  var sa;
  if (nn) {
    var aa = 'oninput' in document;
    if (!aa) {
      var yd = document.createElement('div');
      yd.setAttribute('oninput', 'return;'), (aa = typeof yd.oninput == 'function');
    }
    sa = aa;
  } else sa = !1;
  Sm = sa && (!document.documentMode || 9 < document.documentMode);
}
function wd() {
  ko && (ko.detachEvent('onpropertychange', Em), (Yo = ko = null));
}
function Em(e) {
  if (e.propertyName === 'value' && ys(Yo)) {
    var t = [];
    wm(t, Yo, e, pc(e)), em(vS, t);
  }
}
function yS(e, t, n) {
  e === 'focusin' ? (wd(), (ko = t), (Yo = n), ko.attachEvent('onpropertychange', Em)) : e === 'focusout' && wd();
}
function wS(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ys(Yo);
}
function SS(e, t) {
  if (e === 'click') return ys(t);
}
function ES(e, t) {
  if (e === 'input' || e === 'change') return ys(t);
}
function xS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var At = typeof Object.is == 'function' ? Object.is : xS;
function Xo(e, t) {
  if (At(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Qa.call(t, o) || !At(e[o], t[o])) return !1;
  }
  return !0;
}
function Sd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ed(e, t) {
  var n = Sd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Sd(n);
  }
}
function xm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? xm(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Cm() {
  for (var e = window, t = yl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = yl(e.document);
  }
  return t;
}
function Cc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function CS(e) {
  var t = Cm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && xm(n.ownerDocument.documentElement, n)) {
    if (r !== null && Cc(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ed(n, i));
        var l = Ed(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var _S = nn && 'documentMode' in document && 11 >= document.documentMode,
  mr = null,
  fu = null,
  Ro = null,
  du = !1;
function xd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  du ||
    mr == null ||
    mr !== yl(r) ||
    ((r = mr),
    'selectionStart' in r && Cc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ro && Xo(Ro, r)) ||
      ((Ro = r),
      (r = kl(fu, 'onSelect')),
      0 < r.length &&
        ((t = new Sc('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = mr))));
}
function Fi(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var vr = {
    animationend: Fi('Animation', 'AnimationEnd'),
    animationiteration: Fi('Animation', 'AnimationIteration'),
    animationstart: Fi('Animation', 'AnimationStart'),
    transitionend: Fi('Transition', 'TransitionEnd'),
  },
  ua = {},
  _m = {};
nn &&
  ((_m = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete vr.animationend.animation, delete vr.animationiteration.animation, delete vr.animationstart.animation),
  'TransitionEvent' in window || delete vr.transitionend.transition);
function ws(e) {
  if (ua[e]) return ua[e];
  if (!vr[e]) return e;
  var t = vr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _m) return (ua[e] = t[n]);
  return e;
}
var km = ws('animationend'),
  Rm = ws('animationiteration'),
  Pm = ws('animationstart'),
  Tm = ws('transitionend'),
  Om = new Map(),
  Cd =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Fn(e, t) {
  Om.set(e, t), or(t, [e]);
}
for (var ca = 0; ca < Cd.length; ca++) {
  var fa = Cd[ca],
    kS = fa.toLowerCase(),
    RS = fa[0].toUpperCase() + fa.slice(1);
  Fn(kS, 'on' + RS);
}
Fn(km, 'onAnimationEnd');
Fn(Rm, 'onAnimationIteration');
Fn(Pm, 'onAnimationStart');
Fn('dblclick', 'onDoubleClick');
Fn('focusin', 'onFocus');
Fn('focusout', 'onBlur');
Fn(Tm, 'onTransitionEnd');
Ur('onMouseEnter', ['mouseout', 'mouseover']);
Ur('onMouseLeave', ['mouseout', 'mouseover']);
Ur('onPointerEnter', ['pointerout', 'pointerover']);
Ur('onPointerLeave', ['pointerout', 'pointerover']);
or('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
or('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
or('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
or('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
or('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
or('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var So =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  PS = new Set('cancel close invalid load scroll toggle'.split(' ').concat(So));
function _d(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), kw(r, t, void 0, e), (e.currentTarget = null);
}
function Mm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          _d(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]), (a = s.instance), (u = s.currentTarget), (s = s.listener), a !== i && o.isPropagationStopped())
          )
            break e;
          _d(o, s, u), (i = a);
        }
    }
  }
  if (Sl) throw ((e = su), (Sl = !1), (su = null), e);
}
function he(e, t) {
  var n = t[gu];
  n === void 0 && (n = t[gu] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Lm(t, e, 2, !1), n.add(r));
}
function da(e, t, n) {
  var r = 0;
  t && (r |= 4), Lm(n, e, r, t);
}
var Ai = '_reactListening' + Math.random().toString(36).slice(2);
function Jo(e) {
  if (!e[Ai]) {
    (e[Ai] = !0),
      zp.forEach(function (n) {
        n !== 'selectionchange' && (PS.has(n) || da(n, !1, e), da(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ai] || ((t[Ai] = !0), da('selectionchange', !1, t));
  }
}
function Lm(e, t, n, r) {
  switch (pm(t)) {
    case 1:
      var o = jw;
      break;
    case 4:
      o = Bw;
      break;
    default:
      o = yc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !lu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ha(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo), a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Bn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  em(function () {
    var u = i,
      f = pc(n),
      h = [];
    e: {
      var p = Om.get(e);
      if (p !== void 0) {
        var v = Sc,
          g = e;
        switch (e) {
          case 'keypress':
            if (el(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = rS;
            break;
          case 'focusin':
            (g = 'focus'), (v = la);
            break;
          case 'focusout':
            (g = 'blur'), (v = la);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = la;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = dd;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = Ww;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = lS;
            break;
          case km:
          case Rm:
          case Pm:
            v = qw;
            break;
          case Tm:
            v = aS;
            break;
          case 'scroll':
            v = Vw;
            break;
          case 'wheel':
            v = cS;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = Yw;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = pd;
        }
        var m = (t & 4) !== 0,
          w = !m && e === 'scroll',
          c = m ? (p !== null ? p + 'Capture' : null) : p;
        m = [];
        for (var d = u, y; d !== null; ) {
          y = d;
          var E = y.stateNode;
          if (
            (y.tag === 5 && E !== null && ((y = E), c !== null && ((E = Qo(d, c)), E != null && m.push(Zo(d, E, y)))),
            w)
          )
            break;
          d = d.return;
        }
        0 < m.length && ((p = new v(p, g, null, n, f)), h.push({ event: p, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          p && n !== ou && (g = n.relatedTarget || n.fromElement) && (Bn(g) || g[rn]))
        )
          break e;
        if (
          (v || p) &&
          ((p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = u),
              (g = g ? Bn(g) : null),
              g !== null && ((w = ir(g)), g !== w || (g.tag !== 5 && g.tag !== 6)) && (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((m = dd),
            (E = 'onMouseLeave'),
            (c = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((m = pd), (E = 'onPointerLeave'), (c = 'onPointerEnter'), (d = 'pointer')),
            (w = v == null ? p : gr(v)),
            (y = g == null ? p : gr(g)),
            (p = new m(E, d + 'leave', v, n, f)),
            (p.target = w),
            (p.relatedTarget = y),
            (E = null),
            Bn(f) === u && ((m = new m(c, d + 'enter', g, n, f)), (m.target = y), (m.relatedTarget = w), (E = m)),
            (w = E),
            v && g)
          )
            t: {
              for (m = v, c = g, d = 0, y = m; y; y = ar(y)) d++;
              for (y = 0, E = c; E; E = ar(E)) y++;
              for (; 0 < d - y; ) (m = ar(m)), d--;
              for (; 0 < y - d; ) (c = ar(c)), y--;
              for (; d--; ) {
                if (m === c || (c !== null && m === c.alternate)) break t;
                (m = ar(m)), (c = ar(c));
              }
              m = null;
            }
          else m = null;
          v !== null && kd(h, p, v, m, !1), g !== null && w !== null && kd(h, w, g, m, !0);
        }
      }
      e: {
        if (
          ((p = u ? gr(u) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && p.type === 'file'))
        )
          var C = gS;
        else if (gd(p))
          if (Sm) C = ES;
          else {
            C = wS;
            var _ = yS;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === 'input' && (p.type === 'checkbox' || p.type === 'radio') && (C = SS);
        if (C && (C = C(e, u))) {
          wm(h, C, n, f);
          break e;
        }
        _ && _(e, p, u),
          e === 'focusout' && (_ = p._wrapperState) && _.controlled && p.type === 'number' && Za(p, 'number', p.value);
      }
      switch (((_ = u ? gr(u) : window), e)) {
        case 'focusin':
          (gd(_) || _.contentEditable === 'true') && ((mr = _), (fu = u), (Ro = null));
          break;
        case 'focusout':
          Ro = fu = mr = null;
          break;
        case 'mousedown':
          du = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (du = !1), xd(h, n, f);
          break;
        case 'selectionchange':
          if (_S) break;
        case 'keydown':
        case 'keyup':
          xd(h, n, f);
      }
      var x;
      if (xc)
        e: {
          switch (e) {
            case 'compositionstart':
              var k = 'onCompositionStart';
              break e;
            case 'compositionend':
              k = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              k = 'onCompositionUpdate';
              break e;
          }
          k = void 0;
        }
      else
        pr ? gm(e, n) && (k = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (k = 'onCompositionStart');
      k &&
        (vm &&
          n.locale !== 'ko' &&
          (pr || k !== 'onCompositionStart'
            ? k === 'onCompositionEnd' && pr && (x = mm())
            : ((gn = f), (wc = 'value' in gn ? gn.value : gn.textContent), (pr = !0))),
        (_ = kl(u, k)),
        0 < _.length &&
          ((k = new hd(k, e, null, n, f)),
          h.push({ event: k, listeners: _ }),
          x ? (k.data = x) : ((x = ym(n)), x !== null && (k.data = x)))),
        (x = dS ? hS(e, n) : pS(e, n)) &&
          ((u = kl(u, 'onBeforeInput')),
          0 < u.length &&
            ((f = new hd('onBeforeInput', 'beforeinput', null, n, f)),
            h.push({ event: f, listeners: u }),
            (f.data = x)));
    }
    Mm(h, t);
  });
}
function Zo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function kl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = Qo(e, n)), i != null && r.unshift(Zo(e, i, o)), (i = Qo(e, t)), i != null && r.push(Zo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function ar(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function kd(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Qo(n, i)), a != null && l.unshift(Zo(n, a, s)))
        : o || ((a = Qo(n, i)), a != null && l.push(Zo(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var TS = /\r\n?/g,
  OS = /\u0000|\uFFFD/g;
function Rd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      TS,
      `
`
    )
    .replace(OS, '');
}
function Ni(e, t, n) {
  if (((t = Rd(t)), Rd(e) !== t && n)) throw Error(M(425));
}
function Rl() {}
var hu = null,
  pu = null;
function mu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vu = typeof setTimeout == 'function' ? setTimeout : void 0,
  MS = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Pd = typeof Promise == 'function' ? Promise : void 0,
  LS =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Pd < 'u'
      ? function (e) {
          return Pd.resolve(null).then(e).catch(DS);
        }
      : vu;
function DS(e) {
  setTimeout(function () {
    throw e;
  });
}
function pa(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Go(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Go(t);
}
function xn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Td(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var to = Math.random().toString(36).slice(2),
  jt = '__reactFiber$' + to,
  ei = '__reactProps$' + to,
  rn = '__reactContainer$' + to,
  gu = '__reactEvents$' + to,
  bS = '__reactListeners$' + to,
  FS = '__reactHandles$' + to;
function Bn(e) {
  var t = e[jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[rn] || n[jt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Td(e); e !== null; ) {
          if ((n = e[jt])) return n;
          e = Td(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vi(e) {
  return (e = e[jt] || e[rn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function gr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Ss(e) {
  return e[ei] || null;
}
var yu = [],
  yr = -1;
function An(e) {
  return { current: e };
}
function pe(e) {
  0 > yr || ((e.current = yu[yr]), (yu[yr] = null), yr--);
}
function fe(e, t) {
  yr++, (yu[yr] = e.current), (e.current = t);
}
var Ln = {},
  We = An(Ln),
  tt = An(!1),
  Jn = Ln;
function jr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function nt(e) {
  return (e = e.childContextTypes), e != null;
}
function Pl() {
  pe(tt), pe(We);
}
function Od(e, t, n) {
  if (We.current !== Ln) throw Error(M(168));
  fe(We, t), fe(tt, n);
}
function Dm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(M(108, yw(e) || 'Unknown', o));
  return Se({}, n, r);
}
function Tl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ln),
    (Jn = We.current),
    fe(We, e),
    fe(tt, tt.current),
    !0
  );
}
function Md(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n ? ((e = Dm(e, t, Jn)), (r.__reactInternalMemoizedMergedChildContext = e), pe(tt), pe(We), fe(We, e)) : pe(tt),
    fe(tt, n);
}
var qt = null,
  Es = !1,
  ma = !1;
function bm(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function AS(e) {
  (Es = !0), bm(e);
}
function Nn() {
  if (!ma && qt !== null) {
    ma = !0;
    var e = 0,
      t = se;
    try {
      var n = qt;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qt = null), (Es = !1);
    } catch (o) {
      throw (qt !== null && (qt = qt.slice(e + 1)), om(mc, Nn), o);
    } finally {
      (se = t), (ma = !1);
    }
  }
  return null;
}
var wr = [],
  Sr = 0,
  Ol = null,
  Ml = 0,
  yt = [],
  wt = 0,
  Zn = null,
  Gt = 1,
  Yt = '';
function zn(e, t) {
  (wr[Sr++] = Ml), (wr[Sr++] = Ol), (Ol = e), (Ml = t);
}
function Fm(e, t, n) {
  (yt[wt++] = Gt), (yt[wt++] = Yt), (yt[wt++] = Zn), (Zn = e);
  var r = Gt;
  e = Yt;
  var o = 32 - Dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Dt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Gt = (1 << (32 - Dt(t) + o)) | (n << o) | r),
      (Yt = i + e);
  } else (Gt = (1 << i) | (n << o) | r), (Yt = e);
}
function _c(e) {
  e.return !== null && (zn(e, 1), Fm(e, 1, 0));
}
function kc(e) {
  for (; e === Ol; ) (Ol = wr[--Sr]), (wr[Sr] = null), (Ml = wr[--Sr]), (wr[Sr] = null);
  for (; e === Zn; )
    (Zn = yt[--wt]), (yt[wt] = null), (Yt = yt[--wt]), (yt[wt] = null), (Gt = yt[--wt]), (yt[wt] = null);
}
var ft = null,
  at = null,
  me = !1,
  Ot = null;
function Am(e, t) {
  var n = St(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ld(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (at = xn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (at = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zn !== null ? { id: Gt, overflow: Yt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = St(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (at = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Su(e) {
  if (me) {
    var t = at;
    if (t) {
      var n = t;
      if (!Ld(e, t)) {
        if (wu(e)) throw Error(M(418));
        t = xn(n.nextSibling);
        var r = ft;
        t && Ld(e, t) ? Am(r, n) : ((e.flags = (e.flags & -4097) | 2), (me = !1), (ft = e));
      }
    } else {
      if (wu(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (me = !1), (ft = e);
    }
  }
}
function Dd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ft = e;
}
function Ii(e) {
  if (e !== ft) return !1;
  if (!me) return Dd(e), (me = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !mu(e.type, e.memoizedProps))),
    t && (t = at))
  ) {
    if (wu(e)) throw (Nm(), Error(M(418)));
    for (; t; ) Am(e, t), (t = xn(t.nextSibling));
  }
  if ((Dd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              at = xn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      at = null;
    }
  } else at = ft ? xn(e.stateNode.nextSibling) : null;
  return !0;
}
function Nm() {
  for (var e = at; e; ) e = xn(e.nextSibling);
}
function Br() {
  (at = ft = null), (me = !1);
}
function Rc(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
var NS = un.ReactCurrentBatchConfig;
function Rt(e, t) {
  if (e && e.defaultProps) {
    (t = Se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ll = An(null),
  Dl = null,
  Er = null,
  Pc = null;
function Tc() {
  Pc = Er = Dl = null;
}
function Oc(e) {
  var t = Ll.current;
  pe(Ll), (e._currentValue = t);
}
function Eu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function br(e, t) {
  (Dl = e),
    (Pc = Er = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (et = !0), (e.firstContext = null));
}
function xt(e) {
  var t = e._currentValue;
  if (Pc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Er === null)) {
      if (Dl === null) throw Error(M(308));
      (Er = e), (Dl.dependencies = { lanes: 0, firstContext: e });
    } else Er = Er.next = e;
  return t;
}
var Vn = null;
function Mc(e) {
  Vn === null ? (Vn = [e]) : Vn.push(e);
}
function Im(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), Mc(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), on(e, r);
}
function on(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var hn = !1;
function Lc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function tn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ne & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), on(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Mc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    on(e, n)
  );
}
function tl(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vc(e, n);
  }
}
function bd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function bl(e, t, n, r) {
  var o = e.updateQueue;
  hn = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== l && (s === null ? (f.firstBaseUpdate = u) : (s.next = u), (f.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var h = o.baseState;
    (l = 0), (f = u = a = null), (s = i);
    do {
      var p = s.lane,
        v = s.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next = { eventTime: v, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var g = e,
            m = s;
          switch (((p = t), (v = n), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g == 'function')) {
                h = g.call(v, h, p);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (((g = m.payload), (p = typeof g == 'function' ? g.call(v, h, p) : g), p == null)) break e;
              h = Se({}, h, p);
              break e;
            case 2:
              hn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64), (p = o.effects), p === null ? (o.effects = [s]) : p.push(s));
      } else
        (v = { eventTime: v, lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
          f === null ? ((u = f = v), (a = h)) : (f = f.next = v),
          (l |= p);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (p = s), (s = p.next), (p.next = null), (o.lastBaseUpdate = p), (o.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (a = h),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (tr |= l), (e.lanes = l), (e.memoizedState = h);
  }
}
function Fd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(M(191, o));
        o.call(r);
      }
    }
}
var $m = new Ip.Component().refs;
function xu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ir(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      o = kn(e),
      i = tn(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = Cn(e, i, o)), t !== null && (bt(t, e, o, r), tl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      o = kn(e),
      i = tn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Cn(e, i, o)),
      t !== null && (bt(t, e, o, r), tl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = qe(),
      r = kn(e),
      o = tn(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = Cn(e, o, r)), t !== null && (bt(t, e, r, n), tl(t, e, r));
  },
};
function Ad(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xo(n, r) || !Xo(o, i)
      : !0
  );
}
function Um(e, t, n) {
  var r = !1,
    o = Ln,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = xt(i))
      : ((o = nt(t) ? Jn : We.current), (r = t.contextTypes), (i = (r = r != null) ? jr(e, o) : Ln)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Nd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xs.enqueueReplaceState(t, t.state, null);
}
function Cu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = $m), Lc(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (o.context = xt(i)) : ((i = nt(t) ? Jn : We.current), (o.context = jr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (xu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && xs.enqueueReplaceState(o, o.state, null),
      bl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function po(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var o = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === $m && (s = o.refs = {}), l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function zi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(M(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function Id(e) {
  var t = e._init;
  return t(e._payload);
}
function jm(e) {
  function t(c, d) {
    if (e) {
      var y = c.deletions;
      y === null ? ((c.deletions = [d]), (c.flags |= 16)) : y.push(d);
    }
  }
  function n(c, d) {
    if (!e) return null;
    for (; d !== null; ) t(c, d), (d = d.sibling);
    return null;
  }
  function r(c, d) {
    for (c = new Map(); d !== null; ) d.key !== null ? c.set(d.key, d) : c.set(d.index, d), (d = d.sibling);
    return c;
  }
  function o(c, d) {
    return (c = Rn(c, d)), (c.index = 0), (c.sibling = null), c;
  }
  function i(c, d, y) {
    return (
      (c.index = y),
      e
        ? ((y = c.alternate), y !== null ? ((y = y.index), y < d ? ((c.flags |= 2), d) : y) : ((c.flags |= 2), d))
        : ((c.flags |= 1048576), d)
    );
  }
  function l(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function s(c, d, y, E) {
    return d === null || d.tag !== 6 ? ((d = xa(y, c.mode, E)), (d.return = c), d) : ((d = o(d, y)), (d.return = c), d);
  }
  function a(c, d, y, E) {
    var C = y.type;
    return C === hr
      ? f(c, d, y.props.children, E, y.key)
      : d !== null &&
        (d.elementType === C || (typeof C == 'object' && C !== null && C.$$typeof === dn && Id(C) === d.type))
      ? ((E = o(d, y.props)), (E.ref = po(c, d, y)), (E.return = c), E)
      : ((E = sl(y.type, y.key, y.props, null, c.mode, E)), (E.ref = po(c, d, y)), (E.return = c), E);
  }
  function u(c, d, y, E) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== y.containerInfo ||
      d.stateNode.implementation !== y.implementation
      ? ((d = Ca(y, c.mode, E)), (d.return = c), d)
      : ((d = o(d, y.children || [])), (d.return = c), d);
  }
  function f(c, d, y, E, C) {
    return d === null || d.tag !== 7
      ? ((d = Gn(y, c.mode, E, C)), (d.return = c), d)
      : ((d = o(d, y)), (d.return = c), d);
  }
  function h(c, d, y) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = xa('' + d, c.mode, y)), (d.return = c), d;
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case Pi:
          return (y = sl(d.type, d.key, d.props, null, c.mode, y)), (y.ref = po(c, null, d)), (y.return = c), y;
        case dr:
          return (d = Ca(d, c.mode, y)), (d.return = c), d;
        case dn:
          var E = d._init;
          return h(c, E(d._payload), y);
      }
      if (yo(d) || ao(d)) return (d = Gn(d, c.mode, y, null)), (d.return = c), d;
      zi(c, d);
    }
    return null;
  }
  function p(c, d, y, E) {
    var C = d !== null ? d.key : null;
    if ((typeof y == 'string' && y !== '') || typeof y == 'number') return C !== null ? null : s(c, d, '' + y, E);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Pi:
          return y.key === C ? a(c, d, y, E) : null;
        case dr:
          return y.key === C ? u(c, d, y, E) : null;
        case dn:
          return (C = y._init), p(c, d, C(y._payload), E);
      }
      if (yo(y) || ao(y)) return C !== null ? null : f(c, d, y, E, null);
      zi(c, y);
    }
    return null;
  }
  function v(c, d, y, E, C) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number') return (c = c.get(y) || null), s(d, c, '' + E, C);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case Pi:
          return (c = c.get(E.key === null ? y : E.key) || null), a(d, c, E, C);
        case dr:
          return (c = c.get(E.key === null ? y : E.key) || null), u(d, c, E, C);
        case dn:
          var _ = E._init;
          return v(c, d, y, _(E._payload), C);
      }
      if (yo(E) || ao(E)) return (c = c.get(y) || null), f(d, c, E, C, null);
      zi(d, E);
    }
    return null;
  }
  function g(c, d, y, E) {
    for (var C = null, _ = null, x = d, k = (d = 0), L = null; x !== null && k < y.length; k++) {
      x.index > k ? ((L = x), (x = null)) : (L = x.sibling);
      var N = p(c, x, y[k], E);
      if (N === null) {
        x === null && (x = L);
        break;
      }
      e && x && N.alternate === null && t(c, x),
        (d = i(N, d, k)),
        _ === null ? (C = N) : (_.sibling = N),
        (_ = N),
        (x = L);
    }
    if (k === y.length) return n(c, x), me && zn(c, k), C;
    if (x === null) {
      for (; k < y.length; k++)
        (x = h(c, y[k], E)), x !== null && ((d = i(x, d, k)), _ === null ? (C = x) : (_.sibling = x), (_ = x));
      return me && zn(c, k), C;
    }
    for (x = r(c, x); k < y.length; k++)
      (L = v(x, c, k, y[k], E)),
        L !== null &&
          (e && L.alternate !== null && x.delete(L.key === null ? k : L.key),
          (d = i(L, d, k)),
          _ === null ? (C = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        x.forEach(function (D) {
          return t(c, D);
        }),
      me && zn(c, k),
      C
    );
  }
  function m(c, d, y, E) {
    var C = ao(y);
    if (typeof C != 'function') throw Error(M(150));
    if (((y = C.call(y)), y == null)) throw Error(M(151));
    for (var _ = (C = null), x = d, k = (d = 0), L = null, N = y.next(); x !== null && !N.done; k++, N = y.next()) {
      x.index > k ? ((L = x), (x = null)) : (L = x.sibling);
      var D = p(c, x, N.value, E);
      if (D === null) {
        x === null && (x = L);
        break;
      }
      e && x && D.alternate === null && t(c, x),
        (d = i(D, d, k)),
        _ === null ? (C = D) : (_.sibling = D),
        (_ = D),
        (x = L);
    }
    if (N.done) return n(c, x), me && zn(c, k), C;
    if (x === null) {
      for (; !N.done; k++, N = y.next())
        (N = h(c, N.value, E)), N !== null && ((d = i(N, d, k)), _ === null ? (C = N) : (_.sibling = N), (_ = N));
      return me && zn(c, k), C;
    }
    for (x = r(c, x); !N.done; k++, N = y.next())
      (N = v(x, c, k, N.value, E)),
        N !== null &&
          (e && N.alternate !== null && x.delete(N.key === null ? k : N.key),
          (d = i(N, d, k)),
          _ === null ? (C = N) : (_.sibling = N),
          (_ = N));
    return (
      e &&
        x.forEach(function (B) {
          return t(c, B);
        }),
      me && zn(c, k),
      C
    );
  }
  function w(c, d, y, E) {
    if (
      (typeof y == 'object' && y !== null && y.type === hr && y.key === null && (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case Pi:
          e: {
            for (var C = y.key, _ = d; _ !== null; ) {
              if (_.key === C) {
                if (((C = y.type), C === hr)) {
                  if (_.tag === 7) {
                    n(c, _.sibling), (d = o(_, y.props.children)), (d.return = c), (c = d);
                    break e;
                  }
                } else if (
                  _.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === dn && Id(C) === _.type)
                ) {
                  n(c, _.sibling), (d = o(_, y.props)), (d.ref = po(c, _, y)), (d.return = c), (c = d);
                  break e;
                }
                n(c, _);
                break;
              } else t(c, _);
              _ = _.sibling;
            }
            y.type === hr
              ? ((d = Gn(y.props.children, c.mode, E, y.key)), (d.return = c), (c = d))
              : ((E = sl(y.type, y.key, y.props, null, c.mode, E)), (E.ref = po(c, d, y)), (E.return = c), (c = E));
          }
          return l(c);
        case dr:
          e: {
            for (_ = y.key; d !== null; ) {
              if (d.key === _)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === y.containerInfo &&
                  d.stateNode.implementation === y.implementation
                ) {
                  n(c, d.sibling), (d = o(d, y.children || [])), (d.return = c), (c = d);
                  break e;
                } else {
                  n(c, d);
                  break;
                }
              else t(c, d);
              d = d.sibling;
            }
            (d = Ca(y, c.mode, E)), (d.return = c), (c = d);
          }
          return l(c);
        case dn:
          return (_ = y._init), w(c, d, _(y._payload), E);
      }
      if (yo(y)) return g(c, d, y, E);
      if (ao(y)) return m(c, d, y, E);
      zi(c, y);
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        d !== null && d.tag === 6
          ? (n(c, d.sibling), (d = o(d, y)), (d.return = c), (c = d))
          : (n(c, d), (d = xa(y, c.mode, E)), (d.return = c), (c = d)),
        l(c))
      : n(c, d);
  }
  return w;
}
var Vr = jm(!0),
  Bm = jm(!1),
  gi = {},
  Ht = An(gi),
  ti = An(gi),
  ni = An(gi);
function Hn(e) {
  if (e === gi) throw Error(M(174));
  return e;
}
function Dc(e, t) {
  switch ((fe(ni, t), fe(ti, e), fe(Ht, gi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tu(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = tu(t, e));
  }
  pe(Ht), fe(Ht, t);
}
function Hr() {
  pe(Ht), pe(ti), pe(ni);
}
function Vm(e) {
  Hn(ni.current);
  var t = Hn(Ht.current),
    n = tu(t, e.type);
  t !== n && (fe(ti, e), fe(Ht, n));
}
function bc(e) {
  ti.current === e && (pe(Ht), pe(ti));
}
var ge = An(0);
function Fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var va = [];
function Fc() {
  for (var e = 0; e < va.length; e++) va[e]._workInProgressVersionPrimary = null;
  va.length = 0;
}
var nl = un.ReactCurrentDispatcher,
  ga = un.ReactCurrentBatchConfig,
  er = 0,
  ye = null,
  Pe = null,
  Le = null,
  Al = !1,
  Po = !1,
  ri = 0,
  IS = 0;
function Ue() {
  throw Error(M(321));
}
function Ac(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!At(e[n], t[n])) return !1;
  return !0;
}
function Nc(e, t, n, r, o, i) {
  if (
    ((er = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (nl.current = e === null || e.memoizedState === null ? jS : BS),
    (e = n(r, o)),
    Po)
  ) {
    i = 0;
    do {
      if (((Po = !1), (ri = 0), 25 <= i)) throw Error(M(301));
      (i += 1), (Le = Pe = null), (t.updateQueue = null), (nl.current = VS), (e = n(r, o));
    } while (Po);
  }
  if (((nl.current = Nl), (t = Pe !== null && Pe.next !== null), (er = 0), (Le = Pe = ye = null), (Al = !1), t))
    throw Error(M(300));
  return e;
}
function Ic() {
  var e = ri !== 0;
  return (ri = 0), e;
}
function zt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Le === null ? (ye.memoizedState = Le = e) : (Le = Le.next = e), Le;
}
function Ct() {
  if (Pe === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = Le === null ? ye.memoizedState : Le.next;
  if (t !== null) (Le = t), (Pe = e);
  else {
    if (e === null) throw Error(M(310));
    (Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      Le === null ? (ye.memoizedState = Le = e) : (Le = Le.next = e);
  }
  return Le;
}
function oi(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ya(e) {
  var t = Ct(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Pe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var f = u.lane;
      if ((er & f) === f)
        a !== null &&
          (a = a.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = { lane: f, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? ((s = a = h), (l = r)) : (a = a.next = h), (ye.lanes |= f), (tr |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      At(r, t.memoizedState) || (et = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ye.lanes |= i), (tr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function wa(e) {
  var t = Ct(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    At(i, t.memoizedState) || (et = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Hm() {}
function Wm(e, t) {
  var n = ye,
    r = Ct(),
    o = t(),
    i = !At(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (et = !0)),
    (r = r.queue),
    zc(qm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), ii(9, Km.bind(null, n, r, o, t), void 0, null), De === null)) throw Error(M(349));
    er & 30 || Qm(n, t, o);
  }
  return o;
}
function Qm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ye.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Km(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Gm(t) && Ym(e);
}
function qm(e, t, n) {
  return n(function () {
    Gm(t) && Ym(e);
  });
}
function Gm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !At(e, n);
  } catch {
    return !0;
  }
}
function Ym(e) {
  var t = on(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function zd(e) {
  var t = zt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: oi, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = US.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function ii(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ye.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Xm() {
  return Ct().memoizedState;
}
function rl(e, t, n, r) {
  var o = zt();
  (ye.flags |= e), (o.memoizedState = ii(1 | t, n, void 0, r === void 0 ? null : r));
}
function Cs(e, t, n, r) {
  var o = Ct();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Pe !== null) {
    var l = Pe.memoizedState;
    if (((i = l.destroy), r !== null && Ac(r, l.deps))) {
      o.memoizedState = ii(t, n, i, r);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = ii(1 | t, n, i, r));
}
function $d(e, t) {
  return rl(8390656, 8, e, t);
}
function zc(e, t) {
  return Cs(2048, 8, e, t);
}
function Jm(e, t) {
  return Cs(4, 2, e, t);
}
function Zm(e, t) {
  return Cs(4, 4, e, t);
}
function ev(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function tv(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Cs(4, 4, ev.bind(null, t, e), n);
}
function $c() {}
function nv(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ac(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function rv(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ac(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ov(e, t, n) {
  return er & 21
    ? (At(n, t) || ((n = sm()), (ye.lanes |= n), (tr |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
}
function zS(e, t) {
  var n = se;
  (se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ga.transition;
  ga.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = n), (ga.transition = r);
  }
}
function iv() {
  return Ct().memoizedState;
}
function $S(e, t, n) {
  var r = kn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), lv(e))) sv(t, n);
  else if (((n = Im(e, t, n, r)), n !== null)) {
    var o = qe();
    bt(n, e, r, o), av(n, t, r);
  }
}
function US(e, t, n) {
  var r = kn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (lv(e)) sv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), At(s, l))) {
          var a = t.interleaved;
          a === null ? ((o.next = o), Mc(t)) : ((o.next = a.next), (a.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Im(e, t, o, r)), n !== null && ((o = qe()), bt(n, e, r, o), av(n, t, r));
  }
}
function lv(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function sv(e, t) {
  Po = Al = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function av(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vc(e, n);
  }
}
var Nl = {
    readContext: xt,
    useCallback: Ue,
    useContext: Ue,
    useEffect: Ue,
    useImperativeHandle: Ue,
    useInsertionEffect: Ue,
    useLayoutEffect: Ue,
    useMemo: Ue,
    useReducer: Ue,
    useRef: Ue,
    useState: Ue,
    useDebugValue: Ue,
    useDeferredValue: Ue,
    useTransition: Ue,
    useMutableSource: Ue,
    useSyncExternalStore: Ue,
    useId: Ue,
    unstable_isNewReconciler: !1,
  },
  jS = {
    readContext: xt,
    useCallback: function (e, t) {
      return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xt,
    useEffect: $d,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), rl(4194308, 4, ev.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = zt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = $S.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zd,
    useDebugValue: $c,
    useDeferredValue: function (e) {
      return (zt().memoizedState = e);
    },
    useTransition: function () {
      var e = zd(!1),
        t = e[0];
      return (e = zS.bind(null, e[1])), (zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        o = zt();
      if (me) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(M(349));
        er & 30 || Qm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        $d(qm.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ii(9, Km.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zt(),
        t = De.identifierPrefix;
      if (me) {
        var n = Yt,
          r = Gt;
        (n = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ri++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = IS++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  BS = {
    readContext: xt,
    useCallback: nv,
    useContext: xt,
    useEffect: zc,
    useImperativeHandle: tv,
    useInsertionEffect: Jm,
    useLayoutEffect: Zm,
    useMemo: rv,
    useReducer: ya,
    useRef: Xm,
    useState: function () {
      return ya(oi);
    },
    useDebugValue: $c,
    useDeferredValue: function (e) {
      var t = Ct();
      return ov(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = ya(oi)[0],
        t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Hm,
    useSyncExternalStore: Wm,
    useId: iv,
    unstable_isNewReconciler: !1,
  },
  VS = {
    readContext: xt,
    useCallback: nv,
    useContext: xt,
    useEffect: zc,
    useImperativeHandle: tv,
    useInsertionEffect: Jm,
    useLayoutEffect: Zm,
    useMemo: rv,
    useReducer: wa,
    useRef: Xm,
    useState: function () {
      return wa(oi);
    },
    useDebugValue: $c,
    useDeferredValue: function (e) {
      var t = Ct();
      return Pe === null ? (t.memoizedState = e) : ov(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = wa(oi)[0],
        t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Hm,
    useSyncExternalStore: Wm,
    useId: iv,
    unstable_isNewReconciler: !1,
  };
function Wr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += gw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Sa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _u(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var HS = typeof WeakMap == 'function' ? WeakMap : Map;
function uv(e, t, n) {
  (n = tn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      zl || ((zl = !0), (Fu = r)), _u(e, t);
    }),
    n
  );
}
function cv(e, t, n) {
  (n = tn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        _u(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        _u(e, t), typeof r != 'function' && (_n === null ? (_n = new Set([this])) : _n.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' });
      }),
    n
  );
}
function Ud(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new HS();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = oE.bind(null, e, t, n)), t.then(e, e));
}
function jd(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = tn(-1, 1)), (t.tag = 2), Cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var WS = un.ReactCurrentOwner,
  et = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? Bm(t, null, n, r) : Vr(t, e.child, n, r);
}
function Vd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    br(t, o),
    (r = Nc(e, t, n, r, i, o)),
    (n = Ic()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), ln(e, t, o))
      : (me && n && _c(t), (t.flags |= 1), Qe(e, t, r, o), t.child)
  );
}
function Hd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Kc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), fv(e, t, i, r, o))
      : ((e = sl(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Xo), n(l, r) && e.ref === t.ref)) return ln(e, t, o);
  }
  return (t.flags |= 1), (e = Rn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function fv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Xo(i, r) && e.ref === t.ref)
      if (((et = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (et = !0);
      else return (t.lanes = e.lanes), ln(e, t, o);
  }
  return ku(e, t, n, r, o);
}
function dv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), fe(Cr, lt), (lt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          fe(Cr, lt),
          (lt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        fe(Cr, lt),
        (lt |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), fe(Cr, lt), (lt |= r);
  return Qe(e, t, o, n), t.child;
}
function hv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ku(e, t, n, r, o) {
  var i = nt(n) ? Jn : We.current;
  return (
    (i = jr(t, i)),
    br(t, o),
    (n = Nc(e, t, n, r, i, o)),
    (r = Ic()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), ln(e, t, o))
      : (me && r && _c(t), (t.flags |= 1), Qe(e, t, n, o), t.child)
  );
}
function Wd(e, t, n, r, o) {
  if (nt(n)) {
    var i = !0;
    Tl(t);
  } else i = !1;
  if ((br(t, o), t.stateNode === null)) ol(e, t), Um(t, n, r), Cu(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == 'object' && u !== null ? (u = xt(u)) : ((u = nt(n) ? Jn : We.current), (u = jr(t, u)));
    var f = n.getDerivedStateFromProps,
      h = typeof f == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || a !== u) && Nd(t, l, r, u)),
      (hn = !1);
    var p = t.memoizedState;
    (l.state = p),
      bl(t, r, l, o),
      (a = t.memoizedState),
      s !== r || p !== a || tt.current || hn
        ? (typeof f == 'function' && (xu(t, n, f, r), (a = t.memoizedState)),
          (s = hn || Ad(t, n, s, r, p, a, u))
            ? (h ||
                (typeof l.UNSAFE_componentWillMount != 'function' && typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      zm(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Rt(t.type, s)),
      (l.props = u),
      (h = t.pendingProps),
      (p = l.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null ? (a = xt(a)) : ((a = nt(n) ? Jn : We.current), (a = jr(t, a)));
    var v = n.getDerivedStateFromProps;
    (f = typeof v == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((s !== h || p !== a) && Nd(t, l, r, a)),
      (hn = !1),
      (p = t.memoizedState),
      (l.state = p),
      bl(t, r, l, o);
    var g = t.memoizedState;
    s !== h || p !== g || tt.current || hn
      ? (typeof v == 'function' && (xu(t, n, v, r), (g = t.memoizedState)),
        (u = hn || Ad(t, n, u, r, p, g, a) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' && typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' && l.componentWillUpdate(r, g, a),
              typeof l.UNSAFE_componentWillUpdate == 'function' && l.UNSAFE_componentWillUpdate(r, g, a)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ru(e, t, n, r, i, o);
}
function Ru(e, t, n, r, o, i) {
  hv(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Md(t, n, !1), ln(e, t, i);
  (r = t.stateNode), (WS.current = t);
  var s = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = Vr(t, e.child, null, i)), (t.child = Vr(t, null, s, i))) : Qe(e, t, s, i),
    (t.memoizedState = r.state),
    o && Md(t, n, !0),
    t.child
  );
}
function pv(e) {
  var t = e.stateNode;
  t.pendingContext ? Od(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Od(e, t.context, !1),
    Dc(e, t.containerInfo);
}
function Qd(e, t, n, r, o) {
  return Br(), Rc(o), (t.flags |= 256), Qe(e, t, n, r), t.child;
}
var Pu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mv(e, t, n) {
  var r = t.pendingProps,
    o = ge.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    fe(ge, o & 1),
    e === null)
  )
    return (
      Su(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = Rs(l, r, 0, null)),
              (e = Gn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Tu(n)),
              (t.memoizedState = Pu),
              e)
            : Uc(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null))) return QS(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = Rn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Rn(s, i)) : ((i = Gn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? Tu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Rn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uc(e, t) {
  return (t = Rs({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function $i(e, t, n, r) {
  return (
    r !== null && Rc(r),
    Vr(t, e.child, null, n),
    (e = Uc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function QS(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Sa(Error(M(422)))), $i(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Rs({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Gn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Vr(t, e.child, null, l),
        (t.child.memoizedState = Tu(l)),
        (t.memoizedState = Pu),
        i);
  if (!(t.mode & 1)) return $i(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(M(419))), (r = Sa(i, r, void 0)), $i(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), et || s)) {
    if (((r = De), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), on(e, o), bt(r, e, o, -1));
    }
    return Qc(), (r = Sa(Error(M(421)))), $i(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = iE.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (at = xn(o.nextSibling)),
      (ft = t),
      (me = !0),
      (Ot = null),
      e !== null && ((yt[wt++] = Gt), (yt[wt++] = Yt), (yt[wt++] = Zn), (Gt = e.id), (Yt = e.overflow), (Zn = t)),
      (t = Uc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Kd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Eu(e.return, t, n);
}
function Ea(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function vv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Qe(e, t, r.children, n), (r = ge.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Kd(e, n, t);
        else if (e.tag === 19) Kd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((fe(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Fl(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          Ea(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Fl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ea(t, !0, n, null, i);
        break;
      case 'together':
        Ea(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ol(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ln(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (tr |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Rn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function KS(e, t, n) {
  switch (t.tag) {
    case 3:
      pv(t), Br();
      break;
    case 5:
      Vm(t);
      break;
    case 1:
      nt(t.type) && Tl(t);
      break;
    case 4:
      Dc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      fe(Ll, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (fe(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? mv(e, t, n)
          : (fe(ge, ge.current & 1), (e = ln(e, t, n)), e !== null ? e.sibling : null);
      fe(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        fe(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), dv(e, t, n);
  }
  return ln(e, t, n);
}
var gv, Ou, yv, wv;
gv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ou = function () {};
yv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Hn(Ht.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Xa(e, o)), (r = Xa(e, r)), (i = []);
        break;
      case 'select':
        (o = Se({}, o, { value: void 0 })), (r = Se({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = eu(e, o)), (r = eu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Rl);
    }
    nu(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Ho.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (((s = o != null ? o[u] : void 0), r.hasOwnProperty(u) && a !== s && (a != null || s != null)))
        if (u === 'style')
          if (s) {
            for (l in s) !s.hasOwnProperty(l) || (a && a.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
            for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') || (i = i || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Ho.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && he('scroll', e), i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
wv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mo(e, t) {
  if (!me)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function qS(e, t, n) {
  var r = t.pendingProps;
  switch ((kc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return nt(t.type) && Pl(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Hr(),
        pe(tt),
        pe(We),
        Fc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ii(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ot !== null && (Iu(Ot), (Ot = null)))),
        Ou(e, t),
        je(t),
        null
      );
    case 5:
      bc(t);
      var o = Hn(ni.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yv(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return je(t), null;
        }
        if (((e = Hn(Ht.current)), Ii(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[jt] = t), (r[ei] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              he('cancel', r), he('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              he('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < So.length; o++) he(So[o], r);
              break;
            case 'source':
              he('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              he('error', r), he('load', r);
              break;
            case 'details':
              he('toggle', r);
              break;
            case 'input':
              nd(r, i), he('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), he('invalid', r);
              break;
            case 'textarea':
              od(r, i), he('invalid', r);
          }
          nu(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && Ni(r.textContent, s, e), (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 && Ni(r.textContent, s, e), (o = ['children', '' + s]))
                : Ho.hasOwnProperty(l) && s != null && l === 'onScroll' && he('scroll', r);
            }
          switch (n) {
            case 'input':
              Ti(r), rd(r, i, !0);
              break;
            case 'textarea':
              Ti(r), id(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Rl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Qp(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[jt] = t),
            (e[ei] = r),
            gv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ru(n, r)), n)) {
              case 'dialog':
                he('cancel', e), he('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                he('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < So.length; o++) he(So[o], e);
                o = r;
                break;
              case 'source':
                he('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                he('error', e), he('load', e), (o = r);
                break;
              case 'details':
                he('toggle', e), (o = r);
                break;
              case 'input':
                nd(e, r), (o = Xa(e, r)), he('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = Se({}, r, { value: void 0 })), he('invalid', e);
                break;
              case 'textarea':
                od(e, r), (o = eu(e, r)), he('invalid', e);
                break;
              default:
                o = r;
            }
            nu(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === 'style'
                  ? Gp(e, a)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && Kp(e, a))
                  : i === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Wo(e, a)
                    : typeof a == 'number' && Wo(e, '' + a)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Ho.hasOwnProperty(i)
                      ? a != null && i === 'onScroll' && he('scroll', e)
                      : a != null && cc(e, i, a, l));
              }
            switch (n) {
              case 'input':
                Ti(e), rd(e, r, !1);
                break;
              case 'textarea':
                Ti(e), id(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Mn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Or(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && Or(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Rl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) wv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(M(166));
        if (((n = Hn(ni.current)), Hn(Ht.current), Ii(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[jt] = t), (i = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ni(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ni(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[jt] = t), (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (pe(ge), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (me && at !== null && t.mode & 1 && !(t.flags & 128)) Nm(), Br(), (t.flags |= 98560), (i = !1);
        else if (((i = Ii(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(M(317));
            i[jt] = t;
          } else Br(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (i = !1);
        } else Ot !== null && (Iu(Ot), (Ot = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ge.current & 1 ? Te === 0 && (Te = 3) : Qc())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return Hr(), Ou(e, t), e === null && Jo(t.stateNode.containerInfo), je(t), null;
    case 10:
      return Oc(t.type._context), je(t), null;
    case 17:
      return nt(t.type) && Pl(), je(t), null;
    case 19:
      if ((pe(ge), (i = t.memoizedState), i === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) mo(i, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Fl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    mo(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return fe(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && xe() > Qr && ((t.flags |= 128), (r = !0), mo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mo(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !me)
            )
              return je(t), null;
          } else
            2 * xe() - i.renderingStartTime > Qr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = xe()),
          (t.sibling = null),
          (n = ge.current),
          fe(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Wc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? lt & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function GS(e, t) {
  switch ((kc(t), t.tag)) {
    case 1:
      return nt(t.type) && Pl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Hr(), pe(tt), pe(We), Fc(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bc(t), null;
    case 13:
      if ((pe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(M(340));
        Br();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return pe(ge), null;
    case 4:
      return Hr(), null;
    case 10:
      return Oc(t.type._context), null;
    case 22:
    case 23:
      return Wc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ui = !1,
  Ve = !1,
  YS = typeof WeakSet == 'function' ? WeakSet : Set,
  $ = null;
function xr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function Mu(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var qd = !1;
function XS(e, t) {
  if (((hu = Cl), (e = Cm()), Cc(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            f = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (o !== 0 && h.nodeType !== 3) || (s = l + o),
                h !== i || (r !== 0 && h.nodeType !== 3) || (a = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (p = h), (h = v);
            for (;;) {
              if (h === e) break t;
              if ((p === n && ++u === o && (s = l), p === i && ++f === r && (a = l), (v = h.nextSibling) !== null))
                break;
              (h = p), (p = h.parentNode);
            }
            h = v;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pu = { focusedElem: e, selectionRange: n }, Cl = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var m = g.memoizedProps,
                    w = g.memoizedState,
                    c = t.stateNode,
                    d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Rt(t.type, m), w);
                  c.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (E) {
          Ee(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (g = qd), (qd = !1), g;
}
function To(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Mu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function _s(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Lu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Sv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Sv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[jt], delete t[ei], delete t[gu], delete t[bS], delete t[FS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ev(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ev(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Rl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Du(e, t, n), e = e.sibling; e !== null; ) Du(e, t, n), (e = e.sibling);
}
function bu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bu(e, t, n), e = e.sibling; e !== null; ) bu(e, t, n), (e = e.sibling);
}
var Ae = null,
  Tt = !1;
function fn(e, t, n) {
  for (n = n.child; n !== null; ) xv(e, t, n), (n = n.sibling);
}
function xv(e, t, n) {
  if (Vt && typeof Vt.onCommitFiberUnmount == 'function')
    try {
      Vt.onCommitFiberUnmount(vs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ve || xr(n, t);
    case 6:
      var r = Ae,
        o = Tt;
      (Ae = null),
        fn(e, t, n),
        (Ae = r),
        (Tt = o),
        Ae !== null &&
          (Tt
            ? ((e = Ae), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (Tt
          ? ((e = Ae), (n = n.stateNode), e.nodeType === 8 ? pa(e.parentNode, n) : e.nodeType === 1 && pa(e, n), Go(e))
          : pa(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae), (o = Tt), (Ae = n.stateNode.containerInfo), (Tt = !0), fn(e, t, n), (Ae = r), (Tt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ve && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && Mu(n, t, l), (o = o.next);
        } while (o !== r);
      }
      fn(e, t, n);
      break;
    case 1:
      if (!Ve && (xr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (s) {
          Ee(n, t, s);
        }
      fn(e, t, n);
      break;
    case 21:
      fn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Ve = (r = Ve) || n.memoizedState !== null), fn(e, t, n), (Ve = r)) : fn(e, t, n);
      break;
    default:
      fn(e, t, n);
  }
}
function Yd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new YS()),
      t.forEach(function (r) {
        var o = lE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function _t(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ae = s.stateNode), (Tt = !1);
              break e;
            case 3:
              (Ae = s.stateNode.containerInfo), (Tt = !0);
              break e;
            case 4:
              (Ae = s.stateNode.containerInfo), (Tt = !0);
              break e;
          }
          s = s.return;
        }
        if (Ae === null) throw Error(M(160));
        xv(i, l, o), (Ae = null), (Tt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Ee(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Cv(t, e), (t = t.sibling);
}
function Cv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_t(t, e), It(e), r & 4)) {
        try {
          To(3, e, e.return), _s(3, e);
        } catch (m) {
          Ee(e, e.return, m);
        }
        try {
          To(5, e, e.return);
        } catch (m) {
          Ee(e, e.return, m);
        }
      }
      break;
    case 1:
      _t(t, e), It(e), r & 512 && n !== null && xr(n, n.return);
      break;
    case 5:
      if ((_t(t, e), It(e), r & 512 && n !== null && xr(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          Wo(o, '');
        } catch (m) {
          Ee(e, e.return, m);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Hp(o, i), ru(s, l);
            var u = ru(s, i);
            for (l = 0; l < a.length; l += 2) {
              var f = a[l],
                h = a[l + 1];
              f === 'style'
                ? Gp(o, h)
                : f === 'dangerouslySetInnerHTML'
                ? Kp(o, h)
                : f === 'children'
                ? Wo(o, h)
                : cc(o, f, h, u);
            }
            switch (s) {
              case 'input':
                Ja(o, i);
                break;
              case 'textarea':
                Wp(o, i);
                break;
              case 'select':
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? Or(o, !!i.multiple, v, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Or(o, !!i.multiple, i.defaultValue, !0)
                      : Or(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[ei] = i;
          } catch (m) {
            Ee(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((_t(t, e), It(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (m) {
          Ee(e, e.return, m);
        }
      }
      break;
    case 3:
      if ((_t(t, e), It(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Go(t.containerInfo);
        } catch (m) {
          Ee(e, e.return, m);
        }
      break;
    case 4:
      _t(t, e), It(e);
      break;
    case 13:
      _t(t, e),
        It(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Vc = xe())),
        r & 4 && Yd(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ve = (u = Ve) || f), _t(t, e), (Ve = u)) : _t(t, e),
        It(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !f && e.mode & 1))
          for ($ = e, f = e.child; f !== null; ) {
            for (h = $ = f; $ !== null; ) {
              switch (((p = $), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  To(4, p, p.return);
                  break;
                case 1:
                  xr(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount();
                    } catch (m) {
                      Ee(r, n, m);
                    }
                  }
                  break;
                case 5:
                  xr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Jd(h);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), ($ = v)) : Jd(h);
            }
            f = f.sibling;
          }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                (o = h.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = h.stateNode),
                      (a = h.memoizedProps.style),
                      (l = a != null && a.hasOwnProperty('display') ? a.display : null),
                      (s.style.display = qp('display', l)));
              } catch (m) {
                Ee(e, e.return, m);
              }
            }
          } else if (h.tag === 6) {
            if (f === null)
              try {
                h.stateNode.nodeValue = u ? '' : h.memoizedProps;
              } catch (m) {
                Ee(e, e.return, m);
              }
          } else if (((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === e) && h.child !== null) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), (h = h.return);
          }
          f === h && (f = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      _t(t, e), It(e), r & 4 && Yd(e);
      break;
    case 21:
      break;
    default:
      _t(t, e), It(e);
  }
}
function It(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ev(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Wo(o, ''), (r.flags &= -33));
          var i = Gd(e);
          bu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Gd(e);
          Du(e, s, l);
          break;
        default:
          throw Error(M(161));
      }
    } catch (a) {
      Ee(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function JS(e, t, n) {
  ($ = e), _v(e);
}
function _v(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ui;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Ve;
        s = Ui;
        var u = Ve;
        if (((Ui = l), (Ve = a) && !u))
          for ($ = o; $ !== null; )
            (l = $),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null ? Zd(o) : a !== null ? ((a.return = l), ($ = a)) : Zd(o);
        for (; i !== null; ) ($ = i), _v(i), (i = i.sibling);
        ($ = o), (Ui = s), (Ve = u);
      }
      Xd(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), ($ = i)) : Xd(e);
  }
}
function Xd(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || _s(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ve)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Fd(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Fd(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var h = f.dehydrated;
                    h !== null && Go(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        Ve || (t.flags & 512 && Lu(t));
      } catch (p) {
        Ee(t, t.return, p);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Jd(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Zd(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _s(4, t);
          } catch (a) {
            Ee(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ee(t, o, a);
            }
          }
          var i = t.return;
          try {
            Lu(t);
          } catch (a) {
            Ee(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Lu(t);
          } catch (a) {
            Ee(t, l, a);
          }
      }
    } catch (a) {
      Ee(t, t.return, a);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), ($ = s);
      break;
    }
    $ = t.return;
  }
}
var ZS = Math.ceil,
  Il = un.ReactCurrentDispatcher,
  jc = un.ReactCurrentOwner,
  Et = un.ReactCurrentBatchConfig,
  ne = 0,
  De = null,
  ke = null,
  Ie = 0,
  lt = 0,
  Cr = An(0),
  Te = 0,
  li = null,
  tr = 0,
  ks = 0,
  Bc = 0,
  Oo = null,
  Je = null,
  Vc = 0,
  Qr = 1 / 0,
  Kt = null,
  zl = !1,
  Fu = null,
  _n = null,
  ji = !1,
  yn = null,
  $l = 0,
  Mo = 0,
  Au = null,
  il = -1,
  ll = 0;
function qe() {
  return ne & 6 ? xe() : il !== -1 ? il : (il = xe());
}
function kn(e) {
  return e.mode & 1
    ? ne & 2 && Ie !== 0
      ? Ie & -Ie
      : NS.transition !== null
      ? (ll === 0 && (ll = sm()), ll)
      : ((e = se), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pm(e.type))), e)
    : 1;
}
function bt(e, t, n, r) {
  if (50 < Mo) throw ((Mo = 0), (Au = null), Error(M(185)));
  pi(e, n, r),
    (!(ne & 2) || e !== De) &&
      (e === De && (!(ne & 2) && (ks |= n), Te === 4 && vn(e, Ie)),
      rt(e, r),
      n === 1 && ne === 0 && !(t.mode & 1) && ((Qr = xe() + 500), Es && Nn()));
}
function rt(e, t) {
  var n = e.callbackNode;
  Nw(e, t);
  var r = xl(e, e === De ? Ie : 0);
  if (r === 0) n !== null && ad(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ad(n), t === 1))
      e.tag === 0 ? AS(eh.bind(null, e)) : bm(eh.bind(null, e)),
        LS(function () {
          !(ne & 6) && Nn();
        }),
        (n = null);
    else {
      switch (am(r)) {
        case 1:
          n = mc;
          break;
        case 4:
          n = im;
          break;
        case 16:
          n = El;
          break;
        case 536870912:
          n = lm;
          break;
        default:
          n = El;
      }
      n = Dv(n, kv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kv(e, t) {
  if (((il = -1), (ll = 0), ne & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (Fr() && e.callbackNode !== n) return null;
  var r = xl(e, e === De ? Ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ul(e, r);
  else {
    t = r;
    var o = ne;
    ne |= 2;
    var i = Pv();
    (De !== e || Ie !== t) && ((Kt = null), (Qr = xe() + 500), qn(e, t));
    do
      try {
        nE();
        break;
      } catch (s) {
        Rv(e, s);
      }
    while (1);
    Tc(), (Il.current = i), (ne = o), ke !== null ? (t = 0) : ((De = null), (Ie = 0), (t = Te));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = au(e)), o !== 0 && ((r = o), (t = Nu(e, o)))), t === 1))
      throw ((n = li), qn(e, 0), vn(e, r), rt(e, xe()), n);
    if (t === 6) vn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !eE(o) &&
          ((t = Ul(e, r)), t === 2 && ((i = au(e)), i !== 0 && ((r = i), (t = Nu(e, i)))), t === 1))
      )
        throw ((n = li), qn(e, 0), vn(e, r), rt(e, xe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          $n(e, Je, Kt);
          break;
        case 3:
          if ((vn(e, r), (r & 130023424) === r && ((t = Vc + 500 - xe()), 10 < t))) {
            if (xl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              qe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = vu($n.bind(null, e, Je, Kt), t);
            break;
          }
          $n(e, Je, Kt);
          break;
        case 4:
          if ((vn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Dt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = xe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ZS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vu($n.bind(null, e, Je, Kt), r);
            break;
          }
          $n(e, Je, Kt);
          break;
        case 5:
          $n(e, Je, Kt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return rt(e, xe()), e.callbackNode === n ? kv.bind(null, e) : null;
}
function Nu(e, t) {
  var n = Oo;
  return (
    e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256),
    (e = Ul(e, t)),
    e !== 2 && ((t = Je), (Je = n), t !== null && Iu(t)),
    e
  );
}
function Iu(e) {
  Je === null ? (Je = e) : Je.push.apply(Je, e);
}
function eE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!At(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function vn(e, t) {
  for (t &= ~Bc, t &= ~ks, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function eh(e) {
  if (ne & 6) throw Error(M(327));
  Fr();
  var t = xl(e, 0);
  if (!(t & 1)) return rt(e, xe()), null;
  var n = Ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = au(e);
    r !== 0 && ((t = r), (n = Nu(e, r)));
  }
  if (n === 1) throw ((n = li), qn(e, 0), vn(e, t), rt(e, xe()), n);
  if (n === 6) throw Error(M(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), $n(e, Je, Kt), rt(e, xe()), null;
}
function Hc(e, t) {
  var n = ne;
  ne |= 1;
  try {
    return e(t);
  } finally {
    (ne = n), ne === 0 && ((Qr = xe() + 500), Es && Nn());
  }
}
function nr(e) {
  yn !== null && yn.tag === 0 && !(ne & 6) && Fr();
  var t = ne;
  ne |= 1;
  var n = Et.transition,
    r = se;
  try {
    if (((Et.transition = null), (se = 1), e)) return e();
  } finally {
    (se = r), (Et.transition = n), (ne = t), !(ne & 6) && Nn();
  }
}
function Wc() {
  (lt = Cr.current), pe(Cr);
}
function qn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), MS(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n;
      switch ((kc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Pl();
          break;
        case 3:
          Hr(), pe(tt), pe(We), Fc();
          break;
        case 5:
          bc(r);
          break;
        case 4:
          Hr();
          break;
        case 13:
          pe(ge);
          break;
        case 19:
          pe(ge);
          break;
        case 10:
          Oc(r.type._context);
          break;
        case 22:
        case 23:
          Wc();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (ke = e = Rn(e.current, null)),
    (Ie = lt = t),
    (Te = 0),
    (li = null),
    (Bc = ks = tr = 0),
    (Je = Oo = null),
    Vn !== null)
  ) {
    for (t = 0; t < Vn.length; t++)
      if (((n = Vn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Vn = null;
  }
  return e;
}
function Rv(e, t) {
  do {
    var n = ke;
    try {
      if ((Tc(), (nl.current = Nl), Al)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Al = !1;
      }
      if (
        ((er = 0), (Le = Pe = ye = null), (Po = !1), (ri = 0), (jc.current = null), n === null || n.return === null)
      ) {
        (Te = 1), (li = t), (ke = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (((t = Ie), (s.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
          var u = a,
            f = s,
            h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue), (f.memoizedState = p.memoizedState), (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var v = jd(l);
          if (v !== null) {
            (v.flags &= -257), Bd(v, l, s, i, t), v.mode & 1 && Ud(i, u, t), (t = v), (a = u);
            var g = t.updateQueue;
            if (g === null) {
              var m = new Set();
              m.add(a), (t.updateQueue = m);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ud(i, u, t), Qc();
              break e;
            }
            a = Error(M(426));
          }
        } else if (me && s.mode & 1) {
          var w = jd(l);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), Bd(w, l, s, i, t), Rc(Wr(a, s));
            break e;
          }
        }
        (i = a = Wr(a, s)), Te !== 4 && (Te = 2), Oo === null ? (Oo = [i]) : Oo.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var c = uv(i, a, t);
              bd(i, c);
              break e;
            case 1:
              s = a;
              var d = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (y !== null && typeof y.componentDidCatch == 'function' && (_n === null || !_n.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = cv(i, s, t);
                bd(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ov(n);
    } catch (C) {
      (t = C), ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Pv() {
  var e = Il.current;
  return (Il.current = Nl), e === null ? Nl : e;
}
function Qc() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4), De === null || (!(tr & 268435455) && !(ks & 268435455)) || vn(De, Ie);
}
function Ul(e, t) {
  var n = ne;
  ne |= 2;
  var r = Pv();
  (De !== e || Ie !== t) && ((Kt = null), qn(e, t));
  do
    try {
      tE();
      break;
    } catch (o) {
      Rv(e, o);
    }
  while (1);
  if ((Tc(), (ne = n), (Il.current = r), ke !== null)) throw Error(M(261));
  return (De = null), (Ie = 0), Te;
}
function tE() {
  for (; ke !== null; ) Tv(ke);
}
function nE() {
  for (; ke !== null && !Pw(); ) Tv(ke);
}
function Tv(e) {
  var t = Lv(e.alternate, e, lt);
  (e.memoizedProps = e.pendingProps), t === null ? Ov(e) : (ke = t), (jc.current = null);
}
function Ov(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = GS(n, t)), n !== null)) {
        (n.flags &= 32767), (ke = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Te = 6), (ke = null);
        return;
      }
    } else if (((n = qS(n, t, lt)), n !== null)) {
      ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function $n(e, t, n) {
  var r = se,
    o = Et.transition;
  try {
    (Et.transition = null), (se = 1), rE(e, t, n, r);
  } finally {
    (Et.transition = o), (se = r);
  }
  return null;
}
function rE(e, t, n, r) {
  do Fr();
  while (yn !== null);
  if (ne & 6) throw Error(M(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Iw(e, i),
    e === De && ((ke = De = null), (Ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ji ||
      ((ji = !0),
      Dv(El, function () {
        return Fr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Et.transition), (Et.transition = null);
    var l = se;
    se = 1;
    var s = ne;
    (ne |= 4),
      (jc.current = null),
      XS(e, n),
      Cv(n, e),
      CS(pu),
      (Cl = !!hu),
      (pu = hu = null),
      (e.current = n),
      JS(n),
      Tw(),
      (ne = s),
      (se = l),
      (Et.transition = i);
  } else e.current = n;
  if (
    (ji && ((ji = !1), (yn = e), ($l = o)),
    (i = e.pendingLanes),
    i === 0 && (_n = null),
    Lw(n.stateNode),
    rt(e, xe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (zl) throw ((zl = !1), (e = Fu), (Fu = null), e);
  return (
    $l & 1 && e.tag !== 0 && Fr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Au ? Mo++ : ((Mo = 0), (Au = e))) : (Mo = 0),
    Nn(),
    null
  );
}
function Fr() {
  if (yn !== null) {
    var e = am($l),
      t = Et.transition,
      n = se;
    try {
      if (((Et.transition = null), (se = 16 > e ? 16 : e), yn === null)) var r = !1;
      else {
        if (((e = yn), (yn = null), ($l = 0), ne & 6)) throw Error(M(331));
        var o = ne;
        for (ne |= 4, $ = e.current; $ !== null; ) {
          var i = $,
            l = i.child;
          if ($.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for ($ = u; $ !== null; ) {
                  var f = $;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      To(8, f, i);
                  }
                  var h = f.child;
                  if (h !== null) (h.return = f), ($ = h);
                  else
                    for (; $ !== null; ) {
                      f = $;
                      var p = f.sibling,
                        v = f.return;
                      if ((Sv(f), f === u)) {
                        $ = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), ($ = p);
                        break;
                      }
                      $ = v;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var m = g.child;
                if (m !== null) {
                  g.child = null;
                  do {
                    var w = m.sibling;
                    (m.sibling = null), (m = w);
                  } while (m !== null);
                }
              }
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), ($ = l);
          else
            e: for (; $ !== null; ) {
              if (((i = $), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    To(9, i, i.return);
                }
              var c = i.sibling;
              if (c !== null) {
                (c.return = i.return), ($ = c);
                break e;
              }
              $ = i.return;
            }
        }
        var d = e.current;
        for ($ = d; $ !== null; ) {
          l = $;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null) (y.return = l), ($ = y);
          else
            e: for (l = d; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _s(9, s);
                  }
                } catch (C) {
                  Ee(s, s.return, C);
                }
              if (s === l) {
                $ = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), ($ = E);
                break e;
              }
              $ = s.return;
            }
        }
        if (((ne = o), Nn(), Vt && typeof Vt.onPostCommitFiberRoot == 'function'))
          try {
            Vt.onPostCommitFiberRoot(vs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (se = n), (Et.transition = t);
    }
  }
  return !1;
}
function th(e, t, n) {
  (t = Wr(n, t)), (t = uv(e, t, 1)), (e = Cn(e, t, 1)), (t = qe()), e !== null && (pi(e, 1, t), rt(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) th(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        th(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (_n === null || !_n.has(r)))
        ) {
          (e = Wr(n, e)), (e = cv(t, e, 1)), (t = Cn(t, e, 1)), (e = qe()), t !== null && (pi(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function oE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (Ie & n) === n &&
      (Te === 4 || (Te === 3 && (Ie & 130023424) === Ie && 500 > xe() - Vc) ? qn(e, 0) : (Bc |= n)),
    rt(e, t);
}
function Mv(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Li), (Li <<= 1), !(Li & 130023424) && (Li = 4194304)) : (t = 1));
  var n = qe();
  (e = on(e, t)), e !== null && (pi(e, t, n), rt(e, n));
}
function iE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mv(e, n);
}
function lE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), Mv(e, n);
}
var Lv;
Lv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), KS(e, t, n);
      et = !!(e.flags & 131072);
    }
  else (et = !1), me && t.flags & 1048576 && Fm(t, Ml, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ol(e, t), (e = t.pendingProps);
      var o = jr(t, We.current);
      br(t, n), (o = Nc(null, t, r, e, o, n));
      var i = Ic();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            nt(r) ? ((i = !0), Tl(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Lc(t),
            (o.updater = xs),
            (t.stateNode = o),
            (o._reactInternals = t),
            Cu(t, r, e, n),
            (t = Ru(null, t, r, !0, i, n)))
          : ((t.tag = 0), me && i && _c(t), Qe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ol(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = aE(r)),
          (e = Rt(r, e)),
          o)
        ) {
          case 0:
            t = ku(null, t, r, e, n);
            break e;
          case 1:
            t = Wd(null, t, r, e, n);
            break e;
          case 11:
            t = Vd(null, t, r, e, n);
            break e;
          case 14:
            t = Hd(null, t, r, Rt(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Rt(r, o)), ku(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Rt(r, o)), Wd(e, t, r, o, n);
    case 3:
      e: {
        if ((pv(t), e === null)) throw Error(M(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), zm(e, t), bl(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Wr(Error(M(423)), t)), (t = Qd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Wr(Error(M(424)), t)), (t = Qd(e, t, r, n, o));
            break e;
          } else
            for (
              at = xn(t.stateNode.containerInfo.firstChild),
                ft = t,
                me = !0,
                Ot = null,
                n = Bm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Br(), r === o)) {
            t = ln(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Vm(t),
        e === null && Su(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        mu(r, o) ? (l = null) : i !== null && mu(r, i) && (t.flags |= 32),
        hv(e, t),
        Qe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Su(t), null;
    case 13:
      return mv(e, t, n);
    case 4:
      return (
        Dc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vr(t, null, r, n)) : Qe(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Rt(r, o)), Vd(e, t, r, o, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          fe(Ll, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (At(i.value, l)) {
            if (i.children === o.children && !tt.current) {
              t = ln(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = tn(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? (a.next = a) : ((a.next = f.next), (f.next = a)), (u.pending = a);
                      }
                    }
                    (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), Eu(i.return, n, t), (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(M(341));
                (l.lanes |= n), (s = l.alternate), s !== null && (s.lanes |= n), Eu(l, n, t), (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Qe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        br(t, n),
        (o = xt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Qe(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = Rt(r, t.pendingProps)), (o = Rt(r.type, o)), Hd(e, t, r, o, n);
    case 15:
      return fv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Rt(r, o)),
        ol(e, t),
        (t.tag = 1),
        nt(r) ? ((e = !0), Tl(t)) : (e = !1),
        br(t, n),
        Um(t, r, o),
        Cu(t, r, o, n),
        Ru(null, t, r, !0, e, n)
      );
    case 19:
      return vv(e, t, n);
    case 22:
      return dv(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Dv(e, t) {
  return om(e, t);
}
function sE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function St(e, t, n, r) {
  return new sE(e, t, n, r);
}
function Kc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function aE(e) {
  if (typeof e == 'function') return Kc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dc)) return 11;
    if (e === hc) return 14;
  }
  return 2;
}
function Rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = St(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function sl(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) Kc(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case hr:
        return Gn(n.children, o, i, t);
      case fc:
        (l = 8), (o |= 8);
        break;
      case Ka:
        return (e = St(12, n, t, o | 2)), (e.elementType = Ka), (e.lanes = i), e;
      case qa:
        return (e = St(13, n, t, o)), (e.elementType = qa), (e.lanes = i), e;
      case Ga:
        return (e = St(19, n, t, o)), (e.elementType = Ga), (e.lanes = i), e;
      case jp:
        return Rs(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case $p:
              l = 10;
              break e;
            case Up:
              l = 9;
              break e;
            case dc:
              l = 11;
              break e;
            case hc:
              l = 14;
              break e;
            case dn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ''));
    }
  return (t = St(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Gn(e, t, n, r) {
  return (e = St(7, e, r, t)), (e.lanes = n), e;
}
function Rs(e, t, n, r) {
  return (e = St(22, e, r, t)), (e.elementType = jp), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function xa(e, t, n) {
  return (e = St(6, e, null, t)), (e.lanes = n), e;
}
function Ca(e, t, n) {
  return (
    (t = St(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function uE(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ra(0)),
    (this.expirationTimes = ra(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ra(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function qc(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new uE(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = St(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Lc(i),
    e
  );
}
function cE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: dr, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function bv(e) {
  if (!e) return Ln;
  e = e._reactInternals;
  e: {
    if (ir(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (nt(n)) return Dm(e, n, t);
  }
  return t;
}
function Fv(e, t, n, r, o, i, l, s, a) {
  return (
    (e = qc(n, r, !0, e, o, i, l, s, a)),
    (e.context = bv(null)),
    (n = e.current),
    (r = qe()),
    (o = kn(n)),
    (i = tn(r, o)),
    (i.callback = t ?? null),
    Cn(n, i, o),
    (e.current.lanes = o),
    pi(e, o, r),
    rt(e, r),
    e
  );
}
function Ps(e, t, n, r) {
  var o = t.current,
    i = qe(),
    l = kn(o);
  return (
    (n = bv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tn(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Cn(o, t, l)),
    e !== null && (bt(e, o, l, i), tl(e, o, l)),
    l
  );
}
function jl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function nh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gc(e, t) {
  nh(e, t), (e = e.alternate) && nh(e, t);
}
function fE() {
  return null;
}
var Av =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yc(e) {
  this._internalRoot = e;
}
Ts.prototype.render = Yc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Ps(e, t, null, null);
};
Ts.prototype.unmount = Yc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nr(function () {
      Ps(null, e, null, null);
    }),
      (t[rn] = null);
  }
};
function Ts(e) {
  this._internalRoot = e;
}
Ts.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = fm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mn.length && t !== 0 && t < mn[n].priority; n++);
    mn.splice(n, 0, e), n === 0 && hm(e);
  }
};
function Xc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Os(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function rh() {}
function dE(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = jl(l);
        i.call(u);
      };
    }
    var l = Fv(t, r, e, 0, null, !1, !1, '', rh);
    return (e._reactRootContainer = l), (e[rn] = l.current), Jo(e.nodeType === 8 ? e.parentNode : e), nr(), l;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var u = jl(a);
      s.call(u);
    };
  }
  var a = qc(e, 0, !1, null, null, !1, !1, '', rh);
  return (
    (e._reactRootContainer = a),
    (e[rn] = a.current),
    Jo(e.nodeType === 8 ? e.parentNode : e),
    nr(function () {
      Ps(t, a, n, r);
    }),
    a
  );
}
function Ms(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var a = jl(l);
        s.call(a);
      };
    }
    Ps(t, l, e, o);
  } else l = dE(n, t, e, o, r);
  return jl(l);
}
um = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wo(t.pendingLanes);
        n !== 0 && (vc(t, n | 1), rt(t, xe()), !(ne & 6) && ((Qr = xe() + 500), Nn()));
      }
      break;
    case 13:
      nr(function () {
        var r = on(e, 1);
        if (r !== null) {
          var o = qe();
          bt(r, e, 1, o);
        }
      }),
        Gc(e, 1);
  }
};
gc = function (e) {
  if (e.tag === 13) {
    var t = on(e, 134217728);
    if (t !== null) {
      var n = qe();
      bt(t, e, 134217728, n);
    }
    Gc(e, 134217728);
  }
};
cm = function (e) {
  if (e.tag === 13) {
    var t = kn(e),
      n = on(e, t);
    if (n !== null) {
      var r = qe();
      bt(n, e, t, r);
    }
    Gc(e, t);
  }
};
fm = function () {
  return se;
};
dm = function (e, t) {
  var n = se;
  try {
    return (se = e), t();
  } finally {
    se = n;
  }
};
iu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ja(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ss(r);
            if (!o) throw Error(M(90));
            Vp(r), Ja(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Wp(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Or(e, !!n.multiple, t, !1);
  }
};
Jp = Hc;
Zp = nr;
var hE = { usingClientEntryPoint: !1, Events: [vi, gr, Ss, Yp, Xp, Hc] },
  vo = { findFiberByHostInstance: Bn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
  pE = {
    bundleType: vo.bundleType,
    version: vo.version,
    rendererPackageName: vo.rendererPackageName,
    rendererConfig: vo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = nm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vo.findFiberByHostInstance || fE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Bi.isDisabled && Bi.supportsFiber)
    try {
      (vs = Bi.inject(pE)), (Vt = Bi);
    } catch {}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hE;
pt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xc(t)) throw Error(M(200));
  return cE(e, t, null, n);
};
pt.createRoot = function (e, t) {
  if (!Xc(e)) throw Error(M(299));
  var n = !1,
    r = '',
    o = Av;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = qc(e, 1, !1, null, null, n, !1, r, o)),
    (e[rn] = t.current),
    Jo(e.nodeType === 8 ? e.parentNode : e),
    new Yc(t)
  );
};
pt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(M(188)) : ((e = Object.keys(e).join(',')), Error(M(268, e)));
  return (e = nm(t)), (e = e === null ? null : e.stateNode), e;
};
pt.flushSync = function (e) {
  return nr(e);
};
pt.hydrate = function (e, t, n) {
  if (!Os(t)) throw Error(M(200));
  return Ms(null, e, t, !0, n);
};
pt.hydrateRoot = function (e, t, n) {
  if (!Xc(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Av;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Fv(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[rn] = t.current),
    Jo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ts(t);
};
pt.render = function (e, t, n) {
  if (!Os(t)) throw Error(M(200));
  return Ms(null, e, t, !1, n);
};
pt.unmountComponentAtNode = function (e) {
  if (!Os(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (nr(function () {
        Ms(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rn] = null);
        });
      }),
      !0)
    : !1;
};
pt.unstable_batchedUpdates = Hc;
pt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Os(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Ms(e, t, n, !1, r);
};
pt.version = '18.2.0-next-9e3b772b8-20220608';
function Nv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv);
    } catch (e) {
      console.error(e);
    }
}
Nv(), (Fp.exports = pt);
var Jc = Fp.exports;
const mE = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, 'current');
  }
  return {
    name: 'arrow',
    options: e,
    fn(n) {
      const { element: r, padding: o } = typeof e == 'function' ? e(n) : e;
      return r && t(r)
        ? r.current != null
          ? qf({ element: r.current, padding: o }).fn(n)
          : {}
        : r
        ? qf({ element: r, padding: o }).fn(n)
        : {};
    },
  };
};
var al = typeof document < 'u' ? S.useLayoutEffect : S.useEffect;
function Bl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == 'function' && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Bl(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === '_owner' && e.$$typeof) && !Bl(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Iv(e) {
  return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function oh(e, t) {
  const n = Iv(e);
  return Math.round(t * n) / n;
}
function ih(e) {
  const t = S.useRef(e);
  return (
    al(() => {
      t.current = e;
    }),
    t
  );
}
function vE(e) {
  e === void 0 && (e = {});
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: l } = {},
      transform: s = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [f, h] = S.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
    [p, v] = S.useState(r);
  Bl(p, r) || v(r);
  const [g, m] = S.useState(null),
    [w, c] = S.useState(null),
    d = S.useCallback(
      (z) => {
        z != _.current && ((_.current = z), m(z));
      },
      [m]
    ),
    y = S.useCallback(
      (z) => {
        z !== x.current && ((x.current = z), c(z));
      },
      [c]
    ),
    E = i || g,
    C = l || w,
    _ = S.useRef(null),
    x = S.useRef(null),
    k = S.useRef(f),
    L = ih(a),
    N = ih(o),
    D = S.useCallback(() => {
      if (!_.current || !x.current) return;
      const z = { placement: t, strategy: n, middleware: p };
      N.current && (z.platform = N.current),
        fw(_.current, x.current, z).then((G) => {
          const T = { ...G, isPositioned: !0 };
          B.current &&
            !Bl(k.current, T) &&
            ((k.current = T),
            Jc.flushSync(() => {
              h(T);
            }));
        });
    }, [p, t, n, N]);
  al(() => {
    u === !1 && k.current.isPositioned && ((k.current.isPositioned = !1), h((z) => ({ ...z, isPositioned: !1 })));
  }, [u]);
  const B = S.useRef(!1);
  al(
    () => (
      (B.current = !0),
      () => {
        B.current = !1;
      }
    ),
    []
  ),
    al(() => {
      if ((E && (_.current = E), C && (x.current = C), E && C)) {
        if (L.current) return L.current(E, C, D);
        D();
      }
    }, [E, C, D, L]);
  const b = S.useMemo(() => ({ reference: _, floating: x, setReference: d, setFloating: y }), [d, y]),
    F = S.useMemo(() => ({ reference: E, floating: C }), [E, C]),
    U = S.useMemo(() => {
      const z = { position: n, left: 0, top: 0 };
      if (!F.floating) return z;
      const G = oh(F.floating, f.x),
        T = oh(F.floating, f.y);
      return s
        ? {
            ...z,
            transform: 'translate(' + G + 'px, ' + T + 'px)',
            ...(Iv(F.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: G, top: T };
    }, [n, s, F.floating, f.x, f.y]);
  return S.useMemo(() => ({ ...f, update: D, refs: b, elements: F, floatingStyles: U }), [f, D, b, F, U]);
}
var zv = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ur = new WeakMap(),
  Vi = new WeakMap(),
  Hi = {},
  _a = 0,
  $v = function (e) {
    return e && (e.host || $v(e.parentNode));
  },
  gE = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = $v(n);
        return r && e.contains(r)
          ? r
          : (console.error('aria-hidden', n, 'in not contained inside', e, '. Doing nothing'), null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Uv = function (e, t, n, r) {
    var o = gE(t, Array.isArray(e) ? e : [e]);
    Hi[n] || (Hi[n] = new WeakMap());
    var i = Hi[n],
      l = [],
      s = new Set(),
      a = new Set(o),
      u = function (h) {
        !h || s.has(h) || (s.add(h), u(h.parentNode));
      };
    o.forEach(u);
    var f = function (h) {
      !h ||
        a.has(h) ||
        Array.prototype.forEach.call(h.children, function (p) {
          if (s.has(p)) f(p);
          else {
            var v = p.getAttribute(r),
              g = v !== null && v !== 'false',
              m = (ur.get(p) || 0) + 1,
              w = (i.get(p) || 0) + 1;
            ur.set(p, m),
              i.set(p, w),
              l.push(p),
              m === 1 && g && Vi.set(p, !0),
              w === 1 && p.setAttribute(n, 'true'),
              g || p.setAttribute(r, 'true');
          }
        });
    };
    return (
      f(t),
      s.clear(),
      _a++,
      function () {
        l.forEach(function (h) {
          var p = ur.get(h) - 1,
            v = i.get(h) - 1;
          ur.set(h, p), i.set(h, v), p || (Vi.has(h) || h.removeAttribute(r), Vi.delete(h)), v || h.removeAttribute(n);
        }),
          _a--,
          _a || ((ur = new WeakMap()), (ur = new WeakMap()), (Vi = new WeakMap()), (Hi = {}));
      }
    );
  },
  jv = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || zv(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))), Uv(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  yE = function (e, t, n) {
    n === void 0 && (n = 'data-inert-ed');
    var r = t || zv(e);
    return r
      ? Uv(e, r, n, 'inert')
      : function () {
          return null;
        };
  },
  Bv = function () {
    return typeof HTMLElement < 'u' && HTMLElement.prototype.hasOwnProperty('inert');
  },
  wE = function (e, t, n) {
    return n === void 0 && (n = 'data-suppressed'), (Bv() ? yE : jv)(e, t, n);
  };
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var SE = [
    'input:not([inert])',
    'select:not([inert])',
    'textarea:not([inert])',
    'a[href]:not([inert])',
    'button:not([inert])',
    '[tabindex]:not(slot):not([inert])',
    'audio[controls]:not([inert])',
    'video[controls]:not([inert])',
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    'details>summary:first-of-type:not([inert])',
    'details:not([inert])',
  ],
  zu = SE.join(','),
  Vv = typeof Element > 'u',
  si = Vv
    ? function () {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  Vl =
    !Vv && Element.prototype.getRootNode
      ? function (e) {
          var t;
          return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
        }
      : function (e) {
          return e == null ? void 0 : e.ownerDocument;
        },
  Hl = function e(t, n) {
    var r;
    n === void 0 && (n = !0);
    var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, 'inert'),
      i = o === '' || o === 'true',
      l = i || (n && t && e(t.parentNode));
    return l;
  },
  EE = function (t) {
    var n,
      r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, 'contenteditable');
    return r === '' || r === 'true';
  },
  xE = function (t, n, r) {
    if (Hl(t)) return [];
    var o = Array.prototype.slice.apply(t.querySelectorAll(zu));
    return n && si.call(t, zu) && o.unshift(t), (o = o.filter(r)), o;
  },
  CE = function e(t, n, r) {
    for (var o = [], i = Array.from(t); i.length; ) {
      var l = i.shift();
      if (!Hl(l, !1))
        if (l.tagName === 'SLOT') {
          var s = l.assignedElements(),
            a = s.length ? s : l.children,
            u = e(a, !0, r);
          r.flatten ? o.push.apply(o, u) : o.push({ scopeParent: l, candidates: u });
        } else {
          var f = si.call(l, zu);
          f && r.filter(l) && (n || !t.includes(l)) && o.push(l);
          var h = l.shadowRoot || (typeof r.getShadowRoot == 'function' && r.getShadowRoot(l)),
            p = !Hl(h, !1) && (!r.shadowRootFilter || r.shadowRootFilter(l));
          if (h && p) {
            var v = e(h === !0 ? l.children : h.children, !0, r);
            r.flatten ? o.push.apply(o, v) : o.push({ scopeParent: l, candidates: v });
          } else i.unshift.apply(i, l.children);
        }
    }
    return o;
  },
  Hv = function (t) {
    return !isNaN(parseInt(t.getAttribute('tabindex'), 10));
  },
  Wv = function (t) {
    if (!t) throw new Error('No node provided');
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || EE(t)) && !Hv(t) ? 0 : t.tabIndex;
  },
  _E = function (t, n) {
    var r = Wv(t);
    return r < 0 && n && !Hv(t) ? 0 : r;
  },
  kE = function (t, n) {
    return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
  },
  Qv = function (t) {
    return t.tagName === 'INPUT';
  },
  RE = function (t) {
    return Qv(t) && t.type === 'hidden';
  },
  PE = function (t) {
    var n =
      t.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(t.children).some(function (r) {
        return r.tagName === 'SUMMARY';
      });
    return n;
  },
  TE = function (t, n) {
    for (var r = 0; r < t.length; r++) if (t[r].checked && t[r].form === n) return t[r];
  },
  OE = function (t) {
    if (!t.name) return !0;
    var n = t.form || Vl(t),
      r = function (s) {
        return n.querySelectorAll('input[type="radio"][name="' + s + '"]');
      },
      o;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      o = r(window.CSS.escape(t.name));
    else
      try {
        o = r(t.name);
      } catch (l) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            l.message
          ),
          !1
        );
      }
    var i = TE(o, t.form);
    return !i || i === t;
  },
  ME = function (t) {
    return Qv(t) && t.type === 'radio';
  },
  LE = function (t) {
    return ME(t) && !OE(t);
  },
  DE = function (t) {
    var n,
      r = t && Vl(t),
      o = (n = r) === null || n === void 0 ? void 0 : n.host,
      i = !1;
    if (r && r !== t) {
      var l, s, a;
      for (
        i = !!(
          ((l = o) !== null && l !== void 0 && (s = l.ownerDocument) !== null && s !== void 0 && s.contains(o)) ||
          (t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t))
        );
        !i && o;

      ) {
        var u, f, h;
        (r = Vl(o)),
          (o = (u = r) === null || u === void 0 ? void 0 : u.host),
          (i = !!((f = o) !== null && f !== void 0 && (h = f.ownerDocument) !== null && h !== void 0 && h.contains(o)));
      }
    }
    return i;
  },
  lh = function (t) {
    var n = t.getBoundingClientRect(),
      r = n.width,
      o = n.height;
    return r === 0 && o === 0;
  },
  bE = function (t, n) {
    var r = n.displayCheck,
      o = n.getShadowRoot;
    if (getComputedStyle(t).visibility === 'hidden') return !0;
    var i = si.call(t, 'details>summary:first-of-type'),
      l = i ? t.parentElement : t;
    if (si.call(l, 'details:not([open]) *')) return !0;
    if (!r || r === 'full' || r === 'legacy-full') {
      if (typeof o == 'function') {
        for (var s = t; t; ) {
          var a = t.parentElement,
            u = Vl(t);
          if (a && !a.shadowRoot && o(a) === !0) return lh(t);
          t.assignedSlot ? (t = t.assignedSlot) : !a && u !== t.ownerDocument ? (t = u.host) : (t = a);
        }
        t = s;
      }
      if (DE(t)) return !t.getClientRects().length;
      if (r !== 'legacy-full') return !0;
    } else if (r === 'non-zero-area') return lh(t);
    return !1;
  },
  FE = function (t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
      for (var n = t.parentElement; n; ) {
        if (n.tagName === 'FIELDSET' && n.disabled) {
          for (var r = 0; r < n.children.length; r++) {
            var o = n.children.item(r);
            if (o.tagName === 'LEGEND') return si.call(n, 'fieldset[disabled] *') ? !0 : !o.contains(t);
          }
          return !0;
        }
        n = n.parentElement;
      }
    return !1;
  },
  AE = function (t, n) {
    return !(n.disabled || Hl(n) || RE(n) || bE(n, t) || PE(n) || FE(n));
  },
  sh = function (t, n) {
    return !(LE(n) || Wv(n) < 0 || !AE(t, n));
  },
  NE = function (t) {
    var n = parseInt(t.getAttribute('tabindex'), 10);
    return !!(isNaN(n) || n >= 0);
  },
  IE = function e(t) {
    var n = [],
      r = [];
    return (
      t.forEach(function (o, i) {
        var l = !!o.scopeParent,
          s = l ? o.scopeParent : o,
          a = _E(s, l),
          u = l ? e(o.candidates) : s;
        a === 0
          ? l
            ? n.push.apply(n, u)
            : n.push(s)
          : r.push({ documentOrder: i, tabIndex: a, item: o, isScope: l, content: u });
      }),
      r
        .sort(kE)
        .reduce(function (o, i) {
          return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
        }, [])
        .concat(n)
    );
  },
  Zc = function (t, n) {
    n = n || {};
    var r;
    return (
      n.getShadowRoot
        ? (r = CE([t], n.includeContainer, {
            filter: sh.bind(null, n),
            flatten: !1,
            getShadowRoot: n.getShadowRoot,
            shadowRootFilter: NE,
          }))
        : (r = xE(t, n.includeContainer, sh.bind(null, n))),
      IE(r)
    );
  };
function Kr() {
  return (
    (Kr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Kr.apply(this, arguments)
  );
}
var ut = typeof document < 'u' ? S.useLayoutEffect : S.useEffect;
let ka = !1,
  zE = 0;
const ah = () => 'floating-ui-' + zE++;
function $E() {
  const [e, t] = S.useState(() => (ka ? ah() : void 0));
  return (
    ut(() => {
      e == null && t(ah());
    }, []),
    S.useEffect(() => {
      ka || (ka = !0);
    }, []),
    e
  );
}
const UE = fl['useId'.toString()],
  Ls = UE || $E,
  jE = S.forwardRef(function (t, n) {
    let {
      context: {
        placement: r,
        elements: { floating: o },
        middlewareData: { arrow: i },
      },
      width: l = 14,
      height: s = 7,
      tipRadius: a = 0,
      strokeWidth: u = 0,
      staticOffset: f,
      stroke: h,
      d: p,
      style: { transform: v, ...g } = {},
      ...m
    } = t;
    const w = Ls();
    if (!o) return null;
    u *= 2;
    const c = u / 2,
      d = (l / 2) * (a / -8 + 1),
      y = ((s / 2) * a) / 4,
      [E, C] = r.split('-'),
      _ = bp.isRTL(o),
      x = !!p,
      k = E === 'top' || E === 'bottom',
      L = f && C === 'end' ? 'bottom' : 'top';
    let N = f && C === 'end' ? 'right' : 'left';
    f && _ && (N = C === 'end' ? 'left' : 'right');
    const D = (i == null ? void 0 : i.x) != null ? f || i.x : '',
      B = (i == null ? void 0 : i.y) != null ? f || i.y : '',
      b =
        p ||
        'M0,0' +
          (' H' + l) +
          (' L' + (l - d) + ',' + (s - y)) +
          (' Q' + l / 2 + ',' + s + ' ' + d + ',' + (s - y)) +
          ' Z',
      F = {
        top: x ? 'rotate(180deg)' : '',
        left: x ? 'rotate(90deg)' : 'rotate(-90deg)',
        bottom: x ? '' : 'rotate(180deg)',
        right: x ? 'rotate(-90deg)' : 'rotate(90deg)',
      }[E];
    return S.createElement(
      'svg',
      Kr({}, m, {
        'aria-hidden': !0,
        ref: n,
        width: x ? l : l + u,
        height: l,
        viewBox: '0 0 ' + l + ' ' + (s > l ? s : l),
        style: {
          position: 'absolute',
          pointerEvents: 'none',
          [N]: D,
          [L]: B,
          [E]: k || x ? '100%' : 'calc(100% - ' + u / 2 + 'px)',
          transform: '' + F + (v ?? ''),
          ...g,
        },
      }),
      u > 0 &&
        S.createElement('path', {
          clipPath: 'url(#' + w + ')',
          fill: 'none',
          stroke: h,
          strokeWidth: u + (p ? 0 : 1),
          d: b,
        }),
      S.createElement('path', { stroke: u && !p ? m.fill : 'none', d: b }),
      S.createElement(
        'clipPath',
        { id: w },
        S.createElement('rect', { x: -c, y: c * (x ? -1 : 1), width: l + u, height: l })
      )
    );
  });
function BE() {
  const e = new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...(e.get(t) || []), n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    },
  };
}
const VE = S.createContext(null),
  HE = S.createContext(null),
  Kv = () => {
    var e;
    return ((e = S.useContext(VE)) == null ? void 0 : e.id) || null;
  },
  Ds = () => S.useContext(HE);
function Ze(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function qv() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function WE() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? e.brands
        .map((t) => {
          let { brand: n, version: r } = t;
          return n + '/' + r;
        })
        .join(' ')
    : navigator.userAgent;
}
function bs(e) {
  return Ze(e).defaultView || window;
}
function Mt(e) {
  return e ? e instanceof Element || e instanceof bs(e).Element : !1;
}
function qr(e) {
  return e ? e instanceof HTMLElement || e instanceof bs(e).HTMLElement : !1;
}
function QE(e) {
  if (typeof ShadowRoot > 'u') return !1;
  const t = bs(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function KE(e) {
  if (e.mozInputSource === 0 && e.isTrusted) return !0;
  const t = /Android/i;
  return (t.test(qv()) || t.test(WE())) && e.pointerType
    ? e.type === 'click' && e.buttons === 1
    : e.detail === 0 && !e.pointerType;
}
function qE(e) {
  return (
    (e.width === 0 && e.height === 0) ||
    (e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== 'mouse') ||
    (e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0)
  );
}
function GE() {
  return /apple/i.test(navigator.vendor);
}
function Wl(e, t) {
  const n = ['mouse', 'pen'];
  return t || n.push('', void 0), n.includes(e);
}
function YE(e) {
  return 'nativeEvent' in e;
}
function Xe(e, t) {
  if (!e || !t) return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && QE(n)) {
    let r = t;
    for (; r; ) {
      if (e === r) return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Pn(e) {
  return 'data-floating-ui-' + e;
}
function Lo(e) {
  const t = S.useRef(e);
  return (
    ut(() => {
      t.current = e;
    }),
    t
  );
}
const uh = Pn('safe-polygon');
function Ra(e, t, n) {
  return n && !Wl(n) ? 0 : typeof e == 'number' ? e : e == null ? void 0 : e[t];
}
function XE(e, t) {
  t === void 0 && (t = {});
  const {
      open: n,
      onOpenChange: r,
      dataRef: o,
      events: i,
      elements: { domReference: l, floating: s },
      refs: a,
    } = e,
    { enabled: u = !0, delay: f = 0, handleClose: h = null, mouseOnly: p = !1, restMs: v = 0, move: g = !0 } = t,
    m = Ds(),
    w = Kv(),
    c = Lo(h),
    d = Lo(f),
    y = S.useRef(),
    E = S.useRef(),
    C = S.useRef(),
    _ = S.useRef(),
    x = S.useRef(!0),
    k = S.useRef(!1),
    L = S.useRef(() => {}),
    N = S.useCallback(() => {
      var F;
      const U = (F = o.current.openEvent) == null ? void 0 : F.type;
      return (U == null ? void 0 : U.includes('mouse')) && U !== 'mousedown';
    }, [o]);
  S.useEffect(() => {
    if (!u) return;
    function F() {
      clearTimeout(E.current), clearTimeout(_.current), (x.current = !0);
    }
    return (
      i.on('dismiss', F),
      () => {
        i.off('dismiss', F);
      }
    );
  }, [u, i]),
    S.useEffect(() => {
      if (!u || !c.current || !n) return;
      function F(z) {
        N() && r(!1, z);
      }
      const U = Ze(s).documentElement;
      return (
        U.addEventListener('mouseleave', F),
        () => {
          U.removeEventListener('mouseleave', F);
        }
      );
    }, [s, n, r, u, c, o, N]);
  const D = S.useCallback(
      function (F, U) {
        U === void 0 && (U = !0);
        const z = Ra(d.current, 'close', y.current);
        z && !C.current
          ? (clearTimeout(E.current), (E.current = setTimeout(() => r(!1, F), z)))
          : U && (clearTimeout(E.current), r(!1, F));
      },
      [d, r]
    ),
    B = S.useCallback(() => {
      L.current(), (C.current = void 0);
    }, []),
    b = S.useCallback(() => {
      if (k.current) {
        const F = Ze(a.floating.current).body;
        (F.style.pointerEvents = ''), F.removeAttribute(uh), (k.current = !1);
      }
    }, [a]);
  return (
    S.useEffect(() => {
      if (!u) return;
      function F() {
        return o.current.openEvent ? ['click', 'mousedown'].includes(o.current.openEvent.type) : !1;
      }
      function U(T) {
        if (
          (clearTimeout(E.current), (x.current = !1), (p && !Wl(y.current)) || (v > 0 && Ra(d.current, 'open') === 0))
        )
          return;
        const H = Ra(d.current, 'open', y.current);
        H
          ? (E.current = setTimeout(() => {
              r(!0, T);
            }, H))
          : r(!0, T);
      }
      function z(T) {
        if (F()) return;
        L.current();
        const H = Ze(s);
        if ((clearTimeout(_.current), c.current)) {
          n || clearTimeout(E.current),
            (C.current = c.current({
              ...e,
              tree: m,
              x: T.clientX,
              y: T.clientY,
              onClose() {
                b(), B(), D(T);
              },
            }));
          const I = C.current;
          H.addEventListener('mousemove', I),
            (L.current = () => {
              H.removeEventListener('mousemove', I);
            });
          return;
        }
        (y.current === 'touch' ? !Xe(s, T.relatedTarget) : !0) && D(T);
      }
      function G(T) {
        F() ||
          c.current == null ||
          c.current({
            ...e,
            tree: m,
            x: T.clientX,
            y: T.clientY,
            onClose() {
              b(), B(), D(T);
            },
          })(T);
      }
      if (Mt(l)) {
        const T = l;
        return (
          n && T.addEventListener('mouseleave', G),
          s == null || s.addEventListener('mouseleave', G),
          g && T.addEventListener('mousemove', U, { once: !0 }),
          T.addEventListener('mouseenter', U),
          T.addEventListener('mouseleave', z),
          () => {
            n && T.removeEventListener('mouseleave', G),
              s == null || s.removeEventListener('mouseleave', G),
              g && T.removeEventListener('mousemove', U),
              T.removeEventListener('mouseenter', U),
              T.removeEventListener('mouseleave', z);
          }
        );
      }
    }, [l, s, u, e, p, v, g, D, B, b, r, n, m, d, c, o]),
    ut(() => {
      var F;
      if (u && n && (F = c.current) != null && F.__options.blockPointerEvents && N()) {
        const G = Ze(s).body;
        if ((G.setAttribute(uh, ''), (G.style.pointerEvents = 'none'), (k.current = !0), Mt(l) && s)) {
          var U, z;
          const T = l,
            H =
              m == null || (U = m.nodesRef.current.find((K) => K.id === w)) == null || (z = U.context) == null
                ? void 0
                : z.elements.floating;
          return (
            H && (H.style.pointerEvents = ''),
            (T.style.pointerEvents = 'auto'),
            (s.style.pointerEvents = 'auto'),
            () => {
              (T.style.pointerEvents = ''), (s.style.pointerEvents = '');
            }
          );
        }
      }
    }, [u, n, w, s, l, m, c, o, N]),
    ut(() => {
      n || ((y.current = void 0), B(), b());
    }, [n, B, b]),
    S.useEffect(
      () => () => {
        B(), clearTimeout(E.current), clearTimeout(_.current), b();
      },
      [u, B, b]
    ),
    S.useMemo(() => {
      if (!u) return {};
      function F(U) {
        y.current = U.pointerType;
      }
      return {
        reference: {
          onPointerDown: F,
          onPointerEnter: F,
          onMouseMove(U) {
            n ||
              v === 0 ||
              (clearTimeout(_.current),
              (_.current = setTimeout(() => {
                x.current || r(!0, U.nativeEvent);
              }, v)));
          },
        },
        floating: {
          onMouseEnter() {
            clearTimeout(E.current);
          },
          onMouseLeave(U) {
            i.emit('dismiss', { type: 'mouseLeave', data: { returnFocus: !1 } }), D(U.nativeEvent, !1);
          },
        },
      };
    }, [i, u, v, n, r, D])
  );
}
function Un(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
let ch = 0;
function In(e, t) {
  t === void 0 && (t = {});
  const { preventScroll: n = !1, cancelPrevious: r = !0, sync: o = !1 } = t;
  r && cancelAnimationFrame(ch);
  const i = () => (e == null ? void 0 : e.focus({ preventScroll: n }));
  o ? i() : (ch = requestAnimationFrame(i));
}
function JE(e, t) {
  var n;
  let r = [],
    o = (n = e.find((i) => i.id === t)) == null ? void 0 : n.parentId;
  for (; o; ) {
    const i = e.find((l) => l.id === o);
    (o = i == null ? void 0 : i.parentId), i && (r = r.concat(i));
  }
  return r;
}
function Do(e, t) {
  let n = e.filter((o) => {
      var i;
      return o.parentId === t && ((i = o.context) == null ? void 0 : i.open);
    }),
    r = n;
  for (; r.length; )
    (r = e.filter((o) => {
      var i;
      return (i = r) == null
        ? void 0
        : i.some((l) => {
            var s;
            return o.parentId === l.id && ((s = o.context) == null ? void 0 : s.open);
          });
    })),
      (n = n.concat(r));
  return n;
}
function Gv(e) {
  return 'composedPath' in e ? e.composedPath()[0] : e.target;
}
const ZE =
  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Yv(e) {
  return qr(e) && e.matches(ZE);
}
function Pa(e) {
  e.preventDefault(), e.stopPropagation();
}
const ef = () => ({
  getShadowRoot: !0,
  displayCheck:
    typeof ResizeObserver == 'function' && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none',
});
function Xv(e, t) {
  const n = Zc(e, ef());
  t === 'prev' && n.reverse();
  const r = n.indexOf(Un(Ze(e)));
  return n.slice(r + 1)[0];
}
function Jv() {
  return Xv(document.body, 'next');
}
function Zv() {
  return Xv(document.body, 'prev');
}
function bo(e, t) {
  const n = t || e.currentTarget,
    r = e.relatedTarget;
  return !r || !Xe(n, r);
}
function ex(e) {
  Zc(e, ef()).forEach((n) => {
    (n.dataset.tabindex = n.getAttribute('tabindex') || ''), n.setAttribute('tabindex', '-1');
  });
}
function tx(e) {
  e.querySelectorAll('[data-tabindex]').forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute('tabindex', r) : n.removeAttribute('tabindex');
  });
}
const tf = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'fixed',
  whiteSpace: 'nowrap',
  width: '1px',
  top: 0,
  left: 0,
};
let nx;
function fh(e) {
  e.key === 'Tab' && (e.target, clearTimeout(nx));
}
const Ql = S.forwardRef(function (t, n) {
    const [r, o] = S.useState();
    ut(
      () => (
        GE() && o('button'),
        document.addEventListener('keydown', fh),
        () => {
          document.removeEventListener('keydown', fh);
        }
      ),
      []
    );
    const i = { ref: n, tabIndex: 0, role: r, 'aria-hidden': r ? void 0 : !0, [Pn('focus-guard')]: '', style: tf };
    return S.createElement('span', Kr({}, t, i));
  }),
  eg = S.createContext(null);
function rx(e) {
  let { id: t, root: n } = e === void 0 ? {} : e;
  const [r, o] = S.useState(null),
    i = Ls(),
    l = tg(),
    s = S.useMemo(() => ({ id: t, root: n, portalContext: l, uniqueId: i }), [t, n, l, i]),
    a = S.useRef();
  return (
    ut(
      () => () => {
        r == null || r.remove();
      },
      [r, s]
    ),
    ut(() => {
      if (a.current === s) return;
      a.current = s;
      const { id: u, root: f, portalContext: h, uniqueId: p } = s,
        v = u ? document.getElementById(u) : null,
        g = Pn('portal');
      if (v) {
        const m = document.createElement('div');
        (m.id = p), m.setAttribute(g, ''), v.appendChild(m), o(m);
      } else {
        let m = f || (h == null ? void 0 : h.portalNode);
        m && !Mt(m) && (m = m.current), (m = m || document.body);
        let w = null;
        u && ((w = document.createElement('div')), (w.id = u), m.appendChild(w));
        const c = document.createElement('div');
        (c.id = p), c.setAttribute(g, ''), (m = w || m), m.appendChild(c), o(c);
      }
    }, [s]),
    r
  );
}
function ox(e) {
  let { children: t, id: n, root: r = null, preserveTabOrder: o = !0 } = e;
  const i = rx({ id: n, root: r }),
    [l, s] = S.useState(null),
    a = S.useRef(null),
    u = S.useRef(null),
    f = S.useRef(null),
    h = S.useRef(null),
    p = !!l && !l.modal && l.open && o && !!(r || i);
  return (
    S.useEffect(() => {
      if (!i || !o || (l != null && l.modal)) return;
      function v(g) {
        i && bo(g) && (g.type === 'focusin' ? tx : ex)(i);
      }
      return (
        i.addEventListener('focusin', v, !0),
        i.addEventListener('focusout', v, !0),
        () => {
          i.removeEventListener('focusin', v, !0), i.removeEventListener('focusout', v, !0);
        }
      );
    }, [i, o, l == null ? void 0 : l.modal]),
    S.createElement(
      eg.Provider,
      {
        value: S.useMemo(
          () => ({
            preserveTabOrder: o,
            beforeOutsideRef: a,
            afterOutsideRef: u,
            beforeInsideRef: f,
            afterInsideRef: h,
            portalNode: i,
            setFocusManagerState: s,
          }),
          [o, i]
        ),
      },
      p &&
        i &&
        S.createElement(Ql, {
          'data-type': 'outside',
          ref: a,
          onFocus: (v) => {
            if (bo(v, i)) {
              var g;
              (g = f.current) == null || g.focus();
            } else {
              const m = Zv() || (l == null ? void 0 : l.refs.domReference.current);
              m == null || m.focus();
            }
          },
        }),
      p && i && S.createElement('span', { 'aria-owns': i.id, style: tf }),
      i && Jc.createPortal(t, i),
      p &&
        i &&
        S.createElement(Ql, {
          'data-type': 'outside',
          ref: u,
          onFocus: (v) => {
            if (bo(v, i)) {
              var g;
              (g = h.current) == null || g.focus();
            } else {
              const m = Jv() || (l == null ? void 0 : l.refs.domReference.current);
              m == null || m.focus(),
                l != null && l.closeOnFocusOut && (l == null || l.onOpenChange(!1, v.nativeEvent));
            }
          },
        })
    )
  );
}
const tg = () => S.useContext(eg),
  ix = S.forwardRef(function (t, n) {
    return S.createElement('button', Kr({}, t, { type: 'button', ref: n, tabIndex: -1, style: tf }));
  });
function u_(e) {
  const {
      context: t,
      children: n,
      disabled: r = !1,
      order: o = ['content'],
      guards: i = !0,
      initialFocus: l = 0,
      returnFocus: s = !0,
      modal: a = !0,
      visuallyHiddenDismiss: u = !1,
      closeOnFocusOut: f = !0,
    } = e,
    {
      open: h,
      refs: p,
      nodeId: v,
      onOpenChange: g,
      events: m,
      dataRef: w,
      elements: { domReference: c, floating: d },
    } = t,
    y = Bv() ? i : !0,
    E = Lo(o),
    C = Lo(l),
    _ = Lo(s),
    x = Ds(),
    k = tg(),
    L = typeof l == 'number' && l < 0,
    N = S.useRef(null),
    D = S.useRef(null),
    B = S.useRef(!1),
    b = S.useRef(null),
    F = S.useRef(!1),
    U = k != null,
    z = c && c.getAttribute('role') === 'combobox' && Yv(c),
    G = S.useCallback(
      function (I) {
        return I === void 0 && (I = d), I ? Zc(I, ef()) : [];
      },
      [d]
    ),
    T = S.useCallback(
      (I) => {
        const Q = G(I);
        return E.current
          .map((X) => (c && X === 'reference' ? c : d && X === 'floating' ? d : Q))
          .filter(Boolean)
          .flat();
      },
      [c, d, E, G]
    );
  S.useEffect(() => {
    if (r || !a) return;
    function I(X) {
      if (X.key === 'Tab') {
        Xe(d, Un(Ze(d))) && G().length === 0 && !z && Pa(X);
        const te = T(),
          de = Gv(X);
        E.current[0] === 'reference' && de === c && (Pa(X), X.shiftKey ? In(te[te.length - 1]) : In(te[1])),
          E.current[1] === 'floating' && de === d && X.shiftKey && (Pa(X), In(te[0]));
      }
    }
    const Q = Ze(d);
    return (
      Q.addEventListener('keydown', I),
      () => {
        Q.removeEventListener('keydown', I);
      }
    );
  }, [r, c, d, a, E, p, z, G, T]),
    S.useEffect(() => {
      if (r || !f) return;
      function I() {
        (F.current = !0),
          setTimeout(() => {
            F.current = !1;
          });
      }
      function Q(X) {
        const te = X.relatedTarget;
        queueMicrotask(() => {
          const de = !(
            Xe(c, te) ||
            Xe(d, te) ||
            Xe(te, d) ||
            Xe(k == null ? void 0 : k.portalNode, te) ||
            (te != null && te.hasAttribute(Pn('focus-guard'))) ||
            (x &&
              (Do(x.nodesRef.current, v).find((ce) => {
                var Fe, Nt;
                return (
                  Xe((Fe = ce.context) == null ? void 0 : Fe.elements.floating, te) ||
                  Xe((Nt = ce.context) == null ? void 0 : Nt.elements.domReference, te)
                );
              }) ||
                JE(x.nodesRef.current, v).find((ce) => {
                  var Fe, Nt;
                  return (
                    ((Fe = ce.context) == null ? void 0 : Fe.elements.floating) === te ||
                    ((Nt = ce.context) == null ? void 0 : Nt.elements.domReference) === te
                  );
                })))
          );
          te && de && !F.current && te !== b.current && ((B.current = !0), g(!1, X));
        });
      }
      if (d && qr(c))
        return (
          c.addEventListener('focusout', Q),
          c.addEventListener('pointerdown', I),
          !a && d.addEventListener('focusout', Q),
          () => {
            c.removeEventListener('focusout', Q),
              c.removeEventListener('pointerdown', I),
              !a && d.removeEventListener('focusout', Q);
          }
        );
    }, [r, c, d, a, v, x, k, g, f]),
    S.useEffect(() => {
      var I;
      if (r) return;
      const Q = Array.from(
        (k == null || (I = k.portalNode) == null ? void 0 : I.querySelectorAll('[' + Pn('portal') + ']')) || []
      );
      if (d && a) {
        const X = [d, ...Q, N.current, D.current].filter((ce) => ce != null),
          de = (y ? jv : wE)(E.current.includes('reference') || z ? X.concat(c || []) : X, void 0, Pn('inert'));
        return () => {
          de();
        };
      }
    }, [r, c, d, a, E, k, z, y]),
    ut(() => {
      if (r || !d) return;
      const I = Ze(d),
        Q = Un(I);
      queueMicrotask(() => {
        const X = T(d),
          te = C.current,
          de = (typeof te == 'number' ? X[te] : te.current) || d,
          ce = Xe(d, Q);
        !L && !ce && h && In(de, { preventScroll: de === d });
      });
    }, [r, h, d, L, T, C]),
    ut(() => {
      if (r || !d) return;
      let I = !1;
      const Q = Ze(d),
        X = Un(Q),
        te = w.current;
      b.current = X;
      function de(ce) {
        if (
          (ce.type === 'escapeKey' && p.domReference.current && (b.current = p.domReference.current),
          ['referencePress', 'escapeKey'].includes(ce.type))
        )
          return;
        const Fe = ce.data.returnFocus;
        typeof Fe == 'object' ? ((B.current = !1), (I = Fe.preventScroll)) : (B.current = !Fe);
      }
      return (
        m.on('dismiss', de),
        () => {
          m.off('dismiss', de);
          const ce = Un(Q);
          (Xe(d, ce) ||
            (x &&
              Do(x.nodesRef.current, v).some((Nt) => {
                var yi;
                return Xe((yi = Nt.context) == null ? void 0 : yi.elements.floating, ce);
              })) ||
            (te.openEvent && ['click', 'mousedown'].includes(te.openEvent.type))) &&
            p.domReference.current &&
            (b.current = p.domReference.current),
            _.current && qr(b.current) && !B.current && In(b.current, { cancelPrevious: !1, preventScroll: I });
        }
      );
    }, [r, d, _, w, p, m, x, v]),
    ut(() => {
      if (!(r || !k))
        return (
          k.setFocusManagerState({ ...t, modal: a, closeOnFocusOut: f, open: h }),
          () => {
            k.setFocusManagerState(null);
          }
        );
    }, [r, k, a, h, f, t]),
    ut(() => {
      if (!r && d && typeof MutationObserver == 'function') {
        const I = () => {
          const X = d.getAttribute('tabindex');
          E.current.includes('floating') || (Un(Ze(d)) !== p.domReference.current && G().length === 0)
            ? X !== '0' && d.setAttribute('tabindex', '0')
            : X !== '-1' && d.setAttribute('tabindex', '-1');
        };
        I();
        const Q = new MutationObserver(I);
        return (
          Q.observe(d, { childList: !0, subtree: !0, attributes: !0 }),
          () => {
            Q.disconnect();
          }
        );
      }
    }, [r, d, p, E, G]);
  function H(I) {
    return r || !u || !a
      ? null
      : S.createElement(
          ix,
          { ref: I === 'start' ? N : D, onClick: (Q) => g(!1, Q.nativeEvent) },
          typeof u == 'string' ? u : 'Dismiss'
        );
  }
  const K = !r && y && !z && (U || a);
  return S.createElement(
    S.Fragment,
    null,
    K &&
      S.createElement(Ql, {
        'data-type': 'inside',
        ref: k == null ? void 0 : k.beforeInsideRef,
        onFocus: (I) => {
          if (a) {
            const X = T();
            In(o[0] === 'reference' ? X[0] : X[X.length - 1]);
          } else if (k != null && k.preserveTabOrder && k.portalNode)
            if (((B.current = !1), bo(I, k.portalNode))) {
              const X = Jv() || c;
              X == null || X.focus();
            } else {
              var Q;
              (Q = k.beforeOutsideRef.current) == null || Q.focus();
            }
        },
      }),
    !z && H('start'),
    n,
    H('end'),
    K &&
      S.createElement(Ql, {
        'data-type': 'inside',
        ref: k == null ? void 0 : k.afterInsideRef,
        onFocus: (I) => {
          if (a) In(T()[0]);
          else if (k != null && k.preserveTabOrder && k.portalNode)
            if ((f && (B.current = !0), bo(I, k.portalNode))) {
              const X = Zv() || c;
              X == null || X.focus();
            } else {
              var Q;
              (Q = k.afterOutsideRef.current) == null || Q.focus();
            }
        },
      })
  );
}
const Wi = Pn('scroll-lock'),
  c_ = S.forwardRef(function (t, n) {
    let { lockScroll: r = !1, ...o } = t;
    return (
      ut(() => {
        var i, l;
        if (!r || document.body.hasAttribute(Wi)) return;
        document.body.setAttribute(Wi, '');
        const u =
            Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft
              ? 'paddingLeft'
              : 'paddingRight',
          f = window.innerWidth - document.documentElement.clientWidth;
        if (!/iP(hone|ad|od)|iOS/.test(qv()))
          return (
            Object.assign(document.body.style, { overflow: 'hidden', [u]: f + 'px' }),
            () => {
              document.body.removeAttribute(Wi), Object.assign(document.body.style, { overflow: '', [u]: '' });
            }
          );
        const h = ((i = window.visualViewport) == null ? void 0 : i.offsetLeft) || 0,
          p = ((l = window.visualViewport) == null ? void 0 : l.offsetTop) || 0,
          v = window.pageXOffset,
          g = window.pageYOffset;
        return (
          Object.assign(document.body.style, {
            position: 'fixed',
            overflow: 'hidden',
            top: -(g - Math.floor(p)) + 'px',
            left: -(v - Math.floor(h)) + 'px',
            right: '0',
            [u]: f + 'px',
          }),
          () => {
            Object.assign(document.body.style, { position: '', overflow: '', top: '', left: '', right: '', [u]: '' }),
              document.body.removeAttribute(Wi),
              window.scrollTo(v, g);
          }
        );
      }, [r]),
      S.createElement(
        'div',
        Kr({ ref: n }, o, {
          style: { position: 'fixed', overflow: 'auto', top: 0, right: 0, bottom: 0, left: 0, ...o.style },
        })
      )
    );
  });
function dh(e) {
  return qr(e.target) && e.target.tagName === 'BUTTON';
}
function hh(e) {
  return Yv(e);
}
function f_(e, t) {
  t === void 0 && (t = {});
  const {
      open: n,
      onOpenChange: r,
      dataRef: o,
      elements: { domReference: i },
    } = e,
    { enabled: l = !0, event: s = 'click', toggle: a = !0, ignoreMouse: u = !1, keyboardHandlers: f = !0 } = t,
    h = S.useRef(),
    p = S.useRef(!1);
  return S.useMemo(
    () =>
      l
        ? {
            reference: {
              onPointerDown(v) {
                h.current = v.pointerType;
              },
              onMouseDown(v) {
                v.button === 0 &&
                  ((Wl(h.current, !0) && u) ||
                    (s !== 'click' &&
                      (n && a && (!o.current.openEvent || o.current.openEvent.type === 'mousedown')
                        ? r(!1, v.nativeEvent)
                        : (v.preventDefault(), r(!0, v.nativeEvent)))));
              },
              onClick(v) {
                if (s === 'mousedown' && h.current) {
                  h.current = void 0;
                  return;
                }
                (Wl(h.current, !0) && u) ||
                  (n && a && (!o.current.openEvent || o.current.openEvent.type === 'click')
                    ? r(!1, v.nativeEvent)
                    : r(!0, v.nativeEvent));
              },
              onKeyDown(v) {
                (h.current = void 0),
                  !(v.defaultPrevented || !f || dh(v)) &&
                    (v.key === ' ' && !hh(i) && (v.preventDefault(), (p.current = !0)),
                    v.key === 'Enter' && r(!(n && a), v.nativeEvent));
              },
              onKeyUp(v) {
                v.defaultPrevented ||
                  !f ||
                  dh(v) ||
                  hh(i) ||
                  (v.key === ' ' && p.current && ((p.current = !1), r(!(n && a), v.nativeEvent)));
              },
            },
          }
        : {},
    [l, o, s, u, f, i, a, n, r]
  );
}
const lx = fl['useInsertionEffect'.toString()],
  sx = lx || ((e) => e());
function ul(e) {
  const t = S.useRef(() => {});
  return (
    sx(() => {
      t.current = e;
    }),
    S.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
function cl(e, t) {
  if (t == null) return !1;
  if ('composedPath' in e) return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
const ax = { pointerdown: 'onPointerDown', mousedown: 'onMouseDown', click: 'onClick' },
  ux = { pointerdown: 'onPointerDownCapture', mousedown: 'onMouseDownCapture', click: 'onClickCapture' },
  cx = (e) => {
    var t, n;
    return {
      escapeKeyBubbles: typeof e == 'boolean' ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
      outsidePressBubbles: typeof e == 'boolean' ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0,
    };
  };
function fx(e, t) {
  t === void 0 && (t = {});
  const {
      open: n,
      onOpenChange: r,
      events: o,
      nodeId: i,
      elements: { reference: l, domReference: s, floating: a },
      dataRef: u,
    } = e,
    {
      enabled: f = !0,
      escapeKey: h = !0,
      outsidePress: p = !0,
      outsidePressEvent: v = 'pointerdown',
      referencePress: g = !1,
      referencePressEvent: m = 'pointerdown',
      ancestorScroll: w = !1,
      bubbles: c,
    } = t,
    d = Ds(),
    y = Kv() != null,
    E = ul(typeof p == 'function' ? p : () => !1),
    C = typeof p == 'function' ? E : p,
    _ = S.useRef(!1),
    { escapeKeyBubbles: x, outsidePressBubbles: k } = cx(c),
    L = ul((D) => {
      if (!n || !f || !h || D.key !== 'Escape') return;
      const B = d ? Do(d.nodesRef.current, i) : [];
      if (!x && (D.stopPropagation(), B.length > 0)) {
        let b = !0;
        if (
          (B.forEach((F) => {
            var U;
            if ((U = F.context) != null && U.open && !F.context.dataRef.current.__escapeKeyBubbles) {
              b = !1;
              return;
            }
          }),
          !b)
        )
          return;
      }
      o.emit('dismiss', { type: 'escapeKey', data: { returnFocus: { preventScroll: !1 } } }),
        r(!1, YE(D) ? D.nativeEvent : D);
    }),
    N = ul((D) => {
      const B = _.current;
      if (((_.current = !1), B || (typeof C == 'function' && !C(D)))) return;
      const b = Gv(D);
      if (qr(b) && a) {
        const z = b.clientWidth > 0 && b.scrollWidth > b.clientWidth,
          G = b.clientHeight > 0 && b.scrollHeight > b.clientHeight;
        let T = G && D.offsetX > b.clientWidth;
        if (
          (G && bs(a).getComputedStyle(b).direction === 'rtl' && (T = D.offsetX <= b.offsetWidth - b.clientWidth),
          T || (z && D.offsetY > b.clientHeight))
        )
          return;
      }
      const F =
        d &&
        Do(d.nodesRef.current, i).some((z) => {
          var G;
          return cl(D, (G = z.context) == null ? void 0 : G.elements.floating);
        });
      if (cl(D, a) || cl(D, s) || F) return;
      const U = d ? Do(d.nodesRef.current, i) : [];
      if (U.length > 0) {
        let z = !0;
        if (
          (U.forEach((G) => {
            var T;
            if ((T = G.context) != null && T.open && !G.context.dataRef.current.__outsidePressBubbles) {
              z = !1;
              return;
            }
          }),
          !z)
        )
          return;
      }
      o.emit('dismiss', { type: 'outsidePress', data: { returnFocus: y ? { preventScroll: !0 } : KE(D) || qE(D) } }),
        r(!1, D);
    });
  return (
    S.useEffect(() => {
      if (!n || !f) return;
      (u.current.__escapeKeyBubbles = x), (u.current.__outsidePressBubbles = k);
      function D(F) {
        r(!1, F);
      }
      const B = Ze(a);
      h && B.addEventListener('keydown', L), C && B.addEventListener(v, N);
      let b = [];
      return (
        w &&
          (Mt(s) && (b = Kn(s)),
          Mt(a) && (b = b.concat(Kn(a))),
          !Mt(l) && l && l.contextElement && (b = b.concat(Kn(l.contextElement)))),
        (b = b.filter((F) => {
          var U;
          return F !== ((U = B.defaultView) == null ? void 0 : U.visualViewport);
        })),
        b.forEach((F) => {
          F.addEventListener('scroll', D, { passive: !0 });
        }),
        () => {
          h && B.removeEventListener('keydown', L),
            C && B.removeEventListener(v, N),
            b.forEach((F) => {
              F.removeEventListener('scroll', D);
            });
        }
      );
    }, [u, a, s, l, h, C, v, n, r, w, f, x, k, L, N]),
    S.useEffect(() => {
      _.current = !1;
    }, [C, v]),
    S.useMemo(
      () =>
        f
          ? {
              reference: {
                onKeyDown: L,
                [ax[m]]: (D) => {
                  g && (o.emit('dismiss', { type: 'referencePress', data: { returnFocus: !1 } }), r(!1, D.nativeEvent));
                },
              },
              floating: {
                onKeyDown: L,
                [ux[v]]: () => {
                  _.current = !0;
                },
              },
            }
          : {},
      [f, o, g, v, m, r, L]
    )
  );
}
function dx(e) {
  var t;
  e === void 0 && (e = {});
  const { open: n = !1, onOpenChange: r, nodeId: o } = e,
    [i, l] = S.useState(null),
    s = ((t = e.elements) == null ? void 0 : t.reference) || i,
    a = vE(e),
    u = Ds(),
    f = ul((E, C) => {
      E && (p.current.openEvent = C), r == null || r(E, C);
    }),
    h = S.useRef(null),
    p = S.useRef({}),
    v = S.useState(() => BE())[0],
    g = Ls(),
    m = S.useCallback(
      (E) => {
        const C = Mt(E) ? { getBoundingClientRect: () => E.getBoundingClientRect(), contextElement: E } : E;
        a.refs.setReference(C);
      },
      [a.refs]
    ),
    w = S.useCallback(
      (E) => {
        (Mt(E) || E === null) && ((h.current = E), l(E)),
          (Mt(a.refs.reference.current) || a.refs.reference.current === null || (E !== null && !Mt(E))) &&
            a.refs.setReference(E);
      },
      [a.refs]
    ),
    c = S.useMemo(() => ({ ...a.refs, setReference: w, setPositionReference: m, domReference: h }), [a.refs, w, m]),
    d = S.useMemo(() => ({ ...a.elements, domReference: s }), [a.elements, s]),
    y = S.useMemo(
      () => ({ ...a, refs: c, elements: d, dataRef: p, nodeId: o, floatingId: g, events: v, open: n, onOpenChange: f }),
      [a, o, g, v, n, f, c, d]
    );
  return (
    ut(() => {
      const E = u == null ? void 0 : u.nodesRef.current.find((C) => C.id === o);
      E && (E.context = y);
    }),
    S.useMemo(() => ({ ...a, context: y, refs: c, elements: d }), [a, c, d, y])
  );
}
function hx(e, t) {
  t === void 0 && (t = {});
  const {
      open: n,
      onOpenChange: r,
      dataRef: o,
      events: i,
      refs: l,
      elements: { floating: s, domReference: a },
    } = e,
    { enabled: u = !0, keyboardOnly: f = !0 } = t,
    h = S.useRef(''),
    p = S.useRef(!1),
    v = S.useRef();
  return (
    S.useEffect(() => {
      if (!u) return;
      const m = Ze(s).defaultView || window;
      function w() {
        !n && qr(a) && a === Un(Ze(a)) && (p.current = !0);
      }
      return (
        m.addEventListener('blur', w),
        () => {
          m.removeEventListener('blur', w);
        }
      );
    }, [s, a, n, u]),
    S.useEffect(() => {
      if (!u) return;
      function g(m) {
        (m.type === 'referencePress' || m.type === 'escapeKey') && (p.current = !0);
      }
      return (
        i.on('dismiss', g),
        () => {
          i.off('dismiss', g);
        }
      );
    }, [i, u]),
    S.useEffect(
      () => () => {
        clearTimeout(v.current);
      },
      []
    ),
    S.useMemo(
      () =>
        u
          ? {
              reference: {
                onPointerDown(g) {
                  let { pointerType: m } = g;
                  (h.current = m), (p.current = !!(m && f));
                },
                onMouseLeave() {
                  p.current = !1;
                },
                onFocus(g) {
                  var m;
                  p.current ||
                    (g.type === 'focus' &&
                      ((m = o.current.openEvent) == null ? void 0 : m.type) === 'mousedown' &&
                      cl(o.current.openEvent, a)) ||
                    r(!0, g.nativeEvent);
                },
                onBlur(g) {
                  p.current = !1;
                  const m = g.relatedTarget,
                    w = Mt(m) && m.hasAttribute(Pn('focus-guard')) && m.getAttribute('data-type') === 'outside';
                  v.current = setTimeout(() => {
                    Xe(l.floating.current, m) || Xe(a, m) || w || r(!1, g.nativeEvent);
                  });
                },
              },
            }
          : {},
      [u, f, a, l, o, r]
    )
  );
}
function Ta(e, t, n) {
  const r = new Map();
  return {
    ...(n === 'floating' && { tabIndex: -1 }),
    ...e,
    ...t
      .map((o) => (o ? o[n] : null))
      .concat(e)
      .reduce(
        (o, i) => (
          i &&
            Object.entries(i).forEach((l) => {
              let [s, a] = l;
              if (s.indexOf('on') === 0) {
                if ((r.has(s) || r.set(s, []), typeof a == 'function')) {
                  var u;
                  (u = r.get(s)) == null || u.push(a),
                    (o[s] = function () {
                      for (var f, h = arguments.length, p = new Array(h), v = 0; v < h; v++) p[v] = arguments[v];
                      return (f = r.get(s)) == null ? void 0 : f.map((g) => g(...p)).find((g) => g !== void 0);
                    });
                }
              } else o[s] = a;
            }),
          o
        ),
        {}
      ),
  };
}
function px(e) {
  e === void 0 && (e = []);
  const t = e,
    n = S.useCallback((i) => Ta(i, e, 'reference'), t),
    r = S.useCallback((i) => Ta(i, e, 'floating'), t),
    o = S.useCallback(
      (i) => Ta(i, e, 'item'),
      e.map((i) => (i == null ? void 0 : i.item))
    );
  return S.useMemo(() => ({ getReferenceProps: n, getFloatingProps: r, getItemProps: o }), [n, r, o]);
}
function ng(e) {
  return S.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              typeof n == 'function' ? n(t) : n != null && (n.current = t);
            });
          },
    e
  );
}
function mx(e, t) {
  t === void 0 && (t = {});
  const { open: n, floatingId: r } = e,
    { enabled: o = !0, role: i = 'dialog' } = t,
    l = Ls();
  return S.useMemo(() => {
    const s = { id: r, role: i };
    return o
      ? i === 'tooltip'
        ? { reference: { 'aria-describedby': n ? r : void 0 }, floating: s }
        : {
            reference: {
              'aria-expanded': n ? 'true' : 'false',
              'aria-haspopup': i === 'alertdialog' ? 'dialog' : i,
              'aria-controls': n ? r : void 0,
              ...(i === 'listbox' && { role: 'combobox' }),
              ...(i === 'menu' && { id: l }),
            },
            floating: { ...s, ...(i === 'menu' && { 'aria-labelledby': l }) },
          }
      : {};
  }, [o, i, n, r, l]);
}
function vx({ initialOpen: e = !1, placement: t = 'top', open: n, onOpenChange: r, offset: o = 5 } = {}) {
  const i = S.useRef(null),
    [l, s] = S.useState(e),
    a = n ?? l,
    u = r ?? s,
    f = dx({
      placement: t,
      open: a,
      onOpenChange: u,
      whileElementsMounted: cw,
      middleware: [
        ow(o),
        rw({ crossAxis: t.includes('-'), fallbackAxisSideDirection: 'start', padding: 15 }),
        lw({ padding: 5 }),
        mE({ element: i }),
      ],
    }),
    h = f.context,
    p = XE(h, { move: !1, enabled: n == null }),
    v = hx(h, { enabled: n == null }),
    g = fx(h),
    m = mx(h, { role: 'tooltip' }),
    w = px([p, v, g, m]);
  return S.useMemo(() => ({ open: a, setOpen: u, ...w, ...f, arrowRef: i }), [a, u, w, f, i]);
}
const rg = S.createContext(null),
  og = () => {
    const e = S.useContext(rg);
    if (e == null) throw new Error('Tooltip components must be wrapped in <Tooltip />');
    return e;
  },
  gx = _r.forwardRef(function ({ children: t, asChild: n = !1, ...r }, o) {
    const i = og(),
      l = t.ref,
      s = ng([i.refs.setReference, o, l]);
    return n && _r.isValidElement(t)
      ? _r.cloneElement(t, i.getReferenceProps({ ref: s, ...r, ...t.props, 'data-state': i.open ? 'open' : 'closed' }))
      : A('button', { ref: s, 'data-state': i.open ? 'open' : 'closed', ...i.getReferenceProps(r), children: t });
  }),
  yx = _r.forwardRef(function (
    {
      style: t,
      hasArrow: n = !1,
      arrowColor: r = 'blue',
      arrowWidth: o = 14,
      arrowHeight: i = 7,
      arrowOffset: l = 0,
      ...s
    },
    a
  ) {
    const { arrowRef: u, ...f } = og(),
      h = ng([f.refs.setFloating, a]);
    if (!f.open) return null;
    const p = f.placement.includes('-');
    return A(ox, {
      children: He('div', {
        ref: h,
        style: { ...f.floatingStyles, ...t },
        ...f.getFloatingProps(s),
        children: [
          s.children,
          n && A(jE, { fill: r, width: o, height: i, staticOffset: p ? l : null, ref: u, context: f.context }),
        ],
      }),
    });
  });
function Fo({ children: e, ...t }) {
  const n = vx(t);
  return A(rg.Provider, { value: n, children: e });
}
Fo.Trigger = gx;
Fo.Content = yx;
const wx = we.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${({ color: e }) => e};
  text-align: center;
  letter-spacing: -0.7px;
  background-color: ${({ bgColor: e }) => e};
  border-radius: 4px;
  box-shadow: 5px 5px 10px 0 rgb(0 0 0 / 10%), -1px -1px 5px 0 rgb(0 0 0 / 8%);
`,
  ph = {
    light: { bgColor: Jt.white_100, textColor: '#242424' },
    dark: { bgColor: Jt.navy_900, textColor: Jt.white_100 },
  };
function Sx({
  children: e,
  initialOpen: t,
  placement: n = 'top',
  theme: r = 'light',
  message: o,
  open: i,
  onOpenChange: l,
}) {
  const s = S.useMemo(() => ph[r].bgColor, [r]),
    a = S.useMemo(() => ph[r].textColor, [r]);
  return He(Fo, {
    initialOpen: t,
    placement: n,
    offset: 11,
    open: i,
    onOpenChange: l,
    children: [
      A(Fo.Trigger, { asChild: !0, children: e }),
      A(Fo.Content, {
        hasArrow: !0,
        arrowWidth: 10,
        arrowHeight: 6,
        arrowOffset: 8,
        arrowColor: s,
        children: A(wx, { bgColor: s, color: a, children: o }),
      }),
    ],
  });
}
function Oa(e, t = []) {
  const n = S.useRef(e);
  return (
    S.useEffect(() => {
      n.current = e;
    }),
    S.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function Ex(e) {
  const { value: t, defaultValue: n, onChange: r, shouldUpdate: o = (p, v) => p !== v } = e,
    i = Oa(r),
    l = Oa(o),
    [s, a] = S.useState(n),
    u = t !== void 0,
    f = u ? t : s,
    h = Oa(
      (p) => {
        const g = typeof p == 'function' ? p(f) : p;
        l(f, g) && (u || a(g), i(g));
      },
      [u, i, f, l]
    );
  return [f, h];
}
function xx({ initialOpen: e = !1, open: t, onOpenChange: n } = {}) {
  const [r, o] = Ex({ value: t, onChange: n, defaultValue: e });
  return S.useMemo(() => ({ open: r, setOpen: o }), [r, o]);
}
const ig = S.createContext(null),
  nf = () => {
    const e = S.useContext(ig);
    if (e == null) throw new Error('ToggleMenu components must be wrapped in <ToggleMenu />');
    return e;
  };
function Cx({ children: e }) {
  const { open: t, setOpen: n } = nf();
  return A('div', {
    onClick: () => {
      n(!t);
    },
    'data-state': t ? 'open' : 'closed',
    children: e,
  });
}
function _x({ children: e }) {
  const { open: t } = nf();
  return t ? A(rp, { children: e }) : null;
}
function Ao({ children: e, ...t }) {
  const n = xx(t);
  return A(ig.Provider, { value: n, children: e });
}
Ao.Trigger = Cx;
Ao.Content = _x;
const kx = 'src/assets/icons/arrow_down_black.svg',
  Rx = 'src/assets/icons/arrow_up_black.svg',
  Px = 'src/assets/icons/arrow_left_black.svg',
  Tx = 'src/assets/icons/arrow_right_black.svg',
  Ox = 'src/assets/icons/arrow_down_red.svg',
  Mx = 'src/assets/icons/arrow_up_red.svg',
  Lx = 'src/assets/icons/arrow_left_red.svg',
  Dx = 'src/assets/icons/arrow_right_red.svg',
  bx = 'src/assets/icons/arrow_down_gray.svg',
  Fx = 'src/assets/icons/arrow_up_gray.svg',
  Ax = 'src/assets/icons/arrow_left_gray.svg',
  Nx = 'src/assets/icons/arrow_right_gray.svg',
  Ix = 'src/assets/icons/arrow_down_white.svg',
  zx = 'src/assets/icons/arrow_up_white.svg',
  $x = 'src/assets/icons/arrow_left_white.svg',
  Ux = 'src/assets/icons/arrow_right_white.svg',
  jx = 'src/assets/icons/delete_gray.svg',
  Bx = 'src/assets/icons/notification.svg',
  Vx = 'src/assets/icons/search.svg',
  Hx = 'src/assets/icons/visible_on_gray.svg',
  Wx = 'src/assets/icons/visible_off_gray.svg',
  Qx = 'src/assets/icons/torder_logo_short_white.svg',
  Kx = 'src/assets/icons/hubt_logo_full_black.svg',
  qx = 'src/assets/icons/hubt_logo_full_white.svg',
  Gx = 'src/assets/icons/sns_apple.svg',
  Yx = 'src/assets/icons/sns_google.svg',
  Xx = 'src/assets/icons/sns_kakaotalk.svg',
  Jx = 'src/assets/icons/sns_naver.svg',
  Zx = 'src/assets/icons/step_status_1.svg',
  eC = 'src/assets/icons/step_status_2.svg',
  tC = 'src/assets/icons/step_status_3.svg',
  nC = 'src/assets/icons/check_red.svg',
  rC = 'src/assets/icons/check_white_circle_white.svg',
  oC = 'src/assets/icons/bag_white.svg',
  iC = 'src/assets/icons/flag_white.svg',
  lC = 'src/assets/icons/user_white.svg',
  sC = 'src/assets/icons/setting_white.svg',
  aC = 'src/assets/icons/open_white.svg',
  uC = 'src/assets/icons/open_navy.svg',
  cC = 'src/assets/icons/closed_white.svg',
  fC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        가리기_회색: Wx,
        가방_흰색: oC,
        검색: Vx,
        깃발_흰색: iC,
        닫기_흰색: cC,
        로고_구글: Yx,
        로고_네이버: Jx,
        로고_애플: Gx,
        로고_카카오톡: Xx,
        로고_티오더_흰색: Qx,
        로고_허브티_검정색: Kx,
        로고_허브티_흰색: qx,
        보이기_회색: Hx,
        삭제_회색: jx,
        설정_흰색: sC,
        스텝_1단계: Zx,
        스텝_2단계: eC,
        스텝_3단계: tC,
        알림: Bx,
        열기_네이비: uC,
        열기_흰색: aC,
        유저_흰색: lC,
        체크_빨간색: nC,
        체크_흰색_바탕_빨간색: rC,
        화살표_아래_검정색: kx,
        화살표_아래_빨간색: Ox,
        화살표_아래_회색: bx,
        화살표_아래_흰색: Ix,
        화살표_오른쪽_검정색: Tx,
        화살표_오른쪽_빨간색: Dx,
        화살표_오른쪽_회색: Nx,
        화살표_오른쪽_흰색: Ux,
        화살표_왼쪽_검정색: Px,
        화살표_왼쪽_빨간색: Lx,
        화살표_왼쪽_회색: Ax,
        화살표_왼쪽_흰색: $x,
        화살표_위_검정색: Rx,
        화살표_위_빨간색: Mx,
        화살표_위_회색: Fx,
        화살표_위_흰색: zx,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Lt = ({ name: e, size: t = 24, className: n, onClick: r, ...o }) => {
    const i = fC[e];
    return A('img', { alt: e, src: i, width: t, height: 'auto', onClick: r, className: n, ...o });
  };
bn`
  display: flex;
  align-items: center;
  justify-content: center;
`;
bn`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
bn`
  position: absolute;
  inset: 0;
  z-index: 10;
`;
bn`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
bn`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const rf = bn`
  border-radius: 9999px;
`,
  d_ = bn`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #444;
  text-align: center;
`,
  lg = we.button`
  padding: 0;
  overflow: visible;
  font: inherit;
  cursor: pointer;
  background: inherit;
  border: none;
  border-radius: 0;
  box-shadow: none;
`,
  dC = we.aside`
  position: relative;
  grid-area: nav;
  width: ${({ width: e }) => e}px;
  color: ${Jt.white_100};
  background-color: ${Jt.navy_900};
  transition: width 0.5s;

  a {
    color: ${Jt.white_100};
    text-decoration: none;
    outline: none;
  }
`,
  hC = we.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  padding-right: 20px;

  .logo {
    width: 82px;
    height: 22px;
    background-color: white;
  }
`,
  pC = we.nav`
  padding: 0 10px;
`,
  mC = we(lg)`
  position: absolute;
  top: 21px;
  right: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${Jt.white_100};
  border: 1px solid ${Jt.line};

  ${rf}
`,
  vC = we.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 8px;
  white-space: nowrap;
  border-radius: 10px;

  &:hover {
    background-color: #3d4352;
  }

  .main-category-left {
    display: flex;
    gap: 10px;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`,
  gC = we.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,
  yC = we.li`
  a {
    display: block;
    padding: 12px 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.8px;
    border-radius: 5px;

    &:hover {
      background-color: #3d4352;
    }
  }

  .active {
    background-color: ${Jt.red_500};
  }
`,
  wC = [
    {
      icon: A(Lt, { name: '유저_흰색', size: 24 }),
      id: '계정관리',
      name: '계정관리',
      subCategories: [
        { id: '계정관리1', name: '계정관리1', to: '/notice' },
        { id: '계정관리2', name: '계정관리2', to: '/faq' },
        { id: '계정관리3', name: '계정관리3', to: '/cert' },
      ],
    },
    {
      icon: A(Lt, { name: '가방_흰색', size: 24 }),
      id: '비즈니스 관리',
      name: '비즈니스 관리',
      subCategories: [
        { id: '사업자 관리', name: '사업자 관리', to: '/notice' },
        { id: '임직원 · 협력업체 정보 설정', name: '임직원 · 협력업체 정보 설정', to: '/faq' },
      ],
    },
    {
      icon: A(Lt, { name: '깃발_흰색', size: 24 }),
      id: '서비스 현황',
      name: '서비스 현황',
      subCategories: [
        { id: '서비스1', name: '서비스1', to: '/cert' },
        { id: '서비스2', name: '서비스2', to: '/notice' },
      ],
    },
    {
      icon: A(Lt, { name: '설정_흰색', size: 24 }),
      id: '기타 설정',
      name: '기타 설정',
      subCategories: [
        { id: '기타1', name: '기타1', to: '/faq' },
        { id: '기타2', name: '기타2', to: '/cert' },
      ],
    },
  ];
function SC() {
  const [e, t] = S.useState(!1);
  return He(dC, {
    width: e ? 74 : 240,
    children: [
      e && A(mC, { onClick: () => t(!1), children: A(Lt, { name: '열기_네이비', size: 24 }) }),
      e &&
        A(Lt, {
          css: bn`
            margin: 30px 25px 0 27px;
          `,
          name: '로고_티오더_흰색',
          size: 22,
        }),
      !e &&
        He(hC, {
          children: [
            A(Lt, { name: '로고_허브티_흰색', size: 87.54 }),
            A(Sx, {
              placement: 'right',
              message: '사이드바 접기',
              theme: 'light',
              children: A('button', { onClick: () => t(!0), children: A(Lt, { name: '닫기_흰색', size: 24 }) }),
            }),
          ],
        }),
      A(pC, {
        children:
          !e &&
          A('ul', {
            children: wC.map((n, r) =>
              A(
                'li',
                {
                  children: He(Ao, {
                    children: [
                      A(Ao.Trigger, {
                        children: He(vC, {
                          children: [
                            He('div', {
                              className: 'main-category-left',
                              children: [n.icon, A('span', { children: n.name })],
                            }),
                            A(EC, {}),
                          ],
                        }),
                      }),
                      A(Ao.Content, {
                        children: A(gC, {
                          children: n.subCategories.map((o) =>
                            A(yC, { children: A(ja, { to: o.to, children: o.name }) }, o.id)
                          ),
                        }),
                      }),
                    ],
                  }),
                },
                String(n.id)
              )
            ),
          }),
      }),
    ],
  });
}
function EC() {
  const { open: e } = nf();
  return A(Lt, { name: e ? '화살표_위_흰색' : '화살표_오른쪽_회색', size: 24 });
}
const xC = we.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  padding-right: 63px;
  border-bottom: 1px solid #e1e1e1;
`,
  sg = we.ul`
  display: flex;

  a {
    color: #000;
    text-decoration: none;
    outline: none;
  }

  a:hover {
    color: #fff;
    text-decoration: none;
    background-color: #f59000;
  }
`,
  CC = we(sg)`
  gap: 47px;
  margin-right: 44px;
`,
  _C = we(sg)`
  gap: 15px;
  margin-right: 27px;
  overflow: visible;
`,
  mh = we.span`
  position: relative;
  display: inline-block;
  cursor: pointer;

  img {
    vertical-align: middle;
  }
`,
  kC = we.span`
  position: absolute;
  top: -1px;
  right: -1px;
  width: 6px;
  height: 6px;
  background-color: #ff4343;
  ${rf}
`,
  RC = we(lg)`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    ${rf}
  }
`;
function PC() {
  const { signOut: e } = y0();
  return He(xC, {
    children: [
      He(CC, {
        'aria-label': 'main-nav',
        children: [
          A('li', { children: A(ja, { to: '/notice', children: '공지사항' }) }),
          A('li', { children: A(ja, { to: '/faq', children: 'FAQ' }) }),
        ],
      }),
      He(_C, {
        children: [
          A('li', { children: A(mh, { children: A(Lt, { name: '검색', size: 30 }) }) }),
          A('li', { children: He(mh, { children: [A(Lt, { name: '알림', size: 30 }), A(kC, {})] }) }),
        ],
      }),
      He(RC, {
        onClick: e,
        children: [
          A('img', { src: 'https://i.pravatar.cc/36', alt: 'user-avatar' }),
          A('span', { children: '홍길동' }),
        ],
      }),
    ],
  });
}
function TC() {
  return He(G1, { children: [A(PC, {}), A(SC, {}), A(Y1, { children: A(Cp, {}) })] });
}
function OC() {
  const { auth: e } = ec(['auth']);
  return e ? A(TC, {}) : A(q1, {});
}
const MC = ['/login', '/signup'];
function LC({ children: e }) {
  const { auth: t } = ec(['auth']),
    n = Dn(),
    r = MC.includes(n.pathname);
  return t && r
    ? A(pl, { to: '/notice', state: { from: n }, replace: !0 })
    : (!t && r) || t
    ? e
    : A(pl, { to: '/login', state: { from: n }, replace: !0 });
}
const DC = S.lazy(async () => await Xr(() => import('./index-153b57a1.js'), [])),
  bC = S.lazy(
    async () => await Xr(() => import('./index-6521191c.js'), ['assets/index-6521191c.js', 'assets/index-01637789.js'])
  ),
  FC = S.lazy(
    async () =>
      await Xr(
        () => import('./index-ba9f21e1.js'),
        ['assets/index-ba9f21e1.js', 'assets/index-01637789.js', 'assets/index-cab2d093.css']
      )
  ),
  AC = S.lazy(
    async () => await Xr(() => import('./index-70e1d571.js'), ['assets/index-70e1d571.js', 'assets/index-9e1b5853.js'])
  ),
  NC = S.lazy(
    async () => await Xr(() => import('./index-b0a10c3c.js'), ['assets/index-b0a10c3c.js', 'assets/index-9e1b5853.js'])
  ),
  IC = S.lazy(async () => await Xr(() => import('./index-d88698ab.js'), [])),
  zC = O1([
    {
      path: '/',
      element: A(S.Suspense, {
        fallback: A('div', { children: 'loading...' }),
        children: A(LC, { children: A(OC, {}) }),
      }),
      errorElement: A('div', { children: 'ErrorPage' }),
      children: [
        { index: !0, element: A(N1, {}) },
        { path: 'signup', element: A(DC, {}) },
        { path: 'notice', element: A(AC, {}) },
        { path: 'cert', element: A(FC, {}) },
        { path: 'faq', element: A(NC, {}) },
      ],
    },
    { path: '/login', element: A(bC, {}) },
    { path: '/test', element: A(IC, {}) },
  ]);
function $C() {
  return He(rp, { children: [A('div', { id: 'modal-root' }), A(E1, { router: zC })] });
}
var $u = {},
  vh = Jc;
($u.createRoot = vh.createRoot), ($u.hydrateRoot = vh.hydrateRoot);
class Fs {
  constructor() {
    (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    const n = { listener: t };
    return (
      this.listeners.add(n),
      this.onSubscribe(),
      () => {
        this.listeners.delete(n), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const of = typeof window > 'u' || 'Deno' in window;
function Pt() {}
function UC(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function jC(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function BC(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Qi(e, t, n) {
  return As(e) ? (typeof t == 'function' ? { ...n, queryKey: e, queryFn: t } : { ...t, queryKey: e }) : e;
}
function pn(e, t, n) {
  return As(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function gh(e, t) {
  const { type: n = 'all', exact: r, fetchStatus: o, predicate: i, queryKey: l, stale: s } = e;
  if (As(l)) {
    if (r) {
      if (t.queryHash !== lf(l, t.options)) return !1;
    } else if (!Kl(t.queryKey, l)) return !1;
  }
  if (n !== 'all') {
    const a = t.isActive();
    if ((n === 'active' && !a) || (n === 'inactive' && a)) return !1;
  }
  return !(
    (typeof s == 'boolean' && t.isStale() !== s) ||
    (typeof o < 'u' && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function yh(e, t) {
  const { exact: n, fetching: r, predicate: o, mutationKey: i } = e;
  if (As(i)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Wn(t.options.mutationKey) !== Wn(i)) return !1;
    } else if (!Kl(t.options.mutationKey, i)) return !1;
  }
  return !((typeof r == 'boolean' && (t.state.status === 'loading') !== r) || (o && !o(t)));
}
function lf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Wn)(e);
}
function Wn(e) {
  return JSON.stringify(e, (t, n) =>
    Uu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function Kl(e, t) {
  return ag(e, t);
}
function ag(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == 'object' && typeof t == 'object'
    ? !Object.keys(t).some((n) => !ag(e[n], t[n]))
    : !1;
}
function ug(e, t) {
  if (e === t) return e;
  const n = wh(e) && wh(t);
  if (n || (Uu(e) && Uu(t))) {
    const r = n ? e.length : Object.keys(e).length,
      o = n ? t : Object.keys(t),
      i = o.length,
      l = n ? [] : {};
    let s = 0;
    for (let a = 0; a < i; a++) {
      const u = n ? a : o[a];
      (l[u] = ug(e[u], t[u])), l[u] === e[u] && s++;
    }
    return r === i && s === r ? e : l;
  }
  return t;
}
function wh(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Uu(e) {
  if (!Sh(e)) return !1;
  const t = e.constructor;
  if (typeof t > 'u') return !0;
  const n = t.prototype;
  return !(!Sh(n) || !n.hasOwnProperty('isPrototypeOf'));
}
function Sh(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function As(e) {
  return Array.isArray(e);
}
function cg(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Eh(e) {
  cg(0).then(e);
}
function VC() {
  if (typeof AbortController == 'function') return new AbortController();
}
function HC(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t)
    ? e
    : typeof n.structuralSharing == 'function'
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? ug(e, t)
    : t;
}
class WC extends Fs {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!of && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener('visibilitychange', n, !1),
            window.addEventListener('focus', n, !1),
            () => {
              window.removeEventListener('visibilitychange', n), window.removeEventListener('focus', n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == 'boolean' ? this.setFocused(r) : this.onFocus();
      }));
  }
  setFocused(t) {
    (this.focused = t), t && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == 'boolean'
      ? this.focused
      : typeof document > 'u'
      ? !0
      : [void 0, 'visible', 'prerender'].includes(document.visibilityState);
  }
}
const ju = new WC(),
  xh = ['online', 'offline'];
class QC extends Fs {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!of && window.addEventListener) {
          const n = () => t();
          return (
            xh.forEach((r) => {
              window.addEventListener(r, n, !1);
            }),
            () => {
              xh.forEach((r) => {
                window.removeEventListener(r, n);
              });
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == 'boolean' ? this.setOnline(r) : this.onOnline();
      }));
  }
  setOnline(t) {
    (this.online = t), t && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == 'boolean'
      ? this.online
      : typeof navigator > 'u' || typeof navigator.onLine > 'u'
      ? !0
      : navigator.onLine;
  }
}
const ql = new QC();
function KC(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function sf(e) {
  return (e ?? 'online') === 'online' ? ql.isOnline() : !0;
}
class fg {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert), (this.silent = t == null ? void 0 : t.silent);
  }
}
function Ma(e) {
  return e instanceof fg;
}
function dg(e) {
  let t = !1,
    n = 0,
    r = !1,
    o,
    i,
    l;
  const s = new Promise((w, c) => {
      (i = w), (l = c);
    }),
    a = (w) => {
      r || (v(new fg(w)), e.abort == null || e.abort());
    },
    u = () => {
      t = !0;
    },
    f = () => {
      t = !1;
    },
    h = () => !ju.isFocused() || (e.networkMode !== 'always' && !ql.isOnline()),
    p = (w) => {
      r || ((r = !0), e.onSuccess == null || e.onSuccess(w), o == null || o(), i(w));
    },
    v = (w) => {
      r || ((r = !0), e.onError == null || e.onError(w), o == null || o(), l(w));
    },
    g = () =>
      new Promise((w) => {
        (o = (c) => {
          const d = r || !h();
          return d && w(c), d;
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (o = void 0), r || e.onContinue == null || e.onContinue();
      }),
    m = () => {
      if (r) return;
      let w;
      try {
        w = e.fn();
      } catch (c) {
        w = Promise.reject(c);
      }
      Promise.resolve(w)
        .then(p)
        .catch((c) => {
          var d, y;
          if (r) return;
          const E = (d = e.retry) != null ? d : 3,
            C = (y = e.retryDelay) != null ? y : KC,
            _ = typeof C == 'function' ? C(n, c) : C,
            x = E === !0 || (typeof E == 'number' && n < E) || (typeof E == 'function' && E(n, c));
          if (t || !x) {
            v(c);
            return;
          }
          n++,
            e.onFail == null || e.onFail(n, c),
            cg(_)
              .then(() => {
                if (h()) return g();
              })
              .then(() => {
                t ? v(c) : m();
              });
        });
    };
  return (
    sf(e.networkMode) ? m() : g().then(m),
    {
      promise: s,
      cancel: a,
      continue: () => ((o == null ? void 0 : o()) ? s : Promise.resolve()),
      cancelRetry: u,
      continueRetry: f,
    }
  );
}
const af = console;
function qC() {
  let e = [],
    t = 0,
    n = (f) => {
      f();
    },
    r = (f) => {
      f();
    };
  const o = (f) => {
      let h;
      t++;
      try {
        h = f();
      } finally {
        t--, t || s();
      }
      return h;
    },
    i = (f) => {
      t
        ? e.push(f)
        : Eh(() => {
            n(f);
          });
    },
    l =
      (f) =>
      (...h) => {
        i(() => {
          f(...h);
        });
      },
    s = () => {
      const f = e;
      (e = []),
        f.length &&
          Eh(() => {
            r(() => {
              f.forEach((h) => {
                n(h);
              });
            });
          });
    };
  return {
    batch: o,
    batchCalls: l,
    schedule: i,
    setNotifyFunction: (f) => {
      n = f;
    },
    setBatchNotifyFunction: (f) => {
      r = f;
    },
  };
}
const Ke = qC();
class hg {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      jC(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(this.cacheTime || 0, t ?? (of ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class GC extends hg {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || af),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || YC(this.options)),
      (this.state = this.initialState),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }), this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === 'idle' && this.cache.remove(this);
  }
  setData(t, n) {
    const r = HC(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: r,
        type: 'success',
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual,
      }),
      r
    );
  }
  setState(t, n) {
    this.dispatch({ type: 'setState', state: t, setStateOptions: n });
  }
  cancel(t) {
    var n;
    const r = this.promise;
    return (n = this.retryer) == null || n.cancel(t), r ? r.then(Pt).catch(Pt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !BC(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    n && n.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnReconnect());
    n && n.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: 'observerAdded', query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) &&
      ((this.observers = this.observers.filter((n) => n !== t)),
      this.observers.length ||
        (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({ revert: !0 }) : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: 'observerRemoved', query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: 'invalidate' });
  }
  fetch(t, n) {
    var r, o;
    if (this.state.fetchStatus !== 'idle') {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
      else if (this.promise) {
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const v = this.observers.find((g) => g.options.queryFn);
      v && this.setOptions(v.options);
    }
    Array.isArray(this.options.queryKey);
    const l = VC(),
      s = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      a = (v) => {
        Object.defineProperty(v, 'signal', {
          enumerable: !0,
          get: () => {
            if (l) return (this.abortSignalConsumed = !0), l.signal;
          },
        });
      };
    a(s);
    const u = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(s))
          : Promise.reject('Missing queryFn'),
      f = { fetchOptions: n, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: u };
    if (
      (a(f),
      (r = this.options.behavior) == null || r.onFetch(f),
      (this.revertState = this.state),
      this.state.fetchStatus === 'idle' || this.state.fetchMeta !== ((o = f.fetchOptions) == null ? void 0 : o.meta))
    ) {
      var h;
      this.dispatch({ type: 'fetch', meta: (h = f.fetchOptions) == null ? void 0 : h.meta });
    }
    const p = (v) => {
      if (((Ma(v) && v.silent) || this.dispatch({ type: 'error', error: v }), !Ma(v))) {
        var g, m, w, c;
        (g = (m = this.cache.config).onError) == null || g.call(m, v, this),
          (w = (c = this.cache.config).onSettled) == null || w.call(c, this.state.data, v, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(), (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = dg({
        fn: f.fetchFn,
        abort: l == null ? void 0 : l.abort.bind(l),
        onSuccess: (v) => {
          var g, m, w, c;
          if (typeof v > 'u') {
            p(new Error(this.queryHash + ' data is undefined'));
            return;
          }
          this.setData(v),
            (g = (m = this.cache.config).onSuccess) == null || g.call(m, v, this),
            (w = (c = this.cache.config).onSettled) == null || w.call(c, v, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: p,
        onFail: (v, g) => {
          this.dispatch({ type: 'failed', failureCount: v, error: g });
        },
        onPause: () => {
          this.dispatch({ type: 'pause' });
        },
        onContinue: () => {
          this.dispatch({ type: 'continue' });
        },
        retry: f.options.retry,
        retryDelay: f.options.retryDelay,
        networkMode: f.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const n = (r) => {
      var o, i;
      switch (t.type) {
        case 'failed':
          return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
        case 'pause':
          return { ...r, fetchStatus: 'paused' };
        case 'continue':
          return { ...r, fetchStatus: 'fetching' };
        case 'fetch':
          return {
            ...r,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (o = t.meta) != null ? o : null,
            fetchStatus: sf(this.options.networkMode) ? 'fetching' : 'paused',
            ...(!r.dataUpdatedAt && { error: null, status: 'loading' }),
          };
        case 'success':
          return {
            ...r,
            data: t.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (i = t.dataUpdatedAt) != null ? i : Date.now(),
            error: null,
            isInvalidated: !1,
            status: 'success',
            ...(!t.manual && { fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null }),
          };
        case 'error':
          const l = t.error;
          return Ma(l) && l.revert && this.revertState
            ? { ...this.revertState }
            : {
                ...r,
                error: l,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: l,
                fetchStatus: 'idle',
                status: 'error',
              };
        case 'invalidate':
          return { ...r, isInvalidated: !0 };
        case 'setState':
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      Ke.batch(() => {
        this.observers.forEach((r) => {
          r.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: 'updated', action: t });
      });
  }
}
function YC(e) {
  const t = typeof e.initialData == 'function' ? e.initialData() : e.initialData,
    n = typeof t < 'u',
    r = n ? (typeof e.initialDataUpdatedAt == 'function' ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? 'success' : 'loading',
    fetchStatus: 'idle',
  };
}
class XC extends Fs {
  constructor(t) {
    super(), (this.config = t || {}), (this.queries = []), (this.queriesMap = {});
  }
  build(t, n, r) {
    var o;
    const i = n.queryKey,
      l = (o = n.queryHash) != null ? o : lf(i, n);
    let s = this.get(l);
    return (
      s ||
        ((s = new GC({
          cache: this,
          logger: t.getLogger(),
          queryKey: i,
          queryHash: l,
          options: t.defaultQueryOptions(n),
          state: r,
          defaultOptions: t.getQueryDefaults(i),
        })),
        this.add(s)),
      s
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t), this.queries.push(t), this.notify({ type: 'added', query: t }));
  }
  remove(t) {
    const n = this.queriesMap[t.queryHash];
    n &&
      (t.destroy(),
      (this.queries = this.queries.filter((r) => r !== t)),
      n === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: 'removed', query: t }));
  }
  clear() {
    Ke.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, n) {
    const [r] = pn(t, n);
    return typeof r.exact > 'u' && (r.exact = !0), this.queries.find((o) => gh(r, o));
  }
  findAll(t, n) {
    const [r] = pn(t, n);
    return Object.keys(r).length > 0 ? this.queries.filter((o) => gh(r, o)) : this.queries;
  }
  notify(t) {
    Ke.batch(() => {
      this.listeners.forEach(({ listener: n }) => {
        n(t);
      });
    });
  }
  onFocus() {
    Ke.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Ke.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class JC extends hg {
  constructor(t) {
    super(),
      (this.defaultOptions = t.defaultOptions),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || af),
      (this.observers = []),
      (this.state = t.state || ZC()),
      this.setOptions(t.options),
      this.scheduleGc();
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }), this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({ type: 'setState', state: t });
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({ type: 'observerAdded', mutation: this, observer: t }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((n) => n !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({ type: 'observerRemoved', mutation: this, observer: t });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === 'loading' ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var t, n;
    return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null ? t : this.execute();
  }
  async execute() {
    const t = () => {
        var x;
        return (
          (this.retryer = dg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject('No mutationFn found'),
            onFail: (k, L) => {
              this.dispatch({ type: 'failed', failureCount: k, error: L });
            },
            onPause: () => {
              this.dispatch({ type: 'pause' });
            },
            onContinue: () => {
              this.dispatch({ type: 'continue' });
            },
            retry: (x = this.options.retry) != null ? x : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      n = this.state.status === 'loading';
    try {
      var r, o, i, l, s, a, u, f;
      if (!n) {
        var h, p, v, g;
        this.dispatch({ type: 'loading', variables: this.options.variables }),
          await ((h = (p = this.mutationCache.config).onMutate) == null
            ? void 0
            : h.call(p, this.state.variables, this));
        const k = await ((v = (g = this.options).onMutate) == null ? void 0 : v.call(g, this.state.variables));
        k !== this.state.context && this.dispatch({ type: 'loading', context: k, variables: this.state.variables });
      }
      const x = await t();
      return (
        await ((r = (o = this.mutationCache.config).onSuccess) == null
          ? void 0
          : r.call(o, x, this.state.variables, this.state.context, this)),
        await ((i = (l = this.options).onSuccess) == null
          ? void 0
          : i.call(l, x, this.state.variables, this.state.context)),
        await ((s = (a = this.mutationCache.config).onSettled) == null
          ? void 0
          : s.call(a, x, null, this.state.variables, this.state.context, this)),
        await ((u = (f = this.options).onSettled) == null
          ? void 0
          : u.call(f, x, null, this.state.variables, this.state.context)),
        this.dispatch({ type: 'success', data: x }),
        x
      );
    } catch (x) {
      try {
        var m, w, c, d, y, E, C, _;
        throw (
          (await ((m = (w = this.mutationCache.config).onError) == null
            ? void 0
            : m.call(w, x, this.state.variables, this.state.context, this)),
          await ((c = (d = this.options).onError) == null
            ? void 0
            : c.call(d, x, this.state.variables, this.state.context)),
          await ((y = (E = this.mutationCache.config).onSettled) == null
            ? void 0
            : y.call(E, void 0, x, this.state.variables, this.state.context, this)),
          await ((C = (_ = this.options).onSettled) == null
            ? void 0
            : C.call(_, void 0, x, this.state.variables, this.state.context)),
          x)
        );
      } finally {
        this.dispatch({ type: 'error', error: x });
      }
    }
  }
  dispatch(t) {
    const n = (r) => {
      switch (t.type) {
        case 'failed':
          return { ...r, failureCount: t.failureCount, failureReason: t.error };
        case 'pause':
          return { ...r, isPaused: !0 };
        case 'continue':
          return { ...r, isPaused: !1 };
        case 'loading':
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !sf(this.options.networkMode),
            status: 'loading',
            variables: t.variables,
          };
        case 'success':
          return {
            ...r,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: 'success',
            isPaused: !1,
          };
        case 'error':
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: 'error',
          };
        case 'setState':
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      Ke.batch(() => {
        this.observers.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.mutationCache.notify({ mutation: this, type: 'updated', action: t });
      });
  }
}
function ZC() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
  };
}
class e_ extends Fs {
  constructor(t) {
    super(), (this.config = t || {}), (this.mutations = []), (this.mutationId = 0);
  }
  build(t, n, r) {
    const o = new JC({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(n),
      state: r,
      defaultOptions: n.mutationKey ? t.getMutationDefaults(n.mutationKey) : void 0,
    });
    return this.add(o), o;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: 'added', mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((n) => n !== t)), this.notify({ type: 'removed', mutation: t });
  }
  clear() {
    Ke.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return typeof t.exact > 'u' && (t.exact = !0), this.mutations.find((n) => yh(t, n));
  }
  findAll(t) {
    return this.mutations.filter((n) => yh(t, n));
  }
  notify(t) {
    Ke.batch(() => {
      this.listeners.forEach(({ listener: n }) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return (
      (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
        .then(() => {
          const n = this.mutations.filter((r) => r.state.isPaused);
          return Ke.batch(() => n.reduce((r, o) => r.then(() => o.continue().catch(Pt)), Promise.resolve()));
        })
        .then(() => {
          this.resuming = void 0;
        })),
      this.resuming
    );
  }
}
function t_() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, n, r, o, i, l;
        const s = (t = e.fetchOptions) == null || (n = t.meta) == null ? void 0 : n.refetchPage,
          a = (r = e.fetchOptions) == null || (o = r.meta) == null ? void 0 : o.fetchMore,
          u = a == null ? void 0 : a.pageParam,
          f = (a == null ? void 0 : a.direction) === 'forward',
          h = (a == null ? void 0 : a.direction) === 'backward',
          p = ((i = e.state.data) == null ? void 0 : i.pages) || [],
          v = ((l = e.state.data) == null ? void 0 : l.pageParams) || [];
        let g = v,
          m = !1;
        const w = (_) => {
            Object.defineProperty(_, 'signal', {
              enumerable: !0,
              get: () => {
                var x;
                if ((x = e.signal) != null && x.aborted) m = !0;
                else {
                  var k;
                  (k = e.signal) == null ||
                    k.addEventListener('abort', () => {
                      m = !0;
                    });
                }
                return e.signal;
              },
            });
          },
          c = e.options.queryFn || (() => Promise.reject('Missing queryFn')),
          d = (_, x, k, L) => ((g = L ? [x, ...g] : [...g, x]), L ? [k, ..._] : [..._, k]),
          y = (_, x, k, L) => {
            if (m) return Promise.reject('Cancelled');
            if (typeof k > 'u' && !x && _.length) return Promise.resolve(_);
            const N = { queryKey: e.queryKey, pageParam: k, meta: e.options.meta };
            w(N);
            const D = c(N);
            return Promise.resolve(D).then((b) => d(_, k, b, L));
          };
        let E;
        if (!p.length) E = y([]);
        else if (f) {
          const _ = typeof u < 'u',
            x = _ ? u : Ch(e.options, p);
          E = y(p, _, x);
        } else if (h) {
          const _ = typeof u < 'u',
            x = _ ? u : n_(e.options, p);
          E = y(p, _, x, !0);
        } else {
          g = [];
          const _ = typeof e.options.getNextPageParam > 'u';
          E = (s && p[0] ? s(p[0], 0, p) : !0) ? y([], _, v[0]) : Promise.resolve(d([], v[0], p[0]));
          for (let k = 1; k < p.length; k++)
            E = E.then((L) => {
              if (s && p[k] ? s(p[k], k, p) : !0) {
                const D = _ ? v[k] : Ch(e.options, L);
                return y(L, _, D);
              }
              return Promise.resolve(d(L, v[k], p[k]));
            });
        }
        return E.then((_) => ({ pages: _, pageParams: g }));
      };
    },
  };
}
function Ch(e, t) {
  return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function n_(e, t) {
  return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
class r_ {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new XC()),
      (this.mutationCache = t.mutationCache || new e_()),
      (this.logger = t.logger || af),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = ju.subscribe(() => {
          ju.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = ql.subscribe(() => {
          ql.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var t, n;
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (n = this.unsubscribeOnline) == null || n.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(t, n) {
    const [r] = pn(t, n);
    return (r.fetchStatus = 'fetching'), this.queryCache.findAll(r).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t, n, r) {
    const o = Qi(t, n, r),
      i = this.getQueryData(o.queryKey);
    return i ? Promise.resolve(i) : this.fetchQuery(o);
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: n, state: r }) => {
        const o = r.data;
        return [n, o];
      });
  }
  setQueryData(t, n, r) {
    const o = this.queryCache.find(t),
      i = o == null ? void 0 : o.state.data,
      l = UC(n, i);
    if (typeof l > 'u') return;
    const s = Qi(t),
      a = this.defaultQueryOptions(s);
    return this.queryCache.build(this, a).setData(l, { ...r, manual: !0 });
  }
  setQueriesData(t, n, r) {
    return Ke.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: o }) => [o, this.setQueryData(o, n, r)])
    );
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
  }
  removeQueries(t, n) {
    const [r] = pn(t, n),
      o = this.queryCache;
    Ke.batch(() => {
      o.findAll(r).forEach((i) => {
        o.remove(i);
      });
    });
  }
  resetQueries(t, n, r) {
    const [o, i] = pn(t, n, r),
      l = this.queryCache,
      s = { type: 'active', ...o };
    return Ke.batch(
      () => (
        l.findAll(o).forEach((a) => {
          a.reset();
        }),
        this.refetchQueries(s, i)
      )
    );
  }
  cancelQueries(t, n, r) {
    const [o, i = {}] = pn(t, n, r);
    typeof i.revert > 'u' && (i.revert = !0);
    const l = Ke.batch(() => this.queryCache.findAll(o).map((s) => s.cancel(i)));
    return Promise.all(l).then(Pt).catch(Pt);
  }
  invalidateQueries(t, n, r) {
    const [o, i] = pn(t, n, r);
    return Ke.batch(() => {
      var l, s;
      if (
        (this.queryCache.findAll(o).forEach((u) => {
          u.invalidate();
        }),
        o.refetchType === 'none')
      )
        return Promise.resolve();
      const a = { ...o, type: (l = (s = o.refetchType) != null ? s : o.type) != null ? l : 'active' };
      return this.refetchQueries(a, i);
    });
  }
  refetchQueries(t, n, r) {
    const [o, i] = pn(t, n, r),
      l = Ke.batch(() =>
        this.queryCache
          .findAll(o)
          .filter((a) => !a.isDisabled())
          .map((a) => {
            var u;
            return a.fetch(void 0, {
              ...i,
              cancelRefetch: (u = i == null ? void 0 : i.cancelRefetch) != null ? u : !0,
              meta: { refetchPage: o.refetchPage },
            });
          })
      );
    let s = Promise.all(l).then(Pt);
    return (i != null && i.throwOnError) || (s = s.catch(Pt)), s;
  }
  fetchQuery(t, n, r) {
    const o = Qi(t, n, r),
      i = this.defaultQueryOptions(o);
    typeof i.retry > 'u' && (i.retry = !1);
    const l = this.queryCache.build(this, i);
    return l.isStaleByTime(i.staleTime) ? l.fetch(i) : Promise.resolve(l.state.data);
  }
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(Pt).catch(Pt);
  }
  fetchInfiniteQuery(t, n, r) {
    const o = Qi(t, n, r);
    return (o.behavior = t_()), this.fetchQuery(o);
  }
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(Pt).catch(Pt);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, n) {
    const r = this.queryDefaults.find((o) => Wn(t) === Wn(o.queryKey));
    r ? (r.defaultOptions = n) : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const n = this.queryDefaults.find((r) => Kl(t, r.queryKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find((o) => Wn(t) === Wn(o.mutationKey));
    r ? (r.defaultOptions = n) : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const n = this.mutationDefaults.find((r) => Kl(t, r.mutationKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !n.queryHash && n.queryKey && (n.queryHash = lf(n.queryKey, n)),
      typeof n.refetchOnReconnect > 'u' && (n.refetchOnReconnect = n.networkMode !== 'always'),
      typeof n.useErrorBoundary > 'u' && (n.useErrorBoundary = !!n.suspense),
      n
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
const _h = S.createContext(void 0),
  o_ = S.createContext(!1);
function i_(e, t) {
  return (
    e ||
    (t && typeof window < 'u'
      ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = _h), window.ReactQueryClientContext)
      : _h)
  );
}
const l_ = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
    S.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    );
    const o = i_(n, r);
    return S.createElement(o_.Provider, { value: !n && r }, S.createElement(o.Provider, { value: e }, t));
  },
  s_ = function () {
    return null;
  };
'serviceWorker' in navigator &&
  window.addEventListener('load', () => {
    console.log('load sw production'), navigator.serviceWorker.register('/sw.js', { scope: '/' });
  });
const a_ = new r_({
  defaultOptions: {
    queries: {
      onError(e) {
        console.log({ err: e });
      },
    },
    mutations: {
      onError(e) {
        console.log({ err: e }, '전체 포괄 오류');
      },
    },
  },
});
$u.createRoot(document.getElementById('root')).render(
  A(_r.StrictMode, { children: He(l_, { client: a_, children: [A($C, {}), A(s_, { initialIsOpen: !1 })] }) })
);
export {
  rp as F,
  Sx as H,
  Lt as I,
  Jt as a,
  A as b,
  bn as c,
  y0 as d,
  dx as e,
  f_ as f,
  fx as g,
  mx as h,
  px as i,
  He as j,
  ng as k,
  c_ as l,
  d_ as m,
  we as n,
  u_ as o,
  ox as p,
  s0 as q,
  S as r,
  v0 as s,
  f0 as t,
  Ep as u,
  rf as v,
  a0 as w,
  Ex as x,
};
